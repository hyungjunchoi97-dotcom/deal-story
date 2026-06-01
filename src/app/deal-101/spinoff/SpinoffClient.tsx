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

// ── 구조조정 방식 비교 데이터 ────────────────────────────────────
const RESTRUCTURE_TYPES = [
  {
    name: "스핀오프 (Spin-off)",
    color: "emerald",
    cashReceived: "없음",
    taxEfficiency: "최고 (비과세)",
    ownershipChange: "기존 주주에게 신주 배분",
    timeline: "6~18개월",
    bestFor: "복합기업 할인 해소, 전략적 집중",
  },
  {
    name: "카브아웃 (Carve-out / IPO)",
    color: "blue",
    cashReceived: "있음 (신규 자금 조달)",
    taxEfficiency: "중간",
    ownershipChange: "자회사 일부 상장, 모회사 지분 유지",
    timeline: "12~24개월",
    bestFor: "성장 자금 조달 + 독립성 확보",
  },
  {
    name: "분할매각 (Divestiture)",
    color: "amber",
    cashReceived: "있음 (현금 매각)",
    taxEfficiency: "낮음 (양도소득세 발생)",
    ownershipChange: "제3자에게 완전 매각",
    timeline: "3~12개월",
    bestFor: "빠른 현금 확보, 비핵심 사업 정리",
  },
  {
    name: "Split-off",
    color: "violet",
    cashReceived: "없음",
    taxEfficiency: "높음",
    ownershipChange: "일부 주주가 모회사 주식을 자회사 주식으로 교환",
    timeline: "6~18개월",
    bestFor: "주주 선택권 부여, 지분 구조 조정",
  },
  {
    name: "역합병 (Reverse Morris Trust)",
    color: "indigo",
    cashReceived: "없음",
    taxEfficiency: "최고 (스핀오프+합병 결합)",
    ownershipChange: "스핀오프 후 전략적 파트너와 합병",
    timeline: "12~24개월",
    bestFor: "세금 효율적 대형 사업부 M&A",
  },
];

// ── 가치 창출 메커니즘 ────────────────────────────────────────────
const VALUE_DRIVERS = [
  {
    icon: "📉",
    title: "복합기업 할인 제거",
    color: "emerald",
    desc: "시장은 복잡한 포트폴리오를 단일 배수로 평가해 할인한다. 분리 후 각 사업부는 업종에 맞는 프리미엄 배수를 적용받는다.",
    detail: "고성장 테크 사업부가 성숙 제조업과 묶여 있으면, 테크 프리미엄을 인정받지 못한다. 분리하면 테크 사업부는 20~30x EV/EBITDA, 제조 사업부는 8~12x를 각각 받을 수 있다.",
  },
  {
    icon: "🎯",
    title: "경영 집중도 향상",
    color: "blue",
    desc: "분리된 CEO는 단 하나의 사업에만 집중한다. 전략이 명확해지고 자원 배분이 최적화된다.",
    detail: "복합기업에서 성장 사업부는 종종 현금창출 사업부의 자금 지원에 의존하다 자체 혁신 능력을 잃는다. 독립하면 자체 P&L 책임과 집중이 생긴다.",
  },
  {
    icon: "🔗",
    title: "인센티브 정렬",
    color: "violet",
    desc: "스핀오프 법인 임원들이 해당 사업 주가와 직결된 스톡옵션을 보유하게 된다.",
    detail: "복합기업 내 사업부 임원은 전체 회사 주가를 움직이기 어렵다. 독립된 법인의 임원은 자신의 결정이 직접 주가에 반영되어 동기부여가 극대화된다.",
  },
  {
    icon: "💼",
    title: "다른 투자자 기반 공략",
    color: "amber",
    desc: "고성장 테크 사업부는 성장주 투자자가, 안정적 현금흐름 사업부는 가치주·배당주 투자자가 보유한다.",
    detail: "투자자 기반이 맞지 않으면 주식이 저평가된다. 분리하면 각 투자자가 원하는 스타일의 주식을 직접 선택할 수 있어 수요가 늘어나고 프리미엄이 붙는다.",
  },
];

