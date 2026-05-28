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
  { slug: "levfin-ecosystem",     ch: 0, title: (ko: boolean) => ko ? "LevFin 개요"         : "LevFin Overview"     },
  { slug: "levfin-hy-vs-loans",   ch: 1, title: (ko: boolean) => ko ? "Ch.1 HY채권 vs 론"   : "Ch.1 HY vs Loans"    },
  { slug: "levfin-credit-metrics",ch: 2, title: (ko: boolean) => ko ? "Ch.2 크레딧 메트릭"   : "Ch.2 Credit Metrics" },
  { slug: "levfin-covenants",     ch: 3, title: (ko: boolean) => ko ? "Ch.3 코버넌트"        : "Ch.3 Covenants"      },
  { slug: "levfin-process",       ch: 4, title: (ko: boolean) => ko ? "Ch.4 딜 프로세스"     : "Ch.4 Deal Process"   },
  { slug: "levfin-pricing",       ch: 5, title: (ko: boolean) => ko ? "Ch.5 프라이싱 심화"   : "Ch.5 Advanced Pricing"},
  { slug: "levfin-distressed",    ch: 6, title: (ko: boolean) => ko ? "Ch.6 부실채권·구조조정": "Ch.6 Distressed"     },
  { slug: "levfin-cases",         ch: 7, title: (ko: boolean) => ko ? "Ch.7 케이스 종합"     : "Ch.7 Case Studies"   },
];
const thisCh = 0;

// ── Market Size ───────────────────────────────────────────────────────────────
const MARKET_SIZE = [
  { label: (ko: boolean) => ko ? "HY 채권 시장 (미국)" : "US HY Bond Market", size: "$1.4조", unit: "USD", detail: (ko: boolean) => ko ? "공개 시장 잔액, 2024" : "Outstanding balance, 2024", color: "bg-yellow-500", pct: 35 },
  { label: (ko: boolean) => ko ? "레버리지드 론 시장 (미국)" : "US Leveraged Loan Market", size: "$1.5조", unit: "USD", detail: (ko: boolean) => ko ? "공개+사모 포함, 2024" : "Public + private, 2024", color: "bg-orange-500", pct: 37 },
  { label: (ko: boolean) => ko ? "CLO 시장" : "CLO Market", size: "$1.1조", unit: "USD", detail: (ko: boolean) => ko ? "레버리지드 론의 65% 보유" : "Holds ~65% of leveraged loans", color: "bg-amber-400", pct: 28 },
];

// ── Three Pillars ─────────────────────────────────────────────────────────────
const THREE_PILLARS = [
  {
    name: (ko: boolean) => ko ? "하이일드 채권 (High Yield Bond)" : "High Yield (HY) Bond",
    icon: "📄",
    rating: "BB+ / Ba1 이하",
    rate: (ko: boolean) => ko ? "고정 쿠폰 (8–12%)" : "Fixed coupon (8–12%)",
    tenor: (ko: boolean) => ko ? "5–10년 불릿" : "5–10yr bullet",
    security: (ko: boolean) => ko ? "무담보 또는 2순위 담보" : "Unsecured or 2nd lien",
    holder: (ko: boolean) => ko ? "HY 펀드, 헤지펀드, 보험사" : "HY funds, hedge funds, insurers",
    traded: (ko: boolean) => ko ? "OTC (공개 거래 가능)" : "OTC (publicly tradeable)",
    pros: (ko: boolean) => ko ? "만기 고정, 공개 시장 유동성, 번호판 효과(신규 투자자)" : "Fixed maturity, public liquidity, access to new investor base",
    cons: (ko: boolean) => ko ? "높은 쿠폰, 재융통 제한, 공시 의무" : "High coupon, call restrictions, disclosure requirements",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    accentDot: "bg-yellow-500",
  },
  {
    name: (ko: boolean) => ko ? "레버리지드 론 (Leveraged Loan / TLB)" : "Leveraged Loan (Term Loan B)",
    icon: "🏦",
    rating: "BB+ / Ba1 이하 또는 B",
    rate: (ko: boolean) => ko ? "변동 금리 (SOFR + 250–500bp)" : "Floating rate (SOFR + 250–500bp)",
    tenor: (ko: boolean) => ko ? "5–7년, 사실상 준불릿" : "5–7yr, quasi-bullet in practice",
    security: (ko: boolean) => ko ? "1순위 담보 (Senior Secured 1st Lien)" : "1st lien senior secured",
    holder: (ko: boolean) => ko ? "CLO (65%), 론 뮤추얼펀드, 헤지펀드" : "CLOs (65%), loan mutual funds, hedge funds",
    traded: (ko: boolean) => ko ? "사모 대출 시장 (LSTA 표준)" : "Private credit market (LSTA standard)",
    pros: (ko: boolean) => ko ? "선순위 담보, 변동금리(금리 상승 수혜), 코버넌트 적음(Cov-Lite 85%)" : "Senior secured, floating rate (benefits from rate rises), cov-lite (85%)",
    cons: (ko: boolean) => ko ? "금리 하락 시 투자자 손실, OID, 사전 상환 가능(리파이낸스 위험)" : "Hurt by rate declines, OID discount, callable (refinancing risk)",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    accentDot: "bg-orange-500",
  },
  {
    name: (ko: boolean) => ko ? "메자닌 (Mezzanine / Sub Debt)" : "Mezzanine / Subordinated Debt",
    icon: "🔀",
    rating: (ko: boolean) => ko ? "CCC 또는 무등급" : "CCC or unrated",
    rate: (ko: boolean) => ko ? "PIK 또는 현금+PIK (12–20%)" : "PIK or cash+PIK (12–20%)",
    tenor: (ko: boolean) => ko ? "5–8년, HY 후순위" : "5–8yr, subordinated to HY",
    security: (ko: boolean) => ko ? "무담보, 에쿼티 킥커 포함" : "Unsecured with equity kicker (warrants)",
    holder: (ko: boolean) => ko ? "특수 메자닌 펀드, 사모 신용 펀드" : "Specialist mezzanine funds, private credit funds",
    traded: (ko: boolean) => ko ? "사모, 유동성 거의 없음" : "Private, near-zero liquidity",
    pros: (ko: boolean) => ko ? "에쿼티 킥커로 높은 수익률, 선순위 대비 쿠폰 절감 가능" : "Equity kicker drives high returns, lower blended cost vs pure equity",
    cons: (ko: boolean) => ko ? "복잡한 구조, 최후순위 청산, 현금 쿠폰 없음(PIK)" : "Complex, last in line at liquidation, no cash coupon (PIK)",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    accentDot: "bg-amber-500",
  },
];

