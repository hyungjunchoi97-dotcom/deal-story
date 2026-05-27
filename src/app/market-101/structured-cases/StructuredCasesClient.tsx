"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── 색상 & 상수 ─────────────────────────────────────────────────────────────
const ACCENT       = "#f59e0b"; // amber-400
const ACCENT_LIGHT = "#fffbeb"; // amber-50
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

// ── 시리즈 네비게이션 ────────────────────────────────────────────────────────
const THIS_CH = "structured-cases";
const STRUCTURED_SERIES = [
  { slug: "structured-overview",  title: (ko: boolean) => ko ? "Ch.0 개요"    : "Ch.0 Overview"   },
  { slug: "structured-abs",       title: (ko: boolean) => ko ? "Ch.1 ABS"      : "Ch.1 ABS"        },
  { slug: "structured-clo",       title: (ko: boolean) => ko ? "Ch.2 CLO"      : "Ch.2 CLO"        },
  { slug: "structured-cmbs",      title: (ko: boolean) => ko ? "Ch.3 CMBS"     : "Ch.3 CMBS"       },
  { slug: "structured-waterfall", title: (ko: boolean) => ko ? "Ch.4 워터폴"   : "Ch.4 Waterfall"  },
  { slug: "structured-cdo",       title: (ko: boolean) => ko ? "Ch.5 CDO·위기" : "Ch.5 CDO·Crisis" },
  { slug: "structured-cases",     title: (ko: boolean) => ko ? "Ch.6 케이스"   : "Ch.6 Cases"      },
];

