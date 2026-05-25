import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealCard from "@/components/home/DealCard";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { ALL_CONCEPTS } from "@/data/market-concepts";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";

export const metadata: Metadata = {
  title: "Deal Story — Deal & Capital Markets Archive",
  description:
    "Deal Story (M&A·PE·IPO archive) and Market Story (DCM·ECM·S&T archive) — your financial knowledge hub.",
  alternates: {
    canonical: "/en",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

const SECTIONS = [
  {
    key: "deals",
    href: "/en/deals",
    badge: "M&A · PE · IPO",
    badgeBg: "bg-blue-50 dark:bg-blue-900/30",
    badgeFg: "text-blue-700 dark:text-blue-300",
    accentBar: "bg-blue-500",
    title: "Deal Story",
    desc: "In-depth analysis of landmark M&A, PE, and IPO transactions — structure, valuation, and post-deal outcomes.",
    count: `${ALL_DEALS_EN.length} deals`,
    cta: "Browse deals →",
    ctaColor: "text-blue-600 dark:text-blue-400",
  },
  {
    key: "market",
    href: "/en/market",
    badge: "DCM · ECM · S&T",
    badgeBg: "bg-teal-50 dark:bg-teal-900/30",
    badgeFg: "text-teal-700 dark:text-teal-300",
    accentBar: "bg-teal-500",
    title: "Market Story",
    desc: "Capital markets knowledge archive — DCM, ECM, S&T, Chinese Wall, and Syndication explained with real deal examples.",
    count: `${ALL_CONCEPTS.length} concepts`,
    cta: "Browse market →",
    ctaColor: "text-teal-600 dark:text-teal-400",
  },
  {
    key: "deal101",
    href: "/en/deal-101",
    badge: "Concept Dictionary",
    badgeBg: "bg-violet-50 dark:bg-violet-900/30",
    badgeFg: "text-violet-700 dark:text-violet-300",
    accentBar: "bg-violet-500",
    title: "Deal 101",
    desc: "Essential M&A and PE concepts — from EV/EBITDA to LBO, syndication, and break-up fees, all in one place.",
    count: "29 concepts",
    cta: "Learn concepts →",
    ctaColor: "text-violet-600 dark:text-violet-400",
  },
  {
    key: "market101",
    href: "/en/market-101",
    badge: "Markets Dictionary",
    badgeBg: "bg-teal-50 dark:bg-teal-900/30",
    badgeFg: "text-teal-700 dark:text-teal-300",
    accentBar: "bg-teal-400",
    title: "Market 101",
    desc: "Capital markets concept dictionary — DCM, ECM, S&T, and regulation explained with real deal examples.",
    count: `${ALL_MARKET101_CONCEPTS.length} concepts`,
    cta: "Browse Market 101 →",
    ctaColor: "text-teal-600 dark:text-teal-400",
  },
] as const;

const RECENT_DEALS = ALL_DEALS_EN.slice(0, 6);

export default function HubPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <p className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
              Financial Knowledge Hub
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Deal Story
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Deal Story (M&amp;A·PE·IPO archive) and Market Story (DCM·ECM·S&amp;T archive) —
              explore landmark deals and capital markets structures in one place.
            </p>
          </div>
        </section>

        {/* ── Section cards ── */}
        <section className="max-w-3xl mx-auto px-5 py-10">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
            Explore Archives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {SECTIONS.map((s) => (
              <Link key={s.key} href={s.href}>
                <div className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-5 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden">
                  <div className={`absolute inset-x-0 top-0 h-0.5 ${s.accentBar}`} />
                  <span className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 ${s.badgeBg} ${s.badgeFg}`}>
                    {s.badge}
                  </span>
                  <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-3 line-clamp-3">
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{s.count}</span>
                    <span className={`text-[11px] font-semibold ${s.ctaColor} group-hover:underline`}>
                      {s.cta}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Recent Deals ── */}
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Recent Deals
            </h2>
            <Link
              href="/en/deals"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RECENT_DEALS.map((deal) => (
              <DealCard key={deal.slug} deal={deal} lang="en" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
