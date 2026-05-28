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
  { slug: "levfin-distressed",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 부실채권·구조조정": "Ch.6 Distressed"      },
  { slug: "levfin-cases",          ch: 7, title: (ko: boolean) => ko ? "Ch.7 케이스 종합"      : "Ch.7 Case Studies"    },
];
const thisCh = 6;

// ── Distress Signals ──────────────────────────────────────────────────────────
const DISTRESS_SIGNALS = [
  {
    signal: (ko: boolean) => ko ? "PIK 이자 선택 (PIK Election)" : "PIK Interest Election",
    severity: "AMBER" as const,
    description: (ko: boolean) => ko
      ? "현금 이자 대신 PIK 선택 → 현금 부족 신호. 채권 가격 즉시 하락 5–10%"
      : "Elects PIK over cash interest → cash shortage signal. Bond price drops 5–10% immediately.",
    marketAction: (ko: boolean) => ko
      ? "HY 채권 세컨더리 가격 80→70센트로 하락, 스프레드 +200bp 이상"
      : "HY bond secondary price drops 80→70 cents; spread widens +200bp+.",
  },
  {
    signal: (ko: boolean) => ko ? "코버넌트 위반 + Cure (Equity Cure)" : "Covenant Breach + Equity Cure",
    severity: "AMBER" as const,
    description: (ko: boolean) => ko
      ? "레버리지 코버넌트 위반 → PE 스폰서가 추가 에쿼티 주입해 '치료'. 시간 벌기"
      : "Leverage covenant breach → PE sponsor injects equity to 'cure.' Buying time.",
    marketAction: (ko: boolean) => ko
      ? "투자자들이 'cure 1회 발동 = 2회 이상은 시간문제'로 해석"
      : "Investors read 'one cure triggered = second cure is only a matter of time.'",
  },
  {
    signal: (ko: boolean) => ko ? "리볼버 전액 인출 (Full Revolver Drawdown)" : "Full Revolver Drawdown",
    severity: "RED" as const,
    description: (ko: boolean) => ko
      ? "운전자금 부족으로 리볼버 전액 드로우 → 현금 소진 임박 신호"
      : "Full draw on revolver due to working capital shortfall → imminent cash exhaustion signal.",
    marketAction: (ko: boolean) => ko
      ? "신용 에이전시 즉각 워치리스트 등재, 채권 가격 65센트 이하로"
      : "Rating agencies place on watchlist immediately; bond price falls below 65 cents.",
  },
  {
    signal: (ko: boolean) => ko ? "배당 중단 및 PE 수수료 중단" : "Dividend Suspension & PE Fee Waiver",
    severity: "AMBER" as const,
    description: (ko: boolean) => ko
      ? "PE 스폰서가 연간 관리 수수료 수취 중단 → 딜이 코버넌트상 배당 불가 상태"
      : "PE sponsor stops taking annual management fees → deal is covenant-restricted from dividends.",
    marketAction: (ko: boolean) => ko
      ? "시장은 이를 'PE가 이미 포기했다'는 신호로 해석하기도 함"
      : "Market sometimes reads this as 'PE has already given up on this investment.'",
  },
  {
    signal: (ko: boolean) => ko ? "등급 하향 CCC (Rating Downgrade to CCC)" : "Rating Downgrade to CCC",
    severity: "RED" as const,
    description: (ko: boolean) => ko
      ? "CCC 등급 → CLO 포트폴리오 한도 위반(CLO는 CCC 7.5% 한도). CLO 강제매도 발생"
      : "CCC rating → CLO portfolio breaches CCC bucket limit (typically 7.5%). Forced CLO selling.",
    marketAction: (ko: boolean) => ko
      ? "채권 가격 50–60센트로 급락. 헤지펀드 진입 시작."
      : "Bond price plunges to 50–60 cents. Hedge funds start entering.",
  },
  {
    signal: (ko: boolean) => ko ? "감사 의견 '계속 기업 불확실성'" : "Going Concern Qualification",
    severity: "CRITICAL" as const,
    description: (ko: boolean) => ko
      ? "감사인이 '12개월 내 존속 불확실' 의견 → 기술적 디폴트 유발 가능"
      : "Auditor qualifies '12-month going concern uncertainty' → can trigger technical default.",
    marketAction: (ko: boolean) => ko
      ? "채권 가격 30–40센트. 구조조정 어드바이저 고용 공식화"
      : "Bond price 30–40 cents. Restructuring advisor engagement formalized.",
  },
  {
    signal: (ko: boolean) => ko ? "이자 미납 (Missed Interest Payment)" : "Missed Interest Payment",
    severity: "CRITICAL" as const,
    description: (ko: boolean) => ko
      ? "30일 이내 cure 기간. Cure 실패 시 Event of Default → 가속상환 청구 가능"
      : "30-day cure period. Failed cure triggers Event of Default → acceleration demand possible.",
    marketAction: (ko: boolean) => ko
      ? "채권 가격 20–30센트. 파산 법무팀 가동."
      : "Bond price 20–30 cents. Bankruptcy legal teams activated.",
  },
  {
    signal: (ko: boolean) => ko ? "채권 가격 < 50센트" : "Bond Trading Below 50 Cents",
    severity: "CRITICAL" as const,
    description: (ko: boolean) => ko
      ? "시장이 이미 파산을 가격에 반영. 디폴트 확률 70%+ implied"
      : "Market is already pricing in bankruptcy. Implied default probability 70%+.",
    marketAction: (ko: boolean) => ko
      ? "헤지펀드가 기존 보유자에게 매수 오퍼 → '부실채권 시장' 형성"
      : "Hedge funds offer bids to existing holders → 'distressed market' forms.",
  },
];

