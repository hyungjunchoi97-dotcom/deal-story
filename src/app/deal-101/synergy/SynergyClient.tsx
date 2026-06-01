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

// ── 컬러 맵 ─────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",    border: "border-blue-200 dark:border-blue-800",    bg: "bg-blue-50 dark:bg-blue-900/20",    text: "text-blue-700 dark:text-blue-300",    dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",  border: "border-amber-200 dark:border-amber-800",  bg: "bg-amber-50 dark:bg-amber-900/20",  text: "text-amber-700 dark:text-amber-300",  dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",    border: "border-rose-200 dark:border-rose-800",    bg: "bg-rose-50 dark:bg-rose-900/20",    text: "text-rose-700 dark:text-rose-300",    dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",    border: "border-teal-200 dark:border-teal-800",    bg: "bg-teal-50 dark:bg-teal-900/20",    text: "text-teal-700 dark:text-teal-300",    dot: "bg-teal-500" },
};

// ── 시너지 타입 데이터 ──────────────────────────────────────────
const SYNERGY_TYPES = [
  {
    id: "cost",
    label: "Cost Synergy",
    subtitle: "비용 시너지 — 예측 가능한 절감",
    color: "emerald",
    likelihood: "높음",
    timeline: "1~3년",
    kpi: "EBITDA 마진 개선폭, 비용 절감액",
    description:
      "합병 후 중복된 인력·시설·시스템을 통합하거나 구매 규모의 경제를 활용해 비용을 줄이는 효과다. 통상 숫자로 구체화하기 쉽고, 경영진이 통제할 수 있어 실현 가능성이 높다.",
    examples: [
      "본사 통합 → 임대료·관리비 절감",
      "중복 ERP·IT 시스템 제거",
      "공동 조달(Procurement)로 원가율 개선",
      "영업·마케팅 팀 중복 인원 정리",
    ],
    risks: [
      "통합 과정에서 핵심 인력 이탈",
      "시스템 통합 비용이 절감액을 초과하는 경우",
      "조직 저항으로 통합 지연",
    ],
  },
  {
    id: "revenue",
    label: "Revenue Synergy",
    subtitle: "매출 시너지 — 낙관적이지만 불확실한 성장",
    color: "violet",
    likelihood: "낮음~중간",
    timeline: "3~7년",
    kpi: "추가 매출, 교차판매율, 신규 시장 점유율",
    description:
      "합병으로 새로운 고객에게 기존 제품을 팔거나, 기존 고객에게 새 제품을 교차 판매하고, 새 시장에 진입하는 효과다. 이론적으로는 가장 매력적이지만 실현 난이도가 가장 높다. 고객은 당신의 합병에 관심이 없다.",
    examples: [
      "Microsoft × LinkedIn: Azure 영업에 LinkedIn 인적 네트워크 활용",
      "교차 판매(Cross-selling): A사 고객에게 B사 제품 추가 판매",
      "번들링(Bundling): 두 제품을 묶어 할인 제공",
      "신시장 진입: 인수 대상의 유통망 활용",
    ],
    risks: [
      "고객은 합병에 관심 없다 — 오히려 합병 혼란 중 이탈",
      "영업 문화가 달라 교차 판매가 작동 안 함",
      "규제로 인해 번들링·독점 행위 제한",
    ],
  },
];

// ── 시너지 타임라인 ──────────────────────────────────────────────
const TIMELINE = [
  { period: "Day 1", label: "즉시 효과", color: "blue", items: ["브랜드 통합 발표", "중복 계약 검토 시작", "퀵윈(Quick Wins) 항목 리스트화"] },
  { period: "Year 1", label: "초기 통합", color: "emerald", items: ["조직 통합 완료", "코스트 시너지 50% 달성", "중복 인력·시설 정리"] },
  { period: "Year 2~3", label: "풀 코스트 시너지", color: "amber", items: ["코스트 시너지 완전 실현", "레버뉴 시너지 시작 단계", "IT·시스템 통합 완료"] },
  { period: "Year 3+", label: "레버뉴 시너지", color: "violet", items: ["교차판매 성과 가시화", "신규 시장 점유율 확인", "실현되면 운이 좋은 것"] },
];

