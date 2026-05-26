/**
 * BHP Billiton × Rio Tinto Hostile Takeover Attempt
 * Largest-ever mining hostile bid — $148B proposed, withdrawn November 2008
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bhp-rio-tinto",
  title: "Why BHP Billiton Bid $148B for Rio Tinto — The Largest Hostile Mining Takeover Dissected",
  subtitle: "Peak of the Resource Super Cycle · Chinalco White Knight · Global Financial Crisis Ends the Mega-Bid",
  category: "control",
  industry: "Mining & Resources",
  country: "Australia · UK",
  announcedAt: "2007-11-08",
  closedAt: "2008-11-25",
  announcedDisplay: "November 2007",
  closedDisplay: "November 2008 (Withdrawn)",
  readingMinutes: 11,
  tags: ["BHP", "Rio Tinto", "Hostile M&A", "Mining", "Iron Ore", "China", "Global Financial Crisis", "Resources M&A"],
  excerpt:
    "BHP Billiton proposed the largest hostile mining takeover in history — a $148B all-stock offer (3.4 BHP shares per Rio share) — in November 2007. Chinese state-owned Chinalco emerged as a white knight, buying 9% of Rio Tinto for $14B. When the 2008 Lehman collapse crashed commodity prices, BHP withdrew two months later. The resource super-cycle ended the deal before regulators could.",

  acquirer: { initials: "BHP", bg: "bg-orange-700", label: "BHP Billiton" },
  target:   { initials: "RIO", bg: "bg-blue-700",   label: "Rio Tinto plc" },

  background: [
    "China's breakneck infrastructure build-out in the mid-2000s sent iron ore, copper, and coal demand surging to record highs. The so-called 'resource super-cycle' minted extraordinary profits for the world's major miners. BHP Billiton CEO Marius Kloppers concluded that only a mega-merger could position the combined entity as the undisputed global champion across iron ore, copper, and coal — commodities at the heart of China's growth engine.",
    "Rio Tinto's decision to acquire Canadian aluminum giant Alcan for $38B in 2007 was transformative but costly: it loaded Rio with substantial debt and created a window of financial vulnerability. BHP moved swiftly to exploit that weakness, announcing on November 8, 2007 an all-stock exchange offer at 3.4 BHP shares per 1 Rio Tinto share — implying a deal value of roughly $147–148B, the largest mining M&A proposal in history.",
    "Rio Tinto's board rejected the offer immediately, declaring it 'fundamentally undervalued' the company. The key defensive move was recruiting Chinese state-owned Chinalco (Aluminum Corporation of China) as a white knight. In January 2008, Chinalco and Lehman Brothers together purchased a 9% stake in Rio Tinto for approximately $14B, blocking BHP from accumulating a friendly shareholding and signaling Beijing's determination to prevent a super-concentration of iron ore supply.",
    "The killing blow came from outside both companies. Lehman Brothers' collapse in September 2008 triggered a global financial crisis, sending iron ore and copper prices down 30–50%. The core thesis of the BHP bid — a multi-decade resource super-cycle — crumbled almost overnight. Two months later, on November 25, 2008, BHP formally withdrew, citing changed market conditions. Rio Tinto had survived, but the Alcan debt burden forced a near-capitulation to a $19.5B Chinalco deal in 2009 that Rio's own shareholders ultimately voted down.",
  ],

  dealSummary: {
    dealValueDisplay: "~USD 148B (proposed, all-stock — withdrawn)",
    acquirerName: "BHP Billiton Limited / plc",
    targetName: "Rio Tinto plc / Limited",
    announcedDisplay: "November 2007",
    closedDisplay: "November 2008 (Withdrawn)",
    country: "Australia · UK",
  },

  executiveSummary: [
    "$148B all-stock offer at 3.4 BHP shares per Rio Tinto share — the largest hostile mining bid ever announced.",
    "Core thesis: dominate the resource super-cycle by merging the world's #1 and #2 diversified miners.",
    "Rio Tinto defense: immediate board rejection + Chinalco white knight (9% stake, $14B) to block BHP.",
    "Regulatory shield: EU, Australian, and Chinese antitrust reviews provided Rio with valuable defensive time.",
    "Outcome: Lehman collapse (Sep 2008) → commodity price crash → BHP withdraws November 25, 2008.",
    "Irony: Rio survived but nearly ceded control to Chinalco ($19.5B follow-on deal, scrapped by shareholder revolt in 2009).",
    "Lesson: macro cycle timing is decisive in resource M&A — a super-cycle thesis that collapses mid-bid destroys deal logic.",
  ],

  industryOverview: {
    body: "By the mid-2000s, global mining was experiencing a once-in-a-generation boom driven by China's unprecedented infrastructure investment. Iron ore spot prices tripled between 2003 and 2008; copper hit record highs; coal supply was strained globally. The two largest diversified miners — BHP Billiton and Rio Tinto — together controlled roughly 35–40% of seaborne iron ore supply. A combination would have created a single entity with unrivaled pricing power over Chinese steel mills, who were importing well over half their iron ore from Australia and Brazil.",
    metrics: [
      { label: "Global Seaborne Iron Ore Market", value: "~USD 150B", sub: "Annual trade value, 2007" },
      { label: "Iron Ore Price Increase", value: "+300%+ (2003–2008)", sub: "China infrastructure demand surge" },
      { label: "Combined Market Cap (BHP + Rio)", value: "~USD 350B+", sub: "At bid announcement" },
      { label: "Proposed Deal Size", value: "USD 148B", sub: "Largest-ever mining M&A proposal" },
    ],
    subBody: "A merged BHP-Rio entity would have controlled roughly 35–40% of global seaborne iron ore alongside Vale (Brazil), effectively creating a three-player cartel. Chinese steelmakers — Rio Tinto's largest customers — correctly identified this as an existential threat to their negotiating position, explaining why Beijing used state capital (Chinalco) as an instrument to block the deal.",
    players: [
      { name: "BHP Billiton", role: "World's largest miner by market cap — hostile bidder" },
      { name: "Rio Tinto", role: "World's #2 diversified miner — bid target" },
      { name: "Chinalco", role: "Chinese state-owned aluminum company — white knight, 9% stake" },
      { name: "Vale (CVRD)", role: "Brazil's iron ore giant — largest beneficiary of deal failure" },
      { name: "EU / AU / China Antitrust", role: "Prolonged reviews provided Rio with defensive time" },
    ],
  },

  companyOverview: {
    targetName: "Rio Tinto plc",
    body: "Rio Tinto is a dual Anglo-Australian mining giant incorporated in 1873, operating through twin-listed entities on the London Stock Exchange and ASX. Its core assets include the Pilbara iron ore operations in Western Australia (among the world's highest-grade and lowest-cost deposits), the Escondida copper mine in Chile (world's largest copper mine, jointly with BHP and other partners), and aluminum, coal, and diamonds. The 2007 Alcan acquisition transformed Rio into the world's largest aluminum producer but loaded the balance sheet with $38B in debt — the vulnerability BHP sought to exploit.",
    metrics: [
      { label: "Founded", value: "1873", sub: "Rio Tinto mine, Spain — later Anglo-Australian entity" },
      { label: "Core Assets", value: "Iron Ore · Copper · Aluminum · Coal", sub: "Pilbara iron ore is the crown jewel" },
      { label: "FY2007 Revenue", value: "~USD 33B", sub: "Iron ore & copper price surge tailwind" },
      { label: "Alcan Acquisition", value: "USD 38B (2007)", sub: "Aluminum expansion; significant debt load" },
    ],
    financials: [
      { year: "FY2007", revenue: 330, cogs: 180, grossProfit: 150, sga: 30, operatingIncome: 80, ebitda: 110 },
      { year: "FY2008", revenue: 540, cogs: 290, grossProfit: 250, sga: 35, operatingIncome: 100, ebitda: 140 },
    ],
    financialsNote: "Unit: USD hundred millions (USD B). Based on public filings and press reports. FY2008 revenue surge driven by record commodity prices in H1 before crisis impact.",
    financialsCurrency: "USD",
    financialsUnit: "hundred millions",
  },

  controlBattleOverview: {
    body: "BHP Billiton proposed the largest hostile mining takeover in history — an all-stock exchange at 3.4 BHP shares per Rio Tinto share, implying roughly $148B in deal value. Rio Tinto's board rejected the offer immediately and recruited Chinese state-owned Chinalco as a white knight, which purchased a 9% stake for $14B to block BHP's ability to accumulate friendly shares. EU, Australian, and Chinese antitrust reviews added further defensive time. The killing blow came from the market: the September 2008 Lehman collapse crashed commodity prices 30–50%, destroying the super-cycle thesis at the heart of BHP's bid. BHP withdrew two months later. The largest mining hostile bid in history was ended not by the target's defenses, but by the global financial crisis.",
    catalyst: "China's infrastructure boom drove a resource super-cycle that pushed iron ore and copper to record highs through 2007. BHP CEO Marius Kloppers saw a generational opportunity to build the world's dominant mining empire. Meanwhile, Rio Tinto had just bought Alcan for $38B, loading its balance sheet with debt — a financial vulnerability that BHP moved quickly to exploit.",
    attackerLabel: "BHP Billiton",
    defenderLabel: "Rio Tinto Board of Directors",
    battleMoves: [
      {
        date: "2007-11-08",
        actor: "BHP Billiton",
        side: "attack",
        move: "Hostile Merger Proposal — 3.4 BHP shares per Rio share",
        detail: "BHP publicly proposed an all-stock merger at a 3.4:1 exchange ratio, implying approximately $147B at prevailing prices. Framed as 'the ideal partnership for the resource super-cycle era,' BHP appealed directly to Rio shareholders over the head of the board.",
        financialImpact: "Rio Tinto shares +15% on announcement",
        weapon: "All-Stock Hostile Tender Offer",
      },
      {
        date: "2007-12-01",
        actor: "Rio Tinto Board",
        side: "defense",
        move: "Board Formally Rejects Proposal",
        detail: "Rio Tinto's board unanimously rejected the BHP offer, declaring it 'fundamentally undervalues Rio Tinto.' The board emphasized the company's independent growth strategy and the strategic value of its Pilbara iron ore and Escondida copper assets.",
        weapon: "Board Resolution",
      },
      {
        date: "2008-01-30",
        actor: "Chinalco (Aluminum Corp. of China)",
        side: "defense",
        move: "Emergency 9% Stake Purchase — White Knight Emerges",
        detail: "Chinese state-owned Chinalco, together with Lehman Brothers, purchased a 9% stake in Rio Tinto for approximately $14B. The move blocked BHP from accumulating friendly shares and signaled Beijing's determination to prevent a concentration of iron ore supply under a single Western miner.",
        financialImpact: "Chinalco invests $14B; BHP's ability to acquire friendly stake severely curtailed",
        weapon: "White Knight (Chinalco)",
      },
      {
        date: "2008-02-06",
        actor: "BHP Billiton",
        side: "attack",
        move: "Reaffirms 3.4:1 Ratio + Direct Shareholder Outreach",
        detail: "BHP maintained its exchange ratio and launched a direct outreach campaign to Rio Tinto institutional shareholders, presenting merger synergies and the super-cycle growth thesis. Filed for antitrust review in the EU and Australia simultaneously.",
        weapon: "Direct Shareholder Persuasion",
      },
      {
        date: "2008-11-25",
        actor: "BHP Billiton",
        side: "neutral",
        move: "Voluntary Withdrawal — Global Financial Crisis",
        detail: "Following the Lehman Brothers collapse (September 15, 2008), iron ore and copper prices fell 30–50%. BHP formally withdrew, stating the merger 'is not in the best interests of BHP shareholders in the current environment.' The resource super-cycle thesis that underpinned the bid had collapsed.",
        financialImpact: "Rio Tinto shares -20% on withdrawal (premium evaporates)",
        weapon: "Voluntary Withdrawal",
      },
    ],
    financialWeapons: [
      {
        name: "All-Stock Hostile Tender Offer",
        side: "attack",
        usedBy: "BHP Billiton",
        description: "Acquiring Rio Tinto using only BHP shares — no cash outlay. At commodity price peaks, BHP shares were themselves highly valued, making the exchange ratio attractive. When the financial crisis slashed BHP's share price, the implied deal value collapsed and the strategy lost its rationale.",
        effectiveness: "blocked",
      },
      {
        name: "White Knight (Chinalco)",
        side: "defense",
        usedBy: "Rio Tinto",
        description: "Recruiting Chinese state-owned Chinalco as a friendly anchor investor to block BHP's share accumulation. Chinalco's 9% stake represented a block BHP could not dislodge, and aligned China's strategic interests (preventing iron ore supply concentration) with Rio's defense.",
        effectiveness: "effective",
      },
      {
        name: "Antitrust Regulatory Shield",
        side: "defense",
        usedBy: "Rio Tinto / Regulators",
        description: "EU, Australian, and Chinese antitrust authorities launched prolonged reviews given the extreme market concentration the merger would create. Rio Tinto leveraged this regulatory uncertainty as additional defensive time, while the uncertainty itself deterred BHP shareholders from fully backing the bid.",
        effectiveness: "effective",
      },
      {
        name: "Commodity Price Collapse (Financial Crisis)",
        side: "defense",
        usedBy: "Market",
        description: "The 2008 global financial crisis triggered a 30–50% collapse in iron ore and copper prices, destroying the economic rationale for the merger. BHP's voluntary withdrawal was driven entirely by this market force — a decisive result not manufactured by Rio Tinto's strategy, but delivered by external macro events.",
        effectiveness: "decisive",
      },
    ],
    turningPoint: {
      date: "2008-09-15",
      event: "Lehman Brothers Collapse + Commodity Price Crash",
      detail: "The Lehman bankruptcy accelerated the global financial crisis and sent iron ore and copper prices down 30–50% within weeks. BHP's entire bid was premised on a sustained resource super-cycle — that thesis disintegrated. Two months later BHP withdrew. Had the merger closed before the crisis, both companies would have faced a brutal combination of Alcan debt and crashed commodity revenues.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Rio Tinto Board of Directors",
      margin: "BHP voluntary withdrawal driven by global financial crisis",
      note: "Rio Tinto successfully defended its independence, but the Alcan debt burden pushed it close to surrendering in 2009 when it nearly agreed to a $19.5B Chinalco follow-on investment — a deal that Rio's own shareholders killed. It was a 'victory with consequences.' The true savior was the global financial crisis, not Rio's defensive playbook.",
    },
    priceImpact: {
      preContest: "AUD 125 (before BHP proposal, November 2007)",
      peak: "AUD 160 (early 2008 peak)",
      postContest: "AUD 50 (end-2008 post-crisis low)",
      note: "Rio Tinto defended its independence, but the financial crisis drove its share price down 68% from the peak. Whether defense preserved shareholder value versus accepting BHP's offer is genuinely debatable in retrospect.",
    },
  },

  dealStructure: {
    body: "BHP Billiton proposed an all-stock merger structured as a dual-listed company (DLC) exchange — 3.4 BHP shares for every 1 Rio Tinto share. No cash was involved, minimizing BHP's financing burden while utilizing its peak-cycle elevated share price. Had the deal closed, the combined entity would have required EU and Australian antitrust approval, with near-certain requirements to divest significant assets. Rio Tinto's board rejection, the Chinalco white knight stake, regulatory headwinds, and ultimately the global financial crisis prevented the transaction from closing.",
    preOwnership: {
      nodes: [
        { id: "bhp_pre",   label: "BHP Billiton",   sub: "ASX / LSE listed — world's largest miner", type: "acquirer" },
        { id: "rio_pre",   label: "Rio Tinto plc",  sub: "LSE / ASX dual-listed — iron ore, copper, aluminum", type: "target" },
        { id: "chinalco",  label: "Chinalco",        sub: "Chinese SOE — white knight, 9% stake purchase", type: "fund" },
        { id: "pub_rio",   label: "Public Shareholders", sub: "Remaining Rio Tinto free float", type: "public" },
      ],
      edges: [
        { from: "bhp_pre",  to: "rio_pre", label: "Hostile bid (3.4:1 stock swap)" },
        { from: "chinalco", to: "rio_pre", label: "9% acquired (defense)" },
        { from: "pub_rio",  to: "rio_pre", label: "Public shareholders" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bhp_post",  label: "BHP Billiton",  sub: "Withdrew bid — November 2008", type: "acquirer" },
        { id: "rio_post",  label: "Rio Tinto plc", sub: "Remains independent — Chinalco holds 9%", type: "target" },
        { id: "chinalco2", label: "Chinalco",       sub: "Retains 9% Rio Tinto stake", type: "fund" },
      ],
      edges: [
        { from: "chinalco2", to: "rio_post", label: "9% stake (friendly investor)" },
        { from: "bhp_post",  to: "rio_post", label: "Withdrawn — independence preserved" },
      ],
    },
    keyTerms: [
      { label: "Proposed Deal Value", value: "~USD 148B (all-stock)", accent: true },
      { label: "Exchange Ratio", value: "3.4 BHP shares : 1 Rio Tinto share", accent: true },
      { label: "Transaction Structure", value: "All-stock hostile tender offer (no cash)", accent: false },
      { label: "Chinalco White Knight Investment", value: "USD 14B (9% stake)", accent: false },
      { label: "Antitrust Review", value: "EU, Australia, China — ongoing (uncompleted)", accent: false },
      { label: "Outcome", value: "BHP voluntarily withdraws — November 25, 2008", accent: true },
      { label: "EV/EBITDA (at proposal)", value: "~13x EBITDA", accent: false },
      { label: "Reason for Withdrawal", value: "Global financial crisis + commodity price crash", accent: false },
    ],
  },

  advisors: {
    body: "The largest hostile mining bid in history mobilized top-tier investment banks and law firms on both sides. The all-stock structure and simultaneous EU, Australian, and Chinese antitrust filings required extensive cross-border advisory teams.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BHP Billiton (Bidder)",
        initials: "BHP",
        bg: "bg-orange-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor", roleType: "financial", note: "Merger structure design, exchange ratio analysis, shareholder outreach strategy" },
          { firm: "Citigroup", role: "Financial Advisor", roleType: "financial", note: "Capital markets strategy and institutional investor communications" },
          { firm: "Linklaters", role: "Legal Advisor", roleType: "legal", note: "UK/Australian legal counsel; antitrust filings and regulatory strategy" },
        ],
      },
      {
        side: "target",
        sideLabel: "Rio Tinto (Defender)",
        initials: "RIO",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Merrill Lynch", role: "Financial Advisor", roleType: "financial", note: "Defense strategy, independent fairness opinion, Chinalco white knight facilitation" },
          { firm: "Credit Suisse", role: "Financial Advisor", roleType: "financial", note: "Alternative strategy review and shareholder communications" },
          { firm: "Freshfields Bruckhaus Deringer", role: "Legal Advisor", roleType: "legal", note: "UK takeover defense counsel; antitrust proceedings" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting and industry sources. Specific engagement terms are not publicly disclosed.",
  },

  valuation: {
    body: "Because the bid was structured as an all-stock exchange, the implied deal value fluctuated directly with BHP's share price. At the November 2007 announcement, the 3.4:1 ratio valued Rio Tinto at roughly 13x its forward EBITDA — a significant premium in absolute terms but one Rio argued was wholly inadequate given the long-run iron ore price trajectory and the scarcity value of Pilbara assets. Rio maintained that a fair valuation required 16–18x EBITDA once Alcan's aluminum synergies and the structural commodity uplift were properly modeled.",
    rows: [
      { item: "Implied EV (November 2007 announcement)", val: "~USD 147–148B", note: "3.4 BHP shares : 1 Rio share at prevailing prices", accent: true },
      { item: "EV / EBITDA (at proposal)", val: "~13x", note: "Based on Rio FY2007 estimated EBITDA", accent: true },
      { item: "Rio Tinto Market Cap (pre-bid)", val: ">USD 100B", note: "October 2007" },
      { item: "Chinalco White Knight Investment", val: "USD 14B (9%)", note: "January 2008 stake purchase" },
      { item: "Alcan Acquisition Debt", val: "USD 38B", note: "Source of Rio's financial vulnerability" },
      { item: "Rio Tinto Share Price vs Peak", val: "-68%", note: "End-2008 vs early-2008 peak — crisis impact", accent: true },
    ],
    disclaimer: "Valuation figures based on public reports and industry estimates. Actual internal assessments were not publicly disclosed.",
  },

  rationale: {
    buyer: {
      title: "Why BHP Targeted Rio Tinto",
      initials: "BHP",
      bg: "bg-orange-700",
      points: [
        "Resource super-cycle conviction — CEO Kloppers believed China's infrastructure build would sustain elevated commodity prices for decades; maximum scale was essential to capture the opportunity.",
        "Economies of scale — a combined entity would generate billions in annual synergies across mining, logistics, and sales, dramatically lowering unit costs.",
        "Iron ore pricing power — a merged BHP-Rio would control 35–40% of seaborne iron ore, giving it decisive leverage over Chinese steel mills in annual pricing negotiations.",
        "Exploiting Rio's Alcan-debt weakness — Rio's $38B Alcan debt created financial pressure and a window of vulnerability that BHP moved to exploit.",
        "Creating the world's undisputed mining #1 — the combined entity would have been the largest mining company in history by every measure.",
      ],
    },
    seller: {
      title: "Why Rio Tinto Rejected and How It Defended",
      initials: "RIO",
      bg: "bg-blue-700",
      points: [
        "Undervaluation argument — Rio's board argued the 13x EBITDA offer failed to reflect the long-run iron ore price, Pilbara asset scarcity, and Alcan synergy potential.",
        "Independent growth strategy — Rio contended the Alcan acquisition positioned it for superior standalone returns across iron ore, copper, and aluminum.",
        "Chinalco white knight — the most powerful defensive move: a Chinese state-owned entity purchasing 9% of Rio, blocking BHP's share accumulation and aligning Beijing's strategic interests with Rio's independence.",
        "Regulatory attrition — EU, Australian, and Chinese antitrust reviews were leveraged as time-consuming defensive barriers that increased deal uncertainty.",
        "Unanimous board rejection — the board's consistent 'no' signaled to shareholders that any BHP offer at these levels was not worth accepting.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "After BHP withdrew, Rio Tinto faced the consequences of its Alcan debt. In early 2009 Rio announced a $19.5B deal granting Chinalco convertible notes and direct stakes in key assets — a near-capitulation that its own shareholders blocked in a rare shareholder revolt, forcing Rio to instead raise capital through a deeply discounted rights issue. BHP returned to its standalone strategy, attempting the $39B PotashCorp acquisition in 2010 (withdrawn after Canadian government blocked it), investing heavily and lossily in US shale, before restructuring its portfolio through the 2010s commodity downturn.",
    overallVerdict: "Defense succeeded — but the global financial crisis, not Rio's strategy, was the decisive force",
    positives: [
      "Rio Tinto preserved independence — board rejection and Chinalco white knight successfully repelled the hostile bid.",
      "Antitrust strategy bought time — prolonged regulatory proceedings added pressure on BHP's deal timeline.",
      "Commodity price rebound — iron ore prices recovered in 2010–2011, vindicating Rio's standalone value argument.",
      "Chinalco short-term value — the 9% white-knight stake served its defensive purpose, though it created longer-term strategic tensions.",
    ],
    risks: [
      "Alcan debt aftermath — the 2009 near-capitulation to Chinalco's $19.5B deal underscored how close Rio came to trading one form of control loss for another.",
      "Chinese capital dependency — Chinalco's 9% stake raised Western shareholder concerns about Rio's strategic independence.",
      "Commodity cycle risk — post-2011 China slowdown eroded iron ore prices, testing Rio's standalone thesis.",
      "BHP standalone scale — BHP continued growing independently, maintaining the size gap that justified its original bid logic.",
    ],
    editorNote: "This deal teaches one of the clearest lessons in resource M&A: macro cycle timing is destiny. The largest hostile mining bid in history was mounted at the peak of a commodity super-cycle, and the cycle's collapse erased the bid's logic within a year. Rio's defenses were competent, but the global financial crisis was the actual decisive force. BHP's ambition was genuine — proposing a $148B all-stock deal with no financing risk was genuinely bold — but it was bold at exactly the wrong moment.",
  },

  tombstone: {
    acquirerInitials: "BHP",
    acquirerBg: "bg-orange-700",
    targetInitials: "RIO",
    targetBg: "bg-blue-700",
    acquirerName: "BHP Billiton Limited / plc",
    targetName: "Rio Tinto plc / Limited",
    dealTitle: "Largest-Ever Mining Hostile Bid / 역대 최대 광업 적대적 M&A 시도",
    dealSize: "USD 148B (proposed value)",
    dealSizeUSD: "USD 148B proposed (all-stock)",
    evEbitda: "~13x EBITDA (at proposal)",
    closeDate: "Nov 2008 (Withdrawn)",
  },

  sources: [
    { id: 1, text: "BHP Billiton Press Release — Proposal to merge with Rio Tinto (November 8, 2007)" },
    { id: 2, text: "Rio Tinto Press Release — Board rejection of BHP Billiton proposal (December 2007)" },
    { id: 3, text: "Financial Times — BHP Billiton walks away from Rio Tinto bid (November 25, 2008)" },
    { id: 4, text: "Wall Street Journal — Chinalco's $14B stake in Rio Tinto (February 2008)" },
    { id: 5, text: "Bloomberg — BHP Billiton vs Rio Tinto: Timeline of the $148B bid (2007–2008)" },
    { id: 6, text: "Rio Tinto Annual Report 2007, 2008" },
    { id: 7, text: "The Economist — The battle for Rio Tinto (2008)" },
  ],

  seo: {
    title: "BHP vs Rio Tinto Hostile Takeover Analysis — $148B Mining Bid Fully Dissected",
    description: "Complete analysis of BHP Billiton's $148B all-stock hostile bid for Rio Tinto (2007–2008). Chinalco white knight, antitrust defense, global financial crisis withdrawal — the largest mining hostile takeover attempt in history.",
    keywords: [
      "BHP Rio Tinto hostile takeover",
      "BHP Billiton Rio Tinto bid",
      "mining M&A hostile bid",
      "Chinalco white knight",
      "resource super cycle M&A",
      "hostile takeover defense",
      "iron ore M&A",
      "2008 financial crisis M&A",
    ],
  },

  concepts: [
    {
      term: "Hostile Tender Offer",
      description: "A bid made directly to a company's shareholders — bypassing the board — to acquire shares at a premium. BHP pursued this route after Rio Tinto's board rejected private overtures.",
    },
    {
      term: "White Knight",
      description: "A friendly third-party investor recruited by a target company to block a hostile bidder. Chinalco's purchase of 9% of Rio Tinto served this role, acting as both a financial and geopolitical barrier to BHP.",
    },
    {
      term: "Resource Super Cycle",
      description: "An extended period of elevated commodity prices driven by large-scale industrialization — most notably China's infrastructure boom in the 2000s. It was the intellectual foundation of BHP's bid and collapsed when the 2008 financial crisis hit, taking the bid's rationale with it.",
    },
  ],

  faq: [
    {
      q: "Why did BHP use only stock — no cash — in such a massive bid?",
      a: "BHP structured the deal as a pure stock-for-stock exchange to avoid the enormous financing burden of a $148B cash deal. At commodity cycle peaks, BHP's own shares were at elevated valuations, making the 3.4:1 exchange ratio financially attractive to Rio shareholders — on paper. The strategy also framed the merger as a 'partnership' rather than an acquisition, theoretically reducing board and shareholder resistance. The fatal flaw: when the financial crisis crashed BHP's share price too, the implied deal value collapsed and the exchange ratio lost its appeal.",
    },
    {
      q: "Why did China's Chinalco invest $14B in Rio Tinto?",
      a: "Chinalco's investment served dual purposes. Strategically, Beijing was deeply concerned that a BHP-Rio merger would create an iron ore duopoly with Vale that could dictate prices to Chinese steel mills. Chinese steelmakers imported most of their iron ore from Australia; a combined BHP-Rio holding 35–40% of global supply represented an unacceptable supply chain concentration. Financially, Chinalco also saw Rio's high-quality assets as an attractive long-term investment at a time of elevated commodity prices.",
    },
    {
      q: "What would have happened if the merger had closed?",
      a: "The timing would have been catastrophic. Regulatory approvals in the EU and Australia would likely have required asset divestitures and taken well into 2008 or 2009 to complete. By then, the global financial crisis had crashed iron ore and copper prices 30–50%. The merged entity would have been saddled with Rio's $38B Alcan debt, forced to write down assets across the board, and potentially unable to service its combined debt obligations. The deal, had it closed, might have become one of history's most ill-timed corporate mergers.",
    },
    {
      q: "What happened to BHP and Rio Tinto after the bid failed?",
      a: "BHP returned to standalone growth but failed in its next major M&A attempt — a $39B hostile bid for Canada's PotashCorp in 2010, blocked by the Canadian government. It later made large losses on US shale investments before divesting. Rio Tinto's post-bid trajectory was also troubled: in 2009 it nearly completed a $19.5B strategic investment deal with Chinalco (in iron ore assets and convertible notes) before shareholder revolt forced it to cancel and instead raise capital through a heavily discounted rights issue. Both companies spent the 2010s restructuring as commodity prices fell after China's growth slowed.",
    },
  ],
};

export default deal;
