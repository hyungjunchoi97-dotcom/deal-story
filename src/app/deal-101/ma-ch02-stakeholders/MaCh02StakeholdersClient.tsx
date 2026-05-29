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

// ── Advisor 도감 ─────────────────────────────────────────────────────
const ADVISORS = [
  {
    key: "ib",
    koRole: "IB (M&A Advisor)",
    enRole: "IB (M&A Advisor)",
    color: "#3b82f6",
    koOutput: "전체 process · Valuation · IM/CIM · 협상 리딩",
    enOutput: "Overall process · valuation · IM/CIM · negotiation lead",
    koWhen: "Week 0 ~ Week 30 (풀 액티브)",
    enWhen: "Week 0 ~ Week 30 (full-active)",
    koInterface: "Sole point of contact between client과 모든 advisor",
    enInterface: "Sole point of contact between client and every other advisor",
    firms: "Goldman Sachs · Morgan Stanley · JPM · Lazard · Evercore · Centerview · PJT",
    koRisk: "전체 process 통제 실패 — 한 advisor의 지연이 deal 전체를 흔든다",
    enRisk: "Loss of process control — one advisor's delay can disrupt the whole deal",
  },
  {
    key: "fas",
    koRole: "회계 FAS (Financial Advisory Services)",
    enRole: "Accounting FAS",
    color: "#8b5cf6",
    koOutput: "FDD report (QoE · NWC · Net debt 검증) · Adjusted EBITDA",
    enOutput: "FDD report (QoE · NWC · Net debt) · Adjusted EBITDA",
    koWhen: "Sell-side: W2-6 (Vendor DD) / Buy-side: W11-18",
    enWhen: "Sell-side: W2-6 (Vendor DD) / Buy-side: W11-18",
    koInterface: "IB가 결과를 받아 Valuation에 반영, buyer 자문 FAS와 직접 협상",
    enInterface: "IB consumes outputs into valuation; talks directly to buyer's FAS",
    firms: "Deloitte · PwC · EY · KPMG (Big 4)",
    koRisk: "EBITDA add-back 협상에서 IB가 발화점 모르면 가격이 흔들림",
    enRisk: "If IB doesn't see what's negotiable in add-backs, price moves against them",
  },
  {
    key: "consulting",
    koRole: "전략 컨설팅 (CDD)",
    enRole: "Strategy Consultants (CDD)",
    color: "#10b981",
    koOutput: "Commercial DD report · Market sizing · 매출 projection · Synergy validation",
    enOutput: "Commercial DD report · market sizing · revenue projection · synergy validation",
    koWhen: "주로 Buy-side: W11-18 (Final bid 전 완성)",
    enWhen: "Mostly Buy-side: W11-18 (complete before final bid)",
    koInterface: "Buy-side IB가 valuation 가정의 evidence로 활용",
    enInterface: "Buy-side IB uses outputs as evidence for valuation assumptions",
    firms: "McKinsey · BCG · Bain (MBB) · L.E.K. · Oliver Wyman · OC&C",
    koRisk: "Market sizing이 inflated되면 revenue 가정 무리 → final bid overpay",
    enRisk: "Inflated market sizing leads to aggressive revenue assumptions → overpaying",
  },
  {
    key: "law",
    koRole: "법무법인 (LDD + SPA)",
    enRole: "Law Firm (LDD + SPA)",
    color: "#f59e0b",
    koOutput: "LDD report (계약·소송·IP·규제 review) · SPA 작성·협상",
    enOutput: "LDD report (contracts · litigation · IP · regulation) · SPA drafting / negotiation",
    koWhen: "W3-6 (VDR setup) · W11-22 (DD + SPA)",
    enWhen: "W3-6 (VDR setup) · W11-22 (DD + SPA)",
    koInterface: "IB와 함께 SPA 핵심 조항 협상. Closing mechanics 전담",
    enInterface: "Co-negotiates SPA core terms with IB. Owns closing mechanics",
    firms: "Skadden · Cravath · Wachtell · Sullivan & Cromwell · Simpson Thacher · Kirkland & Ellis · Latham & Watkins · Paul Weiss",
    koRisk: "SPA representation 조항 한 줄이 closing 후 1년 동안 가격을 흔든다",
    enRisk: "A single rep & warranty clause can swing price for a year after closing",
  },
  {
    key: "lenders",
    koRole: "Lender / 인수금융 (Buy-side만)",
    enRole: "Lenders / Acquisition Finance (Buy-side only)",
    color: "#f43f5e",
    koOutput: "Debt commitment letter · Term sheet · Final credit agreement",
    enOutput: "Debt commitment letter · term sheet · final credit agreement",
    koWhen: "PE buyer: W6-22 (IOI에 commitment letter 첨부 필수)",
    enWhen: "PE buyer: W6-22 (commitment letter required with IOI)",
    koInterface: "Buy-side IB가 lender와 협상해 financing 구조 짠 후 PE에 제시",
    enInterface: "Buy-side IB negotiates with lenders, structures financing, presents to PE",
    firms: "JPM · BofA · Citi · Wells Fargo · Mizuho · Mitsubishi UFJ",
    koRisk: "Financing 못 받으면 IOI 가격이 비현실적이 됨",
    enRisk: "Without financing, the IOI price becomes unrealistic",
  },
];

