import type { MetadataRoute } from "next";
import { posts, products } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

const locales = ["tr", "en", "es"] as const;
const pages = ["", "about", "services", "products", "suppliers", "buyers", "blog", "contact", "quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pages,
    ...products.map((product) => `products/${product.slug}`),
    ...posts.map((post) => `blog/${post.slug}`),
  ];
  return locales.flatMap((locale) =>
    paths.map((page) => ({
      url: SITE_URL + "/" + locale + (page ? "/" + page : ""),
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" as const : "monthly" as const,
      priority: page === "" ? 1 : page.includes("/") ? 0.6 : 0.7,
    })),
  );
}
