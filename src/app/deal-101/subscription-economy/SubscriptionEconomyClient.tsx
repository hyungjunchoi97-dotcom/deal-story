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

// ── 구독 모델 유형 ───────────────────────────────────────────────
const SUBSCRIPTION_TYPES = [
  {
    id: "saas",
    label: "SaaS (Software as a Service)",
    color: "blue",
    margin: "마진 70%+",
    examples: ["Salesforce", "Microsoft 365", "Adobe Creative Cloud"],
    desc: "소프트웨어 월정액. 클라우드로 제공하므로 한계비용이 거의 없고 마진 구조가 탁월하다. 네트워크 효과와 전환 비용이 강한 락인(Lock-in)을 만든다.",
    maNote: "SaaS 기업은 ARR 멀티플로 평가. 성장률과 NRR이 밸류에이션을 결정한다.",
  },
  {
    id: "content",
    label: "콘텐츠 구독",
    color: "violet",
    margin: "마진 30~50% (콘텐츠 비용 제외)",
    examples: ["Netflix", "Spotify", "New York Times"],
    desc: "디지털 콘텐츠 정기 접근. 콘텐츠 제작·라이선싱 비용이 핵심 변수. 구독자 수×ARPU가 가장 중요한 KPI다.",
    maNote: "콘텐츠 IP와 구독자 데이터베이스가 인수의 핵심 자산.",
  },
  {
    id: "ecommerce",
    label: "이커머스 구독",
    color: "emerald",
    margin: "멤버십 자체는 고마진, 전체는 낮음",
    examples: ["Amazon Prime", "Costco 회원권", "쿠팡 로켓와우"],
    desc: "정기 배송 + 멤버십. 연회비 자체보다 구독자가 쓰는 추가 지출이 핵심. 락인(Lock-in) 효과로 고객 이탈을 막는다.",
    maNote: "구독자당 연간 지출액(Annual Spend per Subscriber)이 인수 가치 평가의 핵심.",
  },
  {
    id: "product",
    label: "제품 구독",
    color: "orange",
    margin: "하드웨어 낮음, 소프트웨어 높음",
    examples: ["Tesla FSD", "Apple One", "면도기 구독 (Dollar Shave Club)"],
    desc: "하드웨어 + 소프트웨어 결합. 하드웨어 마진은 낮지만 소프트웨어 구독으로 장기 수익성을 보완한다. 제품 판매 후에도 반복 수익이 발생하는 구조.",
    maNote: "하드웨어 설치 기반(Installed Base)이 구독 수익의 상한선을 결정한다.",
  },
];

