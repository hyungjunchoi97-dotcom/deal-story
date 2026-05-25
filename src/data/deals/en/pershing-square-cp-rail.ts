import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "pershing-square-cp-rail",
  title: "Bill Ackman vs. Canadian Pacific — How a Proxy Fight Turned a Railroad Into a 4.7x Return",
  subtitle: "Bill Ackman Activism · Hunter Harrison CEO Change · Precision Scheduled Railroading · Proxy Battle Landslide",
  category: "activism",
  industry: "Rail & Logistics",
  country: "Canada",
  announcedAt: "2011-10-28",
  closedAt: "2012-05-17",
  announcedDisplay: "October 2011",
  closedDisplay: "May 2012",
  readingMinutes: 10,
  tags: ["Pershing Square", "CP Rail", "Bill Ackman", "activism", "Hunter Harrison", "proxy fight", "PSR", "railroad activism"],
  excerpt:
    "Bill Ackman's Pershing Square accumulated a 14.2% stake in Canadian Pacific Railway, demanding CEO replacement and board overhaul. A decisive proxy fight victory led to the appointment of Hunter Harrison, who drove the operating ratio from 81% to 61% and propelled the stock from C$46 to C$220 — one of the most dramatic returns in activism history.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "PSQ", bg: "bg-indigo-700", label: "Pershing Square" },
  target:   { initials: "CP",  bg: "bg-red-700",    label: "CP Rail" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Canadian Pacific Railway (CP Rail) was Canada's second-largest railroad, but it suffered chronic operational inefficiency compared to rival CN Rail. Its operating ratio (OR) stood at 81%, a wide gap versus CN Rail's 63%, and management complacency had persisted for over a decade with no meaningful effort to close that gap.",
    "Bill Ackman's Pershing Square Capital Management disclosed a 12.2% stake in CP Rail in October 2011, later expanding to 14.2%. Total investment was approximately CAD 1.4 billion. Pershing Square's core demands were clear: replace CEO Fred Green and bring in Hunter Harrison — the legendary CN Rail CEO — as his successor.",
    "CP's board and management resisted, insisting the company was performing well. At the May 2012 annual meeting, a full-scale proxy contest erupted. Pershing Square secured 7 of 12 board seats — a landslide victory. Fred Green resigned as CEO.",
    "Hunter Harrison took over as CEO and immediately implemented Precision Scheduled Railroading (PSR), improving the OR from 81% to 61% in just four years. CP's stock soared from C$46 to a peak of C$220 — a 4.7x gain — cementing the deal as one of the most spectacular outcomes in the history of shareholder activism.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Pershing Square Investment approx. CAD 1.4B",
    acquirerName: "Pershing Square",
    targetName: "CP Rail",
    announcedDisplay: "October 2011",
    closedDisplay: "May 2012",
    country: "Canada",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "Pershing Square accumulated a 14.2% stake in CP Rail and demanded CEO removal and board overhaul. The target: chronic OR of 81% versus CN Rail's 63%.",
    "May 2012 proxy fight: Pershing Square secured 7 of 12 board seats — a decisive win. CEO Fred Green stepped down.",
    "Hunter Harrison appointed CEO → PSR implemented → OR improved from 81% to 61% in four years.",
    "CP stock: C$46 (Ackman entry) → C$220 (Harrison peak) = 4.7x gain.",
    "Pershing Square investment return: approx. CAD 1.4B invested → approx. CAD 2.7B+ recovered (approximately +93%).",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "The North American railroad industry uses the operating ratio (OR) as its core efficiency benchmark. It is a concentrated oligopoly handling bulk freight — coal, grain, energy, and automobiles. The greater the gap to best-in-class efficiency, the larger the activist opportunity. CN Rail had already demonstrated what PSR could achieve (OR ~63%), while CP Rail languished at 81% — a gap that Ackman identified as the core investment thesis.",
    metrics: [
      { label: "CP Rail OR (at activist entry)", value: "81.3%",       sub: "Higher = less efficient; room to improve" },
      { label: "CN Rail OR (benchmark)",          value: "63.0%",       sub: "North American railroad efficiency standard" },
      { label: "Pershing Square stake",           value: "14.2%",       sub: "CAD 1.4B investment, largest shareholder" },
      { label: "Proxy fight outcome",             value: "7 of 12 seats", sub: "Pershing Square landslide win" },
    ],
    subBody:
      "The operating ratio (OR) measures operating costs as a percentage of revenue — the lower the better. Precision Scheduled Railroading (PSR) maximizes asset utilization by reducing train frequency while increasing train length, running on fixed timetables regardless of whether cargo has accumulated. Hunter Harrison pioneered and refined PSR across multiple railroads.",
    players: [
      { name: "Pershing Square (Bill Ackman)", role: "Activist hedge fund, 14.2% largest shareholder" },
      { name: "CP Rail Management (Fred Green CEO)", role: "Resisted activism; eventually ousted" },
      { name: "Hunter Harrison", role: "Former CN Rail CEO; recruited by Pershing Square as incoming CEO" },
      { name: "CN Rail", role: "North American railroad efficiency benchmark — OR 63%" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Canadian Pacific Railway (CP Rail)",
    body: "Founded in 1881, CP Rail is Canada's second-largest railroad operating approximately 21,000 km of track and employing around 19,000 people. Despite its scale and near-monopoly positioning in key corridors, the company had suffered persistent operational inefficiency — OR of 81% versus CN Rail's 63% — for over a decade. Management under Fred Green showed little urgency to close this gap, and the stock had reflected that complacency.",
    metrics: [
      { label: "Founded",                     value: "1881",            sub: "Canada's first transcontinental railroad" },
      { label: "Track Length",                value: "~21,000 km",      sub: "Canada and northern United States" },
      { label: "Employees",                   value: "~19,000",         sub: "At activist entry" },
      { label: "Operating Ratio (OR)",         value: "81.3%",           sub: "CN Rail gap: 18+ percentage points" },
      { label: "Annual Revenue (FY2011)",      value: "CAD 5.0B",        sub: "Freight-heavy revenue mix" },
      { label: "Market Cap (at entry)",        value: "approx. CAD 8.7B", sub: "EV/EBITDA ~5.7x — undervalued" },
    ],
    financials: [
      { year: "FY2009", revenue: 4280, cogs: 2780, grossProfit: 1500, sga: 680, operatingIncome: 820,  ebitda: 1380 },
      { year: "FY2010", revenue: 4490, cogs: 2920, grossProfit: 1570, sga: 700, operatingIncome: 870,  ebitda: 1450 },
      { year: "FY2011", revenue: 5000, cogs: 3220, grossProfit: 1780, sga: 730, operatingIncome: 1050, ebitda: 1650 },
      { year: "FY2012", revenue: 5310, cogs: 3320, grossProfit: 1990, sga: 760, operatingIncome: 1230, ebitda: 1870 },
    ],
    financialsNote: "Unit: CAD M (millions) | Source: CP Rail annual reports and public filings",
    financialsCurrency: "C$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "CP Rail's governance failure was not concentrated ownership but entrenched management. A widely-held public company allowed an ineffective CEO to persist for over a decade while the board watched. Ackman recognized the flip side: a dispersed shareholder base means a determined activist with sufficient stake can replace the board through a proxy fight.",
    shareholders: [
      {
        id: "pershing",
        label: "Pershing Square",
        sub: "Bill Ackman activist fund",
        stake: "14.2%",
        stakePct: 14.2,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "ca_inst",
        label: "Canadian Institutional Investors",
        sub: "Pension funds, insurers",
        stake: "25%",
        stakePct: 25,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "us_inst",
        label: "U.S. Institutional Investors",
        sub: "Global institutional shareholders",
        stake: "35%",
        stakePct: 35,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "General Public Shareholders",
        sub: "Retail and other investors",
        stake: "25.8%",
        stakePct: 25.8,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 15,
      independent: 12,
      affiliated: 3,
      note: "A 15-member board was considered oversized. Ackman proposed reducing it to 7. The existing board had tolerated the OR gap for years without intervention.",
    },
    issues: [
      {
        title: "Ineffective CEO — Long-Term Neglect",
        description: "OR of 81% persisted for more than a decade with no corrective action. The gap with CN Rail was never addressed under Fred Green's tenure.",
        severity: "critical",
      },
      {
        title: "Board Failure to Oversee Management",
        description: "A 15-member board lacked effective oversight capacity. There was no meaningful accountability mechanism for management underperformance.",
        severity: "critical",
      },
      {
        title: "Capital Allocation Inefficiency",
        description: "Large capital expenditures continued despite persistently low operational efficiency. ROE showed no improvement while shareholder capital was consumed.",
        severity: "high",
      },
      {
        title: "Shareholder Communication Failure",
        description: "Even after activist entry, management responded defensively with 'we are performing well.' No constructive engagement with investor concerns.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "Replace CEO Fred Green",
        result: "won",
        note: "New board elected after proxy victory removed Fred Green as CEO.",
      },
      {
        demand: "Reduce board from 15 to 7 directors",
        result: "won",
        note: "Board was restructured and reduced in size.",
      },
      {
        demand: "Appoint Hunter Harrison as new CEO",
        result: "won",
        note: "Former CN Rail CEO Hunter Harrison took over and implemented PSR, driving OR from 81% to 61%.",
      },
    ],
    stockImpact: {
      preCampaign: "C$46",
      peakDuringCampaign: "C$220",
      postCampaign: "C$180+",
      note: "Stock rose 4.7x in just four years following Ackman's entry in October 2011. One of the most dramatic stock performance cases in activism history. Pershing Square sold its stake at approximately C$195 around 2016.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "Pershing Square used its 14.2% stake to win a proxy fight and secure a board majority. The new board then executed the CEO replacement. This was not a hostile takeover — it was a shareholder rights exercise to replace management, the textbook definition of activist investing.",
    preOwnership: {
      nodes: [
        { id: "pershing",  label: "Pershing Square",      sub: "14.2% stake, demands board overhaul",   type: "acquirer" },
        { id: "cp",        label: "CP Rail",              sub: "Canada's #2 railroad, OR 81%",          type: "target" },
        { id: "green",     label: "Fred Green CEO",       sub: "10+ year tenure, inefficiency unchecked", type: "entity" },
        { id: "board15",   label: "15-Member Board",      sub: "Failed oversight, lost shareholder trust", type: "entity" },
        { id: "inst",      label: "Institutional Investors", sub: "~60% held, neutral swing voters",    type: "public" },
      ],
      edges: [
        { from: "pershing", to: "cp",      label: "14.2% stake" },
        { from: "green",    to: "cp",      label: "CEO (10+ years)" },
        { from: "board15",  to: "green",   label: "Tolerated underperformance" },
        { from: "pershing", to: "board15", label: "Demands board replacement" },
        { from: "inst",     to: "cp",      label: "~60% held (neutral)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "pershing",  label: "Pershing Square",      sub: "14.2% + 7 board seats",              type: "acquirer" },
        { id: "cp",        label: "CP Rail",              sub: "New board and CEO; PSR transformation", type: "target" },
        { id: "harrison",  label: "Hunter Harrison CEO",  sub: "Former CN Rail CEO; PSR architect",   type: "entity" },
        { id: "board7",    label: "New 7-Member Board",   sub: "Pershing Square-nominated majority",  type: "entity" },
      ],
      edges: [
        { from: "pershing", to: "cp",       label: "14.2% + board majority" },
        { from: "board7",   to: "harrison", label: "Appointed new CEO" },
        { from: "harrison", to: "cp",       label: "PSR → OR 81%→61%" },
      ],
    },
    keyTerms: [
      { label: "Proxy Fight Result",   value: "7 of 12 seats secured (landslide)",     accent: true },
      { label: "Pershing Square Stake", value: "14.2%" },
      { label: "CEO Change",           value: "Fred Green → Hunter Harrison",           accent: true },
      { label: "OR Improvement",       value: "81% → 61% (4 years)",                   accent: true },
      { label: "Stock Return",         value: "C$46 → C$220 (+378%)" },
      { label: "Investment Return",    value: "~+93% (CAD 1.4B → CAD 2.7B+)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Pershing Square assembled a focused advisory team for the proxy campaign. CP Rail engaged Goldman Sachs and Canada's top law firm for its defense — but ultimately it was not enough to survive a well-organized proxy contest backed by undeniable performance data.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Pershing Square (Activist)",
        initials: "PSQ",
        bg: "bg-indigo-700",
        advisors: [
          {
            firm: "Lazard",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Independent valuation of CP Rail and analysis of value creation potential under OR improvement. Supported proxy campaign strategy.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Legal strategy for the proxy contest, SEC disclosure compliance, and director nomination process.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "CP Rail (Defense)",
        initials: "CP",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Defense of CP Rail's current management strategy and shareholder communications support.",
          },
          {
            firm: "Stikeman Elliott",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Proxy defense legal strategy under Canadian law; board advisory.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources and may not reflect all advisory relationships.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Pershing Square's investment thesis was straightforward: closing the OR gap to CN Rail levels would generate billions in additional EBITDA, and a depressed entry multiple (EV/EBITDA of ~5.7x) provided a wide margin of safety. With Hunter Harrison's track record as proof of concept, the upside was quantifiable.",
    rows: [
      { item: "CP Rail Stock Price (Entry)",          val: "C$46",        note: "October 2011, Pershing Square entry" },
      { item: "CP Rail EV (2011)",                    val: "~C$8.3B",     note: "Market cap + net debt" },
      { item: "EV/EBITDA (Entry)",                    val: "~5.7x",       note: "Significant discount to sector average",  accent: true },
      { item: "Hunter Harrison Era Peak Stock Price", val: "C$220",       note: "2014 peak",                               accent: true },
      { item: "Pershing Square Exit Price (Est.)",    val: "~C$195",      note: "Stake sold ~2016" },
      { item: "Total Stock Return",                   val: "+378%",       note: "C$46 → C$220 (4.7x)",                     accent: true },
    ],
    disclaimer: "Note: Price and EV figures are based on public disclosures. Pershing Square's exact exit price and net return may vary.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Pershing Square targeted CP Rail",
      initials: "PSQ",
      bg: "bg-indigo-700",
      points: [
        "Closing the OR gap alone would generate billions in EBITDA. Improving to CN Rail's ~63% level implied EBITDA growth of 30%+.",
        "Hunter Harrison provided a proven, ready-made solution. His track record at CN Rail (OR taken to ~55%) removed execution uncertainty.",
        "A dispersed shareholder base made a proxy fight winnable with 14.2%. No controlling shareholder to overcome.",
        "Discounted entry valuation: EV/EBITDA of ~5.7x was materially below sector averages, providing substantial downside protection.",
      ],
    },
    seller: {
      title: "Why CP management ultimately stepped down",
      initials: "CP",
      bg: "bg-red-700",
      points: [
        "The board lost shareholder confidence entirely. Pershing Square won 7 of 12 proxy seats, leaving management with no mandate.",
        "Institutional investors shifted from neutral to supporting Pershing Square. The OR gap data was irrefutable.",
        "With a new board in place, CEO removal was inevitable. There was no governance path to survival.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Hunter Harrison's transformation of CP Rail reshaped not just the company, but the entire North American railroad industry. PSR became the standard operating playbook across the sector. Pershing Square's investment stands as one of the clearest examples of value creation through a single, well-targeted CEO change.",
    overallVerdict: "Complete victory for Pershing Square and shareholders; a watershed moment for railroad industry innovation",
    positives: [
      "OR improved from 81% to 61% in four years. Annual EBITDA more than doubled from ~CAD 1.38B to over CAD 3B.",
      "Stock rose 4.7x from C$46 to C$220 — one of the highest stock-price returns in activist investing history.",
      "PSR revolution: Harrison's methodology became the industry standard, adopted at CSX, KCS, and other railroads.",
      "Pershing Square return: approximately CAD 1.4B invested → CAD 2.7B+ recovered (~+93%).",
    ],
    risks: [
      "Harrison's aggressive cost-cutting raised safety concerns. Large-scale employee reductions led to labor tensions and scrutiny over infrastructure maintenance.",
      "Critics argued that PSR's emphasis on efficiency over capacity could create long-term underinvestment in railroad infrastructure.",
      "Harrison departed CP Rail in 2017 for CSX and passed away in December 2017, raising questions about succession risk for PSR-based transformations.",
    ],
    editorNote:
      "The CP Rail deal shows what activism looks like when it works perfectly. A single CEO change created nearly 5x stock appreciation. What made it work was not just identifying the problem — it was knowing the solution and the name attached to it. Ackman did not simply demand change; he arrived with a candidate and a blueprint. That specificity is what turned a thesis into a 4.7x return.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PSQ",
    acquirerBg: "bg-indigo-700",
    targetInitials: "CP",
    targetBg: "bg-red-700",
    acquirerName: "Pershing Square",
    targetName: "CP Rail",
    dealTitle: "Pershing Square's Proxy Battle at Canadian Pacific Railway",
    dealSize: "Investment approx. CAD 1.4B",
    dealSizeUSD: "approx. CAD 1.4 Billion",
    evEbitda: "~5.7× (at entry)",
    closeDate: "May 2012",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Pershing Square Capital Management, 13F Filing re: CP Rail (October 28, 2011), SEC EDGAR" },
    { id: 2, text: "Pershing Square, Shareholder Letter and Investor Presentation on CP Rail (October 2011 – May 2012)" },
    { id: 3, text: "Canadian Pacific Railway Annual Reports FY2011–FY2014, Operating Ratio Trend" },
    { id: 4, text: "Canadian Pacific Railway Annual Meeting Results Announcement (May 17, 2012)" },
    { id: 5, text: "Hunter Harrison CEO Appointment and PSR Strategy Announcement (June 2012)" },
    { id: 6, text: "William Thorndike, 'The Outsiders' — Hunter Harrison CP Rail Case Analysis" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Bill Ackman vs. CP Rail — The Proxy Fight That Delivered a 4.7x Return",
    description:
      "Complete analysis of Pershing Square's activist campaign at Canadian Pacific Railway. Hunter Harrison CEO change, OR 81%→61% improvement, stock C$46→C$220. One of the most dramatic stock returns in activism history.",
    keywords: [
      "Pershing Square CP Rail",
      "Bill Ackman activism",
      "Canadian Pacific stock return",
      "Hunter Harrison CEO",
      "proxy fight victory",
      "Precision Scheduled Railroading",
      "railroad activism hedge fund",
      "activist investing returns",
      "Canadian corporate governance",
      "operating ratio improvement",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Operating Ratio (OR)",
      description: "Operating costs as a percentage of revenue — the lower, the more efficient. The core KPI in North American railroads. CP Rail improved from 81% to 61% under Harrison.",
    },
    {
      term: "Proxy Fight",
      description: "A shareholder contest to replace board directors by soliciting votes from other shareholders. Pershing Square won 7 of 12 seats at CP Rail's 2012 AGM.",
    },
    {
      term: "Precision Scheduled Railroading (PSR)",
      description: "An operating philosophy that maximizes asset utilization by running trains on fixed timetables at maximum length. Pioneered by Hunter Harrison across multiple railroads.",
    },
    {
      term: "Shareholder Activism",
      description: "An investment strategy where a shareholder accumulates a stake and pressures management for strategic or governance changes to unlock shareholder value.",
    },
    {
      term: "CEO Premium",
      description: "The valuation uplift created by replacing the wrong CEO with the right one. At CP Rail, a single CEO change generated nearly a 5x stock price increase.",
    },
    {
      term: "Dispersed Ownership Structure",
      description: "A listed company with no controlling shareholder, where shares are spread across many investors. This structure is favorable for activist investors, as board control can be won with a relatively small stake.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Why does the operating ratio matter so much?",
      a: "The OR tells you how much it costs to generate one dollar of revenue. An OR of 81% means C$0.81 in costs for every C$1.00 earned. CN Rail's 63% meant it kept 37 cents versus CP's 19 cents — nearly double. Closing that 18-point gap implied billions in incremental EBITDA.",
    },
    {
      q: "Why was Hunter Harrison specifically the answer?",
      a: "Harrison had already proven he could fix exactly this problem. At CN Rail, he had taken the OR to approximately 55% using PSR. Ackman did not merely demand management change — he arrived with a specific candidate whose track record eliminated execution uncertainty.",
    },
    {
      q: "How did Pershing Square win the proxy fight?",
      a: "With 14.2% as a foundation, Pershing Square systematically engaged institutional investors with a compelling data-driven case: the OR gap, CP's decade of underperformance, and Harrison's documented results at CN Rail. The logic was airtight and the institutions voted accordingly — 7 of 12 seats.",
    },
    {
      q: "How much did Pershing Square earn?",
      a: "Pershing Square invested approximately CAD 1.4 billion and is believed to have sold its stake around CAD 195 per share circa 2016 — roughly 4x its entry price of C$46. Total proceeds are estimated at CAD 2.7 billion or more, representing approximately +93% in total dollar return.",
    },
    {
      q: "Did CP Rail's transformation last after Harrison left?",
      a: "Yes. PSR had become institutionalized in CP Rail's operations before Harrison left in 2017 for CSX. CP Rail subsequently acquired Kansas City Southern, creating the first single-line railroad connecting Canada, the United States, and Mexico — a direct extension of the efficiency culture Harrison built.",
    },
    {
      q: "What is Precision Scheduled Railroading (PSR)?",
      a: "PSR is an operating model that runs trains on fixed timetables at maximum length, instead of waiting for cargo to accumulate. It maximizes utilization of locomotives, cars, and track while cutting crew and fuel costs. Harrison developed it at Illinois Central, refined it at CN Rail, and completed it at CP Rail — transforming each company's efficiency in the process.",
    },
  ],
};

export default deal;
