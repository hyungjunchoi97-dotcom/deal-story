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
const accent = "#eab308";

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
const thisCh = 4;

// ── Deal Timeline ─────────────────────────────────────────────────────────────
const DEAL_TIMELINE = [
  {
    stage: (ko: boolean) => ko ? "사전 만데이트 (Pre-Mandate)" : "Pre-Mandate",
    week: "T-8 ~ T-4",
    actor: (ko: boolean) => ko ? "PE 스폰서 + 은행 3-5곳" : "PE Sponsor + 3-5 Banks",
    icon: "🔍",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    dot: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    tasks: (ko: boolean) => ko
      ? ["PE가 3-5개 은행에 파이낸싱 논의 시작", "각 은행의 '퀵 크레딧' — 내부 2-3페이지 메모", "은행이 조건 제시: 커밋 규모, 수수료, 플렉스 조항", "PE가 어레인저(리드뱅크) 선택 — 조건·관계·실행 능력 기준"]
      : ["PE initiates financing discussions with 3-5 banks", "Each bank runs 'quick credit' — 2-3 page internal memo", "Banks pitch terms: commitment size, fees, flex provision", "PE selects arranger based on terms, relationship, execution"],
    documents: (ko: boolean) => ko
      ? ["내부 퀵 크레딧 메모 (비공개)", "Terms Sheet (초안)", "NDA (비밀유지계약)"]
      : ["Internal quick credit memo (confidential)", "Draft Terms Sheet", "NDA"],
    insiderTip: (ko: boolean) => ko
      ? '"3-way beauty contest" — 은행들이 경쟁하고, PE가 이들을 서로 맞붙입니다. 조건을 가장 공격적으로 제시한 은행이 만데이트를 따내는 경우가 많습니다. 하지만 너무 빡빡하게 커밋하면 시장 플렉스 시 은행이 손실을 봅니다.'
      : '"3-way beauty contest" — banks compete, PE plays them off. The bank committing most aggressively often wins. But committing too tightly means the bank takes losses if the market requires flexing.',
  },
  {
    stage: (ko: boolean) => ko ? "만데이트 & 커밋먼트 페이퍼" : "Mandate & Commitment Papers",
    week: "T-4 ~ T-2",
    actor: (ko: boolean) => ko ? "리드뱅크 + 내부 크레딧 커미티" : "Lead Bank + Internal Credit Committee",
    icon: "📋",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    tasks: (ko: boolean) => ko
      ? ["만데이트 레터 서명 — 어레인저/북러너 지명", "커밋먼트 레터: 특정 조건에 파이낸싱 제공 약속", "피 레터: 모든 수수료 목록 (어레인지먼트, 업프론트, 커밋먼트, 플렉스)", "선행 조건(CPs) 정의 — 클로징 전 충족 요건", "은행 내부 크레딧 커미티 승인"]
      : ["Mandate letter signed — names arranger/bookrunner", "Commitment letter: bank commits to provide financing on specific terms", "Fee letter: all fees listed (arrangement, upfront, commitment, flex)", "Conditions precedent (CPs) defined — what must happen before closing", "Internal credit committee approval at the bank"],
    documents: (ko: boolean) => ko
      ? ["만데이트 레터", "커밋먼트 레터 (법적 구속력)", "피 레터 (비공개 — 기밀 중의 기밀)", "내부 크레딧 커미티 메모"]
      : ["Mandate Letter", "Commitment Letter (legally binding)", "Fee Letter (confidential — most sensitive)", "Internal Credit Committee Memo"],
    insiderTip: (ko: boolean) => ko
      ? "피 레터는 CIM이나 공개 서류에 절대 공개되지 않습니다. 플렉스 조항이 명시되어 있어, 은행이 시장 위험을 얼마나 떠안는지를 정확하게 알 수 있습니다. Highly Confident Letter(강한 신뢰 표명)와 하드 커밋먼트는 다릅니다 — 전자는 시장 위험이 발행사에 있고, 후자는 은행에 있습니다."
      : "The fee letter is never disclosed in CIMs or public filings. It lists the flex provision — exactly how much market risk the bank has taken. A Highly Confident Letter differs from a hard commitment: the former puts market risk on the issuer, the latter on the bank.",
  },
  {
    stage: (ko: boolean) => ko ? "문서화 & 레이팅 에이전시" : "Documentation & Rating Agency",
    week: "T-2 ~ T+2",
    actor: (ko: boolean) => ko ? "법무법인 + 레이팅 애널리스트 + 뱅커" : "Law Firms + Rating Analysts + Bankers",
    icon: "⚖️",
    color: "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20",
    dot: "bg-purple-500",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    tasks: (ko: boolean) => ko
      ? ["크레딧 어그리먼트 초안 — 200-400페이지 (Simpson Thacher/Kirkland/Latham)", "인덴처 초안 (HY 채권용) — 유사 분량", "레이팅 에이전시 제출: 재무 모델, 경영진 프레젠테이션, 산업 분석", "레이팅 콜: S&P/무디스 애널리스트와 2시간 통화", "예비 레이팅 발행 (보통 4-6주 소요)"]
      : ["Credit agreement drafting — 200-400 pages (Simpson Thacher/Kirkland/Latham)", "Indenture drafting (for HY bonds) — similar length", "Rating agency submission: financial model, management presentation, industry analysis", "Rating call: 2-hour call with S&P/Moody's analyst", "Preliminary rating issued (typically 4-6 weeks from submission)"],
    documents: (ko: boolean) => ko
      ? ["크레딧 어그리먼트 초안 (복수 버전)", "인덴처 초안", "레이팅 에이전시 제출 패키지", "경영진 프레젠테이션 (기밀)"]
      : ["Draft Credit Agreement (multiple versions)", "Draft Indenture", "Rating Agency Submission Package", "Management Presentation (confidential)"],
    insiderTip: (ko: boolean) => ko
      ? "레이팅 에이전시는 딜에 레버리지를 가집니다. B 대신 B-를 주면 스프레드가 50-100bp 벌어져, 발행사는 매년 수백만 달러를 더 냅니다. PE 스폰서들은 경영진이 더 공격적인 전망을 제시하도록 압박하는 경우가 많습니다. 레이팅 커미티는 블랙박스 — 애널리스트도 결과를 통제하지 못합니다."
      : "Rating agencies have leverage over the deal — B- instead of B widens spreads 50-100bp, costing the issuer millions annually. PE sponsors often push management to present more aggressive projections. The rating committee is a black box — analysts don't control the outcome.",
  },
  {
    stage: (ko: boolean) => ko ? "CIM 배포 & 뱅크 미팅" : "CIM Distribution & Bank Meeting",
    week: "T+2 ~ T+4",
    actor: (ko: boolean) => ko ? "뱅커 + 경영진 + PE 스폰서" : "Bankers + Management + PE Sponsor",
    icon: "📢",
    color: "border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-900/20",
    dot: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    tasks: (ko: boolean) => ko
      ? ["CIM 최종화 (80-120페이지)", "투자자에게 CIM 배포 (NDA 후)", "뱅크 미팅 개최 (TLB) / 로드쇼 (HY채권)", "'컬러' 콜 — 미팅 전 주요 계좌 10-15곳 사전 피드백", "경영진 프레젠테이션 45분 + Q&A 30분"]
      : ["CIM finalized (80-120 pages)", "CIM distributed to investors (after NDA)", "Bank meeting held (TLB) / Roadshow (HY bonds)", "'Color' calls — pre-meeting feedback from 10-15 key accounts", "Management presentation ~45 min + Q&A 30 min"],
    documents: (ko: boolean) => ko
      ? ["CIM (기밀 정보 메모랜덤)", "소스 앤 유스 테이블", "프로 포르마 재무 모델", "Q&A 준비 자료 (30-40페이지)"]
      : ["CIM (Confidential Information Memorandum)", "Sources & Uses Table", "Pro Forma Financial Model", "Q&A Preparation Document (30-40 pages)"],
    insiderTip: (ko: boolean) => ko
      ? "뱅크 미팅 Q&A는 딜이 살고 죽는 곳입니다. CLO 애널리스트들이 가장 까다로운 질문을 합니다 — '볼륨이 15% 떨어지면 EBITDA는?'. PE 스폰서들은 보통 30-40페이지 Q&A 준비 자료를 만들고, MD는 긴장하며, 경영진은 철저히 코치받습니다."
      : "The bank meeting Q&A is where deals live or die. CLO analysts ask the toughest questions — 'What happens to your EBITDA if volumes drop 15%?' PE sponsors prepare 30-40 page Q&A documents, MDs get nervous, and management gets coached.",
  },
  {
    stage: (ko: boolean) => ko ? "북빌드" : "Book Build",
    week: "T+4 ~ T+6",
    actor: (ko: boolean) => ko ? "신디케이션 팀 + 기관 투자자" : "Syndication Team + Institutional Investors",
    icon: "📊",
    color: "border-teal-300 bg-teal-50 dark:border-teal-700 dark:bg-teal-900/20",
    dot: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    tasks: (ko: boolean) => ko
      ? ["IPT(초기 가격 가이던스) 런칭 — 최종 예상보다 25-50bp 넓게", "오전 10시 업데이트: 매일 아침 딜팀에 북 현황 보고", "EOD 업데이트: 계좌·물량·주문 품질 종합 보고", "가이던스 발행 — 북이 3배 커버 시 스프레드 좁힘", "서브젝트 얼로케이션 — 최종 결정 전 잠정 배정"]
      : ["IPT (Initial Price Thoughts) launched — typically 25-50bp wider than expected final", "'10AM update': banker calls deal team each morning with book status", "'EOD update': end of day summary — accounts, volume, quality of orders", "Guidance issued when book is 3× covered — spread tightens", "Subject allocations — allocated but not confirmed until pricing"],
    documents: (ko: boolean) => ko
      ? ["북 업데이트 일일 보고서 (내부용)", "IPT 공지", "가이던스 공지", "서브젝트 얼로케이션 테이블"]
      : ["Daily book update (internal)", "IPT Announcement", "Guidance Announcement", "Subject Allocation Table"],
    insiderTip: (ko: boolean) => ko
      ? "북의 규모만큼 품질도 중요합니다. '플립' 계좌(세컨더리에서 즉시 매도)는 원치 않습니다. 뱅커들은 누가 플립하는지 압니다. 롱온리 계좌(보험, 연기금)가 안정성 면에서 선호됩니다. MD 업무의 일부는 '북 매니지먼트' — 누구에게 얼마나 배정할지 결정하는 것입니다."
      : "The quality of the book matters as much as size. 'Flip' accounts who immediately sell in secondary are unwanted — bankers know who flips. Long-only accounts (insurance, pension) are preferred for stability. An MD's job is partly 'managing the book' — deciding who gets what and how much.",
  },
  {
    stage: (ko: boolean) => ko ? "프라이싱 & 얼로케이션" : "Pricing & Allocation",
    week: "T+6",
    actor: (ko: boolean) => ko ? "리드뱅크 + 발행사 + 투자자" : "Lead Bank + Issuer + Investors",
    icon: "💰",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    tasks: (ko: boolean) => ko
      ? ["최종 스프레드 설정 ('프라이싱 완료')", "북 클로즈", "프라이싱 후 2-4시간 내 얼로케이션 통보", "TLB: '클로즈드' — 대출자들이 크레딧 어그리먼트 동시 서명", "HY: '프라이싱' — 프라이싱 후 T+5 결제"]
      : ["Final spread set ('priced')", "Book closed", "Allocations sent within 2-4 hours of pricing", "TLB: 'closed' — lenders sign credit agreement simultaneously", "HY: 'priced' — bonds settle T+5 after pricing"],
    documents: (ko: boolean) => ko
      ? ["최종 크레딧 어그리먼트 (서명본)", "얼로케이션 레터", "프라이싱 서플리먼트 (HY)", "CUSIP/ISIN 발행"]
      : ["Executed Credit Agreement", "Allocation Letter", "Pricing Supplement (HY)", "CUSIP/ISIN issuance"],
    insiderTip: (ko: boolean) => ko
      ? "프라이싱과 얼로케이션 사이 4시간은 극도로 바쁩니다. PE 스폰서는 '어디서 끝났어?'라고 묻습니다. 얼로케이션 과정은 리드뱅크의 재량 — '우호적 계좌'로 수년간 충성해온 곳이 더 좋은 배정을 받습니다."
      : "The 4 hours between pricing and allocation are intense — bankers are on the phone nonstop. PE sponsor asks 'where did we land?' The allocation process is discretionary — friendly accounts that have been loyal for years get better allocations.",
  },
  {
    stage: (ko: boolean) => ko ? "클로징" : "Closing",
    week: "T+6 ~ T+8",
    actor: (ko: boolean) => ko ? "모든 당사자 (PE, 경영진, 은행, 법무)" : "All Parties (PE, Management, Banks, Lawyers)",
    icon: "🎯",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    tasks: (ko: boolean) => ko
      ? ["선행 조건(CPs) 충족 확인", "자금 흐름: 론 수익금 인수 계좌로 송금", "M&A 클로징과 파이낸싱 클로징 동시 진행", "MAC(중대한 부정적 변경) 조항 확인 — 브레이크업 위험 구간", "클로징 디너 (전통적 축하 행사)"]
      : ["Conditions precedent (CPs) satisfied", "Funds flow: loan proceeds wire to acquisition account", "M&A closing simultaneous with financing closing", "MAC (Material Adverse Change) clause check — break-up risk window", "Closing dinner (traditional celebration)"],
    documents: (ko: boolean) => ko
      ? ["클로징 인증서", "자금 흐름 메모", "담보 약정서 (Security Agreement)", "서약 계약서 (Pledge Agreements)", "인터크레디터 어그리먼트 (멀티 트랜치 시)"]
      : ["Closing Certificate", "Funds Flow Memorandum", "Security Agreement", "Pledge Agreements", "Intercreditor Agreement (if multi-tranche)"],
    insiderTip: (ko: boolean) => ko
      ? "'클로징 디너'는 LevFin의 전통 — PE, 경영진, 은행, 법무가 모여 축하합니다. 하지만 6-8주 전력 질주 후 너무 지친 주니어 뱅커들은 참석하지 못하기도 합니다. 실제 업계 농담: '클로징 디너에 가는 유일한 주니어 뱅커는 이미 사직서를 낸 사람이다'."
      : "'Closing dinner' is a LevFin tradition — PE, management, banks, lawyers celebrate. But junior bankers are sometimes too exhausted to attend after 6-8 weeks of sprinting. Real industry joke: 'The only junior banker who makes it to the closing dinner is the one who has already resigned.'",
  },
];

