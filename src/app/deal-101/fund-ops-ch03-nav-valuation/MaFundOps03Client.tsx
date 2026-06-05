"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed";
const SLUG = "fund-ops-ch03-nav-valuation";

const NAV_STEPS = [
  { step: 1, koLabel: "Cash & receivables 집계", enLabel: "Cash & receivables roll-up", koDetail: "각 fund bank account의 cash balance + 미수 분배 receivable + 단기 T-bill 등. Fund admin이 매일 reconcile.", enDetail: "Cash balance per fund bank account, receivables, short-term T-bills. Fund admin reconciles daily." },
  { step: 2, koLabel: "Portfolio investment fair value mark", enLabel: "Portfolio investment fair value marking", koDetail: "각 portco 분기 fair value (ASC 820). DCF + Public comps + Recent transactions의 가중 평균.", enDetail: "Quarterly portco fair value (ASC 820) — weighted average of DCF, public comps, and recent transactions." },
  { step: 3, koLabel: "Accrued liabilities 차감", enLabel: "Accrued liabilities deduction", koDetail: "Management fee accrued · sub-line drawn balance · accrued audit fee · 미지급 deal expense.", enDetail: "Accrued management fee, drawn sub-line balance, accrued audit fees, unpaid deal expenses." },
  { step: 4, koLabel: "Carry accrual 계산", enLabel: "Carry accrual computation", koDetail: "European waterfall이면 fund-level cumulative IRR 8% 초과분의 20%를 GP 응계상. American이면 deal-level.", enDetail: "European waterfall: 20% of fund-level cumulative IRR above 8% accrued to GP. American: deal-level." },
  { step: 5, koLabel: "LP별 capital account 배분", enLabel: "Per-LP capital account allocation", koDetail: "각 LP의 commitment 비율 + 입주 시점에 따른 equalization 반영. Side letter MFN 적용 후 최종 NAV per LP.", enDetail: "Each LP's commitment share plus equalization for closing timing. Side-letter MFN applied, then final per-LP NAV." },
];

const ASC820_LEVELS = [
  { level: "Level 1", koWhat: "활성 시장의 동일 자산 인용 시세 (NYSE 상장주식 등)", enWhat: "Quoted prices in active markets for identical assets (NYSE-listed equities, etc.)", koExample: "상장 portco · public bond · listed REIT — 거래일 종가 그대로.", enExample: "Listed portcos, public bonds, listed REITs — close price as-is.", koPePortion: "PE 포트폴리오의 약 5-10%", enPePortion: "5-10% of a typical PE portfolio" },
  { level: "Level 2", koWhat: "관측 가능한 input 사용 (유사 자산 시세, 금리 곡선 등)", enWhat: "Uses observable inputs — comparable asset prices, yield curves, etc.", koExample: "Private credit · loan participations — 시장 yield + spread로 mark.", enExample: "Private credit and loan participations — marked off market yields plus spread.", koPePortion: "PE 포트폴리오의 약 15-25%", enPePortion: "15-25% of a typical PE portfolio" },
  { level: "Level 3", koWhat: "관측 불가능한 input 의존 — judgment heavy", enWhat: "Relies on unobservable inputs — heavily judgment-based", koExample: "Private equity portco · early-stage VC — DCF · OPM · PWERM 결합.", enExample: "Private equity portcos and early-stage VC — DCF, OPM, and PWERM combined.", koPePortion: "PE 포트폴리오의 약 70-80% — sweet spot이자 사고 발생 지점.", enPePortion: "70-80% of a typical PE portfolio — the sweet spot, and where fraud happens." },
];

