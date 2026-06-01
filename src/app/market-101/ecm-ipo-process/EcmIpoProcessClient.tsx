"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
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
const ACCENT = "#3182f6"; // ECM blue
const accent = ACCENT;
const THIS_CH = "ecm-ipo-process";
const thisCh = 4;

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"        : "ECM Overview"    },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"     : "Ch.1 Issuers"    },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"     : "Ch.2 Investors"  },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션" : "Ch.3 Valuation"  },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"   : "Ch.4 Process"    },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"     : "Ch.5 Book-Build" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO" : "Ch.6 Post-IPO"   },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"   : "Ch.7 Follow-on"  },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"   : "Ch.8 Convertible"},
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"   : "Ch.9 Intl"       },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC"      : "Ch.10 SPAC"      },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",      en: "30-Second Summary" },
  { id: "ch2", ko: "18개월 타임라인", en: "18M Timeline"      },
  { id: "ch3", ko: "S-1 해부학",     en: "S-1 Anatomy"       },
  { id: "ch4", ko: "Quiet Period",   en: "Quiet Period"       },
  { id: "ch5", ko: "글로벌 로드쇼",  en: "Global Roadshow"   },
  { id: "ch6", ko: "Pricing Night",  en: "Pricing Night"      },
  { id: "ch7", ko: "Day One",        en: "Day One"            },
];

// ── Stats ──────────────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "12~18개월",
    valueEn: "12-18 months",
    label: (ko: boolean) => ko ? "전체 프로세스" : "Full Process",
    sub: (ko: boolean) => ko ? "Bake-off → 상장" : "Bake-off to Listing",
  },
  {
    value: "50~80회",
    valueEn: "50-80 meetings",
    label: (ko: boolean) => ko ? "로드쇼 미팅" : "Roadshow Meetings",
    sub: (ko: boolean) => ko ? "2주, 전 세계 투자자" : "2 weeks, global investors",
  },
  {
    value: "180일",
    valueEn: "180 days",
    label: (ko: boolean) => ko ? "락업 기간" : "Lock-up Period",
    sub: (ko: boolean) => ko ? "내부자 주식 매도 제한" : "Insider selling restriction",
  },
  {
    value: "+15~20%",
    valueEn: "+15-20%",
    label: (ko: boolean) => ko ? "평균 첫날 수익률" : "Avg Day-One Return",
    sub: (ko: boolean) => ko ? "역사적 IPO 팝 중간값" : "Historical IPO pop median",
  },
];

// ── Timeline Steps ─────────────────────────────────────────────────────────────
const TIMELINE_STEPS = [
  {
    num: "01", icon: "🏆",
    phase: (ko: boolean) => ko ? "Bake-off" : "Bake-off",
    duration: (ko: boolean) => ko ? "2-4주" : "2-4 wks",
    desc: (ko: boolean) => ko ? "IB 피치·GC 선정" : "Bank pitch, GC selection",
  },
  {
    num: "02", icon: "🔍",
    phase: (ko: boolean) => ko ? "IPO 준비" : "IPO Prep",
    duration: (ko: boolean) => ko ? "2-3개월" : "2-3 mo",
    desc: (ko: boolean) => ko ? "법적·재무·운영 실사" : "Legal, financial, ops DD",
  },
  {
    num: "03", icon: "📄",
    phase: (ko: boolean) => ko ? "S-1 작성" : "S-1 Draft",
    duration: (ko: boolean) => ko ? "6-8주" : "6-8 wks",
    desc: (ko: boolean) => ko ? "투자설명서 초안 작성" : "Prospectus drafting",
  },
  {
    num: "04", icon: "📮",
    phase: (ko: boolean) => ko ? "SEC 제출" : "SEC Filing",
    duration: (ko: boolean) => ko ? "D-day" : "D-day",
    desc: (ko: boolean) => ko ? "S-1 최초 제출" : "Initial S-1 submission",
  },
  {
    num: "05", icon: "📝",
    phase: (ko: boolean) => ko ? "Comment Letter" : "Comment Letter",
    duration: (ko: boolean) => ko ? "30-60일" : "30-60 days",
    desc: (ko: boolean) => ko ? "SEC 질문 대응 2-4라운드" : "SEC Q&A, 2-4 rounds",
  },
  {
    num: "06", icon: "✈️",
    phase: (ko: boolean) => ko ? "로드쇼" : "Roadshow",
    duration: (ko: boolean) => ko ? "2주" : "2 wks",
    desc: (ko: boolean) => ko ? "글로벌 투자자 미팅" : "Global investor meetings",
  },
  {
    num: "07", icon: "🌙",
    phase: (ko: boolean) => ko ? "Pricing Night" : "Pricing Night",
    duration: (ko: boolean) => ko ? "자정" : "Midnight",
    desc: (ko: boolean) => ko ? "공모가·배분 최종 확정" : "Final price and allocation",
  },
  {
    num: "08", icon: "🔔",
    phase: (ko: boolean) => ko ? "Day One" : "Day One",
    duration: (ko: boolean) => ko ? "D+1" : "D+1",
    desc: (ko: boolean) => ko ? "거래소 상장·거래 개시" : "Exchange listing, trading",
  },
];