// ── Fee Structure ─────────────────────────────────────────────────────────────
const FEE_STRUCTURE = [
  {
    name: (ko: boolean) => ko ? "어레인지먼트 피" : "Arrangement Fee",
    bps: "75–100bps",
    basis: (ko: boolean) => ko ? "총 커밋먼트 대비" : "on total commitment",
    recipient: (ko: boolean) => ko ? "어레인징 은행들" : "Arranging banks",
    note: (ko: boolean) => ko ? "만데이트 확정 시 지급. 신디케이션 완료 후 참여 은행들과 분배." : "Paid at mandate. Split among participating banks after syndication.",
    color: "bg-yellow-500",
  },
  {
    name: (ko: boolean) => ko ? "업프론트 피 (OID 포함)" : "Upfront Fee (incl. OID)",
    bps: "150–200bps",
    basis: (ko: boolean) => ko ? "론 총액 대비" : "on total loan amount",
    recipient: (ko: boolean) => ko ? "어레인징 은행 경유 투자자" : "Investors via arranging banks",
    note: (ko: boolean) => ko ? "TLB 맥락에서 OID 포함. 원금 할인으로 투자자 수익률 제고." : "Includes OID in TLB context. Discounts principal to boost investor yield.",
    color: "bg-orange-500",
  },
  {
    name: (ko: boolean) => ko ? "커밋먼트 피" : "Commitment Fee",
    bps: "37.5–50bps",
    basis: (ko: boolean) => ko ? "미인출 리볼버 잔액 대비, 연간" : "on undrawn revolver, per year",
    recipient: (ko: boolean) => ko ? "리볼버 제공 은행" : "Revolver lenders",
    note: (ko: boolean) => ko ? "리볼버를 인출하지 않아도 은행이 자금을 준비해야 하므로 지급." : "Paid even if undrawn — bank must hold capital against the commitment.",
    color: "bg-amber-400",
  },
  {
    name: (ko: boolean) => ko ? "어드민 에이전트 피" : "Administrative Agent Fee",
    bps: "$50–100k/년",
    basis: (ko: boolean) => ko ? "고정 연간 수수료" : "fixed annual fee",
    recipient: (ko: boolean) => ko ? "리드뱅크 (에이전트 역할)" : "Lead bank (acting as agent)",
    note: (ko: boolean) => ko ? "대출 생애주기 전체의 행정 업무 담당. 이자 수취·분배, 조건 모니터링." : "Covers admin for entire loan life — collecting/distributing interest, monitoring conditions.",
    color: "bg-blue-400",
  },
  {
    name: (ko: boolean) => ko ? "HY 채권 그로스 스프레드" : "HY Bond Gross Spread",
    bps: "~350bps (3.5%)",
    basis: (ko: boolean) => ko ? "발행 총액 대비" : "on total proceeds",
    recipient: (ko: boolean) => ko ? "인수 은행들 (언더라이터)" : "Underwriting banks",
    note: (ko: boolean) => ko ? "언더라이팅 피 + 매니지먼트 피 + 셀링 컨세션 포함. $1bn 채권 = $35mn 수수료." : "Includes underwriting fee + management fee + selling concession. $1bn bond = $35mn in fees.",
    color: "bg-emerald-500",
  },
];

