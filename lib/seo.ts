import type { Metadata } from "next";
import { posts, products } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.hkotradehub.com";

const routeMetadata = {
  tr: {
    "": ["HKO Trade Hub | Türkiye–Şili B2B İthalat İhracat", "HKO Trade Hub (hkotradehub.com), Türkiye ile Şili arasında B2B ithalat, ihracat, güvenilir tedarikçi bulma, pazar araştırması ve lojistik desteği sunar."],
    about: ["HKO Trade Hub Hakkında | Türkiye–Şili B2B Ticaret", "HKO Trade Hub'ın Türkiye–Şili ithalat ve ihracatındaki uzmanlığını, tedarik yaklaşımını ve uluslararası B2B ticaret ağını tanıyın."],
    services: ["İthalat İhracat Hizmetleri | HKO Trade Hub", "HKO Trade Hub ile Türkiye–Şili dış ticareti için tedarikçi bulma, firma doğrulama, pazar araştırması, lojistik ve ithalat ihracat danışmanlığı."],
    products: ["B2B Ürün ve Tedarik Fırsatları | HKO Trade Hub", "HKO Trade Hub ile Türkiye'den Şili'ye gıda, makine, yapı malzemesi ve otomotiv yedek parçaları; Şili'den Türkiye'ye seçili ticaret fırsatları."],
    suppliers: ["Şili'de Alıcı Bulma | HKO Trade Hub", "HKO Trade Hub, Türk üretici ve ihracatçılar için Şili'de distribütör ve uluslararası alıcı araştırması ile pazar geliştirme desteği sunar."],
    buyers: ["Türkiye'de Tedarikçi Bulma | HKO Trade Hub", "HKO Trade Hub ile Türkiye'den ürün ithal etmek isteyen firmalar için Türk üretici ve tedarikçi araştırması, teklif ve lojistik desteği."],
    blog: ["Türkiye–Şili Ticaret Rehberleri | HKO Trade Hub", "HKO Trade Hub'ın Türkiye–Şili ticareti, tedarikçi doğrulama, ithalat, ihracat ve lojistik hakkında hazırladığı pratik B2B rehberleri."],
    contact: ["HKO Trade Hub İletişim", "Ürün, tedarikçi, alıcı veya pazar ihtiyacınızı HKO Trade Hub ekibiyle paylaşın."],
    quote: ["Ticaret Teklifi İsteyin | HKO Trade Hub", "Ürün ve uluslararası ticaret ihtiyacınızı HKO Trade Hub ile paylaşın; size özel başlangıç planı ve teklif sürecini başlatın."],
  },
  en: {
    "": ["HKO Trade Hub | Turkey–Chile B2B Import Export", "HKO Trade Hub (hkotradehub.com) provides B2B import, export and sourcing between Turkey and Chile with supplier research, market intelligence and logistics support."],
    about: ["About HKO Trade Hub | Turkey–Chile B2B Trade", "Learn about HKO Trade Hub, its Turkey–Chile import-export expertise, sourcing approach and growing international B2B trade network."],
    services: ["Import Export Services | HKO Trade Hub", "HKO Trade Hub provides supplier sourcing, company verification, market research, logistics and import-export consulting for Turkey–Chile trade."],
    products: ["B2B Products & Sourcing | HKO Trade Hub", "Explore HKO Trade Hub sourcing opportunities including Turkish machinery, construction materials, automotive parts and selected Chilean products."],
    suppliers: ["Find Buyers in Chile | HKO Trade Hub", "HKO Trade Hub supports Turkish manufacturers and exporters with buyer research, distributor search and market development in Chile."],
    buyers: ["Find Suppliers in Turkey | HKO Trade Hub", "HKO Trade Hub helps companies source Turkish manufacturers and B2B suppliers with quotation, verification and logistics support."],
    blog: ["Turkey–Chile Trade Guides | HKO Trade Hub", "Read HKO Trade Hub guides on Turkey–Chile trade, supplier verification, sourcing, import-export compliance and international logistics."],
    contact: ["Contact HKO Trade Hub", "Tell the HKO Trade Hub team about your product, supplier, buyer or market requirement."],
    quote: ["Request a Trade Quote | HKO Trade Hub", "Share your product and international trade requirements with HKO Trade Hub for a tailored sourcing or market-entry starting plan."],
  },
  es: {
    "": ["HKO Trade Hub | Comercio B2B Turquía–Chile", "HKO Trade Hub (hkotradehub.com) facilita importación, exportación y abastecimiento B2B entre Turquía y Chile con búsqueda de proveedores, estudio de mercado y logística."],
    about: ["Sobre HKO Trade Hub | Comercio B2B Turquía–Chile", "Conozca HKO Trade Hub, su experiencia en importación y exportación Turquía–Chile, su enfoque de abastecimiento y su red empresarial internacional."],
    services: ["Servicios de Importación y Exportación | HKO Trade Hub", "HKO Trade Hub ofrece búsqueda de proveedores en Turquía, verificación de empresas, estudio de mercado, logística y asesoría de comercio exterior."],
    products: ["Productos y Abastecimiento B2B | HKO Trade Hub", "Explore oportunidades de HKO Trade Hub: maquinaria, materiales de construcción y repuestos turcos, además de productos seleccionados de Chile."],
    suppliers: ["Buscar Compradores en Chile | HKO Trade Hub", "HKO Trade Hub apoya a fabricantes y exportadores turcos con búsqueda de compradores, distribuidores y desarrollo de mercado en Chile."],
    buyers: ["Buscar Proveedores en Turquía | HKO Trade Hub", "HKO Trade Hub ayuda a empresas chilenas a encontrar fabricantes y proveedores turcos con cotización, verificación y apoyo logístico."],
    blog: ["Guías de Comercio Turquía–Chile | HKO Trade Hub", "Lea las guías de HKO Trade Hub sobre comercio Turquía–Chile, proveedores, importación, exportación, cumplimiento y logística internacional."],
    contact: ["Contacto | HKO Trade Hub", "Comparta con HKO Trade Hub su necesidad de producto, proveedor, comprador o mercado."],
    quote: ["Solicite una Cotización | HKO Trade Hub", "Comparta sus necesidades de producto y comercio internacional con HKO Trade Hub para iniciar una búsqueda o plan comercial personalizado."],
  },
} as const;

