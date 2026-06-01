"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-80px" };
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
  { slug: "levfin-pricing",        ch: 5, title: (ko: boolean) => ko ? "Ch.5 프라이싱 심화"    : "Ch.5 Advanced Pricing" },
  { slug: "levfin-distressed",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 부실채권·구조조정" : "Ch.6 Distressed"      },
  { slug: "levfin-cases",          ch: 7, title: (ko: boolean) => ko ? "Ch.7 케이스 종합"      : "Ch.7 Case Studies"    },
];
const thisCh = 1;

// ── Comparison Table (10 rows) ─────────────────────────────────────────────────
const COMPARISON: {
  feature: (ko: boolean) => string;
  hy: (ko: boolean) => string;
  loan: (ko: boolean) => string;
  note: (ko: boolean) => string;
  highlight: boolean;
}[] = [
  {
    feature: (ko) => ko ? "금리 구조" : "Rate Structure",
    hy: (ko) => ko ? "고정 쿠폰 (Fixed, 8–12%)" : "Fixed coupon (8–12%)",
    loan: (ko) => ko ? "SOFR + 스프레드 (변동)" : "SOFR + spread (floating)",
    note: (ko) => ko ? "금리 상승기 → 론 발행사 비용 증가, HY 발행사는 고정비용 유리" : "Rising rates → loan issuers face higher cost; HY issuer locked in at fixed rate",
    highlight: true,
  },
  {
    feature: (ko) => ko ? "담보 순위" : "Security / Priority",
    hy: (ko) => ko ? "무담보 (Senior Unsecured)" : "Unsecured (Senior Unsecured)",
    loan: (ko) => ko ? "1순위 담보 (1st Lien Senior Secured)" : "1st Lien Senior Secured",
    note: (ko) => ko ? "파산 시 론 보유자가 HY 채권자보다 먼저 회수 — 회수율 평균 60–80% vs 20–40%" : "In bankruptcy, loan holders recover ahead of HY bondholders — avg 60–80% vs 20–40%",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "코버넌트 유형" : "Covenant Type",
    hy: (ko) => ko ? "발생형 (Incurrence-based, 인덴처)" : "Incurrence-based (indenture)",
    loan: (ko) => ko ? "Cov-Lite 85% (유지형 사실상 없음)" : "Cov-Lite 85% (maintenance largely absent)",
    note: (ko) => ko ? "2024년 레버리지드 론의 85%가 Cov-Lite — 분기별 유지형 레버리지 테스트 없음" : "2024: 85% of leveraged loans are Cov-Lite — no quarterly maintenance leverage test",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "조기상환 조건" : "Prepayment Terms",
    hy: (ko) => ko ? "NC 기간 + 콜 스케줄 (프리미엄 감소)" : "NC period + call schedule (declining premium)",
    loan: (ko) => ko ? "101 Soft Call 6개월, 이후 Par 상환 가능" : "101 soft call 6 months, then par anytime",
    note: (ko) => ko ? "M&A·리파이낸스 유연성은 론 압승 — HY는 NC 기간 내 사실상 상환 불가" : "M&A/refi flexibility: loans win — HY bonds effectively uncallable during NC period",
    highlight: true,
  },
  {
    feature: (ko) => ko ? "거래·결제 방식" : "Trading & Settlement",
    hy: (ko) => ko ? "증권 (CUSIP/ISIN), DTC, T+1" : "Securities (CUSIP/ISIN), DTC, T+1",
    loan: (ko) => ko ? "사모 대출, LSTA, T+7~20일" : "Private credit, LSTA standard, T+7–20 days",
    note: (ko) => ko ? "HY 유동성이 훨씬 높음 — 론은 양도 시 차주 동의 필요, 거래 비용·시간 큼" : "HY far more liquid — loans require borrower consent for transfer, higher cost and time",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "주요 투자자" : "Primary Investors",
    hy: (ko) => ko ? "HY 뮤추얼펀드/ETF (HYG·JNK), 생보, 헤지펀드" : "HY mutual funds / ETFs (HYG, JNK), life insurers, hedge funds",
    loan: (ko) => ko ? "CLO 65%, 론 펀드, 헤지펀드" : "CLOs 65%, loan mutual funds, hedge funds",
    note: (ko) => ko ? "CLO 없으면 론 스프레드 즉각 100–200bp 폭등 — CLO는 론 시장의 산소" : "Without CLOs, loan spreads would blow out 100–200bp immediately — CLOs are the oxygen of the loan market",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "만기 (Tenor)" : "Maturity (Tenor)",
    hy: (ko) => ko ? "5–10년, 주로 7–8년 불릿" : "5–10yr, typically 7–8yr bullet",
    loan: (ko) => ko ? "5–7년, 주로 7년 준불릿" : "5–7yr, typically 7yr quasi-bullet",
    note: (ko) => ko ? "HY가 장기 자금조달에 유리 — 고정금리 + 장기 만기 = 금리 헷지 완벽" : "HY better for long-term funding — fixed rate + long tenor = perfect rate hedge",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "OID (발행 할인)" : "OID (Original Issue Discount)",
    hy: (ko) => ko ? "주로 Par 발행 (100%)" : "Typically issued at par (100%)",
    loan: (ko) => ko ? "99–99.5 발행, 실질 비용 +15~20bp" : "Issued at 99–99.5, adds ~15–20bp to effective cost",
    note: (ko) => ko ? "OID는 발행사의 숨겨진 비용 — 표면 스프레드보다 실질 AIO(All-In Cost) 높아짐" : "OID is issuer's hidden cost — effective AIO (all-in cost) exceeds stated spread",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "공시·등록 의무" : "Disclosure / Registration",
    hy: (ko) => ko ? "144A/RegS, A/B 교환 등록 (SEC)" : "144A/RegS, A/B exchange registration (SEC)",
    loan: (ko) => ko ? "비공개 CIM 제공만, 공시 의무 없음" : "Non-public CIM only, no public disclosure required",
    note: (ko) => ko ? "론은 조건이 외부 비노출 — 기관 전용으로 비밀 유지, 경쟁사 정보 보호" : "Loan terms stay non-public — institutional-only, protecting competitive information",
    highlight: false,
  },
  {
    feature: (ko) => ko ? "최소 투자단위" : "Minimum Investment",
    hy: (ko) => ko ? "$1,000 (FINRA 2023 기준)" : "$1,000 (FINRA 2023 standard)",
    loan: (ko) => ko ? "$1mn+ 기관 전용" : "$1mn+ institutional only",
    note: (ko) => ko ? "HY는 ETF 통해 소매 투자자 접근 가능 — HYG·JNK 등 통해 개인도 투자" : "HY accessible to retail via ETFs (HYG, JNK) — loans remain institutional-only",
    highlight: false,
  },
];

