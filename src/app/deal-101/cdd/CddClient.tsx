"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

// ── 애니메이션 헬퍼 ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── 색상 맵 ─────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── CDD 5가지 핵심 검토 항목 ─────────────────────────────────────
const CHECK_ITEMS = [
  {
    num: "01",
    title: "시장 규모 및 성장률 검증",
    subtitle: "Market Sizing",
    color: "blue",
    description: "IM에서 제시한 TAM(전체 시장)/SAM(서비스 가능 시장)/SOM(실제 목표 시장) 수치가 현실적인지 제3자 리서치와 교차 검증한다.",
    items: [
      { label: "TAM/SAM/SOM 현실성", desc: "IM에서 제시한 시장 규모 수치를 Gartner·IDC 등 독립 리서치와 대조. 매도자가 TAM을 과대 산정해 SOM을 부풀리는 패턴이 자주 발생한다." },
      { label: "성장률 가정의 드라이버", desc: "성장이 구조적(인구 변화·규제 변화·기술 전환)인지, 아니면 일시적(코로나 수혜·단기 수요 급증)인지 구별. 일시적 성장을 지속 성장으로 가정하면 Exit 시점에 EBITDA가 급감한다." },
      { label: "시장 성장 사이클 위치", desc: "해당 시장이 성장기인지, 성숙기인지, 쇠퇴기인지. 성숙기 시장에서 성장기 멀티플을 적용하면 과지불이다." },
    ],
    insight: "IM은 항상 TAM을 넓게 잡아 SOM을 합리적으로 보이게 만든다. CDD팀은 '이 회사의 실제 경쟁 시장이 얼마인가'부터 다시 정의해야 한다.",
  },
  {
    num: "02",
    title: "경쟁 구도 분석",
    subtitle: "Competitive Landscape",
    color: "violet",
    description: "타겟 기업의 경쟁 우위(Competitive Moat)가 지속 가능한지, 신규 진입자·대체재·경쟁사 확장으로 훼손될 가능성이 있는지 분석한다.",
    items: [
      { label: "주요 경쟁사 점유율 추이", desc: "지난 3~5년간 주요 경쟁사의 점유율 변화. 타겟의 점유율이 방어되고 있는가, 서서히 빠지고 있는가." },
      { label: "신규 진입자 위협 (Barriers to Entry)", desc: "규제 장벽·특허·브랜드·네트워크 효과·전환 비용 등 진입 장벽의 실질적 높이. 진입 장벽이 낮다면 보유 기간 중 경쟁이 심화될 수 있다." },
      { label: "대체재 위협 (Substitution Risk)", desc: "기술 전환(AI·디지털화)·채널 변화(온라인·D2C)·비즈니스 모델 혁신으로 인해 타겟의 제품·서비스 자체가 불필요해질 가능성." },
      { label: "지속 가능한 경쟁 우위 (Moat)", desc: "원가 우위·브랜드·전환 비용·네트워크 효과·규모의 경제 중 어떤 Moat이 있는가. Moat의 강도와 방어 가능성을 검증." },
    ],
    insight: "경쟁 구도는 스냅샷이 아니라 영화다. '지금 이 기업이 1위'라는 사실보다, '5년 뒤에도 1위일 이유가 있는가'가 핵심 질문이다.",
  },
  {
    num: "03",
    title: "고객 분석",
    subtitle: "Customer Analysis",
    color: "amber",
    description: "수익의 기반이 되는 고객 기반이 얼마나 안정적이고, 다양하며, 충성도가 높은지 분석한다. 고객 집중도 리스크는 CDD에서 가장 빈번하게 발견되는 리스크 중 하나다.",
    items: [
      { label: "고객 집중도 (Customer Concentration)", desc: "상위 5개 고객이 매출의 80%를 차지한다면 단일 고객 이탈 시 EBITDA 급감 위험. PE 딜에서 최대 고객 비중이 30%를 초과하면 경고 신호." },
      { label: "고객 이탈률 (Churn Rate)", desc: "특히 SaaS·구독·B2B 서비스 기업에서 중요. 연간 이탈률 5%와 20%는 7년 후 잔존 고객 수에서 극명한 차이가 난다. NRR(순 매출 유지율)도 함께 검토." },
      { label: "고객 NPS 및 계약 갱신율", desc: "순추천지수(NPS)는 미래 이탈을 예측하는 선행 지표. 계약 갱신율이 몇 %인가, 갱신 시 가격은 유지·상승·하락 중 어느 방향인가." },
      { label: "직접 고객 인터뷰", desc: "CDD팀이 핵심 고객 5~10개사와 직접 인터뷰 진행. '타겟 회사의 서비스를 계속 쓸 것인가, 대안이 있다면 무엇인가'를 독립 확인. 인터뷰 결과가 IM 주장과 다를 경우 강력한 가격 조정 근거가 된다." },
    ],
    insight: "고객 인터뷰는 VDR 문서로는 절대 알 수 없는 정보를 준다. '계약서상 잔여 기간 3년'이지만 고객이 '갱신할 생각 없다'고 말한다면, 그 매출은 이미 이탈 위험 매출이다.",
  },
  {
    num: "04",
    title: "수익 지속성 분석",
    subtitle: "Revenue Quality",
    color: "rose",
    description: "현재 EBITDA가 앞으로도 지속될 수 있는 구조인지 검증한다. FDD가 숫자의 정확성을 보는 반면, CDD는 그 숫자가 미래에도 재현될 수 있는지를 본다.",
    items: [
      { label: "반복 매출 vs. 일회성 매출 비중", desc: "SaaS 구독·장기 계약·MRO 부품 공급 등 반복 매출(Recurring Revenue) 비중이 높을수록 EBITDA 가시성이 높다. 프로젝트성·일회성 매출 비중이 높으면 미래 EBITDA 변동성이 크다." },
      { label: "계약 기간 및 갱신 구조", desc: "주요 계약의 잔여 기간 분포. 인수 직후 대량 만기가 도래하는 '클리프 리스크(Cliff Risk)'가 있는가. 자동 갱신 조항 존재 여부." },
      { label: "가격 결정력 (Pricing Power)", desc: "인플레이션·비용 상승 시 가격을 올릴 수 있는가. 과거 5년간 실제 가격 인상 기록. 고객이 가격 인상에 저항하지 않는다면 강력한 Moat의 증거다." },
      { label: "매출 파이프라인 가시성", desc: "향후 12~24개월 매출을 얼마나 예측할 수 있는가. 수주잔고(Backlog), 파이프라인 전환율, 영업 사이클 길이." },
    ],
    insight: "IM에서 보여주는 과거 3년 재무는 '좋았던 시절'의 스냅샷일 수 있다. CDD는 그 숫자들이 앞으로 3~7년의 보유 기간 동안 재현 가능한지를 독립적으로 검증해야 한다.",
  },
  {
    num: "05",
    title: "미래 성장 전망",
    subtitle: "Forward-Looking Analysis",
    color: "emerald",
    description: "PE 보유 기간(통상 3~7년) 동안 업황이 어떻게 변할지, IM의 성장 가정보다 나쁜 시나리오가 현실화될 가능성은 없는지 분석한다.",
    items: [
      { label: "구조적 변화 리스크", desc: "디지털 전환·AI 도입·이커머스 확산·공급망 재편 등으로 현재 비즈니스 모델이 위협받는 타임라인이 있는가. '지금은 문제없지만 5년 후가 걱정되는' 시나리오." },
      { label: "규제 환경 변화", desc: "ESG 강화, 탄소 규제, 데이터 프라이버시법, 독점 규제 등 예고된 규제 변화가 해당 사업에 미치는 영향. 특히 금융·제약·에너지·식품 등 규제 집약 산업에서 중요." },
      { label: "거시경제 사이클 민감도", desc: "금리 상승·경기 침체 시 매출·EBITDA 하락 폭. B2B 서비스는 상대적으로 방어적이지만, 소비재·건설·부동산은 사이클 민감도가 높다." },
      { label: "IM 성장 가정의 하방 시나리오", desc: "IM이 제시하는 '기본 시나리오(Base Case)'보다 20~30% 낮은 성장률이 현실화될 때 EBITDA와 밸류에이션이 얼마나 떨어지는가. Bear Case 민감도 분석." },
    ],
    insight: "CDD는 단순히 현재 시장을 분석하는 것이 아니라, PE의 보유 기간 동안 시장이 어떻게 변할지를 예측하는 일이다. '지금 좋은 회사'와 '5년 후에도 좋을 회사'는 다르다.",
  },
];