function ChapterNav({ ko }: { ko: boolean }) {
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {STRUCTURED_SERIES.map((ch) => {
        const active = ch.slug === THIS_CH;
        return (
          <Link key={ch.slug} href={`${base}/${ch.slug}`}>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
                active
                  ? "text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 hover:text-amber-700 dark:hover:text-amber-300"
              }`}
              style={active ? { background: ACCENT } : {}}
            >
              {ch.title(ko)}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ── 인사이트 박스 ────────────────────────────────────────────────────────────
function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-5 rounded-xl border-l-4 p-5"
      style={{ borderColor: ACCENT, background: ACCENT_LIGHT }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ── 경고 박스 ────────────────────────────────────────────────────────────────
function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border-l-4 border-rose-400 bg-rose-50 dark:bg-rose-900/15 p-5">
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">⚠️</span>
        <div className="text-[13px] text-rose-900 dark:text-rose-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ── 실무 박스 ────────────────────────────────────────────────────────────────
function PracticeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="my-5 rounded-xl border p-5"
      style={{ borderColor: ACCENT + "60", background: ACCENT_LIGHT }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: ACCENT }}
        >
          실무
        </span>
        <span className="text-[13px] font-bold text-amber-900 dark:text-amber-200">{title}</span>
      </div>
      <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
    </div>
  );
}

// ── 케이스 헤더 ──────────────────────────────────────────────────────────────
function CaseHeader({
  num, year, title, subtitle, verdict, verdictEn, isKo
}: {
  num: string; year: string; title: string; subtitle: string;
  verdict: string; verdictEn: string; isKo: boolean;
}) {
  const isCollapse = verdict.includes("붕괴") || verdict.includes("Collapse") || verdict.includes("위기") || verdict.includes("Crisis");
  const isSurvive  = verdict.includes("버텼") || verdict.includes("Survived");
  const color = isCollapse ? "#ef4444" : isSurvive ? "#22c55e" : ACCENT;
  return (
    <div className="flex items-start gap-4 mb-6">
      <div
        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-[15px] shadow"
        style={{ background: color }}
      >
        {num}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{year}</span>
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: color }}
          >
            {isKo ? verdict : verdictEn}
          </span>
        </div>
        <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-1">{title}</h2>
        <p className="text-[13px] text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

// ── 커스텀 툴팁 ──────────────────────────────────────────────────────────────
function ChartTooltip({
  active, payload, label, unit = "B",
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
  unit?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: <strong>${p.value}{unit}</strong>
        </p>
      ))}
    </div>
  );
}

function LineChartTooltip({
  active, payload, label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: <strong>{p.value}</strong>
        </p>
      ))}
    </div>
  );
}

// ── 차트 데이터 ──────────────────────────────────────────────────────────────
const LOSS_DATA = [
  { name: "2008 RMBS/CDO", loss: 2700, color: "#ef4444" },
  { name: "2020 CLO AAA",  loss: 0,    color: "#22c55e" },
  { name: "2023 CMBS",     loss: 85,   color: "#f59e0b" },
  { name: "한국 PF ABS",   loss: 20,   color: "#8b5cf6" },
];

const CLO_PRICE_DATA = [
  { month: "Jan", AAA: 100, BB: 100 },
  { month: "Feb", AAA: 100, BB:  98 },
  { month: "Mar", AAA:  98, BB:  72 },
  { month: "Apr", AAA:  99, BB:  76 },
  { month: "May", AAA: 100, BB:  80 },
  { month: "Jun", AAA: 100, BB:  82 },
  { month: "Jul", AAA: 100, BB:  84 },
  { month: "Aug", AAA: 100, BB:  85 },
  { month: "Sep", AAA: 100, BB:  85 },
  { month: "Oct", AAA: 100, BB:  86 },
  { month: "Nov", AAA: 100, BB:  87 },
  { month: "Dec", AAA: 100, BB:  88 },
];

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "2008년과 2020년의 가장 핵심적인 차이는 무엇인가요?",
    a: "핵심 차이는 기초자산의 질과 상관관계입니다. 2008년 RMBS/CDO는 NINJA 대출(무소득·무직업·무자산)로 구성된 서브프라임 모기지를 기초자산으로 했고, 신용평가사 모델은 '주택가격은 전국적으로 동시에 하락하지 않는다'는 잘못된 가정 위에 있었습니다. 실제로 2006년부터 전국 동반 하락이 시작됐고 AAA 등급도 무너졌습니다. 반면 2020년 CLO는 레버리지드 론 포트폴리오를 기초자산으로 했는데, 이는 담보가 있고 시니어 대출이며 분산화된 기업군입니다. 코로나 충격이 왔을 때 레버리지드 론 가격은 60센트까지 떨어졌지만 실제 디폴트율은 상대적으로 낮았고, 에쿼티/BB 트랑쉐가 손실을 흡수하면서 AAA는 원금을 보전했습니다. 결국 구조 자체보다 '무엇을 담았느냐'가 결정적이었습니다.",
  },
  {
    q: "2023년 미국 오피스 CMBS 위기는 아직 끝나지 않은 건가요?",
    a: "네, 2026년 기준으로도 진행 중입니다. 오피스 시장의 문제는 금리 문제가 아니라 구조적 수요 감소라는 점에서 2020년 COVID 충격과 다릅니다. 재택근무 정착으로 오피스 점유율 회복이 제한적이고, 2024~2026년 만기가 도래하는 대형 오피스 CMBS들이 리파이낸싱 불가 상황에 처하고 있습니다. 특히 Class B, C 오피스는 구조적 공실 문제가 수년 이상 지속될 전망입니다. 샌프란시스코, 시카고 같은 시장은 오피스 공실률 30%+를 기록하고 있습니다. 반면 뉴욕 midtown high-end Class A와 같은 프리미엄 오피스는 상대적으로 안정적입니다.",
  },
  {
    q: "한국 부동산PF와 미국 CMBS는 어떻게 다른가요?",
    a: "가장 큰 차이는 완성 리스크입니다. 한국 부동산PF ABS는 주로 착공 전 또는 건설 중 프로젝트를 대상으로 하며, 분양률과 공사 완료 여부가 핵심 리스크입니다. 미국 CMBS는 이미 완공된 건물의 임대 수익(NOI)을 기반으로 하므로 완성 리스크가 없습니다. 또한 한국 PF는 증권사의 신용보강(매입확약·지급보증)이 구조 내 필수 요소인 반면, 미국 CMBS는 트랑쉐 구조 자체가 신용 보강입니다. 위기 시 전파 경로도 다릅니다. 한국은 증권사 자본 압박 → 금융시스템 전체 신용경색으로 이어지고, 미국은 CMBS 가격 하락 → 보험사·연기금 자산 손실 → 부동산 담보대출 시장 위축으로 이어집니다.",
  },
  {
    q: "CDO 구조는 왜 지금도 존재하나요? 다시는 만들지 않아야 하는 것 아닌가요?",
    a: "CDO는 사라지지 않았습니다. 다만 기초자산이 바뀌었습니다. 문제가 된 것은 특정 기초자산(서브프라임 RMBS)을 담은 CDO였지 CDO 구조 자체가 나쁜 것은 아닙니다. CLO는 CDO의 한 형태이며 레버리지드 론을 담습니다. CLO 시장은 2020년 COVID에서도 AAA 트랑쉐가 버티면서 오히려 구조의 유효성을 증명했습니다. 시장은 규제 강화(리스크 리텐션, 더 엄격한 신용평가 방법론), 정보 공개 의무 확대, 투자자 교육 향상으로 진화했습니다. '구조화 상품=위험'이 아니라 '투명성 없는 구조화 상품=위험'이 정확한 교훈입니다.",
  },
  {
    q: "레고랜드 사태가 왜 그렇게 큰 파장을 일으켰나요?",
    a: "레고랜드 사태(2022년 9월)의 파장이 컸던 이유는 '지방자치단체 신용보강'이라는 시장 공리를 깬 첫 번째 사례였기 때문입니다. 강원도는 레고랜드 시행사(강원중도개발공사)의 ABCP 2,050억원에 대해 채무보증을 섰는데, 이를 이행하지 않겠다고 선언했습니다. 지자체가 공식 채무보증을 부인한 것은 한국 금융시장 역사상 전례 없는 일이었습니다. 투자자들은 즉시 '지방공기업·공사 보증 ABCP 전반'을 불신했고, 단기자금시장 전체가 경색됐습니다. 한국은행과 기획재정부가 긴급 유동성 공급(50조+)에 나서야 했고, 이는 한국 부동산PF 시장의 구조적 취약성을 전 세계에 노출시킨 사건이었습니다.",
  },
];

const FAQ_EN = [
  {
    q: "What is the most fundamental difference between 2008 and 2020?",
    a: "The core difference is asset quality and correlation assumptions. The 2008 RMBS/CDO machine was built on subprime mortgages from NINJA (No Income, No Job, No Assets) borrowers, and rating agency models rested on the false assumption that U.S. home prices would never fall simultaneously nationwide. When nationwide synchronized declines began in 2006, AAA tranches collapsed along with everything else. The 2020 CLO market, by contrast, held leveraged loan portfolios backed by collateralized senior corporate debt with diversified exposure. When COVID hit, leveraged loan prices fell to 60 cents, but actual default rates were relatively contained. Equity and BB tranches absorbed losses while AAA held. The lesson: what you put inside the structure matters far more than the structure itself.",
  },
  {
    q: "Is the 2023 U.S. office CMBS crisis still ongoing?",
    a: "Yes, as of 2026 it is still unfolding. Unlike the 2020 COVID shock — which was cyclical — the office market faces structural demand destruction from the permanent adoption of hybrid work. Large office CMBS tranches maturing in 2024–2026 face refinancing walls in a market where valuations have fallen 30–50% from peak. Class B and C offices face years of elevated vacancy. San Francisco and Chicago post vacancy rates above 30%. Premium Class A space in NYC Midtown remains relatively resilient. The bifurcation between trophy and commodity office is the defining market dynamic — a pattern also visible in the original Brookfield DTLA distress.",
  },
  {
    q: "How is Korea's real estate PF ABS different from U.S. CMBS?",
    a: "The most critical difference is completion risk. Korean PF ABS typically finances projects pre-completion — land purchase, pre-sale, and construction phases. The key risks are pre-sale absorption rates and construction completion. U.S. CMBS finances stabilized, income-producing properties with existing NOI — completion risk is absent. Structurally, Korean PF relies on securities firm credit enhancement (purchase commitments, payment guarantees) as an integral part of the structure, whereas U.S. CMBS relies on tranching itself as the primary credit mechanism. The crisis contagion paths also differ: Korea routes through securities firm capital pressure into systemic credit tightening; the U.S. routes through CMBS price declines into insurance company and pension fund losses, then into broader CRE lending contraction.",
  },
  {
    q: "Why do CDO structures still exist? Shouldn't they be banned?",
    a: "CDOs never disappeared — the underlying collateral changed. What failed in 2008 was a specific type of CDO backed by subprime RMBS, not the CDO structure per se. CLOs are a form of CDO backed by leveraged loans, and the CLO market proved its structural validity in 2020 when AAA tranches survived the COVID stress test. The market evolved through regulatory reform: risk retention requirements, more rigorous rating methodology, greater disclosure obligations, and investor education. The accurate lesson is not 'structured products are dangerous' — it is 'structured products without transparency are dangerous.'",
  },
  {
    q: "Why did the Legoland incident trigger such widespread market disruption?",
    a: "The Legoland incident (September 2022) broke a foundational market axiom: that local government credit guarantees are inviolable. Gangwon Province had formally guaranteed ₩205 billion in ABCP for the Legoland developer (Gangwon Jungdo Development Corp), then announced it would not honor that guarantee. A local government publicly repudiating a formal credit obligation was unprecedented in Korean financial market history. Investors immediately lost confidence in all ABCP and ABSTB backed by local public entity guarantees, freezing the short-term funding market. The Bank of Korea and Ministry of Finance had to deploy emergency liquidity measures exceeding ₩50 trillion. The incident exposed the systemic fragility of Korea's PF ABS market to global investors for the first time.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function StructuredCasesClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 py-10">

          {/* ── 브레드크럼 ── */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show"
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
            <Link href={ko ? "/" : "/en"} className="hover:text-amber-600 transition-colors">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-amber-600 transition-colors">{ko ? "마켓 101" : "Market 101"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "구조화금융" : "Structured Finance"}</span>
          </motion.div>

          {/* ── 헤더 ── */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: ACCENT }}
              >
                Structured Finance
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Ch.6 / 6
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-3">
              {ko ? concept.title : (concept.titleEn ?? concept.title)}
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko ? concept.excerpt : (concept.excerptEn ?? concept.excerpt)}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-700/40"
                >
                  {t}
                </span>
              ))}
            </div>
            <ShareButtons
              title={ko ? concept.title : (concept.titleEn ?? concept.title)}
              variant="top"
              lang={lang}
            />
          </motion.div>

          {/* ── 챕터 네비게이션 ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mt-8">
            <ChapterNav ko={ko} />
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 0 — 30초 요약
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "같은 구조화금융이 어떤 위기에서는 무너지고, 어떤 위기에서는 버텼는가."
                : "Why the same structured finance technology collapses in some crises and holds in others."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  label: ko ? "2008 글로벌 손실" : "2008 Global Loss",
                  value: "$2.7T+",
                  sub:   ko ? "RMBS/CDO 붕괴" : "RMBS/CDO collapse",
                },
                {
                  label: ko ? "2020 CLO AAA 손실" : "2020 CLO AAA Loss",
                  value: "$0",
                  sub:   ko ? "버텼음 — 워터폴 작동" : "Survived — waterfall worked",
                },
                {
                  label: ko ? "2023 오피스 CMBS 연체율" : "2023 Office CMBS DQ",
                  value: "8.1%",
                  sub:   ko ? "코로나 이전 2.5%" : "vs 2.5% pre-COVID",
                },
                {
                  label: ko ? "한국 부동산PF 잔액" : "Korea PF Balance",
                  value: "130조",
                  sub:   ko ? "2022년 기준" : "as of 2022",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center"
                >
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-lg font-extrabold leading-tight" style={{ color: ACCENT }}>{s.value}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* 손실 규모 비교 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-4">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "케이스별 추정 손실 규모 비교 ($B)" : "Estimated Loss by Case ($B)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                {ko
                  ? "2020 CLO AAA는 원금 손실 없음. 2008 RMBS 수치는 IMF 추정치."
                  : "2020 CLO AAA: no principal loss. 2008 RMBS figure per IMF estimate."}
              </p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={LOSS_DATA} barSize={44}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}B`} />
                  <Tooltip
                    content={<ChartTooltip unit="B" />}
                  />
                  <Bar dataKey="loss" name={ko ? "손실($B)" : "Loss($B)"}>
                    {LOSS_DATA.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <InsightBox>
              <strong>
                {ko
                  ? "이 챕터의 핵심 질문: 구조화금융은 왜 어떤 위기에선 무너지고 어떤 위기에선 버티는가?"
                  : "The central question of this chapter: Why does structured finance collapse in some crises and survive in others?"}
              </strong>
              <br /><br />
              {ko
                ? "답은 세 가지로 수렴합니다. ① 기초자산의 실질 품질, ② 상관관계 가정의 정확성, ③ 정보 비대칭의 정도. 이 챕터에서 네 가지 실제 사례를 통해 이 질문에 답합니다."
                : "The answer converges to three factors: ① genuine quality of the underlying assets, ② accuracy of correlation assumptions, and ③ degree of information asymmetry. This chapter answers through four real-world cases."}
            </InsightBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              케이스 1 — 2008 서브프라임 RMBS/CDO 붕괴
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-16">
            <CaseHeader
              num="01"
              year="2004–2008"
              title={ko ? "2008 서브프라임 RMBS/CDO 붕괴" : "2008 Subprime RMBS/CDO Collapse"}
              subtitle={ko
                ? "가장 위험한 자산에 AAA를 붙였을 때 — $2.7T 손실의 해부"
                : "What happens when you stamp AAA on the riskiest assets — anatomy of a $2.7T loss"}
              verdict="붕괴"
              verdictEn="Collapsed"
              isKo={ko}
            />

            {/* 배경 */}
            <div className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50/30 dark:bg-red-900/10 p-5 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3">
                {ko ? "배경: 2004–2007년 서브프라임 모기지 급증" : "Background: 2004–2007 Subprime Mortgage Boom"}
              </h3>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {[
                  { label: ko ? "서브프라임 모기지 발행액" : "Subprime Mortgage Issuance", value: "$1.3T", sub: ko ? "2006년 정점" : "2006 peak" },
                  { label: ko ? "CDO 발행 누적" : "CDO Issuance (cumulative)", value: "$520B", sub: ko ? "2004~2007" : "2004–2007" },
                  { label: ko ? "주요 CDO 레버리지" : "CDO Leverage", value: "10~15×", sub: ko ? "에쿼티 대비" : "vs equity" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-red-200 dark:border-red-700/50 bg-white dark:bg-gray-900 p-3 text-center">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{m.label}</p>
                    <p className="text-[17px] font-extrabold" style={{ color: "#ef4444" }}>{m.value}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{m.sub}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-1.5 text-[12px] text-gray-600 dark:text-gray-400">
                {(ko ? [
                  "NINJA 대출(No Income, No Job, No Assets): 소득·직업·자산 확인 없이 모기지 승인. '집값이 오르면 다 해결된다'는 논리.",
                  "Teaser Rate 구조: 초기 2년은 낮은 금리(2~3%), 이후 급격히 올라가는 ARM(Adjustable Rate Mortgage). 차주는 갱신 불가능 시 디폴트.",
                  "신용평가사 모델 오류: 가우시안 코퓰러(Gaussian Copula) 모델 — 전국 주택가격이 동시에 하락하는 시나리오 없음.",
                  "발행사 인센티브 왜곡: Originate-to-Distribute — 모기지를 발행하고 즉시 매각하므로 부실 리스크를 보유하지 않음.",
                ] : [
                  "NINJA loans (No Income, No Job, No Assets): mortgages approved without verification. The logic: 'Rising home prices will take care of everything.'",
                  "Teaser rate structure: low initial rates (2–3%) for two years followed by sharp ARM resets. Borrowers who couldn't refinance defaulted automatically.",
                  "Rating agency model failure: Gaussian Copula model assumed home prices across the U.S. would never decline simultaneously — a scenario never stress-tested.",
                  "Originator incentive misalignment: Originate-to-Distribute model — mortgages originated and immediately sold, leaving no default risk on the issuer's balance sheet.",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0 font-bold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 붕괴 과정 타임라인 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-4">
              {ko ? "붕괴 과정: 단계별 전파" : "The Collapse: Step-by-Step Contagion"}
            </h3>
            <div className="relative pl-5 border-l-2 border-red-200 dark:border-red-700/50 space-y-4 mb-6">
              {(ko ? [
                {
                  date: "2006 Q4",
                  title: "주택가격 하락 시작",
                  body: "전국 주택가격 지수(Case-Shiller) 하락 전환. 서브프라임 ARM 리셋 도래 → 차주 연체율 급등.",
                },
                {
                  date: "2007 Q2",
                  title: "Bear Stearns 헤지펀드 폭발",
                  body: "Bear Stearns의 두 CDO 헤지펀드가 RMBS 손실로 $1.6B 손실 공시 후 청산. 시장 최초의 공식 경보.",
                },
                {
                  date: "2007 하반기",
                  title: "평가사 등급 대량 강등",
                  body: "S&P·Moody's·Fitch가 수천 개 서브프라임 RMBS·CDO 트랑쉐를 AAA→CCC 대량 강등. CLO, 보험사, 머니마켓펀드 손실 확산.",
                },
                {
                  date: "2008 Q1",
                  title: "Bear Stearns 파산 직전 — Fed 구제",
                  body: "CDS 콜 → 유동성 소진. JP모건이 연준 지원 하에 주당 $2에 인수. 시장: '누가 다음인가?'",
                },
                {
                  date: "2008 Q3",
                  title: "Lehman Brothers 파산",
                  body: "2008년 9월 15일. $600B+ 부채로 역대 최대 기업 파산. 머니마켓펀드 NAV 1달러 이하(Breaking the Buck). 글로벌 신용경색.",
                },
                {
                  date: "2008 Q3~Q4",
                  title: "AIG CDS 발동 → 구제금융",
                  body: "AIG가 RMBS/CDO에 CDS 인수 약 $400B 규모. AIG 파산 시 글로벌 은행 시스템 연쇄 붕괴 우려 → 미 재무부 $182B 구제금융.",
                },
              ] : [
                {
                  date: "Q4 2006",
                  title: "Home Prices Begin Falling",
                  body: "Case-Shiller National Home Price Index turns negative. Subprime ARM resets hit → borrower delinquency rates spike.",
                },
                {
                  date: "Q2 2007",
                  title: "Bear Stearns Hedge Fund Blowup",
                  body: "Two Bear Stearns CDO hedge funds announce $1.6B in RMBS losses and liquidate. The market's first official alarm signal.",
                },
                {
                  date: "H2 2007",
                  title: "Mass Rating Agency Downgrades",
                  body: "S&P, Moody's, and Fitch mass-downgrade thousands of subprime RMBS and CDO tranches from AAA to CCC. Losses spread to CLOs, insurers, and money market funds.",
                },
                {
                  date: "Q1 2008",
                  title: "Bear Stearns Near-Failure — Fed Rescue",
                  body: "CDS margin calls drain liquidity. JP Morgan acquires Bear at $2/share with Fed backstop. Market question: 'Who is next?'",
                },
                {
                  date: "Q3 2008",
                  title: "Lehman Brothers Bankruptcy",
                  body: "September 15, 2008. Largest corporate bankruptcy in history at $600B+ in liabilities. Money market funds break the buck. Global credit freeze.",
                },
                {
                  date: "Q3–Q4 2008",
                  title: "AIG CDS Triggers → Bailout",
                  body: "AIG had written approximately $400B in CDS on RMBS/CDO. AIG failure would trigger cascading global bank collapses → U.S. Treasury bailout of $182B.",
                },
              ]).map((step, i) => (
                <div key={i} className="relative">
                  <div
                    className="absolute -left-[21px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-950"
                    style={{ background: "#ef4444" }}
                  />
                  <div className="text-[10px] font-bold text-red-500 mb-0.5">{step.date}</div>
                  <div className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{step.title}</div>
                  <div className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</div>
                </div>
              ))}
            </div>

            {/* 교훈 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "구조적 교훈 4가지" : "4 Structural Lessons"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {(ko ? [
                {
                  icon: "🔴",
                  title: "상관관계 가정 오류",
                  body: "전국 주택가격의 동반 하락 가능성을 0으로 가정한 모델. 스트레스 시나리오에서 모든 기초자산이 동시에 악화되자 트랑쉐 구조 전체가 무력화됐다.",
                },
                {
                  icon: "🔴",
                  title: "정보 비대칭",
                  body: "모기지 발행사는 차주의 실제 신용 상태를 알았지만, 최종 CDO 투자자는 수백 개 모기지가 섞인 구조물의 실질 품질을 알 수 없었다. Originate-to-Distribute가 정보 불균형을 제도화했다.",
                },
                {
                  icon: "🔴",
                  title: "인센티브 왜곡",
                  body: "신용평가사는 발행사에게서 수수료를 받았다. 등급을 높게 줄수록 수수료 수익이 늘었다. 감시자와 피감시자 사이의 이해충돌이 시스템 전체를 오염시켰다.",
                },
                {
                  icon: "🔴",
                  title: "레버리지 과잉·투명성 부재",
                  body: "CDO-squared(CDO의 CDO)까지 만들어지며 레버리지가 극한에 달했다. 어떤 자산이 안에 있는지 최종 투자자조차 알 수 없는 복잡성이 공포를 증폭시켰다.",
                },
              ] : [
                {
                  icon: "🔴",
                  title: "Correlation Assumption Failure",
                  body: "Models assigned near-zero probability to nationwide simultaneous home price declines. When every underlying asset deteriorated at once under stress, the entire tranche structure was rendered meaningless.",
                },
                {
                  icon: "🔴",
                  title: "Information Asymmetry",
                  body: "Mortgage originators knew the true credit quality of borrowers. Final CDO investors could not know the real quality of the hundreds of mortgages inside their structured product. Originate-to-Distribute institutionalized the information imbalance.",
                },
                {
                  icon: "🔴",
                  title: "Incentive Misalignment",
                  body: "Rating agencies were paid by issuers. Higher ratings generated higher fee revenue. The conflict of interest between the watchdog and the watched contaminated the entire system.",
                },
                {
                  icon: "🔴",
                  title: "Excessive Leverage and Opacity",
                  body: "CDO-squared (CDOs of CDOs) pushed leverage to extremes. Even the final investor couldn't identify what was inside. Opacity amplified panic when the underlying assets began failing.",
                },
              ]).map((l) => (
                <div key={l.title} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50/20 dark:bg-red-900/10 p-4">
                  <span className="text-xl mb-2 block">{l.icon}</span>
                  <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{l.title}</p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{l.body}</p>
                </div>
              ))}
            </div>

            <WarningBox>
              {ko
                ? <><strong>AAA 등급은 구조의 안전을 보장하지 않는다.</strong> 2008년 위기에서 가장 충격적인 사실은, AAA 등급을 받은 수많은 CDO 트랑쉐가 원금의 80~100%를 잃었다는 것이다. 등급은 특정 가정 아래 모델이 산출한 숫자일 뿐이다. 기초자산의 실질 품질과 상관관계 가정을 투자자가 직접 검증하지 않으면 등급은 거짓 안도감을 준다.</>
                : <><strong>AAA means the model said so — not that the structure is safe.</strong> The most shocking fact from the 2008 crisis: many AAA-rated CDO tranches lost 80–100% of principal. A rating is a model output under specific assumptions. Without independent verification of underlying asset quality and correlation assumptions, the rating creates false confidence.</>
              }
            </WarningBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              케이스 2 — 2020 COVID: CLO AAA는 왜 버텼나
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-16">
            <CaseHeader
              num="02"
              year="2020"
              title={ko ? "2020 COVID — CLO AAA는 왜 버텼나" : "2020 COVID — Why CLO AAA Tranches Survived"}
              subtitle={ko
                ? "레버리지드론 시장이 60센트로 급락했는데도 AAA가 원금을 보전한 이유"
                : "How AAA tranches held principal even as leveraged loan prices crashed to 60 cents"}
              verdict="버텼음"
              verdictEn="Survived"
              isKo={ko}
            />

            {/* 배경 */}
            <div className="rounded-xl border border-green-200 dark:border-green-700/50 bg-green-50/20 dark:bg-green-900/10 p-5 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3">
                {ko ? "배경: 2020년 3월 시장 충격" : "Background: The March 2020 Market Shock"}
              </h3>
              <ul className="space-y-1.5 text-[12px] text-gray-600 dark:text-gray-400">
                {(ko ? [
                  "2020년 3월: COVID-19 팬데믹 → 경제 셧다운 → 기업 실적 급락 우려.",
                  "레버리지드론 평균 가격: 100센트(1월) → 60센트(3월 말). 불과 8주 만에 40% 급락.",
                  "CLO 에쿼티 트랑쉐: 시가 기준 -40~70% 하락. BB 트랑쉐: -25~30% 하락.",
                  "그러나 CLO AAA 트랑쉐: 1~2%P 스프레드 확대에 그쳤고 원금 손실 없음.",
                ] : [
                  "March 2020: COVID-19 pandemic → economic shutdown → fear of corporate earnings collapse.",
                  "Leveraged loan average price: 100 cents (January) → 60 cents (March). A 40% crash in just eight weeks.",
                  "CLO equity tranches: mark-to-market -40 to -70%. BB tranches: -25 to -30%.",
                  "CLO AAA tranches: only 1–2bps spread widening; zero principal loss.",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0 font-bold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CLO 트랑쉐 가격 추이 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "2020년 CLO 트랑쉐별 가격 추이 (1월 = 100 기준)" : "2020 CLO Tranche Price Performance (Jan = 100)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "실제 시장 데이터 기반 근사치. Source: JP Morgan CLO Research." : "Approximate based on market data. Source: JP Morgan CLO Research."}
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={CLO_PRICE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis domain={[60, 102]} tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}`} />
                  <Tooltip content={<LineChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="AAA"
                    name="CLO AAA"
                    stroke="#22c55e"
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="BB"
                    name="CLO BB"
                    stroke="#ef4444"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-5 mt-2 justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-1 rounded" style={{ background: "#22c55e" }} />
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">CLO AAA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-1 rounded" style={{ background: "#ef4444" }} />
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">CLO BB</span>
                </div>
              </div>
            </div>

            {/* CLO AAA가 버틴 이유 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "CLO AAA가 버틴 3가지 이유" : "3 Reasons CLO AAA Survived"}
            </h3>
            <div className="space-y-3 mb-6">
              {(ko ? [
                {
                  num: "①",
                  color: "#22c55e",
                  title: "에쿼티 버퍼 — 충격 흡수재",
                  body: "일반적인 CLO 구조에서 에쿼티 트랑쉐는 전체 자산의 8~12%를 차지합니다. 이는 '기초자산 가격이 10% 하락해도 AAA 원금에 영향이 없다'는 의미입니다. 2020년 3월 레버리지드론이 60센트까지 하락(40% 하락)했을 때, 에쿼티+BB+BBB 트랑쉐가 전체 하락분을 흡수했습니다. AAA까지 손실이 미치려면 포트폴리오 가치가 약 70% 이상 감소해야 했는데, 이는 개별 기업 파산율이 30~40%에 달해야 가능한 시나리오였습니다.",
                },
                {
                  num: "②",
                  color: "#22c55e",
                  title: "OC(Overcollateralization) 트리거 발동",
                  body: "CLO 계약서에는 OC Test가 내장되어 있습니다. '기초자산 원금 합계 / 해당 트랑쉐 원금 합계'가 일정 비율 이하로 떨어지면 하위 트랑쉐 이자 지급을 중단하고 그 재원으로 AAA를 조기 상환합니다. 2020년 실제로 많은 CLO에서 OC 트리거가 발동되어 에쿼티 트랑쉐 분배가 중단되고 AAA 원금 상환이 가속됐습니다. 이것이 2008년 RMBS CDO에는 없었던 구조적 안전장치입니다.",
                },
                {
                  num: "③",
                  color: "#22c55e",
                  title: "포트폴리오 분산 — 상관관계 현실화",
                  body: "전형적인 CLO는 150~250개 이상의 서로 다른 기업 레버리지드론으로 구성됩니다. 2020년 COVID 충격은 항공, 레저, 에너지 업종에 집중됐지만 기술, 헬스케어, 소비재 섹터는 상대적으로 견조했습니다. 업종 분산 덕분에 포트폴리오 전체 디폴트율은 예상보다 낮았습니다. 2020년 미국 레버리지드론 전체 디폴트율은 약 3~4%였으며, AAA 손실에 필요한 30~40%와는 매우 먼 수치였습니다.",
                },
              ] : [
                {
                  num: "①",
                  color: "#22c55e",
                  title: "Equity Buffer — The Shock Absorber",
                  body: "A typical CLO equity tranche represents 8–12% of total assets. This means AAA principal is unaffected until asset values fall more than 8–12%. When leveraged loan prices dropped to 60 cents in March 2020 (a 40% decline), the equity + BB + BBB tranches absorbed the entire loss cascade. For losses to reach the AAA tranche, portfolio value would need to decline approximately 70%+ — implying individual corporate default rates of 30–40%, far beyond any plausible scenario.",
                },
                {
                  num: "②",
                  color: "#22c55e",
                  title: "OC Trigger Activation",
                  body: "CLO indentures contain built-in OC Tests: if the ratio of portfolio par value to tranche par value falls below a threshold, interest payments to junior tranches are suspended and redirected to repay AAA principal early. In 2020, many CLOs activated OC triggers, halting equity distributions and accelerating AAA principal repayment. This structural safety mechanism was absent from the 2008 RMBS CDOs.",
                },
                {
                  num: "③",
                  color: "#22c55e",
                  title: "Portfolio Diversification — Correlation in Practice",
                  body: "A typical CLO holds 150–250+ leveraged loans across different issuers. The 2020 COVID shock concentrated in airlines, leisure, and energy, but technology, healthcare, and consumer staples held relatively firm. Sector diversification kept overall portfolio default rates far below worst-case scenarios. The 2020 U.S. leveraged loan default rate was approximately 3–4% — versus the 30–40% required to impair AAA tranches.",
                },
              ]).map((f) => (
                <div
                  key={f.num}
                  className="flex items-start gap-3 p-4 rounded-xl border border-green-200 dark:border-green-700/50 bg-green-50/20 dark:bg-green-900/10"
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-extrabold text-white"
                    style={{ background: f.color }}
                  >
                    {f.num}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{f.title}</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <InsightBox>
              <strong>{ko ? "2008년과 2020년: 같은 구조, 다른 결말의 진짜 이유" : "2008 vs 2020: The Real Reason for Different Outcomes"}</strong>
              <br /><br />
              {ko
                ? <>2008년 CDO의 기초자산(서브프라임 RMBS)은 전국적으로 동시에 무너졌고, 상관관계가 1에 수렴했습니다. CLO의 기초자산(레버리지드론)은 업종·기업별로 충격이 달랐고, 상관관계가 0.3~0.5 수준을 유지했습니다. 트랑쉐 구조는 동일합니다. '무엇을 담았느냐'가 결과를 갈랐습니다.</>
                : <>The underlying assets of the 2008 CDO (subprime RMBS) collapsed simultaneously nationwide — correlation converged to 1. The underlying assets of CLOs (leveraged loans) experienced differentiated shocks by sector and company — correlation stayed in the 0.3–0.5 range. The tranche structure was identical. What you put inside determined the outcome.</>
              }
            </InsightBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              케이스 3 — 2023 미국 오피스 CMBS 위기
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-16">
            <CaseHeader
              num="03"
              year="2022–현재"
              title={ko ? "2023 미국 오피스 CMBS 위기" : "2023 U.S. Office CMBS Crisis"}
              subtitle={ko
                ? "재택근무가 바꾼 부동산의 미래 — Brookfield DTLA, Pimco 손실의 해부"
                : "How remote work rewrote commercial real estate — Brookfield DTLA and Pimco losses dissected"}
              verdict="위기 진행 중"
              verdictEn="Ongoing Crisis"
              isKo={ko}
            />

            {/* 배경 */}
            <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/20 dark:bg-amber-900/10 p-5 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3">
                {ko ? "배경: 오피스 수요의 구조적 변화" : "Background: Structural Shift in Office Demand"}
              </h3>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {[
                  {
                    label: ko ? "미국 오피스 CMBS 연체율" : "U.S. Office CMBS DQ Rate",
                    value: "8.1%",
                    sub:   ko ? "2024년 기준 (코로나 前 2.5%)" : "2024 (vs 2.5% pre-COVID)",
                    color: "#ef4444",
                  },
                  {
                    label: ko ? "SF·Chicago 오피스 공실률" : "SF & Chicago Vacancy",
                    value: "30%+",
                    sub:   ko ? "2023~2024년 기록" : "2023–2024 high",
                    color: ACCENT,
                  },
                  {
                    label: ko ? "오피스 자산 가치 하락" : "Office Value Decline",
                    value: "-30~50%",
                    sub:   ko ? "2022년 고점 대비 일부 시장" : "from 2022 peak, select markets",
                    color: "#8b5cf6",
                  },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-amber-200 dark:border-amber-700/50 bg-white dark:bg-gray-900 p-3 text-center">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{m.label}</p>
                    <p className="text-[17px] font-extrabold" style={{ color: m.color }}>{m.value}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 핵심 사례: Brookfield DTLA */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "케이스 3-A: Brookfield DTLA Fund — $784M CMBS 디폴트" : "Case 3-A: Brookfield DTLA Fund — $784M CMBS Default"}
            </h3>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-5">
              <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                {(ko ? [
                  "Brookfield Asset Management의 LA 오피스 펀드. 뱅크오브아메리카 플라자, 가스컴퍼니 타워 등 LA 도심 6개 프리미엄 오피스 빌딩.",
                  "2023년 2월: $784M 규모 CMBS 대출에 대해 만기 연장 협상 결렬 → 디폴트 선언. 메이저 스폰서로서 이례적 결정.",
                  "전략적 디폴트: Brookfield는 재무 능력이 있음에도 '오피스 자산 가치 회복 불가'로 판단, 의도적 디폴트 선택.",
                  "WeWork 파산(2023년 11월)의 충격: WeWork는 많은 오피스 빌딩의 대형 테넌트였으며, WeWork 퇴거 → 오피스 점유율 급락 → CMBS 기초자산 추가 악화.",
                  "Pimco(핌코): 2023년 오피스 CMBS를 담은 일부 펀드에서 수억 달러 손실 공개. 특히 Columbia Property Trust 관련 $1.7B CMBS 디폴트.",
                ] : [
                  "Brookfield Asset Management's Los Angeles office fund. Six premium Downtown LA office buildings including Bank of America Plaza and Gas Company Tower.",
                  "February 2023: $784M CMBS loan maturity extension negotiations fail → default declared. An unusual move for a major institutional sponsor.",
                  "Strategic default: Brookfield had the financial capacity to extend, but judged office values unrecoverable — chose intentional default over further capital commitment.",
                  "WeWork bankruptcy impact (November 2023): WeWork was a major tenant in many office buildings; WeWork departures → occupancy collapse → further deterioration of CMBS underlying assets.",
                  "Pimco: disclosed hundreds of millions in losses from funds holding office CMBS in 2023, notably related to the $1.7B Columbia Property Trust CMBS default.",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: ACCENT }} className="flex-shrink-0 font-bold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CMBS 구조와 위기 전파 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "오피스 CMBS 위기 전파 경로" : "Office CMBS Crisis Contagion Pathway"}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "단계" : "Stage"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "내용" : "Description"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                      {ko ? "영향" : "Impact"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {(ko ? [
                    ["1", "오피스 수요 구조적 하락", "재택근무 정착 → 오피스 점유율 80%로 고착 → 임대 갱신 협상력 약화"],
                    ["2", "NOI(순운영수익) 감소", "공실 증가 + 임대료 인하 → NOI 30~50% 감소 → DSCR(부채상환비율) 하락"],
                    ["3", "자산 가치 하락", "NOI 하락 × Cap Rate 상승(금리 인상) → 이중 타격으로 자산 가치 40~60% 하락"],
                    ["4", "CMBS 만기 도래 & 리파이낸싱 불가", "주요 CMBS 만기 → 낮아진 자산 가치로 리파이낸싱 불가 → 디폴트 선언"],
                    ["5", "Junior 트랑쉐 손실 시작", "특별 서비스 개입 → 자산 매각 → 아래 트랑쉐부터 손실 흡수"],
                    ["6", "시장 파급 효과", "오피스 CMBS 가격 하락 → 보험사·연기금 평가손실 → CRE 대출 기준 강화"],
                  ] : [
                    ["1", "Structural office demand decline", "Hybrid work permanently settled → 80% office utilization → weakened lease renewal leverage"],
                    ["2", "NOI (net operating income) compression", "Rising vacancy + rent concessions → NOI down 30–50% → DSCR deterioration"],
                    ["3", "Asset value collapse", "Lower NOI × higher cap rates (rate hikes) → double compression pushes values down 40–60%"],
                    ["4", "CMBS maturity hits refinancing wall", "Loan maturity with depressed asset values → refinancing impossible → default"],
                    ["5", "Junior tranche losses begin", "Special servicer takes over → property disposition → losses absorbed bottom-up through tranches"],
                    ["6", "Market spillover", "Office CMBS price declines → mark-to-market losses at insurers and pensions → CRE lending standards tighten"],
                  ]).map(([stage, desc, impact]) => (
                    <tr key={String(stage)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-extrabold text-center" style={{ color: ACCENT }}>{stage}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{desc}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PracticeBox title={ko ? "왜 이것은 '일시적' 위기가 아닌가" : "Why This Is Not a 'Temporary' Crisis"}>
              {ko
                ? <ul className="space-y-2">
                    {[
                      "2008년 금융위기: 신용이 회복되면 부동산도 회복. 수요가 돌아왔다.",
                      "2020년 COVID: 경제가 재개되면 오피스도 돌아온다. 실제로 어느 정도 돌아왔다.",
                      "2023년 오피스 위기: 수요 자체가 영구적으로 바뀌었다. 하이브리드 워크는 일시적 유행이 아니라 S&P500 기업 CEO들이 공식 정책으로 채택한 새로운 표준이다. Class B·C 오피스는 거주·물류 등 용도 전환(Conversion) 없이는 회복이 불가능할 수 있다.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px]">
                        <span style={{ color: ACCENT }} className="flex-shrink-0 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                : <ul className="space-y-2">
                    {[
                      "2008 financial crisis: credit recovers → real estate recovers. Demand came back.",
                      "2020 COVID: economy reopens → offices come back. And they did, partially.",
                      "2023 office crisis: demand itself permanently changed. Hybrid work is not a temporary trend — it is an official policy adopted by S&P 500 CEOs. Class B and C offices may be unrecoverable without conversion to residential, logistics, or other uses.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px]">
                        <span style={{ color: ACCENT }} className="flex-shrink-0 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              케이스 4 — 한국 부동산PF ABS 위기 2022–2024
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-16">
            <CaseHeader
              num="04"
              year="2022–2024"
              title={ko ? "한국 부동산PF ABS 위기" : "Korea Real Estate PF ABS Crisis"}
              subtitle={ko
                ? "레고랜드 한 사태가 130조 시장을 어떻게 얼렸는가 — 한국 독자를 위한 심층 분석"
                : "How one Legoland default froze a ₩130T market — an in-depth analysis"}
              verdict="구조적 위기"
              verdictEn="Structural Crisis"
              isKo={ko}
            />

            {/* 한국 PF ABS 구조 설명 */}
            <div className="rounded-xl border border-purple-200 dark:border-purple-700/50 bg-purple-50/20 dark:bg-purple-900/10 p-5 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-4">
                {ko ? "한국 부동산PF ABS 구조 이해" : "Understanding Korea Real Estate PF ABS Structure"}
              </h3>

              {/* 구조 다이어그램 텍스트 */}
              <div className="grid grid-cols-1 gap-2 mb-4">
                {[
                  {
                    step: "①",
                    label: ko ? "시행사 (Project Developer)" : "Project Developer",
                    desc: ko
                      ? "아파트·주상복합 개발 사업 추진. 토지 매입, 인허가 취득 후 사업비 조달 필요."
                      : "Develops apartment or mixed-use projects. Needs financing after land purchase and permits secured.",
                  },
                  {
                    step: "②",
                    label: ko ? "SPC (Special Purpose Company)" : "Special Purpose Company (SPC)",
                    desc: ko
                      ? "시행사가 설립하는 프로젝트 전용 법인. SPC가 ABCP 또는 ABS를 발행하여 자금 조달."
                      : "Project-specific entity created by developer. SPC issues ABCP or ABS to raise funds.",
                  },
                  {
                    step: "③",
                    label: ko ? "증권사 신용보강" : "Securities Firm Credit Enhancement",
                    desc: ko
                      ? "증권사가 ABCP에 대해 매입확약(Put-back) 또는 지급보증 제공. 이 신용보강이 ABCP를 A1~A2 등급으로 유지하는 핵심."
                      : "Securities firms provide purchase commitments (put-backs) or payment guarantees on ABCP. This credit enhancement is what maintains A1–A2 ratings.",
                  },
                  {
                    step: "④",
                    label: ko ? "ABCP 투자자 (단기)" : "ABCP Investors (Short-term)",
                    desc: ko
                      ? "MMF, 법인 자금, 개인 투자자 등이 만기 30~90일의 ABCP 매입. 정기적 차환(롤오버)을 통해 장기 PF를 단기로 조달."
                      : "MMFs, corporate cash, individual investors buy 30–90-day ABCP. Repeated rollovers bridge long-term PF with short-term funding.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-700/40"
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full text-white text-[12px] font-extrabold flex items-center justify-center"
                      style={{ background: "#8b5cf6" }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200 mb-0.5">{s.label}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-purple-200 dark:border-purple-700/50 bg-purple-50 dark:bg-purple-900/20 p-3">
                <p className="text-[12px] font-bold text-purple-800 dark:text-purple-200 mb-1">
                  {ko ? "핵심 구조적 취약점" : "Core Structural Vulnerability"}
                </p>
                <p className="text-[12px] text-purple-700 dark:text-purple-300">
                  {ko
                    ? "ABCP 차환 불가 → 증권사 매입확약 발동 → 증권사 단기 부채 급증 → 자본 압박 → 시장 전체 신용경색. 이 연쇄 고리의 약한 고리는 '차환 가능 여부'였으며, 레고랜드 사태는 이 고리를 끊었다."
                    : "ABCP rollover failure → securities firm purchase commitment triggered → rapid short-term debt surge at securities firms → capital pressure → systemic credit freeze. The weakest link was rollover viability, and the Legoland incident broke it."}
                </p>
              </div>
            </div>

            {/* 레고랜드 사태 상세 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "레고랜드 사태 (2022년 9월): 시장 공리의 붕괴" : "Legoland Incident (September 2022): The Collapse of a Market Axiom"}
            </h3>
            <div className="relative pl-5 border-l-2 border-purple-300 dark:border-purple-700/50 space-y-4 mb-6">
              {(ko ? [
                {
                  date: "2022.06~08",
                  title: "레고랜드 개장 지연 & 분양 부진",
                  body: "강원도 춘천 레고랜드 사업 지연 및 테마파크 실적 부진. 강원중도개발공사의 자금 압박 심화. 강원도가 2,050억원 ABCP에 대해 보증을 선 상태.",
                },
                {
                  date: "2022.09.28",
                  title: "강원도 채무 불이행 선언",
                  body: "강원도가 강원중도개발공사 ABCP 2,050억원에 대한 채무보증 이행 거부를 공식 발표. '지방자치단체가 직접 보증한 ABCP를 부도낼 수 있다'는 사실이 시장에 충격.",
                },
                {
                  date: "2022.10",
                  title: "ABCP 시장 경색 — 신용경색 확산",
                  body: "공공기관·지자체 보증 ABCP 전반에 불신 확산. MMF 자금 유출 → ABCP 수요 절벽. 증권사들의 매입확약 발동 우려 → 증권사 주가 급락.",
                },
                {
                  date: "2022.10~11",
                  title: "정부 긴급 대응 — 50조+ 유동성 공급",
                  body: "한국은행: 국채·RP 매입 확대. 기획재정부: 채권시장안정펀드(채안펀드) 20조원 조성. 금융위원회: CP·ABCP 매입 프로그램 가동. 역대급 단기 금융시장 개입.",
                },
                {
                  date: "2022.12~",
                  title: "PF 부실 수면 위로",
                  body: "레고랜드 이후 ABCP 차환 조건 악화 → 부동산PF 대출 잔액 130조원 전반에 대한 우려. 시행사 여러 곳이 ABCP 차환 실패 → 사업 중단·파산 증가.",
                },
              ] : [
                {
                  date: "Jun–Aug 2022",
                  title: "Legoland Delays and Sales Weakness",
                  body: "Legoland Chuncheon opening delays and poor performance. Gangwon Jungdo Development Corp faces financial pressure. Gangwon Province is on the hook for ₩205B in ABCP guarantees.",
                },
                {
                  date: "Sep 28, 2022",
                  title: "Gangwon Province Declares Non-Payment",
                  body: "Gangwon Province officially announces refusal to honor its guarantee on ₩205B in ABCP. The market is shocked: a local government can default on formally guaranteed ABCP.",
                },
                {
                  date: "October 2022",
                  title: "ABCP Market Freeze — Credit Crunch Spreads",
                  body: "Confidence in all public entity-backed ABCP evaporates. MMF outflows → ABCP demand cliff. Fear of purchase commitment triggers → securities firm equities crash.",
                },
                {
                  date: "Oct–Nov 2022",
                  title: "Emergency Government Response — ₩50T+ Liquidity",
                  body: "Bank of Korea: expanded government bond and RP purchases. Ministry of Finance: ₩20T bond market stabilization fund. FSC: CP and ABCP purchase programs activated. Unprecedented short-term market intervention.",
                },
                {
                  date: "Dec 2022 onwards",
                  title: "PF Distress Surfaces Systemically",
                  body: "Post-Legoland ABCP rollover conditions deteriorate → concerns spread across the entire ₩130T PF loan balance. Multiple developers fail ABCP rollovers → project suspensions and bankruptcies multiply.",
                },
              ]).map((step, i) => (
                <div key={i} className="relative">
                  <div
                    className="absolute -left-[21px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-950"
                    style={{ background: "#8b5cf6" }}
                  />
                  <div className="text-[10px] font-bold text-purple-500 dark:text-purple-400 mb-0.5">{step.date}</div>
                  <div className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{step.title}</div>
                  <div className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.body}</div>
                </div>
              ))}
            </div>

            {/* 위기 규모 & 금융당국 대응 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "위기 규모 및 금융당국 대응" : "Crisis Scale and Regulatory Response"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <p className="text-[12px] font-bold text-gray-700 dark:text-gray-200 mb-3">
                  {ko ? "위기 규모 주요 지표" : "Key Scale Indicators"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko ? [
                    "부동산PF 대출 잔액: 약 130조원 (2022년 말 기준)",
                    "ABCP·ABSTB 발행 잔액: 약 40~50조원",
                    "증권사 PF 익스포저: 상위 10개사 합산 약 30조원+",
                    "부동산PF 연체율: 2024년 3.5% (2021년 0.5% 대비 급등)",
                    "부실 PF 사업장: 2024년 기준 수백 개 이상 정리 대상",
                  ] : [
                    "PF loan balance: approximately ₩130T (end-2022)",
                    "ABCP and ABSTB outstanding: approximately ₩40–50T",
                    "Securities firm PF exposure: top 10 firms combined ₩30T+",
                    "PF loan delinquency rate: 3.5% in 2024 (vs 0.5% in 2021)",
                    "Distressed PF projects: hundreds flagged for workout as of 2024",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span style={{ color: "#8b5cf6" }} className="flex-shrink-0 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <p className="text-[12px] font-bold text-gray-700 dark:text-gray-200 mb-3">
                  {ko ? "금융당국 대응 패키지" : "Regulatory Response Package"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko ? [
                    "채권시장안정펀드 20조원: CP·회사채·ABCP 매입으로 유동성 지원",
                    "PF 연착륙 방안: 금융위 주도, 사업성 있는 PF 구분해 정상화 지원",
                    "캠코(자산관리공사) PF 정상화 펀드: 부실 PF 자산 매입·정리",
                    "은행권 충당금 적립 확대: PF 관련 대손충당금 적립 기준 강화",
                    "증권사 건전성 강화: PF 익스포저 대비 자기자본 요건 상향",
                  ] : [
                    "₩20T Bond Market Stabilization Fund: liquidity support through CP, corporate bond, and ABCP purchases",
                    "PF soft-landing program: FSC-led, separating viable from non-viable projects for targeted support",
                    "KAMCO (Korea Asset Management Corp) PF normalization fund: acquires and resolves distressed PF assets",
                    "Bank provisioning expansion: strengthened loan loss reserve requirements for PF-related exposure",
                    "Securities firm soundness standards: higher capital requirements against PF exposure ratios",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 한국 PF vs 미국 CMBS 비교 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "한국 PF ABS vs 미국 CMBS: 구조적 비교" : "Korea PF ABS vs U.S. CMBS: Structural Comparison"}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 w-1/3">
                      {ko ? "항목" : "Category"}
                    </th>
                    <th className="text-left px-3 py-3 font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">
                      {ko ? "한국 부동산PF ABS" : "Korea Real Estate PF ABS"}
                    </th>
                    <th className="text-left px-3 py-3 font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300">
                      {ko ? "미국 CMBS" : "U.S. CMBS"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {(ko ? [
                    ["기초자산", "미완공 개발 프로젝트(PF)", "완공된 임대 수익 부동산"],
                    ["핵심 리스크", "완공 리스크 + 분양률 리스크", "NOI 지속성 + 임차인 리스크"],
                    ["신용보강", "증권사 매입확약·지급보증", "트랑쉐 구조 자체"],
                    ["만기", "단기(30~90일 ABCP, 차환 반복)", "5~10년(중장기 고정 만기)"],
                    ["시장 규모", "130조원+ (2022년 기준 대출 잔액)", "$800B+ (CMBS 발행 잔액)"],
                    ["위기 전파 경로", "증권사 자본 압박 → 시스템 신용경색", "자산 가치 하락 → 기관 손실"],
                    ["감독 체계", "금융위·금감원 중심, 공시 기준 미흡", "SEC 공시, 리스크 리텐션 규제"],
                  ] : [
                    ["Underlying Asset", "Pre-completion development projects (PF)", "Stabilized income-producing properties"],
                    ["Core Risk", "Completion risk + pre-sale absorption risk", "NOI sustainability + tenant risk"],
                    ["Credit Enhancement", "Securities firm purchase/payment guarantees", "Tranching structure itself"],
                    ["Tenor", "Short-term (30–90-day ABCP, repeated rollovers)", "5–10 years (fixed long-term maturity)"],
                    ["Market Size", "₩130T+ (2022 PF loan balance)", "$800B+ (CMBS outstanding)"],
                    ["Crisis Pathway", "Securities firm capital pressure → systemic freeze", "Asset value decline → institutional losses"],
                    ["Oversight", "FSC/FSS-centered, disclosure standards limited", "SEC disclosure, risk retention rules"],
                  ]).map(([cat, kr, us]) => (
                    <tr key={String(cat)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-3 py-3 font-semibold text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50">{cat}</td>
                      <td className="px-3 py-3 text-gray-700 dark:text-gray-300 bg-purple-50/20 dark:bg-purple-900/10">{kr}</td>
                      <td className="px-3 py-3 text-gray-700 dark:text-gray-300 bg-amber-50/20 dark:bg-amber-900/10">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PracticeBox title={ko ? "한국 PF ABS 분석: 증권사 Analyst가 봐야 할 7가지 체크포인트" : "Korea PF ABS Analysis: 7 Checkpoints for Securities Analyst"}>
              {ko
                ? <ol className="space-y-2">
                    {[
                      "분양률 현황 및 목표: 현재 분양률이 몇 %인가? 손익분기 분양률(BEP) 대비 여유는 얼마인가?",
                      "잔여 공사비 & 시공사 등급: 공사비가 얼마나 남았는가? 시공사 신용등급은 A- 이상인가? (시공사 부실 시 공사 중단 리스크)",
                      "증권사 신용보강의 성격: 매입확약인가 지급보증인가? 증권사의 PF 익스포저 총액 대비 자기자본 비율은?",
                      "차환 리스크: 다음 ABCP 만기까지 일수는? 시장 여건이 악화될 경우 차환 실패 가능성은?",
                      "대출 조건: LTV(담보인정비율), DSCR(부채상환비율), ICR(이자보상비율) 현황",
                      "분양 시장 환경: 해당 지역 미분양 현황, 인근 경쟁 단지, 주택 가격 추세",
                      "정책 리스크: DSR 규제, 주택담보대출 규제, 인허가 조건 변경 가능성",
                    ].map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px]">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-extrabold text-white flex items-center justify-center"
                          style={{ background: "#8b5cf6" }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-amber-900 dark:text-amber-200">{q}</span>
                      </li>
                    ))}
                  </ol>
                : <ol className="space-y-2">
                    {[
                      "Pre-sale absorption rate: Current vs. break-even absorption rate (BEP) — how much cushion remains?",
                      "Remaining construction cost and contractor rating: How much cost remains? Is the contractor rated A- or above? (Contractor failure = construction suspension risk)",
                      "Nature of credit enhancement: Purchase commitment vs. payment guarantee? Securities firm total PF exposure as a percentage of equity capital?",
                      "Rollover risk: Days until next ABCP maturity? Probability of rollover failure under adverse market conditions?",
                      "Loan conditions: Current LTV, DSCR, ICR levels",
                      "Pre-sale market environment: Local unsold inventory, competing nearby projects, housing price trends",
                      "Policy risk: DSR regulations, mortgage lending rules, potential changes to permit conditions",
                    ].map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px]">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-extrabold text-white flex items-center justify-center"
                          style={{ background: "#8b5cf6" }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-amber-900 dark:text-amber-200">{q}</span>
                      </li>
                    ))}
                  </ol>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 — 4가지 케이스 통합 교훈
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "4가지 케이스를 관통하는 통합 교훈" : "Unified Lessons Across All Four Cases"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "구조화금융이 버티는 경우와 무너지는 경우를 구분하는 3가지 핵심 변수."
                : "The three decisive variables that separate structured finance that holds from structured finance that fails."}
            </p>

            <div className="space-y-4 mb-8">
              {(ko ? [
                {
                  num: "A",
                  color: "#22c55e",
                  title: "기초자산의 실질 품질 — 트랑쉐 구조는 마법이 아니다",
                  body: "2008년 CDO: 서브프라임 모기지(NINJA 대출) → 기초자산 자체가 부실. 트랑쉐가 아무리 정교해도 담긴 자산이 부실하면 전체가 무너진다. 2020년 CLO: 담보 있는 기업 레버리지드론 → 기초자산이 상대적으로 건전. 같은 트랑쉐 구조가 작동했다. 교훈: 구조화 상품에 투자하기 전 '기초자산이 무엇인가, 실제로 상환 가능한가'를 반드시 검증하라.",
                  cases: ko ? ["2008 RMBS (실패)", "2020 CLO (성공)"] : ["2008 RMBS (Fail)", "2020 CLO (Survived)"],
                },
                {
                  num: "B",
                  color: ACCENT,
                  title: "상관관계 가정 — 스트레스 시나리오에서 모두 동시에 무너지는가",
                  body: "2008년: '전국 주택가격은 동시에 하락하지 않는다' → 실제로 동시에 하락했다. 상관관계=1 시나리오를 모델에서 제거했을 때 결과가 완전히 달라진다. 2023년 오피스: 오피스 전반의 공실률이 동시에 상승 → 지역별 분산이 실효성을 잃었다. 반면 CLO의 기업 포트폴리오는 업종별 충격이 달라 분산 효과가 실현됐다.",
                  cases: ko ? ["2008 CDO (상관관계=1 오류)", "2020 CLO (분산 효과 실현)"] : ["2008 CDO (Correlation=1 error)", "2020 CLO (Diversification worked)"],
                },
                {
                  num: "C",
                  color: "#8b5cf6",
                  title: "인센티브 구조 & 정보 비대칭 — 발행자·투자자·평가사의 이해가 일치하는가",
                  body: "2008년: 모기지 발행사는 팔면 끝(OTD), 신용평가사는 발행사에게서 수수료 수취, 투자자는 기초자산 모름. 한국 PF: 시행사·증권사·ABCP 투자자 모두 '차환이 계속 될 것'이라는 낙관에 기대어 실질 리스크 미인식. 레고랜드 사태 이후에야 리스크를 인식. 정보 비대칭과 인센티브 왜곡이 실현될 때 구조화 상품은 급격히 무너진다.",
                  cases: ko ? ["2008 RMBS/CDO", "한국 PF ABS"] : ["2008 RMBS/CDO", "Korea PF ABS"],
                },
              ] : [
                {
                  num: "A",
                  color: "#22c55e",
                  title: "Underlying Asset Quality — Tranching is Not Magic",
                  body: "2008 CDO: subprime mortgages (NINJA loans) → underlying assets were already impaired. No matter how sophisticated the tranche structure, bad underlying assets destroy everything. 2020 CLO: collateralized corporate leveraged loans → relatively sound underlying assets. The same tranche structure worked. Lesson: before investing in any structured product, verify 'what is inside, and can it actually repay?'",
                  cases: ["2008 RMBS (Fail)", "2020 CLO (Survived)"],
                },
                {
                  num: "B",
                  color: ACCENT,
                  title: "Correlation Assumptions — Do All Assets Fail Simultaneously Under Stress?",
                  body: "2008: 'Nationwide home prices cannot fall simultaneously' → they did. Removing the correlation=1 scenario from the model changed everything. 2023 office: office vacancy rising simultaneously across markets → regional diversification became ineffective. CLO corporate portfolios, by contrast, experienced differentiated sector shocks, making diversification real.",
                  cases: ["2008 CDO (Correlation=1 error)", "2020 CLO (Diversification worked)"],
                },
                {
                  num: "C",
                  color: "#8b5cf6",
                  title: "Incentive Alignment & Information Asymmetry — Do Issuers, Investors, and Raters Share the Same Interest?",
                  body: "2008: mortgage originators sold-and-forgot (OTD), rating agencies were paid by issuers, investors had no visibility into the underlying pool. Korea PF: developers, securities firms, and ABCP investors all relied on the assumption that rollovers would continue indefinitely — nobody priced the real risk until Legoland broke the axiom. When information asymmetry and incentive misalignment materialize together, structured products collapse rapidly.",
                  cases: ["2008 RMBS/CDO", "Korea PF ABS"],
                },
              ]).map((l) => (
                <motion.div
                  key={l.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
                  className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center text-[15px] font-extrabold text-white shadow"
                      style={{ background: l.color }}
                    >
                      {l.num}
                    </span>
                    <div className="flex-1">
                      <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">{l.title}</p>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{l.body}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {l.cases.map((c) => (
                          <span
                            key={c}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                            style={{ background: l.color }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 케이스별 결과 요약 표 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    {[
                      ko ? "케이스" : "Case",
                      ko ? "기초자산 품질" : "Asset Quality",
                      ko ? "상관관계 가정" : "Correlation",
                      ko ? "인센티브 정렬" : "Incentive Alignment",
                      ko ? "결과" : "Outcome",
                    ].map((h) => (
                      <th key={h} className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {(ko ? [
                    ["2008 RMBS/CDO",    "❌ 불량",    "❌ 잘못된 가정",  "❌ 왜곡",     "❌ $2.7T 손실"],
                    ["2020 CLO AAA",     "✅ 건전",    "✅ 분산 실현",    "✅ 리스크보유", "✅ 원금 보전"],
                    ["2023 오피스 CMBS", "⚠️ 약화",    "⚠️ 동반 악화",   "⚠️ 부분 정렬", "⚠️ 진행 중"],
                    ["한국 PF ABS",      "⚠️ 완공前",  "❌ 롤오버 의존",  "❌ 정보 비대칭", "❌ 시스템 위기"],
                  ] : [
                    ["2008 RMBS/CDO",    "❌ Poor",     "❌ Wrong assumptions",  "❌ Misaligned",     "❌ $2.7T loss"],
                    ["2020 CLO AAA",     "✅ Sound",    "✅ Diversification held","✅ Risk retained",   "✅ Principal preserved"],
                    ["2023 Office CMBS", "⚠️ Weakened", "⚠️ Co-deteriorating",   "⚠️ Partial",        "⚠️ Ongoing"],
                    ["Korea PF ABS",     "⚠️ Pre-compl","❌ Rollover-dependent",  "❌ Info asymmetry", "❌ Systemic crisis"],
                  ]).map(([name, asset, corr, inc, result]) => (
                    <tr key={String(name)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-3 py-3 font-semibold text-gray-700 dark:text-gray-300">{name}</td>
                      <td className="px-3 py-3 text-gray-600 dark:text-gray-400">{asset}</td>
                      <td className="px-3 py-3 text-gray-600 dark:text-gray-400">{corr}</td>
                      <td className="px-3 py-3 text-gray-600 dark:text-gray-400">{inc}</td>
                      <td className="px-3 py-3 font-bold text-gray-700 dark:text-gray-200">{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                {ko ? "구조화금융 101 시리즈" : "Structured Finance 101 Series"}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {STRUCTURED_SERIES.map((ch) => {
                const active = ch.slug === THIS_CH;
                return (
                  <Link key={ch.slug} href={`${ko ? "/market-101" : "/en/market-101"}/${ch.slug}`}>
                    <div
                      className={`group flex items-center gap-3 p-4 rounded-xl border transition-all bg-white dark:bg-gray-900 ${
                        active
                          ? "border-amber-300 dark:border-amber-700 shadow-sm"
                          : "border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-sm"
                      }`}
                    >
                      <span
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0"
                        style={{ background: active ? ACCENT : "#9ca3af" }}
                      >
                        {ch.title(ko).split(" ")[0]}
                      </span>
                      <span
                        className={`text-[13px] font-semibold transition-colors ${
                          active
                            ? "text-amber-700 dark:text-amber-300"
                            : "text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-300"
                        }`}
                      >
                        {ch.title(ko).split(" ").slice(1).join(" ")}
                      </span>
                      {!active && (
                        <span
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: ACCENT }}
                        >
                          →
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* ── 참고 자료 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "참고 자료" : "References"}
            </h2>
            <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              {[
                "Financial Crisis Inquiry Commission (2011). The Financial Crisis Inquiry Report. U.S. Government Publishing Office.",
                "IMF (2008). Global Financial Stability Report: Containing Systemic Risks and Restoring Financial Soundness.",
                "JP Morgan CLO Research (2020). CLO Performance During COVID-19: Tranching Holds the Line.",
                "S&P Global Ratings (2021). CLO Ratings Performance: COVID Stress Test Results.",
                "Moody's Investors Service (2021). Annual Structured Finance Default Study.",
                "Trepp (2024). U.S. Office CMBS Delinquency Report: Q1 2024.",
                "Brookfield Asset Management (2023). DTLA Fund Investor Communications.",
                "금융위원회 (2022). 부동산 PF 시장 안정화 방안 발표 자료.",
                "한국은행 (2023). 금융안정보고서: 부동산 PF 관련 리스크 평가.",
                "강원도·감사원 (2023). 레고랜드 사태 관련 감사 결과 보고서.",
                "BIS (2023). Structured Finance and Financial Stability: Lessons from Recent Stress Events.",
              ].map((ref, i) => (
                <li key={i}>[{i + 1}] {ref}</li>
              ))}
            </ol>
          </motion.section>

          <ShareButtons
            title={ko ? concept.title : (concept.titleEn ?? concept.title)}
            variant="mid"
            lang={lang}
          />

        </div>
      </main>
      <Footer />
    </>
  );
}
