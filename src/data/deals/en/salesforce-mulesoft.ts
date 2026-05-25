/**
 * Salesforce × MuleSoft — $6.5B API Integration Platform and CRM Ecosystem Expansion
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "salesforce-mulesoft",
  title: "Why Salesforce Paid $6.5B for MuleSoft — API Integration and the Digital Transformation Hub",
  subtitle: "$6.5B · May 2018 · Anypoint Platform · API Integration · CRM Ecosystem Expansion",
  category: "ma",
  industry: "Enterprise Software / API Integration / SaaS",
  country: "United States",
  announcedAt: "2018-03-20",
  closedAt: "2018-05-01",
  announcedDisplay: "March 2018",
  closedDisplay: "May 2018",
  readingMinutes: 9,
  tags: ["Salesforce", "MuleSoft", "Anypoint Platform", "API integration", "digital transformation", "CRM", "iPaaS", "enterprise software"],
  excerpt: "Salesforce announced in March 2018 the acquisition of API integration platform company MuleSoft for $6.5B ($36/share). At the time, this represented the highest EV/Revenue multiple (~16×) ever paid for a publicly listed enterprise software company. MuleSoft's Anypoint Platform became the hub connecting enterprise legacy systems, clouds, and APIs with Salesforce CRM data.",

  acquirer: { initials: "CRM", bg: "bg-blue-500", label: "Salesforce, Inc." },
  target: { initials: "MULE", bg: "bg-indigo-600", label: "MuleSoft, LLC" },

  background: [
    "MuleSoft, founded in 2006, provided an API integration platform-as-a-service (iPaaS) solution called Anypoint Platform that connected enterprise systems (legacy ERP, cloud SaaS, mobile apps, IoT devices) via APIs. Listed on NYSE (MULE) in March 2017, MuleSoft had 1,800+ customers including Fortune 500 companies.",
    "The biggest bottleneck in enterprise digital transformation was 'system connectivity.' The average enterprise used over 1,100 software applications, but most couldn't communicate with each other. MuleSoft's Anypoint Platform solved this connectivity problem, earning the title 'the API operating system of the enterprise.'",
    "Salesforce needed comprehensive integration capabilities to connect all customer enterprise data into Salesforce for CRM platform growth. Connecting Oracle ERP, SAP, and legacy systems to Salesforce CRM required complex custom integration work, which MuleSoft standardized into ready-to-use APIs.",
    "On March 20, 2018, Salesforce announced the acquisition of MuleSoft at $36/share (36% premium) in a cash and stock combination. Total of $6.5B — the highest EV/Revenue multiple (~16×) for a listed enterprise software acquisition at that time. The deal was completed rapidly in just six weeks on May 1, 2018.",
  ],

  dealSummary: {
    dealValueDisplay: "$6.5B ($36/share, cash + stock combination)",
    acquirerName: "Salesforce, Inc.",
    targetName: "MuleSoft, LLC",
    announcedDisplay: "March 2018",
    closedDisplay: "May 2018",
    country: "United States",
  },

  executiveSummary: [
    "$6.5B — Highest EV/Revenue multiple (~16×) for listed enterprise SW at announcement time",
    "MuleSoft Anypoint Platform: Enterprise API integration platform — 1,800+ Fortune 500 customers",
    "Salesforce strategy: CRM alone → becoming the hub connecting all enterprise systems (Customer 360)",
    "Core bottleneck of digital transformation solved — legacy/cloud/API integration middleware",
    "MuleSoft revenue contribution exceeded $1B (2020) — major revenue driver within 2 years of acquisition",
    "MuleSoft → Salesforce Integration Cloud brand expansion (from 2019)",
  ],

  industryOverview: {
    body: "The iPaaS (Integration Platform as a Service) market has been growing at 15%+ annually with enterprise digital transformation acceleration. With the average enterprise using over 1,000 software applications, demand for API integration platforms connecting them has exploded. Gartner consistently ranked MuleSoft as a leader in its iPaaS Magic Quadrant.",
    metrics: [
      { label: "iPaaS Market Size", value: "$3.5B", sub: "2018, growing 15%+ annually" },
      { label: "Average Enterprise Software Count", value: "1,000+", sub: "Root cause of API integration demand" },
      { label: "MuleSoft Customer Count", value: "1,800+", sub: "Including Fortune 500" },
      { label: "Gartner Magic Quadrant", value: "Leader", sub: "iPaaS category, consecutive years" },
    ],
    players: [
      { name: "MuleSoft (Salesforce)", role: "iPaaS market leader, Anypoint Platform" },
      { name: "Dell Boomi", role: "Mid-market iPaaS competitor" },
      { name: "Informatica", role: "Data integration and ETL platform" },
      { name: "Microsoft Azure Integration Services", role: "Cloud-based API integration" },
    ],
  },

  companyOverview: {
    targetName: "MuleSoft, LLC",
    body: "MuleSoft, founded in 2006, is an iPaaS (integration platform) company with Anypoint Platform as its core product. Anypoint handles API design, implementation, management, and monitoring end-to-end, with 400+ connectors for immediate connection to major enterprise systems. It was growing rapidly after its 2017 NYSE listing.",
    metrics: [
      { label: "Annual Revenue (FY2017)", value: "~$400M", sub: "58% YoY growth" },
      { label: "Customer Count", value: "1,800+", sub: "Including Fortune 500" },
      { label: "Anypoint Connectors", value: "400+", sub: "Enterprise system connections" },
      { label: "EV/Revenue Acquisition Multiple", value: "~16×", sub: "$6.5B / ~$0.4B" },
    ],
    financials: [
      { year: "FY2016", revenue: 188, cogs: 50, grossProfit: 138, sga: 200, operatingIncome: -140, ebitda: -120 },
      { year: "FY2017", revenue: 297, cogs: 78, grossProfit: 219, sga: 290, operatingIncome: -180, ebitda: -150 },
      { year: "FY2018", revenue: 401, cogs: 100, grossProfit: 301, sga: 350, operatingIncome: -200, ebitda: -170 },
    ],
    financialsNote: "Unit: USD million. Based on MuleSoft public filings.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Subscription (Platform)", pct: 82, color: "bg-indigo-600", amt: "~$329M" },
      { name: "Professional Services", pct: 18, color: "bg-indigo-300", amt: "~$72M" },
    ],
  },

  dealStructure: {
    body: "Salesforce paid MuleSoft shareholders $36/share in a cash and stock combination — specifically $28.22 cash + $7.78 Salesforce stock per share. MuleSoft was delisted from NYSE and became a wholly owned Salesforce subsidiary.",
    preOwnership: {
      nodes: [
        { id: "crm", label: "Salesforce, Inc.", sub: "NYSE: CRM", type: "acquirer" },
        { id: "mule", label: "MuleSoft, LLC", sub: "NYSE: MULE, publicly listed", type: "target" },
      ],
      edges: [
        { from: "crm", to: "mule", label: "$36/share (cash + stock) acquisition" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "crm_post", label: "Salesforce, Inc.", sub: "NYSE: CRM", type: "acquirer" },
        { id: "mule_post", label: "MuleSoft (Salesforce)", sub: "Salesforce Integration Cloud expansion", type: "target" },
      ],
      edges: [
        { from: "crm_post", to: "mule_post", label: "100% ownership (delisted)" },
      ],
    },
    keyTerms: [
      { label: "Acquisition Price", value: "$6.5B ($36/share)", accent: true },
      { label: "Payment Structure", value: "$28.22 cash + $7.78 Salesforce stock", accent: false },
      { label: "Premium", value: "36% (vs 30-day average)", accent: false },
      { label: "Closing", value: "May 1, 2018 (completed in 6 weeks)", accent: false },
      { label: "EV/Revenue", value: "~16× (record for listed enterprise SW)", accent: true },
    ],
  },

  advisors: {
    body: "Specialist M&A advisors supported both sides of the deal.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (Salesforce)",
        initials: "CRM",
        bg: "bg-blue-500",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Acquisition structure and valuation" },
          { firm: "Wachtell Lipton Rosen & Katz", role: "Legal Counsel", roleType: "legal", note: "Transaction documents and board duties" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (MuleSoft)",
        initials: "MULE",
        bg: "bg-indigo-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "Financial Advisor (FA)", roleType: "financial", note: "Fairness opinion and negotiation" },
          { firm: "Fenwick & West", role: "Legal Counsel", roleType: "legal", note: "Shareholder protection and transaction documents" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public sources.",
  },

  valuation: {
    body: "Salesforce applied a significant premium to MuleSoft's high-growth (58% YoY revenue growth) SaaS revenue and iPaaS market leadership. EV/Revenue of 16× was the record multiple for listed enterprise software at that time.",
    rows: [
      { item: "Acquisition Price (EV)", val: "$6.5B", note: "$36/share", accent: true },
      { item: "FY2018 ARR", val: "~$400M", note: "58% YoY growth" },
      { item: "EV/Revenue", val: "~16×", note: "Record for listed enterprise SW", accent: true },
      { item: "Premium vs 30-day avg", val: "36%", note: "$36/share" },
      { item: "Post-acquisition revenue contribution", val: "$1B+", note: "Salesforce FY2020 annual contribution" },
    ],
    disclaimer: "Financial metrics based on public data estimates.",
  },

  rationale: {
    buyer: {
      title: "Salesforce's Acquisition Rationale",
      initials: "CRM",
      bg: "bg-blue-500",
      points: [
        "Customer 360 strategy completion — hub connecting all enterprise data to Salesforce",
        "Legacy system integration acceleration — removing friction when adding Salesforce with existing ERP/SAP",
        "iPaaS market preemption — acquiring the #1 company in a rapidly growing API integration market",
        "Customer ACV expansion — MuleSoft platform bundling drives upsell and cross-sell",
        "Digital transformation essential infrastructure — becoming the enterprise system connectivity hub maximizes switching costs",
      ],
    },
    seller: {
      title: "MuleSoft Management and Shareholder Rationale",
      initials: "MULE",
      bg: "bg-indigo-600",
      points: [
        "36% immediate premium — clear value realization vs near-term stock price",
        "Salesforce's global customer base accelerates Anypoint Platform adoption",
        "R&D and sales expansion scale incomparably better than as an independent company",
        "Reinforced position with global #1 Salesforce integration amid intensifying iPaaS competition",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-acquisition, MuleSoft became the core of Salesforce Integration Cloud. MuleSoft revenue contribution exceeded $1B in 2020, becoming a major revenue driver within 2 years of acquisition. Salesforce used MuleSoft to build the Customer 360 Data Platform, enabling enterprises to integrate customer data from all channels into a single view. MuleSoft is considered one of the most successful acquisitions among Salesforce's multiple 'cloud' products.",
    overallVerdict: "Strategic success — secured core infrastructure for Salesforce Customer 360",
    positives: [
      "MuleSoft revenue contribution exceeded $1B (FY2020) — major revenue driver within 2 years",
      "Customer 360 strategy completion — all enterprise system data integrated into Salesforce",
      "Salesforce Integration Cloud brand expansion — strengthened iPaaS market position",
      "Successful MuleSoft cross-sell to existing Salesforce customers — ACV expansion",
    ],
    risks: [
      "High acquisition multiple (EV/Revenue 16×) — near-term ROI pressure",
      "Competition from Microsoft Azure and Google Cloud native integration services intensifying",
      "Growing Salesforce product complexity — requires sales and marketing integration",
    ],
    editorNote: "The Salesforce-MuleSoft acquisition is the execution of a strategy to 'become an ecosystem hub, not just a platform.' A standalone CRM can only capture a portion of enterprise IT budget, but becoming the connectivity hub (API integration) for all systems can capture a much larger piece of the pie. MuleSoft's role in Salesforce's Customer 360 strategy was not just one product but 'the glue holding the entire platform together.'",
  },

  tombstone: {
    acquirerInitials: "CRM",
    acquirerBg: "bg-blue-500",
    targetInitials: "MULE",
    targetBg: "bg-indigo-600",
    acquirerName: "Salesforce, Inc.",
    targetName: "MuleSoft, LLC",
    dealTitle: "Strategic Acquisition — API Integration Platform",
    dealSize: "$6.5B ($36/share)",
    dealSizeUSD: "USD 6.5B",
    evEbitda: "N/A (growth-stage loss-making company)",
    closeDate: "May 2018",
  },

  sources: [
    { id: 1, text: "Salesforce Press Release — Salesforce Signs Definitive Agreement to Acquire MuleSoft (March 2018)", url: "https://investor.salesforce.com" },
    { id: 2, text: "MuleSoft Form S-4 / Proxy Statement (2018)", url: "https://www.sec.gov" },
    { id: 3, text: "Gartner Magic Quadrant for Enterprise Integration Platform as a Service (2018)" },
    { id: 4, text: "Salesforce Annual Report FY2020 — MuleSoft Revenue Contribution", url: "https://investor.salesforce.com" },
    { id: 5, text: "Bloomberg — Salesforce Buys MuleSoft for $6.5 Billion (March 2018)" },
    { id: 6, text: "The Wall Street Journal — Salesforce Pays Premium for MuleSoft's API Platform (2018)" },
  ],

  seo: {
    title: "Salesforce MuleSoft Acquisition Analysis — $6.5B API Integration Platform and Customer 360",
    description: "Complete analysis of Salesforce's $6.5B MuleSoft acquisition. Anypoint Platform, record EV/Revenue 16× multiple, Customer 360 strategy and API integration synergies.",
    keywords: ["Salesforce MuleSoft acquisition", "MuleSoft Anypoint Platform", "API integration platform", "iPaaS", "Customer 360", "Salesforce acquisition strategy"],
  },

  concepts: [
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "CRM → connectivity hub for all enterprise systems — acquisition for Customer 360 platform expansion" },
    { term: "Platform Strategy", href: "/deal-101/platform-strategy", description: "MuleSoft Anypoint Platform = enterprise API OS — maximizing switching costs strategy" },
    { term: "EV/Revenue Multiple", href: "/deal-101/ev-revenue", description: "EV/Revenue 16× — record multiple for listed enterprise SW, high-growth SaaS premium" },
    { term: "Vertical Integration", href: "/deal-101/vertical-integration", description: "CRM (upper) + API integration middleware (lower) — expanding influence within enterprise IT stack" },
  ],

  faq: [
    {
      q: "Why did Salesforce pay a high price of $6.5B for MuleSoft?",
      a: "MuleSoft's value lies in Anypoint Platform's role as the 'glue' of enterprise IT infrastructure. With enterprise software counts exceeding 1,000, the API integration platform connecting them is extremely difficult to replace once deployed. For Salesforce, if MuleSoft becomes the hub connecting all enterprise systems to Salesforce, customer Salesforce dependency increases dramatically. This strategic value justified the EV/Revenue 16× high multiple.",
    },
    {
      q: "What is MuleSoft's Anypoint Platform?",
      a: "Anypoint Platform is an integration platform connecting enterprise systems (legacy ERP, SAP, Oracle, Salesforce, cloud SaaS, mobile apps, IoT devices) via APIs. It handles API design, implementation, deployment, management, monitoring, and security end-to-end, with 400+ pre-built connectors for immediate connection to major enterprise systems. It's called the 'API OS (API Operating System)' of enterprises.",
    },
    {
      q: "How did MuleSoft contribute to Salesforce post-acquisition?",
      a: "MuleSoft became the core of Salesforce Integration Cloud. By FY2020, MuleSoft's revenue contribution exceeded $1B, becoming a major revenue driver within 2 years of acquisition. More importantly were the strategic synergies: connecting enterprise legacy systems, SAP, and Oracle to Salesforce CRM via MuleSoft significantly increased Salesforce's average contract value (ACV) per customer. It became a key pillar of the Customer 360 platform.",
    },
    {
      q: "What does this acquisition mean in the context of Salesforce's M&A strategy?",
      a: "The MuleSoft acquisition was Salesforce's decisive turning point from a standalone CRM vendor to 'the platform for enterprise digital transformation.' Subsequently, Salesforce made similar plays acquiring Tableau ($15.7B, data visualization) and Slack ($27.7B, collaboration). The strategy's core was building a Customer 360 ecosystem where MuleSoft handles 'connectivity,' Tableau handles 'analytics,' and Slack handles 'collaboration.'",
    },
  ],
};

export default deal;
