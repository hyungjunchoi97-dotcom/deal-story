"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";
const accentLight = "#ccfbf1";
const amber = "#f59e0b";
const amberLight = "#fef3c7";
const red = "#ef4444";
const redLight = "#fee2e2";

// ── Related Series ─────────────────────────────────────────────────────────────
const RELATED_SERIES = [
  { slug: "dcm-overview",              label: (ko: boolean) => ko ? "DCM 개요"          : "DCM Overview"      },
  { slug: "dcm-pricing",               label: (ko: boolean) => ko ? "Ch.6 프라이싱"     : "Ch.6 Pricing"      },
  { slug: "dcm-international-markets", label: (ko: boolean) => ko ? "Ch.4 국제채"       : "Ch.4 Intl Markets" },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  {
    id: 1,
    author: "Federal Reserve Bank of New York",
    title: "SOFR — Secured Overnight Financing Rate Data and Methodology",
    url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
    source: "FRBNY, 2024",
  },
  {
    id: 2,
    author: "Financial Conduct Authority (FCA)",
    title: "LIBOR Transition — Timeline and Replacement Rates",
    url: "https://www.fca.org.uk/markets/libor",
    source: "FCA, 2023",
  },
  {
    id: 3,
    author: "ISDA",
    title: "IBOR Fallbacks — Credit Spread Adjustments and Transition Methodology",
    url: "https://www.isda.org/2020/10/09/isda-ibor-fallbacks-supplement-and-protocol/",
    source: "ISDA, 2022",
  },
  {
    id: 4,
    author: "Bank for International Settlements",
    title: "Cross-Currency Basis — Drivers and Market Dynamics",
    url: "https://www.bis.org/publ/qtrpdf/r_qt1612e.htm",
    source: "BIS Quarterly Review, 2023",
  },
  {
    id: 5,
    author: "European Central Bank (ECB)",
    title: "€STR — Euro Short-Term Rate Methodology and Publication",
    url: "https://www.ecb.europa.eu/stats/financial_markets_and_interest_rates/euro_short-term_rate/html/index.en.html",
    source: "ECB, 2024",
  },
  {
    id: 6,
    author: "CME Group",
    title: "Term SOFR — Calculation Methodology and Publication",
    url: "https://www.cmegroup.com/market-data/cme-group-benchmark-administration/term-sofr.html",
    source: "CME, 2024",
  },
];

// ── FAQ Data ───────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q: (ko: boolean) =>
      ko
        ? "MS+80bp와 T+180bp는 어떻게 비교하나요?"
        : "How do you compare MS+80bp to T+180bp?",
    a: (ko: boolean) =>
      ko
        ? "직접 비교가 안 됩니다. 기준이 다르기 때문입니다. MS(EUR IRS)는 현재 3.20%이고 US Treasury 5yr는 4.20%라면, MS+80bp = YTM 4.00%, T+180bp = YTM 6.00%로 전혀 다른 절대 금리입니다. EUR과 USD 채권을 비교할 때는 각각의 YTM을 계산한 뒤 통화스왑(CCS) 비용을 반영한 '올인클루시브' 비용으로 환산해야 합니다."
        : "You can't compare them directly — the benchmarks are different. If EUR IRS (MS) is 3.20% and UST 5yr is 4.20%, then MS+80bp = YTM 4.00% and T+180bp = YTM 6.00% — completely different absolute rates. To compare EUR and USD bonds, calculate each YTM, then convert to an all-in USD cost using CCS, accounting for the currency swap basis.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "SOFR는 LIBOR보다 더 낮게 나오는데, 기업 입장에서 유리한 건가요?"
        : "SOFR is typically lower than LIBOR — is that good for borrowers?",
    a: (ko: boolean) =>
      ko
        ? "기업 대출에서는 대체로 유리하게 보이지만, 실질 차이는 크지 않습니다. SOFR가 낮은 이유는 담보부 금리라 신용 리스크 프리미엄이 없기 때문입니다. 그래서 실제 계약 전환 시 CSA(Credit Spread Adjustment)를 더해 LIBOR와 같은 수준으로 맞춥니다. 실질적으로는 LIBOR = SOFR + CSA로 이해하면 됩니다."
        : "For corporate loans it appears favorable, but the actual difference is small. SOFR is lower because it's secured and carries no credit risk premium. In practice, legacy LIBOR contracts add a CSA (Credit Spread Adjustment) when converting, bringing SOFR to the same effective level. Think of it as LIBOR ≈ SOFR + CSA.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "CCS Basis가 갑자기 크게 움직이면 어떻게 되나요?"
        : "What happens if CCS Basis moves sharply?",
    a: (ko: boolean) =>
      ko
        ? "발행사에게 심각한 위험이 됩니다. 예를 들어 사무라이 본드 발행 시 CCS Basis -60bp로 계산했는데, 발행 후 Basis가 -10bp로 좁혀지면 원래 계획보다 50bp 더 비싼 자금이 됩니다. 이 위험을 'Basis Risk'라고 합니다. 발행사는 이를 관리하기 위해 발행 당일 CCS를 즉시 체결(Lock-in)하거나, 발행 전 선도 CCS(Forward CCS)를 미리 계약하기도 합니다."
        : "It creates serious risk for the issuer. If a Samurai bond was structured at CCS basis -60bp but the basis narrows to -10bp after issuance, funding becomes 50bp more expensive than planned. This is called 'Basis Risk.' Issuers manage it by immediately locking in the CCS on deal day, or pre-hedging with a Forward CCS before issuance.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "왜 일본은 아직 TIBOR를 사용합니까? TONA로 전환하지 않나요?"
        : "Why does Japan still use TIBOR? Won't they switch to TONA?",
    a: (ko: boolean) =>
      ko
        ? "일본은 시장 관행상 TIBOR(도쿄 은행간 금리)가 아직 광범위하게 사용됩니다. 특히 국내 은행 대출, 사무라이 본드 변동금리 쿠폰 등에서요. BOJ는 LIBOR를 대체하는 무위험 기준금리로 TONA를 지정했지만, 일본 국내 시장은 전환 속도가 느립니다. 현재 TONA와 TIBOR가 병행 사용 중이며, TIBOR는 JBA(Japan Bankers Association)가 관리하여 조작 방지 시스템을 강화한 상태입니다."
        : "Japan's market convention still relies heavily on TIBOR (Tokyo Interbank Offered Rate), especially for domestic bank loans and Samurai bond floating coupons. While BOJ designated TONA as the risk-free alternative reference rate, Japan's domestic market is transitioning slowly. Currently TONA and TIBOR coexist; TIBOR is administered by JBA with enhanced manipulation safeguards.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "한국 발행사가 항상 사무라이+CCS 방식을 사용하면 되나요?"
        : "Should Korean issuers always use the Samurai+CCS strategy?",
    a: (ko: boolean) =>
      ko
        ? "아닙니다. CCS Basis 수준·사무라이 발행 절차 비용·투자자 다변화 수요·시장 타이밍 등을 종합적으로 고려해야 합니다. Basis가 -20bp 미만이면 발행 비용·법무 비용을 감안할 때 유로본드가 더 유리할 수 있습니다. 또한 사무라이 발행은 절차가 복잡하고 수개월이 소요되어 빠른 자금 조달이 필요할 때는 적합하지 않습니다. 일반적으로 규모가 크고($5억+), 타이밍이 맞을 때(Basis -40bp 이상) 활용합니다."
        : "No. You must consider CCS basis level, Samurai issuance procedural costs, investor diversification needs, and market timing holistically. If basis is less than -20bp, Eurobond may be more economical after accounting for issuance costs and legal fees. Samurai issuance is also complex and takes months — unsuitable for urgent funding needs. Generally, the strategy works best at scale ($500M+) and when conditions align (basis -40bp or wider).",
  },
];

