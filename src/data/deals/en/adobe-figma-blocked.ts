/**
 * Adobe × Figma — Blocked Acquisition
 * $20B deal terminated December 2023 after EU & UK antitrust block
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "adobe-figma-blocked",
  title: "Why Regulators Killed Adobe's $20B Figma Deal — A Warning for Big Tech M&A",
  subtitle: "50× ARR Valuation · EU & UK Antitrust Block · $1B Break Fee — The Deal That Changed Regulatory Strategy",
  category: "ma",
  industry: "Software / Design Tools / SaaS",
  country: "United States",
  announcedAt: "2022-09-15",
  announcedDisplay: "September 2022",
  closedDisplay: "Terminated Dec 2023",
  readingMinutes: 12,
  tags: ["Adobe", "Figma", "antitrust", "EU antitrust", "SaaS M&A", "design software", "failed acquisition", "break fee"],
  excerpt:
    "Adobe's $20 billion bid to acquire Figma collapsed in December 2023 after EU and UK regulators concluded the deal would eliminate Adobe's closest competitor in screen design software. Adobe paid Figma a $1 billion termination fee. At 50× ARR, it was the highest-premium SaaS acquisition ever attempted — and a defining case study in how antitrust law is reshaping Big Tech M&A.",

  acquirer: { initials: "ADBE", bg: "bg-red-600", label: "Adobe" },
  target: { initials: "FIG", bg: "bg-violet-600", label: "Figma" },

  background: [
    "Figma was founded in 2012 by Dylan Field and Evan Wallace with a radical idea: a design tool that runs entirely in the browser, enabling real-time multiplayer collaboration on the same file. Unlike Adobe's installed desktop applications, Figma required no download and allowed designers, developers, and product managers to work together simultaneously. This collaborative-first approach rapidly became the industry standard for UI/UX design, directly threatening Adobe's dominance in the creative software market.",
    "Adobe had long dominated the creative software landscape with Photoshop, Illustrator, InDesign, and its own UI/UX tool, Adobe XD. But Figma's growth was relentless: by 2022, Figma's ARR had reached approximately $400 million, growing at roughly 100% year-over-year, and its market share in collaborative UI/UX design was overwhelming. Adobe XD was losing ground fast. For Adobe, Figma was simultaneously its most dangerous competitor and the company it most needed to acquire.",
    "On September 15, 2022, Adobe announced it would acquire Figma for approximately $20 billion — $10 billion in cash and $10 billion in Adobe stock. At the time, Figma employed roughly 1,000 people, making the implied valuation approximately $10 million per employee. More strikingly, the deal valued Figma at roughly 50× its 2022 ARR — the highest ARR multiple ever paid in a major SaaS acquisition. Adobe argued the premium was justified by Figma's exceptional growth trajectory, high net revenue retention, and its potential to become a collaborative platform for the entire product development lifecycle.",
    "The deal immediately drew intense regulatory scrutiny. The European Commission and the UK Competition and Markets Authority (CMA) both focused on the fact that Adobe XD and Figma were the two closest competitors in the 'screen design' software market. Regulators concluded that the acquisition was a horizontal merger that would directly eliminate competition between the two most significant rivals in the space. After 15 months of review, with the EU set to formally block the deal, both Adobe and Figma announced on December 18, 2023 that they were terminating the agreement by mutual consent. Adobe paid Figma the $1 billion termination fee specified in the original merger agreement.",
  ],

  dealSummary: {
    dealValueDisplay: "$20B ($10B cash + $10B ADBE stock)",
    acquirerName: "Adobe Inc. (ADBE)",
    targetName: "Figma, Inc.",
    announcedDisplay: "September 2022",
    closedDisplay: "Terminated Dec 2023",
    country: "United States",
  },

  executiveSummary: [
    "Highest ARR multiple in SaaS M&A history — $20B at ~50× Figma's 2022 ARR of ~$400M; ~$10M per employee",
    "Mixed consideration structure — $10B cash + $10B Adobe (ADBE) stock; regulatory approval was a closing condition",
    "EU & UK antitrust block — regulators found Adobe and Figma were closest competitors in screen design; horizontal merger deemed anti-competitive",
    "Deal terminated December 18, 2023 after 15 months; Adobe paid Figma $1B termination fee",
    "Figma remained independent, accelerated growth, and filed to go public — ultimately rewarded for staying independent",
    "Landmark regulatory precedent: 'killer acquisition' of the nearest competitor now faces a high bar globally",
  ],

  industryOverview: {
    body: "The design software market is undergoing a fundamental shift from installed desktop applications to browser-based, collaborative SaaS platforms. The global UI/UX and screen design tools market was estimated at $3–4 billion in 2022, with Figma holding commanding market share in the collaborative segment. The COVID-19 pandemic dramatically accelerated adoption of collaborative tools: product teams working remotely needed real-time, multiplayer design environments. Figma became the de facto standard. Browser-based SaaS design tools command higher average contract values and superior Net Revenue Retention (NRR) versus traditional perpetual-license software, making them highly attractive acquisition targets.",
    metrics: [
      { label: "Global design tools market", value: "~$3.5B", sub: "2022 estimate" },
      { label: "Figma ARR", value: "~$400M", sub: "2022 estimate (private company)" },
      { label: "Figma ARR growth rate", value: "~100% YoY", sub: "2021 → 2022" },
      { label: "Adobe Creative Cloud ARR", value: "$10B+", sub: "FY2022 reported" },
    ],
    subBody: "The EU and UK regulators defined 'screen design software' as a distinct relevant market — tools used primarily to design user interfaces for digital products. Within this market, Adobe XD and Figma were identified as each other's closest competitors. This market definition was the linchpin of the regulatory block: by acquiring Figma, Adobe would have eliminated the rivalry between the two dominant players in the segment, reducing competitive pressure on pricing, innovation, and product development.",
    players: [
      { name: "Figma", role: "Browser-based collaborative UI/UX design leader; market share dominant in screen design" },
      { name: "Adobe XD", role: "Adobe's UI/UX design tool — losing share rapidly to Figma before deal" },
      { name: "Sketch", role: "Mac-only UI design tool; formerly the market leader before Figma's rise" },
      { name: "InVision", role: "Prototyping and collaboration tool; market share eroded by Figma's expanding feature set" },
      { name: "Canva", role: "Consumer-facing graphic design SaaS; adjacent but distinct market segment" },
    ],
  },

  companyOverview: {
    targetName: "Figma, Inc.",
    body: "Figma is a private SaaS company founded in 2012 and headquartered in San Francisco. It provides a browser-based interface design and prototyping platform that enables real-time collaboration across designers, developers, and product managers. Figma did for design what Google Docs did for word processing: it moved the workflow to the browser and made collaboration the default. By 2022, Figma had become the standard design environment at thousands of technology companies including Dropbox, Zoom, GitHub, Uber, and Twitter. Its 2021 Series E funding round raised $400 million at a $10 billion valuation — Adobe's offer represented a 2× premium on that figure in less than a year.",
    metrics: [
      { label: "ARR (Annual Recurring Revenue)", value: "~$400M", sub: "2022 estimate (private)" },
      { label: "ARR growth rate", value: "~100% YoY", sub: "2020–2022 high-growth phase" },
      { label: "Series E valuation (2021)", value: "$10B", sub: "Last private round" },
      { label: "Proposed acquisition valuation", value: "$20B", sub: "50× ARR premium" },
      { label: "Employees at time of deal", value: "~1,000", sub: "~$10M per employee implied" },
    ],
    revenueBreakdown: [
      { name: "Team / Professional plans", pct: 75, color: "bg-violet-600", amt: "~$300M" },
      { name: "Enterprise plans", pct: 20, color: "bg-violet-400", amt: "~$80M" },
      { name: "Starter / free-to-paid", pct: 5, color: "bg-violet-200", amt: "~$20M" },
    ],
    financials: [
      { year: "2021", revenue: 200, cogs: 40, grossProfit: 160, sga: 160, operatingIncome: -40, ebitda: -20 },
      { year: "2022", revenue: 400, cogs: 80, grossProfit: 320, sga: 300, operatingIncome: -60, ebitda: -30 },
      { year: "2023", revenue: 600, cogs: 120, grossProfit: 480, sga: 380, operatingIncome: -20, ebitda: 10 },
    ],
    financialsNote: "Figma is a private company. All financial figures are estimates based on public reporting and industry analysis. Actual figures may differ.",
    financialsCurrency: "USD",
    financialsUnit: "mn",
  },

  dealStructure: {
    body: "Adobe structured the acquisition as a cash-and-stock merger: $10 billion in cash and $10 billion in Adobe (ADBE) stock. The primary beneficiaries were Figma's founders (Dylan Field held approximately 10% at deal time), and institutional investors including Sequoia Capital, Index Ventures, Greylock, and Kleiner Perkins. The merger agreement included a $1 billion termination fee payable by Adobe to Figma if the deal failed due to regulatory clearance not being obtained — a clause that was ultimately triggered. Regulatory approval from the EU, UK, and US was a closing condition.",
    preOwnership: {
      nodes: [
        { id: "fig_investors", label: "Figma founders & investors", sub: "VC-backed; Sequoia, Index, Greylock, Kleiner", type: "public" },
        { id: "figma", label: "Figma, Inc.", sub: "Private SaaS; ~$400M ARR", type: "target" },
        { id: "adobe_public", label: "Adobe Inc. (ADBE)", sub: "Nasdaq-listed; Creative Cloud", type: "acquirer" },
        { id: "adobe_xd", label: "Adobe XD", sub: "Adobe's UI/UX design tool (losing share)", type: "entity" },
      ],
      edges: [
        { from: "fig_investors", to: "figma", label: "Shareholders" },
        { from: "adobe_public", to: "adobe_xd", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "fig_investors_post", label: "Figma founders & investors", sub: "Received $1B termination fee; remain shareholders", type: "public" },
        { id: "figma_independent", label: "Figma, Inc. (Independent)", sub: "$1B termination fee received · IPO filed", type: "target" },
        { id: "adobe_post", label: "Adobe Inc. (ADBE)", sub: "Paid $1B break fee · Figma acquisition failed", type: "acquirer" },
      ],
      edges: [
        { from: "fig_investors_post", to: "figma_independent", label: "Shareholders (independent)" },
      ],
    },
    keyTerms: [
      { label: "Deal value (proposed EV)", value: "$20B ($10B cash + $10B ADBE stock)", accent: true },
      { label: "ARR valuation multiple", value: "~50× ARR (2022 ARR ~$400M)", accent: true },
      { label: "Termination fee (break fee)", value: "$1 billion (Adobe pays Figma if blocked)", accent: true },
      { label: "Transaction structure", value: "Cash & stock merger", accent: false },
      { label: "Closing condition", value: "Regulatory approval: EU, UK CMA, US DOJ", accent: false },
      { label: "Deal outcome", value: "Terminated December 18, 2023 (EU block expected)", accent: true },
      { label: "Time to termination", value: "~15 months (Sept 2022 – Dec 2023)", accent: false },
    ],
  },

  advisors: {
    body: "Both Adobe and Figma retained top-tier M&A advisors. Adobe selected Allen & Company, a boutique investment bank renowned for media and technology transactions. Figma retained Qatalyst Partners, the preeminent independent advisor for high-profile technology M&A. On the legal side, Cleary Gottlieb (Adobe) and Fenwick & West (Figma) led the antitrust review process — ultimately unable to find a remedy package sufficient to satisfy EU and UK regulators.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (Adobe)",
        initials: "ADBE",
        bg: "bg-red-600",
        advisors: [
          { firm: "Allen & Company", role: "Financial Advisor (FA)", roleType: "financial", note: "Media & technology M&A boutique; led deal strategy and valuation for Adobe" },
          { firm: "Cleary Gottlieb Steen & Hamilton", role: "Legal Advisor (Antitrust)", roleType: "legal", note: "Led EU and UK CMA antitrust review and remedy negotiations for Adobe" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Figma)",
        initials: "FIG",
        bg: "bg-violet-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "Financial Advisor (FA)", roleType: "financial", note: "Premier independent tech M&A advisor; negotiated deal terms and valuation for Figma" },
          { firm: "Fenwick & West", role: "Legal Advisor (M&A & Antitrust)", roleType: "legal", note: "Silicon Valley technology law firm; led M&A documentation and antitrust defense for Figma" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting and regulatory filings.",
  },

  valuation: {
    body: "Adobe's $20 billion offer represented approximately 50× Figma's estimated 2022 ARR of $400 million — the highest ARR multiple ever paid in a major SaaS acquisition. For context, high-growth SaaS acquisitions typically trade at 10–20× ARR; the median SaaS deal in 2022 was around 6–8× ARR. Adobe's justification rested on three pillars: Figma's exceptional growth rate (~100% YoY), the platform's high Net Revenue Retention, and the strategic value of Figma's collaborative design ecosystem. Critics and regulators, however, noted that the price also reflected Adobe's willingness to pay a 'competition elimination premium' — the value of removing its most dangerous rival from the market.",
    rows: [
      { item: "Proposed enterprise value", val: "$20B", note: "$10B cash + $10B ADBE stock", accent: true },
      { item: "Figma 2022 ARR (estimate)", val: "~$400M", note: "Private company; estimate from public reporting" },
      { item: "EV / ARR multiple", val: "~50×", note: "Highest ARR multiple in major SaaS M&A history", accent: true },
      { item: "Figma 2022 revenue (estimate)", val: "~$400M", note: "ARR ≈ revenue for subscription SaaS" },
      { item: "Series E valuation (2021)", val: "$10B", note: "Last private funding round" },
      { item: "Premium vs. Series E", val: "2× in ~1 year", note: "$10B → $20B; reflects growth + strategic premium" },
      { item: "Termination fee paid", val: "$1B", note: "Adobe paid to Figma upon deal termination; actual cash outflow", accent: true },
    ],
    disclaimer: "Figma is a private company. Revenue and ARR figures are estimates based on public reporting.",
  },

  rationale: {
    buyer: {
      title: "Adobe's Strategic Rationale",
      initials: "ADBE",
      bg: "bg-red-600",
      points: [
        "Eliminate the most dangerous competitor — Figma was actively displacing Adobe XD and eroding Creative Cloud's UI/UX segment. Without an acquisition, Figma's growth trajectory pointed toward a head-on platform conflict",
        "Transition Creative Cloud to a collaborative SaaS platform — Figma's browser-based, real-time collaboration technology could accelerate Adobe's shift away from installed desktop applications",
        "Capture the product team workflow — Figma's integration of designers, developers, and PMs into one canvas positioned it as the hub of the entire product development lifecycle, not just a design tool",
        "Acquire a high-velocity ARR engine — Figma's ~100% YoY ARR growth would have materially lifted Adobe's overall organic growth profile at scale",
        "Justify 50× ARR — the premium bundled 'competition elimination value' + 'platform synergy' + 'future cash flow' into a single number; for Adobe, not acquiring Figma carried its own multi-billion dollar strategic cost",
      ],
    },
    seller: {
      title: "Why Figma Agreed to the Deal",
      initials: "FIG",
      bg: "bg-violet-600",
      points: [
        "Extraordinary liquidity at 50× ARR — a definitive $20B exit for a private company growing fast but burning cash, in a deteriorating tech IPO market, was a once-in-a-decade opportunity",
        "Adobe's distribution moat — access to Adobe's tens of millions of Creative Cloud subscribers offered an unparalleled growth accelerant for Figma's user base and enterprise sales",
        "Certainty over IPO risk — the 2022 tech market downturn made IPO timing and valuation highly uncertain; a locked-in $20B exceeded most realistic IPO scenarios at the time",
        "Adobe AI and cloud resources — integration with Adobe Firefly (generative AI) and Creative Cloud's infrastructure promised significant product capability uplift",
        "$1B termination fee as downside protection — even if the deal failed for regulatory reasons, Figma would receive $1B in cash, essentially de-risking the decision to enter the merger agreement",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Following the deal's termination in December 2023, Figma retained its independence and emerged in a stronger financial position than before the deal was announced. The $1 billion termination fee provided substantial capital, and Figma continued its product roadmap without disruption. In 2024, Figma moved toward an IPO, signaling confidence in its standalone value and market position. Adobe, meanwhile, continued building its AI-powered design capabilities through Adobe Firefly and focused on generative AI integration across Creative Cloud. Adobe XD, which had been largely sidelined during the 15-month deal review, was effectively discontinued as a competitive product. The regulatory outcome — two major jurisdictions blocking a high-profile tech acquisition on horizontal merger grounds — set a powerful precedent for how antitrust authorities globally are scrutinizing Big Tech consolidation.",
    overallVerdict: "Deal failed — Figma thrives independently; Adobe forced to compete; major regulatory precedent established",
    positives: [
      "Figma received $1B termination fee — exceptional windfall that strengthened its balance sheet and fund runway for independent growth and IPO preparation",
      "Figma's product development continued uninterrupted — no integration distractions; team remained focused on the core platform",
      "Major regulatory precedent — EU and UK CMA established that acquiring the nearest competitor in a defined software market constitutes an anti-competitive horizontal merger, regardless of deal size or remedies offered",
      "Adobe Firefly (generative AI) development continued — Adobe pivoted R&D resources toward AI-generated design, which may offer a differentiated path not dependent on Figma",
    ],
    risks: [
      "Adobe's UI/UX competitive position materially weakened — Adobe XD effectively discontinued; Figma now dominates screen design with no meaningful Adobe rival in the segment",
      "Adobe paid $1B with nothing to show — the termination fee represented a direct shareholder value loss with zero strategic benefit",
      "Figma's continued independent growth makes future competitive challenge harder — every month Figma compounds its lead in collaborative design, making it more expensive (and more regulated) for Adobe to address",
      "Adobe stock underperformance post-announcement — ADBE fell ~17% on deal announcement day; market consistently priced the deal as value-destructive for Adobe shareholders",
      "Post-IPO Figma will be a well-capitalized public competitor — with public market capital and a validated valuation, Figma can expand into broader creative workflow categories that compete directly with Creative Cloud",
    ],
    editorNote: "The Adobe-Figma deal is the clearest illustration in recent memory of the 'kill zone' problem in tech M&A: an incumbent paying an extraordinary premium not because of synergy projections, but because the target is the most credible threat to its core business. Regulators in Brussels and London saw through the strategic rationale to the competition reality: this was an attempt to buy away rivalry. The $1B termination fee — paid without completing the acquisition — stands as an expensive lesson that regulatory risk in Big Tech horizontal mergers is no longer a cost worth underestimating. For practitioners, this case permanently reset the premium that buyers must discount for regulatory risk when targeting a direct competitor.",
  },

  tombstone: {
    acquirerInitials: "ADBE",
    acquirerBg: "bg-red-600",
    targetInitials: "FIG",
    targetBg: "bg-violet-600",
    acquirerName: "Adobe Inc.",
    targetName: "Figma, Inc.",
    dealTitle: "Proposed Acquisition — Terminated (Regulatory Block)",
    dealSize: "$20B",
    dealSizeUSD: "USD 20bn ($10B cash + $10B ADBE stock)",
    evEbitda: "N/A (50× ARR)",
    closeDate: "Terminated Dec 2023",
  },

  sources: [
    { id: 1, text: "Adobe Press Release — Adobe to Acquire Figma (September 2022)", url: "https://www.adobe.com/investor-relations" },
    { id: 2, text: "Adobe & Figma Joint Statement — Termination of Proposed Acquisition (December 2023)", url: "https://www.adobe.com" },
    { id: 3, text: "European Commission — Antitrust: Commission opens in-depth investigation into Adobe's proposed acquisition of Figma (May 2023)" },
    { id: 4, text: "UK Competition and Markets Authority — Adobe / Figma merger inquiry: phase 2 investigation and provisional findings (2023)", url: "https://www.gov.uk/cma-cases" },
    { id: 5, text: "The Wall Street Journal — Adobe Abandons $20 Billion Deal to Buy Figma After Regulatory Resistance (December 2023)" },
    { id: 6, text: "Bloomberg — Adobe to Pay Figma $1 Billion Breakup Fee as Design Deal Collapses (December 2023)" },
    { id: 7, text: "Financial Times — The $20bn deal that redefined Big Tech antitrust: Adobe and Figma (2024)" },
    { id: 8, text: "TechCrunch — EU antitrust regulators set to block Adobe's Figma deal, sources say (November 2023)" },
    { id: 9, text: "Adobe FY2022 Annual Report (Form 10-K)", url: "https://investor.adobe.com" },
    { id: 10, text: "Figma S-1 / IPO preparation coverage — public reports (2024)" },
    { id: 11, text: "Qatalyst Partners — Fairness opinion and financial analysis (referenced in merger proxy documents)" },
  ],

  seo: {
    title: "Adobe Figma $20B Deal Blocked — Antitrust M&A Case Study | Deal Story",
    description: "Complete analysis of Adobe's failed $20B Figma acquisition. How EU and UK regulators blocked it, why 50× ARR was paid, the $1B break fee, and what happened to Figma afterward. Essential M&A antitrust case study.",
    keywords: [
      "Adobe Figma acquisition blocked",
      "Adobe Figma $20 billion deal",
      "Figma antitrust EU UK CMA",
      "SaaS ARR multiple valuation",
      "Figma IPO",
      "M&A break fee termination fee",
      "horizontal merger antitrust",
      "Big Tech M&A regulation",
      "killer acquisition antitrust",
      "design software M&A",
      "Adobe Figma deal analysis",
      "Figma valuation 50x ARR",
    ],
  },

  concepts: [
    { term: "ARR Multiple", href: "/learn/arr-multiple", description: "Enterprise value divided by Annual Recurring Revenue — the primary valuation metric for SaaS companies, reflecting growth rate and revenue quality" },
    { term: "SaaS Valuation", href: "/learn/saas-valuation", description: "Methodology for valuing subscription software companies, centered on ARR, net revenue retention (NRR), and growth rate rather than traditional EBITDA multiples" },
    { term: "Antitrust / Competition Law", href: "/learn/antitrust", description: "Legal framework empowering regulators to block mergers that would substantially reduce competition in a defined market" },
    { term: "Break Fee / Termination Fee", href: "/learn/break-fee", description: "A contractual payment owed by one party to another if a merger agreement is terminated for specified reasons — here, Adobe paying Figma $1B upon regulatory failure" },
    { term: "Regulatory Risk in M&A", href: "/learn/regulatory-risk", description: "The risk that antitrust or regulatory authorities impose conditions, require divestitures, or outright block a proposed transaction" },
    { term: "Horizontal Merger", href: "/learn/horizontal-merger", description: "A merger between two companies that compete in the same market — subject to the highest level of antitrust scrutiny because it directly reduces the number of competitors" },
  ],

  faq: [
    {
      q: "Why did Adobe offer 50× ARR for Figma — the highest SaaS premium ever?",
      a: "Figma was not merely a high-growth SaaS company — it was directly displacing Adobe's UI/UX product and threatening to erode Creative Cloud's subscriber base. For Adobe, the 50× ARR was not only a growth premium; it also incorporated a 'competition elimination value' — the cost of what would happen if Adobe did not acquire Figma. Regulators recognized exactly this logic and cited it as evidence the deal was anti-competitive.",
    },
    {
      q: "Why did the EU and UK block the deal? Aren't Adobe and Figma in different markets?",
      a: "Regulators defined 'screen design software' as a distinct relevant market — tools used to design digital product user interfaces. Within this specific market, Adobe XD and Figma were identified as each other's closest competitors. Acquiring Figma would therefore eliminate the rivalry between the two dominant players in this segment. The EU and UK CMA concluded no remedy package could adequately address this structural concern.",
    },
    {
      q: "How does a $1 billion termination fee work in M&A?",
      a: "A termination fee (also called a break fee) is negotiated upfront and written into the merger agreement. It specifies who pays what to whom if the deal fails under specific conditions. In the Adobe-Figma deal, Adobe agreed to pay Figma $1 billion if the acquisition failed because regulatory clearance could not be obtained. This clause was triggered when the EU indicated it would formally block the transaction. Adobe paid Figma the $1 billion in December 2023.",
    },
    {
      q: "What happened to Figma after the deal fell apart?",
      a: "Figma emerged from the deal process in a stronger position. It received $1 billion in cash from Adobe's termination fee, bolstering its balance sheet significantly. The company continued growing — by 2023, estimated ARR reached approximately $600 million. In 2024, Figma filed for an IPO, validating its standalone value. The failed acquisition arguably strengthened Figma's brand and cultural identity as an independent company.",
    },
    {
      q: "What precedent does this deal set for future Big Tech acquisitions?",
      a: "Adobe-Figma has become a landmark case for the principle that acquiring the nearest competitor in a well-defined software market is a horizontal merger that antitrust regulators will block — even if the target is private, even if the deal size is large, and even if the acquirer offers behavioral remedies. It has meaningfully raised the regulatory risk discount that buyers must apply when targeting a direct competitor, particularly in Europe and the UK.",
    },
    {
      q: "How did Adobe's stock react to the deal announcement and termination?",
      a: "Adobe's stock (ADBE) fell approximately 17% on the day of the deal announcement in September 2022 — the market immediately judged the $20B price as excessive. During the 15-month review period, the stock remained under pressure from the deal uncertainty. When the termination was announced in December 2023, ADBE shares actually rallied, as investors viewed the $1B break fee as a much better outcome than completing the $20B acquisition at a 50× ARR premium.",
    },
  ],
};

export default deal;
