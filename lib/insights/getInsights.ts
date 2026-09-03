import 'server-only'
import type { PortableTextBlock } from 'next-sanity'
import type { Image as SanityImage } from 'sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { categoryImage } from '@/lib/insights/categoryImages'

/**
 * Cover image for an article: the editor's own upload if there is one, else the
 * curated per-category image.
 *
 * The category fallback exists for the bi-weekly bot, which has no image to
 * supply. But `post.mainImage` was in the schema and read by nothing — an
 * editor could upload a cover in the Studio and it would be silently discarded.
 * A hand-written article deserves its own image; a generated one still gets a
 * sensible default.
 */
function coverImage(mainImage: SanityImage | null | undefined, category?: string | null): string {
  if (mainImage?.asset) {
    try {
      return urlForImage(mainImage).width(1200).height(675).fit('crop').url()
    } catch {
      // A malformed asset ref should degrade to the category image, not 500 the
      // whole Insights list.
    }
  }
  return categoryImage(category)
}

// ─── Shapes consumed by the Insights pages ──────────────────────────────────

export interface InsightListItem {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string // formatted "Month YYYY"
  image: string
  featured: boolean
}

export interface InsightArticle extends InsightListItem {
  readTime: string
  body: PortableTextBlock[]
  sources: { title?: string; url?: string }[]
  seoTitle?: string
  seoDescription?: string
}

// Only published posts (publishedAt set and in the past). Drafts (drafts.*) are
// excluded automatically by the read client's "published" perspective.
const LIST_QUERY = `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]
  | order(publishedAt desc) {
    "slug": slug.current,
    title,
    "category": coalesce(category, "Integration"),
    "excerpt": coalesce(excerpt, ""),
    publishedAt,
    mainImage
  }`

const ARTICLE_QUERY = `*[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0]{
    "slug": slug.current,
    title,
    "category": coalesce(category, "Integration"),
    "excerpt": coalesce(excerpt, ""),
    publishedAt,
    "readTime": coalesce(readTime, "5 min read"),
    mainImage,
    body,
    "sources": coalesce(sources, []),
    seoTitle,
    seoDescription
  }`

function formatDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })
}

/** Published posts, newest first. The newest is marked `featured`. */
export async function getInsightList(): Promise<InsightListItem[]> {
  const rows = await client.fetch<
    {
      slug: string
      title: string
      category: string
      excerpt: string
      publishedAt: string
      mainImage?: SanityImage
    }[]
  >(LIST_QUERY, {}, { next: { revalidate: 600, tags: ['insights'] } })

  return rows.map((r, i) => ({
    slug: r.slug,
    title: r.title,
    category: r.category,
    excerpt: r.excerpt,
    date: formatDate(r.publishedAt),
    image: coverImage(r.mainImage, r.category),
    featured: i === 0,
  }))
}

export async function getInsightBySlug(slug: string): Promise<InsightArticle | null> {
  const r = await client.fetch<{
    slug: string
    title: string
    category: string
    excerpt: string
    publishedAt: string
    readTime: string
    mainImage?: SanityImage
    body: PortableTextBlock[]
    sources: { title?: string; url?: string }[]
    seoTitle?: string
    seoDescription?: string
  } | null>(ARTICLE_QUERY, { slug }, { next: { revalidate: 600, tags: ['insights'] } })

  if (!r) return null
  return {
    slug: r.slug,
    title: r.title,
    category: r.category,
    excerpt: r.excerpt,
    date: formatDate(r.publishedAt),
    image: coverImage(r.mainImage, r.category),
    featured: false,
    readTime: r.readTime,
    body: r.body ?? [],
    sources: r.sources ?? [],
    seoTitle: r.seoTitle,
    seoDescription: r.seoDescription,
  }
}

/** Slugs for generateStaticParams. */
export async function getInsightSlugs(): Promise<string[]> {
  const rows = await client.fetch<{ slug: string }[]>(
    `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()]{ "slug": slug.current }`,
    {},
    { next: { revalidate: 600, tags: ['insights'] } },
  )
  return rows.map((r) => r.slug)
}
