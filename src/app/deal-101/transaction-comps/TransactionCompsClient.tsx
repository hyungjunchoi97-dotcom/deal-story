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
  { slug: "dcf-overview",       ch: 0, title: (ko: boolean) => ko ? "Ch.0 DCF"            : "Ch.0 DCF",             published: true  },
  { slug: "trading-comps",      ch: 1, title: (ko: boolean) => ko ? "Ch.1 Trading"        : "Ch.1 Trading",         published: true  },
  { slug: "transaction-comps",  ch: 2, title: (ko: boolean) => ko ? "Ch.2 Transaction"    : "Ch.2 Transaction",     published: true  },
  { slug: "football-field",     ch: 3, title: (ko: boolean) => ko ? "Ch.3 Football Field" : "Ch.3 Football Field",  published: false },
];
const THIS_CH = 2;

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

// ── Filtering Steps (8) ──────────────────────────────────────────────────────
const FILTER_STEPS = [
  {
    n: "01",
    icon: "🏷️",
    titleKo: "Target Industry",
    titleEn: "Target Industry",
    bodyKo: "동일 GICS 수준 (예: 50202010 Interactive Home Entertainment). 인접 산업은 별도 cohort로 분리.",
    bodyEn: "Same GICS level (e.g. 50202010 Interactive Home Entertainment). Adjacent industries split into a separate cohort.",
  },
  {
    n: "02",
    icon: "🌐",
    titleKo: "Geographic Scope",
    titleEn: "Geographic Scope",
    bodyKo: "Target country + buyer country. Cross-border 거래는 premium structure가 다르므로 별도 표시.",
    bodyEn: "Target country + buyer country. Cross-border deals carry different premium structures and must be flagged separately.",
  },
  {
    n: "03",
    icon: "📅",
    titleKo: "Time Period",
    titleEn: "Time Period",
    bodyKo: "3–5년 lookback이 표준. Cycle 한 번에 노출시키되, 10년 전 거래는 obsolete.",
    bodyEn: "3–5 year lookback is standard. Expose one full cycle, but 10-year-old deals are obsolete.",
  },
  {
    n: "04",
    icon: "📏",
    titleKo: "Deal Size Range",
    titleEn: "Deal Size Range",
    bodyKo: "Target EV의 0.5x ~ 2x. $1B target이 $50B mega-deal과 같은 premium을 받지 않음.",
    bodyEn: "0.5x to 2x of target EV. A $1B target doesn't earn the same premium as a $50B mega-deal.",
  },
  {
    n: "05",
    icon: "🔀",
    titleKo: "Deal Type",
    titleEn: "Deal Type",
    bodyKo: "Acquisition vs LBO vs JV — 분리. LBO는 financial sponsor premium, JV는 partial stake로 동일 framework 적용 불가.",
    bodyEn: "Acquisition vs LBO vs JV — split. LBO premium is financial-sponsor; JV is partial-stake; can't apply the same framework.",
  },
  {
    n: "06",
    icon: "💼",
    titleKo: "Bidder Type",
    titleEn: "Bidder Type",
    bodyKo: "Strategic vs Financial — 30–45% vs 20–30% 프리미엄 차이. 둘 cohort 분리해야 honest comparison.",
    bodyEn: "Strategic vs Financial — 30–45% vs 20–30% premium gap. Splitting cohorts is the only honest comparison.",
  },
  {
    n: "07",
    icon: "⚔️",
    titleKo: "Contested vs Negotiated",
    titleEn: "Contested vs Negotiated",
    bodyKo: "Hostile bid는 35–50% 프리미엄 (rejection risk premium). Negotiated는 25–35%. 별도 column 표시.",
    bodyEn: "Hostile bids carry 35–50% premium (rejection risk). Negotiated 25–35%. Tag as a separate column.",
  },
  {
    n: "08",
    icon: "✅",
    titleKo: "Status",
    titleEn: "Status",
    bodyKo: "Completed deals only. Announced-but-pulled deals는 별도 cohort (regulatory failure는 별도 lesson).",
    bodyEn: "Completed deals only. Announced-but-pulled deals get their own cohort (regulatory failures are a separate lesson).",
  },
];

// ── Premium by Buyer Type ────────────────────────────────────────────────────
const PREMIUM_TABLE = [
  { buyerKo: "Strategic",         buyerEn: "Strategic",         premium: "30–45%", whyKo: "Synergy 추출 능력",       whyEn: "Synergy extraction capability" },
  { buyerKo: "Financial (PE)",    buyerEn: "Financial (PE)",    premium: "20–30%", whyKo: "No operating synergy",     whyEn: "No operating synergy" },
  { buyerKo: "Hostile",           buyerEn: "Hostile",           premium: "35–50%", whyKo: "Higher rejection risk",    whyEn: "Higher rejection risk" },
  { buyerKo: "Negotiated",        buyerEn: "Negotiated",        premium: "25–35%", whyKo: "Board-blessed",            whyEn: "Board-blessed" },
  { buyerKo: "Take-private",      buyerEn: "Take-private",      premium: "15–25%", whyKo: "Lower benchmark price",    whyEn: "Lower benchmark price" },
];