// ── Restructuring Options ─────────────────────────────────────────────────────
const RESTRUCTURING_OPTIONS = [
  {
    name: (ko: boolean) => ko ? "Amend & Extend (A&E)" : "Amend & Extend (A&E)",
    nameEn: "Amend & Extend",
    mechanism: (ko: boolean) => ko
      ? "기존 대출 보유자의 50.1% 이상이 만기 연장에 동의. 추가 수수료(12.5–25bp) + 스프레드 인상(+50–100bp) 제공"
      : "50.1%+ of existing lenders agree to extend maturity. Additional fee (12.5–25bp) + spread increase (+50–100bp) offered.",
    timeline: (ko: boolean) => ko ? "4–8주" : "4–8 weeks",
    pros: (ko: boolean) => ko
      ? "파산 회피, 주주 가치 보존, 운영 연속성"
      : "Avoids bankruptcy, preserves shareholder value, operational continuity.",
    cons: (ko: boolean) => ko
      ? "만기만 연장, 근본 문제 미해결. 2–3년 후 동일 문제 재발 가능"
      : "Only extends maturity; root cause unresolved. Same wall hit again in 2–3 years.",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    icon: "🔄",
  },
  {
    name: (ko: boolean) => ko ? "임의 조정 (Out-of-Court Restructuring)" : "Out-of-Court Restructuring",
    nameEn: "Out-of-Court",
    mechanism: (ko: boolean) => ko
      ? "발행사-채권자 협상. 부채 감면(Hair-cut), 부채→에쿼티 전환, 이자율 인하, 만기 연장 패키지"
      : "Issuer-creditor negotiation. Hair-cut, debt-to-equity conversion, rate reduction, maturity extension package.",
    timeline: (ko: boolean) => ko ? "3–6개월" : "3–6 months",
    pros: (ko: boolean) => ko
      ? "법원 비용 없음, 빠름, 덜 공개적"
      : "No court costs, faster, less public.",
    cons: (ko: boolean) => ko
      ? "100% 채권자 동의 필요한 항목 존재. 한 명이 거부하면 막힘 (Holdout Problem)"
      : "Certain terms require 100% creditor consent. One holdout can block the deal.",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    icon: "🤝",
  },
  {
    name: (ko: boolean) => ko ? "Chapter 11 (미국 파산법 11장)" : "Chapter 11 Bankruptcy",
    nameEn: "Chapter 11",
    mechanism: (ko: boolean) => ko
      ? "법원 감독하 자동 유예(Automatic Stay). DIP 파이낸싱 확보. 구조조정 계획(POR) 협상. 채권자 투표. 법원 인가."
      : "Court-supervised Automatic Stay. Secure DIP financing. Negotiate POR. Creditor vote. Court confirmation.",
    timeline: (ko: boolean) => ko ? "9–24개월 (복잡한 딜)" : "9–24 months (complex deals)",
    pros: (ko: boolean) => ko
      ? "홀드아웃 문제 해결(크램다운). 하나의 포럼에서 모든 채권자 처리"
      : "Solves holdout problem (cramdown). Single forum for all creditors.",
    cons: (ko: boolean) => ko
      ? "비용(법무, 어드바이저 수억불), 평판 손상, 운영 불확실성, 경영진 시간 소모"
      : "Cost (legal, advisors in hundreds of millions), reputational damage, operational uncertainty.",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    icon: "⚖️",
  },
  {
    name: (ko: boolean) => ko ? "사전 합의 파산 (Prepackaged Bankruptcy)" : "Prepackaged Bankruptcy",
    nameEn: "Prepack",
    mechanism: (ko: boolean) => ko
      ? "법원 외에서 채권자 동의 선확보 → 파산 신청 동시에 구조조정 계획 제출"
      : "Pre-secure creditor consent out of court → file bankruptcy and plan of reorganization simultaneously.",
    timeline: (ko: boolean) => ko ? "4–8주 (법원 프로세스)" : "4–8 weeks (court process)",
    pros: (ko: boolean) => ko
      ? "빠름, 저렴, 운영 충격 최소화"
      : "Fast, cheap, minimal operational disruption.",
    cons: (ko: boolean) => ko
      ? "사전 합의 도달이 어려움. 소수 holdout 발생 시 full Chapter 11 전환"
      : "Hard to reach pre-filing consensus. Minority holdout forces full Chapter 11.",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    icon: "📦",
  },
];

// ── Uptier Transactions ───────────────────────────────────────────────────────
const UPTIER_TRANSACTIONS = [
  {
    company: "Serta Simmons Bedding",
    year: "2020",
    sponsor: "Advent International",
    mechanism: (ko: boolean) => ko
      ? "기존 TLB 보유자 중 과반수(51%)가 \"open market purchase\" 조항을 이용해 크레딧 에그리먼트를 개정. 새로운 슈퍼우선순위(Superpriority) 론 $1.2bn 발행 → 기존 과반수 동의 대출자에게만 배분. 나머지 소수 대출자($1bn)는 주니어로 강등(Primed)."
      : "Majority (51%) of existing TLB holders use 'open market purchase' provision to amend the credit agreement. New superpriority loan of $1.2bn issued — distributed only to consenting majority lenders. Remaining minority lenders ($1bn) primed (subordinated).",
    outcome: (ko: boolean) => ko
      ? "소수 대출자 소송 제기. 1심 Serta 승소, 항소심 역전. 2023년 Ch.11 신청."
      : "Minority lenders filed suit. Trial court ruled for Serta; appellate court reversed. Filed Chapter 11 in 2023.",
    marketLegacy: (ko: boolean) => ko
      ? "\"Serta blocker\" — 신규 크레딧 에그리먼트에 \"open market purchase\" 이용한 개정 금지 조항 표준화"
      : "\"Serta blocker\" — new credit agreements standardize prohibition on using open market purchase provisions to amend documents.",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
  },
  {
    company: "Envision Healthcare",
    year: "2020",
    sponsor: "KKR (2018년 $9.9bn LBO)",
    mechanism: (ko: boolean) => ko
      ? "과반수 대출자 동의로 핵심 자산(AmSurg, physician staffing 사업부)을 새 자회사로 이전. 신규 슈퍼우선순위 론 발행. 비동의 소수 대출자는 남겨진 자산만 담보로 갖게 됨."
      : "Majority lender consent used to transfer key assets (AmSurg, physician staffing division) to a new subsidiary. New superpriority loan issued. Non-consenting minority lenders left with only remaining assets as collateral.",
    outcome: (ko: boolean) => ko
      ? "2023년 Chapter 11. 소수 대출자 $1bn+ 손실. KKR 투자 전액 손실."
      : "Chapter 11 in 2023. Minority lenders lost $1bn+. KKR lost its entire investment.",
    marketLegacy: (ko: boolean) => ko
      ? "\"Envision blocker\" — 자산 이전 후 새 론 발행 불가, 대규모 자산 이전에 높은 동의 기준"
      : "\"Envision blocker\" — prohibits new loan issuance after asset transfers; higher consent threshold for major asset transfers.",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    dot: "bg-orange-500",
  },
  {
    company: "TriMark USA",
    year: "2020",
    sponsor: "Warburg Pincus",
    mechanism: (ko: boolean) => ko
      ? "COVID로 레스토랑 장비 사업 붕괴. 기존 론 보유자 일부와 협력해 \"first in, last out\" (FILO) 구조의 신규 DIP 성격 자금 조달. 비동의 론 보유자 종속."
      : "COVID collapse of restaurant equipment business. Partnered with subset of lenders to raise new FILO (first in, last out) structured financing. Non-consenting lenders subordinated.",
    outcome: (ko: boolean) => ko
      ? "소송 후 법원 외 해결. FILO 구조 선례 확립."
      : "Resolved out of court after litigation. Precedent set for FILO structures.",
    marketLegacy: (ko: boolean) => ko
      ? "FILO 구조의 명시적 허용/금지 조항이 표준화"
      : "Explicit permitting/prohibiting language around FILO structures standardized in new credit agreements.",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    dot: "bg-amber-500",
  },
];

