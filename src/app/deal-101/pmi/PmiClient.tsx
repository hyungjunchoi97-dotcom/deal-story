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

const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── 3대 과제 ────────────────────────────────────────────────────
const THREE_CHALLENGES = [
  {
    num: "01",
    title: "조직 통합",
    subtitle: "Org Integration",
    color: "violet",
    description: "어느 팀이 살아남고, 누가 리더가 되고, 보고 체계는 어떻게 바뀌는가. PMI에서 가장 민감한 영역이다.",
    detail: "두 회사의 조직도를 하나로 합치는 순간, 중복 기능이 생기고 리더십 포지션이 충돌한다. 핵심 인재들은 자신의 자리가 어떻게 될지 즉각 직감한다. 불확실성이 계속되면 최고의 인재부터 떠난다 — 그들은 가장 선택지가 많기 때문이다.",
    risks: ["핵심 인재 이탈", "리더십 포지션 중복·충돌", "보고 체계 혼란", "책임 소재 불명확"],
  },
  {
    num: "02",
    title: "IT 시스템 통합",
    subtitle: "IT Integration",
    color: "blue",
    description: "ERP, CRM, 재무 시스템 통합. 가장 시간이 오래 걸리고 비용이 많이 드는 영역이다.",
    detail: "두 회사가 서로 다른 ERP(예: SAP vs Oracle), 다른 CRM, 다른 HR 시스템을 운영하고 있다. 이를 하나로 통합하는 데 수년이 걸리기도 하고, 마이그레이션 과정에서 데이터 유실·업무 중단 리스크가 발생한다. IT 통합 비용은 딜 단계에서 가장 과소 추정되는 항목이다.",
    risks: ["ERP·CRM 통합 지연 (수년 소요)", "데이터 마이그레이션 실패", "사이버보안 취약점 발생", "예산·일정 초과"],
  },
  {
    num: "03",
    title: "문화 통합",
    subtitle: "Culture Integration",
    color: "rose",
    description: "가장 보이지 않지만 가장 치명적인 영역. '우리'와 '그들'의 충돌이 조직을 분열시킨다.",
    detail: "의사결정 방식, 일하는 속도, 위계 구조, 실패를 대하는 태도 — 이 모든 것이 문화다. 두 회사의 문화가 충돌하면, 공식 조직도와 관계없이 비공식 전쟁이 시작된다. 이는 수자(Number)로 잡히지 않아 경영진이 과소평가하는 경향이 있지만, 가장 오래가고 가장 비싼 통합 비용이다.",
    risks: ["'우리 회사 방식'vs'그들 방식' 갈등", "인수자 우월주의 → 피인수사 인재 이탈", "비공식 파벌 형성", "직원 사기 저하·생산성 하락"],
  },
];

// ── 통합 스펙트럼 ────────────────────────────────────────────────
const INTEGRATION_SPECTRUM = [
  {
    type: "완전 통합",
    subtitle: "Full Integration",
    color: "teal",
    desc: "브랜드, 시스템, 조직 모두 하나로 통합. 비용 시너지 최대화 가능하나 문화 충돌 위험도 최대.",
    examples: ["제조·물류 회사 합병", "동종 사업 통합"],
    synergy: "최대",
    risk: "최고",
  },
  {
    type: "부분 통합",
    subtitle: "Partial Integration",
    color: "violet",
    desc: "재무·백오피스만 통합하고 사업 운영은 독립 유지. 시너지와 독립성의 균형.",
    examples: ["대기업의 사업부 편입", "플랫폼 기업의 버티컬 인수"],
    synergy: "중간",
    risk: "중간",
  },
  {
    type: "독립 운영",
    subtitle: "Standalone / Arm's Length",
    color: "amber",
    desc: "브랜드·운영 독립 유지, 지분만 인수. 시너지 최소이나 리스크와 문화 충돌도 최소.",
    examples: ["PE 포트폴리오 운영", "창의적 스튜디오 인수 (Disney×Pixar)"],
    synergy: "최소",
    risk: "최소",
  },
];

