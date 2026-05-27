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

// ── 6가지 전략적 M&A 동기 ──────────────────────────────────────────
const MOTIVES = [
  {
    title: "수평 통합 (Horizontal Integration)",
    color: "blue",
    desc: "동일 업종 경쟁자 인수. 시장점유율 확대와 규모의 경제 확보가 주목적. 반독점 규제의 핵심 심사 대상.",
    example: "Facebook × Instagram (2012) — 모바일 사진 공유 시장 경쟁자를 흡수해 소셜미디어 독점 강화.",
  },
  {
    title: "수직 통합 (Vertical Integration)",
    color: "emerald",
    desc: "공급망의 앞뒤 단계를 인수해 원가를 통제하고 마진을 확보. 공급자 또는 유통 채널 인수.",
    example: "Amazon × Whole Foods (2017) — 온라인 커머스가 오프라인 식료품 유통망 확보. 공급망 수직 통합의 교과서.",
  },
  {
    title: "기술 / IP 획득",
    color: "violet",
    desc: "내부 R&D보다 빠르게 핵심 기술·IP·플랫폼을 확보. '만드는 것보다 사는 게 빠를 때'의 전략.",
    example: "Google × YouTube (2006, $1.65B) / Microsoft × GitHub (2018, $7.5B) — 기술 플랫폼 직접 인수.",
  },
  {
    title: "시장 진입 (Market Entry)",
    color: "sky",
    desc: "신규 지역·국가·시장 세그먼트에 빠르게 진입. 처음부터 브랜드·고객·팀을 직접 구축하는 것보다 효율적.",
    example: "글로벌 PE·전략적 인수자들의 아시아·동남아 시장 진입 시 현지 기업 인수 전략.",
  },
  {
    title: "Acqui-hire (인재 인수)",
    color: "amber",
    desc: "제품이나 매출보다 팀·엔지니어·창업자가 목적인 인수. 스타트업 초기 단계 M&A에서 빈번. 제품은 종료될 수 있다.",
    example: "Apple × Siri (2010, Vocal IQ 등 여러 AI팀) — 제품보다 AI 연구 팀이 주요 자산.",
  },
  {
    title: "방어적 M&A",
    color: "rose",
    desc: "경쟁자가 먼저 인수하기 전에 선제적으로 확보하는 전략. '내가 안 사면 경쟁자가 산다'는 논리가 가격을 올린다.",
    example: "Meta × WhatsApp ($19B, 2014) — 구글·트위터가 먼저 인수할 우려에 방어적 선제 인수.",
  },
];

// ── 전략적 vs 재무적 인수자 비교 ──────────────────────────────────
const BUYER_COMPARE = [
  {
    type: "전략적 인수자 (Strategic Buyer)",
    color: "blue",
    points: [
      "시너지 가치(비용 절감 + 매출 증가)를 더한 가격 지불 가능",
      "상대적으로 높은 인수 프리미엄 가능",
      "레버리지 의존도 낮음 — 자체 재무력으로 인수",
      "PMI(인수 후 통합) 실행이 핵심 리스크",
      "딜 종류: 수평/수직 통합, 기술 인수, 방어적 M&A",
    ],
  },
  {
    type: "재무적 인수자 / PE (Financial Buyer)",
    color: "violet",
    points: [
      "레버리지(LBO) + 경영 개선으로 IRR 창출",
      "전략적 시너지 없어도 됨 — 독립 운영 후 재매각",
      "일반적으로 전략적 인수자보다 낮은 가격 제시",
      "포트폴리오 시너지 있으면 더 높은 가격도 가능",
      "딜 종류: LBO, 경영진 인수(MBO), 카브아웃",
    ],
  },
];

