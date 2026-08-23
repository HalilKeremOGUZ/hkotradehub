import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { isLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

const pages = {
  es: {
    "importar-desde-turquia-a-chile": { title:"Importar desde Turquía a Chile", description:"Guía comercial para importar desde Turquía a Chile: búsqueda de proveedores, cotización, verificación, logística y coordinación comercial.", h1:"Importar desde Turquía a Chile", intro:"Conectamos compradores chilenos con proveedores y fabricantes en Turquía y apoyamos el proceso desde la búsqueda hasta la coordinación comercial.", items:["Búsqueda de proveedores y fabricantes en Turquía","Verificación comercial y solicitud de cotizaciones","Comparación de alternativas y condiciones de compra","Coordinación de documentación y logística internacional"], cta:"Solicitar búsqueda de proveedor" },
    "proveedores-en-turquia": { title:"Proveedores y fabricantes en Turquía", description:"Encuentre proveedores y fabricantes en Turquía para maquinaria, repuestos, automotriz, construcción, alimentos y equipos industriales.", h1:"Proveedores y fabricantes en Turquía", intro:"HKO Trade Hub ayuda a empresas chilenas a identificar proveedores turcos adecuados para sus necesidades de importación.", items:["Maquinaria y equipos industriales","Repuestos y autopartes","Materiales de construcción","Alimentos, aceite de oliva y productos agrícolas"], cta:"Buscar un proveedor" },
    "maquinaria-turca": { title:"Maquinaria turca para Chile", description:"Sourcing de maquinaria turca, equipos industriales y fabricantes de maquinaria en Turquía para compradores en Chile.", h1:"Maquinaria turca para Chile", intro:"Identificamos fabricantes y proveedores de maquinaria en Turquía para proyectos industriales, construcción, agricultura y otras aplicaciones.", items:["Maquinaria industrial","Maquinaria de construcción","Equipos agrícolas","Equipos y componentes para proyectos"], cta:"Solicitar cotización de maquinaria" },
    "repuestos-turquia": { title:"Repuestos desde Turquía para Chile", description:"Proveedores de repuestos, autopartes y componentes industriales en Turquía para importadores y empresas chilenas.", h1:"Repuestos desde Turquía", intro:"Buscamos proveedores turcos de repuestos y componentes según marca, aplicación, referencia y necesidad comercial.", items:["Repuestos para maquinaria","Autopartes y componentes","Repuestos para vehículos comerciales","Componentes industriales"], cta:"Solicitar búsqueda de repuestos" },
    "equipos-industriales-turquia": { title:"Equipos industriales de Turquía", description:"Encuentre fabricantes y proveedores de equipos industriales en Turquía para proyectos y compradores en Chile.", h1:"Equipos industriales de Turquía", intro:"Apoyamos el sourcing B2B de equipos industriales turcos y la conexión comercial con compradores en Chile.", items:["Fabricantes especializados","Evaluación inicial de proveedores","Solicitud y comparación de ofertas","Apoyo en coordinación internacional"], cta:"Buscar equipos industriales" }
  },
  tr: {
    "siliye-ihracat": { title:"Şili'ye İhracat | HKO Trade Hub", description:"Türkiye'den Şili'ye ihracat yapmak isteyen üreticiler için pazar, alıcı, distribütör ve ticari bağlantı desteği.", h1:"Türkiye'den Şili'ye İhracat", intro:"Türk üreticilerin Şili pazarına girişinde potansiyel alıcı, distribütör ve ticari fırsatların belirlenmesine destek oluyoruz.", items:["Şili pazar ve talep araştırması","Potansiyel ithalatçı ve distribütör araştırması","Teklif ve ticari iletişim desteği","Lojistik ve operasyon koordinasyonu"], cta:"Şili pazarı için görüşelim" },
    "silide-distributor-bulma": { title:"Şili'de Distribütör Bulma", description:"Türk üreticiler için Şili'de distribütör, ithalatçı ve potansiyel B2B alıcı araştırması.", h1:"Şili'de Distribütör ve İthalatçı Bulma", intro:"Ürününüz için Şili pazarındaki uygun distribütör, ithalatçı ve B2B alıcı profillerini araştırıyoruz.", items:["Hedef müşteri profilinin belirlenmesi","Distribütör ve ithalatçı araştırması","Pazar uygunluğu değerlendirmesi","İlk ticari bağlantı sürecinin desteklenmesi"], cta:"Distribütör araştırması talep et" }
  },
  en: {
    "turkey-chile-trade": { title:"Turkey Chile Trade & Sourcing", description:"B2B sourcing, supplier discovery and trade facilitation between Turkey and Chile.", h1:"Turkey–Chile Trade & Sourcing", intro:"HKO Trade Hub connects buyers, suppliers and manufacturers across Turkey and Chile with practical commercial support.", items:["Supplier and manufacturer discovery","Buyer and distributor research","Quotation and commercial coordination","Cross-border logistics support"], cta:"Discuss your trade requirement" }
  }
} as const;

type LocaleKey = keyof typeof pages;

export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{
 const {locale,slug}=await params;if(!isLocale(locale))return {};
 const page=(pages[locale as LocaleKey] as Record<string,any>)[slug];if(!page)return {};
 const canonical=`${SITE_URL}/${locale}/trade/${slug}`;
 return {title:page.title,description:page.description,alternates:{canonical},openGraph:{title:page.title,description:page.description,url:canonical,type:"website"}};
}

export default async function TradeLanding({params}:{params:Promise<{locale:string;slug:string}>}){
 const {locale,slug}=await params;if(!isLocale(locale))notFound();
 const page=(pages[locale as LocaleKey] as Record<string,any>)[slug];if(!page)notFound();
 const contactLabel=locale==="tr"?"İletişim":locale==="es"?"Contacto":"Contact";
 return <>
  <section className="bg-hero-glow py-20 sm:py-28"><div className="container-shell"><p className="eyebrow">HKO Trade Hub · Turkey ⇄ Chile</p><h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-.045em] text-ink sm:text-6xl">{page.h1}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-ink/62">{page.intro}</p><Link href={`/${locale}/quote`} className="btn-primary mt-9 inline-flex gap-2">{page.cta}<ArrowRight size={18}/></Link></div></section>
  <section className="section bg-white"><div className="container-shell grid gap-5 md:grid-cols-2">{page.items.map((item:string)=><article key={item} className="rounded-[1.6rem] border border-ink/8 bg-mist p-7"><CheckCircle2 className="text-ocean"/><h2 className="mt-5 text-xl font-semibold">{item}</h2></article>)}</div></section>
  <section className="section bg-mist"><div className="container-shell text-center"><h2 className="heading mx-auto">HKO Trade Hub</h2><p className="lead mx-auto">Turkey ⇄ Chile · Sourcing · Market Intelligence · Trade Facilitation · Logistics Coordination</p><Link href={`/${locale}/contact`} className="btn-secondary mt-8 inline-flex">{contactLabel}</Link></div></section>
 </>;
}
