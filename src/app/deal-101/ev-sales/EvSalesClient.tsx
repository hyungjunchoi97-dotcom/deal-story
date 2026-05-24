"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── 애니메이션 variants ──────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
const stagger = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

// ── COLOR MAP ────────────────────────────────────────────────────
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

// ── 데이터 ──────────────────────────────────────────────────────
const MULTIPLE_DRIVERS = [
  {
    num: "01",
    title: "성장률 (Revenue Growth)",
    body: "YoY 매출 성장률이 높을수록 높은 배수를 정당화할 수 있다. 50%+ 성장 기업은 프리미엄 배수를 받으며, 성장 둔화 시 배수는 급격히 수축한다.",
    color: "blue",
  },
  {
    num: "02",
    title: "매출총이익률 (Gross Margin)",
    body: "SaaS 기업은 70%+ 그로스 마진이 일반적이지만, 하드웨어 기업은 20~30% 수준이다. 마진이 높을수록 동일 매출에서 더 많은 현금이 남기 때문에 높은 배수를 받는다.",
    color: "emerald",
  },
  {
    num: "03",
    title: "NRR (Net Revenue Retention)",
    body: "기존 고객이 갱신하고 업셀까지 포함한 순매출 유지율. 100% 이상이면 신규 고객 없이도 매출이 성장한다. 120%+ 달성 기업은 SaaS M&A에서 최고 배수를 받는다.",
    color: "violet",
  },
  {
    num: "04",
    title: "TAM (시장 규모)",
    body: "공략 가능 총시장이 클수록 성장의 지속성이 인정된다. 수십억 달러 규모의 TAM을 가진 기업은 현재 매출 대비 훨씬 높은 기업가치를 부여받는다.",
    color: "sky",
  },
  {
    num: "05",
    title: "경쟁 포지션",
    body: "시장점유율 1위 또는 명확한 기술적 우위를 가진 기업은 경쟁 기업 대비 30~50% 높은 배수를 받는다. 네트워크 효과, 전환 비용(switching cost)이 높을수록 프리미엄이 커진다.",
    color: "amber",
  },
];

const SECTOR_BENCHMARKS = [
  { sector: "SaaS (고성장, NRR 120%+)", range: "10 – 30×", note: "구독 확장·낮은 해지율·ARR 복리 성장" },
  { sector: "SaaS (보통 성장)", range: "4 – 10×", note: "안정적이나 성장 둔화" },
  { sector: "이커머스", range: "1 – 3×", note: "낮은 마진·치열한 경쟁" },
  { sector: "헬스케어 테크", range: "3 – 8×", note: "규제 리스크·긴 판매 사이클" },
  { sector: "핀테크", range: "2 – 6×", note: "규제 환경·수익화 불확실성" },
  { sector: "하드웨어/제조", range: "0.5 – 2×", note: "낮은 마진·높은 Capex 부담" },
];

const CASE_STUDIES = [
  {
    title: "Salesforce × Slack ($27.7B, 2021)",
    badge: "전략적 방어 인수",
    color: "blue",
    multiple: "~26×",
    multipleLabel: "NTM Revenue 배수",
    rows: [
      { label: "인수 배경", value: "Microsoft Teams 급성장에 대항해 Salesforce가 기업용 협업 시장 진입을 위해 추진. Slack은 당시 엔터프라이즈 고객 확장 중." },
      { label: "EV/Sales 배수", value: "Slack ARR 약 $900M 기준 NTM Revenue 약 26× — 당시 SaaS M&A 최고 수준." },
      { label: "높은 배수 이유", value: "82% 이상의 엔터프라이즈 고객 유지율, 네트워크 효과, Microsoft와의 경쟁에서 인수 시급성이 프리미엄을 정당화." },
      { label: "인수 후 결과", value: "Slack이 Salesforce Customer 360 플랫폼의 핵심 협업 레이어로 통합. Salesforce 전체 ARR 성장에 기여." },
    ],
  },
  {
    title: "Adobe × Figma ($20B, 2022 — 최종 파기)",
    badge: "반독점으로 철회",
    color: "rose",
    multiple: "~50×",
    multipleLabel: "ARR 대비 배수 (역대 최고 수준)",
    rows: [
      { label: "인수 배경", value: "Adobe가 디자인 툴 시장을 완전 제패하기 위해 Figma 인수 시도. Figma의 브라우저 기반 협업 모델은 Adobe 데스크톱 제품과 구조적으로 달랐다." },
      { label: "EV/Sales 배수", value: "Figma ARR 약 $400M 기준 약 50× — SaaS M&A 역사상 최고 배수 중 하나." },
      { label: "높은 배수 이유", value: "디자인 협업 시장 1위, Web-based 아키텍처로 Adobe 대비 다른 기술 스택, 강력한 네트워크 효과와 디자이너 커뮤니티 장악력." },
      { label: "결과", value: "EU 경쟁당국(EC)의 반독점 우려로 2023년 자진 철회. 단, 50× 배수는 SaaS M&A 밸류에이션의 새로운 기준점으로 업계에 인용됨." },
    ],
  },
];