const VAL_METHODS = [
  { method: "DCF (Discounted Cash Flow)", koWhen: "Cash flow 가시성 높은 mature portco (Buyout 5+ year hold)", enWhen: "Mature portcos with visible cash flow (buyouts at 5+ year hold)", koPro: "Intrinsic value, terminal value 통제 가능", enPro: "Intrinsic value, controllable terminal assumptions", koCon: "WACC · terminal growth 가정에 매우 민감", enCon: "Highly sensitive to WACC and terminal growth assumptions" },
  { method: "Public Comps (EV/EBITDA, EV/Revenue)", koWhen: "상장 peer가 있는 산업 (SaaS · Consumer · Healthcare)", enWhen: "Industries with listed peers (SaaS, consumer, healthcare)", koPro: "Market-based, defensible", enPro: "Market-based and defensible", koCon: "상장 peer 부재 시 사용 불가, multiple compression risk", enCon: "Useless without listed peers; subject to multiple compression" },
  { method: "Transaction Comps", koWhen: "최근 M&A · 동종 거래 데이터 있을 때", enWhen: "When recent M&A or comparable deals exist", koPro: "Control premium 반영", enPro: "Reflects control premium", koCon: "Data 부족, 시점 차이로 인한 왜곡", enCon: "Sparse data; distortions from timing" },
  { method: "OPM (Option Pricing Method)", koWhen: "VC portco — 여러 class 주식 (Series A/B/C/D)이 있을 때", enWhen: "VC portcos with multiple share classes (Series A/B/C/D)", koPro: "Class별 권리 (liquidation preference 등) 반영", enPro: "Captures class-by-class rights (liquidation preferences, etc.)", koCon: "Volatility 가정 민감, 모델 복잡", enCon: "Volatility-sensitive and model-complex" },
  { method: "PWERM (Probability-Weighted Expected Return Method)", koWhen: "VC portco — 여러 exit 시나리오 (IPO · M&A · 청산) 결합", enWhen: "VC portcos blending multiple exit scenarios (IPO, M&A, liquidation)", koPro: "시나리오 분석 명시적", enPro: "Makes scenarios explicit", koCon: "확률 가정 임의적, 회계감사가 도전", enCon: "Probabilities are subjective; auditors push back" },
];

const ILPA_FIELDS = [
  { koField: "Capital Account Statement", enField: "Capital Account Statement", koDesc: "Beginning balance · contributions · distributions · NAV change · ending balance — LP별 4분기 기준" },
  { koField: "Commitment Schedule", enField: "Commitment Schedule", koDesc: "Total commitment · drawn · remaining unfunded · recallable amount" },
  { koField: "Fee & Expense Detail", enField: "Fee & Expense Detail", koDesc: "Management fee · partnership expenses · placement fees · offsetting fee income (deal fee · monitoring fee)" },
  { koField: "Performance Metrics", enField: "Performance Metrics", koDesc: "Gross/Net IRR · Gross/Net TVPI · DPI · RVPI — both since-inception and quarterly" },
  { koField: "Portfolio Schedule", enField: "Portfolio Schedule", koDesc: "각 portco — invested · current FV · gain/loss · realized/unrealized split · sector·geo 분류" },
  { koField: "Cash Flow Statement", enField: "Cash Flow Statement", koDesc: "Quarterly contributions · distributions · GP commit · sub-line drawdowns" },
  { koField: "ESG / SFDR Disclosure", enField: "ESG / SFDR Disclosure", koDesc: "(2024 추가) SFDR Article 8/9 분류 · PAI (Principal Adverse Indicators) · transition pathway" },
];

