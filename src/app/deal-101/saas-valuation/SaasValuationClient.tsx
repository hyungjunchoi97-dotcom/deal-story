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

// ── 데이터 (컴포넌트 함수 바깥) ────────────────────────────────────

const METRICS = [
  {
    num: "01",
    name: "ARR (Annual Recurring Revenue)",
    ko: "연간반복매출",
    formula: "MRR × 12",
    desc: "사업 전체의 기반 수치. 구독 계약에서 발생하는 연간 반복 매출. 일회성 수익은 포함하지 않는다.",
    color: "blue",
  },
  {
    num: "02",
    name: "NRR / NDR (Net Revenue Retention)",
    ko: "순매출유지율",
    formula: "(기존ARR + 업셀 - 다운셀 - 해지) ÷ 기존ARR",
    desc: "기존 고객 코호트만으로 1년 후 ARR 유지율. 100% 초과 = 신규 고객 없이도 성장. 120%+ = 베스트인클래스.",
    color: "emerald",
  },
  {
    num: "03",
    name: "Gross Churn",
    ko: "총 해지율",
    formula: "해지 ARR ÷ 기초 ARR",
    desc: "계약 해지로 잃은 ARR 비율. 연간 5% 이하 = 엔터프라이즈 이상적. 10% 초과 = 위험 신호.",
    color: "rose",
  },
  {
    num: "04",
    name: "Gross Margin",
    ko: "매출총이익률",
    formula: "(Revenue - COGS) ÷ Revenue",
    desc: "SaaS는 인프라(클라우드) 비용만 COGS로 잡히므로 보통 65~80%. 70% 미만이면 인프라 비용 구조 점검 필요.",
    color: "indigo",
  },
  {
    num: "05",
    name: "CAC (Customer Acquisition Cost)",
    ko: "고객 획득 비용",
    formula: "영업·마케팅 비용 ÷ 신규 고객 수",
    desc: "신규 고객 1명을 유치하는 데 드는 총비용. LTV 대비 얼마나 효율적인지가 핵심.",
    color: "amber",
  },
  {
    num: "06",
    name: "LTV (Lifetime Value)",
    ko: "고객생애가치",
    formula: "ARPU × Gross Margin ÷ Churn Rate",
    desc: "고객 1명이 계약 기간 동안 가져다주는 총 매출(마진 기준). LTV:CAC = 3:1 이상이 이상적.",
    color: "violet",
  },
  {
    num: "07",
    name: "CAC Payback Period",
    ko: "CAC 회수 기간",
    formula: "CAC ÷ (ARPU × Gross Margin)",
    desc: "CAC를 회수하는 데 걸리는 기간. 12개월 이내 = 이상적, 18~24개월 = 보통, 24개월+ = 위험.",
    color: "orange",
  },
];

const RULE40_EXAMPLES = [
  { growth: 30, fcf: 15, score: 45, label: "우량", color: "emerald", verdict: "건전한 고성장 — 충분한 수익성 확보" },
  { growth: 60, fcf: -10, score: 50, label: "OK", color: "blue", verdict: "공격적 성장 투자 — 규모화 이후 이익 기대" },
  { growth: 15, fcf: 5, score: 20, label: "위험", color: "rose", verdict: "저성장 + 저수익 — 프리미엄 밸류에이션 불가" },
];

const MULTIPLES = [
  { condition: "NRR 120%+ & 성장률 40%+", range: "15 – 25× ARR", note: "최고 등급 SaaS — 고배수 정당화" },
  { condition: "NRR 110~120% & 성장률 30~40%", range: "10 – 15× ARR", note: "우량 SaaS — 적절한 프리미엄" },
  { condition: "NRR 100~110% & 성장률 20~30%", range: "6 – 12× ARR", note: "평균 SaaS — 시장 평균 배수" },
  { condition: "NRR 100% 미만 또는 성장률 10% 미만", range: "3 – 6× ARR", note: "디스카운트 — 이탈 리스크 반영" },
];

const RELATED_LINKS = [
  { href: "/deal-101/arr-multiple", label: "ARR 멀티플", note: "SaaS 전용 배수" },
  { href: "/deal-101/ev-sales", label: "EV/Sales 멀티플", note: "매출 기반 밸류에이션" },
  { href: "/deal-101/adjusted-ebitda", label: "Adjusted EBITDA", note: "수익성 조정 방법" },
];

// ── 컴포넌트 ───────────────────────────────────────────────────────

