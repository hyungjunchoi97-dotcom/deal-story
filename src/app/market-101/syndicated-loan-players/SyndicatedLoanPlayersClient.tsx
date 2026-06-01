"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, PieChart, Pie, Legend,
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
const THIS_CH = "syndicated-loan-players";
const SYNDLOAN_SERIES = [
  { slug: "syndicated-loan-overview", ch: "Ch.0", title: "왜 은행들은 뭉치는가",       titleEn: "Why Banks Pool Together" },
  { slug: "syndicated-loan-players",  ch: "Ch.1", title: "플레이어와 수익구조",         titleEn: "Players & Economics" },
  { slug: "syndicated-loan-process",  ch: "Ch.2", title: "딜 프로세스 실무",            titleEn: "Deal Process in Practice" },
  { slug: "syndicated-loan-docs",     ch: "Ch.3", title: "문서와 코버넌트",             titleEn: "Documentation & Covenants" },
  { slug: "syndicated-loan-cases",    ch: "Ch.4", title: "케이스스터디: 성공 vs 실패",  titleEn: "Case Studies: Win vs Fail" },
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
    <div
      className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5"
      style={{ borderColor: "#f59e0b" }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// ── 실무 박스 컴포넌트 ───────────────────────────────────────────────────────
function PracticeBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-cyan-200 dark:border-cyan-700/50 bg-cyan-50/60 dark:bg-cyan-900/15 p-5">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: ACCENT }}
        >
          실무
        </span>
        <span className="text-[13px] font-bold text-cyan-800 dark:text-cyan-200">{title}</span>
      </div>
      <div className="text-[13px] text-cyan-900 dark:text-cyan-200 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// ── 커스텀 툴팁 ──────────────────────────────────────────────────────────────
function ChartTooltip({
  active,
  payload,
  label,
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
// $1B 딜 기준 수수료 구조 (Fee Waterfall)
const FEE_WATERFALL_DATA = [
  { name: "MLA\nArr. Fee", value: 10, color: ACCENT },
  { name: "MLA\nUW Fee", value: 5, color: "#0891b2" },
  { name: "Participant\nUpfront", value: 8, color: "#67e8f9" },
  { name: "Agency Fee\n(yr, $M)", value: 0.3, color: "#a5f3fc" },
  { name: "Commitment\nFee (yr)", value: 2, color: "#cffafe" },
];

// 기관 투자자 믹스 (레버리지드론 기준)
const INVESTOR_MIX_DATA = [
  { name: "CLO Managers", value: 65, color: ACCENT },
  { name: "Banks / Funds", value: 15, color: "#0891b2" },
  { name: "Hedge Funds", value: 10, color: "#f59e0b" },
  { name: "Insurance / Pension", value: 7, color: "#8b5cf6" },
  { name: "Others", value: 3, color: "#d1d5db" },
];

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "MLA 수수료(Arrangement Fee)는 외부에 공개되나요?",
    a: "아닙니다. Arrangement Fee는 Fee Letter에 기재되며, 이 문서는 MLA와 차주 간의 기밀 계약입니다. 신디케이티드론은 공개 시장 상품이 아니기 때문에 수수료 공시 의무가 없습니다. 다만 Thomson Reuters LPC, Bloomberg, Refinitiv 같은 데이터 제공업체가 업계 관계자로부터 수집한 추정치를 제공하며, 이를 통해 시장 관행을 파악할 수 있습니다. 참여은행들도 실제 자신들이 받은 Upfront Fee만 알고, MLA가 얼마를 챙겼는지는 모릅니다.",
  },
  {
    q: "CLO가 레버리지드론 시장의 60~70%를 차지하는 게 시스템 리스크 아닌가요?",
    a: "이 우려는 타당합니다. CLO의 높은 집중도는 두 가지 리스크를 만듭니다. 첫째, 경기 침체 시 CLO의 새 발행이 멈추면 레버리지드론 신규 수요가 급감해 스프레드가 급등합니다(2020년 코로나 당시 일시 목격). 둘째, CLO 구조상 OC(과담보) 테스트가 깨지면 강제 매도가 연쇄 발생할 수 있습니다. 그러나 실제로는 CLO가 레버리지드론을 만기 보유(buy-and-hold)하는 경향이 강해, 단기 매매 압력이 헤지펀드보다 작습니다. 규제 당국은 이 문제를 주목하고 있으며, Fed와 BIS 모두 CLO 집중 리스크를 정기 보고서에서 다룹니다.",
  },
  {
    q: "에이전트 은행을 만기 중에 교체할 수 있나요?",
    a: "가능하지만 쉽지 않습니다. Facility Agreement에는 대개 'Agent Resignation / Replacement' 조항이 있습니다. 에이전트가 스스로 사임할 수 있고, 대출단의 다수결(Majority Lenders, 보통 66.7% 이상)로 에이전트를 교체할 수도 있습니다. 실무적으로는 에이전트가 책임을 부당하게 방기하거나, 에이전트 은행 자체가 재무 위기에 처했을 때 교체가 논의됩니다. 교체 절차에는 수개월이 걸리며, 새 에이전트가 기존 시스템·문서를 인수하는 작업이 필요합니다.",
  },
  {
    q: "IG론에도 CLO가 투자하나요?",
    a: "거의 하지 않습니다. CLO의 구조상 투자 대상은 대부분 BB 이하, 변동금리, 담보부(Secured) 론으로 제한됩니다. CLO 트랜치 구조가 높은 레버리지와 분산 투자를 통해 수익을 낸다는 특성상, IG론의 낮은 스프레드(50~150bp)로는 CLO 자체의 자금 조달 비용(AAA 트랜치 이자)도 커버하기 어렵습니다. IG론에는 주로 상업은행(관계 자본), 보험사(매칭 투자), 연기금이 참여합니다.",
  },
  {
    q: "소형 딜($50M 이하)에서 에이전트 역할은 누가 담당하나요?",
    a: "소형 딜에서는 MLA가 에이전트를 겸임하는 경우가 대부분입니다. 수수료 규모가 크지 않아 별도 행정 전문 은행을 고용할 경제성이 없기 때문입니다. 딜 규모가 $50M~$200M인 중형 딜에서도 MLA가 에이전트를 겸하는 경우가 흔합니다. $500M 이상의 대형 딜에서는 에이전트 역할을 별도로 분리하거나, 대형 행정 전문 은행(예: Deutsche Bank, Citibank의 Agency & Trust 부서)이 맡는 경향이 있습니다.",
  },
];

const FAQ_EN = [
  {
    q: "Is the MLA's Arrangement Fee publicly disclosed?",
    a: "No. The Arrangement Fee is recorded in the Fee Letter, which is a confidential agreement between the MLA and the borrower. Syndicated loans are private credit products with no public disclosure requirements. Data providers like LSEG LPC, Bloomberg, and Refinitiv publish market estimates gathered from industry sources, which give practitioners a directional sense of market norms. Even participant banks only know the Upfront Fee they receive — they have no visibility into the MLA's total take.",
  },
  {
    q: "Doesn't CLO's 60–70% dominance of the leveraged loan market create systemic risk?",
    a: "This concern is legitimate. The high CLO concentration creates two risks. First, if new CLO issuance freezes during a recession, leveraged loan demand collapses and spreads spike (briefly observed during Covid-19 in 2020). Second, if OC (overcollateralization) tests break within CLO structures, forced selling can cascade. In practice, however, CLOs tend to be buy-and-hold investors with less short-term selling pressure than hedge funds. Regulators are aware — both the Fed and BIS regularly address CLO concentration risk in their financial stability reports.",
  },
  {
    q: "Can the agent bank be replaced mid-facility?",
    a: "Yes, but it isn't easy. Facility Agreements typically include Agent Resignation / Replacement provisions. The agent may resign voluntarily, or Majority Lenders (usually 66.7%+ by commitment) can vote to replace the agent. In practice, replacement is discussed when the agent grossly neglects duties or faces its own financial distress. The process takes several months and requires the incoming agent to take over all systems, records, and documentation from the outgoing one.",
  },
  {
    q: "Do CLOs invest in IG loans?",
    a: "Rarely. CLO investment mandates are typically restricted to sub-investment grade (BB or below), floating rate, secured loans. Given the CLO's levered-return model — using AAA tranche funding to amplify spread income — the 50–150bp spreads on IG loans are insufficient to cover CLO's own cost of funding. IG loans instead attract commercial banks (relationship capital deployment), insurance companies (asset-liability matching), and pension funds.",
  },
  {
    q: "Who handles the agent role in small deals (under $50M)?",
    a: "In small deals, the MLA almost always doubles as the agent. The deal economics don't support hiring a separate administrative bank when total fees are modest. In mid-size deals ($50M–$200M), the MLA-as-agent arrangement is also common. Only for larger deals ($500M+) do banks tend to separate the agent role — either assigning it internally to a dedicated Agency & Trust division (Deutsche Bank, Citibank) or sourcing a specialist bank to manage ongoing administration.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function SyndicatedLoanPlayersClient({ concept, lang }: Props) {
  const ko = lang === "ko";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 py-10">

          {/* ── 브레드크럼 ── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
          >
            <Link href={ko ? "/" : "/en"} className="hover:text-cyan-600 transition-colors">
              {ko ? "홈" : "Home"}
            </Link>
            <span>›</span>
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="hover:text-cyan-600 transition-colors"
            >
              {ko ? "마켓 101" : "Market 101"}
            </Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              {ko ? "신디케이티드론" : "Syndicated Loans"}
            </span>
          </motion.div>

          {/* ── 헤더 ── */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: ACCENT }}
              >
                DCM
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Ch.1 / 5
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-3">
              {ko ? concept.title : concept.titleEn}
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko ? concept.excerpt : concept.excerptEn}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-700/40"
                >
                  {t}
                </span>
              ))}
            </div>
            <ShareButtons title={ko ? concept.title : (concept.titleEn || concept.title)} lang={lang} />
          </motion.div>

          {/* ── 챕터 네비게이션 ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mt-8">
            <ChapterNav ko={ko} />
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 1 — 30초 요약
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko
                ? "플레이어 구조와 수익 경제학을 숫자로 먼저 잡아봅니다."
                : "Key numbers that define syndicated loan players and their economics."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                {
                  label: ko ? "신디케이트 참여은행 수" : "Syndicate size",
                  value: "5~200",
                  sub: ko ? "IG 5~15개 / 레버드 50~200" : "IG 5–15 / Lev 50–200",
                },
                {
                  label: ko ? "MLA 수수료" : "MLA fee",
                  value: "0.5~2.5%",
                  sub: ko ? "딜 사이즈 대비" : "of deal size",
                },
                {
                  label: ko ? "에이전트 연간 수수료" : "Agent annual fee",
                  value: "$100K~500K",
                  sub: ko ? "딜 복잡성에 따라" : "by complexity",
                },
                {
                  label: ko ? "CLO 시장 점유율" : "CLO market share",
                  value: "60~70%",
                  sub: ko ? "레버리지드론 기준" : "of leveraged loans",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center"
                >
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-xl font-extrabold leading-tight" style={{ color: ACCENT }}>
                    {s.value}
                  </p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
              {ko
                ? "신디케이티드론 한 건은 단순한 대출 계약이 아닙니다. MLA(주선은행), 에이전트 은행, 참여은행, 그리고 CLO·헤지펀드 같은 기관 투자자로 이루어진 하나의 생태계입니다. 각 플레이어는 역할이 다르고 수익 구조도 다릅니다. 이 챕터에서는 각 주체가 무엇을 하고, 어떻게 돈을 버는지, 그리고 Analyst가 실무에서 이 구조를 어떻게 다루는지를 정밀하게 해부합니다."
                : "A single syndicated loan isn't just a credit agreement — it's an ecosystem of MLAs, agent banks, participant lenders, and institutional investors like CLOs and hedge funds. Each player has a distinct role and a distinct economics. This chapter dissects what each party does, how they earn, and how analysts navigate this structure in practice."}
            </p>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 2 — MLA: 오케스트라 지휘자
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "MLA: 오케스트라 지휘자" : "MLA: The Orchestra Conductor"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {ko
                ? "Mandated Lead Arranger는 딜 전체를 구조화하고 실행하며 배분까지 책임지는 핵심 플레이어입니다."
                : "The Mandated Lead Arranger is the party responsible for structuring, executing, and distributing the entire deal."}
            </p>

            <AnalogyBox>
              <strong>
                {ko ? "신디케이트는 오케스트라다" : "The Syndicate is an Orchestra"}
              </strong>
              <br />
              <br />
              {ko ? (
                <>
                  MLA는 <strong>지휘자</strong>입니다. 전체 연주를 조율하며 가장 많은 보수를 받습니다.
                  북러너(Bookrunner)는 <strong>콘서트마스터</strong> — 북빌드를 실질적으로 이끄는 수석 연주자입니다.
                  참여은행들은 <strong>섹션 연주자들</strong> — 각자 파트를 맡아 전체 사운드를 완성합니다.
                  <br />
                  <br />
                  지휘자 없이 100명의 연주자가 무대에 선다면? 각자 다른 박자로 연주해 소음만 납니다.
                  MLA가 없으면 차주는 100개 은행과 각각 협상해야 하고, 조건은 은행마다 다르며 프로세스는 몇 년이 걸립니다.
                  MLA가 '단일 창구'를 만들어주기 때문에 시장이 작동합니다.
                </>
              ) : (
                <>
                  The MLA is the <strong>conductor</strong> — coordinates the whole performance, earns the most.
                  The Bookrunner is the <strong>concertmaster</strong> — the lead player who actually runs the bookbuild.
                  Participant banks are the <strong>section musicians</strong> — each plays their part to complete the sound.
                  <br />
                  <br />
                  What happens if 100 musicians take the stage without a conductor? Noise.
                  Without an MLA, the borrower would negotiate with 100 banks separately, getting different terms from each, with the process taking years.
                  The MLA creates the single counterparty that makes the market function.
                </>
              )}
            </AnalogyBox>

            {/* MLA 역할 계층 */}
            <div className="mt-6 mb-5">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-3">
                {ko ? "역할 계층: MLA 내부 구조" : "Role Hierarchy: Inside the MLA"}
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                      <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300">
                        {ko ? "타이틀" : "Title"}
                      </th>
                      <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300">
                        {ko ? "핵심 역할" : "Core Role"}
                      </th>
                      <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300">
                        {ko ? "수수료 위치" : "Fee Position"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      {
                        title: "Mandated Lead Arranger (MLA)",
                        role: ko ? "딜 전체 구조화·실행·책임. 언더라이트 여부 결정" : "Full deal structuring, execution, accountability. Decides underwrite",
                        fee: ko ? "Arrangement Fee (전액 또는 대부분)" : "Full Arrangement Fee (or majority)",
                      },
                      {
                        title: "Bookrunner",
                        role: ko ? "북빌딩 실무 담당. 참여은행 수요 취합·가격 결정" : "Runs the bookbuild. Aggregates lender demand, sets final pricing",
                        fee: ko ? "MLA에 포함 or 별도 Bookrunner Fee" : "Included in MLA or separate Bookrunner Fee",
                      },
                      {
                        title: "Lead Arranger",
                        role: ko ? "대규모 Commitment. 북빌드 참여, 렌더 미팅 공동 주관" : "Large commitment. Joint bookbuild, co-hosts lender meetings",
                        fee: ko ? "Co-Arranger Upfront Fee (1.00~1.50%)" : "Co-Arranger Upfront Fee (1.00–1.50%)",
                      },
                      {
                        title: "Co-Arranger",
                        role: ko ? "중간 규모 Commitment. 투자자 소개, 딜 지지" : "Mid-size commitment. Introduces investors, supports deal",
                        fee: ko ? "Upfront Fee (0.75~1.00%)" : "Upfront Fee (0.75–1.00%)",
                      },
                    ].map((row) => (
                      <tr
                        key={row.title}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                      >
                        <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">
                          {row.title}
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.role}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 font-mono text-[11px]">
                          {row.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MLA 수익 구조 */}
            <div className="grid gap-3 sm:grid-cols-3 mb-5">
              {[
                {
                  icon: "💰",
                  name: "Arrangement Fee",
                  detail: ko
                    ? "딜 사이즈의 0.5~2.5%. 언더라이트형 레버리지드 딜은 2% 이상도 가능. 전통적으로 딜 클로징 시 일시 수취."
                    : "0.5–2.5% of deal size. Underwritten leveraged deals can exceed 2%. Typically received as a lump sum at deal closing.",
                },
                {
                  icon: "🔐",
                  name: "Underwriting Fee",
                  detail: ko
                    ? "언더라이트 약정에 대한 추가 보상. 시장 리스크를 MLA가 짊어지는 대가. 베스트에포트에는 없음."
                    : "Additional compensation for the underwrite commitment. Compensates MLA for taking on market risk. Not charged for best-efforts deals.",
                },
                {
                  icon: "📋",
                  name: "Front-end Fee",
                  detail: ko
                    ? "총 Front-end Fee에서 참여은행들에게 Upfront Fee를 배분한 후 MLA가 보유하는 금액. 실질적 MLA 마진."
                    : "The portion of total front-end fees that the MLA retains after allocating Upfront Fees to participant banks. The MLA's true margin.",
                },
              ].map((f) => (
                <div
                  key={f.name}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4"
                >
                  <span className="text-xl mb-2 block">{f.icon}</span>
                  <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">
                    {f.name}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="p-4 rounded-xl border text-[12px] leading-relaxed text-gray-600 dark:text-gray-400 mb-4"
              style={{
                borderColor: ACCENT_LIGHT,
                background: ACCENT_LIGHT,
              }}
            >
              <strong className="text-gray-800 dark:text-gray-200">
                {ko ? "Fee Letter의 핵심 3요소" : "3 Key Elements of the Fee Letter"}
              </strong>
              <br />
              {ko ? (
                <>
                  ① <strong>수수료 구조</strong> — Arrangement Fee·Underwriting Fee·Upfront Fee 금액과 지급 시점
                  <br />
                  ② <strong>Market Flex 조항</strong> — 북빌딩 중 시장 반응에 따라 스프레드·OID·구조를 조정할 수 있는 MLA의 권한. 예: "시장이 받아주지 않으면 스프레드를 최대 +100bp, OID를 최대 +200bp 올릴 수 있다"
                  <br />
                  ③ <strong>비밀유지 조항</strong> — Fee Letter 내용은 차주와 MLA 간 기밀. 참여은행에도 공개 안 됨
                </>
              ) : (
                <>
                  ① <strong>Fee structure</strong> — Arrangement, Underwriting, and Upfront Fee amounts and payment timing
                  <br />
                  ② <strong>Market Flex clause</strong> — MLA's right to adjust spread, OID, or structure based on bookbuild response. Example: "MLA may increase spread by up to +100bp and OID by up to +200bp if market demand is insufficient"
                  <br />
                  ③ <strong>Confidentiality clause</strong> — Fee Letter contents are confidential between borrower and MLA. Not shared with participant banks
                </>
              )}
            </div>

            <PracticeBox
              title={
                ko
                  ? "Analyst 첫째날 밤 — Fee Model 만들기"
                  : "Analyst Day One Night — Building the Fee Model"
              }
            >
              {ko ? (
                <>
                  딜 사이즈 <strong>$1B</strong> 기준 수수료 모델 예시:
                  <br />
                  <br />
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px] border-collapse">
                      <thead>
                        <tr className="border-b border-cyan-200 dark:border-cyan-800">
                          <th className="text-left py-1.5 pr-4 font-bold">수수료 항목</th>
                          <th className="text-right py-1.5 pr-4 font-bold">요율</th>
                          <th className="text-right py-1.5 font-bold">금액</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cyan-100 dark:divide-cyan-900">
                        {[
                          ["MLA Arrangement Fee", "1.50%", "$15M"],
                          ["Underwriting Fee (MLA)", "0.50%", "$5M"],
                          ["Co-Arranger Upfront (배분 후 잔여 MLA 보유)", "0.50%", "$5M"],
                          ["Participant Upfront (Tier2 기준)", "0.50%", "$5M (배분)"],
                          ["Agency Fee (연간)", "고정", "$300K/년"],
                          ["Commitment Fee (미인출분 연간)", "0.20%", "~$2M/년"],
                        ].map(([item, rate, amt]) => (
                          <tr key={String(item)}>
                            <td className="py-1.5 pr-4">{item}</td>
                            <td className="text-right py-1.5 pr-4 font-mono">{rate}</td>
                            <td className="text-right py-1.5 font-mono font-bold">{amt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br />
                  실무 팁: Analyst는 Excel에서 수수료 모델을 먼저 만들고, MD와의 피칭 전에 "이 딜의 총 수수료 풀이 얼마인가"를 파악해야 합니다. Fee 구조가 차주에게 매력적인가도 함께 체크합니다.
                </>
              ) : (
                <>
                  Sample fee model for a <strong>$1B</strong> deal:
                  <br />
                  <br />
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px] border-collapse">
                      <thead>
                        <tr className="border-b border-cyan-200 dark:border-cyan-800">
                          <th className="text-left py-1.5 pr-4 font-bold">Fee Item</th>
                          <th className="text-right py-1.5 pr-4 font-bold">Rate</th>
                          <th className="text-right py-1.5 font-bold">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cyan-100 dark:divide-cyan-900">
                        {[
                          ["MLA Arrangement Fee", "1.50%", "$15M"],
                          ["Underwriting Fee (MLA)", "0.50%", "$5M"],
                          ["Co-Arranger Upfront (MLA residual after allocation)", "0.50%", "$5M"],
                          ["Participant Upfront (Tier 2 rate)", "0.50%", "$5M (distributed)"],
                          ["Agency Fee (annual)", "Fixed", "$300K/yr"],
                          ["Commitment Fee (undrawn, annual)", "0.20%", "~$2M/yr"],
                        ].map(([item, rate, amt]) => (
                          <tr key={String(item)}>
                            <td className="py-1.5 pr-4">{item}</td>
                            <td className="text-right py-1.5 pr-4 font-mono">{rate}</td>
                            <td className="text-right py-1.5 font-mono font-bold">{amt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br />
                  Practical tip: Analysts build the fee model in Excel first, and before any MD pitch session they must know "what is the total fee pool on this deal?" Also check whether the fee structure is attractive from the borrower's perspective.
                </>
              )}
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 3 — 에이전트 은행: 딜의 집사
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "에이전트 은행: 딜의 집사" : "Agent Bank: The Deal's Butler"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {ko
                ? "신디케이션이 완료된 이후, 딜을 만기까지 운영하는 핵심 행정 허브입니다."
                : "After syndication closes, the agent bank is the administrative hub that operates the deal through to maturity."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "에이전트는 아파트 단지 관리사무소다" : "The Agent is an Apartment Complex Management Office"}</strong>
              <br />
              <br />
              {ko ? (
                <>
                  대형 아파트 단지 분양이 완료됐습니다. 분양사(MLA)는 역할이 끝났습니다.
                  이제 관리사무소(에이전트)가 등장합니다.
                  <br />
                  <br />
                  관리사무소의 일상: <strong>매달 임대료 수금</strong>(이자 납입 처리),{" "}
                  <strong>수리 요청 조율</strong>(Amendment 요청 취합), <strong>긴급 상황 대응</strong>
                  (Default 통지 발송). 분양사는 다음 건물 분양하러 갔고, 관리사무소는 이 건물에서
                  만기까지 계속 일합니다.
                  <br />
                  <br />
                  에이전트 없이는 50개 은행이 각자 차주에게 이자를 청구하고, 각자 다른 Amendment에
                  서명하게 됩니다 — 관리의 무정부 상태입니다.
                </>
              ) : (
                <>
                  The apartment complex has been fully sold. The developer (MLA) is done.
                  Now the management office (agent) steps in.
                  <br />
                  <br />
                  The management office's daily work: <strong>monthly rent collection</strong> (processing
                  interest payments), <strong>coordinating repair requests</strong> (aggregating amendment
                  requests), <strong>emergency response</strong> (sending default notices). The developer moved
                  on to the next project; the management office stays in this building until the lease ends.
                  <br />
                  <br />
                  Without an agent, 50 banks would each bill the borrower for interest separately, each sign
                  different amendments — administrative anarchy.
                </>
              )}
            </AnalogyBox>

            <div className="grid gap-4 sm:grid-cols-2 mt-6 mb-5">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📋</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                    Administrative Agent
                  </h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko
                    ? [
                        "이자 납입 처리: 차주로부터 이자를 받아 각 은행에 지분 비례 배분",
                        "서류 관리: 신용 동의서·준수 증명서(Compliance Certificate) 수신·보관",
                        "정보 배포: 재무제표·코버넌트 계산 등 정기 보고서를 전 참여은행에 배포",
                        "인출 처리: Draw-down 요청 검토 → 자금 집행 조율",
                        "Amendment 취합: 조건 변경 시 참여은행 동의 취합·집계",
                      ]
                    : [
                        "Interest distribution: receives interest from borrower, distributes pro rata to lenders",
                        "Document custody: receives and holds credit consents, compliance certificates",
                        "Information distribution: circulates financial statements and covenant calculations to all lenders",
                        "Drawdown processing: reviews draw requests, coordinates funding",
                        "Amendment coordination: aggregates lender consent for any changes to facility terms",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔒</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                    Collateral / Security Agent
                  </h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko
                    ? [
                        "담보 실물 보관: 주식 질권·부동산 근저당 등 전 참여은행을 대신해 보유",
                        "담보 가치 모니터링: 주기적 평가·보고서 수신",
                        "담보 실행: Default 시 대출단 지시에 따라 담보 강제 집행 개시",
                        "레버리지드론에서 핵심: 1st Lien·2nd Lien·Unsecured 구조 관리",
                        "UCC 등록 관리: 미국 딜의 경우 담보권 등록 유지",
                      ]
                    : [
                        "Holds collateral: pledged shares, mortgages, and other security on behalf of all lenders",
                        "Monitors collateral value: periodic valuations, receives appraisal reports",
                        "Enforcement: initiates collateral enforcement upon default per lender instructions",
                        "Critical in leveraged loans: manages 1st Lien / 2nd Lien / Unsecured structures",
                        "UCC registry: maintains security interest registrations for US deals",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="p-4 rounded-xl border text-[12px] leading-relaxed text-gray-600 dark:text-gray-400 mb-5"
              style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
            >
              <strong className="text-gray-800">
                {ko ? "에이전트 수수료 구조" : "Agent Fee Structure"}
              </strong>
              <br />
              {ko
                ? "연간 고정 수수료 $100K~$500K. 딜 복잡성(트랜치 수·담보 구조·참여은행 수·Amendment 빈도)에 따라 협상됩니다. 단순 IG 회전신용 → $100K. 레버리지드 복잡 딜 → $300K~$500K. 에이전트 수수료는 Facility Agreement에 명시되며, 차주가 매년 지급합니다."
                : "Fixed annual fee of $100K–$500K. Negotiated based on deal complexity: number of tranches, collateral structure, lender count, and amendment frequency. Simple IG revolving credit → $100K. Complex leveraged deal → $300K–$500K. The agency fee is specified in the Facility Agreement and paid annually by the borrower."}
            </div>

            <PracticeBox
              title={
                ko ? "Associate 실무 — 에이전트 운영의 하루" : "Associate Practice — A Day in the Life of the Agent"
              }
            >
              {ko ? (
                <>
                  에이전트 팀 Associate의 전형적인 아침:
                  <br />
                  <br />
                  <strong>08:00</strong> — SOFR 기준금리 확인 (CME Group 발표). 전일 대비 변동 확인.
                  <br />
                  <strong>08:30</strong> — 이자 계산 실행. SOFR + Spread × 잔여 원금 × 실제 일수 / 360.
                  Example: $500M × (5.32% + 3.50%) / 360 × 30일 = $3.68M
                  <br />
                  <strong>09:00</strong> — 이자 계산서(Interest Statement) 차주에게 발송. 납입 계좌·납입 기한·분배 일정 안내.
                  <br />
                  <strong>10:00</strong> — 참여은행들에게 배분 통지(Distribution Notice) 발송. 각 은행의 약정 비율 × 총 이자.
                  <br />
                  <strong>14:00</strong> — 코버넌트 Compliance Certificate 수신 확인 (분기 기준). Leverage 비율·이자보상배율 산정 결과 검토.
                  <br />
                  <br />
                  에이전트 팀은 고객 접점은 없지만, 딜이 살아있는 동안 가장 많은 실제 금융 데이터를 다룹니다.
                </>
              ) : (
                <>
                  A typical morning for an Agent team Associate:
                  <br />
                  <br />
                  <strong>08:00</strong> — Check SOFR benchmark rate (CME Group publication). Note change vs prior day.
                  <br />
                  <strong>08:30</strong> — Run interest calculation. SOFR + Spread × outstanding principal × actual days / 360.
                  Example: $500M × (5.32% + 3.50%) / 360 × 30 days = $3.68M
                  <br />
                  <strong>09:00</strong> — Send Interest Statement to borrower. Provide payment account, due date, distribution schedule.
                  <br />
                  <strong>10:00</strong> — Send Distribution Notice to participant banks. Each bank's commitment share × total interest.
                  <br />
                  <strong>14:00</strong> — Receive quarterly Compliance Certificate. Review leverage ratio and interest coverage calculations.
                  <br />
                  <br />
                  The agent team has no client-facing glamour, but handles more real financial data than any other team while the deal is live.
                </>
              )}
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 4 — 참여은행: 티어별 역할
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "참여은행: 티어별 역할과 수익" : "Participant Banks: Tiers, Roles & Economics"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {ko
                ? "참여은행들은 약정 규모에 따라 계층화된 구조를 가집니다. 더 많이 commit할수록 더 높은 수수료를 받는 인센티브 구조입니다."
                : "Participant banks are organized into a tiered structure based on commitment size. The more you commit, the higher your upfront fee — a classic incentive alignment."}
            </p>

            {/* 티어 테이블 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                    {[
                      ko ? "티어" : "Tier",
                      ko ? "명칭" : "Name",
                      ko ? "약정 규모" : "Commitment",
                      ko ? "Upfront Fee" : "Upfront Fee",
                      ko ? "주요 역할" : "Role",
                    ].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    {
                      tier: "Tier 1",
                      name: "Co-Arranger",
                      commit: "$100M+",
                      fee: "1.25%",
                      role: ko ? "북빌드 참여, 렌더 미팅 주관" : "Bookbuild participation, co-hosts lender meetings",
                      accent: true,
                    },
                    {
                      tier: "Tier 2",
                      name: "Lead Manager",
                      commit: "$50~100M",
                      fee: "1.00%",
                      role: ko ? "투자자 소개, 딜 지지" : "Investor introductions, deal support",
                      accent: false,
                    },
                    {
                      tier: "Tier 3",
                      name: "Manager",
                      commit: "$25~50M",
                      fee: "0.75%",
                      role: ko ? "단순 참여, 관계 유지" : "Plain participation, relationship maintenance",
                      accent: false,
                    },
                    {
                      tier: "Tier 4",
                      name: "Participant",
                      commit: "$10~25M",
                      fee: "0.50%",
                      role: ko ? "수동적 참여, 분산투자 목적" : "Passive participation, diversification",
                      accent: false,
                    },
                  ].map((row) => (
                    <tr
                      key={row.tier}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors ${
                        row.accent ? "bg-cyan-50/30 dark:bg-cyan-900/10" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ background: row.accent ? ACCENT : "#94a3b8" }}
                        >
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">
                        {row.commit}
                      </td>
                      <td
                        className="px-4 py-3 font-mono font-bold"
                        style={{ color: ACCENT }}
                      >
                        {row.fee}
                      </td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mb-5">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {ko ? "참여 결정 요소" : "Participation Decision Factors"}
                </p>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko
                    ? [
                        "차주 신용도 & 섹터: 은행 내부 신용 등급 및 집중도 한도",
                        "기존 관계: 차주와의 거래 관계(FX·파생상품·예금)와의 연계",
                        "자본 제약: 현재 RWA 여유분 및 분기 말 자본 관리 이슈",
                        "부문 집중도: 해당 섹터 익스포져가 이미 한도에 근접했는가",
                        "수익성: 스프레드 + Upfront Fee를 합산한 위험조정수익률(RAROC)",
                      ]
                    : [
                        "Borrower credit quality & sector: internal credit rating and concentration limits",
                        "Existing relationship: linkage to FX, derivatives, and deposit relationships",
                        "Capital constraints: current RWA headroom and quarter-end capital management",
                        "Sector concentration: is the bank already near its sector exposure limit",
                        "Profitability: risk-adjusted return (RAROC) from spread + upfront fee combined",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5 text-[10px]">
                        ▶
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {ko ? "관계 은행 vs 시장성 은행" : "Relationship Banks vs Market Banks"}
                </p>
                <div className="space-y-3 text-[12px] text-gray-600 dark:text-gray-400">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {ko ? "IG론 — 관계 은행 우선" : "IG Loans — Relationship First"}
                    </p>
                    <p>
                      {ko
                        ? "삼성전자·SK하이닉스 같은 대기업은 10~20개의 주거래 은행이 있습니다. 이들은 '관계'를 지키기 위해 낮은 수익에도 참여합니다. 참여 거부 시 다른 사업 기회(FX·트레이드 파이낸스) 손실 위험이 있습니다."
                        : "Large corporates like Samsung or SK have 10–20 core relationship banks. These banks participate even at thin economics to protect the relationship. Declining carries risk of losing ancillary business: FX, trade finance, derivatives."}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {ko ? "레버리지드론 — CLO가 압도적" : "Leveraged Loans — CLO Dominated"}
                    </p>
                    <p>
                      {ko
                        ? "레버리지드론에서 참여 은행의 비중은 낮습니다. CLO 매니저들이 60~70%를 차지하며, 이들은 순수하게 스프레드·OID·다양성(Diversity Score) 기준으로 참여를 결정합니다. 관계가 아닌 숫자 게임입니다."
                        : "In leveraged loans, bank participation is a minority. CLO managers take 60–70%, and they decide purely on spread, OID, and diversity score criteria. It's a numbers game, not a relationship game."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <PracticeBox
              title={ko ? "Analyst — 배분 시트(Allocation Sheet) 관리" : "Analyst — Managing the Allocation Sheet"}
            >
              {ko ? (
                <>
                  Allocation Sheet는 누가 얼마를 약정했는지 추적하는 핵심 문서입니다. 전형적인 구조:
                  <br />
                  <br />
                  <strong>열(Column):</strong> 은행명 | 국가 | 티어 | 약정 금액 | Upfront Fee율 | 수수료 금액 | MLA 배분 후 잔여
                  <br />
                  <strong>행(Row):</strong> 은행별 1줄. 하단에 합계·오버서브 비율·MLA 잔여 보유분 자동 계산.
                  <br />
                  <br />
                  실무 팁: 오버서브 발생 시 어떤 은행을 얼마나 Scaled-back하는지가 민감한 이슈입니다. MLA는 보통 관계를 고려해 소형 은행보다 대형 은행을 우선 배분합니다. Analyst는 이 배분 논리를 MD로부터 받아 시트에 반영해야 합니다.
                </>
              ) : (
                <>
                  The Allocation Sheet tracks who committed how much — a critical deal document. Typical structure:
                  <br />
                  <br />
                  <strong>Columns:</strong> Bank name | Country | Tier | Commitment | Upfront Fee rate | Fee amount | Residual after MLA allocation
                  <br />
                  <strong>Rows:</strong> One row per bank. Footer auto-calculates totals, oversubscription ratio, and MLA retained hold.
                  <br />
                  <br />
                  Practical tip: When oversubscribed, deciding which banks get scaled back is a sensitive issue. MLAs generally prefer to scale back smaller banks first to protect key relationships. Analysts receive the allocation logic from the MD and must hard-code it correctly into the sheet.
                </>
              )}
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 5 — 기관 투자자: CLO가 시장을 지배한다
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "기관 투자자: CLO가 시장을 지배한다" : "Institutional Investors: CLO Dominates the Market"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "레버리지드론 시장의 수요 기반을 이해하는 것은 딜 실행의 핵심입니다. CLO가 왜 60~70%를 차지하는지 구조적 이유를 파악해야 합니다."
                : "Understanding the demand base of the leveraged loan market is central to deal execution. You need to know the structural reasons why CLOs account for 60–70%."}
            </p>

            {/* Pie Chart */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko
                  ? "레버리지드론 투자자 믹스 (2023년 기준)"
                  : "Leveraged Loan Investor Mix (2023)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                Source: LSEG LPC, S&P Global
              </p>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={INVESTOR_MIX_DATA}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                    labelLine={true}
                  >
                    {INVESTOR_MIX_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => [`${Number(v)}%`, ""]} />
                  <Legend
                    wrapperStyle={{ fontSize: 11 }}
                    formatter={(value) => value}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* CLO 설명 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🏗️</span>
                <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">
                  {ko ? "CLO란 무엇인가 — 구조의 마법" : "What is a CLO — The Magic of Structure"}
                </h3>
              </div>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {ko
                  ? "CLO(Collateralized Loan Obligation)는 레버리지드론 포트폴리오를 담보로 발행하는 자산유동화증권(ABS)입니다. CLO 매니저가 100~200개의 레버리지드론을 사서 SPV에 담고, 이를 신용등급별 트랜치로 재포장해 투자자에게 팝니다."
                  : "A CLO (Collateralized Loan Obligation) is an asset-backed security collateralized by a portfolio of leveraged loans. The CLO manager buys 100–200 leveraged loans into an SPV, then repackages them into rated tranches sold to different investors."}
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      {[ko ? "트랜치" : "Tranche", ko ? "신용등급" : "Rating", ko ? "쿠폰" : "Coupon", ko ? "투자자" : "Investor", ko ? "전체 비중" : "Stack %"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-bold text-gray-600 dark:text-gray-300">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      ["AAA", "AAA", "SOFR+140bp", ko ? "은행·보험사" : "Banks, Insurance", "65%"],
                      ["AA", "AA", "SOFR+185bp", ko ? "보험사·연기금" : "Insurance, Pension", "10%"],
                      ["A", "A", "SOFR+230bp", ko ? "크레딧 펀드" : "Credit funds", "7%"],
                      ["BBB", "BBB", "SOFR+340bp", ko ? "헤지펀드" : "Hedge funds", "6%"],
                      ["BB", "BB", "SOFR+600bp", ko ? "고수익 펀드" : "HY funds", "5%"],
                      [ko ? "주식 트랜치" : "Equity", ko ? "비등급" : "Unrated", ko ? "잔여수익" : "Residual", ko ? "CLO 매니저" : "CLO manager", "7%"],
                    ].map(([tranche, rating, coupon, investor, pct]) => (
                      <tr key={String(tranche)} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-3 py-2 font-bold text-gray-800 dark:text-gray-200">{tranche}</td>
                        <td className="px-3 py-2 font-mono text-gray-600 dark:text-gray-400">{rating}</td>
                        <td className="px-3 py-2 font-mono text-gray-600 dark:text-gray-400">{coupon}</td>
                        <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{investor}</td>
                        <td className="px-3 py-2 font-bold" style={{ color: ACCENT }}>{pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-5">
              {[
                {
                  icon: "⚡",
                  title: ko ? "CLO가 60~70%인 이유" : "Why CLOs Are 60–70%",
                  body: ko
                    ? "① 레버리지(3~12×) — 주식 트랜치 7%로 전체 포트폴리오의 수익을 독식\n② 분산투자 — 100개+ 론 → 단일 디폴트 영향 최소화\n③ 투자제한 완화 — CLO 구조상 일반 펀드가 못 사는 론도 매입 가능"
                    : "① Leverage (3–12×) — 7% equity tranche captures entire portfolio return uplift\n② Diversification — 100+ loans minimizes single-name default impact\n③ Fewer restrictions — CLO structure allows buying loans other funds cannot",
                },
                {
                  icon: "🎯",
                  title: ko ? "헤지펀드/크레딧 펀드" : "Hedge & Credit Funds",
                  body: ko
                    ? "단기 매매·고수익 추구 성향. Cov-Lite 선호 (유연한 포트폴리오 관리). 디스트레스 상황에서도 매수 가능 — 2차 시장 유동성 공급자 역할. CLO 대비 변동성 있는 수요."
                    : "Short-term trading and high-yield focus. Prefer Cov-Lite for portfolio flexibility. Buy into distressed situations — key secondary market liquidity provider. Demand more volatile than CLO.",
                },
                {
                  icon: "🏛️",
                  title: ko ? "보험사/연기금" : "Insurance & Pension",
                  body: ko
                    ? "IG론만 투자 (규제 자본 요건). 장기 보유(Buy-and-Hold). 레버리지드론 참여 거의 없음. 안정적 수요원이지만 규모 제한적. 변동금리 선호도가 고정금리보다 낮아 채권과 경쟁 구도."
                    : "IG loans only (regulatory capital requirements). Long-term buy-and-hold. Minimal leveraged loan participation. Stable but limited demand. Less affinity for floating rate vs. fixed bonds.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4"
                >
                  <span className="text-xl mb-2 block">{c.icon}</span>
                  <h3 className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>

            <PracticeBox
              title={ko ? "MD 관점 — CLO 매니저를 만날 때 필요한 3가지" : "MD View — 3 Things You Need When Meeting a CLO Manager"}
            >
              {ko ? (
                <>
                  CLO 매니저는 일반 투자자와 다른 언어를 씁니다. 미팅 전에 반드시 파악해야 할 세 가지:
                  <br />
                  <br />
                  <strong>① Diversity Score 영향:</strong> CLO 투자 기준에는 Moody's Diversity Score 요건이 있습니다. 동일 산업에 집중되면 Score가 하락합니다. "이 딜이 당신 CLO의 Diversity Score를 높여주는가 낮추는가?"를 먼저 물어보세요.
                  <br />
                  <br />
                  <strong>② WARF (Weighted Average Rating Factor):</strong> CLO는 포트폴리오 가중평균 위험도(WARF)를 일정 수준 이하로 유지해야 합니다. CCC 론이 많아지면 WARF 제약에 걸립니다. "당신 CLO의 현재 WARF 여유는 얼마인가?"
                  <br />
                  <br />
                  <strong>③ OC/IC 테스트 여유:</strong> OC(Overcollateralization) 테스트와 IC(Interest Coverage) 테스트를 통과해야 CLO가 주니어 트랜치에 이자를 지급할 수 있습니다. 테스트 여유가 타이트하면 CLO는 새 투자보다 디레버리징을 선택합니다.
                </>
              ) : (
                <>
                  CLO managers speak a different language from regular investors. Three things you must know before the meeting:
                  <br />
                  <br />
                  <strong>① Diversity Score impact:</strong> CLO mandates include Moody's Diversity Score requirements. Concentration in one industry lowers the score. Ask: "Does this deal increase or decrease your CLO's Diversity Score?"
                  <br />
                  <br />
                  <strong>② WARF (Weighted Average Rating Factor):</strong> CLOs must keep their portfolio WARF below a threshold. Adding CCC loans can push WARF over the limit. Ask: "How much WARF headroom do you currently have?"
                  <br />
                  <br />
                  <strong>③ OC/IC test headroom:</strong> CLOs must pass Overcollateralization (OC) and Interest Coverage (IC) tests to pay junior tranche interest. If these tests are tight, the CLO will deleverage rather than add new investments. Know the numbers before pitching.
                </>
              )}
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 6 — 수수료 워터폴: 돈이 어떻게 흐르는가
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "수수료 워터폴: 돈이 어떻게 흐르는가" : "Fee Waterfall: How Money Flows"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "$1B 딜을 기준으로 수수료 구조를 시각화합니다. Front-end와 Ongoing의 차이를 이해하는 것이 핵심입니다."
                : "Visualizing the fee structure on a $1B deal. The key is understanding Front-end vs Ongoing fees."}
            </p>

            {/* 수수료 바차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 mb-6">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko
                  ? "$1B 딜 수수료 구조 (Front-end $M, Ongoing 별도)"
                  : "$1B Deal Fee Structure (Front-end in $M, Ongoing separate)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "참고: 실제 딜은 협상에 따라 상이" : "Note: Actual deal fees vary by negotiation"}
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={FEE_WATERFALL_DATA} barSize={36}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 10 }}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v) => `$${Number(v)}M`}
                  />
                  <Tooltip
                    formatter={(v) => [`$${Number(v)}M`, ko ? "금액" : "Amount"]}
                    content={<ChartTooltip />}
                  />
                  <Bar dataKey="value" name={ko ? "수수료" : "Fee"}>
                    {FEE_WATERFALL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Front-end vs Ongoing */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">⚡</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                    {ko ? "Front-end Fees (일회성)" : "Front-end Fees (One-time)"}
                  </h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko
                    ? [
                        "Arrangement Fee: 딜 사이즈의 0.5~2.5%",
                        "Underwriting Fee: 언더라이트 리스크 프리미엄",
                        "Upfront Fee: 참여은행에게 배분되는 수수료",
                        "지급 시점: 딜 클로징 시 일시 수취",
                        "MLA의 주요 수익원 — 딜 경제성의 80% 이상",
                      ]
                    : [
                        "Arrangement Fee: 0.5–2.5% of deal size",
                        "Underwriting Fee: underwrite risk premium",
                        "Upfront Fee: allocated to participant banks",
                        "Timing: lump-sum at deal closing",
                        "Primary MLA revenue — 80%+ of deal economics",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔄</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                    {ko ? "Ongoing Fees (연간 반복)" : "Ongoing Fees (Annual Recurring)"}
                  </h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko
                    ? [
                        "Agency Fee: $100K~$500K/년 — 에이전트 운영 수수료",
                        "Commitment Fee: 미인출분 × 0.15~0.50%/년 — RCF의 대기 비용",
                        "Utilization Fee: 인출비율 높을 때 추가 수수료",
                        "Amendment Fee: 조건 변경 시 일회성 수수료",
                        "Waiver Fee: 코버넌트 면제 시 추가 수수료",
                      ]
                    : [
                        "Agency Fee: $100K–$500K/year — agent operational fee",
                        "Commitment Fee: undrawn × 0.15–0.50%/year — cost of RCF standby",
                        "Utilization Fee: additional fee when utilization is high",
                        "Amendment Fee: one-time fee for term changes",
                        "Waiver Fee: additional fee for covenant waiver",
                      ]
                  ).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* OID & Flex */}
            <div
              className="p-5 rounded-xl border text-[12px] leading-relaxed text-gray-700 dark:text-gray-300 mb-5"
              style={{ borderColor: "#fef3c7", background: "#fffbeb" }}
            >
              <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">
                {ko ? "OID와 Market Flex — 레버리지드론 특유의 가격 메커니즘" : "OID and Market Flex — Pricing Mechanisms Unique to Leveraged Loans"}
              </p>
              <div className="space-y-3">
                <div>
                  <strong>OID (Original Issue Discount):</strong>{" "}
                  {ko
                    ? "레버리지드론은 $1,000 원금 대비 할인 발행됩니다. '99센트 발행'은 1pt OID — 투자자가 $990에 사서 $1,000을 회수. OID는 실질 수익률을 높이고, 차주의 실제 조달 비용을 올립니다. 시장이 안 좋으면 OID를 2pt, 3pt로 올려 투자자를 끌어옵니다."
                    : "Leveraged loans are issued at a discount to par. '99-cent issue' = 1pt OID — investors buy at $990 to receive $1,000 at maturity. OID increases effective yield and raises the borrower's true cost. When markets are weak, OID increases to 2pt, 3pt to attract investors."}
                </div>
                <div>
                  <strong>Market Flex:</strong>{" "}
                  {ko
                    ? "북빌딩 중 시장이 차갑게 반응하면 MLA는 Market Flex를 발동합니다: 스프레드 +25~100bp, OID +100~200bp 조정. 반대로 수요 폭발 시 Reverse Flex로 스프레드를 낮춥니다. 이 권한은 Fee Letter에 사전 명시됩니다."
                    : "If bookbuilding response is cold, the MLA invokes Market Flex: spread +25–100bp, OID +100–200bp. If oversubscribed, Reverse Flex tightens the spread. This right is pre-agreed in the Fee Letter before the syndication process begins."}
                </div>
              </div>
            </div>

            <div
              className="p-4 rounded-xl border text-[12px] leading-relaxed text-gray-600 dark:text-gray-400"
              style={{ borderColor: "#e0f2fe", background: "#f0f9ff" }}
            >
              <strong className="text-gray-800 dark:text-gray-200">
                {ko ? "한국 시장 특이사항" : "Korea Market Note"}
              </strong>
              <br />
              {ko
                ? "국내 신디케이티드론 시장에서는 KDB산업은행, 하나은행, 신한은행이 주로 에이전트 역할을 담당합니다. 외국계 대형 딜(크로스보더 딜)에서는 씨티뱅크코리아·HSBC코리아가 에이전트를 맡기도 합니다. 수수료 수준은 글로벌 시장 대비 낮은 경향(Agency Fee $50K~$150K 수준)이며, 국내 대기업 딜에서는 관계 중심의 수수료 협상이 일반적입니다."
                : "In the Korean domestic syndicated loan market, KDB, Hana Bank, and Shinhan Bank are the primary agent banks. For cross-border deals, Citibank Korea and HSBC Korea also take agent roles. Fee levels tend to be lower than global norms (Agency Fee $50K–$150K range), and fee negotiations for domestic large corporates are heavily relationship-driven."}
            </div>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-14"
          >
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">FAQ</h2>
            <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
          </motion.section>

          {/* ── 시리즈 네비게이션 (하단) ── */}
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">
                {ko ? "신디케이티드론 101 시리즈" : "Syndicated Loans 101 Series"}
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {SYNDLOAN_SERIES.filter((ch) => ch.slug !== THIS_CH).map((ch) => (
                <Link
                  key={ch.slug}
                  href={`${ko ? "/market-101" : "/en/market-101"}/${ch.slug}`}
                >
                  <div className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-sm transition-all bg-white dark:bg-gray-900">
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0"
                      style={{ background: ACCENT }}
                    >
                      {ch.ch}
                    </span>
                    <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {ko ? ch.title : ch.titleEn}
                    </span>
                    <span className="ml-auto text-cyan-500 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── 소스 ── */}
          <motion.section
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-8"
          >
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "참고 자료" : "References"}
            </h2>
            <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              {[
                "LSEG LPC (2024). Global Leveraged Loan Review: Investor Mix and CLO Demand.",
                "S&P Global Market Intelligence (2023). CLO Primer: Structure, Mechanics, and Market Role.",
                "LMA (2023). Recommended Form of Facility Agreement — Agency Provisions.",
                "Moody's Investors Service (2023). CLO Rating Methodology: WARF, OC/IC Tests, Diversity Score.",
                "Bank for International Settlements (2023). CLO Concentration and Leveraged Loan Market Dynamics.",
                "Thomson Reuters LPC (2023). Syndicated Loan Fee Survey — Arranger Economics.",
                "Fitch Ratings (2023). OID and Market Flex: Pricing Mechanics in Leveraged Finance.",
                "Bloomberg Intelligence (2023). Korean Syndicated Loan Market: Agent Banks and Fee Structures.",
              ].map((ref, i) => (
                <li key={i}>
                  [{i + 1}] {ref}
                </li>
              ))}
            </ol>
          </motion.section>

          {/* ── 딜 아카이브 연계 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "딜 아카이브 — 플레이어 구조 실전" : "Deal Archive — Player Structure in Action"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  slug: "bayer-monsanto",
                  badge: ko ? "7개 주선은행 구조" : "7-Bank Arranger Structure",
                  title: ko ? "바이엘 × 몬산토 (2018)" : "Bayer × Monsanto (2018)",
                  desc: ko
                    ? "북러너 3 + MLA 4 구조, 수수료 €370-530M 분배 — 역대 최대 IG 신디론 플레이어 지도"
                    : "3 bookrunners + 4 MLAs, €370-530M fee allocation — largest IG syndicated loan player map",
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

          <ShareButtons title={ko ? concept.title : (concept.titleEn || concept.title)} lang={lang} />
        </div>
      </main>
      <Footer />
    </>
  );
}
