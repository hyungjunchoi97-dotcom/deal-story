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
const accent = "#3182f6";
const accentLight = "#dbeafe";

// ── Series nav ────────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",           ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"          : "ECM Overview"       },
  { slug: "ecm-ipo-issuers",        ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"       },
  { slug: "ecm-ipo-investors",      ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"     },
  { slug: "ecm-ipo-valuation",      ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션"    : "Ch.3 Valuation"     },
  { slug: "ecm-ipo-process",        ch: 4,  title: (ko: boolean) => ko ? "Ch.4 IPO 프로세스"  : "Ch.4 IPO Process"   },
  { slug: "ecm-ipo-bookbuilding",   ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"        : "Ch.5 Book-Building"  },
  { slug: "ecm-ipo-post",           ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO"    : "Ch.6 Post-IPO"      },
  { slug: "ecm-followon",           ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"      : "Ch.7 Follow-on"     },
  { slug: "ecm-convertible",        ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"      : "Ch.8 Convertible"   },
  { slug: "ecm-international-listing", ch: 9, title: (ko: boolean) => ko ? "Ch.9 국제상장"   : "Ch.9 Intl Listing"  },
  { slug: "ecm-spac-direct",        ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC·직상장"  : "Ch.10 SPAC·Direct"  },
];

const thisCh = 1;

// ── Issuer Type Data ──────────────────────────────────────────────────────────
const ISSUER_TYPES = [
  {
    id: "vc",
    label: (ko: boolean) => ko ? "VC 백 스타트업" : "VC-backed Startup",
    icon: "🚀",
    motivation: (ko: boolean) => ko ? "투자자 엑싯 + 성장자본" : "Investor exit + Growth capital",
    timing: (ko: boolean) => ko ? "Series D+ · 흑자 전환 또는 Revenue Comps 충분" : "Series D+ · Profitability or sufficient Revenue Comps",
    floatType: (ko: boolean) => ko ? "Primary (신주) + Secondary (기존 VC 매각)" : "Primary (new shares) + Secondary (VC sell-down)",
    examples: "Coupang(쿠팡) NYSE 2021 · Airbnb NASDAQ 2020 · DoorDash 2020",
    risk: (ko: boolean) => ko ? "단일 제품 의존, 수익성 불확실, 창업자 과도한 의결권" : "Single product dependency, profitability uncertainty, founder supervoting",
    riskBar: 4,
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    dot: "bg-blue-500",
    text: "text-blue-800 dark:text-blue-200",
    riskColor: "bg-blue-400",
  },
  {
    id: "pe",
    label: (ko: boolean) => ko ? "PE 엑싯" : "PE Exit",
    icon: "💼",
    motivation: (ko: boolean) => ko ? "펀드 청산 + IRR 실현" : "Fund liquidation + IRR realization",
    timing: (ko: boolean) => ko ? "펀드 만기 3–5년 전 · EBITDA 안정화" : "3–5yr before fund maturity · Stabilized EBITDA",
    floatType: (ko: boolean) => ko ? "Secondary 주도 (PE 매각) + 일부 Primary" : "Secondary-led (PE sell-down) + some Primary",
    examples: "Hilton NYSE 2013 (Blackstone) · HCA Healthcare · 두산로보틱스 (IMM PE 엑싯 예정)",
    risk: (ko: boolean) => ko ? "높은 부채 레버리지, PE 엑싯 물량 오버행" : "High debt leverage, PE exit overhang",
    riskBar: 3,
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-700",
    dot: "bg-violet-500",
    text: "text-violet-800 dark:text-violet-200",
    riskColor: "bg-violet-400",
  },
  {
    id: "soe",
    label: (ko: boolean) => ko ? "SOE 민영화" : "SOE Privatization",
    icon: "🏛️",
    motivation: (ko: boolean) => ko ? "정부 재정 + 효율화 + 외국인 자본 유치" : "Government revenue + Efficiency + Foreign capital",
    timing: (ko: boolean) => ko ? "정치적 결정 주도 · 섹터 규제 완화 시" : "Politically driven · Sector deregulation context",
    floatType: (ko: boolean) => ko ? "Secondary 100% (정부 보유 주식 매각)" : "100% Secondary (government share sale)",
    examples: "Aramco 사우디 2019 ($29.4bn) · KT 2002 · POSCO · Saudi Telecom",
    risk: (ko: boolean) => ko ? "정치 리스크, 규제 변화, 비효율 지속 가능성" : "Political risk, regulatory change, potential continued inefficiency",
    riskBar: 2,
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-700",
    dot: "bg-indigo-500",
    text: "text-indigo-800 dark:text-indigo-200",
    riskColor: "bg-indigo-400",
  },
  {
    id: "spinoff",
    label: (ko: boolean) => ko ? "계열사 분리상장" : "Conglomerate Spin-off",
    icon: "🔀",
    motivation: (ko: boolean) => ko ? "가치 재평가 + 지배구조 투명화 + 독립경영" : "Valuation re-rating + Governance clarity + Independent management",
    timing: (ko: boolean) => ko ? "모회사 할인(Conglomerate Discount) 해소 시" : "When conglomerate discount needs to be resolved",
    floatType: (ko: boolean) => ko ? "Primary 주도 + 모회사 Secondary 일부" : "Primary-led + some parent Secondary",
    examples: "LG에너지솔루션 (LG화학 분리) 2022 · PayPal (eBay) 2015 · 카카오뱅크 (카카오) 2021",
    risk: (ko: boolean) => ko ? "모회사 의존성, 독립 후 수익성 불확실" : "Parent dependency, post-independence profitability uncertainty",
    riskBar: 2,
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    dot: "bg-orange-500",
    text: "text-orange-800 dark:text-orange-200",
    riskColor: "bg-orange-400",
  },
  {
    id: "mature",
    label: (ko: boolean) => ko ? "성숙 성장기업" : "Mature Growth Company",
    icon: "🌱",
    motivation: (ko: boolean) => ko ? "인지도 제고 + 주식을 통화로 활용 (M&A) + 임직원 보상" : "Brand recognition + Stock as M&A currency + Employee compensation",
    timing: (ko: boolean) => ko ? "시장 지배력 확립 후 · 글로벌 확장 자금" : "Post market dominance · Global expansion funding",
    floatType: (ko: boolean) => ko ? "Primary 주도" : "Primary-led",
    examples: "하이브(HYBE) 2020 · Spotify 직상장 2018 · Palantir 직상장 2020",
    risk: (ko: boolean) => ko ? "성장 둔화 후 밸류 재평가, 공모가 과도 논란" : "Growth slowdown valuation reset, overpriced IPO concerns",
    riskBar: 3,
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-700",
    dot: "bg-teal-500",
    text: "text-teal-800 dark:text-teal-200",
    riskColor: "bg-teal-400",
  },
];

// ── IPO Timing Factors ────────────────────────────────────────────────────────
const TIMING_FACTORS = [
  {
    factor: (ko: boolean) => ko ? "① 시장 창문 (Market Window)" : "① Market Window",
    desc: (ko: boolean) => ko
      ? "섹터 테마가 살아있을 때, 시장 변동성이 낮을 때, 금리가 안정적일 때. 2021년 EV 테마는 Rivian을 $66bn으로 만들었고, 2022년 금리 인상기는 IPO 시장 자체를 닫았다."
      : "When sector theme is alive, market volatility is low, rates are stable. The 2021 EV theme made Rivian worth $66B; 2022 rate hikes closed the entire IPO market.",
    icon: "📊",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
  },
  {
    factor: (ko: boolean) => ko ? "② 회사 준비도 (Company Readiness)" : "② Company Readiness",
    desc: (ko: boolean) => ko
      ? "3년치 감사 재무제표, Big4 감사법인, 독립이사 이사회, 내부통제 시스템(SOX 등). IPO 전 12–18개월의 '상장 준비 공사'가 필수다."
      : "3-year audited financials, Big 4 auditor, independent board, internal controls (SOX etc.). 12–18 months of 'IPO construction' is mandatory before listing.",
    icon: "🏗️",
    color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700",
  },
  {
    factor: (ko: boolean) => ko ? "③ 경쟁사 동향 (Competitive Landscape)" : "③ Competitive Landscape",
    desc: (ko: boolean) => ko
      ? "같은 섹터 경쟁사 IPO 직후가 최고의 타이밍 — 투자자 관심이 집중된 상태. 반대로 경쟁사 IPO 실패 직후엔 섹터 전체가 냉각된다."
      : "Right after a sector peer's IPO is prime timing — investor attention is focused. But after a peer IPO failure, the entire sector cools.",
    icon: "🎯",
    color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700",
  },
];

// ── 18-Month IPO Checklist ────────────────────────────────────────────────────
const IPO_CHECKLIST = [
  {
    phase: (ko: boolean) => ko ? "T-18개월" : "T-18 months",
    items: [
      (ko: boolean) => ko ? "빅4 감사법인 선임 (기존 소규모 회계법인에서 교체)" : "Appoint Big 4 auditor (replace smaller firm if needed)",
      (ko: boolean) => ko ? "3개년 재무제표 감사 착수 — IFRS 또는 US GAAP 전환" : "Begin 3-year financial statement audit — convert to IFRS or US GAAP",
      (ko: boolean) => ko ? "법적 구조 정리: 사업 분리·지주사 정비" : "Legal structure cleanup: business separation, holding company restructuring",
    ],
    color: "border-gray-300 dark:border-gray-600",
    dot: "bg-gray-400",
  },
  {
    phase: (ko: boolean) => ko ? "T-12개월" : "T-12 months",
    items: [
      (ko: boolean) => ko ? "독립 사외이사 선임 (최소 50%), 이사회 위원회 구성 (감사·보상·지명)" : "Appoint independent directors (min 50%), form board committees (audit, comp, nom)",
      (ko: boolean) => ko ? "주간사(글로벌 코디네이터·북러너) 선정 — 경쟁 피칭(Beauty Contest)" : "Select lead managers (Global Coordinators & Bookrunners) via competitive pitch (Beauty Contest)",
      (ko: boolean) => ko ? "상장 거래소 및 상장 구조 결정 (국내/해외, Primary/Secondary 비중)" : "Decide listing exchange and offering structure (domestic/overseas, Primary/Secondary ratio)",
    ],
    color: "border-blue-300 dark:border-blue-600",
    dot: "bg-blue-400",
  },
  {
    phase: (ko: boolean) => ko ? "T-9개월" : "T-9 months",
    items: [
      (ko: boolean) => ko ? "증권신고서(S-1/투자설명서) 초안 작성 시작 — 사업 리스크 팩터 정의" : "Begin drafting registration statement (S-1/Prospectus) — define business risk factors",
      (ko: boolean) => ko ? "밸류에이션 프리워크: 피어그룹 선정, EV/Revenue·EV/EBITDA·P/E 멀티플 분석" : "Pre-work on valuation: peer group selection, EV/Revenue·EV/EBITDA·P/E multiple analysis",
      (ko: boolean) => ko ? "내부통제 시스템(SOX 404) 구축 — IT·재무보고 통제 테스트" : "Build internal controls system (SOX 404) — test IT and financial reporting controls",
    ],
    color: "border-violet-300 dark:border-violet-600",
    dot: "bg-violet-400",
  },
  {
    phase: (ko: boolean) => ko ? "T-6개월" : "T-6 months",
    items: [
      (ko: boolean) => ko ? "Pre-deal 투자자 교육(Investor Education/Testing the Waters) — 기관 투자자 반응 탐색" : "Pre-deal investor education (Testing the Waters) — gauge institutional investor response",
      (ko: boolean) => ko ? "금융감독원/SEC 신고서 제출 및 심사 대응" : "File registration statement with FSS/SEC; respond to comment letters",
      (ko: boolean) => ko ? "주주 구성 정리: 기존 VC·PE 지분 락업 협상" : "Shareholder structure cleanup: negotiate lockups with existing VC/PE shareholders",
    ],
    color: "border-teal-300 dark:border-teal-600",
    dot: "bg-teal-400",
  },
  {
    phase: (ko: boolean) => ko ? "T-3개월" : "T-3 months",
    items: [
      (ko: boolean) => ko ? "최종 증권신고서 확정 및 공시 — 가격 밴드 결정" : "Finalize and publish registration statement — set price band",
      (ko: boolean) => ko ? "애널리스트 리포트 배포 (Analyst Initiation)" : "Distribute analyst initiation reports",
      (ko: boolean) => ko ? "로드쇼 일정 확정 (뉴욕·런던·홍콩·서울·보스턴 등 2주 일정)" : "Confirm roadshow schedule (NY, London, Hong Kong, Seoul, Boston — 2-week itinerary)",
    ],
    color: "border-orange-300 dark:border-orange-600",
    dot: "bg-orange-400",
  },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    tag: "✅",
    tagLabel: (ko: boolean) => ko ? "성공 사례" : "Success Case",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    title: "쿠팡 (Coupang) NYSE 2021",
    titleEn: "Coupang NYSE 2021",
    type: (ko: boolean) => ko ? "VC 백 스타트업 → 글로벌 상장" : "VC-backed Startup → Global Listing",
    amount: "$4.6bn",
    valuation: "$84bn",
    body: (ko: boolean) => ko
      ? "쿠팡은 2021년 3월 뉴욕증권거래소(NYSE)에 상장하며 한국 기업 최대 규모의 해외 IPO를 달성했다. 국내 코스피가 아닌 NYSE를 선택한 이유는 세 가지였다. ① 미국 성장주 투자자(Fidelity·BlackRock 등)의 더 높은 Revenue Multiple 적용 — 코스피 대비 EV/Revenue 멀티플이 2–3배 높게 적용 가능, ② 손실 기업 상장이 한국보다 용이한 미국 제도 (적자 기업도 성장성으로 상장 가능), ③ 소프트뱅크(최대 주주) 입장에서 달러 기반 엑싯이 유리. 공모가 $35(밴드 상단)에서 첫날 +40.7% 급등하며 $49.25에 거래됐다. 단, 이후 수익성 개선 지연으로 2022년 $10 아래로 급락하며 '고점 공모' 논란이 있었다."
      : "Coupang listed on NYSE in March 2021, achieving Korea's largest overseas IPO. Three reasons drove the NYSE choice over domestic KOSPI: ① US growth investors (Fidelity, BlackRock) apply higher Revenue Multiples — EV/Revenue multiples 2–3x higher vs. KOSPI, ② US listing rules more accommodating of loss-making companies (growth story sufficient), ③ SoftBank (largest shareholder) preferred a dollar-denominated exit. IPO priced at $35 (top of range) and surged +40.7% on Day 1 to $49.25. However, subsequent delays in profitability led to a crash below $10 in 2022, sparking 'overvalued IPO' criticism.",
    border: "border-green-200 dark:border-green-700",
    bg: "bg-green-50/50 dark:bg-green-900/10",
  },
  {
    tag: "✅",
    tagLabel: (ko: boolean) => ko ? "성공 사례" : "Success Case",
    tagColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    title: "LG에너지솔루션 코스피 2022",
    titleEn: "LG Energy Solution KOSPI 2022",
    type: (ko: boolean) => ko ? "계열사 분리상장 교과서" : "Conglomerate Spin-off Textbook",
    amount: "12.75조원 ($10.7bn)",
    valuation: "70조원",
    body: (ko: boolean) => ko
      ? "LG에너지솔루션(LGES)의 2022년 1월 코스피 상장은 한국 역사상 최대 IPO였다. LG화학의 배터리 사업부를 2020년 분사한 후 불과 14개월 만에 상장을 완성했다. 분리상장의 논리는 명확했다: LG화학이 화학·배터리·첨단소재를 모두 보유하면서 각 사업의 밸류에이션이 콩글로머리트 디스카운트(Conglomerate Discount)를 받고 있었다. 분리 상장으로 LGES는 순수 EV 배터리 플레이로서 Tesla·BYD와의 멀티플 비교가 가능해졌다. 기관 경쟁률 2,023:1, 일반 청약 증거금 114조원이라는 기록을 세웠다. 상장 후 LG화학 주가 역시 디스카운트 해소 기대감에 반등했다."
      : "LG Energy Solution (LGES)'s January 2022 KOSPI listing was Korea's largest-ever IPO. Just 14 months after spinning off LG Chem's battery division in 2020, LGES completed its listing. The spin-off logic was clear: LG Chem holding chemicals, batteries, and advanced materials was suffering a conglomerate discount on each segment's valuation. Post-spin, LGES became a pure-play EV battery company comparable to Tesla and BYD multiples. The institutional subscription ratio hit 2,023:1, and retail deposit capital reached ₩114 trillion — both records. Post-listing, LG Chem's own stock also rebounded as the discount compression materialized.",
    border: "border-green-200 dark:border-green-700",
    bg: "bg-green-50/50 dark:bg-green-900/10",
  },
  {
    tag: "❌",
    tagLabel: (ko: boolean) => ko ? "실패 사례" : "Failed Case",
    tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    title: "크래프톤 코스피 2021",
    titleEn: "Krafton KOSPI 2021",
    type: (ko: boolean) => ko ? "단일 IP 리스크 + PER 과도" : "Single IP Risk + Excessive PER",
    amount: "4.3조원",
    valuation: "53조원 → 36조원 (공모가 하향)",
    body: (ko: boolean) => ko
      ? "크래프톤은 2021년 8월 코스피에 상장했다. 배틀그라운드(PUBG) 하나의 IP에 전체 매출의 80% 이상을 의존하는 구조에서, 초기 희망 공모가 밴드는 45만8,000원~55만7,000원으로 시가총액 53조원을 목표로 했다. 그러나 금융감독원의 증권신고서 정정 요구('단일 IP 의존 리스크 충분히 공시하라')와 기관 투자자들의 '멀티플 과도' 지적으로 공모가는 49만8,000원(시총 36조원)으로 최종 결정됐다. 상장 첫날 공모가 대비 -8.6% 하락 마감. 이후 모바일 게이밍 시장 경쟁 심화로 주가는 지속 하락했다. 이 사례는 '단일 IP 리스크'와 '섹터 비교 멀티플 정합성'을 등한시한 공모가 설정의 위험성을 교과서처럼 보여준다."
      : "Krafton listed on KOSPI in August 2021. With over 80% of revenue dependent on a single IP (Battlegrounds/PUBG), the initial price band targeted a ₩53 trillion market cap. However, Korea's FSS demanded additional risk disclosures ('disclose single-IP dependency risk adequately') and institutional investors flagged excessive multiples — the final IPO price was cut to ₩498,000 (₩36 trillion cap). Day 1 closed -8.6% below IPO price. Continued mobile gaming market competition pushed the stock lower. This case is a textbook illustration of the dangers of ignoring 'single IP risk' and 'sector comparable multiple consistency' in IPO pricing.",
    border: "border-red-200 dark:border-red-700",
    bg: "bg-red-50/50 dark:bg-red-900/10",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "IPO에서 Primary와 Secondary의 차이는 무엇인가요?"
      : "What is the difference between Primary and Secondary in an IPO?",
    a: (ko: boolean) => ko
      ? "Primary(신주 발행)는 기업이 신규 주식을 발행하여 자금을 조달하는 것으로, 조달 자금이 회사로 들어옵니다. Secondary(구주 매출)는 기존 주주(VC·PE·창업자 등)가 보유 주식을 파는 것으로, 자금이 회사가 아닌 기존 주주에게 갑니다. 대부분의 IPO는 Primary와 Secondary를 혼합합니다. PE 엑싯 IPO는 Secondary 비중이 높고, 성장 자금이 필요한 스타트업은 Primary 비중이 높습니다. 투자자 입장에서는 Secondary 비중이 너무 높으면 '발행사 스스로는 새 자금이 필요 없다는 신호'로 해석해 부정적으로 볼 수 있습니다."
      : "Primary (new share issuance) means the company issues new shares to raise funds — the proceeds go into the company. Secondary (sell-down) means existing shareholders (VC, PE, founders) sell their shares — the proceeds go to those shareholders, not the company. Most IPOs mix both. PE exit IPOs skew Secondary-heavy; growth-stage startups needing capital skew Primary-heavy. From an investor perspective, excessive Secondary weighting can signal 'the company itself doesn't need new capital,' which may read negatively.",
  },
  {
    q: (ko: boolean) => ko
      ? "PE 펀드는 왜 IPO를 통해 엑싯하나요? M&A로 팔면 더 빠르지 않나요?"
      : "Why do PE funds exit via IPO instead of a trade sale (M&A)?",
    a: (ko: boolean) => ko
      ? "PE의 IPO 엑싯은 여러 이유에서 선택됩니다. ① 전략적 인수자가 없거나 M&A 제안 가격이 시장 밸류보다 낮을 때, ② 기업 규모가 커서 단일 인수자 찾기가 어려울 때 (Hilton, HCA 같은 대형 딜), ③ IPO 후 일정 기간에 걸쳐 지분을 단계적으로 매각함으로써 평균 매도 단가를 높일 수 있을 때 (Follow-on offering 전략), ④ IPO 가격이 M&A 협상가보다 높은 밸류에이션이 기대될 때. 반대로 시장이 나쁘거나 IPO 준비 시간·비용이 부담될 때는 M&A(Secondary Buyout 포함)를 선택합니다."
      : "PE funds choose IPO exit for several reasons: ① No strategic acquirer exists or M&A offer is below market valuation, ② Company is too large for a single buyer (e.g., Hilton, HCA), ③ Post-IPO staged sell-downs via Follow-on offerings can achieve higher average sale prices over time, ④ IPO valuation is expected to exceed M&A negotiated price. Conversely, when markets are poor or IPO prep cost/time is burdensome, PE opts for M&A (including Secondary Buyouts).",
  },
  {
    q: (ko: boolean) => ko
      ? "콩글로머리트 디스카운트(Conglomerate Discount)란 무엇이고 왜 생기나요?"
      : "What is a conglomerate discount and why does it occur?",
    a: (ko: boolean) => ko
      ? "대기업(복합기업)이 여러 사업부를 보유할 때, 각 사업부를 독립적으로 평가한 합산 가치보다 전체 기업의 시장 가치가 낮게 형성되는 현상입니다. 원인은 크게 세 가지입니다. ① 복잡성 디스카운트: 투자자들이 복잡한 자회사 구조를 분석하기 어려워 불확실성 프리미엄 부가, ② 자원 배분 비효율: 수익성 높은 사업의 이익이 수익성 낮은 사업에 교차 보조될 가능성, ③ 지배구조 불투명: 지주사-계열사 간 내부거래·일감 몰아주기 등 코리아 디스카운트와도 연결. LG에너지솔루션 분리 사례처럼, 분리상장이 이 디스카운트를 해소하는 가장 직접적인 방법입니다."
      : "A conglomerate discount occurs when a large multi-business corporation's total market value is lower than the sum of its individual business units valued independently. Three main causes: ① Complexity discount: investors struggle to analyze complex subsidiary structures, adding an uncertainty premium, ② Capital allocation inefficiency: profits from high-margin businesses may subsidize low-margin ones, ③ Governance opacity: intra-group transactions and related-party dealings (also linked to the 'Korea Discount'). As with LG Energy Solution's spin-off, listing subsidiaries separately is the most direct remedy for the discount.",
  },
  {
    q: (ko: boolean) => ko
      ? "IPO 시장이 '닫혔다'는 표현은 무슨 뜻인가요?"
      : "What does it mean when the IPO market is 'closed'?",
    a: (ko: boolean) => ko
      ? "IPO 시장이 닫혔다는 것은 물리적으로 상장이 불가능하다는 뜻이 아니라, 발행사가 원하는 밸류에이션에서 투자자 수요를 충분히 모을 수 없는 상태를 의미합니다. 보통 다음 상황에서 시장이 닫힙니다. ① 금리 급등기(2022년처럼): 성장주 할인율 상승 → 성장주 멀티플 급락, ② VIX(공포지수)가 30 이상인 고변동성 시기, ③ 최근 IPO들이 연달아 공모가 이하로 하락한 때('IPO 실패 전파'). 반대로 IPO 시장이 '열리는' 신호는 최근 IPO들의 첫날 강세 마감, 기관투자자들의 적극적인 로드쇼 참여, 낮은 VIX와 안정적인 금리입니다."
      : "When the IPO market is 'closed,' it doesn't mean listing is legally impossible — it means issuers cannot attract sufficient investor demand at their desired valuation. This typically occurs: ① During rate hike cycles (like 2022): rising discount rates crush growth stock multiples, ② When VIX (fear index) is above 30 (high volatility regime), ③ After a string of recent IPOs trading below their offer price ('IPO failure contagion'). Conversely, a 'reopening' IPO market shows recent IPOs closing strong on Day 1, active institutional roadshow participation, low VIX, and stable rates.",
  },
  {
    q: (ko: boolean) => ko
      ? "뱅커는 IPO 발행사를 어떻게 평가하나요? 가장 중요한 기준은?"
      : "How do bankers evaluate an IPO issuer? What is the most important criterion?",
    a: (ko: boolean) => ko
      ? "뱅커가 IPO 발행사를 처음 평가할 때 보는 기준 순서: ① 스토리(Equity Story) — 왜 지금 상장하는가? 왜 이 밸류에이션인가? 투자자가 납득할 수 있는 성장 내러티브가 있는가, ② 피어그룹(비교 대상) — 밸류에이션 멀티플을 적용할 비교 상장사가 있는가. 피어가 없으면 가격 설정이 매우 어렵다, ③ 재무 가시성 — 향후 2–3년 실적 예측이 가능한가. 불확실성이 클수록 투자자 요구 할인율이 높아진다, ④ 주주 구조 — 기존 주주의 락업 의지, PE/VC 엑싯 오버행 규모, ⑤ 상장 준비도 — 감사 재무제표·내부통제·거버넌스가 갖춰졌는가. 이 중 '스토리'가 가장 중요합니다. 재무 모델보다 투자자의 상상력을 자극하는 내러티브가 공모가를 결정합니다."
      : "When bankers first evaluate an IPO issuer, the priority sequence is: ① Equity Story — why list now? Why this valuation? Is there a credible growth narrative investors will buy?, ② Peer Group — are there comparable listed companies to derive valuation multiples from? Without peers, pricing is extremely difficult, ③ Financial Visibility — can we forecast 2–3 years of earnings? Higher uncertainty = higher investor-required discount rate, ④ Shareholder Structure — lockup willingness of existing shareholders, PE/VC exit overhang size, ⑤ IPO Readiness — audited financials, internal controls, governance in place. Of these, 'Equity Story' is the most important. The narrative that captures investor imagination determines the offering price more than any financial model.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Jay R. Ritter", title: "Initial Public Offerings: Updated Statistics", url: "https://site.warrington.ufl.edu/ritter/ipo-data/", source: "University of Florida, 2024" },
  { id: 2, author: "Loughran, T. & Ritter, J.", title: "Why Don't Issuers Get Upset About Leaving Money on the Table in IPOs?", url: "https://academic.oup.com/rfs/article-abstract/15/2/413/1582906", source: "Review of Financial Studies, 2002" },
  { id: 3, author: "KPMG Korea", title: "2022년 국내외 IPO 시장 동향", url: "https://kpmg.com/kr/ko/home/insights/2023/01/ipo-market-trend-2022.html", source: "KPMG, 2023" },
  { id: 4, author: "한국거래소(KRX)", title: "IPO 상장 심사 기준 및 절차", url: "https://listing.krx.co.kr", source: "KRX, 2024" },
  { id: 5, author: "Goldman Sachs ECM", title: "Global IPO Market Perspectives 2024", url: "https://www.goldmansachs.com/insights/", source: "Goldman Sachs, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function EcmIpoIssuersClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}/market-101/ecm-ipo-issuers`;

  const prev = ECM_SERIES.find((s) => s.ch === thisCh - 1);
  const next = ECM_SERIES.find((s) => s.ch === thisCh + 1);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ECM Ch.1 — IPO 발행사 5유형: VC부터 SOE 민영화까지",
    description:
      "ECM IPO 발행사 완전 정리: VC 백 스타트업·PE 엑싯·SOE 민영화·계열사 분리상장·성숙 성장기업 5유형별 동기·타이밍·구조를 뱅커 시각으로 해부합니다.",
    url: pageUrl,
    datePublished: "2026-05-27",
    publisher: { "@type": "Organization", name: "Deal Story", url: "https://dealstory.kr" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q(ko),
      acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* JSON-LD */}
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </>

      {/* ── Series Nav ── */}
      <nav className="sticky top-0 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-2 text-sm">
            {ECM_SERIES.map((s) => (
              <Link
                key={s.slug}
                href={`${base}/${s.slug}`}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  s.ch === thisCh
                    ? "font-bold text-white"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
                style={s.ch === thisCh ? { background: accent } : undefined}
              >
                {s.title(ko)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* ── Hero ── */}
        <motion.section variants={fadeUp(0)} initial="hidden" animate="show" className="mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4">
            <Link href="/market-101" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Market 101
            </Link>
            <span>/</span>
            <span className="font-medium" style={{ color: accent }}>ECM Series</span>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-400">Ch.1</span>
          </div>

          {/* Chapter label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "ECM 시리즈 · Chapter 1" : "ECM Series · Chapter 1"}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {ko ? "⏱ 18분 읽기" : "⏱ 18 min read"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
            {ko
              ? "IPO 발행사 5유형: VC 스타트업부터 SOE 민영화까지"
              : "IPO Issuer Types: From VC Startups to SOE Privatizations"}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {ko
              ? "IPO를 하는 기업은 모두 같은 이유로 상장하는 게 아닙니다. VC 펀드의 엑싯 압박, PE의 IRR 실현, 정부의 재정 확보, 콩글로머리트 가치 재평가, 그리고 성숙 기업의 브랜드 전략까지 — 발행사 유형에 따라 IPO의 동기·구조·타이밍이 완전히 달라집니다. ECM 뱅커가 발행사를 어떻게 읽는지, 처음부터 끝까지 정리합니다."
              : "Companies don't all go public for the same reason. VC fund exit pressure, PE IRR realization, government fiscal needs, conglomerate discount resolution, mature company brand strategy — the motivation, structure, and timing of an IPO differ entirely by issuer type. Here is how ECM bankers read issuers."}
          </p>
        </motion.section>

        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

        {/* ── 3-stat callout row ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {[
            {
              stat: ko ? "5가지" : "5 Types",
              label: (ko: boolean) => ko ? "IPO 발행사 유형" : "IPO Issuer Categories",
              sub: (ko: boolean) => ko ? "VC·PE·SOE·분리상장·성숙기업" : "VC · PE · SOE · Spin-off · Mature",
            },
            {
              stat: ko ? "18개월" : "18 months",
              label: (ko: boolean) => ko ? "IPO 평균 준비 기간" : "Avg. IPO Preparation Time",
              sub: (ko: boolean) => ko ? "감사 → 신고서 → 로드쇼" : "Audit → Filing → Roadshow",
            },
            {
              stat: "2021",
              label: (ko: boolean) => ko ? "글로벌 IPO 최대 호황" : "Global IPO Peak Year",
              sub: (ko: boolean) => ko ? "2022년 금리 인상으로 급랭" : "Froze in 2022 amid rate hikes",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.08)}
              className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60"
              style={{ borderLeft: `4px solid ${accent}` }}
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.stat}</div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-0.5">{item.label(ko)}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{item.sub(ko)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Ch.1: 발행사 5유형 스펙트럼 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-4"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "발행사 5유형 스펙트럼" : "The Five IPO Issuer Types"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko
              ? "유형마다 IPO 동기·Primary vs Secondary 구조·투자자 리스크 프로파일이 다르다"
              : "Each type has distinct IPO motivation, Primary vs. Secondary structure, and investor risk profile"}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {ko
              ? "ECM 뱅커가 새 발행사를 만나는 첫 순간, 머릿속에서는 이 질문이 돌아갑니다. '이 회사는 왜 지금 IPO를 하려는가?' 그 동기를 이해하면 — 적정 밸류에이션 밴드, Primary/Secondary 비중, 타겟 투자자층, 락업 구조까지 모든 것이 연결됩니다. 아래 5개 유형은 ECM 시장에 존재하는 거의 모든 IPO 발행사를 커버합니다."
              : "The moment an ECM banker engages a new issuer, one question runs in their head: 'Why does this company want to IPO right now?' Understanding the motivation connects everything — appropriate valuation band, Primary/Secondary ratio, target investor base, lockup structure. The five types below cover nearly all IPO issuers in the ECM market."}
          </p>
        </motion.section>

        {/* ── Issuer Type Cards (horizontal scroll on mobile) ── */}
        <div className="mb-16 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-4 pb-4" style={{ minWidth: "max-content" }}>
            {ISSUER_TYPES.map((t, i) => (
              <motion.div
                key={t.id}
                variants={fadeUp(i * 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                className={`rounded-2xl border p-5 ${t.bg} ${t.border} flex-shrink-0`}
                style={{ width: "280px" }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className={`text-sm font-bold ${t.text}`}>{t.label(ko)}</div>
                  </div>
                </div>

                {/* Risk bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 dark:text-gray-500">{ko ? "위험도" : "Risk"}</span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{t.riskBar}/5</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`h-1.5 rounded-full ${t.riskColor}`}
                      style={{ width: `${(t.riskBar / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                      {ko ? "동기" : "Motivation"}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{t.motivation(ko)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                      {ko ? "타이밍" : "Timing"}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{t.timing(ko)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                      {ko ? "공모 구조" : "Float Type"}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300">{t.floatType(ko)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block mb-0.5">
                      {ko ? "대표 사례" : "Examples"}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t.examples}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-0.5">
                      {ko ? "주요 리스크" : "Key Risk"}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{t.risk(ko)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
            {ko ? "← 가로 스크롤로 모든 유형 확인 →" : "← Scroll horizontally to see all types →"}
          </p>
        </div>

        {/* ── Ch.2: IPO의 진짜 동기 + PE 엑싯 구조 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "IPO의 진짜 동기 — 발행사마다 다르다" : "The Real IPO Motivation — Different for Every Issuer"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko ? "PE 엑싯 구조를 중심으로 Primary vs Secondary의 자금 흐름을 이해한다" : "Understanding Primary vs. Secondary capital flows through the PE exit lens"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "발행사가 '지금 IPO해야 한다'고 오면 50%는 시장이 좋아서다. 나머지 50%는 PE 펀드 만기가 다 됐거나 창업자가 현금이 필요해서다. 뱅커는 그 동기를 파악하는 것부터 시작한다."
              : "When an issuer says 'we need to IPO now,' 50% of the time it's because the market is hot. The other 50% is because the PE fund is nearing maturity or the founder needs liquidity. A banker's first task is diagnosing that motivation."}
          </p>

          {/* PE Exit Structure Diagram */}
          <div className="rounded-2xl border border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20 p-6 mb-8">
            <h3 className="text-lg font-bold text-violet-900 dark:text-violet-100 mb-4">
              {ko ? "PE 엑싯 IPO 구조 다이어그램" : "PE Exit IPO Structure Diagram"}
            </h3>

            {/* Capital flow visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="rounded-xl bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-700 p-4 text-center">
                <div className="text-2xl mb-2">🏦</div>
                <div className="text-xs font-bold text-violet-700 dark:text-violet-300 mb-1">
                  {ko ? "Primary (신주 발행)" : "Primary (New Shares)"}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">30–40%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {ko ? "자금 → 기업" : "Proceeds → Company"}
                </div>
                <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  {ko ? "성장 투자·부채 상환 목적" : "For growth CapEx or debt repayment"}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {ko ? "IPO 공모총액" : "Total Offering"}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">= Primary + Secondary</div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-gray-900 border border-violet-200 dark:border-violet-700 p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-xs font-bold text-violet-700 dark:text-violet-300 mb-1">
                  {ko ? "Secondary (구주 매출)" : "Secondary (Sell-down)"}
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">60–70%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {ko ? "자금 → PE 펀드·기존 주주" : "Proceeds → PE Fund / Existing Shareholders"}
                </div>
                <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                  {ko ? "투자자 엑싯·IRR 실현" : "Investor exit & IRR realization"}
                </div>
              </div>
            </div>

            {/* Post-IPO Shareholder Change */}
            <div className="rounded-xl bg-white/70 dark:bg-gray-900/50 border border-violet-100 dark:border-violet-800 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">
                {ko ? "IPO 전후 지분 구조 변화 (PE 엑싯 시나리오)" : "Pre vs. Post-IPO Ownership (PE Exit Scenario)"}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-2">{ko ? "IPO 전" : "Pre-IPO"}</div>
                  <div className="space-y-1.5">
                    {[
                      { label: "PE 펀드", pct: 70, color: "bg-violet-400" },
                      { label: ko ? "창업자·경영진" : "Founders/Mgmt", pct: 20, color: "bg-blue-400" },
                      { label: ko ? "기타 VC" : "Other VC", pct: 10, color: "bg-teal-400" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-0.5">
                          <span>{item.label}</span><span>{item.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-2">{ko ? "IPO 후" : "Post-IPO"}</div>
                  <div className="space-y-1.5">
                    {[
                      { label: ko ? "공모 투자자" : "Public Investors", pct: 35, color: "bg-gray-400" },
                      { label: "PE 펀드", pct: 35, color: "bg-violet-300" },
                      { label: ko ? "창업자·경영진" : "Founders/Mgmt", pct: 20, color: "bg-blue-400" },
                      { label: ko ? "기타" : "Other", pct: 10, color: "bg-teal-300" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-0.5">
                          <span>{item.label}</span><span>{item.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                {ko
                  ? "* PE는 180일 락업 만료 후 Follow-on Offering으로 잔여 지분을 단계적으로 매각한다."
                  : "* PE sells remaining stake in stages via Follow-on Offerings after 180-day lockup expiry."}
              </p>
            </div>
          </div>

          {/* Banker's Quote */}
          <blockquote
            className="rounded-xl p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700"
            style={{ borderLeft: "4px solid #f59e0b" }}
          >
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed italic mb-2">
              {ko
                ? '"발행사가 \'지금 IPO해야 한다\'고 오면 50%는 시장이 좋아서다. 나머지 50%는 PE 펀드 만기가 다 됐거나 창업자가 현금이 필요해서다. 뱅커는 그 동기를 파악하는 것부터 시작한다."'
                : '"When an issuer says \'we need to IPO now,\' half the time it\'s because the market is hot. The other half, the PE fund is maturing or the founder needs liquidity. That\'s the first thing a banker figures out."'}
            </p>
            <cite className="text-xs text-amber-600 dark:text-amber-400 not-italic font-semibold">
              {ko ? "— 익명 ECM 뱅커, 글로벌 IB" : "— Anonymous ECM Banker, Global IB"}
            </cite>
          </blockquote>
        </motion.section>

        {/* ── Ch.3: IPO 타이밍 3요소 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "IPO 타이밍의 3요소" : "The Three Elements of IPO Timing"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko ? "최적의 IPO 타이밍은 시장·회사·경쟁 3축이 동시에 맞아야 한다" : "Optimal IPO timing requires three axes — market, company, competition — to align simultaneously"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {ko
              ? "같은 회사도 타이밍에 따라 밸류에이션이 2배 이상 차이 날 수 있습니다. 2021년 초저금리·성장주 프리미엄 환경에서 상장한 기업들은 2022년 금리 인상기에 상장했을 때보다 훨씬 높은 멀티플을 받았습니다. 타이밍을 결정하는 세 가지 축을 뱅커 관점에서 정리합니다."
              : "The same company can receive valuations that differ by 2x or more depending on timing. Companies that listed in the ultra-low rate, growth-premium environment of 2021 received far higher multiples than those that would have listed during 2022's rate hike cycle. Here are the three timing axes from a banker's perspective."}
          </p>

          <div className="grid grid-cols-1 gap-5 mb-8">
            {TIMING_FACTORS.map((factor, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-6 ${factor.color}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{factor.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-gray-50 mb-2">{factor.factor(ko)}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{factor.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* IPO window historical example */}
          <div className="rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              {ko ? "IPO 시장 사이클 — 2020–2024 요약" : "IPO Market Cycle — 2020–2024 Summary"}
            </div>
            <div className="space-y-3">
              {[
                { year: "2020", label: ko ? "코로나 이후 성장주 붐" : "Post-COVID Growth Boom", bar: 70, color: "bg-blue-400", note: ko ? "Airbnb, DoorDash, Palantir 대형 IPO" : "Airbnb, DoorDash, Palantir mega IPOs" },
                { year: "2021", label: ko ? "역대 최대 IPO 호황 (SPAC 포함)" : "Record IPO Boom (incl. SPACs)", bar: 100, color: "bg-green-400", note: ko ? "글로벌 IPO 조달액 $600bn+ 사상 최고" : "Global IPO proceeds >$600bn — all-time record" },
                { year: "2022", label: ko ? "금리 인상으로 시장 냉각" : "Market Freeze from Rate Hikes", bar: 20, color: "bg-red-400", note: ko ? "IPO 시장 사실상 닫힘 — 조달액 80% 감소" : "IPO market effectively closed — proceeds down 80%" },
                { year: "2023", label: ko ? "점진적 회복 (선별적 IPO 가능)" : "Gradual Recovery (selective IPOs)", bar: 45, color: "bg-yellow-400", note: ko ? "ARM, Instacart 등 일부 대형 딜 재개" : "ARM, Instacart — selective large deals return" },
                { year: "2024", label: ko ? "회복세 지속, 금리 인하 기대" : "Continued Recovery, Rate Cut Hopes", bar: 65, color: "bg-teal-400", note: ko ? "빅테크 연동 AI 섹터 IPO 수요 강세" : "Strong demand for AI-linked sector IPOs" },
              ].map((row) => (
                <div key={row.year}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 w-8">{row.year}</span>
                    <div className="flex-1 h-3 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className={`h-3 rounded-full ${row.color} transition-all`} style={{ width: `${row.bar}%` }} />
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 w-6 text-right">{row.bar}%</span>
                  </div>
                  <div className="ml-11 text-xs text-gray-500 dark:text-gray-400">{row.label} — {row.note}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">* 상대적 시장 활동 지수 (2021년=100 기준)</p>
          </div>
        </motion.section>

        {/* ── Ch.4: 18개월 체크리스트 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "CFO의 18개월 IPO 준비 체크리스트" : "The CFO's 18-Month IPO Readiness Checklist"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {ko ? "상장 결정 후 첫날부터 로드쇼까지 — 실제로 벌어지는 일들" : "From Day 1 after listing decision to roadshow — what actually happens"}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {ko
              ? "IPO는 '하루아침에 결정'되지 않습니다. 뱅커가 피치(pitch)를 하러 오기 훨씬 이전부터, 발행사의 CFO는 내부적으로 준비 작업을 시작해야 합니다. 아래는 T-18개월부터 T-3개월까지 실제 CFO들이 진행하는 작업입니다."
              : "An IPO is not decided overnight. Long before a banker pitches, the issuer's CFO must already be preparing internally. Below is the actual timeline from T-18 months to T-3 months that CFOs work through."}
          </p>

          <div className="space-y-4 mb-8">
            {IPO_CHECKLIST.map((phase, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                className={`rounded-xl border-l-4 ${phase.color} border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${phase.dot}`} />
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{phase.phase(ko)}</span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-gray-300 dark:text-gray-600 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item(ko)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div
            className="rounded-xl p-5 bg-gray-50 dark:bg-gray-900/60"
            style={{ borderLeft: `4px solid ${accent}` }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-100">
                {ko ? "뱅커 인사이트: " : "Banker Insight: "}
              </strong>
              {ko
                ? "이 18개월 체크리스트에서 가장 많이 지연되는 항목은 'Big4 감사법인 전환'과 '내부통제 시스템 구축'입니다. 특히 스타트업 배경의 CFO들은 SOX 대응 수준의 내부통제를 과소평가합니다. 실무에서는 이 두 항목이 IPO 일정을 6–12개월 지연시키는 가장 흔한 원인입니다."
                : "The most commonly delayed items in this checklist are 'Big 4 auditor transition' and 'internal controls build-out.' CFOs from startup backgrounds consistently underestimate the SOX-level internal controls requirement. In practice, these two items are the most common cause of 6–12 month IPO timeline delays."}
            </p>
          </div>
        </motion.section>

        {/* ── Ch.5: 케이스 스터디 ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "케이스 스터디: 한국 IPO 3선" : "Case Studies: Three Korean IPOs"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            {ko ? "성공과 실패, 그리고 교훈 — 뱅커 관점의 해석" : "Success, failure, and lessons learned — the banker's interpretation"}
          </p>

          <div className="space-y-8">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                className={`rounded-2xl border p-6 ${cs.border} ${cs.bg}`}
              >
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${cs.tagColor}`}>
                    {cs.tag} {cs.tagLabel(ko)}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded font-mono text-gray-600 dark:text-gray-400">
                      {ko ? "공모액" : "Proceeds"}: {cs.amount}
                    </span>
                    <span className="text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded font-mono text-gray-600 dark:text-gray-400">
                      {ko ? "시총" : "Mkt Cap"}: {cs.valuation}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-1">{ko ? cs.title : cs.titleEn}</h3>
                <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-3">{cs.type(ko)}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{cs.body(ko)}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" likeSlug={concept.slug} lang={lang} />

        {/* ── FAQ ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} />
        </motion.section>

        {/* ── Related Content ── */}
        <motion.section
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-5">
            {ko ? "연관 콘텐츠" : "Related Content"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/market-101/ecm-overview",
                label: (ko: boolean) => ko ? "ECM 개요 — 시리즈 첫번째 챕터" : "ECM Overview — Series Chapter 0",
                tag: (ko: boolean) => ko ? "시리즈" : "Series",
                tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
              },
              {
                href: "/market-101/ecm-ipo-investors",
                label: (ko: boolean) => ko ? "ECM Ch.2 — IPO 투자자 생태계" : "ECM Ch.2 — IPO Investor Ecosystem",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
              },
              {
                href: "/market-101/ecm-ipo-valuation",
                label: (ko: boolean) => ko ? "ECM Ch.3 — IPO 밸류에이션 방법론" : "ECM Ch.3 — IPO Valuation Methods",
                tag: (ko: boolean) => ko ? "다음 챕터" : "Next Chapter",
                tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
              },
              {
                href: "/market-101/lbo-overview",
                label: (ko: boolean) => ko ? "LBO 개요 — PE 엑싯과 연결되는 LBO 구조" : "LBO Overview — LBO structure linking to PE exit",
                tag: (ko: boolean) => ko ? "연관 시리즈" : "Related Series",
                tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
              },
            ].map((rel, i) => (
              <Link
                key={i}
                href={rel.href}
                className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all group"
              >
                <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${rel.tagColor}`}>
                  {rel.tag(ko)}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {rel.label(ko)}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

        
        <LikeButton slug={concept.slug} lang={lang} />{/* ── References ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <motion.h2
            variants={fadeUp()}
            className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5"
          >
            {ko ? "참고 자료" : "References"}
          </motion.h2>
          <ol className="space-y-3">
            {SOURCES.map((ref) => (
              <motion.li
                key={ref.id}
                variants={fadeUp()}
                className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                  {ref.id}
                </span>
                <span>
                  <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    <span className="italic">{ref.title}</span>
                  )}
                  {". "}
                  <span className="text-gray-400 dark:text-gray-500">{ref.source}</span>
                </span>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* ── Prev / Next ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-8 mt-8"
        >
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "이전" : "Previous"}</span>
                {prev.title(ko)}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group text-right"
            >
              <span>
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-0.5">{ko ? "다음" : "Next"}</span>
                {next.title(ko)}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-ipo-issuers");
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