// ── Book Build Dynamics ───────────────────────────────────────────────────────
const BOOK_DYNAMICS = [
  {
    coverage: (ko: boolean) => ko ? "3-5배 커버" : "3-5× covered",
    action: (ko: boolean) => ko ? "스프레드 25-50bp 타이트닝" : "Tighten spread 25-50bp",
    signal: (ko: boolean) => ko ? "강한 수요. 발행사 유리. 리버스 플렉스 가능." : "Strong demand. Issuer-friendly. Reverse flex possible.",
    sentiment: "bullish",
    color: "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
  },
  {
    coverage: (ko: boolean) => ko ? "1.5-2배 커버" : "1.5-2× covered",
    action: (ko: boolean) => ko ? "스프레드 유지 또는 소폭 타이트닝" : "Hold spread or tighten modestly",
    signal: (ko: boolean) => ko ? "적정 수요. 플렉스 불필요. 정상 딜." : "Adequate demand. No flex needed. Normal deal.",
    sentiment: "neutral",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
    dot: "bg-yellow-500",
  },
  {
    coverage: (ko: boolean) => ko ? "1배 미만 커버" : "<1× covered",
    action: (ko: boolean) => ko ? "플렉스 실행, 트랜치 재구성, PE에 에쿼티 추가 요청" : "Exercise flex, restructure tranches, call PE for equity top-up",
    signal: (ko: boolean) => ko ? "위험 신호. 딜 취소 또는 구조 변경 검토." : "Danger signal. Deal cancellation or restructuring considered.",
    sentiment: "bearish",
    color: "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-900/20",
    dot: "bg-rose-500",
  },
];

