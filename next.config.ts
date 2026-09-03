
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // www → apex. www.maruonline.com had a CNAME to Vercel but no certificate
      // until 4 Aug 2026, so it failed TLS outright; adding it to the project
      // issued the cert but left it serving 200, i.e. a second copy of the whole
      // site. The apex is what we canonicalise and sitemap, so www redirects to
      // it. (T9)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.maruonline.com' }],
        destination: 'https://maruonline.com/:path*',
        permanent: true,
      },
      // Legacy static-site pages (~42% of recorded GA views were bot-hammered
      // .html URLs from the retired site) — permanent redirect to real routes
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Pre-migration article URLs from the retired static site. Both were live
      // 404s until Sep 2026 and were still taking real traffic — the Next.js
      // migration shipped without 301s for them. They point at
      // /operations-assessment, not /insights: the planned articles cover
      // BEE/ESD, not AI regulation or adoption, so they are not a like-for-like
      // replacement and the topical mismatch would just bounce.
      //
      // The .html variants are listed explicitly and MUST stay above the generic
      // `/:path(.+)\\.html` rule below. Redirects are evaluated in array order,
      // so without these the .html form would first rewrite to the extensionless
      // form and only then redirect again — a two-hop chain that dilutes the
      // signal. Listed here, each is a single hop.
      //
      // These emit 308, not 301: that is what Next.js `permanent: true`
      // produces, and search engines treat the two identically.
      {
        source: '/ai-regulation-human-security-south-africa',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-regulation-human-security-south-africa.html',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-adoption-south-african-smbs',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-adoption-south-african-smbs.html',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/:path(.+)\\.html',
        destination: '/:path',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/knowledge',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/knowledge/:path*',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/operations-diagnostic',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-readiness',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-implementation-assessment',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-implementation-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      // Short URLs that used to be vercel.json rewrites into /assessments/*.
      // Those routes no longer exist, so the rewrites resolved to nothing —
      // these are redirects now, not internal rewrites. (T7)
      {
        source: '/lead-score',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/pipeline-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/proposal-generator',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/tech-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      // Consolidated scoring tools
      {
        source: '/assessments/lead-score',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/assessments/pipeline-leak',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/assessments/tech-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/assessments/proposal',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/website-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      // Consolidated services
      {
        source: '/services/ai-revenue-diagnostic',
        destination: '/services/operations-diagnostic',
        permanent: true,
      },
      {
        source: '/services/ai-training-capability-building',
        destination: '/services/team-training-handover',
        permanent: true,
      },
      {
        source: '/services/custom-ai-solution-build',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/customer-support-chatbots',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/lead-generation',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/office-automation',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/ongoing-ai-support-optimization',
        destination: '/services/results-optimisation',
        permanent: true,
      },
      {
        source: '/services/sales-systems',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/whatsapp-solutions',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      // Consolidated briefing and admin
      {
        source: '/briefing',
        destination: 'https://maru-briefing-forms.netlify.app',
        permanent: false,
      },
      {
        source: '/briefing/:path*',
        destination: 'https://maru-briefing-forms.netlify.app',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
