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
  Legend,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Constants ─────────────────────────────────────────────────────────────────
const ACCENT = "#3182f6";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

// ── ECM Main Series Nav ────────────────────────────────────────────────────────
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

// ── ECM Practical Series Nav ───────────────────────────────────────────────────
const ECM_PRACTICAL_SERIES = [
  { slug: "ecm-rights-issue",   title: (ko: boolean) => ko ? "유상증자 실무"  : "Rights Issue"   },
  { slug: "ecm-ipo-allocation", title: (ko: boolean) => ko ? "IPO 배분 전략"  : "IPO Allocation"  },
  { slug: "ecm-pitchbook",      title: (ko: boolean) => ko ? "피치북 해부학"  : "Pitchbook"       },
  { slug: "ecm-abb-execution",  title: (ko: boolean) => ko ? "ABB 실행 매뉴얼": "ABB Manual"      },
];

const THIS_CH = "ecm-rights-issue";

// ── Chapter Anchors ────────────────────────────────────────────────────────────
const CHAPTERS = [
  { id: "stats",        ko: "핵심 수치",        en: "Key Stats"       },
  { id: "methods",      ko: "3가지 방식",       en: "3 Methods"       },
  { id: "terp",         ko: "TERP 계산",        en: "TERP Calc"       },
  { id: "timeline",     ko: "딜 타임라인",      en: "Deal Timeline"   },
  { id: "underwriting", ko: "서브언더라이팅",   en: "Sub-Underwriting"},
  { id: "cases",        ko: "글로벌 케이스",    en: "Cases"           },
  { id: "global-rules", ko: "해외 규정 비교",   en: "Global Rules"    },
];

// ── TERP Sensitivity Data ──────────────────────────────────────────────────────
const TERP_SENSITIVITY_DATA = [
  { discount: "10%",  terp: 9100, nilPaid: 900  },
  { discount: "20%",  terp: 8200, nilPaid: 1800 },
  { discount: "30%",  terp: 7650, nilPaid: 2350 },
  { discount: "40%",  terp: 7000, nilPaid: 3000 },
];