// ── Market Flex ───────────────────────────────────────────────────────────────
const MARKET_FLEX_DATA = [
  {
    instrument: "TLB (Term Loan B)",
    flex: (ko: boolean) => ko ? "±50bp 스프레드, ±0.5pts OID" : "±50bp on spread, ±0.5pts OID",
    cap: (ko: boolean) => ko ? "최대 100bp, 1pt 합산" : "Cap at 100bp, 1pt combined",
    direction: (ko: boolean) => ko ? "와이드너 (발행사 불리) 또는 리버스 플렉스 (발행사 유리)" : "Wider (issuer cost) or reverse flex (issuer benefit)",
    whoPays: (ko: boolean) => ko ? "플렉스 비용은 전부 발행사 부담 — 영구 이자 비용 증가" : "All flex cost borne by issuer — permanent increase in interest cost",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    instrument: "HY Bond",
    flex: (ko: boolean) => ko ? "±75bp 수익률 또는 ±0.5pts 가격" : "±75bp on yield or ±0.5pts on price",
    cap: (ko: boolean) => ko ? "계약서 명시 최대치 (하드 플로어)" : "Hard floor per contract",
    direction: (ko: boolean) => ko ? "수익률 상승(가격 하락) 또는 리버스 플렉스(수익률 하락)" : "Yield up (price down) or reverse flex (yield down)",
    whoPays: (ko: boolean) => ko ? "수익률 상승 시 발행사 쿠폰 상승 — 은행은 보상 불가" : "Higher yield = higher issuer coupon — bank provides no compensation",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
];

// ── Documentation Hierarchy ───────────────────────────────────────────────────
const DOC_HIERARCHY = [
  { num: 1, name: (ko: boolean) => ko ? "커밋먼트 레터" : "Commitment Letter", type: "both", note: (ko: boolean) => ko ? "은행에 법적 구속력. 핵심 조건 명시." : "Legally binding on bank. Sets key terms.", color: "bg-blue-500" },
  { num: 2, name: (ko: boolean) => ko ? "크레딧 어그리먼트" : "Credit Agreement", type: "both", note: (ko: boolean) => ko ? "200-400페이지. 주요 운용 문서." : "200-400 pages. Main operative document.", color: "bg-yellow-500" },
  { num: 3, name: (ko: boolean) => ko ? "시큐리티 어그리먼트" : "Security Agreement", type: "both", note: (ko: boolean) => ko ? "담보 설명 (자산 목록)." : "Describes collateral (asset list).", color: "bg-orange-500" },
  { num: 4, name: (ko: boolean) => ko ? "플레지 어그리먼트" : "Pledge Agreements", type: "both", note: (ko: boolean) => ko ? "주식 담보 (지주사 지분)." : "Share pledges (holdco equity).", color: "bg-amber-500" },
  { num: 5, name: (ko: boolean) => ko ? "인터크레디터 어그리먼트" : "Intercreditor Agreement", type: "both", note: (ko: boolean) => ko ? "멀티 트랜치 시 선후순위 조정." : "Multi-tranche seniority coordination.", color: "bg-teal-500" },
  { num: 6, name: (ko: boolean) => ko ? "피 레터 (기밀)" : "Fee Letter (Confidential)", type: "both", note: (ko: boolean) => ko ? "수수료·플렉스 전체. 절대 공개 안 됨." : "All fees + flex. Never disclosed publicly.", color: "bg-rose-500" },
  { num: 7, name: (ko: boolean) => ko ? "인덴처 (HY 전용)" : "Indenture (HY only)", type: "hy", note: (ko: boolean) => ko ? "채권 조건·코버넌트 전체. 공개." : "Bond terms + covenants in full. Public.", color: "bg-purple-500" },
  { num: 8, name: (ko: boolean) => ko ? "오퍼링 메모랜덤 / 프로스펙터스" : "Offering Memorandum / Prospectus", type: "hy", note: (ko: boolean) => ko ? "144A 또는 RegS. 투자자 공시 문서." : "144A or RegS. Investor disclosure document.", color: "bg-indigo-500" },
  { num: 9, name: (ko: boolean) => ko ? "레지스트레이션 라이츠 어그리먼트" : "Registration Rights Agreement", type: "hy", note: (ko: boolean) => ko ? "A/B 교환 — 사모채를 등록 채권으로 전환." : "A/B exchange — converts private to registered bonds.", color: "bg-sky-500" },
  { num: 10, name: (ko: boolean) => ko ? "언더라이팅 어그리먼트" : "Underwriting Agreement", type: "hy", note: (ko: boolean) => ko ? "은행 커밋먼트 공식화." : "Formalizes bank commitments.", color: "bg-cyan-500" },
];

// ── Rating Agency Steps ───────────────────────────────────────────────────────
const RATING_STEPS = [
  {
    step: 1,
    title: (ko: boolean) => ko ? "기밀 제출" : "Confidential Submission",
    detail: (ko: boolean) => ko ? "재무 모델, 경영진 프레젠테이션, 산업 분석을 레이팅 에이전시에 비공개 제출." : "Confidentially submit financial model, management presentation, and industry analysis.",
    icon: "📤",
  },
  {
    step: 2,
    title: (ko: boolean) => ko ? "레이팅 콜 (1차)" : "Rating Call — Round 1",
    detail: (ko: boolean) => ko ? "S&P/무디스 애널리스트와 2시간 개요 통화. 사업 모델, 업계 포지셔닝, 자본구조 설명." : "2-hour overview call with S&P/Moody's analyst. Business model, industry positioning, capital structure.",
    icon: "📞",
  },
  {
    step: 3,
    title: (ko: boolean) => ko ? "레이팅 콜 (2차) — 심층 검토" : "Rating Call — Round 2 (Deep Dive)",
    detail: (ko: boolean) => ko ? "재무 전망 심층 분석. '매출 15% 하락 시 EBITDA는?' 같은 민감도 분석." : "Deep dive on financial projections. Sensitivity analysis — 'EBITDA if revenues drop 15%?'",
    icon: "🔬",
  },
  {
    step: 4,
    title: (ko: boolean) => ko ? "레이팅 에이전시 이슈 리스트" : "Rating Agency Issues List",
    detail: (ko: boolean) => ko ? "추가 질의 목록 수신. 발행사는 상세 서면 답변 제출 의무." : "Receive list of additional questions. Issuer must submit detailed written responses.",
    icon: "📝",
  },
  {
    step: 5,
    title: (ko: boolean) => ko ? "레이팅 커미티" : "Rating Committee",
    detail: (ko: boolean) => ko ? "블랙박스 — 애널리스트도 결과 통제 불가. S&P 기준: 비즈니스 리스크 프로파일(1-6) × 파이낸셜 리스크 프로파일(1-7) → 앵커 레이팅 → 모디파이어 → 최종." : "Black box — analysts don't control the outcome. S&P: Business Risk Profile (1-6) × Financial Risk Profile (1-7) → Anchor → Modifiers → Final.",
    icon: "⚫",
  },
  {
    step: 6,
    title: (ko: boolean) => ko ? "예비 레이팅 발행" : "Preliminary Rating Issued",
    detail: (ko: boolean) => ko ? "제출 후 4-6주. 예비 레이팅 공개. 최종 레이팅은 클로징 시 확정." : "4-6 weeks after submission. Preliminary rating released. Final rating confirmed at closing.",
    icon: "⭐",
  },
];

// ── CIM Structure ─────────────────────────────────────────────────────────────
const CIM_SECTIONS = [
  { section: (ko: boolean) => ko ? "Executive Summary / 사업 개요" : "Executive Summary / Business Overview", pages: "10–15", writer: (ko: boolean) => ko ? "뱅커 (VP/Analyst 초안 → MD 검토)" : "Bankers (VP/Analyst draft → MD review)" },
  { section: (ko: boolean) => ko ? "업계 분석 (Industry Analysis)" : "Industry Analysis", pages: "15–20", writer: (ko: boolean) => ko ? "뱅커 (외부 리서치 + 자체 분석)" : "Bankers (external research + proprietary analysis)" },
  { section: (ko: boolean) => ko ? "경쟁 포지셔닝" : "Competitive Positioning", pages: "10–12", writer: (ko: boolean) => ko ? "경영진 제공 자료 + 뱅커 편집" : "Management-provided data + bankers edit" },
  { section: (ko: boolean) => ko ? "재무 실적 및 전망" : "Financial History & Projections", pages: "20–25", writer: (ko: boolean) => ko ? "재무 모델 기준 — 경영진 제공, 뱅커 검토·재구성" : "Based on financial model — mgmt-provided, bankers review/restructure" },
  { section: (ko: boolean) => ko ? "경영진 프로필" : "Management Team", pages: "5–8", writer: (ko: boolean) => ko ? "경영진 직접 제공" : "Management provided directly" },
  { section: (ko: boolean) => ko ? "거래 구조 (Sources & Uses)" : "Transaction Structure (Sources & Uses)", pages: "5–10", writer: (ko: boolean) => ko ? "뱅커 (법무 검토)" : "Bankers (legal review)" },
  { section: (ko: boolean) => ko ? "부채 스케줄 (Debt Schedule)" : "Debt Schedule", pages: "5–8", writer: (ko: boolean) => ko ? "뱅커 재무 모델 팀" : "Bankers' financial modeling team" },
  { section: (ko: boolean) => ko ? "리스크 팩터" : "Risk Factors", pages: "8–12", writer: (ko: boolean) => ko ? "법무법인 주도 (책임 이슈)" : "Led by law firm (liability issues)" },
];

// ── Syndication Tiers ─────────────────────────────────────────────────────────
const SYNDICATION_TIERS = [
  {
    tier: (ko: boolean) => ko ? "앵커 계좌" : "Anchor Accounts",
    count: "3–5",
    size: "$100–200mn each",
    role: (ko: boolean) => ko ? "최대 CLO 매니저들. 조기 커밋으로 모멘텀 형성." : "Top CLO managers. Early commitment creates momentum.",
    icon: "⚓",
    color: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20",
  },
  {
    tier: (ko: boolean) => ko ? "타겟 계좌" : "Target Accounts",
    count: "20–30",
    size: "$25–100mn each",
    role: (ko: boolean) => ko ? "중형 기관 투자자. 북의 주요 물량 기여." : "Mid-size institutional investors. Core volume of the book.",
    icon: "🎯",
    color: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
  },
  {
    tier: (ko: boolean) => ko ? "필 계좌" : "Fill Accounts",
    count: (ko: boolean) => ko ? "가변" : "Varies",
    size: "$5–25mn each",
    role: (ko: boolean) => ko ? "소형 계좌. 나머지 물량 채움." : "Smaller accounts. Fill remaining volume.",
    icon: "🔧",
    color: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40",
  },
];

// ── Korea Process Diff ────────────────────────────────────────────────────────
const KOREA_PROCESS_DIFF = [
  {
    item: (ko: boolean) => ko ? "CIM" : "CIM",
    global: (ko: boolean) => ko ? "80-120페이지, 반드시 필요. 모든 투자자에게 배포." : "80-120 pages, mandatory. Distributed to all investors.",
    korea: (ko: boolean) => ko ? "국내 은행 딜에서는 생략되는 경우 多. 외국계 PE가 개입 시 작성." : "Often skipped in domestic bank deals. Prepared when foreign PE is involved.",
  },
  {
    item: (ko: boolean) => ko ? "레이팅 프로세스" : "Rating Process",
    global: (ko: boolean) => ko ? "S&P + 무디스 듀얼 레이팅. 4-6주." : "S&P + Moody's dual rating. 4-6 weeks.",
    korea: (ko: boolean) => ko ? "NICE신용평가 + KIS(한국신용평가). USD 채권의 경우 국제 에이전시도 병행." : "NICE Ratings + KIS (Korea Investors Service). International agencies added for USD bonds.",
  },
  {
    item: (ko: boolean) => ko ? "신디케이션 구조" : "Syndication",
    global: (ko: boolean) => ko ? "100+ CLO 포함 광범위 기관 신디케이션." : "Broad institutional syndication including 100+ CLOs.",
    korea: (ko: boolean) => ko ? "4-6개 주요 은행 중심 신디케이션. 국민·KEB하나·신한 등 주관." : "4-6 major bank syndication. KB, KEB Hana, Shinhan as arrangers.",
  },
  {
    item: (ko: boolean) => ko ? "크레딧 어그리먼트" : "Credit Agreement",
    global: (ko: boolean) => ko ? "200-400페이지 (LSTA 표준). 영어." : "200-400 pages (LSTA standard). English.",
    korea: (ko: boolean) => ko ? "대출 약정서 50-80페이지. 한국어. 훨씬 간결." : "Loan agreement 50-80 pages. Korean. Much simpler.",
  },
  {
    item: (ko: boolean) => ko ? "딜 타임라인" : "Deal Timeline",
    global: (ko: boolean) => ko ? "6-8주 전형적." : "6-8 weeks typical.",
    korea: (ko: boolean) => ko ? "4-8주. 국내 딜은 다소 빠름. 인허가 절차 변수." : "4-8 weeks. Domestic deals somewhat faster. Regulatory approvals can vary.",
  },
];

// ── FAQs ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "커밋먼트 레터 서명 후 시장이 급변하면 은행이 손실을 보나요?"
      : "If the market turns after the commitment letter is signed, does the bank take losses?",
    a: (ko: boolean) => ko
      ? "네, 이것이 바로 'Hung Deal' 리스크입니다. 서명 후 은행은 신디케이션 완료 전까지 전체 리스크를 부담합니다. 대표 사례: 2007년 LBO 붐 — 은행들이 $3,000억 이상의 LBO 부채를 커밋했는데, 2007년 8월 신용 시장이 동결되면서 신디케이션이 불가능해졌습니다. 주요 은행들이 수십억 달러 손실을 기록했습니다. 이 때문에 플렉스 조항이 존재하지만, 플렉스를 행사해도 부족한 경우엔 은행이 론을 장부에 그대로 가져가야 합니다."
      : "Yes — this is called 'hung deal' risk. Post-signing, the bank owns the full risk until syndication is complete. Famous example: the 2007 LBO wave — banks committed to $300+bn of LBO debt that couldn't be syndicated when credit markets froze in August 2007. Major banks took multi-billion dollar losses. Flex provisions exist for exactly this reason, but when flex is not enough, banks must carry the loan on their own balance sheet.",
  },
  {
    q: (ko: boolean) => ko
      ? "IPT를 어떻게 설정하나요? 과학인가요 아트인가요?"
      : "How is IPT set? Science or art?",
    a: (ko: boolean) => ko
      ? "둘 다입니다. 뱅커들이 참고하는 것: ① 최근 비교 딜(컴프) — 동일 신용등급, 유사 레버리지, 동일 섹터, ② 발행사 기존 부채의 현재 세컨더리 스프레드, ③ 신규 발행 프리미엄(NIC) — 보통 세컨더리 대비 25-50bp 추가. 이후 버퍼를 더합니다. 너무 타이트하면 딜이 실패하고, 너무 넓게 설정하면 PE가 화를 냅니다. 숙련된 뱅커들은 수십 개의 딜 경험을 통해 직관을 개발합니다."
      : "Both. Bankers look at: ① Comparable recent deals (comps — same rating, similar leverage, same sector), ② current secondary market spreads for the issuer's existing debt, ③ new issue concession (NIC) — typically 25-50bp over secondary. Then they add buffer. Too tight = deal fails. Too wide = PE furious (higher cost). Good bankers develop intuition over dozens of deals.",
  },
  {
    q: (ko: boolean) => ko
      ? "CLO 매니저가 왜 이렇게 중요한가요? 그들이 어떻게 결정하나요?"
      : "Why are CLO managers so important? How do they decide?",
    a: (ko: boolean) => ko
      ? "CLO는 레버리지드 론 시장의 65%를 흡수합니다. CLO 매니저 한 명이 $200mn을 커밋하면 다른 투자자들이 따라옵니다('허드 이펙트'). 그들의 결정 과정: ① CLO 적격 기준 충족 여부(신용등급, 업종, 스프레드 수준), ② 현재 포트폴리오 적합성(집중도 한도), ③ 세컨더리 대비 가격 매력도. 뱅크 미팅에서 리드 CLO가 공개적으로 커밋하면 이는 강력한 신호입니다. 이것이 LevFin 관계 뱅킹의 핵심입니다 — 좋은 딜에서 좋은 배정을 주는 CLO는 어려운 딜에서 앵커 역할을 해줍니다."
      : "CLOs absorb 65% of the leveraged loan market. When a CLO manager commits $200mn, others follow ('herd effect'). Their decision process: ① Does it meet CLO eligibility criteria (rating, industry, spread level)? ② Does it fit their current portfolio (concentration limits)? ③ Is the pricing attractive vs secondary? A lead CLO committing publicly at the bank meeting is a huge signal. This is the core of LevFin relationship banking — CLOs that get good allocations in hot deals reciprocate by anchoring difficult ones.",
  },
  {
    q: (ko: boolean) => ko
      ? "딜이 'Hung'될 위험이 있을 때 은행 내부에서 어떤 일이 벌어지나요?"
      : "What happens inside the bank when a deal risks going 'hung'?",
    a: (ko: boolean) => ko
      ? "에스컬레이션 체인이 작동합니다: 딜팀 → LevFin DCM MD → 캐피털마켓 COO → CFO. 긴급 투자자 콜이 소집됩니다. 딜 구조 변경(트랜치 축소, 에쿼티 추가, 플렉스 실행). 때로는 PE가 에쿼티 투입을 늘립니다. 최악의 경우 은행이 론을 자체 장부에 가져갑니다. 커밋한 뱅커의 커리어 리스크는 막대합니다 — 이 때문에 숙련된 MD들은 커밋 결정에 극도로 신중합니다."
      : "An escalation chain activates: deal team → LevFin DCM MD → Capital Markets COO → CFO. Emergency investor calls are convened. Deal restructuring (cutting tranches, adding equity, exercising flex). Sometimes the PE increases equity contribution. In extremis, the bank carries the loan on balance sheet. Career risk for the banker who committed is enormous — this is why experienced MDs are extremely careful about what they commit to.",
  },
  {
    q: (ko: boolean) => ko
      ? "CIM을 실제로 누가 어떻게 작성하나요?"
      : "Who actually writes the CIM and how?",
    a: (ko: boolean) => ko
      ? "리드: LevFin 애널리스트(2-3년차)와 어소시에이트가 초안 작성, VP와 MD가 감독합니다. 소요 기간: 2-3주, 법무 문서화와 병렬 진행. 프로세스: ① 경영진이 재무 모델과 데이터 제공, ② 뱅커들이 업계/회사 섹션 작성, ③ PE 스폰서가 검토 후 전략 내러티브 제공, ④ 법무 법인이 정확성/책임 검토. 코멘트 라운드가 10-15회에 달합니다. 모든 숫자는 재무 모델과 일치해야 합니다. 전형적인 올나이터 횟수: CIM당 3-5회."
      : "Lead: LevFin analyst (2nd/3rd year) and associate draft, overseen by VP and MD. Timeline: 2-3 weeks, often running in parallel with legal documentation. Process: ① Management provides financial model and data, ② Bankers write industry/company sections, ③ PE sponsor reviews and provides corporate strategy narrative, ④ Legal counsel reviews for accuracy/liability. 10-15 rounds of comments are typical. Every number must reconcile to the financial model. Typical all-nighter count: 3-5 per CIM.",
  },
];

