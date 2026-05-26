/**
 * 딜 상세 동적 라우트 — 서버 컴포넌트
 * /deals/[slug] → generateMetadata + JSON-LD + DealPageClient
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDealBySlug, getAllSlugs, ALL_DEALS } from "@/data/deals";
import { getLboDealBySlug, getAllLboSlugs } from "@/data/deals/lbo";
import { SITE_URL } from "@/lib/site";
import DealPageClient from "./DealPageClient";
import LboPageClient from "./LboPageClient";

// ── 정적 경로 사전 생성 ────────────────────────────────────────
export function generateStaticParams() {
  return [
    ...getAllSlugs().map((slug) => ({ slug })),
    ...getAllLboSlugs().map((slug) => ({ slug })),
  ];
}

// ── SEO 메타데이터 ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const deal = getDealBySlug(slug);
  if (!deal) return { title: "딜을 찾을 수 없습니다" };

  const ogImage = deal.seo.ogImage ?? `/api/og?slug=${slug}`;

  return {
    title: deal.seo.title,
    description: deal.seo.description,
    keywords: deal.seo.keywords,
    authors: [{ name: "Deal Story" }],
    openGraph: {
      title: deal.seo.title,
      description: deal.seo.description,
      type: "article",
      locale: "ko_KR",
      alternateLocale: ["en_US"],
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
      canonical: `/deals/${slug}`,
      languages: {
        ko: `/deals/${slug}`,
        en: `/en/deals/${slug}`,
        "x-default": `/deals/${slug}`,
      },
    },
  };
}

// ── 페이지 ─────────────────────────────────────────────────────
export default async function DealPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // LBO 딜 먼저 확인
  const lboDeal = getLboDealBySlug(slug);
  if (lboDeal) {
    const lboJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: lboDeal.seo.title,
          description: lboDeal.seo.description,
          keywords: lboDeal.seo.keywords.join(", "),
          datePublished: lboDeal.announcedAt,
          dateModified: lboDeal.closedAt ?? lboDeal.announcedAt,
          author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
          publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
          mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/deals/${slug}` },
          inLanguage: "ko",
        },
        {
          "@type": "FAQPage",
          mainEntity: (lboDeal.faq ?? []).map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "딜 아카이브", item: `${SITE_URL}/deals` },
            { "@type": "ListItem", position: 3, name: lboDeal.title, item: `${SITE_URL}/deals/${slug}` },
          ],
        },
      ],
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lboJsonLd) }} />
        <LboPageClient deal={lboDeal} lang="ko" />
      </>
    );
  }

  const deal = getDealBySlug(slug);
  if (!deal) notFound();

  // Article + FAQPage + BreadcrumbList JSON-LD (Google 리치 결과 타겟)
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
          "@id": `${SITE_URL}/deals/${slug}`,
        },
        image: deal.seo.ogImage ?? `/api/og?slug=${slug}`,
        inLanguage: "ko",
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
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "딜 아카이브", item: `${SITE_URL}/deals` },
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/deals/${slug}` },
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
        relatedDeals={ALL_DEALS
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
