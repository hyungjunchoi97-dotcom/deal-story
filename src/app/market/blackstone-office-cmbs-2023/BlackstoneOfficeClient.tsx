"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketDeal } from "@/data/market-deals";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const ACCENT = "#f59e0b";
const ACCENT_DARK = "#b45309";
const ACCENT_LIGHT = "rgb(255 251 235)";

// Visual 0: Decision Tree — Blackstone's strategic default analysis
function DecisionTreeVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "Blackstone의 의사결정 트리 — 전략적 디폴트의 논리" : "Blackstone's Decision Tree — Logic of Strategic Default"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          {/* Root node */}
          <div className="flex justify-center mb-4">
            <div className="rounded-xl border-2 border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 px-6 py-3 text-center max-w-xs">
              <p className="text-[12px] font-bold text-amber-800 dark:text-amber-200">
                {ko ? "오피스 공실 급증 + 금리 급등" : "Office Vacancy Surge + Rate Spike"}
              </p>
            </div>
          </div>
          {/* Arrow down */}
          <div className="flex justify-center mb-4">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-0.5 h-6 bg-amber-300 dark:bg-amber-600" />
              <span className="text-amber-400 dark:text-amber-500 text-sm leading-none">▼</span>
            </div>
          </div>
          {/* LTV node */}
          <div className="flex justify-center mb-6">
            <div className="rounded-xl border-2 border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-orange-900/20 px-6 py-3 text-center max-w-sm">
              <p className="text-[11px] text-orange-600 dark:text-orange-400 font-semibold mb-0.5">
                {ko ? "현재 빌딩 가치 vs 대출 원금" : "Current Building Value vs Loan Principal"}
              </p>
              <p className="text-[13px] font-black text-orange-700 dark:text-orange-300">LTV &gt; 100%</p>
            </div>
          </div>
          {/* Two choices */}
          <div className="grid grid-cols-2 gap-4">
            {/* Option A */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                {ko ? "선택 A" : "Option A"}
              </div>
              <div className="rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-4 text-center">
                <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {ko ? "추가 자본 투입" : "Inject More Capital"}
                </p>
                <div className="mt-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 px-3 py-2">
                  <p className="text-[10px] font-bold text-red-600 dark:text-red-400">
                    {ko ? "→ 손실 심화" : "→ Deepening Losses"}
                  </p>
                  <p className="text-[9px] text-red-500 dark:text-red-500 mt-0.5">
                    {ko ? "회수 불가 자본 추가 투입" : "Throwing good money after bad"}
                  </p>
                </div>
              </div>
            </div>
            {/* Option B — chosen */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-amber-500 uppercase tracking-widest">
                {ko ? "선택 B ✓" : "Option B ✓"}
              </div>
              <div className="rounded-xl border-2 border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-900/20 p-4 text-center shadow-sm shadow-amber-100 dark:shadow-none">
                <p className="text-[11px] font-bold text-amber-800 dark:text-amber-200 mb-1">
                  {ko ? "전략적 디폴트" : "Strategic Default"}
                </p>
                <div className="mt-3 rounded-lg bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-600 px-3 py-2">
                  <p className="text-[10px] font-bold text-amber-700 dark:text-amber-300">
                    {ko ? "→ 손실 확정, 자본 회수" : "→ Lock Loss, Redeploy Capital"}
                  </p>
                  <p className="text-[9px] text-amber-600 dark:text-amber-400 mt-0.5">
                    {ko ? "더 나은 기회에 재투자 가능" : "Free capital for better opportunities"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-gray-400 dark:text-gray-500 mt-5">
            {ko
              ? "Blackstone은 B를 선택 — 추가 손실 방지, LP 자본 보호 우선"
              : "Blackstone chose B — prevent further losses, prioritize LP capital protection"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 1: Office vacancy + LTV change
const vacancyData = [
  { year: "2019", rate: 12 },
  { year: "2020", rate: 15 },
  { year: "2021", rate: 17 },
  { year: "2022", rate: 19 },
  { year: "2023", rate: 22 },
];

const ltvData = [
  { label: "발행시 (2018)", labelEn: "At Issuance (2018)", ltv: 65, fill: "#22c55e" },
  { label: "2023년", labelEn: "2023", ltv: 105, fill: "#ef4444" },
];

function OfficeContextVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const ltvDisplay = ltvData.map((d) => ({ ...d, label: ko ? d.label : d.labelEn }));
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "오피스 공실률 상승 & LTV 역전 — 디폴트의 배경" : "Office Vacancy Surge & LTV Inversion — Default Context"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Left: vacancy area chart */}
            <div>
              <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3 text-center">
                {ko ? "미국 오피스 공실률 (%)" : "US Office Vacancy Rate (%)"}
              </p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={vacancyData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="vacancyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                    <YAxis domain={[0, 28]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                    <Tooltip
                      formatter={(v) => [`${v}%`, ko ? "공실률" : "Vacancy"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="rate"
                      stroke="#ef4444"
                      fill="url(#vacancyGrad)"
                      strokeWidth={2}
                      dot={{ fill: "#ef4444", strokeWidth: 0, r: 3 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Right: LTV bar chart */}
            <div>
              <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3 text-center">
                {ko ? "LTV 변화 — 발행시 vs 2023" : "LTV Change — Issuance vs 2023"}
              </p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ltvDisplay} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="label" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                    <YAxis domain={[0, 130]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}%`} />
                    <Tooltip
                      formatter={(v) => [`${v}%`, "LTV"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                    />
                    <Bar dataKey="ltv" radius={[4, 4, 0, 0]} label={{ position: "top", fontSize: 11, fontWeight: "bold" }}>
                      {ltvDisplay.map((d, i) => (
                        <Cell key={i} fill={d.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[9px] text-center text-gray-400 mt-2">
                {ko ? "LTV 65% → >100%: 담보 가치가 대출 원금 하회" : "LTV 65% → >100%: Collateral value fell below loan principal"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 2: CMBS Special Servicer flowchart
function SpecialServicerFlowVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const actions = [
    { icon: "🤝", labelKo: "재협상", labelEn: "Loan Mod" },
    { icon: "🏢", labelKo: "압류관리", labelEn: "Foreclosure" },
    { icon: "💵", labelKo: "매각", labelEn: "Asset Sale" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "CMBS 디폴트 처리 흐름 — 스페셜 서비서의 역할" : "CMBS Default Workflow — Role of Special Servicer"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          {/* Desktop: horizontal flow */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Normal loan */}
            <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 text-center">
              <span className="text-xl mb-2 block">📋</span>
              <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300">
                {ko ? "정상 대출" : "Performing Loan"}
              </p>
            </div>
            <div className="text-gray-300 dark:text-gray-600 font-bold text-lg flex-shrink-0">→</div>
            {/* Master Servicer */}
            <div className="flex-1 rounded-xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 p-4 text-center">
              <span className="text-xl mb-2 block">🏦</span>
              <p className="text-[11px] font-bold text-blue-700 dark:text-blue-300">
                {ko ? "마스터 서비서" : "Master Servicer"}
              </p>
              <p className="text-[9px] text-blue-500 dark:text-blue-400 mt-1">
                {ko ? "원리금 수납·배분" : "Collect & Distribute"}
              </p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <span className="text-[9px] font-bold text-red-400 mb-0.5">{ko ? "디폴트 발생" : "Default"}</span>
              <div className="text-red-400 font-bold text-lg">→</div>
            </div>
            {/* Special Servicer */}
            <div className="flex-1 rounded-xl border-2 border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-900/20 p-4 text-center shadow-sm shadow-amber-100 dark:shadow-none">
              <span className="text-xl mb-2 block">⚡</span>
              <p className="text-[11px] font-bold text-amber-800 dark:text-amber-200">
                {ko ? "스페셜 서비서" : "Special Servicer"}
              </p>
              <p className="text-[9px] text-amber-600 dark:text-amber-400 mt-1">
                {ko ? "문제 자산 처리 전담" : "Handles distressed assets"}
              </p>
            </div>
            <div className="text-gray-300 dark:text-gray-600 font-bold text-lg flex-shrink-0">→</div>
            {/* Actions */}
            <div className="flex-1 flex flex-col gap-2">
              {actions.map((a, i) => (
                <div key={i} className="rounded-lg border border-amber-200 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/10 px-3 py-2 flex items-center gap-2">
                  <span className="text-base">{a.icon}</span>
                  <p className="text-[10px] font-bold text-amber-700 dark:text-amber-300">
                    {ko ? a.labelKo : a.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical flow */}
          <div className="sm:hidden space-y-3 relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-amber-400 to-amber-600" />
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
              <p className="text-[12px] font-bold text-gray-700 dark:text-gray-300">📋 {ko ? "정상 대출 → 마스터 서비서" : "Performing Loan → Master Servicer"}</p>
              <p className="text-[10px] text-gray-500 mt-1">{ko ? "원리금 수납·배분" : "Collect & Distribute P&I"}</p>
            </div>
            <div className="rounded-xl border-2 border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-900/20 p-3">
              <p className="text-[12px] font-bold text-amber-800 dark:text-amber-200">⚡ {ko ? "디폴트 → 스페셜 서비서" : "Default → Special Servicer"}</p>
              <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-1">{ko ? "문제 자산 처리 전담" : "Handles distressed assets"}</p>
            </div>
            {actions.map((a, i) => (
              <div key={i} className="rounded-lg border border-amber-200 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/10 p-3 flex items-center gap-2">
                <span className="text-base">{a.icon}</span>
                <p className="text-[11px] font-bold text-amber-700 dark:text-amber-300">{ko ? a.labelKo : a.labelEn}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-amber-100 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/15 p-4">
            <p className="text-[11px] font-bold text-amber-700 dark:text-amber-300 mb-1">
              {ko ? "스페셜 서비서의 딜레마" : "Special Servicer Dilemma"}
            </p>
            <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">
              {ko
                ? "스페셜 서비서는 CMBS 투자자 전체의 이익을 대리해야 하지만, 시니어 트랜치와 메자닌 트랜치의 이해관계가 충돌한다. 시니어는 빠른 매각을 원하고, 메자닌은 회복을 기다린다."
                : "The special servicer acts for all CMBS investors, but senior and mezzanine tranche interests conflict. Senior holders want a quick sale; mezzanine holders prefer to wait for recovery."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 3: Three structural cause stat cards
function StructuralCausesVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const stats = [
    {
      icon: "📉",
      titleKo: "오피스 공실률",
      titleEn: "Office Vacancy",
      valueKo: "15–25%",
      valueEn: "15–25%",
      subKo: "2023년 미국 주요 도시",
      subEn: "Major US cities, 2023",
      color: "text-red-700 dark:text-red-300",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-700",
    },
    {
      icon: "📈",
      titleKo: "기준금리",
      titleEn: "Fed Funds Rate",
      valueKo: "0% → 5.25%",
      valueEn: "0% → 5.25%",
      subKo: "2022–2023년 급격한 인상",
      subEn: "Rapid hike cycle, 2022–23",
      color: "text-amber-700 dark:text-amber-300",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
    },
    {
      icon: "💰",
      titleKo: "2024–26 만기 물량",
      titleEn: "2024–26 Maturities",
      valueKo: "$1,500억+",
      valueEn: "$150B+",
      subKo: "오피스 CMBS 만기 도래",
      subEn: "Office CMBS coming due",
      color: "text-orange-700 dark:text-orange-300",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-200 dark:border-orange-700",
    },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "오피스 CMBS 위기의 세 가지 구조적 원인" : "Three Structural Causes of the Office CMBS Crisis"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                className={`rounded-xl border p-5 text-center ${s.bg} ${s.border}`}
              >
                <span className="text-3xl block mb-2">{s.icon}</span>
                <p className={`text-[11px] font-bold uppercase tracking-wide mb-2 ${s.color}`}>
                  {ko ? s.titleKo : s.titleEn}
                </p>
                <p className={`text-2xl font-black ${s.color} mb-1`}>
                  {ko ? s.valueKo : s.valueEn}
                </p>
                <p className={`text-[9px] opacity-75 ${s.color}`}>
                  {ko ? s.subKo : s.subEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Visual 4: Investor checklist table
function InvestorChecklistVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const metrics = [
    {
      metricKo: "DSCR",
      metricEn: "DSCR",
      fullKo: "부채상환배율",
      fullEn: "Debt Service Coverage Ratio",
      passKo: "> 1.25x",
      passEn: "> 1.25x",
      failKo: "< 1.0x 위험",
      failEn: "< 1.0x Danger",
      noteKo: "순운영소득 / 연간 원리금 상환액",
      noteEn: "Net Operating Income / Annual Debt Service",
    },
    {
      metricKo: "LTV",
      metricEn: "LTV",
      fullKo: "대출비율",
      fullEn: "Loan-to-Value",
      passKo: "< 65%",
      passEn: "< 65%",
      failKo: "> 80% 경고",
      failEn: "> 80% Warning",
      noteKo: "발행 시 LTV가 낮을수록 버퍼 큼",
      noteEn: "Lower LTV at issuance = larger buffer",
    },
    {
      metricKo: "임차인 만기",
      metricEn: "Lease Expiry",
      fullKo: "주요 임차인 임대 만기",
      fullEn: "Key Tenant Lease Maturity",
      passKo: "대출 만기 이후",
      passEn: "After loan maturity",
      failKo: "대출 만기 前 집중",
      failEn: "Concentrated before loan maturity",
      noteKo: "임차인 退出 시 현금흐름 단절",
      noteEn: "Cash flow disruption if tenants leave",
    },
    {
      metricKo: "빌딩 등급",
      metricEn: "Building Class",
      fullKo: "오피스 빌딩 등급",
      fullEn: "Office Building Class",
      passKo: "Class A (핵심 입지)",
      passEn: "Class A (Prime Location)",
      failKo: "Class B/C (외곽)",
      failEn: "Class B/C (Suburban)",
      noteKo: "WFH 환경에서 A급 집중 현상",
      noteEn: "Flight-to-quality in WFH era",
    },
    {
      metricKo: "만기 일정",
      metricEn: "Maturity Profile",
      fullKo: "CMBS 만기 일정",
      fullEn: "CMBS Maturity Schedule",
      passKo: "분산된 만기",
      passEn: "Distributed maturities",
      failKo: "2024–26 집중 만기",
      failEn: "2024–26 maturity wall",
      noteKo: "리파이낸싱 시 고금리 환경 노출",
      noteEn: "Refinancing exposed to high-rate environment",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "CMBS 투자자 체크리스트 — 5가지 핵심 지표" : "CMBS Investor Checklist — 5 Key Metrics"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-amber-200 dark:border-amber-700">
                  <th className="py-2 pr-4 text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest whitespace-nowrap">
                    {ko ? "지표" : "Metric"}
                  </th>
                  <th className="py-2 pr-4 text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest whitespace-nowrap">
                    {ko ? "양호 기준" : "Pass Criteria"}
                  </th>
                  <th className="py-2 pr-4 text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest whitespace-nowrap">
                    {ko ? "위험 신호" : "Red Flag"}
                  </th>
                  <th className="py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "설명" : "Note"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((m, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-amber-50/40 dark:hover:bg-amber-900/10 transition-colors"
                  >
                    <td className="py-3 pr-4">
                      <p className="text-[12px] font-black text-amber-700 dark:text-amber-300 whitespace-nowrap">
                        {ko ? m.metricKo : m.metricEn}
                      </p>
                      <p className="text-[9px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
                        {ko ? m.fullKo : m.fullEn}
                      </p>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-md px-2 py-1">
                        <span className="text-green-500 text-[10px]">✓</span>
                        <span className="text-[10px] font-bold text-green-700 dark:text-green-300 whitespace-nowrap">
                          {ko ? m.passKo : m.passEn}
                        </span>
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className="inline-flex items-center gap-1 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-md px-2 py-1">
                        <span className="text-red-500 text-[10px]">✗</span>
                        <span className="text-[10px] font-bold text-red-700 dark:text-red-300 whitespace-nowrap">
                          {ko ? m.failKo : m.failEn}
                        </span>
                      </span>
                    </td>
                    <td className="py-3">
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">
                        {ko ? m.noteKo : m.noteEn}
                      </p>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-amber-100 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/15 p-4">
            <p className="text-[11px] text-amber-700 dark:text-amber-300 leading-relaxed">
              {ko
                ? "💡 Blackstone의 오피스 CMBS는 발행 시점에 LTV 65%로 양호했으나, 금리 인상과 WFH 확산으로 2023년 담보가치가 급락하며 모든 지표가 동시에 악화됐다."
                : "💡 Blackstone's office CMBS had a healthy 65% LTV at issuance, but rate hikes and WFH adoption caused collateral values to plunge — all metrics deteriorated simultaneously by 2023."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  const visuals = [
    <DecisionTreeVisual key="0" lang={lang} />,
    <OfficeContextVisual key="1" lang={lang} />,
    <SpecialServicerFlowVisual key="2" lang={lang} />,
    <StructuralCausesVisual key="3" lang={lang} />,
    <InvestorChecklistVisual key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

export default function BlackstoneOfficeClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
  const ko = lang === "ko";
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero / Header section */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market" : "/en/market"} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "위기·디폴트" : "Crisis & Default"}</span>
            </div>
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: ACCENT_LIGHT, color: ACCENT }}
            >
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
            </div>
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
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {deal.titleEn}
              </motion.p>
            )}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? deal.excerpt : deal.excerptEn}
            </motion.p>
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

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-6 mt-4">
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
        </div>

        {/* Executive Summary */}
        {deal.executiveSummary && (
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="max-w-3xl mx-auto px-5 pt-4"
          >
            <div className="rounded-xl border-l-4 px-5 py-4" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-amber-800 dark:text-amber-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">
          {/* Deal Snapshot */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "딜 스냅샷" : "Deal Snapshot"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl overflow-hidden border-2 border-amber-100 dark:border-amber-900/40"
            >
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  {ko ? "Blackstone 오피스 CMBS — 핵심 수치" : "Blackstone Office CMBS — Key Figures"}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-amber-100 dark:divide-amber-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div
                    key={row.labelKo}
                    variants={fadeUp(i * 0.06)}
                    className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                      {ko ? row.labelKo : row.labelEn}
                    </p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{row.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 divide-x divide-amber-100 dark:divide-amber-900/30 border-t-2 border-amber-100 dark:border-amber-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "발행 LTV" : "Initial LTV"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">65%</p>
                </div>
                <div className="px-4 py-4 text-center bg-red-50 dark:bg-red-900/20">
                  <p className="text-[10px] text-red-500 dark:text-red-400 uppercase font-bold mb-1">{ko ? "2023년 LTV" : "2023 LTV"}</p>
                  <p className="text-2xl font-black text-red-600 dark:text-red-400">&gt;100%</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>
                    {ko ? "결과" : "Outcome"}
                  </p>
                  <p className="text-sm font-black leading-tight" style={{ color: ACCENT }}>
                    {ko ? "전략적\n디폴트" : "Strategic\nDefault"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Sections */}
          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                  {ko ? section.heading : section.headingEn}
                </h2>
                <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
              </motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
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
              {getVisual(i, lang)}
            </motion.section>
          ))}

          {/* Key Terms */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="mt-5 space-y-3">
              {deal.keyTerms.map((term, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp()}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: ACCENT }}
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

          {/* Assessment */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
                    {ko ? "긍정적 결과" : "Positives"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-amber-800 dark:text-amber-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
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
                      <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          )}

          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />

          {/* FAQ */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <FaqAccordion
                items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))}
                accent={ACCENT}
              />
            </motion.section>
          )}

          {/* Related Content */}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50/40 dark:hover:bg-amber-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-[11px] font-bold text-amber-600 dark:text-amber-400 flex-shrink-0">
                          M
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors text-sm flex-shrink-0">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-[11px] font-bold text-teal-600 dark:text-teal-400 flex-shrink-0">
                          101
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-sm flex-shrink-0">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {/* References */}
          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: ACCENT }} />
              <ol className="space-y-2.5">
                {deal.references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    variants={fadeUp()}
                    className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
                      style={{ background: ACCENT_DARK }}
                    >
                      {ref.id}
                    </span>
                    <span>
                      {ref.author && (
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>
                      )}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: ACCENT }}
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span>{ref.title}</span>
                      )}
                      {ref.source && (
                        <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>
                      )}
                      {ref.year && (
                        <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>
                      )}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
