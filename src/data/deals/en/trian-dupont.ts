import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "trian-dupont",
  title: "Trian Fund Management × DuPont — The Proxy Fight Loss That Created a $130B Merger",
  subtitle: "History's Largest Activism Defeat → DowDuPont $130B Merger 6 Months Later → 3 Independent Companies Born",
  category: "activism",
  industry: "Chemicals / Agriculture / Specialty Materials",
  country: "United States",
  announcedAt: "2013-10-01",
  closedAt: "2015-05-13",
  announcedDisplay: "October 2013",
  closedDisplay: "May 2015",
  readingMinutes: 10,
  tags: [
    "Trian",
    "DuPont",
    "Nelson Peltz",
    "proxy fight",
    "activism",
    "DowDuPont merger",
    "conglomerate discount",
    "spin-off",
    "chemicals",
  ],
  excerpt:
    "Trian Fund's Nelson Peltz acquired a 2.7% stake (~$1.6B) in DuPont and demanded 4 board seats and major restructuring. At the May 2015 annual meeting, Trian suffered the largest defeat in activism history, losing all 4 seats. But just six months later the CEO resigned, and by year-end a $130B DowDuPont merger was announced — precisely the 'break-up' Trian had demanded.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "TRIAN", bg: "bg-slate-700", label: "Trian Fund" },
  target:   { initials: "DD",    bg: "bg-red-700",   label: "DuPont" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "E.I. du Pont de Nemours and Company (DuPont), founded in 1802, was one of America's oldest chemical and science companies. With revenues of $36.2B and 60,000 employees in 2013, it was a complex conglomerate operating entirely different businesses — agriculture (Pioneer Hi-Bred seeds), performance materials, safety products (Tyvek, Kevlar), and specialty chemicals — under one roof. This very structure became Trian's target.",
    "Trian Fund Management (co-founded by Nelson Peltz) disclosed approximately 2.7% (~$1.6B) of DuPont in October 2013 — the largest single investment in Trian's history. Trian immediately published a 'White Paper' arguing that DuPont was destroying hundreds of billions in shareholder value through a conglomerate discount.",
    "The core demands were three: first, approximately $4B in cost cuts over three years; second, business unit separation or independent listing; third, 4 board seats (including Peltz). CEO Ellen Kullman pushed back hard, arguing 'DuPont's integrated model creates value across the entire cycle.'",
    "At the May 13, 2015 annual meeting: Trian suffered the largest defeat in activism history, losing all 4 board seats. ISS (the top proxy advisory firm) supported 2 Trian candidates while Glass Lewis sided with DuPont management. The final margin was approximately 4–5 percentage points. Wall Street media reported it as 'the biggest defeat in activism history.'",
    "But the ending was a reversal. CEO Kullman suddenly resigned in October 2015, and in December 2015 DuPont announced a $130B merger of equals with Dow Chemical. In 2019, DowDuPont was split into three independent companies: DuPont (specialty materials), Dow Inc. (commodity chemicals), and Corteva Agriscience (agriculture) — exactly the structure Trian had demanded in its White Paper.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~$1.6B (2.7% DuPont Stake)",
    acquirerName: "Trian Fund Management",
    targetName: "E.I. du Pont de Nemours (DuPont)",
    announcedDisplay: "October 2013",
    closedDisplay: "May 2015 (Proxy Vote)",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "October 2013: Trian discloses 2.7% DuPont stake ($1.6B) — the largest single investment in Trian's history.",
    "White Paper published: DuPont conglomerate discount, $4B cost-cutting opportunity, business unit separation demanded.",
    "May 13, 2015 annual meeting: Trian loses all 4 board seats — reported as 'the biggest defeat in activism history.'",
    "October 2015: CEO Kullman suddenly resigns → December 2015: DowDuPont $130B merger announced.",
    "2019: DowDuPont 3-way split (DuPont, Dow, Corteva) — Trian's demands realized exactly. Investment returns achieved.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "From 2013 to 2015, the U.S. chemicals and agriculture conglomerate sector was under structural pressure. The traditional 'chemical conglomerate' structure — one company operating agriculture (GMO seeds, pesticides), specialty chemicals (Kevlar, Tyvek), and commodity performance materials — was valued below what each unit would be worth as an independent listing. Investors felt that the vastly different cycles, risk profiles, and growth characteristics of each unit made integrated valuation impossible. This was precisely the entry opportunity for activist funds.",
    metrics: [
      { label: "DuPont Share Price (Trian Entry, 2013)", value: "~$55",   sub: "At time of Trian stake acquisition" },
      { label: "Trian Investment",                       value: "~$1.6B", sub: "~2.7% stake" },
      { label: "Demanded Cost Savings",                 value: "$4B",    sub: "Cumulative 3-year target (White Paper)" },
      { label: "DowDuPont Merger Size",                 value: "$130B",  sub: "December 2015 merger-of-equals announcement" },
    ],
    subBody:
      "A proxy fight is the tool by which activist funds directly attack the board of a large company with only a minority stake. The Trian-DuPont contest became the textbook of the paradoxical case of 'losing yet winning.' The CEO change and $130B merger became reality within six months of defeat.",
    players: [
      { name: "Trian Fund (Nelson Peltz, Ed Garden)", role: "Activist fund, demanding 4 board seats and restructuring" },
      { name: "Ellen Kullman (DuPont CEO)",           role: "Defended integrated model, won proxy fight, then resigned in October" },
      { name: "ISS (Institutional Shareholder Services)", role: "Supported 2 Trian candidates" },
      { name: "Glass Lewis",                          role: "Supported DuPont management, split from ISS" },
      { name: "Dow Chemical (Andrew Liveris CEO)",    role: "$130B merger partner announced December 2015" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "E.I. du Pont de Nemours (DuPont)",
    body: "DuPont was founded as a gunpowder manufacturer in 1802 and over 213 years supplied core materials to American industry. The 'father of materials science' — inventor of nylon, Teflon, Kevlar, Tyvek, and Lycra. As of 2013, revenues were $36.2B and business units spanned agriculture (Pioneer Hi-Bred — corn and soybean seeds), performance materials (automotive, electronics), industrial biosciences, nutrition and health, protection solutions (Kevlar bulletproof vests, Tyvek protective wear), and specialty chemicals. This diversification was both the source of the 'conglomerate discount' and the core target of Trian's attack.",
    metrics: [
      { label: "Employees (2013)",    value: "~60,000",       sub: "Global consolidated" },
      { label: "Revenue (FY2013)",    value: "$36.2B",         sub: "6 major business units combined" },
      { label: "Operating Income (FY2013)", value: "$4.2B",   sub: "US GAAP basis" },
      { label: "Number of Business Units", value: "6",        sub: "Agriculture, materials, chemicals, biosciences, etc." },
      { label: "Pioneer Hi-Bred",    value: "World's #1 Seed", sub: "Corn and soybean seed market" },
      { label: "Kevlar and Tyvek",   value: "Unmatched Patents", sub: "Global standard in ballistic and protective materials" },
    ],
    financials: [
      {
        year: "FY2013",
        revenue: 36233,
        cogs: 22800,
        grossProfit: 13433,
        sga: 9200,
        operatingIncome: 4233,
        ebitda: 5800,
      },
      {
        year: "FY2014",
        revenue: 34082,
        cogs: 21400,
        grossProfit: 12682,
        sga: 8800,
        operatingIncome: 3882,
        ebitda: 5400,
      },
      {
        year: "FY2015",
        revenue: 25130,
        cogs: 15700,
        grossProfit: 9430,
        sga: 6500,
        operatingIncome: 2930,
        ebitda: 4200,
      },
    ],
    financialsNote: "Unit: $M (millions) | US GAAP consolidated | FY2015 revenue decline reflects Chemours performance coatings spin-off and agricultural seasonality",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "DuPont's governance problem was the complex conglomerate structure created by 213 years of history. With business units operating entirely different cycles — agriculture, specialty chemicals, commodity materials — all under a single board and management team, the inherent value of each unit wasn't receiving proper market recognition. Trian quantified this 'conglomerate discount' and attacked, while DuPont's management countered with 'the synergies of integration.' In May 2015, shareholders sided with management, but the market ultimately chose Trian's logic.",
    shareholders: [
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "Largest institutional shareholder",
        stake: "7.5%",
        stakePct: 7.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "Second-largest institutional shareholder",
        stake: "6.8%",
        stakePct: 6.8,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "state-street",
        label: "State Street",
        sub: "Third-largest institutional shareholder",
        stake: "4.9%",
        stakePct: 4.9,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "trian",
        label: "Trian Fund",
        sub: "Nelson Peltz activist fund",
        stake: "2.7%",
        stakePct: 2.7,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "management",
        label: "Management and Employees",
        sub: "Insider-held shares",
        stake: "~1%",
        stakePct: 1.0,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "General Minority Shareholders",
        sub: "Retail and small investors",
        stake: "~77%",
        stakePct: 77.1,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 12,
      independent: 11,
      affiliated: 1,
      note: "Formally high independent director ratio. However, Trian criticized that a 213-year-old DuPont board found it difficult to objectively evaluate the independent value of each business unit. The dual CEO-Chairman structure under Kullman was also flagged.",
    },
    issues: [
      {
        title: "Conglomerate Discount",
        description: "Agriculture (Pioneer Hi-Bred), specialty materials (Kevlar), commodity chemicals, and biosciences bundled under a single valuation, discounting the inherent value of each business unit. Trian estimated hundreds of billions in value destruction.",
        severity: "critical",
      },
      {
        title: "Combined CEO and Board Chairman",
        description: "Ellen Kullman simultaneously served as CEO and board Chairman, weakening the board's independent oversight function — a governance criticism.",
        severity: "high",
      },
      {
        title: "Cost Structure Inefficiency",
        description: "Per Trian's White Paper, SG&A ratio was excessive relative to competitors. Presented numerical evidence that $4B could be saved over three years.",
        severity: "high",
      },
      {
        title: "Dispersed Business Unit Portfolio",
        description: "Simultaneously operating 6 business units with entirely different cycles and margin structures. Decreased capital allocation efficiency; absence of accountable management in each unit.",
        severity: "critical",
      },
    ],
    demands: [
      {
        demand: "4 board seats (including Peltz)",
        result: "lost",
        note: "Lost all 4 seats at the May 13, 2015 annual meeting. Recorded as the largest defeat in activism history.",
      },
      {
        demand: "$4B cost savings (over 3 years)",
        result: "partial",
        note: "New management following Kullman's resignation took some efficiency actions, but substantial restructuring occurred through the DowDuPont merger process.",
      },
      {
        demand: "Company separation and restructuring",
        result: "won",
        note: "December 2015: DowDuPont $130B merger announced → 2019: 3-way split into DuPont, Dow Inc., and Corteva. Trian's demands realized exactly.",
      },
      {
        demand: "CEO change",
        result: "won",
        note: "CEO Kullman suddenly resigned in October 2015 — five months after the proxy fight defeat.",
      },
    ],
    stockImpact: {
      preCampaign: "~$55",
      peakDuringCampaign: "~$77",
      postCampaign: "~$70",
      note: "Trian entry (2013) at $55 → $77 peak after DowDuPont merger announcement (December 2015). Modest short-term decline immediately after proxy fight defeat (May 2015), then rebounded. Trian realized large investment returns despite the 'defeat.'",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "After purchasing approximately 2.7% (~$1.6B) of DuPont in the open market, Trian deployed a dual strategy of publishing a White Paper and demanding 4 board seats. DuPont countered with an 'Investor Day,' buybacks, and shareholder letters. While shareholders sided with management, the restructuring pressure planted by the campaign led to the CEO's resignation and a major merger.",
    preOwnership: {
      nodes: [
        { id: "trian",        label: "Trian Fund",             sub: "2.7% stake, demanding 4 board seats",       type: "acquirer" },
        { id: "dupont-board", label: "DuPont Board (12)",      sub: "CEO Kullman serves as combined Chairman",    type: "target" },
        { id: "dupont-mgmt",  label: "DuPont Management",      sub: "CEO Ellen Kullman, defending integrated model", type: "entity" },
        { id: "iss-gl",       label: "ISS / Glass Lewis",      sub: "Proxy advisory firms (decisive swing votes)",  type: "fund" },
        { id: "big3",         label: "Big 3 Institutional Shareholders", sub: "Vanguard, BlackRock, State Street ~19%", type: "fund" },
      ],
      edges: [
        { from: "trian",       to: "dupont-board", label: "2.7% + 4 director candidates submitted" },
        { from: "dupont-mgmt", to: "dupont-board", label: "Recommended rejection of all Trian candidates" },
        { from: "iss-gl",      to: "dupont-board", label: "ISS: 2 candidates supported / Glass Lewis: management supported" },
        { from: "big3",        to: "dupont-board", label: "~19% voting rights (neutral → management support, decisive)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "dupont-win",   label: "DuPont Board Victory",    sub: "May 2015, all 4 seat losses confirmed",     type: "target" },
        { id: "kullman-out",  label: "CEO Kullman Resignation", sub: "October 2015, 5 months after proxy defeat", type: "entity" },
        { id: "dow-dupont",   label: "DowDuPont Merger",        sub: "December 2015: $130B merger-of-equals announced", type: "entity" },
        { id: "three-split",  label: "3-Way Split (2019)",      sub: "DuPont, Dow Inc., Corteva independently listed", type: "public" },
      ],
      edges: [
        { from: "dupont-win",  to: "kullman-out", label: "Accumulated shareholder pressure → CEO resignation" },
        { from: "kullman-out", to: "dow-dupont",  label: "New management accepts merger strategy" },
        { from: "dow-dupont",  to: "three-split", label: "DowDuPont → 3 pure-play companies separated" },
      ],
    },
    keyTerms: [
      { label: "Trian Stake",          value: "~2.7%",                               accent: true },
      { label: "Investment",           value: "~$1.6B" },
      { label: "Board Demand",         value: "4 seats (Peltz + 3 others)" },
      { label: "AGM Outcome (May 2015)", value: "Lost all 4 seats — DuPont victory", accent: true },
      { label: "CEO Resignation",      value: "October 2015 (5 months later)" },
      { label: "DowDuPont Merger",     value: "$130B merger-of-equals (December 2015)", accent: true },
      { label: "Final Outcome",        value: "2019 3-way split — Trian thesis realized" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "The 2015 DuPont proxy fight was one of the most expensive contests in history in terms of advisory fees. DuPont assembled Goldman Sachs and Evercore as financial advisors and Innisfree and Joele Frank as proxy/communications advisors. Trian used Lazard and D.F. King to make its case to institutional investors.",
    sides: [
      {
        side: "target",
        sideLabel: "DuPont (Defense Side)",
        initials: "DD",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Proxy fight defense strategy and institutional investor persuasion campaign support.",
          },
          {
            firm: "Evercore",
            role: "Co-Financial Advisor",
            roleType: "financial",
            note: "Independent fairness opinion and capital allocation strategy review.",
          },
          {
            firm: "Innisfree M&A",
            role: "Proxy Solicitation Advisor",
            roleType: "other",
            note: "Managed institutional and retail shareholder vote solicitation campaign.",
          },
          {
            firm: "Joele Frank, Wilkinson Brimmer Katcher",
            role: "PR and Communications Advisor",
            roleType: "other",
            note: "Shareholder communications message strategy and media response.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Specialist activism defense law firm. Corporate charter and voting regulations advisory.",
          },
        ],
      },
      {
        side: "acquirer",
        sideLabel: "Trian Fund (Activist Side)",
        initials: "TRIAN",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Lazard",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Verification of Trian White Paper figures and value analysis support.",
          },
          {
            firm: "D.F. King & Co.",
            role: "Proxy Solicitation Advisor",
            roleType: "other",
            note: "Retail and institutional investor vote solicitation campaign. ISS and Glass Lewis persuasion strategy.",
          },
          {
            firm: "Willkie Farr & Gallagher",
            role: "Legal Advisor",
            roleType: "legal",
            note: "SEC filings and proxy regulations advisory.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources and press reporting. May differ from actual contract details.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Trian's core valuation argument was that the combined value of DuPont's individual business units as independent listings would be hundreds of billions of dollars higher than the current market cap. Agriculture (Pioneer Hi-Bred) could receive Monsanto-level multiples, specialty materials (Kevlar, Tyvek) would receive 3M-equivalent multiples, and commodity chemicals would be valued at separate cycle multiples. Eliminating the 'conglomerate discount' alone could add $20–30+ per share in value.",
    rows: [
      { item: "DuPont Share Price (Trian Entry, 2013)",         val: "~$55",    note: "Entry price basis" },
      { item: "EV/EBITDA (FY2013 basis)",                      val: "~8–9×",   note: "Conglomerate discount reflected at entry" },
      { item: "Agriculture Unit Independent Multiple",         val: "~14×+",   note: "Based on Monsanto peer group (Trian estimate)" },
      { item: "Specialty Materials Independent Multiple",      val: "~12–15×", note: "Based on 3M, Honeywell peer group" },
      { item: "Share Price Immediately After Proxy Defeat (May 2015)", val: "~$60", note: "Short-term decline then rebound" },
      { item: "Share Price After DowDuPont Announcement (Dec 2015)", val: "~$77", note: "Merger announcement premium reflected", accent: true },
      { item: "Trian Estimated Investment Return",             val: "~+40%+",  note: "$55→$77 basis; large profit realized", accent: true },
    ],
    disclaimer: "Note: Share prices and valuations are estimates based on public sources. Trian's actual exit timing and returns are not publicly disclosed.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "What Trian Demanded from DuPont",
      initials: "TRIAN",
      bg: "bg-slate-700",
      points: [
        "Resolving the conglomerate discount: presenting numbers showing that independently listing agriculture, specialty materials, and commodity chemicals would yield hundreds of billions more in combined value than the integrated market cap.",
        "3-year $4B cost savings: White Paper numbers showing SG&A ratios were excessive versus competitors. Demanding improvements to the centralized cost structure.",
        "4 board seats: securing real strategic oversight capability by appointing 4 directors including Peltz himself — demanding execution oversight authority, not just advisory input.",
        "Separate CEO and board Chairman: criticizing that the basic governance principle is violated and independent oversight is not functioning.",
      ],
    },
    seller: {
      title: "Why DuPont Refused",
      initials: "DD",
      bg: "bg-red-700",
      points: [
        "Integration synergy argument: the R&D collaboration between agriculture (Pioneer Hi-Bred genomics research) and specialty materials (bio-based materials) would be impossible after separation.",
        "Claiming ongoing restructuring: emphasized that from 2013–2015, DuPont was independently conducting the performance coatings spin-off (Chemours, 2015) and cost reduction programs.",
        "Board expertise conflict: argued that Trian candidates were unsuitable to understand the management of a 213-year-old complex chemistry and science company.",
        "Adding 4 independent directors would itself create board operating inefficiency, and Trian's short-term profit focus would harm long-term R&D investment.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Trian lost all 4 seats in the May 2015 proxy fight, but that defeat was just the beginning. In October 2015, CEO Kullman resigned, and in December 2015, a $130B merger of equals with Dow Chemical was announced. In 2019, DowDuPont was split into three independent listed companies: DuPont (specialty materials), Dow Inc. (commodity chemicals), and Corteva Agriscience (agriculture) — exactly the structure Trian had demanded in its White Paper. Trian won the battle in the vote but won the war.",
    overallVerdict: "Trian strategic victory — the paradox of defeat as catalyst",
    positives: [
      "CEO change 5 months after proxy defeat, $130B merger announced 6 months after — Trian's campaign served as direct catalyst.",
      "2019 DuPont, Dow, Corteva 3-way split completely resolved the 'conglomerate discount' — White Paper thesis realized.",
      "Trian investment return: $55 entry → $77+ (post-merger announcement) representing approximately 40%+ return; one of the largest single-deal success cases in Trian's history.",
      "Corteva Agriscience (Pioneer Hi-Bred's successor) established as a global Top 3 seed company after independent listing.",
    ],
    risks: [
      "Direct causation between Trian's campaign and the DowDuPont merger is not officially confirmed — the merger was officially characterized as an independent decision by both CEOs.",
      "Post-3-way-split DuPont share price has shown long-term underperformance relative to merger expectations — proving that spin-offs alone are not a cure-all.",
      "Dow Inc. remains fully exposed to commodity chemicals cycles with high volatility — the cycle risk of the 'pure-play' strategy also comes along.",
      "The proxy fight cost (estimated hundreds of millions of dollars) was criticized as short-term shareholder value destruction.",
    ],
    editorNote:
      "Trian-DuPont is the most paradoxical case in activism history. History's largest 'defeat' produced history's most perfect 'outcome.' It proved that even when you lose a shareholder vote, if you plant the restructuring logic in shareholders' minds, management ultimately moves in that direction. The real weapon of activism is not a board seat but a 'publicly articulated logic.'",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "TRIAN",
    acquirerBg: "bg-slate-700",
    targetInitials: "DD",
    targetBg: "bg-red-700",
    acquirerName: "Trian Fund Management",
    targetName: "E.I. du Pont de Nemours (DuPont)",
    dealTitle: "Trian × DuPont — The Proxy Fight Loss That Created a $130B Merger",
    dealSize: "~$1.6B (2.7% Stake)",
    dealSizeUSD: "~$1.6B",
    evEbitda: "N/A (Activism)",
    closeDate: "May 2015 (Proxy Vote)",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Trian Fund Management, DuPont 13D/13F Filings (October 2013)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=trian" },
    { id: 2, text: "Trian Fund, 'Transforming DuPont' White Paper (2014–2015)" },
    { id: 3, text: "DuPont 2015 Annual Proxy Statement (DEF 14A), Annual Meeting Results (May 13, 2015)" },
    { id: 4, text: "Wall Street Journal, 'DuPont Defeats Trian's Bid for Board Seats' (May 13, 2015)" },
    { id: 5, text: "New York Times, 'DuPont Wins Proxy Fight Against Trian Fund' (May 2015)" },
    { id: 6, text: "DuPont Press Release, 'DuPont CEO Ellen Kullman Retires' (October 2015)" },
    { id: 7, text: "Dow Chemical & DuPont, Merger of Equals Announcement (December 11, 2015)" },
    { id: 8, text: "DuPont Annual Reports FY2013–FY2015" },
    { id: 9, text: "Bloomberg, 'How Trian Lost the Battle but Won the War at DuPont' (2016)" },
    { id: 10, text: "DowDuPont Inc., 3-Way Split Completion Announcement (2019)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Trian DuPont Proxy Fight — Nelson Peltz Defeat, Then $130B Dow Merger — Full Analysis",
    description:
      "Complete analysis of Trian Nelson Peltz's DuPont activism. How the largest defeat in activism history — losing all 4 board seats in the 2015 proxy fight — led to the $130B DowDuPont merger and the 2019 3-way split six months later. The textbook of conglomerate discount and the activism paradox.",
    keywords: [
      "Trian DuPont proxy fight",
      "Nelson Peltz DuPont",
      "Dow DuPont merger",
      "activism proxy fight",
      "conglomerate discount",
      "DuPont spin-off",
      "Corteva Agriscience",
      "Ellen Kullman",
      "Trian White Paper",
      "DuPont restructuring",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Proxy Fight Loss → M&A Catalyst",
      description: "The paradox where activism can become a catalyst for strategic change even without a direct win. Trian-DuPont is the textbook case — $130B merger announced just 6 months after defeat.",
    },
    {
      term: "Conglomerate Discount",
      description: "The phenomenon where a diversified conglomerate is valued below the sum of its individual business unit values. Trian's core argument was that DuPont's combined agriculture, materials, and chemicals structure was creating hundreds of billions in value discounting.",
    },
    {
      term: "ISS / Glass Lewis",
      description: "The two major proxy advisory firms that advise institutional investors on how to vote at annual meetings. In the DuPont contest, ISS supported 2 Trian candidates while Glass Lewis supported management — their split was the decisive factor in DuPont's narrow victory.",
    },
    {
      term: "White Paper",
      description: "An investment thesis report published by an activist fund. The core strategic document designed to persuade shareholders. Trian's 'Transforming DuPont' White Paper used dozens of pages of numerical analysis to bring the conglomerate discount into public debate.",
    },
    {
      term: "Spin-off Strategy",
      description: "A structure where a conglomerate separates a business unit into an independently listed entity for that business to receive its inherent market valuation. DowDuPont's 2019 3-way split (DuPont, Dow, Corteva) is one of the largest spin-off cases in history.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Trian lose the DuPont proxy fight?",
      a: "ISS (the top proxy advisory firm) supported 2 Trian candidates, but Glass Lewis sided with DuPont management. The largest institutional shareholders — Vanguard, BlackRock, State Street (~19% combined) — ultimately tilted toward management, and the final margin was approximately 4–5 percentage points. DuPont's February 2015 announcement of a performance coatings unit spin-off (Chemours) also influenced shareholder judgment by demonstrating management's willingness to self-restructure.",
    },
    {
      q: "How did Trian ultimately win despite losing?",
      a: "Trian's two-year campaign completely planted the logic 'this company needs to be separated' in the minds of DuPont's board and shareholders. Had CEO Kullman remained in post after the proxy defeat, she would have faced restructuring pressure throughout her remaining tenure. The October resignation and December merger announcement were the result of DuPont management themselves acknowledging that Trian's logic was correct.",
    },
    {
      q: "Is the DowDuPont merger related to Trian?",
      a: "DuPont and Dow Chemical officially stated they independently decided on the merger with no involvement from Trian. However, the backdrop that enabled Dow CEO Andrew Liveris and new DuPont CEO Edward Breen to 'immediately pursue' the merger was the restructuring groundwork that Trian's campaign had laid. Media including Bloomberg characterized it as 'the merger Trian planted the seeds for.'",
    },
    {
      q: "What did the 2019 DowDuPont 3-way split create?",
      a: "In 2019, DowDuPont was split into three pure-play companies: DuPont (specialty materials, electronic materials, safety products), Dow Inc. (commodity ethylene chemicals, packaging), and Corteva Agriscience (seeds, crop protection). This is virtually identical to the 'agriculture separation, materials separation, chemicals separation' structure Trian presented in its 2014 White Paper. After independent listing, each company received its own cycle multiples, and the combined market cap was significantly higher than DuPont's standalone market cap before the merger.",
    },
    {
      q: "What is conglomerate discount and why does it occur?",
      a: "Conglomerate discount is the phenomenon where a diversified conglomerate's share price is valued below the sum of its individual business units when separately listed. It occurs for three reasons: (1) investors find it difficult to independently analyze the risk, returns, and cycles of each business unit; (2) capital allocation within the company is less efficient than the market; (3) management cannot focus on core businesses. In DuPont's case, high-growth agriculture and cyclical commodity chemicals received the same multiple, hurting both.",
    },
    {
      q: "How much did Trian make on its DuPont investment?",
      a: "Trian acquired a 2.7% DuPont stake (~$1.6B) at approximately $55 in 2013. After the DowDuPont merger announcement (December 2015), the share price rose to around $77 — suggesting approximately 40%+ returns. The exact exit timing and returns are not public, but estimated gains of $600M–$800M+ are reported. This is recorded as one of the largest single-deal profits in Trian's history.",
    },
  ],
};

export default deal;
