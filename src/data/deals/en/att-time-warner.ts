/**
 * AT&T × Time Warner Acquisition
 * Vertical Integration vs. Antitrust Battle — $85.4B, Closed June 2018
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "att-time-warner",
  title: "Why AT&T Paid $85.4 Billion for Time Warner — Anatomy of the Vertical Integration Ambition and Its Historic Failure",
  subtitle: "Content + Distribution Vertical Integration · DOJ's First Antitrust Loss · $170B+ Debt Trap and the 2022 Spinoff",
  category: "ma",
  industry: "Telecom & Media",
  country: "USA",
  announcedAt: "2016-10-22",
  closedAt: "2018-06-14",
  announcedDisplay: "October 2016",
  closedDisplay: "June 2018",
  readingMinutes: 12,
  tags: ["AT&T", "Time Warner", "HBO", "CNN", "Warner Bros", "Vertical Integration", "Antitrust", "DOJ Lawsuit", "Streaming"],
  excerpt:
    "AT&T's $85.4 billion acquisition of Time Warner — owner of HBO, CNN, and Warner Bros — closed in 2018 as one of the most ambitious vertical integration deals in media history. Despite winning a landmark DOJ antitrust trial, AT&T was crushed by $170B+ in debt, overestimated synergies, and accelerating cord-cutting. The deal ended with a strategic retreat: spinning off WarnerMedia into Warner Bros. Discovery in 2022, making this one of the most expensive M&A failures ever recorded.",

  acquirer: { initials: "AT&T", bg: "bg-blue-600", label: "AT&T Inc." },
  target: { initials: "TWX", bg: "bg-blue-900", label: "Time Warner Inc." },

  background: [
    "AT&T completed its $49 billion acquisition of DirecTV in 2015, becoming the largest pay-TV provider in the United States. Yet as Netflix surged and cord-cutting accelerated, AT&T's leadership recognized that owning distribution alone was not enough to survive the streaming era. CEO Randall Stephenson believed that vertical integration — combining content and distribution under one roof — was the only viable long-term strategy. With Netflix and Amazon pouring billions into original content, AT&T concluded it needed to own premium content IP or risk becoming a commoditized pipe.",
    "Time Warner was the gold standard of American media, owning HBO (Game of Thrones, The Wire, The Sopranos), CNN, Warner Bros. Studios, DC Entertainment, TNT, and TBS. CEO Jeff Bewkes recognized that Time Warner, as a standalone media company, faced mounting structural pressure from streaming disruption. Despite its world-class content library, Time Warner lacked the distribution muscle to compete directly with Netflix or build a scalable streaming platform independently. AT&T's offer — at a 20%+ premium — promised access to a massive distribution network and a path to the streaming future.",
    "The deal was structured as $54.3 billion in cash, $23.1 billion in assumed debt, and stock exchange, totaling approximately $85.4 billion. Within weeks of the October 2016 announcement, the Department of Justice (DOJ) filed an antitrust lawsuit in November 2017, arguing the vertical integration would harm competition — specifically that AT&T could use Time Warner content as leverage against rival distributors. However, in June 2018, U.S. District Judge Richard Leon ruled decisively in AT&T's favor, rejecting the DOJ's case in its entirety. It marked the first time the DOJ had ever lost a vertical merger antitrust trial.",
    "The deal closed on June 14, 2018, and AT&T rebranded Time Warner as 'WarnerMedia.' But the post-closing reality proved brutal. AT&T's total debt ballooned to over $170 billion, strangling its financial flexibility simultaneously across 5G investment, HBO Max content spending, and dividend maintenance. HBO Max launched in May 2020 but trailed Netflix and Disney+ significantly. DirecTV subscribers continued to hemorrhage. In May 2021, AT&T announced it would spin off WarnerMedia and merge it with Discovery to form Warner Bros. Discovery (WBD), completing the retreat in April 2022. AT&T shares fell from roughly $40 at the time of announcement to approximately $17 by 2022 — a 58% collapse.",
  ],

  dealSummary: {
    dealValueDisplay: "$85.4B (Cash $54.3B + Assumed Debt $23.1B)",
    acquirerName: "AT&T Inc. (NYSE: T)",
    targetName: "Time Warner Inc. (NYSE: TWX)",
    announcedDisplay: "October 2016",
    closedDisplay: "June 2018",
    country: "USA",
  },

  executiveSummary: [
    "$85.4B — Cash, debt, and stock deal. AT&T's bet on vertical integration of content (HBO, CNN, Warner Bros.) and distribution (AT&T network, DirecTV)",
    "Core logic: Counter Netflix, secure premium content IP for the streaming era, leverage DirecTV synergies, build HBO Max platform",
    "DOJ antitrust lawsuit (November 2017) — Does vertical integration harm competition? AT&T wins in court (June 2018); DOJ's first vertical merger defeat",
    "EV/EBITDA ~11x — Reasonable multiple on Time Warner's EBITDA, but $170B+ in total debt proved fatal",
    "Failure verdict: Overestimated media-telecom synergies, underperformed in streaming vs. Netflix/Disney+, accelerating cord-cutting",
    "2022: WarnerMedia spun off and merged with Discovery to form Warner Bros. Discovery — AT&T received ~$43B in cash + debt relief",
    "AT&T shares collapsed from ~$40 to ~$17 — one of the most expensive strategic missteps in corporate history",
  ],

  industryOverview: {
    body: "In 2016, the U.S. media and telecom industry was at a structural inflection point. Netflix and Amazon Prime were rewriting the rules of video consumption, while traditional pay-TV subscribers declined by millions each year in what analysts called the 'cord-cutting revolution.' Telecom and cable companies saw their subscriber bases eroding while streaming platforms grew explosively. Against this backdrop, premium content IP — HBO, ESPN, Disney — emerged as the decisive weapon in the platform wars. AT&T's acquisition of Time Warner was a $85.4 billion wager that owning both the content and the pipe would define the winner of the streaming era.",
    metrics: [
      { label: "U.S. Pay-TV Subscriber Decline", value: "2–3 million per year", sub: "Cord-cutting accelerating 2016–2018" },
      { label: "Netflix Global Subscribers", value: "~93 million", sub: "End of 2016, rapid growth trajectory" },
      { label: "U.S. Streaming Ad Market", value: "~$2 billion", sub: "2016, growing 30%+ annually" },
      { label: "DirecTV Satellite TV Subscribers", value: "~21 million", sub: "Post-AT&T acquisition, 2016" },
    ],
    subBody: "The central thesis of U.S. media M&A in 2016 was that 'he who owns the content controls the streaming era.' Netflix was projecting $6B+ in annual content spend, while Disney was assembling a streaming juggernaut through ESPN and Hulu. For AT&T, Time Warner's HBO, CNN, and Warner Bros. represented not just media assets but the essential ammunition for competing in the streaming wars. The logic was sound — but the $85.4 billion price tag buried the company in debt before the strategy could be executed.",
    players: [
      { name: "AT&T", role: "Largest U.S. telecom, DirecTV owner, vertical integration acquirer" },
      { name: "Time Warner", role: "HBO, CNN, Warner Bros. media giant; acquisition target" },
      { name: "Netflix", role: "Streaming leader, pioneering massive original content investment" },
      { name: "Disney", role: "ESPN, Pixar, Marvel owner; preparing Disney+ launch" },
      { name: "Comcast", role: "Largest U.S. cable company; also considered a potential TWX bidder" },
      { name: "Amazon", role: "Expanding into streaming via Prime Video" },
    ],
  },

  companyOverview: {
    targetName: "Time Warner Inc.",
    body: "Time Warner was America's preeminent media conglomerate, with a portfolio spanning HBO, CNN, Warner Bros. Studios, DC Entertainment, TNT, and TBS. HBO was the gold standard of premium television — home to Game of Thrones, The Sopranos, and The Wire — with 50+ million global subscribers. CNN remained the most-watched U.S. cable news network. Warner Bros. operated one of the world's most valuable film and TV production studios, anchored by the DC Comics IP. At the time of acquisition, Time Warner generated approximately $31.4 billion in annual revenue and $8 billion in EBITDA, representing a stable but maturing media business facing structural pressure from streaming disruption.",
    metrics: [
      { label: "Annual Revenue (2017)", value: "~$31.4B", sub: "HBO, CNN, Warner Bros. combined" },
      { label: "EBITDA (2017)", value: "~$8B", sub: "Basis for ~11x EV/EBITDA valuation" },
      { label: "HBO Global Subscribers", value: "50+ million", sub: "As of 2016" },
      { label: "Warner Bros. Annual Films", value: "20+ titles", sub: "Including DC Comics franchise" },
      { label: "Founded", value: "1990", sub: "Formed from Time Inc. and Warner Communications merger" },
    ],
    financials: [
      { year: "2016", revenue: 293, cogs: 150, grossProfit: 143, sga: 45, operatingIncome: 50, ebitda: 75 },
      { year: "2017", revenue: 314, cogs: 158, grossProfit: 156, sga: 47, operatingIncome: 55, ebitda: 80 },
    ],
    financialsNote: "Unit: USD hundred million (100M). Based on public filings and analyst reports. Time Warner consolidated basis.",
    financialsCurrency: "USD",
    financialsUnit: "hundred million",
  },

  dealStructure: {
    body: "AT&T acquired Time Warner through a combination of $54.3 billion in cash, $23.1 billion in assumed debt, and stock exchange, for a total transaction value of approximately $85.4 billion. The deal was announced in October 2016 but was significantly delayed when the DOJ filed an antitrust lawsuit in November 2017. The Justice Department argued the vertical merger would allow AT&T to use Time Warner content as leverage against competing distributors, raising prices and suppressing competition. After a six-week trial, U.S. District Judge Richard Leon ruled against the DOJ in June 2018 — a historic first in vertical merger antitrust enforcement. The deal closed on June 14, 2018. AT&T immediately rebranded Time Warner as 'WarnerMedia' and began integrating it with DirecTV and AT&T's telecom assets.",
    preOwnership: {
      nodes: [
        { id: "att", label: "AT&T Inc.", sub: "NYSE: T, Largest U.S. Telecom", type: "acquirer" },
        { id: "directv", label: "DirecTV", sub: "AT&T subsidiary (acquired 2015, $49B)", type: "entity" },
        { id: "twx", label: "Time Warner Inc.", sub: "NYSE: TWX, Independent Media Company", type: "target" },
        { id: "hbo", label: "HBO / CNN / Warner Bros.", sub: "Time Warner's Core Assets", type: "entity" },
      ],
      edges: [
        { from: "att", to: "directv", label: "100% subsidiary" },
        { from: "twx", to: "hbo", label: "Owned assets" },
        { from: "att", to: "twx", label: "Acquisition in progress" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_parent", label: "AT&T Inc.", sub: "NYSE: T, Total Debt $170B+", type: "acquirer" },
        { id: "warnermedia", label: "WarnerMedia", sub: "AT&T 100% subsidiary (formerly Time Warner)", type: "target" },
        { id: "directv_sub", label: "DirecTV", sub: "AT&T subsidiary", type: "entity" },
      ],
      edges: [
        { from: "att_parent", to: "warnermedia", label: "100%" },
        { from: "att_parent", to: "directv_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "Total Deal Value", value: "$85.4B (Cash $54.3B + Assumed Debt $23.1B)", accent: true },
      { label: "Transaction Type", value: "Cash, Debt Assumption & Stock Acquisition", accent: false },
      { label: "EV / EBITDA", value: "~11x (Time Warner 2017 EBITDA basis)", accent: true },
      { label: "DOJ Antitrust Lawsuit", value: "Filed November 2017 → AT&T wins June 2018", accent: false },
      { label: "Antitrust Precedent", value: "First DOJ loss in a vertical merger antitrust trial", accent: true },
      { label: "Close Date", value: "June 14, 2018", accent: false },
      { label: "AT&T Total Debt (Post-Close)", value: "$170B+", accent: false },
      { label: "Rebranded Entity", value: "WarnerMedia (AT&T 100% subsidiary)", accent: false },
      { label: "Key Executives", value: "Randall Stephenson (AT&T CEO) + Jeff Bewkes (TWX CEO)", accent: false },
    ],
  },

  advisors: {
    body: "As one of the largest vertical integration deals in history, both sides assembled elite advisory teams. The DOJ's antitrust lawsuit made legal counsel particularly critical — Sullivan & Cromwell led AT&T's courtroom defense while Cravath, Swaine & Moore represented Time Warner. On the financial side, JP Morgan and Evercore anchored AT&T's deal financing, while Morgan Stanley provided the fairness opinion for Time Warner's board.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (AT&T)",
        initials: "AT&T",
        bg: "bg-blue-600",
        advisors: [
          { firm: "JP Morgan", role: "Financial Advisor (Lead)", roleType: "financial", note: "Deal structuring and financing lead" },
          { firm: "Evercore", role: "Financial Advisor (Co-advisor)", roleType: "financial", note: "Valuation and strategic advisory" },
          { firm: "Sullivan & Cromwell", role: "Legal Advisor (M&A & Antitrust)", roleType: "legal", note: "Led DOJ antitrust trial defense" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Time Warner)",
        initials: "TWX",
        bg: "bg-blue-900",
        advisors: [
          { firm: "Morgan Stanley", role: "Financial Advisor (Lead)", roleType: "financial", note: "Fairness opinion and negotiation advisory" },
          { firm: "Cravath, Swaine & Moore", role: "Legal Advisor", roleType: "legal", note: "M&A agreement and DOJ regulatory response" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public filings and SEC disclosures.",
  },

  valuation: {
    body: "AT&T valued Time Warner at approximately 11x EV/EBITDA based on Time Warner's 2017 EBITDA of ~$8 billion. This multiple was within the range of precedent transactions for premium media assets (10–13x) and was considered defensible at the time of announcement. However, the $85.4 billion purchase price required AT&T to take on massive additional debt, pushing its total debt load above $170 billion post-close. With free cash flow heavily committed to debt service, AT&T found itself unable to invest adequately in HBO Max content, 5G infrastructure, and dividend maintenance simultaneously — a structural impossibility that doomed the strategic thesis from the start.",
    rows: [
      { item: "Total Deal EV", val: "$85.4B", note: "Cash $54.3B + Assumed Debt $23.1B", accent: true },
      { item: "EV / EBITDA", val: "~11x", note: "Time Warner 2017 EBITDA ~$8B basis", accent: true },
      { item: "Time Warner Revenue (2017)", val: "$31.4B", note: "HBO, CNN, Warner Bros. combined" },
      { item: "EV / Revenue", val: "~2.7x", note: "Based on 2017 revenue" },
      { item: "Acquisition Premium", val: "~20%+", note: "vs. Time Warner pre-announcement share price" },
      { item: "AT&T Total Debt (Post-Close)", val: "$170B+", note: "Severe impairment of financial flexibility", accent: true },
      { item: "AT&T Proceeds from WBD Spinoff", val: "~$43B", note: "Cash + debt relief received in 2022" },
      { item: "AT&T Share Price Change", val: "~$40 → ~$17", note: "Announcement to 2022, ~58% decline" },
    ],
    disclaimer: "Valuation figures are based on public filings, SEC disclosures, and analyst reports.",
  },

  rationale: {
    buyer: {
      title: "AT&T's Acquisition Rationale",
      initials: "AT&T",
      bg: "bg-blue-600",
      points: [
        "Vertical Integration — Combine AT&T's telecom network and DirecTV distribution with HBO, CNN, and Warner Bros. content to build a fully integrated media company",
        "Netflix Counter-Strategy — Establish HBO Max as a direct competitor to Netflix and Amazon Prime with premium content advantage",
        "Cord-Cutting Defense — Use Time Warner's premium IP to retain subscribers and bundle with AT&T mobile and broadband services",
        "DirecTV Synergies — Prioritize WarnerMedia content delivery to DirecTV's 21 million subscribers to reduce churn",
        "Advertising Platform — Combine AT&T's subscriber data with Time Warner's advertising inventory to build a targeted digital ad platform",
      ],
    },
    seller: {
      title: "Time Warner's Sale Rationale",
      initials: "TWX",
      bg: "bg-blue-900",
      points: [
        "Premium Valuation — Immediate 20%+ premium realization for shareholders; avoids uncertainty of standalone streaming pivot",
        "Streaming Survival Uncertainty — Insufficient scale to match Netflix/Amazon content investment independently; platform build-out prohibitively expensive",
        "AT&T Distribution Synergies — Access to AT&T's 500M+ customer relationships for HBO Max distribution and subscriber acquisition",
        "Cord-Cutting Hedge — Offset declining cable advertising revenue with AT&T's mobile and digital advertising capabilities",
        "Certain Exit Path — Clean, risk-free monetization versus the uncertainty and dilution risk of an independent streaming strategy",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "The AT&T-Time Warner deal stands as one of the most consequential strategic failures in modern corporate history. After closing, AT&T found itself carrying $170B+ in debt while simultaneously trying to fund 5G infrastructure, HBO Max content, and sustain its dividend — a financial impossibility. HBO Max launched in May 2020 but struggled to gain ground against Netflix and Disney+. DirecTV's subscriber losses accelerated sharply, undermining AT&T's distribution thesis. Media and telecom cultures proved far harder to integrate than anticipated. By May 2021 — just three years after closing — AT&T announced it would spin off WarnerMedia and merge it with Discovery to form Warner Bros. Discovery (WBD). The transaction completed in April 2022, with AT&T receiving approximately $43 billion in cash and debt relief. AT&T's share price collapsed from ~$40 at announcement to ~$17 by 2022, destroying hundreds of billions in shareholder value.",
    overallVerdict: "The vertical integration myth shattered — the worst strategic mistake in AT&T's history",
    positives: [
      "Historic DOJ Antitrust Victory — First-ever DOJ loss in a vertical merger antitrust trial; established important legal precedent for vertical M&A",
      "HBO Max Platform Launched — Successfully built a streaming platform in 2020; continued as 'Max' under Warner Bros. Discovery",
      "Time Warner Content IP Value Preserved — HBO, CNN, and Warner Bros. brand equity remained intact through spinoff and continues under WBD",
    ],
    risks: [
      "$170B+ Debt Burden — Eliminated financial flexibility; AT&T could not invest adequately in 5G, content, and dividends simultaneously",
      "Overestimated Media-Telecom Synergies — Content and distribution integration proved far harder than projected; cultural and operational misalignment",
      "Cord-Cutting Accelerated — DirecTV subscribers declined sharply; AT&T's TV bundle strategy failed to stem losses",
      "Catastrophic Shareholder Value Destruction — AT&T shares fell ~58% from announcement to 2022; one of the worst M&A outcomes for acquirer shareholders in history",
    ],
    editorNote: "AT&T-Time Warner is the definitive case study in why vertical integration is not always the answer. The strategic logic — marry content with distribution to beat Netflix — was not wrong in concept. What was wrong was paying $85.4 billion to do it, burying the company in $170B+ of debt before a single strategy could be executed. AT&T won the antitrust battle in court but lost the war in the market. This deal's most expensive lesson: in M&A, 'a deal you can win' and 'a deal you should do' are two entirely different things.",
  },

  tombstone: {
    acquirerInitials: "AT&T",
    acquirerBg: "bg-blue-600",
    targetInitials: "TWX",
    targetBg: "bg-blue-900",
    acquirerName: "AT&T Inc.",
    targetName: "Time Warner Inc.",
    dealTitle: "Vertical Integration vs. Antitrust Battle",
    dealSize: "$85.4B",
    dealSizeUSD: "USD 85.4 Billion",
    evEbitda: "~11x EBITDA",
    closeDate: "Jun 2018",
  },

  sources: [
    { id: 1, text: "AT&T Press Release — AT&T to Acquire Time Warner (October 22, 2016)", url: "https://about.att.com" },
    { id: 2, text: "SEC Form S-4 / 8-K — AT&T Time Warner acquisition filing (2016–2018)", url: "https://www.sec.gov" },
    { id: 3, text: "U.S. v. AT&T Inc. — DOJ Complaint (November 20, 2017)", url: "https://www.justice.gov" },
    { id: 4, text: "U.S. District Court, D.D.C. — Judge Richard Leon Opinion (June 12, 2018)" },
    { id: 5, text: "Wall Street Journal — AT&T's Time Warner Deal: The Inside Story (2018)" },
    { id: 6, text: "Bloomberg — AT&T Agrees to Spin Off WarnerMedia to Merge With Discovery (May 2021)" },
    { id: 7, text: "Financial Times — AT&T-Time Warner: A $85bn deal that failed to deliver (2022)" },
  ],

  seo: {
    title: "AT&T-Time Warner Acquisition Analysis — The $85.4B Vertical Integration Failure",
    description: "Complete analysis of AT&T's $85.4B acquisition of Time Warner (HBO, CNN, Warner Bros.) in 2018. DOJ antitrust trial, vertical integration logic, $170B debt trap, and the 2022 WarnerMedia spinoff — why it failed.",
    keywords: [
      "AT&T Time Warner acquisition",
      "vertical integration M&A",
      "DOJ antitrust lawsuit vertical merger",
      "WarnerMedia Warner Bros Discovery",
      "telecom media M&A failure",
    ],
  },

  concepts: [
    { term: "Vertical Integration", href: "/deal-101/vertical-integration", description: "A strategy in which a company controls both content production and distribution channels within the same corporate entity" },
    { term: "Antitrust (Competition Law)", href: "/deal-101/antitrust", description: "Laws designed to protect market competition by restricting monopolistic mergers and market dominance" },
    { term: "Cord-Cutting", href: "/deal-101/cord-cutting", description: "The consumer trend of canceling traditional pay-TV subscriptions in favor of streaming services like Netflix and Disney+" },
  ],

  faq: [
    {
      q: "Why did the DOJ lose the AT&T-Time Warner antitrust lawsuit?",
      a: "The DOJ argued that vertical integration would harm competition — specifically that AT&T could use Time Warner content to disadvantage rival distributors by raising licensing prices or withholding access. However, U.S. District Judge Richard Leon ruled that the DOJ failed to provide sufficient concrete evidence that AT&T would actually engage in such behavior post-merger. AT&T's expert economic testimony and its commitment to content access neutrality were persuasive. The ruling marked the first time in history that the DOJ lost a vertical merger antitrust trial — a landmark precedent that significantly shifted the landscape for future vertical M&A review.",
    },
    {
      q: "What was AT&T's vertical integration rationale?",
      a: "AT&T's thesis was that combining distribution (its wireless and broadband network, plus DirecTV) with premium content (HBO, CNN, Warner Bros.) would create an end-to-end media company capable of competing directly with Netflix. Specifically: (1) offer Time Warner content exclusively or preferentially to AT&T subscribers to reduce churn; (2) combine AT&T's subscriber data with Time Warner's advertising inventory to build a superior targeted ad platform; and (3) use HBO as the anchor for HBO Max to challenge Netflix directly. The logic was coherent — the fatal flaw was the $170B+ debt required to execute it.",
    },
    {
      q: "Why did the deal ultimately fail?",
      a: "Three compounding factors drove the failure. First, $170B+ in total post-close debt made simultaneous investment in 5G, HBO Max content, and dividend maintenance structurally impossible — AT&T had to choose between competing priorities, and it couldn't win any of them at sufficient scale. Second, media-telecom synergies were dramatically overestimated; integrating a content company with a telecom carrier proved far more complex culturally and operationally than anticipated. Third, cord-cutting accelerated faster than expected, eroding DirecTV's subscriber base and the distribution thesis that underpinned the entire deal.",
    },
    {
      q: "Was HBO Max successful?",
      a: "Partially. HBO Max launched in May 2020 and reached approximately 90 million subscribers by end of 2023. However, it significantly lagged Netflix (230M+ subscribers) and Disney+ (150M+). More critically, AT&T's debt constraints prevented it from investing at the content spending levels necessary to compete effectively. After WarnerMedia merged with Discovery in 2022 to form Warner Bros. Discovery (WBD), HBO Max was rebranded as 'Max' under WBD's leadership. The platform continues to grow, but it was never the Netflix-killer AT&T envisioned when it paid $85.4 billion for the assets.",
    },
    {
      q: "What happened to AT&T after the deal?",
      a: "AT&T suffered severe strategic and financial damage. Its share price fell from roughly $40 at the time of announcement to approximately $17 by 2022 — a 58% decline. In 2022, AT&T completed the WarnerMedia spinoff and merger with Discovery, receiving approximately $43 billion in cash and debt relief — a fraction of the $85.4 billion it paid. AT&T has since refocused on its core telecom business (wireless and broadband), and separately began divesting DirecTV in 2024. The AT&T-Time Warner deal is now studied as the definitive modern example of vertical integration overreach — a $85.4 billion lesson that the most expensive deals in corporate history are often the ones where the strategy was logical but the price and debt were not.",
    },
  ],
};

export default deal;
