/**
 * Dynamic XML Sitemap — KO + EN bilingual
 * Generates /sitemap.xml with xhtml:link hreflang alternates for every URL.
 * Google uses this to understand the KO ↔ EN relationship for all pages.
 */
import type { MetadataRoute } from "next";
import { ALL_DEALS } from "@/data/deals";
import { ALL_CONCEPTS } from "@/data/market-concepts";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";
import { ALL_MARKET_DEALS } from "@/data/market-deals";
import { ALL_NOTES } from "@/data/notes";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

// Keep in sync with deal-101/page.tsx and en/deal-101/page.tsx CONCEPT_CATALOG
const PUBLISHED_CONCEPTS = [
  "ev-ebitda",
  "adjusted-ebitda",
  "synergy",
  "acquisition-premium",
  "ev-sales",
  "arr-multiple",
  "saas-valuation",
  "ma-process",
  "lbo",
  "tender-offer",
  "spinoff",
  "reverse-morris-trust",
  "stock-vs-asset-deal",
  "pmi",
  "ipo-vs-ma-exit",
  "break-fee",
  "mac-clause",
  "antitrust",
  "regulatory-risk",
  "fdd",
  "cdd",
  "ldd",
  // FDD 시리즈 — 작성 완료된 챕터만 주석 해제 (Deal101IndexClient published flag와 동기화)
  // "fdd-vs-audit",
  // "fdd-engagement",
  // "fdd-dataroom",
  "fdd-qoe",
  // "fdd-qona",
  // "fdd-red-flags",
  // "fdd-report-spa",
  "strategic-ma",
  "vertical-integration",
  "subscription-economy",
  "platform-strategy",
  "competitive-moat",
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

    // ── Market Story listing ───────────────────────────────────
    ...pair("/market", "/en/market", { changeFrequency: "weekly", priority: 0.9 }),

    // ── Market deal pages (published only) ────────────────────
    ...ALL_MARKET_DEALS.filter((d) => d.published).flatMap((deal) =>
      pair(`/market/${deal.slug}`, `/en/market/${deal.slug}`, {
        changeFrequency: "monthly",
        priority: 0.85,
      })
    ),

    // ── Market concept pages (legacy — currently empty) ────────
    ...ALL_CONCEPTS.flatMap((concept) =>
      pair(`/market/${concept.slug}`, `/en/market/${concept.slug}`, {
        changeFrequency: "monthly",
        priority: 0.85,
      })
    ),

    // ── Market 101 listing ─────────────────────────────────────
    ...pair("/market-101", "/en/market-101", { changeFrequency: "weekly", priority: 0.9 }),

    // ── Market 101 concept pages ───────────────────────────────
    ...ALL_MARKET101_CONCEPTS.flatMap((concept) =>
      pair(`/market-101/${concept.slug}`, `/en/market-101/${concept.slug}`, {
        changeFrequency: "monthly",
        priority: 0.85,
      })
    ),

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

    // ── Notes index ────────────────────────────────────────────
    ...pair("/notes", "/en/notes", { changeFrequency: "weekly", priority: 0.9 }),

    // ── Notes detail pages ─────────────────────────────────────
    ...ALL_NOTES.filter((n) => n.status === "published").flatMap((note) =>
      pair(`/notes/${note.slug}`, `/en/notes/${note.slug}`, {
        lastModified: note.date,
        changeFrequency: "monthly",
        priority: 0.85,
      })
    ),
  ];
}
