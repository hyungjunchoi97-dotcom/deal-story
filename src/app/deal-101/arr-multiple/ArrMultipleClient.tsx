"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

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
const ARR_DRIVERS = [
  {
    num: "01",
    title: "NRR (Net Revenue Retention)",
    body: "기존 고객 갱신 + 업셀 - 해지로 계산하는 순매출 유지율. 120%+ = 세계적 수준, 100%+ = 양호. 100% 이하이면 기존 고객이 이탈하고 있다는 신호다. NRR이 높을수록 ARR 멀티플의 핵심 정당화 요인이 된다.",
    color: "violet",
  },
  {
    num: "02",
    title: "ARR 성장률",
    body: "YoY ARR 성장률. 50%+ 고성장 기업은 프리미엄 배수를 받는다. 성장률이 둔화되면 배수는 빠르게 압축된다. ARR 성장률은 신규 고객 확보와 기존 고객 업셀 두 가지 경로로 달성된다.",
    color: "blue",
  },
  {
    num: "03",
    title: "Gross Margin",
    body: "SaaS 기업의 이상적 그로스 마진은 70% 이상. 클라우드 인프라 비용 최적화로 스케일이 커질수록 마진이 개선되는 구조가 ARR 멀티플 프리미엄의 근거가 된다.",
    color: "emerald",
  },
  {
    num: "04",
    title: "Rule of 40",
    body: "ARR 성장률 + FCF(자유현금흐름) 마진 ≥ 40% 충족 여부. 고성장과 수익성의 균형을 측정하는 SaaS 업계 표준 지표. 충족 기업은 프리미엄 ARR 배수를 받는 경향이 강하다.",
    color: "sky",
  },
  {
    num: "05",
    title: "CAC Payback Period",
    body: "신규 고객 유치에 쓴 비용을 몇 개월 만에 회수하는지를 나타내는 지표. 12개월 이내가 이상적이며, 18개월을 초과하면 성장 효율이 떨어진다는 신호로 해석된다.",
    color: "amber",
  },
];

const ARR_CYCLE = [
  { period: "2019", range: "평균 8 – 12×", note: "금리 정상, 성장주 합리적 밸류에이션", color: "emerald" },
  { period: "2020 – 2021 (버블)", range: "20 – 50×, 일부 100×+", note: "코로나 디지털 가속 + 제로금리. 버블 구간", color: "rose" },
  { period: "2022", range: "평균 5 – 8×로 급락", note: "연준 금리 인상 + 성장주 폭락. 배수 전반 수축", color: "amber" },
  { period: "2023 ~ 현재", range: "15 – 25× (AI 프리미엄 포함)", note: "규모·수익성 중심 재편. AI SaaS는 별도 프리미엄", color: "blue" },
];

const CASE_STUDIES = [
  {
    title: "Salesforce × MuleSoft ($6.5B, 2018)",
    badge: "생태계 확장 인수",
    color: "blue",
    multiple: "~22×",
    multipleLabel: "ARR 배수",
    rows: [
      { label: "딜 개요", value: "MuleSoft ARR 약 $296M. Salesforce가 API 통합 플랫폼 시장 1위 기업을 $6.5B에 인수." },
      { label: "ARR 배수", value: "$296M ARR 기준 약 22× — 당시 엔터프라이즈 소프트웨어 M&A 최고 수준." },
      { label: "프리미엄 이유", value: "API 통합 시장 점유율 1위, Salesforce 플랫폼 고객과의 Cross-sell 시너지 높음, 엔터프라이즈 고객 기반의 높은 NRR." },
      { label: "인수 후 결과", value: "2023년 기준 MuleSoft가 Salesforce 전체 ARR에 수십억 달러 기여. Integration Cloud의 핵심 레이어가 됨." },
    ],
  },
  {
    title: "SAP × Qualtrics ($8B, 2019 / 재상장 $12.5B / 재매각 $12.5B)",
    badge: "인수 → IPO → 재비공개화",
    color: "violet",
    multiple: "~20×",
    multipleLabel: "인수 시점 ARR 배수",
    rows: [
      { label: "딜 개요", value: "SAP가 경험관리(XM) SaaS 플랫폼 Qualtrics를 2019년 IPO 직전 $8B에 인수. ARR 약 $400M." },
      { label: "ARR 배수", value: "$400M ARR 기준 약 20×. SAP는 기존 CRM 고객과의 시너지를 기대." },
      { label: "특이점", value: "SAP가 인수했지만 2021년 Qualtrics를 $12.5B(NASDAQ 기준)에 별도 상장. 이후 2023년 Silver Lake + Canada Pension이 $12.5B에 다시 비공개화." },
      { label: "시사점", value: "경험관리(XM) SaaS 시장의 성장성과 독립 플랫폼 가치가 ARR 멀티플을 정당화. 동일 자산이 4년 만에 $8B → $12.5B로 재평가." },
    ],
  },
];