export function SaasValuationClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/deal-101"
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">밸류에이션</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">SaaS 밸류에이션</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.blue.badge}`}>
              밸류에이션
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              SaaS 밸류에이션
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                ARR·NRR·Rule of 40 완전 정리
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              SaaS는 왜 EBITDA 멀티플로 평가하지 않는가. 7가지 핵심 지표부터 ARR 멀티플 산정법,
              Rule of 40, GitHub·Zendesk 케이스까지 — 실무 수준으로 정리했습니다.
            </p>
            <div className="mt-4">
              <Link href="/en/deal-101/saas-valuation" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                Read in English →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-14">

          {/* ── 1. SaaS 밸류에이션이 다른 이유 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              SaaS 밸류에이션이 다른 이유
            </h2>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                SaaS(Software as a Service)는 구독 기반 소프트웨어다. 고객이 일회성으로 제품을 사는 게 아니라
                매월·매년 반복해서 구독료를 지불한다. 이 구조가 일반 기업과 근본적으로 다른 수익 프로파일을 만든다.
              </p>
              <p>
                전통 기업의 EBITDA 멀티플 밸류에이션은 <strong className="text-gray-800 dark:text-gray-200">지금 벌어들이는 이익</strong>을
                기준으로 한다. 그런데 SaaS 기업은 초기에 고객 획득 비용(CAC)이 집중적으로 발생해
                <strong className="text-gray-800 dark:text-gray-200"> 창업 초기 대부분 적자</strong>다.
                EBITDA 기준으로 평가하면 이 기업들의 가치는 0에 가깝거나 음수가 된다.
              </p>
              <p>
                하지만 한번 확보한 고객이 수년간 반복해서 돈을 낸다면, 지금의 적자는 미래 이익의 투자다.
                SaaS 가치의 핵심은 <strong className="text-gray-800 dark:text-gray-200">"앞으로 얼마나 오래, 얼마나 많이 버는가"</strong>다.
              </p>
            </div>

            {/* 비유 */}
            <div className={`mt-5 rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                씨앗을 심을 때 지금의 나무 크기로 평가하지 않는다 — 다 자랐을 때 얼마나 큰 나무가 될지를 본다.
                SaaS 밸류에이션은 지금 얼마를 버는지가 아니라, 이 반복 수익이 앞으로 얼마나
                오래, 얼마나 크게 성장할지를 측정하는 작업이다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 핵심 지표 7가지 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">SaaS 핵심 지표 7가지</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              M&A 실사에서 딜팀이 가장 먼저 요청하는 데이터 포인트다.
            </p>
            <div className="space-y-3">
              {METRICS.map((m) => (
                <div
                  key={m.num}
                  className={`rounded-xl border p-4 ${COLOR_MAP[m.color].border} ${COLOR_MAP[m.color].bg}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${COLOR_MAP[m.color].text}`}>
                      {m.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{m.name}</h3>
                        <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP[m.color].badge}`}>
                          {m.ko}
                        </span>
                      </div>
                      <p className={`text-[11px] font-mono mb-1.5 ${COLOR_MAP[m.color].text}`}>{m.formula}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 핵심 인사이트 */}
            <div className={`mt-5 rounded-lg border p-4 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                NRR이 1%만 올라도 5년 후 ARR은 수십% 차이가 난다. NRR 120%인 기업과 100%인 기업은
                5년 후 ARR이 약 2.5배 차이가 난다(신규 고객 제로 가정). M&A 밸류에이션에서
                NRR 개선 가능성이 딜의 핵심 논리가 되는 이유다.
              </p>
            </div>
          </motion.section>

          {/* ── 3. Rule of 40 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Rule of 40</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              고성장 저수익 vs 저성장 고수익의 균형을 하나의 숫자로 표현하는 지표.
              SaaS 업계 투자자와 M&A 딜팀이 가장 많이 인용하는 KPI다.
            </p>

            {/* 공식 */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 p-6 text-center mb-6">
              <p className="text-2xl font-black text-blue-700 dark:text-blue-300 font-mono">
                ARR 성장률(%) + FCF 마진(%) ≥ 40
              </p>
              <p className="text-xs text-blue-500 dark:text-blue-400 mt-2">
                Rule of 40 점수 = 성장률 + 수익성 마진
              </p>
            </div>

            <div className="space-y-3 mb-5">
              {RULE40_EXAMPLES.map((ex) => (
                <div
                  key={ex.label}
                  className={`rounded-xl border p-4 flex items-center gap-4 ${COLOR_MAP[ex.color].border} ${COLOR_MAP[ex.color].bg}`}
                >
                  <div className="text-center flex-shrink-0 w-16">
                    <p className={`text-2xl font-black ${COLOR_MAP[ex.color].text}`}>{ex.score}</p>
                    <p className={`text-[10px] font-semibold ${COLOR_MAP[ex.color].text}`}>{ex.label}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                      성장률 {ex.growth}% + FCF 마진 {ex.fcf > 0 ? "+" : ""}{ex.fcf}% = {ex.score}점
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{ex.verdict}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
              <p>
                M&A에서 <strong className="text-gray-800 dark:text-gray-200">Rule of 40 50점 이상</strong>이면 확실한 밸류에이션 프리미엄이 붙고,
                30점 미만이면 디스카운트 요인이 된다.
                Rule of 40은 절대적 기준이 아닌 업계 맥락에서 해석해야 하며,
                성장률이 높을수록 적자 허용 범위도 넓어진다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. ARR 멀티플 산정 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              SaaS M&A 밸류에이션 공식
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              주요 방법: ARR 멀티플, NTM Revenue 멀티플, DCF(잔여가치 모델).
              실무에서 가장 많이 쓰이는 ARR 멀티플 기준표다.
            </p>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden mb-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">조건 (NRR & 성장률)</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">ARR 멀티플</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {MULTIPLES.map((row) => (
                    <tr key={row.condition} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{row.condition}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{row.range}</td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              * 2020–2021년 피크 대비 2022년 이후 금리 인상 환경에서 전반적으로 30~50% 수축. 시장 사이클을 반드시 고려해야 한다.
            </p>
          </motion.section>

          {/* ── 5. 케이스 스터디 ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">케이스 스터디</h2>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Microsoft × GitHub */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.blue.badge}`}>
                      전략적 인수
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Microsoft × GitHub — $7.5B (2018)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">추정 ARR 멀티플 약 30×</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.text} border ${COLOR_MAP.blue.border}`}>
                    플랫폼 생태계 프리미엄
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 비유하면</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      단순히 회사를 산 게 아니라 전 세계 개발자들이 매일 출근하는 "디지털 사무소"를 인수한 것이다.
                      그 사무소에 들어가는 사람이 2,800만 명이라면, 그 가치는 지금 매출이 아니라
                      앞으로 그 네트워크에서 나올 수 있는 것들로 평가해야 한다.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2018년 인수 당시 GitHub의 ARR은 약 $200~250M으로 추정됐다. Microsoft는 $7.5B를 지불해
                      약 30x ARR이라는 높은 배수를 적용했다. 단순 수익 배수로 보면 고가 인수처럼 보이지만,
                      Microsoft가 본 가치는 달랐다.
                    </p>
                    <p>
                      2,800만+ 개발자 네트워크, 오픈소스 생태계의 중심 플랫폼,
                      그리고 개발자 친화 전략으로의 브랜드 전환이 핵심이었다.
                      GitHub는 단순 SaaS가 아닌 <strong className="text-gray-800 dark:text-gray-200">개발자 플랫폼</strong>으로서의 네트워크 효과가
                      밸류에이션을 정당화했다.
                    </p>
                    <p>
                      결과적으로 인수 후 GitHub Actions, GitHub Copilot 도입으로 유료 전환률이 급상승했고,
                      ARR은 인수 후 수배 성장했다. 2018년 당시의 30× ARR은 2024년 기준으로는
                      실제로 저렴했던 것으로 평가받는다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      플랫폼 네트워크 효과가 있는 SaaS는 순수 ARR 멀티플을 초과하는 밸류에이션이
                      정당화될 수 있다. 중요한 것은 그 프리미엄의 논리 — 즉, 인수 후
                      어떤 경로로 가치를 창출할 것인지에 대한 명확한 테제다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Zendesk 비공개화 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.violet.badge}`}>
                      PE 비공개화
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Zendesk 비공개화 — $10.2B (2022, Hellman &amp; Friedman + Permira)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">NTM Revenue 멀티플 약 5.5×</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.violet.bg} ${COLOR_MAP.violet.text} border ${COLOR_MAP.violet.border}`}>
                    밸류에이션 사이클 저점 매수
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2022년 초, Zendesk는 Momentive(SurveyMonkey 모회사)와의 합병을 추진했다. 하지만
                      주주들이 반대하며 표결에서 부결됐다. 이후 Zendesk는 독립 경영 대신
                      비공개화 협상에 나섰고, Hellman &amp; Friedman과 Permira 컨소시엄이 $10.2B에 인수했다.
                    </p>
                    <p>
                      당시 적용된 NTM Revenue 멀티플은 약 5.5×로, 2021년 피크(약 15~20×)의
                      <strong className="text-gray-800 dark:text-gray-200"> 절반 이하</strong> 수준이었다.
                      Fed의 급격한 금리 인상으로 성장주 밸류에이션이 전반적으로 급락한 시점에
                      PE가 진입한 것이다.
                    </p>
                    <p>
                      PE 투자 논리는 명확했다: 글로벌 고객 서비스 소프트웨어 시장의 견고한 ARR 기반,
                      상장사로서의 단기 실적 압박 제거, 제품 포트폴리오 합리화를 통한 수익성 개선.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      SaaS 밸류에이션은 금리·시장 사이클에 매우 민감하다. 2021년 피크 대비 절반 이하 가격에
                      PE가 매수한 Zendesk 케이스는 SaaS 밸류에이션 사이클의 전형적 예다.
                      규율 있는 PE 투자자는 오히려 멀티플이 수축된 구간에서
                      우량 SaaS 자산의 비공개화를 노린다.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 6. 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">관련 개념</h2>
            <div className="flex flex-wrap gap-2">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
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