// ── PMI 타임라인 ────────────────────────────────────────────────
const PMI_TIMELINE = [
  {
    period: "Day 1–30",
    title: "즉시 조치",
    color: "teal",
    tasks: [
      "커뮤니케이션 플랜 실행 — 직원·고객·파트너에게 통합 방향 발표",
      "핵심 인재 리텐션 패키지 발동 — '당신은 중요합니다' 신호 즉시 전달",
      "Quick wins 달성 — 눈에 보이는 작은 성과로 통합 모멘텀 확보",
      "PMI 오피스 구성 및 KPI 설정",
    ],
  },
  {
    period: "Day 31–100",
    title: "단기 통합",
    color: "blue",
    tasks: [
      "조직 구조 확정 — 누가 어느 자리에 있는지 명확히",
      "중복 기능 통합 시작 — 재무, 법무, HR 백오피스부터",
      "브랜드 방향 결정 — 어느 브랜드를 유지할 것인가",
      "고객 커뮤니케이션 강화 — 서비스 연속성 보장 메시지",
    ],
  },
  {
    period: "Month 4–12",
    title: "중기 통합",
    color: "violet",
    tasks: [
      "IT 시스템 마이그레이션 착수 — 로드맵대로 단계적 진행",
      "재무 리포팅 시스템 통합 — 단일 리포팅 라인 구축",
      "본격 코스트 시너지 실현 — 중복 비용 제거",
      "제품·서비스 포트폴리오 합리화",
    ],
  },
  {
    period: "Year 2–3",
    title: "장기 통합",
    color: "emerald",
    tasks: [
      "문화 통합 완성 — 공통 가치관·행동 기준 내재화",
      "풀 IT 통합 완료",
      "레버뉴 시너지 시작 — 크로스셀링, 신시장 확장",
      "통합 성과 리뷰 — 인수 당시 시너지 목표 대비 실적 평가",
    ],
  },
];

