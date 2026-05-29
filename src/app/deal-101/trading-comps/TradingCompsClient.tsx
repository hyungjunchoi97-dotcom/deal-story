"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#0891b2"; // cyan-600 (Valuation 시리즈)
const ACCENT_LIGHT = "#ecfeff"; // cyan-50
const SIBLING = "#f59e0b"; // amber-500 (Modelling 시리즈)

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const VAL_SERIES = [
  { slug: "dcf-overview",       ch: 0, title: (ko: boolean) => ko ? "Ch.0 DCF"           : "Ch.0 DCF",              published: true  },
  { slug: "trading-comps",      ch: 1, title: (ko: boolean) => ko ? "Ch.1 Trading"       : "Ch.1 Trading",          published: true  },
  { slug: "transaction-comps",  ch: 2, title: (ko: boolean) => ko ? "Ch.2 Transaction"   : "Ch.2 Transaction",      published: true  },
  { slug: "football-field",     ch: 3, title: (ko: boolean) => ko ? "Ch.3 Football Field": "Ch.3 Football Field",   published: false },
];
const THIS_CH = 1;

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {VAL_SERIES.map((ch) => {
          const isCurrent = ch.ch === THIS_CH;
          const inactive = !ch.published && !isCurrent;
          if (inactive) {
            return (
              <span key={ch.slug} className="text-[11px] px-3 py-1.5 rounded-full font-medium text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-900 cursor-not-allowed">
                {ch.title(ko)} · {ko ? "준비 중" : "Soon"}
              </span>
            );
          }
          return (
            <Link key={ch.slug} href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                isCurrent ? "text-white" : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              style={isCurrent ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Peer Selection 6 Steps ────────────────────────────────────────────────────
const PEER_STEPS = [
  {
    n: "01",
    icon: "🏷️",
    titleKo: "Industry Classification",
    titleEn: "Industry Classification",
    whatKo: "GICS · SIC · NAICS 코드로 산업 정의",
    whatEn: "Define the industry via GICS, SIC, or NAICS codes",
    whyKo: "산업 분류가 첫 single source of truth — 잘못된 분류는 peer set 전체를 무효화한다",
    whyEn: "Industry coding is the first source of truth — getting it wrong invalidates the whole peer set",
    mistakeKo: "❌ 흔한 실수: 'name similarity'로 peer를 고름 (Activision과 Activision Inc 자회사 모두 게이밍이지만 사업모델 다름)",
    mistakeEn: "❌ Common error: choosing peers by name (Activision and its subsidiaries are 'gaming' but their business models diverge)",
  },
  {
    n: "02",
    icon: "🌐",
    titleKo: "Geography",
    titleEn: "Geography",
    whatKo: "Developed vs EM, regulatory regime, 동일 시장 규제 환경",
    whatEn: "Developed vs EM, regulatory regime, same-market environment",
    whyKo: "Multiple은 시장의 가격 — US peer median은 US 상장 가능 회사에만 의미가 있다",
    whyEn: "Multiples are market prices — US peer median only applies to US-listable companies",
    mistakeKo: "❌ 흔한 실수: US 멀티플 → EM 회사에 그대로 적용 (시장 risk premium·liquidity 차이 무시)",
    mistakeEn: "❌ Common error: applying US multiples directly to EM companies (ignores market risk premium and liquidity gap)",
  },
  {
    n: "03",
    icon: "📏",
    titleKo: "Market Cap Range",
    titleEn: "Market Cap Range",
    whatKo: "동일 크기 밴드 (대개 target의 ±10x)",
    whatEn: "Same size band (usually ±10x of target)",
    whyKo: "$1B 회사가 $100B 회사의 멀티플을 받지 못한다 — index inclusion · analyst coverage · liquidity가 모두 다름",
    whyEn: "$1B companies don't earn $100B multiples — index inclusion, analyst coverage, and liquidity all differ",
    mistakeKo: "❌ 흔한 실수: target이 mid-cap인데 mega-cap peer를 포함시켜 멀티플을 인위적으로 올림",
    mistakeEn: "❌ Common error: target is mid-cap but mega-cap peers are included, artificially lifting the multiple",
  },
  {
    n: "04",
    icon: "🔬",
    titleKo: "Business Model Similarity",
    titleEn: "Business Model Similarity",
    whatKo: "Revenue mix, margin profile, growth profile 일치",
    whatEn: "Revenue mix, margin profile, growth profile must align",
    whyKo: "EBITDA margin 40% SaaS와 15% 하드웨어는 'tech' 안에 함께 두면 안 된다",
    whyEn: "A 40% margin SaaS and a 15% hardware vendor don't belong in the same 'tech' bucket",
    mistakeKo: "❌ 흔한 실수: 매출 구성을 보지 않고 GICS 코드만으로 peer를 결정",
    mistakeEn: "❌ Common error: relying solely on GICS code without inspecting revenue composition",
  },
  {
    n: "05",
    icon: "🩺",
    titleKo: "Financial Health",
    titleEn: "Financial Health",
    whatKo: "Positive EBITDA, scale threshold (예: revenue > $500M)",
    whatEn: "Positive EBITDA, scale threshold (e.g. revenue > $500M)",
    whyKo: "Distressed peer는 자기 멀티플이 왜곡 — 비교 대상에서 제외해야 median이 의미 있음",
    whyEn: "Distressed peers carry distorted multiples — excluding them keeps the median meaningful",
    mistakeKo: "❌ 흔한 실수: Earnings outlier를 trim하지 않고 mean에 포함",
    mistakeEn: "❌ Common error: leaving earnings outliers in the mean without trimming",
  },
  {
    n: "06",
    icon: "🎯",
    titleKo: "Manual Curation",
    titleEn: "Manual Curation",
    whatKo: "Senior diligence — final 8-12 names로 좁힘",
    whatEn: "Senior diligence — narrowed to a final 8-12 names",
    whyKo: "Algorithm 단독으로는 'mobile-only'·'state-influenced'·'transition' peer를 못 걸러냄. 시니어의 판단이 필수",
    whyEn: "Algorithms alone can't filter 'mobile-only', 'state-influenced', or 'in-transition' peers — senior judgment is essential",
    mistakeKo: "❌ 흔한 실수: junior가 80개를 그대로 들고와서 median을 뽑음",
    mistakeEn: "❌ Common error: a junior pulls all 80 names and computes a median without curation",
  },
];

// ── Sector Multiples Table ───────────────────────────────────────────────────
const SECTOR_MULTIPLES = [
  { sectorKo: "Tech / Software",     sectorEn: "Tech / Software",     primary: "EV/Revenue, EV/ARR",  whyKo: "growth + recurring",          whyEn: "growth + recurring",          secondary: "EV/EBITDA" },
  { sectorKo: "산업재",              sectorEn: "Industrials",         primary: "EV/EBITDA",           whyKo: "capex normalize",             whyEn: "capex normalize",             secondary: "EV/EBIT" },
  { sectorKo: "은행",                sectorEn: "Banks",               primary: "P/B, P/TBV",          whyKo: "balance sheet driven",        whyEn: "balance sheet driven",        secondary: "P/E, ROE-adj" },
  { sectorKo: "제약 (large)",        sectorEn: "Pharma (large)",      primary: "EV/EBITDA",           whyKo: "mature cash flows",           whyEn: "mature cash flows",           secondary: "EV/Sales" },
  { sectorKo: "제약 (clinical)",     sectorEn: "Pharma (clinical)",   primary: "EV/Pipeline",         whyKo: "no revenue yet",              whyEn: "no revenue yet",              secondary: "option value" },
  { sectorKo: "REIT",                sectorEn: "REIT",                primary: "P/FFO, P/AFFO",       whyKo: "non-cash heavy",              whyEn: "non-cash heavy",              secondary: "EV/EBITDA" },
  { sectorKo: "에너지 E&P",          sectorEn: "Energy E&P",          primary: "EV/EBITDAX, EV/Proved", whyKo: "reserves driven",            whyEn: "reserves driven",             secondary: "NAV" },
  { sectorKo: "보험",                sectorEn: "Insurance",           primary: "P/Embedded Value",    whyKo: "actuarial",                   whyEn: "actuarial",                   secondary: "P/B" },
  { sectorKo: "광산",                sectorEn: "Mining",              primary: "P/NAV",               whyKo: "reserve life",                whyEn: "reserve life",                secondary: "EV/Resource" },
  { sectorKo: "Retail / QSR",        sectorEn: "Retail / QSR",        primary: "EV/EBITDA, EV/Unit",  whyKo: "SSSG factor",                 whyEn: "SSSG factor",                 secondary: "EV/Sales" },
];

// ── NTM vs LTM Cards ──────────────────────────────────────────────────────────
const TIMING = [
  {
    label: "LTM",
    fullKo: "Last Twelve Months",
    fullEn: "Last Twelve Months",
    descKo: "감사·확정된 historical 데이터. 비교 가능성 최고. 단, growth 회사에서는 stale함",
    descEn: "Audited, confirmed historical data. Highest comparability — but stale for growth names",
  },
  {
    label: "NTM",
    fullKo: "Next Twelve Months",
    fullEn: "Next Twelve Months",
    descKo: "Consensus forward. Forward-looking. IB·PE 실무 표준 — Buyer가 살 때 미래를 본다",
    descEn: "Consensus forward. Forward-looking — the practitioner standard. Buyers underwrite to the future",
  },
  {
    label: "Cal Yr",
    fullKo: "Calendar Year",
    fullEn: "Calendar Year",
    descKo: "Fiscal year mismatch 정규화. 일본 (3월 결산) · 호주 (6월) 등 cross-FY 비교 시 필수",
    descEn: "Normalizes fiscal year mismatches. Essential for cross-FY comparisons (Japan March, Australia June)",
  },
];

// ── Peer Multiples Chart (Activision peer set) ───────────────────────────────
const PEER_MULTIPLES = [
  { peer: "EA",          ntmEbitda: 25.0, color: "#0891b2" },
  { peer: "Take-Two",    ntmEbitda: 22.0, color: "#0891b2" },
  { peer: "Ubisoft",     ntmEbitda: 18.0, color: "#0891b2" },
  { peer: "Nintendo",    ntmEbitda: 16.0, color: "#0891b2" },
  { peer: "NEXON",       ntmEbitda: 14.0, color: "#0891b2" },
  { peer: "NetEase",     ntmEbitda: 21.0, color: "#0891b2" },
  { peer: "Capcom",      ntmEbitda: 28.0, color: "#0891b2" },
];

// ── Implied EV by Multiple Chart (Activision case) ───────────────────────────
const IMPLIED_EV = [
  { label: "25th %ile (17x)", value: 44.2, color: "#94a3b8" },
  { label: "Median (21x)",    value: 54.6, color: "#0891b2" },
  { label: "75th %ile (24x)", value: 62.4, color: "#94a3b8" },
  { label: "MSFT Offer",      value: 68.7, color: "#f59e0b" },
];

// ── Pitfalls ──────────────────────────────────────────────────────────────────
const PITFALLS = [
  {
    n: "01",
    titleKo: "Forced peer set",
    titleEn: "Forced peer set",
    bodyKo: "'Closest by name'으로 peer를 골라 — Disney를 Netflix의 peer라고 하지만 ad-supported model이 다르고, capex profile이 30x 차이난다.",
    bodyEn: "Choosing peers by name — calling Disney a Netflix peer, even though ad-supported models differ and capex profiles diverge 30x.",
  },
  {
    n: "02",
    titleKo: "Ignoring scale differences",
    titleEn: "Ignoring scale differences",
    bodyKo: "$1B company를 $100B company peer set에 넣음. Liquidity premium, index inclusion premium 모두 무시.",
    bodyEn: "Putting a $1B company into a $100B peer set — ignoring liquidity premium and index inclusion premium.",
  },
  {
    n: "03",
    titleKo: "Stale multiples",
    titleEn: "Stale multiples",
    bodyKo: "Volatile market에서 6주 전 멀티플을 사용. SVB 사태 같은 macro shock 후 1주 만에 sector multiple 20% 움직임.",
    bodyEn: "Using six-week-old multiples in a volatile tape. Post-SVB-style macro shocks moved sector multiples 20% inside a week.",
  },
  {
    n: "04",
    titleKo: "TEV calculation errors",
    titleEn: "TEV calculation errors",
    bodyKo: "Operating lease 누락 (ASC 842 / IFRS 16 이후 +5–15% TEV 변화), preferred stock을 equity로 분류, MI 미조정.",
    bodyEn: "Missing operating leases (ASC 842 / IFRS 16 added 5–15% to TEV), misclassifying preferred as equity, leaving MI unadjusted.",
  },
  {
    n: "05",
    titleKo: "EBITDA mismatches",
    titleEn: "EBITDA mismatches",
    bodyKo: "한 peer는 adjusted EBITDA (stock comp 제외), 다른 peer는 reported EBITDA. Apples to oranges median.",
    bodyEn: "One peer uses adjusted EBITDA (ex-stock comp), another uses reported EBITDA. Apples-to-oranges median.",
  },
  {
    n: "06",
    titleKo: "Geographic mismatch",
    titleEn: "Geographic mismatch",
    bodyKo: "US market multiple ≠ EM multiple. Korean game company를 EA·Take-Two peer set으로 평가하면 멀티플 inflation이 발생.",
    bodyEn: "US multiples ≠ EM multiples. Valuing a Korean game maker against an EA / Take-Two peer set inflates the multiple.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Trading Comps와 Transaction Comps의 차이는?" : "Trading Comps vs Transaction Comps — what's the difference?",
    a: (ko: boolean) => ko
      ? "Trading Comps는 '상장된 standalone 회사의 시장가 멀티플'이고, Transaction Comps는 'M&A 거래에서 인수자가 지불한 멀티플'이다. 후자는 항상 control premium (보통 30–40%)을 포함한다. 실무에서는 둘을 함께 본다 — Trading이 standalone value의 floor, Transaction이 deal context의 ceiling을 준다. 자세한 내용은 Val Ch.2에서 다룬다."
      : "Trading Comps are 'public standalone company market multiples'. Transaction Comps are 'multiples an acquirer paid in an M&A deal' — the latter always includes a control premium (typically 30–40%). In practice both are used together: Trading anchors the standalone floor; Transaction anchors the deal-context ceiling. Val Ch.2 goes deep on the second.",
  },
  {
    q: (ko: boolean) => ko ? "Peer가 몇 개여야 충분한가?" : "How many peers is enough?",
    a: (ko: boolean) => ko
      ? "8–12개가 표준이다. 5개 이하면 median이 outlier에 흔들리고, 15개 이상이면 'forced' peer를 포함시켰을 가능성이 크다. 산업이 좁으면 (예: pure-play crypto exchange) 4–6개로 시작해 broader peer set + adjustment로 보완한다. Goldman·Morgan Stanley fairness opinion 표준도 10개 ±2."
      : "8–12 is standard. Below 5, the median is hostage to outliers; above 15, you've probably forced peers in. For narrow industries (e.g. pure-play crypto exchanges) start with 4–6 and supplement with a broader peer set plus adjustments. Goldman / Morgan Stanley fairness opinions standardize around 10 ±2.",
  },
  {
    q: (ko: boolean) => ko ? "Peer가 없으면 어떻게 하나?" : "What if there are no real peers?",
    a: (ko: boolean) => ko
      ? "세 가지 접근. ① Broader peer set + adjustment factor: 인접 산업의 peer를 가져와 known difference (margin, growth) 만큼 multiple을 조정. ② Build-up from sub-segment peers: 회사가 두 사업부면 각 사업부의 peer set으로 sum-of-the-parts (SOTP). ③ DCF dependence: peer가 진짜 없으면 Trading Comps는 못 쓰고, DCF로 절대가치를 잡고 Transaction Comps만 cross-check. 신사업·spin-off에서 흔하다."
      : "Three approaches. ① Broader peer set + adjustment factor — pull adjacent-industry peers and adjust multiples for known differences (margin, growth). ② Build up from sub-segment peers — two-segment companies become a Sum-of-the-Parts (SOTP). ③ Lean on DCF — if there are truly no peers, drop Trading Comps and use DCF for intrinsic value, cross-checked with Transaction Comps. Common for new ventures and spin-offs.",
  },
  {
    q: (ko: boolean) => ko ? "NTM 멀티플 데이터는 어디서 얻나?" : "Where do NTM multiples come from?",
    a: (ko: boolean) => ko
      ? "Bloomberg (BEst function), Capital IQ (consensus mean), FactSet — 세 곳이 IB·PE 표준. Capital IQ는 cell function (=CIQ() in Excel)으로 live link. Bloomberg는 BEst가 다음 4 fiscal quarter consensus EBITDA를 즉시 반환. FactSet은 cleaner UI · 더 빠른 historical multiples. 실무 빌드 방법은 Modelling Ch.2에서 step-by-step."
      : "Bloomberg (BEst function), Capital IQ (consensus mean), and FactSet — the three IB/PE standards. Capital IQ exposes a cell function (=CIQ() in Excel) for live links. Bloomberg's BEst returns the next four fiscal quarters of consensus EBITDA. FactSet has a cleaner UI and faster historical multiples. Modelling Ch.2 walks the build step by step.",
  },
  {
    q: (ko: boolean) => ko ? "DCF와 결과가 크게 다르면?" : "What if DCF and Trading Comps disagree?",
    a: (ko: boolean) => ko
      ? "둘 다 맞고 둘 다 틀린다 — 다른 질문에 답하기 때문이다. DCF는 'fundamentals 기준 intrinsic value' (당신의 forecast 가정에 의존), Trading은 'market 기준 relative value' (시장이 합리적이라는 가정에 의존). ±15% 차이는 정상. 30% 이상 차이나면: (a) 시장이 비합리적 (예: 2021 SaaS bubble), (b) 당신의 DCF 가정이 틀림, (c) peer set이 진짜 peer가 아님. 정답은 football field로 통합하고 senior에게 차이의 원인을 explain — Val Ch.3 (예정)에서 다룬다."
      : "Both are right and both are wrong — they answer different questions. DCF gives intrinsic value driven by your forecast; Trading gives relative value driven by market rationality. ±15% gap is normal. Beyond 30%, one of: (a) market is irrational (2021 SaaS bubble), (b) your DCF assumptions are off, (c) the peer set isn't really comparable. The answer is to integrate both in a football field and explain the gap to seniors — Val Ch.3 (upcoming) covers it.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Rosenbaum, J. & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). Wiley." },
  { id: 2, text: "Damodaran, A. (2012). Damodaran on Valuation: Security Analysis for Investment and Corporate Finance (2nd ed.). Wiley." },
  { id: 3, text: "S&P Capital IQ Pro — Comparable Companies Analysis User Guide (2024 ed.)." },
  { id: 4, text: "Bloomberg L.P. — BEst Estimates Methodology Whitepaper (2023)." },
  { id: 5, text: "Microsoft Corporation. (2022). Form 8-K Activision Blizzard Transaction Filings." },
  { id: 6, text: "FASB ASC 842 / IASB IFRS 16 — Lease Accounting Standards (effective 2019)." },
];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function TradingCompsClient({ lang }: Props) {
  const ko = lang === "ko";

  const titleKo = "Valuation 101 Ch.1 — Trading Comps 상장사 비교";
  const titleEn = "Valuation 101 Ch.1 — Trading Comps";
  const subKo = "상장 peer 멀티플로 가치를 산정한다 — Peer Universe, 산업별 멀티플, NTM vs LTM, TEV";
  const subEn = "Pricing off public peer multiples — peer universe, sector-specific multiples, NTM vs LTM, TEV";
  const tagsKo = ["Trading Comps", "Peer Universe", "EV/EBITDA", "NTM", "TEV", "Football Field"];
  const tagsEn = ["Trading Comps", "Peer Universe", "EV/EBITDA", "NTM", "TEV", "Football Field"];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-cyan-600 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-cyan-600 transition-colors">{ko ? "딜 101" : "Deal 101"}</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Trading Comps" : "Trading Comps"}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                Valuation 101
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                Ch.1
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{ko ? "14분 읽기" : "14 min read"}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? titleKo : titleEn}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? subKo : subEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mt-4"
            >
              {(ko ? tagsKo : tagsEn).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link href="/deal-101/trading-comps"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/trading-comps"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={!ko ? { background: ACCENT } : {}}
              >English</Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? titleKo : titleEn} variant="top" lang={lang} />
        </div>
        <ChapterNav lang={lang} />

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Section 1 — Opening Hook ══════════════════════════════════════════ */}
          <motion.section id="opening" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "왜 Trading Comps인가" : "Why Trading Comps"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Activision의 fair value는 $54B였다 — MSFT는 $68.7B를 냈다" : "Activision's Fair Value Was $54B — Microsoft Paid $68.7B"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "EA 25x EBITDA, Take-Two 22x, Ubisoft 18x, Nintendo 16x, NEXON 14x, NetEase 21x, Capcom 28x — 2022년 1월, 게임 산업 상장 peer set의 NTM EV/EBITDA 멀티플은 14x ~ 28x 사이에서 분포했다. Median은 21x. Activision의 2023E EBITDA $2.6B에 적용하면 $54.6B — 즉 시장이 본 Activision의 standalone fair value.",
                "그런데 Microsoft는 $68.7B를 냈다. Peer median 대비 26% 프리미엄. 이 차이의 절반은 control premium, 절반은 synergy — 즉 $14B는 Trading Comps가 보여주지 않는 곳에 있다. 정확히 이 점이 Trading Comps의 역할을 정의한다. Trading은 standalone 시장가의 좌표를 준다. 그 좌표 위에서 control과 synergy를 더해 final deal price가 만들어진다.",
                "이 챕터는 그 첫 좌표를 어떻게 잡는지에 대한 것이다. Peer universe 선정 6단계, 산업별 primary multiple, NTM vs LTM 결정, TEV 계산의 흔한 함정, Operating Lease 조정. 그리고 Trading Comps가 통하지 않는 경우 — peer가 진짜 없을 때 — 무엇을 해야 하는가.",
              ] : [
                "EA at 25x EBITDA, Take-Two 22x, Ubisoft 18x, Nintendo 16x, NEXON 14x, NetEase 21x, Capcom 28x — in January 2022, gaming peer NTM EV/EBITDA multiples ranged 14x–28x. Median 21x. Apply that to Activision's 2023E EBITDA of $2.6B and you get $54.6B — the standalone fair value the market saw.",
                "Microsoft paid $68.7B — a 26% premium to peer median. Roughly half of that gap is control premium; half is synergy. The $14B difference lives in places Trading Comps doesn't show. That's exactly what Trading Comps is for: it sets the coordinate of standalone market value. Control and synergy build on top of that coordinate to produce the final deal price.",
                "This chapter is about how that first coordinate is set. The six-step peer universe process, sector-specific primary multiples, NTM vs LTM, common TEV traps, and the operating-lease adjustment. Plus, what to do when Trading Comps fails — when no real peers exist.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 2 — What Are Trading Comps ════════════════════════════════ */}
          <motion.section id="what" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "정의" : "Definition"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "현재 상장 peer의 시장가 멀티플로 우리 회사 가치를 추정" : "Pricing the Target off the Market Multiples of Public Peers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="rounded-2xl p-6 border-2 mb-6" style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "기본 공식" : "The Core Formula"}
              </p>
              <div className="text-center py-4">
                <p className="font-mono text-[15px] sm:text-[18px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Implied EV = Peer Median Multiple × Target Metric
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {ko ? "→ Equity = Implied EV − Net Debt − Preferred − Minority Interest" : "→ Equity = Implied EV − Net Debt − Preferred − Minority Interest"}
                </p>
              </div>
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Trading Comps가 작동하는 가정은 단순하다: '시장은 (대부분의 시간에) 합리적'. Activision과 EA가 동일한 산업·동일한 사이즈·유사한 margin이라면, EA에 매겨진 25x는 Activision에도 비슷한 숫자를 준다. 시장가가 fundamentals를 반영한다는 EMH의 약한 형태 — IB·PE가 받아들이는 가장 실용적인 가정."
                  : "Trading Comps rests on one assumption: 'markets are (most of the time) rational'. If Activision and EA share the same industry, size, and margin profile, the 25x assigned to EA should produce a comparable multiple for Activision. It's the weak form of EMH — the most practical assumption IB/PE actually accepts."}
              </motion.p>
              <motion.p variants={fadeUp(0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "DCF가 절대가치 (intrinsic), Trading Comps가 상대가치 (relative). Val Ch.0에서 본 대로 두 방법은 경쟁자가 아니라 cross-check다 — DCF가 point estimate, Comps가 sanity check."
                  : "DCF gives intrinsic value, Trading Comps gives relative value. As Val Ch.0 covered, they're not competitors — they cross-check each other. DCF anchors the point estimate; Comps sanity-checks it."}
              </motion.p>
            </div>

            {/* Cross-link to Modelling Ch.2 — prominent amber CTA */}
            <motion.div variants={fadeUp(0.15)}
              className="rounded-2xl border-2 p-5 flex items-center gap-4 flex-wrap"
              style={{ borderColor: SIBLING + "60", background: "#fffbeb" }}
            >
              <span className="text-3xl flex-shrink-0">💻</span>
              <div className="flex-1 min-w-[200px]">
                <p className="text-[12px] font-bold mb-0.5" style={{ color: SIBLING }}>
                  {ko ? "실제 빌드 방법" : "Build it for real"}
                </p>
                <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "Capital IQ로 8–12개 peer 스크리닝, 4시트 Excel 워크북 셋업, TEV 자동 계산, NTM 멀티플 pull — Modelling Ch.2 step-by-step"
                    : "Capital IQ screening for 8–12 peers, 4-sheet Excel workbook, TEV auto-calc, NTM multiple pulls — Modelling Ch.2 step by step"}
                </p>
              </div>
              <Link href={ko ? "/deal-101/trading-comps-build" : "/en/deal-101/trading-comps-build"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ background: SIBLING }}
              >
                {ko ? "Modelling Ch.2 →" : "Modelling Ch.2 →"}
              </Link>
            </motion.div>
          </motion.section>

          {/* ══ Section 3 — Peer Universe 6 Steps ═════════════════════════════════ */}
          <motion.section id="peer-universe" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Peer Universe 선정" : "Peer Universe Selection"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Top-Down 6단계 프로세스" : "Top-Down 6-Step Process"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Peer universe 잘못 짜면 valuation은 처음부터 무효다. IB·PE 표준은 top-down 6단계로 좁힌다 — 산업 분류에서 시작해 manual curation으로 끝나는 funnel. 보통 350개 → 8–12개로 줄어든다."
                  : "If the peer universe is wrong, the valuation is wrong from the start. The IB/PE standard is a top-down 6-step funnel — from industry classification to manual curation. Typically 350 candidates → 8–12 final names."}
              </motion.p>
            </div>

            <motion.div variants={stagger} className="space-y-3">
              {PEER_STEPS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl mb-1" aria-hidden>{s.icon}</div>
                      <p className="font-mono text-[11px] font-black" style={{ color: ACCENT }}>{s.n}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? s.titleKo : s.titleEn}</h3>
                      <div className="grid grid-cols-1 gap-2">
                        <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                          <span className="font-bold" style={{ color: ACCENT }}>{ko ? "무엇:" : "What:"}</span> {ko ? s.whatKo : s.whatEn}
                        </p>
                        <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                          <span className="font-bold" style={{ color: ACCENT }}>{ko ? "왜:" : "Why:"}</span> {ko ? s.whyKo : s.whyEn}
                        </p>
                        <p className="text-[11px] text-rose-700 dark:text-rose-400 leading-relaxed">{ko ? s.mistakeKo : s.mistakeEn}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 4 — Sector Multiples Table ════════════════════════════════ */}
          <motion.section id="sector" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "산업별 Primary Multiple" : "Sector-Specific Primary Multiples"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "산업이 사용하는 멀티플은 산업이 결정한다" : "Industries Determine Their Own Multiples"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "EV/EBITDA는 모든 산업의 표준이 아니다. SaaS는 growth + recurring 때문에 EV/Revenue·EV/ARR로 본다. Banks는 balance sheet driven이라 P/B로. REIT은 D&A가 의미없어 P/FFO. 각 산업의 표준 멀티플은 그 산업의 economic engine을 반영한다."
                  : "EV/EBITDA isn't every industry's standard. SaaS uses EV/Revenue and EV/ARR for growth + recurring. Banks use P/B because they're balance-sheet-driven. REITs use P/FFO because D&A is irrelevant. Each sector's standard multiple reflects that sector's economic engine."}
              </motion.p>
            </div>

            <motion.div variants={fadeUp(0.1)} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">{ko ? "산업" : "Sector"}</th>
                    <th className="text-left py-3 px-4 font-bold" style={{ color: ACCENT }}>Primary</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">{ko ? "이유" : "Why"}</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-500 dark:text-gray-400">Secondary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {SECTOR_MULTIPLES.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-2.5 px-4 font-semibold text-gray-700 dark:text-gray-300">{ko ? row.sectorKo : row.sectorEn}</td>
                      <td className="py-2.5 px-4 font-mono font-bold" style={{ color: ACCENT }}>{row.primary}</td>
                      <td className="py-2.5 px-4 text-gray-600 dark:text-gray-400">{ko ? row.whyKo : row.whyEn}</td>
                      <td className="py-2.5 px-4 font-mono text-gray-500 dark:text-gray-400">{row.secondary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>

          {/* ══ Section 5 — NTM vs LTM vs Cal Yr ══════════════════════════════════ */}
          <motion.section id="timing" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Time Window" : "Time Window"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "NTM vs LTM vs Calendar — IB 실무 표준은 NTM" : "NTM vs LTM vs Calendar — Practitioners Default to NTM"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {TIMING.map((t, i) => (
                <motion.div key={t.label} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <p className="font-mono text-[14px] font-black mb-1" style={{ color: ACCENT }}>{t.label}</p>
                  <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? t.fullKo : t.fullEn}</p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? t.descKo : t.descEn}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-xl p-4 border" style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}>
              <p className="text-[13px] font-bold mb-1" style={{ color: ACCENT }}>
                {ko ? "실무 함정 — Consensus가 stale할 때" : "Practitioner Trap — When Consensus Goes Stale"}
              </p>
              <p className="text-[12px] text-gray-700 leading-relaxed">
                {ko
                  ? "NTM consensus는 sell-side analyst의 평균이다. Earnings surprise 후 1–2주는 estimate가 업데이트되기 전 — 이 기간에 NTM 멀티플을 그대로 쓰면 stale price를 받는다. Bloomberg의 BEst는 'analysts updated last 30 days' filter를 제공 — 이걸 켜는 게 표준."
                  : "NTM consensus is the average of sell-side analysts. After an earnings surprise, estimates take 1–2 weeks to update — using NTM multiples in that window gives you a stale price. Bloomberg's BEst exposes an 'analysts updated last 30 days' filter — turning it on is the standard."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 6 — TEV Calculation ═══════════════════════════════════════ */}
          <motion.section id="tev" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "TEV 계산" : "TEV Calculation"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Total Enterprise Value — 자주 틀리는 곳" : "Total Enterprise Value — Where Practitioners Go Wrong"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-2xl p-6 border-2 mb-6" style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "전체 공식" : "Full Formula"}
              </p>
              <div className="text-center py-3">
                <p className="font-mono text-[13px] sm:text-[15px] font-bold text-gray-900 dark:text-gray-100">
                  TEV = Market Cap + Debt − Cash + Preferred + MI + OpLease Liability
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="rounded-2xl border-2 border-amber-300 dark:border-amber-700 bg-amber-50/40 dark:bg-amber-900/10 p-5 mb-4">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2 text-amber-700 dark:text-amber-400">
                {ko ? "⚠️ Operating Lease 조정 (ASC 842 / IFRS 16 since 2019)" : "⚠️ Operating Lease Adjustment (ASC 842 / IFRS 16 since 2019)"}
              </p>
              <ul className="space-y-2 text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>• <strong>{ko ? "Pre-2019:" : "Pre-2019:"}</strong> {ko ? "Operating leases는 off-balance-sheet → EBITDA 안에 잡히지 않음" : "Operating leases sat off-balance-sheet → not captured in EBITDA"}</li>
                <li>• <strong>{ko ? "Post-2019:" : "Post-2019:"}</strong> {ko ? "ROU asset + Lease liability로 BS 위로 올라옴 → EBITDA에 lease expense 빠지고 TEV에 lease liability 추가" : "ROU asset + lease liability surface on BS → lease expense removed from EBITDA and lease liability added to TEV"}</li>
                <li>• <strong>{ko ? "결과:" : "Effect:"}</strong> {ko ? "Pre/post-2019 peer를 섞으면 multiple이 5–15% 왜곡. 시점 통일 필수" : "Mixing pre/post-2019 peers distorts multiples 5–15%. Period alignment is mandatory"}</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl border-2 border-rose-300 dark:border-rose-700 bg-rose-50/40 dark:bg-rose-900/10 p-5">
              <p className="text-[12px] font-bold uppercase tracking-widest mb-2 text-rose-700 dark:text-rose-400">
                {ko ? "🚨 Minority Interest 함정" : "🚨 Minority Interest Trap"}
              </p>
              <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Subsidiary가 partial owned (예: parent 51%)이면 consolidated P&L에는 100% EBITDA가 잡힌다. 그러나 equity holder는 51%만 갖는다 — 나머지 49%는 'Minority Interest'로 BS에 별도 표시. TEV에 MI를 추가하지 않으면 '100% EBITDA를 51% equity가 갖는다'는 잘못된 가정이 된다. Multiple = TEV(MI 포함) / Consolidated EBITDA가 맞다."
                  : "When a subsidiary is partially owned (e.g. parent at 51%), consolidated P&L captures 100% of EBITDA. But equity holders only own 51% — the other 49% sits as Minority Interest on the BS. Skipping MI in TEV makes the math assume 51% of equity owns 100% of EBITDA. The correct multiple = TEV (incl. MI) / Consolidated EBITDA."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 7 — Mean / Median / IQR ═══════════════════════════════════ */}
          <motion.section id="stats" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "멀티플 통계" : "Multiple Statistics"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Median이 표준 — Mean은 outlier에 끌린다" : "Median Is the Standard — Mean Gets Dragged by Outliers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Activision peer set의 NTM EV/EBITDA를 보면 — 14x부터 28x까지 spread가 14x다. Mean = 20.6x, Median = 21.0x. 이 케이스에서는 비슷하지만, peer set에 outlier 하나가 들어오면 (예: Roblox 80x) mean이 25x로 튄다. 그래서 IB·PE 표준은 항상 median + IQR (25th–75th percentile)을 함께 표시한다."
                  : "Activision's peer set NTM EV/EBITDA spans 14x to 28x — a 14x spread. Mean = 20.6x, Median = 21.0x. Close in this case, but one outlier (say Roblox at 80x) drags the mean to 25x. The IB/PE standard always shows median + IQR (25th–75th percentile)."}
              </motion.p>
            </div>

            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-5">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Activision Peer Set — NTM EV/EBITDA 분포 (2022 Jan)" : "Activision Peer Set — NTM EV/EBITDA Distribution (Jan 2022)"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "Median 21x를 기준선으로 — Capcom outlier (28x), NEXON anchor (14x)" : "Median 21x as reference — Capcom outlier (28x), NEXON anchor (14x)"}
              </p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={PEER_MULTIPLES} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="peer" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}x`} domain={[0, 32]} width={40} />
                  <Tooltip
                    formatter={((v: number) => [`${v}x`, ko ? "NTM EV/EBITDA" : "NTM EV/EBITDA"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <ReferenceLine y={21} stroke={ACCENT} strokeDasharray="4 4" strokeWidth={1.5} label={{ value: ko ? "Median 21x" : "Median 21x", fontSize: 10, fill: ACCENT, position: "insideTopRight" }} />
                  <Bar dataKey="ntmEbitda" radius={[4, 4, 0, 0]}>
                    {PEER_MULTIPLES.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Implied EV by Multiple — Football Field Input" : "Implied EV by Multiple — Football Field Input"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "Activision EBITDA 2023E $2.6B에 각 percentile 멀티플을 적용 → MSFT offer ($68.7B)와 비교" : "Activision EBITDA 2023E $2.6B times each percentile multiple → comparing against MSFT offer ($68.7B)"}
              </p>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart layout="vertical" data={IMPLIED_EV} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `$${v}B`} domain={[0, 75]} />
                  <YAxis type="category" dataKey="label" tick={{ fontSize: 10, fill: "#6b7280" }} width={120} />
                  <Tooltip
                    formatter={((v: number) => [`$${v}B`, ko ? "Implied EV" : "Implied EV"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {IMPLIED_EV.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko ? "* MSFT offer가 75th percentile (62.4B)보다도 10% 위 — 나머지는 control premium + synergy" : "* MSFT's offer sits 10% above the 75th percentile ($62.4B) — the rest is control premium + synergy"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 8 — Real Case (Activision) ═══════════════════════════════ */}
          <motion.section id="case" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "실전 케이스" : "Real Case"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Activision Peer Set — 끝에서 끝까지" : "Activision Peer Set — End to End"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Goldman Sachs (MSFT 측), Allen & Co. (ATVI 측) 두 advisor가 fairness opinion에 쓴 peer set은 공식적으로 공개되지는 않지만, 글로벌 IB·PE 표준 게이밍 peer는 다음 8개로 수렴한다: EA · Take-Two · Ubisoft · Nintendo · NEXON · NetEase · Capcom · Square Enix.",
                "이 8개의 2022년 1월 시점 NTM EV/EBITDA는 14x ~ 28x, median 21x. Activision의 2023E EBITDA $2.6B에 적용하면 standalone fair value $54.6B. 25th percentile (17x) 적용 시 $44.2B, 75th percentile (24x) 적용 시 $62.4B.",
                "MSFT가 제시한 $68.7B는 75th percentile보다도 10% 위. 즉 Trading Comps만으로는 이 가격이 정당화되지 않는다. 나머지 $14.1B (= $68.7B − $54.6B)는 Transaction Comps와 synergy의 영역 — Val Ch.2에서 분해한다.",
              ] : [
                "Goldman Sachs (MSFT side) and Allen & Co. (ATVI side) didn't publish their fairness opinion peer sets, but global IB/PE consensus on gaming peers converges on these eight: EA, Take-Two, Ubisoft, Nintendo, NEXON, NetEase, Capcom, Square Enix.",
                "Their NTM EV/EBITDA in January 2022 ranged 14x–28x, median 21x. Applied to Activision's 2023E EBITDA of $2.6B, standalone fair value = $54.6B. 25th percentile (17x) gives $44.2B; 75th (24x) gives $62.4B.",
                "MSFT's $68.7B sits 10% above the 75th percentile. Trading Comps alone can't justify it. The remaining $14.1B (= $68.7B − $54.6B) lives in Transaction Comps and synergy — Val Ch.2 decomposes it.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp(0.15)} className="flex items-center gap-3 flex-wrap">
              <Link href={ko ? "/deals/microsoft-activision" : "/en/deals/microsoft-activision"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT }}
              >
                🎮 {ko ? "Microsoft × Activision 딜 전체" : "Full Microsoft × Activision Deal →"}
              </Link>
            </motion.div>
          </motion.section>

          {/* ══ Section 9 — When Works / Fails ═══════════════════════════════════ */}
          <motion.section id="when" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "도구의 한계" : "Tool Boundaries"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Trading Comps가 통할 때와 통하지 않을 때" : "Where Trading Comps Works — and Where It Fails"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={fadeUp()} className="rounded-2xl p-5 border border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-emerald-900/10">
                <p className="text-[11px] font-black uppercase tracking-widest mb-2 text-emerald-700 dark:text-emerald-400">
                  {ko ? "✅ Trading Comps가 통할 때" : "✅ Trading Comps Works When"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>• {ko ? "성숙·다수의 상장 peer (Big Pharma, Consumer Staples, Industrials)" : "Mature, multiple public peers (Big Pharma, Consumer Staples, Industrials)"}</li>
                  <li>• {ko ? "안정적인 산업 margin profile" : "Stable industry margin profile"}</li>
                  <li>• {ko ? "유사한 growth profile (5–15% growth band)" : "Similar growth profile (5–15% growth band)"}</li>
                  <li>• {ko ? "유사한 cyclical 위치 (모두 mid-cycle)" : "Similar cyclical position (all mid-cycle)"}</li>
                  <li>• {ko ? "기존 deal 협상에서 sanity check 도구" : "Sanity check tool in any deal negotiation"}</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp(0.05)} className="rounded-2xl p-5 border border-rose-200/60 dark:border-rose-800/40 bg-rose-50/40 dark:bg-rose-900/10">
                <p className="text-[11px] font-black uppercase tracking-widest mb-2 text-rose-700 dark:text-rose-400">
                  {ko ? "❌ Trading Comps가 통하지 않을 때" : "❌ Trading Comps Fails When"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>• {ko ? "Unique business — 진짜 peer가 없음 (Tesla 2015, SpaceX)" : "Unique business — no real peers (Tesla 2015, SpaceX)"}</li>
                  <li>• {ko ? "Industry in transition (legacy media → streaming)" : "Industry in transition (legacy media → streaming)"}</li>
                  <li>• {ko ? "Hyper-growth — multiple이 trajectory를 못 잡음" : "Hyper-growth — multiples can't capture trajectory"}</li>
                  <li>• {ko ? "Distressed — peer는 healthy하니까 multiple 의미 없음" : "Distressed — peers are healthy, so multiples are meaningless"}</li>
                  <li>• {ko ? "Spinoff·private — comparable 자체가 부재" : "Spin-off / private — no comparables exist at all"}</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* ══ Section 10 — Pitfalls ═════════════════════════════════════════════ */}
          <motion.section id="pitfalls" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "흔한 함정" : "Common Pitfalls"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "6가지 — 그리고 어떻게 피하는가" : "Six Common Pitfalls — and How to Avoid Each"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PITFALLS.map((p, i) => (
                <motion.div key={p.n} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[14px] font-black flex-shrink-0" style={{ color: ACCENT }}>{p.n}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? p.titleKo : p.titleEn}</h3>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? p.bodyKo : p.bodyEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 11 — Cross-Link Boxes ═════════════════════════════════════ */}
          <motion.section id="cross-link" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Modelling Ch.2 CTA — amber */}
              <Link href={ko ? "/deal-101/trading-comps-build" : "/en/deal-101/trading-comps-build"}
                className="block rounded-3xl p-6 border-2 hover:opacity-95 transition-opacity relative overflow-hidden"
                style={{ borderColor: SIBLING, background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" }}
              >
                <div className="absolute top-0 right-0 text-[90px] leading-none opacity-10 -mr-2 -mt-2 select-none">💻</div>
                <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: SIBLING }}>
                  {ko ? "실제 빌드 → Modelling 시리즈" : "Build it → Modelling Series"}
                </p>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  {ko ? "Trading Comps Build (CIQ)" : "Trading Comps Build (CIQ)"}
                </h3>
                <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
                  {ko
                    ? "Capital IQ 스크리닝 6필터, 4시트 Excel 워크북, TEV 자동 계산, NTM 멀티플 pull pattern"
                    : "Six-filter Capital IQ screening, 4-sheet Excel workbook, TEV auto-calc, NTM multiple pull pattern"}
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold text-white" style={{ background: SIBLING }}>
                  Modelling Ch.2 →
                </span>
              </Link>

              {/* Val Ch.2 CTA — cyan lighter */}
              <Link href={ko ? "/deal-101/transaction-comps" : "/en/deal-101/transaction-comps"}
                className="block rounded-3xl p-6 border-2 hover:opacity-95 transition-opacity relative overflow-hidden"
                style={{ borderColor: ACCENT + "60", background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)" }}
              >
                <div className="absolute top-0 right-0 text-[90px] leading-none opacity-10 -mr-2 -mt-2 select-none">📐</div>
                <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  {ko ? "다음 챕터 → Valuation 시리즈" : "Next chapter → Valuation Series"}
                </p>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  {ko ? "Transaction Comps 선례 거래" : "Transaction Comps"}
                </h3>
                <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
                  {ko
                    ? "M&A 선례 거래 멀티플, 컨트롤 프리미엄 분해, Synergy backout, Strategic vs Financial 차이"
                    : "M&A precedent multiples, control premium decomposition, synergy backout, strategic vs financial buyer differential"}
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold text-white" style={{ background: ACCENT }}>
                  Valuation Ch.2 →
                </span>
              </Link>
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─────────────────────────────────────────────── */}
          <div className="flex justify-center -mt-8">
            <ShareButtons title={ko ? titleKo : titleEn} variant="mid" lang={lang} />
          </div>

          {/* ══ Section 12 — FAQ ═════════════════════════════════════════════════ */}
          <motion.section id="faq" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>FAQ</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* ══ Series Nav (bottom) ═════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
                {ko ? "Valuation 101 시리즈" : "Valuation 101 Series"}
              </h3>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              <Link href={ko ? "/deal-101/dcf-overview" : "/en/deal-101/dcf-overview"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-cyan-300 hover:text-cyan-600 transition-colors"
              >
                ← {ko ? "Ch.0 DCF란 무엇인가" : "Ch.0 What Is DCF?"}
              </Link>
              <Link href={ko ? "/deal-101/transaction-comps" : "/en/deal-101/transaction-comps"}
                className="text-[12px] px-4 py-2 rounded-full text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT }}
              >
                {ko ? "Ch.2 Transaction Comps →" : "Ch.2 Transaction Comps →"}
              </Link>
            </div>
          </motion.section>

          {/* ══ Sources ══════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <motion.h3 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-4">
              {ko ? "참고 자료" : "References"}
            </motion.h3>
            <motion.ol variants={stagger} className="space-y-2">
              {SOURCES.map((s) => (
                <motion.li key={s.id} variants={fadeUp()} className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed flex gap-2">
                  <span className="font-bold flex-shrink-0">[{s.id}]</span>
                  <span>{s.text}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* ── Share — bottom ──────────────────────────────────────────── */}
          <div className="flex justify-center pb-4">
            <ShareButtons title={ko ? titleKo : titleEn} variant="bottom" lang={lang} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
