"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

// ── 애니메이션 헬퍼 ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── 컬러 맵 ─────────────────────────────────────────────────────
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

// ── RMT 단계 데이터 ──────────────────────────────────────────────
const RMT_STEPS = [
  {
    step: "1단계",
    title: "전략적 결정",
    color: "blue",
    icon: "🎯",
    desc: "모회사가 매각하고 싶은 사업부를 선정한다. 직접 매각 시 막대한 양도소득세가 발생함을 확인하고 RMT 구조를 검토한다.",
    detail: "세무 자문사와 법무 자문사가 RMT 적용 가능성을 검토한다. IRS에 PLR(Private Letter Ruling) 신청 여부를 결정한다.",
  },
  {
    step: "2단계",
    title: "스핀오프 실행",
    color: "emerald",
    icon: "🔀",
    desc: "사업부를 별도 법인(NewCo)으로 분리한다. 모회사 기존 주주들이 NewCo 주식을 수령한다.",
    detail: "IRC Section 355 요건을 충족해야 비과세 스핀오프가 성립한다. 스핀오프 완료 후 주주들은 모회사 주식과 NewCo 주식을 동시에 보유한다.",
  },
  {
    step: "3단계",
    title: "합병 협상",
    color: "violet",
    icon: "🤝",
    desc: "전략적 파트너(인수자)가 NewCo와 합병 계약을 체결한다. 파트너는 NewCo를 사실상 취득하게 된다.",
    detail: "합병 구조: 인수자의 법인이 NewCo와 합병하거나, NewCo가 인수자의 일부와 합병. 어느 쪽이든 합병 후 지분 구조가 50% 요건을 충족해야 한다.",
  },
  {
    step: "4단계",
    title: "50% 지분 요건 확인",
    color: "amber",
    icon: "⚖️",
    desc: "합병 완료 후 NewCo의 원 주주(= 모회사 주주)들이 합병된 법인의 50.1% 이상을 보유해야 비과세가 성립한다.",
    detail: "이 요건이 RMT의 핵심이자 가장 까다로운 조건이다. 인수자가 너무 큰 경우 이 요건을 충족하기 어렵다. 인수자의 기존 주주 규모를 세심하게 조율해야 한다.",
  },
  {
    step: "5단계",
    title: "합병 완료",
    color: "indigo",
    icon: "✅",
    desc: "전략적 파트너가 실질적으로 사업부(NewCo)를 취득한다. 모회사는 비과세로 사업부 이전을 완료한다.",
    detail: "원 모회사 주주들은 합병된 새 법인의 주주가 된다. 모회사는 사업부를 처분하고 재무구조를 개선한다. 파트너는 현금 부담 없이 원하던 사업부를 취득한다.",
  },
];

// ── RMT 사용 이유와 제약 ─────────────────────────────────────────
const PROS = [
  { icon: "💰", title: "수십억 달러 세금 절감", color: "emerald", desc: "직접 매각 대비 양도소득세가 발생하지 않는다. 대형 딜에서 절감액이 수십억 달러에 달할 수 있다." },
  { icon: "📈", title: "주주 가치 유지", color: "blue", desc: "모회사 주주들도 세금 없이 합병 신법인의 주주가 된다. 가치가 주주에게 그대로 이전된다." },
  { icon: "🏦", title: "인수자의 현금 부담 없음", color: "violet", desc: "전략적 파트너 입장에서 현금 지출 없이 대형 사업부를 취득할 수 있다. 레버리지 없이 대형 딜 가능." },
];

const CONS = [
  { icon: "⚖️", title: "50% 지분 요건", color: "rose", desc: "합병 후 NewCo 원 주주(모회사 주주)가 50.1% 미만이면 비과세 불가. 인수자 규모가 너무 크면 요건 충족이 어렵다." },
  { icon: "🏛️", title: "IRS 사전 승인 필요", color: "amber", desc: "PLR(Private Letter Ruling) 발급을 위해 IRS에 신청해야 한다. 승인까지 수개월이 소요되고 불확실성이 있다." },
  { icon: "⏱️", title: "긴 딜 타임라인", color: "orange", desc: "딜 완결까지 12~24개월이 필요하다. 법무·세무 비용도 일반 M&A 대비 대폭 증가한다." },
  { icon: "🔧", title: "구조적 복잡성", color: "indigo", desc: "두 단계(스핀오프 + 합병)를 동시에 설계해야 한다. 세무·법무·규제 이슈가 복층으로 발생한다." },
];

