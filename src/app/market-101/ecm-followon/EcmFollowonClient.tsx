"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";

// ── Types ──────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Constants ──────────────────────────────────────────────────────────────────
const ACCENT = "#3182f6";
const THIS_CH = "ecm-followon";

// ── Animation ──────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── ECM Series Nav ─────────────────────────────────────────────────────────────
const ECM_SERIES = [
  { slug: "ecm-overview",              ch: 0,  title: (ko: boolean) => ko ? "ECM 개요"        : "ECM Overview"    },
  { slug: "ecm-ipo-issuers",           ch: 1,  title: (ko: boolean) => ko ? "Ch.1 발행사"     : "Ch.1 Issuers"    },
  { slug: "ecm-ipo-investors",         ch: 2,  title: (ko: boolean) => ko ? "Ch.2 투자자"     : "Ch.2 Investors"  },
  { slug: "ecm-ipo-valuation",         ch: 3,  title: (ko: boolean) => ko ? "Ch.3 밸류에이션" : "Ch.3 Valuation"  },
  { slug: "ecm-ipo-process",           ch: 4,  title: (ko: boolean) => ko ? "Ch.4 프로세스"   : "Ch.4 Process"    },
  { slug: "ecm-ipo-bookbuilding",      ch: 5,  title: (ko: boolean) => ko ? "Ch.5 북빌딩"     : "Ch.5 Book-Build" },
  { slug: "ecm-ipo-post",              ch: 6,  title: (ko: boolean) => ko ? "Ch.6 포스트-IPO" : "Ch.6 Post-IPO"   },
  { slug: "ecm-followon",              ch: 7,  title: (ko: boolean) => ko ? "Ch.7 팔로우온"   : "Ch.7 Follow-on"  },
  { slug: "ecm-convertible",           ch: 8,  title: (ko: boolean) => ko ? "Ch.8 전환사채"   : "Ch.8 Convertible"},
  { slug: "ecm-international-listing", ch: 9,  title: (ko: boolean) => ko ? "Ch.9 국제상장"   : "Ch.9 Intl"       },
  { slug: "ecm-spac-direct",           ch: 10, title: (ko: boolean) => ko ? "Ch.10 SPAC"      : "Ch.10 SPAC"      },
];

// ── Chapter anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "ch1", ko: "30초 요약",        en: "30-Second Brief"    },
  { id: "ch2", ko: "왜 계속 파는가",   en: "Why Keep Selling"   },
  { id: "ch3", ko: "ABB 하룻밤 딜",    en: "ABB Overnight Deal" },
  { id: "ch4", ko: "PE 엑싯 경로",     en: "PE Exit Path"       },
  { id: "ch5", ko: "유상증자",         en: "Rights Issue"       },
  { id: "ch6", ko: "글로벌 시장 구조", en: "Global Market"      },
];

// ── ABB Timeline data ──────────────────────────────────────────────────────────
const ABB_TIMELINE = [
  { hour: "0h",     ko: "결정",         en: "Decision",          pct: 10  },
  { hour: "1h",     ko: "Mandate",      en: "Mandate",           pct: 20  },
  { hour: "2–3h",   ko: "투자자 연락",  en: "Investor outreach", pct: 40  },
  { hour: "6–8h",   ko: "IOI 수집",     en: "IOI collected",     pct: 70  },
  { hour: "10–11h", ko: "가격 결정",    en: "Pricing (3–5%)",    pct: 90  },
  { hour: "12h",    ko: "완료",         en: "Done",              pct: 100 },
];

// ── PE Exit comparison data ────────────────────────────────────────────────────
const PE_EXIT = [
  { method: (ko: boolean) => ko ? "IPO"      : "IPO",       premium: 100, color: "#3182f6" },
  { method: (ko: boolean) => ko ? "ABB"      : "ABB",       premium: 72,  color: "#8b5cf6" },
  { method: (ko: boolean) => ko ? "M&A"      : "M&A",       premium: 110, color: "#10b981" },
  { method: (ko: boolean) => ko ? "2차 매각" : "Secondary", premium: 60,  color: "#f59e0b" },
];

// ── Global follow-on volumes ───────────────────────────────────────────────────
const REGION_VOLS = [
  { region: (ko: boolean) => ko ? "북미"          : "North America", vol: 250, color: "#3182f6" },
  { region: (ko: boolean) => ko ? "유럽"          : "Europe",        vol: 180, color: "#8b5cf6" },
  { region: (ko: boolean) => ko ? "아시아-태평양" : "Asia-Pacific",  vol: 130, color: "#10b981" },
  { region: (ko: boolean) => ko ? "신흥국"        : "EM",            vol:  40, color: "#f59e0b" },
];

