/**
 * M&A 시리즈 Ch.2 — 이해관계자 도감
 *
 * Sections:
 *  § 1 한 딜에 평균 8개 firm이 굴러간다
 *  § 2 IB Lead = orchestra conductor
 *  § 3 4개 advisor 도감 (FAS · Consulting · Law · Lenders)
 *  § 4 클라이언트 side (CEO · CFO · Board)
 *  § 5 Buyer side 거울상
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MA_CHAPTERS, getMaChapterBySlug, getMaSeriesNav } from "@/data/ma-series";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const SLUG = "ma-ch02-stakeholders";
const ACCENT = "#3b82f6";

// ── Advisor 도감 — 간략 ──────────────────────────────────────────────
const ADVISORS = [
  {
    key: "ib",
    koRole: "IB (M&A Advisor)",
    enRole: "IB (M&A Advisor)",
    color: "#3b82f6",
    koJob: "전체 process 리딩, valuation, IM/CIM 작성, 협상",
    enJob: "Leads the overall process, valuation, IM/CIM, and negotiation",
    firms: "Goldman Sachs · Morgan Stanley · JPMorgan · Lazard · Evercore · Centerview",
  },
  {
    key: "fas",
    koRole: "회계 FAS (Financial Advisory)",
    enRole: "Accounting FAS",
    color: "#8b5cf6",
    koJob: "재무 실사 (FDD) — Adjusted EBITDA, NWC, Net Debt 검증",
    enJob: "Financial DD — validates Adjusted EBITDA, NWC, Net Debt",
    firms: "Deloitte · PwC · EY · KPMG",
  },
  {
    key: "consulting",
    koRole: "전략 컨설팅 (CDD)",
    enRole: "Strategy Consultants (CDD)",
    color: "#10b981",
    koJob: "상업 실사 — 시장 사이즈, 매출 projection, synergy 검증",
    enJob: "Commercial DD — market sizing, revenue projection, synergy validation",
    firms: "McKinsey · BCG · Bain · L.E.K. · Oliver Wyman",
  },
  {
    key: "law",
    koRole: "법무법인 (LDD + SPA)",
    enRole: "Law Firm (LDD + SPA)",
    color: "#f59e0b",
    koJob: "법률 실사 + SPA 작성·협상 + Closing mechanics",
    enJob: "Legal DD + SPA drafting & negotiation + closing mechanics",
    firms: "Skadden · Cravath · Wachtell · Sullivan & Cromwell · Kirkland · Latham",
  },
  {
    key: "lenders",
    koRole: "Lender (Buy-side)",
    enRole: "Lender (Buy-side)",
    color: "#f43f5e",
    koJob: "인수금융 — Debt commitment letter, term sheet, credit agreement",
    enJob: "Acquisition financing — debt commitment letter, term sheet, credit agreement",
    firms: "JPM · BofA · Citi · Wells Fargo",
  },
];

// ── IB House Types — 간략 ────────────────────────────────────────────
const IB_HOUSES = [
  {
    key: "big4",
    koTier: "Big 4 Corporate Finance",
    enTier: "Big 4 Corporate Finance",
    color: "#8b5cf6",
    koSize: "$20-200M",
    enSize: "$20-200M",
    koJob: "Audit·Tax·FDD·Advisory 패키지. PE portfolio exit·carve-out 중심",
    enJob: "Audit, tax, FDD, and advisory bundled. Focused on PE portfolio exits and carve-outs",
    firms: "Deloitte CF · PwC Deals · EY-Parthenon · KPMG CF",
  },
  {
    key: "mm",
    koTier: "Mid-Market Boutiques",
    enTier: "Mid-Market Boutiques",
    color: "#10b981",
    koSize: "$100-500M",
    enSize: "$100-500M",
    koJob: "Sector-focused MM sell-side advisory. Houlihan은 fairness opinion 세계 1위",
    enJob: "Sector-focused MM sell-side advisory. Houlihan ranks #1 globally in fairness opinions",
    firms: "Houlihan Lokey · Lincoln International · Harris Williams · William Blair · Raymond James · Piper Sandler · Baird",
  },
  {
    key: "senior",
    koTier: "Senior Banker Boutiques",
    enTier: "Senior Banker Boutiques",
    color: "#f59e0b",
    koSize: "$1B+",
    enSize: "$1B+",
    koJob: "Independent advisory + MD 직접 attention. Centerview=헬스케어, PJT=restructuring",
    enJob: "Independent advisory with direct MD attention. Centerview=healthcare, PJT=restructuring",
    firms: "Centerview · PJT Partners · Moelis · Evercore · Greenhill · Lazard · Guggenheim",
  },
  {
    key: "bb",
    koTier: "Bulge Brackets",
    enTier: "Bulge Brackets",
    color: "#3b82f6",
    koSize: "$2B+ mega",
    enSize: "$2B+ mega",
    koJob: "Full-service. Advisory + acquisition financing + ECM/DCM. GS는 M&A 20년 1위",
    enJob: "Full-service. Advisory + acquisition financing + ECM/DCM. GS has led M&A for 20 years",
    firms: "Goldman Sachs · Morgan Stanley · JPMorgan · BofA · Citi · Barclays · UBS · Deutsche Bank",
  },
];

// ── House comparison matrix ──────────────────────────────────────────
const HOUSE_MATRIX = [
  { koDim: "Sweet spot deal size", enDim: "Sweet spot deal size",      big4: "$20-200M",     mm: "$100-500M",     senior: "$1B+",                    bb: "$2B+ mega" },
  { koDim: "Financing 제공",        enDim: "Financing offered",        big4: "❌",            mm: "❌",            senior: "❌",                       bb: "✅ Full" },
  { koDim: "FDD 포함",              enDim: "FDD included",             big4: "✅ Package",    mm: "❌ 별도",        senior: "❌ 별도",                   bb: "❌ 별도" },
  { koDim: "Sector coverage",       enDim: "Sector coverage",          big4: "Broad MM",      mm: "Sector deep",    senior: "Specialty per firm",       bb: "Full coverage" },
  { koDim: "MD attention",          enDim: "MD attention",             big4: "Partner-led",   mm: "Senior-led",     senior: "★ Maximum",                bb: "Diluted (5-7 deals)" },
  { koDim: "Conflict",              enDim: "Conflict exposure",        big4: "SOX 제약",       mm: "Low",            senior: "Minimal",                  bb: "High (trading/UW)" },
];

// ── Client side ──────────────────────────────────────────────────────
const CLIENT_SIDE = [
  {
    koRole: "CEO",
    enRole: "CEO",
    koJob: "전체 의사결정자. 매각 결심 · advisor 선정 · final 가격 승인",
    enJob: "Final decision-maker. Decides to sell · picks advisors · approves final price",
    koWhen: "Mandate 결정 · Mgmt presentation (W11) · Final 협상 (W18-22)",
    enWhen: "Mandate decision · mgmt presentation (W11) · final negotiation (W18-22)",
    koTip: "IB와 chemistry가 핵심 — '딜 동안 50번 통화할 사람'",
    enTip: "Chemistry with IB is the make-or-break — 'someone you'll call 50× during the deal'",
  },
  {
    koRole: "CFO",
    enRole: "CFO",
    koJob: "재무 자료 owner. FDD respond · Projection 작성 · NWC normalization",
    enJob: "Owns financial data. Responds to FDD · builds projections · normalizes NWC",
    koWhen: "W0 ~ W30 풀 액티브 — IB의 가장 잦은 카운터파트",
    enWhen: "Full-active W0 ~ W30 — IB's most frequent counterpart",
    koTip: "CFO가 진짜 일하는 사람. CEO에 보고 전 모든 숫자 검증",
    enTip: "CFO does the actual work. Validates every number before CEO sees it",
  },
  {
    koRole: "Board",
    enRole: "Board",
    koJob: "공식 의사결정 권한 (sell-side mandate 승인 · final bid 승인)",
    enJob: "Holds formal decision authority (approves mandate · approves final bid)",
    koWhen: "월 1-2회 board meeting + sign-off 2-3회 (W0, W11, W22)",
    enWhen: "Monthly board meetings + 2-3 sign-offs (W0, W11, W22)",
    koTip: "Public target은 board의 fiduciary duty가 모든 판단의 기준",
    enTip: "For public targets, the board's fiduciary duty governs every call",
  },
];

// ── Sell-side vs Buy-side comparison ─────────────────────────────────
const SIDE_COMPARISON = [
  { koDim: "클라이언트",           enDim: "Client",                    sellKo: "매도자 (CEO·CFO·Board)",                         sellEn: "Seller (CEO/CFO/Board)",                         buyKo: "인수자 (Strategic 또는 PE)",                         buyEn: "Acquirer (Strategic or PE)" },
  { koDim: "목표",                 enDim: "Goal",                      sellKo: "가격 최대화 + 확실한 closing",                    sellEn: "Maximize price + secure closing",                buyKo: "타겟 발굴 + 합리적 가격에 인수",                      buyEn: "Find target + buy at a fair price" },
  { koDim: "주요 deliverable",     enDim: "Key deliverables",          sellKo: "Teaser · CIM · Mgmt presentation · VDR · Process letter", sellEn: "Teaser · CIM · Mgmt presentation · VDR · Process letter", buyKo: "IOI · Buy-side DD · Final bid · Mark-up SPA",       buyEn: "IOI · Buy-side DD · Final bid · Mark-up SPA" },
  { koDim: "Process role",         enDim: "Process role",              sellKo: "Auction 진행 (run the process)",                 sellEn: "Run the auction",                                 buyKo: "Auction에 참여 (compete in the process)",            buyEn: "Compete in the auction" },
  { koDim: "DD 방향",              enDim: "DD direction",              sellKo: "Vendor DD 발주 후 buyer에게 제공",                sellEn: "Commission Vendor DD, provide to buyers",         buyKo: "본인 비용으로 buy-side DD 풀로 진행",                 buyEn: "Run full buy-side DD at own expense" },
  { koDim: "Financing",            enDim: "Financing",                 sellKo: "필요 없음 (받는 입장)",                          sellEn: "Not needed (you receive funds)",                  buyKo: "Strategic은 balance sheet, PE는 lender commitment",  buyEn: "Strategic uses balance sheet; PE secures lender commitment" },
  { koDim: "Timeline",             enDim: "Timeline",                  sellKo: "Mandate 받은 후 6개월 고정 schedule",             sellEn: "6-month fixed schedule from mandate",             buyKo: "Sell-side process timeline에 맞춰서 reactive",       buyEn: "Reactive — follows the sell-side timeline" },
  { koDim: "수수료 (BB 기준)",     enDim: "Fee (BB benchmark)",        sellKo: "딜 가치의 0.5-1.0%",                              sellEn: "0.5-1.0% of deal value",                          buyKo: "딜 가치의 0.3-0.7% (sell-side보다 낮음)",            buyEn: "0.3-0.7% of deal value (lower than sell-side)" },
  { koDim: "핵심 스킬",            enDim: "Core skill",                sellKo: "가격 최대화 — auction dynamics 설계",             sellEn: "Price maximization — auction design",             buyKo: "가격 규율 — overpay 방지 + synergy 검증",            buyEn: "Pricing discipline — avoid overpay + validate synergy" },
];

// ── Failure modes ─────────────────────────────────────────────────────
const FAILURE_MODES = [
  {
    koTitle: "Advisor 사이 timeline 어긋남",
    enTitle: "Misaligned timelines across advisors",
    koDetail: "FDD가 늦어지면 IB가 Valuation 못 마무리, Law firm은 SPA draft 못 함. 도미노.",
    enDetail: "If FDD slips, IB can't finalize valuation and law firm can't draft SPA. Domino effect.",
  },
  {
    koTitle: "FDD findings가 valuation에 반영 안 됨",
    enTitle: "FDD findings not flowing into valuation",
    koDetail: "Adjusted EBITDA가 IB의 DCF model에 늦게 들어가면 final bid에서 buyer가 가격 후려치기.",
    enDetail: "If adjusted EBITDA lands late in IB's DCF model, buyers will push down final bids.",
  },
  {
    koTitle: "클라이언트가 advisor 추천 무시",
    enTitle: "Client overrides advisor recommendations",
    koDetail: "CEO가 'this buyer는 진지하지 않다' 같은 IB 판단을 무시하고 진행 → 시간·돈 낭비.",
    enDetail: "CEO ignores IB's reads (e.g., 'this buyer isn't serious') and proceeds anyway → wasted time and money.",
  },
  {
    koTitle: "Buyer side dynamics 오독",
    enTitle: "Misreading buyer-side dynamics",
    koDetail: "Buyer board의 의사결정 구조를 모르면 negotiating leverage 잘못 사용 → deal collapse.",
    enDetail: "Without reading the buyer's board decision-making, negotiation leverage gets misused → deal collapse.",
  },
];

export default function MaCh02StakeholdersClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const { prev, next } = getMaSeriesNav(SLUG);
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
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "M&A 시리즈 · Ch.2" : "M&A Series · Ch.2"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              {ko ? "M&A 시리즈" : "M&A Series"} · Ch.2
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {chapter.readingMinutes}{ko ? "분" : " min"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-10">
          <div className="flex gap-1.5 flex-wrap">
            {MA_CHAPTERS.map((ch) => {
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

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">

          {/* § 1 — The Cast */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "한 딜에 평균 8개 firm이 굴러간다" : "An average deal runs through ~8 firms"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Mid-cap M&A 한 건이 굴러가려면 양쪽 합쳐 보통 7-9개의 firm이 동시에 일합니다. Sell-side에 IB·회계법인·법무법인·컨설팅 4개, Buy-side에 같은 4개 + lender. 여기에 클라이언트 (CEO·CFO·Board) 까지. 모두 시간당 $300-1,500 fee를 받고, 모두 자기 deliverable에 대한 책임을 집니다."
                : "A mid-cap M&A typically runs 7-9 firms in parallel across both sides. Sell-side: IB, accounting, law firm, consultants (4). Buy-side: same 4 + lenders. Plus the client (CEO/CFO/board). All billing $300-1,500/hour, all accountable for their own deliverables."}</p>
              <p>{ko
                ? "그런데 이 firms은 서로 직접 이야기하지 않습니다. 거의 모든 커뮤니케이션이 IB Lead를 거칩니다. FDD report를 받아서 valuation에 반영, LDD findings를 받아서 SPA 협상 input으로 사용, CDD를 받아서 buyer 측에 evidence로 제시. IB가 hub이고 다른 advisor들은 spoke입니다."
                : "But these firms don't talk to each other directly. Almost every communication routes through the IB Lead. Take in FDD reports → reflect in valuation. Take in LDD findings → feed into SPA negotiation. Take in CDD → use as evidence to the buyer side. IB is the hub, others are the spokes."}</p>
            </motion.div>
          </motion.section>

          {/* § 2 — IB Lead = conductor */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB Lead = 오케스트라 지휘자" : "IB Lead = orchestra conductor"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "M&A를 처음 접한 사람이 가장 헷갈리는 부분 — 'IB는 실제로 뭘 만드는가?' 답은 의외로 적습니다. FDD는 회계법인이, CDD는 컨설팅사가, LDD와 SPA는 법무법인이, 재무 데이터는 client CFO가 만듭니다. IB가 직접 만드는 것은 IM·CIM·process letter·valuation model 정도. 실제 fact를 만드는 사람들이 아니에요."
                : "The single most confusing thing for newcomers — 'what does the IB actually produce?' Surprisingly little. FDD comes from the accounting firm. CDD from consultants. LDD and SPA from the law firm. Financial data from the client's CFO. IB itself only directly produces the IM/CIM, process letter, and valuation model. They're not the fact-makers."}</p>
              <p>{ko
                ? "IB가 진짜 가치를 만드는 곳은 fact를 만드는 게 아니라 fact를 종합하고 협상에 사용하는 데입니다. 회계법인의 EBITDA 조정과 컨설팅의 매출 projection과 법무법인의 contract risk를 합쳐서 buyer가 어떻게 가격을 부르도록 만들 것인가. 이게 오케스트레이션이고, 이게 IB가 가져가는 수수료의 진짜 근거예요."
                : "IB creates real value not by making the facts, but by synthesizing the facts and using them in negotiation. How do you take the accounting firm's EBITDA adjustments, the consultants' revenue projections, and the law firm's contract risk findings — and make the buyer price accordingly? That's the orchestration. That's what justifies the fee."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-5 rounded-2xl p-5 border-l-4 bg-amber-50/40 dark:bg-amber-950/20 border-amber-400 dark:border-amber-700">
              <p className="text-[12px] font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider mb-1.5">
                {ko ? "기억해둘 한 줄" : "One line to remember"}
              </p>
              <p className="text-[14px] text-amber-900 dark:text-amber-100 leading-relaxed">
                {ko
                  ? "IB는 일하는 사람이 아니라, 누가 어떤 일을 언제 해야 하는지 알고 지휘하는 사람이다."
                  : "IB isn't the one doing the work — they're the one who knows who does what, when, and conducts the rest."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 3 — Advisor 도감 */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Advisor 도감 — 5개 firm, 각자 무엇을 하는가" : "Advisor Field Guide — 5 firms, who does what"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="space-y-2.5">
              {ADVISORS.map((a, i) => (
                <motion.div
                  key={a.key}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: EASE }}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-1 self-stretch rounded-full" style={{ background: a.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">{ko ? a.koRole : a.enRole}</p>
                    <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-snug mb-1.5">{ko ? a.koJob : a.enJob}</p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono leading-snug">{a.firms}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* § 4 — IB house types (NEW) */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB advisor의 4가지 type — 회계법인 · MM 부티크 · Senior 부티크 · BB" : "4 types of M&A advisor — Big 4 · MM boutique · Senior boutique · BB"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              <p>{ko
                ? "M&A advisor를 다 'IB'라고 부르지만 실제로는 4가지 type — 회계법인 · MM 부티크 · Senior 부티크 · BB. 각자 sweet spot deal size가 다르고, 그 영역 안에서 주로 경쟁합니다."
                : "Everyone calls them 'IB,' but there are really 4 types — Big 4 · MM boutique · senior boutique · BB. Each has a different sweet spot deal size and competes mostly within that range."}</p>
            </motion.div>

            {/* House cards — simplified */}
            <motion.div variants={fadeUp(0.15)} className="space-y-2.5">
              {IB_HOUSES.map((h, i) => (
                <motion.div
                  key={h.key}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: EASE }}
                  className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-1 self-stretch rounded-full" style={{ background: h.color }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{ko ? h.koTier : h.enTier}</p>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-white" style={{ background: h.color }}>{ko ? h.koSize : h.enSize}</span>
                    </div>
                    <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-snug mb-1.5">{ko ? h.koJob : h.enJob}</p>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono leading-snug">{h.firms}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Comparison matrix */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "한눈에 보는 4 type 비교" : "4 types side by side"}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <th className="text-left px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400">{ko ? "차원" : "Dimension"}</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-violet-700 dark:text-violet-300">Big 4 CF</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-emerald-700 dark:text-emerald-300">MM Boutique</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-amber-700 dark:text-amber-300">Senior Boutique</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-blue-700 dark:text-blue-300">Bulge Bracket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HOUSE_MATRIX.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}>
                        <td className="px-3 py-2.5 font-medium text-gray-800 dark:text-gray-200">{ko ? row.koDim : row.enDim}</td>
                        <td className="px-3 py-2.5 text-gray-700 dark:text-gray-300">{row.big4}</td>
                        <td className="px-3 py-2.5 text-gray-700 dark:text-gray-300">{row.mm}</td>
                        <td className="px-3 py-2.5 text-gray-700 dark:text-gray-300">{row.senior}</td>
                        <td className="px-3 py-2.5 text-gray-700 dark:text-gray-300">{row.bb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

          </motion.section>

          {/* § 5 — Client side */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "클라이언트 side — CEO · CFO · Board" : "Client side — CEO · CFO · Board"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              <p>{ko
                ? "Advisor 5개도 결국은 client 3명 — CEO·CFO·Board — 을 위해 일합니다. 각자 IB와의 관계 방식과 등장 시점이 다릅니다."
                : "All 5 advisors ultimately work for 3 client roles — CEO, CFO, Board. Each has a different relationship pattern with IB and shows up at different times."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="grid sm:grid-cols-3 gap-3">
              {CLIENT_SIDE.map((c, i) => (
                <motion.div key={i} variants={fadeUp(i * 0.05)} className="p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <p className="text-[16px] font-black text-gray-900 dark:text-gray-100 mb-3">{ko ? c.koRole : c.enRole}</p>
                  <div className="space-y-3 text-[12px]">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "역할" : "Role"}</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-snug">{ko ? c.koJob : c.enJob}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "등장 시점" : "When they show up"}</p>
                      <p className="text-gray-600 dark:text-gray-400 leading-snug">{ko ? c.koWhen : c.enWhen}</p>
                    </div>
                    <div className="rounded-lg p-2.5 bg-blue-50/60 dark:bg-blue-950/20 border-l-2 border-blue-400">
                      <p className="text-[11px] text-blue-900 dark:text-blue-100 leading-snug">{ko ? c.koTip : c.enTip}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* § 6 — Sell vs Buy comparison */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Sell-side vs Buy-side — 한눈에 보는 차이" : "Sell-side vs Buy-side — at a glance"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              <p>{ko
                ? "같은 9단계 process이지만, 매도자 advisor인지 인수자 advisor인지에 따라 일이 완전히 달라집니다. 클라이언트·목표·deliverable·DD 방향·수수료 — 9가지 차원에서 정리."
                : "Same 9-stage process, but seller's advisor vs acquirer's advisor are completely different jobs. Client, goal, deliverables, DD direction, fees — across 9 dimensions."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Sell vs Buy — 9개 차원" : "Sell vs Buy — 9 dimensions"}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <th className="text-left px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 w-32">{ko ? "차원" : "Dimension"}</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-blue-700 dark:text-blue-300">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          Sell-side
                        </span>
                      </th>
                      <th className="text-left px-3 py-2.5 font-semibold text-emerald-700 dark:text-emerald-300">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Buy-side
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIDE_COMPARISON.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}>
                        <td className="px-3 py-3 font-medium text-gray-800 dark:text-gray-200 align-top">{ko ? row.koDim : row.enDim}</td>
                        <td className="px-3 py-3 text-gray-700 dark:text-gray-300 align-top leading-snug">{ko ? row.sellKo : row.sellEn}</td>
                        <td className="px-3 py-3 text-gray-700 dark:text-gray-300 align-top leading-snug">{ko ? row.buyKo : row.buyEn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.section>

          {/* § 7 — Failure modes */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 7</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB 오케스트레이션이 깨지는 4가지 지점" : "4 ways orchestration breaks"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              <p>{ko
                ? "이론적으로는 IB가 hub에서 모든 spoke를 잘 굴리면 되지만, 실무에서 4가지 지점이 자주 깨집니다. Ch.3-6 케이스 챕터에서 각 지점을 실제 딜의 banker POV로 풀어갑니다."
                : "In theory IB just runs the hub and the spokes work. In practice four points break repeatedly. Chapters 3-6 dissect each of these through banker-POV case studies."}</p>
            </motion.div>
            <motion.div variants={fadeUp(0.15)} className="space-y-2">
              {FAILURE_MODES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-white text-[12px] font-black" style={{ background: ACCENT }}>{i + 1}</span>
                  <div className="flex-1">
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? f.koTitle : f.enTitle}</p>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? f.koDetail : f.enDetail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* 한 줄 정리 */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <div className="rounded-2xl p-5 sm:p-6" style={{ border: `1px solid ${ACCENT}40`, background: `${ACCENT}0F` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
              <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
                ? "M&A는 한 사람이 하는 게 아니라 IB·회계·법무·컨설팅·경영진·Board·인수자가 각자 fact를 만들고 협상하는 합주다. IB는 그 가운데서 흐름을 지휘한다."
                : "An M&A deal isn't one person's work — IB, accountants, lawyers, consultants, management, the board, and the buyer each build facts and negotiate. IB conducts the orchestra."}</p>
            </div>
          </motion.section>

          {/* Next chapter preview */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">
                Ch.3 — {ko ? "FDD 실랑이: 1회성 vs 반복적" : "The FDD Fight: one-time vs recurring"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "회계법인 FAS가 만든 Adjusted EBITDA를 가지고 IB와 buyer 자문이 어떻게 실랑이하는지, 실제 글로벌 딜의 banker POV로. 한 항목당 가격이 어떻게 흔들리는지."
                  : "How IB and the buyer's advisor fight over the FAS-produced Adjusted EBITDA, told from a real banker's POV on a global deal. How a single line item moves price."}
              </p>
            </div>
          </motion.section>

          {/* Share */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* Series prev/next */}
          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
