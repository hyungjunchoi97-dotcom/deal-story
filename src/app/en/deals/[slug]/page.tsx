/**
 * English deal detail route — Server Component
 * /en/deals/[slug] → generateMetadata + JSON-LD + DealPageClient
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDealBySlugEn, getAllSlugsEn, ALL_DEALS_EN } from "@/data/deals/en";
import { getLboDealBySlug, getAllLboSlugs } from "@/data/deals/lbo";
import { SITE_URL } from "@/lib/site";
import DealPageClient from "./DealPageClient";
import LboPageClient from "@/app/deals/[slug]/LboPageClient";

// ── Static path generation ────────────────────────────────────
export function generateStaticParams() {
  return [
    ...getAllSlugsEn().map((slug) => ({ slug })),
    ...getAllLboSlugs().map((slug) => ({ slug })),
  ];
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

  // LBO deal check first
  const lboDeal = getLboDealBySlug(slug);
  if (lboDeal) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", headline: lboDeal.seo.title, description: lboDeal.seo.description, inLanguage: "en" },
            { "@type": "FAQPage", mainEntity: (lboDeal.faq ?? []).map(({ qEn, aEn }) => ({ "@type": "Question", name: qEn, acceptedAnswer: { "@type": "Answer", text: aEn } })) },
          ],
        }) }} />
        <LboPageClient deal={lboDeal} lang="en" />
      </>
    );
  }

  const deal = getDealBySlugEn(slug);
  if (!deal) notFound();

  // Article + FAQPage + BreadcrumbList JSON-LD
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
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/deals/${slug}`,
        },
        image: deal.seo.ogImage ?? `/api/og?slug=${slug}&lang=en`,
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Deal Archive", item: `${SITE_URL}/en/deals` },
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/en/deals/${slug}` },
        ],
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
