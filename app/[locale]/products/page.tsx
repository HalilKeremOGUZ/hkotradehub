import {ProductCard} from "@/components/product-card";
import {PageHero} from "@/components/page-hero";
import {SparePartsHub} from "@/components/spare-parts-hub";
import {products} from "@/lib/data";
import {isLocale} from "@/lib/i18n";
import {notFound} from "next/navigation";
import Link from "next/link";
import {ArrowUpRight,Plus} from "lucide-react";

const copy={tr:{eyebrow:"Pazar Yeri",title:"Seçilmiş ticaret fırsatları",text:"Türkiye ve Şili'deki doğrulanmış iş ağlarından sağlanan ürün kategorilerini keşfedin.",customTitle:"Aradığınız Ürün Yok mu?",customText:"Listede olmayan bir ürün veya kategori için bize ulaşın.",customCta:"Özel talep oluştur"},en:{eyebrow:"Marketplace",title:"Selected trade opportunities",text:"Explore product categories sourced from verified business networks in Türkiye and Chile.",customTitle:"Can't Find What You Need?",customText:"Tell us about a product or category not listed here.",customCta:"Create a custom request"},es:{eyebrow:"Mercado",title:"Oportunidades comerciales seleccionadas",text:"Explore categorías de productos provenientes de redes empresariales verificadas en Türkiye y Chile.",customTitle:"¿No encuentra lo que busca?",customText:"Cuéntenos sobre un producto o categoría que no aparece aquí.",customCta:"Crear una solicitud"}} as const;

export default async function Page({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale))notFound();
  const t=copy[locale];
  const regularProducts=products.filter(p=>!p.slug.includes("spare-parts"));
  return <><PageHero eyebrow={t.eyebrow} title={t.title} text={t.text}/><section className="section"><div className="container-shell grid gap-7 md:grid-cols-2 lg:grid-cols-3">{regularProducts.map(p=><ProductCard product={p} locale={locale} key={p.slug}/>)}<SparePartsHub locale={locale}/><Link href={`/${locale}/quote`} className="group overflow-hidden rounded-[1.75rem] border border-dashed border-ocean/35 bg-mist p-6 shadow-sm transition hover:-translate-y-1.5 hover:border-ocean hover:bg-white hover:shadow-lg"><div className="grid h-60 place-items-center rounded-2xl bg-ocean/10 text-ocean transition group-hover:bg-ocean group-hover:text-white"><Plus size={48} strokeWidth={1.5}/></div><h3 className="mt-6 text-xl font-semibold tracking-tight">{t.customTitle}</h3><p className="mt-3 text-sm leading-6 text-ink/58">{t.customText}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean">{t.customCta}<ArrowUpRight size={16}/></span></Link></div></section></>;
}
