/**
 * SAP × Qualtrics — Bought for $8B, IPO'd, then Sold for $12.5B
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "sap-qualtrics",
  title: "SAP's $8B Qualtrics Acquisition — Two Days Before IPO, Sold to PE Three Years Later",
  subtitle: "$8B · January 2019 · Experience Management (XM) · IPO Canceled · Silver Lake PE Exit",
  category: "ma",
  industry: "Enterprise Software / Experience Management / SaaS",
  country: "United States · Germany",
  announcedAt: "2018-11-11",
  closedAt: "2019-01-23",
  announcedDisplay: "November 2018",
  closedDisplay: "January 2019",
  readingMinutes: 10,
  tags: ["SAP", "Qualtrics", "experience management", "XM", "IPO canceled", "Silver Lake", "enterprise software", "PE buyout"],
  excerpt: "SAP announced in November 2018 the acquisition of Qualtrics for $8B just two days before Qualtrics' planned NASDAQ IPO. Qualtrics was the pioneer of 'Experience Management (XM)' platforms measuring employee, customer, brand, and product experiences. SAP re-listed Qualtrics on NYSE (IPO) in 2021 and sold it to Silver Lake/CPP consortium for $12.5B in 2023.",

  acquirer: { initials: "SAP", bg: "bg-blue-700", label: "SAP SE" },
  target: { initials: "XM", bg: "bg-teal-500", label: "Qualtrics International" },

  background: [
    "Qualtrics was founded by brothers Ryan Smith and Jared Smith in 2002 in Utah. From 2012, it evolved into an enterprise 'Experience Management (XM)' platform, building what it called XM OS (Experience Management Operating System) to measure and analyze customer experience (CX), employee experience (EX), brand experience (BX), and product experience (PX) on a single platform.",
    "In October 2018, Qualtrics was preparing for a NASDAQ IPO. It planned to raise $1 billion at a $35/share offering price. Then just two days before the IPO on November 11, 2018, SAP made a $8B acquisition offer and the Qualtrics board accepted. The IPO was canceled.",
    "SAP's acquisition rationale was clear. SAP is the world's #1 ERP company processing enterprises' 'Operational Data (O-data).' But it lacked 'X-data (Experience Data)' — how customers feel, how employees think. Combining Qualtrics' XM platform with SAP's O-data would complete a comprehensive feedback loop (Business Operating System).",
    "In January 2021, SAP re-listed Qualtrics on NYSE (IPO). The IPO price was $30/share, market cap approximately $15B. SAP retained 85%+ of shares. Qualtrics stock fell significantly from its IPO peak by late 2022, and in March 2023, a Silver Lake (PE fund) and CPP Investments consortium announced the acquisition of Qualtrics for $12.5B ($18.15/share), completing in June 2023. SAP realized billions in gains.",
  ],

  dealSummary: {
    dealValueDisplay: "$8B (SAP acquisition, all-cash, January 2019)",
    acquirerName: "SAP SE",
    targetName: "Qualtrics International",
    announcedDisplay: "November 2018 (Two days before IPO)",
    closedDisplay: "January 2019",
    country: "United States · Germany",
  },

  executiveSummary: [
    "$8B — Flash acquisition two days before IPO, NASDAQ listing canceled",
    "Qualtrics XM OS: Industry standard for managing customer, employee, brand, and product experience",
    "SAP strategy: O-data (ERP operational data) + X-data (Qualtrics experience data) = complete enterprise OS",
    "2021: SAP re-listed Qualtrics on NYSE — IPO at $30, market cap ~$15B",
    "2023: Silver Lake·CPP acquired Qualtrics for $12.5B — SAP realizes gains",
    "SAP investment return: Acquisition $8B → exit $12.5B + 2021 IPO proceeds — profitable investment",
  ],

  industryOverview: {
    body: "The Experience Management (XM) market is projected to grow from $11B in 2022 to over $30B by 2030. Measuring and improving 'how something is experienced (X-data)' beyond 'what was done (O-data)' has become the core of competitive advantage. This is the backdrop for NPS (Net Promoter Score), eNPS, CSAT and other experience metrics becoming key corporate KPIs.",
    metrics: [
      { label: "Experience Management Market", value: "$11B", sub: "2022, projected $30B+ by 2030" },
      { label: "Qualtrics Customer Count", value: "16,000+", sub: "As of 2022" },
      { label: "Fortune 100 Penetration", value: "99/100", sub: "Virtually all of Fortune 100" },
      { label: "EV/Revenue (SAP acquisition)", value: "~20×", sub: "$8B / ~$400M ARR" },
    ],
    players: [
      { name: "Medallia", role: "Direct competitor in customer experience management" },
      { name: "SurveyMonkey / Momentive", role: "Survey-based experience measurement platform" },
      { name: "ServiceNow", role: "Employee experience (EX) platform" },
      { name: "Salesforce Customer 360", role: "Customer experience data platform" },
    ],
  },

  companyOverview: {
    targetName: "Qualtrics International",
    body: "Qualtrics is the global leader in Experience Management (XM) platforms. It provides four solutions — CustomerXM, EmployeeXM, ProductXM, and BrandXM — centered on XM OS (Experience Management Operating System). It had 16,000+ customers globally including 99 of the Fortune 100.",
    metrics: [
      { label: "Annual Recurring Revenue (ARR)", value: "~$760M", sub: "As of 2020" },
      { label: "Customer Count", value: "16,000+", sub: "As of 2022" },
      { label: "Revenue Growth Rate", value: "40%+", sub: "CAGR 2019-2021" },
      { label: "Fortune 100 Penetration", value: "99/100", sub: "Virtually all Fortune 100" },
    ],
    financials: [
      { year: "FY2018", revenue: 400, cogs: 100, grossProfit: 300, sga: 400, operatingIncome: -200, ebitda: -180 },
      { year: "FY2019", revenue: 537, cogs: 130, grossProfit: 407, sga: 490, operatingIncome: -220, ebitda: -190 },
      { year: "FY2020", revenue: 763, cogs: 180, grossProfit: 583, sga: 620, operatingIncome: -270, ebitda: -240 },
    ],
    financialsNote: "Unit: USD million. Based on Qualtrics public filings. High-growth investment phase.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Subscription (XM Platform)", pct: 88, color: "bg-teal-500", amt: "~$672M (FY2020)" },
      { name: "Professional Services", pct: 12, color: "bg-teal-300", amt: "~$92M" },
    ],
  },

  dealStructure: {
    body: "SAP acquired Qualtrics entirely in cash as a wholly owned subsidiary. It offered a price 30%+ above the planned IPO price ($35/share), securing board approval. SAP subsequently re-listed Qualtrics in a 2021 IPO, and then sold it to the Silver Lake consortium in 2023.",
    preOwnership: {
      nodes: [
        { id: "sap", label: "SAP SE", sub: "NYSE/XETRA: SAP", type: "acquirer" },
        { id: "xm", label: "Qualtrics International", sub: "Private (IPO pending), founded by Ryan Smith", type: "target" },
      ],
      edges: [
        { from: "sap", to: "xm", label: "$8B all-cash acquisition (two days before IPO)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "sap_post", label: "SAP SE", sub: "NYSE: SAP", type: "acquirer" },
        { id: "xm_post", label: "Qualtrics International", sub: "Re-listed NYSE 2021 (XM)", type: "target" },
        { id: "silver_lake", label: "Silver Lake · CPP", sub: "$12.5B acquisition (2023)", type: "fund" },
      ],
      edges: [
        { from: "sap_post", to: "xm_post", label: "85%+ stake (2021 IPO)" },
        { from: "xm_post", to: "silver_lake", label: "$12.5B sale 2023" },
      ],
    },
    keyTerms: [
      { label: "SAP Acquisition Price", value: "$8B (all cash)", accent: true },
      { label: "Close Date", value: "January 23, 2019", accent: false },
      { label: "2021 IPO Price", value: "$30/share (market cap ~$15B)", accent: false },
      { label: "Silver Lake Sale Price", value: "$12.5B ($18.15/share)", accent: true },
      { label: "SAP Final Return", value: "$8B → $12.5B+, gains realized", accent: false },
    ],
  },

  advisors: {
    body: "M&A advisors supported both sides of the deal.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (SAP)",
        initials: "SAP",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Morgan Stanley", role: "Financial Advisor (FA)", roleType: "financial", note: "Acquisition structure and price negotiation" },
          { firm: "Linklaters", role: "Legal Counsel", roleType: "legal", note: "Transaction documents and regulatory response" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Qualtrics)",
        initials: "XM",
        bg: "bg-teal-500",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA / IPO underwriter)", roleType: "financial", note: "Advised on M&A vs IPO choice" },
          { firm: "Fenwick & West", role: "Legal Counsel", roleType: "legal", note: "Founder interest protection and transaction" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public sources.",
  },

  valuation: {
    body: "SAP applied a 30%+ premium over the planned IPO offering price ($35/share). EV/ARR ~20× reflected the premium for Qualtrics' XM market leadership.",
    rows: [
      { item: "SAP Acquisition Price", val: "$8B", note: "All cash", accent: true },
      { item: "FY2018 ARR", val: "~$400M", note: "40%+ growth" },
      { item: "EV/ARR", val: "~20×", note: "XM market #1 premium", accent: true },
      { item: "2021 IPO Market Cap", val: "~$15B", note: "$30/share" },
      { item: "Silver Lake Sale Price", val: "$12.5B", note: "$18.15/share", accent: true },
    ],
    disclaimer: "Financial metrics based on public data estimates.",
  },

  rationale: {
    buyer: {
      title: "SAP's Acquisition Rationale",
      initials: "SAP",
      bg: "bg-blue-700",
      points: [
        "O-data + X-data = complete enterprise OS — combining ERP operational data with experience data",
        "XM market preemption — acquiring Qualtrics before it listed and before Medallia and SurveyMonkey could",
        "SAP customer base cross-sell — cross-selling to 16,000 Qualtrics + SAP ERP customers",
        "Pre-emptive action before IPO — post-listing competition would make acquisition far more expensive",
        "Addressing core digital transformation enterprise need — operational efficiency + customer/employee experience improvement",
      ],
    },
    seller: {
      title: "Qualtrics Founders and Board Rationale",
      initials: "XM",
      bg: "bg-teal-500",
      points: [
        "30%+ premium over IPO offering price ($35/share) for immediate value realization",
        "SAP's global ERP customer network accelerates XM platform expansion",
        "Avoid IPO market volatility risk — secure immediate cash liquidity",
        "SAP's large-scale capital and sales organization enables faster growth than independent path",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "After SAP integration, Qualtrics accelerated global expansion and achieved ARR of $763M in FY2020. The January 2021 NYSE re-listing (IPO, $30/share) reached a ~$15B market cap. However, rising rates and SaaS valuation crash in 2022 led to stock falling 60%+ from IPO peak, and the Silver Lake/CPP consortium's $12.5B ($18.15/share) acquisition was completed in June 2023. SAP realized gains while transitioning Qualtrics to PE ownership.",
    overallVerdict: "Partial success — SAP's strategic goals partially unmet but financially profitable",
    positives: [
      "Qualtrics ARR $400M → $1B+ growth — rapid growth during SAP integration period",
      "Successful 2021 IPO — re-listed at $15B market cap, SAP stake value appreciated",
      "Silver Lake $12.5B sale — financial gains realized vs $8B acquisition",
      "Contributed to the spread of the XM (Experience Management) market concept",
    ],
    risks: [
      "Product integration with SAP slower than expected — O-data + X-data synergy fell short of full realization",
      "2022 SaaS valuation crash significantly reduced IPO value",
      "Ryan Smith (founder) leadership uncertainty post-SAP integration",
      "Cultural and strategic differences with SAP's core ERP business",
    ],
    editorNote: "The SAP-Qualtrics deal demonstrates a unique M&A structure: acquisition → subsidiary growth → IPO re-listing → PE sale. Though it aimed for pure strategic integration (O-data + X-data), in practice it more closely resembled a 'strategic investment' where SAP provided capital for Qualtrics' rapid growth and then realized returns through a PE sale. It has significance as a case of growing a new market category (experience management) with SAP's resources.",
  },

  tombstone: {
    acquirerInitials: "SAP",
    acquirerBg: "bg-blue-700",
    targetInitials: "XM",
    targetBg: "bg-teal-500",
    acquirerName: "SAP SE",
    targetName: "Qualtrics International",
    dealTitle: "Strategic Acquisition → IPO Re-listing → PE Sale",
    dealSize: "$8B (SAP acquisition), $12.5B (Silver Lake exit)",
    dealSizeUSD: "USD 8B (acquisition), USD 12.5B (exit)",
    evEbitda: "N/A (growth investment stage)",
    closeDate: "Jan 2019",
  },

  sources: [
    { id: 1, text: "SAP Press Release — SAP to Acquire Qualtrics (November 2018)", url: "https://www.sap.com" },
    { id: 2, text: "Qualtrics S-1 Registration Statement (2020, for 2021 IPO)", url: "https://www.sec.gov" },
    { id: 3, text: "SAP Press Release — Qualtrics IPO (January 2021)", url: "https://investor.sap.com" },
    { id: 4, text: "Silver Lake Press Release — Silver Lake and CPP Investments to Acquire Qualtrics (March 2023)" },
    { id: 5, text: "Bloomberg — SAP to Buy Qualtrics Just Two Days Before Its IPO (November 2018)" },
    { id: 6, text: "The Wall Street Journal — Qualtrics Goes Public Again as SAP Takes It to NYSE (January 2021)" },
  ],

  seo: {
    title: "SAP Qualtrics Acquisition Analysis — $8B Experience Management Platform and PE Exit",
    description: "Complete analysis of SAP's $8B Qualtrics acquisition. IPO canceled two days before listing, O-data and X-data experience management strategy, 2021 IPO re-listing, Silver Lake $12.5B sale.",
    keywords: ["SAP Qualtrics acquisition", "Qualtrics experience management", "XM platform", "Silver Lake acquisition", "enterprise software M&A", "IPO canceled acquisition"],
  },

  concepts: [
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "SAP O-data + Qualtrics X-data = complete enterprise operating system — experience management platform preemption" },
    { term: "Platform Strategy", href: "/deal-101/platform-strategy", description: "XM OS (Experience Management Operating System) — integrating customer, employee, brand, product experience on single platform" },
    { term: "EV/Revenue Multiple", href: "/deal-101/ev-revenue", description: "EV/ARR ~20× — high-growth SaaS company valuation multiples and market leadership premium" },
    { term: "PE Buyout", href: "/deal-101/pe-buyout", description: "Silver Lake and CPP's $12.5B Qualtrics acquisition — ownership transition from strategic corporate to PE" },
  ],

  faq: [
    {
      q: "Why did SAP acquire Qualtrics just two days before its IPO?",
      a: "Two reasons. First, timing advantage: once the IPO completes, Qualtrics' price is exposed to market competition and likely to rise. Making a premium offer just before the IPO creates an opportunity for founders and investors to accept — getting immediate cash without IPO risks (market volatility, lock-up period). Second, strategic necessity: SAP determined it needed to combine O-data (ERP operational data) with Qualtrics' X-data (experience data) to remain competitive.",
    },
    {
      q: "What are O-data and X-data and why do they matter?",
      a: "O-data (Operational Data) records 'what was done' — ERP revenue, inventory, logistics, etc. SAP is the world's #1 in this area. X-data (Experience Data) measures 'how it was experienced' — customer satisfaction (NPS, CSAT), employee engagement (eNPS), brand perception, etc. Qualtrics is the leader in X-data platforms. Connecting the two creates a complete feedback loop where enterprises can understand 'why these results occurred.'",
    },
    {
      q: "Why did Silver Lake acquire Qualtrics for $12.5B?",
      a: "Silver Lake's 2023 Qualtrics acquisition was classic PE buyout logic. With the 2022 SaaS valuation crash driving Qualtrics stock 60%+ below its IPO peak (~$45), Silver Lake judged $12.5B ($18.15/share) as undervalued relative to intrinsic value. The thesis: take it private, operate independently freed from SAP's corporate bureaucracy, re-accelerate growth, then exit via re-IPO or strategic sale.",
    },
    {
      q: "What is the ultimate lesson of this deal?",
      a: "Three lessons. First, even when strategic synergies (O-data + X-data) are clear, integration execution within large corporations is difficult. Second, fast-growing SaaS companies can grow faster as independent companies than as large corporate subsidiaries — which is why PE re-separated it. Third, M&A success is not determined by the acquisition itself but by post-acquisition integration and operations.",
    },
  ],
};

export default deal;