const DISASTER_CASES = [
  {
    name: "Abraaj Capital",
    year: "2018",
    loss: "$14B",
    koHeadline: "Health Fund LP 자금을 다른 fund 구멍 메우는 데 commingle",
    enHeadline: "Commingled Health Fund LP capital to fill gaps in other funds",
    koTimeline: "2007 설립 · 2012-2015 급속 성장 · 2016년부터 Health Fund 자금 transfer 시작 · 2018년 4월 LP 4명 forensic audit 요구 · 6월 파산.",
    enTimeline: "Founded 2007 · explosive growth 2012-2015 · Health Fund transfers begin 2016 · April 2018 four LPs demand forensic audit · bankruptcy by June.",
    koFailure: "KPMG (auditor) 와 self-administered fund admin이 'temporary transfer'라는 GP 설명을 reconcile 없이 sign-off. 14개월 commingling 지속.",
    enFailure: "KPMG (auditor) and the self-administered fund admin signed off on the GP's 'temporary transfer' story without reconciliation. The commingling ran 14 months.",
    koCaught: "Gates Foundation · IFC · CDC Group · Proparco가 Ankura 고용해 forensic accounting → fraud 입증.",
    enCaught: "Gates Foundation, IFC, CDC Group, and Proparco hired Ankura for forensic accounting — the fraud was exposed.",
    koLesson: "Big 4 audit ≠ fund admin reconciliation. Self-administered fund는 그 자체로 red flag. Health Fund 같은 mandated-allocation은 별도 escrow 필수.",
    enLesson: "Big 4 audit is not fund admin reconciliation. Self-administration is itself a red flag. Mandated-allocation funds like the Health Fund need a separate escrow.",
  },
  {
    name: "GPB Capital Holdings",
    year: "2019-2024",
    loss: "$1.8B",
    koHeadline: "자동차 딜러십 PE 표방 → 신규 LP 돈으로 기존 LP에 distribution (폰지)",
    enHeadline: "Marketed as auto-dealership PE — used new LP money to fund distributions to old LPs (classic Ponzi)",
    koTimeline: "2013 설립 · 2016년부터 NAV 부풀리기 시작 · 2018-2019 SEC/DOJ 조사 · 2024년 David Gentile 유죄.",
    enTimeline: "Founded 2013 · NAV inflation begins 2016 · SEC/DOJ investigations 2018-2019 · David Gentile convicted 2024.",
    koFailure: "GP가 self-administered — 3rd party fund admin 없음. NAV를 GP가 직접 산정. 분기마다 portfolio profit이 hard cash 분배보다 높게 표시.",
    enFailure: "GP self-administered — no third-party fund admin. NAV computed by the GP. Quarterly portfolio profits always showed higher than hard cash distributions warranted.",
    koCaught: "Internal whistleblower → SEC 신고 + 자체 NAV review 결과 portfolio가 실제 cash flow 없이 markup만 누적.",
    enCaught: "Internal whistleblower filed with the SEC; an independent NAV review showed the portfolio had pure markups with no underlying cash flow.",
    koLesson: "Self-administered fund = 절대 금지. 분배가 portfolio cash generation을 초과한다? 폰지 의심 1순위. Distributors도 책임 — Royal Alliance · Sagepoint 등이 class action 당함.",
    enLesson: "Self-administered = automatic no. Distributions exceeding portfolio cash generation? Ponzi suspicion #1. Distributors are accountable too — Royal Alliance and Sagepoint faced class actions.",
  },
  {
    name: "Bernie Madoff Feeder Funds",
    year: "2008",
    loss: "$65B",
    koHeadline: "Madoff의 'broker statement'만 받아 NAV 산정 — 독립적 verification 없음",
    enHeadline: "Feeder fund NAVs computed solely from Madoff's broker statements — no independent verification",
    koTimeline: "1990년대부터 Madoff Ponzi 진행 · Fairfield Greenwich ($7.5B), Tremont ($3.3B), Kingate ($2.7B) 등 feeder가 LP 모집 · 2008년 12월 Madoff 자수.",
    enTimeline: "The Madoff Ponzi ran from the 1990s; feeders like Fairfield Greenwich ($7.5B), Tremont ($3.3B), and Kingate ($2.7B) raised LP capital. Madoff turned himself in December 2008.",
    koFailure: "Feeder fund admin (PwC 등)이 Madoff가 주는 broker statement를 그대로 NAV로 처리. DTCC custody confirmation · counterparty position 검증 안 함.",
    enFailure: "Feeder fund admins (PwC among them) treated Madoff's broker statements as NAV. No DTCC custody confirmation or counterparty position verification.",
    koCaught: "Harry Markopolos가 10년간 SEC에 경고했지만 묵살. 결국 2008 financial crisis 와중 redemption rush → Madoff cash 부족 → 자백.",
    enCaught: "Harry Markopolos warned the SEC for a decade — ignored. The 2008 redemption rush dried up Madoff's cash and he confessed.",
    koLesson: "Underlying-fund admin의 GP report를 그대로 신뢰하지 않는다. DTCC position · counterparty confirmation · 독립적 broker statement 필수. PwC가 수억 달러 합의.",
    enLesson: "Don't take an underlying-fund admin's GP-supplied numbers on faith. DTCC positions, counterparty confirmations, and independent broker statements are mandatory. PwC settled for hundreds of millions.",
  },
];

