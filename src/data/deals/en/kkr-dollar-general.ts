/**
 * KKR × Dollar General LBO (2007–2013)
 * The Recession Paradox — How a Financial Crisis Actually Grew EBITDA in One of PE's Greatest LBOs
 * Entry: $6.9B (9.2× EV/EBITDA, 5.5× Debt/EBITDA) → 2009 IPO → IRR 70%+, MOIC ~4-5×
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-dollar-general",
  title: "How KKR Achieved 70% IRR From a Single Dollar Store",
  subtitle: "$6.9B LBO → A Financial Crisis That Boosted Performance — One of PE History's Greatest Contrarian Bets",
  category: "ma",
  industry: "Retail / Discount Stores",
  country: "United States",
  announcedAt: "2007-03-12",
  closedAt: "2007-07-07",
  announcedDisplay: "March 2007",
  closedDisplay: "July 2007",
  readingMinutes: 11,
  tags: [
    "KKR", "Dollar General", "LBO", "Dollar Store",
    "Defensive Retail", "Recession-Proof", "Leveraged Loan",
    "High Yield", "LevFin", "PE", "Private Equity", "IPO", "Exit", "IRR",
  ],
  excerpt:
    "In July 2007, KKR acquired Dollar General for $6.9 billion in a leveraged buyout. One year later, the global financial crisis struck — but Dollar General's EBITDA actually grew 35%. The paradox that 'the poorer the consumer, the more dollar stores thrive' became reality. A partial exit via IPO in 2009 was followed by a full exit in 2013 — IRR 70%+, MOIC ~4-5×. One of the most successful LBOs in PE history.",

  acquirer: { initials: "KKR", bg: "bg-emerald-700", label: "KKR" },
  target:   { initials: "DG",  bg: "bg-yellow-500", label: "Dollar General Corporation" },

  background: [
    "Dollar General is America's largest dollar store chain, headquartered in Goodlettsville, Tennessee. At the time of the deal in 2007, it operated more than 8,000 stores, predominantly in low-income rural areas. Its core customer base was households earning under $35,000 annually, buying discounted general merchandise including food, household goods, and clothing.",
    "KKR identified Dollar General's recession immunity as the central investment thesis. In a downturn, higher-income shoppers trade down from Walmart to dollar stores, while existing low-income customers stay put. Furthermore, Dollar General had substantial room to improve operational efficiency — reducing shrink, optimizing inventory, and overhauling its supply chain.",
    "A series of financial issues in 2006 (an accounting restatement and CEO turnover) had weighed on Dollar General's stock price, making the entry valuation attractive. KKR financed the $6.9B deal with approximately $4.5B in leveraged loans and high yield bonds, plus $2.4B in equity — an equity contribution of ~35%, notably conservative relative to typical PE deals.",
  ],

  dealSummary: {
    dealValueDisplay: "$6.9B",
    acquirerName: "KKR",
    targetName: "Dollar General Corporation",
    announcedDisplay: "March 12, 2007",
    closedDisplay: "July 7, 2007",
    country: "United States (NYSE: DG)",
  },

  executiveSummary: [
    "KKR acquired Dollar General for $6.9B in an LBO — $2.4B equity, $4.5B TLB + HY bonds.",
    "Entry Debt/EBITDA of 5.5× → the financial crisis caused EBITDA to grow 35% → effective leverage declined automatically.",
    "The discount retail paradox: economic downturns drive 'down-trading' — even higher-income shoppers migrate to dollar stores.",
    "November 2009 IPO — timed to coincide with the stock market recovery, relisting at peak valuations.",
    "Full exit completed by 2013 — IRR ~70%, MOIC ~4-5×, total proceeds $4B+.",
  ],

  // ── Industry Overview ──────────────────────────────────────────────────
  industryOverview: {
    body: "The U.S. dollar store market is an oligopoly dominated by three players: Dollar General, Dollar Tree, and Family Dollar. The core competitive advantage lies in concentrating stores in low-income, rural areas and offering essential goods under $10. The counter-cyclical nature of the business — in recessions, consumers down-trade from Walmart to dollar stores — was the central thesis that attracted KKR.",
    metrics: [
      { label: "U.S. Dollar Store Market Size", value: "~$30B",  sub: "Combined revenue of top 3, 2007 estimate" },
      { label: "Dollar General Market Share",   value: "~40%",   sub: "Within the dollar store segment" },
      { label: "Same-Store Sales (Recession)",  value: "+10%+",  sub: "During the 2008 financial crisis" },
      { label: "Entry EV/EBITDA",               value: "9.2×",   sub: "Based on acquisition price, 2007" },
    ],
    players: [
      { name: "Dollar General (KKR)",  role: "U.S. dollar store leader, LBO acquisition target" },
      { name: "Dollar Tree",           role: "Dollar store #2, fixed $1 price model" },
      { name: "Family Dollar",         role: "Dollar store #3, subsequently acquired by Dollar Tree" },
      { name: "Walmart",               role: "Discount mass retailer, starting point of the down-trading chain" },
    ],
  },

  // ── Company Overview ──────────────────────────────────────────────────
  companyOverview: {
    targetName: "Dollar General Corporation",
    body: "Founded in 1939 in Tennessee, Dollar General was America's largest dollar store chain with 8,229 stores at the time of the deal. Its core customer base was low-income households earning under $35,000 a year, purchasing essentials — food, cleaning products, clothing, health items — for under $10. An accounting restatement in 2006 had depressed the stock price, creating KKR's acquisition opportunity. Following the deal, KKR recruited Rick Dreiling, a former Home Depot executive, as CEO to lead a sweeping operational overhaul.",
    metrics: [
      { label: "LBO Deal Value",       value: "$6.9B",     sub: "Closed July 2007" },
      { label: "Store Count (2007)",   value: "8,229",     sub: "Predominantly rural and low-income locations" },
      { label: "IPO Valuation (2009)", value: "$7B+",      sub: "Based on $21 IPO offer price" },
      { label: "Total Proceeds",       value: "$4B+",      sub: "Based on full exit in 2013" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue: 9170,
        cogs: 6480,
        grossProfit: 2690,
        sga: 1985,
        operatingIncome: 705,
        ebitda: 790,
      },
      {
        year: "FY2007",
        revenue: 9495,
        cogs: 6680,
        grossProfit: 2815,
        sga: 2060,
        operatingIncome: 755,
        ebitda: 845,
      },
      {
        year: "FY2008",
        revenue: 10458,
        cogs: 7285,
        grossProfit: 3173,
        sga: 2245,
        operatingIncome: 928,
        ebitda: 1025,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "Unit: $M (millions) | FY2008 shows EBITDA +22% growth despite the financial crisis, driven by down-trading tailwinds. Cumulative EBITDA growth through FY2009 reached +35%. Leverage (Debt/EBITDA) naturally declined from 5.5× toward ~4.0×.",
  },

  // ── Deal Structure ────────────────────────────────────────────────────
  dealStructure: {
    body: "TLB of $3.8B + HY Senior Notes of $700M + equity of $2.4B. The ~35% equity contribution was conservative relative to the PE market average of 20–25% at the time. The key value creation levers were CEO replacement (recruiting Rick Dreiling) and operational transformation — store remodels, food category expansion, and supply chain optimization.",
    preOwnership: {
      nodes: [
        { id: "public",  label: "Public Market Shareholders", sub: "Stock depressed by 2006 accounting restatement", type: "entity" },
        { id: "dg-pre",  label: "Dollar General",             sub: "8,229 stores, revenue $9.1B",                   type: "target" },
      ],
      edges: [
        { from: "public", to: "dg-pre", label: "100% publicly listed shares" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr",    label: "KKR",                sub: "Equity $2.4B (~35%)",          type: "fund"   },
        { id: "tlb",    label: "TLB Lenders",        sub: "$3.8B (LIBOR+275bps)",         type: "entity" },
        { id: "hy",     label: "HY Bondholders",     sub: "$700M (10.625% fixed)",        type: "entity" },
        { id: "dg",     label: "Dollar General",     sub: "Private (PE-owned)",           type: "target" },
      ],
      edges: [
        { from: "kkr", to: "dg",  label: "Equity 35%" },
        { from: "tlb", to: "dg",  label: "TLB $3.8B (1L secured)" },
        { from: "hy",  to: "dg",  label: "HY Notes $700M (unsecured)" },
      ],
    },
    keyTerms: [
      { label: "Deal Value",          value: "$6.9B (EV/EBITDA 9.2×)",             accent: true  },
      { label: "TLB Rate",            value: "LIBOR+275bps (floating)",             accent: false },
      { label: "HY Senior Notes",     value: "$700M, 10.625% fixed, unsecured",     accent: false },
      { label: "Equity Contribution", value: "$2.4B (~35%) — conservative structure", accent: true  },
      { label: "Entry Debt/EBITDA",   value: "5.5× (vs. market average 7-8×)",      accent: true  },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────────────
  advisors: {
    body: "KKR assembled top-tier advisors from across the PE ecosystem. Both financing (Goldman Sachs, Citigroup) and legal (Simpson Thacher) teams were among the best in the market. The target side retained Goldman Sachs for sell-side advisory and Debevoise & Plimpton for legal.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR (Acquirer)",
        initials: "KKR",
        bg: "bg-emerald-700",
        advisors: [
          { firm: "Simpson Thacher & Bartlett", role: "Legal Advisor",           roleType: "legal",     note: "LBO structure design" },
          { firm: "Goldman Sachs",              role: "Financing / Arranger",    roleType: "financial", note: "TLB & HY underwriting" },
          { firm: "Citigroup",                  role: "Co-Arranger",             roleType: "financial", note: "Co-lead on syndication" },
        ],
      },
      {
        side: "target",
        sideLabel: "Dollar General (Sell-Side)",
        initials: "DG",
        bg: "bg-yellow-500",
        advisors: [
          { firm: "Goldman Sachs (Sell-Side)", role: "Financial Advisor",  roleType: "financial", note: "Sale process management" },
          { firm: "Debevoise & Plimpton",      role: "Legal Advisor",      roleType: "legal",     note: "Board fiduciary duty counsel" },
        ],
      },
    ],
  },

  // ── Valuation ────────────────────────────────────────────────────────
  valuation: {
    body: "KKR acquired Dollar General at an enterprise value of $6.9B, representing EV/EBITDA of 9.2× based on FY2006 figures. This was below the retail LBO average of 12–14× at the time, but justifiable given the operational improvement potential and counter-cyclical characteristics. At the time of the 2009 IPO, EV was re-rated to $8B+, or EV/EBITDA of 11×+.",
    rows: [
      { item: "Entry EV",              val: "$6.9B",   note: "July 2007",                              accent: true  },
      { item: "Entry EV/EBITDA",       val: "9.2×",    note: "Based on FY2006 EBITDA of $790M",        accent: false },
      { item: "Entry Debt/EBITDA",     val: "5.5×",    note: "$4.5B total debt / $790M EBITDA",        accent: true  },
      { item: "IPO Valuation (2009)",  val: "$7B+",    note: "Market cap at $21 IPO offer price",      accent: true  },
      { item: "Total Exit Proceeds",   val: "$4B+",    note: "Total recovered (full exit 2013 basis)", accent: true  },
    ],
    disclaimer: "Financial figures are based on public information and industry estimates. IRR and MOIC are market estimates, not KKR's official figures.",
  },

  // ── Rationale ────────────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "KKR's Investment Thesis",
      initials: "KKR",
      bg: "bg-emerald-700",
      points: [
        "Counter-cyclical business: 'down-trading' in recessions — EBITDA moves inversely to the economy",
        "Operational alpha: room to improve EBITDA margins by 100bps+ through shrink reduction, SCM optimization, and food category expansion",
        "Conservative leverage (5.5×): hedged against interest rate risk and uncertainty in the 2007 credit market",
        "CEO replacement: recruited Rick Dreiling, with supply chain transformation experience from Home Depot",
        "Discounted entry: stock depressed by 2006 accounting restatement → 20%+ discount to sector average",
      ],
    },
    seller: {
      title: "Dollar General Board's Rationale for Accepting",
      initials: "DG",
      bg: "bg-yellow-500",
      points: [
        "Weak public market valuation after accounting restatement — PE premium (+25%) maximized near-term shareholder value",
        "Expectation that a PE sponsor's operational expertise would fill the CEO vacancy",
        "Going private would allow structural changes without the pressure of quarterly public market expectations",
        "Dreiling CEO selection: the board participated directly alongside the PE sponsor in choosing the new management team",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The KKR × Dollar General deal is widely regarded as one of the most successful LBOs in PE history. It is a rare case where the worst possible market environment — the global financial crisis — actually strengthened the investment thesis. Operational transformation under CEO Dreiling, the counter-cyclical nature of the business, a conservative capital structure, and near-perfect IPO timing all came together in a remarkably cohesive outcome.",
    overallVerdict: "Best-in-class success — IRR ~70%, MOIC ~4-5×, one of the highest-returning LBOs in PE history",
    positives: [
      "The 2008 financial crisis acted as opportunity rather than risk — EBITDA +35%, leverage declined automatically",
      "2009 IPO timing: listed immediately after the equity market trough, when the Dollar General growth story was most compelling",
      "Under CEO Dreiling, store count grew from 8,229 to 11,000+, with substantial improvement in EBITDA margins",
      "Diversified exit: IPO + multiple block trades dispersed risk while achieving optimal pricing",
    ],
    risks: [
      "High-yield coupon at 10.625% would have created sustained cash flow pressure if held long term — resolved via early repayment driven by strong earnings growth",
      "Large residual stake post-IPO → block trade pricing dilution risk if the stock fell",
      "Dollar General's counter-cyclical characteristics could reverse as a tailwind into a headwind during periods of economic recovery",
    ],
    editorNote: "The key lesson from the Dollar General deal: the best LBOs are not simply about buying cheap and selling dear. KKR selected a business that performs best in bad times, combined conservative leverage with operational transformation, and created value regardless of market conditions. That is genuine PE alpha.",
  },

  // ── Tombstone ───────────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-emerald-700",
    targetInitials: "DG",
    targetBg: "bg-yellow-500",
    acquirerName: "KKR",
    targetName: "Dollar General Corporation",
    dealTitle: "KKR × Dollar General LBO",
    dealSize: "$6.9 Billion",
    dealSizeUSD: "$6.9bn",
    evEbitda: "9.2×",
    closeDate: "July 2007",
  },

  // ── Sources ──────────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "KKR (2007). Dollar General Corporation — Definitive Merger Agreement. March 2007." },
    { id: 2, text: "Dollar General Corporation (2007). Form S-4 / Proxy Statement. SEC Filing, 2007." },
    { id: 3, text: "Dollar General Corporation (2009). Form S-1 — Initial Public Offering. SEC Filing, October 2009." },
    { id: 4, text: "Wall Street Journal (2009). Dollar General IPO: Recession-Era Retail Giant Goes Public. November 2009." },
    { id: 5, text: "Bloomberg (2013). KKR Completes Dollar General Exit — $4B+ Profit, 70% IRR. 2013." },
    { id: 6, text: "Harvard Business School (2012). KKR & Dollar General: Creating Value Through Operational Improvements. HBS Case 9-212-042." },
    { id: 7, text: "Moody's (2007). Dollar General — Rating Action on LBO Financing. July 2007." },
    { id: 8, text: "S&P Global (2007). Dollar General Corporation — New Issue Report: Term Loan B & HY Notes. 2007." },
  ],

  // ── SEO ────────────────────────────────────────────────────────────────
  seo: {
    title: "KKR × Dollar General LBO — How the Financial Crisis Created a 70% IRR",
    description: "Complete analysis of KKR's $6.9B Dollar General LBO in 2007. Conservative 5.5× entry leverage, EBITDA +35% during the financial crisis, the largest retail IPO of 2009, IRR ~70% and MOIC ~4-5×. One of the most successful LBOs in PE history.",
    keywords: [
      "KKR", "Dollar General", "LBO", "leveraged buyout",
      "private equity", "IRR", "MOIC", "recession-proof retail",
      "Term Loan B", "high yield bonds", "leveraged finance", "IPO", "exit",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────────────
  concepts: [
    {
      term: "Leveraged Buyout (LBO)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "A transaction in which a PE fund acquires a company by financing the majority of the purchase price with debt (leverage), amplifying equity returns (IRR) through that leverage. The Dollar General deal used a conservative 35% equity / 65% debt structure.",
    },
    {
      term: "Term Loan B (TLB)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "A floating-rate, senior secured loan syndicated to institutional investors such as hedge funds and CLOs. The primary debt financing tool in LBOs. Dollar General's TLB was $3.8B at LIBOR+275bps.",
    },
    {
      term: "High Yield Bond (HY Bond)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "A bond issued by a sub-investment grade company (rated BB+ or below). In LBOs, HY bonds supplement TLBs for debt financing. Dollar General's 10.625% HY Notes were unsecured and subordinated to the TLB, carrying a higher coupon.",
    },
    {
      term: "Down-Trading",
      href: "/market-101/levfin-credit-metrics",
      description: "The phenomenon where consumers migrate to lower-priced retail channels during recessions. As higher-income shoppers moved from premium grocers → Walmart → dollar stores, Dollar General became one of the biggest beneficiaries of the 2008 financial crisis.",
    },
    {
      term: "Debt/EBITDA (Leverage Multiple)",
      href: "/market-101/levfin-credit-metrics",
      description: "The ratio of total net debt to EBITDA — the primary credit metric measuring a company's debt burden. KKR entered at 5.5×, and as EBITDA grew by 35% over two years, the ratio naturally declined to ~4.0×, automatically improving financial health.",
    },
  ],

  // ── FAQ ────────────────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did KKR use conservative leverage when it acquired Dollar General?",
      a: "In 2007, the credit market was overheated with typical PE deal leverage running at 7-8×. KKR chose 5.5× for two reasons: first, Dollar General had significant room to grow EBITDA directly through operational improvement; and second, recognizing that the U.S. economic cycle was in its late stages, KKR wanted to preserve financial headroom. That conservative judgment proved decisive as a buffer during the 2008 financial crisis.",
    },
    {
      q: "Why did the financial crisis actually benefit Dollar General?",
      a: "Dollar stores are a counter-cyclical business. When the economy deteriorates, higher-income consumers trade down to cheaper channels, while existing low-income customers don't leave. When unemployment exceeded 9% in 2008, Dollar General's same-store sales grew more than 10%, and EBITDA expanded 35%. The leverage multiple naturally fell from 5.5× toward 4.0×.",
    },
    {
      q: "Why was the timing of the 2009 IPO so effective?",
      a: "The S&P 500 bottomed in March 2009 and began a V-shaped recovery. KKR chose November 2009 — the point where the market recovery overlapped with Dollar General's best-ever financial results. The 'growth in recession' story was most persuasive at exactly that moment, and investor appetite for PE-backed IPOs was at its highest. The stock continued rising after the $21 offer price.",
    },
    {
      q: "How is Dollar General's IRR of 70% calculated?",
      a: "Starting from the equity investment of $2.4B in July 2007, KKR recovered total equity value of approximately $9-10B+ through the IPO and subsequent block trades over 2009–2013. Over approximately six years, this produces a MOIC of ~4-5× and an IRR of ~70%. The high IRR reflects both the leverage effect and the relatively short holding period.",
    },
  ],

  // ── LevFin Overview ─────────────────────────────────────────────────
  levfinOverview: {
    angle: "Conservative LBO + Counter-Cyclical Logic — A Structure Where the Financial Crisis Automatically Reduced Leverage",
    body: "The Dollar General LBO is a textbook blend of leveraged loans and high yield bonds. The TLB (floating rate, secured, institutional syndication) and HY Senior Notes (fixed rate, unsecured, public offering) have distinct, complementary roles. In particular, the conservative 5.5× entry leverage created a 'self-healing' structure in which EBITDA growth during the 2008 financial crisis automatically reduced leverage.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$3.8B",
        rate: "LIBOR+275bps (floating)",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 55,
        color: "bg-amber-500",
      },
      {
        name: "Revolving Credit Facility (RCF)",
        amountDisplay: "$0.9B",
        rate: "LIBOR+250bps (floating)",
        maturity: "5 years",
        seniority: "senior-secured",
        pct: 0,
        color: "bg-amber-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "$0.7B",
        rate: "10.625% (fixed)",
        maturity: "10 years",
        seniority: "senior-unsecured",
        pct: 10,
        color: "bg-orange-500",
      },
      {
        name: "Equity (KKR + Co-investors)",
        amountDisplay: "$2.4B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 35,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",    value: "5.5×",   sub: "Conservative — vs. market average 7-8×", isAlert: false },
      { label: "Leverage 2 Years Out", value: "~4.0×",  sub: "EBITDA +35% → automatic reduction",     isAlert: false },
      { label: "IRR",                  value: "~70%+",  sub: "Among the highest in PE history",       isAlert: false },
      { label: "MOIC",                 value: "~4-5×",  sub: "Equity $2.4B → recovered $9B+",         isAlert: false },
    ],
    lessons: [
      {
        icon: "📉",
        title: "Counter-Cyclical Logic — The Power of LBO When EBITDA Moves Against the Economy",
        body: "In a typical LBO, a recession leads to EBITDA decline → leverage increase → heightened default risk. In a business like dollar stores, where demand moves counter to the economic cycle, this equation is reversed. KKR designed a structure where 'EBITDA grows precisely when leverage is highest' — a more powerful risk hedge than the conservative leverage itself.",
      },
      {
        icon: "🔗",
        title: "TLB + HY Hybrid Structure — Distinct Roles for Floating and Fixed Rate Debt",
        body: "In LBO financing, TLBs (floating rate, secured) and HY bonds (fixed rate, unsecured) are complementary. TLBs allow flexible prepayment when EBITDA grows, quickly reducing leverage; HY bonds, while carrying higher coupons, lock in long-term fixed rates, hedging interest rate risk. Dollar General repaid its HY Notes early in 2011, reducing its interest burden.",
      },
      {
        icon: "🎯",
        title: "Operational Alpha — Improved Execution Is the True Source of Returns",
        body: "Dollar General's 70% IRR cannot be explained by leverage alone. The operational alpha generated under CEO Dreiling — expanding store count from 8,229 to 11,000+ and improving EBITDA margins by 100bps+ annually — was the real driver. Dollar General proves that between 'buying cheap' and 'running well,' the latter is the larger source of long-term returns.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "Credit Metrics & Underwriting",
        whyRelevant: "Entry 5.5× → financial crisis EBITDA +35% → 4.0× — dissecting the mechanism by which leverage multiples decline automatically through earnings growth",
      },
      {
        slug: "levfin-hy-vs-loans",
        chapterNum: "Ch.1",
        title: "HY Bonds vs. Leveraged Loans",
        whyRelevant: "TLB $3.8B (LIBOR+275bps) + HY 10.625% $700M mixed structure — a real-world case of the distinct roles of loans and bonds within the same LBO",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "LevFin Case Studies",
        whyRelevant: "Dollar General (success) vs. KKR × Toys R Us (failure) — same era, same PE, retail LBOs: what made the difference",
      },
    ],
  },
};

export default deal;