const RELATED_CONCEPTS = [
  { label: "EV/Sales 멀티플", href: "/deal-101/ev-sales", note: "비SaaS 성장주 기준" },
  { label: "SaaS 밸류에이션", href: "/deal-101/saas-valuation", note: "SaaS 특화 지표" },
  { label: "EV/EBITDA 멀티플", href: "/deal-101/ev-ebitda", note: "성숙 기업 밸류에이션" },
];

// ── 컴포넌트 ────────────────────────────────────────────────────
export default function ArrMultipleClient() {
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
              <span className="text-gray-600 dark:text-gray-300 font-medium">ARR 멀티플</span>
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                  밸류에이션
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500">SaaS 심화 · 읽기 약 10분</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                ARR 멀티플
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                SaaS 기업 M&A의 핵심 언어. ARR은 왜 일반 매출과 다르고, 어떤 기업이 20×를 받고 어떤 기업이 5×를 받는지 구조적으로 이해한다.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/en/deal-101/arr-multiple" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                  Read in English →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-14 space-y-20">

          {/* ══ 1. ARR 멀티플이란 ══════════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              ARR 멀티플이란 무엇인가
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                <strong className="text-gray-800 dark:text-gray-200">ARR(Annual Recurring Revenue)</strong>은 구독 기반 수익의 연간화 수치다.
                월별 구독료(MRR, Monthly Recurring Revenue) × 12로 계산하며, <strong className="text-gray-800 dark:text-gray-200">1회성 수익·프로페셔널 서비스 수익을 제외한 순수 반복 수익</strong>만 포함한다.
              </p>
              <p>
                <strong className="text-gray-800 dark:text-gray-200">ARR 멀티플 = EV ÷ ARR.</strong>{" "}
                EV/Revenue와의 차이는 분모에 있다. ARR은 1회성 수익을 제외하기 때문에 SaaS 사업의 핵심 엔진인 '반복 매출'만을 정밀하게 측정한다.
                동일한 $100M 매출 기업도 ARR 비중이 90%인 기업과 50%인 기업은 완전히 다른 사업 품질을 가진다.
              </p>
              <p>
                ARR 멀티플은 특히 SaaS 스타트업 M&A, 프라이빗 SaaS 기업 투자, VC/PE 포트폴리오 밸류에이션에서 사용된다.
                공개 시장의 EV/NTM Revenue와 달리, ARR 멀티플은 비공개 기업의 현재 ARR 기준으로 직접 계산하는 방식이 일반적이다.
              </p>
            </motion.div>

            {/* ARR vs MRR 구조 */}
            <motion.div variants={fadeUp} className="mt-8 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/20 border border-violet-100 dark:border-violet-900/50 p-6">
              <p className="text-xs font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider mb-4">ARR 계산 구조</p>
              <div className="space-y-2">
                {[
                  { label: "MRR (Monthly Recurring Revenue)", note: "월별 반복 구독 수익", color: "text-violet-600 dark:text-violet-400" },
                  { label: "× 12", note: "연간화", color: "text-gray-400" },
                  { label: "= ARR (Annual Recurring Revenue)", note: "연간 반복 수익 — 1회성 제외", color: "text-violet-700 dark:text-violet-300", bold: true },
                  { label: "ARR 멀티플 = EV ÷ ARR", note: "SaaS 기업 밸류에이션의 기준", color: "text-gray-900 dark:text-gray-100", bold: true },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center gap-3 py-1.5 ${row.bold ? "border-t border-violet-200 dark:border-violet-800 pt-2.5 mt-1" : ""}`}>
                    <span className={`text-sm ${row.bold ? "font-bold" : "font-medium"} ${row.color} flex-1`}>{row.label}</span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">{row.note}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 비유 박스 */}
            <motion.div variants={fadeUp} className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                구독료를 내는 회원 수와 그 회원이 얼마나 오래 남을지, 그리고 앞으로 얼마나 더 쓸지를 곱한 것이 ARR의 진짜 가치다.
                ARR 멀티플은 그 복리 성장 엔진을 지금 몇 배에 살 것인가를 묻는 질문이다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 2. ARR 멀티플에 영향을 주는 5가지 지표 ══════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              ARR 멀티플에 영향을 주는 5가지 지표
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              동일한 $50M ARR 기업도 아래 지표에 따라 배수가 5×에서 25×까지 달라진다.
            </motion.p>

            <motion.div variants={stagger(0.07)} className="space-y-3">
              {ARR_DRIVERS.map((item) => {
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

            {/* Rule of 40 심화 */}
            <motion.div variants={fadeUp} className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 — Rule of 40</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Rule of 40은 ARR 멀티플과 가장 강한 상관관계를 보이는 SaaS 지표다.
                예: ARR 성장률 35% + FCF 마진 10% = 45 → 충족. 성장률 20% + FCF 마진 15% = 35 → 미충족.
                40 이상을 달성하면 프리미엄 ARR 배수를 받을 가능성이 높고, 40 미만은 배수 압박을 받는다.
              </p>
            </motion.div>
          </motion.section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          {/* ══ 3. ARR 멀티플 사이클 ══════════════════════════════ */}
          <motion.section variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              ARR 멀티플 사이클 — 버블과 조정
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 mb-8">
              ARR 멀티플은 SaaS 기업 고유의 내재 가치뿐 아니라 거시 금리 환경과 성장주 센티먼트에 민감하게 반응한다.
            </motion.p>

            <motion.div variants={stagger(0.08)} className="space-y-3">
              {ARR_CYCLE.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <motion.div
                    key={item.period}
                    variants={fadeUp}
                    className={`rounded-xl border p-4 ${c.border} ${c.bg}`}
                  >
                    <div className="flex flex-wrap items-start gap-3">
                      <span className={`text-xs font-black flex-shrink-0 ${c.text} w-32`}>{item.period}</span>
                      <div className="flex-1">
                        <p className={`text-sm font-bold ${c.text} mb-0.5`}>{item.range}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.note}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 M&A에서의 할인 관행</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                M&A 딜에서는 상장 SaaS 기업의 ARR 멀티플 대비 <strong className="text-gray-800 dark:text-gray-200">20~35% 할인</strong>을 적용하는 것이 일반적이다.
                비공개 기업은 유동성 프리미엄이 없고, 인수자가 통제권 프리미엄을 따로 지불하는 구조이기 때문이다.
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
              ARR 멀티플이 핵심 밸류에이션 논거로 쓰인 실제 딜 두 가지.
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
              <span className="text-xs text-gray-400 dark:text-gray-500">ARR 멀티플 완전정리</span>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/40 dark:to-indigo-950/30 border border-violet-100 dark:border-violet-900/50 p-6 mb-5">
              <p className="text-[11px] font-semibold text-violet-500 dark:text-violet-400 uppercase tracking-wider mb-2">한 줄 정의</p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100 leading-snug">
                ARR 멀티플은 &ldquo;SaaS 기업의 순수 반복 매출 엔진이 현재 기업가치의 몇 배인가&rdquo;를 측정하며, 복리 성장의 지속성에 베팅하는 숫자다.
              </p>
            </motion.div>

            <motion.div variants={stagger(0.07)} className="space-y-2.5">
              {[
                { num: "01", title: "ARR은 일반 매출이 아니다", body: "1회성 수익·컨설팅 수익을 제외한 순수 반복 구독 매출만 포함한다. 같은 $100M 매출이라도 ARR 비중이 높은 기업이 훨씬 높은 배수를 받는다.", color: "text-violet-500" },
                { num: "02", title: "NRR이 ARR 배수의 핵심 결정자", body: "120%+ NRR은 기존 고객만으로도 매출이 성장한다는 의미다. 이것이 신규 고객 없이도 ARR이 복리로 증가하는 구조적 장점이다.", color: "text-blue-500" },
                { num: "03", title: "Rule of 40은 수익성 균형 지표", body: "고성장만 추구하거나 수익성만 추구하는 기업보다, 두 가지를 균형 있게 달성하는 기업이 프리미엄 배수를 받는다.", color: "text-emerald-500" },
                { num: "04", title: "M&A에서는 공개 시장 배수에서 할인", body: "비공개 SaaS 기업 인수 시 상장 기업 ARR 배수 대비 20~35% 할인이 관행이다. 유동성 부재와 통제권 프리미엄 구조 때문이다.", color: "text-amber-500" },
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
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
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
            <Link href="/deal-101" className="text-sm text-gray-400 hover:text-violet-500 transition-colors">
              ← 딜 101 전체 개념 목록
            </Link>
          </motion.div>

        </div>
        <LikeButton slug={"arr-multiple"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