// ── Call Schedule (7NC3 HY Bond) ──────────────────────────────────────────────
const CALL_SCHEDULE: {
  period: (ko: boolean) => string;
  price: string;
  pricePct: number;
  note: (ko: boolean) => string;
  isMakeWhole: boolean;
}[] = [
  {
    period: (ko) => ko ? "Year 1–3 (NC/3 구간)" : "Year 1–3 (NC/3 period)",
    price: "Make-Whole Call (T+50bp)",
    pricePct: 0,
    note: (ko) => ko ? "사실상 조기상환 불가 — 국채금리+50bp로 남은 현금흐름 현재가치 지급" : "Effectively uncallable — pay PV of remaining cash flows at Treasury +50bp",
    isMakeWhole: true,
  },
  {
    period: (ko) => ko ? "Year 4 (첫 번째 Par Call)" : "Year 4 (first par call)",
    price: "103.5%",
    pricePct: 100,
    note: (ko) => ko ? "3.5% 콜 프리미엄 — 발행사가 액면의 103.5% 지급 후 상환" : "3.5% call premium — issuer pays 103.5% of face value to redeem",
    isMakeWhole: false,
  },
  {
    period: (ko) => ko ? "Year 5" : "Year 5",
    price: "102.333%",
    pricePct: 67,
    note: (ko) => ko ? "2.333% 프리미엄 — 1/3씩 감소하는 콜 스케줄" : "2.333% premium — call price steps down by ~1/3 annually",
    isMakeWhole: false,
  },
  {
    period: (ko) => ko ? "Year 6" : "Year 6",
    price: "101.167%",
    pricePct: 33,
    note: (ko) => ko ? "1.167% 프리미엄 — 만기 1년 전 마지막 콜 프리미엄" : "1.167% premium — last step before par redemption",
    isMakeWhole: false,
  },
  {
    period: (ko) => ko ? "Year 7+ (만기)" : "Year 7+ (maturity)",
    price: "100%",
    pricePct: 0,
    note: (ko) => ko ? "Par — 프리미엄 없음. 만기 상환 또는 자유 상환 가능." : "Par — no premium. Maturity repayment or free callable at par.",
    isMakeWhole: false,
  },
];

// ── TLB Key Terms (6 entries) ──────────────────────────────────────────────────
const TLB_TERMS: {
  term: string;
  full: (ko: boolean) => string;
  explain: (ko: boolean) => string;
  icon: string;
}[] = [
  {
    term: "OID",
    full: (ko) => ko ? "Original Issue Discount — 발행 할인" : "Original Issue Discount",
    explain: (ko) => ko
      ? "$99 발행 → 만기 $100 상환. 실질 스프레드 +15–20bp 추가. 스프레드 표면보다 All-In Cost(AIC) 높아지는 숨겨진 비용."
      : "Issued at $99, repaid at $100 at maturity. Adds ~15–20bp to effective spread. Hidden cost — actual AIC exceeds stated spread.",
    icon: "💰",
  },
  {
    term: "SOFR Floor",
    full: (ko) => ko ? "최저 기준금리 (금리 하한)" : "Minimum Base Rate Floor",
    explain: (ko) => ko
      ? "통상 0.50%. SOFR이 바닥 이하로 내려가도 0.50% 보장. 제로금리·마이너스금리 환경에서 론 투자자(CLO) 보호 장치."
      : "Typically 0.50%. Even if SOFR falls below floor, investors receive 0.50% minimum. Protects CLOs and loan investors in zero/negative rate environments.",
    icon: "🛡️",
  },
  {
    term: "101 Soft Call",
    full: (ko) => ko ? "조기상환 소프트 콜 (6개월)" : "101% Soft Call Protection (6 months)",
    explain: (ko) => ko
      ? "발행 후 6개월 이내 상환 시 투자자에게 1% 프리미엄(101%) 지급. 즉시 리파이낸스(스프레드 축소 목적) 방지. 6개월 이후는 Par 상환 자유."
      : "Issuer pays 1% premium (101%) if loan is repaid within 6 months of issuance. Prevents immediate refinancing for spread compression. Free at par after 6 months.",
    icon: "📅",
  },
  {
    term: "MFN",
    full: (ko) => ko ? "Most Favored Nation — 최혜국 조항" : "Most Favored Nation Clause",
    explain: (ko) => ko
      ? "12개월 내 동일 차주가 더 높은 스프레드로 신규 TLB 발행 시, 기존 론도 소급 적용(50bp 범위 내). 기존 투자자 불이익 방지. 애드온(Add-On) 발행 시 주로 문제."
      : "If borrower issues new TLB at higher spread within 12 months, existing loans get same spread (within 50bp cap). Protects existing lenders from dilution. Most relevant for add-on issuances.",
    icon: "⚖️",
  },
  {
    term: "Portability",
    full: (ko) => ko ? "론 이전성 — M&A 시 기존 론 인수" : "Loan Portability in M&A",
    explain: (ko) => ko
      ? "M&A·스폰서 변경 시 기존 TLB 조건 그대로 신규 차주에 이전. 리파이낸스 비용·시간 절감. 레버리지 상한·재무 테스트 충족 시 CoC Waiver 불필요."
      : "Allows TLB to be assumed by new borrower in M&A without triggering CoC. Saves refinancing cost and time. Requires meeting leverage cap and financial tests.",
    icon: "🔄",
  },
  {
    term: "Cov-Lite",
    full: (ko) => ko ? "코버넌트 라이트 — 분기별 유지형 없음" : "Covenant-Lite — No Maintenance Covenants",
    explain: (ko) => ko
      ? "분기별 레버리지·이자 커버리지 테스트(유지형 코버넌트) 없음. 2024년 미국 TLB의 85%가 Cov-Lite. 발생형 코버넌트는 여전히 존재(특정 행위 전 테스트)."
      : "No quarterly maintenance leverage/interest coverage tests. 85% of US TLBs in 2024 are Cov-Lite. Incurrence covenants still apply (tested before specific actions).",
    icon: "🔓",
  },
];

