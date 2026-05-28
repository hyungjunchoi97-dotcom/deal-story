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
const ACCENT = "#3182f6";

// ── ECM Products Series Nav ────────────────────────────────────────────────────
const ECM_PRODUCTS_SERIES = [
  { slug: "ecm-warrant-bond",      title: (ko: boolean) => ko ? "BW" : "Bond with Warrant" },
  { slug: "ecm-buyback",           title: (ko: boolean) => ko ? "자사주매입" : "Buyback" },
  { slug: "ecm-dual-class",        title: (ko: boolean) => ko ? "차등의결권" : "Dual Class" },
  { slug: "ecm-tender-offer",      title: (ko: boolean) => ko ? "공개매수" : "Tender Offer" },
  { slug: "ecm-exchangeable-bond", title: (ko: boolean) => ko ? "EB 교환사채" : "Exchangeable Bond" },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",       en: "30-sec Summary"     },
  { id: "ch2", ko: "구조 설계",       en: "Structure Design"   },
  { id: "ch3", ko: "Alphabet 해부",   en: "Alphabet Anatomy"   },
  { id: "ch4", ko: "찬반 논리",       en: "Pro & Con"          },
  { id: "ch5", ko: "선셋 조항",       en: "Sunset Clause"      },
  { id: "ch6", ko: "한국 특례",       en: "Korea Exception"    },
  { id: "ch7", ko: "밸류에이션 영향", en: "Valuation Impact"   },
];

// ── 30초 요약 Stats ────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "10:1",
    label: (ko: boolean) => ko ? "Alphabet 최대 의결권 배율" : "Alphabet max voting ratio",
    sub: (ko: boolean) => ko ? "Class B 주식 1주 = 10표" : "1 Class B share = 10 votes",
  },
  {
    value: "~30%",
    label: (ko: boolean) => ko ? "차등의결권 채택 미국 IPO 비율" : "US IPOs with dual class (2022)",
    sub: (ko: boolean) => ko ? "빅테크 IPO 기준" : "tech IPO subset",
  },
  {
    value: "−7~8%",
    label: (ko: boolean) => ko ? "차등의결권 기업 평균 밸류에이션 디스카운트" : "Avg. valuation discount vs. peers",
    sub: (ko: boolean) => ko ? "학술 연구 종합 중간값" : "median of academic studies",
  },
  {
    value: "2019",
    label: (ko: boolean) => ko ? "한국 차등의결권 특례 도입 연도" : "Korea dual class exception enacted",
    sub: (ko: boolean) => ko ? "벤처기업법 개정 (비상장)" : "Venture Business Act amendment",
  },
];

// ── Alphabet 클래스 구조 ───────────────────────────────────────────────────────
const ALPHABET_CLASSES = [
  {
    cls: "Class A",
    ticker: "GOOGL",
    votes: "1표",
    votesEn: "1 vote",
    holder: (ko: boolean) => ko ? "일반 투자자 (상장)" : "Public investors (listed)",
    note: (ko: boolean) => ko ? "일반 주식시장에서 거래됨" : "Trades on public markets",
    color: "border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20",
    badge: "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300",
  },
  {
    cls: "Class B",
    ticker: "—",
    votes: "10표",
    votesEn: "10 votes",
    holder: (ko: boolean) => ko ? "창업자 (Page·Brin) 보유 — 비상장" : "Founders (Page & Brin) — unlisted",
    note: (ko: boolean) => ko ? "거래 불가, 양도 시 Class A로 자동 전환" : "Non-transferable; converts to A upon transfer",
    color: "border-indigo-400 dark:border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20",
    badge: "bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300",
  },
  {
    cls: "Class C",
    ticker: "GOOG",
    votes: "0표",
    votesEn: "0 votes",
    holder: (ko: boolean) => ko ? "일반 투자자·직원 스톡옵션 (상장)" : "Public investors & employee RSUs (listed)",
    note: (ko: boolean) => ko ? "의결권 없음 — 직원 보상 희석 없이 지배권 유지용" : "No voting rights — preserves founder control without dilution",
    color: "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900",
    badge: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  },
];