// ── S-1 Sections ───────────────────────────────────────────────────────────────
const S1_SECTIONS = [
  {
    section: "Prospectus Summary",
    icon: "📋",
    color: "border-blue-200 dark:border-blue-700",
    headerBg: "bg-blue-50 dark:bg-blue-900/20",
    desc: (ko: boolean) => ko
      ? "S-1의 첫 섹션. 회사 개요, 공모 구조, 사용 목적 요약. 대부분의 투자자가 가장 먼저 읽는다."
      : "First section of the S-1. Company overview, offering structure, use of proceeds summary. Most investors read this first.",
  },
  {
    section: "Risk Factors",
    icon: "⚠️",
    color: "border-red-200 dark:border-red-700",
    headerBg: "bg-red-50 dark:bg-red-900/20",
    desc: (ko: boolean) => ko
      ? "'회사가 망할 수 있는 모든 이유' 열거. 법적 고백서. 투자자 소송 방어가 목적이므로 50-100개 리스크를 나열한다."
      : "Lists every reason the company could fail. Legal confession. Purpose is investor lawsuit defense -- often 50-100 risk items.",
  },
  {
    section: "Use of Proceeds",
    icon: "💰",
    color: "border-green-200 dark:border-green-700",
    headerBg: "bg-green-50 dark:bg-green-900/20",
    desc: (ko: boolean) => ko
      ? "공모 대금 사용 계획. '일반 운전 자금'만 쓰면 투자자 반감. 구체적 성장 투자 계획이 필요하다."
      : "Plan for using IPO proceeds. General working capital alone triggers investor skepticism. Specific growth investment plans are needed.",
  },
  {
    section: "MD&A",
    icon: "📈",
    color: "border-violet-200 dark:border-violet-700",
    headerBg: "bg-violet-50 dark:bg-violet-900/20",
    desc: (ko: boolean) => ko
      ? "경영진의 재무 결과 분석. SEC는 구체적이고 수치에 근거한 서술 요구. '시장 선도자' 등 마케팅 문구는 삭제된다."
      : "Management's Discussion and Analysis of financial results. SEC requires specific, data-driven language. Marketing phrases like 'market leader' get redlined.",
  },
  {
    section: "Business Section",
    icon: "🏢",
    color: "border-teal-200 dark:border-teal-700",
    headerBg: "bg-teal-50 dark:bg-teal-900/20",
    desc: (ko: boolean) => ko
      ? "비즈니스 모델, 제품, 경쟁 환경, 시장 기회 서술. SEC는 근거 없는 시장 점유율 주장에 Comment Letter를 보낸다."
      : "Business model, products, competitive landscape, market opportunity. SEC sends Comment Letters challenging unsubstantiated market share claims.",
  },
  {
    section: "Financial Statements",
    icon: "🧾",
    color: "border-emerald-200 dark:border-emerald-700",
    headerBg: "bg-emerald-50 dark:bg-emerald-900/20",
    desc: (ko: boolean) => ko
      ? "3년치 감사 재무제표 + 중간 기간. 모든 회계 정책 공개 필수. 비표준 지표(Non-GAAP)는 별도 조정표 요구."
      : "3 years of audited financials plus interim period. Full accounting policy disclosure required. Non-GAAP metrics need reconciliation tables.",
  },
  {
    section: "Management",
    icon: "👔",
    color: "border-amber-200 dark:border-amber-700",
    headerBg: "bg-amber-50 dark:bg-amber-900/20",
    desc: (ko: boolean) => ko
      ? "경영진 이력, 보수, 스톡옵션 완전 공개. 범죄 이력·소송 이력도 공개. 투자자는 창업자 이탈 리스크를 여기서 확인한다."
      : "Executive bios, compensation, stock options -- fully disclosed. Criminal/litigation history included. Investors assess founder departure risk here.",
  },
  {
    section: "Principal Stockholders",
    icon: "📊",
    color: "border-indigo-200 dark:border-indigo-700",
    headerBg: "bg-indigo-50 dark:bg-indigo-900/20",
    desc: (ko: boolean) => ko
      ? "5% 이상 주주 목록과 지분율. 벤처캐피탈 지분 과다 시 투자자 이탈 우려. 이중 주식 구조(Dual-Class)도 여기서 공개."
      : "List of 5%+ shareholders and ownership stakes. Excessive VC ownership raises investor exit concerns. Dual-class share structures disclosed here.",
  },
];

// ── Roadshow City Data ─────────────────────────────────────────────────────────
const ROADSHOW_DATA = [
  { city: "NYC",       meetings: 15 },
  { city: "London",    meetings: 12 },
  { city: "SF",        meetings: 10 },
  { city: "Boston",    meetings: 8  },
  { city: "HK",        meetings: 8  },
  { city: "Frankfurt", meetings: 7  },
  { city: "Edinburgh", meetings: 5  },
  { city: "Singapore", meetings: 5  },
];

