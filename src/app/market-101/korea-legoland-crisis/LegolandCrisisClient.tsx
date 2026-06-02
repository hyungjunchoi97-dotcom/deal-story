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
  { id: "ch1", ko: "Ch.1 강원도의 디폴트",  en: "Ch.1 Gangwon's Default"   },
  { id: "ch2", ko: "Ch.2 ABCP·PF 구조",     en: "Ch.2 ABCP·PF Structure"  },
  { id: "ch3", ko: "Ch.3 파급과 정책 대응", en: "Ch.3 Contagion & Response" },
];

// ── PF Chain ───────────────────────────────────────────────────────────────────
const PF_CHAIN = [
  {
    step: "01",
    ko: "시행사",
    en: "Developer SPC",
    desc: (ko: boolean) => ko ? "개발 프로젝트 기획" : "Plans development project",
    icon: "🏗️",
    color: "bg-gray-500",
  },
  {
    step: "02",
    ko: "신용보강",
    en: "Credit Enhancement",
    desc: (ko: boolean) => ko ? "지자체 보증·증권사 확약" : "Local gov. guarantee / securities firm commitment",
    icon: "🛡️",
    color: "bg-blue-500",
  },
  {
    step: "03",
    ko: "ABCP 발행",
    en: "ABCP Issuance",
    desc: (ko: boolean) => ko ? "증권사 단기어음 발행" : "Securities firm issues CP",
    icon: "📄",
    color: "bg-teal-500",
  },
  {
    step: "04",
    ko: "MMF·단기채권펀드",
    en: "MMF / Short-term Funds",
    desc: (ko: boolean) => ko ? "ABCP 매수" : "Buy the ABCP",
    icon: "🏦",
    color: "bg-violet-500",
  },
  {
    step: "05",
    ko: "일반 투자자",
    en: "Retail Investors",
    desc: (ko: boolean) => ko ? "펀드에 자금 예치" : "Deposit capital in fund",
    icon: "👤",
    color: "bg-orange-500",
  },
];

// ── Timeline Events ────────────────────────────────────────────────────────────
const TIMELINE_EVENTS = [
  { date: "2022.09.28", ko: "강원도 보증 거부",                en: "Gangwon refuses guarantee",                    icon: "💥", color: "text-red-600 dark:text-red-400"   },
  { date: "2022.10.17", ko: "흥국생명 콜옵션 미행사",          en: "Heungkuk Life skips AT1 call",                 icon: "⚡", color: "text-orange-600 dark:text-orange-400" },
  { date: "2022.10.23", ko: "정부 50조 채안펀드 발표",         en: "Gov't announces ₩50T stabilization fund",      icon: "🛡️", color: "text-blue-600 dark:text-blue-400"   },
  { date: "2022.11.10", ko: "한은 RP 매입 확대",               en: "BOK expands RP purchases",                     icon: "🏦", color: "text-teal-600 dark:text-teal-400"  },
  { date: "2023.01",    ko: "시장 점진적 안정",                 en: "Markets gradually stabilize",                  icon: "✅", color: "text-green-600 dark:text-green-400" },
];