// ── Premium by Buyer Type — Chart Data ───────────────────────────────────────
const PREMIUM_CHART = [
  { buyer: "Take-private",  median: 20, color: "#94a3b8" },
  { buyer: "Financial",     median: 25, color: "#0891b2" },
  { buyer: "Negotiated",    median: 30, color: "#0891b2" },
  { buyer: "Strategic",     median: 37, color: "#0e7490" },
  { buyer: "Hostile",       median: 42, color: "#f59e0b" },
];

// ── Data Sources ─────────────────────────────────────────────────────────────
const DATA_SOURCES = [
  {
    name: "Mergermarket",
    publisher: "(FT Group)",
    strengthKo: "narrative-rich · IB 표준 · 한국·아시아 deal 강함",
    strengthEn: "narrative-rich · IB standard · strong APAC coverage",
    icon: "📰",
  },
  {
    name: "Capital IQ M&A",
    publisher: "(S&P)",
    strengthKo: "quantitative-heavy · CIQ peer set과 통합",
    strengthEn: "quantitative-heavy · integrates with CIQ peer set",
    icon: "📊",
  },
  {
    name: "SDC Platinum",
    publisher: "(Refinitiv)",
    strengthKo: "역사적 deep · 1990년대 이전 deal도 coverage",
    strengthEn: "deep history · covers pre-1990 deals",
    icon: "🗄️",
  },
  {
    name: "Bloomberg BIM",
    publisher: "(B-Mt function)",
    strengthKo: "real-time · integrated price chart, premium calc",
    strengthEn: "real-time · integrated price chart, premium calc",
    icon: "💹",
  },
];

