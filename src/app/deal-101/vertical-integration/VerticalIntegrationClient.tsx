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

// ── 전략적 이유 데이터 ───────────────────────────────────────────
const STRATEGIC_REASONS = [
  {
    icon: "💰",
    title: "원가 절감",
    color: "emerald",
    desc: "중간 마진 제거. 공급업체 마진을 직접 흡수해 EBITDA 마진을 구조적으로 개선한다.",
  },
  {
    icon: "🔒",
    title: "공급 안정성",
    color: "blue",
    desc: "원자재·부품 공급 중단 위험 제거. 반도체 공급망 사태가 보여준 공급 리스크를 내재화로 해소한다.",
  },
  {
    icon: "✅",
    title: "품질 통제",
    color: "violet",
    desc: "전 과정 직접 관리로 품질 일관성 확보. 브랜드 평판을 공급망 전체에서 책임질 수 있다.",
  },
  {
    icon: "📊",
    title: "데이터·인사이트",
    color: "indigo",
    desc: "공급망 전체 데이터 통합으로 수요 예측·재고 최적화. 실시간 데이터 우위를 경쟁사에게 줄 수 없다.",
  },
  {
    icon: "🚧",
    title: "경쟁 차단",
    color: "rose",
    desc: "핵심 공급업체 선점으로 경쟁사 접근 제한 (Foreclosure). 경쟁자가 같은 재료를 쓸 수 없게 만든다.",
  },
];

// ── 리스크 데이터 ────────────────────────────────────────────────
const RISKS = [
  { icon: "💸", title: "자본 집약도 증가", color: "rose", desc: "공급망 여러 단계를 소유하려면 대규모 자본 투자 필요. 레버리지 비용이 증가하고 재무 유연성이 감소한다." },
  { icon: "🔀", title: "유연성 감소", color: "amber", desc: "외부 공급업체 교체 vs 내부 전환의 어려움. 기술 변화에 빠르게 대응하기 어려워진다." },
  { icon: "🎯", title: "핵심 역량 희석", color: "orange", desc: "비핵심 영역까지 관리 부담이 늘어난다. 경영진의 집중력이 분산되면 본업 경쟁력이 약해진다." },
  { icon: "⚖️", title: "반독점 리스크", color: "violet", desc: "Foreclosure(공급 차단) 의심으로 규제 대상이 된다. 규제 당국의 심사와 조건부 승인 리스크가 높아진다." },
  { icon: "🤝", title: "통합 실패", color: "indigo", desc: "PMI 어려움, 서로 다른 기업 문화 충돌. 시너지 실현 이전에 통합 비용이 기대 수익을 초과할 수 있다." },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    company: "Amazon의 단계적 수직 통합 — \"공급망의 제국\"",
    type: "성공한 수직 통합",
    typeColor: "emerald",
    keyDeals: [
      "2017년 Amazon×Whole Foods ($13.7B) — 오프라인 유통망·신선식품 공급망 확보",
      "Amazon Logistics: 자체 배송 네트워크 구축 (FedEx·UPS 의존도 감소)",
      "Amazon Web Services: IT 인프라 수직화 (클라우드를 직접 소유)",
      "Amazon Studios: 콘텐츠 제작 수직화 (Prime Video를 위한 직접 제작)",
    ],
    analogy:
      "레스토랑 체인이 식재료 농장, 물류 트럭, 예약 앱을 모두 직접 소유하는 것과 같다. 각 단계에서 경쟁자에게 서비스를 팔면서 동시에 자사의 역량을 강화하는 '양면 전략'이다.",
    paragraphs: [
      "Amazon의 수직 통합은 단일 빅딜이 아니라 단계적 내재화 전략이다. 2017년 Whole Foods 인수는 오프라인 유통망과 신선식품 공급망을 동시에 확보했다. 그 전후로 Amazon은 자체 배송 트럭, 드론, 비행기까지 보유하면서 FedEx·UPS에 대한 의존도를 수십 퍼센트 포인트 낮췄다.",
      "AWS는 수직 통합의 가장 극적인 사례다. 자사 IT 인프라를 직접 구축하면서 동시에 경쟁사·고객에게 인프라를 판다. 내부 원가를 낮추면서 별도 수익원을 만든 구조다. 현재 AWS는 Amazon 전체 영업이익의 절반 이상을 차지한다.",
      "Amazon Studios도 같은 논리다. 넷플릭스·디즈니에게 콘텐츠 구매 비용을 지불하는 대신 직접 제작한다. Prime Video의 고객 락인 효과를 높이면서 콘텐츠 비용을 내재화했다.",
    ],
    lesson:
      "수직 통합은 단계적으로 진행되며 각 단계에서 경쟁사에게 서비스를 팔면서 동시에 내부 역량을 강화할 수 있다. Amazon은 각 통합 단계를 '프로핏 센터'로 운영하면서 통합 비용을 회수하는 구조를 만들었다. 이것이 단순 비용 절감을 넘어서는 전략적 수직 통합의 교과서다.",
    synergyType: "원가 절감 + 데이터 우위 + 경쟁 차단",
    synergyColor: "emerald",
  },
  {
    company: "Apple의 칩 수직 통합 — \"최강의 경쟁 해자\"",
    type: "기술 해자 창출",
    typeColor: "blue",
    keyDeals: [
      "PA Semi 인수 (2008, $278M) — 저전력 칩 설계 역량 확보",
      "Intrinsity 인수 (2010) — ARM 고성능 설계 팀 흡수",
      "파워 칩 IP 다수 인수 — 시스템 반도체 내재화",
      "2020년 M1: Intel 완전 탈출, Apple Silicon 시대 개막",
    ],
    analogy:
      "자동차 회사가 엔진을 직접 설계하고, 그 엔진이 세계에서 가장 연비 좋고 빠른 엔진이 되었을 때 경쟁사는 그 엔진을 살 수도, 따라 만들 수도 없다. Apple의 칩 수직 통합이 정확히 그것이다.",
    paragraphs: [
      "2010년 A4 칩 설계부터 시작된 Apple의 반도체 내재화는 2020년 M1으로 완성됐다. PA Semi(2008, $278M) 인수로 저전력 칩 설계 역량을 확보했고, Intrinsity(2010) 인수로 ARM 고성능 설계 팀을 흡수했다. 20년에 걸친 단계적 인수가 M1·M2·M3 시대를 열었다.",
      "결과는 경쟁사가 따라올 수 없는 기술 해자였다. iPhone·Mac의 성능과 배터리 모두 업계 최고 수준, 경쟁사 대비 2~3세대 앞선 성능을 보인다. Windows 노트북 제조사들은 아직도 2020년 M1의 성능 효율을 따라잡지 못했다.",
      "비용 효과도 엄청났다. Qualcomm에 지불하던 모뎀칩 로열티 제거(연간 수십억 달러)와 Intel 칩 마진 내재화로 하드웨어 마진이 구조적으로 개선됐다. 이제 Apple은 스마트폰·노트북·태블릿·스마트워치 칩을 모두 직접 설계한다.",
    ],
    lesson:
      "수직 통합이 단순 원가 절감을 넘어 '경쟁자가 따라올 수 없는 기술 해자'를 만든 사례다. PA Semi 인수($278M)는 역대 M&A 중 가장 ROI가 높은 딜 중 하나로 평가된다. 수직 통합의 진정한 가치는 단기 비용 절감이 아니라 장기적 경쟁 우위 창출이다.",
    synergyType: "기술 해자 + 원가 절감 + 품질 통제",
    synergyColor: "blue",
  },
];

