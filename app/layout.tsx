import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "HKO Trade Hub",
  title: { default: "HKO Trade Hub | Turkey–Chile B2B Trade", template: "%s | HKO Trade Hub" },
  description: "HKO Trade Hub at hkotradehub.com is a B2B sourcing and international trade platform connecting companies in Turkey, Chile and global markets.",
  keywords: ["HKO Trade Hub", "HKOTradeHub", "hkotradehub", "hkotradehub.com", "HKO trade hub", "Turkey Chile trade", "Turkish suppliers", "Chile import export", "B2B sourcing", "international trade hub"],
  creator: "HKO Trade Hub",
  publisher: "HKO Trade Hub",
  category: "International Trade",
  openGraph: {
    title: "HKO Trade Hub | Turkey–Chile B2B Trade",
    description: "HKO Trade Hub connects buyers, suppliers and international trade opportunities between Turkey, Chile and global markets.",
    url: SITE_URL,
    siteName: "HKO Trade Hub",
    type: "website",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "HKO Trade Hub - Turkey Chile B2B Trade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HKO Trade Hub",
    description: "Turkey–Chile B2B sourcing, import-export and international trade solutions from hkotradehub.com.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await headers()).get("x-hko-locale") || "tr";
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "HKO Trade Hub",
    alternateName: ["HKOTradeHub", "hkotradehub", "HKO Trade Hub - hkotradehub.com"],
    identifier: "hkotradehub.com",
    url: SITE_URL,
    logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: `${SITE_URL}/hko-trade-hub-logo.png`, contentUrl: `${SITE_URL}/hko-trade-hub-logo.png`, caption: "HKO Trade Hub" },
    image: { "@id": `${SITE_URL}/#logo` },
    email: "sourcing@hkotradehub.com",
    slogan: "Connecting Global Markets with Trusted Trade Solutions",
    description: "HKO Trade Hub is the B2B sourcing and international trade brand of hkotradehub.com, specialized in Turkey–Chile trade, supplier sourcing, buyer matching and global business development.",
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Place", name: "International markets" },
    ],
    knowsAbout: ["Import and export", "B2B sourcing", "Supplier verification", "Buyer matching", "Market research", "International logistics", "Turkey-Chile trade", "Turkish suppliers", "Chile importers"],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales and sourcing", email: "sourcing@hkotradehub.com", availableLanguage: ["Turkish", "English", "Spanish"] },
    ],
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "HKO Trade Hub",
        alternateName: ["HKOTradeHub", "hkotradehub", "hkotradehub.com"],
        url: SITE_URL,
        description: "Official website of HKO Trade Hub, a Turkey–Chile focused B2B sourcing and international trade platform.",
        inLanguage: ["tr", "en", "es"],
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#trade-service`,
        name: "HKO Trade Hub International B2B Sourcing and Trade Facilitation",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Türkiye", "Chile", "International"],
        serviceType: ["Supplier sourcing", "Buyer matching", "Market research", "Logistics coordination", "Trade facilitation"],
        url: `${SITE_URL}/${locale}/services`,
      },
    ],
  };
  return (
    <html lang={locale}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
