"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area,
  BarChart, Bar, Cell,
  LineChart, Line,
  ComposedChart,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { InvestorStory } from "@/data/investor-stories";
import { STORY_CATEGORY_META } from "@/data/investor-stories";

type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── Shared UI helpers ─────────────────────────────────────────────────────────

function SectionTitle({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <motion.div variants={fadeUp()} className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
        {children}
      </h2>
      <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
    </motion.div>
  );
}

function ChartCard({ title, caption, children }: { title: string; caption?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title}</p>
      </div>
      <div className="p-5">{children}</div>
      {caption && (
        <p className="text-[10px] text-gray-400 text-center pb-4 px-4">{caption}</p>
      )}
    </div>
  );
}

function BodyParagraphs({ paras, accent }: { paras: string[]; accent: string }) {
  return (
    <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
      <div className="space-y-3">
        {paras.map((para, j) => (
          <motion.p
            key={j}
            variants={fadeUp(j * 0.04)}
            className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── ① SOROS POUND 1992 ────────────────────────────────────────────────────────

const sorosRateData = [
  { date: "Sep 1", gbpDem: 2.93 },
  { date: "Sep 5", gbpDem: 2.88 },
  { date: "Sep 10", gbpDem: 2.83 },
  { date: "Sep 14", gbpDem: 2.81 },
  { date: "Sep 15", gbpDem: 2.80 },
  { date: "Sep 16\n(오전)", gbpDem: 2.778 },
  { date: "Sep 16\n(오후)", gbpDem: 2.69 },
  { date: "Sep 17", gbpDem: 2.62 },
  { date: "Sep 24", gbpDem: 2.55 },
  { date: "Oct 10", gbpDem: 2.48 },
];

const sorosRateHike = [
  { time: "Sep 16\n09:00", rate: 10 },
  { time: "Sep 16\n11:00", rate: 12 },
  { time: "Sep 16\n14:15", rate: 15 },
  { time: "Sep 17\n09:00", rate: 10 },
  { time: "Nov 13", rate: 8 },
  { time: "Dec 22", rate: 6 },
];

function SorosBody({ ko, story, accent, accentLight, accentDark }: {
  ko: boolean; story: InvestorStory; accent: string; accentLight: string; accentDark: string;
}) {
  const timelineEvents = [
    {
      time: ko ? "9월 16일 오전" : "Sep 16, Morning",
      title: ko ? "영란은행 시장 개입 시작" : "BoE Intervention Begins",
      desc: ko
        ? "영란은행, 시장에서 수십억 파운드 직접 매수. 초기 개입 규모 약 $30억."
        : "Bank of England begins directly buying billions of pounds. Initial intervention ~$3B.",
      severity: "warning",
    },
    {
      time: ko ? "11:00" : "11:00 AM",
      title: ko ? "금리 10% → 12%" : "Rate Hike: 10% → 12%",
      desc: ko
        ? "영국 정부 기준금리 2%p 긴급 인상. 시장은 반응 없음 — 파운드 매도세 지속."
        : "UK government raises base rate by 2%. Market unmoved — pound selling continues.",
      severity: "warning",
    },
    {
      time: ko ? "14:15" : "2:15 PM",
      title: ko ? "금리 12% → 15%" : "Rate Hike: 12% → 15%",
      desc: ko
        ? "하루에 두 번째 긴급 금리 인상. 전례 없는 극단적 조치. 그러나 파운드 매도 멈추지 않음."
        : "Second emergency hike in one day. Unprecedented extreme measure. Pound selling does not stop.",
      severity: "danger",
    },
    {
      time: ko ? "19:00" : "7:00 PM",
      title: ko ? "ERM 탈퇴 선언" : "ERM Exit Announced",
      desc: ko
        ? "노먼 라몬트 재무장관 TV 발표: 영국, ERM에서 탈퇴. 외환보유액 $270억 소진. 금리 다음날 10%로 복귀."
        : "Chancellor Norman Lamont on TV: Britain exits the ERM. $27B in reserves spent. Rate returns to 10% next morning.",
      severity: "critical",
    },
  ];

  const sColors: Record<string, { dot: string; border: string; bg: string; text: string; badge: string }> = {
    warning:  { dot: "bg-amber-400", border: "border-amber-300", bg: "bg-amber-50 dark:bg-amber-900/25", text: "text-amber-800 dark:text-amber-200", badge: "bg-amber-100 text-amber-700" },
    danger:   { dot: "bg-rose-500",  border: "border-rose-400",  bg: "bg-rose-50 dark:bg-rose-900/25",   text: "text-rose-800 dark:text-rose-200",   badge: "bg-rose-100 text-rose-700" },
    critical: { dot: "bg-red-700",   border: "border-red-600",   bg: "bg-red-50 dark:bg-red-900/30",     text: "text-red-800 dark:text-red-200",     badge: "bg-red-100 text-red-800" },
  };

  const asymRisk = ko
    ? [
        { scenario: "시나리오 A: ERM 유지 성공", prob: "낮음", outcome: "이자 비용 손실 (유지 비용)", color: "text-amber-700 bg-amber-50 border-amber-200" },
        { scenario: "시나리오 B: ERM 탈퇴·파운드 절하", prob: "높음", outcome: "+$10억 이상 (15% 절하)", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
      ]
    : [
        { scenario: "Scenario A: ERM holds", prob: "Low", outcome: "Loss = interest carry cost only", color: "text-amber-700 bg-amber-50 border-amber-200" },
        { scenario: "Scenario B: ERM exit + devaluation", prob: "High", outcome: "+$1B+ (15% devaluation)", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
      ];

  return (
    <div className="space-y-16">
      {/* ── 3-stat callout ── */}
      <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="show" viewport={VP}>
        <div className="grid grid-cols-3 divide-x rounded-2xl overflow-hidden border-2" style={{ borderColor: accentLight }}>
          <div className="px-4 py-5 text-center" style={{ background: accentLight }}>
            <p className="text-[10px] font-bold mb-1" style={{ color: accentDark }}>{ko ? "포지션 규모" : "Position Size"}</p>
            <p className="text-3xl font-black" style={{ color: accent }}>$100억</p>
            <p className="text-[11px] font-medium mt-1" style={{ color: accent }}>{ko ? "파운드화 공매도" : "GBP Short"}</p>
          </div>
          <div className="px-4 py-5 text-center bg-emerald-50 dark:bg-emerald-900/20">
            <p className="text-[10px] font-bold text-emerald-600 mb-1">{ko ? "단 하루 수익" : "Single-Day Profit"}</p>
            <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">$10억</p>
            <p className="text-[11px] font-medium text-emerald-500 mt-1">Black Wednesday</p>
          </div>
          <div className="px-4 py-5 text-center bg-rose-50 dark:bg-rose-900/20">
            <p className="text-[10px] font-bold text-rose-600 mb-1">{ko ? "영란은행 개입액" : "BoE Intervention"}</p>
            <p className="text-3xl font-black text-rose-600 dark:text-rose-400">$270억</p>
            <p className="text-[11px] font-medium text-rose-500 mt-1">{ko ? "전액 소진, 방어 실패" : "All spent, failed"}</p>
          </div>
        </div>
      </motion.div>

      {/* ── Section 1: 배경 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[0].heading : story.sections[0].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[0].body : story.sections[0].bodyEn).split("\n\n").slice(0, 3)} />
        <motion.div variants={fadeUp(0.1)} className="mt-8">
          <ChartCard
            title={ko ? "ERM 하한선 돌파 — GBP/DEM 환율 추이 (1992년 9월)" : "ERM Floor Breach — GBP/DEM Rate (September 1992)"}
            caption={ko ? "ERM 하한선 2.778 DEM/GBP 이탈 후 파운드화는 단기간에 약 15% 절하됐다." : "After breaking the ERM floor of 2.778, sterling depreciated ~15% rapidly."}
          >
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={sorosRateData} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                <defs>
                  <linearGradient id="sorosGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={accent} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={accent} stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[2.4, 3.0]} tick={{ fontSize: 10, fill: "#9ca3af" }}
                  axisLine={false} tickLine={false}
                  tickFormatter={(v) => v.toFixed(2)}
                />
                <Tooltip
                  formatter={(v) => [`${Number(v).toFixed(3)} DEM/GBP`, ko ? "파운드/마르크" : "GBP/DEM"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <ReferenceLine y={2.778} stroke="#ef4444" strokeDasharray="4 4"
                  label={{ value: ko ? "ERM 하한선 2.778" : "ERM Floor 2.778", fill: "#ef4444", fontSize: 10, position: "right" }}
                />
                <Area type="monotone" dataKey="gbpDem" stroke={accent} strokeWidth={2.5}
                  fill="url(#sorosGrad)" dot={{ fill: accent, r: 3, strokeWidth: 0 }} activeDot={{ fill: accent, r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>
      </motion.section>

      {/* ── Section 2: 전략 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[1].heading : story.sections[1].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[1].body : story.sections[1].bodyEn).split("\n\n").slice(0, 4)} />

        {/* Asymmetric risk table */}
        <motion.div variants={fadeUp(0.1)} className="mt-8">
          <ChartCard title={ko ? "비대칭 리스크 구조 분석" : "Asymmetric Risk Structure"}>
            <div className="space-y-3">
              {asymRisk.map((row, i) => (
                <div key={i} className={`rounded-xl border p-4 ${row.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[12px] font-bold mb-1">{row.scenario}</p>
                      <p className="text-[13px] font-semibold">{row.outcome}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full border border-current opacity-70 flex-shrink-0">
                      {ko ? "확률:" : "Prob:"} {row.prob}
                    </span>
                  </div>
                </div>
              ))}
              <p className="text-[11px] text-gray-400 text-center pt-1">
                {ko ? "잃어도 제한적 (이자 비용), 이기면 폭발적 (+15%+) — 비대칭 구조의 핵심" : "Capped downside (carry cost), explosive upside (+15%+) — the essence of asymmetric bets"}
              </p>
            </div>
          </ChartCard>
        </motion.div>
      </motion.section>

      {/* ── Section 3: Black Wednesday ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[2].heading : story.sections[2].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={[(ko ? story.sections[2].body : story.sections[2].bodyEn).split("\n\n")[0]]} />

        {/* Timeline */}
        <motion.div variants={fadeUp(0.1)} className="mt-6 space-y-3">
          {timelineEvents.map((ev, i) => {
            const c = sColors[ev.severity];
            return (
              <motion.div key={i} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${c.bg} ${c.border}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-0.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{ev.time}</span>
                      <span className={`text-[13px] font-bold ${c.text}`}>{ev.title}</span>
                    </div>
                    <p className={`text-[12px] leading-relaxed ${c.text} opacity-90`}>{ev.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interest rate chart */}
        <motion.div variants={fadeUp(0.2)} className="mt-6">
          <ChartCard
            title={ko ? "영국 기준금리 — Black Wednesday 전후 (%)" : "UK Base Rate — Before & After Black Wednesday (%)"}
            caption={ko ? "하루에 10% → 12% → 15% → 10% 롤러코스터. 15%는 발표됐으나 시장이 반응하지 않아 다음날 철회." : "10% → 12% → 15% → 10% in a single day. 15% was announced but withdrawn the next morning."}
          >
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sorosRateHike} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis domain={[4, 17]} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip formatter={(v) => [`${v}%`, ko ? "기준금리" : "Base Rate"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <ReferenceLine y={15} stroke="#ef4444" strokeDasharray="4 4"
                  label={{ value: "15%", fill: "#ef4444", fontSize: 10, position: "insideRight" }}
                />
                <Line type="stepAfter" dataKey="rate" stroke={accent} strokeWidth={2.5}
                  dot={{ fill: accent, r: 4, strokeWidth: 0 }} activeDot={{ fill: accent, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>
      </motion.section>

      {/* ── Section 4 & 5: 결과 + 교훈 ── */}
      {story.sections.slice(3).map((sec, i) => (
        <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
          <SectionTitle accent={accent}>{ko ? sec.heading : sec.headingEn}</SectionTitle>
          <BodyParagraphs accent={accent} paras={(ko ? sec.body : sec.bodyEn).split("\n\n")} />
        </motion.section>
      ))}
    </div>
  );
}

// ── ② ARCHEGOS 2021 ───────────────────────────────────────────────────────────

const viacombCBSData = [
  { date: "Mar 15", price: 100 },
  { date: "Mar 18", price: 97 },
  { date: "Mar 19", price: 95 },
  { date: "Mar 22", price: 88 },
  { date: "Mar 23", price: 79 },
  { date: "Mar 24", price: 72 },
  { date: "Mar 25", price: 47 },
  { date: "Mar 26", price: 41 },
  { date: "Mar 29", price: 43 },
  { date: "Mar 30", price: 39 },
];

const pbLossData = [
  { name: "Credit\nSuisse", loss: 4.7, color: "#ef4444" },
  { name: "Nomura", loss: 2.9, color: "#f97316" },
  { name: "Morgan\nStanley", loss: 0.9, color: "#f59e0b" },
  { name: "UBS", loss: 0.7, color: "#6b7280" },
  { name: "Goldman\nSachs", loss: 0.0, color: "#10b981" },
];

function ArchegosBody({ ko, story, accent, accentLight, accentDark }: {
  ko: boolean; story: InvestorStory; accent: string; accentLight: string; accentDark: string;
}) {
  const collapse = [
    {
      date: ko ? "3월 22~23일 (월~화)" : "Mar 22–23 (Mon–Tue)",
      title: ko ? "비아콤CBS 급락 + 첫 마진콜" : "ViacomCBS plunges + First Margin Calls",
      desc: ko ? "비아콤CBS, $29억 증자 공시로 주가 급락. 아케고스 포지션 손실로 마진콜 시작." : "ViacomCBS announces $2.9B equity raise, stock plunges. Margin calls begin on Archegos positions.",
      severity: "warning",
    },
    {
      date: ko ? "3월 24일 (수)" : "Mar 24 (Wed)",
      title: ko ? "긴급회의: '질서있는 청산' 제안" : "Emergency meeting: 'Orderly Unwind' proposed",
      desc: ko ? "빌 황, 6개 은행 대표 소집. 천천히 청산하자고 제안. 골드만·모건스탠리 거부하고 즉각 독자 행동." : "Hwang convenes reps from 6 banks. Proposes slow coordinated unwind. Goldman & Morgan Stanley refuse and act independently.",
      severity: "warning",
    },
    {
      date: ko ? "3월 25일 (목) 새벽" : "Mar 25 (Thu) Pre-market",
      title: ko ? "골드만·모건스탠리 블록딜 개시" : "Goldman & Morgan Stanley begin block sales",
      desc: ko ? "새벽 블록딜로 비아콤CBS·디스커버리 30~50% 폭락. 다른 은행들 강제청산 연쇄 시작." : "Pre-market block sales. ViacomCBS & Discovery crash 30–50%. Cascading forced liquidations begin at other banks.",
      severity: "danger",
    },
    {
      date: ko ? "3월 26일 (금)" : "Mar 26 (Fri)",
      title: ko ? "전 포지션 청산 완료" : "All positions fully liquidated",
      desc: ko ? "빌 황 순자산 $200억 사실상 소멸. Credit Suisse $47억, 노무라 $29억 손실 확정." : "Hwang's $20B net worth effectively wiped out. Credit Suisse $4.7B, Nomura $2.9B losses confirmed.",
      severity: "critical",
    },
  ];

  const sColors: Record<string, { dot: string; border: string; bg: string; text: string; badge: string }> = {
    warning:  { dot: "bg-amber-400", border: "border-amber-200", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-800 dark:text-amber-200", badge: "bg-amber-100 text-amber-700" },
    danger:   { dot: "bg-rose-500",  border: "border-rose-200",  bg: "bg-rose-50 dark:bg-rose-900/20",   text: "text-rose-800 dark:text-rose-200",   badge: "bg-rose-100 text-rose-700" },
    critical: { dot: "bg-red-700",   border: "border-red-200",   bg: "bg-red-50 dark:bg-red-900/20",     text: "text-red-800 dark:text-red-200",     badge: "bg-red-100 text-red-800" },
  };

  const trsTable = ko
    ? [
        { label: "법적 주식 소유자", trs: "프라임 브로커 (은행)", direct: "투자자 (아케고스)" },
        { label: "공시 의무 (5% 룰)", trs: "없음 ⭕", direct: "13D/13G 보고 의무 ❌" },
        { label: "레버리지 가능 여부", trs: "증거금만으로 수배 레버리지", direct: "현금 전액 필요" },
        { label: "상대방 리스크", trs: "프라임 브로커 부담", direct: "없음" },
        { label: "아케고스의 선택", trs: "✅ TRS 활용 (규제 회피)", direct: "" },
      ]
    : [
        { label: "Legal share owner", trs: "Prime broker (bank)", direct: "Investor (Archegos)" },
        { label: "Disclosure (5% rule)", trs: "None ⭕", direct: "13D/13G filing required ❌" },
        { label: "Leverage", trs: "Multiples via margin only", direct: "Full cash required" },
        { label: "Counterparty risk", trs: "Prime broker bears it", direct: "None" },
        { label: "Archegos's choice", trs: "✅ TRS (regulatory avoidance)", direct: "" },
      ];

  return (
    <div className="space-y-16">
      {/* ── 3-stat callout ── */}
      <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="show" viewport={VP}>
        <div className="grid grid-cols-3 divide-x rounded-2xl overflow-hidden border-2" style={{ borderColor: "#e5e7eb" }}>
          <div className="px-4 py-5 text-center bg-gray-100 dark:bg-gray-800">
            <p className="text-[10px] font-bold text-gray-500 mb-1">{ko ? "추정 노셔널 규모" : "Est. Notional Size"}</p>
            <p className="text-3xl font-black text-gray-700 dark:text-gray-200">$1,000억</p>
            <p className="text-[11px] font-medium text-gray-500 mt-1">{ko ? "TRS 기반" : "TRS-based"}</p>
          </div>
          <div className="px-4 py-5 text-center bg-red-50 dark:bg-red-900/20">
            <p className="text-[10px] font-bold text-red-500 mb-1">{ko ? "빌 황 손실" : "Hwang's Loss"}</p>
            <p className="text-3xl font-black text-red-600 dark:text-red-400">~$200억</p>
            <p className="text-[11px] font-medium text-red-400 mt-1">{ko ? "4 거래일" : "4 trading days"}</p>
          </div>
          <div className="px-4 py-5 text-center bg-orange-50 dark:bg-orange-900/20">
            <p className="text-[10px] font-bold text-orange-500 mb-1">{ko ? "프라임 브로커 총손실" : "PB Total Losses"}</p>
            <p className="text-3xl font-black text-orange-600 dark:text-orange-400">~$100억</p>
            <p className="text-[11px] font-medium text-orange-400 mt-1">{ko ? "CS·노무라 등" : "CS, Nomura, etc."}</p>
          </div>
        </div>
      </motion.div>

      {/* ── Section 1: 배경 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[0].heading : story.sections[0].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[0].body : story.sections[0].bodyEn).split("\n\n")} />
      </motion.section>

      {/* ── Section 2: TRS 전략 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[1].heading : story.sections[1].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[1].body : story.sections[1].bodyEn).split("\n\n").slice(0, 2)} />

        {/* TRS vs Direct comparison table */}
        <motion.div variants={fadeUp(0.1)} className="mt-6">
          <ChartCard title={ko ? "TRS vs 직접 보유 — 구조 비교" : "TRS vs Direct Holding — Structure Comparison"}>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <th className="px-4 py-3 text-left font-bold text-gray-500 bg-gray-50 dark:bg-gray-900/50 w-1/3">{ko ? "구분" : "Category"}</th>
                    <th className="px-4 py-3 text-left font-bold bg-gray-100 dark:bg-gray-800" style={{ color: accent }}>TRS (아케고스)</th>
                    <th className="px-4 py-3 text-left font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20">{ko ? "직접 보유" : "Direct Holding"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {trsTable.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/30">{row.label}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.trs}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-blue-50/30 dark:bg-blue-900/10">{row.direct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ChartCard>
        </motion.div>
        <div className="mt-4">
          <BodyParagraphs accent={accent} paras={(ko ? story.sections[1].body : story.sections[1].bodyEn).split("\n\n").slice(2)} />
        </div>
      </motion.section>

      {/* ── Section 3: 붕괴 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[2].heading : story.sections[2].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={[(ko ? story.sections[2].body : story.sections[2].bodyEn).split("\n\n")[0]]} />

        {/* ViacomCBS chart */}
        <motion.div variants={fadeUp(0.1)} className="mt-6">
          <ChartCard
            title={ko ? "ViacomCBS (VIAC) 주가 붕괴 — 2021년 3월 ($)" : "ViacomCBS (VIAC) Stock Collapse — March 2021 ($)"}
            caption={ko ? "3월 25~26일 단 이틀간 약 58% 하락. 아케고스 강제청산의 시작점." : "~58% decline in just two days (Mar 25–26). The trigger for Archegos's forced liquidation."}
          >
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={viacombCBSData} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                <defs>
                  <linearGradient id="viacGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis domain={[30, 110]} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip formatter={(v) => [`$${v}`, "VIAC"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <ReferenceLine x="Mar 25" stroke="#ef4444" strokeDasharray="4 4" />
                <Area type="monotone" dataKey="price" stroke="#ef4444" strokeWidth={2.5}
                  fill="url(#viacGrad)" dot={{ fill: "#ef4444", r: 3, strokeWidth: 0 }} activeDot={{ fill: "#ef4444", r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        {/* 4-day timeline */}
        <motion.div variants={fadeUp(0.15)} className="mt-6 space-y-3">
          {collapse.map((ev, i) => {
            const c = sColors[ev.severity];
            return (
              <motion.div key={i} variants={fadeUp(i * 0.08)}
                className={`rounded-xl border p-4 ${c.bg} ${c.border}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{ev.date}</span>
                      <span className={`text-[13px] font-bold ${c.text}`}>{ev.title}</span>
                    </div>
                    <p className={`text-[12px] leading-relaxed ${c.text} opacity-90`}>{ev.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* PB losses bar chart */}
        <motion.div variants={fadeUp(0.2)} className="mt-6">
          <ChartCard
            title={ko ? "프라임 브로커별 손실 규모 ($B)" : "Prime Broker Losses by Institution ($B)"}
            caption={ko ? "질서있는 청산 논의에 참여한 CS·노무라가 가장 큰 손실. 즉각 행동한 골드만은 손실 거의 없음." : "CS and Nomura, who delayed for orderly unwind talks, suffered the most. Goldman, which moved immediately, had minimal losses."}
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={pbLossData} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `$${v}B`}
                />
                <Tooltip formatter={(v) => [`$${v}B`, ko ? "손실" : "Loss"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <Bar dataKey="loss" radius={[6, 6, 0, 0]}>
                  {pbLossData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>
      </motion.section>

      {/* ── Section 4: 교훈 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[3].heading : story.sections[3].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[3].body : story.sections[3].bodyEn).split("\n\n")} />
      </motion.section>
    </div>
  );
}

// ── ③ BUFFETT JAPAN 2020 ──────────────────────────────────────────────────────

const buffettStockData = [
  { date: "2020 Q3\n(공시)", idx: 100 },
  { date: "2020 Q4", idx: 115 },
  { date: "2021 Q1", idx: 128 },
  { date: "2021 Q2", idx: 135 },
  { date: "2021 Q3", idx: 145 },
  { date: "2021 Q4", idx: 155 },
  { date: "2022 Q1", idx: 162 },
  { date: "2022 Q2", idx: 170 },
  { date: "2022 Q3", idx: 185 },
  { date: "2022 Q4", idx: 195 },
  { date: "2023 Q1", idx: 220 },
  { date: "2023 Q2", idx: 260 },
  { date: "2023 Q3", idx: 290 },
];

const carryData = [
  { year: "2020", bondYield: 0.1, divYield: 4.5, spread: 4.4 },
  { year: "2021", bondYield: 0.1, divYield: 4.8, spread: 4.7 },
  { year: "2022", bondYield: 0.25, divYield: 5.5, spread: 5.25 },
  { year: "2023", bondYield: 0.6, divYield: 6.2, spread: 5.6 },
];

function BuffettBody({ ko, story, accent, accentLight, accentDark }: {
  ko: boolean; story: InvestorStory; accent: string; accentLight: string; accentDark: string;
}) {
  const shosha = ko
    ? [
        { name: "이토추 (伊藤忠)", sector: "섬유·식품·IT·금융", pbr: "0.8x", yield: "3.8%", stake: "8.6%" },
        { name: "미쓰비시 (三菱)", sector: "자원·에너지·화학", pbr: "0.7x", yield: "4.2%", stake: "8.3%" },
        { name: "미쓰이 (三井)", sector: "에너지·철강·식품", pbr: "0.6x", yield: "4.5%", stake: "8.1%" },
        { name: "마루베니 (丸紅)", sector: "곡물·전력·식품", pbr: "0.55x", yield: "4.8%", stake: "8.5%" },
        { name: "스미토모 (住友)", sector: "금속·물류·인프라", pbr: "0.6x", yield: "4.0%", stake: "8.2%" },
      ]
    : [
        { name: "Itochu", sector: "Textiles, Food, IT, Finance", pbr: "0.8x", yield: "3.8%", stake: "8.6%" },
        { name: "Mitsubishi", sector: "Resources, Energy, Chemicals", pbr: "0.7x", yield: "4.2%", stake: "8.3%" },
        { name: "Mitsui", sector: "Energy, Steel, Food", pbr: "0.6x", yield: "4.5%", stake: "8.1%" },
        { name: "Marubeni", sector: "Grain, Power, Food", pbr: "0.55x", yield: "4.8%", stake: "8.5%" },
        { name: "Sumitomo", sector: "Metals, Logistics, Infra", pbr: "0.6x", yield: "4.0%", stake: "8.2%" },
      ];

  return (
    <div className="space-y-16">
      {/* ── 3-stat callout ── */}
      <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="show" viewport={VP}>
        <div className="grid grid-cols-3 divide-x rounded-2xl overflow-hidden border-2" style={{ borderColor: accentLight }}>
          <div className="px-4 py-5 text-center" style={{ background: accentLight }}>
            <p className="text-[10px] font-bold mb-1" style={{ color: accentDark }}>{ko ? "초기 투자액" : "Initial Investment"}</p>
            <p className="text-3xl font-black" style={{ color: accent }}>$62억</p>
            <p className="text-[11px] font-medium mt-1" style={{ color: accent }}>{ko ? "엔화 채권 발행" : "Funded by yen bonds"}</p>
          </div>
          <div className="px-4 py-5 text-center bg-emerald-100 dark:bg-emerald-900/30">
            <p className="text-[10px] font-bold text-emerald-700 mb-1">{ko ? "2023년 평가이익" : "2023 Unrealized Gain"}</p>
            <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">3배+</p>
            <p className="text-[11px] font-medium text-emerald-500 mt-1">{ko ? "취득원가 대비" : "vs. acquisition cost"}</p>
          </div>
          <div className="px-4 py-5 text-center bg-teal-50 dark:bg-teal-900/20">
            <p className="text-[10px] font-bold text-teal-600 mb-1">{ko ? "현재 평균 지분" : "Current Avg. Stake"}</p>
            <p className="text-3xl font-black text-teal-600 dark:text-teal-400">~8.5%</p>
            <p className="text-[11px] font-medium text-teal-500 mt-1">{ko ? "각 상사 (한도 9.9%)" : "Each (limit 9.9%)"}</p>
          </div>
        </div>
      </motion.div>

      {/* ── Section 1: 배경 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[0].heading : story.sections[0].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[0].body : story.sections[0].bodyEn).split("\n\n")} />

        {/* 5 Sogo Shosha comparison table */}
        <motion.div variants={fadeUp(0.1)} className="mt-6">
          <ChartCard title={ko ? "5대 종합상사 투자 시점 주요 지표 (2020년 기준)" : "Big-5 Sogo Shosha — Key Metrics at Investment (2020)"}>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                    <th className="px-4 py-3 text-left font-bold text-gray-500">{ko ? "회사" : "Company"}</th>
                    <th className="px-4 py-3 text-left font-bold text-gray-500">{ko ? "주요 사업" : "Key Business"}</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-500">PBR</th>
                    <th className="px-4 py-3 text-center font-bold text-gray-500">{ko ? "배당수익률" : "Div. Yield"}</th>
                    <th className="px-4 py-3 text-center font-bold" style={{ color: accent }}>{ko ? "현재 지분" : "Current Stake"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {shosha.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.name}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-[11px]">{row.sector}</td>
                      <td className="px-4 py-3 text-center font-mono text-rose-600 dark:text-rose-400 font-semibold">{row.pbr}</td>
                      <td className="px-4 py-3 text-center font-mono font-semibold" style={{ color: accent }}>{row.yield}</td>
                      <td className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">{row.stake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3 px-2">
              {ko ? "PBR < 1.0 = 청산가치 이하 거래 (시장에서 극도로 저평가). 배당수익률은 취득 시점 기준." : "PBR < 1.0 = trading below liquidation value (extreme undervaluation). Dividend yield at time of acquisition."}
            </p>
          </ChartCard>
        </motion.div>
      </motion.section>

      {/* ── Section 2: 전략 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[1].heading : story.sections[1].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[1].body : story.sections[1].bodyEn).split("\n\n").slice(0, 3)} />

        {/* Carry trade structure visual */}
        <motion.div variants={fadeUp(0.1)} className="mt-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
            <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {ko ? "엔화 캐리 트레이드 구조" : "Yen Carry Trade Structure"}
              </p>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                {/* Step 1 */}
                <div className="flex-1 min-w-[140px] rounded-xl p-4 text-center border-2" style={{ borderColor: accent, background: accentLight }}>
                  <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: accentDark }}>
                    {ko ? "① 엔화 채권 발행" : "① Issue Yen Bonds"}
                  </p>
                  <p className="text-xl font-black" style={{ color: accent }}>~0.3%</p>
                  <p className="text-[11px] mt-1" style={{ color: accentDark }}>{ko ? "이자 비용" : "Interest cost"}</p>
                </div>
                {/* Arrow */}
                <div className="text-gray-300 dark:text-gray-600 text-2xl font-light">→</div>
                {/* Step 2 */}
                <div className="flex-1 min-w-[140px] rounded-xl p-4 text-center bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 mb-1">
                    {ko ? "② 엔화 주식 매수" : "② Buy Yen Stocks"}
                  </p>
                  <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">~5%</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">{ko ? "배당수익률" : "Dividend yield"}</p>
                </div>
                {/* Arrow */}
                <div className="text-gray-300 dark:text-gray-600 text-2xl font-light">→</div>
                {/* Result */}
                <div className="flex-1 min-w-[140px] rounded-xl p-4 text-center bg-teal-50 dark:bg-teal-900/20 border-2 border-teal-300 dark:border-teal-700">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700 dark:text-teal-400 mb-1">
                    {ko ? "③ 캐리 스프레드" : "③ Carry Spread"}
                  </p>
                  <p className="text-xl font-black text-teal-600 dark:text-teal-400">~4.7%</p>
                  <p className="text-[11px] text-teal-600 dark:text-teal-400 mt-1">{ko ? "+ 환헤지 효과" : "+ FX hedge effect"}</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 text-center mt-4">
                {ko
                  ? "엔화 부채(채권) + 엔화 자산(주식) = 자연 헤지. 배당이 이자를 초과하는 양의 캐리."
                  : "Yen liabilities (bonds) + Yen assets (stocks) = Natural hedge. Positive carry: dividends exceed interest."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Carry chart */}
        <motion.div variants={fadeUp(0.15)} className="mt-6">
          <ChartCard
            title={ko ? "엔화 채권 금리 vs 종합상사 배당수익률 (%)" : "Yen Bond Yield vs Sogo Shosha Dividend Yield (%)"}
            caption={ko ? "스프레드(배당수익률 - 채권금리)는 2020~2023년 내내 4~5%p 이상 유지. 레버리지 없이도 양의 캐리." : "The spread (dividend yield − bond yield) stayed above 4–5% throughout 2020–2023. Positive carry without leverage."}
          >
            <ResponsiveContainer width="100%" height={220}>
              <ComposedChart data={carryData} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  formatter={(v, name) => [`${v}%`, name === "bondYield" ? (ko ? "채권금리" : "Bond yield") : name === "divYield" ? (ko ? "배당수익률" : "Div. yield") : (ko ? "스프레드" : "Spread")]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <Bar dataKey="spread" fill={accent} fillOpacity={0.15} radius={[4, 4, 0, 0]} name="spread" />
                <Line type="monotone" dataKey="divYield" stroke={accent} strokeWidth={2.5} dot={{ fill: accent, r: 4 }} name="divYield" />
                <Line type="monotone" dataKey="bondYield" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4 4" dot={{ fill: "#9ca3af", r: 3 }} name="bondYield" />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>
      </motion.section>

      {/* ── Section 3: 실행과 결과 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[2].heading : story.sections[2].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[2].body : story.sections[2].bodyEn).split("\n\n").slice(0, 3)} />

        {/* Stock performance index chart */}
        <motion.div variants={fadeUp(0.1)} className="mt-6">
          <ChartCard
            title={ko ? "버크셔 공시일 이후 종합상사 주가 지수 (공시일=100)" : "Sogo Shosha Index Since Berkshire's Disclosure (Disclosure Date = 100)"}
            caption={ko ? "2020년 8월 공시일 기준 지수화. 2023년 버핏 도쿄 방문 이후 추가 급등. 취득원가 대비 3배 이상 수익." : "Indexed to disclosure date (Aug 2020). Surged again after Buffett's Tokyo visit in 2023. 3x+ return vs. acquisition cost."}
          >
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={buffettStockData} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                <defs>
                  <linearGradient id="buffGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={accent} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={accent} stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 9, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                <YAxis domain={[80, 320]} tick={{ fontSize: 10, fill: "#9ca3af" }} axisLine={false} tickLine={false}
                  tickFormatter={(v) => `${v}`}
                />
                <Tooltip formatter={(v) => [`${v}`, ko ? "지수 (공시일=100)" : "Index (disclosure=100)"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb" }}
                />
                <ReferenceLine y={100} stroke="#9ca3af" strokeDasharray="4 4"
                  label={{ value: "100", fill: "#9ca3af", fontSize: 10, position: "right" }}
                />
                <Area type="monotone" dataKey="idx" stroke={accent} strokeWidth={2.5}
                  fill="url(#buffGrad)" dot={{ fill: accent, r: 3, strokeWidth: 0 }} activeDot={{ fill: accent, r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        <div className="mt-4">
          <BodyParagraphs accent={accent} paras={(ko ? story.sections[2].body : story.sections[2].bodyEn).split("\n\n").slice(3)} />
        </div>
      </motion.section>

      {/* ── Section 4: 교훈 ── */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
        <SectionTitle accent={accent}>{ko ? story.sections[3].heading : story.sections[3].headingEn}</SectionTitle>
        <BodyParagraphs accent={accent} paras={(ko ? story.sections[3].body : story.sections[3].bodyEn).split("\n\n")} />
      </motion.section>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqAccordion({
  faq,
  ko,
  accent,
  accentLight,
}: {
  faq: { q: string; a: string; qEn: string; aEn: string }[];
  ko: boolean;
  accent: string;
  accentLight: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mt-14">
      <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>FAQ</h2>
      <div className="space-y-2">
        {faq.map((item, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="rounded-xl border overflow-hidden transition-colors"
              style={{
                borderColor: isOpen ? accent + "60" : "#e5e7eb",
                background: isOpen ? accentLight : "white",
              }}
            >
              {/* Question row — clickable */}
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="text-[13px] font-bold text-gray-900 leading-snug">
                  <span className="mr-2" style={{ color: accent }}>Q.</span>
                  {ko ? item.q : item.qEn}
                </span>
                {/* Chevron */}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: isOpen ? accent : "#f3f4f6" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke={isOpen ? "white" : "#9ca3af"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </button>

              {/* Answer — animated expand */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="border-t pt-4" style={{ borderColor: accent + "30" }}>
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                          {ko ? item.a : item.aEn}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

// ── Generic body (fallback for future stories) ─────────────────────────────────

function GenericBody({ story, ko, accent }: { story: InvestorStory; ko: boolean; accent: string }) {
  return (
    <div className="space-y-12">
      {story.sections.map((section, i) => (
        <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
          <SectionTitle accent={accent}>{ko ? section.heading : section.headingEn}</SectionTitle>
          <BodyParagraphs accent={accent} paras={(ko ? section.body : section.bodyEn).split("\n\n")} />
        </motion.section>
      ))}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function StoriesClient({ story, lang }: { story: InvestorStory; lang: Lang }) {
  const ko = lang === "ko";
  const meta = STORY_CATEGORY_META[story.category];
  const { accent, accentLight, accentDark } = meta;

  const tags = ko ? story.tags : (story.tagsEn ?? story.tags);
  const storiesHref = ko ? "/stories" : "/en/stories";
  const homeHref = ko ? "/" : "/en";

  function renderBody() {
    switch (story.slug) {
      case "soros-pound-1992":
        return <SorosBody ko={ko} story={story} accent={accent} accentLight={accentLight} accentDark={accentDark} />;
      case "bill-hwang-archegos-2021":
        return <ArchegosBody ko={ko} story={story} accent={accent} accentLight={accentLight} accentDark={accentDark} />;
      case "buffett-japan-2020":
        return <BuffettBody ko={ko} story={story} accent={accent} accentLight={accentLight} accentDark={accentDark} />;
      default:
        return <GenericBody story={story} ko={ko} accent={accent} />;
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Page Header ─────────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href={homeHref} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={storiesHref} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "투자자 일화" : "Stories"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? meta.label : meta.labelEn}</span>
            </div>

            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? meta.label : meta.labelEn} · {story.dealYear}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? story.title : story.titleEn}
            </motion.h1>

            {ko && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {story.titleEn}
              </motion.p>
            )}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-black flex-shrink-0"
                style={{ background: accent }}
              >
                {(ko ? story.investor : story.investorEn).split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
              </div>
              <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                {ko ? story.investor : story.investorEn}
              </span>
              <span className="text-gray-300 dark:text-gray-600 text-xs">·</span>
              <span className="text-[12px] text-gray-500 dark:text-gray-400">
                {ko ? story.fund : story.fundEn}
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? story.excerpt : story.excerptEn}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {story.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {tags.slice(0, 6).map((tag) => (
                  <span key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]"
                  >{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Executive Summary ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          {story.executiveSummary && (
            <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP}>
              <div
                className="rounded-xl border-l-4 px-5 py-4 mb-0"
                style={{ borderColor: accent, background: accentLight }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: accentDark }}>
                  {ko ? "핵심 요약" : "Key Takeaways"}
                </p>
                <ul className="space-y-2">
                  {(ko ? story.executiveSummary.ko : story.executiveSummary.en).map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed" style={{ color: accentDark }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* ── Snapshot table ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="mt-10">
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "트레이드 스냅샷" : "Trade Snapshot"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2" style={{ borderColor: accentLight }}>
              <div className="px-5 py-3" style={{ background: accent }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  {ko ? story.investor : story.investorEn} — {ko ? "핵심 수치" : "Key Figures"}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x bg-white dark:bg-gray-950">
                {story.snapshot.map((row, i) => (
                  <motion.div key={i} variants={fadeUp(i * 0.05)}
                    className={`px-5 py-4 ${i % 2 === 0 && i === story.snapshot.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{row.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        </div>

        {/* ── Story-specific rich body ─────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          {renderBody()}
        </div>

        {/* ── Assessment ───────────────────────────────────────────────────── */}
        {story.assessment && (
          <div className="max-w-3xl mx-auto px-5 pb-10">
            <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
              <h2 className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: accent }}>
                {ko ? "전략 평가" : "Strategy Assessment"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50 dark:bg-emerald-900/20 p-4">
                  <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-3">
                    {ko ? "탁월한 점" : "Brilliance"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? story.assessment.positives : story.assessment.positivesEn).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-rose-200 dark:border-rose-800/40 bg-rose-50 dark:bg-rose-900/20 p-4">
                  <p className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-3">
                    {ko ? "리스크·교훈" : "Risks & Lessons"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? story.assessment.risks : story.assessment.risksEn).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-rose-800 dark:text-rose-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* ── Key Terms ── */}
            {story.keyTerms.length > 0 && (
              <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mt-14">
                <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>
                  {ko ? "핵심 용어" : "Key Terms"}
                </h2>
                <div className="space-y-3">
                  {story.keyTerms.map((kt, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {ko ? kt.term : kt.termEn}
                      </p>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                        {ko ? kt.definition : kt.definitionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── FAQ accordion ── */}
            {story.faq && story.faq.length > 0 && (
              <FaqAccordion faq={story.faq} ko={ko} accent={accent} accentLight={accentLight} />
            )}

            {/* ── References ── */}
            {story.references && story.references.length > 0 && (
              <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mt-14">
                <h2 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>
                  {ko ? "참고 자료" : "References"}
                </h2>
                <ol className="space-y-2">
                  {story.references.map((ref) => (
                    <li key={ref.id} className="flex gap-2 text-[12px] text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-gray-400 flex-shrink-0 w-4 text-right">{ref.id}.</span>
                      <span>
                        {ref.author} ({ref.year}). <em>{ref.title}</em>. {ref.source}.
                        {ref.url && (
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:underline">[Link]</a>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </motion.section>
            )}

            {/* ── Navigation ── */}
            <div className="mt-14 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-4">
              <Link href={storiesHref} className="text-sm text-blue-500 hover:underline">
                {ko ? "← 다른 일화 보기" : "← All Stories"}
              </Link>
              <Link
                href={ko ? "/market" : "/en/market"}
                className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 hover:underline"
              >
                {ko ? "자본시장 딜 → Market Story" : "Capital Markets → Market Story"}
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
