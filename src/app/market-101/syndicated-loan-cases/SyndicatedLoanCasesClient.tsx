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
const THIS_CH = "syndicated-loan-cases";
const SYNDLOAN_SERIES = [
  { slug: "syndicated-loan-overview", ch: "Ch.0", title: "왜 은행들은 뭉치는가",      titleEn: "Why Banks Pool Together" },
  { slug: "syndicated-loan-players",  ch: "Ch.1", title: "플레이어와 수익구조",        titleEn: "Players & Economics" },
  { slug: "syndicated-loan-process",  ch: "Ch.2", title: "딜 프로세스 실무",           titleEn: "Deal Process in Practice" },
  { slug: "syndicated-loan-docs",     ch: "Ch.3", title: "문서와 코버넌트",            titleEn: "Documentation & Covenants" },
  { slug: "syndicated-loan-cases",    ch: "Ch.4", title: "케이스스터디: 성공 vs 실패", titleEn: "Case Studies: Win vs Fail" },
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
        <span
          className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: ACCENT }}
        >
          {"실무"}
        </span>
        <span className="text-[13px] font-bold text-cyan-800 dark:text-cyan-200">{title}</span>
      </div>
      <div className="text-[13px] text-cyan-900 dark:text-cyan-200 leading-relaxed">{children}</div>
    </div>
  );
}

// ── 커스텀 툴팁 ──────────────────────────────────────────────────────────────
function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: <strong>{p.value}×</strong>
        </p>
      ))}
    </div>
  );
}

// ── 레버리지 비교 차트 데이터 ───────────────────────────────────────────────
const LEVERAGE_DATA = [
  { name: "ARM (2023)", leverage: 3.5, color: ACCENT },
  { name: "Toys’R’Us (2005)", leverage: 6.5, color: "#ef4444" },
];

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "Toys’R’Us에 돈을 빌려준 은행들은 실제로 손실을 봤나요?",
    a: "부분적으로 그렇습니다. 2017년 Chapter 11 신청 후 Toys’R’Us는 청산을 선택했습니다(2018년 3월). 1st Lien 담보부 대출(Real Estate Term Loan 등)은 부동산 자산 매각으로 상당 부분 회수했지만, 무담보 HY채권($400M, 10.75%)은 회수율이 낮았습니다. S&P 데이터에 따르면 동기간 레버리지드론 평균 회수율은 약 65~70%였으나, 리테일 청산 딜에서는 50% 이하로 떨어지는 경우도 있었습니다. TLB를 보유했던 CLO는 트랜치별로 손실을 분산했습니다.",
  },
  {
    q: "ARM IPO 후 $10B 대출은 어떻게 상환됐나요?",
    a: "ARM은 2023년 9월 나스닥에 상장하며 약 $4.87B를 조달했습니다. 이 중 상당액이 SoftBank에게 지급됐고, SoftBank는 ARM 브릿지 대출 상환 재원으로 활용했습니다. RCF($2B)는 미사용 또는 일부 인출 후 상환, TLA($4B)는 IPO 후 12~18개월 내 상환이 일반적인 구조였습니다. TLB($4B, 5년 만기)는 ARM의 자체 FCF와 라이선스 수익으로 단계적으로 상환 예정이었습니다. IPO 후 ARM의 시가총액이 $60B+를 유지하면서 리파이낸싱 리스크는 실질적으로 사라졌습니다.",
  },
  {
    q: "레버드론 투자자가 파산 시 받을 수 있는 회수율은 평균 얼마인가요?",
    a: "Moody’s의 연간 Default Study에 따르면 1st Lien 담보부 레버리지드론의 장기 평균 회수율은 약 65~70%입니다. 반면 2nd Lien은 15~30%, HY채권(무담보)은 35~45% 수준입니다. 다만 산업별로 크게 다릅니다. 에너지·항공 같은 실물자산 보유 업종은 70~80%+, 리테일·미디어 같이 무형자산·브랜드 중심 업종은 30~50%로 떨어집니다. 이 때문에 LevFin Analyst는 담보 자산의 청산가치(Liquidation Value)를 반드시 IM에 포함합니다.",
  },
  {
    q: "2005년 당시 Toys’R’Us 딜을 분석했다면 거절할 수 있었을까요?",
    a: "이론적으로는 가능했습니다. 2005년 당시에도 Amazon의 성장 궤적(CAGR 40%+)은 공개 데이터였고, 오프라인 소매의 Fixed Cost 취약성은 알려진 리스크였습니다. 그러나 실무적으로 거절은 매우 어려웠습니다. KKR·Bain·Vornado는 당시 최대 PE 스폰서들이었고, 이들과의 관계를 끊는 것은 LevFin 팀 전체의 수익에 영향을 미쳤습니다. 대신 더 현실적인 대응은: (1) 코버넌트를 강화(Maintenance Covenant 추가), (2) 온라인 침투 시나리오를 stress test에 포함, (3) 부동산 TL에 매장 폐쇄 옵션 조항 협상이었습니다.",
  },
  {
    q: "한국 PE 딜 중 Toys’R’Us처럼 실패한 레버리지드론 사례가 있나요?",
    a: "직접 비교 가능한 사례로 이마트24(구 위드미), 홈플러스 LBO 이슈가 있습니다. 홈플러스는 2015년 MBK파트너스에 7.2조원에 인수됐고, 이 중 상당액이 레버리지드 대출이었습니다. 이후 오프라인 마트 시장 침체와 쿠팡·네이버 이커머스 급성장으로 EBITDA가 압박을 받았고, 임차료 부담(수백 개 점포)이 재무 유연성을 제약했습니다. 홈플러스는 2024년 기업회생절차(법정관리)를 신청하면서 한국판 Toys’R’Us 사례로 불리기도 합니다. 산업 역학, 오프라인 고정비 구조, 레버리지 수준 면에서 유사점이 있습니다.",
  },
];

