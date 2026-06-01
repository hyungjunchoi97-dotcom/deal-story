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

// ── FDD 5가지 핵심 작업 ─────────────────────────────────────────
const FDD_TASKS = [
  {
    num: "01",
    title: "Quality of Earnings (QoE) 분석",
    color: "rose",
    desc: "IM의 EBITDA를 분해해 진짜 반복적(Recurring) 이익과 일회성(Non-recurring) 이익을 분리한다. Adjusted EBITDA의 각 조정 항목이 정당한지 검증하고, 회계 정책 변경으로 이익이 인위적으로 부풀려진 부분을 발굴한다.",
    detail: [
      "매출 인식 정책 변경 여부 확인 (인식 시점을 바꿔 매출 앞당기기)",
      "일회성 수익 항목 분리 (자산 매각 이익, 보험금 수령, 정부 보조금 등)",
      "반복적 비용 중 임의로 조정한 항목 재검토 (스톡옵션, R&D, 마케팅)",
      "고객 집중도 및 계약 만료 리스크가 미래 매출에 미치는 영향",
    ],
    output: "Adjusted EBITDA → QoE EBITDA Bridge",
  },
  {
    num: "02",
    title: "운전자본 분석",
    color: "blue",
    desc: "정상적인 운전자본 수준(Normalized Working Capital, NWC)을 산정한다. SPA 가격 조정 메커니즘의 기준이 되며, 매출채권 회수 기간·재고 회전율 이상 여부를 확인한다.",
    detail: [
      "최근 12~24개월 월별 운전자본 추이 분석",
      "계절성(Seasonality)을 반영한 정상 운전자본 수준 산정",
      "매출채권 중 회수 불가능 채권(Bad Debt) 식별",
      "재고 중 진부화(Obsolescence) 또는 과잉 재고 식별",
      "SPA NWC Peg(기준값) 설정 근거 제공",
    ],
    output: "Normalized Working Capital 분석 및 Peg 제안",
  },
  {
    num: "03",
    title: "부외부채 발굴",
    color: "violet",
    desc: "재무제표에 기재되지 않은 잠재 부채를 발굴한다. 소송·보증·환경부채, 연금 부족분, 임직원 미지급 보상이 대표적이다. 이 항목들이 SPA의 Reps & Warranties 협상 근거가 된다.",
    detail: [
      "계류 중 소송 및 잠재 클레임 규모 추정",
      "제품 보증 충당부채 적정성 검토",
      "운용리스 부채 (IFRS 16 이전 기준 적용사의 경우)",
      "확정급여형(DB) 연금의 실제 적립 부족분",
      "임직원 미지급 성과 보상, 퇴직금 정산 차이",
      "환경 관련 복구 의무 및 탄소 배출 부채",
    ],
    output: "부외부채 목록 (금액·발생 가능성 등급 포함)",
  },
  {
    num: "04",
    title: "Cash Flow 검증",
    color: "teal",
    desc: "보고된 EBITDA가 실제로 현금으로 전환되는지 검증한다. CapEx 수준이 사업 유지에 충분한지 (유지 CapEx vs 성장 CapEx), FCF(잉여현금흐름)의 실질 수준을 확인한다.",
    detail: [
      "EBITDA → 영업현금흐름 전환율 추세 분석",
      "유지 CapEx(Maintenance CapEx)와 성장 CapEx 분리",
      "실제 FCF = EBITDA − 세금 − 유지 CapEx − 운전자본 변동",
      "자본 지출이 과소 계상돼 EBITDA 대비 FCF가 과장된 경우 발굴",
    ],
    output: "FCF Bridge 및 CapEx 분석",
  },
  {
    num: "05",
    title: "세금 리스크 점검",
    color: "emerald",
    desc: "이연법인세, 미납 세금, 세무 조사 위험 등 재무제표에 충분히 반영되지 않은 세금 리스크를 식별한다.",
    detail: [
      "이연법인세 자산의 실현 가능성 검토",
      "세무 조사 이력 및 현재 계류 중인 세무 이슈",
      "이전가격세제(Transfer Pricing) 리스크",
      "비용 처리된 항목 중 세무 당국이 손금 불인정 가능성이 있는 항목",
    ],
    output: "세금 리스크 목록 및 잠재 노출 금액 추정",
  },
];

