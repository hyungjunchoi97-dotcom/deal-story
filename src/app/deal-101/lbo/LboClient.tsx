"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── 애니메이션 헬퍼 ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── 컬러 맵 ─────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",    border: "border-blue-200 dark:border-blue-800",   bg: "bg-blue-50 dark:bg-blue-900/20",    text: "text-blue-700 dark:text-blue-300",    dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",  border: "border-amber-200 dark:border-amber-800",  bg: "bg-amber-50 dark:bg-amber-900/20",   text: "text-amber-700 dark:text-amber-300",   dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",    border: "border-rose-200 dark:border-rose-800",   bg: "bg-rose-50 dark:bg-rose-900/20",    text: "text-rose-700 dark:text-rose-300",    dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",    border: "border-teal-200 dark:border-teal-800",   bg: "bg-teal-50 dark:bg-teal-900/20",    text: "text-teal-700 dark:text-teal-300",    dot: "bg-teal-500" },
};

// ── 수익 창출 드라이버 ───────────────────────────────────────────
const DRIVERS = [
  {
    num: "①",
    title: "레버리지 효과",
    color: "blue",
    desc: "에쿼티를 최소화하고 부채를 최대화하면, 같은 EV 상승에도 에쿼티 수익률은 몇 배로 증폭된다. 1,000억짜리 회사를 에쿼티 300억 + 부채 700억으로 사서 1,500억에 팔면, EV는 50% 올랐지만 에쿼티 수익률은 1,200억 ÷ 300억 = 4배가 된다.",
    formula: "에쿼티 수익률 = (Exit EV − 잔여 부채) ÷ 투입 에쿼티",
  },
  {
    num: "②",
    title: "멀티플 익스팬션",
    color: "violet",
    desc: "낮은 EV/EBITDA 배수에 사서 높은 배수에 파는 것이다. 7x에 매수 → 10x에 매각이면 EBITDA 변화가 없어도 순수 멀티플 차이만으로 수익이 발생한다. 경기 사이클, 산업 재평가, IPO 시장 열기 등이 멀티플을 움직인다.",
    formula: "멀티플 익스팬션 이익 = EBITDA × (Exit Multiple − Entry Multiple)",
  },
  {
    num: "③",
    title: "EBITDA 성장",
    color: "emerald",
    desc: "보유 기간(Holding Period) 동안 실제 영업 성과를 개선해 EBITDA 자체를 키운다. 비용 절감, 매출 확대, 비핵심 사업 정리, 경영진 교체가 주요 수단이다. EBITDA가 커지면 부채 상환도 빨라지고, Exit 시 배수가 같아도 EV가 더 높다.",
    formula: "EV at Exit = Exit Multiple × EBITDA at Exit",
  },
];

// ── LBO 적합 타겟 조건 ───────────────────────────────────────────
const TARGET_CONDITIONS = [
  { title: "안정적이고 예측 가능한 현금흐름", desc: "부채 원리금을 상환하려면 FCF가 안정적이어야 한다. 경기 변동에 민감한 업종(호텔·항공·리테일)은 다운사이클에서 이자 커버가 무너진다.", color: "blue" },
  { title: "담보 가능한 유형 자산", desc: "대출 은행 입장에서 부동산·설비·재고 등 담보로 잡을 수 있는 자산이 있어야 레버리지를 높일 수 있다. 소프트웨어 기업은 담보 가치가 낮아 레버리지 한계가 존재한다.", color: "violet" },
  { title: "비핵심 자산 매각 가능성", desc: "인수 후 비핵심 사업부 또는 부동산을 매각해 부채를 빠르게 상환할 수 있는 구조. Sale & Leaseback이 대표적인 방법이지만 장기 고정 임차료가 새로운 부담이 된다.", color: "amber" },
  { title: "경영 개선 여지 (비효율 존재)", desc: "이미 최적화된 기업보다 비용 구조가 비효율적이거나 경영진이 오너십 없이 운영되는 기업이 PE 개입 후 개선 폭이 크다. MIP(경영진 인센티브 플랜)가 이 동기를 설계한다.", color: "rose" },
  { title: "낮은 기존 부채 레벨", desc: "이미 레버리지가 높은 기업은 추가 인수금융을 얹기 어렵다. Net Debt / EBITDA가 낮을수록 LBO 여지가 크다.", color: "emerald" },
];

