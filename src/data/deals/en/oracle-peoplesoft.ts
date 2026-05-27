/**
 * Oracle vs. PeopleSoft (2003–2004) — The 18-Month Hostile Takeover War
 * Larry Ellison's surprise bid · five price hikes · poison pill · CAP asset-destruction · DOJ antitrust 18 months
 */
import type { DealData } from "@/lib/deal-data";

const oraclePeoplesoft: DealData = {
  // ── Meta ──────────────────────────────────────────────────────
  slug: "oracle-peoplesoft",
  title: "Oracle vs. PeopleSoft — The 18-Month Hostile Takeover War",
  subtitle:
    "Larry Ellison's Surprise Bid · Poison Pill · CAP Asset-Destruction Clause · 18-Month DOJ Review · Five Price Hikes",
  category: "control",
  industry: "Enterprise Software / IT",
  country: "US",
  announcedAt: "2003-06-06",
  closedAt: "2004-12-28",
  announcedDisplay: "June 2003",
  closedDisplay: "December 2004",
  readingMinutes: 13,
  tags: [
    "hostile-takeover",
    "tender-offer",
    "poison-pill",
    "asset-destruction",
    "antitrust",
    "enterprise-software",
    "ERP",
    "oracle",
    "peoplesoft",
    "us",
  ],
  excerpt:
    "In June 2003, Larry Ellison launched a surprise hostile bid for PeopleSoft just as its board had approved another acquisition. What followed was 18 months of poison pills, customer asset-destruction clauses, DOJ antitrust reviews, and five escalating price increases — the definitive playbook for hostile M&A defense and offense.",

  // ── Entity Icons ──────────────────────────────────────────────
  acquirer: { initials: "ORC", bg: "bg-red-700", label: "Oracle Corporation (Larry Ellison, CEO)" },
  target: { initials: "PSFT", bg: "bg-blue-700", label: "PeopleSoft, Inc. (Craig Conway, CEO)" },

  // ── Background ────────────────────────────────────────────────
  background: [
    "Oracle dominated the relational database market through the 1990s but lagged behind SAP and PeopleSoft in enterprise resource planning (ERP) software. Larry Ellison had long viewed PeopleSoft as a strategic acquisition target — its large installed base of HR and ERP customers ran on Oracle's own database infrastructure, making integration theoretically straightforward.",
    "PeopleSoft was founded in 1987 and had grown into the second-largest ERP vendor globally, behind only SAP. Its HR module was considered the industry standard for large enterprises. Under CEO Craig Conway, PeopleSoft pursued an aggressive growth strategy that included acquiring mid-market ERP players.",
    "On June 2, 2003, PeopleSoft announced it would acquire J.D. Edwards — a mid-market ERP vendor — for approximately $1.7 billion. The deal was intended to accelerate PeopleSoft's push into small and mid-sized enterprises. Oracle watched the announcement closely.",
    "Four days later, on June 6, 2003, Oracle announced a hostile tender offer for PeopleSoft at $16 per share — a total of approximately $5.1 billion. The offer was launched without board approval and directly targeted PeopleSoft shareholders. What followed was the longest, most contentious hostile M&A battle in enterprise software history.",
  ],

  // ── Deal Summary ──────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "$10.3 billion",
    acquirerName: "Oracle Corporation",
    targetName: "PeopleSoft, Inc.",
    announcedDisplay: "June 2003",
    closedDisplay: "December 2004",
    country: "US",
  },

  // ── Executive Summary ─────────────────────────────────────────
  executiveSummary: [
    "Oracle launched a hostile tender offer at $16/share (June 6, 2003) — four days after PeopleSoft announced the J.D. Edwards acquisition, catching the board mid-deal.",
    "PeopleSoft's board unanimously rejected the offer and immediately activated a Poison Pill (Rights Plan) — triggering automatic dilution if Oracle acquired 20%+ of shares.",
    "Customer Assurance Program (CAP): PeopleSoft guaranteed customers a 2–5x license refund if Oracle completed the acquisition — an intentional asset-destruction clause designed to make the deal uneconomic.",
    "The U.S. Department of Justice (DOJ) opened an 18-month antitrust review — giving PeopleSoft its most powerful defensive shield and delaying any possible completion.",
    "Oracle raised its bid five times ($16 → $26.50, +65%), steadily pressuring shareholders as board resistance eroded.",
    "DOJ cleared the deal (September 2004) + PeopleSoft CEO dismissed (November 2004) → negotiating climate shifted; board accepted $26.50 on December 28, 2004.",
    "Final price: $26.50/share, total ~$10.3 billion — the largest hostile acquisition in enterprise software history.",
  ],

  // ── Industry Overview ─────────────────────────────────────────
  industryOverview: {
    body: "In 2003, the global enterprise software market was dominated by a four-way contest: SAP, Oracle, PeopleSoft, and Microsoft. The ERP segment — which Oracle was most aggressively targeting — was characterized by 10-to-15-year customer replacement cycles, deep implementation dependencies, and total cost of ownership that often ran 3–7x the license price. These structural dynamics meant that acquiring an ERP vendor gave you not just its revenues, but its entire installed base — customers who were economically locked in and would likely pay annual maintenance fees indefinitely.",
    metrics: [
      { label: "Global ERP Market Size (2003)", value: "~$24 billion",    sub: "annually" },
      { label: "PeopleSoft ERP Market Share",   value: "~12–15%",         sub: "global #2 behind SAP" },
      { label: "Oracle ERP Market Share",       value: "~7–10%",          sub: "global #3" },
      { label: "Avg. ERP Replacement Cycle",    value: "10–15 years",     sub: "high switching cost lock-in" },
    ],
    subBody:
      "Enterprise software economics are driven by a dual revenue model: upfront license fees plus annual maintenance contracts (typically 18–22% of license value). PeopleSoft's recurring maintenance stream was the crown jewel Oracle sought — not the software itself, but the annual cash flow from thousands of large enterprises paying to keep their systems current. Oracle's post-acquisition strategy — stopping PeopleSoft development and migrating customers to Oracle E-Business Suite — was designed precisely to preserve and redirect that cash flow.",
    players: [
      { name: "Oracle Corporation",     role: "Database #1, hostile acquirer seeking ERP expansion" },
      { name: "PeopleSoft, Inc.",        role: "ERP/HR software #2, 18-month defender" },
      { name: "SAP AG",                  role: "ERP #1, the competitive rationale for DOJ clearance" },
      { name: "J.D. Edwards",            role: "Mid-market ERP acquired by PeopleSoft; the trigger event" },
      { name: "U.S. Department of Justice", role: "18-month antitrust review; PeopleSoft's primary shield" },
    ],
  },

  // ── Company Overview ──────────────────────────────────────────
  companyOverview: {
    targetName: "PeopleSoft, Inc.",
    body: "PeopleSoft was founded in 1987 by Dave Duffield and grew from an HR software specialist into a full ERP suite vendor. By 2003 it counted a significant proportion of the Fortune 500 among its customers, and its HR module was widely regarded as the enterprise standard. Under CEO Craig Conway, PeopleSoft was executing an aggressive acquisition strategy — the J.D. Edwards deal being its largest to date — when Oracle launched its hostile bid. The company had approximately 12,600 employees and generated around $1.8 billion in annual revenue, with a recurring maintenance stream that made it a high-quality cash-flow asset.",
    metrics: [
      { label: "Annual Revenue (FY2002)", value: "~$1.8 billion",  sub: "license + maintenance" },
      { label: "ERP Market Share",        value: "~12–15%",        sub: "global #2" },
      { label: "Share Price (pre-bid)",   value: "$17.56",         sub: "June 5, 2003 close" },
      { label: "Final Acquisition Price", value: "$26.50/share",   sub: "total ~$10.3 billion" },
    ],
    financials: [
      { year: "FY2000", revenue: 1298, cogs: 312, grossProfit: 986, sga: 621, operatingIncome: 201, ebitda: 285 },
      { year: "FY2001", revenue: 1306, cogs: 324, grossProfit: 982, sga: 648, operatingIncome: 142, ebitda: 228 },
      { year: "FY2002", revenue: 1800, cogs: 410, grossProfit: 1390, sga: 790, operatingIncome: 285, ebitda: 390 },
    ],
    financialsNote: "USD millions | US GAAP | Source: PeopleSoft annual reports and public filings (includes estimates)",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  // ── Control Battle Overview ───────────────────────────────────
  controlBattleOverview: {
    body: "Larry Ellison caught PeopleSoft at the moment of maximum vulnerability — mid-acquisition, board distracted — and launched a hostile bid that would define the M&A playbook for enterprise software for decades. The 18 months that followed were a masterclass in attack and defense: poison pills, customer asset-destruction clauses, antitrust lobbying, a CEO ouster, and five relentless price increases.",
    catalyst:
      "PeopleSoft announced the acquisition of J.D. Edwards ($1.7 billion) on June 2, 2003. Four days later, Larry Ellison announced a hostile bid for PeopleSoft itself. Ellison's logic was straightforward: the ERP market was better served as a two-horse race (Oracle vs. SAP) than a three-way contest, and PeopleSoft's customer base ran on Oracle databases — making migration theoretically seamless.",
    attackerLabel: "Oracle (Larry Ellison)",
    defenderLabel: "PeopleSoft Board (Craig Conway)",
    battleMoves: [
      {
        date: "2003-06-06",
        side: "attack",
        actor: "Oracle",
        move: "Hostile tender offer announced — $16/share",
        detail:
          "Oracle announced a $16/share hostile tender offer (total ~$5.1 billion) for PeopleSoft, bypassing the board entirely. The offer carried only a modest premium to the previous close of $17.56 — almost an insult — signaling that Oracle was opening a negotiation, not closing a deal.",
        weapon: "Hostile Tender Offer",
        financialImpact: "PeopleSoft stock +18% on the day",
      },
      {
        date: "2003-06-09",
        side: "defense",
        actor: "PeopleSoft Board",
        move: "Unanimously rejected + Poison Pill activated",
        detail:
          "The PeopleSoft board unanimously rejected Oracle's offer and immediately activated a shareholder rights plan (Poison Pill). The plan would trigger automatic issuance of discounted new shares if Oracle acquired 20%+ of PeopleSoft stock — making any hostile acquisition mathematically uneconomic.",
        weapon: "Poison Pill (Shareholder Rights Plan)",
        financialImpact: "Automatic dilution trigger at 20% Oracle ownership",
      },
      {
        date: "2003-06-16",
        side: "defense",
        actor: "PeopleSoft Management",
        move: "Customer Assurance Program (CAP) — asset-destruction clause",
        detail:
          "PeopleSoft launched the Customer Assurance Program: a contractual guarantee to refund customers 2–5x their license fees if Oracle completed the acquisition and discontinued PeopleSoft products. Designed to make the acquisition economically toxic — an acquirer inheriting a $1–2 billion refund liability would face an immediate write-down of the acquired asset base.",
        weapon: "Customer Assurance Program (CAP — asset-destruction defense)",
      },
      {
        date: "2003-07",
        side: "neutral",
        actor: "U.S. Department of Justice",
        move: "Antitrust review opened",
        detail:
          "The DOJ opened a formal antitrust investigation into Oracle's proposed acquisition of PeopleSoft, citing concerns about market concentration in the HR and ERP software market. The review would last 18 months — providing PeopleSoft's most powerful shield: time.",
        weapon: "Antitrust Review (DOJ)",
      },
      {
        date: "2003-11",
        side: "attack",
        actor: "Oracle",
        move: "Bid raised to $19.50 — second escalation",
        detail:
          "Oracle raised its offer to $19.50/share to increase pressure on PeopleSoft shareholders. The board rejected the increased offer again. Ellison publicly declared the campaign would continue 'as long as it takes.'",
        financialImpact: "$16 → $19.50 (+21%)",
      },
      {
        date: "2004-02",
        side: "attack",
        actor: "Oracle",
        move: "Bid raised to $26 — fourth escalation",
        detail:
          "Oracle raised the offer to $26/share — a substantial premium to prevailing market prices. Shareholder acceptance pressure intensified. The staggered board defense was reaching its practical limits as PeopleSoft's operating performance weakened under 18 months of deal uncertainty.",
        financialImpact: "$19.50 → $26 (+33%)",
      },
      {
        date: "2004-09",
        side: "neutral",
        actor: "U.S. DOJ",
        move: "Antitrust review cleared — acquisition permitted",
        detail:
          "After 18 months, the DOJ concluded that competition from SAP was sufficient to prevent anticompetitive harm and cleared the acquisition. PeopleSoft's primary defensive shield — the antitrust overhang — was eliminated. The board's ability to credibly reject subsequent offers collapsed almost immediately.",
        financialImpact: "PeopleSoft negotiating leverage sharply reduced",
      },
      {
        date: "2004-11-22",
        side: "neutral",
        actor: "PeopleSoft Board",
        move: "CEO Craig Conway dismissed",
        detail:
          "The PeopleSoft board fired Craig Conway — the architect of the 18-month defense — citing unspecified performance issues. The dismissal was widely read as a signal that the board was preparing to negotiate. New management re-engaged Oracle in talks almost immediately.",
        financialImpact: "Signal of negotiation re-engagement; stock converged toward offer price",
      },
      {
        date: "2004-12-13",
        side: "attack",
        actor: "Oracle",
        move: "Final offer at $26.50 accepted",
        detail:
          "Oracle raised its final offer to $26.50/share. The PeopleSoft board concluded there was no superior alternative and recommended shareholder acceptance. The Customer Assurance Program was terminated as part of the agreement. Shareholders voted to approve on December 28, 2004.",
        financialImpact: "Final price $26.50/share, total ~$10.3 billion",
      },
    ],
    financialWeapons: [
      {
        name: "Hostile Tender Offer",
        side: "attack",
        usedBy: "Oracle",
        description:
          "Direct offer to shareholders bypassing the board. Five successive price increases ($16→$26.50) maintained constant pressure on shareholders while the board's resistance narrative weakened over 18 months.",
        effectiveness: "decisive",
      },
      {
        name: "Price Escalation Strategy",
        side: "attack",
        usedBy: "Oracle",
        description:
          "Five bid increases totaling +65%. Each raise signaled Oracle's commitment and increased shareholder pressure to accept. After DOJ clearance, the board had no credible basis to reject a fair-value offer.",
        effectiveness: "decisive",
      },
      {
        name: "Attrition / Long-Game Strategy",
        side: "attack",
        usedBy: "Oracle",
        description:
          "18 months of sustained hostile pressure maximized PeopleSoft's operational uncertainty — customer contracts stalled, key employees departed, new business slowed. By the time the CEO was dismissed, defensive will was exhausted.",
        effectiveness: "effective",
      },
      {
        name: "Poison Pill (Shareholder Rights Plan)",
        side: "defense",
        usedBy: "PeopleSoft Board",
        description:
          "Automatic dilution trigger at 20% Oracle ownership — made hostile share accumulation mathematically uneconomic. Effective at preventing creeping acquisition but ultimately waived when the board accepted the final offer.",
        effectiveness: "effective",
      },
      {
        name: "CAP (Customer Assurance — Asset Destruction)",
        side: "defense",
        usedBy: "PeopleSoft Management",
        description:
          "Guaranteed 2–5x license refunds to customers upon hostile acquisition completion. Designed to make the acquired entity worth less than the acquisition price. Oracle litigated the CAP as fraudulent; it was ultimately terminated in the final negotiated agreement.",
        effectiveness: "blocked",
      },
      {
        name: "Antitrust Defense (DOJ Review)",
        side: "defense",
        usedBy: "PeopleSoft",
        description:
          "18-month DOJ antitrust review effectively delayed the acquisition and gave PeopleSoft time to resist. The merger of ERP #2 and #3 raised legitimate concentration concerns. Once DOJ cleared the deal in September 2004, the board's resistance narrative collapsed within weeks.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2004-09",
      event: "DOJ antitrust clearance — the primary defensive shield collapsed",
      detail:
        "For 18 months, PeopleSoft's most credible argument against acceptance was regulatory uncertainty: 'This deal may not even be approved.' When the DOJ cleared the acquisition in September 2004, that argument evaporated. Within two months, the CEO was fired. Within three months, the board accepted. The DOJ clearance was the decisive moment — not the final price.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "Oracle — completed acquisition after 18-month war",
      margin: "Final price $26.50 vs. initial offer $16 (+65%)",
      note: "Oracle successfully repositioned itself in the ERP market alongside SAP, absorbing PeopleSoft's large enterprise customer base. PeopleSoft's products were subsequently discontinued, validating customers' worst-case fears expressed through the CAP. The deal cemented Oracle as a serial acquirer — followed by Siebel, BEA Systems, and Sun Microsystems in subsequent years.",
    },
    priceImpact: {
      preContest: "$17.56 (June 5, 2003)",
      peak: "$26.50 (final tender offer price)",
      postContest: "$26.50 (acquisition completed December 2004)",
      note: "PeopleSoft's stock traded consistently below Oracle's successive offer prices throughout the 18-month battle — the market pricing in meaningful deal completion risk. Following the fifth price increase and DOJ clearance, the share price converged to the offer level. Shareholders who held from pre-bid received a +51% return; those who held from Oracle's first offer price received +65%.",
    },
  },

  // ── Deal Structure ────────────────────────────────────────────
  dealStructure: {
    body: "Oracle pursued a classic hostile tender offer structure — directly soliciting PeopleSoft shareholders without board approval, then raising the price five times over 18 months to overcome the board's resistance. PeopleSoft deployed a multi-layer defense: Poison Pill (automatic dilution), CAP (asset-destruction guarantee to customers), Staggered Board (preventing immediate board takeover), and DOJ antitrust review (regulatory delay). The deal ultimately closed as a 100% cash acquisition at $26.50/share after the CAP was terminated and the Poison Pill was waived.",
    preOwnership: {
      nodes: [
        { id: "oracle_pre",   label: "Oracle",              sub: "Larry Ellison, CEO",          type: "acquirer" },
        { id: "psft_pre",     label: "PeopleSoft",          sub: "ERP/HR software #2",          type: "target" },
        { id: "psft_pub",     label: "PeopleSoft Shareholders", sub: "public float",            type: "public" },
      ],
      edges: [
        { from: "oracle_pre", to: "psft_pre",  label: "Hostile tender offer ($16 → $26.50)" },
        { from: "psft_pub",   to: "psft_pre",  label: "Public shareholders" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "oracle_post",  label: "Oracle",       sub: "100% owner, PeopleSoft absorbed",   type: "acquirer" },
        { id: "psft_post",    label: "PeopleSoft",   sub: "Oracle subsidiary → products discontinued", type: "target" },
      ],
      edges: [
        { from: "oracle_post", to: "psft_post", label: "100% acquisition ($26.50/share, $10.3B)" },
      ],
    },
    keyTerms: [
      { label: "Initial Offer Price",        value: "$16.00/share" },
      { label: "Final Offer Price",          value: "$26.50/share",  accent: true },
      { label: "Number of Price Increases",  value: "5 rounds (+65%)" },
      { label: "Total Transaction Value",    value: "~$10.3 billion", accent: true },
      { label: "Contest Duration",           value: "18 months (Jun 2003 – Dec 2004)" },
      { label: "DOJ Antitrust Review",       value: "18 months — cleared Sept 2004" },
    ],
  },

  // ── Advisors ──────────────────────────────────────────────────
  advisors: {
    body: "Both Oracle and PeopleSoft engaged top-tier Wall Street advisors and M&A law firms. Financial advisors played a central role in fairness opinions and bid pricing across five successive offer levels; legal advisors managed antitrust filings, Poison Pill design, and the CAP litigation that ran in parallel to the tender offer battle.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Oracle (Acquirer)",
        initials: "ORC",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Bid structuring, fairness opinions across five price levels, shareholder communications strategy.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Hostile takeover legal strategy, antitrust filings, CAP litigation, deal execution.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "PeopleSoft (Defender)",
        initials: "PSFT",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Goldman Sachs / UBS",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Defense strategy, fairness opinions, exploration of alternative acquirers (white knight search).",
          },
          {
            firm: "Wilson Sonsini Goodrich & Rosati",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Poison Pill design, CAP legal defense, DOJ antitrust proceedings support, board governance.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public filings and press reports. Actual engagement terms may differ.",
  },

  // ── Valuation ─────────────────────────────────────────────────
  valuation: {
    body: "Oracle's final offer of $26.50 represented a 65% premium over its opening bid of $16.00 and approximately 51% over PeopleSoft's pre-bid share price of $17.56. The core valuation debate centered on PeopleSoft's recurring maintenance revenue stream — the annual cash flow from thousands of large enterprise customers locked into multi-year support contracts. Oracle's thesis was that this stream justified a substantial premium because it would continue flowing regardless of what happened to PeopleSoft's development roadmap.",
    rows: [
      { item: "Share Price (Jun 5, 2003 — pre-bid close)", val: "$17.56",       note: "Day before announcement" },
      { item: "Initial Offer (Jun 6, 2003)",               val: "$16.00",       note: "Below market — opened negotiation, not closed deal" },
      { item: "2nd Increase (Nov 2003)",                   val: "$19.50",       note: "+21% from initial" },
      { item: "4th Increase (Feb 2004)",                   val: "$26.00",       note: "+33% from 2nd increase" },
      { item: "Final Offer (Dec 13, 2004)",                val: "$26.50",       note: "Board accepted; CAP terminated", accent: true },
      { item: "Total Transaction Value",                   val: "~$10.3 billion", note: "100% cash acquisition", accent: true },
    ],
    disclaimer: "Note: Prices and transaction values are based on public filings and press reports. Actual figures may vary.",
  },

  // ── Rationale ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Oracle held the line for 18 months",
      initials: "ORC",
      bg: "bg-red-700",
      points: [
        "ERP market consolidation: acquiring PeopleSoft (#2) would instantly position Oracle alongside SAP in a dominant two-player ERP market, eliminating a major competitor.",
        "Customer base synergy: PeopleSoft's large enterprise customers ran on Oracle's own database infrastructure — post-acquisition migration to Oracle E-Business Suite was technically feasible and commercially attractive.",
        "Recurring maintenance cash flow: PeopleSoft's annual maintenance contracts (~18–22% of cumulative license base) represented a high-quality, predictable revenue stream worth a significant premium.",
        "Attrition as strategy: every month of hostile pressure increased operational uncertainty at PeopleSoft — customer deferrals, employee departures, delayed renewals — gradually exhausting the defense.",
      ],
    },
    seller: {
      title: "Why the PeopleSoft board ultimately accepted",
      initials: "PSFT",
      bg: "bg-blue-700",
      points: [
        "DOJ clearance in September 2004 eliminated the board's most credible argument for rejection — that the deal faced serious regulatory risk. With that shield gone, the rationale for continued resistance became legally tenuous.",
        "CEO Craig Conway's dismissal in November 2004 signaled the board's shift in orientation — from defense to negotiation — and cleared the political path to acceptance.",
        "At $26.50/share (+51% premium to pre-bid), the board concluded no superior alternative existed. The extended campaign had not produced a white knight; shareholder pressure to realize the gain was intense.",
        "The CAP termination — Oracle agreeing to honor existing PeopleSoft customer contracts for a transition period — provided the board with a face-saving rationale for acceptance without complete capitulation on customer protection.",
      ],
    },
  },

  // ── Post-Deal Assessment ──────────────────────────────────────
  postDealAssessment: {
    asOfDate: "Post-2006",
    body: "Oracle closed the PeopleSoft acquisition on December 28, 2004 and immediately began executing its post-acquisition strategy: halting new PeopleSoft product development and communicating migration timelines to customers for Oracle E-Business Suite. This validated the scenario PeopleSoft's CAP had warned customers about. Some large customers migrated to SAP rather than Oracle, but Oracle captured the vast majority of PeopleSoft's maintenance revenue stream. The deal established Oracle as a serial enterprise software acquirer — Siebel Systems, BEA Systems, and Sun Microsystems followed within years.",
    overallVerdict: "Oracle strategic victory — ERP market rebalanced; PeopleSoft products discontinued",
    positives: [
      "Oracle successfully repositioned in the ERP market alongside SAP, creating the two-player consolidation Ellison had sought since the early 2000s.",
      "Recurring maintenance revenue from PeopleSoft's installed base strengthened Oracle's cash flow profile significantly.",
      "Migration services and new license sales to the PeopleSoft customer base generated substantial post-acquisition revenue.",
      "The deal established Oracle's M&A playbook — hostile offer, sustained pressure, price escalation — replicated in subsequent acquisitions.",
    ],
    risks: [
      "Customer defections to SAP: a meaningful subset of PeopleSoft's installed base chose SAP over Oracle during the post-acquisition migration window.",
      "Talent attrition: PeopleSoft's core product and customer relationship teams largely departed following the hostile acquisition, weakening integration execution.",
      "CAP termination fallout: customers who had relied on CAP protection felt exposed; reputational damage lingered in Oracle's enterprise sales relationships.",
      "Integration costs: product discontinuation, system migration, and support transition proved more expensive and disruptive than Oracle's initial estimates.",
    ],
    editorNote:
      "The Oracle-PeopleSoft war is the canonical hostile M&A case study in enterprise technology. For the attacker, it demonstrated that sustained price pressure plus regulatory clearance will ultimately overcome board resistance. For the defender, it proved that antitrust delay is the most powerful tool in a hostile defense — but only as long as the regulator remains hostile. When the DOJ cleared the deal, every other defense mechanism became a negotiating chip rather than a blocking tool. That lesson has been replayed in every major enterprise software hostile bid since.",
  },

  // ── Tombstone ─────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "ORC",
    acquirerBg: "bg-red-700",
    targetInitials: "PSFT",
    targetBg: "bg-blue-700",
    acquirerName: "Oracle Corporation",
    targetName: "PeopleSoft, Inc.",
    dealTitle: "Oracle Hostile Takeover of PeopleSoft — 18-Month Control War",
    dealSize: "$10.3 billion",
    dealSizeUSD: "USD 10.3B",
    evEbitda: "N/A (hostile control premium)",
    closeDate: "Dec 2004",
  },

  // ── Sources ───────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Oracle Corporation, Tender Offer Statement (SC TO-T), SEC EDGAR (June 2003)", url: "https://www.sec.gov" },
    { id: 2, text: "PeopleSoft, Inc., Schedule 14D-9 (Solicitation/Recommendation Statement), SEC EDGAR (June 2003)" },
    { id: 3, text: "U.S. Department of Justice, Statement on Oracle/PeopleSoft Antitrust Review (September 2004)" },
    { id: 4, text: "PeopleSoft Board of Directors Press Release — Acceptance of Oracle Offer (December 2004)" },
    { id: 5, text: "Oracle Corporation Annual Report & Press Releases (2003–2005)" },
    { id: 6, text: "Financial Times, 'Oracle wins PeopleSoft battle after 18 months' (December 2004)" },
    { id: 7, text: "The Wall Street Journal, Oracle-PeopleSoft coverage (2003–2004)" },
    { id: 8, text: "Harvard Business School Case Study — Oracle's Hostile Bid for PeopleSoft (HBS 9-704-493)" },
  ],

  // ── SEO ───────────────────────────────────────────────────────
  seo: {
    title: "Oracle vs. PeopleSoft Hostile Takeover — 18-Month M&A War Explained",
    description:
      "Complete analysis of Oracle's 2003–2004 hostile acquisition of PeopleSoft. Larry Ellison's surprise bid, poison pill, CAP asset-destruction clause, 18-month DOJ antitrust review, and five price hikes. The definitive enterprise software M&A playbook.",
    keywords: [
      "Oracle PeopleSoft acquisition",
      "hostile takeover",
      "poison pill defense",
      "Customer Assurance Program CAP",
      "Larry Ellison",
      "enterprise software M&A",
      "DOJ antitrust",
      "ERP control contest",
      "hostile tender offer",
      "PeopleSoft hostile bid",
    ],
  },

  // ── Concepts ──────────────────────────────────────────────────
  concepts: [
    {
      term: "Hostile Tender Offer",
      description:
        "A direct offer to shareholders to purchase their stock at a premium, bypassing the target board. Oracle's primary offensive weapon — used to pressure PeopleSoft shareholders directly over 18 months.",
    },
    {
      term: "Poison Pill (Shareholder Rights Plan)",
      description:
        "A defense mechanism that triggers automatic issuance of discounted new shares when a hostile acquirer exceeds a set ownership threshold (typically 15–20%), diluting the acquirer's stake and making the takeover prohibitively expensive.",
    },
    {
      term: "Customer Assurance Program (CAP)",
      description:
        "PeopleSoft's asset-destruction defense: a contractual guarantee to refund customers 2–5x their license fees upon hostile acquisition completion. Designed to impose a billion-dollar liability on any acquirer, making the deal uneconomic.",
    },
    {
      term: "Staggered Board",
      description:
        "A governance structure in which board terms are staggered across 2–3 years, preventing a hostile acquirer from replacing the entire board in a single shareholder vote. Slows but does not stop a determined hostile acquirer.",
    },
    {
      term: "Antitrust Review (DOJ/FTC)",
      description:
        "Regulatory review of whether a proposed merger harms market competition. In this case, the DOJ's 18-month review of Oracle/PeopleSoft was PeopleSoft's most powerful defense — delaying deal completion and creating uncertainty for Oracle shareholders.",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Oracle want to acquire PeopleSoft?",
      a: "Oracle's strategic goal was ERP market consolidation. PeopleSoft was the #2 global ERP vendor, and acquiring it would allow Oracle to eliminate a major competitor, absorb its large enterprise customer base (which ran on Oracle databases), and rebalance the market as a two-player contest against SAP. The recurring maintenance revenue stream — annual fees from thousands of locked-in enterprise customers — was the core financial asset Oracle sought.",
    },
    {
      q: "What was the Customer Assurance Program (CAP) and why didn't it work?",
      a: "The CAP was PeopleSoft's most creative defense: a guarantee to refund customers 2–5x their license fees if Oracle completed the acquisition and discontinued PeopleSoft products. The intent was to impose a $1–2 billion liability on any acquirer, making the deal economically irrational. Oracle challenged the CAP in court as fraudulent misrepresentation. It proved effective at creating uncertainty but was ultimately terminated in the final negotiated agreement — Oracle agreed to honor transition support for existing customers in exchange for CAP cancellation.",
    },
    {
      q: "Why was the DOJ antitrust review PeopleSoft's most important shield?",
      a: "The 18-month DOJ review prevented Oracle from completing the acquisition regardless of offer price or shareholder acceptance. During this period, PeopleSoft had time to resist, explore alternatives, and maintain board unity around rejection. The board's primary argument to shareholders — 'this deal may not even close due to antitrust risk' — was credible only while the DOJ review was active. When DOJ cleared the deal in September 2004, the board lost its most defensible rationale for continued rejection, and capitulation followed within three months.",
    },
    {
      q: "Why did Oracle raise its bid five times?",
      a: "Each price increase served two purposes: increasing shareholder acceptance pressure and signaling to the market (and PeopleSoft management) that Oracle would not be deterred. With a Poison Pill blocking direct share acquisition above 20%, Oracle's only path to completion was winning shareholder support at a price that made the board's continued rejection legally untenable under its fiduciary duty. The final $26.50 offer — +65% over the opening bid — reached a level where no credible fairness argument for rejection remained.",
    },
    {
      q: "What happened to PeopleSoft customers after the acquisition?",
      a: "Oracle discontinued PeopleSoft product development and offered customers migration paths to Oracle E-Business Suite. Customers were given multi-year transition timelines — partially honoring the spirit of the CAP despite its formal termination. A meaningful portion of PeopleSoft's installed base chose to migrate to SAP rather than Oracle, representing lost revenue for the acquirer. This outcome validated the fears PeopleSoft had raised during the 18-month defense.",
    },
    {
      q: "What legacy did this deal leave for M&A strategy?",
      a: "Oracle-PeopleSoft became the canonical enterprise software hostile takeover case study. For acquirers: sustained price escalation combined with regulatory clearance will eventually overcome board resistance, provided the strategic rationale is genuine. For defenders: antitrust review is the most powerful time-delay mechanism — but its value disappears the moment regulators clear the deal. Every subsequent enterprise software hostile bid has been analyzed through the Oracle-PeopleSoft lens, from Microsoft-Yahoo to Broadcom-Qualcomm.",
    },
  ],
};

export default oraclePeoplesoft;
