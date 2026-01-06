import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Branislav Family | Home",
    template: "%s | Branislav Family",
  },
  description:
    "Branislav Family - A loving family sharing our journey, traditions, and memories together. Explore our family tree, recipes, gallery, and stories.",
  keywords: [
    "Branislav family",
    "family website",
    "family photos",
    "family news",
    "family tree",
    "family recipes",
    "family blog",
  ],
  authors: [{ name: "Branislav Family" }],
  creator: "Branislav Family",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://branislavfamily.com",
    siteName: "Branislav Family",
    title: "Branislav Family | Home",
    description:
      "A loving family sharing our journey, traditions, and memories together",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Branislav Family",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branislav Family | Home",
    description:
      "A loving family sharing our journey, traditions, and memories together",
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Branislav Family",
              url: "https://branislavfamily.com",
              logo: "https://branislavfamily.com/logo.png",
              description:
                "A loving family sharing our journey, traditions, and memories together",
              sameAs: [
                "https://www.facebook.com/branislavfamily",
                "https://www.instagram.com/branislavfamily",
                "https://twitter.com/branislavfamily",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

