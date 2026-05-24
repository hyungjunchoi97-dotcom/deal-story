"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

// ── 규제 리스크 5가지 유형 ─────────────────────────────────────────
const RISK_TYPES = [
  {
    title: "반독점 규제 (Antitrust / Competition)",
    color: "rose",
    desc: "시장 경쟁 저해 우려. 합병 후 시장 지배력이 과도하게 집중될 경우 당국이 제동을 건다. 가장 빈번하게 발생하는 규제 리스크.",
    authorities: "FTC·DOJ(미국), EC(EU), CMA(영국), SAMR(중국)",
    note: "대부분의 대형 M&A에서 최우선 검토 대상. HSR 신고, EUMR 신고 등 사전 신고 의무.",
  },
  {
    title: "외국인투자 안보심사 (CFIUS/FDI)",
    color: "violet",
    desc: "국가 안보와 관련된 산업에 외국인이 투자할 때 발동. 반도체·방산·통신·AI 등 핵심 기술 분야 필수 검토.",
    authorities: "미국 CFIUS(FIRRMA), EU FDI 규정, 영국 NSI Act",
    note: "거부 시 딜 금지뿐 아니라 기존 투자 강제 매각 명령도 가능. 구조적으로 피하기 어렵다.",
  },
  {
    title: "섹터별 규제 (Sector-specific)",
    color: "blue",
    desc: "금융·통신·방송·의료 등 규제 산업에서 각 감독 기관의 별도 승인이 필요. 반독점 심사와 병행 진행.",
    authorities: "Fed·OCC(금융), FCC(통신), FDA(의료), 방통위(한국)",
    note: "섹터별 전문 라이선스·허가와 결부되어 있어 승인 거부 시 인수 목적 자체가 무력화될 수 있다.",
  },
  {
    title: "데이터·프라이버시 규제",
    color: "indigo",
    desc: "대규모 개인정보를 보유한 기업 간 결합 시 데이터 결합의 독점화·프라이버시 침해 우려로 심사 강화.",
    authorities: "GDPR(EU), CCPA(캘리포니아), 개인정보보호법(한국)",
    note: "빅테크의 데이터 기업 인수에서 점점 중요해지고 있다. 메타 Meta의 다수 인수에서 EU DPA가 개입.",
  },
  {
    title: "환경·노동 규제",
    color: "emerald",
    desc: "특정 국가에서 대형 M&A 시 환경영향평가 의무화 또는 노동조합 동의 요건이 발동. 딜 타임라인 지연 원인.",
    authorities: "환경부(한국), EPA(미국), 노동부, 노동조합",
    note: "독일·프랑스 등 유럽 국가에서 노동조합 동의가 클로징 선행 조건으로 설정되는 경우 多.",
  },
];

// ── 규제 당국별 심사 방식 ──────────────────────────────────────────
const REGULATORS = [
  {
    name: "FTC / DOJ (미국)",
    color: "rose",
    law: "HSR Act / Clayton Act",
    timeline: "30일 + 2단계 심층",
    desc: "Hart-Scott-Rodino(HSR) Act에 따른 사전 신고 의무. 초기 30일 심사 후 2단계(Second Request) 발동 시 수개월 추가. FTC와 DOJ가 산업 영역에 따라 역할을 분담.",
  },
  {
    name: "EC (유럽연합)",
    color: "violet",
    law: "EU Merger Regulation",
    timeline: "Phase I: 25영업일 / Phase II: 90영업일+",
    desc: "EUMR 신고 기준. Phase I는 경쟁 우려가 없는 경우 빠른 승인. Phase II는 심층 조사로 광범위한 시장 획정 분석. Phase II 결론이 사실상 금지 방향일 경우 당사자가 자진 포기 선택.",
  },
  {
    name: "CMA (영국)",
    color: "sky",
    law: "Enterprise Act 2002",
    timeline: "Phase 1: 40일 / Phase 2: 24주+",
    desc: "Brexit 이후 EU와 독립적으로 심사. UK 매출 기준 충족 시 글로벌 딜도 별도 신고 의무. MS×Activision에서 마지막까지 버티다 구조적 조치 조건으로 최종 승인.",
  },
  {
    name: "SAMR (중국)",
    color: "amber",
    law: "반독점법",
    timeline: "30~180일 (사실상 무제한)",
    desc: "중국 매출 기준 신고. 2018년 이후 미중 무역전쟁 맥락에서 전략적 차단 사례 증가. Qualcomm×NXP는 SAMR 단독 침묵으로 딜 무산. 지정학적 리스크와 직결.",
  },
];