// ── 주요 기업 차등의결권 현황 ──────────────────────────────────────────────────
const COMPANY_CASES = [
  {
    company: "Alphabet (Google)",
    flag: "🇺🇸",
    ratio: "10:1",
    founders: (ko: boolean) => ko ? "Page, Brin" : "Page & Brin",
    stake: "~56%",
    stakeLabel: (ko: boolean) => ko ? "의결권 점유" : "voting control",
    note: (ko: boolean) => ko
      ? "Class A(1표)·B(10표)·C(0표) 3클래스. B주식은 양도 불가, 비상장"
      : "3-class: A(1v)·B(10v)·C(0v). Class B non-transferable, unlisted",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    dot: "bg-blue-500",
  },
  {
    company: "Meta (Facebook)",
    flag: "🇺🇸",
    ratio: "10:1",
    founders: (ko: boolean) => ko ? "Zuckerberg" : "Zuckerberg",
    stake: "~61%",
    stakeLabel: (ko: boolean) => ko ? "의결권 점유" : "voting control",
    note: (ko: boolean) => ko
      ? "A(1표)·B(10표). Zuckerberg의 경영 결정을 주주가 사실상 거부 불가"
      : "A(1v)·B(10v). Shareholders effectively cannot override Zuckerberg",
    color: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
    dot: "bg-indigo-500",
  },
  {
    company: "Snap",
    flag: "🇺🇸",
    ratio: "∞",
    founders: (ko: boolean) => ko ? "Spiegel, Murphy" : "Spiegel & Murphy",
    stake: "~95%",
    stakeLabel: (ko: boolean) => ko ? "의결권 점유" : "voting control",
    note: (ko: boolean) => ko
      ? "IPO 시 Class C 발행(의결권 없는 주식)만 상장 — 역사상 최초 무의결권 IPO"
      : "IPO'd with Class C only (zero-vote shares) — first-ever no-vote IPO",
    color: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
    dot: "bg-yellow-500",
  },
  {
    company: "Lyft",
    flag: "🇺🇸",
    ratio: "20:1",
    founders: (ko: boolean) => ko ? "Zimmer, Green" : "Zimmer & Green",
    stake: "~49%",
    stakeLabel: (ko: boolean) => ko ? "의결권 점유" : "voting control",
    note: (ko: boolean) => ko
      ? "20:1 배율 — 상장 후 IPO 쇼크 완충용. 선셋 조항 15년 적용"
      : "20:1 ratio — post-IPO buffer. 15-year sunset clause",
    color: "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800",
    dot: "bg-pink-500",
  },
];

// ── 찬반 논리 ─────────────────────────────────────────────────────────────────
const PRO_CON = [
  {
    side: "pro" as const,
    icon: "✅",
    title: (ko: boolean) => ko ? "찬성 (창업자·기업 관점)" : "Pro (Founder & Company View)",
    points: [
      (ko: boolean) => ko
        ? "단기 실적 압박 없이 장기 비전 실행 가능 — Amazon, Alphabet이 10년 이상 투자 지속"
        : "Execute long-term vision without quarterly pressure — Amazon, Alphabet invested for 10+ years",
      (ko: boolean) => ko
        ? "적대적 M&A 방어 — 창업자 의지 없이는 경영권 이전 불가"
        : "Defense against hostile M&A — no change of control without founder consent",
      (ko: boolean) => ko
        ? "창업자의 독특한 통찰력 보존 — 초기 성공을 이끈 문화와 비전 유지"
        : "Preserves founder insight — maintains culture/vision that drove early success",
      (ko: boolean) => ko
        ? "기관 투자자 압력으로부터 R&D 투자 보호 (Moonshot 프로젝트 등)"
        : "Shields R&D investment from activist pressure (Moonshot projects, etc.)",
    ],
    color: "border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20",
    badgeColor: "bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300",
  },
  {
    side: "con" as const,
    icon: "❌",
    title: (ko: boolean) => ko ? "반대 (기관 투자자·거버넌스 관점)" : "Con (Institutional Investor & Governance View)",
    points: [
      (ko: boolean) => ko
        ? "경영진 책임성 결여 — 이사회와 주주가 창업자를 제어할 수단 없음"
        : "Lack of accountability — board and shareholders have no lever against founders",
      (ko: boolean) => ko
        ? "대리인 비용 증가 — 창업자가 사익을 추구해도 제거 불가 (Theranos식 리스크)"
        : "Agency cost — founders can pursue self-interest with no removal mechanism (Theranos-style risk)",
      (ko: boolean) => ko
        ? "주식 가치 저하 — 경제적 이익 없는 투표권 프리미엄 사라짐"
        : "Value dilution — premium for voting rights disappears for economic-only shareholders",
      (ko: boolean) => ko
        ? "지수 편입 불이익 — S&P 500은 2017년부터 무의결권 신규 편입 배제"
        : "Index exclusion — S&P 500 excluded new zero-vote stocks from 2017",
    ],
    color: "border-rose-200 dark:border-rose-700 bg-rose-50 dark:bg-rose-900/20",
    badgeColor: "bg-rose-100 dark:bg-rose-800 text-rose-700 dark:text-rose-300",
  },
];

