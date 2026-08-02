import Link from "next/link";
import { ArrowUpRight, Globe2, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { dictionaries, isLocale } from "@/lib/i18n";

export function Footer({locale}:{locale:string}){
  const safeLocale=isLocale(locale)?locale:"en";
  const d=dictionaries[safeLocale];
  return <footer className="relative overflow-hidden bg-ink text-white">
    <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-ocean/30 blur-3xl" />
    <div className="container-shell relative grid gap-12 py-16 lg:grid-cols-[1.5fr_.8fr_.8fr_1fr] lg:py-20">
      <div><Logo locale={locale} inverse/><p className="mt-6 max-w-md text-sm leading-7 text-white/55">A trusted global B2B platform specialized in building practical trade connections between Türkiye, Chile and international markets.</p><Link href={`/${locale}/quote`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-aqua">{d.nav.quote}<ArrowUpRight size={16}/></Link></div>
      <div><b className="text-sm">Platform</b><div className="mt-5 grid gap-3 text-sm text-white/50"><Link href={`/${locale}/products`}>{d.nav.products}</Link><Link href={`/${locale}/suppliers`}>{d.nav.suppliers}</Link><Link href={`/${locale}/buyers`}>{d.nav.buyers}</Link><Link href={`/${locale}/blog`}>{d.nav.blog}</Link></div></div>
      <div><b className="text-sm">Company</b><div className="mt-5 grid gap-3 text-sm text-white/50"><Link href={`/${locale}/about`}>{d.nav.about}</Link><Link href={`/${locale}/services`}>{d.nav.services}</Link><Link href={`/${locale}/contact`}>{d.nav.contact}</Link><Link href={`/${locale}/quote`}>{d.nav.quote}</Link></div></div>
      <div><b className="text-sm">Global desk</b><div className="mt-5 space-y-3 text-sm text-white/50"><p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-aqua"/>Santiago · Istanbul</p><p className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-aqua"/>contact@hkotradehub.com</p><p className="flex gap-2"><Globe2 size={16} className="mt-0.5 shrink-0 text-aqua"/>Türkiye · Chile · Global</p></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} HKO Trade Hub. All rights reserved.</span><span>Built for trusted cross-border growth.</span></div></div>
  </footer>
}