// ── Chapter 11 Mechanics ──────────────────────────────────────────────────────
const CHAPTER11_STAGES = [
  {
    stage: 1,
    title: (ko: boolean) => ko ? "자발적 파산 신청 (Voluntary Petition)" : "Voluntary Petition Filing",
    detail: (ko: boolean) => ko
      ? "자동 유예(Automatic Stay) 발동 → 모든 채권자 청구 즉시 중단. DIP 파이낸싱 긴급 확보 (기존 대출자 or 전문 DIP 펀드). 구조조정 어드바이저 (Alvarez & Marsal, FTI Consulting) 고용 공식화."
      : "Automatic Stay triggers → all creditor claims instantly halted. Emergency DIP financing secured (existing lenders or specialist DIP funds). Restructuring advisor (Alvarez & Marsal, FTI Consulting) formally engaged.",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dot: "bg-blue-500",
  },
  {
    stage: 2,
    title: (ko: boolean) => ko ? "First Day Motions" : "First Day Motions",
    detail: (ko: boolean) => ko
      ? "법원에 긴급 명령 신청: 급여 지급 허가, 공급업체 지불 허가, 리볼버 사용 허가. \"Critical vendor\" 지정: 핵심 공급업체에 기존 채무 우선 상환."
      : "Emergency court orders filed: authorization to pay wages, pay suppliers, use revolving credit. 'Critical vendor' designation: priority repayment of pre-petition claims to key suppliers.",
    color: "border-indigo-300 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-900/20",
    dot: "bg-indigo-500",
  },
  {
    stage: 3,
    title: (ko: boolean) => ko ? "DIP 파이낸싱 확보" : "DIP Financing",
    detail: (ko: boolean) => ko
      ? "DIP 론: 기존 채권보다 SENIOR. 법원 허가 필요. DIP 투자자: 기존 1순위 대출자(롤-업 DIP) 또는 전문 DIP 펀드(8–12% 금리, 높은 수수료). DIP가 파산 기업의 생명줄: 운영 자금 + 구조조정 비용 커버."
      : "DIP loan: ranks SENIOR to existing debt. Requires court approval. DIP providers: existing first-lien lenders (roll-up DIP) or specialist DIP funds (8–12% rate, high fees). DIP is the lifeline: covers operating costs + restructuring expenses.",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
  },
  {
    stage: 4,
    title: (ko: boolean) => ko ? "Claims Process (채권자 클레임 접수)" : "Claims Process",
    detail: (ko: boolean) => ko
      ? "채권자들이 클레임 제출 (Bar Date). 분류: Secured claims → Unsecured claims → Equity. Absolute Priority Rule: 시니어 클래스 전액 상환 전에 주니어 클래스 회수 불가."
      : "Creditors file claims (Bar Date). Classification: Secured claims → Unsecured claims → Equity. Absolute Priority Rule: junior classes cannot receive any recovery until senior classes are paid in full.",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    dot: "bg-orange-500",
  },
  {
    stage: 5,
    title: (ko: boolean) => ko ? "구조조정 계획 (POR) 협상" : "Plan of Reorganization (POR) Negotiation",
    detail: (ko: boolean) => ko
      ? "채무자(DIP) + 채권자 위원회(UCC)가 협상. Cramdown: 특정 클래스 동의 없이도 법원이 인가 가능 (if fair and equitable). 통상 소요시간: 9–18개월."
      : "Debtor (DIP) + Unsecured Creditors' Committee (UCC) negotiate. Cramdown: court can confirm plan over a dissenting class if 'fair and equitable.' Typical duration: 9–18 months.",
    color: "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20",
    dot: "bg-purple-500",
  },
  {
    stage: 6,
    title: (ko: boolean) => ko ? "Confirmation Hearing (법원 인가)" : "Confirmation Hearing",
    detail: (ko: boolean) => ko
      ? "법원이 POR 인가. 기존 주식 소각. 신규 에쿼티 → 채권자에 배분 (주로 1순위 담보 채권자가 회사 주인)."
      : "Court confirms POR. Existing equity extinguished. New equity distributed to creditors — typically first-lien secured lenders become the new owners.",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    dot: "bg-teal-500",
  },
  {
    stage: 7,
    title: (ko: boolean) => ko ? "Emergence (구조조정 완료)" : "Emergence",
    detail: (ko: boolean) => ko
      ? "구조조정된 신규 회사 탄생. 부채 대폭 감소 (Hair-cut된 채권자들이 에쿼티 보유). 통상 에머전스 시 새 144A→등록 에쿼티 발행."
      : "New restructured company emerges. Debt substantially reduced (creditors who took hair-cuts now hold equity). Typically issues new 144A→registered equity on emergence.",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
  },
];

