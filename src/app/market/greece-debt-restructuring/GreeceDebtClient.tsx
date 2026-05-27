"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { MarketDeal } from "@/data/market-deals";
import { DEAL_CATEGORY_META } from "@/data/market-deals";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

// ── Chart data ────────────────────────────────────────────────────────────────
const debtGdpData = [
  { year: "2007", debt: 107 },
  { year: "2008", debt: 113 },
  { year: "2009", debt: 129 },
  { year: "2010", debt: 148 },
  { year: "2011", debt: 172 },
  { year: "2012", debt: 159 },
  { year: "2013", debt: 177 },
  { year: "2014", debt: 179 },
  { year: "2015", debt: 177 },
  { year: "2018", debt: 181 },
  { year: "2022", debt: 172 },
];

const participationData = [
  { name: "자발 참여", nameEn: "Voluntary", value: 85.8, fill: "#ef4444" },
  { name: "CAC 강제", nameEn: "CAC Forced", value: 9.9, fill: "#f97316" },
  { name: "불참", nameEn: "Non-participating", value: 4.3, fill: "#9ca3af" },
];

const yieldData = [
  { date: "2010 Q1", yield: 6.5 },
  { date: "2010 Q3", yield: 12.0 },
  { date: "2011 Q1", yield: 15.0 },
  { date: "2011 Q3", yield: 22.0 },
  { date: "2012 Q1", yield: 35.0 },
  { date: "2012 Q2", yield: 28.0 },
  { date: "2012 Q4", yield: 17.0 },
  { date: "2013", yield: 10.0 },
  { date: "2015", yield: 11.5 },
  { date: "2017", yield: 5.5 },
  { date: "2019", yield: 1.5 },
  { date: "2022", yield: 4.2 },
];

// ── Accent colors (crisis category = gray) ────────────────────────────────────
const accent = "#6b7280";
const accentLight = "rgb(243 244 246)";
const accentDark = "#374151";

