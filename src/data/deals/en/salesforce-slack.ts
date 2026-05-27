/**
 * Salesforce × Slack Acquisition
 * Pandemic-Era SaaS Mega-Deal — $27.7B, Closed July 2021
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "salesforce-slack",
  title: "Why Salesforce Paid $27.7 Billion for Slack — The Pandemic SaaS Deal Explained",
  subtitle: "Microsoft Teams Threat · 26× Revenue Premium · Building the CRM Platform of the Future",
  category: "ma",
  industry: "Enterprise SaaS / Cloud Software",
  country: "United States",
  announcedAt: "2020-12-01",
  closedAt: "2021-07-21",
  announcedDisplay: "December 2020",
  closedDisplay: "July 2021",
  readingMinutes: 12,
  tags: ["Salesforce", "Slack", "Microsoft Teams", "SaaS", "enterprise software", "CRM", "collaboration", "pandemic M&A"],
  excerpt:
    "Salesforce acquired Slack for $27.7B — the largest SaaS acquisition of the pandemic era. Facing Microsoft Teams' relentless bundle strategy, Salesforce paid a 26× revenue multiple to secure the real-time communication layer for its Customer 360 platform. A story of competitive fear, platform ambition, and a $27.7B question that remains open.",

  acquirer: { initials: "CRM", bg: "bg-blue-500", label: "Salesforce" },
  target: { initials: "WORK", bg: "bg-violet-600", label: "Slack Technologies" },

  background: [
    "The COVID-19 pandemic dramatically accelerated the shift to remote work, supercharging the enterprise collaboration software market. Microsoft Teams, Zoom, and Slack emerged as primary beneficiaries — but Microsoft's move to bundle Teams into the Office 365 subscription at no extra cost began to seriously erode Slack's competitive position. By mid-2020, Teams' daily active users (DAU) had surpassed Slack's by a wide margin, and Slack's enterprise expansion was showing structural ceilings.",
    "Salesforce had spent years assembling its 'Customer 360' platform — a suite covering CRM, Sales Cloud, Service Cloud, and Marketing Cloud — but the stack lacked a real-time communication layer. As employees relied on Slack, Teams, and other external messengers to do their work, Salesforce data sat in siloed applications. CEO Marc Benioff saw Slack as the missing front-door to the entire Customer 360 ecosystem.",
    "Slack had gone public in June 2019 via a direct listing on the NYSE (ticker: WORK), but the stock consistently underperformed expectations. With Teams' free bundle strategy accelerating and investor skepticism about Slack's standalone growth trajectory mounting, CEO Stewart Butterfield concluded that pairing with a major platform was the most value-creating path for shareholders.",
    "On December 1, 2020, Salesforce announced it would acquire Slack in a cash-and-stock deal at $26.79 per share in cash plus 0.0776 shares of Salesforce (CRM) stock per Slack share. The total transaction value was $27.7B — a roughly 55% premium to Slack's pre-announcement closing price and the largest acquisition in Salesforce's history. The deal closed on July 21, 2021 after regulatory clearance.",
  ],

  dealSummary: {
    dealValueDisplay: "USD 27.7 Billion",
    acquirerName: "Salesforce, Inc.",
    targetName: "Slack Technologies, Inc.",
    announcedDisplay: "December 2020",
    closedDisplay: "July 2021",
    country: "United States",
  },

  executiveSummary: [
    "Largest SaaS acquisition of the pandemic era — Salesforce's biggest deal ever, cash-and-stock mix, ~55% premium.",
    "Core rationale: secure a real-time communication layer for the Customer 360 platform before Microsoft Teams locked up enterprise collaboration.",
    "EV / FY2021 revenue of ~26× — paid at the peak of the pandemic SaaS valuation bubble for a loss-making company.",
    "Post-close: Slack rebranded as 'Slack from Salesforce,' deeply integrated into Customer 360, Sales Cloud, and Einstein AI.",
    "Microsoft Teams retains dominant market share — the $27.7B ROI question remains unresolved.",
    "A defining case study in high-multiple SaaS acquisitions: strategic platform value vs. standalone earnings power.",
  ],

  industryOverview: {
    body: "The global enterprise collaboration software market was approximately $45B in 2020 and growing at 15%+ annually, turbocharged by the pandemic-driven shift to remote work. Email and meeting-centric workflows were rapidly giving way to channel-based messaging and async collaboration. Slack, Microsoft Teams, Zoom, and Google Meet competed intensely — but Teams' bundling into Office 365 gave Microsoft an asymmetric advantage in enterprise accounts, where IT buyers optimized for cost and integration over best-of-breed tools.",
    metrics: [
      { label: "Enterprise Collaboration Market", value: "~$45B", sub: "2020, growing 15%+ YoY" },
      { label: "Microsoft Teams DAU", value: "115M", sub: "October 2020, Microsoft announcement" },
      { label: "Slack DAU", value: "~12M", sub: "2020 public disclosures" },
      { label: "Global CRM Market", value: "~$58B", sub: "2020; Salesforce ~20% share" },
    ],
    subBody: "The Teams vs. Slack contest was fundamentally a bundling war. Microsoft offered Teams free to Office 365 subscribers — hundreds of millions of enterprise users could access Teams without incremental spend. Slack's product was widely regarded as superior for developer and power-user workflows, but in IT procurement decisions, cost and ecosystem consolidation outweigh user experience preferences. This structural disadvantage was the pivotal driver behind Slack's willingness to sell.",
    players: [
      { name: "Microsoft Teams", role: "Office 365 bundle, enterprise collaboration market leader" },
      { name: "Zoom", role: "Video conferencing leader, expanding into persistent messaging" },
      { name: "Google Workspace (Chat/Meet)", role: "Google's enterprise collaboration suite" },
      { name: "Salesforce (CRM)", role: "Enterprise CRM & cloud platform leader, acquirer" },
    ],
  },

  companyOverview: {
    targetName: "Slack Technologies, Inc.",
    body: "Founded in 2013, Slack pioneered channel-based messaging as a replacement for email in workplace communication. The company went public via direct listing on the NYSE in June 2019 (ticker: WORK) at a reference price of $26/share. Slack's revenue was ~97% subscription-based, generating a predictable ARR stream, but the company operated at a significant EBITDA loss as it invested heavily in sales, marketing, and product development to sustain growth against Teams. At the time of the acquisition announcement, Slack had ~142,000 paid customers, including 65% of Fortune 100 companies.",
    metrics: [
      { label: "FY2021 Revenue", value: "$902M", sub: "+43% YoY growth" },
      { label: "Paid Customers", value: "~142,000", sub: "early 2021" },
      { label: "Fortune 100 Penetration", value: "65%", sub: "early 2021" },
      { label: "DAU", value: "~12M", sub: "2020 public disclosures" },
      { label: "Founded / Listed", value: "2013 / 2019", sub: "NYSE direct listing" },
    ],
    financials: [
      { year: "FY2019", revenue: 401, cogs: 75, grossProfit: 326, sga: 490, operatingIncome: -139, ebitda: -120 },
      { year: "FY2020", revenue: 630, cogs: 106, grossProfit: 524, sga: 700, operatingIncome: -571, ebitda: -500 },
      { year: "FY2021", revenue: 902, cogs: 147, grossProfit: 755, sga: 820, operatingIncome: -520, ebitda: -440 },
    ],
    financialsNote: "Revenue in USD millions. FY ends January 31. Source: Slack Technologies annual filings.",
    financialsCurrency: "USD",
    financialsUnit: "mn",
    revenueBreakdown: [
      { name: "Subscription", pct: 97, color: "bg-violet-600", amt: "~$875M" },
      { name: "Professional Services", pct: 3, color: "bg-violet-300", amt: "~$27M" },
    ],
  },

  dealStructure: {
    body: "Salesforce structured the deal as a cash-and-stock merger. Slack shareholders received $26.79 in cash plus 0.0776 shares of Salesforce common stock (NYSE: CRM) for each Slack share. Of the total $27.7B consideration, approximately $12B was funded in cash (including proceeds from new Salesforce debt issuance) and approximately $15.7B in Salesforce stock. The deal was subject to U.S. DOJ antitrust review and shareholder approvals on both sides. Slack was delisted from the NYSE upon transaction close on July 21, 2021, becoming a wholly owned subsidiary of Salesforce.",
    preOwnership: {
      nodes: [
        { id: "slack_public", label: "Slack Technologies", sub: "NYSE-listed (WORK)", type: "public" },
        { id: "crm_public", label: "Salesforce", sub: "NYSE-listed (CRM)", type: "acquirer" },
      ],
      edges: [
        { from: "slack_public", to: "crm_public", label: "independent public companies" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "crm_parent", label: "Salesforce", sub: "NYSE-listed (CRM)", type: "acquirer" },
        { id: "slack_sub", label: "Slack Technologies", sub: "100% Salesforce subsidiary", type: "target" },
      ],
      edges: [
        { from: "crm_parent", to: "slack_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "Total Deal Value (EV)", value: "USD 27.7 Billion", accent: true },
      { label: "Cash Consideration", value: "$26.79 per Slack share", accent: false },
      { label: "Stock Consideration", value: "0.0776 CRM shares per Slack share", accent: false },
      { label: "Acquisition Premium", value: "~55% to pre-announcement closing price", accent: true },
      { label: "Transaction Type", value: "Cash-and-Stock Merger", accent: false },
      { label: "EV / FY2021 Revenue", value: "~26×", accent: true },
      { label: "EV / EBITDA", value: "N/M (loss-making)", accent: false },
      { label: "Termination Fee", value: "$900M", accent: false },
      { label: "Close Date", value: "July 21, 2021", accent: false },
    ],
  },

  advisors: {
    body: "Both sides fielded top-tier Wall Street banks and law firms. Notably, Slack was advised by Qatalyst Partners — the boutique bank founded by Frank Quattrone that specializes in technology M&A and has advised on some of Silicon Valley's most significant deals.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer Side (Salesforce)",
        initials: "CRM",
        bg: "bg-blue-500",
        advisors: [
          { firm: "JPMorgan Chase", role: "Financial Advisor (FA)", roleType: "financial", note: "Lead financial advisor; deal structuring and pricing" },
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Co-financial advisor; debt financing support" },
          { firm: "Weil, Gotshal & Manges", role: "Legal Counsel", roleType: "legal", note: "M&A transaction counsel; antitrust coordination" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target Side (Slack)",
        initials: "WORK",
        bg: "bg-violet-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "Financial Advisor (FA)", roleType: "financial", note: "Lead financial advisor to Slack Board; tech M&A specialist boutique" },
          { firm: "Allen & Company", role: "Financial Advisor (FA)", roleType: "financial", note: "Co-financial advisor; media & technology boutique" },
          { firm: "Goodwin Procter", role: "Legal Counsel", roleType: "legal", note: "M&A transaction counsel; shareholder matters" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public filings and press reports.",
  },

  valuation: {
    body: "Salesforce paid approximately 26× Slack's FY2021 revenue of $902M — a premium that reflected the peak of the pandemic SaaS valuation cycle and the strategic scarcity value Salesforce attached to locking up the enterprise collaboration layer. Because Slack was EBITDA-negative, EV/EBITDA multiples were not applicable; the deal was priced on an ARR/revenue multiple basis, consistent with how high-growth SaaS companies were broadly valued in 2020–2021. The ~55% premium to the unaffected stock price reflected competitive urgency and Salesforce's judgment that the platform optionality of owning Slack was worth a significant control premium.",
    rows: [
      { item: "Total Deal EV", val: "$27.7B", note: "~$12B cash + ~$15.7B Salesforce stock", accent: true },
      { item: "Cash Consideration", val: "$26.79/share", note: "~55% premium to pre-announcement close ($27.89)" },
      { item: "Stock Consideration", val: "0.0776 CRM shares/Slack share", note: "Value fluctuates with CRM stock price" },
      { item: "FY2021 Revenue", val: "$902M", note: "+43% YoY; FY ends January 31" },
      { item: "EV / FY2021 Revenue", val: "~26×", note: "Paid at peak pandemic SaaS multiples", accent: true },
      { item: "FY2021 EBITDA", val: "-$440M", note: "Loss-making; revenue multiple only" },
      { item: "EV / EBITDA", val: "N/M (loss-making)", note: "Not applicable for valuation basis", accent: false },
      { item: "Termination Fee", val: "$900M", note: "~3.2% of deal value; applies to both sides" },
    ],
    disclaimer: "Valuation figures based on public filings and industry analysis.",
  },

  rationale: {
    buyer: {
      title: "Salesforce's Acquisition Rationale",
      initials: "CRM",
      bg: "bg-blue-500",
      points: [
        "Platform completeness — Slack fills the missing real-time communication layer in Customer 360, creating an integrated 'Digital HQ' where employees live in Salesforce data daily.",
        "Microsoft Teams threat — By acquiring Slack, Salesforce denies Microsoft a clean sweep of enterprise software and secures a beachhead in the collaboration layer Teams was rapidly dominating.",
        "CRM front-door strategy — Employees accessing Slack naturally surface Salesforce opportunities, cases, and workflows, driving deeper platform adoption and stickiness.",
        "Distribution leverage — Salesforce's 150,000+ enterprise customer base becomes an immediate channel to up-sell and cross-sell Slack, accelerating paid conversion.",
        "App ecosystem amplification — Combining Slack's App Directory with Salesforce's AppExchange creates a more powerful developer ecosystem and switching cost moat.",
      ],
    },
    seller: {
      title: "Slack's Rationale for Selling",
      initials: "WORK",
      bg: "bg-violet-600",
      points: [
        "Structural disadvantage vs. Teams — Microsoft's free bundling of Teams into Office 365 created an asymmetric competitive dynamic that Slack could not overcome as a standalone company.",
        "Disappointing post-IPO performance — Slack's direct listing stock never sustainably exceeded the reference price, signaling market skepticism about standalone growth versus the Teams threat.",
        "$27.7B certainty premium — The all-in consideration represented significant value realization for shareholders at a time when Slack's independent trajectory carried material downside risk.",
        "Salesforce distribution accelerant — Pairing with Salesforce's global enterprise salesforce unlocked growth channels unavailable to Slack independently.",
        "CEO Stewart Butterfield's strategic conviction — Butterfield concluded platform partnership was superior to the risks of staying independent in a bundling war with Microsoft.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Following the July 2021 close, Slack was repositioned as the 'Salesforce Customer 360 Digital HQ.' The brand was updated to 'Slack from Salesforce.' Deep technical integrations were built across Salesforce Flow, Einstein AI, and the Customer Data Platform. However, Microsoft Teams retained and extended its enterprise dominance — by 2023, Teams reported 270M+ monthly active users. Salesforce no longer reports Slack-specific metrics, making external ROI assessment difficult. Co-founder and CEO Stewart Butterfield departed Salesforce in January 2023, raising questions about product continuity. Salesforce itself underwent significant restructuring through 2023, including large-scale layoffs.",
    overallVerdict: "Strategic direction sound — platform integration underway; ROI verification remains open",
    positives: [
      "Customer 360 integration completed — Salesforce workflows, CRM data, and AI features natively embedded in Slack channels.",
      "Enterprise cross-sell contribution — Slack bundled into Salesforce enterprise agreements, contributing to recurring revenue growth.",
      "Slack AI launched — Einstein-powered message summarization, thread recaps, and workflow automation differentiate Slack from Teams on AI.",
      "Loyal developer and tech community base — Slack retains strong mindshare in startup, developer, and innovation-driven enterprise segments.",
    ],
    risks: [
      "Microsoft Teams dominance persists — Teams' Office 365 bundle advantage continues; Slack has not materially closed the DAU/MAU gap.",
      "ROI opacity — Salesforce stopped reporting Slack standalone metrics post-acquisition, making the $27.7B return case difficult to evaluate externally.",
      "Founder departure — Stewart Butterfield's exit in January 2023, less than 18 months post-close, raised concerns about Slack's product DNA within Salesforce.",
      "Salesforce growth slowdown — The broader SaaS correction of 2022–2023 put pressure on Salesforce's top-line growth, complicating the integration investment case.",
      "Integration complexity — Aligning Slack's engineering culture and tech stack with Salesforce's enterprise software architecture proved more complex than anticipated.",
    ],
    editorNote: "The Salesforce-Slack deal is a referendum on a fundamental question: can a CRM company buy its way into the communication layer, or does communication belong to the OS-level platform (Microsoft)? Salesforce paid $27.7B at the peak of the pandemic SaaS cycle to answer yes. The bet is not lost — Slack's integration into Customer 360 is real, and Slack AI is a genuine differentiator. But Teams' bundling moat proved more durable than Salesforce's deal premium assumed. This deal will ultimately be judged not by FY2021 revenue multiples, but by whether Slack becomes the irreplaceable workflow layer of the Salesforce ecosystem in an AI-first enterprise world.",
  },

  tombstone: {
    acquirerInitials: "CRM",
    acquirerBg: "bg-blue-500",
    targetInitials: "WORK",
    targetBg: "bg-violet-600",
    acquirerName: "Salesforce, Inc.",
    targetName: "Slack Technologies, Inc.",
    dealTitle: "Cash-and-Stock Merger",
    dealSize: "USD 27.7 Billion",
    dealSizeUSD: "USD 27.7 Billion",
    evEbitda: "N/M (loss-making)",
    closeDate: "Jul 2021",
  },

  sources: [
    { id: 1, text: "Salesforce Press Release — Salesforce Signs Definitive Agreement to Acquire Slack (December 2020)", url: "https://investor.salesforce.com" },
    { id: 2, text: "Slack Technologies Form S-4 / Proxy Statement filed with SEC (2021)", url: "https://www.sec.gov" },
    { id: 3, text: "Slack Technologies FY2021 Annual Report (Form 10-K)", url: "https://investor.slack.com" },
    { id: 4, text: "Salesforce FY2022 Q2 Earnings — Slack Integration Update (August 2021)", url: "https://investor.salesforce.com" },
    { id: 5, text: "Bloomberg — Salesforce to Buy Slack for $27.7 Billion in Largest Deal Ever (December 2020)" },
    { id: 6, text: "The Wall Street Journal — Salesforce's Bet on Slack: A $27.7 Billion Gamble on the Future of Work (2021)" },
    { id: 7, text: "Salesforce FY2023 Annual Report — Platform and Productivity Segment Update", url: "https://investor.salesforce.com" },
    { id: 8, text: "Reuters — Slack CEO Stewart Butterfield Leaves Salesforce (January 2023)" },
    { id: 9, text: "Microsoft — Teams Reaches 270 Million Monthly Active Users (July 2023)", url: "https://www.microsoft.com" },
  ],

  seo: {
    title: "Salesforce Slack $27.7B Acquisition — SaaS M&A Deep Dive | Deal Story",
    description: "Full analysis of Salesforce's $27.7B acquisition of Slack. Microsoft Teams competitive threat, 26× revenue multiple rationale, Customer 360 platform strategy, and post-deal ROI assessment.",
    keywords: [
      "Salesforce Slack acquisition",
      "Slack $27.7 billion deal",
      "Microsoft Teams vs Slack",
      "SaaS acquisition valuation",
      "ARR multiple M&A",
      "pandemic SaaS M&A",
      "enterprise collaboration software",
      "Customer 360 platform strategy",
      "Slack deal analysis",
      "Salesforce M&A history",
      "SaaS revenue multiple",
    ],
  },

  concepts: [
    { term: "ARR Multiple", href: "/learn/arr-multiple", description: "Enterprise value divided by annual recurring revenue — the primary valuation metric for high-growth SaaS companies where EBITDA profitability is negative or irrelevant." },
    { term: "Cash-and-Stock Merger", href: "/learn/cash-stock-merger", description: "M&A structure where consideration is paid as a combination of cash and acquirer shares, allowing the acquirer to conserve cash while sharing upside risk with target shareholders." },
    { term: "Platform Strategy", href: "/learn/platform-strategy", description: "A business model that creates value by facilitating interactions between two or more user groups, with network effects reinforcing competitive advantage over time." },
    { term: "Competitive Moat", href: "/learn/competitive-moat", description: "A structural, durable advantage that prevents competitors from replicating a business's success — in this case, Microsoft's Office 365 bundling constituted Teams' primary moat against Slack." },
    { term: "Bundling Strategy", href: "/learn/bundling", description: "The practice of including additional products within an existing subscription or purchase at no incremental cost — Microsoft's key weapon in the Teams vs. Slack war." },
    { term: "Direct Listing", href: "/learn/direct-listing", description: "An alternative to a traditional IPO where a company lists existing shares directly on a stock exchange without issuing new shares or underwriting, as Slack did in June 2019." },
    { term: "Negative EBITDA Acquisitions", href: "/learn/negative-ebitda-acquisition", description: "Acquisitions of companies operating at a loss, justified by growth trajectory, ARR quality, and strategic value rather than current profitability — the defining pattern of SaaS M&A in 2020–2021." },
  ],

  faq: [
    {
      q: "Why did Salesforce pay $27.7 billion for a company losing hundreds of millions per year?",
      a: "Salesforce was not buying Slack's current earnings — it was buying strategic positioning. Salesforce's Customer 360 platform had CRM, sales, service, and marketing cloud products, but no real-time communication layer. Employees lived in Slack or Teams but kept Salesforce data separate. By owning Slack, Salesforce could embed CRM workflows directly into the daily communication tool, making Salesforce data ambient for every enterprise employee. The 26× revenue multiple reflected this platform integration value, not Slack's standalone profitability.",
    },
    {
      q: "Why was Slack losing to Microsoft Teams despite being seen as the better product?",
      a: "Microsoft bundled Teams into Office 365 at no additional cost. Enterprise IT buyers and CFOs evaluate software on total cost of ownership and integration simplicity — not just user experience. A company already paying for Office 365 had no incremental reason to pay for Slack on top of it. Slack's product superiority in developer workflows and power-user features could not overcome the economic logic of the free bundle. This asymmetry is what made standalone survival increasingly untenable for Slack.",
    },
    {
      q: "How did the deal change Salesforce's Customer 360 strategy?",
      a: "Slack became positioned as the 'Digital HQ' of Customer 360. Sales reps receive CRM opportunity updates in Slack channels. Service teams get case alerts directly in Slack. Salesforce Flow automation triggers Slack workflow notifications. Einstein AI summarization is embedded in Slack threads. The entire Salesforce product suite uses Slack as a shared interface layer, turning it from a standalone messaging app into the connective tissue of the Salesforce platform.",
    },
    {
      q: "What happened to Slack after the acquisition closed?",
      a: "Slack was rebranded as 'Slack from Salesforce.' Deep integrations with Salesforce products were built through 2022–2023. Slack AI was launched in 2023, featuring message summarization and workflow automation powered by Salesforce's Einstein AI. However, Salesforce no longer reports Slack's standalone user metrics, making external performance assessment difficult. Co-founder and CEO Stewart Butterfield departed in January 2023. Microsoft Teams continued to dominate enterprise collaboration with 270M+ MAU reported by mid-2023.",
    },
    {
      q: "Was the $27.7 billion a fair price?",
      a: "At 26× forward revenue, Salesforce paid a peak pandemic-era multiple for a loss-making company in a market where its primary competitor offered a functionally similar product for free. Whether it was 'fair' depends on the strategic lens: for platform completeness, the price may prove justified if Slack becomes the irreplaceable workflow layer for Salesforce's 150,000+ enterprise customers. As a standalone financial investment, the case is harder — Teams' continued dominance limits Slack's addressable market expansion, and the absence of reported metrics prevents ROI verification. The verdict remains open.",
    },
    {
      q: "What does the $900M termination fee mean in this deal?",
      a: "A termination fee (also called a break-up fee) is a penalty paid by the party that walks away from the agreed transaction. The $900M fee in this deal represented approximately 3.2% of total deal value — within the standard M&A range of 2–4%. It served two purposes: it committed both parties to completion by making exit costly, and it reduced the likelihood of a competing bid from another buyer (since a white knight would need to pay the fee to Salesforce before taking Slack). Both sides were subject to the fee depending on the reason for termination.",
    },
  ],
};

export default deal;