// ── 선셋 조항 유형 ─────────────────────────────────────────────────────────────
const SUNSET_TYPES = [
  {
    type: (ko: boolean) => ko ? "시간 기반" : "Time-based",
    example: "Lyft 15년, Airbnb 없음",
    desc: (ko: boolean) => ko
      ? "IPO 후 일정 기간이 지나면 자동으로 단일 의결권 구조로 전환"
      : "Automatically converts to single-class after set period post-IPO",
    icon: "⏱️",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
  },
  {
    type: (ko: boolean) => ko ? "보유 비율 기반" : "Ownership-based",
    example: "< 5~10% 보유 시 전환",
    desc: (ko: boolean) => ko
      ? "창업자의 주식 보유 비율이 특정 임계치 이하로 떨어지면 고의결권 소멸"
      : "High-vote shares expire when founder's economic ownership falls below threshold",
    icon: "📉",
    color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
  },
  {
    type: (ko: boolean) => ko ? "사망·이직 기반" : "Death / departure",
    example: "창업자 사망·사임 시 즉시",
    desc: (ko: boolean) => ko
      ? "창업자가 CEO직을 떠나거나 사망하면 고의결권 주식이 자동 전환"
      : "High-vote shares convert automatically upon founder's death or departure from CEO",
    icon: "🔄",
    color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",
  },
  {
    type: (ko: boolean) => ko ? "선셋 없음" : "No sunset",
    example: "Meta (Zuckerberg)",
    desc: (ko: boolean) => ko
      ? "영구적 차등의결권 — 가장 강한 창업자 보호이자 가장 강한 투자자 반감"
      : "Perpetual dual class — strongest founder protection and strongest investor pushback",
    icon: "♾️",
    color: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700",
  },
];

