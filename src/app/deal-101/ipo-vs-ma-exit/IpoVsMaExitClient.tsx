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

// ── 색상 맵 ─────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── IPO 장단점 ──────────────────────────────────────────────────
const IPO_PROS = [
  { title: "시장 가격 발견 (Market Price Discovery)", desc: "공모가보다 상장 후 주가가 상승하면 추가 수익을 실현할 수 있다. 경쟁 입찰 없이도 시장이 가치를 결정한다." },
  { title: "부분 매각 가능", desc: "한 번에 전량 처분하지 않아도 된다. 일부만 매각해 유동성을 확보하고, 나머지 지분은 상장 후 가격 상승을 기다릴 수 있다." },
  { title: "브랜드·공신력 강화", desc: "상장기업이 되면 고객·파트너·인재 확보에서 신뢰도가 높아진다. 상장 자체가 기업의 마케팅 자산이 된다." },
  { title: "전략적 통화 확보", desc: "상장 주식을 이후 M&A의 인수 통화로 활용할 수 있다. 현금 없이도 기업을 인수할 수 있는 구조가 생긴다." },
];
const IPO_CONS = [
  { title: "공시 부담", desc: "분기 실적, 경영 정보, 주요 계약 등을 정기적으로 공개해야 한다. 경쟁사에게 핵심 정보가 노출될 수 있다." },
  { title: "락업 기간", desc: "보호예수(Lock-up) 180일~1년 동안 매각 불가. 그 사이 주가가 하락해도 팔 수 없다." },
  { title: "시장 변동성 리스크", desc: "공모 시점에 시장 상황이 나쁘면 기업가치가 훼손된다. 타이밍을 완전히 통제할 수 없다." },
  { title: "실제 클린 엑싯까지 수년 소요", desc: "상장 후에도 대주주 지분을 한 번에 팔기 어렵다. 블록딜·장내 매각을 반복해야 해 실질적 엑싯은 수년이 걸린다." },
];

// ── M&A 매각 장단점 ─────────────────────────────────────────────
const MA_PROS = [
  { title: "클린 엑싯", desc: "단 한 번의 거래로 전량 처분하고 확실한 현금을 받는다. 인수 후 주가 변동 위험이 없다." },
  { title: "컨트롤 프리미엄", desc: "전략적 인수자는 시너지를 이유로 시장 가격보다 20~40% 높게 지불하는 경우가 많다. 협상력 있는 경쟁 입찰이면 프리미엄이 더 커진다." },
  { title: "일정 예측 가능", desc: "IPO 시장 상황에 의존하지 않는다. 시장이 얼어붙어도 좋은 전략적 인수자가 있으면 딜이 가능하다." },
];
const MA_CONS = [
  { title: "가격 상한선 존재", desc: "인수자가 지불할 의사 있는 금액이 곧 가격의 상한. 경쟁 입찰이 없으면 가격 극대화가 어렵다." },
  { title: "경영권 상실", desc: "매각 후 창업자·PE 펀드는 회사를 떠난다. 브랜드·문화·직원이 인수자에 의해 바뀔 수 있다." },
  { title: "규제 리스크", desc: "전략적 인수자가 경쟁사일 경우 기업결합 심사에서 딜이 막힐 수 있다. Adobe × Figma가 대표적 사례다." },
];