const RELATED_CONCEPTS = [
  { label: "ARR 멀티플", href: "/deal-101/arr-multiple", note: "SaaS 반복 매출 기준" },
  { label: "EV/EBITDA 멀티플", href: "/deal-101/ev-ebitda", note: "성숙 기업 밸류에이션" },
  { label: "SaaS 밸류에이션", href: "/deal-101/saas-valuation", note: "SaaS 특화 지표" },
  { label: "인수 프리미엄", href: "/deal-101/acquisition-premium", note: "경영권 프리미엄" },
];

// ── 컴포넌트 ────────────────────────────────────────────────────
export default function EvSalesClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ───────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-12">
            <motion.nav
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6"
            >
              <Link href="/deal-101" className="hover:text-blue-500 transition-colors">딜 101</Link>
              <span>/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">EV/Sales 멀티플</span>
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  밸류에이션
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">기초 필수 · 읽기 약 10분</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                EV/Sales 멀티플
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                흑자도 없는 스타트업에 수십 배를 지불하는 논리. 고성장 기업 M&A에서 유일한 공통 언어가 된 지표다.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/en/deal-101/ev-sales" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  Read in English →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. EV/Sales란 무엇인가 ════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              EV/Sales란 무엇인가
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">EV/Sales = 기업가치(Enterprise Value) ÷ 연간 매출.</strong>{" "}
                회사를 인수하는 데 드는 총 비용이 연간 매출의 몇 배인지를 나타내는 배수다.
              </p>
              <p>
                EV/EBITDA는 EBITDA가 양수인 성숙 기업에 적합하다. 반면 고성장 스타트업, SaaS 기업, 바이오텍처럼
                <strong className="text-gray-800 dark:text-gray-200"> EBITDA가 마이너스이거나 의미가 없는 기업</strong>에는
                EV/Sales가 유일한 공통 밸류에이션 기준이 된다. 분모가 매출이기 때문에 적자 기업에도 항상 양수로 계산된다.
              </p>
              <p>
                주요 사용 맥락은 테크 스타트업 M&A, SaaS 기업 상장 및 인수, 고성장 바이오텍의 기업가치 산정이다.
                특히 PE/VC 업계에서는 포트폴리오 기업의 Exit 멀티플을 사전에 추정할 때 필수적으로 활용한다.
              </p>
            </motion.div>

            {/* 공식 박스 */}
            <motion.div variants={fadeUp} className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 p-8 text-center">
              <p className="text-3xl font-black text-blue-700 dark:text-blue-300 font-mono tracking-tight">
                EV / Revenue
              </p>
              <div className="mt-4 space-y-1 text-sm text-blue-600/80 dark:text-blue-400/70 font-mono">
                <p>= (시가총액 + 순부채)</p>
                <p className="text-blue-400/60">÷</p>
                <p>= 연간 매출 (또는 NTM Revenue)</p>
              </div>
            </motion.div>

            {/* EV/EBITDA vs EV/Sales 비교 */}
            <motion.div variants={fadeUp} className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/60 dark:bg-emerald-950/20 p-4">
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-2">EV/EBITDA 사용 시점</p>
                <ul className="space-y-1.5">
                  {["EBITDA가 양수인 성숙 기업", "안정적 현금흐름 사업", "제조업·리테일·유틸리티", "LBO 구조 분석"].map((t) => (
                    <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-emerald-500 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 dark:border-blue-800/50 bg-blue-50/60 dark:bg-blue-950/20 p-4">
                <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-2">EV/Sales 사용 시점</p>
                <ul className="space-y-1.5">
                  {["EBITDA 적자 고성장 기업", "SaaS·테크 스타트업", "바이오텍·딥테크", "VC Exit 멀티플 추정"].map((t) => (
                    <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex gap-1.5">
                      <span className="text-blue-500 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 비유 박스 */}
            <motion.div variants={fadeUp} className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                아직 흑자가 없는 스타트업의 가치를 판단할 때, 매출이 유일한 공통 언어다. 이익이 없더라도 매출이 빠르게 성장하고
                있다는 것은 미래 이익의 씨앗이 쌓이고 있다는 신호다. EV/Sales는 바로 그 씨앗의 가격을 매기는 도구다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. EV/Sales 배수 결정 요인 ════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              EV/Sales 배수를 결정하는 5가지 요인
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              동일한 $100M 매출 기업도 아래 5가지 요인에 따라 5×가 될 수도, 30×가 될 수도 있다.
            </motion.p>

            <motion.div variants={stagger(0.07)} className="space-y-3">
              {MULTIPLE_DRIVERS.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <motion.div
                    key={item.num}
                    variants={fadeUp}
                    className={`rounded-xl border p-4 ${c.border} ${c.bg}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${c.text}`}>{item.num}</span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* 인사이트 박스 */}
            <motion.div variants={fadeUp} className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                EV/Sales 배수는 현재 수익성이 아니라 <strong className="text-gray-800 dark:text-gray-200">미래 현금흐름의 예측 가능성과 성장의 지속성</strong>에 베팅하는 숫자다.
                성장률이 높고 마진 확장 경로가 명확할수록, 시장은 현재의 적자를 용인하고 높은 배수를 부여한다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. 업종별 EV/Sales 배수 가이드 ══════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              업종별 EV/Sales 배수 가이드
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-6">
              2022~2025년 금리 정상화 이후 멀티플. 2021년 버블 시절에는 100×+도 존재했으나 현재 기준으론 비정상적이었다.
            </motion.p>

            <motion.div variants={fadeUp} className="rounded-2xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">섹터</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400">EV/Sales 범위</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:table-cell">주요 드라이버</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
                  {SECTOR_BENCHMARKS.map((b) => (
                    <tr key={b.sector} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200 text-sm">{b.sector}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-blue-600 dark:text-blue-400">{b.range}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">⚠️ 2021 버블 주의</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                코로나 팬데믹 기간 제로금리 환경에서 일부 SaaS 기업은 100×를 넘는 EV/Sales를 기록했다. 현재 시점에서 이를 기준으로 삼는 것은 위험하다.
                EV/Sales 배수는 이자율 환경과 성장주 센티먼트에 극도로 민감하다는 점을 항상 염두에 두어야 한다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 4. 케이스 스터디 ══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              케이스 스터디
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              EV/Sales가 핵심 밸류에이션 논거로 쓰인 실제 딜 두 가지.
            </motion.p>

            <motion.div variants={stagger(0.1)} className="space-y-6">
              {CASE_STUDIES.map((cs) => {
                const c = COLOR_MAP[cs.color];
                return (
                  <motion.div
                    key={cs.title}
                    variants={fadeUp}
                    className={`rounded-2xl border p-6 ${c.border} ${c.bg}`}
                  >
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <span className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${c.badge}`}>
                        {cs.badge}
                      </span>
                      <span className={`font-black text-2xl font-mono ml-auto ${c.text}`}>{cs.multiple}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">{cs.title}</h3>
                    <p className={`text-[11px] font-medium mb-4 ${c.text}`}>{cs.multipleLabel}</p>
                    <div className="space-y-2.5">
                      {cs.rows.map((row) => (
                        <div key={row.label} className="flex gap-3 text-sm">
                          <span className="font-semibold text-gray-600 dark:text-gray-400 flex-shrink-0 w-24 text-xs pt-0.5">{row.label}</span>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 5. 핵심 요약 ═════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full px-3 py-1">
                핵심 요약
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">EV/Sales 완전정리</span>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/50 p-6 mb-5">
              <p className="text-[11px] font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-2">한 줄 정의</p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                EV/Sales는 &ldquo;EBITDA가 의미 없는 고성장 기업의 미래 이익 창출력을, 현재 매출 대비 몇 배에 살 것인가&rdquo;를 측정하는 지표다.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-2.5">
              {[
                { num: "01", title: "EBITDA가 음수여도 쓸 수 있다", body: "분모가 매출이기 때문에 적자 기업에도 항상 양수로 계산된다. 이것이 SaaS·테크 M&A에서 EV/Sales가 필수 지표인 이유다.", color: "text-blue-500" },
                { num: "02", title: "배수는 성장률이 지배한다", body: "동일 섹터라도 50%+ 성장 기업과 10% 성장 기업의 배수는 3~5배 차이날 수 있다. 성장 스토리가 배수를 정당화하는 핵심 논거다.", color: "text-violet-500" },
                { num: "03", title: "마진이 높을수록 배수도 높다", body: "SaaS 70%+ 그로스 마진은 하드웨어 25%와 완전히 다른 사업 품질을 의미한다. EV/Sales는 반드시 그로스 마진과 함께 해석해야 한다.", color: "text-emerald-500" },
                { num: "04", title: "금리 환경에 극도로 민감하다", body: "EV/Sales는 성장주 밸류에이션의 일환으로, 금리가 오르면 미래 현금흐름의 할인율이 높아져 배수가 급격히 수축한다. 2022년이 그 증거다.", color: "text-amber-500" },
              ].map((pt) => (
                <motion.div key={pt.num} variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/60 px-4 py-3.5"
                >
                  <span className={`text-[11px] font-black flex-shrink-0 mt-0.5 ${pt.color}`}>{pt.num}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-0.5">{pt.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{pt.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 6. 관련 개념 ═════════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">함께 알아두면 좋은 개념</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {RELATED_CONCEPTS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
                </Link>
              ))}
            </motion.div>
          </motion.section>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center pt-2"
          >
            <Link href="/deal-101" className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
              ← 딜 101 전체 개념 목록
            </Link>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