// ── Capital Structure Waterfall ───────────────────────────────────────────────
const CAPITAL_STACK = [
  { label: (ko: boolean) => ko ? "리볼빙 크레딧 퍼실리티 (RCF)" : "Revolving Credit Facility (RCF)", spread: "SOFR+200bp", size: "5–10%", priority: 1, lien: (ko: boolean) => ko ? "1순위 담보" : "1st lien secured", recovery: "90%+", color: "bg-emerald-500", width: 95, note: (ko: boolean) => ko ? "유동성 완충. 평시엔 미인출. 금융사 보유." : "Liquidity buffer. Usually undrawn. Held by banks." },
  { label: (ko: boolean) => ko ? "텀론 A (TLA)" : "Term Loan A (TLA)", spread: "SOFR+250bp", size: "10–20%", priority: 2, lien: (ko: boolean) => ko ? "1순위 담보, 상각 분할" : "1st lien, amortizing", recovery: "80–90%", color: "bg-teal-500", width: 82, note: (ko: boolean) => ko ? "은행 보유, 분기별 원금 상환. 현재는 드묾." : "Bank held, quarterly amortization. Rare today." },
  { label: (ko: boolean) => ko ? "텀론 B (TLB)" : "Term Loan B (TLB)", spread: "SOFR+350bp", size: "30–45%", priority: 3, lien: (ko: boolean) => ko ? "1순위 담보, 준불릿" : "1st lien, quasi-bullet", recovery: "60–80%", color: "bg-yellow-500", width: 70, note: (ko: boolean) => ko ? "기관 투자자(CLO) 보유. 레버리지드 론 시장의 핵심." : "Institutional (CLO) held. Core of leveraged loan market." },
  { label: (ko: boolean) => ko ? "2순위 론 (2nd Lien)" : "Second Lien Term Loan", spread: "SOFR+700bp", size: "0–15%", priority: 4, lien: (ko: boolean) => ko ? "2순위 담보" : "2nd lien secured", recovery: "20–50%", color: "bg-orange-500", width: 55, note: (ko: boolean) => ko ? "1순위 부족분 이후 회수. 헤지펀드, 특수 신용 펀드." : "Recovered after 1st lien deficit. HFs and special situation funds." },
  { label: (ko: boolean) => ko ? "HY 채권 (Senior Unsecured)" : "HY Bonds (Senior Unsecured)", spread: "T+500–800bp", size: "15–25%", priority: 5, lien: (ko: boolean) => ko ? "무담보" : "Unsecured", recovery: "20–40%", color: "bg-red-500", width: 42, note: (ko: boolean) => ko ? "공개 시장 거래. HY 펀드, 헤지펀드 보유." : "Publicly tradeable. HY funds, hedge funds." },
  { label: (ko: boolean) => ko ? "메자닌 / PIK" : "Mezzanine / PIK Notes", spread: "15–20% (cash+PIK)", size: "0–10%", priority: 6, lien: (ko: boolean) => ko ? "후순위" : "Subordinated", recovery: "0–20%", color: "bg-rose-500", width: 30, note: (ko: boolean) => ko ? "에쿼티 바로 위. PIK 복리 누적. 특수 펀드." : "Just above equity. PIK compounds. Specialist funds only." },
  { label: (ko: boolean) => ko ? "에쿼티 (PE 스폰서)" : "Equity (PE Sponsor)", spread: "목표 IRR 20%+", size: "25–40%", priority: 7, lien: (ko: boolean) => ko ? "최후순위" : "Last in line", recovery: (ko: boolean) => ko ? "0 또는 대성공" : "0 or a home run", color: "bg-gray-600", width: 18, note: (ko: boolean) => ko ? "PE 스폰서 투자금. 채무 상환 후 잔여가치 전부." : "PE sponsor capital. Gets residual value after all debt." },
];

// ── LevFin vs IG DCM ──────────────────────────────────────────────────────────
const LEVFIN_VS_IG = [
  { item: (ko: boolean) => ko ? "발행사 신용등급" : "Issuer Rating", ig: "BBB- / Baa3 이상", levfin: "BB+ / Ba1 이하" },
  { item: (ko: boolean) => ko ? "레버리지 (순부채/EBITDA)" : "Leverage (Net Debt/EBITDA)", ig: "1–3×", levfin: "4–7× (LBO: 5–8×)" },
  { item: (ko: boolean) => ko ? "주요 발행사" : "Typical Issuers", ig: (ko: boolean) => ko ? "다국적 기업, 소버린, 에이전시" : "MNCs, sovereigns, agencies", levfin: (ko: boolean) => ko ? "PE 피인수기업, 전략적 HY 기업, 폴른 에인절" : "PE-backed cos, strategic HY, fallen angels" },
  { item: (ko: boolean) => ko ? "주요 투자자" : "Primary Investors", ig: (ko: boolean) => ko ? "중앙은행, 보험사, 연기금, 장기 AM" : "Central banks, insurers, pensions, long-only AM", levfin: (ko: boolean) => ko ? "CLO, HY 펀드, 헤지펀드, 부실채권 펀드" : "CLOs, HY funds, hedge funds, distressed funds" },
  { item: (ko: boolean) => ko ? "코버넌트 구조" : "Covenant Structure", ig: (ko: boolean) => ko ? "경미 (IG 거의 없음)" : "Light (IG rarely has maintenance covenants)", levfin: (ko: boolean) => ko ? "발생형 코버넌트 (Cov-Lite), 과거엔 유지형" : "Incurrence covenants (Cov-Lite), historically maintenance" },
  { item: (ko: boolean) => ko ? "역사적 연간 부도율" : "Historical Annual Default Rate", ig: "0.05–0.1%", levfin: "3–5% (위기 시 10–15%)" },
  { item: (ko: boolean) => ko ? "스프레드 레인지" : "Spread Range", ig: "T+30–150bp (IG)", levfin: "SOFR+250–800bp (HY/Loan)" },
  { item: (ko: boolean) => ko ? "수익률 목표 (투자자)" : "Investor Yield Target", ig: (ko: boolean) => ko ? "안정적 수익, 자본보전" : "Stable income, capital preservation", levfin: (ko: boolean) => ko ? "6–12% (디폴트 리스크 보상)" : "6–12% (compensating for default risk)" },
];

// ── CLO 구조 ──────────────────────────────────────────────────────────────────
const CLO_TRANCHES = [
  { tranche: "AAA (Senior)", pct: 65, yield: "SOFR+140bp", note: (ko: boolean) => ko ? "최선순위. 원금 보호 최강. 은행, 보험사." : "Most senior. Strongest principal protection. Banks, insurers." },
  { tranche: "AA", pct: 9, yield: "SOFR+175bp", note: (ko: boolean) => ko ? "두번째 선순위. 기관 투자자." : "Second senior tranche. Institutional investors." },
  { tranche: "A", pct: 7, yield: "SOFR+220bp", note: (ko: boolean) => ko ? "세번째 선순위." : "Third senior tranche." },
  { tranche: "BBB (Mezzanine)", pct: 5, yield: "SOFR+330bp", note: (ko: boolean) => ko ? "메자닌. 손실 먼저 흡수 시작." : "Mezzanine. First to absorb losses." },
  { tranche: "BB (Junior Mezz)", pct: 4, yield: "SOFR+650bp", note: (ko: boolean) => ko ? "HY. 투기등급 CLO 투자자." : "HY rated. Speculative grade CLO investors." },
  { tranche: "Equity (Residual)", pct: 10, yield: "목표 15–20% IRR", note: (ko: boolean) => ko ? "CLO 매니저 + 특수 에쿼티 투자자. 레버리지 전체 수익." : "CLO manager + equity investors. Levered return on entire pool." },
];

