"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

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
const accent = "#eab308"; // yellow-500

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "Ch.1 브리지론이란",      en: "Ch.1 What Is a Bridge Loan"    },
  { id: "ch2", ko: "Ch.2 딜 발표 당일 밤",   en: "Ch.2 The Night of Announcement" },
  { id: "ch3", ko: "Ch.3 Hung Bridge",       en: "Ch.3 Hung Bridge"               },
];

// ── Bridge Process Steps ──────────────────────────────────────────────────────
const BRIDGE_PROCESS_STEPS = [
  {
    num: "01", icon: "🤝",
    label: (ko: boolean) => ko ? "M&A 협상 종결"     : "M&A Negotiations Close",
    desc:  (ko: boolean) => ko ? "LevFin팀 브리지론 내부 협의 시작" : "LevFin team begins internal bridge loan discussion",
  },
  {
    num: "02", icon: "🏛️",
    label: (ko: boolean) => ko ? "신용위원회 승인"   : "Credit Committee Approval",
    desc:  (ko: boolean) => ko ? "48시간 내 리스크 검토·약정 승인" : "Risk review and commitment approval within 48 hours",
  },
  {
    num: "03", icon: "📋",
    label: (ko: boolean) => ko ? "Commitment Letter 서명" : "Commitment Letter Signed",
    desc:  (ko: boolean) => ko ? "딜 발표와 동시 공시" : "Published simultaneously with deal announcement",
  },
  {
    num: "04", icon: "📣",
    label: (ko: boolean) => ko ? "딜 발표"           : "Deal Announcement",
    desc:  (ko: boolean) => ko ? "자금 조달 계획 포함 공시" : "Announcement includes financing plan",
  },
  {
    num: "05", icon: "📊",
    label: (ko: boolean) => ko ? "영구 자금 조달"    : "Permanent Financing",
    desc:  (ko: boolean) => ko ? "HY채권·신디케이트론 발행" : "HY bond or syndicated loan issuance",
  },
  {
    num: "06", icon: "✅",
    label: (ko: boolean) => ko ? "브리지론 상환"     : "Bridge Loan Repaid",
    desc:  (ko: boolean) => ko ? "테이크아웃 완료·IB 대차대조표 해소" : "Takeout complete, IB balance sheet relieved",
  },
];

