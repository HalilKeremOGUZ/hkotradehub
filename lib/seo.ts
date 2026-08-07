import type { Metadata } from "next";
import { posts, products } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.hkotradehub.com";

const routeMetadata = {
  tr: {
    "": ["Türkiye–Şili İthalat İhracat ve B2B Ticaret", "Türkiye ile Şili arasında ithalat, ihracat, güvenilir tedarikçi bulma, pazar araştırması, lojistik ve uçtan uca B2B ticaret desteği."],
    about: ["Türkiye–Şili Ticaret Uzmanı HKO Trade Hub", "Türkiye–Şili ithalat ve ihracatında yerel uzmanlık, güvenilir iş bağlantıları ve küresel B2B ticaret ağı sunan HKO Trade Hub'ı tanıyın."],
    services: ["İthalat, İhracat ve B2B Tedarik Hizmetleri", "Türkiye–Şili ticareti için tedarikçi bulma, firma doğrulama, pazar araştırması, lojistik ve dış ticaret koordinasyonu hizmetleri."],
    products: ["Türkiye ve Şili'den İthalat İhracat Ürünleri", "Türkiye ve Şili'deki güvenilir tedarikçilerden gıda, tarım, makine, yapı malzemesi ve otomotiv yedek parça ihracat fırsatları."],
    suppliers: ["İhracatçılar ve Tedarikçiler İçin Küresel Pazar", "Türk ve Şilili üreticiler için uluslararası alıcı bulma, ihracat pazarı geliştirme, firma doğrulama ve dış ticaret koordinasyonu."],
    buyers: ["Türkiye ve Şili'de Güvenilir Tedarikçi Bulma", "Türkiye ve Şili'den ürün ithal etmek isteyen alıcılar için güvenilir tedarikçi araştırması, teklif karşılaştırma ve lojistik desteği."],
    blog: ["Türkiye–Şili İthalat İhracat Rehberi", "Türkiye–Şili ticareti, güvenilir tedarikçi bulma, ithalat, ihracat, gümrük, mevzuat ve lojistik hakkında pratik rehberler."],
    contact: ["İletişim", "Ürün, tedarikçi, alıcı veya pazar ihtiyacınızı HKO Trade Hub ekibiyle paylaşın."],
    quote: ["Ticaret Teklifi İsteyin", "Ürün ve uluslararası ticaret ihtiyacınızı paylaşın; ekibimiz size özel bir başlangıç planı ve teklif hazırlasın."],
  },
  en: {
    "": ["Turkey–Chile Import Export & B2B Sourcing", "Import, export and B2B sourcing between Turkey and Chile with verified suppliers, market research, logistics and end-to-end trade support."],
    about: ["Turkey–Chile Trade Experts | HKO Trade Hub", "Meet HKO Trade Hub, a trusted Turkey–Chile import-export partner with local expertise, verified business connections and a global B2B network."],
    services: ["Import, Export and B2B Sourcing Services", "Supplier sourcing, company verification, market research, logistics and trade compliance services for businesses trading between Turkey and Chile."],
    products: ["Import Export Products from Turkey and Chile", "Source food, agriculture, machinery, construction materials and automotive spare parts from verified suppliers in Turkey and Chile."],
    suppliers: ["Global Buyers for Turkish and Chilean Suppliers", "Find international buyers with supplier verification, export market development and cross-border trade coordination for producers in Turkey and Chile."],
    buyers: ["Find Verified Suppliers in Turkey and Chile", "B2B supplier sourcing, product research, quotation comparison and logistics support for buyers importing from Turkey and Chile."],
    blog: ["Turkey–Chile Import Export Guides", "Practical guides to Turkey–Chile trade, B2B sourcing, supplier verification, import-export compliance, customs and international logistics."],
    contact: ["Contact Us", "Tell the HKO Trade Hub team about your product, supplier, buyer or market requirement."],
    quote: ["Request a Trade Quote", "Share your product and international trade requirements for a tailored starting plan and quotation."],
  },
  es: {
    "": ["Comercio, Importación y Exportación Turquía–Chile", "Importación, exportación y abastecimiento B2B entre Turquía y Chile con proveedores verificados, estudio de mercado, logística y apoyo integral."],
    about: ["Expertos en Comercio Turquía–Chile | HKO Trade Hub", "Conozca HKO Trade Hub, su experiencia local en importación y exportación Turquía–Chile, conexiones verificadas y red empresarial global."],
    services: ["Servicios de Importación, Exportación y Abastecimiento", "Búsqueda y verificación de proveedores, estudio de mercado, logística y cumplimiento para empresas que comercian entre Turquía y Chile."],
    products: ["Productos para Importar de Turquía y Chile", "Encuentre alimentos, productos agrícolas, maquinaria, materiales de construcción y repuestos de proveedores verificados en Turquía y Chile."],
    suppliers: ["Compradores Globales para Proveedores de Turquía y Chile", "Acceso a compradores internacionales, desarrollo de mercados de exportación y coordinación comercial para productores turcos y chilenos."],
    buyers: ["Proveedores Verificados en Turquía y Chile", "Búsqueda de proveedores B2B, comparación de cotizaciones y apoyo logístico para compradores que importan desde Turquía y Chile."],
    blog: ["Guías de Importación y Exportación Turquía–Chile", "Guías prácticas sobre comercio Turquía–Chile, proveedores, importación, exportación, aduanas, cumplimiento y logística internacional."],
    contact: ["Contacto", "Comparta con HKO Trade Hub su necesidad de producto, proveedor, comprador o mercado."],
    quote: ["Solicite una Cotización Comercial", "Comparta sus necesidades de producto y comercio internacional para recibir un plan inicial y una cotización personalizada."],
  },
} as const;