// ── Day One Return Spectrum ────────────────────────────────────────────────────
const DAY_ONE_RETURNS = [
  { label: (ko: boolean) => ko ? "폭락 (-20% 이하)" : "Crash (under -20%)",    pct: 8,  color: "#ef4444" },
  { label: (ko: boolean) => ko ? "하락 (-20~0%)"    : "Down (-20% to 0%)",     pct: 17, color: "#f97316" },
  { label: (ko: boolean) => ko ? "소폭 상승 (0~10%)" : "Flat Pop (0-10%)",     pct: 25, color: "#eab308" },
  { label: (ko: boolean) => ko ? "일반 팝 (10~30%)" : "Normal Pop (10-30%)",   pct: 32, color: "#22c55e" },
  { label: (ko: boolean) => ko ? "대형 팝 (30% 초과)" : "Big Pop (over 30%)", pct: 18, color: "#3182f6" },
];


// ── Related Terms ──────────────────────────────────────────────────────────────
const RELATED_TERMS = [
  { slug: "ecm-ipo-valuation",    ko: "Ch.3 밸류에이션",  en: "Ch.3 Valuation"    },
  { slug: "ecm-ipo-bookbuilding", ko: "Ch.5 북빌딩",      en: "Ch.5 Book-Building" },
  { slug: "ecm-ipo-investors",    ko: "Ch.2 투자자",      en: "Ch.2 Investors"    },
  { slug: "ecm-overview",         ko: "ECM 개요",         en: "ECM Overview"      },
];

// ── FAQ Data ───────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "Direct Listing은 IPO와 어떻게 다른가요?"
      : "How does a Direct Listing differ from an IPO?",
    a: (ko: boolean) => ko
      ? "IPO는 새 주식을 발행해 자금을 조달하고 IB가 가격을 확정하는 방식인 반면, Direct Listing은 신주 발행 없이 기존 주주가 거래소에서 직접 주식을 매도한다. Spotify(2018), Coinbase(2021)가 대표적이다. 장점: IB 수수료 절감, 시장 수요가 자연스럽게 가격을 결정. 단점: 자금 조달 불가, 락업 없어 초기 변동성 큼."
      : "An IPO issues new shares to raise capital with banks setting the price, while a Direct Listing has existing shareholders sell directly on the exchange without issuing new shares. Examples: Spotify (2018), Coinbase (2021). Pros: no banking fees, market demand naturally determines price. Cons: no capital raised, no lock-up means higher early volatility.",
  },
  {
    q: (ko: boolean) => ko
      ? "SEC Comment Letter는 얼마나 까다롭나요?"
      : "How demanding is the SEC Comment Letter process?",
    a: (ko: boolean) => ko
      ? "평균 2-4라운드, 질문 수는 첫 Comment Letter에서 30-60개가 일반적이다. SEC Examiner는 재무제표 회계처리, 수익 인식, 비표준 지표(Non-GAAP) 사용, Risk Factors 구체성 등에 집중한다. 각 질문에 변호사·뱅커·회계법인이 공동으로 답변서를 작성하며 S-1/A로 수정 제출한다. Airbnb는 2020년 IPO 시 120개 이상의 질문을 받았다."
      : "Typically 2-4 rounds, with 30-60 questions in the first Comment Letter. SEC Examiners focus on financial statement accounting, revenue recognition, Non-GAAP metric usage, and Risk Factor specificity. Lawyers, bankers, and accountants jointly draft responses, filing S-1/A amendments. Airbnb received over 120 comments during its 2020 IPO process.",
  },
  {
    q: (ko: boolean) => ko
      ? "IPO를 철회하는 경우는 어떤 상황인가요?"
      : "When do companies withdraw an IPO?",
    a: (ko: boolean) => ko
      ? "IPO 철회는 시장 급락, 로드쇼 수요 부족(오더북이 1x 미달), 규제 리스크 부상, 부정적 언론 보도로 인한 투자자 이탈 시 발생한다. WeWork(2019)는 S-1 공개 후 거버넌스 논란으로 Valuation이 470억 달러에서 100억 달러 이하로 급락하며 철회했다. 철회 후 재도전은 시장 환경이 개선되면 가능하다."
      : "IPO withdrawals occur due to market crashes, insufficient roadshow demand (order book below 1x coverage), emerging regulatory risks, or investor departure from negative press. WeWork (2019) withdrew after its S-1 triggered governance controversy, crashing the valuation from $47B to under $10B. Re-attempts are possible once market conditions improve.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 vs 미국 상장, 어떻게 선택하나요?"
      : "How do companies choose between Korean vs. US listing?",
    a: (ko: boolean) => ko
      ? "미국 상장(NYSE/Nasdaq)은 글로벌 투자자 기반, 높은 유동성, 기술주 Valuation 프리미엄이 장점이다. 반면 한국 상장(KRX/KOSDAQ)은 국내 인지도가 높은 소비재·바이오 기업에 유리하고, 외국인 투자자 비중이 높은 대형주는 밸류에이션 격차가 줄어들고 있다. 글로벌 사업 비중, 주요 경쟁사 상장지, 투자자 기반이 결정 요인이다."
      : "US listing (NYSE/Nasdaq) offers a global investor base, high liquidity, and tech valuation premiums. Korean listing (KRX/KOSDAQ) suits domestic consumer/bio companies with high local brand recognition; the valuation gap is narrowing for large-caps with high foreign ownership. Decision factors: global revenue mix, competitor listing venues, and investor base composition.",
  },
  {
    q: (ko: boolean) => ko
      ? "개인 투자자는 IPO에 어떻게 참여하나요?"
      : "How can retail investors participate in an IPO?",
    a: (ko: boolean) => ko
      ? "미국 IPO에서 개인 투자자는 전통적으로 배분의 5-10%만 받았다. 최근 Robinhood의 IPO Access, Fidelity의 공모주 프로그램으로 소액 참여가 가능해졌다. 한국은 균등배분(증거금 낮아도 동등 기회) + 비례배분 병행 방식으로 개인 참여율이 높다. 핵심: 공모가 배분을 받더라도 첫날 팝 이후 매도 타이밍이 수익률을 결정한다."
      : "In US IPOs, retail investors traditionally received only 5-10% of allocations. Recently, Robinhood IPO Access and Fidelity's IPO program have enabled small-scale participation. Korea uses equal-distribution (same chance regardless of deposit size) plus proportional allocation, resulting in high retail participation rates. Key point: even with an IPO allocation, the sell timing after Day One pop determines returns.",
  },
];