// ── 한국 특례 비교 ─────────────────────────────────────────────────────────────
const KOREA_EXCEPTION = [
  {
    item: (ko: boolean) => ko ? "근거 법령" : "Legal basis",
    value: (ko: boolean) => ko ? "벤처기업육성에 관한 특별조치법 (2019)" : "Venture Business Promotion Special Act (2019)",
  },
  {
    item: (ko: boolean) => ko ? "적용 대상" : "Eligible companies",
    value: (ko: boolean) => ko ? "비상장 벤처기업 (상장 시 10년 선셋)" : "Unlisted venture firms (10-yr sunset upon listing)",
  },
  {
    item: (ko: boolean) => ko ? "최대 배율" : "Max voting ratio",
    value: (ko: boolean) => ko ? "1:10 (일반주 대비)" : "10:1 vs. ordinary shares",
  },
  {
    item: (ko: boolean) => ko ? "선셋 조항" : "Sunset clause",
    value: (ko: boolean) => ko ? "상장 후 10년 경과 시 자동 전환, 대표이사 이직 즉시 전환" : "Auto-converts 10 yrs post-listing; immediate on CEO departure",
  },
  {
    item: (ko: boolean) => ko ? "주요 쟁점" : "Key debate",
    value: (ko: boolean) => ko ? "코스피 상장 확대 여부 — 2022년 이후 논의 중" : "Expansion to KOSPI-listed firms — debated since 2022",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: (ko: boolean) => ko
      ? "차등의결권 주식의 경제적 가치는 일반 주식과 같은가?"
      : "Do dual class shares have the same economic value as ordinary shares?",
    answer: (ko: boolean) => ko
      ? "배당, 청산 시 지분, 주가 상승 참여 등 경제적 권리는 동일합니다. 다만 의결권(지배권)에서만 차이가 있습니다. Class A와 Class C 주가가 거의 같게 거래되는 이유입니다. 단, 시장이 지배구조 프리미엄을 요구하면 의결권 있는 주식이 5~10% 프리미엄에 거래되기도 합니다."
      : "Economic rights — dividends, liquidation proceeds, price appreciation — are identical. The difference is only in voting (governance) rights. That is why Alphabet's Class A and Class C trade at nearly the same price. However, when markets demand a governance premium, voting shares can trade at a 5–10% premium.",
  },
  {
    question: (ko: boolean) => ko
      ? "S&P 500은 왜 무의결권 주식을 편입에서 제외했는가?"
      : "Why did S&P 500 exclude zero-vote stocks from index inclusion?",
    answer: (ko: boolean) => ko
      ? "S&P는 2017년 기업지배구조위원회(ICGN) 압력을 수용해 '1주 1의결권' 원칙을 충족하지 못하는 신규 종목을 S&P 500에 편입하지 않기로 했습니다. Snap이 2017년 상장 당시 모든 공모주가 0표 Class C였기 때문에 편입 대상에서 제외된 것이 직접적 계기였습니다. 기존 편입 종목(Alphabet 등)은 조부 조항으로 유지됩니다."
      : "In 2017, S&P responded to ICGN governance pressure by deciding not to add new companies that fail the 'one share, one vote' principle to the S&P 500. Snap's 2017 IPO — which only offered Class C (zero-vote) shares — was the direct trigger. Existing constituents (Alphabet, etc.) are grandfathered.",
  },
  {
    question: (ko: boolean) => ko
      ? "한국에서 상장 기업이 차등의결권을 도입할 수 있는가?"
      : "Can listed companies in Korea adopt dual class shares?",
    answer: (ko: boolean) => ko
      ? "현재(2025년)는 불가합니다. 2019년 벤처기업법 개정으로 비상장 벤처기업에 한해 도입이 허용됐으며, 상장 시 10년 선셋 조항이 의무 적용됩니다. 코스피·코스닥 상장 기업에 대한 확대는 2022년 이후 논의 중이지만 아직 입법화되지 않았습니다."
      : "As of 2025, no. The 2019 Venture Business Act amendment permitted dual class only for unlisted venture companies, with a mandatory 10-year sunset upon listing. Expansion to KOSPI/KOSDAQ-listed firms has been debated since 2022 but has not been enacted.",
  },
  {
    question: (ko: boolean) => ko
      ? "차등의결권이 있으면 밸류에이션이 낮아지는가?"
      : "Does dual class lead to lower valuation?",
    answer: (ko: boolean) => ko
      ? "연구 결과는 혼재합니다. 단기적으로는 성과가 좋은 경우도 많지만(Alphabet, Meta), 장기(10년+)에는 평균 7~8% 할인이 관찰됩니다. 창업자의 질과 선셋 조항 유무가 핵심 변수입니다. 선셋 없는 영구 차등의결권 기업은 그렇지 않은 기업보다 평균 약 −10% 할인 거래됩니다."
      : "Evidence is mixed. Short-term performance can be strong (Alphabet, Meta), but over 10+ years a median discount of ~7–8% is observed. Founder quality and presence of a sunset clause are key variables. Perpetual dual class (no sunset) firms trade at roughly −10% vs. peers on average.",
  },
];