// ── Case Comparison Data ───────────────────────────────────────────────────────
const CASE_COMPARISON_DATA = [
  { metric: "할인율 / Discount %", vw: 32, hanwha: 25 },
  { metric: "커버리지 / Coverage×", vw: 3.2, hanwha: 2.8 },
  { metric: "서브언더라이터 수 / Sub-UW", vw: 7, hanwha: 5 },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "유상증자와 CB(전환사채) 중 뭐가 회사에 더 유리한가요?",
    a: "상황에 따라 다릅니다. 즉각적인 대규모 자금이 필요하고 이자 부담을 피하고 싶다면 유상증자가 유리합니다. 반면 CB는 낮은 쿠폰으로 자금을 조달하고 주가 상승 시 전환으로 희석 부담을 줄일 수 있습니다. 유상증자는 즉각적인 주당 희석이 발생하지만 재무 레버리지가 늘지 않습니다. CB는 만기 시 상환 의무가 있어 유동성 리스크가 존재합니다. 성장 스토리가 명확하고 시장 신뢰가 높은 기업은 유상증자, 희석을 최소화하면서 성장을 기다리는 기업은 CB가 적합합니다.",
  },
  {
    q: "소액주주가 유상증자에 참여 안 하면 어떻게 되나요?",
    a: "참여하지 않으면 지분이 희석됩니다. 예를 들어 1:1 배정에서 참여하지 않으면 의결권과 배당 비율이 절반으로 줄어듭니다. 단, 한국에서는 신주인수권증서(Nil Paid Rights)가 별도로 상장돼 거래되므로, 청약에 직접 참여하지 않더라도 신주인수권증서를 시장에 매각해 이론적 권리가치(TERP 기준)를 일부 회수할 수 있습니다. 그러나 실제 시장 가격과 이론치 간 괴리가 있을 수 있으므로 유의해야 합니다.",
  },
  {
    q: "실권주가 많이 나오면 주가에 어떤 영향이 있나요?",
    a: "실권주 물량이 많다는 것은 기존 주주들이 회사의 미래를 신뢰하지 않는다는 신호로 해석될 수 있어, 단기적으로 주가 하락 압력이 됩니다. 실권주는 일반공모(재청약)나 서브언더라이터 인수로 처리되는데, 주관사가 대량의 실권주를 떠안은 뒤 장내 매각하면 추가 하락이 발생합니다. 반대로 실권주가 거의 없이 청약률이 높으면 '발행사 신뢰도 확인'으로 주가 반등 재료가 됩니다. 2024년 한화에어로스페이스 유상증자가 방산 성장 내러티브로 실권주를 최소화한 것이 이 논리의 실제 사례입니다.",
  },
  {
    q: "해외 투자자(외국인)도 한국 유상증자에 참여할 수 있나요?",
    a: "원칙적으로 가능하지만 절차가 복잡합니다. 외국인 투자자는 한국 증권거래소 등록 외국인 계좌(IRC)가 있어야 하고, 국가별 외국인 투자 한도(섹터에 따라 다름)를 준수해야 합니다. 투자설명서는 한국어로 제출되며, 영문 번역은 의무가 아닙니다. 일부 대형 유상증자는 Regulation S 또는 Rule 144A 방식으로 해외 기관투자자를 별도 트랜치로 모집하기도 합니다. 실무적으로는 외국인 주주가 이미 보유 주식에 대한 신주인수권을 자동 부여받지만, 청약 과정에서 현지 커스터디언과 조율이 필요합니다.",
  },
  {
    q: "유상증자 발표 전 내부자 거래 제한은 어떻게 적용되나요?",
    a: "한국 자본시장법상 미공개 중요 정보를 이용한 거래는 형사처벌 대상입니다. 유상증자는 이사회 결의가 이뤄지는 순간부터 중요 정보로 분류되므로, 결의 전부터 정보를 접한 임직원·자문사 직원은 결의 공시 전 주식 매도나 공매도가 금지됩니다. 또한 금감원은 유상증자 발표 직전 비정상적인 거래량·공매도 급증을 집중 모니터링합니다. 뱅커와 법무팀은 통상 이사회 결의 2~4주 전부터 블랙아웃(Blackout) 기간을 설정하고, 모든 관련자를 월(Wall)로 분리합니다.",
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
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              {ch.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function PracticalSeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="bg-amber-50/70 dark:bg-amber-900/10 border-b border-amber-200/50 dark:border-amber-800/30">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex items-center gap-1 py-2 min-w-max">
          <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mr-2 flex-shrink-0">
            {ko ? "실무 가이드" : "Practical"}
          </span>
          {ECM_PRACTICAL_SERIES.map((item) => (
            <Link
              key={item.slug}
              href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold transition-colors ${
                item.slug === THIS_CH
                  ? "bg-amber-500 text-white"
                  : "text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/30"
              }`}
            >
              {item.title(ko)}
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

function AnalogyBox({ ko, children }: { ko: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-6 rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-900/10 p-5"
    >
      <div className="flex gap-2 items-start">
        <span className="text-xl flex-shrink-0">💡</span>
        <div>
          <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
            {ko ? "직관적 비유" : "Analogy"}
          </p>
          <p className="text-[14px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PracticeBox({ ko, title, items }: { ko: boolean; title: string; items: string[] }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-6 rounded-2xl border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/10 p-5"
    >
      <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
        {ko ? "실무 포인트" : "Practice Note"}
      </p>
      <p className="text-[13px] font-bold text-blue-900 dark:text-blue-200 mb-3">{title}</p>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-[13px] text-blue-800 dark:text-blue-300 leading-relaxed">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

function StatsCallout({ ko }: { ko: boolean }) {
  const stats = [
    {
      value: "20~40%",
      label: ko ? "한국 주주배정 할인율" : "KR Rights Issue Discount",
      sub: ko ? "시장 변동성에 따라 결정" : "Subject to market volatility",
    },
    {
      value: "±1%",
      label: ko ? "TERP 계산 오차 허용" : "TERP Calculation Tolerance",
      sub: ko ? "실무 허용 범위" : "Practical margin",
    },
    {
      value: "20영업일",
      label: ko ? "투자설명서 효력 발생" : "Prospectus Effective Period",
      sub: ko ? "이사회 결의 후 심사 기간" : "From board resolution",
    },
    {
      value: "~$300B",
      label: ko ? "글로벌 유상증자 연간 규모" : "Global Rights Issue Market",
      sub: ko ? "연간 발행 총액 추정" : "Annual issuance estimate",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.05)} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 text-center"
        >
          <p className="text-[22px] font-black leading-none mb-1" style={{ color: ACCENT }}>
            {s.value}
          </p>
          <p className="text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-0.5 leading-tight">{s.label}</p>
          <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{s.sub}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MethodsTable({ ko }: { ko: boolean }) {
  const rows = [
    {
      method: ko ? "주주배정" : "Rights Issue",
      discount: ko ? "20~40%" : "20–40%",
      target: ko ? "기존 주주 (신주인수권)" : "Existing shareholders (NP rights)",
      duration: ko ? "5~8주" : "5–8 weeks",
      regulation: ko ? "증권신고서 필수, 금감원 심사" : "Prospectus required, FSS review",
      useCase: ko ? "대규모 자본 조달, 자산 매입, 차입금 상환" : "Large cap raise, asset acquisition, debt repayment",
    },
    {
      method: ko ? "일반공모" : "Public Offering",
      discount: ko ? "5~15%" : "5–15%",
      target: ko ? "일반 투자자 (신규 포함)" : "General public incl. new investors",
      duration: ko ? "3~5주" : "3–5 weeks",
      regulation: ko ? "증권신고서, 공모가 산정 의무" : "Prospectus, mandatory pricing formula",
      useCase: ko ? "소액 공모, 주주 베이스 확대" : "Smaller raise, shareholder base expansion",
    },
    {
      method: ko ? "제3자배정" : "Private Placement",
      discount: ko ? "10~30%" : "10–30%",
      target: ko ? "특정 기관/전략투자자" : "Specific institutions / strategic investors",
      duration: ko ? "1~3주" : "1–3 weeks",
      regulation: ko ? "이사회 결의 + 주총 특별결의 필요할 수 있음" : "Board + EGM special resolution may be required",
      useCase: ko ? "전략적 제휴, 재무 투자자 유치" : "Strategic alliance, financial investor onboarding",
    },
  ];

  const headers = ko
    ? ["방식", "할인율", "배정 대상", "기간", "규제", "사용 케이스"]
    : ["Method", "Discount", "Target", "Duration", "Regulation", "Use Case"];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 overflow-x-auto -mx-5 px-5">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[680px]">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            {ko ? "유상증자 3가지 방식 비교" : "Rights Issue: 3 Method Comparison"}
          </p>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-2.5 text-left font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-50 dark:border-gray-800/60 ${i === 0 ? "bg-blue-50/40 dark:bg-blue-900/10" : ""}`}
              >
                <td className="px-4 py-3 font-bold text-gray-800 dark:text-gray-200">{row.method}</td>
                <td className="px-4 py-3 font-semibold text-orange-600 dark:text-orange-400">{row.discount}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 leading-snug">{row.target}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.duration}</td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-500 leading-snug">{row.regulation}</td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-500 leading-snug">{row.useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function TerpChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko
            ? "TERP 민감도 분석 — 할인율별 TERP vs Nil Paid Rights 가치 (기준주가 10,000원, 1:1 배정)"
            : "TERP Sensitivity — TERP vs Nil Paid Rights Value by Discount (Base: ₩10,000, 1:1 ratio)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={TERP_SENSITIVITY_DATA} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="discount"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
            />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any, name: any) => [
                `₩${(value as number).toLocaleString()}`,
                name === "terp"
                  ? ko ? "TERP" : "TERP"
                  : ko ? "Nil Paid Rights 가치" : "Nil Paid Rights Value",
              ]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <Legend
              formatter={(value) =>
                value === "terp"
                  ? ko ? "TERP (이론적 권리락 후 주가)" : "TERP"
                  : ko ? "Nil Paid Rights 가치" : "Nil Paid Rights Value"
              }
              wrapperStyle={{ fontSize: 11 }}
            />
            <Bar dataKey="terp" fill={ACCENT} radius={[4, 4, 0, 0]} name="terp" />
            <Bar dataKey="nilPaid" fill="#f97316" radius={[4, 4, 0, 0]} name="nilPaid" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-3 leading-relaxed">
          {ko
            ? "할인율이 높을수록 TERP는 하락하고 신주인수권의 이론적 가치는 상승한다 — 기존 주주에게 '공짜 점심'이 아닌 '기회 비용'이다."
            : "Higher discount → lower TERP, higher nil paid rights value — it's an opportunity cost for existing shareholders, not a free lunch."}
        </p>
      </div>
    </motion.div>
  );
}

function DealTimeline({ ko }: { ko: boolean }) {
  const steps = [
    {
      day: "D-Day",
      icon: "📋",
      title: ko ? "이사회 결의 + 공시" : "Board Resolution + Disclosure",
      desc: ko
        ? "유상증자 이사회 결의 즉시 거래소 공시 및 금감원 신고. 발행 방식·규모·예정 발행가 공개."
        : "Immediate exchange disclosure and FSS notification upon board resolution. Method, size, and indicative price disclosed.",
      docs: ko ? "이사회 의사록, 주요사항 공시" : "Board minutes, material disclosure",
    },
    {
      day: "D+5영업일",
      icon: "📄",
      title: ko ? "증권신고서 제출 (금감원)" : "Securities Registration Filing (FSS)",
      desc: ko
        ? "금융감독원에 증권신고서 제출. 재무제표, 자금 사용 계획, 위험 요소, Pro-forma EPS 포함."
        : "Securities registration statement filed with FSS. Includes financials, use of proceeds, risk factors, Pro-forma EPS.",
      docs: ko ? "증권신고서, 감사보고서, 법인등기부등본" : "Securities registration, audit report, corporate registry",
    },
    {
      day: "D+20영업일",
      icon: "✅",
      title: ko ? "투자설명서 효력 발생" : "Prospectus Effective",
      desc: ko
        ? "금감원 심사 완료. 투자설명서 효력 발생. 이 시점부터 공식 투자자 접촉 가능."
        : "FSS review complete. Prospectus becomes effective. Official investor outreach may begin.",
      docs: ko ? "투자설명서 (최종본)" : "Final prospectus",
    },
    {
      day: "D+25",
      icon: "📅",
      title: ko ? "신주배정 기준일 공고" : "Record Date Announcement",
      desc: ko
        ? "신주배정 기준일 공고. 이 날 주주명부에 등재된 주주에게 신주인수권 부여."
        : "Record date announced. Shareholders on register as of this date receive nil paid rights.",
      docs: ko ? "기준일 공고문, 주주명부 확정" : "Record date notice, shareholder register",
    },
    {
      day: "D+30",
      icon: "📈",
      title: ko ? "신주인수권증서 상장 (Nil Paid Rights)" : "Nil Paid Rights Listed",
      desc: ko
        ? "신주인수권증서(Nil Paid Rights)가 거래소에 별도 상장. 주주는 권리를 행사하거나 시장에 매각할 수 있다."
        : "Nil paid rights listed on exchange separately. Shareholders may exercise or sell rights in market.",
      docs: ko ? "신주인수권증서 발행 공고" : "Rights certificate issuance notice",
    },
    {
      day: "D+35~D+40",
      icon: "📝",
      title: ko ? "청약 기간" : "Subscription Period",
      desc: ko
        ? "주주 우선 청약 → 실권주 일반공모 청약. 청약증거금 납입. 서브언더라이터 리스크 인수 확정."
        : "Shareholder priority subscription → residual shares (lapsed rights) public offer. Deposit lodged. Sub-underwriter risk formally confirmed.",
      docs: ko ? "청약 안내장, 투자설명서 교부" : "Subscription notice, prospectus delivery",
    },
    {
      day: "D+45",
      icon: "💰",
      title: ko ? "납입일" : "Payment Date",
      desc: ko
        ? "청약 대금 납입 완료. 발행사 계좌에 조달 자금 입금."
        : "Subscription proceeds fully paid. Capital credited to issuer's account.",
      docs: ko ? "납입확인서, 배정 통보" : "Payment confirmation, allocation notice",
    },
    {
      day: "D+50",
      icon: "🎯",
      title: ko ? "신주 상장" : "New Shares Listed",
      desc: ko
        ? "신주가 기존 주식과 합산돼 거래소에 상장. 발행가·배정 결과 최종 공시. 희석 효과 반영."
        : "New shares combined with existing shares and listed on exchange. Final issuance results disclosed. Dilution effect takes effect.",
      docs: ko ? "신주상장 공고, 증권발행 완료보고서" : "New listing notice, issuance completion report",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start relative">
            {i < steps.length - 1 && (
              <div className="absolute left-[19px] top-10 w-px h-full bg-gray-200 dark:bg-gray-700 z-0" />
            )}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 z-10 border-2 bg-white dark:bg-gray-950 shadow-sm"
              style={{ borderColor: ACCENT + "60" }}
            >
              {step.icon}
            </div>
            <div className="pb-6 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span
                  className="text-[10px] font-black rounded-full px-2 py-0.5 text-white"
                  style={{ background: ACCENT }}
                >
                  {step.day}
                </span>
                <span className="text-[14px] font-bold text-gray-800 dark:text-gray-200">{step.title}</span>
              </div>
              <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mb-1.5">{step.desc}</p>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase">{ko ? "문서" : "Docs"}:</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-500 italic">{step.docs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function UnderwritingStructure({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "서브언더라이팅 구조 — 위험 분산 체계" : "Sub-Underwriting Structure — Risk Distribution"}
        </p>
      </div>
      <div className="p-5 space-y-3">
        {[
          {
            role: ko ? "발행사 (Issuer)" : "Issuer",
            desc: ko ? "자본 조달 목표 달성 → 실권주 걱정 없음 (서브언더라이팅 계약으로 보장)" : "Capital raise goal secured — no lapse risk (guaranteed by underwriting agreement)",
            dot: "bg-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/10",
          },
          {
            role: ko ? "Lead Manager (주관사)" : "Lead Manager",
            desc: ko ? "미판매분 전량 인수 책임 — 조달 실패 시 발행가로 주식 매입 의무. 수수료: 조달액의 0.8~1.5%" : "Full backstop — must purchase all lapsed shares at issue price. Fee: 0.8–1.5% of proceeds",
            dot: "bg-violet-500",
            bg: "bg-violet-50 dark:bg-violet-900/10",
          },
          {
            role: ko ? "Sub-underwriters (3~10개 증권사)" : "Sub-underwriters (3–10 banks)",
            desc: ko ? "Lead Manager와 위험 분산 계약. 각 은행이 특정 지분(tranche) 인수 책임. 수수료: 조달액의 0.3~0.8%" : "Risk-sharing agreement with Lead Manager. Each bank backstops a specific tranche. Fee: 0.3–0.8% of proceeds",
            dot: "bg-teal-500",
            bg: "bg-teal-50 dark:bg-teal-900/10",
          },
          {
            role: ko ? "실권주 처리" : "Lapsed Rights Disposal",
            desc: ko ? "서브언더라이터가 인수한 실권주는 발행가로 취득 후 시장 상황에 따라 장내 매각. 단, Market Out 조항 발동 시 언더라이터 인수 의무 면제 가능." : "Sub-underwriters acquire lapsed shares at issue price and sell in market. However, a Market Out clause may release backstop obligation under extraordinary conditions.",
            dot: "bg-orange-500",
            bg: "bg-orange-50 dark:bg-orange-900/10",
          },
        ].map((item, i) => (
          <div key={i} className={`rounded-xl p-4 ${item.bg}`}>
            <div className="flex items-start gap-3">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${item.dot}`} />
              <div>
                <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-1">{item.role}</p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700">
          <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
            <span className="font-bold text-gray-700 dark:text-gray-300">{ko ? "계약서 핵심 조항: " : "Key contract clauses: "}</span>
            {ko
              ? "Force Majeure (천재지변·전쟁 등 불가항력 시 언더라이터 면제) / Market Out (발행가 대비 시장가 20% 이상 하락 시 인수 의무 면제) / Material Adverse Change (발행사 재무 상태 중대 변화 시 해제 가능)"
              : "Force Majeure (underwriter released on acts of God, war, etc.) / Market Out (release if market price falls 20%+ below issue price) / Material Adverse Change (termination on significant deterioration in issuer's financial condition)"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function CaseComparisonChart({ ko }: { ko: boolean }) {
  const chartData = [
    { name: ko ? "할인율 (%)" : "Discount (%)", VW: 32, Hanwha: 25 },
    { name: ko ? "커버리지 (×)" : "Coverage (×)", VW: 3.2, Hanwha: 2.8 },
    { name: ko ? "서브언더라이터 수" : "Sub-UW Count", VW: 7, Hanwha: 5 },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "딜 비교 — VW €11B vs 한화에어로스페이스 2.3조" : "Deal Comparison — VW €11B vs Hanwha Aerospace ₩2.3T"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#6b7280" }} axisLine={{ stroke: "#e5e7eb" }} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="VW" fill={ACCENT} radius={[4, 4, 0, 0]} name="Volkswagen (2023)" />
            <Bar dataKey="Hanwha" fill="#f97316" radius={[4, 4, 0, 0]} name={ko ? "한화에어로스페이스 (2024)" : "Hanwha Aerospace (2024)"} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

function GlobalRulesTable({ ko }: { ko: boolean }) {
  const rows = [
    {
      dim: ko ? "규제 기관" : "Regulator",
      us: "SEC",
      uk: "FCA",
      kr: ko ? "금융감독원 (FSS)" : "FSS (금융감독원)",
    },
    {
      dim: ko ? "제출 서류" : "Filing Document",
      us: ko ? "Shelf Registration (S-3 또는 F-3)" : "Shelf Registration (S-3/F-3)",
      uk: ko ? "Prospectus (UK Listing Rules)" : "Prospectus (UK Listing Rules)",
      kr: ko ? "증권신고서 + 투자설명서" : "Securities Reg. + Prospectus",
    },
    {
      dim: ko ? "심사 기간" : "Review Period",
      us: ko ? "선등록 후 즉시 발행 가능 (Shelf)" : "Immediate post-shelf filing",
      uk: ko ? "7~10영업일 (FCA 리뷰)" : "7–10 business days (FCA review)",
      kr: ko ? "약 20영업일" : "~20 business days",
    },
    {
      dim: ko ? "할인율 관행" : "Discount Convention",
      us: ko ? "없음 (시장가 기준)" : "None (market price basis)",
      uk: ko ? "20~40% (전통적)" : "20–40% (traditional)",
      kr: ko ? "20~40% (규정 공식 적용)" : "20–40% (formula-based)",
    },
    {
      dim: ko ? "소액주주 보호" : "Minority Protection",
      us: ko ? "없음 (선착순 신주인수 없음)" : "No pre-emptive rights by default",
      uk: ko ? "Pre-emptive rights 강제 (FCA)" : "Pre-emptive rights mandatory (FCA)",
      kr: ko ? "주주배정 우선 원칙 (자본시장법)" : "Rights priority by law (FSCMA)",
    },
  ];

  const headers = ["", ko ? "미국 (Shelf)" : "US (Shelf)", ko ? "영국 (Rights Issue)" : "UK (Rights Issue)", ko ? "한국 (증권신고서)" : "Korea (Reg. Statement)"];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 overflow-x-auto -mx-5 px-5">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[600px]">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            {ko ? "국가별 유상증자 규정 비교" : "Rights Issue Regulation by Country"}
          </p>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`px-4 py-2.5 text-left font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider ${i === 3 ? "bg-blue-50/40 dark:bg-blue-900/10" : ""}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 dark:border-gray-800/60">
                <td className="px-4 py-3 font-bold text-gray-600 dark:text-gray-400 text-[11px]">{row.dim}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 leading-snug">{row.us}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 leading-snug">{row.uk}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 leading-snug bg-blue-50/20 dark:bg-blue-900/5 font-medium">{row.kr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmRightsIssueClient({
  concept,
  lang,
}: {
  concept: MarketConcept;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

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
                  ? "https://dealstory.io/market-101/ecm-rights-issue"
                  : "https://dealstory.io/en/market-101/ecm-rights-issue",
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
              <span className="text-gray-600 dark:text-gray-300">{ko ? "유상증자 실무" : "Rights Issue"}</span>
            </div>

            <div className="flex gap-2 flex-wrap mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                {ko ? "ECM 실무 가이드" : "ECM Practical Guide"}
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                {ko ? "팔로우온 심화" : "Follow-on Deep Dive"}
              </div>
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
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
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
                href="/market-101/ecm-rights-issue"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-rights-issue"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
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
        <PracticalSeriesNav lang={lang} />
        <ChapterNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Section 1 — Stats */}
          <motion.section id="stats" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "30초 요약" : "30-Second Summary"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "유상증자 실무 A-Z — 핵심 수치" : "Rights Issue A-Z — Key Numbers"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "유상증자(Rights Issue)는 기존 주주에게 새 주식을 살 권리를 주고 자금을 조달하는 방식이다. IPO와 다르게 이미 상장된 기업이 추가 자본을 확보하기 위해 사용한다. 한국 시장에서는 주주배정·일반공모·제3자배정 세 가지 방식이 법적으로 구분돼 있으며, 각각 다른 할인율·절차·규제가 적용된다."
                    : "A rights issue lets existing shareholders buy new shares at a discount, allowing a listed company to raise additional capital. Unlike an IPO, rights issues target companies already on the market. In Korea, three methods are legally distinct — rights offering, public offering, and private placement — each with different discount conventions, procedures, and regulations.",
                  ko
                    ? "실무에서 유상증자 딜의 성패는 두 가지에 달려 있다: ① TERP(Theoretical Ex-Rights Price, 이론적 권리락 후 주가)를 얼마나 정확히 설정하느냐, ② Equity Story(성장 스토리)가 실권주를 최소화할 만큼 설득력 있느냐. 이 두 가지를 제대로 이해하면 유상증자 딜 전체를 꿰뚫을 수 있다."
                    : "In practice, a rights issue deal's success depends on two things: ① how precisely TERP (Theoretical Ex-Rights Price) is set, and ② whether the Equity Story is compelling enough to minimize lapsed rights. Master these two levers and you understand the entire deal.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <StatsCallout ko={ko} />
          </motion.section>

          {/* Section 2 — 3가지 방식 */}
          <motion.section id="methods" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "유상증자의 3가지 방식" : "Three Methods of Rights Issue"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "주주배정 vs 일반공모 vs 제3자배정" : "Rights vs Public vs Private Placement"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <AnalogyBox ko={ko}>
              {ko
                ? "유상증자는 아파트 건물을 증축하는 것이다. 주주배정은 기존 세입자들에게 먼저 분양권을 주는 것 — 오래 살았으니 우선권이 있다. 일반공모는 외부인에게도 공개 분양 — 누구든 청약하면 살 수 있다. 제3자배정은 특정인에게만 따로 분양 — 건물주가 마음에 드는 사람에게 직접 판다. 방식에 따라 희석 정도와 속도, 가격이 달라진다."
                : "A rights issue is like adding new floors to an apartment building. Rights offering = existing tenants get first dibs on new units — they've been there longest. Public offering = open to anyone who applies. Private placement = sold directly to a specific buyer chosen by the building owner. The method determines how fast dilution happens, at what price, and to whom."}
            </AnalogyBox>

            <MethodsTable ko={ko} />

            <motion.div variants={fadeUp(0.1)} className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700">
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="font-bold text-gray-700 dark:text-gray-300">{ko ? "실무 선택 기준: " : "Practical selection criteria: "}</span>
                {ko
                  ? "대규모 자금 조달이 목적이고 주주 신뢰가 높다면 주주배정. 신규 투자자층 확보가 목적이라면 일반공모. M&A 파트너십이나 전략적 투자 유치가 목적이라면 제3자배정. 혼합(주주배정 + 실권주 일반공모)도 가능하며 한화에어로스페이스 2024가 이 방식을 택했다."
                  : "Use rights offering for large raises with high shareholder trust. Use public offering to expand investor base. Use private placement for M&A partnerships or strategic investments. Hybrid structures (rights + residual public offer) are common — Hanwha Aerospace used this in 2024."}
              </p>
            </motion.div>
          </motion.section>

          {/* Section 3 — TERP */}
          <motion.section id="terp" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "TERP 계산 — 핵심 수식" : "TERP Calculation — Core Formula"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "이론적 권리락 후 주가를 계산하는 법" : "How to Calculate the Theoretical Ex-Rights Price"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "TERP(Theoretical Ex-Rights Price)는 유상증자 권리락(기준일 다음날) 이후 이론적으로 주가가 어디에 있어야 하는지를 계산한 값이다. 발행가가 시장가보다 낮기 때문에 신주가 추가되면 1주당 가치가 희석된다 — TERP는 그 희석 후 주가다."
                    : "TERP (Theoretical Ex-Rights Price) is the theoretically correct share price after the ex-rights date (the day after the record date). Since new shares are issued below market price, each existing share's value is diluted — TERP is that post-dilution price.",
                ].map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* TERP Formula Box */}
            <motion.div variants={fadeUp(0.1)} className="mt-6 rounded-2xl border-2 p-5" style={{ borderColor: ACCENT + "40" }}>
              <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "TERP 공식" : "TERP Formula"}
              </p>
              <div className="bg-gray-900 dark:bg-black rounded-xl p-4 mb-4 overflow-x-auto">
                <code className="text-[13px] text-green-400 font-mono leading-relaxed whitespace-nowrap">
                  TERP = (현재주가 × 기존주식수 + 발행가 × 신주수) / (기존주식수 + 신주수)
                </code>
              </div>
              <div className="space-y-2">
                <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300">{ko ? "실제 계산 예시:" : "Example calculation:"}</p>
                <div className="bg-gray-50 dark:bg-gray-800/60 rounded-xl p-4 space-y-1.5 text-[13px] text-gray-600 dark:text-gray-400 font-mono">
                  <p>{ko ? "현재주가: 10,000원 | 기존주식수: 100만주" : "Current price: ₩10,000 | Existing shares: 1M"}</p>
                  <p>{ko ? "배정비율: 1:1 (신주 100만주) | 발행가: 6,000원 (할인율 40%)" : "Ratio: 1:1 (1M new shares) | Issue price: ₩6,000 (40% discount)"}</p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-1.5 mt-1.5">
                    <p className="text-gray-500">TERP = (10,000 × 1,000,000 + 6,000 × 1,000,000) / 2,000,000</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">TERP = <span style={{ color: ACCENT }}>8,000원</span></p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-1.5 mt-1.5">
                    <p>{ko ? "Nil Paid Rights 이론가 = 현재주가 − TERP" : "Nil Paid Rights theoretical value = Current price − TERP"}</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">{ko ? "= 10,000 − 8,000 = " : "= 10,000 − 8,000 = "}<span className="text-orange-500">2,000원</span></p>
                  </div>
                </div>
              </div>
            </motion.div>

            <PracticeBox
              ko={ko}
              title={ko ? "발행가 결정: 한국 규정 실무 포인트" : "Issue Price Determination: Korean Regulatory Practice"}
              items={
                ko
                  ? [
                      "발행가 기준: 이사회 결의일 전 3개월 가중평균 주가의 일정 할인율 (금감원 규정 적용)",
                      "할인율 결정 요소: 시장 변동성(VIX/VKOSPI), 서브언더라이터 요구 수익률, 기업 신용도",
                      "한국 공식 vs 실무: 금감원 공식은 산술적 기준이지만 실무에서는 시장가 대비 커버리지를 동시에 모니터링",
                      "TERP 오차 허용: ±1% — 이 범위를 벗어나면 발행가 재산정 필요",
                      "주의: 발행가 결정 후 주가가 급락하면 발행가 > 시장가 상황(Deep in-the-money 상실) → 실권주 폭증 리스크",
                    ]
                  : [
                      "Issue price basis: weighted average price over 3 months before board resolution, with FSS-regulated discount applied",
                      "Discount drivers: market volatility (VKOSPI), sub-underwriter required return, issuer credit quality",
                      "Korean formula vs practice: FSS formula is arithmetic, but practitioners simultaneously monitor market-price coverage",
                      "TERP tolerance: ±1% — outside this range requires re-pricing",
                      "Warning: if market price drops sharply after pricing, issue price may exceed market (lost in-the-money status) → lapse risk surges",
                    ]
              }
            />

            <TerpChart ko={ko} />
          </motion.section>

          {/* Section 4 — Deal Timeline */}
          <motion.section id="timeline" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "딜 타임라인" : "Deal Timeline"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "이사회 결의부터 신주 상장까지 — 8단계" : "From Board Resolution to New Share Listing — 8 Steps"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "한국 유상증자는 이사회 결의부터 신주 상장까지 통상 50~60영업일이 소요된다. 각 단계에는 금감원·거래소·법무팀이 요구하는 구체적 문서와 공시 의무가 있다. 타임라인을 벗어나면 발행가 재산정 또는 전체 일정 재조정이 필요하다."
                : "Korean rights issues typically take 50–60 business days from board resolution to new share listing. Each step has specific document requirements and disclosure obligations from the FSS, exchange, and legal team. Missing the timeline may require re-pricing or full schedule reset."}
            </motion.p>

            <DealTimeline ko={ko} />

            <PracticeBox
              ko={ko}
              title={ko ? "투자설명서 재무 섹션에서 반드시 확인하는 5가지" : "5 Things to Check in the Prospectus Financial Section"}
              items={
                ko
                  ? [
                      "조달 자금 사용 목적의 구체성 — 'M&A 자금'인지 '설비투자'인지 명확히 기재돼 있는가",
                      "Pro-forma EPS 희석 계산 — 신주 발행 후 주당순이익(EPS)이 얼마나 감소하는가",
                      "실권주 처리 방법 — 재공모인지 서브언더라이터 자동 인수인지, 조건은 무엇인가",
                      "배정비율 계산 근거 — 기준일 기준 주주 수와 신주 수의 비율이 정확히 명시돼 있는가",
                      "서브언더라이터 조건 — Market Out, Force Majeure 조항이 포함돼 있는가",
                    ]
                  : [
                      "Specificity of use of proceeds — Is it clearly M&A, capex, or debt repayment?",
                      "Pro-forma EPS dilution — How much does EPS decrease after new share issuance?",
                      "Lapsed rights disposal method — Re-offer or automatic sub-underwriter pickup, and what are the conditions?",
                      "Subscription ratio calculation basis — Is the ratio of existing vs new shares precisely stated as of record date?",
                      "Sub-underwriter terms — Are Market Out and Force Majeure clauses included?",
                    ]
              }
            />
          </motion.section>

          {/* Section 5 — Sub-underwriting */}
          <motion.section id="underwriting" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "서브언더라이팅" : "Sub-Underwriting"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "실권주 리스크를 분산하는 방법" : "How to Distribute Lapsed Rights Risk"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <AnalogyBox ko={ko}>
              {ko
                ? "서브언더라이팅은 보험이다. 유상증자 주관사(Lead Manager)가 '팔리지 않은 주식은 우리가 산다'고 발행사에 보장하면, 발행사는 안심하고 딜을 진행할 수 있다. 하지만 주관사도 혼자 모든 리스크를 짊어지기는 어렵다. 그래서 서브언더라이터(증권사들)와 위험을 다시 분담한다 — 마치 재보험사처럼. 발행사는 보험료(언더라이팅 수수료)를 내고, 주관사와 서브언더라이터가 청약 실패 위험을 나눠 가진다."
                : "Sub-underwriting is insurance. When the Lead Manager guarantees the issuer 'we'll buy any shares that go unsold,' the issuer can proceed confidently. But no single bank wants to hold all that risk alone. So sub-underwriters (other securities firms) take on portions of the risk — just like reinsurers. The issuer pays a premium (underwriting fee), and the lead plus sub-underwriters share the subscription failure risk."}
            </AnalogyBox>

            <UnderwritingStructure ko={ko} />
          </motion.section>

          {/* Section 6 — Cases */}
          <motion.section id="cases" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "글로벌 케이스" : "Global Cases"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "VW €11B vs 한화에어로스페이스 2.3조" : "VW €11B vs Hanwha Aerospace ₩2.3T"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="space-y-5">
              {/* VW Case */}
              <motion.div variants={fadeUp(0)} className="rounded-2xl border border-blue-200 dark:border-blue-800/50 bg-blue-50/60 dark:bg-blue-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                      {ko ? "글로벌 케이스 1" : "Global Case 1"}
                    </p>
                    <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100">
                      Volkswagen €11B Rights Issue (2023)
                    </h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {[
                    { label: ko ? "배경" : "Background", value: ko ? "EV 전환 투자 + 부채 감축" : "EV transition investment + debt reduction" },
                    { label: ko ? "구조" : "Structure", value: ko ? "1:4 주주배정, 할인율 32%" : "1:4 rights offering, 32% discount" },
                    { label: ko ? "주관사" : "Lead Manager", value: "Goldman Sachs + 7 Sub-underwriters" },
                    { label: ko ? "결과" : "Result", value: ko ? "3.2× 오버서브 — 투자자 신뢰 압도적" : "3.2× oversubscribed — overwhelming investor confidence" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/60 dark:bg-gray-900/30 rounded-xl p-3">
                      <p className="text-[9px] font-black text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="border-l-4 border-blue-400 pl-3">
                  <p className="text-[12px] text-blue-800 dark:text-blue-300 leading-relaxed italic">
                    {ko
                      ? "교훈: 명확한 자금 사용 목적(EV 전환 로드맵 + 구체적 설비 투자)이 32%의 높은 할인율 부담을 상쇄했다. 투자자는 할인율보다 '이 돈이 어디에 쓰이는가'를 먼저 판단한다."
                      : "Lesson: A clear use of proceeds (EV transition roadmap + specific capex) offset the burden of a 32% discount. Investors evaluate 'where does this money go' before they evaluate the discount rate."}
                  </p>
                </div>
              </motion.div>

              {/* Hanwha Case */}
              <motion.div variants={fadeUp(0.07)} className="rounded-2xl border border-orange-200 dark:border-orange-800/50 bg-orange-50/60 dark:bg-orange-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                      {ko ? "한국 케이스" : "Korea Case"}
                    </p>
                    <h3 className="text-[15px] font-black text-gray-900 dark:text-gray-100">
                      {ko ? "한화에어로스페이스 2.3조 유상증자 (2024)" : "Hanwha Aerospace ₩2.3T Rights Issue (2024)"}
                    </h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {[
                    { label: ko ? "배경" : "Background", value: ko ? "방산 수출 증가 → 생산설비 투자" : "Defense export surge → production capacity investment" },
                    { label: ko ? "구조" : "Structure", value: ko ? "주주배정 + 일반공모 혼합, 할인율 25%" : "Rights + residual public offer, 25% discount" },
                    { label: ko ? "논란" : "Controversy", value: ko ? "대주주 배정 참여율, 기관 초기 반응 엇갈림" : "Controlling shareholder subscription rate, mixed institutional reaction" },
                    { label: ko ? "결과" : "Result", value: ko ? "방산 성장 내러티브로 실권주 최소화 성공" : "Defense growth narrative minimized lapsed rights" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/60 dark:bg-gray-900/30 rounded-xl p-3">
                      <p className="text-[9px] font-black text-orange-500 dark:text-orange-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="border-l-4 border-orange-400 pl-3">
                  <p className="text-[12px] text-orange-800 dark:text-orange-300 leading-relaxed italic">
                    {ko
                      ? "교훈: Equity Story(성장 스토리)가 청약률을 결정한다. 방산 수출 급증이라는 명확한 성장 내러티브가 없었다면 25% 할인에도 실권주가 대량 발생했을 것이다. 뱅커는 딜 구조 못지않게 투자자에게 전달할 스토리를 설계해야 한다."
                      : "Lesson: Equity Story determines subscription rate. Without a clear defense export growth narrative, even a 25% discount would have generated massive lapsed rights. Bankers must design the investor story as carefully as the deal structure."}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <CaseComparisonChart ko={ko} />

            <PracticeBox
              ko={ko}
              title={ko ? "투자자 Q&A 대응: 유상증자 발표 후 기관이 가장 먼저 묻는 것 5가지" : "Investor Q&A: The First 5 Questions Institutions Ask After a Rights Issue Announcement"}
              items={
                ko
                  ? [
                      "자금 사용 목적이 정확히 무엇인가 — M&A인지, 설비투자인지, 차입금 상환인지 구체적으로",
                      "Pro-forma EPS 희석이 얼마나 되나 — 신주 발행 후 주당순이익이 몇 % 감소하는가",
                      "대주주도 청약에 참여하나 — 참여 비율과 금액이 경영진 신뢰도의 시그널",
                      "실권주 처리 방법은 무엇인가 — 재공모인지, 서브언더라이터가 인수하는지",
                      "향후 추가 유상증자 가능성은 없는가 — '이번이 마지막인가'에 대한 명확한 답변 필요",
                    ]
                  : [
                      "What exactly are the proceeds for — Is it M&A, capex, or debt repayment? Be specific.",
                      "How much will Pro-forma EPS be diluted — What % drop in EPS after new share issuance?",
                      "Is the controlling shareholder subscribing — Participation rate and amount signals management confidence",
                      "How are lapsed rights handled — Re-offer or automatic sub-underwriter pickup?",
                      "Is another rights issue possible — Investors need a clear answer on 'is this the last one?'",
                    ]
              }
            />
          </motion.section>

          {/* Section 7 — Global Rules */}
          <motion.section id="global-rules" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "해외 유상증자 vs 한국 규정 차이" : "Global vs Korean Rights Issue Rules"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "미국·영국·한국 규정 비교" : "US · UK · Korea Regulation Comparison"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.p variants={fadeUp(0)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {ko
                ? "유상증자는 국가마다 규정이 크게 다르다. 미국은 Shelf Registration으로 사전 등록 후 수시 발행이 가능하지만 소액주주 선취매권(Pre-emptive Rights)이 없다. 영국은 FCA 규정상 주주 우선권이 강제되며, 한국은 자본시장법으로 주주배정을 원칙으로 한다."
                : "Rights issue regulations differ significantly by country. The US allows immediate issuance via pre-registered Shelf filings but has no mandatory pre-emptive rights. The UK mandates shareholder priority under FCA rules. Korea requires rights priority under the Financial Services and Capital Markets Act."}
            </motion.p>

            <GlobalRulesTable ko={ko} />

            <motion.div variants={fadeUp(0.1)} className="mt-5 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700">
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="font-bold text-gray-700 dark:text-gray-300">{ko ? "실무 함의: " : "Practical implication: "}</span>
                {ko
                  ? "한국 기업이 해외 유상증자(ADR·GDR 구조 포함)를 검토할 때는 본국 규정 외에 대상국 규정을 동시에 파악해야 한다. 특히 Regulation S(미국 밖 투자자 대상) 또는 Rule 144A(미국 기관 투자자 대상) 적용 여부가 해외 기관 참여 가능성을 결정한다."
                  : "When Korean companies consider overseas rights issues (including ADR/GDR structures), they must understand both domestic and target-country regulations. In particular, whether Regulation S (non-US investors) or Rule 144A (US institutional investors) applies determines the feasibility of overseas institutional participation."}
              </p>
            </motion.div>
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
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-followon",         ko: "Ch.7 팔로우온",     en: "Ch.7 Follow-on"       },
                { slug: "ecm-convertible",       ko: "Ch.8 전환사채",     en: "Ch.8 Convertible Bond"},
                { slug: "ecm-overview",          ko: "ECM 개요",          en: "ECM Overview"         },
                { slug: "ecm-ipo-bookbuilding",  ko: "Ch.5 북빌딩",       en: "Ch.5 Book-Building"   },
                { slug: "ecm-ipo-post",          ko: "Ch.6 포스트-IPO",   en: "Ch.6 Post-IPO"        },
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
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}<span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market-101" : "/en/market-101"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline">
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link href={ko ? "/market-101/ecm-followon" : "/en/market-101/ecm-followon"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
              {ko ? "Ch.7 팔로우온 →" : "Ch.7 Follow-on →"}
            </Link>
          </div>

        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-rights-issue");
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
