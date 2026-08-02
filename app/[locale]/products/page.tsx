import {ProductCard} from "@/components/product-card";
import {PageHero} from "@/components/page-hero";
import {products} from "@/lib/data";
import {isLocale} from "@/lib/i18n";
import {notFound} from "next/navigation";

const copy={
  tr:{eyebrow:"Pazar Yeri",title:"Seçilmiş ticaret fırsatları",text:"Türkiye ve Şili'deki doğrulanmış iş ağlarından sağlanan ürün kategorilerini keşfedin.",spareParts:"Yedek Parçalar"},
  en:{eyebrow:"Marketplace",title:"Selected trade opportunities",text:"Explore product categories sourced from verified business networks in Türkiye and Chile.",spareParts:"Spare Parts"},
  es:{eyebrow:"Mercado",title:"Oportunidades comerciales seleccionadas",text:"Explore categorías de productos provenientes de redes empresariales verificadas en Türkiye y Chile.",spareParts:"Repuestos"}
} as const;

const sparePartSlugs=["automotive-spare-parts","truck-spare-parts","heavy-machinery-spare-parts"];

export default async function Page({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale))notFound();
  const t=copy[locale];
  const spareParts=products.filter(p=>sparePartSlugs.includes(p.slug));
  const otherProducts=products.filter(p=>!sparePartSlugs.includes(p.slug));
  return <>
    <PageHero eyebrow={t.eyebrow} title={t.title} text={t.text}/>
    <section className="section">
      <div className="container-shell">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{otherProducts.map(p=><ProductCard product={p} locale={locale} key={p.slug}/>)}</div>
        <div className="mt-20 border-t border-ink/10 pt-12">
          <div className="mb-8 flex items-end justify-between gap-4"><h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{t.spareParts}</h2><span className="text-sm text-ink/45">{spareParts.length}</span></div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{spareParts.map(p=><ProductCard product={p} locale={locale} key={p.slug}/>)}</div>
        </div>
      </div>
    </section>
  </>;
}
