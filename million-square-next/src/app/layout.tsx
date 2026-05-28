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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.millionsquaresolutions.com' },
  openGraph: {
    type: 'website',
    url: 'https://www.millionsquaresolutions.com',
    title: 'Million Square Solutions | Dedicated Customer Success for Global SaaS',
    description:
      'Dedicated Customer Success Managers for global SaaS businesses. Reduce churn, improve NRR, and scale retention with AI-driven CS teams.',
    siteName: 'Million Square Solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Million Square Solutions | Dedicated Customer Success for Global SaaS',
    description:
      'Dedicated Customer Success Managers for global SaaS businesses. Reduce churn, improve NRR, and scale retention with AI-driven CS teams.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Million Square Solutions',
  url: 'https://www.millionsquaresolutions.com',
  logo: 'https://www.millionsquaresolutions.com/favicon.ico',
  description: 'Dedicated Customer Success Managers for global SaaS businesses across US, UK, Canada, UAE, Australia and New Zealand. We reduce churn, improve NRR, and scale customer success operations.',
  founder: {
    '@type': 'Person',
    name: 'Balbir Singh',
    jobTitle: 'Founder & Customer Success Leader',
    sameAs: 'https://www.linkedin.com/in/balbirsingh1990',
    knowsAbout: ['Customer Success', 'SaaS Retention', 'Churn Reduction', 'NRR Optimization'],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@millionsquaresolutions.com',
    telephone: '+91-9811813137',
    contactType: 'Customer Service',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  areaServed: ['US', 'GB', 'CA', 'AE', 'AU', 'NZ'],
  sameAs: [
    'https://www.linkedin.com/company/millionsquaresolutions/',
    'https://www.linkedin.com/in/balbirsingh1990',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Customer Success Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed CSM Teams', description: 'Dedicated Customer Success Managers managing 30-35 accounts each for SaaS businesses globally.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Churn Prevention Systems', description: 'AI-powered churn prediction and prevention frameworks to protect recurring revenue.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NRR Optimization', description: 'Net Revenue Retention improvement through proactive expansion and renewal strategies.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Architecture', description: 'HubSpot and Salesforce customer success workflow design and implementation.' } },
    ],
  },
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