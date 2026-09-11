import Link from "next/link";
import {ContentPage} from "@/components/content-page";
import {isLocale} from "@/lib/i18n";
import {notFound} from "next/navigation";

const copy={
 tr:{
  hero:["Hakkımızda","HKO Trade Hub: Türkiye–Şili arasında güvenilir B2B ticaret ağı","HKO Trade Hub, hkotradehub.com alan adında faaliyet gösteren; Türkiye ile Şili arasında tedarik, alıcı eşleştirme, pazar araştırması, lojistik koordinasyonu ve uluslararası ticaret geliştirme desteği sunan B2B ticaret platformudur."],
  cards:[["Misyon","Şirketlerin sınır ötesi ticarette doğru tedarikçi, alıcı ve ticari bilgiye daha güvenli şekilde ulaşmasını sağlamak."],["Uzmanlık alanı","Türkiye–Şili ticaret koridorunda tedarikçi araştırması, firma doğrulama, teklif karşılaştırma, pazar geliştirme ve lojistik koordinasyonu."],["Yaklaşım","Güven, şeffaflık, doğrulanabilir bilgi, yerel pazar bilgisi ve uzun vadeli ticari değer."]],
  brandTitle:"Resmi marka ve web adresi",
  brandText:"HKO Trade Hub markasının resmi web adresi www.hkotradehub.com'dur. Marka; HKO Trade Hub, HKOTradeHub ve hkotradehub aramalarında aynı ticari platformu ifade eder.",
  expertiseTitle:"HKO Trade Hub ne yapar?",
  expertise:["Türkiye'deki üretici ve tedarikçileri araştırır ve ticari uygunluk açısından değerlendirir.","Şili'deki alıcı, distribütör ve ithalatçı fırsatlarının geliştirilmesini destekler.","Ürün, belge, teklif, lojistik ve pazar giriş süreçlerinin daha düzenli ilerlemesine yardımcı olur.","Türkiye–Şili uzmanlığını korurken uluslararası tedarik ve alıcı ağına ölçeklenebilir şekilde yaklaşır."],
  services:"Hizmetlerimizi inceleyin",contact:"Ticari ihtiyacınızı paylaşın"
 },
 en:{
  hero:["About","HKO Trade Hub: a trusted B2B trade network for Turkey and Chile","HKO Trade Hub is the B2B trade platform operating at hkotradehub.com, supporting supplier sourcing, buyer matching, market research, logistics coordination and international business development between Turkey and Chile."],
  cards:[["Mission","Help companies reach the right suppliers, buyers and commercial intelligence with greater confidence in cross-border trade."],["Specialization","Supplier research, business verification, quotation comparison, market development and logistics coordination across the Turkey–Chile trade corridor."],["Approach","Trust, transparency, verifiable information, local market knowledge and long-term commercial value."]],
  brandTitle:"Official brand and website",
  brandText:"The official website of HKO Trade Hub is www.hkotradehub.com. HKO Trade Hub, HKOTradeHub and hkotradehub refer to the same international B2B trade platform.",
  expertiseTitle:"What does HKO Trade Hub do?",
  expertise:["Researches producers and suppliers in Turkey and evaluates commercial fit.","Supports buyer, distributor and importer development opportunities in Chile.","Helps organize product, document, quotation, logistics and market-entry processes.","Maintains Turkey–Chile specialization while building a scalable international sourcing and buyer network."],
  services:"Explore our services",contact:"Share your trade requirement"
 },
 es:{
  hero:["Nosotros","HKO Trade Hub: una red B2B confiable entre Turquía y Chile","HKO Trade Hub es la plataforma de comercio B2B que opera en hkotradehub.com y apoya búsqueda de proveedores, conexión con compradores, estudio de mercado, coordinación logística y desarrollo comercial internacional entre Turquía y Chile."],
  cards:[["Misión","Ayudar a empresas a encontrar proveedores, compradores e inteligencia comercial con mayor confianza en operaciones internacionales."],["Especialización","Búsqueda de proveedores, verificación empresarial, comparación de cotizaciones, desarrollo de mercado y coordinación logística en el corredor Turquía–Chile."],["Enfoque","Confianza, transparencia, información verificable, conocimiento local y valor comercial de largo plazo."]],
  brandTitle:"Marca y sitio web oficiales",
  brandText:"El sitio web oficial de HKO Trade Hub es www.hkotradehub.com. HKO Trade Hub, HKOTradeHub y hkotradehub identifican la misma plataforma internacional de comercio B2B.",
  expertiseTitle:"¿Qué hace HKO Trade Hub?",
  expertise:["Investiga fabricantes y proveedores en Turquía y evalúa su adecuación comercial.","Apoya oportunidades de compradores, distribuidores e importadores en Chile.","Ayuda a ordenar procesos de producto, documentación, cotización, logística y entrada al mercado.","Mantiene su especialización Turquía–Chile mientras desarrolla una red internacional escalable de proveedores y compradores."],
  services:"Ver nuestros servicios",contact:"Compartir su necesidad comercial"
 }
} as const;

export default async function Page({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!isLocale(locale))notFound();const t=copy[locale];
 return <ContentPage eyebrow={t.hero[0]} title={t.hero[1]} text={t.hero[2]}>
  <div className="grid gap-7 lg:grid-cols-3">{t.cards.map(([title,text])=><div className="card p-8" key={title}><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-ink/60">{text}</p></div>)}</div>
  <section className="mt-10 grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
   <article className="rounded-[2rem] border border-ink/8 bg-mist p-8"><h2 className="text-2xl font-semibold">{t.brandTitle}</h2><p className="mt-4 leading-8 text-ink/65">{t.brandText}</p><p className="mt-4 text-sm font-semibold text-ocean">HKO Trade Hub · HKOTradeHub · hkotradehub.com</p></article>
   <article className="rounded-[2rem] border border-ink/8 bg-white p-8"><h2 className="text-2xl font-semibold">{t.expertiseTitle}</h2><div className="mt-5 space-y-3">{t.expertise.map(item=><p key={item} className="leading-7 text-ink/60">• {item}</p>)}</div></article>
  </section>
  <div className="mt-8 flex flex-wrap gap-3"><Link className="btn-primary" href={`/${locale}/services`}>{t.services}</Link><Link className="btn-secondary" href={`/${locale}/quote`}>{t.contact}</Link></div>
 </ContentPage>
}