// ── 케이스 스터디 데이터 ─────────────────────────────────────────
const CASES = [
  {
    title: "AT&T × WarnerMedia → Warner Bros. Discovery 합병 (2021~2022)",
    dealContext: "AT&T가 2018년 $85.4B에 인수한 WarnerMedia를 3~4년 만에 매각",
    color: "blue",
    typeLabel: "RMT 적용 대형 딜",
    typeColor: "blue",
    analogy: "통신 대기업이 엔터테인먼트 회사를 비싸게 산 뒤, 직접 팔면 세금이 너무 크다는 것을 깨달았다. RMT를 활용해 스핀오프로 분리한 뒤 Discovery와 합병시켜 사실상 세금 없이 매각을 완성했다.",
    paragraphs: [
      "AT&T는 2018년 Time Warner(WarnerMedia)를 $85.4B라는 막대한 금액에 인수했다. HBO, CNN, Warner Bros. 스튜디오 등을 품은 미디어 제국을 구상했다. 그러나 스트리밍 경쟁 심화와 부채 증가로 전략을 선회해야 했다.",
      "RMT 구조를 적용했다. AT&T는 WarnerMedia를 스핀오프로 분리했고, 분리된 WarnerMedia는 Discovery Communications와 합병해 Warner Bros. Discovery(WBD)를 탄생시켰다. AT&T는 이 과정에서 $43B 상당의 부채를 WarnerMedia와 함께 이전하는 효과도 얻었다.",
      "AT&T 주주들은 합병 후 Warner Bros. Discovery 지분 71%를 받았다. RMT 구조 덕분에 AT&T는 WarnerMedia 매각에서 발생할 수 있었던 막대한 양도소득세를 피할 수 있었다.",
      "결말은 복잡하다. WBD는 2022년 상장 이후 스트리밍 경쟁 심화와 막대한 부채로 주가가 급락했다. 딜 구조 자체는 성공적이었지만, WBD의 경쟁 환경은 여전히 어렵다.",
    ],
    lesson: "RMT는 세금 처리에서는 완벽하게 작동했다. 그러나 딜 이후 사업의 성공 여부는 RMT 구조와 별개다. AT&T의 경우, 세금을 아낀 것과 별개로 WBD가 스트리밍 시장에서 고전하는 전략적 현실이 남았다. 구조가 좋다고 사업이 좋은 건 아니다.",
    lessonColor: "blue",
  },
  {
    title: "Abbott × AbbVie 분리 (2013)",
    dealContext: "Abbott Laboratories가 제약(AbbVie)과 의료기기를 분리 — Humira 포함",
    color: "emerald",
    typeLabel: "RMT 방식 활용 분리",
    typeColor: "emerald",
    analogy: "하나의 회사에 블록버스터 의약품과 의료기기가 같이 있으면, 초고마진 제약 사업의 가치가 의료기기의 낮은 멀티플에 묻힌다. 분리하자마자 Humira의 진짜 가치가 드러났다.",
    paragraphs: [
      "Abbott Laboratories는 2013년 제약 사업부(AbbVie)와 나머지 의료기기·진단 사업을 분리했다. 세금 효율적 분리를 위해 RMT 방식을 활용했다. AbbVie는 당시 세계 최고 판매 바이오의약품인 Humira(아달리무맙)를 포함한 제약 포트폴리오를 갖고 분리 상장됐다.",
      "분리 당시 AbbVie의 시가총액은 약 $10B이었다. 이후 Humira가 전 세계적으로 관절염·건선 치료제로 폭발적으로 성장하면서 AbbVie는 제약 업계 최상위 기업으로 부상했다. 2022년에는 시가총액 $260B을 넘어섰다.",
      "Abbott 역시 분리 후 의료기기와 진단 사업에 집중하면서 독자적인 성장 궤적을 그렸다. Abbott의 혈당 측정기 FreeStyle Libre는 의료기기 시장의 히트 제품이 됐다.",
    ],
    lesson: "복합 기업 내에서 Humira의 초고수익성 제약 사업은 의료기기 사업의 낮은 멀티플에 묻혀 있었다. 분리하자마자 제약 투자자들이 AbbVie의 진짜 가치를 인정했다. 단일 블록버스터 자산이 독립 상장 시 받는 가치의 극적 상승 사례.",
    lessonColor: "emerald",
  },
];

