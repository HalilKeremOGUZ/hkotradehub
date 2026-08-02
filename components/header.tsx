"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { dictionaries, type Locale } from "@/lib/i18n";
import { saveLanguagePreference } from "./language-welcome";

export function Header({locale}:{locale:Locale}){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const d=dictionaries[locale];
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>16);onScroll();window.addEventListener("scroll",onScroll);return()=>window.removeEventListener("scroll",onScroll)},[]);
  const items=[["",d.nav.home],["about",d.nav.about],["services",d.nav.services],["products",d.nav.products],["suppliers",d.nav.suppliers],["buyers",d.nav.buyers],["blog",d.nav.blog],["contact",d.nav.contact]] as const;
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled?"border-b border-ink/10 bg-white/95 shadow-[0_10px_40px_rgba(8,20,39,.06)] backdrop-blur-xl":"border-b border-ink/5 bg-white/85 backdrop-blur-lg"}`}>
    <div className="container-shell flex h-[112px] items-center justify-between">
      <Logo locale={locale}/>
      <nav className="hidden items-center gap-1 xl:flex">
        {items.map(([p,l])=><Link key={p} href={`/${locale}/${p}`} className="rounded-xl border-2 border-ink/15 bg-white px-2.5 py-2.5 text-[12px] font-extrabold text-ink shadow-[0_4px_14px_rgba(8,20,39,.08)] transition hover:-translate-y-0.5 hover:border-ocean/40 hover:bg-ocean/5 hover:text-ocean">{l}</Link>)}
        <Lang locale={locale}/>
        <Link href={`/${locale}/quote`} className="btn-primary !rounded-full !px-4 !py-3 text-[12px] font-bold shadow-lg">{d.nav.quote}</Link>
      </nav>
      <button className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 xl:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={locale==="tr"?"Menü":locale==="es"?"Menú":"Menu"}>{open?<X size={20}/>:<Menu size={20}/>}</button>
    </div>
    {open&&<div className="border-t border-ink/8 bg-white px-5 pb-6 xl:hidden">
      <div className="container-shell !px-0 pt-3">{items.map(([p,l])=><Link onClick={()=>setOpen(false)} key={p} href={`/${locale}/${p}`} className="block border-b border-ink/5 py-3.5 text-sm font-medium">{l}</Link>)}<div className="mt-5 flex items-center justify-between"><Lang locale={locale}/><Link onClick={()=>setOpen(false)} href={`/${locale}/quote`} className="btn-primary">{d.nav.quote}</Link></div></div>
    </div>}
  </header>
}
function Lang({locale}:{locale:Locale}){
  const pathname = usePathname();
  const selector=locale==="tr"?"Dil seçici":locale==="es"?"Selector de idioma":"Language selector";
  return <div className="relative flex items-center gap-1 rounded-full border border-ink/10 bg-white p-1" aria-label={selector}><span className="sr-only">{selector}</span>{(["tr","en","es"] as const).map(l=>{
    const href = pathname.replace(/^\/(tr|en|es)(?=\/|$)/, `/${l}`);
    const label = l === "tr" ? "Türkçe" : l === "en" ? "English" : "Español";
    return <Link onClick={()=>saveLanguagePreference(l)} aria-label={label} aria-current={l===locale?"page":undefined} className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper ${l===locale?"bg-ink text-white":"text-ink/45 hover:text-ink"}`} href={href} key={l}>{l}</Link>;
  })}<ChevronDown className="mr-1 text-ink/35" size={12} aria-hidden="true"/></div>
}
