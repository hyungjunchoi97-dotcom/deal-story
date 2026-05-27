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
  ResponsiveContainer,
  Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Constants ─────────────────────────────────────────────────────────────────
const ACCENT = "#f59e0b";
const THIS_CH = "structured-waterfall";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"    : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"      : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"      : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"     : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"   : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기" : "Ch.5 CDO·Crisis" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"   : "Ch.6 Cases"      },
];

// ── Tranche Data ──────────────────────────────────────────────────────────────
const TRANCHE_DATA = [
  {
    name: "AAA",
    pct: 62,
    spread: "SOFR+130bp",
    spreadLabel: "130",
    lossAbsorb: (ko: boolean) => ko ? "38% 손실까지 원금 보호" : "Protected up to 38% pool loss",
    color: "#10b981",
    textColor: "text-emerald-700 dark:text-emerald-300",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    order: (ko: boolean) => ko ? "7번째 (마지막) 손실 흡수" : "7th (last) to absorb loss",
    maxLoss: "≤ 38%",
    yield: "SOFR+130bp",
    desc: (ko: boolean) => ko
      ? "가장 선순위. 담보 포트폴리오의 62%를 차지하며, 하위 모든 트랑쉐(38%)가 손실을 먼저 흡수해야 AAA 손실이 발생한다. 글로벌 CLO 시장에서 보험사·연기금·머니마켓 펀드의 주요 투자 대상."
      : "Most senior. Occupies 62% of the collateral pool — all subordinate tranches (38%) must absorb losses first before AAA is impaired. Primary investment target for insurers, pension funds, and money market funds in global CLO markets.",
  },
  {
    name: "AA",
    pct: 8,
    spread: "SOFR+175bp",
    spreadLabel: "175",
    lossAbsorb: (ko: boolean) => ko ? "30% 손실까지 원금 보호" : "Protected up to 30% pool loss",
    color: "#34d399",
    textColor: "text-teal-700 dark:text-teal-300",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    order: (ko: boolean) => ko ? "6번째 손실 흡수" : "6th to absorb loss",
    maxLoss: "30–38%",
    yield: "SOFR+175bp",
    desc: (ko: boolean) => ko
      ? "AA 트랑쉐는 에쿼티·B·BB·BBB·A가 전부 소진된 후에야 손실을 흡수한다. 8% 비중이지만 쿠션 30%로 높은 안전성을 자랑한다."
      : "AA tranche absorbs losses only after equity, B, BB, BBB, and A are fully wiped out. Only 8% slice but rests on a 30% cushion.",
  },
  {
    name: "A",
    pct: 5,
    spread: "SOFR+220bp",
    spreadLabel: "220",
    lossAbsorb: (ko: boolean) => ko ? "25% 손실까지 원금 보호" : "Protected up to 25% pool loss",
    color: "#fbbf24",
    textColor: "text-amber-700 dark:text-amber-300",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    order: (ko: boolean) => ko ? "5번째 손실 흡수" : "5th to absorb loss",
    maxLoss: "25–30%",
    yield: "SOFR+220bp",
    desc: (ko: boolean) => ko
      ? "투자등급(IG) 중 가장 하위. 에쿼티·B·BB·BBB가 소진되면 A 트랑쉐가 타격받는다. 5%의 얇은 트랑쉐이지만, 스트레스 시나리오에서도 25% 손실 완충이 있다."
      : "Lowest investment grade. Impaired after equity, B, BB, and BBB are wiped out. Thin 5% slice but backed by a 25% loss cushion even in stress.",
  },
  {
    name: "BBB",
    pct: 5,
    spread: "SOFR+330bp",
    spreadLabel: "330",
    lossAbsorb: (ko: boolean) => ko ? "20% 손실까지 원금 보호" : "Protected up to 20% pool loss",
    color: "#f97316",
    textColor: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    order: (ko: boolean) => ko ? "4번째 손실 흡수" : "4th to absorb loss",
    maxLoss: "20–25%",
    yield: "SOFR+330bp",
    desc: (ko: boolean) => ko
      ? "투자등급과 투기등급의 경계. 에쿼티·B·BB가 소진 후 타격. 스프레드 330bp는 AAA 대비 2.5배 이상 — 손실 위험 프리미엄."
      : "The investment/speculative grade boundary. Takes losses after equity, B, and BB are wiped. Spread of 330bp is 2.5× AAA — reflecting higher loss risk premium.",
  },
  {
    name: "BB",
    pct: 7,
    spread: "SOFR+550bp",
    spreadLabel: "550",
    lossAbsorb: (ko: boolean) => ko ? "13% 손실까지 원금 보호" : "Protected up to 13% pool loss",
    color: "#ef4444",
    textColor: "text-red-700 dark:text-red-300",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    order: (ko: boolean) => ko ? "3번째 손실 흡수 (메자닌)" : "3rd to absorb loss (Mezzanine)",
    maxLoss: "13–20%",
    yield: "SOFR+550bp",
    desc: (ko: boolean) => ko
      ? "투기등급 상위(메자닌). 에쿼티와 B 트랑쉐가 소진 후 타격. 550bp 스프레드는 하이일드 채권 수준. 헤지펀드·크레딧 펀드가 주로 투자."
      : "Upper speculative grade (Mezzanine). Impaired after equity and B are wiped. 550bp spread is at high-yield bond levels. Primarily bought by hedge funds and credit funds.",
  },
  {
    name: "B",
    pct: 3,
    spread: "SOFR+750bp",
    spreadLabel: "750",
    lossAbsorb: (ko: boolean) => ko ? "10% 손실까지 원금 보호" : "Protected up to 10% pool loss",
    color: "#dc2626",
    textColor: "text-rose-700 dark:text-rose-300",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800",
    badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    order: (ko: boolean) => ko ? "2번째 손실 흡수" : "2nd to absorb loss",
    maxLoss: "10–13%",
    yield: "SOFR+750bp",
    desc: (ko: boolean) => ko
      ? "에쿼티 다음으로 손실을 먼저 흡수. 750bp 스프레드. 3% 얇은 슬라이스 — 에쿼티 쿠션 10%가 소진되면 즉시 타격. 디스트레스드 크레딧 투자자의 영역."
      : "Second to absorb losses after equity. 750bp spread. Thin 3% slice — immediately impaired once the 10% equity cushion is gone. Distressed credit investor territory.",
  },
  {
    name: "Equity",
    pct: 10,
    spread: "15–20% IRR",
    spreadLabel: "1500",
    lossAbsorb: (ko: boolean) => ko ? "첫 번째 손실 흡수, 초과 수익도 첫 번째로 수취" : "First to absorb losses, first to receive excess returns",
    color: "#7c3aed",
    textColor: "text-violet-700 dark:text-violet-300",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    borderColor: "border-violet-200 dark:border-violet-800",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    order: (ko: boolean) => ko ? "1번째 (첫 번째) 손실 흡수" : "1st (first) to absorb loss",
    maxLoss: "0–10%",
    yield: "15–20% IRR",
    desc: (ko: boolean) => ko
      ? "가장 위험하지만 가장 높은 수익. 모든 채권 이자 지급 후 잔여 현금흐름을 수취. 손실은 0%부터 시작. CLO 매니저가 통상 에쿼티 트랑쉐의 5–10%를 보유해 인센티브 정렬."
      : "Most risky but highest return. Receives all residual cash flows after paying all senior bond coupons. First to absorb losses starting at 0%. CLO manager typically retains 5–10% of the equity tranche for incentive alignment.",
  },
];

// ── Chart Data: Tranche Allocation ───────────────────────────────────────────
const TRANCHE_CHART_DATA = [
  { name: "AAA", pct: 62, spread: 130, fill: "#10b981" },
  { name: "AA",  pct: 8,  spread: 175, fill: "#34d399" },
  { name: "A",   pct: 5,  spread: 220, fill: "#fbbf24" },
  { name: "BBB", pct: 5,  spread: 330, fill: "#f97316" },
  { name: "BB",  pct: 7,  spread: 550, fill: "#ef4444" },
  { name: "B",   pct: 3,  spread: 750, fill: "#dc2626" },
  { name: "Eq.", pct: 10, spread: 1500, fill: "#7c3aed" },
];