// ── 케이스 스터디 데이터 ─────────────────────────────────────────
const CASES = [
  {
    title: "PayPal × eBay 분리 (2015)",
    dealContext: "Carl Icahn 압박 → eBay 주주 1주당 PayPal 1주 배분",
    color: "blue",
    typeLabel: "스핀오프 성공",
    typeColor: "emerald",
    analogy: "같은 쇼핑몰 안에 결제 전문 핀테크와 이커머스 플랫폼이 같이 있으면, 결제 사업의 성장성이 이커머스 배수에 묻혀 저평가된다. 분리하면 각각이 제대로 된 가격표를 받는다.",
    paragraphs: [
      "eBay와 PayPal은 2002년부터 결합된 복합기업이었다. 오랫동안 PayPal은 eBay의 결제 인프라로만 여겨졌다. 하지만 스마트폰 보급과 핀테크 붐으로 PayPal의 독자적 성장 잠재력이 명확해졌다. 2014년 억만장자 투자자 Carl Icahn이 분리를 강하게 압박했다.",
      "2015년 7월, eBay는 PayPal을 스핀오프했다. eBay 주주들은 보유 주식 1주당 PayPal 주식 1주를 받았다. 분리 직후 PayPal 시가총액은 약 $47B이었다.",
      "결과는 극적이었다. PayPal은 독립 후 핀테크 성장주로 재평가받아 2021년 고점에서 시가총액 $340B을 넘어섰다. eBay 역시 분리 후 이커머스에 집중하면서 수익성을 개선했다.",
    ],
    lesson: "결합 상태에서 PayPal의 핀테크 잠재력은 eBay의 이커머스 배수에 묻혀 제대로 평가받지 못했다. 분리는 두 사업 모두에게 이익이었다. 복합기업 할인의 전형적 해소 사례.",
    lessonColor: "blue",
  },
  {
    title: "GE의 3분할 (2021~2024) — 역대 최대 기업 분해",
    dealContext: "GE HealthCare (2023년) → GE Vernova (2024년) → GE Aerospace (잔존)",
    color: "rose",
    typeLabel: "100년 복합기업 해체",
    typeColor: "rose",
    analogy: "거대한 백화점이 100년간 가전, 의료, 에너지, 금융, 항공을 한 지붕 아래 팔다 보니 어느 부서도 특화 전문점의 가격 경쟁력을 갖추지 못했다. 분해하자 각 전문점이 제값을 받기 시작했다.",
    paragraphs: [
      "1892년 창립된 GE는 한때 세계 최대 시가총액 기업이었다. 그러나 가전, 의료기기, 에너지, 금융, 항공 등 너무나 다양한 사업을 한 회사에서 운영하는 복합기업 전략은 결국 한계를 드러냈다. 2018년 다우존스 산업평균지수에서 퇴출됐다.",
      "2021년 CEO Larry Culp는 역사적 결단을 내렸다. GE를 세 개의 독립 상장사로 분리한다는 계획이었다. 2023년 의료기기 사업부 GE HealthCare가 먼저 상장됐다(상장 직후 약 $25B 가치). 2024년에는 에너지 사업부 GE Vernova가 분리 상장됐고 풍력·가스터빈 전환 수요에 힘입어 빠르게 상승했다. 나머지는 GE Aerospace로 남았다.",
      "분해 이후 세 법인의 합산 시가총액은 분해 전 GE 단독 시가총액을 크게 상회했다. 100년 복합기업 해체가 복합기업 할인의 해소로 이어진 것이다.",
    ],
    lesson: "100년 복합기업도 분해될 수 있다. GE의 사례는 복합기업 할인이 얼마나 강력하게 작동하는지, 그리고 분해가 주주 가치를 어떻게 회복시키는지를 보여주는 역대 최대 케이스다. 분할 후 합산 시총 > 분할 전 시총.",
    lessonColor: "rose",
  },
];

