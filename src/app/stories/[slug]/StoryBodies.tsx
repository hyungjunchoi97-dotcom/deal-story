"use client";

/**
 * StoryBodies.tsx — 12개 신규 일화의 시각화 풍부한 본문 컴포넌트
 *
 * 각 컴포넌트는:
 * - 3~4개 stat callout grid
 * - Framer Motion 애니메이션
 * - Recharts 차트 (BarChart, LineChart, AreaChart 등)
 * - 텍스트 섹션 + 인포그래픽 인터리브
 *
 * StoriesClient.tsx에서 import해 renderBody()의 switch 케이스로 사용.
 */

import { motion } from "framer-motion";
import {
  AreaChart, Area,
  BarChart, Bar, Cell,
  LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, ReferenceLine,
} from "recharts";
import type { InvestorStory } from "@/data/investor-stories";

// ── Animation primitives (StoriesClient와 동일 패턴) ──────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── Shared sub-components ─────────────────────────────────────────────────────

function SectionTitle({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <motion.div variants={fadeUp()} className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">{children}</h2>
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
      {caption && <p className="text-[10px] text-gray-400 text-center pb-4 px-4">{caption}</p>}
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
            dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
          />
        ))}
      </div>
    </div>
  );
}

function StatCallout({
  items, accent, accentLight,
}: {
  items: { label: string; value: string; sub?: string; color?: string }[];
  accent: string;
  accentLight: string;
}) {
  return (
    <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="show" viewport={VP}>
      <div className="grid divide-x rounded-2xl overflow-hidden border-2"
           style={{ borderColor: accentLight, gridTemplateColumns: `repeat(${items.length}, minmax(0,1fr))` }}>
        {items.map((it, i) => (
          <div key={i} className="px-4 py-5 text-center"
               style={{ background: i === 0 ? accentLight : undefined }}>
            <p className="text-[10px] font-bold mb-1 uppercase tracking-wider"
               style={{ color: it.color ?? accent }}>{it.label}</p>
            <p className="text-2xl sm:text-3xl font-black" style={{ color: it.color ?? accent }}>{it.value}</p>
            {it.sub && <p className="text-[11px] font-medium mt-1 text-gray-500 dark:text-gray-400">{it.sub}</p>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SectionsRender({ story, ko, accent }: { story: InvestorStory; ko: boolean; accent: string }) {
  return (
    <>
      {story.sections.map((section, i) => (
        <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
          <SectionTitle accent={accent}>{ko ? section.heading : section.headingEn}</SectionTitle>
          <BodyParagraphs accent={accent} paras={(ko ? section.body : section.bodyEn).split("\n\n")} />
        </motion.section>
      ))}
    </>
  );
}

type BodyProps = {
  ko: boolean;
  story: InvestorStory;
  accent: string;
  accentLight: string;
  accentDark: string;
};

// ════════════════════════════════════════════════════════════════════════════════
// 1. NICK LEESON — BARINGS 1995
// ════════════════════════════════════════════════════════════════════════════════

const leesonLossData = [
  { year: "1992", loss: -2 },
  { year: "1993", loss: -23 },
  { year: "1994", loss: -208 },
  { year: "1995.1", loss: -380 },
  { year: "1995.2", loss: -860 },
];

export function LeesonBody({ ko, story, accent, accentLight }: BodyProps) {
  const leesonNikkeiData = [
    { date: "1.13", price: 19350 },
    { date: "1.16", price: 19250 },
    { date: ko ? "1.17\n지진" : "1.17\nQuake", price: 19241 },
    { date: "1.20", price: 18840 },
    { date: "1.23", price: 18120 },
    { date: "1.30", price: 17840 },
    { date: "2.13", price: 17800 },
    { date: "2.23", price: 17620 },
    { date: "2.27", price: 16860 },
  ];
  const quakeLabel = ko ? "1.17\n지진" : "1.17\nQuake";
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "총 손실" : "Total Loss", value: "£860M", sub: ko ? "자기자본의 2배" : "2× equity" },
        { label: ko ? "비밀 계좌" : "Secret A/C", value: "88888", sub: ko ? "오류 계좌 위장" : "Error a/c", color: "#dc2626" },
        { label: ko ? "베어링스 인수가" : "Sale Price", value: "£1", sub: "ING (1995)", color: "#525252" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "비밀 계좌 88888의 누적 손실" : "Account 88888 Cumulative Losses"}
          caption={ko ? "£M, 출처: BoBS 1995 보고서" : "£M, source: BoBS 1995 report"}
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={leesonLossData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `£${v}M`} />
              <Tooltip formatter={(v: number) => [`£${v}M`, ko ? "손실" : "Loss"]} />
              <Bar dataKey="loss" radius={[6, 6, 0, 0]}>
                {leesonLossData.map((d, i) => (
                  <Cell key={i} fill={i === leesonLossData.length - 1 ? "#dc2626" : "#f87171"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "한신 대지진 후 니케이225 (1995년 1~2월)" : "Nikkei 225 after Kobe Earthquake (Jan–Feb 1995)"}
          caption={ko ? "지진(1.17) 이후 약 12% 하락 — 리슨의 롱 포지션이 한꺼번에 무너졌다" : "~12% drop after the Jan 17 earthquake — Leeson's longs collapsed together"}
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={leesonNikkeiData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis domain={[16500, 19500]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [v.toLocaleString(), "Nikkei 225"]} />
              <ReferenceLine x={quakeLabel} stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "지진" : "Quake", fill: "#dc2626", fontSize: 11 }} />
              <Line type="monotone" dataKey="price" stroke={accent} strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "포지션 vs. 베어링스 자기자본" : "Position vs. Barings Equity"}>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="rounded-xl p-5 bg-rose-50 dark:bg-rose-900/20 border border-rose-200">
              <p className="text-[10px] uppercase tracking-wider text-rose-600 font-bold mb-2">{ko ? "리슨 포지션 (노셔널)" : "Leeson Position (Notional)"}</p>
              <p className="text-3xl font-black text-rose-700">$7B</p>
              <p className="text-[11px] text-rose-500 mt-1">{ko ? "Nikkei 선물 61,039계약" : "61,039 Nikkei contracts"}</p>
            </div>
            <div className="rounded-xl p-5 bg-gray-100 dark:bg-gray-800 border border-gray-200">
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-2">{ko ? "베어링스 자기자본" : "Barings Equity"}</p>
              <p className="text-3xl font-black text-gray-700">$615M</p>
              <p className="text-[11px] text-gray-400 mt-1">{ko ? "전체 은행 자본" : "Entire bank capital"}</p>
            </div>
          </div>
          <p className="text-center text-[12px] text-gray-500 mt-4">
            {ko ? "한 트레이더의 포지션이 은행 전체 자본의 11배" : "One trader's position = 11× the bank's total equity"}
          </p>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 2. LTCM 1998
// ════════════════════════════════════════════════════════════════════════════════

const ltcmEquityData = [
  { period: "1994", value: 1.25 },
  { period: "1995", value: 1.75 },
  { period: "1996", value: 2.85 },
  { period: "1997", value: 4.7 },
  { period: "1998.5", value: 4.6 },
  { period: "1998.8", value: 2.3 },
  { period: "1998.9", value: 0.6 },
  { period: "1998.10", value: 0.4 },
];

export function LtcmBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "최고 AUM" : "Peak AUM", value: "$4.6B", sub: ko ? "자기자본" : "Equity" },
        { label: ko ? "레버리지" : "Leverage", value: "25–30×", sub: ko ? "위기 시 350배" : "350× in crisis", color: "#dc2626" },
        { label: ko ? "구제 규모" : "Bailout", value: "$3.6B", sub: ko ? "14개 은행" : "14 banks", color: "#1f2937" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "LTCM 자기자본 (1994~1998)" : "LTCM Equity (1994–1998)"}
          caption={ko ? "$Billion. 4년 누적 후 4개월 만에 92% 소멸" : "$Billion. 4 years of gains erased in 4 months"}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={ltcmEquityData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="ltcmGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={accent} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="period" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
              <Tooltip formatter={(v: number) => [`$${v}B`, ko ? "자기자본" : "Equity"]} />
              <ReferenceLine x="1998.8" stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "러시아 디폴트" : "Russia default", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="value" stroke={accent} strokeWidth={2.5} fill="url(#ltcmGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "레버리지의 스케일 — 로그 스케일" : "The Scale of Leverage — Log Scale"}
          caption={ko ? "$1의 자기자본이 $271의 노셔널 익스포저를 지탱했다" : "$1 of equity supporting $271 in notional exposure"}
        >
          <ResponsiveContainer width="100%" height={240}>
            <BarChart layout="vertical" data={[
              { label: ko ? "자기자본" : "Equity", value: 4.6, fill: "#10b981" },
              { label: ko ? "자산" : "Assets", value: 125, fill: "#f59e0b" },
              { label: ko ? "노셔널 포지션" : "Notional", value: 1250, fill: "#dc2626" },
            ]} margin={{ top: 10, right: 30, left: 70, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" scale="log" domain={[1, 2000]} tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
              <YAxis type="category" dataKey="label" tick={{ fontSize: 12 }} width={60} />
              <Tooltip formatter={(v: number) => [`$${v}B`, ""]} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {[{ fill: "#10b981" }, { fill: "#f59e0b" }, { fill: "#dc2626" }].map((d, i) => <Cell key={i} fill={d.fill} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}
                  className="rounded-2xl p-5 border-l-4 bg-gray-50 dark:bg-gray-800/40"
                  style={{ borderColor: accent }}>
        <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
          {ko ? "노벨상 수상자의 함정" : "The Nobel Laureate's Trap"}
        </p>
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "Scholes와 Merton의 모델은 옳았다 — 스프레드는 결국 수렴했다. 문제는 극단적 레버리지 때문에 '결국'까지 버틸 자금이 없었던 것이다. 모델은 시간을 가정하지만, 마진콜은 시간을 주지 않는다."
            : "Scholes and Merton's models were right — spreads did eventually converge. The problem was that extreme leverage left no capital to wait for 'eventually.' Models assume time; margin calls don't grant it."}
        </p>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 3. DICK FULD — LEHMAN 2008
// ════════════════════════════════════════════════════════════════════════════════

const fuldLeverageData = [
  { year: "2003", leverage: 23 },
  { year: "2004", leverage: 24 },
  { year: "2005", leverage: 25 },
  { year: "2006", leverage: 26 },
  { year: "2007", leverage: 31 },
  { year: "2008Q1", leverage: 44 },
];

const fuldStockData = [
  { date: "Jan", price: 65 },
  { date: "Feb", price: 55 },
  { date: "Mar", price: 38 },
  { date: "Apr", price: 42 },
  { date: "May", price: 38 },
  { date: "Jun", price: 22 },
  { date: "Jul", price: 18 },
  { date: "Aug", price: 16 },
  { date: "Sep 9", price: 7 },
  { date: "Sep 12", price: 3.65 },
  { date: "Sep 15", price: 0.2 },
];

export function FuldBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "파산 자산" : "BK Assets", value: "$639B", sub: ko ? "역사상 최대" : "Largest in history", color: "#dc2626" },
        { label: ko ? "레버리지" : "Leverage", value: "44×", sub: "2008 Q1" },
        { label: ko ? "직원 손실" : "Job Loss", value: "25,000", sub: ko ? "전세계" : "Worldwide", color: "#525252" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "리먼 레버리지 비율 (2003~2008)" : "Lehman Leverage Ratio (2003–2008)"}
          caption={ko ? "주택 시장 균열에도 레버리지를 늘렸다 — 자산가치 3% 하락 시 자본 전액 소멸" : "Leverage rose even as housing cracked — a 3% asset decline would wipe out equity"}
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={fuldLeverageData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}×`} />
              <Tooltip formatter={(v: number) => [`${v}×`, ko ? "레버리지" : "Leverage"]} />
              <Bar dataKey="leverage" radius={[6, 6, 0, 0]}>
                {fuldLeverageData.map((d, i) => (
                  <Cell key={i} fill={d.leverage >= 30 ? "#dc2626" : d.leverage >= 25 ? "#f59e0b" : "#fbbf24"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "리먼 주가 (2008년)" : "Lehman Share Price (2008)"}
          caption={ko ? "1월 $65 → 9월 15일 $0.20. 풀드의 가격 협상이 가치를 0으로 만들었다" : "$65 in Jan → $0.20 on Sep 15. Fuld's pricing negotiations brought value to zero"}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={fuldStockData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fuldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}`} />
              <Tooltip formatter={(v: number) => [`$${v}`, ko ? "주가" : "Price"]} />
              <ReferenceLine x="Sep 9" stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "KDB 결렬" : "KDB talks fail", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="price" stroke="#dc2626" strokeWidth={2.5} fill="url(#fuldGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "거절된 구원 기회들" : "Rescue Offers Rejected"}>
          <div className="space-y-3 mt-2">
            {[
              { date: "2008.03", event: ko ? "베어스턴스 구제 후 자본 조달 거부" : "Refuses capital raise post-Bear", reason: ko ? "주가 하락 인정 거부" : "Refused to admit decline" },
              { date: "2008.06", event: ko ? "KDB 25% 지분 인수 협상" : "KDB 25% stake talks", reason: ko ? "풀드 $17~22 / KDB $6~8" : "Fuld $17–22 vs KDB $6–8" },
              { date: "2008.09 첫째 주", event: ko ? "BofA·바클레이즈 매각" : "BofA·Barclays sale", reason: ko ? "BofA는 메릴린치 선택" : "BofA chose Merrill instead" },
              { date: "2008.09.15", event: ko ? "파산 신청 (오전 1시)" : "Bankruptcy filed (1AM)", reason: ko ? "재무부 공적 자금 거부" : "Treasury refuses public funds" },
            ].map((e, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/40 border-l-4 border-rose-400">
                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30 rounded px-2 py-0.5 mt-0.5 flex-shrink-0">{e.date}</span>
                <div className="flex-1">
                  <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{e.event}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{e.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 4. BERNIE MADOFF — PONZI 2008
// ════════════════════════════════════════════════════════════════════════════════

const madoffReturns = [
  { year: "2000", madoff: 11.2, sp500: -9.1 },
  { year: "2001", madoff: 10.5, sp500: -11.9 },
  { year: "2002", madoff: 9.0,  sp500: -22.1 },
  { year: "2003", madoff: 9.4,  sp500: 28.7 },
  { year: "2004", madoff: 9.7,  sp500: 10.9 },
  { year: "2005", madoff: 11.6, sp500: 4.9 },
  { year: "2006", madoff: 10.8, sp500: 15.8 },
  { year: "2007", madoff: 10.2, sp500: 5.5 },
];

export function MadoffBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "사기 규모" : "Fraud Size", value: "$65B", sub: ko ? "가상 잔고" : "Fake balance", color: "#dc2626" },
        { label: ko ? "사기 기간" : "Duration", value: "50년+", sub: ko ? "1970s~2008" : "1970s–2008" },
        { label: ko ? "SEC 조사" : "SEC Probes", value: "6회+", sub: ko ? "모두 무사 통과" : "All passed", color: "#525252" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "매도프의 '꾸준한 10%' vs. S&P500" : "Madoff's Steady 10% vs. S&P 500"}
          caption={ko ? "닷컴 붕괴·9·11·약세장에도 매도프만 항상 +10%. 그 일관성이 사기의 증거였다" : "Even through dot-com, 9/11, and bear markets, Madoff stayed at +10%. The consistency was the evidence."}
        >
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={madoffReturns} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
              <ReferenceLine y={0} stroke="#9ca3af" />
              <Line type="monotone" dataKey="madoff" stroke="#dc2626" strokeWidth={3} name="Madoff" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="sp500" stroke="#3b82f6" strokeWidth={2} name="S&P 500" dot={{ r: 3 }} strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "폰지 구조 — 자금 순환" : "Ponzi Mechanics — Capital Cycle"}>
          <div className="grid grid-cols-3 gap-3 mt-2">
            <div className="text-center p-4 rounded-xl bg-emerald-50 border-2 border-emerald-200">
              <p className="text-2xl mb-2">💰</p>
              <p className="text-[10px] font-bold text-emerald-700 uppercase">{ko ? "신규 투자자" : "New Investor"}</p>
              <p className="text-[11px] text-emerald-600 mt-1">{ko ? "$ 입금" : "Deposits"}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-rose-50 border-2 border-rose-300">
              <p className="text-2xl mb-2">🎩</p>
              <p className="text-[10px] font-bold text-rose-700 uppercase">{ko ? "매도프" : "Madoff"}</p>
              <p className="text-[11px] text-rose-600 mt-1">{ko ? "재분배 + 횡령" : "Redistribute + skim"}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-amber-50 border-2 border-amber-200">
              <p className="text-2xl mb-2">💸</p>
              <p className="text-[10px] font-bold text-amber-700 uppercase">{ko ? "기존 투자자" : "Old Investor"}</p>
              <p className="text-[11px] text-amber-600 mt-1">{ko ? "가짜 '수익' 수령" : "Receives fake 'returns'"}</p>
            </div>
          </div>
          <p className="text-center text-[12px] text-gray-500 mt-4">
            {ko ? "→ 신규 유입이 멈추면 즉각 붕괴. 2008년 환매 폭증이 끝이었다." : "→ Collapses instantly when new money stops. 2008's redemption surge was the end."}
          </p>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 5. JEROME KERVIEL — SOCGEN 2008
// ════════════════════════════════════════════════════════════════════════════════

const kervielStockData = [
  { date: "1.18 (금)", price: 5685 },
  { date: "1.21 (월)", price: 5470 },
  { date: "1.22 (화)", price: 5250 },
  { date: "1.23 (수)", price: 5100 },
];

export function KervielBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "무단 포지션" : "Unauth. Position", value: "€49B", sub: ko ? "자기자본의 1.5배" : "1.5× equity", color: "#dc2626" },
        { label: ko ? "실현 손실" : "Loss", value: "€4.9B", sub: ko ? "3일 청산" : "3-day unwind" },
        { label: ko ? "청산 기간" : "Unwind Period", value: "3일", sub: "Jan 21–23, 2008", color: "#525252" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "Eurostoxx50 — 케르비엘 청산 3일간" : "Eurostoxx 50 — Kerviel Liquidation 3 Days"}
          caption={ko ? "이미 서브프라임 공포 + SocGen $50B 매도가 겹치며 유럽 증시 10% 폭락" : "Already weak from subprime + SocGen's $50B sell-off = 10% European market plunge"}
        >
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={kervielStockData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="kvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis domain={[5000, 5800]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [v.toLocaleString(), "Eurostoxx 50"]} />
              <Area type="monotone" dataKey="price" stroke="#dc2626" strokeWidth={2.5} fill="url(#kvGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "수법: 가짜 헤지의 작동 원리" : "Method: How the Fictitious Hedges Worked"}>
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-xl bg-rose-50 border-2 border-rose-300">
              <p className="text-[10px] font-bold text-rose-700 uppercase mb-2">{ko ? "실제 포지션" : "Real Position"}</p>
              <p className="text-[13px] font-bold text-rose-900">{ko ? "유럽 주가지수 선물 €49B 롱" : "€49B Long, European index futures"}</p>
              <p className="text-[11px] text-rose-700 mt-2">{ko ? "DAX · Eurostoxx50 · CAC40" : "DAX · Eurostoxx50 · CAC40"}</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-300">
              <p className="text-[10px] font-bold text-amber-700 uppercase mb-2">{ko ? "가짜 헤지 (시스템 입력)" : "Fictitious Hedge (System)"}</p>
              <p className="text-[13px] font-bold text-amber-900">{ko ? "동일 규모 만기 장기 포워드" : "Equal-size long-dated forwards"}</p>
              <p className="text-[11px] text-amber-700 mt-2">{ko ? "실제 거래 없이 시스템에만 존재 → 순 포지션 = 0처럼 보임" : "Exists only in system → net position looks like 0"}</p>
            </div>
          </div>
          <p className="text-center text-[12px] text-gray-500 mt-4 leading-relaxed">
            {ko ? "백오피스 출신 케르비엘은 어떤 거래가 자동 확인을 트리거하는지 알았다 — 만기가 먼 포워드는 확인 시점까지 시간을 벌어줬다." : "As an ex-back-office trader, Kerviel knew which trades triggered auto-confirmation — far-dated forwards bought time."}
          </p>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 6. MICHAEL MILKEN — JUNK BONDS 1986
// ════════════════════════════════════════════════════════════════════════════════

const milkenHYData = [
  { year: "1977", size: 7 },
  { year: "1980", size: 15 },
  { year: "1983", size: 40 },
  { year: "1986", size: 125 },
  { year: "1989", size: 210 },
  { year: "1995", size: 320 },
  { year: "2005", size: 700 },
  { year: "2015", size: 1300 },
  { year: "2024", size: 1500 },
];

export function MilkenBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "1987년 보수" : "1987 Pay", value: "$550M", sub: ko ? "역사상 최고" : "Highest ever" },
        { label: ko ? "현재 HY 시장" : "Today's HY", value: "$1.5T", sub: ko ? "그가 만든 시장" : "The market he built" },
        { label: ko ? "형량" : "Sentence", value: "10년", sub: ko ? "2년 복역 후 사면" : "Served 2 yrs, pardoned", color: "#525252" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "미국 고수익채권 시장 (1977~2024)" : "US High-Yield Bond Market (1977–2024)"}
          caption={ko ? "$Billion. 밀켄이 1970년대 후반 시작한 시장이 1.5조 달러로 성장" : "$Billion. The market Milken started in the late 70s grew to $1.5T"}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={milkenHYData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="milkenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={accent} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
              <Tooltip formatter={(v: number) => [`$${v}B`, ko ? "시장 규모" : "Market size"]} />
              <ReferenceLine x="1989" stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "밀켄 기소" : "Milken indicted", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="size" stroke={accent} strokeWidth={2.5} fill="url(#milkenGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "밀켄이 가능하게 한 대표 LBO들" : "Landmark LBOs Milken Enabled"}>
          <div className="space-y-2.5 mt-2">
            {[
              { year: 1985, deal: "Revlon", amount: "$2.7B", who: "Ron Perelman" },
              { year: 1985, deal: "TWA", amount: "$0.8B", who: "Carl Icahn" },
              { year: 1986, deal: "Beatrice Foods", amount: "$8.7B", who: "KKR" },
              { year: 1988, deal: "RJR Nabisco", amount: "$31.0B", who: "KKR" },
            ].map((d, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.08)}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/40 border-l-4"
                          style={{ borderColor: accent }}>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold rounded px-2 py-0.5" style={{ background: accentLight, color: accent }}>{d.year}</span>
                  <span className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{d.deal}</span>
                </div>
                <div className="text-right">
                  <p className="text-[15px] font-black" style={{ color: accent }}>{d.amount}</p>
                  <p className="text-[10px] text-gray-500">{d.who}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[12px] text-gray-500 mt-4">
            {ko ? "은행 신디케이트만으로는 불가능했던 규모 — 밀켄의 정크본드가 해결했다" : "Scales impossible via bank syndicates alone — Milken's junk bonds made them possible"}
          </p>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 7. JESSE LIVERMORE — 1929 CRASH
// ════════════════════════════════════════════════════════════════════════════════

const livermoreDjia = [
  { date: "Sep 3", djia: 381 },
  { date: "Sep 16", djia: 372 },
  { date: "Oct 1", djia: 343 },
  { date: "Oct 16", djia: 330 },
  { date: "Oct 24 (Thu)", djia: 299 },
  { date: "Oct 28", djia: 261 },
  { date: "Oct 29 (Tue)", djia: 230 },
  { date: "Nov 13", djia: 199 },
];

export function LivermoreBody({ ko, story, accent, accentLight }: BodyProps) {
  const livermoreWealth = [
    { year: "1901", wealth: 0.05, status: ko ? "첫 파산" : "Bankruptcy #1" },
    { year: "1907", wealth: 3,    status: ko ? "패닉 수익" : "Panic profit" },
    { year: "1915", wealth: 0,    status: ko ? "두 번째 파산" : "Bankruptcy #2" },
    { year: "1923", wealth: 30,   status: ko ? "최고점" : "Peak" },
    { year: "1929", wealth: 100,  status: ko ? "대공황 수익" : "Crash fortune" },
    { year: "1934", wealth: 0,    status: ko ? "네 번째 파산" : "Bankruptcy #4" },
    { year: "1940", wealth: 0,    status: ko ? "자살" : "Suicide" },
  ];
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "1929 수익" : "1929 Profit", value: "$100M", sub: ko ? "오늘날 $1.7B" : "~$1.7B today" },
        { label: ko ? "파산 횟수" : "Bankruptcies", value: "4회", sub: "1901·1907·1915·1934", color: "#dc2626" },
        { label: ko ? "시작 나이" : "Started Trading", value: "14세", sub: ko ? "버킷샵에서" : "in bucket shops", color: "#525252" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "1929년 다우존스 대폭락" : "1929 Dow Jones Crash"}
          caption={ko ? "9월 381 → 11월 199. 리버모어는 대폭락 직전 공매도 포지션을 쌓고 $100M을 벌었다" : "Sep 381 → Nov 199. Livermore built shorts before the crash and made $100M"}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={livermoreDjia} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="livGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [v, "DJIA"]} />
              <ReferenceLine x="Oct 24 (Thu)" stroke="#dc2626" strokeDasharray="4 4" label={{ value: "Black Thu", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <ReferenceLine x="Oct 29 (Tue)" stroke="#7f1d1d" strokeDasharray="4 4" label={{ value: "Black Tue", fill: "#7f1d1d", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="djia" stroke="#dc2626" strokeWidth={2.5} fill="url(#livGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "리버모어의 자산 곡선 (1901~1940)" : "Livermore's Wealth Curve (1901–1940)"}
          caption={ko ? "$Million. 천재성과 자기파괴의 4사이클" : "$Million. Four cycles of genius and self-destruction"}
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={livermoreWealth} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}M`} />
              <Tooltip formatter={(v: number, _n: string, p) => [`$${v}M`, p.payload.status]} />
              <Line type="monotone" dataKey="wealth" stroke={accent} strokeWidth={2.5} dot={{ r: 5, fill: accent }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 8. PAUL VOLCKER — INFLATION WAR 1979
// ════════════════════════════════════════════════════════════════════════════════

const volckerData = [
  { year: "1977", rate: 5.5, inflation: 6.5, unemp: 7.1 },
  { year: "1978", rate: 7.9, inflation: 7.6, unemp: 6.1 },
  { year: "1979", rate: 11.2, inflation: 11.3, unemp: 5.8 },
  { year: "1980", rate: 13.4, inflation: 13.5, unemp: 7.1 },
  { year: "1981", rate: 16.4, inflation: 10.3, unemp: 7.6 },
  { year: "1982", rate: 12.3, inflation: 6.2, unemp: 9.7 },
  { year: "1983", rate: 9.1, inflation: 3.2, unemp: 9.6 },
  { year: "1984", rate: 10.2, inflation: 4.3, unemp: 7.5 },
  { year: "1985", rate: 8.1, inflation: 3.6, unemp: 7.2 },
];

export function VolckerBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "최고 금리" : "Peak Fed Rate", value: "20%", sub: "Jun 1981", color: "#dc2626" },
        { label: ko ? "최고 실업률" : "Peak Unemp.", value: "10.8%", sub: "Dec 1982", color: "#f59e0b" },
        { label: ko ? "인플레 감축" : "Inflation Cut", value: "14→3%", sub: ko ? "4년 안에" : "in 4 years", color: "#059669" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "Fed Funds Rate · CPI · 실업률 (1977~1985)" : "Fed Funds · CPI · Unemployment (1977–1985)"}
          caption={ko ? "금리 20% → 인플레 잡힘 → 실업률 10.8%. 단기 고통의 정확한 트레이드오프" : "20% rates → inflation defeated → 10.8% unemployment. Precise trade-off of short-term pain"}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={volckerData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
              <ReferenceLine x="1979" stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "볼커 취임" : "Volcker takes office", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <Line type="monotone" dataKey="rate" stroke="#dc2626" strokeWidth={3} name={ko ? "기준금리" : "Fed Rate"} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="inflation" stroke="#f59e0b" strokeWidth={2.5} name="CPI" dot={{ r: 3 }} />
              <Line type="monotone" dataKey="unemp" stroke="#3b82f6" strokeWidth={2.5} name={ko ? "실업률" : "Unemployment"} dot={{ r: 3 }} strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}
                  className="rounded-2xl p-5 border-l-4"
                  style={{ borderColor: accent, background: accentLight }}>
        <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
          {ko ? "볼커가 받았던 것들" : "What Volcker Received"}
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          <div className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
            🪓 <strong>{ko ? "목재업자들" : "Loggers"}</strong> {ko ? "→ 죽은 나무를 의회로 보냄" : "→ sent dead trees to Congress"}
          </div>
          <div className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
            🚜 <strong>{ko ? "농부들" : "Farmers"}</strong> {ko ? "→ 망가진 트랙터 열쇠를 의회로" : "→ broken tractor keys to Congress"}
          </div>
          <div className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
            🏠 <strong>{ko ? "건설업자들" : "Builders"}</strong> {ko ? "→ 의회 청문회에서 야유" : "→ jeered at hearings"}
          </div>
          <div className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
            🛡️ <strong>{ko ? "경호원 동행" : "Bodyguards"}</strong> {ko ? "→ 살해 위협으로 인해" : "→ due to death threats"}
          </div>
        </div>
        <p className="text-[12px] text-gray-500 mt-4 italic">
          {ko ? "그러나 1983년 인플레이션이 3%로 내려왔을 때, 그가 옳았다는 것이 증명됐다." : "But when inflation fell to 3% in 1983, he was vindicated."}
        </p>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 9. BRUCE WASSERSTEIN — M&A 1988
// ════════════════════════════════════════════════════════════════════════════════

export function WassersteinBody({ ko, story, accent, accentLight }: BodyProps) {
  const rjrBidData = [
    { round: ko ? "초기" : "Initial",  kkr: 90,  mgmt: 75 },
    { round: ko ? "2차"  : "Round 2",  kkr: 94,  mgmt: 92 },
    { round: ko ? "3차"  : "Round 3",  kkr: 106, mgmt: 101 },
    { round: ko ? "최종" : "Final",    kkr: 109, mgmt: 108 },
  ];
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "RJR 나비스코" : "RJR Nabisco", value: "$31B", sub: ko ? "1988 LBO" : "1988 LBO" },
        { label: ko ? "별명" : "Nickname", value: "\"Bid 'em Up\"", sub: ko ? "공격적 입찰의 상징" : "Aggressive bidding" },
        { label: ko ? "부티크 모델" : "Boutique IB", value: "1988~", sub: ko ? "Wasserstein Perella" : "Wasserstein Perella" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "RJR 나비스코 입찰 경쟁 (1988)" : "RJR Nabisco Bidding War (1988)"}
          caption={ko ? "$/share. 'Bid 'em Up' 철학이 가격을 $75에서 $109까지 끌어올렸다" : "$/share. 'Bid 'em Up' philosophy pushed price from $75 to $109"}
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={rjrBidData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="round" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}`} />
              <Tooltip formatter={(v: number) => [`$${v}`, ""]} />
              <Bar dataKey="kkr" fill="#3b82f6" name="KKR" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mgmt" fill="#f59e0b" name={ko ? "경영진" : "Management"} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "와서스타인이 만든 부티크 IB 계보" : "The Boutique IB Lineage Wasserstein Started"}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {[
              { name: "Wasserstein Perella", year: 1988, color: "bg-blue-100 text-blue-700" },
              { name: "Centerview", year: 2006, color: "bg-emerald-100 text-emerald-700" },
              { name: "Evercore", year: 1995, color: "bg-amber-100 text-amber-700" },
              { name: "Moelis & Co.", year: 2007, color: "bg-rose-100 text-rose-700" },
              { name: "Perella Weinberg", year: 2006, color: "bg-violet-100 text-violet-700" },
              { name: "Lazard", year: "1848 (Modern)", color: "bg-gray-100 text-gray-700" },
            ].map((b, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.06)}
                          className={`p-3 rounded-xl text-center ${b.color}`}>
                <p className="text-[12px] font-bold">{b.name}</p>
                <p className="text-[10px] opacity-70 mt-0.5">{b.year}</p>
              </motion.div>
            ))}
          </div>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 10. SIDNEY WEINBERG — GOLDMAN SACHS 1956
// ════════════════════════════════════════════════════════════════════════════════

export function WeinbergBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "포드 IPO" : "Ford IPO", value: "$660M", sub: ko ? "1956년 (역사상 최대)" : "1956 (largest ever)" },
        { label: ko ? "이사회 석" : "Board Seats", value: "30+", sub: ko ? "동시 보유" : "Simultaneously" },
        { label: ko ? "근속" : "Tenure", value: "62년", sub: "1907–1969" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "와인버그의 이사회 네트워크 (1950년대)" : "Weinberg's Board Network (1950s)"}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {[
              "General Electric", "Ford Motor", "Sears Roebuck", "General Foods",
              "McGraw-Hill", "B.F. Goodrich", "Continental Can", "Bond Stores",
              "Cluett Peabody", "Champion Paper", "Owens-Corning", "+ 19 more",
            ].map((b, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.04)}
                          className="px-3 py-2.5 rounded-lg text-center text-[12px] font-semibold"
                          style={{ background: accentLight, color: accent }}>
                {b}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[12px] text-gray-500 mt-4 leading-relaxed">
            {ko ? "각 이사회가 자문 기회 + 정보 + 다음 딜의 입구가 됐다 — 현대 IB '신뢰받는 조언자' 모델의 기원" : "Each board seat = advisory mandates + information + the door to the next deal — the origin of the modern 'trusted advisor' model"}
          </p>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "1956년 포드 IPO를 가능하게 한 관계망" : "The Relationships That Made the 1956 Ford IPO Possible"}>
          <div className="space-y-3 mt-2">
            {[
              { yr: "1920s", who: ko ? "헨리 포드 1세" : "Henry Ford Sr.", note: ko ? "상장 거부" : "Refused to go public" },
              { yr: "1930s~", who: ko ? "에드셀 포드 + 와인버그" : "Edsel Ford + Weinberg", note: ko ? "초기 관계 형성" : "Early relationship building" },
              { yr: "1943", who: ko ? "에드셀 사망" : "Edsel dies", note: ko ? "관계의 위기" : "Relationship at risk" },
              { yr: "1947~", who: ko ? "엘리너 포드(에드셀 부인)" : "Eleanor Ford (widow)", note: ko ? "와인버그의 신뢰 유지" : "Weinberg keeps trust" },
              { yr: "1955", who: ko ? "포드 재단" : "Ford Foundation", note: ko ? "Goldman 선택" : "Selects Goldman" },
              { yr: "1956.01", who: ko ? "$6.6억 IPO" : "$660M IPO", note: ko ? "당시 역사상 최대" : "Largest in history" },
            ].map((e, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.05)}
                          className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/40">
                <span className="text-[10px] font-bold rounded px-2 py-0.5 flex-shrink-0" style={{ background: accentLight, color: accent }}>{e.yr}</span>
                <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100 flex-shrink-0">{e.who}</span>
                <span className="text-[11px] text-gray-500 truncate">— {e.note}</span>
              </motion.div>
            ))}
          </div>
        </ChartCard>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 11. FELIX ROHATYN — NYC 1975
// ════════════════════════════════════════════════════════════════════════════════

export function RohatynBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "위기 시점" : "Crisis", value: "1975.4", sub: ko ? "단기차입금 만기 집중" : "Short-term wall" },
        { label: ko ? "MAC 채권" : "MAC Bonds", value: "$3B+", sub: ko ? "1차 발행" : "First tranche" },
        { label: ko ? "구제 협상" : "Negotiation", value: "1개월", sub: ko ? "Rohatyn 주도" : "Rohatyn-led" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "MAC 구조 — 어떻게 신뢰를 만들었나" : "MAC Structure — How It Built Trust"}>
          <div className="space-y-3 mt-2">
            {[
              { step: 1, title: ko ? "뉴욕주, MAC 설립" : "NY State creates MAC", desc: ko ? "주법인 = 시보다 높은 신용도" : "State entity = higher rating than city" },
              { step: 2, title: ko ? "시 세수 직접 귀속" : "City tax revenues pledged", desc: ko ? "판매세 · 주식양도세 자동 이체" : "Sales tax · stock transfer tax auto-transfer" },
              { step: 3, title: ko ? "MAC 채권 발행" : "MAC bonds issued", desc: ko ? "담보 + 주 신용 = 시장 신뢰 회복" : "Collateral + state credit = market trust" },
              { step: 4, title: ko ? "시 단기 차입금 상환" : "Retire city short-term debt", desc: ko ? "유동성 위기 종료" : "Liquidity crisis ends" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.08)}
                          className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border-l-4"
                          style={{ borderColor: accent }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                     style={{ background: accent }}>{s.step}</div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{s.title}</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}
                  className="rounded-2xl p-5 border-l-4 bg-amber-50 dark:bg-amber-900/20" style={{ borderColor: "#f59e0b" }}>
        <p className="text-[11px] font-bold uppercase tracking-widest mb-2 text-amber-700 dark:text-amber-400">
          {ko ? "가장 어려운 협상: 노동조합 연금" : "The Hardest Negotiation: Union Pensions"}
        </p>
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "Rohatyn은 시 직원 노조에게 \"여러분 연금 $15억을 MAC 채권 매입에 사용해 주세요\"라고 요청했다. 조합원들의 노후 자금을 위기의 도시를 구하는 데 쓰는 것이었다. 며칠간 마라톤 협상 끝에 노조가 동의했다 — 「뉴욕시가 망하면 우리 연금도 0이다」라는 논리가 작동했다."
            : "Rohatyn asked city employee unions to commit $1.5B of their pension funds to buying MAC bonds — using their members' retirement money to rescue the crisis-ridden city. After days of marathon talks, unions agreed: 'If NYC collapses, our pensions are zero anyway.'"}
        </p>
      </motion.div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// 12. JIMMY LEE — JPMORGAN LEVERAGED FINANCE
// ════════════════════════════════════════════════════════════════════════════════

const leveragedLoanData = [
  { year: "1985", size: 5 },
  { year: "1990", size: 50 },
  { year: "1995", size: 150 },
  { year: "2000", size: 280 },
  { year: "2007", size: 730 },
  { year: "2015", size: 920 },
  { year: "2024", size: 1400 },
];

export function JimmyLeeBody({ ko, story, accent, accentLight }: BodyProps) {
  return (
    <div className="space-y-16">
      <StatCallout accent={accent} accentLight={accentLight} items={[
        { label: ko ? "현재 시장" : "Today's Market", value: "$1.4T", sub: ko ? "그가 만든 시장" : "The market he built" },
        { label: ko ? "별명" : "Nickname", value: "Godfather", sub: ko ? "of Leveraged Lending" : "of Leveraged Lending" },
        { label: ko ? "사망일" : "Sudden Death", value: "2015.06", sub: "62 yrs old" },
      ]} />

      <SectionsRender story={story} ko={ko} accent={accent} />

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard
          title={ko ? "미국 레버리지드 론 시장 성장 (1985~2024)" : "US Leveraged Loan Market Growth (1985–2024)"}
          caption={ko ? "$Billion. 지미 리의 신디케이션 구조가 $1.4조 시장의 토대가 됐다" : "$Billion. Jimmy Lee's syndication structure became the foundation of a $1.4T market"}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={leveragedLoanData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="leeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity={0.5} />
                  <stop offset="100%" stopColor={accent} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
              <Tooltip formatter={(v: number) => [`$${v}B`, ko ? "시장 규모" : "Market size"]} />
              <ReferenceLine x="2015" stroke="#dc2626" strokeDasharray="4 4" label={{ value: ko ? "리 사망" : "Lee dies", fill: "#dc2626", fontSize: 10, position: "top" }} />
              <Area type="monotone" dataKey="size" stroke={accent} strokeWidth={2.5} fill="url(#leeGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
        <ChartCard title={ko ? "신디케이션 — 어떻게 LBO 규모를 풀었나" : "Syndication — How LBO Scale Was Unlocked"}>
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300">
              <p className="text-[10px] font-bold text-gray-600 uppercase mb-2">{ko ? "1980년대 이전" : "Before the 1980s"}</p>
              <p className="text-[14px] font-bold text-gray-900 mb-2">{ko ? "단일 은행 = LBO 한계" : "Single bank = LBO ceiling"}</p>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                {ko ? "자본 비율 · 여신 집중 제한 → LBO 최대 $1B 수준" : "Capital ratios · concentration limits → max LBO ~$1B"}
              </p>
            </div>
            <div className="p-5 rounded-xl border-2" style={{ borderColor: accent, background: accentLight }}>
              <p className="text-[10px] font-bold uppercase mb-2" style={{ color: accent }}>{ko ? "지미 리의 신디케이션" : "Jimmy Lee's Syndication"}</p>
              <p className="text-[14px] font-bold mb-2" style={{ color: accent }}>{ko ? "리스크 분산 → 무제한 규모" : "Risk distributed → unlimited size"}</p>
              <p className="text-[12px] text-gray-700 leading-relaxed">
                {ko ? "1988 RJR ($14.5B 대출) · 2007년 직전 LBO들 자금 조달" : "1988 RJR ($14.5B loan) · 2007 mega-LBOs financed"}
              </p>
            </div>
          </div>
        </ChartCard>
      </motion.div>
    </div>
  );
}