// ── Credit Enhancement ────────────────────────────────────────────────────────
const CREDIT_ENHANCEMENTS = [
  {
    id: 1,
    icon: "🏦",
    name: (ko: boolean) => ko ? "과잉담보 (OC — Overcollateralization)" : "Overcollateralization (OC)",
    badge: (ko: boolean) => ko ? "가장 핵심적 신용 보강" : "Primary Credit Enhancement",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    bgColor: "bg-emerald-50/50 dark:bg-emerald-900/10",
    detail: (ko: boolean) => ko
      ? "담보 자산의 총 시장가치가 발행 채권의 액면가보다 크도록 유지하는 구조. 예: 담보 포트폴리오 $110M → 발행 채권 $100M. 초과분 $10M(10%)이 신용 완충 역할. CLO에서는 이 비율이 OC 테스트의 기준값이 된다."
      : "Maintains the total market value of collateral assets above the face value of issued bonds. Example: collateral portfolio $110M → bonds issued $100M. The excess $10M (10%) serves as credit buffer. In CLOs, this ratio becomes the benchmark for OC tests.",
    mechanics: (ko: boolean) => ko
      ? [
          "OC 비율 = 담보 시장가치 ÷ 발행 채권 잔액",
          "정상 운영: 담보 $110M ÷ 채권 $100M = 110% (10% 버퍼)",
          "스트레스: 담보 가치 하락 → OC 비율 하락 → OC 트리거 발동 가능",
          "OC 트리거 발동 시: 에쿼티 배당 중단, 원금 상환 우선화",
        ]
      : [
          "OC Ratio = Collateral Market Value ÷ Outstanding Bond Balance",
          "Normal operation: Collateral $110M ÷ Bonds $100M = 110% (10% buffer)",
          "Stress: Collateral value declines → OC ratio falls → OC trigger may fire",
          "When OC trigger fires: equity distributions halted, principal repayment prioritized",
        ],
  },
  {
    id: 2,
    icon: "📈",
    name: (ko: boolean) => ko ? "초과스프레드 (XS — Excess Spread)" : "Excess Spread (XS)",
    badge: (ko: boolean) => ko ? "일상적 현금흐름 완충" : "Day-to-Day Cash Flow Buffer",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    borderColor: "border-amber-200 dark:border-amber-800",
    bgColor: "bg-amber-50/50 dark:bg-amber-900/10",
    detail: (ko: boolean) => ko
      ? "담보 대출의 가중평균 금리(WAC)가 발행 채권의 가중평균 쿠폰(WAL 기반)보다 높아서 발생하는 잉여 이자 수입. 예: 담보 대출 SOFR+350bp vs 발행 채권 SOFR+130~600bp(가중평균 ~230bp). 잉여 120bp가 XS로 손실 완충에 사용되거나 에쿼티에 분배된다."
      : "Surplus interest income generated because the weighted average coupon (WAC) of collateral loans exceeds the weighted average coupon paid on issued bonds. Example: collateral at SOFR+350bp vs bonds at SOFR+130–600bp (weighted avg ~230bp). Surplus 120bp serves as XS — buffering losses or distributed to equity.",
    mechanics: (ko: boolean) => ko
      ? [
          "XS = 담보 이자 수입 − 채권 이자 지급 − 수수료",
          "예: 담보 $100M × 6.5% = $6.5M 이자 수입",
          "채권 이자 지급: AAA($62M×3.8%) + … + B($3M×9%) = ~$4.3M",
          "XS = $6.5M − $4.3M − 관리보수 $0.4M = ~$1.8M",
          "이 $1.8M이 매 분기 에쿼티에 흐르거나 손실 완충에 활용된다",
        ]
      : [
          "XS = Collateral Interest Income − Bond Coupon Payments − Fees",
          "Example: Collateral $100M × 6.5% = $6.5M interest income",
          "Bond payments: AAA($62M×3.8%) + … + B($3M×9%) = ~$4.3M",
          "XS = $6.5M − $4.3M − Mgmt fee $0.4M = ~$1.8M",
          "This $1.8M flows each quarter to equity or buffers losses",
        ],
  },
  {
    id: 3,
    icon: "🏧",
    name: (ko: boolean) => ko ? "준비적립금 (Reserve Fund)" : "Reserve Fund",
    badge: (ko: boolean) => ko ? "유동성 쿠션" : "Liquidity Cushion",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-800",
    bgColor: "bg-blue-50/50 dark:bg-blue-900/10",
    detail: (ko: boolean) => ko
      ? "구조화 거래 설정 시 초기 현금으로 조성하는 적립금. 통상 발행 채권 잔액의 0.5–1.5%. 담보 자산의 일시적 원금 미회수·이자 지연 시 선순위 채권자에게 지급할 현금 보충 역할. XS가 충분히 적립되면 Reserve Fund를 줄이는 경우도 있음."
      : "A cash reserve established at transaction closing, typically 0.5–1.5% of outstanding bonds. Acts as cash replenishment when collateral assets temporarily fail to pay principal or delay interest. May be reduced if XS has built up sufficiently.",
    mechanics: (ko: boolean) => ko
      ? [
          "거래 설정 시 현금 $0.5~1.5M ($100M 거래 기준) 예치",
          "사용 조건: 담보 연체 / XS 부족 / 이자 지급일 현금 부족",
          "사용 후 재적립 의무 — XS에서 우선 보충",
          "만기 시 잔여금 → 에쿼티 트랑쉐에 귀속",
        ]
      : [
          "Cash deposited at closing: $0.5–1.5M (on a $100M transaction)",
          "Draw conditions: collateral delinquency / XS shortfall / payment date cash deficit",
          "Must be replenished after draw — first priority from XS",
          "Residual at maturity → accrues to equity tranche",
        ],
  },
  {
    id: 4,
    icon: "🔐",
    name: (ko: boolean) => ko ? "후순위화 (Subordination)" : "Subordination",
    badge: (ko: boolean) => ko ? "트랑쉐 구조의 본질" : "The Essence of Tranching",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    borderColor: "border-violet-200 dark:border-violet-800",
    bgColor: "bg-violet-50/50 dark:bg-violet-900/10",
    detail: (ko: boolean) => ko
      ? "하위 트랑쉐가 상위 트랑쉐보다 먼저 손실을 흡수하도록 우선순위를 정하는 구조. AAA 투자자는 에쿼티(10%)+B(3%)+BB(7%)+BBB(5%)+A(5%)+AA(8%) = 38%가 전부 소진되어야 원금 손실이 발생한다. 이 38%가 AAA에 대한 '신용 지원(Credit Support)' 또는 '서브오디네이션'이다."
      : "The structural subordination ensuring lower tranches absorb losses before upper tranches. AAA investors require equity(10%)+B(3%)+BB(7%)+BBB(5%)+A(5%)+AA(8%) = 38% to be fully wiped before any AAA principal loss. This 38% is the 'credit support' or 'subordination' for AAA.",
    mechanics: (ko: boolean) => ko
      ? [
          "AAA 크레딧 서포트(subordination) = 62% 이하 모든 트랑쉐 합계 = 38%",
          "AA 크레딧 서포트 = 에쿼티+B+BB+BBB+A = 30%",
          "A 크레딧 서포트 = 에쿼티+B+BB+BBB = 25%",
          "에쿼티 크레딧 서포트 = 0% (첫 번째 손실 흡수자)",
          "후순위화 % ↑ → 상위 트랑쉐 신용도 ↑, 스프레드 ↓",
        ]
      : [
          "AAA credit support (subordination) = all tranches below 62% = 38%",
          "AA credit support = equity+B+BB+BBB+A = 30%",
          "A credit support = equity+B+BB+BBB = 25%",
          "Equity credit support = 0% (first-loss absorber)",
          "Subordination % ↑ → senior tranche credit quality ↑, spread ↓",
        ],
  },
];