// ── 이해관계자 ──────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "PE GP (운용사)",
    color: "blue",
    responsibility: "딜 소싱, 가치평가, 인수 구조 설계, 포트폴리오 경영, 엑싯 결정. 펀드 성과를 책임지는 핵심 주체. 인수 후 이사회를 장악하고 경영진 교체 또는 유지를 결정한다.",
  },
  {
    role: "LP (출자자)",
    color: "violet",
    responsibility: "연기금·보험사·국부펀드·대학기금 등. 펀드에 자금을 출자하고 GP의 성과에 따라 수익을 배분받는다. 직접 딜에는 관여하지 않지만 펀드 전략 및 투자 가이드라인을 제약한다.",
  },
  {
    role: "인수금융 주관 은행",
    color: "amber",
    responsibility: "Senior Debt(선순위 대출)과 Mezzanine(중간 순위) 구조를 설계하고, 다수 은행에 신디케이션으로 분산한다. 이자 커버리지 비율(ICR)과 레버리지 코버넌트를 설정해 차주 리스크를 제어한다.",
  },
  {
    role: "타겟 경영진",
    color: "rose",
    responsibility: "MBO(경영진 바이아웃) 형태에서는 경영진이 에쿼티 일부를 직접 투자해 참여한다. MIP(경영진 인센티브 플랜)로 성과 목표 달성 시 스톡옵션 또는 추가 보상을 받는다.",
  },
  {
    role: "법무법인",
    color: "emerald",
    responsibility: "SPA 협상, 인수금융 약정서(Credit Agreement) 작성, 담보 설정 계약, 주주간 계약(SHA) 등 딜의 모든 법적 문서를 처리한다. 크로스보더 딜은 복수 법역의 법무팀이 동시에 관여한다.",
  },
];

