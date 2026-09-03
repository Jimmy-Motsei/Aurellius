import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { escapeHtml, escapeHtmlPreserveBreaks } from '@/lib/security'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { buildWhatsAppLink, WHATSAPP_DISPLAY } from '@/lib/whatsapp'

const BREVO_API = 'https://api.brevo.com/v3'

const contactSchema = z.object({
  firstName:      z.string().trim().min(1).max(50),
  lastName:       z.string().trim().min(1).max(50),
  business:       z.string().trim().min(1).max(200),
  email:          z.string().trim().email().max(255),
  whatsapp:       z.string().trim().min(10).max(30).optional().or(z.literal('')),
  service:        z.string().trim().min(1).max(100),
  message:        z.string().trim().max(3000).optional().or(z.literal('')),
  referral:       z.string().trim().max(100).optional().or(z.literal('')),
  recaptchaToken: z.string().optional(),
})

async function getOrCreateListId(name: string, apiKey: string): Promise<number | null> {
  try {
    const res = await fetch(`${BREVO_API}/contacts/lists?limit=50`, {
      headers: { 'api-key': apiKey },
    })
    if (!res.ok) return null
    const data = await res.json()
    const found = (data.lists ?? []).find((l: { id: number; name: string }) => l.name === name)
    if (found) return found.id

    const create = await fetch(`${BREVO_API}/contacts/lists`, {
      method:  'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
      body:    JSON.stringify({ name, folderId: 1 }),
    })
    if (!create.ok) return null
    const created = await create.json()
    return created.id ?? null
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const parsed = contactSchema.safeParse(await request.json())

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 })
    }

    const { firstName, lastName, business, email, whatsapp, service, message, referral, recaptchaToken } = parsed.data

    const captcha = await verifyRecaptcha(recaptchaToken ?? '')
    if (!captcha.ok) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 })
    }
    const fullName = `${firstName} ${lastName}`

    const safeFirst    = escapeHtml(firstName)
    const safeLast     = escapeHtml(lastName)
    const safeName     = escapeHtml(fullName)
    const safeBusiness = escapeHtml(business)
    const safeEmail    = escapeHtml(email)
    const safeWhatsapp = whatsapp ? escapeHtml(whatsapp) : ''
    const safeService  = escapeHtml(service)
    const safeMessage  = message  ? escapeHtmlPreserveBreaks(message)  : ''
    const safeReferral = referral ? escapeHtml(referral) : ''

    const apiKey      = process.env.BREVO_API_KEY!
    const senderEmail = process.env.BREVO_SENDER_EMAIL || 'jimmymotsei@gmail.com'
    const senderName  = process.env.BREVO_SENDER_NAME  || 'Maru Online'
    const notifyTo    = [
      { email: process.env.NOTIFICATION_EMAIL   || 'jimmyM@maruonline.com', name: 'Jimmy Motsei' },
      { email: process.env.NOTIFICATION_EMAIL_2 || 'hello@maruonline.com',  name: 'Maru Online' },
    ]

    // 1. Add / update contact in Brevo
    const listId = await getOrCreateListId('Maru Website Contacts', apiKey)
    const contactBody: Record<string, unknown> = {
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME:  lastName,
        ...(whatsapp ? { SMS: whatsapp } : {}),
        COMPANY:   business,
      },
      updateEnabled: true,
    }
    if (listId) contactBody.listIds = [listId]

    await fetch(`${BREVO_API}/contacts`, {
      method:  'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
      body:    JSON.stringify(contactBody),
    })

    // 2. Notification email to Jimmy
    const row = (label: string, value: string) => value ? `
      <tr style="border-bottom:1px solid #E2E8F0">
        <td style="padding:12px 0;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#718096;width:28%;vertical-align:top">${label}</td>
        <td style="padding:12px 0;font-size:15px;color:#0D1B2A;line-height:1.7">${value}</td>
      </tr>` : ''

    const notifyRes = await fetch(`${BREVO_API}/smtp/email`, {
      method:  'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify({
        sender:  { name: senderName, email: senderEmail },
        to:      notifyTo,
        replyTo: { email, name: fullName },
        subject: `New enquiry — ${safeName} · ${safeBusiness}`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0D1B2A">
            <div style="background:#1A3A5C;padding:28px 40px;border-radius:8px 8px 0 0">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#3DB8C6">
                Maru Online — Website Enquiry
              </p>
            </div>
            <div style="background:#F5F4F0;padding:32px 40px;border-radius:0 0 8px 8px;border:1px solid #E2E8F0;border-top:none">
              <table style="width:100%;border-collapse:collapse">
                ${row('First Name', safeFirst)}
                ${row('Last Name',  safeLast)}
                ${row('Business', safeBusiness)}
                ${row('Email',    `<a href="mailto:${safeEmail}" style="color:#3DB8C6">${safeEmail}</a>`)}
                ${safeWhatsapp ? row('WhatsApp', `<a href="https://wa.me/${safeWhatsapp.replace(/\D/g,'')}" style="color:#3DB8C6">${safeWhatsapp}</a>`) : ''}
                ${row('Service',  safeService)}
                ${safeMessage  ? row('Message',  safeMessage)  : ''}
                ${safeReferral ? row('Referred via', safeReferral) : ''}
              </table>
            </div>
          </div>
        `,
      }),
    })

    if (!notifyRes.ok) {
      const err = await notifyRes.json()
      console.error('Brevo notification error:', err)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    // 3. Auto-reply to submitter
    await fetch(`${BREVO_API}/smtp/email`, {
      method:  'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify({
        sender:  { name: senderName, email: senderEmail },
        to:      [{ email, name: fullName }],
        subject: `We received your message — Maru Online`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0D1B2A">
            <div style="background:#1A3A5C;padding:28px 40px;border-radius:8px 8px 0 0">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#3DB8C6">
                Maru Online
              </p>
            </div>
            <div style="background:#F5F4F0;padding:32px 40px;border-radius:0 0 8px 8px;border:1px solid #E2E8F0;border-top:none">
              <p style="font-size:17px;color:#0D1B2A;margin:0 0 16px">Hi ${safeFirst},</p>
              <p style="font-size:15px;color:#4A5568;line-height:1.8;margin:0 0 16px">
                Thanks for reaching out. We've received your enquiry about
                <strong>${safeService}</strong> and someone from the Maru Online team
                will be in touch within <strong>1 business day</strong>.
              </p>
              <p style="font-size:15px;color:#4A5568;line-height:1.8;margin:0 0 24px">
                In the meantime, feel free to WhatsApp us directly on
                <a href="${buildWhatsAppLink('/contact')}" style="color:#3DB8C6">${WHATSAPP_DISPLAY}</a>
                if it's urgent.
              </p>
              <p style="font-size:14px;color:#718096;margin:0">
                — The Maru Online Team<br>
                <a href="https://maruonline.com" style="color:#3DB8C6">maruonline.com</a>
              </p>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