// ── OC & IC Trigger ───────────────────────────────────────────────────────────
const OC_TRIGGER_SCENARIOS = [
  {
    scenario: (ko: boolean) => ko ? "정상 (Normal)" : "Normal",
    collateral: 103.5,
    bonds: 100,
    ocRatio: 103.5,
    trigger: 102.5,
    pass: true,
    color: "#10b981",
    fill: "#10b981",
    note: (ko: boolean) => ko
      ? "담보 $103.5M / 채권 $100M = 103.5% > 트리거 102.5%. OC 테스트 통과. 에쿼티 배당 정상 지급."
      : "Collateral $103.5M / Bonds $100M = 103.5% > trigger 102.5%. OC test passes. Equity distributions paid normally.",
  },
  {
    scenario: (ko: boolean) => ko ? "스트레스 (Stress)" : "Stress",
    collateral: 101.8,
    bonds: 100,
    ocRatio: 101.8,
    trigger: 102.5,
    pass: false,
    color: "#f97316",
    fill: "#f97316",
    note: (ko: boolean) => ko
      ? "담보 $101.8M / 채권 $100M = 101.8% < 트리거 102.5%. OC 트리거 발동! 에쿼티 배당 중단, 잉여 현금흐름 → 선순위 원금 조기 상환."
      : "Collateral $101.8M / Bonds $100M = 101.8% < trigger 102.5%. OC trigger fires! Equity distributions halted, excess cash flow → senior principal prepayment.",
  },
  {
    scenario: (ko: boolean) => ko ? "위기 (Crisis)" : "Crisis",
    collateral: 98.0,
    bonds: 100,
    ocRatio: 98.0,
    trigger: 102.5,
    pass: false,
    color: "#dc2626",
    fill: "#dc2626",
    note: (ko: boolean) => ko
      ? "담보 $98.0M < 채권 $100M. OC 비율 98% — 채권 가치도 100% 이하로 하락. 에쿼티 전액 손실. B 트랑쉐도 손실 시작. 이벤트 오브 디폴트(EOD) 검토 단계."
      : "Collateral $98.0M < Bonds $100M. OC ratio 98% — bond value also below 100%. Equity fully wiped. B tranche starts taking losses. Event of Default (EOD) review stage.",
  },
];

// ── IC Trigger ────────────────────────────────────────────────────────────────
const IC_TRIGGER_DATA = {
  normal: {
    label: (ko: boolean) => ko ? "정상" : "Normal",
    interestIncome: 6.5,
    interestExpense: 4.3,
    icRatio: 151.2,
    trigger: 120,
    pass: true,
    color: "#10b981",
  },
  stress: {
    label: (ko: boolean) => ko ? "스트레스" : "Stress",
    interestIncome: 5.2,
    interestExpense: 4.3,
    icRatio: 120.9,
    trigger: 120,
    pass: true,
    color: "#f97316",
    note: (ko: boolean) => ko ? "아슬아슬 통과 — 버퍼 0.9%p" : "Barely passes — 0.9%p buffer",
  },
  crisis: {
    label: (ko: boolean) => ko ? "위기" : "Crisis",
    interestIncome: 4.8,
    interestExpense: 4.3,
    icRatio: 111.6,
    trigger: 120,
    pass: false,
    color: "#dc2626",
    note: (ko: boolean) => ko ? "IC 트리거 발동 — 에쿼티 배당 중단" : "IC trigger fires — equity distributions halted",
  },
};

