/**
 * Notes — Detail page (EN)
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_NOTES, getNoteBySlug } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import NoteDetailClient from "@/app/notes/[slug]/NoteDetailClient";

export function generateStaticParams() {
  return ALL_NOTES.filter((n) => n.status === "published").map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return { title: "Not Found" };

  const title = note.titleEn ?? note.title;
  const description = note.descriptionEn ?? note.description;

  return {
    title: `${title} | Notes | Deal Story`,
    description,
    openGraph: {
      title: `${title} | Deal Story`,
      description,
      type: "article",
      locale: "en_US",
      alternateLocale: ["ko_KR"],
      images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/api/og?lang=en"],
    },
    alternates: {
      canonical: `/en/notes/${note.slug}`,
      languages: {
        ko: `/notes/${note.slug}`,
        en: `/en/notes/${note.slug}`,
        "x-default": `/notes/${note.slug}`,
      },
    },
  };
}

export default async function NoteDetailPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.titleEn ?? note.title,
    description: note.descriptionEn ?? note.description,
    datePublished: note.date,
    dateModified: note.date,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Deal Story",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/notes/${note.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NoteDetailClient note={note} lang="en" />
    </>
  );
}
