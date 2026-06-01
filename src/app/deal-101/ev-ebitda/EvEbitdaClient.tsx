"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEAL_CATEGORY_COLOR, DEAL_CATEGORY_LABEL } from "@/lib/types";
import type { DealCategory } from "@/lib/types";
import { motion } from "framer-motion";
import LikeButton from "@/components/LikeButton";

// ── 애니메이션 variants ──────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const stagger = (delay = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

// ── 타입 ────────────────────────────────────────────────────────
interface RelatedDeal {
  slug: string;
  title: string;
  category: DealCategory;
  acquirer: { initials: string; bg: string; label: string };
  target: { initials: string; bg: string; label: string };
  dealValueDisplay: string;
  conceptDescription: string;
}

// ── 데이터 ──────────────────────────────────────────────────────
const DEAL_SNAPSHOTS = [
  { deal: "Microsoft → Activision Blizzard", multiple: "21.5×", note: "게임 IP 영속성·Game Pass 번들 시너지 반영" },
  { deal: "Broadcom → VMware", multiple: "15.3×", note: "엔터프라이즈 SW 평균 하단 — 구독 전환 불확실성 할인" },
  { deal: "Blackstone → Kenedix", multiple: "19.7×", note: "일본 부동산 AM 평균(10–12×) 대비 플랫폼 프리미엄" },
  { deal: "MBK Partners → Homeplus", multiple: "22.5×", note: "부동산 자산 내재가치 포함 — 영업 가치는 사실상 과대평가" },
  { deal: "Elon Musk → Twitter/X", multiple: "~72×", note: "재무 논리 이탈 — 공론장 통제권·수퍼앱 전환 프리미엄" },
];

const DEBT_ITEMS = [
  { title: "시니어 담보부 대출 (Senior Secured)", body: "기업이 보유한 자산을 담보로 조달한 최선순위 부채. 파산 시 가장 먼저 회수. LBO 딜의 핵심 자금원.", warn: false },
  { title: "회사채 / 무담보부 사채", body: "담보 없이 신용만으로 발행. 시니어 담보부보다 금리가 높고, 파산 시 후순위. EV 계산 시 액면가 기준 포함.", warn: false },
  { title: "전환사채 (Convertible Note)", body: "주식으로 전환 가능한 채권. 주가가 전환가 위면 희석효과(equity 처리), 아래면 부채 처리. 딜팀 간 해석 차이가 큰 항목.", warn: true },
  { title: "운용리스 부채 (IFRS 16 / ASC 842)", body: "2019년 이후 운용리스가 재무상태표에 올라왔다. 항공사·리테일 기업은 갑자기 수조 원의 '부채'가 생겼고, EV도 그만큼 상승. 2018년 이전 빈티지 딜과 비교 시 반드시 주의.", warn: true },
  { title: "연금 부채 (Pension Deficit)", body: "확정급여형(DB) 연금의 적립 부족분. 일부 딜팀은 이를 Net Debt에 포함해 '연금 조정 EV'를 계산. 포함 여부에 따라 EV가 수천억 원 차이.", warn: true },
  { title: "이언아웃·우발채무", body: "이전 인수 거래에서 발생한 조건부 지급 의무. 아직 현금 지출이 일어나지 않았지만 경제적 부채. 딜 중 발견하지 못하면 인수 후 폭탄.", warn: true },
];

const CASH_ITEMS = [
  { title: "제한된 현금 (Restricted Cash)", body: "법적 또는 계약상 특정 용도로만 쓸 수 있는 현금. 보증금, 에스크로 계좌, 규제 유보금 등. EV 계산에서 제외하거나 할인해야 한다.", warn: true },
  { title: "해외 자회사 현금 (Trapped Cash)", body: "중국·인도처럼 자본 통제가 있는 국가에 묶인 현금. 본사가 자유롭게 쓸 수 없다. Apple이 2017년 해외에 쌓아둔 $2,520억 중 상당 부분이 이 케이스.", warn: true },
  { title: "운전자본용 최소 현금", body: "기업 운영에 필요한 최소 유동성. '잉여 현금(Excess Cash)'만 EV에서 차감해야 한다는 논리. 소매업의 경우 연간 매출의 1–2%를 최소 현금으로 봄.", warn: false },
];