// ── 규제 리스크 해소 방법 5가지 ───────────────────────────────────
const REMEDIES = [
  { title: "사업부 매각 (Divestiture)", color: "rose", desc: "경쟁 우려가 있는 사업 부문을 제3자에게 선제 매각 약속. 가장 강력하고 확실한 구조적 구제책. MS×Activision에서 클라우드 스트리밍 권리를 Ubisoft에 매각." },
  { title: "행위적 구제책 (Behavioral Remedies)", color: "blue", desc: "경쟁사에 라이선스 제공, 인터페이스 공개, 상호 운용성 보장 약속. 구조적 매각보다 딜 가치 훼손이 적지만 규제 당국이 선호도 낮음." },
  { title: "방화벽 (Firewall)", color: "violet", desc: "경쟁사 정보에 대한 내부 접근 차단 약속. 수직 통합 딜에서 인수 대상의 고객사이기도 한 경쟁자 데이터 보호 목적." },
  { title: "딜 구조 수정", color: "emerald", desc: "인수 범위 축소, 특정 자산 제외, 소수 지분 투자로 전환 등. 규제 우려가 집중된 부분을 구조에서 제거." },
  { title: "자진 철회", color: "amber", desc: "규제 통과 불가 확신 시 조기 포기. Break-up Fee 지급이 뒤따르지만 장기 소모전보다 낫다는 판단. Adobe×Figma ($10억 Break-up Fee)." },
];

// ── 케이스 스터디 ─────────────────────────────────────────────────
const CASES = [
  {
    title: "NVIDIA × Arm ($40B, 2020 발표 → 2022 포기)",
    typeLabel: "규제 차단 케이스",
    typeColor: "rose",
    dealSize: "$1.25B Break-up Fee 지급",
    analogy: "모든 스마트폰의 두뇌 설계를 독점한 회사를 경쟁사 중 하나가 사버리려 했다 — 나머지 경쟁사들이 '이건 안 된다'고 집단 반발한 것이다.",
    paragraphs: [
      "2020년 9월, NVIDIA는 소프트뱅크로부터 반도체 IP 라이선스 기업 Arm을 $400억에 인수한다고 발표했다. Arm은 전 세계 스마트폰 프로세서의 90% 이상에 사용되는 ISA(명령어 집합 아키텍처)를 설계하는 회사로, 퀄컴·삼성·애플을 포함한 사실상 모든 반도체 기업에 라이선스를 제공하는 중립적 인프라였다.",
      "문제는 NVIDIA 자신도 Arm의 라이선시이자 Arm의 라이선스 고객사들과 경쟁하는 반도체 기업이라는 점이었다. FTC, EC, CMA, 중국 SAMR이 동시에 심층 조사에 착수했다. 핵심 우려는 'NVIDIA가 Arm을 소유하면 경쟁사(퀄컴·삼성 등)에 불이익한 조건을 부과하거나 라이선스를 거부할 수 있다'는 것이었다.",
      "NVIDIA는 Arm의 중립성을 보장하는 행위적 구제책을 제안했지만 각국 규제 당국을 설득하지 못했다. FTC는 2022년 1월 소송을 제기했고, CMA와 EC도 심층 조사에 돌입했다. 결국 2022년 2월, NVIDIA와 소프트뱅크는 딜 포기를 선언했다. NVIDIA는 Break-up Fee $12.5억을 소프트뱅크에 지급했다.",
    ],
    lesson: "아무리 전략적으로 완벽한 딜도 기존 경쟁자들이 공통으로 의존하는 인프라 기업 인수는 규제 통과가 불가능에 가깝다. 반도체·기술 패권 경쟁에서 Arm 같은 '공공재적' 기업의 인수는 딜 설계 단계에서 규제 불가 판정을 받아야 한다.",
  },
  {
    title: "Illumina × GRAIL ($7.1B, 2021 강행 → 2023 매각 명령)",
    typeLabel: "Gun-Jumping 케이스",
    typeColor: "violet",
    dealSize: "~$1B 손실 + 규제 벌금",
    analogy: "심판의 휘슬이 울리기도 전에 경기를 시작했다가 몰수패를 당한 것과 같다.",
    paragraphs: [
      "Illumina는 DNA 시퀀서 시장에서 사실상 독점적 지위를 보유한 기업이다. GRAIL은 Illumina의 시퀀서를 사용해 혈액 암 조기진단 검사를 개발하는 바이오 스타트업으로, 원래 Illumina가 분사한 회사였다. 2021년, Illumina는 규제 승인을 받지 않은 채 GRAIL을 $7.1B에 인수를 완료(클로징)했다.",
      "이것이 문제였다. EC와 FTC 모두 이 딜을 심사 중이었고 아직 승인하지 않은 상태였다. 규제 미승인 상태에서 딜을 강행하는 것을 'Gun-Jumping'이라고 한다. EC는 'Illumina가 GRAIL을 통합하면 경쟁 혈액 암 진단 회사에 시퀀서 접근을 차단할 수 있다'는 논리로 반독점 우려를 제기했다.",
      "2023년, EC는 Illumina에 GRAIL을 분리 매각하라는 명령을 내렸다. FTC도 유사한 명령 절차를 밟았다. Illumina는 항소했지만 법원은 EC의 손을 들어줬다. 결국 Illumina는 GRAIL을 매각했고, 전체 과정에서 약 $10억 손실과 규제 벌금을 부담했다.",
    ],
    lesson: "규제 미승인 상태에서 딜을 클로징하는 Gun-Jumping은 최악의 결과로 이어진다. '클로징하면 사실상 이긴 것'이라는 논리는 EU와 FTC가 매각 명령을 내릴 수 있는 세계에서는 통하지 않는다. 규제 타임라인을 SPA 클로징 조건에 명확히 반영해야 한다.",
  },
];

