"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

export const LANGUAGE_PREFERENCE_KEY = "hko_language";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function saveLanguagePreference(locale: Locale) {
  window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
  document.cookie = `${LANGUAGE_PREFERENCE_KEY}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

const languages: Array<{ code: Locale; name: string; region: string; symbol: string }> = [
  { code: "tr", name: "Türkçe", region: "Türkiye", symbol: "TR" },
  { code: "en", name: "English", region: "International", symbol: "EN" },
  { code: "es", name: "Español", region: "Chile", symbol: "ES" },
];
const copy={
 tr:{badge:"Küresel B2B Ticaret",title:"HKO Trade Hub’a Hoş Geldiniz",text:"Türkiye ve Şili arasındaki güvenilir ticaret fırsatlarını keşfetmek için dilinizi seçin.",choose:"Dilinizi seçin",continue:"Devam et",saved:"Tercihiniz bu cihazda kaydedilecektir."},
 en:{badge:"Global B2B Trade",title:"Welcome to HKO Trade Hub",text:"Choose your language to explore trusted trade opportunities between Turkey and Chile.",choose:"Choose your language",continue:"Continue",saved:"Your preference will be saved on this device."},
 es:{badge:"Comercio B2B Global",title:"Bienvenido a HKO Trade Hub",text:"Elija su idioma para explorar oportunidades comerciales confiables entre Turquía y Chile.",choose:"Elija su idioma",continue:"Continuar",saved:"Su preferencia se guardará en este dispositivo."}
} as const;

export function LanguageWelcome() {
  const router = useRouter();
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const pathLocale=pathname.match(/^\/(tr|en|es)(?:\/|$)/)?.[1] as Locale|undefined;
  const [selected, setSelected] = useState<Locale>(pathLocale||"en");
  const t=copy[selected];

  useEffect(() => {
    const previewRequested = new URLSearchParams(window.location.search).get("language") === "choose";
    const saved = window.localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
    if (previewRequested || (saved !== "tr" && saved !== "en" && saved !== "es")) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [visible]);

  function continueToSite() {
    saveLanguagePreference(selected);
    setVisible(false);
    router.replace(`/${selected}`);
  }

  return <AnimatePresence>{visible && (
    <motion.div
      className="fixed inset-0 z-[100] overflow-y-auto bg-ink text-white"
      initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      role="dialog" aria-modal="true" aria-labelledby="language-welcome-title"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-44 -top-48 h-[34rem] w-[34rem] rounded-full bg-ocean/70 blur-[120px]" />
        <div className="absolute -bottom-56 -right-40 h-[38rem] w-[38rem] rounded-full bg-copper/25 blur-[130px]" />
        <div className="absolute inset-0 opacity-[.07] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:28px_28px]" />
        <motion.div className="absolute left-[8%] right-[8%] top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-aqua/80 to-transparent" initial={reducedMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: .25 }} />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-5xl items-center px-5 py-10 sm:px-8 sm:py-14">
        <motion.div className="w-full" initial={reducedMotion ? false : { y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-9 flex items-center justify-center gap-3 sm:mb-12">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-aqua to-white font-bold text-ink shadow-[0_18px_50px_rgba(81,214,203,.2)]">HKO</div>
            <div><strong className="block text-lg leading-none">Trade Hub</strong><span className="text-[10px] uppercase tracking-[.24em] text-white/50">Türkiye · Turkey · Turquía · Chile</span></div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-aqua backdrop-blur"><Globe2 className="h-4 w-4" aria-hidden="true" /> Global B2B Trade · Küresel B2B Ticaret · Comercio B2B Global</div>
            <div id="language-welcome-title" className="space-y-1 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
              <span className="block">HKO Trade Hub’a Hoş Geldiniz</span>
              <span className="block">Welcome to HKO Trade Hub</span>
              <span className="block">Bienvenido a HKO Trade Hub</span>
            </div>
            <div className="mx-auto mt-5 max-w-xl space-y-1 text-sm leading-6 text-white/60 sm:text-base"><p>{copy.tr.text}</p><p>{copy.en.text}</p><p>{copy.es.text}</p></div>
          </div>

          <fieldset className="mx-auto mt-8 grid max-w-3xl gap-3 sm:mt-10 sm:grid-cols-3" aria-label={t.choose}>
            <legend className="sr-only">{t.choose}</legend>
            {languages.map((language, index) => {
              const active = selected === language.code;
              return <motion.button
                type="button" key={language.code} onClick={() => setSelected(language.code)} aria-pressed={active}
                className={`group relative flex min-h-24 items-center gap-4 rounded-2xl border p-4 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:min-h-36 sm:flex-col sm:items-start sm:justify-center ${active ? "border-aqua/70 bg-aqua/10 shadow-[inset_0_0_0_1px_rgba(81,214,203,.15)]" : "border-white/15 bg-white/[.055] hover:border-white/30 hover:bg-white/[.09]"}`}
                initial={reducedMotion ? false : { y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .16 + index * .08 }}
              >
                <span className={`grid h-11 w-11 place-items-center rounded-full border text-xs font-bold tracking-wider ${active ? "border-aqua/50 bg-aqua text-ink" : "border-white/15 bg-white/5 text-white/70"}`} aria-hidden="true">{language.symbol}</span>
                <span><span className="block text-base font-semibold">{language.name}</span><span className="mt-1 block text-xs text-white/45">{language.region}</span></span>
                {active && <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-aqua text-ink"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>}
              </motion.button>;
            })}
          </fieldset>

          <div className="mt-7 text-center">
            <button type="button" onClick={continueToSite} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-aqua px-8 py-3 text-sm font-semibold text-ink shadow-[0_14px_40px_rgba(81,214,203,.22)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink">{t.continue} <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
            <p className="mt-5 text-xs text-white/35">{t.saved}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )}</AnimatePresence>;
}
