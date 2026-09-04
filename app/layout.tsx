import type { Metadata } from "next";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "HKO Trade Hub",
  title: { default: "HKO Trade Hub | Global B2B Trade Platform", template: "%s | HKO Trade Hub" },
  description: "A trusted global B2B platform specialized in Turkey–Chile trade, supplier sourcing, market intelligence, logistics coordination and cross-border growth.",
  keywords: ["B2B trade platform", "Turkey Chile trade", "Turkish suppliers", "Chile import export", "international sourcing", "import export", "trade facilitation"],
  creator: "HKO Trade Hub",
  publisher: "HKO Trade Hub",
  category: "International Trade",
  openGraph: {
    title: "HKO Trade Hub | Global B2B Trade Platform",
    description: "Connecting global markets with trusted trade solutions.",
    url: SITE_URL,
    siteName: "HKO Trade Hub",
    type: "website",
    locale: "en_US",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "HKO Trade Hub - Turkey Chile B2B Trade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HKO Trade Hub",
    description: "Connecting global markets with trusted trade solutions.",
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
    alternateName: ["HKOTradeHub", "hkotradehub"],
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/hko-trade-hub-logo.png` },
    email: "sourcing@hkotradehub.com",
    description: "B2B trade platform specialized in Turkey–Chile trade, international sourcing and cross-border business development.",
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "Country", name: "Chile" },
    ],
    knowsAbout: ["Import and export", "B2B sourcing", "Supplier verification", "Market research", "International logistics", "Turkey-Chile trade"],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", email: "sourcing@hkotradehub.com", availableLanguage: ["Turkish", "English", "Spanish"] },
      { "@type": "ContactPoint", contactType: "customer support", email: "contact@hkotradehub.com", availableLanguage: ["Turkish", "English", "Spanish"] },
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
        alternateName: ["HKOTradeHub", "hkotradehub"],
        url: SITE_URL,
        inLanguage: ["tr", "en", "es"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#trade-service`,
        name: "International B2B Sourcing and Trade Facilitation",
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
