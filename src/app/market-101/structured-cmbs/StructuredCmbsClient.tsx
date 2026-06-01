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
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#f59e0b"; // amber-500

// ── Series Nav ────────────────────────────────────────────────────────────────
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  ch: 0, title: (ko: boolean) => ko ? "구조화금융 개요"    : "Overview"          },
  { slug: "structured-abs",       ch: 1, title: (ko: boolean) => ko ? "Ch.1 ABS"           : "Ch.1 ABS"          },
  { slug: "structured-clo",       ch: 2, title: (ko: boolean) => ko ? "Ch.2 CLO"           : "Ch.2 CLO"          },
  { slug: "structured-cmbs",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 CMBS"          : "Ch.3 CMBS"         },
  { slug: "structured-waterfall", ch: 4, title: (ko: boolean) => ko ? "Ch.4 워터폴·트랑쉐"  : "Ch.4 Waterfall"    },
  { slug: "structured-cdo",       ch: 5, title: (ko: boolean) => ko ? "Ch.5 CDO·합성CDO"   : "Ch.5 CDO"          },
  { slug: "structured-cases",     ch: 6, title: (ko: boolean) => ko ? "Ch.6 케이스스터디"   : "Ch.6 Case Studies" },
];
const thisCh = 3;

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "$0.9조",
    label: (ko: boolean) => ko ? "미국 CMBS 잔액 (2024)" : "US CMBS Outstanding (2024)",
    note: (ko: boolean) => ko ? "상업용 부동산 모기지 총 시장의 약 20%" : "~20% of total commercial real estate mortgage market",
    color: "bg-amber-500",
  },
  {
    value: "8.5%",
    label: (ko: boolean) => ko ? "오피스 CMBS 연체율 (2024)" : "Office CMBS Delinquency Rate (2024)",
    note: (ko: boolean) => ko ? "2019년 1.5% → 2024년 8.5% 급등" : "Surged from 1.5% in 2019 to 8.5% in 2024",
    color: "bg-orange-500",
  },
  {
    value: "$18.6B",
    label: (ko: boolean) => ko ? "WeWork 파산 당시 부채" : "WeWork Total Debt at Bankruptcy",
    note: (ko: boolean) => ko ? "2023년 11월 챕터 11 신청, 수십억 달러 CMBS 파급" : "Chapter 11 filed Nov 2023, billions in CMBS ripple effects",
    color: "bg-red-500",
  },
];

// ── CMBS vs RMBS ──────────────────────────────────────────────────────────────
const CMBS_VS_RMBS = [
  { item: (ko: boolean) => ko ? "담보 자산" : "Collateral", cmbs: (ko: boolean) => ko ? "상업용 부동산 (오피스·리테일·호텔·물류)" : "Commercial RE (office, retail, hotel, logistics)", rmbs: (ko: boolean) => ko ? "주거용 부동산 (아파트·단독주택)" : "Residential RE (apartments, single-family homes)" },
  { item: (ko: boolean) => ko ? "대출 수" : "Loan Count", cmbs: (ko: boolean) => ko ? "수십~수백 건 (분산도 낮음)" : "Tens to hundreds of loans (low diversification)", rmbs: (ko: boolean) => ko ? "수천~수만 건 (분산도 높음)" : "Thousands to tens of thousands (high diversification)" },
  { item: (ko: boolean) => ko ? "대출 규모" : "Loan Size", cmbs: (ko: boolean) => ko ? "대형 개별 대출 ($5M~$1B+)" : "Large individual loans ($5M–$1B+)", rmbs: (ko: boolean) => ko ? "소형 개별 대출 ($100K~$2M)" : "Small individual loans ($100K–$2M)" },
  { item: (ko: boolean) => ko ? "상환 구조" : "Repayment", cmbs: (ko: boolean) => ko ? "만기 일괄 상환 (Balloon Payment)" : "Balloon payment at maturity", rmbs: (ko: boolean) => ko ? "원리금 분할 상환 (Amortizing)" : "Fully amortizing over the loan term" },
  { item: (ko: boolean) => ko ? "핵심 분석 지표" : "Key Metrics", cmbs: "LTV, DSCR, NOI, Debt Yield", rmbs: (ko: boolean) => ko ? "LTV, 차주 신용도(FICO), DTI" : "LTV, borrower credit (FICO), DTI" },
  { item: (ko: boolean) => ko ? "조기 상환 위험" : "Prepayment Risk", cmbs: (ko: boolean) => ko ? "낮음 (Lockout·Defeasance 조항)" : "Low (lockout / defeasance provisions)", rmbs: (ko: boolean) => ko ? "높음 (차주가 언제든 중도상환 가능)" : "High (borrowers can repay anytime)" },
  { item: (ko: boolean) => ko ? "섹터 집중 리스크" : "Sector Concentration Risk", cmbs: (ko: boolean) => ko ? "높음 — 오피스 비중 30%+ 풀 존재" : "High — some pools 30%+ office exposure", rmbs: (ko: boolean) => ko ? "낮음 — 지역 분산이 주요 리스크" : "Low — geographic diversification is main driver" },
];