const DA_INSIGHTS = [
  {
    title: "D&A는 '비현금' — 그래서 중요하지 않다는 착각",
    body: `EBITDA를 선호하는 가장 큰 이유는 "D&A는 어차피 현금 지출이 아니니까"다. 하지만 이것이 가장 위험한 오해다.
    감가상각은 이미 일어난 설비투자(Capex)의 분산 인식이다. 공장 기계에 ₩100억을 썼다면, 10년에 걸쳐 매년 ₩10억씩 감가상각한다. 현금은 Year 1에 나갔지만 D&A는 10년간 잡힌다.
    Capex가 지속적으로 필요한 사업(제조업, 항공, 통신)에서 EBITDA를 현금흐름 대리지표로 쓰면 실제 현금창출력을 크게 과대평가하게 된다. 이것이 Warren Buffett이 EBITDA를 "bullshit earnings"라고 표현한 핵심 이유다.`,
    quote: `"References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?" — Warren Buffett, 2002 Berkshire Hathaway Letter`,
  },
  {
    title: "제조업의 숨은 D&A — COGS 안에 들어있다",
    body: `많은 사람이 손익계산서에서 D&A를 별도 항목으로 찾으려 한다. 하지만 제조업에서는 공장 설비의 감가상각이 COGS(매출원가) 안에 이미 녹아들어 있다.
    예: 반도체 팹 장비 감가상각 → 웨이퍼 제조 원가에 포함 → COGS로 처리.
    EBITDA를 정확히 계산하려면 주석(Notes to Financial Statements)의 '현금흐름표' 또는 '비현금비용 명세'에서 실제 D&A 금액을 찾아 더해야 한다. 손익계산서 단독으로는 찾을 수 없다.`,
    quote: null,
  },
  {
    title: "IFRS 16 도입 후 항공사 EBITDA 급등의 비밀",
    body: `2019년 IFRS 16(운용리스 자산화) 도입으로 항공사들의 EBITDA가 30~50% 급증했다. 이유는 간단하다.
    기존: 리스료 전액이 영업비용(OPEX) → EBITDA 차감
    IFRS 16 이후: 리스가 자산·부채로 인식 → 리스료가 감가상각(D)+이자(I)로 분리 → 둘 다 EBITDA 계산 시 add-back
    대한항공의 경우 2019년 EBITDA가 IFRS 16 전환으로 수천억 원 증가했지만, 실제 현금흐름은 전혀 바뀌지 않았다. 리스 비용은 여전히 나가고 있으니까. 2018년 이전 데이터와 비교할 때 반드시 Pre-IFRS16/Post-IFRS16 구분이 필요하다.`,
    quote: null,
  },
  {
    title: "인수 무형자산 상각(PPA Amortization)의 왜곡",
    body: `M&A 후 인수 기업의 EBITDA가 갑자기 악화되는 것처럼 보이는 경우가 있다. 이유는 PPA(Purchase Price Allocation) — 인수 대금을 고객 관계, 특허, 브랜드 등 무형자산에 배분하고 이를 상각하기 때문이다.
    예: Broadcom이 VMware를 인수하면서 고객 관계·기술자산에 수백억 달러를 배분 → 향후 수년간 매 분기 거대한 무형자산 상각 발생 → EBIT은 크게 감소하지만 EBITDA(D&A add-back)는 영향 없음.
    이것이 PE 투자자들이 "Cash EBITDA" 또는 "Adjusted EBITDA"를 선호하는 이유다. PPA 상각은 실제 사업의 현금 경쟁력과 무관하다.`,
    quote: null,
  },
];

