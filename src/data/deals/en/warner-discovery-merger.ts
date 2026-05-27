/**
 * AT&T × WarnerMedia × Discovery — Warner Bros. Discovery Merger
 * Reverse Morris Trust · Bought for $85B, Sold for $43B · Media's Biggest Value Destruction
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "warner-discovery-merger",
  title: "AT&T Sells WarnerMedia at a $40B Loss — The Warner Bros. Discovery Merger Explained",
  subtitle: "$85B Bought, $43B Sold · $55B Debt Mountain · Can Max Streaming Save the Empire?",
  category: "ma",
  industry: "Media & Entertainment / Telecommunications",
  country: "United States",
  announcedAt: "2021-05-17",
  closedAt: "2022-04-08",
  announcedDisplay: "May 2021",
  closedDisplay: "April 2022",
  readingMinutes: 13,
  tags: [
    "Warner Bros Discovery",
    "AT&T",
    "WarnerMedia",
    "Discovery",
    "HBO Max",
    "streaming",
    "media M&A",
    "Reverse Morris Trust",
  ],
  excerpt:
    "AT&T bought Time Warner for $85B in 2018, then sold WarnerMedia to Discovery just four years later for roughly $43B — one of the largest value destructions in media history. Discovery CEO David Zaslav took the helm of the combined Warner Bros. Discovery, inheriting $55B in debt, slashing content, and launching Max to compete in the streaming wars.",

  acquirer: { initials: "DISC", bg: "bg-blue-700", label: "Discovery, Inc." },
  target: { initials: "WM", bg: "bg-gray-800", label: "WarnerMedia (AT&T)" },

  background: [
    "In 2018, AT&T acquired Time Warner — the parent of HBO, CNN, Warner Bros. Studios, and Turner Broadcasting — for $85B, declaring its transformation from a telecom carrier into an integrated media and distribution giant. CEO Randall Stephenson's thesis: bundle premium content with AT&T's wireless and broadband pipes to take on Netflix directly. The DOJ sued to block it on antitrust grounds; AT&T won in court. The deal closed in June 2018 and became the largest telecom-media M&A on record.",
    "The experiment failed badly. The combined AT&T's total debt ballooned past $190B. Running a creative media empire proved fundamentally different from operating a utility-like telecom business — culturally, operationally, and strategically. HBO Max, launched in May 2020, trailed Netflix and Disney+ in subscriber growth. Investors pushed hard for AT&T to shed the media assets and refocus on its 5G and fiber core.",
    "On May 17, 2021, AT&T and Discovery announced a landmark transaction: AT&T would spin off WarnerMedia and merge it with Discovery in a Reverse Morris Trust structure. AT&T shareholders would receive 71% of the new combined company, Discovery shareholders 29%. AT&T would receive approximately $43B in value (a cash component plus assumption of WarnerMedia debt). The combined company would operate as Warner Bros. Discovery.",
    "The deal closed on April 8, 2022. Discovery's CEO David Zaslav took over as CEO of the combined company. Warner Bros. Discovery launched with over $55B in debt and immediately began aggressive restructuring: $2B+ in content write-offs, layoffs across divisions, and the eventual integration of HBO Max and Discovery+ into a unified streaming service called Max, launched in May 2023.",
  ],

  dealSummary: {
    dealValueDisplay: "~$43B (AT&T proceeds) / Combined EV ~$90B",
    acquirerName: "Discovery, Inc. (now Warner Bros. Discovery)",
    targetName: "WarnerMedia (spun off from AT&T)",
    announcedDisplay: "May 2021",
    closedDisplay: "April 2022",
    country: "United States",
  },

  executiveSummary: [
    "AT&T bought WarnerMedia for $85B in 2018; sold it for ~$43B in 2022 — a $40B+ destruction of shareholder value in under four years.",
    "Reverse Morris Trust structure: AT&T shareholders received 71%, Discovery shareholders 29% of newly combined Warner Bros. Discovery.",
    "AT&T received ~$43B in value (cash + debt transfer); Discovery gained control of HBO, CNN, Warner Bros., and Turner networks.",
    "Combined WBD launched with ~$55B in total debt — deleveraging became the overriding strategic imperative from day one.",
    "CEO David Zaslav led aggressive cost cuts: $2B+ in content write-offs, mass layoffs, and the May 2023 launch of Max (HBO Max + Discovery+ combined).",
    "The deal stands as a cautionary tale on telecom-media vertical integration — and the limits of buying cultural industries with financial engineering.",
  ],

  industryOverview: {
    body: "In 2021, the global media and entertainment industry was in the throes of a streaming revolution. Netflix had over 220 million subscribers globally. Disney+ had crossed 100 million users in just two years. Traditional cable TV was losing millions of subscribers annually to cord-cutting. Every major media company was investing tens of billions in streaming platforms and original content in a race to build the next Netflix. At the same time, cable networks — though structurally declining — remained the industry's primary cash generator, funding the streaming transition.",
    metrics: [
      { label: "Global Streaming Market", value: "~$75B", sub: "2021 revenue" },
      { label: "Netflix Subscribers", value: "220M+", sub: "end of 2021" },
      { label: "US Cable Cord-Cutting", value: "~5M households/yr", sub: "2020–2021 avg." },
      { label: "Global M&E Market", value: "~$2.1T", sub: "all media segments, 2021" },
    ],
    subBody:
      "The AT&T-WarnerMedia experiment encapsulated a broader industry question: could telecom operators successfully run premium content businesses? The answer was a resounding no. Meanwhile, pure-play media companies like Discovery — masters of low-cost, high-margin factual content — saw an opportunity to punch well above their weight by merging with a premium IP library they could never have built organically. Whether Zaslav's cost-discipline DNA could coexist with HBO's creative culture became the central narrative of the new WBD.",
    players: [
      { name: "Netflix", role: "Global streaming #1, ~$17B content spend in 2021" },
      { name: "Disney (Disney+/Hulu/ESPN+)", role: "Streaming #2 by subs, unrivaled franchise IP" },
      { name: "Comcast (NBCUniversal/Peacock)", role: "Hybrid cable + streaming, Sky in Europe" },
      { name: "Amazon Prime Video", role: "Bundled streaming, acquired MGM in 2022" },
    ],
  },

  companyOverview: {
    targetName: "WarnerMedia (AT&T spin-off)",
    body: "WarnerMedia comprised some of the most storied assets in entertainment: HBO (premium drama and film), CNN (global news), Warner Bros. Studios (DC Universe, Harry Potter, The Matrix, Looney Tunes), Turner Broadcasting (TNT, TBS, Cartoon Network), and HBO Max (streaming). At time of the deal announcement, WarnerMedia generated approximately $36B in annual revenue and ~$10B in EBITDA. HBO Max had launched in May 2020 but lagged Netflix and Disney+ in subscriber growth. Combined with Discovery's factual/reality content brands (Discovery Channel, HGTV, Food Network, Animal Planet), the new WBD aimed to be a credible third force in global streaming.",
    metrics: [
      { label: "Combined Revenue (2022)", value: "~$43.2B", sub: "First full year post-merger" },
      { label: "Combined Adj. EBITDA (2022)", value: "~$9.8B", sub: "Including restructuring charges" },
      { label: "HBO/Max Subscribers", value: "~92M", sub: "End of 2022" },
      { label: "Total Debt at Close", value: "~$55B", sub: "Primary strategic constraint" },
      { label: "Content Write-offs", value: "$2B+", sub: "Immediate post-merger content purge" },
    ],
    financials: [
      { year: "2022", revenue: 43185, cogs: 28000, grossProfit: 15185, sga: 9500, operatingIncome: -4000, ebitda: 9800 },
      { year: "2023", revenue: 41322, cogs: 26500, grossProfit: 14822, sga: 9200, operatingIncome: -2000, ebitda: 9500 },
      { year: "2024", revenue: 39300, cogs: 25000, grossProfit: 14300, sga: 8500, operatingIncome: 1500, ebitda: 9000 },
    ],
    financialsNote: "USD millions. Pro-forma combined WBD basis. 2022 heavily impacted by restructuring. EBITDA is adjusted.",
    financialsCurrency: "USD",
    financialsUnit: "mn",
    revenueBreakdown: [
      { name: "Cable Networks", pct: 48, color: "bg-blue-700", amt: "~$20.7B" },
      { name: "Studios", pct: 22, color: "bg-yellow-500", amt: "~$9.5B" },
      { name: "Streaming", pct: 18, color: "bg-purple-500", amt: "~$7.8B" },
      { name: "Advertising", pct: 12, color: "bg-gray-500", amt: "~$5.2B" },
    ],
  },

  dealStructure: {
    body: "The transaction used a Reverse Morris Trust (RMT) structure, a tax-efficient mechanism for separating a business unit via merger rather than outright sale. AT&T first separated WarnerMedia as a standalone entity, which then merged with Discovery. Because AT&T shareholders received shares in WBD rather than cash, the spin-off qualified as a tax-free distribution under U.S. tax law (Section 355), saving billions in capital gains taxes AT&T would have owed on a direct sale. For the structure to qualify, AT&T shareholders had to retain more than 50% of WBD — hence the 71%/29% split favoring AT&T shareholders.",
    preOwnership: {
      nodes: [
        { id: "att", label: "AT&T Inc.", sub: "NYSE: T · Largest US telecom", type: "acquirer" },
        { id: "wm", label: "WarnerMedia", sub: "100% AT&T subsidiary", type: "target" },
        { id: "disc", label: "Discovery, Inc.", sub: "Nasdaq-listed · Independent media", type: "public" },
      ],
      edges: [
        { from: "att", to: "wm", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_sh", label: "AT&T Shareholders", sub: "Received 71% of WBD shares", type: "public" },
        { id: "disc_sh", label: "Discovery Shareholders", sub: "Retain 29% of WBD shares", type: "public" },
        { id: "wbd", label: "Warner Bros. Discovery", sub: "Nasdaq: WBD · New combined entity", type: "entity" },
        { id: "att2", label: "AT&T Inc.", sub: "Refocused on telecom; no WBD stake", type: "acquirer" },
      ],
      edges: [
        { from: "att_sh", to: "wbd", label: "71%" },
        { from: "disc_sh", to: "wbd", label: "29%" },
      ],
    },
    keyTerms: [
      { label: "Deal Structure", value: "Reverse Morris Trust (tax-free spin-off merger)", accent: true },
      { label: "AT&T Proceeds", value: "~$43B (cash + debt transfer to WBD)", accent: true },
      { label: "WBD Combined EV at Close", value: "~$90B", accent: false },
      { label: "AT&T Shareholder Stake", value: "71% of WBD", accent: false },
      { label: "Discovery Shareholder Stake", value: "29% of WBD", accent: false },
      { label: "Total WBD Debt at Close", value: "~$55B", accent: true },
      { label: "EV / EBITDA at Close", value: "~9.0× (est.)", accent: false },
      { label: "AT&T's Original Acquisition Price", value: "$85B (2018 Time Warner deal)", accent: true },
    ],
  },

  advisors: {
    body: "Both AT&T and Discovery retained top-tier Wall Street advisors and law firms. The complexity of the Reverse Morris Trust structure — including IRS tax ruling, DOJ/FCC regulatory clearances, and the fairness opinions required for AT&T's board — made this one of the most structurally intricate media deals in recent history.",
    sides: [
      {
        side: "target",
        sideLabel: "Seller (AT&T / WarnerMedia)",
        initials: "WM",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Lead FA to AT&T board; fairness opinion provider" },
          { firm: "JPMorgan", role: "Financial Advisor (FA)", roleType: "financial", note: "Co-FA; deal structuring and financing advisory" },
          { firm: "Debevoise & Plimpton", role: "Legal Counsel", roleType: "legal", note: "M&A transaction and Reverse Morris Trust tax structure" },
        ],
      },
      {
        side: "acquirer",
        sideLabel: "Buyer (Discovery, Inc.)",
        initials: "DISC",
        bg: "bg-blue-700",
        advisors: [
          { firm: "LionTree Advisors", role: "Financial Advisor (FA)", roleType: "financial", note: "Exclusive media M&A boutique; primary deal architect for Discovery" },
          { firm: "Deutsche Bank", role: "Financial Advisor (FA)", roleType: "financial", note: "Co-FA; financing and capital structure advisory" },
          { firm: "Cravath, Swaine & Moore", role: "Legal Counsel", roleType: "legal", note: "M&A agreements and merger documentation for Discovery" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public filings and press reports.",
  },

  valuation: {
    body: "AT&T's effective realized value from the WarnerMedia transaction was approximately $43B — roughly half the $85B paid for Time Warner in 2018. The implied loss of $40B+ (before accounting for capital costs and lost dividends over four years) makes this one of the most costly strategic mistakes in media history. The combined WBD enterprise value at close was estimated at ~$90B, with an EV/EBITDA of roughly 9× — a significant discount to peers like Disney (~15×) and Comcast (~10×), reflecting WBD's extreme debt load and streaming execution uncertainty.",
    rows: [
      { item: "AT&T's 2018 WarnerMedia Acquisition Price", val: "$85B", note: "Total EV paid for Time Warner in 2018", accent: true },
      { item: "AT&T Proceeds (2022 deal)", val: "~$43B", note: "Cash received + WarnerMedia debt transferred to WBD", accent: true },
      { item: "Implied Value Destruction", val: "$40B+", note: "Excluding 4-year capital costs and foregone dividends", accent: false },
      { item: "WBD Combined EV at Close", val: "~$90B", note: "WarnerMedia + Discovery combined EV estimate" },
      { item: "WBD Total Debt at Close", val: "~$55B", note: "Including pre-existing WarnerMedia and Discovery debt" },
      { item: "EV / Adj. EBITDA at Close", val: "~9.0×", note: "vs. Disney ~15×, Comcast ~10×; WBD at significant discount", accent: true },
      { item: "WBD Share Price (1yr post-close)", val: "$12–$15", note: "Down from $20+ at open; debt/profitability concerns" },
    ],
    disclaimer: "Valuation figures are estimates based on public filings and industry analysis.",
  },

  rationale: {
    buyer: {
      title: "Discovery's Rationale (David Zaslav)",
      initials: "DISC",
      bg: "bg-blue-700",
      points: [
        "Acquiring irreplaceable IP at scale — HBO, Warner Bros., DC, CNN, and Turner brands that Discovery could never have built organically",
        "Streaming scale to compete — combining HBO Max and Discovery+ subscriber bases to form a credible rival to Netflix and Disney+",
        "Applying cost discipline — Zaslav's low-cost, high-efficiency operating model applied to a bloated premium media operation to expand margins",
        "International distribution synergies — pairing Discovery's presence in 200+ countries with HBO's premium brand to accelerate international DTC growth",
        "Dual-track model — harvesting still-profitable cable network cash flows to service debt while investing in streaming transition",
      ],
    },
    seller: {
      title: "AT&T's Rationale",
      initials: "WM",
      bg: "bg-gray-800",
      points: [
        "Return to telecom focus — admitting failure of the media diversification strategy and reallocating capital to 5G and fiber broadband",
        "Balance sheet repair — shedding WarnerMedia debt to reduce AT&T's $190B+ total debt load and restore credit quality",
        "Tax-efficient exit — Reverse Morris Trust structure saved AT&T an estimated $10B+ in capital gains taxes vs. an outright sale",
        "Shareholder optionality — AT&T shareholders directly received WBD stock, retaining upside if WBD succeeds without AT&T bearing the operational risk",
        "Admitting culture mismatch — conceding that creative media businesses require management DNA fundamentally different from a regulated utility",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Two and a half years after its April 2022 close, Warner Bros. Discovery remains in a difficult transition. Zaslav's aggressive cost discipline has helped maintain adjusted EBITDA, but debt reduction has been slower than initially guided. The decision to cancel and write off completed films — including 'Batgirl' and 'Coyote vs. Acme' — for accounting benefits generated intense backlash from the creative community and raised questions about WBD's commitment to content quality. Max launched in May 2023 and has achieved subscriber growth globally, approaching 100M total subscribers by late 2024. However, streaming profitability remains elusive, cable network revenues continue structural decline, and WBD's stock has languished well below its listing price. The company also explored spinning off its cable networks (TNT Sports, CNN) as a separate entity in 2024.",
    overallVerdict: "Difficult transition underway (debt reduction lagging; streaming profitability uncertain)",
    positives: [
      "Max integration complete — unified streaming platform approaching 100M global subscribers by end of 2024",
      "Cost reduction delivered — $3.5B+ in annualized cost savings achieved since merger close",
      "Debt reduction progress — $5B+ in net debt reduced since close, though $40B+ still remains",
      "HBO brand strength sustained — 'The Last of Us', 'Succession', 'House of the Dragon' maintain HBO's prestige reputation",
    ],
    risks: [
      "Crushing debt burden — $40B+ net debt with annual interest costs of $3B+, severely limiting content investment",
      "Cable TV accelerating decline — TNT, CNN, TBS, Cartoon Network ad and affiliate revenues falling year-over-year",
      "Creative credibility damage — content cancellations and cost-cutting culture alienated top talent and studio relationships",
      "Streaming profitability timeline unclear — Max growing but breakeven remains uncertain against scale required to compete",
      "Stock price collapse — WBD shares trading near 10-year lows, implying the market assigns little value to the equity",
    ],
    editorNote: "The AT&T-WarnerMedia saga is the definitive case study for why telecom-media vertical integration is harder than it looks. Buying HBO didn't give AT&T the creativity to run it. The $85B price tag turned into a $43B exit — and the remaining burden fell on WBD's balance sheet and shareholders. The deeper lesson: in creative industries, culture and execution capability matter more than capital. David Zaslav has the financial discipline to run a cable roll-up; whether that DNA can coexist with HBO's creative ambitions — and whether Max can generate enough cash to service $40B+ in debt — will define WBD's fate through 2025 and beyond.",
  },

  tombstone: {
    acquirerInitials: "DISC",
    acquirerBg: "bg-blue-700",
    targetInitials: "WM",
    targetBg: "bg-gray-800",
    acquirerName: "Discovery, Inc.",
    targetName: "WarnerMedia (AT&T)",
    dealTitle: "Reverse Morris Trust Spin-off Merger",
    dealSize: "약 $430억 (AT&T 수령 기준)",
    dealSizeUSD: "approx. USD 43 Billion",
    evEbitda: "~9.0×",
    closeDate: "Apr 2022",
  },

  sources: [
    { id: 1, text: "AT&T Press Release — AT&T Combines WarnerMedia with Discovery (May 2021)", url: "https://about.att.com" },
    { id: 2, text: "Discovery Press Release — Discovery and AT&T to Combine WarnerMedia and Discovery (May 2021)" },
    { id: 3, text: "Warner Bros. Discovery 2022 Annual Report (Form 10-K)", url: "https://ir.wbd.com" },
    { id: 4, text: "Warner Bros. Discovery 2023 Annual Report (Form 10-K)", url: "https://ir.wbd.com" },
    { id: 5, text: "United States v. AT&T Inc. — D.C. Circuit Court of Appeals, affirming DOJ loss (2019)" },
    { id: 6, text: "Bloomberg — AT&T's $43 Billion WarnerMedia Deal Closes, Zaslav Takes Over (April 2022)" },
    { id: 7, text: "Wall Street Journal — Warner Bros. Discovery Writes Off Over $2 Billion in Content (August 2022)" },
    { id: 8, text: "Variety — Max Streaming Launch: HBO Max and Discovery+ Combined (May 2023)" },
    { id: 9, text: "S&P Global Ratings — Warner Bros. Discovery Debt and Leverage Analysis (2022–2024)" },
  ],

  seo: {
    title: "Warner Bros Discovery Merger Analysis — Media M&A's Biggest Gamble | Deal Story",
    description: "AT&T paid $85B for WarnerMedia in 2018 and sold it for $43B in 2022. This deep-dive covers the Reverse Morris Trust structure, $55B debt burden, David Zaslav's strategy, and whether Max can survive the streaming wars.",
    keywords: [
      "Warner Bros Discovery merger",
      "AT&T WarnerMedia spinoff",
      "Reverse Morris Trust explained",
      "HBO Max Discovery Plus merger",
      "media M&A analysis",
      "David Zaslav WBD",
      "AT&T value destruction deal",
      "WBD debt analysis",
      "streaming wars media strategy",
      "Max streaming subscribers",
      "Warner Bros Discovery stock analysis",
    ],
  },

  concepts: [
    { term: "Reverse Morris Trust (RMT)", href: "/learn/reverse-morris-trust", description: "A tax-efficient M&A structure in which a parent company spins off a subsidiary that immediately merges with an acquirer, avoiding capital gains taxes." },
    { term: "Spin-off / Demerger", href: "/learn/spinoff", description: "A corporate action in which a parent company separates a business unit into an independent entity, distributing shares to existing shareholders." },
    { term: "Deleveraging", href: "/learn/deleveraging", description: "The process of reducing a company's total debt through asset sales, earnings, or equity raises — typically the primary post-deal challenge for highly leveraged acquisitions." },
    { term: "Cord-Cutting", description: "Consumer trend of cancelling traditional pay-TV (cable/satellite) subscriptions in favor of internet-based streaming services." },
    { term: "Content Write-off", description: "The accounting removal of film or TV content from an asset register, typically taken as a loss — sometimes for tax efficiency rather than purely economic reasons." },
    { term: "Vertical Integration", href: "/learn/vertical-integration", description: "A strategy in which a company owns multiple stages of its value chain — e.g., content production and distribution — to capture more margin and competitive control." },
  ],

  faq: [
    {
      q: "Why did AT&T buy WarnerMedia for $85B and then sell it for only $43B four years later?",
      a: "AT&T's 2018 thesis was 'content + distribution vertical integration' — owning HBO and CNN to differentiate its wireless and broadband services and compete with Netflix. The strategy failed on multiple fronts: AT&T's total debt exceeded $190B, media and telecom proved culturally incompatible, HBO Max underperformed subscriber targets, and investors pushed hard for AT&T to refocus on its core 5G and fiber business. The sale to Discovery was an admission of strategic failure, crystallizing a $40B+ loss in shareholder value.",
    },
    {
      q: "What is a Reverse Morris Trust and why was it used here?",
      a: "A Reverse Morris Trust (RMT) is a tax-efficient M&A structure: the parent spins off a subsidiary, and that subsidiary merges with an acquirer. The key benefit is that if the former parent's shareholders retain more than 50% of the new combined entity, the spin-off qualifies as tax-free under U.S. tax law (Section 355 of the Internal Revenue Code). For AT&T, this meant avoiding billions in capital gains taxes it would have owed on a direct sale of WarnerMedia. AT&T shareholders receiving 71% of WBD (vs. Discovery's 29%) satisfied this requirement.",
    },
    {
      q: "Why did WBD cancel completed movies like Batgirl?",
      a: "Shortly after the merger closed, Zaslav's team identified dozens of film and TV projects — some already completed — that they deemed non-core or unlikely to generate adequate returns. By cancelling and writing off these projects as accounting losses, WBD received a tax deduction against current income. Films like Batgirl (a $90M DC production) and Coyote vs. Acme were shelved without any release. While financially rational in the short term, the decisions caused significant reputational damage with creative talent and cast doubt on WBD's commitment to premium content.",
    },
    {
      q: "Is Max (the combined HBO Max + Discovery+ streaming service) succeeding?",
      a: "Max launched in May 2023 and has shown meaningful subscriber growth, approaching 100 million global subscribers by late 2024. The HBO brand remains one of the strongest in premium television. However, streaming profitability is still uncertain — content costs remain high, and WBD must balance investing in Max against servicing $40B+ in net debt. The fundamental tension is that competing with Netflix and Disney+ requires aggressive content investment, but WBD's balance sheet constrains that investment.",
    },
    {
      q: "Why has WBD's stock performed so poorly since the merger?",
      a: "WBD shares have declined substantially from their initial trading levels, reflecting three core investor concerns: (1) The $40B+ net debt load is an enormous overhang — interest alone costs over $3B per year. (2) Cable TV revenues — historically WBD's cash engine — are in structural decline as cord-cutting accelerates. (3) Streaming profitability and Max's path to scale remain uncertain. Markets are pricing WBD as a leveraged bet on content IP in a declining linear TV world, with no clear catalyst for debt paydown.",
    },
    {
      q: "What is the key lesson from the AT&T-WarnerMedia deal for M&A practitioners?",
      a: "Several critical lessons emerge: First, industrial logic does not equal execution capability — buying a creative business doesn't transfer the culture needed to run it. Second, leverage amplifies mistakes — $85B in acquisition financing left no margin for error, and when the thesis failed, the entire balance sheet paid the price. Third, synergies in media M&A are systematically overestimated — the promised 'distribution + content' synergies never materialized at scale. Fourth, the cost of exiting a failed strategy can be enormous — AT&T paid a $40B+ tuition fee to learn that media is not a telecom business.",
    },
  ],
};

export default deal;
