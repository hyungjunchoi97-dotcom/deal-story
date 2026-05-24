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

// ── 네트워크 효과 4가지 데이터 ──────────────────────────────────────
const NETWORK_EFFECTS = [
  {
    id: "direct",
    label: "직접 네트워크 효과",
    subtitle: "Direct Network Effect",
    color: "blue",
    description: "같은 그룹 내 사용자가 늘수록 서비스 가치가 증가하는 효과다. 모든 기존 사용자가 신규 사용자에게 직접적인 가치를 제공한다.",
    examples: ["WhatsApp, 카카오톡 — 친구가 많을수록 유용", "전화 네트워크 — 가입자가 많을수록 통화 가능 상대 증가", "Zoom — 동료가 많이 쓸수록 혼자만 다른 툴 쓰기 어려움"],
  },
  {
    id: "indirect",
    label: "간접 네트워크 효과",
    subtitle: "Indirect Network Effect",
    color: "violet",
    description: "서로 다른 두 그룹(A 그룹과 B 그룹) 간에 발생하는 효과. A 그룹이 늘면 B 그룹의 가치가 높아지고, B 그룹이 늘면 A 그룹의 가치가 높아지는 양방향 선순환이다.",
    examples: ["iOS 사용자 증가 → 앱 개발자 증가 → 더 좋은 앱 → iOS 매력 증가", "Uber 승객 증가 → 드라이버 증가 → 대기시간 감소 → 승객 증가", "Airbnb 여행자 증가 → 호스트 증가 → 숙소 다양성 증가 → 여행자 증가"],
  },
  {
    id: "data",
    label: "데이터 네트워크 효과",
    subtitle: "Data Network Effect",
    color: "emerald",
    description: "사용자 증가 → 데이터 증가 → AI/알고리즘 개선 → 서비스 품질 향상 → 사용자 추가 증가의 선순환이다. 데이터가 경쟁 해자 역할을 한다.",
    examples: ["Google 검색 — 검색량이 많을수록 알고리즘이 더 정확해짐", "Netflix 추천 — 시청 데이터가 많을수록 추천 정확도 향상", "Waze — 사용자가 많을수록 실시간 교통 정보 정밀도 향상"],
  },
  {
    id: "supply",
    label: "공급자 네트워크 효과",
    subtitle: "Supply-side Network Effect",
    color: "orange",
    description: "플랫폼 공급자(셀러·개발자·창작자)가 늘어날수록 소비자에게 제공되는 가치가 증가하는 효과. 공급의 다양성과 품질이 소비자를 끌어들인다.",
    examples: ["Amazon Marketplace — 셀러가 많을수록 상품 선택지 증가", "App Store — 앱 개발자가 많을수록 앱 생태계 풍부", "YouTube — 크리에이터가 많을수록 시청자 체류시간 증가"],
  },
];