const INTEREST_INSIGHTS = [
  {
    title: "자본구조 중립화 — 같은 사업, 다른 레버리지",
    body: `두 개의 동일한 편의점 체인이 있다고 하자. A사는 무차입, B사는 ₩3,000억 차입. 영업 현금창출력은 같지만, 이자비용 때문에 순이익(당기순이익)은 B가 훨씬 낮다. P/E로 비교하면 A가 더 비싸 보인다. EV/EBITDA는 이자를 더하기 전 이익을 쓰므로 두 회사를 동등하게 비교할 수 있다.`,
  },
  {
    title: "PIK 이자 — 현금 없이 쌓이는 부채 폭탄",
    body: `Payment-in-Kind(PIK) 이자는 현금 대신 새 부채로 이자를 지급하는 구조다. LBO 딜에서 후순위 채권자가 PIK 구조에 동의하는 대신 높은 금리를 받는다. 현금흐름 압박 없이 이자가 복리로 쌓이다가, 만기에 한꺼번에 상환 — 회사에 시한폭탄이 된다. EBITDA는 이 PIK 이자가 없어 보이는 동안 양호하게 유지된다.`,
  },
  {
    title: "자본화 이자 (Capitalized Interest)",
    body: `건설·개발 기간 중 조달한 차입금의 이자는 즉시 비용 처리 대신 건설 중인 자산의 원가에 포함할 수 있다. 부동산 개발사, 대규모 인프라 건설사 등이 해당. 자본화 이자는 P&L에 이자비용으로 나타나지 않아 EBIT와 EBITDA 모두 영향을 받지 않는다. 그러나 실제로 현금이 나가고 있다.`,
  },
];

const TAX_INSIGHTS = [
  {
    title: "법인세율 vs 실효세율 — 숫자의 함정",
    body: `한국 법인세 최고세율은 24%, 미국 21%, 아일랜드 12.5%다. 하지만 실제 글로벌 기업이 내는 실효세율은 이와 크게 다를 수 있다. IP(지식재산)를 낮은 세율 국가에 두고 로열티를 본사에 청구하거나, 이전가격 최적화를 통해 이익을 세율이 낮은 곳에 집중한다. EBITDA는 세금 차이를 제거하므로, 국가·구조가 다른 기업의 영업력을 동등하게 비교할 수 있다.`,
  },
  {
    title: "NOL — 인수 대상의 숨은 자산",
    body: `순영업손실(Net Operating Loss)은 이전 연도 적자를 미래 과세 소득과 상계할 수 있는 세금 공제 자산이다. 만성 적자 기업을 인수하면 NOL을 통해 향후 수년간 법인세를 절감할 수 있다. 이것이 EV 계산에 반영되진 않지만, 실제 DCF 분석에서는 세후 현금흐름을 높이는 가치 드라이버가 된다. 딜 실사에서 NOL 규모와 사용 가능성 검토는 필수 항목이다.`,
  },
];

const PL_ITEMS = [
  { label: "매출액 (Revenue)", note: "", indent: 0, positive: true },
  { label: "– 매출원가 (COGS)", note: "제조업: 공장 D&A가 여기 포함됨", indent: 1, positive: false },
  { label: "= 매출총이익 (Gross Profit)", note: "Gross Margin 결정", indent: 0, positive: true, bold: true },
  { label: "– 판매관리비 (SG&A)", note: "", indent: 1, positive: false },
  { label: "= EBIT (영업이익)", note: "", indent: 0, positive: true, bold: true },
  { label: "+ 감가상각비 (D&A)", note: "비현금 → add-back", indent: 1, positive: true, highlight: true },
  { label: "= EBITDA", note: "M&A 밸류에이션의 기준선", indent: 0, positive: true, bold: true, highlight: true },
];

const BENCHMARKS = [
  { sector: "엔터프라이즈 소프트웨어", range: "15 – 30×", note: "구독 ARR 성장성·잠금 효과" },
  { sector: "게임·미디어 IP", range: "15 – 25×", note: "IP 영속성·플랫폼 시너지" },
  { sector: "럭셔리·소비재", range: "12 – 22×", note: "브랜드 헤리티지 프리미엄" },
  { sector: "부동산 자산운용", range: "12 – 22×", note: "AUM 성장 기대·플랫폼 가치" },
  { sector: "리테일·대형마트", range: "6 – 15×", note: "성장 정체·e-커머스 할인" },
  { sector: "반도체·하드웨어", range: "10 – 20×", note: "사이클 민감도·Capex 부담" },
  { sector: "에너지·인프라", range: "5 – 12×", note: "자본집약·규제 환경" },
];