export default function VerticalIntegrationClient() {
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
            <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full px-3 py-1 mb-4">
              전략
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              수직 통합 — 공급망을 장악하는 M&A 전략
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              전방·후방 통합의 차이, 수직 통합의 5가지 전략적 이유, 5가지 리스크, Amazon·Apple 케이스 스터디.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#definition", label: "수직 통합이란?", color: "blue" },
                { href: "#reasons", label: "5가지 전략적 이유", color: "emerald" },
                { href: "#risks", label: "5가지 리스크", color: "rose" },
                { href: "#cases", label: "케이스 스터디", color: "violet" },
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

          {/* ── 1. 수직 통합이란 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">수직 통합이란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                수직 통합(Vertical Integration)은 <strong className="text-gray-800 dark:text-gray-200">한 기업이 자신의 제품·서비스의 생산·유통 공급망 여러 단계를 직접 소유·통제하는 전략</strong>이다. M&A를 통해 공급업체, 유통업체, 판매 채널 등을 인수해 공급망을 내재화한다.
              </p>
              <p>
                방향에 따라 두 가지로 나뉜다.
              </p>
            </div>

            {/* 전방·후방 통합 카드 */}
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">→ 전방 통합 (Forward Integration)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  유통·판매 단계로 확장. 고객과 더 가까워진다.
                </p>
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                  예: 제조사가 소매점 인수 / 농장이 레스토랑 인수
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-1">← 후방 통합 (Backward Integration)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  원재료·부품 단계로 확장. 공급 근원에 가까워진다.
                </p>
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                  예: 음식점이 농장 인수 / 완성차 업체가 배터리 회사 인수
                </p>
              </div>
            </div>

            {/* 왜 M&A로 달성하는가 */}
            <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-5">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">왜 유기적 성장(내부 구축)이 아닌 M&A로 달성하는가?</p>
              <ul className="space-y-2">
                {[
                  "속도: 내부 구축보다 빠르게 역량 확보 (Time-to-market)",
                  "역량: 이미 검증된 팀·기술·고객 관계를 즉시 흡수",
                  "경쟁 차단: 경쟁사가 같은 자산을 먼저 인수하는 것을 막음",
                  "리스크 분산: 직접 개발의 실패 리스크 없이 기존 비즈니스 인수",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 비유 */}
            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                피자 가게가 밀가루 공장과 배달 앱을 모두 인수하는 것. 재료비 절감, 배달 품질 통제, 최종 마진 극대화. 동시에 배달 앱을 다른 음식점에게도 팔면 별도 수익원까지 생긴다. 이것이 수직 통합이 단순 비용 절감을 넘어서는 이유다.
              </p>
            </div>

            {/* 인사이트 */}
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                수직 통합이 전략적으로 의미 있는 것은 단순히 비용을 줄이기 때문이 아니다. 경쟁사가 접근할 수 없는 자산·데이터·역량을 독점하는 구조를 만들기 때문이다. 그래서 빅테크가 M&A를 통한 수직 통합에 가장 적극적이다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 5가지 전략적 이유 ── */}
          <motion.section id="reasons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">수직 통합의 5가지 전략적 이유</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              기업이 공급망 단계를 M&A로 내재화하는 데는 단순 원가 절감을 넘어서는 복합적인 전략적 논리가 있다.
            </p>
            <div className="space-y-3">
              {STRATEGIC_REASONS.map((reason, i) => {
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
          </motion.section>

          {/* ── 3. 5가지 리스크 ── */}
          <motion.section id="risks" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">수직 통합의 5가지 리스크</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              수직 통합은 매력적인 전략이지만 구조적인 리스크를 동반한다. 실사 단계에서 반드시 검토해야 한다.
            </p>
            <div className="space-y-3">
              {RISKS.map((risk, i) => {
                const c = COLOR_MAP[risk.color];
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40">
                    <div className="shrink-0 text-2xl">{risk.icon}</div>
                    <div>
                      <h3 className={`text-sm font-bold ${c.text} mb-1`}>{risk.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{risk.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                수직 통합의 리스크는 대부분 '경직성(Rigidity)'에서 나온다. 공급망을 소유하는 순간 그 구조를 바꾸기 어려워진다. 기술 변화 속도가 빠른 산업일수록 수직 통합은 양날의 검이다. 경쟁 우위가 될 수도, 짐이 될 수도 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 수직 통합이 경쟁 해자를 만드는 방법</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Amazon과 Apple은 수직 통합을 가장 효과적으로 실행한 두 가지 사례다. 두 회사 모두 단순 원가 절감을 넘어 경쟁자가 따라올 수 없는 구조를 만들었다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((caseItem, idx) => {
                const typeC = COLOR_MAP[caseItem.typeColor];
                const synergyC = COLOR_MAP[caseItem.synergyColor];
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
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${synergyC.bg} ${synergyC.text} border ${synergyC.border}`}>
                        📊 {caseItem.synergyType}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* 핵심 딜 목록 */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">주요 인수 이력</h4>
                        <ul className="space-y-1">
                          {caseItem.keyDeals.map((deal, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${synergyC.dot}`} />
                              {deal}
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
                { href: "/deal-101/strategic-ma", title: "전략적 M&A", desc: "수직 통합은 전략적 M&A의 핵심 유형 중 하나다. 전략적 M&A의 전체 프레임워크 이해", badge: "전략" },
                { href: "/deal-101/platform-strategy", title: "플랫폼 전략", desc: "플랫폼 기업이 수직 통합을 활용해 생태계를 강화하는 방법", badge: "전략" },
                { href: "/deal-101/synergy", title: "시너지", desc: "수직 통합으로 창출되는 원가·매출 시너지를 M&A 가치평가에 반영하는 방법", badge: "밸류에이션" },
                { href: "/deal-101/antitrust", title: "반독점 규제", desc: "수직 통합 M&A에서 Foreclosure 이슈와 규제 당국의 심사 기준", badge: "규제" },
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
        <LikeButton slug={"vertical-integration"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