// ── FDD vs CDD 비교 ──────────────────────────────────────────────
const COMPARISON = [
  { category: "핵심 질문", fdd: "숫자가 맞는가?", cdd: "사업이 지속될 것인가?" },
  { category: "수행자", fdd: "Big4 회계법인", cdd: "전략 컨설팅사 (McKinsey·BCG·Bain 등)" },
  { category: "주요 아웃풋", fdd: "QoE (Quality of Earnings) 보고서", cdd: "시장·사업 검증 보고서" },
  { category: "데이터 소스", fdd: "재무제표, VDR 내부 자료", cdd: "외부 리서치, 고객·전문가 인터뷰" },
  { category: "가격 영향", fdd: "직접적 (EBITDA 조정 → 가격 조정)", cdd: "간접적 (EBITDA 지속성 검증)" },
  { category: "시간 범위", fdd: "과거 3~5년 실적 검증", cdd: "미래 3~7년 지속 가능성 예측" },
];

// ── 이해관계자 ───────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "전략 컨설팅사 CDD팀",
    color: "blue",
    responsibility: "시장 분석 수행, 경쟁사 인터뷰, 고객 인터뷰 진행. McKinsey·BCG·Bain 또는 업종 전문 리서치사가 담당. 딜에서 독립적 위치를 유지해야 한다.",
  },
  {
    role: "인수자 전략팀",
    color: "violet",
    responsibility: "CDD 결과를 내부 투자 심의(IC)와 LOI 가정 검증에 활용. CDD 보고서가 IM 가정과 크게 다를 경우 가격 재협상의 근거로 사용.",
  },
  {
    role: "업종 전문가 (SME)",
    color: "amber",
    responsibility: "특정 산업에 깊은 전문성을 가진 전직 경영자·컨설턴트. CDD팀이 외부 자문으로 활용. '이 시장 실제로 어떻게 돌아가는지'를 현장 시각으로 검증.",
  },
  {
    role: "매도자 영업팀",
    color: "rose",
    responsibility: "고객 정보와 계약 내역을 (제한적으로) 공유. 고객 인터뷰 대상 섭외도 매도자를 통해 이루어지는 경우가 많아, CDD팀의 독립성 유지가 중요.",
  },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    title: "이커머스 구조 변화를 못 본 CDD",
    company: "MBK파트너스 × 홈플러스",
    year: "2015",
    type: "CDD 실패 케이스",
    typeColor: "rose",
    slug: "mbk-homeplus",
    analogy: "지금 장사 잘 되는 가게인지는 봤는데, 3년 뒤 이 골목에 대형 온라인 쇼핑 플랫폼이 들어온다는 걸 확인 안 했다.",
    paragraphs: [
      "2015년, MBK파트너스는 영국 테스코로부터 홈플러스를 약 7.2조원에 인수했다. 아시아 유통 PE 딜 역대 최대 규모로, 인수 금융을 적극 활용한 LBO 구조였다.",
      "문제는 당시 이미 한국 이커머스 성장률이 연 20~30%대를 기록하며 가파르게 상승 중이었다는 점이다. 쿠팡이 2014년 로켓배송을 론칭했고, 네이버 쇼핑의 부상도 예고되어 있었다. 오프라인 대형마트 시장의 구조적 쇠퇴는 데이터로 충분히 읽을 수 있는 신호였다.",
      "CDD에서 '보유 기간(3~7년) 동안 오프라인 유통 시장이 얼마나 축소될 것인가', '이커머스 성장에 따른 홈플러스 매출·EBITDA 하락 폭이 얼마인가'에 대한 Bear Case 분석이 충분했다면, 인수 구조와 가격이 달라졌을 가능성이 높다.",
      "2025년 3월, 홈플러스는 기업회생절차(법정관리)를 신청했다. Sale & Leaseback으로 4조원 이상을 단기에 회수했지만, 높은 임차료 부담과 이커머스발 매출 하락이 겹쳐 재무 구조가 무너졌다.",
    ],
    lesson: "CDD는 '지금 시장'이 아니라 '보유 기간(3~7년) 동안의 시장'을 봐야 한다. 구조적 변화(이커머스·AI·탈탄소 등)의 타임라인이 보유 기간과 겹친다면, 그 시나리오를 Bear Case가 아닌 Base Case로 설정해야 한다.",
  },
  {
    title: "사업 모델을 제대로 이해 못한 CDD",
    company: "HP × Autonomy",
    year: "2011",
    type: "CDD 실패 케이스",
    typeColor: "rose",
    slug: null,
    analogy: "소프트웨어 회사라고 했는데 실제로는 하드웨어를 끼워서 팔던 회사였다 — 사업 모델의 본질을 파악 못한 것.",
    paragraphs: [
      "2011년, HP는 영국 엔터프라이즈 소프트웨어 기업 Autonomy를 약 $10.3B에 인수했다. 당시 업계 평균 대비 크게 높은 프리미엄이었다. HP는 Autonomy의 검색·분석 소프트웨어 기술을 기반으로 클라우드 사업을 가속화하겠다는 전략이었다.",
      "인수 후 약 1년 만에 HP는 $8.8B의 자산 손상차손을 인식했다. HP 측은 Autonomy가 하드웨어 매출을 소프트웨어 매출로 둔갑시키는 회계 처리를 했다고 주장했다. 실제로 Autonomy의 Revenue Mix에는 마진이 낮은 하드웨어·서비스 매출이 상당 부분 포함되어 있었다.",
      "CDD에서 'Autonomy가 순수 소프트웨어 기업인가, 아니면 하드웨어와 서비스를 결합한 솔루션 기업인가'를 독립 검증했다면 다른 결론이 나왔을 것이다. Revenue의 구성을 제품·서비스·하드웨어·소프트웨어별로 분해하는 것이 CDD의 기본 과제였다.",
    ],
    lesson: "Revenue의 구성(제품·서비스·하드웨어·소프트웨어 비중)을 CDD에서 독립 검증해야 한다. '소프트웨어 기업'이라는 레이블이 아니라, 실제 수익이 어디서, 어떤 구조로 만들어지는지를 분해해야 정확한 멀티플을 적용할 수 있다.",
  },
  {
    title: "CDD팀이 경고했지만 무시됐다",
    company: "WeWork IPO 시도",
    year: "2019",
    type: "독립성 실패 케이스",
    typeColor: "amber",
    slug: null,
    analogy: "의사가 '이 환자 건강하지 않아요'라고 했는데 투자자들이 '괜찮아, 우리가 고칠 수 있어'라고 무시한 것.",
    paragraphs: [
      "WeWork의 IPO 준비 과정에서 다양한 외부 애널리스트·내부 실사팀이 코워킹 시장의 경쟁 심화, WeWork의 지속 가능한 경쟁 우위 부재, 부동산 임대 사이클 리스크를 경고했다. 그러나 $47B 밸류에이션 목표 하에서 이러한 경고들은 묻혔다.",
      "2019년 8월 S-1 공시 이후, 외부 투자자들이 사실상 CDD의 역할을 대신해 결론을 내렸다: '이 회사는 테크 기업이 아니라 단기 임대 부동산 기업이다.' 멀티플은 SaaS 25~30×에서 부동산 임대업 8~12×로 급락해야 했고, 기업가치는 적정 수준의 절반에도 미치지 못했다.",
      "IPO는 무산됐고, WeWork는 $1.7B의 구조 조정 패키지와 함께 SoftBank의 추가 지원을 받았다. 2023년 파산 신청.",
    ],
    lesson: "CDD의 독립성이 결과의 신뢰성을 결정한다. 딜 성사에 이해관계가 있는 팀이 CDD를 수행하면 경고 신호가 축소된다. 독립적 CDD팀이 '이 딜 안 된다'고 결론을 내릴 수 있어야 한다. 그 결론을 무시한 결과가 WeWork다.",
  },
];