// ── 관련 개념 링크 ─────────────────────────────────────────────────
const RELATED = [
  { href: "/deal-101/antitrust", title: "기업결합 심사(반독점)", desc: "FTC·EC·CMA 각국 심사 기관과 HHI 시장 집중도 분석 완전 정리.", badge: "규제·법률" },
  { href: "/deal-101/mac-clause", title: "MAC 조항", desc: "규제 리스크가 현실화될 때 딜을 파기할 수 있는 조건 — MAC 조항과의 연계.", badge: "딜 구조" },
  { href: "/deal-101/break-fee", title: "Break-up Fee", desc: "규제 차단 시 지급하는 Break-up Fee 구조와 시장 관행.", badge: "딜 구조" },
  { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "규제 심사는 M&A 프로세스의 어느 단계에서 진행되는가.", badge: "M&A 기초" },
];

export function RegulatoryRiskClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-3">
              <Link href="/deal-101" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">딜 101</Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">›</span>
              <span className="text-xs text-gray-500">규제·법률</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              규제 & 법률
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              M&A 규제 리스크
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              딜에 서명했다고 끝이 아니다. 서명(Signing)과 클로징(Closing) 사이에는 반독점·안보심사·섹터 규제라는 보이지 않는 벽이 있다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#what", label: "규제 리스크란" },
                { href: "#types", label: "5가지 유형" },
                { href: "#regulators", label: "주요 당국" },
                { href: "#remedies", label: "해소 방법" },
                { href: "#cases", label: "케이스 스터디" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: 규제 리스크란 ── */}
          <motion.section
            id="what"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">규제 리스크란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">M&A 규제 리스크</strong>는 딜 서명(Signing) 후 클로징(Closing) 사이에 규제 당국이 딜을 막거나(금지), 조건(컨디션)을 부과하거나, 지연시키는 불확실성을 말한다.
              </p>
              <p>
                반독점(Antitrust)이 가장 잘 알려져 있지만, 실제 M&A에서는 외국인투자 안보심사(CFIUS), 섹터별 라이선스, 데이터 프라이버시, 환경·노동 규제까지 훨씬 다양한 위험이 얽혀 있다.
              </p>
              <p>
                규제 리스크가 M&A에 미치는 영향은 단순히 딜이 막힐 수 있다는 것에 그치지 않는다. 규제 심사 기간 동안 딜 불확실성이 증가하면 주가 할인이 발생하고, Break-up Fee 조항이 설정되며, 법무·컨설팅 비용이 급증한다.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                비행기 표를 끊었는데 공항에서 막힐 수 있는 검문소가 미국, 유럽, 중국 등 여러 나라에 따로 있는 것. 표를 산다고 해서 반드시 탈 수 있는 게 아니다. 각국 검문소를 모두 통과해야 비로소 목적지에 도착할 수 있다.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: "딜 불확실성 증가", color: "rose", desc: "심사 기간 동안 딜 완료 여부 불확실 → 주가 할인, 시장 반응 악화." },
                { title: "비용 급증", color: "amber", desc: "규제 법무, 경제학자, 컨설팅 비용이 대형 딜에서 수천만 달러에 달한다." },
                { title: "딜 가치 훼손", color: "violet", desc: "조건부 승인 시 사업부 매각 등 구제책이 딜의 전략적 가치를 일부 제거." },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-xs font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 2: 5가지 유형 ── */}
          <motion.section
            id="types"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">규제 리스크의 5가지 유형</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              M&A 딜에서 마주치는 규제 리스크는 반독점 하나가 아니다. 딜 성격과 산업에 따라 다섯 가지 유형이 복합적으로 작동한다.
            </p>
            <div className="space-y-3">
              {RISK_TYPES.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} p-4`}>
                    <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <span className={`text-xs rounded-full px-2.5 py-0.5 ${c.badge} shrink-0`}>{item.authorities.split("(")[0].trim()}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                      <strong className="text-gray-600 dark:text-gray-400">주요 기관:</strong> {item.authorities}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 leading-relaxed">{item.note}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 3: 규제 당국별 심사 방식 ── */}
          <motion.section
            id="regulators"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">규제 당국별 심사 접근법</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              글로벌 딜은 복수 기관에 동시 신고해야 한다. 각 기관은 독립적으로 심사하며, 타임라인이 가장 긴 기관이 클로징 일정을 결정한다.
            </p>
            <div className="space-y-3">
              {REGULATORS.map((reg) => {
                const c = COLOR_MAP[reg.color];
                return (
                  <div key={reg.name} className={`rounded-xl border ${c.border} p-4`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{reg.name}</h3>
                        <span className={`text-xs ${c.text}`}>{reg.law}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">⏱ {reg.timeline}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{reg.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                대형 글로벌 딜은 동시에 10개국 이상 규제 신고가 필요하다. 각국 신고 기준, 심사 타임라인, 조건 부과 방식이 모두 다르다. "규제 조율 타임라인"이 M&A 전체 일정의 핵심 제약이 된다. 가장 느린 기관이 전체 딜 클로징을 결정한다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 4: 해소 방법 ── */}
          <motion.section
            id="remedies"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">규제 리스크 해소 방법 5가지</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              규제 당국이 우려를 제기했을 때 딜을 살리기 위해 당사자들이 사용하는 구제책(Remedies)이다.
            </p>
            <div className="space-y-3">
              {REMEDIES.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 5: 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 2개</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                규제 차단과 Gun-Jumping — 규제 리스크가 현실화됐을 때 어떤 결과가 나타나는지 두 케이스로 확인한다.
              </p>
            </motion.div>
            <div className="space-y-8">
              {CASES.map((cs, idx) => {
                const c = COLOR_MAP[cs.typeColor];
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
                          {cs.typeLabel}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{cs.title}</h3>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border} shrink-0`}>
                        {cs.dealSize}
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{cs.analogy}</p>
                      </div>
                      <div className="space-y-3">
                        {cs.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{cs.lesson}</p>
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
      </main>
      <Footer />
    </>
  );
}
