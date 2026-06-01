"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── 색상 & 상수 ─────────────────────────────────────────────────────────────
const ACCENT       = "#06b6d4"; // cyan-500
const ACCENT_LIGHT = "#ecfeff"; // cyan-50
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

// ── 시리즈 네비게이션 ────────────────────────────────────────────────────────
const THIS_CH = "syndicated-loan-process";
const SYNDLOAN_SERIES = [
  { slug: "syndicated-loan-overview",  ch: "Ch.0", title: "왜 은행들은 뭉치는가",       titleEn: "Why Banks Pool Together" },
  { slug: "syndicated-loan-players",   ch: "Ch.1", title: "플레이어와 수익구조",         titleEn: "Players & Economics" },
  { slug: "syndicated-loan-process",   ch: "Ch.2", title: "딜 프로세스 실무",            titleEn: "Deal Process in Practice" },
  { slug: "syndicated-loan-docs",      ch: "Ch.3", title: "문서와 코버넌트",             titleEn: "Documentation & Covenants" },
  { slug: "syndicated-loan-cases",     ch: "Ch.4", title: "케이스스터디: 성공 vs 실패",  titleEn: "Case Studies: Win vs Fail" },
];

function ChapterNav({ ko }: { ko: boolean }) {
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {SYNDLOAN_SERIES.map((ch) => {
        const active = ch.slug === THIS_CH;
        return (
          <Link key={ch.slug} href={`${base}/${ch.slug}`}>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
                active
                  ? "text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:text-cyan-700 dark:hover:text-cyan-300"
              }`}
              style={active ? { background: ACCENT } : {}}
            >
              {ch.ch}
              <span className="hidden sm:inline">— {ko ? ch.title : ch.titleEn}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ── 비유 박스 컴포넌트 ───────────────────────────────────────────────────────
function AnalogyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5" style={{ borderColor: "#f59e0b" }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ── 실무 박스 컴포넌트 ───────────────────────────────────────────────────────
function PracticeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-cyan-200 dark:border-cyan-700/50 bg-cyan-50/60 dark:bg-cyan-900/15 p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: ACCENT }}>
          실무
        </span>
        <span className="text-[13px] font-bold text-cyan-800 dark:text-cyan-200">{title}</span>
      </div>
      <div className="text-[13px] text-cyan-900 dark:text-cyan-200 leading-relaxed">{children}</div>
    </div>
  );
}

// ── 북빌드 커버리지 차트 데이터 ──────────────────────────────────────────────
const BOOKBUILD_DATA = [
  { scenario: "3× Oversubscribed", coverage: 3.0, color: "#22c55e" },
  { scenario: "1.5× Tight",        coverage: 1.5, color: ACCENT },
  { scenario: "0.8× Failed",       coverage: 0.8, color: "#ef4444" },
];

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "Market Flex가 발동될 때 차주에게 사전 통보를 하나요?",
    a: "Fee Letter에 통보 의무 조항이 있는 경우도 있지만, 대부분의 Flex 조항은 MLA가 '합리적인 판단'에 따라 단독으로 행사할 수 있도록 설계되어 있습니다. 실무에서는 MLA가 CFO에게 사전에 '시장 상황상 Flex를 발동할 수 있다'고 비공식 통보를 하는 것이 일반적입니다. 단, 법적 의무는 계약서 문언에 따라 다릅니다. 차주 입장에서는 Fee Letter 협상 시 통보 의무 및 시간 요건을 명시하는 것이 중요합니다.",
  },
  {
    q: "IM에 허위 정보가 포함되어 있으면 법적 책임은 누가 지나요?",
    a: "IM 앞부분에는 반드시 '이 문서는 투자 권유가 아니며, MLA는 정보의 정확성을 보증하지 않는다'는 면책 조항(disclaimer)이 있습니다. 그러나 차주가 허위 정보를 제공했다면 사기(fraud) 또는 허위 진술(misrepresentation)에 의한 민·형사 책임이 발생합니다. MLA가 명백히 알면서도 허위 정보를 전달했다면 공모(aiding and abetting) 책임을 질 수 있습니다. 실무에서 법무법인은 IM 리뷰 시 사실 확인(factual verification)을 철저히 요구합니다.",
  },
  {
    q: "북빌드 중 참여은행이 제출한 IOI를 취소할 수 있나요?",
    a: "IOI(Indication of Interest)는 법적으로 구속력이 없는 의향 표시입니다. 따라서 북빌드 기간 중 취소는 기술적으로 가능합니다. 그러나 IB 업계는 좁고 평판이 자산입니다 — 근거 없이 IOI를 취소하는 은행은 이후 딜에서 배분을 못 받거나 초청받지 못할 수 있습니다. 실제로 Commitment(서명 단계)는 법적 구속력이 있으므로 그 이후에는 철회가 불가능합니다.",
  },
  {
    q: "한국 기업의 해외 신디케이티드론은 어느 나라 법원의 준거법이 적용되나요?",
    a: "대부분의 크로스보더 신디론은 영국법(English Law)을 준거법으로 하고, 런던 법원(English courts)을 전속 관할로 지정합니다. LMA(Loan Market Association) 표준 양식이 영국법 기반이기 때문입니다. 아시아 역내 거래는 홍콩법 또는 싱가포르법을 선택하는 경우도 있습니다. 한국 기업이 국내 KRW 신디론을 할 때는 한국 법원 관할·한국법 준거가 적용됩니다.",
  },
  {
    q: "딜이 완전히 실패(hung deal)하면 MLA는 어떻게 되나요?",
    a: "언더라이트를 했다면 MLA는 참여은행을 못 모은 잔액 전부를 자기 대차대조표에 보유해야 합니다. 이를 'hung deal' 또는 'stuck loan'이라고 합니다. 자본이 잠기고, RWA가 상승하며, 손실 충당금을 쌓아야 할 수 있습니다. 매각하려면 시장 할인(secondary market discount)을 감수해야 합니다. 2022년 트위터 인수금융 당시 JP모간·모간스탠리 등 7개 은행은 약 $600M 이상의 손실을 기록했습니다. 베스트에포트 방식이었다면 딜 자체가 취소되어 차주가 자금 조달에 실패하지만 MLA의 손실은 없습니다.",
  },
];

const FAQ_EN = [
  {
    q: "Does the MLA notify the borrower before exercising Market Flex?",
    a: "The Fee Letter may include a notification requirement, but most Flex provisions are structured to allow the MLA to exercise them unilaterally based on 'reasonable determination.' In practice, MLAs informally notify the CFO that a flex may be triggered given market conditions. However, the legal obligation depends entirely on the contract wording. From the borrower's perspective, it is important to negotiate clear notice and timing requirements into the Fee Letter at the outset.",
  },
  {
    q: "Who is legally liable if the IM contains false information?",
    a: "The IM always includes a disclaimer at the front stating it is not investment advice and the MLA makes no warranty on accuracy. However, if the borrower provided false information, it faces civil and criminal liability for fraud or misrepresentation. If the MLA knowingly passed on false information, it could face aiding-and-abetting liability. In practice, law firms conducting IM reviews require rigorous factual verification for exactly this reason.",
  },
  {
    q: "Can a lender withdraw an IOI submitted during the bookbuild?",
    a: "An IOI (Indication of Interest) is legally non-binding — it is an expression of intent, not a commitment. So technically, it can be withdrawn during the bookbuild period. However, the IB world is small and reputation is everything: a bank that withdraws IOIs without cause risks being excluded from future deal allocations or not being invited at all. Once a firm Commitment is signed, it is legally binding and cannot be withdrawn.",
  },
  {
    q: "Which country's law governs a Korean company's cross-border syndicated loan?",
    a: "Most cross-border syndicated loans are governed by English law and provide for exclusive jurisdiction of the English courts, because the LMA (Loan Market Association) standard form documents are English-law based. Asian regional deals sometimes choose Hong Kong or Singapore law. For KRW-denominated domestic syndicated loans in Korea, Korean law and Korean court jurisdiction apply.",
  },
  {
    q: "What happens to the MLA if the deal is a complete failure (hung deal)?",
    a: "If the MLA underwrote the deal, it must hold the unsyndicated portion entirely on its own balance sheet — a 'hung deal' or 'stuck loan.' This ties up capital, raises RWA, and may require loss provisions. To exit, the MLA must accept secondary market discounts. In the 2022 Twitter acquisition financing, the seven banks (including JPMorgan and Morgan Stanley) booked losses estimated at over $600M. Under best-efforts, the deal simply falls through — the borrower doesn't get funded, but the MLA incurs no loss.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function SyndicatedLoanProcessClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 py-10">

          {/* ── 브레드크럼 ── */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show"
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
            <Link href={ko ? "/" : "/en"} className="hover:text-cyan-600 transition-colors">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-cyan-600 transition-colors">{ko ? "마켓 101" : "Market 101"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "신디케이티드론" : "Syndicated Loans"}</span>
          </motion.div>

          {/* ── 헤더 ── */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: ACCENT }}>DCM</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">Ch.2 / 5</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{concept.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-3">
              {ko ? concept.title : concept.titleEn}
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko ? concept.excerpt : concept.excerptEn}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-700/40">{t}</span>
              ))}
            </div>
            <ShareButtons
              title={ko ? concept.title : (concept.titleEn || concept.title)} lang={lang} />
          </motion.div>

          {/* ── 챕터 네비게이션 ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mt-8">
            <ChapterNav ko={ko} />
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 1 — 30초 요약
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "딜 프로세스의 핵심 지표를 숫자로 먼저 잡아봅니다."
                : "Key metrics that define the deal process at a glance."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  label: ko ? "피치→클로징 기간" : "Pitch to Closing",
                  value: ko ? "4~12주" : "4–12 wks",
                  sub: ko ? "IG 4~8주 / 레버드 6~12주" : "IG 4–8w / Lev 6–12w",
                },
                {
                  label: ko ? "IM 평균 분량" : "Avg IM Length",
                  value: ko ? "80~150p" : "80–150p",
                  sub: ko ? "페이지" : "pages",
                },
                {
                  label: ko ? "북빌드 목표 커버리지" : "Bookbuild Target",
                  value: "1.5×~3×",
                  sub: ko ? "최소 1.5×, 이상적 3×" : "Min 1.5×, ideal 3×",
                },
                {
                  label: ko ? "Market Flex 발동 빈도" : "Market Flex Freq.",
                  value: "30~40%",
                  sub: ko ? "변동성 높을 때" : "in volatile markets",
                },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>{s.value}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 2 — 뷰티콘테스트
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "뷰티콘테스트: 은행들의 생존 경쟁" : "Beauty Contest: Banks Competing to Win"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "MLA 자리를 따내기 위한 경쟁 피치. 여기서 딜의 수익이 결정됩니다."
                : "The competitive pitch for the MLA mandate. This is where deal economics are set."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "서울시 대형 공사 입찰과 같다" : "Like a Major Seoul Public Works Tender"}</strong>
              <br /><br />
              {ko
                ? <>뷰티콘테스트는 서울시 대형 공사 입찰과 같습니다. 시공사(은행)들이 각자 설계안(텀시트)을 들고 발주처(차주 CFO)를 찾아갑니다. 가장 낮은 금리, 가장 빠른 실행, 가장 두꺼운 투자자 네트워크를 제시한 곳이 mandate를 딴다.
                <br /><br />
                차이점은 공사 입찰은 가격만이 기준이지만, 뷰티콘테스트는 가격 외에도 언더라이트 가능 여부(확실성), 투자자 네트워크의 품질, 그리고 과거 유사 딜 실적이 함께 평가됩니다.</>
                : <>A beauty contest is like a major Seoul municipal construction tender. Construction firms (banks) each bring their blueprints (term sheets) to the client (the borrower's CFO). Whoever offers the lowest rate, fastest execution, and deepest investor network wins the mandate.
                <br /><br />
                The difference: a construction tender is decided purely on price, while a beauty contest also evaluates underwrite commitment (certainty of funds), the quality of the investor network, and comparable deal track record.</>
              }
            </AnalogyBox>

            <div className="grid gap-4 sm:grid-cols-3 mt-4">
              {[
                {
                  icon: "🏦",
                  title: ko ? "참여 은행 수" : "Competing Banks",
                  body: ko
                    ? "보통 3~7개 IB가 pitch에 참여합니다. 대형 딜은 7개 이상이 경쟁하기도 합니다. 차주 CFO는 각 은행의 텀시트를 나란히 놓고 비교합니다."
                    : "Typically 3–7 banks compete in a beauty contest. Larger deals may attract more. The CFO lays term sheets side by side and compares.",
                },
                {
                  icon: "⚖️",
                  title: ko ? "CFO 평가 3요소" : "3 CFO Evaluation Factors",
                  body: ko
                    ? "① 제시 금리/스프레드 — 최저가 우선\n② 언더라이트 가능 여부 — 확실성 프리미엄\n③ 관계 및 배분력 — 투자자 네트워크 깊이"
                    : "① Proposed spread/rate — lowest wins\n② Ability to underwrite — certainty premium\n③ Relationship and distribution power — depth of investor network",
                },
                {
                  icon: "📊",
                  title: ko ? "피치북 구성" : "Pitchbook Structure",
                  body: ko
                    ? "딜 구조 제안, 비교 딜 분석(comps), 투자자 타겟 리스트, 수수료 구조의 4파트가 핵심. 80~120페이지 분량이 일반적."
                    : "4 core parts: deal structure proposal, comparable deal analysis, target investor list, fee structure. Typically 80–120 pages.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                  <span className="text-2xl mb-2 block">{c.icon}</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{c.title}</h3>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">{c.body}</p>
                </div>
              ))}
            </div>

            <PracticeBox title={ko ? "Analyst가 피치북을 만드는 48시간" : "48 Hours Building the Pitchbook"}>
              {ko
                ? <>뷰티콘테스트 피치북은 보통 2~3일 내 완성됩니다. Analyst는 다음과 같이 작업을 분담합니다:
                  <br /><br />
                  <strong>D-2 (월요일):</strong> VP/Associate가 딜 구조 초안 작성. Analyst는 비교 딜(comps) 리서치 착수. Bloomberg·Refinitiv에서 동종 업종 최근 12개월 딜 추출.
                  <br />
                  <strong>D-1 (화요일):</strong> 재무 모델 레버리지·커버리지 메트릭 산출. 투자자 타겟 리스트 완성 (CLO 매니저 순위, 관계 은행 기여 히스토리). 수수료 구조표 작성.
                  <br />
                  <strong>D-Day 전날 밤:</strong> CFO 미팅 전날 밤 모든 팀원이 재소집되어 최종 검토. 숫자 교차 확인, 표지 디자인, 인쇄. 새벽 2~3시에 끝나는 것이 일반적입니다.</>
                : <>A beauty contest pitchbook is typically completed within 2–3 days. Analyst workload is divided as follows:
                  <br /><br />
                  <strong>D-2 (Monday):</strong> VP/Associate drafts deal structure. Analyst starts comparable deal research — pulling last 12 months of same-sector deals from Bloomberg or Refinitiv.
                  <br />
                  <strong>D-1 (Tuesday):</strong> Financial model leverage/coverage metrics output. Target investor list finalized (CLO manager rankings, relationship bank contribution history). Fee structure table drafted.
                  <br />
                  <strong>Night before D-Day:</strong> The full team reconvenes the night before the CFO meeting for final review. Cross-check numbers, finalize cover design, print. Finishing at 2–3 a.m. is standard.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 3 — Mandate & Fee Letter
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Mandate & Fee Letter: 계약의 시작" : "Mandate & Fee Letter: The Starting Line"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "뷰티콘테스트에서 이긴 은행이 받는 첫 공식 문서. 딜의 법적 기반이 여기서 만들어집니다."
                : "The first formal documents the winning bank receives. This is where the deal's legal foundation is built."}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-cyan-200 dark:border-cyan-700 bg-cyan-50/40 dark:bg-cyan-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📄</span>
                  <h3 className="text-[14px] font-extrabold text-cyan-800 dark:text-cyan-200">{ko ? "Mandate Letter" : "Mandate Letter"}</h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko ? [
                    "약정 금액 및 트랜치 구성",
                    "제시 금리 / 스프레드 범위",
                    "언더라이트 또는 베스트에포트 여부",
                    "독점성(Exclusivity) 기간: 보통 30~90일",
                    "딜 실행 타임라인 목표",
                  ] : [
                    "Committed amount and tranche structure",
                    "Indicative pricing / spread range",
                    "Underwrite or best-efforts basis",
                    "Exclusivity period: typically 30–90 days",
                    "Target deal execution timeline",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔒</span>
                  <h3 className="text-[14px] font-extrabold text-gray-800 dark:text-gray-200">{ko ? "Fee Letter (NDA 적용)" : "Fee Letter (Subject to NDA)"}</h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko ? [
                    "수수료 세부 내역 (공개 불가 — NDA)",
                    "Arrangement Fee: 대출액의 1~2%",
                    "Commitment Fee: 미인출액에 부과",
                    "Agency Fee: 연간 고정 수수료",
                    "MLA 보호 조항 (딜 취소 시 비용 보상)",
                  ] : [
                    "Fee details (confidential — NDA)",
                    "Arrangement fee: 1–2% of facility",
                    "Commitment fee: charged on undrawn amount",
                    "Agency fee: annual fixed payment",
                    "MLA protection clause (break cost on deal cancellation)",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Market Flex 해부 */}
            <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/40 dark:bg-amber-900/10 p-5 mb-5">
              <h3 className="text-[14px] font-extrabold text-amber-800 dark:text-amber-200 mb-3">
                {ko ? "⚡ Market Flex 조항 해부" : "⚡ Market Flex Clause Anatomy"}
              </h3>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
                {ko
                  ? "MLA가 시장 상황에 따라 딜 조건을 조정할 수 있는 권한. 차주가 '확실성'을 얻는 대가."
                  : "MLA's right to adjust deal terms based on market conditions — the price the borrower pays for certainty of funds."}
              </p>
              <div className="space-y-3">
                {[
                  {
                    type: ko ? "Price Flex" : "Price Flex",
                    desc: ko ? "스프레드를 ±X bps 조정 가능. 보통 ±50bps. 시장이 나쁘면 스프레드 Up, 좋으면 Down." : "Adjusts spread by ±X bps, typically ±50bps. Spread up in bad markets, down in good ones.",
                    color: "#f59e0b",
                  },
                  {
                    type: ko ? "OID Flex" : "OID Flex",
                    desc: ko ? "발행가(Original Issue Discount) 조정. 보통 ±0.5~1pt. 가격 대신 발행가를 낮춰 실질 수익률 높임." : "Adjusts Original Issue Discount by ±0.5–1pt. Effectively raises yield by lowering issue price instead of raising spread.",
                    color: "#f97316",
                  },
                  {
                    type: ko ? "Structure Flex" : "Structure Flex",
                    desc: ko ? "트랜치 구성 변경 권한. 예: TLA를 줄이고 TLB 비중 확대, 만기 조정." : "Authority to change tranche composition — e.g., reduce TLA and increase TLB share, or adjust tenor.",
                    color: "#ef4444",
                  },
                ].map((f) => (
                  <div key={f.type} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[11px] font-bold px-2 py-0.5 rounded text-white mt-0.5" style={{ background: f.color }}>{f.type}</span>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-white/60 dark:bg-gray-900/40 text-[12px] text-gray-500 dark:text-gray-400">
                💬 {ko
                  ? "왜 차주가 Flex를 수용하는가: 언더라이트 확실성(certainty of funds)의 대가입니다. 시장이 나빠도 자금 조달을 보장받는 대신, MLA에게 조건 조정 권한을 부여하는 것입니다."
                  : "Why does the borrower accept Flex? It is the price of certainty of funds under an underwrite. In exchange for guaranteed funding even if markets turn, the borrower grants the MLA the right to adjust terms."}
              </div>
            </div>

            <PracticeBox title={ko ? "Market Flex 발동 시나리오: 2022년 Twitter $13B Hung Deal" : "Market Flex Scenario: 2022 Twitter $13B Hung Deal"}>
              {ko
                ? <>2022년 10월 머스크의 트위터 인수 당시, JP모간·모간스탠리 등 7개 은행이 $13B 레버리지드 인수금융을 언더라이트했습니다. 인수 협상 중 연준의 급격한 금리 인상으로 크레딧 시장이 얼어붙으며 Flex 한도(+50bps)를 훨씬 넘어서는 스프레드 확대가 필요한 상황이 됐습니다.
                <br /><br />
                Flex 한도를 초과하면 MLA는 추가 조정을 할 수 없습니다 — 계약상 한도가 있기 때문입니다. 결국 7개 은행은 약 $13B 전액을 자기 장부에 얹어두게 됐으며, 2023년 말까지도 일부를 보유한 것으로 알려졌습니다. 이 딜은 "Flex 한도를 계약할 때 시장 시나리오를 충분히 반영해야 한다"는 교훈을 남겼습니다.</>
                : <>In October 2022, when Musk's Twitter acquisition closed, seven banks including JPMorgan and Morgan Stanley had underwritten $13B in leveraged acquisition financing. During the negotiation period, the Fed's aggressive rate hikes froze credit markets, requiring spread widening far beyond the Flex cap of +50bps.
                <br /><br />
                Once Flex limits are exhausted, the MLA cannot adjust further — the contract caps it. All seven banks ended up holding roughly $13B on their books, with some still carrying positions into late 2023. This deal became a case study: when agreeing Flex caps, stress-test market scenarios adequately.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 4 — Information Memorandum
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Information Memorandum: Analyst의 밤샘 작업" : "Information Memorandum: The Analyst's All-Nighter"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "IM은 신디론 딜의 심장입니다. 80~150페이지 분량의 이 문서 하나가 참여은행들의 투자 결정을 좌우합니다."
                : "The IM is the heart of a syndicated loan deal. This 80–150 page document single-handedly determines lenders' investment decisions."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "IM은 부동산 분양 책자다" : "The IM is a Real Estate Sales Brochure"}</strong>
              <br /><br />
              {ko
                ? <>IM은 부동산 분양 책자와 같습니다. 아파트 시행사(차주)가 수분양자(참여은행)에게 "왜 우리 아파트를 사야 하는가"를 설득하는 문서입니다. 입지(산업 분석), 설계도(재무 모델), 시공사 이력(경영진), 리스크(법적 제한사항)가 모두 담겨 있습니다.
                <br /><br />
                나쁜 IM은 아파트가 팔리지 않습니다. 수치가 불명확하거나 리스크 설명이 불충분하면 참여은행들이 commitment를 거부하거나 더 높은 스프레드를 요구합니다.</>
                : <>The IM is like a real estate sales brochure. The apartment developer (borrower) uses it to persuade prospective buyers (lenders) why they should buy in. It covers location (industry analysis), blueprints (financial model), builder track record (management), and disclosures (risk factors and legal restrictions).
                <br /><br />
                A bad IM means the apartment doesn't sell. If figures are unclear or risk descriptions are inadequate, lenders will refuse commitments or demand wider spreads.</>
              }
            </AnalogyBox>

            {/* IM 섹션 테이블 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mt-5 mb-5">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">#</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "섹션" : "Section"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "주요 내용" : "Content"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "작성 주체" : "Owner"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "분량" : "Pages"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ["1", ko ? "Executive Summary" : "Executive Summary",    ko ? "딜 하이라이트, 투자 포인트" : "Deal highlights, investment thesis",            ko ? "MLA DCM" : "MLA DCM",                  "5~10p"],
                    ["2", ko ? "Company Overview" : "Company Overview",      ko ? "비즈니스 모델, 시장 위치" : "Business model, market position",               ko ? "MLA + 차주 IR" : "MLA + Borrower IR",    "15~25p"],
                    ["3", ko ? "Industry Analysis" : "Industry Analysis",    ko ? "시장 규모, 경쟁 구도, 트렌드" : "Market size, competition, trends",            ko ? "Analyst" : "Analyst",                   "10~15p"],
                    ["4", ko ? "Financial Overview" : "Financial Overview",  ko ? "3개년 실적, EBITDA·FCF" : "3-year historical, EBITDA, FCF",                  ko ? "Analyst" : "Analyst",                   "15~20p"],
                    ["5", ko ? "Financial Projections" : "Projections",      ko ? "향후 3~5년 기준 케이스" : "3–5 year base case forecast",                    ko ? "Analyst + 차주 CFO" : "Analyst + CFO",   "10~15p"],
                    ["6", ko ? "Debt Structure" : "Debt Structure",          ko ? "트랜치 구성, 상환 스케줄, 담보" : "Tranches, repayment schedule, collateral",  ko ? "DCM Structuring" : "DCM Structuring",   "10~15p"],
                    ["7", ko ? "Management Bios" : "Management Bios",        ko ? "경영진 이력" : "Management team bios",                                       ko ? "차주 IR" : "Borrower IR",               "5~10p"],
                    ["8", ko ? "Risk Factors" : "Risk Factors",              ko ? "주요 리스크 목록" : "Key risk enumeration",                                  ko ? "Legal + DCM" : "Legal + DCM",           "10~20p"],
                  ].map(([num, sec, content, owner, pages]) => (
                    <tr key={num} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-3 py-3 font-bold" style={{ color: ACCENT }}>{num}</td>
                      <td className="px-3 py-3 font-semibold text-gray-800 dark:text-gray-200">{sec}</td>
                      <td className="px-3 py-3 text-gray-500 dark:text-gray-400">{content}</td>
                      <td className="px-3 py-3 text-gray-500 dark:text-gray-400">{owner}</td>
                      <td className="px-3 py-3 text-gray-500 dark:text-gray-400 whitespace-nowrap">{pages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PracticeBox title={ko ? "Analyst가 IM 재무 섹션에서 흔히 하는 실수 5가지" : "5 Common Analyst Mistakes in the IM Financial Section"}>
              {ko
                ? <ol className="list-decimal list-inside space-y-2">
                    <li><strong>EBITDA Addback 불일치:</strong> 경영진이 제공한 addback 목록과 재무 모델의 조정 EBITDA가 다른 숫자를 쓰는 경우. 반드시 단일 소스로 통일.</li>
                    <li><strong>프로젝션 베이스라인 미설명:</strong> "2025년 매출 $2B 가정" — 왜 그 숫자인지 근거가 없으면 투자자 Q&A에서 즉시 공격받습니다.</li>
                    <li><strong>레버리지 메트릭 정의 혼용:</strong> Net Debt/EBITDA에서 EBITDA를 LTM(마지막 12개월)으로 쓰는 곳, PF(Pro Forma)로 쓰는 곳이 섹션마다 다른 경우.</li>
                    <li><strong>비교 딜 선정 기준 미설명:</strong> 왜 이 comps를 골랐는지 설명 없이 테이블만 넣으면 투자자가 불신합니다.</li>
                    <li><strong>수치 소수점/단위 오류:</strong> "$1,234M"이 어떤 곳에선 "$1.2B"로 표기되거나, 백만 달러 단위와 억원 단위가 혼재하는 경우. 검토 전 Excel → IM 수치 전수 대조 필수.</li>
                  </ol>
                : <ol className="list-decimal list-inside space-y-2">
                    <li><strong>EBITDA Addback mismatch:</strong> Management's addback schedule and the financial model's adjusted EBITDA use different figures. Always consolidate to a single source.</li>
                    <li><strong>Unexplained projection baseline:</strong> "2025 revenue assumed at $2B" — without a basis, investors will attack it immediately in Q&A.</li>
                    <li><strong>Mixed leverage metric definitions:</strong> Net Debt/EBITDA using LTM EBITDA in one section and Pro Forma EBITDA in another creates confusion and distrust.</li>
                    <li><strong>Unexplained comps selection:</strong> Dropping a comparable transactions table without explaining the selection criteria invites lender skepticism.</li>
                    <li><strong>Decimal/unit errors:</strong> "$1,234M" appearing as "$1.2B" in another section, or millions mixing with hundreds of millions. Always cross-check every figure Excel-to-IM before submission.</li>
                  </ol>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 5 — 렌더 미팅
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "렌더 미팅: 투자자 설득의 현장" : "Lender Meeting: Where Persuasion Happens"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "IM을 배포한 후 차주 경영진이 직접 잠재 참여은행들을 만나는 자리. 여기서 스프레드 방향이 결정됩니다."
                : "After IM distribution, management meets potential lenders directly. This is where the spread direction is set."}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-3">{ko ? "🏨 대면 (Roadshow)" : "🏨 In-Person (Roadshow)"}</h3>
                <ul className="space-y-1.5 text-[12px] text-gray-500 dark:text-gray-400">
                  {(ko ? [
                    "대형 딜: 뉴욕·런던·홍콩 순회",
                    "핵심 CLO 매니저·관계 은행 초청",
                    "1:1 미팅 or 소그룹 (5~10개 기관)",
                    "CEO·CFO 직접 참석 — 신뢰도 ↑",
                  ] : [
                    "Large deals: roadshow in NYC, London, HK",
                    "Key CLO managers and relationship banks invited",
                    "1:1 or small group (5–10 institutions)",
                    "CEO/CFO present — credibility boost",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-3">{ko ? "📞 콜 (Dial-In)" : "📞 Call (Dial-In)"}</h3>
                <ul className="space-y-1.5 text-[12px] text-gray-500 dark:text-gray-400">
                  {(ko ? [
                    "중소형 딜 또는 재융자(Refi) 거래",
                    "기존 관계 은행 위주로 구성",
                    "1~2시간 컨퍼런스 콜",
                    "비용·시간 절약; 신규 투자자 유치에는 불리",
                  ] : [
                    "Mid-size deals or refinancings",
                    "Primarily existing relationship lenders",
                    "1–2 hour conference call",
                    "Cost/time efficient; less effective for new investor outreach",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 발표 구조 */}
            <div className="rounded-xl border border-cyan-200 dark:border-cyan-700/50 bg-cyan-50/30 dark:bg-cyan-900/10 p-5 mb-5">
              <h3 className="text-[13px] font-bold text-cyan-800 dark:text-cyan-200 mb-3">
                {ko ? "Management Presentation 구조 (총 60분)" : "Management Presentation Structure (60 min total)"}
              </h3>
              <div className="space-y-2">
                {[
                  { time: "0~15분", label: ko ? "경영진 발표" : "Management Presentation", desc: ko ? "회사 개요, 딜 구조, 투자 포인트 3가지 강조" : "Company overview, deal structure, 3 investment highlights" },
                  { time: "15~60분", label: ko ? "Q&A" : "Q&A Session", desc: ko ? "참여은행들의 날카로운 질문. 여기서 commit 여부가 결정됨" : "Sharp questions from lenders — commit decisions are made here" },
                ].map((s) => (
                  <div key={s.time} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[11px] font-bold px-2 py-0.5 rounded text-white" style={{ background: ACCENT }}>{s.time}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200">{s.label}</p>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[12px] font-semibold text-cyan-800 dark:text-cyan-300 mb-2">{ko ? "Q&A 핵심 질문 유형" : "Common Q&A Question Types"}</div>
              <ul className="space-y-1.5 text-[12px] text-gray-600 dark:text-gray-400">
                {(ko ? [
                  "\"EBITDA Addback이 너무 공격적이지 않나요?\"",
                  "\"Amazon/경쟁사 리스크를 어떻게 보시나요?\"",
                  "\"리파이낸싱 계획은 무엇입니까?\"",
                  "\"코버넌트 헤드룸이 얼마나 남아있나요?\"",
                ] : [
                  "\"Aren't the EBITDA addbacks too aggressive?\"",
                  "\"How do you see the Amazon/competitor risk?\"",
                  "\"What is your refinancing plan?\"",
                  "\"How much covenant headroom do you have?\"",
                ]).map((q, i) => (
                  <li key={i} className="pl-3 border-l-2 border-cyan-300 dark:border-cyan-600">{q}</li>
                ))}
              </ul>
            </div>

            <PracticeBox title={ko ? "Associate가 렌더 미팅 전 준비하는 3가지 문서" : "3 Documents Associates Prepare Before the Lender Meeting"}>
              {ko
                ? <>렌더 미팅은 QA가 핵심입니다. 경영진이 당황하지 않도록 Associate는 다음 3가지를 사전 준비합니다:
                  <br /><br />
                  <strong>① Q&A Prep Sheet:</strong> 예상 질문 30~50개와 모범 답변 작성. 과거 유사 딜 렌더 미팅 Q&A를 참고하여 '어려운 질문' 섹션을 반드시 포함. 경영진과 사전 리허설 1~2회.
                  <br /><br />
                  <strong>② Covenant Headroom Table:</strong> 예상 재무 코버넌트 조건과 기준 케이스·다운사이드 케이스 EBITDA를 비교. 헤드룸이 얼마나 남는지 시각적으로 정리. "최악의 경우 언제 breach되나"를 미리 계산.
                  <br /><br />
                  <strong>③ Comparable Transaction Summary:</strong> 최근 6~12개월 동종 업종 딜 3~5개의 스프레드·레버리지·커버리지 비교표. "우리 딜이 시장 대비 합리적이다"를 입증하는 용도.</>
                : <>The lender meeting is dominated by Q&A. Associates prepare three documents to ensure management isn't caught off guard:
                  <br /><br />
                  <strong>① Q&A Prep Sheet:</strong> 30–50 anticipated questions with model answers. Based on Q&A logs from prior comparable deals, always includes a "tough questions" section. Conduct 1–2 rehearsals with management.
                  <br /><br />
                  <strong>② Covenant Headroom Table:</strong> Maps expected covenant levels against base case and downside EBITDA. Shows visually how much headroom remains and when the first breach would occur in a stress scenario.
                  <br /><br />
                  <strong>③ Comparable Transaction Summary:</strong> Spread, leverage, and coverage comparison table for 3–5 same-sector deals in the past 6–12 months. Used to demonstrate "our deal is fairly priced relative to the market."</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 6 — 북빌드 & 배분
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "북빌드 & 배분: 수요와 공급의 현장" : "Bookbuild & Allocation: Supply Meets Demand"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "렌더 미팅 후 참여은행들의 수요(order)를 모아 최종 스프레드와 배분을 결정하는 단계입니다."
                : "After lender meetings, orders are collected to determine the final spread and allocations."}
            </p>

            {/* 커버리지 시나리오 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "북빌드 커버리지 시나리오" : "Bookbuild Coverage Scenarios"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "1.0× = 딜 사이즈 100% 모집" : "1.0× = 100% of deal size subscribed"}
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={BOOKBUILD_DATA} barSize={52}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="scenario" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}×`} domain={[0, 4]} />
                  <Tooltip formatter={(v) => [`${v}×`, ko ? "커버리지" : "Coverage"]} />
                  <Bar dataKey="coverage" radius={[4, 4, 0, 0]}>
                    {BOOKBUILD_DATA.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 mb-5">
              {[
                {
                  coverage: ko ? "3× 오버서브스크라이브" : "3× Oversubscribed",
                  color: "#22c55e",
                  bg: "bg-green-50 dark:bg-green-900/10",
                  border: "border-green-200 dark:border-green-700",
                  points: ko
                    ? ["스프레드 타이트닝 가능 (MLA 선택권 확보)", "앵커 투자자 선호 기관에 우선 배분", "OID 없이 par(액면가) 발행 가능", "딜 실행 속도 ↑ — 클로징 앞당김 가능"]
                    : ["Can tighten spread (MLA has optionality)", "Preferred allocation to anchor investors", "Can issue at par (no OID)", "Faster execution — closing can be accelerated"],
                },
                {
                  coverage: ko ? "1.5× 적정 수요" : "1.5× Adequate Demand",
                  color: ACCENT,
                  bg: "bg-cyan-50 dark:bg-cyan-900/10",
                  border: "border-cyan-200 dark:border-cyan-700",
                  points: ko
                    ? ["정상 완료 — 시장 표준 범위", "스프레드 변동 없이 발행", "배분 경쟁 낮아 all-in 가능", "일부 Flex 발동 없이 진행 가능"]
                    : ["Normal close — market standard range", "No spread adjustment needed", "Lower allocation competition", "No Flex trigger required"],
                },
                {
                  coverage: ko ? "<1× 미달" : "<1× Undersubscribed",
                  color: "#ef4444",
                  bg: "bg-red-50 dark:bg-red-900/10",
                  border: "border-red-200 dark:border-red-700",
                  points: ko
                    ? ["Flex 발동 — 스프레드 Up / OID 확대", "딜 사이즈 축소 협의 가능", "최악의 경우 딜 철회(pulled deal)", "언더라이트였다면 MLA가 잔액 보유"]
                    : ["Flex triggered — spread up / OID widens", "Can renegotiate smaller deal size", "Worst case: deal pulled", "If underwritten, MLA holds the residual"],
                },
              ].map((s) => (
                <div key={s.coverage} className={`rounded-xl border ${s.border} ${s.bg} p-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    <h3 className="text-[13px] font-bold" style={{ color: s.color }}>{s.coverage}</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-1">
                    {s.points.map((p, i) => (
                      <li key={i} className="text-[12px] text-gray-600 dark:text-gray-400 flex items-start gap-1.5">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: s.color }}>•</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 배분 전략 & CLO vs IG */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-3">{ko ? "배분 전략 계층" : "Allocation Priority Tiers"}</h3>
                <div className="space-y-2">
                  {[
                    { tier: ko ? "앵커 투자자" : "Anchor Investors", desc: ko ? "핵심 CLO / 관계 은행 — 딜 성공에 기여한 first-mover. 최대 배분." : "Key CLO / relationship bank — first movers. Maximum allocation." },
                    { tier: ko ? "타겟 투자자" : "Target Investors", desc: ko ? "투자자 타겟 리스트상 주요 기관. 요청대로 또는 일부 컷." : "Main institutions on target list. Full or slightly trimmed." },
                    { tier: ko ? "필 어카운트" : "Fill Accounts", desc: ko ? "나머지 참여자. 오버서브 시 크게 삭감되거나 제외." : "Remaining participants. Heavily cut or excluded if oversubscribed." },
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center mt-0.5" style={{ background: ACCENT }}>{i + 1}</span>
                      <div>
                        <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200">{t.tier}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-3">{ko ? "레버드 vs IG 배분 차이" : "Leveraged vs IG Allocation Diff."}</h3>
                <div className="space-y-2 text-[12px] text-gray-500 dark:text-gray-400">
                  <div className="pb-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="font-semibold text-amber-600 dark:text-amber-400 mb-1">{ko ? "레버리지드론" : "Leveraged Loan"}</p>
                    <p>{ko ? "CLO 매니저 1순위 배분. CLO 투자 가이드라인(최소 등급, 섹터 한도) 충족 여부 확인 필수. 헤지펀드는 단기 차익 목적 → 안정적 hold-to-maturity 투자자 우선." : "CLO managers get first priority. Must verify CLO investment guidelines (min rating, sector limits). Hedge funds trade short-term → prefer stable hold-to-maturity investors."}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{ko ? "IG 신디론" : "IG Syndicated Loan"}</p>
                    <p>{ko ? "관계 은행 우선. 차주 회사와 FX·파생·자문 관계를 가진 은행이 배분 우선권 획득. 관계 자산이 돈보다 중요." : "Relationship banks prioritized. Banks with FX, derivatives, or advisory relationships with the borrower get allocation preference. Relationship economics trump yield."}</p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeBox title={ko ? "Analyst 북빌드 Tracker 관리" : "Analyst Bookbuild Tracker Management"}>
              {ko
                ? <>북빌드 기간 동안 Analyst의 핵심 임무는 실시간 Tracker 관리입니다:
                  <br /><br />
                  <strong>1단계 — IOI 입력:</strong> 참여은행에서 IOI가 들어올 때마다 Tracker에 즉시 기재. 기관명, 요청 금액, 연락 담당자, 수신 시각 기록.
                  <br />
                  <strong>2단계 — 커버리지 계산:</strong> 총 IOI 합계 ÷ 딜 사이즈 = 현재 커버리지 배수. 1.0× 돌파 시, 1.5× 돌파 시, 2.0× 돌파 시 MLA에 즉시 보고.
                  <br />
                  <strong>3단계 — MLA 실시간 보고:</strong> MD/VP가 차주 CFO와 통화하며 최신 커버리지를 알려줄 수 있도록, Tracker는 30분~1시간마다 업데이트. 마감 당일은 실시간 업데이트.
                  <br />
                  <strong>4단계 — 배분 초안:</strong> 오버서브 확정 시, 각 기관의 요청 대비 배분 비율 초안 작성. Associate가 검토 후 MD 승인.</>
                : <>During bookbuilding, the Analyst's primary duty is real-time Tracker management:
                  <br /><br />
                  <strong>Step 1 — IOI entry:</strong> Record every IOI immediately upon receipt: institution name, requested amount, contact, timestamp.
                  <br />
                  <strong>Step 2 — Coverage calculation:</strong> Total IOI sum ÷ deal size = current coverage multiple. Report to MLA immediately at 1.0×, 1.5×, and 2.0× milestones.
                  <br />
                  <strong>Step 3 — Real-time MLA reporting:</strong> Tracker updated every 30–60 min so MD/VP can give the CFO live coverage updates. On deadline day: continuous real-time update.
                  <br />
                  <strong>Step 4 — Allocation draft:</strong> Once oversubscription is confirmed, draft allocation ratios (requested vs. allocated) for each institution. Associate reviews, MD approves.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 7 — Signing & Closing
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Signing & Closing: 마지막 관문" : "Signing & Closing: The Final Gate"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko
                ? "배분이 끝난 후 법적 계약을 체결하고 실제로 돈이 움직이기까지의 과정입니다."
                : "From allocation to legal contract execution and actual fund disbursement."}
            </p>

            {/* Signing vs Closing */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-cyan-200 dark:border-cyan-700 bg-cyan-50/40 dark:bg-cyan-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">✍️</span>
                  <h3 className="text-[14px] font-extrabold text-cyan-800 dark:text-cyan-200">Signing</h3>
                </div>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Facility Agreement 등 법적 문서에 모든 당사자가 서명하는 단계. 법적 구속력이 발생합니다. 단, 실제 자금은 아직 집행되지 않습니다. Conditions Precedent(CP) 충족 후 Closing으로 넘어갑니다."
                    : "All parties execute the Facility Agreement and other legal documents. Legal obligations are created. However, funds are not yet disbursed — that awaits satisfaction of Conditions Precedent before Closing."}
                </p>
              </div>
              <div className="rounded-xl border border-green-200 dark:border-green-700 bg-green-50/40 dark:bg-green-900/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💰</span>
                  <h3 className="text-[14px] font-extrabold text-green-800 dark:text-green-200">Closing</h3>
                </div>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "모든 CP가 해소된 후 에이전트 은행이 참여은행들에게 자금 제공을 요청하는 단계. Drawdown(첫 인출)이 실행됩니다. 이때부터 이자가 발생하고 딜 팀의 공식 업무가 완료됩니다."
                    : "After all CPs are cleared, the agent bank calls for funds from each lender on a pro-rata basis. The first drawdown is executed. Interest begins accruing from this date, and the deal team's official work is complete."}
                </p>
              </div>
            </div>

            {/* CP 리스트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5 mb-5">
              <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-3">
                {ko ? "Conditions Precedent (CP) 주요 항목" : "Key Conditions Precedent (CP) Items"}
              </h3>
              <p className="text-[12px] text-gray-400 dark:text-gray-500 mb-3">
                {ko ? "CP 해소 기간: 보통 2~4주" : "Typical CP clearance period: 2–4 weeks"}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {(ko ? [
                  "규제 승인 (경쟁당국, 금융감독원 등)",
                  "법률 의견서 (Legal Opinion) — 각국 법무법인",
                  "보험 증명서 (담보 자산 대상)",
                  "최신 감사 재무제표 제출",
                  "이사회 결의서 (Board Resolutions)",
                  "담보 설정 완료 (UCC Filing 등)",
                  "기존 채무 상환 증명 (Refinancing 시)",
                  "정관·사업자등록증 등 기업 서류",
                ] : [
                  "Regulatory approvals (antitrust, financial regulators)",
                  "Legal opinions — law firms in each jurisdiction",
                  "Insurance certificates (covering collateral assets)",
                  "Latest audited financial statements",
                  "Board resolutions",
                  "Perfected security interests (UCC filings etc.)",
                  "Evidence of existing debt repayment (if refinancing)",
                  "Constitutional documents (articles, company cert.)",
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[12px] text-gray-600 dark:text-gray-400">
                    <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5 font-bold">·</span>{item}
                  </div>
                ))}
              </div>
            </div>

            {/* Drawdown & Closing Dinner */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-2">⚡ {ko ? "Drawdown 프로세스" : "Drawdown Process"}</h3>
                <ol className="space-y-1.5 text-[12px] text-gray-500 dark:text-gray-400 list-decimal list-inside">
                  {(ko ? [
                    "차주 → 에이전트: 인출 통지서(Drawdown Notice) 발송",
                    "에이전트 → 참여은행: Pro-rata 자금 요청",
                    "참여은행 → 에이전트: 지정 계좌로 입금",
                    "에이전트 → 차주: 합산 금액 전달",
                    "이자 계산 시작 (SOFR + 스프레드)",
                  ] : [
                    "Borrower → Agent: send Drawdown Notice",
                    "Agent → Lenders: pro-rata funding request",
                    "Lenders → Agent: fund designated account",
                    "Agent → Borrower: transfer aggregate proceeds",
                    "Interest accrual begins (SOFR + spread)",
                  ]).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl border border-amber-200 dark:border-amber-700 bg-amber-50/40 dark:bg-amber-900/10 p-4">
                <h3 className="text-[13px] font-bold text-amber-800 dark:text-amber-200 mb-2">🍽️ {ko ? "Closing Dinner" : "Closing Dinner"}</h3>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "딜이 클로징되면 관례적으로 딜팀 전원이 저녁 식사를 합니다. MLA가 비용을 부담하며 차주 CFO, 법무팀, Analyst까지 모두 초대됩니다. 한국에서는 강남 고급 식당 회식이 일반적입니다. 여기서 딜 관련 기념품(tombstone)을 나눠주기도 합니다."
                    : "When the deal closes, it is standard practice for the full deal team to share a closing dinner. The MLA hosts; invitees include the borrower's CFO, legal teams, and Analysts. Deal tombstones are sometimes distributed here. In Korea, the tradition is a dinner at a high-end Gangnam restaurant."}
                </p>
              </div>
            </div>

            <PracticeBox title={ko ? "Associate의 CP 체크리스트 관리" : "Associate's CP Checklist Management"}>
              {ko
                ? <>CP 관리는 Closing의 병목입니다. Associate는 다음 방식으로 추적합니다:
                  <br /><br />
                  <strong>스프레드시트 구조:</strong> 행 = CP 항목(20~40개), 열 = ①책임자 ②마감 기한 ③현재 상태(미착수/진행중/완료/대기) ④비고.
                  <br /><br />
                  <strong>상태 색 코드:</strong> 빨강(미착수·지연), 노랑(진행중), 초록(완료). MD·법무법인·차주 CFO 모두 이 파일을 공유합니다.
                  <br /><br />
                  <strong>일일 업데이트:</strong> 매 영업일 오전 9시 상태 확인 후 딜팀에 이메일 배포. 마감 2주 전부터는 매일 오전·오후 2회 업데이트.
                  <br /><br />
                  <strong>에스컬레이션:</strong> 핵심 CP(규제 승인, Legal Opinion)가 마감일 3일 전까지 미완이면 MD가 직접 관련 기관에 연락합니다. Closing일 연장이 필요할 수 있으며, 이는 참여은행들과 조율이 필요합니다.</>
                : <>CP management is the bottleneck of the closing. Associates track as follows:
                  <br /><br />
                  <strong>Spreadsheet structure:</strong> Rows = CP items (20–40 items), columns = ①owner ②deadline ③current status (not started / in progress / complete / pending) ④notes.
                  <br /><br />
                  <strong>Color-coded status:</strong> Red (not started / delayed), yellow (in progress), green (complete). Shared with MD, law firms, and borrower CFO.
                  <br /><br />
                  <strong>Daily update:</strong> Status confirmed each morning at 9am; summary emailed to the deal team. Two weeks before closing: twice-daily updates (morning and afternoon).
                  <br /><br />
                  <strong>Escalation:</strong> If a critical CP (regulatory approval, Legal Opinion) remains incomplete 3 business days before closing, the MD contacts the relevant party directly. A closing extension may be required, which must be coordinated with all participating lenders.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">FAQ</h2>
            <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
          </motion.section>

          {/* ── 시리즈 네비게이션 (하단) ── */}
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">
                {ko ? "신디케이티드론 101 시리즈" : "Syndicated Loans 101 Series"}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {SYNDLOAN_SERIES.filter((ch) => ch.slug !== THIS_CH).map((ch) => (
                <Link key={ch.slug} href={`${ko ? "/market-101" : "/en/market-101"}/${ch.slug}`}>
                  <div className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-sm transition-all bg-white dark:bg-gray-900">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0" style={{ background: ACCENT }}>
                      {ch.ch}
                    </span>
                    <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {ko ? ch.title : ch.titleEn}
                    </span>
                    <span className="ml-auto text-cyan-500 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── 참고 자료 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "참고 자료" : "References"}
            </h2>
            <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              {[
                "LSEG LPC (2024). Global Syndicated Loans Review.",
                "LMA (2023). Recommended Form of Facility Agreement — Mandate Letter & Fee Letter Guidelines.",
                "S&P Global Market Intelligence (2023). Leveraged Loan Primer: Deal Process and Documentation.",
                "Moody's (2022). Hung Deals and Market Flex: Analysis of 2022 Leveraged Finance Dislocation.",
                "Wall Street Journal (2022). Twitter Acquisition Financing: How Seven Banks Got Stuck.",
                "Fitch Ratings (2023). Bookbuild Mechanics and CLO Demand Dynamics.",
                "Harvard Law School Forum on Corporate Governance (2022). Market Flex Provisions in Leveraged Finance.",
              ].map((ref, i) => (
                <li key={i}>[{i + 1}] {ref}</li>
              ))}
            </ol>
          </motion.section>

          {/* ── 딜 아카이브 연계 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "딜 아카이브 — 프로세스 실전 케이스" : "Deal Archive — Process in Action"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  slug: "bayer-monsanto",
                  badge: ko ? "IG 브리지 프로세스" : "IG Bridge Process",
                  title: ko ? "바이엘 × 몬산토 (2018)" : "Bayer × Monsanto (2018)",
                  desc: ko
                    ? "발표 → 약정 → 18개월 리파이낸싱 — 교과서적 IG 브리지 실행 로드맵"
                    : "Announcement → Commitment → 18-month refinancing — textbook IG bridge execution",
                  logo: "BAYER",
                  bg: "bg-[#10384F]",
                },
              ].map((d) => (
                <Link key={d.slug} href={`/deals/${d.slug}`}>
                  <div className="group flex gap-3 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50/40 dark:bg-cyan-900/10 hover:border-cyan-400 dark:hover:border-cyan-600 hover:shadow-sm transition-all">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${d.bg} flex items-center justify-center`}>
                      <span className="text-white text-[9px] font-black">{d.logo}</span>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase block mb-0.5">{d.badge}</span>
                      <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        {d.title}
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">{d.desc}</p>
                    </div>
                    <span className="flex-shrink-0 text-cyan-300 dark:text-cyan-700 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors self-center text-lg">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          <ShareButtons
            title={ko ? concept.title : (concept.titleEn || concept.title)} lang={lang} />

        </div>
      </main>
      <Footer />
    </>
  );
}
