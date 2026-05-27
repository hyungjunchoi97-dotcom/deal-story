/**
 * Notes — Detail page (KO)
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_NOTES, getNoteBySlug } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import NoteDetailClient from "./NoteDetailClient";

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

  return {
    title: `${note.title} | Notes | Deal Story`,
    description: note.description,
    keywords: note.keyPoints.slice(0, 5),
    openGraph: {
      title: `${note.title} | Deal Story`,
      description: note.description,
      type: "article",
      locale: "ko_KR",
      images: [{ url: "/api/og?lang=ko", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/api/og?lang=ko"],
    },
    alternates: {
      canonical: `/notes/${note.slug}`,
      languages: {
        ko: `/notes/${note.slug}`,
        en: `/en/notes/${note.slug}`,
        "x-default": `/notes/${note.slug}`,
      },
    },
  };
}

export default async function NoteDetailPage({
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
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    dateModified: note.date,
    author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Deal Story",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/notes/${note.slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NoteDetailClient note={note} lang="ko" />
    </>
  );
}