// ── Sources ────────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "LSTA (Loan Syndications and Trading Association)", title: "The LSTA's Complete Credit Agreement Guide", url: "https://www.lsta.org/", source: "LSTA, 2023" },
  { id: 2, author: "S&P Global / LCD", title: "US Leveraged Loan Market Annual Review", url: "https://www.spglobal.com/marketintelligence/en/", source: "S&P Global, 2024" },
  { id: 3, author: "Moody's Investors Service", title: "Rating Methodology: Corporate Finance", url: "https://www.moodys.com/", source: "Moody's, 2024" },
  { id: 4, author: "Bank of America Securities", title: "Leveraged Finance Market Annual Review", url: "https://www.bofasecurities.com/", source: "BofA Global Research, 2024" },
  { id: 5, author: "Kirkland & Ellis LLP", title: "Credit Agreement Fundamentals", url: "https://www.kirkland.com/", source: "Kirkland & Ellis, 2023" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function LevFinProcessClient({ concept, lang }: Props) {
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
              ? "딜 프로세스: 만기에서 클로징까지, 실무 타임라인 완전 해부"
              : "Deal Process: From Mandate to Closing — A Complete Practitioner's Timeline"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "LevFin 딜 한 건에는 40-60명의 실무자가 6-8주 동안 밤낮없이 일합니다. PE 스폰서, 어레인저 은행, 법무법인, 레이팅 에이전시, CLO 매니저까지 — 각자가 어디서 무엇을 하는지, analyst부터 MD까지 알아야 할 도제식 지식을 단계별로 해부합니다."
              : "A single LevFin deal involves 40-60 professionals working around the clock for 6-8 weeks. PE sponsor, arranger banks, law firms, rating agencies, CLO managers — who does what and when, the apprenticeship knowledge every banker from analyst to MD needs to know, broken down stage by stage."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 6-Stage Timeline ──────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 딜 타임라인 — 6단계 전체 해부" : "1. Deal Timeline — All 6 Stages"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "T는 만데이트 서명 시점 기준. 실제로는 모든 단계가 겹쳐 진행됩니다 — 법무 문서화와 레이팅 프로세스는 거의 항상 동시 진행입니다."
              : "T = mandate signing date. In practice, all stages overlap — legal documentation and the rating process almost always run simultaneously."}
          </p>

          <div className="relative">
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-5">
              {DEAL_TIMELINE.map((stage, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0 pt-5">
                      <div className={`w-3.5 h-3.5 rounded-full ring-2 ring-white dark:ring-gray-950 z-10 ${stage.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-5 ${stage.color}`}>
                      <div className="flex items-start gap-3 mb-3 flex-wrap">
                        <span className="text-2xl shrink-0">{stage.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span className="font-black text-base text-gray-900 dark:text-gray-50">{stage.stage(ko)}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stage.badge}`}>
                              {stage.week}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {ko ? "주요 플레이어: " : "Key players: "}
                            <span className="font-semibold">{stage.actor(ko)}</span>
                          </p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                            {ko ? "주요 업무" : "Key Tasks"}
                          </p>
                          <ul className="space-y-1">
                            {stage.tasks(ko).map((task, j) => (
                              <li key={j} className="flex items-start gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                                <span className="shrink-0 mt-0.5" style={{ color: accent }}>▸</span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                            {ko ? "핵심 문서" : "Key Documents"}
                          </p>
                          <ul className="space-y-1">
                            {stage.documents(ko).map((doc, j) => (
                              <li key={j} className="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                                <span className="shrink-0">📄</span>
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-700 dark:text-yellow-400 mb-1">
                          💡 {ko ? "인사이더 팁" : "Insider Tip"}
                        </p>
                        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic">
                          {stage.insiderTip(ko)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 2: Commitment Papers ────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. 커밋먼트 페이퍼 — 비공개 핵심 문서들" : "2. Commitment Papers — The Confidential Core Documents"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "피 레터는 단 한 번도 공개 서류에 등장하지 않습니다. 이것이 LevFin 딜에서 가장 기밀이 높은 문서인 이유입니다."
              : "The fee letter never appears in any public filing. This is why it is the most confidential document in any LevFin deal."}
          </p>

          <div className="space-y-2 mb-6">
            {DOC_HIERARCHY.map((doc, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.05)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 overflow-hidden">
                <div className="flex items-center gap-0">
                  <div className={`w-1.5 shrink-0 self-stretch ${doc.color}`} />
                  <div className="flex-1 px-4 py-3">
                    <div className="flex items-center gap-3 flex-wrap mb-0.5">
                      <span className="text-[10px] font-mono text-gray-400 w-4 shrink-0">{doc.num}.</span>
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{doc.name(ko)}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto shrink-0 ${
                        doc.type === "hy"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                      }`}>
                        {doc.type === "hy" ? (ko ? "HY 전용" : "HY only") : (ko ? "TLB/HY 공통" : "TLB + HY")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 pl-6">{doc.note(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🔒</span>
              <div>
                <p className="font-bold text-sm text-rose-800 dark:text-rose-300 mb-2">
                  {ko ? "피 레터 — 딜에서 가장 기밀이 높은 문서" : "Fee Letter — The Most Confidential Document in the Deal"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {ko
                    ? "피 레터에는 어레인지먼트 피, 업프론트 피, 커밋먼트 피, 익스텐션 피와 함께 플렉스 조항 전체가 명시됩니다. CIM이나 어떤 공개 서류에도 등장하지 않습니다. 플렉스 범위를 알면 은행이 얼마만큼의 시장 위험을 떠안고 있는지 정확히 알 수 있기 때문입니다."
                    : "The fee letter contains the arrangement fee, upfront fee, commitment fee, extension fee, and the complete flex provision. It never appears in the CIM or any public filing — knowing the flex range reveals exactly how much market risk the bank has taken."}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: ko ? "포함 내용" : "Contains", value: ko ? "모든 수수료 + 플렉스 전체 조항" : "All fees + complete flex provision" },
                    { label: ko ? "공개 여부" : "Disclosed", value: ko ? "절대 비공개 (협상 레버리지)" : "Never disclosed (negotiating leverage)" },
                    { label: ko ? "접근 권한" : "Access", value: ko ? "딜팀 + 법무 + CFO 수준" : "Deal team + legal + CFO level only" },
                    { label: ko ? "보관 기간" : "Retention", value: ko ? "딜 클로징 후에도 기밀 유지" : "Remains confidential after closing" },
                  ].map((item, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-gray-400 dark:text-gray-500 uppercase tracking-wide text-[10px]">{item.label}: </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 3: CIM 작성 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. CIM 작성 — 80-120페이지 문서의 해부" : "3. Writing the CIM — Anatomy of an 80-120 Page Document"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "CIM(Confidential Information Memorandum)은 LevFin 딜의 '영업 문서'입니다. 투자자들이 이 문서만 보고 수억 달러를 결정합니다. 뱅커들이 밤샘 작업으로 만드는 이유입니다."
              : "The CIM is the deal's sales document. Investors decide on hundreds of millions based on this alone. It's why bankers pull all-nighters to produce it."}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "CIM 섹션별 구성 및 작성 주체" : "CIM Section Breakdown — Content & Authorship"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "섹션" : "Section"}</th>
                    <th className="text-left px-4 py-2.5 text-center">{ko ? "페이지" : "Pages"}</th>
                    <th className="text-left px-4 py-2.5">{ko ? "작성 주체" : "Written By"}</th>
                  </tr>
                </thead>
                <tbody>
                  {CIM_SECTIONS.map((sec, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200 text-xs">{sec.section(ko)}</td>
                      <td className="px-4 py-3 text-xs text-center font-mono text-gray-500">{sec.pages}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{sec.writer(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: ko ? "총 드래프트 횟수" : "Total Draft Rounds", val: "10–15", icon: "📝", note: ko ? "전형적인 CIM" : "Typical CIM" },
              { label: ko ? "올나이터 횟수" : "All-Nighters", val: "3–5", icon: "🌙", note: ko ? "CIM당" : "Per CIM" },
              { label: ko ? "작성 기간" : "Writing Period", val: ko ? "2–3주" : "2–3 wks", icon: "📅", note: ko ? "법무 문서화와 병행" : "Parallel with legal docs" },
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 text-center">
                <p className="text-2xl mb-1">{stat.icon}</p>
                <p className="font-black text-2xl text-gray-900 dark:text-gray-50 mb-1">{stat.val}</p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{stat.label}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 섹션 4: 레이팅 에이전시 ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 레이팅 에이전시 프로세스 — 블랙박스 해독" : "4. Rating Agency Process — Decoding the Black Box"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "B와 B- 한 노치의 차이가 연간 수백만 달러를 갈릅니다. 레이팅 에이전시는 딜에 실질적인 레버리지를 가집니다 — 그런데 이 과정이 어떻게 돌아가는지 외부인은 거의 모릅니다."
              : "One notch — B vs B- — can mean millions annually. Rating agencies hold real leverage over the deal, yet few outsiders understand how the process actually works."}
          </p>

          <div className="relative mb-6">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-3">
              {RATING_STEPS.map((step, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-lg z-10 shrink-0">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold text-gray-400 font-mono">STEP {step.step}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{step.title(ko)}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <p className="font-bold text-sm text-yellow-800 dark:text-yellow-300 mb-2">
              💡 {ko ? "레이팅 관계 — 에이전시들도 수수료를 위해 경쟁한다" : "Rating Relationships — Agencies Compete for Fees Too"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "무디스와 S&P는 수수료를 위해 경쟁합니다. 발행사들은 기관 만데이트를 위해 듀얼 레이팅이 필요하지만, 어느 에이전시를 먼저 접촉할지 선택합니다. '지난 번에 B+를 준 에이전시 — 이번에도 그쪽으로 가자.' 레이팅 관계가 중요한 이유입니다. 발행사가 레이팅에 불만이 있으면 다른 에이전시로 갈 수 있다는 암묵적 위협이 존재합니다 — 이것이 에이전시의 독립성을 놓고 비판받는 구조적 문제 중 하나입니다."
                : "Moody's and S&P compete for fees. Issuers need dual ratings for most institutional mandates, but choose which agency to approach first. 'The agency that gave us B+ last time — let's go back.' Rating relationships matter. If an issuer is unhappy with a rating, there's an implicit threat to use the other agency — one of the structural criticisms of rating agency independence."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 5: 북빌드 ────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 북빌드 — 10AM 업데이트부터 최종 프라이싱까지" : "5. Book Build — From the 10AM Update to Final Pricing"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "북빌드는 딜의 심장 박동입니다. 매일 아침 10시 업데이트에서 딜의 생사가 결정됩니다."
              : "The book build is the deal's heartbeat. Every morning's 10AM update reveals whether the deal lives or dies."}
          </p>

          {/* Syndication tiers */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {SYNDICATION_TIERS.map((tier, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${tier.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tier.icon}</span>
                  <span className="font-black text-sm text-gray-900 dark:text-gray-50">{tier.tier(ko)}</span>
                </div>
                <p className="font-mono text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                  {typeof tier.count === "function" ? tier.count(ko) : tier.count} {ko ? "계좌" : "accounts"}
                </p>
                <p className="font-mono text-xs font-bold mb-2" style={{ color: accent }}>{tier.size}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{tier.role(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* Book dynamics */}
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-3">
            {ko ? "북 커버리지별 시나리오" : "Book Coverage Scenarios"}
          </h3>
          <div className="space-y-3 mb-6">
            {BOOK_DYNAMICS.map((scenario, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${scenario.color}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${scenario.dot}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="font-black text-sm text-gray-900 dark:text-gray-50">{scenario.coverage(ko)}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        scenario.sentiment === "bullish"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : scenario.sentiment === "neutral"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300"
                          : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
                      }`}>
                        {ko
                          ? scenario.sentiment === "bullish" ? "강세" : scenario.sentiment === "neutral" ? "중립" : "약세"
                          : scenario.sentiment === "bullish" ? "Bullish" : scenario.sentiment === "neutral" ? "Neutral" : "Bearish"}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-0.5">→ {scenario.action(ko)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{scenario.signal(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* IPT → Guidance → Pricing bar chart — pixel heights only */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "IPT → 가이던스 → 프라이싱 — 전형적 타이트닝 예시 (bps)" : "IPT → Guidance → Pricing — Typical Tightening (bps)"}
            </p>
            <div className="flex items-end gap-4" style={{ height: "100px" }}>
              {[
                { label: "IPT", bps: 375, note: ko ? "시작점" : "Starting point" },
                { label: ko ? "가이던스" : "Guidance", bps: 337, note: ko ? "3× 커버 후" : "After 3× cover" },
                { label: ko ? "프라이싱" : "Pricing", bps: 325, note: ko ? "최종 확정" : "Final" },
              ].map((bar, i) => {
                const barPx = Math.round((bar.bps / 375) * 80);
                const barColor = i === 0 ? "bg-orange-400" : i === 1 ? "bg-yellow-500" : "bg-emerald-500";
                return (
                  <div key={i} className="flex flex-col items-center justify-end flex-1" style={{ height: "100px" }}>
                    <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400 mb-0.5">{bar.bps}bp</span>
                    <motion.div
                      className={`w-full rounded-t-sm ${barColor}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: barPx }}
                      viewport={VP}
                      transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                    />
                    <span className="text-[9px] font-bold text-gray-700 dark:text-gray-300 mt-1 text-center">{bar.label}</span>
                    <span className="text-[8px] text-gray-400 text-center">{bar.note}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3">
              {ko
                ? "* 예시: IPT 'mid-to-high 300s' → 가이던스 '325-350bp' → 프라이싱 '325bp'. 총 50bp 타이트닝."
                : "* Example: IPT 'mid-to-high 300s' → Guidance '325-350bp' → Pricing '325bp'. Total 50bp tightening."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 6: 수수료 구조 ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 수수료 구조 — 딜 하나에 얼마나 드나" : "6. Fee Structure — What Does a Deal Actually Cost?"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "$10억 LBO 기준 수수료만 $2,500-4,000만. 이자 비용은 그 위에 올라옵니다. LevFin 은행들이 왜 이 딜을 원하는지 이해할 수 있습니다."
              : "For a $1bn LBO, fees alone run $25-40mn — before any interest cost. You can see why LevFin banks want these deals."}
          </p>

          <div className="space-y-3 mb-6">
            {FEE_STRUCTURE.map((fee, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 overflow-hidden">
                <div className="flex items-center gap-0">
                  <div className={`w-1.5 shrink-0 self-stretch ${fee.color}`} />
                  <div className="flex-1 px-4 py-3">
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{fee.name(ko)}</span>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-black text-sm" style={{ color: accent }}>{fee.bps}</span>
                        <span className="text-xs text-gray-400 ml-1">{fee.basis(ko)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                      {ko ? "수취인" : "Recipient"}: <span className="font-semibold text-gray-700 dark:text-gray-300">{fee.recipient(ko)}</span>
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 italic">{fee.note(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-5">
            <p className="font-bold text-sm text-yellow-800 dark:text-yellow-300 mb-3">
              💰 {ko ? "$10억 LBO 총 파이낸싱 비용 추정" : "Total Financing Cost Estimate — $1bn LBO"}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: ko ? "업프론트 피 합계" : "Total upfront fees", val: "$25–40mn" },
                { label: ko ? "연간 이자 비용 (TLB, ~6%)" : "Annual interest (TLB, ~6%)", val: "$36mn+" },
                { label: ko ? "연간 이자 비용 (HY채권, ~8%)" : "Annual interest (HY bonds, ~8%)", val: "$32mn+" },
                { label: ko ? "총 7년 파이낸싱 비용 합계 (이자+피)" : "Total 7-year cost (interest + fees)", val: "$500mn+" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400 flex-1">{item.label}</span>
                  <span className="font-black text-gray-900 dark:text-gray-50 shrink-0">{item.val}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 italic">
              {ko
                ? "* TLB $600mn + HY $400mn 기준. 실제 비용은 시장 상황 및 레이팅에 따라 상이."
                : "* Based on TLB $600mn + HY $400mn. Actual costs vary by market conditions and rating."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 7: Market Flex ──────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 마켓 플렉스 — 은행이 자신을 보호하는 방법" : "7. Market Flex — How Banks Protect Themselves"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "플렉스는 커밋먼트 레터에 명시된 은행의 보호 장치입니다. 신디케이션에 실패할 것 같으면 조건을 조정할 권리입니다. 그런데 플렉스 비용을 누가 부담하는지가 핵심입니다."
              : "Flex is the bank's protection mechanism written into the commitment letter — the right to adjust terms if syndication would otherwise fail. Who bears the cost of flex is the critical question."}
          </p>

          <div className="space-y-4 mb-6">
            {MARKET_FLEX_DATA.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.instrument}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { k: ko ? "플렉스 범위" : "Flex Range", v: item.flex(ko) },
                    { k: ko ? "상한선 (하드 플로어)" : "Cap (Hard Floor)", v: item.cap(ko) },
                    { k: ko ? "방향" : "Direction", v: item.direction(ko) },
                    { k: ko ? "비용 부담" : "Who Pays", v: item.whoPays(ko) },
                  ].map((row, j) => (
                    <div key={j}>
                      <span className="text-gray-400 dark:text-gray-500 uppercase tracking-wide text-[10px]">{row.k}: </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{row.v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 p-5">
            <p className="font-bold text-sm text-orange-800 dark:text-orange-300 mb-2">
              ⚠️ {ko ? "플렉스의 진짜 의미 — 은행은 보상을 제공하지 않는다" : "What Flex Really Means — Banks Don't Compensate"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "플렉스가 실행되어도 은행은 발행사에게 보상을 제공하지 않습니다. 스프레드가 50bp 더 넓어지면 발행사는 영구적으로 매년 수백만 달러를 더 냅니다. 뱅커의 역할은 IPT를 정확하게 설정해 플렉스가 필요 없도록 하는 것입니다. 잘 운영된 북이 3배 커버된 경우엔 리버스 플렉스도 가능합니다 — 발행사가 더 낮은 이자를 내게 됩니다. 플렉스는 공개적으로 절대 알려지지 않습니다 — 피 레터가 비밀인 이유 중 하나입니다."
                : "When flex is exercised, the bank provides no compensation to the issuer. A 50bp wider spread means the issuer permanently pays millions more every year. The banker's job is to price IPT correctly so flex is never needed. A well-managed book covered 3× may even see reverse flex — the issuer pays less. Flex is never exercised publicly — one of the reasons the fee letter stays secret."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 8: 한국 LevFin 프로세스 ──────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "8. 한국 LevFin 프로세스 — 글로벌과 어떻게 다른가" : "8. Korean LevFin Process — How It Differs Globally"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "MBK·홈플러스(2015, 7.2조원), 칼라일·ADT캡스(2014, $1.4bn) — 한국 대형 LBO도 비슷한 프로세스를 따르지만, 글로벌 표준과는 중요한 차이가 있습니다."
              : "MBK·Homeplus (2015, KRW 7.2tn), Carlyle·ADT Caps (2014, $1.4bn) — large Korean LBOs follow a similar process but with significant differences from global standard."}
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-5">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {ko ? "글로벌 vs 한국 LevFin 프로세스 비교" : "Global vs Korea LevFin Process Comparison"}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/40 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-2.5">{ko ? "항목" : "Item"}</th>
                    <th className="text-left px-4 py-2.5 text-blue-600 dark:text-blue-400">{ko ? "글로벌 (미국 기준)" : "Global (US Standard)"}</th>
                    <th className="text-left px-4 py-2.5 text-yellow-600 dark:text-yellow-400">🇰🇷 {ko ? "한국" : "Korea"}</th>
                  </tr>
                </thead>
                <tbody>
                  {KOREA_PROCESS_DIFF.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">{row.item(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.global(ko)}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.korea(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">
              🇰🇷 {ko ? "케이스: MBK·홈플러스 (2015, 7.2조원)" : "Case: MBK·Homeplus (2015, KRW 7.2tn)"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "한국 역사상 최대 LBO. 어레인저: Citi + Goldman Sachs (국제) + KB국민은행 (국내). 글로벌 스탠다드와 한국 로컬 프로세스를 혼합. USD 트랜치는 국제 투자자에게 CIM과 영문 크레딧 어그리먼트로 신디케이션. 원화 트랜치는 국내 은행 신디케이션으로 간소화된 대출 약정서 사용. NICE + KIS 레이팅 병행. 딜 타임라인: 약 5-6주. 이 딜은 이후 홈플러스의 재무 부담으로 논란이 됐지만, 프로세스 자체는 한국 LevFin 발전의 이정표로 평가받습니다."
                : "Korea's largest LBO ever. Arrangers: Citi + Goldman Sachs (international) + KB Kookmin Bank (domestic). Mixed global standard and Korean local process. USD tranche syndicated to international investors with CIM and English credit agreement. KRW tranche used simplified domestic bank syndication with Korean-language loan agreement. NICE + KIS ratings in parallel. Deal timeline: approximately 5-6 weeks. The deal became controversial due to Homeplus's subsequent financial pressure, but the process itself is considered a landmark in Korean LevFin development."}
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
          <div className="grid grid-cols-1 gap-3">
            <motion.div variants={fadeUp(0.05)}>
              <Link
                href={`${base.replace("market-101", "deals")}/elon-musk-twitter`}
                className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-[8px] font-black leading-none">MUSK</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug">
                    {ko ? "일론 머스크 × 트위터 (2022) — 역대 최대 Hung Deal, 딜 프로세스의 악몽" : "Elon Musk × Twitter (2022) — History's Largest Hung Deal, Deal Process Nightmare"}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                    {ko ? "$13B 커미트먼트 레터 → 신디케이션 실패 → 7개 은행 $3~4B 손실 — Hung Deal 완전 해부" : "$13B commitment letter → syndication failure → 7 banks $3–4B losses — Hung Deal fully dissected"}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp(0.1)}>
              <Link
                href={`${base.replace("market-101", "deals")}/kkr-rjr-nabisco`}
                className="group flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4 hover:border-amber-300 dark:hover:border-amber-600 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center">
                  <span className="text-white text-[9px] font-black leading-none">KKR</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors leading-snug">
                    {ko ? "KKR × RJR Nabisco (1989) — 브리지론과 신디케이션의 원형" : "KKR × RJR Nabisco (1989) — The Original Bridge Loan & Syndication Playbook"}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                    {ko ? "$5B 브리지론 → HY 신디케이션 완료 — 현대 LBO 딜 프로세스의 원형을 만든 딜" : "$5B bridge loan → HY syndication closed — the deal that established the modern LBO deal process template"}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors self-center text-lg">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <ShareButtons
          title={ko
            ? "LevFin Ch.4 딜 프로세스 — 만기에서 클로징까지 실무 타임라인 | Deal Story"
            : "LevFin Ch.4 Deal Process — From Mandate to Closing, Practitioner's Timeline | Deal Story"}
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
