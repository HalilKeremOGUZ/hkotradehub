export const locales = ["tr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const dictionaries = {
tr: {
 nav:{home:"Ana Sayfa",about:"Hakkımızda",services:"Hizmetler",products:"Ürünler",suppliers:"Tedarikçiler",buyers:"Alıcılar",blog:"Blog",contact:"İletişim",quote:"Teklif Al"},
 hero:{eyebrow:"Türkiye ↔ Şili Ticaret Köprüsü",title:"Sınırların ötesinde güvenilir B2B ticaret",text:"Doğrulanmış firmalar, yerel uzmanlık ve uçtan uca dış ticaret desteğiyle iki pazarı tek platformda buluşturuyoruz.",primary:"Ticaret fırsatlarını keşfet",secondary:"Teklif iste"},
 common:{learn:"Detayları Gör",featured:"Öne Çıkan Ürünler",why:"Neden HKO Trade Hub?",ctaTitle:"Türkiye ve Şili arasında yeni bir ticaret fırsatı başlatın.",ctaText:"Ekibimiz ürün, tedarikçi, lojistik ve mevzuat ihtiyaçlarınızı değerlendirerek size özel yol haritası hazırlar.",contact:"Uzmanla Görüş"}
},
en: {
 nav:{home:"Home",about:"About",services:"Services",products:"Products",suppliers:"Suppliers",buyers:"Buyers",blog:"Blog",contact:"Contact",quote:"Request Quote"},
 hero:{eyebrow:"Türkiye ↔ Chile Trade Bridge",title:"Trusted B2B trade beyond borders",text:"We connect both markets through verified companies, local expertise and end-to-end foreign trade support.",primary:"Explore opportunities",secondary:"Request a quote"},
 common:{learn:"View Details",featured:"Featured Products",why:"Why HKO Trade Hub?",ctaTitle:"Start a new trade opportunity between Türkiye and Chile.",ctaText:"Our team evaluates your product, supplier, logistics and compliance needs to build a tailored roadmap.",contact:"Talk to an Expert"}
},
es: {
 nav:{home:"Inicio",about:"Nosotros",services:"Servicios",products:"Productos",suppliers:"Proveedores",buyers:"Compradores",blog:"Blog",contact:"Contacto",quote:"Solicitar Cotización"},
 hero:{eyebrow:"Puente Comercial Türkiye ↔ Chile",title:"Comercio B2B confiable sin fronteras",text:"Conectamos ambos mercados mediante empresas verificadas, experiencia local y apoyo integral de comercio exterior.",primary:"Explorar oportunidades",secondary:"Solicitar cotización"},
 common:{learn:"Ver Detalles",featured:"Productos Destacados",why:"¿Por qué HKO Trade Hub?",ctaTitle:"Inicie una nueva oportunidad comercial entre Türkiye y Chile.",ctaText:"Nuestro equipo evalúa sus necesidades de producto, proveedor, logística y cumplimiento para crear una hoja de ruta personalizada.",contact:"Hablar con un Experto"}
}} as const;
