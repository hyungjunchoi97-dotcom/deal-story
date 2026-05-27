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
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#6366f1";
const ACCENT_LIGHT = "#eef2ff";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const LBO_SERIES = [
  { slug: "lbo-overview",          ch: 0, title: (ko: boolean) => ko ? "LBO의 본질"          : "What Is LBO?"      },
  { slug: "lbo-capital-structure", ch: 1, title: (ko: boolean) => ko ? "Ch.1 자본구조 해부"   : "Ch.1 Capital Stack" },
  { slug: "lbo-returns",           ch: 2, title: (ko: boolean) => ko ? "Ch.2 리턴 분석"       : "Ch.2 Return Math"  },
  { slug: "lbo-deal-process",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 딜 프로세스"     : "Ch.3 Deal Process" },
];
const THIS_CH = 1;

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {LBO_SERIES.map((ch) => {
          const isCurrent = ch.ch === THIS_CH;
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

// ── Debt Tranche Data ─────────────────────────────────────────────────────────
const TRANCHES = [
  {
    id: "tla",
    tier: 1,
    label: "Term Loan A (TLA)",
    pct: 15,
    rate: (ko: boolean) => ko ? "SOFR + 200–275bp" : "SOFR + 200–275bp",
    security: (ko: boolean) => ko ? "1순위 담보" : "1st Lien Secured",
    recovery: "75–95%",
    maturity: (ko: boolean) => ko ? "5–7년, 분할상환" : "5–7yr, amortizing",
    investors: (ko: boolean) => ko ? "은행 (관계금융)" : "Banks (relationship lending)",
    color: "#0ea5e9",  // sky
    bar: 15,
    note: (ko: boolean) => ko
      ? "은행들이 주로 보유. 매년 원금을 일정 비율 상환(amortization)하는 구조. 회전신용(RCF)도 이 그룹."
      : "Primarily held by banks. Principal amortizes on a schedule. Revolving credit facilities (RCF) are also in this group.",
  },
  {
    id: "tlb",
    tier: 1,
    label: "Term Loan B (TLB)",
    pct: 30,
    rate: (ko: boolean) => ko ? "SOFR + 300–500bp" : "SOFR + 300–500bp",
    security: (ko: boolean) => ko ? "1순위 담보" : "1st Lien Secured",
    recovery: "60–85%",
    maturity: (ko: boolean) => ko ? "7년, 만기일시상환" : "7yr, bullet repayment",
    investors: (ko: boolean) => ko ? "CLO, 크레딧 펀드, 헤지펀드" : "CLO, credit funds, hedge funds",
    color: "#6366f1",  // indigo
    bar: 30,
    note: (ko: boolean) => ko
      ? "LBO 자금 조달의 핵심 수단. 매년 1%만 상환하고 만기에 나머지 전액을 일시상환. 기관투자자(CLO, 크레딧 펀드)가 주로 보유."
      : "The workhorse of LBO financing. Only 1% annual amortization, with the rest due as a bullet at maturity. Primarily held by institutional investors (CLOs, credit funds).",
  },
  {
    id: "senior_notes",
    tier: 2,
    label: (ko: boolean) => ko ? "시니어 노트 (HY Bond)" : "Senior Notes (HY Bond)",
    labelStr: "Senior Notes (HY Bond)",
    pct: 20,
    rate: (ko: boolean) => ko ? "고정 8–12%" : "Fixed 8–12%",
    security: (ko: boolean) => ko ? "무담보 (Senior Unsecured)" : "Unsecured (Senior Unsecured)",
    recovery: "30–60%",
    maturity: (ko: boolean) => ko ? "8–10년, 만기일시상환" : "8–10yr, bullet",
    investors: (ko: boolean) => ko ? "HY 전문 펀드, 헤지펀드" : "HY-dedicated funds, hedge funds",
    color: "#8b5cf6",  // violet
    bar: 20,
    note: (ko: boolean) => ko
      ? "공개 채권시장에서 발행되는 고수익 채권. 담보가 없어 TLA/TLB보다 회수율이 낮다. 이자를 현금으로 정기 지급해야 해서 현금흐름 부담이 있다."
      : "Publicly issued high-yield bonds. No collateral, so recovery ranks below TLA/TLB. Fixed coupon paid in cash, creating ongoing cash flow demands.",
  },
  {
    id: "mezz",
    tier: 3,
    label: (ko: boolean) => ko ? "메자닌 / 2순위 대출" : "Mezzanine / Second Lien",
    labelStr: "Mezzanine / Second Lien",
    pct: 10,
    rate: (ko: boolean) => ko ? "SOFR + 700–1000bp 또는 PIK" : "SOFR + 700–1000bp or PIK",
    security: (ko: boolean) => ko ? "2순위 담보 또는 무담보" : "2nd Lien or Unsecured",
    recovery: "15–40%",
    maturity: (ko: boolean) => ko ? "8–10년" : "8–10yr",
    investors: (ko: boolean) => ko ? "메자닌 펀드, 특수상황 펀드" : "Mezzanine funds, special situations",
    color: "#f59e0b",  // amber
    bar: 10,
    note: (ko: boolean) => ko
      ? "선순위 부채와 주식 사이의 중간 계층. 위험이 높아 이자율이 높고, PIK(현금 대신 원금에 이자 가산) 구조로 현금 부담을 줄이기도 한다."
      : "The bridge between senior debt and equity. Higher risk means higher rates. Often structured as PIK (interest added to principal instead of paid in cash) to reduce immediate cash burden.",
  },
  {
    id: "equity",
    tier: 4,
    label: (ko: boolean) => ko ? "자기자본 (PE Equity)" : "PE Equity",
    labelStr: "PE Equity",
    pct: 25,
    rate: (ko: boolean) => ko ? "목표 IRR 20%+" : "Target IRR 20%+",
    security: (ko: boolean) => ko ? "잔여 청구권" : "Residual Claim",
    recovery: (ko: boolean) => ko ? "0 ~ 무한대 (잔여)" : "0 to unlimited (residual)",
    maturity: (ko: boolean) => ko ? "5–7년 (Exit 시 실현)" : "5–7yr (realized at Exit)",
    investors: (ko: boolean) => ko ? "PE 펀드 (GP + LP)" : "PE fund (GP + LP)",
    color: "#6b7280",  // gray
    bar: 25,
    note: (ko: boolean) => ko
      ? "부채 전액을 상환한 후 남는 잔여 가치가 모두 자기자본에 귀속된다. 부도 시 가장 마지막으로 보상받는다(선순위 청구권 후)."
      : "All residual value after full debt repayment belongs to equity. In bankruptcy, equity is the last to be paid — after all senior creditors.",
  },
];

// ── Hilton 2007 Capital Structure ─────────────────────────────────────────────
const HILTON_TRANCHES = [
  { label: "Term Loan A ($7.1B)", rate: "LIBOR+300", pct: 27.3, color: "#0ea5e9" },
  { label: "Term Loan B ($5.0B)", rate: "LIBOR+325", pct: 19.2, color: "#6366f1" },
  { label: "Senior Notes ($3.6B)", rate: "10.875%", pct: 13.8, color: "#8b5cf6" },
  { label: "Mezz ($2.6B)", rate: "11.625%", pct: 10.0, color: "#f59e0b" },
  { label: "PIK ($2.1B)", rate: "PIK 12.5%", pct: 8.1, color: "#ef4444" },
  { label: "PE Equity ($5.7B)", rate: "Target 20%+", pct: 21.9, color: "#6b7280" },
];

// ── TLA vs TLB Comparison ────────────────────────────────────────────────────
const TL_COMPARISON = [
  {
    item: (ko: boolean) => ko ? "주요 보유자" : "Typical Holders",
    tla: (ko: boolean) => ko ? "신디케이트 은행 (관계 금융)" : "Syndicate banks (relationship)",
    tlb: (ko: boolean) => ko ? "CLO, 크레딧 펀드, 헤지펀드" : "CLOs, credit funds, hedge funds",
  },
  {
    item: (ko: boolean) => ko ? "원금 상환" : "Amortization",
    tla: (ko: boolean) => ko ? "매년 10–20% 상환 (분할상환)" : "10–20% p.a. amortization",
    tlb: (ko: boolean) => ko ? "연 1% 명목상환, 만기 일시상환" : "1% p.a. token, bullet at maturity",
  },
  {
    item: (ko: boolean) => ko ? "만기" : "Maturity",
    tla: (ko: boolean) => ko ? "5–7년" : "5–7 years",
    tlb: (ko: boolean) => ko ? "7년 (더 길 수 있음)" : "7 years (can be longer)",
  },
  {
    item: (ko: boolean) => ko ? "금리 스프레드" : "Rate Spread",
    tla: (ko: boolean) => ko ? "SOFR + 200–275bp (낮음)" : "SOFR + 200–275bp (lower)",
    tlb: (ko: boolean) => ko ? "SOFR + 300–500bp (높음)" : "SOFR + 300–500bp (higher)",
  },
  {
    item: (ko: boolean) => ko ? "코버넌트" : "Covenants",
    tla: (ko: boolean) => ko ? "Maintenance Covenants (정기 재무 테스트)" : "Maintenance covenants (periodic tests)",
    tlb: (ko: boolean) => ko ? "Incurrence-only (행동 기반, Cov-Lite)" : "Incurrence-only (action-based, Cov-Lite)",
  },
  {
    item: (ko: boolean) => ko ? "담보·선순위" : "Collateral/Seniority",
    tla: (ko: boolean) => ko ? "1순위 담보 (TLB와 동등 또는 우선)" : "1st lien (pari passu or senior to TLB)",
    tlb: (ko: boolean) => ko ? "1순위 담보 (TLA와 동등)" : "1st lien (pari passu with TLA)",
  },
  {
    item: (ko: boolean) => ko ? "유동성" : "Liquidity",
    tla: (ko: boolean) => ko ? "낮음 (은행 간 매매 제한적)" : "Lower (limited secondary trading)",
    tlb: (ko: boolean) => ko ? "높음 (레버드론 2차시장에서 활발히 거래)" : "Higher (active secondary market trading)",
  },
  {
    item: (ko: boolean) => ko ? "LBO에서 비중" : "LBO Usage",
    tla: (ko: boolean) => ko ? "보조적 (RCF 포함)" : "Secondary (includes RCF)",
    tlb: (ko: boolean) => ko ? "핵심 — 전체 LBO 부채의 30–50%" : "Primary — 30–50% of total LBO debt",
  },
];

// ── PIK Compounding Data ──────────────────────────────────────────────────────
const PIK_DATA = [
  { year: 0, cash: 100, pik: 100 },
  { year: 1, cash: 100, pik: 112.5 },
  { year: 2, cash: 100, pik: 126.6 },
  { year: 3, cash: 100, pik: 142.4 },
  { year: 4, cash: 100, pik: 160.2 },
  { year: 5, cash: 100, pik: 180.2 },
  { year: 6, cash: 100, pik: 202.7 },
  { year: 7, cash: 100, pik: 228.0 },
];

// ── Covenant Types ────────────────────────────────────────────────────────────
const COVENANT_TYPES = [
  {
    type: "Maintenance",
    description: (ko: boolean) => ko
      ? "매 분기마다 재무 비율을 테스트한다. Net Leverage ≤ 6.0x, Interest Coverage ≥ 2.0x 등. 기준을 충족하지 못하면 즉시 Default 또는 Waiver 협상."
      : "Financial ratios are tested every quarter. Net Leverage ≤ 6.0x, Interest Coverage ≥ 2.0x, etc. Failing a test triggers immediate default or waiver negotiation.",
    when: (ko: boolean) => ko ? "매 분기 자동 테스트" : "Automatically tested each quarter",
    who: (ko: boolean) => ko ? "TLA (은행 대출)" : "TLA (bank loans)",
    protection: (ko: boolean) => ko ? "강함 — 조기 경보 시스템" : "Strong — early warning system",
    color: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    type: "Incurrence",
    description: (ko: boolean) => ko
      ? "특정 행동(신규 부채 조달, M&A, 배당 지급 등)을 할 때만 트리거된다. 아무것도 안 하면 테스트 자체가 없다. 이를 '코버넌트-라이트(Cov-Lite)'라고 부른다."
      : "Only triggered when a specific action occurs (new debt incurrence, M&A, dividend payment, etc.). No action means no test. This is called 'covenant-lite'.",
    when: (ko: boolean) => ko ? "특정 행동 발생 시에만" : "Only when specific action is taken",
    who: (ko: boolean) => ko ? "TLB (기관 대출), HY 채권" : "TLB (institutional loans), HY bonds",
    protection: (ko: boolean) => ko ? "약함 — 조용히 악화 가능" : "Weak — silent deterioration possible",
    color: "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
];

// ── DSCR Data ────────────────────────────────────────────────────────────────
const DSCR_DATA = [
  { year: "Y1", ebitda: 180, interest: 140, dscr: 1.29 },
  { year: "Y2", ebitda: 200, interest: 135, dscr: 1.48 },
  { year: "Y3", ebitda: 240, interest: 125, dscr: 1.92 },
  { year: "Y4", ebitda: 280, interest: 115, dscr: 2.43 },
  { year: "Y5", ebitda: 320, interest: 100, dscr: 3.20 },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Term Loan B가 LBO의 핵심인 이유는 무엇인가요?" : "Why is Term Loan B the workhorse of LBO financing?",
    a: (ko: boolean) => ko
      ? "Term Loan B는 세 가지 특성 때문에 PE에게 이상적입니다. ① 원금 상환이 7년간 1%씩만 이루어져 현금흐름 부담이 최소화됩니다 (나머지는 만기 일시상환). ② Cov-Lite 구조라 분기 재무 테스트가 없어 경영 유연성이 높습니다. ③ CLO·크레딧 펀드 같은 기관투자자들이 활발히 참여해 조달 규모가 큽니다. 반면 은행이 주로 보유하는 TLA는 분할상환과 Maintenance Covenant로 PE 입장에서 제약이 많습니다."
      : "Term Loan B is ideal for PE for three reasons. ① Minimal amortization — only 1% annually for 7 years, minimizing cash flow burden (remaining balance paid as bullet at maturity). ② Cov-Lite structure — no quarterly financial ratio tests, giving management flexibility. ③ Deep institutional investor demand from CLOs and credit funds enables large-scale fundraising. By contrast, TLA held by banks requires scheduled amortization and maintenance covenants, creating more constraints for PE.",
  },
  {
    q: (ko: boolean) => ko ? "PIK 노트가 왜 위험한가요?" : "Why are PIK notes dangerous?",
    a: (ko: boolean) => ko
      ? "PIK(Payment-In-Kind)은 이자를 현금 대신 원금에 가산하는 방식입니다. 예를 들어 원금 $100M, 금리 12.5%인 PIK 노트는 첫 해에 $12.5M 이자를 현금으로 내는 게 아니라 원금이 $112.5M으로 늘어납니다. 복리 효과로 7년 후 원금이 $228M으로 불어납니다. 단기적으로는 현금 지출을 줄여 운영에 여유를 주지만, 만기가 가까워질수록 갚아야 할 원금이 폭발적으로 늘어납니다. Hilton의 $2.1B PIK 노트가 GFC 이후 재무 압박을 가중시킨 원인 중 하나였습니다."
      : "PIK (Payment-In-Kind) pays interest by adding to principal rather than paying cash. For example, a $100M PIK note at 12.5% doesn't pay $12.5M cash in Year 1 — instead, the principal grows to $112.5M. Through compounding, the principal balloons to $228M by Year 7. Short-term, this reduces cash outflow and gives operational breathing room. But as maturity approaches, the repayment obligation explodes. Hilton's $2.1B PIK note was one factor aggravating financial pressure during and after the GFC.",
  },
  {
    q: (ko: boolean) => ko ? "Covenant-Lite는 무조건 차입자에게 유리한가요?" : "Is covenant-lite always good for borrowers?",
    a: (ko: boolean) => ko
      ? "단기적으로는 경영 유연성 측면에서 유리합니다 — 매 분기 재무 비율을 맞추지 않아도 되니까요. 그러나 장기적으로는 채권자에게 조기 경보 메커니즘이 없어서 문제가 심각해진 후에야 발견될 수 있습니다. 차입자 입장에서도 문제가 있습니다: 재무 악화 초기에 채권자와의 재협상 기회(Waiver)가 없어서, 결국 부도에 이를 때까지 조용히 진행되다가 갑작스러운 파산으로 이어지는 경우가 있습니다. Cov-Lite는 금리가 낮고 부채가 쉽게 차환될 때는 문제없지만, 금리 인상기나 경기 침체기에 취약성이 드러납니다."
      : "Short-term, it's beneficial for borrower management flexibility — no quarterly ratio tests to hit. But long-term, the absence of early warning mechanisms for lenders means problems can grow undetected until they're severe. There's a paradox for borrowers too: without early covenant trips, there's no waiver negotiation opportunity at the first sign of trouble — problems quietly compound until a sudden bankruptcy. Cov-Lite works fine when rates are low and debt is easily refinanced, but vulnerability surfaces in rate-rising environments and recessions.",
  },
  {
    q: (ko: boolean) => ko ? "DSCR은 어떻게 계산하고 몇 배가 안전한가요?" : "How is DSCR calculated and what's a safe level?",
    a: (ko: boolean) => ko
      ? "DSCR(Debt Service Coverage Ratio, 부채상환비율) = EBITDA ÷ (이자 + 원금 상환액). 분자에는 Cash EBITDA(비현금 비용 제거, CapEx 고려)를, 분모에는 실제 현금 지출 부채상환액을 씁니다. 1.0x는 딱 상환 가능, 1.5x면 50% 여유, 2.0x면 100% 여유. LBO 업계에서 안전 기준은 최소 1.2–1.3x, 이상적으로는 1.5x 이상입니다. DSCR이 1.0x 미만이 되면 이자를 못 내는 상태(Interest Coverage < 1x)로 즉각 Default 위험입니다."
      : "DSCR = EBITDA ÷ (interest + principal repayment). The numerator uses Cash EBITDA (removing non-cash charges, adjusting for capex), and the denominator uses actual cash debt service. A 1.0x DSCR means exactly enough to service debt, 1.5x means 50% cushion, 2.0x means 100% cushion. LBO industry minimum safety threshold: 1.2–1.3x, ideally 1.5x or above. DSCR below 1.0x means interest cannot be paid (Interest Coverage < 1x) — immediate default risk.",
  },
  {
    q: (ko: boolean) => ko ? "왜 LBO 부채는 은행 대출과 채권이 섞여 있나요?" : "Why does LBO debt mix bank loans and bonds?",
    a: (ko: boolean) => ko
      ? "각 투자자 그룹이 선호하는 상품과 위험-수익 프로파일이 다르기 때문입니다. 은행(TLA/RCF)은 낮은 수익률에 담보와 정기 상환을 원합니다 — 규제 자본 요건 때문에 위험을 낮춰야 합니다. CLO·크레딧 펀드(TLB)는 유동성 있는 레버드론을 원합니다. HY 펀드는 고정 이자율의 공개 채권을 원합니다 — 포트폴리오 듀레이션 관리 필요. 메자닌 펀드는 위험 높은 대신 높은 수익률을 원합니다. 이처럼 여러 투자자 그룹이 각자 원하는 부분을 가져감으로써 PE는 더 큰 규모의 레버리지를 낮은 평균 비용으로 조달할 수 있습니다."
      : "Because different investor groups have different preferred products and risk-return profiles. Banks (TLA/RCF) want low yield with collateral and scheduled repayment — regulatory capital requirements demand low risk. CLOs and credit funds (TLB) want liquid leveraged loans. HY funds want publicly issued fixed-rate bonds — duration management needs. Mezzanine funds want higher yields in exchange for higher risk. By satisfying each investor group's preference, PE achieves larger total leverage at a lower blended cost than any single instrument alone.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Standard & Poor's LCD. (2024). Leveraged Lending Review — Covenant Analysis." },
  { id: 2, text: "Blackstone Group. (2014). Hilton Hotels — IPO Prospectus, Capital Structure Disclosure." },
  { id: 3, text: "Moody's. (2023). Leveraged Loan Default & Recovery Study." },
  { id: 4, text: "Fried, J.M. & Wang, C. (2019). Short-Termism and Capital Flows. Review of Corporate Finance Studies." },
  { id: 5, text: "Kliger, D. & Sarig, O. (2000). The Information Value of Bond Ratings. Journal of Finance." },
  { id: 6, text: "Bain & Company. (2024). Global Private Equity Report — Leveraged Finance Trends." },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function LboCapitalStructureClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-indigo-600 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-indigo-600 transition-colors">
                {ko ? "딜 101" : "Deal 101"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/deal-101/lbo-overview" : "/en/deal-101/lbo-overview"} className="hover:text-indigo-600 transition-colors">
                {ko ? "LBO의 본질" : "What Is LBO?"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {ko ? "자본구조 해부" : "Capital Stack"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                LBO
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                Ch.1
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mt-4"
            >
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link href="/deal-101/lbo-capital-structure"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={ko ? { background: ACCENT } : {}}
              >한국어</Link>
              <Link href="/en/deal-101/lbo-capital-structure"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "text-white" : "text-gray-400 hover:text-gray-600"}`}
                style={!ko ? { background: ACCENT } : {}}
              >English</Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>
        <ChapterNav lang={lang} />

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Ch.1: 부채 피라미드 개요 ══════════════════════════════════════════ */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LBO 자본구조 — 위에서 아래로 읽는 부채 피라미드" : "LBO Capital Stack — The Debt Pyramid, Top to Bottom"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "LBO의 자본구조를 이해하는 핵심 프레임: 피라미드를 위에서 아래로 읽으면 선순위(안전)에서 후순위(위험)로 이동한다. 위에 있을수록 이자율이 낮고 회수율이 높다. 아래에 있을수록 수익 잠재력이 크지만 위험도 높다.",
                "전형적인 LBO 자본구조는 4–6개 계층으로 구성된다: ① 1순위 담보 대출 (TLA + TLB) ② 2순위 담보 대출 또는 메자닌 ③ 선순위 무담보 채권 (HY Bond) ④ PIK 노트 (해당되는 경우) ⑤ 자기자본 (PE Equity). 각 계층은 서로 다른 투자자 그룹이 서로 다른 위험-수익 매개변수로 보유한다.",
                "이 복잡한 구조의 목적은 단순하다: PE 펀드가 가장 많은 레버리지를 가장 낮은 평균 조달 비용으로 구조화하는 것이다. 각 계층은 특정 투자자의 수요를 충족하도록 설계된다 — 어느 한 투자자가 전체를 인수하기 어렵기 때문이다.",
              ] : [
                "The core framework for understanding LBO capital structure: reading the pyramid from top to bottom moves from senior (safe) to junior (risky). Higher in the stack means lower interest rate and higher recovery. Lower means greater return potential — but greater risk.",
                "A typical LBO capital structure has 4–6 layers: ① 1st lien secured loans (TLA + TLB), ② 2nd lien secured loans or mezzanine, ③ senior unsecured notes (HY bonds), ④ PIK notes (where applicable), ⑤ PE equity. Each layer is held by a different investor group with different risk-return parameters.",
                "The purpose of this complexity is simple: structuring maximum leverage at the lowest blended cost for the PE fund. Each layer is designed to satisfy a specific investor's demand — because no single investor can absorb the entire capital requirement.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Tranche Cards */}
            <motion.div variants={stagger} className="space-y-3">
              {TRANCHES.map((t, i) => (
                <motion.div
                  key={t.id}
                  variants={fadeUp(i * 0.04)}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="flex items-start gap-0">
                    {/* Color bar (width proportional to %) */}
                    <div
                      className="flex-shrink-0 self-stretch min-w-[6px]"
                      style={{ background: t.color, width: `${Math.max(t.bar / 2, 6)}px` }}
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                              {typeof t.label === "function" ? t.label(ko) : t.label}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: t.color }}>
                              {t.pct}%
                            </span>
                            <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                              {ko ? "회수율" : "Recovery"}: {typeof t.recovery === "string" ? t.recovery : t.recovery(ko)}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] mb-2">
                            <div>
                              <p className="text-gray-400 dark:text-gray-500">{ko ? "금리" : "Rate"}</p>
                              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.rate(ko)}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 dark:text-gray-500">{ko ? "담보" : "Security"}</p>
                              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.security(ko)}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 dark:text-gray-500">{ko ? "만기" : "Maturity"}</p>
                              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.maturity(ko)}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 dark:text-gray-500">{ko ? "투자자" : "Investors"}</p>
                              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.investors(ko)}</p>
                            </div>
                          </div>
                          <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{t.note(ko)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 bg-gray-100 dark:bg-gray-800">
                    <motion.div
                      className="h-full"
                      style={{ background: t.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Seniority callout */}
            <motion.div
              variants={fadeUp(0.2)}
              className="mt-5 rounded-xl p-4 border"
              style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}
            >
              <p className="text-[13px] font-bold mb-1" style={{ color: ACCENT }}>
                {ko ? "선순위 원칙 (Absolute Priority Rule)" : "Absolute Priority Rule"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-600 leading-relaxed">
                {ko
                  ? "부도 발생 시 부채 계층은 위에서 아래 순서로 보상받는다. 1순위 담보 채권자가 전액 회수하지 않으면, 아래 계층은 아무것도 못 받는다. 이것이 자기자본이 가장 마지막에 보상받는 이유다 — EV가 충분히 크지 않으면 자기자본 가치는 0이다."
                  : "In bankruptcy, the capital stack is repaid in order from top to bottom. If 1st lien secured creditors don't recover in full, lower tranches receive nothing. This is why equity is last — if the enterprise value isn't large enough, equity is worth zero."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.2: TLA vs TLB ══════════════════════════════════════════════════ */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Term Loan A vs. Term Loan B — LBO의 두 기둥" : "Term Loan A vs. Term Loan B — The Two Pillars of LBO"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "레버드 파이낸스에서 가장 많이 듣는 말이 'TLB'다. Term Loan B는 LBO 자금 조달의 핵심이다 — 규모가 크고, CLO 같은 기관투자자들이 적극적으로 참여하며, PE에게 유리한 조건(Cov-Lite, 적은 상환 의무)을 갖추고 있다. TLA는 TLB의 보조적 역할을 하며 주로 은행이 보유한다.",
                "2010년대 이후 TLB 시장의 가장 큰 변화는 Cov-Lite의 표준화다. 2010년 이전에는 레버드 대출의 약 30%만이 Cov-Lite였지만, 2022년에는 80%가 넘는 레버드 대출이 Cov-Lite 구조를 채택했다. 이는 CLO·크레딧 펀드 수요가 폭발적으로 증가하면서 차입자 우호적 조건이 표준화됐기 때문이다.",
              ] : [
                "In leveraged finance, the most-used term is 'TLB.' Term Loan B is the backbone of LBO financing — large volume, active institutional investor participation (CLOs), and PE-friendly terms (Cov-Lite, minimal amortization). TLA plays a supporting role, held primarily by banks.",
                "The biggest market shift since 2010 is the standardization of Cov-Lite. Before 2010, roughly 30% of leveraged loans were covenant-lite. By 2022, over 80% of leveraged loans used Cov-Lite structures. This reflects explosive growth in CLO/credit fund demand, which enabled borrower-friendly terms to become the norm.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* TLA vs TLB Comparison Table */}
            <motion.div variants={fadeUp(0.1)} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300 w-[130px]">{ko ? "항목" : "Item"}</th>
                    <th className="text-left py-3 px-4 font-bold text-sky-600 dark:text-sky-400">Term Loan A (TLA)</th>
                    <th className="text-left py-3 px-4 font-bold" style={{ color: ACCENT }}>Term Loan B (TLB)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {TL_COMPARISON.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">{row.item(ko)}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.tla(ko)}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.tlb(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Cov-Lite rise chart */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
            >
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Cov-Lite 레버드 대출 비중 추이" : "Cov-Lite Share of Leveraged Loans"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "미국 레버드 대출 시장에서 Cov-Lite(Incurrence-only) 비중 (%)" : "Share of US leveraged loans with covenant-lite (incurrence-only) structure (%)"}
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
                  data={[
                    { year: "2008", pct: 14 }, { year: "2010", pct: 22 }, { year: "2012", pct: 45 },
                    { year: "2014", pct: 62 }, { year: "2016", pct: 72 }, { year: "2018", pct: 80 },
                    { year: "2020", pct: 83 }, { year: "2022", pct: 87 }, { year: "2023", pct: 85 },
                  ]}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} width={38} />
                  <Tooltip formatter={(v) => [`${Number(v)}%`, ko ? "Cov-Lite 비중" : "Cov-Lite Share"]} contentStyle={{ fontSize: 11, borderRadius: 8 }} />
                  <ReferenceLine y={50} stroke="#9ca3af" strokeDasharray="3 3" />
                  <Bar dataKey="pct" radius={[3, 3, 0, 0]}>
                    {[14, 22, 45, 62, 72, 80, 83, 87, 85].map((v, i) => (
                      <Cell key={i} fill={v >= 70 ? ACCENT : v >= 40 ? "#8b5cf6" : "#94a3b8"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko ? "출처: LCD/S&P Global (모식도)" : "Source: LCD/S&P Global (stylized)"}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.3: 코버넌트 해부 ═══════════════════════════════════════════════ */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "코버넌트 해부 — Maintenance vs. Incurrence" : "Covenant Anatomy — Maintenance vs. Incurrence"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "코버넌트(Covenant, 재무약정)는 채권자가 차입자의 재무 건전성을 감시·제어하기 위한 계약 조항이다. 채권자에게는 조기 경보 시스템이고, 차입자에게는 경영 행동에 대한 제약이다.",
                "LBO 업계에서 코버넌트 유형은 크게 두 가지로 나뉜다: 정기적으로 재무 비율을 테스트하는 Maintenance Covenant와, 특정 행동이 발생할 때만 트리거되는 Incurrence Covenant. 최근 들어 기관투자자(CLO) 수요 폭증으로 Incurrence-only, 즉 Cov-Lite 구조가 표준화됐다.",
              ] : [
                "Covenants are contractual provisions through which creditors monitor and control borrower financial health. For creditors, they're an early warning system. For borrowers, they're constraints on management actions.",
                "In the LBO market, covenants fall into two main types: Maintenance Covenants (periodic financial ratio tests) and Incurrence Covenants (triggered only by specific actions). With the surge in CLO demand, Incurrence-only (Cov-Lite) structures have become the standard.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COVENANT_TYPES.map((c, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.1)} className={`rounded-xl border p-5 ${c.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${c.badge}`}>{c.type}</span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{c.description(ko)}</p>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex gap-2">
                      <span className="text-gray-400 dark:text-gray-500 w-[60px] flex-shrink-0">{ko ? "트리거" : "Trigger"}:</span>
                      <span className="font-medium text-gray-600 dark:text-gray-400">{c.when(ko)}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 dark:text-gray-500 w-[60px] flex-shrink-0">{ko ? "적용 대상" : "Used in"}:</span>
                      <span className="font-medium text-gray-600 dark:text-gray-400">{c.who(ko)}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 dark:text-gray-500 w-[60px] flex-shrink-0">{ko ? "보호 수준" : "Protection"}:</span>
                      <span className="font-medium text-gray-600 dark:text-gray-400">{c.protection(ko)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key covenant metrics */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                  {ko ? "주요 Maintenance Covenant 지표" : "Key Maintenance Covenant Metrics"}
                </h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    metric: "Net Leverage (Net Debt / EBITDA)",
                    threshold: (ko: boolean) => ko ? "≤ 6.0x (LBO 초기), ≤ 5.0x (3–4년 후)" : "≤ 6.0x (initial), ≤ 5.0x (3–4yr)",
                    if_breach: (ko: boolean) => ko ? "Default → 조기상환 요구 또는 Waiver 협상" : "Default → acceleration or waiver negotiation",
                  },
                  {
                    metric: "Interest Coverage (EBITDA / Interest)",
                    threshold: (ko: boolean) => ko ? "≥ 2.0x (최소), ≥ 2.5x (이상적)" : "≥ 2.0x (minimum), ≥ 2.5x (ideal)",
                    if_breach: (ko: boolean) => ko ? "현금흐름 압박 신호 — 즉각 조기 경보" : "Cash flow pressure signal — immediate early warning",
                  },
                  {
                    metric: "Total Leverage (Total Debt / EBITDA)",
                    threshold: (ko: boolean) => ko ? "≤ 7.0–8.0x (GFC 이전), ≤ 6.0x (현재 일반적)" : "≤ 7.0–8.0x (pre-GFC), ≤ 6.0x (current typical)",
                    if_breach: (ko: boolean) => ko ? "Default → 재협상 또는 자산 매각 압박" : "Default → renegotiation or asset sale pressure",
                  },
                  {
                    metric: "Fixed Charge Coverage Ratio (FCCR)",
                    threshold: (ko: boolean) => ko ? "≥ 1.2x (EBITDA ÷ (이자+CapEx+원금+임차료))" : "≥ 1.2x (EBITDA ÷ (interest+capex+amort+rent))",
                    if_breach: (ko: boolean) => ko ? "전체 부채상환 능력 부족 — 부도 위험" : "Insufficient total debt service capacity — default risk",
                  },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2 px-5 py-3">
                    <div className="sm:w-[220px] flex-shrink-0">
                      <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300">{row.metric}</p>
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <p className="text-gray-400 dark:text-gray-500">{ko ? "기준" : "Threshold"}</p>
                        <p className="text-gray-700 dark:text-gray-300">{row.threshold(ko)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 dark:text-gray-500">{ko ? "위반 시" : "If breached"}</p>
                        <p className="text-gray-700 dark:text-gray-300">{row.if_breach(ko)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ══ Ch.4: PIK 메커니즘 ═══════════════════════════════════════════════ */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "PIK Toggle — 이자를 안 내고 원금을 키우는 구조" : "PIK Toggle — Deferring Cash Interest by Growing Principal"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "PIK(Payment-In-Kind)은 이자를 현금으로 지급하는 대신 원금에 가산하는 채권 구조다. 예를 들어 PIK 금리 12.5%, 원금 $100M이면, 첫 해 이자 $12.5M을 현금으로 내는 게 아니라 원금이 $112.5M으로 커진다. 이 프로세스가 7년간 복리로 쌓이면 원금은 $228M으로 불어난다.",
                "PE 입장에서 PIK의 매력은 현금 유출 최소화다. 초기 운영 재편 기간에 현금흐름이 불안정한 포트폴리오 컴퍼니에게 숨통을 트여준다. 그러나 만기 시 폭발적으로 커진 원금을 상환해야 한다는 시한폭탄이 내재되어 있다.",
                "Hilton의 경우 2007년 인수 시 $2.1B PIK Toggle 노트를 구조화했다. GFC 이후 현금흐름이 급감했을 때 PIK 옵션을 활용해 현금 부담을 줄였지만, 이는 원금이 지속적으로 불어나는 결과를 초래했다.",
              ] : [
                "PIK (Payment-In-Kind) is a debt structure where interest is added to principal rather than paid in cash. For example, a PIK note at 12.5% on $100M principal: instead of paying $12.5M cash interest in Year 1, the principal grows to $112.5M. Compounded over 7 years, the principal balloons to $228M.",
                "For PE, the appeal is minimizing cash outflows — giving portfolio companies breathing room during early operational restructuring when cash flows are unstable. But a time bomb is embedded: a dramatically larger principal balance must be repaid at maturity.",
                "For Hilton, $2.1B in PIK Toggle notes were structured at the 2007 acquisition. When GFC hit and cash flows plummeted, the PIK option was exercised to reduce cash burden — but this caused principal to continuously compound, adding to the overall debt pressure.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* PIK Compounding Chart */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "PIK vs. 현금 이자 — 원금 증가 비교 (12.5%, 원금 $100M 가정)" : "PIK vs. Cash Interest — Principal Growth (12.5% rate, $100M initial)"}
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={PIK_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `Y${v}`} />
                  <YAxis domain={[80, 250]} tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `$${v}M`} width={45} />
                  <Tooltip
                    formatter={(v, name) => [`$${Number(v).toFixed(1)}M`, name === "pik" ? "PIK (원금 복리 증가)" : "Cash (원금 고정)"]}
                    labelFormatter={(l) => `Year ${l}`}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Line type="monotone" dataKey="cash" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" name={ko ? "현금 이자 (원금 불변)" : "Cash Interest (fixed principal)"} dot={false} />
                  <Line type="monotone" dataKey="pik" stroke="#ef4444" strokeWidth={2.5} name={ko ? "PIK (원금 복리 증가)" : "PIK (compounding principal)"} dot={{ r: 3, fill: "#ef4444" }} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-2">
                {ko
                  ? "* 7년 후 PIK 원금은 $228M — 현금 이자는 원금을 $100M으로 유지. 이자만 7년간 $228M-$100M=$128M 더 갚아야 하는 구조."
                  : "* After 7 years, PIK principal reaches $228M vs. $100M for cash interest. The PIK structure accumulates $128M of extra repayment obligation over the 7-year period."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.5: DSCR 계산 ═══════════════════════════════════════════════════ */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "DSCR — 부채상환 가능성의 핵심 지표" : "DSCR — The Key Metric for Debt Serviceability"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "DSCR(Debt Service Coverage Ratio, 부채상환비율)는 LBO 분석에서 가장 중요한 현금흐름 지표 중 하나다. 기업이 부채를 상환할 수 있는 능력을 단 하나의 숫자로 보여준다.",
                "계산식: DSCR = Cash EBITDA ÷ 총 부채상환액 (이자 + 원금 상환). Cash EBITDA = EBITDA - CapEx + 비현금 조정. 분모는 실제로 현금으로 나가는 이자와 원금 합계.",
                "DSCR 1.0x = 딱 상환 가능 (여유 없음). 1.3x = 30% 버퍼. 2.0x = 두 배 여유. LBO 대출자들이 요구하는 최소 기준은 보통 1.2–1.3x이며, 이자율 상승이나 EBITDA 하락 시 DSCR이 1.0x 밑으로 내려가면 Default 위험이 급격히 높아진다.",
              ] : [
                "DSCR (Debt Service Coverage Ratio) is one of the most important cash flow metrics in LBO analysis. It summarizes in a single number whether a company can service its debt.",
                "Formula: DSCR = Cash EBITDA ÷ Total Debt Service (interest + principal repayment). Cash EBITDA = EBITDA – CapEx + non-cash adjustments. The denominator is the actual cash going out for interest and principal repayment.",
                "DSCR 1.0x = barely able to service (no buffer). 1.3x = 30% cushion. 2.0x = double the buffer. LBO lenders typically require a minimum of 1.2–1.3x. If DSCR falls below 1.0x due to rising rates or EBITDA decline, default risk spikes dramatically.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* DSCR Chart */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "EBITDA 성장 + 부채 상환에 따른 DSCR 개선 패턴" : "DSCR Improvement as EBITDA Grows and Debt is Repaid"}
              </h3>
              <ResponsiveContainer width="100%" height={210}>
                <BarChart data={DSCR_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6b7280" }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `$${v}M`} width={48} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}x`} width={35} domain={[0, 4]} />
                  <Tooltip
                    formatter={(v, name) => name === "dscr" ? [`${Number(v).toFixed(2)}x`, "DSCR"] : name === "ebitda" ? [`$${v}M`, "EBITDA"] : [`$${v}M`, ko ? "이자 비용" : "Interest"]}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar yAxisId="left" dataKey="ebitda" name="EBITDA" fill={ACCENT} opacity={0.7} radius={[3, 3, 0, 0]} />
                  <Bar yAxisId="left" dataKey="interest" name={ko ? "이자 비용" : "Interest"} fill="#f59e0b" opacity={0.7} radius={[3, 3, 0, 0]} />
                  <ReferenceLine yAxisId="right" y={1.2} stroke="#ef4444" strokeDasharray="4 4" strokeWidth={1.5} />
                  <Line yAxisId="right" type="monotone" dataKey="dscr" name="DSCR" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4, fill: "#10b981" }} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko
                  ? "빨간 점선 = 최소 기준 1.2x. EBITDA 성장과 이자 절감이 함께 작용해 DSCR이 개선되는 전형적 LBO 패턴 (모식도)."
                  : "Red dashed = minimum threshold 1.2x. Typical LBO pattern: EBITDA growth + interest reduction work together to improve DSCR (stylized)."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.6: Hilton 실제 자본구조 케이스 ════════════════════════════════ */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실전 케이스 — Blackstone·Hilton 2007 자본구조 해부" : "Real Case — Blackstone·Hilton 2007 Capital Structure Dissected"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "2007년 Blackstone이 Hilton Hotels를 $26B에 인수할 때 구조화한 자본구조는 LBO 자본구조의 교과서적 사례다. 총 26조원 중 자기자본은 $5.7B(22%)이고, 나머지 $20.3B(78%)이 차입금으로 구성됐다.",
                "핵심 포인트: 6계층의 부채 피라미드에서 TLA($7.1B) + TLB($5.0B)의 선순위 담보 대출이 전체의 46.5%를 차지했다. 선순위 노트($3.6B, 10.875%), 메자닌($2.6B, 11.625%), PIK Toggle($2.1B, 12.5%)가 후순위 계층을 구성했다. 각 트랜치는 서로 다른 투자자 그룹이 다른 수익률 요구로 인수했다.",
              ] : [
                "The capital structure Blackstone assembled for the $26B Hilton Hotels acquisition in 2007 is the textbook LBO capital structure case. Of the total $26B, equity was $5.7B (22%), with the remaining $20.3B (78%) in debt.",
                "Key points: The 6-tranche debt pyramid had TLA ($7.1B) + TLB ($5.0B) senior secured loans representing 46.5% of total capital. Senior notes ($3.6B at 10.875%), mezzanine ($2.6B at 11.625%), and PIK Toggle ($2.1B at 12.5%) formed the junior tranches. Each tranche was taken by different investor groups with different yield requirements.",
              ]).map((para, j) => (
                <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</motion.p>
              ))}
            </div>

            {/* Hilton Capital Structure Bar */}
            <motion.div variants={fadeUp(0.1)} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Blackstone·Hilton 2007 자본구조 (총 $26B)" : "Blackstone·Hilton 2007 Capital Structure (Total $26B)"}
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={HILTON_TRANCHES}
                  layout="vertical"
                  margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 10, fill: "#6b7280" }} tickFormatter={(v) => `${v}%`} domain={[0, 32]} />
                  <YAxis type="category" dataKey="label" tick={{ fontSize: 10, fill: "#6b7280" }} width={130} />
                  <Tooltip
                    formatter={(v, name, props) => [`${Number(v).toFixed(1)}% | ${props.payload.rate}`, ""]}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="pct" radius={[0, 3, 3, 0]}>
                    {HILTON_TRANCHES.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2 text-[10px]">
                {HILTON_TRANCHES.map((t) => (
                  <div key={t.label} className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: t.color }} />
                    <span className="text-gray-500 dark:text-gray-400 truncate">{t.label.split(" ")[0]} {t.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Link to deal page */}
            <motion.div variants={fadeUp(0.15)} className="mt-4 flex items-center gap-3">
              <Link
                href="/deals/blackstone-hilton-2007"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT }}
              >
                🏨 {ko ? "Hilton 딜 전체 분석 보기 →" : "View Full Hilton Deal Analysis →"}
              </Link>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko ? "레버리지 추이, MOIC, IRR, 실제 타임라인 포함" : "Leverage journey, MOIC, IRR, actual timeline"}
              </span>
            </motion.div>
          </motion.section>

          {/* ── Share — mid ─────────────────────────────────────────────── */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />
          </div>

          {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
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

          {/* ══ 딜 아카이브 ══════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "딜 아카이브" : "Deal Archive"}
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {ko ? "LBO 자본구조가 망가지면 — 실제 사례" : "When LBO Capital Structure Breaks Down"}
              </h3>
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border border-red-200/60 dark:border-red-800/40 bg-red-800 p-5 hover:opacity-90 transition-opacity">
              <Link href="/deals/serta-simmons-uptier" className="block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-xs font-black text-white">SSB</span>
                      <span className="text-[11px] font-bold text-red-200 uppercase tracking-wide">
                        {ko ? "LBO → 과잉 레버리지 → LME → Ch.11" : "LBO → Over-leverage → LME → Ch.11"}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white mb-1">
                      {ko ? "Serta Simmons 업티어 — 자본구조 재편의 법적 한계" : "Serta Simmons Uptier — Legal Limits of Capital Restructuring"}
                    </p>
                    <p className="text-[12px] text-red-200 leading-relaxed">
                      {ko
                        ? "$12억 수퍼-선순위 TL 발행으로 기존 채권자 ~$9억 후순위 강등. 2024년 5th Circuit 무효 판결 — LBO 자본구조가 과도한 레버리지로 망가졌을 때의 교과서."
                        : "$1.2B super-priority TL primed ~$0.9B of existing lenders. 2024 5th Circuit declared the transaction invalid — textbook of what happens when LBO capital structure collapses under over-leverage."}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-2xl font-black text-white">$1.2B</p>
                    <p className="text-[10px] text-red-200">{ko ? "수퍼-선순위 TL" : "Super-Priority TL"}</p>
                    <p className="text-lg font-bold text-red-300 mt-1">{ko ? "무효" : "Void"}</p>
                    <p className="text-[10px] text-red-200">5th Circuit</p>
                  </div>
                </div>
                <p className="text-[11px] text-red-300 mt-3 font-semibold">
                  {ko ? "딜 전체 분석 보기 →" : "View full deal analysis →"}
                </p>
              </Link>
            </motion.div>
          </motion.section>

          {/* ══ Series Nav ═══════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="flex items-center justify-between mb-4">
              <h3 className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
                {ko ? "LBO 101 시리즈" : "LBO 101 Series"}
              </h3>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              <Link href={ko ? "/deal-101/lbo-overview" : "/en/deal-101/lbo-overview"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                ← {ko ? "Ch.0 — LBO의 본질" : "Ch.0 — What Is LBO?"}
              </Link>
              <Link href={ko ? "/deal-101/lbo-returns" : "/en/deal-101/lbo-returns"}
                className="text-[12px] px-4 py-2 rounded-full border text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT, borderColor: ACCENT }}>
                {ko ? "Ch.2 — 리턴 분석 →" : "Ch.2 — Return Analysis →"}
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
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
