export const locales = ["tr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

const countryNames = {
  tr: { "Türkiye": "Türkiye", Chile: "Şili" },
  en: { "Türkiye": "Turkey", Chile: "Chile" },
  es: { "Türkiye": "Turquía", Chile: "Chile" },
} as const;

export function localizeCountry(country: string, locale: Locale) {
  return countryNames[locale][country as keyof typeof countryNames.tr] ?? country;
}

export const dictionaries = {
  tr: {
    nav:{home:"Ana Sayfa",about:"Hakkımızda",services:"Hizmetler",products:"Ürünler",suppliers:"Tedarikçiler",buyers:"Alıcılar",blog:"Blog",contact:"İletişim",quote:"Teklif İste"},
    hero:{eyebrow:"Türkiye–Şili İthalat İhracat",title:"Türkiye ve Şili arasında güvenilir B2B ticaret.",text:"Türkiye'den Şili'ye ihracat ve Şili'den Türkiye'ye ithalat için doğrulanmış tedarikçi ve alıcı bağlantıları, pazar araştırması, lojistik ve uçtan uca dış ticaret desteği sunuyoruz.",primary:"İthalat İhracat Ürünleri",secondary:"Teklif İste",supplier:"Tedarikçi Ol",trust:"Türkiye–Şili uzmanlığı · Küresel büyüme vizyonu"},
    home:{
      categoriesEyebrow:"Öncelikli sektörler",categoriesTitle:"Sınır ötesi büyüme için güçlü sektör ağı",categoriesText:"Sanayi, otomotiv, madencilik, tarım ve tüketim ürünlerinde seçilmiş ticaret fırsatlarını tek merkezde keşfedin.",
      servicesEyebrow:"Uçtan uca destek",servicesTitle:"Bir bağlantıdan daha fazlası",servicesText:"Doğru iş ortağını bulmaktan lojistik ve mevzuat koordinasyonuna kadar ticaret sürecinin kritik aşamalarında yanınızdayız.",
      routeEyebrow:"Uzman ticaret koridoru",routeTitle:"Türkiye’den Şili’ye, Şili’den dünyaya",routeText:"İstanbul, Valparaíso ve Santiago ekseninde yerel pazar bilgisiyle desteklenen güvenilir bir ticaret köprüsü kuruyoruz.",
      featuredEyebrow:"Seçilmiş fırsatlar",featuredTitle:"Öne çıkan ürünler",featuredText:"Uluslararası alıcı ve tedarikçiler için özenle seçilmiş ürün grupları.",
      processEyebrow:"Nasıl çalışır?",processTitle:"Fırsattan anlaşmaya sade bir süreç",processText:"İhtiyacınızı anlayarak uygun bağlantıyı kurar ve sonraki adımları netleştiririz.",
      trustEyebrow:"Güven odaklı yaklaşım",trustTitle:"Daha bilinçli uluslararası ticaret kararları",trustText:"Her fırsatı şeffaflık, doğrulama ve uygulanabilirlik çerçevesinde ele alıyoruz.",
      ctaTitle:"Bir sonraki uluslararası ticaret fırsatınızı birlikte oluşturalım.",ctaText:"Ürün, tedarikçi, alıcı veya pazar arayışınızı paylaşın. Ekibimiz size uygun bir başlangıç planı hazırlasın.",ctaPrimary:"Teklif Talebi Oluştur",ctaSecondary:"Ekibimizle Görüş"
    },
    common:{learn:"Detayları Gör",featured:"Öne Çıkan Ürünler",why:"Neden HKO Trade Hub?",ctaTitle:"Türkiye ve Şili arasında yeni bir ticaret fırsatı başlatın.",ctaText:"Ekibimiz ürün, tedarikçi, lojistik ve mevzuat ihtiyaçlarınızı değerlendirerek size özel yol haritası hazırlar.",contact:"Uzmanla Görüş"}
  },
  en: {
    nav:{home:"Home",about:"About",services:"Services",products:"Products",suppliers:"Suppliers",buyers:"Buyers",blog:"Blog",contact:"Contact",quote:"Request Quote"},
    hero:{eyebrow:"Turkey–Chile Import Export",title:"Trusted B2B trade between Turkey and Chile.",text:"Import from Turkey to Chile and export from Chile to Turkey with verified suppliers and buyers, market research, logistics and end-to-end international trade support.",primary:"Explore Import Products",secondary:"Request a Quote",supplier:"Become a Supplier",trust:"Turkey–Chile expertise · Global growth vision"},
    home:{
      categoriesEyebrow:"Priority industries",categoriesTitle:"A strong industry network for cross-border growth",categoriesText:"Discover selected trade opportunities across industry, automotive, mining, agriculture and consumer goods.",
      servicesEyebrow:"End-to-end support",servicesTitle:"More than a business connection",servicesText:"From finding the right partner to coordinating logistics and compliance, we support the critical stages of your trade journey.",
      routeEyebrow:"Specialized trade corridor",routeTitle:"From Turkey to Chile, from Chile to the world",routeText:"We build a trusted trade bridge across Istanbul, Valparaíso and Santiago, supported by practical local market intelligence.",
      featuredEyebrow:"Selected opportunities",featuredTitle:"Featured products",featuredText:"Carefully selected product groups for international buyers and suppliers.",
      processEyebrow:"How it works",processTitle:"A clear path from opportunity to agreement",processText:"We understand your needs, identify the right connection and clarify the next steps.",
      trustEyebrow:"Trust-led approach",trustTitle:"Make better-informed international trade decisions",trustText:"We assess every opportunity through transparency, verification and commercial feasibility.",
      ctaTitle:"Let’s build your next international trade opportunity.",ctaText:"Share your product, supplier, buyer or market requirement. Our team will prepare a practical starting plan.",ctaPrimary:"Create a Trade Request",ctaSecondary:"Talk to Our Team"
    },
    common:{learn:"View Details",featured:"Featured Products",why:"Why HKO Trade Hub?",ctaTitle:"Start a new trade opportunity between Turkey and Chile.",ctaText:"Our team evaluates your product, supplier, logistics and compliance needs to build a tailored roadmap.",contact:"Talk to an Expert"}
  },
  es: {
    nav:{home:"Inicio",about:"Nosotros",services:"Servicios",products:"Productos",suppliers:"Proveedores",buyers:"Compradores",blog:"Blog",contact:"Contacto",quote:"Solicitar Cotización"},
    hero:{eyebrow:"Importación Turquía–Chile",title:"Comercio B2B confiable entre Turquía y Chile.",text:"Importe desde Turquía a Chile y exporte desde Chile a Turquía con proveedores y compradores verificados, estudio de mercado, logística y apoyo integral de comercio exterior.",primary:"Ver Productos para Importar",secondary:"Solicitar Cotización",supplier:"Ser Proveedor",trust:"Experiencia Turquía–Chile · Visión de crecimiento global"},
    home:{
      categoriesEyebrow:"Industrias prioritarias",categoriesTitle:"Una red industrial sólida para crecer sin fronteras",categoriesText:"Descubra oportunidades seleccionadas en industria, automoción, minería, agricultura y bienes de consumo.",
      servicesEyebrow:"Apoyo integral",servicesTitle:"Más que una conexión comercial",servicesText:"Desde encontrar el socio adecuado hasta coordinar logística y cumplimiento, apoyamos las etapas críticas de su operación.",
      routeEyebrow:"Corredor comercial especializado",routeTitle:"De Turquía a Chile, de Chile al mundo",routeText:"Construimos un puente confiable entre Estambul, Valparaíso y Santiago, respaldado por conocimiento práctico del mercado local.",
      featuredEyebrow:"Oportunidades seleccionadas",featuredTitle:"Productos destacados",featuredText:"Grupos de productos cuidadosamente seleccionados para compradores y proveedores internacionales.",
      processEyebrow:"¿Cómo funciona?",processTitle:"Un camino claro desde la oportunidad hasta el acuerdo",processText:"Comprendemos su necesidad, identificamos la conexión adecuada y aclaramos los próximos pasos.",
      trustEyebrow:"Enfoque basado en confianza",trustTitle:"Decisiones mejor informadas en comercio internacional",trustText:"Evaluamos cada oportunidad con transparencia, verificación y viabilidad comercial.",
      ctaTitle:"Construyamos su próxima oportunidad de comercio internacional.",ctaText:"Comparta su necesidad de producto, proveedor, comprador o mercado. Nuestro equipo preparará un plan inicial práctico.",ctaPrimary:"Crear Solicitud Comercial",ctaSecondary:"Hablar con el Equipo"
    },
    common:{learn:"Ver Detalles",featured:"Productos Destacados",why:"¿Por qué HKO Trade Hub?",ctaTitle:"Inicie una nueva oportunidad comercial entre Turquía y Chile.",ctaText:"Nuestro equipo evalúa sus necesidades de producto, proveedor, logística y cumplimiento para crear una hoja de ruta personalizada.",contact:"Hablar con un Experto"}
  }
} as const;