// ── Default Rates ─────────────────────────────────────────────────────────────
const DEFAULT_RATE_DATA = [
  { year: "2007", rate: 1.0, label: "1.0%" },
  { year: "2008", rate: 4.1, label: "4.1%" },
  { year: "2009", rate: 11.2, label: "11.2% 🚨" },
  { year: "2010", rate: 3.8, label: "3.8%" },
  { year: "2015", rate: 3.2, label: "3.2%" },
  { year: "2019", rate: 2.9, label: "2.9%" },
  { year: "2020", rate: 8.1, label: "8.1% ⚡" },
  { year: "2021", rate: 1.8, label: "1.8%" },
  { year: "2022", rate: 1.3, label: "1.3%" },
  { year: "2023", rate: 4.6, label: "4.6%" },
  { year: "2024E", rate: 3.5, label: "~3.5%" },
];
const maxRate = Math.max(...DEFAULT_RATE_DATA.map(d => d.rate));

// ── Credit Cycle ──────────────────────────────────────────────────────────────
const CREDIT_CYCLE = [
  {
    phase: (ko: boolean) => ko ? "① 팽창기" : "① Expansion",
    icon: "📈",
    spreads: (ko: boolean) => ko ? "타이트 (HY BB: +200–250bp)" : "Tight (HY BB: +200–250bp)",
    leverage: (ko: boolean) => ko ? "레버리지 상승 (7–8× EBITDA)" : "Leverage rising (7–8× EBITDA)",
    covenants: (ko: boolean) => ko ? "Cov-Lite 우세, EBITDA 어드저스트 공격적" : "Cov-Lite dominant, aggressive EBITDA adds",
    behavior: (ko: boolean) => ko ? "이지머니. PE 딜 폭발. LBO 멀티플 최고점." : "Easy money. PE deal surge. LBO multiples peak.",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    era: "2006–07, 2017–18, 2021",
  },
  {
    phase: (ko: boolean) => ko ? "② 피크·경색 진입" : "② Peak → Tightening",
    icon: "⚠️",
    spreads: (ko: boolean) => ko ? "확대 시작 (BB: +300–400bp)" : "Widening (BB: +300–400bp)",
    leverage: (ko: boolean) => ko ? "신규 LBO 레버리지 제한 (6× 이하)" : "New LBO leverage constrained (below 6×)",
    covenants: (ko: boolean) => ko ? "일부 유지형 코버넌트 요구 시작" : "Some maintenance covenants returning",
    behavior: (ko: boolean) => ko ? "신규 발행 어려워짐. 미완성 LBO ('hung deal') 발생." : "New issuance gets harder. 'Hung deals' emerge.",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    dot: "bg-amber-500",
    era: "2007 H2, 2019, 2022",
  },
  {
    phase: (ko: boolean) => ko ? "③ 위기·부도 급증" : "③ Crisis → Default Spike",
    icon: "🔴",
    spreads: (ko: boolean) => ko ? "폭발 (BB: +600–1000bp+)" : "Blowout (BB: +600–1000bp+)",
    leverage: (ko: boolean) => ko ? "신규 발행 시장 사실상 폐쇄" : "Primary market effectively closed",
    covenants: (ko: boolean) => ko ? "코버넌트 위반, Waivers 요청 급증" : "Covenant breaches, waiver requests surge",
    behavior: (ko: boolean) => ko ? "부도 급증. 챕터 11. 부실채권 펀드 活" : "Default spike. Chapter 11s. Distressed funds activate.",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
    era: "2008–09, 2020 Q1-Q2",
  },
  {
    phase: (ko: boolean) => ko ? "④ 회복·재건" : "④ Recovery → Rebuild",
    icon: "🔄",
    spreads: (ko: boolean) => ko ? "축소 (BB: +350–450bp)" : "Compressing (BB: +350–450bp)",
    leverage: (ko: boolean) => ko ? "보수적 레버리지 (4–5× EBITDA)" : "Conservative leverage (4–5× EBITDA)",
    covenants: (ko: boolean) => ko ? "빡빡한 약관. 투자자 우호 조건." : "Tighter documentation. Investor-friendly terms.",
    behavior: (ko: boolean) => ko ? "기존 부실 기업 구조조정 완료. 신규 발행 재개." : "Workout completions. New issuance restarts.",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    dot: "bg-teal-500",
    era: "2010–11, 2020 H2",
  },
];

// ── Hilton LBO Case Study ─────────────────────────────────────────────────────
const HILTON_TIMELINE = [
  {
    year: "2007년 7월",
    event: (ko: boolean) => ko ? "블랙스톤 $26.9bn 인수 완료" : "Blackstone closes $26.9bn acquisition",
    detail: (ko: boolean) => ko
      ? "에쿼티 $5.5bn (20%), 부채 $21.4bn (80%). TLB $16bn + HY 채권 $5.4bn + 기타. 인수 멀티플 ~18× EV/EBITDA. 당시 최대 호텔 LBO."
      : "Equity $5.5bn (20%), debt $21.4bn (80%). TLB $16bn + HY bonds $5.4bn + other. ~18× EV/EBITDA. Largest hotel LBO at the time.",
    metric: "레버리지 7.5×",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
    sentiment: "bullish",
  },
  {
    year: "2008–09년",
    event: (ko: boolean) => ko ? "금융위기 — 호텔 RevPAR 20%+ 폭락" : "GFC — Hotel RevPAR collapses 20%+",
    detail: (ko: boolean) => ko
      ? "전 세계 호텔 가동률과 객실당 수입 급락. Hilton EBITDA 기준 레버리지가 11–12×까지 치솟음. 기술적 부도 직전. 블랙스톤은 손실 인식 없이 버팀."
      : "Worldwide hotel occupancy and RevPAR crash. Hilton's EBITDA leverage spiked to 11–12×. Near technical default. Blackstone holds without crystalizing loss.",
    metric: "레버리지 11–12× (위기)",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
    sentiment: "crisis",
  },
  {
    year: "2010–12년",
    event: (ko: boolean) => ko ? "운영 개선 + 채무 재구조화" : "Operations + Debt Restructuring",
    detail: (ko: boolean) => ko
      ? "블랙스톤이 $800mn 추가 에쿼티 투입. 호텔 IT 시스템 현대화, Waldorf/Conrad 브랜드 글로벌 확장. 채무 일부 장기 리파이낸스. EBITDA 회복."
      : "Blackstone injects additional $800mn equity. Modernizes hotel IT, expands Waldorf/Conrad globally. Refinances some debt longer. EBITDA recovers.",
    metric: "EBITDA 회복 +40%",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dot: "bg-blue-500",
    sentiment: "recovery",
  },
  {
    year: "2013년 12월",
    event: (ko: boolean) => ko ? "NYSE IPO $20/주 — 당시 최대 호텔 IPO" : "NYSE IPO at $20/share — Largest hotel IPO ever",
    detail: (ko: boolean) => ko
      ? "공모 $2.35bn. 기업가치 $32bn. 블랙스톤 지분 76% 유지. 인수 시 $26.9bn → IPO 시 $32bn. 에쿼티 가치 수 배 증가."
      : "Raised $2.35bn. Enterprise value $32bn. Blackstone retains 76% stake. Acquired at $26.9bn EV → IPO at $32bn EV. Equity value multiplied.",
    metric: "EV $26.9bn → $32bn",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    sentiment: "success",
  },
  {
    year: "2018년 완전 엑싯",
    event: (ko: boolean) => ko ? "블랙스톤 최종 지분 매각 완료" : "Blackstone completes full exit",
    detail: (ko: boolean) => ko
      ? "11년 보유. $5.5bn 에쿼티 → $14bn 이상 회수. MoM(투자금 대비 배수) 약 2.6×, IRR 약 21%. 당시 PE 역사상 가장 큰 수익 딜 중 하나."
      : "11-year hold. $5.5bn equity invested → $14bn+ returned. ~2.6× MoM, ~21% IRR. One of the largest absolute dollar returns in PE history.",
    metric: "MoM 2.6×, IRR 21%",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    dot: "bg-teal-500",
    sentiment: "exit",
  },
];