// ── Waterfall Simulation ──────────────────────────────────────────────────────
const WATERFALL_SCENARIOS = [
  {
    id: "normal",
    label: (ko: boolean) => ko ? "정상 시나리오" : "Normal Scenario",
    icon: "✅",
    subLabel: (ko: boolean) => ko ? "담보 손실률 3%" : "3% pool loss rate",
    color: "border-emerald-200 dark:border-emerald-800",
    bg: "bg-emerald-50 dark:bg-emerald-900/10",
    headerBg: "bg-emerald-100 dark:bg-emerald-900/30",
    lossPool: 3,
    desc: (ko: boolean) => ko
      ? "$100M CLO, 담보 대출 3% 디폴트, 회수율 40%. 실제 손실 = $100M × 3% × (1-40%) = $1.8M. 에쿼티($10M)가 모두 흡수 — 채권 트랑쉐 전원 원금 보전."
      : "$100M CLO, 3% default rate, 40% recovery. Actual loss = $100M × 3% × (1−40%) = $1.8M. Equity ($10M) absorbs all — all bond tranches fully protected.",
    results: [
      { tranche: "AAA ($62M)", loss: 0, recovery: "100%", irr: "SOFR+130bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "AA ($8M)",   loss: 0, recovery: "100%", irr: "SOFR+175bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "A ($5M)",    loss: 0, recovery: "100%", irr: "SOFR+220bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "BBB ($5M)",  loss: 0, recovery: "100%", irr: "SOFR+330bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "BB ($7M)",   loss: 0, recovery: "100%", irr: "SOFR+550bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "B ($3M)",    loss: 0, recovery: "100%", irr: "SOFR+750bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "Equity ($10M)", loss: 1.8, recovery: "82%", irr: "~15% IRR", status: (ko: boolean) => ko ? "$1.8M 손실" : "$1.8M loss", color: "text-amber-600 dark:text-amber-400" },
    ],
  },
  {
    id: "stress",
    label: (ko: boolean) => ko ? "스트레스 시나리오" : "Stress Scenario",
    icon: "⚠️",
    subLabel: (ko: boolean) => ko ? "담보 손실률 18%" : "18% pool loss rate",
    color: "border-amber-200 dark:border-amber-800",
    bg: "bg-amber-50 dark:bg-amber-900/10",
    headerBg: "bg-amber-100 dark:bg-amber-900/30",
    lossPool: 18,
    desc: (ko: boolean) => ko
      ? "$100M CLO, 담보 대출 30% 디폴트, 회수율 40%. 실제 손실 = $100M × 30% × 60% = $18M. 에쿼티($10M) + B($3M) + BB($5M/7M 부분 = $5M) 합계 $18M. BBB 이상 완전 보전."
      : "$100M CLO, 30% default rate, 40% recovery. Actual loss = $100M × 30% × 60% = $18M. Equity ($10M) + B ($3M) + BB (partial $5M of $7M) = $18M absorbed. BBB and above fully protected.",
    results: [
      { tranche: "AAA ($62M)", loss: 0,   recovery: "100%", irr: "SOFR+130bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "AA ($8M)",   loss: 0,   recovery: "100%", irr: "SOFR+175bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "A ($5M)",    loss: 0,   recovery: "100%", irr: "SOFR+220bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "BBB ($5M)",  loss: 0,   recovery: "100%", irr: "SOFR+330bp", status: (ko: boolean) => ko ? "완전 보호" : "Fully Protected", color: "text-emerald-600 dark:text-emerald-400" },
      { tranche: "BB ($7M)",   loss: 5,   recovery: "29%",  irr: "~−45% IRR", status: (ko: boolean) => ko ? "$5M 원금 손실" : "$5M principal loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "B ($3M)",    loss: 3,   recovery: "0%",   irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "Equity ($10M)", loss: 10, recovery: "0%",  irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
    ],
  },
  {
    id: "severe",
    label: (ko: boolean) => ko ? "심각한 시나리오" : "Severe Scenario",
    icon: "🚨",
    subLabel: (ko: boolean) => ko ? "담보 손실률 40% (AAA 손실 시작)" : "40% pool loss — AAA starts taking losses",
    color: "border-rose-200 dark:border-rose-800",
    bg: "bg-rose-50 dark:bg-rose-900/10",
    headerBg: "bg-rose-100 dark:bg-rose-900/30",
    lossPool: 40,
    desc: (ko: boolean) => ko
      ? "담보 대출 67% 디폴트, 회수율 40%. 실제 손실 = $100M × 67% × 60% = $40M. 에쿼티($10M)+B($3M)+BB($7M)+BBB($5M)+A($5M)+AA($8M)=38M 소진. 나머지 $2M이 AAA($62M)에서 손실 → AAA 회수율 96.8%. 2008 위기 급에서만 발생하는 극단 시나리오."
      : "67% default rate, 40% recovery. Actual loss = $100M × 67% × 60% = $40M. Equity($10M)+B($3M)+BB($7M)+BBB($5M)+A($5M)+AA($8M) = $38M wiped. Remaining $2M hits AAA ($62M) → AAA recovery 96.8%. Extreme scenario — only materializes in 2008-crisis-level events.",
    results: [
      { tranche: "AAA ($62M)", loss: 2,   recovery: "96.8%", irr: "~SOFR−30bp", status: (ko: boolean) => ko ? "$2M 원금 손실" : "$2M principal loss", color: "text-amber-600 dark:text-amber-400" },
      { tranche: "AA ($8M)",   loss: 8,   recovery: "0%",    irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "A ($5M)",    loss: 5,   recovery: "0%",    irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "BBB ($5M)",  loss: 5,   recovery: "0%",    irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "BB ($7M)",   loss: 7,   recovery: "0%",    irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "B ($3M)",    loss: 3,   recovery: "0%",    irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
      { tranche: "Equity ($10M)", loss: 10, recovery: "0%",  irr: "−100% IRR", status: (ko: boolean) => ko ? "전액 손실" : "Total loss", color: "text-rose-600 dark:text-rose-400" },
    ],
  },
];

// ── Loss Scenario Chart Data ──────────────────────────────────────────────────
const LOSS_SCENARIO_DATA = [
  { tranche: "Equity", normal: 18, stress: 100, severe: 100 },
  { tranche: "B",      normal: 0,  stress: 100, severe: 100 },
  { tranche: "BB",     normal: 0,  stress: 71,  severe: 100 },
  { tranche: "BBB",    normal: 0,  stress: 0,   severe: 100 },
  { tranche: "A",      normal: 0,  stress: 0,   severe: 100 },
  { tranche: "AA",     normal: 0,  stress: 0,   severe: 100 },
  { tranche: "AAA",    normal: 0,  stress: 0,   severe: 3.2 },
];

// ── Equity Tranche Leverage ───────────────────────────────────────────────────
const EQUITY_LEVERAGE_STEPS = [
  {
    step: 1,
    icon: "💰",
    title: (ko: boolean) => ko ? "에쿼티 투자자 자본 $10M (10%)" : "Equity Investor Capital: $10M (10%)",
    detail: (ko: boolean) => ko
      ? "CLO 전체 $100M 중 에쿼티 투자자가 $10M(10%)을 투자. 나머지 $90M은 AAA~B 채권 투자자가 외부 자금 조달."
      : "Equity investor contributes $10M (10%) out of the total $100M CLO. The remaining $90M is externally funded by AAA–B bond investors.",
  },
  {
    step: 2,
    icon: "🔄",
    title: (ko: boolean) => ko ? "$100M 레버리지드 포트폴리오 운용" : "Operate $100M Leveraged Portfolio",
    detail: (ko: boolean) => ko
      ? "CLO 매니저는 $10M 에쿼티 자본으로 $100M의 레버리지드 론 포트폴리오를 운용 → 10배 레버리지. 담보 포트폴리오 평균 수익률 SOFR+350bp(약 6.5~7%)."
      : "CLO manager operates a $100M leveraged loan portfolio with $10M equity capital → 10× leverage. Collateral portfolio earns SOFR+350bp (approx. 6.5–7%).",
  },
  {
    step: 3,
    icon: "📊",
    title: (ko: boolean) => ko ? "이자 수입 분배: 선순위부터 차례로" : "Distribute Interest: Senior First",
    detail: (ko: boolean) => ko
      ? "연 이자 수입 $6.5M 중 채권 이자 지급액 ~$4.3M + 관리보수 $0.4M = $4.7M 먼저 지급. 잔여 $1.8M(초과스프레드)이 에쿼티에 귀속 → 에쿼티 수익 $1.8M / $10M = 18% 수익률."
      : "From $6.5M annual interest income: pay bond coupons ~$4.3M + management fee $0.4M = $4.7M first. Residual $1.8M (excess spread) accrues to equity → equity yield $1.8M / $10M = 18%.",
  },
  {
    step: 4,
    icon: "🚀",
    title: (ko: boolean) => ko ? "레버리지드 IRR: 12–20% 달성 원리" : "How Leveraged IRR of 12–20% Is Achieved",
    detail: (ko: boolean) => ko
      ? "담보 포트폴리오 총 수익률이 6.5%임에도 에쿼티 IRR이 12~20%인 이유: ① 레버리지 효과($10M으로 $100M 운용), ② 초과스프레드가 모두 에쿼티에 귀속, ③ 포트폴리오 손실률이 낮으면 에쿼티 원금도 보전. 반면 손실 발생 시 에쿼티가 첫 번째 충격을 받는다."
      : "Why equity IRR reaches 12–20% even though portfolio yield is 6.5%: ① leverage effect ($10M manages $100M), ② all excess spread accrues to equity, ③ equity principal preserved if pool loss rate is low. However, equity takes the first hit when losses occur.",
  },
  {
    step: 5,
    icon: "⚖️",
    title: (ko: boolean) => ko ? "CLO 매니저 인센티브 정렬" : "CLO Manager Incentive Alignment",
    detail: (ko: boolean) => ko
      ? "CLO 매니저는 에쿼티 트랑쉐의 5–10%(통상 $0.5–1M)를 자신의 자본으로 보유. '스킨 인 더 게임(skin in the game)' — 매니저가 잘못 운용하면 자신도 손실. EU 리스크 리텐션 규정(5% 보유 의무)으로 법제화."
      : "CLO manager retains 5–10% of the equity tranche (typically $0.5–1M) from its own capital. 'Skin in the game' — manager loses too if they mismanage. EU risk retention rules (5% retention requirement) codify this in law.",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "OC 트리거와 IC 트리거가 발동되면 실제로 무슨 일이 일어나나요?",
    a: "OC(Overcollateralization) 트리거 발동 시: ① 에쿼티 트랑쉐에 대한 현금 배당이 즉시 중단됩니다. ② 초과 현금흐름(XS)이 에쿼티 대신 선순위 채권의 원금 조기 상환에 자동으로 전환됩니다. 이로써 채권 잔액이 줄어들고 OC 비율이 회복됩니다. IC(Interest Coverage) 트리거 발동 시도 동일한 처분이 적용됩니다. 두 트리거 모두 구조의 '자동 수리 장치'입니다 — 문제가 생기면 에쿼티에 가는 돈을 채권 상환으로 돌려 구조를 안정화합니다. 실무에서 트리거 발동은 '이미 나쁜 신호'이지만, 이 메커니즘이 작동하기에 상위 트랑쉐가 보호받습니다. 트리거가 발동된 CLO는 2차 시장에서 할인 거래되는 경향이 있으며, 디스트레스드 투자자의 관심 대상이 됩니다.",
  },
  {
    q: "AAA 등급 CLO 트랑쉐도 손실을 입은 역사적 사례가 있나요?",
    a: "2008년 금융위기에서 일부 CDO(CLO가 아닌 CDO) AAA 트랑쉐가 손실을 입었습니다. 그러나 CLO(레버리지드 론 담보) AAA 트랑쉐는 2008년에도 원금 손실이 거의 없었습니다 — 레버리지드 론의 평균 회수율이 60–70%로 높았기 때문입니다. 반면 주택모기지 담보의 CDO AAA는 서브프라임 모기지 디폴트율이 40–50%에 달하면서 손실을 입었습니다. CLO 역사상 AAA 손실은 2020년 COVID 위기에서도 발생하지 않았습니다 — 이것이 CLO AAA가 '구조화 금융에서 가장 검증된 신용 보강 구조 중 하나'로 평가받는 이유입니다. 단, 합성 CLO나 극단적으로 레버리지가 높은 구조는 다른 리스크를 가집니다.",
  },
  {
    q: "에쿼티 트랑쉐 투자자는 어떤 기관인가요? 일반 투자자도 투자할 수 있나요?",
    a: "CLO 에쿼티 트랑쉐는 고위험·고수익 특성상 전문 기관 투자자 중심입니다. 주요 투자자: ① CLO 매니저 자신 (리스크 리텐션 의무로 5–10% 보유), ② 헤지펀드 (구조화 크레딧 전략), ③ CLO 매니저 전문 투자 펀드 (Credit Opportunities Fund), ④ 일부 패밀리 오피스 및 소버린 웰스 펀드. 일반 개인 투자자는 직접 CLO 에쿼티에 투자하기 어렵습니다 — 최소 투자금액이 보통 $1–5M이며, 복잡한 법률·세무 구조, 분기별 현금흐름 분석 능력이 필요합니다. 다만 CLO 에쿼티에 투자하는 상장 폐쇄형 펀드(BDC, CEF)를 통해 간접 접근은 가능합니다.",
  },
  {
    q: "초과스프레드(XS)가 없어지면 어떻게 되나요? 금리 역전 시나리오에서는?",
    a: "초과스프레드(XS)가 소멸하는 가장 큰 원인은 두 가지입니다. ① 담보 대출 디폴트: 디폴트된 대출은 이자를 내지 않으므로 포트폴리오 이자 수입 감소 → XS 축소. ② 금리 역전 또는 스프레드 압축: SOFR이 급격히 하락하고 채권 쿠폰이 고정금리라면 XS가 감소할 수 있습니다. 그러나 대부분의 CLO 채권은 변동금리(SOFR 연동)이므로 금리 변동의 영향을 양쪽에서 받아 XS 자체는 상대적으로 안정적입니다. XS가 0에 가까워지면 IC 트리거 압박 증가, Reserve Fund 소진 위험이 생깁니다. XS가 완전히 소멸하고 준비금도 소진되면 선순위 이자 지급에 직접적 위협이 생기며 이는 Event of Default(EOD) 조건이 될 수 있습니다.",
  },
  {
    q: "CLO 워터폴 구조가 2008년 서브프라임 위기의 CDO 구조와 어떻게 다른가요?",
    a: "핵심 차이는 담보 자산의 성격입니다. CLO 담보: 광범위하게 분산된 레버리지드 기업 대출(100~250개 기업, 산업별·지역별 분산). 2008 CDO 담보: 모기지 기반 ABS의 하위 트랑쉐(BBB 모기지 슬라이스)를 재집합 — 지역 편중(미국 주택시장 단일 노출), 담보 간 높은 상관관계. 두 번째 차이: 레버리지. CDO-제곱(CDO²)은 CDO 트랑쉐를 다시 트랑쉐화 → 복잡성 폭발. CLO는 통상 단층(single-layer) 구조. 세 번째 차이: 레이팅 방법론. 2008 전 CDO의 AAA 레이팅은 담보 자산 간 상관관계를 심각히 과소평가(가우시안 코풀라 모델의 한계). 레버리지드 론은 모기지보다 상관관계가 낮고, 2008–2009년 실제 CLO AAA 성과가 이를 증명했습니다.",
  },
];

const FAQ_EN = [
  {
    q: "What actually happens when an OC trigger or IC trigger fires?",
    a: "When the OC (Overcollateralization) trigger fires: ① Cash distributions to the equity tranche are immediately halted. ② Excess cash flow (XS) is automatically redirected from equity distributions to accelerated repayment of senior bond principal. This reduces the bond balance and restores the OC ratio. The same treatment applies when the IC (Interest Coverage) trigger fires. Both triggers function as the structure's 'automatic repair mechanism' — when something goes wrong, money that would have gone to equity is diverted to bond repayment, stabilizing the structure. In practice, a trigger firing is already a bad signal, but because these mechanisms work, upper tranches remain protected. CLOs with fired triggers tend to trade at a discount in secondary markets and attract distressed investor attention.",
  },
  {
    q: "Have AAA-rated CLO tranches ever suffered actual losses historically?",
    a: "In the 2008 financial crisis, some CDO (not CLO) AAA tranches did take losses. However, CLO (leveraged loan-collateralized) AAA tranches had virtually no principal losses even in 2008 — because leveraged loan average recovery rates were high at 60–70%. In contrast, CDO AAAs backed by residential mortgages took losses as subprime mortgage default rates hit 40–50%. CLO history shows no AAA principal losses even during the 2020 COVID crisis — which is why CLO AAA is considered one of the most battle-tested credit enhancement structures in structured finance. Synthetic CLOs or extremely high-leverage structures carry different risks.",
  },
  {
    q: "Who invests in CLO equity tranches? Can retail investors access them?",
    a: "CLO equity tranches, given their high-risk/high-return profile, are primarily held by specialist institutional investors: ① CLO managers themselves (5–10% retention under risk retention rules), ② Hedge funds (structured credit strategies), ③ CLO manager-focused investment funds (Credit Opportunities Funds), ④ Some family offices and sovereign wealth funds. Direct CLO equity investment is inaccessible for most retail investors — minimum ticket sizes are typically $1–5M, requiring complex legal/tax structure expertise and quarterly cash flow analysis capability. Indirect access is possible through listed closed-end funds (BDCs, CEFs) that invest in CLO equity.",
  },
  {
    q: "What happens when excess spread (XS) disappears? What about rate inversion?",
    a: "The two main causes of XS erosion are: ① Collateral loan defaults — defaulted loans pay no interest, reducing portfolio interest income and compressing XS. ② Rate inversion or spread compression — if SOFR drops sharply and bond coupons are fixed rate, XS can shrink. However, most CLO bonds are floating rate (SOFR-linked), so rate movements affect both sides and XS remains relatively stable. As XS approaches zero, IC trigger pressure increases and Reserve Fund depletion risk rises. If XS fully disappears and reserves are exhausted, direct threats to senior coupon payments emerge — potentially meeting Event of Default (EOD) conditions.",
  },
  {
    q: "How does the CLO waterfall structure differ from the 2008 CDO structure that caused the crisis?",
    a: "The key difference is the nature of collateral. CLO collateral: broadly diversified leveraged corporate loans (100–250 companies, diversified across sectors and geographies). 2008 CDO collateral: subordinate tranches of mortgage-backed ABS (BBB mortgage slices) re-pooled — concentrated in one geography (US housing market), high inter-collateral correlation. Second difference: leverage. CDO-squared (CDO²) re-tranched CDO tranches, creating explosive complexity. CLOs are typically single-layer structures. Third difference: rating methodology. Pre-2008 CDO AAA ratings severely underestimated collateral correlation (Gaussian copula model limitations). Leveraged loans have lower correlation than mortgages, and actual CLO AAA performance in 2008–2009 proved this out.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "SIFMA / Wells Fargo Securities", title: "CLO Primer: Mechanics, Structure and Credit Enhancement", url: "https://www.sifma.org/resources/research/us-structured-finance-statistics/", source: "SIFMA, 2023" },
  { id: 2, author: "Moody's Investors Service", title: "CLO Ratings Methodology — Overcollateralization and Interest Coverage Tests", url: "https://www.moodys.com/researchandratings/market-segment/structured-finance", source: "Moody's, 2023" },
  { id: 3, author: "S&P Global Ratings", title: "Global CLO Handbook: Tranche Structure and Trigger Mechanics", url: "https://www.spglobal.com/ratings/en/research/articles/structured-finance", source: "S&P Global, 2024" },
  { id: 4, author: "Fitch Ratings", title: "CLO and Leveraged Loan Insight: Equity Tranche Return Analysis", url: "https://www.fitchratings.com/research/structured-finance/clos", source: "Fitch, 2024" },
  { id: 5, author: "Bank of America Securities", title: "Leveraged Finance Outlook: CLO Equity Returns in Rising Rate Environment", url: "https://www.bofasecurities.com/", source: "BofA, 2024" },
  { id: 6, author: "Coval, Jurek & Stafford", title: "The Economics of Structured Finance (Journal of Economic Perspectives)", url: "https://pubs.aeaweb.org/doi/10.1257/jep.23.1.3", source: "JEP, 2009" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredWaterfallClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const thisIdx = STRUCTURED_SERIES.findIndex((s) => s.slug === THIS_CH);
  const prev = STRUCTURED_SERIES[thisIdx - 1] ?? null;
  const next = STRUCTURED_SERIES[thisIdx + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── ShareButtons top ────────────────────────────────────────────── */}
        <ShareButtons
          title={ko ? concept.title : (concept.titleEn ?? concept.title)}
          variant="top"
          lang={lang}
        />

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8 mt-6">
          {STRUCTURED_SERIES.map((s) => (
            <Link
              key={s.slug}
              href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.slug === THIS_CH
                  ? "text-white border-amber-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:text-amber-600"
              }`}
              style={s.slug === THIS_CH ? { background: ACCENT } : {}}
            >
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
              Structured · Ch.4
            </span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "트랑쉐 & 워터폴 — 구조화금융 신용 리스크 배분의 원리"
              : "Tranche & Waterfall — The Mechanics of Credit Risk Distribution in Structured Finance"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "워터폴은 현금이 선순위에서 후순위 순서로 흐르는 규칙입니다. OC·XS·준비금·후순위화 4가지 신용 보강이 이 구조를 지탱합니다. $100M CLO 시뮬레이션으로 정상·스트레스·위기 시나리오를 단계별로 추적합니다."
              : "The waterfall governs how cash flows from senior to subordinate tranches. Four credit enhancements — OC, XS, Reserve Fund, and Subordination — support this structure. Track a $100M CLO through normal, stress, and crisis scenarios step by step."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 30초 요약 ───────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "1. 30초 요약 — 워터폴이란 무엇인가" : "1. 30-Second Summary — What Is a Waterfall?"}
          </h2>
          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🌊</span>
              <div>
                <p className="font-black text-sm text-amber-800 dark:text-amber-300 mb-2">
                  {ko ? "워터폴의 3가지 핵심 원칙" : "Three Core Principles of the Waterfall"}
                </p>
                <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <span className="font-black text-amber-600 dark:text-amber-400 shrink-0">①</span>
                    <span>{ko
                      ? "현금흐름 배분 순서: 이자·원금은 선순위(AAA)부터 후순위(에쿼티) 순서로 지급된다. 선순위가 100% 지급받기 전에는 후순위에 1원도 갈 수 없다."
                      : "Cash flow priority: interest and principal are paid from senior (AAA) to subordinate (equity) in order. Not one cent goes to subordinate tranches until senior tranches are paid in full."
                    }</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-black text-amber-600 dark:text-amber-400 shrink-0">②</span>
                    <span>{ko
                      ? "손실 흡수 순서: 담보 포트폴리오 손실은 후순위(에쿼티)부터 역순으로 흡수된다. 에쿼티가 전액 소진되면 B, BB, BBB, A, AA, AAA 순서로 타격받는다."
                      : "Loss absorption order: collateral pool losses are absorbed from subordinate (equity) first, in reverse order. When equity is fully wiped, losses move to B, BB, BBB, A, AA, then AAA."
                    }</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-black text-amber-600 dark:text-amber-400 shrink-0">③</span>
                    <span>{ko
                      ? "초과 수익: 모든 채권 쿠폰 지급 후 남은 잉여 현금흐름(초과스프레드)은 에쿼티에 귀속된다. 에쿼티는 '첫 번째 손실'이자 '첫 번째 이익'의 주체다."
                      : "Excess returns: all residual cash flow after paying all bond coupons (excess spread) accrues to equity. Equity is both the 'first loss' and 'first profit' taker."
                    }</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Simple waterfall diagram */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "워터폴 다이어그램 — 현금흐름 & 손실 방향" : "Waterfall Diagram — Cash Flow & Loss Direction"}
            </p>
            <div className="flex flex-col gap-1">
              {[
                { label: ko ? "담보 포트폴리오 (이자 + 원금 회수)" : "Collateral Portfolio (Interest + Principal Collections)", bg: "bg-gray-200 dark:bg-gray-700", text: "text-gray-700 dark:text-gray-300", width: "100%" },
                { label: ko ? "↓ 비용·수수료 지급 (CLO 매니저 보수, 관리 비용)" : "↓ Fees & Expenses (Manager fee, Admin costs)", bg: "bg-gray-100 dark:bg-gray-800", text: "text-gray-500 dark:text-gray-400", width: "90%", small: true },
                { label: ko ? "AAA 이자 지급 (SOFR+130bp)" : "AAA Coupon Payment (SOFR+130bp)", bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-800 dark:text-emerald-300", width: "85%" },
                { label: ko ? "AA 이자 지급 (SOFR+175bp)" : "AA Coupon Payment (SOFR+175bp)", bg: "bg-teal-100 dark:bg-teal-900/40", text: "text-teal-800 dark:text-teal-300", width: "75%" },
                { label: ko ? "A·BBB·BB·B 이자 지급 (차례로)" : "A / BBB / BB / B Coupons (in order)", bg: "bg-amber-100 dark:bg-amber-900/40", text: "text-amber-800 dark:text-amber-300", width: "65%" },
                { label: ko ? "OC 테스트 / IC 테스트 통과 여부 확인" : "OC Test / IC Test Check", bg: "bg-orange-100 dark:bg-orange-900/40", text: "text-orange-800 dark:text-orange-300", width: "55%", small: true },
                { label: ko ? "원금 순차 상환 (만기 또는 콜 발동 시)" : "Principal Sequential Repayment (at maturity or call)", bg: "bg-red-100 dark:bg-red-900/40", text: "text-red-800 dark:text-red-300", width: "50%" },
                { label: ko ? "→ 에쿼티: 초과스프레드 + 잔여 원금" : "→ Equity: Excess Spread + Residual Principal", bg: "bg-violet-100 dark:bg-violet-900/40", text: "text-violet-800 dark:text-violet-300", width: "40%" },
              ].map((row, i) => (
                <div key={i} style={{ width: row.width }} className="min-w-0">
                  <div className={`rounded px-3 py-1.5 ${row.bg}`}>
                    <p className={`${row.small ? "text-[10px]" : "text-xs"} font-semibold leading-tight ${row.text}`}>{row.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3 text-center">
              {ko
                ? "왼쪽→오른쪽: 폭이 좁아질수록 '남은 현금'이 줄어들고 에쿼티에 도달. 손실은 아래(에쿼티)에서 위(AAA)로 역방향으로 올라온다."
                : "Left→Right: narrowing width = less remaining cash reaching equity. Losses flow upward in reverse — from equity (bottom) to AAA (top)."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 2: 트랑쉐 구조 해부 ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 트랑쉐 구조 해부 — $100M CLO 기준" : "2. Tranche Structure Anatomy — $100M CLO Reference"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "AAA 62%부터 에쿼티 10%까지 7개 트랑쉐의 비중, 목표 스프레드, 손실 흡수 순서, 각 트랑쉐가 허용하는 최대 손실을 단계별로 분해합니다."
              : "Break down all 7 tranches — from AAA 62% to Equity 10% — by weight, target spread, loss absorption order, and maximum tolerable pool loss."}
          </p>

          {/* Bar Chart: Tranche size vs spread */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
              {ko ? "트랑쉐 비중(%) & 스프레드(bp)" : "Tranche Weight (%) & Spread (bp)"}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
              {ko ? "왼쪽 축: 비중(%) / 오른쪽 막대 위: 스프레드(bp)" : "Left axis: Weight (%) / Above bar: Spread (bp)"}
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={TRANCHE_CHART_DATA} barCategoryGap="25%">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                  domain={[0, 70]}
                />
                <Tooltip
                  formatter={(value: number, name: string) => [
                    name === "pct" ? `${value}%` : `${value}bp`,
                    name === "pct"
                      ? (ko ? "비중" : "Weight")
                      : (ko ? "스프레드" : "Spread"),
                  ]}
                  contentStyle={{ fontSize: 12, borderRadius: 8 }}
                />
                <Bar dataKey="pct" radius={[4, 4, 0, 0]}>
                  {TRANCHE_CHART_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tranche Cards */}
          <div className="space-y-3">
            {TRANCHE_DATA.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                variants={fadeUp(i * 0.06)}
                className={`rounded-xl border p-4 ${t.borderColor} ${t.bgColor}`}
              >
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ background: t.color }}
                    />
                    <span className="font-black text-sm text-gray-900 dark:text-gray-50">{t.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badgeColor}`}>
                      {t.pct}%
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${t.badgeColor}`}>
                      {t.yield}
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">
                      {ko ? "최대 손실 허용" : "Max loss tolerance"}: {t.maxLoss}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  {ko ? "손실 흡수 순서" : "Loss absorption"}: <span className={t.textColor}>{t.order(ko)}</span>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{t.desc(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 3: 신용 보강 4가지 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 신용 보강 4가지 — 구조가 무너지지 않는 이유" : "3. Four Credit Enhancements — Why the Structure Holds"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "워터폴만으로는 충분하지 않습니다. 과잉담보(OC), 초과스프레드(XS), 준비적립금(Reserve Fund), 후순위화(Subordination) 4가지가 겹겹이 작동해야 구조화금융이 AAA 등급을 정당화할 수 있습니다."
              : "The waterfall alone isn't enough. Overcollateralization (OC), Excess Spread (XS), Reserve Fund, and Subordination must layer together for structured finance to justify a AAA rating."}
          </p>
          <div className="space-y-5">
            {CREDIT_ENHANCEMENTS.map((ce, i) => (
              <motion.div
                key={ce.id}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-5 ${ce.borderColor} ${ce.bgColor}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl shrink-0">{ce.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-black text-sm text-gray-900 dark:text-gray-50">{ce.name(ko)}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ce.badgeColor}`}>
                        {ce.badge(ko)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ce.detail(ko)}</p>
                  </div>
                </div>
                <div className="mt-3 pl-2 border-l-2 border-amber-300 dark:border-amber-700">
                  <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-1.5">
                    {ko ? "작동 메커니즘" : "Mechanics"}
                  </p>
                  <ul className="space-y-1">
                    {ce.mechanics(ko).map((m, mi) => (
                      <li key={mi} className="flex gap-2 text-[11px] text-gray-600 dark:text-gray-400">
                        <span className="text-amber-500 shrink-0">→</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 4: OC 트리거 & IC 트리거 ─────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. OC 트리거 & IC 트리거 — 자동 안전장치의 작동 원리" : "4. OC Trigger & IC Trigger — How the Automatic Safeguards Work"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "구조화금융의 가장 정교한 메커니즘. OC(과잉담보) 테스트와 IC(이자 커버리지) 테스트가 분기마다 작동합니다. 기준치를 하회하면 자동으로 에쿼티 배당을 차단하고 원금 상환을 우선화합니다."
              : "The most sophisticated mechanism in structured finance. OC (overcollateralization) and IC (interest coverage) tests run each quarter. Fall below the threshold and distributions to equity are automatically halted — principal repayment takes priority."}
          </p>

          {/* OC Trigger */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
              {ko ? "OC 테스트 — 정의 & 예시" : "OC Test — Definition & Example"}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5 text-sm">
              <div>
                <p className="font-black text-gray-800 dark:text-gray-200 mb-1">{ko ? "공식" : "Formula"}</p>
                <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded block text-gray-700 dark:text-gray-300">
                  OC Ratio = 담보 시장가치 ÷ 발행 채권 잔액
                </code>
              </div>
              <div>
                <p className="font-black text-gray-800 dark:text-gray-200 mb-1">{ko ? "트리거 기준 예시" : "Trigger Level Example"}</p>
                <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <p>• {ko ? "AAA OC 테스트 기준치: 115.0%" : "AAA OC test threshold: 115.0%"}</p>
                  <p>• {ko ? "AA OC 테스트 기준치: 108.5%" : "AA OC test threshold: 108.5%"}</p>
                  <p>• {ko ? "BBB OC 테스트 기준치: 102.5%" : "BBB OC test threshold: 102.5%"}</p>
                </div>
              </div>
            </div>

            {/* OC Scenarios */}
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              {ko ? "시나리오별 BBB OC 테스트 (기준치: 102.5%)" : "BBB OC Test by Scenario (Threshold: 102.5%)"}
            </p>
            <div className="space-y-3">
              {OC_TRIGGER_SCENARIOS.map((sc, si) => (
                <motion.div
                  key={si}
                  initial="hidden"
                  whileInView="show"
                  viewport={VP}
                  variants={fadeUp(si * 0.08)}
                  className={`rounded-lg border p-4 ${
                    sc.pass
                      ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10"
                      : si === 1
                      ? "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10"
                      : "border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{sc.pass ? "✅" : si === 2 ? "🚨" : "⚠️"}</span>
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{sc.scenario(ko)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-lg font-black font-mono ${sc.pass ? "text-emerald-600 dark:text-emerald-400" : si === 2 ? "text-rose-600 dark:text-rose-400" : "text-amber-600 dark:text-amber-400"}`}
                      >
                        {sc.ocRatio}%
                      </span>
                      <span className="text-xs text-gray-400">
                        {ko ? "기준치" : "vs threshold"} 102.5%
                      </span>
                    </div>
                  </div>
                  {/* OC Bar */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-gray-400 w-10 shrink-0">{sc.ocRatio}%</span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden" style={{ height: 10 }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: sc.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min((sc.ocRatio / 115) * 100, 100)}%` }}
                        viewport={VP}
                        transition={{ duration: 0.5, delay: si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-400 w-12 shrink-0 text-right">
                      {sc.pass ? (ko ? "통과" : "Pass") : (ko ? "트리거!" : "Trigger!")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{sc.note(ko)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* IC Trigger */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
              {ko ? "IC 테스트 — 이자 커버리지 트리거" : "IC Test — Interest Coverage Trigger"}
            </p>
            <div className="mb-4">
              <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded block text-gray-700 dark:text-gray-300">
                IC Ratio = 담보 이자 수입 ÷ 채권 이자 지급액 × 100% (기준치: 120%)
              </code>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {Object.values(IC_TRIGGER_DATA).map((ic, ii) => (
                <motion.div
                  key={ii}
                  initial="hidden"
                  whileInView="show"
                  viewport={VP}
                  variants={fadeUp(ii * 0.08)}
                  className={`rounded-lg border p-3 ${
                    ic.pass
                      ? ii === 0
                        ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10"
                        : "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10"
                      : "border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/10"
                  }`}
                >
                  <p className="font-bold text-xs text-gray-900 dark:text-gray-50 mb-1">{ic.label(ko)}</p>
                  <p
                    className="text-xl font-black font-mono mb-1"
                    style={{ color: ic.color }}
                  >
                    {ic.icRatio}%
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">
                    ${ic.interestIncome}M ÷ ${ic.interestExpense}M
                  </p>
                  <p className={`text-[10px] font-semibold ${ic.pass ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                    {ic.pass ? (ko ? "✅ IC 테스트 통과" : "✅ IC Test Passes") : (ko ? "🚨 IC 트리거 발동" : "🚨 IC Trigger Fires")}
                  </p>
                  {(ic as { note?: (ko: boolean) => string }).note && (
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                      {(ic as { note: (ko: boolean) => string }).note(ko)}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 p-3">
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "🔑 OC 트리거와 IC 트리거가 동시에 발동되면 이중으로 에쿼티 배당이 차단되고 채권 원금 상환 속도가 빨라집니다. 두 트리거의 복원(cure)은 담보 추가 매입 또는 불량 대출 처분으로 가능하지만, 실제 트리거 발동 CLO에서 복원까지는 수 분기가 걸립니다."
                  : "🔑 When both OC and IC triggers fire simultaneously, equity is doubly blocked and senior principal repayment accelerates. Curing both triggers requires purchasing additional collateral or disposing of impaired loans — in practice, curing a fired-trigger CLO takes several quarters."}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 5: 워터폴 작동 시뮬레이션 ─────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 워터폴 작동 시뮬레이션 — $100M CLO 3가지 시나리오" : "5. Waterfall Simulation — Three Scenarios for a $100M CLO"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "동일한 $100M CLO에 담보 손실률을 3%, 18%, 40%로 각각 가정합니다. 각 트랑쉐가 실제로 받는 원금 회수율과 IRR 변화를 단계별로 추적합니다."
              : "Apply 3%, 18%, and 40% pool loss rates to the same $100M CLO. Track exactly how much principal recovery and IRR each tranche receives step by step."}
          </p>

          {/* Loss Scenario Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
              {ko ? "시나리오별 트랑쉐 손실률 (%)" : "Tranche Loss Rate (%) by Scenario"}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
              {ko ? "0% = 원금 완전 보전 / 100% = 전액 손실" : "0% = full principal protection / 100% = total loss"}
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={LOSS_SCENARIO_DATA} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="tranche"
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                  domain={[0, 110]}
                />
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value}%`,
                    name === "normal"
                      ? (ko ? "정상(3%)" : "Normal(3%)")
                      : name === "stress"
                      ? (ko ? "스트레스(18%)" : "Stress(18%)")
                      : (ko ? "위기(40%)" : "Crisis(40%)"),
                  ]}
                  contentStyle={{ fontSize: 12, borderRadius: 8 }}
                />
                <Bar dataKey="normal" fill="#10b981" radius={[3, 3, 0, 0]} name="normal" />
                <Bar dataKey="stress" fill="#f97316" radius={[3, 3, 0, 0]} name="stress" />
                <Bar dataKey="severe" fill="#dc2626" radius={[3, 3, 0, 0]} name="severe" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {[
                { color: "#10b981", label: ko ? "정상 (3%)" : "Normal (3%)" },
                { color: "#f97316", label: ko ? "스트레스 (18%)" : "Stress (18%)" },
                { color: "#dc2626", label: ko ? "위기 (40%)" : "Crisis (40%)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: item.color }} />
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scenario Detail Cards */}
          <div className="space-y-5">
            {WATERFALL_SCENARIOS.map((sc, si) => (
              <motion.div
                key={sc.id}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                variants={fadeUp(si * 0.07)}
                className={`rounded-xl border ${sc.color} ${sc.bg}`}
              >
                <div className={`rounded-t-xl px-5 py-3 ${sc.headerBg}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{sc.icon}</span>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{sc.label(ko)}</p>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">— {sc.subLabel(ko)}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{sc.desc(ko)}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs min-w-[500px]">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left py-2 pr-3 text-[10px] uppercase tracking-wide text-gray-400">{ko ? "트랑쉐" : "Tranche"}</th>
                          <th className="text-right py-2 pr-3 text-[10px] uppercase tracking-wide text-gray-400">{ko ? "원금 손실" : "Principal Loss"}</th>
                          <th className="text-right py-2 pr-3 text-[10px] uppercase tracking-wide text-gray-400">{ko ? "회수율" : "Recovery"}</th>
                          <th className="text-right py-2 pr-3 text-[10px] uppercase tracking-wide text-gray-400">IRR</th>
                          <th className="text-left py-2 text-[10px] uppercase tracking-wide text-gray-400">{ko ? "상태" : "Status"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sc.results.map((r, ri) => (
                          <tr key={ri} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                            <td className="py-1.5 pr-3 font-semibold text-gray-800 dark:text-gray-200">{r.tranche}</td>
                            <td className={`py-1.5 pr-3 text-right font-mono ${r.loss > 0 ? "text-rose-600 dark:text-rose-400 font-bold" : "text-gray-400"}`}>
                              {r.loss > 0 ? `$${r.loss}M` : "—"}
                            </td>
                            <td className={`py-1.5 pr-3 text-right font-mono ${r.recovery === "100%" ? "text-emerald-600 dark:text-emerald-400" : r.recovery === "0%" ? "text-rose-600 dark:text-rose-400" : "text-amber-600 dark:text-amber-400"}`}>
                              {r.recovery}
                            </td>
                            <td className="py-1.5 pr-3 text-right font-mono text-gray-600 dark:text-gray-400">{r.irr}</td>
                            <td className={`py-1.5 font-semibold ${r.color}`}>{r.status(ko)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 6: 에쿼티 트랑쉐의 레버리지 ──────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 에쿼티 트랑쉐의 레버리지 — 12~20% IRR이 가능한 이유" : "6. Equity Tranche Leverage — How 12–20% IRR Is Achievable"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CLO 에쿼티 투자자는 7~12% 자본으로 전체 포트폴리오를 운용합니다. 포트폴리오 수익률 6~7%가 어떻게 에쿼티 12~20% IRR로 변환되는지 5단계로 추적합니다."
              : "CLO equity investors deploy 7–12% capital to manage the entire portfolio. Track in 5 steps how a 6–7% portfolio yield translates to a 12–20% equity IRR."}
          </p>

          <div className="space-y-4 mb-6">
            {EQUITY_LEVERAGE_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                variants={fadeUp(i * 0.07)}
                className="flex gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4"
              >
                <div
                  className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-black"
                  style={{ background: ACCENT }}
                >
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{step.icon}</span>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{step.title(ko)}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.detail(ko)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* IRR Sensitivity Table */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-3">
              📊 {ko ? "에쿼티 IRR 민감도 분석 — 손실률 vs IRR" : "Equity IRR Sensitivity — Pool Loss Rate vs IRR"}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs min-w-[420px]">
                <thead>
                  <tr className="border-b border-amber-200 dark:border-amber-700">
                    <th className="text-left py-2 pr-3 text-[10px] uppercase tracking-wide text-amber-700 dark:text-amber-400">
                      {ko ? "연간 손실률" : "Annual Loss Rate"}
                    </th>
                    <th className="text-right py-2 pr-3 text-[10px] uppercase tracking-wide text-amber-700 dark:text-amber-400">
                      {ko ? "5년 누적 손실" : "5Y Cumulative Loss"}
                    </th>
                    <th className="text-right py-2 pr-3 text-[10px] uppercase tracking-wide text-amber-700 dark:text-amber-400">
                      {ko ? "에쿼티 IRR (5Y)" : "Equity IRR (5Y)"}
                    </th>
                    <th className="text-left py-2 text-[10px] uppercase tracking-wide text-amber-700 dark:text-amber-400">
                      {ko ? "평가" : "Assessment"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rate: "0.5%",  cumLoss: "2.5%",  irr: "~19–20%",  color: "text-emerald-600 dark:text-emerald-400", note: ko ? "최고 시나리오" : "Best case" },
                    { rate: "1.0%",  cumLoss: "5.0%",  irr: "~16–18%",  color: "text-emerald-600 dark:text-emerald-400", note: ko ? "양호" : "Good" },
                    { rate: "1.5%",  cumLoss: "7.5%",  irr: "~13–15%",  color: "text-teal-600 dark:text-teal-400",    note: ko ? "정상 범위" : "Normal range" },
                    { rate: "2.0%",  cumLoss: "10.0%", irr: "~8–11%",   color: "text-amber-600 dark:text-amber-400",   note: ko ? "에쿼티 위협 시작" : "Equity cushion thinning" },
                    { rate: "3.0%",  cumLoss: "15.0%", irr: "~0–5%",    color: "text-orange-600 dark:text-orange-400", note: ko ? "원금 일부 손실" : "Partial principal loss" },
                    { rate: "4.0%+", cumLoss: "20%+",  irr: "대폭 손실", color: "text-rose-600 dark:text-rose-400",   note: ko ? "에쿼티 완전 소진 가능" : "Equity potentially wiped" },
                  ].map((row, ri) => (
                    <tr key={ri} className="border-b border-amber-100 dark:border-amber-900/30 last:border-0">
                      <td className="py-1.5 pr-3 font-mono font-bold text-gray-800 dark:text-gray-200">{row.rate}</td>
                      <td className="py-1.5 pr-3 text-right font-mono text-gray-600 dark:text-gray-400">{row.cumLoss}</td>
                      <td className={`py-1.5 pr-3 text-right font-mono font-bold ${row.color}`}>{row.irr}</td>
                      <td className="py-1.5 text-gray-500 dark:text-gray-400">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-amber-700 dark:text-amber-400 mt-3 leading-relaxed">
              {ko
                ? "* 역사적 레버리지드 론 연간 디폴트율은 1.5–2.5%(2000–2023 평균). 회수율 60–65% 가정 시 실제 연간 손실률 약 0.5–1.0% → CLO 에쿼티 IRR 역사적 평균 12–18%."
                : "* Historical leveraged loan annual default rates: 1.5–2.5% (2000–2023 average). Assuming 60–65% recovery, actual annual loss rate ~0.5–1.0% → CLO equity historical average IRR 12–18%."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 7: FAQ ─────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
        </motion.section>

        {/* ── References ───────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">
            {ko ? "참고 자료" : "References"}
          </h2>
          <ol className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-600 font-mono shrink-0">[{s.id}]</span>
                <div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{s.author}. </span>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── ShareButtons bottom ──────────────────────────────────────────── */}
        <ShareButtons
          title={ko ? concept.title : (concept.titleEn ?? concept.title)}
          variant="mid"
          lang={lang}
        />

        {/* ── Prev / Next ──────────────────────────────────────────────────── */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <span>←</span>
              <span>{prev.title(ko)}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <span>{next.title(ko)}</span>
              <span>→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
