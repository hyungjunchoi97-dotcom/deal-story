/**
 * Bain Capital × Clear Channel Communications → iHeartMedia (2006–2018)
 * The Worst Hung Deal in History — A $19.4B Radio LBO Caught in the Financial Crisis
 * Leveraged Finance Textbook: Market Flex, Hung Deal, Zombie Company, Chapter 11
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "iheartmedia-clear-channel",
  title: "How Bain Capital Wrote the Textbook on Hung Deals with a $19.4B Radio LBO",
  subtitle: "2006 Peak-Cycle Commitment → 2008 Financial Crisis → Banks' MAC Escape Attempt → Litigation → 10-Year Zombie → 2018 Chapter 11",
  category: "ma",
  industry: "Media / Radio & Outdoor Advertising",
  country: "United States",
  announcedAt: "2006-11-16",
  closedAt: "2008-07-30",
  announcedDisplay: "November 2006",
  closedDisplay: "July 2008",
  readingMinutes: 14,
  tags: [
    "Bain Capital", "Clear Channel", "iHeartMedia", "Hung Deal", "LBO",
    "leveraged loan", "market flex", "MAC clause", "bankruptcy",
    "Chapter 11", "zombie company", "radio", "LevFin", "acquisition financing", "financial crisis",
  ],
  excerpt:
    "In the largest-ever Hung Deal, Bain Capital and THL Partners acquired radio empire Clear Channel for $19.4 billion. When the $17.9B in loans committed at LIBOR+265bp in 2006 couldn't be sold during the 2007–2008 credit crisis, banks attempted to invoke the MAC clause to escape → Clear Channel sued → forced closing. Then 10 years of paying $1.5B+ in annual interest with zero digital investment, followed by a March 2018 Chapter 11 filing.",

  acquirer: { initials: "BAIN", bg: "bg-red-700",   label: "Bain Capital / THL Partners" },
  target:   { initials: "CCO",  bg: "bg-slate-700", label: "Clear Channel Communications" },

  background: [
    "In 2006, the U.S. LBO market was running at a historic peak. Deals at Debt/EBITDA of 7–8× were closing routinely, and banks were committing billions at tight spreads of LIBOR+250–300bp. In this frenetic market, Bain Capital and THL Partners announced they would acquire the largest U.S. radio broadcast group, Clear Channel Communications, at $39.20 per share for a total EV of $19.4 billion. Six major banks — including Citigroup, Deutsche Bank, and Morgan Stanley — committed a $17.9 billion acquisition financing package.",
    "But within a year of the announcement, the world had changed. The 2007 subprime crisis erupted, and credit markets began to freeze. The LIBOR+265bp spread the banks had committed to became completely disconnected from market reality. Banks that needed to syndicate the loans to institutional investors knew CLOs and loan funds would never buy at those terms. The banks attempted to withdraw their commitment, citing a 'Material Adverse Change (MAC)' in Clear Channel's business.",
    "Clear Channel filed suit against Citigroup and five other banks in January 2008, demanding they honor the agreement. After three months of litigation, a settlement was reached in March 2008 — banks agreed to close the deal with a higher spread (+35–85bp increase) and waiver of certain fees. The deal finally closed in July 2008, two months before the collapse of Lehman Brothers. Estimated immediate bank losses: $500M–$1.5B.",
  ],

  dealSummary: {
    dealValueDisplay: "$19.4B",
    acquirerName: "Bain Capital / Thomas H. Lee Partners",
    targetName: "Clear Channel Communications",
    announcedDisplay: "November 16, 2006",
    closedDisplay: "July 30, 2008",
    country: "United States (NYSE: CCU → Delisted)",
  },

  executiveSummary: [
    "Bain Capital and THL Partners acquired Clear Channel Communications for $19.4B — $2.65B equity, $17.9B leveraged debt.",
    "Citigroup, Deutsche Bank, Morgan Stanley, Credit Suisse, RBS, and Wachovia committed $17.9B in acquisition financing at LIBOR+265bp — peak market pricing.",
    "Post-2007 credit crisis market deterioration prompted banks to attempt MAC-clause withdrawal → Clear Channel lawsuit → March 2008 settlement (spread increase) → forced closing July 2008.",
    "Post-closing Debt/EBITDA ~13×, $1.5B+ annual interest — digital radio and streaming investment essentially impossible. 10-year 'zombie company' status.",
    "March 2018 Chapter 11 filing. March 2019 re-listed as iHeartMedia after $9.5B debt discharge.",
  ],

  industryOverview: {
    body: "The U.S. radio broadcasting industry passed peak ad revenue in the mid-2000s and began facing challenges from satellite radio (XM Sirius) and streaming (Pandora, proto-Spotify). Clear Channel was the largest player in U.S. media advertising with 1,200+ radio stations and 700,000 outdoor advertising (billboard) structures, but after the LBO had no capacity to invest in digital transformation.",
    metrics: [
      { label: "U.S. Radio Ad Market",          value: "$20B",    sub: "2006 (declining thereafter)" },
      { label: "Clear Channel Stations",         value: "1,200+", sub: "U.S. radio station count" },
      { label: "Outdoor Advertising Structures", value: "700,000+", sub: "Clear Channel Outdoor" },
      { label: "LBO-Era EBITDA",                value: "~$1.43B", sub: "FY2006 basis" },
    ],
    players: [
      { name: "Clear Channel (iHeartMedia)", role: "Largest U.S. radio and outdoor advertising group (LBO target)" },
      { name: "Cumulus Media",              role: "#2 radio group (attempted to acquire Clear Channel)" },
      { name: "Regent Communications",      role: "Regional radio operator" },
      { name: "Sirius XM",                  role: "Satellite radio competitor (subscription-based)" },
    ],
  },

  companyOverview: {
    targetName: "Clear Channel Communications",
    body: "Starting from a single radio station in Texas in 1972, Clear Channel grew into the largest U.S. media group by riding the 1990s radio industry consolidation wave. It was a diversified media company comprising radio (iHeartMedia) and outdoor advertising (Clear Channel Outdoor). At the time of the LBO, it was also America's largest radio empire through its ownership of Premiere Radio Networks (syndicating Rush Limbaugh and others).",
    metrics: [
      { label: "LBO EV",                 value: "$19.4B",  sub: "Cash merger at $39.20 per share" },
      { label: "Entry Leverage",         value: "~13×",    sub: "Debt/EBITDA at close" },
      { label: "Annual Interest Burden", value: "$1.5B+",  sub: "120%+ of EBITDA at pre-bankruptcy" },
      { label: "Radio Listeners",        value: "240M",    sub: "Weekly U.S. reach" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue:         6924,
        cogs:            3852,
        grossProfit:     3072,
        sga:             1784,
        operatingIncome:  788,
        ebitda:          1430,
      },
      {
        year: "FY2012",
        revenue:         6246,
        cogs:            3502,
        grossProfit:     2744,
        sga:             1623,
        operatingIncome:  521,
        ebitda:          1121,
      },
      {
        year: "FY2017",
        revenue:         6264,
        cogs:            3490,
        grossProfit:     2774,
        sga:             1793,
        operatingIncome:  281,
        ebitda:           981,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "FY2017 is one year before the bankruptcy filing. EBITDA of $981M against $1.5B+ annual interest → ICR below 0.7×. Radio advertising revenue was in structural decline and digital transformation investment was essentially zero.",
  },

  dealStructure: {
    body: "A Go-Private LBO in which Bain Capital and THL purchased all outstanding Clear Channel shares in cash at $39.20. 86% ($17.9B) of acquisition financing came from leveraged loans and bonds. After closing, the company was operated as two pillars: radio (CC Media Holdings → iHeartMedia) and outdoor advertising (Clear Channel Outdoor, which remained separately listed).",
    preOwnership: {
      nodes: [
        { id: "bain",   label: "Bain Capital",   sub: "PE fund",              type: "fund"   },
        { id: "thl",    label: "THL Partners",    sub: "PE fund",              type: "fund"   },
        { id: "public", label: "Public Shareholders", sub: "NYSE: CCU",        type: "public" },
        { id: "cc",     label: "Clear Channel",   sub: "Radio + Outdoor",      type: "target" },
      ],
      edges: [
        { from: "public", to: "cc", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bain-p",    label: "Bain Capital",    sub: "Equity ~50%",           type: "fund"   },
        { id: "thl-p",     label: "THL Partners",    sub: "Equity ~50%",           type: "fund"   },
        { id: "iheart",    label: "iHeartMedia",     sub: "Radio (private)",       type: "entity" },
        { id: "ccoutdoor", label: "CC Outdoor",      sub: "NYSE: CCO listed",      type: "entity" },
      ],
      edges: [
        { from: "bain-p", to: "iheart",    label: "~50%" },
        { from: "thl-p",  to: "iheart",    label: "~50%" },
        { from: "iheart", to: "ccoutdoor", label: "88.9% stake" },
      ],
    },
    keyTerms: [
      { label: "Transaction Type",       value: "Go-Private LBO (Cash Merger)",    accent: true  },
      { label: "Acquisition Price",      value: "$39.20 per share",                accent: true  },
      { label: "Equity Contributed",     value: "$2.65B (~14%)"                                 },
      { label: "Leveraged Debt",         value: "$17.9B (~86%)",                   accent: true  },
      { label: "Entry Leverage",         value: "Debt/EBITDA ~13×",               accent: true  },
      { label: "Estimated Bank Losses",  value: "$500M–$1.5B (spread increase)",  accent: false },
      { label: "Bankruptcy Filing",      value: "Chapter 11 — March 2018",        accent: true  },
    ],
  },

  advisors: {
    body: "At deal announcement (2006), top-tier advisors were assembled in a peak market. Six acquisition financing banks committed $17.9B at LIBOR+265bp, but during the 2008 financial crisis they suffered losses while reluctantly closing the deal — an unprecedented situation.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Bain Capital / THL Partners",
        initials: "BAIN",
        bg: "bg-red-700",
        advisors: [
          { firm: "Citigroup",        role: "LBO Financing Lead Arranger (Co-Lead)",  roleType: "financial", note: "Later litigation defendant, led spread negotiation" },
          { firm: "Deutsche Bank",    role: "LBO Financing Co-Arranger",              roleType: "financial", note: "~$2–3B tranche" },
          { firm: "Morgan Stanley",   role: "LBO Financing Co-Arranger",              roleType: "financial", note: "Also served as M&A advisor" },
          { firm: "Credit Suisse",    role: "LBO Financing Co-Arranger",              roleType: "financial", note: "" },
          { firm: "Goldman Sachs",    role: "Financial Advisor (PE side)",            roleType: "financial", note: "" },
          { firm: "Kirkland & Ellis", role: "Legal Advisor",                          roleType: "legal",     note: "Litigation and contract enforcement" },
        ],
      },
      {
        side: "target",
        sideLabel: "Clear Channel Communications Board",
        initials: "CCO",
        bg: "bg-slate-700",
        advisors: [
          { firm: "Lazard",           role: "Financial Advisor", roleType: "financial", note: "Fairness opinion" },
          { firm: "Wachtell, Lipton", role: "Legal Advisor",     roleType: "legal",     note: "Including litigation strategy" },
        ],
      },
    ],
    disclaimer: "Of the six acquisition financing banks, RBS and Wachovia were each acquired or merged during the financial crisis.",
  },

  valuation: {
    body: "The $39.20 per share price was approximately a 6% premium over the unaffected share price (~$37) — a lower premium than other large LBOs. The core problem was the capital structure rather than the EV itself. Debt/EBITDA of ~13× created a structure in which any slight deterioration in radio advertising would make interest coverage impossible.",
    rows: [
      { item: "Equity Value",               val: "$3.5B",   note: "$39.20/share × ~89 million shares outstanding",  accent: false },
      { item: "Existing Net Debt Assumed",  val: "+$4.5B",  note: "Existing debt assumed at acquisition",           accent: false },
      { item: "Total Enterprise Value",     val: "$19.4B",  note: "",                                               accent: true  },
      { item: "Entry EBITDA",               val: "$1.43B",  note: "FY2006 basis",                                   accent: false },
      { item: "EV/EBITDA",                  val: "13.6×",   note: "Highest in media LBO history",                   accent: true  },
      { item: "Total New LBO Debt",         val: "$17.9B",  note: "TLB $7.1B + bonds + bridge",                    accent: true  },
      { item: "Entry Debt/EBITDA",          val: "~13×",    note: "13× in media when even 6× in retail is risky",  accent: true  },
    ],
    disclaimer: "Figures are estimated based on public information and court filings.",
  },

  rationale: {
    buyer: {
      title: "Bain Capital / THL Rationale",
      initials: "BAIN",
      bg: "bg-red-700",
      points: [
        "Expected stability of radio advertising market — structural strength of free media without subscriptions",
        "Clear Channel Outdoor (billboard) listed value separation → debt reduction + equity return realization plan",
        "Scale economies and regional advertising monopoly of 1,200+ stations",
        "EBITDA improvement through cost reduction and efficiency rather than digital transformation",
        "IPO or strategic sale within 5 years (actual: bankruptcy after 10 years)",
      ],
    },
    seller: {
      title: "Clear Channel Shareholders' Rationale",
      initials: "CCO",
      bg: "bg-slate-700",
      points: [
        "Cash out preferred at 6% premium given stagnating radio ad market and satellite radio uncertainty",
        "Independent operating outlook uncertain amid intensifying satellite radio (XM-Sirius merger) competition",
        "Cash-out opportunity for founding family (Mays family) stake",
        "Escape from regulatory burden and public disclosure obligations",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The Clear Channel LBO became the textbook Hung Deal. Banks committed at peak pricing suffered hundreds of millions in losses when they couldn't sell the loans during the credit crisis. The company was starved of capital for digital transformation for a decade by interest burden alone. After the March 2018 Chapter 11 filing, it re-emerged as iHeartMedia with $9.5B in debt discharged, but enterprise value remains far below its peak.",
    overallVerdict: "Hung Deal's conclusion — total PE equity loss, $1B+ bank losses, 10-year corporate zombie",
    positives: [
      "Clear Channel Outdoor (CCO) listing maintained, partial equity value separation realized",
      "Post-Chapter 11 re-listing in 2019 as iHeartMedia accelerated digital radio and podcast pivot",
      "$9.5B debt discharge after bankruptcy → normalized financial structure, long-term survival secured",
      "Radio advertising market share maintained — bankruptcy completed without brand damage",
    ],
    risks: [
      "Total PE equity loss of $2.65B — Bain Capital and THL Partners' full investment wiped out",
      "Combined bank losses estimated $500M–$1.5B — legal binding force of 'commitments' reconfirmed",
      "10 years of digital media innovation completely blocked — failed to respond to Spotify and podcast era",
      "Thousands of employees restructured — traditional media industry jobs destroyed",
      "This deal triggered re-debate about 'MAC clause usability' in leveraged loan markets",
    ],
    editorNote: "Clear Channel LBO's most important lessons are two. First, leveraged loans committed at peak pricing will cause bank losses if market flex alone cannot cover the gap. Second, extreme leverage of Debt/EBITDA 13× can kill a company through interest alone even without structural industry change. This is why LevFin analysts use this deal as a 'counter-example of Credit Metrics.'",
  },

  tombstone: {
    acquirerInitials: "BAIN",
    acquirerBg:       "bg-red-700",
    targetInitials:   "CCO",
    targetBg:         "bg-slate-700",
    acquirerName:     "Bain Capital / THL Partners",
    targetName:       "Clear Channel Communications",
    dealTitle:        "Clear Channel Go-Private LBO",
    dealSize:         "$19.4B",
    dealSizeUSD:      "$19.4bn",
    evEbitda:         "13.6×",
    closeDate:        "July 2008",
  },

  sources: [
    { id: 1,  text: "Clear Channel Communications (2006). Merger Agreement — Bain Capital / THL Partners. November 16, 2006." },
    { id: 2,  text: "New York Supreme Court (2008). Clear Channel v. Citigroup — Complaint. January 28, 2008." },
    { id: 3,  text: "Wall Street Journal (2008). Banks Settle Clear Channel Dispute. March 2008." },
    { id: 4,  text: "iHeartMedia (2018). Chapter 11 Voluntary Petition. March 14, 2018." },
    { id: 5,  text: "iHeartMedia (2019). Plan of Reorganization Effective Date. May 1, 2019." },
    { id: 6,  text: "S&P LCD (2008). Clear Channel Leveraged Loan — Hung Deal Analysis." },
    { id: 7,  text: "Moody's Investors Service (2017). iHeartCommunications Credit Assessment." },
    { id: 8,  text: "Bloomberg (2018). iHeartMedia Files for Bankruptcy with $20 Billion in Debt. March 2018." },
    { id: 9,  text: "FT (2008). Banks in Clear Channel Leveraged Loan Face Losses. March 2008." },
    { id: 10, text: "Harvard Business School (2010). Case Study: Clear Channel LBO and the Leveraged Loan Market." },
  ],

  seo: {
    title: "Clear Channel iHeartMedia LBO — Hung Deal and Leveraged Loan Pricing Risk Fully Analyzed",
    description: "2006 peak commitment → financial crisis → MAC escape attempt → litigation → 2008 forced closing → 2018 Chapter 11. LevFin's Hung Deal textbook: market flex limits and 10-year zombie company fully dissected.",
    keywords: [
      "iHeartMedia", "Clear Channel", "Hung Deal", "leveraged loan", "MAC clause",
      "LBO bankruptcy", "market flex", "Bain Capital", "Chapter 11",
      "leveraged loan", "hung deal", "market flex provision", "LevFin pricing",
    ],
  },

  concepts: [
    {
      term: "Hung Deal",
      href: "/market-101/levfin-process",
      description: "A situation where banks that committed to a leveraged loan are unable to sell it to institutional investors and are left 'hung' on their balance sheets. Clear Channel is the most famous Hung Deal case in history.",
    },
    {
      term: "Market Flex",
      href: "/market-101/levfin-pricing",
      description: "The right of banks to adjust the spread when syndicating a loan based on demand. In Clear Channel, banks tried even the extreme measure of invoking the MAC clause after a +85bp flex still couldn't move the market.",
    },
    {
      term: "MAC Clause (Material Adverse Change)",
      href: "/market-101/levfin-process",
      description: "A provision allowing the acquirer or financing provider to withdraw from a contract if a material adverse change occurs in the target company after announcement. In the Clear Channel case, the court rejected the banks' MAC argument.",
    },
    {
      term: "Zombie Company",
      description: "A company that is paying interest but has no free cash flow available for business growth or investment, making normal competition impossible. iHeartMedia was a classic LBO zombie company for 10 years from 2008 to 2018.",
    },
    {
      term: "Interest Coverage Ratio (ICR)",
      href: "/market-101/levfin-credit-metrics",
      description: "EBITDA ÷ interest expense. iHeartMedia was at 0.65× before bankruptcy — unable to cover even interest payments with EBITDA. In credit analysis, ICR below 1.5× is considered a red alert threshold.",
    },
  ],

  faq: [
    {
      q: "What is a Hung Deal and why is Clear Channel the defining example?",
      a: "A Hung Deal occurs when banks commit to LBO acquisition financing but fail at syndication (distributing to institutional investors), leaving the loan 'hung' on their balance sheets. Clear Channel is the worst case: $17.9B was committed at peak spreads (LIBOR+265bp) in 2006, became unsellable in the 2007–2008 credit crisis, and banks even attempted to invoke the MAC clause to escape — a complete failure on every level.",
    },
    {
      q: "Why did the Clear Channel banks fail to escape via the MAC clause?",
      a: "The court ruled that there had been no material adverse change to Clear Channel's actual business (radio broadcasting). The logic was that deteriorating credit markets constituted a 'change in macroeconomic conditions,' not a 'change specific to Clear Channel's business.' This ruling established the legal precedent that 'broad market deterioration does not qualify as a MAC event.'",
    },
    {
      q: "What happened to iHeartMedia after the Chapter 11 bankruptcy?",
      a: "After filing for bankruptcy in March 2018, the reorganization plan became effective in May 2019. $9.5B in debt was discharged and creditors received new equity. Bain Capital and THL's equity was entirely wiped out. After relisting, iHeartMedia has focused on the podcast (#1 podcast platform) and streaming radio transformation.",
    },
    {
      q: "How dangerous is Debt/EBITDA of 13×?",
      a: "Extremely dangerous. In LBO transactions, 5–6× is generally considered appropriate and 7–8× the upper limit. At 13×, a 10% decline in EBITDA can push the interest coverage ratio below 1.0×. iHeartMedia actually fell below ICR of 0.65× as radio advertising revenue gradually declined.",
    },
  ],

  // ── LevFin Perspective Overlay ───────────────────────────────
  levfinOverview: {
    angle: "The Hung Deal Textbook — Limits of Market Flex and the Cost of Peak-Cycle Commitments",
    body: "Clear Channel LBO is the only case in leveraged finance history that combines 'peak pricing + credit crisis + MAC escape attempt + court-forced closing' in a single deal. Banks committed $17.9B at LIBOR+265bp, then tried to flee via MAC when the market turned — and failed. This deal simultaneously reveals the limits of leveraged loan contract structure and market flex provisions.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$7.1B",
        rate: "LIBOR + 265bp → +350bp (flex)",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 37,
        color: "bg-amber-500",
      },
      {
        name: "Term Loan C / Incremental",
        amountDisplay: "$1.25B",
        rate: "LIBOR + 350bp",
        maturity: "8 years",
        seniority: "senior-secured",
        pct: 8,
        color: "bg-amber-400",
      },
      {
        name: "Senior Notes (Fixed Rate Bonds)",
        amountDisplay: "$4.9B",
        rate: "Fixed 9.0–10.75%",
        maturity: "8–10 years",
        seniority: "senior-unsecured",
        pct: 26,
        color: "bg-orange-500",
      },
      {
        name: "Senior Toggle Notes",
        amountDisplay: "$2.2B",
        rate: "Fixed 11.0% (cash) / 11.75% (PIK option)",
        maturity: "8 years",
        seniority: "subordinated",
        pct: 12,
        color: "bg-red-500",
      },
      {
        name: "Bridge Loan → Bond Conversion",
        amountDisplay: "$3.5B",
        rate: "Converted (replaced by fixed-rate bonds)",
        maturity: "Converted",
        seniority: "bridge",
        pct: 10,
        color: "bg-purple-400",
      },
      {
        name: "Equity (PE + Management)",
        amountDisplay: "$2.65B",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 7,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Leverage",        value: "13×",     sub: "Debt/EBITDA — extreme in LBO history",        isAlert: true  },
      { label: "Annual Interest",       value: "$1.5B+",  sub: "Consumed 100%+ of EBITDA",                    isAlert: true  },
      { label: "TLB Spread Flex",       value: "+85bp",   sub: "265bp → 350bp (32% above peak)",              isAlert: false },
      { label: "Immediate Bank Losses", value: "$1.5B",   sub: "Hung position + markdown combined",           isAlert: true  },
    ],
    lessons: [
      {
        icon: "📊",
        title: "Market Flex Is a 'Cushion,' Not 'Insurance'",
        body: "Market flex gives banks the right to raise spreads to sell a loan, but when the market itself has closed, it's useless. In Clear Channel, banks tried the extreme step of invoking the MAC clause after CLOs and loan funds refused to buy even with a +85bp flex. This event clearly revealed the limits of market flex.",
      },
      {
        icon: "⚖️",
        title: "MAC Must Be 'Company-Specific,' Not 'Market Deterioration'",
        body: "The court's reasoning in rejecting the banks' MAC argument was clear: credit market deterioration was a problem for the entire market, not specific to Clear Channel's business, so it did not qualify as a MAC event. This ruling became the precedent establishing the limited scope of MAC clause application in leveraged loan agreements.",
      },
      {
        icon: "🧟",
        title: "Debt/EBITDA 13× Creates a Zombie",
        body: "When interest exceeds 100% of EBITDA, the company becomes a 'zombie' existing only for its creditors. While Spotify was launching the streaming revolution, iHeartMedia burned through its EBITDA paying $1.5B in annual interest. It wasn't that there was no $500M to invest in digital transformation — it was structurally impossible from the start.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-pricing",
        chapterNum: "Ch.5",
        title: "Pricing & Market Flex",
        whyRelevant: "LIBOR+265bp → +350bp flex limit, mechanism of bank Hung position losses",
      },
      {
        slug: "levfin-process",
        chapterNum: "Ch.4",
        title: "Deal Process",
        whyRelevant: "MAC clause legal doctrine, forced closing, how Hung Deals arise and get resolved",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "Distressed Debt & Restructuring",
        whyRelevant: "ICR 0.65× zombie company for 10 years, creditor equity conversion after Chapter 11",
      },
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "Credit Metrics Analysis",
        whyRelevant: "Dangers of Debt/EBITDA 13× — real-time tracking of how ICR falls below 1×",
      },
    ],
  },
};

export default deal;
