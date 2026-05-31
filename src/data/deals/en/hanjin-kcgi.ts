import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "hanjin-kcgi",
  title: "KCGI vs. Hanjin KAL — Korea's First Chaebol Accountability Campaign",
  subtitle: "NPS Strips Cho Yang-ho's Board Seat · Delta White Knight · Nut Rage to Activism",
  category: "activism",
  industry: "Aviation & Logistics (Holding Company)",
  country: "South Korea",
  announcedAt: "2018-11-07",
  closedAt: "2021-06-30",
  announcedDisplay: "November 2018",
  closedDisplay: "June 2021",
  readingMinutes: 10,
  tags: ["KCGI", "Hanjin KAL", "Gang Sung-boo", "activism", "NPS", "Delta Air Lines", "Hanjin Group", "corporate governance", "white knight", "Korean Air"],
  excerpt:
    "Gang Sung-boo's KCGI accumulated a 10.6% stake in Hanjin KAL and launched Korea's most dramatic governance activism campaign, demanding an end to owner misconduct. The NPS stripped chairman Cho Yang-ho of his board seat — a first in Korean history — before Delta Air Lines emerged as a white knight, turning the fight into a three-way battle.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "KCGI", bg: "bg-violet-700", label: "KCGI (Gang Sung-boo Fund)" },
  target:   { initials: "HJK",  bg: "bg-blue-700",   label: "Hanjin KAL" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Hanjin KAL is the holding company controlling Korean Air, Jin Air, Hanjin Shipping, and other Hanjin Group affiliates. The Cho family maintained control through complex circular shareholding structures. The 2014 'nut rage' incident — when Korean Air heiress Cho Hyun-ah forced a plane to return to the gate over improperly served nuts — and the 2018 'water rage' incident involving Cho Hyun-min generated massive public outrage and placed the family's governance failures firmly in the spotlight.",
    "KCGI (Korea Corporate Governance Improvement), led by fund manager Gang Sung-boo, disclosed a 10.6% stake in Hanjin KAL in November 2018, launching a full-scale activism campaign. Its core demands were simple and resonant: end owner misconduct, remove the Cho family from management, and overhaul the group's governance structure. The argument that owner risk was directly suppressing shareholder value gained wide traction in markets and the press.",
    "In March 2019, the National Pension Service (NPS) voted against the reappointment of Chairman Cho Yang-ho to Korean Air's board of directors, successfully blocking his return. It was the first time in Korean history that the NPS had directly stripped a chaebol patriarch of a board seat — a watershed moment for institutional investor activism following the introduction of Korea's Stewardship Code in 2016. Chairman Cho Yang-ho passed away unexpectedly one month later, in April 2019.",
    "In February 2020, Delta Air Lines acquired a 14.9% stake in Hanjin KAL, effectively joining forces with Chairman Cho Won-tae. The arrival of this white knight fundamentally changed the balance of power. At the March 2020 shareholder meeting, the Cho Won-tae/Delta alliance clashed with the KCGI/Bando Construction/Cho Hyun-ah coalition. Cho Won-tae prevailed. The announcement of the Korean Air–Asiana Airlines merger in November 2020 then reframed the entire deal landscape, and KCGI divested its stake in 2021, concluding the campaign.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Hanjin KAL market cap ~KRW 1.2 trillion",
    acquirerName: "KCGI (Gang Sung-boo Fund)",
    targetName: "Hanjin KAL",
    announcedDisplay: "November 2018",
    closedDisplay: "June 2021",
    country: "South Korea",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "KCGI accumulated a 10.6% stake in Hanjin KAL (the holding company controlling Korean Air and Jin Air) and launched an activism campaign centered on owner misconduct and governance reform.",
    "March 2019: NPS votes against Cho Yang-ho's board reappointment — the first time in Korean history a chaebol patriarch has been stripped of a board seat by the national pension fund.",
    "April 2019: Chairman Cho Yang-ho passes away. Cho Won-tae (second son) takes the helm.",
    "February 2020: Delta Air Lines emerges as white knight (14.9%) → three-way battle: Cho Won-tae vs. KCGI + Bando Construction + Cho Hyun-ah.",
    "March 2020 AGM: Cho Won-tae's side prevails. The announced Korean Air–Asiana merger (November 2020) then reshapes the strategic landscape.",
    "KCGI returns: estimated ~+80% gain on invested capital upon exiting its position in 2021.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "Hanjin KAL controls Korean Air — which holds roughly 40% of international passenger traffic at Incheon Airport — along with Jin Air, Hanjin Shipping, and Jeongseok Enterprise across 15 affiliates. Korean Air ranks among the world's top five air cargo carriers by revenue. As a pure holding company, Hanjin KAL had long traded at a persistent discount to the sum of its underlying assets (the 'holding company discount'). KCGI's investment thesis rested squarely on closing that gap by removing the owner-risk premium embedded in the share price.",
    metrics: [
      { label: "Korean Air intl. pax share (Incheon)", value: "~40%",           sub: "by seat capacity" },
      { label: "Korean Air annual passengers (2018)",  value: "~28.7 million",   sub: "domestic + international" },
      { label: "Korean Air air cargo ranking",         value: "Top 5 globally",  sub: "by cargo revenue" },
      { label: "Hanjin KAL market cap (pre-campaign)", value: "~KRW 1.2 trillion", sub: "November 2018" },
    ],
    subBody:
      "Shareholder activism involves accumulating a stake and then pressing management for governance improvements, asset sales, or capital returns in order to unlock shareholder value. KCGI combined financial undervaluation arguments with a powerful social narrative around 'owner misconduct' — an early template for ESG-driven activism in Korea. The campaign's outcome influenced the subsequent wave of activism at KT&G (2023), Hyundai Motor (2019), and SM Entertainment (2023).",
    players: [
      { name: "KCGI (Gang Sung-boo)",         role: "Activist fund, peak stake ~15%" },
      { name: "Cho Won-tae (Hanjin KAL CEO)", role: "Founding family heir, led defensive strategy" },
      { name: "Delta Air Lines",               role: "White knight, 14.9% strategic stake" },
      { name: "Bando Construction + Cho Hyun-ah", role: "KCGI coalition partner, ~10.6% combined" },
      { name: "National Pension Service (NPS)", role: "Stewardship Code actor, voted against Cho Yang-ho" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Hanjin KAL",
    body: "Hanjin KAL was established in 2013 as a pure holding company following a Hanjin Group restructuring. Its core asset is a 28.9% stake in Korean Air, complemented by controlling interests in Jin Air, Hanjin Shipping, and Jeongseok Enterprise across 15 affiliates. Revenue is generated primarily through subsidiary dividends, brand royalties, and rental income rather than direct operations. Hanjin KAL's shares had long been penalized by a holding company discount relative to Korean Air's intrinsic value — precisely the inefficiency KCGI sought to exploit.",
    metrics: [
      { label: "Market cap (pre-campaign)",   value: "~KRW 1.2 trillion", sub: "November 2018" },
      { label: "Korean Air stake held",       value: "28.9%",             sub: "primary asset" },
      { label: "Number of affiliates",        value: "15",                sub: "as of 2018" },
      { label: "Year established",            value: "2013",              sub: "spin-off from Hanjin Group" },
    ],
    financials: [
      { year: "FY2016", revenue: 15200, cogs: 11800, grossProfit: 3400, sga: 1200, operatingIncome: 2200, ebitda: 3100 },
      { year: "FY2017", revenue: 16800, cogs: 13000, grossProfit: 3800, sga: 1300, operatingIncome: 2500, ebitda: 3500 },
      { year: "FY2018", revenue: 17500, cogs: 13600, grossProfit: 3900, sga: 1400, operatingIncome: 2500, ebitda: 3600 },
      { year: "FY2019", revenue: 16200, cogs: 12800, grossProfit: 3400, sga: 1350, operatingIncome: 2050, ebitda: 3100 },
    ],
    financialsNote: "Unit: KRW 100M | K-IFRS consolidated | Source: Hanjin KAL annual reports",
    financialsCurrency: "₩",
    financialsUnit: "100M KRW",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "Hanjin KAL's governance problems went far beyond ordinary management inefficiency. The Cho family's repeated high-profile misconduct — the 'nut rage' incident (2014) and the 'water rage' incident (2018) — inflicted direct damage on the company's brand and share price. As public outrage grew, KCGI's argument that governance reform was inseparable from valuation improvement resonated broadly with institutional investors and retail shareholders alike.",
    shareholders: [
      {
        id: "cho",
        label: "Cho Won-tae and family",
        sub: "Second-generation heir, controlling shareholder",
        stake: "28.1%",
        stakePct: 28.1,
        type: "controlling",
        alignment: "pro",
      },
      {
        id: "delta",
        label: "Delta Air Lines",
        sub: "White knight, strategic investor",
        stake: "14.9%",
        stakePct: 14.9,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "kcgi",
        label: "KCGI",
        sub: "Gang Sung-boo activist fund",
        stake: "15.0%",
        stakePct: 15.0,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "bando",
        label: "Bando Construction + Cho Hyun-ah",
        sub: "KCGI coalition; Cho Hyun-ah is eldest daughter",
        stake: "10.6%",
        stakePct: 10.6,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "nps",
        label: "National Pension Service (NPS)",
        sub: "Stewardship Code actor",
        stake: "5.2%",
        stakePct: 5.2,
        type: "government",
        alignment: "neutral",
      },
      {
        id: "others",
        label: "Other shareholders",
        sub: "Foreign institutions, funds, retail",
        stake: "26.2%",
        stakePct: 26.2,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 8,
      independent: 4,
      affiliated: 4,
      note: "The existing board was dominated by owner-aligned figures. KCGI demanded independent directors hold an outright majority.",
    },
    issues: [
      {
        title: "Owner Misconduct Risk",
        description: "The 'nut rage' incident (2014) and 'water rage' incident (2018) caused direct, measurable damage to Korean Air's brand and share price. Recurring owner misconduct was identified as the primary source of the persistent valuation discount.",
        severity: "critical",
      },
      {
        title: "Complex Circular Shareholding",
        description: "Hanjin KAL → Korean Air → Hanjin Shipping circular ownership structures prioritized the family's control over minority shareholder interests. KCGI demanded full dismantlement of this web.",
        severity: "critical",
      },
      {
        title: "Intra-group Related-Party Transactions",
        description: "Alleged improper dealings with Jeongseok Enterprise and other family-controlled affiliates. KCGI argued these captive transactions diverted value away from outside shareholders.",
        severity: "high",
      },
      {
        title: "Absence of Board Independence",
        description: "Outside directors failed to function as a genuine check on management. The board's inability to control owner conduct was seen as a structural failure of oversight.",
        severity: "high",
      },
      {
        title: "Owner Compensation vs. Shareholder Returns",
        description: "High executive compensation and perquisites for the controlling family relative to dividends paid to ordinary shareholders — a direct misalignment of interests.",
        severity: "medium",
      },
      {
        title: "Opaque Succession",
        description: "The sudden death of Chairman Cho Yang-ho (April 2019) surfaced a sibling rivalry for control between Cho Won-tae and Cho Hyun-ah, adding significant governance instability.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "Remove the Cho family (including Cho Won-tae) from executive management",
        result: "lost",
        note: "Cho Won-tae's side won the March 2020 AGM. Cho Won-tae remained as chairman.",
      },
      {
        demand: "Secure an independent director majority on the board",
        result: "partial",
        note: "Some board composition changes were made; a full independent majority was not achieved.",
      },
      {
        demand: "Prohibit intra-group related-party transactions",
        result: "partial",
        note: "Certain transactions were unwound and disclosure standards were tightened.",
      },
      {
        demand: "Enhance dividend policy",
        result: "partial",
        note: "Hanjin KAL increased its dividend modestly in the years following the campaign.",
      },
      {
        demand: "Implement anti-misconduct governance mechanisms",
        result: "won",
        note: "Hanjin Group strengthened internal controls and revised HR and audit procedures.",
      },
    ],
    stockImpact: {
      preCampaign: "₩20,000",
      peakDuringCampaign: "₩38,000",
      postCampaign: "₩70,000+",
      note: "After KCGI's initial disclosure (November 2018), the share price roughly doubled as the governance discount began to narrow. COVID-19 then pushed the stock as low as ₩13,000. The announcement of the Korean Air–Asiana merger (November 2020) drove a recovery above ₩70,000. KCGI is estimated to have exited with approximately +80% return on invested capital.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "The campaign resolved into a four-way ownership battle: ① Cho Won-tae family (~28%), ② Delta Air Lines (14.9%), ③ KCGI (~15%), ④ Bando Construction + Cho Hyun-ah (~10%). Delta's entry proved decisive — the long-standing Korean Air codeshare and joint venture partnership gave Delta strong strategic incentives to back Cho Won-tae, neutralizing KCGI's stake advantage and effectively deciding the March 2020 AGM.",
    preOwnership: {
      nodes: [
        { id: "cho_family", label: "Cho Yang-ho family", sub: "~28% controlling stake, founding family", type: "acquirer" },
        { id: "hanjin_kal", label: "Hanjin KAL",         sub: "Pure holding company, Hanjin Group",        type: "target" },
        { id: "korean_air", label: "Korean Air",          sub: "Hanjin KAL holds 28.9%",                   type: "entity" },
        { id: "kcgi_fund",  label: "KCGI",                sub: "10.6% activist stake",                     type: "fund" },
      ],
      edges: [
        { from: "cho_family", to: "hanjin_kal", label: "~28% control" },
        { from: "hanjin_kal", to: "korean_air", label: "28.9%" },
        { from: "kcgi_fund",  to: "hanjin_kal", label: "10.6% (activist)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "cho_wt",     label: "Cho Won-tae",   sub: "Succession secured, ~28%",           type: "acquirer" },
        { id: "delta",      label: "Delta Air Lines", sub: "14.9% white knight",                type: "entity" },
        { id: "hanjin_kal", label: "Hanjin KAL",     sub: "Holding structure maintained",       type: "target" },
        { id: "kcgi_exit",  label: "KCGI",           sub: "Divested position, ~+80% est. gain", type: "fund" },
      ],
      edges: [
        { from: "cho_wt",    to: "hanjin_kal", label: "Control retained" },
        { from: "delta",     to: "hanjin_kal", label: "14.9% (friendly)" },
        { from: "kcgi_exit", to: "hanjin_kal", label: "Fully divested" },
      ],
    },
    keyTerms: [
      { label: "Campaign type",          value: "Hostile shareholder activism" },
      { label: "KCGI peak stake",        value: "~15.0%",                          accent: true },
      { label: "Delta Air Lines stake",  value: "14.9% (white knight)",             accent: true },
      { label: "AGM outcome",            value: "Cho Won-tae prevails (Mar 2020)" },
      { label: "KCGI estimated return",  value: "~+80% vs. entry price" },
      { label: "Campaign duration",      value: "Nov 2018 – Jun 2021" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Both sides deployed leading Korean financial and legal advisors. KCGI focused on independent valuation and legal pressure; Hanjin KAL focused on securing friendly stakes and mounting a legal defense.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KCGI (activist side)",
        initials: "KCGI",
        bg: "bg-violet-700",
        advisors: [
          {
            firm: "Samil PwC",
            role: "Financial advisor",
            roleType: "financial",
            note: "Independent valuation of Hanjin KAL and Korean Air. Quantified the holding company discount and provided the financial basis for KCGI's shareholder return demands.",
          },
          {
            firm: "Sejong Law Firm",
            role: "Legal advisor",
            roleType: "legal",
            note: "Drafted shareholder proposals, developed proxy contest strategy, and handled all litigation related to the governance dispute.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Hanjin KAL / Cho Won-tae (defensive side)",
        initials: "HJK",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Samsung Securities",
            role: "Financial advisor",
            roleType: "financial",
            note: "Structured the Delta Air Lines friendly stake acquisition. Provided corporate valuation and the financial narrative for the defense.",
          },
          {
            firm: "Kim & Chang",
            role: "Legal advisor",
            roleType: "legal",
            note: "Responded to KCGI's shareholder proposals, led board defense strategy, and managed all regulatory filings and disclosures.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on publicly available sources and may not reflect all engagements.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "KCGI's financial thesis was the persistent holding company discount on Hanjin KAL shares relative to the aggregate value of its underlying assets — most importantly its 28.9% stake in Korean Air. KCGI argued that eliminating the owner-risk premium embedded in the share price would unlock this discount. The post-campaign trajectory vindicated the thesis: the stock rose ~90% from KCGI's entry price before COVID-19 temporarily crushed it, then surged above ₩70,000 following the Korean Air–Asiana merger announcement.",
    rows: [
      { item: "Hanjin KAL share price (KCGI entry)",         val: "₩20,000",        note: "November 2018" },
      { item: "Hanjin KAL share price (campaign peak)",      val: "₩38,000",        note: "2019–2020 proxy contest high" },
      { item: "Hanjin KAL share price (post-merger announcement)", val: "₩70,000+", note: "After Nov 2020 Korean Air–Asiana deal", accent: true },
      { item: "KCGI estimated entry price",                  val: "₩20,000–25,000", note: "Nov 2018 – early 2019" },
      { item: "KCGI estimated exit price",                   val: "₩36,000–42,000", note: "H1 2021 estimate" },
      { item: "KCGI estimated return on invested capital",   val: "~+80%",           note: "Based on midpoint entry/exit prices", accent: true },
    ],
    disclaimer: "Note: KCGI entry/exit prices and return estimates are derived from public disclosures and press reports and should be treated as approximations.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why KCGI targeted Hanjin KAL",
      initials: "KCGI",
      bg: "bg-violet-700",
      points: [
        "Owner misconduct had created a persistent valuation discount. Removing the owner-risk premium offered a clear path to price re-rating.",
        "Chronic holding company discount relative to Korean Air's intrinsic value provided a well-defined margin of safety and upside case.",
        "Rising ESG sensitivity among institutional investors — including the NPS under the newly adopted Stewardship Code — expanded the potential coalition for activism.",
        "High-profile misconduct incidents ('nut rage', 'water rage') had generated unprecedented public outrage, giving KCGI a powerful social narrative to build upon.",
      ],
    },
    seller: {
      title: "How Hanjin KAL / Cho Won-tae defended",
      initials: "HJK",
      bg: "bg-blue-700",
      points: [
        "Secured Delta Air Lines as a 14.9% white knight, neutralizing KCGI's stake advantage and providing decisive support at the March 2020 AGM.",
        "Framed the Korean Air–Asiana merger as a strategic breakthrough — positioning itself as the architect of national aviation consolidation, not merely a governance target.",
        "Accepted a subset of KCGI's demands (anti-misconduct controls, ESG improvements) to blunt the campaign's moral edge without ceding control.",
        "Partially unwound captive related-party transactions to undercut specific governance criticism.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "KCGI won economically but fell short of its primary structural objective — removing the Cho family from executive control. Cho Won-tae retained the chairmanship with Delta's backing and then went on to orchestrate the Korean Air–Asiana merger, one of the most consequential deals in Korean aviation history. Yet the campaign left a lasting imprint on Korean corporate governance: the NPS's unprecedented vote against Cho Yang-ho became a reference point for institutional investor activism, and KCGI's combination of financial and social argumentation set a template for future campaigns.",
    overallVerdict: "KCGI economic victory; owner management control preserved",
    positives: [
      "KCGI realized an estimated ~+80% return on invested capital — a clear financial success.",
      "The NPS established the first-ever precedent of a Korean national pension fund stripping a chaebol patriarch of a board seat.",
      "Hanjin Group strengthened internal governance controls and ESG-related procedures following the campaign.",
      "The Korean Air–Asiana merger, partly enabled by Cho Won-tae's reinforced control, restructured Korea's aviation industry landscape.",
    ],
    risks: [
      "Cho Won-tae retained full executive control — KCGI's core demand of owner removal was not achieved.",
      "The Korean Air–Asiana merger raises ongoing competition concerns, with potential monopoly issues in domestic and certain international routes.",
      "COVID-19 pushed Hanjin KAL's share price to ₩13,000 mid-campaign, exposing the timing risk inherent in the investment.",
      "The KCGI/Bando/Cho Hyun-ah coalition's conflicting interests (KCGI wanted all owners out; Cho Hyun-ah wanted to replace her brother) weakened its cohesion and ultimately its effectiveness.",
    ],
    editorNote:
      "The Hanjin KAL–KCGI campaign is a rare case in which social outrage and capital markets activism reinforced each other. Owner misconduct — 'nut rage' and 'water rage' — provided KCGI with a moral narrative that purely financial activism cannot easily generate. The NPS's historic vote against Cho Yang-ho showed that Korea's Stewardship Code had real teeth. KCGI lost the proxy contest but won the investment. And Cho Won-tae, having survived the campaign, immediately used his strengthened position to reshape the entire Korean aviation industry. A campaign where every major actor can claim some version of victory.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "KCGI",
    acquirerBg: "bg-violet-700",
    targetInitials: "HJK",
    targetBg: "bg-blue-700",
    acquirerName: "KCGI (Gang Sung-boo Fund)",
    targetName: "Hanjin KAL",
    dealTitle: "KCGI's Activism Campaign Against Hanjin KAL",
    dealSize: "Hanjin KAL mkt cap ~KRW 1.2 trillion",
    dealSizeUSD: "approx. USD 1.0B (mkt cap)",
    evEbitda: "N/A (activism)",
    closeDate: "Jun 2021",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "KCGI stake acquisition disclosures, Financial Supervisory Service DART (2018–2021)" },
    { id: 2, text: "KCGI shareholder letters and press releases (2018–2021)" },
    { id: 3, text: "National Pension Service proxy voting disclosure, Cho Yang-ho board reappointment vote (March 2019)" },
    { id: 4, text: "Delta Air Lines 14.9% Hanjin KAL stake acquisition filing (February 2020)" },
    { id: 5, text: "Hanjin KAL Annual General Meeting results disclosure, DART (March 2020)" },
    { id: 6, text: "Korean Air – Asiana Airlines merger announcement, Hanjin KAL IR materials (November 2020)" },
    { id: 7, text: "Korean press coverage: Chosun Ilbo, Korea Economic Daily, Maeil Business News (2018–2021)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "KCGI vs. Hanjin KAL — Korea's First Chaebol Accountability Campaign",
    description:
      "Full analysis of KCGI's activism campaign against Hanjin KAL: NPS strips Cho Yang-ho's board seat, Delta Air Lines white knight, and the three-way battle for control of Korean Air's holding company.",
    keywords: [
      "KCGI Hanjin KAL activism",
      "Korean Air governance",
      "chaebol activism Korea",
      "Cho Yang-ho board removal",
      "Delta Airlines white knight Korea",
      "NPS shareholder activism",
      "Hanjin nut rage governance",
      "Korean corporate governance reform",
      "holding company discount Korea",
      "stewardship code Korea",
    ],
  },

  // ── Key Concepts ─────────────────────────────────────────────
  concepts: [
    {
      term: "Shareholder Activism",
      description: "An investment strategy in which a fund accumulates a meaningful stake and then pressures the board or management to improve governance, sell assets, or return capital — with the aim of closing a valuation gap.",
    },
    {
      term: "White Knight",
      description: "A friendly third-party investor who acquires a stake to support incumbent management against a hostile acquirer or activist. Delta Air Lines played this role for Cho Won-tae.",
    },
    {
      term: "Holding Company Discount",
      description: "The phenomenon where a holding company's market capitalization trades below the aggregate market value of its portfolio assets. KCGI's investment thesis was built on closing Hanjin KAL's persistent discount.",
    },
    {
      term: "Stewardship Code",
      description: "A set of principles requiring institutional investors to exercise their voting rights responsibly. Korea adopted its Stewardship Code in 2016; the NPS's vote against Cho Yang-ho was its most consequential application to date.",
    },
    {
      term: "Owner Risk (Oeuner Risk)",
      description: "The risk that a controlling shareholder's personal conduct will damage the company's reputation, brand, or share price. Hanjin KAL's nut-rage and water-rage incidents made owner risk the central narrative of KCGI's campaign.",
    },
    {
      term: "Three-Way Proxy Contest",
      description: "A governance dispute in which two separate activist blocs simultaneously challenge incumbent management for board control. The Hanjin KAL situation — Cho Won-tae vs. KCGI vs. Bando/Cho Hyun-ah — is the defining Korean example.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did KCGI target Hanjin KAL?",
      a: "KCGI combined two mutually reinforcing arguments. Financially, Hanjin KAL's share price was chronically depressed relative to the underlying value of its Korean Air stake — a textbook holding company discount. Socially, the Cho family's repeated high-profile misconduct (nut rage, water rage) had created a credible narrative that owner risk was the primary source of that discount. The combination made the case that governance reform was the most direct path to share price re-rating.",
    },
    {
      q: "Why was the NPS's vote against Cho Yang-ho historically significant?",
      a: "When the National Pension Service voted against Chairman Cho Yang-ho's board reappointment at Korean Air's March 2019 AGM, it marked the first time in Korean history that the national pension fund had directly used its voting power to strip a chaebol patriarch of a board seat. It demonstrated that Korea's 2016 Stewardship Code had genuine enforcement teeth and fundamentally changed the calculus for Korean institutional investors considering how to vote on controlling-family directors.",
    },
    {
      q: "Why did Delta Air Lines buy into Hanjin KAL?",
      a: "Delta and Korean Air had maintained a deep codeshare and trans-Pacific joint venture partnership for years, giving Delta a strong strategic interest in the stability of Korean Air's ownership and management. If KCGI succeeded in replacing the Cho family, the continuity of that partnership would be uncertain. Acquiring 14.9% of Hanjin KAL gave Delta a formal stake in the outcome while protecting a commercially critical relationship.",
    },
    {
      q: "Did KCGI make money?",
      a: "Yes. KCGI is estimated to have realized approximately +80% return on invested capital when it divested its stake in 2021. It entered at roughly ₩20,000–25,000 per share in late 2018 and exited at an estimated ₩36,000–42,000 in the first half of 2021. The path was turbulent — COVID-19 pushed the share price as low as ₩13,000 — but the Korean Air–Asiana merger announcement in November 2020 drove a strong recovery that allowed KCGI to exit profitably.",
    },
    {
      q: "Why did Cho Hyun-ah align with KCGI?",
      a: "Cho Hyun-ah, the eldest daughter and the protagonist of the original 'nut rage' incident, had been effectively removed from Hanjin Group management. Aligning with KCGI and Bando Construction against her brother Cho Won-tae was her path back to influence. The coalition's stated purpose was governance reform, but at its core it was a sibling rivalry for family control. This misalignment of objectives — KCGI wanted all owner-family members removed, Cho Hyun-ah wanted to replace her brother — ultimately undermined the coalition's coherence.",
    },
    {
      q: "What was the campaign's impact on Korea's aviation industry?",
      a: "The most significant downstream impact was the Korean Air–Asiana Airlines merger. Cho Won-tae, having secured his position at the March 2020 AGM, announced the acquisition of Asiana just eight months later. The merger — still subject to ongoing integration — created a single dominant Korean flag carrier and restructured the entire domestic aviation market. Somewhat ironically, KCGI's campaign helped sharpen Cho Won-tae's hold on power, which he then used to execute one of the most consequential deals in Korean aviation history.",
    },
  ],
};

export default deal;
