"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
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

const ACCENT = "#3182f6";
const ACCENT_DARK = "#1a56db";
const ACCENT_LIGHT = "rgb(239 246 255)";

// Chart 1: Apple bond issuance volume by year
const issuanceData = [
  { year: "2013", volume: 17 },
  { year: "2014", volume: 12 },
  { year: "2015", volume: 15 },
  { year: "2016", volume: 7 },
  { year: "2017", volume: 7 },
  { year: "2018", volume: 7 },
  { year: "2019", volume: 7 },
  { year: "2020", volume: 8.5 },
  { year: "2021", volume: 14 },
  { year: "2022", volume: 5.5 },
  { year: "2023", volume: 5.25 },
];

function IssuanceVolumeChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "Apple 연도별 회사채 발행 규모 ($B)" : "Apple Annual Bond Issuance Volume ($B)"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={issuanceData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#9ca3af" }} />
                <YAxis domain={[0, 20]} tick={{ fontSize: 9, fill: "#9ca3af" }} tickFormatter={(v) => `$${v}B`} />
                <Tooltip
                  formatter={(v) => [`$${v}B`, ko ? "발행 규모" : "Issuance Volume"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <Bar dataKey="volume" radius={[4, 4, 0, 0]}>
                  {issuanceData.map((entry, i) => (
                    <Cell key={i} fill={entry.year === "2013" ? ACCENT_DARK : ACCENT} opacity={entry.year === "2013" ? 1 : 0.75} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              { l: ko ? "2013 첫 발행" : "2013 Debut", v: "$17B", bg: "bg-blue-50 dark:bg-blue-900/20", c: "text-blue-700 dark:text-blue-300" },
              { l: ko ? "누적 총계" : "Cumulative Total", v: "$100B+", bg: "bg-gray-50 dark:bg-gray-800", c: "text-gray-700 dark:text-gray-200" },
              { l: ko ? "2022 고금리 영향" : "2022 Rate Impact", v: "$5.5B", bg: "bg-amber-50 dark:bg-amber-900/20", c: "text-amber-700 dark:text-amber-300" },
            ].map((c) => (
              <div key={c.l} className={`rounded-xl p-3 border border-gray-100 dark:border-gray-800 ${c.bg}`}>
                <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-1">{c.l}</p>
                <p className={`text-lg font-black ${c.c}`}>{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 2: 2013 6-Tranche structure table
function TrancheTableVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const tranches = [
    { maturity: ko ? "3년 (변동)" : "3yr (FRN)", size: "$1.0B", rate: ko ? "LIBOR + 5bp" : "LIBOR +5bps", noteKo: "변동금리", noteEn: "Floating rate" },
    { maturity: ko ? "3년 (고정)" : "3yr (Fixed)", size: "$1.5B", rate: "0.45%", noteKo: "역대 최저 IG 금리", noteEn: "All-time low IG rate" },
    { maturity: ko ? "5년" : "5yr", size: "$4.0B", rate: "1.00%", noteKo: "T+40bp", noteEn: "T+40bps" },
    { maturity: ko ? "10년" : "10yr", size: "$5.5B", rate: "2.40%", noteKo: "T+75bp", noteEn: "T+75bps" },
    { maturity: ko ? "20년" : "20yr", size: "$1.0B", rate: "3.30%", noteKo: "T+99bp", noteEn: "T+99bps" },
    { maturity: ko ? "30년" : "30yr", size: "$3.0B", rate: "3.85%", noteKo: "T+100bp", noteEn: "T+100bps" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "2013년 4월 Apple $170억 회사채 — 6개 트랑쉬 구조" : "April 2013 Apple $17B Bond — 6-Tranche Structure"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="text-left py-2 px-3 text-[10px] text-gray-400 uppercase font-bold">{ko ? "만기" : "Maturity"}</th>
                  <th className="text-right py-2 px-3 text-[10px] text-gray-400 uppercase font-bold">{ko ? "규모" : "Size"}</th>
                  <th className="text-right py-2 px-3 text-[10px] text-gray-400 uppercase font-bold">{ko ? "금리" : "Rate"}</th>
                  <th className="text-right py-2 px-3 text-[10px] text-gray-400 uppercase font-bold">{ko ? "비고" : "Note"}</th>
                </tr>
              </thead>
              <tbody>
                {tranches.map((t, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.35, delay: i * 0.06, ease: EASE }}
                    className={`border-b border-gray-50 dark:border-gray-800/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-blue-50/30 dark:bg-blue-900/5"}`}
                  >
                    <td className="py-2.5 px-3 font-semibold text-gray-800 dark:text-gray-200">{t.maturity}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 dark:text-gray-400 font-medium">{t.size}</td>
                    <td className="py-2.5 px-3 text-right font-bold" style={{ color: ACCENT }}>{t.rate}</td>
                    <td className="py-2.5 px-3 text-right text-gray-400 dark:text-gray-500 text-[10px]">{ko ? t.noteKo : t.noteEn}</td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-blue-100 dark:border-blue-900/40">
                  <td className="py-3 px-3 font-black text-gray-900 dark:text-gray-100 text-[13px]">{ko ? "합계" : "Total"}</td>
                  <td className="py-3 px-3 text-right font-black text-[14px]" style={{ color: ACCENT }} colSpan={3}>
                    $17.0B &nbsp;
                    <span className="text-[10px] font-normal text-gray-400">
                      {ko ? "(오더북 $50B+)" : "(Orderbook $50B+)"}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/15 p-4">
            <p className="text-[11px] font-bold text-blue-700 dark:text-blue-300 mb-1">
              {ko ? "왜 3년물 0.45%가 역사적인가?" : "Why was the 3yr at 0.45% historic?"}
            </p>
            <p className="text-[11px] text-blue-600 dark:text-blue-400 leading-relaxed">
              {ko
                ? "당시 미국 3년 국채 금리가 약 0.35%였다. 미국 정부 채권과 10bp 차이밖에 없는 회사채. Aaa 등급과 QE 저금리 환경이 맞물린 결과였다."
                : "The U.S. 3-year Treasury was yielding ~0.35% at the time. A corporate bond just 10bps wide of U.S. government debt — the result of Aaa rating meeting QE-era zero rates."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 3: Tax arbitrage mechanism visual
function TaxArbitrageVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const steps = [
    {
      icon: "🍀",
      labelKo: "아일랜드 자회사",
      labelEn: "Irish Subsidiary",
      noteKo: "비미국 판매 이익 적치 (세율 2~3%)",
      noteEn: "Non-US profit accumulation (2–3% tax)",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700",
      text: "text-green-700 dark:text-green-300",
    },
    {
      icon: "📈",
      labelKo: "미국 채권 발행",
      labelEn: "U.S. Bond Issuance",
      noteKo: "0.45~3.85% 저금리, 이자 세금 공제",
      noteEn: "0.45–3.85% low rates, interest tax deductible",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      text: "text-blue-700 dark:text-blue-300",
    },
    {
      icon: "💰",
      labelKo: "주주 환원",
      labelEn: "Shareholder Returns",
      noteKo: "자사주 매입 + 배당 (EPS 40%+ 상승)",
      noteEn: "Buybacks + dividends (EPS up 40%+)",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700",
      text: "text-purple-700 dark:text-purple-300",
    },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "세금 차익거래 메커니즘 — 3단계 구조" : "Tax Arbitrage Mechanism — 3-Step Structure"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="hidden sm:flex items-start gap-3">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 relative">
                <div className={`rounded-xl border p-4 ${s.bg} ${s.border} text-center`}>
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <p className={`text-[11px] font-bold leading-tight ${s.text} mb-1`}>{ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[9px] opacity-75 leading-snug ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-300 dark:text-gray-600 text-lg font-bold">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="sm:hidden relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-blue-400 to-purple-500" />
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className={`relative rounded-xl border p-3 ${s.bg} ${s.border}`}>
                  <p className={`text-[12px] font-bold leading-tight ${s.text}`}>{s.icon} {ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[10px] mt-1 opacity-75 ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-amber-100 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/15 p-4">
            <p className="text-[11px] font-bold text-amber-700 dark:text-amber-300 mb-2">{ko ? "세금 절감 효과 비교" : "Tax Savings Comparison"}</p>
            <div className="grid grid-cols-2 gap-3 text-center">
              {[
                { l: ko ? "송금 시 세금 (구법 35%)" : "Repatriation tax (old 35%)", v: "~$33B", c: "text-red-600 dark:text-red-400" },
                { l: ko ? "채권 이자 (세후 ~0.3%)" : "Bond interest (after-tax ~0.3%)", v: "~$2-3B", c: "text-blue-600 dark:text-blue-400" },
              ].map((c) => (
                <div key={c.l}>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-1">{c.l}</p>
                  <p className={`text-lg font-black ${c.c}`}>{c.v}</p>
                  <p className="text-[8px] text-gray-400">{ko ? "(per $100B)" : "(per $100B)"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chart 4: TCJA before/after impact
function TcjaImpactVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    {
      icon: "🏛️",
      labelKo: "TCJA 이전 (2013~2017)",
      labelEn: "Pre-TCJA (2013–2017)",
      textKo: "해외 현금 본국 송금 시 35% 법인세 부과 → 채권 발행이 세금 최적화의 핵심 수단",
      textEn: "35% corporate tax on overseas profit repatriation → bond issuance as primary tax optimization tool",
      color: "text-amber-700 dark:text-amber-300",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
    },
    {
      icon: "⚡",
      labelKo: "TCJA 충격 (2018)",
      labelEn: "TCJA Shock (2018)",
      textKo: "일회성 송금세 도입: 현금성 자산 15.5% 적용 → Apple $2,520억 송금, $380억 세금 납부",
      textEn: "One-time Transition Tax: 15.5% on liquid assets → Apple repatriated $252B, paid $38B in taxes",
      color: "text-red-700 dark:text-red-300",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-700",
    },
    {
      icon: "🔄",
      labelKo: "TCJA 이후 (2019~)",
      labelEn: "Post-TCJA (2019–)",
      textKo: "세금 차익 동기 감소 → 자본 구조 다양화·EPS 관리·기관 투자자 관계 목적으로 채권 발행 지속",
      textEn: "Tax arbitrage motive reduced → bond issuance continues for capital structure diversification, EPS management, institutional investor relations",
      color: "text-blue-700 dark:text-blue-300",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
    },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "TCJA 세제 개혁 전후 — 전략 변화" : "Before & After TCJA Tax Reform — Strategy Evolution"}
          </p>
        </div>
        <div className="p-5 sm:p-8 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }}
              className={`rounded-xl border p-4 ${item.bg} ${item.border}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1">
                  <p className={`text-[13px] font-bold ${item.color} mb-1.5`}>{ko ? item.labelKo : item.labelEn}</p>
                  <p className={`text-[12px] leading-relaxed ${item.color} opacity-90`}>{ko ? item.textKo : item.textEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Chart 5: Legacy / paradigm shift
function ParadigmShiftVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    { icon: "🍎", labelKo: "Apple (2013)", labelEn: "Apple (2013)", noteKo: "$170억 — '현금 많은 회사도 빚 진다' 정상화", noteEn: "$17B — normalized 'cash-rich companies borrow too'" },
    { icon: "🪟", labelKo: "Microsoft (2013~)", labelEn: "Microsoft (2013–)", noteKo: "유사 전략 채택 — 해외 현금 보유 + 국내 채권", noteEn: "Adopted similar strategy — overseas cash + domestic bonds" },
    { icon: "🔱", labelKo: "Oracle·Cisco·Qualcomm", labelEn: "Oracle·Cisco·Qualcomm", noteKo: "2010년대 표준 전략으로 확산", noteEn: "Spread as standard strategy through the 2010s" },
    { icon: "💊", labelKo: "제약 업계 (화이자·머크)", labelEn: "Pharma (Pfizer·Merck)", noteKo: "기술 기업 너머 제약·소비재로 확산", noteEn: "Spread beyond tech to pharma and consumer goods" },
  ];
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "Apple이 열어젖힌 자본 배분 패러다임 — 모방 기업들" : "Capital Allocation Paradigm Apple Opened — Companies That Followed"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4"
              >
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-[12px] font-bold text-blue-700 dark:text-blue-300 mb-1">{ko ? item.labelKo : item.labelEn}</p>
                <p className="text-[10px] text-blue-600 dark:text-blue-400 opacity-80">{ko ? item.noteKo : item.noteEn}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10 p-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { l: ko ? "S&P 500 해외 유보 현금 (2010년대)" : "S&P 500 Offshore Cash (2010s)", v: "$2.5T", c: "text-blue-700 dark:text-blue-300" },
                { l: ko ? "Apple 누적 자사주 매입" : "Apple Cumulative Buybacks", v: "$550B+", c: "text-gray-700 dark:text-gray-200" },
                { l: ko ? "주식수 감소 (2013~2023)" : "Share Count Reduction", v: "~40%", c: "text-blue-700 dark:text-blue-300" },
              ].map((c) => (
                <div key={c.l}>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-1">{c.l}</p>
                  <p className={`text-lg font-black ${c.c}`}>{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getVisual(i: number, lang: Lang) {
  const visuals = [
    <IssuanceVolumeChart key="0" lang={lang} />,
    <TrancheTableVisual key="1" lang={lang} />,
    <TaxArbitrageVisual key="2" lang={lang} />,
    <TcjaImpactVisual key="3" lang={lang} />,
    <ParadigmShiftVisual key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

const FALLBACK_FAQ = [
  {
    q: "현금이 넘치는데 왜 채권을 발행했나요?",
    qEn: "Why issue bonds when Apple had so much cash?",
    a: "애플의 $1,450억 현금 대부분은 아일랜드·싱가포르 등 해외에 있었습니다. 이를 미국으로 가져오면 당시 35%의 법인세를 내야 했습니다. $1,000억 송금 시 세금 $330억 vs 채권 이자 $20~30억 — 채권 발행이 압도적으로 유리한 계산이었습니다. 해외 현금은 그대로 두고, 미국에서 저금리로 빌려 주주 환원에 쓰는 전략이었습니다.",
    aEn: "Most of Apple's $145 billion cash was held overseas in Ireland, Singapore, and elsewhere. Bringing it to the U.S. would have triggered 35% corporate repatriation tax. For $100B repatriated: ~$33B in taxes vs ~$2–3B in bond interest — bonds were overwhelmingly more efficient. Leave offshore cash in place, borrow cheap in the U.S., and return capital to shareholders.",
  },
  {
    q: "2017년 세제 개혁 이후에도 애플이 채권을 발행하는 이유는?",
    qEn: "Why does Apple continue issuing bonds even after the 2017 tax reform?",
    a: "세제 개혁으로 주된 세금 차익 동기는 줄었지만, 채권 발행은 그 자체로 유용한 자본 배분 수단이 됐습니다. 자본구조 다양화, EPS 관리(주식 희석 방지), 기관 투자자와의 지속적 관계 유지, 특정 만기 금리 고정으로 이자 비용 예측 가능성 확보 등이 이유입니다.",
    aEn: "The primary tax arbitrage motivation diminished with tax reform, but bond issuance became a useful capital allocation tool in its own right: capital structure diversification, EPS management (avoiding equity dilution), maintaining ongoing relationships with institutional investors, and locking in fixed rates for predictable interest cost forecasting.",
  },
  {
    q: "Apple 채권은 미국 국채보다 얼마나 높은 금리를 줬나요?",
    qEn: "How did Apple bond pricing compare to U.S. Treasuries?",
    a: "2013년 발행 당시, 3년물 Apple 채권은 0.45%였고 같은 만기 미국 국채는 약 0.35%였습니다. 스프레드가 불과 10bp. 10년물은 국채 대비 약 75bp 가산이었습니다. Aaa/AAA 최고 등급 덕분에 미국 국채에 가장 근접한 민간 채권으로 평가받았습니다.",
    aEn: "At the 2013 issuance, the 3-year Apple bond priced at 0.45% vs. ~0.35% for comparable U.S. Treasuries — just 10bps of spread. The 10-year came at ~75bps over Treasuries. As a Aaa/AAA-rated issuer, Apple bonds were considered the closest private-sector equivalent to U.S. government debt.",
  },
  {
    q: "이 전략이 다른 기업들에게도 표준이 됐나요?",
    qEn: "Did this strategy become common across the tech industry?",
    a: "네. 2010년대 미국 대형 기술·제약 기업들에게 '해외 현금 보유 + 국내 채권 발행'은 표준 재무 전략이 됐습니다. Microsoft·Oracle·Cisco·Qualcomm·화이자·머크 등이 모두 유사 전략을 채택했습니다. S&P 500 기업들의 총 해외 유보 현금이 $2.5조에 달했던 것도 이 배경입니다. TCJA(2017)가 이 트렌드를 부분적으로 해소했지만, 채권 발행을 통한 자본 배분 관행은 지속됐습니다.",
    aEn: "Yes. 'Hold overseas cash + issue domestic bonds' became the standard financial strategy for large U.S. tech and pharma companies in the 2010s. Microsoft, Oracle, Cisco, Qualcomm, Pfizer, and Merck all adopted similar strategies. The $2.5T in total S&P 500 offshore cash reflects this trend. TCJA (2017) partially resolved it, but the underlying capital allocation practice has endured.",
  },
];

export default function AppleBondStrategyClient({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
  const ko = lang === "ko";

  const faqItems =
    deal.faq && deal.faq.length > 0
      ? deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))
      : FALLBACK_FAQ.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }));

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero / breadcrumb */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market" : "/en/market"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "SOE·기업" : "SOE & Corporate"}</span>
            </div>

            {/* Category badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: ACCENT_LIGHT, color: ACCENT }}
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
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Top share buttons */}
        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-6 mt-4">
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
        </div>

        {/* Executive Summary */}
        {deal.executiveSummary && (
          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={VP} className="max-w-3xl mx-auto px-5 pt-4">
            <div className="rounded-xl border-l-4 px-5 py-4" style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-blue-800 dark:text-blue-200">
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
            <motion.div variants={fadeUp(0.05)} className="rounded-2xl overflow-hidden border-2 border-blue-100 dark:border-blue-900/40">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  {ko ? "Apple 채권 전략 — 핵심 수치" : "Apple Bond Strategy — Key Figures"}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-blue-100 dark:divide-blue-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div
                    key={row.labelKo}
                    variants={fadeUp(i * 0.06)}
                    className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{ko ? row.labelKo : row.labelEn}</p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">{ko ? row.value : (row.valueEn ?? row.value)}</p>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 divide-x divide-blue-100 dark:divide-blue-900/30 border-t-2 border-blue-100 dark:border-blue-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "첫 발행 규모" : "Debut Size"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">$17B</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "누적 발행" : "Cumulative"}</p>
                  <p className="text-2xl font-black" style={{ color: ACCENT }}>$100B+</p>
                </div>
                <div className="px-4 py-4 text-center bg-blue-50 dark:bg-blue-900/20">
                  <p className="text-[10px] text-blue-500 dark:text-blue-400 uppercase font-bold mb-1">{ko ? "등급" : "Rating"}</p>
                  <p className="text-lg font-black text-blue-600 dark:text-blue-400">Aaa/AAA</p>
                  <p className="text-[9px] mt-0.5 text-blue-500 dark:text-blue-400">Moody&apos;s / S&P</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Content Sections */}
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
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
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
            <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
            <div className="mt-2 space-y-3">
              {deal.keyTerms.map((term, i) => (
                <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">{ko ? term.term : term.termEn}</span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                    {ko ? term.definition : term.definitionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Deal Assessment */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-blue-200 dark:border-blue-700/50 bg-blue-50 dark:bg-blue-900/15 p-5">
                  <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                    {ko ? "긍정적 결과" : "Positives"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-blue-800 dark:text-blue-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5">
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

          {/* Mid share buttons */}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
            </motion.h2>
            <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
            <FaqAccordion items={faqItems} accent={ACCENT} />
          </motion.section>

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
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-[11px] font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-[11px] font-bold text-teal-600 dark:text-teal-400 flex-shrink-0">101</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-sm flex-shrink-0">→</span>
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
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ background: ACCENT_DARK }}>
                      {ref.id}
                    </span>
                    <span>
                      {ref.author && <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: ACCENT }}>
                          {ref.title}
                        </a>
                      ) : (
                        <span>{ref.title}</span>
                      )}
                      {ref.source && <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>}
                      {ref.year && <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>}
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