// ── Pitfalls ─────────────────────────────────────────────────────────────────
const PITFALLS = [
  { n: "01", titleKo: "Period mismatch",      titleEn: "Period mismatch",        bodyKo: "Cycle peak (2021 SaaS) vs trough (2022 H2) 거래를 한 cohort에 섞음. Median이 무의미.", bodyEn: "Mixing cycle-peak (2021 SaaS) and trough (2022 H2) deals in one cohort. Median becomes meaningless." },
  { n: "02", titleKo: "Geographic noise",      titleEn: "Geographic noise",       bodyKo: "US auction premiums와 Asia friendly take-privates를 같이 둠. 두 시장의 premium framework가 다름.", bodyEn: "Mixing US auction premiums with Asia friendly take-privates. Two markets, two premium frameworks." },
  { n: "03", titleKo: "Synergy guessing",      titleEn: "Synergy guessing",       bodyKo: "Announced synergy를 face value로 받아들임. 70%의 deal이 announced synergy 미달.", bodyEn: "Taking announced synergy at face value. 70% of deals fall short of announced synergies." },
  { n: "04", titleKo: "Hostile bias",          titleEn: "Hostile bias",           bodyKo: "Hostile bid를 filter 안 함. Negotiated peer set의 median을 끌어올려 가격 정당화에 잘못 사용.", bodyEn: "Failing to filter hostile bids. They drag the negotiated peer median upward and get misused to justify price." },
  { n: "05", titleKo: "Earnout treatment",      titleEn: "Earnout treatment",      bodyKo: "Contingent Value Rights (CVR)·earnout이 announced EV를 distort. NPV로 normalize 필요.", bodyEn: "Contingent Value Rights (CVRs) and earnouts distort announced EV. Normalize them to NPV." },
  { n: "06", titleKo: "Survivorship",           titleEn: "Survivorship",           bodyKo: "Failed deals (FTC blocked, financing fall-through)는 database에서 제외 → 'all deals close' bias.", bodyEn: "Failed deals (FTC blocked, financing fall-through) get scrubbed from databases → 'all deals close' bias." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Trading vs Transaction 멀티플 차이는 왜 발생하는가?" : "Why are M&A multiples higher than trading multiples?",
    a: (ko: boolean) => ko
      ? "단 하나의 단어: control. 상장사 시가 멀티플은 minority shareholder 관점이다 — 한 주를 사도 회사를 컨트롤하지 못한다. M&A는 100% 인수다. 즉 decision rights를 살 수 있다 — capital allocation, 경영진 교체, 자산 매각, 시너지 추출 — 모두 가능. 이 decision rights의 가치가 control premium (pure)이고, 평균 15–25%. 여기에 synergy premium 5–15%가 더해져 total transaction premium은 30–40%."
      : "One word: control. Public market multiples are minority-shareholder multiples — owning a share doesn't control the company. M&A is 100% acquisition: you buy decision rights — capital allocation, management change, asset sales, synergy extraction. The value of those decision rights is the pure control premium, averaging 15–25%. Add synergy premium of 5–15% and total transaction premium reaches 30–40%.",
  },
  {
    q: (ko: boolean) => ko ? "몇 개 거래가 필요한가?" : "How many precedent deals is enough?",
    a: (ko: boolean) => ko
      ? "10–15개가 표준. Trading Comps (8–12)보다 살짝 더 — strategic vs financial vs hostile cohort 분리 시 각 cohort에 4–5개씩 들어가야 의미 있는 median. 5개 이하면 anecdotal data. 20개 이상이면 cohort filter가 너무 loose. Mergermarket·CIQ M&A에서 industry × geography × size로 좁히면 자연스럽게 10–15개로 수렴."
      : "10–15 is standard — slightly more than Trading Comps (8–12). When you split strategic / financial / hostile cohorts, each needs 4–5 deals for a meaningful median. Below 5 it's anecdotal; above 20 the cohort filter is too loose. Mergermarket / CIQ M&A funnels (industry × geography × size) naturally converge on 10–15.",
  },
  {
    q: (ko: boolean) => ko ? "Time period는 얼마나 잡나?" : "How long should the time period be?",
    a: (ko: boolean) => ko
      ? "3–5년이 표준. 한 cycle을 노출시키되 obsolete 거래를 피한다. 2024년 deal evaluation이면 2019–2024가 reasonable window — COVID shock과 회복을 모두 포함. 10년 lookback (2014–2024)은 너무 wide — 멀티플 환경, 금리, M&A appetite 모두 크게 바뀜. 단, sector specific: cyclical industry (steel, oil)는 7–10년으로 full cycle 노출 필요."
      : "3–5 years is standard. Cover one cycle but avoid obsolete deals. For a 2024 evaluation, 2019–2024 is reasonable — covers both COVID shock and recovery. A 10-year lookback (2014–2024) is too wide — multiple environment, rates, and M&A appetite have shifted materially. Sector-specific: cyclicals (steel, oil) need 7–10 years for full cycle exposure.",
  },
  {
    q: (ko: boolean) => ko ? "Synergy backout이 정확한가?" : "Is synergy backout actually accurate?",
    a: (ko: boolean) => ko
      ? "Approximation이지만 ignoring 보다는 훨씬 낫다. Announced synergy의 70% realization rate · 3년 phase-in · buyer WACC discount — 이 세 가정으로 NPV를 계산하면 sensitive하지만 ballpark을 잡을 수 있다. 더 정확한 방법은 buyer의 announced synergy를 그대로 쓰지 않고 이전 deal에서 realization rate를 lookup해서 보정 — 일반적으로 cost synergy 75%, revenue synergy 50% 정도가 long-run realization."
      : "It's an approximation, but far better than ignoring synergy. NPV with announced synergy × 70% realization, 3-year phase-in, and buyer's WACC gives a sensitive but reasonable ballpark. A sharper method: don't trust the buyer's announced synergy at face value — look up realization rates from prior deals. Long-run averages run ~75% on cost synergy, ~50% on revenue synergy.",
  },
  {
    q: (ko: boolean) => ko ? "Hostile takeover bid는 어떻게 처리하나?" : "How do you handle hostile takeover bids?",
    a: (ko: boolean) => ko
      ? "별도 cohort로 분리. Hostile bid는 평균 35–50% 프리미엄 — rejection risk premium · poison pill 회피 · 경쟁 bidder 가능성 모두 반영. 이를 negotiated peer set에 섞으면 median을 인위적으로 올려 가격 정당화에 잘못 쓰임. 단, target board가 'go-shop' 또는 'public auction'을 시작하면 사실상 hostile 환경에서 negotiated로 전환된 케이스 — 이런 hybrid는 senior judgment로 분류."
      : "Split them into a separate cohort. Hostile bids average 35–50% premium — reflecting rejection risk, poison-pill avoidance, and the prospect of competing bidders. Mixing them into negotiated peers artificially lifts the median. Caveat: if the target board runs a 'go-shop' or public auction, the deal effectively transitions from hostile to negotiated — classify these hybrids by senior judgment.",
  },
];