// ── 이해관계자 & 역할 ────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "PMI 오피스 (Integration Management Office, IMO)",
    color: "teal",
    responsibility: "전체 통합 프로젝트 관리자. 타임라인, KPI, 이슈 추적을 총괄. 경영진에게 통합 진도를 주기적으로 보고하고, 각 팀 간 의사결정 병목을 제거하는 역할. 실질적 권한이 없으면 형식적 기구로 전락한다.",
  },
  {
    role: "HR팀",
    color: "violet",
    responsibility: "핵심 인재 리텐션, 조직 설계(누가 어느 자리에 있는지), 문화 다이나믹스 관리. 합병 후 첫 30일의 커뮤니케이션이 향후 3년의 인재 이탈률을 결정한다.",
  },
  {
    role: "IT팀",
    color: "blue",
    responsibility: "시스템 통합 로드맵 수립, 데이터 마이그레이션 실행, 보안 통합. IT 통합은 가장 오래 걸리는 작업으로, 클로징 전 DD 단계에서 이미 준비가 시작되어야 한다.",
  },
  {
    role: "브랜딩/마케팅팀",
    color: "amber",
    responsibility: "브랜드 아키텍처 결정 — 어느 브랜드를 유지하고, 어느 브랜드를 단계적으로 폐기하는가. 고객에게 '변화가 있지만 서비스는 더 좋아진다'는 메시지를 전달.",
  },
  {
    role: "재무팀",
    color: "emerald",
    responsibility: "예산 통합, 재무 리포팅 통합, 시너지 KPI 추적. '우리가 예측한 시너지가 실제로 실현되고 있는가'를 숫자로 검증하는 책임. 통합이 완료된 후 인수 가격의 정당성을 사후 검증하는 역할.",
  },
  {
    role: "법무팀",
    color: "rose",
    responsibility: "계약 이전, 규제 준수, 고용 계약 재구성. 특히 크로스보더 딜에서 각국 노동법, 경쟁법, 데이터 보호법 준수 여부를 지속 모니터링.",
  },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    slug: "disney-pixar",
    company: "Disney × Pixar",
    year: "2006",
    price: "$7.4B",
    type: "성공한 PMI",
    typeColor: "emerald",
    title: "독립성을 존중한 통합",
    analogy: "새 사장이 오더라도 '당신들 방식대로 계속 하세요, 저는 배우겠습니다'라고 했다 — 인수자가 피인수사의 창의적 문화를 파괴하지 않겠다고 선언한 것이다.",
    paragraphs: [
      "Disney가 2006년 Pixar를 $7.4B에 인수할 때, 가장 큰 우려는 '대기업 Disney가 창의적 소규모 스튜디오 Pixar의 문화를 망가뜨릴 것이다'였다. 실제로 Disney 내부에서도 그런 선례가 있었다.",
      "하지만 Disney CEO 밥 아이거는 다른 선택을 했다. Pixar의 창립 경영진 존 라세터와 에드 캣멀을 그대로 유지하고, Pixar의 독립 스튜디오 체계와 창의적 의사결정 프로세스를 손대지 않았다. 오히려 그 방식을 Disney 애니메이션에 역수입했다.",
      "결과는 '코코', '인사이드 아웃', '업', '토이스토리3' 등 연속 흥행이었다. 인수 이후 Pixar는 창의성이 줄기는커녕 더 왕성해졌다. 이는 창의 산업 M&A 역사에서 가장 성공적인 PMI 케이스 중 하나로 꼽힌다.",
    ],
    lesson: "창의 산업 M&A에서 가장 중요한 PMI 결정은 '얼마나 빨리 통합하느냐'가 아니라 '무엇을 건드리지 않을 것인가'다. 타겟의 가장 큰 가치가 인재와 문화에 있다면, 통합의 첫 번째 원칙은 그 문화를 보존하는 것이다.",
    integrationApproach: "독립 운영 (Standalone with cultural exchange)",
  },
  {
    slug: "hp-compaq",
    company: "HP × Compaq",
    year: "2001",
    price: "$25B",
    type: "실패한 PMI",
    typeColor: "rose",
    title: "IT 통합 실패의 교훈",
    analogy: "두 개의 복잡한 ERP 시스템을 하나로 합치려다 아무것도 제대로 작동하지 않게 된 것 — 합치는 과정 자체가 두 시스템을 모두 망가뜨렸다.",
    paragraphs: [
      "2001년 HP는 $25B에 Compaq을 인수했다. 당시에도 논란이 많았다 — HP 창업자 가족인 Hewlett 가문과 Packard 가문은 이 인수에 공개적으로 반대했다. '규모만 커지고 복잡성이 배가된다'는 우려였다.",
      "합병 이후 IT 시스템 통합에만 수년이 소요됐다. HP와 Compaq은 각각 독자적인 ERP, CRM, 영업 관리 시스템을 운영하고 있었다. 통합 과정에서 영업 조직 충돌, 제품 라인업 중복(HP의 서버 라인과 Compaq의 ProLiant 라인), 문화 충돌이 동시에 발생했다.",
      "합병 이후 PC 시장 점유율이 일시적으로 상승했지만, 비용 증가와 조직 혼란이 그 이익을 상쇄했다. 2014년 HP는 결국 소비자 PC 부문(HP Inc.)과 기업용 IT 부문(Hewlett Packard Enterprise)으로 분리됐다. 합병 당시 기대했던 통합 시너지는 끝내 실현되지 못했다.",
    ],
    lesson: "IT 시스템 통합은 M&A에서 가장 과소평가되는 비용과 시간 항목이다. 두 회사의 IT 복잡도를 곱하면 통합 복잡도가 나온다 — 더하기가 아니라 곱하기다. DD 단계에서 IT 통합 비용과 일정을 독립적으로 평가해야 하며, 이를 딜 가격에 반영해야 한다.",
    integrationApproach: "완전 통합 (Full Integration) — 실패",
  },
  {
    slug: "daimler-chrysler",
    company: "Daimler × Chrysler",
    year: "1998–2007",
    price: "$36B",
    type: "실패한 PMI",
    typeColor: "rose",
    title: "문화 충돌이 조직을 분열시킨다",
    analogy: "정시·정밀·엔지니어링을 중시하는 독일 조직과, 유연·빠른·디자인을 중시하는 미국 조직이 한 지붕 아래 살게 됐다 — 서로 끝없이 충돌했고, 결국 이혼으로 끝났다.",
    paragraphs: [
      "1998년, Daimler-Benz(독일)와 Chrysler(미국)의 합병은 '합병의 합병(Merger of Equals)'이라는 이름으로 발표됐다. $36B 규모, 당시 자동차 산업 역사상 최대 M&A였다. 두 회사 모두 동등한 파트너로서 새 회사를 만든다는 스토리였다.",
      "그러나 실제로는 Daimler의 인수였다. 이사회와 경영진 구성에서 독일 측이 지배적 권한을 가졌고, Chrysler의 핵심 임원들이 대거 교체됐다. 독일식 의사결정 문화(위계·합의 중시)와 미국식 문화(속도·자율 중시)가 충돌하며 조직이 분열됐다.",
      "결국 Chrysler 사업부는 반복적인 손실을 기록했고, Daimler는 2007년 Chrysler를 Cerberus Capital Management에 $7.4B에 매각했다. 인수가 $36B의 5분의 1에도 못 미치는 가격이었다. '합병의 합병'은 역사상 가장 비싼 PMI 실패 사례 중 하나로 기록됐다.",
    ],
    lesson: "PMI에서 '합병(Merger)'이라는 단어는 정치적 언어다. 누가 통합을 주도하는지 실질적 리더십이 명확하지 않으면, 두 조직 문화는 공존이 아니라 전쟁 상태가 된다. 'Merger of Equals'라는 개념은 대부분 협상 전략이지 운영 현실이 아니다.",
    integrationApproach: "완전 통합 시도 (Full Integration) — 문화 충돌로 실패",
  },
];