// ── 핵심 문서 ─────────────────────────────────────────────────
const KEY_DOCS = [
  { nameKo: "LBO 모델", nameEn: "LBO Model", color: "blue", desc: "레버리지 수준·IRR·MoM(Money-on-Money) 배수를 시나리오별로 시뮬레이션하는 재무 모델. 입력값: Entry Multiple, Exit Multiple, 레버리지 비율, 보유 기간, EBITDA 성장률. PE 투자심의위원회(IC) 승인의 핵심 근거.", descEn: "Financial model simulating leverage levels, IRR, and MoM (Money-on-Money) multiples across scenarios. Inputs: Entry Multiple, Exit Multiple, leverage ratio, holding period, EBITDA growth rate. The primary basis for PE Investment Committee (IC) approval." },
  { nameKo: "Credit Agreement (인수금융 약정서)", nameEn: "Credit Agreement (Acquisition Finance)", color: "violet", desc: "Senior Debt·Junior Debt의 금리, 만기, 상환 일정, 재무 코버넌트(Net Debt/EBITDA 한도, 이자 커버리지 비율)가 담긴 대출 계약서. 코버넌트 위반 시 기한이익상실(EOD) 조항이 발동된다.", descEn: "Loan agreement covering interest rates, maturities, amortization schedules, and financial covenants (Net Debt/EBITDA cap, interest coverage ratio) for Senior and Junior Debt. Covenant breaches trigger an Event of Default (EOD)." },
  { nameKo: "Management Incentive Plan (MIP)", nameEn: "Management Incentive Plan (MIP)", color: "amber", desc: "경영진에게 성과 연동 인센티브(스톡옵션 또는 Sweet Equity)를 설계하는 문서. IRR 또는 MoM 기준치 달성 시 경영진 지분 가치가 비선형으로 증가하는 구조(Ratchet)가 일반적이다.", descEn: "Document structuring performance-linked incentives (stock options or Sweet Equity) for management. A Ratchet mechanism is typical — management equity value increases non-linearly when IRR or MoM thresholds are hit." },
  { nameKo: "Exit 시나리오 분석", nameEn: "Exit Scenario Analysis", color: "rose", desc: "IPO·전략적 매각(Trade Sale)·세컨더리 바이아웃(SBO) 세 가지 경로별 예상 수익을 비교한다. 보유 기간(3·5·7년)과 Exit Multiple 변화에 따른 IRR 민감도 분석이 포함된다.", descEn: "Compares expected returns across three exit paths: IPO, Trade Sale, and Secondary Buyout (SBO). Includes IRR sensitivity analysis by holding period (3, 5, 7 years) and exit multiple changes." },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    slug: null,
    title: "역대 LBO의 탄생",
    company: "KKR × RJR Nabisco (1988)",
    type: "성공한 딜",
    typeColor: "emerald",
    dealSize: "$31.1B (당시 역대 최대)",
    analogy: "담보대출로 식료품 대기업을 통째로 샀다가 조각으로 팔아 수익을 낸 것이다. 가장 비싼 집을 가장 많은 빚을 끌어와 산 다음, 집 안의 가구와 방을 하나씩 팔아 빚을 갚았다.",
    paragraphs: [
      "1988년, KKR은 담배·식품 복합기업 RJR Nabisco를 $31.1B에 인수했다. 당시 역대 최대 규모의 LBO였으며, 7개 레이어의 레버리지가 구조화됐다. KKR은 에쿼티를 최소화하고 부채 대부분을 정크본드로 충당했다.",
      "인수 후 KKR은 비핵심 사업부(Del Monte Foods, 유럽 식품 사업 등)를 순차적으로 매각하며 부채를 빠르게 상환했다. 이 딜은 '문 앞의 야만인들(Barbarians at the Gate)'이라는 책과 영화의 원작이 됐고, LBO와 PE 업계의 아이콘적 딜로 남아 있다.",
      "최종 수익률은 당초 기대보다 낮았다는 평가도 있지만, KKR은 5년 보유 후 상당한 수익을 실현했다. 무엇보다 이 딜은 PE가 얼마나 큰 기업도 레버리지로 인수할 수 있음을 증명한 이정표였다.",
    ],
    lesson: "LBO가 가장 효과적인 건 타겟에 비효율 자산과 사업 개선 여지가 있을 때다. 비핵심 자산 매각으로 부채를 빠르게 상환하면 레버리지 리스크가 크게 줄어든다. 단, 레버리지가 지나치게 높으면 경기 하강 시 구조 자체가 흔들린다.",
  },
  {
    slug: null,
    title: "LBO 성공의 교과서",
    company: "Blackstone × Hilton Hotels (2007→2018)",
    type: "성공한 딜",
    typeColor: "emerald",
    dealSize: "$26B LBO / 최종 수익 약 $14B",
    analogy: "2008 금융위기 직후 망할 것 같았던 호텔 체인이 결국 IPO로 대박 났다. 불이 났을 때 집을 사서, 불을 끄고 리모델링한 뒤 몇 배 높은 가격에 판 것이다.",
    paragraphs: [
      "2007년, Blackstone은 힐튼 호텔을 $26B에 인수했다. 타이밍은 최악이었다 — 인수 1년 뒤 2008년 금융위기가 터졌고, 호텔 업황이 급속히 악화됐다. 힐튼은 일시적으로 채무 재조정 국면에 진입했다.",
      "그러나 Blackstone은 힐튼을 포기하지 않았다. 대신 새로운 CEO를 영입하고, 힐튼 브랜드를 프랜차이즈 중심으로 재편하며 자산 경량화(asset-light) 전략을 펼쳤다. 프랜차이즈 수익 모델은 경기 변동에 덜 민감했다.",
      "2013년 힐튼은 IPO에 성공했고, Blackstone은 이후 5년간 단계적으로 지분을 매각하며 총 약 $14B의 수익을 실현했다. 역대 PE 딜 중 가장 수익성 높은 딜 중 하나로 꼽힌다.",
    ],
    lesson: "LBO 성공의 핵심은 레버리지가 아니라 포트폴리오 경영 능력이다. 위기 상황에서도 비즈니스 모델을 재설계하는 능력, 그리고 올바른 Exit 타이밍 선택이 최종 수익을 결정한다. 레버리지는 도구일 뿐, 사업 이해도가 핵심이다.",
  },
  {
    slug: "mbk-homeplus",
    title: "LBO가 잘못됐을 때",
    company: "MBK파트너스 × 홈플러스 (2015)",
    type: "실패 케이스",
    typeColor: "rose",
    dealSize: "약 7.2조원",
    analogy: "집을 팔아 현금을 뽑고 월세로 살다가 수입이 줄자 월세도 못 내게 된 것이다. Sale & Leaseback으로 단기 현금을 회수했지만, 이커머스라는 구조적 변화가 수입원 자체를 무너뜨렸다.",
    paragraphs: [
      "2015년, MBK파트너스는 영국 테스코로부터 홈플러스를 약 7.2조원에 인수했다. 아시아 유통 PE 딜 역대 최대 규모였다. MBK는 인수 후 홈플러스 점포 부동산을 매각하고 재임차(Sale & Leaseback)하는 방식으로 4조원이 넘는 현금을 회수했다.",
      "문제는 이커머스 성장으로 오프라인 대형마트가 구조적으로 쇠퇴하기 시작했다는 점이다. 홈플러스의 매출과 EBITDA는 지속 하락했고, Sale & Leaseback으로 고정된 높은 임차료 부담이 겹쳐 재무 구조가 급속히 악화됐다.",
      "2025년 3월, 홈플러스는 기업회생절차(법정관리)를 신청했다. 수조원의 인수금융과 임차 보증금이 묶이고, 협력업체 수백 곳이 미수금을 받지 못하는 상황이 발생했다. 7.2조원짜리 딜은 10년 만에 법정관리로 귀결됐다.",
    ],
    lesson: "현금흐름이 안정적이지 않은 구조적 변화 산업에서의 LBO는 치명적이다. Sale & Leaseback은 단기 현금을 만들지만 장기 고정 비용을 늘린다. DD 단계에서 '5~7년 후 산업 구조 변화'를 충분히 검토하지 않으면, 레버리지가 독이 된다.",
  },
];

