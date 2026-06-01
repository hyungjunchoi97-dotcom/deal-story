/**
 * Nippon Steel × U.S. Steel $14.9B (equity) / $14.1B (cash) Acquisition, June 2025
 * The first time the US government has held a "Golden Share" in a foreign
 * acquisition of a US-listed company, the new template for CFIUS mitigation.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "nippon-steel-us-steel",
  title: "How Nippon Steel Bought U.S. Steel, Biden's Block and Trump's Golden-Share Settlement",
  subtitle:
    "$55 all-cash · $14.9B equity · 18-month political war · first-ever US-government golden share · closed June 18, 2025 under a National Security Agreement",
  category: "control",
  industry: "Steel / Strategic Manufacturing",
  country: "Japan/USA",
  announcedAt: "2023-12-18",
  closedAt: "2025-06-18",
  announcedDisplay: "Dec 18, 2023 (Merger agreement)",
  closedDisplay: "Jun 18, 2025 (Closed under NSA)",
  readingMinutes: 17,
  tags: [
    "Nippon Steel",
    "US Steel",
    "CFIUS",
    "Golden Share",
    "National Security Agreement",
    "Cleveland-Cliffs",
    "USW",
    "Biden Block",
    "Trump NSA",
    "Foreign Direct Investment",
    "Steel",
    "Strategic Manufacturing",
  ],
  excerpt:
    "On December 18, 2023, Nippon Steel agreed to acquire U.S. Steel for $55 per share in all-cash, $14.9B in equity value (~$14.1B in cash consideration net of debt). The eighteen months that followed were not an antitrust review or a financing exercise, they were a US presidential-election cycle, USW union opposition, a CFIUS deadlock, a Biden executive order blocking the deal, a federal lawsuit by the parties, and finally a Trump-brokered [National Security Agreement (NSA)]. The deal closed on June 18, 2025, five days after President Trump's June 13 executive order. As a condition of closing, the US government received a [Golden Share] in U.S. Steel, a perpetual equity-level veto over plant closures, production cuts, headquarters relocation, key personnel changes, and investment timing. It is the first time the US government has held such a share in a foreign acquisition of a US-listed company, and it sets a new template for CFIUS mitigation of allied-country FDI.",

  acquirer: { initials: "NSC", bg: "bg-red-700", label: "Nippon Steel Corporation" },
  target: { initials: "X", bg: "bg-blue-800", label: "United States Steel Corporation" },

  background: [
    "U.S. Steel was founded in 1901 when J.P. Morgan combined Andrew Carnegie's Carnegie Steel with Federal Steel and National Steel to create the first $1 billion company in American history. Headquartered in Pittsburgh, the company was for a century the symbol of American industrial power. By the 2020s, however, the structural picture had darkened, Chinese global steel overcapacity, the rise of US mini-mill players (Nucor, Steel Dynamics, Commercial Metals) running electric-arc furnaces at far better unit economics than U.S. Steel's integrated BOF operations, and the company's USW pension and healthcare obligations all pressed on the legacy footprint. In 2023, the board began a formal strategic review. The first bid was domestic: in July 2023 Cleveland-Cliffs proposed [$35 per share, half cash ($17.50) and half Cliffs stock (1.023 shares), implying ~$7.3B in equity value]. U.S. Steel's board rejected the proposal as [\"unreasonable\"], citing financing and antitrust concerns.",
    "[Nippon Steel enters.] On December 18, 2023, Nippon Steel announced an agreement to acquire U.S. Steel at [$55 per share, all-cash, ~$14.9B in equity value (~$14.1B in cash consideration net of debt)]. That was a [+57% premium to Cleveland-Cliffs' $35 proposal] and approximately +40% over the prior close. Nippon Steel's strategic logic was clear, (i) direct entry into the US market, (ii) bypassing stagnant Japanese demand, (iii) participating in the IRA / CHIPS Act capex cycle, and (iv) integrating with U.S. Steel's mini-mill asset Big River Steel for green-steel technology transfer. The price was set at a level that no domestic competitor could realistically match given financing and antitrust constraints.",
    "[USW opposition and political escalation.] Within days of the announcement, the United Steelworkers (USW), under President David McCall, publicly opposed the transaction. Three concerns drove the opposition: (i) the risk of plant closures and job relocation under foreign ownership, (ii) uncertainty over the inheritance of USW collective bargaining agreements, and (iii) USW's prior public support for Cleveland-Cliffs. Pennsylvania, Indiana, and Minnesota, the political map of the Rust Belt, sat at the center of the 2024 presidential election. Both major candidates, Biden (D) and Trump (R), publicly committed during the campaign to blocking the transaction, framing U.S. Steel as a national-security asset that should remain American. From that point on, the CFIUS review was as much a political process as a national-security one.",
    "[2024 CFIUS review and the January 2025 Biden block.] CFIUS reviewed the transaction throughout 2024 and, on December 23, 2024, was unable to reach internal consensus, referring the decision to the President. On January 3, 2025, with seventeen days remaining in his term, President Biden signed an executive order blocking the transaction. It was the first time a CFIUS process had blocked an acquisition by a company from an allied country (Japan) of a US-listed public company. Three days later, on January 6, 2025, Nippon Steel and U.S. Steel filed federal litigation, alleging that the block was [motivated by politics rather than a legitimate national-security determination] and seeking to invalidate the executive order.",
    "[Trump's settlement and the golden share.] After Trump's inauguration on January 20, 2025, the White House did not reverse Biden's order directly. Instead it restructured the deal as a [\"partnership.\"] On April 7, 2025, Trump ordered CFIUS to conduct a [45-day de novo review]. The committee submitted confidential recommendations to the White House on May 21, 2025. The outcome was formalized on June 13, 2025, when Trump signed an executive order approving the transaction conditional on a [National Security Agreement (NSA)]. The NSA includes (i) a US-government [Golden Share] in U.S. Steel, (ii) approximately $11 billion of new investment by end-2028 plus a $14 billion+ multi-year capital plan, (iii) preservation of the Pittsburgh headquarters, (iv) a majority US-citizen board and US-citizen CEO, and (v) US-government veto rights over plant closures, production cuts, relocations, name changes, and key personnel decisions. The transaction closed on June 18, 2025.",
  ],

  dealSummary: {
    dealValueDisplay: "$14.9B equity (~$14.1B cash net of debt)",
    acquirerName: "Nippon Steel Corporation (NSC)",
    targetName: "United States Steel Corporation (NYSE: X)",
    announcedDisplay: "Dec 18, 2023",
    closedDisplay: "Jun 18, 2025 (post-NSA)",
    country: "JP/US",
  },

  executiveSummary: [
    "[$55 all-cash, ~$14.9B equity] Nippon Steel agreed on Dec 18, 2023 to acquire U.S. Steel at $55 per share in all-cash, ~$14.9B equity value (~$14.1B in cash consideration net of debt). +57% premium to Cleveland-Cliffs' $35 proposal, ~+40% to the prior close.",
    "[The losing Cleveland-Cliffs bid] In July 2023, Cleveland-Cliffs proposed $35 per share ($17.50 cash plus 1.023 Cliffs shares, ~$7.3B). The U.S. Steel board rejected the proposal as [\"unreasonable.\"] Nippon Steel's higher all-cash bid took the deal.",
    "[USW and bipartisan campaign opposition] USW publicly opposed foreign ownership and had pre-endorsed Cleveland-Cliffs. Both major 2024 presidential candidates (Biden, Trump) committed to blocking the deal, transforming the CFIUS review into a politicized process.",
    "[Jan 3, 2025 Biden block, the first allied-country CFIUS block] Seventeen days before leaving office, Biden signed an executive order blocking the transaction, the first time an allied-country acquisition of a US-listed company was blocked through CFIUS authority.",
    "[Jan 6, 2025 federal lawsuit] Nippon Steel and U.S. Steel sued, alleging the block was politically rather than security-motivated, seeking to invalidate the executive order.",
    "[Trump's de novo review and June 13, 2025 conditional approval] Trump ordered a fresh 45-day CFIUS review on Apr 7, 2025. Confidential CFIUS recommendations were submitted May 21. On Jun 13, Trump signed an executive order approving the deal conditional on an NSA. Closing followed on Jun 18.",
    "[First-ever US-government Golden Share] The NSA establishes (i) a US-government Golden Share in U.S. Steel, (ii) US-president appointment right for one of three designated directors, (iii) veto rights over plant closures, production cuts, name changes, HQ relocation, key personnel, and investment delays, (iv) approximately $11B new investment by end-2028 within a $14B+ multi-year plan, (v) majority US-citizen board and US-citizen CEO, (vi) Pittsburgh HQ retained.",
    "[A new CFIUS mitigation template] Unlike traditional CFIUS mitigation (security-cleared director boards, business segregation, information firewalls), this NSA introduces [equity-level veto rights] for the US government. Likely to become a standard option for future allied-country FDI into US strategic assets.",
  ],

  industryOverview: {
    body: "The US steel industry entered the 2020s under three simultaneous pressures. First, Chinese global overcapacity, the country produces ~1 billion tonnes of crude steel annually and exports ~90 million tonnes, pressuring global prices. Second, the rise of US mini-mill players (Nucor, Steel Dynamics, Commercial Metals) running electric-arc furnaces at substantially better unit economics than the integrated BOF operations of U.S. Steel and Cleveland-Cliffs. Third, the capital cost of decarbonization, green-hydrogen direct-reduced iron and electric-arc transitions carry capex per tonne 2~3x that of legacy BOF assets. Against those headwinds, the Inflation Reduction Act, the CHIPS Act, EV manufacturing buildout, and offshore wind generation simultaneously raised domestic steel demand expectations. Nippon Steel's acquisition logic sat at this intersection of [supply pressure, demand recovery, and decarbonization capex], with US market entry as the strategic prize.",
    metrics: [
      { label: "U.S. Steel acquisition equity",  value: "$14.9B",     sub: "~$14.1B cash net of debt" },
      { label: "Per-share price",                value: "$55.00",      sub: "All-cash" },
      { label: "Premium to prior close",         value: "~+40%",       sub: "vs. ~$39 close on Dec 15, 2023" },
      { label: "Premium to Cleveland-Cliffs bid", value: "+57%",       sub: "vs. $35 cash/stock proposal" },
    ],
    subBody:
      "The US steel [Big Four] are Nucor, Cleveland-Cliffs, U.S. Steel, and Steel Dynamics. Only Cleveland-Cliffs and U.S. Steel run integrated BOF operations, and both carry USW collective-bargaining obligations plus pension and healthcare liabilities. Nucor and Steel Dynamics run non-union mini-mills with materially higher capital efficiency. Nippon Steel's bid implicitly proposed that foreign capital would underwrite the integrated-steel decarbonization transition, which proved to be the most politically combustible element of the transaction.",
    players: [
      { name: "Nippon Steel Corporation",    role: "Acquirer, Japan's largest steelmaker and the world's #4 by crude steel output" },
      { name: "United States Steel",         role: "Target, founded 1901, symbol of American integrated steel" },
      { name: "Cleveland-Cliffs",            role: "Initial bidder at $35/share ($7.3B), rejected. Had secured USW pre-endorsement" },
      { name: "United Steelworkers (USW)",   role: "US steel union, ~850k members, President David McCall. Opposed foreign ownership, pre-endorsed Cleveland-Cliffs" },
      { name: "CFIUS",                       role: "Committee on Foreign Investment in the United States, Treasury-chaired interagency. 2024 review deadlocked, referred to President Biden" },
      { name: "Biden administration",        role: "Signed Jan 3, 2025 executive order blocking the transaction, the first allied-country CFIUS block" },
      { name: "Trump administration",        role: "Apr 2025 ordered de novo CFIUS review, Jun 13 signed NSA-conditional approval order" },
      { name: "Nucor / Steel Dynamics",      role: "US mini-mill competitors, not direct parties but the structural benchmark for industry comparison" },
    ],
  },

  companyOverview: {
    targetName: "United States Steel Corporation (NYSE: X)",
    body: "U.S. Steel was founded in 1901 when J.P. Morgan merged Carnegie Steel with Federal Steel and National Steel to form America's first $1 billion company. Headquartered in Pittsburgh. Four operating segments, (i) Flat-Rolled (integrated BOF, Mon Valley Works, Gary Works, Big River Steel), (ii) Mini Mill (Big River Steel, electric-arc, acquired in full in 2021), (iii) U.S. Steel Europe (Košice, Slovakia, divested in 2023), (iv) Tubular Products. From a peak of more than 60% of US steel production at its founding, market share had fallen into the single digits by the mid-2020s. Approximately 22,000 employees as of 2022, most covered by USW collective bargaining.",
    metrics: [
      { label: "Founded",                  value: "1901",            sub: "J.P. Morgan merger of Carnegie Steel" },
      { label: "Headquarters",             value: "Pittsburgh, PA",   sub: "Retention codified in NSA" },
      { label: "FY2022 revenue",            value: "~$21.1B",         sub: "Cyclical peak with strong steel prices" },
      { label: "FY2022 adjusted EBITDA",    value: "~$4.2B",          sub: "Integrated plus mini-mill combined" },
    ],
    financials: [
      { year: "FY2018", revenue: 14178, cogs: 12527, grossProfit: 1651, sga: 491,  operatingIncome: 1160, ebitda: 1840 },
      { year: "FY2019", revenue: 12937, cogs: 12000, grossProfit: 937,  sga: 460,  operatingIncome: 477,  ebitda: 1130 },
      { year: "FY2020", revenue: 9741,  cogs: 9710,  grossProfit: 31,   sga: 405,  operatingIncome: -374, ebitda: 290  },
      { year: "FY2021", revenue: 20275, cogs: 14750, grossProfit: 5525, sga: 532,  operatingIncome: 4993, ebitda: 5300 },
      { year: "FY2022", revenue: 21065, cogs: 16860, grossProfit: 4205, sga: 614,  operatingIncome: 3591, ebitda: 4180 },
    ],
    financialsNote: "Unit: USD millions (US-GAAP consolidated) | Source: U.S. Steel 10-K (2018~2022). FY2020 operating loss reflects COVID-19, FY2021~22 reflects the steel price cycle peak.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  controlBattleOverview: {
    body: "This was not an ordinary M&A transaction. It was an [eighteen-month political war]. An attacking side (Nippon Steel, the U.S. Steel board, and U.S. Steel shareholders) used a record all-cash premium to lock the deal in. A defending side (USW, Cleveland-Cliffs, and the Biden-era CFIUS) used collective bargaining commitments, national-security framing, and campaign promises to block it. The Trump administration then introduced a third path, the [Golden Share] settlement, that closed the deal while permanently embedding US-government veto rights into the post-deal entity. The nominal winners are Nippon Steel and the U.S. Steel shareholders. The substantive winner is the US government, which walked away holding an equity-level veto over the strategic asset. That is why the verdict is properly read as a [draw].",
    catalyst: "July 2023 Cleveland-Cliffs hostile $35 proposal rejected → Dec 18, 2023 Nippon Steel $55 all-cash agreement → USW + bipartisan campaign opposition + CFIUS politicization",
    attackerLabel: "Nippon Steel + U.S. Steel board + U.S. Steel shareholders",
    defenderLabel: "Biden administration CFIUS + USW + Cleveland-Cliffs (initial competing bidder)",
    battleMoves: [
      {
        date: "2023-07-28",
        actor: "Cleveland-Cliffs",
        side: "defense",
        move: "Hostile bid disclosure",
        detail: "Cleveland-Cliffs proposed $35 per share ($17.50 cash plus 1.023 Cliffs shares, ~$7.3B), with USW pre-endorsement. U.S. Steel's board rejected the proposal as [\"unreasonable.\"]",
        financialImpact: "U.S. Steel shares +37% on proposal disclosure",
        weapon: "Cash + stock hostile proposal",
      },
      {
        date: "2023-12-18",
        actor: "Nippon Steel",
        side: "attack",
        move: "$55 all-cash agreement announced",
        detail: "+57% over Cleveland-Cliffs' proposal, +40% over the prior close. Unanimous U.S. Steel board approval. A price level no domestic competitor could match given financing and antitrust constraints",
        financialImpact: "$14.9B equity value, +$20 per share over Cliffs",
        weapon: "Cash-Premium Lock-in",
      },
      {
        date: "2024-03-14",
        actor: "USW (President David McCall)",
        side: "defense",
        move: "Formal opposition statement + Washington pressure",
        detail: "USW formalized opposition to foreign ownership, demanded that Pennsylvania politicians block the deal, secured bipartisan campaign commitments from Biden and Trump",
        weapon: "Political Mobilization + collective bargaining leverage",
      },
      {
        date: "2024-09-03",
        actor: "Biden administration",
        side: "defense",
        move: "Biden formally announces opposition",
        detail: "President Biden publicly stated during the CFIUS review that [\"U.S. Steel should remain American,\"] effectively pre-instructing the CFIUS process",
        weapon: "Presidential opposition + CFIUS process pressure",
      },
      {
        date: "2025-01-03",
        actor: "Biden administration (CFIUS)",
        side: "defense",
        move: "Executive order blocking the transaction",
        detail: "Seventeen days before leaving office, Biden signed a Section 721 executive order blocking the deal, the first time an allied-country acquisition of a US-listed company was blocked through CFIUS authority",
        financialImpact: "U.S. Steel shares dropped to the low-$30s",
        weapon: "CFIUS Block (Presidential executive order)",
      },
      {
        date: "2025-01-06",
        actor: "Nippon Steel + U.S. Steel",
        side: "attack",
        move: "Federal lawsuit challenging the executive order",
        detail: "Both companies filed federal litigation alleging the block was politically motivated rather than security-justified, seeking invalidation of the executive order. Shifted the dispute from political to judicial venue",
        weapon: "Litigation",
      },
      {
        date: "2025-04-07",
        actor: "Trump administration",
        side: "neutral",
        move: "45-day CFIUS de novo review ordered",
        detail: "Trump did not reverse Biden's order directly, instead ordering CFIUS to conduct a fresh 45-day de novo national-security review. Confidential recommendations were submitted to the White House on May 21",
        weapon: "CFIUS de novo Review (procedural workaround)",
      },
      {
        date: "2025-06-13",
        actor: "Trump administration",
        side: "neutral",
        move: "Executive order approving deal conditional on NSA → closed June 18",
        detail: "Trump signed an executive order approving the deal contingent on an NSA. The NSA codifies a US-government Golden Share plus veto rights plus ~$11B investment commitments. Closing occurred on June 18, 2025",
        financialImpact: "Deal closed, $55 per share paid in cash",
        weapon: "Golden Share Innovation (NSA settlement)",
      },
    ],
    financialWeapons: [
      {
        name: "Cash + stock hostile proposal",
        side: "defense",
        usedBy: "Cleveland-Cliffs",
        description: "$35 per share ($17.50 cash plus 1.023 Cliffs shares) hostile bid with USW pre-endorsement. Compromised by antitrust concerns over an integrated-steel consolidation and by financing capacity",
        effectiveness: "blocked",
      },
      {
        name: "Cash-Premium Lock-in",
        side: "attack",
        usedBy: "Nippon Steel",
        description: "+57% over Cleveland-Cliffs and +40% over prior close in record all-cash form. A bid level no domestic competitor could realistically match, locking in board approval and shareholder support",
        effectiveness: "decisive",
      },
      {
        name: "Union + Bipartisan Campaign Promises",
        side: "defense",
        usedBy: "USW + Biden/Trump campaigns",
        description: "USW's collective-bargaining leverage combined with bipartisan campaign opposition raised the political cost of approval to a level that proved decisive during the Biden term",
        effectiveness: "effective",
      },
      {
        name: "CFIUS Block (Presidential executive order)",
        side: "defense",
        usedBy: "Biden administration",
        description: "Section 721 executive order signed seventeen days before leaving office. First allied-country CFIUS block. Short-term effective, ultimately settled rather than upheld",
        effectiveness: "effective",
      },
      {
        name: "Litigation",
        side: "attack",
        usedBy: "Nippon Steel + U.S. Steel",
        description: "Federal lawsuit against Biden's executive order. Never decided on the merits, but expanded the dispute from political to judicial venue, providing the procedural pretext for Trump's de novo CFIUS review",
        effectiveness: "effective",
      },
      {
        name: "CFIUS de novo Review",
        side: "neutral",
        usedBy: "Trump administration",
        description: "Procedural reset of the CFIUS process without directly overturning Biden's order. Allowed a fresh national-security recommendation that could support a different presidential decision",
        effectiveness: "effective",
      },
      {
        name: "Golden Share Innovation (NSA Settlement)",
        side: "neutral",
        usedBy: "Trump administration",
        description: "Unlike traditional CFIUS mitigation (security director boards, business segregation), this NSA introduces an [equity-level veto] held by the US government. The acquisition closes, but the national-security lever is permanently embedded in the post-deal entity",
        effectiveness: "decisive",
      },
      {
        name: "Investment Commitment",
        side: "attack",
        usedBy: "Nippon Steel",
        description: "Approximately $11B new investment by end-2028 within a $14B+ multi-year capital plan. Mon Valley, Gary Works, Big River Steel capex commitments delivered the political cover required for approval",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2025-06-13",
      event: "President Trump signs NSA-conditional approval executive order",
      detail:
        "The Trump administration converted Biden's block into a settlement through a third path: neither outright approval nor outright rejection, but a permanent US-government Golden Share embedded in the post-deal entity. This is the first time the US government has held an equity-level veto over a foreign-acquired US-listed company. Nippon Steel obtained the acquisition. The US government obtained a permanent national-security lever. The USW obtained collective-bargaining inheritance plus investment commitments. A settlement of inverse winners.",
    },
    verdict: {
      winner: "draw",
      winnerLabel: "Nominal winners: Nippon Steel and U.S. Steel shareholders. Substantive winner: the US government, now holding the Golden Share",
      margin: "Golden Share + ~$11B investment commitment + US-citizen CEO and majority board + Pittsburgh HQ retention",
      note:
        "Nippon Steel obtained the acquisition after eighteen months of political war, but the operational autonomy of U.S. Steel (plant closures, production cuts, relocations, name changes, key personnel) is permanently shared with the US government. The US government obtained, for the first time, equity-level control over a foreign-acquired US-listed company. The USW obtained collective-bargaining inheritance and an investment-monitoring framework. No single winner, but a new instrument, the Golden Share, has been added to the CFIUS toolkit.",
    },
    priceImpact: {
      preContest: "~$22 (immediately before Cliffs proposal, July 2023)",
      peak: "~$55 (Dec 18, 2023 Nippon Steel agreement announcement)",
      postContest: "$55 cash consideration (Jun 18, 2025 closing, delisted)",
      note: "~$22 before Cliffs → ~$55 after Nippon Steel agreement → low $30s after Biden block → recovered to $55 after Trump NSA settlement → delisted on closing",
    },
  },

  dealStructure: {
    body: "The transaction is structured as a [reverse triangular merger], where a Nippon Steel US subsidiary merges with U.S. Steel, U.S. Steel shareholders receive $55 per share in cash, and U.S. Steel continues as a 100% subsidiary of NSC. Equity value at agreement signing approximately $14.9B, cash consideration net of debt approximately $14.1B. The distinguishing feature is not the closing itself but the conditions of closing. On June 13, 2025, President Trump's executive order made the deal conditional on a [National Security Agreement (NSA)], the core of which is a US-government [Golden Share] in U.S. Steel granting the US government permanent veto rights over major corporate decisions. Nippon Steel thus closed the acquisition, but shares operational autonomy with the US government in perpetuity.",
    preOwnership: {
      nodes: [
        { id: "x_public",  label: "U.S. Steel public shareholders",  sub: "100% publicly listed",          type: "public" },
        { id: "uss_pre",   label: "United States Steel",             sub: "NYSE: X · Pittsburgh HQ",       type: "target" },
      ],
      edges: [
        { from: "x_public", to: "uss_pre", label: "100% (publicly listed)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "nsc",       label: "Nippon Steel Corporation",  sub: "100% economic, TSE: 5401",          type: "acquirer" },
        { id: "usgov",     label: "US Government",             sub: "Golden Share (voting + veto)",      type: "entity" },
        { id: "uss_post",  label: "United States Steel",       sub: "100% NSC subsidiary, delisted",     type: "target" },
        { id: "usw",       label: "USW (United Steelworkers)", sub: "CBA inheritance + investment-monitoring", type: "entity" },
      ],
      edges: [
        { from: "nsc",    to: "uss_post", label: "100% common stock" },
        { from: "usgov",  to: "uss_post", label: "Golden Share (veto rights)" },
        { from: "usw",    to: "uss_post", label: "CBA · Investment monitoring" },
      ],
    },
    keyTerms: [
      { label: "Transaction form",            value: "Reverse triangular merger, all-cash",                                  accent: true },
      { label: "Per-share price",             value: "$55.00 all-cash",                                                      accent: true },
      { label: "Equity value",                value: "~$14.9B",                                                              accent: true },
      { label: "Cash consideration net of debt", value: "~$14.1B" ,                                                          accent: true },
      { label: "Premium to prior close",      value: "~+40% (vs. ~$39 close on Dec 15, 2023)" },
      { label: "Premium to Cleveland-Cliffs",  value: "+57% (vs. $35 cash/stock)" },
      { label: "Merger agreement signed",      value: "Dec 18, 2023" },
      { label: "Biden block",                  value: "Jan 3, 2025 (executive order)" },
      { label: "Trump approval executive order", value: "Jun 13, 2025" },
      { label: "Closing",                      value: "Jun 18, 2025",                                                        accent: true },
      { label: "US-government Golden Share",   value: "Held (codified in NSA)",                                              accent: true },
      { label: "Presidential board appointment", value: "1 of 3 designated directors appointable by US President" },
      { label: "Veto rights",                  value: "Plant closures, production cuts, HQ relocation, name change, key personnel, investment delays", accent: true },
      { label: "Investment commitment",        value: "~$11B by end-2028 within a $14B+ multi-year capital plan",            accent: true },
      { label: "Headquarters",                 value: "Pittsburgh, PA retained (codified in NSA)" },
      { label: "Board / CEO",                  value: "Majority US-citizen board + US-citizen CEO" },
    ],
  },

  advisors: {
    body: "This transaction combined a record allied-country acquisition with a CFIUS dispute, federal litigation, and a bespoke NSA negotiation. Both sides assembled two-track advisory teams, one for the M&A closing, one for the CFIUS, litigation, and NSA workstreams. Nippon Steel was advised by Citi (financial), with Ropes & Gray and Milbank as legal counsel and PJT Partners and Akin Gump as strategic and policy advisors. U.S. Steel was advised by Barclays, Goldman Sachs, and Evercore (financial), with Wachtell Lipton, Milbank, and Covington & Burling as legal counsel.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Nippon Steel (Acquirer)",
        initials: "NSC",
        bg: "bg-red-700",
        advisors: [
          { firm: "Citigroup Global Markets",        role: "Financial Advisor (sole lead)",   roleType: "financial", note: "All-cash acquisition financing structure and pricing" },
          { firm: "Ropes & Gray LLP",                role: "Legal Advisor (M&A lead)",         roleType: "legal",     note: "Merger agreement, CFIUS process lead, Biden executive order litigation" },
          { firm: "Milbank LLP",                     role: "Legal Advisor (Tokyo / regulatory)", roleType: "legal",   note: "Japanese capital, FX, and syndication advisory" },
          { firm: "PJT Partners",                    role: "Strategic Advisor",                roleType: "financial", note: "CFIUS negotiation and NSA structuring" },
          { firm: "Akin Gump Strauss Hauer & Feld",  role: "Policy and Political Advisor",      roleType: "other",    note: "Washington policy, CFIUS lobbying, stakeholder mapping" },
        ],
      },
      {
        side: "target",
        sideLabel: "U.S. Steel (Target)",
        initials: "X",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Barclays Capital",               role: "Financial Advisor",                roleType: "financial", note: "Joint financial advisor" },
          { firm: "Goldman Sachs & Co. LLC",        role: "Financial Advisor",                roleType: "financial", note: "Joint financial advisor, fairness opinion provider" },
          { firm: "Evercore",                       role: "Financial Advisor",                roleType: "financial", note: "Joint financial advisor, CFIUS process advisory" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "Legal Advisor (M&A lead)",         roleType: "legal",     note: "Board advisory, merger agreement, governance" },
          { firm: "Milbank LLP",                    role: "Legal Advisor",                    roleType: "legal",     note: "Cleveland-Cliffs proposal review, Nippon Steel negotiation support" },
          { firm: "Covington & Burling LLP",        role: "Legal Advisor (CFIUS lead)",       roleType: "legal",     note: "CFIUS review response, NSA negotiation" },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on the Jun 18, 2025 NSC and U.S. Steel press releases and supplementary coverage by The Global Legal Post and others.",
  },

  valuation: {
    body: "The valuation reflects three premiums stacked on top of one another, (i) the cyclical-peak earnings of the integrated steel industry, (ii) the price-discovery established by Cleveland-Cliffs' competing bid, and (iii) a strategic premium for Big River Steel's mini-mill assets and US-market access. At FY2022 adjusted EBITDA of ~$4.2B, the implied EV/EBITDA is ~3.4x, which looks low but reflects a cycle peak. On a normalized mid-cycle EBITDA of $2.0~2.5B, the more relevant multiple is approximately 6~7x. Versus Cleveland-Cliffs' $35 proposal, Nippon Steel paid +$20 per share to obtain (a) the optionality on Big River Steel's electric-arc decarbonization platform, (b) direct US market access at a moment of unusual capex-cycle alignment (IRA / CHIPS Act / EV / wind), and (c) a path around stagnating Japanese domestic demand.",
    rows: [
      { item: "Per-share price",                       val: "$55.00",          note: "All-cash, Dec 18, 2023 agreement",          accent: true },
      { item: "Equity value",                          val: "~$14.9B",          note: "$55 × ~271M shares",                         accent: true },
      { item: "Cash consideration net of debt",         val: "~$14.1B",          note: "EV proxy" },
      { item: "Prior close",                           val: "~$39",             note: "Dec 15, 2023 close, day before agreement" },
      { item: "Premium to prior close",                 val: "~+40%",            note: "$39 → $55" },
      { item: "Cleveland-Cliffs proposal",              val: "$35",             note: "Jul 28, 2023, $17.50 cash + 1.023 Cliffs" },
      { item: "Premium to Cleveland-Cliffs",            val: "+57%",            note: "+$20/share, record cash lock-in",            accent: true },
      { item: "FY2022 adjusted EBITDA",                 val: "~$4.2B",           note: "Cyclical peak" },
      { item: "EV / EBITDA (FY2022)",                   val: "~3.4x",            note: "$14.1B ÷ $4.2B" },
      { item: "EV / EBITDA (normalized mid-cycle)",      val: "~6~7x",            note: "Assuming $2.0~2.5B normalized EBITDA" },
      { item: "NSA investment commitment",              val: "~$11B by 2028",    note: "Within $14B+ multi-year capital plan",       accent: true },
    ],
    disclaimer: "Note: Valuation multiples are estimates derived from announcement-date disclosures and 10-K filings. NSA investment commitment figures are sourced from the June 13 executive order and the parties' closing press releases.",
  },

  rationale: {
    buyer: {
      title: "Nippon Steel, Why U.S. Steel at $55 in All-Cash",
      initials: "NSC",
      bg: "bg-red-700",
      points: [
        "[Direct US market access] Japanese domestic steel demand has been declining since the 2010s on demographics and slower auto production. Nippon Steel's global growth strategy required direct entry into a developed-market consumer of steel, and the US was uniquely positioned at the start of the IRA / CHIPS / EV / offshore wind capex cycle",
        "[Big River Steel mini-mill platform] U.S. Steel's 2021 full acquisition of Big River Steel in Arkansas added a modern electric-arc mini-mill, the decarbonization platform of the future. Nippon Steel's green-hydrogen DRI technology layered onto Big River's electric arc is a credible path to low-carbon US steel",
        "[Blocking Cleveland-Cliffs] $55 all-cash priced out Cleveland-Cliffs' hostile path entirely. Cliffs faced financing capacity constraints and significant antitrust exposure from a US integrated-steel consolidation",
        "[#4 to #3 globally] On a consolidated basis Nippon Steel's crude steel production rose to approximately 86 million tonnes, ranking it third globally behind China Baowu and ArcelorMittal. Scale economics and pricing power both improve",
        "[Eighteen months of political war absorbed] The Biden block, USW opposition, federal litigation, and NSA negotiation were all costs Nippon Steel was willing to absorb because the four strategic prizes above do not diminish. A judgment that long-term market position outweighs short-term reputational and procedural costs",
      ],
    },
    seller: {
      title: "U.S. Steel, Why Nippon Steel and Not Cleveland-Cliffs",
      initials: "X",
      bg: "bg-blue-800",
      points: [
        "[Price, simple and decisive] $55 all-cash versus Cleveland-Cliffs' $35 (cash plus stock). +57% gap. A board with fiduciary duty to shareholders could not return any other answer given that price differential",
        "[Cliffs' financing and antitrust risk] Cleveland-Cliffs' cash-plus-stock structure required shareholders to take Cliffs equity risk, and the antitrust profile of an integrated-steel consolidation created meaningful closing uncertainty. Nippon Steel's all-cash, complementary mini-mill profile resolved both concerns",
        "[USW CBA inheritance and investment commitments] Nippon Steel committed to inherit USW collective bargaining agreements and to invest in US assets, plus Pittsburgh HQ retention and US-citizen CEO / majority board. Not enough to neutralize USW opposition but sufficient to structure a negotiable framework",
        "[Legacy liability transfer] U.S. Steel's USW pension and healthcare obligations are a structural drag on integrated-steel economics. Nippon Steel's balance sheet capacity and global operating playbook can distribute that drag across the parent",
        "[Decarbonization capex funding] The capital required to transition Big River Steel and the integrated footprint to low-carbon steel is significant. Nippon Steel's global capital plus Japan-government green-transition subsidies expand the funding base",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Approximately one year post-closing. Nippon Steel has formally consolidated U.S. Steel, which has been delisted from the NYSE and operates as a 100% NSC subsidiary. The NSA Golden Share is held by the US government but has not yet been exercised, though its mere existence permanently constrains operational autonomy. Of the ~$11B investment commitment, roughly $2~3B is reported to have been deployed or contracted, with capex underway at Mon Valley Works, Gary Works, and Big River Steel. The USW CBA has been inherited under the negotiated framework, with an investment-monitoring mechanism. Cleveland-Cliffs is the unambiguous loser: CEO Lourenco Goncalves has publicly stated the deal will not be [\"resuscitated.\"] The market is actively debating whether the Golden Share model becomes the new template for allied-country FDI into US strategic assets.",
    overallVerdict: "Nominal winners: Nippon Steel and U.S. Steel shareholders. Substantive winner: the US government, now holding the first equity-level veto over a foreign-acquired US-listed company. A new structural template for allied-country FDI",
    positives: [
      "[Nippon Steel] Direct US market access, Big River Steel decarbonization platform, global #3 by crude steel output",
      "[U.S. Steel shareholders] $55 per share in cash realized, +57% over the Cleveland-Cliffs proposal",
      "[US government] Golden Share plus veto rights establishes a new instrument for managing allied-country FDI, likely to become a reference structure for future Japanese, Korean, Taiwanese, and European acquisitions of US strategic assets",
      "[USW] CBA inheritance, ~$11B new investment commitment, investment-monitoring authority",
      "[CFIUS process evolution] Movement from operational mitigation (security director boards, business segregation) to equity-level veto rights, a generational evolution of the mitigation toolkit",
    ],
    risks: [
      "[Nippon Steel operational autonomy permanently constrained] Plant closures, production cuts, relocations, name changes, and key personnel are all subject to US-government veto. Routine cyclical or rationalization decisions are now exposed to US political risk in perpetuity",
      "[Politicization of the Golden Share] Future US political cycles (2028 election and beyond) could weaponize the Golden Share as a tool for political pressure. Nippon Steel is now a hostage of US political continuity",
      "[Chilling effect on allied-country US FDI] The deal signals that even allied-country acquirers can be required to accept Golden Share structures. Risk of reducing Japanese, Korean, Taiwanese, and European appetite for acquiring US strategic assets",
      "[USW CBA versus investment commitments] If the ~$11B investment deployment falls short of USW expectations, labor disputes may resurface. The NSA does not cover all CBA scenarios",
      "[Authoritarian-state replication risk] The equity-level veto structure could be invoked by authoritarian states (China, Russia) to justify their own foreign-investment controls. A potential inflection point in global FDI liberalization",
    ],
    editorNote:
      "The real significance of this transaction is not that [\"Nippon Steel acquired U.S. Steel,\"] but that [\"the US government, for the first time, holds an equity-level veto over a foreign-acquired US-listed company.\"] The 1901 Morgan-Carnegie consolidation that founded American industrial power has passed under Japanese ownership, but with a permanent US-government control instrument layered on top. This is not the outcome of a single deal, it is the birth of a new rule in the age of state capitalism. Future Japanese, Korean, Taiwanese, and European acquisitions of US strategic assets will increasingly consider an NSA / Golden Share structure as part of the baseline option set. Reviewed as of May 2026.",
  },

  tombstone: {
    acquirerInitials: "NSC",
    acquirerBg: "bg-red-700",
    targetInitials: "X",
    targetBg: "bg-blue-800",
    acquirerName: "Nippon Steel Corporation",
    targetName: "United States Steel Corporation",
    dealTitle: "First-Ever US Government Golden Share, CFIUS Conditional Approval via NSA",
    dealSize: "$14.9B equity",
    dealSizeUSD: "$14.1B cash (post-debt)",
    evEbitda: "~3.4x FY2022 EBITDA (~6-7x normalized)",
    closeDate: "Jun 18, 2025",
  },

  sources: [
    { id: 1, text: "U.S. Steel Form 8-K, Final Closing Press Release with NSA Detail (Jun 18, 2025)", url: "https://www.sec.gov/Archives/edgar/data/0001163302/000110465925062586/tm2518973d1_8k.htm" },
    { id: 2, text: "Nippon Steel Corporation Official Press Release, Finalized Historic Partnership (Jun 18, 2025)", url: "https://www.nipponsteel.com/common/secure/en/news/20250618_100.pdf" },
    { id: 3, text: "White House Executive Order, Approval of Nippon Steel-US Steel Partnership (Jun 13, 2025)", url: "https://www.sec.gov/Archives/edgar/data/0001163302/000116330225000003/a99p1potusorder.htm" },
    { id: 4, text: "Wikipedia, Acquisition of U.S. Steel by Nippon Steel (Comprehensive Timeline)", url: "https://en.wikipedia.org/wiki/Acquisition_of_U.S._Steel_by_Nippon_Steel" },
    { id: 5, text: "USALI (US-Asia Law Institute), Timeline of Nippon Steel Acquiring U.S. Steel", url: "https://usali.org/nippon-steel/timeline" },
    { id: 6, text: "CSIS, Understanding Trump's Decision to Approve the Nippon Steel Deal", url: "https://www.csis.org/analysis/understanding-trumps-decision-approve-nippon-steel-deal" },
    { id: 7, text: "Fortune, Trump Clears Path for Nippon Steel Investment in US Steel with NSA (Jun 14, 2025)", url: "https://fortune.com/2025/06/14/trump-nippon-steel-investment-us-steel-national-security-agreement/" },
    { id: 8, text: "Council on Foreign Relations, The Nippon-US Steel Deal, A Golden Share, and Magic Beans", url: "https://www.cfr.org/articles/nippon-u-s-steel-deal-golden-share-and-magic-beans" },
    { id: 9, text: "Hunton AK, Nippon Steel Completes Acquisition of US Steel Under National Security Agreement", url: "https://www.hunton.com/insights/legal/nippon-steel-completes-acquisition-of-us-steel-under-national-security-agreement" },
    { id: 10, text: "Cleveland-Cliffs Form 8-K, Initial Hostile Proposal for U.S. Steel at $35/share (Aug 13, 2023)", url: "https://www.sec.gov/Archives/edgar/data/0000764065/000076406523000133/a202308138-kex991.htm" },
    { id: 11, text: "The Global Legal Post, Ropes & Gray, Milbank and Wachtell lead on $14.9bn US Steel acquisition", url: "https://www.globallegalpost.com/news/ropes-gray-milbank-and-wachtell-lead-on-149bn-us-steel-acquisition-2110882062" },
    { id: 12, text: "Mining.com, Trump Secures Golden Share as Nippon Steel Completes US Steel Takeover", url: "https://www.mining.com/trump-secures-golden-share-as-nippon-steel-completes-us-steel-takeover/" },
  ],

  seo: {
    title: "Nippon Steel × US Steel $14.9B, CFIUS Conditional Approval via Golden Share",
    description:
      "On Dec 18, 2023 Nippon Steel agreed to acquire U.S. Steel at $55 per share, ~$14.9B in equity value. Biden blocked the deal Jan 3, 2025. Trump's Jun 13, 2025 executive order conditioned approval on a National Security Agreement, including the first-ever US-government Golden Share over a foreign-acquired US listed company. Closed Jun 18, 2025. The new template for allied-country FDI into US strategic assets.",
    keywords: [
      "Nippon Steel US Steel",
      "Nippon Steel acquisition US Steel",
      "CFIUS Golden Share",
      "Golden Share US Steel",
      "National Security Agreement US Steel",
      "NSA US Steel",
      "Cleveland-Cliffs US Steel",
      "Biden CFIUS block",
      "Trump NSA executive order",
      "USW US Steel",
      "Foreign Direct Investment US",
      "Allied-country FDI CFIUS",
      "Section 721 Defense Production Act",
    ],
  },

  concepts: [
    {
      term: "CFIUS (Committee on Foreign Investment in the United States)",
      description: "Treasury-chaired interagency committee that reviews foreign acquisitions of US businesses for national security implications. Authority expanded by the 1988 Exon-Florio Amendment and the 2018 FIRRMA legislation. This transaction was the first to be blocked through CFIUS against an allied-country acquirer of a US-listed public company.",
    },
    {
      term: "Golden Share",
      description: "A special class of share issued separately from common stock, granting its holder veto rights over defined corporate decisions. In this deal, the US-government Golden Share in U.S. Steel grants permanent veto rights over plant closures, production cuts, relocations, name changes, and key personnel decisions. A new instrument for allied-country FDI control.",
    },
    {
      term: "National Security Agreement (NSA)",
      description: "A binding mitigation agreement entered into by the parties and the US government when CFIUS identifies national-security concerns in a transaction. Traditional NSAs cover security-cleared directors, business segregation, and information firewalls. This NSA goes further: it combines a Golden Share with investment commitments and governance provisions, the largest such agreement to date.",
    },
    {
      term: "Section 721 Defense Production Act",
      description: "The statutory basis for CFIUS authority and the provision under which the US President can block foreign acquisitions of US businesses for national-security reasons. Biden invoked it to block the deal in January 2025. Trump used a procedural reset of the same authority to authorize approval in June 2025.",
    },
    {
      term: "Mitigation Agreement",
      description: "The form of resolution when CFIUS identifies national-security concerns but stops short of blocking. Traditional mitigation has focused on operational measures, security-cleared directors, business segregation, information firewalls. This deal's NSA introduces an equity-level veto, expanding the mitigation toolkit into a new structural dimension.",
    },
    {
      term: "USW (United Steelworkers)",
      description: "The largest industrial union in North America, representing ~850,000 workers in steel, mining, paper, and rubber industries. President David McCall. USW's opposition to foreign ownership and its pre-endorsement of Cleveland-Cliffs were the key variables that politicized the CFIUS review of this transaction.",
    },
    {
      term: "Cleveland-Cliffs Failed Bid",
      description: "In July 2023, Cleveland-Cliffs proposed $35 per share ($17.50 cash plus 1.023 Cliffs shares, ~$7.3B) to acquire U.S. Steel. The board rejected the proposal as [\"unreasonable\"], and Nippon Steel's higher $55 all-cash bid won the deal. Cliffs had USW pre-endorsement, which contributed to the political profile of the eventual cross-border transaction.",
    },
    {
      term: "Foreign Direct Investment (FDI) Screening",
      description: "Pre-transaction national-security review of foreign acquisitions of strategic domestic assets. United States: CFIUS. EU: member-state regimes plus the 2020 EU FDI screening regulation. Japan: Foreign Exchange and Foreign Trade Act. South Korea: Industrial Technology Protection Act. This transaction signals that allied-country FDI may now require Golden Share structures, an inflection point in global FDI liberalization.",
    },
  ],

  faq: [
    {
      q: "At what price did Nippon Steel ultimately acquire U.S. Steel?",
      a: "Nippon Steel acquired U.S. Steel at $55 per share in all-cash, agreed on Dec 18, 2023, with equity value of approximately $14.9B (~$14.1B in cash consideration net of debt). The agreed price held constant through closing on Jun 18, 2025. That represented a +57% premium to Cleveland-Cliffs' $35 cash-plus-stock proposal and approximately +40% over the prior close (~$39 on Dec 15, 2023). Record all-cash pricing.",
    },
    {
      q: "Why did President Biden block an acquisition by an allied-country (Japanese) acquirer?",
      a: "The stated rationale was national-security concerns, but market consensus reads the substantive driver as political. With the 2024 presidential election turning on Pennsylvania, Indiana, and Minnesota, the USW vote in those states was decisive, and both major candidates (Biden, Trump) had publicly committed to blocking the deal. CFIUS itself failed to reach internal consensus through December 2024 and referred the decision to President Biden, who signed the blocking executive order on Jan 3, 2025, seventeen days before leaving office. It was the first time an allied-country acquisition of a US-listed public company was blocked through CFIUS authority.",
    },
    {
      q: "How did the Trump administration reverse the Biden block?",
      a: "The Trump administration did not reverse the Biden executive order directly. It used a procedural workaround. On Apr 7, 2025, President Trump ordered CFIUS to conduct a fresh 45-day de novo national-security review. CFIUS submitted confidential recommendations to the White House on May 21. On Jun 13, Trump signed an executive order approving the transaction conditional on a National Security Agreement (NSA). Closing followed on Jun 18. The decisive element is the NSA's codification of a US-government Golden Share, the first equity-level veto held by the US government over a foreign-acquired US-listed company.",
    },
    {
      q: "What specifically does the US-government Golden Share grant?",
      a: "The NSA codifies the following: (i) US-government veto rights over plant closures, production cuts, and relocations, (ii) veto over name changes for U.S. Steel, (iii) veto over Pittsburgh headquarters relocation, (iv) veto over delays to or reductions in the committed investments, (v) veto over key personnel changes including the CEO, (vi) veto over major asset sales or rationalization decisions. The US president also has the right to appoint one of three designated directors. Combined with majority US-citizen board and US-citizen CEO requirements, this is the first time the US government has held equity-level rather than operational-level control over a foreign-acquired US-listed company.",
    },
    {
      q: "Why did Cleveland-Cliffs lose?",
      a: "Two reasons. First, the price gap. Cleveland-Cliffs offered $35 ($17.50 cash plus 1.023 Cliffs shares) versus Nippon Steel's $55 all-cash, a +57% gap a fiduciary board could not justify rejecting in favor of the lower bid. Second, closing risk. Cleveland-Cliffs' cash-plus-stock structure required shareholders to take Cliffs equity risk, and the antitrust profile of an integrated-steel consolidation created closing uncertainty. Nippon Steel's all-cash, complementary mini-mill profile resolved both. Cliffs CEO Lourenco Goncalves has stated the deal will not be [\"resuscitated.\"]",
    },
    {
      q: "What does this deal mean for future Japanese, Korean, and European acquisitions of US strategic assets?",
      a: "Two opposing signals run side by side. The constructive read is that the Trump administration designed a settlement structure that lets allied-country acquisitions close in the face of political opposition. The cautious read is that even allied-country acquirers may now be required to accept Golden Share structures, meaning permanent surrender of operational autonomy. Japanese government commentary has treated the NSA as a workable template; Korean, Taiwanese, and European industrial commentary has been notably more reserved. Future Japanese acquisitions of US semiconductor, pharma, and power assets, and Korean and Taiwanese acquisitions of US strategic infrastructure, are likely to evaluate NSA / Golden Share structures as part of the baseline option set.",
    },
  ],
};

export default deal;
