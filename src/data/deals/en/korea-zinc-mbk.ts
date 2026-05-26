import type { DealData } from "@/lib/deal-data";

const koreaZincMbk: DealData = {
  // ── Meta ──────────────────────────────────────────────────────
  slug: "korea-zinc-mbk",
  title: "Korea Zinc Control Battle — MBK Partners & Young Poong vs. Chairman Choi",
  subtitle:
    "Asia's Largest Hostile Bid War: Dueling Tender Offers, Court Battles, and a 217% Stock Surge",
  category: "control",
  industry: "Non-ferrous Metals / Materials",
  country: "KR",
  announcedAt: "2024-09-13",
  closedAt: "2025-03-28",
  announcedDisplay: "Sep 13, 2024",
  closedDisplay: "Mar 28, 2025",
  readingMinutes: 14,
  tags: [
    "tender-offer",
    "control-contest",
    "hostile-takeover",
    "treasury-buyback",
    "private-equity",
    "non-ferrous-metals",
    "korea",
  ],
  excerpt:
    "In 2024, MBK Partners and Young Poong launched Korea's largest-ever hostile tender offer battle for Korea Zinc. The stock tripled from ₩515,000 to ₩1,630,000 in six weeks as competing bids collided — a blueprint for PE-driven control contests in Asia.",

  // ── Entity Icons ──────────────────────────────────────────────
  acquirer: { initials: "MBK", bg: "bg-slate-800", label: "MBK Partners · Young Poong" },
  target: { initials: "KZ", bg: "bg-amber-600", label: "Korea Zinc Co., Ltd." },

  // ── Background ────────────────────────────────────────────────
  background: [
    "Korea Zinc was co-founded in 1949 by Choi Ki-ho and Jang Byeong-hee as a joint venture between two families — the Choi family (managing Korea Zinc operations) and the Jang family (controlling Young Poong Group). For over 70 years, both families shared board representation and co-governed the company, creating one of the most unusual dual-family governance structures in Korean corporate history.",
    "The arrangement began to fracture after Yun-bum Choi became chairman in 2022. Chairman Choi launched an ambitious strategic pivot — the 'Troika Drive' initiative — channeling Korea Zinc's substantial cash generation from zinc smelting into large-scale investments in EV battery materials, green hydrogen, and solar components. This pivot required significant capital expenditure and reduced near-term returns.",
    "Young Poong Group (controlled by the Jang family with 25.42%), as the largest shareholder, grew increasingly frustrated. Despite holding the largest single stake in Korea Zinc, Young Poong had no effective influence over the strategic direction being set by Chairman Choi's management team. Years of accumulated governance tension finally boiled over in 2024.",
    "MBK Partners — the largest private equity fund in North Asia — had been watching Korea Zinc's asset quality for years. With a track record of large Korean buyouts (Homeplus, ING Life Korea, C&M Cable TV), MBK identified Korea Zinc's world-leading position in zinc and lead smelting, its strong EBITDA generation, and its undervalued shares as a compelling target for a leveraged acquisition. When Young Poong approached MBK as a strategic ally, the conditions for Korea's most dramatic M&A battle were set.",
  ],

  // ── Deal Summary ──────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~₩2.4 trillion (MBK+Young Poong tender offer)",
    acquirerName: "MBK Partners + Young Poong Group",
    targetName: "Korea Zinc Co., Ltd.",
    announcedDisplay: "Sep 13, 2024",
    closedDisplay: "Mar 28, 2025",
    country: "South Korea",
  },

  // ── Executive Summary ─────────────────────────────────────────
  executiveSummary: [
    "MBK Partners and Young Poong launched a hostile tender offer at ₩660,000/share (28% premium) for Korea Zinc on Sep 13, 2024, targeting a 14.61% additional stake to gain board majority alongside Young Poong's existing 25.42%.",
    "Korea Zinc's board retaliated nine days later with a counter-buyback at ₩830,000/share — 26% above MBK's offer — triggering a simultaneous competing bid that drove the stock from ₩515,000 to ₩1,630,000 in six weeks.",
    "MBK successfully acquired 14.17% (combined coalition: ~40.97%) but failed to translate its stake into board control. All 4 MBK-backed director nominees were defeated at the January 2025 Extraordinary General Meeting.",
    "The National Pension Service (NPS, 7.83%) partially supported the incumbent board, providing the decisive margin for Korea Zinc management's victory.",
    "Court rulings in October 2024 (injunction blocking treasury share cancellation) and March 2025 (dismissal of MBK's final injunction) shaped the legal contours of the dispute.",
    "The case established Korea's first precedent for defensive tender offers (company buyback as M&A defense) and triggered regulatory debate over PE ownership of strategic national assets.",
  ],

  // ── Industry Overview ─────────────────────────────────────────
  industryOverview: {
    body: "Korea Zinc operates in the global non-ferrous metals smelting industry, specifically zinc and lead refining. Zinc is the fourth most-used metal globally, critical for galvanizing steel (construction, automotive), die casting, and battery applications. The smelting industry is highly capital-intensive, requiring large-scale roasting/sintering furnaces and complex hydrometallurgical processes.",
    metrics: [
      { label: "Global Zinc Production", value: "~13 million MT/year" },
      { label: "Korea Zinc Market Share", value: "~10% global zinc smelting" },
      { label: "Key End Markets", value: "Steel galvanizing (60%), EV batteries (growing)" },
      { label: "Zinc Price Range (2024)", value: "$2,400–$3,100/MT" },
    ],
    players: [
      { name: "Korea Zinc", role: "World's largest single zinc smelter" },
      { name: "Nyrstar (Belgium)", role: "2nd largest global zinc smelter" },
      { name: "Boliden (Sweden)", role: "Major European zinc producer" },
      { name: "Glencore (Switzerland)", role: "Largest zinc miner globally" },
    ],
  },

  // ── Company Overview ──────────────────────────────────────────
  companyOverview: {
    targetName: "Korea Zinc Co., Ltd.",
    body: "Korea Zinc is the world's largest single-site zinc smelter, operating the Onsan smelter in South Korea. The company refines approximately 1.1 million metric tons of zinc annually, representing roughly 10% of global production. Beyond zinc and lead, Korea Zinc has expanded into silver (a major byproduct with substantial revenue contribution), indium, and bismuth. The company has been aggressively pivoting toward new materials for EV batteries and clean energy under the 'Troika Drive' strategy.",
    metrics: [
      { label: "Zinc Capacity", value: "~1.1 million MT/year" },
      { label: "Silver Production", value: "~3,000 MT/year (top global)" },
      { label: "Annual EBITDA", value: "~₩2 trillion (FY2023 est.)" },
      { label: "Net Cash Position", value: "Strong (pre-contest)" },
    ],
    financials: [
      {
        year: "2021",
        revenue: 7820000,
        cogs: 6240000,
        grossProfit: 1580000,
        sga: 380000,
        operatingIncome: 1200000,
        ebitda: 1680000,
      },
      {
        year: "2022",
        revenue: 9450000,
        cogs: 7580000,
        grossProfit: 1870000,
        sga: 410000,
        operatingIncome: 1460000,
        ebitda: 1990000,
      },
      {
        year: "2023",
        revenue: 8930000,
        cogs: 7150000,
        grossProfit: 1780000,
        sga: 430000,
        operatingIncome: 1350000,
        ebitda: 1890000,
      },
    ],
    financialsCurrency: "KRW",
    financialsUnit: "(millions)",
    financialsNote:
      "Estimates based on public disclosures; smelting revenues include zinc, lead, silver, and byproducts.",
  },

  // ── Control Battle Overview ────────────────────────────────────
  controlBattleOverview: {
    body: "When MBK Partners and Young Poong launched a hostile tender offer at ₩660,000/share, Korea Zinc's board fired back nine days later with a counter-buyback at ₩830,000 — 26% higher. Two competing public bids targeting the same shares simultaneously drove the stock from ₩515,000 to ₩1,630,000 in six weeks. The resolution came not through the capital markets but in a courtroom and a shareholder meeting.",
    catalyst:
      "Chairman Yun-bum Choi's ambitious 'Troika Drive' strategy — heavy investment in EV materials, solar, and hydrogen — conflicted with Young Poong's preference for dividend extraction from Korea Zinc's stable cash flows. After years of governance friction, Young Poong partnered with MBK Partners (North Asia's largest PE fund) to launch a surprise hostile bid in September 2024.",
    attackerLabel: "MBK Partners + Young Poong",
    defenderLabel: "Chairman Choi Yun-bum (Korea Zinc Board)",
    battleMoves: [
      {
        date: "2024-09-13",
        actor: "MBK Partners + Young Poong",
        side: "attack",
        move: "Hostile Tender Offer Launched — ₩660,000/share",
        detail:
          "Without board consent, MBK and Young Poong offered ₩660,000/share (+28% to prior close) directly to Korea Zinc shareholders. Goal: acquire 14.61% more on top of Young Poong's existing 25.42% to seize board majority.",
        weapon: "Hostile Tender Offer (TOB)",
        financialImpact: "Korea Zinc stock +18% on announcement day",
      },
      {
        date: "2024-09-23",
        actor: "Korea Zinc Board",
        side: "defense",
        move: "Defensive Counter-Buyback — ₩830,000/share",
        detail:
          "Korea Zinc's board announced a company-level buyback at ₩830,000 — 26% above MBK's offer — signaling shareholders to decline MBK's bid. Treasury shares acquired to be cancelled, diluting MBK+Young Poong's combined stake.",
        weapon: "Defensive Treasury Buyback",
        financialImpact: "Stock surpassed ₩830,000, exceeding both offer prices",
      },
      {
        date: "2024-10-04",
        actor: "Market",
        side: "neutral",
        move: "All-Time High ₩1,630,000 — 2.5× Either Bid Price",
        detail:
          "Competing bids combined with speculative demand and short-covering pushed the stock to ₩1,630,000 intraday. Both tender offers (₩660K and ₩830K) became uneconomic relative to the market price.",
        financialImpact: "₩515,000 → ₩1,630,000 (+217% in 6 weeks)",
      },
      {
        date: "2024-10-14",
        actor: "MBK Partners + Young Poong",
        side: "attack",
        move: "Tender Offer Closes — 14.17% Stake Acquired",
        detail:
          "MBK's tender offer closed, acquiring 14.17% (vs. 14.61% target). Combined with Young Poong's 25.42%, the coalition held ~40.97%. But control of the board required an EGM vote.",
        financialImpact: "~₩900bn acquisition cost / ~40.97% combined stake",
      },
      {
        date: "2024-10-18",
        actor: "Seoul Court",
        side: "neutral",
        move: "Injunction: Korea Zinc Blocked from Cancelling Treasury Shares",
        detail:
          "Court granted MBK's injunction preventing Korea Zinc from cancelling the treasury shares it had repurchased — halting the dilution strategy mid-execution.",
        weapon: "Court Injunction",
      },
      {
        date: "2025-01-23",
        actor: "Korea Zinc Board",
        side: "defense",
        move: "EGM Victory — All MBK Director Nominees Rejected",
        detail:
          "At the Extraordinary General Meeting, all 4 MBK-backed director candidates were defeated. Incumbent directors retained. NPS (7.83%) partially supported the incumbent board — the decisive swing vote.",
        weapon: "EGM Proxy Defense",
        financialImpact: "Control confirmed — market priced in resolution",
      },
      {
        date: "2025-03-28",
        actor: "Seoul Court",
        side: "neutral",
        move: "Final Ruling: MBK Injunction Dismissed — Incumbent Management Confirmed",
        detail:
          "Court dismissed MBK's final injunction bid. Chairman Choi and the incumbent management team were legally confirmed in control, ending the ~6-month battle.",
      },
    ],
    financialWeapons: [
      {
        name: "Hostile Tender Offer (TOB)",
        side: "attack",
        usedBy: "MBK Partners + Young Poong",
        description:
          "Direct offer to shareholders at ₩660,000 (+28% premium), bypassing the board. Acquired 14.17% stake successfully but failed to translate into board control.",
        effectiveness: "effective",
      },
      {
        name: "LBO Capital Structure (Planned)",
        side: "attack",
        usedBy: "MBK Partners",
        description:
          "PE playbook: use Korea Zinc's ~₩2tr+ annual EBITDA as collateral for leveraged financing, then extract returns via dividends and asset sales. Never executed due to failed control bid.",
        effectiveness: "blocked",
      },
      {
        name: "EGM Proxy Campaign",
        side: "attack",
        usedBy: "MBK Partners + Young Poong",
        description:
          "Attempted board replacement via shareholder vote with 40.97% stake base. NPS's partial support for incumbents was enough to defeat all 4 MBK director nominees.",
        effectiveness: "blocked",
      },
      {
        name: "Defensive Treasury Buyback",
        side: "defense",
        usedBy: "Korea Zinc Board",
        description:
          "Counter-offer at ₩830,000 — 26% above MBK's price — to attract shareholder tender away from MBK. Repositioned share price above both bids. Treasury share cancellation was subsequently blocked by court.",
        effectiveness: "effective",
      },
      {
        name: "Court Injunction Defense",
        side: "defense",
        usedBy: "Korea Zinc Legal Team",
        description:
          "Filed injunctions to block MBK's actions — but the court injunction cut both ways: it also blocked Korea Zinc from cancelling its own treasury shares, limiting the dilution strategy.",
        effectiveness: "blocked",
      },
      {
        name: "NPS & Proxy Mobilization",
        side: "defense",
        usedBy: "Korea Zinc Management",
        description:
          "Secured partial support from the National Pension Service (7.83%) and rallied employee shareholders at the EGM. The margin of victory was ~5pp — NPS support was the decisive factor.",
        effectiveness: "decisive",
      },
    ],
    turningPoint: {
      date: "2025-01-23",
      event: "EGM — NPS votes with incumbents, all MBK nominees defeated",
      detail:
        "With ~40.97% vs. ~46.11% (Choi faction + ESOP + treasury shares), the EGM was the closest governance vote in Korean M&A history. NPS's (7.83%) decision to support the incumbent directors provided the margin. Six months of financial warfare — dueling bids, court injunctions, regulatory investigations — came down to a single shareholder vote.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Korea Zinc / Chairman Choi Yun-bum",
      margin: "~5pp — Choi faction 46.11% vs. MBK+Young Poong 40.97%",
      note: "MBK Partners successfully acquired 14.17% and remains one of the largest shareholders, creating a permanent governance overhang. Korea Zinc's defensive treasury buyback — the first of its kind in Korean M&A — set a new legal and regulatory precedent.",
    },
    priceImpact: {
      preContest: "₩515,000 (Sep 12, 2024)",
      peak: "₩1,630,000 (Oct 4, 2024)",
      postContest: "₩640,000 (Mar 2025)",
      note: "Two simultaneous public bids (₩660K and ₩830K) created a textbook bid premium squeeze, driving the stock to 2.5× either offer price within weeks. Once the EGM resolved control uncertainty in January 2025, the governance premium evaporated rapidly.",
    },
  },

  // ── Deal Structure ────────────────────────────────────────────
  dealStructure: {
    body: "The battle involved two simultaneous public bids. MBK+Young Poong offered ₩660,000/share for 14.61% (total ~₩2.4tr). Korea Zinc countered with ₩830,000/share buyback for ~20%. MBK acquired 14.17%; Korea Zinc's treasury cancellation was blocked by court. Final resolution: EGM Jan 2025 + court ruling Mar 2025.",
    preOwnership: {
      nodes: [
        { id: "yp_pre", label: "Young Poong Group", sub: "Jang family 25.42%", type: "acquirer" },
        { id: "choi_pre", label: "Chairman Choi", sub: "Management 11.73%", type: "entity" },
        { id: "kz", label: "Korea Zinc", sub: "World #1 zinc smelter", type: "target" },
        { id: "nps_pre", label: "NPS", sub: "8.68% swing vote", type: "fund" },
      ],
      edges: [
        { from: "yp_pre", to: "kz", label: "25.42% (largest holder)" },
        { from: "choi_pre", to: "kz", label: "11.73% (management)" },
        { from: "nps_pre", to: "kz", label: "8.68%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "yp_mbk", label: "Young Poong + MBK", sub: "~40.97% combined", type: "acquirer" },
        {
          id: "choi_post",
          label: "Chairman Choi + ESOP",
          sub: "~46.11% incl. treasury",
          type: "entity",
        },
        { id: "kz_post", label: "Korea Zinc", sub: "Management retained", type: "target" },
        { id: "nps_post", label: "NPS", sub: "~7.83%", type: "fund" },
      ],
      edges: [
        { from: "yp_mbk", to: "kz_post", label: "40.97% (no board seats)" },
        { from: "choi_post", to: "kz_post", label: "46.11% (in control)" },
        { from: "nps_post", to: "kz_post", label: "7.83%" },
      ],
    },
    keyTerms: [
      { label: "Total Tender Offer Size", value: "~₩2.4 trillion" },
      { label: "MBK Offer Price", value: "₩660,000/share", accent: true },
      { label: "Korea Zinc Buyback Price", value: "₩830,000/share", accent: true },
      { label: "Stock Peak", value: "₩1,630,000" },
      { label: "Stock Gain (6 weeks)", value: "+217%" },
      { label: "MBK Final Stake", value: "14.17%" },
    ],
  },

  // ── Advisors ──────────────────────────────────────────────────
  advisors: {
    body: "Top-tier Korean and global advisors were deployed on both sides of Korea's most complex M&A battle.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "MBK Partners + Young Poong",
        initials: "MBK",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "JP Morgan",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Lead financial advisor to MBK on tender offer structuring",
          },
          {
            firm: "Citigroup Global Markets",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Co-advisor on tender offer execution",
          },
          {
            firm: "Kim & Chang",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Lead Korean law firm for MBK on regulatory and M&A matters",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Korea Zinc (Defense)",
        initials: "KZ",
        bg: "bg-amber-600",
        advisors: [
          {
            firm: "Samsung Securities",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Lead financial advisor on defensive buyback structuring",
          },
          {
            firm: "Credit Suisse",
            role: "Financial Advisor",
            roleType: "financial",
            note: "International advisor on defense strategy",
          },
          {
            firm: "Bae, Kim & Lee LLC",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Lead law firm for Korea Zinc on defense and court filings",
          },
        ],
      },
    ],
  },

  // ── Valuation ─────────────────────────────────────────────────
  valuation: {
    body: "Korea Zinc's valuation was disputed throughout the contest, with MBK arguing undervaluation and Korea Zinc defending its strategic transformation premium.",
    rows: [
      {
        item: "MBK Tender Offer Price",
        val: "₩660,000/share",
        note: "+28% to pre-announcement price",
        accent: true,
      },
      {
        item: "Korea Zinc Buyback Price",
        val: "₩830,000/share",
        note: "+61% to pre-announcement price",
        accent: true,
      },
      {
        item: "Stock Peak (Oct 4, 2024)",
        val: "₩1,630,000/share",
        note: "+217% from pre-announcement",
      },
      {
        item: "Implied EV (MBK offer)",
        val: "~₩25 trillion",
        note: "Based on offer price × total shares",
      },
      {
        item: "EV/EBITDA at MBK offer",
        val: "~12.5×",
        note: "vs. global zinc smelter peers ~8–10×",
      },
      {
        item: "Post-contest Market Cap",
        val: "~₩14 trillion",
        note: "Based on ₩640,000 post-resolution price",
      },
    ],
  },

  // ── Rationale ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "MBK Partners + Young Poong — Why Attack",
      initials: "MBK",
      bg: "bg-slate-800",
      points: [
        "Korea Zinc generates ~₩2 trillion annual EBITDA from world-leading zinc smelting — a PE-optimal cash flow profile for leveraged acquisition and return extraction",
        "Young Poong (25.42%) had governance frustration: largest shareholder with no operational influence over chairman Choi's ambitious capex strategy",
        "Share price was depressed relative to intrinsic asset value due to strategic uncertainty from the Troika Drive pivot",
        "Successful control would enable MBK to influence capital allocation (dividends vs. capex), potentially monetize Korea Zinc's premium market position",
      ],
    },
    seller: {
      title: "Korea Zinc Defense — Why Resist",
      initials: "KZ",
      bg: "bg-amber-600",
      points: [
        "MBK as a financial buyer raises concerns about asset disposal, excessive leverage, and short-term return extraction from a world-class strategic asset",
        "The Troika Drive strategy requires multi-year capital commitment — MBK's ownership would conflict with long-term investment discipline",
        "Korea Zinc's EV battery materials business (KEMCO, etc.) is a national strategic interest — PE control of critical materials supply chain drew government scrutiny",
        "Premium brand and operational excellence built over 70 years could be degraded under financial ownership focused on near-term returns",
      ],
    },
  },

  // ── Post-Deal Assessment ───────────────────────────────────────
  postDealAssessment: {
    asOfDate: "March 2025",
    body: "Korea Zinc management retained control but now operates under permanent governance pressure with MBK+Young Poong holding ~41% of shares.",
    overallVerdict:
      "Defense successful — incumbent management retained control; MBK holds a ~41% blocking stake with no board representation",
    positives: [
      "Chairman Choi's Troika Drive strategy can continue — EV materials, hydrogen, and solar investments proceed without PE interference",
      "Korea Zinc established a new defensive playbook: company-level buyback as a hostile bid counter-weapon",
      "International investor confidence in Korea Zinc's operational independence and premium asset quality was maintained",
    ],
    risks: [
      "MBK+Young Poong's ~41% stake creates permanent governance overhang — every AGM will be contested",
      "No clear exit for MBK creates misaligned incentives: a large, unsatisfied minority at ~41% can block extraordinary resolutions",
      "Regulatory uncertainty: the defensive treasury buyback raised legal questions that will require legislative clarification",
      "Korea Zinc's aggressive capex (Troika Drive) may remain under pressure if operational performance disappoints",
    ],
    editorNote:
      "This case will be studied for a generation in Korean M&A. It exposed the fragility of dual-family co-governance structures when interests diverge. The defensive buyback innovation is now part of the Korean M&A arsenal. And the NPS swing vote underscores why public pension fund governance is as important as any corporate governance reform.",
  },

  // ── Tombstone ─────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "MBK",
    acquirerBg: "bg-slate-800",
    targetInitials: "KZ",
    targetBg: "bg-amber-600",
    acquirerName: "MBK Partners + Young Poong",
    targetName: "Korea Zinc Co., Ltd.",
    dealTitle: "Korea Zinc Control Battle",
    dealSize: "~₩2.4 trillion",
    dealSizeUSD: "~$1.8 billion",
    evEbitda: "Defense Won",
    closeDate: "Mar 28, 2025",
  },

  // ── Sources ───────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "MBK Partners + Young Poong joint tender offer announcement, DART Financial Supervisory Service (September 13, 2024)",
    },
    {
      id: 2,
      text: "Korea Zinc board resolution — defensive treasury share buyback at ₩830,000/share, DART (September 23, 2024)",
    },
    {
      id: 3,
      text: "Korea Zinc tender offer prospectus and buyback prospectus filings, Financial Supervisory Service DART (September–October 2024)",
    },
    {
      id: 4,
      text: "Seoul Central District Court injunction blocking Korea Zinc treasury share cancellation (October 18, 2024)",
    },
    {
      id: 5,
      text: "Korea Zinc Extraordinary General Meeting results, DART (January 23, 2025)",
    },
    {
      id: 6,
      text: "Seoul court dismissal of MBK Partners' final injunction bid (March 28, 2025)",
    },
    {
      id: 7,
      text: "Korea Economic Daily (한국경제), Maeil Business News (매일경제) — Korea Zinc battle coverage (September 2024 – March 2025)",
    },
    {
      id: 8,
      text: "Bloomberg and Reuters coverage of Korea Zinc hostile takeover bid (September–October 2024)",
    },
    {
      id: 9,
      text: "Korea Zinc shareholder structure disclosure, DART (September 2024)",
    },
    {
      id: 10,
      text: "NPS proxy voting disclosure, Korea Zinc EGM (January 2025)",
    },
  ],

  // ── SEO ───────────────────────────────────────────────────────
  seo: {
    title:
      "Korea Zinc MBK Partners Control Battle (2024) — Hostile Takeover Case Study",
    description:
      "The definitive case study of Korea's largest hostile takeover battle: MBK Partners + Young Poong vs. Korea Zinc. Dueling tender offers, +217% stock surge, court battles, EGM proxy war. Learn the financial engineering behind Asia's most dramatic M&A control contest.",
    keywords: [
      "Korea Zinc hostile takeover",
      "MBK Partners Korea Zinc",
      "Korean M&A case study",
      "hostile tender offer Korea",
      "control contest Asia",
      "defensive buyback M&A",
    ],
  },

  // ── Key Concepts ──────────────────────────────────────────────
  concepts: [
    {
      term: "Hostile Tender Offer",
      description:
        "A publicly announced offer to purchase shares directly from shareholders at a premium, bypassing the target's board — the central mechanism of MBK's attack on Korea Zinc.",
    },
    {
      term: "Defensive Buyback",
      description:
        "A company repurchasing its own shares at a price above the hostile bid, competing for the same shares and signaling intrinsic value. Korea Zinc's ₩830,000 counter-buyback was the most expensive defensive buyback in Korean M&A history.",
    },
    {
      term: "Proxy Fight / EGM",
      description:
        "A campaign to replace board directors at a shareholder meeting. With ~40.97% combined, MBK+Young Poong forced an Extraordinary General Meeting — and lost all four director nominees when NPS sided with incumbents.",
    },
    {
      term: "Court Injunction in M&A",
      description:
        "A court order blocking a specific corporate action mid-deal. The October 2024 Seoul court injunction prevented Korea Zinc from cancelling repurchased treasury shares, freezing the dilution defense and altering the balance of power.",
    },
    {
      term: "PE Control Contest",
      description:
        "A private equity fund using a leveraged tender offer to acquire control of a publicly listed company. MBK's Korea Zinc bid is now the defining Asian precedent for PE-driven control contests, illustrating both the power and limits of financial buyer tactics against entrenched strategic shareholders.",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did MBK and Young Poong fail to gain control of Korea Zinc despite acquiring 40.97%?",
      a: "Acquiring shares and controlling a board are distinct objectives. MBK and Young Poong succeeded at the first — acquiring ~41% through the tender offer — but failed at the second. At the January 2025 EGM, all four MBK-backed director nominees were defeated. The decisive factor was the National Pension Service (NPS), which held 7.83% and chose to partially support incumbent directors. Without NPS backing, the hostile coalition lacked the votes to install a new board despite holding the largest single shareholder bloc.",
    },
    {
      q: "What is a defensive tender offer, and was Korea Zinc's buyback legal?",
      a: "A defensive tender offer (or defensive buyback) is when a target company launches its own competing bid for its shares, at a price above the hostile offer, to deny the attacker the shares it needs. Korea Zinc's ₩830,000 counter-buyback — 26% above MBK's ₩660,000 — was the first large-scale use of this tactic in Korean M&A. Its legality was contested: regulators flagged procedural questions in Korea Zinc's buyback prospectus, and MBK filed complaints. The buyback itself was completed, but a court blocked the planned follow-on step of cancelling the treasury shares.",
    },
    {
      q: "How did the stock price triple during a contested acquisition?",
      a: "Two simultaneous competing bids created a classic bid premium squeeze. MBK offered ₩660,000; Korea Zinc countered at ₩830,000. Shareholders holding out for the higher offer — or anticipating further bid escalation — pushed the market price above both bids. Arbitrageurs entered, further amplifying momentum. The market ultimately priced a full control premium for a globally dominant industrial asset, driving the stock to ₩1,630,000. Once the EGM resolved control uncertainty in January 2025 without further bid escalation, the control premium collapsed and the stock retraced to ~₩640,000.",
    },
    {
      q: "What role did the National Pension Service play, and why did it matter?",
      a: "The NPS held approximately 7.83–8.68% of Korea Zinc shares, making it the decisive swing voter at the EGM. Neither the Choi-led management coalition (~46.11% including treasury shares) nor the MBK+Young Poong coalition (~40.97%) could guarantee a majority without NPS support on specific resolutions. The NPS, operating under Korea's 2016 Stewardship Code, voted to partially support incumbent directors while rejecting MBK's nominees. This decision — applying the Stewardship Code in a PE-driven hostile control contest for the first time — provided the winning margin for Korea Zinc management.",
    },
    {
      q: "What are the lasting implications of the Korea Zinc deal for Korean M&A?",
      a: "The Korea Zinc battle established several precedents: (1) the defensive treasury buyback at a premium is now a recognized — if legally complex — tool for Korean companies facing hostile bids; (2) court injunctions can block both offensive and defensive maneuvers mid-contest, creating legal uncertainty that future bidders must price in; (3) the NPS's Stewardship Code vote in a control contest sets a template for institutional investor behavior in future hostile bids; (4) MBK's ~41% blocking stake with no board representation is a novel unresolved governance outcome that will generate future AGM conflict. Legislators and regulators are reviewing Korean tender offer and treasury share rules as a direct result of this case.",
    },
  ],
};

export default koreaZincMbk;
