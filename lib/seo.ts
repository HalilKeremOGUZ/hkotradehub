import type { Metadata } from "next";
import { posts, products } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.hkotradehub.com";

const routeMetadata = {
  tr: {
    "": ["HKO Trade Hub | Türkiye–Şili İthalat İhracat", "HKO Trade Hub (hkotradehub), Türkiye ile Şili arasında ithalat, ihracat, güvenilir tedarikçi bulma, pazar araştırması, lojistik ve B2B ticaret desteği sunar."],
    about: ["Türkiye–Şili Ticaret Uzmanı HKO Trade Hub", "Türkiye–Şili ithalat ve ihracatında yerel uzmanlık, güvenilir iş bağlantıları ve küresel B2B ticaret ağı sunan HKO Trade Hub'ı tanıyın."],
    services: ["Türkiye–Şili İthalat İhracat Danışmanlığı", "Türkiye–Şili dış ticareti için B2B tedarikçi bulma, firma doğrulama, pazar araştırması, gümrük, lojistik ve ithalat ihracat danışmanlığı."],
    products: ["Türkiye'den Şili'ye İhraç Edilen Ürünler", "Türkiye'den Şili'ye ithalat için gıda, makine, yapı malzemesi ve otomotiv yedek parçaları; Şili'den Türkiye'ye tarım ve gıda ürünleri."],
    suppliers: ["Şili'de Alıcı Arayan Türk İhracatçılar", "Türk üretici ve ihracatçılar için Şili'de distribütör ve uluslararası alıcı bulma, pazar geliştirme ve ihracat operasyon desteği."],
    buyers: ["Türkiye'de Güvenilir Tedarikçi Bulma", "Türkiye'den Şili'ye ürün ithal etmek isteyen firmalar için güvenilir Türk üretici ve tedarikçi araştırması, teklif ve lojistik desteği."],
    blog: ["Türkiye–Şili İthalat İhracat Rehberi", "Türkiye–Şili ticareti, güvenilir tedarikçi bulma, ithalat, ihracat, gümrük, mevzuat ve lojistik hakkında pratik rehberler."],
    contact: ["İletişim", "Ürün, tedarikçi, alıcı veya pazar ihtiyacınızı HKO Trade Hub ekibiyle paylaşın."],
    quote: ["Ticaret Teklifi İsteyin", "Ürün ve uluslararası ticaret ihtiyacınızı paylaşın; ekibimiz size özel bir başlangıç planı ve teklif hazırlasın."],
  },
  en: {
    "": ["HKO Trade Hub | Turkey–Chile Import Export", "HKO Trade Hub (hkotradehub) provides import, export and B2B sourcing between Turkey and Chile with verified suppliers, market research and logistics support."],
    about: ["Turkey–Chile Trade Experts | HKO Trade Hub", "Meet HKO Trade Hub, a trusted Turkey–Chile import-export partner with local expertise, verified business connections and a global B2B network."],
    services: ["Turkey–Chile Import Export Consulting", "B2B supplier sourcing in Turkey, company verification, market research, customs, logistics and import-export consulting for trade with Chile."],
    products: ["Products to Import from Turkey to Chile", "Import Turkish food, machinery, construction materials and automotive spare parts to Chile, plus selected agricultural products from Chile to Turkey."],
    suppliers: ["Find Buyers in Chile for Turkish Exports", "Market-entry, distributor search and buyer introductions in Chile for Turkish manufacturers and exporters."],
    buyers: ["Find Verified Manufacturers in Turkey", "Find verified Turkish manufacturers and B2B suppliers with quotation comparison, due diligence and logistics support for importing to Chile."],
    blog: ["Turkey–Chile Import Export Guides", "Practical guides to Turkey–Chile trade, B2B sourcing, supplier verification, import-export compliance, customs and international logistics."],
    contact: ["Contact Us", "Tell the HKO Trade Hub team about your product, supplier, buyer or market requirement."],
    quote: ["Request a Trade Quote", "Share your product and international trade requirements for a tailored starting plan and quotation."],
  },
  es: {
    "": ["HKO Trade Hub | Comercio Turquía–Chile", "HKO Trade Hub (hkotradehub) facilita importación, exportación y abastecimiento B2B entre Turquía y Chile con proveedores verificados, estudio de mercado y logística."],
    about: ["Expertos en Comercio Turquía–Chile | HKO Trade Hub", "Conozca HKO Trade Hub, su experiencia local en importación y exportación Turquía–Chile, conexiones verificadas y red empresarial global."],
    services: ["Asesoría de Importación Turquía–Chile", "Búsqueda de proveedores en Turquía, verificación de empresas, estudio de mercado, aduanas, logística y asesoría de importación y exportación."],
    products: ["Productos para Importar de Turquía a Chile", "Importe desde Turquía alimentos, maquinaria, materiales de construcción y repuestos; encuentre también productos agrícolas chilenos para Turquía."],
    suppliers: ["Compradores en Chile para Exportadores Turcos", "Búsqueda de distribuidores y compradores en Chile, entrada al mercado y apoyo exportador para fabricantes y proveedores turcos."],
    buyers: ["Proveedores y Fabricantes Verificados en Turquía", "Encuentre fabricantes y proveedores turcos verificados, compare cotizaciones y coordine la logística para importar desde Turquía a Chile."],
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
    title: segments.length === 0 ? { absolute: title } : title,
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
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${title} | HKO Trade Hub` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/opengraph-image`] },
  };
}

function getKeywords(locale: Locale, segments: string[], pageTitle: string) {
  const core = {
    tr: ["HKO Trade Hub", "hkotradehub", "Türkiye Şili ticaret", "Türkiye'den Şili'ye ihracat", "Şili'den Türkiye'ye ithalat", "Türkiye'de güvenilir tedarikçi bulma", "ithalat ihracat danışmanlığı"],
    en: ["HKO Trade Hub", "hkotradehub", "Turkey Chile trade", "import from Turkey to Chile", "export from Chile to Turkey", "verified manufacturers in Turkey", "B2B sourcing Turkey"],
    es: ["HKO Trade Hub", "hkotradehub", "comercio Turquía Chile", "importar desde Turquía a Chile", "exportar desde Chile a Turquía", "proveedores verificados en Turquía", "asesoría de importación"],
  }[locale];
  const routeSpecific = segments[0] === "products"
    ? locale === "tr" ? ["Türkiye'den Şili'ye ihraç edilen ürünler", "Türk yedek parça ihracatçıları", pageTitle] : locale === "en" ? ["products to import from Turkey", "Turkish spare parts exporters", pageTitle] : ["productos para importar de Turquía", "exportadores turcos de repuestos", pageTitle]
    : segments[0] === "services"
      ? locale === "tr" ? ["ithalat ihracat danışmanlığı", "tedarikçi araştırması"] : locale === "en" ? ["import export consulting", "supplier sourcing"] : ["consultoría de importación y exportación", "búsqueda de proveedores"]
      : [];
  return [...core, ...routeSpecific];
}
