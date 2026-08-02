import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { posts } from "@/lib/data";
import { isLocale } from "@/lib/i18n";

const copy = {
  tr: {
    eyebrow: "Blog",
    title: "İki pazar için ticaret istihbaratı",
    text: "Tedarik, ihracat, mevzuata uyum ve lojistik konularında pratik rehberlik.",
    summary: "Türkiye ve Şili arasında ticaret yapan şirketler için uygulanabilir içgörüler.",
    readArticle: "Makaleyi oku",
  },
  en: {
    eyebrow: "Blog",
    title: "Trade intelligence for two markets",
    text: "Practical guidance on sourcing, exporting, compliance and logistics.",
    summary: "Actionable insights for companies trading across Türkiye and Chile.",
    readArticle: "Read article",
  },
  es: {
    eyebrow: "Blog",
    title: "Inteligencia comercial para dos mercados",
    text: "Orientación práctica sobre abastecimiento, exportación, cumplimiento normativo y logística.",
    summary: "Información práctica para empresas que comercian entre Türkiye y Chile.",
    readArticle: "Leer artículo",
  },
} as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="section">
        <div className="container-shell grid gap-6">
          {posts.map((post) => (
            <article className="card p-8" key={post.slug}>
              <time className="text-xs uppercase tracking-widest text-ink/40">{post.date}</time>
              <h2 className="mt-3 text-2xl font-semibold">{post.title[locale]}</h2>
              <p className="mt-3 text-ink/60">{t.summary}</p>
              <Link href={`/${locale}/blog/${post.slug}`} className="mt-5 inline-block font-semibold text-copper">
                {t.readArticle} →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
