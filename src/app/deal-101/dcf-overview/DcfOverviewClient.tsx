"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine, Legend,
  LineChart, Line,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#0891b2"; // cyan-600
const ACCENT_LIGHT = "#ecfeff"; // cyan-50

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
  { slug: "dcf-overview",  ch: 0, title: (ko: boolean) => ko ? "Ch.0 DCF란"        : "Ch.0 What Is DCF?",  published: true  },
  { slug: "dcf-fcf",       ch: 1, title: (ko: boolean) => ko ? "Ch.1 FCF"           : "Ch.1 FCF",            published: false },
  { slug: "dcf-wacc",      ch: 2, title: (ko: boolean) => ko ? "Ch.2 WACC"          : "Ch.2 WACC",           published: false },
  { slug: "dcf-terminal",  ch: 3, title: (ko: boolean) => ko ? "Ch.3 Terminal"      : "Ch.3 Terminal",       published: false },
  { slug: "dcf-sensitivity", ch: 4, title: (ko: boolean) => ko ? "Ch.4 민감도"     : "Ch.4 Sensitivity",    published: false },
  { slug: "dcf-limits",    ch: 5, title: (ko: boolean) => ko ? "Ch.5 한계"         : "Ch.5 Limits",         published: false },
];
const THIS_CH = 0;

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
              <span
                key={ch.slug}
                className="text-[11px] px-3 py-1.5 rounded-full font-medium text-gray-300 dark:text-gray-600 bg-gray-50 dark:bg-gray-900 cursor-not-allowed"
              >
                {ch.title(ko)} · {ko ? "준비 중" : "Soon"}
              </span>
            );
          }
          return (
            <Link
              key={ch.slug}
              href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                isCurrent
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
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

// ── Pillar Cards Data ─────────────────────────────────────────────────────────
const PILLARS = [
  {
    id: "fcf",
    icon: "💵",
    title: (ko: boolean) => ko ? "Free Cash Flow (FCF)" : "Free Cash Flow (FCF)",
    desc: (ko: boolean) => ko
      ? "회사가 자본 제공자들에게 돌려줄 수 있는 진짜 현금. 회계이익(Net Income)이 아니라, 운영자산을 유지하고 성장시킨 뒤 남는 현금이다."
      : "The real cash a business can return to capital providers. Not accounting net income — what remains after maintaining and growing the operating asset base.",
    formula: "UFCF = EBIT(1−t) + D&A − Capex − ΔNWC",
    detail: (ko: boolean) => ko ? "Ch.1에서 자세히" : "Deep dive in Ch.1",
    color: "#0891b2",
  },
  {
    id: "wacc",
    icon: "📉",
    title: "WACC",
    desc: (ko: boolean) => ko
      ? "주주와 채권자가 요구하는 가중평균 수익률. 미래 현금흐름을 현재가치로 할인하는 비율 — 회사의 자본 비용이자, 시장이 매기는 위험 가격."
      : "The weighted average return demanded by debt and equity holders. The rate at which future cash flows are discounted — the firm's cost of capital and the market's price of risk.",
    formula: "Ke = Rf + β × ERP",
    detail: (ko: boolean) => ko ? "Ch.2에서 자세히" : "Deep dive in Ch.2",
    color: "#6366f1",
  },
  {
    id: "tv",
    icon: "♾️",
    title: (ko: boolean) => ko ? "Terminal Value" : "Terminal Value",
    desc: (ko: boolean) => ko
      ? "Forecast 기간 이후의 모든 미래 가치를 하나의 숫자로 압축한 것. 일반적으로 enterprise value의 60–80%를 차지하기 때문에, DCF의 가장 민감한 가정이다."
      : "All value beyond the forecast horizon compressed into a single number. Typically 60–80% of enterprise value — making it DCF's most sensitive assumption.",
    formula: "TV = FCF(n+1) / (WACC − g)",
    detail: (ko: boolean) => ko ? "Ch.3에서 자세히" : "Deep dive in Ch.3",
    color: "#8b5cf6",
  },
];

// ── Why DCF Cards ─────────────────────────────────────────────────────────────
const WHY_DCF = [
  {
    n: "01",
    title: (ko: boolean) => ko ? "절대가치 (Intrinsic Value)" : "Intrinsic Value",
    body: (ko: boolean) => ko
      ? "Peer 멀티플 없이도 가치를 추정할 수 있다. 신사업·스타트업·스핀오프·private company — comp가 부재한 모든 케이스에서 DCF는 유일한 도구다."
      : "Value can be estimated without peer multiples. New ventures, startups, spin-offs, private companies — for any situation lacking comparables, DCF is the only tool that works.",
  },
  {
    n: "02",
    title: (ko: boolean) => ko ? "시나리오 분석의 토대" : "Scenario Analysis Foundation",
    body: (ko: boolean) => ko
      ? "Bull / Base / Bear 시나리오를 명시적인 가정으로 분리할 수 있다. 어떤 가정이 가치를 가장 크게 움직이는지 — sensitivity table이 그 답을 준다."
      : "Bull / Base / Bear scenarios can be separated into explicit assumptions. Which assumption moves value the most — the sensitivity table answers that.",
  },
  {
    n: "03",
    title: (ko: boolean) => ko ? "컨트롤 프리미엄의 정량화" : "Quantifying the Control Premium",
    body: (ko: boolean) => ko
      ? "시너지 → 증분 FCF → 현재가치. M&A 프리미엄(시장가 대비 30–40%)을 정당화하는 유일한 방법은 시너지가 만드는 incremental cash flow의 PV다."
      : "Synergy → incremental FCF → present value. The only way to justify the 30–40% M&A premium over market price is to discount the incremental cash flow synergy creates.",
  },
  {
    n: "04",
    title: (ko: boolean) => ko ? "이사회·딜팀의 공용 언어" : "The Boardroom's Lingua Franca",
    body: (ko: boolean) => ko
      ? "모든 fairness opinion은 DCF를 포함한다. 이사회에 가격을 정당화하려면 절대가치 기반 분석이 반드시 필요하다 — 시장 멀티플만으로는 fiduciary duty를 충족할 수 없다."
      : "Every fairness opinion includes a DCF. Justifying a price to the board requires an intrinsic-value analysis — market multiples alone don't satisfy fiduciary duty.",
  },
];

// ── Absolute vs Relative ─────────────────────────────────────────────────────
const ABS_VS_REL = [
  {
    dim: (ko: boolean) => ko ? "기반" : "Basis",
    dcf: (ko: boolean) => ko ? "회사의 fundamentals" : "Company fundamentals",
    comps: (ko: boolean) => ko ? "시장의 peer 멀티플" : "Market peer multiples",
  },
  {
    dim: (ko: boolean) => ko ? "가정 통제" : "Assumption Control",
    dcf: (ko: boolean) => ko ? "본인이 가정을 명시" : "You own the assumptions",
    comps: (ko: boolean) => ko ? "시장에 위임" : "Delegated to the market",
  },
  {
    dim: (ko: boolean) => ko ? "신뢰도" : "Reliability",
    dcf: (ko: boolean) => ko ? "가정만큼 좋음 (GIGO)" : "Only as good as the inputs (GIGO)",
    comps: (ko: boolean) => ko ? "시장이 합리적일 때만" : "Only when markets are rational",
  },
  {
    dim: (ko: boolean) => ko ? "사용 시점" : "When Used",
    dcf: (ko: boolean) => ko ? "거의 모든 케이스 (point estimate)" : "Almost every case (point estimate)",
    comps: (ko: boolean) => ko ? "항상 cross-check" : "Always as cross-check",
  },
  {
    dim: (ko: boolean) => ko ? "한계" : "Limitation",
    dcf: (ko: boolean) => ko ? "TV 의존도, long-horizon uncertainty" : "TV dependence, long-horizon uncertainty",
    comps: (ko: boolean) => ko ? "Peer가 없으면 무력" : "Useless without true peers",
  },
];

// ── TV % Chart Data (TV as share of EV across industries) ────────────────────
const TV_SHARE = [
  { sectorKo: "유틸리티", sectorEn: "Utilities", pct: 55, color: "#94a3b8" },
  { sectorKo: "성숙 SaaS", sectorEn: "Mature SaaS", pct: 65, color: "#0ea5e9" },
  { sectorKo: "헬스케어", sectorEn: "Healthcare", pct: 70, color: "#0891b2" },
  { sectorKo: "소비재", sectorEn: "Consumer", pct: 72, color: "#06b6d4" },
  { sectorKo: "산업재", sectorEn: "Industrials", pct: 78, color: "#22d3ee" },
  { sectorKo: "성장 테크", sectorEn: "Growth Tech", pct: 88, color: "#a855f7" },
  { sectorKo: "초고성장", sectorEn: "Hyper-growth", pct: 95, color: "#ec4899" },
];

// ── Football Field Preview Data ──────────────────────────────────────────────
const FOOTBALL_FIELD = [
  { method: "52-Week Range",        low: 70,  high: 105, mid: 87,  methodKo: "52주 가격대" },
  { method: "Trading Comps",        low: 80,  high: 115, mid: 97,  methodKo: "거래 멀티플" },
  { method: "Precedent Trans.",     low: 90,  high: 125, mid: 108, methodKo: "선행 거래" },
  { method: "DCF (Bear/Bull)",      low: 85,  high: 135, mid: 110, methodKo: "DCF (Bear/Bull)" },
  { method: "DCF (Synergy)",        low: 110, high: 150, mid: 130, methodKo: "DCF (시너지 포함)" },
];

// ── Connected Deals ──────────────────────────────────────────────────────────
const DEALS = [
  {
    slug: "microsoft-activision",
    titleKo: "Microsoft × Activision Blizzard",
    titleEn: "Microsoft × Activision Blizzard",
    sizeKo: "$68.7B (2023 완료)",
    sizeEn: "$68.7B (closed 2023)",
    pitchKo: "시장 멀티플로는 $50B → DCF가 +$18B 시너지를 정량화해 megadeal 정당화",
    pitchEn: "Market multiples implied $50B → DCF quantified +$18B in synergy value to justify the megadeal",
    accent: "#0891b2",
  },
  {
    slug: "disney-pixar",
    titleKo: "Disney × Pixar",
    titleEn: "Disney × Pixar",
    sizeKo: "$7.4B (2006)",
    sizeEn: "$7.4B (2006)",
    pitchKo: "재무 멀티플로는 비싸 보였던 가격을 future franchise FCF의 DCF가 정당화한 사례",
    pitchEn: "What looked expensive on multiples was justified by DCF of future franchise FCF",
    accent: "#6366f1",
  },
  {
    slug: "bayer-monsanto",
    titleKo: "Bayer × Monsanto",
    titleEn: "Bayer × Monsanto",
    sizeKo: "$66B (2018)",
    sizeEn: "$66B (2018)",
    pitchKo: "synergy DCF가 만든 프리미엄 → 이후 litigation으로 가정이 무너진 경고 사례",
    pitchEn: "Synergy DCF justified the premium — then litigation broke the assumptions. A cautionary case.",
    accent: "#8b5cf6",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "DCF가 가장 정확한 valuation 방법인가요?" : "Is DCF the most accurate valuation method?",
    a: (ko: boolean) => ko
      ? "정확도는 가정의 질에 좌우된다 — 'most rigorous'가 더 정확한 표현이다. DCF는 가장 명시적인 방법론이지만, 그것이 정확함을 보장하지 않는다. 5년 FCF forecast, WACC, terminal growth rate 각각의 가정이 결과를 흔든다. 실무에서는 DCF로 point estimate를 잡고, Trading Comps · Precedent Transactions · Football Field로 cross-check하는 것이 표준이다."
      : "Accuracy depends on input quality — 'most rigorous' is the better word. DCF is the most explicit methodology, but explicitness doesn't equal accuracy. Each assumption — five-year FCF, WACC, terminal growth — moves the answer. In practice, DCF gives you the point estimate, and Trading Comps, Precedent Transactions, and a Football Field cross-check it.",
  },
  {
    q: (ko: boolean) => ko ? "Trading Comps만으로 충분하지 않나요?" : "Isn't trading comps alone enough?",
    a: (ko: boolean) => ko
      ? "충분하지 않다 — 세 가지 이유에서다. ① 시장은 비합리적일 수 있다 (2021 SaaS 버블, 2022 조정 모두 멀티플이 fundamentals를 반영하지 못함을 보여줬다). ② Peer가 진짜 peer가 아닐 수 있다 (size, margin profile, growth가 다르면 의미 없다). ③ 신사업·spinoff·private company처럼 comp가 부재한 케이스가 많다. DCF는 이런 사각지대에서 유일한 도구다."
      : "No — for three reasons. ① Markets can be irrational (the 2021 SaaS bubble and 2022 correction both showed multiples decoupled from fundamentals). ② Peers may not really be peers (different size, margins, or growth invalidates the comparison). ③ Many situations have no true comps — new ventures, spin-offs, private companies. DCF is the only tool in those blind spots.",
  },
  {
    q: (ko: boolean) => ko ? "Terminal Value가 EV의 70%를 차지하는데 문제 아닌가요?" : "TV being 70% of EV — isn't that a problem?",
    a: (ko: boolean) => ko
      ? "TV 의존도가 높은 것은 DCF의 구조적 특성이지 결함이 아니다. 5년 forecast 후 영구히 지속되는 cash flow를 한 숫자로 압축하는데, 길이가 무한대이므로 가중치가 클 수밖에 없다. 문제는 g(terminal growth)와 WACC 가정에 대한 민감도다 — 0.5%p 변동이 EV의 ±10–15%를 움직이는 경우가 흔하다. 그래서 sensitivity table (g × WACC)이 모든 DCF의 마지막 페이지에 들어간다."
      : "High TV dependence is structural, not a flaw. After a five-year forecast you compress cash flows extending to infinity into one number — its weight has to be large. The real issue is sensitivity to g (terminal growth) and WACC — a 50bp move often shifts EV by ±10–15%. That's why a g × WACC sensitivity table is the last page of every DCF.",
  },
  {
    q: (ko: boolean) => ko ? "DCF에서 가장 흔한 실수는 무엇인가요?" : "What's the most common mistake in DCF?",
    a: (ko: boolean) => ko
      ? "세 가지가 반복적으로 발견된다. ① 시너지의 이중 계산 — Bull case revenue projection에 이미 시너지를 반영하고, 또 control premium에 추가하는 경우. ② WACC 과소 추정 — risk-free rate를 10년 국채에 고정하고 ERP를 4–5%로 안일하게 잡으면 PE가 보는 cost of capital과 5%p 차이가 난다. ③ Terminal growth rate를 GDP 성장률보다 높게 — perpetual basis로 이는 수학적으로 불가능하다 (회사가 결국 경제 전체보다 커진다)."
      : "Three errors recur. ① Double-counting synergy — already embedded in Bull-case revenue and then added again as a control premium. ② Understated WACC — anchoring risk-free to 10-year Treasuries with a complacent 4–5% ERP can be 500bp off how PE underwrites. ③ Terminal growth above GDP — mathematically impossible on a perpetual basis (the company eventually outgrows the economy).",
  },
  {
    q: (ko: boolean) => ko ? "PE는 DCF를 쓰나요, LBO 모델을 쓰나요?" : "Does PE use DCF or LBO models?",
    a: (ko: boolean) => ko
      ? "둘 다 쓴다 — 서로 다른 질문에 답하기 때문이다. DCF는 'fair value가 얼마인가?'에 답한다 (모든 capital provider 관점). LBO 모델은 'sponsor IRR이 얼마인가?'에 답한다 (PE equity 관점). LBO 모델은 자본구조와 exit multiple, hold period에 따라 sponsor returns를 산출하고, DCF는 자본구조와 무관한 unlevered enterprise value를 산출한다. 실무에서는 DCF로 fair value를 확인하고, LBO로 entry price → IRR을 역산해 bid 한도를 정한다."
      : "Both — they answer different questions. DCF answers 'what is fair value?' from the perspective of all capital providers. LBO answers 'what is sponsor IRR?' from the PE equity perspective. LBO models layer in capital structure, exit multiple, and hold period to produce sponsor returns. DCF produces an unlevered enterprise value independent of capital structure. In practice, DCF establishes fair value and LBO back-solves from entry price to IRR to set the bid ceiling.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Damodaran, A. (2024). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset (4th ed.). Wiley." },
  { id: 2, text: "Koller, T., Goedhart, M., & Wessels, D. (2020). Valuation: Measuring and Managing the Value of Companies (7th ed.). McKinsey." },
  { id: 3, text: "Microsoft Corporation. (2022). Form 8-K — Activision Blizzard Acquisition Announcement (Jan 18, 2022)." },
  { id: 4, text: "Activision Blizzard, Inc. (2022). DEF 14A Proxy Statement — Fairness Opinion (Goldman Sachs & Allen & Co.)." },
  { id: 5, text: "Pratt, S. P. & Niculita, A. V. (2008). Valuing a Business: The Analysis and Appraisal of Closely Held Companies (5th ed.). McGraw-Hill." },
  { id: 6, text: "Mauboussin, M. J. (2020). The Math of Value and Growth. Morgan Stanley Counterpoint Global Insights." },
];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function DcfOverviewClient({ lang }: Props) {
  const ko = lang === "ko";

  const titleKo = "Valuation 101 Ch.0 — DCF란 무엇인가";
  const titleEn = "Valuation 101 Ch.0 — What Is DCF?";
  const subKo = "미래 현금흐름의 현재가치 — 그 너머에 있는 IB·PE의 사고방식";
  const subEn = "The present value of future cash flows — and the IB/PE mindset behind it";
  const tagsKo = ["DCF", "WACC", "FCF", "Terminal Value", "Microsoft × Activision"];
  const tagsEn = ["DCF", "WACC", "FCF", "Terminal Value", "Microsoft × Activision"];

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
              <Link href={ko ? "/" : "/en"} className="hover:text-cyan-600 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-cyan-600 transition-colors">
                {ko ? "딜 101" : "Deal 101"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {ko ? "DCF란 무엇인가" : "What Is DCF?"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                {ko ? "Valuation 101" : "Valuation 101"}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                Ch.0
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko ? "15분 읽기" : "15 min read"}
              </span>
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
              <Link href="/deal-101/dcf-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/dcf-overview"
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
                {ko ? "왜 DCF를 배우는가" : "Why Learn DCF"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "$68.7B이라는 숫자가 어디서 왔나" : "Where Does $68.7B Come From?"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "2022년 1월, 마이크로소프트는 액티비전 블리자드를 $68.7B에 인수하겠다고 발표했다. 게임 산업 역사상 최대 규모의 deal이다. 그 숫자는 어디서 왔나? 단순히 시장가 + 30%였을까? 아니다. 그 가격의 뒤에는 두 IB 팀(MSFT 측 Goldman Sachs, ATVI 측 Allen & Co.)이 각각 만든 DCF 모델이 있었다.",
                "DCF — Discounted Cash Flow — 는 미래 현금흐름의 현재가치를 합산하는 분석이다. 한 문장이면 끝난다. 그러나 이 문장 뒤에는 IB·PE 실무진이 한 deal에 평균 100시간 이상을 쓰는 정교한 사고 체계가 있다. Forecast 5년치 cash flow를 어떻게 잡을지, WACC을 어떻게 추정할지, terminal value를 어떻게 처리할지 — 각 가정이 final answer를 ±20% 움직인다.",
                "이 장은 그 사고 체계의 첫 페이지다. 공식은 단순하지만 시사점은 깊다. DCF를 이해한다는 것은 곧 IB·PE가 가치를 보는 방식 — 자본의 시간가치, 위험의 가격, 영구한 cash flow의 가치 — 을 이해한다는 뜻이다.",
              ] : [
                "In January 2022, Microsoft announced it would acquire Activision Blizzard for $68.7B — the largest deal in gaming history. Where did that number come from? Was it simply market price + 30%? No. Behind it sat two IB DCF models — Goldman Sachs for Microsoft, Allen & Co. for Activision.",
                "DCF — Discounted Cash Flow — is the sum of the present value of future cash flows. One sentence and it's done. But behind that sentence sits a thought system IB and PE practitioners spend 100+ hours on per deal. How to project five years of cash flow. How to estimate WACC. How to handle terminal value. Each assumption can move the final answer by ±20%.",
                "This chapter is the first page of that thought system. The formula is simple; the implications are deep. Understanding DCF means understanding how IB and PE see value — the time value of capital, the price of risk, the worth of cash flows compounding into perpetuity.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 2 — The Core Insight ════════════════════════════════════════ */}
          <motion.section id="core-insight" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "핵심 통찰" : "Core Insight"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Value = 미래 현금흐름의 현재가치" : "Value = Present Value of Future Cash Flows"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "오늘의 $1과 1년 후의 $1은 같지 않다. 인플레이션, 기회비용, 리스크 — 세 가지가 미래의 돈을 깎는다. 이 깎는 비율을 'discount rate'라 부르고, DCF의 모든 수학은 여기서 출발한다.",
                "회사의 가치는 '회사가 미래에 만들 모든 현금흐름을 오늘 시점으로 끌어와 합산한 것'이다. 더하면 끝이다. 단, 끌어올 때 discount rate로 깎는다. 가까운 미래는 적게 깎이고, 먼 미래는 많이 깎인다.",
              ] : [
                "$1 today and $1 a year from now aren't the same. Inflation, opportunity cost, risk — three forces discount future money. The rate at which they do is called the discount rate, and every DCF equation starts there.",
                "A company's value equals 'all future cash flows pulled back to today and summed.' Add them up — that's the whole exercise. The discount rate determines how aggressively each future dollar is shrunk. Near-term cash is barely discounted; distant cash is heavily discounted.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Formula card */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl p-6 border-2"
              style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}
            >
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "기본 공식" : "The Core Formula"}
              </p>
              <div className="text-center py-4">
                <p className="font-mono text-[16px] sm:text-[20px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                  V = Σ FCF<sub>t</sub> / (1+r)<sup>t</sup> &nbsp;+&nbsp; TV / (1+r)<sup>n</sup>
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {ko ? "기업가치 = (5–10년 forecast FCF의 PV 합계) + (Terminal Value의 PV)" : "Enterprise Value = sum of PV of forecast FCF + PV of Terminal Value"}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-[12px]">
                {[
                  { v: "V",   k: ko ? "Enterprise Value" : "Enterprise Value", d: ko ? "기업가치" : "Firm value" },
                  { v: "FCF", k: ko ? "Free Cash Flow"   : "Free Cash Flow",   d: ko ? "잉여현금흐름" : "Unlevered cash" },
                  { v: "r",   k: "WACC",                                         d: ko ? "할인율 (자본비용)" : "Discount rate" },
                  { v: "TV",  k: ko ? "Terminal Value"   : "Terminal Value",   d: ko ? "잔존가치" : "Perpetual horizon" },
                ].map((x) => (
                  <div key={x.v} className="bg-white dark:bg-gray-900/60 rounded-lg p-3 border border-gray-200/50 dark:border-gray-700/40">
                    <p className="font-mono font-bold text-[14px]" style={{ color: ACCENT }}>{x.v}</p>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 text-[11px]">{x.k}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{x.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ══ Section 3 — Three Pillars ═════════════════════════════════════════ */}
          <motion.section id="pillars" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "3대 요소" : "The Three Pillars"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "FCF · WACC · Terminal Value" : "FCF · WACC · Terminal Value"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "공식의 V = Σ FCF/(1+r)^t + TV/(1+r)^n 안에는 세 가지 추정 대상이 있다: ① FCF (분자), ② r = WACC (할인율), ③ TV (forecast 이후의 가치). 각각이 별도의 챕터를 받을 만큼 깊지만, 이 장에서는 셋의 역할과 관계만 명확히 한다."
                  : "Inside V = Σ FCF/(1+r)^t + TV/(1+r)^n there are three estimands: ① FCF (numerator), ② r = WACC (discount rate), ③ TV (post-forecast value). Each deserves its own chapter — here we just nail down the role and relationship of each."}
              </motion.p>
            </div>

            <motion.div variants={stagger} className="space-y-3">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp(i * 0.06)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-6 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0" aria-hidden>{p.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {typeof p.title === "function" ? p.title(ko) : p.title}
                      </h3>
                      <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {p.desc(ko)}
                      </p>
                      <div className="rounded-lg p-3 mb-3 font-mono text-[12px] font-semibold" style={{ background: p.color + "10", color: p.color }}>
                        {p.formula}
                      </div>
                      <div className="flex items-center gap-3 text-[11px] flex-wrap">
                        <span className="font-semibold" style={{ color: p.color }}>
                          → {p.detail(ko)}
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">|</span>
                        <Link
                          href={ko ? "/deal-101/dcf-model-setup" : "/en/deal-101/dcf-model-setup"}
                          className="font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                        >
                          {ko ? "💻 실제 빌드는 Modelling Ch.1 →" : "💻 Build it: Modelling Ch.1 →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 4 — Why DCF Dominates ═════════════════════════════════════ */}
          <motion.section id="why-dcf" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "DCF가 표준인 이유" : "Why DCF Dominates"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "IB·PE 데스크가 DCF를 손에서 놓지 않는 4가지 이유" : "Four Reasons IB/PE Desks Never Stop Using DCF"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_DCF.map((w, i) => (
                <motion.div
                  key={w.n}
                  variants={fadeUp(i * 0.06)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <p className="font-mono text-[11px] font-bold mb-2" style={{ color: ACCENT }}>{w.n}</p>
                  <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-2">{w.title(ko)}</h3>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{w.body(ko)}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 5 — Absolute vs Relative ══════════════════════════════════ */}
          <motion.section id="absolute-relative" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "절대가치 vs 상대가치" : "Absolute vs Relative"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "DCF vs Trading Comps — 둘은 경쟁자가 아니다" : "DCF vs Trading Comps — Not Competitors"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              <motion.p variants={fadeUp()} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "DCF는 절대가치 (intrinsic), Trading Comps는 상대가치 (relative). 실무에서 두 방법은 함께 쓰인다 — DCF가 point estimate를 주고, Comps가 sanity check 역할을 한다. 둘이 ±15% 이내로 수렴하면 신뢰할 만한 분석이고, 둘이 크게 벌어지면 무언가 잘못된 것이다."
                  : "DCF is intrinsic, comps are relative. In practice they're used together — DCF gives the point estimate, comps provide the sanity check. Converging within ±15% builds confidence; a wide gap means something is wrong."}
              </motion.p>
            </div>

            {/* Comparison Table */}
            <motion.div variants={fadeUp(0.1)} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300 w-[140px]">
                      {ko ? "차원" : "Dimension"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold" style={{ color: ACCENT }}>
                      {ko ? "DCF (절대가치)" : "DCF (Intrinsic)"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-600 dark:text-gray-400">
                      {ko ? "Trading Comps (상대가치)" : "Trading Comps (Relative)"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {ABS_VS_REL.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">{row.dim(ko)}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.dcf(ko)}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.comps(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Football Field Preview */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
            >
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Football Field — 방법론별 가치 범위 (예시)" : "Football Field — Value Range by Method (illustrative)"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko
                  ? "주당 가격($/share) — DCF가 가장 넓은 범위를 만들지만, 그 안에서 point estimate를 제공한다"
                  : "Per-share price — DCF produces the widest range and still anchors a point estimate inside it"}
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  layout="vertical"
                  data={FOOTBALL_FIELD.map((d) => ({
                    method: ko ? d.methodKo : d.method,
                    range: d.high - d.low,
                    base: d.low,
                    mid: d.mid,
                  }))}
                  margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                  barCategoryGap={14}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `$${v}`} domain={[60, 160]} />
                  <YAxis type="category" dataKey="method" tick={{ fontSize: 10, fill: "#6b7280" }} width={130} />
                  <Tooltip
                    formatter={(v, n) => n === "range" ? [`$${v}`, ko ? "범위" : "Range"] : null}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <ReferenceLine x={100} stroke="#0891b2" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: ko ? "현재 주가" : "Current Px", fontSize: 9, fill: "#0891b2" }} />
                  <Bar dataKey="base" stackId="a" fill="transparent" />
                  <Bar dataKey="range" stackId="a" radius={[3, 3, 3, 3]}>
                    {FOOTBALL_FIELD.map((d, i) => (
                      <Cell key={i} fill={d.method.startsWith("DCF") ? ACCENT : "#94a3b8"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko
                  ? "* 실제 fairness opinion의 football field 형식. DCF는 가장 넓은 범위를 보여주지만 가정을 명시한다."
                  : "* Standard fairness-opinion football field. DCF shows the widest range but makes its assumptions explicit."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 6 — Microsoft × Activision Mini Case ══════════════════════ */}
          <motion.section id="msft-atvi" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "실전 케이스" : "Real Deal"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Microsoft × Activision Blizzard — DCF 로직" : "Microsoft × Activision Blizzard — DCF Logic"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "발표 직전 액티비전의 시가총액은 약 $51B, EV/EBITDA 멀티플은 약 16x였다. 동종업계 standalone 멀티플 기준으로 'fair value'는 $50–55B 수준. 그런데 마이크로소프트는 $68.7B을 제시했다 — 약 35% 프리미엄. 왜?",
                "마이크로소프트가 본 것: standalone ATVI cash flow가 아니라 'MSFT 안에 들어왔을 때의 ATVI cash flow'다. ① Game Pass 구독 전환 (Call of Duty·Diablo·Candy Crush를 구독 카탈로그에 추가 → ARPU 증가, churn 감소), ② Xbox 클라우드 게이밍 deepening, ③ 모바일 게이밍 pipeline 자체 internalization. 이 세 가지가 5년 후 incremental EBITDA를 +$3B 정도 만들어낸다고 봤다.",
                "그 +$3B EBITDA를 DCF로 환산하면 → terminal value까지 포함해 약 $18–20B의 추가 가치. $50B (standalone DCF) + $18B (synergy DCF) ≈ $68B. Comps만 봤다면 너무 비싸 보였지만, DCF가 megadeal을 정량적으로 정당화했다.",
              ] : [
                "Just before announcement, Activision's market cap was ~$51B at ~16x EV/EBITDA. By standalone peer multiples, 'fair value' sat at $50–55B. Microsoft offered $68.7B — a ~35% premium. Why?",
                "What Microsoft saw: not standalone ATVI cash flow, but ATVI cash flow inside Microsoft. ① Game Pass subscription conversion (Call of Duty, Diablo, Candy Crush added to the catalog → higher ARPU, lower churn). ② Deeper Xbox cloud gaming. ③ Internalizing the mobile gaming pipeline. Together, these were expected to add ~$3B of incremental EBITDA five years out.",
                "Run that +$3B through a DCF — including terminal value — and you get roughly $18–20B of additional value. $50B (standalone DCF) + $18B (synergy DCF) ≈ $68B. Comps alone made it look expensive. DCF quantitatively justified the megadeal.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp(0.1)} className="flex items-center gap-3 flex-wrap">
              <Link
                href={ko ? "/deals/microsoft-activision" : "/en/deals/microsoft-activision"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT }}
              >
                🎮 {ko ? "Microsoft × Activision 딜 전체 보기 →" : "Full Microsoft × Activision Deal →"}
              </Link>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko ? "FTC 소송, 영국 CMA, $68.7B 클로징 타임라인" : "FTC litigation, UK CMA, $68.7B closing timeline"}
              </span>
            </motion.div>
          </motion.section>

          {/* ══ Section 7 — When DCF Works / Fails ═══════════════════════════════ */}
          <motion.section id="when-dcf" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "도구의 한계" : "Tool Boundaries"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "DCF가 통하는 곳과 통하지 않는 곳" : "Where DCF Works — and Where It Fails"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={fadeUp()} className="rounded-2xl p-5 border border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-emerald-900/10">
                <p className="text-[11px] font-black uppercase tracking-widest mb-2 text-emerald-700 dark:text-emerald-400">
                  {ko ? "✅ DCF가 통할 때" : "✅ DCF Works When"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>• {ko ? "예측 가능한 FCF (utilities, healthcare, mature SaaS)" : "Predictable FCF (utilities, healthcare, mature SaaS)"}</li>
                  <li>• {ko ? "명확한 reinvestment rate (Capex/Revenue 안정)" : "Clear reinvestment rate (stable Capex/Revenue)"}</li>
                  <li>• {ko ? "장기 competitive moat (margin이 무너지지 않음)" : "Long-term competitive moat (margins hold)"}</li>
                  <li>• {ko ? "안정적인 WACC — 자본구조 정상화 완료" : "Stable WACC — capital structure normalized"}</li>
                  <li>• {ko ? "비교 가능한 peer가 있지만, DCF가 더 정밀한 케이스" : "Peers exist, but DCF gives the more precise answer"}</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp(0.05)} className="rounded-2xl p-5 border border-rose-200/60 dark:border-rose-800/40 bg-rose-50/40 dark:bg-rose-900/10">
                <p className="text-[11px] font-black uppercase tracking-widest mb-2 text-rose-700 dark:text-rose-400">
                  {ko ? "❌ DCF가 통하지 않을 때" : "❌ DCF Fails When"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>• {ko ? "Cyclical commodity (steel, oil — cycle 길이 = forecast 기간)" : "Cyclical commodities (steel, oil — cycle length = forecast horizon)"}</li>
                  <li>• {ko ? "Early-stage tech (FCF가 음수, 5–10년 안에 break-even 불확실)" : "Early-stage tech (negative FCF, breakeven uncertain)"}</li>
                  <li>• {ko ? "Hyper-growth — TV가 EV의 95%+ 차지" : "Hyper-growth — TV exceeds 95% of EV"}</li>
                  <li>• {ko ? "Distressed company — going concern 자체 불확실" : "Distressed — going concern itself uncertain"}</li>
                  <li>• {ko ? "규제·정치 위험이 cash flow를 좌우 (utility, mining)" : "Regulatory/political risk drives cash flow (utilities, mining)"}</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* ══ Section 8 — CROSS-LINK BOX (Prominent) ═══════════════════════════ */}
          <motion.section id="cross-link" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div
              variants={fadeUp()}
              className="rounded-3xl p-8 border-2 relative overflow-hidden"
              style={{ borderColor: "#f59e0b", background: "linear-gradient(135deg, #fffbeb 0%, #ecfeff 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 text-[120px] leading-none -mr-4 -mt-4 select-none">📐</div>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                {ko ? "다음 단계 — Modelling 시리즈" : "Next — Modelling Series"}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {ko ? "개념 이해 → 실무 모델링" : "From Concept to Real Build"}
              </h2>
              <p className="text-[14px] text-gray-700 leading-relaxed mb-6 max-w-xl">
                {ko
                  ? "지금까지 본 FCF · WACC · Terminal Value의 3대 요소를 실제 Excel 워크북에서 어떻게 구현하는가. IB·PE 실무진이 쓰는 5-시트 아키텍처 — Assumptions · P&L · FCF · WACC · Valuation — 부터 cell color convention, naming rule까지."
                  : "How the FCF, WACC, and Terminal Value pillars actually get built in an Excel workbook. The 5-sheet IB/PE architecture — Assumptions, P&L, FCF, WACC, Valuation — plus cell-color conventions and naming rules."}
              </p>
              <Link
                href={ko ? "/deal-101/dcf-model-setup" : "/en/deal-101/dcf-model-setup"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white hover:opacity-90 transition-opacity shadow-md"
                style={{ background: "#f59e0b" }}
              >
                💻 {ko ? "Modelling Ch.1 — DCF 모델 셋업" : "Modelling Ch.1 — DCF Model Setup"}
                <span className="text-lg">→</span>
              </Link>
              <p className="text-[10px] text-gray-500 mt-3">
                {ko ? "18분 읽기 · Excel workbook architecture · Cell hygiene · Naming conventions" : "18 min read · Workbook architecture · Cell hygiene · Naming conventions"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 9 — Series Roadmap ═══════════════════════════════════════ */}
          <motion.section id="roadmap" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "시리즈 로드맵" : "Series Roadmap"}
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Valuation 101 — 다음 챕터들" : "Valuation 101 — Next Chapters"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* TV % chart */}
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-6"
            >
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Terminal Value가 EV에서 차지하는 비중 (산업별 모식도)" : "TV as % of EV — Stylized by Sector"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "왜 TV가 Ch.3에서 별도의 챕터를 받는지 — EV의 60–95%를 차지하기 때문이다" : "Why TV deserves its own chapter (Ch.3) — it can be 60–95% of EV"}
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={TV_SHARE.map((d) => ({ sector: ko ? d.sectorKo : d.sectorEn, pct: d.pct, color: d.color }))} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="sector" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} domain={[0, 100]} width={38} />
                  <Tooltip formatter={(v) => [`${v}%`, ko ? "TV / EV" : "TV / EV"]} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: ko ? "위험 구역" : "Danger zone", fontSize: 9, fill: "#ef4444" }} />
                  <Bar dataKey="pct" radius={[3, 3, 0, 0]}>
                    {TV_SHARE.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko ? "* 80%를 넘으면 DCF가 거의 TV game이 된다 — terminal growth & WACC 가정이 모든 것을 결정" : "* Above 80%, DCF becomes a TV game — terminal growth and WACC decide everything"}
              </p>
            </motion.div>

            <motion.div variants={stagger} className="space-y-2">
              {VAL_SERIES.map((ch, i) => (
                <motion.div key={ch.slug} variants={fadeUp(i * 0.04)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
                    ch.ch === THIS_CH
                      ? "border-cyan-300 dark:border-cyan-700 bg-cyan-50/60 dark:bg-cyan-900/20"
                      : ch.published
                      ? "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 hover:border-cyan-300"
                      : "border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 opacity-60"
                  }`}
                >
                  <span className="font-mono text-[11px] font-bold w-10 flex-shrink-0" style={{ color: ACCENT }}>
                    Ch.{ch.ch}
                  </span>
                  <span className="flex-1 text-[13px] font-semibold text-gray-800 dark:text-gray-200">
                    {ch.title(ko).replace(/^Ch\.\d+\s*/, "")}
                  </span>
                  {ch.ch === THIS_CH ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold text-white" style={{ background: ACCENT }}>
                      {ko ? "현재" : "Current"}
                    </span>
                  ) : ch.published ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {ko ? "공개" : "Published"}
                    </span>
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      {ko ? "준비 중" : "Coming Soon"}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 10 — Connected Deals ═════════════════════════════════════ */}
          <motion.section id="deals" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "딜 아카이브" : "Deal Archive"}
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "DCF로 정당화된 megadeals" : "Megadeals Justified by DCF"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DEALS.map((d, i) => (
                <motion.div key={d.slug} variants={fadeUp(i * 0.06)}>
                  <Link
                    href={ko ? `/deals/${d.slug}` : `/en/deals/${d.slug}`}
                    className="block rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors h-full"
                  >
                    <div className="w-8 h-1 rounded-full mb-3" style={{ background: d.accent }} />
                    <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {ko ? d.titleKo : d.titleEn}
                    </h3>
                    <p className="text-[11px] font-semibold mb-2" style={{ color: d.accent }}>
                      {ko ? d.sizeKo : d.sizeEn}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {ko ? d.pitchKo : d.pitchEn}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─────────────────────────────────────────────── */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={ko ? titleKo : titleEn} variant="mid" lang={lang} />
          </div>

          {/* ══ Section 11 — FAQ ═════════════════════════════════════════════════ */}
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
              <Link
                href={ko ? "/deal-101" : "/en/deal-101"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-cyan-300 hover:text-cyan-600 transition-colors"
              >
                ← {ko ? "딜 101 카탈로그" : "Deal 101 Catalog"}
              </Link>
              <Link
                href={ko ? "/deal-101/dcf-model-setup" : "/en/deal-101/dcf-model-setup"}
                className="text-[12px] px-4 py-2 rounded-full text-white transition-opacity hover:opacity-80"
                style={{ background: "#f59e0b" }}
              >
                {ko ? "Modelling Ch.1 — DCF 모델 셋업 →" : "Modelling Ch.1 — DCF Model Setup →"}
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
          <div className="flex justify-end pb-4">
            <ShareButtons title={ko ? titleKo : titleEn} variant="bottom" lang={lang} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
