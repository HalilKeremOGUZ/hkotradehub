"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, BarChart3, Globe2, PackageSearch, Sparkles } from "lucide-react";
import { products } from "@/lib/data";
import type { Locale } from "@/lib/i18n";
import { ProductCard } from "./product-card";

type Market = "all" | "turkiye" | "chile";

const copy = {
  tr: {
    all: "Tüm fırsatlar", turkiye: "Türkiye çıkışlı", chile: "Şili çıkışlı",
    count: "aktif fırsat", sectors: "öncelikli sektör", markets: "bağlantılı pazar",
    verified: "Ön değerlendirmeden geçmiş", current: "Güncel ticaret odağı", scalable: "Ölçeklenebilir talepler",
    result: "Seçiminize uygun fırsatlar", viewAll: "Tüm ürünleri görüntüle",
    customTitle: "Aradığınız fırsatı göremediniz mi?", customText: "Ürün, hedef pazar ve miktar ihtiyacınızı paylaşın; ekibimiz size özel tedarik veya alıcı araştırması başlatsın.",
    request: "Özel fırsat talebi oluştur", note: "Yeni fırsatlar düzenli olarak eklenir. Ticari uygunluk, miktar ve teslim koşullarına göre ayrıca değerlendirilir."
  },
  en: {
    all: "All opportunities", turkiye: "From Turkey", chile: "From Chile",
    count: "active opportunities", sectors: "priority sectors", markets: "connected markets",
    verified: "Pre-screened", current: "Current trade focus", scalable: "Scalable requirements",
    result: "Opportunities matching your selection", viewAll: "View all products",
    customTitle: "Can’t find the opportunity you need?", customText: "Share your product, target market and volume. Our team will begin a tailored supplier or buyer search.",
    request: "Create a custom opportunity", note: "New opportunities are added regularly. Commercial fit is assessed separately based on volume and delivery terms."
  },
  es: {
    all: "Todas las oportunidades", turkiye: "Desde Turquía", chile: "Desde Chile",
    count: "oportunidades activas", sectors: "sectores prioritarios", markets: "mercados conectados",
    verified: "Preseleccionadas", current: "Enfoque comercial actual", scalable: "Necesidades escalables",
    result: "Oportunidades según su selección", viewAll: "Ver todos los productos",
    customTitle: "¿No encuentra la oportunidad que busca?", customText: "Comparta su producto, mercado objetivo y volumen. Nuestro equipo iniciará una búsqueda personalizada de proveedores o compradores.",
    request: "Crear oportunidad personalizada", note: "Se agregan nuevas oportunidades regularmente. La viabilidad se evalúa según volumen y condiciones de entrega."
  }
} as const;

export function OpportunityExplorer({ locale }: { locale: Locale }) {
  const [market, setMarket] = useState<Market>("all");
  const t = copy[locale];
  const filtered = useMemo(() => products.filter((product) => {
    if (market === "all") return true;
    if (market === "chile") return product.origin === "Chile";
    return product.origin !== "Chile";
  }), [market]);

  const filters: Array<{ id: Market; label: string }> = [
    { id: "all", label: t.all }, { id: "turkiye", label: t.turkiye }, { id: "chile", label: t.chile }
  ];

  return <div className="mt-12">
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-ink text-white shadow-[0_28px_80px_rgba(8,20,39,.16)]">
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.result}>
            {filters.map((filter) => <button key={filter.id} type="button" onClick={() => setMarket(filter.id)} aria-pressed={market === filter.id} className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua ${market === filter.id ? "border-aqua bg-aqua text-ink" : "border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:text-white"}`}>{filter.label}</button>)}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
            <span className="flex items-center gap-2"><BadgeCheck className="text-aqua" size={16} />{t.verified}</span>
            <span className="flex items-center gap-2"><BarChart3 className="text-aqua" size={16} />{t.current}</span>
            <span className="flex items-center gap-2"><Globe2 className="text-aqua" size={16} />{t.scalable}</span>
          </div>
        </div>
        <div className="relative grid grid-cols-3 gap-3 lg:min-w-[360px]">
          <Metric value={String(filtered.length).padStart(2, "0")} label={t.count} />
          <Metric value="06" label={t.sectors} />
          <Metric value="12+" label={t.markets} />
        </div>
      </div>
    </div>

    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean/10 text-ocean"><PackageSearch size={20} /></span><div><p className="text-sm font-semibold">{t.result}</p><p className="text-xs text-ink/45">{filtered.length} {t.count}</p></div></div>
      <Link href={`/${locale}/products`} className="inline-flex items-center gap-2 text-sm font-semibold text-ocean transition hover:text-copper">{t.viewAll}<ArrowRight size={17} /></Link>
    </div>

    <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}
    </div>

    <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-copper/20 bg-white lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="p-7 sm:p-9"><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.22em] text-copper"><Sparkles size={15} />HKO Opportunity Desk</p><h3 className="mt-4 text-2xl font-semibold tracking-tight">{t.customTitle}</h3><p className="mt-3 max-w-3xl text-sm leading-7 text-ink/55">{t.customText}</p><p className="mt-4 text-xs leading-5 text-ink/38">{t.note}</p></div>
      <div className="border-t border-ink/8 p-7 lg:border-l lg:border-t-0 lg:p-9"><Link href={`/${locale}/quote`} className="btn-primary whitespace-nowrap gap-2">{t.request}<ArrowRight size={17} /></Link></div>
    </div>
  </div>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur"><strong className="block text-xl text-aqua sm:text-2xl">{value}</strong><span className="mt-1 block text-[10px] leading-4 text-white/45">{label}</span></div>;
}