// ── Rights Issue comparison rows ───────────────────────────────────────────────
const RIGHTS_ROWS = [
  {
    label:   (ko: boolean) => ko ? "할인율"          : "Discount",
    rights:  (ko: boolean) => ko ? "20~40%"          : "20–40%",
    general: (ko: boolean) => ko ? "5~10%"           : "5–10%",
  },
  {
    label:   (ko: boolean) => ko ? "배정 대상"       : "Target",
    rights:  (ko: boolean) => ko ? "기존 주주"       : "Existing shareholders",
    general: (ko: boolean) => ko ? "기관 일반 투자자" : "Institutional / public",
  },
  {
    label:   (ko: boolean) => ko ? "기간"            : "Timeline",
    rights:  (ko: boolean) => ko ? "3~6주"           : "3–6 weeks",
    general: (ko: boolean) => ko ? "2~5일"           : "2–5 days",
  },
  {
    label:   (ko: boolean) => ko ? "희석 방어"       : "Dilution protection",
    rights:  (ko: boolean) => ko ? "참여 시 희석 없음" : "None if you participate",
    general: (ko: boolean) => ko ? "불참 시 희석"    : "Diluted if absent",
  },
  {
    label:   (ko: boolean) => ko ? "사용 예"         : "Common use",
    rights:  (ko: boolean) => ko ? "자본 확충 (은행·건설사)" : "Capital rebuild (banks, construction)",
    general: (ko: boolean) => ko ? "성장 투자 (테크)" : "Growth investment (tech)",
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "ABB와 IPO의 IB 수수료 차이는 무엇인가요?",
    a: "IPO 수수료는 조달액의 3.5~7%에 달하지만, ABB 수수료는 0.5~1.5% 수준입니다. ABB는 실사, S-1 작성, SEC 심사, 6주 로드쇼 없이 하룻밤에 끝나기 때문입니다. 다만 ABB에서 IB는 미매각 물량을 자기 계좌로 인수하는 리스크를 부담합니다. 수수료가 낮은 대신 overnight gap-down 리스크가 IB의 수익성을 좌우합니다.",
  },
  {
    q: "블록 트레이드 후 주가가 떨어지는 이유는 무엇인가요?",
    a: "두 가지 메커니즘이 작동합니다. 첫째, 딜 자체의 할인(3~5%)이 시장 기준점이 되어 즉각적인 주가 하락 압력을 만듭니다. 둘째, 대량 보유자가 매각했다는 사실이 '더 팔 물량이 남아 있나'라는 오버행(Overhang) 불안을 촉발합니다. 특히 PE 펀드가 단계적 매각 중인 경우, 각 블록 트레이드마다 주가가 눌리는 현상이 반복됩니다. 반대로 전략적으로 큰 블록을 한 번에 매각 완료했다고 공표하면 오버행이 해소되어 주가가 반등하기도 합니다.",
  },
  {
    q: "유상증자에 참여 안 하면 무조건 손해인가요?",
    a: "반드시 그렇지는 않습니다. 유상증자 참여 여부는 두 가지를 고려해야 합니다. ① 희석 손실: 참여하지 않으면 지분율이 줄어들고, 할인 발행으로 인해 기존 주식의 가치도 희석됩니다. ② 자금 조달 목적: 회사가 왜 유상증자를 하는가가 더 중요합니다. M&A 자금·성장 투자처럼 ROE를 높이는 목적이라면 참여가 유리하지만, 부채 상환이나 손실 보전 목적이라면 참여해도 장기적으로 가치 훼손이 올 수 있습니다. 한국 시장에서는 유상증자 공시 이후 주가가 급락하는 사례가 많은데, 이는 시장이 희석 부분보다 '왜 유상증자를 해야 하나'라는 펀더멘털 우려를 더 반영하는 것입니다.",
  },
  {
    q: "ATM 프로그램의 장단점은 무엇인가요?",
    a: "ATM(At-The-Market) 프로그램은 상장사가 시장 가격으로 수시로 소량씩 주식을 매각하는 방식입니다. 장점: ① 주가 충격 없이 자금 조달 가능(대형 블록 없이 소량 분산), ② 주가가 높을 때 타이밍 선택 가능, ③ 공시 부담 최소화. 단점: ① 대규모 자금 조달에 부적합(속도 느림), ② 시장 유동성이 낮은 소형주에는 가격 영향이 큼, ③ 지속적인 주식 희석에 대한 투자자 불만 가능. 미국 테크·바이오 기업들이 많이 활용하며, 한국에서는 상시 발행 제도가 미비해 ATM 활용이 상대적으로 드뭅니다.",
  },
  {
    q: "한국 상장사의 유상증자가 선진국 대비 많은 이유는 무엇인가요?",
    a: "크게 세 가지 구조적 요인이 있습니다. ① 자본 구조 특성: 한국 기업들은 전통적으로 부채 비율이 높고, 위기 시 자기자본 확충 수단으로 유상증자를 선호합니다. ② 규제 환경: 한국 금융당국이 요구하는 자본 적정성 기준을 맞추기 위해 은행·건설사가 주기적으로 유상증자를 합니다. ③ 무상증자 문화: 실질 자금 조달 없이 주가 관리 목적의 무상증자(Bonus Issue)가 빈번하고, 이후 주가 조정 시 다시 유상증자로 이어지는 패턴이 반복됩니다. 주주환원(배당·자사주 소각) 문화가 선진국 대비 약한 것도 자본 배분의 비효율을 낳아 유상증자 빈도를 높입니다.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function SeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {ECM_SERIES.map((ch) => (
            <Link
              key={ch.slug}
              href={`${ko ? "" : "/en"}/market-101/${ch.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                ch.slug === THIS_CH
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {ch.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="max-w-3xl mx-auto px-5 overflow-x-auto mb-2">
      <div className="flex gap-1 py-1 min-w-max">
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            {ko ? ch.ko : ch.en}
          </a>
        ))}
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 min-w-[130px] rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 px-4 py-3 text-center">
      <p className="text-[20px] font-black text-blue-700 dark:text-blue-300 leading-none mb-1">{value}</p>
      <p className="text-[10px] text-blue-600 dark:text-blue-400 leading-tight">{label}</p>
    </div>
  );
}

function AnalogyBox({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl border border-amber-200 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-900/10 px-5 py-4">
      <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
        {ko ? "비유로 이해하기" : "Analogy"}
      </p>
      <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
        {ko
          ? "아파트 분양(IPO)이 끝난 후에도 시행사(발행사)가 자금이 더 필요하면 새 아파트(주식)를 더 짓거나, 기존 주주(PE 펀드)가 보유 아파트를 팔 수 있다. 전세처럼 일정 조건을 붙이거나(유상증자), 매매처럼 빠르게 시장에 내놓을 수 있다(블록 트레이드). 핵심은 시장 상황이 좋을 때 팔아야 한다는 것이다."
          : "Even after the initial apartment sale (IPO), the developer (issuer) can build more units (shares) if it needs more capital, or existing owners (PE funds) can sell their units. They can attach conditions like a lease (rights issue) or quickly list on the market (block trade). The key: sell when the market is good."}
      </p>
    </motion.div>
  );
}

function AbbTimelineChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "ABB 타임라인 — 0시간에서 완료까지 (진행도 %)" : "ABB Timeline — Hour 0 to Completion (progress %)"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={ABB_TIMELINE} margin={{ top: 8, right: 8, left: -16, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="hour" tick={{ fontSize: 10, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} domain={[0, 100]} unit="%" />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${value}%`, ko ? "진행도" : "Progress"]}
              contentStyle={{ fontSize: 11, borderRadius: 8 }}
            />
            <Bar dataKey="pct" radius={[4, 4, 0, 0]}>
              {ABB_TIMELINE.map((_, i) => (
                <Cell key={i} fill={i === ABB_TIMELINE.length - 1 ? ACCENT : `${ACCENT}99`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ABB_TIMELINE.map((row) => (
            <div key={row.hour} className="flex items-center gap-2 text-[11px]">
              <span className="font-bold text-blue-600 dark:text-blue-400 w-10 flex-shrink-0">{row.hour}</span>
              <span className="text-gray-600 dark:text-gray-400">{ko ? row.ko : row.en}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PracticeBox({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl border border-blue-200 dark:border-blue-700/60 bg-blue-50/50 dark:bg-blue-900/10 px-5 py-4">
      <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
        Practice
      </p>
      <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-3">{title}</p>
      <ol className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[12px] text-gray-700 dark:text-gray-300">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold mt-0.5">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

function PeExitChart({ ko }: { ko: boolean }) {
  const data = PE_EXIT.map((d) => ({
    method: d.method(ko),
    premium: d.premium,
    color: d.color,
  }));
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "PE 엑싯 방법 비교 — 가격 프리미엄 (상대값)" : "PE Exit Method Comparison — Price Premium (Relative)"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="method" tick={{ fontSize: 11, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} domain={[0, 120]} />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${value}`, ko ? "상대 프리미엄" : "Relative premium"]}
              contentStyle={{ fontSize: 11, borderRadius: 8 }}
            />
            <Bar dataKey="premium" radius={[4, 4, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            { ko: "IPO: 프리미엄 최대 but 18개월 소요, 락업 필요",    en: "IPO: highest premium but 18 months + lock-up required", color: "#3182f6" },
            { ko: "ABB: 하룻밤 but 3~5% 할인",                       en: "ABB: overnight but 3–5% discount",                      color: "#8b5cf6" },
            { ko: "M&A: 가장 높은 가격 but 규제 리스크",              en: "M&A: best price but regulatory risk",                   color: "#10b981" },
            { ko: "2차 매각: 다른 PE에게, 시간 보통",                 en: "Secondary: sell to another PE, medium timeline",        color: "#f59e0b" },
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-2 text-[11px] text-gray-600 dark:text-gray-400">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: row.color }} />
              {ko ? row.ko : row.en}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function RightsComparisonTable({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "Rights Issue vs General Cash Offering 비교" : "Rights Issue vs General Cash Offering"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200/60 dark:border-gray-700/60">
              <th className="text-left px-5 py-3 text-gray-500 dark:text-gray-400 font-semibold w-32">
                {ko ? "구분" : "Category"}
              </th>
              <th className="text-left px-4 py-3 text-blue-700 dark:text-blue-300 font-bold">
                {ko ? "Rights Issue (주주배정)" : "Rights Issue"}
              </th>
              <th className="text-left px-4 py-3 text-violet-700 dark:text-violet-300 font-bold">
                {ko ? "General (일반공모)" : "General Cash Offering"}
              </th>
            </tr>
          </thead>
          <tbody>
            {RIGHTS_ROWS.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 dark:border-gray-800 ${
                  i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"
                }`}
              >
                <td className="px-5 py-3 text-gray-500 dark:text-gray-400 font-medium">{row.label(ko)}</td>
                <td className="px-4 py-3 text-blue-700 dark:text-blue-300">{row.rights(ko)}</td>
                <td className="px-4 py-3 text-violet-700 dark:text-violet-300">{row.general(ko)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function GlobalVolumeChart({ ko }: { ko: boolean }) {
  const data = REGION_VOLS.map((d) => ({
    region: d.region(ko),
    vol: d.vol,
    color: d.color,
  }));
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko
            ? "글로벌 팔로우온 시장 — 지역별 연간 규모 (USD Bn)"
            : "Global Follow-on Market — Annual Volume by Region (USD Bn)"}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="region" tick={{ fontSize: 11, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} unit="B" />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`$${value}B`, ko ? "팔로우온 규모" : "Follow-on Volume"]}
              contentStyle={{ fontSize: 11, borderRadius: 8 }}
            />
            <Bar dataKey="vol" radius={[4, 4, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-t border-blue-100 dark:border-blue-800">
        <p className="text-[12px] text-blue-700 dark:text-blue-300 text-center leading-relaxed">
          {ko
            ? "글로벌 팔로우온 시장 연간 규모 합계 ~$600B — 북미가 전체의 약 42%를 차지하며 가장 큰 시장이다."
            : "Global follow-on market annual total ~$600B — North America accounts for ~42% of total volume, the largest single market."}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmFollowonClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";

  const abbPracticeItems = ko
    ? [
        "마켓 클로즈 후 — 세일즈팀에 딜 알림 및 기관 투자자 리스트 작성",
        "CEO/CFO에게 딜 구조 및 할인율 피칭 (IB 경쟁사 대비 조건 비교)",
        "IOI(투자 의향서) 수집 — 기관별 수량 및 가격 밴드 집계",
        "새벽 Pricing — 수요 기반으로 최종 할인율 3~5% 결정",
        "아침 7시 완료 보고 및 배분(Allocation) 확정",
      ]
    : [
        "Post-market close — alert Sales team and build institutional investor target list",
        "Pitch CEO/CFO on deal structure and discount vs competitor banks",
        "Collect IOIs (Indications of Interest) — aggregate volume and price band by institution",
        "Pre-dawn pricing — determine final 3–5% discount based on demand",
        "7 AM completion report and Allocation finalization",
      ];

  const mdPrincipleItems = ko
    ? [
        "주가가 IPO가 대비 +20% 이상일 때 — 할인 여력이 생기고 투자자도 참여 동기가 생긴다",
        "시장 변동성(VIX)이 낮을 때 — 하룻밤 사이 주가 급변 리스크가 낮아야 ABB가 가능하다",
        "회사 실적 발표 직후 (Lock-up window 내) — 정보 비대칭이 가장 낮은 시점을 노린다",
      ]
    : [
        "When the stock is +20% or more above the IPO price — creates discount headroom and investor incentive to participate",
        "When market volatility (VIX) is low — overnight gap-down risk must be manageable for ABB to work",
        "Right after an earnings release (within the lock-up window) — information asymmetry is lowest at this moment",
      ];

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* JSON-LD: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: ko ? concept.title : concept.titleEn,
              description: ko ? concept.excerpt : concept.excerptEn,
              author: { "@type": "Organization", name: "Deal Story" },
              publisher: { "@type": "Organization", name: "Deal Story" },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ko
                  ? "https://dealstory.io/market-101/ecm-followon"
                  : "https://dealstory.io/en/market-101/ecm-followon",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "팔로우온" : "Follow-on"}</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              ECM Ch.7
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {concept.titleEn}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/market-101/ecm-followon"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-followon"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        </div>

        <SeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Ch.1 — 30초 요약 */}
          <motion.section id="ch1" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "30초 요약 — 팔로우온이란" : "30-Second Brief — What Is a Follow-on"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-3 mb-6">
              <StatCard value={ko ? "~12시간" : "~12 hrs"} label={ko ? "ABB 실행 시간" : "ABB execution time"} />
              <StatCard value="3–5%" label={ko ? "ABB 할인율" : "ABB discount"} />
              <StatCard value="~$600B" label={ko ? "글로벌 팔로우온 연간 규모" : "Global follow-on annual volume"} />
              <StatCard value="40–50%" label={ko ? "PE 엑싯 중 블록 트레이드 비중" : "PE exits via block trade"} />
            </motion.div>

            <div className="pl-4 border-l-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "팔로우온(Follow-on Offering)은 이미 상장된 기업이나 기존 주주가 추가로 주식을 공개 시장에 매각하는 행위 전반을 말한다. IPO가 '첫 번째 상장'이라면 팔로우온은 그 이후 반복되는 자본시장 접근이다.",
                      "팔로우온에는 크게 세 가지 방식이 있다. ABB(Accelerated Book Building, 장 마감 후 하룻밤 진행), 블록 트레이드(대규모 지분 블록 매각), 유상증자(Rights Issue · General Cash Offering, 3~6주 소요). ATM(At-The-Market) 프로그램처럼 수시로 소량씩 매각하는 방식도 있다.",
                      "발행사 입장에서는 M&A 자금이나 성장 투자를 위해, 기존 주주(PE·창업자) 입장에서는 보유 지분을 현금화하기 위해 팔로우온을 활용한다. 속도가 빠를수록 할인율이 크고, 시간이 길수록 할인율이 낮아지는 '속도-가격' 트레이드오프가 핵심이다.",
                    ]
                  : [
                      "A follow-on offering refers to any sale of additional shares into the public market by a listed company or its existing shareholders. If an IPO is the 'first listing,' a follow-on is every subsequent access to the capital markets.",
                      "There are three main forms: ABB (Accelerated Book Building, completed overnight after market close), block trade (large block of shares sold in bulk), and rights issue / general cash offering (3–6 weeks). ATM (At-The-Market) programs allow continuous small-scale sales.",
                      "Issuers use follow-ons to fund M&A or growth investments; existing shareholders (PE funds, founders) use them to monetize their holdings. The core trade-off is speed vs. price: faster execution means deeper discounts, slower execution allows tighter pricing.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Ch.2 — 왜 계속 파는가 */}
          <motion.section id="ch2" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "왜 IPO 이후에도 계속 주식을 파는가" : "Why Keep Selling Shares After the IPO"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <AnalogyBox ko={ko} />

            <div className="pl-4 border-l-2 mt-6" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "발행사(회사)가 팔로우온을 선택하는 이유는 크게 세 가지다. 첫째, M&A 자금 조달 — 인수합병에 필요한 현금을 신주 발행으로 마련한다. 둘째, 부채 상환 — 레버리지를 낮추기 위해 주식을 팔아 채권 상환 재원을 확보한다. 셋째, 성장 투자 — 설비 투자·연구개발·신시장 진출에 필요한 자본을 조달한다.",
                      "기존 주주(PE 펀드·창업자·전략적 투자자)가 팔로우온을 원하는 이유는 단순하다 — 보유 지분을 현금으로 바꾸는 것이다. IPO 때 락업(통상 6개월)이 걸려 있던 물량이 해제되면, PE 펀드는 IRR 실현을 위해 단계적으로 매각에 나선다.",
                      "투자자가 주의해야 할 것은 '희석(Dilution)'이다. 신주가 발행되면 기존 주주의 지분율이 줄어든다. 발행 목적이 좋은 투자처에 대한 자금 조달이라면 희석이 장기적으로 상쇄될 수 있지만, 단순 부채 상환이라면 기존 주주에게 불리하다.",
                    ]
                  : [
                      "Issuers choose follow-ons for three main reasons. First, M&A funding — raising cash for acquisitions through new share issuance. Second, debt repayment — selling equity to reduce leverage and fund bond redemptions. Third, growth investment — raising capital for capex, R&D, or market expansion.",
                      "Existing shareholders (PE funds, founders, strategic investors) want follow-ons for a simple reason: to convert holdings into cash. Once the lock-up from the IPO (typically 6 months) expires, PE funds begin staged exits to realize IRR.",
                      "Investors must watch for dilution. New share issuance reduces existing shareholders' ownership percentage. If the proceeds fund attractive investments, long-term value creation can offset dilution — but if the purpose is simply debt repayment, the trade-off is unfavorable for existing shareholders.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Key reasons grid */}
            <motion.div variants={fadeUp(0.1)} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(ko
                ? [
                    { icon: "🏢", title: "발행사 동기", items: ["M&A 자금 조달", "부채 상환 (De-leverage)", "설비·R&D 투자"] },
                    { icon: "💼", title: "기존 주주 동기", items: ["PE 펀드 IRR 실현", "창업자 유동성 확보", "전략적 투자자 엑싯"] },
                  ]
                : [
                    { icon: "🏢", title: "Issuer Motivations", items: ["M&A financing", "Debt repayment (de-leverage)", "Capex / R&D investment"] },
                    { icon: "💼", title: "Shareholder Motivations", items: ["PE fund IRR realization", "Founder liquidity", "Strategic investor exit"] },
                  ]
              ).map((card) => (
                <div key={card.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                  <div className="text-xl mb-2">{card.icon}</div>
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-2">{card.title}</p>
                  <ul className="space-y-1">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[12px] text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* Ch.3 — ABB */}
          <motion.section id="ch3" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "ABB: 하룻밤 딜" : "ABB: The Overnight Deal"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "ABB(Accelerated Book Building)는 장 마감 직후부터 다음날 장 시작 전까지, 통상 12~24시간 안에 대규모 지분 블록을 기관 투자자에게 매각하는 방식이다. 시장가 대비 3~5% 할인된 가격으로 신속하게 매각하는 것이 핵심이다.",
                      "투자자 입장에서는 ABB가 매력적인 기회다. 유동성이 좋은 대형 블록을 시장가보다 3~5% 낮은 가격에 살 수 있기 때문이다. 반면 IB 입장에서는 리스크가 있다. 수요를 충분히 모으지 못하면 미매각 물량을 자기 계좌(IB 포지션)로 인수해야 하고, 다음날 주가가 하락하면 그 손실이 IB에 귀속된다.",
                      "삼성물산 블록 트레이드 사례: 대규모 PE 펀드가 보유 지분을 해소할 때 ABB 방식이 자주 활용된다. 한 번에 수조 원 규모의 지분을 시장에 내놓으면 주가가 급락하기 때문에, 하룻밤 북빌딩을 통해 기관 투자자에게 신속히 분산 배분하는 것이 가격 충격을 최소화하는 방법이다.",
                    ]
                  : [
                      "ABB (Accelerated Book Building) is the sale of a large share block to institutional investors in the window between market close and the next day's open — typically within 12–24 hours. The key: a 3–5% discount to market price in exchange for speed.",
                      "For investors, ABBs are attractive opportunities: a chance to buy a large, liquid block at 3–5% below market. For IB, however, there is real risk — if demand is insufficient, the bank must take unsold stock onto its own books, and any overnight price decline becomes the bank's loss.",
                      "Samsung C&T block trade case: when large PE funds need to unwind major stakes, ABB is a common mechanism. Dumping trillions of won worth of shares onto the open market would crater the price — an overnight book build that distributes stock across institutional investors minimizes price impact.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AbbTimelineChart ko={ko} />

            <PracticeBox
              title={ko ? "Associate가 ABB 밤에 하는 일" : "What an Associate Does on ABB Night"}
              items={abbPracticeItems}
            />
          </motion.section>

          {/* Ch.4 — PE 엑싯 */}
          <motion.section id="ch4" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "블록 트레이드: PE의 엑싯 경로" : "Block Trade: The PE Exit Path"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "PE 펀드는 포트폴리오 기업이 상장한 후에도 바로 엑싯하지 못한다. IPO 당시 6~12개월의 락업(Lock-up) 기간이 있기 때문이다. 락업 해제 후 PE 펀드는 단계적으로 보유 지분을 매각한다 — 한꺼번에 팔면 오버행(Overhang) 리스크로 주가가 급락하기 때문이다.",
                      "오버행(Overhang)이란 대량 보유 주주가 있을 때 시장이 느끼는 '언제든 물량이 쏟아질 수 있다'는 불안감이다. PE 펀드 지분이 30%를 넘으면 투자자들이 매수를 꺼리게 되어 주가에 지속적인 하방 압력이 생긴다. 예측 가능한 엑싯 일정을 사전에 공표하거나, 분산 매각을 통해 오버행을 해소하는 것이 PE와 IB의 공동 과제다.",
                      "PE의 주요 엑싯 경로는 네 가지다. ① IPO: 프리미엄 최대이지만 18개월 이상 소요. ② ABB/블록 트레이드: 하룻밤 또는 수 시간이지만 3~5% 할인. ③ 전략적 매각(M&A): 가장 높은 가격을 받을 수 있지만 규제 심사 리스크. ④ 2차 매각(Secondary): 다른 PE 펀드에게 지분을 파는 방식.",
                    ]
                  : [
                      "PE funds cannot exit immediately after a portfolio company lists. The IPO lock-up period — typically 6–12 months — prevents it. After lock-up expiry, PE funds sell their stake in stages — selling everything at once would trigger an overhang-driven price collapse.",
                      "Overhang is the market anxiety caused by the presence of a large block holder: 'that supply could hit the market at any time.' When a PE fund holds more than 30% of a company, buyers become cautious, creating sustained downward price pressure. Announcing a predictable exit schedule or executing distributed block sales are the joint tools PE and IB use to resolve the overhang.",
                      "PE funds have four main exit paths: ① IPO — highest premium but 18+ months. ② ABB / block trade — overnight or hours, but 3–5% discount. ③ Strategic sale (M&A) — potentially the highest price but regulatory review risk. ④ Secondary — selling the stake to another PE fund.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <PeExitChart ko={ko} />

            {/* Overhang resolution callout */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl border border-orange-200 dark:border-orange-700/60 bg-orange-50 dark:bg-orange-900/10 px-5 py-4">
              <p className="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-2">
                {ko ? "오버행(Overhang) 해소 전략" : "Overhang Resolution Strategy"}
              </p>
              <ul className="space-y-2">
                {(ko
                  ? [
                      "예측 가능한 엑싯 일정 사전 공표 — 시장의 불확실성 제거",
                      "블록 트레이드 분산 매각 — 3~6개월 간격으로 단계적 매각",
                      "오버행 해소 완료 공표 — '락업 물량 전량 소화' 발표 후 주가 반등 노림",
                    ]
                  : [
                      "Pre-announce a predictable exit schedule — removes market uncertainty",
                      "Distributed block trades — staged sales at 3–6 month intervals",
                      "Announce overhang resolution — declare 'lock-up fully digested' to catalyze a price recovery",
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.section>

          {/* Ch.5 — 유상증자 */}
          <motion.section id="ch5" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "유상증자: 기존 주주와의 게임" : "Rights Issue: A Game with Existing Shareholders"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "유상증자는 기존 주주에게 새 주식을 할인 가격에 살 수 있는 권리(Rights)를 부여하는 방식으로 자금을 조달하는 것이다. Rights Issue(주주배정 방식)는 기존 주주가 보유 지분에 비례해 신주 인수권을 받고, 이를 행사하면 지분율을 유지할 수 있다.",
                      "General Cash Offering(일반공모 방식)은 기관·일반 투자자 누구에게나 청약 기회를 주는 방식이다. 할인율이 5~10%로 Rights Issue(20~40%)보다 낮고 기간도 2~5일로 짧지만, 기존 주주는 우선권이 없어 참여 안 하면 희석된다.",
                      "ATM(At-The-Market) 프로그램은 상시 소량 매출 방식이다. 주가가 일정 수준 이상이면 자동으로 소량 주식을 매각하는 프로그램으로, 주가 안정 구간에서 꾸준히 자금을 모을 수 있다. 미국 테크·바이오 기업에서 활발히 사용된다.",
                    ]
                  : [
                      "A rights issue raises capital by giving existing shareholders the right to purchase new shares at a discount proportional to their current holdings. If they exercise the rights, their ownership percentage is preserved. If they don't, they are diluted.",
                      "A general cash offering opens subscription to any institutional or retail investor. The discount is lower (5–10% vs. 20–40% for a rights issue) and the timeline is shorter (2–5 days vs. 3–6 weeks), but existing shareholders have no priority and are diluted if they don't participate.",
                      "An ATM (At-The-Market) program enables continuous small-scale share sales. The company automatically sells small amounts whenever the stock is above a target price, steadily accumulating capital during price-stable windows. Widely used by US tech and biotech companies.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <RightsComparisonTable ko={ko} />

            {/* ATM callout */}
            <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl border border-teal-200 dark:border-teal-700/60 bg-teal-50 dark:bg-teal-900/10 px-5 py-4">
              <p className="text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">
                ATM {ko ? "프로그램" : "Program"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "상시 소량 매출 방식. 주가가 목표 수준 이상일 때 자동으로 소량씩 시장에 매각 → 주가 충격 없이 꾸준히 자금 조달. 미국 WKSI(Well-Known Seasoned Issuer) 대형사는 SEC 사전 등록 없이 수시 발행 가능 — ATM의 법적 기반. 한국 시장에서는 상시 발행 제도가 미비해 ATM 활용 드물다."
                  : "Continuous small-lot sales. Automatically sells small amounts when the stock is above a target price — steadily accumulates capital without price impact. US WKSIs (Well-Known Seasoned Issuers) can issue at any time without pre-registration — the legal foundation for ATM. Korea lacks an equivalent continuous issuance framework, so ATMs are rare domestically."}
              </p>
            </motion.div>
          </motion.section>

          {/* Ch.6 — 글로벌 시장 */}
          <motion.section id="ch6" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Ch.6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "글로벌 팔로우온 시장 구조" : "Global Follow-on Market Structure"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "글로벌 팔로우온 시장은 연간 약 $600B 규모다. 북미가 전체의 약 42%($250B)를 차지하며, 유럽($180B), 아시아-태평양($130B), 신흥국($40B)이 뒤를 잇는다.",
                      "미국 시장의 특징: WKSI(Well-Known Seasoned Issuer) 제도. 시가총액이 $750M 이상이고 일정 공시 요건을 갖춘 대형사는 SEC에 사전 등록 없이 수시로 주식을 발행할 수 있다. 이 제도 덕분에 미국 대형 테크·바이오 기업의 팔로우온 실행이 매우 빠르다.",
                      "한국 시장의 특징: 무상증자(Bonus Issue) 문화. 무상증자는 실질 자금 조달 없이 잉여금을 자본금으로 전입하는 방식으로, 주가를 낮춰 유동성을 높이는 효과가 있다. 그러나 실질 가치 변화 없이 주가만 조정되므로 '주가 관리'를 위한 단기 이벤트로 활용되는 경우가 많다.",
                    ]
                  : [
                      "The global follow-on market totals approximately $600B annually. North America accounts for ~42% ($250B), followed by Europe ($180B), Asia-Pacific ($130B), and Emerging Markets ($40B).",
                      "US market characteristic: the WKSI (Well-Known Seasoned Issuer) framework. Companies with a market cap of $750M+ and adequate disclosure history can issue shares at any time without pre-registration with the SEC. This dramatically accelerates follow-on execution for large US tech and biotech companies.",
                      "Korean market characteristic: the Bonus Issue (무상증자) culture. A bonus issue transfers retained earnings to paid-in capital without raising new money, effectively lowering the stock price to improve liquidity. Since there is no actual value change, it is often used as a short-term stock price management tool rather than genuine capital raising.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <GlobalVolumeChart ko={ko} />

            <PracticeBox
              title={ko ? "MD 관점 — 팔로우온 타이밍의 3가지 원칙" : "MD's View — 3 Principles for Follow-on Timing"}
              items={mdPrincipleItems}
            />
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion
                items={FAQS.map((f) => ({ q: f.q, a: f.a }))}
                accent={ACCENT}
              />
            </motion.div>
          </motion.section>

          {/* Related Concepts */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2
              variants={fadeUp()}
              className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
            >
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-ipo-post",        ko: "Ch.6 포스트-IPO",     en: "Ch.6 Post-IPO"      },
                { slug: "ecm-convertible",      ko: "Ch.8 전환사채",       en: "Ch.8 Convertible"   },
                { slug: "ecm-overview",         ko: "ECM 개요",            en: "ECM Overview"       },
                { slug: "ecm-ipo-bookbuilding", ko: "Ch.5 북빌딩",         en: "Ch.5 Book-Building" },
                { slug: "ecm-spac-direct",      ko: "Ch.10 SPAC·직상장",  en: "Ch.10 SPAC·Direct"  },
              ].map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {ko ? term.ko : term.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          {/* References */}
          {concept.references && concept.references.length > 0 && (
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
                {concept.references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
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

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-ipo-post" : "/en/market-101/ecm-ipo-post"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "Ch.6 포스트-IPO" : "Ch.6 Post-IPO"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-convertible" : "/en/market-101/ecm-convertible"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "Ch.8 전환사채 →" : "Ch.8 Convertible →"}
            </Link>
          </div>

        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-followon");
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market-101" : "/market-101";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? (next.titleEn ?? next.title) : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