export default function SpinoffClient() {
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
              <span className="text-xs text-gray-400">스핀오프</span>
            </div>
            <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              스핀오프 — 사업부 분리로 숨겨진 가치를 꺼내는 전략
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              복합기업 할인(Conglomerate Discount)을 해소하는 핵심 도구. 스핀오프가 무엇인지, 왜 세금 효율적인지, PayPal·GE 사례로 배우는 가치 창출 메커니즘.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "스핀오프란?", color: "violet" },
                { href: "#comparison", label: "구조조정 방식 비교", color: "blue" },
                { href: "#value", label: "가치 창출 메커니즘", color: "emerald" },
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

          {/* ── 1. 스핀오프란 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">스핀오프란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">스핀오프(Spin-off)</strong>는 모회사가 특정 사업부를 독립 법인으로 분리하고,
                기존 주주들에게 신설 법인의 주식을 무상으로 배분하는 기업 구조조정 방식이다.
              </p>
              <p>
                핵심은 <strong className="text-gray-800 dark:text-gray-200">현금 거래가 없다</strong>는 점이다. 모회사는 사업부를 팔아서 현금을 받는 게 아니라,
                기존 주주들에게 신규 법인 주식을 나눠주는 방식으로 사업부를 독립시킨다.
                이 덕분에 세금 처리에서 큰 이점이 있다 — 미국 세법 Section 355 적용 시 과세 이연 또는 비과세가 가능하다.
              </p>
            </div>

            {/* 3가지 차이점 박스 */}
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                {
                  method: "스핀오프",
                  color: "emerald",
                  features: ["현금 수수 없음", "기존 주주에게 신주 배분", "세금 효율 최고"],
                },
                {
                  method: "카브아웃 / IPO",
                  color: "blue",
                  features: ["신규 자금 조달", "공개 시장에 일부 상장", "모회사 지분 일부 유지"],
                },
                {
                  method: "분할매각",
                  color: "amber",
                  features: ["현금 수취", "제3자에게 완전 매각", "양도소득세 발생"],
                },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.method} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <p className={`text-xs font-bold ${c.text} mb-2`}>{item.method}</p>
                    <ul className="space-y-1">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* 비유 박스 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                하나의 회사 안에 IT 기업과 공장이 같이 있으면, 시장은 그 둘을 따로 평가하지 못해 전체를 할인한다.
                분리하면 IT 사업부는 성장주 배수로, 공장은 안정적 현금흐름 배수로 각각의 가치를 온전히 인정받는다.
              </p>
            </div>

            {/* 인사이트 박스 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                스핀오프의 본질은 시장이 발견하지 못한 숨겨진 가치를 드러내는 것이다.
                기업이 너무 크고 복잡할 때, 분리가 통합보다 더 큰 주주 가치를 만들 수 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 구조조정 방식 비교 ── */}
          <motion.section id="comparison" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">스핀오프 vs 다른 구조조정 방식 비교</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              사업부를 분리하는 방법은 스핀오프 외에도 여러 가지가 있다. 상황에 따라 최적의 방식이 다르다.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">방식</th>
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">현금 수수</th>
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">세금 효율</th>
                    <th className="text-left font-bold text-gray-600 dark:text-gray-400 px-4 py-3">적합한 상황</th>
                  </tr>
                </thead>
                <tbody>
                  {RESTRUCTURE_TYPES.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 ${c.badge}`}>{row.name}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.cashReceived}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.taxEfficiency}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.bestFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ── 3. 가치 창출 메커니즘 ── */}
          <motion.section id="value" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">스핀오프 가치 창출 메커니즘</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              스핀오프는 어떻게 가치를 만들어내는가. 단순히 쪼개는 것이 아니라, 각각의 주체가 더 높은 가치를 인정받는 구체적 이유가 있다.
            </p>

            <div className="space-y-4">
              {VALUE_DRIVERS.map((driver, i) => {
                const c = COLOR_MAP[driver.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">{driver.icon}</span>
                      <div className="flex-1">
                        <h3 className={`text-sm font-bold ${c.text} mb-1`}>{driver.title}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{driver.desc}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{driver.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 인사이트 박스 */}
            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                "2 + 2 = 5" — 각각으로 분리했을 때 합산 시총이 통합 시총보다 높아지는 현상.
                스핀오프는 이 역설적 수식이 실제로 성립하는 드문 사례다.
                복합기업 할인이 크면 클수록, 분리의 가치 창출 효과도 그만큼 크다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                스핀오프가 실제로 어떻게 주주 가치를 만들어냈는지, 두 가지 대표 사례를 통해 확인해보자.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const c = COLOR_MAP[caseItem.color];
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
                { href: "/deal-101/reverse-morris-trust", title: "Reverse Morris Trust", desc: "스핀오프를 M&A와 결합해 세금 없이 사업부를 이전하는 고급 구조", badge: "Deal Structure" },
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "스핀오프를 포함한 전체 M&A 딜 실행 단계와 프로세스", badge: "Deal Process" },
                { href: "/deal-101/ipo-vs-ma-exit", title: "IPO vs M&A 엑싯", desc: "카브아웃(IPO)과 스핀오프의 차이, 엑싯 전략 선택 기준", badge: "Deal Structure" },
                { href: "/deal-101/strategic-ma", title: "전략적 M&A", desc: "스핀오프가 전체 기업 전략 포트폴리오 재편에서 갖는 역할", badge: "Strategy" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"spinoff"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
