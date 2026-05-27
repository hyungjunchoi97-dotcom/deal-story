import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInvestorStoryBySlug, ALL_INVESTOR_STORIES } from "@/data/investor-stories";
import { SITE_URL } from "@/lib/site";
import StoriesClient from "@/app/stories/[slug]/StoriesClient";

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
    title: `${story.titleEn} | Investor Stories | Deal Story`,
    description: story.excerptEn,
    keywords: story.tagsEn ?? story.tags,
    openGraph: {
      title: `${story.titleEn} | Deal Story`,
      description: story.excerptEn,
      type: "article",
      locale: "en_US",
    },
    alternates: {
      canonical: `/en/stories/${story.slug}`,
      languages: {
        ko: `/stories/${story.slug}`,
        en: `/en/stories/${story.slug}`,
        "x-default": `/stories/${story.slug}`,
      },
    },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default async function StoryPageEn({
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
        headline: story.titleEn,
        description: story.excerptEn,
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
          "@id": `${SITE_URL}/en/stories/${story.slug}`,
        },
        inLanguage: "en",
        keywords: (story.tagsEn ?? story.tags).join(", "),
      },
      ...(story.faq && story.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: story.faq.map(({ qEn, aEn }) => ({
                "@type": "Question",
                name: qEn,
                acceptedAnswer: { "@type": "Answer", text: aEn },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Investor Stories",
            item: `${SITE_URL}/en/stories`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: story.titleEn,
            item: `${SITE_URL}/en/stories/${story.slug}`,
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
      <StoriesClient story={story} lang="en" />
    </>
  );
}