const TOC_ITEMS = [
  { id: "nav-mechanics",  ko: "§1. NAV 계산 5단계", en: "§1 The five-step NAV process" },
  { id: "asc820",         ko: "§2. ASC 820 Fair Value Levels", en: "§2 ASC 820 fair value levels" },
  { id: "val-methods",    ko: "§3. Valuation 5 방법 + ILPA Template 2.0", en: "§3 Five valuation methods + ILPA Template 2.0" },
  { id: "disasters",      ko: "§4. 3대 NAV/Valuation 사고 (Abraaj · GPB · Madoff)", en: "§4 Three NAV/valuation disasters (Abraaj, GPB, Madoff)" },
];

export default function MaFundOps03Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getFundOpsSeriesNav(SLUG);
  const meta = getFundOpsChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.3</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "Fund Ops 시리즈 · Ch.3" : "Fund Ops Series · Ch.3"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q1 2026 기준` : `~${meta.readingMinutes} min · data as of Q1 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>
            ))}
          </ul>
        </div>

        <section id="nav-mechanics" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. NAV 계산 5단계 — Cash → Portfolio FV → Liability → Carry → LP 배분" : "§ 1 The five-step NAV process — cash → portfolio FV → liabilities → carry → LP allocation"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "NAV (Net Asset Value)는 fund의 분기말 순자산. 공식: NAV = Cash + Portfolio FV − Liabilities − Accrued Carry. 그리고 LP별로 commitment 비율 + equalization + side letter MFN 반영해서 분배. $1B fund 기준 분기 NAV 산정에 fund admin 인력 20-40명 × 2-3주 투입." : "NAV (Net Asset Value) is the fund's quarter-end equity. Formula: NAV = Cash + Portfolio FV − Liabilities − Accrued Carry. Then allocate per-LP using commitment, equalization, and side letter MFN. A $1B fund's quarterly NAV consumes 20-40 fund-admin staff over 2-3 weeks."}
          </p>
          <div className="space-y-3 mb-8">
            {NAV_STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: ACCENT }}>{s.step}</div>
                  <div className="flex-1">
                    <div className="font-bold text-sm mb-2">{ko ? s.koLabel : s.enLabel}</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koDetail : s.enDetail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="asc820" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. ASC 820 Fair Value Hierarchy — Level 1/2/3" : "§ 2 ASC 820 fair value hierarchy — Level 1/2/3"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "US GAAP의 ASC 820 (IFRS 13의 형제 표준)이 fair value 측정을 input 관측 가능성에 따라 3단계로 분류. PE 포트폴리오의 압도적 다수가 Level 3 — 즉 judgment heavy, 그래서 사고가 가장 많이 나는 영역." : "US GAAP's ASC 820 (sibling of IFRS 13) classifies fair value by input observability into three levels. The bulk of PE portfolios sit at Level 3 — heavily judgment-based, and where fraud lives."}
          </p>
          <div className="space-y-3 mb-8">
            {ASC820_LEVELS.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-lg border-2 border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: ACCENT }}>{l.level}</div>
                  <div className="font-bold text-sm">{ko ? l.koWhat : l.enWhat}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                  <span className="font-semibold">{ko ? "예시: " : "Example: "}</span>{ko ? l.koExample : l.enExample}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: ACCENT }}>
                  <span className="font-semibold">{ko ? "PE 비중: " : "PE share: "}</span>{ko ? l.koPePortion : l.enPePortion}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="val-methods" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. Valuation 5가지 방법 + ILPA Template 2.0" : "§ 3 Five valuation methods + ILPA Template 2.0"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "Valuation Method — 5가지" : "Five valuation methods"}</h3>
          <div className="space-y-2 mb-8">
            {VAL_METHODS.map((m, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>{m.method}</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div><span className="font-semibold text-gray-500 dark:text-gray-400">{ko ? "사용 시점: " : "When: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? m.koWhen : m.enWhen}</span></div>
                  <div><span className="font-semibold text-gray-500 dark:text-gray-400">{ko ? "장점: " : "Pro: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? m.koPro : m.enPro}</span></div>
                  <div><span className="font-semibold text-gray-500 dark:text-gray-400">{ko ? "단점: " : "Con: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? m.koCon : m.enCon}</span></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "ILPA Reporting Template 2.0 — 분기 LP 보고 7개 필드" : "ILPA Reporting Template 2.0 — seven quarterly LP reporting fields"}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {ko ? "2024년 ILPA가 Template 2.0 공개. 종전 Template 대비 (a) ESG/SFDR 필드 추가, (b) Fee/expense의 hierarchy 명시, (c) sub-line 활용 transparency 요구. Q1 2026 현재 글로벌 PE의 80%+가 채택." : "ILPA released Template 2.0 in 2024 — adds (a) ESG/SFDR fields, (b) explicit fee/expense hierarchy, (c) sub-line transparency. 80%+ of global PE has adopted as of Q1 2026."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">{ko ? "필드" : "Field"}</th>
                  <th className="text-left p-3">{ko ? "내용" : "Detail"}</th>
                </tr>
              </thead>
              <tbody>
                {ILPA_FIELDS.map((f, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{ko ? f.koField : f.enField}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{f.koDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="disasters" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 3대 NAV/Valuation 사고 — Abraaj · GPB · Madoff" : "§ 4 Three NAV/valuation disasters — Abraaj, GPB, Madoff"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "NAV·Valuation은 fund admin이 망하는 단일 최대 영역. 아래 3개 사고는 패턴이 거의 동일하다 — GP가 NAV에 직접 손대고, 외부 검증이 부재하고, LP가 너무 늦게 발견. 합산 손실 $80B+." : "NAV and valuation are the single biggest place fund admin fails. The three cases below follow nearly identical patterns — GP touches NAV directly, no external verification, LPs find out too late. Combined losses exceed $80B."}
          </p>
          <div className="space-y-4 mb-8">
            {DISASTER_CASES.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <div className="font-bold text-base">{d.name}</div>
                  <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{d.year}</div>
                  <div className="text-xs font-bold text-red-600 dark:text-red-400">{d.loss}</div>
                </div>
                <div className="font-semibold text-sm mb-3" style={{ color: ACCENT }}>{ko ? d.koHeadline : d.enHeadline}</div>
                <div className="space-y-2 text-xs leading-relaxed">
                  <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "Timeline: " : "Timeline: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? d.koTimeline : d.enTimeline}</span></div>
                  <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "실패 원인: " : "Failure: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? d.koFailure : d.enFailure}</span></div>
                  <div><span className="font-semibold text-gray-600 dark:text-gray-400">{ko ? "적발: " : "Caught: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? d.koCaught : d.enCaught}</span></div>
                  <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700"><span className="font-semibold" style={{ color: ACCENT }}>{ko ? "교훈: " : "Lesson: "}</span><span className="text-gray-700 dark:text-gray-300">{ko ? d.koLesson : d.enLesson}</span></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border-2 p-6 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-lg font-bold mb-3">{ko ? "공통 패턴 — NAV/Valuation 사기의 3대 red flag" : "Common pattern — three red flags of NAV/valuation fraud"}</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>1. {ko ? "Self-administered fund — GP가 NAV 직접 산정. 3rd party fund admin 없음. (GPB · Madoff feeders 일부 · Abraaj)" : "Self-administered fund — GP computes NAV without a third-party admin. (GPB; some Madoff feeders; Abraaj)"}</li>
              <li>2. {ko ? "외부 valuation 부재 — Big 4 또는 Kroll·Houlihan 등 independent valuation review 없음. NAV 일관되게 상승." : "No external valuation — no independent review from Big 4 or Kroll/Houlihan. NAV grows monotonically."}</li>
              <li>3. {ko ? "Underlying 데이터 unverifiable — 보유 자산이 private이고 cash flow가 portfolio NAV에 일치 안 함. 분배가 portfolio income 초과." : "Underlying data is unverifiable — holdings are private and cash flow does not match portfolio NAV. Distributions exceed portfolio income."}</li>
            </ul>
          </div>
        </section>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (<Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"><div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div><div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div></Link>) : <div />}
          {nav.next ? (<Link href={ko ? `/deal-101/${nav.next.slug}` : `/en/deal-101/${nav.next.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right"><div className="text-xs text-gray-500 mb-1">{ko ? "다음 →" : "Next →"}</div><div className="text-sm font-semibold">Ch.{nav.next.ch} · {ko ? nav.next.titleKo : nav.next.titleEn}</div></Link>) : <div />}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