const FAQ_EN = [
  {
    q: "Did the banks that lent to Toys’R’Us actually take losses?",
    a: "Partially yes. After the Chapter 11 filing in September 2017, Toys’R’Us chose liquidation (March 2018). First lien secured lenders (including the real estate term loan) recovered a meaningful portion through property asset sales. However, unsecured HY bonds ($400M at 10.75%) had low recovery rates. S&P data shows the leveraged loan average recovery rate for the period was approximately 65–70%, but retail liquidation deals often fell below 50%. CLOs holding TLB positions spread the losses across their tranche structures.",
  },
  {
    q: "How was the $10B ARM loan repaid after the IPO?",
    a: "ARM raised approximately $4.87B in its September 2023 Nasdaq IPO. A significant portion flowed to SoftBank, which used it to repay ARM bridge debt. The RCF ($2B) was either undrawn or repaid shortly after IPO. The TLA ($4B) was typically structured to repay within 12–18 months post-IPO. The TLB ($4B, 5-year maturity) was to be repaid via ARM’s own FCF and royalty revenues. With ARM’s post-IPO market cap sustaining above $60B, refinancing risk effectively disappeared.",
  },
  {
    q: "What is the average recovery rate for leveraged loan investors in a bankruptcy?",
    a: "Per Moody’s Annual Default Study, 1st lien secured leveraged loans average approximately 65–70% recovery. Second lien averages 15–30%, and unsecured HY bonds average 35–45%. Recovery varies significantly by industry: asset-heavy sectors (energy, aviation) see 70–80%+, while intangible-driven sectors (retail, media) can fall to 30–50%. This is why LevFin analysts always include a collateral liquidation value analysis in the IM.",
  },
  {
    q: "Could an analyst in 2005 have spotted the warning signs and rejected the Toys’R’Us deal?",
    a: "Theoretically yes. Amazon’s growth trajectory (40%+ CAGR) was public data, and the fixed-cost vulnerability of offline retail was a known risk factor. But in practice, rejection was extremely difficult. KKR, Bain, and Vornado were among the most powerful PE sponsors of that era — walking away would have damaged the LevFin franchise across future mandates. More realistic alternatives would have been: (1) insisting on maintenance covenants, (2) building an e-commerce penetration stress test into the financial model, and (3) negotiating lease termination optionality into the real estate term loan docs.",
  },
  {
    q: "Are there Korean PE deals that failed similarly to Toys’R’Us?",
    a: "The closest Korean analog is the Homeplus LBO. MBK Partners acquired Homeplus from Tesco for approximately ₩7.2T in 2015, with a significant leveraged loan component. Subsequent EBITDA compression from the offline retail decline — driven by Coupang and Naver Commerce growth — combined with heavy fixed lease obligations across hundreds of stores, constrained financial flexibility. Homeplus filed for court receivership (hoesengjeolycha) in 2024, drawing comparisons to Toys’R’Us. The parallels in industry dynamics, fixed-cost structure, and leverage levels are notable.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function SyndicatedLoanCasesClient({ concept, lang }: Props) {
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
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">Ch.4 / 5</span>
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
            <ShareButtons title={ko ? concept.title : (concept.titleEn || concept.title)} />
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
                ? "두 딜의 핵심 숫자를 먼저 잡아봅니다."
                : "The key numbers that define these two landmark deals."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: ko ? "ARM 딜 규모" : "ARM Deal Size", value: "$10B", sub: ko ? "11개 MLA, 3일 오버서브" : "11 MLAs, 3-day oversubscribe" },
                { label: ko ? "Toys’R’Us 딜" : "TRU Deal Size", value: "$5.7B", sub: ko ? "2005 LBO → 2017 파산" : "2005 LBO → 2017 Ch.11" },
                { label: ko ? "최초 레버리지 비교" : "Initial Leverage", value: "3.5× vs 6.5×", sub: ko ? "ARM vs TRU" : "ARM vs TRU" },
                { label: ko ? "결정적 차이" : "Key Difference", value: "Exit 경로", sub: ko ? "IPO vs 리파이낸싱" : "IPO vs refi-only" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-lg font-extrabold leading-tight" style={{ color: ACCENT }}>{s.value}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* 레버리지 비교 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "최초 Net Debt / EBITDA 레버리지 비교" : "Initial Net Debt / EBITDA Leverage Comparison"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">Source: LSEG LPC, S&P LCD</p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={LEVERAGE_DATA} barSize={56}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}×`} domain={[0, 8]} />
                  <Tooltip content={<ChartTooltip />} formatter={(v) => [`${v}×`, ko ? "레버리지" : "Leverage"]} />
                  <Bar dataKey="leverage" name={ko ? "레버리지" : "Leverage"}>
                    {LEVERAGE_DATA.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 2 — 왜 이 두 딜인가
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "왜 이 두 딜인가: 케이스 선택의 논리" : "Why These Two Deals: The Logic of Case Selection"}
            </h2>

            <AnalogyBox>
              <strong>
                {ko
                  ? "의과대학의 케이스스터디: 비슷한 증상, 다른 결말"
                  : "Medical School Case Studies: Similar Symptoms, Different Outcomes"}
              </strong>
              <br /><br />
              {ko
                ? <>의과대학에서 좋은 케이스스터디는 비슷한 증상을 가진 두 환자를 비교하는 것입니다. 수술 방법은 같았지만 한 명은 회복하고 한 명은 세상을 떠났습니다. 차이는 수술이 아니라 수술 전 진단(Due Diligence)과 수술 후 모니터링(Covenant)이었습니다.
                <br /><br />
                ARM과 Toys&#39;R&#39;Us도 같은 구조(신디케이티드 레버드론)를 썼습니다. 결과의 차이는 구조가 아니라 사람과 산업과 계약이었습니다.</>
                : <>In medical school, the best case studies compare two patients with similar symptoms. The surgical procedure was identical, but one recovered and one did not. The difference was not the operation itself — it was the pre-operative diagnosis (Due Diligence) and post-operative monitoring (Covenants).
                <br /><br />
                ARM and Toys&#39;R&#39;Us both used the same structure: syndicated leveraged loans. The difference in outcome was not the structure — it was the people, the industry, and the contract terms.</>
              }
            </AnalogyBox>

            <div className="grid gap-4 sm:grid-cols-3 mt-6">
              {[
                {
                  icon: "🔗",
                  title: ko ? "두 딜의 공통점" : "What They Shared",
                  body: ko
                    ? "대형 스폰서 지원(SoftBank / KKR·Bain·Vornado), 레버리지드론 구조(TLA·TLB·RCF), 당시 기준 '우량한 딜'로 평가받음, IM에서 해당 산업의 성장 스토리를 핵심 투자 포인트로 제시"
                    : "Both had major sponsor backing (SoftBank / KKR·Bain·Vornado), leveraged loan structure (TLA·TLB·RCF), were considered high-quality deals at the time, and used industry growth as a core investment thesis in the IM.",
                },
                {
                  icon: "⚡",
                  title: ko ? "결정적 차이" : "The Critical Differences",
                  body: ko
                    ? "산업 역학(반도체 IP 성장 vs 오프라인 소매 쇠퇴), 코버넌트 설계(표준 vs Cov-Lite), 리파이낸싱 전략(IPO 브릿지 vs 영구 레버드론 의존), Exit 경로의 명확성"
                    : "Industry dynamics (semiconductor IP growth vs offline retail decline), covenant design (standard vs Cov-Lite), refinancing strategy (IPO bridge vs permanent leveraged loan reliance), and exit path clarity.",
                },
                {
                  icon: "📚",
                  title: ko ? "이 비교의 교훈" : "The Lesson",
                  body: ko
                    ? "딜을 평가할 때 현재 스냅샷이 아니라 3~5년 후 시나리오를 봐야 합니다. 2005년 Toys'R'Us의 DCF는 통과했지만, 5년 후 Amazon이 완구 카테고리를 잠식하는 시나리오는 모델에 없었습니다."
                    : "When evaluating a deal, look at the 3-to-5-year scenario, not just the current snapshot. The 2005 Toys'R'Us DCF passed — but the model had no scenario for Amazon dominating the toy category five years later.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                  <span className="text-2xl mb-2 block">{c.icon}</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{c.title}</h3>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 3 — ARM Holdings 2023: $10B 성공 해부
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "ARM Holdings 2023: $10B 성공 해부" : "ARM Holdings 2023: Anatomy of a $10B Success"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "왜 11개 은행이 3일 만에 $10B를 가득 채웠는가."
                : "Why eleven banks filled $10B in just three days."}
            </p>

            {/* 딜 배경 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3">
                {ko ? "딜 배경" : "Deal Background"}
              </h3>
              <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                {(ko ? [
                  "ARM Holdings: 영국 반도체 IP 설계 회사. 스마트폰 CPU 아키텍처 시장 90%+ 점유. SoftBank가 2016년 $32B에 인수.",
                  "2023 IPO 계획: 나스닥 상장 전 SoftBank의 브릿지 파이낸싱 필요 — SoftBank의 AI 관련 포트폴리오 유동성 확보.",
                  "딜 목적: IPO 전 기존 부채 리파이낸싱 + SoftBank 유동성 지원. IPO 후 즉시 상환 예정.",
                  "타이밍: 2023년 AI 붐 → 반도체 IP 수요 폭발 → 기관투자자 tech 크레딧 선호 최고조.",
                ] : [
                  "ARM Holdings: UK semiconductor IP design firm. 90%+ market share in smartphone CPU architecture. Acquired by SoftBank for $32B in 2016.",
                  "2023 IPO plan: SoftBank needed bridge financing before Nasdaq listing — securing liquidity from ARM's AI-driven valuation.",
                  "Deal purpose: Refinance existing debt ahead of IPO + SoftBank liquidity support. Structured for immediate repayment post-IPO.",
                  "Timing: 2023 AI boom → semiconductor IP demand explosion → institutional investor tech credit appetite at peak.",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: ACCENT }} className="flex-shrink-0 mt-0.5 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 딜 구조 표 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "트랜치" : "Tranche"}</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "금액" : "Amount"}</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "만기" : "Tenor"}</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "금리" : "Rate"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ["RCF (리볼빙 크레딧 / Revolving Credit)", "$2B", ko ? "3년" : "3yr", "SOFR + 175bps"],
                    ["TLA (Term Loan A)", "$4B", ko ? "3년" : "3yr", "SOFR + 200bps"],
                    ["TLB (Term Loan B)", "$4B", ko ? "5년" : "5yr", "SOFR + 250bps"],
                  ].map(([tranche, amt, tenor, rate]) => (
                    <tr key={String(tranche)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">{tranche}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-bold" style={{ color: ACCENT }}>{amt}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{tenor}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-gray-400 font-mono">{rate}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 dark:border-gray-600 bg-cyan-50/30 dark:bg-cyan-900/10">
                    <td className="px-4 py-3 font-extrabold text-gray-900 dark:text-gray-100">{ko ? "합계" : "Total"}</td>
                    <td className="px-4 py-3 font-extrabold text-[14px]" style={{ color: ACCENT }}>$10B</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-6">
              <strong>{ko ? "MLA 구성 (11개):" : "MLA Syndicate (11 banks):"}</strong>{" "}
              JPMorgan, Goldman Sachs, BofA, Citigroup, Barclays, MUFG, HSBC, Deutsche Bank, BNP Paribas, Mizuho, SMBC
            </p>

            {/* 성공 요인 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "성공 요인 5가지 — 상세 분석" : "5 Success Factors — Detailed Analysis"}
            </h3>
            <div className="space-y-3 mb-6">
              {(ko ? [
                {
                  num: "①",
                  title: "명확한 Exit 경로",
                  body: "IPO(2023년 9월 나스닥 상장)가 예정되어 있었음. 이는 TLA·TLB의 리파이낸싱 리스크를 사실상 제거합니다. 투자자들은 '이 대출이 언제 어떻게 상환되는가'를 확실히 알았습니다.",
                },
                {
                  num: "②",
                  title: "Counter-cyclical 수익 구조",
                  body: "ARM의 Royalty Revenue는 반도체 출하량 기반. AI 칩 수요 급증 → 라이선스 수익 증가. 경기 하강기에도 기술 업그레이드 사이클이 수익을 방어합니다.",
                },
                {
                  num: "③",
                  title: "담보 구조의 강도",
                  body: "SoftBank 보유 ARM 지분(90%) 질권 설정. ARM 주식의 시가총액이 대출 규모의 4~5배 이상. 실질적으로 거의 완전 커버리지.",
                },
                {
                  num: "④",
                  title: "스폰서 신용도",
                  body: "SoftBank = 일본 최대 통신·기술 지주회사, 시총 약 $70B+. 필요 시 자체 유동성으로 대출 상환 가능. 스폰서 자체가 신용 보강 역할.",
                },
                {
                  num: "⑤",
                  title: "시장 타이밍",
                  body: "2023년 AI 붐 → 기관투자자들의 tech 크레딧 선호도 최고조. SOFR+250bps(TLB)는 BB급 tech 기준 시장가 대비 타이트했지만 오버서브 예상 가능했던 조건.",
                },
              ] : [
                {
                  num: "①",
                  title: "Clear Exit Path",
                  body: "The Nasdaq IPO (September 2023) was already scheduled. This effectively eliminated refinancing risk on the TLA and TLB. Investors knew exactly when and how the loan would be repaid.",
                },
                {
                  num: "②",
                  title: "Counter-Cyclical Revenue",
                  body: "ARM's royalty revenue is based on semiconductor shipment volumes. AI chip demand surge → rising license revenue. Even in economic downturns, technology upgrade cycles defend revenues.",
                },
                {
                  num: "③",
                  title: "Collateral Package Strength",
                  body: "SoftBank's 90% ARM equity stake pledged as collateral. ARM's market cap was 4–5x the loan size. Effective near-complete coverage of the debt.",
                },
                {
                  num: "④",
                  title: "Sponsor Credit Quality",
                  body: "SoftBank = Japan's largest telecom and technology holding company, ~$70B+ market cap. Capable of repaying the loan from its own liquidity if needed. Sponsor itself acts as credit enhancement.",
                },
                {
                  num: "⑤",
                  title: "Market Timing",
                  body: "2023 AI boom → institutional investor appetite for tech credit at its highest. SOFR+250bps on the TLB was tight versus comparable BB tech credits — but oversubscription was predictable given the demand environment.",
                },
              ]).map((f) => (
                <div key={f.num} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-extrabold text-white" style={{ background: ACCENT }}>
                    {f.num}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{f.title}</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <PracticeBox title={ko ? "ARM IM 투자자 콜 Q&A 재현 — 렌더 미팅에서 나왔을 5가지 질문" : "ARM IM Investor Call Q&A Simulation — 5 Questions from the Lender Meeting"}>
              {ko
                ? <ol className="space-y-3 list-none">
                    {[
                      { q: "SoftBank의 재무 상황이 악화되면 ARM에 대한 지원을 철회할 가능성은?", a: "ARM은 SoftBank 없이도 독립 운영 가능합니다. SoftBank 의존도는 파이낸싱 구조상 담보(지분 질권)에 반영되어 있으며, IPO 이후에는 사실상 독립 법인입니다. SoftBank 지원 약화 시 코버넌트가 트리거됩니다." },
                      { q: "중국 시장 수출 제한이 ARM 라이선스 수익에 미치는 영향은?", a: "ARM의 중국 매출 비중은 약 24%입니다(2022 기준). 미국 수출 규제 강화 시 단기 영향이 있을 수 있으나, ARM China는 별도 JV로 분리 운영됩니다. 라이선스 계약의 성격상 기존 계약은 유지됩니다." },
                      { q: "SOFR+250bps는 동급 BB tech 비교 딜 대비 타이트한데, 프라이싱 근거는?", a: "3개 요인입니다: (1) 명확한 IPO Exit으로 만기 연장 리스크 없음, (2) SoftBank 지분 담보로 실질적 LTV 20% 이하, (3) 11개 MLA가 동시 참여하므로 시장 수요 테스트 완료 상태." },
                      { q: "IPO가 시장 상황으로 연기 또는 철회될 경우 플랜 B는?", a: "TLB 만기가 5년이므로 1~2년 연장 여유가 있습니다. SoftBank는 ARM 지분 매각(Secondary) 또는 전략적 파트너 파매 옵션을 보유합니다. 또한 ARM 자체 FCF($1B+/년)로 부분 상환 가능합니다." },
                      { q: "Royalty Revenue의 Cyclicality — 반도체 다운사이클 시 어떻게 되나?", a: "ARM의 로열티는 라이선스 계약 구조상 단위당 고정 수수료입니다. 출하량이 줄면 로열티도 줄지만, 계약 갱신 시 단가가 오르는 구조(ALA 갱신 가격 인상)가 부분 방어합니다. 과거 2019년 반도체 다운사이클에서도 ARM 수익은 5% 미만 감소에 그쳤습니다." },
                    ].map((qa, i) => (
                      <li key={i} className="border-l-2 pl-3" style={{ borderColor: ACCENT }}>
                        <p className="font-bold text-[12px] text-gray-800 dark:text-gray-200 mb-1">Q{i + 1}. {qa.q}</p>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400">A: {qa.a}</p>
                      </li>
                    ))}
                  </ol>
                : <ol className="space-y-3 list-none">
                    {[
                      { q: "If SoftBank's financial position deteriorates, could it withdraw support for ARM?", a: "ARM can operate independently without SoftBank. SoftBank dependency is captured structurally through the equity pledge collateral, and post-IPO ARM functions as an independent public entity. Covenant tripwires address SoftBank support withdrawal scenarios." },
                      { q: "What's the impact of US export controls on ARM's China license revenue?", a: "China represents approximately 24% of ARM revenue (2022). US export restrictions could create short-term headwinds, but ARM China operates as a separate JV. Existing license agreements under prior contracts remain enforceable." },
                      { q: "SOFR+250bps seems tight versus comparable BB tech peers — what's the pricing rationale?", a: "Three factors: (1) clear IPO exit eliminates maturity extension risk; (2) SoftBank equity pledge implies effective LTV below 20%; (3) 11 concurrent MLAs confirm the market is already tested and demand verified." },
                      { q: "If the IPO is delayed or withdrawn, what is Plan B?", a: "The 5-year TLB tenor provides 1–2 years of breathing room. SoftBank retains options for secondary ARM share sales or strategic partner transactions. ARM's own FCF ($1B+/year) also supports partial repayment." },
                      { q: "What happens to royalty revenue in a semiconductor down-cycle?", a: "ARM royalties are per-unit fees under license agreements. Volume decline reduces royalties, but ALA renewal pricing increases per-unit rates as a partial offset. In the 2019 semiconductor down-cycle, ARM revenues declined less than 5%." },
                    ].map((qa, i) => (
                      <li key={i} className="border-l-2 pl-3" style={{ borderColor: ACCENT }}>
                        <p className="font-bold text-[12px] text-gray-800 dark:text-gray-200 mb-1">Q{i + 1}. {qa.q}</p>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400">A: {qa.a}</p>
                      </li>
                    ))}
                  </ol>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 4 — Toys'R'Us 2005: $5B 파산 해부
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Toys’R’Us 2005: $5B 파산 해부" : "Toys’R’Us 2005: Anatomy of a $5B Failure"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "당시 '좋은 딜'이었던 이유와, 그것이 왜 틀렸는지."
                : "Why it looked like a good deal at the time — and why that was wrong."}
            </p>

            {/* 딜 배경 */}
            <div className="rounded-xl border border-rose-200 dark:border-rose-700 bg-rose-50/30 dark:bg-rose-900/10 p-5 mb-6">
              <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3">
                {ko ? "딜 배경" : "Deal Background"}
              </h3>
              <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                {(ko ? [
                  "Toys’R’Us: 미국 최대 완구 전문 소매점 체인. 2005년 기준 매출 $11.2B. 1,500개 이상 매장.",
                  "2005 LBO: KKR + Bain Capital + Vornado Realty Trust가 $6.6B에 인수. 완구 시장 #1 브랜드 + 부동산 자산 활용 전략.",
                  "부채 구조: $5.3B 레버리지드론 + $400M HY채권 = 총 $5.7B 차입. 에쿼티 기여 약 $1.3B.",
                  "당시 논리: 브랜드 파워, 부동산 자산, 크리스마스 시즌 수익 집중 구조 → '안정적'으로 평가.",
                ] : [
                  "Toys’R’Us: America's largest specialty toy retailer. $11.2B revenue as of 2005. 1,500+ stores.",
                  "2005 LBO: KKR + Bain Capital + Vornado Realty Trust acquired for $6.6B. Strategy: #1 toy brand + real estate asset monetization.",
                  "Debt package: $5.3B leveraged loans + $400M HY bonds = total $5.7B. Equity contribution approximately $1.3B.",
                  "Contemporary logic: brand power, real estate assets, Christmas season revenue concentration → assessed as 'stable.'",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 flex-shrink-0 mt-0.5 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 딜 구조 표 */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "트랜치" : "Tranche"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "금액" : "Amount"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "만기" : "Tenor"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "금리" : "Rate"}</th>
                    <th className="text-left px-3 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "코버넌트" : "Covenant"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ["TLB", "$1.8B", ko ? "7년" : "7yr", "LIBOR + 375bps", ko ? "Cov-Lite" : "Cov-Lite"],
                    [ko ? "Secured Notes" : "Secured Notes", "$1.0B", ko ? "8년" : "8yr", "7.375%", ko ? "Incurrence only" : "Incurrence only"],
                    [ko ? "부동산 TL (Real Estate TL)" : "Real Estate TL", "$2.5B", ko ? "10년" : "10yr", "LIBOR + 350bps", ko ? "부동산 담보" : "RE collateral"],
                    [ko ? "HY Notes" : "HY Notes", "$400M", ko ? "10년" : "10yr", "10.75%", ko ? "Incurrence only" : "Incurrence only"],
                  ].map(([tranche, amt, tenor, rate, cov]) => (
                    <tr key={String(tranche)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-3 py-3 font-semibold text-gray-700 dark:text-gray-300">{tranche}</td>
                      <td className="px-3 py-3 font-bold text-rose-500">{amt}</td>
                      <td className="px-3 py-3 text-gray-500 dark:text-gray-400">{tenor}</td>
                      <td className="px-3 py-3 text-gray-500 dark:text-gray-400 font-mono">{rate}</td>
                      <td className="px-3 py-3">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          String(cov).includes("Cov-Lite") || String(cov).includes("Incurrence")
                            ? "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                        }`}>{cov}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 실패 요인 */}
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-3">
              {ko ? "실패 요인 4가지 — 상세 분석" : "4 Failure Factors — Detailed Analysis"}
            </h3>
            <div className="space-y-3 mb-6">
              {(ko ? [
                {
                  num: "①",
                  color: "bg-rose-500",
                  title: "Cov-Lite + 조기경보 없음",
                  body: "Maintenance Covenant가 없어서 2013~2016년 재무 악화 중 은행들이 법적으로 개입할 수단이 없었습니다. 2016년이 되어서야 유동성 위기가 표면화됐고, 그때는 이미 늦었습니다. Maintenance Covenant가 있었다면 2012~2013년에 이미 Amendment 협상이 시작되었을 것입니다.",
                },
                {
                  num: "②",
                  color: "bg-orange-500",
                  title: "Amazon의 구조적 공격",
                  body: "2005년: Amazon의 완구 카테고리 점유율은 미미했습니다. 2010년: Amazon이 완구 카테고리에서 Toys’R’Us를 앞서기 시작했습니다. 2013년: 온라인 완구 시장 50%+ 점령. 그러나 2005년 IM에서 Amazon 리스크를 단 한 단락으로 처리했습니다. 'e-commerce is growing but in-store experience remains differentiated'라는 표준 문구로 무마.",
                },
                {
                  num: "③",
                  color: "bg-amber-500",
                  title: "고정 임차료의 함정",
                  body: "부동산 담보 TL($2.5B)의 조건으로 매장 폐쇄 불가 조항이 포함됐습니다. 연간 임차료 + 운영 비용 약 $400M+. 매출이 30% 감소해도 비용 구조는 그대로였습니다. Amazon은 물류센터 몇 개로 동일 매출을 처리합니다. 오프라인의 Fixed Cost Leverage는 '매출이 오를 때 레버리지', 내릴 때는 '사망 가속기'입니다.",
                },
                {
                  num: "④",
                  color: "bg-red-500",
                  title: "리파이낸싱 시장 접근 차단",
                  body: "2016년 신용등급 BB- → B (Negative Watch). 고금리 환경에서 리파이낸싱 시도했지만 스프레드 700bps+ 요구. CLO 매니저들이 CCC 리스크 노출 기피. Exit 경로가 '레버드론 시장의 지속적 접근 가능성' 하나뿐이었는데, 그것이 막혔습니다. 2017년 9월 Chapter 11 신청.",
                },
              ] : [
                {
                  num: "①",
                  color: "bg-rose-500",
                  title: "Cov-Lite + No Early Warning",
                  body: "With no maintenance covenants, banks had no legal mechanism to intervene as Toys’R’Us deteriorated from 2013 to 2016. The liquidity crisis only surfaced in 2016 — by then it was too late. With maintenance covenants, amendment negotiations would have started in 2012–2013, potentially changing the trajectory.",
                },
                {
                  num: "②",
                  color: "bg-orange-500",
                  title: "Amazon's Structural Attack",
                  body: "2005: Amazon's toy category share was negligible. 2010: Amazon overtook Toys’R’Us in online toy sales. 2013: 50%+ of online toy market captured. Yet the 2005 IM addressed Amazon risk in a single paragraph — dismissed with the standard boilerplate: 'e-commerce is growing but in-store experience remains differentiated.'",
                },
                {
                  num: "③",
                  color: "bg-amber-500",
                  title: "The Fixed Lease Trap",
                  body: "The real estate term loan ($2.5B) included covenants preventing store closures — the collateral base had to be maintained. Annual lease + operating costs approximately $400M+. Revenue could fall 30% while the cost structure stayed fixed. Amazon handled equivalent revenue from a few distribution centers. Offline fixed-cost leverage: powerful on the way up, lethal on the way down.",
                },
                {
                  num: "④",
                  color: "bg-red-500",
                  title: "Refinancing Market Access Cut Off",
                  body: "2016: credit rating downgraded from BB- to B (Negative Watch). Refinancing attempted in high-rate environment — market demanded 700bps+. CLO managers avoided CCC risk exposure. The entire exit strategy depended on 'continued access to leveraged loan markets' — and that door closed. Chapter 11 filed September 2017.",
                },
              ]).map((f) => (
                <div key={f.num} className="flex items-start gap-3 p-4 rounded-xl border border-rose-200 dark:border-rose-700/50 bg-rose-50/30 dark:bg-rose-900/10">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-extrabold text-white ${f.color}`}>
                    {f.num}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{f.title}</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <PracticeBox title={ko ? "현재 Analyst라면 2005년 IM에 추가했어야 할 페이지들" : "Pages a 2025 Analyst Should Have Added to the 2005 IM"}>
              {ko
                ? <>
                    <p className="mb-3">세 가지 추가 분석이 필요했습니다:</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-bold text-[12px] text-cyan-800 dark:text-cyan-200 mb-1">📊 온라인 침투율 시나리오 분석 (3페이지)</p>
                        <p className="text-[12px]">Base(온라인 점유율 15%), Bear(30%), Stress(50%) 시나리오별 Toys&#39;R&#39;Us 매출·EBITDA·레버리지 변화. Amazon 성장 CAGR 40% 기준 각 시나리오 도달 연도 계산.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[12px] text-cyan-800 dark:text-cyan-200 mb-1">📋 Fixed Cost 구조 분석 (2페이지)</p>
                        <p className="text-[12px]">매출 -10%, -20%, -30% 시 EBITDA 변화 폭 분석. 임차료·인건비 등 Fixed Cost 비중을 분리, Operating Leverage 계수 계산. "매출 -20%이면 EBITDA -60%"를 명시적으로 보여줘야 했습니다.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[12px] text-cyan-800 dark:text-cyan-200 mb-1">🔄 리파이낸싱 조건 Stress Test (2페이지)</p>
                        <p className="text-[12px]">만기 시점(2012~2015년) 신용등급 B 시나리오에서 리파이낸싱 가능 스프레드, CLO 수요 민감도, 그리고 '리파이낸싱 불가 시 유동성 버퍼' 분석. Exit이 단 하나의 경로에 의존함을 명시.</p>
                      </div>
                    </div>
                  </>
                : <>
                    <p className="mb-3">Three additional analyses were required:</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-bold text-[12px] text-cyan-800 dark:text-cyan-200 mb-1">📊 Online Penetration Scenario Analysis (3 pages)</p>
                        <p className="text-[12px]">Base (online share 15%), Bear (30%), Stress (50%) scenarios showing Toys&#39;R&#39;Us revenue, EBITDA, and leverage trajectory. Using Amazon CAGR of 40%, calculate the year each scenario is reached.</p>
                      </div>
                      <div>
                        <p className="font-bold text-[12px] text-cyan-800 dark:text-cyan-200 mb-1">📋 Fixed Cost Structure Analysis (2 pages)</p>
                        <p className="text-[12px]">EBITDA sensitivity to revenue declines of -10%, -20%, -30%. Isolate lease and labor as fixed costs, calculate operating leverage coefficient. The model should have explicitly shown: "revenue -20% = EBITDA -60%."</p>
                      </div>
                      <div>
                        <p className="font-bold text-[12px] text-cyan-800 dark:text-cyan-200 mb-1">🔄 Refinancing Stress Test (2 pages)</p>
                        <p className="text-[12px]">At maturity (2012–2015), model refinancing spreads at a B-rated scenario, CLO demand sensitivity, and liquidity buffer if refinancing fails. The IM should have explicitly flagged the single-exit-path dependency.</p>
                      </div>
                    </div>
                  </>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 5 — 사이드바이사이드 비교
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "사이드바이사이드 비교: 결정적 차이 8가지" : "Side-by-Side Comparison: 8 Critical Differences"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "같은 구조, 정반대 결말의 원인을 항목별로 분해합니다."
                : "Breaking down the cause of opposite outcomes from the same structure."}
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 w-1/3">{ko ? "비교 항목" : "Category"}</th>
                    <th className="text-left px-4 py-3 font-bold bg-cyan-50 dark:bg-cyan-900/20" style={{ color: ACCENT }}>ARM (2023) ✅</th>
                    <th className="text-left px-4 py-3 font-bold bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400">Toys&#39;R&#39;Us (2005) ❌</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {(ko ? [
                    ["딜 사이즈", "$10B", "$5.7B"],
                    ["최초 레버리지", "~3.5×", "~6.5×"],
                    ["Exit 경로", "IPO (명확, 날짜 확정)", "레버드론 리파이낸싱 (불명확)"],
                    ["산업", "반도체 IP (AI 수혜 성장)", "오프라인 소매 (구조적 쇠퇴)"],
                    ["코버넌트", "Standard (Maintenance 포함)", "Cov-Lite (Incurrence only)"],
                    ["주요 리스크", "SoftBank 의존 (단기, IPO로 해소)", "Amazon 구조적 침식 (장기, 불가역)"],
                    ["투자자 반응", "3일 오버서브스크라이브", "당시 완판, 이후 secondary 급락"],
                    ["결말", "2023년 IPO 성공, TL 상환 완료", "2017년 Chapter 11 신청, 2018년 청산"],
                  ] : [
                    ["Deal Size", "$10B", "$5.7B"],
                    ["Initial Leverage", "~3.5×", "~6.5×"],
                    ["Exit Path", "IPO (confirmed date)", "Leveraged loan refi (uncertain)"],
                    ["Industry", "Semiconductor IP (AI-driven growth)", "Offline retail (structural decline)"],
                    ["Covenants", "Standard (maintenance included)", "Cov-Lite (incurrence only)"],
                    ["Key Risk", "SoftBank reliance (short-term, IPO resolves)", "Amazon structural erosion (long-term, irreversible)"],
                    ["Investor Response", "Oversubscribed in 3 days", "Placed at close, secondary market collapse later"],
                    ["Outcome", "2023 IPO success, TL repaid", "Chapter 11 Sep 2017, liquidation 2018"],
                  ]).map(([cat, arm, tru]) => (
                    <tr key={String(cat)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50">{cat}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-cyan-50/20 dark:bg-cyan-900/10">{arm}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-rose-50/20 dark:bg-rose-900/10">{tru}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 6 — 5가지 교훈 + MD 크레딧 위원회 10문
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "Analyst·Associate가 배워야 할 5가지 교훈" : "5 Lessons for Analysts and Associates"}
            </h2>

            <div className="space-y-4 mb-8">
              {(ko ? [
                {
                  num: "1",
                  title: "현재 스냅샷이 아닌 3~5년 시나리오",
                  body: "딜 시점의 좋은 숫자보다 만기 시점의 리파이낸싱 가능성이 더 중요합니다. 2005년 Toys’R’Us의 EBITDA는 $1.1B이었지만, 2015년엔 $0.4B 이하였습니다. DCF에 5년 후 산업 변화를 반영했다면 결론이 달랐을 것입니다.",
                },
                {
                  num: "2",
                  title: "Exit 경로의 명확성이 핵심 변수",
                  body: "'레버드론 시장은 항상 열려있을 것'은 가정이 아니라 리스크입니다. ARM은 IPO라는 날짜가 확정된 Exit이 있었고, Toys’R’Us는 '시장이 좋을 것'이라는 가정에만 의존했습니다. Exit 경로가 2개 이상인지를 항상 확인하십시오.",
                },
                {
                  num: "3",
                  title: "Fixed Cost vs Variable Cost 업종 분석",
                  body: "오프라인 소매, 항공, 병원처럼 Fixed Cost가 높은 업종은 매출 -20%에 EBITDA가 -50~60% 폭락합니다. IM 재무 모델에 Operating Leverage 계수를 반드시 명시하고, 매출 하락 시나리오에서 EBITDA 민감도를 테이블로 보여줘야 합니다.",
                },
                {
                  num: "4",
                  title: "Cov-Lite는 단기 수익을 위한 장기 감시 포기",
                  body: "Cov-Lite는 스폰서 요구에 따른 협상 결과지만, 은행 입장에서는 조기경보 시스템을 포기하는 선택입니다. 최소한 RCF 인출 조건으로 Springing Covenant를 협상하거나, 정기 재무보고 조건을 강화하는 대안 조치를 확보해야 합니다.",
                },
                {
                  num: "5",
                  title: "산업 혁신 리스크: '5년 전엔 없었던 경쟁자'를 모델에",
                  body: "2005년 IM에서 Amazon은 각주 수준이었습니다. 훈련된 Analyst는 '지금은 작지만 CAGR이 40%면 5년 후 어떻게 되나?'를 시나리오로 만들어야 합니다. Platform 경쟁, AI 대체, 규제 환경 변화를 IM Risk Factor에서 정량적으로 다뤄야 합니다.",
                },
              ] : [
                {
                  num: "1",
                  title: "Model the 3-to-5-Year Scenario, Not Just Today's Snapshot",
                  body: "Refinancing viability at maturity matters more than strong numbers at close. Toys’R’Us EBITDA was $1.1B in 2005 and below $0.4B by 2015. A DCF model incorporating industry disruption over five years would have reached a very different conclusion.",
                },
                {
                  num: "2",
                  title: "Exit Path Clarity is a Primary Variable",
                  body: "'The leveraged loan market will always be accessible' is a risk, not an assumption. ARM had a dated IPO exit. Toys’R’Us had only the hope that market conditions would remain favorable. Always confirm that at least two independent exit paths exist.",
                },
                {
                  num: "3",
                  title: "Fixed vs Variable Cost Industry Analysis",
                  body: "Industries with high fixed costs — offline retail, airlines, hospitals — see EBITDA fall 50–60% on a 20% revenue decline. Financial models must include an explicit operating leverage coefficient and a table showing EBITDA sensitivity to revenue downside scenarios.",
                },
                {
                  num: "4",
                  title: "Cov-Lite Trades Long-Term Monitoring for Short-Term Economics",
                  body: "Cov-Lite reflects sponsor negotiating power, but from the bank's perspective it means surrendering the early warning system. At minimum, negotiate a springing maintenance covenant tied to RCF utilization, or strengthen regular financial reporting requirements as a substitute monitoring mechanism.",
                },
                {
                  num: "5",
                  title: "Innovation Risk: Model 'Competitors That Didn't Exist 5 Years Ago'",
                  body: "Amazon was a footnote in the 2005 IM. A trained analyst asks: 'It's small now, but at 40% CAGR, what does the market look like in five years?' Platform disruption, AI substitution, and regulatory shifts must be addressed quantitatively in the IM Risk Factors — not dismissed with a sentence.",
                },
              ]).map((l) => (
                <motion.div
                  key={l.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: Number(l.num) * 0.06, ease: EASE }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-extrabold text-white"
                    style={{ background: ACCENT }}
                  >
                    {l.num}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">{l.title}</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{l.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <PracticeBox title={ko ? "MD 관점 — Credit Committee에서 물어볼 10가지 질문" : "MD View — 10 Questions to Ask in Credit Committee"}>
              {ko
                ? <ol className="space-y-2">
                    {[
                      "리파이낸싱 경로가 2~3개 이상 있는가? (IPO, 자산매각, 전략적 투자자 등)",
                      "온라인/디지털 침식 시나리오는 5년 후 기준으로 모델에 반영했는가?",
                      "Cov-Lite라면 어떤 조기경보 메커니즘을 대체로 사용하는가? (Springing Covenant, 정기 리포팅 등)",
                      "스폰서가 필요 시 추가 자본 투입 의사와 능력이 있는가?",
                      "EBITDA Addback이 Recurring vs Non-recurring 구분이 명확한가?",
                      "Lease-Adjusted Leverage는 얼마인가? (IFRS 16 or 8× Rent 기준)",
                      "주요 고객 상위 5개의 매출 집중도는? 계약 갱신 시점은?",
                      "금리가 200bps 추가 상승 시 FCCR(Fixed Charge Coverage Ratio)은 어떻게 변하나?",
                      "최악 청산 시나리오에서 담보 자산 회수 가능 금액은? LTV는 몇 %인가?",
                      "이 딜을 거절할 경우 관계 손실(미래 수수료 기회비용)은 얼마로 추정하는가?",
                    ].map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px]">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-extrabold text-white flex items-center justify-center" style={{ background: ACCENT }}>
                          {i + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{q}</span>
                      </li>
                    ))}
                  </ol>
                : <ol className="space-y-2">
                    {[
                      "Are there 2–3 independent refinancing paths? (IPO, asset sale, strategic investor, etc.)",
                      "Have online/digital erosion scenarios been modeled on a 5-year forward basis?",
                      "If Cov-Lite, what substitute early warning mechanisms are in place? (Springing covenant, enhanced reporting, etc.)",
                      "Does the sponsor have the willingness and capacity to inject additional equity if needed?",
                      "Is the EBITDA addback split clearly between recurring and non-recurring items?",
                      "What is lease-adjusted leverage? (IFRS 16 or 8× rent capitalization basis)",
                      "What is the revenue concentration of the top 5 customers? When do contracts expire?",
                      "If rates rise 200bps, how does the Fixed Charge Coverage Ratio change?",
                      "In a liquidation scenario, what is the recoverable collateral value? What is the implied LTV?",
                      "If this deal is passed, what is the estimated relationship revenue loss (future fee opportunity cost)?",
                    ].map((q, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px]">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-extrabold text-white flex items-center justify-center" style={{ background: ACCENT }}>
                          {i + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{q}</span>
                      </li>
                    ))}
                  </ol>
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
              {SYNDLOAN_SERIES.slice(0, 4).map((ch) => (
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
                "LSEG LPC (2023). ARM Holdings Syndicated Loan Transaction Summary.",
                "S&P Global Market Intelligence (2023). Leveraged Loan Review: ARM Holdings Bridge Financing.",
                "Moody's Investors Service (2022). Annual Default Study: Corporate Default and Recovery Rates.",
                "S&P LCD (2018). Toys’R’Us Bankruptcy Post-Mortem: Leveraged Loan Market Implications.",
                "Fitch Ratings (2023). Cov-Lite Prevalence and Early Warning Risk in Leveraged Loans.",
                "Bank for International Settlements (2023). Leveraged Finance: Risk Monitoring and Covenant Analysis.",
                "LMA (2022). Guide to Leveraged Loan Documentation: Covenants and Events of Default.",
                "Financial Times (2017). Toys R Us Bankruptcy: A Warning Sign for Leveraged Buyouts.",
              ].map((ref, i) => (
                <li key={i}>[{i + 1}] {ref}</li>
              ))}
            </ol>
          </motion.section>

          {/* ── 딜 아카이브 연계 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
              {ko ? "딜 아카이브 — 신디론 실전 케이스" : "Deal Archive — Syndicated Loan in Action"}
            </h2>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-4">
              {ko
                ? "이 챕터에서 배운 개념이 실제 딜에서 어떻게 작동했는지 확인하세요."
                : "See how the concepts in this chapter played out in real deals."}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  slug: "bayer-monsanto",
                  badge: ko ? "신디케이티드론 브리지" : "Syndicated Bridge",
                  title: ko ? "바이엘 × 몬산토" : "Bayer × Monsanto",
                  desc: ko
                    ? "역사상 최대 IG 브리지론 €577억 — 7개 주선은행 + 18개월 리파이낸싱 로드맵"
                    : "Largest-ever IG bridge loan €57.7B — 7 arrangers + 18-month refinancing roadmap",
                  year: "2018",
                },
              ].map((d) => (
                <Link key={d.slug} href={`/deals/${d.slug}`}>
                  <div className="group flex gap-3 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800 bg-cyan-50/40 dark:bg-cyan-900/10 hover:border-cyan-400 dark:hover:border-cyan-600 hover:shadow-sm transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#10384F] flex items-center justify-center">
                      <span className="text-white text-[9px] font-black">BAYER</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase">{d.badge}</span>
                        <span className="text-[10px] text-gray-400">{d.year}</span>
                      </div>
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

          <ShareButtons title={ko ? concept.title : (concept.titleEn || concept.title)} />

        </div>
      </main>
      <Footer />
    </>
  );
}