export default function ReverseMorrisTrustClient() {
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
              <span className="text-xs text-gray-400">Reverse Morris Trust</span>
            </div>
            <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Reverse Morris Trust — 세금 없이 사업부를 매각하는 고급 구조
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              스핀오프와 합병을 결합해 수십억 달러의 세금을 피하는 거래 구조. 단계별 메커니즘, 50% 지분 요건, AT&T×WarnerMedia·Abbott×AbbVie 케이스 스터디.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "RMT란?", color: "indigo" },
                { href: "#steps", label: "단계별 구조", color: "emerald" },
                { href: "#pros-cons", label: "이유와 제약", color: "amber" },
                { href: "#cases", label: "케이스 스터디", color: "blue" },
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

          {/* ── 1. RMT란 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Reverse Morris Trust란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">Reverse Morris Trust(RMT)</strong>는 모회사가 원하지 않는 사업부를 세금 없이 전략적 파트너에게 이전할 수 있는
                고급 거래 구조다. 스핀오프(Section 355)와 합병(Section 368)을 순차적으로 결합해 과세 이연 또는 비과세를 달성한다.
              </p>
              <p>
                두 단계로 구성된다: ① 모회사가 사업부를 <strong className="text-gray-800 dark:text-gray-200">스핀오프</strong>해 독립 법인(NewCo)으로 분리하고,
                ② 분리된 NewCo가 전략적 파트너(인수자)와 <strong className="text-gray-800 dark:text-gray-200">합병</strong>한다.
              </p>
              <p>
                원래 <strong className="text-gray-800 dark:text-gray-200">Morris Trust</strong>는 모회사가 직접 합병 상대와 합병하는 구조였다.
                RMT는 순서를 뒤집어(Reverse) 먼저 분리 후 합병하는 방식으로, 크기 요건이 반대로 적용된다.
              </p>
            </div>

            {/* 핵심 요건 박스 */}
            <div className="mt-5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-5">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-3">⚖️ RMT 핵심 요건</p>
              <div className="space-y-2">
                {[
                  "합병 후 NewCo(분리된 사업부) 주주의 50.1% 이상이 모회사 주주여야 한다",
                  "스핀오프가 IRC Section 355 요건을 충족해야 한다 (비과세 스핀오프)",
                  "합병이 IRC Section 368 요건을 충족해야 한다 (비과세 재편)",
                  "IRS PLR(Private Letter Ruling) 사전 승인을 받는 것이 통례다",
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-indigo-800 dark:text-indigo-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-500" />
                    {req}
                  </div>
                ))}
              </div>
            </div>

            {/* 비유 박스 */}
            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                집을 팔고 싶은데 양도소득세가 너무 크다. 일단 집을 자녀 명의로 이전(스핀오프)하고,
                그 자녀가 원하는 사람과 부동산 공동 소유 회사를 만드는 방식으로 사실상 매각하되 직접 매각의 세금을 피하는 구조다.
                단, 자녀가 그 회사의 주인(50% 이상)이어야 한다는 조건이 붙는다.
              </p>
            </div>

            {/* 인사이트 박스 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                RMT는 사실상 세금 없는 M&A다. 모회사 입장에서는 현금 없이 사업부를 처분하면서 막대한 세금을 피할 수 있다.
                이 구조가 가능한 것은 스핀오프와 합병이라는 두 세법상 비과세 거래를 순차적으로 결합했기 때문이다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 단계별 구조 ── */}
          <motion.section id="steps" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">RMT 구조 — 단계별 설명</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              RMT는 복잡한 다단계 구조다. 각 단계가 세금 처리와 지분 요건에 직접 연결되어 있어 순서와 조건을 정확히 이해해야 한다.
            </p>

            <div className="space-y-4">
              {RMT_STEPS.map((step, i) => {
                const c = COLOR_MAP[step.color];
                return (
                  <div key={i} className="flex gap-4 items-start">
                    {/* 스텝 번호 */}
                    <div className={`shrink-0 rounded-xl px-3 py-2 text-center min-w-[72px] border ${c.border} ${c.bg}`}>
                      <p className={`text-xs font-bold ${c.text}`}>{step.step}</p>
                      <p className="text-lg">{step.icon}</p>
                    </div>

                    {/* 내용 */}
                    <div className={`flex-1 rounded-xl border ${c.border} ${c.bg} p-4`}>
                      <h3 className={`text-sm font-bold ${c.text} mb-1`}>{step.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{step.desc}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 구조 다이어그램 설명 */}
            <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-4">📊 RMT 구조도</p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="shrink-0 font-semibold text-gray-800 dark:text-gray-200">모회사</span>
                  <span className="text-gray-400">→ 스핀오프 →</span>
                  <span className="shrink-0 font-semibold text-emerald-700 dark:text-emerald-300">NewCo (분리 법인)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="shrink-0 font-semibold text-emerald-700 dark:text-emerald-300">NewCo</span>
                  <span className="text-gray-400">+ 합병 +</span>
                  <span className="shrink-0 font-semibold text-violet-700 dark:text-violet-300">전략적 파트너</span>
                  <span className="text-gray-400">→</span>
                  <span className="shrink-0 font-semibold text-indigo-700 dark:text-indigo-300">합병 NewCo</span>
                </div>
                <div className="mt-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">요건: 합병 NewCo에서 원 모회사 주주 비중 ≥ 50.1%</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── 3. 이유와 제약 ── */}
          <motion.section id="pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">RMT를 사용하는 이유와 제약</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              RMT는 강력한 세금 절감 효과를 제공하지만, 구조적 복잡성과 엄격한 요건으로 모든 딜에 적용할 수 있는 것은 아니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* 이유 */}
              <div>
                <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-3">✅ 사용하는 이유</h3>
                <div className="space-y-3">
                  {PROS.map((pro, i) => {
                    const c = COLOR_MAP[pro.color];
                    return (
                      <div key={i} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                        <div className="flex items-start gap-2">
                          <span className="text-lg shrink-0">{pro.icon}</span>
                          <div>
                            <h4 className={`text-xs font-bold ${c.text} mb-1`}>{pro.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{pro.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 제약 */}
              <div>
                <h3 className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-3">⚠️ 제약과 리스크</h3>
                <div className="space-y-3">
                  {CONS.map((con, i) => {
                    const c = COLOR_MAP[con.color];
                    return (
                      <div key={i} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                        <div className="flex items-start gap-2">
                          <span className="text-lg shrink-0">{con.icon}</span>
                          <div>
                            <h4 className={`text-xs font-bold ${c.text} mb-1`}>{con.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{con.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 비교 인사이트 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                RMT는 고급 세무 플래닝의 결정판이다. 마치 최상위 세무사가 설계하는 복잡한 자산 이전 구조처럼, 요건만 충족되면 수십억 달러를 아낄 수 있다.
                하지만 그 요건 하나라도 어긋나면 구조 전체가 무너지고 오히려 더 큰 세금 청구서를 받을 수 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                RMT가 실제 대형 딜에서 어떻게 적용됐는지, 두 가지 사례를 통해 구체적으로 살펴보자.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const tc = COLOR_MAP[caseItem.typeColor];
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
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${tc.badge}`}>
                          {caseItem.typeLabel}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{caseItem.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{caseItem.dealContext}</p>
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
                      <div className={`rounded-lg p-3 border ${COLOR_MAP[caseItem.lessonColor].border} ${COLOR_MAP[caseItem.lessonColor].bg}`}>
                        <p className={`text-xs font-semibold ${COLOR_MAP[caseItem.lessonColor].text} mb-1`}>🔑 핵심 교훈</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{caseItem.lesson}</p>
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
                { href: "/deal-101/spinoff", title: "스핀오프", desc: "RMT의 1단계 — 사업부 분리의 기본 구조와 복합기업 할인 해소", badge: "Deal Structure" },
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "RMT를 포함한 전체 M&A 딜 실행 단계와 IRS 승인 프로세스", badge: "Deal Process" },
                { href: "/deal-101/antitrust", title: "반독점 규제", desc: "RMT 딜에서 FTC·DOJ 반독점 심사가 어떻게 작동하는가", badge: "Regulation" },
                { href: "/deal-101/ipo-vs-ma-exit", title: "IPO vs M&A 엑싯", desc: "사업부 분리·매각 시 RMT, 스핀오프, 카브아웃 중 어떤 방식이 적합한가", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"reverse-morris-trust"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
