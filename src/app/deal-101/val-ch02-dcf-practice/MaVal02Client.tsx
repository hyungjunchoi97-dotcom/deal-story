/**
 * Valuation 시리즈 Ch.2 — DCF 실무
 *
 * 톤 가이드 (Ch.1과 동일):
 *  - 자연스러운 한국어, 직역체 지양
 *  - 카드·컬러박스 최소화. 텍스트 중심.
 *  - 시각화 3개: DCF 한 페이지 구조 · Sensitivity 매트릭스 · Bear/Base/Bull
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { VAL_CHAPTERS, getValChapterBySlug, getValSeriesNav } from "@/data/valuation-series";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "val-ch02-dcf-practice";
const ACCENT = "#3b82f6";

// DCF model의 한 페이지 구조 — 입력 → 계산 → 출력
const DCF_BLOCKS = [
  {
    koGroup: "Input (가정)",
    enGroup: "Input (assumptions)",
    items: [
      { ko: "Revenue 성장률 (5Y)", en: "Revenue growth (5Y)" },
      { ko: "EBIT margin 추이",        en: "EBIT margin trajectory" },
      { ko: "Tax rate (effective)",   en: "Tax rate (effective)" },
      { ko: "CAPEX % of revenue",     en: "CAPEX % of revenue" },
      { ko: "NWC % of revenue",        en: "NWC % of revenue" },
      { ko: "WACC, Terminal growth",  en: "WACC, terminal growth" },
    ],
  },
  {
    koGroup: "Calc (모델 본문)",
    enGroup: "Calc (model body)",
    items: [
      { ko: "Revenue → EBIT → NOPAT", en: "Revenue → EBIT → NOPAT" },
      { ko: "+ D&A − CAPEX − ΔNWC = FCF", en: "+ D&A − CAPEX − ΔNWC = FCF" },
      { ko: "5Y FCF 각 연도 PV로 할인",   en: "Discount each year's FCF to PV" },
      { ko: "Terminal Value (Gordon)",      en: "Terminal Value (Gordon)" },
      { ko: "Σ PV(FCF) + PV(TV) = EV",      en: "Σ PV(FCF) + PV(TV) = EV" },
      { ko: "EV − Net Debt = Equity Value",  en: "EV − Net Debt = Equity Value" },
    ],
  },
  {
    koGroup: "Output (결과)",
    enGroup: "Output (result)",
    items: [
      { ko: "Enterprise Value range",     en: "Enterprise Value range" },
      { ko: "Equity Value / share price", en: "Equity Value / share price" },
      { ko: "Implied multiples 역산",         en: "Implied multiples back-solve" },
      { ko: "Sensitivity table 2개",         en: "Two sensitivity tables" },
      { ko: "Bear / Base / Bull case",       en: "Bear / Base / Bull cases" },
      { ko: "Football Field에 들어갈 막대 1개", en: "One bar for the football field" },
    ],
  },
];

// Sensitivity 매트릭스 — WACC × Terminal growth
// Base = WACC 9%, g 2.5% → EV $1,000M 기준으로 일반적인 형태
const SENS_WACC = [8.0, 8.5, 9.0, 9.5, 10.0]; // columns
const SENS_G = [3.0, 2.5, 2.0, 1.5, 1.0];     // rows (위에서 아래로 낮아짐)
// EV($M) — Gordon TV가 WACC↓ / g↑일 때 ev 증가
const SENS_GRID: number[][] = [
  // g=3.0
  [1180, 1100, 1030,  965,  910],
  // g=2.5
  [1130, 1055,  990,  930,  880],
  // g=2.0
  [1085, 1015,  955,  900,  855],
  // g=1.5
  [1045,  980,  925,  875,  830],
  // g=1.0
  [1010,  950,  900,  850,  810],
];
const SENS_BASE_ROW = 1; // g=2.5
const SENS_BASE_COL = 2; // WACC=9.0

// Country Risk Premium — Damodaran 2024 기준 (근사값, %)
const CRP_TABLE = [
  { koCountry: "미국 · 서유럽 · 일본",       enCountry: "US · Western Europe · Japan", crp: 0.0,  koTag: "선진국",       enTag: "Developed" },
  { koCountry: "한국",                          enCountry: "South Korea",                  crp: 0.7,  koTag: "Aa3",           enTag: "Aa3" },
  { koCountry: "중국",                          enCountry: "China",                         crp: 0.9,  koTag: "A1",            enTag: "A1" },
  { koCountry: "인도",                          enCountry: "India",                         crp: 2.5,  koTag: "Baa3",          enTag: "Baa3" },
  { koCountry: "멕시코 · 인도네시아",          enCountry: "Mexico · Indonesia",            crp: 2.5,  koTag: "Baa2 / Baa2",  enTag: "Baa2 / Baa2" },
  { koCountry: "브라질",                        enCountry: "Brazil",                        crp: 3.5,  koTag: "Ba2",           enTag: "Ba2" },
  { koCountry: "터키 · 이집트",                 enCountry: "Turkey · Egypt",                crp: 7.5,  koTag: "B-grade",       enTag: "B-grade" },
  { koCountry: "아르헨티나",                    enCountry: "Argentina",                     crp: 14.0, koTag: "Ca",            enTag: "Ca" },
];
const CRP_MAX = 15;

// Bear / Base / Bull — 매출 성장률 시나리오에 따른 EV
const SCENARIOS = [
  {
    koName: "Bear",
    enName: "Bear",
    koDesc: "성장 둔화 · 마진 압축",
    enDesc: "Growth slows, margins compress",
    rev: "+4%",
    margin: "−150 bps",
    ev: 720,
    color: "#94a3b8",
  },
  {
    koName: "Base",
    enName: "Base",
    koDesc: "management guidance 중간값",
    enDesc: "Midpoint of management guidance",
    rev: "+8%",
    margin: "Flat",
    ev: 990,
    color: ACCENT,
  },
  {
    koName: "Bull",
    enName: "Bull",
    koDesc: "신규 라인 성공 · 가격결정력",
    enDesc: "New line lands, pricing power",
    rev: "+13%",
    margin: "+200 bps",
    ev: 1320,
    color: "#16a34a",
  },
];
const SCENARIO_MAX = 1400;

export default function MaVal02Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getValChapterBySlug(SLUG)!;
  const { prev, next } = getValSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/learn" : "/en/learn"} className="hover:text-gray-600 dark:hover:text-gray-300">Learn</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Valuation 시리즈 · Ch.2" : "Valuation Series · Ch.2"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Valuation 시리즈" : "Valuation Series"}</span>
            <span>·</span>
            <span>Ch.{chapter.ch}</span>
            <span>·</span>
            <span>{chapter.readingMinutes}{ko ? "분 읽기" : " min"}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                {ko ? chapter.titleKo : chapter.titleEn}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? chapter.taglineKo : chapter.taglineEn}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="top" lang={lang} />
            
              <LikeButton slug={SLUG} lang={lang} /></div>
          </div>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-12">
          <div className="flex gap-1.5 flex-wrap">
            {VAL_CHAPTERS.map((ch) => {
              const isCurrent = ch.slug === SLUG;
              const isDraft = ch.status !== "published";
              return (
                <Link
                  key={ch.slug}
                  href={`${base}/${ch.slug}`}
                  className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isCurrent
                      ? "text-white"
                      : isDraft
                      ? "text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/40 cursor-not-allowed pointer-events-none"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={isCurrent ? { background: ACCENT } : {}}
                >
                  Ch.{ch.ch}
                </Link>
              );
            })}
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 pb-16 prose-base">

          {/* § 1 — DCF는 결국 한 페이지 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "DCF 모델은 결국 한 페이지에 다 들어간다" : "A DCF model fits on one page"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "DCF를 처음 배울 때는 엄청 복잡해 보입니다. NOPAT, FCF, terminal value, WACC, sensitivity. 외울 게 너무 많아요. 그런데 실제로 IB에서 짜는 DCF는 구조 자체가 거의 다 똑같습니다. 가정 6-7개를 입력하면 모델이 굴러가서 EV 하나가 나오는 형태예요."
                : "DCF looks intimidating at first. NOPAT, FCF, terminal value, WACC, sensitivity — a lot to memorize. But the DCFs built at IBs all share the same structure. Six or seven assumptions go in, the model runs, one EV comes out."}</p>
              <p>{ko
                ? "한 페이지로 정리하면 입력 / 계산 / 출력 세 블록뿐이에요. 입력은 가정 모음, 계산은 표준화된 공식 체인, 출력은 EV와 sensitivity. 모델의 정확도는 계산이 결정하는 게 아니라 입력 가정의 품질이 결정합니다."
                : "Three blocks: input, calc, output. Input is the assumption set, calc is a standardized formula chain, output is EV plus sensitivity. Model accuracy doesn't come from the calc — it comes from the quality of the input assumptions."}</p>
            </div>

            {/* DCF 한 페이지 구조 — 3 블록 */}
            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {DCF_BLOCKS.map((b, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                    {String(i + 1).padStart(2, "0")} · {ko ? b.koGroup : b.enGroup}
                  </p>
                  <ul className="space-y-1.5">
                    {b.items.map((it, j) => (
                      <li key={j} className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug flex gap-1.5">
                        <span className="text-gray-300 dark:text-gray-600">·</span>
                        <span>{ko ? it.ko : it.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
              {ko
                ? "왼쪽 가정만 바꾸면 오른쪽 결과가 자동으로 따라옵니다. 그래서 \"DCF를 짠다\"는 말은 사실 \"왼쪽 가정을 만든다\"는 말과 거의 같아요."
                : "Change the inputs on the left, the outputs on the right follow automatically. So 'building a DCF' is basically 'building the input assumptions.'"}
            </p>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Revenue projection */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Revenue projection — 모든 게 여기서 결정된다" : "Revenue projection — everything starts here"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "DCF에서 가장 많은 시간을 쓰는 부분이 매출 가정이에요. 5년 동안 이 회사가 매출을 얼마나 키울 거냐. 한 줄로 정해야 하는데, 그 한 줄로 EV가 30% 흔들립니다."
                : "Revenue assumptions take the most time in a DCF. How much will this company grow over five years? One line — and that one line moves EV by 30%."}</p>
              <p>{ko
                ? "가정을 짜는 방식은 보통 세 갈래로 나뉩니다. Management guidance를 받아서 그대로 쓰는 경우, equity research 컨센서스를 참고하는 경우, 그리고 자체적으로 bottom-up 모델을 짜는 경우. 실무에서는 세 가지를 같이 봅니다. Guidance가 너무 공격적이면 research로 깎고, research가 다 부정적이면 management 시나리오를 따로 만들어요."
                : "Three approaches usually show up. Take management guidance and use it as-is, lean on equity research consensus, or build a bottom-up model yourself. In practice, all three sit side by side. If guidance is too aggressive, you trim it with research. If research is uniformly bearish, you build a separate management case."}</p>
              <p>{ko
                ? "Bottom-up은 회사 매출을 driver 단위로 쪼개는 방식이에요. SaaS면 ARPU × 고객 수, 소매면 매장 수 × 매장당 매출, 제조면 단가 × 수량. 이 driver들을 각각 5년 추정하면 매출이 나옵니다. Top-down 보다 시간은 더 들지만, board에 가져갔을 때 \"왜 이렇게 잡았냐\"는 질문을 받았을 때 답할 수 있어요."
                : "Bottom-up breaks revenue into drivers. For SaaS, ARPU × customers. For retail, stores × revenue per store. For manufacturing, price × volume. Project each driver for five years and revenue falls out. It takes longer than top-down, but when the board asks 'why this number,' you have an answer."}</p>
              <p>{ko
                ? "Margin 추이도 같이 정합니다. 회사가 지금 EBIT margin 12% 인데 규모의 경제로 15%까지 갈 거라고 보면 5년 동안 어떻게 점진적으로 올릴지를 모델에 박아 넣어요. 마진 100bps가 EV로는 보통 8-10% 정도 차이를 만듭니다."
                : "Margin trajectory gets set alongside. If a company is at 12% EBIT margin today and you believe scale takes it to 15%, you model how that ramps over five years. 100 bps of margin typically moves EV 8-10%."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — WACC */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "WACC — 거의 자동으로 채워진다" : "WACC — mostly an auto-fill"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Cost of equity = Rf + β × ERP. Cost of debt = current yield × (1 − tax). 가중평균. 학교 강의로는 한 학기 분량이지만 실무에서는 5-10분 작업이에요."
                : "Cost of equity = Rf + β × ERP. Cost of debt = current yield × (1 − tax). Weighted average. A semester of class, ten minutes in practice."}</p>
              <p>{ko
                ? "Risk-free rate는 10년 미국 국채 yield를 그대로 씁니다. Bloomberg 터미널에서 한 줄. ERP (Equity Risk Premium)는 Damodaran 사이트의 implied ERP를 쓰거나, IB 내부의 마스터 ERP 파일을 따라요. 보통 5.0-5.5% 근처. Beta는 Bloomberg나 Capital IQ에서 unlevered β를 뽑고 회사의 현재 D/E로 re-lever 합니다. Cost of debt는 회사가 발행한 채권의 현재 yield, 없으면 같은 신용등급 회사들의 평균을 사용해요."
                : "Risk-free rate is just the 10Y Treasury yield. One line from Bloomberg. ERP comes from Damodaran's implied ERP or the IB's internal master file — usually 5.0-5.5%. Beta comes from Bloomberg or Capital IQ unlevered, then re-levered using the company's current D/E. Cost of debt is the company's bond yield, or the average for the same credit rating if no bonds exist."}</p>
              <p>{ko
                ? "그래서 WACC은 사람마다 결과가 거의 비슷해요. 9.2% 가 나오는데 옆 사람이 7.5% 나오면 둘 중 하나가 입력을 잘못 넣은 거예요. 회사가 다르면 모르겠는데 같은 회사면 ±50bps 안에 다 들어옵니다. WACC 자체를 두고 valuation 결과를 흔드는 건 거의 없습니다."
                : "WACC ends up similar across analysts. If you get 9.2% and the desk next to you gets 7.5% for the same company, one of you typed something wrong. Within ±50 bps for the same company. WACC alone rarely swings valuation."}</p>

              <p className="pt-2 font-bold text-gray-900 dark:text-gray-100">{ko
                ? "한국·인도·브라질 회사를 평가할 땐? — Country Risk Premium"
                : "Valuing a Korean, Indian, or Brazilian company? — Country Risk Premium"}</p>
              <p>{ko
                ? "지금까지 설명한 WACC은 미국 회사 기준이에요. 같은 산업, 같은 마진, 같은 성장률이어도 회사가 어느 나라에 있느냐에 따라 투자자가 요구하는 수익률이 달라집니다. 정치 리스크, 환율 변동, 자본 통제 가능성 같은 게 다 가격에 박혀 있거든요. 이걸 한 줄로 잡아놓은 게 Country Risk Premium (CRP) 이에요."
                : "Everything so far assumes a US company. Same industry, same margin, same growth — and yet investors demand different returns depending on which country the business sits in. Political risk, FX volatility, possible capital controls all get priced in. The line that captures this is the Country Risk Premium (CRP)."}</p>
              <p>{ko
                ? "구하는 방식은 어렵지 않아요. Damodaran 교수가 매년 country별 CRP 표를 업데이트해서 무료로 공개하는데, 거의 모든 IB가 그 숫자를 그대로 가져다 씁니다. 미국이 0%, 한국이 0.7%, 인도가 2.5%, 아르헨티나는 14% 이런 식. 이론적으로는 그 나라의 sovereign 채권 default spread에 \"주식이 채권보다 얼마나 더 변동성이 큰가\"를 곱해서 계산하는 거예요."
                : "Calculation is easy — Professor Damodaran publishes a free country CRP table every year, and almost every IB uses it as-is. US is 0%, Korea 0.7%, India 2.5%, Argentina 14%. The theory: take the country's sovereign default spread, multiply by 'how much more volatile equities are than bonds.'"}</p>

              {/* CRP 미니 표 */}
              <div className="mt-3 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                  {ko ? "Country Risk Premium — 주요 국가 (2024 근사값)" : "Country Risk Premium — major countries (2024, approx.)"}
                </p>
                <div className="space-y-2">
                  {CRP_TABLE.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-40 flex-shrink-0">
                        <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{ko ? c.koCountry : c.enCountry}</p>
                      </div>
                      <div className="flex-1 h-4 rounded bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(c.crp / CRP_MAX) * 100}%` }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
                          className="h-full rounded"
                          style={{ background: c.crp === 0 ? "#cbd5e1" : ACCENT }}
                        />
                      </div>
                      <div className="w-16 flex-shrink-0 text-right">
                        <span className="text-[12px] font-mono font-bold text-gray-900 dark:text-gray-100">+{c.crp.toFixed(1)}%</span>
                      </div>
                      <div className="w-20 flex-shrink-0 text-right">
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">{ko ? c.koTag : c.enTag}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "같은 사업 모델, 같은 EBITDA여도 회사가 한국이면 cost of equity가 약 +0.7%p, 브라질이면 약 +3.5%p 더 붙습니다. EV로 환산하면 5-15% 차이."
                    : "Same business model, same EBITDA — sitting it in Korea adds ~0.7pp to cost of equity, Brazil ~3.5pp. Translates to 5-15% EV difference."}
                </p>
              </div>

              <p className="pt-1">{ko
                ? "이걸 어떻게 식에 넣냐면, 두 가지 방식이 있어요. 단순하게는 ERP에 그냥 더해버립니다. Cost of equity = Rf + β × (ERP + CRP). 더 정밀하게 갈 때는 lambda(λ)라는 노출도를 따로 곱해요. Cost of equity = Rf + β × ERP + λ × CRP."
                : "Two ways to plug it in. Simple: add CRP to ERP. Cost of equity = Rf + β × (ERP + CRP). More precise: multiply by lambda (λ), an exposure factor. Cost of equity = Rf + β × ERP + λ × CRP."}</p>
              <p>{ko
                ? "λ가 왜 필요하냐면, 같은 한국 회사라도 \"매출의 90%가 미국·유럽\"인 삼성전자 같은 회사와 \"매출의 95%가 국내\"인 통신사는 한국 country risk에 노출되는 정도가 다르거든요. λ는 보통 \"이 회사 매출 중 local 비중 / 그 나라 평균 회사의 local 비중\" 으로 추정합니다. 글로벌 수출 비중이 높으면 λ가 0.3-0.5 수준으로 떨어지고, 내수 회사면 1 근처."
                : "Why λ matters: even within Korea, Samsung Electronics (90% revenue from US/Europe) is differently exposed than a domestic telco (95% local). λ is usually estimated as 'company's local revenue share / average local revenue share for that country.' Heavy exporters land at 0.3-0.5, domestic players near 1."}</p>
              <p>{ko
                ? "Beta 자체도 영향을 받아요. Peer를 잡을 때 미국 peer만 쓸지, 같은 나라 peer를 쓸지에 따라 unlevered β가 달라집니다. 가능하면 같은 시장 peer를 우선 쓰고, peer가 부족할 땐 글로벌 peer + CRP 보정으로 가는 게 실무 관행이에요."
                : "Beta is affected too. Whether you use US peers only or local peers shifts the unlevered β. Standard practice: prefer same-market peers first; if the universe is too thin, fall back to global peers and let CRP do the adjustment."}</p>

              <p className="pt-2">{ko
                ? "정작 valuation 결과를 흔드는 건 WACC이 아니라 terminal growth rate예요. Gordon 공식 특성상 g가 0.5%p 움직이면 terminal value가 큰 폭으로 흔들리거든요. 그래서 sensitivity table을 항상 WACC × g 로 보여줍니다."
                : "What actually swings the result is terminal growth, not WACC. The Gordon formula is sensitive — moving g by 0.5pp moves terminal value sharply. That's why sensitivity tables are always WACC × g."}</p>
            </div>

            {/* Sensitivity 매트릭스 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Sensitivity — Enterprise Value ($M)" : "Sensitivity — Enterprise Value ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "행 = Terminal growth, 열 = WACC. 진한 칸이 base case." : "Row = terminal growth, column = WACC. Highlighted cell is the base case."}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px] font-mono">
                  <thead>
                    <tr>
                      <th className="text-left p-2 font-semibold text-gray-500 dark:text-gray-400 w-16">{ko ? "g \\ WACC" : "g \\ WACC"}</th>
                      {SENS_WACC.map((w, i) => (
                        <th key={i} className="text-right p-2 font-semibold text-gray-500 dark:text-gray-400">
                          {w.toFixed(1)}%
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SENS_G.map((g, ri) => (
                      <tr key={ri} className="border-t border-gray-100 dark:border-gray-800">
                        <td className="p-2 text-gray-500 dark:text-gray-400 font-semibold">{g.toFixed(1)}%</td>
                        {SENS_WACC.map((_, ci) => {
                          const v = SENS_GRID[ri][ci];
                          const isBase = ri === SENS_BASE_ROW && ci === SENS_BASE_COL;
                          // Color intensity by value
                          const intensity = Math.max(0, Math.min(1, (v - 800) / (1200 - 800)));
                          const bg = `${ACCENT}${Math.round(intensity * 24)
                            .toString(16)
                            .padStart(2, "0")}`;
                          return (
                            <td
                              key={ci}
                              className="p-2 text-right text-gray-700 dark:text-gray-300"
                              style={{
                                background: isBase ? `${ACCENT}33` : bg,
                                outline: isBase ? `1.5px solid ${ACCENT}` : "none",
                                outlineOffset: "-1.5px",
                                fontWeight: isBase ? 700 : 400,
                                color: isBase ? ACCENT : undefined,
                              }}
                            >
                              ${v.toLocaleString()}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Base case (WACC 9.0%, g 2.5%) 에서 EV $990M. 한 쪽 끝(8.0% / 3.0%)이 $1,180M, 반대쪽(10.0% / 1.0%)이 $810M. 같은 회사인데 가정 한 줄로 ±20% 흔들립니다."
                  : "Base case (WACC 9.0%, g 2.5%) sits at $990M. One corner reaches $1,180M, the opposite drops to $810M. Same company, ±20% on one line of assumptions."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — NWC / CAPEX / D&A 연결 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "NWC · CAPEX · D&A — 운영 가정 묶기" : "NWC · CAPEX · D&A — tying the operating assumptions"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "FCF = NOPAT + D&A − CAPEX − ΔNWC. 공식 자체는 단순한데, 이 네 줄을 어떻게 추정하느냐가 또 하나의 작업입니다."
                : "FCF = NOPAT + D&A − CAPEX − ΔNWC. The formula is simple. Estimating those four lines is its own task."}</p>
              <p>{ko
                ? "기본 접근은 \"% of revenue\"예요. 과거 4-5년 동안 CAPEX가 매출의 몇 % 였는지, NWC가 매출의 몇 % 수준이었는지를 평균 내서 그걸 미래에 그대로 끌고 갑니다. 안정된 회사면 이 방식이 가장 무난해요."
                : "The default is '% of revenue.' Look at the past 4-5 years — what CAPEX was as a % of revenue, what NWC was as a % of revenue — average it, then carry it forward. Works fine for stable businesses."}</p>
              <p>{ko
                ? "변형이 들어가는 건 회사가 투자 사이클에 있을 때예요. 새 공장을 짓고 있으면 CAPEX % 가 평소보다 2-3배 뛰었다가 5년 뒤에는 정상화되는 식으로 곡선을 그려야 합니다. 이런 정보는 보통 management 가이던스나 IR 자료에서 나와요."
                : "It changes when the company is in an investment cycle. Building a new plant means CAPEX % spikes 2-3× for a few years, then normalizes. You draw that curve based on management guidance or IR disclosures."}</p>
              <p>{ko
                ? "D&A와 CAPEX는 장기적으로 비슷한 수준으로 수렴해야 해요. 5년 후에 D&A가 매출의 5%인데 CAPEX가 매출의 2%면 회사가 자산을 안 충당하고 있다는 거고, 그건 지속 가능한 모델이 아닙니다. 모델 짜다 보면 이 둘이 안 맞아서 가정을 다시 손봐야 하는 경우가 자주 생겨요."
                : "D&A and CAPEX should converge long-term. If D&A is 5% of revenue at year 5 but CAPEX is only 2%, the company isn't replenishing assets — unsustainable. You'll often go back and re-tune assumptions because these two don't line up."}</p>
              <p>{ko
                ? "NWC change는 매출 성장에 비례합니다. 매출이 10% 늘면 운전자본도 비슷하게 늘어요. 그래서 빠르게 성장하는 회사는 NWC 흡수로 FCF가 일시적으로 낮게 나옵니다. 처음 모델 보는 사람이 \"왜 이 회사 FCF가 EBIT 대비 이렇게 낮지\" 라고 묻는 가장 흔한 이유가 이것입니다."
                : "ΔNWC scales with revenue growth. 10% revenue growth pulls working capital with it, so fast-growing companies show artificially low FCF because they're absorbing into NWC. The most common 'why is this FCF so low vs EBIT' question traces back to this."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Sensitivity와 Bear/Base/Bull */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "한 숫자가 아니라 시나리오를 내놓는다" : "You deliver scenarios, not a single number"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Board나 buyer에게 DCF 결과를 가져갈 때 \"EV $990M\" 한 줄로 끝내는 경우는 없습니다. 거의 항상 Bear / Base / Bull 세 시나리오로 가져가요."
                : "You never bring back 'EV is $990M' as a single line. It's almost always presented as bear / base / bull."}</p>
              <p>{ko
                ? "Base는 가장 defensible한 시나리오예요. Management guidance 중간값, 과거 평균에 근접한 마진, 컨센서스 성장률. Bear는 \"이 가정들이 한 단계씩 나빠지면\" 케이스. 매출 성장률 −400bps, 마진 압축 150bps, terminal growth 1.5%. Bull은 반대 방향이고요."
                : "Base is the most defensible — midpoint of management guidance, margins near historical average, consensus growth. Bear is 'each of these assumptions steps down a notch.' Revenue growth −400 bps, margin compression of 150 bps, terminal growth 1.5%. Bull is the mirror."}</p>
              <p>{ko
                ? "세 시나리오를 같이 보여주는 이유는 board에서 던지는 질문이 \"이거 맞아?\" 가 아니라 \"틀리면 어디까지 틀려?\" 이기 때문이에요. Base만 가져가면 다음 미팅에서 다시 만들어야 하지만, Bear/Base/Bull로 가져가면 그 자리에서 의사결정이 가능해집니다."
                : "The reason for three: the board's question isn't 'is this right?' but 'how wrong could this be?' Bring only base and you'll redo it next meeting. Bring bear/base/bull and the room can decide in one sitting."}</p>
            </div>

            {/* Bear / Base / Bull 차트 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Bear / Base / Bull — Enterprise Value ($M)" : "Bear / Base / Bull — Enterprise Value ($M)"}
              </p>
              <div className="space-y-4">
                {SCENARIOS.map((s, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[13px] font-bold" style={{ color: s.color }}>
                          {ko ? s.koName : s.enName}
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400">{ko ? s.koDesc : s.enDesc}</span>
                      </div>
                      <span className="text-[13px] font-bold font-mono text-gray-900 dark:text-gray-100">
                        ${s.ev.toLocaleString()}M
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2 w-32 flex-shrink-0 text-[10px] font-mono text-gray-500 dark:text-gray-400">
                        <span>Rev {s.rev}</span>
                        <span>·</span>
                        <span>{s.margin}</span>
                      </div>
                      <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(s.ev / SCENARIO_MAX) * 100}%` }}
                          viewport={VP}
                          transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                          className="h-full rounded"
                          style={{ background: s.color }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Bear $720M, Base $990M, Bull $1,320M. 같은 회사의 EV가 가정 묶음에 따라 1.8배 차이. 이 range 전체가 Football Field의 \"DCF\" 막대 한 줄로 들어갑니다."
                  : "Bear $720M, base $990M, bull $1,320M — a 1.8× spread on the same company. This entire range becomes a single bar on the football field's DCF row."}
              </p>
            </div>
          </motion.section>

          {/* 한 줄 정리 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <div className="rounded-lg p-5" style={{ background: `${ACCENT}0F`, border: `1px solid ${ACCENT}40` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
              <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
                ? "DCF는 정교한 계산이 아니라 방어 가능한 가정을 짜는 작업이다. 계산은 누가 해도 비슷하고, 결과는 매출 성장률과 마진 가정이 결정한다."
                : "A DCF isn't precise math — it's defensible assumptions. The calc is the same for everyone; revenue growth and margins decide the answer."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.3 — {ko ? "Comps 실무 — Trading + Transaction" : "Comps in practice — trading and transaction"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Capital IQ로 peer universe를 어떻게 만드는지, 어떤 회사를 넣고 어떤 회사를 빼는지, control premium은 어디서 가져오는지. Comps 작업의 실제 흐름."
                  : "How a peer universe gets built in Capital IQ, which companies make the cut and which don't, where control premium comes from. The real workflow of comps."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share — 카드형 + AuthorByline */}
          <ShareButtons
            title={ko ? chapter.titleKo : chapter.titleEn}
            variant="bottom"
            lang={lang}
            readingMinutes={chapter.readingMinutes}
          />

          
          <LikeButton slug={SLUG} lang={lang} />{/* Series prev/next */}
          {(prev || next) && (
            <div className="mt-6">
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
                next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
              />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
