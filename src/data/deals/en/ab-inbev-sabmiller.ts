/**
 * AB InBev × SABMiller Merger
 * Largest-Ever Consumer Staples M&A — £79.2B (~$104B), Closed October 2016
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ab-inbev-sabmiller",
  title: "Why AB InBev Paid £79.2B for SABMiller — Anatomy of the Largest-Ever Consumer Staples M&A",
  subtitle: "Emerging Market Expansion · 30% Global Beer Share · ZBB Cost Cuts vs. Regulatory Divestitures",
  category: "ma",
  industry: "Beverages / Alcoholic Beverages",
  country: "USA · Belgium · UK",
  announcedAt: "2015-10-13",
  closedAt: "2016-10-10",
  announcedDisplay: "October 2015",
  closedDisplay: "October 2016",
  readingMinutes: 11,
  tags: ["AB InBev", "SABMiller", "Beer", "Consumer Staples M&A", "3G Capital", "Miller", "Budweiser", "Antitrust"],
  excerpt:
    "AB InBev's $104 billion acquisition of SABMiller in 2016 stands as the largest-ever consumer staples M&A. The combined entity controls roughly 30% of global beer volume, achieving a near-oligopoly. The deal required massive divestitures — MillerCoors to Molson Coors ($12B), Peroni and Grolsch to Asahi ($2.9B), and CR Snow to CR Beer — as regulatory conditions. 3G Capital's Zero-Based Budgeting discipline was the financial engine justifying the premium.",

  acquirer: { initials: "ABI", bg: "bg-yellow-700", label: "AB InBev (Anheuser-Busch InBev)" },
  target: { initials: "SAB", bg: "bg-amber-600", label: "SABMiller" },

  background: [
    "By 2015, the global beer market was approaching a pivotal consolidation. Anheuser-Busch InBev, owner of Budweiser, Corona, and Stella Artois, was the undisputed world number one. SABMiller, home to Miller, Peroni, and Castle Lager, held commanding positions across Africa, Latin America, and Asia — markets where AB InBev had little to no presence. As premium volume growth in developed markets began to stagnate, AB InBev identified SABMiller's emerging-market footprint as the fastest path to its next decade of growth.",
    "The strategic rationale was geographic complementarity. AB InBev dominated North America, Western Europe, and Brazil, but SABMiller had spent three decades building a dominant position across 24 African nations and a joint venture (CR Snow) that was China's largest beer brand by volume. Rather than spending years building organically against entrenched incumbents, acquiring SABMiller outright was the only realistic path to simultaneous entry across all these markets.",
    "3G Capital's operating philosophy was the financial engine of the deal. The private equity firm — AB InBev's controlling shareholder — had already driven AB InBev's EBITDA margins to among the highest in global consumer staples via Zero-Based Budgeting (ZBB), a discipline that forces every line of cost to be justified from zero each year. SABMiller's margins lagged significantly, and 3G's track record suggested that applying ZBB could unlock $1.4–2.0 billion in annual synergies — a figure that underwrote the headline premium.",
    "The deal accelerated when AB InBev secured the backing of SABMiller's two largest shareholders: Altria Group (~27% stake) and BevCo of the Santo Domingo family (~14%). The SABMiller board initially rejected the first approach, but when AB InBev raised its offer to £44 per share — roughly a 50% premium to the pre-announcement price — the board recommended the deal in October 2015. Regulatory clearances in the US (DoJ), EU (EC), and China (MOFCOM) required pre-agreed divestitures of MillerCoors, European premium brands, and the CR Snow stake before the deal closed in October 2016.",
  ],

  dealSummary: {
    dealValueDisplay: "£79.2B (~USD $104B)",
    acquirerName: "Anheuser-Busch InBev SA/NV",
    targetName: "SABMiller plc",
    announcedDisplay: "October 2015",
    closedDisplay: "October 2016",
    country: "USA · Belgium · UK",
  },

  executiveSummary: [
    "£79.2B (~$104B) — largest-ever consumer staples M&A; combined entity controls ~30% of global beer volume",
    "Core logic: AB InBev's developed-market strength + SABMiller's Africa/emerging-market portfolio — pure geographic complementarity",
    "3G Capital's ZBB model — SABMiller's margin gap justified the premium; $1.4–2.0B+ annual synergy target",
    "Regulatory divestitures: MillerCoors (→Molson Coors, $12B), Peroni + Grolsch (→Asahi, $2.9B), CR Snow (→CR Beer)",
    "Financing: $75B+ bank syndicate debt — post-deal net debt exceeded $100B, creating sustained financial pressure",
    "2018 share price fell 40%+ — craft beer headwinds and over-leverage; dividend halved",
    "Long-term: Africa and Asia portfolios are now seen as durable growth anchors validating the strategic thesis",
  ],

  industryOverview: {
    body: "The global beer market was worth approximately $600 billion in 2015, characterized by stagnant volume growth in developed markets and robust expansion in emerging markets. Craft beer in the US and Western Europe was structurally eroding the market share of legacy mass lager brands, while millennials showed greater interest in spirits and wine. Africa (growing at 5–7% annually), Southeast Asia, and Latin America represented the industry's growth frontier, driven by expanding middle classes and rising per-capita beer consumption. The AB InBev–SABMiller deal was the industry's largest-ever response to this structural bifurcation.",
    metrics: [
      { label: "Global Beer Market Size", value: "~$600B", sub: "2015 estimate" },
      { label: "Combined Market Share (Volume)", value: "~30%", sub: "Post-merger global beer consumption" },
      { label: "Africa Beer Market Growth", value: "5–7% p.a.", sub: "SABMiller's core strength region" },
      { label: "US Craft Beer Share", value: "~12%", sub: "2015, growing rapidly" },
    ],
    subBody: "The global brewing industry was already oligopolistic — the top five players accounted for roughly half of global volume — and the AB InBev–SABMiller deal pushed concentration further. Regulators in three major jurisdictions responded by requiring the disposal of key brands in competitive markets. Separately, the rise of hard seltzer (launched at scale by White Claw in 2016) would prove to be a disruptive category that legacy brewers including AB InBev were slow to address.",
    players: [
      { name: "AB InBev", role: "World #1 brewer; Budweiser, Corona, Stella Artois; acquirer" },
      { name: "SABMiller", role: "World #2; Miller, Peroni, Castle Lager; Africa/Asia stronghold" },
      { name: "Heineken", role: "World #3; Europe/Asia focus; remained independent" },
      { name: "Carlsberg", role: "World #4; Northern and Eastern Europe focus" },
      { name: "Molson Coors", role: "Acquired full MillerCoors stake; US #2 brewer post-deal" },
    ],
  },

  companyOverview: {
    targetName: "SABMiller plc",
    body: "SABMiller traced its roots to the South African Breweries (SAB), founded in 1895. Its 2002 acquisition of Miller Brewing created the SABMiller brand and established it as a global powerhouse. Listed on the London Stock Exchange, it operated in over 80 countries with leading positions in Africa (Castle Lager and 24-country dominance), Europe (Peroni, Grolsch, Pilsner Urquell), the US (MillerCoors joint venture), and China (CR Snow joint venture, the country's largest beer brand by volume). SABMiller's relative margin underperformance compared to AB InBev was the central financial argument for applying 3G's ZBB playbook post-acquisition.",
    metrics: [
      { label: "Listed Exchange", value: "London Stock Exchange (LSE)", sub: "Delisted upon merger completion, 2016" },
      { label: "Countries of Operation", value: "80+", sub: "#1 position in 24 African nations" },
      { label: "Revenue (FY2015E)", value: "~$22.5B", sub: "USD billion equivalent" },
      { label: "EBITDA (FY2015E)", value: "~$5.8B", sub: "EV/EBITDA implied ~15–16x" },
      { label: "Key Brands", value: "Miller, Peroni, Pilsner Urquell, Grolsch, Castle Lager, CR Snow", sub: "Region-specific brand strengths" },
    ],
    financials: [
      { year: "2014", revenue: 220, cogs: 100, grossProfit: 120, sga: 45, operatingIncome: 30, ebitda: 55 },
      { year: "2015", revenue: 225, cogs: 102, grossProfit: 123, sga: 46, operatingIncome: 32, ebitda: 58 },
    ],
    financialsNote: "Unit: USD hundred million (億). Based on public filings and industry estimates. SABMiller used a March fiscal year-end; figures above are calendar-year approximations.",
    financialsCurrency: "USD",
    financialsUnit: "億",
  },

  dealStructure: {
    body: "AB InBev acquired SABMiller entirely in cash at £44 per share, representing roughly a 50% premium to SABMiller's pre-announcement share price. For Altria and BevCo — SABMiller's two largest shareholders — a tax-efficient Partial Share Alternative (PSA) was offered, allowing them to elect unlisted restricted shares in the combined company instead of cash. The $75 billion-plus financing package was assembled through a syndicate of leading global banks, combining term loans and bonds. Key regulatory divestitures were agreed upfront: MillerCoors to Molson Coors ($12B) required by the US DoJ; Peroni, Grolsch, and Meantime to Asahi ($2.9B) required by the EU; and the CR Snow stake to CR Beer required by China's MOFCOM.",
    preOwnership: {
      nodes: [
        { id: "abinbev", label: "AB InBev SA/NV", sub: "NYSE/Euronext Listed", type: "acquirer" },
        { id: "3g", label: "3G Capital & Altria", sub: "Major AB InBev shareholders", type: "fund" },
        { id: "sabmiller", label: "SABMiller plc", sub: "LSE Listed (independent)", type: "target" },
        { id: "altria_sab", label: "Altria Group", sub: "~27% SABMiller stake", type: "entity" },
        { id: "bevco", label: "BevCo (Santo Domingo family)", sub: "~14% SABMiller stake", type: "entity" },
      ],
      edges: [
        { from: "3g", to: "abinbev", label: "Controlling shareholders" },
        { from: "altria_sab", to: "sabmiller", label: "~27% stake" },
        { from: "bevco", to: "sabmiller", label: "~14% stake" },
        { from: "abinbev", to: "sabmiller", label: "Acquisition negotiations" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "abinbev_parent", label: "AB InBev SA/NV", sub: "NYSE/Euronext Listed", type: "acquirer" },
        { id: "sabmiller_sub", label: "Former SABMiller Assets", sub: "Fully absorbed into AB InBev", type: "target" },
        { id: "molsoncoors", label: "Molson Coors", sub: "Acquired MillerCoors ($12B)", type: "entity" },
        { id: "asahi", label: "Asahi Group", sub: "Acquired Peroni + Grolsch + Meantime ($2.9B)", type: "entity" },
        { id: "crbeer", label: "CR Beer", sub: "Acquired CR Snow stake", type: "entity" },
      ],
      edges: [
        { from: "abinbev_parent", to: "sabmiller_sub", label: "100% absorption merger" },
        { from: "sabmiller_sub", to: "molsoncoors", label: "MillerCoors divested" },
        { from: "sabmiller_sub", to: "asahi", label: "European brands divested" },
        { from: "sabmiller_sub", to: "crbeer", label: "China stake divested" },
      ],
    },
    keyTerms: [
      { label: "Deal Size", value: "£79.2B (~USD $104B)", accent: true },
      { label: "Price per Share", value: "£44 (all-cash)", accent: false },
      { label: "Acquisition Premium", value: "~50% to 60-day VWAP", accent: true },
      { label: "Deal Structure", value: "All-cash; PSA (unlisted shares) for Altria & BevCo", accent: false },
      { label: "Financing", value: "$75B+ bank syndicate (loans + bonds)", accent: false },
      { label: "MillerCoors Divestiture", value: "Sold to Molson Coors for $12B (DoJ condition)", accent: false },
      { label: "European Brand Divestiture", value: "Sold to Asahi for $2.9B (EC condition)", accent: false },
      { label: "EV / EBITDA", value: "~15–16x (based on SABMiller EBITDA)", accent: true },
      { label: "Regulatory Approvals", value: "US DoJ, EU EC, China MOFCOM — all conditional", accent: false },
      { label: "Closing Date", value: "October 10, 2016", accent: false },
    ],
  },

  advisors: {
    body: "The deal mobilized the top tier of global investment banking and legal advisory talent. AB InBev turned to Lazard and Deutsche Bank on the financial side, while SABMiller assembled a team of JP Morgan and elite UK boutique Robey Warshaw — the latter co-founded by Simon Robey, a former Morgan Stanley banker with a track record on landmark UK deals. The legal mandates spanned multiple jurisdictions, reflecting complex regulatory conditions across three continents.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (AB InBev)",
        initials: "ABI",
        bg: "bg-yellow-700",
        advisors: [
          { firm: "Lazard", role: "Financial Advisor", roleType: "financial", note: "Deal structure and negotiation strategy" },
          { firm: "Deutsche Bank", role: "Financial Advisor & Financing", roleType: "financial", note: "Lead arranger for $75B+ syndication" },
          { firm: "Freshfields Bruckhaus Deringer", role: "Legal Counsel", roleType: "legal", note: "UK and EU regulatory process" },
          { firm: "Skadden Arps", role: "Legal Counsel (US)", roleType: "legal", note: "DoJ antitrust process" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (SABMiller)",
        initials: "SAB",
        bg: "bg-amber-600",
        advisors: [
          { firm: "JP Morgan", role: "Financial Advisor", roleType: "financial", note: "Valuation, price negotiation and defense strategy" },
          { firm: "Robey Warshaw", role: "Financial Advisor (co-advisor)", roleType: "financial", note: "Elite UK M&A boutique; Simon Robey, former Morgan Stanley" },
          { firm: "Linklaters", role: "Legal Counsel", roleType: "legal", note: "UK legal advisory lead" },
          { firm: "Sullivan & Cromwell", role: "Legal Counsel (US)", roleType: "legal", note: "US securities and antitrust" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting and industry sources.",
  },

  valuation: {
    body: "AB InBev applied an EV/EBITDA multiple of approximately 15–16x to SABMiller — one of the highest ever seen in global consumer staples M&A. The multiple reflected two layers of premium beyond standalone EBITDA: first, the expected margin uplift from applying 3G's ZBB methodology to SABMiller's relatively inefficient cost base; and second, the strategic value of instantaneous entry into high-growth emerging markets that would otherwise take a decade to build organically.",
    rows: [
      { item: "Deal EV", val: "£79.2B (~USD $104B)", note: "£44/share, all-cash offer", accent: true },
      { item: "Acquisition Premium", val: "~50%", note: "vs. 60-day volume-weighted average price", accent: true },
      { item: "SABMiller EBITDA (FY2015E)", val: "~$5.8B", note: "Based on public filings and estimates" },
      { item: "EV / EBITDA", val: "~15–16x", note: "Top decile for global consumer staples M&A", accent: true },
      { item: "Annual Synergy Target", val: "$1.4B–$2.0B", note: "ZBB cost cuts + distribution / procurement overlap" },
      { item: "Financing Debt", val: "$75B+", note: "Bank syndicate (loans + bond issuance)" },
      { item: "Post-Deal Net Debt", val: "$100B+", note: "Record consumer staples leverage at close" },
      { item: "Divestiture Proceeds", val: "~$15B+", note: "MillerCoors $12B + Asahi $2.9B + CR Snow" },
    ],
    disclaimer: "All figures are based on public announcements, filings, and industry estimates. EBITDA figures are approximations.",
  },

  rationale: {
    buyer: {
      title: "AB InBev's Acquisition Rationale",
      initials: "ABI",
      bg: "bg-yellow-700",
      points: [
        "Instant emerging-market access — SABMiller's 30-year-built positions across 24 African nations, China (CR Snow), and Latin America acquired in a single transaction",
        "Completion of premium global portfolio — Peroni, Pilsner Urquell, Grolsch elevated AB InBev's brand mix into the upper tier of global premium beer",
        "ZBB margin expansion — SABMiller's below-industry margins represented $1.4B–$2.0B+ in recoverable annual cost synergies under 3G's Zero-Based Budgeting discipline",
        "Scale economics — unified global procurement, shared distribution infrastructure, and consolidated marketing spend across 150+ brands",
        "Diversification away from developed-market headwinds — structural volume decline of mass lager in the US and Western Europe offset by Africa and Asia growth",
      ],
    },
    seller: {
      title: "SABMiller Shareholder Rationale (Sell-Side)",
      initials: "SAB",
      bg: "bg-amber-600",
      points: [
        "~50% premium — compelling certain-value offer at £44/share; Altria (~27%) and BevCo (~14%) were active supporters from early in the process",
        "Independent growth ceiling — SABMiller's standalone ability to compete against AB InBev's capital firepower and global distribution was increasingly questioned",
        "Craft beer structural risk — Miller Lite and Peroni were exposed to the craft beer disruption in the US and Western Europe; standalone reinvestment would be expensive",
        "Altria's strategic preference — SABMiller's largest shareholder preferred portfolio simplification and capital return over a long-dated standalone story",
        "PSA tax efficiency — Altria and BevCo could elect unlisted restricted AB InBev shares instead of cash, deferring capital gains taxes while retaining upside",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-close, AB InBev became the undisputed global beer king with ~30% volume share — but the early years were turbulent. The $100B+ net debt burden constrained investment and forced a 50% dividend cut in 2018. That same year, the combination of hard seltzer disruption, millennial drinking pattern shifts, and Brazilian currency depreciation caused the AB InBev share price to fall 40%+ from its peak. The 2019 attempt to partially IPO the Asia Pacific business in Hong Kong was abandoned. However, from 2022 onward, accelerating Africa and Asia growth, gradual debt reduction, and post-pandemic volume recovery drove a partial re-rating. The strategic thesis on emerging markets has proven durable even if the financial engineering was too aggressive.",
    overallVerdict: "Scale achieved, emerging-market thesis validated — but over-leverage and craft headwinds inflicted severe near-term shareholder value destruction",
    positives: [
      "~30% global beer volume dominance — unmatched procurement scale, distribution reach, and brand portfolio breadth",
      "Africa and Asia as growth anchors — SABMiller's 30-year market-building now delivering compounding returns within the AB InBev system",
      "ZBB synergies exceeded initial targets — $3B+ annual synergies realized within three years, surpassing the original $1.4B guidance",
      "European premium portfolio elevated — Peroni, Pilsner Urquell added credible premium positioning vs. Heineken",
      "Divestiture proceeds reduced debt — $15B+ from MillerCoors, Asahi, and CR Snow accelerated deleveraging",
    ],
    risks: [
      "$100B+ net debt — record consumer staples leverage; interest costs consumed a significant share of free cash flow through 2022",
      "2018 share price crash (-40%+) — hard seltzer disruption, Bud Light volume declines, dividend cut; severe near-term value destruction",
      "Structural craft beer threat — Budweiser, Bud Light long-term volume erosion in the US continued post-merger",
      "Brazil and Argentina currency risk — EM currency depreciation repeatedly impacted USD-reported earnings",
      "Failed 2019 Hong Kong IPO — abandoned Asia Pacific partial listing removed an expected deleveraging catalyst",
    ],
    editorNote: "The AB InBev–SABMiller merger is a masterclass in the gap between strategic logic and financial execution. The geographic rationale was sound and has since been validated by Africa and Asia outperformance. But the deal was struck at peak-cycle multiples using maximum leverage, leaving no margin of safety when craft beer disruption and hard seltzer arrived simultaneously. The lesson: a strategically correct thesis executed with too much debt — and at the wrong moment in the consumer cycle — can still inflict years of shareholder pain.",
  },

  tombstone: {
    acquirerInitials: "ABI",
    acquirerBg: "bg-yellow-700",
    targetInitials: "SAB",
    targetBg: "bg-amber-600",
    acquirerName: "Anheuser-Busch InBev SA/NV",
    targetName: "SABMiller plc",
    dealTitle: "Largest-Ever Global Beer Consolidation",
    dealSize: "£79.2B (~USD $104B)",
    dealSizeUSD: "USD ~104 Billion",
    evEbitda: "~15–16x",
    closeDate: "Oct 2016",
  },

  sources: [
    { id: 1, text: "AB InBev Press Release — AB InBev and SABMiller to Combine (October 2015)", url: "https://www.ab-inbev.com" },
    { id: 2, text: "SABMiller Scheme Document — Court-Approved Scheme of Arrangement (2016)" },
    { id: 3, text: "Bloomberg — AB InBev Wins SABMiller Approval for £79 Billion Deal (October 2015)" },
    { id: 4, text: "Financial Times — SABMiller Board Backs AB InBev's Revised Bid (October 2015)" },
    { id: 5, text: "US Department of Justice — Competitive Impact Statement: AB InBev/SABMiller (2016)" },
    { id: 6, text: "European Commission — Case M.7881 AB InBev/SABMiller Merger Decision (2016)" },
    { id: 7, text: "Wall Street Journal — Molson Coors Buys Out SABMiller's MillerCoors Stake for $12 Billion (2016)" },
  ],

  seo: {
    title: "AB InBev SABMiller Merger Analysis — $104B Largest Consumer Staples M&A",
    description: "Complete analysis of AB InBev's $104 billion acquisition of SABMiller — the largest-ever consumer staples M&A. 30% global beer share, ZBB synergies, antitrust divestitures, and post-deal performance dissected.",
    keywords: [
      "AB InBev SABMiller merger",
      "largest consumer staples M&A",
      "global beer consolidation",
      "3G Capital ZBB",
      "MillerCoors divestiture",
    ],
  },

  concepts: [
    { term: "Global Consolidation Strategy", href: "/deal-101/global-consolidation", description: "Acquiring geographic complementarity to instantly enter markets that would take decades to build organically" },
    { term: "Zero-Based Budgeting (ZBB)", href: "/deal-101/zbb", description: "3G Capital's core cost discipline — every budget line justified from zero each year, driving industry-leading margins" },
    { term: "Regulatory Divestiture", href: "/deal-101/regulatory-divestiture", description: "Mandatory sale of brands or assets imposed by antitrust authorities as a condition of merger approval" },
  ],

  faq: [
    {
      q: "What was the core strategic rationale for AB InBev acquiring SABMiller?",
      a: "Geographic complementarity was the primary driver. AB InBev dominated North America, Western Europe, and Brazil, but had minimal presence in Africa, Eastern Europe, and Asia — the markets where SABMiller had spent 30 years building dominant positions. SABMiller held the #1 position in 24 African countries and co-owned CR Snow, China's largest beer brand by volume. Rather than attempting to build those positions organically over a decade, AB InBev chose to acquire them instantly for £79.2 billion. 3G Capital's proven ability to apply Zero-Based Budgeting to SABMiller's below-peer margins provided the financial justification for the premium.",
    },
    {
      q: "What divestitures did regulators require and why?",
      a: "Three major disposals were required across different jurisdictions. The US Department of Justice required the sale of the MillerCoors joint venture (which gave the combined entity approximately 70% US market share) to Molson Coors for $12 billion. The European Commission required the sale of Peroni, Grolsch, and Meantime — key competitive brands in EU markets — to Japan's Asahi for approximately $2.9 billion. China's MOFCOM required disposal of the CR Snow stake to CR Beer to address local concentration concerns. These divestitures served dual purposes: satisfying regulators and generating $15 billion+ in proceeds to help service the $100B+ acquisition debt.",
    },
    {
      q: "What is Zero-Based Budgeting (ZBB) and why was it central to this deal's financial logic?",
      a: "ZBB is a budgeting discipline pioneered in corporate practice by 3G Capital, in which every expense must be justified from a zero base each budget cycle — rather than simply rolling forward prior-year spending plus an increment. Applied aggressively to AB InBev, ZBB drove the company's EBITDA margins to among the highest in global consumer staples. SABMiller's margins were materially lower, implying a significant opportunity. 3G's analysis suggested that applying ZBB to SABMiller's cost base could generate $1.4–2.0 billion in annual synergies. That synergy estimate was core to making the ~15–16x EBITDA acquisition multiple financially defensible.",
    },
    {
      q: "Why did AB InBev's share price crash in 2018 after the deal closed?",
      a: "Three factors converged simultaneously. First, the $100B+ net debt burden — the largest ever carried by a consumer staples company — left the balance sheet with almost no buffer, forcing a 50% dividend cut and limiting investment capacity. Second, hard seltzer (led by White Claw, launched in 2016) and the ongoing craft beer trend accelerated structural volume declines in Budweiser and Bud Light, AB InBev's highest-volume US brands — exactly the developed-market weakness the deal had been meant to diversify away from, but faster than expected. Third, significant depreciation in the Brazilian real and Argentine peso reduced the USD value of earnings from Latin America, the region AB InBev had entered as its supposed growth engine. The stock fell more than 40% from its post-deal peak.",
    },
  ],
};

export default deal;
