/**
 * Elliott Management × AT&T Activism Campaign (2019)
 * The Aftermath of a $134B Mega-Acquisition — Mega-Cap Activism That Drove DirecTV Sale + WarnerMedia Spin-off
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "elliott-att",
  title: "How Elliott Management Reversed AT&T's $134B Acquisition Failure — The Textbook for Mega-Cap Activism",
  subtitle: "1.2% Stake · CEO Replacement · DirecTV $16B Sale · WarnerMedia-Discovery Merger — Paul Singer's 'Activating AT&T'",
  category: "activism",
  industry: "Telecom & Media",
  country: "United States",
  announcedAt: "2019-09-09",
  closedAt: "2021-05-17",
  announcedDisplay: "September 2019",
  closedDisplay: "May 2021 (WarnerMedia spin-off announcement)",
  readingMinutes: 13,
  tags: [
    "Elliott Management",
    "AT&T",
    "activism",
    "DirecTV",
    "WarnerMedia",
    "Warner Bros. Discovery",
    "CEO replacement",
    "mega-cap activism",
    "asset disposal",
    "Paul Singer",
  ],
  excerpt:
    "In September 2019, Paul Singer's Elliott Management accumulated a 1.2% stake ($3.2B) in AT&T and published the 'Activating AT&T' letter. After pouring $134B into DirecTV ($49B) and Time Warner ($85B) in just three years, AT&T's stock lagged the S&P 500 by 55 percentage points. Elliott's pressure resulted in three outcomes: CEO replacement, a 30% TPG sale of DirecTV, and the WarnerMedia-Discovery merger. A 1.2% stake rewired the strategy of a $250B company — the defining case in mega-cap activism.",

  acquirer: { initials: "ELL", bg: "bg-slate-700", label: "Elliott Management Corporation" },
  target:   { initials: "T",   bg: "bg-blue-700",  label: "AT&T Inc." },

  background: [
    "From the mid-2010s, AT&T pursued a transformation from a telecom carrier into a 'media-telecom conglomerate.' In 2015 it acquired DirecTV for $49B to become the number-one satellite broadcaster, and in 2018 it spent $85B to acquire Time Warner (HBO, CNN, Warner Bros.) and renamed the media unit WarnerMedia. Two mega-deals worth $134B in three years.",
    "But the post-acquisition reality was grim. Over the five years from 2014 to 2019, AT&T's stock returned approximately -19% while the S&P 500 gained +36%. The two acquisitions had loaded roughly $180B in net debt onto the balance sheet — the highest debt level in U.S. corporate history at the time. DirecTV subscribers were declining from the moment of acquisition, swept away by cord-cutting trends, and WarnerMedia was generating operational friction rather than integration synergies.",
    "On September 9, 2019, Elliott Management Corporation founder Paul Singer sent an open letter to AT&T CEO Randall Stephenson titled 'Activating AT&T.' Elliott had accumulated approximately $3.2B (about 1.2% of AT&T's outstanding shares) and presented a specific roadmap to push the stock from the then ~$38 to $60 by year-end 2021 — a 58% uplift.",
    "The letter's four core demands were: (1) strategic review and divestiture of non-core assets (DirecTV in particular), (2) operational efficiency improvements ($5B+ in cost savings), (3) strengthened capital allocation discipline (halting large-scale M&A), and (4) stronger management accountability (including CEO replacement). AT&T's management initially pushed back hard, but as Elliott's pressure grew and large institutional investors broadly sympathized, management began progressively accepting the demands.",
    "The results tracked Elliott's blueprint almost exactly. In July 2020, CEO Randall Stephenson 'retired' and John Stankey took over. That same year, Elliott and AT&T announced a 'mutual understanding,' agreeing to certain board changes and operational efficiency targets. In July 2021, AT&T sold a 30% stake in DirecTV to TPG Capital ($16.25B, implying a ~$23.5B enterprise value — less than half the $49B acquisition price). And in May 2021, AT&T announced that WarnerMedia would merge with Discovery Communications to form Warner Bros. Discovery (WBD).",
  ],

  dealSummary: {
    dealValueDisplay: "Elliott stake approximately $3.2B (~1.2% of AT&T shares outstanding)",
    acquirerName: "Elliott Management Corporation",
    targetName: "AT&T Inc. (NYSE: T)",
    announcedDisplay: "September 2019 (Elliott letter published)",
    closedDisplay: "May 2021 (WarnerMedia spin-off announcement)",
    country: "United States",
  },

  executiveSummary: [
    "Elliott Management: $3.2B (1.2%) stake used to directly challenge AT&T with market cap $250B+ — 'Activating AT&T' letter published (September 9, 2019)",
    "Context: DirecTV $49B + Time Warner $85B = $134B in acquisitions, net debt ~$180B, stock -19% over 5 years vs. S&P 500 +36%",
    "Four demands: (1) DirecTV strategic review, (2) WarnerMedia strategic review, (3) CEO replacement, (4) $5B+ cost savings",
    "Outcomes (all realized): CEO Randall Stephenson replaced July 2020 → John Stankey / DirecTV 30% sold to TPG at $16.25B / WarnerMedia-Discovery merger announced (May 2021)",
    "Stock impact: Pre-campaign ~$38 → post-agreement peak ~$43 → post-WarnerMedia spin-off recalibrated ~$27 (dividend cut reflected)",
    "Mega-cap activism textbook: A 1.2% stake reversed an entire $134B M&A strategy — the inevitable endpoint of excessive diversification",
  ],

  industryOverview: {
    body: "In the late 2010s, the U.S. telecom and media industry faced two structural shocks: cord-cutting (cancellation of pay-TV) and the streaming war. Netflix, Amazon Prime, and Hulu's rapid ascent was shrinking traditional pay-TV subscriber bases, and telecom carriers sought vertical integration through content acquisition to navigate the crisis. AT&T's Time Warner acquisition was the most audacious execution of this thesis. However, the competencies required to run a media company were fundamentally different from those of a telecom, and the massive acquisition debt constrained future investment capacity.",
    metrics: [
      { label: "AT&T market cap (September 2019)",        value: "~$265B",        sub: "NYSE: T, second-largest U.S. telecom" },
      { label: "AT&T net debt (2019)",                    value: "~$180B",        sub: "Highest in U.S. corporate history" },
      { label: "AT&T stock return (5 years, 2014–2019)",  value: "-19%",          sub: "S&P 500 +36% over same period, -55pp underperformance" },
      { label: "DirecTV satellite subscribers (2019)",    value: "~20.3 million", sub: "Millions fewer than at acquisition, declining" },
      { label: "WarnerMedia annual revenue",              value: "~$33B",         sub: "HBO, CNN, Warner Bros. combined" },
    ],
    subBody: "The cord-cutting trend began undermining the DirecTV acquisition thesis from the moment the deal closed. In the streaming market there was the HBO Max card (launched 2020), but fighting Netflix and Amazon with $180B in debt left far too little financial firepower. Elliott's fundamental diagnosis was simple: 'the company bought too much for too much money.'",
    players: [
      { name: "AT&T",                      role: "Second-largest U.S. telecom, parent of DirecTV and WarnerMedia" },
      { name: "Elliott Management",        role: "Paul Singer's activist hedge fund, holding 1.2% stake" },
      { name: "Verizon",                   role: "Largest U.S. telecom, AT&T's primary competitor" },
      { name: "Comcast/NBCUniversal",      role: "Cable and media conglomerate pursuing a similar strategy to AT&T" },
      { name: "TPG Capital",               role: "Private equity firm that acquired 30% of DirecTV" },
      { name: "Discovery Communications", role: "WarnerMedia merger partner, formed WBD" },
    ],
  },

  companyOverview: {
    targetName: "AT&T Inc.",
    body: "AT&T is the second-largest U.S. telecom carrier — a combined telecom-media conglomerate spanning mobile, wireline, broadband, satellite TV, and media. It attempted a transformation into a 'vertically integrated media-telecom conglomerate' through the 2015 DirecTV acquisition ($49B) and the 2018 Time Warner acquisition ($85B). But the total $134B acquisition cost pushed net debt to approximately $180B, accelerating the erosion of DirecTV's value in a cord-cutting environment. FY2019 annual revenue was $181.2B — the largest in the U.S. telecom industry — but persistent stock underperformance reflected the debt burden and strategic confusion. At the time of the Elliott campaign, AT&T's dividend yield was approximately 5.4%, attractive to defensive investors, but the growth-equity lens revealed obvious value destruction.",
    metrics: [
      { label: "Market cap (September 2019)", value: "~$265B",            sub: "NYSE: T" },
      { label: "Annual revenue (FY2019)",      value: "$181.2B",          sub: "Largest in U.S. telecom industry" },
      { label: "Net debt (2019)",              value: "~$180B",           sub: "DirecTV + Time Warner acquisitions accumulated" },
      { label: "Employees",                   value: "~247,000",          sub: "As of 2019" },
      { label: "EBITDA (FY2019 estimated)",   value: "~$59B",             sub: "Net Debt/EBITDA ≈ 3.0x" },
      { label: "Dividend yield (2019)",       value: "~5.4%",             sub: "Annual dividend $2.08/share" },
    ],
    financials: [
      {
        year: "FY2018",
        revenue: 170756,
        cogs: 87568,
        grossProfit: 83188,
        sga: 54000,
        operatingIncome: 29188,
        ebitda: 55000,
      },
      {
        year: "FY2019",
        revenue: 181193,
        cogs: 91000,
        grossProfit: 90193,
        sga: 57000,
        operatingIncome: 33193,
        ebitda: 59000,
      },
      {
        year: "FY2020",
        revenue: 171760,
        cogs: 84000,
        grossProfit: 87760,
        sga: 55000,
        operatingIncome: 32760,
        ebitda: 56000,
      },
    ],
    financialsNote: "Unit: $M (USD millions) | AT&T consolidated basis | FY2019 was the first full year of WarnerMedia consolidation | Source: AT&T annual reports and public filings",
    financialsCurrency: "USD",
    financialsUnit: "$M",
  },

  governanceOverview: {
    body: "At the time of the Elliott campaign, AT&T's board was criticized for failing to provide adequate oversight of CEO Randall Stephenson's M&A strategy. Two mega-deals totaling $134B passed without meaningful board opposition in three years, and accountability for post-acquisition integration failures was equally absent. Elliott framed this not as a 'governance failure' but as a 'strategic failure,' leading with specific demands — CEO replacement and asset disposition. Large institutional investors (Vanguard, BlackRock, State Street) did not take public positions but formed an implicit consensus sympathetic to Elliott's demands — and this was the decisive factor that brought AT&T management to the negotiating table.",
    shareholders: [
      {
        id: "elliott",
        label: "Elliott Management",
        sub: "Paul Singer activist hedge fund, 'Activating AT&T' letter",
        stake: "1.2%",
        stakePct: 1.2,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "World's second-largest asset manager, neutral — implicit Elliott sympathy",
        stake: "7.8%",
        stakePct: 7.8,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "World's largest asset manager, neutral",
        stake: "6.5%",
        stakePct: 6.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "state-street",
        label: "State Street Global Advisors",
        sub: "World's third-largest ETF manager, neutral",
        stake: "4.9%",
        stakePct: 4.9,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "Retail/Public Shareholders",
        sub: "Majority dividend-focused investors — broadly sympathetic to stock recovery",
        stake: "79.6%",
        stakePct: 79.6,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 13,
      independent: 11,
      affiliated: 2,
      note: "The board's failure to adequately oversee the CEO's large-scale M&A strategy was one of the core arguments in Elliott's letter. Some board changes occurred following the 2020 agreement.",
    },
    issues: [
      {
        title: "Excessive Leverage — Net Debt $180B",
        description: "DirecTV $49B + Time Warner $85B = $134B in acquisitions drove AT&T's net debt to approximately $180B. Net Debt/EBITDA of approximately 3.0x was the largest recorded for any U.S. listed company. This debt burden was the root cause constraining 5G investment capacity and shareholder return capability.",
        severity: "critical",
      },
      {
        title: "Strategic Focus Loss — Conglomerate Discount",
        description: "The conglomerate structure spanning telecom (mobile/broadband), satellite TV (DirecTV), media (HBO/CNN/Warner Bros.), and advertising (Xandr) inflated the market's valuation discount. Strategic priority conflicts between business units, missed integration synergies, and resource allocation inefficiency compounded.",
        severity: "critical",
      },
      {
        title: "Long-Tenured CEO and Absence of Board Oversight",
        description: "CEO Randall Stephenson served from 2007, forcing through two mega-deals without effective board opposition. There was no accountability mechanism for post-acquisition failure. Elliott explicitly cited this as 'CEO accountability deficit.'",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Strategic review and disposition of DirecTV",
        result: "won",
        note: "July 2021: 30% stake in DirecTV sold to TPG Capital ($16.25B, implying ~$23.5B enterprise value). Against the $49B acquisition price, the loss was confirmed.",
      },
      {
        demand: "Strategic review of WarnerMedia (spin-off/merger)",
        result: "won",
        note: "May 2021: WarnerMedia-Discovery Communications merger announced. Warner Bros. Discovery (WBD) launched April 2022.",
      },
      {
        demand: "Replace CEO Randall Stephenson",
        result: "won",
        note: "July 2020: Stephenson 'retired,' John Stankey succeeded. The strongest of Elliott's core demands.",
      },
      {
        demand: "Achieve $60 stock price target (by year-end 2021)",
        result: "partial",
        note: "Actual stock settled around $28–$30. After the WarnerMedia spin-off, AT&T cut its dividend (2022), triggering a stock recalibration. The restructuring succeeded, but the price target proved excessively optimistic.",
      },
      {
        demand: "$5B+ operating cost reduction program",
        result: "won",
        note: "AT&T formalized and implemented a large-scale cost efficiency program after the 2020 agreement.",
      },
    ],
    stockImpact: {
      preCampaign: "$38 (just before Elliott letter in September 2019)",
      peakDuringCampaign: "$43 (just after the Elliott-AT&T agreement was announced in 2020)",
      postCampaign: "$27 (after the WarnerMedia spin-off announcement in 2021, dividend recalibration reflected)",
      note: "The stock rose approximately +25% over the two-year campaign, but after the WarnerMedia spin-off AT&T was redefined as a pure-play telecom, its dividend was cut (2022), and the stock was recalibrated. The genuine achievement of Elliott's campaign was long-term enterprise value restructuring rather than short-term stock gains.",
    },
  },

  dealStructure: {
    body: "The Elliott campaign was not a single transaction but a chain of three restructuring moves it triggered. First: CEO replacement (July 2020). Second: DirecTV 30% stake sale to TPG (July 2021). Third: WarnerMedia-Discovery merger (announced May 2021, completed April 2022). Elliott was not a direct party to these asset transactions, but it served as the catalyst for all three structural changes.",
    preOwnership: {
      nodes: [
        { id: "elliott", label: "Elliott Management", sub: "1.2% stake, 'Activating AT&T' letter", type: "acquirer" },
        { id: "att", label: "AT&T Inc.", sub: "Mobile, DirecTV, WarnerMedia conglomerate", type: "target" },
        { id: "directv", label: "DirecTV", sub: "Satellite TV, acquired for $49B (2015)", type: "entity" },
        { id: "wm", label: "WarnerMedia", sub: "HBO, CNN, Warner Bros., acquired for $85B (2018)", type: "entity" },
        { id: "big3", label: "Vanguard, BlackRock, State Street", sub: "Combined ~19.2%, neutral stance", type: "fund" },
      ],
      edges: [
        { from: "elliott", to: "att", label: "1.2% stake + activism letter" },
        { from: "att", to: "directv", label: "100% owned (2015 $49B acquisition)" },
        { from: "att", to: "wm", label: "100% owned (2018 $85B acquisition)" },
        { from: "big3", to: "att", label: "Combined ~19.2% held (swing voters)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_new", label: "AT&T (Post-Restructuring)", sub: "Pure-play telecom, focused on 5G and broadband", type: "target" },
        { id: "directv_jv", label: "DirecTV LLC (JV)", sub: "AT&T 70% + TPG 30%, ~$23.5B enterprise value", type: "entity" },
        { id: "wbd", label: "Warner Bros. Discovery", sub: "WarnerMedia + Discovery, launched 2022", type: "entity" },
        { id: "tpg", label: "TPG Capital", sub: "30% DirecTV stake, paid $16.25B", type: "fund" },
        { id: "elliott_post", label: "Elliott Management", sub: "Most campaign targets achieved", type: "acquirer" },
      ],
      edges: [
        { from: "att_new", to: "directv_jv", label: "70% stake retained" },
        { from: "tpg", to: "directv_jv", label: "30% acquired ($16.25B)" },
        { from: "att_new", to: "wbd", label: "WarnerMedia spun off and merged" },
        { from: "elliott_post", to: "att_new", label: "Served as restructuring catalyst" },
      ],
    },
    keyTerms: [
      { label: "Elliott letter published",             value: "September 9, 2019",                     accent: false },
      { label: "Elliott stake held",                   value: "~1.2% (~$3.2B)",                       accent: true },
      { label: "Stock target (Elliott's estimate)",    value: "$60 (by year-end 2021)",                accent: false },
      { label: "CEO replacement",                      value: "July 2020 (Stephenson → Stankey)",      accent: true },
      { label: "DirecTV TPG sale",                     value: "30% stake, $16.25B (July 2021)",        accent: true },
      { label: "DirecTV EV vs. acquisition price",     value: "$49B → ~$23.5B (value destroyed)",     accent: true },
      { label: "WarnerMedia-Discovery merger announced", value: "May 17, 2021",                        accent: true },
      { label: "WBD officially launched",              value: "April 11, 2022",                       accent: false },
    ],
  },

  advisors: {
    body: "Elliott does not typically disclose its advisory team in detail given the activist campaign nature. AT&T deployed major investment banks to respond to Elliott's demands, but the implicit support of institutional investors tilted the negotiating balance toward Elliott.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Elliott Management (Activist Side)",
        initials: "ELL",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Evercore (estimated)",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Financial analysis and valuation support for Elliott's activism campaign. Elliott has strong internal analytical capabilities and relies less on external investment banks.",
          },
          {
            firm: "Wachtell Lipton Rosen & Katz",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Legal support for the activism campaign. Legal review of shareholder letters and SEC disclosure compliance.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "AT&T (Management Side)",
        initials: "T",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor (Lead)",
            roleType: "financial",
            note: "AT&T's primary strategic financial advisor. Developed response strategy to Elliott's demands and structured DirecTV and WarnerMedia transactions.",
          },
          {
            firm: "JPMorgan Chase",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Advised on DirecTV TPG sale and WarnerMedia-Discovery merger.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Legal support for AT&T's activism response and asset sale/spin-off transactions.",
          },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reports and industry sources. Actual contract details are non-public. Elliott advisor information includes estimated data.",
  },

  valuation: {
    body: "Elliott's valuation logic was Sum-of-the-Parts (SOTP). Valuing the telecom (Connectivity), satellite TV (DirecTV), and media (WarnerMedia) as a combined conglomerate attracted a discount, but splitting them and valuing independently implied a combined value above $60 at current prices. In practice, DirecTV's enterprise value was confirmed at $23.5B post-spin-off — approximately 48% of the $49B acquisition price — demonstrating that the acquisition premium had been entirely destroyed.",
    rows: [
      { item: "AT&T market cap (at time of Elliott letter)",     val: "~$265B",    note: "September 2019, stock price ~$38" },
      { item: "Elliott stake value",                            val: "~$3.2B",     note: "~1.2% of total shares",                                    accent: true },
      { item: "DirecTV acquisition price (2015)",               val: "$49B",       note: "Enterprise value including debt" },
      { item: "DirecTV TPG transaction enterprise value (2021)", val: "~$23.5B",   note: "Implied by TPG 30% stake at $16.25B",                      accent: true },
      { item: "DirecTV acquisition premium destroyed",          val: "~$25.5B",    note: "$49B − $23.5B = more than half destroyed 6 years post-acquisition", accent: true },
      { item: "Time Warner acquisition price (2018)",           val: "$85B",       note: "Enterprise value including debt" },
      { item: "AT&T FY2019 EBITDA",                             val: "~$59B",      note: "Net Debt/EBITDA ≈ 3.0x, excessive debt structure" },
      { item: "Elliott stock target (year-end 2021)",           val: "$60",        note: "Actual stock reached ~$28–$30 — restructuring success, price target too optimistic" },
    ],
    disclaimer: "Figures based on public reports, AT&T SEC filings, and Elliott's letter. DirecTV enterprise value is an implied estimate based on TPG transaction terms.",
  },

  rationale: {
    buyer: {
      title: "Why Elliott targeted AT&T",
      initials: "ELL",
      bg: "bg-slate-700",
      points: [
        "Clear evidence of M&A failure — DirecTV subscriber attrition post-acquisition due to cord-cutting; WarnerMedia integration synergies missed post-acquisition. Five years of stock underperformance versus the S&P 500 by -55pp was quantitative proof of strategic failure.",
        "Specific value recovery path — SOTP valuation showed stock could recover from $38 to $60 through separation and disposition of non-core assets. Not abstract reform demands but numbers-based persuasion.",
        "Institutional investor consensus for change — large institutions like Vanguard and BlackRock had accumulated frustration with AT&T's strategic failures. Elliott channeled that consensus into a formal agreement.",
        "Activism works better at mega-caps — 1.2% of a $265B company equals $3.2B in absolute dollar terms. Unlike small and mid-cap targets, the goal was long-term structural change rather than short-term stock jump — forcing strategic realignment rather than capital allocation.",
      ],
    },
    seller: {
      title: "AT&T management's original position",
      initials: "T",
      bg: "bg-blue-700",
      points: [
        "Justification for the vertical integration strategy — conviction that combining the telecom network with content was the core competitive advantage against Netflix and other OTT players long-term. CEO Stephenson consistently described the WarnerMedia acquisition as 'the deal that opens the future of the telecom industry.'",
        "Case against selling DirecTV — satellite TV was still generating substantial cash flow, and despite near-term subscriber declines, it retained value as a content distribution channel. Practical arguments were also cited around tax complexity and debt repayment conditions in a sale.",
        "Cost efficiency already underway — cost reduction efforts were already in progress before the Elliott letter; Elliott's demands were excessive, in management's view.",
        "Full alignment with the board — management and board were fully committed to the current strategy, and there was no reason to modify a long-term strategy based on pressure from an activist fund holding a short-term position.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Most of Elliott's demands were realized. The three structural changes — CEO replacement (July 2020), DirecTV TPG sale (July 2021), and WarnerMedia-Discovery merger (April 2022) — all came to pass. AT&T was transformed into a pure-play telecom, and in the short term its stock rose approximately +25% over the two years following the Elliott letter. However, after the WarnerMedia spin-off AT&T cut its dividend sharply in 2022, and the stock recalibrated to around $27 — far below Elliott's $60 target. Meanwhile, Warner Bros. Discovery (WBD) recorded over $43B in goodwill impairment post-merger, becoming another M&A failure story. The more accurate assessment is not that Elliott's campaign 'saved' AT&T, but that it prematurely ended a failed strategy to prevent further losses.",
    overallVerdict: "Restructuring targets achieved — but the losses from the failed acquisitions were already permanent",
    positives: [
      "CEO replacement, DirecTV disposition, WarnerMedia spin-off — all three of Elliott's core demands realized within two years",
      "AT&T net debt gradually reduced from $180B through asset sales and spin-offs — path to financial health recovery as a pure-play telecom",
      "1.2% stake in a $250B+ company rewired a $134B M&A strategy in just two years — a landmark in activist investing history",
      "Given the accelerating cord-cutting trend, AT&T exiting media early was directionally correct",
      "Operating leverage partially recovered through the cost efficiency program implementation",
    ],
    risks: [
      "DirecTV value destruction confirmed: $49B acquisition → $23.5B enterprise value = $25.5B+ permanent loss. The acquisition premium was entirely destroyed.",
      "WarnerMedia-Discovery merger (WBD) also failed: WBD recorded $43B+ in goodwill impairment post-merger and showed weakness against Disney and Netflix in the streaming wars",
      "AT&T dividend cut (2022): Following the WarnerMedia spin-off, the dividend was cut sharply, causing a major exodus of dividend-focused investors and stock recalibration pressure",
      "Elliott's $60 stock target missed: Actual stock around $27–$30. Restructuring succeeded, but Elliott's valuation assumptions were excessively optimistic",
      "5G investment delay: Excessive debt and restructuring delayed 5G infrastructure investment relative to Verizon, leading to long-term competitive disadvantage",
    ],
    editorNote: "Elliott vs. AT&T is less a case about 'whether activism was right' than about 'how long a failed strategy can persist.' The DirecTV and Time Warner acquisition failures were already irreversible. What Elliott's campaign did was prevent further escalation of those losses and force AT&T back to the core telecom business it had built over decades. The time it took a 1.2% stake to reverse a $134B strategic mistake was just two years. It will be remembered as a demonstration that mega-cap activism can serve as the last resort of corporate governance.",
  },

  tombstone: {
    acquirerInitials: "ELL",
    acquirerBg: "bg-slate-700",
    targetInitials: "T",
    targetBg: "bg-blue-700",
    acquirerName: "Elliott Management Corporation",
    targetName: "AT&T Inc.",
    dealTitle: "Elliott × AT&T — The Aftermath of $134B in Acquisitions: DirecTV Sale + WarnerMedia Spin-off",
    dealSize: "$3.2B (1.2% stake)",
    dealSizeUSD: "$3.2B",
    evEbitda: "N/A (activism)",
    closeDate: "May 2021 (WarnerMedia spin-off announcement)",
  },

  sources: [
    {
      id: 1,
      text: "Elliott Management — 'Activating AT&T' Shareholder Letter (September 9, 2019)",
      url: "https://www.elliottinvestment.com",
    },
    {
      id: 2,
      text: "AT&T Inc. — SEC Form 8-K, Elliott Management Response Filings (2019–2021)",
    },
    {
      id: 3,
      text: "AT&T Inc. — Annual Reports (2018, 2019, 2020), NYSE: T",
    },
    {
      id: 4,
      text: "Wall Street Journal — Elliott Management Takes $3.2 Billion Stake in AT&T (September 9, 2019)",
    },
    {
      id: 5,
      text: "Financial Times — AT&T agrees to sell 30% of DirecTV to TPG Capital (February 2021)",
    },
    {
      id: 6,
      text: "AT&T Press Release — AT&T to Combine WarnerMedia with Discovery Communications (May 17, 2021)",
    },
    {
      id: 7,
      text: "Bloomberg — Randall Stephenson to Retire as AT&T CEO, John Stankey Takes Over (July 2020)",
    },
    {
      id: 8,
      text: "S&P Global Market Intelligence — AT&T Net Debt Analysis and Leverage Metrics (2019–2021)",
    },
  ],

  seo: {
    title: "Elliott Management × AT&T — Complete Analysis of the $134B Acquisition Failure and Activist Counterattack",
    description:
      "Complete analysis of Paul Singer's Elliott Management driving CEO replacement, DirecTV sale, and WarnerMedia spin-off at AT&T with a 1.2% stake in 2019–2021. The structural causes of the acquisition failure, conglomerate unwinding strategy, and stock impact explained.",
    keywords: [
      "Elliott AT&T activism",
      "AT&T DirecTV sale",
      "WarnerMedia Discovery merger",
      "mega-cap activism",
      "Paul Singer AT&T",
      "Activating AT&T",
      "Randall Stephenson replacement",
      "conglomerate unwinding",
      "AT&T restructuring",
      "activist hedge fund",
    ],
  },

  concepts: [
    {
      term: "Mega-Cap Activism",
      description:
        "Activist investing targeting companies with $200B+ market capitalization. A stake of just 1–2% can provide sufficient pressure, and the goal is long-term structural change rather than short-term price gains. Elliott-AT&T is the textbook case.",
    },
    {
      term: "Conglomerate Unwinding",
      description:
        "Restructuring an overgrown conglomerate around its core business following excessive M&A. AT&T held telecom, satellite TV, media, and advertising all at once before returning to a pure-play telecom under Elliott's pressure.",
    },
    {
      term: "Asset Disposal",
      description:
        "Selling non-core assets to simultaneously reduce debt, increase shareholder returns, and sharpen strategic focus. The DirecTV 30% TPG sale is the prime example — AT&T recovered $16.25B through it.",
    },
    {
      term: "Acquisition Premium Erosion",
      description:
        "The phenomenon in which value declines after an expensive acquisition until the acquisition premium is entirely destroyed. AT&T's $49B DirecTV acquisition was valued at ~$23.5B just six years later — a $25.5B permanent loss of premium.",
    },
    {
      term: "Dividend Cut Signal",
      description:
        "AT&T's dividend cut after the WarnerMedia spin-off (2022) was a structural change signal showing a telecom abandoning media assets and restructuring its financials. It forced dividend-focused investors to reconsider their long-term positions.",
    },
  ],

  faq: [
    {
      q: "How did Elliott Management change AT&T with just a 1.2% stake?",
      a: "A 1.2% stake (~$3.2B) is a voting minority, but the scale was large enough to produce a letter that had to be taken seriously. Elliott relied on persuasion through public disclosure rather than voting power. The specific numbers — '5-year underperformance vs. S&P 500 by 55pp,' '$60 stock target' — combined with concrete demands for CEO replacement and asset disposals gained the implicit sympathy of large institutional investors like Vanguard and BlackRock. It was not the 1.2% stake but the tacit support of institutions holding ~19% that was the real source of negotiating power.",
    },
    {
      q: "Why did AT&T's DirecTV and Time Warner acquisitions fail?",
      a: "Two root causes. First, timing misjudgment — cord-cutting was already clearly visible at the time of the DirecTV acquisition (2015), and by the Time Warner acquisition (2018) the structural crisis of traditional media was becoming obvious as Netflix surged. Second, capability mismatch — the creative and cultural competencies required to run a media company were fundamentally different from those of a telecom. The entire $180B in net debt additionally eliminated the capacity for future investment.",
    },
    {
      q: "Why didn't Elliott's $60 stock target get reached?",
      a: "Elliott's SOTP valuation argued the stock could reach $60+ by valuing each business unit independently. But DirecTV's actual value was confirmed at $23.5B (less than half the $49B acquisition), and after the WarnerMedia spin-off AT&T cut its dividend. As AT&T was redefined from a dividend-yield-driven defensive stock, the investor base was restructured, and the stock settled at $27–$30. 'The restructuring direction was right but the valuation assumptions were too optimistic' is the accurate assessment.",
    },
    {
      q: "Was the WarnerMedia-Discovery merger (Warner Bros. Discovery) successful?",
      a: "It ultimately became another M&A failure case. WBD recorded $43B+ in goodwill impairment post-merger and trailed Disney and Netflix in the streaming wars. Elliott's push for the WarnerMedia spin-off was the right decision from AT&T's perspective, but the value of the spun-off WarnerMedia itself continued to decline — the structural crisis of the media industry remained unresolved.",
    },
    {
      q: "What is the significance of this case from an activist investing perspective?",
      a: "Three dimensions. First, proof that activism works at mega-caps — it changed the entire strategy of a $250B company in just two years. Second, the power of a specific blueprint — presenting the stock target, asset disposal targets, and cost savings figures in numbers, not abstract reform demands, was key to persuading institutional investors. Third, the limits of activism — Elliott's restructuring prevented further escalation of AT&T's losses rather than 'saving' AT&T, suggesting activism is more effective at 'damage control' than 'prevention.'",
    },
  ],
};

export default deal;
