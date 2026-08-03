import type { MetadataRoute } from "next";

const base = "https://www.hkotradehub.com";
const locales = ["tr", "en", "es"] as const;
const pages = ["", "about", "services", "products", "suppliers", "buyers", "blog", "contact", "quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: base + "/" + locale + (page ? "/" + page : ""),
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" as const : "monthly" as const,
      priority: page === "" ? 1 : 0.7,
    })),
  );
}