// ── 실패 원인 ────────────────────────────────────────────────────
const FAILURE_REASONS = [
  { icon: "💸", title: "통합 비용 과소 추정", desc: "Integration Cost가 절감액을 훌쩍 초과. IT 시스템 마이그레이션, 퇴직금, 컨설팅 비용이 눈덩이처럼 불어난다.", color: "rose" },
  { icon: "🚪", title: "핵심 인력 이탈", desc: "불확실성 속에 가장 실력 있는 사람이 먼저 나간다. 그들이 만들어내던 가치도 함께 사라진다.", color: "amber" },
  { icon: "⚔️", title: "문화 충돌", desc: "'우리'와 '그들'의 경계. 통합되지 않은 두 문화는 시너지를 만들기는커녕 서로를 갉아먹는다.", color: "violet" },
  { icon: "🏃", title: "고객 이탈", desc: "합병 혼란 속에서 경쟁사로 떠나는 고객. 특히 레버뉴 시너지를 기대했던 고객층이 가장 먼저 이탈한다.", color: "blue" },
  { icon: "📈", title: "과도한 인수 프리미엄", desc: "시너지를 인수 가격에 이미 다 반영했다면, 실현 못 했을 때 주주가 손실을 전부 떠안는다.", color: "emerald" },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    company: "Disney × Pixar (2006)",
    dealValue: "$7.4B",
    type: "성공한 시너지",
    typeColor: "emerald",
    analogy: "재능 있는 요리사를 데려오되, 그의 레시피는 건드리지 않았다. 주방 운영의 자유를 주면서도 Disney의 유통 파이프라인을 연결했다.",
    paragraphs: [
      "2006년 Disney는 Pixar를 $7.4B에 인수했다. 당시 Disney 자체 애니메이션은 침체기였고, Pixar는 '니모를 찾아서', '인크레더블' 등으로 연속 흥행을 기록하고 있었다. 인수의 핵심은 Pixar의 스토리 개발 철학과 기술력을 Disney에 이식하는 것이었다.",
      "Disney는 Pixar의 독립성을 철저히 유지했다. Pixar의 공동창업자 존 래세터(John Lasseter)가 Disney 애니메이션 스튜디오까지 총괄하게 되면서 창의적 DNA가 역수입됐다. 이후 '업(Up)', '코코(Coco)', '인사이드 아웃(Inside Out)', '토이 스토리 3' 등이 연속 흥행하며 Disney 애니메이션 자체도 부활했다.",
      "결과: 인수 이후 Pixar 영화들의 누적 흥행 수입은 수십조원을 넘었다. $7.4B는 역대 M&A 중 가장 가치 있는 거래 중 하나로 평가된다. 레버뉴 시너지의 교과서적 성공 사례.",
    ],
    lesson: "창의적 시너지는 문화 독립성을 유지할 때 실현된다. 인수자가 '우리 방식대로 바꿔'라고 했다면 Pixar는 Pixar가 아니었을 것이다. 피인수 기업의 핵심 역량이 '사람과 문화'라면, 통합은 최소화해야 한다.",
    synergyType: "레버뉴 시너지 주도",
    synergyColor: "violet",
  },
  {
    company: "AOL × Time Warner (2001)",
    dealValue: "$165B",
    type: "실패한 시너지",
    typeColor: "rose",
    analogy: "인터넷 회사와 TV 방송사가 합치면 '미디어 슈퍼파워'가 될 거라 믿었는데, 실제로는 두 조직의 DNA가 완전히 달랐다. 피자 가게와 패스트푸드 체인이 합쳤는데 메뉴도 주방도 고객도 달랐던 것과 같다.",
    paragraphs: [
      "2001년 초, 닷컴 버블의 정점에서 AOL은 Time Warner를 $165B에 인수했다. 역대 최대 M&A였다. 스토리는 완벽해 보였다: AOL의 인터넷 플랫폼 + Time Warner의 CNN·HBO·워너뮤직 콘텐츠 = 디지털 미디어 제국. 시너지 추정치는 수십억 달러였다.",
      "현실은 달랐다. 닷컴 버블이 붕괴하면서 AOL의 사업 모델 자체가 흔들렸다. 두 조직의 문화 충돌은 극심했다 — AOL의 인터넷 스타트업 문화와 Time Warner의 전통 미디어 기업 문화는 끝내 융합되지 않았다. 예상한 시너지는 거의 실현되지 않았고, 2002년 한 해에만 $99B의 손실을 상각했다.",
      "결말: 2009년 AOL은 Time Warner로부터 분리됐다. $165B짜리 역대 최대 딜은 역대 최대 실패로 기록됐다. 합병 당시 논리적으로 그럴듯했던 '디지털+콘텐츠' 시너지가 실제로는 기술 변화 속도와 문화 차이를 극복하지 못했다.",
    ],
    lesson: "시너지 스토리는 논리적으로 들려도 실제 실현은 전혀 다른 문제다. 특히 기술 변화 속도가 빠른 산업에서 '미래 시너지'는 과대평가되기 쉽다. 버블 정점의 고평가된 주식으로 인수하고, 문화 통합 계획 없이 규모만 키웠을 때의 결과다.",
    synergyType: "예상: 레버뉴 시너지 | 실현: 없음",
    synergyColor: "rose",
  },
  {
    company: "Daimler × Chrysler (1998~2007)",
    dealValue: "$36B",
    type: "문화 충돌로 실패",
    typeColor: "amber",
    analogy: "독일 장인이 만든 고급 주방 칼 브랜드와 미국 대량 생산 주방 도구 회사가 합쳤더니, 서로의 품질 기준과 생산 방식이 너무 달라 시너지는커녕 두 브랜드 모두 희석됐다.",
    paragraphs: [
      "1998년 Daimler-Benz는 Chrysler를 $36B에 합병했다. 명분은 화려했다: 기술 이전, 부품 공유, 글로벌 유통망 시너지. 독일의 엔지니어링 명가와 미국의 대중차 1위의 결합으로 글로벌 자동차 제국을 만들겠다는 구상이었다.",
      "현실에서 두 회사는 좀처럼 하나가 되지 않았다. Daimler의 독일식 엔지니어링 완벽주의 문화와 Chrysler의 미국식 비용 효율 중심 문화는 매 의사결정마다 충돌했다. 기대했던 부품 공유는 품질 기준 차이로 제한됐고, 핵심 임원들이 대거 이탈했다. 예상한 코스트·레버뉴 시너지는 거의 실현되지 않았다.",
      "결말: 2007년 Daimler는 Chrysler를 사모펀드 Cerberus Capital에 단 $7.4B에 매각했다. $36B에 사서 $7.4B에 판 것이다. 약 $29B의 가치가 9년 만에 사라졌다. 이후 Chrysler는 Fiat에 인수됐고, Daimler는 현재 Mercedes-Benz로 독립 운영된다.",
    ],
    lesson: "Cost Synergy보다, Revenue Synergy보다, 문화 통합(Cultural Integration)이 가장 어렵고 가장 중요하다. 시너지 모델의 숫자가 그럴듯해도, 두 조직이 함께 일하는 방식이 다르면 그 숫자는 실현되지 않는다. DD 단계에서 재무 실사만큼 문화 실사(Cultural Due Diligence)도 필요하다.",
    synergyType: "예상: 코스트+레버뉴 시너지 | 실현: 없음",
    synergyColor: "rose",
  },
];