// ── 밸류에이션 비교 데이터 ───────────────────────────────────────
const VALUATION_TABLE = [
  { category: "대표 배수", oneTime: "EV/EBITDA 8~12x", subscription: "EV/ARR 10~20x" },
  { category: "매출 예측 가능성", oneTime: "낮음 (분기별 편차 큼)", subscription: "높음 (ARR로 예측)" },
  { category: "고객 이탈 리스크", oneTime: "낮음 (거래 완료)", subscription: "Gross Churn이 핵심 리스크" },
  { category: "성장 모멘텀 KPI", oneTime: "신규 수주, 수주잔고", subscription: "NRR, Net New ARR" },
  { category: "인수자 관심 포인트", oneTime: "자산, 고객, 기술", subscription: "ARR 품질, 이탈률, LTV/CAC" },
  { category: "PMI 시너지", oneTime: "원가 절감 중심", subscription: "ARR 시너지 + 교차 판매 가능성" },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    company: "Adobe의 구독 전환 — \"단기 고통, 장기 지배\"",
    type: "구독 전환 성공",
    typeColor: "violet",
    timeline: [
      "2013년: Creative Suite (영구 라이선스, ~$2,600) → Creative Cloud (월 $50) 전환 강제",
      "전환 직후: 주가 $40 수준, 주주 반발 극심",
      "2021년: 주가 $700+, 시가총액 $330B+ (약 33배 성장)",
      "2022년: Adobe의 Figma 인수 시도 ($20B) — 구독 생태계 강화",
    ],
    analogy:
      "단골 고객에게 '이제부터 밥값을 한 번에 내는 대신 매달 조금씩 내라'고 바꾼 것. 단골은 처음엔 불만이지만, 매달 새로운 메뉴와 개선된 서비스를 제공하면 결국 더 오래 더 많이 쓴다.",
    paragraphs: [
      "2013년 Adobe는 업계를 뒤흔드는 결정을 했다. $2,600짜리 Creative Suite 영구 라이선스 판매를 중단하고 월 $50 Creative Cloud 구독으로 전환을 강제했다. 주가는 40달러 수준에서 주주 반발을 받았고, 단기 매출은 급감했다.",
      "왜 성공했나. 첫째, Adobe 파일 포맷(PSD, AI, PDF)의 호환성 때문에 실제 전환 비용(Switching Cost)이 매우 높았다. 경쟁 소프트웨어로 옮기면 기존 파일, 플러그인, 워크플로우 전체가 흔들린다. 둘째, 매월 업데이트로 항상 최신 버전을 받는다는 가치. 셋째, 클라우드 협업 기능은 팀 단위 락인을 강화했다.",
      "결과: Creative Cloud 구독자는 수천만 명으로 성장했다. 2012년 약 $10B이던 시가총액은 2021년 고점에서 약 $330B으로 약 33배 성장했다. 이 전환은 단순 가격 모델 변경이 아니라 비즈니스 모델 재창조였다.",
    ],
    lesson:
      "구독 전환에 성공하면 M&A 인수가 기준이 완전히 달라진다. Adobe가 $20B에 Figma를 인수하려 했을 때 (결국 규제로 무산), 구독 ARR이 높은 Adobe의 입장에서는 그 가격이 정당화될 수 있었다. 구독 기반을 갖춘 인수자는 높은 가격도 더 쉽게 정당화한다.",
    maMetric: "ARR 배수 + NRR + LTV/CAC",
    maColor: "violet",
  },
  {
    company: "Microsoft 365 — 엔터프라이즈 구독의 정석",
    type: "구독 모델 지배",
    typeColor: "blue",
    timeline: [
      "Office 패키지 (영구 라이선스, ~$400) → Microsoft 365 (월 $12.50~$35/사용자)",
      "2023년: Microsoft Commercial Cloud ARR $110B+ 돌파",
      "Teams 포함으로 Slack 대비 경쟁 우위, 이탈 비용 극대화",
      "Nuance 인수 (2022, $19.7B): AI 음성인식 → 의료 구독 서비스 강화",
    ],
    analogy:
      "회사 전체가 쓰는 사무용 소프트웨어를 한 번 도입하면 바꾸기 너무 어렵다. Word, Excel, Teams, Outlook이 모두 연결되어 있는 상태에서 경쟁사로 전환하는 비용은 단순 구독료를 넘어선다 — 직원 재교육, 파일 호환성, 워크플로우 재설계까지 따라온다.",
    paragraphs: [
      "Microsoft의 Office → Microsoft 365 전환은 기업용 소프트웨어 구독의 교과서다. 영구 라이선스 ~$400에서 월 $12.50~$35/사용자로 전환하면서 초기에는 단가 하락처럼 보였지만, 사용자 수와 ARR 성장이 그 차이를 수십 배로 보완했다.",
      "Teams를 번들 포함시킨 전략이 결정적이었다. Slack에 연간 수십억 달러를 지불하는 기업들이 이미 Microsoft 365를 쓰고 있다면 Teams로 전환하는 경제적 인센티브가 크다. 2020~2021년 팬데믹 기간 Microsoft Teams MAU는 수천만에서 수억으로 급증했다.",
      "2022년 Nuance 인수($19.7B)는 구독 생태계 강화 목적이다. AI 음성인식 기술을 의료·엔터프라이즈 구독 서비스에 통합해 헬스케어 세그먼트의 ARR을 높이는 전략이다. 구독 기업이 다른 구독 기업을 인수할 때 ARR 시너지가 즉시 보이므로 높은 가격 정당화가 용이하다.",
    ],
    lesson:
      "구독 기업이 다른 구독 기업을 인수할 때 ARR 시너지가 바로 보이므로 높은 가격 정당화가 용이하다. Nuance의 AI 기술이 Microsoft의 기존 구독 기반에 통합되면 신규 구독 제품(예: Dragon Medical)의 ARR이 즉시 성장한다. 이것이 구독 경제에서 M&A 프리미엄이 높은 이유다.",
    maMetric: "Commercial Cloud ARR + NRR + 번들링 효과",
    maColor: "blue",
  },
];

