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

// ── 프리미엄 3가지 원천 ──────────────────────────────────────────
const SOURCES = [
  {
    num: "01",
    title: "시너지 가치",
    color: "blue",
    description:
      "인수 후 실현 가능한 비용 절감 및 매출 성장 시너지의 현재가치(PV)다. 두 회사가 합쳐졌을 때 비용 중복이 제거되고 크로스셀링이 가능해진다면, 그 미래 가치의 일부를 매도자와 나눠 갖는 셈이다.",
    detail: "예: 인수 후 연간 500억 비용 절감 기대 × 영구성장 DCF → PV 5,000억. 이 중 일부를 프리미엄으로 선지급하는 구조.",
  },
  {
    num: "02",
    title: "경영권 프리미엄 (Control Premium)",
    color: "violet",
    description:
      "회사를 통제할 권리 자체에 붙는 프리미엄이다. 소수 지분 투자와 달리, 100% 경영권 인수는 이사회 구성, 배당 정책, 전략적 방향을 마음대로 결정할 수 있다. 그 권리에 대가를 치르는 것이다.",
    detail: "글로벌 평균 Control Premium: 약 20~30%. 소수 지분 투자 대비 경영권 지분 거래는 이 프리미엄만큼 더 비싸다.",
  },
  {
    num: "03",
    title: "전략적 희소성",
    color: "rose",
    description:
      "\"이 타겟이 없으면 우리 전략이 안 된다\"는 상황에서 프리미엄이 급등한다. 대체 불가능한 IP, 특정 시장 1위 위치, 독점적 유통망 — 대안이 없을수록 인수자의 협상력은 약해지고 프리미엄은 올라간다.",
    detail: "어도비가 피그마에 ARR 50×를 제시한 것이 대표 사례. 피그마를 놓치면 크리에이티브 클라우드 전략 전체가 흔들린다는 전략적 판단이 작용했다.",
  },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    company: "Microsoft × Activision Blizzard",
    premium: "~45%",
    dealValue: "$68.7B",
    color: "blue",
    description:
      "2022년 1월, 마이크로소프트는 게임사 액티비전 블리자드를 주당 $95에 인수한다고 발표했다. 발표 직전 주가 $65 대비 약 45%의 프리미엄이었다. Call of Duty, World of Warcraft, Candy Crush 등 대형 IP를 한 번에 확보하는 전략적 프리미엄이었다. 18개월의 규제 심사 끝에 최종 클로징.",
    lesson: "게임 IP 독점을 위한 전략적 희소성 프리미엄이 핵심. 규제 당국도 이 프리미엄의 정당성을 인정하되, 클라우드 스트리밍 권한 매각이라는 조건을 달았다.",
  },
  {
    company: "Elon Musk × Twitter",
    premium: "~38%",
    dealValue: "$44B",
    color: "amber",
    description:
      "2022년 4월, 머스크는 주당 $54.20에 트위터 인수를 제안했다. 당시 주가 $39.31 대비 38% 프리미엄이었다. 딜 완료 후 머스크 본인이 \"X를 너무 비싸게 샀다\"고 시인하며 가치를 $19B 수준으로 평가 절하했다. LOI 파기 시도가 소송으로 이어졌고, 결국 원래 가격에 클로징됐다.",
    lesson: "경영권에 대한 과도한 전략적 확신이 프리미엄 계산을 흐렸다. Winner's Curse의 교과서적 사례. 시너지 현재가치가 프리미엄을 정당화하지 못했다.",
  },
  {
    company: "Adobe × Figma",
    premium: "ARR 50× 수준",
    dealValue: "$20B",
    color: "rose",
    description:
      "2022년 9월, 어도비는 피그마를 약 $200억에 인수한다고 발표했다. 피그마의 연간 반복 매출(ARR) 약 $4억의 50배에 달하는 역대 최고 수준 SaaS 프리미엄이었다. UI/UX 디자인 시장 독점이라는 전략적 희소성이 프리미엄을 끌어올렸으나, EU 규제 당국이 경쟁 제거를 이유로 15개월 심사 끝에 사실상 금지 방향으로 결론을 내렸다. 2023년 12월 딜 포기, Break-up Fee $10억 지급.",
    lesson: "전략적 희소성 프리미엄이 정당화되려면 규제 통과 가능성도 사전에 검증해야 한다. ARR 50× 프리미엄은 규제 리스크가 현실화되는 순간 $10억의 순손실로 전환됐다.",
  },
];

