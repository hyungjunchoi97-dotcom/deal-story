import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "valueact-microsoft",
  title: "ValueAct vs. Microsoft — How a 0.8% Stake Changed a $2 Trillion Company",
  subtitle: "Quiet Activism Masterclass · Ballmer Exit · Nadella Era · Cloud Pivot · $2 Trillion Market Cap",
  category: "activism",
  industry: "Software / Big Tech",
  country: "United States",
  announcedAt: "2013-04-03",
  closedAt: "2014-02-04",
  announcedDisplay: "April 2013",
  closedDisplay: "February 2014",
  readingMinutes: 9,
  tags: ["ValueAct", "Microsoft", "quiet activism", "Ballmer exit", "Satya Nadella", "cloud pivot", "CEO change", "activist investing"],
  excerpt:
    "ValueAct Capital accumulated a 0.8% stake (~$2 billion) in Microsoft and secured board observer access without launching a public campaign. The resulting CEO transition from Steve Ballmer to Satya Nadella drove Microsoft's stock from $27 to $400+ — one of the most successful CEO-change investments in market history.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "VA", bg: "bg-teal-700",  label: "ValueAct Capital" },
  target:   { initials: "MS", bg: "bg-blue-600",  label: "Microsoft" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "By 2013, Microsoft was in its 13th year under CEO Steve Ballmer. Windows and Office remained dominant cash engines, but the company had completely missed the mobile and cloud revolutions. Windows Phone held less than 3% market share, Surface tablets were a recurring disappointment, and the stock had been trapped in a $27–$30 range for 13 years — ever since the dot-com bubble burst.",
    "ValueAct Capital, founded by Jeff Ubben, quietly accumulated approximately 0.8% of Microsoft shares (~$2 billion) between February and April 2013. Unlike most activist funds, ValueAct did not launch public letters, media campaigns, or proxy threats. Instead, it requested board observer access — the hallmark of its 'quiet activism' approach.",
    "ValueAct's thesis was straightforward: Microsoft's true value depended not on perpetuating a Windows-centric strategy, but on pivoting to Azure and Office 365. A single change — removing Ballmer and appointing a cloud-native CEO — would unlock enormous latent value that the market was refusing to price in.",
    "In August 2013, Ballmer announced he would step down within 12 months. In February 2014, Satya Nadella became CEO. ValueAct's Mason Morfit was elevated from board observer to full board director the same month. What followed was one of the greatest corporate reinventions in technology history: Microsoft's stock climbed from $27 to over $400, and market cap surpassed $2 trillion.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Microsoft market cap approx. USD 240B",
    acquirerName: "ValueAct Capital",
    targetName: "Microsoft",
    announcedDisplay: "April 2013",
    closedDisplay: "February 2014",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "ValueAct accumulated a 0.8% Microsoft stake ($2B) and secured board observer access — no public campaign, no proxy fight. The textbook definition of quiet activism.",
    "Core demand: Steve Ballmer out; a cloud-specialist CEO in.",
    "August 2013: Ballmer announces resignation within 12 months. February 2014: Satya Nadella becomes CEO.",
    "Microsoft stock: $27 (ValueAct entry) → $400+ (Nadella era). Market cap surpassed $2 trillion.",
    "ValueAct estimated return: $2B invested → $4B+ recovered (approximately +100%).",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2013 was an inflection point for the cloud SaaS transition. AWS was dominating enterprise cloud, Google was entering the business productivity market, and Salesforce had proven the SaaS model's superiority. Microsoft possessed every asset needed to win this transition — Office relationships, enterprise trust, and early Azure infrastructure — but was paralyzed by its Windows-first strategy under Ballmer. ValueAct saw the gap between potential and reality as the investment opportunity.",
    metrics: [
      { label: "Microsoft Stock Stagnation",     value: "13 years ($27–$30)",   sub: "Post-dot-com through 2013" },
      { label: "ValueAct Stake Accumulated",      value: "0.8% (~$2B)",          sub: "13F filed April 2013" },
      { label: "Stock Reaction to Ballmer Exit",  value: "$34 (+26%)",           sub: "Immediate market reaction, Aug 2013" },
      { label: "Nadella Era Peak",                value: "$400+",                sub: "Market cap surpassed $3T (2021+)" },
    ],
    subBody:
      "Quiet activism is ValueAct's signature approach: instead of public letters, media pressure, and proxy contests, it builds board access and drives change from within through private dialogue. This method trades speed for relationship preservation and avoids the stock volatility of public campaigns — but can be just as effective when the thesis is compelling and the board is receptive.",
    players: [
      { name: "ValueAct Capital (Jeff Ubben)", role: "Quiet activist fund, 0.8% stake, board access" },
      { name: "Steve Ballmer (Microsoft CEO)", role: "13-year tenure; missed mobile and cloud; departed 2014" },
      { name: "Satya Nadella", role: "Cloud specialist, incoming CEO; drove Azure, Teams, M365 transformation" },
      { name: "Bill Gates", role: "4.5% holder; actively involved in Nadella's selection process" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Microsoft Corporation",
    body: "In FY2013, Microsoft was a $77.8 billion revenue software giant employing approximately 100,000 people. Its Windows and Office franchises generated enormous profits, but 13 years of Ballmer's leadership had produced complete failures in mobile and cloud. Cloud revenue accounted for less than 5% of total sales, and the stock had flatlined since the dot-com bust. The gap between Microsoft's underlying assets and its market valuation was the heart of ValueAct's thesis.",
    metrics: [
      { label: "Employees (FY2013)",             value: "~100,000",          sub: "Global software workforce" },
      { label: "Revenue (FY2013)",               value: "$77.8B",            sub: "Windows and Office dominated" },
      { label: "Windows Market Share",            value: "90%+",              sub: "PC OS dominant position" },
      { label: "Cloud Revenue Mix",               value: "<5%",              sub: "Azure early stage; far behind AWS" },
      { label: "Stock Stagnation Period",         value: "13 years",          sub: "$27–$30 range, 2000–2013" },
      { label: "Market Cap (at ValueAct Entry)", value: "~$240B",            sub: "EV/EBITDA ~7.8x — undervalued" },
    ],
    financials: [
      { year: "FY2011", revenue: 69943, cogs: 15577, grossProfit: 54366, sga: 20875, operatingIncome: 27161, ebitda: 30000 },
      { year: "FY2012", revenue: 73723, cogs: 17530, grossProfit: 56193, sga: 22227, operatingIncome: 21763, ebitda: 25000 },
      { year: "FY2013", revenue: 77849, cogs: 20249, grossProfit: 57600, sga: 23500, operatingIncome: 26764, ebitda: 30500 },
      { year: "FY2014", revenue: 86833, cogs: 26934, grossProfit: 59899, sga: 24566, operatingIncome: 27759, ebitda: 32000 },
    ],
    financialsNote: "Unit: USD M (millions) | Source: Microsoft 10-K Annual Reports",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "Microsoft's governance failure was not concentrated ownership but institutional inertia. A widely-held public company with a 14-member board had allowed an underperforming CEO to persist for 13 years. ValueAct cracked that inertia with a minority stake — not by forcing the issue, but by providing the board with the analytical cover it needed to make a change it already sensed was necessary.",
    shareholders: [
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "World's largest passive manager",
        stake: "7.2%",
        stakePct: 7.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "World's largest asset manager",
        stake: "4.5%",
        stakePct: 4.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "gates",
        label: "Bill Gates",
        sub: "Microsoft co-founder and former CEO",
        stake: "4.5%",
        stakePct: 4.5,
        type: "management",
        alignment: "pro",
      },
      {
        id: "valueact",
        label: "ValueAct Capital",
        sub: "Jeff Ubben quiet activism",
        stake: "0.8%",
        stakePct: 0.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "public",
        label: "General Public Shareholders",
        sub: "Institutional and retail mix",
        stake: "83.0%",
        stakePct: 83.0,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 14,
      independent: 11,
      affiliated: 3,
      note: "A 14-member board with formal independence but no effective CEO oversight — Ballmer's tenure lasted 13 years without meaningful board challenge. Nominal independence without functional accountability.",
    },
    issues: [
      {
        title: "Long-Term CEO Entrenchment",
        description: "During Ballmer's 13-year tenure, Microsoft completely missed mobile and cloud. Windows Phone at 3%, Surface tablets failing repeatedly, stock trapped in a 13-year range. The board took no action.",
        severity: "critical",
      },
      {
        title: "Board Failure to Oversee Strategy",
        description: "The board failed to hold management accountable for the digital transition delay for over a decade. Strategic oversight was effectively absent.",
        severity: "high",
      },
      {
        title: "Innovation Culture Rigidity",
        description: "Obsession with the Windows-first revenue model suppressed internal cloud initiatives and prevented adaptation to the mobile era.",
        severity: "high",
      },
      {
        title: "Capital Allocation Discipline",
        description: "Despite a depressed valuation, large M&A failures continued (Nokia at $7.2B, written down almost entirely). Shareholder capital was not deployed efficiently.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "Remove Steve Ballmer as CEO",
        result: "won",
        note: "Ballmer announced 12-month departure in August 2013. ValueAct's private pressure is credited with accelerating board deliberations.",
      },
      {
        demand: "Appoint a cloud-specialist CEO",
        result: "won",
        note: "Satya Nadella (EVP, Cloud & Enterprise) appointed CEO in February 2014. Drove Azure, M365, Teams transformation.",
      },
      {
        demand: "ValueAct board representation",
        result: "won",
        note: "Mason Morfit (ValueAct President) appointed full board director in February 2014.",
      },
    ],
    stockImpact: {
      preCampaign: "$27",
      peakDuringCampaign: "$400+",
      postCampaign: "$380+",
      note: "From ValueAct's entry at $27 (April 2013) to $400+ over the following decade. Market cap surpassed $2 trillion. A single CEO change created over $1.5 trillion in shareholder value — one of the most significant governance-driven value creation events in corporate history.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "ValueAct drove change entirely through private dialogue and board access — no public letters, no proxy contest. A 0.8% stake secured an observer seat on the board of a $240 billion company. The resulting CEO transition, negotiated internally, was the defining moment of quiet activism as a strategy.",
    preOwnership: {
      nodes: [
        { id: "valueact",  label: "ValueAct Capital",  sub: "0.8% stake; seeking board access",      type: "acquirer" },
        { id: "ms",        label: "Microsoft",         sub: "$77.8B revenue; stock in 13-year range", type: "target" },
        { id: "ballmer",   label: "Steve Ballmer CEO", sub: "13-year tenure; missed mobile & cloud",  type: "entity" },
        { id: "board14",   label: "14-Member Board",   sub: "No effective CEO oversight",             type: "entity" },
        { id: "gates",     label: "Bill Gates",        sub: "4.5% holder; technology advisor",        type: "fund" },
      ],
      edges: [
        { from: "valueact", to: "ms",       label: "0.8% stake" },
        { from: "ballmer",  to: "ms",       label: "CEO (13 years)" },
        { from: "board14",  to: "ballmer",  label: "Tolerated underperformance" },
        { from: "valueact", to: "board14",  label: "Private dialogue and pressure" },
        { from: "gates",    to: "ms",       label: "4.5% holder" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "valueact",  label: "ValueAct Capital",   sub: "0.8% + 1 full board seat",           type: "acquirer" },
        { id: "ms",        label: "Microsoft",          sub: "Cloud pivot; $2T+ market cap",        type: "target" },
        { id: "nadella",   label: "Satya Nadella CEO",  sub: "Azure, Teams, M365 transformation",   type: "entity" },
        { id: "gates",     label: "Bill Gates",         sub: "Supported Nadella selection; mentor",  type: "fund" },
      ],
      edges: [
        { from: "valueact", to: "ms",      label: "0.8% + board seat" },
        { from: "nadella",  to: "ms",      label: "Cloud-first transformation" },
        { from: "gates",    to: "nadella", label: "Technology mentoring" },
      ],
    },
    keyTerms: [
      { label: "Activism Approach",      value: "Quiet activism (private dialogue)",         accent: true },
      { label: "ValueAct Stake",         value: "0.8% (~$2B)" },
      { label: "CEO Change",             value: "Steve Ballmer → Satya Nadella",             accent: true },
      { label: "Board Progression",      value: "Observer (2013) → Full Director (Feb 2014)" },
      { label: "Stock Performance",      value: "$27 → $400+ (+1,381%)",                     accent: true },
      { label: "Market Cap Change",      value: "$240B → $2T+ (+733%)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Given the private nature of ValueAct's quiet activism approach, neither side ran a formal public advisory process. The following represents estimated advisory relationships based on similar transactions.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "ValueAct Capital (Activist)",
        initials: "VA",
        bg: "bg-teal-700",
        advisors: [
          {
            firm: "Internal team (Jeff Ubben led)",
            role: "Investment Strategy and Board Access",
            roleType: "financial",
            note: "ValueAct's approach minimized external advisors. Internal team led private engagement with Microsoft's board.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Legal Advisor (estimated)",
            roleType: "legal",
            note: "Governance and SEC disclosure advisory. Not officially confirmed from public sources.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Microsoft Board",
        initials: "MS",
        bg: "bg-blue-600",
        advisors: [
          {
            firm: "Morgan Stanley",
            role: "Financial Advisor (estimated)",
            roleType: "financial",
            note: "Advisory on CEO succession and strategic review. Not officially confirmed from public sources.",
          },
          {
            firm: "Gibson, Dunn & Crutcher",
            role: "Legal Advisor (estimated)",
            roleType: "legal",
            note: "Board governance advisory. Not officially confirmed from public sources.",
          },
        ],
      },
    ],
    disclaimer: "Note: Due to the private nature of the engagement, advisor information is not confirmed from public sources. Estimated based on comparable transaction patterns.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "ValueAct's thesis was that Microsoft at $27 per share — trading at ~7.8x EV/EBITDA — was priced as a stagnant Windows company. Under a cloud-native CEO, the same asset base would deserve a growth multiple, implying a stock price multiple times higher. The only condition: removing Ballmer.",
    rows: [
      { item: "Microsoft Stock Price (Entry)",        val: "$27",           note: "April 2013, ValueAct purchase" },
      { item: "EV/EBITDA (FY2013)",                   val: "~7.8x",         note: "Significant discount to potential",   accent: true },
      { item: "Immediate Reaction to Ballmer Exit",   val: "$34 (+26%)",    note: "Market response, August 2013" },
      { item: "Nadella Era Peak Stock Price",         val: "$400+",         note: "Post-2021 peak",                      accent: true },
      { item: "ValueAct Estimated Exit Price",        val: "~$50–$100",     note: "Staged exits over multiple years" },
      { item: "Market Cap Change",                    val: "$240B → $2T+",  note: "$1.5T+ in value created (decade)",    accent: true },
    ],
    disclaimer: "Note: ValueAct's exact exit timing and realized return are not publicly disclosed. Figures are estimates.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why ValueAct targeted Microsoft",
      initials: "VA",
      bg: "bg-teal-700",
      points: [
        "A cloud pivot would re-rate Microsoft from a stagnant Windows company to a growth platform. Azure and Office 365 early traction provided the proof of concept.",
        "One condition: remove Ballmer. A single CEO change would unlock value the market refused to price in.",
        "Dispersed ownership allowed board influence with 0.8% — no controlling shareholder to overcome, and the board was already internally questioning the status quo.",
        "Discounted entry (EV/EBITDA ~7.8x) provided a wide margin of safety with asymmetric upside.",
      ],
    },
    seller: {
      title: "Why Microsoft's board accepted change",
      initials: "MS",
      bg: "bg-blue-600",
      points: [
        "Internal pressure from 13 years of stock underperformance had already been building. ValueAct's private engagement accelerated what the board already sensed was necessary.",
        "The cloud transition thesis was intellectually compelling, and internal champions (including Gates and Nadella's team) aligned with it.",
        "ValueAct's non-adversarial approach made it possible for the board to accept change without public humiliation or shareholder war.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Under Nadella, Microsoft became an entirely different company. Azure competes neck-and-neck with AWS for cloud leadership. Teams became the standard for enterprise collaboration. GitHub and LinkedIn acquisitions locked in the developer and professional ecosystems. The $2 trillion market cap milestone was not the end — it was a waypoint in one of the greatest corporate transformations in business history.",
    overallVerdict: "One of the highest-return activist investments ever recorded",
    positives: [
      "Nadella's Microsoft integrated Azure, Teams, GitHub ($7.5B), and LinkedIn ($26.2B). Dominance across cloud, productivity, and developer platforms.",
      "Market cap: $240B (2013) → $2T+ (2021). Over $1.5 trillion in shareholder value created in under a decade.",
      "ValueAct estimated return: $2B invested → $4B+ recovered (+100%+).",
      "Quiet activism validated: a $2 trillion company changed direction without a single public letter, media battle, or proxy contest.",
    ],
    risks: [
      "The direct causal link between ValueAct's involvement and Ballmer's exit remains debated. Ballmer may have already been contemplating retirement; ValueAct's role may have been catalytic rather than decisive.",
      "Depending on when ValueAct exited, actual realized returns could be far lower than the peak stock price implies — a 2015 exit at $50 is very different from a 2021 exit at $300.",
      "Nadella's Nokia write-down ($7.2B acquisition, mostly impaired) was a necessary but painful cleanup of Ballmer's legacy, creating short-term costs.",
    ],
    editorNote:
      "ValueAct vs. Microsoft is the masterclass in quiet activism. A 0.8% stake changed a $2 trillion company. The core lesson: the weapon of activism is not stake size — it is the quality of the argument. ValueAct won without fighting. It gave the board the analytical permission to make a change it was already afraid to make on its own.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "VA",
    acquirerBg: "bg-teal-700",
    targetInitials: "MS",
    targetBg: "bg-blue-600",
    acquirerName: "ValueAct Capital",
    targetName: "Microsoft",
    dealTitle: "ValueAct Capital's Quiet Activism at Microsoft",
    dealSize: "Investment approx. USD 2.0B",
    dealSizeUSD: "approx. USD 2.0 Billion",
    evEbitda: "~7.8× (at entry)",
    closeDate: "Feb 2014",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "ValueAct Capital, 13F Filing re: Microsoft (April 3, 2013), SEC EDGAR" },
    { id: 2, text: "Microsoft, Steve Ballmer CEO Retirement Announcement (August 23, 2013)" },
    { id: 3, text: "Microsoft, Satya Nadella CEO Appointment Press Release (February 4, 2014)" },
    { id: 4, text: "Microsoft, Mason Morfit (ValueAct) Board Director Appointment (February 2014)" },
    { id: 5, text: "Microsoft Annual Reports FY2013–FY2023, Azure and Cloud Segment Growth" },
    { id: 6, text: "Satya Nadella, 'Hit Refresh' (2017) — Memoir of Microsoft's Strategic Transformation" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "ValueAct vs. Microsoft — How 0.8% Changed a $2 Trillion Company",
    description:
      "Complete analysis of ValueAct's quiet activism campaign at Microsoft. Ballmer exit, Nadella CEO transition, stock $27→$400+. How a 0.8% stake and private board access achieved what public campaigns cannot.",
    keywords: [
      "ValueAct Microsoft activism",
      "Steve Ballmer exit",
      "Satya Nadella CEO appointment",
      "Microsoft stock performance",
      "quiet activism investing",
      "cloud pivot investment thesis",
      "corporate governance CEO change",
      "activist fund returns",
      "Microsoft market cap growth",
      "Jeff Ubben ValueAct strategy",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Quiet Activism",
      description: "An activist strategy that avoids public letters, media pressure, and proxy contests — instead using private dialogue and board access to drive change from within. ValueAct is the defining practitioner.",
    },
    {
      term: "CEO Premium",
      description: "The valuation uplift created by replacing the wrong CEO with the right one. At Microsoft, a single CEO change created over $1.5 trillion in market value.",
    },
    {
      term: "Cloud Pivot",
      description: "The strategic transformation from on-premise software to cloud SaaS and PaaS models. Nadella's Microsoft is the most celebrated successful cloud pivot in enterprise technology.",
    },
    {
      term: "Board Observer",
      description: "A non-voting participant in board meetings, granted access to observe discussions without formal voting rights. ValueAct's initial role before being elevated to a full director.",
    },
    {
      term: "Dispersed Ownership",
      description: "A public company with no controlling shareholder and equity spread across many investors. This structure enables minority activists to exert board influence disproportionate to their stake size.",
    },
    {
      term: "Platform Re-rating",
      description: "The valuation premium assigned when a company successfully transitions its business model — in Microsoft's case, from a stagnant Windows company to a cloud-growth platform, driving a massive multiple expansion.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Steve Ballmer fail at Microsoft?",
      a: "Ballmer excelled at maximizing Windows and Office revenues but failed to navigate the platform shift to mobile and cloud. Windows Phone captured 3%, Surface was a repeated disappointment, and he declined to embrace open ecosystems. His managerial strengths were optimized for defending a monopoly, not building new ones.",
    },
    {
      q: "How did ValueAct actually get Ballmer removed?",
      a: "ValueAct did not force Ballmer out directly. It secured board observer access and used private dialogue to build internal consensus around the need for change. The board, already under pressure from 13 years of stock stagnation, found in ValueAct's analysis the justification it needed. Ballmer's departure was announced in August 2013 — less than a year after ValueAct's 13F filing.",
    },
    {
      q: "What did Satya Nadella actually change?",
      a: "Nadella declared 'Mobile First, Cloud First' and reorganized Microsoft around Azure and Office 365. He acquired GitHub ($7.5B) and LinkedIn ($26.2B), making Microsoft the dominant platform for developers and professionals. Teams became the enterprise collaboration standard. The result: market cap grew from $240B to over $2 trillion.",
    },
    {
      q: "How can 0.8% give real influence?",
      a: "Stake size is less important than the quality of the argument and the receptiveness of the board. ValueAct provided the analytical framework that gave a board already doubting Ballmer the confidence to act. In a dispersed-ownership company with no controlling shareholder, even a small activist stake can shift the internal conversation decisively.",
    },
    {
      q: "How much did ValueAct actually earn?",
      a: "ValueAct invested approximately $2 billion and is estimated to have recovered $4 billion+ through staged exits over multiple years — roughly +100% or more. Had it held through the $400 peak, returns would have been dramatically higher. The exact figures are not publicly disclosed.",
    },
    {
      q: "What is the difference between quiet activism and public campaigns?",
      a: "Public campaigns (Elliott, Pershing Square style) use open letters, media pressure, and proxy contests to force change quickly and loudly. Quiet activism (ValueAct style) uses private dialogue and board access to drive change from within, over a longer timeframe. Public campaigns are faster and more coercive; quiet campaigns preserve relationships and avoid destabilizing stock volatility — but require a receptive board.",
    },
  ],
};

export default deal;
