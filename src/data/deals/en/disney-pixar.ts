/**
 * Disney × Pixar Acquisition
 * Buying creativity for $7.4B — closed May 2006
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "disney-pixar",
  title: "Why Disney Paid $7.4B for Pixar — Can You Buy Creativity?",
  subtitle: "Steve Jobs becomes Disney's largest individual shareholder · PMI textbook success · Bob Iger's first big bet",
  category: "ma",
  industry: "Entertainment / Animation",
  country: "USA",
  announcedAt: "2006-01-24",
  closedAt: "2006-05-05",
  announcedDisplay: "January 2006",
  closedDisplay: "May 2006",
  readingMinutes: 11,
  tags: ["Disney", "Pixar", "Steve Jobs", "Bob Iger", "animation", "M&A", "creative acquisition", "PMI", "entertainment"],
  excerpt: "Disney's $7.4B acquisition of Pixar in 2006 is the textbook example of a creative acquisition done right. It was Bob Iger's first major deal as CEO, made Steve Jobs Disney's largest individual shareholder (~7%), and was followed by Ratatouille, WALL-E, Up, and Toy Story 3 — a run of hits unprecedented in animation history.",

  acquirer: { initials: "DIS", bg: "bg-blue-600", label: "Walt Disney" },
  target: { initials: "PIXAR", bg: "bg-orange-500", label: "Pixar Animation" },

  background: [
    "In the early 2000s, Disney Animation was in crisis. Treasure Planet (2002), Brother Bear (2003), and Home on the Range (2004) all failed at the box office. Pixar, meanwhile, was on a perfect streak: Toy Story (1995), A Bug's Life (1998), Monsters, Inc. (2001), Finding Nemo (2003), The Incredibles (2004) — six for six at the box office. Disney distributed Pixar's films but the creative work was entirely Pixar's.",
    "The Pixar-Disney distribution agreement was set to expire in 2006. Steve Jobs (Pixar's CEO and largest shareholder) had a famously difficult relationship with Disney CEO Michael Eisner. When Eisner resigned in 2005 and Bob Iger took over, the dynamic shifted immediately. Iger called Jobs within weeks of taking office to begin repairing the relationship.",
    "On January 24, 2006, Disney announced it would acquire Pixar in an all-stock deal worth $7.4B. Pixar shareholders would receive 2.3 Disney shares per Pixar share. Because Steve Jobs owned 50.1% of Pixar, completing the deal made him Disney's largest individual shareholder at approximately 7%. Jobs joined Disney's board of directors.",
    "Pixar's creative leaders — John Lasseter and Ed Catmull — became chief creative officers of both Pixar and Disney Animation. Iger promised to preserve Pixar's culture and operate the two studios separately. The deal closed May 5, 2006. The films that followed — Ratatouille (2007), WALL-E (2008), Up (2009), Toy Story 3 (2010) — swept both box offices and Academy Awards.",
  ],

  dealSummary: {
    dealValueDisplay: "$7.4B (all-stock)",
    acquirerName: "The Walt Disney Company",
    targetName: "Pixar Animation Studios",
    announcedDisplay: "January 2006",
    closedDisplay: "May 2006",
    country: "USA",
  },

  executiveSummary: [
    "All-stock $7.4B — Pixar shareholders received 2.3 Disney shares per share; Steve Jobs became Disney's ~7% largest individual shareholder",
    "Bob Iger's first major bet — a controversial 'buying creativity' move taken just weeks into his tenure",
    "PMI textbook success — Pixar independence preserved, Lasseter and Catmull lead both studios",
    "Post-deal: Ratatouille, WALL-E, Up, Toy Story 3 — four consecutive critical and box office successes",
    "Disney Animation Renaissance 2.0 — Pixar DNA transformed Disney's own studio (Frozen, Tangled, Moana)",
    "Proved that creative acquisitions can work — if you don't destroy what you bought",
  ],

  industryOverview: {
    body: "By 2006, animated film was rapidly transitioning to digital 3D. Pixar had started the CGI revolution with Toy Story in 1995, and DreamWorks Animation (Shrek), Sony Pictures Animation were following. Traditional 2D animation was in rapid decline — Disney's own 2D studio had effectively closed in 2004. The CGI animation market was competitive on technology but Pixar maintained a dominant position in storytelling quality.",
    metrics: [
      { label: "Pixar cumulative box office", value: "$3.2B+", sub: "Six films, pre-acquisition" },
      { label: "Pixar box office success rate", value: "6/6 (100%)", sub: "Toy Story through The Incredibles" },
      { label: "Global animation market", value: "~$150B", sub: "2006 (TV + film + licensing)" },
      { label: "Disney Animation recent results", value: "Struggling", sub: "Three consecutive box office failures 2002–2004" },
    ],
    subBody: "CGI animation was not just a technology competition — it was a storytelling competition. Pixar had both. Disney had global distribution and IP licensing infrastructure. The two companies each had exactly what the other lacked.",
    players: [
      { name: "DreamWorks Animation", role: "Shrek franchise, #2 CGI studio, Pixar's direct rival" },
      { name: "Sony Pictures Animation", role: "Just launched in 2006 with Open Season" },
      { name: "Warner Bros.", role: "Animation distribution competitor" },
      { name: "Steve Jobs", role: "Pixar CEO + 50.1% shareholder, key deal figure" },
    ],
  },

  companyOverview: {
    targetName: "Pixar Animation Studios",
    body: "Pixar was founded in 1986 when Steve Jobs acquired the computer division of Lucasfilm for $5M. After pioneering CGI with Toy Story in 1995, Pixar went six for six at the box office. It was NASDAQ-listed (PIXR) with Steve Jobs holding 50.1%. Despite having only ~900 employees, it was considered the world's most innovative animation studio.",
    metrics: [
      { label: "Founded", value: "1986", sub: "Jobs acquired Lucasfilm computer division for $5M" },
      { label: "NASDAQ ticker", value: "PIXR", sub: "Delisted post-acquisition" },
      { label: "Employees", value: "~900", sub: "2006" },
      { label: "Recent hits", value: "Nemo (2003), Incredibles (2004)", sub: "Consecutive box office records" },
    ],
    financials: [
      { year: "FY2003", revenue: 310, cogs: 120, grossProfit: 190, sga: 80, operatingIncome: 98, ebitda: 115 },
      { year: "FY2004", revenue: 273, cogs: 110, grossProfit: 163, sga: 75, operatingIncome: 70, ebitda: 88 },
      { year: "FY2005", revenue: 290, cogs: 118, grossProfit: 172, sga: 78, operatingIncome: 78, ebitda: 95 },
    ],
    financialsNote: "Unit: USD million. Based on Pixar public filings and estimates.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Film box office revenue share", pct: 70, color: "bg-orange-500", amt: "~$200M" },
      { name: "DVD / Licensing", pct: 30, color: "bg-orange-300", amt: "~$87M" },
    ],
  },

  dealStructure: {
    body: "Disney acquired Pixar in an all-stock transaction. Pixar shareholders received 2.3 Disney shares per Pixar share. Steve Jobs (50.1% of Pixar) became Disney's largest individual shareholder at ~7% and joined the Disney board. John Lasseter and Ed Catmull were appointed creative chiefs of both studios. Pixar continued to operate independently from its Emeryville campus.",
    preOwnership: {
      nodes: [
        { id: "pixar_public", label: "Pixar Animation", sub: "NASDAQ: PIXR", type: "public" },
        { id: "disney_public", label: "Walt Disney", sub: "NYSE: DIS", type: "acquirer" },
      ],
      edges: [
        { from: "pixar_public", to: "disney_public", label: "Distribution partner → Acquirer" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "disney_parent", label: "Walt Disney", sub: "NYSE: DIS", type: "acquirer" },
        { id: "pixar_sub", label: "Pixar Animation", sub: "Wholly-owned Disney subsidiary", type: "target" },
      ],
      edges: [
        { from: "disney_parent", to: "pixar_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "Deal Value", value: "$7.4B (all-stock)", accent: true },
      { label: "Exchange Ratio", value: "2.3 Disney shares per Pixar share", accent: false },
      { label: "Steve Jobs' Disney stake", value: "~7% (largest individual shareholder)", accent: true },
      { label: "Deal Structure", value: "All-stock merger", accent: false },
      { label: "Close Date", value: "May 5, 2006", accent: false },
    ],
  },

  advisors: {
    body: "Both sides engaged top investment banks and law firms.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (Disney)",
        initials: "DIS",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Deal structure and fairness opinion" },
          { firm: "Dewey Ballantine", role: "Legal Counsel", roleType: "legal", note: "M&A contract" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Pixar)",
        initials: "PIXAR",
        bg: "bg-orange-500",
        advisors: [
          { firm: "Allen & Company", role: "Financial Advisor (FA)", roleType: "financial", note: "Steve Jobs' advisor" },
          { firm: "Skadden Arps", role: "Legal Counsel", roleType: "legal", note: "Shareholder and contract advisory" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public reporting.",
  },

  valuation: {
    body: "Disney paid roughly 25–27× EV/Revenue and ~78× EV/EBITDA — two to three times the entertainment sector average. The premium was justified by Pixar's 100% hit rate and the strategic value of bringing the world's best animation studio in-house.",
    rows: [
      { item: "Deal EV", val: "$7.4B", note: "All-stock (2.3 Disney shares per Pixar share)", accent: true },
      { item: "FY2005 Revenue", val: "~$290M", note: "Primarily film revenue sharing" },
      { item: "EV / Revenue", val: "~25×", note: "Content IP premium", accent: true },
      { item: "EV / EBITDA", val: "~78×", note: "Future creative pipeline bet" },
      { item: "Pixar hit rate", val: "100% (6/6)", note: "All pre-acquisition releases were hits" },
    ],
    disclaimer: "Valuation figures from public filings and industry analysis.",
  },

  rationale: {
    buyer: {
      title: "Disney's Acquisition Rationale",
      initials: "DIS",
      bg: "bg-blue-600",
      points: [
        "Restore animation capability — escape 2D studio decline, acquire world's best CGI team",
        "Internalize IP pipeline — connect Pixar characters to Disney theme parks, merchandise, licensing",
        "Resolve expiring distribution contract — secure Pixar before 2006 agreement expires",
        "Iger's creative renaissance strategy — first major deal defining his tenure's direction",
        "Normalize relationship with Steve Jobs — opens door to Apple collaboration",
      ],
    },
    seller: {
      title: "Pixar's (Jobs') Rationale for Selling",
      initials: "PIXAR",
      bg: "bg-orange-500",
      points: [
        "Distribution dependency — global distribution requires major studio partnership",
        "All-stock structure — Disney shares give exposure to park/licensing IP value upside",
        "Pixar culture preservation promise — Lasseter and Catmull leadership retained",
        "Jobs' portfolio optimization — shifting focus entirely to Apple pre-iPhone launch",
        "Trust in Bob Iger — post-Eisner relationship reset with the new CEO",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-acquisition, John Lasseter became chief creative officer of both Pixar and Disney Animation. Pixar operated independently from its Emeryville campus. Ratatouille (2007), WALL-E (2008), Up (2009), and Toy Story 3 (2010) all swept Academy Awards and box offices. Disney Animation also absorbed Pixar DNA, producing Tangled, Frozen, and Moana. The run ended when Lasseter departed in 2017 following misconduct allegations, but the 10 years post-acquisition represent the greatest creative run in animation history.",
    overallVerdict: "Best example of a successful creative acquisition in history",
    positives: [
      "Ratatouille, WALL-E, Up, Toy Story 3 — four consecutive Academy Award and box office sweeps post-acquisition",
      "Pixar culture preserved — Lasseter/Catmull leadership, independent Emeryville operations",
      "Disney Animation revival — Frozen, Tangled, Moana benefited from Pixar DNA transfer",
      "IP synergy explosion — Cars, Toy Story, Monsters Inc. theme park and merchandise revenues",
      "Jobs relationship normalized → Apple-Disney collaboration on iTunes/iPod integration",
    ],
    risks: [
      "John Lasseter's 2017 misconduct departure — key creative force lost",
      "Sequel dependency increased (Toy Story 4, Cars 3, Incredibles 2) — original IP development slowed",
      "Streaming pressure — Disney+ era saw Pixar theatrical releases reduced",
      "Soul, Luca, Turning Red bypassed theaters for Disney+ in pandemic era",
    ],
    editorNote: "Disney's Pixar acquisition answered the question 'Can you buy creativity?' with: Yes — if you don't destroy what you bought. Bob Iger's PMI strategy of preserving Pixar's independence while connecting it to Disney's infrastructure became the blueprint for all subsequent Disney acquisitions: Marvel (2009, $4B), Lucasfilm (2012, $4.05B). Pixar was the proof of concept. The lesson isn't that paying 78× EBITDA is smart — it's that the right creative asset, protected and connected, generates value that no multiple can capture.",
  },

  tombstone: {
    acquirerInitials: "DIS",
    acquirerBg: "bg-blue-600",
    targetInitials: "PIX",
    targetBg: "bg-orange-500",
    acquirerName: "The Walt Disney Company",
    targetName: "Pixar Animation Studios",
    dealTitle: "All-Stock Merger",
    dealSize: "$7.4B",
    dealSizeUSD: "USD 7.4 Billion",
    evEbitda: "~78×",
    closeDate: "May 2006",
  },

  sources: [
    { id: 1, text: "Disney Press Release — The Walt Disney Company to Acquire Pixar (January 2006)", url: "https://investor.disney.com" },
    { id: 2, text: "SEC Form S-4 — Disney / Pixar Merger Proxy (2006)", url: "https://www.sec.gov" },
    { id: 3, text: "Bob Iger — The Ride of a Lifetime (2019)" },
    { id: 4, text: "Fortune — How Bob Iger Saved Disney (2006)" },
    { id: 5, text: "New York Times — Disney Agrees to Acquire Pixar in a $7.4 Billion Deal (January 2006)" },
    { id: 6, text: "The Hollywood Reporter — How John Lasseter Revived Disney Animation Post-Pixar Merger" },
    { id: 7, text: "Bloomberg — Steve Jobs Becomes Disney's Largest Individual Shareholder (May 2006)" },
    { id: 8, text: "Box Office Mojo — Pixar Animation Studios: Complete Filmography Results" },
  ],

  seo: {
    title: "Disney Pixar Acquisition Analysis — The $7.4B Creative Acquisition That Changed Animation",
    description: "Complete analysis of Disney's $7.4B acquisition of Pixar. Bob Iger's strategy, Steve Jobs as Disney shareholder, PMI success, and the greatest run of animated films in history.",
    keywords: ["Disney Pixar acquisition", "Pixar M&A analysis", "Bob Iger Pixar deal", "Steve Jobs Disney", "creative acquisition strategy", "PMI success case study", "animation M&A"],
  },

  concepts: [
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Paying a massive premium for creative capability and IP pipeline rather than current earnings" },
    { term: "PMI (Post-Merger Integration)", href: "/deal-101/pmi", description: "Preserving Pixar's creative culture while connecting it to Disney resources — the PMI textbook case" },
    { term: "Platform Strategy", href: "/deal-101/platform-strategy", description: "Extending Pixar IP into Disney's theme park, merchandise, and licensing platform" },
    { term: "Competitive Moat", href: "/deal-101/competitive-moat", description: "Pixar's storytelling culture and technical edge — a creative moat competitors couldn't replicate" },
  ],

  faq: [
    {
      q: "Why did Disney acquire Pixar instead of building its own CGI studio?",
      a: "Disney had tried. Treasure Planet, Brother Bear, and Home on the Range were all CGI failures. The gap with Pixar wasn't technology — it was storytelling culture and talent, built over a decade. These can't be replicated quickly from scratch. Bob Iger concluded that acquiring Pixar was faster and more certain than trying to catch up organically.",
    },
    {
      q: "Why did Steve Jobs sell Pixar?",
      a: "Multiple factors converged. First, the expiring distribution contract — Pixar needed major studio distribution. Second, trust in Bob Iger — after Eisner's difficult relationship, Iger opened a fresh start. Third, all-stock deal — Jobs received Disney shares, giving him exposure to Pixar IP value in theme parks and licensing. Fourth, the iPhone was coming — 2006 was when Jobs needed to be entirely focused on Apple.",
    },
    {
      q: "Was Pixar's creative culture preserved after the acquisition?",
      a: "Largely yes — and this is the key lesson. Iger's core commitment was to operate Pixar independently with Lasseter and Catmull in charge. The Emeryville campus was preserved. Pixar's 'Braintrust' collective feedback system remained intact. The culture actually spread to Disney Animation, not the reverse. Lasseter's 2017 departure raised questions about the pipeline, but the 10-year post-acquisition run was the greatest in animation history.",
    },
    {
      q: "How did this deal lead to the Marvel and Lucasfilm acquisitions?",
      a: "Pixar's success gave Iger confidence in his 'IP empire' formula: acquire premium creative IP, preserve its culture, and connect it to Disney's distribution, parks, and licensing infrastructure. Marvel (2009, $4B) and Lucasfilm (2012, $4.05B) used exactly the same playbook. Pixar was the prototype and proof that the model worked.",
    },
    {
      q: "Was $7.4B too expensive?",
      a: "It looked expensive at 78× EBITDA in 2006. In retrospect, it was one of the cheapest deals in history. Pixar IP value in Disney theme parks (Cars Land, Toy Story Land, Monsters Inc. attractions), merchandise, sequels, and streaming makes the $7.4B look trivial. Creative IP compounds in ways that financial models can't capture at acquisition time.",
    },
  ],
};

export default deal;