// ── SeriesNav Component ────────────────────────────────────────────────────────
function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <div className="flex gap-1 py-2 min-w-max">
          {ECM_SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
                s.slug === THIS_CH
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
              style={s.slug === THIS_CH ? { background: ACCENT } : {}}
            >
              {s.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── ChapterNav Component ───────────────────────────────────────────────────────
function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={fadeUp(0.05)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="flex flex-wrap gap-2"
    >
      {CHAPTERS.map((ch) => (
        <a
          key={ch.id}
          href={`#${ch.id}`}
          className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {ko ? ch.ko : ch.en}
        </a>
      ))}
    </motion.div>
  );
}


// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmIpoProcessClient({
  concept,
  lang,
}: {
  concept: MarketConcept;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";

  const thisCh = 4;
  const prevCh = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const nextCh = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: ko
      ? "IPO 프로세스 완전 해부: Bake-off부터 프라이싱 나이트까지 (ECM Ch.4)"
      : "IPO Process Decoded: Bake-off to Pricing Night (ECM Ch.4)",
    description: ko ? concept.excerpt : concept.excerptEn,
    author: { "@type": "Organization", name: "Deal Story" },
    publisher: { "@type": "Organization", name: "Deal Story" },
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q(ko),
      acceptedAnswer: { "@type": "Answer", text: faq.a(ko) },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SeriesNav lang={lang} />

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 pt-14 pb-10">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp(0)} className="flex items-center gap-2 mb-4">
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: ACCENT }}
              >
                {ko ? "ECM Ch.4 -- IPO 프로세스" : "ECM Ch.4 -- IPO Process"}
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko
                  ? `약 ${concept.readingMinutes}분 읽기`
                  : `~${concept.readingMinutes} min read`}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-4"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mb-6"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-2 mb-8">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.2)}>
              <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
            
              <LikeButton slug={concept.slug} lang={lang} /></motion.div>
          </motion.div>
        </section>

        {/* Chapter quick-nav */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="flex flex-wrap gap-2"
          >
            {CHAPTERS.map((ch) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {ko ? ch.ko : ch.en}
              </a>
            ))}
          </motion.div>
        </section>

        {/* Section 1: 30초 요약 */}
        <section id="ch1" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "1. 30초 요약" : "1. 30-Second Summary"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "IPO는 하루아침에 일어나지 않는다. Bake-off부터 상장 첫날까지 평균 12-18개월, 8단계로 이루어지는 마라톤 프로세스다."
                : "IPOs don't happen overnight. From Bake-off to Day One, it's a marathon process of 8 stages averaging 12-18 months."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-extrabold mb-1" style={{ color: ACCENT }}>
                  {ko ? s.value : s.valueEn}
                </div>
                <div className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 mb-0.5">
                  {s.label(ko)}
                </div>
                <div className="text-[11px] text-gray-400 dark:text-gray-500">{s.sub(ko)}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2: 18개월 타임라인 */}
        <section id="ch2" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "2. 18개월 타임라인 -- 8단계 전체 흐름" : "2. 18-Month Timeline -- All 8 Stages"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "올림픽 유치 과정처럼, IPO도 '선발 → 준비 → 본선 → 결선'의 구조를 따른다. 각 단계의 소요 기간과 핵심 작업을 파악하라."
                : "Like an Olympic bid process, IPOs follow a selection, preparation, qualification, and final structure. Know each stage's duration and key tasks."}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-8 rounded-2xl border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-6 py-5"
          >
            <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">
              {ko ? "🏅 올림픽 유치와 IPO의 유사점" : "🏅 IPO as an Olympic Bid"}
            </h4>
            <p className="text-[13px] text-blue-800 dark:text-blue-200 leading-relaxed">
              {ko
                ? "올림픽 유치는 '도시 선정 → 준비위 구성 → 시설 건설 → 개막식'이다. IPO는 'Bake-off(GC 선정) → 실사+S-1(준비) → 로드쇼(마케팅) → Pricing Night(결선)'이다. 둘 다 수년간의 준비가 단 하나의 결정적 순간으로 귀결된다."
                : "An Olympic bid goes: city selection, organizing committee, venue construction, opening ceremony. IPO: Bake-off (GC selection), DD+S-1 (prep), Roadshow (marketing), Pricing Night (finale). Both compress years of preparation into one decisive moment."}
            </p>
          </motion.div>

          <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/60">
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 w-10">#</th>
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    {ko ? "단계" : "Stage"}
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    {ko ? "기간" : "Duration"}
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    {ko ? "핵심 작업" : "Key Task"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_STEPS.map((step, i) => (
                  <motion.tr
                    key={i}
                    variants={fadeUp(i * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={VP}
                    className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-blue-50/40 dark:hover:bg-blue-900/10 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-[11px] font-black" style={{ color: ACCENT }}>
                      {step.num}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="mr-2">{step.icon}</span>
                      <span className="text-[13px] font-semibold text-gray-900 dark:text-gray-100">
                        {step.phase(ko)}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {step.duration(ko)}
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-gray-600 dark:text-gray-300">
                      {step.desc(ko)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-3">
            {TIMELINE_STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.05)}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                className="flex items-start gap-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0 border-2 bg-white dark:bg-gray-950"
                  style={{ borderColor: ACCENT }}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="text-[10px] font-black" style={{ color: ACCENT }}>{step.num}</span>
                    <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{step.phase(ko)}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                      {step.duration(ko)}
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400">{step.desc(ko)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: S-1 해부학 */}
        <section id="ch3" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "3. S-1 해부학 -- 법적 고백서의 구조" : "3. S-1 Anatomy -- Structure of the Legal Confession"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "S-1은 단순한 투자설명서가 아니다. 회사의 모든 비밀을 공개해야 하는 법적 문서다. 8개 핵심 섹션의 역할을 이해해야 딜을 주도할 수 있다."
                : "The S-1 is not just a prospectus. It's a legal document that forces full disclosure of every company secret. Understanding the 8 key sections is essential to leading a deal."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          >
            {S1_SECTIONS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.06)}
                className={`rounded-2xl border ${item.color} overflow-hidden shadow-sm`}
              >
                <div className={`${item.headerBg} px-5 py-3.5 flex items-center gap-3`}>
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{item.section}</h4>
                </div>
                <div className="px-5 py-4 bg-white dark:bg-gray-900">
                  <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc(ko)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl border border-indigo-200 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20 overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 border-b border-indigo-100 dark:border-indigo-800 flex items-center gap-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200">
                {ko ? "실무 포인트" : "Practice Box"}
              </span>
              <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">
                {ko ? "SEC Comment Letter 대응 전략" : "How to Handle an SEC Comment Letter"}
              </span>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-2.5">
                {(ko
                  ? [
                      "각 질문에 번호를 매겨 한 줄도 빠짐없이 답변한다 -- SEC는 미답변 항목을 재요청한다.",
                      "회계 처리 근거는 ASC(미국 회계기준) 조항을 인용해 정당화한다.",
                      "Non-GAAP 지표는 GAAP 지표와의 조정표(reconciliation table)를 반드시 첨부한다.",
                      "Risk Factor에 '모호한 언어'가 있으면 구체적 수치와 시나리오로 대체한다.",
                      "Comment Letter 대응 기간은 딜 타임라인에 반드시 버퍼로 포함시킨다.",
                    ]
                  : [
                      "Number each response and answer every question -- the SEC will re-request unanswered items.",
                      "Justify accounting treatments by citing specific ASC (US GAAP) provisions.",
                      "Non-GAAP metrics must include a reconciliation table to GAAP metrics.",
                      "Replace vague language in Risk Factors with specific figures and scenarios.",
                      "Always build the Comment Letter response period into the deal timeline as a buffer.",
                    ]
                ).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[12px] text-indigo-800 dark:text-indigo-200 leading-relaxed"
                  >
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>
                      {i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Quiet Period */}
        <section id="ch4" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "4. Quiet Period -- 침묵의 규칙" : "4. Quiet Period -- The Rule of Silence"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "공모 전후 25일간, 회사 임원은 미래 전망과 실적 예측에 대해 공개 발언을 할 수 없다. 위반 시 딜이 취소된다."
                : "For 25 days around the offering, company executives cannot make public statements about future prospects or earnings forecasts. Violations can cancel the deal."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="space-y-4 mb-8"
          >
            {[
              {
                icon: "🚫",
                title: (k: boolean) => k ? "금지 사항" : "Prohibited",
                color: "border-red-200 dark:border-red-700",
                headerBg: "bg-red-50 dark:bg-red-900/20",
                items: (k: boolean) =>
                  k
                    ? ["미래 실적·수익 전망 발언", "사업 계획·전략 예측 공개", "미디어 인터뷰에서 성장 가이던스 제공", "SNS·블로그에 회사 전망 게시"]
                    : ["Statements about future earnings or revenue projections", "Public disclosure of business plans or strategy forecasts", "Providing growth guidance in media interviews", "Posting company outlook on social media or blogs"],
              },
              {
                icon: "✅",
                title: (k: boolean) => k ? "허용 사항" : "Permitted",
                color: "border-green-200 dark:border-green-700",
                headerBg: "bg-green-50 dark:bg-green-900/20",
                items: (k: boolean) =>
                  k
                    ? ["제품 출시·계약 체결 등 일상 사업 발표", "S-1에 이미 공시된 정보 반복", "법적으로 요구된 공시 (규제 제출물)", "일반적인 업계 동향 코멘트 (회사 특정 정보 제외)"]
                    : ["Normal business announcements such as product launches and contract signings", "Repeating information already disclosed in the S-1", "Legally required disclosures and regulatory filings", "General industry trend commentary excluding company-specific information"],
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                className={`rounded-2xl border ${block.color} overflow-hidden shadow-sm`}
              >
                <div className={`${block.headerBg} px-5 py-3.5 flex items-center gap-2`}>
                  <span className="text-lg">{block.icon}</span>
                  <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{block.title(ko)}</h4>
                </div>
                <div className="px-5 py-4 bg-white dark:bg-gray-900">
                  <ul className="space-y-1.5">
                    {block.items(ko).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] text-gray-600 dark:text-gray-300">
                        <span className="text-gray-300 dark:text-gray-600 mt-0.5 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl border border-amber-200 dark:border-amber-700 overflow-hidden shadow-sm"
          >
            <div className="bg-amber-50 dark:bg-amber-900/20 px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">👕</span>
              <div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 block mb-0.5">
                  {ko ? "실제 사례" : "Real Case"}
                </span>
                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  {ko ? "Facebook 2012 IPO -- 후디 사건" : "Facebook 2012 IPO -- The Hoodie Incident"}
                </h4>
              </div>
            </div>
            <div className="px-6 py-5 bg-white dark:bg-gray-900">
              <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                {ko
                  ? "마크 저커버그는 2012년 Facebook IPO 로드쇼에서 후디를 입고 등장해 기관 투자자들의 반감을 샀다. Wedbush Securities 애널리스트는 '후디 차림은 투자자에 대한 무례함'이라고 공개 비판했다."
                  : "Mark Zuckerberg appeared in a hoodie at the Facebook 2012 IPO roadshow, drawing backlash from institutional investors. Wedbush Securities analyst publicly criticized it as a lack of respect for investors."}
              </p>
              <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 rounded-xl px-4 py-3">
                <span className="text-amber-500 text-sm font-bold flex-shrink-0">→</span>
                <p className="text-[12px] text-amber-800 dark:text-amber-200 leading-relaxed">
                  {ko
                    ? "교훈: Quiet Period는 단순히 '말을 하지 마라'가 아니다. 투자자와의 신뢰 형성이 핵심이며, 비언어적 신호(복장, 태도)도 딜의 흥행에 영향을 미친다."
                    : "Lesson: Quiet Period is not just about not speaking. Building investor trust is the core, and non-verbal signals like attire and attitude also affect deal momentum."}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 5: 글로벌 로드쇼 */}
        <section id="ch5" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "5. 글로벌 로드쇼 -- 2주의 마라톤" : "5. Global Roadshow -- The 2-Week Marathon"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "뉴욕, 런던, 보스턴, 홍콩... 하루 6-10개 미팅. 2주 동안 전 세계 기관 투자자를 만나며 오더북을 채운다."
                : "New York, London, Boston, Hong Kong... 6-10 meetings per day. Two weeks of meeting global institutional investors to fill the order book."}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 mb-8 shadow-sm"
          >
            <h4 className="text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-4">
              {ko ? "도시별 평균 투자자 미팅 수" : "Average Investor Meetings by City"}
            </h4>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={ROADSHOW_DATA} margin={{ top: 4, right: 16, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="city" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(v: any) => [v, ko ? "미팅 수" : "Meetings"]}
                />
                <Bar dataKey="meetings" radius={[4, 4, 0, 0]}>
                  {ROADSHOW_DATA.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? ACCENT : "#bfdbfe"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            variants={fadeUp(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl bg-gray-900 dark:bg-gray-800 p-6 mb-8 shadow-sm"
          >
            <h4 className="text-[13px] font-bold text-white mb-4">
              {ko ? "🕐 로드쇼 하루 일정 (샘플)" : "🕐 Roadshow Daily Schedule (Sample)"}
            </h4>
            <div className="space-y-2.5">
              {[
                { time: "7:00 AM",  event: (k: boolean) => k ? "조식 미팅 -- 헤지펀드 1:1" : "Breakfast meeting -- Hedge fund 1:1" },
                { time: "9:00 AM",  event: (k: boolean) => k ? "그룹 발표 -- 대형 펀드 5개 동시" : "Group presentation -- 5 large funds simultaneously" },
                { time: "11:00 AM", event: (k: boolean) => k ? "1:1 미팅 -- 뮤추얼펀드" : "1:1 meeting -- Mutual fund" },
                { time: "1:00 PM",  event: (k: boolean) => k ? "오찬 미팅 -- 연기금" : "Lunch meeting -- Pension fund" },
                { time: "3:00 PM",  event: (k: boolean) => k ? "1:1 미팅 -- 성장주 펀드" : "1:1 meeting -- Growth fund" },
                { time: "5:00 PM",  event: (k: boolean) => k ? "이동 -- 다음 도시 비행" : "Transit -- Flight to next city" },
                { time: ko ? "저녁" : "Evening", event: (k: boolean) => k ? "오더북 업데이트 + 내일 준비" : "Order book update + next day prep" },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[11px] font-bold flex-shrink-0 w-16 text-right" style={{ color: ACCENT }}>
                    {row.time}
                  </span>
                  <div className="flex-1 border-l border-gray-700 pl-4">
                    <p className="text-[12px] text-gray-200 leading-relaxed">{row.event(ko)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 border-b border-blue-100 dark:border-blue-800 flex items-center gap-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200">
                Associate
              </span>
              <span className="text-sm font-bold text-blue-900 dark:text-blue-100">
                {ko ? "로드쇼 기간 Associate의 핵심 역할" : "Associate's Key Roles During Roadshow"}
              </span>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-2.5">
                {(ko
                  ? [
                      "각 미팅 후 투자자 피드백(Q&A 내용, 가격 저항 포인트)을 실시간으로 정리해 오더북 담당자에게 전달",
                      "로드쇼 자료(Roadshow Deck) 마지막 버전 관리 -- 발행사 CFO 코멘트 반영 즉시 업데이트",
                      "미팅 간 이동 시간에 MD에게 다음 투자자 배경 브리핑 (AUM, 스타일, 보유 포트폴리오 요약)",
                      "오더북 현황 스프레드시트 실시간 유지 -- 각 투자자의 주문 수량·가격 범위 추적",
                    ]
                  : [
                      "After each meeting, summarize investor feedback including Q&A content and price resistance points, and relay to the order book manager in real-time",
                      "Manage the latest version of the Roadshow Deck -- update immediately to reflect issuer CFO comments",
                      "Brief the MD on the next investor's background during transit, covering AUM, investment style, and portfolio summary",
                      "Maintain the live order book spreadsheet -- track each investor's order size and price range",
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[12px] text-blue-800 dark:text-blue-200 leading-relaxed">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Section 6: Pricing Night */}
        <section id="ch6" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "6. Pricing Night -- 자정의 협상" : "6. Pricing Night -- The Midnight Negotiation"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "로드쇼가 끝나는 날 밤, 뱅커와 발행사 CFO는 공모가를 두고 협상을 벌인다. 이 한 번의 결정이 수천억 원의 가치를 결정한다."
                : "On the night roadshows end, bankers and the issuer's CFO negotiate the IPO price. This single decision determines the value of hundreds of billions."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {[
              {
                icon: "📚",
                title: (k: boolean) => k ? "오더북 커버리지" : "Order Book Coverage",
                desc: (k: boolean) => k
                  ? "3x 이상이면 상단 프라이싱. 1x 미만이면 철회 검토. 2-3x가 일반적인 '적정 수요'."
                  : "3x+ coverage means price at top. Under 1x triggers withdrawal consideration. 2-3x is typical healthy demand.",
              },
              {
                icon: "💎",
                title: (k: boolean) => k ? "앵커 투자자 품질" : "Anchor Investor Quality",
                desc: (k: boolean) => k
                  ? "블랙록·피델리티 등 장기 보유 성향 기관이 오더북의 핵심. 이들의 가격 저항선이 최종 가격의 상한선이다."
                  : "Long-term holders like BlackRock and Fidelity anchor the order book. Their price resistance sets the effective ceiling.",
              },
              {
                icon: "📊",
                title: (k: boolean) => k ? "유사 기업 비교" : "Peer Comparables",
                desc: (k: boolean) => k
                  ? "최근 상장한 유사 기업의 EV/Revenue, EV/EBITDA 배수 대비 프리미엄/디스카운트를 정당화해야 한다."
                  : "Must justify premium or discount vs. recently listed peers' EV/Revenue and EV/EBITDA multiples.",
              },
              {
                icon: "📉",
                title: (k: boolean) => k ? "시장 환경" : "Market Conditions",
                desc: (k: boolean) => k
                  ? "S&P 500 방향성, VIX(변동성 지수), 섹터 ETF 성과가 마지막 순간까지 가격에 영향을 미친다."
                  : "S&P 500 direction, VIX volatility index, and sector ETF performance affect pricing until the very last moment.",
              },
              {
                icon: "🎯",
                title: (k: boolean) => k ? "발행사의 희망 가격" : "Issuer's Target Price",
                desc: (k: boolean) => k
                  ? "발행사 CFO는 최대 자금 조달을 원하지만, 너무 높은 가격은 첫날 하락으로 이어져 평판에 타격을 준다."
                  : "The issuer's CFO wants maximum proceeds, but too high a price leads to Day-One drops that damage the issuer's reputation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3.5 flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{item.title(ko)}</h4>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc(ko)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl border border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20 overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 border-b border-violet-100 dark:border-violet-800 flex items-center gap-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-800 text-violet-700 dark:text-violet-200">
                MD
              </span>
              <span className="text-sm font-bold text-violet-900 dark:text-violet-100">
                {ko ? "프라이싱 나이트, MD가 하는 3개의 전화" : "Pricing Night: The 3 Calls an MD Makes"}
              </span>
            </div>
            <div className="px-6 py-5">
              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: (k: boolean) => k ? "발행사 CFO 전화" : "Call to Issuer CFO",
                    desc: (k: boolean) => k
                      ? "오더북 현황 공유, 시장 여건 설명, 권고 가격 제시. '우리가 상단에서 프라이싱하면 5% 쿠션이 있다. 하단이면 안전하지만 조달액이 줄어든다.'"
                      : "Share order book status, explain market conditions, present recommended price. Pricing at the top gives 5% cushion; the bottom is safer but reduces proceeds.",
                  },
                  {
                    num: "2",
                    title: (k: boolean) => k ? "핵심 앵커 투자자 전화" : "Call to Key Anchor Investors",
                    desc: (k: boolean) => k
                      ? "최종 가격 확인 및 배분 규모 논의. 앵커가 가격 저항을 표시하면 하향 조정 검토."
                      : "Confirm final price and discuss allocation size. If the anchor signals price resistance, consider a downward adjustment.",
                  },
                  {
                    num: "3",
                    title: (k: boolean) => k ? "공동주관사(Co-manager) 전화" : "Call to Co-managers",
                    desc: (k: boolean) => k
                      ? "각 지역 수요 현황 최종 취합. 신디케이트 전체의 오더북을 통합해 최종 배분 결정."
                      : "Final aggregation of demand by region. Consolidate the syndicate-wide order book for the final allocation decision.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0 mt-0.5"
                      style={{ background: "#7c3aed" }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <h5 className="text-[13px] font-bold text-violet-900 dark:text-violet-100 mb-1">
                        {item.title(ko)}
                      </h5>
                      <p className="text-[12px] text-violet-800 dark:text-violet-200 leading-relaxed">
                        {item.desc(ko)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 7: Day One */}
        <section id="ch7" className="max-w-5xl mx-auto px-4 pb-16 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "7. Day One -- 종소리 이후" : "7. Day One -- After the Bell"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {ko
                ? "상장 첫날 수익률은 '공모가 대비 종가'로 결정된다. 역사적으로 평균 +15-20%의 'IPO 팝'이 발생하지만, 폭락도 드물지 않다."
                : "Day One returns are measured as closing price vs. IPO price. Historically, an average IPO pop of +15-20% occurs -- but crashes are not uncommon."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { icon: "🚀", label: (k: boolean) => k ? "대형 팝 (30%+)" : "Big Pop (30%+)",       example: "Snowflake +112%", color: "#3182f6", desc: (k: boolean) => k ? "수요 초과, 희소성 효과" : "Excess demand, scarcity effect" },
              { icon: "✅", label: (k: boolean) => k ? "일반 팝 (10-30%)" : "Normal Pop (10-30%)", example: "Airbnb +113%",    color: "#22c55e", desc: (k: boolean) => k ? "건강한 시장 반응" : "Healthy market reception" },
              { icon: "😐", label: (k: boolean) => k ? "소폭 등락 (±10%)" : "Flat (within 10%)",  example: "Facebook +0.6%", color: "#eab308", desc: (k: boolean) => k ? "적정 가격 설정" : "Well-priced offering" },
              { icon: "📉", label: (k: boolean) => k ? "하락 (-10% 이하)" : "Down (under -10%)",  example: "Uber -7.6%",     color: "#ef4444", desc: (k: boolean) => k ? "과대 평가 or 시장 악화" : "Overvalued or market downturn" },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-center shadow-sm"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-1">{card.label(ko)}</div>
                <div className="text-[11px] font-semibold mb-1.5" style={{ color: card.color }}>{card.example}</div>
                <div className="text-[11px] text-gray-400 dark:text-gray-500">{card.desc(ko)}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
          >
            <h4 className="text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-4">
              {ko ? "역사적 IPO 첫날 수익률 분포 (%)" : "Historical IPO Day-One Return Distribution (%)"}
            </h4>
            <div className="flex items-end gap-2 h-28">
              {DAY_ONE_RETURNS.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">{bar.pct}%</span>
                  <div
                    className="w-full rounded-t-md"
                    style={{ height: `${(bar.pct / 32) * 80}px`, background: bar.color }}
                  />
                  <span className="text-[9px] text-gray-400 dark:text-gray-500 text-center leading-tight">
                    {bar.label(ko)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Mid ShareButtons */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <ShareButtons title={ko ? concept.title : concept.titleEn} variant="mid" lang={lang} />
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "자주 묻는 질문" : "FAQ"}
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <FaqAccordion
              items={FAQS.map((faq) => ({ q: faq.q(ko), a: faq.a(ko) }))}
              accent={ACCENT}
            />
          </motion.div>
        </section>

        {/* Related Terms */}
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3">
              {ko ? "관련 챕터" : "Related Chapters"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {RELATED_TERMS.map((term) => (
                <Link
                  key={term.slug}
                  href={`${base}/${term.slug}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {ko ? term.ko : term.en} ↗
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Bottom ShareButtons */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <ShareButtons title={ko ? concept.title : concept.titleEn} variant="bottom" lang={lang} />
          
            <LikeButton slug={concept.slug} lang={lang} /></motion.div>
        </section>

        {/* Bottom Navigation */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
            <div className="flex items-center justify-between gap-4">
              {prevCh ? (
                <Link
                  href={`${base}/${prevCh.slug}`}
                  className="group flex items-center gap-3 flex-1 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 transition-colors"
                >
                  <span className="text-gray-400 group-hover:text-blue-500 transition-colors">←</span>
                  <div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">
                      {ko ? "이전 챕터" : "Previous"}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {prevCh.title(ko)}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextCh ? (
                <Link
                  href={`${base}/${nextCh.slug}`}
                  className="group flex items-center gap-3 flex-1 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 transition-colors text-right justify-end"
                >
                  <div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-0.5">
                      {ko ? "다음 챕터" : "Next"}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {nextCh.title(ko)}
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-blue-500 transition-colors">→</span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