// ── Hung Bridge Risk Factors ──────────────────────────────────────────────────
const HUNG_BRIDGE_RISK = [
  {
    risk:  (ko: boolean) => ko ? "금리 급등"          : "Rate Spike",
    desc:  (ko: boolean) => ko ? "HY채권·대출 발행 비용이 너무 높아져 테이크아웃 불가" : "HY bond/loan issuance cost too high to execute takeout",
    icon: "📈", color: "bg-red-500",
  },
  {
    risk:  (ko: boolean) => ko ? "신용 스프레드 확대" : "Credit Spread Widening",
    desc:  (ko: boolean) => ko ? "시장 리스크 오프로 HY 수요 증발" : "Risk-off conditions evaporate HY demand",
    icon: "📉", color: "bg-orange-500",
  },
  {
    risk:  (ko: boolean) => ko ? "규제 딜 차단"       : "Regulatory Block",
    desc:  (ko: boolean) => ko ? "딜이 반독점 규제로 막히면 테이크아웃 목적 자체가 소멸" : "Deal blocked by antitrust leaves no purpose for takeout",
    icon: "⛔", color: "bg-violet-500",
  },
  {
    risk:  (ko: boolean) => ko ? "인수사 신용 악화"   : "Acquirer Credit Deterioration",
    desc:  (ko: boolean) => ko ? "인수사 영업 부진으로 레버리지 비율 급등" : "Acquirer operating shortfall drives leverage ratio spike",
    icon: "⚠️", color: "bg-amber-500",
  },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "levfin-bridge-loan",
    emoji: "💻",
    tier: (ko: boolean) => ko ? "성공적 브리지론" : "Successful Bridge Loan",
    title: (ko: boolean) => ko
      ? "마이크로소프트 LinkedIn 인수 (2016, $262억)"
      : "Microsoft LinkedIn Acquisition (2016, $26.2B)",
    tagline: (ko: boolean) => ko
      ? "딜 발표 하루 만에 Morgan Stanley·JPMorgan 브리지론 약정 → 이후 회사채 발행으로 테이크아웃"
      : "Bridge committed by Morgan Stanley and JPMorgan within one day of announcement → taken out via corporate bond issuance",
    lesson: (ko: boolean) => ko
      ? "Microsoft의 AAA 신용등급이 브리지론 조건을 유리하게 만들었다. 발행사 신용이 좋을수록 브리지론 조건이 유리하고 Hung Bridge 위험이 낮아진다."
      : "Microsoft's AAA credit rating made bridge loan terms favorable. Higher issuer credit quality means better bridge loan terms and lower hung bridge risk.",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
    labelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    slug: "levfin-bridge-loan",
    emoji: "🚨",
    tier: (ko: boolean) => ko ? "역사상 최대 Hung Bridge" : "Largest Hung Bridge in History",
    title: (ko: boolean) => ko
      ? "2007–2008 LBO 브리지론 위기"
      : "2007–2008 LBO Bridge Loan Crisis",
    tagline: (ko: boolean) => ko
      ? "씨티그룹·메릴린치 등 수백억 달러 LBO 브리지론 — 채권시장 마비로 테이크아웃 불가, 수십억 달러 손실"
      : "Citigroup, Merrill Lynch and others committed tens of billions in LBO bridge loans — bond market freeze made takeout impossible, billions in losses",
    lesson: (ko: boolean) => ko
      ? "Hung Bridge의 규모는 시장 전체의 유동성 위기와 함께 온다. 단일 딜 위험이 아니라 시장 위험이다. 신용 사이클 정점에 약정된 브리지론이 가장 위험하다."
      : "Hung bridge scale arrives with market-wide liquidity crises. It's not single-deal risk — it's market risk. Bridge loans committed at the peak of the credit cycle are the most dangerous.",
    color: "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "브리지론 없이 M&A를 진행할 수 있나요?"
      : "Can M&A proceed without a bridge loan?",
    a: (ko: boolean) => ko
      ? "가능하지만 드뭅니다. 인수자가 충분한 현금을 갖고 있거나(예: 애플의 자체 현금 인수), 영구 자금 조달이 딜 발표 전에 이미 완료됐거나, 주식 교환 방식(All-stock) 딜이라면 브리지론이 필요 없습니다. 그러나 대부분의 레버리지 인수(LBO)는 브리지론이 필수입니다."
      : "Possible but rare. If the acquirer has sufficient cash (e.g., Apple buying with its own cash), permanent financing is already arranged before announcement, or it's an all-stock deal, no bridge is needed. However, most leveraged acquisitions (LBOs) require bridge financing.",
  },
  {
    q: (ko: boolean) => ko
      ? "브리지론 금리는 어떻게 결정되나요?"
      : "How is bridge loan pricing determined?",
    a: (ko: boolean) => ko
      ? "기준금리(SOFR/LIBOR) + 스프레드 형태입니다. 스프레드는 인수사의 신용등급, 딜 구조, 브리지론 규모, IB와의 관계에 따라 결정됩니다. 만기 연장 시 Step-up 조항으로 스프레드가 자동 증가합니다. 통상 신디케이트 대출보다 높은 금리가 적용됩니다."
      : "Priced as a benchmark rate (SOFR/LIBOR) plus spread. The spread depends on acquirer credit rating, deal structure, bridge loan size, and IB relationship. Step-up provisions automatically widen spreads as tenor extends. Typically priced higher than syndicated loans.",
  },
  {
    q: (ko: boolean) => ko
      ? "Commitment Letter의 법적 구속력은?"
      : "What is the legal binding force of a Commitment Letter?",
    a: (ko: boolean) => ko
      ? "강한 법적 구속력이 있습니다. IB는 서명한 조건대로 자금을 제공할 법적 의무가 있습니다. 다만 'market flex' 조항을 통해 시장 상황 변화 시 IB가 금리·조건을 일정 범위 내에서 조정할 수 있습니다. '조건부 약정(Highly Confident Letter)'은 완전한 약정(Commitment Letter)과 다르며 구속력이 낮습니다."
      : "Strong legal binding force. The IB has a legal obligation to provide funds under the signed terms. However, 'market flex' provisions allow the IB to adjust rates and terms within certain ranges if market conditions change. A 'Highly Confident Letter' differs from a full Commitment Letter and carries less binding force.",
  },
  {
    q: (ko: boolean) => ko
      ? "Hung Bridge 상황에서 IB는 어떻게 손실을 줄이나요?"
      : "How does an IB minimize losses in a hung bridge situation?",
    a: (ko: boolean) => ko
      ? "여러 방법이 있습니다. ① 할인 발행(Discount Sale) — 손실을 감수하고 브리지론을 시장에 파는 방법. ② PIK(현물이자지급) 전환 — 현금 이자 대신 원금으로 이자를 지급해 현금 부담 완화. ③ 워크아웃(Workout) — 인수사와 협상해 부채 구조를 조정. ④ 2차 시장 매각 — 디스트레스드 전문 투자자에게 할인 매각."
      : "Several approaches: ① Discount Sale — sell the bridge loan in the market accepting losses. ② PIK (Payment-in-Kind) conversion — pay interest in principal rather than cash to ease cash burden. ③ Workout — negotiate with acquirer to restructure the debt. ④ Secondary market sale — discounted sale to distressed specialists.",
  },
  {
    q: (ko: boolean) => ko
      ? "브리지론과 LBO의 관계는?"
      : "What is the relationship between bridge loans and LBOs?",
    a: (ko: boolean) => ko
      ? "LBO(레버리지드 바이아웃)에서 브리지론은 거의 필수입니다. PE 스폰서가 딜을 발표할 때 '포트폴리오 회사가 HY채권과 Term Loan을 발행할 것'이라고 공시하지만, 실제 발행에는 몇 달이 걸립니다. IB가 브리지론으로 이 기간을 메우고, 이후 로드쇼를 통해 HY채권·Term Loan으로 테이크아웃합니다."
      : "Bridge loans are virtually mandatory in LBOs. When a PE sponsor announces a deal, it discloses plans for the portfolio company to issue HY bonds and Term Loans, but actual issuance takes months. IBs bridge this gap, then take out through HY bond and Term Loan issuance following roadshows.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "levfin-ecosystem",        ko: "LevFin 생태계 ↗",    en: "LevFin Ecosystem ↗"   },
  { slug: "levfin-process",          ko: "LevFin 프로세스 ↗",  en: "LevFin Process ↗"     },
  { slug: "syndicated-loan-overview",ko: "신디케이트론 ↗",     en: "Syndicated Loans ↗"   },
  { slug: "levfin-hy-vs-loans",      ko: "HY vs 대출 ↗",       en: "HY vs Loans ↗"        },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {CHAPTERS.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors"
            >
              {ko ? ch.ko : ch.en}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function BridgeProcessTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      {/* Desktop: horizontal */}
      <div className="hidden sm:block">
        <div className="flex items-start gap-0">
          {BRIDGE_PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < BRIDGE_PROCESS_STEPS.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg bg-white dark:bg-gray-950 border-2 border-yellow-300 dark:border-yellow-700 shadow-sm mb-3"
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
                <p className="text-[10px] font-black text-yellow-600 dark:text-yellow-400 mb-0.5">{step.num}</p>
                <p className="text-[11px] font-bold text-gray-800 dark:text-gray-200 mb-1">{step.label(ko)}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{step.desc(ko)}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="sm:hidden space-y-0">
        {BRIDGE_PROCESS_STEPS.map((step, i) => (
          <div key={i} className="flex gap-3 items-start relative">
            {i < BRIDGE_PROCESS_STEPS.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 border-yellow-300 dark:border-yellow-700 shadow-sm flex-shrink-0 z-10">
              {step.icon}
            </div>
            <div className="pb-5">
              <p className="text-[10px] font-black text-yellow-600 dark:text-yellow-400">{step.num}</p>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Commitment letter callout */}
      <div className="mt-6 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 px-4 py-3">
        <p className="text-[11px] text-yellow-700 dark:text-yellow-300 leading-relaxed">
          {ko
            ? "핵심: Commitment Letter는 딜 발표와 동시에 공시된다. IB의 법적 약정이 시장에 자금 조달 확실성을 즉각 제공한다."
            : "Key: The Commitment Letter is published simultaneously with the deal announcement. The IB's legal commitment immediately provides the market with financing certainty."}
        </p>
      </div>
    </motion.div>
  );
}

function HungBridgeRisks({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 mt-8">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "Hung Bridge 발생 시나리오 — 4대 위험 요인" : "Hung Bridge Scenarios — 4 Key Risk Factors"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {HUNG_BRIDGE_RISK.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className="flex gap-3 items-start rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${item.color} bg-opacity-15`}>
                {item.icon}
              </div>
              <div>
                <p className="text-[12px] font-black text-gray-800 dark:text-gray-200 mb-1">{item.risk(ko)}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 border-t border-red-100 dark:border-red-800">
        <p className="text-[12px] text-red-700 dark:text-red-300 text-center leading-relaxed">
          {ko
            ? "Hung Bridge의 핵심 교훈: 브리지론 위험은 개별 딜 위험이 아니라 시장 사이클 위험이다. 신용 사이클 정점에 약정된 브리지론이 가장 위험하다."
            : "Core hung bridge lesson: bridge loan risk is market cycle risk, not individual deal risk. Bridges committed at the peak of the credit cycle are the most dangerous."}
        </p>
      </div>
    </motion.div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-8 space-y-4">
      {CASE_STUDIES.map((cs, i) => (
        <motion.div key={cs.slug + i} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 ${cs.color}`}>
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
export default function BridgeLoanClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const nav = getMarket101Nav("levfin-bridge-loan");

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
                  ? "https://dealstory.io/market-101/levfin-bridge-loan"
                  : "https://dealstory.io/en/market-101/levfin-bridge-loan",
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
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "M&A 브리지론" : "M&A Bridge Loan"}
              </span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
              {ko ? "LevFin — 브리지론 가이드" : "LevFin — Bridge Loan Guide"}
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
                href="/market-101/levfin-bridge-loan"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/levfin-bridge-loan"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko
                    ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Share — top */}
        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
          <LikeButton slug={concept.slug} lang={lang} />
        </div>

        {/* Chapter Nav */}
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 브리지론이란 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1">Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[0].heading : concept.sections[0].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[0].body : concept.sections[0].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            {/* Bridge lifecycle callout */}
            <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "브리지론 라이프사이클" : "Bridge Loan Lifecycle"}
                </p>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    label: ko ? "딜 발표 ~ T" : "Deal Day (T)",
                    val: ko ? "Commitment\nLetter" : "Commitment\nLetter",
                    sub: ko ? "IB 법적 약정 공시" : "IB legally commits",
                    color: "text-yellow-600 dark:text-yellow-400",
                    delay: 0.15,
                  },
                  {
                    label: ko ? "T ~ T+6개월" : "T to T+6M",
                    val: ko ? "브리지론\n활성" : "Bridge\nActive",
                    sub: ko ? "규제·딜 클로징 진행" : "Regulatory & deal closing",
                    color: "text-blue-600 dark:text-blue-400",
                    delay: 0.25,
                  },
                  {
                    label: ko ? "T+6~18개월" : "T+6 to 18M",
                    val: ko ? "테이크아웃\n완료" : "Takeout\nComplete",
                    sub: ko ? "HY채권·대출 발행" : "HY bond / loan issued",
                    color: "text-teal-600 dark:text-teal-400",
                    delay: 0.35,
                  },
                ].map((item) => (
                  <div key={item.label} className="p-4 sm:p-6 text-center">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-2">{item.label}</p>
                    <motion.p
                      className={`text-[15px] sm:text-[17px] font-black leading-tight whitespace-pre-line ${item.color}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={VP}
                      transition={{ duration: 0.5, delay: item.delay, ease: EASE }}
                    >
                      {item.val}
                    </motion.p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 leading-tight">{item.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Ch.2 딜 발표 당일 밤 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1">Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[1].heading : concept.sections[1].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[1].body : concept.sections[1].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <BridgeProcessTimeline ko={ko} />

            {/* Banker's blockquote */}
            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-yellow-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"딜 발표 전날 밤 LevFin팀은 신용위원회를 몇 번이고 달래야 한다. '이 브리지가 Hung이 되면 어떻게 할 것인가' — 이 질문에 답을 준비하는 것이 뱅커의 일이다.\""
                  : "\"The night before deal announcement, the LevFin team has to reassure the credit committee over and over. 'What happens if this bridge gets hung?' — preparing the answer to that question is the banker's job.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— LevFin MD, 뉴욕·런던 복수 LBO 경험 뱅커, 2024" : "— LevFin MD, multi-market LBO veteran, New York & London, 2024"}
              </p>
            </motion.blockquote>
          </motion.section>

          {/* Ch.3 Hung Bridge */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1">Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? concept.sections[2].heading : concept.sections[2].headingEn}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {(ko ? concept.sections[2].body : concept.sections[2].bodyEn)
                  .split("\n\n")
                  .map((para, j) => (
                    <motion.p
                      key={j}
                      variants={fadeUp(j * 0.04)}
                      className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {para}
                    </motion.p>
                  ))}
              </div>
            </div>

            <HungBridgeRisks ko={ko} />

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mt-8 mb-2">
              {ko
                ? "두 가지 사례가 브리지론의 성공과 실패를 극명하게 대비시킨다."
                : "Two cases sharply contrast the success and failure of bridge loans."}
            </motion.p>

            <CaseStudyCards ko={ko} />

            {/* Step-up and MFN callout */}
            <motion.div variants={fadeUp(0.15)} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: ko ? "Step-up 금리" : "Step-up Rate",
                  desc:  ko
                    ? "만기가 길어질수록 스프레드 자동 증가. 인수사가 최대한 빨리 테이크아웃하도록 경제적 압력 제공."
                    : "Spread automatically increases as tenor extends. Creates economic pressure on acquirer to complete takeout ASAP.",
                  badge: ko ? "Hung Bridge 방어" : "Hung Bridge Defense",
                  color: "border-yellow-200 dark:border-yellow-700 bg-yellow-50/60 dark:bg-yellow-900/20",
                  badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
                },
                {
                  title: "MFN (Most Favored Nation)",
                  desc:  ko
                    ? "이후 동일 채권 발행 조건이 더 유리하면 브리지론도 자동으로 더 유리한 조건을 적용받는다."
                    : "If subsequent comparable debt issuance has better terms, those terms automatically apply to the bridge loan.",
                  badge: ko ? "인수자 보호" : "Acquirer Protection",
                  color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
                  badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.07)}
                  className={`rounded-2xl border p-5 ${item.color}`}
                >
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor} mb-3 inline-block`}>
                    {item.badge}
                  </span>
                  <h4 className="text-[14px] font-black text-gray-900 dark:text-gray-100 mb-2">{item.title}</h4>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Internal term links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { slug: "levfin-hy-vs-loans", ko: "HY vs 대출 ↗", en: "HY vs Loans ↗" },
                { slug: "levfin-process",      ko: "LevFin 프로세스 ↗", en: "LevFin Process ↗" },
                { slug: "syndicated-loan-overview", ko: "신디케이트론 ↗", en: "Syndicated Loans ↗" },
              ].map((link) => (
                <Link
                  key={link.slug}
                  href={`${ko ? "" : "/en"}/market-101/${link.slug}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/50 transition-colors"
                >
                  {ko ? link.ko : link.en}
                </Link>
              ))}
            </div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />

          {/* Key Terms */}
          {concept.keyTerms && concept.keyTerms.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "핵심 용어" : "Key Terms"}
              </motion.h2>
              <motion.div variants={fadeUp(0.05)} className="space-y-3">
                {concept.keyTerms.map((kt) => (
                  <div key={kt.term} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-[13px] font-black text-gray-900 dark:text-gray-100">{ko ? kt.term : kt.termEn}</span>
                      {ko && <span className="text-[10px] text-gray-400 dark:text-gray-500 italic">{kt.termEn}</span>}
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                      {ko ? kt.definition : kt.definitionEn}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.section>
          )}

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
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-yellow-300 dark:hover:border-yellow-700 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
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
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-yellow-600 dark:hover:text-yellow-400 hover:underline transition-colors">
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

          {/* SeriesNav */}
          <SeriesNav
            prev={
              nav.prev
                ? {
                    href: `${ko ? "" : "/en"}/market-101/${nav.prev.slug}`,
                    title: ko ? nav.prev.title : (nav.prev.titleEn ?? nav.prev.title),
                  }
                : null
            }
            next={
              nav.next
                ? {
                    href: `${ko ? "" : "/en"}/market-101/${nav.next.slug}`,
                    title: ko ? nav.next.title : (nav.next.titleEn ?? nav.next.title),
                  }
                : null
            }
            lang={lang}
          />

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-yellow-600 dark:text-yellow-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link href={ko ? "/market-101/levfin-ecosystem" : "/en/market-101/levfin-ecosystem"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "LevFin 생태계 →" : "LevFin Ecosystem →"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