// ── SeriesNav ──────────────────────────────────────────────────────────────────
function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
        <div className="flex gap-1 py-2 min-w-max">
          {ECM_PRODUCTS_SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
                s.slug === "ecm-dual-class"
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
              style={s.slug === "ecm-dual-class" ? { background: ACCENT } : {}}
            >
              {s.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── RelatedTerms ──────────────────────────────────────────────────────────────
function RelatedTerms({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";
  const links = [
    { slug: "ecm-overview",        label: (k: boolean) => k ? "ECM 개요" : "ECM Overview" },
    { slug: "ecm-spac-direct",     label: (k: boolean) => k ? "SPAC·직상장" : "SPAC & Direct Listing" },
    { slug: "ecm-ipo-process",     label: (k: boolean) => k ? "IPO 프로세스" : "IPO Process" },
    { slug: "ecm-warrant-bond",    label: (k: boolean) => k ? "신주인수권부사채 (BW)" : "Bond with Warrant (BW)" },
  ];
  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6">
      <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider">
        {ko ? "연관 아티클" : "Related Articles"}
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={l.slug}
            href={`${base}/${l.slug}`}
            className="text-[12px] font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {l.label(ko)}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Props ──────────────────────────────────────────────────────────────────────
interface Props { concept: MarketConcept; lang: Lang; }

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmDualClassClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: ko ? concept.title : (concept.titleEn ?? concept.title),
    description: ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt),
    author: { "@type": "Organization", name: "Deal Story" },
    publisher: { "@type": "Organization", name: "Deal Story", url: "https://deal-story.co" },
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question(ko),
      acceptedAnswer: { "@type": "Answer", text: faq.answer(ko) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <SeriesNav lang={lang} />

      <main className="min-h-screen bg-white dark:bg-gray-950">

        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-4 pt-14 pb-10">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp(0)} className="flex items-center gap-2 mb-4">
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: ACCENT }}
              >
                {ko ? "ECM — 차등의결권" : "ECM — Dual Class Shares"}
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.05)}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4"
            >
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </motion.h1>

            <motion.p variants={fadeUp(0.1)} className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mb-5">
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </motion.p>

            <motion.div variants={fadeUp(0.12)} className="flex flex-wrap gap-1.5 mb-5">
              {(ko ? concept.tags ?? [] : concept.tagsEn ?? concept.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.15)}>
              <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
            </motion.div>
          </motion.div>
        </section>

        {/* ── Chapter Nav ── */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <motion.div
            variants={fadeUp(0.05)} initial="hidden" whileInView="show" viewport={VP}
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

        {/* ── Ch.1 30초 요약 ── */}
        <section id="ch1" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
              {ko
                ? "차등의결권(Dual Class Share)은 같은 경제적 가치를 가지면서도 의결권에서 차이를 두는 주식 구조다. 창업자는 주식 일부만 보유해도 회사 의사결정을 지배하고, 외부 투자자는 경제적 성과만 참여한다. Alphabet·Meta·Snap이 대표적이며 한국은 2019년 비상장 벤처기업에 한해 제한적으로 도입했다."
                : "Dual class shares maintain identical economic rights while assigning different voting power. Founders retain decision-making control even with minority economic ownership; outside investors share in financial returns only. Alphabet, Meta, and Snap are canonical examples. Korea introduced a limited version in 2019 for unlisted venture companies."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {QUICK_STATS.map((s, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.07)}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-center"
              >
                <p className="text-2xl font-black mb-1" style={{ color: ACCENT }}>{s.value}</p>
                <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 mb-1 leading-snug">{s.label(ko)}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500">{s.sub(ko)}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Ch.2 구조 설계 ── */}
        <section id="ch2" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "차등의결권 구조 설계의 핵심" : "Key Elements of Dual Class Design"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
              {ko
                ? "차등의결권은 단순히 '고의결권 주식을 창업자에게'가 아니다. 배율 설정, 전환 조건, 선셋 조항, 상속 가능 여부까지 세밀한 설계가 필요하다. 각 요소가 투자자 신뢰와 밸류에이션에 직결된다."
                : "Dual class is not simply 'give founders high-vote shares.' It requires careful design: multiplier ratio, conversion triggers, sunset clauses, and transferability. Each element directly affects investor confidence and valuation."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              {
                icon: "✖️",
                title: (k: boolean) => k ? "의결권 배율" : "Vote Multiplier",
                desc: (k: boolean) => k
                  ? "일반적으로 5:1~20:1. Alphabet 10:1, Lyft 20:1, Snap은 공모주 의결권 0. 배율이 높을수록 창업자 보호는 강하지만 거버넌스 리스크도 커진다."
                  : "Typically 5:1 to 20:1. Alphabet 10:1, Lyft 20:1, Snap IPO'd with 0-vote public shares. Higher ratio = stronger protection + greater governance risk.",
              },
              {
                icon: "🔀",
                title: (k: boolean) => k ? "전환 트리거" : "Conversion Triggers",
                desc: (k: boolean) => k
                  ? "창업자가 주식을 양도하면 자동으로 1주 1의결권으로 전환. '죽은 손 조항(Dead Hand)'은 특정 상황에서 전환을 방지해 논란이 됨."
                  : "Transfer triggers automatic conversion to 1:1. 'Dead hand' clauses that prevent conversion in certain scenarios have been controversial.",
              },
              {
                icon: "🌅",
                title: (k: boolean) => k ? "선셋 조항" : "Sunset Clause",
                desc: (k: boolean) => k
                  ? "IPO 후 N년 또는 창업자 지분율이 X% 미만이 되면 자동 전환. 투자자 친화적 지배구조의 핵심 — 선셋 없으면 밸류에이션 디스카운트."
                  : "Auto-converts N years post-IPO or when founder ownership falls below X%. Key governance feature — no sunset = valuation discount.",
              },
              {
                icon: "👨‍👩‍👧",
                title: (k: boolean) => k ? "상속·증여 가능 여부" : "Transferability / Inheritance",
                desc: (k: boolean) => k
                  ? "대부분 창업자 가족에게는 전환 없이 이전 가능하도록 설계. 그러나 제3자 양도 시 즉시 전환되도록 제한."
                  : "Often allows transfer to founder's family without conversion, but third-party transfers trigger immediate conversion.",
              },
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.07)}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title(ko)}</h4>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc(ko)}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Ch.3 Alphabet 해부 ── */}
        <section id="ch3" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "Alphabet 3클래스 구조 해부" : "Alphabet's 3-Class Structure Dissected"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
              {ko
                ? "Alphabet은 세계에서 가장 정교한 차등의결권 구조를 가진 기업 중 하나다. A·B·C 3개 클래스가 서로 다른 역할을 한다."
                : "Alphabet has one of the world's most sophisticated dual class structures. Its three classes — A, B, and C — each serve a distinct purpose."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            {ALPHABET_CLASSES.map((cls, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.1)}
                className={`rounded-2xl border-2 p-5 ${cls.color}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-black text-gray-900 dark:text-gray-100">{cls.cls}</h4>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${cls.badge}`}>
                    {ko ? cls.votes : cls.votesEn}
                  </span>
                </div>
                {cls.ticker !== "—" && (
                  <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Ticker: <span className="font-bold text-gray-700 dark:text-gray-300">{cls.ticker}</span>
                  </p>
                )}
                <p className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 mb-2 leading-snug">
                  {cls.holder(ko)}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{cls.note(ko)}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 주요 기업 현황 */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {COMPANY_CASES.map((c, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${c.color}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span>{c.flag}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{c.company}</span>
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white/70 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 flex-shrink-0">
                    {c.ratio}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-1.5 leading-relaxed">{c.note(ko)}</p>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300">
                    {c.founders(ko)} — {ko ? "의결권" : "voting"} {c.stake} {c.stakeLabel(ko)}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Ch.4 찬반 논리 ── */}
        <section id="ch4" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "찬반 논리 완전 정리" : "Pro & Con: The Full Debate"}
            </h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PRO_CON.map((side, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.1)}
                className={`rounded-2xl border p-5 ${side.color}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{side.icon}</span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug">
                    {side.title(ko)}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {side.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`mt-1 text-[10px] font-black px-1.5 py-0.5 rounded flex-shrink-0 ${side.badgeColor}`}>
                        {j + 1}
                      </span>
                      <span className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">{pt(ko)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Ch.5 선셋 조항 ── */}
        <section id="ch5" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "선셋 조항 — 투자자 보호의 핵심 변수" : "Sunset Clauses — The Governance Safety Valve"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
              {ko
                ? "기관 투자자들이 차등의결권 구조를 수용하는 조건의 핵심이 선셋 조항이다. 어떤 트리거로 단일 의결권 구조로 전환되는지에 따라 거버넌스 리스크 평가가 달라진다."
                : "The sunset clause is often the condition under which institutional investors tolerate dual class structures. The type of conversion trigger determines how governance risk is assessed."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SUNSET_TYPES.map((s, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.08)}
                className={`rounded-2xl border p-5 ${s.color}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{s.type(ko)}</h4>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">{s.example}</span>
                  </div>
                </div>
                <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc(ko)}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Ch.6 한국 특례 ── */}
        <section id="ch6" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "한국 차등의결권 특례 — 현황과 쟁점" : "Korea's Dual Class Exception — Status & Debates"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
              {ko
                ? "한국은 2019년 벤처기업법 개정으로 비상장 벤처기업에 한해 차등의결권을 허용했다. 글로벌 유니콘 육성을 위한 정책이지만, 상장 기업 확대에 대해서는 여전히 논의 중이다."
                : "Korea's 2019 Venture Business Act amendment allowed dual class for unlisted venture companies — a policy to nurture global unicorns. Extension to listed firms remains under debate."}
            </p>
          </motion.div>

          <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="show" viewport={VP}>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {KOREA_EXCEPTION.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-5 py-4 ${
                    i < KOREA_EXCEPTION.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""
                  } ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-900/50"}`}
                >
                  <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 w-28 flex-shrink-0 pt-0.5">
                    {row.item(ko)}
                  </span>
                  <span className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                    {row.value(ko)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 카카오·네이버 비교 */}
          <motion.div
            variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP}
            className="mt-6 rounded-2xl border border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 p-5"
          >
            <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
              {ko ? "참고: 카카오·네이버 지배구조" : "Reference: Kakao & Naver Governance"}
            </p>
            <p className="text-[13px] text-blue-800 dark:text-blue-200 leading-relaxed">
              {ko
                ? "카카오와 네이버는 차등의결권 없이도 창업자(김범수·이해진)가 지주사 구조와 지분 집중으로 경영권을 유지한다. 반면 외부 주주의 이사 선임권 제한 이슈가 지속된다. 이 구조가 2019년 특례법 논의의 배경이 됐다."
                : "Kakao and Naver maintain founder control (Kim Beom-su, Lee Hae-jin) through holding company structures and concentrated ownership, without formal dual class. Yet external shareholder director appointment rights remain constrained — a dynamic that shaped the 2019 exception law debate."}
            </p>
          </motion.div>
        </section>

        {/* ── Ch.7 밸류에이션 영향 ── */}
        <section id="ch7" className="max-w-5xl mx-auto px-4 pb-14 scroll-mt-16">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "차등의결권이 밸류에이션에 미치는 영향" : "Valuation Impact of Dual Class Shares"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
              {ko
                ? "단기적으로는 성과가 뛰어난 창업자가 이끄는 기업이 프리미엄을 받기도 한다. 그러나 장기적으로는 거버넌스 리스크가 할인 요인이 된다."
                : "In the short term, companies with outperforming founders may command a premium. Over the long run, governance risk becomes a discount factor."}
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
            className="space-y-4"
          >
            {[
              {
                title: (k: boolean) => k ? "단기 효과: 창업자 프리미엄" : "Short-term: Founder Premium",
                icon: "📈",
                desc: (k: boolean) => k
                  ? "뛰어난 창업자가 이끄는 기업은 상장 직후 단기 수익률이 단일 의결권 기업을 앞서는 경향. 투자자들이 창업자의 비전 실행력에 프리미엄을 지불하는 구조."
                  : "Companies led by high-quality founders tend to outperform single-class peers in the short term post-IPO. Investors pay a premium for founder execution capability.",
                color: "border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20",
              },
              {
                title: (k: boolean) => k ? "장기 효과: 거버넌스 디스카운트" : "Long-term: Governance Discount",
                icon: "📉",
                desc: (k: boolean) => k
                  ? "10년 이상 장기 데이터에서는 평균 −7~8% 할인. 창업자의 능력 저하, 대리인 문제, 경영권 남용 리스크가 할인 요인. 선셋 조항이 없으면 −10%까지 확대."
                  : "Over 10+ years, studies show a median −7–8% discount. Declining founder performance, agency problems, and abuse of control drive the discount. No sunset clause = up to −10%.",
                color: "border-rose-200 dark:border-rose-700 bg-rose-50 dark:bg-rose-900/20",
              },
              {
                title: (k: boolean) => k ? "지수 편입 효과" : "Index Inclusion Effect",
                icon: "📊",
                desc: (k: boolean) => k
                  ? "S&P 500 제외 기업은 패시브 자금 유입이 줄어 유동성과 밸류에이션에 불리. 다만 Russell 2000·Nasdaq-100은 의결권 차등 제한 없음. 이중 상장 기업은 지수별 편입 전략을 고려해야 한다."
                  : "Exclusion from S&P 500 reduces passive fund inflows, hurting liquidity and valuation. Russell 2000 and Nasdaq-100 have no such restriction. Dual-listed companies must strategize by index.",
                color: "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20",
              },
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp(i * 0.08)}
                className={`rounded-2xl border p-5 ${item.color}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title(ko)}</h4>
                </div>
                <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc(ko)}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "자주 묻는 질문" : "FAQ"}
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <FaqAccordion
              items={FAQS.map((faq) => ({
                q: faq.question(ko),
                a: faq.answer(ko),
              }))}
              accent={ACCENT}
            />
          </motion.div>
        </section>

        {/* ── ShareButtons (bottom) ── */}
        <section className="max-w-5xl mx-auto px-4 pb-10">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
          </motion.div>
        </section>

        {/* ── Related Terms ── */}
        <section className="max-w-5xl mx-auto px-4 pb-14">
          <RelatedTerms lang={lang} />
        </section>

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-dual-class");
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market-101" : "/market-101";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? (next.titleEn ?? next.title) : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