// ── PMI 실패 체크리스트 ──────────────────────────────────────────
const FAILURE_CHECKLIST = [
  { item: "핵심 인재 이탈 여부 모니터링 없음", severity: "치명적" },
  { item: "IT 통합 일정·비용 과소 추정", severity: "매우 높음" },
  { item: "인수자 우월주의 — '우리가 맞고 그들이 틀렸다'", severity: "매우 높음" },
  { item: "고객 커뮤니케이션 부재 → 고객 이탈", severity: "높음" },
  { item: "통합 리더십(PMI 오피스) 부재 또는 권한 부족", severity: "높음" },
  { item: "Day 1 커뮤니케이션 플랜 없음 → 루머·불안 확산", severity: "높음" },
  { item: "시너지 KPI가 설정되지 않음 → 성과 측정 불가", severity: "중간" },
  { item: "문화 진단 없이 통합 추진", severity: "중간" },
];

export default function PmiClient() {
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
              <span className="text-xs text-gray-400">PMI</span>
            </div>
            <span className="inline-block text-xs font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-full px-3 py-1 mb-4">
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              PMI 완전 정리
              <span className="block text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mt-1 font-medium">
                딜은 사인이 아니라 통합에서 완성된다
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              M&A의 70~80%가 기대 시너지를 달성하지 못한다. 이유 1위는 PMI 실패다. 조직·IT·문화 3대 통합 과제, 100일 플랜, 그리고 세 가지 실제 케이스로 PMI 전체를 정리한다.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "PMI란", href: "#what-is-pmi" },
                { label: "3대 과제", href: "#three-challenges" },
                { label: "통합 스펙트럼", href: "#spectrum" },
                { label: "타임라인", href: "#timeline" },
                { label: "이해관계자", href: "#stakeholders" },
                { label: "케이스 스터디", href: "#cases" },
                { label: "실패 체크리스트", href: "#checklist" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: PMI란 무엇인가 ── */}
          <motion.section id="what-is-pmi" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">PMI란 무엇인가</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">PMI(Post-Merger Integration)</strong>는 M&A 클로징 이후 두 회사를 실질적으로 하나로 합치는 전 과정을 말한다. 계약서에 서명하고 클로징 파티를 열었다고 딜이 끝난 게 아니다 — 진짜 일은 그 다음부터 시작된다.
              </p>
              <p>
                통계에 따르면 <strong className="text-gray-800 dark:text-gray-200">M&A의 70~80%가 기대했던 시너지를 달성하지 못한다</strong>. 수없이 반복되는 이 숫자의 가장 큰 원인이 PMI 실패다. 수조원의 프리미엄을 지불하고 인수했지만, 합치는 과정에서 가치를 파괴하는 것이다.
              </p>
            </div>

            {/* 비유 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                결혼은 결혼식 날이 아니라 그 이후 같이 사는 과정이 진짜다. 아무리 화려한 계약이어도 통합이 실패하면 프리미엄을 버린 것과 같다. M&A 클로징은 결혼식이고, PMI는 결혼 생활 그 자체다.
              </p>
            </div>

            {/* 핵심 지표 */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { stat: "70–80%", label: "시너지 미달성 비율", color: "rose" },
                { stat: "1위", label: "PMI 실패: 시너지 달성 실패 원인 순위", color: "amber" },
                { stat: "2–3년", label: "완전 통합에 걸리는 평균 기간", color: "teal" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.stat} className={`rounded-xl border ${c.border} ${c.bg} p-4 text-center`}>
                    <div className={`text-2xl font-bold ${c.text}`}>{item.stat}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 2: 3대 과제 ── */}
          <motion.section id="three-challenges" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI의 3대 과제</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              통합에는 수십 가지 과제가 있지만, 핵심은 세 가지로 압축된다. 이 세 가지를 어떻게 관리하느냐가 PMI 성패를 결정한다.
            </p>

            <div className="space-y-5">
              {THREE_CHALLENGES.map((challenge) => {
                const c = COLOR_MAP[challenge.color];
                return (
                  <div key={challenge.num} className={`rounded-xl border ${c.border} overflow-hidden`}>
                    <div className={`${c.bg} px-5 py-4`}>
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <span className={`text-xs font-bold ${c.text}`}>{challenge.num}</span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">
                            {challenge.title}
                            <span className="text-sm font-normal text-gray-400 dark:text-gray-500 ml-2">{challenge.subtitle}</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{challenge.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{challenge.detail}</p>
                      <div>
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">주요 리스크</p>
                        <div className="flex flex-wrap gap-2">
                          {challenge.risks.map((risk, i) => (
                            <span key={i} className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${c.badge}`}>{risk}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 3: 통합 스펙트럼 ── */}
          <motion.section id="spectrum" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">통합 스펙트럼 — 얼마나 합칠 것인가</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              통합의 깊이는 선택이다. 시너지를 극대화하려면 완전 통합이 필요하지만, 그만큼 문화 충돌 리스크도 커진다.
            </p>

            <div className="space-y-3">
              {INTEGRATION_SPECTRUM.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.type} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <span className={`text-xs font-bold ${c.text}`}>{item.type}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{item.subtitle}</span>
                      </div>
                      <div className="flex gap-3 text-xs">
                        <span className="text-gray-500 dark:text-gray-400">시너지 <strong className={c.text}>{item.synergy}</strong></span>
                        <span className="text-gray-500 dark:text-gray-400">리스크 <strong className={item.risk === "최고" ? "text-rose-600 dark:text-rose-400" : item.risk === "중간" ? "text-amber-600 dark:text-amber-400" : "text-emerald-600 dark:text-emerald-400"}>{item.risk}</strong></span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.examples.map((ex, i) => (
                        <span key={i} className="text-xs bg-white/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-full px-2.5 py-0.5 text-gray-500 dark:text-gray-400">{ex}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 4: PMI 타임라인 ── */}
          <motion.section id="timeline" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI 타임라인 — 클로징 후 3년</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              통합은 클로징 당일부터 시작된다. 첫 30일, 100일, 1년, 3년이 각각 다른 과제를 담고 있다.
            </p>

            <div className="space-y-4">
              {PMI_TIMELINE.map((phase, idx) => {
                const c = COLOR_MAP[phase.color];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`rounded-xl border ${c.border} overflow-hidden`}
                  >
                    <div className={`${c.bg} px-5 py-3 flex items-center justify-between`}>
                      <span className={`text-sm font-bold ${c.text}`}>{phase.period}</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{phase.title}</span>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 5: 이해관계자 & 역할 ── */}
          <motion.section id="stakeholders" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI 이해관계자 & 역할</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              PMI는 한 팀의 일이 아니다. 경영진부터 현장 IT팀까지 모든 기능 조직이 동시에 움직인다.
            </p>

            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{s.role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 6: 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 성공과 실패의 실제</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                같은 M&A라도 PMI 접근 방식에 따라 결과가 완전히 달라진다. 세 가지 케이스가 그것을 증명한다.
              </p>
            </motion.div>

            <div className="space-y-6">
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {c_item.company} · {c_item.year} · 인수가 {c_item.price}
                        </p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.teal.bg} ${COLOR_MAP.teal.text} border ${COLOR_MAP.teal.border}`}>
                        통합 방식: {c_item.integrationApproach}
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
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 섹션 7: PMI 실패 요인 체크리스트 ── */}
          <motion.section id="checklist" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">PMI 실패 요인 체크리스트</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              이 항목 중 하나라도 해당된다면 PMI가 위험하다. 인수 전 DD 단계에서 이미 이 리스크들을 인식하고 통합 계획에 반영해야 한다.
            </p>

            <div className="space-y-2">
              {FAILURE_CHECKLIST.map((item, i) => {
                const severityColor =
                  item.severity === "치명적" ? "rose" :
                  item.severity === "매우 높음" ? "amber" : "violet";
                const c = COLOR_MAP[severityColor];
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div className="flex-1 flex items-start justify-between gap-3 flex-wrap">
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item.item}</p>
                      <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 shrink-0 ${c.badge}`}>
                        {item.severity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 핵심 인사이트 */}
            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                PMI 실패는 대부분 클로징 이후에 시작되는 것이 아니라, DD 단계와 SPA 협상 단계에서 이미 씨앗이 뿌려진다. 통합 계획 없이 딜을 클로징하는 것은, 결혼식 날짜를 잡고 어떻게 살지 한 번도 얘기하지 않은 것과 같다. 최고의 PMI는 클로징 전부터 시작한다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "PMI는 Phase 6 클로징 이후 시작되는 M&A의 최종 단계", badge: "Deal Process" },
                { href: "/deal-101/synergy", title: "시너지", desc: "PMI의 궁극적 목표 — 예측한 시너지를 실제로 실현하는 과정", badge: "Valuation" },
                { href: "/deal-101/stock-vs-asset-deal", title: "스톡딜 vs 에셋딜", desc: "딜 구조에 따라 PMI 방식과 복잡도가 달라진다", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