export function getLocalizedMetadata(locale: Locale, pathname: string): Metadata {
  const localizedPath = pathname.replace(/^\/(tr|en|es)(?=\/|$)/, "");
  const segments = localizedPath.split("/").filter(Boolean);
  let title: string;
  let description: string;

  if (segments[0] === "products" && segments[1]) {
    const product = products.find((item) => item.slug === segments[1]);
    title = product ? `${product.names[locale]} | HKO Trade Hub` : routeMetadata[locale].products[0];
    description = product?.desc[locale] ?? routeMetadata[locale].products[1];
  } else if (segments[0] === "blog" && segments[1]) {
    const post = posts.find((item) => item.slug === segments[1]);
    title = post ? `${post.title[locale]} | HKO Trade Hub` : routeMetadata[locale].blog[0];
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
    "tr-TR": `${SITE_URL}/tr${languagePath}`,
    en: `${SITE_URL}/en${languagePath}`,
    "es-CL": `${SITE_URL}/es${languagePath}`,
    "x-default": `${SITE_URL}/en${languagePath}`,
  };

  return {
    title: { absolute: title },
    description,
    keywords: getKeywords(locale, segments, title),
    alternates: { canonical, languages },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
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
    tr: ["HKO Trade Hub", "HKOTradeHub", "hkotradehub", "hkotradehub.com", "Türkiye Şili ticaret", "Türkiye'den Şili'ye ihracat", "Şili'den Türkiye'ye ithalat", "Türkiye'de güvenilir tedarikçi bulma", "ithalat ihracat danışmanlığı"],
    en: ["HKO Trade Hub", "HKOTradeHub", "hkotradehub", "hkotradehub.com", "Turkey Chile trade", "import from Turkey to Chile", "export from Chile to Turkey", "verified manufacturers in Turkey", "B2B sourcing Turkey"],
    es: ["HKO Trade Hub", "HKOTradeHub", "hkotradehub", "hkotradehub.com", "comercio Turquía Chile", "importar desde Turquía a Chile", "exportar desde Chile a Turquía", "proveedores verificados en Turquía", "asesoría de importación"],
  }[locale];
  const routeSpecific = segments[0] === "products"
    ? locale === "tr" ? ["Türkiye'den Şili'ye ihraç edilen ürünler", "Türk yedek parça ihracatçıları", pageTitle] : locale === "en" ? ["products to import from Turkey", "Turkish spare parts exporters", pageTitle] : ["productos para importar de Turquía", "exportadores turcos de repuestos", pageTitle]
    : segments[0] === "services"
      ? locale === "tr" ? ["ithalat ihracat danışmanlığı", "tedarikçi araştırması"] : locale === "en" ? ["import export consulting", "supplier sourcing"] : ["consultoría de importación y exportación", "búsqueda de proveedores"]
      : [];
  return [...core, ...routeSpecific];
}
