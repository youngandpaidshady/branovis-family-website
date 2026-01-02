import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { PageTransition } from '@/components/providers/PageTransition';
import { generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Legacy Family | Heritage, Tradition, Excellence',
    template: '%s | Legacy Family',
  },
  description:
    'A private digital chronicle of heritage, legacy, and family excellence. Discover our journey through generations of tradition, values, and achievement.',
  keywords: [
    'family legacy',
    'heritage',
    'family tree',
    'generational wealth',
    'family history',
    'private family website',
  ],
  authors: [{ name: 'Legacy Family' }],
  creator: 'Legacy Family',
  publisher: 'Legacy Family',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Legacy Family',
    title: 'Legacy Family | Heritage, Tradition, Excellence',
    description:
      'A private digital chronicle of heritage, legacy, and family excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Legacy Family',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Family | Heritage, Tradition, Excellence',
    description:
      'A private digital chronicle of heritage, legacy, and family excellence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <Navigation />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

