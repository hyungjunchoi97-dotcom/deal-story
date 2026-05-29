"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b"; // amber-500 (Modelling 시리즈)
const ACCENT_LIGHT = "#fffbeb"; // amber-50
const SIBLING = "#0891b2"; // cyan-600 (Valuation 시리즈)

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const MODEL_SERIES = [
  { slug: "dcf-model-setup",         ch: 1, title: (ko: boolean) => ko ? "Ch.1 셋업"           : "Ch.1 Setup",            published: true  },
  { slug: "trading-comps-build",     ch: 2, title: (ko: boolean) => ko ? "Ch.2 Trading Build"  : "Ch.2 Trading Build",    published: true  },
  { slug: "transaction-comps-build", ch: 3, title: (ko: boolean) => ko ? "Ch.3 Txn Build"      : "Ch.3 Txn Build",        published: true  },
  { slug: "football-field-build",    ch: 4, title: (ko: boolean) => ko ? "Ch.4 Football Field" : "Ch.4 Football Field",   published: false },
];
const THIS_CH = 3;

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {MODEL_SERIES.map((ch) => {
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

// ── M&A Database Comparison ──────────────────────────────────────────────────
const DATABASES = [
  { name: "Mergermarket",     publisher: "(FT Group)",       strengthKo: "narrative-rich · IB 표준 · 한국·아시아 deal 강함",                          strengthEn: "narrative-rich · IB standard · strong APAC coverage",                       icon: "📰" },
  { name: "Capital IQ M&A",   publisher: "(S&P)",            strengthKo: "quantitative-heavy · CIQ peer set과 통합 · live link",                       strengthEn: "quantitative-heavy · integrates with CIQ peer set · live link",             icon: "📊" },
  { name: "SDC Platinum",     publisher: "(Refinitiv)",      strengthKo: "역사적 deep · pre-1990 deal · academic 표준",                                strengthEn: "deep history · pre-1990 deals · academic standard",                          icon: "🗄️" },
  { name: "Bloomberg BIM",    publisher: "(B-Mt function)",  strengthKo: "real-time · integrated price chart · premium calc 자동",                    strengthEn: "real-time · integrated price chart · automatic premium calculation",        icon: "💹" },
];

// ── 8-Filter Workflow ────────────────────────────────────────────────────────
const FILTERS = [
  {
    n: "01",
    titleKo: "Target Industry",
    titleEn: "Target Industry",
    fieldKo: "Mergermarket Industry Code",
    code: 'Sector = "Computer Software · Games & Toys"',
    outputKo: "~600 deals",
    outputEn: "~600 deals",
  },
  {
    n: "02",
    titleKo: "Geographic Scope",
    titleEn: "Geographic Scope",
    fieldKo: "Target Country, Buyer Country",
    code: 'Target Region = "North America OR Europe OR Asia-Pacific"',
    outputKo: "~400 deals",
    outputEn: "~400 deals",
  },
  {
    n: "03",
    titleKo: "Time Period",
    titleEn: "Time Period",
    fieldKo: "Announcement Date",
    code: "Announcement Date BETWEEN 2019-01-01 AND 2024-12-31",
    outputKo: "~200 deals",
    outputEn: "~200 deals",
  },
  {
    n: "04",
    titleKo: "Deal Size Range",
    titleEn: "Deal Size Range",
    fieldKo: "Deal Value (announced)",
    code: "Deal Value BETWEEN $5B AND $100B",
    outputKo: "~60 deals",
    outputEn: "~60 deals",
  },
  {
    n: "05",
    titleKo: "Deal Type",
    titleEn: "Deal Type",
    fieldKo: "Deal Type",
    code: 'Type = "Acquisition" AND NOT IN ("JV", "Divestiture", "IPO")',
    outputKo: "~40 deals",
    outputEn: "~40 deals",
  },
  {
    n: "06",
    titleKo: "Bidder Type",
    titleEn: "Bidder Type",
    fieldKo: "Acquirer Classification",
    code: 'Bidder = "Strategic" -- separate cohort for "Financial"',
    outputKo: "~25 deals (Strategic)",
    outputEn: "~25 deals (Strategic)",
  },
  {
    n: "07",
    titleKo: "Contested vs Negotiated",
    titleEn: "Contested vs Negotiated",
    fieldKo: "Deal Attitude",
    code: 'Attitude = "Friendly" -- separate cohort for "Hostile"',
    outputKo: "~20 deals",
    outputEn: "~20 deals",
  },
  {
    n: "08",
    titleKo: "Status",
    titleEn: "Status",
    fieldKo: "Deal Status",
    code: 'Status = "Completed"',
    outputKo: "~15 deals",
    outputEn: "~15 deals",
  },
];

// ── Funnel Chart Data ────────────────────────────────────────────────────────
const FUNNEL = [
  { stepKo: "1. Industry",         stepEn: "1. Industry",          n: 600, color: "#fcd34d" },
  { stepKo: "2. Geography",        stepEn: "2. Geography",         n: 400, color: "#fbbf24" },
  { stepKo: "3. Time Period",      stepEn: "3. Time Period",       n: 200, color: "#f59e0b" },
  { stepKo: "4. Deal Size",        stepEn: "4. Deal Size",         n: 60,  color: "#ea850b" },
  { stepKo: "5. Deal Type",        stepEn: "5. Deal Type",         n: 40,  color: "#d97706" },
  { stepKo: "6. Bidder",           stepEn: "6. Bidder",            n: 25,  color: "#c2620a" },
  { stepKo: "7. Negotiated",       stepEn: "7. Negotiated",        n: 20,  color: "#b45309" },
  { stepKo: "8. Completed",        stepEn: "8. Completed",         n: 15,  color: "#92400e" },
];

// ── Strategic vs Financial chart ─────────────────────────────────────────────
const STRAT_VS_FIN = [
  { typeKo: "Strategic Median",  typeEn: "Strategic Median",  multiple: 14.2, color: "#0e7490" },
  { typeKo: "Financial Median",  typeEn: "Financial Median",  multiple: 11.8, color: "#0891b2" },
];

// ── 4-Sheet Workbook ─────────────────────────────────────────────────────────
const SHEETS = [
  {
    n: 1, code: "1_Universe", color: "#fcd34d", icon: "📋",
    titleKo: "Universe (Long List)",
    titleEn: "Universe (Long List)",
    purposeKo: "Mergermarket export — 40개 raw deals + filter audit trail",
    purposeEn: "Mergermarket export — 40 raw deals plus filter audit trail",
    rowsKo: "Deal ID · Target · Buyer · Date · Size · Type · Bidder Type · Status · Keep? (Y/N) · Reason",
    rowsEn: "Deal ID · Target · Buyer · Date · Size · Type · Bidder Type · Status · Keep? (Y/N) · Reason",
  },
  {
    n: 2, code: "2_Comps", color: "#f59e0b", icon: "📊",
    titleKo: "Comps (Final 10-15)",
    titleEn: "Comps (Final 10-15)",
    purposeKo: "최종 deals + Announcement Date · Pre-Ref Price · Premium % · Strategic/Financial · Synergy Disclosed",
    purposeEn: "Final deals + Announcement Date · Pre-Ref Price · Premium % · Strategic/Financial · Synergy Disclosed",
    rowsKo: "Deal · Ann Date · Ref Price (1m VWAP) · Offer Price · Premium % · LTM Rev · LTM EBITDA · Multiple · Synergy NPV",
    rowsEn: "Deal · Ann Date · Ref Price (1m VWAP) · Offer Price · Premium % · LTM Rev · LTM EBITDA · Multiple · Synergy NPV",
  },
  {
    n: 3, code: "3_Stats", color: "#d97706", icon: "📈",
    titleKo: "Stats by Buyer Type",
    titleEn: "Stats by Buyer Type",
    purposeKo: "Strategic median vs Financial median 분리. Cohort별 mean/median/25th/75th/IQR",
    purposeEn: "Strategic median vs Financial median split — cohort-level mean/median/25th/75th/IQR",
    rowsKo: "Cohort × Multiple Type × Statistic (Strategic EV/EBITDA median, Financial EV/EBITDA median ...)",
    rowsEn: "Cohort × Multiple Type × Statistic (Strategic EV/EBITDA median, Financial EV/EBITDA median ...)",
  },
  {
    n: 4, code: "4_Output", color: "#b45309", icon: "🎯",
    titleKo: "Output (Premium Ladder)",
    titleEn: "Output (Premium Ladder)",
    purposeKo: "Implied EV with premium ladder: 25% / 30% / 35% / 40% premium 시나리오. Football field input.",
    purposeEn: "Implied EV with premium ladder: 25% / 30% / 35% / 40% premium scenarios. Football field input.",
    rowsKo: "Premium % · Standalone EV · Premium $ · Implied EV · Less Net Debt · Equity · /Shares · Implied Price",
    rowsEn: "Premium % · Standalone EV · Premium $ · Implied EV · Less Net Debt · Equity · /Shares · Implied Price",
  },
];

// ── Synergy Backout Steps ────────────────────────────────────────────────────
const SYNERGY_STEPS = [
  { n: "1", labelKo: "Pull announced synergies (8-K, proxy)",            labelEn: "Pull announced synergies (8-K, proxy)" },
  { n: "2", labelKo: "Categorize Cost vs Revenue",                       labelEn: "Categorize Cost vs Revenue" },
  { n: "3", labelKo: "Apply phase-in (Y1 25% · Y2 50% · Y3+ 100%)",       labelEn: "Apply phase-in (Y1 25% · Y2 50% · Y3+ 100%)" },
  { n: "4", labelKo: "Discount at buyer's WACC",                         labelEn: "Discount at buyer's WACC" },
  { n: "5", labelKo: "NPV synergies in $M",                              labelEn: "NPV synergies in $M" },
  { n: "6", labelKo: "Synergy Value ÷ Target EV = Synergy Premium %",     labelEn: "Synergy Value / Target EV = Synergy Premium %" },
  { n: "7", labelKo: "Pure Control Premium = Total − Synergy Premium",   labelEn: "Pure Control Premium = Total − Synergy Premium" },
  { n: "8", labelKo: "Apply Pure Control to target for adjusted comp",   labelEn: "Apply Pure Control to target for adjusted comp" },
];

// ── Sanity Checks ────────────────────────────────────────────────────────────
const SANITY = [
  { ko: "All EVs reconcile (price × shares + net debt = announced EV)",        en: "All EVs reconcile (price × shares + net debt = announced EV)" },
  { ko: "Premium components add: peer median + premium = announced EV",         en: "Premium components add: peer median + premium = announced EV" },
  { ko: "Strategic/Financial flag verified per deal (read the press release)",  en: "Strategic/Financial flag verified per deal (read the press release)" },
  { ko: "Synergy disclosures sourced (cite 8-K page · proxy section)",          en: "Synergy disclosures sourced (cite 8-K page · proxy section)" },
  { ko: "Hostile deals separately flagged (don't pollute the negotiated cohort)", en: "Hostile deals separately flagged (don't pollute the negotiated cohort)" },
  { ko: "Earnouts/CVRs normalized to NPV (not face value)",                     en: "Earnouts/CVRs normalized to NPV (not face value)" },
];

// ── Common Errors ────────────────────────────────────────────────────────────
const ERRORS = [
  { n: "01", titleKo: "Mixing fully-realized and just-announced deals",   titleEn: "Mixing fully-realized and just-announced deals",   bodyKo: "Just-announced deal은 synergy 가정만 있을 뿐 outcome 미확정. Closed deals와 같은 cohort에 두면 안 됨.", bodyEn: "Just-announced deals carry only synergy assumptions, not outcomes. They don't belong in the closed cohort." },
  { n: "02", titleKo: "Ignoring earnouts / CVRs",                          titleEn: "Ignoring earnouts / CVRs",                          bodyKo: "Contingent Value Rights는 announced EV에 추가 $$가 발생. Face value에 더하면 multiple inflate.",      bodyEn: "Contingent Value Rights add $$ beyond announced EV. Adding face value inflates the multiple." },
  { n: "03", titleKo: "Premium denominator confusion",                     titleEn: "Premium denominator confusion",                     bodyKo: "1-day prior price vs unaffected price (-1m VWAP) 혼용. IB 표준은 unaffected price.",                 bodyEn: "Confusing 1-day prior price with the unaffected price (-1m VWAP). The IB standard is the unaffected price." },
  { n: "04", titleKo: "Synergy double-counting",                           titleEn: "Synergy double-counting",                           bodyKo: "Buyer가 이전 deal에서 announce한 synergy와 이번 deal의 synergy가 overlap. Adjust 필요.",              bodyEn: "Synergies the buyer announced on a prior deal overlap with this deal's — requires adjustment." },
  { n: "05", titleKo: "Survivorship bias",                                  titleEn: "Survivorship bias",                                  bodyKo: "Failed deals (FTC blocked, financing fall-through)가 database에서 제외 → 'all deals close' 가정.",     bodyEn: "Failed deals (FTC-blocked, financing fall-through) are scrubbed from databases → 'all deals close' bias." },
  { n: "06", titleKo: "Old deals at outdated multiples",                    titleEn: "Old deals at outdated multiples",                    bodyKo: "2019 deal의 EV/EBITDA가 2024 deal evaluation에 그대로 적용. 금리 환경 다름.",                            bodyEn: "Applying a 2019 deal's EV/EBITDA to a 2024 evaluation. Rate environments differ." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Mergermarket 없이 Transaction Comps를 build할 수 있나?" : "Can I build Transaction Comps without Mergermarket?",
    a: (ko: boolean) => ko
      ? "가능하지만 어려움. CIQ M&A · SDC · Bloomberg BIM이 대안. 무료 source는 SEC EDGAR (proxy statements에서 deal terms 추출), 회사 announcement 8-K, press release. 시간 비용은 5–10x — 한 deal 당 announcement date · pre-reference price · premium %를 manual로 계산하는 데 30분 소요. 학생·신입 직급에서는 무료 Wall Street Journal M&A archive + S&P CIQ student license (~$50/month)로 시작."
      : "Possible but harder. CIQ M&A / SDC / Bloomberg BIM are alternatives. Free sources include SEC EDGAR (extract deal terms from proxy statements), 8-Ks, press releases. Time cost is 5–10x — manually computing announcement date, pre-reference price, and premium % runs ~30 minutes per deal. Students and juniors can start with the free WSJ M&A archive + an S&P CIQ student license (~$50/month).",
  },
  {
    q: (ko: boolean) => ko ? "Synergy NPV는 어떤 WACC을 쓰나?" : "Which WACC do I use for synergy NPV?",
    a: (ko: boolean) => ko
      ? "Buyer's WACC. Synergy는 buyer의 cost of capital로 capitalize되기 때문이다. Target WACC은 standalone valuation에 쓰지만, synergy는 'buyer가 추출하는 incremental cash'이므로 buyer perspective. 표준: Risk-free + Buyer's industry ERP. MSFT × ATVI: MSFT WACC ~8% 사용. Activision standalone WACC ~9.5%와 다름. Buyer가 더 낮은 WACC을 가질 때 synergy NPV가 더 커지므로 'cost of capital arbitrage'라고 부른다."
      : "Buyer's WACC. Synergy gets capitalized at the buyer's cost of capital — because synergy is incremental cash the buyer extracts, from the buyer's perspective. Standard: Risk-free + Buyer's industry ERP. MSFT × ATVI used ~8% MSFT WACC vs Activision standalone ~9.5%. When the buyer has the lower WACC, synergy NPV grows — that's called 'cost of capital arbitrage'.",
  },
  {
    q: (ko: boolean) => ko ? "Pre-Reference Price는 어느 시점이 표준?" : "Which pre-reference price is standard?",
    a: (ko: boolean) => ko
      ? "1-month VWAP (Volume Weighted Average Price)이 가장 일반적. 이유: deal announcement 이전 leak 또는 price run-up을 흡수하기 위함. 1-day prior price는 leak에 취약 (insiders trading의 영향). 1-week·1-month·3-month 4개를 모두 표시하고 가장 conservative한 것을 premium의 'high case'로 잡는다. 'Unaffected price'라는 용어는 -1m VWAP를 의미하는 IB 관용어. Bloomberg VWAP function (=BVWAP)으로 자동 계산."
      : "1-month VWAP (Volume Weighted Average Price) is the most common. Reason: it absorbs pre-announcement leaks and price run-ups. The 1-day prior price is vulnerable to leakage (insider trading). Display 1-day / 1-week / 1-month / 3-month and use the most conservative as the premium's 'high case'. 'Unaffected price' is IB shorthand for -1m VWAP. Bloomberg VWAP function (=BVWAP) computes it automatically.",
  },
  {
    q: (ko: boolean) => ko ? "Failed deals를 cohort에 포함시킬까?" : "Should failed deals be in the cohort?",
    a: (ko: boolean) => ko
      ? "별도 cohort로 분리. Failed deal (예: AT&T × T-Mobile blocked by DOJ, Adobe × Figma terminated)은 regulatory premium · financing risk premium의 'ceiling'을 보여주는 별도 분석. Completed deal cohort에 섞으면 'all deals close' bias 발생. 단, Adobe × Figma처럼 $20B termination fee가 있는 케이스는 'maximum acceptable risk premium'의 reference로 활용 — 별도 box로 표시."
      : "Split them into a separate cohort. Failed deals (e.g. AT&T × T-Mobile blocked by DOJ, Adobe × Figma terminated) anchor the ceiling of regulatory and financing risk premium — a separate analysis. Mixing them into the completed cohort creates 'all deals close' bias. Cases like Adobe × Figma with a $20B termination fee become references for the maximum acceptable risk premium — flag them in their own box.",
  },
  {
    q: (ko: boolean) => ko ? "Football Field에 Transaction Comps를 어떻게 표시?" : "How is Transaction Comps shown in the Football Field?",
    a: (ko: boolean) => ko
      ? "Sheet 4 (Output)의 Premium Ladder가 football field input format. 표준 입력은 (Low EV, High EV, Mid EV) 3-tuple — Low = 25th percentile premium 시나리오 적용, High = 75th, Mid = median. Strategic cohort과 Financial cohort 별도 row. Football field에서 Trading Comps row보다 항상 위쪽에 plot (Transaction이 더 높은 multiple)."
      : "The Premium Ladder on Sheet 4 (Output) is the football field input format. Standard input is a (Low EV, High EV, Mid EV) triplet — Low = 25th-percentile premium scenario, High = 75th, Mid = median. Strategic and Financial cohorts get separate rows. On the football field, Transaction Comps always sits above Trading Comps (Transaction multiples are higher).",
  },
];

// ── Sources ──────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Mergermarket. (2024). M&A Database — Field Reference Guide." },
  { id: 2, text: "S&P Capital IQ Pro — M&A Transactions Module User Guide (2024 ed.)." },
  { id: 3, text: "Refinitiv. (2023). SDC Platinum M&A Methodology Whitepaper." },
  { id: 4, text: "Rosenbaum, J. & Pearl, J. (2020). Investment Banking: Valuation, LBOs, M&A, and IPOs (3rd ed.). Wiley." },
  { id: 5, text: "Microsoft Corporation. (2022). Form 8-K & DEF 14A — Activision Blizzard Acquisition." },
  { id: 6, text: "Bruner, R. F. (2004). Applied Mergers and Acquisitions. Wiley Finance." },
];

// ── Main ─────────────────────────────────────────────────────────────────────
export default function TransactionCompsBuildClient({ lang }: Props) {
  const ko = lang === "ko";

  const titleKo = "Modelling 101 Ch.3 — Transaction Comps Build (Mergermarket)";
  const titleEn = "Modelling 101 Ch.3 — Transaction Comps Build (Mergermarket)";
  const subKo = "Mergermarket·CIQ M&A로 10–15개 선례거래 추출 → Excel 정규화 → Football Field";
  const subEn = "Extracting 10-15 precedents via Mergermarket / CIQ M&A → Excel normalization → football field input";
  const tagsKo = ["Mergermarket", "Premium Decomposition", "Synergy NPV", "Strategic vs Financial", "Excel"];
  const tagsEn = ["Mergermarket", "Premium Decomposition", "Synergy NPV", "Strategic vs Financial", "Excel"];

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
              <Link href={ko ? "/" : "/en"} className="hover:text-amber-600 transition-colors">{ko ? "홈" : "Home"}</Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-amber-600 transition-colors">{ko ? "딜 101" : "Deal 101"}</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Transaction Comps Build" : "Transaction Comps Build"}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                Modelling 101
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>Ch.3</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{ko ? "22분 읽기" : "22 min read"}</span>
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
              <Link href="/deal-101/transaction-comps-build"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/transaction-comps-build"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={!ko ? { background: ACCENT } : {}}
              >English</Link>
            </motion.div>

            {/* Prominent cross-link to Val Ch.2 */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-6 rounded-xl border-2 p-4 flex items-center gap-3 flex-wrap"
              style={{ borderColor: SIBLING + "40", background: "#ecfeff" }}
            >
              <span className="text-2xl flex-shrink-0">📐</span>
              <div className="flex-1 min-w-[200px]">
                <p className="text-[12px] font-bold mb-0.5" style={{ color: SIBLING }}>
                  {ko ? "개념부터 보고 오세요" : "Start with the concept"}
                </p>
                <p className="text-[11px] text-gray-600 dark:text-gray-400">
                  {ko ? "왜 Transaction premium이 30–40%인지, control과 synergy가 어떻게 분해되는지 — Val Ch.2가 먼저" : "Why Transaction premium runs 30–40%, how control and synergy decompose — Val Ch.2 first"}
                </p>
              </div>
              <Link href={ko ? "/deal-101/transaction-comps" : "/en/deal-101/transaction-comps"}
                className="text-[11px] px-3 py-1.5 rounded-full font-bold text-white hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ background: SIBLING }}
              >
                {ko ? "Valuation Ch.2 →" : "Valuation Ch.2 →"}
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? titleKo : titleEn} variant="top" lang={lang} />
        </div>
        <ChapterNav lang={lang} />

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Section 1 — Hero ═════════════════════════════════════════════════ */}
          <motion.section id="intro" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "왜 build가 까다로운가" : "Why the Build Is Hard"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "600개 deal에서 final 15개로 — 그리고 synergy backout" : "From 600 deals to 15 — and the synergy backout"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "Val Ch.2에서 본 control premium 분해, strategic vs financial 차이, synergy backout 방법론을 Mergermarket·Capital IQ M&A의 실제 field name과 filter value로 구현한다. Microsoft × Activision 케이스의 peer transactions로 step-by-step — 600개 raw deals에서 final 15개 (Take-Two × Zynga, EA × Codemasters, Microsoft × ZeniMax, Activision × King Digital, Tencent × Supercell 등)까지.",
                "Trading Comps Build (Ch.2)와 동일한 4-sheet 구조: Universe → Comps → Stats → Output. 차이는 Sheet 2에 Premium % · Strategic/Financial flag · Synergy Disclosed 컬럼이 추가되고, Sheet 3에서 buyer type별로 cohort를 분리하며, Sheet 4가 implied EV with premium ladder를 만든다는 점.",
              ] : [
                "Implement Val Ch.2's control premium decomposition, strategic vs financial split, and synergy backout methodology using Mergermarket / Capital IQ M&A field names and filter values. Step-by-step on Microsoft × Activision peer transactions — from 600 raw deals to a final 15 (Take-Two × Zynga, EA × Codemasters, Microsoft × ZeniMax, Activision × King Digital, Tencent × Supercell, etc.).",
                "Same 4-sheet structure as Trading Comps Build (Ch.2): Universe → Comps → Stats → Output. Differences: Sheet 2 adds Premium % · Strategic/Financial flag · Synergy Disclosed columns; Sheet 3 splits cohorts by buyer type; Sheet 4 produces implied EV with a premium ladder.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>
          </motion.section>

          {/* ══ Section 2 — Database Comparison ═══════════════════════════════════ */}
          <motion.section id="databases" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "M&A 데이터베이스 비교" : "M&A Database Comparison"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "4개 도구 — 각각의 strength" : "Four Tools — Each With a Strength"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DATABASES.map((s, i) => (
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
          </motion.section>

          {/* ══ Section 3 — 8-Filter Workflow ═════════════════════════════════════ */}
          <motion.section id="workflow" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Mergermarket 8-필터 워크플로우" : "Mergermarket 8-Filter Workflow"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Microsoft × Activision 케이스 — 600 → 15" : "Microsoft × Activision Case — 600 → 15"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* Funnel Chart */}
            <motion.div variants={fadeUp(0.05)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Mergermarket Filter Funnel — deal 수의 감소" : "Mergermarket Filter Funnel — Deal Count Drop"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "8개 필터를 순차 적용 — 600개에서 final 15개까지" : "Eight filters applied in sequence — from 600 to a final 15"}
              </p>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart layout="vertical" data={FUNNEL.map((d) => ({ step: ko ? d.stepKo : d.stepEn, n: d.n, color: d.color }))} margin={{ top: 5, right: 50, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: "#6b7280" }} domain={[0, 700]} />
                  <YAxis type="category" dataKey="step" tick={{ fontSize: 10, fill: "#6b7280" }} width={120} />
                  <Tooltip
                    formatter={((v: number) => [`${v} deals`, ko ? "Deal 수" : "Deals"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="n" radius={[0, 4, 4, 0]}>
                    {FUNNEL.map((d, i) => <Cell key={i} fill={d.color} />)}
                    <LabelList dataKey="n" position="right" style={{ fontSize: 10, fontWeight: 700, fill: "#374151" }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Filter Detail Cards */}
            <motion.div variants={stagger} className="space-y-3">
              {FILTERS.map((f, i) => (
                <motion.div key={f.n} variants={fadeUp(i * 0.04)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[14px] font-black flex-shrink-0" style={{ color: ACCENT }}>{f.n}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? f.titleKo : f.titleEn}</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-1 font-semibold">{f.fieldKo}</p>
                      <div className="rounded-lg p-2 mb-1 font-mono text-[10.5px] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-200 whitespace-nowrap">{f.code}</code>
                      </div>
                      <p className="text-[11px] font-bold" style={{ color: ACCENT }}>{ko ? f.outputKo : f.outputEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.5)} className="mt-5 rounded-xl p-4 border" style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}>
              <p className="text-[12px] font-bold mb-1" style={{ color: ACCENT }}>
                {ko ? "→ Final 15 deals — Activision peer transactions" : "→ Final 15 deals — Activision peer transactions"}
              </p>
              <p className="text-[11px] text-gray-700 dark:text-gray-700 leading-relaxed">
                {ko
                  ? "Take-Two × Zynga (2022) · EA × Codemasters (2021) · Microsoft × ZeniMax (2021) · Activision × King (2016) · Tencent × Supercell (2016) · Disney × Maker Studios · Sony × Bungie (2022) · Embracer × Saber · ZeniMax × id Software · Microsoft × Mojang (2014) 등"
                  : "Take-Two × Zynga (2022), EA × Codemasters (2021), Microsoft × ZeniMax (2021), Activision × King (2016), Tencent × Supercell (2016), Disney × Maker Studios, Sony × Bungie (2022), Embracer × Saber, ZeniMax × id Software, Microsoft × Mojang (2014), etc."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 4 — 4-Sheet Workbook ══════════════════════════════════════ */}
          <motion.section id="workbook" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "4-시트 워크북 구조" : "4-Sheet Workbook"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Universe · Comps · Stats · Output" : "Universe · Comps · Stats · Output"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-4 mb-6"
            >
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-3">
                {ko ? "워크북 탭" : "Workbook tabs"}
              </p>
              <div className="flex items-center gap-0.5 overflow-x-auto pb-2">
                {SHEETS.map((s, i) => (
                  <div key={s.n} className="flex items-center flex-shrink-0">
                    <div className="px-3 py-2 rounded-t-lg border-t-2 border-x border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 font-mono text-[11px] font-bold"
                      style={{ borderTopColor: s.color }}
                    >
                      <span className="mr-1">{s.icon}</span>
                      {s.code}
                    </div>
                    {i < SHEETS.length - 1 && <span className="text-gray-300 dark:text-gray-600 px-1">→</span>}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-3">
              {SHEETS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUp(i * 0.05)}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="flex items-stretch gap-0">
                    <div className="flex-shrink-0 w-1.5" style={{ background: s.color }} />
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-2xl" aria-hidden>{s.icon}</span>
                        <span className="font-mono text-[12px] font-bold px-2 py-0.5 rounded text-white" style={{ background: s.color }}>{s.code}</span>
                        <span className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{ko ? s.titleKo : s.titleEn}</span>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{ko ? s.purposeKo : s.purposeEn}</p>
                      <div className="rounded-lg p-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{ko ? "행 구조" : "Row Structure"}</p>
                        <p className="font-mono text-[10px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.rowsKo : s.rowsEn}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 5 — Pre-Reference Price ═══════════════════════════════════ */}
          <motion.section id="pre-ref" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Pre-Reference Price 계산" : "Pre-Reference Price Calculation"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Premium %의 denominator를 정확히 잡기" : "Nailing the Denominator for Premium %"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-2xl p-5 border-2 mb-4" style={{ borderColor: ACCENT + "40", background: ACCENT_LIGHT }}>
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "Premium % 공식" : "Premium % Formula"}
              </p>
              <p className="font-mono text-center text-[14px] font-bold py-3 text-gray-900 dark:text-gray-100">
                Premium % = (Offer Price − Reference Price) ÷ Reference Price
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { titleKo: "1-Day Prior",  titleEn: "1-Day Prior",   bodyKo: "Announcement 전일 종가. Leak에 취약 — insider trading의 가격 영향이 들어있음.",                                      bodyEn: "Closing price one day before announcement. Vulnerable to leakage — insider-trading price impact embedded." },
                { titleKo: "1-Week VWAP",  titleEn: "1-Week VWAP",   bodyKo: "전 1주 거래량 가중 평균. 1-day보다 robust하지만 rumor period 못 잡음.",                                                 bodyEn: "Volume-weighted average over the prior week. More robust than 1-day, but still misses the rumor period." },
                { titleKo: "1-Month VWAP", titleEn: "1-Month VWAP",  bodyKo: "★ IB 표준. 'Unaffected price'라고 부름. Rumor·leak 모두 흡수.",                                                          bodyEn: "★ The IB standard. Called 'unaffected price'. Absorbs rumor and leak alike." },
                { titleKo: "3-Month VWAP", titleEn: "3-Month VWAP",  bodyKo: "Strategic conservative case. Earnings cycle 한 분기를 포함 — 더 stable.",                                                bodyEn: "Strategic conservative case. Captures one earnings quarter — most stable." },
              ].map((p, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.04)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? p.titleKo : p.titleEn}</h3>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? p.bodyKo : p.bodyEn}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.2)} className="mt-4 rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
              <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300 mb-2">{ko ? "Bloomberg VWAP Formula" : "Bloomberg VWAP Formula"}</p>
              <div className="font-mono text-[11px] rounded-lg bg-gray-50 dark:bg-gray-900/50 p-3 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                <code className="text-amber-700 dark:text-amber-400 font-bold whitespace-nowrap">=BVWAP(ticker, ann_date - 30, ann_date - 1, "DAILY")</code>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">
                {ko ? "* 1-month VWAP = announcement 직전 30 거래일 가중평균" : "* 1-month VWAP = volume-weighted average over the 30 trading days before announcement"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 6 — Synergy Backout ═══════════════════════════════════════ */}
          <motion.section id="synergy" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Synergy Backout 메소드" : "Synergy Backout Methodology"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Pure Control Premium을 분리하는 8단계" : "Eight Steps to Isolate Pure Control Premium"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="space-y-2">
              {SYNERGY_STEPS.map((s, i) => (
                <motion.div key={s.n} variants={fadeUp(i * 0.04)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50"
                >
                  <span className="font-mono text-[12px] font-black w-7 text-center rounded-md text-white" style={{ background: ACCENT }}>
                    {s.n}
                  </span>
                  <span className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.labelKo : s.labelEn}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.4)} className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
              <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300 mb-2">{ko ? "Excel NPV Formula" : "Excel NPV Formula"}</p>
              <div className="font-mono text-[11px] rounded-lg bg-gray-50 dark:bg-gray-900/50 p-3 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                <code className="text-amber-700 dark:text-amber-400 font-bold whitespace-nowrap">{`=NPV(buyer_WACC, syn_Y1*0.25, syn_Y2*0.50, syn_Y3*1.00, syn_Y4*1.00, syn_Y5*1.00) + Terminal_Syn/(buyer_WACC - g)/(1+buyer_WACC)^5`}</code>
              </div>
              <p className="text-[10px] text-gray-500 mt-2">
                {ko ? "* Phase-in × Cost+Revenue synergy, terminal portion with g (보통 2.5%)" : "* Phase-in × (cost + revenue synergy), terminal portion with g (typically 2.5%)"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 7 — Strategic vs Financial Split ═════════════════════════ */}
          <motion.section id="split" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Strategic vs Financial Split" : "Strategic vs Financial Split"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "둘을 항상 별도 cohort로" : "Always Keep Them in Separate Cohorts"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900 mb-4">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Median EV/EBITDA — Buyer Type별 (게이밍 sector, 2019-2024)" : "Median EV/EBITDA by Buyer Type (Gaming, 2019-2024)"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "Strategic 14.2x vs Financial 11.8x — 2.4x 차이가 synergy capacity의 시장가격" : "Strategic 14.2x vs Financial 11.8x — the 2.4x gap is the market price of synergy capacity"}
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={STRAT_VS_FIN.map((d) => ({ type: ko ? d.typeKo : d.typeEn, multiple: d.multiple, color: d.color }))} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="type" tick={{ fontSize: 11, fill: "#6b7280" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}x`} domain={[0, 18]} width={45} />
                  <Tooltip
                    formatter={((v: number) => [`${v}x`, ko ? "Median Multiple" : "Median Multiple"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="multiple" radius={[4, 4, 0, 0]}>
                    {STRAT_VS_FIN.map((d, i) => <Cell key={i} fill={d.color} />)}
                    <LabelList dataKey="multiple" position="top" style={{ fontSize: 11, fontWeight: 700, fill: "#374151" }} formatter={((v: number) => `${v}x`) as never} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div variants={fadeUp(0.2)} className="rounded-xl p-4 border" style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}>
              <p className="text-[12px] text-gray-700 dark:text-gray-700 leading-relaxed">
                <strong style={{ color: ACCENT }}>{ko ? "→ Honest comparison rule:" : "→ Honest comparison rule:"}</strong>{" "}
                {ko
                  ? "Strategic deal로 valuation할 때 Strategic peer median 사용. Financial deal (PE LBO)이면 Financial peer median. 두 cohort를 섞으면 'synergy 있는 척하는 가격'을 만들거나 'synergy 없는 척하는 가격'을 만듦 — 둘 다 잘못."
                  : "When valuing a strategic deal, use the Strategic peer median. For a financial deal (PE LBO), use the Financial peer median. Mixing the two manufactures a price that 'pretends to have synergy' or 'pretends not to' — both wrong."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 8 — Common Errors ═════════════════════════════════════════ */}
          <motion.section id="errors" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "흔한 모델링 에러" : "Common Modeling Errors"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "6가지 — 그리고 어떻게 피하는가" : "Six Errors — and How to Avoid Each"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ERRORS.map((e, i) => (
                <motion.div key={e.n} variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[14px] font-black flex-shrink-0" style={{ color: ACCENT }}>{e.n}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{ko ? e.titleKo : e.titleEn}</h3>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? e.bodyKo : e.bodyEn}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 9 — Sanity Checks ═════════════════════════════════════════ */}
          <motion.section id="sanity" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "Sanity Check Workflow" : "Sanity Check Workflow"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Publishing 전 6가지 확인" : "Six Checks Before Publishing"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="space-y-2">
              {SANITY.map((c, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.04)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50"
                >
                  <span className="text-lg flex-shrink-0">☑️</span>
                  <span className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.ko : c.en}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 10 — REVERSE CROSS-LINK + Next ════════════════════════════ */}
          <motion.section id="cross-link" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()}
              className="rounded-3xl p-8 border-2 relative overflow-hidden mb-4"
              style={{ borderColor: SIBLING, background: "linear-gradient(135deg, #ecfeff 0%, #fffbeb 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 text-[120px] leading-none -mr-4 -mt-4 select-none">💻</div>
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: SIBLING }}>
                {ko ? "개념으로 돌아가기 — Valuation 시리즈" : "Back to the Concept — Valuation Series"}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {ko ? "빌드 다음 → 개념 심화" : "After the Build → Deepen the Concept"}
              </h2>
              <p className="text-[14px] text-gray-700 leading-relaxed mb-6 max-w-xl">
                {ko
                  ? "왜 control premium이 두 컴포넌트로 분해되는지, strategic premium이 financial premium보다 5–15%p 높은 이유, MSFT × ATVI의 26% 프리미엄이 어떻게 정량화되는지 — 그 이론적 근거가 Val Ch.2에 있다."
                  : "Why control premium decomposes into two components, why strategic premium runs 5–15pp above financial, how MSFT × ATVI's 26% premium quantifies — the theoretical reasoning lives in Val Ch.2."}
              </p>
              <Link href={ko ? "/deal-101/transaction-comps" : "/en/deal-101/transaction-comps"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold text-white hover:opacity-90 transition-opacity shadow-md"
                style={{ background: SIBLING }}
              >
                📐 {ko ? "Valuation Ch.2 — Transaction Comps Concept" : "Valuation Ch.2 — Transaction Comps Concept"}
                <span className="text-lg">→</span>
              </Link>
            </motion.div>

            {/* Series complete message */}
            <motion.div variants={fadeUp(0.1)} className="rounded-2xl p-5 border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-900/10">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="text-[13px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                    {ko ? "Series complete — Comps pair!" : "Series complete — Comps pair!"}
                  </p>
                  <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {ko
                      ? "Trading + Transaction Comps build이 끝났다. 다음 챕터 (Modelling Ch.4) — Football Field — 는 Trading + Transaction + DCF를 한 차트에 통합하는 IB·PE 표준 (Coming Soon)."
                      : "Trading + Transaction Comps builds are done. Next chapter (Modelling Ch.4) — Football Field — integrates Trading + Transaction + DCF in one chart, the IB/PE standard (Coming Soon)."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─────────────────────────────────────────────── */}
          <div className="flex justify-center -mt-8">
            <ShareButtons title={ko ? titleKo : titleEn} variant="mid" lang={lang} />
          </div>

          {/* ══ FAQ ═════════════════════════════════════════════════════════════ */}
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
                {ko ? "Modelling 101 시리즈" : "Modelling 101 Series"}
              </h3>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              <Link href={ko ? "/deal-101/trading-comps-build" : "/en/deal-101/trading-comps-build"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-amber-300 hover:text-amber-600 transition-colors"
              >
                ← {ko ? "Ch.2 Trading Comps Build" : "Ch.2 Trading Comps Build"}
              </Link>
              <Link href={ko ? "/deal-101" : "/en/deal-101"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-amber-300 hover:text-amber-600 transition-colors"
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