// ── 성공/실패 요인 ───────────────────────────────────────────────
const SUCCESS_FACTORS = [
  { factor: "안정적 FCF", success: "부채 상환에 충분한 현금흐름 확보", failure: "경기 하강 시 이자 커버 붕괴", color: "blue" },
  { factor: "레버리지 수준", success: "Net Debt/EBITDA 4~6x (보수적 구조)", failure: "7x 이상 과도한 레버리지", color: "violet" },
  { factor: "Exit 타이밍", success: "멀티플 익스팬션 시장에서 IPO/매각", failure: "불황기 강제 엑싯, 멀티플 수축", color: "amber" },
  { factor: "EBITDA 성장", success: "비용 절감 + 매출 확대로 EBITDA 개선", failure: "구조적 업황 악화로 EBITDA 하락", color: "rose" },
  { factor: "비핵심 자산 매각", success: "조기 부채 상환으로 레버리지 리스크 감소", failure: "Sale & Leaseback 이후 고정 임차 부담 증가", color: "emerald" },
  { factor: "DD 품질", success: "산업 구조 변화·리스크 충분히 검토", failure: "현재 EBITDA만 보고 미래 변화 간과", color: "teal" },
];

interface Props {
  lang?: "ko" | "en";
}

export default function LboClient({ lang = "ko" }: Props) {
  const ko = lang !== "en";
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">LBO</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              LBO (차입인수) 완전 정리
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              타겟 기업의 자산·현금흐름을 담보로 대출을 일으켜 인수하는 구조. PE가 어떻게 레버리지로 수익을 증폭하고, 어떤 조건에서 실패하는지를 케이스 스터디로 완전히 정리한다.
            </p>

            {/* 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#principle", label: "핵심 원리" },
                { href: "#drivers", label: "수익 드라이버" },
                { href: "#target", label: "적합 타겟" },
                { href: "#stakeholders", label: "이해관계자" },
                { href: "#documents", label: "핵심 문서" },
                { href: "#cases", label: "케이스 스터디" },
                { href: "#summary", label: "성공·실패 요인" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 1. 핵심 원리 ── */}
          <motion.section
            id="principle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">1. 핵심 원리 — 왜 LBO인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                LBO(Leveraged Buyout, 차입인수)의 본질은 단순하다. <strong className="text-gray-800 dark:text-gray-200">에쿼티(자기자본)를 최소화하고, 타겟 기업의 자산과 미래 현금흐름을 담보로 최대한 많은 부채를 일으켜 인수하는 것이다.</strong> 에쿼티가 적을수록 같은 수익에 대한 수익률(IRR)이 높아진다 — 이것이 레버리지 효과의 본질이다.
              </p>
              <p>
                PE(사모펀드)가 LBO를 선호하는 이유는 펀드 규모 대비 훨씬 큰 기업을 인수할 수 있기 때문이다. 1조원 펀드로도 3~4조원짜리 딜을 할 수 있는 것은 레버리지 덕분이다. 단, 부채가 많을수록 이자 부담이 커지고, 현금흐름이 흔들리면 구조 전체가 흔들린다는 양날의 검이다.
              </p>
            </div>

            {/* 비유 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                전세 레버리지로 집 사기와 같다. 2억 에쿼티(내 돈) + 6억 대출(은행 돈)로 8억짜리 집을 산다. 1년 후 집값이 10억으로 오르면, 내가 벌어들인 수익은 2억이고 수익률은 100%(2억 ÷ 2억)다. 에쿼티만으로 8억짜리 집을 샀다면 수익률은 25%(2억 ÷ 8억)에 그쳤을 것이다. 이것이 레버리지의 힘이다.
              </p>
            </div>

            {/* 기본 수식 */}
            <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
              <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">LBO 기본 수식</h3>
              <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200 font-mono">
                <p>EV (기업가치) = Equity + Net Debt</p>
                <p>IRR = f (Entry Multiple, Exit Multiple, Leverage, Holding Period, EBITDA Growth)</p>
                <p>MoM = Exit Equity ÷ Entry Equity</p>
              </div>
              <p className="mt-3 text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                PE의 목표 IRR은 통상 20% 이상, MoM 2.0~3.0x 이상. 보유 기간은 평균 4~7년.
              </p>
            </div>

            {/* 핵심 인사이트 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                레버리지는 수익을 증폭하지만 리스크도 함께 증폭한다. 현금흐름이 예상보다 20%만 줄어도 레버리지가 높으면 이자 커버가 무너질 수 있다. LBO 모델에서 Downside 시나리오 분석이 Upside만큼 중요한 이유다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 수익 창출 구조 ── */}
          <motion.section
            id="drivers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">2. LBO의 수익 창출 구조 — 3가지 드라이버</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">PE의 최종 수익(IRR·MoM)은 아래 세 가지 요소의 조합으로 결정된다. 좋은 딜은 셋 중 두 가지 이상이 작동한다.</p>

            <div className="space-y-4">
              {DRIVERS.map((d) => {
                const c = COLOR_MAP[d.color];
                return (
                  <div key={d.num} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-lg font-bold ${c.text} shrink-0`}>{d.num}</span>
                      <div className="flex-1">
                        <h3 className={`text-sm font-bold ${c.text} mb-2`}>{d.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{d.desc}</p>
                        <div className={`rounded-lg px-3 py-2 bg-white/60 dark:bg-gray-900/40 border ${c.border}`}>
                          <p className={`text-xs font-mono font-semibold ${c.text}`}>{d.formula}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                2010년대 저금리 시대에는 레버리지 + 멀티플 익스팬션만으로도 높은 IRR이 나왔다. 2022년 이후 고금리 환경에서는 EBITDA 성장이 핵심 드라이버로 부상했다. 금리 환경이 바뀌면 LBO 수익 구조도 바뀐다.
              </p>
            </div>
          </motion.section>

          {/* ── 3. 적합 타겟 ── */}
          <motion.section
            id="target"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">3. LBO 적합 타겟의 조건</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              모든 기업이 LBO에 적합한 건 아니다. 아래 조건을 많이 충족할수록 더 높은 레버리지를 활용할 수 있고, 성공 확률이 높아진다.
            </p>

            <div className="space-y-3">
              {TARGET_CONDITIONS.map((item, i) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                LBO 적합 타겟은 '대출을 많이 끼고 살 수 있는 집'이다. 임차 수요가 안정적이고(현금흐름), 담보 가치가 높고(유형 자산), 리모델링 여지가 있고(경영 개선), 기존 담보 설정이 없는(낮은 기존 부채) 집. 구조적으로 공실이 늘어날 수밖에 없는 지역의 집(구조적 업황 악화)에 레버리지를 최대화하면 홈플러스 사례가 된다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 이해관계자 ── */}
          <motion.section
            id="stakeholders"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">4. 이해관계자 & 역할</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              LBO 딜에는 여러 주체가 각자의 이해관계를 가지고 참여한다. 이들의 인센티브 구조를 이해하면 딜의 역학관계가 보인다.
            </p>

            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                GP의 수익은 Carried Interest(초과 수익의 20%)로 결정된다. 즉 펀드 전체 수익이 올라야 GP도 버는 구조다. 반면 은행은 고정 이자를 받으므로 보수적으로 코버넌트를 설정한다. 이 이해관계 차이가 레버리지 수준 협상의 핵심 갈등 지점이다.
              </p>
            </div>
          </motion.section>

          {/* ── 5. 핵심 문서 ── */}
          <motion.section
            id="documents"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">5. 핵심 문서</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              LBO 딜에서 핵심적으로 생성·협상되는 네 가지 문서다. 각각이 딜의 다른 측면을 통제한다.
            </p>

            <div className="space-y-3">
              {KEY_DOCS.map((doc, i) => {
                const c = COLOR_MAP[doc.color];
                return (
                  <div key={i} className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-sm">
                    <span className={`inline-block text-xs font-semibold rounded px-2 py-0.5 mb-2 ${c.badge}`}>{ko ? doc.nameKo : doc.nameEn}</span>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{ko ? doc.desc : doc.descEn}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 6. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">6. 케이스 스터디 — 성공과 실패의 현장</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                LBO는 교과서의 IRR 계산식으로 끝나지 않는다. 동일한 레버리지 구조도 어떤 산업에, 어떤 타이밍에, 어떻게 경영하느냐에 따라 결과가 완전히 달라진다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.typeColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* 케이스 헤더 */}
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border}`}>
                        💰 {c_item.dealSize}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* 비유 */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>

                      {/* 본문 */}
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* 교훈 */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>

                      {/* 딜 상세 링크 */}
                      {c_item.slug && (
                        <Link
                          href={`/deals/${c_item.slug}`}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          이 딜 전체 스토리 보기 →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 7. 성공/실패 요인 요약 ── */}
          <motion.section
            id="summary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">7. LBO 성공·실패 요인 정리</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 pr-4 text-xs font-bold text-gray-500 dark:text-gray-400 w-1/4">요인</th>
                    <th className="text-left py-3 pr-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 w-[37.5%]">성공 조건</th>
                    <th className="text-left py-3 text-xs font-bold text-rose-600 dark:text-rose-400 w-[37.5%]">실패 조건</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {SUCCESS_FACTORS.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i}>
                        <td className="py-3 pr-4">
                          <span className={`text-xs font-semibold rounded px-2 py-0.5 ${c.badge}`}>{row.factor}</span>
                        </td>
                        <td className="py-3 pr-4 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.success}</td>
                        <td className="py-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.failure}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                LBO는 레버리지라는 도구를 쓰는 것뿐이고, 그 도구가 성과를 내느냐는 타겟 선택·경영 개선·Exit 타이밍이 결정한다. 레버리지는 좋은 딜을 더 좋게 만들고, 나쁜 딜을 훨씬 더 나쁘게 만든다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "LBO 딜이 어떤 단계를 거쳐 진행되는지 전체 흐름을 이해한다", badge: "Deal Structure" },
                { href: "/deal-101/ev-ebitda", title: "EV/EBITDA 멀티플", desc: "LBO의 Entry·Exit 가격을 결정하는 핵심 가치평가 지표", badge: "Valuation" },
                { href: "/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "LBO 모델에서 레버리지 가능 금액과 IRR 계산의 기준이 되는 수치", badge: "Valuation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