// ── Key Metrics ───────────────────────────────────────────────────────────────
const KEY_METRICS = [
  {
    name: "LTV",
    fullName: (ko: boolean) => ko ? "담보인정비율 (Loan-to-Value)" : "Loan-to-Value Ratio",
    icon: "🏢",
    formula: "대출 잔액 ÷ 부동산 감정가",
    formulaEn: "Loan Balance ÷ Appraised Property Value",
    standard: (ko: boolean) => ko ? "신규 발행 기준 65~70% 이하 요구" : "New issuance requires ≤65–70%",
    crisis: (ko: boolean) => ko ? "오피스 가치 40% 하락 시 LTV 100%+ → 선순위도 손실 위험" : "40% office price drop pushes LTV 100%+ → senior tranche at risk",
    example: (ko: boolean) => ko ? "2023년 일부 오피스 CMBS: LTV 150~200% 보고" : "Some 2023 office CMBS reported LTV 150–200%",
    color: "border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    name: "DSCR",
    fullName: (ko: boolean) => ko ? "부채상환커버리지비율 (Debt Service Coverage)" : "Debt Service Coverage Ratio",
    icon: "💰",
    formula: "연간 NOI ÷ 연간 원리금 상환액",
    formulaEn: "Annual NOI ÷ Annual Debt Service",
    standard: (ko: boolean) => ko ? "DSCR 1.25 이상 → 대출 기준 충족" : "DSCR ≥1.25 generally meets underwriting criteria",
    crisis: (ko: boolean) => ko ? "DSCR 1.0 이하 → 임박한 부실 신호. 오피스 공실 → NOI 감소 → DSCR 하락" : "DSCR below 1.0 → imminent distress signal. Office vacancies → NOI decline → DSCR deterioration",
    example: (ko: boolean) => ko ? "WeWork 계약 종료 건물: DSCR 0.6까지 하락 사례 보고" : "Buildings losing WeWork leases: DSCR reported dropping to 0.6",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    name: "NOI",
    fullName: (ko: boolean) => ko ? "순영업이익 (Net Operating Income)" : "Net Operating Income",
    icon: "📊",
    formula: "임대수입 - 운영비용 (부동산세·보험·유지비 포함)",
    formulaEn: "Rental Revenue − Operating Expenses (property tax, insurance, maintenance)",
    standard: (ko: boolean) => ko ? "DSCR·Debt Yield 계산의 분자. 임차인 이탈이 즉시 NOI 직격" : "Numerator for DSCR and Debt Yield. Tenant departures immediately hit NOI",
    crisis: (ko: boolean) => ko ? "오피스 공실률 20% 상승 시 NOI 30~40% 감소 가능 (고정비 구조)" : "20% office vacancy increase can reduce NOI 30–40% (fixed cost structure)",
    example: (ko: boolean) => ko ? "WeWork 퇴거 후 건물 NOI: 즉시 50~70% 감소 사례" : "Post-WeWork eviction buildings: NOI immediately fell 50–70% in cases",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    name: "Debt Yield",
    fullName: (ko: boolean) => ko ? "부채 수익률 (Debt Yield)" : "Debt Yield",
    icon: "📈",
    formula: "NOI ÷ 대출 잔액",
    formulaEn: "NOI ÷ Loan Balance",
    standard: (ko: boolean) => ko ? "최소 8~10% 이상 요구. LTV와 캡레이트의 영향을 동시에 반영" : "Minimum 8–10% typically required. Reflects both LTV and cap rate effects",
    crisis: (ko: boolean) => ko ? "Debt Yield 낮을수록 대출금 대비 NOI 창출력 약함 → 리파이낸싱 불가" : "Lower Debt Yield = weaker NOI generation vs loan balance → refinancing blocked",
    example: (ko: boolean) => ko ? "2023년 오피스 CMBS 리파이낸싱 거부 사례의 핵심 지표" : "Key metric cited in 2023 office CMBS refinancing rejections",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  },
];

