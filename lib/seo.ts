import type { Metadata } from "next";
import { posts, products } from "@/lib/data";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.hkotradehub.com";

const routeMetadata = {
  tr: {
    "": ["Küresel B2B Ticaret Platformu", "Türkiye ve Şili arasında güvenilir tedarikçi bağlantıları, pazar bilgisi, lojistik koordinasyonu ve uçtan uca ticaret desteği."],
    about: ["Hakkımızda", "HKO Trade Hub'ın Türkiye–Şili ticaretindeki yerel uzmanlığını, güven odaklı yaklaşımını ve küresel iş ağını keşfedin."],
    services: ["Uluslararası Ticaret Hizmetleri", "Tedarikçi bulma, doğrulama, pazar araştırması, lojistik ve mevzuat koordinasyonu için uçtan uca B2B ticaret hizmetleri."],
    products: ["Ürünler ve Ticaret Fırsatları", "Türkiye ve Şili'deki doğrulanmış iş ağlarından seçilmiş tarım, gıda, makine, yapı ve yedek parça fırsatlarını inceleyin."],
    suppliers: ["Tedarikçiler İçin Küresel Pazarlara Erişim", "Ürünlerinizi uluslararası alıcılara ulaştırın; doğrulama, pazar geliştirme ve ihracat koordinasyonu desteği alın."],
    buyers: ["Alıcılar İçin Güvenilir Tedarik", "Türkiye ve Şili'de doğrulanmış tedarikçilere ulaşın; ürün araştırması, teklif ve lojistik koordinasyonu desteği alın."],
    blog: ["Uluslararası Ticaret Rehberleri", "Tedarik, ihracat, mevzuata uyum ve lojistik hakkında Türkiye–Şili ticaretine yönelik pratik rehberler."],
    contact: ["İletişim", "Ürün, tedarikçi, alıcı veya pazar ihtiyacınızı HKO Trade Hub ekibiyle paylaşın."],
    quote: ["Ticaret Teklifi İsteyin", "Ürün ve uluslararası ticaret ihtiyacınızı paylaşın; ekibimiz size özel bir başlangıç planı ve teklif hazırlasın."],
  },
  en: {
    "": ["Global B2B Trade Platform", "Trusted supplier connections, market intelligence, logistics coordination and end-to-end trade support between Türkiye and Chile."],
    about: ["About Us", "Discover HKO Trade Hub's local Türkiye–Chile expertise, trust-led approach and global business network."],
    services: ["International Trade Services", "End-to-end B2B trade services for supplier sourcing, verification, market research, logistics and compliance coordination."],
    products: ["Products and Trade Opportunities", "Explore selected agriculture, food, machinery, construction and spare-parts opportunities from verified networks in Türkiye and Chile."],
    suppliers: ["Global Market Access for Suppliers", "Reach international buyers with supplier verification, market development and export coordination support."],
    buyers: ["Trusted Sourcing for Buyers", "Connect with verified suppliers in Türkiye and Chile with product research, quotation and logistics coordination support."],
    blog: ["International Trade Guides", "Practical guidance on sourcing, exporting, compliance and logistics for companies trading between Türkiye and Chile."],
    contact: ["Contact Us", "Tell the HKO Trade Hub team about your product, supplier, buyer or market requirement."],
    quote: ["Request a Trade Quote", "Share your product and international trade requirements for a tailored starting plan and quotation."],
  },
  es: {
    "": ["Plataforma Global de Comercio B2B", "Conexiones confiables de proveedores, inteligencia de mercado, coordinación logística y apoyo comercial integral entre Türkiye y Chile."],
    about: ["Sobre Nosotros", "Conozca la experiencia local de HKO Trade Hub en Türkiye–Chile, su enfoque basado en la confianza y su red empresarial global."],
    services: ["Servicios de Comercio Internacional", "Servicios B2B integrales de búsqueda y verificación de proveedores, estudio de mercado, logística y coordinación normativa."],
    products: ["Productos y Oportunidades Comerciales", "Explore oportunidades seleccionadas en agricultura, alimentos, maquinaria, construcción y repuestos de redes verificadas en Türkiye y Chile."],
    suppliers: ["Acceso a Mercados Globales para Proveedores", "Llegue a compradores internacionales con apoyo en verificación, desarrollo de mercado y coordinación de exportaciones."],
    buyers: ["Abastecimiento Confiable para Compradores", "Conecte con proveedores verificados en Türkiye y Chile con apoyo en búsqueda, cotización y coordinación logística."],
    blog: ["Guías de Comercio Internacional", "Orientación práctica sobre abastecimiento, exportación, cumplimiento y logística para empresas que comercian entre Türkiye y Chile."],
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