// ── QoE 보고서 구조 ─────────────────────────────────────────────
const QOE_SECTIONS = [
  { section: "Section 1", title: "EBITDA Bridge", desc: "IM EBITDA → Adjusted EBITDA → QoE EBITDA. 각 조정 항목의 정당성을 검토하고 재조정.", color: "rose" },
  { section: "Section 2", title: "운전자본 분석", desc: "월별 운전자본 추이, 정상화 NWC 수준, SPA Peg 제안.", color: "blue" },
  { section: "Section 3", title: "부외부채 목록", desc: "금액, 발생 시기, 발생 가능성(High/Medium/Low) 등급화.", color: "violet" },
  { section: "Section 4", title: "CapEx 분석", desc: "유지 CapEx / 성장 CapEx 분리, FCF 전환 효율성 분석.", color: "teal" },
  { section: "Section 5", title: "세금 리스크", desc: "이연법인세, 세무 조사 위험, 잠재 노출 금액.", color: "emerald" },
];

// ── 이해관계자 ───────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "Big4 회계법인 FDD팀",
    detail: "5~15명이 4~8주 집중 작업. VDR(가상 데이터룸)의 수천 개 문서를 검토하고 매도자 CFO팀과 Q&A를 주고받는다. QoE 보고서 작성의 주체.",
    color: "rose",
  },
  {
    role: "바이사이드 재무팀",
    detail: "FDD팀과 협업해 주요 가정을 검증한다. 어떤 항목을 가격 조정 협상에 활용할지 IB와 전략을 조율.",
    color: "blue",
  },
  {
    role: "매도자 CFO팀",
    detail: "FDD팀의 Q&A에 응답하고 자료를 제공한다. 불리한 발견은 축소하고 유리한 조정은 최대화하려는 인센티브가 있다.",
    color: "violet",
  },
  {
    role: "바이사이드 IB",
    detail: "FDD 결과를 가격 조정 협상 논거로 활용한다. 'QoE EBITDA가 IM보다 XX억 낮으므로 LOI 대비 가격을 조정해야 한다'는 논리 구성.",
    color: "emerald",
  },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    company: "WeWork (2019년 IPO 시도)",
    title: "FDD가 있었다면 막았을 과장 — Community Adjusted EBITDA",
    type: "FDD 미적용 → 가치 붕괴",
    typeColor: "rose",
    analogy: "직원 인건비·마케팅비·운영비 대부분을 '조정 항목'으로 빼고 나면 우리도 흑자야 — 라고 주장하는 것. 이 논리를 독립적으로 검증했다면 숫자가 달라 보였을 것이다.",
    paragraphs: [
      "WeWork는 IPO를 앞두고 S-1 공시를 통해 투자자들에게 'Community Adjusted EBITDA'라는 독자적 지표를 제시했다. 일반 EBITDA에서 스톡옵션 비용, 마케팅비, 건물 개장 비용, 관리비 대부분을 조정 항목으로 처리해 대규모 흑자인 것처럼 만든 수치였다.",
      "S-1 공시 후 투자자들이 실제 숫자를 분석하기 시작했다. 실제 현금 소각률(Cash Burn Rate)은 분기당 수천억 원 규모였다. 조정 항목으로 처리된 비용들은 사업 운영에 필수적인 경상 비용이었다. FDD 관점에서 이 조정들은 대부분 인정되지 않았을 것이다.",
      "IPO는 철회됐다. WeWork의 기업가치는 $470억에서 $29억으로 폭락했다. 2023년에는 결국 파산 신청을 했다. 만약 독립적인 QoE 분석이 IPO 전에 공개됐다면, 처음부터 가격 기대치가 전혀 달라졌을 것이다.",
    ],
    lesson: "Adjusted EBITDA 조정 항목의 정당성 검증이 FDD의 핵심이다. 각 조정 항목이 '진짜 일회성'인지, '반복되는 경상 비용을 숨기는 것'인지를 구분하는 것이 QoE 분석의 본질이다.",
    relatedConcept: { href: "/deal-101/adjusted-ebitda", label: "Adjusted EBITDA 개념 보기" },
  },
  {
    company: "HP × Autonomy (2011년)",
    title: "FDD가 실패하면 얼마나 비싸게 먹히는가 — $8.8B 손상차손",
    type: "FDD 실패 → 대규모 손실",
    typeColor: "amber",
    analogy: "정비사가 엔진 점검을 제대로 못 해서 8.8조원짜리 고장 차를 샀다. 겉은 멀쩡해 보였지만 엔진 내부는 이미 망가져 있었다.",
    paragraphs: [
      "2011년 HP는 영국 소프트웨어 회사 Autonomy를 $103억에 인수했다. 기업 검색·분석 소프트웨어 시장에서의 전략적 포지셔닝이 목적이었다.",
      "1년 뒤인 2012년 11월, HP는 $88억의 대규모 손상차손(Impairment)을 인식했다. HP의 주장은 명확했다 — Autonomy가 하드웨어 매출을 소프트웨어 매출로 회계 처리하고, 매출 인식 시점을 조작해 ARR을 과장했다는 것이다. HP는 $50억 이상의 재무 분식이 있었다고 주장했다.",
      "Autonomy 전 경영진은 HP의 주장을 강하게 부인했고, 오히려 HP의 경영 실패가 원인이라고 반박했다. 진실 공방은 수년간 법적 분쟁으로 이어졌다. 어느 쪽이 맞는가와 무관하게, FDD 과정에서 매출 인식 정책과 매출 구성 변화가 충분히 검토됐다면 결과가 달랐을 가능성이 높다.",
    ],
    lesson: "Revenue recognition 정책 변경과 매출 구성(소프트웨어 vs. 하드웨어)의 갑작스러운 변화는 FDD에서 가장 먼저, 가장 깊이 파야 할 항목이다. '왜 갑자기 이 숫자가 좋아졌나'가 FDD의 첫 번째 질문이어야 한다.",
  },
  {
    company: "Verizon × Yahoo (2016~2017년)",
    title: "DD 중 대형 보안 사고 발견 — $350M 가격 인하로 재협상",
    type: "DD 중 대형 리스크 발견",
    typeColor: "violet",
    analogy: "집 계약을 한 후 실사하다가 지하실에 아무도 몰랐던 수도관 파열이 있는 걸 발견한 것. 계약을 취소하지 않고 수리 비용만큼 가격을 깎아서 마무리했다.",
    paragraphs: [
      "2016년 7월, Verizon은 Yahoo의 인터넷 사업을 $48.3억에 인수하기로 합의했다. 검색, 이메일, 뉴스 등 Yahoo의 핵심 디지털 자산을 확보하기 위한 딜이었다.",
      "DD 진행 중, Yahoo가 2013~2014년에 발생한 역대 최대 규모의 해킹 사실을 뒤늦게 공시했다. 약 30억 개 계정의 개인정보가 유출된 사건이었다. 이미 인수 합의가 된 상태에서 발견된 리스크였다.",
      "Verizon은 즉각 가격 재협상에 들어갔다. 최종적으로 $3.5억 가격 인하와 Yahoo와의 법적 책임 분담 합의로 딜이 마무리됐다. 보안 리스크가 재무 DD를 통해 간접적으로 발견되고, 이것이 SPA 재협상으로 이어진 교과서적 사례다.",
    ],
    lesson: "FDD는 순수 재무 숫자만 보는 게 아니다. 우발 부채·법적 리스크가 재무에 미치는 영향, 특히 보안 사고·소송·규제 위반이 향후 현금흐름에 미치는 파급을 반드시 점검해야 한다. DD 과정의 발견이 SPA 가격 조정으로 이어지는 것은 이 케이스가 완벽하게 보여준다.",
  },
];