// ── LTV/DSCR Example Table ─────────────────────────────────────────────────
const EXAMPLE_TABLE = [
  { scenario: (ko: boolean) => ko ? "정상 (발행 시)" : "Normal (at issuance)", ltv: "65%", dscr: "1.45×", noi: "$6.5M", debtYield: "10.0%", status: (ko: boolean) => ko ? "양호" : "Healthy", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
  { scenario: (ko: boolean) => ko ? "경미한 스트레스 (공실 10%↑)" : "Mild Stress (10% vacancy ↑)", ltv: "72%", dscr: "1.18×", noi: "$5.3M", debtYield: "8.2%", status: (ko: boolean) => ko ? "주의" : "Watch", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
  { scenario: (ko: boolean) => ko ? "중간 스트레스 (공실 20%↑)" : "Moderate Stress (20% vacancy ↑)", ltv: "85%", dscr: "0.95×", noi: "$4.1M", debtYield: "6.3%", status: (ko: boolean) => ko ? "부실 임박" : "Near Distress", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
  { scenario: (ko: boolean) => ko ? "심각 (WeWork 퇴거)" : "Severe (WeWork exit)", ltv: "130%+", dscr: "0.55×", noi: "$2.2M", debtYield: "3.4%", status: (ko: boolean) => ko ? "부실" : "Distressed", color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300" },
];

// ── Tranche Structure ─────────────────────────────────────────────────────────
const TRANCHES = [
  { name: "Senior AAA", pct: 65, spread: "SOFR+140bp", recovery: "90%+", note: (ko: boolean) => ko ? "최선순위. 두꺼운 후순위 버퍼로 보호. 은행·보험사." : "Most senior. Protected by thick subordination buffer. Banks, insurers.", color: "bg-emerald-500", width: 90 },
  { name: "AA", pct: 8, spread: "SOFR+200bp", recovery: "80–90%", note: (ko: boolean) => ko ? "두번째 선순위. 기관 투자자." : "Second senior. Institutional investors.", color: "bg-teal-500", width: 75 },
  { name: "A", pct: 6, spread: "SOFR+270bp", recovery: "65–80%", note: (ko: boolean) => ko ? "세번째 선순위." : "Third senior tranche.", color: "bg-blue-400", width: 60 },
  { name: "BBB (Mezzanine)", pct: 5, spread: "SOFR+420bp", recovery: "35–60%", note: (ko: boolean) => ko ? "메자닌. 손실 먼저 흡수." : "Mezzanine. First to absorb losses.", color: "bg-amber-500", width: 46 },
  { name: "BB (Junior Mezz)", pct: 4, spread: "SOFR+700bp", recovery: "10–35%", note: (ko: boolean) => ko ? "투기등급. 헤지펀드." : "Speculative grade. Hedge funds.", color: "bg-orange-500", width: 32 },
  { name: "B-Piece (First Loss)", pct: 12, spread: (ko: boolean) => ko ? "목표 IRR 12–18%" : "Target IRR 12–18%", recovery: "0–10%", note: (ko: boolean) => ko ? "스페셜 서비서 지명권. 가장 먼저 손실 흡수. 종종 발행 기관 보유." : "Special Servicer naming rights. First loss. Often held by issuer.", color: "bg-red-600", width: 16 },
];

// ── Office CMBS Crisis Timeline ───────────────────────────────────────────────
const CRISIS_TIMELINE = [
  {
    year: "2020년 3월",
    event: (ko: boolean) => ko ? "COVID-19 — 사무실 전면 폐쇄" : "COVID-19 — Office Full Closure",
    detail: (ko: boolean) => ko ? "전 세계 사무실이 하루아침에 빈다. 재택근무 실험이 시작됐고, 기업들은 공간 효율성을 재평가하게 된다." : "Offices empty overnight. The remote work experiment begins as companies reassess space efficiency.",
    metric: (ko: boolean) => ko ? "오피스 가동률 15~20%로 급락" : "Office utilization drops to 15–20%",
    sentiment: "crisis",
    dot: "bg-red-500",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
  },
  {
    year: "2021–22년",
    event: (ko: boolean) => ko ? "하이브리드 근무 정착 — 구조적 변화 확인" : "Hybrid Work Established — Structural Shift Confirmed",
    detail: (ko: boolean) => ko ? "팬데믹 종료 후에도 재택근무가 정착됨을 확인. 대형 테크 기업들이 오피스 리스를 축소. WeWork 같은 플렉시블 오피스 대형 임차인도 수요 감소에 직면." : "Remote work persists even after pandemic ends. Major tech companies shrink office leases. Flexible office operators like WeWork face declining demand.",
    metric: (ko: boolean) => ko ? "미국 오피스 공실률 12% → 19% 상승" : "US office vacancy rate rises from 12% to 19%",
    sentiment: "warning",
    dot: "bg-amber-500",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
  },
  {
    year: "2022년",
    event: (ko: boolean) => ko ? "금리 급등 — 캡레이트 상승 → 부동산 가치 폭락" : "Rate Surge — Cap Rate Rise → Property Value Collapse",
    detail: (ko: boolean) => ko ? "Fed 기준금리 0% → 5.25%로 급등. 상업용 부동산 캡레이트가 동반 상승하며 오피스 가치가 20~40% 폭락. 기존 CMBS의 만기 시 리파이낸싱 금액이 새 감정가를 초과하는 상황 발생." : "Fed rate hikes from 0% to 5.25%. Commercial real estate cap rates rise accordingly; office values fall 20–40%. Existing CMBS loan balances exceed new appraised values at maturity.",
    metric: (ko: boolean) => ko ? "주요 오피스 가치 -30~40% (도심 A급도 영향)" : "Major office values -30–40% (even Class A CBD affected)",
    sentiment: "crisis",
    dot: "bg-red-500",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
  },
  {
    year: "2023년 2월",
    event: (ko: boolean) => ko ? "Brookfield — LA 오피스 CMBS 의도적 디폴트" : "Brookfield — Intentional LA Office CMBS Default",
    detail: (ko: boolean) => ko ? "글로벌 대형 부동산 운용사 Brookfield가 LA 소재 오피스 빌딩 두 채의 CMBS를 의도적으로 디폴트. 건물 가치가 대출 잔액을 크게 하회해 리파이낸싱 불가. '건물을 돌려주는' 전략적 디폴트를 선택." : "Major global real estate manager Brookfield intentionally defaults on two LA office CMBS loans. Building values far below loan balances, making refinancing impossible. Strategic default — handing back the keys.",
    metric: (ko: boolean) => ko ? "두 건물 대출 합계 약 $750M" : "Combined loan balance ~$750M on two buildings",
    sentiment: "warning",
    dot: "bg-orange-500",
    color: "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20",
  },
  {
    year: "2023년 11월",
    event: (ko: boolean) => ko ? "WeWork 챕터 11 파산 신청" : "WeWork Files Chapter 11 Bankruptcy",
    detail: (ko: boolean) => ko ? "글로벌 오피스 최대 임차인 WeWork의 파산. 수십 개 도심 오피스 빌딩에서 임대 계약 동시 해지. 해당 건물들의 NOI가 즉시 50~70% 급락하며 CMBS 부실로 직결됐다." : "WeWork, the world's largest office tenant, files for bankruptcy. Simultaneous lease terminations at dozens of urban office buildings. Immediate 50–70% NOI drops directly triggered CMBS distress.",
    metric: (ko: boolean) => ko ? "WeWork 부채 $18.6B, 전 세계 700개 이상 건물 영향" : "WeWork debt $18.6B, 700+ buildings globally affected",
    sentiment: "crisis",
    dot: "bg-rose-600",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
  },
  {
    year: "2024년",
    event: (ko: boolean) => ko ? "오피스 CMBS 연체율 8.5% — 역사적 고점 경신" : "Office CMBS Delinquency 8.5% — Record High",
    detail: (ko: boolean) => ko ? "2024년 오피스 CMBS 연체율이 8.5%를 넘어 역사적 고점을 경신. 스페셜 서비서로 이관된 대출 규모가 폭증. 만기 연장이 어렵고 리파이낸싱도 불가한 '좀비 CMBS' 증가." : "Office CMBS delinquency exceeds 8.5%, hitting record highs in 2024. Volume transferred to special servicers surges. 'Zombie CMBS' — unable to extend maturity or refinance — increases.",
    metric: (ko: boolean) => ko ? "전체 CMBS 연체율 4.5% vs 오피스만 8.5%" : "Overall CMBS delinquency 4.5% vs office-only 8.5%",
    sentiment: "distress",
    dot: "bg-red-600",
    color: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20",
  },
];

// ── Korea RE Section ───────────────────────────────────────────────────────────
const KOREA_RE = [
  {
    title: (ko: boolean) => ko ? "강남 오피스 시장 — 상대적 견조" : "Gangnam Office Market — Relatively Stable",
    icon: "🏙️",
    detail: (ko: boolean) => ko ? "서울 강남 A급 오피스는 공실률 2~3% 수준으로 견조. 국내 대기업·금융사의 대면 근무 복귀 속도가 빠르고, 강남 오피스 공급이 제한적. 하지만 외국계 IT 기업 오피스 수요 감소는 변수." : "Seoul Gangnam Class-A office maintains 2–3% vacancy, remaining relatively stable. Domestic large corporates and financial firms return to office faster, with limited supply additions. However, declining foreign tech company office demand is a variable.",
    badge: (ko: boolean) => ko ? "견조" : "Stable",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    title: (ko: boolean) => ko ? "한국 부동산PF ABS — 구조적 위험" : "Korean Real Estate PF ABS — Structural Risk",
    icon: "⚠️",
    detail: (ko: boolean) => ko ? "한국 부동산PF ABS는 CMBS와 다른 구조지만 유사한 리스크를 내포. 개발 단계 부동산(미완성)에 단기 대출 후 ABS 발행. 공사 중단·분양 부진 시 부실화. 2023~24년 태영건설 워크아웃 등 건설사 부실이 PF ABS 시장에 파급됐다." : "Korean real estate PF ABS has a different structure from CMBS but carries analogous risks. Short-term loans on development-stage (incomplete) properties securitized into ABS. Distress occurs when construction stalls or presales disappoint. Taeyoung Construction workout in 2023–24 rippled through the PF ABS market.",
    badge: (ko: boolean) => ko ? "주의 필요" : "Watch Required",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    title: (ko: boolean) => ko ? "오피스 vs 물류 CMBS 양극화" : "Office vs Logistics CMBS Divergence",
    icon: "📦",
    detail: (ko: boolean) => ko ? "글로벌적으로 오피스 CMBS는 부실화되는 반면, 물류센터(Logistics) CMBS는 이커머스 성장으로 견조. 리테일(쇼핑몰) CMBS는 오피스와 유사한 구조적 하락. 한국에서도 수도권 물류센터 CMBS는 상대적으로 양호한 편이다." : "Globally, office CMBS deteriorates while logistics CMBS remains robust on e-commerce growth. Retail (mall) CMBS follows office in structural decline. In Korea, metropolitan logistics CMBS is relatively healthy.",
    badge: (ko: boolean) => ko ? "섹터 양극화" : "Sector Divergence",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
];

// ── Investor Checklist ─────────────────────────────────────────────────────────
const INVESTOR_CHECKLIST = [
  { item: (ko: boolean) => ko ? "자산 풀 섹터 구성 확인" : "Verify asset pool sector composition", detail: (ko: boolean) => ko ? "오피스 비중이 30% 이상이면 현재 환경에서 주의. 물류·다목적 분산 풀 선호." : "Office weight >30% warrants caution in current environment. Prefer logistics/diversified pools.", risk: "high" },
  { item: (ko: boolean) => ko ? "각 대출의 DSCR 분포 확인" : "Check DSCR distribution for each loan", detail: (ko: boolean) => ko ? "DSCR 1.0 미만 대출 비율, 평균 DSCR, 최하위 10% DSCR 확인. 발행 문서의 Annex에 포함됨." : "Check % of loans with DSCR below 1.0, average DSCR, bottom-decile DSCR. Found in issuance document Annex.", risk: "high" },
  { item: (ko: boolean) => ko ? "만기 프로파일 및 리파이낸싱 조건 확인" : "Check maturity profile and refinancing conditions", detail: (ko: boolean) => ko ? "2~3년 내 만기 도래 대출의 리파이낸싱 가능성 평가. 현재 캡레이트와 NOI 기준 신규 대출 LTV 및 DSCR 추정." : "Assess refinancing viability for loans maturing in 2–3 years. Estimate new LTV and DSCR at current cap rates and NOI.", risk: "high" },
  { item: (ko: boolean) => ko ? "스페셜 서비서 및 B-피스 바이어 확인" : "Identify Special Servicer and B-piece buyer", detail: (ko: boolean) => ko ? "스페셜 서비서의 회수 실적, B-피스 바이어의 이해충돌 가능성 확인. 발행 구조 문서에 기재." : "Check Special Servicer recovery track record and B-piece buyer conflict of interest potential. Disclosed in structure documents.", risk: "medium" },
  { item: (ko: boolean) => ko ? "지역·임차인 집중도 분석" : "Analyze geographic and tenant concentration", detail: (ko: boolean) => ko ? "특정 지역(예: 샌프란시스코, 뉴욕 미드타운)이나 단일 임차인 의존도 높은 풀은 위험. WeWork·Brookfield 사례가 교훈." : "Pools with high concentration in specific markets (e.g., San Francisco, Midtown NY) or single tenants carry elevated risk. WeWork/Brookfield are the cautionary tales.", risk: "medium" },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "CMBS와 RMBS의 가장 큰 리스크 차이는 무엇인가요?"
      : "What is the biggest risk difference between CMBS and RMBS?",
    a: (ko: boolean) => ko
      ? "세 가지 핵심 차이가 있습니다. ①집중 리스크: RMBS는 수천 개 주거 대출을 담보로 하여 개별 부도 리스크가 분산되지만, CMBS는 수십~수백 개 대형 상업 대출로 구성되어 한 건의 대형 부실(예: WeWork 입주 건물)이 전체 풀에 큰 충격을 줍니다. ②상환 구조: CMBS는 만기 시 Balloon Payment(일괄 상환) 구조여서 만기 시 부동산 가치와 금리가 리파이낸싱 가능 여부를 결정합니다. RMBS는 원리금 분할 상환이라 이 리스크가 없습니다. ③경기 민감도: 상업용 부동산 임대 수익은 경제 환경에 민감하지만, 주거용 모기지는 개인의 대출 상환 의지가 더 강합니다."
      : "Three key differences. ①Concentration risk: RMBS is backed by thousands of residential loans (diversified), while CMBS pools tens to hundreds of large commercial loans — a single large default (e.g., a WeWork-leased building) delivers major pool-level impact. ②Repayment structure: CMBS has Balloon Payment at maturity, so property value and interest rates at maturity determine refinancing viability. RMBS is fully amortizing — no such risk. ③Cyclical sensitivity: commercial real estate rents are highly sensitive to economic conditions, while residential borrowers have stronger incentives to maintain repayments.",
  },
  {
    q: (ko: boolean) => ko
      ? "스페셜 서비서는 왜 이해충돌 문제가 생기나요?"
      : "Why does a conflict of interest arise with Special Servicers?",
    a: (ko: boolean) => ko
      ? "CMBS 구조에서 B-피스(가장 후순위 트랑쉐) 투자자는 종종 스페셜 서비서 지명권을 갖습니다. 이 구조가 이해충돌의 원인입니다. 예를 들어, B-피스 바이어가 특정 부실 대출에 대해 ①즉시 처분(선순위 투자자 회수 극대화)이 아닌 ②연장·재구조화(자신이 보유한 후순위 트랑쉐 손실 지연)를 선택할 유인이 있습니다. 반면 선순위 AAA 투자자는 빠른 회수를 원합니다. SEC는 이 구조의 투명성 강화를 지속 요구하고 있으며, 발행 문서에 스페셜 서비서 관련 내용이 기재됩니다."
      : "In CMBS structure, B-piece (most subordinate tranche) investors often hold Special Servicer naming rights. This creates the conflict. For example, a B-piece buyer facing a distressed loan may prefer ②extension/restructuring (delaying their subordinate loss) over ①immediate disposition (maximizing senior recovery). Meanwhile, senior AAA investors want quick recovery. The SEC continuously pushes for greater transparency in this structure, and Special Servicer information is disclosed in issuance documents.",
  },
  {
    q: (ko: boolean) => ko
      ? "오피스 CMBS 위기가 금융시스템 전반으로 전파될 수 있나요?"
      : "Can the office CMBS crisis spread to the broader financial system?",
    a: (ko: boolean) => ko
      ? "2024년 기준으로는 2008년 수준의 시스템 전파 가능성은 낮지만 완전히 배제할 수 없습니다. 이유: ①규모가 제한적 — 오피스 CMBS는 전체 CMBS의 약 25%, 전체 상업용 부동산의 일부. ②CLO·RMBS와 달리 CDO에 재포장된 사례가 드뭄(연결 고리 단순). ③지역 은행 경로가 가장 위험 — 오피스 직접 대출을 많이 보유한 지역 은행 중 일부가 2023년 SVB 사태 이후 취약. 시스템 리스크보다 지역 은행과 특정 부동산 펀드의 손실 집중이 더 현실적인 문제입니다."
      : "As of 2024, systemic spread to the level of 2008 is unlikely but cannot be fully ruled out. Reasons: ①Limited scale — office CMBS is ~25% of total CMBS, a fraction of commercial real estate. ②Unlike CLO/RMBS, repackaging into CDOs is rare (simpler linkage). ③Regional bank channel is the biggest risk — some regional banks with heavy direct office loan exposure remain vulnerable post-2023 SVB. Concentrated losses at regional banks and specific real estate funds is a more realistic concern than broad systemic risk.",
  },
  {
    q: (ko: boolean) => ko
      ? "DSCR이 1.0 이하인 CMBS 대출은 무조건 디폴트하나요?"
      : "Does a CMBS loan with DSCR below 1.0 automatically default?",
    a: (ko: boolean) => ko
      ? "반드시 그렇지는 않습니다. DSCR 1.0 이하는 임박한 부실 '신호'이지 자동 디폴트 조건이 아닙니다. 실제 디폴트 경로: ①원리금 납입 불이행 → 연체(30일, 60일, 90일+) → 스페셜 서비서 이관 → 연장 협상 or 처분. 차주(건물 소유자)는 추가 자금 투입, 임차인 유치 노력, 대주와의 협상 등으로 DSCR을 개선하려 시도합니다. 하지만 오피스 시장처럼 구조적 수요 감소가 있으면 NOI 회복이 어렵고 디폴트로 이어집니다. Balloon Payment 만기 시 리파이낸싱 불가도 독립적 디폴트 원인입니다."
      : "Not necessarily. DSCR below 1.0 is an imminent distress 'signal,' not an automatic default trigger. Actual default path: ①Missed principal/interest payments → delinquency (30, 60, 90+ days) → transfer to Special Servicer → extension negotiation or disposition. Borrowers (building owners) try to improve DSCR through additional capital injection, tenant attraction, and lender negotiations. However, structural demand decline like the office market makes NOI recovery difficult and leads to default. Balloon Payment maturity refinancing failure is also an independent default cause.",
  },
  {
    q: (ko: boolean) => ko
      ? "CMBS AAA 트랑쉐는 오피스 CMBS 위기에도 안전한가요?"
      : "Is the CMBS AAA tranche safe even during the office CMBS crisis?",
    a: (ko: boolean) => ko
      ? "대체로 AAA는 상당한 보호를 받지만 오피스 집중도가 극단적인 풀에서는 위험이 증가합니다. AAA 보호 메커니즘: ①두꺼운 후순위 버퍼(35%) — 전체 풀이 35% 손실을 봐야 AAA 손실 시작. ②OC·IC 트리거 — 조기에 현금 흐름을 AAA로 집중. 위험 상황: 오피스 CMBS에서 부동산 가치가 50~60% 폭락하면 35% 버퍼도 부족. 실제로 극단적 오피스 집중 CMBS에서 AAA가 AAA+ 기준 충족 못해 등급 하향 조정된 사례가 2023~24년에 보고됐습니다."
      : "Generally, AAA has substantial protection, but risk increases in pools with extreme office concentration. AAA protection mechanisms: ①Thick subordination buffer (35%) — the entire pool needs 35% losses before AAA sees any. ②OC/IC triggers — early redirection of cash flows to AAA. Risk scenario: if office property values fall 50–60% in an office-concentrated CMBS, the 35% buffer becomes insufficient. Indeed, AAA tranches in extreme office-concentrated CMBS were downgraded in 2023–24 cases when they failed to maintain AAA-equivalent criteria.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Trepp", title: "CMBS Delinquency Rate & Special Servicing Report", url: "https://www.trepp.com/", source: "Trepp, 2024" },
  { id: 2, author: "Mortgage Bankers Association", title: "Commercial/Multifamily Mortgage Debt Outstanding", url: "https://www.mba.org/", source: "MBA, 2024" },
  { id: 3, author: "MSCI Real Assets", title: "US Office Real Estate Market Analysis", url: "https://www.msci.com/real-assets", source: "MSCI, 2024" },
  { id: 4, author: "S&P Global", title: "CMBS Ratings Action Report — Office Sector", url: "https://www.spglobal.com/", source: "S&P Global, 2024" },
  { id: 5, author: "Federal Reserve Board", title: "Financial Stability Report — Commercial Real Estate", url: "https://www.federalreserve.gov/publications/financial-stability-report.htm", source: "Fed, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function StructuredCmbsClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const prev = STRUCTURED_SERIES[thisCh - 1] ?? null;
  const next = STRUCTURED_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ───────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
          {STRUCTURED_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-amber-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-amber-400 hover:text-amber-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ────────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>Structured · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko
              ? "CMBS 완전 해설 — 상업용 부동산 모기지가 채권이 되는 과정 & 오피스 CMBS 위기"
              : "CMBS Complete Guide — How Commercial Mortgages Become Bonds & the Office CMBS Crisis"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "WeWork 파산이 왜 CMBS 시장을 뒤흔들었을까요. Brookfield 같은 대형 운용사가 왜 의도적으로 디폴트를 선택했을까요. 오피스 공실이 어떻게 AAA 등급 채권의 손실로 이어지는지 — CMBS의 구조와 위기를 완전히 이해합니다."
              : "Why did WeWork's bankruptcy shake the CMBS market? Why did a major firm like Brookfield choose intentional default? How office vacancies lead to losses in AAA-rated bonds — a complete understanding of CMBS structure and crisis."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 30초 요약 ────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 30초 요약" : "1. 30-Second Summary"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CMBS 시장의 현재 규모, 오피스 위기 심각성, 대표 사례를 숫자로 먼저 파악합니다."
              : "Understand the current scale of the CMBS market, the severity of the office crisis, and key cases through numbers first."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {STATS.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <div className={`w-8 h-1 rounded-full ${s.color} mb-3`} />
                <p className="font-black text-3xl text-gray-900 dark:text-gray-50 mb-1">{s.value}</p>
                <p className="font-bold text-sm text-gray-700 dark:text-gray-300 mb-2">{s.label(ko)}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{s.note(ko)}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🏢</span>
              <div>
                <p className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-1.5">
                  {ko ? "CMBS가 중요한 이유 — 한 줄 정의" : "Why CMBS Matters — One-Line Definition"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "CMBS는 상업용 부동산 시장과 자본시장을 연결하는 고리입니다. 오피스·쇼핑몰·호텔의 가치가 CMBS를 통해 AAA 채권 투자자의 수익률로 직결됩니다. 재택근무 확산, 이커머스 성장, 금리 변화가 모두 CMBS 시장에 파급됩니다."
                    : "CMBS is the link between commercial real estate markets and capital markets. The value of offices, malls, and hotels directly flows through CMBS to AAA bond investors' returns. Remote work adoption, e-commerce growth, and interest rate changes all ripple through the CMBS market."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 2: CMBS란 무엇인가 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. CMBS란 무엇인가" : "2. What Is CMBS?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "정의, 발행 구조, RMBS와의 핵심 차이를 이해합니다." : "Understand the definition, issuance structure, and core differences from RMBS."}
          </p>

          {/* CMBS 구조 다이어그램 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "CMBS 발행 구조 — 상업용 부동산 → 채권" : "CMBS Issuance Structure — Commercial RE → Bonds"}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
              <div className="rounded-lg border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20 p-3 text-center flex-1 min-w-0">
                <p className="text-lg mb-1">🏢🏨🏬</p>
                <p className="font-bold text-amber-800 dark:text-amber-300 text-xs">{ko ? "상업용 부동산 모기지" : "Commercial RE Mortgages"}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{ko ? "오피스·호텔·리테일·물류센터 대출 수십~수백 건" : "Tens–hundreds of office, hotel, retail, logistics loans"}</p>
              </div>
              <span className="text-amber-400 font-bold text-xl shrink-0">→</span>
              <div className="rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700 p-3 text-center flex-1 min-w-0">
                <p className="text-lg mb-1">🏛️</p>
                <p className="font-bold text-gray-800 dark:text-gray-200 text-xs">SPV (신탁)</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{ko ? "모기지를 매입·신탁. 발행자로부터 부외 처리." : "Purchases and holds mortgages. Off-balance-sheet for originator."}</p>
              </div>
              <span className="text-amber-400 font-bold text-xl shrink-0">→</span>
              <div className="rounded-lg border border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20 p-3 text-center flex-1 min-w-0">
                <p className="text-lg mb-1">📄</p>
                <p className="font-bold text-emerald-800 dark:text-emerald-300 text-xs">{ko ? "CMBS 발행" : "CMBS Issuance"}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{ko ? "AAA~B피스 트랑쉐로 분할 발행. 투자자에게 판매." : "Issued in AAA–B-piece tranches. Sold to investors."}</p>
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-white dark:bg-gray-800 p-3 text-xs border border-gray-100 dark:border-gray-700">
                <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">🔄 {ko ? "서비서 역할" : "Servicer Role"}</p>
                <p className="text-gray-500 dark:text-gray-400">{ko ? "마스터 서비서: 정상 대출 임대료 수집·배분. 스페셜 서비서: 부실 대출 처리·협상." : "Master Servicer: collecting and distributing rent from performing loans. Special Servicer: handling and negotiating distressed loans."}</p>
              </div>
              <div className="rounded-lg bg-white dark:bg-gray-800 p-3 text-xs border border-gray-100 dark:border-gray-700">
                <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">⏰ {ko ? "만기 구조" : "Maturity Structure"}</p>
                <p className="text-gray-500 dark:text-gray-400">{ko ? "대부분 5~10년 만기 후 Balloon Payment. 만기 시 부동산 가치와 금리가 리파이낸싱 가능 여부를 결정한다." : "Most mature in 5–10 years with Balloon Payment. Property value and interest rates at maturity determine refinancing viability."}</p>
              </div>
            </div>
          </div>

          {/* CMBS vs RMBS Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "CMBS vs RMBS 비교" : "CMBS vs RMBS Comparison"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-2.5 text-amber-600 dark:text-amber-400">CMBS</th>
                    <th className="text-left px-4 py-2.5 text-blue-600 dark:text-blue-400">RMBS</th>
                  </tr>
                </thead>
                <tbody>
                  {CMBS_VS_RMBS.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-2.5 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{row.cmbs(ko)}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{row.rmbs(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 3: 핵심 지표 ────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. 핵심 지표 — LTV · DSCR · NOI · Debt Yield" : "3. Key Metrics — LTV, DSCR, NOI & Debt Yield"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CMBS 심사·모니터링·부실 판정에 사용되는 4가지 핵심 지표를 심층 이해합니다."
              : "A deep understanding of the four key metrics used for CMBS underwriting, monitoring, and distress determination."}
          </p>
          <div className="space-y-4 mb-8">
            {KEY_METRICS.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-5 ${m.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{m.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="font-black text-lg text-gray-900 dark:text-gray-50">{m.name}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.badge}`}>{m.fullName(ko)}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">{ko ? "공식" : "Formula"}</span>
                        <span className="font-mono font-semibold text-gray-800 dark:text-gray-200">{ko ? m.formula : m.formulaEn}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">{ko ? "기준" : "Standard"}</span>
                        <span className="text-gray-700 dark:text-gray-300">{m.standard(ko)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">{ko ? "위기 상황" : "Crisis Context"}</span>
                        <span className="text-gray-700 dark:text-gray-300">{m.crisis(ko)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">{ko ? "실제 사례" : "Real Example"}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{m.example(ko)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LTV/DSCR Example Table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "오피스 CMBS 지표 변화 시나리오 — $65M 대출, 초기 NOI $6.5M" : "Office CMBS Metrics Scenario — $65M Loan, Initial NOI $6.5M"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-400 bg-gray-50 dark:bg-gray-800/40">
                    <th className="text-left px-4 py-2.5">{ko ? "시나리오" : "Scenario"}</th>
                    <th className="text-left px-4 py-2.5">LTV</th>
                    <th className="text-left px-4 py-2.5">DSCR</th>
                    <th className="text-left px-4 py-2.5">NOI</th>
                    <th className="text-left px-4 py-2.5">Debt Yield</th>
                    <th className="text-left px-4 py-2.5">{ko ? "상태" : "Status"}</th>
                  </tr>
                </thead>
                <tbody>
                  {EXAMPLE_TABLE.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.scenario(ko)}</td>
                      <td className="px-4 py-2.5 text-xs font-mono text-gray-600 dark:text-gray-400">{row.ltv}</td>
                      <td className="px-4 py-2.5 text-xs font-mono text-gray-600 dark:text-gray-400">{row.dscr}</td>
                      <td className="px-4 py-2.5 text-xs font-mono text-gray-600 dark:text-gray-400">{row.noi}</td>
                      <td className="px-4 py-2.5 text-xs font-mono text-gray-600 dark:text-gray-400">{row.debtYield}</td>
                      <td className="px-4 py-2.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.color}`}>{row.status(ko)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 4: 트랑쉐 구조 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 트랑쉐 구조 — 선순위·메자닌·B-피스" : "4. Tranche Structure — Senior, Mezzanine & B-Piece"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CMBS 손실은 아래서부터 흡수됩니다. B-피스→BB→BBB 순으로 사라지고 나서야 선순위에 영향이 생깁니다."
              : "CMBS losses are absorbed from the bottom up. B-piece→BB→BBB absorb losses before any impact reaches senior tranches."}
          </p>
          <div className="space-y-2">
            {TRANCHES.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.06)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 overflow-hidden">
                <div className="flex items-start gap-0">
                  <div className={`w-1.5 shrink-0 self-stretch ${t.color}`} />
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{t.name}</span>
                      <div className="flex items-center gap-3 text-xs font-mono shrink-0">
                        <span className="text-gray-500">{t.pct}%</span>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-500">{typeof t.spread === "function" ? t.spread(ko) : t.spread}</span>
                        <span className="text-gray-400">|</span>
                        <span className={`font-bold ${i < 3 ? "text-emerald-600 dark:text-emerald-400" : i < 4 ? "text-amber-600 dark:text-amber-400" : "text-rose-600 dark:text-rose-400"}`}>{t.recovery}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                      <div className={`h-1.5 rounded-full ${t.color}`} style={{ width: `${t.width}%` }} />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.note(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 px-4 py-3">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-1.5">
              ⚠️ {ko ? "스페셜 서비서 이해충돌" : "Special Servicer Conflict of Interest"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "B-피스 바이어(최후순위 투자자)는 종종 스페셜 서비서 지명권을 갖습니다. 이는 이해충돌을 낳습니다 — B-피스 바이어는 자신의 손실을 최대한 지연하기 위해 빠른 처분 대신 연장·재구조화를 선호할 수 있습니다. 선순위 투자자는 빠른 회수를 원하는 반면, 스페셜 서비서 이해관계는 반대 방향일 수 있습니다."
                : "B-piece buyers (most subordinate investors) often hold Special Servicer naming rights. This creates a conflict — the B-piece buyer may prefer extension/restructuring over quick disposition to delay their own losses. Senior investors want quick recovery, while Special Servicer interests may point in the opposite direction."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 5: 오피스 CMBS 위기 타임라인 ─────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 오피스 CMBS 위기 — WeWork·Brookfield·재택근무" : "5. Office CMBS Crisis — WeWork, Brookfield & Remote Work"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "2020년 COVID 쇼크부터 2024년 연체율 역대 최고치까지 — 오피스 CMBS 위기의 전체 타임라인."
              : "From the 2020 COVID shock to record 2024 delinquency rates — the full timeline of the office CMBS crisis."}
          </p>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {CRISIS_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-black text-sm font-mono" style={{ color: accent }}>{item.year}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                        <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          item.sentiment === "crisis" || item.sentiment === "distress"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                            : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                        }`}>
                          {item.metric(ko)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 6: 한국 상업용 부동산 ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 한국 상업용 부동산 — 강남 오피스와 부동산PF ABS" : "6. Korean Commercial Real Estate — Gangnam Office & RE PF ABS"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "미국 오피스 CMBS 위기가 한국에 주는 시사점과 한국 고유의 부동산 금융 구조."
              : "Implications of the US office CMBS crisis for Korea and Korea's unique real estate finance structure."}
          </p>
          <div className="space-y-4">
            {KOREA_RE.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.title(ko)}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge(ko)}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 7: 투자자 관점 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 투자자 관점 — CMBS 투자 체크리스트" : "7. Investor Perspective — CMBS Investment Checklist"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "CMBS 투자 전 확인해야 할 5가지 핵심 리스크 지표." : "Five key risk indicators to check before investing in CMBS."}
          </p>
          <div className="space-y-3">
            {INVESTOR_CHECKLIST.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 ${
                    item.risk === "high" ? "bg-red-500" : "bg-amber-500"
                  }`}>{i + 1}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <p className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.item(ko)}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.risk === "high"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                      }`}>{ko ? (item.risk === "high" ? "고위험" : "중위험") : (item.risk === "high" ? "High Risk" : "Med Risk")}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail(ko)}</p>
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
                    className="underline decoration-dotted hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── 이 챕터가 분석하는 실제 딜 ──────────────────────────────────── */}
        <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-14">
          <motion.p variants={fadeUp()} className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
            {ko ? "이 챕터가 연결되는 실제 딜 — CMBS 관점" : "Real Deals Connected to This Chapter — CMBS Lens"}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: `${base.replace("market-101", "deals")}/wework-ipo-collapse`,
                initials: "WW",
                bg: "bg-gray-800",
                title: ko ? "WeWork IPO 붕괴 (2019~2023) — 플렉시블 오피스의 몰락" : "WeWork IPO Collapse (2019–2023) — The Fall of Flexible Office",
                sub: ko ? "$47B 유니콘에서 파산까지. CMBS 시장에 미친 연쇄 충격." : "From $47B unicorn to bankruptcy. The CMBS ripple effects.",
              },
              {
                href: `${base.replace("market-101", "deals")}/brookfield-office-default`,
                initials: "BF",
                bg: "bg-slate-700",
                title: ko ? "Brookfield LA 오피스 CMBS 의도적 디폴트 (2023)" : "Brookfield LA Office CMBS Intentional Default (2023)",
                sub: ko ? "글로벌 대형 운용사의 전략적 디폴트. 왜 돌려주는 게 최선이었나." : "Strategic default by a major global manager. Why walking away was optimal.",
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

        {/* ══ 관련 마켓 케이스 ══════════════════════════════════════════════ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "관련 마켓 케이스" : "Related Market Cases"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko ? "이 챕터의 개념이 실전에서 어떻게 작동했는지 확인하세요." : "See how the concepts in this chapter played out in real deals."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {([
              { slug: "blackstone-office-cmbs-2023", icon: "🏢", category: (k: boolean) => k ? "구조화금융" : "Structured Finance", title: (k: boolean) => k ? "Blackstone 오피스 CMBS (2023) — 전략적 디폴트" : "Blackstone Office CMBS (2023) — Strategic Default", desc: (k: boolean) => k ? "세계 최대 사모펀드가 WFH 시대 오피스 빌딩 담보 CMBS 상환을 의도적으로 거부했다. DSCR·LTV·스페셜 서비서의 실전." : "The world's largest PE firm deliberately stopped repaying office CMBS in the WFH era. DSCR, LTV, and special servicers in practice.", year: "2023", badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300" },
              { slug: "hertz-fleet-abs-2020", icon: "🚗", category: (k: boolean) => k ? "구조화금융" : "Structured Finance", title: (k: boolean) => k ? "Hertz Fleet ABS (2020) — 파산해도 AAA는 살아남는다" : "Hertz Fleet ABS (2020) — AAA Survives Bankruptcy", desc: (k: boolean) => k ? "자동차 ABS vs 오피스 CMBS — 담보 유형에 따라 파산 결과가 어떻게 달라지는지 비교하세요." : "Auto ABS vs office CMBS — compare how bankruptcy outcomes differ based on collateral type.", year: "2020", badge: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300" },
            ]).map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                <Link href={`${ko ? "" : "/en"}/market/${c.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 hover:border-amber-400 dark:hover:border-amber-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${c.badge}`}>{c.category(ko)}</span>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-50 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-1">{c.title(ko)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc(ko)}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-[10px] text-gray-400">{c.year}</span>
                    <span className="text-xs text-gray-400 group-hover:text-amber-500 transition-colors">{ko ? "읽기" : "Read"} →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "CMBS 완전 해설 — 상업용 부동산 모기지가 채권이 되는 과정 & 오피스 CMBS 위기 | Deal Story"
            : "CMBS Complete Guide — How Commercial Mortgages Become Bonds & the Office CMBS Crisis | Deal Story"}
          lang={lang}
        />

        {/* Prev/Next */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

      </main>
      <Footer />
    </div>
  );
}
