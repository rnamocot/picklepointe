import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { JsonLd, QuickContact } from "@/components/ui";
import { localBusinessSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pickle Pointe | Indoor Pickleball Courts in Trece Martires, Cavite",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  category: "Sports",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Pickle Pointe | Indoor Pickleball Courts in Trece Martires, Cavite",
    description: site.description,
    locale: "en_PH",
    images: [
      {
        url: "/images/pickle-pointe-facility-exterior.jpg",
        width: 1800,
        height: 1012,
        alt: "Pickle Pointe indoor pickleball facility exterior in Trece Martires, Cavite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pickle Pointe | Indoor Pickleball in Cavite",
    description: site.description,
    images: ["/images/pickle-pointe-facility-exterior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuickContact />
        <RevealObserver />
      </body>
    </html>
  );
}
