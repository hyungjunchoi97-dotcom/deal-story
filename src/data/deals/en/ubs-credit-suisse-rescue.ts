import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "ubs-credit-suisse-rescue",
  title: "The Weekend Switzerland Forced UBS to Buy Credit Suisse",
  subtitle: "March 19, 2023 Government-Brokered Rescue Merger · CHF 3.25B Stock Swap · CHF 16B AT1 Wipeout · End of a 167-Year Investment Bank",
  category: "ma",
  industry: "Banking / Financial Services / Crisis",
  country: "Switzerland",
  announcedAt: "2023-03-19",
  closedAt: "2023-06-12",
  announcedDisplay: "March 19, 2023",
  closedDisplay: "June 12, 2023",
  readingMinutes: 13,
  tags: [
    "UBS",
    "Credit Suisse",
    "forced merger",
    "Swiss banking crisis",
    "AT1",
    "CoCo bonds",
    "FINMA",
    "Swiss National Bank",
    "Too Big to Fail",
    "weekend negotiation",
  ],
  excerpt:
    "On Sunday evening, March 19, 2023, the Swiss government concluded a 72-hour weekend negotiation that forced UBS to acquire Credit Suisse for CHF 3.25 billion (approximately $3.5 billion) in stock. A 167-year-old global investment bank disappeared in a week. More consequentially, FINMA wrote down CHF 16 billion (approximately $17 billion) of Credit Suisse's Additional Tier 1 (AT1) bonds to zero ahead of equity holders — an unprecedented inversion of capital-structure seniority that triggered a $250 billion repricing of the global AT1 market and emergency statements from the ECB and Bank of England.",

  // ── Company icons ─────────────────────────────────────────────
  acquirer: { initials: "UBS", bg: "bg-red-600",   label: "UBS Group AG" },
  target:   { initials: "CS",  bg: "bg-slate-800", label: "Credit Suisse" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Founded in 1856 by Alfred Escher to finance Swiss railway construction, Credit Suisse spent 167 years building itself into Switzerland's second-largest global investment bank — with CHF 530 billion in assets at year-end 2022, approximately 50,000 employees across 50 countries, and CHF 1.3 trillion in wealth-management AUM. It was one of just 30 globally systemically important banks (G-SIBs). But from 2021 onward, a series of scandals shredded its franchise. The Archegos Capital implosion cost it $5.5 billion (March 2021). Greensill Capital's supply-chain finance funds collapsed with more than $10 billion in losses (March 2021). The Mozambique 'tuna bond' fraud produced a $475 million penalty (October 2021). The Suisse Secrets data leak (February 2022) exposed Credit Suisse's historical client base for international scrutiny.",
    "FY2022 was catastrophic: a net loss of CHF 7.3 billion and CHF 123 billion in wealth-management net outflows as clients fled. In October 2022, a social-media rumor that Credit Suisse was about to fail spiked its short-term funding costs. In November, Saudi National Bank invested CHF 1.5 billion for a 9.9% stake — but Saudi National Bank simultaneously committed to remain below 10%, foreclosing further capital injections.",
    "On March 15, 2023, Saudi National Bank's chairman Ammar Al Khudairy gave a Bloomberg television interview and stated bluntly: 'We are not going to put in additional capital. If we cross 10%, all sorts of regulatory burdens kick in.' Credit Suisse shares collapsed 24% the same day to CHF 1.86, an all-time low. The five-year credit default swap spread blew past 1,000 basis points, pricing in near-certain default. That evening, the Swiss National Bank announced an emergency liquidity line of up to CHF 50 billion. The next day's market response: liquidity could not solve a confidence crisis.",
    "From Friday evening, March 17, through Sunday evening, March 19, a five-way negotiation between the Swiss Finance Ministry, FINMA (the Swiss financial regulator), the Swiss National Bank, UBS, and Credit Suisse unfolded in Bern and Zurich. UBS opened at CHF 1 billion. Credit Suisse demanded CHF 7 billion or more. By Sunday evening, the deal had been forced into a single unprecedented package: a CHF 3 billion stock-only consideration, a CHF 9 billion federal loss-protection backstop, an additional CHF 100 billion in Swiss National Bank liquidity, and the full write-down of Credit Suisse's CHF 16 billion AT1 bonds to zero. To bypass a shareholder vote that neither side could afford, the Swiss Federal Council invoked emergency executive powers and passed a weekend ordinance. At 7 p.m. on Sunday, March 19, Swiss President Alain Berset, Finance Minister Karin Keller-Sutter, the chair of FINMA, and the president of the Swiss National Bank announced the deal jointly: 'This is not a bailout. This is a commercial solution.'",
    "The transaction closed legally on June 12, 2023. By the third quarter of 2023, UBS had voluntarily terminated both the federal loss-protection guarantee and the additional Swiss National Bank liquidity facility — stabilizing the franchise far faster than markets had expected. Post-integration, UBS commanded roughly CHF 1.6 trillion in assets, approximately 120,000 employees, and global wealth-management AUM of approximately $5.7 trillion, making it one of the world's largest wealth managers. AT1 bondholders led by Pimco, Invesco, and Lazard Asset Management filed dozens of lawsuits against FINMA across 2024 and 2025; several remain pending in Swiss courts as of 2026.",
  ],

  // ── Deal summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "CHF 3.25 billion (CHF 3.0B equity + CHF 9.0B loss-protection backstop separately committed)",
    acquirerName: "UBS Group AG",
    targetName: "Credit Suisse Group AG",
    announcedDisplay: "March 19, 2023 (Sunday)",
    closedDisplay: "June 12, 2023",
    country: "Switzerland",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "The chairman of Credit Suisse's largest shareholder publicly refused further capital on March 15, 2023; the stock fell 24% in one session and credit default swap spreads crossed 1,000 basis points. The confidence collapse ran its course in four days.",
    "Swiss authorities engineered a 72-hour weekend negotiation. UBS agreed to acquire Credit Suisse for CHF 3 billion in stock (one UBS share for every 22.48 Credit Suisse shares; approximately $3.5 billion total).",
    "FINMA wrote down all CHF 16 billion (approximately $17 billion) of Credit Suisse's AT1 bonds to zero while preserving CHF 3 billion of equity value — the largest forced inversion of bondholder versus equity seniority in modern G-SIB history.",
    "Shareholder votes at both UBS and Credit Suisse were waived through emergency executive ordinance passed by the Swiss Federal Council over the weekend — a near-unprecedented use of constitutional emergency powers in a commercial transaction.",
    "Government backstop: CHF 100 billion (~$109 billion) in additional Swiss National Bank liquidity, a CHF 9 billion (~$9.8 billion) federal loss-protection guarantee, and the CHF 50 billion emergency liquidity line announced the prior week.",
    "Global spillover: the $250 billion AT1 market repriced sharply, with average prices down roughly 10 points before stabilizing. The ECB and Bank of England issued joint statements within 24 hours affirming that, in their jurisdictions, AT1 bondholders rank above equity holders — explicitly distancing themselves from the Swiss approach.",
    "Post-deal: UBS terminated both the federal loss-protection backstop and the additional Swiss National Bank liquidity facility by the third quarter of 2023, much faster than expected. The combined wealth-management franchise of approximately $5.7 trillion makes UBS one of the largest wealth managers in the world.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "The March 2023 global banking stress began with three U.S. regional bank failures (Silicon Valley Bank, Signature, First Republic) and migrated within nine days to a Swiss G-SIB. The Swiss banking system held approximately five times the country's GDP in assets — one of the most over-banked structures in the developed world. The failure of Credit Suisse threatened to translate directly into a sovereign credit shock, given that UBS and Credit Suisse together accounted for roughly 60% of Swiss banking assets while competing head-to-head across wealth management, investment banking, and trading.",
    metrics: [
      { label: "Credit Suisse total assets (year-end 2022)",   value: "CHF 530bn",   sub: "One of 30 G-SIBs globally" },
      { label: "Credit Suisse employees",                       value: "~50,000",     sub: "Across 50 countries" },
      { label: "Credit Suisse wealth-management AUM",          value: "CHF 1.3T",    sub: "Year-end 2022" },
      { label: "Swiss banking assets / GDP",                    value: "~5×",         sub: "UBS + CS combined ~3×" },
    ],
    subBody:
      "The global Additional Tier 1 (AT1) bond market was roughly $250 billion in size at the time of the deal. AT1s are contingent convertible (CoCo) instruments that automatically write down or convert to equity when an issuer's capital ratio falls below a contractual threshold. European banks issued AT1s heavily after Basel III took effect in 2014, typically at coupons of 6–9%, and they had become a staple holding for institutional investors such as Pimco, Invesco, Lazard Asset Management, and BlackRock. Wiping out AT1 holders ahead of equity holders broke the established assumption that AT1s sit above equity in the capital-structure waterfall.",
    players: [
      { name: "UBS Group AG",                role: "Forced acquirer; absorbed Credit Suisse via CHF 3B stock swap" },
      { name: "Credit Suisse Group AG",      role: "Target; 167-year-old Swiss G-SIB" },
      { name: "Swiss Federal Council (Karin Keller-Sutter, Finance Minister)", role: "Invoked emergency powers; provided CHF 9B loss-protection guarantee" },
      { name: "FINMA",                        role: "Swiss financial regulator; ordered the AT1 write-down" },
      { name: "Swiss National Bank (SNB)",   role: "Provided CHF 150B in liquidity facilities (CHF 50B + CHF 100B)" },
      { name: "Saudi National Bank",         role: "Largest CS shareholder (9.9%); chairman's TV statement triggered the run" },
      { name: "AT1 bondholders (Pimco, Invesco, Lazard et al.)", role: "Lost CHF 16B in writedowns; filed lawsuits 2024–2025" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Credit Suisse Group AG",
    body: "Credit Suisse was founded in Zurich in 1856 by Alfred Escher to finance Swiss railway construction. Its four core divisions in its final form were Wealth Management (global private banking), Investment Bank (M&A, capital markets, trading), Swiss Bank (Swiss retail and corporate banking), and Asset Management. At its 2007 peak the franchise carried a market capitalization north of CHF 100 billion. It never fully recovered from the 2008 financial crisis, and from 2019 onward a cascade of scandals — Archegos, Greensill, Mozambique, Suisse Secrets — eroded both client trust and management credibility beyond repair.",
    metrics: [
      { label: "Founded",                              value: "1856",            sub: "Zurich; Alfred Escher" },
      { label: "Total assets (year-end 2022)",         value: "CHF 530bn",        sub: "Down 36% from FY2018 peak" },
      { label: "Employees",                            value: "~50,000",          sub: "Across 50 countries" },
      { label: "Wealth-management AUM",                value: "CHF 1.3T",         sub: "Top-5 globally" },
      { label: "FY2022 net loss",                      value: "CHF 7.3bn",        sub: "Fifth consecutive annual loss" },
      { label: "2022 wealth-management net outflows",  value: "CHF 123bn",        sub: "Client confidence collapse" },
      { label: "Pre-crisis market cap (Mar 10, 2023)", value: "~CHF 8bn",         sub: "Down 92% from 2007 peak" },
      { label: "Final equity consideration",           value: "CHF 3bn (stock)", sub: "~60% discount to pre-crisis cap" },
    ],
    financials: [
      { year: "FY2018", revenue: 20920, cogs: 12100, grossProfit: 8820, sga: 8050, operatingIncome: 770,    ebitda: 1500  },
      { year: "FY2019", revenue: 22480, cogs: 13050, grossProfit: 9430, sga: 8520, operatingIncome: 910,    ebitda: 1680  },
      { year: "FY2020", revenue: 22390, cogs: 13900, grossProfit: 8490, sga: 8350, operatingIncome: 140,    ebitda: 850   },
      { year: "FY2021", revenue: 22696, cogs: 16830, grossProfit: 5866, sga: 8740, operatingIncome: -2874,  ebitda: -2100 },
      { year: "FY2022", revenue: 14921, cogs: 15580, grossProfit: -659, sga: 7100, operatingIncome: -7759,  ebitda: -7000 },
    ],
    financialsNote: "Unit: CHF million | IFRS consolidated | Source: Credit Suisse Annual Reports FY2018–2022. FY2021 reflects the $5.5B Archegos loss and Greensill provisions. FY2022 reflects CHF 123B in wealth-management net outflows and accelerated restructuring charges, producing the largest annual loss in the bank's history.",
    financialsCurrency: "CHF",
    financialsUnit: "mn",
  },

  // ── Control Battle Overview (Multi-party rescue) ─────────────
  controlBattleOverview: {
    body: "This was not a conventional M&A transaction but a four-way collision among the Swiss government, UBS, the Credit Suisse board, and AT1 bondholders, played out across 72 hours of weekend negotiation. Credit Suisse management wanted independence or a standalone government rescue. UBS wanted the lowest possible price plus a robust government backstop. The Swiss authorities wanted to avert a sovereign credit crisis without writing a large taxpayer check. AT1 bondholders wanted the standard capital-structure waterfall preserved. The outcome was a decisive victory for the UBS–government alliance: Credit Suisse independence ended, AT1 holders were wiped out, and equity holders received CHF 0.76 per share.",
    catalyst:
      "On March 15, 2023, the chairman of Saudi National Bank publicly refused further capital on Bloomberg television. Credit Suisse shares fell 24% in one session and credit default swap spreads crossed 1,000 basis points, putting the bank four days from a disorderly failure.",
    attackerLabel: "UBS + Swiss government (FINMA, SNB, Finance Ministry)",
    defenderLabel: "Credit Suisse independence (lost)",
    battleMoves: [
      {
        date: "2023-03-15",
        actor: "Saudi National Bank (Chairman Ammar Al Khudairy)",
        side: "neutral",
        move: "Public refusal of additional capital on Bloomberg TV",
        detail: "The largest shareholder (9.9%) publicly closed the door on further support. Markets read it as the disappearance of the last capital backstop.",
        financialImpact: "CS stock −24% to CHF 1.86; CDS through 1,000bp",
        weapon: "Public statement (confidence destruction)",
      },
      {
        date: "2023-03-15",
        actor: "Swiss National Bank",
        side: "defense",
        move: "Emergency liquidity facility up to CHF 50 billion announced",
        detail: "Evening of the same day, the SNB committed up to CHF 50 billion of liquidity to Credit Suisse. The next session, markets concluded that liquidity could not address a confidence problem.",
        financialImpact: "CS stock −8% the following day",
        weapon: "Central-bank emergency liquidity facility",
      },
      {
        date: "2023-03-17",
        actor: "Swiss Finance Ministry + FINMA",
        side: "attack",
        move: "Forced opening of UBS–CS negotiations (Friday evening)",
        detail: "Finance Minister Karin Keller-Sutter summoned UBS CEO Ralph Hamers and Credit Suisse CEO Ulrich Körner to Bern simultaneously, communicating that a transaction had to be reached by Sunday or the bank would not open on Monday.",
        weapon: "Government pressure plus hard deadline",
      },
      {
        date: "2023-03-18",
        actor: "UBS board (Chair Colm Kelleher)",
        side: "attack",
        move: "Initial CHF 1B offer plus demand for government guarantees",
        detail: "UBS argued that Credit Suisse's Zurich headquarters alone was worth CHF 3 billion and demanded a loss-protection backstop in excess of CHF 10 billion. CS countered at CHF 7 billion or more. Negotiations nearly broke down before dawn on Saturday.",
        financialImpact: "Negotiation gap of CHF 6B between sides",
        weapon: "Buyer-side price compression plus government backstop demand",
      },
      {
        date: "2023-03-19",
        actor: "Swiss Federal Council (Emergency Ordinance)",
        side: "attack",
        move: "Shareholder votes at both companies waived by ordinance",
        detail: "On Sunday morning the Federal Council invoked emergency executive powers to pass an ordinance waiving the shareholder vote at both UBS and Credit Suisse — a near-unprecedented application of constitutional emergency powers in a commercial transaction. UBS and Credit Suisse shareholders had no procedural way to block the deal.",
        weapon: "Emergency executive ordinance (Notrecht)",
      },
      {
        date: "2023-03-19",
        actor: "FINMA",
        side: "attack",
        move: "Full write-down of CHF 16B AT1 bonds to zero",
        detail: "Sunday evening, FINMA ordered the full write-down of Credit Suisse's AT1 (Additional Tier 1) bonds. Equity (CHF 3 billion) survived but the subordinated bonds were extinguished — an inversion of the conventional capital-structure waterfall. The maneuver simultaneously reduced UBS's acquisition burden and absorbed CHF 16 billion of losses on the Credit Suisse balance sheet.",
        financialImpact: "AT1 holders lost CHF 16B (~$17B); global AT1 market down ~10pt within 24 hours",
        weapon: "AT1 viability-event trigger (FINMA discretion)",
      },
    ],
    financialWeapons: [
      {
        name: "SNB liquidity facilities (CHF 150B aggregate)",
        side: "defense",
        usedBy: "Swiss National Bank",
        description: "CHF 50 billion emergency line announced March 15, plus an additional CHF 100 billion facility post-deal. Stopped the funding run but could not address the underlying confidence collapse.",
        effectiveness: "effective",
      },
      {
        name: "Emergency executive ordinance (Notrecht)",
        side: "attack",
        usedBy: "Swiss Federal Council + Parliament",
        description: "Weekend ordinance waiving shareholder votes at both UBS and Credit Suisse — eliminating closing-condition risk and any avenue for shareholders to block the deal. A near-unprecedented application of constitutional emergency powers.",
        effectiveness: "decisive",
      },
      {
        name: "AT1 full write-down (CHF 16B)",
        side: "attack",
        usedBy: "FINMA",
        description: "Wrote down subordinated AT1 bonds to zero ahead of equity, absorbing CHF 16 billion of losses on the Credit Suisse balance sheet. Reduced UBS's effective acquisition cost while inverting the conventional capital-structure waterfall.",
        effectiveness: "decisive",
      },
      {
        name: "Stock-only consideration",
        side: "attack",
        usedBy: "UBS",
        description: "No cash changed hands. Credit Suisse holders received one UBS share for every 22.48 Credit Suisse shares — a pure stock swap that preserved UBS's capital position.",
        effectiveness: "effective",
      },
      {
        name: "Federal loss-protection guarantee (CHF 9B)",
        side: "attack",
        usedBy: "Swiss Confederation",
        description: "A sandwich structure on losses from Credit Suisse legacy asset wind-down: UBS bore the first CHF 5 billion, the Confederation the next CHF 9 billion, and UBS again above that. Hedged the integration risk for UBS.",
        effectiveness: "effective",
      },
      {
        name: "Public statement (Saudi National Bank chairman)",
        side: "neutral",
        usedBy: "Saudi National Bank",
        description: "The largest shareholder's televised refusal of further capital was the immediate trigger of the bank run. Markets interpreted it as the disappearance of the last private-capital backstop, and the failure trajectory crystallized within four days.",
        effectiveness: "backfired",
      },
    ],
    turningPoint: {
      date: "Sunday evening, March 19, 2023",
      event: "FINMA's full AT1 write-down decision combined with UBS's acceptance of CHF 3B equity consideration",
      detail:
        "Wiping out CHF 16 billion of AT1 bonds simultaneously reduced UBS's acquisition burden and absorbed losses on the Credit Suisse balance sheet. With that combination, UBS agreed to the CHF 3 billion stock swap, and the deal was announced at 7 p.m. by the Swiss president, finance minister, FINMA chair, and SNB president jointly. Credit Suisse independence ended; the 167-year-old franchise was retired.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "UBS + Swiss government",
      margin: "Decisive",
      note:
        "UBS absorbed a G-SIB competitor without spending a single Swiss franc in cash, emerging with wealth-management AUM of roughly $5.7 trillion. The Swiss authorities avoided both a sovereign credit shock and a direct taxpayer outlay. Credit Suisse shareholders received roughly CHF 0.76 per share (CHF 3 billion total). AT1 bondholders lost CHF 16 billion in full.",
    },
    priceImpact: {
      preContest: "CHF 2.45 (March 10, 2023 close)",
      peak: "CHF 1.86 (March 15, 2023; after Saudi statement)",
      postContest: "CHF 0.76 (March 20, 2023; after deal announcement)",
      note:
        "Pre-crisis market capitalization of approximately CHF 8 billion compressed to a CHF 3 billion deal price — about a 60% haircut. AT1 bonds went from CHF 16 billion notional to zero instantly. UBS stock opened −7% on March 20 but closed the week up 5%.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "The deal stacked five interlocking elements: a CHF 3 billion stock-only consideration from UBS, a CHF 16 billion AT1 write-down ordered by FINMA, an additional CHF 100 billion liquidity facility from the Swiss National Bank, a CHF 9 billion federal loss-protection guarantee, and an emergency ordinance waiving shareholder votes at both companies. UBS paid no cash. Credit Suisse shareholders received one UBS share for every 22.48 Credit Suisse shares (approximately CHF 0.76 per share). AT1 bondholders received nothing. The Swiss National Bank and the Confederation provided the safety net.",
    preOwnership: {
      nodes: [
        { id: "saudi_pre", label: "Saudi National Bank",         sub: "~9.9% (largest shareholder)",     type: "entity" },
        { id: "qia_pre",   label: "Qatar Investment Authority",  sub: "~5%",                              type: "entity" },
        { id: "olayan",    label: "Olayan Group",                sub: "~3%",                              type: "entity" },
        { id: "free_pre",  label: "Public float",                sub: "~82.1%",                            type: "public" },
        { id: "cs_pre",    label: "Credit Suisse",               sub: "Independent G-SIB",                 type: "target" },
        { id: "at1_pre",   label: "AT1 bonds (CHF 16B)",         sub: "Pimco, Invesco, Lazard et al.",     type: "fund" },
      ],
      edges: [
        { from: "saudi_pre", to: "cs_pre", label: "9.9%" },
        { from: "qia_pre",   to: "cs_pre", label: "5%" },
        { from: "olayan",    to: "cs_pre", label: "3%" },
        { from: "free_pre",  to: "cs_pre", label: "82.1%" },
        { from: "at1_pre",   to: "cs_pre", label: "Subordinated AT1 CHF 16B" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ubs",        label: "UBS Group AG",        sub: "Post-integration assets ~CHF 1.6T",    type: "acquirer" },
        { id: "cs_post",    label: "Credit Suisse",       sub: "Wholly-owned UBS subsidiary",          type: "target" },
        { id: "at1_post",   label: "AT1 bondholders",     sub: "CHF 16B written down to zero",         type: "fund" },
        { id: "snb_post",   label: "Swiss National Bank", sub: "Additional liquidity CHF 100B",        type: "fund" },
        { id: "gov_post",   label: "Swiss Confederation", sub: "Loss-protection guarantee CHF 9B",      type: "fund" },
      ],
      edges: [
        { from: "ubs",      to: "cs_post",  label: "CHF 3B stock swap (1:22.48)" },
        { from: "at1_post", to: "cs_post",  label: "Full write-down (CHF 16B to 0)" },
        { from: "snb_post", to: "ubs",      label: "Liquidity facility CHF 100B" },
        { from: "gov_post", to: "ubs",      label: "Loss-protection backstop CHF 9B" },
      ],
    },
    keyTerms: [
      { label: "Final deal value",            value: "CHF 3.25B (approx. $3.5B)", accent: true },
      { label: "Consideration form",          value: "100% stock swap (no cash)",  accent: true },
      { label: "Exchange ratio",              value: "1 UBS share per 22.48 CS shares" },
      { label: "AT1 treatment",               value: "CHF 16B written down to zero", accent: true },
      { label: "Shareholder vote",            value: "Waived by emergency ordinance" },
      { label: "SNB liquidity",               value: "CHF 50B (Mar 15) + additional CHF 100B (Mar 19)" },
      { label: "Federal loss-protection",     value: "CHF 9B (after UBS's first CHF 5B)" },
      { label: "Announcement",                value: "March 19, 2023, 7 p.m." },
      { label: "Legal close",                 value: "June 12, 2023" },
      { label: "Combined assets post-deal",   value: "~CHF 1.6 trillion" },
      { label: "Combined wealth-mgmt AUM",    value: "~$5.7 trillion (top of global ranks)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "This was a 72-hour crisis transaction, so the conventional M&A advisory process was compressed dramatically. Government, central bank, and regulator effectively acted as deal brokers and enforced the timetable. The financial and legal advisors on each side focused on price negotiation and position defense.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "UBS Group AG",
        initials: "UBS",
        bg: "bg-red-600",
        advisors: [
          {
            firm: "Morgan Stanley",
            role: "Lead financial advisor",
            roleType: "financial",
            note: "Led pricing, valuation, and structuring of the federal loss-protection guarantee for UBS.",
          },
          {
            firm: "JPMorgan",
            role: "Co-lead financial advisor",
            roleType: "financial",
            note: "Joint advisor with Morgan Stanley; focused on investment-bank legacy wind-down scenarios and legal-liability assessment.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "International legal counsel",
            roleType: "legal",
            note: "Handled U.S. and international legal aspects, including coordination with the SEC, DOJ, and the Federal Reserve. A leading firm in emergency cross-border bank transactions.",
          },
          {
            firm: "Homburger",
            role: "Swiss legal counsel",
            roleType: "legal",
            note: "Led Swiss legal workstream, including engagement with FINMA, the SNB, and the Finance Ministry, and analysis of the emergency ordinance.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Credit Suisse Group AG",
        initials: "CS",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "Centerview Partners",
            role: "Lead financial advisor",
            roleType: "financial",
            note: "Veteran rescue-deal advisor. Pushed for a price above CHF 7 billion but was ultimately constrained by government pressure into accepting CHF 3 billion.",
          },
          {
            firm: "Rothschild & Co",
            role: "Co-lead financial advisor",
            roleType: "financial",
            note: "Joint advisor with Centerview; deep European crisis-deal experience.",
          },
          {
            firm: "Cravath, Swaine & Moore",
            role: "International legal counsel",
            roleType: "legal",
            note: "U.S. and international legal counsel; assessed AT1 treatment and U.S. shareholder-litigation exposure.",
          },
          {
            firm: "Lenz & Staehelin",
            role: "Swiss legal counsel",
            roleType: "legal",
            note: "Advised the Credit Suisse board on fiduciary duties and the application of the emergency ordinance to the merger.",
          },
        ],
      },
    ],
    disclaimer:
      "Note: Advisor information is drawn from SEC Form 8-K filings, FINMA announcements, and media reporting. The Swiss Confederation, FINMA, and the SNB were represented by their own internal teams without external advisors. Given the weekend timetable, some engagements were formalized retroactively.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Conventional valuation frameworks did not apply. Credit Suisse's IFRS book equity at year-end 2022 was approximately CHF 45 billion. The market valued the franchise at roughly CHF 8 billion the prior week, and the realized deal value was CHF 3 billion — about 7% of book. The real negotiating axis was not intrinsic value but the gap between a deal price and the alternative of an outright failure on Monday morning. UBS opened at CHF 1 billion; Credit Suisse demanded CHF 7 billion or more; both numbers were proxies for the intensity of government pressure either side could absorb.",
    rows: [
      { item: "Book equity (FY2022 IFRS)",                       val: "~CHF 45B",   note: "Assets less liabilities" },
      { item: "Pre-crisis market cap (Mar 10, 2023)",            val: "~CHF 8B",    note: "Already near multi-decade low" },
      { item: "Market cap after Saudi statement (Mar 15)",       val: "~CHF 6B",    note: "Single-day −24%" },
      { item: "UBS initial offer",                                val: "CHF 1B",     note: "Demanded broad government backstop", accent: true },
      { item: "CS counter-offer",                                 val: "CHF 7B+",    note: "Roughly 16% of book equity" },
      { item: "Final consideration",                              val: "CHF 3.25B",  note: "Stock swap, 1:22.48",          accent: true },
      { item: "Discount to pre-crisis market cap",                val: "~−60%",      note: "CHF 8B to CHF 3B" },
      { item: "AT1 write-down",                                   val: "CHF 16B",    note: "5× the size of equity consideration", accent: true },
      { item: "Government safety net (backstop + liquidity)",     val: "CHF 109B",   note: "CHF 9B + CHF 100B"      },
      { item: "Combined post-deal wealth-mgmt AUM",               val: "~$5.7T",     note: "Among the world's largest" },
    ],
    disclaimer:
      "Note: Book equity reflects FY2022 IFRS reported figures. UBS equity consideration is calculated on UBS's closing price on the announcement date. Government commitments are committed amounts; UBS terminated both the federal loss-protection guarantee and the additional SNB liquidity facility in the third quarter of 2023, well before they were drawn in full.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why did UBS take this on?",
      initials: "UBS",
      bg: "bg-red-600",
      points: [
        "Government pressure and G-SIB responsibility: Finance Minister Karin Keller-Sutter told the UBS board that without a deal by Monday, Credit Suisse would fail and Switzerland would face a sovereign credit shock. UBS could not credibly refuse.",
        "Stock-only consideration: UBS absorbed a CHF 530 billion G-SIB without spending a single franc in cash, using only its own shares.",
        "Government safety net: a CHF 9 billion federal loss-protection guarantee plus CHF 100 billion of additional SNB liquidity effectively hedged the integration risk on Credit Suisse's legacy assets.",
        "Global wealth-management leadership: combined wealth-management AUM of approximately $5.7 trillion made UBS one of the largest wealth managers in the world, ahead of Morgan Stanley and Bank of America Merrill Lynch on certain measures.",
        "Permanent removal of a head-to-head competitor in Swiss investment banking, wealth management, and trading.",
      ],
    },
    seller: {
      title: "Why did the Credit Suisse board accept?",
      initials: "CS",
      bg: "bg-slate-800",
      points: [
        "The only alternative was a disorderly failure on Monday, March 20. Funding markets were closed; CDS spreads exceeded 1,000 basis points. Bankruptcy would have delivered zero to equity holders.",
        "The emergency ordinance waiving shareholder votes removed the board's ability to argue that a better deal could have been negotiated; the procedural exit was closed.",
        "No competing bidder. The Swiss government structured the weekend so that no other party — BlackRock and DBS were both rumored — had time to conduct meaningful diligence.",
        "Employee protection: approximately 50,000 employees would have faced immediate liquidation in bankruptcy. The merger preserved a phased integration timeline; approximately 30,000 positions were ultimately eliminated but over a longer period.",
        "Fiduciary cover: Centerview and Rothschild delivered fairness opinions that CHF 3 billion was fair to shareholders relative to the bankruptcy alternative of zero — the standard rescue-merger fairness argument.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Roughly three years after closing, UBS has emerged as one of the most decisive winners of any modern crisis transaction. The federal loss-protection backstop and the additional SNB liquidity facility were both retired in the third quarter of 2023, well ahead of expectations, leaving Swiss taxpayers essentially whole. The harder legacy is the AT1 decision: the writedown imposed a permanent risk premium on the global AT1 market, and litigation from major bondholders is still working through the Swiss courts. The structural lesson is more fundamental — a country with banking assets roughly five times its GDP cannot run two competing G-SIBs at once.",
    overallVerdict: "Decisive strategic win for UBS; permanent reputational damage to the global AT1 market; structural redesign of Swiss banking",
    positives: [
      "UBS combined wealth-management AUM of approximately $5.7 trillion and run-rate cost synergies in excess of $8 billion annually; the UBS share price gained roughly 50% from March 2023 through May 2026.",
      "Swiss taxpayers paid effectively nothing. Both the CHF 9 billion federal loss-protection guarantee and the additional CHF 100 billion SNB liquidity were terminated in Q3 2023, with the government collecting fees on the facilities used.",
      "System-wide contagion avoided. The estimated 3–5% Swiss GDP shock implied by a Credit Suisse failure did not materialize, and the global cascade scenario was prevented.",
      "Regulatory reform: the Financial Stability Board and the Bank for International Settlements adopted enhanced G-SIB resolvability recommendations in 2024, and the AT1 market standardized contractual language regarding write-down triggers.",
    ],
    risks: [
      "AT1 market repricing: the $250 billion global AT1 market saw average prices fall roughly 10 points in the immediate aftermath; risk premia remain elevated, with new-issue spreads estimated to be 50–100 basis points wider than pre-event levels.",
      "AT1 litigation: Pimco, Invesco, Lazard Asset Management, and other holders have filed dozens of lawsuits against FINMA and the Swiss Confederation. Initial decisions through 2025 have leaned in FINMA's favor, but appeals are unresolved.",
      "Job losses: approximately 30,000 positions were eliminated post-merger, concentrated in investment banking in Zurich, London, and New York. The labor-market impact was material if short-term.",
      "Too Big to Fail intensified: the combined UBS is roughly twice Swiss GDP in assets — a single-G-SIB structure that raises the question of whether Switzerland could credibly rescue UBS in a future crisis.",
      "Credit Suisse brand and history retired. The 167-year-old franchise and its institutional legacy were extinguished; UBS inherited the reputational baggage of Suisse Secrets, Archegos, and Greensill alongside the franchise.",
    ],
    editorNote:
      "This deal is, at one level, the 15-year sequel to the 2008 JPMorgan–Bear Stearns lesson that confidence evaporates faster than assets. Two features set it apart. First, the Swiss authorities used emergency executive powers to override shareholder votes at both companies — a constitutional question about how far state crisis powers should reach into private capital structures. Second, FINMA wrote down AT1 bondholders ahead of equity, raising a market-trust question about whether regulators can reorder capital-structure priorities at will. UBS captured the franchise on terms that the Swiss state effectively underwrote, and emerged as one of the largest wealth managers in the world. But markets remember the AT1 writedown as a permanent reminder that, in a rescue, the seniority of subordinated bank capital is whatever the regulator says it is. Reviewed as of May 2026.",
  },

  // ── Tombstone ────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "UBS",
    acquirerBg: "bg-red-600",
    targetInitials: "CS",
    targetBg: "bg-slate-800",
    acquirerName: "UBS Group AG",
    targetName: "Credit Suisse Group AG",
    dealTitle: "UBS Government-Brokered Emergency Acquisition of Credit Suisse",
    dealSize: "CHF 3.25 billion (stock swap, 1:22.48)",
    dealSizeUSD: "approx. USD 3.5 Billion",
    evEbitda: "N/A (crisis acquisition)",
    closeDate: "Jun 12, 2023",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Credit Suisse Annual Report FY2022, IFRS, group disclosure" },
    { id: 2, text: "UBS Group AG, 'UBS to acquire Credit Suisse' press release (March 19, 2023)" },
    { id: 3, text: "FINMA, 'FINMA approves merger of UBS and Credit Suisse' press release (March 19, 2023)" },
    { id: 4, text: "Swiss Federal Council, Emergency Ordinance on Additional Liquidity Assistance Loans (March 19, 2023)" },
    { id: 5, text: "Swiss National Bank, 'SNB provides substantial liquidity assistance' press release (March 19, 2023)" },
    { id: 6, text: "ECB Single Supervisory Mechanism and Bank of England, joint statement on AT1 ranking (March 20, 2023)" },
    { id: 7, text: "Financial Times, 'How Credit Suisse came undone in four days' (March 20, 2023)" },
    { id: 8, text: "Reuters, 'AT1 bondholders file lawsuits against FINMA over $17B writedown' (2024)" },
    { id: 9, text: "Bloomberg, 'The Saudi National Bank chairman remark that broke Credit Suisse' (March 16, 2023)" },
    { id: 10, text: "Financial Stability Board, G-SIB Resolvability Review Post-Credit Suisse (2024)" },
  ],

  // ── SEO ──────────────────────────────────────────────────────
  seo: {
    title: "UBS Credit Suisse Forced Merger — Inside the 72-Hour Rescue and the $17B AT1 Writedown",
    description:
      "Complete analysis of the March 19, 2023 government-brokered acquisition of Credit Suisse by UBS at CHF 3.25 billion. Covers the Saudi National Bank trigger, the 72-hour weekend negotiation, the $17 billion AT1 wipeout, the emergency executive ordinance, and the formation of one of the world's largest wealth managers.",
    keywords: [
      "UBS Credit Suisse acquisition",
      "Credit Suisse collapse 2023",
      "AT1 bond writedown",
      "CoCo bond priority inversion",
      "Swiss banking crisis 2023",
      "FINMA AT1 decision",
      "Too Big to Fail",
      "G-SIB forced merger",
      "Swiss National Bank rescue",
      "Archegos Greensill Credit Suisse",
    ],
  },

  // ── Key Concepts ─────────────────────────────────────────────
  concepts: [
    {
      term: "AT1 / CoCo Full Wipeout",
      description: "Additional Tier 1 (AT1) bonds are contingent convertible (CoCo) instruments that automatically write down or convert to equity when an issuer's capital ratio breaches a contractual threshold. In this transaction, FINMA wrote down all CHF 16B of Credit Suisse's AT1 bonds to zero while preserving CHF 3B of equity value — inverting the conventional capital-structure waterfall.",
    },
    {
      term: "Swiss Emergency Executive Ordinance (Notrecht)",
      description: "Under the Swiss constitution, the Federal Council may issue emergency ordinances without parliamentary vote during declared national emergencies. The Federal Council used this power over the weekend to waive shareholder votes at both UBS and Credit Suisse, eliminating any procedural avenue for shareholders to block the deal.",
    },
    {
      term: "Bank Bail-In Cascade",
      description: "Basel III prescribes a default loss-absorption order: equity, then AT1, then Tier 2 bonds, then senior unsecured, and only last depositors. The AT1 wipeout in this transaction broke that cascade at the very first G-SIB application — the reason the ECB and Bank of England issued joint statements within 24 hours reaffirming their own jurisdictions' adherence to the standard order.",
    },
    {
      term: "Captive Investor Backstop",
      description: "A structure in which governments or central banks effectively force a particular acquirer onto a failing institution. UBS was much closer to a forced acquirer than a voluntary one; the package of government commitments compensated for the coercion.",
    },
    {
      term: "Saudi National Bank Trigger",
      description: "The largest shareholder's public refusal of further capital — delivered live on Bloomberg television — collapsed Credit Suisse's share price 24% in a single session and pushed CDS spreads through 1,000bp. Markets read it as the disappearance of the last private-capital backstop, and failure became visible within four days.",
    },
    {
      term: "G-SIB Concentration Risk",
      description: "The systemic risk created when two globally systemically important banks (G-SIBs) reside in a single country. Switzerland carried UBS and Credit Suisse with combined assets roughly three times national GDP, meaning a failure at either bank translated directly into a sovereign credit shock.",
    },
    {
      term: "Cross-Default Risk",
      description: "The chain reaction risk in which one financial institution's failure cascades through counterparty contracts — derivatives, repo, lending commitments — into defaults across other institutions. Credit Suisse's thousands of derivative counterparties were the underlying reason a weekend solution was non-negotiable.",
    },
    {
      term: "Bondholder vs Equity Priority Inversion",
      description: "The reversal of the conventional capital-structure rule that equity absorbs losses ahead of subordinated debt. This transaction is the textbook case: AT1 holders lost CHF 16B while equity holders retained CHF 3B of value — a permanent reference point for AT1 risk pricing.",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Credit Suisse collapse in a single week?",
      a: "The immediate trigger was the Saudi National Bank chairman's televised refusal of further capital on March 15, 2023. But the underlying cause was several years of accumulated reputational damage — the Archegos loss of $5.5B, the Greensill collapse with more than $10B in fund losses, the Mozambique tuna bond fraud, and the Suisse Secrets leak — that produced CHF 123B in wealth-management net outflows during 2022 alone. The Saudi statement was interpreted as the disappearance of the last private-capital backstop, and within four days CDS spreads crossed 1,000bp and funding markets effectively closed.",
    },
    {
      q: "Why were AT1 bonds written down ahead of equity?",
      a: "FINMA's decision rested on two foundations. First, Credit Suisse's AT1 documentation contained a 'viability event' clause that allowed full write-down at the regulator's discretion if the bank's viability was deemed to be at risk. Second, FINMA concluded that the combination of emergency liquidity assistance and a state-engineered merger constituted exactly such a viability event. The maneuver simultaneously reduced UBS's effective acquisition cost and absorbed CHF 16B of losses on the Credit Suisse balance sheet. But it broke the conventional capital-structure waterfall, which is why the ECB and Bank of England issued joint statements within 24 hours affirming that in their jurisdictions AT1 holders continue to rank above equity holders.",
    },
    {
      q: "Was waiving the shareholder vote legal?",
      a: "Under the Swiss constitution, the Federal Council may issue emergency ordinances without parliamentary vote during declared national emergencies. The Federal Council passed an ordinance over the weekend waiving shareholder votes at both UBS and Credit Suisse, eliminating closing-condition risk and any avenue for shareholders to block the deal. Constitutional scholars continue to debate how far emergency executive powers should reach into private capital structures, and several Credit Suisse shareholders filed suits questioning the constitutionality of the ordinance itself.",
    },
    {
      q: "Why did UBS agree to do this? Was it a voluntary decision?",
      a: "UBS was much closer to a forced acquirer than a voluntary one. Finance Minister Karin Keller-Sutter told the UBS board directly that without a deal by Monday morning, Credit Suisse would fail and Switzerland would face a sovereign credit shock. As a G-SIB, UBS could not credibly refuse. The compensation was the government package — the CHF 9B federal loss-protection guarantee and the CHF 100B additional SNB liquidity facility — combined with the structural advantage of a stock-only consideration that required no cash outlay. The transaction made UBS one of the largest wealth managers in the world, with combined AUM of approximately $5.7 trillion. The strategic upside ultimately dwarfed the coercion.",
    },
    {
      q: "How much of the government safety net was actually used?",
      a: "The committed amounts were significant — CHF 9 billion in federal loss-protection plus CHF 100 billion in additional SNB liquidity — but the realized use was modest. UBS voluntarily terminated both facilities in the third quarter of 2023, well ahead of market expectations. Swiss taxpayers paid effectively nothing in net terms, and the government collected fees on the facilities while they were outstanding. The non-financial costs — the use of constitutional emergency powers, the AT1 controversy — are a different ledger.",
    },
    {
      q: "What permanent changes did this leave on global financial markets?",
      a: "Three changes have proven durable. First, the global AT1 market priced in a permanent risk premium; new-issue spreads are estimated to be 50–100 basis points wider than pre-event levels, and contractual language has standardized to be more explicit about write-down triggers. Second, the Financial Stability Board and the Bank for International Settlements adopted enhanced G-SIB resolvability recommendations in 2024, pushing toward resolution frameworks that do not rely on a competitor acquirer of last resort. Third, the structural lesson — that a country with banking assets several multiples of GDP cannot credibly run two competing G-SIBs — has effectively retired the dual-G-SIB model in Switzerland. UBS as the sole Swiss G-SIB is the new default.",
    },
  ],
};

export default deal;
