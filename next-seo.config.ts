import type { NextSeoProps } from 'next-seo';

const SEO: NextSeoProps = {
  titleTemplate: '%s | Nova Blog',
  defaultTitle: 'Nova Blog - Latest Articles and Insights',
  description: 'Discover the latest articles, insights, and stories on technology, design, and more at Nova Blog.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://nova-blog.vercel.app/',
    siteName: 'Nova Blog',
    images: [
      {
        url: 'https://nova-blog.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nova Blog',
      },
    ],
  },
  twitter: {
    handle: '@novablog',
    site: '@novablog',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

export default SEO;