// ── 플랫폼 M&A 인수 동기 5가지 ─────────────────────────────────────
const MA_REASONS = [
  { icon: "🌐", title: "네트워크 효과 획득", color: "blue", desc: "플랫폼 자체를 구축하는 데 10년이 걸리는 것을 인수하면 즉시 획득. 전략적 M&A에서 가장 강력한 인수 동기 중 하나다." },
  { icon: "👥", title: "사용자 기반 확보", color: "violet", desc: "DAU(일일활성사용자), MAU(월간활성사용자)는 미래 수익의 원천. 사용자 기반을 돈 주고 사는 것이 직접 구축보다 훨씬 빠르다." },
  { icon: "📊", title: "데이터 자산 인수", color: "emerald", desc: "플랫폼이 수년에 걸쳐 축적한 사용자 행동 데이터는 재현 불가능한 독점 자산. 경쟁사가 돈을 들여도 단기간에 복제할 수 없다." },
  { icon: "🏗️", title: "생태계 진입 또는 차단", color: "amber", desc: "경쟁 플랫폼의 생태계로의 진입을 확보하거나, 반대로 잠재 위협 플랫폼이 자신의 생태계를 잠식하기 전에 선제적으로 차단한다." },
  { icon: "🛡️", title: "경쟁자 제거", color: "rose", desc: "잠재적 위협이 될 플랫폼을 선제 인수해 경쟁 가능성을 제거. Meta의 Instagram·WhatsApp 인수가 대표적 사례다." },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    title: "Google × YouTube ($1.65B, 2006)",
    subtitle: "역대 최고 ROI M&A 중 하나",
    typeColor: "emerald",
    type: "역사적 성공",
    background: "YouTube 설립 18개월, 직원 65명, 매출 거의 없음. Google Video가 동영상 플랫폼 경쟁에서 뒤처지고 있었다.",
    strategy: "동영상 플랫폼 네트워크 효과가 임계점을 넘기 전에 인수. 콘텐츠 생산자와 시청자의 양방향 네트워크가 이미 형성 중이었다.",
    result: "2023년 YouTube 광고 매출 약 $31B/년. 인수가 $1.65B의 18배 이상을 매년 벌어들이는 구조.",
    synergy: "Google 인프라(CDN, 광고 시스템 AdSense) + YouTube 네트워크 효과의 결합이 핵심.",
    lesson: "플랫폼의 가치는 현재 매출이 아닌 네트워크의 임계점 돌파 가능성에 있다. 매출 없는 18개월 기업에 $1.65B을 지불한 것은 무모한 것이 아니라, 네트워크 임계점을 정확히 읽은 판단이었다.",
  },
  {
    title: "Microsoft × LinkedIn ($26.2B, 2016) + GitHub ($7.5B, 2018)",
    subtitle: "전문직·개발자 플랫폼 생태계 구축",
    typeColor: "blue",
    type: "전략적 생태계 구축",
    background: "LinkedIn: 4억 3천만 전문직 소셜 그래프 + 구인구직 데이터. GitHub: 2,800만 개발자 코드 협업 플랫폼.",
    strategy: "각각 독립 운영을 약속해 플랫폼 신뢰도를 유지하면서, Microsoft 엔터프라이즈 생태계와의 접점을 조용히 확장.",
    result: "LinkedIn × Microsoft Dynamics(CRM) 시너지, GitHub × Azure DevOps, GitHub Copilot(AI 코딩 어시스턴트) 출시.",
    synergy: "서로 다른 전문직 플랫폼들(전문직 네트워크 + 개발자 네트워크)을 연결해 Microsoft 엔터프라이즈 생태계를 강화.",
    lesson: "플랫폼 인수 후 독립성 보장이 오히려 더 큰 가치를 만든다. 강제 통합보다 생태계 연결이 플랫폼 M&A의 성공 공식.",
  },
];