// ── Main export ───────────────────────────────────────────────────────────────
export default function GreeceDebtClient({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categoryMeta = DEAL_CATEGORY_META[deal.category] ?? DEAL_CATEGORY_META.crisis;

  // ── Timeline events ──────────────────────────────────────────────────────
  const timeline = [
    {
      date: ko ? "2010년 5월" : "May 2010",
      title: ko ? "트로이카 1차 구제금융 €1,100억" : "Troika 1st Bailout €110B",
      desc: ko
        ? "EU·ECB·IMF 긴급 패키지 — 강도 높은 긴축 조건 부과."
        : "EU·ECB·IMF emergency package — harsh austerity conditions imposed.",
      color: "warning",
    },
    {
      date: ko ? "2011년 하반기" : "H2 2011",
      title: ko ? "10년물 금리 30% 돌파" : "10Y Yield Exceeds 30%",
      desc: ko
        ? "유럽 은행들 그리스 채권 손실 충당금 적립 시작."
        : "European banks start provisioning for Greek bond losses.",
      color: "danger",
    },
    {
      date: ko ? "2012년 3월" : "Mar 2012",
      title: ko ? "PSI 완료 + CAC 소급 적용" : "PSI Complete + Retroactive CAC",
      desc: ko
        ? "€2,060억 재조정 완료. 95.7% 참여율. ISDA CDS 트리거 결정."
        : "€206B restructuring complete. 95.7% participation. ISDA declares CDS credit event.",
      color: "critical",
    },
    {
      date: ko ? "2015년 7월" : "Jul 2015",
      title: ko
        ? "국민투표 61% 긴축 반대, 치프라스는 서명"
        : "61% Vote No to Austerity, Tsipras Signs",
      desc: ko
        ? "Syriza 정부가 더 가혹한 3차 구제금융(€860억)에 서명."
        : "Syriza government signs even harsher 3rd bailout (€86B).",
      color: "danger",
    },
    {
      date: ko ? "2018년 8월" : "Aug 2018",
      title: ko ? "구제금융 프로그램 졸업" : "Bailout Program Exit",
      desc: ko
        ? "8년 만에 모든 구제금융 조건 이행 완료."
        : "All bailout conditions fulfilled after 8 years.",
      color: "success",
    },
  ];

  const timelineColors: Record<string, { bg: string; dot: string; text: string }> = {
    warning:  { bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",   dot: "bg-amber-500",   text: "text-amber-700 dark:text-amber-300" },
    danger:   { bg: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700",       dot: "bg-rose-500",    text: "text-rose-700 dark:text-rose-300" },
    critical: { bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",           dot: "bg-red-600",     text: "text-red-700 dark:text-red-300" },
    success:  { bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700", dot: "bg-emerald-500", text: "text-emerald-700 dark:text-emerald-300" },
  };

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Page Header ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link
                href={ko ? "/" : "/en"}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link
                href={ko ? "/market" : "/en/market"}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "위기·디폴트" : "Crisis & Default"}
              </span>
            </div>

            {/* Category badge */}
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 ${categoryMeta.bg} ${categoryMeta.fg}`}
            >
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? deal.title : deal.titleEn}
            </motion.h1>
            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {deal.titleEn}
              </motion.p>
            )}

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? deal.excerpt : deal.excerptEn}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {deal.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? deal.tags : (deal.tagsEn ?? deal.tags)).slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Executive Summary ── */}
        {deal.executiveSummary && (
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="max-w-3xl mx-auto px-5 pt-8"
          >
            <div
              className="rounded-xl border-l-4 px-5 py-4 bg-gray-50 dark:bg-gray-900/30"
              style={{ borderColor: accent }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accent }}
              >
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: accent }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* ── Snapshot table ── */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
          >
            <div className="h-1" style={{ background: accent }} />
            <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {ko ? "딜 스냅샷" : "Deal Snapshot"}
              </p>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {deal.snapshot.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.38, delay: i * 0.06, ease: EASE }}
                    className="flex justify-between gap-3 py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                  >
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 flex-shrink-0">
                      {ko ? row.labelKo : row.labelEn}
                    </span>
                    <span className="text-[12px] font-semibold text-right leading-snug text-gray-800 dark:text-gray-200">
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 3-stat callout ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-3 gap-3 sm:gap-4"
          >
            {[
              { val: "€2,060억", valEn: "€206B", label: ko ? "재조정 규모" : "Restructured Debt", sub: ko ? "사상 최대" : "Largest Ever" },
              { val: "53.5%", valEn: "53.5%", label: ko ? "명목 헤어컷" : "Nominal Haircut", sub: ko ? "NPV 기준 ~75%" : "~75% NPV" },
              { val: "95.7%", valEn: "95.7%", label: ko ? "참여율" : "Participation", sub: ko ? "CAC 포함" : "incl. CAC" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 p-4 text-center"
              >
                <p className="text-2xl sm:text-3xl font-black text-gray-800 dark:text-gray-100 tracking-tight">
                  {ko ? stat.val : stat.valEn}
                </p>
                <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 mt-1">
                  {stat.label}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Section 0: Bailout spiral + Debt/GDP chart ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "구제금융의 악순환" : "The Bailout Spiral"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <motion.p
                variants={fadeUp(0.04)}
                className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {ko
                  ? "2009년 그리스 정부 재정적자가 GDP의 15.7%로 밝혀지면서 유로존 위기가 점화됐다. 2010년 EU·ECB·IMF 트로이카가 €1,100억 1차 구제금융을 제공했지만, 강도 높은 긴축은 경기를 더 후퇴시켰고 부채/GDP 비율은 계속 상승했다. 2011년 2차 구제금융 논의 과정에서 민간채권자 손실 분담(PSI)이 불가피하다는 인식이 굳어졌다."
                  : "The Eurozone crisis ignited in 2009 when Greece's budget deficit was revealed at 15.7% of GDP. The Troika's €110B first bailout in 2010 came with crippling austerity conditions that deepened the recession — the debt/GDP ratio kept climbing. By 2011, as a second bailout was being negotiated, it became clear that private sector involvement (PSI) — bondholder haircuts — was unavoidable."}
              </motion.p>
            </div>

            {/* Debt/GDP AreaChart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "그리스 부채/GDP 비율 (%) — 2007~2022" : "Greece Debt/GDP Ratio (%) — 2007–2022"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={debtGdpData} margin={{ top: 8, right: 24, left: 8, bottom: 4 }}>
                    <defs>
                      <linearGradient id="debtGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6b7280" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#6b7280" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `${v}%`}
                      domain={[90, 200]}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}%`, ko ? "부채/GDP" : "Debt/GDP"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
                    />
                    <ReferenceLine
                      x="2012"
                      stroke="#ef4444"
                      strokeDasharray="4 3"
                      label={{ value: ko ? "PSI 완료" : "PSI Done", position: "insideTopLeft", fontSize: 9, fill: "#ef4444" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="debt"
                      stroke="#6b7280"
                      strokeWidth={2.5}
                      fill="url(#debtGrad)"
                      dot={{ fill: "#6b7280", r: 3, strokeWidth: 0 }}
                      activeDot={{ r: 5, fill: "#374151" }}
                      isAnimationActive
                      animationDuration={1200}
                      animationEasing="ease-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-3 text-[12px] text-gray-500 dark:text-gray-400 text-center"
                >
                  {ko
                    ? "PSI로 부채를 줄였음에도 GDP 감소 속도가 더 빨라 부채비율은 지속 상승했다."
                    : "Even after the PSI haircut, GDP shrank faster than debt — so the ratio kept rising."}
                </motion.p>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Section 1: PSI Design + Participation BarChart ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "PSI 설계와 CAC의 역할" : "PSI Design & the CAC Mechanism"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <motion.p
                variants={fadeUp(0.04)}
                className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {ko
                  ? "그리스는 기존 국채 €100을 새 그리스 국채 31.5% + EFSF 단기채 15% + GDP 연동 증권(소액)으로 교환하는 방식으로 PSI를 설계했다. 명목 헤어컷은 53.5%, NPV 기준 손실은 약 75%였다. 그러나 채권자 3분의 2 이상 동의가 필요한데, 그리스 의회는 PSI 발표 직전에 집단행동조항(CAC)을 소급 입법으로 도입했다. 이 소급 CAC는 불참 채권자를 강제 편입시키는 핵심 도구였고, 동시에 전례 없는 법적 논란을 낳았다."
                  : "Greece structured the PSI as an exchange: €100 of old bonds → 31.5% new Greek bonds + 15% short-term EFSF notes + a small GDP-linked security. The nominal haircut was 53.5%, with NPV losses around 75%. To reach the required two-thirds supermajority, the Greek parliament retroactively inserted Collective Action Clauses (CACs) into existing bonds just before the PSI announcement. This retroactive CAC was the mechanism that forced holdouts into the exchange — and sparked unprecedented legal controversy."}
              </motion.p>
            </div>

            {/* PSI Exchange Table */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "PSI 교환 구조 — €100 기준" : "PSI Exchange Structure — per €100"}
                </p>
              </div>
              <div className="p-5 overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 pr-4 text-gray-500 dark:text-gray-400 font-semibold whitespace-nowrap">
                        {ko ? "교환 대상" : "Instrument"}
                      </th>
                      <th className="text-right py-2 pr-4 text-gray-500 dark:text-gray-400 font-semibold whitespace-nowrap">
                        {ko ? "새 그리스 국채" : "New GGB"}
                      </th>
                      <th className="text-right py-2 pr-4 text-gray-500 dark:text-gray-400 font-semibold whitespace-nowrap">
                        EFSF
                      </th>
                      <th className="text-right py-2 pr-4 text-gray-500 dark:text-gray-400 font-semibold whitespace-nowrap">
                        GDP-linked
                      </th>
                      <th className="text-right py-2 text-gray-500 dark:text-gray-400 font-semibold whitespace-nowrap">
                        {ko ? "합계(명목)" : "Total"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2.5 pr-4 text-gray-700 dark:text-gray-300 font-medium">
                        {ko ? "기존 €100 채권" : "Old €100 bond"}
                      </td>
                      <td className="text-right py-2.5 pr-4 text-gray-800 dark:text-gray-200 font-bold">€31.5</td>
                      <td className="text-right py-2.5 pr-4 text-gray-800 dark:text-gray-200 font-bold">€15</td>
                      <td className="text-right py-2.5 pr-4 text-gray-500 dark:text-gray-400">{ko ? "소액" : "small"}</td>
                      <td className="text-right py-2.5 text-red-600 dark:text-red-400 font-black">
                        ~€46.5 <span className="text-[10px] font-normal">{ko ? "→ 헤어컷 53.5%" : "→ haircut 53.5%"}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Participation BarChart */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "PSI 참여율 분해 (%)" : "PSI Participation Breakdown (%)"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={participationData.map((d) => ({ ...d, displayName: ko ? d.name : d.nameEn }))}
                    margin={{ top: 8, right: 24, left: 8, bottom: 4 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
                    <XAxis
                      dataKey="displayName"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `${v}%`}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}%`, ko ? "비중" : "Share"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={800} animationEasing="ease-out">
                      {participationData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-3 text-[12px] text-gray-500 dark:text-gray-400 text-center"
                >
                  {ko
                    ? "자발 참여 85.8% + CAC 강제 9.9% = 총 95.7%. 불참 4.3%는 외국법 준거 채권자 등."
                    : "Voluntary 85.8% + CAC-forced 9.9% = 95.7% total. The 4.3% holdouts were mostly foreign-law bondholders."}
                </motion.p>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Section 2: CDS Debate + Yield LineChart ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "CDS 트리거 논쟁" : "The CDS Trigger Controversy"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <motion.p
                variants={fadeUp(0.04)}
                className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {ko
                  ? "PSI가 '자발적 교환'으로 설계된 핵심 이유는 CDS 트리거 방지였다. 신용부도스와프(CDS)가 발동되면 유럽 은행권에 연쇄 손실이 발생할 것으로 우려됐기 때문이다. 그러나 CAC 소급 적용이 현실화되자 ISDA(국제스와프파생상품협회)는 2012년 3월 이를 '신용사건(Credit Event)'으로 판정, CDS가 트리거됐다. 역설적으로 CDS 시장은 큰 혼란 없이 결제를 완료했지만, 이 사건은 '국채에 CDS를 헤지 수단으로 쓸 수 있는가'라는 근본 질문을 남겼다."
                  : "The PSI was deliberately structured as a 'voluntary exchange' primarily to avoid triggering CDS — a forced event was feared to cascade losses through European banks. However, once the retroactive CAC was activated, ISDA determined in March 2012 that a 'Credit Event' had occurred, triggering CDS settlement. Ironically, the CDS market settled without major disruption — but the episode raised fundamental questions about whether sovereign CDS can function as a reliable hedge instrument."}
              </motion.p>
            </div>

            {/* Greek 10Y Yield LineChart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "그리스 10년물 국채 수익률 (%) — 2010~2022" : "Greece 10Y Government Bond Yield (%) — 2010–2022"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={yieldData} margin={{ top: 8, right: 24, left: 8, bottom: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 9, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                      interval={2}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `${v}%`}
                      domain={[0, 40]}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}%`, ko ? "10년물 수익률" : "10Y Yield"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
                    />
                    <ReferenceLine
                      y={35}
                      stroke="#ef4444"
                      strokeDasharray="4 3"
                      strokeOpacity={0.6}
                      label={{ value: ko ? "2012 Q1 최고 35%" : "Peak 35% Q1 2012", position: "insideTopRight", fontSize: 9, fill: "#ef4444" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="yield"
                      stroke="#ef4444"
                      strokeWidth={2.5}
                      dot={{ fill: "#ef4444", r: 3, strokeWidth: 0 }}
                      activeDot={{ r: 5, fill: "#dc2626" }}
                      isAnimationActive
                      animationDuration={1200}
                      animationEasing="ease-out"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-3 text-[12px] text-gray-500 dark:text-gray-400 text-center"
                >
                  {ko
                    ? "2012년 Q1 35%로 정점. PSI 이후 점진적 하락했지만 2015년 Syriza 집권 시 재차 상승."
                    : "Peaked at 35% in Q1 2012. Gradually declined after PSI but spiked again under Syriza in 2015."}
                </motion.p>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Key Timeline ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "핵심 타임라인" : "Key Timeline"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="relative">
              <div className="absolute left-[18px] sm:left-[22px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-300 via-red-400 to-emerald-300 dark:from-amber-700 dark:via-red-700 dark:to-emerald-700" />
              <div className="space-y-3">
                {timeline.map((item, i) => {
                  const c = timelineColors[item.color] ?? timelineColors.warning;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp(i * 0.06)}
                      className="flex gap-4 sm:gap-5 pl-1"
                    >
                      <div className="relative z-10 flex-shrink-0 mt-3.5">
                        <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${c.dot}`}>
                          <span className="w-2 h-2 rounded-full bg-white" />
                        </span>
                      </div>
                      <div className={`flex-1 rounded-xl border p-3 sm:p-4 ${c.bg}`}>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${c.text}`}>
                            {item.date}
                          </span>
                          <span className={`text-[12px] font-bold ${c.text}`}>{item.title}</span>
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* ── Section 3: Social Cost ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "긴축의 사회적 비용" : "The Social Cost of Austerity"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "2010~2015년 그리스 GDP는 약 25% 감소했다. 이는 1930년대 대공황 당시 미국의 GDP 감소폭(30%)에 필적하는 수준이다."
                    : "Greece's GDP fell roughly 25% between 2010 and 2015 — comparable to the United States during the Great Depression of the 1930s.",
                  ko
                    ? "실업률은 2013년 27.5%로 정점을 찍었으며, 청년실업률은 60%를 넘었다. 의사·엔지니어를 비롯한 고학력 인력의 해외 이탈이 가속화됐다."
                    : "Unemployment peaked at 27.5% in 2013, with youth unemployment exceeding 60%. Skilled emigration — doctors, engineers, graduates — accelerated dramatically.",
                  ko
                    ? "긴축 패키지는 연금 삭감, 임금 하락, 사회안전망 축소를 포함했다. 트로이카 내부에서도 IMF는 이후 자체 보고서에서 '재정승수를 과소평가했다'고 인정했다."
                    : "The austerity package included pension cuts, wage reductions, and gutted social safety nets. Within the Troika, the IMF later acknowledged in its own internal review that it had 'underestimated the fiscal multiplier.'",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── Section 4: Lessons ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "그리스가 남긴 교훈" : "Lessons from Greece"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "PSI는 채권 교환의 기술적 성공이었지만, 해결책은 아니었다. 부채 재조정만으로는 경제 성장 회복 없이 지속 가능성을 확보할 수 없다."
                    : "The PSI was a technical success as a bond exchange — but not a solution. Debt restructuring alone cannot restore sustainability without economic growth.",
                  ko
                    ? "CAC 소급 입법은 단기적으로 효과적인 도구였지만, 국채 시장의 계약 신뢰성에 대한 장기적 우려를 낳았다. 이후 유로존은 표준 CAC를 신규 발행 국채에 사전 포함하도록 제도화했다."
                    : "Retroactive CAC insertion was an effective short-term tool but raised lasting concerns about contractual reliability in sovereign bond markets. The Eurozone subsequently standardized CAC inclusion in all new sovereign issuance.",
                  ko
                    ? "그리스 위기는 통화동맹의 설계 결함을 드러냈다. 독자적인 통화정책과 환율 조정 없이 내부 평가절하에만 의존하는 조정 메커니즘의 한계가 명백해졌다."
                    : "The Greek crisis exposed design flaws in the monetary union. The limitations of relying solely on internal devaluation — without an independent monetary policy or exchange rate adjustment — became undeniable.",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── Assessment cards ── */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
                    {ko ? "탁월한 점" : "Strengths"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">
                    {ko ? "리스크 및 교훈" : "Risks & Lessons"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* ── Key Terms ── */}
          {deal.keyTerms && deal.keyTerms.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2
                variants={fadeUp()}
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
              >
                {ko ? "핵심 용어" : "Key Terms"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="space-y-3">
                {deal.keyTerms.map((term, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp()}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ background: accent }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                        {ko ? term.term : term.termEn}
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                      {ko ? term.definition : term.definitionEn}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── FAQ accordion ── */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2
                variants={fadeUp()}
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
              >
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="space-y-2">
                {deal.faq.map((item, i) => {
                  const question = ko ? item.q : item.qEn;
                  const answer = ko ? item.a : item.aEn;
                  const isOpen = openFaq === i;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp()}
                      className="rounded-xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                      >
                        <span className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                          {question}
                        </span>
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold transition-transform duration-200"
                          style={{ background: accent, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-4 pt-0 border-t border-gray-100 dark:border-gray-800">
                              <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed pt-3">
                                {answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* ── References ── */}
          {deal.references && deal.references.length > 0 && (
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="border-t border-gray-200 dark:border-gray-700 pt-8"
            >
              <motion.h2
                variants={fadeUp()}
                className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
              >
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {deal.references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {ref.author}.
                      </span>{" "}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:text-gray-600 dark:hover:text-gray-400 hover:underline transition-colors"
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}
                      <span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Back links ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market" : "/en/market"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "마켓 전체 보기" : "All Market"}
            </Link>
            <Link
              href={ko ? "/" : "/en"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "홈으로" : "Home"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
