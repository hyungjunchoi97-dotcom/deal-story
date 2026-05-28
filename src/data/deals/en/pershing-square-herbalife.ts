import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "pershing-square-herbalife",
  title: "Pershing Square vs. Herbalife — The Greatest Activist Short War in History, Six Years of Pyramid Debate",
  subtitle: "Bill Ackman Activist Short Selling · Carl Icahn Long Position · FTC Investigation · Public Hedge Fund War",
  category: "activism",
  industry: "Health, Nutrition & MLM",
  country: "United States",
  announcedAt: "2012-12-20",
  closedAt: "2018-03-01",
  announcedDisplay: "December 2012",
  closedDisplay: "March 2018",
  readingMinutes: 14,
  tags: [
    "Pershing Square",
    "Herbalife",
    "Bill Ackman",
    "Carl Icahn",
    "activist short selling",
    "pyramid scheme",
    "FTC",
    "short squeeze",
    "public hedge fund war",
    "MLM",
  ],
  excerpt:
    "Bill Ackman declared Herbalife a 'pyramid scheme' and took an approximately $1B short position. Carl Icahn immediately countered with a 23% long position on the opposing side. After six years of battle, the FTC imposed a $200M fine but declined to call it a pyramid scheme. Ackman closed his position in 2018 with approximately $1B in losses; Icahn walked away with $1B+ in gains.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "PS", bg: "bg-slate-700", label: "Pershing Square" },
  target:   { initials: "HLF", bg: "bg-orange-600", label: "Herbalife" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Herbalife (HLF) is a global nutritional supplement company founded in 1980 that sells through a multi-level marketing (MLM) distribution model. With over 800,000 independent distributors, it had grown into one of the largest MLM companies in the world, surpassing $4 billion in annual revenue by 2012. However, persistent allegations had been raised that a significant portion of its earnings came not from product sales but from recruiting new distributors.",
    "Bill Ackman is the founder and CEO of Pershing Square Capital Management. Having built his reputation through successful activist investments at CP Rail, General Growth Properties, and others, he began a deep investigation into Herbalife's business model in the second half of 2012.",
    "On December 20, 2012, Ackman held a three-hour investor presentation in Manhattan, declaring that Herbalife was a pyramid scheme and publicly disclosing an approximately $1B (9.8 million shares) short position. He asserted that the FTC would ultimately rule Herbalife a pyramid scheme, causing the company to collapse, and set a target price of $0.",
    "On January 25, 2013, Carl Icahn appeared on CNBC, mocking Ackman as a 'crybaby' and revealing he had been accumulating Herbalife shares and was long. An unprecedented public hedge fund war began, with two Wall Street titans clashing in real time on television. Icahn ultimately expanded his Herbalife stake to approximately 23%.",
    "From 2013 to 2015, Ackman deployed hundreds of millions of dollars in congressional lobbying, FTC investigation petitions, community organizing, and research report distribution in a comprehensive short-selling campaign. During this period, Herbalife's stock swung between extremes of $24 and $83.",
    "In March 2014, the FTC opened a formal investigation into Herbalife. While it appeared to validate Ackman's thesis, the FTC ultimately concluded in July 2016 with a consent order imposing a $200M fine and operational restrictions — critically, without declaring Herbalife a pyramid scheme.",
    "Between February and March 2018, Bill Ackman closed his entire short position after six years. Estimated losses: approximately $1B. By contrast, Carl Icahn's estimated gains on his long position exceeded $1B. This deal was recorded as a historic case study that simultaneously exposed both the limits and possibilities of activist short selling.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Approximately $1B short position (initial)",
    acquirerName: "Pershing Square (Bill Ackman)",
    targetName: "Herbalife Ltd. (HLF)",
    announcedDisplay: "December 2012",
    closedDisplay: "March 2018",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "December 2012: Bill Ackman declared Herbalife a pyramid scheme in a 3-hour presentation and publicly disclosed an approximately $1B short position.",
    "January 2013: Carl Icahn appeared on CNBC — called Ackman a 'crybaby' and declared a long position in Herbalife. Ultimately accumulated ~23% stake.",
    "2013–2015: Ackman deployed a multi-hundred-million-dollar campaign of lobbying, investigations, and FTC petitions. The FTC opened a formal investigation in 2014. HLF stock experienced extreme volatility between $24 and $83.",
    "July 2016: FTC reached a $200M consent order — no pyramid ruling. Ackman's core thesis legally failed.",
    "March 2018: Ackman closed his entire short position; estimated loss ~$1B. Icahn's estimated gain: $1B+. Six-year war concluded.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "Multi-level marketing (MLM) is a direct-selling model in which products are sold through a network of independent distributors. Legitimate MLM generates income from actual product sales; pyramid schemes primarily depend on commissions from recruiting new distributors. Global MLM companies such as Herbalife, Amway, and Nu Skin are perpetually exposed to legal challenges along this line. The global MLM market was approximately $167 billion in 2012, with nutritional supplements and skincare as the dominant categories.",
    metrics: [
      { label: "Global MLM market size (2012)",     value: "~$167B",    sub: "5–7% annual growth rate" },
      { label: "Herbalife distributors",             value: "800,000+",  sub: "Worldwide as of 2012" },
      { label: "Ackman short position size",         value: "~$1B",      sub: "9.8 million shares, December 2012" },
      { label: "FTC consent order fine (2016)",      value: "$200M",     sub: "No pyramid ruling" },
    ],
    subBody:
      "The FTC's Herbalife investigation became a watershed moment for MLM industry regulation. The 2016 consent order included a structural reform mandate requiring Herbalife to increase the proportion of sales to actual retail consumers relative to distributor recruitment. This case contributed to clarifying the legal line between legitimate MLM and pyramid schemes.",
    players: [
      { name: "Bill Ackman / Pershing Square",          role: "Activist short seller — $1B short, declared Herbalife a pyramid scheme" },
      { name: "Carl Icahn / Icahn Enterprises",          role: "23% long position — opposing Ackman, driving short squeeze pressure" },
      { name: "George Soros / Soros Fund Management",    role: "~4.9% long entry, joined Icahn's side" },
      { name: "FTC (Federal Trade Commission)",          role: "Opened investigation in 2014 → $200M consent order in 2016, no pyramid ruling" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Herbalife Ltd. (HLF)",
    body: "Herbalife is a global MLM nutritional supplement company founded in 1980 by Mark Hughes. It sells protein shakes, vitamins, and weight management products through more than 800,000 independent distributors in over 90 countries. As of 2012, it had become a major company with annual revenue exceeding $4 billion. Distributors either sell products directly to consumers or recruit downstream distributors to earn commissions. Ackman argued this commission structure was core evidence of a pyramid scheme; Herbalife maintained it was a legitimate nutritional products company.",
    metrics: [
      { label: "Founded",                               value: "1980",         sub: "Founder: Mark Hughes" },
      { label: "Distributors (2012)",                   value: "800,000+",     sub: "90+ countries worldwide" },
      { label: "Annual revenue (FY2012)",               value: "$4.07B",       sub: "Five consecutive years of growth" },
      { label: "Operating margin (FY2012)",             value: "~13.8%",       sub: "Stable earnings structure" },
      { label: "Stock price (before Ackman's short)",   value: "~$45",         sub: "December 2012" },
      { label: "Peak price (post-Icahn accumulation)",  value: "~$83",         sub: "Short squeeze period" },
    ],
    financials: [
      { year: "FY2012", revenue: 4072, cogs: 830, grossProfit: 3242, sga: 2680, operatingIncome: 562, ebitda: 680 },
      { year: "FY2015", revenue: 4469, cogs: 897, grossProfit: 3572, sga: 2940, operatingIncome: 632, ebitda: 770 },
      { year: "FY2017", revenue: 4428, cogs: 891, grossProfit: 3537, sga: 2920, operatingIncome: 617, ebitda: 758 },
    ],
    financialsNote: "Unit: $M (millions) | Source: Herbalife Annual Reports (10-K). FY2015 figures reflect the period during the FTC investigation; FY2017 reflects one year after the FTC consent order.",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "The Herbalife saga was more than simple activism — it was a public war between two hedge fund titans. Ackman's short strategy aimed to drive the stock to zero by pressuring the FTC to act; Icahn's long strategy combined conviction in Herbalife's business model legitimacy with a short squeeze mechanism. The FTC's decision not to issue a pyramid ruling ultimately tipped the balance toward Icahn. This episode became a textbook case demonstrating the massive risks embedded in activist short selling.",
    shareholders: [
      {
        id: "icahn",
        label: "Icahn Enterprises (Carl Icahn)",
        sub: "Anti-Ackman long position, largest shareholder",
        stake: "23.0%",
        stakePct: 23.0,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "ackman",
        label: "Pershing Square (Bill Ackman)",
        sub: "~9.8% short (effective short percentage)",
        stake: "9.8%",
        stakePct: 9.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "soros",
        label: "Soros Fund Management",
        sub: "Long position, joined Icahn's side",
        stake: "~4.9%",
        stakePct: 4.9,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "General Public Shareholders",
        sub: "Retail and institutional mixed holdings",
        stake: "~62%",
        stakePct: 62.3,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 9,
      independent: 7,
      affiliated: 2,
      note: "Herbalife's board had a high proportion of independent directors in appearance, but was criticized for implicitly endorsing management's MLM structure. Following shareholder pressure, the board composition was partially restructured after 2013.",
    },
    issues: [
      {
        title: "Pyramid Scheme Controversy in MLM Revenue Structure",
        description: "Allegations that a significant portion of Herbalife distributors' income came from downstream recruitment commissions rather than actual consumer product sales. Ackman argued this met the FTC's definition of a pyramid scheme.",
        severity: "critical",
      },
      {
        title: "Lack of Distributor Income Transparency",
        description: "Analysis suggested that an extremely small proportion of independent distributors earned meaningful income. Income Disclosure Statements showed the vast majority earning only a few hundred dollars per month.",
        severity: "critical",
      },
      {
        title: "Short Squeeze Vulnerability",
        description: "Ackman's large, public short position created ideal conditions for opponents like Icahn to deliberately push the stock higher and amplify short-side losses. A structural vulnerability of activist short selling was exposed.",
        severity: "high",
      },
      {
        title: "Prolonged Regulatory Uncertainty",
        description: "The FTC investigation ran from 2014 through the 2016 consent order — more than two years — during which stock volatility became extreme. Regulatory outcome uncertainty pressured investors on both sides.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "FTC formally rules Herbalife a pyramid scheme",
        result: "lost",
        note: "The FTC announced a $200M consent order in July 2016 but critically did not issue a pyramid scheme ruling. Ackman's core argument was not legally sustained.",
      },
      {
        demand: "SEC securities investigation and proof of accounting fraud",
        result: "partial",
        note: "The FTC investigation was opened and led to an operational reform consent order. However, securities fraud or accounting irregularity allegations were not proven. Only partial regulatory success.",
      },
      {
        demand: "Stock price collapse via short position",
        result: "lost",
        note: "Herbalife's stock rose from ~$45 in December 2012 to $83 during the 2013–2014 short squeeze period. Even at Ackman's 2018 exit, the stock was around $50 — far from the $0 target.",
      },
    ],
    stockImpact: {
      preCampaign: "~$45",
      peakDuringCampaign: "~$83",
      postCampaign: "~$50",
      note: "Herbalife's stock plunged immediately after Ackman's December 2012 short announcement, but Icahn's counterattack and the short squeeze drove it back to $83 in 2013–2014. Following the FTC consent order, the stock stabilized around $50, and Ackman exited in 2018 with approximately $1B in losses.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "This is a case of 'activist short selling' rather than a traditional M&A transaction. Ackman built a short position — not by buying shares — and pursued a strategy of attacking the company's business model itself to induce a stock price collapse. Icahn, by contrast, took the exact opposite position (long) and applied pressure on Ackman through the short squeeze mechanism. The collision of the two positions was a battle fought on market mechanics, not corporate governance.",
    preOwnership: {
      nodes: [
        { id: "ackman",  label: "Pershing Square (Ackman)", sub: "~$1B short, 9.8M shares short position",   type: "fund" },
        { id: "hlf",     label: "Herbalife (HLF)",          sub: "MLM nutritional supplements, stock ~$45",   type: "target" },
        { id: "icahn",   label: "Carl Icahn",                sub: "January 2013 long position declaration",    type: "fund" },
        { id: "ftc",     label: "FTC",                       sub: "Opened formal investigation in 2014",       type: "entity" },
        { id: "public",  label: "General Shareholders",      sub: "Dispersed holdings, swing voters",          type: "public" },
      ],
      edges: [
        { from: "ackman",  to: "hlf",   label: "~$1B short position" },
        { from: "icahn",   to: "hlf",   label: "Long position (accumulation begins)" },
        { from: "ftc",     to: "hlf",   label: "Formal investigation in 2014" },
        { from: "public",  to: "hlf",   label: "~62% stake held" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "icahn",   label: "Carl Icahn",                sub: "23% largest shareholder — est. $1B+ profit",  type: "fund" },
        { id: "hlf",     label: "Herbalife (HLF)",          sub: "Operating post-FTC consent order, stock ~$50", type: "target" },
        { id: "ackman",  label: "Pershing Square (Ackman)", sub: "March 2018 exit — est. ~$1B loss",             type: "fund" },
        { id: "ftc2",    label: "FTC Consent Order",         sub: "$200M fine + structural reform mandate",       type: "entity" },
      ],
      edges: [
        { from: "icahn",  to: "hlf",   label: "23% stake, substantive influence" },
        { from: "ftc2",   to: "hlf",   label: "$200M + operational restrictions" },
        { from: "ackman", to: "hlf",   label: "March 2018 full position exit" },
      ],
    },
    keyTerms: [
      { label: "Ackman short position size",    value: "~$1B (9.8M shares)",                      accent: true },
      { label: "Icahn long position",           value: "~23% (largest shareholder)",              accent: true },
      { label: "FTC consent order fine",        value: "$200M (July 2016)",                       accent: true },
      { label: "Pyramid ruling",                value: "None — Ackman's core argument failed" },
      { label: "Ackman estimated loss",         value: "~$1B (over 6 years)" },
      { label: "Icahn estimated gain",          value: "$1B+ (long position)" },
      { label: "HLF stock range",               value: "$24–$83 (2012–2018 campaign period)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Ackman assembled a full-spectrum advisory team of research, legal, and PR firms for his short campaign. Herbalife deployed some of the world's best defense advisors to manage the FTC response and shareholder communications. Both sides reportedly spent tens of millions of dollars on advisory fees.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Pershing Square (Short Side)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Moelis & Company",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Analyzed Herbalife's business model and developed financial arguments for the pyramid structure thesis. Provided independent research support.",
          },
          {
            firm: "Paul, Weiss, Rifkind, Wharton & Garrison",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Developed legal strategy for FTC petition, managed SEC disclosure responses, and handled legal risk management for the short position.",
          },
          {
            firm: "FTI Consulting",
            role: "Independent Investigation (Other)",
            roleType: "other",
            note: "Independently investigated Herbalife's distributor income structure. Produced analysis report on 'actual external retail consumer' ratios.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Herbalife (Defense Side)",
        initials: "HLF",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "Greenhill & Co.",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Independently verified Herbalife's business model and provided counter-arguments to Ackman's claims. Defended corporate valuation analysis.",
          },
          {
            firm: "Gibson, Dunn & Crutcher",
            role: "Legal Advisor (FTC Defense)",
            roleType: "legal",
            note: "Core legal advisor for the FTC investigation response. Managed the two-year FTC negotiation process. Led the $200M consent order negotiation.",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom",
            role: "Legal Advisor (Shareholder Relations)",
            roleType: "legal",
            note: "Developed activist short-selling defense strategy. Provided legal advice on shareholder communications and disclosure strategy.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources. Certain advisory agreement details remain non-public and may differ from actuals.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "The valuation crux of this deal hinged entirely on whether Herbalife was a 'pyramid scheme.' Ackman argued that if the FTC ruled it a pyramid, the company could not operate and the stock would converge to $0. Icahn countered that Herbalife was a legitimate business with stable cash flows, trading at an attractive EV/EBITDA discount. Ultimately, the FTC's non-pyramid ruling validated Icahn's valuation logic.",
    rows: [
      { item: "HLF stock price (Ackman short entry)",      val: "~$45",       note: "December 2012 short position built" },
      { item: "Icahn average purchase price (estimated)",  val: "$35–$50",    note: "Average across 2013–2014 accumulation of 23% stake" },
      { item: "HLF stock peak (short squeeze)",            val: "~$83",       note: "2013–2014, following Icahn's accumulation",           accent: true },
      { item: "Stock price at FTC consent order (Jul 2016)", val: "~$60",     note: "$200M consent, no pyramid ruling → stock stabilized" },
      { item: "Stock price at Ackman exit (Mar 2018)",     val: "~$50",       note: "After 6 years, ~$45→$50 — $0 target never reached",  accent: true },
      { item: "Ackman estimated total loss",               val: "~$1B",       note: "Position losses + campaign costs estimate",           accent: true },
      { item: "Icahn estimated total gain",                val: "$1B+",       note: "Stock appreciation above entry price + dividends estimated" },
    ],
    disclaimer: "Note: Profit/loss figures are based on public reports and estimates. Pershing Square's final realized profit/loss may differ depending on position structure (including options).",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Ackman targeted Herbalife",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "Structural vulnerability of the business model: Analysis showed that the bulk of distributor income came from recruiting new distributors rather than actual consumer product sales. This was the basis for the argument that the model met the FTC's definition of a pyramid scheme.",
        "Company collapse upon FTC intervention: If ruled a pyramid scheme, the entire business model becomes illegal and the stock would converge to $0 — a scenario with theoretically unlimited short upside.",
        "Public campaign strategy: Not just a short position, but a multi-channel pressure campaign — 3-hour presentations, congressional lobbying, FTC petitions, community organizing. Both stock price and public opinion were targeted.",
        "Highlighting the ethical issue of targeting low-income communities: The fact that Latino and low-income communities were the primary recruitment targets was raised as an ethical concern to add social pressure.",
      ],
    },
    seller: {
      title: "Why Icahn took the exact opposite position",
      initials: "HLF",
      bg: "bg-orange-600",
      points: [
        "Conviction in Herbalife's business model legitimacy: A company operating for over 30 years without FTC action was unlikely to be a pyramid scheme — which the FTC's 2016 non-ruling ultimately confirmed.",
        "Recognizing the short squeeze opportunity: Ackman's large, public short announcement created perfect conditions for a short squeeze. The more shares bought, the more short-side pressure to cover — an amplifying structure.",
        "Personal rivalry with Ackman: Icahn and Ackman had a prior business dispute and were on antagonistic terms. Icahn publicly declared he would defeat Ackman.",
        "Stable cash flow and undervaluation: Herbalife was a company with high operating margins and stable cash flow. Setting aside the MLM debate, it was financially an attractive long.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The Herbalife saga starkly exposed the structural limitations of activist short selling. Ackman's analysis was not entirely wrong — the FTC did acknowledge Herbalife's problems and issued a $200M fine with operational reform mandates. But failing to extract the 'pyramid' ruling destroyed the core of his short thesis. Icahn, by contrast, won this war through an accurate prediction of the FTC outcome combined with short squeeze tactics. This event is recalled as both the textbook and cautionary tale of activist short selling strategy.",
    overallVerdict: "Carl Icahn + Herbalife won; Bill Ackman suffered a historic defeat",
    positives: [
      "FTC consent order strengthened MLM industry regulation: The $200M fine and structural reform mandate raised awareness across the MLM industry.",
      "Social contribution of activist short selling: The lack of distributor income transparency and exploitation of low-income communities were brought to public consciousness.",
      "Icahn's short squeeze tactics: A textbook example of a counterattack that precisely exploited the vulnerability of a public short campaign.",
      "Stronger MLM regulatory framework: Following the FTC consent order, income disclosure standards for MLM distributors were tightened industry-wide.",
    ],
    risks: [
      "Pershing Square approximately $1B loss — including position building costs and campaign expenses, one of the largest activist short losses in history.",
      "Backfire of the public campaign: Ackman's public declaration provided someone like Icahn with a perfect short squeeze opportunity.",
      "Six years of time costs: Including borrowing fees for maintaining the position and opportunity costs, actual losses exceed the headline figure.",
      "Pershing Square AUM decline: The losses and reputational damage from this deal contributed to subsequent shrinkage in Pershing Square's assets under management.",
    ],
    editorNote:
      "The core lesson of this deal is that 'being right does not guarantee making money.' Ackman was partially correct — the FTC did acknowledge the problem. But 'FTC rules pyramid scheme and the stock goes to $0' and 'consent order with operational restrictions' are worlds apart in investment return terms. Activist short selling carries unlimited loss potential, particularly when a public declaration invites a counterattack. Icahn's tactics were a masterclass in using the opponent's public declaration against him.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PS",
    acquirerBg: "bg-slate-700",
    targetInitials: "HLF",
    targetBg: "bg-orange-600",
    acquirerName: "Pershing Square (Bill Ackman)",
    targetName: "Herbalife Ltd.",
    dealTitle: "Pershing Square vs. Herbalife — The Greatest Activist Short Battle",
    dealSize: "Approximately $1B short position",
    dealSizeUSD: "~$1B short",
    evEbitda: "N/A (activist short)",
    closeDate: "March 2018",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "Pershing Square Capital Management, 'Who Wants to Be a Millionaire?' Herbalife Investor Presentation (December 20, 2012)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=pershingsquare",
    },
    {
      id: 2,
      text: "FTC Press Release: 'Herbalife Will Restructure Its Multi-level Marketing Operations and Pay $200 Million For Compensation to Consumers' (July 15, 2016)",
      url: "https://www.ftc.gov/news-events/news/press-releases/2016/07/herbalife-will-restructure-its-multi-level-marketing-operations-pay-200-million-compensation",
    },
    {
      id: 3,
      text: "Herbalife Ltd. Form 10-K Annual Reports FY2012, FY2015, FY2017, SEC EDGAR",
    },
    {
      id: 4,
      text: "CNBC 'Halftime Report': Carl Icahn vs. Bill Ackman Live on Air (January 25, 2013)",
    },
    {
      id: 5,
      text: "Wall Street Journal: 'Ackman Exits Herbalife Bet After Six-Year Battle, Crystalizing Loss' (March 2018)",
    },
    {
      id: 6,
      text: "Bloomberg: 'The $1 Billion Bet That Bill Ackman Lost on Herbalife' (March 2018)",
    },
    {
      id: 7,
      text: "Icahn Enterprises Form 13D/13F SEC Filings — Herbalife Stake Buildup (2013–2018)",
    },
    {
      id: 8,
      text: "FTC Consent Order with Herbalife, Docket No. C-4677 (July 2016)",
      url: "https://www.ftc.gov/enforcement/cases-proceedings/herbalife",
    },
    {
      id: 9,
      text: "Soros Fund Management 13F — Herbalife Position Disclosure (February 2013)",
    },
    {
      id: 10,
      text: "William D. Cohan, 'The Fall of the House of Ackman', Vanity Fair (2018)",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Bill Ackman Herbalife Short War — Six-Year Battle Against Carl Icahn Fully Dissected",
    description:
      "Bill Ackman $1B short vs. Carl Icahn 23% long. Herbalife pyramid scheme controversy, FTC $200M consent order, short squeeze analysis. The full story of the largest activist short war in history.",
    keywords: [
      "Herbalife pyramid scheme",
      "Bill Ackman Herbalife short",
      "Carl Icahn vs Ackman",
      "activist short selling",
      "short squeeze",
      "FTC MLM investigation",
      "Pershing Square loss",
      "Herbalife HLF stock",
      "public hedge fund war",
      "MLM pyramid scheme",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Activist Short Selling",
      description: "A strategy of publicly exposing a company's problems while betting on its stock price to fall. Unlike plain short selling, it involves a comprehensive campaign of investor presentations, lobbying, and media use.",
    },
    {
      term: "MLM vs. Pyramid Scheme Debate",
      description: "The legal and economic debate over whether Herbalife's business model was legitimate direct selling or an illegal pyramid scheme. The FTC concluded without a pyramid ruling, settling on an operational reform consent order.",
    },
    {
      term: "Short Squeeze",
      description: "A self-reinforcing mechanism in which short sellers, facing rising prices, buy shares to cover their positions (short covering), which in turn pushes the price even higher. Icahn deliberately exploited this dynamic.",
    },
    {
      term: "FTC Consent Order",
      description: "An operational restriction agreement the FTC enters into with a company. A tool that legally mandates specific behavioral changes without prosecution. Herbalife paid $200M and complied with mandated distributor income structure reforms.",
    },
    {
      term: "Public Hedge Fund War",
      description: "The unusual situation of two hedge funds colliding publicly through media, CNBC, and other outlets with opposing positions. The Icahn-Ackman live CNBC confrontation is recorded as one of the most dramatic moments in financial history.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Bill Ackman call Herbalife a pyramid scheme?",
      a: "In his 3-hour presentation, Ackman showed that the majority of Herbalife distributor income came not from selling products to actual consumers, but from commissions earned by recruiting new distributors. Under FTC precedent, such structures can qualify as pyramid schemes. However, the FTC ultimately declined to issue a pyramid ruling in 2016, settling instead on an operational reform consent order.",
    },
    {
      q: "Why did Carl Icahn take the opposite position?",
      a: "For two reasons. First, a company operating for over 30 years without FTC intervention was unlikely to be a pyramid scheme — a judgment the FTC's 2016 non-ruling ultimately confirmed. Second, Ackman's public short announcement created perfect short squeeze conditions. There was also a personal element: Icahn and Ackman had a prior business dispute and were known adversaries.",
    },
    {
      q: "How did the short squeeze work in this deal?",
      a: "When Ackman publicly declared a short of 9.8 million shares, long investors like Icahn could buy shares and push the price up, forcing Ackman to partially cover (buy back) his short position to limit further losses — which in turn drove the price up further. This vicious cycle is the short squeeze. HLF stock surged to $83 in 2013–2014.",
    },
    {
      q: "Why did the FTC not rule Herbalife a pyramid scheme?",
      a: "In the 2016 consent order, the FTC said Herbalife must increase the proportion of actual retail consumer sales relative to distributor recruitment — acknowledging a problem, but framing it as 'reform to prevent becoming a pyramid scheme' rather than 'you are already a pyramid.' The FTC determined the legal threshold for a pyramid finding was not met.",
    },
    {
      q: "How much did Ackman lose?",
      a: "Estimated losses at the time of the March 2018 exit were approximately $1B. Including six years of borrowing fees and campaign costs, actual losses are larger. This loss is recorded as one of the largest single-position losses in hedge fund history.",
    },
    {
      q: "What lessons does this deal offer for activist short selling?",
      a: "Three lessons. First, short selling carries unlimited loss potential — particularly when a public declaration invites opposing forces. Second, a strategy that bets everything on a regulatory outcome is entirely dependent on the regulator's discretion. Third, 'being right' and 'making money' are different — being partially correct is not enough if the scenario doesn't fully materialize.",
    },
    {
      q: "Is Herbalife still operating?",
      a: "Yes. Following the FTC consent order, Herbalife rebranded as Herbalife Nutrition and implemented the structural reforms mandated in the 2016 consent order. Even after Carl Icahn sold his stake in 2018, the company continues to operate as a global MLM nutritional supplement company.",
    },
  ],
};

export default deal;
