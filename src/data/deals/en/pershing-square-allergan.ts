import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "pershing-square-allergan",
  title: "Pershing Square + Valeant vs. Allergan — The Activist-Acquirer Alliance That Pushed Legal Boundaries",
  subtitle: "Bill Ackman · Toehold Strategy · White Knight Actavis · SEC Issues · Botox Franchise Value",
  category: "activism",
  industry: "Pharmaceuticals & Biotech",
  country: "United States",
  announcedAt: "2014-04-22",
  closedAt: "2014-11-17",
  announcedDisplay: "April 2014",
  closedDisplay: "November 2014",
  readingMinutes: 12,
  tags: [
    "Pershing Square",
    "Bill Ackman",
    "Valeant",
    "Allergan",
    "Botox",
    "toehold strategy",
    "white knight",
    "activism",
    "Actavis",
    "hostile takeover",
    "SEC investigation",
  ],
  excerpt:
    "Bill Ackman's Pershing Square secretly accumulated a 9.7% stake ($4.35B) in Allergan ahead of a public bid — in a novel alliance with Valeant. Valeant's $45.6B hostile offer was launched, but white knight Actavis snatched Allergan for $66B, handing Pershing Square $2.6B in profit in just nine months. The most controversial activist-acquirer coalition in history.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "PS",  bg: "bg-slate-700",  label: "Pershing Square + Valeant" },
  target:   { initials: "AGN", bg: "bg-indigo-700", label: "Allergan" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Allergan Inc. (ticker: AGN) was a California-based pharmaceutical company best known for Botox. Botox was a multi-billion-dollar franchise with powerful pricing power and patent moats, dominating both the cosmetic (wrinkle treatment) and medical (migraine, overactive bladder) markets. In early 2014, Allergan's stock traded around $120, and the market broadly recognized the company's steady growth while remaining divided on further upside potential.",
    "Valeant Pharmaceuticals (CEO Mike Pearson) was the pharmaceutical industry's contrarian. It grew rapidly through a 'roll-up' strategy — minimizing internal R&D, acquiring proven branded drugs, slashing costs, then raising prices to maximize margins. However, Valeant lacked the shareholder base and acquisition firepower to take down a large target like Allergan on its own. That is where Bill Ackman's Pershing Square entered the picture.",
    "In early 2014, Mike Pearson approached Bill Ackman with an audacious co-investment proposal. The structure was: Pershing Square would quietly accumulate Allergan shares. Once Valeant launched a formal hostile offer, Pershing Square would publicly support it. Pershing Square would capture enormous gains from its already-elevated toehold stake. The critical problem with this structure was that Pershing Square was accumulating shares while aware of Valeant's non-public acquisition plans — planting the seeds of a potential material non-public information (MNPI) trading allegation.",
    "Between February and April 2014, Pershing Square secretly accumulated Allergan shares at an average of approximately $125–$130. Total accumulation reached approximately 9.7% of Allergan's outstanding shares for a total investment of roughly $4.35B. The market had no idea throughout this period. Under the Hart-Scott-Rodino (HSR) Act, a 10-day window existed after crossing the 5% threshold before disclosure was required. Pershing Square exploited that window to the fullest to continue building its position.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Toehold $4.35B (9.7% stake) → $2.6B profit",
    acquirerName: "Pershing Square + Valeant Pharmaceuticals",
    targetName: "Allergan Inc.",
    announcedDisplay: "April 2014",
    closedDisplay: "November 2014 (Actavis acquisition)",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "Pershing Square entered a co-investment agreement with Valeant and secretly accumulated 9.7% of Allergan (~$4.35B) ahead of Valeant's public bid.",
    "April 22, 2014: Valeant officially launched a $45.6B hostile offer ($152/share, mixed cash and stock).",
    "Allergan CEO David Pyott called the bid 'financially and scientifically bankrupt' and mounted a vigorous defense.",
    "White knight Actavis Plc emerged — agreeing on November 17, 2014 to acquire Allergan for $66B ($219/share).",
    "Pershing Square's return: entry at $125–$130 vs. exit at $219 → approximately $2.6B profit, ~65–70% return in nine months.",
    "SEC investigated Pershing Square-Valeant co-investment agreement for potential MNPI use — ruled technically lawful under 2014 regulations, triggering calls for regulatory reform.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "In 2014, the U.S. pharmaceutical industry was in the middle of a sweeping M&A restructuring cycle following the 'patent cliff.' Major pharma companies, facing revenue erosion as blockbuster drug patents expired, scrambled to replenish pipelines through acquisitions, and Valeant-style roll-up models became Wall Street darlings. Meanwhile, Allergan's Botox enjoyed durable patent moats and a franchise value reinforced by explosive growth in the aesthetic treatment market. This deal was the first public unveiling of a new ecosystem in which activist funds served as catalysts for pharmaceutical M&A.",
    metrics: [
      { label: "Valeant hostile offer",               value: "$45.6B",    sub: "$152/share, April 2014" },
      { label: "Actavis final acquisition price",      value: "$66B",      sub: "$219/share, white knight" },
      { label: "Pershing Square toehold stake",        value: "9.7%",      sub: "Total $4.35B accumulated" },
      { label: "Pershing Square profit (estimated)",   value: "~$2.6B",    sub: "9 months, ~65–70% return" },
    ],
    subBody:
      "Botox (botulinum toxin type A) maintained a dominant position in both aesthetic (wrinkle treatment) and medical markets (migraine, overactive bladder, blepharospasm). Brand premium and sustained pricing power were Allergan's core value — and the asset Valeant coveted most.",
    players: [
      { name: "Bill Ackman / Pershing Square",                 role: "Activist hedge fund — accumulated 9.7% toehold, publicly supported Valeant's offer" },
      { name: "Mike Pearson / Valeant Pharmaceuticals",        role: "Roll-up acquirer — launched $45.6B hostile offer, R&D elimination strategy" },
      { name: "David Pyott / Allergan",                        role: "Allergan CEO — rejected the offer, executed white knight defense strategy" },
      { name: "Actavis Plc (Brent Saunders CEO)",              role: "White knight — agreed to acquire Allergan at $66B in a friendly deal" },
      { name: "SEC",                                           role: "Regulator — investigated Pershing Square-Valeant co-investment agreement for potential MNPI use" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Allergan Inc.",
    body: "Allergan Inc. was a California-based pharmaceutical company founded in 1948 and the undisputed global leader in the Botox market. Botox had transcended its status as a mere drug to become an icon of global cosmetic culture, maintaining a dominant position across both aesthetic (wrinkle treatment) and medical (migraine, overactive bladder, blepharospasm) markets. Management adhered to a 'science-first' strategy centered on intensive R&D investment. Valeant's R&D elimination strategy stood in direct opposition to Allergan's corporate philosophy, and CEO David Pyott sharply criticized it as 'an act that would destroy the Botox franchise's value.'",
    metrics: [
      { label: "Founded",                               value: "1948",         sub: "California-based pharmaceutical company" },
      { label: "Botox global market position",          value: "Undisputed #1", sub: "Dominant in both aesthetic and medical markets" },
      { label: "Annual revenue (FY2013)",               value: "$6.0B",        sub: "~70% from Botox-related revenue" },
      { label: "EV/EBITDA (Actavis acquisition price)", value: "~22.0×",       sub: "Based on FY2014 EBITDA of $3.0B" },
      { label: "Market cap (pre-activism)",             value: "~$35B",        sub: "As of January 2014" },
      { label: "Actavis final acquisition price",       value: "$66B",         sub: "$219 per share" },
    ],
    financials: [
      {
        year: "FY2012",
        revenue: 5485,
        cogs: 1242,
        grossProfit: 4243,
        sga: 2580,
        operatingIncome: 1663,
        ebitda: 2100,
      },
      {
        year: "FY2013",
        revenue: 6013,
        cogs: 1360,
        grossProfit: 4653,
        sga: 2800,
        operatingIncome: 1853,
        ebitda: 2350,
      },
      {
        year: "FY2014",
        revenue: 7246,
        cogs: 1612,
        grossProfit: 5634,
        sga: 3200,
        operatingIncome: 2434,
        ebitda: 3020,
      },
    ],
    financialsNote: "Unit: $M (millions) | FY2014 annualized prior to Actavis acquisition close | Source: Allergan annual reports and public filings",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "The governance controversy in this deal had unprecedented complexity. The structure — in which an activist fund (Pershing Square) became an acquirer's (Valeant's) pre-arranged partner, accumulating a toehold stake before a public bid — was neither a traditional activism campaign nor a conventional hostile M&A. It was a new hybrid strategy. Allergan management solidly defended its board and sought a white knight; shareholders ultimately captured maximum value through the $219 acquisition price. Pershing Square functioned simultaneously as activist and financial speculator, and that dual role ignited the SEC investigation and regulatory reform debate.",
    shareholders: [
      {
        id: "pershing",
        label: "Pershing Square Capital",
        sub: "Bill Ackman — publicly supported Valeant's bid",
        stake: "9.7%",
        stakePct: 9.7,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "Global passive asset manager",
        stake: "6.5%",
        stakePct: 6.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "Global institutional investor",
        stake: "5.8%",
        stakePct: 5.8,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "mgmt",
        label: "Management (CEO Pyott & team)",
        sub: "David Pyott CEO-led management team",
        stake: "1.2%",
        stakePct: 1.2,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "General Public Shareholders",
        sub: "Retail and other institutional shareholders",
        stake: "76.8%",
        stakePct: 76.8,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 9,
      independent: 8,
      affiliated: 1,
      note: "Allergan's board was composed primarily of independent directors. The board judged Valeant's offer as an 'undervalued hostile proposal' and fully supported management's white knight strategy. During negotiations with Actavis, the board is widely regarded to have fulfilled its fiduciary duty to maximize shareholder value.",
    },
    issues: [
      {
        title: "MNPI-Based Toehold Accumulation — SEC Investigation Target",
        description: "Pershing Square accumulated Allergan shares while aware of Valeant's non-public acquisition plans. This raised potential material non-public information (MNPI) trading concerns. The SEC launched a formal investigation, triggering fierce debate among regulators and legal scholars.",
        severity: "critical",
      },
      {
        title: "Conflict of Interest in Activist-Acquirer Coalition Structure",
        description: "Pershing Square was simultaneously an Allergan shareholder (with a fiduciary duty to maximize shareholder value) and a supporter of Valeant's bid (acting in Valeant's interest). Critics argued the two roles created a structural conflict of interest.",
        severity: "critical",
      },
      {
        title: "Exploitation of HSR 10-Day Disclosure Window",
        description: "Under 2014 HSR rules, a party had 10 days after crossing the 5% threshold to file a disclosure. Pershing Square used this window to accumulate additional shares before filing. Critics pointed to this as a loophole enabling pre-planned secret accumulations.",
        severity: "high",
      },
      {
        title: "Long-Term Value Destruction from Valeant's R&D Elimination Plan",
        description: "Valeant planned to cut Allergan's R&D by more than 90% post-acquisition. Allergan's management and analysts feared this would destroy the long-term growth engine of the Botox franchise.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Allergan board to accept Valeant's offer",
        result: "lost",
        note: "Allergan's board rejected Valeant's offer multiple times. Subsequently chose Actavis as white knight.",
      },
      {
        demand: "Replace Allergan board (Valeant-Pershing Square nominee slate)",
        result: "lost",
        note: "Actavis's white knight acquisition pre-empted the board replacement process.",
      },
      {
        demand: "Maximize shareholder value",
        result: "won",
        note: "Pershing Square entry price of $125–$130 vs. Actavis acquisition price of $219 — shareholder value was ultimately maximized.",
      },
    ],
    stockImpact: {
      preCampaign: "$120",
      peakDuringCampaign: "$220",
      postCampaign: "$219",
      note: "Allergan stock, trading around $120 in January 2014, rose approximately 83% when the Actavis acquisition at $219 was agreed. Pershing Square realized approximately $2.6B in profit over nine months — a return of approximately 65–70% on its $125–$130 entry price.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "This deal unfolded in three stages: (1) Pershing Square's secret toehold accumulation (February–April) → (2) Valeant's public hostile offer and Allergan's vigorous defense (April–October) → (3) Actavis white knight emergence and final agreement (November). Pershing Square functioned neither as a traditional activist nor as an acquirer, but as a 'partner-speculator' aligned financially with the acquirer. This structure itself was both a groundbreaking innovation and a flashpoint of controversy in M&A history.",
    preOwnership: {
      nodes: [
        { id: "pershing",   label: "Pershing Square",       sub: "9.7% toehold secretly accumulated",       type: "acquirer" },
        { id: "valeant",    label: "Valeant",               sub: "Preparing public offer ($45.6B)",          type: "fund" },
        { id: "allergan",   label: "Allergan",              sub: "Botox maker, activism target",             type: "target" },
        { id: "pyott",      label: "David Pyott CEO",       sub: "Rejected offer, sought white knight",      type: "entity" },
        { id: "inst",       label: "Institutional Investors", sub: "Vanguard, BlackRock etc. — neutral",     type: "public" },
      ],
      edges: [
        { from: "pershing", to: "allergan", label: "9.7% secret accumulation" },
        { from: "valeant",  to: "allergan", label: "$45.6B hostile offer preparation" },
        { from: "pershing", to: "valeant",  label: "Co-investment agreement (MNPI controversy)" },
        { from: "pyott",    to: "allergan", label: "CEO — defending against offer" },
        { from: "inst",     to: "allergan", label: "~18.5% held (neutral)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "actavis",    label: "Actavis Plc",           sub: "White knight, $66B final acquisition",     type: "acquirer" },
        { id: "allergan",   label: "Allergan",              sub: "Acquired by Actavis at $219/share",        type: "target" },
        { id: "pershing",   label: "Pershing Square",       sub: "~$2.6B profit, exited in 9 months",       type: "fund" },
        { id: "valeant",    label: "Valeant",               sub: "Bid failed, market credibility hit",       type: "entity" },
      ],
      edges: [
        { from: "actavis",  to: "allergan", label: "$66B friendly acquisition completed" },
        { from: "pershing", to: "actavis",  label: "Shares sold at $219" },
        { from: "valeant",  to: "allergan", label: "Bid withdrawn (lost to white knight)" },
      ],
    },
    keyTerms: [
      { label: "Pershing Square toehold investment",   value: "~$4.35B (9.7% stake)",              accent: true },
      { label: "Valeant hostile offer price",          value: "$45.6B ($152/share)",                accent: false },
      { label: "Actavis white knight acquisition price", value: "$66B ($219/share)",                accent: true },
      { label: "Pershing Square profit (estimated)",   value: "~$2.6B (9 months, ~65%+ return)",   accent: true },
      { label: "SEC investigation outcome",            value: "Technically lawful (2014 rules)",    accent: false },
      { label: "Deal close",                           value: "November 17, 2014",                  accent: false },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "The Pershing Square-Valeant alliance assembled an advisory team versed in aggressive M&A. Allergan deployed independent financial advisors and top-tier M&A law firms to defend against the offer and lead negotiations with Actavis.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Pershing Square + Valeant (Attacking Side)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Citigroup",
            role: "Valeant Financial Advisor",
            roleType: "financial",
            note: "Designed Valeant's hostile offer structure, arranged acquisition financing, and supported public presentations.",
          },
          {
            firm: "RBC Capital Markets",
            role: "Valeant Co-Financial Advisor",
            roleType: "financial",
            note: "Supported deal value communications to Valeant's shareholders.",
          },
          {
            firm: "Paul, Weiss, Rifkind, Wharton & Garrison",
            role: "Pershing Square Legal Advisor",
            roleType: "legal",
            note: "Structured the co-investment agreement, managed SEC disclosure strategy, and addressed HSR filing legal issues.",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom",
            role: "Valeant Legal Advisor",
            roleType: "legal",
            note: "Developed hostile M&A strategy and provided legal advice on board replacement procedures.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Allergan (Defense Side)",
        initials: "AGN",
        bg: "bg-indigo-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor (Defense)",
            roleType: "financial",
            note: "Conducted independent valuation of Allergan, prepared counter-arguments to Valeant's offer, and supported negotiations with Actavis.",
          },
          {
            firm: "BofA Merrill Lynch",
            role: "Co-Financial Advisor (Defense)",
            roleType: "financial",
            note: "Managed shareholder communications and developed the defense narrative around Botox franchise value.",
          },
          {
            firm: "Latham & Watkins",
            role: "Legal Advisor (Defense)",
            roleType: "legal",
            note: "Advised Allergan's board on defense strategy, filed SEC reports on Pershing Square-Valeant co-investment MNPI concerns, and negotiated the Actavis merger agreement.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Co-Legal Advisor (Defense)",
            roleType: "legal",
            note: "Advised on activism defense and board fiduciary duties. Reviewed Poison Pill strategy.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources and may not reflect all advisory relationships.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "There was approximately a $20B gap between Valeant's $45.6B hostile offer and Actavis's $66B white knight price. This gap stemmed from differing views on how to value the Botox franchise's long-term growth potential and the future value of sustained R&D investment. Allergan management and Goldman Sachs argued that Valeant's R&D elimination plan would severely damage long-term value; Actavis recognized that value and offered a higher premium.",
    rows: [
      { item: "Pershing Square average entry price",          val: "~$127.5/share",  note: "Secret accumulation February–April 2014, total $4.35B" },
      { item: "Valeant initial offer price",                  val: "$152/share",     note: "Public announcement April 22, 2014" },
      { item: "Valeant final raised offer price",             val: "~$200/share",    note: "Cash + Valeant stock combination" },
      { item: "Actavis white knight final acquisition price", val: "$219/share",     note: "Agreement November 17, 2014",               accent: true },
      { item: "Actavis acquisition EV",                       val: "~$66B",          note: "Allergan enterprise value including net debt" },
      { item: "EV/EBITDA (Actavis acquisition price)",        val: "~22.0×",         note: "Based on FY2014E EBITDA ~$3.0B",            accent: true },
      { item: "Pershing Square realized profit (estimated)",  val: "~$2.6B",         note: "$127.5 → $219, ~72% return",                accent: true },
    ],
    disclaimer: "Note: Pershing Square's final profit may vary depending on the timing and structure of its exit. Actavis acquisition price reflects mixed cash and stock consideration.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Pershing Square + Valeant chose this structure",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "Asymmetric return structure of the toehold strategy: accumulating shares before the public offer maximizes gains from the post-announcement price surge. Whether Valeant succeeded or Allergan found a higher-priced white knight, Pershing Square profited — a risk-asymmetric structure.",
        "Valeant's acquisition rationale: Allergan's high R&D spend (~17% of revenue) could be slashed below 5% using Valeant's playbook, unlocking massive cost savings. The argument was that the Botox brand could sustain itself without material R&D.",
        "For Pershing Square, Allergan was an ideal target: dispersed shareholder base, a clear core asset in Botox, and the ability to monetize through a toehold strategy without even needing to replace management.",
        "Incentive alignment in the co-investment agreement: Pershing Square profited if the deal succeeded, and profited from the stock's rise even if it didn't — its return was structurally guaranteed regardless of Valeant's outcome.",
      ],
    },
    seller: {
      title: "Why Allergan rejected Valeant and chose Actavis",
      initials: "AGN",
      bg: "bg-indigo-700",
      points: [
        "Valeant's R&D elimination plan would destroy the Botox franchise's sustained growth engine. Allergan's management had a pipeline of new medical indications for Botox underpinning its growth strategy.",
        "Actavis's $219/share offer was 44% above Valeant's $152, with a higher cash component — clearly superior in terms of shareholder value.",
        "Allergan's board was composed primarily of independent directors and had a fiduciary duty to maximize shareholder value. Actavis's higher acquisition price satisfied that duty.",
        "The strategy of reporting the Pershing Square-Valeant co-investment structure's legal and ethical concerns to the SEC — buying time while negotiating with Actavis — executed flawlessly.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Actavis's acquisition of Allergan evolved further when Actavis renamed itself 'Allergan' in 2015 — and that new Allergan was subsequently acquired by AbbVie in 2020 for approximately $63B. Botox remains a dominant global brand in the aesthetic and medical markets as a core AbbVie asset. Valeant, after failing to acquire Allergan, was subsequently hit with its own accounting scandal, drug pricing controversies, and executive turnover, eventually rebranding as Bausch Health while its stock collapsed more than 97% from its peak. Pershing Square's $2.6B profit was spectacular, but the SEC investigation and the regulatory debate it triggered became a watershed moment in redefining the legal boundaries of activist investing.",
    overallVerdict: "Pershing Square's decisive financial victory — but a lasting legal and ethical precedent",
    positives: [
      "Pershing Square: $4.35B invested → $2.6B profit, ~65–70% return in nine months. One of the largest and fastest single-campaign gains in activist history.",
      "All Allergan shareholders: stock rose from ~$120 (January 2014) to $219 (Actavis acquisition price) — approximately 83% gain. Maximum price realized through white knight competition.",
      "Actavis: acquired Allergan's portfolio including Botox for $66B, subsequently re-launched as 'Allergan' and emerged as a mega-pharma company.",
      "M&A ecosystem: introduced the activist-acquirer co-investment structure, testing the creative limits of deal-making.",
    ],
    risks: [
      "Had Valeant's R&D elimination strategy succeeded, the Botox pipeline would have been depleted. Without white knight Actavis, long-term harm to both Allergan shareholders and patients was a real risk.",
      "Following the SEC investigation, discussion of tightening regulations on activist hedge funds' pre-deal stake accumulations and acquirer agreements intensified. Pershing Square's structure made similar deals harder to execute in the future.",
      "Immediately after this deal's success, Pershing Square suffered massive losses from a direct investment in Valeant stock — ironically, the collaboration with Valeant planted the seeds of subsequent disaster.",
    ],
    editorNote:
      "The Pershing Square-Allergan deal is a textbook case showing just how flexibly activist investing can cross the traditional boundaries of M&A — and equally, the legal and ethical price that comes with crossing those lines. Bill Ackman made $2.6B, but immediately thereafter lost approximately $4B on a direct investment in Valeant shares. The market, in the end, was fair.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PS",
    acquirerBg: "bg-slate-700",
    targetInitials: "AGN",
    targetBg: "bg-indigo-700",
    acquirerName: "Pershing Square + Valeant Pharmaceuticals",
    targetName: "Allergan Inc.",
    dealTitle: "Pershing Square + Valeant × Allergan — The Legal Boundaries of an Activist-Acquirer Alliance",
    dealSize: "$4.35B toehold (9.7% stake)",
    dealSizeUSD: "$4.35B → $2.6B profit",
    evEbitda: "~22.0× (Actavis acquisition price)",
    closeDate: "November 2014 (Actavis acquisition)",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1,  text: "Pershing Square, Allergan Stake Acquisition SEC Schedule 13D Filing (April 21, 2014)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=pershing+square&CIK=&type=SC+13D&dateb=&owner=include&count=40" },
    { id: 2,  text: "Valeant Pharmaceuticals, Public Tender Offer Announcement Press Release (April 22, 2014)" },
    { id: 3,  text: "Allergan Inc., Official Board Statement Rejecting Valeant's Offer (April–October 2014)" },
    { id: 4,  text: "Actavis Plc, Allergan Acquisition Agreement Filing (November 17, 2014)", url: "https://www.sec.gov/Archives/edgar/data/1522540/000152254014000007/0001522540-14-000007-index.htm" },
    { id: 5,  text: "Allergan Inc. Annual Reports FY2012, FY2013, FY2014, SEC EDGAR" },
    { id: 6,  text: "SEC Press Release, Pershing Square-Valeant Co-Investment Agreement Investigation Outcome (2015)" },
    { id: 7,  text: "William Ackman, Pershing Square Capital Management — Allergan Investment Presentation (April 2014)" },
    { id: 8,  text: "Financial Times, 'Ackman's Allergan bet: the toehold that changed M&A' (December 2014)" },
    { id: 9,  text: "Wall Street Journal, 'Valeant's Failed Allergan Bid: A Post-Mortem' (November 2014)" },
    { id: 10, text: "Harvard Law School Forum, 'The Pershing Square-Valeant Allergan Case and Insider Trading Law' (2015)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Pershing Square Allergan Activism — The Botox Takeover Battle and Toehold Strategy Fully Dissected",
    description:
      "Complete analysis of Bill Ackman's Pershing Square and Valeant's hostile takeover attempt of Allergan. Toehold strategy: $4.35B secret accumulation, white knight Actavis $66B acquisition, Pershing Square $2.6B profit, SEC insider trading investigation.",
    keywords: [
      "Pershing Square Allergan activism",
      "Valeant Allergan hostile takeover",
      "Botox acquisition",
      "toehold strategy activism",
      "Bill Ackman Allergan",
      "Actavis Allergan white knight",
      "Pershing Square profit",
      "HSR 10-day disclosure rule",
      "activist M&A coalition",
      "pharmaceutical hostile takeover",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Toehold Strategy",
      description: "Accumulating target company shares ahead of a public offer to establish negotiating leverage and a profit base. Pershing Square accumulated 9.7% of Allergan at $125–$130 and sold at $219, realizing $2.6B in profit.",
    },
    {
      term: "Activist-Acquirer Coalition",
      description: "A hybrid strategy in which an activist fund becomes an acquirer's pre-arranged partner to pursue shared financial interests. A seminal case in the legal and ethical boundary debate. The Pershing Square-Valeant agreement is recorded as the first publicly known instance of this structure.",
    },
    {
      term: "White Knight",
      description: "A friendly acquirer who offers a competing bid to rescue a target company from a hostile acquirer. In the Allergan deal, Actavis played this role — acquiring Allergan at $219/share, 44% above Valeant's $152 offer.",
    },
    {
      term: "HSR 10-Day Disclosure Window",
      description: "A U.S. Hart-Scott-Rodino (HSR) rule requiring disclosure within 10 days of crossing the 5% ownership threshold. Pershing Square used this window to accumulate additional shares before filing — a loophole that subsequently triggered SEC regulatory reform discussions.",
    },
    {
      term: "Botox Franchise Value",
      description: "The dominant pricing power and brand premium Allergan's core asset Botox commands in both aesthetic and medical markets. Valeant sought to exploit this through R&D elimination; Allergan argued the franchise's value came from sustained investment and pipeline expansion.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Why didn't Pershing Square just acquire Allergan directly instead of partnering with Valeant?",
      a: "Pershing Square is a hedge fund, not a pharmaceutical operator. But by entering a co-investment agreement with Valeant, it could profit from the toehold alone regardless of whether the acquisition succeeded. If Valeant succeeded, it sold at the acquisition price; if not, the competitive bidding pushed the stock up anyway. For Pershing Square, the structure was 'heads I win, tails I win.'",
    },
    {
      q: "Why did the SEC rule Pershing Square's conduct lawful?",
      a: "Under 2014 U.S. securities law, 'insider trading' was defined as using MNPI by corporate insiders (officers, directors, employees) or those who received information from them. Pershing Square was not an Allergan insider, and Valeant's acquisition plan was Valeant's own strategic information — not Allergan's inside information. It also disclosed within the HSR 10-day window. There was technically no violation, but the ruling prompted regulators to move toward tightening rules to prevent similar structures.",
    },
    {
      q: "Why did Allergan CEO David Pyott reject Valeant so forcefully?",
      a: "Two reasons. First, financial: Valeant's $152/share offer was below Allergan's standalone DCF value (estimated at $180+). Second, strategic: Valeant planned to cut Allergan R&D by over 90%. Pyott believed developing new medical indications for Botox was the core of long-term growth. His central argument: 'Kill R&D, and eventually you kill Botox too.'",
    },
    {
      q: "Why did white knight Actavis pay $66B — $20B more than Valeant?",
      a: "Actavis placed a higher value on Allergan's long-term growth. The Botox pipeline (new therapeutic indications), high growth in the medical aesthetics market, and Allergan's global commercial infrastructure aligned perfectly with Actavis's strategy. Actavis also had an Irish domicile, giving it potential tax inversion benefits post-acquisition.",
    },
    {
      q: "What is the significance of this deal in activism history?",
      a: "The Pershing Square-Allergan deal showed that activist hedge funds could extend their influence to the 'pre-bid' stage of M&A. Where traditional activism meant accumulating shares and demanding operational improvements, this deal saw activism evolve into a role where the activist designed the entire deal as the acquirer's partner. Simultaneously, the structure exposed its legal and ethical limits, driving SEC regulatory tightening in 2015.",
    },
    {
      q: "What happened to Pershing Square after this deal?",
      a: "Pershing Square earned approximately $2.6B in historic profits from this deal, but subsequently invested directly in Valeant stock and lost approximately $4B. Trying to apply the 'lesson' of the Allergan deal back to Valeant, it was directly hit by Valeant's accounting scandal and stock collapse. Bill Ackman's reputation suffered for some time, and Pershing Square's AUM shrank materially.",
    },
  ],
};

export default deal;