// ── Investor Base (4 entries) ─────────────────────────────────────────────────
const INVESTOR_BASE: {
  type: (ko: boolean) => string;
  icon: string;
  market: (ko: boolean) => string;
  why: (ko: boolean) => string;
  color: string;
  dotColor: string;
}[] = [
  {
    type: (ko) => ko ? "CLO 매니저" : "CLO Managers",
    icon: "🏗️",
    market: (ko) => ko ? "레버리지드 론 65%" : "Leveraged Loans — 65%",
    why: (ko) => ko
      ? "등급 차익거래(Regulatory Arbitrage): BB/B 론을 모아 AAA 트랜치 생성. CLO 에쿼티 목표 IRR 15–20%. 론 시장의 최대·가장 안정적인 수요처."
      : "Rating arbitrage: pool BB/B loans to create AAA tranches. CLO equity targets 15–20% IRR. Largest and most stable buyer of leveraged loans.",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dotColor: "bg-yellow-500",
  },
  {
    type: (ko) => ko ? "HY 뮤추얼펀드 / ETF" : "HY Mutual Funds / ETFs",
    icon: "📊",
    market: (ko) => ko ? "HY 채권 40%+" : "HY Bonds — 40%+",
    why: (ko) => ko
      ? "HYG(iShares), JNK(SPDR) 등 ETF 통해 소매 투자자 접근 가능. 일일 유동성 필요 → HY 채권 선호(T+1 결제). AUM 수십조 달러 규모."
      : "ETFs like HYG and JNK democratize access for retail investors. Daily liquidity needs → prefer HY bonds (T+1 settlement). Combined AUM in the tens of trillions.",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dotColor: "bg-blue-500",
  },
  {
    type: (ko) => ko ? "생명보험 / 연기금" : "Life Insurers / Pension Funds",
    icon: "🏛️",
    market: (ko) => ko ? "HY BB 위주, 일부 TLB" : "Primarily HY BB, some TLBs",
    why: (ko) => ko
      ? "장기 부채(보험금·연금) 듀레이션 매칭 → HY 장기채 선호. 자본 규제(Solvency II 등) 상 BB 이하 불리. CCC 비중 제한."
      : "Duration matching for long-term liabilities (insurance payouts, pensions) → prefer long-tenor HY. Capital regulations (Solvency II) penalize below-BB. CCC exposure limited.",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dotColor: "bg-emerald-500",
  },
  {
    type: (ko) => ko ? "헤지펀드 / 특수신용 펀드" : "Hedge Funds / Special Situation Funds",
    icon: "⚡",
    market: (ko) => ko ? "HY + 론 CCC 포함, 부실채권" : "HY + Loans incl. CCC, distressed",
    why: (ko) => ko
      ? "부실채권 전략, 에쿼티 전환(Loan-to-Own), 채권 소송(Indenture Arbitrage). 크레딧 위기 시 가장 적극적. 고수익 추구로 CCC·디폴트 채권 매입."
      : "Distressed strategies, loan-to-own, indenture arbitrage. Most active during credit stress. Buy CCC and defaulted bonds seeking outsized returns.",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dotColor: "bg-rose-500",
  },
];

// ── Dollar General KKR LBO Timeline ──────────────────────────────────────────
const DG_TIMELINE: {
  year: string;
  event: (ko: boolean) => string;
  detail: (ko: boolean) => string;
  color: string;
  dot: string;
  sentiment: string;
}[] = [
  {
    year: "2007.07",
    event: (ko) => ko ? "KKR $6.9bn LBO 완료" : "KKR closes $6.9bn LBO",
    detail: (ko) => ko
      ? "에쿼티 $1.7bn (25%), TLB $4.1bn, HY Notes $1.97bn. 인수 멀티플 ~8× EV/EBITDA. TLB(선순위 담보)와 HY(후순위 무담보) 혼합구조 — 투자자 다변화 및 금리 헷지 목적."
      : "Equity $1.7bn (25%), TLB $4.1bn, HY Notes $1.97bn. ~8× EV/EBITDA. Mixed TLB (senior secured) + HY (unsecured) structure — diversifying investors and hedging interest rate risk.",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
    sentiment: "bullish",
  },
  {
    year: "2008–09",
    event: (ko) => ko ? "금융위기에도 역성장 없음 — 저가할인점 수요 폭증" : "GFC: No revenue decline — discount retail demand surges",
    detail: (ko) => ko
      ? "달러 제너럴은 저가 소비재 할인점 — 경기 침체기에 수요 증가(Trading Down 효과). EBITDA 성장 지속, 레버리지 오히려 하락. HY 채권 시장 냉각에도 실적 기반 유지."
      : "Dollar General sells discount everyday goods — recession increases demand (Trading Down effect). EBITDA kept growing, leverage ratio actually fell. Held firm despite frozen HY primary market.",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    sentiment: "recovery",
  },
  {
    year: "2009.11",
    event: (ko) => ko ? "NYSE IPO $716mn 조달 — Equity Clawback 발동" : "NYSE IPO raises $716mn — Equity Clawback triggered",
    detail: (ko) => ko
      ? "IPO 조달금으로 Equity Clawback 조항 발동 — HY Notes의 35%를 쿠폰+100%에 조기상환. 인덴처 조항이 실제 작동한 교과서 사례. 발행 3년 내 IPO 성공으로 KKR 재원 확보."
      : "IPO proceeds triggered the Equity Clawback clause — 35% of HY Notes redeemed at par plus coupon. Textbook real-world activation of an indenture clause. KKR replenished capital within 3 years of issuance.",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dot: "bg-blue-500",
    sentiment: "success",
  },
  {
    year: "2013",
    event: (ko) => ko ? "KKR 최종 엑싯 — 역대 최고 LBO 수익률 중 하나" : "KKR full exit — among highest LBO returns ever",
    detail: (ko) => ko
      ? "총 회수금 기준 MoM ~3.5×, IRR ~40%+. 저가 할인점 경기방어 특성 + 올바른 자본구조(TLB+HY 혼합) + 금리 헷지 + 인덴처 조항 활용이 모두 맞아떨어진 완벽한 LBO."
      : "~3.5× MoM, ~40%+ IRR on total proceeds. Defensive discount retail + optimal capital structure (TLB+HY blend) + rate hedge + indenture provisions all aligned. A textbook perfect LBO.",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    dot: "bg-teal-500",
    sentiment: "exit",
  },
];

