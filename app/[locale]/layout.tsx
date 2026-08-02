import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsApp } from "@/components/whatsapp";
import { LanguageWelcome } from "@/components/language-welcome";
import { isLocale } from "@/lib/i18n";
import type { Metadata } from "next";

const seo = {
  tr: { title: "HKO Trade Hub | Küresel B2B Ticaret Platformu", description: "Türkiye ve Şili arasında güvenilir tedarikçi bağlantıları, pazar araştırması, lojistik koordinasyonu ve sınır ötesi büyüme desteği." },
  en: { title: "HKO Trade Hub | Global B2B Trade Platform", description: "Trusted supplier connections, market intelligence, logistics coordination and cross-border growth support between Türkiye and Chile." },
  es: { title: "HKO Trade Hub | Plataforma Global de Comercio B2B", description: "Conexiones confiables de proveedores, inteligencia de mercado, coordinación logística y apoyo al crecimiento entre Türkiye y Chile." },
} as const;

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  if (!isLocale(locale)) return {};
  const current = seo[locale];
  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical: `https://hkotradehub.com/${locale}`,
      languages: { tr: "/tr", en: "/en", es: "/es", "x-default": "/en" },
    },
    openGraph: { title: current.title, description: current.description, locale: locale === "tr" ? "tr_TR" : locale === "es" ? "es_CL" : "en_US" },
  };
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  return <><LanguageWelcome/><Header locale={locale}/><main>{children}</main><Footer locale={locale}/><WhatsApp locale={locale}/></>;
}