// ── IB House Types (the M&A advisor landscape) ───────────────────────
const IB_HOUSES = [
  {
    key: "big4",
    koTier: "Big 4 Corporate Finance",
    enTier: "Big 4 Corporate Finance",
    color: "#8b5cf6",
    firms: "Deloitte CF · PwC Deals · EY-Parthenon · KPMG CF",
    koSweet: "$20-200M, PE portfolio exit, carve-out / divestiture",
    enSweet: "$20-200M, PE portfolio exits, carve-outs / divestitures",
    koEdge: "Audit · Tax · FDD · Advisory를 한 firm에서 패키지. PE가 portfolio 30개 회사를 같은 Big 4로 깔아두면 entire lifecycle 효율적. 회계 복잡도 높은 carve-out에서 절대 우위",
    enEdge: "Audit, tax, FDD, advisory bundled in one firm. PE funds running 30+ portfolio companies through the same Big 4 keep the entire lifecycle efficient. Strong advantage on accounting-complex carve-outs",
    koLimit: "SOX 독립성 — audit client에 대해서는 M&A advisory 금지. Public 대기업은 거의 다 audit relationship에 막힘",
    enLimit: "SOX independence — barred from advising audit clients on M&A. Most public large-caps are locked out due to existing audit relationships",
    koReal: "PE 펀드가 $80M SaaS 회사 매각 → Deloitte CF가 sell-side + FDD + tax DD 한 번에",
    enReal: "PE selling an $80M SaaS company → Deloitte CF runs sell-side + FDD + tax DD as a single mandate",
  },
  {
    key: "mm",
    koTier: "Mid-Market Boutiques",
    enTier: "Mid-Market Boutiques",
    color: "#10b981",
    firms: "Houlihan Lokey · Lincoln International · Harris Williams · William Blair · Raymond James · Piper Sandler · Baird",
    koSweet: "$100-500M, sector-focused MM sell-side",
    enSweet: "$100-500M, sector-focused MM sell-side",
    koEdge: "Sector expertise + 두꺼운 PE network at MM. Sell-side process를 BB보다 효율적으로 굴림. Houlihan Lokey는 fairness opinion 세계 1위 (20년+) + restructuring 강자",
    enEdge: "Sector expertise + deep PE network at the MM level. Runs sell-side processes more efficiently than BBs at this size. Houlihan Lokey holds the #1 global fairness opinion ranking for 20+ years and dominates restructuring",
    koLimit: "Cross-border 제한적 (해외 office 적음). 자체 financing arm 없음. Mega-deal advisory 안 함",
    enLimit: "Limited cross-border (sparse overseas offices). No financing arm. Won't compete for mega-deals",
    koReal: "PE가 $250M industrial company 매각 → Harris Williams가 sell-side. BB는 fee가 너무 작아 안 받음",
    enReal: "PE selling a $250M industrial → Harris Williams runs sell-side. BBs decline because the fee is too small",
  },
  {
    key: "senior",
    koTier: "Senior Banker Boutiques",
    enTier: "Senior Banker Boutiques",
    color: "#f59e0b",
    firms: "Centerview · PJT Partners · Moelis · Evercore · Greenhill · Lazard · Guggenheim",
    koSweet: "$1B+, board fairness opinion, conflict-free 전략 advisory",
    enSweet: "$1B+, board fairness opinions, conflict-free strategic advisory",
    koEdge: "Independence (no underwriting/trading conflicts) + MD-level attention. 각자 specialty 명확 — Centerview = 헬스케어 (Allergan/Pfizer), Evercore = restructuring + advisory, PJT = restructuring (BX에서 spin-off), Moelis = sponsor coverage, Lazard = European cross-border",
    enEdge: "Independence (no underwriting/trading conflicts) + MD-level attention. Each has a clear specialty — Centerview = healthcare (Allergan/Pfizer), Evercore = restructuring + advisory, PJT = restructuring (spun out of Blackstone), Moelis = sponsor coverage, Lazard = European cross-border",
    koLimit: "No financing arm — debt commitment letter 못 제공. ECM/DCM 없음. Balance sheet 없음",
    enLimit: "No financing arm — can't provide debt commitment letters. No ECM/DCM. No balance sheet",
    koReal: "Public company가 hostile bid 받음 → Centerview를 board advisor로 — BB는 underwriting client일 수 있어 conflict",
    enReal: "Public company receives hostile bid → board hires Centerview as advisor — BBs might be conflicted as underwriting clients",
  },
  {
    key: "bb",
    koTier: "Bulge Brackets",
    enTier: "Bulge Brackets",
    color: "#3b82f6",
    firms: "Goldman Sachs · Morgan Stanley · JPMorgan · BofA · Citi · Barclays · UBS · Deutsche Bank",
    koSweet: "$2B+ mega deals, cross-border, financing 동반 deal",
    enSweet: "$2B+ mega deals, cross-border, financing-heavy transactions",
    koEdge: "Full-service — advisory + acquisition financing + ECM/DCM + trading + research. GS는 M&A volume 20년 1위, MS는 tech/cross-border (특히 Asia), JPM은 advisory + financing 통합이 최강. $10B+ deal 자체가 BB만 가능 — 작은 firm은 commitment letter 못 씀",
    enEdge: "Full-service — advisory + acquisition financing + ECM/DCM + trading + research. GS has led global M&A volume for 20 years; MS is strongest in tech/cross-border (especially Asia); JPM has the best advisory + financing integration. $10B+ deals are effectively BB-only — smaller firms can't write the commitment letters",
    koLimit: "Conflicts across business lines (advisory vs prop trading vs underwriting). Bureaucracy. MD attention이 senior boutique보다 약함 — 한 MD가 동시에 5-7개 mandate",
    enLimit: "Conflicts across business lines (advisory vs prop trading vs underwriting). Bureaucracy. MD attention is thinner than senior boutiques — one MD typically juggles 5-7 mandates",
    koReal: "Microsoft가 Activision $69B 인수 → GS가 advisor + ECM이 financing 동시 → 부티크는 이 size 불가",
    enReal: "Microsoft acquiring Activision for $69B → GS as advisor with simultaneous financing through ECM → no boutique can match this scale",
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

            <motion.div variants={fadeUp(0.1)} className="space-y-3">
              {ADVISORS.map((a, i) => (
                <motion.div
                  key={a.key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900"
                >
                  <div className="px-5 py-3 flex items-center gap-3" style={{ background: `${a.color}10` }}>
                    <div className="w-2 h-8 rounded-full" style={{ background: a.color }} />
                    <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 flex-1">{ko ? a.koRole : a.enRole}</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "Deliverable" : "Deliverable"}</p>
                      <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-snug">{ko ? a.koOutput : a.enOutput}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "투입 시점" : "When they're in"}</p>
                        <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? a.koWhen : a.enWhen}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "IB와의 인터페이스" : "Interface with IB"}</p>
                        <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? a.koInterface : a.enInterface}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "대표 firm" : "Representative firms"}</p>
                      <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-snug font-mono">{a.firms}</p>
                    </div>
                    <div className="rounded-lg p-3 bg-rose-50/60 dark:bg-rose-950/20 border-l-2 border-rose-400">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-1">{ko ? "IB가 놓치면 — risk" : "Risk if IB drops the ball"}</p>
                      <p className="text-[12px] text-rose-900 dark:text-rose-100 leading-snug">{ko ? a.koRisk : a.enRisk}</p>
                    </div>
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
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-6">
              <p>{ko
                ? "§ 3 에서 'IB'를 하나로 묶었지만, 실제 M&A advisor 시장은 4개 type으로 갈라집니다. 각자 sweet spot이 명확하고, 그 영역 밖에서는 거의 경쟁하지 않습니다. $80M PE portfolio exit과 $30B mega-merger는 사실상 다른 firm 카테고리가 일합니다."
                : "§ 3 lumped 'IB' into one bucket, but the actual M&A advisor market splits into four types. Each has a clear sweet spot and barely competes outside it. An $80M PE portfolio exit and a $30B mega-merger are run by effectively different firm categories."}</p>
              <p>{ko
                ? "특히 미국 시장에서 흥미로운 부분 — Big 4 회계법인이 M&A advisory를 적극적으로 합니다. Deloitte Corporate Finance LLC, PwC Deals, EY-Parthenon, KPMG Corporate Finance — 모두 진짜 advisory 부서이고, MM 영역에서 league table 상위권에 올라옵니다. 단 SOX 독립성 규정 때문에 audit client에 대해서는 M&A advisory 못 합니다 (이 제약이 Big 4를 public 대기업 영역에서 배제)."
                : "One quirk of the US market — Big 4 accounting firms aggressively offer M&A advisory. Deloitte Corporate Finance LLC, PwC Deals, EY-Parthenon, KPMG Corporate Finance — all run real advisory arms and crack league tables at the MM level. The catch: SOX independence bars them from advising audit clients, which excludes most public large-caps."}</p>
            </motion.div>

            {/* House cards */}
            <motion.div variants={fadeUp(0.15)} className="space-y-3">
              {IB_HOUSES.map((h, i) => (
                <motion.div
                  key={h.key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900"
                >
                  <div className="px-5 py-3 flex items-center gap-3" style={{ background: `${h.color}10` }}>
                    <div className="w-2 h-8 rounded-full" style={{ background: h.color }} />
                    <div className="flex-1">
                      <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100">{ko ? h.koTier : h.enTier}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono mt-0.5">{h.firms}</p>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "Sweet spot" : "Sweet spot"}</p>
                        <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{ko ? h.koSweet : h.enSweet}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">{ko ? "실제 케이스" : "Real example"}</p>
                        <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-snug">{ko ? h.koReal : h.enReal}</p>
                      </div>
                    </div>
                    <div className="rounded-lg p-3 bg-emerald-50/60 dark:bg-emerald-950/20 border-l-2 border-emerald-400">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-1">{ko ? "Edge — 왜 이 영역에서 강한가" : "Edge — why they dominate this slot"}</p>
                      <p className="text-[12px] text-emerald-900 dark:text-emerald-100 leading-snug">{ko ? h.koEdge : h.enEdge}</p>
                    </div>
                    <div className="rounded-lg p-3 bg-rose-50/60 dark:bg-rose-950/20 border-l-2 border-rose-400">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-1">{ko ? "Limitation — 못 하는 것" : "Limitation — what they can't do"}</p>
                      <p className="text-[12px] text-rose-900 dark:text-rose-100 leading-snug">{ko ? h.koLimit : h.enLimit}</p>
                    </div>
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

            {/* Industry specialist note */}
            <motion.div variants={fadeUp(0.25)} className="mt-5 rounded-xl p-4 bg-gray-50/60 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                {ko ? "+ 한 가지 더 — 산업 specialist boutiques" : "+ One more — industry specialist boutiques"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "FT Partners (fintech), Allen & Company (media), Cain Brothers (healthcare services), Qatalyst Partners (tech sell-side), Robey Warshaw (UK financials) — 자기 sector 안에서는 BB나 senior boutique보다 강함. Qatalyst가 ServiceNow IPO와 Slack/Salesforce sale을 advisor로 한 게 대표적. 산업 깊이가 worth premium일 때 선택."
                  : "FT Partners (fintech), Allen & Company (media), Cain Brothers (healthcare services), Qatalyst Partners (tech sell-side), Robey Warshaw (UK financials) — within their vertical, they outperform BBs and senior boutiques. Qatalyst advising on the ServiceNow IPO and the Slack/Salesforce sale is the canonical example. Pick them when sector depth justifies the premium."}
              </p>
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

          {/* § 6 — Buyer side mirror */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Buyer side — 같은 cast가 거울처럼" : "Buyer side — the cast mirrored"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Buyer side에도 같은 5개 advisor가 있습니다. Buyer's IB · FAS (Buy-side FDD) · Consulting (CDD) · 법무 · Lender. 차이점은 buyer가 lender를 끌어와야 한다는 것 (Strategic은 balance sheet, PE sponsor는 debt commitment). Sell-side advisor는 negotiation 과정에서 buyer side의 모든 advisor counterpart와 직접 협상합니다."
                : "The buyer side fields the same 5 advisors: buyer's IB, FAS (buy-side FDD), consultants (CDD), law firm, lenders. The difference is that buyers need to bring in lenders (strategics use balance sheet; PE sponsors need debt commitments). During negotiation, sell-side advisors deal directly with each buyer-side counterpart."}</p>
              <p>{ko
                ? "Buy-side에서 IB의 역할도 거의 같습니다. Target identification + DD orchestration + valuation + 협상 + closing. 다만 process가 reverse입니다 — sell-side가 만든 CIM·VDR을 받아서 평가하고, Vendor DD report를 검증하고, IOI를 작성하고, final bid 결정."
                : "Buy-side IB plays a nearly identical role: target identification, DD orchestration, valuation, negotiation, closing. The process just runs in reverse — receive the sell-side's CIM and VDR, validate the Vendor DD report, submit IOIs, decide the final bid."}</p>
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
