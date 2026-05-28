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

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const accent = "#14b8a6";

const DCM_SERIES = [
  { slug: "dcm-overview",              ch: 0,  title: (ko: boolean) => ko ? "DCM 개요"          : "DCM Overview"       },
  { slug: "dcm-issuers",               ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"        : "Ch.1 Issuers"       },
  { slug: "dcm-investors",             ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"        : "Ch.2 Investors"     },
  { slug: "dcm-bond-products",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 상품"          : "Ch.3 Products"      },
  { slug: "dcm-international-markets", ch: 4,  title: (ko: boolean) => ko ? "Ch.4 국제채"        : "Ch.4 Intl"          },
  { slug: "dcm-deal-process",          ch: 5,  title: (ko: boolean) => ko ? "Ch.5 딜 프로세스"   : "Ch.5 Process"       },
  { slug: "dcm-pricing",               ch: 6,  title: (ko: boolean) => ko ? "Ch.6 프라이싱"      : "Ch.6 Pricing"       },
  { slug: "dcm-structure-regulation",  ch: 7,  title: (ko: boolean) => ko ? "Ch.7 구조·제도"     : "Ch.7 Regulation"    },
  { slug: "dcm-execution",             ch: 8,  title: (ko: boolean) => ko ? "Ch.8 실전 발행"     : "Ch.8 Execution"     },
  { slug: "dcm-liability-management",  ch: 9,  title: (ko: boolean) => ko ? "Ch.9 부채관리"      : "Ch.9 LM"            },
  { slug: "dcm-esg-green-bond",        ch: 10, title: (ko: boolean) => ko ? "Ch.10 ESG·녹색채권" : "Ch.10 ESG"          },
];
const thisCh = 9;

const LM_TYPES = [
  {
    type: (ko: boolean) => ko ? "캐시 텐더 오퍼 (Cash Tender Offer)" : "Cash Tender Offer",
    icon: "💵",
    desc: (ko: boolean) => ko
      ? "발행사가 기존 채권을 현금으로 매입. 보통 시장가 대비 1–3% 프리미엄 지급. 투자자는 응찰 여부 선택."
      : "Issuer buys back existing bonds for cash, typically at 1–3% premium to market. Investors choose whether to tender.",
    whenUsed: (ko: boolean) => ko
      ? "금리 하락 국면에서 고쿠폰 채권 조기 소각. 자본구조 단순화."
      : "Retire high-coupon bonds in falling rate environment. Simplify capital structure.",
    color: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    type: (ko: boolean) => ko ? "익스체인지 오퍼 (Exchange Offer)" : "Exchange Offer",
    icon: "🔄",
    desc: (ko: boolean) => ko
      ? "기존 채권을 현금 대신 새 채권으로 교환. 현금 유출 없이 만기 연장 또는 쿠폰 재조정 가능."
      : "Swap existing bonds for new bonds instead of cash. Extends maturity or resets coupon without cash outflow.",
    whenUsed: (ko: boolean) => ko
      ? "유동성 부족 시 현금 없이 재무구조 개선. 또는 만기 집중 분산."
      : "Improve balance sheet without cash when liquidity is tight. Spread out maturity concentration.",
    color: "border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    type: (ko: boolean) => ko ? "메이크홀 콜 (Make-Whole Call)" : "Make-Whole Call",
    icon: "📐",
    desc: (ko: boolean) => ko
      ? "채권 약관에 내장된 조기 상환 옵션. 남은 현금흐름을 국채금리 + 스프레드(통상 25–50bp)로 할인한 NPV로 상환."
      : "Embedded early redemption option. Redeems at NPV of remaining cash flows discounted at Treasury + spread (usually 25–50bp).",
    whenUsed: (ko: boolean) => ko
      ? "금리 급락 시 발행사가 행사. 금리 낮을수록 할인율 낮아져 콜 가격 높음 → 실제 행사 비용 큼."
      : "Exercised when rates fall sharply. Lower rates = lower discount = higher call price → expensive to exercise in practice.",
    color: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
  {
    type: (ko: boolean) => ko ? "파 콜 (Par Call)" : "Par Call",
    icon: "📅",
    desc: (ko: boolean) => ko
      ? "약관에 명시된 특정 날짜에 액면가(100)로 조기 상환. Make-Whole 대비 훨씬 단순. HY 채권에 흔함."
      : "Redeem at par (100) on specified call dates in the indenture. Much simpler than Make-Whole. Common in HY bonds.",
    whenUsed: (ko: boolean) => ko
      ? "미리 설정된 콜 일정에 따라 금리 여건이 유리하면 행사. IG보다 HY에서 더 일반적."
      : "Exercised when rates are favorable on pre-set call schedule. More common in HY than IG.",
    color: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    type: (ko: boolean) => ko ? "동의 요청 (Consent Solicitation)" : "Consent Solicitation",
    icon: "🗳️",
    desc: (ko: boolean) => ko
      ? "채권 자체를 매입하지 않고 약관(코버넌트) 수정만 투자자 동의 받음. 통상 채권 액면가의 0.1–0.3% 동의 대가 지급."
      : "Modify bond covenants without retiring the debt — just get investor consent. Usually pays 0.1–0.3% of face value as consent fee.",
    whenUsed: (ko: boolean) => ko
      ? "M&A 이후 코버넌트 완화 필요 시. 또는 교차 부도 조항 제거. 채권 자체는 유지."
      : "Loosen covenants after M&A. Remove cross-default provisions. Bond itself stays outstanding.",
    color: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/40",
    badge: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
  },
  {
    type: (ko: boolean) => ko ? "부실 익스체인지 (Distressed Exchange)" : "Distressed Exchange",
    icon: "⚠️",
    desc: (ko: boolean) => ko
      ? "부도 직전 발행사가 투자자에게 헤어컷(원금 감축)을 수용하는 교환 제안. 표면상 자발적이지만 실질적으로 디폴트 회피 압력."
      : "Near-default issuer proposes exchange with haircut (principal reduction). Technically voluntary but effectively coercive.",
    whenUsed: (ko: boolean) => ko
      ? "기업 구조조정·HY 위기 상황. IG 발행사에게는 극히 드묾. 신용등급 CCC–B 범위."
      : "Corporate restructuring, HY crisis situations. Extremely rare for IG issuers. Typical for CCC–B rated credits.",
    color: "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
];

const TENDER_TIMELINE = [
  {
    day: "Day 0",
    event: (ko: boolean) => ko ? "공시 · IPT 동시 발표" : "Announcement + New Issue IPT",
    detail: (ko: boolean) => ko
      ? "텐더 오퍼 공시와 동시에 신규 채권 IPT 발표. 'Any and All' 또는 최대 매입 금액 명시. 텐더 프리미엄 공표."
      : "Tender offer announced simultaneously with new bond IPT. State 'Any and All' or maximum buyback amount. Tender premium disclosed.",
    color: "bg-gray-50 dark:bg-gray-800/40 border-gray-300",
    dot: "bg-gray-400",
  },
  {
    day: "Day 1–5",
    event: (ko: boolean) => ko ? "텐더 기간 · 신규 발행 북빌딩" : "Tender Period + New Issue Bookbuild",
    detail: (ko: boolean) => ko
      ? "투자자들이 텐더 응찰 여부 결정. 동시에 신규 채권 오더북 열림. 두 딜이 병렬 진행."
      : "Investors decide whether to tender. Simultaneously, new bond order book opens. Two deals run in parallel.",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-300",
    dot: "bg-blue-400",
  },
  {
    day: "Day 5",
    event: (ko: boolean) => ko ? "신규 발행 확정 · 텐더 마감" : "New Issue Priced + Tender Deadline",
    detail: (ko: boolean) => ko
      ? "신규 채권 Final Price 확정. 텐더 응찰 마감. 이 시점에 전체 LME 규모 확정."
      : "New bond final pricing locked. Tender deadline. Total LME size confirmed at this point.",
    color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300",
    dot: "bg-emerald-500",
  },
  {
    day: "Day 7–10",
    event: (ko: boolean) => ko ? "텐더 결제 · 신규 채권 결제" : "Tender Settlement + New Bond Settlement",
    detail: (ko: boolean) => ko
      ? "텐더 응찰 채권 소각. 신규 채권 발행 자금 수령. 이자 수반(응찰일까지 발생이자 포함 지급)."
      : "Tendered bonds cancelled. New bond proceeds received. Accrued interest paid on tendered bonds to settlement date.",
    color: "bg-teal-50 dark:bg-teal-900/20 border-teal-300",
    dot: "bg-teal-500",
  },
];

const ECONOMICS_CASE = {
  existingBond: { coupon: 4.5, maturity: "2024년 6월", outstanding: 500, price: 102.5 },
  newBond: { coupon: 2.1, maturity: "2028년 6월", size: 600 },
  tenderPremium: 2.5,
  dealerFee: 0.15,
  annualSaving: 2.4,
  npvSaving: 9.6,
};

const MAKE_WHOLE_EXAMPLE = [
  { scenario: (ko: boolean) => ko ? "금리 상승 후 (5Y UST = 4.5%)" : "Post rate rise (5Y UST = 4.5%)", treasury: 4.5, makeWholeSpr: 0.25, discountRate: 4.75, callPrice: 96.2, note: (ko: boolean) => ko ? "시장가 아래 → 사실상 콜 불가" : "Below market → effectively non-callable" },
  { scenario: (ko: boolean) => ko ? "금리 하락 후 (5Y UST = 0.5%)" : "Post rate drop (5Y UST = 0.5%)", treasury: 0.5, makeWholeSpr: 0.25, discountRate: 0.75, callPrice: 118.4, note: (ko: boolean) => ko ? "시장가 위 → 발행사 손해. 실제 콜 없음" : "Above market → issuer overpays. Rarely exercised" },
  { scenario: (ko: boolean) => ko ? "Par Call 일정 도래 시" : "Par Call schedule date", treasury: 0, makeWholeSpr: 0, discountRate: 0, callPrice: 100.0, note: (ko: boolean) => ko ? "100에 상환 — 단순명쾌" : "Redeem at 100 — straightforward" },
];

const WHY_LME = [
  {
    reason: (ko: boolean) => ko ? "만기 절벽 회피 (Maturity Wall)" : "Avoid Maturity Wall",
    icon: "🧱",
    desc: (ko: boolean) => ko
      ? "2년 내 만기 채권이 누적되면 재금융 위험이 집중됩니다. 시장이 닫히는 순간 유동성 위기로 직결. 미리 만기를 연장해 리파이낸싱 리스크를 분산."
      : "Concentrated near-term maturities create refinancing cliffs. A market closure becomes a liquidity crisis instantly. Early LME spreads that risk over time.",
  },
  {
    reason: (ko: boolean) => ko ? "금리 절감 (Interest Saving)" : "Interest Cost Reduction",
    icon: "📉",
    desc: (ko: boolean) => ko
      ? "고쿠폰 채권이 시장보다 비쌀 때 낮은 금리로 교체. 텐더 프리미엄과 딜러 수수료를 제하고도 NPV 기준 절감이 발생하면 합리적."
      : "Replace above-market coupon bonds at lower current rates. Justified when NPV interest saving exceeds tender premium plus dealer fees.",
  },
  {
    reason: (ko: boolean) => ko ? "코버넌트 정리" : "Covenant Cleanup",
    icon: "📋",
    desc: (ko: boolean) => ko
      ? "M&A 후 인수 대상 채권의 제한적 코버넌트(자산매각 금지, 추가 부채 한도 등) 제거. 익스체인지 오퍼 또는 동의 요청으로 해결."
      : "Post-M&A, remove restrictive covenants (asset sale restrictions, debt incurrence limits) from acquired bonds via exchange offer or consent solicitation.",
  },
  {
    reason: (ko: boolean) => ko ? "신용등급 관리" : "Credit Rating Management",
    icon: "🏆",
    desc: (ko: boolean) => ko
      ? "단기 부채를 장기로 전환하면 레버리지 비율 개선, 유동성 커버리지 비율(LCR) 개선. 등급 상향 트리거 충족 가능."
      : "Converting short-term to long-term debt improves leverage ratios and liquidity coverage. Can trigger rating upgrade thresholds.",
  },
];

const FAQS = [
  {
    q: (ko: boolean) => ko
      ? "텐더 오퍼 참여가 강제인가요? 거부하면 어떻게 되나요?"
      : "Is tendering mandatory? What happens if you refuse?",
    a: (ko: boolean) => ko
      ? "법적으로는 자발적입니다. 거부한 투자자는 기존 채권을 그대로 보유합니다. 단, 만기까지 홀드하면 됩니다. 실무상 IG 텐더에서는 보통 70–90% 참여율이 나옵니다. 만약 '어떤 경우든 전액 매입(Any and All)' 조건이라면 응찰된 양 전부 매입, 최대 금액 조건이라면 초과 시 비례 배분(pro-rata). 텐더 후 잔여 채권은 유동성이 떨어져 세컨더리 가격이 약해지는 경향이 있어, 사실상 참여 인센티브가 있습니다."
      : "Legally voluntary. Non-tendering investors keep their bonds and hold to maturity. Practically, IG tender offers see 70–90% participation. Under 'Any and All' terms, all tendered bonds are bought; under maximum amount terms, excess is pro-rated. Remaining bonds after tender typically suffer reduced liquidity and softer secondary prices — creating de facto incentive to participate.",
  },
  {
    q: (ko: boolean) => ko
      ? "텐더 오퍼와 신규 발행을 동시에 하는 이유가 뭔가요?"
      : "Why run a tender offer and new issuance simultaneously?",
    a: (ko: boolean) => ko
      ? "세 가지 이유입니다. ① 자금 조달 목적: 텐더에 쓸 현금을 신규 발행으로 조달합니다. 신규 발행이 먼저 가격 확정되어야 텐더 재원이 확보됩니다. ② 시장 위험 최소화: 두 딜 사이 금리가 급변하면 LME 비용이 달라집니다. 동시 진행으로 금리 리스크를 헤지합니다. ③ 투자자 신호: \"우리는 만기를 앞두고도 시장 접근 가능\"이라는 신뢰 신호."
      : "Three reasons. ① Funding: new issue proceeds fund the cash tender. New bond must price first to secure the cash. ② Market risk: rate moves between the two deals change LME economics. Simultaneous execution hedges this. ③ Investor signaling: demonstrates market access even with near-term maturities.",
  },
  {
    q: (ko: boolean) => ko
      ? "Make-Whole Call이 있으면 투자자에게 불리한 건가요?"
      : "Is a Make-Whole Call provision unfavorable to investors?",
    a: (ko: boolean) => ko
      ? "표면상 불리해 보이지만 실제로는 투자자 보호 장치입니다. Make-Whole 계산 방식에 따르면 금리 하락 시 콜 가격이 시장가보다 높아져 발행사가 콜을 행사하기 어렵습니다(비용이 너무 큽니다). 반면 금리 상승 시에는 콜 가격이 액면가 아래라 역시 콜이 없습니다. 결과적으로 투자자는 금리 방향 어느 쪽이든 보유 채권 가치를 보호받습니다. 단, HY의 Par Call은 투자자에게 불리합니다 — 금리 하락해 채권 가격이 올라도 발행사가 100에 콜."
      : "Superficially unfavorable but actually investor-protective. When rates fall, the Make-Whole price exceeds market (making the call prohibitively expensive for the issuer). When rates rise, the call price is below par — again no call. Investors are protected in both rate directions. Par Call in HY is genuinely unfavorable — when rates fall and prices rise, issuer calls at 100.",
  },
  {
    q: (ko: boolean) => ko
      ? "LME에서 딜러(뱅크)의 역할과 수수료는 어떻게 되나요?"
      : "What is the dealer's role and fee in an LME?",
    a: (ko: boolean) => ko
      ? "딜러-매니저(통상 2–4개 은행)가 ① 텐더 조건 구조화, ② 투자자 연락 및 설득, ③ 응찰 수집, ④ 신규 발행 북빌딩 동시 진행을 담당합니다. 수수료는 두 파트입니다. 텐더 딜러 수수료: 매입 원금의 0.10–0.25% (텐더 규모에 따라 협상). 신규 발행 언더라이팅 수수료: 발행액의 0.20–0.50% (만기, 발행사 등급에 따라 달라짐). LME 전체 비용 중 딜러 수수료가 차지하는 비중은 상대적으로 작고, 텐더 프리미엄이 가장 큰 항목입니다."
      : "Dealer-managers (typically 2–4 banks) structure the tender terms, contact and solicit investors, collect tenders, and simultaneously run the new issuance bookbuild. Fees have two components: tender dealer fee at 0.10–0.25% of principal bought (negotiated by size); new issuance underwriting fee at 0.20–0.50% of issuance (varies by tenor and issuer rating). The tender premium is the largest LME cost component — dealer fees are relatively minor.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 발행사(외평채·KDB·KEXIM)가 LME를 하는 경우는 어떤 때인가요?"
      : "When do Korean issuers (KTB, KDB, KEXIM) conduct LME?",
    a: (ko: boolean) => ko
      ? "크게 세 가지 상황입니다. ① 만기 집중 해소: USD 발행이 특정 연도에 집중될 때 사전 텐더로 분산. ② 금리 환경 활용: 2020–2021년 초저금리 때 고쿠폰 달러채를 텐더하고 새로 낮은 금리로 차환. ③ 인수합병 후 구조 정리: 드물지만 자회사 채권 코버넌트 정리 목적. 한국 소버린·에이전시는 통상 IG AA 등급이라 Distressed Exchange는 없고, 주로 'Tender + New Issue' 조합을 씁니다."
      : "Three main scenarios. ① Maturity deconcentration: pre-tender when USD maturities bunch in a single year. ② Rate environment: during 2020–2021 ultra-low rates, tendered high-coupon USD bonds and refinanced lower. ③ Post-acquisition cleanup: rare, for subsidiary bond covenant removal. As IG AA issuers, Korean sovereign/agency never does Distressed Exchange — standard approach is 'Tender + New Issue.'",
  },
];

const SOURCES = [
  { id: 1, author: "ICMA", title: "ICMA Liability Management Practices", url: "https://www.icmagroup.org/market-practice-and-regulatory-policy/primary-markets/liability-management/", source: "ICMA, 2023" },
  { id: 2, author: "Moody's", title: "Liability Management Transactions: Key Considerations", url: "https://www.moodys.com", source: "Moody's Special Comment, 2022" },
  { id: 3, author: "Bank for International Settlements", title: "Corporate Bond Refinancing Risk — Maturity Walls and Credit Markets", url: "https://www.bis.org/publ/qtrpdf/r_qt2112b.htm", source: "BIS Quarterly Review, December 2021" },
  { id: 4, author: "한국 수출입은행", title: "글로벌 채권 발행 프로그램 현황", url: "https://www.koreaexim.go.kr/", source: "KEXIM, 2024" },
  { id: 5, author: "Dealogic", title: "Asia-Pacific Liability Management Review", url: "https://www.dealogic.com/insight/dcm-review/", source: "Dealogic, 2024" },
];

export default function DcmLiabilityManagementClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const base = lang === "ko" ? "/market-101" : "/en/market-101";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dealstory.kr";
  const pageUrl = `${siteUrl}${base}/dcm-liability-management`;
  const prev = DCM_SERIES.find((s) => s.ch === thisCh - 1)!;
  const next = DCM_SERIES.find((s) => s.ch === thisCh + 1) ?? null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Series Nav */}
        <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-wrap gap-1.5 mb-8">
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

        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>DCM · Ch.{thisCh}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `약 ${concept.readingMinutes}분 읽기` : `~${concept.readingMinutes} min read`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {ko ? "부채관리 실전: 텐더 오퍼·익스체인지 오퍼·콜 옵션" : "Liability Management: Tender Offer, Exchange Offer & Call Options"}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {ko
              ? "채권을 발행하는 것만큼 중요한 것이 기발행 채권을 어떻게 관리하느냐입니다. 만기 절벽을 피하고, 금리 환경 변화를 이용해 자금 조달 비용을 낮추고, 약관을 정리하는 부채관리(Liability Management) 전략 — 텐더 오퍼부터 메이크홀 콜까지, KEXIM 케이스로 전 과정을 해부합니다."
              : "Managing existing debt is as important as issuing new bonds. Avoiding maturity cliffs, exploiting rate environments to cut funding costs, cleaning up indentures — Liability Management from tender offers to make-whole calls, dissected through a KEXIM case study."}
          </p>
        </motion.div>

        {/* Section 1: Why LME */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "1. 왜 LME를 하는가 — 네 가지 동기" : "1. Why Conduct LME — Four Motivations"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "Liability Management Exercise(LME)는 채권 발행 후 재무 환경 변화에 대응해 기발행 채권을 능동적으로 관리하는 활동입니다."
              : "Liability Management Exercise (LME) is the active management of outstanding bonds in response to evolving financial conditions post-issuance."}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_LME.map((w, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{w.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-50 mb-1.5">{w.reason(ko)}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{w.desc(ko)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 2: LM Types */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "2. LME 6가지 유형 — 구조와 활용 시점" : "2. Six LME Types — Structure and Timing"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "발행사가 선택할 수 있는 LME 도구는 상황에 따라 다릅니다. IG 소버린부터 HY 기업까지 각각 다른 유형을 씁니다."
              : "The LME tool an issuer selects depends on the situation. IG sovereigns to HY corporates each favor different approaches."}
          </p>
          <div className="space-y-4">
            {LM_TYPES.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 ${t.color}`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{t.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{t.type(ko)}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">{t.desc(ko)}</p>
                    <div className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${t.badge}`}>
                      <span>⏱ {ko ? "활용 시점" : "When"}: {t.whenUsed(ko)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Make-Whole */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "3. Make-Whole Call — 왜 행사가 어려운가" : "3. Make-Whole Call — Why It's Rarely Exercised"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "\"Make-Whole\"이라는 이름처럼, 발행사가 투자자에게 남은 수익을 전부 보상해야 합니다. 금리 방향에 따라 콜 가격이 어떻게 달라지는지 봅니다."
              : "The name says it all: the issuer must make the investor whole for remaining returns. How the call price moves with rates:"}
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 text-[11px] uppercase tracking-wide text-gray-400">
                    <th className="text-left px-4 py-3">{ko ? "시나리오" : "Scenario"}</th>
                    <th className="text-right px-4 py-3">{ko ? "국채금리" : "Treasury"}</th>
                    <th className="text-right px-4 py-3">{ko ? "콜 가격" : "Call Price"}</th>
                    <th className="text-left px-4 py-3 hidden sm:table-cell">{ko ? "실무 결론" : "Practical Outcome"}</th>
                  </tr>
                </thead>
                <tbody>
                  {MAKE_WHOLE_EXAMPLE.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                      <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">{row.scenario(ko)}</td>
                      <td className="px-4 py-3 text-right font-mono text-sm text-gray-600 dark:text-gray-400">{row.treasury > 0 ? `${row.treasury}%` : "—"}</td>
                      <td className={`px-4 py-3 text-right font-mono font-bold text-sm ${row.callPrice >= 100 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        {row.callPrice.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 hidden sm:table-cell">{row.note(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 px-4 py-3">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest mb-1.5">💡 {ko ? "핵심 인사이트" : "Key Insight"}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {ko
                ? "Make-Whole Call은 사실상 투자자 보호 조항입니다. 발행사가 콜을 행사하기 위해서는 시장가보다 높은 가격을 줘야 하는 경우가 대부분이라, 실제로 행사되는 경우는 드뭅니다. 반면 Par Call은 발행사에게 유리한 옵션입니다 — 금리가 낮아질수록 채권 가격은 올라가지만 발행사는 100에 조기 상환할 수 있습니다. IG채권 약관에는 주로 Make-Whole이, HY채권에는 주로 Par Call 스케줄이 포함됩니다."
                : "Make-Whole Call is effectively investor protection. The issuer almost always has to pay above market to exercise it — so it rarely happens. Par Call, by contrast, benefits the issuer: when rates fall and bond prices rise, the issuer can redeem at 100. IG bond indentures typically include Make-Whole; HY bonds typically include Par Call schedules."}
            </p>
          </div>
        </motion.section>

        {/* Section 4: Tender Timeline */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "4. 텐더 오퍼 + 신규 발행 동시 진행 — 타임라인" : "4. Tender + New Issue — The Timeline"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "실전에서 텐더 오퍼는 신규 발행과 동시에 이루어집니다. 신규 발행 자금으로 텐더를 결제하기 때문입니다."
              : "In practice, tender offers run concurrently with new issuance — new bond proceeds fund the cash buyback."}
          </p>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div className="space-y-4">
              {TENDER_TIMELINE.map((item, i) => (
                <motion.div key={i} initial="hidden" whileInView="show" viewport={VP} variants={fadeUp(i * 0.08)}>
                  <div className="flex gap-4">
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-950 mt-4 z-10 ${item.dot}`} />
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <span className="font-black text-base font-mono" style={{ color: accent }}>{item.day}</span>
                        <span className="font-bold text-sm text-gray-900 dark:text-gray-50">{item.event(ko)}</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail(ko)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Case Study KEXIM */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-2">
            {ko ? "5. 케이스 스터디 — KEXIM USD 500mn 텐더 오퍼" : "5. Case Study — KEXIM USD 500mn Tender Offer"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {ko
              ? "2021년 초저금리 환경. 한국수출입은행이 2024년 만기 고쿠폰 채권을 조기 소각하고 더 낮은 금리로 장기 자금 조달에 나섭니다."
              : "Early 2021, ultra-low rate environment. KEXIM retires high-coupon 2024 bonds early and locks in longer-term funding at lower rates."}
          </p>
          <div className="rounded-xl border-2 border-teal-300 dark:border-teal-700 bg-white dark:bg-gray-900 p-6 mb-4">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{ko ? "기존 채권 (매입 대상)" : "Existing Bond (Target)"}</p>
                <div className="space-y-1.5 text-sm">
                  {[
                    { label: ko ? "쿠폰" : "Coupon", value: `${ECONOMICS_CASE.existingBond.coupon}%` },
                    { label: ko ? "만기" : "Maturity", value: ECONOMICS_CASE.existingBond.maturity },
                    { label: ko ? "잔액" : "Outstanding", value: `USD ${ECONOMICS_CASE.existingBond.outstanding}mn` },
                    { label: ko ? "시장가" : "Market Price", value: `${ECONOMICS_CASE.existingBond.price}` },
                    { label: ko ? "텐더 프리미엄" : "Tender Premium", value: `+${ECONOMICS_CASE.tenderPremium}pts` },
                    { label: ko ? "텐더 가격" : "Tender Price", value: `${(ECONOMICS_CASE.existingBond.price + ECONOMICS_CASE.tenderPremium).toFixed(1)}` },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-0.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-200">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{ko ? "신규 채권 (신규 발행)" : "New Bond (New Issue)"}</p>
                <div className="space-y-1.5 text-sm">
                  {[
                    { label: ko ? "쿠폰" : "Coupon", value: `${ECONOMICS_CASE.newBond.coupon}%` },
                    { label: ko ? "만기" : "Maturity", value: ECONOMICS_CASE.newBond.maturity },
                    { label: ko ? "발행 규모" : "Size", value: `USD ${ECONOMICS_CASE.newBond.size}mn` },
                    { label: ko ? "딜러 수수료" : "Dealer Fee", value: `${ECONOMICS_CASE.dealerFee}%` },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-0.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-gray-500 dark:text-gray-400">{row.label}</span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-200">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border-2 border-teal-400 dark:border-teal-600 bg-teal-50 dark:bg-teal-900/30 p-4">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "연간 쿠폰 절감" : "Annual Coupon Saving"}</p>
                  <p className="font-black text-xl font-mono" style={{ color: accent }}>
                    {ECONOMICS_CASE.annualSaving}%
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">(4.5% → 2.1%)</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "연간 절감액" : "Annual Saving"}</p>
                  <p className="font-black text-xl font-mono text-emerald-600 dark:text-emerald-400">
                    USD 12mn
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{ko ? "(USD 500mn 기준)" : "(on USD 500mn)"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{ko ? "NPV 절감 (잔여 기간)" : "NPV Saving"}</p>
                  <p className="font-black text-xl font-mono text-emerald-600 dark:text-emerald-400">
                    USD {ECONOMICS_CASE.npvSaving}mn
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{ko ? "(텐더 비용 차감 후)" : "(after tender costs)"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-4">
            <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-widest mb-2">🏦 {ko ? "딜 결과" : "Deal Outcome"}</p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { label: ko ? "텐더 참여율" : "Participation Rate", value: "83%" },
                { label: ko ? "실제 매입" : "Bonds Retired", value: "USD 415mn" },
                { label: ko ? "신규 발행 커버" : "New Issue Cover", value: "3.2×" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="font-black text-xl font-mono text-indigo-600 dark:text-indigo-400">{item.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-16">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-50 mb-6">
            {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
          </h2>
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={accent} />
        </motion.section>

        {/* References */}
        <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-4">{ko ? "참고 자료" : "References"}</h2>
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

        <ShareButtons
          title={ko ? "DCM Ch.9 — 부채관리 실전: 텐더 오퍼·익스체인지 오퍼·콜 옵션 | Deal Story" : "DCM Ch.9 — Liability Management: Tender Offer, Exchange Offer & Call Options | Deal Story"}
          lang={lang}
        />

        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          {prev ? (
            <Link href={`${base}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <span>←</span><span>{prev.title(ko)}</span>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`${base}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              <span>{next.title(ko)}</span><span>→</span>
            </Link>
          ) : <div />}
        </div>

          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("dcm-liability-management");
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
