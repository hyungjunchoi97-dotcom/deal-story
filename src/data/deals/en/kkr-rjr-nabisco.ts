/**
 * KKR × RJR Nabisco Leveraged Buyout
 * The Largest LBO in History — $31.1B, Closed 1989
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-rjr-nabisco",
  title: "Why KKR Paid $31.1 Billion for RJR Nabisco — The Birth of the Largest LBO in History",
  subtitle: "Junk Bond Revolution · Bidding War · How 'Barbarians at the Gate' Changed PE History",
  category: "ma",
  industry: "Tobacco / Food Conglomerate / PE Leveraged Buyout",
  country: "United States",
  announcedAt: "1988-10-20",
  closedAt: "1989-02-09",
  announcedDisplay: "October 1988",
  closedDisplay: "February 1989",
  readingMinutes: 13,
  tags: ["KKR", "RJR Nabisco", "LBO", "leveraged buyout", "junk bonds", "Michael Milken", "Drexel Burnham Lambert", "PE", "tobacco", "food", "Barbarians at the Gate"],
  excerpt:
    "KKR's $31.1 billion leveraged buyout of RJR Nabisco in 1988 — the largest in history at the time. CEO F. Ross Johnson's MBO attempt triggered a ferocious bidding war, Michael Milken's junk bonds financed the deal's extraordinary leverage, and the saga became immortalized in 'Barbarians at the Gate.' A pivotal moment that redefined private equity forever.",

  acquirer: { initials: "KKR", bg: "bg-gray-800", label: "Kohlberg Kravis Roberts (KKR)" },
  target: { initials: "RJR", bg: "bg-amber-700", label: "RJR Nabisco" },

  background: [
    "In October 1988, RJR Nabisco CEO F. Ross Johnson proposed a management buyout (MBO) to the board at $75 per share — a total of $17.6 billion. RJR Nabisco, born from the 1985 merger of R.J. Reynolds Tobacco (Camel, Winston cigarettes) and Nabisco Brands (Oreo, Ritz crackers), was one of America's largest conglomerates with annual revenues exceeding $16 billion. Once the board opened the process to competing bids, Johnson's proposal quickly escalated into the most fiercely contested corporate takeover battle in Wall Street history.",
    "The competition narrowed to three camps: the Johnson–Shearson Lehman alliance, PE giant KKR (Kohlberg Kravis Roberts), and Forstmann Little. KKR had a decisive edge — access to Michael Milken at Drexel Burnham Lambert, whose junk bond machine could raise billions in weeks. At the peak of the junk bond revolution that had made LBOs possible, KKR ultimately prevailed with a final bid of $109 per share — a total of $31.1 billion — sweeping aside all rivals.",
    "The deal structure was among the most complex leveraged structures in PE history. Equity amounted to only approximately $1.5 billion, with the remaining $29.6 billion funded through debt: junk bonds, bank syndicate loans, bridge loans, mezzanine, and more — layered across seven tiers. KKR paid an EV/EBITDA multiple of roughly 12.4x, an unprecedented level for a leveraged buyout in 1988.",
    "After closing, KKR pursued a dual strategy of asset sales and debt repayment. In 1991, RJR Nabisco was partially re-listed in a $4.1 billion public offering, reducing initial debt. The Nabisco food division was later spun off separately, and R.J. Reynolds Tobacco was ultimately separated from RJR Nabisco in 1999. Tobacco litigation risk proved far greater than anticipated and high leverage persistently constrained management flexibility. Nevertheless, KKR generated substantial returns. The deal was immortalized by Bryan Burrough and John Helyar in their book 'Barbarians at the Gate' (1989) and the subsequent HBO film, cementing its place in PE history.",
  ],

  dealSummary: {
    dealValueDisplay: "$31.1B",
    acquirerName: "Kohlberg Kravis Roberts & Co. (KKR)",
    targetName: "RJR Nabisco Holdings Corp.",
    announcedDisplay: "October 1988",
    closedDisplay: "February 1989",
    country: "United States",
  },

  executiveSummary: [
    "Largest LBO in history at the time — KKR's $31.1B leveraged buyout at $109/share (vs. MBO offer of $75, a 45% increase)",
    "Core thesis: KKR used junk bond financing to win a competitive bidding war triggered by CEO F. Ross Johnson's MBO attempt",
    "Seven-layer leverage structure — ~$1.5B equity vs ~$29.6B debt, an extraordinary ~5% equity ratio",
    "Michael Milken and Drexel Burnham Lambert's junk bond revolution made this deal structurally possible",
    "Post-acquisition: asset sales, debt repayment, and re-listings delivered strong returns; tobacco litigation risk exceeded expectations",
    "Immortalized in 'Barbarians at the Gate' — the defining case study of the LBO era",
  ],

  industryOverview: {
    body: "The 1980s marked the golden age of leveraged buyouts in US private equity. Michael Milken at Drexel Burnham Lambert pioneered the high-yield (junk) bond market, enabling sub-investment-grade companies to raise enormous capital — a development that made large-scale public company buyouts viable. Against a backdrop of widespread conglomerate discounts, PE firms built their thesis around 'buying undervalued conglomerates, breaking them apart, and unlocking value.' RJR Nabisco was the quintessential conglomerate: tobacco and food businesses stitched together with no operational synergy.",
    metrics: [
      { label: "Deal Size (Total EV)", value: "$31.1B", sub: "Largest LBO in history (1988)" },
      { label: "Acquisition Multiple (EV/EBITDA)", value: "~12.4×", sub: "Unprecedented at the time" },
      { label: "Leverage Ratio", value: "~5% equity", sub: "$1.5B equity / $29.6B debt" },
      { label: "RJR Nabisco Annual Revenue", value: "~$17B", sub: "1988 estimate" },
    ],
    subBody: "The tobacco division (R.J. Reynolds) held America's top cigarette brands — Camel, Winston, Salem — while Nabisco dominated the snack food aisle with Oreo, Ritz, Chips Ahoy!, and Planters. Both businesses generated powerful cash flows, yet the conglomerate structure suppressed their combined market valuation. This disconnect between intrinsic value and market price was the fundamental LBO thesis.",
    players: [
      { name: "KKR", role: "Winning acquirer — completed $31.1B LBO using junk bond financing" },
      { name: "F. Ross Johnson (CEO)", role: "MBO initiator — $17.6B proposal, triggered competitive auction" },
      { name: "Drexel Burnham Lambert / Michael Milken", role: "Junk bond underwriter — the engine of LBO financing" },
      { name: "Forstmann Little", role: "Competing bidder — ultimately withdrew" },
      { name: "Shearson Lehman", role: "Financial advisor to Johnson's MBO camp — lost the bid" },
    ],
  },

  companyOverview: {
    targetName: "RJR Nabisco Holdings Corp.",
    body: "RJR Nabisco was formed in 1985 through the merger of R.J. Reynolds Tobacco Company and Nabisco Brands, creating one of America's largest consumer conglomerates. R.J. Reynolds held the country's leading cigarette brands — Camel, Winston, Salem — while Nabisco owned iconic food brands including Oreo, Ritz, Chips Ahoy!, and Planters. The merger's rationale was to combine the two companies' cash flows into a more stable earnings structure. However, investors applied a steep conglomerate discount, arguing that two fundamentally different businesses had no business being together. By the time of the buyout, annual revenues approached $17 billion and EBITDA was approximately $2.5 billion.",
    metrics: [
      { label: "1988 Annual Revenue", value: "~$17B", sub: "Tobacco + food conglomerate" },
      { label: "EBITDA (1988)", value: "~$2.5B", sub: "Strong cash-generative businesses" },
      { label: "Employees", value: "~140,000", sub: "Global workforce" },
      { label: "Year of Formation", value: "1985", sub: "R.J. Reynolds + Nabisco Brands merger" },
    ],
    financials: [
      { year: "1986", revenue: 15102, cogs: 8500, grossProfit: 6602, sga: 4000, operatingIncome: 1800, ebitda: 2200 },
      { year: "1987", revenue: 15766, cogs: 8800, grossProfit: 6966, sga: 4100, operatingIncome: 1900, ebitda: 2300 },
      { year: "1988", revenue: 16956, cogs: 9200, grossProfit: 7756, sga: 4200, operatingIncome: 2000, ebitda: 2500 },
    ],
    financialsNote: "In USD millions (M). Based on RJR Nabisco annual estimates.",
    financialsCurrency: "USD",
    financialsUnit: "Million",
    revenueBreakdown: [
      { name: "Tobacco (R.J. Reynolds)", pct: 55, color: "bg-amber-700", amt: "~$9.3B" },
      { name: "Food (Nabisco)", pct: 45, color: "bg-amber-400", amt: "~$7.6B" },
    ],
  },

  dealStructure: {
    body: "KKR assembled a financing package of approximately $1.5 billion in equity, ~$5 billion in junk bonds, ~$13 billion in bank syndicate loans, and ~$12 billion in bridge loans and other instruments — totaling $31.1 billion. Equity accounted for only about 5% of the total deal value in an ultra-high-leverage structure. Drexel Burnham Lambert led junk bond issuance while a syndicate of major banks provided the senior debt. Upon closing, RJR Nabisco was taken private; KKR subsequently repaid debt through asset divestitures and a partial re-IPO.",
    preOwnership: {
      nodes: [
        { id: "rjr_public", label: "RJR Nabisco", sub: "NYSE-listed conglomerate", type: "public" },
        { id: "kkr_fund", label: "KKR", sub: "Private equity fund", type: "acquirer" },
      ],
      edges: [
        { from: "rjr_public", to: "kkr_fund", label: "Independent public company" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr_parent", label: "KKR", sub: "PE Fund + Junk Bond Investors", type: "acquirer" },
        { id: "rjr_sub", label: "RJR Nabisco Holdings", sub: "Taken private, wholly owned", type: "target" },
        { id: "rjr_tobacco", label: "R.J. Reynolds Tobacco", sub: "Tobacco division", type: "entity" },
        { id: "nabisco", label: "Nabisco", sub: "Food division", type: "entity" },
      ],
      edges: [
        { from: "kkr_parent", to: "rjr_sub", label: "100%" },
        { from: "rjr_sub", to: "rjr_tobacco", label: "Subsidiary" },
        { from: "rjr_sub", to: "nabisco", label: "Subsidiary" },
      ],
    },
    keyTerms: [
      { label: "Deal Size (Total EV)", value: "$31.1 Billion", accent: true },
      { label: "Acquisition Price", value: "$109 per share (all cash)", accent: false },
      { label: "Premium vs. MBO Offer", value: "~45% above Johnson's $75/share", accent: true },
      { label: "Transaction Type", value: "Leveraged Buyout (LBO) — taken private", accent: false },
      { label: "Equity / Debt Ratio", value: "~5% equity / ~95% debt", accent: true },
      { label: "EV / EBITDA", value: "~12.4×", accent: false },
      { label: "Close Date", value: "February 9, 1989", accent: false },
      { label: "Junk Bond Underwriter", value: "Drexel Burnham Lambert (Michael Milken)", accent: false },
    ],
  },

  advisors: {
    body: "The deal attracted Wall Street's top investment banks to each camp. KKR's decisive advantage was Drexel Burnham Lambert's junk bond firepower, while Johnson's team relied on Shearson Lehman. The competitive intensity and structural complexity generated hundreds of millions in advisory fees across both sides.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (KKR)",
        initials: "KKR",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Drexel Burnham Lambert", role: "Junk Bond Underwriter (FA)", roleType: "financial", note: "Michael Milken led ~$5B junk bond issuance — the deal's critical funding engine" },
          { firm: "Merrill Lynch", role: "Financial Advisor (FA)", roleType: "financial", note: "Co-financial advisor and bank syndicate formation" },
          { firm: "Simpson Thacher & Bartlett", role: "Legal Counsel", roleType: "legal", note: "M&A agreement and leveraged finance legal counsel" },
        ],
      },
      {
        side: "target",
        sideLabel: "MBO Side (F. Ross Johnson / Board)",
        initials: "RJR",
        bg: "bg-amber-700",
        advisors: [
          { firm: "Shearson Lehman Hutton", role: "Financial Advisor (FA)", roleType: "financial", note: "Lead financial advisor to CEO Johnson's MBO camp" },
          { firm: "Salomon Brothers", role: "Financial Advisor (FA)", roleType: "financial", note: "Independent board financial advisor (fairness opinion)" },
          { firm: "Skadden, Arps", role: "Legal Counsel", roleType: "legal", note: "Board M&A legal counsel" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting and historical records.",
  },

  valuation: {
    body: "KKR paid an EV/EBITDA multiple of approximately 12.4x on RJR Nabisco's 1988 EBITDA of ~$2.5 billion — nearly double the S&P 500 average at the time, driven by competitive bidding pressure. LBO valuation centers on whether post-acquisition cash flows can service the debt load: RJR Nabisco's powerful tobacco and food cash flows underpinned this thesis. KKR's exit strategy relied on asset divestitures, debt reduction, and an eventual re-IPO.",
    rows: [
      { item: "Deal EV", val: "$31.1B", note: "Total acquisition price ($109/share × diluted share count)", accent: true },
      { item: "Acquisition Price", val: "$109 per share (cash)", note: "MBO initial offer was $75 — 45% premium" },
      { item: "Premium vs. MBO Offer", val: "~45%", note: "Competitive bidding drove the price higher", accent: true },
      { item: "1988E EBITDA", val: "~$2.5B", note: "Tobacco + food combined EBITDA" },
      { item: "EV / EBITDA", val: "~12.4×", note: "Record LBO multiple for 1988", accent: true },
      { item: "Equity Contribution", val: "~$1.5B", note: "~5% of total deal value" },
      { item: "Debt (Junk Bonds + Loans)", val: "~$29.6B", note: "Seven-layer debt structure" },
      { item: "Leverage Ratio", val: "~20:1 (Debt:Equity)", note: "Among the highest leverage ratios ever", accent: true },
    ],
    disclaimer: "Valuation figures are based on public filings, press reports, and historical records.",
  },

  rationale: {
    buyer: {
      title: "KKR's Acquisition Rationale",
      initials: "KKR",
      bg: "bg-gray-800",
      points: [
        "Conglomerate discount elimination — separate tobacco and food divisions to unlock their individual intrinsic values",
        "Powerful cash flow coverage — Camel/Winston tobacco and Oreo/Ritz food EBITDA capable of servicing massive debt loads",
        "Asset divestiture strategy — sell non-core assets to accelerate debt repayment and reduce leverage",
        "Junk bond access — partnership with Drexel Burnham Lambert/Michael Milken enables $30B+ capital raise",
        "Auction victory — blocking the management MBO and winning the board's trust with the highest bid",
      ],
    },
    seller: {
      title: "Board's Rationale (Maximizing Shareholder Value)",
      initials: "RJR",
      bg: "bg-amber-700",
      points: [
        "$109 per share — substantial premium over market price, maximizing shareholder returns",
        "Higher than MBO — secured a price 45% above CEO Johnson's $75 initial proposal",
        "Competitive auction — fiduciary duty fulfilled by accepting the highest bid",
        "Conglomerate structure limitation acknowledged — PE buyout selected as the best vehicle to unlock value",
        "Certainty of value realization — chose definitive premium over uncertain long-term independence",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "1995-12",
    body: "KKR completed a partial re-IPO of RJR Nabisco in 1991 (raising $4.1 billion) and continued to sell down its position over subsequent years. The Nabisco food division was separately listed and R.J. Reynolds Tobacco was ultimately separated from RJR Nabisco in 1999. KKR generated substantial overall returns, though below initial projections. Tobacco litigation risk proved far more severe than modeled, and persistent high leverage constrained management's ability to reinvest. The deal also marked a turning point: Drexel Burnham Lambert collapsed in 1990 and the junk bond market cooled sharply, effectively ending the 1980s LBO era.",
    overallVerdict: "Historic milestone deal — symbolizing the LBO era's peak; solid returns but tobacco litigation risk significantly exceeded expectations",
    positives: [
      "1991 partial RJR Nabisco re-IPO ($4.1B) — early partial exit realized",
      "Nabisco food division separately listed, enabling brand value re-rating",
      "Largest LBO in history successfully completed — demonstrated PE's capability at scale",
      "Ultimately delivered positive returns to KKR fund investors (LPs)",
    ],
    risks: [
      "Tobacco litigation surge — 1990s U.S. tobacco lawsuits created unexpected and massive liabilities",
      "Leverage constraint — persistent interest costs chronically limited management investment capacity",
      "Drexel Burnham Lambert bankruptcy (1990) — junk bond market collapse reduced future deal execution options",
      "Delayed conglomerate breakup — separating tobacco and food took far longer than planned",
      "CEO conflict aftermath — tensions with F. Ross Johnson led to management team departures",
    ],
    editorNote: "KKR's acquisition of RJR Nabisco is more than a corporate deal — it is the defining symbol of 1980s Wall Street: the greed, the junk bond revolution, the rise of private equity, and the era of conglomerate dismemberment. Bryan Burrough and John Helyar's 'Barbarians at the Gate' made this the most widely read M&A story in human history. The leverage magic — 5% equity financing a $31.1 billion deal — became the opening chapter of every LBO textbook. At the same time, the deal is equally instructive about the costs of excess leverage and short-term profit maximization: Drexel Burnham Lambert's bankruptcy and the tobacco litigation catastrophe are the cautionary half of this story.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-gray-800",
    targetInitials: "RJR",
    targetBg: "bg-amber-700",
    acquirerName: "Kohlberg Kravis Roberts & Co. (KKR)",
    targetName: "RJR Nabisco Holdings Corp.",
    dealTitle: "Leveraged Buyout (LBO)",
    dealSize: "~$31.1 Billion",
    dealSizeUSD: "USD 31.1 Billion",
    evEbitda: "~12.4×",
    closeDate: "Feb 1989",
  },

  sources: [
    { id: 1, text: "Bryan Burrough & John Helyar — Barbarians at the Gate: The Fall of RJR Nabisco (1989)", url: "https://www.harpercollins.com" },
    { id: 2, text: "RJR Nabisco Holdings Corp. — SEC Form 10-K (1988, 1989)", url: "https://www.sec.gov" },
    { id: 3, text: "KKR — Press Release: Acquisition of RJR Nabisco (February 1989)" },
    { id: 4, text: "The Wall Street Journal — KKR Wins RJR Nabisco Bidding War (November 1988)" },
    { id: 5, text: "Forbes — The $25 Billion Dollar Temptation (1988)" },
    { id: 6, text: "Financial Times — The LBO That Changed Wall Street (1989)" },
    { id: 7, text: "HBO Film — Barbarians at the Gate (1993)", url: "https://www.hbo.com" },
    { id: 8, text: "The New York Times — RJR Nabisco Agrees to $25 Billion Buyout by KKR Group (1988)" },
  ],

  seo: {
    title: "KKR RJR Nabisco LBO Analysis — $31.1B Largest Leveraged Buyout in History",
    description: "Deep dive into KKR's $31.1B leveraged buyout of RJR Nabisco. CEO MBO attempt, junk bond revolution, competitive bidding war, leverage structure, and Barbarians at the Gate.",
    keywords: [
      "KKR RJR Nabisco",
      "largest LBO history",
      "leveraged buyout",
      "junk bonds",
      "Michael Milken",
      "Drexel Burnham Lambert",
      "Barbarians at the Gate",
      "private equity",
      "MBO management buyout",
      "RJR Nabisco acquisition",
      "conglomerate breakup",
    ],
  },

  concepts: [
    { term: "LBO (Leveraged Buyout)", href: "/deal-101/lbo", description: "Minimizing equity through debt financing — KKR's RJR Nabisco deal is the landmark case in LBO history" },
    { term: "Acquisition Premium", href: "/deal-101/acquisition-premium", description: "Competitive bidding drove the price from $75 to $109 per share — a textbook control premium" },
    { term: "Spinoff", href: "/deal-101/spinoff", description: "Post-acquisition Nabisco food division separation — the classic LBO value realization tool" },
    { term: "Stock vs. Asset Deal", href: "/deal-101/stock-vs-asset-deal", description: "Deal structure choices in a complex conglomerate LBO" },
  ],

  faq: [
    {
      q: "Why did KKR pay as much as $109 per share?",
      a: "The competitive auction process drove the price up. Once CEO F. Ross Johnson's MBO offer ($75) was made public, KKR, Forstmann Little, and other bidders entered the fray. A price war ensued, ultimately reaching $109. KKR believed RJR Nabisco's powerful cash flows (EBITDA ~$2.5B) could support the debt required to finance such a price, and Drexel Burnham Lambert's junk bond machine gave KKR the financing certainty to commit.",
    },
    {
      q: "Why were junk bonds so critical to this deal?",
      a: "Before Michael Milken developed the high-yield bond market, below-investment-grade companies had extremely limited access to large-scale capital. Milken's Drexel Burnham Lambert changed that, enabling KKR to raise approximately $5 billion in junk bonds as part of the $31.1 billion financing package. Without access to the junk bond market, a deal of this scale simply could not have been financed.",
    },
    {
      q: "What is 'Barbarians at the Gate'?",
      a: "Published in 1989, 'Barbarians at the Gate' by Bryan Burrough and John Helyar is a nonfiction book chronicling the entire RJR Nabisco takeover battle through exhaustive interviews and reporting. It exposed the lifestyles of CEO Johnson, the cold calculation of KKR, and the naked greed of bankers — becoming a bestseller and the definitive account of 1980s Wall Street excess. It was adapted into an HBO film in 1993 and remains essential reading in M&A and PE to this day.",
    },
    {
      q: "How much did KKR actually make on this deal?",
      a: "KKR generated substantial returns on its ~$1.5 billion equity investment, though below initial projections. Returns were realized through the 1991 re-IPO, subsequent stake sales, and the Nabisco separation. Tobacco litigation risk was far more severe than modeled, and the collapse of Drexel Burnham Lambert (1990) also complicated subsequent financing. The exact IRR has never been publicly disclosed, but industry estimates suggest approximately 10–15% annualized returns.",
    },
    {
      q: "What lasting impact did this deal have on PE history?",
      a: "The deal marked both the apex and the conclusion of the 1980s LBO golden age. The junk bond market collapse, Drexel's bankruptcy, and the S&L crisis plunged the PE market into recession in the early 1990s. Simultaneously, the deal established the defining LBO formula — minimizing equity, maximizing leverage — and became the foundational case study in every PE curriculum. No LBO matched its scale, complexity, and drama for two decades.",
    },
  ],
};

export default deal;
