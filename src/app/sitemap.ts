/**
 * Dynamic XML Sitemap — KO + EN bilingual
 * Generates /sitemap.xml with xhtml:link hreflang alternates for every URL.
 * Google uses this to understand the KO ↔ EN relationship for all pages.
 */
import type { MetadataRoute } from "next";
import { ALL_DEALS } from "@/data/deals";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

// Keep in sync with deal-101/page.tsx and en/deal-101/page.tsx CONCEPT_CATALOG
const PUBLISHED_CONCEPTS = [
  "ev-ebitda",
  "adjusted-ebitda",
] as const;

function pair(
  ko: string,
  en: string,
  opts: {
    lastModified?: string | Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  } = {}
): MetadataRoute.Sitemap {
  const { lastModified = new Date(), changeFrequency = "monthly", priority = 0.8 } = opts;
  const langs = {
    ko: `${BASE}${ko}`,
    en: `${BASE}${en}`,
    "x-default": `${BASE}${ko}`,
  };
  return [
    { url: `${BASE}${ko}`, lastModified, changeFrequency, priority, alternates: { languages: langs } },
    { url: `${BASE}${en}`, lastModified, changeFrequency, priority, alternates: { languages: langs } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [

    // ── Home ───────────────────────────────────────────────────
    ...pair("/", "/en", { changeFrequency: "weekly", priority: 1.0 }),

    // ── Deals listing ──────────────────────────────────────────
    ...pair("/deals", "/en/deals", { changeFrequency: "weekly", priority: 0.9 }),

    // ── Deal 101 index ─────────────────────────────────────────
    ...pair("/deal-101", "/en/deal-101", { changeFrequency: "weekly", priority: 0.9 }),

    // ── About ──────────────────────────────────────────────────
    ...pair("/about", "/en/about", { changeFrequency: "monthly", priority: 0.5 }),

    // ── Published concept pages ────────────────────────────────
    ...PUBLISHED_CONCEPTS.flatMap((slug) =>
      pair(`/deal-101/${slug}`, `/en/deal-101/${slug}`, {
        changeFrequency: "monthly",
        priority: 0.85,
      })
    ),

    // ── Individual deal pages ──────────────────────────────────
    ...ALL_DEALS.flatMap((deal) =>
      pair(`/deals/${deal.slug}`, `/en/deals/${deal.slug}`, {
        lastModified: deal.closedAt ?? deal.announcedAt,
        changeFrequency: "monthly",
        priority: 0.85,
      })
    ),
  ];
}
