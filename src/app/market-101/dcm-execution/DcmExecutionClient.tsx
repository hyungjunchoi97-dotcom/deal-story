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
const accent = "#14b8a6";
const accentLight = "#ccfbf1";

// ── Series nav ────────────────────────────────────────────────────────────────
const DCM_SERIES = [
  { slug: "dcm-overview",              ch: 0, title: (ko: boolean) => ko ? "DCM 개요"          : "DCM Overview"    },
  { slug: "dcm-issuers",               ch: 1, title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"    },
  { slug: "dcm-investors",             ch: 2, title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"  },
  { slug: "dcm-bond-products",         ch: 3, title: (ko: boolean) => ko ? "Ch.3 상품"          : "Ch.3 Products"   },
  { slug: "dcm-international-markets", ch: 4, title: (ko: boolean) => ko ? "Ch.4 국제채"        : "Ch.4 Intl"       },
  { slug: "dcm-deal-process",          ch: 5, title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"   : "Ch.5 Process"    },
  { slug: "dcm-pricing",               ch: 6, title: (ko: boolean) => ko ? "Ch.6 프라이싱"      : "Ch.6 Pricing"    },
  { slug: "dcm-structure-regulation",  ch: 7, title: (ko: boolean) => ko ? "Ch.7 구조·제도"     : "Ch.7 Regulation" },
  { slug: "dcm-execution",             ch: 8, title: (ko: boolean) => ko ? "Ch.8 실전 발행"     : "Ch.8 Execution"  },
  { slug: "dcm-liability-management",  ch: 9,  title: (ko: boolean) => ko ? "Ch.9 부채관리"      : "Ch.9 LM"            },
  { slug: "dcm-esg-green-bond",        ch: 10, title: (ko: boolean) => ko ? "Ch.10 ESG·녹색채권" : "Ch.10 ESG"          },
];
const thisCh = 8;

// ── Arb 비교 테이블 ────────────────────────────────────────────────────────────
const ARB_TABLE = [
  {
    market: (ko: boolean) => ko ? "USD 양키본드 직접 발행" : "USD Yankee (Direct)",
    currency: "USD",
    spread: "SOFR + 80bp",
    ccbsBasis: "—",
    usdEquiv: "SOFR + 80bp",
    arb: (ko: boolean) => ko ? "기준" : "Baseline",
    arbBp: 0,
    flag: "🇺🇸",
    color: "bg-gray-50 dark:bg-gray-800/40",
    border: "border-gray-200 dark:border-gray-700",
    arbColor: "text-gray-500",
    note: (ko: boolean) => ko ? "헤지 불필요, 가장 깊은 USD 유동성" : "No hedge needed, deepest USD liquidity",
  },
  {
    market: (ko: boolean) => ko ? "EUR 유로본드" : "EUR Eurobond",
    currency: "EUR",
    spread: "EUR MS + 65bp",
    ccbsBasis: "−18bp",
    usdEquiv: "SOFR + 47bp",
    arb: (ko: boolean) => ko ? "33bp 절감" : "33bp saving",
    arbBp: 33,
    flag: "🇪🇺",
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-700",
    arbColor: "text-emerald-600 dark:text-emerald-400",
    note: (ko: boolean) => ko ? "IRS + CCBS 2단계 스왑. 유럽 투자자 베이스 구축" : "2-step swap: IRS + CCBS. Builds European investor base",
  },
  {
    market: (ko: boolean) => ko ? "JPY 사무라이본드" : "JPY Samurai Bond",
    currency: "JPY",
    spread: "JGB + 60bp",
    ccbsBasis: "−50bp",
    usdEquiv: "SOFR + 10bp",
    arb: (ko: boolean) => ko ? "70bp 절감" : "70bp saving",
    arbBp: 70,
    flag: "🇯🇵",
    color: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-700",
    arbColor: "text-red-600 dark:text-red-400",
    note: (ko: boolean) => ko ? "BOJ 저금리 구조에서 베이시스 최대. 일본 생보·연기금" : "Largest basis from BOJ ultra-low rate era. Japanese life insurers & pensions",
  },
  {
    market: (ko: boolean) => ko ? "TWD 포모사본드" : "TWD Formosa Bond",
    currency: "USD",
    spread: "USD + 45bp",
    ccbsBasis: (ko: boolean) => ko ? "— (USD 표시)" : "— (USD-denominated)",
    usdEquiv: "SOFR + 45bp",
    arb: (ko: boolean) => ko ? "35bp 절감" : "35bp saving",
    arbBp: 35,
    flag: "🇹🇼",
    color: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    arbColor: "text-blue-600 dark:text-blue-400",
    note: (ko: boolean) => ko ? "USD 표시 → 환스왑 없음. Arb는 대만 보험사 수요 초과에서 발생" : "USD-denominated, no FX swap. Arb from structural excess demand by Taiwan insurers",
  },
];

// ── CCBS 3단계 계산 ────────────────────────────────────────────────────────────
const CCBS_STEPS = [
  {
    step: "①",
    title: (ko: boolean) => ko ? "EUR 채권 발행" : "EUR Bond Issuance",
    action: (ko: boolean) => ko ? "EUR MS + 65bp 쿠폰 지급 의무 발생" : "EUR coupon obligation: EUR MS + 65bp",
    result: (ko: boolean) => ko ? "부채: EUR 고정 MS+65bp" : "Liability: EUR fixed MS+65bp",
    color: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700",
    icon: "💶",
  },
  {
    step: "②",
    title: (ko: boolean) => ko ? "EUR IRS (금리스왑)" : "EUR Interest Rate Swap",
    action: (ko: boolean) => ko ? "EUR 고정 지급 → EUR 변동(EURIBOR) 수취. EUR MS를 상쇄." : "Pay EUR fixed, receive EURIBOR. Cancels the EUR MS component.",
    result: (ko: boolean) => ko ? "남은 의무: EURIBOR + 65bp" : "Remaining: EURIBOR + 65bp",
    color: "bg-violet-100 dark:bg-violet-900/30 border-violet-300 dark:border-violet-700",
    icon: "🔄",
  },
  {
    step: "③",
    title: (ko: boolean) => ko ? "EUR/USD CCBS (크로스커런시 베이시스 스왑)" : "EUR/USD Cross-Currency Basis Swap",
    action: (ko: boolean) => ko ? "EURIBOR 지급 → USD SOFR 수취. 베이시스 −18bp 적용." : "Pay EURIBOR, receive USD SOFR. Apply −18bp basis.",
    result: (ko: boolean) => ko ? "최종 USD 비용: SOFR + 65bp − 18bp = SOFR + 47bp" : "Final USD cost: SOFR + 65bp − 18bp = SOFR + 47bp",
    color: "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700",
    icon: "💱",
  },
];

// ── Bloomberg Comps 테이블 ─────────────────────────────────────────────────────
const COMPS_TABLE = [
  { issuer: "KfW", country: "🇩🇪", rating: "AAA", tenor: "5Y", aswBp: 10, note: (ko: boolean) => ko ? "독일 정부 보증 개발은행, 벤치마크 최상단" : "German government-backed, top benchmark" },
  { issuer: "EIB", country: "🇪🇺", rating: "AAA", tenor: "5Y", aswBp: 12, note: (ko: boolean) => ko ? "EU 보증 초국가기관" : "EU-backed supranational" },
  { issuer: "CADES", country: "🇫🇷", rating: "AA", tenor: "5Y", aswBp: 25, note: (ko: boolean) => ko ? "프랑스 사회보장 부채상환기금" : "French social security debt fund" },
  { issuer: "KoreaFinance", country: "🇰🇷", rating: "AA", tenor: "5Y", aswBp: 52, note: (ko: boolean) => ko ? "한국 소버린 추정치 (세컨더리)" : "Korea sovereign estimate (secondary)" },
  { issuer: "KEXIM", country: "🇰🇷", rating: "AA−", tenor: "5Y", aswBp: 62, note: (ko: boolean) => ko ? "수출입은행, 정부 보증 agency" : "Export-Import Bank, govt-backed agency" },
  { issuer: "KDB", country: "🇰🇷", rating: "AA−", tenor: "5Y", aswBp: 65, note: (ko: boolean) => ko ? "산업은행, 정부 보증 agency" : "Korea Development Bank, govt-backed" },
];

// ── 북빌딩 타임라인 ────────────────────────────────────────────────────────────
const BOOK_TIMELINE = [
  {
    time: "08:00",
    event: (ko: boolean) => ko ? "IPT 공표" : "IPT Announced",
    book: "—",
    coverage: "—",
    decision: (ko: boolean) => ko ? "신디케이트 데스크 → 블룸버그 메시지 + 전화로 주요 계정 동시 연락. \"EUR 5yr, ASW+65bp area, 최소 EUR 500mn\"" : "Syndicate desk contacts key accounts via Bloomberg message + phone simultaneously. \"EUR 5yr, ASW+65bp area, min EUR 500mn\"",
    tighten: null,
    color: "border-gray-300 bg-gray-50 dark:bg-gray-800/40",
    dot: "bg-gray-400",
  },
  {
    time: "08:30",
    event: (ko: boolean) => ko ? "30분 경과" : "30 min in",
    book: "EUR 600mn",
    coverage: "1.2×",
    decision: (ko: boolean) => ko ? "아직 조심. 중앙은행·유럽 보험사 대형 오더 미입수. 대기." : "Still cautious. Central banks and European insurers haven't entered yet. Hold.",
    tighten: null,
    color: "border-amber-300 bg-amber-50 dark:bg-amber-900/20",
    dot: "bg-amber-400",
  },
  {
    time: "09:30",
    event: (ko: boolean) => ko ? "1시간 30분 경과" : "1h 30min in",
    book: "EUR 1,400mn",
    coverage: "2.8×",
    decision: (ko: boolean) => ko ? "중앙은행 EUR 400mn, 보험사 EUR 350mn 입수. Real money 주도. 북 질 양호. → 1차 타이트닝 결정" : "Central banks EUR 400mn, insurers EUR 350mn entered. Real money dominated. Book quality solid. → First tightening decision",
    tighten: "ASW+65bp → ASW+60bp area (−5bp)",
    color: "border-blue-300 bg-blue-50 dark:bg-blue-900/20",
    dot: "bg-blue-500",
  },
  {
    time: "10:30",
    event: (ko: boolean) => ko ? "2시간 30분 경과" : "2h 30min in",
    book: "EUR 1,800mn",
    coverage: "3.6×",
    decision: (ko: boolean) => ko ? "헤지펀드 EUR 150mn 추가 유입. 그러나 전체 북의 8%에 불과 → 건강한 구성. 발행 규모 EUR 500mn → 600mn 업사이징 검토. Final 결정." : "HF EUR 150mn entered but only 8% of book — healthy composition. Consider upsizing EUR 500mn → 600mn. Lock final.",
    tighten: "ASW+60bp → ASW+57bp (−3bp) + 600mn 업사이징",
    color: "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20",
    dot: "bg-emerald-500",
  },
  {
    time: "11:00",
    event: (ko: boolean) => ko ? "딜 확정" : "Deal Priced",
    book: "EUR 1,800mn",
    coverage: (ko: boolean) => ko ? "3.0× (EUR 600mn 기준)" : "3.0× (vs. EUR 600mn target)",
    decision: (ko: boolean) => ko ? "IPT 대비 −8bp 타이트닝. EUR 600mn 확정. 결제일 T+5. ISIN 부여. 투자자 배분 통보 개시." : "−8bp tight vs. IPT. EUR 600mn confirmed. Settlement T+5. ISIN assigned. Allocation notifications sent.",
    tighten: null,
    color: "border-teal-300 bg-teal-50 dark:bg-teal-900/20",
    dot: "bg-teal-500",
  },
];

// ── 커버리지별 타이트닝 경험칙 ─────────────────────────────────────────────────
const TIGHTENING_GUIDE = [
  { coverage: "< 1.5×", tighten: (ko: boolean) => ko ? "타이트닝 불가 (IPT 유지 또는 딜 철회)" : "No tightening (hold IPT or pull deal)", risk: "high", color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" },
  { coverage: "1.5× – 2×", tighten: (ko: boolean) => ko ? "0 – 3bp 보수적 타이트닝" : "0 – 3bp conservative tightening", risk: "medium", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" },
  { coverage: "2× – 3×", tighten: (ko: boolean) => ko ? "3 – 7bp 표준 타이트닝" : "3 – 7bp standard tightening", risk: "low", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
  { coverage: "3× – 5×", tighten: (ko: boolean) => ko ? "7 – 12bp 공격적 타이트닝 + 업사이징 검토" : "7 – 12bp aggressive tightening + consider upsizing", risk: "positive", color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300" },
  { coverage: "> 5×", tighten: (ko: boolean) => ko ? "12 – 15bp 최대 타이트닝 (단, 과도시 투자자 불만)" : "12 – 15bp max (but over-tightening risks investor backlash)", risk: "high-positive", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300" },
];

// ── 오더북 구성 ───────────────────────────────────────────────────────────────
const ORDER_BOOK = [
  {
    type: (ko: boolean) => ko ? "중앙은행" : "Central Banks",
    count: 6,
    ordered: 400,
    allocated: 370,
    allocationRate: 93,
    quality: "best",
    icon: "🏛️",
    desc: (ko: boolean) => ko ? "절대 안 팜. NIC 덜 민감. 신뢰 관계 최우선 배분. 세컨더리 안정의 핵심." : "Never sell. Less NIC sensitive. Top-priority allocation. Anchor of secondary stability.",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
    barColor: "bg-indigo-500",
  },
  {
    type: (ko: boolean) => ko ? "보험사 / 연기금" : "Insurers / Pensions",
    count: 12,
    ordered: 380,
    allocated: 260,
    allocationRate: 68,
    quality: "good",
    icon: "🏢",
    desc: (ko: boolean) => ko ? "만기 보유 성향. Duration 매칭 목적. Solvency II 자본 규제상 IG 선호." : "Buy-and-hold. Duration matching. Prefer IG under Solvency II capital rules.",
    color: "bg-blue-100 dark:bg-blue-900/30",
    barColor: "bg-blue-500",
  },
  {
    type: (ko: boolean) => ko ? "장기 자산운용사 (AM)" : "Long-Only Asset Managers",
    count: 25,
    ordered: 620,
    allocated: 280,
    allocationRate: 45,
    quality: "good",
    icon: "📊",
    desc: (ko: boolean) => ko ? "인덱스 편입 여부 민감. 대부분 보유. 오더 규모 크지만 배분 헤어컷 일반적." : "Index-inclusion sensitive. Mostly hold. Large orders but standard haircuts.",
    color: "bg-sky-100 dark:bg-sky-900/30",
    barColor: "bg-sky-500",
  },
  {
    type: (ko: boolean) => ko ? "헤지펀드 / 단기 AM" : "Hedge Funds / Short-term AM",
    count: 18,
    ordered: 250,
    allocated: 80,
    allocationRate: 32,
    quality: "fast",
    icon: "⚡",
    desc: (ko: boolean) => ko ? "Fast money. 세컨더리 즉시 매도 가능. 배분 대폭 삭감이 원칙. 그러나 북 커버리지에는 기여." : "Fast money. May sell immediately in secondary. Major allocation haircut. But contributes to book coverage.",
    color: "bg-rose-100 dark:bg-rose-900/30",
    barColor: "bg-rose-500",
  },
  {
    type: (ko: boolean) => ko ? "리테일 / 프라이빗 뱅킹" : "Retail / Private Banking",
    count: 30,
    ordered: 150,
    allocated: 90,
    allocationRate: 60,
    quality: "neutral",
    icon: "👤",
    desc: (ko: boolean) => ko ? "지역 분산 목적 배분. 만기 보유 성향 강함. 소규모지만 IR 관계 강화에 기여." : "Geographic diversification. Strong hold-to-maturity tendency. Small but strengthens IR relationships.",
    color: "bg-violet-100 dark:bg-violet-900/30",
    barColor: "bg-violet-500",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "CCBS 베이시스가 항상 음수인가요? 양수가 되는 경우도 있나요?"
      : "Is the CCBS basis always negative? Can it turn positive?",
    a: (ko: boolean) => ko
      ? "역사적으로 2008 이전에는 양수(+)였습니다. 달러 조달 비용이 낮아 USD를 빌려 다른 통화로 투자하는 것이 유리했던 시기입니다. 그러나 2008 금융위기 이후 달러 수요가 구조적으로 높아지면서 주요 통화 쌍(EUR/USD, USD/JPY)의 베이시스가 음수로 고착화됐습니다. 특히 연말(은행 규제 자본 기간)에 USD 수요가 급증해 베이시스가 더 벌어지는 경향이 있습니다. USD/JPY는 -40~-70bp, EUR/USD는 -10~-30bp 레인지에서 움직여왔습니다."
      : "Historically the basis was positive before 2008 — borrowing USD cheaply to invest in other currencies was attractive. Post-GFC, structural USD demand turned it persistently negative for major pairs (EUR/USD, USD/JPY). It widens further at year-end as banks manage regulatory capital. USD/JPY typically ranges -40 to -70bp, EUR/USD -10 to -30bp.",
  },
  {
    q: (ko: boolean) => ko
      ? "IPT에서 타이트닝이 전혀 없는 경우도 있나요?"
      : "Can a deal price at IPT with zero tightening?",
    a: (ko: boolean) => ko
      ? "있습니다. 북 커버리지가 1.5× 미만이거나 real money 비중이 낮으면 IPT를 그대로 유지하거나, 심한 경우 딜을 철회(pull)합니다. 드물지만 IPT 대비 와이드닝(더 높은 스프레드를 줘야 책이 채워지는 경우)도 발생합니다. 이 경우 발행사와의 관계가 매우 어색해지며, 해당 뱅크의 다음 피치 경쟁에서 불리해집니다. 반대로, 수요가 압도적이면(5× 이상) 가이던스를 생략하고 IPT에서 바로 Final로 가는 'drive-by' 방식도 존재합니다."
      : "Yes. If coverage is below 1.5× or real money share is low, IPT is held flat or the deal is pulled. Rarely, widening occurs — the spread has to be raised to fill the book. This severely damages the bank-issuer relationship and hurts the bank's future mandate chances. Conversely, with 5×+ demand, some deals skip guidance and go straight from IPT to final ('drive-by' execution).",
  },
  {
    q: (ko: boolean) => ko
      ? "헤지펀드 오더를 왜 아예 받지 않는 경우도 있나요?"
      : "Why do some deals exclude hedge fund orders entirely?",
    a: (ko: boolean) => ko
      ? "배분을 완전히 거부하는 경우는 드물지만, 배분 비율을 10~20% 수준으로 대폭 삭감하는 것은 일반적입니다. 헤지펀드가 발행가 아래로 세컨더리를 매도하면 차기 딜의 NIC를 높여야 하고, 이는 발행사 비용 증가로 이어지기 때문입니다. 단, 헤지펀드가 전혀 없으면 세컨더리 유동성이 낮아 장기 투자자들도 꺼릴 수 있습니다. 뱅커는 이 균형을 맞추는 것이 예술입니다."
      : "Outright exclusion is rare, but cutting allocations to 10–20% is standard. HFs selling below issue price forces higher NIC on future deals, increasing the issuer's cost. However, zero HF participation lowers secondary liquidity, which discourages even long-only investors. Balancing this is the art of allocation.",
  },
  {
    q: (ko: boolean) => ko
      ? "Arb 창이 닫혀도 발행사가 굳이 발행하는 이유가 있나요?"
      : "Why would an issuer proceed even when the Arb window is closed?",
    a: (ko: boolean) => ko
      ? "순수 비용 절감이 아닌 다른 목적이 있기 때문입니다. ① IR 목적: 특정 지역(일본 생보, 대만 보험사) 투자자 베이스를 유지하려면 꾸준한 발행이 필요합니다. 오래 안 나오면 다음에 더 높은 NIC가 필요합니다. ② 연간 발행 프로그램: 대부분 소버린·agency는 연간 발행 계획이 있고, 자금 필요 타이밍과 시장 창이 항상 일치하지 않습니다. ③ 벤치마크 구축: 새로운 만기물 발행으로 수익률 커브를 구축하고 싶을 때. Arb 없어도 전략적 발행이 정당화될 수 있습니다."
      : "Because purpose isn't always cost minimization. ① IR purpose: to maintain investor relationships in specific regions (Japanese life insurers, Taiwan insurers), consistent issuance is needed — long absences require higher NIC on return. ② Annual funding program: sovereign/agency issuers have annual plans; funding needs don't always align with optimal windows. ③ Curve building: new tenors fill out the yield curve. Strategic issuance can justify proceeding even without arb.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 소버린(외평채)이 KEXIM·KDB보다 타이트하게 거래되는 이유는?"
      : "Why does Korea sovereign (외평채) trade tighter than KEXIM or KDB?",
    a: (ko: boolean) => ko
      ? "세 가지 이유입니다. ① 법적 지위: 외평채는 대한민국 정부의 직접 채무입니다. KEXIM·KDB는 정부 보증이 암묵적이지만 명시적 채무는 아닙니다. ② 등급: 한국 소버린 AA vs. KEXIM/KDB AA−. 한 노치 차이가 약 10–15bp 스프레드 차이를 만듭니다. ③ 유동성 프리미엄: 외평채 발행 규모가 agency 대비 크고, 벤치마크 지위에 있어 유동성이 높습니다. 단, 한국의 경우 정부 지원 명확성이 높아 소버린 vs. agency 갭이 선진국 대비 작은 편입니다."
      : "Three reasons. ① Legal status: 외평채 is direct Republic of Korea government debt. KEXIM/KDB carry implicit but not explicit government guarantee. ② Rating: Korea sovereign AA vs. KEXIM/KDB AA−. One notch difference creates ~10–15bp spread gap. ③ Liquidity premium: sovereign benchmark issues are larger and more liquid. However, Korea's strong government support keeps the sovereign-agency gap narrower than most developed markets.",
  },
];

// ── 참고자료 ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, author: "Bank for International Settlements", title: "Cross-currency basis: Evidence from FX swaps and cross-currency basis swaps", url: "https://www.bis.org/publ/work769.htm", source: "BIS Working Papers No.769, 2019" },
  { id: 2, author: "ICMA", title: "ICMA Primary Market Handbook — Allocation and Transparency in the Primary Bond Market", url: "https://www.icmagroup.org/resources/icma-publications/icma-primary-market-handbook/", source: "ICMA, 2024" },
  { id: 3, author: "Federal Reserve Bank of New York", title: "Covered Interest Parity Deviations: Macrofinancial Determinants", url: "https://www.newyorkfed.org/research/staff_reports/sr781", source: "NY Fed Staff Reports, 2017" },
  { id: 4, author: "한국 기획재정부", title: "외국환평형기금채권 발행 현황", url: "https://www.moef.go.kr/mo/mi/misc01.do", source: "기획재정부, 2024" },
  { id: 5, author: "Dealogic", title: "SSA Bond Market Review — Asia-Pacific Sovereign and Agency Issuance", url: "https://www.dealogic.com/insight/dcm-review/", source: "Dealogic, 2024" },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function DcmExecutionClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}${base}/dcm-execution`;
  const prev = DCM_SERIES[thisCh - 1];
  const next = DCM_SERIES[thisCh + 1] ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 시리즈 네비게이션 ─────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={stagger}
          className="flex flex-wrap gap-1.5 mb-8">
          {DCM_SERIES.map((s) => (
            <Link key={s.slug} href={`${base}/${s.slug}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                s.ch === thisCh
                  ? "text-white border-teal-500"
                  : "text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-teal-400 hover:text-teal-600"
              }`}
              style={s.ch === thisCh ? { background: accent } : {}}>
              {s.title(ko)}
            </Link>
          ))}
        </motion.div>

        {/* ── 헤더 ──────────────────────────────────────────────────────── */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest"
              style={{ color: accent }}>DCM · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko ? "국제채 발행 실전: Arb 계산부터 북빌딩까지" : "Bond Execution in Practice: Arb to Book-Building"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "DCM 피치의 핵심은 하나입니다 — \"우리 하우스를 써서 이 통화로 발행하면 USD 직접 발행 대비 Xbp 저렴합니다.\" 그 숫자를 어떻게 계산하는지, 그리고 북빌딩 당일 4시간 동안 신디케이트 데스크에서 어떤 판단이 이루어지는지. 외평채 EUR 발행 케이스로 전 과정을 해부합니다."
              : "The core of every DCM pitch is a single claim: \"Using our house, issuing in this currency saves you Xbp versus direct USD issuance.\" This chapter unpacks exactly how that number is calculated — and what decisions unfold in the 4 hours of bookbuilding on deal day. We walk through the entire process using a Korea sovereign EUR issuance case study."}
          </p>
        </motion.div>

        {/* ── 섹션 1: 왜 이 통화인가 ────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 왜 이 통화인가 — Arb의 전체 구조" : "1. Why This Currency — The Full Arb Structure"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "발행사는 JPY로 발행하든 EUR로 발행하든 결국 USD 자금이 필요합니다. 모든 통화 발행의 실질 비용을 USD(SOFR 기준)로 환산해서 비교하는 것이 Arb 계산의 출발점입니다."
              : "Whether issuing in JPY or EUR, the issuer ultimately needs USD-equivalent funding. Converting every currency's all-in cost back to USD (SOFR basis) is the starting point of arb calculation."}
          </p>

          {/* Arb 비교 테이블 */}
          <div className="space-y-3 mb-8">
            {ARB_TABLE.map((row) => (
              <motion.div key={row.market(true)} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}
                className={`rounded-xl border p-4 ${row.color} ${row.border}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2 sm:w-52 shrink-0">
                    <span className="text-lg">{row.flag}</span>
                    <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{row.market(ko)}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs flex-1">
                    <div>
                      <span className="text-gray-400 dark:text-gray-500 mr-1">{ko ? "발행 스프레드" : "Issue spread"}</span>
                      <span className="font-mono font-bold text-gray-700 dark:text-gray-300">{row.spread}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 dark:text-gray-500 mr-1">CCBS</span>
                      <span className="font-mono font-bold text-gray-700 dark:text-gray-300">
                        {typeof row.ccbsBasis === "function" ? row.ccbsBasis(ko) : row.ccbsBasis}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 dark:text-gray-500 mr-1">{ko ? "USD 환산" : "USD equiv."}</span>
                      <span className="font-mono font-bold text-gray-700 dark:text-gray-300">{row.usdEquiv}</span>
                    </div>
                    <div>
                      <span className={`font-bold text-sm ${row.arbColor}`}>{row.arb(ko)}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 ml-7">{row.note(ko)}</p>
              </motion.div>
            ))}
          </div>

          {/* 베이시스 크기 설명 */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🇯🇵</span>
                <span className="font-bold text-sm text-red-700 dark:text-red-300">{ko ? "사무라이 베이시스가 −50bp인 이유" : "Why Samurai Basis Reaches −50bp"}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "BOJ 제로금리 시대에 일본 국내 채권 수익률이 0%대. 일본 생명보험사·연기금이 수익률을 위해 USD 자산으로 대거 이동 → JPY→USD 헤지 수요 폭발 → USD/JPY CCBS 베이시스 크게 벌어짐. 구조적 불균형이 고착화된 결과."
                  : "With BOJ near-zero rates, domestic bond yields at ~0%. Japanese life insurers and pensions rushed into USD assets for yield → structural surge in JPY→USD hedging demand → USD/JPY CCBS basis widens sharply. A structural imbalance locked in over years."}
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🇹🇼</span>
                <span className="font-bold text-sm text-blue-700 dark:text-blue-300">{ko ? "포모사 Arb는 다르다 — 수요 드리븐" : "Formosa Arb is Different — Demand Driven"}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "포모사는 USD 표시 채권이라 환전 스왑이 없습니다. Arb는 대만 보험사들이 USD 저축보험 대규모 판매로 USD 자산 수요가 구조적으로 초과하기 때문입니다. 스왑 계산 없이 스프레드 자체가 눌리는 구조."
                  : "Formosa bonds are USD-denominated — no FX swap needed. The arb comes purely from structural excess demand: Taiwanese insurers sell large volumes of USD savings products and need USD assets. Spreads compress directly from demand, no swap math required."}
              </p>
            </div>
          </div>

          {/* 뱅커가 매일 아침 보는 것 */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">📱</span>
              <div>
                <p className="font-bold text-sm text-amber-800 dark:text-amber-300 mb-1.5">
                  {ko ? "뱅커가 매일 아침 확인하는 것" : "What Bankers Check Every Morning"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "Bloomberg FXFA 화면 — USD/JPY, EUR/USD, USD/TWD CCBS 실시간 레벨. \"오늘 사무라이 창 열렸다\"는 이 숫자가 전날보다 더 벌어졌다는 뜻. 베이시스는 연말(은행 규제 자본 기간)에 더 벌어지고, 달러 강세 국면에서 더 타이트해집니다. 신디케이트 데스크의 아침 콜은 이 숫자 업데이트로 시작합니다."
                    : "Bloomberg FXFA screen — live USD/JPY, EUR/USD, USD/TWD CCBS levels. \"The Samurai window opened today\" means this number widened from yesterday. The basis widens at year-end (bank regulatory capital period) and tightens in USD-strength phases. Syndicate desk morning calls begin with this update."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 2: CCBS 계산 3단계 ─────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. EUR Arb 계산 3단계 — 실제 스왑 메커니즘" : "2. EUR Arb in 3 Steps — The Actual Swap Mechanics"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "EUR MS+65bp 발행이 어떻게 SOFR+47bp로 변환되는지, 실제 스왑 계약 흐름을 따라가봅니다."
              : "How EUR MS+65bp issuance converts to SOFR+47bp equivalent — following the actual swap contract flow."}
          </p>

          <div className="space-y-3 mb-6">
            {CCBS_STEPS.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.1)}
                className={`rounded-xl border p-4 ${s.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="font-black text-base" style={{ color: accent }}>{s.step}</span>
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{s.title(ko)}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{s.action(ko)}</p>
                    <div className="inline-flex items-center gap-1.5 bg-white/70 dark:bg-black/30 rounded-lg px-3 py-1.5">
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">{ko ? "결과" : "Result"}:</span>
                      <span className="text-xs font-mono font-bold text-gray-800 dark:text-gray-200">{s.result(ko)}</span>
                    </div>
                  </div>
                </div>
                {i < CCBS_STEPS.length - 1 && (
                  <div className="text-center mt-3 text-gray-400 dark:text-gray-600 text-lg">↓</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* 최종 결론 박스 */}
          <div className="rounded-xl border-2 border-teal-400 dark:border-teal-600 bg-teal-50 dark:bg-teal-900/20 p-5">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "USD 직접 발행" : "USD Direct"}</p>
                <p className="font-black text-xl text-gray-700 dark:text-gray-300 font-mono">SOFR + 80bp</p>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <p className="text-2xl">→</p>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-bold">{ko ? "EUR 발행 후" : "EUR issuance"}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "EUR → USD 환산" : "EUR → USD"}</p>
                <p className="font-black text-xl text-teal-600 dark:text-teal-400 font-mono">SOFR + 47bp</p>
              </div>
            </div>
            <div className="border-t border-teal-200 dark:border-teal-800 mt-4 pt-4 text-center">
              <p className="font-black text-2xl" style={{ color: accent }}>
                {ko ? "→ 33bp Arb 절감" : "→ 33bp Arb Saving"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {ko ? "EUR 500mn 발행 기준 연간 약 EUR 1.65mn 절감" : "EUR 500mn deal = approx. EUR 1.65mn annual saving"}
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 3: Bloomberg Comps → IPT ──────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. Bloomberg Comps → IPT 도출" : "3. Bloomberg Comps → IPT Construction"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "피치북의 핵심 한 장은 Bloomberg 세컨더리 레벨 comps 테이블입니다. 이 숫자들이 IPT의 근거가 됩니다. 어떤 comp을 넣고 빼느냐에 따라 IPT가 5–8bp 달라지고, 발행사 IR팀은 즉시 반박할 준비가 되어 있습니다."
              : "The core page of any pitchbook is the Bloomberg secondary comps table. These numbers are the evidence base for IPT. Which comps to include or exclude can shift IPT by 5–8bp — and the issuer's IR team is ready to challenge every choice."}
          </p>

          {/* Comps 테이블 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    <th className="text-left px-4 py-3">{ko ? "발행사" : "Issuer"}</th>
                    <th className="text-left px-4 py-3">{ko ? "등급" : "Rating"}</th>
                    <th className="text-left px-4 py-3">{ko ? "만기" : "Tenor"}</th>
                    <th className="text-right px-4 py-3">{ko ? "ASW 스프레드" : "ASW Spread"}</th>
                    <th className="text-left px-4 py-3 hidden sm:table-cell">{ko ? "비고" : "Note"}</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPS_TABLE.map((row, i) => {
                    const isKorean = row.country === "🇰🇷";
                    const isTarget = row.issuer === "KoreaFinance";
                    return (
                      <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${isTarget ? "bg-teal-50 dark:bg-teal-900/20" : ""}`}>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span>{row.country}</span>
                            <span className={`font-semibold ${isTarget ? "text-teal-700 dark:text-teal-300" : "text-gray-800 dark:text-gray-200"}`}>
                              {row.issuer}
                              {isTarget && <span className="ml-1 text-[10px] font-bold text-teal-600 dark:text-teal-400 border border-teal-400 rounded px-1">{ko ? "발행사" : "Issuer"}</span>}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                            row.rating === "AAA" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                            row.rating === "AA" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                            "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                          }`}>{row.rating}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-mono text-xs">{row.tenor}</td>
                        <td className="px-4 py-3 text-right">
                          <span className={`font-mono font-bold text-sm ${isKorean ? "text-rose-600 dark:text-rose-400" : "text-gray-700 dark:text-gray-300"}`}>
                            ASW +{row.aswBp}bp
                          </span>
                        </td>
                        <td className="px-4 py-3 text-[11px] text-gray-500 dark:text-gray-400 hidden sm:table-cell">{row.note(ko)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* IPT 도출 로직 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5 mb-4">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{ko ? "IPT 도출 과정" : "IPT Construction Logic"}</p>
            <div className="space-y-3">
              {[
                { step: ko ? "① KEXIM·KDB 평균 세컨더리" : "① KEXIM·KDB Average Secondary", value: "ASW +63bp", color: "text-rose-600 dark:text-rose-400" },
                { step: ko ? "② 소버린 프리미엄 차감 (AA vs AA−, 한 노치)" : "② Sovereign premium (AA vs AA−, one notch)", value: "−12bp", color: "text-emerald-600 dark:text-emerald-400" },
                { step: ko ? "③ 페어밸류 추정" : "③ Fair Value Estimate", value: "ASW +51bp", color: "text-blue-600 dark:text-blue-400" },
                { step: ko ? "④ NIC 가산 (IG 소버린 통상 10–15bp)" : "④ New Issue Concession (IG sovereign: 10–15bp)", value: "+14bp", color: "text-amber-600 dark:text-amber-400" },
                { step: ko ? "⑤ IPT 결정" : "⑤ IPT Set", value: "ASW +65bp area", color: "text-teal-600 dark:text-teal-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.step}</span>
                  <span className={`font-mono font-bold text-sm ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 뱅커 노트 */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 px-4 py-3">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-1.5">💡 {ko ? "실무 포인트" : "Practitioner's Note"}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "피치하는 은행마다 Comps 선정이 다릅니다. A은행은 KEXIM 세컨더리를 넣고, B은행은 CADES와 비교합니다. 어느 comp을 쓰느냐에 따라 페어밸류가 5–8bp 달라지고 IPT가 달라집니다. 발행사 IR팀은 \"왜 이 comp은 안 넣었냐\"고 즉시 반박합니다. 이것이 뱅커들이 같은 딜에 대해 다른 IPT 숫자를 내놓는 이유입니다 — 단순한 계산 오류가 아니라 comp 선택의 차이입니다."
                : "Every bank pitching selects different comps. Bank A uses KEXIM secondary; Bank B benchmarks against CADES. The choice shifts fair value by 5–8bp and changes the IPT. The issuer's IR team will immediately challenge: \"Why didn't you include this comp?\" This is why banks present different IPT numbers for the same deal — not calculation errors, but deliberate comp selection differences."}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 4: 북빌딩 4시간 ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 북빌딩 4시간 — 신디케이트 데스크의 실시간 판단" : "4. Bookbuilding: 4 Hours of Real-Time Decisions"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "IPT 발표부터 Final Price 확정까지, 신디케이트 데스크는 오더북의 양과 질을 동시에 평가하며 타이트닝 여부와 폭을 결정합니다. 이 4시간이 발행사의 수십억 원 비용을 좌우합니다."
              : "From IPT announcement to final pricing, the syndicate desk simultaneously evaluates book quantity and quality to decide whether — and by how much — to tighten. These 4 hours determine billions in issuer funding cost."}
          </p>

          {/* 타임라인 */}
          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {BOOK_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0 hidden sm:flex">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-black text-base font-mono" style={{ color: accent }}>{item.time}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                        {item.book !== "—" && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                            {ko ? "북" : "Book"}: <span className="font-bold text-gray-700 dark:text-gray-300">{item.book}</span>
                          </span>
                        )}
                        {(() => {
                          const cov = typeof item.coverage === "function" ? item.coverage(ko) : item.coverage;
                          return cov !== "—" ? (
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                              {ko ? "커버" : "Cover"}: <span className="font-bold text-gray-700 dark:text-gray-300">{cov}</span>
                            </span>
                          ) : null;
                        })()}
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{item.decision(ko)}</p>
                      {item.tighten && (
                        <div className="inline-flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-lg px-3 py-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wide">{ko ? "결정" : "Decision"}</span>
                          <span className="text-xs font-mono font-bold">{item.tighten}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 타이트닝 경험칙 */}
          <div className="mt-8">
            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">{ko ? "커버리지별 타이트닝 경험칙" : "Tightening Guidelines by Coverage"}</p>
            <div className="space-y-2">
              {TIGHTENING_GUIDE.map((g, i) => (
                <div key={i} className={`rounded-lg px-4 py-2.5 flex items-center justify-between ${g.color}`}>
                  <span className="font-mono font-bold text-sm">{g.coverage}</span>
                  <span className="text-sm font-medium">{g.tighten(ko)}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {ko ? "* 경험칙이며, 북 질(Real money 비중)에 따라 판단 달라짐" : "* Rule of thumb; actual judgment depends on book quality (real money share)"}
            </p>
          </div>
        </motion.section>

        {/* ── 섹션 5: 오더북 해부 ─────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 오더북 해부 — Real Money vs. Fast Money" : "5. Order Book Anatomy — Real Money vs. Fast Money"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "오더북 3.6×가 모두 같은 가치를 가지는 게 아닙니다. 중앙은행 EUR 400mn과 헤지펀드 EUR 400mn은 완전히 다른 의미입니다. 배분 전략은 이 질적 차이를 반영합니다."
              : "3.6× coverage doesn't mean all orders are equal. EUR 400mn from central banks and EUR 400mn from hedge funds have entirely different implications. Allocation strategy reflects this quality difference."}
          </p>

          {/* 오더북 바 */}
          <div className="space-y-4 mb-8">
            {ORDER_BOOK.map((inv, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border border-gray-100 dark:border-gray-800 p-4 ${inv.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0 mt-0.5">{inv.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{inv.type(ko)}</span>
                        <span className="text-[10px] text-gray-400">({inv.count}{ko ? "곳" : " accts"})</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <span className="text-gray-500">{ko ? "오더" : "Ordered"}: <span className="font-bold text-gray-700 dark:text-gray-300">€{inv.ordered}mn</span></span>
                        <span className="text-gray-500">{ko ? "배분" : "Got"}: <span className="font-bold text-gray-700 dark:text-gray-300">€{inv.allocated}mn</span></span>
                        <span className={`font-bold ${inv.allocationRate >= 80 ? "text-emerald-600 dark:text-emerald-400" : inv.allocationRate >= 50 ? "text-blue-600 dark:text-blue-400" : "text-rose-600 dark:text-rose-400"}`}>
                          {inv.allocationRate}%
                        </span>
                      </div>
                    </div>
                    {/* 배분율 바 */}
                    <div className="w-full bg-white/60 dark:bg-black/20 rounded-full h-1.5 mb-2">
                      <div className={`h-1.5 rounded-full ${inv.barColor}`} style={{ width: `${inv.allocationRate}%` }} />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{inv.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 배분 원칙 요약 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">{ko ? "배분 4원칙" : "4 Allocation Principles"}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { num: "①", title: ko ? "Real money 최우선" : "Real money first", desc: ko ? "중앙은행·보험사는 절대 안 팜 → 세컨더리 안정 → 다음 딜 신뢰 유지" : "Central banks & insurers never sell → secondary stability → next deal trust" },
                { num: "②", title: ko ? "지역 분산" : "Geographic spread", desc: ko ? "아시아/유럽/중동 골고루 → IR 목적 + 지역별 앵커 확보" : "Asia/Europe/Middle East mix → IR purpose + regional anchor building" },
                { num: "③", title: ko ? "Fast money 삭감" : "Haircut fast money", desc: ko ? "헤지펀드 오더의 30% 수준만 배분 → 세컨더리 매도 압력 최소화" : "Allocate ~30% of HF orders → minimize secondary selling pressure" },
                { num: "④", title: ko ? "충성도 보상" : "Reward loyalty", desc: ko ? "지난 딜에서 꾸준히 오더 넣은 계정 → 이번 딜 좋은 배분으로 관계 강화" : "Accounts that consistently ordered in past deals → strong allocation this time" },
              ].map((p, i) => (
                <div key={i} className="flex gap-3">
                  <span className="font-black text-lg shrink-0" style={{ color: accent }}>{p.num}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 6: 세컨더리 퍼포먼스 & IR 목적 ──────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "6. 세컨더리 퍼포먼스 — 발행의 끝이 아니라 다음 딜의 시작" : "6. Secondary Performance — Not the End, the Start of the Next Deal"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "채권이 발행된 후 세컨더리에서 어떻게 거래되느냐가 다음 딜의 NIC, 커버리지, 투자자 참여에 직접 영향을 줍니다."
              : "How a bond trades in the secondary market after issuance directly affects the NIC, coverage, and investor participation of the next deal."}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                label: ko ? "성공 기준" : "Success",
                condition: ko ? "세컨더리 ASW +55bp 내외" : "Secondary ~ASW +55bp",
                meaning: ko ? "발행가 대비 2bp tight → 투자자 수익 → 다음 딜 오더 유지" : "+2bp vs. issue price → investor profit → stable next deal orders",
                color: "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20",
                icon: "✅",
              },
              {
                label: ko ? "주의 구간" : "Caution",
                condition: ko ? "세컨더리 ASW +58~60bp (발행가 수준)" : "Secondary ~ASW +58–60bp (flat)",
                meaning: ko ? "투자자 손익 0 → 다음 딜 NIC 요구 증가 가능성" : "Investor P&L near zero → potential NIC demand next time",
                color: "border-amber-300 bg-amber-50 dark:bg-amber-900/20",
                icon: "⚠️",
              },
              {
                label: ko ? "실패 (Break)" : "Failure (Break)",
                condition: ko ? "세컨더리 ASW +63bp+ (발행가 아래)" : "Secondary ASW +63bp+ (below issue)",
                meaning: ko ? "투자자 손실 → 다음 딜 NIC 대폭 상승, 커버리지 감소, 뱅커 평판 손상" : "Investor loss → much higher NIC, lower coverage, banker reputation damage",
                color: "border-rose-300 bg-rose-50 dark:bg-rose-900/20",
                icon: "❌",
              },
            ].map((s, i) => (
              <div key={i} className={`rounded-xl border p-4 ${s.color}`}>
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1">{s.label}</p>
                <p className="text-xs font-mono text-gray-700 dark:text-gray-300 mb-2">{s.condition}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{s.meaning}</p>
              </div>
            ))}
          </div>

          {/* IR 목적 박스 */}
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🌐</span>
              <div>
                <p className="font-bold text-sm text-indigo-800 dark:text-indigo-300 mb-2">
                  {ko ? "왜 비싸게 발행하기도 하는가 — IR Building 목적" : "Why Issue Even at Expensive Terms — IR Building"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {ko
                    ? "외평채가 Samurai나 Formosa 시장에서 발행하는 이유가 단순 자금 조달이 아닙니다. \"대만 중앙은행이 우리 채권을 들고 있다\"는 사실 자체가 자산입니다. 오래 그 시장에 안 나오면 다음에 NIC를 더 줘야 합니다. 특히 연간 발행 프로그램이 있는 소버린·agency에게 투자자 베이스 다각화는 비용 효율성과 별개로 전략적 목표입니다. Arb 창이 닫혀도 IR 목적의 발행은 정당화됩니다."
                    : "Korea's motivation to issue in Samurai or Formosa isn't purely about cheap funding. The fact that \"the Taiwan central bank holds our bonds\" is itself a strategic asset. Long absences from a market mean higher NIC on return. For sovereigns and agencies with annual issuance programs, diversifying the investor base is a strategic objective independent of cost efficiency. IR-motivated issuance is justified even with no arb window."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 섹션 7: 피치 한 장 — 발행사에게 보여주는 것 ──────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "7. 피치 한 장 — 발행사에게 실제로 보여주는 것" : "7. The Pitch Page — What You Actually Show the Issuer"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {ko
              ? "모든 복잡한 계산이 결국 발행사 재무팀에게 전달되는 한 장의 요약으로 압축됩니다. 아래는 외평채 담당자가 받게 되는 피치의 핵심 구조입니다."
              : "All the complex calculations compress into one summary page shown to the issuer's treasury team. Below is the core structure of the pitch a 외평채 officer would receive."}
          </p>

          <div className="rounded-xl border-2 border-teal-300 dark:border-teal-700 bg-white dark:bg-gray-900 p-6">
            <div className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-5">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "신디케이트 데스크 마켓 업데이트" : "Syndicate Desk Market Update"}
              </p>
              <p className="font-black text-base text-gray-900 dark:text-gray-50">
                {ko ? "한국 기획재정부 EUR 5년물 — 발행 타이밍 분석" : "Korea MOEF EUR 5Y — Issuance Timing Analysis"}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{ko ? "기준일: 2023년 11월" : "Reference date: November 2023"}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-5">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">{ko ? "현재 마켓 컨디션" : "Current Market Conditions"}</p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "EUR/USD CCBS 5Y", value: "−18bp", change: ko ? "(2주 전 −12bp → 창 넓어짐)" : "(2 weeks ago −12bp → window widened)", positive: true },
                    { label: ko ? "EUR IG 세컨더리" : "EUR IG Secondary", value: ko ? "강세" : "Strong", change: ko ? "CADES 최근 발행 2.8× 커버" : "CADES recent deal 2.8× covered", positive: true },
                    { label: ko ? "KEXIM EUR 5Y" : "KEXIM EUR 5Y", value: "ASW +62bp", change: ko ? "2주 전 +65bp (타이트닝)" : "2 weeks ago +65bp (tightening)", positive: true },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-2">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{item.label}</span>
                      <div className="text-right">
                        <span className={`font-mono font-bold text-sm ${item.positive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>{item.value}</span>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500">{item.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">{ko ? "예상 발행 조건" : "Expected Deal Terms"}</p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "IPT", value: "ASW +65bp area" },
                    { label: ko ? "예상 Final" : "Expected Final", value: "ASW +57–60bp" },
                    { label: ko ? "예상 커버리지" : "Expected Coverage", value: "3–4×" },
                    { label: ko ? "권장 규모" : "Recommended Size", value: "EUR 500–750mn" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{item.label}</span>
                      <span className="font-mono font-bold text-sm text-gray-800 dark:text-gray-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-teal-400 dark:border-teal-600 bg-teal-50 dark:bg-teal-900/30 p-4">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "USD 직접 발행" : "USD Direct"}</p>
                  <p className="font-black text-xl font-mono text-gray-700 dark:text-gray-300">SOFR +75bp</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl text-teal-500">→</p>
                  <p className="text-xs font-bold text-teal-600 dark:text-teal-400">{ko ? "EUR 발행 후 USD 스왑" : "EUR + USD swap"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "EUR → USD 환산" : "EUR → USD Equiv."}</p>
                  <p className="font-black text-xl font-mono text-teal-600 dark:text-teal-400">SOFR +47bp</p>
                </div>
              </div>
              <div className="mt-4 text-center border-t border-teal-200 dark:border-teal-800 pt-4">
                <p className="font-black text-2xl" style={{ color: accent }}>28bp Arb</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {ko ? "EUR 500mn 기준 → 연간 약 EUR 1.4mn 절감" : "EUR 500mn deal → approx. EUR 1.4mn annual saving"}
                </p>
                <p className="text-sm font-bold text-teal-700 dark:text-teal-300 mt-2">
                  {ko ? "→ 현재 EUR 창 열려 있음. 2주 내 발행 권고" : "→ EUR window currently open. Recommend issuance within 2 weeks."}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion
            items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))}
            accent={accent}
          />
        </motion.section>

        {/* ── 참고자료 ──────────────────────────────────────────────────────── */}
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
                    className="underline decoration-dotted hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {s.title}
                  </a>
                  <span className="text-gray-400 dark:text-gray-500 ml-1">— {s.source}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* ── 공유 버튼 ─────────────────────────────────────────────────────── */}
        <ShareButtons
          title={ko ? "DCM Ch.8 — 국제채 발행 실전: Arb 계산부터 북빌딩까지 | Deal Story" : "DCM Ch.8 — Bond Execution in Practice | Deal Story"}
          lang={lang}
        />

        {/* ── Prev / Next 네비게이션 ────────────────────────────────────────── */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <span>←</span>
              <span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <span>{next.title(ko)}</span>
              <span>→</span>
            </Link>
          ) : <div />}
        </div>

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("dcm-execution");
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
