/**
 * Blackstone × Hilton Hotels (2007–2018)
 * The Greatest Hotel LBO Ever — A Masterclass in Real Asset Value and Operational Improvement
 * Entry $26B → 2013 IPO → 2018 Full Exit — IRR ~16.7%, MOIC ~2.6×
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "blackstone-hilton-2007",
  title: "How Blackstone Made Hilton the Greatest Hotel LBO in History",
  subtitle: "$26B LBO → Surviving the Financial Crisis → IRR 16.7%, MOIC 2.6× — The Power of Operational Alpha and Real Assets",
  category: "ma",
  industry: "Hotels / Real Estate",
  country: "United States",
  announcedAt: "2007-07-03",
  closedAt: "2007-10-24",
  announcedDisplay: "July 2007",
  closedDisplay: "October 2007",
  readingMinutes: 12,
  tags: [
    "Blackstone", "Hilton", "LBO", "hotels", "real estate",
    "CMBS", "leveraged loan", "LevFin", "PE", "private equity", "IPO", "exit", "IRR",
    "operational alpha", "RevPAR", "Hilton Honors",
  ],
  excerpt:
    "In October 2007, Blackstone acquired Hilton Hotels for $26 billion in a leveraged buyout. The financial crisis immediately devastated the hotel industry, but Blackstone recruited Christopher Nassetta as CEO and executed a sweeping operational overhaul. Following the largest hotel IPO in history in 2013 and a full exit in 2018 — IRR ~16.7%, MOIC ~2.6×. A textbook success story of how management transformation creates value in a real asset-backed LBO.",

  acquirer: { initials: "BX", bg: "bg-gray-800", label: "Blackstone Group" },
  target:   { initials: "HLT", bg: "bg-yellow-600", label: "Hilton Hotels Corporation" },

  background: [
    "Founded in 1919, Hilton Hotels Corporation was one of the world's largest hotel chains, operating more than 3,000 hotels across 10 brands — Hilton, Doubletree, Embassy Suites, Hampton Inn, and others — at the time of the deal in 2007. However, the company had been slow to transition from an asset-heavy strategy (owning properties outright) to an asset-light model.",
    "Blackstone identified Hilton's extensive hotel real estate portfolio (~$18B) as a foundation for raising large-scale CMBS and TLB financing against hard collateral. Additionally, the global hotel market was in a growth phase on RevPAR (Revenue Per Available Room), and Hilton's operational efficiency lagged Marriott — leaving clear room for improvement.",
    "Blackstone had already identified Christopher Nassetta, a veteran of Host Hotels, as the incoming CEO and entered the deal with a detailed operational transformation blueprint. The $26B EV, at EV/EBITDA of 15.8×, was above the hotel sector average of 12–13× at the time, but Blackstone judged it justifiable on the basis of real estate revaluation and operational improvement potential.",
  ],

  dealSummary: {
    dealValueDisplay: "$26B",
    acquirerName: "Blackstone Group",
    targetName: "Hilton Hotels Corporation",
    announcedDisplay: "July 3, 2007",
    closedDisplay: "October 24, 2007",
    country: "United States (NYSE: HOT → private → NYSE: HLT)",
  },

  executiveSummary: [
    "Blackstone acquired Hilton Hotels for $26B (EV/EBITDA 15.8×) — $5.7B equity, $20.5B debt.",
    "Direct hit from the 2008 financial crisis — RevPAR -25%, hotel asset values plunged. But Blackstone negotiated with lenders and held on without restructuring.",
    "Under CEO Nassetta: RevPAR surpassed competitors, Hilton Honors grew to 45M members — the world's largest hotel loyalty program.",
    "December 2013 IPO — the largest hotel IPO in history ($2.35B offering), with Blackstone retaining 76% of shares.",
    "Full exit completed 2018 — IRR ~16.7%, MOIC ~2.6×. One of Blackstone's most profitable deals ever.",
  ],

  industryOverview: {
    body: "The global hotel and lodging market is a cyclically sensitive asset class in which RevPAR (Revenue Per Available Room) is the defining performance metric. The mid-2000s was a golden era for U.S. hotel industry fundamentals, with demand growing against contained supply. Hotel companies were in the process of transitioning from asset-heavy (owning properties) to asset-light (franchise and management contracts), and the ability to raise large-scale CMBS against substantial real estate assets made the sector attractive to PE buyers.",
    metrics: [
      { label: "Global Hotel Market Size",       value: "~$700B", sub: "2007 estimate" },
      { label: "U.S. RevPAR Growth",             value: "+6.8%",  sub: "2006 basis" },
      { label: "Entry EV/EBITDA",                value: "15.8×",  sub: "Premium vs. 2007 sector average 12–13×" },
      { label: "Hilton Honors Members (at exit)", value: "45M+",  sub: "2018 basis, world's largest hotel loyalty program" },
    ],
    players: [
      { name: "Hilton (Blackstone)",      role: "World's largest hotel group, LBO acquisition target" },
      { name: "Marriott International",  role: "Competitor #1, RevPAR benchmark for Hilton" },
      { name: "Starwood Hotels",         role: "W, Westin, Sheraton brands; upscale market competitor" },
      { name: "IHG (InterContinental)",  role: "European hotel group; U.S. market competition" },
    ],
  },

  companyOverview: {
    targetName: "Hilton Hotels Corporation",
    body: "Founded by Conrad Hilton in 1919, the global hotel group operated more than 2,800 hotels and 480,000+ rooms across 10 brands in 2007. The brand portfolio — Hilton, Doubletree, Embassy Suites, Hampton Inn, Hilton Garden Inn — covered a wide range of price points, but a high share of owned (vs. franchised) hotels had slowed the asset-light transition. At acquisition, RevPAR lagged Marriott by 7%, and the Hilton Honors loyalty program membership was also below competitors.",
    metrics: [
      { label: "LBO Deal Value",           value: "$26B",     sub: "Closed October 2007" },
      { label: "Brand Count (at acquisition)", value: "10",  sub: "Hilton, Hampton, DoubleTree, etc." },
      { label: "IPO Market Cap (2013)",    value: "$19.7B",   sub: "Based on $20/share offer price" },
      { label: "Total Exit Proceeds",      value: "~$14.8B",  sub: "Equity basis; total $26B+ recovered" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue: 7930,
        cogs: 5210,
        grossProfit: 2720,
        sga: 1080,
        operatingIncome: 1640,
        ebitda: 1640,
      },
      {
        year: "FY2007",
        revenue: 8162,
        cogs: 5355,
        grossProfit: 2807,
        sga: 1090,
        operatingIncome: 1717,
        ebitda: 1717,
      },
      {
        year: "FY2010",
        revenue: 8975,
        cogs: 5760,
        grossProfit: 3215,
        sga: 1090,
        operatingIncome: 2125,
        ebitda: 2125,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "Unit: $M (millions) | FY2010 reflects RevPAR recovery after the financial crisis. EBITDA growth gradually relieved the leverage burden. Hotel asset values also recovered in tandem.",
  },

  dealStructure: {
    body: "Asset-backed structure using hotel real estate ($18B+) as collateral for $5.0B CMBS and $14.8B TLB. $5.7B equity (~22%) supports the full $26B EV. A hotel LBO-specific blend of CMBS + TLB.",
    preOwnership: {
      nodes: [
        { id: "public",  label: "Public Market Shareholders", sub: "NYSE: HOT, dispersed ownership",        type: "entity" },
        { id: "hilton",  label: "Hilton Hotels",             sub: "2,800+ hotels, 10 brands",             type: "target" },
      ],
      edges: [
        { from: "public", to: "hilton", label: "100% publicly listed shares" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bx",      label: "Blackstone",       sub: "Equity $5.7B (~22%)",             type: "fund"   },
        { id: "tlb",     label: "TLB Lenders",      sub: "$14.8B (L+300bps, 1L secured)",   type: "entity" },
        { id: "cmbs",    label: "CMBS Investors",   sub: "$5.0B (hotel real estate backed)", type: "entity" },
        { id: "hy",      label: "HY Bondholders",   sub: "$1.5B (8.875% unsecured)",        type: "entity" },
        { id: "hilton2", label: "Hilton Hotels",    sub: "Private (Blackstone-owned)",       type: "target" },
      ],
      edges: [
        { from: "bx",   to: "hilton2", label: "Equity 22%" },
        { from: "tlb",  to: "hilton2", label: "TLB $14.8B (1L)" },
        { from: "cmbs", to: "hilton2", label: "CMBS $5.0B (real estate secured)" },
        { from: "hy",   to: "hilton2", label: "HY Notes $1.5B (unsecured)" },
      ],
    },
    keyTerms: [
      { label: "Deal Value",           value: "$26B (EV/EBITDA 15.8×)",              accent: true  },
      { label: "TLB Rate",             value: "LIBOR+300bps (floating, first lien)", accent: false },
      { label: "CMBS",                 value: "$5.0B (hotel real estate mortgage)",  accent: true  },
      { label: "HY Senior Notes",      value: "$1.5B, 8.875% fixed",                accent: false },
      { label: "Equity Contribution",  value: "$5.7B (~22%) — highly leveraged structure", accent: true },
    ],
  },

  advisors: {
    body: "Blackstone assembled Goldman Sachs, Deutsche Bank, Bear Stearns, and other top Wall Street arrangers. The Hilton board ran a competitive auction process managed by Lazard.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Blackstone (Acquirer)",
        initials: "BX",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Simpson Thacher & Bartlett", role: "Legal Advisor",      roleType: "legal",     note: "LBO structure design" },
          { firm: "Goldman Sachs",              role: "Lead Arranger",      roleType: "financial", note: "TLB & HY co-lead" },
          { firm: "Deutsche Bank",              role: "Co-Arranger",        roleType: "financial", note: "CMBS structuring" },
          { firm: "Bear Stearns",               role: "Co-Arranger",        roleType: "financial", note: "Syndication co-lead" },
        ],
      },
      {
        side: "target",
        sideLabel: "Hilton Hotels (Sell-Side)",
        initials: "HLT",
        bg: "bg-yellow-600",
        advisors: [
          { firm: "Lazard",         role: "Financial Advisor", roleType: "financial", note: "Competitive auction process management" },
          { firm: "Skadden Arps",   role: "Legal Advisor",     roleType: "legal",     note: "Board M&A counsel" },
        ],
      },
    ],
  },

  valuation: {
    body: "Blackstone justified the premium EV/EBITDA of 15.8× on the basis of hotel real estate asset revaluation and a RevPAR improvement thesis. At exit, the EV/EBITDA multiple was approximately 14× — a multiple contraction — but EBITDA tripling over the holding period more than offset it.",
    rows: [
      { item: "Entry EV",              val: "$26.0B",   note: "October 2007",                      accent: true  },
      { item: "Entry EV/EBITDA",       val: "15.8×",    note: "Based on FY2006 EBITDA of $1.64B",  accent: false },
      { item: "Entry Debt/EBITDA",     val: "~12×",     note: "Key risk factor immediately post-GFC", accent: true },
      { item: "Exit Market Cap (2018)", val: "~$30B",   note: "At full exit basis",                 accent: true  },
      { item: "Estimated Equity Recovered", val: "~$14.8B", note: "IPO + block trade combined",   accent: false },
    ],
    disclaimer: "IRR and MOIC are market estimates, not Blackstone's official figures. Includes hotel real estate asset revaluation.",
  },

  rationale: {
    buyer: {
      title: "Blackstone's Investment Rationale",
      initials: "BX",
      bg: "bg-gray-800",
      points: [
        "Hotel real estate $18B+ — asset base enabling large-scale leverage via CMBS and TLB against hard collateral",
        "RevPAR gap: Hilton lagging Marriott by 7% — clear room for operational improvement",
        "Hilton Honors: below competitors — rebuilding would significantly increase direct booking rates",
        "CEO already identified: Christopher Nassetta (from Host Hotels) recruited before close — execution certainty secured",
        "Global expansion: new market entry in Asia and the Middle East to grow franchise fee revenue",
      ],
    },
    seller: {
      title: "Hilton Board's Rationale for Accepting",
      initials: "HLT",
      bg: "bg-yellow-600",
      points: [
        "40% premium to the unaffected stock price ($47.50/share) — shareholder value maximization",
        "Going private allows operational transformation (CEO change, restructuring) without quarterly earnings pressure",
        "Blackstone's real estate expertise: expectation of optimizing the physical property portfolio",
        "International expansion support through Blackstone's global PE network",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Blackstone × Hilton is widely regarded as the most successful hotel LBO in PE history. Facing the worst possible market conditions — the 2008 financial crisis — immediately after closing, Blackstone navigated through via a combination of aggressive operational improvement and skillful lender management, ultimately achieving a full recovery. From the 2013 IPO to the 2018 full exit, the deal generated IRR ~16.7% and MOIC ~2.6×, making it one of Blackstone's highest-earning transactions ever.",
    overallVerdict: "The greatest hotel LBO ever — a perfect combination of operational alpha and real estate value recovery",
    positives: [
      "Under CEO Nassetta, RevPAR reversed its 7% deficit vs. Marriott to outperform",
      "Hilton Honors membership grew 3×+ vs. at acquisition → improved direct booking rates reduced OTA commission costs",
      "Asset-light transition: sale of owned hotels + shift to franchise and management contracts improved EBITDA margins",
      "December 2013 IPO — $20 offer price, $19.7B market cap. Set the record for the largest hotel IPO in history",
    ],
    risks: [
      "Immediate RevPAR -25% and hotel asset value plunge from the 2008 financial crisis → real LTV deteriorated significantly",
      "High entry leverage (Debt/EBITDA ~12×) substantially weakened financial resilience through the GFC",
      "CMBS refinancing risk at maturity — the CMBS market was effectively frozen during the financial crisis",
    ],
    editorNote: "The Hilton case's key lesson: even excessive leverage (Debt/EBITDA ~12×) can be overcome if ① collateral asset values are sufficient, ② lender relationship management is well executed, and ③ operational improvement grows EBITDA through the recovery. Blackstone weathered the worst period through lender persuasion and a decisive CEO appointment.",
  },

  tombstone: {
    acquirerInitials: "BX",
    acquirerBg: "bg-gray-800",
    targetInitials: "HLT",
    targetBg: "bg-yellow-600",
    acquirerName: "Blackstone Group",
    targetName: "Hilton Hotels Corporation",
    dealTitle: "Blackstone × Hilton LBO",
    dealSize: "$26 Billion",
    dealSizeUSD: "$26bn",
    evEbitda: "15.8×",
    closeDate: "October 2007",
  },

  sources: [
    { id: 1, text: "Blackstone Group (2007). Hilton Hotels Corporation — Merger Agreement. July 2007." },
    { id: 2, text: "Hilton Hotels Corporation (2007). Proxy Statement — Special Meeting of Stockholders. SEC Filing." },
    { id: 3, text: "Hilton Worldwide Holdings (2013). Form S-1 — Initial Public Offering. NYSE: HLT. October 2013." },
    { id: 4, text: "Wall Street Journal (2018). Blackstone Completes Sale of Hilton Stake, Booking $14 Billion Profit. May 2018." },
    { id: 5, text: "Bloomberg (2018). Blackstone's Hilton Investment Becomes Most Profitable PE Hotel Deal in History." },
    { id: 6, text: "Harvard Business School (2014). Blackstone and Hilton Worldwide. HBS Case 9-814-031." },
    { id: 7, text: "Moody's (2007). Hilton Hotels Corporation — Rating Action on LBO Debt. October 2007." },
    { id: 8, text: "STR Global (2014). US Hotel Industry RevPAR Report 2008–2013." },
  ],

  seo: {
    title: "Blackstone × Hilton LBO — Complete Analysis of the Greatest Hotel PE Deal at IRR 16.7%",
    description: "Full analysis of Blackstone's $26B Hilton Hotels LBO in 2007. Entry at 15.8×, surviving the financial crisis, Nassetta CEO operational transformation, the largest hotel IPO in history in 2013, IRR ~16.7% and MOIC ~2.6×.",
    keywords: [
      "Blackstone", "Hilton", "LBO", "hotels", "CMBS",
      "leveraged loan", "PE", "private equity", "IRR", "MOIC", "RevPAR",
      "operational alpha", "Christopher Nassetta", "Hilton Honors",
    ],
  },

  concepts: [
    {
      term: "CMBS (Commercial Mortgage-Backed Securities)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "A securitization product backed by mortgages on commercial real estate (hotels, offices, shopping centers). In LBOs of asset-heavy companies, CMBS is raised in parallel with TLBs. In Hilton's case, $5.0B in CMBS was issued against $18B+ in hotel real estate collateral.",
    },
    {
      term: "RevPAR (Revenue Per Available Room)",
      href: "/market-101/levfin-credit-metrics",
      description: "The core performance metric for the hotel industry, calculated as occupancy rate × average daily rate (ADR). In an LBO investment thesis, RevPAR improvement is the primary lever driving EBITDA growth.",
    },
    {
      term: "Asset-Light Strategy",
      href: "/deal-101/lbo-overview",
      description: "A strategy in which hotel and restaurant chains transition from directly owning real estate to operating via franchises and management contracts. Capital efficiency improves and losses in economic downturns are shared with franchisees. A core strategy Blackstone executed at Hilton.",
    },
    {
      term: "Management Incentive Pool (MIP)",
      href: "/deal-101/lbo-overview",
      description: "A structure in PE buyouts that allocates a portion of exit proceeds to management, aligning their incentives with those of the PE sponsor. Hilton CEO Nassetta received hundreds of millions in compensation at the time of the 2018 exit via MIP.",
    },
    {
      term: "Exit Multiple",
      href: "/deal-101/lbo-returns",
      description: "The EV/EBITDA multiple at which a PE firm sells its stake. A higher exit multiple than entry creates Multiple Expansion (amplifying returns); a lower one creates Contraction. Hilton experienced contraction from entry 15.8× to exit ~14×, but EBITDA tripling over the period more than offset it.",
    },
  ],

  faq: [
    {
      q: "Why did Blackstone avoid bankruptcy at Hilton despite the financial crisis?",
      a: "Three factors were decisive. First, the hotel real estate portfolio ($18B+) functioned as the ultimate collateral. Second, Blackstone negotiated proactively with lenders to secure CMBS maturity extensions and TLB covenant relief. Third, under CEO Nassetta, cost reductions and RevPAR improvement continued through 2009–2010, maintaining enough EBITDA to cover interest even through the downturn.",
    },
    {
      q: "Why did the Hilton IPO happen in 2013 rather than 2009?",
      a: "In 2009–2011, the hotel industry recovery was still in progress and RevPAR had not yet reached its peak. Blackstone chose 2013 — the moment when ① RevPAR had overtaken Marriott, ② Hilton Honors membership had substantially grown, and ③ the asset-light transition had become visible — as the optimal IPO timing. This 'complete the growth story first' exit strategy enabled the highest achievable IPO price.",
    },
    {
      q: "How did CMBS and TLB play different roles in the Hilton LBO?",
      a: "TLBs are floating-rate loans secured against the company's (Hilton entity's) cash flows, syndicated primarily to institutional investors such as CLOs and hedge funds. CMBS are securitization products backed by individual hotel properties, and where real estate values are sufficient, they can be raised at lower rates. In a hotel LBO with a large real estate portfolio like Hilton, CMBS reduces TLB dependency and lowers the overall cost of debt.",
    },
    {
      q: "Why is Blackstone's Hilton MOIC of 2.6× and IRR of 16.7% considered 'greatest ever' when the numbers seem modest?",
      a: "Two contexts matter. First, the equity invested was $5.7B and the recovery was ~$14.8B — absolute profit of $9B+. Second, this outcome was achieved over an 11-year holding period that included the worst market environment in a generation. Given that the average IRR for 2005–2007 vintage LBOs was 5–8%, Hilton's 16.7% is overwhelming by comparison. Dollar General's 70% IRR was over six years; Hilton's 16.7% was over eleven.",
    },
  ],

  // ── LevFin Overview ─────────────────────────────────────────────────
  levfinOverview: {
    angle: "Real Asset-Backed LBO — How CMBS + TLB Made High Leverage Possible",
    body: "The Hilton LBO combined $5.0B in CMBS and $14.8B in TLB against hotel real estate collateral. While a typical corporate LBO is limited to 5–7× EBITDA leverage, the abundance of real assets in a hotel LBO enabled 12× leverage. The case — where GFC caused RevPAR -25%, asset values plunged, CMBS refinancing risk materialized, lender negotiations resolved the crisis — illustrates both faces of real asset-backed LBOs.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$14.8B",
        rate: "LIBOR+300bps (floating)",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 57,
        color: "bg-yellow-500",
      },
      {
        name: "CMBS (Hotel Real Estate Backed)",
        amountDisplay: "$5.0B",
        rate: "LIBOR+175bps (floating)",
        maturity: "5 years",
        seniority: "senior-secured",
        pct: 19,
        color: "bg-amber-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "$1.5B",
        rate: "8.875% (fixed)",
        maturity: "10 years",
        seniority: "senior-unsecured",
        pct: 6,
        color: "bg-orange-500",
      },
      {
        name: "Equity (Blackstone)",
        amountDisplay: "$5.7B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 22,
        color: "bg-gray-600",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",  value: "~12×",    sub: "High leverage enabled by asset collateral",   isAlert: true  },
      { label: "EBITDA Growth",      value: "3×+",     sub: "2007→2017, operational alpha",                isAlert: false },
      { label: "IRR",                value: "~16.7%",  sub: "11-year hold, 2007–2018",                     isAlert: false },
      { label: "MOIC",               value: "~2.6×",   sub: "Absolute profit $9B+",                        isAlert: false },
    ],
    lessons: [
      {
        icon: "🏨",
        title: "Real Assets = Leverage Expansion Engine — The Role of CMBS",
        body: "In a typical corporate LBO, the collateral is 'future cash flows (EBITDA).' In a hotel LBO, 'current real estate asset values' function as additional collateral. CMBS allowed Blackstone to raise leverage beyond the TLB at lower rates — enabling Blackstone to complete the $26B EV deal with only $5.7B in equity.",
      },
      {
        icon: "👔",
        title: "CEO Selection Determines LBO Success or Failure",
        body: "Blackstone had already identified CEO Nassetta before deal close. During his tenure, RevPAR overtook Marriott and Hilton Honors became the world's largest hotel loyalty program. Hilton demonstrates that in LBOs, 'management replacement' is not optional — it is a core lever of value creation.",
      },
      {
        icon: "📉",
        title: "High Leverage Survival Equation — Lender Relationship Management",
        body: "Debt/EBITDA ~12× appeared impossible to survive through the GFC, but Blackstone's relationships with lenders enabled CMBS maturity extensions and TLB covenant relief. PE's broad institutional investor network and negotiating leverage played a decisive role in averting bankruptcy.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-capital-structure",
        chapterNum: "Ch.1",
        title: "LBO Capital Structure Anatomy",
        whyRelevant: "CMBS $5.0B + TLB $14.8B hybrid structure — the textbook for high-leverage LBOs backed by real assets",
      },
      {
        slug: "lbo-returns",
        chapterNum: "Ch.2",
        title: "LBO Returns Analysis",
        whyRelevant: "EBITDA tripling + 11-year hold — decomposing the return drivers behind IRR 16.7%, MOIC 2.6×",
      },
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "The Essence of LBO",
        whyRelevant: "Hilton vs. TXU — a stark contrast of success and failure in two LBOs executed in the same year (2007)",
      },
    ],
  },
};

export default deal;
