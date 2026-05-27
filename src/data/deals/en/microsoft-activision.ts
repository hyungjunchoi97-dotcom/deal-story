import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "microsoft-activision",
  title: "Why Microsoft Paid $68.7 Billion for Activision Blizzard — The Full Story",
  subtitle: "Gaming's Largest M&A Ever · 21-Month FTC·CMA·EU Battle · How Xbox Built a Gaming Empire",
  category: "ma",
  industry: "Gaming / Media & Entertainment",
  country: "United States",
  announcedAt: "2022-01-18",
  closedAt: "2023-10-13",
  announcedDisplay: "January 2022",
  closedDisplay: "October 2023",
  readingMinutes: 15,
  tags: ["Microsoft", "Activision Blizzard", "Xbox", "Call of Duty", "Game Pass", "FTC", "CMA", "antitrust", "gaming M&A"],
  excerpt:
    "Microsoft acquired Activision Blizzard for $68.7B (approx. ₩91T) — the largest gaming M&A in history. After navigating 21 months of regulatory battles across the FTC, EU, and UK CMA, the deal closed in October 2023, anchoring Call of Duty and Xbox Game Pass in Microsoft's content strategy.",

  acquirer: { initials: "MSFT", bg: "bg-blue-600", label: "Microsoft" },
  target:   { initials: "ATVI", bg: "bg-gray-800", label: "Activision Blizzard" },

  background: [
    "In early 2022, Microsoft's Xbox gaming division lagged Sony's PlayStation in exclusive titles and game library depth. Under CEO Satya Nadella, Microsoft had successfully pivoted to cloud and subscription services — and Xbox Game Pass (a monthly gaming subscription) had become the centerpiece of its gaming strategy. But without premium exclusive content, the platform couldn't compete.",
    "Activision Blizzard was one of the world's largest game publishers, holding globally dominant IP: Call of Duty, World of Warcraft, Diablo, Overwatch, Hearthstone, StarCraft, and mobile giant Candy Crush (via King). Yet by 2021, the company faced serious headwinds — a California lawsuit over workplace sexual harassment and gender discrimination, CEO Bobby Kotick under investor pressure, and a declining stock price.",
    "On January 18, 2022, Microsoft announced it would acquire Activision Blizzard in an all-cash deal at $95 per share — a ~45% premium to the pre-announcement price. Total enterprise value: $68.7B (approx. ₩91T), the largest acquisition in Microsoft's history and the largest gaming M&A ever.",
    "The deal took 21 months to close. The U.S. FTC filed suit to block it; a California federal court denied the FTC's preliminary injunction, and Microsoft's appeal ultimately prevailed. The UK CMA initially blocked the deal outright, then reversed course after Microsoft restructured cloud streaming rights. The EU approved conditionally. The transaction finally closed on October 13, 2023.",
  ],

  dealSummary: {
    dealValueDisplay: "$68.7B (approx. ₩91T)",
    acquirerName: "Microsoft Corporation",
    targetName: "Activision Blizzard, Inc.",
    announcedDisplay: "January 2022",
    closedDisplay: "October 2023",
    country: "United States",
  },

  executiveSummary: [
    "Largest gaming M&A ever — Microsoft's biggest acquisition, all-cash at $95/share, 45% premium.",
    "Core rationale: securing Call of Duty, WoW, and Candy Crush IP to anchor Xbox Game Pass as a Netflix-equivalent for gaming.",
    "21-month regulatory gauntlet: FTC lawsuit defeated in U.S. courts; UK CMA reversed initial block after cloud streaming restructure (Ubisoft 10-year deal); EU approved conditionally.",
    "Post-close: 1,900 gaming division layoffs (Jan 2024); CoD on Game Pass; Bobby Kotick exited as CEO.",
    "Signals the era of Big Tech content-platform competition — gaming becomes a subscription battleground.",
  ],

  industryOverview: {
    body: "The global gaming market was worth approximately $185B in 2022 — larger than film and music combined. Mobile gaming represented ~50% of revenue and grew fastest. Console gaming was dominated by Sony PlayStation and Microsoft Xbox, while PC gaming remained a high-margin niche. Cloud gaming (streaming games over the internet) was still nascent but seen as the next platform shift. Subscription models (Game Pass, PlayStation Plus) were emerging as the key metric for platform stickiness.",
    metrics: [
      { label: "Global Gaming Market", value: "$185B", sub: "2022, all segments" },
      { label: "Mobile Share", value: "~50%", sub: "of total revenue" },
      { label: "Game Pass Subscribers", value: "25M+", sub: "at time of announcement" },
      { label: "Activision MAU", value: "390M", sub: "monthly active users" },
    ],
    subBody:
      "The competitive dynamic was stark: Sony's PlayStation led in exclusive AAA titles (God of War, Spider-Man, Horizon), while Xbox had historically struggled in that segment. Microsoft's Game Pass offered breadth — but lacked the must-have exclusives that drive console adoption. Acquiring Activision's IP portfolio was the fastest path to closing that gap.",
    players: [
      { name: "Sony Interactive Entertainment", role: "Primary console rival, PlayStation" },
      { name: "Nintendo", role: "Differentiated platform (Switch)" },
      { name: "EA / Take-Two / Ubisoft", role: "Major third-party publishers" },
      { name: "Tencent / NetEase", role: "Dominant mobile/PC gaming in China" },
    ],
  },

  companyOverview: {
    targetName: "Activision Blizzard",
    body: "Activision Blizzard was formed through the 2008 merger of Activision and Vivendi Games (which held Blizzard Entertainment). The company operated three distinct divisions: Activision (Call of Duty, Guitar Hero), Blizzard Entertainment (WoW, Diablo, Overwatch, StarCraft, Hearthstone), and King (Candy Crush — the highest-grossing mobile game franchise globally). By 2021, the company generated ~$8.8B in net revenue with ~9,500 employees.",
    metrics: [
      { label: "Net Revenue (2021)", value: "$8.8B", sub: "FY2021" },
      { label: "Monthly Active Users", value: "390M", sub: "peak across all titles" },
      { label: "Employees", value: "~9,500", sub: "at announcement" },
      { label: "CoD Revenue Share", value: "~28%", sub: "of total revenue" },
      { label: "King (Mobile) Share", value: "~37%", sub: "of total revenue" },
      { label: "Founded", value: "1979 / 1994", sub: "Activision / Blizzard" },
    ],
    financials: [
      { year: "2019", revenue: 6489, cogs: 1380, grossProfit: 5109, sga: 2840, operatingIncome: 2269, ebitda: 2510 },
      { year: "2020", revenue: 8086, cogs: 1560, grossProfit: 6526, sga: 2990, operatingIncome: 3536, ebitda: 3780 },
      { year: "2021", revenue: 8803, cogs: 1710, grossProfit: 7093, sga: 3810, operatingIncome: 3283, ebitda: 3540 },
    ],
    financialsNote: "Revenue in USD millions. EBITDA figures are adjusted, excluding stock-based compensation.",
    financialsCurrency: "USD",
    financialsUnit: "mn",
  },

  dealStructure: {
    body: "This was a straightforward all-cash acquisition at $95.00 per share — no stock component, no earnout. Microsoft funded the deal from its balance sheet (cash + short-term debt), avoiding equity dilution. The offer represented a 45% premium to Activision's unaffected stock price on January 14, 2022. As part of UK CMA approval, Microsoft divested cloud streaming rights for all current and future Activision titles to Ubisoft for a 15-year period.",
    preOwnership: {
      nodes: [
        { id: "atvi_public", label: "Public Shareholders", sub: "~75% float", type: "public" },
        { id: "kotick", label: "Bobby Kotick + Insiders", sub: "~5%", type: "entity" },
        { id: "atvi", label: "Activision Blizzard", sub: "ATVI (NASDAQ)", type: "target" },
      ],
      edges: [
        { from: "atvi_public", to: "atvi", label: "~75%" },
        { from: "kotick", to: "atvi", label: "~5%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "msft", label: "Microsoft Corp.", sub: "Acquirer", type: "acquirer" },
        { id: "atvi", label: "Activision Blizzard", sub: "Wholly-owned subsidiary", type: "target" },
        { id: "ubisoft", label: "Ubisoft", sub: "Cloud streaming rights (15yr)", type: "entity" },
      ],
      edges: [
        { from: "msft", to: "atvi", label: "100%" },
        { from: "atvi", to: "ubisoft", label: "Cloud rights licensed" },
      ],
    },
    keyTerms: [
      { label: "Price per Share", value: "$95.00 (all-cash)", accent: true },
      { label: "Premium", value: "~45% to unaffected price" },
      { label: "Total EV", value: "$68.7B" },
      { label: "Financing", value: "Balance sheet / short-term debt" },
      { label: "Termination Fee (ATVI)", value: "$3.0B (~4.4% of EV)" },
      { label: "Termination Fee (MSFT)", value: "$3.0B reverse break" },
      { label: "Cloud Rights Remedy", value: "Ubisoft 15-year license" },
      { label: "Close Date", value: "October 13, 2023" },
    ],
  },

  advisors: {
    body: "Microsoft assembled a heavyweight advisory team given the scale of regulatory risk. Goldman Sachs and Allen & Company served as financial advisors, with Simpson Thacher & Bartlett handling M&A legal work and Wilmer Cutler handling regulatory/antitrust. Activision retained Bank of America and JP Morgan as financial advisors, with Skadden and Latham & Watkins on the legal side.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Microsoft (Acquirer)",
        initials: "MSFT",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor", roleType: "financial", note: "Lead M&A advisor" },
          { firm: "Allen & Company", role: "Financial Advisor", roleType: "financial", note: "Strategic advisor" },
          { firm: "Simpson Thacher & Bartlett", role: "M&A Legal Counsel", roleType: "legal", note: "Deal structuring" },
          { firm: "WilmerHale", role: "Regulatory / Antitrust", roleType: "legal", note: "FTC / CMA defense" },
        ],
      },
      {
        side: "target",
        sideLabel: "Activision Blizzard (Target)",
        initials: "ATVI",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Bank of America", role: "Financial Advisor", roleType: "financial", note: "Lead M&A advisor" },
          { firm: "JP Morgan", role: "Financial Advisor", roleType: "financial", note: "Co-advisor" },
          { firm: "Skadden, Arps", role: "M&A Legal Counsel", roleType: "legal", note: "Transaction legal" },
          { firm: "Latham & Watkins", role: "Legal Counsel", roleType: "legal", note: "Regulatory support" },
        ],
      },
    ],
    disclaimer: "Advisory assignments based on public disclosures and SEC filings.",
  },

  valuation: {
    body: "The $68.7B purchase price implied EV/EBITDA of ~21.5x and EV/Revenue of ~7.8x on Activision's 2021 financials. Comparable gaming publisher multiples at the time ranged from 15–25x EBITDA. Microsoft's valuation was supported by Activision's IP optionality (mobile, cloud streaming, metaverse adjacencies) and synergies from bundling CoD into Game Pass. A DCF analysis using ~10% WACC and 5% terminal growth would require EBITDA growing to ~$6–7B by 2030 to justify the price.",
    rows: [
      { item: "EV / Revenue (2021A)", val: "7.8x", note: "$68.7B / $8.8B revenue" },
      { item: "EV / EBITDA (2021A, adj.)", val: "21.5x", note: "$68.7B / $3.2B adj. EBITDA", accent: true },
      { item: "Price / Earnings (2021A)", val: "27.4x", note: "Based on GAAP net income" },
      { item: "Sector comp. EBITDA range", val: "15–25x", note: "Major gaming publishers" },
      { item: "Premium to unaffected price", val: "~45%", note: "vs. Jan 14, 2022 close" },
      { item: "Implied EBITDA (2030E, needed)", val: "~$6–7B", note: "To justify price at 10% WACC" },
    ],
    disclaimer: "Valuation figures based on publicly available financials and analyst consensus at time of announcement.",
  },

  rationale: {
    buyer: {
      title: "Microsoft — Why Pay $68.7B?",
      initials: "MSFT",
      bg: "bg-blue-600",
      points: [
        "Game Pass needed marquee IP: Call of Duty, WoW, and Candy Crush would instantly make Game Pass the most content-rich gaming subscription.",
        "Mobile access: King's Candy Crush gave Microsoft immediate scale in mobile gaming — its biggest weakness against Apple Arcade and Google Play ecosystem.",
        "Competitive disruption: securing CoD exclusivity (even partially) would shift the PlayStation vs. Xbox balance, forcing Sony to react.",
        "Cloud gaming platform: with cloud streaming rights, Microsoft could eventually make Activision titles playable on any screen, cementing Azure as a gaming infrastructure.",
        "Defensive M&A: Sony had acquired Bungie ($3.6B), EA had acquired Glu Mobile. The consolidation race was accelerating — waiting meant losing.",
      ],
    },
    seller: {
      title: "Activision — Why Sell at This Price?",
      initials: "ATVI",
      bg: "bg-gray-800",
      points: [
        "45% premium at a time when Activision stock was under pressure from legal/governance issues — an opportunistic offer for shareholders.",
        "Bobby Kotick and the board faced investor calls for leadership change; the deal provided an exit for existing shareholders at a strong multiple.",
        "The company was at an IP monetization crossroads: CoD franchise fatigue, WoW subscriber decline — Microsoft's resources offered a path to revitalization.",
        "All-cash deal: no execution risk from stock consideration or market swings.",
        "Regulatory risk was Microsoft's problem after signing — the $3B break fee protected Activision shareholders if the deal fell through.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024 Q4",
    body: "By late 2024, the integration was largely complete operationally. Call of Duty was added to Xbox Game Pass (both console and PC), Game Pass subscriber growth re-accelerated. In January 2024, Microsoft cut ~1,900 jobs in its gaming division — the expected restructuring after a $68.7B integration. Bobby Kotick exited as CEO as planned. The Ubisoft cloud streaming deal meant Microsoft ceded some value in exchange for regulatory clearance. Long-term, the thesis rests on whether Game Pass can become the Netflix of gaming — a bet that will play out over 5–10 years.",
    overallVerdict: "Strategically sound, regulatorily costly, financially rich but defensible at the price paid.",
    positives: [
      "Game Pass now has the deepest content library among gaming subscriptions globally.",
      "Call of Duty on Game Pass drove meaningful subscriber growth within 12 months of closing.",
      "Microsoft's $3B annual budget commitment to CoD franchise signals long-term IP investment.",
      "King mobile platform integrated into Xbox mobile roadmap — mobile finally becomes a real vector.",
    ],
    risks: [
      "21-month deal uncertainty damaged Activision employee morale and product pipelines.",
      "1,900 gaming layoffs in Jan 2024 created cultural friction in the Activision/Blizzard studios.",
      "Cloud streaming rights handed to Ubisoft limit Microsoft's optionality in the cloud gaming era.",
      "CoD on Game Pass may cannibalize premium unit sales, compressing per-title economics.",
      "Antitrust scrutiny on Big Tech M&A has materially increased — this deal will be a precedent.",
    ],
    editorNote: "This deal is the definitive case study in how platform competition drives M&A in the digital economy. Microsoft didn't buy a game company — it bought content leverage for a subscription war against Sony. Whether the $68.7B generates positive NPV depends on Game Pass subscription trajectory over the next decade.",
  },

  tombstone: {
    acquirerInitials: "MSFT",
    acquirerBg: "bg-blue-600",
    targetInitials: "ATVI",
    targetBg: "bg-gray-800",
    acquirerName: "Microsoft Corporation",
    targetName: "Activision Blizzard, Inc.",
    dealTitle: "All-Cash Merger — Gaming's Largest M&A",
    dealSize: "$68.7B",
    dealSizeUSD: "USD 68.7bn (approx. ₩91T)",
    evEbitda: "21.5x",
    closeDate: "October 2023",
  },

  sources: [
    { id: 1, text: "Microsoft Press Release — Microsoft to Acquire Activision Blizzard", url: "https://news.microsoft.com/2022/01/18/microsoft-to-acquire-activision-blizzard-to-bring-the-joy-and-community-of-gaming-to-everyone/" },
    { id: 2, text: "SEC Filing — Merger Agreement (Form 8-K, Activision Blizzard)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000718877" },
    { id: 3, text: "FTC v. Microsoft — N.D. Cal., Case No. 23-cv-02880 (2023)" },
    { id: 4, text: "UK CMA — Final Decision on Microsoft / Activision (Oct 2023)", url: "https://www.gov.uk/cma-cases/microsoft-activision-blizzard-merger-inquiry" },
    { id: 5, text: "Activision Blizzard — Annual Report 2021 (Form 10-K)" },
    { id: 6, text: "Bloomberg — Microsoft Closes Activision Deal After CMA Approval (Oct 2023)" },
  ],

  seo: {
    title: "Why Microsoft Paid $68.7B for Activision Blizzard | Gaming M&A Deep Dive",
    description: "Full analysis of Microsoft's $68.7B acquisition of Activision Blizzard — Game Pass strategy, Call of Duty rationale, 21-month FTC·CMA·EU regulatory battle, and post-deal outcomes.",
    keywords: [
      "Microsoft Activision acquisition", "gaming largest M&A", "Xbox Game Pass strategy",
      "Call of Duty acquisition", "Activision Blizzard merger", "FTC Microsoft antitrust",
      "UK CMA gaming M&A", "Big Tech M&A analysis", "gaming subscription competition",
      "EV EBITDA gaming valuation", "Microsoft Activision deal structure",
    ],
  },

  concepts: [
    { term: "All-Cash Acquisition", description: "A deal in which the acquirer pays 100% in cash rather than stock, avoiding dilution but requiring large balance sheet capacity." },
    { term: "EV/EBITDA Multiple", description: "Enterprise value divided by EBITDA — the primary valuation benchmark for M&A transactions across industries." },
    { term: "Regulatory Clearance", description: "Antitrust/competition authority approval required for large M&A deals — FTC (US), CMA (UK), EC (EU) are the key regulators for global transactions." },
    { term: "Content-Platform Strategy", description: "The logic of acquiring content IP to drive adoption of a platform (Game Pass) — analogous to Netflix acquiring studios." },
    { term: "Termination Fee", description: "A break-up fee paid by one party if the deal fails to close — here, $3.0B each way to align incentives and protect the target." },
    { term: "Behavioral Remedy", description: "A regulatory condition (e.g., licensing cloud rights to Ubisoft) imposed instead of outright deal prohibition — a common tool in tech M&A clearance." },
  ],

  faq: [
    {
      q: "Why did Microsoft pay $68.7B — what justified this price?",
      a: "Microsoft needed premium gaming IP to compete with Sony's PlayStation exclusive lineup and make Xbox Game Pass the dominant gaming subscription. Call of Duty alone generates ~$1.5B+ annually. Add WoW, Diablo, Overwatch, and King's Candy Crush (the highest-grossing mobile game franchise), and the combined portfolio justified the 21.5x EBITDA multiple. Cloud gaming optionality and Game Pass subscriber acceleration were additional value drivers not fully captured in trailing EBITDA.",
    },
    {
      q: "Why did the FTC try to block the deal, and why did it fail?",
      a: "The FTC argued Microsoft would pull Call of Duty from PlayStation, harming console competition. The U.S. District Court denied the FTC's preliminary injunction because Microsoft had signed a binding 10-year agreement to keep CoD on PlayStation, and the FTC couldn't demonstrate sufficient likelihood of competitive harm. The FTC appealed but the deal closed before any further ruling.",
    },
    {
      q: "How did Microsoft secure UK CMA approval after the initial block?",
      a: "The CMA initially blocked the deal on cloud gaming concerns. Microsoft restructured by carving out cloud streaming rights to all current and future Activision titles and licensing them to Ubisoft for 15 years. This structural remedy — removing Microsoft from the cloud streaming market for Activision content — addressed the CMA's concerns and led to approval in October 2023.",
    },
    {
      q: "What happened to Activision employees after the deal?",
      a: "In January 2024, Microsoft announced layoffs of approximately 1,900 gaming division employees — about 8% of its combined gaming workforce. This included roles across Activision, Blizzard, and King. The restructuring followed typical post-acquisition consolidation patterns, particularly in overlapping corporate functions. Bobby Kotick, Activision's CEO, departed at end of 2023 as planned.",
    },
    {
      q: "Is Call of Duty now exclusive to Xbox?",
      a: "No — Microsoft committed to keeping Call of Duty on PlayStation under a legally binding 10-year agreement, a key concession that helped secure regulatory clearance. CoD was also added to Xbox Game Pass (console and PC), making it available to subscribers. The franchise remains multi-platform, but Game Pass access is the key strategic unlock.",
    },
    {
      q: "What does this deal mean for the future of gaming M&A?",
      a: "This deal established that platform companies (Microsoft, Google, Apple, Amazon) will pursue aggressive content acquisitions to drive subscription platforms. It also demonstrated that antitrust regulators globally are scrutinizing Big Tech M&A far more intensely than a decade ago — the 21-month process and $100M+ in legal/advisory costs set a new benchmark for regulatory execution risk in mega-cap tech deals.",
    },
  ],
};

export default deal;
