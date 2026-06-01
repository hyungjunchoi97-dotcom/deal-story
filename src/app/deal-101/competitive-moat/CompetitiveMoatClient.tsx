"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const COLOR_MAP: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  blue:    { bg: "bg-blue-50 dark:bg-blue-900/20",     border: "border-blue-200 dark:border-blue-800",     text: "text-blue-700 dark:text-blue-300",     badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",     dot: "bg-blue-500" },
  amber:   { bg: "bg-amber-50 dark:bg-amber-900/20",   border: "border-amber-200 dark:border-amber-800",   text: "text-amber-700 dark:text-amber-300",   badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",   dot: "bg-amber-500" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800", text: "text-emerald-700 dark:text-emerald-300", badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  rose:    { bg: "bg-rose-50 dark:bg-rose-900/20",     border: "border-rose-200 dark:border-rose-800",     text: "text-rose-700 dark:text-rose-300",     badge: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",     dot: "bg-rose-500" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-900/20", border: "border-violet-200 dark:border-violet-800", text: "text-violet-700 dark:text-violet-300", badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  indigo:  { bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-200 dark:border-indigo-800", text: "text-indigo-700 dark:text-indigo-300", badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300", dot: "bg-indigo-500" },
  sky:     { bg: "bg-sky-50 dark:bg-sky-900/20",       border: "border-sky-200 dark:border-sky-800",       text: "text-sky-700 dark:text-sky-300",       badge: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",       dot: "bg-sky-500" },
  orange:  { bg: "bg-orange-50 dark:bg-orange-900/20", border: "border-orange-200 dark:border-orange-800", text: "text-orange-700 dark:text-orange-300", badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300", dot: "bg-orange-500" },
};

// ── 해자 5가지 유형 ──────────────────────────────────────────────
const MOAT_TYPES = [
  {
    id: "network",
    label: "네트워크 효과",
    subtitle: "Network Effects",
    color: "blue",
    strength: "가장 강력",
    description: "사용자가 많을수록 서비스 가치가 증가하는 효과. 경쟁자가 사용자를 빼앗기 전까지 격차가 점점 벌어진다. 디지털 시대 가장 강력한 해자로 평가된다.",
    examples: ["Visa / Mastercard — 가맹점이 많을수록 카드 가치 증가", "Meta — 친구가 많을수록 플랫폼 이탈 비용 증가", "Airbnb — 호스트와 여행자가 많을수록 더 좋은 매칭"],
    weakness: "임계점 미달 시 역방향 작동 — 경쟁 플랫폼이 더 많은 사용자를 확보하면 전환이 가속화될 수 있다.",
  },
  {
    id: "switching",
    label: "전환 비용",
    subtitle: "Switching Costs",
    color: "violet",
    strength: "강력",
    description: "경쟁사 제품으로 이전할 때 발생하는 비용·시간·리스크가 높아 고객이 남아 있는 구조. 소프트웨어, 금융, 의료 분야에서 특히 강하다.",
    examples: ["Salesforce CRM — 수년간 축적된 영업 데이터를 이전하기 어려움", "Oracle DB — 데이터베이스 마이그레이션은 수개월+수십억 원 규모", "Adobe CC — 워크플로와 파일 형식이 이미 Adobe에 종속"],
    weakness: "기술 패러다임이 바뀌면 전환 비용이 리셋될 수 있다. 클라우드 전환이 기존 온프레미스 소프트웨어의 전환 비용을 낮춘 것처럼.",
  },
  {
    id: "cost",
    label: "비용 우위",
    subtitle: "Cost Advantage",
    color: "emerald",
    strength: "중간~강력",
    description: "규모의 경제 또는 독점적 자원 접근으로 경쟁사보다 구조적으로 낮은 원가를 유지하는 능력. 같은 가격이면 더 높은 마진, 같은 마진이면 더 낮은 가격으로 경쟁할 수 있다.",
    examples: ["Amazon 물류 네트워크 — 자체 물류 인프라로 배송 비용이 경쟁사 대비 30~50% 낮음", "Walmart 구매력 — 대량 구매로 공급사 대비 협상력 우위", "Texas Instruments — 독점 생산 공정으로 경쟁사 대비 원가 우위"],
    weakness: "기술 혁신으로 비용 구조 자체가 변화할 수 있다. 전통 물류 대비 드론 배송이 실용화되면 기존 물류 인프라 우위가 약화될 수 있다.",
  },
  {
    id: "intangible",
    label: "무형자산",
    subtitle: "Intangible Assets",
    color: "amber",
    strength: "업종 따라 다름",
    description: "브랜드, 특허, 규제 인허가 등 경쟁자가 돈을 들여도 단기간에 복제할 수 없는 자산. 럭셔리 브랜드의 아스피레이션 가치, 제약사 특허, 금융 라이선스가 대표적이다.",
    examples: ["LVMH 럭셔리 브랜드 — 수십 년 역사와 희소성 인식은 광고비로 복제 불가", "제약사 특허 — 특허 기간 동안 독점 판매권 보장", "은행·증권 인허가 — 새 진입자가 동일한 규제 허가를 받으려면 수년 소요"],
    weakness: "특허 만료, 브랜드 실추 사건, 규제 환경 변화에 취약. Kodak의 브랜드 해자는 디지털 전환 앞에서 무력화됐다.",
  },
  {
    id: "scale",
    label: "효율적 규모",
    subtitle: "Efficient Scale",
    color: "sky",
    strength: "틈새 시장에서 강력",
    description: "시장 규모가 제한적이어서 추가 진입자가 수익을 낼 수 없는 구조. 현재 기업이 시장 수요를 충분히 공급하고 있어 새 경쟁자가 진입해도 모두에게 수익이 남지 않는다.",
    examples: ["지역 독점 공항 — 도시에 공항이 하나면 두 번째 공항은 수익성이 없음", "지역 케이블 회사 — 같은 지역에 두 번째 케이블 인프라 구축은 비경제적", "의료폐기물 처리 업체 — 지역 규제 인허가 + 소규모 시장"],
    weakness: "기술 변화나 시장 확대로 새로운 진입 방식이 생기면 해자가 약화될 수 있다. 케이블 TV의 효율적 규모 해자는 스트리밍으로 일부 무력화됐다.",
  },
];

// ── 해자 강도별 밸류에이션 범위 ──────────────────────────────────
const VALUATION_BANDS = [
  { moat: "해자 없음 (No Moat)", multiple: "4~8x", color: "rose", risk: "경쟁 심화 시 이익 소멸 위험 높음", example: "일반 제조업, 소매업" },
  { moat: "좁은 해자 (Narrow Moat)", multiple: "8~14x", color: "amber", risk: "단기~중기 경쟁 우위, 5~10년 지속 가능", example: "지역 강자, 특정 틈새 브랜드" },
  { moat: "넓은 해자 (Wide Moat)", multiple: "15~25x+", color: "emerald", risk: "10년 이상 지속 가능한 경쟁 우위", example: "Visa, LVMH, Google, Oracle" },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    title: "Danaher — 해자 있는 기업만 인수하는 M&A 머신",
    dealValue: "누적 수십조 원",
    type: "PE+전략 하이브리드 성공",
    typeColor: "emerald",
    analogy: "Danaher는 중고 고성능 엔진을 찾아 분해한 다음, DBS라는 툴킷으로 각 부품을 더 정밀하게 재조립한다. 엔진 성능(해자)이 없으면 아예 구매하지 않는다.",
    paragraphs: [
      "Danaher Business System(DBS)은 도요타 생산 방식(Lean)에서 영감을 받은 Danaher만의 운영 체계다. 인수 후 이를 적용해 해자를 더 강화하는 것이 핵심이다. Beckman Coulter(의료기기, $6.8B), Pall Corporation(여과기, $13.8B), Cytiva(바이오 제조, GE로부터 $21.4B) 등 모두 고객 전환 비용이 극히 높은 과학·의료 장비 기업이다.",
      "공통점은 명확하다. 한번 도입하면 교체가 거의 불가능한 전환 비용 해자다. 실험실에 Beckman Coulter 분석기가 설치되면, 교정·소모품·소프트웨어 생태계 전체가 그 기기에 종속된다. Danaher는 이 구조를 DBS로 더 촘촘하게 만든다.",
      "결과: 1984~2023년 연평균 수익률 약 20%+ (S&P500의 3배 이상). '해자 기업만 인수 + DBS로 해자 강화'라는 반복 가능한 M&A 성공 공식을 40년간 실행한 결과다.",
    ],
    lesson: "M&A 성공의 핵심은 '좋은 기업을 얼마나 잘 통합하는가'가 아니라 '처음부터 해자 있는 기업을 고르는가'다. Danaher는 이를 투자 프로세스의 최우선 조건으로 만들었다.",
    moatType: "전환 비용 해자 중심",
    moatColor: "violet",
  },
  {
    title: "LVMH의 럭셔리 브랜드 제국 — 무형자산 해자의 집합체",
    dealValue: "Tiffany $15.8B (2020) 포함 수십조 원",
    type: "무형자산 해자 구축",
    typeColor: "amber",
    analogy: "LVMH는 희귀한 와인 빈티지를 모으는 컬렉터다. 그 빈티지는 돈을 아무리 써도 복제할 수 없고, 시간이 지날수록 가치가 올라간다. 그걸 알기에 경제 위기 때도 망설이지 않고 매입한다.",
    paragraphs: [
      "LVMH가 인수한 브랜드들 — Louis Vuitton, Dior, Bulgari($4.3B), TAG Heuer, Tiffany & Co.($15.8B, 2020) — 은 모두 수십 년 역사, 희소성 인식, 아스피레이션 가치라는 공통된 해자를 가진다. 이 해자는 광고비를 아무리 써도 단기간에 복제가 불가능하다.",
      "Tiffany 인수 포인트: 코로나 팬데믹 중에 $15.8B를 지불했다. 당시 시장의 우려와 달리, LVMH는 중국 럭셔리 소비의 구조적 성장과 Tiffany 브랜드의 미국·아시아 프리미엄을 장기적으로 계산했다. 럭셔리 브랜드 해자는 경제 위기에도 가격 결정력을 유지한다.",
      "결과: LVMH 2022년 매출 €79.2B, 영업이익 €21.1B(영업이익률 약 26%). 럭셔리 해자의 수익성을 증명하는 숫자다. 불황에도 가격을 낮추지 않아도 되는 브랜드 파워 = 방어적 해자 + 공격적 확장의 동시 구현.",
    ],
    lesson: "무형자산 해자(브랜드)는 경제 위기에 가장 빛난다. 해자 없는 기업은 불황에 가격을 낮춰 이익이 줄지만, 강력한 브랜드 해자를 가진 기업은 가격을 유지하거나 오히려 올린다. M&A에서 브랜드 해자의 진짜 가치는 경기 하락기에 비로소 드러난다.",
    moatType: "무형자산 해자 (브랜드)",
    moatColor: "amber",
  },
];

export default function CompetitiveMoatClient() {
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
              <span className="text-xs text-gray-400">전략</span>
            </div>
            <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1 mb-4">
              전략
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              경쟁 해자 — M&A 밸류에이션 멀티플을 결정하는 핵심
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              버핏이 말하는 해자의 개념, 5가지 해자 유형(네트워크 효과·전환 비용·비용 우위·무형자산·효율적 규모), 해자 강도와 EV/EBITDA 배수의 관계, Danaher·LVMH 케이스 스터디.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "경쟁 해자란?", color: "emerald" },
                { href: "#moat-types", label: "해자 5가지 유형", color: "blue" },
                { href: "#valuation", label: "해자와 밸류에이션", color: "violet" },
                { href: "#cases", label: "케이스 스터디", color: "amber" },
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

          {/* ── 1. 경쟁 해자란 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">경쟁 해자란</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                경쟁 해자(Competitive Moat)란 <strong className="text-gray-800 dark:text-gray-200">경쟁자가 쉽게 모방할 수 없는 지속 가능한 경쟁 우위</strong>를 뜻한다. 워런 버핏이 대중화한 개념으로, 그는 "훌륭한 기업이란 성 주위에 해자가 있어 경쟁자가 쉽게 침입할 수 없는 기업"이라고 정의했다.
              </p>
              <p>
                M&A에서 해자가 중요한 이유는 단순하다. 해자의 깊이가 밸류에이션 멀티플을 결정하기 때문이다. 해자 없는 기업은 경쟁이 심화될수록 이익이 잠식되어 낮은 배수를 받는다. 반면 넓은 해자를 가진 기업은 경쟁자가 이익을 침식하기 어렵기 때문에, 투자자와 인수자 모두 더 높은 배수를 기꺼이 지불한다.
              </p>
              <p>
                전략적 인수자는 "인수 후에도 이 기업의 이익이 지속될 수 있는가?"를 묻는다. PE는 "출구 시점(5~7년 후)에도 이 기업의 경쟁력이 유지되는가?"를 묻는다. 두 질문 모두 해자 분석이 출발점이다.
              </p>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                강을 건너는 다리가 하나뿐인 마을에서 그 다리를 소유한 기업 — 경쟁자가 새 다리를 놓기 전까지 통행료를 계속 받을 수 있다. 새 다리를 놓는 데 20년이 걸린다면, 그 기업은 20년간 통행료를 독점한다. 그 기간이 길수록 더 높은 인수 프리미엄이 정당화된다.
              </p>
            </div>

            {/* 인사이트 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Morningstar는 기업 해자를 공식적으로 No Moat / Narrow Moat / Wide Moat 세 등급으로 평가한다. Wide Moat 등급 기업은 10년 이상 초과 수익(ROIC &gt; WACC)을 유지할 수 있다고 판단된 기업이다. 이 분류는 M&A 밸류에이션에서 직접 참조된다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 해자 5가지 유형 ── */}
          <motion.section id="moat-types" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">경쟁 해자의 5가지 유형</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              버핏의 개념을 Morningstar가 체계화한 분류다. 실제 M&A 실사에서 이 5가지 유형을 기준으로 해자의 존재 여부와 강도를 평가한다.
            </p>

            <div className="space-y-4">
              {MOAT_TYPES.map((moat) => {
                const c = COLOR_MAP[moat.color];
                return (
                  <div key={moat.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{moat.label}</h3>
                        <span className={`text-xs font-medium ${c.text}`}>{moat.subtitle}</span>
                      </div>
                      <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                        강도: {moat.strength}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{moat.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">대표 사례</h4>
                        <ul className="space-y-1">
                          {moat.examples.map((ex, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">약점 / 위협</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{moat.weakness}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. 해자와 밸류에이션 ── */}
          <motion.section id="valuation" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">해자와 M&A 밸류에이션의 관계</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              해자 강도는 EV/EBITDA 배수에 직접 반영된다. 아래는 업종 조정 없이 해자 강도만을 기준으로 한 참고 범위이며, 실제 거래에서는 업종·성장률·금리 환경에 따라 달라진다.
            </p>

            <div className="space-y-3">
              {VALUATION_BANDS.map((band, i) => {
                const c = COLOR_MAP[band.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} ${c.bg} p-4 flex items-start gap-4`}>
                    <div className={`shrink-0 rounded-lg px-3 py-2 text-center min-w-[72px] bg-white/60 dark:bg-gray-900/40 border ${c.border}`}>
                      <p className={`text-sm font-bold ${c.text}`}>{band.multiple}</p>
                      <p className={`text-[10px] mt-0.5 ${c.text} opacity-80`}>EV/EBITDA</p>
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${c.text} mb-1`}>{band.moat}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{band.risk}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">예시: {band.example}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                전략적 인수자의 해자 분석 목적은 "인수 후에도 이 기업의 이익이 지속될 수 있는가?"다. PE의 목적은 "출구 시점(5~7년 후)에도 이 기업의 경쟁력이 유지되는가?"다. 두 관점 모두 인수 가격(EV/EBITDA 배수)에 직접 반영되기 때문에, 해자 분석은 밸류에이션 모델의 전제 조건이다.
              </p>
            </div>

            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                해자 없는 기업에 높은 배수를 지불하는 건, 잠금장치 없는 금고에 돈을 넣는 것과 같다. 지금은 돈이 있지만, 경쟁자가 들어오면 빠져나간다. 넓은 해자를 가진 기업에 높은 배수를 지불하는 건, 철제 금고에 돈을 넣는 것이다. 열기 어렵지만 안에 있는 건 오래 유지된다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 해자 M&A의 두 공식</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Danaher는 전환 비용 해자를 체계적으로 찾아 인수하고 DBS로 강화한다. LVMH는 브랜드(무형자산) 해자를 인수해 포트폴리오로 묶는다. 서로 다른 해자 유형, 하지만 공통된 원칙 — 해자 없는 기업은 인수하지 않는다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const moatC = COLOR_MAP[caseItem.moatColor];
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
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${typeC.badge}`}>
                          {caseItem.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{caseItem.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">딜 규모: {caseItem.dealValue}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${moatC.bg} ${moatC.text} border ${moatC.border}`}>
                        🏰 {caseItem.moatType}
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

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/platform-strategy", title: "플랫폼 전략", desc: "네트워크 효과 해자가 플랫폼 M&A 프리미엄을 만드는 메커니즘.", badge: "전략" },
                { href: "/deal-101/synergy", title: "시너지", desc: "해자 기업 인수 후 시너지 실현 가능성 — Cost vs Revenue.", badge: "밸류에이션" },
                { href: "/deal-101/ev-ebitda", title: "EV/EBITDA 멀티플", desc: "해자 강도에 따라 멀티플이 어떻게 달라지는가.", badge: "밸류에이션" },
                { href: "/deal-101/strategic-ma", title: "전략적 M&A", desc: "해자 확보를 목적으로 하는 전략적 인수의 의사결정 구조.", badge: "전략" },
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
        <LikeButton slug={"competitive-moat"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