// ── Case Studies ───────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "korea-legoland-crisis",
    emoji: "🎡",
    tier: (ko: boolean) => ko ? "준소버린 신뢰 붕괴"   : "Quasi-Sovereign Trust Collapse",
    title: (ko: boolean) => ko
      ? "강원도 보증 거부 (2022)"
      : "Gangwon Province Guarantee Refusal (2022)",
    tagline: (ko: boolean) => ko
      ? "2,050억원 ABCP 보증 거부 → 한국 단기채권 시장 전체 신뢰 위기"
      : "₩205B ABCP guarantee refusal → trust crisis across Korea's entire short-term bond market",
    lesson: (ko: boolean) => ko
      ? "지자체 보증 = 준소버린이라는 암묵적 가정이 얼마나 위험한지 보여준다. 신용보강의 실질적 이행 가능성을 법적으로 검토해야 한다."
      : "Demonstrates how dangerous the implicit assumption that local government guarantee = quasi-sovereign credit can be. Legal enforceability of credit enhancement must be verified.",
    color: "border-red-200 dark:border-red-700 bg-red-50/60 dark:bg-red-900/20",
    labelColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  },
  {
    slug: "korea-legoland-crisis",
    emoji: "🏦",
    tier: (ko: boolean) => ko ? "정책 대응"             : "Policy Response",
    title: (ko: boolean) => ko
      ? "채안펀드 50조원 가동 (2022–2023)"
      : "₩50T Bond Stabilization Fund (2022–2023)",
    tagline: (ko: boolean) => ko
      ? "금융위원회·은행권·보험권 공동 채안펀드로 AA-급 이상 회사채·CP 시장 안정화"
      : "Joint Financial Commission-bank-insurer stabilization fund for AA- and above corporate bonds and CP",
    lesson: (ko: boolean) => ko
      ? "채권시장 위기는 중앙은행 RP 매입 + 시장 직접 개입 펀드의 투-트랙 대응이 필요하다. 선제적 규모 발표가 시장 심리 안정에 결정적이다."
      : "Bond market crises require a two-track response: central bank RP purchases plus direct market intervention funds. Proactive announcement of fund scale is decisive for market sentiment stabilization.",
    color: "border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20",
    labelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "ABCP가 일반 기업어음(CP)과 다른 점은?"
      : "How does ABCP differ from regular commercial paper?",
    a: (ko: boolean) => ko
      ? "ABCP는 특정 자산(부동산 PF 대출 등)을 담보로 발행되고 만기 1년 이내의 단기 어음이다. 일반 CP는 기업 신용으로만 발행되지만, ABCP는 담보 자산의 현금흐름이 상환 재원이 된다. 신용보강이 붙으면 ABCP는 발행사 자체 신용보다 높은 등급을 받을 수 있다."
      : "ABCP is short-term paper (under 1 year) backed by specific assets (real estate PF loans, etc.). Regular CP relies solely on corporate credit, but ABCP's repayment comes from collateral asset cash flows. With credit enhancement, ABCP can receive a higher rating than the issuer's own credit.",
  },
  {
    q: (ko: boolean) => ko
      ? "강원도는 왜 보증 이행을 거부했나?"
      : "Why did Gangwon Province refuse to honor the guarantee?",
    a: (ko: boolean) => ko
      ? "강원도는 GJC(강원중도개발공사)가 별도 법인이므로 도가 직접 책임질 수 없다는 입장을 취했다. 법적 논리로는 틀리지 않을 수 있지만, 시장에서 '지자체 보증'이 갖는 신용 의미를 완전히 무시한 결정이었다. 이후 법적 공방이 이어졌다."
      : "Gangwon Province argued that since GJC (Gangwon Jungdo Development Corporation) was a separate legal entity, the province couldn't be directly responsible. Legally arguable, but it completely disregarded the credit meaning that 'local government guarantee' carried in the market. Legal disputes followed.",
  },
  {
    q: (ko: boolean) => ko
      ? "채안펀드가 모든 채권을 살 수 있나?"
      : "Can the Bond Stabilization Fund buy all bonds?",
    a: (ko: boolean) => ko
      ? "아니다. 채안펀드는 통상 AA- 이상 등급의 회사채와 우량 CP를 대상으로 한다. BBB급이나 그 이하 채권은 매입 대상이 아니다. 이는 채안펀드가 시장 안정화 목적이지 부실 채권 인수 목적이 아니기 때문이다."
      : "No. The fund typically targets AA- and above rated corporate bonds and quality CP. BBB and below are not eligible. This is because the fund's purpose is market stabilization, not absorption of distressed bonds.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 PF 시장은 레고랜드 이후 어떻게 변했나?"
      : "How did Korea's PF market change after Legoland?",
    a: (ko: boolean) => ko
      ? "금융당국이 PF 구조화 규제를 강화하고 증권사 신용보강 한도를 제한했다. 사업성이 낮은 PF 프로젝트에 대한 구조조정 압력도 커졌다. 2023–2024년 건설·부동산 경기 침체와 맞물려 PF 부실 리스크가 한국 금융시장의 주요 모니터링 지표가 됐다."
      : "Regulators tightened PF structuring rules and limited securities firm credit enhancement exposure. Pressure to restructure low-viability PF projects increased. Combined with the 2023–2024 construction and real estate downturn, PF insolvency risk became a key monitoring indicator for Korea's financial markets.",
  },
  {
    q: (ko: boolean) => ko
      ? "흥국생명 콜옵션 미행사가 왜 그렇게 큰 이슈였나?"
      : "Why was Heungkuk Life's AT1 call-skip such a big issue?",
    a: (ko: boolean) => ko
      ? "신종자본증권(AT1, 코코본드)의 콜옵션 행사는 시장의 암묵적 관행이었다. 법적 의무는 없지만 행사하지 않으면 '신용 이상 신호'로 해석된다. 레고랜드 사태로 이미 불안했던 시장에서 흥국생명의 결정은 금융권 전체의 유동성 불안 우려를 촉발했다."
      : "AT1 (CoCo) call exercise was an implicit market convention — not a legal obligation, but skipping it signals 'credit distress.' In a market already anxious from the Legoland crisis, Heungkuk Life's decision triggered broad concerns about liquidity across the financial sector.",
  },
];

// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "dcm-overview",              ko: "DCM 개요 ↗",       en: "DCM Overview ↗"      },
  { slug: "structured-abs",            ko: "ABS 구조 ↗",       en: "ABS Structure ↗"     },
  { slug: "syndicated-loan-overview",  ko: "신디케이트론 ↗",   en: "Syndicated Loans ↗"  },
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

function PfChainViz({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "한국 PF·ABCP 구조 — 5단계 연결 고리" : "Korea PF·ABCP Structure — 5-Link Chain"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        {/* Desktop: horizontal */}
        <div className="hidden sm:flex items-start gap-0">
          {PF_CHAIN.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < PF_CHAIN.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.09, ease: EASE }}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg ${step.color} shadow-sm mb-3`}
              >
                {step.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.09 + 0.15, ease: EASE }}
                className="text-center px-1"
              >
                <p className="text-[10px] font-black text-teal-600 dark:text-teal-400 mb-0.5">{step.step}</p>
                <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200 mb-1">{ko ? step.ko : step.en}</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">{step.desc(ko)}</p>
              </motion.div>
            </div>
          ))}
        </div>
        {/* Mobile: vertical */}
        <div className="sm:hidden space-y-0">
          {PF_CHAIN.map((step, i) => (
            <div key={i} className="flex gap-3 items-start relative">
              {i < PF_CHAIN.length - 1 && (
                <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
              )}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${step.color} shadow-sm flex-shrink-0 z-10`}>
                {step.icon}
              </div>
              <div className="pb-5">
                <p className="text-[10px] font-black text-teal-600 dark:text-teal-400">{step.step}</p>
                <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{ko ? step.ko : step.en}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-teal-50 dark:bg-teal-900/20 px-5 py-3 border-t border-teal-100 dark:border-teal-800">
        <p className="text-[12px] text-teal-700 dark:text-teal-300 text-center leading-relaxed">
          {ko
            ? "신용보강이 끊어지면 이 사슬 전체가 역방향으로 붕괴한다. 레고랜드는 단계 02에서 사슬이 끊긴 사례다."
            : "When credit enhancement breaks, the entire chain collapses in reverse. Legoland is a case of the chain snapping at step 02."}
        </p>
      </div>
    </motion.div>
  );
}

function CrisisTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "레고랜드 사태 타임라인" : "Legoland Crisis Timeline"}
        </p>
      </div>
      <div className="p-5 sm:p-6 space-y-0">
        {TIMELINE_EVENTS.map((event, i) => (
          <div key={i} className="flex gap-3 items-start relative">
            {i < TIMELINE_EVENTS.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-700 shadow-sm flex-shrink-0 z-10"
            >
              <span>{event.icon}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.1, ease: EASE }}
              className="pb-5"
            >
              <p className={`text-[10px] font-black mb-0.5 ${event.color}`}>{event.date}</p>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">
                {ko ? event.ko : event.en}
              </p>
            </motion.div>
          </div>
        ))}
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
export default function LegolandCrisisClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";
  const nav = getMarket101Nav("korea-legoland-crisis");

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
                  ? "https://dealstory.io/market-101/korea-legoland-crisis"
                  : "https://dealstory.io/en/market-101/korea-legoland-crisis",
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
              <span className="text-gray-600 dark:text-gray-300">{ko ? "레고랜드 사태" : "Legoland Crisis"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
              {ko ? "DCM — 한국 채권시장 사건" : "DCM — Korea Bond Market Event"}
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
                href="/market-101/korea-legoland-crisis"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/korea-legoland-crisis"
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

          {/* Ch.1 강원도는 어떻게 채권시장을 마비시켰나 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "강원도는 어떻게 채권시장을 마비시켰나"
                  : "How Gangwon Province Froze the Bond Market"}
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

            <CrisisTimeline ko={ko} />
          </motion.section>

          {/* Ch.2 ABCP와 PF 구조 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "ABCP와 PF 구조 — 왜 이렇게 연결됐나" : "ABCP and PF Structure — Why Everything Was Connected"}
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

            <PfChainViz ko={ko} />
          </motion.section>

          {/* Ch.3 파급과 정책 대응 */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "파급과 정책 대응 — 50조원의 방파제" : "Contagion and Policy Response — The ₩50 Trillion Firewall"}
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
                ? "두 케이스가 보여주는 것: 신뢰 붕괴와 정책 대응의 속도가 시장 안정의 결정 변수다."
                : "What the two cases demonstrate: the speed of trust collapse versus policy response is the decisive variable for market stabilization."}
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