// ── 관련 개념 ────────────────────────────────────────────────────
const RELATED = [
  { href: "/deal-101/fdd", title: "FDD (재무실사)", desc: "숫자의 정확성을 검증하는 실사 — CDD와 함께 실사의 양 기둥", badge: "실사" },
  { href: "/deal-101/ldd", title: "LDD (법률실사)", desc: "계약·IP·소송·규제 리스크 발굴 — 법적 부채를 사전에 파악", badge: "실사" },
  { href: "/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "CDD가 검증한 EBITDA 지속성이 가격 조정의 근거가 된다", badge: "Valuation" },
  { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "CDD는 Phase 4 실사 단계에서 수행된다", badge: "프로세스" },
];

export default function CddClient() {
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
              <span className="text-xs text-gray-400">CDD</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              실사
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              CDD (사업실사) 완전 정리
              <span className="block text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-400 mt-1">
                — 이 사업이 앞으로도 지속될 수 있는가
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              FDD가 "숫자가 맞는가"를 검증한다면, CDD는 "그 숫자가 앞으로도 만들어질 수 있는가"를 검증한다.
              시장 규모·경쟁 구도·고객 분석·수익 지속성·미래 성장 전망까지 — 5가지 핵심 검토 항목과 3개 케이스 스터디.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CHECK_ITEMS.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <a key={item.num} href={`#check-${item.num}`} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {item.num}. {item.subtitle}
                  </a>
                );
              })}
              <a href="#cases" className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                케이스 스터디
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: CDD란 무엇인가 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">CDD란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                M&A 실사(Due Diligence)에는 여러 종류가 있다. 재무실사(FDD)는 "과거 숫자가 맞는가"를 검증하고,
                법률실사(LDD)는 "법적 리스크가 없는가"를 확인한다. 그렇다면 CDD — 사업실사(Commercial Due Diligence)는 무엇을 검증하는가?
              </p>
              <p>
                CDD는 <strong className="text-gray-800 dark:text-gray-200">"이 사업이 앞으로도 유지될 수 있는가"</strong>를 묻는다.
                더 정확히는: IM에서 제시한 성장 가정이 현실적인가? 시장은 보유 기간 동안에도 성장하는가?
                경쟁사가 시장을 뺏어가지는 않는가? 고객이 이탈하지 않는가? 지금의 EBITDA가 3~5년 후에도 나올 수 있는가?
              </p>
              <p>
                수행자는 McKinsey·BCG·Bain 같은 전략 컨설팅사 또는 업종 전문 리서치사다.
                FDD 팀이 VDR의 재무 자료를 들여다보는 동안, CDD 팀은 외부에서 시장·고객·경쟁사를 직접 조사한다.
              </p>
            </div>

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                집을 살 때 외관과 인테리어(FDD: 마감재 품질, 누수 흔적 등)는 봤는데,
                이 동네 집값이 앞으로 오를 동네인지, 옆에 혐오 시설이 들어올 예정은 아닌지,
                주변 개발 계획은 어떻게 되는지 확인하는 것이 CDD다.
                집 자체가 멀쩡해도 동네가 쇠퇴한다면 구입 가격이 달라져야 한다.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 질문</p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed space-y-1 mt-1">
                <li>• IM에서 제시한 성장 가정이 현실적인가?</li>
                <li>• 시장은 PE 보유 기간(3~7년) 동안에도 성장하는가?</li>
                <li>• 경쟁사가 시장 점유율을 뺏어갈 가능성이 있는가?</li>
                <li>• 핵심 고객이 이탈할 위험이 있는가?</li>
                <li>• 현재의 EBITDA가 미래에도 재현될 수 있는 구조인가?</li>
              </ul>
            </div>
          </motion.section>

          {/* ── 섹션 2: 5가지 핵심 검토 항목 ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">CDD 핵심 검토 항목 5가지</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                업종마다 강조점이 다르지만, 아래 5가지는 어떤 딜에서도 CDD가 반드시 검토하는 영역이다.
              </p>
            </motion.div>

            <div className="space-y-10">
              {CHECK_ITEMS.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <motion.div
                    key={item.num}
                    id={`check-${item.num}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className={`rounded-xl border ${c.border} ${c.bg} p-5 mb-4`}>
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <span className={`text-xs font-bold ${c.text}`}>{item.num}</span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">{item.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>

                    <div className="space-y-2 mb-4">
                      {item.items.map((sub, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                          <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{sub.label}</span>
                            <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{item.insight}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 섹션 3: FDD vs CDD ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">FDD vs CDD — 무엇이 다른가</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              두 실사는 서로 독립적으로 진행되지만, 결과는 통합되어 최종 가격과 협상 전략에 반영된다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 w-1/4">구분</th>
                    <th className="text-left p-3 font-semibold text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 w-3/8">FDD (재무실사)</th>
                    <th className="text-left p-3 font-semibold text-rose-700 dark:text-rose-300 border-b border-gray-200 dark:border-gray-700 w-3/8">CDD (사업실사)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-transparent" : "bg-gray-50/50 dark:bg-gray-800/20"}>
                      <td className="p-3 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">{row.category}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">{row.fdd}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">{row.cdd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                FDD는 "이 식당의 지난 3년 매출·비용 장부가 정확한가"를 검증하고,
                CDD는 "이 식당이 있는 상권이 앞으로 3년 뒤에도 살아있을 상권인가,
                경쟁 식당이 옆에 새로 생기지 않는가, 단골 고객이 계속 올 것인가"를 검증한다.
                두 질문 모두 가격에 영향을 준다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 4: 이해관계자 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">이해관계자 & 역할</h2>
            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className={`inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 mb-1.5 ${c.badge}`}>{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 5: 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — CDD가 실패할 때 무슨 일이 생기나</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                세 가지 케이스 모두 CDD에서 발견됐어야 할 신호가 있었다. 왜 놓쳤는지, 그 결과가 어떻게 됐는지를 살펴본다.
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
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company} ({c_item.year})</p>
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>
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

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"cdd"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