// ── Vs Toys R Us (Contrast) ───────────────────────────────────────────────────
const TOYS_VS_HILTON = [
  { item: (ko: boolean) => ko ? "LBO 연도" : "LBO Year", hilton: "2007년 $26.9bn", toys: "2005년 $6.6bn" },
  { item: (ko: boolean) => ko ? "PE 스폰서" : "PE Sponsor", hilton: "Blackstone", toys: "KKR + Bain + Vornado" },
  { item: (ko: boolean) => ko ? "초기 레버리지" : "Initial Leverage", hilton: "7.5× EBITDA", toys: "~8× EBITDA" },
  { item: (ko: boolean) => ko ? "산업 구조" : "Industry Dynamics", hilton: (ko: boolean) => ko ? "회복 가능한 사이클 산업 (여행)" : "Cyclical but recoverable (travel)", toys: (ko: boolean) => ko ? "구조적 붕괴 (e-커머스 → 오프라인 완구 사망)" : "Structural collapse (e-commerce kills physical toy retail)" },
  { item: (ko: boolean) => ko ? "위기 대응" : "Crisis Response", hilton: (ko: boolean) => ko ? "$800mn 추가 에쿼티, IT 투자, 글로벌 확장" : "$800mn equity injection, IT investment, global expansion", toys: (ko: boolean) => ko ? "연간 이자 $450mn → 아마존 대응 투자 불가" : "Annual interest $450mn → couldn't invest vs Amazon" },
  { item: (ko: boolean) => ko ? "최종 결과" : "Outcome", hilton: (ko: boolean) => ko ? "IPO 후 $14bn+ 회수. 역사적 성공." : "IPO exit, $14bn+ returned. Historic success.", toys: (ko: boolean) => ko ? "2017년 챕터 11 파산 → 2018년 청산. 직원 33,000명 해고." : "Chapter 11 in 2017 → liquidated 2018. 33,000 jobs lost." },
];

