import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInvestorStoryBySlug, ALL_INVESTOR_STORIES } from "@/data/investor-stories";
import { SITE_URL } from "@/lib/site";
import StoriesClient from "./StoriesClient";

// ── Static params ──────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return ALL_INVESTOR_STORIES.filter((s) => s.published).map((s) => ({
    slug: s.slug,
  }));
}

// ── Metadata ───────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getInvestorStoryBySlug(slug);
  if (!story) return { title: "Not Found" };

  return {
    title: `${story.title} | 투자자 일화 | Deal Story`,
    description: story.excerpt,
    keywords: story.tags,
    openGraph: {
      title: `${story.title} | Deal Story`,
      description: story.excerpt,
      type: "article",
      locale: "ko_KR",
    },
    alternates: {
      canonical: `/stories/${story.slug}`,
      languages: {
        ko: `/stories/${story.slug}`,
        en: `/en/stories/${story.slug}`,
        "x-default": `/stories/${story.slug}`,
      },
    },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getInvestorStoryBySlug(slug);
  if (!story) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: story.title,
        description: story.excerpt,
        datePublished: `${story.dealYear}-01-01`,
        dateModified: `${story.dealYear}-01-01`,
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
            width: 512,
            height: 512,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/stories/${story.slug}`,
        },
        inLanguage: "ko",
        keywords: story.tags.join(", "),
      },
      ...(story.faq && story.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: story.faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "투자자 일화",
            item: `${SITE_URL}/stories`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: story.title,
            item: `${SITE_URL}/stories/${story.slug}`,
          },
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
      <StoriesClient story={story} lang="ko" />
    </>
  );
}