const LIMITATIONS = [
  { title: "EBITDA 적자 기업 적용 불가", body: "분모가 음수면 멀티플이 무의미. Slack(Salesforce 인수), 쿠팡(상장 당시) 같은 고성장 적자 기업은 EV/Revenue나 EV/ARR로 대체." },
  { title: "Capex를 완전히 무시", body: "사업 유지에 필요한 자본적 지출을 반영하지 않음. EBITDA = Free Cash Flow라는 착각이 가장 위험한 오류. EBITDA – Capex = EBIT에 가깝지, FCF가 아님." },
  { title: "성장성이 배제됨", body: "성장률이 다른 두 기업이 같은 배수라면 고성장 기업이 저평가된 것. EV/NTM EBITDA(12개월 선행 예측) 또는 EV/EBITDA ÷ 성장률로 보완." },
  { title: "업종 간 직접 비교 불가", body: "소프트웨어 20×와 리테일 20×는 완전히 다른 세계. Comps는 반드시 같은 섹터 내에서만 유효." },
];

const REFERENCES = [
  { label: "Berkshire Hathaway Annual Report 2002", detail: "Warren Buffett, Letter to Shareholders — EBITDA 비판 원문" },
  { label: "McKinsey — Valuation, 7th Edition", detail: "Koller, Goedhart, Wessels — EV와 EBITDA 정의 및 조정 방법론" },
  { label: "Investment Banking — Rosenbaum & Pearl", detail: "Chapter 4: Comparable Company Analysis — EV/EBITDA 적용 실무" },
  { label: "Damodaran Online — Musings on Markets", detail: "Aswath Damodaran — 'EBITDA, EBIT and Earnings: Working Through the Fog'" },
  { label: "IFRS 16 — Leases (2016)", detail: "IASB — 운용리스 자산화 기준, 항공사 EBITDA 영향 분석" },
  { label: "Wall Street Oasis — EV/EBITDA Guide", detail: "실무자 커뮤니티 기반 EV 조정 항목 정리" },
  { label: "Pitchbook / Mergermarket Data (2020–2024)", detail: "섹터별 EV/EBITDA 멀티플 벤치마크 데이터" },
];