// ── 케이스 스터디 ─────────────────────────────────────────────────
const CASES = [
  {
    title: "Meta × Instagram ($1B, 2012) — 역사상 가장 성공한 M&A",
    typeLabel: "방어적 + 플랫폼 확장",
    typeColor: "rose",
    dealSize: "인수가 $1B → 2018년 추정가치 $100B+",
    analogy: "체스에서 폰 하나를 가져가는 것이 아니라, 상대의 퀸이 될 말을 먼저 제거한 것이다. 게임판이 달라졌다.",
    paragraphs: [
      "2012년 4월, 마크 저커버그는 직원 13명, 사용자 3천만 명, 매출 0인 인스타그램을 $10억에 인수한다고 발표했다. 당시 스타트업 M&A 역대 최고가였다. 재무 모델로는 정당화하기 어려운 가격이었다.",
      "전략적 이유는 두 가지였다. 첫째, 페이스북이 PC 중심 플랫폼으로 머무는 동안 인스타그램은 모바일 사진 공유 시장에서 폭발적으로 성장하고 있었다. 이 흐름이 계속되면 페이스북의 젊은 사용자층이 이탈할 수 있었다. 둘째, 구글 또는 트위터가 인스타그램을 먼저 인수할 가능성이 있었다 — '방어적 M&A'의 전형.",
      "결과는 M&A 역사를 다시 썼다. 2018년 기준 인스타그램의 단독 가치는 $1,000억 이상으로 추정됐다. $10억 투자가 100배 이상의 수익을 창출했다. 광고 수익 기준으로도 인스타그램은 페이스북 전체 매출의 약 30%를 차지하기에 이르렀다.",
    ],
    lesson: "전략적 M&A의 핵심 교훈: 재무 모델이 정당화하지 못하는 가격도 전략적 판단이 맞으면 정당화된다. 방어적 목적과 플랫폼 확장 목적이 겹친 딜은 그 가치가 시간이 지나면서 복합적으로 실현된다.",
  },
  {
    title: "Microsoft × LinkedIn ($26.2B, 2016)",
    typeLabel: "엔터프라이즈 + 데이터 시너지",
    typeColor: "blue",
    dealSize: "시가총액 대비 약 50% 프리미엄",
    analogy: "마이크로소프트가 '전문직 소셜 그래프'를 엔터프라이즈 소프트웨어 생태계에 붙인 것이다. 사람 데이터가 없던 Office에 사람이 생겼다.",
    paragraphs: [
      "2016년 6월, 마이크로소프트는 전문직 소셜 네트워크 링크드인을 $262억에 인수한다고 발표했다. 링크드인 시가총액 대비 약 50% 프리미엄이었다. 사티아 나델라 CEO가 직접 주도한 딜이었다.",
      "전략적 이유: Microsoft의 엔터프라이즈 제품군(Office 365, Dynamics CRM, Azure)과 LinkedIn의 4억 3천만 전문직 사용자 데이터를 연결한다는 것이었다. Office에서 작업 중인 사람의 LinkedIn 프로필을 바로 볼 수 있고, 영업 담당자는 Dynamics CRM에서 LinkedIn 인맥을 활용할 수 있는 방향이었다.",
      "결과: LinkedIn은 독립 브랜드와 운영 체계를 유지하면서 성장했다. 2022년 링크드인 매출은 $138억으로, 인수가의 절반 이상을 단일 사업부가 매출로 창출했다. Microsoft의 B2B 세일즈 인텔리전스 플랫폼(Sales Navigator)과의 통합이 성공적인 시너지 사례로 평가받는다.",
    ],
    lesson: "50% 인수 프리미엄도 시너지가 명확하면 정당화된다. 독립 운영 약속이 PMI 실패 위험을 낮추고 LinkedIn 사용자 이탈을 방지하는 핵심이었다. 전략적 통합의 포인트는 모든 것을 합치는 것이 아니라, 합쳐야 할 부분만 정확히 연결하는 것이다.",
  },
];

// ── 관련 개념 링크 ─────────────────────────────────────────────────
const RELATED = [
  { href: "/deal-101/synergy", title: "시너지", desc: "전략적 M&A가 정당화되는 근거 — 비용 시너지와 매출 시너지 계산법.", badge: "밸류에이션" },
  { href: "/deal-101/acquisition-premium", title: "인수 프리미엄", desc: "전략적 가치 = DCF 가치 + 시너지 + 경영권 프리미엄 구조 이해.", badge: "밸류에이션" },
  { href: "/deal-101/pmi", title: "PMI (인수 후 통합)", desc: "전략적 M&A가 가치를 실현하는 단계 — 통합 실패가 딜 실패로 이어지는 이유.", badge: "M&A 실행" },
  { href: "/deal-101/vertical-integration", title: "수직 통합", desc: "Amazon×Whole Foods 같은 수직 통합 M&A의 전략 논리와 리스크.", badge: "전략" },
];

