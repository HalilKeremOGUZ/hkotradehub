import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Boxes, Building2, CheckCircle2, CircleDollarSign, ClipboardCheck, Factory, Globe2, Handshake, Leaf, PackageSearch, Search, ShieldCheck, Ship, Truck, Wrench } from "lucide-react";
import { dictionaries, isLocale, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/motion-reveal";
import { TradeRoute } from "@/components/trade-route";
import { OpportunityExplorer } from "@/components/opportunity-explorer";

const industryCopy={
 tr:["Endüstriyel Makine","Ticari Araçlar","Madencilik","Tarım & Gıda","Yapı Malzemeleri","Lojistik Çözümleri"],
 en:["Industrial Machinery","Commercial Vehicles","Mining","Agriculture & Food","Construction Materials","Logistics Solutions"],
 es:["Maquinaria Industrial","Vehículos Comerciales","Minería","Agricultura y Alimentos","Materiales de Construcción","Soluciones Logísticas"]
};
const serviceCopy={
 tr:[
  ["Tedarikçi ve alıcı eşleştirme","İhtiyacınıza uygun doğrulanabilir ticari bağlantıları belirleriz."],
  ["Pazar araştırması","Hedef pazardaki talep, rekabet ve giriş koşullarını analiz ederiz."],
  ["Lojistik koordinasyonu","Taşıma, belge ve teslim süreçlerini ticari planla uyumlu hale getiririz."],
  ["Ticaret kolaylaştırma","Taraflar arasındaki iletişim ve sonraki adımların yönetimini destekleriz."]
 ],
 en:[
  ["Supplier and buyer matching","We identify credible commercial connections aligned with your requirement."],
  ["Market intelligence","We assess demand, competition and market-entry conditions."],
  ["Logistics coordination","We align transport, documentation and delivery with the commercial plan."],
  ["Trade facilitation","We support communication and practical next steps between parties."]
 ],
 es:[
  ["Conexión de proveedores y compradores","Identificamos conexiones comerciales confiables según su necesidad."],
  ["Inteligencia de mercado","Analizamos demanda, competencia y condiciones de entrada."],
  ["Coordinación logística","Alineamos transporte, documentación y entrega con el plan comercial."],
  ["Facilitación comercial","Apoyamos la comunicación y los próximos pasos entre las partes."]
 ]
};
const steps={
 tr:[["01","İhtiyacınızı paylaşın","Ürün, miktar, hedef pazar veya tedarik ihtiyacınızı bize iletin."],["02","Uygun bağlantıyı belirleyelim","Pazar ve ticari uygunluk açısından seçenekleri değerlendirelim."],["03","Süreci birlikte ilerletelim","Teklif, iletişim ve operasyon adımlarını net bir planla yönetin."]],
 en:[["01","Share your requirement","Tell us the product, quantity, target market or sourcing need."],["02","Identify the right connection","We assess relevant options for market and commercial fit."],["03","Move forward with clarity","Manage quotation, communication and operations through a clear plan."]],
 es:[["01","Comparta su necesidad","Indique producto, cantidad, mercado objetivo o necesidad de abastecimiento."],["02","Identifiquemos la conexión adecuada","Evaluamos opciones según mercado y viabilidad comercial."],["03","Avance con claridad","Gestione cotización, comunicación y operación con un plan claro."]]
};
const extraCopy={
 tr:{verified:"Doğrulanmış yaklaşım",trustBefore:"İşlemden önce güven",corridor:"Uzman ticaret koridoru",corridorText:"Yerel bilgi. Küresel standartlar. Uygulanabilir ticaret yönetimi.",corridorCountries:"Türkiye ⇄ Şili",network:"Küresel ağ",networkText:"İki pazarın ötesine büyümek için tasarlandı",route:["Pazara özel ticari istihbarat","Sınır ötesi tedarik ve satış desteği","Ölçeklenebilir küresel ağ mimarisi"],trust:["Firma doğrulama","Risk odaklı süreç","Ticari durum tespiti","Uygulanabilir anlaşma desteği"],shipAlt:"Uluslararası konteyner taşımacılığı ve küresel ticaret",teamAlt:"Ticaret fırsatını değerlendiren uluslararası iş ekibi"},
 en:{verified:"Verified approach",trustBefore:"Trust before transaction",corridor:"Specialized corridor",corridorText:"Local insight. Global standards. Practical trade execution.",corridorCountries:"Turkey ⇄ Chile",network:"Global network",networkText:"Built to expand beyond two markets",route:["Market-specific business intelligence","Cross-border sourcing and sales support","Scalable global network architecture"],trust:["Business verification","Risk-aware process","Commercial due diligence","Practical deal support"],shipAlt:"International container shipping and global trade",teamAlt:"International business team reviewing a trade opportunity"},
 es:{verified:"Enfoque verificado",trustBefore:"Confianza antes de la operación",corridor:"Corredor comercial especializado",corridorText:"Conocimiento local. Estándares globales. Ejecución comercial práctica.",corridorCountries:"Turquía ⇄ Chile",network:"Red global",networkText:"Diseñada para crecer más allá de dos mercados",route:["Inteligencia comercial específica del mercado","Apoyo internacional en abastecimiento y ventas","Arquitectura de red global escalable"],trust:["Verificación empresarial","Proceso consciente del riesgo","Debida diligencia comercial","Apoyo práctico en acuerdos"],shipAlt:"Transporte internacional de contenedores y comercio global",teamAlt:"Equipo internacional evaluando una oportunidad comercial"}
} as const;

export default async function Home({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;if(!isLocale(locale))notFound();const d=dictionaries[locale];const industries=industryCopy[locale];const services=serviceCopy[locale];const process=steps[locale];const x=extraCopy[locale];
 const industryIcons=[Factory,Truck,Wrench,Leaf,Building2,Ship];const serviceIcons=[Handshake,Globe2,Truck,ClipboardCheck];
 return <>
  <section className="noise hero-grid relative overflow-hidden bg-hero-glow">
   <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean/25 to-transparent"/>
   <div className="container-shell grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
    <Reveal>
     <div className="eyebrow"><span className="h-2 w-2 rounded-full bg-aqua shadow-[0_0_0_5px_rgba(81,214,203,.14)]"/>{d.hero.eyebrow}</div>
     <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-ink sm:text-6xl lg:text-[74px]">{d.hero.title}</h1>
     <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/62">{d.hero.text}</p>
     <div className="mt-9 flex flex-wrap gap-3"><Link className="btn-primary gap-2" href={`/${locale}/products`}>{d.hero.primary}<ArrowRight size={18}/></Link><Link className="btn-secondary" href={`/${locale}/quote`}>{d.hero.secondary}</Link><Link className="inline-flex items-center px-3 text-sm font-semibold text-ocean" href={`/${locale}/suppliers`}>{d.hero.supplier}</Link></div>
     <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/8 pt-6 text-xs font-medium text-ink/48"><span className="flex items-center gap-2"><ShieldCheck className="text-ocean" size={17}/>{d.hero.trust}</span><span className="flex items-center gap-2"><Globe2 className="text-ocean" size={17}/>TR · EN · ES</span></div>
    </Reveal>
    <Reveal className="relative">
     <div className="absolute -left-7 top-16 z-10 hidden rounded-2xl border border-white/50 bg-white/85 p-4 shadow-soft backdrop-blur-xl sm:block"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua/20 text-ocean"><BadgeCheck size={20}/></span><div><b className="block text-sm">{x.verified}</b><small className="text-ink/45">{x.trustBefore}</small></div></div></div>
     <div className="relative ml-auto min-h-[570px] max-w-[600px] overflow-hidden rounded-[2.5rem] bg-ink shadow-[0_38px_100px_rgba(8,20,39,.22)]">
      <Image src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=88" alt={x.shipAlt} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent"/>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-aqua">{x.corridor}</p><div className="mt-3 flex items-end justify-between gap-6"><div><h2 className="text-2xl font-semibold text-white">{x.corridorCountries}</h2><p className="mt-2 max-w-sm text-sm leading-6 text-white/58">{x.corridorText}</p></div><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur"><Ship size={21}/></span></div></div>
     </div>
     <div className="absolute -bottom-5 -right-4 z-10 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-soft backdrop-blur-xl sm:right-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-copper/15 text-copper"><Globe2 size={20}/></span><div><b className="block text-sm">{x.network}</b><small className="text-ink/45">{x.networkText}</small></div></div></div>
    </Reveal>
   </div>
  </section>

  <section className="section bg-white"><div className="container-shell"><Reveal><p className="eyebrow">{d.home.categoriesEyebrow}</p><div className="grid gap-5 lg:grid-cols-[1fr_.65fr] lg:items-end"><div><h2 className="heading">{d.home.categoriesTitle}</h2></div><p className="lead lg:mt-0">{d.home.categoriesText}</p></div></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((title,i)=>{const Icon=industryIcons[i];return <Reveal key={title}><Link href={`/${locale}/products`} className="group flex min-h-44 flex-col justify-between rounded-[1.6rem] border border-ink/8 bg-mist p-6 transition duration-300 hover:-translate-y-1 hover:border-ocean/25 hover:bg-white hover:shadow-soft"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ocean shadow-sm transition group-hover:bg-ocean group-hover:text-white"><Icon size={23}/></span><div className="mt-8 flex items-end justify-between gap-4"><h3 className="text-lg font-semibold tracking-tight">{title}</h3><ArrowRight className="text-ink/25 transition group-hover:translate-x-1 group-hover:text-ocean" size={19}/></div></Link></Reveal>})}</div></div></section>

  <section className="section bg-mist"><div className="container-shell grid gap-14 lg:grid-cols-[.78fr_1.22fr]"><Reveal><p className="eyebrow">{d.home.servicesEyebrow}</p><h2 className="heading">{d.home.servicesTitle}</h2><p className="lead">{d.home.servicesText}</p><Link href={`/${locale}/services`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean">{d.common.learn}<ArrowRight size={17}/></Link></Reveal><div className="grid gap-4 sm:grid-cols-2">{services.map(([title,text],i)=>{const Icon=serviceIcons[i];return <Reveal key={title}><article className="h-full rounded-[1.6rem] border border-ink/8 bg-white p-7 shadow-[0_18px_50px_rgba(8,20,39,.04)]"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-aqua"><Icon size={22}/></span><h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-ink/56">{text}</p></article></Reveal>})}</div></div></section>

  <section className="section bg-white"><div className="container-shell grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">{d.home.routeEyebrow}</p><h2 className="heading">{d.home.routeTitle}</h2><p className="lead">{d.home.routeText}</p><div className="mt-8 space-y-3 text-sm text-ink/58">{x.route.map(item=><p className="flex items-center gap-3" key={item}><CheckCircle2 className="text-aqua" size={19}/>{item}</p>)}</div></Reveal><Reveal><TradeRoute locale={locale}/></Reveal></div></section>

  <section className="section bg-sand"><div className="container-shell"><Reveal><p className="eyebrow">{d.home.featuredEyebrow}</p><div className="grid gap-5 lg:grid-cols-[1fr_.65fr] lg:items-end"><div><h2 className="heading">{d.home.featuredTitle}</h2></div><p className="lead lg:mt-0">{d.home.featuredText}</p></div></Reveal><OpportunityExplorer locale={locale}/></div></section>

  <section className="section bg-white"><div className="container-shell"><Reveal className="text-center"><p className="eyebrow">{d.home.processEyebrow}</p><h2 className="heading mx-auto">{d.home.processTitle}</h2><p className="lead mx-auto">{d.home.processText}</p></Reveal><div className="relative mt-14 grid gap-5 lg:grid-cols-3"><div className="absolute left-[16%] right-[16%] top-9 hidden border-t border-dashed border-ocean/25 lg:block"/>{process.map(([num,title,text],i)=><Reveal key={num}><article className="relative rounded-[1.75rem] border border-ink/8 bg-white p-7 text-center shadow-[0_18px_55px_rgba(8,20,39,.05)]"><span className="relative z-10 mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-[7px] border-white bg-ocean text-lg font-bold text-white shadow-lg shadow-ocean/20">{num}</span><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-ink/55">{text}</p></article></Reveal>)}</div></div></section>

  <section className="section bg-mist"><div className="container-shell"><div className="grid overflow-hidden rounded-[2.5rem] bg-ink lg:grid-cols-2"><Reveal className="p-8 text-white sm:p-12 lg:p-16"><p className="eyebrow !text-aqua">{d.home.trustEyebrow}</p><h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-.035em] sm:text-4xl">{d.home.trustTitle}</h2><p className="mt-5 max-w-xl leading-8 text-white/58">{d.home.trustText}</p><div className="mt-9 grid gap-4 sm:grid-cols-2"><Trust icon={BadgeCheck} title={x.trust[0]}/><Trust icon={ShieldCheck} title={x.trust[1]}/><Trust icon={PackageSearch} title={x.trust[2]}/><Trust icon={CircleDollarSign} title={x.trust[3]}/></div></Reveal><div className="relative min-h-[430px]"><Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=86" alt={x.teamAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r"/></div></div></div></section>

  <section className="section bg-white"><div className="container-shell"><Reveal><div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ocean to-ink p-8 text-white shadow-[0_30px_90px_rgba(8,20,39,.22)] sm:p-12 lg:p-16"><div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -bottom-32 right-16 h-72 w-72 rounded-full bg-aqua/10 blur-3xl"/><div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[11px] font-bold uppercase tracking-[.24em] text-aqua">HKO Trade Hub</p><h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl lg:text-5xl">{d.home.ctaTitle}</h2><p className="mt-5 max-w-2xl leading-8 text-white/58">{d.home.ctaText}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={`/${locale}/quote`} className="btn-light gap-2">{d.home.ctaPrimary}<ArrowRight size={17}/></Link><Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">{d.home.ctaSecondary}</Link></div></div></div></Reveal></div></section>
 </>
}
function Trust({icon:Icon,title}:{icon:any,title:string}){return <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.05] p-4"><Icon className="text-aqua" size={19}/><span className="text-sm font-medium text-white/80">{title}</span></div>}
