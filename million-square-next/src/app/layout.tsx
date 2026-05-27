import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.millionsquaresolutions.com'),
  title: {
    default: 'Million Square Solutions | Dedicated Customer Success for Global SaaS',
    template: '%s | Million Square Solutions',
  },
  description:
    'Dedicated Customer Success Managers for global SaaS businesses. Reduce churn, improve NRR, and scale retention with AI-driven CS teams. Serving US, UK, Canada, UAE, Australia and New Zealand.',
  keywords: [
    'Customer Success as a Service',
    'Dedicated CSM',
    'Managed Customer Success',
    'Churn Reduction',
    'NRR Optimization',
    'SaaS Retention',
    'Customer Success Outsourcing',
    'B2B SaaS Customer Success',
  ],
  authors: [{ name: 'Balbir Singh', url: 'https://www.millionsquaresolutions.com' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.millionsquaresolutions.com' },
  openGraph: {
    type: 'website',
    url: 'https://www.millionsquaresolutions.com',
    title: 'Million Square Solutions | Dedicated Customer Success for Global SaaS',
    description:
      'Dedicated Customer Success Managers for global SaaS businesses. Reduce churn, improve NRR, and scale retention with AI-driven CS teams.',
    siteName: 'Million Square Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Million Square Solutions | Dedicated Customer Success for Global SaaS',
    description:
      'Dedicated Customer Success Managers for global SaaS businesses. Reduce churn, improve NRR, and scale retention with AI-driven CS teams.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Million Square Solutions',
  url: 'https://www.millionsquaresolutions.com',
  description:
    'Dedicated Customer Success Managers for global SaaS businesses across US, UK, Canada, UAE, Australia and New Zealand.',
  founder: {
    '@type': 'Person',
    name: 'Balbir Singh',
    jobTitle: 'Founder & Customer Success Leader',
    sameAs: 'https://www.linkedin.com/in/balbirsingh1990',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@millionsquaresolutions.com',
    contactType: 'Customer Service',
  },
  areaServed: ['US', 'GB', 'CA', 'AE', 'AU', 'NZ'],
  sameAs: ['https://www.linkedin.com/company/millionsquaresolutions/'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="s0YKxIfBB2zj3d71GumpJyq4oWaHyobyg_jClqxBNwU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}