export function StrategicMaClient() {
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
              <span className="text-xs text-gray-500">전략</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              전략
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              전략적 M&A
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              IRR이 아니라 시장 지위를 사는 인수합병. 전략적 인수자가 PE보다 더 높은 가격을 낼 수 있는 이유, 그리고 역사상 가장 성공한 전략적 딜들.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#what", label: "전략적 M&A란" },
                { href: "#motives", label: "6가지 동기" },
                { href: "#buyers", label: "전략적 vs PE" },
                { href: "#pricing", label: "가격 결정" },
                { href: "#cases", label: "케이스 스터디" },
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

          {/* ── 섹션 1: 전략적 M&A란 ── */}
          <motion.section
            id="what"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">전략적 M&A란 무엇인가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">전략적 M&A</strong>는 순수 재무 수익(IRR)이 아닌 시장 지위·기술·역량·고객 기반 확보를 주목적으로 하는 인수합병이다. 인수 주체는 같은 업계 또는 인접 업계의 기업(전략적 인수자)이다.
              </p>
              <p>
                재무적 인수자(PE)가 레버리지와 경영 개선으로 IRR을 창출하는 것과 달리, 전략적 인수자는 피인수 기업을 기존 사업과 결합해 생기는 시너지 가치를 지불한다. 이 때문에 전략적 인수자는 일반적으로 PE보다 더 높은 가격을 제시할 수 있다.
              </p>
              <p>
                그러나 더 높은 가격을 낼 수 있다는 것이 항상 더 나은 딜을 만든다는 의미는 아니다. 시너지 실현 실패(PMI 문제)와 과도한 프리미엄은 전략적 M&A 실패의 주요 원인이다.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                체스에서 폰을 여러 개 잡는 것보다, 상대의 퀸을 가져와서 게임판 자체를 바꾸는 것이 전략적 M&A다. 개별 재무 지표로는 설명이 안 되지만, 게임의 룰이 바뀌는 수준의 움직임이다.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: "시장 지위 확보", color: "blue", desc: "점유율, 브랜드, 고객 기반을 한 번에 확보. 유기적 성장보다 훨씬 빠르다." },
                { title: "기술 / 역량 확보", color: "violet", desc: "'만드는 것 vs 사는 것' — 내부 개발에 수년이 걸릴 역량을 즉시 확보." },
                { title: "경쟁 구도 재편", color: "rose", desc: "경쟁자를 흡수하거나, 경쟁자의 잠재 인수 대상을 선점해 시장 구도를 바꾼다." },
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

          {/* ── 섹션 2: 6가지 전략적 동기 ── */}
          <motion.section
            id="motives"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">전략적 M&A의 6가지 동기</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              '왜 이 딜을 하는가'에 대한 답이 전략적 M&A의 가치를 결정한다. 동기가 다르면 딜 구조, 프리미엄 수준, PMI 전략이 모두 달라진다.
            </p>
            <div className="space-y-3">
              {MOTIVES.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                    <div className="bg-white/60 dark:bg-gray-800/40 rounded-lg p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-700 dark:text-gray-300">예시:</strong> {item.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 3: 전략적 vs 재무적 인수자 ── */}
          <motion.section
            id="buyers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">전략적 인수자 vs 재무적 인수자 (PE)</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              같은 매물을 놓고 전략적 인수자와 PE가 경쟁할 때, 가격 결정 로직이 근본적으로 다르다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {BUYER_COMPARE.map((buyer) => {
                const c = COLOR_MAP[buyer.color];
                return (
                  <div key={buyer.type} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-3`}>{buyer.type}</h3>
                    <ul className="space-y-2">
                      {buyer.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                전략적 인수자가 더 높은 가격을 낼 수 있는 이유는 시너지다. 공식으로 표현하면: <strong>전략적 가격 = 독립 기업 DCF 가치 + 시너지 현재가치 + 경영권 프리미엄</strong>. PE는 이 공식에서 시너지 현재가치가 0이거나 작기 때문에 일반적으로 20~30% 낮은 가격을 제시한다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 4: 가격 결정 ── */}
          <motion.section
            id="pricing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">전략적 M&A의 가격 결정 구조</h2>
            <div className="space-y-3">
              {[
                {
                  step: "1",
                  title: "독립 기업 가치 (Standalone DCF)",
                  color: "blue",
                  desc: "피인수 기업이 독립적으로 운영될 때의 내재 가치. 전략적 시너지 없이 계산. 이것이 가격의 바닥(Floor)이다.",
                },
                {
                  step: "2",
                  title: "+ 시너지 현재가치 (PV of Synergies)",
                  color: "emerald",
                  desc: "비용 시너지(중복 비용 제거) + 매출 시너지(교차 판매, 신규 시장)의 현재가치. 전략적 인수자만 인식할 수 있는 가치. 일반적으로 딜 프리미엄의 주요 근거.",
                },
                {
                  step: "3",
                  title: "+ 경영권 프리미엄 (Control Premium)",
                  color: "violet",
                  desc: "지배주주로서 의사결정권에 대한 프리미엄. 통상 주가 대비 20~40% 수준. 시장에서 관찰 가능한 과거 거래 데이터 기반.",
                },
                {
                  step: "4",
                  title: "= 전략적 인수가 (Strategic Price)",
                  color: "rose",
                  desc: "인수 측이 지불할 의향이 있는 최대 가격. 이를 초과하면 딜이 인수자에게 가치 파괴적이 된다. 협상에서는 이 숫자가 절대 공개되지 않는다.",
                },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.step} className={`rounded-xl border ${c.border} p-4 flex gap-4`}>
                    <div className={`text-lg font-bold ${c.text} shrink-0 w-6 text-center`}>{item.step}</div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
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
                역사상 가장 성공한 전략적 M&A 사례 두 개 — 재무 모델로는 설명이 안 됐지만 전략적 판단이 옳았다.
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