// ── Korea Reasons (4 entries) ─────────────────────────────────────────────────
const KOREA_REASONS: {
  title: (ko: boolean) => string;
  body: (ko: boolean) => string;
  icon: string;
  color: string;
}[] = [
  {
    title: (ko) => ko ? "CLO 인프라 부재" : "No CLO Infrastructure",
    body: (ko) => ko
      ? "미국 TLB 시장의 65%를 CLO가 흡수하지만 한국에는 CLO가 없습니다. CLO를 살 기관도, 만들 인프라도 없어 론을 은행이 직접 보유해야 합니다. 결과적으로 론 규모·만기·유연성 모두 제한됩니다."
      : "CLOs absorb 65% of US TLB issuance, but Korea has no CLO market. Without CLO buyers or infrastructure, banks must hold loans on their own balance sheets, severely limiting loan size, tenor, and flexibility.",
    icon: "🏗️",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
  },
  {
    title: (ko) => ko ? "기관 투자자 HY 수요 제한" : "Constrained Institutional HY Demand",
    body: (ko) => ko
      ? "국내 생보·연기금은 Solvency II 유사 자본 규제상 BB 이하 채권 보유에 불리한 자본 부담. 진정한 HY(BB-/B) 수요 극히 제한. 대부분 BBB 직전 투기등급 '실질 IG' 채권만 소화."
      : "Korean life insurers and pensions face adverse capital charges for sub-BB bonds under Solvency II-equivalent regulations. Genuine HY (BB-/B) demand is minimal. Most domestic appetite exists only for near-IG speculative-grade paper.",
    icon: "🏛️",
    color: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20",
  },
  {
    title: (ko) => ko ? "재벌 구조 — 내부 자금 자급자족" : "Chaebol Structure — Internal Funding Self-Sufficiency",
    body: (ko) => ko
      ? "삼성·SK·현대 등 재벌은 대부분 IG 등급 + 계열사 내부 자금조달(인터컴퍼니 론). PE 타겟이 되는 중견기업은 규모가 작아 글로벌 HY 발행 비용 효율이 나쁩니다(최소 $200mn+ 필요)."
      : "Samsung, SK, Hyundai-level chaebols are IG-rated with internal inter-company funding. Mid-market PE targets are too small for cost-efficient global HY issuance (minimum $200mn+ needed for market access).",
    icon: "🏢",
    color: "border-teal-200 bg-teal-50 dark:border-teal-800 dark:bg-teal-900/20",
  },
  {
    title: (ko) => ko ? "MBK·KKR의 크로스보더 해결책" : "MBK/KKR Cross-Border Workaround",
    body: (ko) => ko
      ? "싱가포르·홍콩 SPC(특수목적법인)를 통한 USD TLB 발행으로 국내 제약 우회. MBK의 홈플러스(7.2조원 LBO)는 혼합 구조(국내 은행론 + 역외 USD 트랜치)로 딜을 완성. 국내 시장 발전의 선행 지표."
      : "Singapore/HK SPV structures used to issue USD TLBs, bypassing domestic market constraints. MBK's Homeplus (₩7.2tn LBO) used a blended structure (domestic bank loans + offshore USD tranches). Precursor to genuine market development.",
    icon: "🌏",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
  },
];

