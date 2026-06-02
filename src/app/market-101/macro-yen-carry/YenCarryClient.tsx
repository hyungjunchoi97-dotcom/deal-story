"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6"; // DCM teal

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 캐리 트레이드란", en: "Ch.1 What Is Carry Trade" },
  { id: "ch2", ko: "Ch.2 2024년 붕괴",     en: "Ch.2 2024 Collapse"       },
  { id: "ch3", ko: "Ch.3 채권시장 파급",   en: "Ch.3 Bond Market Ripples" },
];

// ── Carry Mechanics ────────────────────────────────────────────────────────────
const CARRY_MECHANICS = [
  { step: "01", ko: "엔화 차입",       en: "Borrow Yen",            rate: "0–0.1%",   icon: "🏦", color: "bg-teal-500"   },
  { step: "02", ko: "달러 환전",       en: "Convert to USD",        rate: "FX 거래",   icon: "💱", color: "bg-blue-500"   },
  { step: "03", ko: "달러 자산 투자", en: "Invest in USD Assets",  rate: "5.25–5.5%", icon: "📈", color: "bg-violet-500"  },
  { step: "04", ko: "금리차 수익",     en: "Pocket the Spread",     rate: "≈5%+",      icon: "💰", color: "bg-green-500"  },
];

// ── Market Impact ──────────────────────────────────────────────────────────────
const MARKET_IMPACT = [
  { market: "닛케이 225", marketEn: "Nikkei 225", drop: "-12.4%",   note: (ko: boolean) => ko ? "1987 이후 최대"           : "Largest since 1987",                     color: "bg-red-500",    bar: 100 },
  { market: "코스피",     marketEn: "KOSPI",       drop: "-8.77%",   note: (ko: boolean) => ko ? "서킷브레이커 발동"         : "Circuit breaker triggered",               color: "bg-orange-500", bar: 71  },
  { market: "나스닥",     marketEn: "Nasdaq",      drop: "-6.0%",    note: (ko: boolean) => ko ? "기술주 집중 매도"           : "Tech stock concentrated selling",         color: "bg-amber-500",  bar: 49  },
  { market: "S&P 500",   marketEn: "S&P 500",     drop: "-3.0%",    note: (ko: boolean) => ko ? "광범위 매도"               : "Broad selloff",                           color: "bg-yellow-500", bar: 24  },
  { market: "달러/엔",   marketEn: "USD/JPY",     drop: "158→141",  note: (ko: boolean) => ko ? "엔화 11% 강세"             : "Yen +11%",                                color: "bg-blue-500",   bar: 89  },
];