// ── Sources ──────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Rosenbaum, J. & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). Wiley." },
  { id: 2, text: "Bruner, R. F. (2004). Applied Mergers and Acquisitions. Wiley Finance." },
  { id: 3, text: "Damodaran, A. (2008). Acquirer's Anonymous: Seven Steps Back to Sobriety. NYU Stern Working Paper." },
  { id: 4, text: "Mergermarket. (2024). M&A Trend Report — Premium Analysis by Buyer Type." },
  { id: 5, text: "S&P Capital IQ Pro. (2024). M&A Precedent Transactions Database Methodology." },
  { id: 6, text: "Microsoft Corporation. (2022). Form 8-K & Proxy Statement — Activision Blizzard Acquisition." },
];

// ── Main ─────────────────────────────────────────────────────────────────────
export default function TransactionCompsClient({ lang }: Props) {
  const ko = lang === "ko";

  const titleKo = "Valuation 101 Ch.2 — Transaction Comps 선례 거래";
  const titleEn = "Valuation 101 Ch.2 — Transaction Comps";
  const subKo = "M&A 선례거래 멀티플 — Control Premium 분해, Synergy Backout, Strategic vs Financial";
  const subEn = "M&A precedent multiples — control premium decomposition, synergy backout, strategic vs financial";
  const tagsKo = ["Transaction Comps", "Control Premium", "Synergy", "Strategic", "Financial", "Mergermarket"];
  const tagsEn = ["Transaction Comps", "Control Premium", "Synergy", "Strategic", "Financial", "Mergermarket"];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-cyan-600 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-cyan-600 transition-colors">{ko ? "딜 101" : "Deal 101"}</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Transaction Comps" : "Transaction Comps"}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                Valuation 101
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>Ch.2</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{ko ? "16분 읽기" : "16 min read"}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? titleKo : titleEn}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? subKo : subEn}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mt-4"
            >
              {(ko ? tagsKo : tagsEn).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link href="/deal-101/transaction-comps"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/transaction-comps"
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

          {/* ══ Section 1 — Hook ══════════════════════════════════════════════════ */}
          <motion.section id="opening" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "왜 Transaction Comps인가" : "Why Transaction Comps"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Trading Comps가 못 설명하는 $14B는 어디에 있나" : "Where Do the $14B Trading Comps Can't Explain Live?"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Val Ch.1에서 본 대로, Activision의 standalone fair value는 peer median 21x × $2.6B EBITDA = $54.6B. MSFT가 낸 가격은 $68.7B. 차이는 $14.1B — 26% 프리미엄. 이 $14B는 Trading Comps에서 찾을 수 없다. 답은 M&A 시장의 또 다른 데이터셋에 있다 — 선례 거래.",
                "M&A 멀티플은 항상 Trading 멀티플보다 높다 — 이건 데이터의 사실이지 우연이 아니다. 1990–2024 동안 글로벌 M&A의 평균 premium은 30–40% 사이에서 안정적으로 머물렀다. 이 프리미엄이 두 부분으로 나뉜다: pure control premium (15–25%)과 synergy premium (5–15%). Transaction Comps는 이 두 컴포넌트를 시장에서 직접 관찰할 수 있게 해준다.",
                "이 챕터는 Control Premium의 분해, Strategic vs Financial 차이, Synergy Backout의 실무, 그리고 reference date의 함정을 다룬다. Val Ch.1의 standalone 좌표 위에 control과 synergy 좌표를 쌓아 final deal price의 좌표계를 완성한다.",
              ] : [
                "As Val Ch.1 showed, Activision's standalone fair value was peer median 21x × $2.6B EBITDA = $54.6B. MSFT paid $68.7B. Gap: $14.1B — 26% premium. You won't find this $14B in Trading Comps. The answer lives in a different dataset — M&A precedents.",
                "M&A multiples are always higher than trading multiples — that's a data fact, not a coincidence. Across 1990–2024, global M&A premiums have stayed remarkably stable at 30–40%. That premium decomposes into two parts: pure control premium (15–25%) and synergy premium (5–15%). Transaction Comps let you observe both components directly in the market.",
                "This chapter covers control premium decomposition, the strategic vs financial split, the practitioner mechanics of synergy backout, and reference-date traps. On top of Val Ch.1's standalone coordinate, control and synergy stack to complete the coordinate system for final deal price.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 2 — What Are Transaction Comps ════════════════════════════ */}
          <motion.section id="what" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "정의" : "Definition"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "과거 M&A에서 인수자가 지불한 멀티플" : "The Multiples Acquirers Actually Paid in Past M&A"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Transaction Comps는 'M&A 거래에서 인수자가 실제로 지불한 EV/Revenue, EV/EBITDA, 또는 price/share' 멀티플이다. Trading Comps와의 결정적 차이: Transaction은 100% 인수 — control rights + synergy를 모두 포함한 가격. 그래서 항상 Trading보다 높다."
                  : "Transaction Comps are 'EV/Revenue, EV/EBITDA, or price/share multiples that acquirers actually paid' in M&A. The decisive difference from Trading Comps: Transaction Comps are 100% acquisitions — pricing in both control rights and synergy. That's why they're always higher than Trading."}
              </motion.p>
              <motion.p variants={fadeUp(0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Val Ch.1에서 본 Trading은 standalone의 좌표를 준다. Transaction은 control + synergy를 포함한 좌표 — 즉 deal context에서 정당화되는 가격의 상한선."
                  : "Trading from Val Ch.1 gives the standalone coordinate. Transaction gives the control + synergy coordinate — the ceiling of what a deal context can justify."}
              </motion.p>
            </div>

            {/* Cross-link to Modelling Ch.3 — prominent amber CTA */}
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
                    ? "Mergermarket 8-단계 필터, Premium 분해 Excel template, Synergy backout NPV 모델, Strategic vs Financial cohort split"
                    : "Eight-filter Mergermarket workflow, premium decomposition Excel template, synergy backout NPV model, strategic vs financial cohort split"}
                </p>
              </div>
              <Link href={ko ? "/deal-101/transaction-comps-build" : "/en/deal-101/transaction-comps-build"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ background: SIBLING }}
              >
                {ko ? "Modelling Ch.3 →" : "Modelling Ch.3 →"}
              </Link>
            </motion.div>
          </motion.section>

          {/* ══ Section 3 — Control Premium Decomposition ════════════════════════ */}
          <motion.section id="decompose" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "핵심 통찰" : "Core Insight"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Control Premium 분해 — Synergy + Pure Control" : "Control Premium Decomposition — Synergy + Pure Control"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-2xl p-6 border-2 mb-6" style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "분해 공식" : "Decomposition Formula"}
              </p>
              <div className="space-y-4 py-2">
                <p className="font-mono text-[14px] sm:text-[15px] font-bold text-gray-900 dark:text-gray-100 text-center">
                  Transaction Premium = Standalone × (1 + Premium %)
                </p>
                <div className="border-t border-cyan-300 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-2 text-center" style={{ color: ACCENT }}>↓ 분해 ↓</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-gray-900/60 rounded-lg p-3 border border-cyan-200">
                      <p className="font-bold text-[12px] mb-1" style={{ color: ACCENT }}>{ko ? "Synergy Premium" : "Synergy Premium"}</p>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 mb-1">{ko ? "Cost + Revenue Synergy의 NPV" : "NPV of cost + revenue synergies"}</p>
                      <p className="font-mono text-[11px] font-bold" style={{ color: ACCENT }}>{ko ? "보통 5–15%" : "Typically 5–15%"}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-900/60 rounded-lg p-3 border border-cyan-200">
                      <p className="font-bold text-[12px] mb-1" style={{ color: ACCENT }}>{ko ? "Pure Control Premium" : "Pure Control Premium"}</p>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 mb-1">{ko ? "Decision rights의 가치" : "Value of decision rights"}</p>
                      <p className="font-mono text-[11px] font-bold" style={{ color: ACCENT }}>{ko ? "보통 15–25%" : "Typically 15–25%"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Total M&A 프리미엄 평균 30–40%는 두 컴포넌트의 합이다. Pure Control은 'decision rights를 100% 갖는 것의 가치' — capital allocation, 경영진 교체, divestiture 결정, 자산 매각. 이는 acquirer의 정체와 무관하게 모든 M&A에 존재한다.",
                "Synergy Premium은 acquirer-specific. Strategic buyer는 operating synergy를 추출할 수 있고 (cost cut, cross-sell, supply chain), Financial buyer (PE)는 operating synergy가 없으니 거의 zero. 그래서 Strategic 평균 premium 30–45% vs Financial 20–30% 차이가 발생한다.",
                "실무에서 분해는 이렇게 한다: (1) Transaction Comps에서 Strategic deals의 median premium 찾기, (2) Announced synergy의 NPV 계산해서 빼기 = pure control. Activision 케이스: total premium 26% → synergy NPV ~$15B (premium의 ~22%) → pure control ~4%. 즉 MSFT는 거의 pure control 없이 synergy만 사고 있었다."
              ] : [
                "The 30–40% average total M&A premium is the sum of two components. Pure Control = 'the value of holding 100% decision rights' — capital allocation, management change, divestiture decisions, asset sales. It exists in every M&A regardless of buyer identity.",
                "Synergy Premium is acquirer-specific. Strategic buyers can extract operating synergies (cost cut, cross-sell, supply chain); financial buyers (PE) get almost none. That's the source of the 30–45% Strategic vs 20–30% Financial gap.",
                "Decomposition in practice: (1) find the median premium of Strategic deals in Transaction Comps, (2) subtract NPV of announced synergies = pure control. Activision case: 26% total premium → ~$15B NPV synergy (~22% of premium) → pure control ~4%. MSFT was buying synergy with almost no pure control premium.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 4 — 8-Step Filter ═════════════════════════════════════════ */}
          <motion.section id="filter" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Filtering 프로세스" : "Filtering Process"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "8-단계 Top-Down 워크플로우" : "8-Step Top-Down Workflow"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FILTER_STEPS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUp(i * 0.04)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="text-xl mb-0.5" aria-hidden>{s.icon}</div>
                      <p className="font-mono text-[10px] font-black" style={{ color: ACCENT }}>{s.n}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? s.titleKo : s.titleEn}</h3>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? s.bodyKo : s.bodyEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 5 — Strategic vs Financial ═══════════════════════════════ */}
          <motion.section id="strategic-financial" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Strategic vs Financial" : "Strategic vs Financial"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Buyer type별 프리미엄 차이" : "Premium Differs Sharply by Buyer Type"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">{ko ? "Buyer 유형" : "Bidder Type"}</th>
                    <th className="text-left py-3 px-4 font-bold" style={{ color: ACCENT }}>{ko ? "평균 프리미엄" : "Avg Premium"}</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-600 dark:text-gray-400">{ko ? "이유" : "Why"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {PREMIUM_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">{ko ? row.buyerKo : row.buyerEn}</td>
                      <td className="py-3 px-4 font-mono font-bold" style={{ color: ACCENT }}>{row.premium}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{ko ? row.whyKo : row.whyEn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Premium by Buyer Type — Median (글로벌 1990-2024)" : "Premium by Buyer Type — Median (Global 1990-2024)"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "Hostile 42%가 가장 높음 — Strategic 37%, Financial 25%, Take-private 20% 순" : "Hostile (42%) highest — followed by Strategic 37%, Financial 25%, Take-private 20%"}
              </p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={PREMIUM_CHART} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="buyer" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} domain={[0, 50]} width={42} />
                  <Tooltip
                    formatter={((v: number) => [`${v}%`, ko ? "Median Premium" : "Median Premium"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <ReferenceLine y={30} stroke="#94a3b8" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: ko ? "글로벌 평균 30%" : "Global avg 30%", fontSize: 10, fill: "#64748b", position: "insideTopRight" }} />
                  <Bar dataKey="median" radius={[4, 4, 0, 0]}>
                    {PREMIUM_CHART.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.section>

          {/* ══ Section 6 — Synergy Backout ═══════════════════════════════════════ */}
          <motion.section id="synergy" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Synergy Backout" : "Synergy Backout"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Pure Control Multiple을 추출하는 방법" : "Extracting the Pure Control Multiple"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Strategic deal의 transaction multiple에는 synergy가 묻어 있다. Synergy backout은 이를 분리해서 'pure control 단독의 transaction multiple'을 얻는 작업이다. 이 깨끗한 멀티플로 다음 deal을 비교해야 honest comparison이 된다."
                  : "Strategic deal multiples have synergy baked in. Synergy backout strips that out to produce a 'pure control transaction multiple'. Only with that clean multiple can you make an honest comparison against the next deal."}
              </motion.p>
            </div>

            <motion.div variants={fadeUp(0.1)} className="rounded-2xl border-2 p-5" style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}>
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "실무 4-단계 워크플로우" : "Practitioner 4-Step Workflow"}
              </p>
              <ol className="space-y-3 text-[12px] text-gray-700 dark:text-gray-700 leading-relaxed">
                <li>
                  <span className="font-bold" style={{ color: ACCENT }}>1.</span>{" "}
                  {ko
                    ? <>인수자 announcement (8-K, deal call, press release)에서 expected synergy 추출 — Cost $Xm + Revenue $Ym (별도 카테고리화).</>
                    : <>Pull expected synergies from the acquirer's announcement (8-K, deal call, press release) — categorize as Cost $Xm and Revenue $Ym separately.</>}
                </li>
                <li>
                  <span className="font-bold" style={{ color: ACCENT }}>2.</span>{" "}
                  {ko
                    ? <>NPV of synergies @ buyer WACC = Synergy Value. Phase-in 적용 (Y1: 25%, Y2: 50%, Y3+: 100%).</>
                    : <>NPV of synergies @ buyer WACC = Synergy Value. Apply phase-in (Y1: 25%, Y2: 50%, Y3+: 100%).</>}
                </li>
                <li>
                  <span className="font-bold" style={{ color: ACCENT }}>3.</span>{" "}
                  {ko
                    ? <>Standalone EBITDA × Transaction Multiple <strong>−</strong> Synergy Value = <strong>Pure Control TEV</strong>.</>
                    : <>Standalone EBITDA × Transaction Multiple <strong>−</strong> Synergy Value = <strong>Pure Control TEV</strong>.</>}
                </li>
                <li>
                  <span className="font-bold" style={{ color: ACCENT }}>4.</span>{" "}
                  {ko
                    ? <>Pure Control TEV ÷ Standalone EBITDA = <strong>Pure Control Multiple</strong> → 다음 deal 비교에 사용.</>
                    : <>Pure Control TEV ÷ Standalone EBITDA = <strong>Pure Control Multiple</strong> → use this for next-deal comparison.</>}
                </li>
              </ol>
            </motion.div>
          </motion.section>

          {/* ══ Section 7 — Reference Date Conventions ════════════════════════════ */}
          <motion.section id="ref-date" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Reference Date Conventions" : "Reference Date Conventions"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "어느 날의 가격을 보느냐가 Premium의 크기를 결정" : "Which Date's Price You Use Determines the Premium"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="space-y-3">
              <motion.div variants={fadeUp()} className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
                <p className="font-mono text-[12px] font-black mb-1" style={{ color: ACCENT }}>{ko ? "1. Announcement Date" : "1. Announcement Date"}</p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? "가장 일반적. Multiple은 이 시점의 LTM 기준으로 계산. EV는 announced price + net debt." : "Most common. Multiples computed against LTM as of this date. EV = announced price + net debt."}</p>
              </motion.div>
              <motion.div variants={fadeUp(0.04)} className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
                <p className="font-mono text-[12px] font-black mb-1" style={{ color: ACCENT }}>{ko ? "2. Pre-Announcement Reference (보통 1-month VWAP)" : "2. Pre-Announcement Reference (typically 1-month VWAP)"}</p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Premium 계산용. Announcement 전 1일·1주·1개월·3개월 가격을 reference. IB 표준은 1-month VWAP — leak 가능성 회피. 'Premium to unaffected price'라고 표시."
                    : "Used for premium calculation. Reference prices at -1d, -1w, -1m, -3m before announcement. The IB standard is 1-month VWAP — to neutralize leakage. Labeled 'premium to unaffected price'."}
                </p>
              </motion.div>
              <motion.div variants={fadeUp(0.08)} className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
                <p className="font-mono text-[12px] font-black mb-1" style={{ color: ACCENT }}>{ko ? "3. Effective Date" : "3. Effective Date"}</p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? "Closing 시점, 실제 지불 가격. Earnout·CVR 있으면 announced와 effective 차이 발생." : "Closing date — actual paid price. Earnouts and CVRs introduce gaps between announced and effective."}</p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* ══ Section 8 — Data Sources Preview ══════════════════════════════════ */}
          <motion.section id="sources" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Data Sources Preview" : "Data Sources Preview"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "4개 데이터베이스 — 각각의 strength" : "Four Databases — Each With a Strength"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {DATA_SOURCES.map((s, i) => (
                <motion.div key={s.name} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div className="flex-1">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{s.name} <span className="text-[10px] text-gray-400 font-medium">{s.publisher}</span></p>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed mt-1">{ko ? s.strengthKo : s.strengthEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-xl p-4 border" style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}>
              <p className="text-[12px] text-gray-700 leading-relaxed">
                {ko
                  ? <><strong style={{ color: ACCENT }}>→</strong> 각 도구의 strength/weakness, Excel template, 8-단계 필터 실전은 <Link href={ko ? "/deal-101/transaction-comps-build" : "/en/deal-101/transaction-comps-build"} className="font-bold underline" style={{ color: SIBLING }}>Modelling Ch.3</Link>에서 자세히 다룬다.</>
                  : <><strong style={{ color: ACCENT }}>→</strong> Detailed strengths/weaknesses, Excel templates, and the 8-step filter in practice are covered in <Link href={ko ? "/deal-101/transaction-comps-build" : "/en/deal-101/transaction-comps-build"} className="font-bold underline" style={{ color: SIBLING }}>Modelling Ch.3</Link>.</>}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 9 — Real Case (Microsoft × Activision) ═══════════════════ */}
          <motion.section id="case" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "실전 케이스" : "Real Case"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Microsoft × Activision Transaction Logic" : "Microsoft × Activision Transaction Logic"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Standalone (Trading Comps): $54B (Val Ch.1). Microsoft offer: $68.7B = peer median 대비 26% 프리미엄. 이 26%를 분해해 보자.",
                "Microsoft announced synergy: Cost ~$1B+ (Gaming infrastructure consolidation) + Revenue ~$2B+ (Game Pass subscription conversion, mobile catalog integration). Phase-in 후 NPV @ MSFT WACC 8% = 약 $15B.",
                "분해 결과: ($68.7B − $54B − $15B) ÷ $54B = −$0.3B / $54B ≈ −0.6%. 즉 Pure Control Premium은 거의 0이거나 negative. Reading: MSFT는 control rights 자체에는 거의 premium을 내지 않았다 — 모든 premium이 synergy expectation에서 나왔다.",
                "두 가지 해석. (a) MSFT가 정확히 synergy의 fair value만큼 냈다 = optimal bid. (b) Synergy realization < announced일 가능성 = MSFT overpaid. 어느 쪽인지는 5년 후 Game Pass·mobile ARPU 데이터로 판명된다. 이 분석이 fairness opinion의 마지막 페이지에 항상 들어간다."
              ] : [
                "Standalone (Trading Comps): $54B (Val Ch.1). Microsoft offer: $68.7B = 26% premium to peer median. Let's decompose those 26%.",
                "MSFT announced synergy: ~$1B+ cost (Gaming infrastructure consolidation) + ~$2B+ revenue (Game Pass subscription conversion, mobile catalog integration). After phase-in, NPV @ MSFT WACC 8% ≈ $15B.",
                "Decomposition: ($68.7B − $54B − $15B) / $54B = −$0.3B / $54B ≈ −0.6%. Pure Control Premium is roughly zero — possibly negative. Reading: MSFT paid almost no premium for control rights themselves — every dollar of premium came from synergy expectation.",
                "Two interpretations. (a) MSFT priced synergy exactly at fair value — optimal bid. (b) Synergy realization undershoots announcement — MSFT overpaid. Which one is true gets settled by 5-year Game Pass and mobile ARPU data. This analysis is always the last page of the fairness opinion.",
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
            <motion.div variants={fadeUp()} className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Modelling Ch.3 — amber primary */}
              <Link href={ko ? "/deal-101/transaction-comps-build" : "/en/deal-101/transaction-comps-build"}
                className="block rounded-3xl p-5 border-2 hover:opacity-95 transition-opacity relative overflow-hidden md:col-span-2"
                style={{ borderColor: SIBLING, background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" }}
              >
                <div className="absolute top-0 right-0 text-[80px] leading-none opacity-10 -mr-2 -mt-2 select-none">💻</div>
                <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: SIBLING }}>
                  {ko ? "실제 빌드 → Modelling 시리즈" : "Build it → Modelling Series"}
                </p>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                  {ko ? "Transaction Comps Build (Mergermarket)" : "Transaction Comps Build (Mergermarket)"}
                </h3>
                <p className="text-[12px] text-gray-700 leading-relaxed mb-3">
                  {ko
                    ? "Mergermarket 8-단계 필터, Premium 분해, Synergy backout NPV, Strategic vs Financial cohort 분리"
                    : "Mergermarket 8-step filter, premium decomposition, synergy backout NPV, strategic vs financial cohort split"}
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold text-white" style={{ background: SIBLING }}>
                  Modelling Ch.3 →
                </span>
              </Link>

              {/* Back to Val Ch.1 */}
              <Link href={ko ? "/deal-101/trading-comps" : "/en/deal-101/trading-comps"}
                className="block rounded-3xl p-5 border-2 hover:opacity-95 transition-opacity relative overflow-hidden"
                style={{ borderColor: ACCENT + "60", background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)" }}
              >
                <div className="absolute top-0 right-0 text-[60px] leading-none opacity-10 -mr-1 -mt-1 select-none">📐</div>
                <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  {ko ? "← 이전 챕터" : "← Previous"}
                </p>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                  {ko ? "Val Ch.1 Trading Comps" : "Val Ch.1 Trading Comps"}
                </h3>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  {ko ? "Standalone 좌표" : "Standalone coordinate"}
                </p>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="mt-4 rounded-xl p-4 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30">
              <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                <strong className="text-gray-700 dark:text-gray-300">{ko ? "다음 →" : "Next →"}</strong>{" "}
                {ko
                  ? "Val Ch.3 Football Field — Trading + Transaction + DCF를 한 차트에 통합하는 IB·PE 표준 (Coming Soon)"
                  : "Val Ch.3 Football Field — integrating Trading + Transaction + DCF in one chart, the IB/PE standard (Coming Soon)"}
              </p>
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
              <Link href={ko ? "/deal-101/trading-comps" : "/en/deal-101/trading-comps"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-cyan-300 hover:text-cyan-600 transition-colors"
              >
                ← {ko ? "Ch.1 Trading Comps" : "Ch.1 Trading Comps"}
              </Link>
              <Link href={ko ? "/deal-101" : "/en/deal-101"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-cyan-300 hover:text-cyan-600 transition-colors"
              >
                {ko ? "딜 101 카탈로그 →" : "Deal 101 Catalog →"}
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
