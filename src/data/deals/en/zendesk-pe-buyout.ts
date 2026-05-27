/**
 * Zendesk PE Buyout — $10.2B, Taking Customer Service SaaS Private
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "zendesk-pe-buyout",
  title: "Why Zendesk Accepted a $10.2B PE Buyout — Public Markets vs. Private Equity",
  subtitle: "$10.2B · November 2022 · Permira + Hellman & Friedman · LBO · Customer Service CRM",
  category: "ma",
  industry: "Enterprise Software / Customer Service CRM / SaaS",
  country: "United States",
  announcedAt: "2022-06-24",
  closedAt: "2022-11-22",
  announcedDisplay: "June 2022",
  closedDisplay: "November 2022",
  readingMinutes: 9,
  tags: ["Zendesk", "Permira", "Hellman & Friedman", "PE buyout", "LBO", "customer service CRM", "SaaS going private", "Salesforce bid rejected"],
  excerpt: "Zendesk entered into a $10.2B ($77.50/share) LBO agreement with a consortium of global PE funds Permira and Hellman & Friedman in June 2022. Having previously rejected Salesforce's $17B acquisition bid, Zendesk delisted from NASDAQ in November 2022 and converted to a privately held company.",

  acquirer: { initials: "PE", bg: "bg-gray-700", label: "Permira + Hellman & Friedman" },
  target: { initials: "ZEN", bg: "bg-green-600", label: "Zendesk, Inc." },

  background: [
    "Zendesk, founded in Copenhagen Denmark in 2007, is a customer service CRM software company providing customer support ticket management, helpdesk, live chat, and AI-powered customer service automation. Listed on NASDAQ in 2014, it had over 10,000 customers including Slack, Shopify, and Airbnb.",
    "In early 2022, Salesforce attempted to acquire Zendesk for $17B ($127/share), but Zendesk's board rejected this offer. Simultaneously, Zendesk tried to acquire contact center software company Momentive (SurveyMonkey parent) for $4.1B, but that transaction also fell through due to shareholder opposition.",
    "With SaaS company stocks falling 60%+ from their peaks in 2022, Zendesk's stock followed suit. Against this backdrop, the Permira and Hellman & Friedman consortium offered a $77.50/share ($10.2B) LBO, which Zendesk's board accepted in June 2022. While lower than Salesforce's $127/share offer, it represented a premium over the then-current market price.",
    "The deal closed November 22, 2022. Zendesk delisted from NASDAQ and converted to a privately held company controlled by Permira and H&F. The PE funds aimed to execute a long-term growth strategy away from public markets, with eventual re-IPO or strategic sale as exit paths.",
  ],

  dealSummary: {
    dealValueDisplay: "$10.2B ($77.50/share, all-cash LBO)",
    acquirerName: "Permira + Hellman & Friedman (Consortium)",
    targetName: "Zendesk, Inc.",
    announcedDisplay: "June 2022",
    closedDisplay: "November 2022",
    country: "United States",
  },

  executiveSummary: [
    "$10.2B LBO — Permira + Hellman & Friedman PE consortium, NASDAQ delisting",
    "Zendesk: Rejected Salesforce $17B bid in 2022 → ultimately accepted lower $10.2B PE buyout",
    "SaaS valuation crash environment: 60%+ stock price decline from 2022 NASDAQ tech peak",
    "PE buyout logic: going private → remove short-term shareholder pressure → focus on long-term strategy",
    "LBO structure: debt financing ($7.5B+) + PE equity — leveraged acquisition",
    "Exploring re-IPO or strategic sale scenarios as of 2024",
  ],

  industryOverview: {
    body: "The customer service software market is projected to grow from $11B in 2022 to over $19B by 2027. AI chatbots, omnichannel customer support, and self-service portals are key trends. Zendesk had strength in SMB to mid-market segments but trailed Salesforce Service Cloud in the enterprise market.",
    metrics: [
      { label: "Customer Service SW Market", value: "$11B", sub: "2022" },
      { label: "Zendesk Customer Count", value: "100,000+", sub: "As of 2022" },
      { label: "Annual Revenue (FY2021)", value: "~$1.35B", sub: "29% YoY growth" },
      { label: "LBO Leverage Ratio", value: "~73%", sub: "~$7.5B debt of $10.2B total" },
    ],
    players: [
      { name: "Salesforce Service Cloud", role: "Enterprise customer service CRM market leader" },
      { name: "Freshdesk (Freshworks)", role: "SMB customer service software competitor" },
      { name: "ServiceNow", role: "IT service management + expanding to customer service" },
      { name: "HubSpot Service Hub", role: "SMB customer service software" },
    ],
  },

  companyOverview: {
    targetName: "Zendesk, Inc.",
    body: "Zendesk (NASDAQ: ZEN), founded in Copenhagen Denmark in 2007, is a customer service software company. Built around the helpdesk ticket management system Zendesk Support, it expanded its product portfolio to include Zendesk Chat (live chat), Zendesk Guide (knowledge base), and Zendesk Sell (CRM). NASDAQ listed in 2014.",
    metrics: [
      { label: "Annual Revenue (FY2021)", value: "~$1.35B", sub: "29% YoY growth" },
      { label: "Customer Count", value: "100,000+", sub: "As of 2022" },
      { label: "EV/Revenue (Acquisition Multiple)", value: "~7.5×", sub: "$10.2B / ~$1.35B" },
      { label: "NASDAQ Listing", value: "2014", sub: "Delisted November 2022" },
    ],
    financials: [
      { year: "FY2019", revenue: 816, cogs: 200, grossProfit: 616, sga: 700, operatingIncome: -280, ebitda: -250 },
      { year: "FY2020", revenue: 1030, cogs: 250, grossProfit: 780, sga: 820, operatingIncome: -280, ebitda: -240 },
      { year: "FY2021", revenue: 1339, cogs: 320, grossProfit: 1019, sga: 970, operatingIncome: -260, ebitda: -210 },
    ],
    financialsNote: "Unit: USD million. Based on Zendesk public filings.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Zendesk Suite (Service Platform)", pct: 78, color: "bg-green-600", amt: "~$1.04B" },
      { name: "Zendesk Sell (CRM)", pct: 12, color: "bg-green-400", amt: "~$161M" },
      { name: "Other Services", pct: 10, color: "bg-green-200", amt: "~$134M" },
    ],
  },

  dealStructure: {
    body: "The Permira and Hellman & Friedman consortium executed an LBO (Leveraged Buyout) paying $77.50 per share in cash to Zendesk shareholders. Of the total $10.2B, approximately $7.5B+ was raised through debt financing, with the remaining ~$2.7B as PE equity investment.",
    preOwnership: {
      nodes: [
        { id: "pe", label: "Permira + Hellman & Friedman", sub: "Global PE fund consortium", type: "fund" },
        { id: "zen", label: "Zendesk, Inc.", sub: "NASDAQ: ZEN, publicly listed", type: "target" },
      ],
      edges: [
        { from: "pe", to: "zen", label: "$77.50/share all-cash LBO" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "pe_post", label: "Permira + H&F", sub: "Controlling shareholders", type: "fund" },
        { id: "zen_post", label: "Zendesk, Inc.", sub: "Private company (NASDAQ delisted)", type: "target" },
      ],
      edges: [
        { from: "pe_post", to: "zen_post", label: "100% ownership (delisted Nov 2022)" },
      ],
    },
    keyTerms: [
      { label: "Acquisition Price", value: "$10.2B ($77.50/share)", accent: true },
      { label: "Structure", value: "LBO (Leveraged Buyout)", accent: false },
      { label: "Debt Financing Proportion", value: "~73% (~$7.5B+)", accent: false },
      { label: "Close Date", value: "November 22, 2022", accent: false },
      { label: "vs Salesforce Bid", value: "Salesforce $17B rejected, then $10.2B accepted", accent: true },
    ],
  },

  advisors: {
    body: "Major investment banks and PE-specialist law firms supported both sides of the deal.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (PE Consortium)",
        initials: "PE",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "LBO structure design and debt financing" },
          { firm: "Kirkland & Ellis", role: "Legal Counsel", roleType: "legal", note: "PE LBO legal structure and financing agreements" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Zendesk)",
        initials: "ZEN",
        bg: "bg-green-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "Financial Advisor (FA)", roleType: "financial", note: "Fairness opinion and negotiation" },
          { firm: "Simpson Thacher & Bartlett", role: "Legal Counsel", roleType: "legal", note: "Board duties and shareholder protection" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public sources.",
  },

  valuation: {
    body: "In the 2022 SaaS valuation crash environment, $77.50/share ($10.2B) represented a 34% premium to the 30-day average. Compared to the rejected Salesforce $17B offer, this was 40%+ lower.",
    rows: [
      { item: "LBO Acquisition Price", val: "$10.2B", note: "$77.50/share", accent: true },
      { item: "FY2021 Revenue", val: "~$1.35B", note: "29% YoY growth" },
      { item: "EV/Revenue", val: "~7.5×", note: "2022 SaaS adjusted multiple" },
      { item: "Premium vs 30-day avg", val: "34%", note: "$77.50/share" },
      { item: "vs Salesforce Bid", val: "$17B", note: "$127/share — rejected by Zendesk in 2022", accent: true },
    ],
    disclaimer: "Financial metrics based on public data estimates.",
  },

  rationale: {
    buyer: {
      title: "PE Consortium (Permira · H&F) Rationale",
      initials: "PE",
      bg: "bg-gray-700",
      points: [
        "SaaS bottom acquisition — 2022 valuation crash makes EV/Revenue 7.5× an opportunistic entry",
        "Post-going-private long-term strategy — focus on product and customer expansion free from quarterly earnings pressure",
        "Leverage utilization — maximize equity returns via LBO structure",
        "Customer service AI growth — ride the AI chatbot/automation trend to re-accelerate Zendesk growth",
        "Re-IPO or strategic sale scenario — exit opportunity in 3-5 years",
      ],
    },
    seller: {
      title: "Zendesk Board and Shareholder Rationale",
      initials: "ZEN",
      bg: "bg-green-600",
      points: [
        "Escaping public market decline pressure — 34% premium immediate cash vs 60%+ stock drop environment",
        "Long-term growth post-going-private — execute strategy without quarterly EPS pressure",
        "Alternative path after Momentive acquisition failure — redesigning independent growth strategy",
        "Risk of stock decline post-Salesforce rejection — securing definitive exit path",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-going-private in November 2022, Zendesk focused on enhancing AI customer service capabilities. In 2023 it launched AI-based automation features (Zendesk AI, Intelligent Triage, etc.) to strengthen product competitiveness. Financial information is not disclosed as a private company, but growth reportedly continued driven by customer service AI trends. The PE consortium is targeting re-IPO or strategic sale within 3-5 years.",
    overallVerdict: "In progress — post-PE going private, AI product enhancement, exploring exit scenarios",
    positives: [
      "AI customer service enhancement — Zendesk AI, Intelligent Triage launches improve competitiveness",
      "Removed quarterly pressure — can focus on long-term strategy in private environment",
      "Customer service AI trend — favorable market environment for Zendesk",
    ],
    risks: [
      "Competition intensifying from Salesforce Service Cloud and ServiceNow's AI feature enhancement",
      "High LBO leverage — increased interest burden in rising rate environment",
      "Uncertainty in re-IPO or strategic sale timing",
      "Rejected Salesforce $17B to accept $10.2B — shareholder value maximization concerns",
    ],
    editorNote: "Zendesk's PE buyout is a classic case of PE capitalizing on an opportunity created by the 2022 tech valuation crash. Rejecting Salesforce's $17B to ultimately accept $10.2B received criticism that the board prioritized independent management over shareholder value maximization. Whether AI investments and product enhancement in the private environment bear fruit leading to a re-IPO or strategic sale will determine the ultimate success or failure of this deal.",
  },

  tombstone: {
    acquirerInitials: "PE",
    acquirerBg: "bg-gray-700",
    targetInitials: "ZEN",
    targetBg: "bg-green-600",
    acquirerName: "Permira + Hellman & Friedman",
    targetName: "Zendesk, Inc.",
    dealTitle: "PE Leveraged Buyout (LBO)",
    dealSize: "$10.2B ($77.50/share)",
    dealSizeUSD: "USD 10.2B",
    evEbitda: "N/A (growth-stage loss-making company)",
    closeDate: "Nov 2022",
  },

  sources: [
    { id: 1, text: "Zendesk Press Release — Zendesk Enters into Definitive Agreement to Be Acquired (June 2022)", url: "https://investor.zendesk.com" },
    { id: 2, text: "Zendesk Form 8-K — Going Private Transaction Completed (November 2022)", url: "https://www.sec.gov" },
    { id: 3, text: "Bloomberg — Zendesk Rejects Salesforce $17 Billion Takeover Bid (February 2022)" },
    { id: 4, text: "The Wall Street Journal — Zendesk Agrees to $10.2 Billion Buyout (June 2022)" },
    { id: 5, text: "Reuters — Zendesk Shareholders Approve $10.2 Billion Buyout (October 2022)" },
    { id: 6, text: "Financial Times — PE Firms Permira and Hellman & Friedman Back Zendesk Buyout (2022)" },
  ],

  seo: {
    title: "Zendesk PE Buyout Analysis — $10.2B LBO and the Salesforce Rejection Strategy",
    description: "Complete analysis of Zendesk's $10.2B PE buyout. Permira and Hellman & Friedman LBO structure, Salesforce $17B bid rejection then going private, SaaS valuation crash opportunity.",
    keywords: ["Zendesk PE buyout", "Zendesk LBO", "Permira Hellman Friedman", "SaaS going private", "customer service CRM M&A", "Salesforce Zendesk rejected"],
  },

  concepts: [
    { term: "PE Buyout", href: "/deal-101/pe-buyout", description: "Permira·H&F $10.2B Zendesk LBO — leveraged acquisition at SaaS valuation trough" },
    { term: "Leveraged Buyout", href: "/deal-101/lbo", description: "~73% of $10.2B acquisition financed with debt — maximizing equity returns via LBO structure" },
    { term: "Going Private", href: "/deal-101/going-private", description: "Free from quarterly earnings pressure to focus on long-term strategy — SaaS company de-listing rationale" },
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Rejected Salesforce $17B to accept PE $10.2B — board choice between independence and shareholder value" },
  ],

  faq: [
    {
      q: "Why did Zendesk reject Salesforce's $17B bid but accept the $10.2B PE buyout?",
      a: "When Salesforce offered $127/share ($17B) in early 2022, Zendesk's board decided to maintain independent management and create more value on its own. However, after a 60%+ stock decline from SaaS valuation crashes, they ultimately accepted $77.50/share ($10.2B). This is widely criticized as a case where the board's independent management judgment significantly destroyed shareholder value.",
    },
    {
      q: "What is an LBO (Leveraged Buyout) and why do PE firms prefer it?",
      a: "An LBO is an acquisition where most of the purchase price is financed through debt. For Zendesk, approximately $7.5B of the $10.2B was debt, and ~$2.7B was PE equity. From a PE perspective, leverage maximizes equity return on investment (ROE). For example, if enterprise value rises 30%, the equity return exceeds that. However, the high debt means the company's cash flows must cover interest payments.",
    },
    {
      q: "Why do PE firms prefer going private transactions?",
      a: "Public companies face quarterly earnings disclosures and short-term pressure from shareholders and analysts. Post-going-private, companies can focus on 3-5 year long-term strategy rather than quarterly EPS targets. They can also more freely make decisions that reduce near-term earnings but increase long-term value — such as M&A, restructuring, and pricing policy changes. For Zendesk, AI product investment and cost structure optimization are easier in a private environment.",
    },
    {
      q: "What is the outcome of the Zendesk PE buyout?",
      a: "As of late 2024, Zendesk operates as a private company with financial information undisclosed. Permira and H&F are advancing AI customer service feature enhancement and cost optimization while exploring re-IPO or strategic sale (to Salesforce, ServiceNow, etc.) scenarios within 3-5 years. The customer service AI trend is working favorably for Zendesk, making the outcome noteworthy.",
    },
  ],
};

export default deal;
