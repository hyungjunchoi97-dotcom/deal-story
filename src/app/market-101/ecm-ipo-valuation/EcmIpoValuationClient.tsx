"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

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
const accent = "#3182f6"; // ECM blue

const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"         : "ECM Overview"       },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"       : "Ch.1 Issuers"       },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"       : "Ch.2 Investors"     },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"   : "Ch.3 Valuation"     },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"     : "Ch.4 Process"       },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"       : "Ch.5 Book-Building" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"   : "Ch.6 Post-IPO"      },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"     : "Ch.7 Follow-on"     },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"     : "Ch.8 Convertible"   },
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"     : "Ch.9 Intl Listing"  },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장" : "Ch.10 SPAC·Direct"  },
];

const THIS_CH = "ecm-ipo-valuation";
const thisCh = 3;

// ── Football Field Recharts data ───────────────────────────────────────────────
const FOOTBALL_FIELD_CHART_DATA = [
  { method: "Precedent Tx",  methodKo: "선행 거래",  low: 50, span: 20, color: "#8b5cf6", isFinal: false },
  { method: "EV/Revenue",    methodKo: "EV/Revenue", low: 45, span: 20, color: "#06b6d4", isFinal: false },
  { method: "P/E",           methodKo: "P/E",        low: 40, span: 20, color: "#3182f6", isFinal: false },
  { method: "EV/EBITDA",     methodKo: "EV/EBITDA",  low: 35, span: 20, color: "#10b981", isFinal: false },
  { method: "DCF",           methodKo: "DCF",        low: 30, span: 20, color: "#f59e0b", isFinal: false },
  { method: "Final IPO",     methodKo: "최종 IPO",   low: 45, span: 10, color: "#ef4444", isFinal: true  },
];

// ── Football Field Data ────────────────────────────────────────────────────────
// 기준: LG에너지솔루션 IPO 2022 (시총 조원 단위)
const VALUATION_METHODS = [
  {
    method:   (ko: boolean) => ko ? "DCF — 현금흐름할인" : "DCF — Discounted Cash Flow",
    low: 58,  high: 92,
    lowPer: 24, highPer: 56,
    color: "bg-blue-500",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
    note: (ko: boolean) => ko ? "WACC 8–10%, 터미널 성장률 3%, FCF 기반" : "WACC 8–10%, terminal growth 3%, FCF-based",
    detail: (ko: boolean) => ko
      ? "미래 잉여현금흐름(FCF)을 가중평균자본비용(WACC)으로 할인. 가정에 따라 결과 편차 가장 큼."
      : "Discounts future free cash flows at WACC. Highest variance depending on assumptions.",
  },
  {
    method:   (ko: boolean) => ko ? "EV/EBITDA — 유사기업 비교" : "EV/EBITDA — Trading Comps",
    low: 52,  high: 85,
    lowPer: 18, highPer: 50,
    color: "bg-violet-500",
    textColor: "text-violet-600 dark:text-violet-400",
    borderColor: "border-violet-200 dark:border-violet-800",
    note: (ko: boolean) => ko ? "글로벌 배터리 섹터 피어 15–25x" : "Global battery sector peers 15–25x",
    detail: (ko: boolean) => ko
      ? "유사기업(peers) EV/EBITDA 멀티플을 대상 기업에 적용. 피어 선정이 결과를 좌우."
      : "Apply peer group EV/EBITDA multiples. Peer selection determines the outcome.",
  },
  {
    method:   (ko: boolean) => ko ? "EV/Revenue — 성장주 방법론" : "EV/Revenue — Growth Multiple",
    low: 68,  high: 115,
    lowPer: 32, highPer: 76,
    color: "bg-teal-500",
    textColor: "text-teal-600 dark:text-teal-400",
    borderColor: "border-teal-200 dark:border-teal-800",
    note: (ko: boolean) => ko ? "전기차·배터리 섹터 3–5x 프리미엄" : "EV/Battery sector 3–5x premium",
    detail: (ko: boolean) => ko
      ? "EBITDA 음수인 성장기업에 적용. EV 섹터 버블 시기 과대평가 위험."
      : "Used for growth companies with negative EBITDA. Risk of overvaluation during sector bubbles.",
  },
  {
    method:   (ko: boolean) => ko ? "선행거래 비교 (M&A Premia)" : "Precedent Transactions",
    low: 72,  high: 108,
    lowPer: 36, highPer: 70,
    color: "bg-amber-500",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
    note: (ko: boolean) => ko ? "최근 배터리 M&A 컨트롤 프리미엄 20–30%" : "Recent battery M&A control premium 20–30%",
    detail: (ko: boolean) => ko
      ? "최근 비슷한 섹터의 M&A 딜 멀티플 + 컨트롤 프리미엄. IPO는 컨트롤 프리미엄이 낮음."
      : "Recent comparable M&A multiples + control premium. IPOs typically receive lower control premium.",
  },
  {
    method:   (ko: boolean) => ko ? "Sum-of-Parts — 사업부 합산" : "Sum-of-Parts Valuation",
    low: 55,  high: 80,
    lowPer: 20, highPer: 46,
    color: "bg-rose-500",
    textColor: "text-rose-600 dark:text-rose-400",
    borderColor: "border-rose-200 dark:border-rose-800",
    note: (ko: boolean) => ko ? "사업부별 별도 DCF 후 합산 — 지주사·복합기업" : "Separate DCF per division — holdcos & conglomerates",
    detail: (ko: boolean) => ko
      ? "각 사업부를 독립 기업처럼 밸류에이션 후 합산. 복합기업(conglomerate)·스핀오프에 적합."
      : "Value each division as standalone, then sum. Best for conglomerates and spin-offs.",
  },
];

