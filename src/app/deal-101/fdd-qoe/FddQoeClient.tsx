"use client";

/**
 * Deal 101 / FDD 101 Ch.4 — Quality of Earnings
 * Bilingual (lang prop). Heart of the FDD series.
 *
 * Series thesis: EBITDA is not "found." It is adjusted. And whoever controls
 * the adjustment controls the price.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Lang = "ko" | "en";
interface Props { lang: Lang; }

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

// ── Hero waterfall data (representative / anonymized) ────────────
type Step = { name: string; nameEn: string; value: number; type: "total" | "add" | "sub"; note?: string; noteEn?: string };

const RAW_BRIDGE: Step[] = [
  { name: "Reported EBITDA", nameEn: "Reported EBITDA", value: 42.0, type: "total" },
  { name: "+ 일회성 법률·자문비", nameEn: "+ Non-recurring legal/transaction", value: 3.2, type: "add",
    note: "전임 CFO 해고 합의금 + 매각 자문비 — 인수 후 미반복",
    noteEn: "Severance + sell-side advisory — non-recurring post-close" },
  { name: "+ 오너 보수 정상화", nameEn: "+ Owner comp normalization", value: 1.8, type: "add",
    note: "CEO 보수가 시장가 대비 과다 — 정상 수준으로 환산",
    noteEn: "Founder-CEO above-market comp normalized to peer median" },
  { name: "− FX 일회성 환차익", nameEn: "− One-time FX gain", value: -1.6, type: "sub",
    note: "헤지 해제 시점 일시 환차익 — 반복 불가",
    noteEn: "Hedge unwind gain — won't repeat" },
  { name: "+ 신규 SaaS 계약 Run-rate", nameEn: "+ Run-rate (new SaaS contracts)", value: 2.5, type: "add",
    note: "Sep '25 체결 3건 계약의 12개월 annualization",
    noteEn: "12-month annualization of 3 contracts signed Sep '25" },
  { name: "− 매출 cutoff 조정", nameEn: "− Revenue cutoff", value: -0.9, type: "sub",
    note: "Q4 마감 직전 인식한 매출 중 인도 미완료분 환원",
    noteEn: "Reverse Q4-end revenue not yet delivered" },
  { name: "+ IFRS 16 리스 영향", nameEn: "+ IFRS 16 lease impact", value: 2.4, type: "add",
    note: "운용리스 → 사용권자산화로 임차료가 D&A·이자로 재분류",
    noteEn: "Operating-lease rent reclassified to D&A + interest" },
  { name: "Adjusted EBITDA", nameEn: "Adjusted EBITDA", value: 49.4, type: "total" },
];

function buildBridge(raw: Step[], lang: Lang) {
  let running = 0;
  return raw.map((d) => {
    if (d.type === "total") {
      running = d.value;
      return { name: lang === "ko" ? d.name : d.nameEn, invisible: 0, value: d.value, end: d.value, color: "total" as const, note: lang === "ko" ? d.note : d.noteEn };
    }
    if (d.type === "add") {
      const prev = running;
      running += d.value;
      return { name: lang === "ko" ? d.name : d.nameEn, invisible: prev, value: d.value, end: running, color: "add" as const, note: lang === "ko" ? d.note : d.noteEn };
    }
    // sub
    const prev = running;
    running += d.value;
    return { name: lang === "ko" ? d.name : d.nameEn, invisible: running, value: -d.value, end: running, color: "sub" as const, note: lang === "ko" ? d.note : d.noteEn };
  });
}

const FILL = { total: "#6366f1", add: "#10b981", sub: "#ef4444" };

// ── 7 categories of QoE adjustments (universal taxonomy) ─────────
type Cat = { num: string; ko: { title: string; desc: string; examples: string[] }; en: { title: string; desc: string; examples: string[] } };

const QOE_CATEGORIES: Cat[] = [
  {
    num: "01",
    ko: {
      title: "비반복(Non-recurring) 항목",
      desc: "딜 자체 또는 1회성 사건으로 발생한 비용·수익. 다음 12개월에 재발하지 않는다.",
      examples: [
        "M&A 자문료, 변호사비, 회계법인 비용",
        "CEO·CFO 교체에 따른 일시 보상금·합의금",
        "공장 1회성 리콜·소송 합의금",
        "지진·홍수·코로나 등 외부 충격 대응 비용",
        "자산 매각 손익(부동산·자회사 매각)",
      ],
    },
    en: {
      title: "Non-recurring items",
      desc: "Costs or gains tied to the deal itself or a one-off event. Will not repeat in the next 12 months.",
      examples: [
        "M&A advisory, legal, accounting fees",
        "Severance / sign-on related to CEO or CFO turnover",
        "One-time product recalls, litigation settlements",
        "Disaster/COVID-related response costs",
        "Gain/loss on asset sales (real estate, subsidiary divestiture)",
      ],
    },
  },
  {
    num: "02",
    ko: {
      title: "기간귀속(Out-of-period) 조정",
      desc: "매출/비용이 잘못된 기간에 인식된 경우. 매도자는 '좋은 분기'로 끌어오고 '나쁜 분기'에서 밀어내려 한다.",
      examples: [
        "분기 말 인도 미완료 출하 — 매출 조기 인식",
        "차년도 예산 회수 위해 비용 이연(prepayment)",
        "충당부채(보증·반품) 과소 계상 → 다음 기간 손실",
        "감가상각 비율 변경으로 비용 미인식",
      ],
    },
    en: {
      title: "Out-of-period adjustments",
      desc: "Revenue or expense booked in the wrong period. Sellers pull good quarters forward and push bad quarters out.",
      examples: [
        "Shipments not yet delivered booked as revenue at quarter-end",
        "Expenses prepaid to depress next-period cost",
        "Under-accrual of warranty/returns provisions",
        "Depreciation rate changes that delay expense",
      ],
    },
  },
  {
    num: "03",
    ko: {
      title: "Pro-forma 조정",
      desc: "딜 종결 시점에 이미 일어난 사건을 마치 전체 기간에 적용된 것처럼 환산한다. 인수, 매각, 사업부 폐쇄가 대표적.",
      examples: [
        "회계연도 중 인수한 자회사를 12개월 풀로 합산",
        "이미 매각·청산한 사업부의 손실을 분리(carve-out)",
        "공장 폐쇄로 줄어들 고정비를 미리 차감",
        "Cost-out 프로그램 — 이미 시행 결정된 절감액 반영",
      ],
    },
    en: {
      title: "Pro-forma adjustments",
      desc: "Events that already occurred but get annualized as if they applied for the full period. Acquisitions, divestitures, and facility closures.",
      examples: [
        "Mid-year acquisition annualized to a full 12 months",
        "Divested/discontinued segment carved out of historicals",
        "Fixed-cost savings from already-decided plant closures",
        "Committed cost-out program savings folded forward",
      ],
    },
  },
  {
    num: "04",
    ko: {
      title: "Run-rate 조정",
      desc: "이미 체결됐지만 아직 매출에 반영되지 않은 계약을 연환산한다. SaaS·구독 사업에서 가장 공격적으로 쓰인다.",
      examples: [
        "Q4 체결한 신규 ARR 계약 → 12개월 풀로 환산",
        "가격 인상이 적용된 첫 분기만 잡혔다 → 4분기 적용 환산",
        "신규 지점·매장 — Stabilized 매출로 ramp",
        "공장 가동률 — Full capacity 가정",
      ],
    },
    en: {
      title: "Run-rate adjustments",
      desc: "Contracts already signed but not yet fully reflected in revenue, annualized forward. Most aggressively used in SaaS/subscription deals.",
      examples: [
        "New ARR signed in Q4 annualized to 12 months",
        "Price increase only reflected one quarter — extended to four",
        "New stores/branches ramped to stabilized revenue",
        "Plant utilization assumed at full capacity",
      ],
    },
  },
  {
    num: "05",
    ko: {
      title: "회계정책(Accounting policy) 변경",
      desc: "같은 거래도 회계 기준에 따라 EBITDA가 달라진다. 가장 민감한 영역은 매출 인식과 리스.",
      examples: [
        "Bill-and-hold 매출 인식 — ASC 606 / IFRS 15 위반 가능",
        "Capitalization vs Expensing — R&D, 소프트웨어 개발비",
        "Inventory 평가 — LIFO/FIFO 변경",
        "운용리스 → IFRS 16 사용권자산화 (EBITDA 부풀림)",
        "충당부채 인식 정책 변경",
      ],
    },
    en: {
      title: "Accounting policy changes",
      desc: "The same transaction can produce different EBITDA under different standards. The most sensitive areas are revenue recognition and leases.",
      examples: [
        "Bill-and-hold revenue — potential ASC 606 / IFRS 15 issue",
        "Capitalization vs expensing — R&D, internal software",
        "Inventory method change — LIFO/FIFO",
        "Operating lease → IFRS 16 right-of-use (boosts EBITDA)",
        "Provision recognition policy changes",
      ],
    },
  },
  {
    num: "06",
    ko: {
      title: "경영진 추정(Management estimates)",
      desc: "대손충당금, 보증충당금, 재고 진부화, 영업권 손상 — 경영진 판단이 들어가는 모든 추정이 도마 위에 오른다.",
      examples: [
        "매출채권 대손충당금 비율 — 동종 업계 대비 낮은가",
        "보증충당금 — 과거 클레임률 대비 적정한가",
        "재고 진부화 충당금 — 슬로우무빙 재고 처리 누락",
        "영업권 손상 미반영 — 사업부 실적 악화에도 손상 무시",
        "DB형 연금 부채 — 할인율 가정 적정성",
      ],
    },
    en: {
      title: "Management estimates",
      desc: "Bad debt, warranty, inventory obsolescence, goodwill impairment — every judgment-driven estimate gets re-tested.",
      examples: [
        "AR allowance ratio vs industry peers",
        "Warranty provision vs historical claim rate",
        "Inventory obsolescence — slow-moving SKUs missed",
        "Goodwill impairment ignored despite segment underperformance",
        "DB pension — discount rate assumption",
      ],
    },
  },
  {
    num: "07",
    ko: {
      title: "오너 관련(Owner-related) 비용",
      desc: "오너·창업자 보유 비공개 회사에서 흔하다. 인수 후에는 사라지거나 시장가로 정상화될 비용들.",
      examples: [
        "오너·가족 인건비 — 시장가 대비 과다 보수",
        "관계회사 거래 — 비시장 가격(intercompany pricing)",
        "개인 비용 회사 처리 — 차량·여행·골프 회원권",
        "본사 공유 비용 배분 — 모회사 overhead 과다 청구",
        "오너 소유 부동산 임차료 — 시세 대비 높은 임대료",
      ],
    },
    en: {
      title: "Owner-related items",
      desc: "Common in founder-/owner-held private companies. Costs that disappear or normalize to market post-acquisition.",
      examples: [
        "Above-market comp for owner/family employees",
        "Related-party transactions at non-market prices",
        "Personal expenses (cars, travel, club memberships) run through the P&L",
        "Parent overhead allocation overcharge",
        "Above-market rent paid on owner-held real estate",
      ],
    },
  },
];

export default function FddQoeClient({ lang }: Props) {
  const ko = lang === "ko";
  const bridge = buildBridge(RAW_BRIDGE, lang);
  const homeHref = ko ? "/deal-101" : "/en/deal-101";
  const fddHref = ko ? "/deal-101/fdd" : "/en/deal-101/fdd";

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href={homeHref} className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <Link href={fddHref} className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                FDD
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">{ko ? "Ch.4 · QoE" : "Ch.4 · QoE"}</span>
            </div>

            <span className="inline-block text-[10px] font-semibold tracking-wider uppercase bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              FDD 101 · Ch.4 · {ko ? "시리즈의 심장" : "Heart of the Series"}
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {ko
                ? "Quality of Earnings — EBITDA는 발견되는 게 아니라 조정되는 숫자다"
                : "Quality of Earnings — EBITDA Is Not Found. It Is Adjusted."}
            </h1>

            <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {ko
                ? "매도자가 IM에 적은 EBITDA와 FDD팀이 다시 만든 EBITDA — 그 사이 평균 5~20%의 차이가 존재하고, 그 차이에 EV/EBITDA 멀티플을 곱하면 수백억에서 수천억의 가격이 움직인다. PwC, EY, KPMG, Deloitte의 Transaction Services 팀이 4~8주 동안 만드는 단 하나의 숫자 — Adjusted EBITDA. 그 만드는 법을 분해한다."
                : "Between the EBITDA on the IM and the EBITDA the FDD team rebuilds sits a 5–20% gap on average. Multiply that gap by EV/EBITDA and hundreds of millions of dollars move at the negotiating table. The single number Big 4 Transaction Services teams spend 4–8 weeks producing — Adjusted EBITDA. We take it apart."}
            </p>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#why", label: ko ? "왜 QoE인가" : "Why QoE" },
                { href: "#bridge", label: ko ? "EBITDA Bridge" : "EBITDA Bridge" },
                { href: "#taxonomy", label: ko ? "7가지 조정 유형" : "7 Adjustment Types" },
                { href: "#standards", label: ko ? "회계기준 비교" : "Standards Box" },
                { href: "#case-us", label: ko ? "US 케이스" : "US Case" },
                { href: "#case-ko", label: ko ? "KO 케이스" : "Korea Case" },
                { href: "#case-xb", label: ko ? "Cross-border" : "Cross-border" },
                { href: "#day", label: ko ? "FDD 시니어의 한 주" : "Day-in-the-Life" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="rounded-full px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 hover:opacity-80 transition-opacity">
                  {item.label}
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-400 dark:text-gray-500">
              {ko ? "예상 독서 시간 약 22분 · 한·미·글로벌 dual-case" : "Estimated reading time ~22 min · KO·US·Global dual-case"}
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-12 space-y-16">

          {/* ── 1. Why QoE ─────────────────────────────────────── */}
          <motion.section id="why" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §1 — {ko ? "왜 QoE가 FDD의 심장인가" : "Why QoE Is the Heart of FDD"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko
                ? "Adjusted EBITDA는 GAAP가 아니다. 그것은 *서사*다."
                : "Adjusted EBITDA Is Not GAAP. It Is a Story."}
            </h2>

            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko ? (
                  <>매도자는 IM(Information Memorandum)에 <strong className="text-gray-900 dark:text-gray-100">최선의 시나리오 EBITDA</strong>를 적는다. 일회성 비용은 모두 제거하고, 신규 계약은 12개월로 환산하고, Cost-out 절감액은 미리 반영한다. 매수자가 인수 후 "실제로 손에 쥘 수 있는 EBITDA"가 아니라 "팔기 위한 EBITDA"다.</>
                ) : (
                  <>The seller writes a <strong className="text-gray-900 dark:text-gray-100">best-case EBITDA</strong> into the IM. One-time costs stripped out, new contracts annualized to twelve months, committed cost-outs folded in. This is not "EBITDA the buyer will actually inherit." It is "EBITDA to sell with."</>
                )}
              </p>
              <p>
                {ko ? (
                  <>FDD의 목적은 단순하다 — 그 숫자가 <strong className="text-gray-900 dark:text-gray-100">지속 가능(sustainable)</strong>한지, 그리고 <strong className="text-gray-900 dark:text-gray-100">대표성(representative)</strong>이 있는지를 독립적으로 검증한다. 매도자가 더한 항목을 빼야 할 이유, 매도자가 뺀 항목을 다시 더해야 할 이유 — 양방향으로 모두 본다. 좋은 FDD는 가격을 깎으려는 무기가 아니라 인수 후 PMI 계획의 출발선이다.</>
                ) : (
                  <>FDD has a simple purpose — verify, independently, whether that number is <strong className="text-gray-900 dark:text-gray-100">sustainable</strong> and <strong className="text-gray-900 dark:text-gray-100">representative</strong>. Reasons to strip what the seller added back, reasons to add back what the seller stripped — both directions. A good FDD is not a weapon to lower the price; it is the starting line for the post-close PMI plan.</>
                )}
              </p>
              <p>
                {ko ? (
                  <>업계 경험칙: <strong className="text-gray-900 dark:text-gray-100">IM EBITDA와 QoE EBITDA 사이 평균 5~20% 차이</strong>가 발생한다. 9× EV/EBITDA 멀티플의 딜에서 10% 격차는 곧 <strong className="text-gray-900 dark:text-gray-100">EV의 ~9%가 협상 테이블 위로 올라온다</strong>는 뜻이다. $1B 딜이라면 $90M, KRW 1조 딜이라면 900억. FDD가 단순 회계 작업이 아니라 가격의 핵이라 불리는 이유다.</>
                ) : (
                  <>The industry rule of thumb: IM EBITDA versus QoE EBITDA differs by <strong className="text-gray-900 dark:text-gray-100">5–20% on average</strong>. In a 9× EV/EBITDA deal, a 10% gap puts roughly <strong className="text-gray-900 dark:text-gray-100">9% of enterprise value on the negotiating table</strong>. On a $1B deal that is $90M. This is why FDD is called the heart of price discovery, not a back-office accounting task.</>
                )}
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-6 border-l-4 border-rose-400 dark:border-rose-500 pl-4 py-2 italic text-[15px] text-gray-700 dark:text-gray-300">
              {ko
                ? <>"Adjusted EBITDA는 GAAP가 아니다. 그것은 서사다. 좋은 FDD는 그 서사가 다음 분기에도 살아남는지를 묻는다."<br/><span className="not-italic text-xs text-gray-500">— Big 4 Transaction Services Director (Anonymous)</span></>
                : <>"Adjusted EBITDA is not GAAP. It is a story. Good FDD asks whether that story survives next quarter."<br/><span className="not-italic text-xs text-gray-500">— Big 4 Transaction Services Director (anonymous)</span></>}
            </blockquote>
          </motion.section>

          {/* ── 2. EBITDA Bridge (Hero Chart) ──────────────────── */}
          <motion.section id="bridge" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §2 — {ko ? "EBITDA Bridge — 시리즈의 중심 차트" : "EBITDA Bridge — The Hero Chart"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "Reported $42.0M에서 Adjusted $49.4M까지 — 7개의 조정" : "From Reported $42.0M to Adjusted $49.4M — Seven Adjustments"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {ko
                ? "아래 차트는 실제 PwC·EY·KPMG·Deloitte QoE 보고서에 등장하는 표준 형식이다. 가독성을 위해 대표적·익명화된 숫자를 사용했다."
                : "This is the standard waterfall format used in PwC, EY, KPMG, and Deloitte QoE reports. Numbers are representative and anonymized for readability."}
            </p>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-3 sm:p-4">
              <div className="h-[420px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bridge} margin={{ top: 20, right: 8, left: -10, bottom: 90 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" vertical={false} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#6b7280" }}
                      interval={0}
                      angle={-35}
                      textAnchor="end"
                      height={90}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#6b7280" }}
                      label={{ value: ko ? "$M" : "USD M", angle: -90, position: "insideLeft", offset: 18, style: { fontSize: 10, fill: "#6b7280" } }}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(99,102,241,0.06)" }}
                      contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12 }}
                      formatter={((val: unknown, key: unknown, ctx: { payload?: { color?: string } }) => {
                        if (key === "invisible") return ["", ""];
                        const num = typeof val === "number" ? val : Number(val);
                        const color = ctx?.payload?.color;
                        const sign = color === "sub" ? "−" : color === "total" ? "" : "+";
                        return [`${sign}$${num.toFixed(1)}M`, ko ? "조정액" : "Adjustment"];
                      }) as never}
                    />
                    <ReferenceLine y={0} stroke="#9ca3af" />
                    <Bar dataKey="invisible" stackId="a" fill="transparent" />
                    <Bar dataKey="value" stackId="a" radius={[3, 3, 0, 0]}>
                      {bridge.map((d, i) => (
                        <Cell key={i} fill={FILL[d.color]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="mt-3 flex flex-wrap gap-3 text-[11px]">
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: FILL.total }} />{ko ? "총계" : "Total"}</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: FILL.add }} />{ko ? "가산(+)" : "Add (+)"}</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: FILL.sub }} />{ko ? "차감(−)" : "Subtract (−)"}</span>
              </div>
            </div>

            {/* Step-by-step breakdown table */}
            <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <table className="w-full text-[13px]">
                <thead className="bg-gray-50 dark:bg-gray-800/60 text-left text-xs text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="px-3 py-2 font-semibold">{ko ? "단계" : "Step"}</th>
                    <th className="px-3 py-2 font-semibold text-right">{ko ? "금액" : "Amount"}</th>
                    <th className="px-3 py-2 font-semibold text-right">{ko ? "누계" : "Running"}</th>
                    <th className="px-3 py-2 font-semibold">{ko ? "FDD 사유" : "FDD Rationale"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {bridge.map((d, i) => (
                    <tr key={i} className={d.color === "total" ? "bg-indigo-50/40 dark:bg-indigo-900/10" : ""}>
                      <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{d.name}</td>
                      <td className={`px-3 py-2 text-right font-mono ${d.color === "sub" ? "text-rose-600 dark:text-rose-400" : d.color === "add" ? "text-emerald-600 dark:text-emerald-400" : "text-indigo-600 dark:text-indigo-300 font-semibold"}`}>
                        {d.color === "total" ? `$${d.end.toFixed(1)}M` : (d.color === "sub" ? "−" : "+") + `$${d.value.toFixed(1)}M`}
                      </td>
                      <td className="px-3 py-2 text-right font-mono text-gray-500 dark:text-gray-400">${d.end.toFixed(1)}M</td>
                      <td className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 leading-snug">{d.note ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Multiple impact */}
            <div className="mt-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1.5">
                {ko ? "이 차트가 가격에 미치는 영향" : "Why this chart moves the price"}
              </p>
              <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
                {ko
                  ? <>$42.0M → $49.4M, +17.6% 차이. 9× EV/EBITDA 멀티플을 적용하면 EV가 <strong>$378M → $445M, 즉 $67M 차이</strong>가 발생한다. SPA Purchase Price에 직접 반영되는 숫자다. 양방향 모두 가능 — 가산이 더 많으면 매도자에게 유리하고, 차감이 더 많으면 매수자에게 유리하다.</>
                  : <>$42.0M → $49.4M, +17.6%. At a 9× EV/EBITDA multiple, EV moves from <strong>$378M to $445M — a $67M swing</strong>. That swing lands directly on the SPA purchase price. The direction can go either way: more add-backs favor the seller, more deductions favor the buyer.</>}
              </p>
            </div>
          </motion.section>

          {/* ── 3. 7 categories ────────────────────────────────── */}
          <motion.section id="taxonomy" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §3 — {ko ? "QoE 조정의 7가지 유형 (Universal Taxonomy)" : "The 7 Categories of QoE Adjustments"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "전 세계 Big 4가 동일하게 쓰는 분류" : "The Same Taxonomy Every Big 4 Uses"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "PwC New York이든 EY Seoul이든 KPMG London이든 — QoE 보고서의 분류는 거의 동일하다. 각 유형마다 매도자가 '공격적'으로 쓰는 패턴이 정해져 있다."
                : "PwC New York, EY Seoul, KPMG London — the categorization is virtually identical. Each category has a known set of patterns sellers stretch."}
            </p>

            <div className="space-y-4">
              {QOE_CATEGORIES.map((cat) => {
                const c = ko ? cat.ko : cat.en;
                return (
                  <div key={cat.num} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-rose-50/60 dark:bg-rose-900/15 px-4 py-3 flex items-start gap-3">
                      <span className="text-base font-bold text-rose-600 dark:text-rose-400 tabular-nums shrink-0">{cat.num}</span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c.title}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                    <ul className="px-4 py-3 space-y-1.5">
                      {c.examples.map((ex, i) => (
                        <li key={i} className="flex gap-2 text-[13px] text-gray-700 dark:text-gray-300">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-rose-400 shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 4. Standards comparison box ────────────────────── */}
          <motion.section id="standards" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §4 — {ko ? "회계기준 비교 박스" : "Standards Comparison Box"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "같은 매출, 다른 EBITDA — ASC 606 / IFRS 15 / K-IFRS 1115" : "Same Revenue, Different EBITDA — ASC 606 / IFRS 15 / K-IFRS 1115"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {ko
                ? "Cross-border 딜의 가장 큰 난제는 '환율'이 아니라 '회계기준'이다. 같은 거래에 다른 EBITDA가 나오기 때문이다."
                : "The hardest problem in cross-border deals is not FX — it is accounting standards. The same transaction produces different EBITDA."}
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[13px] min-w-[640px]">
                <thead className="bg-gray-50 dark:bg-gray-800/60 text-xs text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">{ko ? "영역" : "Area"}</th>
                    <th className="px-3 py-2 text-left font-semibold">ASC 606 (US GAAP)</th>
                    <th className="px-3 py-2 text-left font-semibold">IFRS 15</th>
                    <th className="px-3 py-2 text-left font-semibold">K-IFRS 1115</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="px-3 py-2 font-semibold">{ko ? "기본 모델" : "Core model"}</td>
                    <td className="px-3 py-2">{ko ? "5단계 모델 (동일)" : "5-step model"}</td>
                    <td className="px-3 py-2">{ko ? "5단계 모델 (동일)" : "5-step model"}</td>
                    <td className="px-3 py-2">{ko ? "5단계 모델 (IFRS 15 그대로 도입)" : "5-step model (IFRS 15 verbatim)"}</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                    <td className="px-3 py-2 font-semibold">{ko ? "라이선스 수익" : "Licensing"}</td>
                    <td className="px-3 py-2">{ko ? "기능적 vs 상징적 — 시점 vs 기간 인식" : "Functional vs symbolic — point-in-time vs over-time"}</td>
                    <td className="px-3 py-2">{ko ? "유사하나 implementation guidance가 적음" : "Similar but lighter implementation guidance"}</td>
                    <td className="px-3 py-2">{ko ? "IFRS 15 동일" : "Same as IFRS 15"}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">{ko ? "조선·건설" : "Construction"}</td>
                    <td className="px-3 py-2">{ko ? "POC 단계별 인식" : "Percentage-of-completion"}</td>
                    <td className="px-3 py-2">{ko ? "기간 인식 (Performance obligation 충족)" : "Over-time (PO satisfied)"}</td>
                    <td className="px-3 py-2">{ko ? "동일 — 단, 한국 조선/건설은 IFRS 15 도입 시 EBITDA 변동성 컸음" : "Same — Korean shipbuilders/builders saw large EBITDA volatility at adoption"}</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                    <td className="px-3 py-2 font-semibold">{ko ? "변동대가" : "Variable consideration"}</td>
                    <td className="px-3 py-2">{ko ? "Most likely amount / Expected value" : "Most likely / Expected value"}</td>
                    <td className="px-3 py-2">{ko ? "동일" : "Same"}</td>
                    <td className="px-3 py-2">{ko ? "동일" : "Same"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Lease impact */}
            <div className="mt-6 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/60 dark:bg-indigo-900/15 p-4">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {ko ? "리스 회계 — EBITDA를 가장 크게 움직이는 항목" : "Lease accounting — the biggest single EBITDA mover"}
              </p>
              <div className="text-sm text-indigo-900 dark:text-indigo-100 space-y-2 leading-relaxed">
                <p>
                  {ko
                    ? <><strong>IFRS 16 / K-IFRS 1116 (2019~)</strong>은 거의 모든 리스를 사용권자산(Right-of-Use Asset)으로 인식한다. 임차료는 <strong>EBITDA에서 사라지고</strong> 감가상각비(D&A)와 이자비용(Interest)으로 재분류된다 → <strong>EBITDA가 부풀려진다</strong>.</>
                    : <><strong>IFRS 16 / K-IFRS 1116 (effective 2019)</strong> brings nearly all leases onto the balance sheet as Right-of-Use Assets. Rent <strong>disappears from EBITDA</strong> and is reclassified into D&A and Interest → <strong>EBITDA goes up</strong>.</>}
                </p>
                <p>
                  {ko
                    ? <><strong>ASC 842 (US GAAP)</strong>도 자산화하지만, Operating Lease는 임차료를 P&L 단일 항목으로 유지한다 → <strong>EBITDA가 안 움직인다</strong>.</>
                    : <><strong>ASC 842 (US GAAP)</strong> also capitalizes leases, but Operating Leases keep a single straight-line rent expense in the P&L → <strong>EBITDA is unchanged</strong>.</>}
                </p>
                <p>
                  {ko
                    ? <>결과: 동일한 회사를 비교할 때 IFRS 기업이 US GAAP 기업보다 <strong>EBITDA 마진이 200~400bp 높게</strong> 나온다. Cross-border 거래에서 EU·KR·일본 기업의 EBITDA를 US 멀티플로 평가하면 <strong>구조적으로 과대평가</strong>된다. 그래서 EU에서는 <strong>EBITDAaL (after Leases)</strong>이라는 별도 지표가 등장했다.</>
                    : <>Result: comparing the same business, IFRS-reporting companies show <strong>EBITDA margins 200–400 bps higher</strong> than US GAAP companies. Applying US multiples to EU/KR/JP company EBITDA <strong>structurally overstates</strong> value. That is why the EU coined a separate metric — <strong>EBITDAaL (after Leases)</strong>.</>}
                </p>
              </div>
            </div>

            {/* FDD playbook */}
            <div className="mt-4 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/60 dark:bg-rose-900/15 p-4">
              <p className="text-xs font-bold text-rose-700 dark:text-rose-300 mb-1.5">
                {ko ? "FDD 플레이북" : "FDD playbook"}
              </p>
              <p className="text-sm text-rose-900 dark:text-rose-100 leading-relaxed">
                {ko
                  ? "Cross-border 딜에서는 반드시 (1) IFRS 16 lease impact를 분리해 보고, (2) ASC 842 기준으로 normalized된 EBITDAaL을 별도로 계산하고, (3) 두 숫자 모두를 SPA 협상에 제시한다. 단일 EBITDA로 협상하면 양측 어느 쪽도 만족하지 못한다."
                  : "On cross-border deals, always (1) isolate the IFRS 16 lease impact, (2) recompute a normalized EBITDAaL on an ASC 842 basis, and (3) bring both numbers to the SPA negotiation. A single EBITDA leaves both sides unhappy."}
              </p>
            </div>
          </motion.section>

          {/* ── 5. US Case — Vista × Citrix ────────────────────── */}
          <motion.section id="case-us" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §5 — {ko ? "미국 케이스" : "US Case Study"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Vista Equity × Elliott × Citrix — $16.5B {ko ? "Take-private (2022)" : "Take-Private (2022)"}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
              {ko ? "발표 2022.01 · 종결 2022.09 · 인수 후 TIBCO와 합병해 Cloud Software Group 출범" : "Announced Jan 2022 · Closed Sep 2022 · Merged with TIBCO into Cloud Software Group"}
            </p>

            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "Vista Equity와 Elliott Investment Management가 컨소시엄을 구성해 엔터프라이즈 SaaS 기업 Citrix Systems를 주당 $104, EV 약 $16.5B에 인수했다. Bank of America·Credit Suisse·Goldman·Mizuho 등이 $15B 규모의 인수 금융을 제공했다 — 미국 LBO 역사상 최대 규모의 부채 패키지 중 하나였다."
                  : "Vista Equity and Elliott Investment Management consortium took Citrix Systems private at $104/share, ~$16.5B EV. The debt package — provided by Bank of America, Credit Suisse, Goldman, Mizuho and others — was around $15B, one of the largest LBO debt packages in US history."}
              </p>
              <p>
                {ko
                  ? "Citrix는 perpetual license 시대의 엔터프라이즈 소프트웨어 회사에서 subscription model로 전환 중이었다. 이런 전환기 SaaS 회사의 QoE는 다음 항목이 핵심이다:"
                  : "Citrix was in transition from a perpetual-license enterprise software business to subscription. The QoE for a SaaS company in this transition centers on:"}
              </p>
            </div>

            <ul className="mt-3 space-y-1.5 text-[14px] text-gray-700 dark:text-gray-300">
              {(ko ? [
                "이연수익(Deferred Revenue) 잔액 — 인수 후 12개월간 인식될 매출 가시성",
                "Perpetual → Subscription 전환에 따른 매출 인식 패턴 변화 (front-loaded → ratable)",
                "Subscription Net Retention Rate (NRR) — 130%+이 SaaS의 베스트, Citrix는 100% 부근으로 추정",
                "Customer concentration — Top 10 고객 의존도와 갱신 리스크",
                "FX hedging — Citrix 매출의 ~40%가 비-USD, 헤지 효과의 일회성 환차익을 EBITDA에서 제거",
                "Stock-based compensation — Adjusted EBITDA에서 add-back하는 관행이 PE 인수에서는 보수적으로 재평가",
              ] : [
                "Deferred revenue balance — visibility on 12 months of recognizable revenue",
                "Revenue recognition shift from perpetual (front-loaded) to subscription (ratable)",
                "Subscription Net Retention Rate (NRR) — best-in-class SaaS 130%+; Citrix estimated near 100%",
                "Customer concentration — Top-10 customer dependence and renewal risk",
                "FX hedging — ~40% of Citrix revenue non-USD; hedge unwind FX gains stripped from EBITDA",
                "Stock-based compensation — the common 'add-back' is re-evaluated conservatively under PE ownership",
              ]).map((line, i) => (
                <li key={i} className="flex gap-2"><span className="mt-2 w-1 h-1 rounded-full bg-rose-400 shrink-0" />{line}</li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/30 p-4">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                {ko ? "교훈 — Take-private QoE의 핵심" : "Lesson — what take-private QoE actually digs into"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Citrix는 상장사 — 분기 공시·감사가 이미 진행됐기 때문에 부정확한 숫자는 적었다. Take-private FDD의 진짜 작업은 '숫자가 맞는가'가 아니라 '레버리지 6~7배를 견딜 수 있는 sustainable cash flow가 얼마인가'를 분리해내는 것이다. 그래서 SBC add-back을 줄이고, perpetual-tail 매출을 빼고, 헤지 효과를 정상화한 보수적 EBITDA가 채권단(lender)의 covenant 계산 기준이 된다."
                  : "Citrix was already a public company — quarterly disclosures and audits had been run, so outright misstatements were rare. The real work in take-private FDD isn't 'are the numbers right?' but 'what is the sustainable cash flow that can service 6–7× leverage?' That means scaling back the SBC add-back, removing perpetual-tail revenue, and normalizing FX hedge effects — producing a conservative EBITDA that becomes the lender's covenant base."}
              </p>
            </div>
          </motion.section>

          {/* ── 6. KO Case — Hahn × Lutronic ───────────────────── */}
          <motion.section id="case-ko" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §6 — {ko ? "한국 케이스" : "Korea Case Study"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Hahn & Co × Lutronic — KRW 957bn ≈ $735.9M {ko ? "Take-private (2023)" : "Take-Private (2023)"}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
              {ko ? "발표 2023.04 · 공개매수 + KOSDAQ 자진 상장폐지 · 의료미용 레이저/RF 디바이스" : "Announced Apr 2023 · Tender offer + KOSDAQ voluntary delisting · Aesthetic medical laser/RF devices"}
            </p>

            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "한앤컴퍼니(Hahn & Co)는 의료미용 레이저·RF 디바이스 제조사 루트로닉(Lutronic Corp, KOSDAQ 085370)을 KRW 957bn (약 $735.9M)에 take-private했다. 한국 PE 단일 take-private 딜로는 상위권 규모로, 공개매수 + 합병을 통한 자진 상장폐지 구조였다."
                  : "Hahn & Co took private Lutronic Corp (KOSDAQ 085370), a maker of aesthetic medical laser and RF devices, for KRW 957bn (~$735.9M). One of the larger single-deal Korean PE take-privates, structured as tender offer plus merger and voluntary delisting."}
              </p>
              <p>
                {ko
                  ? "한국 중견기업·KOSDAQ 상장사 FDD에서 반복적으로 등장하는 한국 특유의 QoE 이슈가 있다:"
                  : "Korean mid-cap / KOSDAQ FDD repeatedly surfaces Korea-specific QoE issues:"}
              </p>
            </div>

            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {(ko ? [
                { t: "어음·매출채권 보험", d: "기업어음(CP) 수취 매출과 매출채권 보험으로 처리한 부실채권 — 표면적 NWC가 양호해 보이게 만드는 한국적 관행" },
                { t: "관계회사 거래", d: "오너 가족 소유 별도 법인과의 거래 — Service fee·로열티·임차료가 시장가 대비 어떻게 책정됐는지 시계열로 확인" },
                { t: "특수관계자 보증", d: "오너 일가 다른 사업체의 차입에 회사 자산이 담보로 제공된 사례 — 부외부채(off-balance) 발굴" },
                { t: "퇴직급여 충당부채", d: "한국 DB형 퇴직급여 — 할인율과 임금상승률 가정에 따라 충당부채가 ±20% 변동" },
                { t: "정부 보조금·세액공제", d: "R&D 세액공제, 신성장동력 보조금 — 일회성 수익을 EBITDA에서 분리" },
                { t: "공정거래위원회 과징금", d: "조사 진행 중인 공정위·국세청 이슈 — 잠재 우발부채로 표시" },
              ] : [
                { t: "Notes & AR insurance", d: "Commercial paper (어음) revenue and AR-insurance treatment of doubtful receivables — Korean practice that makes surface NWC look healthy" },
                { t: "Related-party transactions", d: "Trades with founder-family-owned affiliates — verify service fees, royalties, and rent vs market over multiple periods" },
                { t: "Related-party guarantees", d: "Company assets pledged against borrowings of other family businesses — surface as off-balance-sheet exposure" },
                { t: "Korean severance accruals", d: "DB severance liabilities — discount-rate and wage-inflation assumptions move the accrual ±20%" },
                { t: "Government subsidies & tax credits", d: "R&D credits, new-growth subsidies — strip one-time income out of EBITDA" },
                { t: "KFTC fines pending", d: "Open investigations from KFTC or NTS — disclose as contingent liabilities" },
              ]).map((item, i) => (
                <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-gray-100">{item.t}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/30 p-4">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                {ko ? "교훈 — KOSDAQ Take-private QoE의 한국적 함정" : "Lesson — Korea-specific traps in KOSDAQ take-private QoE"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "한국 KOSDAQ FDD에서 가장 큰 실수는 K-IFRS의 표준 모델 (IFRS 동일)만 보고 '깨끗하다'고 판단하는 것이다. 진짜 함정은 표준 밖에 있다 — 오너 가족 거래, 어음 관행, 관계회사 보증, 진행 중인 공정위 조사. 글로벌 PE가 한국 첫 딜에서 가장 자주 놓치는 항목이고, 한앤컴퍼니 같은 한국 토종 PE가 가격 협상에서 유리한 이유다."
                  : "The biggest mistake in Korean KOSDAQ FDD is concluding the books are clean because K-IFRS (identical to IFRS) was followed. The real traps live outside the standards — founder-family transactions, commercial-paper practice, related-party guarantees, open KFTC investigations. These are what global PEs miss on their first Korea deal, and a major reason domestic PEs like Hahn have a price-negotiation edge."}
              </p>
              <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400 italic">
                {ko ? "주: 본 딜 가격은 공개 자료 기준이며, QoE 조정 항목은 한국 KOSDAQ FDD에서 일반적으로 발견되는 패턴을 대표적으로 서술한 것이다." : "Note: deal value is from public sources; QoE adjustment items are representative of patterns typically found in Korean KOSDAQ FDD."}
              </p>
            </div>
          </motion.section>

          {/* ── 7. Cross-border — Samsung × Harman ─────────────── */}
          <motion.section id="case-xb" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §7 — {ko ? "Cross-border 케이스" : "Cross-Border Case Study"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Samsung Electronics × Harman International — $8.0B (2017)
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
              {ko ? "발표 2016.11 · 종결 2017.03 · 자동차 인포테인먼트 · 한국 K-IFRS × 미국 US GAAP" : "Announced Nov 2016 · Closed Mar 2017 · Automotive infotainment · Korean K-IFRS × US GAAP"}
            </p>

            <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                {ko
                  ? "삼성전자는 Harman International (NYSE 상장)을 주당 $112 (프리미엄 28%), 총 $8.0B에 인수했다. 한국 기업의 미국 상장사 100% 인수로는 사상 최대 규모. 자동차 인포테인먼트·커넥티드 카·오디오 브랜드(JBL, Harman/Kardon 등) 포트폴리오를 확보하는 전략적 인수였다."
                  : "Samsung Electronics acquired Harman International (NYSE-listed) at $112/share, a 28% premium, for $8.0B in aggregate — the largest 100% acquisition of a US-listed company by a Korean firm. The strategic rationale: automotive infotainment, connected car, and audio brands (JBL, Harman/Kardon, etc.)."}
              </p>
              <p>
                {ko
                  ? "Cross-border FDD의 첫 작업은 항상 '회계기준 브릿지' 작성이다. Harman은 US GAAP, Samsung은 K-IFRS. 이 둘 사이에서 EBITDA에 영향을 주는 항목:"
                  : "The first task in cross-border FDD is always the standards bridge. Harman reported under US GAAP, Samsung under K-IFRS. EBITDA-affecting differences:"}
              </p>
            </div>

            <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[13px] min-w-[560px]">
                <thead className="bg-gray-50 dark:bg-gray-800/60 text-xs text-gray-600 dark:text-gray-400">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">{ko ? "항목" : "Item"}</th>
                    <th className="px-3 py-2 text-left font-semibold">US GAAP (Harman)</th>
                    <th className="px-3 py-2 text-left font-semibold">K-IFRS (Samsung view)</th>
                    <th className="px-3 py-2 text-left font-semibold">{ko ? "EBITDA 영향" : "EBITDA impact"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="px-3 py-2 font-semibold">{ko ? "운용리스" : "Operating leases"}</td>
                    <td className="px-3 py-2">{ko ? "ASC 842 단일 항목(rent)" : "ASC 842 single rent line"}</td>
                    <td className="px-3 py-2">{ko ? "K-IFRS 1116 사용권자산화" : "K-IFRS 1116 right-of-use"}</td>
                    <td className="px-3 py-2 text-emerald-600 dark:text-emerald-400">+EBITDA</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                    <td className="px-3 py-2 font-semibold">{ko ? "OEM 리베이트" : "OEM rebates"}</td>
                    <td className="px-3 py-2">{ko ? "매출 차감(Net)" : "Net revenue"}</td>
                    <td className="px-3 py-2">{ko ? "매출 차감(Net) — 동일" : "Net revenue (same)"}</td>
                    <td className="px-3 py-2">{ko ? "중립" : "Neutral"}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">{ko ? "보증 충당부채" : "Warranty accrual"}</td>
                    <td className="px-3 py-2">{ko ? "통계적 추정 (claim history)" : "Statistical claim-history estimate"}</td>
                    <td className="px-3 py-2">{ko ? "동일 — 단, 자동차 OEM 클레임은 1~5년 지연" : "Same — but auto OEM claims lag 1–5 years"}</td>
                    <td className="px-3 py-2 text-rose-600 dark:text-rose-400">−EBITDA {ko ? "(과소 추정 시)" : "(if under-estimated)"}</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                    <td className="px-3 py-2 font-semibold">{ko ? "방산 사업부" : "Defense segment"}</td>
                    <td className="px-3 py-2">{ko ? "Long-term contract — POC" : "Long-term contract POC"}</td>
                    <td className="px-3 py-2">{ko ? "동일 — 단, 매각 발표로 carve-out" : "Same — but carved out for sale"}</td>
                    <td className="px-3 py-2">{ko ? "Pro-forma 차감" : "Pro-forma subtract"}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">{ko ? "고객 집중도" : "Customer concentration"}</td>
                    <td className="px-3 py-2">{ko ? "Top OEM (Audi/BMW/Mercedes) 의존" : "Top OEMs (Audi/BMW/Mercedes)"}</td>
                    <td className="px-3 py-2">{ko ? "공시 동일" : "Same disclosure"}</td>
                    <td className="px-3 py-2">{ko ? "EBITDA 직접 영향 없으나 multiple 할인" : "No direct EBITDA hit, multiple discount"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/30 p-4">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                {ko ? "교훈 — 회계기준 브릿지 ≠ 경제적 브릿지" : "Lesson — the standards bridge ≠ the economic bridge"}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Samsung×Harman은 회계 차이만 보면 IFRS 16/K-IFRS 1116으로 인해 EBITDA가 상승하는 deal이었다. 하지만 진짜 가격 협상의 핵심은 (1) 자동차 OEM 클레임 1~5년 지연 — 보증 충당부채 과소 추정 가능성, (2) 방산 사업부 carve-out 후 EBITDA 재산정, (3) 미국 vs 한국 R&D 자본화 관행 차이였다. 회계기준 브릿지는 출발선이지 종착점이 아니다 — 경제적 브릿지는 그 다음에 만들어진다."
                  : "Looked at purely as a standards comparison, Samsung×Harman was an EBITDA-positive bridge (IFRS 16 lift). The real negotiation hinged elsewhere: (1) auto-OEM warranty claims that lag 1–5 years — under-accrual risk, (2) re-baselined EBITDA after the defense-segment carve-out, (3) different US vs Korea R&D capitalization practice. The standards bridge is the starting line, not the finish line — the economic bridge is built after it."}
              </p>
            </div>
          </motion.section>

          {/* ── 8. Day-in-the-Life ─────────────────────────────── */}
          <motion.section id="day" initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
              §8 — {ko ? "FDD 시니어 어소시에이트의 한 주" : "Day-in-the-Life — FDD Senior Associate"}
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "월요일 오전 9시 — Kickoff" : "Monday 9 a.m. — Kickoff"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {ko
                ? "Big 4 Transaction Services 팀의 표준 1주차. Senior Manager 리딩, Senior Associate 1~2명, Associate 3~5명, 그리고 secondment 형태로 들어온 Manager 1명이 일반적 구성이다."
                : "A standard Week 1 in Big 4 Transaction Services. A typical team is one Senior Manager lead, 1–2 Senior Associates, 3–5 Associates, and one Manager on secondment."}
            </p>

            <div className="space-y-3">
              {[
                {
                  day: ko ? "월요일" : "Monday",
                  time: "9:00 – 11:00",
                  title: ko ? "Kickoff call (audit committee + IB + 매도자 CFO)" : "Kickoff call (audit committee + IB + seller CFO)",
                  detail: ko
                    ? "Scope of work 확인, VDR 접근 권한 부여, 매주 화·목 status call schedule 확정. PE bidder인 경우 IC deadline (보통 4~6주 후)을 역산해 마일스톤 확정."
                    : "Lock down scope of work, get VDR access provisioned, set Tue/Thu status-call cadence. For PE bidders, the IC deadline (typically 4–6 weeks out) drives the milestone backward-plan.",
                },
                {
                  day: ko ? "월~화" : "Mon–Tue",
                  time: "11:00 – 19:00",
                  title: ko ? "1st VDR pass — '숫자가 어디 있나'" : "First VDR pass — 'where do the numbers live?'",
                  detail: ko
                    ? "재무팀이 받은 VDR의 ~2,000개 문서를 5명이 4~5시간 안에 1차 인덱싱. 핵심 추출: 월별 P&L 36개월치, 매출 by SKU/region/customer, 매출채권/매입채무 aging, 인건비 by team, CapEx breakdown, 관계회사 거래 명세. 부재한 자료는 Q&A 리스트 #1로 정리."
                    : "Index ~2,000 VDR documents across 5 people in 4–5 hours. Pull the essentials: 36 months of monthly P&L, revenue by SKU/region/customer, AR/AP aging, headcount by team, CapEx breakdown, related-party transaction schedule. Missing items become Q&A list #1.",
                },
                {
                  day: ko ? "화" : "Tue",
                  time: "19:00 – 23:00",
                  title: ko ? "월별 P&L 정상화 모델 구축" : "Build the monthly P&L normalization model",
                  detail: ko
                    ? "36개월 P&L을 표준화된 Excel template에 입력. 시즌너빌리티 패턴 추출, 비정상 월 식별 (예: COVID 영향 2020.03~05, 일회성 매출 vs 비용 spike). 이게 EBITDA Bridge의 base layer."
                    : "Load 36 months of P&L into the standard Excel template. Pull out seasonality, flag abnormal months (e.g., COVID hit Mar–May 2020, one-time revenue/expense spikes). This is the base layer of the EBITDA bridge.",
                },
                {
                  day: ko ? "수" : "Wed",
                  time: "9:00 – 17:00",
                  title: ko ? "관계회사·오너 거래 deep-dive" : "Related-party / owner-transaction deep-dive",
                  detail: ko
                    ? "오너 가족이 임원으로 있는 모든 자회사·관계회사 거래를 시계열로 분석. Service fee의 시장가 적정성, 임차료의 시장 비교, 관계회사 매출의 cross-check (반대편 회사에서도 매입으로 잡혔는가). 한국 KOSDAQ·중견기업에서 항상 발견되는 항목."
                    : "Time-series the transactions with every subsidiary/affiliate where the owner-family holds officer positions. Test service-fee fairness vs market, benchmark rent, cross-check related-party revenue against the counterparty's books. Always found in Korean KOSDAQ / mid-caps.",
                },
                {
                  day: ko ? "목" : "Thu",
                  time: "9:00 – 12:00",
                  title: ko ? "1차 management Q&A — CFO + Controller" : "First management Q&A — CFO + Controller",
                  detail: ko
                    ? "월요일~수요일에 모은 Q&A 50~100개를 매도자 CFO에게 전달. Live Q&A 3시간으로 핵심 항목 직접 검증. 답변 회피 패턴 (vague answer, 자료 부재, 책임 전가)이 red flag으로 분류됨."
                    : "Hand the 50–100 Q&As collected Mon–Wed to the seller CFO. Three hours of live Q&A to verify key items directly. Avoidance patterns (vague answers, 'no documentation,' deflection) are classified as red flags.",
                },
                {
                  day: ko ? "금" : "Fri",
                  time: "14:00 – 18:00",
                  title: ko ? "1차 EBITDA Bridge — bay-side IB와 공유" : "First-cut EBITDA bridge — share with buy-side IB",
                  detail: ko
                    ? "$42M IM EBITDA → $46~50M adjusted EBITDA range를 잠정 산출. 가산 항목과 차감 항목, 각 항목의 confidence level (High/Medium/Low). IB는 이 숫자로 LOI 가격 조정 협상 시뮬레이션을 시작한다."
                    : "Produce a preliminary range: $42M IM EBITDA → $46–50M adjusted EBITDA. Adjustments split by add vs subtract, each tagged with a confidence level (High/Medium/Low). IB starts simulating LOI price-adjustment scenarios with this range.",
                },
                {
                  day: ko ? "금 저녁" : "Fri evening",
                  time: "19:00 – ?",
                  title: ko ? "Week 2 planning — 운전자본·부외부채로 진입" : "Week 2 planning — pivot into working capital & off-balance-sheet",
                  detail: ko
                    ? "EBITDA가 어느 정도 안정화됐으니 Week 2부터는 NWC(다음 챕터 Ch.5 주제), 부외부채, CapEx, 세금 리스크로 분석 영역 확장. 보통 Week 3 말에 draft report, Week 4~6 사이에 final report 발행."
                    : "With EBITDA stabilized, Week 2 expands into NWC (the topic of Ch.5), off-balance-sheet liabilities, CapEx, and tax risk. Draft report typically lands end of Week 3, final between Weeks 4 and 6.",
                },
              ].map((row, i) => (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 grid grid-cols-[80px_1fr] gap-3 sm:gap-4">
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">
                    <div className="font-bold text-rose-600 dark:text-rose-400">{row.day}</div>
                    <div className="font-mono mt-0.5">{row.time}</div>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 dark:text-gray-100">{row.title}</p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Closing thesis ─────────────────────────────────── */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <div className="rounded-2xl border border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-900/20 dark:to-amber-900/20 p-6">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-rose-700 dark:text-rose-300 mb-2">
                {ko ? "이 챕터의 단 하나의 명제" : "The Single Thesis"}
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
                {ko
                  ? "EBITDA는 발견되는 게 아니라 조정되는 숫자다. 그리고 그 조정의 권력이 거래 가격을 결정한다."
                  : "EBITDA is not found — it is adjusted. And whoever controls the adjustment controls the price."}
              </p>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "한국이든 미국이든 EU든, Big 4의 QoE 프레임워크는 사실상 동일하다. 다른 것은 회계기준(ASC vs IFRS vs K-IFRS), 그리고 그 기준 밖에 있는 지역별 관행(어음·관계회사·OEM 리베이트·Government subsidy)이다. 좋은 FDD는 두 가지를 모두 다룬다 — 기준에 따른 차이는 브릿지로, 기준 밖 관행은 보수적 add/subtract로."
                  : "Korea, US, or EU — the Big 4 QoE framework is effectively identical. What differs is the accounting standard (ASC vs IFRS vs K-IFRS), and the practices that live outside the standards (commercial paper, related-party trade, OEM rebates, government subsidies). Good FDD handles both — differences in standards through a bridge, and practices outside the standards through conservative add/subtract."}
              </p>
            </div>
          </motion.section>

          {/* ── Series navigation ──────────────────────────────── */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">
              {ko ? "FDD 101 시리즈" : "FDD 101 Series"}
            </h2>
            <div className="space-y-2 text-sm">
              {[
                { slug: "fdd-vs-audit",   ch: "Ch.1", t: ko ? "FDD vs Audit — 같은 회계법인, 다른 게임" : "FDD vs Audit — Same Firm, Different Game", published: false },
                { slug: "fdd-engagement", ch: "Ch.2", t: ko ? "Engagement & Scoping — 첫 미팅에서 결정되는 것" : "Engagement & Scoping — What Gets Decided in the First Meeting", published: false },
                { slug: "fdd-dataroom",   ch: "Ch.3", t: ko ? "Data Room의 첫 2주 — VDR 항해법" : "First 2 Weeks in the Data Room — Navigating the VDR", published: false },
                { slug: "fdd-qoe",        ch: "Ch.4 ★", t: ko ? "Quality of Earnings — 시리즈의 심장" : "Quality of Earnings — Heart of the Series", published: true, current: true },
                { slug: "fdd-qona",       ch: "Ch.5 ★", t: ko ? "NWC & Net Debt — Locked Box vs Closing Accounts" : "NWC & Net Debt — Locked Box vs Closing Accounts", published: false },
                { slug: "fdd-red-flags",  ch: "Ch.6", t: ko ? "Red Flags & Smell Test — 숫자가 거짓말할 때" : "Red Flags & Smell Test — When Numbers Lie", published: false },
                { slug: "fdd-report-spa", ch: "Ch.7", t: ko ? "Report → SPA → Closing — FDD가 SPA를 어떻게 바꾸는가" : "Report → SPA → Closing — How FDD Reshapes the SPA", published: false },
              ].map((s) => {
                const href = (ko ? "/deal-101/" : "/en/deal-101/") + s.slug;
                const inactive = !s.published;
                return (
                  <div key={s.slug} className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${s.current ? "border-rose-300 dark:border-rose-700 bg-rose-50/40 dark:bg-rose-900/15" : "border-gray-200 dark:border-gray-700"}`}>
                    <span className={`text-[11px] font-mono shrink-0 ${s.current ? "text-rose-700 dark:text-rose-300 font-bold" : "text-gray-400"}`}>{s.ch}</span>
                    {inactive ? (
                      <span className="text-gray-400 dark:text-gray-500 text-[13px]">{s.t} <span className="text-[10px] ml-1">({ko ? "준비중" : "coming soon"})</span></span>
                    ) : (
                      <Link href={href} className={`text-[13px] ${s.current ? "text-rose-700 dark:text-rose-300 font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400"}`}>
                        {s.t} {s.current && <span className="text-[10px] ml-1">({ko ? "현재 글" : "current"})</span>}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Related ────────────────────────────────────────── */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">
              {ko ? "이 챕터와 연결된 개념들" : "Related Concepts"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: (ko ? "/deal-101/" : "/en/deal-101/") + "adjusted-ebitda", title: ko ? "Adjusted EBITDA" : "Adjusted EBITDA", desc: ko ? "QoE의 출발점이자 도착점 — 정상화 EBITDA가 무엇인가" : "The starting and ending number of QoE — what 'normalized EBITDA' actually means", badge: "Valuation" },
                { href: (ko ? "/deal-101/" : "/en/deal-101/") + "fdd",             title: ko ? "FDD (재무실사) Overview" : "FDD Overview",        desc: ko ? "FDD 전체 구조 — QoE는 그 중 하나의 산출물" : "Full FDD landscape — QoE is one of its outputs", badge: "Diligence" },
                { href: (ko ? "/deal-101/" : "/en/deal-101/") + "ev-ebitda",       title: "EV/EBITDA",       desc: ko ? "QoE EBITDA × 멀티플 = EV. QoE의 1달러가 9~12배로 증폭되는 이유" : "QoE EBITDA × Multiple = EV. Why $1 of QoE amplifies to $9–12 of EV", badge: "Valuation" },
                { href: (ko ? "/deal-101/" : "/en/deal-101/") + "ma-process",      title: ko ? "M&A 프로세스" : "M&A Process",        desc: ko ? "QoE가 전체 M&A 프로세스 중 Phase 4 (Diligence)에서 차지하는 위치" : "Where QoE fits in Phase 4 (Diligence) of the M&A process", badge: "Process" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