// ── 상황별 엑싯 선택 테이블 ──────────────────────────────────────
const SITUATION_TABLE = [
  { situation: "시장 밸류에이션이 고평가 국면", recommendation: "IPO", color: "emerald" },
  { situation: "전략적 인수자가 높은 시너지를 제공", recommendation: "M&A 매각", color: "blue" },
  { situation: "정보 공개를 꺼리는 창업자", recommendation: "M&A 매각", color: "blue" },
  { situation: "PE 펀드 만기 도래", recommendation: "M&A 또는 세컨더리", color: "violet" },
  { situation: "상장 가능한 규모·실적 역사 보유", recommendation: "IPO", color: "emerald" },
  { situation: "경쟁 입찰 구도 형성 가능", recommendation: "M&A 매각", color: "blue" },
  { situation: "IPO 시장 침체", recommendation: "M&A 또는 세컨더리", color: "violet" },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    company: "Figma",
    title: "M&A가 무산되자 IPO로 방향 전환",
    type: "엑싯 전략 전환",
    typeColor: "emerald",
    analogy: "집을 대형 건설사에 팔려다 규제에 막혔는데, 오히려 독립 개발사로 주식시장에 올리게 된 것과 같다. 처음 계획이 막혔다고 해서 끝이 아니다.",
    paragraphs: [
      "2022년, Adobe는 UI/UX 디자인 협업 툴 Figma를 약 $200억에 인수하겠다고 발표했다. SaaS 역대 최고 프리미엄이었다. 그러나 EU 및 영국 규제 당국은 두 회사 모두 디자인 소프트웨어 시장의 지배적 사업자라며 반독점 우려를 제기했다.",
      "결국 2023년 12월 Adobe와 Figma는 합의 해지를 선언했다. Adobe는 Break-up Fee로 $10억(약 1.3조원)을 Figma에 지급했다. Figma는 갑작스럽게 독립 기업으로 돌아왔다.",
      "그러나 이 '실패'는 다른 의미의 성공으로 이어졌다. Figma는 $10억을 현금으로 받은 상태에서 독립 IPO를 준비할 수 있게 됐다. 2024~2025년 기준 Figma의 ARR은 $7억을 넘어섰고, IPO 기대 밸류에이션은 Adobe가 제시했던 가격을 넘을 수 있다는 시각도 있다.",
    ],
    lesson: "IPO와 M&A 엑싯은 상호 배타적이지 않다. M&A가 막히면 IPO 경로가 열리고, IPO 타이밍이 나쁘면 M&A를 선택할 수 있다. 하나의 전략이 닫혔을 때 다른 전략으로 전환하는 유연성이 PE 펀드와 창업자 모두에게 필요하다.",
  },
  {
    company: "Arm Holdings",
    title: "NVIDIA 인수 무산 → SoftBank IPO로 $54B",
    type: "M&A 실패 후 IPO 성공",
    typeColor: "blue",
    analogy: "대형 기업에 통째로 팔려다 규제에 막혔는데, 주식시장에 상장하자 오히려 더 높은 가치를 인정받은 케이스다.",
    paragraphs: [
      "SoftBank는 2016년 영국 반도체 IP 기업 Arm을 약 $320억에 인수했다. 2020년, SoftBank는 Arm을 NVIDIA에 $400억에 매각하기로 합의했다. 역대 최대 반도체 M&A였다.",
      "그러나 미국 FTC, EU, 영국 CMA가 잇따라 반독점 우려를 제기했다. NVIDIA가 Arm을 보유할 경우 반도체 업계 전체 공급망에 대한 지배력을 갖게 된다는 논리였다. 2022년 2월, NVIDIA는 인수를 공식 포기했다.",
      "SoftBank는 방향을 바꿔 Arm의 IPO를 추진했다. 2023년 9월, Arm은 Nasdaq에 상장되었고 시가총액은 상장 직후 $540억을 넘어섰다. NVIDIA에 팔려던 $400억을 주식시장에서 초과 달성한 셈이다. 단, IPO 시점 이후의 주가 변동이 최종 수익을 결정하므로 락업 기간 중 주가 유지가 핵심 변수였다.",
    ],
    lesson: "전략적 인수자가 없어도 IPO로 가치를 실현할 수 있다. 단, 시장 타이밍이 중요하다. Arm은 반도체 AI 붐이라는 시장 환경이 맞아떨어져 IPO가 성공했다. 시장 사이클이 나빴다면 결과는 달랐을 것이다.",
  },
];

