/**
 * eBay / PayPal Spinoff
 * The most successful fintech spinoff in history — completed July 2015
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ebay-paypal-spinoff",
  title: "Why eBay Spun Off PayPal — Anatomy of the Most Successful Fintech Spinoff",
  subtitle: "Carl Icahn's activist pressure · eBay shareholders received 1 PayPal share per eBay share · PayPal market cap peaked at $350B+",
  category: "restructuring",
  industry: "Fintech / e-Commerce",
  country: "USA",
  announcedAt: "2014-09-30",
  closedAt: "2015-07-17",
  announcedDisplay: "September 2014",
  closedDisplay: "July 2015",
  readingMinutes: 10,
  tags: ["eBay", "PayPal", "spinoff", "Carl Icahn", "fintech", "activism", "PYPL", "e-commerce", "payments"],
  excerpt: "eBay's 2015 spinoff of PayPal is widely regarded as the most successful fintech spinoff in history. PayPal was acquired by eBay for $1.5B in 2002; by the time of the spinoff in 2015, PayPal's market cap was $46.6B; by 2021, it peaked at $350B+. Carl Icahn's activist campaign triggered the separation that created value for both companies.",

  acquirer: { initials: "EBAY", bg: "bg-yellow-500", label: "eBay Inc." },
  target: { initials: "PYPL", bg: "bg-blue-600", label: "PayPal Holdings" },

  background: [
    "eBay acquired PayPal in 2002 for $1.5B. At the time, PayPal was a perfect fit as eBay's payment infrastructure. For a decade, PayPal was eBay's core growth engine. But by the 2010s, PayPal's non-eBay payment volume was growing rapidly, and the mobile payment revolution highlighted PayPal's potential as an independent fintech platform.",
    "In January 2014, activist investor Carl Icahn began acquiring eBay shares and loudly demanded a PayPal spinoff. Icahn's logic was clear: 'The two companies have different growth profiles and valuation frameworks; keeping them together limits both.' He waged a public campaign against the eBay board.",
    "eBay CEO John Donahoe initially resisted but announced separation plans on September 30, 2014. The strategic rationale for keeping the companies together had weakened as PayPal's growth opportunities outside eBay's platform expanded. eBay shareholders would receive one PayPal share for each eBay share they held.",
    "The spinoff completed July 17, 2015. PayPal listed on NASDAQ (PYPL) with a market cap of approximately $46.6B. eBay's market cap was approximately $34B. The combined post-spinoff value exceeded the integrated value — both companies could now pursue independent strategies freely.",
  ],

  dealSummary: {
    dealValueDisplay: "Spinoff (1 PayPal share per eBay share, tax-free)",
    acquirerName: "eBay Inc. (spinoff parent)",
    targetName: "PayPal Holdings, Inc. (spun off)",
    announcedDisplay: "September 2014",
    closedDisplay: "July 2015",
    country: "USA",
  },

  executiveSummary: [
    "1 PayPal share per eBay share distributed tax-free (Section 355 spinoff)",
    "Carl Icahn activist pressure — conglomerate discount thesis triggered separation",
    "PayPal market cap $46.6B + eBay $34B at spinoff — combined $80B+",
    "PayPal post-spinoff: peaked at $350B+ in 2021 (7.5× spinoff value)",
    "eBay refocused on commerce — both companies pursue independent strategies",
    "Most successful fintech spinoff ever — textbook for activism + spinoff value creation",
  ],

  industryOverview: {
    body: "In 2014, digital payments were growing explosively with smartphone penetration. Square, Stripe, Venmo (PayPal subsidiary) and other fintech challengers were reshaping the market. PayPal's non-eBay payment volume already exceeded 30% of its total, and the mobile wallet and P2P transfer market offered significant independent growth opportunities.",
    metrics: [
      { label: "PayPal active accounts (2015)", value: "~169M", sub: "At spinoff" },
      { label: "PayPal non-eBay payment share", value: "30%+", sub: "2014, evidence for independent growth" },
      { label: "PayPal market cap at spinoff", value: "~$46.6B", sub: "July 2015" },
      { label: "PayPal peak market cap 2021", value: "$350B+", sub: "7.5× spinoff value in 6 years" },
    ],
    subBody: "In fintech payments, independence was better for partnerships and innovation than operating inside an e-commerce conglomerate. As eBay's subsidiary, PayPal couldn't partner freely with Visa/Mastercard, and it was awkward to serve eBay's competitors (like Amazon). Independence removed both constraints.",
    players: [
      { name: "Square (Block)", role: "SMB payments fintech, PayPal's direct rival" },
      { name: "Stripe", role: "Developer-friendly payment API, startup payments leader" },
      { name: "Visa / Mastercard", role: "Card networks — partnership became possible post-independence" },
      { name: "Carl Icahn", role: "Activist investor, spinoff catalyst" },
    ],
  },

  companyOverview: {
    targetName: "PayPal Holdings, Inc.",
    body: "PayPal was founded in 1998 and emerged from the 1999 merger of Confinity and X.com (Elon Musk's company). Acquired by eBay in 2002 for $1.5B, it grew into eBay's core payment infrastructure. At spinoff, PayPal had ~169M active accounts and processed $282B in total payment volume (TPV) annually.",
    metrics: [
      { label: "Founded / Merged", value: "1998 / 1999", sub: "Confinity + X.com merger" },
      { label: "eBay acquisition price", value: "$1.5B (2002)", sub: "eBay's largest acquisition at the time" },
      { label: "Active accounts at spinoff", value: "~169M", sub: "July 2015" },
      { label: "Annual TPV at spinoff", value: "$282B", sub: "Total payment volume" },
    ],
    financials: [
      { year: "FY2013", revenue: 6622, cogs: 2500, grossProfit: 4122, sga: 2800, operatingIncome: 867, ebitda: 1200 },
      { year: "FY2014", revenue: 7904, cogs: 2900, grossProfit: 5004, sga: 3300, operatingIncome: 891, ebitda: 1350 },
      { year: "FY2015", revenue: 9248, cogs: 3400, grossProfit: 5848, sga: 3700, operatingIncome: 1228, ebitda: 1700 },
    ],
    financialsNote: "Unit: USD million. Based on PayPal public filings post-spinoff.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Transaction Revenue", pct: 90, color: "bg-blue-600", amt: "~$8.3B" },
      { name: "Other Value Added Services", pct: 10, color: "bg-blue-400", amt: "~$0.9B" },
    ],
  },

  dealStructure: {
    body: "eBay executed a Section 355 tax-free spinoff of PayPal. eBay shareholders received one PayPal share for each eBay share held. The tax-free structure meant no capital gains tax for eBay or its shareholders. PayPal listed on NASDAQ (PYPL) on July 20, 2015.",
    preOwnership: {
      nodes: [
        { id: "ebay_parent", label: "eBay Inc.", sub: "NASDAQ: EBAY", type: "acquirer" },
        { id: "paypal_sub", label: "PayPal (eBay subsidiary)", sub: "100% owned by eBay", type: "target" },
      ],
      edges: [
        { from: "ebay_parent", to: "paypal_sub", label: "100% ownership" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ebay_post", label: "eBay Inc.", sub: "Commerce-focused, NASDAQ: EBAY", type: "acquirer" },
        { id: "paypal_post", label: "PayPal Holdings", sub: "Independent NASDAQ: PYPL", type: "target" },
      ],
      edges: [
        { from: "ebay_post", to: "paypal_post", label: "Spinoff completed (independent)" },
      ],
    },
    keyTerms: [
      { label: "Spinoff Structure", value: "Section 355 Tax-Free Spinoff", accent: true },
      { label: "Distribution Ratio", value: "1 PayPal share per eBay share", accent: false },
      { label: "PayPal Market Cap at Spinoff", value: "~$46.6B", accent: true },
      { label: "eBay Market Cap at Spinoff", value: "~$34B", accent: false },
      { label: "Completed", value: "July 17, 2015", accent: false },
    ],
  },

  advisors: {
    body: "Financial, legal, and tax advisors participated in the spinoff process.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Spinoff Parent (eBay)",
        initials: "EBAY",
        bg: "bg-yellow-500",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Spinoff structure design and market" },
          { firm: "Skadden Arps", role: "Legal Counsel", roleType: "legal", note: "Spinoff contract and Section 355 tax structure" },
        ],
      },
      {
        side: "target",
        sideLabel: "Spinoff Entity (PayPal)",
        initials: "PYPL",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Morgan Stanley", role: "Financial Advisor (FA)", roleType: "financial", note: "PayPal independent listing support" },
          { firm: "Weil Gotshal", role: "Legal Counsel", roleType: "legal", note: "Independent entity formation and listing" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public reporting.",
  },

  valuation: {
    body: "At spinoff, PayPal was valued at approximately 5× EV/Revenue. Post-spinoff growth dramatically exceeded this initial valuation.",
    rows: [
      { item: "PayPal market cap at spinoff", val: "$46.6B", note: "July 2015 independent listing", accent: true },
      { item: "FY2015 Revenue", val: "~$9.2B", note: "First full year as independent company" },
      { item: "EV/Revenue at spinoff", val: "~5×", note: "Fintech growth premium" },
      { item: "eBay original acquisition price", val: "$1.5B (2002)", note: "31× growth to spinoff market cap", accent: true },
      { item: "2021 peak market cap", val: "$350B+", note: "Additional 7.5× from spinoff value", accent: true },
    ],
    disclaimer: "Valuation figures from public filings and market data.",
  },

  rationale: {
    buyer: {
      title: "eBay's Spinoff Rationale",
      initials: "EBAY",
      bg: "bg-yellow-500",
      points: [
        "Independent strategies — commerce (eBay) and payments (PayPal) have diverging growth strategies",
        "Valuation premium — independent fintech PayPal commands higher multiples than inside eBay",
        "Partnership freedom — eBay competitors (Amazon, etc.) can now use PayPal",
        "Resolve activist pressure — addressing Icahn's demands resolves governance issues",
        "Maximize shareholder value — combined post-spinoff value > integrated value",
      ],
    },
    seller: {
      title: "PayPal's Spinoff Rationale",
      initials: "PYPL",
      bg: "bg-blue-600",
      points: [
        "Independent fintech growth — free from eBay to partner with Visa, Mastercard, and banks",
        "M&A freedom — can acquire fintech companies independently (Braintree, Venmo, etc.)",
        "Separate IPO valuation — fintech multiples applied without e-commerce drag",
        "Talent retention — independent company stock options and incentive design freedom",
        "Amazon/Alibaba partnerships — expand as global payment platform without eBay conflict",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-spinoff PayPal grew explosively. Venmo P2P payments, enterprise payments (Braintree), fintech SMB lending, and BNPL expansion drove growth. In 2021, pandemic-driven contactless payment demand pushed PayPal to a $350B+ peak market cap. The subsequent rate-hike environment and competitive pressures caused a significant correction, but PayPal maintained $70B+ market cap as of 2024. eBay continued restructuring with StubHub spinoff and classified advertising sales.",
    overallVerdict: "Most successful fintech spinoff ever — value created for both companies",
    positives: [
      "PayPal: $46.6B → $350B+ (7.5×) — one of the highest-ROI spinoffs in history",
      "Venmo growth — P2P payments market dominance",
      "eBay-PayPal mutual independence → both companies expanded partnerships freely",
      "Activist pressure → shareholder value creation textbook case",
      "Tax-free spinoff structure → shareholders hold both companies' shares without immediate tax",
    ],
    risks: [
      "2022–2023 PayPal share price collapse — 80%+ decline from peak on rate hikes and growth slowdown",
      "Apple Pay, Google Pay, and big tech payment competition",
      "eBay growth stagnation — Amazon and Shopify eroded market position",
      "Venmo monetization challenges — large user base but revenue conversion difficulty",
    ],
    editorNote: "The eBay-PayPal spinoff is recorded as the most successful combination of 'activist investor + spinoff' in corporate history. Carl Icahn's demand for separation was initially resisted by the board but ultimately returned tens of times the value to shareholders. The core lesson: when a single company contains two businesses with fundamentally different growth logic, separation can create far more value than integration.",
  },

  tombstone: {
    acquirerInitials: "EBAY",
    acquirerBg: "bg-yellow-500",
    targetInitials: "PYPL",
    targetBg: "bg-blue-600",
    acquirerName: "eBay Inc.",
    targetName: "PayPal Holdings, Inc.",
    dealTitle: "Section 355 Tax-Free Spinoff",
    dealSize: "$46.6B market cap at spinoff",
    dealSizeUSD: "USD 46.6B market cap at spinoff",
    evEbitda: "~27× (at spinoff)",
    closeDate: "Jul 2015",
  },

  sources: [
    { id: 1, text: "eBay Press Release — eBay Inc. Plans to Separate PayPal (September 2014)", url: "https://investor.ebay.com" },
    { id: 2, text: "PayPal Holdings Form 10 Registration Statement (2015)", url: "https://www.sec.gov" },
    { id: 3, text: "eBay Annual Report FY2014 — PayPal Separation Decision" },
    { id: 4, text: "Bloomberg — Carl Icahn Pushes eBay to Spin Off PayPal (January 2014)" },
    { id: 5, text: "The Wall Street Journal — eBay Agrees to Spin Off PayPal (September 2014)" },
    { id: 6, text: "CNBC — PayPal Begins Trading as Independent Company (July 2015)" },
    { id: 7, text: "Forbes — How PayPal Became a $350 Billion Company After eBay Spinoff" },
    { id: 8, text: "PayPal FY2021 Annual Report", url: "https://investor.paypal.com" },
  ],

  seo: {
    title: "eBay PayPal Spinoff Analysis — The Most Successful Fintech Spinoff in History",
    description: "Complete analysis of eBay's PayPal spinoff. Carl Icahn's activist campaign, Section 355 tax-free structure, post-spinoff 7.5× value growth, and lessons for spinoff strategy.",
    keywords: ["eBay PayPal spinoff", "PayPal spinoff analysis", "Carl Icahn eBay", "fintech spinoff", "Section 355 tax-free spinoff", "PayPal IPO history", "PYPL spinoff value"],
  },

  concepts: [
    { term: "Spin-off", href: "/deal-101/spinoff", description: "Separating a subsidiary into an independent public company by distributing shares to existing shareholders — the eBay-PayPal structure" },
    { term: "Competitive Moat", href: "/deal-101/competitive-moat", description: "PayPal's network effects and brand — a moat that strengthened further after independence" },
    { term: "Platform Strategy", href: "/deal-101/platform-strategy", description: "A payment platform gaining independence from an e-commerce platform to expand into a broader ecosystem" },
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Separation is as strategic as acquisition — when splitting creates more value than staying together" },
  ],

  faq: [
    {
      q: "Why did Carl Icahn demand the PayPal spinoff?",
      a: "Icahn's core thesis was conglomerate discount elimination. PayPal is a high-growth fintech company; eBay is a mature e-commerce platform. Combining them creates valuation ambiguity — the market doesn't know which multiple to apply, so both are undervalued. Separating them allows PayPal to command fintech multiples and eBay to receive e-commerce multiples independently.",
    },
    {
      q: "What is a Section 355 tax-free spinoff?",
      a: "Under US tax code Section 355, a spinoff meeting specific requirements generates no capital gains tax for either the parent company or shareholders. eBay distributed PayPal shares to eBay shareholders without triggering tax for eBay, and shareholders received PayPal shares without immediate tax liability. This contrasts with selling a subsidiary, which would create a large taxable gain for the company.",
    },
    {
      q: "How did PayPal perform after the spinoff?",
      a: "PayPal grew from $46.6B at spinoff to $350B+ in 2021 — a 7.5× increase in six years. Key growth drivers were Venmo P2P payments growth, enterprise payments (Braintree), international expansion, and BNPL entry. Post-independence, PayPal also formed major partnerships with Visa and Mastercard — partnerships that were difficult while it was eBay's subsidiary due to conflict of interest.",
    },
    {
      q: "How did eBay perform after the spinoff?",
      a: "eBay focused on pure e-commerce, executing additional restructurings including the StubHub spinoff and classifieds business sale. However, Amazon's dominant growth and Shopify's rise among sellers eroded eBay's relative market position. eBay's market cap did not grow substantially post-spinoff, but the company clarified its identity as a pure e-commerce marketplace.",
    },
    {
      q: "Why is this called the most successful fintech spinoff?",
      a: "eBay originally acquired PayPal for $1.5B in 2002. By the 2015 spinoff, PayPal's market cap was $46.6B (31× the acquisition price). By 2021's peak, it reached $350B+ (230×+ the acquisition price). The spinoff also immediately increased combined company value versus the integrated state. By investment returns, structural value creation, and industry influence, it stands as the defining fintech spinoff.",
    },
  ],
};

export default deal;
