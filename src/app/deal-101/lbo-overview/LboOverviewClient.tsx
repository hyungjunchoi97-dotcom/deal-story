"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#6366f1";       // indigo-500
const ACCENT_LIGHT = "#eef2ff"; // indigo-50

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

// ── LBO Series Nav ────────────────────────────────────────────────────────────
const LBO_SERIES = [
  { slug: "lbo-overview",          ch: 0, title: (ko: boolean) => ko ? "LBO의 본질"          : "What Is LBO?"      },
  { slug: "lbo-capital-structure", ch: 1, title: (ko: boolean) => ko ? "Ch.1 자본구조 해부"   : "Ch.1 Capital Stack" },
  { slug: "lbo-returns",           ch: 2, title: (ko: boolean) => ko ? "Ch.2 리턴 분석"       : "Ch.2 Return Math"  },
  { slug: "lbo-deal-process",      ch: 3, title: (ko: boolean) => ko ? "Ch.3 딜 프로세스"     : "Ch.3 Deal Process" },
];
const THIS_CH = 0;

// ── Chapter Nav Component ─────────────────────────────────────────────────────
function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      <div className="flex gap-1.5 flex-wrap">
        {LBO_SERIES.map((ch) => {
          const isCurrent = ch.ch === THIS_CH;
          return (
            <Link
              key={ch.slug}
              href={`${base}/${ch.slug}`}
              className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                isCurrent
                  ? "text-white"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              style={isCurrent ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Leverage Math Data ────────────────────────────────────────────────────────
// Scenario: Entry EV = $1,000M, Exit EV = $1,500M (5yr, ~50% value growth)
// Debt assumed fully repaid at exit for simplicity
const LEVERAGE_SCENARIOS = [
  {
    id: "cash",
    label: (ko: boolean) => ko ? "현금 매입\n(부채 0%)" : "All-Cash\n(0% debt)",
    equity: 1000,
    debt: 0,
    exitEquity: 1500,
    moic: 1.5,
    irr: 8.4,
    color: "#94a3b8", // slate-400
  },
  {
    id: "lbo50",
    label: (ko: boolean) => ko ? "LBO\n(부채 50%)" : "LBO\n(50% debt)",
    equity: 500,
    debt: 500,
    exitEquity: 1000, // 1500 - 500 debt
    moic: 2.0,
    irr: 14.9,
    color: ACCENT,
  },
  {
    id: "lbo65",
    label: (ko: boolean) => ko ? "LBO\n(부채 65%)" : "LBO\n(65% debt)",
    equity: 350,
    debt: 650,
    exitEquity: 850, // 1500 - 650 debt
    moic: 2.43,
    irr: 19.4,
    color: "#4f46e5", // indigo-600
  },
];

// ── Leverage Return Amplification Chart ──────────────────────────────────────
function LeverageReturnChart({ ko }: { ko: boolean }) {
  const data = LEVERAGE_SCENARIOS.map((s) => ({
    name: s.label(ko).replace("\n", "\n"),
    moic: s.moic,
    irr: s.irr,
    color: s.color,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* MOIC Bar */}
      <div>
        <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3 text-center">
          {ko ? "자기자본 MOIC (투자금 대비 회수 배수)" : "Equity MOIC (Return Multiple on Equity)"}
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#6b7280" }}
              interval={0}
            />
            <YAxis
              domain={[0, 3]}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickFormatter={(v) => `${v}x`}
              width={35}
            />
            <Tooltip
              formatter={(v) => [`${Number(v).toFixed(2)}x`, ko ? "배수" : "MOIC"]}
              contentStyle={{ fontSize: 12, borderRadius: 8 }}
            />
            <ReferenceLine y={1} stroke="#ef4444" strokeDasharray="4 4" strokeWidth={1} />
            <Bar dataKey="moic" radius={[4, 4, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[10px] text-gray-400 text-center mt-1">
          {ko ? "빨간 점선 = 원금 회수 기준 (1.0x)" : "Red dashed = break-even (1.0x)"}
        </p>
      </div>

      {/* IRR Bar */}
      <div>
        <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3 text-center">
          {ko ? "자기자본 IRR (연간 복리 수익률)" : "Equity IRR (Annualized Return)"}
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#6b7280" }}
              interval={0}
            />
            <YAxis
              domain={[0, 25]}
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickFormatter={(v) => `${v}%`}
              width={38}
            />
            <Tooltip
              formatter={(v) => [`${Number(v).toFixed(1)}%`, "IRR"]}
              contentStyle={{ fontSize: 12, borderRadius: 8 }}
            />
            <ReferenceLine y={8} stroke="#f59e0b" strokeDasharray="4 4" strokeWidth={1} />
            <Bar dataKey="irr" radius={[4, 4, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[10px] text-gray-400 text-center mt-1">
          {ko ? "노란 점선 = 상장주식 장기 평균(~8%)" : "Yellow dashed = public equity long-run avg (~8%)"}
        </p>
      </div>
    </div>
  );
}

// ── Scenario Breakdown Table ──────────────────────────────────────────────────
function ScenarioTable({ ko }: { ko: boolean }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-[12px] border-collapse">
        <thead>
          <tr className="border-b-2" style={{ borderColor: ACCENT + "40" }}>
            <th className="text-left py-2.5 px-3 font-bold text-gray-700 dark:text-gray-300">
              {ko ? "시나리오" : "Scenario"}
            </th>
            <th className="text-right py-2.5 px-3 font-bold text-gray-700 dark:text-gray-300">
              {ko ? "투자 자기자본" : "Equity Invested"}
            </th>
            <th className="text-right py-2.5 px-3 font-bold text-gray-700 dark:text-gray-300">
              {ko ? "차입금" : "Debt"}
            </th>
            <th className="text-right py-2.5 px-3 font-bold text-gray-700 dark:text-gray-300">
              {ko ? "회수 자기자본" : "Exit Equity"}
            </th>
            <th className="text-right py-2.5 px-3 font-bold text-gray-700 dark:text-gray-300">MOIC</th>
            <th className="text-right py-2.5 px-3 font-bold text-gray-700 dark:text-gray-300">IRR</th>
          </tr>
        </thead>
        <tbody>
          {LEVERAGE_SCENARIOS.map((s, i) => (
            <tr
              key={s.id}
              className={`border-b border-gray-100 dark:border-gray-800 ${
                i === LEVERAGE_SCENARIOS.length - 1 ? "font-bold" : ""
              }`}
            >
              <td className="py-2.5 px-3 text-gray-700 dark:text-gray-300" style={{ color: s.color }}>
                {s.label(ko).replace("\n", " ")}
              </td>
              <td className="text-right py-2.5 px-3 text-gray-600 dark:text-gray-400">
                ${s.equity.toLocaleString()}M
              </td>
              <td className="text-right py-2.5 px-3 text-gray-600 dark:text-gray-400">
                ${s.debt.toLocaleString()}M
              </td>
              <td className="text-right py-2.5 px-3 text-gray-600 dark:text-gray-400">
                ${s.exitEquity.toLocaleString()}M
              </td>
              <td className="text-right py-2.5 px-3 font-semibold" style={{ color: s.color }}>
                {s.moic}x
              </td>
              <td className="text-right py-2.5 px-3 font-semibold" style={{ color: s.color }}>
                {s.irr}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-gray-400 mt-2 px-3">
        {ko
          ? "* Entry EV $1,000M → Exit EV $1,500M (5년 보유, EV 50% 성장), 차입금 전액 상환 가정. 이자 비용 미포함."
          : "* Entry EV $1,000M → Exit EV $1,500M (5yr hold, 50% EV growth), full debt repayment assumed. Interest costs excluded."}
      </p>
    </div>
  );
}

// ── LBO Candidate Criteria ────────────────────────────────────────────────────
const LBO_CRITERIA = [
  {
    num: "01",
    icon: "💰",
    title: (ko: boolean) => ko ? "안정적인 잉여현금흐름" : "Stable Free Cash Flow",
    body: (ko: boolean) => ko
      ? "LBO의 핵심 전제는 매년 발생하는 영업현금흐름으로 부채를 상환하는 것이다. EBITDA 마진이 높고 Capex가 낮은 비즈니스 — 반복 계약, 구독 모델, 소비재 브랜드가 이상적이다. 하버드 경영대 케이스에서 Hilton이 언급될 때 항상 나오는 포인트: 호텔 업장은 실물자산 기반이라 경기 사이클을 타지만, 객실 예약이라는 '반복적 현금흐름' 모델을 갖추고 있다."
      : "The core premise of an LBO is using annual operating cash flows to service and repay debt. Businesses with high EBITDA margins and low capex — recurring contracts, subscription models, consumer brands — are ideal. When the Hilton LBO is discussed in business school cases, this is always the first point: hotels have a recurring reservation cash flow model despite their asset-heavy cyclicality.",
    border: "border-indigo-200 dark:border-indigo-800",
    bg: "bg-indigo-50/50 dark:bg-indigo-900/10",
    dot: "bg-indigo-500",
  },
  {
    num: "02",
    icon: "🏛️",
    title: (ko: boolean) => ko ? "방어적 시장 지위 · 브랜드 해자" : "Defensible Market Position / Moat",
    body: (ko: boolean) => ko
      ? "부채가 높으면 경쟁에서 불리하다 — 재투자 여력이 줄어들기 때문. 따라서 LBO 타겟은 브랜드·네트워크 효과·전환비용으로 경쟁자를 막아둘 수 있어야 한다. Hilton의 경우 'Hilton HHonors' 로열티 프로그램 (1,700만 회원)과 브랜드 자체가 해자였다. KKR이 RJR Nabisco를 인수할 때도 Oreo·Ritz 같은 소비재 브랜드가 핵심 thesis였다."
      : "Heavy debt loads make it harder to compete — less reinvestment capacity. LBO targets must therefore be able to fend off competition through brand, network effects, or switching costs. For Hilton, the 'Hilton HHonors' loyalty program (17M members) and the brand itself were the moat. When KKR acquired RJR Nabisco, the consumer brands — Oreo, Ritz — were the central investment thesis.",
    border: "border-purple-200 dark:border-purple-800",
    bg: "bg-purple-50/50 dark:bg-purple-900/10",
    dot: "bg-purple-500",
  },
  {
    num: "03",
    icon: "📊",
    title: (ko: boolean) => ko ? "담보로 쓸 수 있는 유형자산" : "Tangible Assets as Collateral",
    body: (ko: boolean) => ko
      ? "레버드론은 담보가 있어야 낮은 금리에 빌릴 수 있다. 부동산·기계·재고자산이 풍부한 기업이 LBO에 유리한 이유가 여기 있다. Hilton의 $18B 상당 호텔 포트폴리오는 선순위 담보 대출 $12B을 지탱했다. 반대로 소프트웨어 순수 기업은 유형자산이 거의 없어서 LBO 실행이 어렵거나 훨씬 적은 레버리지만 허용된다."
      : "Leveraged loans need collateral to achieve attractive interest rates. This is why asset-heavy businesses — real estate, machinery, inventory — are naturally suited to LBOs. Hilton's $18B hotel portfolio supported $12B in senior secured debt. In contrast, pure-play software companies have almost no tangible assets, making LBOs harder to execute or requiring much lower leverage.",
    border: "border-blue-200 dark:border-blue-800",
    bg: "bg-blue-50/50 dark:bg-blue-900/10",
    dot: "bg-blue-500",
  },
  {
    num: "04",
    icon: "✂️",
    title: (ko: boolean) => ko ? "비용 절감·운영 개선 여지" : "Operational Improvement Potential",
    body: (ko: boolean) => ko
      ? "PE 펀드는 EBITDA를 늘려서 Exit Multiple을 높이고자 한다. 비용구조가 비효율적이거나, 경영이 느슨하거나, 사업부 정리가 필요한 기업이 매력적이다. Hilton은 인수 당시 글로벌 객실 점유율과 RevPAR가 경쟁사 Marriott 대비 낮았다 — 개선 여지가 있었다. Blackstone은 경영진 교체 + 수익관리 시스템 업그레이드 + 브랜드 정비라는 3단계 운영개선 계획을 가지고 들어갔다."
      : "PE funds want to grow EBITDA to drive a higher exit multiple. Companies with bloated cost structures, loose management, or messy business unit portfolios are attractive targets. Hilton at acquisition had occupancy rates and RevPAR lagging Marriott — clear room for improvement. Blackstone entered with a 3-step operational plan: management upgrade, revenue management system overhaul, brand portfolio rationalization.",
    border: "border-emerald-200 dark:border-emerald-800",
    bg: "bg-emerald-50/50 dark:bg-emerald-900/10",
    dot: "bg-emerald-500",
  },
  {
    num: "05",
    icon: "🔓",
    title: (ko: boolean) => ko ? "명확한 Exit Path" : "Clear Exit Path",
    body: (ko: boolean) => ko
      ? "PE 펀드는 영원히 보유하지 않는다 — 보통 5–7년 안에 투자금을 회수해야 LP에게 돌려줄 수 있다. IPO·전략적 매각·세컨더리 PE 매각·배당 재자본화(Dividend Recap)가 주요 출구 경로다. Exit 시장이 활성화돼있어야 하고, 상장 가능성이 있어야 한다. Hilton은 2013년 IPO로 역대 최대 규모 호텔 IPO를 기록했다."
      : "PE funds don't hold forever — they typically need to return capital to LPs within 5–7 years. IPO, strategic sale, secondary PE sale, and dividend recapitalization are the main exit routes. The exit market must be active and the company must be IPO-ready or strategically attractive. Hilton's 2013 IPO was the largest hotel IPO in history at the time.",
    border: "border-amber-200 dark:border-amber-800",
    bg: "bg-amber-50/50 dark:bg-amber-900/10",
    dot: "bg-amber-500",
  },
  {
    num: "06",
    icon: "📉",
    title: (ko: boolean) => ko ? "적정한 Entry Multiple (저평가)" : "Reasonable Entry Multiple",
    body: (ko: boolean) => ko
      ? "아무리 좋은 기업도 비싸게 사면 수익이 안 나온다. LBO의 치명적 실수 중 하나는 경기 고점에서 높은 배수를 주고 사는 것 — 2007년 TXU ($45B) 같은 경우가 바로 그것이다. 일반적으로 Entry EV/EBITDA가 업종 평균 대비 낮을수록, 또는 Distressed 상황에서 싸게 살수록 수익 마진이 높다. 2007년 Blackstone/Hilton은 15.8x로 고점 매수였지만, 호텔 자산 가치 상승이 이를 상쇄했다."
      : "Even a great business becomes a bad LBO if you overpay at entry. One of the fatal LBO mistakes is buying at a high multiple during an economic peak — TXU ($45B) in 2007 is the textbook example. In general, lower entry EV/EBITDA vs. sector peers, or distressed buying, improves return margins. The 2007 Blackstone/Hilton at 15.8x was a high-point acquisition — but the appreciation of hotel real estate assets overcame the expensive entry.",
    border: "border-rose-200 dark:border-rose-800",
    bg: "bg-rose-50/50 dark:bg-rose-900/10",
    dot: "bg-rose-500",
  },
  {
    num: "07",
    icon: "👔",
    title: (ko: boolean) => ko ? "경영진 정렬 · 인센티브" : "Management Alignment & Incentives",
    body: (ko: boolean) => ko
      ? "LBO 성공의 숨겨진 요소: 경영진이 PE 목표에 정렬돼 있어야 한다. 보통 경영진에게 Management Incentive Pool (MIP, 5–10% 지분 상당)을 주어 Exit 시 큰 보상이 생기도록 구조화한다. Hilton CEO Chris Nassetta의 경우 Blackstone 인수 후 MIP를 통해 회사 가치를 키우는 데 전력을 다했다 — 2018년 Exit 시 그의 지분 가치는 수억 달러에 달했다."
      : "The hidden ingredient of LBO success: management must be aligned with PE's objectives. LBOs typically give management a Management Incentive Pool (MIP, equivalent to 5–10% of equity) so that a successful exit creates substantial personal wealth. Hilton CEO Chris Nassetta was given a MIP structure after the Blackstone acquisition — at the 2018 exit, his stake was worth hundreds of millions.",
    border: "border-teal-200 dark:border-teal-800",
    bg: "bg-teal-50/50 dark:bg-teal-900/10",
    dot: "bg-teal-500",
  },
];

// ── GP/LP Economics Data ──────────────────────────────────────────────────────
const CARRY_WATERFALL_DATA = [
  { stage: "1. Return Capital", desc: (ko: boolean) => ko ? "LP 출자금 전액 먼저 반환" : "Return LP committed capital", recipient: "LP", pct: 100, color: "#94a3b8" },
  { stage: "2. Preferred Return", desc: (ko: boolean) => ko ? "허들레이트 (보통 8%) 달성까지 LP 우선 분배" : "LP receives preferred return up to hurdle (usually 8%)", recipient: "LP", pct: 100, color: "#6366f1" },
  { stage: "3. GP Catch-Up", desc: (ko: boolean) => ko ? "GP가 총 이익의 20%가 될 때까지 전액 GP에게" : "GP receives 100% until GP share equals 20% of total profits", recipient: "GP", pct: 100, color: "#f59e0b" },
  { stage: "4. Carried Interest", desc: (ko: boolean) => ko ? "이후 이익: LP 80% / GP 20% (Carry)" : "All remaining profits: LP 80% / GP (Carry) 20%", recipient: "Split", pct: 80, color: "#10b981" },
];

// ── J-Curve Data ──────────────────────────────────────────────────────────────
const J_CURVE_DATA = [
  { year: 0, nav: -8,   label: "Fees+Drawdown" },
  { year: 1, nav: -18,  label: "Portfolio Build" },
  { year: 2, nav: -25,  label: "Trough" },
  { year: 3, nav: -15,  label: "Early value creation" },
  { year: 4, nav: 5,    label: "Break-even" },
  { year: 5, nav: 35,   label: "Realizations begin" },
  { year: 6, nav: 70,   label: "Main exit window" },
  { year: 7, nav: 95,   label: "Peak return" },
  { year: 8, nav: 80,   label: "Wind-down" },
  { year: 9, nav: 40,   label: "Final distributions" },
  { year: 10, nav: 0,   label: "Fund close" },
];

// ── Case Studies ──────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    slug: "blackstone-hilton-2007",
    emoji: "🏨",
    verdict: "success",
    verdictLabel: (ko: boolean) => ko ? "성공" : "Success",
    title: (ko: boolean) => ko ? "Blackstone / Hilton Hotels — 2007" : "Blackstone / Hilton Hotels — 2007",
    dealValue: "$26B",
    moic: "2.6x",
    irr: "16.7%",
    hold: (ko: boolean) => ko ? "11년 보유" : "11yr hold",
    tagline: (ko: boolean) => ko
      ? "GFC 직전 최고점 매수, 파산 직전까지 갔다가 반전 — 역대 PE 최대 수익 딜 중 하나"
      : "Bought at the peak right before the GFC, nearly went bankrupt, then delivered one of PE's greatest returns ever",
    lesson: (ko: boolean) => ko
      ? "Entry multiple이 비싸더라도 실물자산 가치 + 운영 개선 + 충분한 보유 기간이 결합하면 승리할 수 있다는 것을 보여줬다. 그러나 GFC 기간 Debt/EBITDA 19.5x까지 치솟은 순간은 파산 직전이었다 — 레버리지는 양날의 검이다."
      : "Even an expensive entry multiple can be overcome with real asset appreciation, operational improvement, and sufficient holding period. But the near-bankruptcy moment (Debt/EBITDA 19.5x during GFC) demonstrated that leverage is a double-edged sword.",
    color: "border-indigo-200 dark:border-indigo-700 bg-indigo-50/60 dark:bg-indigo-900/20",
    labelColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    link: "/deals/blackstone-hilton-2007",
  },
  {
    slug: "kkr-rjr-nabisco",
    emoji: "🍪",
    verdict: "mixed",
    verdictLabel: (ko: boolean) => ko ? "복합" : "Mixed",
    title: (ko: boolean) => ko ? "KKR / RJR Nabisco — 1989" : "KKR / RJR Nabisco — 1989",
    dealValue: "$31B",
    moic: "~1.5x",
    irr: "~8%",
    hold: (ko: boolean) => ko ? "5년 보유" : "5yr hold",
    tagline: (ko: boolean) => ko
      ? "역대 최대 LBO (당시) — 담배·식품 브랜드 포트폴리오, 경영진 vs KKR 경영권 분쟁의 역사"
      : "Largest LBO in history at the time — tobacco/food brand portfolio, iconic management vs. KKR boardroom battle",
    lesson: (ko: boolean) => ko
      ? "LBO 역사에서 가장 유명한 딜. 브랜드 파워는 입증됐지만, 경영진과의 갈등·담배 소송 리스크·Exit 타이밍이 수익을 제한했다. 'Barbarians at the Gate'의 교훈: 제일 비싼 입찰이 반드시 최선은 아니다."
      : "The most famous LBO in history. Brand power was validated, but management conflict, tobacco litigation risk, and exit timing limited returns. The lesson from 'Barbarians at the Gate': the highest bid is not always the best bid.",
    color: "border-amber-200 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-900/20",
    labelColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    link: "/deals/kkr-rjr-nabisco",
  },
  {
    slug: "txu-energy-future",
    emoji: "⚡",
    verdict: "failure",
    verdictLabel: (ko: boolean) => ko ? "실패" : "Failed",
    title: (ko: boolean) => ko ? "KKR·TPG / TXU (Energy Future Holdings) — 2007" : "KKR·TPG / TXU (Energy Future Holdings) — 2007",
    dealValue: "$45B",
    moic: "~0.0x",
    irr: "-100%",
    hold: (ko: boolean) => ko ? "파산 → 청산" : "Bankruptcy → liquidation",
    tagline: (ko: boolean) => ko
      ? "역대 최대 LBO → 역대 최대 PE 파산 — 천연가스 가격 하락이 모든 것을 바꿨다"
      : "Largest LBO ever → Largest PE bankruptcy ever — the shale gas revolution changed everything",
    lesson: (ko: boolean) => ko
      ? "2007년 KKR·TPG는 천연가스 가격이 높게 유지되거나 오른다는 가정 하에 TXU를 $45B에 인수했다. 셰일혁명으로 가스 가격이 폭락하면서 전기요금 수익이 무너졌다. 레버리지는 EV가 조금만 내려도 자기자본을 전멸시킨다 — Entry 가정의 취약성이 LBO 실패의 본질이다."
      : "In 2007, KKR·TPG acquired TXU for $45B assuming natural gas prices would stay high or rise. The shale gas revolution crashed gas prices, collapsing electricity revenue. Leverage annihilates equity when EV drops even modestly — fragile entry assumptions are the essence of LBO failure.",
    color: "border-rose-200 dark:border-rose-700 bg-rose-50/60 dark:bg-rose-900/20",
    labelColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    link: "/deals/kkr-txu-energy-future",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => ko ? "LBO와 일반 M&A는 무엇이 다른가요?" : "How does an LBO differ from a regular M&A?",
    a: (ko: boolean) => ko
      ? "일반 M&A에서 인수자는 주로 자기자본(현금 또는 신주)으로 딜을 실행합니다. LBO에서는 인수 대금의 60–70%를 차입금(레버리지드론, 하이일드 채권)으로 충당하고 나머지만 PE 펀드의 자기자본으로 냅니다. 이 차입금을 인수한 기업(포트폴리오 컴퍼니) 자체의 현금흐름으로 상환하는 구조가 LBO의 핵심입니다. 결과적으로 PE 펀드는 작은 자기자본 투자로 훨씬 큰 기업을 지배하고, 레버리지 효과로 자기자본 수익률이 증폭됩니다."
      : "In regular M&A, the acquirer uses primarily equity (cash or new shares) to fund the deal. In an LBO, 60–70% of the purchase price is funded through debt (leveraged loans, high-yield bonds), with PE equity covering only the remainder. The critical structure: that debt is repaid using the acquired company's own cash flows. The result is that PE funds control a much larger business with a smaller equity check, and leverage amplifies equity returns.",
  },
  {
    q: (ko: boolean) => ko ? "PE 펀드는 왜 보유 후 매각하나요 — 계속 들고 있으면 안 되나요?" : "Why do PE funds sell after holding — can't they just keep the company?",
    a: (ko: boolean) => ko
      ? "PE 펀드는 LP(연기금, 기부금, 보험사 등)로부터 자금을 모집해 운용합니다. LP는 보통 10–12년의 펀드 만기 내에 투자금을 돌려받기를 원합니다. 따라서 PE는 반드시 포트폴리오를 Exit해서 현금을 LP에게 배분해야 합니다. 또한 GP 수수료 구조(2% 운용보수 + 20% Carry)도 새로운 펀드를 조성해야 수익이 발생하도록 설계돼 있어, Exit과 재투자가 반복되는 PE 비즈니스 모델이 유지됩니다."
      : "PE funds raise capital from LPs (pension funds, endowments, insurance companies). LPs expect their capital returned within the fund's typical 10–12 year term. So PE must exit portfolio companies to distribute cash back to LPs. Additionally, the GP fee structure (2% management fee + 20% carry) incentivizes raising new funds — which requires demonstrating realized returns from prior funds. This drives the repeat exit-and-reinvest PE business model.",
  },
  {
    q: (ko: boolean) => ko ? "IRR 20%를 목표로 한다는 게 왜 중요한가요?" : "Why does targeting 20% IRR matter?",
    a: (ko: boolean) => ko
      ? "IRR 20%는 PE 산업의 대표적 목표 수익률입니다. 이 수준에서 ① 무위험 수익률(~4–5%)보다 훨씬 높고 ② 상장주식 장기 평균(~8–10%)을 크게 초과하며 ③ LP가 PE에 요구하는 최소 허들 레이트(8%)를 넘어 GP가 Carry를 받을 수 있습니다. 다만 실제 대형 바이아웃 펀드의 평균 IRR은 최근 들어 15–17% 수준으로 낮아지는 추세이며, 소규모·미드마켓 LBO에서 20%+ 달성이 더 흔합니다."
      : "20% IRR is the iconic target return for the PE industry. At this level: ① it far exceeds the risk-free rate (~4–5%), ② it substantially beats public equity long-run averages (~8–10%), and ③ it clears the typical LP hurdle rate (8%), enabling GP carried interest. In practice, large buyout fund net IRRs have trended toward 15–17% in recent years, with 20%+ more commonly achieved in smaller/mid-market LBOs.",
  },
  {
    q: (ko: boolean) => ko ? "레버리지가 높을수록 항상 좋은 건 아닌가요?" : "Isn't higher leverage always better for returns?",
    a: (ko: boolean) => ko
      ? "레버리지는 수익률을 증폭시키지만, 동시에 위험도 증폭시킵니다. EV가 조금만 떨어져도 자기자본이 먼저 전멸합니다 — 이를 'Equity Wipeout Risk'라고 합니다. TXU 케이스가 전형적 예입니다: 레버리지가 너무 높아 EV가 30%만 하락해도 자기자본 전액 손실이 발생했습니다. 또한 레버리지가 높을수록 이자 부담이 커져 FCF가 줄고, 경기 침체 시 Covenant 위반으로 조기 상환 의무가 생길 수 있습니다. PE 실무에서는 Debt/EBITDA 5–7x가 전통적인 허용 범위였으나 최근 저금리 시대에 8–10x까지 올라갔다가 금리 인상기에 다시 강제 디레버리징 압력을 받고 있습니다."
      : "Leverage amplifies returns, but also amplifies risk proportionally. Even a modest decline in EV wipes out equity first — this is called 'Equity Wipeout Risk.' TXU is the canonical example: with too-high leverage, a 30% EV decline destroyed the entire equity check. Additionally, high leverage increases interest burden, reducing FCF, and can trigger covenant violations requiring early repayment during downturns. In PE practice, Debt/EBITDA 5–7x was the traditional safe range, but it stretched to 8–10x in the low-rate era — and now faces forced deleveraging pressure as rates have risen.",
  },
  {
    q: (ko: boolean) => ko ? "Carried Interest는 왜 20%인가요?" : "Why is carried interest 20%?",
    a: (ko: boolean) => ko
      ? "20%라는 숫자는 업계 관행으로 굳어진 것이며, 역사적으로 VC·PE 산업 초창기 (1970–80년대)에 설정됐습니다. 이 구조의 논리는: GP가 실제로 성과를 내지 않으면 Carry를 받지 못하므로, 성과 기반 보상이라는 점입니다. LP 입장에서는 8% 허들레이트 이상의 초과 수익에서만 GP에게 20%를 나눠주니, '먼저 잘 버는 LP, 성과 내면 GP도 크게 먹는' 구조입니다. 일부 탑-티어 PE 펀드 (Blackstone, KKR 등)는 최근 유명 딜에서 25–30% Carry를 요구하기도 합니다."
      : "The 20% figure is an industry convention that hardened in the early VC/PE industry of the 1970s–80s. The logic: GP only earns carry when performance is delivered, making it truly performance-based compensation. From the LP perspective: they only share 20% of profits above the 8% hurdle rate — 'LP wins first, GP wins big when they perform.' Some top-tier PE funds (Blackstone, KKR, etc.) now command 25–30% carry terms on marquee funds.",
  },
];

// ── Sources ───────────────────────────────────────────────────────────────────
const SOURCES = [
  { id: 1, text: "Kaplan, S.N. & Strömberg, P. (2009). Leveraged Buyouts and Private Equity. Journal of Economic Perspectives, 23(1), 121–146." },
  { id: 2, text: "Blackstone Group. (2014). Hilton Hotels Corporation — IPO Prospectus. NYSE: HLT." },
  { id: 3, text: "Axelson, U., Jenkinson, T., Strömberg, P., & Weisbach, M.S. (2013). Borrow Cheap, Buy High? Journal of Finance, 68(6), 2223–2267." },
  { id: 4, text: "Burrough, B. & Helyar, J. (1989). Barbarians at the Gate: The Fall of RJR Nabisco. HarperCollins." },
  { id: 5, text: "Bain & Company. (2024). Global Private Equity Report 2024." },
  { id: 6, text: "Pitchbook. (2024). PE Buyout Valuations & Deal Multiples — 2024 Annual Review." },
  { id: 7, text: "Moody's Investors Service. (2023). Leveraged Buyout Covenant-Lite Default Study." },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function LboOverviewClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto px-5 py-10">

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-indigo-600 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/deal-101" : "/en/deal-101"} className="hover:text-indigo-600 transition-colors">
                {ko ? "딜 101" : "Deal 101"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {ko ? "LBO의 본질" : "What Is LBO?"}
              </span>
            </motion.div>

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white"
                style={{ background: ACCENT }}
              >
                LBO
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}>
                Ch.0 — {ko ? "시리즈 입문" : "Series Intro"}
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap gap-1.5 mt-4"
            >
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{ background: ACCENT_LIGHT, color: ACCENT }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Lang switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/deal-101/lbo-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
                style={ko ? { background: ACCENT } : {}}
              >
                한국어
              </Link>
              <Link
                href="/en/deal-101/lbo-overview"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
                style={!ko ? { background: ACCENT } : {}}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Share — top ── */}
        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

        {/* ── Chapter Navigation ── */}
        <ChapterNav lang={lang} />

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">

          {/* ══ Ch.1: LBO란 무엇인가 ══════════════════════════════════════════════ */}
          <motion.section
            id="ch1"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                Ch.1
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LBO의 본질 — 빌려서 사고, 가치를 만들고, 팔아라" : "The Essence of LBO — Borrow, Buy, Build, Sell"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "레버리지드 바이아웃(LBO, Leveraged Buyout)은 세 단어로 요약된다: 빌려서 사라. 인수 대금의 60–70%를 차입금으로 충당하고, 나머지만 PE 펀드의 자기자본으로 낸다. 그리고 그 빚을 인수한 기업이 영업으로 버는 현금흐름으로 갚는다.",
                "왜 이렇게 할까? 레버리지가 자기자본 수익률을 증폭시키기 때문이다. 100% 자기자본으로 $1,000M짜리 회사를 사서 $1,500M에 팔면 수익률은 50%다. 같은 딜을 자기자본 $350M + 차입금 $650M으로 하면, 차입금 상환 후 자기자본 회수액은 $850M — 수익률은 143%다. 같은 기업, 같은 Exit 가격, 그런데 수익률은 약 3배다.",
                "이것이 모든 LBO의 수리적 핵심이다. 그리고 이 증폭 효과가 왜 블랙스톤·KKR·칼라일 같은 PE 펀드들이 차입매수를 이용해 수조 달러의 자산을 운용할 수 있는지를 설명한다.",
              ] : [
                "A Leveraged Buyout (LBO) can be summarized in three words: borrow to buy. The acquisition price is funded 60–70% through debt, with only the remainder coming from the PE fund's own equity. And that debt is repaid using the cash flows generated by the acquired company itself.",
                "Why do this? Because leverage amplifies equity returns. Buy a $1,000M company with 100% equity, sell it for $1,500M — return is 50%. Do the same deal with $350M equity + $650M debt, repay the debt, recover $850M in equity — return is 143%. Same company, same exit price, roughly 3x the return.",
                "This is the mathematical core of every LBO. And it explains how PE funds like Blackstone, KKR, and Carlyle can manage trillions of dollars in assets using leveraged buyouts as their primary strategy.",
              ]).map((para, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Callout — Key Insight */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-xl p-4 mb-6 border"
              style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}
            >
              <p className="text-[13px] font-bold mb-1" style={{ color: ACCENT }}>
                {ko ? "핵심 인사이트" : "Key Insight"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-600 leading-relaxed">
                {ko
                  ? "LBO는 기업을 싸게 사는 게 아니라, 구조적으로 자기자본 투입을 줄여서 같은 Exit에서 더 높은 배수를 얻는 전략이다. 레버리지가 없으면 PE 펀드의 목표 수익률(IRR 20%+)은 달성하기 매우 어렵다."
                  : "LBO is not about buying cheap — it's about structurally reducing the equity check so that the same exit delivers a higher multiple. Without leverage, achieving the PE target return (IRR 20%+) becomes nearly impossible."}
              </p>
            </motion.div>

            {/* Leverage Return Chart */}
            <motion.div
              variants={fadeUp(0.15)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
            >
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "레버리지 수익 증폭 효과" : "Leverage Return Amplification"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko
                  ? "Entry EV $1,000M → Exit EV $1,500M (5년, EV 50% 성장) 동일 시나리오에서 부채 비율에 따른 자기자본 수익률 차이"
                  : "Same deal: Entry EV $1,000M → Exit EV $1,500M (5yr, 50% EV growth) — equity return varies dramatically by leverage"}
              </p>
              <LeverageReturnChart ko={ko} />
              <ScenarioTable ko={ko} />
            </motion.div>
          </motion.section>

          {/* ══ Ch.2: LBO 타겟 기준 7가지 ══════════════════════════════════════ */}
          <motion.section
            id="ch2"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                Ch.2
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "어떤 기업이 LBO 타겟인가 — 7가지 기준" : "What Makes an Ideal LBO Target — 7 Criteria"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "PE 펀드가 LBO 타겟을 고를 때는 '이 기업이 높은 레버리지를 버텨낼 수 있는가'라는 질문에서 시작한다. 부채를 상환하지 못하면 파산이고, 파산하면 자기자본은 전멸한다. 따라서 현금흐름 안정성이 모든 것의 전제다.",
                "그러나 좋은 LBO는 단순히 '빚 갚을 능력'만으로 결정되지 않는다. EBITDA를 키우고(성장), 진입 가격 대비 높은 배수로 팔고(Multiple Expansion), 부채를 줄이면서(Deleveraging) 자기자본을 늘리는 세 가지 드라이버가 모두 작동해야 한다.",
              ] : [
                "When PE funds screen for LBO targets, the starting question is: 'Can this business sustain high leverage?' Inability to service debt leads to bankruptcy; bankruptcy wipes out equity. Cash flow stability is therefore the foundational prerequisite.",
                "But a good LBO isn't just about 'ability to repay debt.' All three value creation drivers must fire: grow EBITDA (organic growth), sell at a higher multiple than entry (Multiple Expansion), and reduce debt (Deleveraging) to increase equity value.",
              ]).map((para, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* 7 Criteria Cards */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {LBO_CRITERIA.map((c) => (
                <motion.div
                  key={c.num}
                  variants={fadeUp()}
                  className={`rounded-xl border p-4 ${c.border} ${c.bg}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <span className="text-xl">{c.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                        <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 tracking-widest">
                          {c.num}
                        </span>
                        <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                          {c.title(ko)}
                        </h3>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        {c.body(ko)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Ch.3: GP/LP 경제학 ══════════════════════════════════════════════ */}
          <motion.section
            id="ch3"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                Ch.3
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "PE 펀드의 수익 구조 — GP/LP 경제학과 Carry Waterfall" : "PE Fund Economics — GP/LP Structure & Carry Waterfall"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "PE 펀드는 두 종류의 참여자로 구성된다. GP(General Partner)는 펀드를 운용하는 PE 회사 — Blackstone, KKR, 칼라일 같은 곳들이다. LP(Limited Partner)는 자금을 공급하는 투자자 — 국민연금, 하버드 기부금, 보험사, 국부펀드 등이다. LP는 보통 펀드 총 자금의 97–99%를 댄다. GP는 1–3%만 출자하지만 의사결정 권한을 갖는다.",
                "GP 수수료 구조는 '2 and 20'으로 불린다. 2%는 운용보수(Management Fee) — LP가 납입한 약정금의 2%를 매년 GP가 가져간다. 이건 성과와 무관하게 발생한다. 20%는 성과보수(Carried Interest, 'Carry') — 허들레이트(보통 8%)를 초과하는 수익의 20%를 GP가 가져간다.",
                "Carry Waterfall은 수익이 분배되는 순서다. ① 먼저 LP 원금 전액 반환 → ② 허들레이트(8%) 달성까지 LP 우선 분배 → ③ GP Catch-Up (GP가 총 이익의 20%를 받을 때까지) → ④ 이후 LP 80% / GP 20% 분배. 이 구조는 GP가 먼저 크게 버는 게 아니라, LP가 먼저 원금과 최소 수익을 확보한 후에야 GP가 큰돈을 버는 LP-우선 설계다.",
              ] : [
                "PE funds consist of two types of participants. GPs (General Partners) are the PE firms that manage the fund — Blackstone, KKR, Carlyle. LPs (Limited Partners) are the capital providers — pension funds, university endowments, insurance companies, sovereign wealth funds. LPs typically provide 97–99% of the total fund capital. GPs contribute only 1–3% but hold decision-making authority.",
                "The GP fee structure is called '2 and 20.' The 2% is the management fee — GPs take 2% of committed capital annually, regardless of performance. The 20% is the performance fee (Carried Interest, or 'Carry') — GPs take 20% of returns exceeding the hurdle rate (typically 8%).",
                "The Carry Waterfall is the sequence in which profits are distributed: ① Return LP committed capital in full → ② Distribute to LP until preferred return (8%) is achieved → ③ GP Catch-Up (GP receives 100% until GP share equals 20% of total profits) → ④ Remaining split: LP 80% / GP 20%. This LP-first structure ensures GPs only collect carried interest after LPs have recovered their principal and a minimum return.",
              ]).map((para, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Carry Waterfall Visual */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                  {ko ? "Carried Interest Waterfall — 분배 순서" : "Carried Interest Waterfall — Distribution Sequence"}
                </h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {CARRY_WATERFALL_DATA.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 px-5 py-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 mt-0.5"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                          {step.stage}
                        </span>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: step.recipient === "LP" ? "#eef2ff" : step.recipient === "GP" ? "#fef3c7" : "#d1fae5",
                            color: step.recipient === "LP" ? ACCENT : step.recipient === "GP" ? "#d97706" : "#059669",
                          }}
                        >
                          {step.recipient}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400">{step.desc(ko)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GP/LP Math Example */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-5 rounded-xl border p-5"
              style={{ borderColor: ACCENT + "30", background: ACCENT_LIGHT }}
            >
              <h3 className="text-[13px] font-bold mb-3" style={{ color: ACCENT }}>
                {ko ? "숫자로 보는 Carry 계산 예시" : "Carry Calculation — Worked Example"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12px]">
                <div>
                  <p className="font-bold text-gray-700 dark:text-gray-600 mb-2">
                    {ko ? "펀드 설정" : "Fund Setup"}
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-500">
                    <li>• {ko ? "펀드 규모" : "Fund Size"}: $1,000M</li>
                    <li>• {ko ? "LP 출자" : "LP Capital"}: $990M (99%)</li>
                    <li>• {ko ? "GP 출자" : "GP Capital"}: $10M (1%)</li>
                    <li>• {ko ? "허들레이트" : "Hurdle Rate"}: 8% {ko ? "연" : "p.a."}</li>
                    <li>• {ko ? "보유기간" : "Hold Period"}: 5{ko ? "년" : "yrs"}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-700 dark:text-gray-600 mb-2">
                    {ko ? "Exit 수익 (MOIC 2.5x)" : "Exit Proceeds (MOIC 2.5x)"}
                  </p>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-500">
                    <li>• {ko ? "총 회수액" : "Total Proceeds"}: $2,500M</li>
                    <li>• {ko ? "① LP 원금 반환" : "① Return LP Capital"}: $990M</li>
                    <li>• {ko ? "② 허들 수익 (8%×5년)" : "② Preferred Return (8%×5yr)"}: ~$463M → LP</li>
                    <li>• {ko ? "③ GP Catch-Up" : "③ GP Catch-Up"}: ~$113M → GP</li>
                    <li>• {ko ? "④ 잔여 $934M: LP $747M / GP $187M" : "④ Remaining $934M: LP $747M / GP $187M"}</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t" style={{ borderColor: ACCENT + "20" }}>
                <p className="text-[12px] font-bold text-gray-700 dark:text-gray-600">
                  {ko
                    ? "GP 총 수익: $300M (Carry $187M + Catch-up $113M) — 1% 출자로 전체 수익의 20% 획득"
                    : "GP Total Take: $300M (Carry $187M + Catch-up $113M) — 1% equity commitment captures 20% of total profits"}
                </p>
              </div>
            </motion.div>

            {/* J-Curve */}
            <motion.div
              variants={fadeUp(0.2)}
              className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
            >
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "PE 펀드의 J-Curve" : "The PE Fund J-Curve"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko
                  ? "초기에는 수수료 + 투자로 마이너스, 중반에 가치 창출 후 플러스 전환 — 이를 J-Curve 효과라 한다"
                  : "Negative returns early (fees + deployments), turning positive in mid-life as value is created — the J-Curve effect"}
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={J_CURVE_DATA} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickFormatter={(v) => `Y${v}`}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickFormatter={(v) => `${v}%`}
                    width={40}
                  />
                  <Tooltip
                    formatter={(v) => [`${Number(v)}%`, ko ? "누적 수익률" : "Cumulative Return"]}
                    labelFormatter={(l) => `Year ${l}`}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <ReferenceLine y={0} stroke="#6b7280" strokeWidth={1} />
                  <Line
                    type="monotone"
                    dataKey="nav"
                    stroke={ACCENT}
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: ACCENT }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-1">
                {ko
                  ? "* 일반적인 10년 PE 바이아웃 펀드 패턴 (모식도). 실제 펀드별 편차 있음."
                  : "* Stylized pattern for a 10-year PE buyout fund. Actual fund performance varies significantly."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Ch.4: 케이스스터디 ══════════════════════════════════════════════ */}
          <motion.section
            id="ch4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                Ch.4
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실전 케이스스터디 — 성공과 실패의 갈림길" : "Real-World Case Studies — Where Success and Failure Diverge"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko ? [
                "같은 해(2007년) 같은 시장환경에서 실행된 두 LBO가 전혀 다른 결말을 맞았다. Blackstone/Hilton은 역대 PE 딜 중 최대 수익 중 하나로 기록됐고, KKR·TPG/TXU(Energy Future Holdings)는 역대 최대 PE 파산으로 기록됐다.",
                "무엇이 달랐을까? 운이 아니다 — 비즈니스 모델의 구조, 레버리지에 대한 민감도, Entry 가정의 취약성이 달랐다. 이 케이스들은 LBO 리스크의 본질을 이해하는 가장 좋은 교재다.",
              ] : [
                "Two LBOs executed in the same year (2007), in the same market environment, reached completely opposite outcomes. Blackstone/Hilton became one of the greatest PE returns ever recorded. KKR·TPG/TXU (Energy Future Holdings) became the largest PE bankruptcy in history.",
                "What was different? Not luck — the business model structure, sensitivity to leverage, and the fragility of entry assumptions differed fundamentally. These cases are the best textbook for understanding LBO risk.",
              ]).map((para, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Case Study Cards */}
            <motion.div variants={stagger} className="space-y-4">
              {CASE_STUDIES.map((cs) => (
                <motion.div
                  key={cs.slug}
                  variants={fadeUp()}
                  className={`rounded-xl border p-5 ${cs.color}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0">{cs.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cs.labelColor}`}>
                          {cs.verdictLabel(ko)}
                        </span>
                        <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400">
                          {cs.dealValue} Deal
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400">
                          MOIC {cs.moic} · IRR {cs.irr} · {cs.hold(ko)}
                        </span>
                      </div>
                      <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100">
                        {cs.title(ko)}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-2 italic">
                    &ldquo;{cs.tagline(ko)}&rdquo;
                  </p>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {cs.lesson(ko)}
                  </p>

                  {cs.link ? (
                    <Link
                      href={cs.link}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full text-white transition-opacity hover:opacity-80"
                      style={{ background: ACCENT }}
                    >
                      {ko ? "딜 상세 보기" : "View Deal Detail"}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500">
                      {ko ? "딜 페이지 준비 중" : "Deal page coming soon"}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Toys"R"Us + Apollo/Caesars preview */}
            <motion.div
              variants={fadeUp(0.2)}
              className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900"
            >
              <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-3">
                {ko ? "추가 케이스 프리뷰 — Ch.3에서 심층 분석" : "More Cases — Deep-dived in Ch.3"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    emoji: "🧸",
                    name: "KKR·Vornado·Bain / Toys\"R\"Us (2005)",
                    value: "$6.6B",
                    outcome: (ko: boolean) => ko ? "파산 (2017)" : "Bankruptcy (2017)",
                    why: (ko: boolean) => ko
                      ? "Amazon 등 온라인 경쟁 + 레버리지 이자로 투자 여력 고갈 → 디지털 전환 실패"
                      : "Amazon/online competition + leverage interest consumed investment capacity → digital transformation failure",
                    color: "text-rose-600 dark:text-rose-400",
                  },
                  {
                    emoji: "🎰",
                    name: "Apollo / Caesars Entertainment (2008)",
                    value: "$30B",
                    outcome: (ko: boolean) => ko ? "파산 (2015)" : "Bankruptcy (2015)",
                    why: (ko: boolean) => ko
                      ? "GFC로 카지노 수익 급감 + 극도로 높은 Debt/EBITDA → 이자 감당 불가"
                      : "GFC slashed casino revenue + extreme Debt/EBITDA → unable to service interest",
                    color: "text-rose-600 dark:text-rose-400",
                  },
                ].map((c, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-gray-950">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">{c.emoji}</span>
                      <div>
                        <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300">{c.name}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">
                          {c.value} · <span className={c.color}>{c.outcome(ko)}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {c.why(ko)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ══ Share — mid ══════════════════════════════════════════════════════ */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />
          </div>

          {/* ══ Ch.5: LBO vs M&A 구조 비교 ══════════════════════════════════════ */}
          <motion.section
            id="ch5"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                Ch.5
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LBO vs. 전략적 M&A — 동기와 구조의 차이" : "LBO vs. Strategic M&A — Motivation and Structure"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* Comparison Table */}
            <motion.div variants={fadeUp()} className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300 w-[140px]">
                      {ko ? "항목" : "Item"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold" style={{ color: ACCENT }}>
                      LBO (PE 바이아웃)
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-blue-600 dark:text-blue-400">
                      {ko ? "전략적 M&A" : "Strategic M&A"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    {
                      item: (ko: boolean) => ko ? "인수 주체" : "Acquirer",
                      lbo: (ko: boolean) => ko ? "PE 펀드 (GP)" : "PE Fund (GP)",
                      strategic: (ko: boolean) => ko ? "사업회사 (Strategic Buyer)" : "Corporate (Strategic Buyer)",
                    },
                    {
                      item: (ko: boolean) => ko ? "자금 조달" : "Funding",
                      lbo: (ko: boolean) => ko ? "레버리지 60–70% + PE Equity 30–40%" : "Leverage 60–70% + PE Equity 30–40%",
                      strategic: (ko: boolean) => ko ? "현금·신주·채권 혼합 (레버리지 훨씬 낮음)" : "Cash/Stock/Debt mix (much less leverage)",
                    },
                    {
                      item: (ko: boolean) => ko ? "보유 기간" : "Hold Period",
                      lbo: (ko: boolean) => ko ? "5–7년 (펀드 만기 내 Exit 의무)" : "5–7 years (must exit within fund life)",
                      strategic: (ko: boolean) => ko ? "영구 보유 가능 (사업 통합)" : "Indefinite (business integration)",
                    },
                    {
                      item: (ko: boolean) => ko ? "수익 목적" : "Return Goal",
                      lbo: (ko: boolean) => ko ? "IRR 20%+ (LP에게 돌려줄 자기자본 수익 극대화)" : "IRR 20%+ (maximize equity return for LP distribution)",
                      strategic: (ko: boolean) => ko ? "시너지 (매출 증가, 비용 절감, 시장 지배력)" : "Synergies (revenue, cost, market power)",
                    },
                    {
                      item: (ko: boolean) => ko ? "가격 산정" : "Valuation",
                      lbo: (ko: boolean) => ko ? "LBO 모델 (부채 상환 가능성 + 목표 IRR 역산)" : "LBO model (debt serviceability + target IRR back-solve)",
                      strategic: (ko: boolean) => ko ? "시너지 포함 DCF + 비교 거래" : "DCF with synergies + comparable transactions",
                    },
                    {
                      item: (ko: boolean) => ko ? "Exit" : "Exit",
                      lbo: (ko: boolean) => ko ? "IPO·전략적 매각·Secondary PE 등 반드시 필요" : "IPO / strategic sale / secondary PE — mandatory",
                      strategic: (ko: boolean) => ko ? "불필요 (계속 소유)" : "Not required (continued ownership)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">
                        {row.item(ko)}
                      </td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.lbo(ko)}</td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{row.strategic(ko)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Strategic Buyer Can Pay More — Why */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mt-5 rounded-xl border p-5"
              style={{ borderColor: ACCENT + "30", background: ACCENT_LIGHT }}
            >
              <p className="text-[13px] font-bold mb-2" style={{ color: ACCENT }}>
                {ko ? "전략적 매수자가 더 높은 가격을 쓸 수 있는 이유" : "Why Strategic Buyers Can Outbid PE in Auctions"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-600 leading-relaxed">
                {ko
                  ? "사업회사는 '시너지'를 가격에 반영할 수 있다. 예를 들어 경쟁사를 인수하면 중복 비용을 줄이고(Cost Synergy), 교차 판매로 매출을 늘릴 수 있다(Revenue Synergy). PE는 이런 시너지가 없다. 따라서 경매에서 전략적 매수자가 PE보다 더 높은 가격을 쓰는 경우가 많다. PE 입장에서는 '전략적이 참여 못하는 딜', 즉 비상장·가족경영·Carve-out에서 경쟁 우위가 생긴다."
                  : "Corporate acquirers can price synergies into their bids. Acquiring a competitor eliminates duplicate costs (cost synergy) and enables cross-selling (revenue synergy). PE doesn't have this. As a result, strategic buyers often outbid PE in competitive auctions. PE's competitive edge emerges in deals where strategics can't participate — private family businesses, carve-outs from large conglomerates, and take-privates."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Series Preview ══════════════════════════════════════════════════ */}
          <motion.section
            id="series"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "다음 챕터" : "Next Chapters"}
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "LBO 101 시리즈 — 전체 구성" : "LBO 101 Series — Complete Guide"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  ch: 0,
                  title: (ko: boolean) => ko ? "Ch.0 — LBO의 본질" : "Ch.0 — What Is LBO?",
                  desc: (ko: boolean) => ko
                    ? "레버리지 수익 증폭 수학, 7가지 타겟 기준, GP/LP 경제학, 케이스스터디"
                    : "Leverage return math, 7 target criteria, GP/LP economics, case studies",
                  time: "15",
                  slug: "lbo-overview",
                  current: true,
                },
                {
                  ch: 1,
                  title: (ko: boolean) => ko ? "Ch.1 — 자본구조 완전 해부" : "Ch.1 — Capital Stack Deep Dive",
                  desc: (ko: boolean) => ko
                    ? "부채 피라미드, Term Loan A/B, HY채권, PIK메모, 코버넌트, DSCR — Hilton 실제 구조"
                    : "Debt pyramid, TLA/TLB, HY bonds, PIK notes, covenants, DSCR — Hilton real structure",
                  time: "12",
                  slug: "lbo-capital-structure",
                  current: false,
                },
                {
                  ch: 2,
                  title: (ko: boolean) => ko ? "Ch.2 — 리턴 분석" : "Ch.2 — Return Analysis",
                  desc: (ko: boolean) => ko
                    ? "MOIC·IRR 갈등, J-커브, 가치창출 3드라이버, Exit Multiple, Vintage Year 효과"
                    : "MOIC·IRR conflict, J-curve, 3 value creation drivers, exit multiple, vintage year effect",
                  time: "13",
                  slug: "lbo-returns",
                  current: false,
                },
                {
                  ch: 3,
                  title: (ko: boolean) => ko ? "Ch.3 — 딜 프로세스 & 리스크" : "Ch.3 — Deal Process & Risk",
                  desc: (ko: boolean) => ko
                    ? "LBO 타임라인, Sources & Uses, Maturity Wall, TXU·Toys\"R\"Us·Caesars 실패 해부"
                    : "LBO timeline, sources & uses, maturity wall, TXU·Toys\"R\"Us·Caesars failure analysis",
                  time: "14",
                  slug: "lbo-deal-process",
                  current: false,
                },
              ].map((ch) => (
                <motion.div key={ch.ch} variants={fadeUp()}>
                  <Link
                    href={`${ko ? "/deal-101" : "/en/deal-101"}/${ch.slug}`}
                    className={`block rounded-xl border p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                      ch.current
                        ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ background: ch.current ? ACCENT : "#9ca3af" }}
                      >
                        Ch.{ch.ch}
                      </span>
                      {ch.current && (
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                          {ko ? "현재 읽는 중" : "You are here"}
                        </span>
                      )}
                      <span className="ml-auto text-[10px] text-gray-400 dark:text-gray-500">
                        {ch.time}{ko ? "분" : "min"}
                      </span>
                    </div>
                    <h3 className={`text-[13px] font-bold mb-1 ${
                      ch.current ? "text-indigo-700 dark:text-indigo-300" : "text-gray-900 dark:text-gray-100"
                    }`}>
                      {ch.title(ko)}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {ch.desc(ko)}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
          <motion.section
            id="faq"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>FAQ</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion
                items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))}
                accent={ACCENT}
              />
            </motion.div>
          </motion.section>

          {/* ══ Sources ══════════════════════════════════════════════════════════ */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="border-t border-gray-200 dark:border-gray-700 pt-8"
          >
            <motion.h3
              variants={fadeUp()}
              className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-4"
            >
              {ko ? "참고 자료" : "References"}
            </motion.h3>
            <motion.ol
              variants={stagger}
              className="space-y-2"
            >
              {SOURCES.map((s) => (
                <motion.li
                  key={s.id}
                  variants={fadeUp()}
                  className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed flex gap-2"
                >
                  <span className="font-bold flex-shrink-0">[{s.id}]</span>
                  <span>{s.text}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* ══ Share — bottom ═══════════════════════════════════════════════════ */}
          <div className="flex justify-end pb-4">
            <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />
          
            <LikeButton slug={concept.slug} lang={lang} /></div>

        </div>
      </main>
      <Footer />
    </>
  );
}
