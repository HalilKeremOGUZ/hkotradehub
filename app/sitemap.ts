import type { MetadataRoute } from "next";
import { posts, products } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

const locales = ["tr", "en", "es"] as const;
const pages = ["", "about", "services", "products", "suppliers", "buyers", "blog", "contact", "quote"];
const tradePages: Record<(typeof locales)[number], string[]> = {
  es: ["importar-desde-turquia-a-chile", "proveedores-en-turquia", "maquinaria-turca", "repuestos-turquia", "equipos-industriales-turquia"],
  tr: ["siliye-ihracat", "silide-distributor-bulma"],
  en: ["turkey-chile-trade"],
};

function languageAlternates(page: string) {
  if (page.startsWith("trade/")) return undefined;
  const suffix = page ? `/${page}` : "";
  return {
    languages: {
      "tr-TR": `${SITE_URL}/tr${suffix}`,
      en: `${SITE_URL}/en${suffix}`,
      "es-CL": `${SITE_URL}/es${suffix}`,
      "x-default": `${SITE_URL}/en${suffix}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-11T00:00:00.000Z");
  return locales.flatMap((locale) => {
    const paths = [
      ...pages,
      ...products.map((product) => `products/${product.slug}`),
      ...posts.map((post) => `blog/${post.slug}`),
      ...tradePages[locale].map((slug) => `trade/${slug}`),
    ];
    return paths.map((page) => ({
      url: `${SITE_URL}/${locale}${page ? `/${page}` : ""}`,
      lastModified,
      changeFrequency: page === "" || page === "products" ? "weekly" as const : "monthly" as const,
      priority: page === "" ? 1 : page === "products" ? 0.95 : page.startsWith("trade/") ? 0.9 : page.startsWith("products/") ? 0.88 : page === "about" || page === "services" || page === "suppliers" || page === "buyers" ? 0.85 : page.includes("/") ? 0.7 : 0.75,
      alternates: languageAlternates(page),
    }));
  });
}