// ── Case Studies ───────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "macro-yen-carry",
    emoji: "🇯🇵",
    tier: (ko: boolean) => ko ? "2024 BOJ 쇼크"       : "2024 BOJ Shock",
    title: (ko: boolean) => ko
      ? "2024년 8월 5일 — 0.15%포인트의 나비효과"
      : "August 5, 2024 — The 0.15bp Butterfly Effect",
    tagline: (ko: boolean) => ko
      ? "BOJ 기준금리 0.1%→0.25% 인상 하나로 글로벌 시장 $6조+ 증발"
      : "One BOJ hike from 0.1% to 0.25% wiped out $6T+ in global market value",
    lesson: (ko: boolean) => ko
      ? "캐리 트레이드 규모($4조 추정)가 클수록 언와인딩 충격도 크다. 금리 차이가 좁혀지는 신호가 보이면 포지션 청산이 동시에 일어난다."
      : "The larger the carry trade ($4T estimated), the greater the unwinding shock. When signals appear that rate differentials will narrow, position liquidation happens simultaneously.",
    color: "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    slug: "macro-yen-carry",
    emoji: "📉",
    tier: (ko: boolean) => ko ? "1998 LTCM 붕괴"       : "1998 LTCM Collapse",
    title: (ko: boolean) => ko
      ? "Long-Term Capital Management — 천재들의 실패"
      : "Long-Term Capital Management — The Genius Failure",
    tagline: (ko: boolean) => ko
      ? "노벨상 수상자 2명이 포함된 헤지펀드가 엔 캐리와 신흥국 캐리 동시 언와인딩으로 4개월 만에 $4.6bn 손실"
      : "A hedge fund with 2 Nobel laureates lost $4.6B in 4 months from simultaneous yen carry and EM carry unwinding",
    lesson: (ko: boolean) => ko
      ? "레버리지 40:1로 쌓인 캐리 포지션은 조기 경보 없이 붕괴한다. 유동성 위기 시 모든 상관관계가 1로 수렴한다."
      : "Carry positions stacked at 40:1 leverage collapse without early warning. During liquidity crises, all correlations converge to 1.",
    color: "border-orange-200 dark:border-orange-700 bg-orange-50/60 dark:bg-orange-900/20",
    labelColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "캐리 트레이드가 왜 주식시장에 영향을 주나요?"
      : "Why does the carry trade affect stock markets?",
    a: (ko: boolean) => ko
      ? "캐리 트레이드 언와인딩 시 달러 자산 전반의 매도가 일어나기 때문입니다. 트레이더들은 일본에서 빌린 엔화를 상환하기 위해 달러를 팔아야 합니다. 이 달러는 미국 기술주, 신흥국 주식, 원자재 등 다양한 자산에 투자돼 있었기 때문에 광범위한 자산 매도가 동시에 발생합니다."
      : "Because carry trade unwinding triggers broad selling of dollar-denominated assets. Traders must sell dollars to repay borrowed yen, and those dollars were invested across US tech stocks, EM equities, commodities, and more — creating simultaneous broad-based asset selling.",
  },
  {
    q: (ko: boolean) => ko
      ? "엔 캐리 트레이드 규모는 어떻게 추정하나요?"
      : "How is yen carry trade size estimated?",
    a: (ko: boolean) => ko
      ? "직접 측정이 불가능합니다. BIS의 은행 포지션 데이터, 일본 단기 자금 조달 흐름, CME 엔화 선물 포지션을 종합해 간접 추정합니다. 2024년 추정치는 $3–4조 범위였으나, 이는 표준화되지 않은 추정입니다."
      : "Direct measurement is impossible. Estimates combine BIS bank position data, Japanese short-term funding flows, and CME yen futures positioning. 2024 estimates ranged $3–4 trillion, though these are unstandardized approximations.",
  },
  {
    q: (ko: boolean) => ko
      ? "캐리 트레이드와 헤지펀드의 관계는?"
      : "What is the relationship between carry trade and hedge funds?",
    a: (ko: boolean) => ko
      ? "글로벌 매크로 헤지펀드가 캐리 트레이드의 주요 참여자입니다. 레버리지를 통해 포지션을 키우며 금리 차이에서 수익을 극대화합니다. 그러나 기업과 개인 투자자도 은행 대출이나 FX 파생상품을 통해 간접적으로 캐리 트레이드에 노출됩니다."
      : "Global macro hedge funds are the primary carry trade participants, using leverage to scale positions and maximize returns from rate differentials. But corporations and retail investors are also indirectly exposed through bank loans or FX derivatives.",
  },
  {
    q: (ko: boolean) => ko
      ? "BOJ가 금리를 조금만 올렸는데 왜 이렇게 큰 충격이었나요?"
      : "Why did such a small BOJ hike cause such a large shock?",
    a: (ko: boolean) => ko
      ? "충격의 크기는 인상 폭이 아니라 기대 변화에서 옵니다. 시장은 BOJ가 '훨씬 더 공격적으로 올릴 것'이라는 신호로 해석했습니다. 예상보다 빠른 정책 전환 신호가 엔 캐리 청산 결정을 동시에 촉발한 것입니다."
      : "The shock magnitude comes not from the hike size but from the change in expectations. Markets interpreted it as a signal that the BOJ would raise 'much more aggressively.' The faster-than-expected policy pivot signal simultaneously triggered carry unwind decisions.",
  },
  {
    q: (ko: boolean) => ko
      ? "엔 캐리 트레이드는 계속 가능한 전략인가요?"
      : "Is the yen carry trade still a viable strategy?",
    a: (ko: boolean) => ko
      ? "BOJ의 정상화 경로에 달려있습니다. 일본 금리가 1–2%대로 올라가면 캐리 수익이 크게 줄어들고 엔화 강세 위험도 커집니다. 2025년 이후 BOJ가 추가 인상을 지속한다면 전통적인 엔 캐리 트레이드의 매력은 구조적으로 약화될 것입니다."
      : "It depends on the BOJ's normalization path. If Japan rates rise to 1–2%, carry returns shrink significantly and yen appreciation risk grows. If the BOJ continues additional hikes after 2025, the traditional yen carry trade's appeal will structurally weaken.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "dcm-rate-benchmarks", ko: "금리 벤치마크 ↗", en: "Rate Benchmarks ↗"  },
  { slug: "dcm-overview",        ko: "DCM 개요 ↗",       en: "DCM Overview ↗"    },
  { slug: "levfin-distressed",   ko: "Distressed 시장 ↗", en: "Distressed Market ↗" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2">
      <div className="flex gap-1 py-1 min-w-max">
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
          >
            {ko ? ch.ko : ch.en}
          </a>
        ))}
      </div>
    </div>
  );
}