export default function FddClient() {
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
              <span className="text-xs text-gray-400">FDD (재무실사)</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              실사
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              FDD (재무실사) 완전 정리 — IM이 보여주지 않는 것을 찾아라
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Big4 회계법인이 4~8주 동안 수천 개의 문서를 검토해 만드는 Quality of Earnings 보고서. IM의 EBITDA를 믿지 말고 독립적으로 검증해야 하는 이유, 그리고 FDD가 실패했을 때 벌어지는 일들.
            </p>

            {/* 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#fdd-overview", label: "FDD란" },
                { href: "#fdd-tasks", label: "5가지 핵심 작업" },
                { href: "#qoe-structure", label: "QoE 보고서 구조" },
                { href: "#stakeholders", label: "이해관계자" },
                { href: "#cases", label: "케이스 스터디" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="rounded-full px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: FDD란 무엇인가 ── */}
          <motion.section id="fdd-overview" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">FDD란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">FDD(Financial Due Diligence, 재무실사)</strong>는 M&A 실사 단계에서 타겟 기업의 재무 정보를 독립적으로 검증하는 과정이다. 목적은 하나 — IM(정보제공각서)에 담긴 숫자를 있는 그대로 믿지 않고, 실제로 검증하는 것.
              </p>
              <p>
                FDD를 수행하는 주체는 <strong className="text-gray-800 dark:text-gray-200">Big4 회계법인</strong>(PwC, Deloitte, EY, KPMG)의 Transaction Services 또는 Deals 부서다. 5~15명의 팀이 4~8주 동안 VDR의 수천 개 문서를 검토하고 매도자와 수백 건의 Q&A를 주고받는다.
              </p>
              <p>
                FDD의 핵심 아웃풋은 <strong className="text-gray-800 dark:text-gray-200">Quality of Earnings (QoE) 보고서</strong>다. 이 보고서의 숫자가 최종 SPA 가격 조정의 법적·재무적 근거가 된다.
              </p>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                중고차를 살 때 외관을 보고 판단하는 것이 IM 검토라면, 공임비를 내고 정비사에게 맡겨 엔진·미션·하부까지 전부 점검하는 것이 FDD다. 정비사가 발견한 문제는 가격을 깎는 근거가 되거나, 심각하면 계약을 포기하는 이유가 된다.
              </p>
            </div>

            {/* 핵심 정보 카드 */}
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { label: "수행 주체", value: "Big4 회계법인 Transaction Services팀", color: "rose" },
                { label: "소요 기간", value: "4~8주 집중 작업", color: "blue" },
                { label: "핵심 아웃풋", value: "Quality of Earnings (QoE) 보고서", color: "violet" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.label} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                    <span className={`text-xs font-bold ${c.text}`}>{item.label}</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 2: FDD 5가지 핵심 작업 ── */}
          <motion.section id="fdd-tasks" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">FDD의 핵심 작업 5가지</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              FDD는 단순히 재무제표를 다시 읽는 것이 아니다. 아래 5가지 작업이 QoE 보고서의 실질적 내용을 구성한다.
            </p>

            <div className="space-y-5">
              {FDD_TASKS.map((task) => {
                const c = COLOR_MAP[task.color];
                return (
                  <div key={task.num} className={`rounded-xl border ${c.border} overflow-hidden`}>
                    {/* 태스크 헤더 */}
                    <div className={`${c.bg} px-5 py-4 flex items-start gap-4`}>
                      <span className={`shrink-0 text-lg font-bold ${c.text}`}>{task.num}</span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{task.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{task.desc}</p>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      {/* 세부 항목 */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">주요 검토 항목</h4>
                        <ul className="space-y-1.5">
                          {task.detail.map((d, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 아웃풋 */}
                      <div className={`rounded-lg ${c.bg} border ${c.border} px-3 py-2`}>
                        <span className={`text-xs font-bold ${c.text}`}>아웃풋: </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{task.output}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                FDD의 모든 작업은 하나의 질문으로 귀결된다 — <strong>"IM에 쓰인 EBITDA가 진짜인가, 그리고 인수 후에도 유지될 수 있는가?"</strong> 이 질문에 'No'가 나오는 순간, 가격 협상이 시작된다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 3: QoE 보고서 구조 ── */}
          <motion.section id="qoe-structure" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">QoE 보고서 구조</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Quality of Earnings 보고서는 FDD의 최종 아웃풋이자 SPA 가격 협상의 근거 문서다. 구조를 이해하면 딜 협상 과정이 훨씬 명확하게 보인다.
            </p>

            <div className="space-y-3">
              {QOE_SECTIONS.map((sec) => {
                const c = COLOR_MAP[sec.color];
                return (
                  <div key={sec.section} className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className={`shrink-0 rounded-lg ${c.bg} border ${c.border} px-3 py-2 text-center min-w-[80px]`}>
                      <span className={`text-[10px] font-bold ${c.text} block`}>{sec.section}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{sec.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{sec.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* EBITDA Bridge 설명 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 EBITDA Bridge란?</p>
              <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed space-y-1">
                <p><strong>IM EBITDA</strong> (매도자가 제시한 숫자)</p>
                <p className="pl-4">→ <span className="text-amber-600 dark:text-amber-400">조정 항목 검증</span> (일회성 수익 제거, 인위적 비용 절감 복원)</p>
                <p><strong>Adjusted EBITDA</strong> (FDD팀이 재검증한 숫자)</p>
                <p className="pl-4">→ <span className="text-amber-600 dark:text-amber-400">추가 조정</span> (FDD에서 새롭게 발굴한 항목)</p>
                <p><strong>QoE EBITDA</strong> (최종 협상 기준 숫자)</p>
              </div>
            </div>
          </motion.section>

          {/* ── 섹션 4: 이해관계자 ── */}
          <motion.section id="stakeholders" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">이해관계자 & 역할</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              FDD는 여러 이해관계자가 긴밀하게 얽힌 과정이다. 각자의 인센티브가 다르기 때문에 긴장 관계가 형성된다.
            </p>
            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className={`inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 mb-1.5 ${c.badge}`}>{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                FDD팀(Big4)은 바이사이드 의뢰를 받았지만 독립적으로 작동해야 한다. 만약 FDD팀이 딜 완성을 위해 불리한 발견을 축소한다면, 그것은 인수자에게 결국 더 큰 손해로 돌아온다. HP × Autonomy가 그 대표적 사례다.
              </p>
            </div>
          </motion.section>

          {/* ── 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — FDD가 성공하고 실패하는 순간</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                세 가지 케이스가 FDD의 핵심 원칙을 완벽하게 보여준다 — 조정 항목 정당성 검증(WeWork), FDD 실패의 비용(HP × Autonomy), DD 중 우발 부채 발견(Verizon × Yahoo).
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
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4">
                      <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                        {c_item.type}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
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

                      {/* 관련 개념 링크 */}
                      {c_item.relatedConcept && (
                        <Link
                          href={c_item.relatedConcept.href}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {c_item.relatedConcept.label} →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 핵심 인사이트 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                FDD는 '가격을 깎을 구실을 찾는 과정'이 아니라 <strong>'내가 진짜 무엇을 사는가를 독립적으로 확인하는 과정'</strong>이다. QoE EBITDA가 IM EBITDA보다 낮으면 가격 협상의 근거가 되고, 부외부채가 발견되면 SPA Reps & Warranties의 범위가 달라지고, 우발 부채가 크면 에스크로 규모가 커진다. FDD는 딜의 리스크를 재무 언어로 번역해 협상 테이블 위에 올려놓는 과정이다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "FDD에서 검증하는 핵심 숫자 — 정상화 EBITDA란 무엇인가", badge: "Valuation" },
                { href: "/deal-101/ma-process", title: "M&A 프로세스 Phase 4", desc: "FDD가 전체 M&A 프로세스 중 어디에 위치하는가", badge: "Deal Structure" },
              ].map((item) => (
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
        <LikeButton slug={"fdd"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