export default function SubscriptionEconomyClient() {
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
            <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-3 py-1 mb-4">
              전략
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              구독 경제 — 반복 매출이 M&A 밸류에이션을 어떻게 바꾸는가
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              구독 모델의 4가지 유형, ARR·NRR·LTV가 기업가치에 미치는 영향, Adobe·Microsoft 케이스 스터디.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "구독 경제란?", color: "blue" },
                { href: "#types", label: "4가지 유형", color: "violet" },
                { href: "#valuation", label: "밸류에이션 임팩트", color: "emerald" },
                { href: "#cases", label: "케이스 스터디", color: "rose" },
                { href: "#related", label: "관련 개념", color: "indigo" },
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

          {/* ── 1. 구독 경제란 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">구독 경제란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                구독 경제(Subscription Economy)는 <strong className="text-gray-800 dark:text-gray-200">소비자가 제품을 소유하는 대신 정기적으로 요금을 내고 사용권을 얻는 비즈니스 모델</strong>이다. 일회성 판매와 달리 수익이 계약 기간에 걸쳐 분산되므로 예측 가능성이 극적으로 높아진다.
              </p>
              <p>
                M&A 맥락에서 구독 경제가 중요한 이유는 <strong className="text-gray-800 dark:text-gray-200">높은 ARR(연간반복수익) 배수 프리미엄</strong> 때문이다. 인수자가 기꺼이 더 높은 가격을 지불할 의향이 있고, 그것을 정당화하는 논리도 있다.
              </p>
            </div>

            {/* 일회성 vs 구독 비교 */}
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">일회성 판매 모델</p>
                <ul className="space-y-1.5">
                  {[
                    "판매 시 수익 한 번에 인식",
                    "다음 분기 매출이 불확실",
                    "고객 유지율 추적 어려움",
                    "EV/EBITDA 8~12x 배수",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 p-5">
                <p className="text-xs font-bold text-violet-700 dark:text-violet-300 mb-2">구독 모델</p>
                <ul className="space-y-1.5">
                  {[
                    "계약 기간에 걸쳐 수익 분산 인식",
                    "ARR로 미래 매출 예측 가능",
                    "NRR·Churn으로 건전성 측정",
                    "EV/ARR 10~20x 이상 배수",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-violet-700 dark:text-violet-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                냉장고를 파는 것 vs 냉장고 대여 서비스. 파는 사람 입장에서는 한 번에 $1,000을 받는 것보다 매달 $80씩 13개월 받는 게 더 가치 있다 — 그 고객이 평균 5년은 쓰기 때문이다. 5년이면 $4,800. 한 번 팔고 끝나는 것보다 4배 이상의 가치다. 인수자는 이 차이를 밸류에이션에 반영한다.
              </p>
            </div>

            {/* 인사이트 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                반복 매출 = 예측 가능성 = 낮은 할인율 = 높은 기업가치. 이것이 구독 기업이 동일 매출 규모의 일회성 판매 기업보다 2~3배 높은 EV를 받는 근본 논리다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 4가지 유형 ── */}
          <motion.section id="types" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">구독 모델의 4가지 유형</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              구독 경제는 단일 모델이 아니다. 유형마다 마진 구조, 핵심 KPI, M&A에서 평가받는 방식이 다르다.
            </p>
            <div className="space-y-5">
              {SUBSCRIPTION_TYPES.map((type) => {
                const c = COLOR_MAP[type.color];
                return (
                  <div key={type.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div>
                        <h3 className={`text-sm font-bold ${c.text}`}>{type.label}</h3>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {type.examples.map((ex, i) => (
                            <span key={i} className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${c.badge}`}>{ex}</span>
                          ))}
                        </div>
                      </div>
                      <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                        {type.margin}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{type.desc}</p>
                    <div className={`text-xs rounded-lg px-3 py-2 ${c.bg} border ${c.border} ${c.text}`}>
                      📊 M&A 관점: {type.maNote}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. 밸류에이션 임팩트 ── */}
          <motion.section id="valuation" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">구독 경제가 M&A 밸류에이션을 바꾸는 방법</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              구독 기업은 일회성 판매 기업과 완전히 다른 기준으로 평가된다. 핵심은 예측 가능성과 성장 모멘텀이다.
            </p>

            {/* 배수 비교 테이블 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">구분</th>
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">일회성 판매</th>
                    <th className="text-left text-xs font-bold text-violet-700 dark:text-violet-300 px-4 py-3 w-1/3">구독 모델</th>
                  </tr>
                </thead>
                <tbody>
                  {VALUATION_TABLE.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.category}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.oneTime}</td>
                      <td className="px-4 py-3 text-xs text-violet-700 dark:text-violet-300 font-medium">{row.subscription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Adobe 전환 수치 하이라이트 */}
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5 mb-5">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-3">📈 Adobe 구독 전환이 증명한 것</p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100">$10B</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2012년 시가총액 (전환 전)</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">$330B</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2021년 고점 시가총액</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-violet-600 dark:text-violet-400">33x</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">약 9년간 시가총액 성장</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-emerald-700 dark:text-emerald-300">
                전환 직후 단기 매출 급락 → 장기 ARR 폭발. 구독 전환 단기 고통이 장기 지배로 이어진 교과서적 사례.
              </p>
            </div>

            {/* 핵심 지표 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">구독 경제 M&A 실사에서 반드시 확인할 핵심 지표</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { metric: "ARR (Annual Recurring Revenue)", desc: "연간 반복 매출 — 구독 기업 가치의 기준점" },
                  { metric: "MRR (Monthly Recurring Revenue)", desc: "월간 반복 매출 — 단기 트렌드 추적" },
                  { metric: "NRR (Net Revenue Retention)", desc: "100% 이상이면 기존 고객만으로도 성장" },
                  { metric: "Gross Churn", desc: "이탈한 ARR 비율 — 낮을수록 좋음" },
                  { metric: "LTV (Customer Lifetime Value)", desc: "고객 1명이 평생 내는 총 수익" },
                  { metric: "CAC (Customer Acquisition Cost)", desc: "고객 1명 획득 비용. LTV/CAC ≥ 3 이상이 건전한 지표" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-violet-500" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item.metric}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                NRR이 100% 이상인 구독 기업은 신규 고객 없이도 기존 고객의 업셀·확장만으로 성장한다. 이것이 투자자와 인수자가 구독 기업에 높은 프리미엄을 지불하는 가장 강력한 논거다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 구독 전환이 M&A 밸류에이션을 어떻게 바꿨나</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Adobe와 Microsoft는 구독 모델 전환이 기업가치를 어떻게 재정의하는지를 가장 극적으로 보여주는 두 사례다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const maC = COLOR_MAP[caseItem.maColor];
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
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${maC.bg} ${maC.text} border ${maC.border}`}>
                        📊 핵심 지표: {caseItem.maMetric}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* 타임라인 */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">주요 이정표</h4>
                        <ul className="space-y-1">
                          {caseItem.timeline.map((event, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${maC.dot}`} />
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>

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
          <motion.section id="related" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/saas-valuation", title: "SaaS 밸류에이션", desc: "ARR 배수, Rule of 40, NRR이 SaaS 기업 가치에 미치는 영향", badge: "밸류에이션" },
                { href: "/deal-101/arr-multiple", title: "ARR 멀티플", desc: "구독 기업을 평가하는 핵심 배수와 성장률·이탈률의 관계", badge: "밸류에이션" },
                { href: "/deal-101/platform-strategy", title: "플랫폼 전략", desc: "구독과 플랫폼이 결합할 때 만들어지는 네트워크 효과와 락인", badge: "전략" },
                { href: "/deal-101/pmi", title: "PMI (인수 후 통합)", desc: "구독 기업 PMI에서 ARR 시너지를 실현하는 방법", badge: "딜 구조" },
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
        <LikeButton slug={"subscription-economy"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