// IPO 공모가 위치 (전체 차트 대비 %) — LG에너지솔루션 70.2조 기준
const IPO_PRICE_PER = 45;

// ── Valuation Method Cards ────────────────────────────────────────────────────
const METHOD_DETAILS = [
  {
    title: (ko: boolean) => ko ? "DCF (현금흐름할인법)" : "DCF (Discounted Cash Flow)",
    icon: "📊",
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    inputs: [
      (ko: boolean) => ko ? "WACC = 무위험수익률(Rf) + β × 주식위험프리미엄(ERP)" : "WACC = Risk-free rate (Rf) + β × Equity Risk Premium (ERP)",
      (ko: boolean) => ko ? "Terminal Value = FCF × (1+g) / (WACC - g)" : "Terminal Value = FCF × (1+g) / (WACC - g)",
      (ko: boolean) => ko ? "터미널 밸류가 전체 DCF의 60–80% 차지" : "Terminal Value accounts for 60–80% of total DCF",
    ],
    pros: (ko: boolean) => ko ? "이론적 기반 견고, 기업 내재가치 반영" : "Theoretically robust, captures intrinsic value",
    cons: (ko: boolean) => ko ? "가정(WACC, 성장률) 변화에 민감 — 결과 편차 최대" : "Highly sensitive to assumptions — widest output variance",
    bankerTip: (ko: boolean) => ko
      ? "WACC 1%p 변화가 밸류에이션을 15–20% 바꿀 수 있다. Sensitivity Table 없는 DCF는 완성된 분석이 아니다."
      : "A 1pp change in WACC can shift valuation by 15–20%. A DCF without a sensitivity table is an incomplete analysis.",
  },
  {
    title: (ko: boolean) => ko ? "EV/EBITDA (유사기업 비교법)" : "EV/EBITDA (Trading Comparables)",
    icon: "🏭",
    color: "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800",
    inputs: [
      (ko: boolean) => ko ? "EV = 시총 + 순부채 (Net Debt = 총차입금 - 현금)" : "EV = Market Cap + Net Debt (Total Debt − Cash)",
      (ko: boolean) => ko ? "EBITDA = 영업이익 + 감가상각 + 무형자산 상각" : "EBITDA = Operating Income + D&A (Depreciation & Amortization)",
      (ko: boolean) => ko ? "피어 그룹 멀티플 → 대상기업 적용 → EV → 순부채 차감 → Equity Value" : "Peer multiples → Apply to target → EV → Subtract net debt → Equity Value",
    ],
    pros: (ko: boolean) => ko ? "시장 반영 빠름, 이해하기 직관적" : "Fast market reflection, intuitively understandable",
    cons: (ko: boolean) => ko ? "피어 그룹 선정이 결과 좌우 — 조작 용이" : "Peer selection determines outcome — easily gamed",
    bankerTip: (ko: boolean) => ko
      ? "발행사가 원하는 피어를 선택하고 싶어한다. 투자자는 보수적 피어 선택을 요구한다. 이 협상이 밸류에이션의 핵심이다."
      : "Issuers want to cherry-pick favorable peers. Investors push for conservative selections. This negotiation is where valuation is really decided.",
  },
  {
    title: (ko: boolean) => ko ? "EV/Revenue (성장주 멀티플)" : "EV/Revenue (Growth Multiple)",
    icon: "🚀",
    color: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800",
    inputs: [
      (ko: boolean) => ko ? "EV/Revenue = 기업가치 ÷ 연간 매출액" : "EV/Revenue = Enterprise Value ÷ Annual Revenue",
      (ko: boolean) => ko ? "적용 대상: EBITDA 음수인 고성장 기업 (SaaS, EV, 바이오)" : "Applied to: high-growth companies with negative EBITDA (SaaS, EV, biotech)",
      (ko: boolean) => ko ? "성장률에 따라 멀티플 급격히 변동" : "Multiples vary sharply based on growth rate assumptions",
    ],
    pros: (ko: boolean) => ko ? "EBITDA 음수 기업도 밸류에이션 가능" : "Can value companies with negative EBITDA",
    cons: (ko: boolean) => ko ? "수익성 없는 기업 과대평가 위험 극대화" : "Maximum risk of overvaluation for unprofitable companies",
    bankerTip: (ko: boolean) => ko
      ? "Rivian은 매출이 거의 없는 상태에서 $78bn 밸류를 받았다. EV/Revenue는 성장 경로가 명확할 때만 유효하다."
      : "Rivian received a $78bn valuation with near-zero revenue. EV/Revenue is only valid when the path to revenue is crystal clear.",
  },
  {
    title: (ko: boolean) => ko ? "Precedent Transactions (선행거래 비교)" : "Precedent Transactions",
    icon: "🤝",
    color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
    inputs: [
      (ko: boolean) => ko ? "최근 3–5년 동종 섹터 M&A 딜 데이터베이스 활용" : "Use M&A deal database for comparable sector transactions (last 3–5 years)",
      (ko: boolean) => ko ? "컨트롤 프리미엄(Control Premium) 포함: 보통 20–30%" : "Includes control premium: typically 20–30%",
      (ko: boolean) => ko ? "IPO는 지배권 이전 없음 → 프리미엄 할인 적용" : "IPOs don't transfer control → apply discount to premium",
    ],
    pros: (ko: boolean) => ko ? "실제 시장에서 거래된 가격 기반" : "Based on actual market transaction prices",
    cons: (ko: boolean) => ko ? "유사 딜이 없으면 적용 불가, 시장 환경 변화 미반영" : "Inapplicable if no comparable deals exist; doesn't reflect market environment shifts",
    bankerTip: (ko: boolean) => ko
      ? "IPO는 M&A가 아니다. 컨트롤 프리미엄을 그대로 적용하면 밸류에이션이 과대평가된다."
      : "An IPO is not an M&A transaction. Applying the full control premium inflates valuation.",
  },
  {
    title: (ko: boolean) => ko ? "Sum-of-Parts (사업부 합산 밸류에이션)" : "Sum-of-Parts Valuation",
    icon: "🧩",
    color: "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800",
    inputs: [
      (ko: boolean) => ko ? "각 사업부별 독립 DCF 또는 멀티플 적용" : "Apply independent DCF or multiples to each business division",
      (ko: boolean) => ko ? "지주사 할인(Holdco Discount) 10–30% 적용 일반적" : "Holdco discount of 10–30% typically applied",
      (ko: boolean) => ko ? "비유동 자산(부동산 등) 별도 가산" : "Illiquid assets (real estate, etc.) added separately",
    ],
    pros: (ko: boolean) => ko ? "복합기업의 숨겨진 가치 발굴" : "Uncovers hidden value in conglomerates",
    cons: (ko: boolean) => ko ? "사업부 간 시너지 무시, 분리 비용 과소계상 위험" : "Ignores inter-divisional synergies; may undercount separation costs",
    bankerTip: (ko: boolean) => ko
      ? "LG에너지솔루션은 LG화학 배터리 사업부 스핀오프 IPO다. Sum-of-Parts로 LG화학 잔존가치를 별도로 평가해야 했다."
      : "LG Energy Solution was a spin-off IPO from LG Chem's battery division. Sum-of-Parts required separate valuation of LG Chem's residual value.",
  },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    company: "LG에너지솔루션",
    year: "2022",
    market: "KOSPI",
    outcome: "✅",
    outcomeLabel: (ko: boolean) => ko ? "교과서적 집행" : "Textbook Execution",
    outcomeBg: "bg-green-50 dark:bg-green-950/20",
    outcomeBorder: "border-green-200 dark:border-green-700",
    outcomeTag: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    initialVal: (ko: boolean) => ko ? "공모 밴드: 주당 257,000–300,000원" : "Price range: ₩257,000–300,000 per share",
    finalVal: (ko: boolean) => ko ? "공모가: 300,000원 (밴드 상단) → 시총 70.2조원" : "IPO price: ₩300,000 (top of range) → Market cap ₩70.2T",
    result: (ko: boolean) => ko ? "상장일 시초가 597,000원 (+99%), 상장일 종가 444,000원 (+48%)" : "Opening price ₩597,000 (+99%), closing price ₩444,000 (+48%)",
    lessons: [
      (ko: boolean) => ko ? "5개 방법론 범위가 55–118조 — 중앙값 70조에 공모가 확정" : "5 methodologies ranged ₩55–118T — IPO price set at median ₩70T",
      (ko: boolean) => ko ? "수요가 공급의 2,023배 — 역대 최대 청약 경쟁률" : "Demand 2,023x supply — all-time record subscription ratio",
      (ko: boolean) => ko ? "전략적 앵커(삼성SDI 외)로 수요 불확실성 사전 제거" : "Strategic anchors (ex-Samsung SDI) pre-eliminated demand uncertainty",
    ],
  },
  {
    company: "크래프톤 (Krafton)",
    year: "2021",
    market: "KOSPI",
    outcome: "⚠️",
    outcomeLabel: (ko: boolean) => ko ? "밸류에이션 과다 → 하향 조정" : "Overvaluation → Forced Downgrade",
    outcomeBg: "bg-amber-50 dark:bg-amber-950/20",
    outcomeBorder: "border-amber-200 dark:border-amber-700",
    outcomeTag: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    initialVal: (ko: boolean) => ko ? "최초 희망 시총: 53조원 (EV/Revenue 과적용)" : "Initial target valuation: ₩53T (EV/Revenue overapplied)",
    finalVal: (ko: boolean) => ko ? "기관 수요 부진 → 최종 시총 24조원 (55% 하향)" : "Weak institutional demand → Final market cap ₩24T (55% cut)",
    result: (ko: boolean) => ko ? "공모가 498,000원 → 상장 첫날 466,000원 (-6.4%)" : "IPO price ₩498,000 → Listing day close ₩466,000 (-6.4%)",
    lessons: [
      (ko: boolean) => ko ? "PUBG 단일 IP 의존도를 피어 그룹에 미반영 → 지속가능성 할인 누락" : "Single-IP PUBG dependency not reflected in peer selection → durability discount missing",
      (ko: boolean) => ko ? "글로벌 게임사 EV/Revenue 프리미엄 과적용 — Activision 피어로 설정" : "Overapplied global gaming EV/Revenue premium — Activision used as peer",
      (ko: boolean) => ko ? "Bake-off 경쟁에서 가장 높은 밸류 제시 IB 선정 → 시장과의 괴리" : "Selected highest-valuation bank in bake-off → valuation diverged from market consensus",
    ],
  },
  {
    company: "Rivian Automotive",
    year: "2021",
    market: "NASDAQ",
    outcome: "❌",
    outcomeLabel: (ko: boolean) => ko ? "EV/Revenue 극단 사례" : "Extreme EV/Revenue Case",
    outcomeBg: "bg-red-50 dark:bg-red-950/20",
    outcomeBorder: "border-red-200 dark:border-red-700",
    outcomeTag: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    initialVal: (ko: boolean) => ko ? "IPO 시총: $78bn — 당시 GM·Ford 이상 (매출 거의 없음)" : "IPO market cap: $78bn — exceeded GM & Ford (near-zero revenue)",
    finalVal: (ko: boolean) => ko ? "IPO 후 12개월: 시총 $8bn 붕괴 (90% 하락)" : "12 months post-IPO: market cap collapsed to $8bn (90% decline)",
    result: (ko: boolean) => ko ? "생산 목표 미달, 원가 급증, Amazon 독점 계약 의존도" : "Production targets missed, cost inflation, Amazon contract dependency",
    lessons: [
      (ko: boolean) => ko ? "Tesla EV/Revenue 멀티플 = '성장 경로가 증명된 기업'의 프리미엄" : "Tesla EV/Revenue multiple is a premium for 'proven growth path' — not transferable",
      (ko: boolean) => ko ? "매출 없는 기업의 EV/Revenue는 실제로 '희망 멀티플'" : "EV/Revenue for a zero-revenue company is essentially a 'hope multiple'",
      (ko: boolean) => ko ? "IPO 2021 붐 시장에서 투자자가 리스크 프리미엄을 무시" : "2021 IPO boom caused investors to ignore risk premium entirely",
    ],
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "Football Field에서 가장 중요한 밸류에이션 방법론은 무엇인가요?" : "Which valuation methodology matters most in a Football Field?",
    a: (ko: boolean) => ko
      ? "단일 '최고' 방법론은 없습니다. Football Field의 목적은 서로 다른 방법론이 만들어내는 범위를 보여주는 것이고, 공모가는 그 중앙 영역에서 수요와 공급이 만나는 지점에서 결정됩니다. 다만 실무에서는 EV/EBITDA 유사기업 비교법이 앵커 역할을 하고, DCF가 이론적 하한선을 제시하는 경우가 많습니다."
      : "There is no single 'best' methodology. The Football Field's purpose is to display the range each methodology produces — the IPO price is set where demand and supply meet within that central overlap zone. In practice, EV/EBITDA comps typically serve as the anchor, with DCF providing the theoretical floor.",
  },
  {
    q: (ko: boolean) => ko ? "DCF에서 WACC를 어떻게 결정하나요?" : "How is WACC determined in a DCF?",
    a: (ko: boolean) => ko
      ? "WACC = 자기자본비용(Ke) × 자기자본비율 + 타인자본비용(Kd) × 부채비율 × (1-세율). Ke는 CAPM으로 산출합니다: Ke = Rf + β × ERP. Rf(무위험수익률)는 미국 10년 국채, ERP(주식위험프리미엄)는 약 5–6%, β는 유사기업 평균 β(unlevered β re-levered). 실무에서 WACC는 보통 8–12% 범위에서 결정되며, 신흥시장 발행사는 컨트리 리스크 프리미엄을 추가로 반영합니다."
      : "WACC = Cost of Equity (Ke) × equity weight + Cost of Debt (Kd) × debt weight × (1−tax rate). Ke is derived from CAPM: Ke = Rf + β × ERP. Rf is typically the 10-year US Treasury yield; ERP is approximately 5–6%; β is the average peer unlevered beta, re-levered to the target's capital structure. In practice, WACC typically falls in the 8–12% range, with emerging market issuers adding a country risk premium.",
  },
  {
    q: (ko: boolean) => ko ? "IPO 밸류에이션이 M&A 밸류에이션보다 낮은 이유는?" : "Why is IPO valuation typically lower than M&A valuation?",
    a: (ko: boolean) => ko
      ? "M&A 밸류에이션에는 컨트롤 프리미엄(Control Premium)이 포함됩니다 — 인수자가 경영권을 가져가는 대가로 지불하는 추가 대가(보통 20–30%). IPO에서는 경영권이 이전되지 않으므로 이 프리미엄이 없습니다. 또한 IPO는 '신규 시장 참여자'에게 매각하는 것이므로 구매자가 충분한 안전마진(IPO 팝 여지)을 요구하는 구조적 할인도 존재합니다."
      : "M&A valuations include a control premium — the additional consideration paid for acquiring management control (typically 20–30%). IPOs do not transfer control, so this premium is absent. IPOs also involve selling to 'first-time market participants,' who structurally demand a safety margin (room for IPO pop), creating further discount.",
  },
  {
    q: (ko: boolean) => ko ? "피어 그룹(Peer Group) 선정이 왜 이렇게 중요한가요?" : "Why is peer group selection so critical?",
    a: (ko: boolean) => ko
      ? "EV/EBITDA 또는 EV/Revenue 방법론에서 적용하는 멀티플이 피어 그룹 평균에서 나오기 때문입니다. 피어를 고성장 테크 기업으로 설정하면 멀티플이 올라가고, 전통 제조업으로 설정하면 멀티플이 낮아집니다. 크래프톤이 Activision을 피어로 설정한 것이 53조 밸류에이션의 핵심 원인이었습니다. 현실적인 피어 그룹 = 현실적인 밸류에이션입니다."
      : "The multiples applied in EV/EBITDA or EV/Revenue methodologies derive from the peer group average. Setting peers as high-growth tech companies inflates multiples; setting them as traditional manufacturers deflates multiples. Krafton's use of Activision as a peer was the primary driver of its ₩53T valuation. Realistic peer group = realistic valuation.",
  },
  {
    q: (ko: boolean) => ko ? "밸류에이션 밴드는 어떻게 결정되나요?" : "How is the IPO price range (valuation band) determined?",
    a: (ko: boolean) => ko
      ? "Football Field 분석에서 모든 방법론이 겹치는 중앙 구간이 초기 희망 밴드입니다. 이후 Pre-marketing(앵커 투자자 미팅)에서 실제 수요를 확인하고, 수요가 강하면 밴드 상단 또는 초과 가격이 공모가로 결정됩니다. 수요가 약하면 밴드 하단 또는 그 이하로 조정됩니다. 공모가 = 시장 수요가 인정하는 최고 가격입니다."
      : "The initial price range is the central overlap zone where all Football Field methodologies converge. Pre-marketing (anchor investor meetings) then tests actual demand. Strong demand results in top-of-range or above-range pricing; weak demand leads to bottom-of-range or lower. The IPO price = the highest price the market is willing to validate.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

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
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors ${
                s.slug === THIS_CH
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {s.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function FootballFieldChart({ ko }: { ko: boolean }) {
  const chartData = FOOTBALL_FIELD_CHART_DATA.map((d) => ({
    method: ko ? d.methodKo : d.method,
    low: d.low,
    span: d.span,
    color: d.color,
    isFinal: d.isFinal,
  }));

  return (
    <motion.div
      variants={fadeUp(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko
            ? "Football Field — 가상 테크 IPO 밸류에이션 범위 ($B)"
            : "Football Field — Hypothetical Tech IPO Valuation Ranges ($B)"}
        </p>
      </div>
      <div className="p-5 bg-white dark:bg-gray-900">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 8, right: 40, left: 100, bottom: 8 }}
            barCategoryGap="28%"
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
            <XAxis
              type="number"
              domain={[20, 80]}
              tickCount={7}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickFormatter={(v) => `$${v}B`}
            />
            <YAxis
              type="category"
              dataKey="method"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              width={95}
            />
            <Tooltip
              contentStyle={{
                fontSize: 11,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
            />
            {/* Transparent spacer from 0 to low */}
            <Bar dataKey="low" stackId="ff" fill="transparent" />
            {/* Visible range span */}
            <Bar dataKey="span" stackId="ff" radius={[0, 4, 4, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  fillOpacity={entry.isFinal ? 1 : 0.65}
                />
              ))}
            </Bar>
            <ReferenceLine x={50} stroke="#3182f6" strokeDasharray="4 3" strokeWidth={1.5} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-1">
          {ko
            ? "점선: $50B 중앙값 기준선 | 빨간 막대: 최종 IPO 희망 범위"
            : "Dashed: $50B midpoint reference | Red bar: Final IPO target range"}
        </p>
      </div>
    </motion.div>
  );
}

function ValuationMethodCards({ ko }: { ko: boolean }) {
  return (
    <div className="space-y-4">
      {METHOD_DETAILS.map((m, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.07)}
          className={`rounded-xl border p-5 ${m.color}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{m.icon}</span>
            <span className="font-bold text-gray-900 dark:text-gray-100 text-[15px]">{m.title(ko)}</span>
          </div>
          <div className="mb-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">
              {ko ? "핵심 입력값" : "Key Inputs"}
            </p>
            <ul className="space-y-1">
              {m.inputs.map((inp, j) => (
                <li key={j} className="text-[13px] text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5 flex-shrink-0">▸</span>
                  {inp(ko)}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
              <p className="text-[10px] font-bold text-green-600 dark:text-green-400 mb-1">{ko ? "장점" : "Pros"}</p>
              <p className="text-[12px] text-gray-600 dark:text-gray-300">{m.pros(ko)}</p>
            </div>
            <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
              <p className="text-[10px] font-bold text-red-500 dark:text-red-400 mb-1">{ko ? "단점" : "Cons"}</p>
              <p className="text-[12px] text-gray-600 dark:text-gray-300">{m.cons(ko)}</p>
            </div>
          </div>
          <blockquote className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
            <p className="text-[12px] text-gray-600 dark:text-gray-300 italic">
              💼 {m.bankerTip(ko)}
            </p>
          </blockquote>
        </motion.div>
      ))}
    </div>
  );
}

function CaseStudyCards({ ko }: { ko: boolean }) {
  return (
    <div className="space-y-8">
      {CASE_STUDIES.map((cs, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.08)}
          className={`rounded-2xl border p-6 ${cs.outcomeBg} ${cs.outcomeBorder}`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cs.outcomeTag}`}>
              {cs.outcome} {cs.outcomeLabel(ko)}
            </span>
            <span className="text-xs font-mono bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded text-gray-500 dark:text-gray-400">
              {cs.market}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">{cs.year}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-3">{cs.company}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-[13px]">
            <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "초기 희망" : "Initial Target"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{cs.initialVal(ko)}</p>
            </div>
            <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "최종 공모가" : "Final Price"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{cs.finalVal(ko)}</p>
            </div>
            <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "결과" : "Outcome"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{cs.result(ko)}</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              {ko ? "밸류에이션 교훈" : "Valuation Lessons"}
            </p>
            <ul className="space-y-1.5">
              {cs.lessons.map((l, j) => (
                <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600 dark:text-gray-300">
                  <span className="flex-shrink-0 text-gray-400 mt-0.5">▸</span>
                  {l(ko)}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
interface Props { concept: MarketConcept; lang: Lang; }

export default function EcmIpoValuationClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = ko ? "/market-101" : "/en/market-101";

  const prevCh = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const nextCh = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: ko ? concept.title : (concept.titleEn ?? concept.title),
        description: ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt),
        author: { "@type": "Organization", name: "Deal Story" },
        publisher: { "@type": "Organization", name: "Deal Story", url: "https://dealstory.kr" },
        datePublished: "2024-01-01",
        inLanguage: ko ? "ko" : "en",
        url: `https://dealstory.kr${base}/ecm-ipo-valuation`,
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q(ko),
          acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
        })),
      },
    ],
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
        {/* ── Hero ── */}
        <section className="max-w-3xl mx-auto px-5 pt-12 pb-6">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp()} className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                ECM Series
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">Ch.3</span>
              <div className="ml-auto flex items-center gap-1.5">
                <Link href="/market-101/ecm-ipo-valuation"
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600"}`}>
                  한국어
                </Link>
                <Link href="/en/market-101/ecm-ipo-valuation"
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600"}`}>
                  English
                </Link>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp(0.05)}
              className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 leading-tight mb-3">
              {ko
                ? "IPO 밸류에이션: Football Field와 5가지 방법론 완전 해부"
                : "IPO Valuation: Complete Anatomy of the Football Field and Five Methodologies"}
            </motion.h1>

            <motion.p variants={fadeUp(0.1)}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "IPO 가격은 과학이 아닌 협상이다. DCF·EV/EBITDA·EV/Revenue·선행거래·Sum-of-Parts — 5개 방법론이 서로 다른 범위를 만들고, 공모가는 그 교차점에서 수요·공급이 결정한다. LG에너지솔루션·크래프톤·Rivian 3개 케이스로 밸류에이션의 실전을 해부한다."
                : "IPO pricing is negotiation, not science. DCF, EV/EBITDA, EV/Revenue, precedent transactions, and sum-of-parts — five methodologies create different ranges, and the IPO price is set where demand and supply meet at their intersection. Three cases — LG Energy Solution, Krafton, and Rivian — dissect valuation in practice."}
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="flex flex-wrap gap-2">
              {(ko
                ? ["Football Field", "DCF", "EV/EBITDA", "EV/Revenue", "피어 그룹", "WACC", "크래프톤", "Rivian", "LG에너지솔루션"]
                : ["Football Field", "DCF", "EV/EBITDA", "EV/Revenue", "Peer Group", "WACC", "Krafton", "Rivian", "LG Energy Solution"]
              ).map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Share top */}
        <div className="max-w-3xl mx-auto px-5 mb-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        <div className="max-w-3xl mx-auto px-5 py-8 space-y-20">

          {/* ── Ch.1: Football Field ── */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "Football Field 차트 — 5가지 방법론의 교차점" : "Football Field Chart — Where Five Methodologies Intersect"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Football Field는 5개의 밸류에이션 방법론이 만들어내는 범위를 하나의 가로 막대 차트로 표현한 것입니다. 각 막대의 좌측 끝은 보수적 가정(하한), 우측 끝은 낙관적 가정(상한)입니다. IPO 공모가는 이 막대들이 가장 많이 겹치는 중앙 구간 — 즉, 시장이 합리적으로 동의할 수 있는 가격대에서 결정됩니다."
                  : "The Football Field displays the ranges produced by five valuation methodologies as a single horizontal bar chart. Each bar's left end represents conservative assumptions (floor); the right end represents optimistic assumptions (ceiling). The IPO price is set within the central zone where the bars overlap most — the price range the market can reasonably agree on."}
              </motion.p>
            </div>

            <motion.div variants={fadeUp(0.1)}>
              <FootballFieldChart ko={ko} />
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-xl p-5 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                {ko ? "💡 Football Field 읽는 법" : "💡 How to Read the Football Field"}
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                {ko
                  ? "공모가 파란 선이 모든 막대를 관통하는 위치에 있다면 '시장 컨센서스 가격'입니다. 막대 상단 근처에 위치하면 '낙관적 가격', 하단 근처면 '보수적 가격'입니다. LG에너지솔루션은 5개 방법론의 중앙값 근처인 70.2조에 공모가를 확정했습니다."
                  : "If the IPO price line passes through all bars, it represents a 'market consensus price.' A position near the top of the bars indicates optimistic pricing; near the bottom indicates conservative pricing. LG Energy Solution set its IPO price at ₩70.2T — near the median of all five methodologies."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Ch.2: 5 Methods ── */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "5가지 밸류에이션 방법론 완전 해부" : "Five Valuation Methodologies — Complete Anatomy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "각 방법론은 같은 기업을 보면서 다른 질문을 합니다. DCF는 '미래 현금을 오늘 얼마로 봐야 하나?', EV/EBITDA는 '시장이 유사기업에 얼마를 지불하는가?', EV/Revenue는 '성장성에 얼마를 지불할 수 있나?'. 이 질문들의 답이 다르기 때문에 방법론마다 다른 밸류에이션이 나옵니다."
                  : "Each methodology asks a different question about the same company. DCF asks: 'What is future cash worth today?' EV/EBITDA asks: 'What does the market pay for comparable companies?' EV/Revenue asks: 'How much can we pay for growth potential?' Different questions produce different valuations."}
              </motion.p>
            </div>

            <ValuationMethodCards ko={ko} />
          </motion.section>

          {/* ── Ch.3: Case Studies ── */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "케이스 스터디 — 성공·실패·붕괴의 밸류에이션 해부" : "Case Studies — Valuation Anatomy of Success, Overpricing & Collapse"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 space-y-4 mb-8" style={{ borderColor: accent + "4d" }}>
              <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "같은 방법론을 사용해도 가정 선택에 따라 밸류에이션이 수십 조원 차이납니다. LG에너지솔루션은 올바른 피어 그룹과 보수적 가정으로 성공했고, 크래프톤은 낙관적 피어 선정으로 30% 하향 조정을 강요받았으며, Rivian은 EV/Revenue를 과적용하다 상장 후 90% 붕괴했습니다."
                  : "The same methodologies produce wildly different valuations depending on assumption choices. LG Energy Solution succeeded with correct peer selection and conservative assumptions; Krafton was forced into a 30% downgrade from over-optimistic peers; Rivian collapsed 90% post-listing from extreme EV/Revenue application."}
              </motion.p>
            </div>

            <CaseStudyCards ko={ko} />
          </motion.section>

          {/* ── Ch.4: 발행사 vs 투자자 ── */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: accent }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "발행사 vs. 투자자 — 밸류에이션 협상의 구조" : "Issuer vs. Investor — The Structure of Valuation Negotiation"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <motion.div variants={fadeUp(0)} className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 p-5">
                <p className="text-sm font-bold text-blue-800 dark:text-blue-200 mb-2">
                  🏢 {ko ? "발행사 (CFO) 관점" : "Issuer (CFO) Perspective"}
                </p>
                <ul className="space-y-1.5 text-sm text-blue-700 dark:text-blue-300">
                  <li>▸ {ko ? "최고 밸류에이션으로 기존 주주 희석 최소화" : "Maximize valuation to minimize existing shareholder dilution"}</li>
                  <li>▸ {ko ? "PE 펀드 IRR 극대화 (구주 매출 최대화)" : "Maximize PE fund IRR (maximize secondary proceeds)"}</li>
                  <li>▸ {ko ? "회사의 성장 스토리에 충분한 프리미엄 요구" : "Demand premium for company's growth narrative"}</li>
                  <li>▸ {ko ? "'Leave Money on the Table' 최소화 목표" : "Goal: minimize 'leaving money on the table'"}</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp(0.05)} className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5">
                <p className="text-sm font-bold text-amber-800 dark:text-amber-200 mb-2">
                  💼 {ko ? "기관 투자자 관점" : "Institutional Investor Perspective"}
                </p>
                <ul className="space-y-1.5 text-sm text-amber-700 dark:text-amber-300">
                  <li>▸ {ko ? "IPO 팝(첫날 수익률) 확보 — 최소 10–15%" : "Secure IPO pop (first-day return) — minimum 10–15%"}</li>
                  <li>▸ {ko ? "할인율 = 정보 비대칭 보상 (IPO 투자자 불리)" : "Discount = compensation for information asymmetry"}</li>
                  <li>▸ {ko ? "장기 보유 시 적정 진입 가격 확보" : "Secure appropriate entry price for long-term holding"}</li>
                  <li>▸ {ko ? "Overpriced IPO 회피 — 상장 후 하락 리스크" : "Avoid overpriced IPOs — risk of post-listing decline"}</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                {ko ? "🏦 뱅커의 역할 — 중재자" : "🏦 Banker's Role — The Mediator"}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "GC(글로벌 코디네이터) 뱅커는 발행사의 '최고 밸류' 욕구와 투자자의 '할인' 요구 사이에서 균형을 찾습니다. 최적 공모가 = '수요가 충분히 있으면서 발행사가 수용할 수 있는 최고 가격'. 이 협상이 Pricing Night에 진행됩니다."
                  : "The Global Coordinator banker balances the issuer's desire for maximum valuation against investors' demand for discount. The optimal IPO price = 'the highest price the issuer can accept where sufficient demand still exists.' This negotiation takes place on Pricing Night."}
              </p>
            </motion.div>
          </motion.section>

          {/* Share mid */}
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

          {/* ── FAQ ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
            </motion.div>
          </motion.section>

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mb-5" style={{ background: accent }} />
            <div className="space-y-3">
              {concept.keyTerms.map((term, i) => (
                <motion.div key={i} variants={fadeUp()}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: accent }}>
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                      {ko ? term.term : term.termEn}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                    {ko ? term.definition : term.definitionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Related ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-ipo-process",      ko: "IPO 프로세스",   en: "IPO Process"     },
                { slug: "ecm-ipo-bookbuilding",  ko: "북빌딩·프라이싱",en: "Book-Building"   },
                { slug: "ecm-ipo-issuers",       ko: "발행사 유형",    en: "Issuer Types"    },
                { slug: "ecm-ipo-investors",     ko: "IPO 투자자",     en: "IPO Investors"   },
                { slug: "ecm-overview",          ko: "ECM 개요",       en: "ECM Overview"    },
              ].map((t) => (
                <Link key={t.slug} href={`${base}/${t.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  {ko ? t.ko : t.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          {/* Share bottom */}
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          {/* ── References ── */}
          {concept.references && concept.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}
              className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()}
                className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer"
                          className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                          {ref.title}
                        </a>
                      ) : <span className="italic">{ref.title}</span>}
                      {". "}
                      <span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Prev / Next ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            {prevCh && (
              <Link href={`${base}/${prevCh.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
                ← {prevCh.title(ko)}
              </Link>
            )}
            {nextCh && (
              <Link href={`${base}/${nextCh.slug}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline ml-auto">
                {nextCh.title(ko)} →
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
