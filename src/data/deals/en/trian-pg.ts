import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "trian-pg",
  title: "Trian vs. P&G — The $100 Million Proxy Fight That Ended With Nelson Peltz on the Board",
  subtitle: "Proxy Fight Cost $100M · 0.07% Vote Margin · One Board Seat Drove 50% Stock Gain · FMCG Activism",
  category: "activism",
  industry: "Consumer Goods (FMCG)",
  country: "United States",
  announcedAt: "2017-02-09",
  closedAt: "2017-12-15",
  announcedDisplay: "February 2017",
  closedDisplay: "December 2017",
  readingMinutes: 9,
  tags: ["Trian", "P&G", "Nelson Peltz", "proxy fight", "FMCG", "activism", "consumer goods", "board seat"],
  excerpt:
    "Trian Fund Management's Nelson Peltz built a 1.5% stake ($3.5B) in P&G and demanded one board seat. Both sides spent $100M in the largest proxy contest in corporate history. P&G declared victory by 0.07% — then quietly handed Peltz a board seat three months later. P&G stock went from $87 to $130+.",

  // ── Company Badges ───────────────────────────────────────────
  acquirer: { initials: "TRN", bg: "bg-rose-700", label: "Trian Fund" },
  target:   { initials: "PG", bg: "bg-blue-700", label: "P&G" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Procter & Gamble was the world's largest consumer goods company — Tide, Gillette, Pampers, and 65 product categories generating $65B in annual revenue. But from 2012 to 2016, organic sales growth had stalled, Amazon and D2C brands were chipping away at market share, and P&G's stock lagged peers. The culprit, Trian would argue, was six layers of bureaucracy strangling a company that needed to move fast.",
    "Trian Fund Management, founded by Nelson Peltz, disclosed a 1.5% stake (~$3.5B) in P&G in February 2017 and made a single demand: one board seat for Peltz himself. P&G refused. The stage was set for the most expensive proxy battle in corporate history.",
    "At P&G's September 2017 annual meeting, both sides had collectively spent approximately $100M on the campaign. The result was the closest in proxy history — P&G declared victory by 0.07%, a margin of roughly 6 million votes out of 840 million cast. Peltz immediately demanded a recount.",
    "The recount confirmed P&G's margin. But in December 2017, P&G voluntarily offered Peltz a board seat. It was a strategic surrender — P&G had technically won the vote but lost the war. After Peltz joined the board, P&G's stock climbed from $87 to above $130.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "P&G Market Cap ~$230B",
    acquirerName: "Trian Fund Management",
    targetName: "Procter & Gamble",
    announcedDisplay: "February 2017",
    closedDisplay: "December 2017",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "Trian acquired 1.5% of P&G (~$3.5B) and demanded one board seat for Nelson Peltz. P&G refused, triggering the most expensive proxy battle in history.",
    "September 2017 annual meeting: P&G declared victory by 0.07% after both sides spent a combined ~$100M. Peltz demanded a recount.",
    "December 2017: P&G voluntarily offered Peltz a board seat — a strategic surrender after a technical win.",
    "Trian's core demands: simplify the six-layer organization to four, rationalize 65 product categories, and improve operating margins.",
    "P&G stock: $87 (Trian entry) → $130+ (post-Peltz board appointment). Trian return approximately +50%.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "In 2017, the FMCG industry was at a structural inflection point. Amazon's entry into consumer packaged goods, the explosive growth of direct-to-consumer brands, expanding private label offerings, and the rise of organic and premium niche competitors were simultaneously eroding the traditional advantages of large incumbents like P&G. Scale in manufacturing and distribution — P&G's historical moats — were becoming less defensible.",
    metrics: [
      { label: "P&G Product Categories",          value: "65",          sub: "Trian demanded rationalization" },
      { label: "P&G Organizational Layers",        value: "6 layers",    sub: "Trian demanded reduction to 4" },
      { label: "Trian Investment Size",            value: "~$3.5B",      sub: "1.5% of P&G" },
      { label: "Total Proxy Campaign Cost",        value: "~$100M",      sub: "Combined both sides" },
    ],
    subBody:
      "A proxy fight (or proxy contest) is an activist fund's attempt to elect its own nominees to a company's board by winning a majority of shareholder votes. The Trian-P&G battle was unprecedented in scale: $100M spent to decide a single board seat at a $230B company. It redefined what institutional investors expected from activist campaigns and from boards responding to them.",
    players: [
      { name: "Trian Fund Management (Nelson Peltz)", role: "Activist fund, 1.5% P&G stake, board seat demand" },
      { name: "P&G Management & Board (11 members)",  role: "Opposed Peltz appointment; pursued internal restructuring" },
      { name: "Unilever · Colgate-Palmolive",          role: "FMCG peers facing identical D2C disruption pressures" },
      { name: "Vanguard · BlackRock · State Street",   role: "Combined 18.8% stake — the decisive swing votes" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Procter & Gamble",
    body: "Procter & Gamble was founded in 1837 and had grown into the world's largest consumer goods company with more than 10 billion-dollar brands including Tide, Gillette, Pampers, Oral-B, and Febreze. In FY2017, P&G generated $65B in revenue across 65 product categories. It had increased its dividend for 60 consecutive years — a Dividend Aristocrat. But organic sales growth from 2012–2016 had essentially stalled, and the stock had underperformed consumer staples peers.",
    metrics: [
      { label: "Employees (FY2017)",           value: "~95,000",      sub: "Global consolidated" },
      { label: "Revenue (FY2017)",             value: "$65.1B",       sub: "65 categories combined" },
      { label: "Net Income (FY2017)",          value: "$15.2B",       sub: "FY2017 basis" },
      { label: "Product Categories",          value: "65",            sub: "Rationalization target" },
      { label: "Consecutive Dividend Growth", value: "60 years",      sub: "Dividend Aristocrat status" },
    ],
    financials: [
      { year: "FY2015", revenue: 76279, cogs: 37056, grossProfit: 39223, sga: 22044, operatingIncome: 10799, ebitda: 14500 },
      { year: "FY2016", revenue: 65299, cogs: 32636, grossProfit: 32663, sga: 18949, operatingIncome: 13441, ebitda: 16000 },
      { year: "FY2017", revenue: 65058, cogs: 32536, grossProfit: 32522, sga: 18568, operatingIncome: 13955, ebitda: 16500 },
      { year: "FY2018", revenue: 66832, cogs: 33264, grossProfit: 33568, sga: 19081, operatingIncome: 14350, ebitda: 17200 },
    ],
    financialsNote: "Unit: $M (millions USD) | US GAAP consolidated basis | Source: P&G Annual Report",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "P&G's governance challenge was institutional rather than structural — 180 years of corporate culture had created organizational layers and portfolio breadth that slowed decision-making and diluted capital allocation. Trian's thesis was that a single engaged director with operational experience could reshape the board's strategic priorities. P&G's nominally independent board had limited direct consumer goods operational experience, enabling Trian's narrative.",
    shareholders: [
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "Largest institutional holder",
        stake: "8.5%",
        stakePct: 8.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "Second largest holder",
        stake: "6.2%",
        stakePct: 6.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "state-street",
        label: "State Street",
        sub: "Third largest holder",
        stake: "4.1%",
        stakePct: 4.1,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "trian",
        label: "Trian Fund Management",
        sub: "Nelson Peltz activist fund",
        stake: "1.5%",
        stakePct: 1.5,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "public",
        label: "Retail & Minority Shareholders",
        sub: "Individual and small investors",
        stake: "79.7%",
        stakePct: 79.7,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 11,
      independent: 10,
      affiliated: 1,
      note: "Formally, independent director ratio was high. However, critics argued the board lacked directors with hands-on consumer goods operational experience, limiting effective strategic oversight.",
    },
    issues: [
      {
        title: "Organizational Layer Excess",
        description: "Six management layers slowing decision-making, increasing cost, and suppressing innovation. Trian's primary structural critique.",
        severity: "critical",
      },
      {
        title: "Over-Diversified Portfolio",
        description: "Simultaneous operation of 65 product categories diluted capital allocation. Competing against nimble D2C brands while spreading resources too thin.",
        severity: "critical",
      },
      {
        title: "D2C and Digital Transformation Lag",
        description: "Amazon and direct-to-consumer brands were eroding P&G's market share. The company was slow to invest in digital marketing and direct distribution channels.",
        severity: "high",
      },
      {
        title: "Board Operational Expertise Gap",
        description: "Limited number of board members with relevant FMCG digital transformation and D2C channel experience, constraining effective strategic oversight.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "Nelson Peltz Board Appointment (1 Seat)",
        result: "won",
        note: "P&G won the September 2017 proxy vote by 0.07% but voluntarily offered Peltz a board seat in December 2017.",
      },
      {
        demand: "Organizational Layer Simplification (6 → 4)",
        result: "partial",
        note: "Some organizational restructuring occurred post-Peltz appointment. Full transition to four layers remains unclear.",
      },
      {
        demand: "Portfolio Rationalization (Reduce 65 Categories)",
        result: "partial",
        note: "P&G had already reduced from 170 to 65 brands from 2014–2016. Direction aligned with Trian's demand but direct causal link unclear.",
      },
    ],
    stockImpact: {
      preCampaign: "$87",
      peakDuringCampaign: "$130+",
      postCampaign: "$120+",
      note: "P&G stock rose from $87 (Trian entry, Feb 2017) to $130+ following Peltz's board appointment (Dec 2017). Approximately 50% gain. Stock was relatively unchanged immediately around the proxy vote, with the sustained re-rating occurring post-appointment.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "Trian built a 1.5% stake in P&G through open market purchases, then used its shareholder standing to demand one board seat for Nelson Peltz. When P&G refused, Trian launched a proxy campaign to directly solicit votes from all P&G shareholders. The September 2017 annual meeting became the decisive battleground.",
    preOwnership: {
      nodes: [
        { id: "trian",       label: "Trian Fund Management",   sub: "1.5% stake, demanding board seat",         type: "acquirer" },
        { id: "pg-board",    label: "P&G Board (11 directors)", sub: "10 independent, 1 management",            type: "target" },
        { id: "pg-mgmt",     label: "P&G Management",          sub: "CEO David Taylor — opposed Peltz",         type: "entity" },
        { id: "big-three",   label: "Big 3 Institutional Holders", sub: "Vanguard · BlackRock · State Street (swing votes)", type: "fund" },
      ],
      edges: [
        { from: "trian",     to: "pg-board",  label: "1.5% (board seat demand)" },
        { from: "pg-mgmt",   to: "pg-board",  label: "Recommended against Peltz" },
        { from: "big-three", to: "pg-board",  label: "18.8% (decisive swing votes)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "peltz-director", label: "Peltz — Director",      sub: "Dec 2017, P&G voluntary offer",     type: "acquirer" },
        { id: "pg-new-board",   label: "P&G Board (12 members)", sub: "Peltz included, reform accelerated", type: "target" },
        { id: "pg-reform",      label: "P&G Organizational Reform", sub: "Layer reduction · category focus", type: "entity" },
      ],
      edges: [
        { from: "peltz-director", to: "pg-new-board", label: "Board seat gained" },
        { from: "pg-new-board",   to: "pg-reform",    label: "Restructuring accelerated" },
      ],
    },
    keyTerms: [
      { label: "Trian Stake",              value: "1.5%",                       accent: true },
      { label: "Investment Size",          value: "~$3.5B" },
      { label: "Board Demand",             value: "1 seat (Peltz himself)" },
      { label: "Proxy Campaign Cost",      value: "~$100M combined",            accent: true },
      { label: "Vote Margin (Sept 2017)",  value: "P&G won by 0.07%, then conceded", accent: true },
      { label: "Stock Return",             value: "+50% ($87 → $130+)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "The scale of the contest — $100M in combined campaign spending — required top-tier advisors on both sides. P&G mobilized Goldman Sachs and Joele Frank for institutional investor outreach; Trian deployed D.F. King for proxy solicitation.",
    sides: [
      {
        side: "target",
        sideLabel: "P&G (Defense Side)",
        initials: "PG",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Proxy defense strategy. Institutional investor outreach and shareholder communication campaign.",
          },
          {
            firm: "Joele Frank, Wilkinson Brimmer Katcher",
            role: "PR & Communications",
            roleType: "other",
            note: "Managed shareholder communications and public messaging strategy throughout the proxy campaign.",
          },
        ],
      },
      {
        side: "acquirer",
        sideLabel: "Trian (Activist Side)",
        initials: "TRN",
        bg: "bg-rose-700",
        advisors: [
          {
            firm: "D.F. King & Co.",
            role: "Proxy Solicitation",
            roleType: "financial",
            note: "Led vote-gathering campaign. Canvassed institutional and retail shareholders to support Peltz board nomination.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources. Actual engagement terms may differ.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Trian's core valuation argument was that P&G's organizational inefficiency was destroying over $1B in annual value — and that a focused portfolio and leaner structure would unlock margin expansion. At approximately 19× EV/EBITDA on entry, the trade required meaningful operational improvement to generate target returns.",
    rows: [
      { item: "P&G Entry Price",                    val: "$87",       note: "February 2017 basis" },
      { item: "EV/EBITDA at Entry (FY2017)",        val: "~19×",      note: "Entry valuation" },
      { item: "Stock Price Post-Proxy Vote",        val: "~$90",      note: "Minimal move around the vote" },
      { item: "Peak Price (Post-Board Appointment)", val: "$130+",    note: "2018–2019",             accent: true },
      { item: "Trian Estimated Return",             val: "~+50%",     note: "$87 → $130 basis",     accent: true },
      { item: "Margin Improvement Potential (Trian)", val: "$1B+",   note: "Annual cost reduction estimate", accent: true },
    ],
    disclaimer: "Note: Stock prices and valuation figures are estimates based on public data. Actual returns may differ.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Did Trian Push for a P&G Board Seat?",
      initials: "TRN",
      bg: "bg-rose-700",
      points: [
        "Portfolio rationalization opportunity: Concentrating P&G's 65 categories would improve capital allocation and allow premium investment in high-return brands.",
        "Organizational efficiency: Reducing six management layers to four could generate over $1B in annual cost savings, directly expanding operating margins.",
        "D2C and digital acceleration: The board needed a director with operational consumer goods experience to drive digital transformation faster than P&G's internal pace.",
        "Maximum leverage from minimum capital: $3.5B (1.5% stake) to influence the strategy of a $230B company — activist investing's core leverage proposition.",
      ],
    },
    seller: {
      title: "Why Did P&G Refuse?",
      initials: "PG",
      bg: "bg-blue-700",
      points: [
        "Restructuring already underway: P&G had already reduced its brand portfolio from 170 to 65 between 2014–2016 — the turnaround was in progress.",
        "Questioned Trian's operational fit: P&G management doubted whether Trian's restaurant chain and consumer goods restructuring experience translated to managing a global CPG platform.",
        "Board governance concerns: Adding an activist-nominated director could compromise the board's independence and create a conflicted governance dynamic.",
        "Proxy fight itself destroys value: Spending $100M on a campaign and distracting management for months was itself a shareholder value impairment, P&G argued.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "After Peltz joined the board in December 2017, P&G accelerated margin improvement, digital marketing investment, and organizational simplification. The stock rose from $87 to $130+, approximately 50%. The causal question remains open — how much of the improvement was Peltz's direct influence versus P&G's existing restructuring momentum?",
    overallVerdict: "Trian Win — P&G Long-Term Restructuring Accelerated",
    positives: [
      "P&G's operating margins improved, categories were streamlined, and free cash flow strengthened post-Peltz board appointment.",
      "Trian realized approximately 50% return on a $3.5B investment — roughly $1.75B in profit.",
      "The proxy campaign itself sent a strong restructuring acceleration signal to P&G management before Peltz even joined the board.",
    ],
    risks: [
      "Causal attribution is unclear — how much improvement was Peltz vs. P&G's internally-driven restructuring plan.",
      "The $100M proxy campaign cost is a real shareholder value drag, regardless of the eventual outcome.",
      "One board seat has limits: structural FMCG challenges (D2C disruption, digital transformation) are decade-long shifts that a single director cannot resolve.",
    ],
    editorNote:
      "Trian vs. P&G shows what activism's leverage ratio looks like at its most extreme: $100M spent to elect one director, and that one director was associated with an $80B market cap gain. Whether correlation equals causation is a question worth asking — but the market clearly repriced P&G as a more disciplined, focused operator after December 2017.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "TRN",
    acquirerBg: "bg-rose-700",
    targetInitials: "PG",
    targetBg: "bg-blue-700",
    acquirerName: "Trian Fund Management",
    targetName: "Procter & Gamble",
    dealTitle: "Trian Fund Management's Proxy Battle at Procter & Gamble",
    dealSize: "Investment ~$3.5B",
    dealSizeUSD: "approx. USD 3.5 Billion",
    evEbitda: "~19× at Entry",
    closeDate: "Dec 2017",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Trian Fund Management, P&G 13F Disclosure (February 9, 2017)" },
    { id: 2, text: "Procter & Gamble 2017 Proxy Statement (DEF 14A); Annual Meeting Results Disclosure (September 2017)" },
    { id: 3, text: "Trian Fund Management, 'Revitalizing P&G' White Paper (2017)" },
    { id: 4, text: "Wall Street Journal, 'P&G Adds Peltz to Board After Narrow Proxy Victory' (December 2017)" },
    { id: 5, text: "Procter & Gamble Annual Reports FY2015–FY2018" },
    { id: 6, text: "Bloomberg, 'P&G's $100 Million Proxy Fight Ends With Trian's Nelson Peltz on Board' (December 2017)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Trian vs. P&G — The $100 Million Proxy Fight That Ended With Nelson Peltz on the Board",
    description:
      "Complete analysis of Trian's Nelson Peltz activism campaign at Procter & Gamble. $100M proxy battle, 0.07% vote margin, one board seat driving 50% stock gain. The FMCG activism playbook in full.",
    keywords: [
      "Trian P&G",
      "Nelson Peltz activism",
      "P&G proxy fight",
      "P&G board",
      "FMCG activism",
      "P&G stock",
      "consumer goods restructuring",
      "Trian Fund Management",
      "activist board seat",
      "P&G organizational reform",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Proxy Fight (Proxy Contest)",
      description: "An activist fund's attempt to elect its own nominated directors to a company board by soliciting shareholder votes in competition with incumbent management. Trian-P&G was the most expensive in corporate history.",
    },
    {
      term: "FMCG Restructuring",
      description: "The process by which consumer goods companies rationalize brand portfolios, reduce organizational complexity, and accelerate digital transformation to defend against D2C and private label competition.",
    },
    {
      term: "Organizational Layer Reduction",
      description: "Flattening a company's management hierarchy to accelerate decision-making, reduce overhead, and drive accountability closer to the market. Trian demanded P&G reduce from six to four management layers.",
    },
    {
      term: "Portfolio Concentration Strategy",
      description: "Divesting non-core brands and businesses to focus capital and management attention on the highest-return segments. P&G had already reduced from 170 to 65 brands from 2014–2016.",
    },
    {
      term: "Activist Board Seat Value",
      description: "The mechanism by which an activist investor secures direct influence over corporate strategy, capital allocation, and executive accountability through a single board directorship — without majority ownership.",
    },
    {
      term: "FMCG Activist Investing",
      description: "Activism campaigns targeting consumer goods companies' organizational rigidity, over-diversification, and digital transformation lag. Trian-P&G became the defining case; followed by similar campaigns at Unilever, Kellogg, and others.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "What exactly did Nelson Peltz demand from P&G?",
      a: "Trian's demands were outlined in its 'Revitalizing P&G' white paper: (1) appoint Nelson Peltz to the board; (2) simplify P&G's six management layers to four, generating over $1B in annual cost savings; and (3) rationalize the 65 product category portfolio by divesting non-core brands and concentrating investment in P&G's highest-return businesses.",
    },
    {
      q: "Why did P&G add Peltz to the board after winning the proxy vote?",
      a: "P&G won September's proxy vote by only 0.07% — approximately 6 million votes out of 840 million cast. A margin that narrow signaled near-total shareholder dissatisfaction with the board. In December 2017, P&G made a strategic decision to accept Peltz voluntarily rather than face another expensive, distracting campaign the following year. It was a tactical win followed by a strategic concession.",
    },
    {
      q: "How was the vote margin 0.07% in such a large company?",
      a: "P&G's shareholder base is dominated by large passive managers — Vanguard, BlackRock, and State Street collectively held about 18.8% and voted for the most part neutrally or by governance principles rather than on activist merit. With the large institutional vote split and management's existing shareholder base balanced against Trian's retail and institutional outreach campaign (run by D.F. King), the result came down to millions of individual retail votes. The thinness of the margin reflected genuine shareholder ambivalence about P&G's performance.",
    },
    {
      q: "How much money did Trian make on P&G?",
      a: "Trian entered P&G at approximately $87 per share for a total investment of ~$3.5B (1.5% stake) in early 2017. After Peltz joined the board, P&G stock rose to $130+. At a ~50% return, Trian's estimated profit was approximately $1.75B or more, depending on the holding period and exact exit price.",
    },
    {
      q: "Did P&G actually change after Peltz joined the board?",
      a: "P&G's operating margins improved, free cash flow strengthened, digital marketing investment accelerated, and the organizational structure was simplified after Peltz's December 2017 board appointment. The stock reached $130+ within two years. However, separating Peltz's direct contribution from P&G's pre-existing restructuring trajectory is genuinely difficult — P&G had been simplifying its portfolio since 2014. The market clearly credited the change, but the causal attribution remains contested.",
    },
    {
      q: "What makes FMCG activism distinctive?",
      a: "FMCG activism targets a common set of structural vulnerabilities: over-diversified brand portfolios, bureaucratic organizational layers, and slow digital adaptation. The economics are compelling for activists because even a 1–2% stake in a $100B+ company gives the fund meaningful leverage if institutional swing voters align. Trian-P&G set the template; similar campaigns followed at Unilever (Peltz again, 2022), Kellogg, and Kraft Heinz — all featuring the same portfolio-focus and organizational simplification thesis.",
    },
  ],
};

export default deal;