// ── Main Component ─────────────────────────────────────────────────────────────
export default function DcmRateBenchmarksClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const title = ko ? concept.title : (concept.titleEn ?? concept.title);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/dcm-rate-benchmarks`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: concept.title,
    description: concept.excerpt,
    url: pageUrl,
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    author: { "@type": "Organization", name: "Deal Story" },
    publisher: { "@type": "Organization", name: "Deal Story", url: siteUrl },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q(true),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a(true),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* ── Breadcrumb Series Chips ───────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="flex flex-wrap gap-2 mb-8"
        >
          <motion.div variants={fadeUp(0)}>
            <Link
              href={base}
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              ← {ko ? "Market 101" : "Market 101"}
            </Link>
          </motion.div>
          {RELATED_SERIES.map((s, i) => (
            <motion.div key={s.slug} variants={fadeUp(0.04 * (i + 1))}>
              <Link
                href={`${base}/${s.slug}`}
                className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors"
                style={{
                  borderColor: accentLight,
                  color: accent,
                  backgroundColor: "transparent",
                }}
              >
                {s.label(ko)}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Section 0: Hero ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-10"
        >
          {/* Special Badge */}
          <div className="mb-4 flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase"
              style={{ background: amber, color: "white" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Special Edition
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
              {ko ? "읽는 시간 약 20분" : "~20 min read"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
            {ko
              ? "DCM Special — 글로벌 금리 기준선"
              : "DCM Special — Global Rate Benchmarks"}
          </h1>

          {/* Subtitle */}
          <p className="text-lg font-semibold mb-4" style={{ color: accent }}>
            SOFR · LIBOR · Mid-Swap · Cross-Currency Swap
          </p>

          {/* Excerpt */}
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            {ko
              ? "USD 채권은 T+180bp, EUR 채권은 MS+80bp — 같은 회사가 발행해도 기준선이 다릅니다. 왜 그럴까요? LIBOR는 어떻게 태어나 어떻게 조작되고 왜 사라졌는가? SOFR는 무엇이 다른가? Mid-Swap이란 무엇이며 EUR 시장에서만 쓰이는 이유는? 그리고 엔화 0.3%짜리 사무라이 본드를 발행하고 통화스왑을 치면 어떻게 달러 자금 비용 SOFR+20bp가 나오는가? 이 글은 DCM 실무자들이 매일 다루는 금리 기준선 전체를 처음부터 끝까지 해부합니다."
              : "USD bonds quote T+180bp, EUR bonds quote MS+80bp — the same issuer uses different benchmarks in different markets. Why? How did LIBOR get invented, manipulated, and ultimately retired? What makes SOFR different? What is Mid-Swap and why does only EUR use it? And how does issuing a 0.3% JPY Samurai bond and executing a currency swap translate to SOFR+20bp all-in USD funding? This article dissects every rate benchmark that DCM practitioners work with daily, from first principles to live market application."}
          </p>
        </motion.div>

        {/* ── Share TOP ─────────────────────────────────────────────────────── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={title} variant="top" lang={lang} />
        </div>

        {/* ── 3-Stat Callout ────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            {
              stat: "$600조+",
              label: (k: boolean) => k ? "글로벌 파생상품 시장" : "Global derivatives market",
              sub: (k: boolean) => k ? "SOFR·EURIBOR 등 기준금리 연동" : "Linked to SOFR, EURIBOR & more",
            },
            {
              stat: "2023-06",
              label: (k: boolean) => k ? "USD LIBOR 완전 폐지" : "LIBOR finally retired",
              sub: (k: boolean) => k ? "54년 역사 마감, SOFR로 교체" : "54-year history ends, replaced by SOFR",
            },
            {
              stat: "CCS",
              label: (k: boolean) => k ? "통화간 금리차 교환 도구" : "The tool that bridges rate gaps",
              sub: (k: boolean) => k ? "JPY 0.3% → USD SOFR+20bp" : "JPY 0.3% → USD SOFR+20bp",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.06 * i)}
              className="rounded-2xl p-5 border"
              style={{ borderColor: accentLight, background: "transparent" }}
            >
              <div
                className="text-2xl font-black mb-1 font-mono tracking-tight"
                style={{ color: accent }}
              >
                {item.stat}
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-0.5">
                {item.label(ko)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {item.sub(ko)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 1: 왜 금리 기준선이 필요한가                              */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko
              ? "1. 왜 채권마다 기준선이 다른가?"
              : "1. Why Do Bonds Use Different Benchmarks?"}
          </h2>

          <div className="space-y-5 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              {ko
                ? "채권 투자자가 가장 먼저 묻는 질문은 이것입니다: \"이 채권이 위험 없는 기준 대비 얼마나 비싼가(혹은 싼가)?\" 스프레드(Spread)는 바로 그 질문의 답입니다 — 무위험 기준금리 대비 얼마나 더 높은 이자를 주는가."
                : "The first question a bond investor asks is: 'How expensive (or cheap) is this bond relative to a risk-free benchmark?' The spread is the answer to that question — how much more yield does this bond offer above the risk-free rate."}
            </p>
            <p>
              {ko
                ? "그런데 문제가 있습니다. 미국 Fed는 SOFR, ECB는 EURIBOR, 일본 BOJ는 TONA를 기준금리로 씁니다. 중앙은행이 다르면 기준금리가 다릅니다. 통화가 다르면 '무위험'의 정의도 달라집니다. USD 채권이라면 미국 국채(US Treasury)가 무위험 기준, EUR 채권이라면 이론상 독일 Bund가 기준이어야 하지만 유로존에는 단일 국채가 없어서 IRS Mid-Swap이 쓰입니다."
                : "But there's a complication. The US Fed uses SOFR, the ECB uses EURIBOR, and Japan's BOJ uses TONA as their benchmark rates. Different central banks mean different benchmarks. Different currencies mean different definitions of 'risk-free.' For USD bonds, US Treasuries are the risk-free benchmark. For EUR bonds, German Bunds should theoretically serve that role — but there's no single eurozone government bond, so IRS Mid-Swap fills that gap."}
            </p>
            <p>
              {ko
                ? "따라서 같은 회사가 USD로 발행하면 'T+180bp', EUR로 발행하면 'MS+80bp', JPY로 발행하면 'JGB+60bp'라고 호가합니다. 숫자 자체를 비교하면 안 됩니다 — 기준이 다르기 때문입니다."
                : "As a result, the same issuer quotes 'T+180bp' for a USD bond, 'MS+80bp' for EUR, and 'JGB+60bp' for JPY. You cannot compare the spread numbers directly — the benchmarks are different."}
            </p>
          </div>

          {/* Benchmark Map Table */}
          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: accent }}>
                  {[
                    ko ? "통화" : "Currency",
                    ko ? "무위험 기준" : "Risk-Free Benchmark",
                    ko ? "변동금리 기준" : "Floating Rate Ref",
                    ko ? "채권 호가 방식" : "Bond Quoting Convention",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    ccy: "USD",
                    rf: ko ? "US Treasury (T)" : "US Treasury (T)",
                    fl: "SOFR",
                    conv: ko ? "T+Xbp 또는 SOFR+Xbp" : "T+Xbp or SOFR+Xbp",
                  },
                  {
                    ccy: "EUR",
                    rf: ko ? "German Bund (이론적)" : "German Bund (theoretical)",
                    fl: "EURIBOR / €STR",
                    conv: ko ? "MS+Xbp (Mid-Swap)" : "MS+Xbp (Mid-Swap)",
                  },
                  {
                    ccy: "GBP",
                    rf: "UK Gilt",
                    fl: "SONIA",
                    conv: ko ? "Gilt+Xbp 또는 SONIA+Xbp" : "Gilt+Xbp or SONIA+Xbp",
                  },
                  {
                    ccy: "JPY",
                    rf: ko ? "JGB (일본국채)" : "JGB (Japanese Govt Bond)",
                    fl: "TONA / TIBOR",
                    conv: "JGB+Xbp",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.ccy}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800/50"
                    }
                  >
                    <td className="px-4 py-3 font-bold text-gray-900 dark:text-white font-mono">
                      {row.ccy}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.rf}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-mono">
                      {row.fl}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Banker's insight box */}
          <div
            className="mt-8 rounded-xl p-5 border-l-4"
            style={{ borderLeftColor: amber, background: amberLight }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                style={{ background: amber, color: "white" }}
              >
                {ko ? "실무 포인트" : "Banker's Note"}
              </span>
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              {ko
                ? "EUR 시장에서 'MS+80bp'라고 하면 현재 EUR 5yr IRS 고정금리 + 80bp입니다. MS가 3.20%라면 채권 쿠폰은 약 4.00%. SOFR+80bp는 USD 변동금리 + 80bp로 전혀 다른 개념이니 주의하세요. 동일한 '+80bp'처럼 보여도 기준이 달라 절대 금리가 완전히 다릅니다."
                : "In the EUR market, 'MS+80bp' means current EUR 5yr IRS fixed rate + 80bp. If MS is 3.20%, the bond coupon is approximately 4.00%. SOFR+80bp means USD floating rate + 80bp — a completely different concept. The same '+80bp' notation hides the fact that the absolute rates are totally different."}
            </p>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 2: LIBOR 탄생·조작·사망                                   */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko
              ? "2. LIBOR: 탄생, 조작, 그리고 소멸"
              : "2. LIBOR: Birth, Manipulation, and Death"}
          </h2>

          {/* 2-1. LIBOR란 무엇이었나 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: accent }}
            >
              {ko ? "2-1. LIBOR란 무엇이었나" : "2-1. What Was LIBOR?"}
            </h3>
            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "LIBOR(London Interbank Offered Rate)의 역사는 1969년으로 거슬러 올라갑니다. 당시 이란 Shah 정부가 요청한 $8,000만 달러 규모의 신디케이트 대출을 구성할 때, 'Minos Zombanakis'라는 그리스 출신 뱅커가 처음으로 런던의 여러 은행 금리를 평균 내어 대출 기준으로 삼는 방식을 사용한 것이 시초입니다. 아이디어 자체는 단순했습니다 — 여러 은행의 조달 비용 평균을 쓰면 특정 은행의 신용 리스크에 좌우되지 않는다는 것."
                  : "LIBOR's (London Interbank Offered Rate) origins trace back to 1969. When structuring an $80 million syndicated loan for the Iranian Shah's government, a Greek-born banker named Minos Zombanakis first used an average of London bank rates as the loan benchmark. The idea was simple — averaging multiple banks' funding costs would produce a benchmark not dominated by any single institution's credit risk."}
              </p>
              <p>
                {ko
                  ? "LIBOR의 정의는 간단했습니다: 런던의 패널 은행들(전성기에는 16개 은행)이 매일 오전 11시에 '우리는 오늘 얼마에 빌릴 수 있다고 생각하나요?'라는 질문에 자기신고(Self-Reporting) 방식으로 답하고, 상하위 25%를 제외한 평균을 공시하는 방식입니다. BBA(British Bankers' Association)가 운영했습니다."
                  : "LIBOR's definition was straightforward: panel banks in London (16 banks at peak) submitted daily at 11 AM an estimate of 'what rate could we borrow at today?' The top and bottom 25% were stripped out, and the trimmed mean was published. BBA (British Bankers' Association) ran the operation."}
              </p>
              <p>
                {ko
                  ? "전성기의 LIBOR는 글로벌 $350조 규모 금융계약의 기준금리였습니다. 주택담보대출·기업 대출·파생상품·채권 — 거의 모든 변동금리 금융상품의 기준이 됐습니다. 5개 통화(USD·EUR·GBP·JPY·CHF), 7개 만기(O/N부터 12개월), 총 35개 LIBOR 금리가 매일 고시됐습니다. 금융의 기반 인프라였습니다."
                  : "At its peak, LIBOR underpinned $350 trillion in global financial contracts. Mortgages, corporate loans, derivatives, bonds — nearly every floating-rate financial product referenced it. Five currencies (USD, EUR, GBP, JPY, CHF), seven tenors (O/N through 12 months), 35 LIBOR rates published daily. It was the foundational infrastructure of global finance."}
              </p>
            </div>
          </div>

          {/* 2-2. 조작 스캔들 */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: accent }}
            >
              {ko ? "2-2. 조작 스캔들 (2008–2012)" : "2-2. The Manipulation Scandal (2008–2012)"}
            </h3>

            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {ko
                ? "균열은 2008년 금융위기와 함께 드러났습니다. WSJ 기자들이 이상한 패턴을 발견했습니다 — 일부 은행들의 LIBOR 신고가 CDS(신용부도스왑) 가격이 시사하는 실제 조달 비용보다 현저히 낮다는 것. 그리고 그 이후 수년에 걸쳐 역사상 최대 규모의 금융 조작 스캔들이 밝혀졌습니다."
                : "Cracks appeared during the 2008 financial crisis. WSJ journalists noticed an odd pattern — some banks' LIBOR submissions were significantly lower than the borrowing costs implied by their CDS (credit default swap) prices. Over the following years, one of the largest financial manipulation scandals in history unfolded."}
            </p>

            {/* Scandal Timeline */}
            <div className="space-y-3">
              {[
                {
                  year: "2008",
                  title: (k: boolean) => k ? "WSJ 보도 — 첫 의혹 제기" : "WSJ Report — First Allegations",
                  body: (k: boolean) =>
                    k
                      ? "월스트리트저널이 '일부 은행들이 LIBOR를 실제보다 낮게 신고해 자신의 재무 건전성을 숨기고 있다'는 의혹을 최초 보도. 당시 은행들은 부인했고, BBA도 '문제없다'는 입장을 고수했습니다."
                      : "The Wall Street Journal reported that some banks were submitting artificially low LIBOR rates to conceal their financial stress. Banks denied it; BBA maintained the system was sound.",
                  color: "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10",
                },
                {
                  year: "2012",
                  title: (k: boolean) => k ? "Barclays 합의 — £290M 벌금" : "Barclays Settlement — £290M Fine",
                  body: (k: boolean) =>
                    k
                      ? "Barclays가 미국 DOJ, FSA(현 FCA)와 총 £290M(약 $450M) 합의. CEO Bob Diamond 사임. 내부 이메일이 공개되며 충격 — 트레이더가 LIBOR 신고 담당자에게 'Thanks, you're a star'라고 쓴 이메일이 바로 높은 LIBOR 신고를 부탁한 직후 나온 것. 시스템 전반의 조작이 확인됐습니다."
                      : "Barclays settled with US DOJ and FSA (now FCA) for £290M (~$450M). CEO Bob Diamond resigned. Damning internal emails were released — a trader wrote 'Thanks, you're a star' immediately after the LIBOR submitter complied with a request to manipulate the rate. Systemic manipulation was confirmed.",
                  color: "border-red-400 bg-red-50 dark:bg-red-900/10",
                },
                {
                  year: "2013–2015",
                  title: (k: boolean) => k ? "글로벌 은행 줄줄이 벌금" : "Global Banks Hit with Fines",
                  body: (k: boolean) =>
                    k
                      ? "UBS $1.5B(2012), Royal Bank of Scotland $615M(2013), Deutsche Bank $2.5B(2015·역대 최대), Société Générale, Citigroup, JPMorgan Chase 등도 합의. 총 벌금 규모는 $9B+에 달했습니다. 단순히 한 은행의 문제가 아닌 업계 전반의 문화적 부패였음이 드러났습니다."
                      : "UBS $1.5B (2012), Royal Bank of Scotland $615M (2013), Deutsche Bank $2.5B (2015, then-record), plus Société Générale, Citigroup, JPMorgan Chase and others. Total fines exceeded $9 billion — exposing not a single bank's misconduct but a culture-wide problem.",
                  color: "border-orange-400 bg-orange-50 dark:bg-orange-900/10",
                },
                {
                  year: "2015",
                  title: (k: boolean) => k ? "Tom Hayes 유죄판결 — 14년 징역" : "Tom Hayes Convicted — 14-Year Sentence",
                  body: (k: boolean) =>
                    k
                      ? "전 UBS·Citibank 트레이더 Tom Hayes가 LIBOR 조작 혐의로 유죄판결. 영국 법원은 14년 징역형을 선고(이후 항소로 11년으로 감형). Hayes는 JPY LIBOR를 자신의 파생상품 포지션에 유리하게 움직이기 위해 여러 은행의 신고자들을 조직적으로 조율했습니다."
                      : "Former UBS and Citibank trader Tom Hayes was convicted of LIBOR manipulation. UK courts sentenced him to 14 years (later reduced to 11 on appeal). Hayes had systematically coordinated submitters across multiple banks to move JPY LIBOR in his derivatives book's favor.",
                  color: "border-red-500 bg-red-50 dark:bg-red-900/10",
                },
              ].map((event) => (
                <div
                  key={event.year}
                  className={`rounded-xl p-5 border-l-4 ${event.color}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-black text-sm font-mono text-gray-500 dark:text-gray-400 shrink-0 mt-0.5 w-16">
                      {event.year}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                        {event.title(ko)}
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {event.body(ko)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Structural Problem Callout */}
          <div
            className="mb-8 rounded-xl p-5 border-l-4"
            style={{ borderLeftColor: red, background: redLight }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                style={{ background: red, color: "white" }}
              >
                {ko ? "LIBOR의 구조적 문제" : "LIBOR's Structural Flaw"}
              </span>
            </div>
            <p className="text-sm text-red-900 leading-relaxed">
              {ko
                ? "LIBOR는 실제 거래가 아닌 '추정치' 제출 방식이었습니다. 2008년 금융위기 시 은행들은 자신의 신용리스크를 숨기기 위해 실제보다 낮은 금리를 신고했습니다. 또한 트레이더들은 자신의 포지션에 유리하게 LIBOR를 조작했습니다. $350조 계약의 기준이 사실상 '의견 조사'였다는 것이 밝혀진 것입니다."
                : "LIBOR was based on estimated submissions, not actual transactions. During the 2008 crisis, banks submitted artificially low rates to hide their credit risk. Traders also manipulated submissions for their own book's benefit. The benchmark underpinning $350 trillion in contracts was, in essence, a survey of opinions."}
            </p>
          </div>

          {/* 2-3. ARR Grid */}
          <div className="mb-8">
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: accent }}
            >
              {ko
                ? "2-3. 대안 금리 개발 (ARR: Alternative Reference Rates)"
                : "2-3. Alternative Reference Rates (ARRs)"}
            </h3>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {ko
                ? "각국 규제당국과 중앙은행은 LIBOR를 대체할 실제 거래 기반의 무위험 기준금리(RFR: Risk-Free Rate)를 개발했습니다. 공통점은 모두 '하룻밤 실제 거래(Overnight Actual Transaction)'에 기반한다는 것입니다."
                : "Regulators and central banks developed transaction-based risk-free rates (RFRs) to replace LIBOR. All share a key feature: they are based on actual overnight transactions — no more surveys or estimates."}
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  ccy: "USD",
                  name: "SOFR",
                  full: "Secured Overnight Financing Rate",
                  admin: "Fed NY",
                  year: "2018",
                  note: (k: boolean) =>
                    k
                      ? "미국 Treasury Repo 담보 하룻밤 거래. 일 $1조+ 거래량."
                      : "US Treasury-backed overnight repo. $1T+ daily volume.",
                  color: "border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20",
                  dot: "bg-teal-500",
                },
                {
                  ccy: "EUR",
                  name: "€STR",
                  full: "Euro Short-Term Rate",
                  admin: "ECB",
                  year: "2019",
                  note: (k: boolean) =>
                    k
                      ? "유럽 대형 은행들의 실제 하룻밤 무담보 거래."
                      : "Actual overnight unsecured transactions of major European banks.",
                  color: "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20",
                  dot: "bg-blue-500",
                },
                {
                  ccy: "GBP",
                  name: "SONIA",
                  full: "Sterling Overnight Index Average",
                  admin: "BOE",
                  year: "1997 (개혁 2016)",
                  note: (k: boolean) =>
                    k
                      ? "BOE 운영. 영국 파운드 하룻밤 무담보 대출 실거래."
                      : "BOE-run. Actual overnight GBP unsecured lending.",
                  color: "border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20",
                  dot: "bg-violet-500",
                },
                {
                  ccy: "JPY",
                  name: "TONA",
                  full: "Tokyo Overnight Average Rate",
                  admin: "BOJ",
                  year: "2016",
                  note: (k: boolean) =>
                    k
                      ? "BOJ 운영. 일본 엔화 하룻밤 콜머니 실거래 기반."
                      : "BOJ-run. Based on actual JPY overnight call money transactions.",
                  color:
                    "border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20",
                  dot: "bg-orange-500",
                },
              ].map((r) => (
                <motion.div
                  key={r.ccy}
                  variants={fadeUp(0)}
                  className={`rounded-xl p-5 border ${r.color}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${r.dot}`} />
                    <span className="font-mono font-black text-base text-gray-900 dark:text-white">
                      {r.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">({r.ccy})</span>
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {r.full}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {r.admin} · {ko ? "도입" : "est."} {r.year}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{r.note(ko)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 2-4. LIBOR Retirement Timeline */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: accent }}
            >
              {ko ? "2-4. LIBOR 폐지 타임라인" : "2-4. LIBOR Retirement Timeline"}
            </h3>
            <div className="space-y-3">
              {[
                {
                  date: "2021년 3월",
                  dateEn: "March 2021",
                  text: (k: boolean) =>
                    k
                      ? "FCA, LIBOR 2021~2023 단계적 폐지 공식 발표. 패닉 — 수백조 달러 계약의 기준이 사라진다는 것."
                      : "FCA officially announces phased retirement 2021–2023. Panic — the benchmark for hundreds of trillions in contracts would vanish.",
                },
                {
                  date: "2021년 12월 31일",
                  dateEn: "Dec 31, 2021",
                  text: (k: boolean) =>
                    k
                      ? "EUR, GBP, JPY, CHF LIBOR 전면 폐지. 관련 계약들 ISDA Fallback Protocol로 €STR·SONIA·TONA 등으로 자동 전환."
                      : "EUR, GBP, JPY, CHF LIBOR retired. Contracts automatically transitioned to €STR, SONIA, TONA via ISDA Fallback Protocol.",
                },
                {
                  date: "2023년 6월 30일",
                  dateEn: "June 30, 2023",
                  text: (k: boolean) =>
                    k
                      ? "USD LIBOR 완전 폐지 — 마지막 게시. 54년 역사 마감. 기존 USD LIBOR 계약들은 SOFR + CSA(Credit Spread Adjustment)로 전환됐습니다."
                      : "USD LIBOR fully retired — final publication. 54-year history ends. Legacy USD LIBOR contracts converted to SOFR + CSA (Credit Spread Adjustment).",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                >
                  <div
                    className="text-xs font-black font-mono shrink-0 px-2 py-1 rounded-lg text-white text-center leading-tight"
                    style={{ background: accent, minWidth: "80px" }}
                  >
                    {ko ? item.date : item.dateEn}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.text(ko)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 3: SOFR 완전 해부                                          */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko ? "3. SOFR: LIBOR의 후계자" : "3. SOFR: LIBOR's Successor"}
          </h2>

          {/* 3-1. SOFR 정의 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko ? "3-1. SOFR의 정의와 계산" : "3-1. SOFR: Definition and Calculation"}
            </h3>
            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "SOFR(Secured Overnight Financing Rate)는 미국 재무부 채권(US Treasury)을 담보로 한 하룻밤 Repo(환매조건부채권) 거래의 실제 금리를 반영한 벤치마크입니다. 뉴욕 연방준비은행(FRBNY)이 매일 아침 전일(익일 결제) 거래 기준으로 발표합니다."
                  : "SOFR (Secured Overnight Financing Rate) is a benchmark reflecting actual rates on overnight repurchase agreements (repos) collateralized by US Treasury securities. The Federal Reserve Bank of New York publishes it each morning, based on the prior day's transactions."}
              </p>
              <p>
                {ko
                  ? "SOFR의 핵심 강점은 '실제 거래 기반'입니다. 일평균 거래량이 $1조 이상 — LIBOR의 추정치 제출과는 근본적으로 다릅니다. 누군가 'SOFR를 조작하려면 미국 국채 담보 Repo 시장 전체를 조작해야 한다'는 말이 있습니다. 현실적으로 불가능합니다."
                  : "SOFR's key strength is being transaction-based. Average daily volume exceeds $1 trillion — fundamentally different from LIBOR's estimated submissions. As practitioners say, 'To manipulate SOFR, you'd have to manipulate the entire US Treasury repo market.' Practically impossible."}
              </p>
              <p>
                {ko
                  ? "2024년 기준 SOFR는 약 5.30%로, Fed Funds Target(5.25–5.50%)에 매우 근접하게 움직입니다. 이는 Treasury Repo가 Fed Fund Rate와 긴밀하게 연동되기 때문입니다."
                  : "As of 2024, SOFR sits around 5.30%, closely tracking the Fed Funds Target (5.25–5.50%). This reflects how tightly Treasury repo rates track the fed funds rate."}
              </p>
            </div>
          </div>

          {/* Secured vs Unsecured Table */}
          <div className="mb-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: accent }}>
                  {["", "LIBOR", "SOFR"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    attr: ko ? "기반" : "Basis",
                    libor: ko ? "자기신고 추정치" : "Self-reported estimates",
                    sofr: ko ? "실제 Repo 거래" : "Actual repo transactions",
                  },
                  {
                    attr: ko ? "담보" : "Collateral",
                    libor: ko ? "무담보 (unsecured)" : "Unsecured",
                    sofr: ko ? "담보 (US Treasury)" : "Secured (US Treasury)",
                  },
                  {
                    attr: ko ? "조작 가능성" : "Manipulation risk",
                    libor: ko ? "높음 — 실제 발생" : "High — actually occurred",
                    sofr: ko ? "매우 낮음" : "Very low",
                  },
                  {
                    attr: ko ? "신용 리스크 반영" : "Credit risk included",
                    libor: ko ? "포함 (은행 신용)" : "Yes (bank credit risk)",
                    sofr: ko ? "미포함 (Treasury 담보)" : "No (Treasury-secured)",
                  },
                  {
                    attr: ko ? "만기" : "Tenors",
                    libor: ko ? "O/N ~ 12개월" : "O/N to 12 months",
                    sofr: ko ? "하룻밤 (O/N)만" : "Overnight only (O/N)",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.attr}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800/50"
                    }
                  >
                    <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                      {row.attr}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.libor}</td>
                    <td className="px-4 py-3 font-medium" style={{ color: accent }}>
                      {row.sofr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3-2. Term SOFR */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko ? "3-2. Term SOFR — 기업이 필요한 만기별 금리" : "3-2. Term SOFR — Meeting Corporate Needs"}
            </h3>
            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "SOFR의 한 가지 약점이 있습니다 — 하룻밤(O/N)짜리 단일 만기라는 것입니다. 기업이나 은행이 3개월·6개월 대출을 취급할 때는 해당 기간의 기준금리가 미리 알려져 있어야 합니다. 하룻밤 SOFR는 내일 어떻게 바뀔지 모르기 때문에, 3개월짜리 대출을 SOFR로 설정하면 매일 이자가 달라지는 상황이 됩니다."
                  : "SOFR has one weakness — it is only an overnight rate. When a bank originates a 3-month or 6-month loan, it needs a known benchmark rate for the entire period upfront. Daily overnight SOFR changes every day, so a 3-month loan linked to SOFR would reset its interest daily — operationally burdensome."}
              </p>
              <p>
                {ko
                  ? "이를 해결한 것이 CME Group이 산출하는 Term SOFR입니다. SOFR 선물 시장의 거래 데이터로 1개월·3개월·6개월·12개월 Term SOFR를 계산합니다. 예를 들어 Term SOFR 3M은 '향후 3개월의 기대 SOFR 평균'으로, 대출 실행 시점에 이미 금리를 알 수 있습니다."
                  : "CME Group's Term SOFR solves this. Using SOFR futures market data, CME calculates 1M, 3M, 6M, and 12M Term SOFR rates. For example, 3M Term SOFR represents the expected average SOFR over the next three months — known in advance at loan origination."}
              </p>
              <p>
                {ko
                  ? "현재 기업 대출 시장에서는 Term SOFR 3M + Credit Spread가 기업 대출 금리의 표준이 됐습니다. 채권 시장에서는 FRN(Floating Rate Note)에 SOFR 또는 Term SOFR를 기준으로 사용합니다."
                  : "Today, Term SOFR 3M + Credit Spread has become the standard for corporate loan pricing. In the bond market, FRNs (Floating Rate Notes) use SOFR or Term SOFR as their coupon benchmark."}
              </p>
            </div>
          </div>

          {/* 3-3. SOFR + CSA */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko ? "3-3. SOFR + CSA = LIBOR 대체" : "3-3. SOFR + CSA = LIBOR Replacement"}
            </h3>
            <div
              className="rounded-xl p-5 border-l-4 mb-5"
              style={{ borderLeftColor: accent, background: accentLight }}
            >
              <p className="text-sm text-teal-900 leading-relaxed mb-4">
                {ko
                  ? "기존 LIBOR 계약을 SOFR로 전환할 때 단순히 SOFR를 쓰면 안 됩니다. LIBOR에는 은행의 신용 리스크 프리미엄이 내재됐지만 SOFR에는 없기 때문입니다. 따라서 ISDA는 Credit Spread Adjustment(CSA)를 더합니다:"
                  : "When converting legacy LIBOR contracts to SOFR, you cannot simply substitute SOFR. LIBOR embedded a bank credit risk premium; SOFR doesn't. So ISDA adds a Credit Spread Adjustment (CSA):"}
                <br />
                <strong>USD 3M SOFR + 26.161bp = 구 USD 3M LIBOR 대체</strong>
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { tenor: "USD 1M", csa: "+11.448bp" },
                  { tenor: "USD 3M", csa: "+26.161bp" },
                  { tenor: "USD 6M", csa: "+42.826bp" },
                ].map((item) => (
                  <div
                    key={item.tenor}
                    className="rounded-lg p-3 bg-white/60 text-center"
                  >
                    <div className="text-xs font-semibold text-gray-600 mb-1">{item.tenor}</div>
                    <div className="font-black font-mono text-sm" style={{ color: accent }}>
                      CSA {item.csa}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "이 CSA는 LIBOR 폐지 전 5년간의 LIBOR-SOFR 차이의 중앙값(Median)을 기준으로 ISDA가 고정 설정한 값입니다. 따라서 기존 LIBOR 계약이 SOFR로 전환되더라도 경제적 실질은 크게 변하지 않도록 설계됐습니다."
                : "These CSA values are fixed by ISDA, based on the median LIBOR-SOFR difference over the five years prior to LIBOR's retirement. The design ensures that legacy contracts converting to SOFR don't experience a meaningful economic shift."}
            </p>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 4: Mid-Swap                                                */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko
              ? "4. Mid-Swap: EUR 채권 가격의 기준선"
              : "4. Mid-Swap: The EUR Bond Benchmark"}
          </h2>

          {/* 4-1. IRS 이해 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko
                ? "4-1. Interest Rate Swap (IRS) 먼저 이해하기"
                : "4-1. Understanding Interest Rate Swaps First"}
            </h3>
            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              <p>
                {ko
                  ? "Mid-Swap를 이해하려면 IRS(Interest Rate Swap)를 먼저 알아야 합니다. IRS는 두 당사자가 동일 원금에 대해 고정금리와 변동금리를 서로 교환하기로 약속하는 계약입니다. 예를 들어 기업 A는 변동금리 대출을 받고 있는데 금리 상승 리스크를 없애고 싶습니다. 딜러 은행과 IRS를 맺어 고정금리를 지급하고 변동금리(EURIBOR)를 수취하면, 결과적으로 변동금리 대출이 고정금리 대출로 바뀝니다."
                  : "To understand Mid-Swap, you first need to understand IRS (Interest Rate Swaps). An IRS is a contract where two parties agree to exchange fixed and floating interest payments on the same notional principal. For example: Company A has a floating-rate loan and wants to eliminate interest rate risk. By entering an IRS — paying fixed, receiving EURIBOR — the floating-rate loan effectively becomes fixed-rate."}
              </p>
            </div>

            {/* IRS Visual Diagram */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/30 mb-6">
              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                {ko ? "IRS 구조 — 고정금리 지급자 관점" : "IRS Structure — Fixed-Rate Payer View"}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div
                  className="rounded-xl px-5 py-4 text-center text-sm font-bold text-white min-w-[100px]"
                  style={{ background: accent }}
                >
                  {ko ? "기업 A\n(고정금리 지급)" : "Company A\n(Pays Fixed)"}
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 min-w-[140px]">
                  <div className="flex items-center gap-2 w-full justify-center">
                    <div
                      className="h-0.5 flex-1 max-w-[80px]"
                      style={{ background: amber }}
                    />
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white whitespace-nowrap" style={{ background: amber }}>
                      {ko ? "고정 3.20% 지급 →" : "Pay Fixed 3.20% →"}
                    </span>
                    <div
                      className="h-0.5 flex-1 max-w-[80px]"
                      style={{ background: amber }}
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full justify-center">
                    <div
                      className="h-0.5 flex-1 max-w-[80px]"
                      style={{ background: accent }}
                    />
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white whitespace-nowrap"
                      style={{ background: accent }}
                    >
                      {ko ? "← EURIBOR 수취" : "← Receive EURIBOR"}
                    </span>
                    <div
                      className="h-0.5 flex-1 max-w-[80px]"
                      style={{ background: accent }}
                    />
                  </div>
                </div>
                <div className="rounded-xl px-5 py-4 text-center text-sm font-bold text-white min-w-[100px] bg-gray-600 dark:bg-gray-500">
                  {ko ? "딜러 은행\n(중개자)" : "Dealer Bank\n(Intermediary)"}
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                {ko
                  ? "기업 A: 변동금리 대출 보유 → IRS로 고정금리로 전환 / 딜러: Bid-Ask 스프레드로 수익"
                  : "Company A: holds floating-rate loan → IRS converts it to fixed-rate / Dealer: earns bid-ask spread"}
              </p>
            </div>
          </div>

          {/* 4-2. Mid-Swap Rate */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko ? "4-2. Mid-Swap Rate란 무엇인가" : "4-2. What Is the Mid-Swap Rate?"}
            </h3>
            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "딜러 은행은 IRS를 거래할 때 두 가지 가격을 제시합니다: Bid Rate(딜러가 고정금리를 지급하는 가격)와 Ask Rate(딜러가 고정금리를 수취하는 가격). 이 둘의 중간값이 바로 Mid-Swap Rate(MS)입니다."
                  : "A dealer bank quotes two prices for IRS: Bid Rate (the rate at which the dealer pays fixed) and Ask Rate (the rate at which the dealer receives fixed). The midpoint of these two is the Mid-Swap Rate (MS)."}
              </p>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-5 font-mono text-sm space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    {ko ? "Bid (딜러 고정금리 지급)" : "Bid (dealer pays fixed)"}
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">3.18%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    {ko ? "Ask (딜러 고정금리 수취)" : "Ask (dealer receives fixed)"}
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">3.22%</span>
                </div>
                <div
                  className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700"
                >
                  <span className="font-bold" style={{ color: accent }}>
                    {ko ? "Mid-Swap (MS)" : "Mid-Swap (MS)"}
                  </span>
                  <span className="font-black text-lg" style={{ color: accent }}>
                    3.20%
                  </span>
                </div>
              </div>
              <p>
                {ko
                  ? "EUR 채권 발행사가 'MS+80bp'로 발행한다고 하면, 쿠폰 = 3.20% + 0.80% = 4.00%. 투자자는 이 채권의 YTM이 EUR IRS 커브 대비 80bp 높다는 것을 한 번에 이해합니다. 딜 세계에서 MS는 EUR 채권 프라이싱의 표준 언어입니다."
                  : "If an EUR bond issuer prices at 'MS+80bp', coupon = 3.20% + 0.80% = 4.00%. Investors immediately understand this bond's YTM is 80bp above the EUR IRS curve. In the deal world, MS is the standard language for EUR bond pricing."}
              </p>
            </div>
          </div>

          {/* Why EUR uses MS not Bund */}
          <div className="mb-8 rounded-xl p-5 border-l-4" style={{ borderLeftColor: amber, background: amberLight }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded" style={{ background: amber, color: "white" }}>
                {ko ? "핵심: EUR은 왜 Bund가 아닌 MS를 쓰나?" : "Key: Why MS Instead of Bund for EUR?"}
              </span>
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              {ko
                ? "EUR 국채(유로존 국채)는 독일 Bund, 프랑스 OAT, 이탈리아 BTP 등이 각각 다른 금리를 가집니다. 2024년 기준: 독일 Bund 5yr ≈ 2.40%, 이탈리아 BTP 5yr ≈ 3.60% — 무려 1.20%p 차이가 납니다. 유로존에 단일 국채가 없으니 단일 기준도 없습니다. 반면 EUR IRS는 유로존 전체에서 단일 커브로 거래됩니다. 따라서 EUR 채권은 분열된 국채 대신 EUR IRS Mid-Swap을 기준으로 호가합니다."
                : "Eurozone government bonds each carry different rates: German Bund 5yr ≈ 2.40%, Italian BTP 5yr ≈ 3.60% (as of 2024) — a 1.20% gap. There's no single eurozone government bond, so there's no single risk-free benchmark. Meanwhile, EUR IRS trades as a single curve across the eurozone. Therefore, EUR bonds quote against EUR IRS Mid-Swap, not against the fragmented government bond market."}
            </p>
          </div>

          {/* MS vs T-Spread Visual */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko ? "4-3. MS+Xbp vs T+Xbp — 절대 금리 비교" : "4-3. MS+Xbp vs T+Xbp — Absolute Rate Comparison"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/10 p-5">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-3">
                  EUR Bond — MS+80bp
                </div>
                <div className="space-y-1.5 text-sm font-mono">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>{ko ? "EUR 5yr IRS (Mid-Swap)" : "EUR 5yr IRS (Mid-Swap)"}</span>
                    <span className="font-bold">3.20%</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>{ko ? "스프레드" : "Spread"}</span>
                    <span className="font-bold">+80bp</span>
                  </div>
                  <div
                    className="flex justify-between pt-2 border-t border-blue-200 dark:border-blue-700 font-black text-base"
                    style={{ color: accent }}
                  >
                    <span>YTM</span>
                    <span>≈ 4.00%</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border-2 border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/10 p-5">
                <div className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: accent }}>
                  USD Bond — T+180bp
                </div>
                <div className="space-y-1.5 text-sm font-mono">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>UST 5yr</span>
                    <span className="font-bold">4.20%</span>
                  </div>
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>{ko ? "스프레드" : "Spread"}</span>
                    <span className="font-bold">+180bp</span>
                  </div>
                  <div
                    className="flex justify-between pt-2 border-t border-teal-200 dark:border-teal-700 font-black text-base"
                    style={{ color: accent }}
                  >
                    <span>YTM</span>
                    <span>≈ 6.00%</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              {ko
                ? "동일한 발행사가 EUR로 MS+80bp, USD로 T+180bp 발행 시 — YTM은 각각 4.00%, 6.00%로 완전히 다릅니다. 직접 비교 불가."
                : "Same issuer pricing EUR at MS+80bp and USD at T+180bp — YTMs are 4.00% and 6.00% respectively. Direct comparison is meaningless."}
            </p>
          </div>
        </motion.section>

        {/* ── Share MID ─────────────────────────────────────────────────────── */}
        <ShareButtons title={title} variant="mid" lang={lang} />

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 5: CCS                                                     */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko
              ? "5. 통화스왑(CCS): 엔화 0.3%가 달러 3.2%가 되는 원리"
              : "5. Cross-Currency Swap: How 0.3% JPY Becomes 3.2% USD"}
          </h2>

          {/* 5-1 CCS 기본 구조 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko ? "5-1. CCS 기본 구조 — 3단계" : "5-1. CCS Basic Structure — Three Steps"}
            </h3>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {ko
                ? "Cross-Currency Swap(CCS, 통화스왑)은 두 당사자가 서로 다른 통화의 원금과 이자를 교환하는 파생상품 계약입니다. 한국 발행사가 JPY 사무라이 본드를 발행한 후 실제로는 USD가 필요하다면, CCS를 통해 JPY를 USD로 전환합니다. 세 단계로 구성됩니다:"
                : "A Cross-Currency Swap (CCS) is a derivative contract where two parties exchange principal and interest in different currencies. If a Korean issuer sells a JPY Samurai bond but actually needs USD, it uses a CCS to convert JPY into USD. Three steps:"}
            </p>

            {/* 3-Step CCS Visual */}
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: (k: boolean) => k ? "계약 시작 — 원금 교환" : "Step 1 — Initial Principal Exchange",
                  left: (k: boolean) => k ? "한국 발행사" : "Korean Issuer",
                  right: (k: boolean) => k ? "딜러 은행" : "Dealer Bank",
                  toRight: "USD 1억 수취 →",
                  toLeft: "← JPY 145억 지급",
                  note: (k: boolean) =>
                    k
                      ? "계약 시작일에 원금을 서로 교환. 환율 USD/JPY = 145 기준."
                      : "Exchange principal at deal start. Rate: USD/JPY = 145.",
                  bg: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700",
                  stepColor: accent,
                },
                {
                  step: 2,
                  title: (k: boolean) => k ? "기간 중 — 이자 교환" : "Step 2 — Periodic Interest Exchange",
                  left: (k: boolean) => k ? "한국 발행사" : "Korean Issuer",
                  right: (k: boolean) => k ? "딜러 은행" : "Dealer Bank",
                  toRight: "USD SOFR+X bp 지급 →",
                  toLeft: "← JPY 고정 0.3% 수취",
                  note: (k: boolean) =>
                    k
                      ? "매 이자 지급일 교환. JPY 쿠폰으로 사무라이 투자자에게 지급."
                      : "Exchange on each payment date. JPY coupon goes to Samurai investors.",
                  bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
                  stepColor: "#3b82f6",
                },
                {
                  step: 3,
                  title: (k: boolean) => k ? "만기 — 원금 재교환" : "Step 3 — Final Principal Re-exchange",
                  left: (k: boolean) => k ? "한국 발행사" : "Korean Issuer",
                  right: (k: boolean) => k ? "딜러 은행" : "Dealer Bank",
                  toRight: "JPY 145억 반환 →",
                  toLeft: "← USD 1억 수취",
                  note: (k: boolean) =>
                    k
                      ? "만기일에 원금 재교환. 발행사는 사무라이 투자자에게 원금 상환."
                      : "Re-exchange principal at maturity. Issuer repays Samurai investors.",
                  bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
                  stepColor: "#8b5cf6",
                },
              ].map((s) => (
                <div key={s.step} className={`rounded-xl border p-5 ${s.bg}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0"
                      style={{ background: s.stepColor }}
                    >
                      {s.step}
                    </span>
                    <span className="font-bold text-sm text-gray-900 dark:text-white">
                      {s.title(ko)}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                    <div
                      className="rounded-lg px-4 py-2 text-sm font-bold text-white text-center"
                      style={{ background: s.stepColor }}
                    >
                      {s.left(ko)}
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-200">
                        {s.toRight}
                      </span>
                      <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-200">
                        {s.toLeft}
                      </span>
                    </div>
                    <div className="rounded-lg px-4 py-2 text-sm font-bold text-white text-center bg-gray-600 dark:bg-gray-500">
                      {s.right(ko)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.note(ko)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5-2. Basis Swap Spread */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko
                ? "5-2. Cross-Currency Basis Spread — CCS의 핵심 변수"
                : "5-2. Cross-Currency Basis Spread — The Key Variable"}
            </h3>
            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "CCS는 단순히 두 나라 기준금리 차이(예: USD 5.3% vs JPY 0.1%)를 교환하는 것이 아닙니다. 여기에 시장의 공급-수요 불균형을 반영하는 'Cross-Currency Basis Spread'가 더해집니다. 이 Basis가 발행사의 최종 비용을 결정하는 핵심 변수입니다."
                  : "CCS is not simply exchanging the interest rate differential between two countries (e.g., USD 5.3% vs JPY 0.1%). On top of that, a 'Cross-Currency Basis Spread' reflects supply-demand imbalances in the swap market. This Basis is the key variable determining the issuer's final funding cost."}
              </p>
              <div
                className="rounded-xl p-5 border-l-4"
                style={{ borderLeftColor: accent, background: accentLight }}
              >
                <p className="text-sm text-teal-900 font-semibold mb-2">
                  {ko ? "예: USD/JPY Basis = -60bp일 때" : "Example: USD/JPY Basis = -60bp"}
                </p>
                <div className="text-sm text-teal-900 space-y-1">
                  <p>
                    {ko
                      ? "• JPY 사무라이 본드 발행: 쿠폰 0.30%"
                      : "• Samurai bond issued: 0.30% JPY coupon"}
                  </p>
                  <p>
                    {ko
                      ? "• CCS로 USD로 전환: (JPY-USD 스왑 금리 차이) - 60bp Basis 절감"
                      : "• CCS converts to USD: (JPY-USD rate differential) - 60bp basis saving"}
                  </p>
                  <p>
                    {ko
                      ? "• 올인클루시브 USD 조달 비용: SOFR + 20bp"
                      : "• All-in USD funding cost: SOFR + 20bp"}
                  </p>
                  <p className="mt-2 font-bold">
                    {ko
                      ? "→ 유로본드 직접 발행(SOFR+80bp) 대비 60bp 절감"
                      : "→ 60bp cheaper than direct Eurobond issuance (SOFR+80bp)"}
                  </p>
                </div>
              </div>
            </div>

            {/* Basis Table */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: accent }}>
                    {[
                      "Basis",
                      ko ? "의미" : "Meaning",
                      ko ? "누가 유리한가" : "Who Benefits",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-white"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      basis: ko ? "양수(+)" : "Positive (+)",
                      meaning: ko
                        ? "USD 조달 유리 → JPY→USD 스왑 수요 높음"
                        : "USD funding favorable → demand for JPY→USD swaps is high",
                      who: ko ? "USD를 원하는 발행사" : "Issuers wanting USD",
                    },
                    {
                      basis: ko ? "음수(-)" : "Negative (−)",
                      meaning: ko
                        ? "JPY 조달 유리 → USD→JPY 스왑 수요 높음"
                        : "JPY funding favorable → demand for USD→JPY swaps is high",
                      who: ko
                        ? "JPY 조달 후 USD 전환 발행사"
                        : "Issuers borrowing JPY then swapping to USD",
                    },
                    {
                      basis: ko ? "0 (제로)" : "Zero",
                      meaning: ko ? "수요 균형 상태" : "Balanced supply-demand",
                      who: ko ? "중립" : "Neutral",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-50 dark:bg-gray-800/50"
                      }
                    >
                      <td className="px-4 py-3 font-bold font-mono text-gray-900 dark:text-white">
                        {row.basis}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                        {row.meaning}
                      </td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="mt-6 rounded-xl p-5 border-l-4"
              style={{ borderLeftColor: amber, background: amberLight }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                  style={{ background: amber, color: "white" }}
                >
                  {ko ? "역사적 패턴" : "Historical Pattern"}
                </span>
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                {ko
                  ? "JPY/USD Basis는 역사적으로 음수(-) 구간이 많습니다. 일본 기관투자자들의 USD 자산 수요(달러 강세 선호)가 높아 USD→JPY 방향의 스왑 공급이 많기 때문입니다. 이 덕분에 사무라이 본드를 발행하고 CCS로 USD로 전환하는 전략이 오랫동안 한국·신흥국 발행사에게 유효했습니다. 2022–2023년에는 BOJ의 YCC(수익률 곡선 제어) 정책과 금리 차이가 극대화되면서 JPY/USD Basis가 -80bp 이상까지 벌어진 시기도 있었습니다."
                  : "JPY/USD Basis has historically been negative. Japan's institutional investors have high demand for USD assets (dollar-bullish preference), generating significant USD→JPY swap supply. This has made the Samurai+CCS strategy persistently viable for Korean and EM issuers. During 2022–2023, BOJ's YCC (yield curve control) policy and extreme rate differentials pushed JPY/USD basis beyond -80bp at times."}
              </p>
            </div>
          </div>

          {/* 5-3. 실전 케이스 */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: accent }}>
              {ko
                ? "5-3. 실전 케이스: 한국 발행사의 최적 조달 방식 비교"
                : "5-3. Live Case: Comparing Funding Options for a Korean Issuer"}
            </h3>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              {ko
                ? "한국의 주요 정책금융기관이 $5억 상당의 5년 고정금리 달러 자금을 조달할 때의 옵션을 비교합니다. (2024년 기준 가상 예시)"
                : "Let's compare funding options for a major Korean policy bank raising $500M equivalent in 5-year fixed-rate USD funding. (2024 illustrative example)"}
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: accent }}>
                    {[
                      ko ? "조달 방식" : "Funding Method",
                      ko ? "발행 금리" : "Issue Rate",
                      ko ? "CCS 효과" : "CCS Effect",
                      ko ? "올인클루시브 USD 비용" : "All-in USD Cost",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-white"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      method: (k: boolean) =>
                        k ? "Eurobond (USD 직접)" : "Eurobond (Direct USD)",
                      rate: "SOFR+80bp",
                      ccs: (k: boolean) => (k ? "없음" : "None"),
                      allin: "SOFR+80bp",
                      highlight: false,
                    },
                    {
                      method: (k: boolean) =>
                        k ? "Yankee Bond (SEC 등록)" : "Yankee Bond (SEC Reg)",
                      rate: "SOFR+70bp",
                      ccs: (k: boolean) => (k ? "없음" : "None"),
                      allin: "SOFR+70bp",
                      highlight: false,
                    },
                    {
                      method: (k: boolean) =>
                        k ? "사무라이 (JPY) + CCS" : "Samurai (JPY) + CCS",
                      rate: "JPY 0.30%",
                      ccs: (k: boolean) =>
                        k ? "Basis -60bp 절감" : "Basis -60bp saving",
                      allin: "SOFR+20bp ✓",
                      highlight: true,
                    },
                    {
                      method: (k: boolean) =>
                        k ? "포르모사 (USD / 대만)" : "Formosa Bond (USD/Taiwan)",
                      rate: "SOFR+60bp",
                      ccs: (k: boolean) => (k ? "없음" : "None"),
                      allin: "SOFR+60bp",
                      highlight: false,
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={
                        row.highlight
                          ? ""
                          : i % 2 === 0
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-50 dark:bg-gray-800/50"
                      }
                      style={
                        row.highlight
                          ? { background: accentLight }
                          : undefined
                      }
                    >
                      <td
                        className={`px-4 py-3 font-semibold ${row.highlight ? "text-teal-900" : "text-gray-700 dark:text-gray-300"}`}
                      >
                        {row.method(ko)}
                        {row.highlight && (
                          <span
                            className="ml-2 text-xs font-bold px-1.5 py-0.5 rounded"
                            style={{ background: accent, color: "white" }}
                          >
                            BEST
                          </span>
                        )}
                      </td>
                      <td
                        className={`px-4 py-3 font-mono ${row.highlight ? "text-teal-900 font-bold" : "text-gray-600 dark:text-gray-400"}`}
                      >
                        {row.rate}
                      </td>
                      <td
                        className={`px-4 py-3 ${row.highlight ? "text-teal-900 font-semibold" : "text-gray-600 dark:text-gray-400"}`}
                      >
                        {row.ccs(ko)}
                      </td>
                      <td
                        className={`px-4 py-3 font-mono font-bold ${row.highlight ? "text-teal-800" : "text-gray-700 dark:text-gray-300"}`}
                      >
                        {row.allin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {ko
                ? "* 2024년 기준 예시. CCS Basis 변동에 따라 순위 달라짐."
                : "* 2024 illustrative example. Rankings shift with CCS basis movements."}
            </p>

            {/* Banker's Note on CCS */}
            <div
              className="mt-6 rounded-xl p-5 border-l-4"
              style={{ borderLeftColor: amber, background: amberLight }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                  style={{ background: amber, color: "white" }}
                >
                  {ko ? "DCM·트레저리 실무" : "DCM / Treasury Practice"}
                </span>
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                {ko
                  ? "CCS Basis를 매주 모니터링하는 것이 DCM·트레저리 팀의 핵심 업무입니다. Basis가 -30bp에서 -70bp로 벌어지면 사무라이 발행이 갑자기 매력적으로 바뀝니다. 반대로 -10bp로 좁혀지면 유로본드가 더 유리합니다. 발행 타이밍을 잡을 때 FX 변동성, 일본 투자자 북엔드 수요(연말·반기말), BOJ 금리 정책 방향까지 함께 봐야 합니다."
                  : "Weekly monitoring of CCS Basis is a core job for DCM and treasury teams. When basis widens from -30bp to -70bp, Samurai issuance suddenly becomes attractive. Conversely, when it narrows to -10bp, Eurobond is preferable. Timing the market requires watching FX volatility, Japanese investor book-end demand (fiscal year-end, half-year), and BOJ rate policy direction simultaneously."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 6: 글로벌 기준선 정리                                      */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko
              ? "6. 2024년 기준 글로벌 금리 기준선 정리"
              : "6. Global Rate Benchmark Reference: 2024"}
          </h2>

          <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "아래 표는 DCM 실무에서 자주 접하는 주요 통화별 기준금리 체계를 정리한 것입니다. 각 통화마다 무위험 기준(국채), 단기 변동금리 기준, 채권 호가 방식, LIBOR 전환 후계 금리가 모두 다릅니다."
              : "The table below summarizes the rate benchmark framework for major currencies encountered in DCM practice. Each currency has its own risk-free benchmark (government bonds), short-term floating rate reference, bond quoting convention, and LIBOR successor."}
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: accent }}>
                  {[
                    ko ? "통화" : "Currency",
                    ko ? "무위험 기준금리" : "Risk-Free Benchmark",
                    ko ? "단기 기준" : "Short-Term Rate",
                    ko ? "채권 호가 방식" : "Bond Quoting",
                    ko ? "LIBOR 후속" : "LIBOR Successor",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    ccy: "USD",
                    rf: "US Treasury",
                    st: "SOFR (5.30%)",
                    bond: "T+Xbp / SOFR+Xbp",
                    successor: "SOFR",
                  },
                  {
                    ccy: "EUR",
                    rf: "German Bund",
                    st: "€STR / EURIBOR",
                    bond: "MS+Xbp",
                    successor: "€STR",
                  },
                  {
                    ccy: "GBP",
                    rf: "UK Gilt",
                    st: "SONIA (5.19%)",
                    bond: "Gilt+Xbp / SONIA+Xbp",
                    successor: "SONIA",
                  },
                  {
                    ccy: "JPY",
                    rf: "JGB",
                    st: "TONA (0.10%) / TIBOR",
                    bond: "JGB+Xbp",
                    successor: "TONA",
                  },
                  {
                    ccy: "HKD",
                    rf: "HK Exchange Fund Bills",
                    st: "HIBOR",
                    bond: "HIBOR+Xbp",
                    successor: "HONIA",
                  },
                  {
                    ccy: "KRW",
                    rf: ko ? "국고채 (KTB)" : "Korea Treasury Bond (KTB)",
                    st: ko ? "CD금리 / KOFR" : "CD Rate / KOFR",
                    bond: "KTB+Xbp",
                    successor: "KOFR",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.ccy}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800/50"
                    }
                  >
                    <td className="px-4 py-3 font-black font-mono text-gray-900 dark:text-white">
                      {row.ccy}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.rf}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-mono">
                      {row.st}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.bond}</td>
                    <td
                      className="px-4 py-3 font-bold font-mono"
                      style={{ color: accent }}
                    >
                      {row.successor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TIBOR note */}
          <div
            className="rounded-xl p-5 border-l-4"
            style={{ borderLeftColor: accent, background: accentLight }}
          >
            <p className="text-sm text-teal-900 leading-relaxed">
              <strong>{ko ? "TIBOR에 대한 참고:" : "Note on TIBOR:"}</strong>{" "}
              {ko
                ? "일본은 TONA(BOJ) 외에 TIBOR(Tokyo Interbank Offered Rate, 일본은행연합회 관리)도 병행 사용 중입니다. 사무라이 본드의 변동금리 쿠폰은 TIBOR 기준인 경우가 많습니다. JBA(Japan Bankers Association)는 LIBOR 스캔들 이후 TIBOR의 조작 방지 시스템을 강화했으며, 일본 국내 시장은 TONA와 TIBOR를 당분간 병행 사용하는 방향으로 가고 있습니다."
                : "Japan uses both TONA (BOJ) and TIBOR (Tokyo Interbank Offered Rate, administered by JBA) in parallel. Samurai bond floating coupons often reference TIBOR. JBA has strengthened manipulation safeguards post-LIBOR scandal, and Japan's domestic market is heading toward a dual-rate regime where TONA and TIBOR coexist for the foreseeable future."}
            </p>
          </div>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Section 7: FAQ                                                     */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-14"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-gray-800">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors list-none">
                  <span className="font-semibold text-sm text-gray-900 dark:text-white leading-snug">
                    {item.q(ko)}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform group-open:rotate-180"
                    style={{ background: accentLight, color: accent }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 bg-gray-50 dark:bg-gray-800/40 text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700">
                  {item.a(ko)}
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        {/* ── Share BOTTOM ──────────────────────────────────────────────────── */}
        <ShareButtons title={title} variant="bottom" lang={lang} />

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* References                                                         */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-12 mb-14"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
            {ko ? "참고 자료" : "References"}
          </h2>
          <ol className="space-y-2">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex items-start gap-3 text-sm">
                <span
                  className="shrink-0 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{ background: accent }}
                >
                  {s.id}
                </span>
                <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {s.author},{" "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                    style={{ color: accent }}
                  >
                    {s.title}
                  </a>
                  {". "}
                  <span className="text-gray-500 dark:text-gray-500">{s.source}</span>
                </span>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* Related Links                                                      */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-10"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
            {ko ? "관련 글" : "Related Articles"}
          </h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {[
              {
                href: `${base}/dcm-pricing`,
                label: (k: boolean) => k ? "Ch.6 — 프라이싱 & 스프레드 심층 해부" : "Ch.6 — Pricing & Spread Deep Dive",
                sub: (k: boolean) => k ? "G-Spread · I-Spread · Z-Spread · OAS" : "G-Spread · I-Spread · Z-Spread · OAS",
              },
              {
                href: `${base}/dcm-international-markets`,
                label: (k: boolean) => k ? "Ch.4 — 국제채 지형도" : "Ch.4 — International Bond Markets",
                sub: (k: boolean) =>
                  k
                    ? "유로본드 · 양키 · 사무라이 · 포르모사"
                    : "Eurobond · Yankee · Samurai · Formosa",
              },
              {
                href: `${base}/dcm-deal-process`,
                label: (k: boolean) => k ? "Ch.5 — 딜 프로세스" : "Ch.5 — Deal Process",
                sub: (k: boolean) =>
                  k
                    ? "LOI부터 클로징까지 전체 타임라인"
                    : "Full timeline from mandate to closing",
              },
              {
                href: "/market/korea-1998-external-bond",
                label: (k: boolean) =>
                  k ? "케이스 스터디: 한국 1998 외화채" : "Case Study: Korea 1998 External Bond",
                sub: (k: boolean) =>
                  k
                    ? "IMF 직후 글로벌 로드쇼 실전 기록"
                    : "Real record of the post-IMF global roadshow",
              },
            ].map((link, i) => (
              <motion.div key={link.href} variants={fadeUp(0.05 * i)}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-teal-300 dark:hover:border-teal-600 hover:bg-teal-50/50 dark:hover:bg-teal-900/10 transition-all group"
                >
                  <div className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors leading-snug mb-1">
                    {link.label(ko)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{link.sub(ko)}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
