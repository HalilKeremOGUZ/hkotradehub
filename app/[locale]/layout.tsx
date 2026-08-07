import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageWelcome } from "@/components/language-welcome";
import { isLocale } from "@/lib/i18n";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getLocalizedMetadata } from "@/lib/seo";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  if (!isLocale(locale)) return {};
  const pathname = (await headers()).get("x-hko-path") || `/${locale}`;
  return getLocalizedMetadata(locale, pathname);
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  return <><LanguageWelcome/><Header locale={locale}/><main>{children}</main><Footer locale={locale}/></>;
}
