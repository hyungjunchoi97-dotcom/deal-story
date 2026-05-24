/**
 * English deal detail route — Server Component
 * /en/deals/[slug] → generateMetadata + JSON-LD + DealPageClient
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDealBySlugEn, getAllSlugsEn, ALL_DEALS_EN } from "@/data/deals/en";
import { SITE_URL } from "@/lib/site";
import DealPageClient from "./DealPageClient";

// ── Static path generation ────────────────────────────────────
export function generateStaticParams() {
  return getAllSlugsEn().map((slug) => ({ slug }));
}

// ── SEO metadata ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deal = getDealBySlugEn(slug);
  if (!deal) return { title: "Deal not found" };

  const ogImage = deal.seo.ogImage ?? `/api/og?slug=${slug}&lang=en`;

  return {
    title: deal.seo.title,
    description: deal.seo.description,
    keywords: deal.seo.keywords,
    authors: [{ name: "Deal Story" }],
    openGraph: {
      title: deal.seo.title,
      description: deal.seo.description,
      type: "article",
      locale: "en_US",
      alternateLocale: ["ko_KR"],
      publishedTime: deal.announcedAt,
      modifiedTime: deal.closedAt ?? deal.announcedAt,
      tags: deal.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: deal.seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: deal.seo.title,
      description: deal.seo.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/en/deals/${slug}`,
      languages: {
        ko: `/deals/${slug}`,
        en: `/en/deals/${slug}`,
        "x-default": `/deals/${slug}`,
      },
    },
  };
}

// ── Page ──────────────────────────────────────────────────────
export default async function DealPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deal = getDealBySlugEn(slug);
  if (!deal) notFound();

  // Article + FAQPage JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: deal.seo.title,
        description: deal.seo.description,
        keywords: deal.seo.keywords.join(", "),
        datePublished: deal.announcedAt,
        dateModified: deal.closedAt ?? deal.announcedAt,
        author: { "@type": "Organization", name: "Deal Story" },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          logo: { "@type": "ImageObject", url: "/logo.png" },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/deals/${slug}`,
        },
        ...(deal.seo.ogImage ? { image: deal.seo.ogImage } : {}),
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: deal.faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DealPageClient
        deal={deal}
        lang="en"
        relatedDeals={ALL_DEALS_EN
          .filter((d) => d.slug !== slug)
          .sort((a, b) =>
            (a.category === deal.category ? 0 : 1) - (b.category === deal.category ? 0 : 1)
          )
          .slice(0, 3)
          .map(({ slug, title, category, dealSummary }) => ({ slug, title, category, dealSummary }))
        }
      />
    </>
  );
}