// ── 시너지 분석 프레임워크 표 ─────────────────────────────────────
const FRAMEWORK_TABLE = [
  { category: "실현 가능성", cost: "높음", revenue: "낮음~중간" },
  { category: "타임라인", cost: "1~3년", revenue: "3~7년" },
  { category: "측정 방법", cost: "EBITDA 마진 개선폭", revenue: "추가 매출, 교차판매율" },
  { category: "주요 리스크", cost: "인력 이탈, 통합 비용 초과", revenue: "고객 이탈, 문화 충돌" },
  { category: "경영진 통제 가능성", cost: "상대적으로 높음", revenue: "낮음" },
  { category: "M&A 프리미엄 반영", cost: "통상 50~70% 반영", revenue: "애널리스트마다 다름, 과대평가 위험" },
];

export default function SynergyClient() {
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
              <span className="text-xs text-gray-400">시너지</span>
            </div>
            <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1 mb-4">
              밸류에이션
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              시너지 — M&A 인수 프리미엄의 근거
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Cost Synergy vs Revenue Synergy, 왜 70%의 M&A가 시너지를 달성 못 하는가, Disney×Pixar·AOL×Time Warner·Daimler×Chrysler 케이스 스터디.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "시너지란?", color: "blue" },
                { href: "#types", label: "Cost vs Revenue", color: "emerald" },
                { href: "#timeline", label: "실현 타임라인", color: "amber" },
                { href: "#why-fail", label: "왜 실패하나", color: "rose" },
                { href: "#cases", label: "케이스 스터디", color: "violet" },
                { href: "#framework", label: "분석 프레임워크", color: "teal" },
              ].map((nav) => {
                const c = COLOR_MAP[nav.color];
                return (
                  <a key={nav.href} href={nav.href} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {nav.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 1. 시너지란 무엇인가 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">시너지란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                시너지(Synergy)는 <strong className="text-gray-800 dark:text-gray-200">합병 후 기업 가치가 각각의 기업 가치 합산보다 크다</strong>는 개념이다.
                M&A 세계에서 "1+1=3"의 경제학이다. 인수자가 시장 가격 이상의 프리미엄을 지불할 수 있는 논리적 근거가 바로 시너지다.
              </p>
              <p>
                M&A 가격 공식으로 표현하면:
              </p>
            </div>

            {/* 공식 박스 */}
            <div className="mt-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-3">📐 M&A 가격 공식</p>
              <div className="text-center space-y-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  인수 가격 = 스탠드얼론 가치 + 시너지 현재가치 − 통합 비용
                </p>
                <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span><span className="font-medium text-gray-700 dark:text-gray-300">스탠드얼론 가치</span> = 합병 없이도 존재하는 가치 (DCF, EV/EBITDA)</span>
                  <span><span className="font-medium text-gray-700 dark:text-gray-300">시너지 현재가치</span> = 합병으로 추가되는 미래 가치의 현재가</span>
                  <span><span className="font-medium text-gray-700 dark:text-gray-300">통합 비용</span> = 시스템 통합, 구조조정, 컨설팅 등 비용</span>
                </div>
              </div>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                두 식당이 합쳐지면 — 주방 하나를 줄이고(비용 시너지), 메뉴를 교차 판매하고(매출 시너지), 식재료 구매력도 커진다(비용 시너지). 단, 두 식당의 요리 철학이 달라 충돌하면 그 시너지는 실현되지 않는다.
              </p>
            </div>

            {/* 인사이트 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                인수 프리미엄(Acquisition Premium)은 평균적으로 대상 기업 주가 대비 20~40%에 달한다. 이 프리미엄을 정당화하는 유일한 논거가 시너지다. 시너지가 실현되지 않으면, 인수자의 주주는 그 프리미엄만큼 손해를 본다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. Cost vs Revenue Synergy ── */}
          <motion.section id="types" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Cost Synergy vs Revenue Synergy</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              시너지는 크게 두 가지로 나뉜다. 비용을 줄이는 코스트 시너지와 매출을 키우는 레버뉴 시너지. 두 가지 모두 인수 프리미엄을 정당화하는 데 사용되지만, 실현 가능성과 타임라인이 크게 다르다.
            </p>

            <div className="space-y-6">
              {SYNERGY_TYPES.map((type) => {
                const c = COLOR_MAP[type.color];
                return (
                  <div key={type.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <span className={`text-xs font-bold ${c.text}`}>{type.label}</span>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">{type.subtitle}</h3>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                          실현 가능성: {type.likelihood}
                        </span>
                        <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                          ⏱ {type.timeline}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{type.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* 예시 */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">실제 예시</h4>
                        <ul className="space-y-1">
                          {type.examples.map((ex, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* 리스크 */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">주요 리스크</h4>
                        <ul className="space-y-1">
                          {type.risks.map((risk, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-rose-400" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">KPI: </span>{type.kpi}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. 시너지 실현 타임라인 ── */}
          <motion.section id="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">시너지는 언제 실현되는가 — 타임라인</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              시너지는 딜 클로징 즉시 나타나지 않는다. 실현 타임라인을 현실적으로 이해하는 것이 인수 가격 산정의 핵심이다.
            </p>

            <div className="space-y-3">
              {TIMELINE.map((phase) => {
                const c = COLOR_MAP[phase.color];
                return (
                  <div key={phase.period} className="flex gap-4 items-start p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
                    <div className={`shrink-0 rounded-lg px-3 py-2 text-center min-w-[72px] ${c.bg} border ${c.border}`}>
                      <p className={`text-xs font-bold ${c.text}`}>{phase.period}</p>
                      <p className={`text-[10px] mt-0.5 ${c.text} opacity-80`}>{phase.label}</p>
                    </div>
                    <ul className="space-y-1 pt-1">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                두 회사의 합병은 두 사람의 결혼과 같다. 결혼 당일(Day 1)부터 시너지가 나오는 게 아니라, 같이 살면서(Year 1~3) 서로의 장점이 섞이고 습관이 합쳐질 때 비로소 함께하는 효과가 나온다. 레버뉴 시너지는 아이가 생기는 것처럼 — 계획할 수는 있지만 보장은 없다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 왜 70%가 실패하는가 ── */}
          <motion.section id="why-fail" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">왜 시너지의 70%는 실현되지 않는가</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              통계적으로 M&A의 70~80%가 기대한 시너지를 달성하지 못한다. 그 이유는 단 하나가 아니라, 여러 원인이 복합적으로 작용한다.
            </p>

            <div className="space-y-3">
              {FAILURE_REASONS.map((reason, i) => {
                const c = COLOR_MAP[reason.color];
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
                    <div className="shrink-0 text-2xl">{reason.icon}</div>
                    <div>
                      <h3 className={`text-sm font-bold ${c.text} mb-1`}>{reason.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                시너지 실패의 가장 근본 원인은 "시너지를 DCF 모델에 넣을 수 있다"는 착각이다. 모델에서 숫자로 표현되는 순간, 그 숫자는 진짜처럼 느껴진다. 하지만 시너지는 사람이 만들고 문화가 실현하는 것이다. 스프레드시트의 숫자가 아니라, 합병 후 두 조직이 실제로 어떻게 함께 일하는가의 문제다.
              </p>
            </div>
          </motion.section>

          {/* ── 5. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 시너지가 성공하고 실패하는 이유</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                같은 '시너지 논리'를 가진 딜도 결과는 천차만별이다. Disney×Pixar의 성공, AOL×Time Warner의 역대급 실패, Daimler×Chrysler의 문화 충돌을 통해 시너지 실현의 조건을 확인해보자.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const synergyC = COLOR_MAP[caseItem.synergyColor];
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
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${typeC.badge}`}>
                          {caseItem.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{caseItem.company}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">인수가: {caseItem.dealValue}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${synergyC.bg} ${synergyC.text} border ${synergyC.border}`}>
                        📊 {caseItem.synergyType}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* 비유 */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{caseItem.analogy}</p>
                      </div>

                      {/* 본문 */}
                      <div className="space-y-3">
                        {caseItem.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* 교훈 */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{caseItem.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 6. 시너지 분석 프레임워크 ── */}
          <motion.section id="framework" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">시너지 분석 프레임워크 요약</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              실제 M&A 분석에서 시너지를 평가할 때 사용하는 비교 프레임워크다.
            </p>

            {/* 테이블 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">구분</th>
                    <th className="text-left text-xs font-bold text-emerald-700 dark:text-emerald-300 px-4 py-3 w-1/3">Cost Synergy</th>
                    <th className="text-left text-xs font-bold text-violet-700 dark:text-violet-300 px-4 py-3 w-1/3">Revenue Synergy</th>
                  </tr>
                </thead>
                <tbody>
                  {FRAMEWORK_TABLE.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.category}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.cost}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                투자은행이 LOI/SPA 단계에서 시너지를 모델에 반영할 때, 코스트 시너지는 보수적으로 전부 반영하고 레버뉴 시너지는 50~70% 할인해 반영하는 것이 업계 관행이다. 레버뉴 시너지를 100% 반영하면 과도한 인수 프리미엄을 지불할 위험이 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/ev-ebitda", title: "EV/EBITDA 멀티플", desc: "시너지로 개선된 EBITDA가 가치평가 멀티플에 어떻게 반영되는가", badge: "Valuation" },
                { href: "/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "시너지 반영 후 정상화된 EBITDA — M&A 가격 산정의 핵심", badge: "Valuation" },
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "DD와 SPA 협상에서 시너지 추정치가 어떻게 사용되는가", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"synergy"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