export function getLocalizedMetadata(locale: Locale, pathname: string): Metadata {
  const localizedPath = pathname.replace(/^\/(tr|en|es)(?=\/|$)/, "");
  const segments = localizedPath.split("/").filter(Boolean);
  let title: string;
  let description: string;

  if (segments[0] === "products" && segments[1]) {
    const product = products.find((item) => item.slug === segments[1]);
    title = product?.names[locale] ?? routeMetadata[locale].products[0];
    description = product?.desc[locale] ?? routeMetadata[locale].products[1];
  } else if (segments[0] === "blog" && segments[1]) {
    const post = posts.find((item) => item.slug === segments[1]);
    title = post?.title[locale] ?? routeMetadata[locale].blog[0];
    const suffix = {
      tr: "Tedarik, lojistik ve sınır ötesi ticaret için HKO Trade Hub'ın pratik önerilerini okuyun.",
      en: "Read practical HKO Trade Hub guidance for sourcing, logistics and cross-border trade.",
      es: "Lea consejos prácticos de HKO Trade Hub sobre abastecimiento, logística y comercio internacional.",
    }[locale];
    description = post ? `${post.title[locale]}. ${suffix}` : routeMetadata[locale].blog[1];
  } else {
    const key = (segments[0] ?? "") as keyof typeof routeMetadata[typeof locale];
    [title, description] = routeMetadata[locale][key] ?? routeMetadata[locale][""];
  }

  const canonical = `${SITE_URL}${pathname}`;
  const languagePath = localizedPath || "";
  const languages = {
    tr: `${SITE_URL}/tr${languagePath}`,
    en: `${SITE_URL}/en${languagePath}`,
    es: `${SITE_URL}/es${languagePath}`,
    "x-default": `${SITE_URL}/en${languagePath}`,
  };

  return {
    title,
    description,
    keywords: getKeywords(locale, segments, title),
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "HKO Trade Hub",
      type: "website",
      locale: locale === "tr" ? "tr_TR" : locale === "es" ? "es_CL" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function getKeywords(locale: Locale, segments: string[], pageTitle: string) {
  const core = {
    tr: ["Türkiye Şili ticaret", "Türkiye Şili ithalat ihracat", "uluslararası B2B ticaret", "güvenilir tedarikçi bulma", "dış ticaret danışmanlığı"],
    en: ["Turkey Chile trade", "Turkey Chile import export", "B2B sourcing Turkey", "verified Turkish suppliers", "international trade services"],
    es: ["comercio Turquía Chile", "importar desde Turquía", "exportación Turquía Chile", "proveedores turcos verificados", "abastecimiento B2B"],
  }[locale];
  const routeSpecific = segments[0] === "products"
    ? locale === "tr" ? ["Türkiye ihracat ürünleri", "Şili ithalat ürünleri", pageTitle] : locale === "en" ? ["products from Turkey", "Turkish exporters", pageTitle] : ["productos de Turquía", "exportadores turcos", pageTitle]
    : segments[0] === "services"
      ? locale === "tr" ? ["ithalat ihracat danışmanlığı", "tedarikçi araştırması"] : locale === "en" ? ["import export consulting", "supplier sourcing"] : ["consultoría de importación y exportación", "búsqueda de proveedores"]
      : [];
  return [...core, ...routeSpecific];
}