// ── Recovery Rates ────────────────────────────────────────────────────────────
const RECOVERY_RATES = [
  {
    label: (ko: boolean) => ko ? "1순위 담보 (1st Lien Secured)" : "1st Lien Secured",
    low: 70,
    high: 80,
    midpx: 75,
    color: "bg-emerald-500",
    note: (ko: boolean) => ko ? "역사적 평균. 담보 자산 직접 청구권." : "Historical average. Direct claim on collateral assets.",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    label: (ko: boolean) => ko ? "2순위 담보 (2nd Lien Secured)" : "2nd Lien Secured",
    low: 25,
    high: 40,
    midpx: 32,
    color: "bg-teal-500",
    note: (ko: boolean) => ko ? "1순위 미회수분에서 회수. 실제로는 크게 변동." : "Recovered from 1st lien shortfall. Wide variation in practice.",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    label: (ko: boolean) => ko ? "선순위 무담보 HY (Senior Unsecured HY)" : "Senior Unsecured HY",
    low: 30,
    high: 45,
    midpx: 37,
    color: "bg-yellow-500",
    note: (ko: boolean) => ko ? "Cov-Lite 확산 후 실제 회수율 하락 추세." : "Actual recovery declining post Cov-Lite expansion.",
    badgeColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    label: (ko: boolean) => ko ? "선순위 후순위 / 메자닌" : "Senior Sub / Mezzanine",
    low: 10,
    high: 25,
    midpx: 17,
    color: "bg-orange-500",
    note: (ko: boolean) => ko ? "무담보 하층. 선순위 충족 후 잔여만." : "Unsecured subordinated. Only residual after senior claims.",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    label: (ko: boolean) => ko ? "에쿼티 (PE 스폰서)" : "Equity (PE Sponsor)",
    low: 0,
    high: 5,
    midpx: 2,
    color: "bg-rose-600",
    note: (ko: boolean) => ko ? "대부분 전액 소각. 예외적 케이스에서만 소액 회수." : "Almost always fully wiped out. Minimal recovery only in rare cases.",
    badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
];

// ── Distressed Investors ──────────────────────────────────────────────────────
const DISTRESSED_INVESTORS = [
  {
    firm: "Apollo Global Management",
    strategy: (ko: boolean) => ko ? "부실채권 매입 + DIP 대출. 회사를 인수해 운영 개선 후 재매각" : "Distressed debt + DIP lending. Buy company, improve operations, re-sell.",
    famousDeal: (ko: boolean) => ko ? "Caesars Entertainment (2015 Ch.11), Great Wolf Resorts" : "Caesars Entertainment (2015 Ch.11), Great Wolf Resorts",
    aum: "$650bn+ (2024)",
  },
  {
    firm: "Oaktree Capital Management",
    strategy: (ko: boolean) => ko ? "하워드 막스 설립. 부실채권 사이클 투자의 교과서. 부채를 에쿼티로 전환해 회사 통제권 획득" : "Founded by Howard Marks. Textbook distressed cycle investing. Convert debt to equity to gain control.",
    famousDeal: (ko: boolean) => ko ? "Tribune Company, Energy Future Holdings" : "Tribune Company, Energy Future Holdings",
    aum: "$192bn+ (2024)",
  },
  {
    firm: "Centerbridge Partners",
    strategy: (ko: boolean) => ko ? "부실채권 + 크레딧 투자 혼합. DIP 대출 전문. '채권자 위원회'에서 영향력 행사" : "Distressed + credit blend. DIP lending specialist. Exercises influence on creditors' committees.",
    famousDeal: (ko: boolean) => ko ? "Rite Aid, Washington Mutual" : "Rite Aid, Washington Mutual",
    aum: "$35bn+ (2024)",
  },
  {
    firm: "Elliott Management",
    strategy: (ko: boolean) => ko ? "행동주의 + 부실채권 결합. 홀드아웃 전략 구사. 최고 회수율 협상에 특화" : "Activist + distressed combination. Expert holdout strategy. Specializes in negotiating maximum recovery.",
    famousDeal: (ko: boolean) => ko ? "NRG Energy, Windstream, Argentina sovereign bonds" : "NRG Energy, Windstream, Argentina sovereign bonds",
    aum: "$65bn+ (2024)",
  },
];

// ── Korea Restructuring ───────────────────────────────────────────────────────
const KOREA_RESTRUCTURING = [
  {
    name: (ko: boolean) => ko ? "법정관리 (회생절차)" : "법정관리 (Court Receivership)",
    nameEn: "Hoesaeng Jeolcha",
    description: (ko: boolean) => ko
      ? "미국 Chapter 11에 가장 유사한 한국 절차. 법원이 관리인(Administrator) 선임. 기존 경영진은 통상 교체됨. 자동 유예(자산 동결) 발동. 법원이 구조조정 계획(회생계획) 인가."
      : "Closest Korean equivalent to US Chapter 11. Court appoints external administrator. Existing management typically replaced. Automatic stay activated. Court confirms reorganization plan (hoesaeng gyehoek).",
    keyDiff: (ko: boolean) => ko
      ? "미국 Ch.11 vs 한국 법정관리 핵심 차이: 미국은 기존 경영진 유지(DIP), 한국은 법원이 외부 관리인 선임 → 경영 연속성 단절"
      : "Key US/Korea difference: US Ch.11 keeps existing management (DIP); Korean 법정관리 installs external court-appointed administrator → management continuity broken.",
    cases: (ko: boolean) => ko ? "쌍용차(2009), STX조선(2013), 한진해운(2016)" : "SsangYong Motor (2009), STX Offshore (2013), Hanjin Shipping (2016)",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    name: (ko: boolean) => ko ? "워크아웃 (Workout / 채권단 자율협약)" : "워크아웃 (Workout)",
    nameEn: "Workout",
    description: (ko: boolean) => ko
      ? "채권 금융기관 주도의 임의 조정. 기업구조조정촉진법: 채권은행 75% 이상 동의 시 소수 은행도 구속. 부채 재조정(원금 상환 유예, 금리 인하, 만기 연장) 협약. 법원 개입 없음 — 더 빠르고 덜 공개적."
      : "Bank-led voluntary restructuring. Corporate Restructuring Promotion Act: 75%+ bank consent binds minority banks. Debt adjustment agreement (principal deferral, rate reduction, maturity extension). No court involvement — faster and less public.",
    keyDiff: (ko: boolean) => ko
      ? "한국 특수성: 주채권은행(KDB, 하나, 우리) 주도로 '채권단 공동관리' 체제 구성. 글로벌 헤지펀드보다는 국내 은행들이 협상 주도."
      : "Korean specificity: led by main creditor banks (KDB, Hana, Woori) forming 'joint bank management.' Domestic banks dominate negotiations rather than global hedge funds.",
    cases: (ko: boolean) => ko ? "두산인프라코어(2009), 웅진(2012), 대우조선해양(2015–2016)" : "Doosan Infracore (2009), Woongjin (2012), DSME (2015–2016)",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    name: (ko: boolean) => ko ? "KAMCO 및 정책금융 지원" : "KAMCO & Policy Finance Support",
    nameEn: "KAMCO",
    description: (ko: boolean) => ko
      ? "KAMCO(한국자산관리공사): 금융기관의 부실채권(NPL) 매입, 구조조정 지원. 재벌 그룹사 지원 문화: 계열사 어려우면 그룹 전체가 지원 — LBO로 인수된 독립 기업에는 이 안전망 없음. 한국 LBO 기업의 부실은 미국 LBO와 달리 정책적 개입 가능성 항상 존재."
      : "KAMCO (Korea Asset Management Corp): buys NPLs from financial institutions, supports restructurings. Chaebol group support culture: group rescues affiliates in distress — PE-backed standalone companies have no such safety net. Korean LBO distress always carries possibility of policy intervention, unlike US LBO.",
    keyDiff: (ko: boolean) => ko
      ? "글로벌 HY 투자자 시각: 한국 구조조정은 '정치적 변수'가 크다. KDB 같은 정책은행의 개입 여부에 따라 회수율이 크게 달라짐."
      : "Global HY investor view: Korean restructurings carry significant 'political variable.' Recovery rates depend heavily on whether policy banks like KDB intervene.",
    cases: (ko: boolean) => ko ? "쌍용차 KAMCO 지원, 한국GM 지원, 대한항공-아시아나 합병 지원" : "SsangYong Motor KAMCO support, Korea GM support, Korean Air-Asiana merger support",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "Amend & Extend를 하면 문제가 해결되나요, 아니면 시간만 버는 건가요?"
      : "Does Amend & Extend actually solve the problem, or is it just buying time?",
    a: (ko: boolean) => ko
      ? "대부분은 시간 벌기입니다. A&E는 만기를 연장하지만 부채 부담 자체를 줄이지 않습니다. 기초 사업이 개선되지 않으면 — 이것이 종종 사실입니다 — 회사는 2–3년 후 같은 벽에 부딪힙니다. 이번에는 더 나쁜 협상 위치에서(옵션 감소, 채권자 피로). 유명한 A&E → 결국 파산 사례: iHeartMedia (수차례 A&E 후 2019년 파산), Revlon. 그러나 A&E가 성공하는 경우도 있습니다 — 시간이 운영 개선을 가능하게 할 때입니다."
      : "Mostly buying time. A&E extends the maturity but doesn't reduce the debt burden. If the underlying business hasn't improved — which is often the case — the company hits the same wall in 2–3 years, but now in a worse negotiating position (fewer options, more creditor fatigue). Famous A&E → eventual bankruptcy: iHeartMedia (multiple A&Es before 2019 bankruptcy), Revlon. Sometimes A&E works if it gives time for operational turnaround.",
  },
  {
    q: (ko: boolean) => ko
      ? "업타이어 트랜잭션이 왜 '약탈적'이라는 비판을 받나요?"
      : "Why are uptier transactions criticized as 'predatory'?",
    a: (ko: boolean) => ko
      ? "동의한 과반수 대출자들이 동의하지 않은 소수 대출자의 가치를 빼앗기 때문입니다. 소수 대출자들은 동일한 크레딧 에그리먼트 하에서 동일한 담보, 동일한 우선순위를 가졌다고 생각했습니다. 업타이어는 계약상 기술적 조항을 이용해 이들을 종속시킵니다. 법원은 판단이 엇갈립니다. 많은 이들이 선의 계약 원칙(good faith) 위반이라고 봅니다. 시장이 '블로커' 언어로 대응했다는 것은 대출자들이 서로를 더 이상 신뢰하지 않는다는 것을 보여줍니다."
      : "Because majority lenders (who consent) extract value from minority lenders (who don't consent) without their agreement. The minority lenders thought they had equal rights under the credit agreement — same collateral, same priority. The uptier uses contractual technicalities to subordinate them. Courts are split on legality. Many view it as a breach of the covenant of good faith. The market solution (blocker language) shows lenders don't trust each other anymore.",
  },
  {
    q: (ko: boolean) => ko
      ? "DIP 파이낸싱을 제공하면 어떤 이점이 있어서 기존 대출자들이 참여하나요?"
      : "Why would existing lenders participate in DIP financing?",
    a: (ko: boolean) => ko
      ? "두 가지 이유입니다. ① 방어적 — 기존 대출자들이 기존 익스포저를 DIP로 '롤업'해 슈퍼선순위 지위를 획득합니다. 자산이 낮은 가격에 매각되더라도 자신을 보호합니다. ② 기회주의적 — 신규 DIP 투자자들은 단기 만기에 8–12% + 선납 수수료 2–3포인트를 부과합니다. 회사가 빠르게 에머전스하면 뛰어난 수익입니다. Apollo, Oaktree, Centerbridge가 DIP 대출을 전문으로 합니다."
      : "Two reasons: (1) Defensive — existing lenders 'roll up' existing exposure into DIP, gaining super-senior position. By doing so, they protect themselves if assets are eventually sold at low values. (2) Opportunistic — new DIP investors charge 8–12% + 2–3pts upfront fee on short duration. If company emerges quickly, excellent returns. Apollo, Oaktree, and Centerbridge specialize in DIP lending.",
  },
  {
    q: (ko: boolean) => ko
      ? "Chapter 11에서 에쿼티가 완전히 소각되는 게 일반적인가요? PE 스폰서는 항상 손실을 보나요?"
      : "Is equity typically fully wiped out in Chapter 11? Do PE sponsors always lose everything?",
    a: (ko: boolean) => ko
      ? "레버리지드 바이아웃에서 파산 신청하는 경우, 에쿼티는 거의 항상 전액 소각되거나 무시할 수 있는 회수율(1–5%)을 받습니다. 부채 수준이 너무 높아서 적정 기업가치에서도 모든 수익이 먼저 채권자에게 귀속됩니다(절대적 우선순위 원칙). 예외: PE가 파산 후 추가 에쿼티를 주입하고 계획 지지 협약의 일부로 일부 지분을 유지하는 경우. 유명한 예: 블랙스톤이 2008–09년 힐튼에서 추가 에쿼티를 주입해 소액 지분을 유지했습니다."
      : "In leveraged buyouts where the company files Chapter 11, equity almost always gets wiped out or receives negligible recovery (1–5%). This is because the debt levels were so high that even at fair enterprise value, all proceeds go to creditors first (Absolute Priority Rule). Exceptions: cases where PE funds more equity post-filing and retains some stake as part of plan support agreement. Famous example: Blackstone retained small stake in Hilton after 2008–09 by injecting additional equity.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 법정관리와 미국 Chapter 11의 가장 큰 실무적 차이는 무엇인가요?"
      : "What are the biggest practical differences between Korean 법정관리 and US Chapter 11?",
    a: (ko: boolean) => ko
      ? "세 가지 핵심 차이입니다. ① 경영 연속성 — 미국 Ch.11에서는 기존 경영진이 통상 유지됩니다(채무자점유, DIP). 한국 법정관리에서는 법원이 외부 관리인을 선임하는 경우가 많아 경영진이 교체됩니다. ② 속도 — 한국 법정관리는 통상 1–2년으로 Ch.11과 유사합니다. 워크아웃은 더 빠릅니다 (6–12개월). ③ 채권자 구성 — 한국 구조조정은 은행(주요 채권자)이 지배적이지만, 미국 Ch.11은 채권 보유자, 론 펀드, 헤지펀드의 다양한 그룹이 협상에 참여해 더 복잡합니다."
      : "Three key differences: (1) Management continuity — In US Ch.11, existing management typically stays (Debtor-in-Possession). In Korean 법정관리, court appoints an external administrator (관리인) who often replaces management. (2) Speed — Korean 법정관리 typically 1–2 years, similar to Ch.11. Workout process faster (6–12 months). (3) Bank vs market creditors — Korean restructurings are dominated by banks (major creditors), while US Ch.11 often involves a diverse group of bondholders, loan funds, and hedge funds, making negotiation more complex.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Moody's Investors Service", title: "Annual Default Study: Corporate Defaults and Recovery Rates", url: "https://www.moodys.com/researchandratings/market-segment/corporate-finance/-/003006/4294966460/4294966694/0/0/-/0/-/-/-/-/-/-/-/-/en/global/pdf/-/rra", source: "Moody's, 2024" },
  { id: 2, author: "S&P Global / LCD", title: "Leveraged Loan Market Review & Distressed Debt Analysis", url: "https://www.spglobal.com/marketintelligence/en/news-insights/research/leveraged-loan-market", source: "S&P Global, 2024" },
  { id: 3, author: "Loan Syndications and Trading Association (LSTA)", title: "The LSTA's Complete Credit Agreement Guide — Uptier & Liability Management", url: "https://www.lsta.org/", source: "LSTA, 2023" },
  { id: 4, author: "Howard Marks, Oaktree Capital", title: "Mastering the Market Cycle (HarperCollins)", url: "https://www.oaktreecapital.com/insights/howard-marks-memos", source: "Oaktree / HarperCollins, 2018" },
  { id: 5, author: "Alvarez & Marsal", title: "Corporate Restructuring: A Practitioner's Handbook", url: "https://www.alvarezandmarsal.com/expertise/restructuring", source: "A&M, 2023" },
  { id: 6, author: "U.S. Bankruptcy Court", title: "Chapter 11 — Reorganization Under the Bankruptcy Code (Official Guide)", url: "https://www.uscourts.gov/services-forms/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics", source: "USCOURTS.gov, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinDistressedClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = LEVFIN_SERIES[thisCh - 1] ?? null;
  const next = LEVFIN_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ─────────────────────────────────────────────── */}
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

        {/* ── 헤더 ──────────────────────────────────────────────────────────── */}
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
              ? "부실채권 & 구조조정: LBO가 무너질 때 무슨 일이 벌어지나"
              : "Distressed Debt & Restructuring: What Happens When an LBO Breaks"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "모든 LBO는 두 가지 결말 중 하나로 끝난다 — 성공적 엑싯 또는 구조조정. 실무자는 양쪽 모두를 알아야 한다. 신용위기 발생 시 IB 실무자가 어떻게 대응하는지, 업타이어 트랜잭션이 실제로 어떻게 이루어지는지 — 인터넷에 없는 도제식 지식을 이 챕터에서 다룬다."
              : "Every LBO ends one of two ways — successful exit or restructuring. A practitioner must understand both. This chapter covers what IB professionals actually do when a credit crisis hits, and how uptier transactions really work — the apprenticeship knowledge that doesn't live on the internet."}
          </p>
        </motion.div>

        {/* ── Opening Callout ─────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0.1)} className="mb-12">
          <div className="rounded-xl border border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">⚡</span>
              <div>
                <p className="font-bold text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                  {ko ? "이 챕터에서 배울 것" : "What You Will Learn in This Chapter"}
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 leading-relaxed list-disc list-inside">
                  <li>{ko ? "8가지 부실 신호 — 채권 가격과 시장 반응" : "8 distress signals — bond prices and market reactions"}</li>
                  <li>{ko ? "4가지 구조조정 옵션 (A&E부터 Ch.11까지)" : "4 restructuring options (A&E through Chapter 11)"}</li>
                  <li>{ko ? "업타이어 트랜잭션 3가지 실제 사례 (Serta, Envision, TriMark)" : "3 real uptier transactions (Serta, Envision, TriMark)"}</li>
                  <li>{ko ? "Chapter 11의 7단계 — DIP부터 에머전스까지" : "Chapter 11's 7 stages — from DIP to emergence"}</li>
                  <li>{ko ? "자본구조별 회수율 — 누가 얼마나 돌려받나" : "Recovery rates by capital structure layer"}</li>
                  <li>{ko ? "한국 법정관리 vs 미국 Ch.11 실무 비교" : "Korean 법정관리 vs US Ch.11 practical comparison"}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 1: 8가지 부실 신호
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 8가지 부실 신호 — 언제 위기가 오는지" : "1. Eight Distress Signals — When a Crisis Is Coming"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "채권 투자자와 IB 실무자는 아래 신호들을 순서대로 모니터링합니다. 신호가 쌓일수록 구조조정 확률이 높아집니다. 신호의 심각도는 AMBER(경보) → RED(적신호) → CRITICAL(위기) 순입니다."
              : "Bond investors and IB practitioners monitor these signals in sequence. As signals accumulate, the probability of restructuring rises. Severity escalates: AMBER (warning) → RED (alert) → CRITICAL (crisis)."}
          </p>
          <div className="space-y-3">
            {DISTRESS_SIGNALS.map((s, i) => {
              const severityStyle =
                s.severity === "AMBER"
                  ? { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/10", dot: "bg-amber-500" }
                  : s.severity === "RED"
                  ? { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/10", dot: "bg-rose-500" }
                  : { badge: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200", border: "border-red-300 dark:border-red-700", bg: "bg-red-50 dark:bg-red-900/20", dot: "bg-red-600" };
              return (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                  className={`rounded-xl border p-4 ${severityStyle.border} ${severityStyle.bg}`}>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      <span className="text-xs font-black text-gray-400 w-4">{i + 1}</span>
                      <div className={`w-2.5 h-2.5 rounded-full ${severityStyle.dot}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{s.signal(ko)}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${severityStyle.badge}`}>
                          {s.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1.5">{s.description(ko)}</p>
                      <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-1.5">
                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mr-1.5">
                          {ko ? "시장 반응:" : "Market reaction:"}
                        </span>
                        <span className="text-xs text-gray-700 dark:text-gray-300">{s.marketAction(ko)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
            {ko ? "* 채권 가격은 액면가($1.00) 대비 센트 단위. '70센트' = 액면 대비 70% 가격으로 거래." : "* Bond prices quoted in cents vs par ($1.00). '70 cents' = trading at 70% of face value."}
          </p>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 2: 4가지 구조조정 옵션
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 4가지 구조조정 옵션 — A&E부터 Ch.11까지" : "2. Four Restructuring Options — From A&E to Chapter 11"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "부실 기업은 파산 법원 밖에서 최대한 해결하려 합니다. 비용과 평판 손상 때문입니다. 아래 옵션은 침습성(invasiveness) 순서로 배열되어 있습니다."
              : "Distressed companies try to resolve issues outside bankruptcy court as long as possible — due to cost and reputational damage. Options below are ranked by invasiveness."}
          </p>
          {/* Decision tree visual */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/20 p-4 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              {ko ? "의사결정 순서 (일반적)" : "Typical Decision Sequence"}
            </p>
            <div className="flex items-center gap-1 flex-wrap text-xs font-semibold">
              {["A&E", "→", ko ? "임의 조정" : "Out-of-Court", "→", "Prepack", "→", "Ch.11"].map((item, i) => (
                <span key={i} className={item === "→"
                  ? "text-gray-400 dark:text-gray-600 mx-0.5"
                  : i === 0 ? "px-2 py-1 rounded bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                  : i === 2 ? "px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : i === 4 ? "px-2 py-1 rounded bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
                  : "px-2 py-1 rounded bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
                }>{item}</span>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">
              {ko ? "왼쪽일수록 빠르고 저렴. 오른쪽일수록 홀드아웃 문제 해결 가능." : "Left = faster and cheaper. Right = better at solving holdout problems."}
            </p>
          </div>

          <div className="space-y-4">
            {RESTRUCTURING_OPTIONS.map((opt, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${opt.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0 mt-0.5">{opt.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="font-black text-base text-gray-900 dark:text-gray-50">{opt.name(ko)}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${opt.badge}`}>
                        {ko ? "타임라인:" : "Timeline:"} {opt.timeline(ko)}
                      </span>
                    </div>
                    <div className="mb-3">
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
                        {ko ? "메커니즘" : "Mechanism"}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{opt.mechanism(ko)}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className={`rounded-lg px-3 py-2 text-xs ${opt.badge}`}>
                        <span className="font-bold">✅ {ko ? "장점" : "Pros"}: </span>{opt.pros(ko)}
                      </div>
                      <div className="rounded-lg px-3 py-2 text-xs bg-gray-100 text-gray-600 dark:bg-gray-800/60 dark:text-gray-400">
                        <span className="font-bold">⚠️ {ko ? "단점" : "Cons"}: </span>{opt.cons(ko)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 3: 업타이어 트랜잭션
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 업타이어 트랜잭션 — 3가지 악명 높은 사례" : "3. Uptier Transactions — Three Infamous Cases"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {ko
              ? "업타이어(Uptier) 또는 \"Liability Management Exercise(LME)\"는 과반수 채권자가 소수 채권자를 희생시켜 자신의 지위를 개선하는 기법입니다. 2020년은 LevFin 코버넌트 역사의 전환점이 된 해입니다 — Serta, Envision, TriMark 세 딜이 모두 그 해에 일어났습니다."
              : "Uptier (or 'Liability Management Exercise / LME') is a technique where majority creditors improve their position at the expense of minority creditors. 2020 became a watershed year in LevFin covenant history — Serta, Envision, and TriMark all happened that year."}
          </p>
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3 mb-6">
            <p className="text-xs text-gray-700 dark:text-gray-300">
              <span className="font-bold text-yellow-700 dark:text-yellow-400">📌 {ko ? "핵심 개념:" : "Key concept:"} </span>
              {ko
                ? "기존 크레딧 에그리먼트는 '과반수 대출자 동의'로 개정 가능했습니다. 업타이어는 이 조항을 이용해 소수 대출자의 담보 우선순위를 강등(Prime)시키는 것입니다. 코버넌트 라이트(Cov-Lite) 계약서의 허술한 언어가 이를 가능하게 했습니다."
                : "Existing credit agreements could be amended by 'majority lender consent.' Uptier exploits this provision to subordinate (prime) minority lenders' collateral priority. Loose language in Cov-Lite agreements enabled this."}
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-5">
              {UPTIER_TRANSACTIONS.map((deal, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${deal.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-5 ${deal.color}`}>
                      <div className="flex items-center gap-2 flex-wrap mb-3">
                        <span className="font-black text-base text-gray-900 dark:text-gray-50">{deal.company}</span>
                        <span className="font-mono text-xs text-gray-500 dark:text-gray-400">({deal.year})</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">— {deal.sponsor}</span>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{ko ? "메커니즘" : "Mechanism"}</p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{deal.mechanism(ko)}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{ko ? "결과" : "Outcome"}</p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{deal.outcome(ko)}</p>
                        </div>
                        <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2">
                          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mr-1.5">
                            {ko ? "시장 레거시:" : "Market legacy:"}
                          </span>
                          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{deal.marketLegacy(ko)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
              📋 {ko ? "2020년 이후 신규 크레딧 에그리먼트 표준 조항" : "Post-2020 Standard Provisions in New Credit Agreements"}
            </p>
            <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
              <div className="flex gap-2"><span className="text-gray-400 shrink-0">①</span><span>{ko ? "Serta blocker: open market purchase 이용한 개정 금지" : "Serta blocker: prohibition on using open market purchase to amend"}</span></div>
              <div className="flex gap-2"><span className="text-gray-400 shrink-0">②</span><span>{ko ? "Envision blocker: 대규모 자산 이전 후 신규 우선순위 론 발행 금지" : "Envision blocker: no new priority loans after material asset transfers"}</span></div>
              <div className="flex gap-2"><span className="text-gray-400 shrink-0">③</span><span>{ko ? "동등 취급 조항(Yank-a-Bank): 동의/비동의 대출자 차별 대우 명시적 금지" : "Equal treatment / anti-subordination: explicit prohibition on discriminating between consenting/non-consenting lenders"}</span></div>
              <div className="flex gap-2"><span className="text-gray-400 shrink-0">④</span><span>{ko ? "담보 이전 제한: 핵심 자산의 unrestricted subsidiary 이전에 높은 임계값" : "Collateral transfer restrictions: higher thresholds for moving key assets to unrestricted subsidiaries"}</span></div>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 4: Chapter 11 7단계
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. Chapter 11 7단계 — DIP부터 에머전스까지" : "4. Chapter 11: Seven Stages — From DIP to Emergence"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "Chapter 11은 회사를 청산하는 것이 아니라 재건하는 절차입니다. 최대의 이점은 '자동 유예(Automatic Stay)'와 '크램다운(Cramdown)' — 홀드아웃 채권자를 법원 명령으로 강제할 수 있습니다."
              : "Chapter 11 is a reorganization process, not liquidation. Its greatest advantages are the Automatic Stay and Cramdown — a court order can bind holdout creditors who refuse to consent."}
          </p>
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {CHAPTER11_STAGES.map((stage, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-4 h-4 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 flex items-center justify-center ${stage.dot}`}>
                        <span className="text-[9px] font-black text-white">{stage.stage}</span>
                      </div>
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${stage.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="sm:hidden text-[10px] font-black text-gray-400 w-4">
                          Stage {stage.stage}
                        </span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{stage.title(ko)}</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{stage.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-3">
            <p className="text-xs font-bold text-yellow-800 dark:text-yellow-300 mb-1.5">
              💡 {ko ? "DIP 대출자가 되는 것의 의미" : "What It Means to Be a DIP Lender"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "파산 기업에 DIP를 대출한다는 것은 모든 기존 채권보다 상위에 위치하는 초선순위(Super Senior) 지위를 갖는다는 의미입니다. 파산 법원은 DIP 론을 승인하는 첫 번째 명령 중 하나입니다. DIP 투자자 입장에서는 단기(6–18개월), 고수익(8–12% + 2–3pts 수수료), 최우선 담보권 보유의 매력적 조합입니다. Apollo, Oaktree, Centerbridge가 이 분야의 전문 플레이어입니다."
                : "Being a DIP lender means holding a super-senior position above all existing claims. Bankruptcy courts approve DIP financing as one of their very first orders. For DIP investors, the combination is attractive: short duration (6–18 months), high yield (8–12% + 2–3pts fee), and top-priority security. Apollo, Oaktree, and Centerbridge are specialist players in this space."}
            </p>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 5: 회수율
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 회수율 — 누가 얼마나 돌려받나" : "5. Recovery Rates — Who Gets How Much Back"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "아래는 Moody's 역사적 평균 회수율입니다. 2020–2023년의 실제 회수율은 Cov-Lite 확산으로 인해 역사적 평균보다 전반적으로 낮았습니다 — 조기 경보 없이 부실이 심화되기 때문입니다."
              : "Historical average recovery rates from Moody's. Actual 2020–2023 recoveries were generally below historical averages due to Cov-Lite expansion — distress deepens without early warning signals."}
          </p>
          <div className="space-y-3">
            {RECOVERY_RATES.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-bold text-sm text-gray-900 dark:text-gray-50 flex-1">{item.label(ko)}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.low}–{item.high}%
                  </span>
                </div>
                {/* Bar — pixel height in whileInView */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-1.5" style={{ height: "8px" }}>
                  <motion.div
                    className={`h-full rounded-full ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.midpx}%` }}
                    viewport={VP}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.note(ko)}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 px-4 py-3">
            <p className="text-xs font-bold text-rose-700 dark:text-rose-300 mb-1.5">
              ⚠️ {ko ? "Cov-Lite 시대의 회수율 저하" : "Recovery Rate Deterioration in the Cov-Lite Era"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "유지형 코버넌트(Maintenance Covenant)가 있던 시절에는 레버리지 위반 → 이른 협상 → 상대적으로 회사 가치가 높을 때 구조조정이 진행되었습니다. Cov-Lite에서는 분기별 레버리지 체크가 없어 기업이 훨씬 심각하게 악화된 후에야 위기가 공식화됩니다. 결과적으로 청산 가치가 낮아지고 회수율이 하락합니다. 이것이 기관 투자자들이 점점 더 코버넌트 조항을 협상에서 중요시하는 이유입니다."
                : "When maintenance covenants existed, a leverage breach triggered early negotiation — restructuring happened while company value was relatively higher. Under Cov-Lite, without quarterly leverage tests, companies deteriorate far more before distress is formalized. This lowers liquidation values and reduces recovery rates. This is why institutional investors increasingly prioritize covenant provisions in negotiations."}
            </p>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 6: 부실채권 투자자의 시각
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 부실채권 투자자의 시각 — 헤지펀드는 왜 Chapter 11 기업에 투자하나" : "6. The Distressed Investor Perspective — Why Hedge Funds Invest in Chapter 11 Companies"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {ko
              ? "부실채권 투자는 '남들이 팔 때 산다'는 역발상 투자의 정수입니다. 핵심 전략은 'Loan to Own' — 처음부터 에쿼티를 목표로 부채를 삽니다."
              : "Distressed investing is the essence of contrarian investing — buying when everyone else is selling. The core strategy is 'Loan to Own' — buying debt from the start with equity ownership as the ultimate target."}
          </p>
          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🎯</span>
              <div>
                <p className="font-bold text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                  {ko ? "Loan to Own 전략: 부채를 살 때 이미 에쿼티를 노린다" : "Loan to Own Strategy: Buying Debt, Targeting Equity"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {ko
                    ? "부실채권 투자자는 채권이 30–50센트에 거래될 때 매입합니다. Chapter 11에서 이 채권이 에쿼티로 전환되면, 원래 에쿼티 투자자보다 훨씬 낮은 단가로 회사 소유권을 얻는 것입니다. 예: 부채 $1bn이 40센트에 거래 → 투자자가 $400mn에 매입 → Ch.11에서 100% 에쿼티로 전환 → 회사 가치가 $800mn이면 2× 수익."
                    : "Distressed investors buy bonds when trading at 30–50 cents. In Chapter 11, when these bonds convert to equity, they acquire company ownership at a far lower cost basis than original equity investors. Example: $1bn in debt trading at 40 cents → investor buys for $400mn → converts to 100% equity in Ch.11 → if company worth $800mn, that's 2× return."}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "핵심은 '정보 우위'입니다. 부실채권 투자자들은 공개 정보만으로는 접근하기 어려운 법적 분석(크레딧 에그리먼트 조항, 담보 설정 현황), 산업 분석(사업 회복 가능성), 법원 절차 전략(채권자 위원회 구성, 투표 파워)에 강점이 있습니다. 이것이 Apollo, Oaktree, Centerbridge 같은 부실채권 전문 펀드가 독점적 수익을 내는 이유입니다."
                    : "The key is information edge. Distressed investors have expertise in legal analysis (credit agreement provisions, security interests), industry analysis (business recovery potential), and court process strategy (creditor committee composition, vote power) that most public market investors lack. This is why specialist funds like Apollo, Oaktree, and Centerbridge generate differentiated returns."}
                </p>
              </div>
            </div>
          </div>

          {/* Distressed Investor Profiles */}
          <div className="grid sm:grid-cols-2 gap-4">
            {DISTRESSED_INVESTORS.map((inv, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1">{inv.firm}</p>
                <p className="text-[11px] font-mono text-gray-400 dark:text-gray-500 mb-2">{inv.aum}</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{inv.strategy(ko)}</p>
                <div className="rounded-lg bg-white/60 dark:bg-black/20 px-2.5 py-1.5">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide mr-1">
                    {ko ? "대표 딜:" : "Notable deals:"}
                  </span>
                  <span className="text-[11px] text-gray-700 dark:text-gray-300">{inv.famousDeal(ko)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════════════════
            섹션 7: 한국 구조조정 메커니즘
        ══════════════════════════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 한국 구조조정 메커니즘 — 법정관리, 워크아웃, KAMCO" : "7. Korean Restructuring Mechanisms — 법정관리, Workout, KAMCO"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "한국 구조조정은 미국 Ch.11과 유사하지만 세 가지 핵심 차이가 있습니다: ①경영진 교체, ②은행 주도 협상, ③정책금융 개입 가능성. 한국에서 PE 딜을 구조화한다면 이 세 가지 차이를 반드시 이해해야 합니다."
              : "Korean restructuring resembles US Ch.11 but has three key differences: ①management replacement, ②bank-led negotiations, ③possibility of policy finance intervention. Anyone structuring PE deals in Korea must understand these three distinctions."}
          </p>
          <div className="space-y-4">
            {KOREA_RESTRUCTURING.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">🇰🇷</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="font-black text-base text-gray-900 dark:text-gray-50">{item.name(ko)}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge}`}>
                        {item.nameEn}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{item.description(ko)}</p>
                    <div className="rounded-lg bg-white/60 dark:bg-black/20 px-3 py-2 mb-2">
                      <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
                        {ko ? "미국 Ch.11 비교" : "vs US Ch.11"}
                      </p>
                      <p className="text-xs text-gray-700 dark:text-gray-300">{item.keyDiff(ko)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{ko ? "사례:" : "Cases:"}</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{item.cases(ko)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              🔭 {ko ? "한국 PE 부실의 독특한 특성" : "Unique Characteristics of Korean PE Distress"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "한국 재벌 계열사가 어려움에 처하면 그룹 전체가 지원하는 문화가 있습니다. 그러나 MBK, IMM 같은 PE가 인수한 독립 기업에는 이 안전망이 없습니다. 홈플러스, 코웨이 같은 딜에서 PE 스폰서가 떠나면 완전히 자력으로 생존해야 합니다. 한국 LBO 부실 투자자는 미국과 다르게 KDB(산업은행), IBK(기업은행) 같은 정책은행의 개입 여부가 회수율을 크게 결정한다는 점을 항상 고려해야 합니다."
                : "Korean chaebol affiliates benefit from group-wide support when in distress. But standalone companies acquired by PE sponsors like MBK or IMM have no such safety net. Once PE sponsors exit deals like Homeplus or Coway, the companies must survive entirely on their own. Distressed investors in Korean LBOs must always factor in whether policy banks like KDB (Korea Development Bank) or IBK will intervene — this single variable can dramatically swing recovery rates."}
            </p>
          </div>
        </motion.section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
        </motion.section>

        {/* ── References ────────────────────────────────────────────────────── */}
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
            <motion.div variants={fadeUp(0.05)}>
              <Link
                href={`${base.replace("market-101", "deals")}/mbk-homeplus`}
                className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center">
                  <span className="text-white text-[9px] font-black leading-none">MBK</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug">
                    {ko ? "MBK × 홈플러스 (2015→2024) — 한국 기업회생절차의 현장" : "MBK × Homeplus (2015→2024) — Korean Court Receivership in Practice"}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                    {ko ? "7.2조원 LBO → S&L 임차료 부담 + 이커머스 타격 → 2024년 기업회생 신청" : "₩7.2T LBO → S&L fixed rent + e-commerce disruption → 2024 court receivership"}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp(0.08)}>
              <Link
                href={`${base.replace("market-101", "deals")}/kkr-toys-r-us`}
                className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center">
                  <span className="text-white text-[9px] font-black leading-none">KKR</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug">
                    {ko ? "KKR × 토이저러스 (2005→2018) — 소매 LBO 파산의 교과서" : "KKR × Toys R Us (2005→2018) — Textbook Retail LBO Failure"}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                    {ko ? "$53억 부채 → 연 $400M 이자 → 디지털 투자 봉쇄 → Chapter 11 → TLB 회수율 $0.22" : "$5.3B debt → $400M/yr interest → zero digital capex → Chapter 11 → TLB recovery $0.22"}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp(0.11)} className="sm:col-span-2">
              <Link
                href={`${base.replace("market-101", "deals")}/serta-simmons-uptier`}
                className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-800 flex items-center justify-center">
                  <span className="text-white text-[9px] font-black leading-none">SSB</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug">
                    {ko ? "Serta Simmons 업티어 (2020→2024) — Lender-on-Lender Violence & 5th Circuit 무효 판결" : "Serta Simmons Uptier (2020→2024) — Lender-on-Lender Violence & 5th Circuit Invalidation"}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                    {ko ? "$12억 수퍼-선순위 발행 → 비동의 채권자 $9억 후순위 → 2023년 Chapter 11 → 2024년 5th Circuit 거래 무효" : "$1.2B super-priority issuance → $0.9B non-consenting lenders primed → 2023 Chapter 11 → 2024 5th Circuit transaction invalid"}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "부실채권 & 구조조정: LBO가 무너질 때 무슨 일이 벌어지나 | Deal Story"
            : "Distressed Debt & Restructuring: What Happens When an LBO Breaks | Deal Story"}
          lang={lang}
        />

        {/* Prev / Next */}
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
