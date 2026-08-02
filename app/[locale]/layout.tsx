import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsApp } from "@/components/whatsapp";
import { LanguageWelcome } from "@/components/language-welcome";
import { isLocale } from "@/lib/i18n";

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  return <><LanguageWelcome/><Header locale={locale}/><main>{children}</main><Footer locale={locale}/><WhatsApp/></>;
}
