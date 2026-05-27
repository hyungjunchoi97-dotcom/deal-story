/**
 * Amazon × Whole Foods Acquisition
 * Digital integration of physical retail — $13.7B, closed August 2017
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "amazon-whole-foods",
  title: "Why Amazon Paid $13.7B for Whole Foods — How 460 Stores Became an Amazon Weapon",
  subtitle: "Prime offline expansion · Last-mile delivery hubs · Amazon Go tech lab · The war with Walmart",
  category: "ma",
  industry: "Grocery / e-Commerce / Cloud",
  country: "USA",
  announcedAt: "2017-06-16",
  closedAt: "2017-08-28",
  announcedDisplay: "June 2017",
  closedDisplay: "August 2017",
  readingMinutes: 11,
  tags: ["Amazon", "Whole Foods", "grocery", "retail", "Prime", "last-mile", "omnichannel", "Walmart", "vertical integration"],
  excerpt: "Amazon's $13.7B acquisition of Whole Foods in 2017 was the first time Amazon secured large-scale physical retail infrastructure. 460 stores became Prime member offline hubs, were converted into last-mile nodes for Amazon Fresh delivery, and served as the opening shot in Amazon's war with Walmart for grocery dominance.",

  acquirer: { initials: "AMZN", bg: "bg-orange-500", label: "Amazon" },
  target: { initials: "WFM", bg: "bg-green-600", label: "Whole Foods Market" },

  background: [
    "By 2017, Amazon dominated online retail but struggled in groceries. AmazonFresh had operated since 2007, but online fresh food penetration remained low. Grocery was the largest US retail category (~$800B/year) but the slowest to convert online. Consumers were reluctant to change their habit of seeing fresh produce before buying.",
    "Whole Foods was a premium organic grocery chain with 460+ stores and a loyal, affluent customer base. But since 2015, intensifying competition — from Trader Joe's, Costco, and large supermarkets expanding their organic lines — had stalled growth. The 'Whole Paycheck' nickname reflected its premium-price vulnerability. In early 2017, activist hedge fund Jana Partners acquired a stake and pushed for a sale.",
    "For Amazon, Whole Foods was never just a grocery company. 460 stores were a channel to extend Prime membership benefits offline and a last-mile hub for fresh food delivery. They were also a data-collection infrastructure connecting FMCG brands to Amazon's advertising platform. Jeff Bezos had long prepared for the integration of physical retail and digital — Whole Foods was the platform.",
    "The June 16, 2017 announcement immediately drove down stock prices of Walmart, Kroger, and Target. Markets instantly read Amazon's grocery entry as a threat to incumbents. After FTC clearance, the deal closed August 28, 2017 — on the same day Amazon announced immediate Whole Foods price cuts and Prime member discounts.",
  ],

  dealSummary: {
    dealValueDisplay: "$13.7B (all-cash)",
    acquirerName: "Amazon.com, Inc.",
    targetName: "Whole Foods Market, Inc.",
    announcedDisplay: "June 2017",
    closedDisplay: "August 2017",
    country: "USA",
  },

  executiveSummary: [
    "All-cash $13.7B — Amazon's largest acquisition at the time, securing 460+ physical stores",
    "Core rationale: Prime offline expansion, last-mile delivery nodes, affluent customer data",
    "Immediate price cuts + Prime discounts on closing day — fast integration signal, competitor stocks hit",
    "Walmart and Kroger shares fell sharply — markets declared this a grocery war",
    "Amazon Go cashierless technology testing and last-mile logistics hub utilization",
    "Accelerated Amazon Fresh growth post-acquisition",
  ],

  industryOverview: {
    body: "The US grocery market is roughly $800B annually — the largest retail category. In 2017, online grocery penetration was only about 2–3%. Traditional offline giants like Walmart, Kroger, Costco, and Albertsons dominated. Trader Joe's and Aldi were eroding the mid-market on value. The premium organic niche Whole Foods had created was increasingly under pressure from large supermarkets expanding their organic private-label lines.",
    metrics: [
      { label: "US grocery market size", value: "~$800B/year", sub: "2017, largest retail category" },
      { label: "Online grocery penetration", value: "2–3%", sub: "2017, significant room to grow" },
      { label: "Whole Foods store count", value: "460+", sub: "US, UK, Canada" },
      { label: "Walmart stock on deal day", value: "-4.7%", sub: "Immediate market reaction" },
    ],
    subBody: "Grocery was the last large category Amazon had been unable to crack. Cold-chain logistics complexity, consumer offline purchasing habits, and thin margins were the barriers. The Whole Foods acquisition was a strategy to bypass all of these simultaneously.",
    players: [
      { name: "Walmart", role: "#1 US grocery, accelerating online capabilities" },
      { name: "Kroger", role: "#2 traditional grocery chain" },
      { name: "Trader Joe's", role: "Premium value grocery, Whole Foods' direct competitor" },
      { name: "Instacart", role: "Grocery delivery platform, Amazon competitor/partner" },
    ],
  },

  companyOverview: {
    targetName: "Whole Foods Market, Inc.",
    body: "Founded in Austin, Texas in 1980, Whole Foods grew into the premier premium organic grocery chain with 460+ stores. FY2016 revenue was approximately $15.7B. However, the 'Whole Paycheck' nickname captured its premium-price problem. Activist investor Jana Partners' stake acquisition in early 2017 intensified sale pressure after stagnant 2015–2016 results.",
    metrics: [
      { label: "Store count", value: "460+", sub: "US, UK, Canada" },
      { label: "FY2016 revenue", value: "~$15.7B", sub: "Growth had stalled" },
      { label: "Founded / HQ", value: "1980 / Austin, TX", sub: "Pioneer of premium organic retail" },
      { label: "NASDAQ ticker", value: "WFM", sub: "Delisted post-Amazon acquisition" },
    ],
    financials: [
      { year: "FY2015", revenue: 15389, cogs: 9973, grossProfit: 5416, sga: 4200, operatingIncome: 536, ebitda: 780 },
      { year: "FY2016", revenue: 15724, cogs: 10154, grossProfit: 5570, sga: 4350, operatingIncome: 480, ebitda: 720 },
      { year: "FY2017", revenue: 16030, cogs: 10400, grossProfit: 5630, sga: 4450, operatingIncome: 410, ebitda: 660 },
    ],
    financialsNote: "Unit: USD million. Whole Foods fiscal year ends in September. Estimates based on public filings.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Grocery / Fresh", pct: 85, color: "bg-green-600", amt: "~$13.6B" },
      { name: "Health / Supplements", pct: 10, color: "bg-green-400", amt: "~$1.6B" },
      { name: "Other (food service)", pct: 5, color: "bg-green-200", amt: "~$0.8B" },
    ],
  },

  dealStructure: {
    body: "Amazon acquired Whole Foods at $42 per share in an all-cash deal. This represented approximately a 27% premium to the prior-day closing price. Financing came from Amazon's own cash and new borrowings. FTC antitrust review passed relatively quickly — Amazon's grocery market share was negligible, limiting concentration concerns. On closing day (August 28, 2017), Amazon immediately announced Whole Foods price cuts and Prime member discounts.",
    preOwnership: {
      nodes: [
        { id: "wfm_public", label: "Whole Foods Market", sub: "NASDAQ: WFM", type: "public" },
        { id: "amzn_public", label: "Amazon", sub: "NASDAQ: AMZN", type: "acquirer" },
      ],
      edges: [
        { from: "wfm_public", to: "amzn_public", label: "Independent public company" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "amzn_parent", label: "Amazon", sub: "NASDAQ: AMZN", type: "acquirer" },
        { id: "wfm_sub", label: "Whole Foods Market", sub: "Wholly-owned Amazon subsidiary", type: "target" },
      ],
      edges: [
        { from: "amzn_parent", to: "wfm_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "Deal Value", value: "$13.7B (all-cash)", accent: true },
      { label: "Per-share Price", value: "$42.00 cash", accent: false },
      { label: "Acquisition Premium", value: "~27% vs. prior-day close", accent: true },
      { label: "Deal Structure", value: "All-cash merger", accent: false },
      { label: "EV / FY2017 EBITDA", value: "~20×", accent: true },
      { label: "Close Date", value: "August 28, 2017", accent: false },
    ],
  },

  advisors: {
    body: "Both sides engaged leading investment banks and law firms for this landmark retail M&A transaction.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (Amazon)",
        initials: "AMZN",
        bg: "bg-orange-500",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Deal structure and pricing" },
          { firm: "Cleary Gottlieb", role: "Legal Counsel", roleType: "legal", note: "M&A and antitrust advisory" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Whole Foods)",
        initials: "WFM",
        bg: "bg-green-600",
        advisors: [
          { firm: "Evercore", role: "Financial Advisor (FA)", roleType: "financial", note: "Sale process advisory" },
          { firm: "Wachtell Lipton Rosen & Katz", role: "Legal Counsel", roleType: "legal", note: "M&A contract and board advisory" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public reporting.",
  },

  valuation: {
    body: "Amazon paid roughly 20× EV/EBITDA for a grocery chain — premium vs. sector average of 7–10×. The premium reflects that Amazon was buying strategic optionality for its Prime ecosystem and last-mile infrastructure, not just grocery cash flows.",
    rows: [
      { item: "Deal EV", val: "$13.7B", note: "All-cash consideration", accent: true },
      { item: "Per-share price", val: "$42.00", note: "~27% premium vs. $33.06 prior-day close" },
      { item: "Acquisition premium", val: "~27%", note: "vs. prior-day closing price", accent: true },
      { item: "FY2017 Revenue", val: "~$16B", note: "Stable grocery revenue" },
      { item: "FY2017 EBITDA", val: "~$660M", note: "4–5% EBITDA margin" },
      { item: "EV / EBITDA", val: "~20×", note: "vs. grocery sector avg 7–10×", accent: true },
    ],
    disclaimer: "Valuation figures from public filings and industry analysis.",
  },

  rationale: {
    buyer: {
      title: "Amazon's Acquisition Rationale",
      initials: "AMZN",
      bg: "bg-orange-500",
      points: [
        "Prime offline expansion — 460 stores provide physical Prime benefits, demonstrating offline Prime value",
        "Last-mile hub — urban Whole Foods stores converted into same-day fresh delivery nodes",
        "Affluent customer data — Whole Foods purchase data refines Amazon advertising targeting",
        "Walmart challenge — direct entry into Walmart's core grocery stronghold",
        "Technology lab — Amazon Go cashierless checkout and Alexa integration testing platform",
      ],
    },
    seller: {
      title: "Whole Foods' Rationale for Selling",
      initials: "WFM",
      bg: "bg-green-600",
      points: [
        "Break through growth stagnation — intensifying competition limits independent growth; Amazon's digital capabilities accelerate it",
        "Jana Partners activist pressure — respond to shareholder demands for value realization",
        "$42 per-share premium — 27% above market price provides clear value to shareholders",
        "Amazon Prime network — access to 200M+ Prime members expands customer base",
        "Digital transformation without investment — leverage Amazon platform without independent tech spend",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "On closing day, Amazon immediately cut Whole Foods prices and launched Prime member discounts. Amazon Echo devices went on sale in Whole Foods stores. Amazon Fresh delivery expanded using Whole Foods store infrastructure. However, post-2020, Amazon acknowledged slower-than-expected integration outcomes. Amazon Go technology rollout was scaled back, and in 2023 Amazon closed some Whole Foods stores and Amazon Fresh locations.",
    overallVerdict: "Strategically sound direction — integration execution speed below expectations",
    positives: [
      "Prime offline channel secured — physical Prime benefits for 200M+ members",
      "Fresh food delivery infrastructure — Whole Foods hubs enable Amazon Fresh expansion",
      "Amazon advertising data enhanced — grocery purchase data refines FMCG ad targeting",
      "Alexa/Echo physical sales channel — Amazon devices sold in-store",
    ],
    risks: [
      "Integration speed below expectations — Whole Foods culture vs. Amazon efficiency culture tension",
      "Amazon Go expansion scaled back — cashierless technology commercialization delays",
      "Online grocery conversion still slow — offline still dominant post-pandemic",
      "Some Whole Foods and Amazon Fresh closures (2023) — strategy recalibration",
      "Walmart and Kroger counter-investments — competitors also accelerated digital-physical integration",
    ],
    editorNote: "Amazon's Whole Foods acquisition was a $13.7B test of the proposition that physical retail can be an extension of a digital platform. The strategic direction was correct — but Amazon underestimated the complexity of traditional grocery operations. Prime integration and last-mile infrastructure delivered real value, but large-scale Amazon Go rollout and Whole Foods' own growth recovery fell short of expectations. This deal simultaneously illustrates the potential and limits of digital-physical convergence strategy.",
  },

  tombstone: {
    acquirerInitials: "AMZN",
    acquirerBg: "bg-orange-500",
    targetInitials: "WFM",
    targetBg: "bg-green-600",
    acquirerName: "Amazon.com, Inc.",
    targetName: "Whole Foods Market, Inc.",
    dealTitle: "All-Cash Acquisition",
    dealSize: "$13.7B",
    dealSizeUSD: "USD 13.7 Billion",
    evEbitda: "~20×",
    closeDate: "Aug 2017",
  },

  sources: [
    { id: 1, text: "Amazon Press Release — Amazon and Whole Foods Market Announce Acquisition (June 2017)", url: "https://investor.amazon.com" },
    { id: 2, text: "Whole Foods Market Form S-4 / Proxy Statement (2017)", url: "https://www.sec.gov" },
    { id: 3, text: "FTC Statement on Amazon / Whole Foods Acquisition (August 2017)", url: "https://www.ftc.gov" },
    { id: 4, text: "Amazon FY2017 Annual Report (10-K) — Acquisition of Whole Foods", url: "https://investor.amazon.com" },
    { id: 5, text: "The Wall Street Journal — Amazon's $13.7 Billion Whole Foods Deal Shakes Retail (June 2017)" },
    { id: 6, text: "Bloomberg — Amazon Shuts Some Amazon Go, Fresh Stores (2023)" },
    { id: 7, text: "CNBC — Jana Partners Takes Whole Foods Stake, Pushes for Sale (April 2017)" },
    { id: 8, text: "Reuters — Amazon Prime Members Get Discounts at Whole Foods (August 2017)" },
  ],

  seo: {
    title: "Amazon Whole Foods Acquisition Analysis — How $13.7B Bought a Grocery War and Prime Offline",
    description: "Complete analysis of Amazon's $13.7B acquisition of Whole Foods. Prime integration strategy, last-mile infrastructure, post-deal outcomes, and lessons for omnichannel M&A.",
    keywords: [
      "Amazon Whole Foods acquisition",
      "Amazon grocery strategy",
      "Prime offline expansion",
      "omnichannel retail M&A",
      "Amazon Fresh last-mile",
      "retail vertical integration",
      "Amazon 2017 acquisition",
    ],
  },

  concepts: [
    { term: "Vertical Integration", href: "/deal-101/vertical-integration", description: "Owning physical retail infrastructure to control supply chain and customer touchpoints — Amazon's grocery vertical integration" },
    { term: "Platform Strategy", href: "/deal-101/platform-strategy", description: "Converting 460 Whole Foods stores into offline nodes of the Prime ecosystem" },
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Paying 20× EBITDA premium for Prime, last-mile, and data strategic value rather than current profitability" },
    { term: "PMI (Post-Merger Integration)", href: "/deal-101/pmi", description: "The challenges of integrating a digital company with traditional grocery operations and culture" },
  ],

  faq: [
    {
      q: "Why did Amazon buy a physical grocery chain?",
      a: "Amazon had tried to crack groceries with AmazonFresh since 2007 but growth was slow. Consumers were reluctant to order fresh produce online. Whole Foods' 460 stores solved multiple problems at once: offline purchasing channels, last-mile delivery hubs, and physical locations to deliver Prime member benefits. Rather than building from scratch, Amazon bought an established network.",
    },
    {
      q: "How were Whole Foods stores integrated with Amazon Prime?",
      a: "Prime members received additional discounts at Whole Foods stores. Amazon Echo and Dash devices went on sale in-store. Whole Foods locations became pickup hubs for Prime Now two-hour delivery. The Whole Foods and Amazon apps were integrated, connecting online and offline purchase histories.",
    },
    {
      q: "What was the market impact on Walmart and other competitors?",
      a: "Walmart stock fell 4.7%, Kroger dropped 9.2%, and Target declined 5.1% on deal announcement day. Markets immediately interpreted Amazon's grocery entry as a threat to incumbents. Subsequently, Walmart acquired Jet.com and expanded online grocery delivery, while Kroger significantly increased digital platform investment. Amazon's deal accelerated digital transformation across the entire traditional retail sector.",
    },
    {
      q: "How did the Amazon Go technology relate to Whole Foods?",
      a: "After the acquisition, Amazon tested its Amazon Go cashierless checkout technology in select Whole Foods locations. Shoppers could pick up items and walk out without standing in line — automated billing applied. However, technical complexity and costs created challenges for large-scale rollout, and by 2023 Amazon had closed some Amazon Go stores.",
    },
    {
      q: "Was the Whole Foods acquisition ultimately a success?",
      a: "The assessment is mixed. Prime integration, fresh food delivery infrastructure, and advertising data collection delivered strategic value. But major goals — Whole Foods' own growth recovery, Amazon Go large-scale commercialization, and accelerated online grocery conversion — fell short of expectations. The 2023 store rationalization indicated strategic recalibration. Direct financial ROI vs. $13.7B investment remains difficult to verify independently.",
    },
  ],
};

export default deal;
