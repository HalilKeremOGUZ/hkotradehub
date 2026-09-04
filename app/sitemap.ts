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
  const commonPage = !page.startsWith("trade/");
  if (!commonPage) return undefined;
  return {
    languages: {
      tr: `${SITE_URL}/tr${page ? `/${page}` : ""}`,
      en: `${SITE_URL}/en${page ? `/${page}` : ""}`,
      es: `${SITE_URL}/es${page ? `/${page}` : ""}`,
      "x-default": `${SITE_URL}/en${page ? `/${page}` : ""}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-04T00:00:00.000Z");
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
      changeFrequency: page === "" ? "weekly" as const : page.startsWith("blog/") ? "monthly" as const : "monthly" as const,
      priority: page === "" ? 1 : page.startsWith("trade/") ? 0.9 : page === "products" || page === "services" ? 0.85 : page.includes("/") ? 0.7 : 0.75,
      alternates: languageAlternates(page),
    }));
  });
}
