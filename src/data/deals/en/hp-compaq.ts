/**
 * HP × Compaq Merger
 * Carly Fiorina's controversial bet — $25B, closed May 2002
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "hp-compaq",
  title: "Why HP Paid $25B for Compaq — Carly Fiorina's Bet and the Proxy War",
  subtitle: "Board proxy war · PC market #1 achieved · Fiorina's ambition and dismissal · Enterprise strategy reality",
  category: "ma",
  industry: "PC / Servers / IT Technology",
  country: "USA",
  announcedAt: "2001-09-03",
  closedAt: "2002-05-03",
  announcedDisplay: "September 2001",
  closedDisplay: "May 2002",
  readingMinutes: 11,
  tags: ["HP", "Compaq", "Carly Fiorina", "Walter Hewlett", "PC", "server", "proxy war", "merger", "IT consolidation"],
  excerpt: "HP's $25B acquisition of Compaq was CEO Carly Fiorina's bold bet on becoming a full-service IT company. She won the proxy war against founder-family director Walter Hewlett with a razor-thin 51.4% shareholder vote — then was fired by the board three years later. PC market #1 was achieved, but printer and enterprise synergies fell short.",

  acquirer: { initials: "HPQ", bg: "bg-blue-700", label: "HP (Hewlett-Packard)" },
  target: { initials: "CPQ", bg: "bg-red-600", label: "Compaq" },

  background: [
    "By 2001, Carly Fiorina — in her second year as HP CEO — determined that HP's printer and PC-centric portfolio needed enterprise server and services capabilities to compete with IBM, Sun Microsystems, and Dell. Compaq had acquired Digital Equipment Corporation (DEC) in 1998, gaining Alpha server and storage assets, and was also HP's most direct PC market competitor.",
    "When the merger was announced on September 3, 2001, HP stock fell sharply. Walter Hewlett — son of co-founder William Hewlett and an HP board member — strongly opposed the deal. He argued that the PC market was a low-margin commodity and Compaq would dilute HP's strengths in printers and instruments. One of the most intense proxy wars in corporate history ensued.",
    "In March 2002, shareholders voted approximately 51.4% in favor — barely enough to approve. Controversy surrounded the result: HP was accused of improperly pressuring Deutsche Bank to switch its 17 million HP shares from opposition to approval. The deal closed May 3, 2002. The combined HP-Compaq became the world's largest PC maker by shipments.",
    "Post-merger, HP achieved PC market #1 status briefly and hit the $2.5B cost synergy target. But Compaq's Alpha servers were eventually discontinued, and enterprise synergies fell short. The board dismissed Fiorina in 2005. In 2015, HP split into HP Inc. (PC and printers) and Hewlett Packard Enterprise — a structural admission that Fiorina's integrated IT strategy had not worked.",
  ],

  dealSummary: {
    dealValueDisplay: "$25B (all-stock)",
    acquirerName: "Hewlett-Packard Company",
    targetName: "Compaq Computer Corporation",
    announcedDisplay: "September 2001",
    closedDisplay: "May 2002",
    country: "USA",
  },

  executiveSummary: [
    "All-stock $25B — 0.6325 HP shares per Compaq share; one of the largest IT mergers at the time",
    "Founder-family vs. CEO proxy war — Walter Hewlett's opposition, barely passed at 51.4%",
    "PC market world #1 achieved — combined shipments overtook Dell (briefly)",
    "Carly Fiorina dismissed 2005 — board disagreement on strategic direction and results",
    "Compaq Alpha server discontinued — core enterprise synergy asset abandoned",
    "HP's strategic turning point — led to the 2015 HP split into HP Inc. and HPE",
  ],

  industryOverview: {
    body: "In 2001, the PC industry was maturing with intensifying price competition. Dell's direct-sales model was disrupting the market, and IBM was transitioning from PC to services and software. The server and storage market continued growing post-internet bubble, but HP was behind IBM and Sun in enterprise servers without Compaq's assets.",
    metrics: [
      { label: "Post-merger PC market share", value: "~19%", sub: "World #1 (briefly), competing with Dell" },
      { label: "Combined revenue", value: "~$87B", sub: "2002, #2 IT company after IBM" },
      { label: "HP printer market share", value: "~45%", sub: "HP's core strength pre-merger" },
      { label: "Post-merger headcount reduction", value: "~15,000", sub: "Cost-reduction restructuring" },
    ],
    subBody: "The central IT industry question at the time: is scale a competitive advantage, or is focus? Fiorina chose scale. IBM chose focus — selling its PC business to Lenovo and moving entirely to services and software. History judged IBM's choice more favorably.",
    players: [
      { name: "Dell", role: "Direct-sales model threatening PC margins; HP's main rival" },
      { name: "IBM", role: "#1 enterprise servers and services; Fiorina's target position" },
      { name: "Sun Microsystems", role: "Workstation and server competitor" },
      { name: "Walter Hewlett", role: "Founder-family board director; proxy war against the merger" },
    ],
  },

  companyOverview: {
    targetName: "Compaq Computer Corporation",
    body: "Founded in 1982, Compaq was a pioneer in IBM-compatible PCs. Its 1998 acquisition of Digital Equipment Corporation (DEC) for $9.6B added Alpha server and storage assets but proved difficult to integrate. At acquisition, Compaq had approximately $34B in annual revenue and was a key player in PC and server markets.",
    metrics: [
      { label: "Founded", value: "1982", sub: "IBM-compatible PC pioneer" },
      { label: "Pre-merger revenue", value: "~$34B", sub: "FY2001" },
      { label: "Key businesses", value: "PC, servers, storage", sub: "DEC acquisition (1998) added server strength" },
      { label: "NASDAQ ticker", value: "CPQ", sub: "Delisted post-acquisition" },
    ],
    financials: [
      { year: "FY1999", revenue: 38525, cogs: 30200, grossProfit: 8325, sga: 5500, operatingIncome: 924, ebitda: 1800 },
      { year: "FY2000", revenue: 42383, cogs: 33000, grossProfit: 9383, sga: 6200, operatingIncome: 704, ebitda: 1600 },
      { year: "FY2001", revenue: 33554, cogs: 26500, grossProfit: 7054, sga: 5800, operatingIncome: -785, ebitda: 300 },
    ],
    financialsNote: "Unit: USD million. FY2001 impacted by dot-com bust and reduced IT spending. Based on Compaq public filings.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "PC / Workstations", pct: 55, color: "bg-red-600", amt: "~$18.5B" },
      { name: "Enterprise servers / storage", pct: 30, color: "bg-red-400", amt: "~$10B" },
      { name: "Services", pct: 15, color: "bg-red-200", amt: "~$5B" },
    ],
  },

  dealStructure: {
    body: "HP acquired Compaq via all-stock exchange. Compaq shareholders received 0.6325 HP shares per Compaq share. The shareholder vote passed at approximately 51.4% — barely enough, and surrounded by controversy about Deutsche Bank's vote switch.",
    preOwnership: {
      nodes: [
        { id: "compaq_public", label: "Compaq", sub: "NASDAQ: CPQ", type: "public" },
        { id: "hp_public", label: "HP (Hewlett-Packard)", sub: "NYSE: HPQ", type: "acquirer" },
      ],
      edges: [
        { from: "compaq_public", to: "hp_public", label: "PC/server rivals → merger" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hp_parent", label: "HP (Hewlett-Packard)", sub: "NYSE: HPQ", type: "acquirer" },
        { id: "compaq_sub", label: "Compaq Computer", sub: "Fully absorbed into HP brand", type: "target" },
      ],
      edges: [
        { from: "hp_parent", to: "compaq_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "Deal Value", value: "$25B (all-stock)", accent: true },
      { label: "Exchange Ratio", value: "0.6325 HP shares per Compaq share", accent: false },
      { label: "Shareholder Approval", value: "~51.4% (razor-thin)", accent: true },
      { label: "Deal Structure", value: "All-stock merger", accent: false },
      { label: "Close Date", value: "May 3, 2002", accent: false },
    ],
  },

  advisors: {
    body: "Both sides engaged top investment banks and law firms. The proxy war required additional PR and proxy advisory firms.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (HP)",
        initials: "HPQ",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Deal structure and shareholder persuasion" },
          { firm: "Wilson Sonsini", role: "Legal Counsel", roleType: "legal", note: "M&A and securities law" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target (Compaq)",
        initials: "CPQ",
        bg: "bg-red-600",
        advisors: [
          { firm: "Salomon Smith Barney", role: "Financial Advisor (FA)", roleType: "financial", note: "Compaq-side advisory" },
          { firm: "Davis Polk & Wardwell", role: "Legal Counsel", roleType: "legal", note: "M&A contract advisory" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public reporting.",
  },

  valuation: {
    body: "HP paid approximately 15× EV/EBITDA for Compaq, at a time when the dot-com bust had severely impacted Compaq's FY2001 results.",
    rows: [
      { item: "Deal EV", val: "$25B", note: "All-stock merger consideration", accent: true },
      { item: "Compaq FY2000 Revenue", val: "~$42B", note: "Peak pre-bust results" },
      { item: "Compaq FY2001 EBITDA", val: "~$300M", note: "Severely reduced by dot-com bust", accent: true },
      { item: "EV / FY2000 EBITDA", val: "~15×", note: "Based on normalized earnings" },
      { item: "Post-merger headcount cuts", val: "~15,000", note: "To achieve $2.5B synergy target" },
    ],
    disclaimer: "Valuation figures from public filings and industry analysis.",
  },

  rationale: {
    buyer: {
      title: "HP's Acquisition Rationale (Fiorina)",
      initials: "HPQ",
      bg: "bg-blue-700",
      points: [
        "Enterprise portfolio expansion — Compaq Alpha servers and storage to compete with IBM",
        "PC market #1 — combined shipments overtake Dell globally",
        "Cost synergies — $2.5B annual cost reduction target through redundancy elimination",
        "Services capability — Compaq IT services strengthen HP's enterprise services offering",
        "Economies of scale — integrated procurement, manufacturing, and R&D",
      ],
    },
    seller: {
      title: "Compaq's Rationale for Merging",
      initials: "CPQ",
      bg: "bg-red-600",
      points: [
        "DEC integration burden — struggling since 1998 DEC acquisition; HP resources help",
        "Dell's direct-sales threat — PC margin pressure undermines standalone viability",
        "Shareholder value realization — 25% premium via HP stock exchange",
        "Enterprise portfolio leverage — HP's distribution network for server and storage growth",
        "Combined scale — sufficient to compete with IBM and Sun Microsystems",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-merger HP achieved PC market #1 briefly and hit the $2.5B cost savings target. But Compaq's Alpha servers were discontinued by 2007, and the enterprise synergy thesis was not realized. Fiorina was dismissed in 2005. In 2015, HP split into HP Inc. (PC and printers) and Hewlett Packard Enterprise — a structural admission that the integrated IT company strategy had failed.",
    overallVerdict: "Partial success (cost savings achieved) — strategic vision unrealized",
    positives: [
      "PC market #1 achieved briefly — combined shipments globally",
      "$2.5B cost savings target achieved — redundancy restructuring completed",
      "Printer + PC portfolio complemented — Compaq PC line complemented HP printers",
    ],
    risks: [
      "Alpha server discontinued — core enterprise server asset ultimately abandoned",
      "Fiorina dismissed 2005 — board lost confidence in strategic direction",
      "2015 HP split — ultimate admission that the integrated IT strategy failed",
      "Printer division growth stalled — HP's core cash cow slowed post-merger",
      "Dell retook PC market leadership — merger benefit short-lived",
    ],
    editorNote: "The HP-Compaq merger left a complex legacy on the question 'is scale a competitive advantage?' Cost reductions were achieved but the strategic positioning (comprehensive IT company) was not. IBM's contrast is instructive — it sold its PC business to Lenovo and pivoted entirely to services and software. Whether Fiorina's strategy was wrong or simply poorly executed is still debated. The unambiguous verdict came in 2015: the 2002 merger's integrated IT vision was dismantled.",
  },

  tombstone: {
    acquirerInitials: "HPQ",
    acquirerBg: "bg-blue-700",
    targetInitials: "CPQ",
    targetBg: "bg-red-600",
    acquirerName: "Hewlett-Packard Company",
    targetName: "Compaq Computer Corporation",
    dealTitle: "All-Stock Merger",
    dealSize: "$25B",
    dealSizeUSD: "USD 25 Billion",
    evEbitda: "~15×",
    closeDate: "May 2002",
  },

  sources: [
    { id: 1, text: "Hewlett-Packard Press Release — HP and Compaq to Merge (September 2001)", url: "https://investor.hp.com" },
    { id: 2, text: "SEC Form S-4 — HP / Compaq Merger Proxy Statement (2002)", url: "https://www.sec.gov" },
    { id: 3, text: "The Wall Street Journal — Walter Hewlett's Opposition to the Compaq Merger (2002)" },
    { id: 4, text: "Fortune — The Carly Chronicles: HP's Big Bet (2002)" },
    { id: 5, text: "BusinessWeek — HP-Compaq: The Truth About the Merger (2002)" },
    { id: 6, text: "New York Times — Hewlett-Packard Ousts Carly Fiorina as Chief (February 2005)" },
    { id: 7, text: "HP Inc. Press Release — HP Inc. and Hewlett Packard Enterprise Begin Trading (November 2015)" },
    { id: 8, text: "Carly Fiorina — Tough Choices: A Memoir (2006)" },
  ],

  seo: {
    title: "HP Compaq Merger Analysis — The $25B Proxy War and Carly Fiorina's Legacy",
    description: "Complete analysis of HP's $25B acquisition of Compaq. Carly Fiorina's strategy, Walter Hewlett's proxy war, post-merger outcomes, and the road to HP's 2015 split.",
    keywords: ["HP Compaq merger", "Carly Fiorina HP", "Walter Hewlett proxy war", "HP acquisition history", "IT consolidation M&A", "HP split 2015", "Compaq acquisition"],
  },

  concepts: [
    { term: "PMI (Post-Merger Integration)", href: "/deal-101/pmi", description: "Cost synergies achieved but strategic integration incomplete — HP-Compaq's mixed PMI outcome" },
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Scale-based positioning strategy for comprehensive IT company — unrealized enterprise synergy vision" },
    { term: "EV/EBITDA Multiple", href: "/deal-101/ev-ebitda", description: "Valuation multiples at depressed dot-com bust earnings — normalized vs. cyclical analysis" },
    { term: "Vertical Integration", href: "/deal-101/vertical-integration", description: "PC-to-server-to-services IT value chain integration — Fiorina's vision vs. IBM's contrasting choice" },
  ],

  faq: [
    {
      q: "Why did Walter Hewlett oppose the merger so strongly?",
      a: "William Hewlett's son Walter had three core objections: First, the PC market is a low-margin commodity business — Compaq would pull HP deeper into this trap. Second, the merger would dilute HP's core strengths: printers, instruments, and imaging. Third, integration risk — culture clash and execution complexity. He hired independent consultants and launched a campaign that became one of the most intense proxy wars in IT history.",
    },
    {
      q: "What was the Deutsche Bank controversy?",
      a: "Just before the shareholder vote, Deutsche Bank switched its 17 million HP shares from oppose to approve. HP was accused of improperly pressuring Deutsche Bank to change its vote — specifically by suggesting it could affect an HP advisory contract Deutsche Bank was seeking. An investigation followed but no definitive evidence of impropriety was found and the merger stood.",
    },
    {
      q: "Was the HP-Compaq merger ultimately a success?",
      a: "Mixed verdict. Cost savings of $2.5B were achieved, and HP briefly held the PC market #1 position. But Compaq's Alpha servers were discontinued, enterprise synergies were not realized, and Fiorina was dismissed in 2005. The 2015 HP split into HP Inc. and Hewlett Packard Enterprise was the structural judgment: the integrated IT company Fiorina built was dismantled.",
    },
    {
      q: "Why was Carly Fiorina fired?",
      a: "The board cited three reasons: post-merger HP results fell short of targets; deep disagreements about strategic direction; and internal pushback on Fiorina's management style. Fiorina argued in her memoir that the merger strategy was correct and that board members who opposed change caused the problems. She subsequently ran for US Senate (2010) and the Republican presidential primary (2016).",
    },
    {
      q: "What happened to Compaq's Alpha servers after the merger?",
      a: "Alpha servers were Compaq's flagship enterprise server platform, acquired with DEC in 1998. HP continued development post-merger but ultimately discontinued Alpha server support in 2007. This was the clearest evidence that the core enterprise synergy thesis — Compaq's Alpha servers as HP's IBM-competing weapon — was abandoned. It validated Walter Hewlett's skepticism about the deal's strategic logic.",
    },
  ],
};

export default deal;