export default function AcquisitionPremiumClient() {
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
              <span className="text-xs text-gray-400">인수 프리미엄</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              밸류에이션
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              인수 프리미엄 완전 정리
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                왜 시장가보다 더 내는가
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              M&A에서 인수자는 왜 주식 시장 가격보다 30~50% 더 내는가. 프리미엄의 3가지 원천, Winner's Curse, 그리고 Microsoft×Activision·Twitter·Adobe×Figma 케이스로 정리한다.
            </p>

            {/* 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "정의 & 공식" },
                { href: "#sources", label: "3가지 원천" },
                { href: "#winners-curse", label: "Winner's Curse" },
                { href: "#cases", label: "케이스 스터디" },
                { href: "#insight", label: "핵심 인사이트" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: 정의 & 공식 ── */}
          <motion.section
            id="definition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">인수 프리미엄이란?</h2>

            {/* 공식 박스 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-5">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">공식</p>
              <p className="text-base font-mono font-bold text-blue-800 dark:text-blue-200">
                인수 프리미엄 = (인수 가격 − 인수 전 주가) ÷ 인수 전 주가 × 100
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">예시 계산</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mt-1">주가 $50 → 인수가 $70</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">프리미엄 = 40%</p>
                </div>
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">글로벌 평균</p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mt-1">전략적 M&A 기준</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">약 30~40%</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                인수 프리미엄은 인수자가 타겟 기업의 현재 시장 가격(주가) 대비 추가로 지불하는 금액의 비율이다.
                주가는 현재 공개된 정보를 기반으로 형성된 시장의 합의된 가치인데, 인수자는 왜 여기서 30~40%를 더 내는가?
              </p>
              <p>
                핵심은 인수자가 타겟의 '현재 가치'가 아닌 '인수 후 가치'를 사는 것이기 때문이다.
                두 회사가 합쳐졌을 때 생기는 시너지, 경영권을 갖게 되는 권리의 가치, 그리고 이 타겟을 확보하지 못할 때의 전략적 손실 — 이 세 가지가 프리미엄을 정당화한다.
              </p>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                매물로 나온 가게를 살 때, 현재 장사가 잘 되는 가게는 시세보다 비싸게 줘야 주인이 판다. 그 웃돈이 인수 프리미엄이다. 가게 주인 입장에서 지금 당장 받는 돈에다 "내가 계속 운영하면 앞으로 벌 수 있었을 돈"의 일부도 요구하는 것이다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 2: 프리미엄의 3가지 원천 ── */}
          <motion.section
            id="sources"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">프리미엄의 3가지 원천</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              프리미엄이 정당화되려면 세 가지 중 하나 이상이 충분해야 한다. 세 가지 모두 약하다면, 그 프리미엄은 설명하기 어렵다.
            </p>

            <div className="space-y-4">
              {SOURCES.map((s) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={s.num} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 ${c.badge}`}>
                        {s.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{s.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{s.description}</p>
                        <div className={`rounded-lg p-3 bg-white/60 dark:bg-gray-800/40 border ${c.border}`}>
                          <p className={`text-xs font-semibold ${c.text} mb-0.5`}>구체적으로는</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{s.detail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 핵심 */}
            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                세 원천 중 '시너지 가치'가 가장 계량화가 가능하다. LOI 제출 전, "내가 지불하려는 프리미엄이 실현 가능한 시너지 PV보다 작은가?"를 반드시 따져야 한다. 시너지 PV &lt; 프리미엄이라면, 남은 차이는 경영권 프리미엄 또는 전략적 희소성이 설명해야 한다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 3: Winner's Curse ── */}
          <motion.section
            id="winners-curse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">프리미엄이 너무 높으면 — Winner's Curse</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                경쟁 입찰(경매) 구조에서 딜을 따내는 쪽은 입찰자 중 가장 낙관적인 가정을 가진 사람이다.
                즉, 경쟁 입찰에서 이기는 것 자체가 이미 "남들보다 비싸게 샀다"는 신호일 수 있다.
                이를 Winner's Curse(승자의 저주)라고 부른다.
              </p>
              <p>
                매도자 IB가 경쟁 입찰 구도를 만드는 이유가 바로 이것이다 — 인수자들이 서로 가격을 올리다 보면 프리미엄이 적정 수준을 넘어서기 쉽다.
              </p>
            </div>

            {/* 비유 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                경매에서 그림을 사는 상황과 같다. 100명이 입찰하면 그 중 가장 높은 가격을 부른 사람이 낙찰된다. 그 낙찰자는 평균 시장가보다 훨씬 높은 가격을 낸 것이다 — 그림의 "진짜 가치"가 그 가격을 지지할 수 있는지는 별개 문제다.
              </p>
            </div>

            {/* Winner's Curse 메커니즘 */}
            <div className="rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Winner's Curse가 손실로 전환되는 경로</h3>
              <div className="space-y-2">
                {[
                  { step: "1", text: "경쟁 입찰에서 감정적 Over-bid → 시너지 PV보다 큰 프리미엄 지불" },
                  { step: "2", text: "인수 후 예상했던 시너지가 미실현 (통계적으로 M&A의 70~80%가 기대 시너지 미달)" },
                  { step: "3", text: "초과 지불한 프리미엄이 그대로 인수자의 손실로 전환" },
                  { step: "4", text: "주가 하락, 신용등급 강등, 또는 대규모 손상차손(Impairment) 인식" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 items-start">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-gray-800 dark:text-gray-200">AOL × Time Warner (2000):</strong> AOL이 미디어 기업 Time Warner를 약 40% 프리미엄에 $1,640억에 인수했다. 인터넷 버블 붕괴와 함께 시너지는 실현되지 않았고, 2002년에 약 $990억의 손상차손을 인식하며 역대 최대 손실을 기록한 M&A 사례가 됐다.
            </div>
          </motion.section>

          {/* ── 섹션 4: 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 프리미엄이 정당화됐는가?</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                세 딜의 프리미엄 수준과 그 이후를 비교해보자.
              </p>
            </motion.div>

            <div className="space-y-5">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.color];
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
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.company}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">딜 규모: {c_item.dealValue}</p>
                      </div>
                      <span className={`shrink-0 text-sm font-bold rounded-lg px-3 py-1.5 ${c.bg} ${c.text} border ${c.border}`}>
                        프리미엄 {c_item.premium}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{c_item.description}</p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 섹션 5: 핵심 인사이트 ── */}
          <motion.section
            id="insight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">핵심 인사이트 — 언제 프리미엄이 정당화되는가?</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                프리미엄이 정당화되는 조건은 단순하다:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-base font-bold text-blue-800 dark:text-blue-200 text-center">
                  시너지 현재가치(PV) + 경영권 가치 &gt; 프리미엄 지불 금액
                </p>
              </div>
              <p>
                이 공식을 LOI 제출 전에 정직하게 계산해야 한다. 경쟁 입찰의 압박 속에서 이 계산을 건너뛰거나 가정을 낙관적으로 잡을 때 Winner's Curse가 발생한다.
              </p>
            </div>

            {/* 실무 체크리스트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">LOI 전 프리미엄 검증 체크리스트</h3>
              </div>
              <div className="p-5 space-y-2">
                {[
                  { color: "blue", text: "시너지 PV를 독립적으로 계산했는가? (IM 기준이 아닌 보수적 가정)" },
                  { color: "violet", text: "경영권 프리미엄(Control Premium)을 별도로 구분해 산정했는가?" },
                  { color: "rose", text: "프리미엄의 일부가 전략적 희소성이라면, 정말 대안이 없는지 검증했는가?" },
                  { color: "amber", text: "Walk-away Price(최대 지불 가격)를 설정하고 이사회 승인을 받았는가?" },
                  { color: "emerald", text: "경쟁 입찰 상황에서 감정적 Over-bid를 방지할 내부 통제가 있는가?" },
                ].map((item, i) => {
                  const c = COLOR_MAP[item.color];
                  return (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 최종 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                프리미엄은 인수자가 미래 가치를 선지급하는 것이다. 그 미래가 실현되지 않으면 프리미엄은 순손실이 된다. 딜이 클수록, 경쟁이 치열할수록 이 계산을 더 엄격하게 해야 한다. "지금 이 프리미엄을 내고도 투자 수익이 나는가?" — 이것이 M&A 재무 분석의 출발점이다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/ev-ebitda", title: "EV/EBITDA 멀티플", desc: "인수 가격 산정의 핵심 지표. 프리미엄이 몇 배 멀티플에 해당하는지 계산하는 기준.", badge: "밸류에이션" },
                { href: "/deal-101/synergy", title: "시너지", desc: "프리미엄의 첫 번째 원천. 시너지 현재가치가 프리미엄을 정당화하는지 검증한다.", badge: "밸류에이션" },
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "LOI 단계에서 처음으로 프리미엄이 공식화된다. Phase 3 참고.", badge: "Deal Structure" },
                { href: "/deal-101/antitrust", title: "기업결합 심사", desc: "고프리미엄 딜일수록 규제 당국의 주목을 받는다. Adobe×Figma 사례.", badge: "규제 & 법률" },
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