export function PlatformStrategyClient() {
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
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              전략
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              플랫폼 전략 — 네트워크 효과가 만드는 M&A 프리미엄
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              플랫폼 vs 파이프라인의 차이, 네트워크 효과 4가지 유형, 플랫폼을 인수하는 5가지 이유, Google×YouTube·Microsoft×LinkedIn/GitHub 케이스 스터디.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "플랫폼이란?", color: "blue" },
                { href: "#network-effects", label: "네트워크 효과 4가지", color: "violet" },
                { href: "#ma-reasons", label: "인수 동기 5가지", color: "emerald" },
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

          {/* ── 1. 플랫폼 전략이란 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">플랫폼 전략이란</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                플랫폼(Platform)이란 <strong className="text-gray-800 dark:text-gray-200">두 개 이상의 서로 다른 사용자 그룹을 연결하는 인프라</strong>다. 각 그룹은 플랫폼을 통해 상대방 그룹에게 가치를 제공하거나 제공받는다.
              </p>
              <p>
                전통적인 파이프라인(Pipeline) 기업과의 차이가 핵심이다. 파이프라인은 원재료를 가공해 최종 소비자에게 전달하는 단방향 가치 흐름이다. 플랫폼은 생산자와 소비자를 양방향으로 연결하며, 플랫폼 자체는 그 연결의 인프라가 된다.
              </p>
              <p>
                M&A에서 플랫폼이 중요한 이유는 단순하다: 네트워크 효과로 형성된 경쟁 해자는 단기간에 복제가 불가능하고, 한번 임계점을 넘은 플랫폼은 승자독식 구조로 수렴하기 때문이다. 인수자는 그 가치에 높은 프리미엄을 지불한다.
              </p>
            </div>

            {/* 파이프라인 vs 플랫폼 비교 */}
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left text-xs font-bold text-gray-600 dark:text-gray-400 px-4 py-3 w-1/3">구분</th>
                    <th className="text-left text-xs font-bold text-gray-700 dark:text-gray-300 px-4 py-3 w-1/3">파이프라인 (전통 기업)</th>
                    <th className="text-left text-xs font-bold text-blue-700 dark:text-blue-300 px-4 py-3 w-1/3">플랫폼 기업</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: "가치 흐름", pipeline: "단방향 (생산자 → 소비자)", platform: "양방향 (생산자 ↔ 소비자)" },
                    { category: "핵심 자산", pipeline: "공장, 재고, 인력", platform: "사용자 네트워크, 데이터" },
                    { category: "성장 방식", pipeline: "투자 확대로 선형 성장", platform: "네트워크 효과로 지수 성장" },
                    { category: "경쟁 해자", pipeline: "자본력, 브랜드", platform: "네트워크 효과 (복제 불가)" },
                    { category: "대표 사례", pipeline: "Toyota, Samsung, Nike", platform: "Uber, Airbnb, App Store" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 dark:border-gray-700/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50/50 dark:bg-gray-800/20"}`}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{row.category}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{row.pipeline}</td>
                      <td className="px-4 py-3 text-xs text-blue-600 dark:text-blue-400 font-medium">{row.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                전통 기업은 우물이다. 물을 직접 퍼서 파는 사람. 플랫폼은 상수도관이다. 수원지(생산자)와 가정(소비자)을 연결하는 관이 되면, 관이 두꺼워질수록 모든 물이 그 관을 통해 흐른다. 경쟁자는 새 우물을 팔 수 있지만, 이미 모든 가정에 연결된 상수도관을 대체하기란 훨씬 어렵다.
              </p>
            </div>

            {/* 인사이트 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                플랫폼 기업의 가치평가 멀티플이 전통 기업보다 훨씬 높은 이유는 네트워크 효과가 만드는 경쟁 해자 때문이다. EV/EBITDA 20~40x를 받는 플랫폼 기업은, 단순히 높은 성장률 때문이 아니라 "경쟁자가 들어오기 어렵다"는 구조적 우위 때문이다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 네트워크 효과 4가지 ── */}
          <motion.section id="network-effects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">플랫폼 전략의 핵심 — 네트워크 효과 4가지</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              네트워크 효과란 사용자가 늘어날수록 서비스의 가치가 함께 증가하는 현상이다. 플랫폼 기업의 강력한 해자는 이 네트워크 효과에서 비롯된다. 유형에 따라 작동 방식이 다르다.
            </p>

            <div className="space-y-4">
              {NETWORK_EFFECTS.map((effect) => {
                const c = COLOR_MAP[effect.color];
                return (
                  <div key={effect.id} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">{effect.label}</h3>
                        <span className={`text-xs font-medium ${c.text}`}>{effect.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{effect.description}</p>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">대표 예시</h4>
                      <ul className="space-y-1">
                        {effect.examples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                가장 강력한 플랫폼은 여러 유형의 네트워크 효과를 동시에 가진다. Google은 데이터 네트워크 효과 + 공급자 네트워크 효과(광고주)를, Amazon은 공급자(셀러) + 직접(Prime 회원) + 데이터 효과를 동시에 보유한다. 복합 네트워크 효과를 가진 플랫폼일수록 M&A 인수 프리미엄이 높다.
              </p>
            </div>
          </motion.section>

          {/* ── 3. 플랫폼 M&A 인수 동기 ── */}
          <motion.section id="ma-reasons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">플랫폼 M&A — 왜 플랫폼을 인수하는가</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              전략적 인수자가 플랫폼 기업에 높은 프리미엄을 지불하는 데는 5가지 핵심 동기가 있다. 실제 딜에서는 하나 이상의 동기가 복합적으로 작용한다.
            </p>

            <div className="space-y-3">
              {MA_REASONS.map((reason, i) => {
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

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                플랫폼을 인수한다는 건 도시에서 가장 번화한 광장을 인수하는 것과 같다. 광장에는 이미 수많은 상인(공급자)과 방문객(소비자)이 모여 있다. 새로운 광장을 처음부터 만드는 것보다, 이미 사람들이 모이는 광장을 인수하는 것이 10배 빠르다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 플랫폼 M&A의 교과서</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                두 딜 모두 인수 당시 "너무 비싸다"는 평가를 받았다. 결과는 역사상 가장 성공적인 M&A 중 하나가 됐다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{caseItem.subtitle}</p>
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          { label: "배경", value: caseItem.background },
                          { label: "전략", value: caseItem.strategy },
                          { label: "결과", value: caseItem.result },
                          { label: "시너지 핵심", value: caseItem.synergy },
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 dark:bg-gray-800/40 rounded-lg p-3">
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">{item.label}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.value}</p>
                          </div>
                        ))}
                      </div>

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
                { href: "/deal-101/competitive-moat", title: "경쟁 해자", desc: "네트워크 효과가 경쟁 해자로 어떻게 기능하는가. 해자의 5가지 유형과 밸류에이션 관계.", badge: "전략" },
                { href: "/deal-101/strategic-ma", title: "전략적 M&A", desc: "플랫폼 인수를 포함한 전략적 M&A의 유형과 의사결정 프레임워크.", badge: "전략" },
                { href: "/deal-101/antitrust", title: "반독점 규제", desc: "플랫폼 기업 M&A와 반독점 규제 — Meta·Google 사례 중심.", badge: "규제" },
                { href: "/deal-101/synergy", title: "시너지", desc: "플랫폼 M&A에서 기대하는 시너지의 실현 가능성과 타임라인.", badge: "밸류에이션" },
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