// ── HY Indenture Protection Clauses ──────────────────────────────────────────
const INDENTURE_CLAUSES: {
  name: (ko: boolean) => string;
  icon: string;
  mechanic: (ko: boolean) => string;
  example: (ko: boolean) => string;
  color: string;
}[] = [
  {
    name: (ko) => ko ? "Equity Clawback" : "Equity Clawback",
    icon: "💸",
    mechanic: (ko) => ko
      ? "발행 후 3년 이내 IPO·주식 발행으로 조달한 자금으로 HY Notes의 35%까지 쿠폰+100%에 조기상환 가능. 발행사가 IPO로 자금을 조달했을 때 투자자에게 조기 회수 기회."
      : "Issuer may redeem up to 35% of HY Notes at par plus coupon within 3 years of issuance using IPO or equity offering proceeds. Gives investors an early exit when the issuer IPOs.",
    example: (ko) => ko
      ? "Dollar General 2009 IPO → KKR, Clawback으로 HY Notes 35% 조기상환"
      : "Dollar General 2009 IPO → KKR used clawback to redeem 35% of HY Notes",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
  },
  {
    name: (ko) => ko ? "Change of Control Put (CoC Put)" : "Change of Control Put",
    icon: "🔀",
    mechanic: (ko) => ko
      ? "경영권 변동(M&A, 스폰서 변경, IPO 후 지분 50% 이하 하락) 시 투자자가 101%에 채권을 매도할 수 있는 풋 권리. 신용등급 하락과 연계 시 더 강력(Ratings Decline Trigger)."
      : "Gives bondholders the right to put bonds back at 101% upon change of control events (M&A, sponsor change, <50% ownership post-IPO). Combined with a ratings decline trigger makes it more powerful.",
    example: (ko) => ko
      ? "PE 포트폴리오 기업이 전략적 투자자에 매각 → CoC Put 발동, 투자자 101% 상환 청구"
      : "PE portfolio company sold to strategic → CoC Put triggered, bondholders demand 101% redemption",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
  },
  {
    name: (ko) => ko ? "Debt Incurrence Basket (부채 발생 한도)" : "Debt Incurrence Basket",
    icon: "⚖️",
    mechanic: (ko) => ko
      ? "발행사가 추가 부채를 발행하려면 고정 부과 커버리지 비율(FCCR) 2.0× 이상 충족 필요(발생형 테스트). 이 테스트를 통과하면 일반 Basket 사용 가능. 과도한 레버리지 쌓기 방지."
      : "Issuer must meet a Fixed Charge Coverage Ratio (FCCR) of 2.0× or above to incur additional debt under the ratio basket (incurrence test). Baskets can also be used independently. Prevents excessive leverage layering.",
    example: (ko) => ko
      ? "FCCR 1.8× 기업 → 일반 인커런스 Basket 사용 불가 → 상시 Basket($200mn 등)만 사용"
      : "Company with 1.8× FCCR → cannot use general incurrence basket → limited to permitted baskets (e.g., $200mn)",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "같은 BB- 기업이 HY채권과 TLB를 동시에 발행할 수 있나요? 왜 그렇게 하나요?"
      : "Can the same BB- issuer simultaneously issue HY bonds AND a TLB? Why would they?",
    a: (ko: boolean) => ko
      ? "네, 가능합니다 — Dollar General이 대표적입니다. KKR은 TLB(선순위 1순위 담보)와 HY Notes(후순위 무담보)를 동시에 발행했습니다. 이유는 세 가지입니다. ① 투자자 다변화: TLB는 CLO·론 펀드, HY는 뮤추얼펀드·보험사를 각각 공략 — 단일 상품보다 더 많은 자본을 더 낮은 가중평균 비용으로 조달할 수 있습니다. ② 금리 헷지: TLB(변동) + HY(고정)를 섞으면 금리 상승·하락 모두 부분 헷지됩니다. ③ 조기상환 유연성: TLB는 6개월 이후 Par 상환 가능 → 실적 개선 시 비싼 TLB를 먼저 상환. HY는 NC 기간 내 상환 불가이지만 콜 스케줄 따라 단계적으로 상환."
      : "Yes — Dollar General is the textbook example. KKR issued a TLB (senior 1st lien secured) and HY Notes (junior unsecured) simultaneously. Three reasons: ① Investor diversification: TLBs target CLOs/loan funds; HY bonds target mutual funds/insurers — more capital at lower blended cost than a single instrument. ② Rate hedging: mixing floating TLB + fixed HY creates a partial hedge against both rising and falling rates. ③ Prepayment flexibility: TLBs callable at par after 6 months → repay expensive TLB first when performance improves; HY remains locked up during NC period per the call schedule.",
  },
  {
    q: (ko: boolean) => ko
      ? "금리 상승기에 왜 HY 채권 발행이 오히려 늘어날 수 있나요?"
      : "Why can HY bond issuance actually surge during rising rate cycles?",
    a: (ko: boolean) => ko
      ? "직관과 반대처럼 보이지만, 금리 상승기에 발행사들이 HY 채권을 선호하는 이유가 있습니다. TLB는 SOFR + 스프레드라 금리 상승 즉시 이자 비용이 늘어납니다. 반면 HY 채권은 고정금리로 발행 시 비용이 고정됩니다. 2022년 연준 금리 인상 직전(2020–21년)에 발행사들이 역대 최저 금리에 HY를 대거 발행한 것이 이 논리입니다. 당시 쿠폰 4–5%대 10년 HY 채권들이 대량 발행됐습니다. 단, 금리가 올라 HY 투자자 요구수익률도 오르면 HY 발행 비용도 높아지므로, 이미 올라간 후에는 HY도 비쌉니다 — 핵심은 타이밍입니다."
      : "Counterintuitive but real: issuers prefer HY bonds in rising rate cycles because TLBs (SOFR + spread) immediately increase interest cost as rates rise, while HY bonds lock in a fixed rate at issuance. This is exactly why issuers rushed to issue HY bonds in 2020–21, before the Fed hiked rates. A flood of 4–5% coupon 10-year HY bonds was issued near all-time-low rates. Note: once rates are already elevated, HY investor demanded yields also rise, making new HY issuance expensive too — the key is timing the window.",
  },
  {
    q: (ko: boolean) => ko
      ? "Cov-Lite 확산으로 HY 채권과 TLB의 코버넌트 차이가 사라졌나요?"
      : "Has Cov-Lite expansion erased the covenant difference between HY bonds and TLBs?",
    a: (ko: boolean) => ko
      ? "분기별 유지형(Maintenance) 코버넌트에 관해서는 수렴 추세가 맞습니다 — TLB의 85%가 Cov-Lite로 분기 레버리지 테스트가 없고, HY 채권은 원래 유지형이 없었으니 둘 다 유사합니다. 그러나 HY 인덴처의 발생형 보호 조항들은 TLB에 없습니다: ① 부채 한도 Basket(FCCR 2.0× 테스트), ② 지불 제한(Restricted Payments — 배당·자사주 매입 제한), ③ CoC Put(101% 매도권), ④ Equity Clawback. 이 조항들이 HY 투자자에게 TLB 대비 추가적인 구조적 보호를 제공합니다. 완전히 같아진 건 아닙니다."
      : "For maintenance covenants, convergence is real — 85% of TLBs have no quarterly tests, and HY indentures never had them anyway. But HY indentures retain incurrence-based protections absent from TLBs: ① Debt incurrence baskets (FCCR 2.0× test), ② Restricted Payments limitations (dividends, buybacks), ③ Change of Control Put (101% put right), ④ Equity Clawback. These provisions give HY investors structural protections TLB lenders lack. They are not the same.",
  },
  {
    q: (ko: boolean) => ko
      ? "Equity Clawback이 실제로 어떻게 작동하나요? Dollar General 사례로 설명해 주세요."
      : "How does Equity Clawback actually work in practice? Walk me through Dollar General.",
    a: (ko: boolean) => ko
      ? "2007년 KKR은 Dollar General HY Notes를 발행하면서 인덴처에 Equity Clawback 조항을 포함시켰습니다: '발행 후 3년 이내, IPO·주식 발행 조달금의 일부로 Notes의 35%를 쿠폰+100%에 상환할 수 있다.' 2009년 11월 Dollar General이 NYSE IPO를 완료해 $716mn을 조달했습니다. KKR은 이 조항을 발동(exercise)해 HY Notes 잔액의 35%를 쿠폰 금리+100%로 상환했습니다. 투자자 입장에서는 만기 전 조기 현금 회수. KKR 입장에서는 IPO 자금으로 고비용 HY를 줄여 이자 비용 절감. 이 조항 없이는 NC 기간 중 상환이 불가능했을 것입니다."
      : "In 2007, KKR included an Equity Clawback in Dollar General's HY indenture: 'Within 3 years of issuance, up to 35% of the Notes may be redeemed at par plus coupon using proceeds from an IPO or equity offering.' In November 2009, Dollar General completed its NYSE IPO, raising $716mn. KKR exercised the clause, redeeming 35% of outstanding HY Notes at coupon plus par. For investors: early cash return ahead of maturity. For KKR: IPO proceeds pay down expensive HY, reducing ongoing interest cost. Without this clause, redemption during the NC period would have been effectively impossible.",
  },
  {
    q: (ko: boolean) => ko
      ? "LIBOR에서 SOFR로의 전환이 레버리지드 론 시장에 미친 실질적 영향은 무엇인가요?"
      : "What was the real-world impact of the LIBOR-to-SOFR transition on the leveraged loan market?",
    a: (ko: boolean) => ko
      ? "2023년 6월 USD LIBOR가 공식 폐지되면서 레버리지드 론 시장 전체($1.5조+)가 Term SOFR으로 전환됐습니다. 실질적 영향 세 가지: ① CSA(Credit Spread Adjustment) +26bp: LIBOR는 은행 간 신용 리스크를 반영한 선도 금리인 반면, SOFR은 무위험 하룻밤 금리 — 평균 26bp 차이를 보완하기 위해 기존 론에 +26bp를 더함. ② 재가격 작업: $1.5조+ 규모의 기존 TLB 전체를 재가격·서류 교체 — 2년 이상 소요, 수백 개 딜 동시 진행. ③ SOFR Floor 재설정: 기존 LIBOR Floor를 SOFR Floor로 전환 시 CSA 차이 반영해 조정. 결과적으로 이 전환은 무난하게 완료됐지만 클로즈드-엔드 CLO의 경우 개정 절차가 복잡했습니다."
      : "When USD LIBOR officially ceased in June 2023, the entire leveraged loan market ($1.5tn+) transitioned to Term SOFR. Three real impacts: ① Credit Spread Adjustment (CSA) of +26bp: LIBOR incorporated bank credit risk (forward-looking), while SOFR is a risk-free overnight rate — existing loans added +26bp to compensate. ② Repricing workload: every outstanding TLB ($1.5tn+) required repricing and document amendment — over 2 years, hundreds of simultaneous deals. ③ SOFR Floor adjustments: converting LIBOR floors to SOFR floors required CSA-adjusted recalibration. The transition ultimately completed without major disruption, though closed-end CLO amendments were complex.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "J.P. Morgan", title: "Global High Yield & Leveraged Loan Research — Annual Market Review", url: "https://www.jpmorgan.com/insights/research/high-yield-and-leveraged-loan", source: "J.P. Morgan, 2024" },
  { id: 2, author: "S&P Global / LCD", title: "US Leveraged Lending Review Q4 2024", url: "https://www.spglobal.com/marketintelligence/en/news-insights/research/leveraged-loan-market", source: "S&P Global LCD, 2024" },
  { id: 3, author: "LSTA (Loan Syndications and Trading Association)", title: "The LSTA's Complete Credit Agreement Guide, 3rd Edition", url: "https://www.lsta.org/", source: "LSTA, 2023" },
  { id: 4, author: "Moody's Investors Service", title: "Annual Default Study: Corporates — 2024 Update", url: "https://www.moodys.com/researchandratings/market-segment/corporate-finance/-/003006/", source: "Moody's, 2024" },
  { id: 5, author: "KKR", title: "Dollar General LBO — KKR Deal Overview (Investor Presentation)", url: "https://www.kkr.com/businesses/private-equity", source: "KKR, 2013" },
  { id: 6, author: "Bank of America Securities", title: "HY Primer: A Guide to the High Yield Bond Market", url: "https://www.bofasecurities.com/", source: "BofA Global Research, 2024" },
  { id: 7, author: "SIFMA", title: "US Bond Market Statistics — High Yield & Leveraged Loans Outstanding", url: "https://www.sifma.org/resources/research/us-bond-market-statistics/", source: "SIFMA, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinHyVsLoansClient({ concept, lang }: Props) {
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
              ? "HY 채권 vs 레버리지드 론 — 같은 발행사, 두 개의 시장"
              : "HY Bonds vs Leveraged Loans — Same Issuer, Two Markets"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "Ford Motor Credit는 BB- 등급으로 HY 채권과 TLB를 동시에 발행합니다. 같은 신용 리스크인데 왜 두 상품이 공존할까요? 고정금리 vs 변동금리, 공개 시장 vs 사모, 인덴처 보호 vs Cov-Lite — 이 두 상품의 모든 차이를 JPM MD 수준으로 해부합니다."
              : "Ford Motor Credit, rated BB-, issues both HY bonds and TLBs simultaneously. Same credit risk — why do two products coexist? Fixed vs floating, public vs private, indenture protections vs Cov-Lite — every difference between these two instruments, dissected at JPM MD level."}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(ko
              ? ["HY 채권", "레버리지드 론", "TLB", "인덴처", "Cov-Lite", "CLO", "콜 스케줄", "Dollar General LBO"]
              : ["HY Bond", "Leveraged Loan", "TLB", "Indenture", "Cov-Lite", "CLO", "Call Schedule", "Dollar General LBO"]
            ).map((tag) => (
              <span key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Opening Insight ──────────────────────────────────────────────── */}
        <motion.div initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
          <div className="rounded-xl border border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="font-black text-base text-yellow-800 dark:text-yellow-300 mb-2">
                  {ko ? "같은 발행사, 두 개의 상품" : "Same Issuer, Two Products"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "Ford Motor Credit는 BB- 등급으로 HY 채권과 레버리지드 론(TLB)을 동시에 시장에서 운용합니다. 투자자들은 각자의 투자 위임(Mandate)에 따라 선택합니다 — CLO 매니저는 변동금리 TLB를, HY 뮤추얼펀드는 공개거래 채권을 사야 합니다. 이 두 상품은 경쟁하는 게 아니라 서로 다른 투자자 베이스를 겨냥하는 보완 관계입니다."
                    : "Ford Motor Credit, rated BB-, operates both HY bonds and Term Loan Bs (TLBs) in the market simultaneously. Investors choose based on their mandate — CLO managers must buy floating-rate TLBs; HY mutual funds must buy publicly traded bonds. These two products aren't competing; they're complementary, targeting entirely different investor bases."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 섹션 1: 핵심 구조 차이 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 핵심 구조 차이 — 10가지 비교" : "1. Core Structural Differences — 10-Point Comparison"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "같은 BB- 발행사가 두 상품을 쓸 때 조건이 어떻게 달라지는지를 항목별로 비교합니다. 노란 배경 행이 실무적으로 가장 중요한 차이입니다."
              : "Item-by-item comparison of how terms differ when the same BB- issuer uses both products. Yellow-highlighted rows represent the most practically significant differences."}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3 min-w-[120px]">{ko ? "항목" : "Feature"}</th>
                    <th className="text-left px-4 py-3 text-yellow-600 dark:text-yellow-400 min-w-[160px]">HY Bond</th>
                    <th className="text-left px-4 py-3 text-orange-600 dark:text-orange-400 min-w-[180px]">Leveraged Loan (TLB)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${row.highlight ? "bg-yellow-50/60 dark:bg-yellow-900/10" : ""}`}>
                      <td className="px-4 py-3 align-top">
                        <span className={`font-bold text-xs ${row.highlight ? "text-yellow-700 dark:text-yellow-400" : "text-gray-700 dark:text-gray-300"}`}>
                          {row.feature(ko)}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <span className="text-xs text-gray-700 dark:text-gray-300">{row.hy(ko)}</span>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div>
                          <span className="text-xs text-gray-700 dark:text-gray-300">{row.loan(ko)}</span>
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 leading-snug">{row.note(ko)}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">
            {ko ? "* 2024년 미국 시장 기준. 구체적 조건은 딜마다 다를 수 있음." : "* Based on 2024 US market. Specific terms may vary by deal."}
          </p>
        </motion.section>

        {/* ── 섹션 2: HY 채권 심층 — 인덴처 & 콜 스케줄 ────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. HY 채권 심층 — 인덴처와 콜 스케줄" : "2. HY Bonds Deep Dive — Indenture & Call Schedule"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "HY 채권의 핵심 문서는 인덴처(Indenture)입니다. 분기별 유지형 테스트 없이도 발생형 코버넌트와 세 가지 핵심 보호 조항으로 투자자를 지킵니다."
              : "The core document for HY bonds is the indenture. Without quarterly maintenance tests, investors are protected through incurrence covenants and three key protection clauses."}
          </p>

          {/* Call Schedule Visual */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "7NC3 HY 채권 — 전형적 콜 스케줄" : "7NC3 HY Bond — Typical Call Schedule"}
            </p>
            <div className="space-y-3">
              {CALL_SCHEDULE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className={`rounded-lg border p-4 ${item.isMakeWhole
                    ? "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20"
                    : i === CALL_SCHEDULE.length - 1
                      ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20"
                      : "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-900/10"
                  }`}>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.period(ko)}</span>
                      <span className={`font-black text-base font-mono ${item.isMakeWhole
                        ? "text-rose-600 dark:text-rose-400"
                        : i === CALL_SCHEDULE.length - 1
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-yellow-700 dark:text-yellow-400"
                      }`}>
                        {item.price}
                      </span>
                    </div>
                    {/* Price decay bar — only for non-make-whole, non-par */}
                    {!item.isMakeWhole && i < CALL_SCHEDULE.length - 1 && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                        <motion.div
                          className="h-1.5 rounded-full bg-yellow-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${100 - item.pricePct}%` }}
                          viewport={VP}
                          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.note(ko)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3">
              {ko
                ? "* Make-Whole Call: 국채(T)+50bp로 남은 현금흐름 현재가치 전액 지급 → 발행사 입장에서 사실상 상환 불가능한 비용."
                : "* Make-Whole Call: pay PV of remaining cash flows at Treasury+50bp → effectively prohibitive cost for the issuer to exercise."}
            </p>
          </div>

          {/* 3 Key Protection Clauses */}
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
            {ko ? "인덴처 3대 보호 조항" : "3 Key Indenture Protection Clauses"}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {INDENTURE_CLAUSES.map((clause, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                className={`rounded-xl border p-4 ${clause.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{clause.icon}</span>
                  <span className="font-black text-sm text-gray-900 dark:text-gray-50">{clause.name(ko)}</span>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{clause.mechanic(ko)}</p>
                <div className="rounded-lg bg-white/60 dark:bg-gray-900/30 px-3 py-2 text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                  📌 {clause.example(ko)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 3: TLB 심층 — 핵심 조항 6가지 ────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. TLB 심층 — 반드시 알아야 할 6가지 조항" : "3. TLB Deep Dive — 6 Must-Know Terms"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "레버리지드 론 계약서(Credit Agreement)에 등장하는 핵심 용어들입니다. HY 채권 인덴처에는 없고 TLB에만 존재하는 개념들이 대부분입니다."
              : "Key terms appearing in leveraged loan credit agreements. Most of these concepts exist only in TLBs, not in HY bond indentures."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {TLB_TERMS.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{t.icon}</span>
                  <div>
                    <span className="font-black text-sm text-gray-900 dark:text-gray-50">{t.term}</span>
                    <span className="ml-2 text-[11px] text-gray-500 dark:text-gray-400">{t.full(ko)}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{t.explain(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 4: 투자자 베이스 ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 투자자 베이스 — 누가, 왜 사는가" : "4. Investor Base — Who Buys What and Why"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "HY 채권과 레버리지드 론의 투자자 베이스는 거의 겹치지 않습니다. 이것이 같은 발행사가 두 상품을 동시에 발행하는 핵심 이유입니다."
              : "The investor bases for HY bonds and leveraged loans barely overlap. This is the core reason the same issuer can simultaneously issue both products."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {INVESTOR_BASE.map((inv, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${inv.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{inv.icon}</span>
                  <div>
                    <p className="font-black text-sm text-gray-900 dark:text-gray-50">{inv.type(ko)}</p>
                    <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{inv.market(ko)}</p>
                  </div>
                  <div className={`ml-auto w-2.5 h-2.5 rounded-full shrink-0 ${inv.dotColor}`} />
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{inv.why(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 5: 발행사 선택 기준 ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 발행사는 언제 HY를, 언제 TLB를 선택하는가" : "5. When Does an Issuer Choose HY vs TLB?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "뱅커가 발행사에 자본구조를 제안할 때 고려하는 핵심 선택 기준입니다."
              : "The core selection criteria bankers consider when advising issuers on capital structure."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* HY 선택 기준 */}
            <div className="rounded-xl border border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 p-5">
              <p className="font-black text-sm text-yellow-800 dark:text-yellow-300 mb-4">
                📄 {ko ? "HY 채권을 선택할 때" : "When to Choose HY Bonds"}
              </p>
              <ul className="space-y-2.5">
                {(ko ? [
                  "금리 상승 사이클 진입 직전 → 고정금리 고정",
                  "장기 자금조달 필요 (7–10년 불릿)",
                  "NC 기간 내 조기상환 의향 없음",
                  "공개 시장 유동성 + 투자자 다변화 원할 때",
                  "비공개 정보 없이 공시 가능한 발행사",
                  "소매 투자자 접근 가능성 (ETF 편입) 활용"
                ] : [
                  "Entering rising rate cycle → lock in fixed cost",
                  "Need long-tenor funding (7–10yr bullet)",
                  "No intent to prepay during NC period",
                  "Want public market liquidity + broad investor base",
                  "Issuer comfortable with public disclosure requirements",
                  "Value retail investor access via ETF inclusion"
                ]).map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                    <span className="text-yellow-500 shrink-0 mt-0.5">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* TLB 선택 기준 */}
            <div className="rounded-xl border border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 p-5">
              <p className="font-black text-sm text-orange-800 dark:text-orange-300 mb-4">
                🏦 {ko ? "TLB를 선택할 때" : "When to Choose a TLB"}
              </p>
              <ul className="space-y-2.5">
                {(ko ? [
                  "M&A·리파이낸스 가능성 높음 → 조기상환 유연성",
                  "금리 하락 예상 → 변동금리 혜택",
                  "비공개 정보 보호 필요 (경쟁사 민감 조건)",
                  "빠른 딜 실행 필요 — 등록 절차 없음",
                  "CLO 수요 기반 스프레드 타이트 확보",
                  "Portability 조항으로 미래 M&A 대비"
                ] : [
                  "High M&A/refi probability → need prepayment flexibility",
                  "Rates expected to fall → benefit from floating rate",
                  "Sensitive information protection needed (competitive terms)",
                  "Need speed to market — no SEC registration process",
                  "Access tight spreads via strong CLO demand base",
                  "Include Portability clause to facilitate future M&A"
                ]).map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                    <span className="text-orange-500 shrink-0 mt-0.5">⚡</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 6: Dollar General KKR LBO 케이스 스터디 ─────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 케이스 스터디 — KKR Dollar General LBO (2007)" : "6. Case Study — KKR Dollar General LBO (2007)"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            {ko
              ? "TLB + HY 혼합 자본구조의 교과서 사례. 금융위기 속에서도 저가 할인점 경기방어 특성과 완벽한 인덴처 조항 활용으로 역대 최고 LBO 수익률 중 하나를 달성."
              : "The textbook case for a mixed TLB + HY capital structure. Despite the financial crisis, discount retail's defensive characteristics and optimal indenture clause usage drove one of the highest LBO returns in history."}
          </p>

          {/* Context Box */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              {ko ? "딜 구조 개요" : "Deal Structure Overview"}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: ko ? "총 인수 금액" : "Total Acquisition Price", value: "$6.9bn", sub: ko ? "EV/EBITDA ~8×" : "~8× EV/EBITDA" },
                { label: ko ? "에쿼티 (KKR)" : "Equity (KKR)", value: "$1.7bn", sub: ko ? "총 자본의 25%" : "25% of total capital" },
                { label: ko ? "부채 합계" : "Total Debt", value: "$5.2bn", sub: ko ? "TLB $4.1bn + HY $1.97bn" : "TLB $4.1bn + HY Notes $1.97bn" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-black text-2xl text-gray-900 dark:text-gray-50">{item.value}</p>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-0.5">{item.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mb-8">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {DG_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-black text-sm font-mono" style={{ color: accent }}>{item.year}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                        <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.sentiment === "bullish" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" :
                          item.sentiment === "recovery" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" :
                          item.sentiment === "success" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" :
                          "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
                        }`}>
                          {item.sentiment === "bullish" ? (ko ? "LBO 완료" : "LBO Closed") :
                           item.sentiment === "recovery" ? (ko ? "경기방어 입증" : "Defensive Proven") :
                           item.sentiment === "success" ? (ko ? "Clawback 발동" : "Clawback Exercised") :
                           (ko ? "완전 엑싯" : "Full Exit")}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Lesson */}
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-4">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-1.5">
              💡 {ko ? "핵심 교훈" : "Key Lesson"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "Dollar General LBO가 완벽했던 이유는 세 가지가 맞아떨어졌기 때문입니다. ① 경기방어 사업: 침체기에 오히려 수요 증가 → 레버리지 부담 스스로 해소. ② 혼합 자본구조(TLB+HY): 투자자 다변화 + 변동/고정 금리 혼합 + 선순위/후순위 분리. ③ 인덴처 조항 적극 활용: IPO 후 Equity Clawback으로 HY Notes 35% 조기상환 → 이자 비용 즉각 절감. 자본구조 설계가 단순한 자금조달이 아니라 출구 전략의 일부임을 보여주는 케이스입니다."
                : "Dollar General's LBO succeeded because three elements aligned: ① Defensive business — recession actually increased demand, naturally deleveraging the balance sheet. ② Mixed capital structure (TLB+HY) — investor diversification + blended floating/fixed rate + seniority separation. ③ Active use of indenture provisions — Equity Clawback post-IPO redeemed 35% of HY Notes, immediately reducing interest burden. This case shows that capital structure design is not just fundraising — it is part of the exit strategy itself."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 7: 한국 LevFin — TLB 없는 시장 ────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 한국 LevFin — TLB 없는 시장, HY 없는 시장" : "7. Korean LevFin — A Market Without TLBs or HY"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "미국 LevFin과 달리 한국에는 공개 HY 시장도, 기관 TLB 시장도 사실상 없습니다. 구조적 이유를 짚어봅니다."
              : "Unlike the US, Korea has virtually no public HY market and no institutional TLB market. Here's why."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {KOREA_REASONS.map((reason, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${reason.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{reason.icon}</span>
                  <p className="font-black text-sm text-gray-900 dark:text-gray-50">{reason.title(ko)}</p>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{reason.body(ko)}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              🔭 {ko ? "전망" : "Outlook"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "MBK·KKR·Carlyle 등 글로벌 PE가 한국 딜에서 역외 USD TLB 구조를 점점 더 많이 사용하면서, 한국 차주 + 글로벌 CLO 투자자 연결 사례가 축적되고 있습니다. 국내 CLO 시장이 열리거나 기관 투자자 HY 투자 규제가 완화된다면, 한국은 아시아 LevFin의 새로운 거점이 될 잠재력이 있습니다."
                : "As global PE firms (MBK, KKR, Carlyle) increasingly use offshore USD TLB structures for Korean deals, the track record of connecting Korean borrowers with global CLO investors is building. If a domestic CLO market develops or institutional HY investment regulations ease, Korea has the potential to become a new Asian LevFin hub."}
            </p>
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
            {ko ? "이 챕터로 이해하는 실제 딜 — HY채권·론 혼합 구조" : "Real Deals That Illustrate HY Bonds vs Loans Structure"}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/kkr-rjr-nabisco`,
                initials: "KKR",
                bg: "bg-gray-800",
                title: ko ? "KKR × RJR Nabisco (1989) — HY채권·PIK·브리지론 혼합 구조" : "KKR × RJR Nabisco (1989) — HY Bonds, PIK & Bridge Loan Mix",
                sub: ko
                  ? "$31.1B, 드렉셀 주선 HY채권 $5B, PIK 복리, 7-레이어 자본구조 — LBO 파이낸싱의 원형"
                  : "$31.1B, Drexel-led HY $5B, PIK compounding, 7-layer capital structure — the original LBO financing template",
                span2: false,
              },
              {
                href: `${base.replace("market-101", "deals")}/kkr-toys-r-us`,
                initials: "KKR",
                bg: "bg-blue-800",
                title: ko ? "KKR × 토이저러스 (2005) — TLB 중심 LBO의 이자 부담" : "KKR × Toys R Us (2005) — TLB-Heavy LBO Interest Burden",
                sub: ko
                  ? "TLB $53억 + HY 후순위채 — 매년 $400M 이자가 EBITDA를 잠식, 디지털 투자 봉쇄"
                  : "TLB $5.3B + HY sub-debt — $400M/yr interest consumes EBITDA, blocks digital investment",
                span2: false,
              },
              {
                href: `${base.replace("market-101", "deals")}/kkr-dollar-general`,
                initials: "DG",
                bg: "bg-emerald-700",
                title: ko ? "KKR × Dollar General (2007) — TLB + HY 10.625% 혼합 성공 사례" : "KKR × Dollar General (2007) — TLB + HY 10.625% Blended Success",
                sub: ko
                  ? "TLB $38억 + HY 10.625% 채권 $7억 — 보수적 5.5× 레버리지·금융위기 역수혜·IRR 70%+"
                  : "TLB $3.8B + HY 10.625% $0.7B — conservative 5.5× leverage, financial crisis tailwind, IRR 70%+",
                span2: true,
              },
            ].map((d) => (
              <Link key={d.href} href={d.href} className={d.span2 ? "sm:col-span-2" : ""}>
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
            ? "HY 채권 vs 레버리지드 론 — 같은 발행사, 두 개의 시장 | Deal Story"
            : "HY Bonds vs Leveraged Loans — Same Issuer, Two Markets | Deal Story"}
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
