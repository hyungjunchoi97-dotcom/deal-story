/**
 * Third Point × Yahoo Activism Campaign (2012)
 * Daniel Loeb Uncovered CEO Résumé Fraud — The Historic Campaign That Ousted a CEO in 130 Days
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "third-point-yahoo",
  title: "Third Point × Yahoo — The Activism Campaign That Found CEO Résumé Fraud and Ousted Him in 130 Days",
  subtitle: "Scott Thompson Computer Science Degree Fabrication Exposed · 3 Board Seats Secured · Marissa Mayer Recruited · Alibaba Stake Value Unlocked",
  category: "activism",
  industry: "Internet / Media",
  country: "United States",
  announcedAt: "2012-02-14",
  closedAt: "2012-07-16",
  announcedDisplay: "February 2012",
  closedDisplay: "July 2012",
  readingMinutes: 11,
  tags: [
    "Third Point",
    "Dan Loeb",
    "Yahoo",
    "activism",
    "résumé fraud",
    "Scott Thompson",
    "Marissa Mayer",
    "Alibaba stake",
    "CEO change",
    "board takeover",
  ],
  excerpt:
    "Dan Loeb of Third Point LLC accumulated approximately 5.8% (~$1B) of Yahoo and nominated 4 director candidates including himself, then through deep research publicly exposed CEO Scott Thompson's fabricated educational credentials (false claim of a computer science degree). Yahoo's audit committee immediately acknowledged the facts, and Thompson resigned just 130 days into his tenure. Third Point secured 3 board seats, with Loeb joining the board himself and playing a decisive role in recruiting Google executive Marissa Mayer as Yahoo's new CEO. This campaign is known as the textbook of 'Information-Based Activism.'",

  acquirer: { initials: "3P", bg: "bg-slate-700", label: "Third Point LLC (Dan Loeb)" },
  target: { initials: "YHOO", bg: "bg-violet-700", label: "Yahoo! Inc. (YHOO)" },

  background: [
    "After rejecting Microsoft's $44.6B acquisition offer in 2008, Yahoo drifted rapidly. After co-founder Jerry Yang stepped down as CEO, Carol Bartz took over but was fired by phone by the board in September 2011. Interim CEO Tim Morse kept the seat warm until Scott Thompson from PayPal took over as Yahoo CEO in January 2012. In just four years there had been three CEO changes, Google and Facebook were rapidly taking advertising market share, and structural problems around failing to return the value of key strategic assets — Alibaba and Yahoo Japan stakes — to shareholders had accumulated.",
    "On February 14, 2012, Dan Loeb of Third Point LLC disclosed through an SEC 13D filing that he held approximately 5.8% (~$1B) of Yahoo and nominated 4 director candidates (including himself) to the board. Loeb's core argument was crisp: the value of Yahoo's Alibaba stake (~40%) and Yahoo Japan stake (~35%, jointly held with SoftBank) alone equaled or exceeded Yahoo's market cap at the time. In other words, Yahoo's core internet business was effectively being valued at 'zero' — a severe undervaluation.",
    "The decisive turning point in the campaign came in May 2012. As Third Point's research team was closely reviewing Scott Thompson CEO's official résumé and Yahoo's SEC filings, they discovered that while Thompson claimed to have earned dual degrees in computer science and accounting from Stonehill College, he had actually only earned an accounting degree. They confirmed the decisive evidence: Stonehill College did not even offer a computer science major when Thompson graduated in 1979.",
    "On May 3, 2012, Third Point submitted a document summarizing these false facts to the SEC and demanded an immediate investigation by Yahoo's board. Yahoo's board initially tried to dismiss it as a 'minor error,' but ten days later on May 13, the audit committee officially acknowledged that the educational credential discrepancy was factual. That same day, Scott Thompson resigned as CEO. He had served 130 days.",
    "Through subsequent negotiations, Yahoo and Third Point reached a settlement. Third Point secured 3 board seats (including Loeb himself). As a board member, Loeb played an active role in the new CEO selection in July 2012, playing a decisive role in recruiting Marissa Mayer — former Google VP — as Yahoo's CEO. After the Mayer hiring announcement, Yahoo's stock immediately surged.",
    "Third Point's long-term strategy was the realization of Alibaba stake value. Through 2013, Yahoo sold a portion of its Alibaba stake and conducted $3B+ in buybacks. Loeb sold most of the Yahoo stake in 2013, cumulatively realizing approximately $2.4B in profit. This was recorded as one of the most dramatic campaigns in the history of activism.",
  ],

  dealSummary: {
    dealValueDisplay: "~$1B Stake (5.8% of Yahoo)",
    acquirerName: "Third Point LLC (Dan Loeb)",
    targetName: "Yahoo! Inc.",
    announcedDisplay: "February 2012",
    closedDisplay: "July 2012",
    country: "United States",
  },

  executiveSummary: [
    "February 14, 2012: Third Point SEC disclosure of 5.8% Yahoo stake ($1B) + nomination of 4 board director candidates",
    "Core argument: Alibaba + Yahoo Japan stake combined value ≈ Yahoo market cap → core business effectively 'free'",
    "May 3, 2012: Third Point publicly exposes CEO Scott Thompson's fabricated computer science degree via SEC filing",
    "May 13, 2012: Yahoo audit committee officially acknowledges the error; Thompson resigns same day — 130 days into his tenure",
    "Settlement terms: Third Point secures 3 board seats including Loeb himself",
    "July 2012: Under Loeb's leadership, Google VP Marissa Mayer recruited as new Yahoo CEO",
    "2013: Yahoo Alibaba stake partial sale + $3B+ buyback; Third Point sells stake — cumulative ~$2.4B profit realized",
  ],

  industryOverview: {
    body: "In 2012, the U.S. internet industry was in a period of rapid restructuring as Google and Facebook dominated the advertising market. Yahoo had passed its peak in banner and search advertising and was entering decline. Meanwhile, with the explosive growth of mobile internet, China's e-commerce market Alibaba — still pre-IPO — was seeing its value grow astronomically. Yahoo had acquired approximately 40% of Alibaba for $1B in 2005, and how to realize the value of this hidden asset had become the paramount concern for Yahoo shareholders.",
    metrics: [
      { label: "Yahoo Market Cap (early 2012)", value: "~$19B",    sub: "Including Alibaba and Yahoo Japan stake values" },
      { label: "Alibaba Stake (Yahoo-owned)",   value: "~40%",     sub: "Estimated value $8–10B in 2012; $30B+ at 2014 IPO" },
      { label: "Yahoo Japan Stake",             value: "~35%",     sub: "Jointly held with SoftBank" },
      { label: "Yahoo Core Business Implied Value", value: "Effectively Zero or Negative", sub: "Stake values alone explained market cap" },
    ],
    subBody: "Activist investors began targeting internet companies in the early 2010s. First-generation internet companies adrift were failing to utilize high-growth pre-IPO assets (like Alibaba) effectively. The Yahoo case is a quintessential example of how activism maximizes value when 'hidden assets' and 'management vacuum' coexist simultaneously.",
    players: [
      { name: "Third Point LLC (Dan Loeb)", role: "Activist hedge fund, driving the campaign" },
      { name: "Yahoo! Inc. (Scott Thompson → Marissa Mayer)", role: "Campaign target, CEO change and strategic overhaul" },
      { name: "Alibaba Group (Jack Ma)", role: "Yahoo 40% investee — the core hidden value" },
      { name: "SoftBank (Masayoshi Son)", role: "Yahoo Japan major co-shareholder (~35%), stable friendly party" },
      { name: "Stonehill College", role: "Key evidence source for Thompson's fabricated credential" },
    ],
  },

  companyOverview: {
    targetName: "Yahoo! Inc.",
    body: "Yahoo! Inc. was an internet portal company founded by Jerry Yang and David Filo during their graduate studies at Stanford in 1995. In the late 1990s and early 2000s, it was synonymous with internet advertising, email, and search, but it progressively lost its core business competitiveness to Google's rise. Rejecting Microsoft's $44.6B acquisition offer in 2008 is recorded as one of the worst decisions in the company's history. Conversely, acquiring approximately 40% of Alibaba for $1B in 2005 was its best investment decision ever. By 2012, Yahoo's core value was ironically its Alibaba and Yahoo Japan stakes. Search had been outsourced to Microsoft Bing, and both users and advertisers were moving to Google and Facebook.",
    metrics: [
      { label: "Revenue (FY2011)",                 value: "$4.98B",    sub: "Essentially flat versus prior year" },
      { label: "Alibaba Stake",                    value: "~40%",      sub: "Estimated value $8–10B in 2012; $30B+ at 2014 IPO" },
      { label: "Yahoo Japan Stake",                value: "~35%",      sub: "Jointly held with SoftBank" },
      { label: "Monthly Active Users (2012)",      value: "~700M",     sub: "Still significant traffic asset" },
      { label: "Employees (2012)",                 value: "~14,000",   sub: "Subsequent restructuring conducted" },
      { label: "2008 Microsoft Offer Rejected",    value: "$44.6B",    sub: "2012 market cap $19B — massive opportunity cost" },
    ],
    financials: [
      {
        year: "FY2011",
        revenue: 4984,
        cogs: 1558,
        grossProfit: 3426,
        sga: 2890,
        operatingIncome: 536,
        ebitda: 1020,
      },
      {
        year: "FY2012",
        revenue: 4987,
        cogs: 1552,
        grossProfit: 3435,
        sga: 2980,
        operatingIncome: 455,
        ebitda: 890,
      },
      {
        year: "FY2013",
        revenue: 4680,
        cogs: 1476,
        grossProfit: 3204,
        sga: 2750,
        operatingIncome: 454,
        ebitda: 880,
      },
    ],
    financialsNote: "Unit: $M (millions). Based on Yahoo! public filings. Core internet business profitability flat or declining. EBITDA excludes Alibaba stake gains/losses.",
    financialsCurrency: "USD",
    financialsUnit: "millions",
  },

  governanceOverview: {
    body: "In 2012, Yahoo's governance was effectively in a vacuum. With no controlling shareholder in a completely dispersed ownership structure, three CEOs had been replaced in four years. The board's expertise and independence were both in question, and it was later discovered that some independent directors also had credential issues. Third Point's campaign was more than simple activism — it shook the very foundation of corporate disclosure credibility and board accountability. Loeb chose a strategy of directly joining the board to lead CEO selection and internal reform from within.",
    shareholders: [
      {
        id: "third_point",
        label: "Third Point LLC (Dan Loeb)",
        sub: "Activist hedge fund, driving the campaign",
        stake: "5.8%",
        stakePct: 5.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "softbank",
        label: "SoftBank (Masayoshi Son)",
        sub: "Yahoo Japan major co-shareholder (~35%), stable friendly party",
        stake: "~35%",
        stakePct: 35,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "capital_research",
        label: "Capital Research & Management",
        sub: "Large institutional investor",
        stake: "~7%",
        stakePct: 7,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "management",
        label: "Management and Employees",
        sub: "Stock options and RSU holders",
        stake: "~3%",
        stakePct: 3,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "General Public Shareholders",
        sub: "Retail and small institutional investors",
        stake: "~49%",
        stakePct: 49,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 11,
      independent: 8,
      affiliated: 3,
      note: "Yahoo's board in early 2012 had 11 members. After the Third Point settlement, Loeb and 2 others joined the board. Some existing directors were also embroiled in the credential fabrication controversy, shaking overall board credibility.",
    },
    issues: [
      {
        title: "CEO Résumé Fraud",
        description: "CEO Scott Thompson fabricated a computer science degree from Stonehill College. The major did not even exist at the time of his 1979 graduation. The same false information appeared in SEC filings, raising potential securities law violations. Led to resignation 130 days into his tenure.",
        severity: "critical",
      },
      {
        title: "Serial CEO Failures and Strategic Vacuum",
        description: "Three CEO changes in four years since 2008. No alternative strategy after rejecting Microsoft's $44.6B offer — adrift. Lost core search and advertising competitiveness. Despite holding massive assets in Alibaba and Yahoo Japan stakes, structural inability to return this value to shareholders persisted.",
        severity: "critical",
      },
      {
        title: "Hidden Asset Value Unrealized",
        description: "The combined value of the Alibaba 40% and Yahoo Japan 35% stakes equaled or exceeded Yahoo's market cap, yet the core internet business was implicitly valued at zero or negative. No plan for value realization through asset sales or restructuring.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Remove CEO Scott Thompson",
        result: "won",
        note: "After résumé fraud exposure, audit committee acknowledged the facts; Thompson resigned on May 13, 2012 — 130 days into his tenure.",
      },
      {
        demand: "Secure 3 board seats (including Loeb)",
        result: "won",
        note: "Through settlement with Yahoo, 3 Third Point-nominated directors (including Loeb himself) joined the board.",
      },
      {
        demand: "Recruit a capable new CEO",
        result: "won",
        note: "Loeb actively drove the process from within the board, and Google VP Marissa Mayer was recruited as CEO in July 2012.",
      },
      {
        demand: "Realize Alibaba stake value (return to shareholders)",
        result: "partial",
        note: "2012–2013 partial Alibaba stake sale and $3B+ buyback executed. However, Alibaba's IPO was in 2014, so full value realization came after Loeb's exit.",
      },
    ],
    stockImpact: {
      preCampaign: "$15 (early 2012)",
      peakDuringCampaign: "$20 (immediately after Marissa Mayer hiring announcement, July 2012)",
      postCampaign: "$25 (2013, at Loeb exit)",
      note: "~+33% during campaign period, ~+67% through 2013. After Alibaba IPO (September 2014), Yahoo stock surged to over $50 at one point.",
    },
  },

  dealStructure: {
    body: "Third Point's approach consisted of three phases. Phase one: stake accumulation and public campaign. After securing a 5.8% stake, formally communicated intent to intervene through director nominations. Phase two: information-based attack. By precisely identifying and publicly disclosing the CEO's fabricated credential in an SEC filing, the legitimacy of management was fundamentally undermined. Phase three: board entry and internal reform. After securing 3 board seats through negotiation, directly participated in new CEO hiring and strategic direction-setting from the inside. The overall structure was the classic activism playbook: open market accumulation → information pressure → board entry → strategic reform → value realization → exit.",
    preOwnership: {
      nodes: [
        {
          id: "third_point",
          label: "Third Point LLC",
          sub: "Dan Loeb-founded activist hedge fund",
          type: "acquirer",
        },
        {
          id: "yahoo",
          label: "Yahoo! Inc.",
          sub: "Adrift internet portal, holding Alibaba stake",
          type: "target",
        },
        {
          id: "alibaba",
          label: "Alibaba Group",
          sub: "Yahoo 40% investee (pre-IPO high-growth)",
          type: "entity",
        },
        {
          id: "softbank",
          label: "SoftBank",
          sub: "Yahoo Japan 35% co-shareholder",
          type: "entity",
        },
      ],
      edges: [
        { from: "third_point", to: "yahoo", label: "5.8% accumulated + director nominations" },
        { from: "yahoo", to: "alibaba", label: "40% stake held (hidden value)" },
        { from: "softbank", to: "yahoo", label: "Friendly relationship via Yahoo Japan" },
      ],
    },
    postOwnership: {
      nodes: [
        {
          id: "yahoo_reformed",
          label: "Yahoo! Inc. (Post-Reform)",
          sub: "Marissa Mayer CEO, partial Alibaba stake sale",
          type: "target",
        },
        {
          id: "loeb_board",
          label: "Dan Loeb (Board Member)",
          sub: "Third Point 3 board seats secured, driving internal reform",
          type: "fund",
        },
        {
          id: "alibaba_ipo",
          label: "Alibaba Group",
          sub: "2014 IPO — Yahoo's remaining stake $30B+",
          type: "entity",
        },
        {
          id: "third_point_exit",
          label: "Third Point LLC (Exit)",
          sub: "2013 most of stake sold — cumulative ~$2.4B profit",
          type: "acquirer",
        },
      ],
      edges: [
        { from: "loeb_board", to: "yahoo_reformed", label: "Internal board strategic leadership" },
        { from: "yahoo_reformed", to: "alibaba_ipo", label: "Partial stake sale + remaining stake held" },
        { from: "third_point_exit", to: "yahoo_reformed", label: "Post-exit profit realized" },
      ],
    },
    keyTerms: [
      { label: "Stake Disclosure", value: "February 14, 2012 (5.8%, ~$1B)", accent: true },
      { label: "Résumé Fraud Exposure", value: "May 3, 2012 (SEC filing)", accent: true },
      { label: "Thompson CEO Resignation", value: "May 13, 2012 (130 days into tenure)", accent: true },
      { label: "Board Settlement (3 seats)", value: "May–June 2012", accent: true },
      { label: "Marissa Mayer CEO Hired", value: "July 16, 2012 (former Google VP)" },
      { label: "Buyback Program", value: "$3B+ (funded by partial Alibaba stake sale)" },
      { label: "Third Point Exit", value: "2013 — cumulative ~$2.4B profit realized" },
    ],
  },

  advisors: {
    body: "Third Point conducted an information-based campaign led by its internal research team. The résumé fabrication discovery was performed directly by Third Point's internal team — not external investigators or research firms — by cross-referencing SEC filings with Stonehill College graduation records. Yahoo mobilized multiple legal and IR advisors for crisis response.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Third Point (Activist Side)",
        initials: "3P",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Third Point Internal Research Team",
            role: "Campaign Strategy, SEC Filing Analysis, Credential Verification",
            roleType: "other",
            note: "Directed personally by Dan Loeb. Independently discovered the credential fabrication by cross-referencing Stonehill College's 1979 graduation records with Yahoo's public filings.",
          },
          {
            firm: "Cadwalader, Wickersham & Taft (estimated)",
            role: "Activism Campaign Legal Advisor",
            roleType: "legal",
            note: "Legal support for 13D filings and proxy fight (based on public reporting estimates).",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Yahoo (Management Side)",
        initials: "YHOO",
        bg: "bg-violet-700",
        advisors: [
          {
            firm: "Goldman Sachs (estimated)",
            role: "Strategic Defense Financial Advisor",
            roleType: "financial",
            note: "Yahoo board advisor — activism response strategy and post-CEO change strategic direction review.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz (estimated)",
            role: "Legal Advisor (Hostile Shareholder Defense)",
            roleType: "legal",
            note: "Specialist activism defense law firm. Led settlement negotiations (based on public reporting estimates).",
          },
          {
            firm: "MacKenzie Partners",
            role: "Shareholder Communications and Proxy Advisory",
            roleType: "other",
            note: "Institutional investor persuasion and AGM voting strategy support.",
          },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting estimates and may differ from actual contract details.",
  },

  valuation: {
    body: "Third Point's Yahoo investment thesis was based on classic SOTP (Sum of the Parts) valuation. In early 2012, the combined value of Yahoo's Alibaba stake (~40%) and Yahoo Japan stake (~35%) roughly equaled Yahoo's market cap of $19B. In other words, Yahoo's core internet business (email, news, advertising) was implicitly trading at $0 or negative. This was a clear undervaluation, as well as a governance problem with no management or strategy to realize the hidden asset value. Third Point determined there was ample share price upside if this discount could be resolved through CEO change and board reform.",
    rows: [
      {
        item: "Third Point Investment Size",
        val: "~$1B (5.8% stake)",
        note: "As of February 2012",
        accent: true,
      },
      {
        item: "Yahoo Market Cap (early 2012)",
        val: "~$19B",
        note: "Just before activist intervention",
      },
      {
        item: "Alibaba 40% Stake Estimated Value",
        val: "$8–10B (2012)",
        note: "Yahoo's holding surged to $30B+ at the 2014 IPO",
        accent: true,
      },
      {
        item: "Yahoo Japan 35% Stake Estimated Value",
        val: "~$4–6B",
        note: "Jointly held with SoftBank",
      },
      {
        item: "Core Internet Business Implied Value",
        val: "$0 or Negative",
        note: "Per SOTP — signals severe undervaluation",
        accent: true,
      },
      {
        item: "Yahoo EV/EBITDA (FY2011)",
        val: "~12–15x",
        note: "Based on EBITDA of $1.02B — core business undervalued in real terms",
      },
      {
        item: "Third Point Exit Profit (2013)",
        val: "Cumulative ~$2.4B",
        note: "~2.4x recovery on $1B investment — ~18 months for the campaign",
        accent: true,
      },
    ],
    disclaimer: "Figures based on public reporting and Yahoo filings. Third Point internal return details not publicly disclosed.",
  },

  rationale: {
    buyer: {
      title: "Third Point's Activism Logic",
      initials: "3P",
      bg: "bg-slate-700",
      points: [
        "SOTP analysis: Alibaba + Yahoo Japan stake combined value ≈ Yahoo market cap → core business effectively free, extremely limited downside risk",
        "CEO change alone can drive share price appreciation — governance improvement equals value creation",
        "Decisive information advantage secured via CEO résumé fabrication → overwhelming leverage in board negotiations",
        "Direct board entry strategy → can directly participate in new CEO selection and strategic direction from the inside",
        "Pre-Alibaba IPO stake value 'lottery ticket' structure — asset value naturally appreciates over time",
      ],
    },
    seller: {
      title: "Yahoo Management and Board's Position",
      initials: "YHOO",
      bg: "bg-violet-700",
      points: [
        "CEO Scott Thompson just starting — needed time for strategy overhaul, activist intervention a burden at this early stage",
        "Initial claim that credential error was 'an unintentional mistake' — reversed by audit committee findings",
        "Believed SoftBank's stable major shareholder position (~35%) could serve as a defensive shield — proved insufficient",
        "Ultimately concluded that the Third Point settlement (providing 3 board seats) was more conducive to management stability than a proxy fight",
        "Marissa Mayer hiring was a product of board deliberation after Third Point's board entry — a genuinely joint decision",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Third Point's Yahoo campaign is one of the most dramatic in the history of activism. Using the unprecedented information weapon of exposing CEO résumé fraud, it ousted a CEO in 130 days, then successfully entered the board and recruited star CEO Marissa Mayer. After Mayer's hire, Yahoo's image improvement and the rising value of the Alibaba stake drove a large share price increase. Third Point sold most of its stake in 2013, cumulatively realizing approximately $2.4B — about 2.4x its investment. However, Yahoo's core internet business itself never fundamentally revived, and under Mayer's tenure Yahoo ultimately sold its core business to Verizon for $4.5B in 2017.",
    overallVerdict: "From an activism standpoint, a complete victory — textbook governance reform and value realization. But Yahoo's core business revival incomplete",
    positives: [
      "CEO résumé fabrication exposed and disclosed → CEO resignation 130 days into tenure — unprecedented information-based victory",
      "3 board seats secured + Loeb directly joining the board → strategic decision-making authority obtained",
      "Marissa Mayer CEO hire — star executive from Google dramatically elevated Yahoo's image",
      "Alibaba stake partial sale funded $3B+ buyback → shareholder return executed",
      "Third Point $1B invested → cumulative ~$2.4B recovered — ~2.4x profit in approximately 18 months",
    ],
    risks: [
      "Marissa Mayer's Yahoo turnaround failed — aggressive M&A including $1.4B Tumblr acquisition failed to revive core business",
      "Most of Alibaba stake's value was realized at the 2014 IPO after Third Point's exit — activist returns were limited",
      "Yahoo core business sold to Verizon for $4.5B in 2017 — a devastating end versus peak market cap of $100B",
      "Résumé fraud discovery strategy depends on special circumstances — a one-time information advantage that cannot be replicated",
      "Even after board entry, actual control over core business direction remained limited",
    ],
    editorNote: "Third Point's Yahoo campaign delivers two lessons simultaneously. First, that 'information advantage' trumps stake size. It wasn't the 5.8% stake but the decisive information of the CEO's résumé fabrication that was the core weapon of the campaign. Second, that activism can fix governance but cannot create business competitiveness. Up to recruiting Marissa Mayer was perfect, but stopping the structural decline of a first-generation internet company was outside the domain of activism. Even so, from Third Point's return perspective, this campaign was a complete victory — because of the 'embedded lottery ticket' in the form of the Alibaba stake.",
  },

  tombstone: {
    acquirerInitials: "3P",
    acquirerBg: "bg-slate-700",
    targetInitials: "YHOO",
    targetBg: "bg-violet-700",
    acquirerName: "Third Point LLC (Dan Loeb)",
    targetName: "Yahoo! Inc.",
    dealTitle: "Third Point × Yahoo Activism — CEO Résumé Fraud Discovery",
    dealSize: "~$1B (5.8% Stake)",
    dealSizeUSD: "~$1B",
    evEbitda: "N/A (Activism)",
    closeDate: "July 2012",
  },

  sources: [
    {
      id: 1,
      text: "Third Point LLC — SEC Schedule 13D Filing: Yahoo! Inc. (February 14, 2012)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=third+point&type=SC+13D",
    },
    {
      id: 2,
      text: "Third Point LLC — SEC Schedule 13D/A Amendment: Disclosure of CEO Résumé Discrepancy (May 3, 2012)",
    },
    {
      id: 3,
      text: "Yahoo! Inc. — Press Release: Audit Committee Review of Scott Thompson's Bio (May 13, 2012)",
    },
    {
      id: 4,
      text: "New York Times — Yahoo Chief May Have Exaggerated His Education (May 3, 2012)",
      url: "https://www.nytimes.com",
    },
    {
      id: 5,
      text: "Wall Street Journal — Yahoo CEO Scott Thompson Steps Down (May 13, 2012)",
      url: "https://www.wsj.com",
    },
    {
      id: 6,
      text: "Bloomberg — Yahoo Hires Marissa Mayer as CEO From Google (July 16, 2012)",
      url: "https://www.bloomberg.com",
    },
    {
      id: 7,
      text: "Financial Times — Third Point Sells Yahoo Stake at $2.4 Billion Profit (July 2013)",
      url: "https://www.ft.com",
    },
    {
      id: 8,
      text: "Yahoo! Inc. — Annual Report FY2011, FY2012, FY2013 (SEC 10-K Filings)",
      url: "https://www.sec.gov",
    },
    {
      id: 9,
      text: "Fortune — Dan Loeb's Third Point and the Yahoo Campaign: A Masterclass in Activism (2013)",
    },
  ],

  seo: {
    title: "Third Point × Yahoo — Complete Analysis: CEO Résumé Fraud, 130-Day Ouster",
    description:
      "Complete analysis of Third Point's Dan Loeb activism campaign exposing Yahoo CEO Scott Thompson's fabricated educational credentials and ousting him in 130 days. Through board securing 3 seats, recruiting Marissa Mayer, and Alibaba stake value realization strategy.",
    keywords: [
      "Yahoo CEO fraud",
      "Third Point Dan Loeb Yahoo",
      "Scott Thompson résumé",
      "activism board takeover",
      "Yahoo activism",
      "Dan Loeb Yahoo",
      "Marissa Mayer hire",
      "Alibaba Yahoo stake",
      "information-based activism",
      "CEO résumé fabrication",
    ],
  },

  concepts: [
    {
      term: "Information-Based Activism",
      description:
        "A strategy of using public research and data analysis to uncover management misconduct or errors and force change. Third Point's exposure of Thompson's fabricated credential is the defining example.",
    },
    {
      term: "Résumé Fraud",
      description:
        "The act of an executive exaggerating or fabricating their educational background or work history. If included in SEC filings, it raises potential securities law violations and inflicts fatal damage to corporate credibility.",
    },
    {
      term: "Board Entry Strategy",
      description:
        "An approach where an activist fund directly joins the board through negotiation or a proxy fight and leads strategic change from within.",
    },
    {
      term: "Hidden Asset Unlocking (Alibaba Stake Value)",
      description:
        "The strategy of resolving the undervaluation structure where Yahoo's Alibaba stake (~40%) exceeded Yahoo's market cap, making the core business trade at an implicit negative value.",
    },
    {
      term: "Strategic Alternatives Review",
      description:
        "A formal board process where a company officially evaluates options including sale, spin-off, and partnerships. Often triggered under activist pressure; sends a powerful signal to the market.",
    },
  ],

  faq: [
    {
      q: "How did Third Point discover CEO Scott Thompson's résumé fabrication?",
      a: "Third Point's internal research team discovered it while cross-referencing Yahoo's SEC filings with Stonehill College's graduation records. Thompson claimed dual degrees in computer science and accounting, but Stonehill College did not offer a computer science major in 1979 when he graduated. This was the result of direct research by Third Point's team, not external investigators. An unprecedented example in activism of this level of deep information discovery serving as decisive leverage.",
    },
    {
      q: "Why did Yahoo's board agree to the settlement?",
      a: "Two pressures acted simultaneously. First, with the CEO's moral legitimacy destroyed after the résumé fabrication exposure, forcing a proxy fight would cause even greater reputational damage. Second, Third Point's SOTP analysis (Alibaba + Yahoo Japan stakes = market cap) was persuasive to most institutional investors as well. The practical judgment that providing 3 board seats was more conducive to management stability than a prolonged proxy fight drove the settlement.",
    },
    {
      q: "What was Third Point's role in Marissa Mayer's hire?",
      a: "Loeb played an active role in the new CEO selection committee after joining the board. The Yahoo board reviewed internal and various external candidates, and Loeb strongly advocated for Marissa Mayer based on his Silicon Valley network and knowledge of Google's internal talent. Mayer was VP of Maps, Search, and Local Services at Google, and was positioned to bring both technical leadership and brand prestige to a vacuum at Yahoo. Yahoo's share price surged intraday on the day of Mayer's hire announcement on July 16, 2012.",
    },
    {
      q: "How much did Third Point ultimately earn, and what happened with Alibaba's IPO?",
      a: "Third Point sold most of its Yahoo stake in 2013, cumulatively realizing approximately $2.4B in profit — approximately 2.4x recovery on $1B investment in about 18 months. However, Alibaba's maximum value realization came at the September 2014 IPO, when Yahoo's remaining Alibaba stake was valued at $30B+. Third Point had already exited before the Alibaba IPO, so it was not a direct beneficiary of this astronomical appreciation. Yahoo subsequently struggled with Alibaba stake tax issues and sold its core business to Verizon in 2017, with the Alibaba stake spun off as a separate entity 'Altaba.'",
    },
    {
      q: "What is the significance of this campaign in activism history?",
      a: "It is groundbreaking in three dimensions. First, it was the first large-scale use of an unprecedented 'information weapon' — CEO résumé fabrication exposure — in activism. Second, it substantiated the effectiveness of the board entry strategy. Rather than simply shouting demands from the outside, it directly drove CEO selection and strategic direction from within the board. Third, it completed the formula for unlocking 'hidden asset' value in internet companies. Many activist funds subsequently conducted similar SOTP-analysis-based Asian internet asset value campaigns following this precedent.",
    },
  ],
};

export default deal;