function CarryMechanicsViz({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "엔 캐리 트레이드 구조 — 4단계 메커니즘" : "Yen Carry Trade Structure — 4-Step Mechanism"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        {/* Desktop: horizontal */}
        <div className="hidden sm:flex items-start gap-0">
          {CARRY_MECHANICS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < CARRY_MECHANICS.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg ${step.color} shadow-sm mb-3`}
              >
                {step.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.15, ease: EASE }}
                className="text-center px-1"
              >
                <p className="text-[10px] font-black text-teal-600 dark:text-teal-400 mb-0.5">{step.step}</p>
                <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200 mb-1">{ko ? step.ko : step.en}</p>
                <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{step.rate}</p>
              </motion.div>
            </div>
          ))}
        </div>
        {/* Mobile: vertical */}
        <div className="sm:hidden space-y-0">
          {CARRY_MECHANICS.map((step, i) => (
            <div key={i} className="flex gap-3 items-start relative">
              {i < CARRY_MECHANICS.length - 1 && (
                <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
              )}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${step.color} shadow-sm flex-shrink-0 z-10`}>
                {step.icon}
              </div>
              <div className="pb-5">
                <p className="text-[10px] font-black text-teal-600 dark:text-teal-400">{step.step}</p>
                <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{ko ? step.ko : step.en}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{step.rate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-teal-50 dark:bg-teal-900/20 px-5 py-3 border-t border-teal-100 dark:border-teal-800">
        <p className="text-[12px] text-teal-700 dark:text-teal-300 text-center leading-relaxed">
          {ko
            ? "엔화가 약세를 유지하는 한 환차손 없이 약 5%의 순이익. 엔 강세 전환이 유일한 파괴 조건이다."
            : "As long as yen stays weak, roughly 5% net profit with no FX losses. A yen strengthening reversal is the single destruction condition."}
        </p>
      </div>
    </motion.div>
  );
}

function MarketImpactChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "2024년 8월 5일 — 시장별 충격" : "August 5, 2024 — Market Impact by Asset"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
        {MARKET_IMPACT.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-gray-800 dark:text-gray-200">
                  {ko ? item.market : item.marketEn}
                </span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500">{item.note(ko)}</span>
              </div>
              <span className="text-[13px] font-black text-red-600 dark:text-red-400">{item.drop}</span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.bar}%` }}
                viewport={VP}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 border-t border-red-100 dark:border-red-800">
        <p className="text-[12px] text-red-700 dark:text-red-300 text-center leading-relaxed">
          {ko
            ? "단 하루 만에 글로벌 주식시장에서 $6조 이상 증발. BOJ의 0.15%포인트 인상이 직접 원인이 아니라 기대 변화가 방아쇠였다."
            : "Over $6 trillion evaporated from global equity markets in a single day. The BOJ's 0.15bp hike wasn't the direct cause — the change in expectations was the trigger."}
        </p>
      </div>
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {CASE_STUDIES.map((cs, i) => (
        <motion.div key={`${cs.slug}-${i}`} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0">{cs.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${cs.labelColor}`}>
                  {cs.tier(ko)}
                </span>
              </div>
              <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100 mb-1">{cs.title(ko)}</h3>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{cs.tagline(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-gray-300 dark:border-gray-600 pl-3">
                {cs.lesson(ko)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function YenCarryClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const nav = getMarket101Nav("macro-yen-carry");

  const ch1Paras = (ko ? concept.sections[0].body : concept.sections[0].bodyEn ?? concept.sections[0].body)
    .split("\n\n").filter(Boolean);
  const ch2Paras = (ko ? concept.sections[1].body : concept.sections[1].bodyEn ?? concept.sections[1].body)
    .split("\n\n").filter(Boolean);
  const ch3Paras = (ko ? concept.sections[2].body : concept.sections[2].bodyEn ?? concept.sections[2].body)
    .split("\n\n").filter(Boolean);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* JSON-LD: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: ko ? concept.title : concept.titleEn,
              description: ko ? concept.excerpt : concept.excerptEn,
              author: { "@type": "Organization", name: "Deal Story" },
              publisher: { "@type": "Organization", name: "Deal Story" },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ko
                  ? "https://dealstory.io/market-101/macro-yen-carry"
                  : "https://dealstory.io/en/market-101/macro-yen-carry",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q(ko),
                acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Market 101</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "엔 캐리 트레이드" : "Yen Carry Trade"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
              {ko ? "DCM — 매크로 이벤트" : "DCM — Macro Event"}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {concept.titleEn}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).slice(0, 6).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/market-101/macro-yen-carry"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/macro-yen-carry"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
          <LikeButton slug={concept.slug} lang={lang} />
        </div>

        {/* Sticky Chapter Nav */}
        <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
          <ChapterNav lang={lang} />
        </div>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 캐리 트레이드란 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "캐리 트레이드란 — 금리 차이로 돈 버는 법" : "What Is Carry Trade — Profiting from Rate Differentials"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {ch1Paras.map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <CarryMechanicsViz ko={ko} />
          </motion.section>

          {/* Ch.2 2024년 8월 5일 붕괴 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "2024년 8월 5일 붕괴 — 48시간의 연쇄" : "The August 5, 2024 Collapse — 48-Hour Chain Reaction"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {ch2Paras.map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <MarketImpactChart ko={ko} />
          </motion.section>

          {/* Ch.3 채권시장 파급 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "채권시장 파급 — 안전자산 수요와 달러 약세" : "Bond Market Ripples — Safe Haven Demand and Dollar Weakness"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {ch3Paras.map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "두 케이스가 같은 교훈을 다른 규모로 보여준다 — 캐리 포지션의 규모와 레버리지가 클수록 언와인딩 충격은 기하급수적으로 커진다."
                : "Two cases show the same lesson at different scales — the larger and more leveraged the carry position, the more exponentially severe the unwinding shock."}
            </motion.p>

            <CaseStudyCards ko={ko} />
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} />
            </motion.div>
          </motion.section>

          {/* Key Terms */}
          {concept.keyTerms && concept.keyTerms.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "핵심 용어" : "Key Terms"}
              </motion.h2>
              <motion.div variants={fadeUp(0.05)} className="space-y-3">
                {concept.keyTerms.map((kt) => (
                  <div key={kt.term} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[13px] font-black text-gray-900 dark:text-gray-100">{ko ? kt.term : kt.termEn}</span>
                      {ko && <span className="text-[11px] text-gray-400 dark:text-gray-500">{kt.termEn}</span>}
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                      {ko ? kt.definition : kt.definitionEn}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* Related Concepts */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {RELATED_TERMS.map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  {ko ? term.ko : term.en}
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          <LikeButton slug={concept.slug} lang={lang} />

          {/* References */}
          {concept.references && concept.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors">
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}<span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* Series Nav */}
          <SeriesNav
            prev={nav.prev ? { href: `${ko ? "" : "/en"}/market-101/${nav.prev.slug}`, title: ko ? nav.prev.title : (nav.prev.titleEn ?? nav.prev.title) } : null}
            next={nav.next ? { href: `${ko ? "" : "/en"}/market-101/${nav.next.slug}`, title: ko ? nav.next.title : (nav.next.titleEn ?? nav.next.title) } : null}
            lang={lang}
          />

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