export default function IpoVsMaExitClient() {
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
              <span className="text-xs text-gray-400">IPO vs M&A 엑싯</span>
            </div>
            <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1 mb-4">
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              IPO vs M&A 엑싯 — 투자자와 창업자의 회수 전략
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              PE 펀드와 창업자가 투자 자금을 회수하는 두 가지 핵심 경로 — 주식시장 상장(IPO)과 전략적 M&A 매각의 장단점, 선택 기준, 그리고 실제 딜에서 어떻게 결정이 바뀌는지.
            </p>

            {/* 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#exit-overview", label: "엑싯이란" },
                { href: "#ipo-pros-cons", label: "IPO 장단점" },
                { href: "#ma-pros-cons", label: "M&A 장단점" },
                { href: "#when-to-choose", label: "선택 기준" },
                { href: "#cases", label: "케이스 스터디" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="rounded-full px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: 엑싯이란 무엇인가 ── */}
          <motion.section id="exit-overview" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">엑싯이란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                PE(사모펀드) 펀드와 스타트업 창업자에게 <strong className="text-gray-800 dark:text-gray-200">엑싯(Exit)</strong>은 투자 자금을 현금으로 회수하는 결정적 순간이다. 아무리 좋은 기업을 저렴하게 사거나 만들었어도, 엑싯을 못 하면 수익이 실현되지 않는다.
              </p>
              <p>
                엑싯의 주요 옵션은 세 가지다. <strong className="text-gray-800 dark:text-gray-200">① IPO</strong> — 주식시장에 상장해 주식을 투자자에게 파는 방식, <strong className="text-gray-800 dark:text-gray-200">② 전략적 M&A 매각</strong> — 산업 내 전략적 인수자(Strategic Buyer)에게 회사를 통째로 파는 방식, <strong className="text-gray-800 dark:text-gray-200">③ 세컨더리 바이아웃(Secondary Buyout)</strong> — PE 펀드가 다른 PE 펀드에 파는 방식.
              </p>
              <p>
                이 중 가장 중요하고 가장 많이 비교되는 것이 IPO와 M&A 매각이다. 두 방법은 완전히 다른 시장 논리, 타임라인, 그리고 리스크 구조를 갖는다.
              </p>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                식당을 팔 때 주식시장에 상장해서 여러 투자자에게 나눠 파는 것(IPO) vs. 대형 식당 체인에 통째로 파는 것(M&A). 어떤 길이 더 유리한지는 지금 외식 시장의 열기, 내 식당의 규모, 그리고 내가 앞으로 경영에 계속 관여하고 싶은지에 따라 완전히 달라진다.
              </p>
            </div>

            {/* 3가지 엑싯 옵션 요약 */}
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                { type: "IPO", desc: "주식시장 상장. 공모를 통해 불특정 다수 투자자에게 주식 매각.", color: "emerald" },
                { type: "전략적 M&A", desc: "동종업계 또는 관련 산업 기업에 회사 전체 매각. 시너지 프리미엄 기대 가능.", color: "blue" },
                { type: "세컨더리 바이아웃", desc: "PE 펀드가 다른 PE 펀드에 매각. 전략적 인수자 없을 때 주요 옵션.", color: "violet" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.type} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                    <span className={`text-xs font-bold ${c.text}`}>{item.type}</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 2: IPO 장단점 ── */}
          <motion.section id="ipo-pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full px-3 py-1">IPO</span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">IPO의 장단점</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              IPO는 회사를 주식시장에 올리는 방식이다. 전량을 한 번에 팔지 않고 시장 가격을 통해 점진적으로 유동성을 확보한다. 이 과정에서 얻는 것과 잃는 것이 명확히 다르다.
            </p>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">장점</h3>
            <div className="space-y-2 mb-5">
              {IPO_PROS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-emerald-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">단점</h3>
            <div className="space-y-2 mb-5">
              {IPO_CONS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                IPO의 가장 큰 함정은 <strong>"상장 = 엑싯 완료"가 아니라는 점</strong>이다. 상장 후 대주주 지분을 실제로 현금화하는 데는 수년이 더 걸린다. 공모가 대비 주가가 하락하면 기대했던 수익이 크게 줄어든다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 3: M&A 매각 장단점 ── */}
          <motion.section id="ma-pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1">M&A 매각</span>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">M&A 매각의 장단점</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              M&A 매각은 한 명 또는 소수의 인수자에게 회사를 통째로 넘기는 방식이다. 한 번의 거래로 클린 엑싯이 가능하지만, 가격 협상력과 인수자 풀의 크기가 결과를 좌우한다.
            </p>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">장점</h3>
            <div className="space-y-2 mb-5">
              {MA_PROS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-blue-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">단점</h3>
            <div className="space-y-2 mb-5">
              {MA_CONS.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/50 text-sm">
                  <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                M&A 매각에서 가격을 결정하는 가장 강력한 요소는 <strong>경쟁 입찰(Competitive Auction)</strong>이다. 셀사이드 IB가 여러 전략적·재무적 인수자를 동시에 참여시켜 경쟁을 만들어야 프리미엄을 최대화할 수 있다. 단독 협상은 매도자에게 불리하다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 4: 상황별 선택 기준 ── */}
          <motion.section id="when-to-choose" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">어떤 상황에서 어떤 엑싯을 선택하나</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              IPO가 무조건 좋거나 M&A가 무조건 낫다는 법은 없다. 시장 환경, 기업 특성, 매도자 목적에 따라 최적 경로가 달라진다. 아래 기준이 선택의 출발점이다.
            </p>

            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-3/5">상황</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">권장 엑싯</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {SITUATION_TABLE.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.situation}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 ${c.badge}`}>{row.recommendation}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                좋은 날씨에 노천 마켓에서 파는 것(IPO)과 대형 구매자에게 직접 판매하는 것(M&A). 날씨(시장)가 좋으면 노천 마켓이 더 높은 가격을 받을 수 있지만, 비가 올 것 같으면 확실한 구매자에게 바로 파는 게 낫다.
              </p>
            </div>
          </motion.section>

          {/* ── 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 실전에서 엑싯 전략이 어떻게 바뀌는가</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                교과서적 선택 기준은 현실에서 수시로 뒤집힌다. 두 가지 케이스가 보여주듯, IPO와 M&A는 서로 대체 가능한 옵션이다.
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

          {/* ── 핵심 인사이트 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                IPO와 M&A 엑싯은 서로 다른 시장 조건·목적에 맞는 도구다. PE 펀드와 창업자에게 가장 중요한 것은 '어떤 방법이 본질적으로 더 나은가'가 아니라 <strong>'지금 이 시장 상황과 우리 회사 조건에서 어떤 방법이 최선인가'</strong>다. Figma와 Arm Holdings의 사례가 보여주듯, 첫 번째 엑싯 경로가 막혔을 때 두 번째 경로로 전환할 수 있는 유연성과 준비가 결국 가치 실현을 결정한다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/lbo", title: "LBO (차입매수)", desc: "PE 펀드의 대표적 인수 구조 — 인수 후 엑싯까지의 가치 창출 메커니즘", badge: "딜 구조" },
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "전략 수립부터 클로징까지 — M&A 매각의 전체 흐름", badge: "Deal Structure" },
                { href: "/deal-101/antitrust", title: "기업결합 심사", desc: "Figma·Arm 케이스가 보여주는 반독점 규제와 M&A 리스크", badge: "규제" },
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
      </main>
      <Footer />
    </>
  );
}
