"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#eab308"; // yellow-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const LEVFIN_SERIES = [
  { slug: "levfin-ecosystem",      ch: 0, title: (ko: boolean) => ko ? "LevFin 개요"          : "LevFin Overview"      },
  { slug: "levfin-hy-vs-loans",    ch: 1, title: (ko: boolean) => ko ? "Ch.1 HY채권 vs 론"    : "Ch.1 HY vs Loans"     },
  { slug: "levfin-credit-metrics", ch: 2, title: (ko: boolean) => ko ? "Ch.2 크레딧 메트릭"    : "Ch.2 Credit Metrics"  },
  { slug: "levfin-covenants",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 코버넌트"         : "Ch.3 Covenants"       },
  { slug: "levfin-process",        ch: 4, title: (ko: boolean) => ko ? "Ch.4 딜 프로세스"      : "Ch.4 Deal Process"    },
  { slug: "levfin-pricing",        ch: 5, title: (ko: boolean) => ko ? "Ch.5 프라이싱 심화"    : "Ch.5 Advanced Pricing"},
  { slug: "levfin-distressed",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 부실채권·구조조정" : "Ch.6 Distressed"      },
  { slug: "levfin-cases",          ch: 7, title: (ko: boolean) => ko ? "Ch.7 케이스 종합"      : "Ch.7 Case Studies"    },
];
const thisCh = 2;

// ── EBITDA Addbacks ───────────────────────────────────────────────────────────
const EBITDA_ADDBACKS = [
  {
    tier: (ko: boolean) => ko ? "Tier 1 — 표준 (레이팅 에이전시 수용)" : "Tier 1 — Standard (Accepted by Rating Agencies)",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    dot: "bg-emerald-500",
    icon: "✅",
    items: [
      {
        name: (ko: boolean) => ko ? "경영진 수수료 (Management Fee)" : "Management Fees",
        detail: (ko: boolean) => ko
          ? "PE 스폰서가 매년 징수하는 관리 수수료. 통상 $5–15mn. EBITDA에 add-back 허용 — 회사 운영 비용이 아니기 때문."
          : "Annual fee charged by PE sponsor. Typically $5–15mn. Allowed as add-back — not an operational cost of the business.",
      },
      {
        name: (ko: boolean) => ko ? "D&A 가산 (D&A Add-back)" : "D&A Add-back",
        detail: (ko: boolean) => ko
          ? "EBITDA 정의 자체가 이미 감가상각 전 이익 — 별도 add-back이 아니라 정의의 일부. 현금 유출이 없는 비용."
          : "Already excluded by EBITDA definition itself — not a separate add-back but part of the definition. Non-cash charge.",
      },
      {
        name: (ko: boolean) => ko ? "비현금 비용 (Non-cash Charges)" : "Non-cash Charges",
        detail: (ko: boolean) => ko
          ? "주식 보상(Stock Comp), 시가 평가 손익(Mark-to-Market). 현금 유출 없으므로 add-back 합리적."
          : "Stock compensation, mark-to-market gains/losses. No cash outflow — add-back is rational.",
      },
      {
        name: (ko: boolean) => ko ? "진짜 일회성 구조조정 비용" : "One-time Restructuring Charges",
        detail: (ko: boolean) => ko
          ? "실제 일회성 공장 폐쇄, 대규모 인력 감축. '매년 발생하지 않아야' 인정 — 반복되면 Tier 3으로 강등."
          : "Genuine one-time plant closures, mass layoffs. Must be truly non-recurring — recurring items get downgraded to Tier 3.",
      },
    ],
  },
  {
    tier: (ko: boolean) => ko ? "Tier 2 — 준공격적 (조건부 수용)" : "Tier 2 — Semi-aggressive (Conditionally Accepted)",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    dot: "bg-amber-500",
    icon: "⚠️",
    items: [
      {
        name: (ko: boolean) => ko ? "런레이트 비용 시너지 (Run-rate Cost Synergies)" : "Run-rate Cost Synergies",
        detail: (ko: boolean) => ko
          ? "이미 진행 중인 비용 절감의 연율화 효과. 12–18개월 실행 계획이 있어야 인정. '계획만 있는' 시너지는 Tier 3."
          : "Annualized effect of cost savings already in progress. Requires 12–18 month implementation roadmap. 'Planned only' synergies fall to Tier 3.",
      },
      {
        name: (ko: boolean) => ko ? "완료된 인수의 연율화 (Pro-forma for Completed Acquisitions)" : "Pro-forma for Completed Acquisitions",
        detail: (ko: boolean) => ko
          ? "인수 후 기간이 짧아 연간 EBITDA에 반영 안 된 경우. 완료 거래만 해당 — 미완성 딜은 불가."
          : "When holding period is too short to show full-year EBITDA. Completed transactions only — pending deals disqualified.",
      },
      {
        name: (ko: boolean) => ko ? "비반복 컨설팅·자문 수수료" : "Non-recurring Consulting / Advisory Fees",
        detail: (ko: boolean) => ko
          ? "딜 관련 일회성 법무·자문·컨설팅 비용. '비반복'임을 입증해야 — 반복 계약은 운영 비용."
          : "Deal-related one-time legal, advisory, consulting fees. Must evidence non-recurring nature — recurring contracts are operating costs.",
      },
      {
        name: (ko: boolean) => ko ? "COVID 시기 정상화 조정 (2020–2021 특정)" : "COVID Normalization Adjustments (2020–2021 Specific)",
        detail: (ko: boolean) => ko
          ? "팬데믹 봉쇄로 인한 매출 손실 정상화. 레이팅 에이전시도 2020–21년에 한해 수용했으나 현재는 적용 범위 크게 축소."
          : "Revenue normalization for pandemic lockdown losses. Agencies accepted this for 2020–21 specifically — scope now significantly reduced.",
      },
    ],
  },
  {
    tier: (ko: boolean) => ko ? "Tier 3 — 공격적 / \"Sponsor EBITDA\" (종종 도전받음)" : "Tier 3 — Aggressive / \"Sponsor EBITDA\" (Frequently Challenged)",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    dot: "bg-rose-500",
    icon: "🚨",
    items: [
      {
        name: (ko: boolean) => ko ? "매출 시너지 (Revenue Synergies)" : "Revenue Synergies",
        detail: (ko: boolean) => ko
          ? "교차 판매, 지역 확장 등 가정된 매출 증가. 레이팅 에이전시는 50–100% 헤어컷. 가장 논쟁적인 add-back."
          : "Cross-selling, geographic expansion uplift. Rating agencies haircut 50–100%. Most contested add-back category.",
      },
      {
        name: (ko: boolean) => ko ? "아직 시작 안 한 비용 절감 ('달성 예정')" : "\"Cost Savings to Be Achieved\" (Not Yet Started)",
        detail: (ko: boolean) => ko
          ? "계획서만 있고 실행 시작 전인 원가 절감. Tier 2와의 핵심 차이: 실행 시작 여부. 에이전시는 거의 인정 안 함."
          : "Cost reductions on paper only, not yet initiated. Key difference from Tier 2: execution has not started. Agencies rarely accept.",
      },
      {
        name: (ko: boolean) => ko ? "매년 반복되는 '일회성' 구조조정 비용" : "Annual 'One-time' Restructuring That Recurs Every Year",
        detail: (ko: boolean) => ko
          ? "3년 연속 발생한 구조조정 비용을 매번 '일회성'으로 add-back. 레이팅 에이전시: '패턴이 보이면 운영 비용으로 처리.'"
          : "Restructuring charges appearing 3+ years in a row, each time called 'one-time.' Rating agencies: 'If it's a pattern, it's operating cost.'",
      },
      {
        name: (ko: boolean) => ko ? "나쁜 해의 공격적 정상화" : "Aggressive Normalization of Bad Years",
        detail: (ko: boolean) => ko
          ? "저조한 실적 연도를 '이상 연도'로 보고 정상화. 사업 사이클인지 진짜 이상치인지 판단이 관건."
          : "Treating underperformance years as 'aberrations' and normalizing upward. The key judgment: business cycle or true outlier.",
      },
    ],
  },
];

// ── Leverage Metrics ──────────────────────────────────────────────────────────
const LEVERAGE_METRICS = [
  {
    name: (ko: boolean) => ko ? "총 레버리지 (Total Leverage)" : "Total Leverage",
    formula: "Total Debt ÷ Adj. EBITDA",
    range: (ko: boolean) => ko ? "LBO 진입: 6–8×" : "LBO entry: 6–8×",
    detail: (ko: boolean) => ko
      ? "가장 기본적인 레버리지 지표. 레이팅 에이전시의 CFR 결정의 핵심. 발행사와 투자자 모두 이 숫자를 가장 많이 인용."
      : "The most fundamental leverage metric. Core of rating agency CFR determination. Most commonly cited by both issuers and investors.",
    ratings: [
      { label: "BB", range: "4–5×", color: "bg-emerald-500" },
      { label: "B+", range: "5–6×", color: "bg-yellow-500" },
      { label: "B",  range: "6–7×", color: "bg-orange-500" },
      { label: "B-", range: "7–8×", color: "bg-red-500" },
      { label: "CCC+", range: "8×+", color: "bg-rose-700" },
    ],
    barMax: 9,
    barValue: 6.2,
    accent: "yellow",
  },
  {
    name: (ko: boolean) => ko ? "1순위 레버리지 (First Lien Leverage)" : "First Lien Leverage",
    formula: "First Lien Debt ÷ Adj. EBITDA",
    range: (ko: boolean) => ko ? "BB-/B+: 3.5–5.5×, B이하: 6×+" : "BB-/B+: 3.5–5.5×, B and below: 6×+",
    detail: (ko: boolean) => ko
      ? "TLB(텀론B) 투자자에게 가장 중요한 지표. 1순위 담보 채권자 기준 얼마나 많은 부채가 자신보다 앞서는지를 보여줌."
      : "Most important metric for TLB investors. Shows how much debt sits ahead of them as first lien secured creditors.",
    ratings: [
      { label: "BB-/B+", range: "3.5–5.5×", color: "bg-emerald-500" },
      { label: "B",      range: "5.5–6×",   color: "bg-yellow-500" },
      { label: "B-",     range: "6–7×",      color: "bg-orange-500" },
      { label: "CCC",    range: "7×+",        color: "bg-rose-600" },
    ],
    barMax: 9,
    barValue: 4.9,
    accent: "orange",
  },
  {
    name: (ko: boolean) => ko ? "순 레버리지 (Net Leverage)" : "Net Leverage",
    formula: "(Total Debt − Cash) ÷ Adj. EBITDA",
    range: (ko: boolean) => ko ? "발행사 선호 인용 지표 (낮은 숫자)" : "Issuer-preferred metric (lower number)",
    detail: (ko: boolean) => ko
      ? "발행사는 이 지표를 즐겨 인용 — 현금을 차감해 총 레버리지보다 항상 낮음. 그러나 대출자는 그로스 레버리지를 봄: 현금이 묶여있을 수 있기 때문."
      : "Issuers love to quote this — always lower than gross leverage by subtracting cash. But lenders watch gross leverage: cash can be trapped or restricted.",
    ratings: [
      { label: (ko: boolean) => ko ? "주의" : "Caution", range: (ko: boolean) => ko ? "현금 제한 여부 확인 필수" : "Must verify cash availability" },
    ],
    barMax: 9,
    barValue: 5.8,
    accent: "blue",
  },
  {
    name: (ko: boolean) => ko ? "선순위 담보 레버리지 (Senior Secured Leverage)" : "Senior Secured Leverage",
    formula: "Secured Debt ÷ Adj. EBITDA",
    range: (ko: boolean) => ko ? "HY 투자자용 핵심 지표 — 자신보다 위에 있는 담보 채무" : "Key HY investor metric — debt with priority claim above them",
    detail: (ko: boolean) => ko
      ? "HY(무담보 채권) 투자자의 관점: 이 숫자가 높을수록 자신이 부도 시 받을 회수율이 낮아짐. '내 쿠션은 얼마나 되나' 지표."
      : "HY (unsecured bond) investor perspective: higher this number, lower their recovery in default. The 'how much cushion do I have' metric.",
    ratings: [
      { label: "HY OK", range: (ko: boolean) => ko ? "3–4× 이하" : "Below 3–4×", color: "bg-emerald-500" },
      { label: (ko: boolean) => ko ? "HY 주의" : "HY Caution", range: (ko: boolean) => ko ? "4–5×" : "4–5×", color: "bg-amber-500" },
      { label: (ko: boolean) => ko ? "HY 위험" : "HY Risk", range: (ko: boolean) => ko ? "5×+" : "5×+", color: "bg-rose-500" },
    ],
    barMax: 9,
    barValue: 4.9,
    accent: "purple",
  },
];

// ── Coverage Metrics ──────────────────────────────────────────────────────────
const COVERAGE_METRICS = [
  {
    name: (ko: boolean) => ko ? "이자 커버리지 비율 (Interest Coverage)" : "Interest Coverage Ratio",
    formula: "EBITDA ÷ Total Cash Interest Expense",
    thresholds: [
      { label: (ko: boolean) => ko ? "부실 위험" : "Distress Risk", value: "1.5×", color: "bg-rose-500" },
      { label: (ko: boolean) => ko ? "최소 수용" : "Minimum OK", value: "2.0×", color: "bg-amber-500" },
      { label: (ko: boolean) => ko ? "건전" : "Healthy", value: "3.0×+", color: "bg-emerald-500" },
    ],
    detail: (ko: boolean) => ko
      ? "EBITDA가 현금 이자 비용을 몇 배 커버하는지. 2.0× 미만이면 경고 신호 — EBITDA 변동 시 이자 미지급 가능성. LBO에서 2.0–2.5×는 일반적."
      : "How many times EBITDA covers cash interest expense. Below 2.0× is a warning sign — any EBITDA fluctuation risks missed interest payments. 2.0–2.5× is typical in LBOs.",
    icon: "🏦",
  },
  {
    name: (ko: boolean) => ko ? "고정비 커버리지 비율 (FCCR)" : "Fixed Charge Coverage Ratio (FCCR)",
    formula: "(EBITDA − Capex − Cash Taxes) ÷ (Cash Interest + Required Amortization)",
    thresholds: [
      { label: (ko: boolean) => ko ? "HY 발생 테스트 기준" : "HY Incurrence Test", value: "2.0×", color: "bg-yellow-500" },
      { label: (ko: boolean) => ko ? "타이트" : "Tight", value: "1.5–2.0×", color: "bg-amber-500" },
      { label: (ko: boolean) => ko ? "위험" : "Danger", value: "<1.5×", color: "bg-rose-500" },
    ],
    detail: (ko: boolean) => ko
      ? "HY 채권 Credit Agreement에서 '추가 채무 발행 가능 여부'를 결정하는 핵심 발생 테스트. FCCR < 2.0×이면 발행사는 제한된 그룹(Restricted Group) 안에서만 추가 차입 가능. 이 숫자 하나가 추가 M&A, 배당, 리파이낸스 능력을 결정."
      : "The core incurrence test in HY Credit Agreements that determines 'can the issuer take on more debt?' If FCCR < 2.0×, the issuer is restricted to incurring only within the Restricted Group. This single number drives M&A capacity, dividends, and refinancing ability.",
    icon: "🔑",
    highlight: true,
  },
  {
    name: (ko: boolean) => ko ? "부채 서비스 커버리지 (DSCR)" : "Debt Service Coverage Ratio (DSCR)",
    formula: "EBITDA ÷ Total Debt Service (Interest + Principal)",
    thresholds: [
      { label: (ko: boolean) => ko ? "프로젝트 파이낸스 최소" : "Project Finance Minimum", value: "1.2×", color: "bg-amber-500" },
      { label: (ko: boolean) => ko ? "일반 수용" : "Generally Acceptable", value: "1.5×+", color: "bg-emerald-500" },
    ],
    detail: (ko: boolean) => ko
      ? "이자 + 원금 상환 전체를 포함한 총 채무 서비스 커버리지. 프로젝트 파이낸스에서 주로 사용하지만 HY 분석에서도 참고 지표."
      : "Coverage of total debt service including both interest and principal repayment. Primary metric in project finance but also a reference point in HY analysis.",
    icon: "📊",
  },
];

// ── FCF Waterfall ─────────────────────────────────────────────────────────────
const FCF_WATERFALL = [
  {
    step: (ko: boolean) => ko ? "Reported EBITDA" : "Reported EBITDA",
    value: 700,
    delta: 0,
    pct: (ko: boolean) => ko ? "기준값" : "Baseline",
    note: (ko: boolean) => ko ? "재무제표 공시 기준 EBITDA. 조정 전." : "As reported in financial statements. Pre-adjustment.",
    color: "bg-yellow-500",
    sign: "",
  },
  {
    step: (ko: boolean) => ko ? "+ EBITDA Addbacks (조정)" : "+ EBITDA Addbacks (Adjustments)",
    value: 840,
    delta: 140,
    pct: (ko: boolean) => ko ? "+20% 조정" : "+20% adjustment",
    note: (ko: boolean) => ko ? "관리수수료 $70mn + 런레이트 시너지 $70mn = Adjusted EBITDA $840mn" : "Mgmt fees $70mn + run-rate synergies $70mn = Adjusted EBITDA $840mn",
    color: "bg-emerald-500",
    sign: "+",
  },
  {
    step: (ko: boolean) => ko ? "− 현금 이자비용 (Cash Interest)" : "− Cash Interest Expense",
    value: 495,
    delta: -345,
    pct: (ko: boolean) => ko ? "~41% of Adj. EBITDA" : "~41% of Adj. EBITDA",
    note: (ko: boolean) => ko ? "TLB $246mn (SOFR+375bp, ~6.5% all-in) + HY $99mn (9%) = $345mn" : "TLB $246mn (SOFR+375bp, ~6.5% all-in) + HY $99mn (9%) = $345mn",
    color: "bg-red-500",
    sign: "−",
  },
  {
    step: (ko: boolean) => ko ? "= EBITDA after Interest (EBI)" : "= EBITDA after Interest (EBI)",
    value: 495,
    delta: 0,
    pct: (ko: boolean) => ko ? "중간 소계" : "Sub-total",
    note: (ko: boolean) => ko ? "$840mn − $345mn = $495mn. 이자 후 현금흐름 잔여." : "$840mn − $345mn = $495mn. Remaining cash flow after interest.",
    color: "bg-blue-400",
    sign: "=",
  },
  {
    step: (ko: boolean) => ko ? "− 법인세 (Cash Taxes)" : "− Cash Taxes",
    value: 425,
    delta: -70,
    pct: (ko: boolean) => ko ? "~8% of Adj. EBITDA" : "~8% of Adj. EBITDA",
    note: (ko: boolean) => ko ? "이자 손금산입 후 실효 세율 낮음. 세금 실드 효과 활용." : "Effective rate low after interest deduction. Tax shield benefit from LBO leverage.",
    color: "bg-orange-500",
    sign: "−",
  },
  {
    step: (ko: boolean) => ko ? "− Capex (유지보수 + 성장)" : "− Capex (Maintenance + Growth)",
    value: 295,
    delta: -130,
    pct: (ko: boolean) => ko ? "~15% of Adj. EBITDA" : "~15% of Adj. EBITDA",
    note: (ko: boolean) => ko ? "유지 Capex $80mn + 성장 투자 $50mn. 제조업 특성상 높은 비중." : "Maintenance capex $80mn + growth capex $50mn. Higher percentage typical for industrial.",
    color: "bg-orange-400",
    sign: "−",
  },
  {
    step: (ko: boolean) => ko ? "± 운전자본 변동 (Working Capital Change)" : "± Working Capital Change",
    value: 295,
    delta: 0,
    pct: (ko: boolean) => ko ? "± 0 (가정)" : "± 0 (assumption)",
    note: (ko: boolean) => ko ? "Atlas는 안정적 사업 — WC 중립 가정. 성장 기업은 WC 증가로 음(−)이 될 수 있음." : "Atlas stable business — WC neutral assumption. Growth companies may have negative WC change.",
    color: "bg-teal-500",
    sign: "±",
  },
  {
    step: (ko: boolean) => ko ? "− 의무 원금 상환 (Mandatory Amortization)" : "− Mandatory Debt Amortization",
    value: 254,
    delta: -41,
    pct: (ko: boolean) => ko ? "TLB 원금의 1%/년" : "1% / yr of TLB principal",
    note: (ko: boolean) => ko ? "TLB $4.1bn × 1% = $41mn. HY 채권은 불릿(만기 일시 상환) — 연간 상각 없음." : "TLB $4.1bn × 1% = $41mn. HY bonds are bullet maturity — no annual amortization.",
    color: "bg-rose-500",
    sign: "−",
  },
  {
    step: (ko: boolean) => ko ? "= Levered FCF (레버드 잉여현금흐름)" : "= Levered FCF (Free Cash Flow to Equity)",
    value: 254,
    delta: 0,
    pct: (ko: boolean) => ko ? "~30% FCF 전환율" : "~30% FCF conversion",
    note: (ko: boolean) => ko ? "Atlas FCF $254mn / Adj. EBITDA $840mn = 30.2% 전환율. LBO에서 25–35%가 건전한 범위." : "Atlas FCF $254mn / Adj. EBITDA $840mn = 30.2% conversion. 25–35% is healthy for an LBO.",
    color: "bg-yellow-500",
    sign: "=",
  },
];

// ── Rating Grid ───────────────────────────────────────────────────────────────
const RATING_GRID = [
  {
    sp: "BB",      moodys: "Ba2",  leverage: "3–4×",
    color: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    barPx: 30,
  },
  {
    sp: "BB-",     moodys: "Ba3",  leverage: "4–5×",
    color: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    barPx: 42,
  },
  {
    sp: "B+",      moodys: "B1",   leverage: "5–6×",
    color: "bg-yellow-500",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    barPx: 56,
  },
  {
    sp: "B",       moodys: "B2",   leverage: "6–7×",
    color: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    barPx: 70,
  },
  {
    sp: "B-",      moodys: "B3",   leverage: "7–8×",
    color: "bg-red-500",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    barPx: 84,
  },
  {
    sp: "CCC+",    moodys: "Caa1", leverage: "8–9×",
    color: "bg-rose-700",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    barPx: 100,
  },
];

const RATING_DIFFERENCES = [
  {
    topic: (ko: boolean) => ko ? "운영 리스 처리 (IFRS 16)" : "Operating Lease Treatment (IFRS 16)",
    sp: (ko: boolean) => ko ? "S&P는 운영 리스를 부채 등가물로 보다 공격적으로 조정. 부채 증가 → 레버리지 상승." : "S&P adjusts operating leases as debt equivalents more aggressively. Debt up → leverage up.",
    moodys: (ko: boolean) => ko ? "Moody's도 유사하나 IFRS 16 적용 후 조정 강도 낮아짐. 회사별 재량 여지." : "Moody's similar but adjustments less aggressive post-IFRS 16. More company-by-company discretion.",
  },
  {
    topic: (ko: boolean) => ko ? "연금 미적립 부채 (Pension Unfunded Liability)" : "Pension Unfunded Liability",
    sp: (ko: boolean) => ko ? "연금 부족분의 일부만 부채로 조정. 제조업·항공사에 중요." : "Adjusts only a portion of pension deficit as debt. Critical for manufacturers and airlines.",
    moodys: (ko: boolean) => ko ? "Moody's는 연금 미적립 전액을 부채 등가물로 처리하는 경향. 레버리지 상당 증가 가능." : "Moody's tends to treat full pension deficit as debt-equivalent. Can increase leverage materially.",
  },
  {
    topic: (ko: boolean) => ko ? "미래 시너지 헤어컷" : "Future Synergy Haircut",
    sp: (ko: boolean) => ko ? "미달성 시너지: 50% 헤어컷 표준. 특히 매출 시너지는 거의 불인정." : "Unachieved synergies: 50% standard haircut. Revenue synergies almost never accepted.",
    moodys: (ko: boolean) => ko ? "유사: 비용 시너지 50% 할인, 매출 시너지 50–100% 할인. 실행 계획 중시." : "Similar: cost synergies 50% discount, revenue synergies 50–100%. Execution roadmap heavily weighted.",
  },
  {
    topic: (ko: boolean) => ko ? "발행사 CFR vs 개별 상품 등급 (Notching)" : "Issuer CFR vs Instrument Notching",
    sp: (ko: boolean) => ko ? "CFR은 회사 전체. TLB(1순위)는 CFR+1 또는 동일. HY 채권(무담보)은 CFR-1 또는 -2." : "CFR is issuer-level. TLB (1st lien) = CFR+1 or same. HY bonds (unsecured) = CFR-1 or -2.",
    moodys: (ko: boolean) => ko ? "동일 개념 — PDR(확률)과 LGD(손실)로 분리 계산. 1순위 담보는 +1, 무담보는 −1 전형적." : "Same concept — PDR (probability) and LGD (loss given default) computed separately. 1st lien +1, unsecured −1 typical.",
  },
];

// ── Atlas Industrial Worked Example ──────────────────────────────────────────
const ATLAS_CAPITAL_STRUCTURE = [
  { label: "TLB (Term Loan B)",         amount: 4100, rate: "SOFR+375bp (~6.5%)", interest: 246, lien: "1st Lien", color: "bg-yellow-500" },
  { label: "HY Notes (Senior Unsec.)",  amount: 1100, rate: "9.0% Fixed",          interest: 99,  lien: "Unsecured", color: "bg-orange-500" },
];

const ATLAS_CREDIT_TESTS = [
  {
    test: (ko: boolean) => ko ? "총 레버리지 (Total Leverage)" : "Total Leverage",
    formula: "$5,200mn ÷ $840mn Adj. EBITDA",
    result: "6.2×",
    pass: (ko: boolean) => ko ? "B 등급 범위 (6–7×)" : "B rating range (6–7×)",
    passColor: "text-amber-600 dark:text-amber-400",
    status: "warn",
  },
  {
    test: (ko: boolean) => ko ? "1순위 레버리지 (First Lien Leverage)" : "First Lien Leverage",
    formula: "$4,100mn ÷ $840mn Adj. EBITDA",
    result: "4.9×",
    pass: (ko: boolean) => ko ? "B+/BB- 범위 — TLB 투자자 수용 가능" : "B+/BB- range — TLB investors can accept",
    passColor: "text-emerald-600 dark:text-emerald-400",
    status: "pass",
  },
  {
    test: (ko: boolean) => ko ? "이자 커버리지 (Interest Coverage)" : "Interest Coverage",
    formula: "$840mn ÷ $345mn",
    result: "2.43×",
    pass: (ko: boolean) => ko ? "통과 (2.0× 최소 충족)" : "Passes (above 2.0× minimum)",
    passColor: "text-emerald-600 dark:text-emerald-400",
    status: "pass",
  },
  {
    test: (ko: boolean) => ko ? "FCCR (고정비 커버리지)" : "Fixed Charge Coverage (FCCR)",
    formula: "($840-$130-$70)mn ÷ ($345+$42)mn",
    result: "1.65×",
    pass: (ko: boolean) => ko ? "주의 — 2.0× HY 발생 테스트 미충족 (타이트)" : "Caution — Below 2.0× HY incurrence test (tight)",
    passColor: "text-rose-600 dark:text-rose-400",
    status: "fail",
  },
  {
    test: (ko: boolean) => ko ? "FCF 디레버리지 속도" : "FCF Deleveraging Speed",
    formula: "$254mn FCF ÷ $5,200mn Total Debt",
    result: "4.9%/yr",
    pass: (ko: boolean) => ko ? "레버리지 연 ~0.3× 하락 — 느리지만 수용 가능" : "~0.3× annual deleveraging — slow but acceptable",
    passColor: "text-amber-600 dark:text-amber-400",
    status: "warn",
  },
];

const ATLAS_RATINGS = [
  { instrument: "TLB (1st Lien)",    sp: "B+",  moodys: "B1",  note: (ko: boolean) => ko ? "CFR 대비 1 노치 상향 (1순위 담보 혜택)" : "One notch above CFR (1st lien security benefit)" },
  { instrument: "HY Notes (Unsec.)", sp: "B-",  moodys: "B3",  note: (ko: boolean) => ko ? "CFR 대비 1–2 노치 하향 (무담보 후순위)" : "1–2 notches below CFR (unsecured subordination)" },
  { instrument: "Issuer CFR",        sp: "B",   moodys: "B2",  note: (ko: boolean) => ko ? "총 레버리지 6.2× → B 등급 범위" : "Total leverage 6.2× → B rating range" },
];

// ── Cash Sweep Mechanics ──────────────────────────────────────────────────────
const CASH_SWEEP_TIERS = [
  { leverage: (ko: boolean) => ko ? "6× 초과" : "Above 6×",      sweep: "50%", color: "bg-rose-500",    labelColor: "text-rose-700 dark:text-rose-300" },
  { leverage: (ko: boolean) => ko ? "5–6×" : "5–6×",             sweep: "25%", color: "bg-amber-500",   labelColor: "text-amber-700 dark:text-amber-300" },
  { leverage: (ko: boolean) => ko ? "5× 미만" : "Below 5×",       sweep: "0%",  color: "bg-emerald-500", labelColor: "text-emerald-700 dark:text-emerald-300" },
];

// ── Korea Credit Analysis ─────────────────────────────────────────────────────
const KOREA_CREDIT = [
  {
    title: (ko: boolean) => ko ? "유지형 코버넌트 (Maintenance Covenant) 존재" : "Maintenance Covenants Exist",
    icon: "📋",
    detail: (ko: boolean) => ko
      ? "미국 Cov-Lite와 달리 한국 크레딧 어그리먼트는 분기별 레버리지 유지 테스트 포함. 은행은 위반 즉시 기한이익 상실 요구 가능. PE 딜도 예외 없음."
      : "Unlike US Cov-Lite, Korean credit agreements include quarterly leverage maintenance tests. Banks can call events of default on violations immediately. PE deals are no exception.",
    badge: (ko: boolean) => ko ? "한국 특수성" : "Korea-Specific",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    title: (ko: boolean) => ko ? "보수적 레버리지 한도 (통상 5–6×)" : "Conservative Leverage Cap (Typically 5–6×)",
    icon: "🔒",
    detail: (ko: boolean) => ko
      ? "한국 은행 여신심사위원회는 6×를 사실상 상한으로 봄. 미국 8× LBO가 일반적인 것과 대조적. 결과적으로 한국 LBO의 에쿼티 비중이 더 높음."
      : "Korean bank credit committees treat 6× as a de facto hard cap. Contrast with US where 8× LBOs are common. Korean LBOs consequently require higher equity contribution.",
    badge: (ko: boolean) => ko ? "한국 vs 글로벌" : "Korea vs Global",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    title: (ko: boolean) => ko ? "엄격한 '은행 EBITDA' 정의" : "Stricter 'Bank EBITDA' Definition",
    icon: "📐",
    detail: (ko: boolean) => ko
      ? "한국 은행의 여신심사에서 쓰는 EBITDA는 글로벌 대비 addback이 적음. 런레이트 시너지·매출 시너지 거의 불인정. '재무제표 기준에서 최소 조정'이 원칙."
      : "EBITDA used by Korean bank credit committees allows far fewer addbacks than global practice. Run-rate synergies and revenue synergies largely rejected. 'Minimal adjustments from financial statements' is the principle.",
    badge: (ko: boolean) => ko ? "EBITDA 정의 차이" : "EBITDA Definition Gap",
    badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
  {
    title: (ko: boolean) => ko ? "부동산 가치 활용 — MBK·홈플러스 사례" : "Real Estate Value Utilization — MBK·Homeplus Case",
    icon: "🏪",
    detail: (ko: boolean) => ko
      ? "MBK파트너스의 홈플러스 인수(2015, 7.2조원)는 순수 현금흐름 분석 외에 대형마트 부동산 가치를 '준담보'로 활용. 순수 레버리지는 ~7.2×였으나 부동산 담보 가치가 신용 보완. 이후 세일앤드리스백으로 현금화 — 논란의 중심."
      : "MBK Partners' Homeplus acquisition (2015, KRW 7.2tr) used retail property values as quasi-collateral beyond pure cash flow. Pure leverage was ~7.2× but real estate collateral provided credit support. Subsequent sale-and-leaseback to monetize — center of controversy.",
    badge: (ko: boolean) => ko ? "국내 케이스" : "Domestic Case",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "레이팅 에이전시가 EBITDA addback을 얼마나 인정하나요? 발행사와 협상이 되나요?"
      : "How much do rating agencies accept EBITDA addbacks? Can issuers negotiate?",
    a: (ko: boolean) => ko
      ? "네, 레이팅 에이전시는 '레이팅 커미티 토론(Rating Committee Discussion)' 과정에서 발행사의 주장을 청취합니다. 프로세스는 4–6주 소요됩니다. 비용 시너지는 50% 할인 표준, 매출 시너지는 50–100% 할인합니다. 매년 반복되는 '일회성' 비용은 강하게 도전받습니다. 실무에서 IR 팀과 CFO가 직접 에이전시 애널리스트와 미팅을 통해 addback 논리를 설명하고, 에이전시는 독립적인 'S&P-adjusted' 또는 'Moody's-adjusted EBITDA'를 공시합니다 — 이것이 발행사 'Adjusted EBITDA'보다 항상 낮습니다. 레이팅은 협상이지만, 에이전시가 최종 결정권을 가집니다."
      : "Yes — rating agencies hear issuers' arguments during the 'Rating Committee Discussion' process, which takes 4–6 weeks. Cost synergies receive a standard 50% discount; revenue synergies 50–100%. 'One-time' charges that recur annually are strongly challenged. In practice, IR teams and CFOs meet directly with agency analysts to explain addback rationale. Agencies publish their own 'S&P-adjusted' or 'Moody's-adjusted EBITDA' — always lower than the issuer's. Ratings are a negotiation, but agencies have final say.",
  },
  {
    q: (ko: boolean) => ko
      ? "FCCR이 2.0×를 살짝 밑돌 때 어떻게 대처하나요?"
      : "What do you do when FCCR is just below 2.0×?",
    a: (ko: boolean) => ko
      ? "실무에서 세 가지 주요 대응이 있습니다. ① 부채 축소: 주로 HY 트랜치 규모를 줄여 총 이자 비용을 낮추는 방법. 에쿼티 투입을 늘려야 하므로 PE 스폰서에게 비용. ② EBITDA 증가: 추가 addback 협상 또는 새로운 비용 절감 계획 수립 — 레이팅 에이전시 수용 여부가 관건. ③ 에쿼티 치유(Equity Cure): PE 스폰서가 소액 에쿼티를 추가 투입해 EBITDA-equivalent로 처리, 테스트를 통과시킴. 서명 시점에 FCCR을 '커 아웃'하는 기법. 중요한 점: FCCR < 2.0×는 '채무 불이행'이 아니라 '추가 차입 불가' 상태입니다 — 회사 운영엔 문제없으나 M&A, 배당, 리파이낸스 능력이 제한됩니다."
      : "Three main approaches in practice. ① Reduce debt: primarily cutting the HY tranche size to lower total interest expense — costs the PE sponsor more equity. ② Increase EBITDA: negotiate additional addbacks or establish new cost-cutting plans — depends on rating agency acceptance. ③ Equity cure: PE sponsor injects a small equity amount treated as EBITDA-equivalent to pass the test. 'Curing out' at signing. Key point: FCCR < 2.0× means 'cannot incur more debt,' not 'default' — operations are fine but M&A, dividends, and refinancing capacity are restricted.",
  },
  {
    q: (ko: boolean) => ko
      ? "Excess Cash Flow sweep가 수익률(IRR)에 미치는 영향은 무엇인가요?"
      : "How does the Excess Cash Flow sweep impact PE investor returns (IRR)?",
    a: (ko: boolean) => ko
      ? "표면적으로 ECF sweep는 빠른 디레버리지로 좋아 보입니다 — 부채가 줄면 에쿼티 가치가 증가합니다. 그러나 PE 스폰서 입장에서는 복잡합니다. ① 현금을 강제 상환에 쏟으면 M&A 기회나 배당 환류가 제한됩니다. ② 레버리지가 이미 빠르게 하락 중인 딜에서 sweep는 자본 효율성을 낮춥니다. ③ 실무에서 PE는 ECF sweep 임계값(threshold) 협상을 중요시합니다 — 통상 '레버리지 6× 이하시 50% → 5× 이하시 25% → 4.5× 이하시 0%' 구조에서 임계값을 낮추면(예: 5×를 4.5×로) 더 많은 현금을 M&A나 배당에 활용할 수 있습니다. Atlas의 경우: FCF $254mn × 50% sweep = $127mn 강제 상환. 이 $127mn을 배당으로 받았다면 IRR이 유의미하게 상승합니다."
      : "On the surface, ECF sweep looks good — faster deleveraging increases equity value. But for PE sponsors it is complex. ① Forcing cash to mandatory repayment limits M&A opportunities and dividend recaps. ② In deals where leverage is already declining quickly, sweeps reduce capital efficiency. ③ In practice, PE highly values negotiating sweep thresholds — in a typical '6× → 50%, 5× → 25%, 4.5× → 0%' structure, pushing thresholds lower (e.g. 5× to 4.5×) preserves more cash for M&A or dividends. For Atlas: FCF $254mn × 50% sweep = $127mn forced repayment. Receiving that $127mn as a dividend instead would meaningfully lift IRR.",
  },
  {
    q: (ko: boolean) => ko
      ? "S&P와 Moody's 레이팅이 다를 때 (Split Rating) 어떻게 되나요?"
      : "What happens when S&P and Moody's ratings differ (Split Rating)?",
    a: (ko: boolean) => ko
      ? "Split Rating은 매우 흔합니다 — B+/B1, B/B2 등의 조합이 일반적입니다. 메커니즘은 세 가지입니다. ① 투자자 내부 정책: 많은 기관 투자자는 '두 에이전시 중 낮은 등급'을 채택합니다. B+/B 스플릿이면 B로 처리. ② 프라이싱: 두 등급의 중간 어딘가에서 결정됩니다 — 발행 스프레드는 각자의 등급 근거를 투자자에게 설명하는 로드쇼에서 형성. ③ 등급 쇼핑: 발행사가 유리한 등급을 주는 에이전시만 사용하는 것은 업계에서 눈살을 찌푸리지만 실제로는 발생합니다. 투자자들은 이를 인지하고, '왜 Moody's만 받았냐'는 질문을 합니다. 최근 추세: 일부 발행사는 비용 절감을 위해 에이전시 하나만 채용하는 '단일 등급' 전략을 씁니다 — 소규모 딜에서 증가 중."
      : "Split ratings are extremely common — combinations like B+/B1, B/B2 are standard. Three mechanisms. ① Investor internal policy: many institutional investors adopt the lower of the two ratings. A B+/B split is treated as B. ② Pricing: determined somewhere in the middle — issuance spread is set during roadshow as issuers explain both rating rationales to investors. ③ Rating shopping: issuers using only the agency giving the favorable rating is frowned upon but does happen. Investors are aware and ask 'why only Moody's?' Recent trend: some issuers use a 'single rating' strategy to cut costs — increasing in smaller deals.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 PE 딜의 크레딧 분석이 글로벌 LBO와 어떻게 다른가요?"
      : "How does Korean PE credit analysis differ from global LBO practice?",
    a: (ko: boolean) => ko
      ? "다섯 가지 핵심 차이점이 있습니다. ① 유지형 코버넌트: 한국은 여전히 분기별 재무 테스트가 표준 — 미국 Cov-Lite와 정반대입니다. ② 레버리지 한도: 한국 은행 여신심사위원회는 6×를 사실상 하드 캡으로 취급합니다. ③ EBITDA 정의: 한국 '은행 EBITDA'는 addback이 훨씬 적음 — 런레이트 시너지나 매출 시너지 거의 불인정. ④ 담보 중심 분석: 한국 PE는 현금흐름보다 부동산 등 실물 담보 가치를 중시합니다. 홈플러스 딜이 대표적 — 현금흐름만 보면 과도한 레버리지였지만 대형마트 부지 가치가 신용 보완 역할. ⑤ 차입 형태: 한국 LBO는 공개 HY 채권보다 신디케이티드 은행 론 중심 — KDB, 하나은행, 신한은행 등이 주요 대주. 글로벌 HY 시장에서 조달하는 경우는 일부 크로스보더 딜에 한정."
      : "Five key differences. ① Maintenance covenants: Korea still uses quarterly financial maintenance tests as standard — the opposite of US Cov-Lite. ② Leverage caps: Korean bank credit committees treat 6× as a de facto hard limit. ③ EBITDA definition: Korean 'bank EBITDA' allows far fewer addbacks — run-rate and revenue synergies largely rejected. ④ Collateral-centric analysis: Korean PE prioritizes hard asset collateral (real estate) over pure cash flow analysis. Homeplus exemplifies this — cash flow alone would have been over-leveraged but retail land values provided credit support. ⑤ Borrowing form: Korean LBOs are bank syndicated loan-centric, not public HY bonds — KDB, Hana, Shinhan as anchor lenders. Global HY market access is limited to cross-border deals.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "S&P Global Ratings", title: "Corporate Rating Methodology: Leveraged Finance Metrics", url: "https://www.spglobal.com/ratings/en/research/articles/corporate-rating-methodology", source: "S&P Global, 2023" },
  { id: 2, author: "Moody's Investors Service", title: "Moody's Corporate Leverage and Coverage Ratios — Methodology", url: "https://www.moodys.com/researchandratings/market-segment/corporate-finance", source: "Moody's, 2023" },
  { id: 3, author: "LSTA (Loan Syndications and Trading Association)", title: "The LSTA's Complete Credit Agreement Guide, 3rd Ed.", url: "https://www.lsta.org/", source: "LSTA, 2023" },
  { id: 4, author: "JP Morgan DCM / LevFin Research", title: "Annual Leveraged Finance Review — EBITDA Addbacks Study", url: "https://www.jpmorgan.com/insights/research/leveraged-finance", source: "JPM Research, 2023" },
  { id: 5, author: "Fitch Ratings", title: "High Yield Default Study and Recovery Analysis", url: "https://www.fitchratings.com/research/corporate-finance", source: "Fitch, 2024" },
  { id: 6, author: "MBK Partners", title: "Homeplus Acquisition — Public Disclosure Materials", url: "https://www.mbkpartnersinc.com/", source: "MBK Partners, 2015" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinCreditMetricsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = LEVFIN_SERIES[thisCh - 1] ?? null;
  const next = LEVFIN_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {LEVFIN_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-yellow-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-yellow-400 hover:text-yellow-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>LevFin · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "크레딧 메트릭 & 언더라이팅 분석 — Leverage·Coverage·EBITDA 심층 해부"
              : "Credit Metrics & Underwriting Analysis — Leverage, Coverage & EBITDA Deep Dive"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "Credit analysis에서 가장 중요한 첫 번째 질문: 이 회사의 진짜 EBITDA는 얼마인가? 정답은 10-K에 있지 않습니다. Credit Agreement 상 Consolidated EBITDA 정의, 레이팅 에이전시의 독자적 조정, PE 스폰서의 'Sponsor EBITDA' — 세 개의 숫자는 모두 다릅니다. 이 차이를 직관적으로 이해하는 것이 LevFin 분석의 출발점입니다."
              : "The most important first question in credit analysis: what is this company's real EBITDA? The answer is never what's in the 10-K. The Credit Agreement's Consolidated EBITDA definition, the rating agency's independent adjustments, and the PE sponsor's 'Sponsor EBITDA' — all three numbers are different. Intuitively understanding these gaps is where LevFin analysis starts."}
          </p>
        </motion.div>

        {/* ── Opening Callout ─────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0.1)} className="mb-12">
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🎯</span>
              <div>
                <p className="font-bold text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                  {ko ? "JPM DCM 분석팀의 첫 번째 과제" : "JPM DCM Analyst's First Assignment"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "JPM DCM 분석팀은 Credit Agreement상 Consolidated EBITDA 정의를 10페이지 이상 꼼꼼히 읽는다 — 발행사가 어떤 addback을 negotiated했는지가 사실상 숨겨진 재무 유연성이기 때문입니다. 같은 기업의 EBITDA가 레이팅 에이전시 버전($700mn)과 Sponsor 버전($840mn)에서 20% 차이 나는 것은 흔한 일입니다. 2022–23년 LBO에서 평균 addback은 Reported EBITDA 대비 20–30%였고, Toys R Us의 경우 Adjusted EBITDA $300mn vs Reported $200mn — 50% 차이였습니다."
                    : "JPM DCM analysts meticulously read 10+ pages of the Consolidated EBITDA definition in the Credit Agreement — because what addbacks the issuer has negotiated represents effectively hidden financial flexibility. The same company's EBITDA being 20% different between the rating agency version ($700mn) and the Sponsor version ($840mn) is completely normal. In 2022–23 LBOs, the average addback was 20–30% of Reported EBITDA; Toys R Us had Adjusted EBITDA $300mn vs Reported $200mn — a 50% gap."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 섹션 1: EBITDA Tiers ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. EBITDA의 세계 — 3가지 Addback Tier" : "1. The World of EBITDA — Three Addback Tiers"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "이 세계에서 생존하려면 Adjusted vs Reported EBITDA 차이를 직관적으로 이해해야 합니다. 모든 addback은 '이 비용이 경상적 운영 비용인가 아닌가'라는 하나의 질문으로 귀결됩니다."
              : "To survive in this world, you must intuitively understand the gap between Adjusted and Reported EBITDA. Every addback comes down to one question: 'Is this cost a recurring operating expense or not?'"}
          </p>
          <div className="space-y-5">
            {EBITDA_ADDBACKS.map((tier, ti) => (
              <motion.div key={ti} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(ti * 0.07)}
                className={`rounded-xl border p-5 ${tier.color}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{tier.icon}</span>
                  <h3 className="font-black text-sm text-gray-900 dark:text-gray-50">{tier.tier(ko)}</h3>
                </div>
                <div className="space-y-3">
                  {tier.items.map((item, ii) => (
                    <div key={ii} className="flex gap-3">
                      <div className={`w-1.5 rounded-full shrink-0 mt-1 ${tier.dot}`} style={{ minHeight: "14px" }} />
                      <div>
                        <p className="font-bold text-xs text-gray-800 dark:text-gray-200 mb-0.5">{item.name(ko)}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail(ko)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`mt-4 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${tier.badge}`}>
                  {ti === 0 ? (ko ? "레이팅 에이전시 전원 수용" : "All agencies accept") :
                   ti === 1 ? (ko ? "경우에 따라 수용 / 도전" : "Case-by-case / contested") :
                   (ko ? "에이전시 헤어컷 50–100%" : "Agency haircut 50–100%")}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bank vs Rating Agency EBITDA callout */}
          <div className="mt-5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              📌 {ko ? "Bank EBITDA vs Rating Agency EBITDA — 실무 핵심" : "Bank EBITDA vs Rating Agency EBITDA — Practical Core"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "크레딧 어그리먼트에서 허용된 addback으로 계산한 'Bank EBITDA'와 레이팅 에이전시가 독자적으로 계산한 'Agency EBITDA'의 차이가 2022–23년 평균 LBO에서 20–30%였습니다. Toys R Us: Bank $300mn vs Agency $200mn. 이 차이가 클수록 레이팅이 발행사 예상보다 낮게 나올 가능성이 높습니다 — 결과적으로 스프레드 상승, 딜 구조 재협상으로 이어집니다."
                : "'Bank EBITDA' computed using Credit Agreement-permitted addbacks versus 'Agency EBITDA' calculated independently by rating agencies differed by 20–30% on average in 2022–23 LBOs. Toys R Us: Bank $300mn vs Agency $200mn. The larger this gap, the higher the likelihood the actual rating comes in below issuer expectations — leading to wider spreads and deal restructuring."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 2: 레버리지 메트릭 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 레버리지 메트릭 — 4가지 주요 지표" : "2. Leverage Metrics — Four Key Ratios"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "레버리지 지표는 하나가 아닙니다. 발행사, TLB 투자자, HY 투자자, 레이팅 에이전시가 각자 다른 숫자를 봅니다. 이 차이를 이해해야 딜 테이블에서 대화할 수 있습니다."
              : "There is no single leverage metric. Issuers, TLB investors, HY investors, and rating agencies each look at different numbers. Understanding these differences is prerequisite to being useful at the deal table."}
          </p>
          <div className="space-y-4">
            {LEVERAGE_METRICS.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50 mb-1">{m.name(ko)}</p>
                    <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                      {m.formula}
                    </code>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{m.range(ko)}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{m.detail(ko)}</p>

                {/* Rating bands */}
                {m.ratings && m.ratings.length > 0 && (m.ratings[0] as { color?: string }).color && (
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                      {ko ? "레이팅 레버리지 밴드" : "Rating Leverage Bands"}
                    </p>
                    {(m.ratings as Array<{ label: string; range: string | ((ko: boolean) => string); color?: string }>).map((r, j) => {
                      const rangeVal = typeof r.range === "function" ? r.range(ko) : r.range;
                      const labelVal = typeof r.label === "function" ? (r.label as (ko: boolean) => string)(ko) : r.label;
                      const bandNums = rangeVal.match(/[\d.]+/g);
                      const bandRight = bandNums ? parseFloat(bandNums[bandNums.length - 1]) : 5;
                      const pct = Math.min((bandRight / m.barMax) * 100, 100);
                      return (
                        <div key={j} className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-bold text-gray-600 dark:text-gray-400 w-10 shrink-0">{labelVal}</span>
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" style={{ height: "10px" }}>
                            <motion.div
                              className={`h-full rounded-full ${r.color ?? "bg-gray-400"}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={VP}
                              transition={{ duration: 0.5, delay: j * 0.06, ease: "easeOut" }}
                            />
                          </div>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 w-16 shrink-0 text-right">{rangeVal}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 3: 커버리지 메트릭 — FCCR Deep Dive ──────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 커버리지 메트릭 — FCCR 심층 분석" : "3. Coverage Metrics — FCCR Deep Dive"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "FCCR 2.0×는 단순한 숫자가 아닙니다 — HY 채권 세계에서 '추가 부채 발행 가능 여부'의 기준입니다. 이 숫자 하나가 딜의 M&A 전략, 배당 정책, 리파이낸스 타이밍을 결정합니다."
              : "FCCR 2.0× is not just a number — it is the threshold that determines 'can this issuer take on more debt' in the HY world. This single number drives the deal's M&A strategy, dividend policy, and refinancing timing."}
          </p>
          <div className="space-y-4">
            {COVERAGE_METRICS.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${
                  c.highlight
                    ? "border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20"
                    : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40"
                }`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50 mb-1">{c.name(ko)}</p>
                    <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800/60 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300 break-all">
                      {c.formula}
                    </code>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {c.thresholds.map((t, j) => {
                    const labelText = typeof t.label === "function" ? t.label(ko) : t.label;
                    return (
                      <div key={j} className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-lg ${
                        (t as { color?: string }).color
                          ? ((t as { color: string }).color.includes("emerald")
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                              : (t as { color: string }).color.includes("amber")
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                                : (t as { color: string }).color.includes("yellow")
                                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                                  : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300")
                          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {labelText}: <span className="font-black">{t.value}</span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{c.detail(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* FCCR Consequence callout */}
          <div className="mt-5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-4">
            <p className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-widest mb-2">
              🚨 {ko ? "FCCR < 2.0× 시 제한 사항" : "What Happens When FCCR < 2.0×"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "FCCR < 2.0×는 채무 불이행(Default)이 아닙니다. 그러나 '제한된 그룹(Restricted Group)' 내에서의 허용 행위가 대폭 제한됩니다. 구체적으로: ① 추가 채무 발행 불가 (No Additional Debt Incurrence) ② 제한된 지급 — 배당, 주식 매입, 스폰서 수수료 지급 불가 ③ 제한된 투자 — 특정 M&A, JV 투자 불가 ④ 리파이낸스 복잡성 증가. PE 스폰서는 인수 시점에 이 숫자를 2.0× 이상으로 만들기 위해 딜 구조를 설계합니다 — '에쿼티 큐어(Equity Cure)' 포함."
                : "FCCR < 2.0× is not a default. But permitted activities within the Restricted Group are severely restricted. Specifically: ① No additional debt incurrence ② Restricted payments — no dividends, share buybacks, or sponsor fees ③ Restricted investments — no certain M&A or JV investments ④ Increased refinancing complexity. PE sponsors engineer deal structures at acquisition to keep this number above 2.0× — including equity cures."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 4: FCF 워터폴 ──────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. FCF 워터폴 — EBITDA에서 잉여현금흐름까지 8단계" : "4. FCF Waterfall — 8 Steps from EBITDA to Free Cash Flow"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "Atlas Industrial Corp ($840mn Adj. EBITDA)를 기준으로 각 라인아이템이 어떻게 현금흐름을 감소시키는지, 최종 Levered FCF는 얼마인지를 한 눈에 봅니다."
              : "Using Atlas Industrial Corp ($840mn Adj. EBITDA), see how each line item reduces cash flow and what the final Levered FCF is."}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {FCF_WATERFALL.map((row, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                className={`flex items-start gap-0 border-b border-gray-100 dark:border-gray-800 last:border-b-0 ${
                  row.sign === "=" ? "bg-yellow-50 dark:bg-yellow-900/10" : "bg-white dark:bg-gray-900/0"
                }`}>
                <div className={`w-1 shrink-0 self-stretch ${row.color}`} />
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-black w-4 shrink-0 ${
                        row.sign === "+" ? "text-emerald-600 dark:text-emerald-400" :
                        row.sign === "−" ? "text-rose-500" :
                        row.sign === "=" ? "text-yellow-600 dark:text-yellow-400" :
                        "text-gray-400"
                      }`}>{row.sign || "→"}</span>
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{row.step(ko)}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {row.delta !== 0 && (
                        <span className={`text-xs font-bold font-mono ${
                          row.delta > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"
                        }`}>
                          {row.delta > 0 ? `+$${row.delta}mn` : `−$${Math.abs(row.delta)}mn`}
                        </span>
                      )}
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        row.sign === "=" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {row.pct(ko)}
                      </span>
                      {row.sign === "=" && (
                        <span className="text-base font-black font-mono" style={{ color: accent }}>
                          ${row.value}mn
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed ml-6">{row.note(ko)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Running total bar chart */}
          <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "FCF 워터폴 시각화 (막대: 각 단계 달러 크기)" : "FCF Waterfall Visual (Bar: Dollar Size at Each Stage)"}
            </p>
            <div className="flex items-end gap-2" style={{ height: "100px" }}>
              {[
                { label: "Adj. EBITDA", val: 840, color: "bg-yellow-500" },
                { label: "− Interest", val: 345, color: "bg-red-500" },
                { label: "− Taxes",    val: 70,  color: "bg-orange-500" },
                { label: "− Capex",    val: 130, color: "bg-orange-400" },
                { label: "− Amort.",   val: 41,  color: "bg-rose-500" },
                { label: "= FCF",      val: 254, color: "bg-emerald-500" },
              ].map((bar, bi) => {
                const barPx = Math.round((bar.val / 840) * 80);
                return (
                  <div key={bi} className="flex flex-col items-center justify-end flex-1 min-w-0" style={{ height: "100px" }}>
                    <span className="text-[8px] font-bold text-gray-500 mb-0.5">${bar.val}mn</span>
                    <motion.div
                      className={`w-full rounded-t-sm ${bar.color}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: barPx }}
                      viewport={VP}
                      transition={{ duration: 0.5, delay: bi * 0.08, ease: "easeOut" }}
                      style={{ height: `${barPx}px` }}
                    />
                    <span className="text-[7px] text-gray-400 mt-1 text-center leading-tight">{bar.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cash Sweep Mechanics */}
          <div className="mt-5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
            <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-3">
              🔄 {ko ? "Excess Cash Flow Sweep 메커니즘" : "Excess Cash Flow (ECF) Sweep Mechanics"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {ko
                ? "ECF Sweep는 레버리지 수준에 따라 잉여현금흐름의 일정 비율을 강제로 채무 상환에 사용하는 조항입니다. Atlas의 경우 레버리지 6.2× → FCF $254mn의 50% = $127mn 강제 상환."
                : "ECF Sweep requires a percentage of free cash flow to be applied to mandatory debt repayment based on leverage level. For Atlas: leverage 6.2× → 50% of FCF $254mn = $127mn mandatory repayment."}
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {CASH_SWEEP_TIERS.map((tier, ti) => (
                <div key={ti} className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700">
                  <div>
                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{ko ? "레버리지" : "Leverage"}: {tier.leverage(ko)}</p>
                    <p className={`text-lg font-black ${tier.labelColor}`}>{tier.sweep}</p>
                    <p className="text-[10px] text-gray-400">{ko ? "ECF 스윕" : "ECF swept"}</p>
                  </div>
                  <div className={`w-2 h-10 rounded-full ${tier.color}`} />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 5: 레이팅 에이전시 방법론 ─────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 레이팅 에이전시 방법론 — S&P vs Moody's" : "5. Rating Agency Methodology — S&P vs Moody's"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "발행사는 S&P와 Moody's를 동시에 관리해야 합니다. 두 에이전시는 기준이 다르고, Split Rating은 흔한 일입니다. 레이팅이 다를 때 가격을 어떻게 설정할지가 실무의 핵심 과제입니다."
              : "Issuers must manage both S&P and Moody's simultaneously. The two agencies use different methodologies and split ratings are common. How to price when ratings differ is a core practical challenge."}
          </p>

          {/* Rating Grid */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "레버리지 → 신용등급 매핑 (S&P & Moody's 비교)" : "Leverage → Credit Rating Mapping (S&P & Moody's Comparison)"}
            </div>
            <div className="p-4 space-y-2.5">
              {RATING_GRID.map((row, ri) => (
                <motion.div key={ri} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(ri * 0.06)}
                  className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 w-20 shrink-0">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${row.color}`} />
                    <span className={`text-xs font-black px-1.5 py-0.5 rounded ${row.badge}`}>{row.sp}</span>
                    <span className="text-[10px] text-gray-400">/{row.moodys}</span>
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" style={{ height: "14px" }}>
                    <motion.div
                      className={`h-full rounded-full ${row.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.barPx}%` }}
                      viewport={VP}
                      transition={{ duration: 0.5, delay: ri * 0.07, ease: "easeOut" }}
                      style={{ width: `${row.barPx}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-300 w-14 shrink-0 text-right">{row.leverage}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Differences Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "S&P vs Moody's 방법론 핵심 차이" : "Key Methodological Differences: S&P vs Moody's"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5 w-1/4">{ko ? "항목" : "Topic"}</th>
                    <th className="text-left px-4 py-2.5 text-blue-600 dark:text-blue-400">S&P</th>
                    <th className="text-left px-4 py-2.5 text-red-600 dark:text-red-400">Moody's</th>
                  </tr>
                </thead>
                <tbody>
                  {RATING_DIFFERENCES.map((row, ri) => (
                    <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-xs text-gray-700 dark:text-gray-300">{row.topic(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.sp(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.moodys(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Picking the agency callout */}
          <div className="mt-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-2">
              🎯 {ko ? "실무: 발행사는 두 에이전시를 어떻게 관리하는가" : "In Practice: How Issuers Manage Both Agencies"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "발행사 IR 팀은 두 에이전시에 동일한 데이터를 제공하되, 각자의 방법론에 맞게 '논리를 맞춤화'합니다. Moody's 연금 조정이 불리하면 연금 자산 운용 계획을 강조합니다. S&P의 리스 부채 조정이 문제면 리스 최적화 계획을 제시합니다. Split Rating(예: S&P B+ / Moody's B)은 매우 흔하며, 투자자들은 두 등급의 중간에서 가격을 형성합니다. '레이팅 쇼핑' — 유리한 등급을 주는 에이전시만 고용하는 것 — 은 점점 더 업계의 눈총을 받지만, 소규모 딜에서 여전히 발생합니다."
                : "Issuer IR teams provide both agencies the same data but 'customize the narrative' to each methodology. If Moody's pension adjustment is unfavorable, they emphasize the pension asset management plan. If S&P's lease debt adjustment is problematic, they present a lease optimization plan. Split ratings (e.g., S&P B+ / Moody's B) are very common, and investors price somewhere in the middle. 'Rating shopping' — hiring only the agency giving the favorable rating — is increasingly frowned upon but still occurs in smaller deals."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 6: Atlas Industrial Corp 실전 사례 ─────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 실전 사례 — Atlas Industrial Corp 크레딧 분석" : "6. Worked Example — Atlas Industrial Corp Credit Analysis"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "\"이 딜을 Credit Committee에서 통과시킬 수 있는가?\" Atlas Industrial Corp는 가상이지만 실제 LBO와 동일한 숫자 구조를 갖습니다. EBITDA에서 레이팅까지, 크레딧 분석의 전체 흐름을 따라가봅니다."
              : "\"Can we get this deal through Credit Committee?\" Atlas Industrial Corp is fictional but has the same numerical structure as real LBOs. Follow the complete credit analysis flow from EBITDA to rating."}
          </p>

          {/* Company Overview */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              🏭 {ko ? "Atlas Industrial Corp — 기업 개요" : "Atlas Industrial Corp — Company Overview"}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { k: ko ? "사업" : "Business", v: ko ? "제조업 (Atlas Industrial Corp)" : "Manufacturing (Atlas Industrial Corp)" },
                { k: ko ? "매출" : "Revenue", v: "$3.2bn" },
                { k: ko ? "공시 EBITDA" : "Reported EBITDA", v: "$700mn" },
                { k: ko ? "EBITDA Addbacks" : "EBITDA Addbacks", v: ko ? "+$140mn (관리수수료 $70mn + 런레이트 시너지 $70mn)" : "+$140mn (Mgmt fees $70mn + Run-rate synergies $70mn)" },
                { k: ko ? "조정 EBITDA" : "Adjusted EBITDA", v: "$840mn (Sponsor EBITDA)" },
                { k: ko ? "자본구조" : "Capital Structure", v: ko ? "TLB $4.1bn + HY 채권 $1.1bn = 총 $5.2bn" : "TLB $4.1bn + HY Notes $1.1bn = Total $5.2bn" },
              ].map((item, ii) => (
                <div key={ii}>
                  <span className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500">{item.k}: </span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capital Structure */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "자본구조 상세" : "Capital Structure Detail"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2">{ko ? "상품" : "Instrument"}</th>
                    <th className="text-right px-4 py-2">{ko ? "금액 ($mn)" : "Amount ($mn)"}</th>
                    <th className="text-left px-4 py-2">{ko ? "금리" : "Rate"}</th>
                    <th className="text-right px-4 py-2">{ko ? "연 이자 ($mn)" : "Annual Interest ($mn)"}</th>
                    <th className="text-left px-4 py-2">{ko ? "담보 순위" : "Lien"}</th>
                  </tr>
                </thead>
                <tbody>
                  {ATLAS_CAPITAL_STRUCTURE.map((row, ri) => (
                    <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800 dark:text-gray-200">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${row.color}`} />
                          {row.label}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-right font-mono font-bold text-gray-700 dark:text-gray-300">${row.amount.toLocaleString()}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.rate}</td>
                      <td className="px-4 py-3 text-xs text-right font-mono text-rose-600 dark:text-rose-400">${row.interest}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.lien}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/40">
                    <td className="px-4 py-3 text-xs font-black text-gray-900 dark:text-gray-50">{ko ? "합계" : "Total"}</td>
                    <td className="px-4 py-3 text-xs text-right font-black font-mono text-gray-900 dark:text-gray-50">$5,200</td>
                    <td className="px-4 py-3 text-xs text-gray-400">—</td>
                    <td className="px-4 py-3 text-xs text-right font-black font-mono text-rose-600 dark:text-rose-400">$345</td>
                    <td className="px-4 py-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Credit Tests */}
          <div className="space-y-3 mb-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              {ko ? "크레딧 테스트 결과" : "Credit Test Results"}
            </p>
            {ATLAS_CREDIT_TESTS.map((test, ti) => (
              <motion.div key={ti} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(ti * 0.06)}
                className={`rounded-xl border p-4 ${
                  test.status === "pass" ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10" :
                  test.status === "fail" ? "border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/10" :
                  "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10"
                }`}>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{test.status === "pass" ? "✅" : test.status === "fail" ? "🚨" : "⚠️"}</span>
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{test.test(ko)}</p>
                    </div>
                    <code className="text-xs font-mono text-gray-500 dark:text-gray-400">{test.formula}</code>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-black font-mono" style={{ color: accent }}>{test.result}</p>
                    <p className={`text-[11px] font-semibold ${test.passColor}`}>{test.pass(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ratings */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "예상 신용등급 (S&P / Moody's)" : "Expected Ratings (S&P / Moody's)"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2">{ko ? "상품" : "Instrument"}</th>
                    <th className="text-center px-4 py-2 text-blue-600 dark:text-blue-400">S&P</th>
                    <th className="text-center px-4 py-2 text-red-600 dark:text-red-400">Moody's</th>
                    <th className="text-left px-4 py-2">{ko ? "노트" : "Note"}</th>
                  </tr>
                </thead>
                <tbody>
                  {ATLAS_RATINGS.map((r, ri) => (
                    <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 text-xs font-semibold text-gray-800 dark:text-gray-200">{r.instrument}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-black text-blue-700 dark:text-blue-300">{r.sp}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-black text-red-700 dark:text-red-300">{r.moodys}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">{r.note(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Credit Committee Verdict */}
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-2">
              🏛️ {ko ? "Credit Committee 심의 포인트" : "Credit Committee Key Concerns"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {ko
                ? "Atlas 딜은 통과 가능하지만 '타이트'합니다. 주요 심의 포인트 세 가지:"
                : "Atlas can likely pass Credit Committee but is 'tight.' Three main discussion points:"}
            </p>
            <div className="space-y-2">
              {[
                {
                  icon: "🚨",
                  text: (ko: boolean) => ko
                    ? "FCCR 1.65× — 2.0× HY 발생 테스트 미충족. 추가 M&A나 배당 지급이 제한됨. PE 스폰서 전략 훼손 가능."
                    : "FCCR 1.65× — fails 2.0× HY incurrence test. Additional M&A or dividend recap restricted. May impair PE sponsor strategy.",
                },
                {
                  icon: "⚠️",
                  text: (ko: boolean) => ko
                    ? "EBITDA Addback 20% — 레이팅 에이전시는 런레이트 시너지 $70mn을 50% 헤어컷할 것. Agency EBITDA는 $805mn → 실제 레버리지 6.5×."
                    : "20% EBITDA addback — rating agencies will 50% haircut the $70mn run-rate synergies. Agency EBITDA → $805mn → actual agency leverage 6.5×.",
                },
                {
                  icon: "✅",
                  text: (ko: boolean) => ko
                    ? "긍정 요소: FCF 전환율 30%, ECF Sweep으로 연 $127mn 강제 상환 → 2년 내 레버리지 5.6×로 하락 예상. FCCR 개선 경로 있음."
                    : "Positive: 30% FCF conversion, ECF Sweep forces $127mn/year repayment → leverage projected to fall to ~5.6× within 2 years. FCCR improvement path exists.",
                },
              ].map((point, pi) => (
                <div key={pi} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="shrink-0">{point.icon}</span>
                  <span className="leading-relaxed">{point.text(ko)}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 7: 한국 크레딧 분석의 특수성 ─────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 한국 크레딧 분석의 특수성" : "7. The Unique Features of Korean Credit Analysis"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "한국 PE 시장은 동일한 레버리지 메트릭을 사용하지만, 여신심사 방식, 코버넌트 구조, EBITDA 정의가 글로벌과 다릅니다. 삼성 C&T·롯데파이낸셜은 IG 영역의 국내 HY채권(5–6%)을 발행하지만, 글로벌 HY 시장 규범과는 여전히 거리가 있습니다."
              : "Korean PE uses the same leverage metrics, but credit underwriting approach, covenant structure, and EBITDA definition differ from global practice. Samsung C&T and Lotte Financial issue domestic HY bonds in IG territory (5–6%), but still far from global HY market norms."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {KOREA_CREDIT.map((card, ci) => (
              <motion.div key={ci} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(ci * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{card.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-2">{card.title(ko)}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{card.detail(ko)}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}>{card.badge(ko)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
        </motion.section>

        {/* ── References ───────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">{ko ? "참고 자료" : "References"}</h2>
          <ol className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-600 font-mono shrink-0">[{s.id}]</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.author}. </span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── 딜 아카이브 연계 ── */}
        <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            {ko ? "이 챕터로 이해하는 실제 딜 — 신용지표 현장" : "Real Deals That Illustrate These Credit Metrics"}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/kkr-toys-r-us`,
                initials: "KKR",
                bg: "bg-blue-800",
                title: ko ? "KKR × 토이저러스 (2005→2018)" : "KKR × Toys R Us (2005→2018)",
                sub: ko
                  ? "Debt/EBITDA 6.2× Entry → ICR 1.5× → 소매 LBO 신용지표 경보등 완전 분석"
                  : "6.2× entry leverage → 1.5× ICR → complete retail LBO credit metrics warning analysis",
              },
              {
                href: `${base.replace("market-101", "deals")}/elon-musk-twitter`,
                initials: "MUSK",
                bg: "bg-gray-900",
                title: ko ? "일론 머스크 × 트위터 (2022)" : "Elon Musk × Twitter (2022)",
                sub: ko
                  ? "Debt/EBITDA 21×, 이자보상배율 0.2× — 역대급 크레딧 메트릭 이상치 사례"
                  : "21× Debt/EBITDA, 0.2× ICR — history's most extreme credit metric outlier",
                span2: false,
              },
              {
                href: `${base.replace("market-101", "deals")}/kkr-dollar-general`,
                initials: "DG",
                bg: "bg-emerald-700",
                title: ko ? "KKR × Dollar General (2007→2013)" : "KKR × Dollar General (2007→2013)",
                sub: ko
                  ? "Entry 5.5× → 금융위기로 EBITDA 성장 → 2년 후 4.5× — 레버리지가 자연 감소하는 LBO"
                  : "Entry 5.5× → financial crisis EBITDA growth → 4.5× in 2 years — leverage self-correcting LBO",
                span2: true,
              },
            ].map((d) => (
              <Link key={d.href} href={d.href} className={"span2" in d && d.span2 ? "sm:col-span-2" : ""}>
                <div className="group flex gap-3 p-4 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-sm transition-all">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${d.bg} flex items-center justify-center`}>
                    <span className="text-white text-[8px] font-black">{d.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{d.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">{d.sub}</p>
                  </div>
                  <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "LevFin Ch.2 크레딧 메트릭 — Leverage·Coverage·EBITDA 심층 해부 | Deal Story"
            : "LevFin Ch.2 Credit Metrics — Leverage, Coverage & EBITDA Deep Dive | Deal Story"}
          lang={lang}
        />

        {/* Prev/Next */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