// ── Korea Angle ────────────────────────────────────────────────────────────────
const KOREA_PE_DEALS = [
  { firm: "MBK Partners", deal: "홈플러스", year: "2015", size: "7.2조원", note: (ko: boolean) => ko ? "국내 최대 LBO. 한국 PE 역사 바꾼 딜. 이후 재무 부담으로 논란." : "Largest Korean LBO ever. Redefined Korea PE. Controversial post-deal financial pressure.", outcome: (ko: boolean) => ko ? "복잡한 결말" : "Complex outcome" },
  { firm: "MBK Partners", deal: "코웨이 (Coway)", year: "2012", size: "1.2조원", note: (ko: boolean) => ko ? "정수기 렌탈 1위. 운영 개선 후 웅진에 되팜. 성공 케이스." : "Korea's #1 water purifier rental. Sold back to Woongjin after operational improvements. Success case.", outcome: (ko: boolean) => ko ? "성공 엑싯" : "Successful exit" },
  { firm: "KKR", deal: "OB맥주 (Anheuser-Busch)", year: "2009", size: "$1.8bn", note: (ko: boolean) => ko ? "맥주 브랜드 인수 후 2014년 AB InBev에 $5.8bn 재매각. 3× 이상 수익." : "Bought Korean beer brand, sold back to AB InBev for $5.8bn in 2014. 3×+ return.", outcome: (ko: boolean) => ko ? "대성공" : "Highly successful" },
  { firm: "Carlyle / Affinity", deal: "ADT Caps", year: "2014", size: "$1.4bn", note: (ko: boolean) => ko ? "한국 보안 1위. 이후 SK텔레콤 매각. 전형적 컨트롤 바이아웃." : "Korea's #1 security services. Sold to SK Telecom. Textbook control buyout.", outcome: (ko: boolean) => ko ? "성공" : "Successful" },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "왜 CLO 없이는 레버리지드 론 시장이 이 규모로 성장할 수 없었나요?"
      : "Why couldn't the leveraged loan market have grown to this size without CLOs?",
    a: (ko: boolean) => ko
      ? "레버리지드 론의 최대 문제는 '구매자'입니다. 론은 무담보 채권과 달리 공개 거래가 어렵고, 등급이 낮아(BB/B) 자본 규제가 있는 은행이 장기 보유하기 어렵습니다. CLO는 이 문제를 해결했습니다 — 다수의 론을 한데 묶어 다양한 신용등급 트랜치로 재포장합니다. AAA 트랜치는 은행·보험사도 살 수 있고, BB 트랜치는 헤지펀드가 삽니다. 결과적으로 론 시장의 약 65%를 CLO가 흡수합니다. CLO 수요가 사라지면 레버리지드 론 스프레드는 즉각 100–200bp 확대될 것입니다."
      : "The core problem with leveraged loans is finding buyers. Unlike bonds, loans are hard to trade publicly, and their low ratings (BB/B) make it difficult for capital-constrained banks to hold long-term. CLOs solved this — they pool many loans and repackage them into tranches of varying credit quality. The AAA tranche can be bought by banks and insurers; the BB tranche goes to hedge funds. As a result, ~65% of all leveraged loans sit in CLOs. If CLO demand disappeared, leveraged loan spreads would widen 100–200bp immediately.",
  },
  {
    q: (ko: boolean) => ko
      ? "Cov-Lite(코버넌트 라이트)가 왜 위험할 수 있나요? 그리고 왜 시장이 수용했나요?"
      : "Why can Cov-Lite be dangerous? And why did the market accept it?",
    a: (ko: boolean) => ko
      ? "코버넌트 라이트(Cov-Lite)란 레버리지 유지 테스트 같은 유지형 코버넌트(Maintenance Covenant)가 없는 대출입니다. 기존 대출은 분기마다 '레버리지 6× 이내' 같은 테스트를 통과해야 했고, 위반 시 대출자가 조기 상환을 요구할 수 있었습니다. Cov-Lite에서는 이 안전장치가 없습니다. 위험한 이유: ① 기업 악화가 초기에 감지되지 않습니다. ② 대출자가 개입 레버리지를 잃습니다. ③ 결과적으로 부도 회수율이 낮아질 수 있습니다. 시장이 수용한 이유: CLO와 론 펀드들이 수익률을 위해 경쟁하면서 발행사 요구를 수용했고, '다음 번엔 팔면 된다'는 유동성 가정이 퍼졌습니다. 2024년 기준 레버리지드 론의 85%가 Cov-Lite입니다."
      : "Cov-Lite means a loan lacks maintenance covenants (e.g., quarterly leverage tests). Traditional loans required passing tests like 'leverage below 6×' — a violation gave lenders the right to demand early repayment. That safeguard is absent in Cov-Lite. Why dangerous: ① Deterioration goes undetected early. ② Lenders lose intervention leverage. ③ Default recovery rates may be lower. Why accepted: CLOs and loan funds compete for yield and accommodate borrower demands; the 'just sell it' liquidity assumption spread. By 2024, 85% of leveraged loans are Cov-Lite.",
  },
  {
    q: (ko: boolean) => ko
      ? "PE 스폰서가 LBO에서 80% 이상 부채를 쓰는 이유가 있나요? 왜 에쿼티를 더 쓰지 않나요?"
      : "Why do PE sponsors use 80%+ debt in LBOs? Why not more equity?",
    a: (ko: boolean) => ko
      ? "두 가지 이유입니다. ① 레버리지 효과(수익률 증폭): $100 자산을 $20 에쿼티 + $80 부채로 샀을 때 자산 가치가 $150으로 오르면 에쿼티 수익률은 250%입니다. 에쿼티만 $100 썼다면 50% 수익이었겠죠. ② 세금 혜택: 이자비용은 손금산입(tax deductible). EBITDA가 $100이고 이자비용이 $60이면 과세소득은 $40입니다. 에쿼티만 썼다면 $100 전체가 과세소득입니다. 단, 레버리지는 양방향입니다 — 수익을 극대화하지만 손실도 극대화합니다. Toys R Us가 그 예입니다. 부채 비용($450mn/년)이 디지털 전환 투자를 막아 결국 파산으로 이어졌습니다."
      : "Two reasons. ① Leverage amplifies returns: buying a $100 asset with $20 equity + $80 debt, if it rises to $150, equity return is 250%. All-equity would have been 50%. ② Tax shield: interest expense is tax-deductible. If EBITDA is $100 and interest is $60, taxable income is $40. All-equity means $100 is taxable. But leverage is bidirectional — it amplifies losses too. Toys R Us is the lesson: $450mn/year in debt service prevented investment in digital transformation, leading to bankruptcy.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국에 진정한 HY 채권 시장이 없는 이유는 무엇인가요?"
      : "Why isn't there a true HY bond market in Korea?",
    a: (ko: boolean) => ko
      ? "구조적인 이유가 세 가지입니다. ① 투자자 베이스: 한국 기관 투자자(생보, 연기금)는 Solvency II/기관 규정상 BB 이하 채권 보유에 불리한 자본 부담이 있어 HY 수요가 약합니다. ② 발행사 구조: 한국 대기업(재벌)은 내부 자금 조달(그룹사 간 차입)이나 은행 대출을 선호하고, 글로벌 신용등급이 대부분 IG입니다. ③ 역사적 맥락: 1997년 IMF 위기 이후 기업 레버리지에 대한 사회적 트라우마가 있어 고레버리지 발행에 보수적입니다. 결과적으로 한국의 진정한 HY는 일부 중소기업 사모채(PF, ABS)나 크레딧 이벤트 후 전락한 폴른 에인절 수준입니다."
      : "Three structural reasons. ① Investor base: Korean institutional investors (life insurers, pensions) face capital charges for holding sub-BB bonds under Solvency II equivalents — weak domestic HY demand. ② Issuer structure: Korean chaebols prefer internal group financing or bank loans, and most have IG global ratings. ③ Historical context: post-1997 IMF crisis trauma around corporate leverage makes high-leverage issuance conservative. As a result, genuine Korean HY is limited to some SME private bonds, PF/ABS, or fallen angels post-credit events.",
  },
  {
    q: (ko: boolean) => ko
      ? "블랙스톤이 힐튼에서 금융위기를 버틸 수 있었던 핵심 이유는 무엇인가요? 토이저러스와 같은 상황 아니었나요?"
      : "What was the core reason Blackstone survived the GFC with Hilton when Toys R Us didn't?",
    a: (ko: boolean) => ko
      ? "두 가지 핵심 차이가 있습니다. ① 산업 구조: 호텔업은 경기 사이클 산업입니다 — 불황엔 RevPAR이 폭락하지만 경기가 회복되면 반드시 복구됩니다. Toys R Us가 직면한 것은 사이클이 아닌 구조적 파괴(e-커머스)였습니다. 경기가 좋아져도 아마존은 사라지지 않습니다. ② 블랙스톤의 추가 투자: 최악의 시기에 $800mn 추가 에쿼티를 투입해 IT 인프라와 브랜드 확장을 계속했습니다. Toys R Us 스폰서들은 추가 자금을 쓰지 않았습니다. 교훈: LBO 성공은 레버리지 크기보다 ①사업의 회복력과 ②스폰서의 운영 능력이 더 결정적입니다."
      : "Two critical differences. ① Industry structure: hospitality is cyclical — RevPAR collapses in recession but always recovers. Toys R Us faced structural destruction (e-commerce), not just a cycle. The economy recovering didn't make Amazon disappear. ② Blackstone's additional commitment: they injected $800mn more equity at the worst point to keep investing in IT and brand. Toys R Us sponsors didn't add capital. Lesson: LBO success depends less on leverage size than ①business resilience and ②sponsor operational capability.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Moody's Investors Service", title: "Annual Default Study: Corporates", url: "https://www.moodys.com/researchandratings/market-segment/corporate-finance/-/003006/4294966460/4294966694/0/0/-/0/-/-/-/-/-/-/-/-/en/global/pdf/-/rra", source: "Moody's, 2024" },
  { id: 2, author: "Ares Capital / LCD S&P", title: "US Leveraged Loan Market Review", url: "https://www.spglobal.com/marketintelligence/en/news-insights/research/leveraged-loan-market", source: "S&P Global / LCD, 2024" },
  { id: 3, author: "Blackstone", title: "Hilton Hotels Investment Case Study (Investor Presentation)", url: "https://www.blackstone.com/our-businesses/private-equity/portfolio/hilton/", source: "Blackstone, 2018" },
  { id: 4, author: "Loan Syndications and Trading Association (LSTA)", title: "The LSTA's Complete Credit Agreement Guide", url: "https://www.lsta.org/", source: "LSTA, 2023" },
  { id: 5, author: "Bank of America Securities", title: "High Yield Bond Market Annual Review", url: "https://www.bofasecurities.com/", source: "BofA Global Research, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinEcosystemClient({ concept, lang }: Props) {
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
              ? "레버리지드 파이낸스 전체 지도: HY채권·레버리지드 론·LBO 생태계"
              : "The LevFin Ecosystem: High Yield Bonds, Leveraged Loans & LBO Universe"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "블랙스톤이 힐튼을 $26.9bn에 인수할 때 에쿼티는 $5.5bn뿐이었습니다. 나머지 $21.4bn은 어디서 왔고, 누가 빌려줬으며, 그 돈은 어떤 구조로 쌓여 있었을까요. 레버리지드 파이낸스는 IG DCM과 근본적으로 다른 게임입니다 — 싸게 조달하는 게 목표가 아니라, 비싼 돈을 써도 그보다 더 높은 수익을 내는 구조를 설계하는 것이 목표입니다."
              : "When Blackstone acquired Hilton for $26.9bn, equity was only $5.5bn. Where did the remaining $21.4bn come from, who lent it, and how was that debt structured? Leveraged finance is a fundamentally different game from IG DCM — the goal isn't cheap funding, but designing a structure where expensive money still generates a higher return than its cost."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 시장 규모 ──────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. LevFin 시장은 얼마나 큰가" : "1. How Big Is the LevFin Market?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "글로벌 LevFin 시장은 미국 기준만 약 $4조 규모입니다. IG DCM과 다르게, 이 시장의 주요 참여자와 가격 형성 메커니즘은 전혀 다릅니다."
              : "The US LevFin market alone is approximately $4 trillion. Unlike IG DCM, the participants and price discovery mechanisms are fundamentally different."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {MARKET_SIZE.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <p className="font-black text-3xl text-gray-900 dark:text-gray-50 mb-1">{m.size}</p>
                <p className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">{m.label(ko)}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                  <div className={`h-1.5 rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{m.detail(ko)}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="font-bold text-sm text-yellow-800 dark:text-yellow-300 mb-1.5">
                  {ko ? "왜 IG DCM보다 수익률이 높은가 — 한 줄 정의" : "Why Higher Yield Than IG DCM — One-line Definition"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "HY 투자자는 연 평균 3–5%의 채권이 부도날 것을 알면서도 투자합니다. 나머지 95–97%의 채권이 8–12% 수익을 내면, 부도 손실을 감안해도 IG 대비 초과 수익이 납니다. LevFin의 모든 가격, 구조, 코버넌트는 이 기대 부도 손실을 어떻게 배분하느냐에 관한 이야기입니다."
                    : "HY investors know that 3–5% of bonds will default annually. But the remaining 95–97% yielding 8–12% generates excess return over IG even after default losses. Every LevFin price, structure, and covenant is about how to allocate this expected default loss."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 2: Three Pillars ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. LevFin 3가지 핵심 상품" : "2. The Three LevFin Products"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "같은 발행사가 세 가지 상품을 동시에 쓰는 경우도 있습니다. 실제 LBO 자본구조에서는 TLB + HY 채권 + 메자닌을 층층이 쌓습니다."
              : "The same issuer often uses all three products simultaneously. In a real LBO capital structure, TLB + HY bonds + mezzanine stack in layers."}
          </p>
          <div className="space-y-4">
            {THREE_PILLARS.map((p, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${p.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-base text-gray-900 dark:text-gray-50 mb-3">{p.name(ko)}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-xs mb-3">
                      {[
                        { k: ko ? "신용등급" : "Rating", v: typeof p.rating === "function" ? p.rating(ko) : p.rating },
                        { k: ko ? "금리 구조" : "Rate", v: p.rate(ko) },
                        { k: ko ? "만기" : "Tenor", v: p.tenor(ko) },
                        { k: ko ? "담보" : "Security", v: p.security(ko) },
                        { k: ko ? "주요 투자자" : "Investors", v: p.holder(ko) },
                        { k: ko ? "거래 방식" : "Trading", v: p.traded(ko) },
                      ].map((row, j) => (
                        <div key={j}>
                          <span className="text-gray-400 dark:text-gray-500 uppercase tracking-wide text-[10px]">{row.k}: </span>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{row.v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${p.badge}`}>
                        ✅ {ko ? "장점" : "Pros"}: {p.pros(ko)}
                      </div>
                      <div className="rounded-lg px-3 py-1.5 text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        ⚠️ {ko ? "단점" : "Cons"}: {p.cons(ko)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 3: Capital Stack Waterfall ──────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 자본구조 워터폴 — LBO 딜의 층층이 쌓인 부채" : "3. Capital Structure Waterfall — The Layered Debt of an LBO"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "LBO 자본구조는 수권 순위(Seniority)로 층층이 쌓입니다. 위에 있을수록 먼저 상환받고, 아래에 있을수록 더 많은 리스크를 지고 더 높은 수익을 요구합니다."
              : "An LBO capital structure stacks by seniority. The higher up, the earlier repaid. The lower down, the more risk taken and the higher return demanded."}
          </p>
          <div className="space-y-2">
            {CAPITAL_STACK.map((layer, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 overflow-hidden">
                <div className="flex items-start gap-0">
                  {/* Left priority bar */}
                  <div className={`w-1.5 shrink-0 self-stretch ${layer.color}`} />
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 w-3">{layer.priority}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{layer.label(ko)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono shrink-0">
                        <span className="text-gray-500">{layer.spread}</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">{ko ? "비중" : "Size"}: <span className="font-bold text-gray-700 dark:text-gray-300">{layer.size}</span></span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">{ko ? "회수" : "Recovery"}: <span className={`font-bold ${i < 3 ? "text-emerald-600 dark:text-emerald-400" : i < 5 ? "text-amber-600 dark:text-amber-400" : "text-rose-600 dark:text-rose-400"}`}>{typeof layer.recovery === "function" ? layer.recovery(ko) : layer.recovery}</span></span>
                      </div>
                    </div>
                    {/* Width bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                      <div className={`h-1.5 rounded-full ${layer.color}`} style={{ width: `${layer.width}%` }} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        i === 0 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" :
                        i < 3 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" :
                        i < 5 ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" :
                        "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
                      }`}>{layer.lien(ko)}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{layer.note(ko)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
            {ko ? "* 힐튼 LBO(2007) 기준 재구성. 실제 구조는 딜마다 다름." : "* Reconstructed based on Hilton LBO (2007) structure. Actual structures vary by deal."}
          </p>
        </motion.section>

        {/* ── 섹션 4: LevFin vs IG ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. LevFin vs IG DCM — 완전히 다른 게임" : "4. LevFin vs IG DCM — A Completely Different Game"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "같은 \"채권\"이라는 단어를 써도, LevFin 뱅커와 DCM 뱅커는 다른 언어를 씁니다."
              : "Despite using the same word 'bond,' LevFin bankers and DCM bankers speak different languages."}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-3 text-teal-600 dark:text-teal-400">IG DCM</th>
                    <th className="text-left px-4 py-3 text-yellow-600 dark:text-yellow-400">LevFin / HY</th>
                  </tr>
                </thead>
                <tbody>
                  {LEVFIN_VS_IG.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{typeof row.ig === "function" ? row.ig(ko) : row.ig}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 font-medium">{typeof row.levfin === "function" ? row.levfin(ko) : row.levfin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 5: CLO 생태계 ────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. CLO 없이는 레버리지드 론 시장이 없다" : "5. Without CLOs, There Would Be No Leveraged Loan Market"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "레버리지드 론의 65%는 CLO(Collateralized Loan Obligation)가 보유합니다. CLO는 레버리지드 론 시장의 산소입니다."
              : "65% of leveraged loans sit in CLOs (Collateralized Loan Obligations). CLOs are the oxygen of the leveraged loan market."}
          </p>
          {/* CLO 구조 설명 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl shrink-0">🏗️</span>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1.5">{ko ? "CLO 작동 원리" : "How a CLO Works"}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "CLO 매니저가 150–250개의 레버리지드 론을 모아 풀(Pool)을 형성합니다. 이 풀의 현금흐름을 분할해 AAA부터 에쿼티까지 다양한 트랜치로 재포장합니다. 분산 투자로 개별 부도 위험을 완화하고, 트랜치 구조로 다양한 리스크 선호 투자자를 끌어들입니다. CLO 전형 규모: $500mn–1bn."
                    : "A CLO manager pools 150–250 leveraged loans. They slice the pool's cash flows into tranches from AAA to equity. Diversification mitigates individual default risk; the tranche structure attracts investors with different risk appetites. Typical CLO size: $500mn–1bn."}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {CLO_TRANCHES.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <div className={`h-3 rounded-full ${
                      t.tranche.startsWith("AAA") ? "bg-emerald-500" :
                      t.tranche.startsWith("AA") ? "bg-teal-500" :
                      t.tranche.startsWith("A") ? "bg-blue-400" :
                      t.tranche.startsWith("BBB") ? "bg-yellow-500" :
                      t.tranche.startsWith("BB") ? "bg-orange-500" :
                      "bg-rose-600"
                    }`} style={{ width: `${t.pct * 5}%` }} />
                  </div>
                  <div className="shrink-0 min-w-[200px] sm:min-w-[260px]">
                    <span className="font-mono font-bold text-xs text-gray-800 dark:text-gray-200 mr-2">{t.tranche}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t.pct}% | {t.yield}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
              {ko ? "* 전형적인 CLO 트랜치 구조. 실제 비중은 매니저마다 다름." : "* Typical CLO tranche structure. Actual weights vary by manager."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 6: 신용 사이클 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. LevFin 신용 사이클 — 시장은 4단계를 순환한다" : "6. The LevFin Credit Cycle — Four Phases"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {ko
              ? "아래 부도율 차트를 먼저 보세요. 2009년 11%, 2020년 8% — 이 두 번의 스파이크가 LevFin의 성격을 설명합니다."
              : "First, the default rate chart below. 11% in 2009, 8% in 2020 — these two spikes define LevFin's character."}
          </p>

          {/* Default Rate Chart */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "HY 채권 연간 부도율 (Moody's 기준)" : "HY Bond Annual Default Rate (Moody's)"}
            </p>
            {/* BAR CHART — 고정 px 높이로 정확하게 렌더 */}
            <div className="flex items-end gap-1.5" style={{ height: "140px" }}>
              {DEFAULT_RATE_DATA.map((d, i) => {
                const barPx = Math.round((d.rate / maxRate) * 100);
                const color = d.rate >= 8 ? "bg-rose-500" : d.rate >= 4 ? "bg-orange-400" : "bg-yellow-400";
                return (
                  <div key={i} className="flex flex-col items-center justify-end flex-1 min-w-0" style={{ height: "140px" }}>
                    {/* 퍼센트 레이블 */}
                    <span className="text-[8px] font-bold text-gray-500 dark:text-gray-400 mb-0.5 leading-none">
                      {d.label}
                    </span>
                    {/* 바 — height 0 → barPx px 애니메이션 */}
                    <motion.div
                      className={`w-full rounded-t-sm ${color}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: barPx }}
                      viewport={VP}
                      transition={{ duration: 0.55, delay: i * 0.045, ease: "easeOut" }}
                    />
                    {/* 연도 레이블 */}
                    <span className="text-[8px] text-gray-400 dark:text-gray-500 mt-1 whitespace-nowrap leading-none">
                      {d.year}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4 mt-3 flex-wrap">
              {[
                { color: "bg-rose-500", label: ko ? "위기 수준 (8%+)" : "Crisis level (8%+)" },
                { color: "bg-orange-400", label: ko ? "스트레스 (4–8%)" : "Stressed (4–8%)" },
                { color: "bg-yellow-400", label: ko ? "정상 (4% 미만)" : "Normal (<4%)" },
              ].map((l, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                  <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>

          {/* Cycle Phases */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CREDIT_CYCLE.map((phase, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${phase.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{phase.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{phase.phase(ko)}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{phase.era}</p>
                  </div>
                  <div className={`ml-auto w-2.5 h-2.5 rounded-full ${phase.dot}`} />
                </div>
                <div className="space-y-1.5 text-xs">
                  {[
                    { k: ko ? "스프레드" : "Spreads", v: phase.spreads(ko) },
                    { k: ko ? "레버리지" : "Leverage", v: phase.leverage(ko) },
                    { k: ko ? "코버넌트" : "Covenants", v: phase.covenants(ko) },
                  ].map((item, j) => (
                    <div key={j} className="flex gap-2">
                      <span className="text-gray-400 dark:text-gray-500 shrink-0">{item.k}:</span>
                      <span className="text-gray-700 dark:text-gray-300">{item.v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-medium text-gray-600 dark:text-gray-400 mt-2 pt-2 border-t border-white/40 dark:border-black/20">
                  {phase.behavior(ko)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 7: Hilton Case Study ────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 케이스 스터디 — 블랙스톤·힐튼: LBO의 완전한 생애주기" : "7. Case Study — Blackstone·Hilton: The Full LBO Lifecycle"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "금융위기를 정면으로 맞고도 살아남아 역사상 가장 큰 PE 수익을 낸 딜. 2007년 인수부터 2018년 완전 엑싯까지의 11년."
              : "The deal that survived a head-on financial crisis and returned the largest absolute dollar profit in PE history. Eleven years from the 2007 acquisition to the 2018 full exit."}
          </p>

          {/* Timeline */}
          <div className="relative mb-8">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {HILTON_TIMELINE.map((item, i) => (
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
                          item.sentiment === "crisis" ? "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" :
                          item.sentiment === "recovery" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" :
                          item.sentiment === "success" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" :
                          "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
                        }`}>
                          {item.metric}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hilton vs Toys R Us */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "힐튼 성공 vs 토이저러스 실패 — 같은 연도 비슷한 규모, 왜 결과가 달랐나" : "Hilton Success vs Toys R Us Failure — Similar Year, Similar Scale, Why Different Outcomes?"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-2.5 text-emerald-600 dark:text-emerald-400">🏨 Hilton</th>
                    <th className="text-left px-4 py-2.5 text-rose-600 dark:text-rose-400">🧸 Toys R Us</th>
                  </tr>
                </thead>
                <tbody>
                  {TOYS_VS_HILTON.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-400 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{typeof row.hilton === "function" ? row.hilton(ko) : row.hilton}</td>
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{typeof row.toys === "function" ? row.toys(ko) : row.toys}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3">
            <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400 uppercase tracking-widest mb-1.5">
              💡 {ko ? "LevFin의 핵심 교훈" : "Core LevFin Lesson"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "레버리지는 좋은 사업을 더 좋게 만들고, 나쁜 사업을 파산으로 보냅니다. 힐튼은 경기 사이클에 취약했지만 사업 모델 자체는 건전했고, 블랙스톤이 추가 자원을 투입할 의지가 있었습니다. 토이저러스는 사업 모델이 구조적으로 무너지는 중이었는데 연 $450mn 이자가 투자 여력을 완전히 막아버렸습니다. LevFin 분석의 첫 번째 질문은 항상 \"이 사업이 레버리지를 감당할 수 있는가\"입니다 — 재무 모델이 아닌 사업 전략에서 시작해야 합니다."
                : "Leverage makes good businesses better and sends bad businesses to bankruptcy. Hilton was vulnerable to economic cycles but the business model itself was sound, and Blackstone had the will to inject more resources. Toys R Us had a structurally failing business model, and $450mn annual interest completely blocked any investment capacity. The first question in LevFin analysis is always 'can this business sustain the leverage?' — it starts from business strategy, not financial models."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 8: 한국 PE 시장 ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "8. 한국 LevFin — 성장하는 PE 시장, 부재한 HY 시장" : "8. Korean LevFin — Growing PE Market, Missing HY Market"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "한국에는 진정한 공개 HY 채권 시장이 없습니다. 그러나 PE 주도 LBO 딜은 꾸준히 증가 중입니다."
              : "Korea lacks a true public HY bond market. But PE-driven LBO deals are growing steadily."}
          </p>
          <div className="space-y-3 mb-6">
            {KOREA_PE_DEALS.map((deal, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0">🇰🇷</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{deal.firm}</span>
                      <span className="text-gray-400">·</span>
                      <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">{deal.deal}</span>
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-400">({deal.year}, {deal.size})</span>
                      <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        deal.outcome(ko).includes("성공") || deal.outcome(ko).includes("Success") || deal.outcome(ko).includes("Successful")
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                      }`}>
                        {deal.outcome(ko)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{deal.note(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              🔭 {ko ? "한국 LevFin의 미래" : "The Future of Korean LevFin"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "한국 PE 시장은 AUM 기준 아시아 3위권으로 성장했습니다(MBK, IMM, VIG, Hahn & Co.). 그러나 딜 파이낸싱은 여전히 은행 신디케이티드 론 중심입니다 — 공개 HY 채권이 아니라. 이는 한국 투자자 베이스(IG 선호)와 KDB·산업은행 주도 정책금융의 대체 역할 때문입니다. 글로벌 HY 투자자들이 한국 PE 딜에 점차 참여하면서 진정한 LevFin 시장이 형성될 가능성이 있습니다."
                : "Korea's PE market has grown to Asia top-3 by AUM (MBK, IMM, VIG, Hahn & Co.). But deal financing remains bank syndicated loan-dominated — not public HY bonds. This reflects Korea's IG-preferring investor base and the substitute role of policy banks (KDB, IBK). As global HY investors increasingly participate in Korean PE deals, a genuine LevFin market may emerge."}
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

        {/* ── 이 챕터가 분석하는 실제 딜 ─────────────────────────── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-14"
        >
          <motion.p variants={fadeUp()} className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            {ko ? "이 챕터가 분석하는 실제 딜 — LevFin 관점" : "Real Deals Analyzed Through LevFin Lens"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/kkr-rjr-nabisco`,
                initials: "KKR",
                bg: "bg-gray-800",
                title: ko ? "KKR × RJR Nabisco (1989) — HY채권 생태계의 탄생" : "KKR × RJR Nabisco (1989) — The Birth of the HY Bond Ecosystem",
                sub: ko ? "$31.1B LBO, 정크본드·PIK·브리지론 7-레이어 구조 실전 해부" : "$31.1B LBO — junk bonds, PIK, bridge loan 7-layer structure dissected",
              },
              {
                href: `${base.replace("market-101", "deals")}/mbk-homeplus`,
                initials: "MBK",
                bg: "bg-slate-700",
                title: ko ? "MBK × 홈플러스 (2015) — 한국형 LBO 에코시스템" : "MBK × Homeplus (2015) — Korean LBO Ecosystem",
                sub: ko ? "7.2조원 아시아 최대 유통 LBO, 한국 인수금융 생태계와 S&L 구조" : "₩7.2T Asia's largest retail LBO — Korean acquisition finance ecosystem & S&L",
              },
            ].map((d, i) => (
              <motion.div key={d.href} variants={fadeUp(i * 0.06)}>
                <Link href={d.href} className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${d.bg} flex items-center justify-center`}>
                    <span className="text-white text-[9px] font-black leading-none">{d.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">{d.title}</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug line-clamp-2">{d.sub}</p>
                  </div>
                  <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "LevFin 전체 지도 — HY채권·레버리지드 론·LBO 생태계 | Deal Story"
            : "LevFin Ecosystem — High Yield Bonds, Leveraged Loans & LBO Universe | Deal Story"}
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

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("levfin-ecosystem");
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
    </div>
  );
}
