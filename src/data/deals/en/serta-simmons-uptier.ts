/**
 * Serta Simmons Bedding — 2020 Uptier Exchange (Lender-on-Lender Violence)
 * Existing TLB creditors (~$900M) primed and new super-priority $1.2B TL issued
 * 2024 5th Circuit "transaction invalid" ruling — a watershed moment in syndicated loan history
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "serta-simmons-uptier",
  title: "How Serta Simmons Primed Its Own Creditors",
  subtitle: "$1.2B Uptier Exchange — The Textbook Case of Lender-on-Lender Violence and a Court-Invalidated Transaction",
  category: "ma",
  industry: "Consumer Goods / Bedding Manufacturing",
  country: "United States",
  announcedAt: "2020-06-08",
  closedAt: "2020-06-22",
  announcedDisplay: "June 2020",
  closedDisplay: "June 2020",
  readingMinutes: 13,
  tags: [
    "Serta Simmons", "Uptier", "LME", "Lender-on-Lender Violence", "LoLV",
    "TLB", "leveraged loan", "LevFin", "covenants", "5th Circuit",
    "Chapter 11", "bankruptcy", "Apollo", "Angelo Gordon",
  ],
  excerpt:
    "In June 2020, Serta Simmons issued a super-priority $1.2B TL to consenting creditors and primed existing TLB creditors (~$900M). This COVID-19-triggered 'Lender-on-Lender Violence' transaction led to litigation by non-consenting creditors including Highland Capital, and after a January 2023 Chapter 11 filing, the 5th Circuit ruled the transaction 'invalid' in June 2024 — the largest court battle in history born from modern leveraged loan covenant loopholes.",

  acquirer: { initials: "LoLV", bg: "bg-red-900",  label: "Majority Lender Group (Apollo, Angelo Gordon, Goldman BDC)" },
  target:   { initials: "SSB",  bg: "bg-rose-700", label: "Serta Simmons Bedding, LLC" },

  background: [
    "Serta Simmons Bedding, the largest U.S. bedding brand (Serta, Beautyrest, and others), was acquired via LBO by Ares Management and Ontario Teachers' Pension Plan for approximately $3.0 billion in 2012. A subsequent LBO in 2016 (with Advent International participation) pushed debt to $1.8B+.",
    "In March 2020, the COVID-19 pandemic severely contracted furniture and consumer goods retail channels. Serta Simmons' EBITDA was projected to fall 30%+ year-over-year, and the company sought to restructure its capital structure to secure liquidity and reduce debt.",
    "The leveraged loan credit agreement contained a provision allowing certain terms to be amended with the consent of a 'majority (Required Lenders).' Serta Simmons persuaded a majority of its existing creditors to issue a new super-priority TL to themselves while exchanging their existing TLB at a discount — a capital structure revision known as an uptier exchange.",
  ],

  dealSummary: {
    dealValueDisplay: "$1.2B (Super-Priority TL)",
    acquirerName: "Majority Lender Group (Apollo, Angelo Gordon, Goldman Sachs BDC, et al.)",
    targetName: "Serta Simmons Bedding, LLC",
    announcedDisplay: "June 8, 2020",
    closedDisplay: "June 22, 2020",
    country: "United States (private)",
  },

  executiveSummary: [
    "COVID-19-driven financial deterioration → super-priority TL of $1.2B issued with majority creditor consent.",
    "Non-consenting creditors (~$900M: Highland Capital, Gamut Capital, et al.) → primed (pushed to junior position).",
    "Non-consenting creditors immediately sued: alleging 'breach of credit agreement' (breach of contract).",
    "January 2023 Chapter 11 filing — total debt ~$1.84B.",
    "June 2024 5th Circuit: uptier transaction ruled invalid — a shock to the syndicated loan market.",
  ],

  industryOverview: {
    body: "The U.S. bedding market is divided into B2C (direct to consumer) and B2B (hotels, hospitals), with competition intensifying since 2015 from the rise of online mattress startups (Casper, Purple, etc.). Serta Simmons was heavily dependent on traditional retail channels (furniture stores, department stores) and took a direct hit from COVID-19's offline lockdown impact.",
    metrics: [
      { label: "U.S. Bedding Market Size",     value: "~$15B",   sub: "2020 figure" },
      { label: "Serta Simmons Market Share",   value: "~40%",    sub: "U.S. premium bedding market" },
      { label: "COVID-19 EBITDA Decline",      value: "30%+",    sub: "2020 estimate" },
      { label: "Uptier TL Interest Rate",      value: "L+750bps", sub: "Including PIK option" },
    ],
    players: [
      { name: "Serta Simmons",      role: "#1 U.S. bedding brand, over-leveraged after LBO" },
      { name: "Sealy (Tempur-Pedic)", role: "Premium bedding market competitor" },
      { name: "Casper, Purple",     role: "Online direct-to-consumer emerging competitors" },
      { name: "Apollo, Angelo Gordon", role: "Majority creditors participating in uptier" },
    ],
  },

  companyOverview: {
    targetName: "Serta Simmons Bedding, LLC",
    body: "The largest U.S. bedding group, born from the merger of Serta International (founded 1931) and Simmons Bedding (founded 1870) through a 2012 LBO by Ares and Ontario Teachers'. Holds major brands including Serta, Beautyrest (Simmons), and National Bedding. Structurally vulnerable to online direct-to-consumer trends due to dependence on traditional retail channels.",
    metrics: [
      { label: "LBO EV (2016)",              value: "~$3.0B",  sub: "Advent International LBO" },
      { label: "Total Debt (2020)",          value: "~$1.84B", sub: "Pre-uptier" },
      { label: "Uptier TL Size",             value: "$1.2B",   sub: "Super-priority" },
      { label: "Non-Consenting Creditor Harm", value: "~$900M", sub: "TLB pushed to subordinated" },
    ],
    financials: [
      {
        year: "FY2018",
        revenue:         3100,
        cogs:            1950,
        grossProfit:     1150,
        sga:              780,
        operatingIncome:  370,
        ebitda:           420,
      },
      {
        year: "FY2019",
        revenue:         3050,
        cogs:            1920,
        grossProfit:     1130,
        sga:              760,
        operatingIncome:  370,
        ebitda:           415,
      },
      {
        year: "FY2020E",
        revenue:         2700,
        cogs:            1730,
        grossProfit:      970,
        sga:              700,
        operatingIncome:  270,
        ebitda:           290,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "FY2020E is an estimate reflecting the COVID-19 impact. Sharp EBITDA decline caused leverage multiples to spike rapidly → the backdrop for the uptier decision.",
  },

  dealStructure: {
    body: "Using the 'Required Lenders' majority consent provision in the credit agreement, a super-priority Term Loan of $1.2B was issued. Participating creditors exchanged their existing TLB into super-priority TL at a discounted price. Non-consenting creditors' existing TLB was demoted to junior 'old TLB.'",
    preOwnership: {
      nodes: [
        { id: "ares",   label: "Ares + Ontario", sub: "Sponsor (2012 LBO)",    type: "fund"   },
        { id: "advent", label: "Advent Int'l",   sub: "Co-sponsor (2016)",     type: "fund"   },
        { id: "tlb",    label: "TLB Lenders",    sub: "~$1.8B senior TLB",    type: "entity" },
        { id: "serta",  label: "Serta Simmons",  sub: "#1 U.S. bedding brand", type: "target" },
      ],
      edges: [
        { from: "ares",   to: "serta", label: "Equity" },
        { from: "advent", to: "serta", label: "Equity" },
        { from: "tlb",    to: "serta", label: "TLB ~$1.8B" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "supra",   label: "Super-Priority TL",    sub: "$1.2B (Apollo, et al.)",     type: "entity" },
        { id: "old-tlb", label: "Old TLB (non-consent)", sub: "~$900M demoted to junior",  type: "entity" },
        { id: "serta-p", label: "Serta Simmons",         sub: "Excessive debt burden",      type: "target" },
      ],
      edges: [
        { from: "supra",   to: "serta-p", label: "1st priority" },
        { from: "old-tlb", to: "serta-p", label: "Junior (primed)" },
      ],
    },
    keyTerms: [
      { label: "Uptier Structure",            value: "New super-priority TL of $1.2B issued",  accent: true  },
      { label: "Existing TLB Exchange Rate",  value: "Discount purchase (below face value)",   accent: false },
      { label: "Non-Consenting Creditor Harm", value: "~$900M TLB demoted to junior",          accent: true  },
      { label: "Legal Basis",                 value: "Open Market Purchase + Required Lenders", accent: true },
      { label: "5th Circuit Ruling",          value: "June 2024 — transaction invalid",        accent: true  },
    ],
  },

  advisors: {
    body: "The uptier transaction was jointly designed by the borrower (Serta Simmons) and the participating lender group. Non-consenting creditors assembled a separate advisory team and filed suit.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Participating Lender Group (Apollo, Angelo Gordon, Goldman BDC)",
        initials: "LoLV",
        bg: "bg-red-900",
        advisors: [
          { firm: "Latham & Watkins", role: "Legal Advisor to Participating Lenders", roleType: "legal",     note: "Uptier structure design" },
          { firm: "Houlihan Lokey",   role: "Financial Advisor",                      roleType: "financial", note: "Debt restructuring advisory" },
        ],
      },
      {
        side: "target",
        sideLabel: "Non-Consenting Creditors (Highland Capital, Gamut Capital)",
        initials: "HCP",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Gibson Dunn",  role: "Legal Advisor to Non-Consenting Creditors", roleType: "legal", note: "Pro Rata violation litigation" },
          { firm: "Milbank LLP",  role: "Creditor Committee Advisor",               roleType: "legal", note: "Chapter 11 proceedings" },
        ],
      },
    ],
  },

  valuation: {
    body: "The uptier transaction centers on the debt exchange ratio rather than conventional M&A valuation. Participating creditors effectively earned a discount return by exchanging their existing TLB into super-priority TL at below face value (approximately 70–80 cents).",
    rows: [
      { item: "Super-Priority TL Size",         val: "$1.2B",      note: "New issuance (1st priority)",                         accent: true  },
      { item: "Exchange Ratio (estimate)",      val: "~80 cents",  note: "Existing TLB $1 → super-priority TL $0.80",           accent: false },
      { item: "Non-Consenting TLB Harm",        val: "~$900M",     note: "Recovery rate substantially reduced as junior",       accent: true  },
      { item: "Super-Priority TL Rate",         val: "L+750bp",    note: "Including PIK option",                                accent: false },
      { item: "Chapter 11 Recovery (super-priority)", val: "~100%", note: "Received new company equity",                       accent: false },
    ],
    disclaimer: "Uptier exchange ratios are estimates based on public information. Actual contract terms are non-public.",
  },

  rationale: {
    buyer: {
      title: "Participating Lender Group Rationale",
      initials: "APO",
      bg: "bg-red-900",
      points: [
        "Exchanging existing TLB at discount into super-priority → securing superior recovery vs. junior creditors",
        "Judgment that credit agreement 'Open Market Purchase' provision provides legal basis",
        "Majority consent enables credit agreement amendment → procedural legality argument",
        "Pre-emptive positioning as company finances deteriorated under COVID-19 impact",
      ],
    },
    seller: {
      title: "Non-Consenting Creditors (Highland Capital, et al.) Rationale",
      initials: "HCP",
      bg: "bg-gray-700",
      points: [
        "Pro Rata principle violation — obligation to treat all creditors proportionally and equally",
        "'Majority' consent is permitted only for general provision amendments — seniority changes require unanimous consent",
        "Credit agreement 'Sacred Rights' provision: cannot subordinate individual creditors without their consent",
        "5th Circuit cited these arguments in ruling the transaction 'invalid' in 2024",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The Serta Simmons uptier transaction became the symbol of Lender-on-Lender Violence in the 2020 COVID crisis. While it provided short-term liquidity, the legal uncertainty imposed enormous costs on all parties, and ultimately the January 2023 Chapter 11 and the 5th Circuit's invalidity ruling in June 2024 shook the very legal foundations of uptier transactions.",
    overallVerdict: "Legal failure — 5th Circuit invalidity ruling, market-wide Serta Blocker standardization",
    positives: [
      "Short-term liquidity secured, enabling operations to continue through 2020–2022",
      "Participating creditors received new company equity in Chapter 11 proceedings, recording relatively high recovery rates",
    ],
    risks: [
      "5th Circuit ruling: entire uptier transaction invalid → participating creditors' super-priority status eliminated",
      "Non-consenting creditors bore hundreds of millions in annual legal costs",
      "Serta Blocker standardized: uptier defense provisions inserted into all subsequently issued credit agreements",
      "Securing liquidity via LME strategy does not prevent legal uncertainty from blocking new financing",
    ],
    editorNote: "The core lesson of Serta Simmons: LME strategies that exploit leveraged loan credit agreement loopholes may create short-term liquidity, but permanently damage creditor relationships and accumulate legal risk. Following the 5th Circuit ruling, the market standardized the 'Serta Blocker' provision.",
  },

  tombstone: {
    acquirerInitials: "SSB",
    acquirerBg: "bg-red-900",
    targetInitials: "TLB",
    targetBg: "bg-rose-700",
    acquirerName: "Serta Simmons Bedding",
    targetName: "Uptier Exchange",
    dealTitle: "Serta Simmons Uptier",
    dealSize: "$1.2B",
    dealSizeUSD: "$1.2bn",
    evEbitda: "N/A",
    closeDate: "June 2020",
  },

  sources: [
    { id: 1, text: "Serta Simmons (2020). Credit Agreement Amendment — Super-Priority Term Loan. June 2020." },
    { id: 2, text: "U.S. Bankruptcy Court S.D.N.Y. (2023). In re Serta Simmons Bedding, LLC. Chapter 11, January 2023." },
    { id: 3, text: "5th U.S. Circuit Court of Appeals (2024). In re Serta Simmons Bedding — Uptier Transaction Invalid. June 2024." },
    { id: 4, text: "Bloomberg Law (2020). Serta Simmons Uptier Exchange — Lender-on-Lender Violence Spreads. July 2020." },
    { id: 5, text: "Moody's (2020). Serta Simmons — Distressed Exchange Rating Action. June 2020." },
    { id: 6, text: "Wall Street Journal (2021). Serta Simmons Lawsuits: Lenders Fight Over Who Gets Paid. 2021." },
    { id: 7, text: "Harvard Law School Bankruptcy Roundtable (2024). 5th Circuit's Serta Decision: Implications for LME Transactions." },
  ],

  seo: {
    title: "Serta Simmons Uptier — Lender-on-Lender Violence & 5th Circuit Invalidity Ruling",
    description: "2020 Serta Simmons uptier exchange fully dissected. $1.2B super-priority TL issuance, $900M non-consenting creditors primed, 2024 5th Circuit invalidity ruling. LevFin covenant analysis.",
    keywords: [
      "Serta Simmons", "Uptier Exchange", "Lender-on-Lender Violence",
      "LoLV", "LME", "Pro Rata", "Serta Blocker", "5th Circuit", "Chapter 11",
      "leveraged loan", "LevFin", "syndicated loan covenants",
    ],
  },

  concepts: [
    {
      term: "Uptier Exchange",
      href: "/market-101/levfin-covenants",
      description: "A transaction in which majority creditor consent is used to issue new super-priority debt and exchange participating creditors' existing claims, thereby priming non-consenting creditors. The defining form of 'Lender-on-Lender Violence.'",
    },
    {
      term: "Pro Rata Principle",
      href: "/market-101/levfin-covenants",
      description: "The principle in syndicated loans that core rights — principal and interest receipt, collateral changes, etc. — must be applied proportionally and equally to all creditors. The central issue in the Serta case.",
    },
    {
      term: "Required Lenders (Majority Lenders)",
      href: "/market-101/levfin-covenants",
      description: "The minimum lender percentage (typically 50.1%) required to consent to general provision amendments in a credit agreement. Whether this provision could enable super-priority issuance was the central dispute in the Serta case.",
    },
    {
      term: "Sacred Rights (Unanimous Consent Provisions)",
      href: "/market-101/levfin-covenants",
      description: "Credit agreement provisions stating that changes adversely affecting individual creditors — such as maturity extensions, rate reductions, and seniority changes — require unanimous (100%) rather than majority consent.",
    },
    {
      term: "Serta Blocker",
      href: "/market-101/levfin-covenants",
      description: "A provision standardly inserted into new leveraged loan credit agreements following the 5th Circuit ruling. Explicitly prohibits uptier transactions using the 'Open Market Purchase' mechanism.",
    },
  ],

  faq: [
    {
      q: "Why is the Serta Simmons uptier transaction called 'Lender-on-Lender Violence'?",
      a: "Unlike typical creditor-vs-borrower conflicts, the Serta uptier was a structure where a majority of creditors in the same borrower's debt package sacrificed the minority. The term was coined because participating creditors (Apollo, Angelo Gordon) 'violently' seized the senior priority of non-participating creditors (Highland Capital).",
    },
    {
      q: "What was the 5th Circuit's basis for ruling the uptier transaction invalid?",
      a: "The Fifth Circuit Court of Appeals held that issuing the super-priority TL violated the credit agreement's Pro Rata provision. While majority consent can amend general provisions, changing collateral seniority in a manner that disadvantages only specific creditors is a matter requiring 'unanimous consent (Sacred Rights).'",
    },
    {
      q: "What impact has the Serta ruling had on the leveraged loan market?",
      a: "After the 2024 ruling, the 'Serta Blocker' provision has been standardly inserted into newly issued leveraged loan credit agreements. This provision explicitly prohibits uptier transactions using the 'Open Market Purchase' mechanism, substantially reducing the legal space for LME strategies.",
    },
    {
      q: "Since the uptier transaction was invalidated, did participating creditors actually suffer losses?",
      a: "The 5th Circuit ruling did not retroactively invalidate the super-priority status of participating creditors. However, the precedent for similar future transactions was destroyed, and participating creditors' bargaining power may have been weakened in the Chapter 11 proceedings. The actual economic outcome depends on the final settlement in the bankruptcy process.",
    },
  ],

  // ── LevFin Perspective Overlay ───────────────────────────────
  levfinOverview: {
    angle: "Lender-on-Lender Violence — Dissecting the Uptier That Steals Seniority Between Creditors",
    body: "The Serta Simmons uptier is a classic case showing how 'majority consent' loopholes in leveraged loan credit agreements trigger inter-creditor conflict. Participating creditors secured super-priority, but non-consenting creditors won a court ruling of invalidity. The 'Serta Blocker' provision this transaction created has since been standardly inserted into all new leveraged loans.",
    tranches: [
      {
        name: "Super-Priority TL (New)",
        amountDisplay: "$1.2B",
        rate: "SOFR+750bps (PIK option)",
        maturity: "5 years",
        seniority: "senior-secured",
        pct: 39,
        color: "bg-emerald-500",
      },
      {
        name: "Old TLB (Non-Consenting, Demoted)",
        amountDisplay: "~$0.9B",
        rate: "SOFR+350bps",
        maturity: "Remaining term",
        seniority: "subordinated",
        pct: 29,
        color: "bg-red-500",
      },
      {
        name: "2L Notes",
        amountDisplay: "~$0.5B",
        rate: "Fixed 8.0%",
        maturity: "8 years",
        seniority: "subordinated",
        pct: 16,
        color: "bg-red-700",
      },
      {
        name: "Equity (Sponsor)",
        amountDisplay: "N/A",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 16,
        color: "bg-gray-500",
      },
    ],
    metrics: [
      { label: "Uptier TL Size",              value: "$1.2B",        sub: "Super-priority",           isAlert: false },
      { label: "Non-Consenting Creditor Harm", value: "~$0.9B",      sub: "Demoted to junior",        isAlert: true  },
      { label: "5th Circuit Ruling",          value: "Invalid",      sub: "June 2024",                isAlert: true  },
      { label: "Chapter 11",                  value: "January 2023", sub: "Total debt ~$1.84B",       isAlert: true  },
    ],
    lessons: [
      {
        icon: "⚔️",
        title: "Lender-on-Lender Violence — The Collapse of Pro Rata",
        body: "When Pro Rata — the core principle of equal treatment among creditors in syndicated loans — collapses through an uptier, creditors can no longer trust their existing loan contracts. The fact that 'Serta Blockers' were inserted into all new agreements after Serta is evidence that the market recognized this danger.",
      },
      {
        icon: "⚖️",
        title: "Majority Consent vs. Unanimous Consent — The Critical Boundary",
        body: "If the boundary between what can be changed by 'majority consent' and what requires 'unanimous consent' as a Sacred Right is ambiguous in a credit agreement, legal disputes are inevitable. The 5th Circuit ruling left a clear precedent: 'collateral seniority changes require unanimous consent.'",
      },
      {
        icon: "💡",
        title: "Short-Term Liquidity vs. Long-Term Trust — The LME Dilemma",
        body: "Uptier provides short-term liquidity but damages creditor relationships and amplifies legal uncertainty. Serta Simmons bought two years with the uptier but ultimately could not avoid Chapter 11 in 2023. The true costs of LME are legal risk and a dramatic rise in future financing costs.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-covenants",
        chapterNum: "Ch.3",
        title: "Covenants & LME",
        whyRelevant: "Pro Rata provisions, Serta Blocker, Required Lenders — dissecting the new standard covenants created by the uptier",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "Distressed Loans & Restructuring",
        whyRelevant: "Chapter 11 mechanics, DIP financing, creditor litigation — bankruptcy proceedings after the uptier",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "LevFin Case Studies",
        whyRelevant: "Comparative analysis of Serta Simmons against other LoLV cases (Envision, TriMark)",
      },
    ],
  },
};

export default deal;
