import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "elliott-samsung",
  title: "Elliott vs. Samsung C&T — Korea's Activism Watershed and the Battle Over Chaebol Governance",
  subtitle: "Korea's Activism Ground Zero · NPS Casting Vote · Unfair Merger Ratio · ISDS Ruling",
  category: "activism",
  industry: "Conglomerate (Construction, Trading, Fashion)",
  country: "South Korea",
  announcedAt: "2015-05-26",
  closedAt: "2015-09-01",
  announcedDisplay: "May 2015",
  closedDisplay: "September 2015",
  readingMinutes: 10,
  tags: ["Elliott", "Samsung C&T", "Cheil Industries", "activism", "NPS", "chaebol governance", "merger ratio", "ISDS"],
  excerpt:
    "Hedge fund Elliott Management acquired a 7.12% stake in Samsung C&T and opposed its merger with Cheil Industries, arguing the exchange ratio was deeply unfair to minority shareholders. The National Pension Service's deciding vote pushed the merger through — but set off a chain of governance reforms, criminal convictions, and a landmark ISDS ruling.",

  // ── Company icons ─────────────────────────────────────────────
  acquirer: { initials: "CI",  bg: "bg-blue-700",  label: "Cheil Industries (Samsung)" },
  target:   { initials: "SCT", bg: "bg-slate-600", label: "Samsung C&T" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "By late 2014, Samsung heir Lee Jae-yong faced a complex succession problem. His indirect control over Samsung Electronics — the group's crown jewel — ran through a convoluted web of cross-shareholdings: Lee → Cheil Industries (23.2% stake) → Samsung Life Insurance → Samsung Electronics. The direct stake Lee held in Samsung Electronics itself was negligible.",
    "Samsung C&T was the missing link. The construction-and-trading conglomerate held 4.06% of Samsung Electronics and 19.3% of Samsung Life Insurance. If Samsung C&T could be merged into Cheil Industries — the company Lee already controlled — his grip over Samsung Electronics and Samsung Life would tighten dramatically.",
    "On May 26, 2015, Samsung C&T and Cheil Industries announced a merger. Cheil would absorb Samsung C&T at an exchange ratio of 0.3500502 Cheil shares per Samsung C&T share. The ratio was determined by Korean law: a simple average of the one-month, one-week, and single-day volume-weighted prices before the announcement date.",
    "The problem was the ratio itself. Cheil's share price had been inflated by succession-premium speculation (P/E above 100x). Samsung C&T's shares were depressed by weak construction markets. Elliott Management — the New York hedge fund founded by Paul Singer — began buying Samsung C&T shares immediately after the announcement, accumulating a 7.12% stake by mid-June and declaring the merger ratio unfair.",
  ],

  // ── Deal summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Samsung C&T mkt cap ~₩10T",
    acquirerName: "Cheil Industries",
    targetName: "Samsung C&T",
    announcedDisplay: "May 2015",
    closedDisplay: "September 2015",
    country: "South Korea",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "Cheil Industries (Lee Jae-yong 23.2% stake) merged with Samsung C&T (holder of Samsung Electronics 4.06% + Samsung Life 19.3%). Core step in Lee's succession plan.",
    "Exchange ratio: 0.35 Cheil share per Samsung C&T share. Elliott argued Samsung C&T was undervalued by at least 50% vs. its NAV.",
    "Elliott Management (7.12% stake) led a public opposition campaign. ISS and Glass Lewis both issued 'oppose' recommendations.",
    "EGM vote on July 17, 2015: 69.53% approved (threshold: 66.67%). The National Pension Service's 11.21% vote in favor proved decisive.",
    "Fallout: NPS chief jailed for breach of fiduciary duty, Lee Jae-yong convicted of bribery, Elliott wins partial ISDS award against Korean government (2023).",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "South Korea's chaebol governance structure had long been a flashpoint for global institutional investors. Circular shareholdings, related-party transactions, and succession-driven mergers created systematic disadvantages for minority shareholders. By 2015, global activist funds were expanding aggressively into Asia, and Korea's large listed conglomerates — trading at persistent discounts to NAV — were obvious targets.",
    metrics: [
      { label: "Samsung C&T mkt cap (pre-deal)", value: "~₩10 trillion",  sub: "Construction, trading, resort" },
      { label: "Cheil Industries mkt cap",        value: "~₩20 trillion",  sub: "Fashion, food service, resort" },
      { label: "Samsung C&T stake in Samsung Electronics", value: "4.06%", sub: "~₩8.3T in value" },
      { label: "NPS stake in Samsung C&T",        value: "11.21%",         sub: "The deciding vote" },
    ],
    subBody:
      "Shareholder activism involves accumulating a meaningful equity stake and then publicly pressuring management to improve governance, return capital, or unlock hidden value. The Elliott–Samsung clash in 2015 was the first major test of this strategy in Korea. It directly precipitated the introduction of Korea's Stewardship Code (2016) and spawned a new generation of domestic activism campaigns at KT&G, Hyundai Motor, and SM Entertainment.",
    players: [
      { name: "Elliott Management",        role: "Activist hedge fund (Paul Singer, New York)" },
      { name: "Samsung C&T board/management", role: "Pro-merger; aligned with Samsung family" },
      { name: "National Pension Service (NPS)", role: "11.21% stake; casting vote" },
      { name: "ISS / Glass Lewis",         role: "Global proxy advisors; both recommended 'oppose'" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Samsung C&T",
    body: "Founded in 1938 as the founding entity of Samsung Group, Samsung C&T operated in three business lines: Construction (landmark projects include Burj Khalifa in Dubai and Marina Bay Sands in Singapore), Trading (global energy and commodity trading), and Resorts (Everland theme park). Beneath the mundane label of 'construction & trading' sat two strategic assets — a 4.06% stake in Samsung Electronics and a 19.3% stake in Samsung Life Insurance — that made it indispensable to the Samsung succession architecture.",
    metrics: [
      { label: "Market cap (pre-merger)",       value: "~₩10 trillion",  sub: "May 2015" },
      { label: "Samsung Electronics stake value", value: "~₩8.3 trillion", sub: "4.06% of Samsung Electronics" },
      { label: "Samsung Life stake",             value: "19.3%",          sub: "~₩3T estimated" },
      { label: "Construction backlog",           value: "~₩35 trillion",  sub: "Including overseas" },
      { label: "Annual revenue (FY2014)",        value: "~₩28 trillion",  sub: "Including construction & trading" },
      { label: "Founded",                        value: "1938",            sub: "Founding entity of Samsung Group" },
    ],
    financials: [
      { year: "FY2012", revenue: 298000, cogs: 268000, grossProfit: 30000, sga: 12000, operatingIncome: 18000, ebitda: 22000 },
      { year: "FY2013", revenue: 302000, cogs: 272000, grossProfit: 30000, sga: 12500, operatingIncome: 17500, ebitda: 21500 },
      { year: "FY2014", revenue: 280000, cogs: 254000, grossProfit: 26000, sga: 13000, operatingIncome: 13000, ebitda: 17000 },
      { year: "FY2015", revenue: 268000, cogs: 245000, grossProfit: 23000, sga: 12500, operatingIncome: 10500, ebitda: 14500 },
    ],
    financialsNote: "Unit: KRW million (₩M) | K-GAAP consolidated | Source: Samsung C&T Annual Reports",
    financialsCurrency: "₩",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "The Samsung C&T–Cheil merger was, at its core, a governance dispute. Lee Jae-yong controlled Cheil Industries (23.2%), which controlled Samsung Life Insurance, which controlled Samsung Electronics — but Lee's direct stake in Samsung Electronics was negligible. Samsung C&T held 4.06% of Samsung Electronics directly. Merging Samsung C&T into Cheil would dramatically strengthen Lee's indirect control over Samsung Electronics — at a price determined by a statutory formula that Elliott argued was rigged to undervalue Samsung C&T's assets.",
    shareholders: [
      {
        id: "ljy",
        label: "Lee Jae-yong & family",
        sub: "Largest Cheil Industries shareholder",
        stake: "23.2%",
        stakePct: 23.2,
        type: "controlling",
        alignment: "pro",
      },
      {
        id: "nps",
        label: "National Pension Service (NPS)",
        sub: "Korea's largest institutional investor",
        stake: "11.21%",
        stakePct: 11.21,
        type: "government",
        alignment: "neutral",
      },
      {
        id: "kcc",
        label: "KCC Corporation",
        sub: "Purchased treasury shares before EGM",
        stake: "6.71%",
        stakePct: 6.71,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "elliott",
        label: "Elliott Management",
        sub: "Paul Singer — activist hedge fund",
        stake: "7.12%",
        stakePct: 7.12,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "others",
        label: "Other minority shareholders",
        sub: "Retail, foreign, institutional mix",
        stake: "51.76%",
        stakePct: 51.76,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 9,
      independent: 5,
      affiliated: 4,
      note: "Critics noted that several of the five 'independent' directors had prior Samsung affiliations, raising doubts about the board's ability to independently evaluate the merger.",
    },
    issues: [
      {
        title: "Unfair exchange ratio",
        description: "The statutory price of ₩55,767 ignored Samsung C&T's most valuable assets — 4.06% of Samsung Electronics and 19.3% of Samsung Life. Elliott's NAV analysis implied at least a 67% undervaluation.",
        severity: "critical",
      },
      {
        title: "Treasury share sale to KCC",
        description: "Samsung C&T sold 6.71% treasury shares to KCC at near the statutory merger price (₩55,766) before the vote, manufacturing a friendly voting bloc and reducing Elliott's effective blocking position.",
        severity: "critical",
      },
      {
        title: "Board independence",
        description: "All outside directors voted in favor of the merger. Critics argued that most had prior Samsung ties and could not independently represent minority shareholders.",
        severity: "high",
      },
      {
        title: "NPS political pressure",
        description: "Subsequent investigations revealed that the Park Geun-hye administration pressured NPS leadership to vote in favor. The NPS CIO was convicted of breach of fiduciary duty in 2017.",
        severity: "high",
      },
      {
        title: "Structural flaw in Korean merger law",
        description: "Korean law mandates VWAP-based merger pricing, which is ill-suited for holding companies whose value lies in listed subsidiaries. No NAV adjustment mechanism exists in statute.",
        severity: "medium",
      },
      {
        title: "Succession-driven transaction",
        description: "Critics argued the merger served Lee family succession interests rather than shareholder value. The board's fiduciary duty was arguably subordinated to a controlling shareholder's personal agenda.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "Block the merger (recalculate exchange ratio on NAV basis)",
        result: "lost",
        note: "EGM approved at 69.53%. Exceeded the 66.67% supermajority threshold.",
      },
      {
        demand: "Injunction to cancel KCC treasury share sale",
        result: "lost",
        note: "Seoul court rejected all injunction applications.",
      },
      {
        demand: "Independent valuation of Samsung C&T (hold board accountable)",
        result: "partial",
        note: "2023 ISDS tribunal acknowledged NPS interference violated Korea-US FTA. Korean government ordered to pay partial compensation to Elliott.",
      },
      {
        demand: "Samsung governance reform (minority shareholder protections)",
        result: "partial",
        note: "Korea introduced Stewardship Code (2016) and NPS independence reforms, directly traceable to this dispute.",
      },
      {
        demand: "Appointment of independent outside directors",
        result: "ongoing",
        note: "Samsung C&T later announced board independence commitments, but full implementation remains incomplete.",
      },
    ],
    stockImpact: {
      preCampaign: "₩49,000",
      peakDuringCampaign: "₩62,300",
      postCampaign: "₩55,767",
      note: "Samsung C&T's stock surged ~27% after Elliott's public campaign as the market repriced it toward NAV. The final statutory merger price of ₩55,767 settled 10.8% above pre-campaign levels — a partial vindication of Elliott's undervaluation thesis, even as the merger itself went ahead.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "Cheil Industries absorbed Samsung C&T in a statutory merger. The exchange ratio of 0.3500502 Cheil shares per Samsung C&T share was set using the Korean Capital Markets Act formula: arithmetic average of one-month, one-week, and single-day volume-weighted average prices before announcement. The surviving entity was Cheil Industries, which subsequently renamed itself Samsung C&T Corporation.",
    preOwnership: {
      nodes: [
        { id: "ljy",     label: "Lee Jae-yong", sub: "23.2% of Cheil Industries",          type: "acquirer" },
        { id: "cheil",   label: "Cheil Industries", sub: "Fashion, food service, resorts",  type: "acquirer" },
        { id: "sct",     label: "Samsung C&T",  sub: "Construction, trading; holds SE/SL",  type: "target" },
        { id: "se",      label: "Samsung Electronics", sub: "Samsung C&T holds 4.06%",     type: "fund" },
        { id: "elliott", label: "Elliott",       sub: "7.12% stake, opposes merger",        type: "public" },
      ],
      edges: [
        { from: "ljy",     to: "cheil", label: "23.2%" },
        { from: "cheil",   to: "sct",   label: "Merger target" },
        { from: "sct",     to: "se",    label: "4.06%" },
        { from: "elliott", to: "sct",   label: "7.12% (opposing)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ljy",     label: "Lee Jae-yong",    sub: "Strengthened control via merger",  type: "acquirer" },
        { id: "new_sct", label: "Samsung C&T (merged)", sub: "Cheil + old Samsung C&T",    type: "target" },
        { id: "se",      label: "Samsung Electronics", sub: "Now under Lee's indirect control", type: "fund" },
        { id: "sl",      label: "Samsung Life",     sub: "19.3% link maintained",           type: "fund" },
      ],
      edges: [
        { from: "ljy",     to: "new_sct", label: "Succession consolidated" },
        { from: "new_sct", to: "se",      label: "4.06% Samsung Electronics" },
        { from: "new_sct", to: "sl",      label: "19.3% Samsung Life" },
      ],
    },
    keyTerms: [
      { label: "Merger type",         value: "Statutory absorption merger" },
      { label: "Exchange ratio",      value: "0.3500502 Cheil per Samsung C&T share", accent: true },
      { label: "Elliott stake",       value: "7.12%" },
      { label: "NPS stake",           value: "11.21%" },
      { label: "Shareholder approval", value: "69.53%",          accent: true },
      { label: "Required threshold",  value: "66.67% (supermajority)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Both sides assembled top-tier financial and legal advisors. Samsung focused on structuring the merger and securing friendly votes; Elliott engaged independent valuers and domestic counsel to challenge the deal legally.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Cheil / Samsung C&T (Pro-merger)",
        initials: "SAM",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "J.P. Morgan / Samsung Securities",
            role: "Financial advisor",
            roleType: "financial",
            note: "Deal structuring and fairness opinion. Advised on the sale of Samsung C&T treasury shares (6.71%) to KCC to build a friendly voting bloc.",
          },
          {
            firm: "Kim & Chang",
            role: "Legal advisor",
            roleType: "legal",
            note: "Korea's largest law firm. Led merger documentation, regulatory filings, and defense against Elliott's injunction applications.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Elliott (Opposing)",
        initials: "ELL",
        bg: "bg-red-600",
        advisors: [
          {
            firm: "Lazard",
            role: "Financial advisor",
            roleType: "financial",
            note: "Independent NAV valuation of Samsung C&T. Concluded fair value was at least ₩93,000 per share — 67% above the statutory merger price.",
          },
          {
            firm: "Bae, Kim & Lee (BKL)",
            role: "Legal advisor",
            roleType: "legal",
            note: "Filed injunctions to block the EGM and challenge the self-tender of treasury shares to KCC. Both injunctions were ultimately denied.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public disclosures and may not be complete.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "The central dispute was whether the statutory merger price fairly reflected Samsung C&T's intrinsic value. Samsung argued the formula was legally required; Elliott argued it mechanically embedded a depressed stock price and ignored the company's hidden asset value.",
    rows: [
      { item: "Samsung C&T statutory merger price",   val: "₩55,767",         note: "1-month VWAP average formula" },
      { item: "Cheil Industries statutory price",     val: "₩159,294",        note: "Same formula; inflated by succession premium" },
      { item: "Exchange ratio",                       val: "0.3500502",        note: "Cheil shares per Samsung C&T share" },
      { item: "Elliott's fair value estimate (NAV)",  val: "₩93,000–106,000", note: "Samsung Electronics + Life stake included", accent: true },
      { item: "Implied undervaluation",               val: "~67–90%",          note: "vs. statutory price",                accent: true },
      { item: "Final approval rate",                  val: "69.53%",           note: "Passes 66.67% supermajority threshold" },
    ],
    disclaimer: "Note: Stock prices as of May–July 2015. Elliott's NAV estimate is based on publicly disclosed holding values and is disputed by Samsung.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why did Samsung push this merger through?",
      initials: "SAM",
      bg: "bg-blue-700",
      points: [
        "Succession consolidation: Lee → Cheil (merged) → Samsung Electronics / Samsung Life. Lee's indirect control over Samsung's core assets was dramatically strengthened.",
        "Samsung C&T's 4.06% stake in Samsung Electronics — worth ~₩8.3 trillion — was folded into the entity Lee already controlled.",
        "Simplification narrative: Samsung publicly framed the merger as a step toward a cleaner group holding structure, providing a corporate rationale beyond succession.",
        "Merger synergies: combining Cheil's fashion/food service businesses with Samsung C&T's construction and trading arms created a diversified conglomerate.",
      ],
    },
    seller: {
      title: "Why did Elliott oppose?",
      initials: "ELL",
      bg: "bg-red-600",
      points: [
        "The exchange ratio was structurally unfair: the statutory formula ignored Samsung C&T's NAV — primarily its stakes in Samsung Electronics and Samsung Life.",
        "Minority shareholder sacrifice: the deal transferred value from Samsung C&T's minority shareholders to the Samsung family, in violation of the board's fiduciary duty.",
        "The KCC share sale: Samsung C&T sold 6.71% of treasury shares to KCC (a friendly affiliate) at ₩55,766 — just under the merger price — to manufacture a friendly voting bloc before the EGM.",
        "ISS and Glass Lewis independently agreed: both proxy advisors recommended shareholders vote against, citing the unfair price and governance concerns.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The merger was completed but its ripple effects lasted years. The NPS's pivotal vote became a central issue in Lee Jae-yong's criminal trial, Elliott won a partial ISDS award against the Korean government in 2023, and the entire episode catalyzed a wave of governance reforms that fundamentally changed how Korean institutions exercise voting rights.",
    overallVerdict: "Samsung tactical victory; long-term governance transformation",
    positives: [
      "The merged Samsung C&T completed Lee Jae-yong's succession architecture, stabilizing Samsung Group leadership for the long term.",
      "Korea's Stewardship Code was introduced in December 2016 — directly traceable to the NPS controversy in this deal. Institutional investors now face formal obligations to vote independently.",
      "NPS governance reforms: the fund's investment committee was restructured and its independence from government pressure was strengthened in subsequent years.",
      "Samsung C&T's long-term share price recovered and rose above the merger-era lows, partially vindicating the deal's economic logic.",
    ],
    risks: [
      "Lee Jae-yong arrested (2017) and convicted on bribery charges related to the NPS's pro-merger vote, creating years of management vacuum at Samsung Electronics.",
      "Hong Wan-seon, former NPS chief investment officer, convicted of breach of fiduciary duty (2017) for directing the NPS's pro-Samsung vote under political pressure.",
      "ISDS ruling (2023): The international arbitration tribunal found that the Korean government's interference in NPS's vote violated the Korea-US FTA investment chapter. The Korean government was ordered to pay partial compensation to Elliott.",
      "The 'Korea Discount' — the persistent undervaluation of Korean equities relative to global peers — was reignited as a debate, with this deal cited as evidence of structural governance risk.",
    ],
    editorNote:
      "The Elliott–Samsung confrontation exposed the structural fault lines of Korean chaebol governance to a global audience. The dominant narrative at the time was 'foreign speculator vs. national champion' — but the international verdict has been more nuanced. Elliott lost the shareholder vote, yet the ISDS ruling, the criminal convictions, and the governance reforms that followed represent a meaningful partial vindication of its core argument: that the Korean legal framework allowed the Samsung family to use a merger to transfer wealth from minority shareholders to themselves. The deal remains a case study in how shareholder activism — even when it loses at the ballot — can trigger systemic change.",
  },

  // ── Tombstone ────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "CI",
    acquirerBg: "bg-blue-700",
    targetInitials: "SCT",
    targetBg: "bg-slate-600",
    acquirerName: "Cheil Industries",
    targetName: "Samsung C&T",
    dealTitle: "Cheil Industries' Merger with Samsung C&T — Elliott Activism Campaign",
    dealSize: "Samsung C&T mkt cap ~₩10T",
    dealSizeUSD: "approx. USD 8.5 Billion",
    evEbitda: "N/A (Merger)",
    closeDate: "Sep 2015",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Samsung C&T EGM disclosure, DART (Korea FSS), July 17, 2015" },
    { id: 2, text: "Elliott Management shareholder letters and press releases, June–July 2015" },
    { id: 3, text: "ISS and Glass Lewis proxy reports, July 2015 (both recommended 'oppose')" },
    { id: 4, text: "Seoul High Court, conviction of Hong Wan-seon (former NPS CIO), 2017" },
    { id: 5, text: "ICSID, Elliott Associates v. Republic of Korea, Case No. ARB/19/26, partial award 2023" },
    { id: 6, text: "Korea Financial Services Commission, Introduction of Stewardship Code, December 2016" },
    { id: 7, text: "Samsung C&T / Cheil Industries merger prospectus and related filings, May–September 2015" },
  ],

  // ── SEO ──────────────────────────────────────────────────────
  seo: {
    title: "Elliott vs. Samsung C&T Merger — Korea's Activism Watershed Explained",
    description:
      "Full analysis of Elliott Management's 2015 campaign against the Samsung C&T–Cheil Industries merger. Covers the unfair exchange ratio argument, NPS casting vote, Lee Jae-yong succession structure, criminal convictions, and the landmark 2023 ISDS ruling. Korea's defining shareholder activism case.",
    keywords: [
      "Elliott Samsung C&T merger",
      "Samsung Cheil Industries merger ratio",
      "Korea shareholder activism",
      "NPS Samsung vote controversy",
      "Lee Jae-yong succession chaebol",
      "Korea ISDS Elliott arbitration",
      "Korean corporate governance",
      "chaebol governance reform",
      "minority shareholder rights Korea",
      "Korea stewardship code",
    ],
  },

  // ── Key Concepts ─────────────────────────────────────────────
  concepts: [
    {
      term: "Shareholder Activism",
      description: "Building a meaningful equity stake to pressure management for governance improvements, asset sales, or capital returns — without necessarily taking full control.",
    },
    {
      term: "Merger Exchange Ratio",
      description: "In a statutory merger, the number of acquirer shares issued per target share. The fairness of this ratio determines how value is distributed between the two shareholder bases.",
    },
    {
      term: "NAV (Net Asset Value)",
      description: "The market value of a company's assets minus its liabilities. For holding companies like Samsung C&T — whose value lies in stakes in other listed companies — NAV is the most appropriate valuation method.",
    },
    {
      term: "Stewardship Code",
      description: "A voluntary framework requiring institutional investors to actively exercise shareholder rights, including voting. Korea adopted its Stewardship Code in 2016, partly in response to the NPS controversy in this deal.",
    },
    {
      term: "ISDS (Investor-State Dispute Settlement)",
      description: "A mechanism allowing foreign investors to sue host governments in international arbitration when government actions violate investment treaty obligations. Elliott used ISDS to challenge the Korean government's role in directing the NPS vote.",
    },
    {
      term: "Supermajority Vote",
      description: "A vote requiring more than a simple majority — in this case two-thirds (66.67%) — to pass. Mergers and other fundamental transactions in Korean law require a supermajority, giving a large minority bloc the ability to block deals.",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Elliott oppose the Samsung C&T merger?",
      a: "Elliott argued the exchange ratio of 0.35 Cheil shares per Samsung C&T share was deeply unfair to Samsung C&T minority shareholders. The statutory price of ₩55,767 ignored Samsung C&T's most valuable assets — its 4.06% stake in Samsung Electronics and 19.3% stake in Samsung Life Insurance. Using a net asset value (NAV) approach, Elliott estimated a fair price of ₩93,000–106,000, implying the merger ratio transferred at least 50% of Samsung C&T's intrinsic value to Cheil shareholders (dominated by the Samsung family).",
    },
    {
      q: "Why did Korea's National Pension Service vote in favor?",
      a: "The NPS officially stated that the merger was in the long-term interest of Samsung C&T's enterprise value. However, subsequent investigations and criminal trials revealed that the NPS leadership had been pressured by the Park Geun-hye administration to support the merger. Hong Wan-seon, the NPS's chief investment officer at the time, was convicted of breach of fiduciary duty in 2017 for this decision.",
    },
    {
      q: "How was the exchange ratio of 0.35 calculated?",
      a: "Korean law (the Capital Markets Act) requires merger ratios to be set using a formula: the arithmetic average of the one-month, one-week, and single-day volume-weighted average share prices before the announcement. Samsung C&T's statutory price came to ₩55,767; Cheil's came to ₩159,294 — yielding a ratio of 0.35. Elliott's critique was that this formula mechanically locked in Samsung C&T's depressed stock price while ignoring its underlying asset values.",
    },
    {
      q: "Did Elliott ultimately lose money on this trade?",
      a: "No. Despite losing the shareholder vote, Elliott profited. The activist campaign drove Samsung C&T's share price higher as the market repriced the stock relative to its NAV. Elliott sold portions of its stake during this appreciation. In 2023, an ISDS tribunal also ordered Korea to pay partial compensation. Elliott's public goal of changing Korean governance also advanced significantly, even if the merger went ahead.",
    },
    {
      q: "What long-term impact did this deal have on Korean corporate governance?",
      a: "The deal was a watershed. Korea introduced its Stewardship Code in December 2016, requiring institutional investors to vote actively and disclose their rationale. The NPS was restructured to insulate it from government pressure. A string of subsequent activism campaigns — at Hyundai Motor (2019), KT&G (2023), and SM Entertainment (2023) — showed that the playbook had taken root in Korea.",
    },
    {
      q: "What was the ISDS outcome and what does it mean?",
      a: "In 2023, an ICSID tribunal ruled that the South Korean government's interference in the NPS's vote on the Samsung C&T merger violated South Korea's investment treaty obligations. The tribunal ordered Korea to pay partial compensation to Elliott. The ruling established that government pressure on state pension funds to vote in favor of politically connected companies can constitute a violation of international investment law — a significant precedent for global investors in markets where state funds play a major role.",
    },
  ],
};

export default deal;