// ── 컴포넌트 ────────────────────────────────────────────────────
export default function EvEbitdaClient({ relatedDeals }: { relatedDeals: RelatedDeal[] }) {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ───────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-12">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6"
            >
              <Link href="/deal-101" className="hover:text-blue-500 transition-colors">딜 101</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">EV/EBITDA 멀티플</span>
            </motion.nav>

            <motion.div
              variants={stagger(0.1)} initial="hidden" animate="show"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  밸류에이션
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">기초 필수 · 읽기 약 12분</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                EV/EBITDA 멀티플
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                M&A 가격 협상에서 가장 먼저 꺼내는 지표. 하지만 그 안에 감춰진 함정과 논쟁을 모르면
                숫자만 아는 것이다.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/en/deal-101/ev-ebitda" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  Read in English →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. WHY ════════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              왜 EV/EBITDA인가 — P/E가 M&A에서 쓸 수 없는 이유
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                인수합병 담당자가 딜 가격을 평가할 때 가장 먼저 꺼내는 질문은 이것이다.
                <strong className="text-gray-800 dark:text-gray-200"> "이 회사, 몇 배에 사는 거야?"</strong>
                그 '몇 배'의 기준이 바로 EV/EBITDA다.
              </p>
              <p>
                주식 투자자에게 익숙한 P/E(주가수익비율)는 왜 M&A에서 쓰기 어려울까.
                첫째, P/E는 <strong className="text-gray-800 dark:text-gray-200">자본 구조에 따라 왜곡</strong>된다.
                차입금이 많은 기업은 이자비용이 크기 때문에 순이익이 낮아 보인다 — 실제 영업력과 무관하게.
                둘째, <strong className="text-gray-800 dark:text-gray-200">국가·세율 차이를 제거하지 못한다.</strong>
                한국 기업(법인세 24%)과 아일랜드 기업(12.5%)의 P/E를 직접 비교하면 세율 차이만으로 배수가 달라진다.
                셋째, M&A는 <strong className="text-gray-800 dark:text-gray-200">주식만 사는 게 아니라 부채까지 떠안는다.</strong>
                인수자가 실질적으로 부담하는 총액(EV)을 기준으로 해야 진짜 가격을 알 수 있다.
              </p>
              <p>
                EV/EBITDA는 이 세 가지 문제를 모두 해결한다.
                분자 EV는 부채를 포함한 총 인수 비용, 분모 EBITDA는 자본 구조·세금·감가상각을 제거한 순수 영업 현금창출력.
                결과적으로 국가·자본 구조·회계 정책이 달라도 사과 대 사과 비교가 가능해진다.
              </p>
            </motion.div>

            {/* ── 실제 딜 스냅샷 ─── */}
            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">실제 딜에서의 EV/EBITDA — 한눈에</p>
              <div className="space-y-2">
                {DEAL_SNAPSHOTS.map((d, i) => (
                  <motion.div
                    key={d.deal}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-4 py-3.5"
                  >
                    <span className="font-black text-lg text-blue-600 dark:text-blue-400 font-mono w-16 flex-shrink-0 text-right">
                      {d.multiple}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{d.deal}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{d.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3">
                Twitter의 72×는 이상치(outlier)처럼 보이지만, 이것이 EV/EBITDA의 중요한 교훈이다 — 배수 자체가 아니라 그 배수를 정당화하는 논리가 핵심이다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. 공식 ══════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">공식</motion.h2>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 p-8 text-center mb-8">
              <p className="text-3xl font-black text-blue-700 dark:text-blue-300 font-mono tracking-tight">
                EV / EBITDA
              </p>
              <div className="mt-4 space-y-1 text-sm text-blue-600/80 dark:text-blue-400/70 font-mono">
                <p>= (시가총액 + 총차입금 – 현금 및 현금성 자산)</p>
                <p className="text-blue-400/60">÷</p>
                <p>= (영업이익 + 감가상각비 + 무형자산상각비)</p>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              공식 자체는 단순하다. 하지만 분자 EV와 분모 EBITDA 각각의 깊은 곳으로 들어가면,
              실무에서 딜팀 간 수천억 원의 견해 차이가 발생한다. 지금부터 하나씩 해부한다.
            </motion.p>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. 분자 EV 완전 해부 ════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">분자 (Numerator)</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">EV — Enterprise Value 완전 해부</h2>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
                "기업가치"로 번역되지만, 더 정확히는 <strong className="text-gray-700 dark:text-gray-300">"이 회사를 통째로 인수하는 데 드는 총 비용"</strong>이다.
                주식만 사는 게 아니라 부채까지 떠안는다는 개념 — 이것이 시가총액과의 차이다.
              </p>
            </motion.div>

            {/* EV Bridge */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 mb-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">EV 계산 브리지 (Equity → Enterprise Value)</p>
              <div className="space-y-2">
                {[
                  { label: "시가총액 (Market Cap)", note: "주가 × 발행주식수", color: "text-blue-600 dark:text-blue-400", sign: "" },
                  { label: "+ 단기차입금·유동성장기부채", note: "1년 내 상환 예정 금융부채", color: "text-rose-500", sign: "+" },
                  { label: "+ 장기차입금·회사채", note: "1년 초과 금융부채", color: "text-rose-500", sign: "+" },
                  { label: "+ 소수주주지분 (Minority Interest)", note: "연결 자회사 중 외부 주주 몫", color: "text-amber-500", sign: "+" },
                  { label: "+ 우선주 (Preferred Stock)", note: "보통주 전환 전 별도 처리", color: "text-amber-500", sign: "+" },
                  { label: "– 현금 및 현금성 자산", note: "단, 자유롭게 쓸 수 있는 현금만", color: "text-emerald-600 dark:text-emerald-400", sign: "–" },
                  { label: "= Enterprise Value (EV)", note: "인수자가 실질 부담하는 총액", color: "text-gray-900 dark:text-gray-100", sign: "=", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center gap-3 py-1.5 ${row.bold ? "border-t border-gray-200 dark:border-gray-700 pt-2.5 mt-1" : ""}`}>
                    <span className={`text-sm font-bold w-5 text-right flex-shrink-0 ${row.color}`}>{row.sign}</span>
                    <div className="flex-1">
                      <span className={`text-xs ${row.bold ? "font-black text-gray-900 dark:text-gray-100" : "font-medium text-gray-700 dark:text-gray-300"}`}>{row.label}</span>
                      {row.note && <span className="text-[11px] text-gray-400 dark:text-gray-500 ml-2">{row.note}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 부채 항목 심층 */}
            <motion.div variants={fadeUp}>
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">부채(Debt) — 무엇을 포함하는가</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                단순히 재무상태표의 '차입금'만 더하면 되는 것처럼 보이지만, 실무에서는 아래 항목들로 딜팀 간 수백억~수천억 원의 견해 차이가 발생한다.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {DEBT_ITEMS.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={`rounded-xl border p-4 ${item.warn
                      ? "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10"
                      : "border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900"}`}
                  >
                    <div className="flex items-start gap-2">
                      {item.warn && <span className="text-amber-500 text-xs font-bold flex-shrink-0 mt-0.5">⚠</span>}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* 현금 항목 심층 */}
            <motion.div variants={fadeUp} className="mt-8">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">현금(Cash) — 모든 현금이 같지 않다</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                가장 흔한 실수: 재무상태표의 현금을 그대로 차감한다. 하지만 '실제로 자유롭게 쓸 수 있는 현금'은 따로 있다.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {CASH_ITEMS.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={`rounded-xl border p-4 ${item.warn
                      ? "border-amber-200 dark:border-amber-800/50 bg-amber-50/40 dark:bg-amber-950/10"
                      : "border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900"}`}
                  >
                    <div className="flex items-start gap-2">
                      {item.warn && <span className="text-amber-500 text-xs font-bold flex-shrink-0 mt-0.5">⚠</span>}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 4. 분모 EBITDA 완전 해부 ═══════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2">분모 (Denominator)</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">EBITDA — 분모 완전 해부</h2>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
                EBITDA는 "Earnings Before Interest, Taxes, Depreciation &amp; Amortization"의 약자다.
                하지만 각 항목을 <em>왜</em> 제거하는지 이해해야 숫자가 말하는 것을 읽을 수 있다.
              </p>
            </motion.div>

            {/* P&L 워터폴 */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 mb-10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">P&L 워터폴 — EBITDA의 위치</p>
              <div className="space-y-1.5">
                {PL_ITEMS.map((row) => (
                  <div
                    key={row.label}
                    className={`flex items-center gap-3 py-1.5 px-3 rounded-lg text-xs ${row.highlight ? "bg-emerald-50 dark:bg-emerald-950/30" : ""} ${row.bold ? "font-bold" : ""}`}
                  >
                    <span className={`flex-1 ${row.indent === 1 ? "pl-5 text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-200"} ${row.highlight ? "text-emerald-700 dark:text-emerald-300 font-bold" : ""}`}>
                      {row.label}
                    </span>
                    {row.note && (
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 italic">{row.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* D&A 심층 */}
            <motion.div variants={fadeUp}>
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">D&amp;A (감가상각) — 가장 오해받는 항목</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                D&amp;A는 EBITDA 계산의 핵심이자 가장 많은 논쟁을 낳는 항목이다.
                '비현금 비용이니까 더해도 된다'는 단순화가 왜 위험한지, 그리고 업계에서 어떤 함정이 실제로 발생하는지 살펴본다.
              </p>
              <motion.div variants={stagger(0.09)} className="space-y-4">
                {DA_INSIGHTS.map((insight) => (
                  <motion.div
                    key={insight.title}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5"
                  >
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">{insight.body}</p>
                    {insight.quote && (
                      <blockquote className="mt-3 border-l-2 border-amber-400 pl-3 text-xs text-amber-700 dark:text-amber-400 italic leading-relaxed">
                        {insight.quote}
                      </blockquote>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Interest 심층 */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Interest (이자) — 자본구조 중립화</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                이자를 더하는 이유는 단순하다: 같은 사업이라도 차입금 규모에 따라 순이익이 달라지기 때문.
                하지만 이 '이자'에도 함정이 있다.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {INTEREST_INSIGHTS.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                  >
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Tax 심층 */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">Tax (세금) — 국가 간 비교를 가능하게</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-5">
                세금을 더하는 이유는 국가·세율 차이 없이 영업 효율성을 비교하기 위해서다.
                하지만 세금 영역에도 M&A 실무자가 놓치는 포인트가 있다.
              </p>
              <motion.div variants={stagger(0.07)} className="space-y-3">
                {TAX_INSIGHTS.map((item) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                  >
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* COGS 연결 */}
            <motion.div variants={fadeUp} className="mt-10 rounded-xl border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/40 dark:bg-indigo-950/10 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                💡 COGS 안에 숨어있는 D&amp;A — 초보자가 가장 많이 틀리는 부분
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                손익계산서에서 D&amp;A 항목을 찾으려는 사람들이 자주 당황하는 이유가 있다.
                <strong className="text-gray-800 dark:text-gray-200"> 제조업 기업의 공장 설비 감가상각은 COGS(매출원가) 안에 이미 녹아있다.</strong>
                삼성전자의 반도체 팹 장비 감가상각은 웨이퍼 제조 원가의 일부로 처리되어, 손익계산서 표면에는 별도 D&amp;A 라인이 보이지 않는다.
                정확한 EBITDA를 계산하려면 <strong className="text-gray-800 dark:text-gray-200">현금흐름표의 '비현금 조정 항목'</strong>이나
                재무제표 주석에서 실제 감가상각비를 찾아야 한다. 이것을 놓치면 EBITDA를 실제보다 낮게 계산하는 오류가 발생한다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 5. 산업별 배수 ════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">산업별 적정 배수</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              적정 배수는 산업·성장성·금리·시장 사이클에 따라 크게 달라진다. 아래는 2020년대 초 글로벌 M&A 기준이며,
              고금리 환경(2022–2024)에서는 전 섹터 배수가 전반적으로 20~30% 수축했다.
            </motion.p>
            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">섹터</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">EV/EBITDA 범위</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">주요 드라이버</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {BENCHMARKS.map((b) => (
                    <tr key={b.sector} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200 text-sm">{b.sector}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{b.range}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 6. 한계 ══════════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">EV/EBITDA의 한계</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              강력하지만 만능이 아니다. 아래 상황에서는 반드시 다른 지표를 병행해야 한다.
            </motion.p>
            <motion.div variants={stagger(0.07)} className="grid sm:grid-cols-2 gap-3">
              {LIMITATIONS.map((l) => (
                <motion.div key={l.title} variants={fadeUp}
                  className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4"
                >
                  <p className="text-rose-500 font-black text-base mb-1.5">✕</p>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{l.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{l.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 7. 핵심 요약 ═════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full px-3 py-1">
                핵심 요약
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">EV/EBITDA 완전정리</span>
            </motion.div>

            {/* 한 줄 요약 */}
            <motion.div variants={fadeUp}
              className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/50 p-6 mb-5"
            >
              <p className="text-[11px] font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-2">한 줄 정의</p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                EV/EBITDA는 &ldquo;자본구조와 세금 차이를 제거한 뒤, 순수 영업 현금창출력 대비 인수 총비용이 몇 배인가&rdquo;를 측정하는 지표다.
              </p>
            </motion.div>

            {/* 5가지 핵심 포인트 */}
            <motion.div variants={stagger(0.07)} className="space-y-2.5 mb-5">
              {[
                {
                  num: "01",
                  title: "EV는 시가총액이 아니다",
                  body: "인수자가 실제로 부담하는 총비용 — 시가총액 + 순부채(차입금 – 현금). 전환사채·IFRS 16 리스·연금 적자가 숨어있다.",
                  color: "text-blue-500",
                },
                {
                  num: "02",
                  title: "EBITDA는 현금흐름이 아니다",
                  body: "Capex를 반영하지 않는다. 제조업·항공·인프라처럼 설비투자가 많은 업종에서 EBITDA를 현금흐름 대리지표로 쓰면 수익성을 과대평가한다.",
                  color: "text-amber-500",
                },
                {
                  num: "03",
                  title: "자본구조 중립화가 핵심 존재 이유",
                  body: "무차입 기업과 고레버리지 기업을 이자 차이 없이 동등하게 비교할 수 있다. 이것이 P/E 대신 EV/EBITDA를 쓰는 가장 큰 이유다.",
                  color: "text-emerald-500",
                },
                {
                  num: "04",
                  title: "멀티플은 업종마다 완전히 다르다",
                  body: "소프트웨어 20×와 리테일 20×는 전혀 다른 의미다. 비교는 반드시 동일 섹터 내에서만 유효하다.",
                  color: "text-purple-500",
                },
                {
                  num: "05",
                  title: "EBITDA 조정의 투명성을 요구하라",
                  body: "Adjusted EBITDA는 PPA 상각·일회성 비용·SBC 등 각종 add-back을 포함한다. 무엇을 더하고 뺐는지 항상 확인해야 한다.",
                  color: "text-rose-500",
                },
              ].map((pt) => (
                <motion.div key={pt.num} variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 px-4 py-3.5"
                >
                  <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${pt.color}`}>{pt.num}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-0.5">{pt.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 사용 가이드 */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/60 dark:bg-emerald-950/20 p-4">
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-2.5">✓ 써도 좋은 상황</p>
                <ul className="space-y-1.5">
                  {["동일 섹터 기업 간 비교", "Capex 부담이 낮은 사업 (SaaS, 금융)", "글로벌 크로스보더 딜 (세율 차이 중립화)", "LBO 수익성 초기 검토"].map((t) => (
                    <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-emerald-500 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-rose-200 dark:border-rose-800/50 bg-rose-50/60 dark:bg-rose-950/20 p-4">
                <p className="text-[11px] font-bold text-rose-500 dark:text-rose-400 mb-2.5">✕ 주의해야 하는 상황</p>
                <ul className="space-y-1.5">
                  {["EBITDA 적자 고성장 기업 (EV/Revenue 사용)", "Capex 집중 산업 (항공·제조·통신)", "IFRS 16 적용 전후 시점 혼재 비교", "M&A 후 대규모 PPA 상각이 있는 기업"].map((t) => (
                    <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-rose-400 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 8. 이 개념이 등장하는 딜 ════════════════════════ */}
          {relatedDeals.length > 0 && (
            <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">이 개념이 등장하는 딜</motion.h2>
              <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
                EV/EBITDA가 핵심 밸류에이션 논거로 쓰인 실제 딜 아카이브.
              </motion.p>
              <motion.div variants={stagger(0.08)} className="grid gap-3 sm:grid-cols-2">
                {relatedDeals.map((deal) => (
                  <motion.div key={deal.slug} variants={fadeUp}>
                    <Link
                      href={`/deals/${deal.slug}`}
                      className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] flex-shrink-0 ${deal.acquirer.bg}`}>
                          {deal.acquirer.initials}
                        </div>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600 flex-shrink-0" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-[9px] flex-shrink-0 ${deal.target.bg}`}>
                          {deal.target.initials}
                        </div>
                        <span className={`ml-auto text-[10px] font-semibold rounded-full px-2 py-0.5 ${DEAL_CATEGORY_COLOR[deal.category]}`}>
                          {DEAL_CATEGORY_LABEL[deal.category]}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 line-clamp-2">
                        {deal.title}
                      </h3>
                      {deal.conceptDescription && (
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {deal.conceptDescription}
                        </p>
                      )}
                      <p className="mt-2 text-xs font-bold text-amber-500">
                        {deal.dealValueDisplay.split("(")[0].trim()}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 9. 관련 개념 ═════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">함께 알아두면 좋은 개념</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {[
                { label: "EV/Sales 멀티플", href: "/deal-101/ev-sales", note: "적자 기업 대안" },
                { label: "ARR 멀티플", href: "/deal-101/arr-multiple", note: "SaaS 전용" },
                { label: "LBO", href: "/deal-101/lbo", note: "차입 인수 구조" },
                { label: "인수 프리미엄", href: "/deal-101/acquisition-premium", note: "경영권 프리미엄" },
                { label: "반독점 규제", href: "/deal-101/antitrust", note: "딜 클로징 리스크" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 10. 참고 자료 ════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">참고 자료</motion.h2>
            <motion.ol variants={stagger(0.05)} className="space-y-2">
              {REFERENCES.map((ref, i) => (
                <motion.li key={ref.label} variants={fadeUp} className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="text-gray-300 dark:text-gray-600 font-mono flex-shrink-0">[{i + 1}]</span>
                  <span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{ref.label}</span>
                    {" — "}{ref.detail}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center pt-2"
          >
            <Link href="/deal-101" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
              ← 딜 101 전체 개념 목록
            </Link>
          </motion.div>

        </div>
        <LikeButton slug={"ev-ebitda"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
