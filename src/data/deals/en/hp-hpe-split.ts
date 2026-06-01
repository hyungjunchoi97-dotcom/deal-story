/**
 * HP × HP Inc + HPE Two-Way Split
 * Silicon Valley's founding company breaks itself in two — announced 2014, closed 2015
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "hp-hpe-split",
  title: "Why 76-Year-Old HP Broke Itself In Two — Meg Whitman's $55B Voluntary Big Tech Split",
  subtitle: "1939 Palo Alto garage founding → 2015 HP Inc + HPE two-way split · Consumer vs Enterprise separation · The opening act of big tech voluntary breakups",
  category: "restructuring",
  industry: "Technology / Enterprise IT / Personal Computing",
  country: "USA",
  announcedAt: "2014-10-06",
  closedAt: "2015-11-01",
  announcedDisplay: "October 2014",
  closedDisplay: "November 2015",
  readingMinutes: 12,
  tags: [
    "HP",
    "Hewlett-Packard",
    "HP Inc",
    "HPE",
    "Hewlett Packard Enterprise",
    "spinoff",
    "Meg Whitman",
    "Section 355",
    "conglomerate",
    "restructuring",
  ],
  excerpt:
    "Founded in a Palo Alto garage by Bill Hewlett and Dave Packard in 1939, HP was Silicon Valley's archetype for 76 years. On October 6, 2014, CEO Meg Whitman announced that the $55B company would split into HP Inc (PCs and printers) and Hewlett Packard Enterprise (servers, storage, networking, services). When the two companies began trading separately on the NYSE on November 1, 2015, a new era of voluntary big-tech breakups opened. The transaction became the template later followed by IBM-Kyndryl, GE, 3M, and Honeywell.",

  acquirer: { initials: "HP", bg: "bg-blue-700", label: "HP Co. (pre-split parent)" },
  target: { initials: "2CO", bg: "bg-green-600", label: "HP Inc + HPE (post-split)" },

  background: [
    "HP was founded in 1939 by Stanford graduates Bill Hewlett and Dave Packard in a Palo Alto garage with $538 of capital. It expanded from audio oscillators into instruments, minicomputers, inkjet and laser printers, and personal computers, becoming the archetypal Silicon Valley company in the second half of the 20th century. In 2002, then-CEO Carly Fiorina engineered the $25B Compaq merger to chase PC market leadership. The wisdom of that deal was contested from day one.",
    "From 2010 to 2013 HP staggered through a succession of crises. CEO Mark Hurd resigned in 2010 over an expense-report scandal. His successor Léo Apotheker acquired UK enterprise software firm Autonomy for $11.1B in 2011, which was written down by $8.8B the following year amid accounting-fraud allegations. Apotheker openly floated divesting or spinning off the PC business and was dismissed within 11 months. Former eBay CEO Meg Whitman took the role in September 2011.",
    "Whitman stabilised HP over her first three years. She reversed Apotheker's PC-divestiture review and committed to keeping HP integrated, executed the $8.8B Autonomy write-down, cut roughly 40,000 jobs, and paid down debt. Activist investor Relational Investors (Ralph Whitworth) acquired a 1.2% stake in 2011 and is reported to have privately pressed Whitman to break the company up. Initially she refused.",
    "On October 6, 2014, Whitman reversed course. She announced a split of HP into two independently listed public companies: HP Inc (Personal Systems + Printing) and Hewlett Packard Enterprise (enterprise servers, storage, networking, services). The stated rationale was that consumer hardware and enterprise infrastructure required fundamentally different operating models, capital allocation policies, and M&A strategies, and that one combined entity forced perpetual strategic compromises. The announcement marked a frontal reversal twelve years after the $25B Compaq merger.",
    "The separation closed on November 1, 2015 as a Section 355 tax-free spinoff. Each HP shareholder received one new HPE share for every HP share held, while the legacy entity was renamed HP Inc. Dion Weisler became HP Inc CEO; Whitman took the HPE CEO role. Day-one combined market cap was approximately $25B (HP Inc) + $28B (HPE) = $53B, almost identical to the $55B pre-split valuation. No premium creation, but no destruction either.",
  ],

  dealSummary: {
    dealValueDisplay: "Two-way split (Section 355 tax-free spinoff)",
    acquirerName: "HP Co. (pre-split entity)",
    targetName: "HP Inc (HPQ) + Hewlett Packard Enterprise (HPE)",
    announcedDisplay: "October 2014",
    closedDisplay: "November 2015",
    country: "USA",
  },

  executiveSummary: [
    "Founded 1939 in a Palo Alto garage → split in two after 76 years in 2015 — the first voluntary big-tech breakup",
    "HP Inc (HPQ): consumer PCs + printers / HPE: servers, storage, networking, services for the enterprise",
    "Pre-split combined revenue $111B · market cap $55B · ~300,000 employees — a mega-cap separation",
    "Section 355 tax-free structure — HP shareholders received one HPE share per HP share held, with the legacy entity renamed HP Inc",
    "CEO split: Meg Whitman → HPE / Dion Weisler → HP Inc",
    "Day-one combined market cap ~$53B — essentially identical to pre-split, with no immediate premium",
    "2016–17 serial spin-merges from HPE: Enterprise Services → DXC Technology, Software → Micro Focus ($8.8B)",
    "Eleven years on: strategic focus achieved, but combined value creation has materially underperformed the market — the direct template for GE, DowDuPont, 3M, and Honeywell",
  ],

  industryOverview: {
    body: "By 2014 global IT was bifurcating. The consumer PC and printer market was in structural decline as mobile and tablets ate into shipments, with price competition and short product cycles dominating economics. Enterprise infrastructure, by contrast, was being reshaped by cloud adoption, hybrid IT, and software-defined everything, with long-term contracts, services revenue, and acquisition-led growth at the centre of strategy. Capital allocation logic (buybacks and dividends for the former, M&A and R&D reinvestment for the latter), operating cycles, and the relevant investor bases were essentially incompatible inside a single corporate envelope.",
    metrics: [
      { label: "Pre-split combined revenue (FY2014)", value: "~$111.4B", sub: "Personal Systems + Printing + Enterprise" },
      { label: "Pre-split combined market cap", value: "~$55B", sub: "As of October 2014 announcement" },
      { label: "Pre-split employees", value: "~300,000", sub: "Global workforce" },
      { label: "Day-one combined market cap", value: "~$53B", sub: "HP Inc $25B + HPE $28B" },
    ],
    subBody:
      "The HP transaction was the first voluntary breakup of a big-tech conglomerate and became the direct template for IBM's Kyndryl spinoff (2021), GE's three-way breakup (2024), 3M's Solventum spinoff (2024), and Honeywell's three-way split announced in 2025. The opposite strategy — Dell's $67B EMC acquisition in 2016 — is the most-cited counter-example of the same era.",
    players: [
      { name: "HP Inc (NYSE: HPQ)", role: "Consumer PCs and printers — the legacy entity, renamed and led by Dion Weisler" },
      { name: "Hewlett Packard Enterprise (NYSE: HPE)", role: "Servers, storage, networking, services — new entity led by Meg Whitman" },
      { name: "Relational Investors (Ralph Whitworth)", role: "Activist investor; 1.2% stake taken in 2011, pressed for separation privately" },
      { name: "Dell-EMC (counter-strategy)", role: "The $67B 2016 consolidation that stands as the polar opposite of HP's breakup logic" },
      { name: "IBM", role: "Followed the HP playbook with its 2021 Kyndryl infrastructure-services spinoff" },
    ],
  },

  companyOverview: {
    targetName: "Hewlett-Packard Company (pre-split parent)",
    body: "HP was founded in 1939 in a Palo Alto garage by Bill Hewlett and Dave Packard with $538 of capital. It expanded from audio oscillators into instruments, minicomputers, inkjet and laser printers, and personal computers, becoming the world's largest PC vendor after the $25B Compaq merger in 2002. Between 2010 and 2013 the company cycled through CEOs, absorbed an $8.8B Autonomy write-down, and struggled to mediate capital-allocation conflicts between its consumer and enterprise businesses. At the time of the split announcement HP employed roughly 300,000 people with combined revenue of $111.4B — a sprawling IT conglomerate.",
    metrics: [
      { label: "Founded", value: "1939", sub: "Palo Alto garage — Silicon Valley's archetype" },
      { label: "Compaq merger", value: "$25B (2002)", sub: "Led by CEO Carly Fiorina, vaulted HP to #1 in PCs" },
      { label: "Autonomy write-down", value: "$8.8B (2012)", sub: "$11.1B acquisition followed by accounting-fraud allegations" },
      { label: "Pre-split employees", value: "~300,000", sub: "Post-split: ~50k HP Inc / ~250k HPE" },
      { label: "Split announcement", value: "October 6, 2014", sub: "CEO Meg Whitman unveils two-way separation plan" },
    ],
    financials: [
      { year: "FY2010", revenue: 126033, cogs: 95852, grossProfit: 30181, sga: 12585, operatingIncome: 11479, ebitda: 16800 },
      { year: "FY2011", revenue: 127245, cogs: 97418, grossProfit: 29827, sga: 12889, operatingIncome: 9677, ebitda: 14900 },
      { year: "FY2012", revenue: 120357, cogs: 92385, grossProfit: 27972, sga: 13500, operatingIncome: -11057, ebitda: -7000 },
      { year: "FY2013", revenue: 112298, cogs: 85248, grossProfit: 27050, sga: 13267, operatingIncome: 7131, ebitda: 12300 },
      { year: "FY2014", revenue: 111454, cogs: 84839, grossProfit: 26615, sga: 13353, operatingIncome: 7185, ebitda: 12400 },
    ],
    financialsNote:
      "Unit: USD million. HP 10-K consolidated reporting. FY2012 operating loss reflects $8.8B Autonomy + $8.0B EDS goodwill impairments. EBITDA partly estimated.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Personal Systems (PCs) — HP Inc precursor", pct: 31, color: "bg-blue-600", amt: "~$34.5B" },
      { name: "Printing — HP Inc precursor", pct: 21, color: "bg-sky-500", amt: "~$23.4B" },
      { name: "Enterprise Group (servers/storage/networking) — HPE precursor", pct: 25, color: "bg-green-700", amt: "~$27.9B" },
      { name: "Enterprise Services — HPE precursor (later → DXC)", pct: 20, color: "bg-emerald-600", amt: "~$22.3B" },
      { name: "Software + Financial Services — HPE precursor", pct: 3, color: "bg-teal-500", amt: "~$3.3B" },
    ],
    revenueNote: "FY2014 basis. Post-split: HP Inc ≈ Personal Systems + Printing; HPE ≈ Enterprise Group + Services + Software + Financial Services.",
  },

  restructuringOverview: {
    body: "HP's two-way split is the first instance of a big-tech conglomerate choosing voluntary strategic separation rather than enduring a forced antitrust breakup. We examine why consumer PCs and enterprise infrastructure could no longer share a roof, and how that decision has been judged eleven years later. With GE and DowDuPont, the HP deal forms the three canonical conglomerate-breakup case studies.",
    trigger: "Strategic incompatibility between consumer PCs and enterprise infrastructure, compounded by activist pressure",
    triggerDetail:
      "The PC and printer business is defined by short product cycles, price competition, and a capital-return economic model. Enterprise infrastructure is built around long-term contracts, recurring services revenue, and acquisition-led growth. When both businesses competed for capital inside one entity, each was forced into strategic compromises. In 2011 Relational Investors (Ralph Whitworth) acquired a 1.2% stake and privately urged separation. The successive 2010–13 CEO turnover, the Autonomy write-down, and accelerating mobile substitution in PCs sealed the case.",
    method: "tax-free-spinoff",
    methodLabel: "Section 355 tax-free two-way spinoff (1:1 ratio)",
    whyThisMethod:
      "A cash divestiture would have triggered multi-billion-dollar tax leakage and surrendered strategic control of one of the businesses. A carve-out IPO would have retained majority ownership in the parent, leaving the conglomerate discount partly intact. A Section 355 tax-free spinoff distributes new shares directly to existing holders without tax consequences, gives both companies an immediate independent multiple, and on a 1:1 ratio (one HP share → one HP Inc share + one HPE share) is the cleanest possible structure for shareholders.",
    methodVsAlternatives: [
      {
        method: "Cash divestiture of the PC business (Apotheker's 2011 plan)",
        reason:
          "A PC-business sale price in the low-teens of billions would have crystallised the Compaq merger loss and triggered several billion dollars of corporate tax on disposal gains. Surrendering a strategic asset to Lenovo or a peer was also unattractive. Whitman shelved this approach on arrival.",
      },
      {
        method: "Carve-out IPO of PCs/Printing",
        reason:
          "Retaining 80%+ of the carve-out at parent level would have preserved part of the conglomerate discount. Pricing and timing would have depended on IPO windows, and post-listing capital and personnel decisions would have remained entangled.",
      },
      {
        method: "Stay integrated with business-unit decentralisation",
        reason:
          "Whitman tried exactly this from 2011 to 2013. It did not resolve the structural conflict over capital, M&A, and talent inside one envelope, and it did not defuse activist pressure either.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "Conglomerate Discount",
        explanation:
          "Diversified companies tend to trade below the sum of their parts. Academic studies estimate an average discount of 13–15%. As public capital markets and ETFs mature, investors can diversify themselves, and the conglomerate's diversification premium evaporates.",
        howApplied:
          "HP bundled cyclical, low-multiple PCs with steadier mid-multiple enterprise infrastructure inside one trading symbol. Day-one combined market cap was almost identical to the pre-split valuation ($53B vs $55B), which some read as evidence the discount was already small. Eleven years later the combined market cap is still around $55B, which the harsher reading interprets as 'the split prevented further decay rather than creating value.'",
      },
      {
        concept: "Section 355 tax-free spinoff",
        explanation:
          "US Internal Revenue Code §355 allows a parent to distribute a subsidiary to its shareholders without tax at either the parent or the shareholder level, provided certain requirements are met (active trade or business for five years, business purpose, 80%+ distribution, no acquisition agreement within five years). It is the standard tool for voluntary conglomerate separations.",
        howApplied:
          "Both HP Inc and HPE comfortably met the §355 active-business and five-year tests, and the deal had a clear business purpose. The 1:1 share distribution kept the structure intuitive for retail investors and corporate treasuries alike. The blueprint was later borrowed by GE, DowDuPont, 3M, and Honeywell.",
      },
      {
        concept: "Spin-Merge (Reverse Morris Trust)",
        explanation:
          "A spun-off subsidiary is merged with another entity immediately upon separation. If the parent's pre-spin shareholders retain 50%+ of the combined company, the transaction qualifies as a tax-free Reverse Morris Trust. The technique sends a non-core business to its 'natural buyer' while avoiding tax leakage.",
        howApplied:
          "HPE spin-merged Enterprise Services into CSC to form DXC Technology (announced May 2016, closed April 2017) and its Software business into Micro Focus for $8.8B (announced September 2016, closed September 2017). The Micro Focus integration collapsed: ~$3B of goodwill impaired by 2018, share price down ~70%, and the residual sold to OpenText in 2023 — the canonical big-tech spin-merge failure.",
      },
      {
        concept: "Capital allocation independence",
        explanation:
          "Inside a conglomerate, business units are subject to corporate-level capital-allocation decisions that may be optimal for the group but suboptimal for the individual business. Independent listed companies can run their own capital structures, dividend policies, and acquisition programmes.",
        howApplied:
          "HP Inc adopted an aggressive buyback-and-dividend posture suited to a slow-growing cash-generative business. HPE went the other way with Aruba ($3B, 2015), Nimble Storage ($1B, 2017), Cray ($1.3B, 2019), and the Juniper deal ($14B, announced 2024). Neither path would have been pursuable at scale inside the integrated HP.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "October 6, 2014",
        action: "HP announces the two-way split",
        detail:
          "Whitman announces the separation of HP into HP Inc (PCs and printers) and Hewlett Packard Enterprise (servers, storage, networking, services), targeting an 18-month execution window. CEO assignments are disclosed at the same time.",
        financialNote: "+4.7% on announcement day ($35.41 → $37.07)",
      },
      {
        phase: "Phase 2",
        date: "H1 2015",
        action: "Operational decoupling and system separation",
        detail:
          "Roughly 300,000 employees are allocated between the two future entities. IT systems, SAP, and financial reporting are bifurcated. Two boards and two management teams are stood up. Approximately $1B of one-time separation costs are disclosed.",
        financialNote: "~$1B one-time separation costs",
      },
      {
        phase: "Phase 3",
        date: "November 1, 2015",
        action: "Section 355 separation closes — HP Inc and HPE begin trading separately on NYSE",
        detail:
          "Each HP shareholder receives one HPE share per HP share held; the legacy entity is renamed HP Inc and retains the HPQ ticker. Dion Weisler is appointed HP Inc CEO; Meg Whitman becomes HPE CEO.",
        financialNote: "Day-one combined market cap ~$53B (HP Inc ~$25B + HPE ~$28B)",
      },
      {
        phase: "Phase 4",
        date: "May–September 2016",
        action: "HPE announces serial spin-merges — Enterprise Services and Software",
        detail:
          "HPE agrees to spin-merge Enterprise Services into CSC to form DXC Technology (May 2016) and Software into Micro Focus for $8.8B (September 2016). The strategy slims HPE to a core infrastructure player around servers, storage, and networking.",
        financialNote: "HPE Software → Micro Focus deal value $8.8B",
      },
      {
        phase: "Phase 5",
        date: "April / September 2017",
        action: "DXC Technology launches (April); Micro Focus spin-merge closes (September)",
        detail:
          "DXC begins trading on NYSE in April 2017. The Micro Focus combination closes in September. HPE completes its transformation into a pure-play infrastructure company. Micro Focus subsequently impairs ~$3B by 2018 and is eventually sold to OpenText in 2023.",
        financialNote: "DXC opening market cap ~$10B; Micro Focus impairs ~$3B within 12 months",
      },
    ],
    stakeholders: [
      {
        name: "Legacy HP shareholders",
        icon: "📈",
        impact: "mixed",
        summary: "Now hold shares in both companies, but combined value has barely moved",
        detail:
          "Holders received HPE shares on day one tax-free and kept their HP Inc stock. Eleven years later combined market cap is still around $55B, materially underperforming the S&P 500 (which has roughly tripled over the same period). The transaction is widely cited as evidence that 'the split itself did not create value.'",
        metric: "Combined market cap 2024 ≈ pre-split 2014",
      },
      {
        name: "HP Inc employees (PCs and printing)",
        icon: "💻",
        impact: "positive",
        summary: "Steady cash-generative business with disciplined capital return",
        detail:
          "Even in a maturing PC market, ink subscriptions and printer consumables sustained dependable cash flow. Aggressive buybacks and dividends drove EPS growth. The Dion Weisler → Enrique Lores CEO transition was orderly.",
        metric: "HP Inc headcount: ~50,000 → ~58,000 by 2024",
      },
      {
        name: "HPE employees (enterprise)",
        icon: "🖥️",
        impact: "mixed",
        summary: "Successive spin-merges and restructurings shrank headcount sharply",
        detail:
          "Enterprise Services moved to DXC (~100,000 employees), Software went to Micro Focus, and standalone HPE absorbed further restructuring. Headcount fell from roughly 250,000 at separation to ~60,000 by 2024.",
        metric: "HPE headcount: 250k (2015) → ~60k (2024)",
      },
      {
        name: "DXC Technology employees",
        icon: "🔧",
        impact: "negative",
        summary: "Post spin-merge cycle of continuous restructuring",
        detail:
          "Separated from HPE Enterprise Services and combined with CSC, DXC faced collapsing demand for traditional IT services as customers shifted to public cloud. The company has cycled through repeated headcount cuts, and market cap has fallen from roughly $10B at launch to the $4B range by 2024.",
      },
      {
        name: "Micro Focus (acquirer of HPE Software)",
        icon: "📉",
        impact: "negative",
        summary: "$8.8B spin-merge integration failure",
        detail:
          "Integration synergies never materialised. By 2018 Micro Focus had impaired roughly $3B of goodwill and its share price had fallen ~70%. The residual business was sold to OpenText in 2023 and is now the canonical case study of a failed big-tech spin-merge.",
        metric: "~$3B goodwill impairment by 2018",
      },
      {
        name: "Activist investor (Relational Investors)",
        icon: "⚔️",
        impact: "positive",
        summary: "Private pressure ultimately translated into separation",
        detail:
          "Relational acquired a 1.2% stake in 2011 and pressed Whitman privately to separate the company. No public campaign, no proxy fight, no press leaks — a textbook example of 'quiet activism' that nonetheless delivered the outcome the fund sought.",
      },
    ],
    beforeAfter: [
      {
        metric: "Combined market cap",
        before: "$55B (Oct 2014)",
        after: "$53B (day one) / ~$55B (2024)",
        change: "Essentially flat",
        isPositive: false,
      },
      {
        metric: "HP Inc market cap",
        before: "—",
        after: "$25B → $30B (2024)",
        change: "+20%",
        isPositive: true,
      },
      {
        metric: "HPE market cap",
        before: "—",
        after: "$28B → $25B (2024)",
        change: "-10%",
        isPositive: false,
      },
      {
        metric: "Combined revenue",
        before: "$111B (FY2014)",
        after: "~$81B (HP Inc $53B + HPE $28B, FY2024)",
        change: "-27% (spin-merges drained revenue out)",
        isPositive: false,
      },
      {
        metric: "Total employees",
        before: "~300,000",
        after: "~118,000 (HP Inc 58k + HPE 60k)",
        change: "-180k (including DXC and Micro Focus migrations)",
        isPositive: false,
      },
      {
        metric: "Strategic focus",
        before: "PCs + printers + enterprise bundled",
        after: "One core domain each",
        change: "Pure-play transformation achieved",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "+4.7% on announcement day",
      shortTermReturn: "Combined -10% in the six months after separation amid an IT downturn",
      longTermReturn: "Combined market cap roughly flat after eleven years (>200ppt underperformance vs S&P 500)",
      contextNote: "On total return the transaction looks closer to 'preserved value' than 'created value.' Markedly worse than the GE three-way breakup (+150%+) on a like-for-like timeframe.",
    },
  },

  dealStructure: {
    body:
      "HP executed the separation as a Section 355 tax-free spinoff. The legacy HP entity retained the PC and printing businesses and was renamed HP Inc, while the enterprise businesses were transferred into a newly incorporated HPE. Each HP shareholder received the split on a 1:1 ratio (one HP share → one HP Inc share, ticker HPQ retained + one new HPE share).",
    preOwnership: {
      nodes: [
        { id: "hp_co", label: "Hewlett-Packard Company", sub: "NYSE: HPQ — Integrated IT conglomerate", type: "acquirer" },
        { id: "personal_systems", label: "Personal Systems", sub: "PC division (HP Inc precursor)", type: "target" },
        { id: "printing", label: "Printing", sub: "Printer division (HP Inc precursor)", type: "target" },
        { id: "enterprise_group", label: "Enterprise Group", sub: "Servers / storage / networking (HPE precursor)", type: "target" },
        { id: "enterprise_services", label: "Enterprise Services", sub: "IT services (HPE precursor, later → DXC)", type: "target" },
        { id: "hp_software", label: "HP Software", sub: "Software (HPE precursor, later → Micro Focus)", type: "target" },
      ],
      edges: [
        { from: "hp_co", to: "personal_systems", label: "100%" },
        { from: "hp_co", to: "printing", label: "100%" },
        { from: "hp_co", to: "enterprise_group", label: "100%" },
        { from: "hp_co", to: "enterprise_services", label: "100%" },
        { from: "hp_co", to: "hp_software", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hp_inc", label: "HP Inc", sub: "NYSE: HPQ (renamed) · Dion Weisler CEO", type: "public" },
        { id: "hpe", label: "Hewlett Packard Enterprise", sub: "NYSE: HPE (new) · Meg Whitman CEO", type: "public" },
        { id: "shareholders", label: "Legacy HP Shareholders", sub: "1:1 distribution into both entities", type: "public" },
      ],
      edges: [
        { from: "shareholders", to: "hp_inc", label: "1 HP share → 1 HPQ share (legacy)" },
        { from: "shareholders", to: "hpe", label: "1 HP share → 1 HPE share (new)" },
      ],
    },
    keyTerms: [
      { label: "Announcement", value: "October 6, 2014 — Whitman unveils two-way split", accent: true },
      { label: "Close", value: "November 1, 2015 — HP Inc and HPE begin separate NYSE trading", accent: true },
      { label: "Spinoff structure", value: "Section 355 tax-free spinoff — no shareholder tax", accent: false },
      { label: "Distribution ratio", value: "1:1 (one HP share → one HP Inc + one HPE)", accent: true },
      { label: "Corporate treatment", value: "Legacy entity renamed HP Inc; HPE created as a new entity", accent: false },
      { label: "CEO split", value: "Dion Weisler → HP Inc / Meg Whitman → HPE", accent: false },
      { label: "Follow-on spin-merge 1", value: "HPE Enterprise Services → DXC Technology (April 2017)", accent: false },
      { label: "Follow-on spin-merge 2", value: "HPE Software → Micro Focus, $8.8B (September 2017)", accent: false },
      { label: "Day-one combined market cap", value: "~$53B (essentially flat vs $55B pre-split)", accent: true },
    ],
  },

  advisors: {
    body: "As the first voluntary big-tech breakup, the HP separation drew the top-tier of Wall Street advisory talent. On the activist side, Relational Investors operated entirely privately, never running a public campaign.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "HP (separation parent)",
        initials: "HP",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Lead Financial Advisor", roleType: "financial", note: "Stuart Cassidy lead — overall transaction structuring" },
          { firm: "Lazard", role: "Co-Financial Advisor", roleType: "financial", note: "Co-FA on valuation analysis" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "Lead Legal Counsel", roleType: "legal", note: "Lead counsel on separation structure and Section 355 implementation" },
          { firm: "Skadden, Arps, Slate, Meagher & Flom", role: "Co-Counsel", roleType: "legal", note: "Tax and securities-law support" },
        ],
      },
      {
        side: "target",
        sideLabel: "Activist side (pre-split agitator)",
        initials: "RI",
        bg: "bg-orange-600",
        advisors: [
          { firm: "Relational Investors", role: "Activist investor", roleType: "other", note: "Ralph Whitworth lead; 1.2% stake taken in 2011, pressed for separation privately" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public reporting. Follow-on spin-merges (DXC, Micro Focus) used separate advisor lineups.",
  },

  valuation: {
    body:
      "The core valuation thesis for the HP split was the separation of two distinct multiples: cyclical low-multiple consumer PCs versus steadier mid-multiple enterprise infrastructure. In practice, day-one combined market cap was almost identical to the pre-split valuation ($53B vs $55B), suggesting the market had already priced both businesses rationally. Eleven years later combined market cap is still around $55B, evidence that execution after the split matters more than the split itself.",
    rows: [
      { item: "HP market cap pre-announcement", val: "~$55B", note: "As of October 6, 2014", accent: false },
      { item: "HP Inc day-one market cap", val: "~$25B", note: "Nov 1, 2015 — PCs and printers", accent: false },
      { item: "HPE day-one market cap", val: "~$28B", note: "Nov 1, 2015 — enterprise", accent: false },
      { item: "Day-one combined", val: "~$53B", note: "Essentially equal to pre-split $55B", accent: true },
      { item: "HP Inc EV/EBITDA at split", val: "~5–6x", note: "Cyclical PC multiple", accent: false },
      { item: "HPE EV/EBITDA at split", val: "~7–8x", note: "Enterprise infrastructure multiple", accent: false },
      { item: "HP Inc market cap (2024)", val: "~$30B", note: "+20%; buyback-driven EPS growth", accent: false },
      { item: "HPE market cap (2024)", val: "~$25B", note: "-10% after the spin-merges and M&A cycle", accent: false },
      { item: "Combined market cap (2024)", val: "~$55B", note: "Eleven years later, essentially equal to the pre-split valuation — value stagnation", accent: true },
    ],
    disclaimer: "Market cap figures are estimates based on public market data. Revenue and headcount migrated out via spin-merges (DXC, Micro Focus) are excluded from post-split totals.",
  },

  rationale: {
    buyer: {
      title: "Rationale for HP's two-way split (Meg Whitman)",
      initials: "HP",
      bg: "bg-blue-700",
      points: [
        "Operating-model separation — consumer PC/printer cycles and enterprise long-term contracts could not be optimised inside one envelope",
        "Capital allocation independence — HP Inc pursues capital return (buybacks, dividends); HPE invests via M&A and R&D",
        "Investor-base specialisation — income investors for HP Inc, infrastructure and growth investors for HPE",
        "M&A freedom — Aruba, Nimble, Cray, and the later Juniper transaction would have been politically impossible inside an integrated HP",
        "Activist defusing — voluntarily addressing Relational Investors' private case for separation pre-empted any hostile campaign",
        "Reset of credibility after Autonomy — a public acknowledgement that the 'do everything inside one company' model had failed",
      ],
    },
    seller: {
      title: "Rationale for each successor company's independence",
      initials: "2CO",
      bg: "bg-green-600",
      points: [
        "HP Inc — pure-play PCs and printers with predictable ink and consumables cash flow, returning capital aggressively to drive EPS",
        "HPE — pure-play enterprise infrastructure positioned for cloud, AI, and hybrid IT investments, with M&A optionality",
        "Direct stock-option alignment — leadership at each entity is compensated against its own equity rather than a blended conglomerate",
        "Conflict resolution — HPE can now partner with hyperscalers (AWS, Azure) without internal conflicts with HP Inc's PC business",
        "Follow-on restructuring optionality — within a year of separation, HPE executed two major spin-merges (DXC, Micro Focus) impossible inside the parent",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body:
      "Eleven years on, the verdict on HP's two-way split is mixed. On strategic focus the deal worked: HP Inc has established itself as a disciplined consumer PC and printing business with a steady capital-return model, while HPE has reinvented itself as a pure-play enterprise infrastructure company through Aruba, Nimble, Cray, and the Juniper acquisition announced in 2024 (still in regulatory review as of mid-2025). On shareholder value the result has been disappointing: combined market cap remains around $55B, essentially unchanged from the pre-split valuation, against an S&P 500 that has roughly tripled over the same period — a >200ppt underperformance. The follow-on spin-merges fared worse: Micro Focus ($8.8B) impaired ~$3B by 2018 and was eventually sold to OpenText in 2023, while DXC Technology has slid from a ~$10B opening market cap to roughly $4B by 2024. The prevailing reading: 'The decision to split was right, but the execution after the split destroyed value.'",
    overallVerdict: "Strategic focus achieved; value creation failed — a cautionary case study in voluntary big-tech breakups",
    positives: [
      "First voluntary big-tech breakup — the direct template for IBM-Kyndryl (2021), GE (2024), 3M-Solventum (2024), and Honeywell (2025)",
      "Standardised the Section 355 + 1:1 distribution playbook for big-tech separations",
      "Established HP Inc as a disciplined capital-return story driven by ink subscriptions and buybacks",
      "Enabled HPE's aggressive M&A path, culminating in the $14B Juniper deal that would have been impossible inside legacy HP",
      "Defused the activist pressure from Relational Investors without a public campaign — a model 'quiet activism' outcome",
      "Resolved cross-business capital, talent, and M&A conflicts that had plagued the conglomerate for years",
    ],
    risks: [
      "Failed to create value — combined market cap stagnant over eleven years, more than 200ppt of underperformance vs the S&P 500",
      "Micro Focus integration disaster — $8.8B spin-merge written down to a sale to OpenText in 2023",
      "DXC Technology value destruction — ~$10B opening market cap to the $4B range by 2024 as IT services demand cratered",
      "HPE cloud-transition struggle — share losses to AWS, Azure, and GCP; Juniper deal still in regulatory review",
      "Structural PC market decline — HP Inc faces persistent volume pressure from mobile and is now navigating the AI-PC transition",
      "$1B+ in one-time separation costs — system, IT, and personnel decoupling consumed real cash",
    ],
    editorNote:
      "The HP split is at once the founding example of voluntary big-tech separation and a cautionary tale about expecting the split itself to create value. Unlike industrial conglomerates with obvious conglomerate discounts (GE, DowDuPont, 3M), HP entered its separation with a market that had already priced its two businesses sensibly, leaving no immediate re-rating to harvest. The eleven-year stagnation traces to follow-on execution failures rather than the original decision. Three lessons stand out: (1) a split is a tool, not a cure-all — what happens after the split determines whether value is created; (2) spin-merges (Reverse Morris Trusts) destroy value on both sides if the acquirer lacks integration capability, as Micro Focus demonstrated; (3) HP deserves credit for pioneering the voluntary big-tech breakup category but should not be cited as a shareholder-value success story. The later GE, 3M, and Honeywell breakups owe their playbook — and their cautions — to HP.",
  },

  tombstone: {
    acquirerInitials: "HP",
    acquirerBg: "bg-blue-700",
    targetInitials: "2CO",
    targetBg: "bg-green-600",
    acquirerName: "Hewlett-Packard Company (pre-split)",
    targetName: "HP Inc + Hewlett Packard Enterprise",
    dealTitle: "Section 355 Tax-Free Two-Way Spinoff",
    dealSize: "$55B pre-split / $53B Day 1 combined",
    dealSizeUSD: "USD 55B pre-split / USD 53B Day 1 combined",
    evEbitda: "HP Inc 5–6x / HPE 7–8x (at split)",
    closeDate: "Nov 2015",
  },

  sources: [
    {
      id: 1,
      text: "HP Press Release — Hewlett-Packard Announces Plan to Separate Into Two New Industry-Leading Public Companies (October 6, 2014)",
      url: "https://www.hp.com/us-en/newsroom",
    },
    {
      id: 2,
      text: "Hewlett Packard Enterprise Form 10 Registration Statement (2015)",
      url: "https://www.sec.gov",
    },
    {
      id: 3,
      text: "HP Inc Form 10-K FY2015 — Post-Separation Annual Report",
      url: "https://www.sec.gov",
    },
    {
      id: 4,
      text: "The Wall Street Journal — H-P to Split Into Two Public Companies (October 6, 2014)",
    },
    {
      id: 5,
      text: "Financial Times — Meg Whitman Reverses Course With HP Split (October 6, 2014)",
    },
    {
      id: 6,
      text: "Reuters — HP to split into two companies, cuts another 5,000 jobs (October 6, 2014)",
    },
    {
      id: 7,
      text: "Bloomberg — HP Splits in Two as Whitman Reverses Hewlett-Packard Strategy (October 2014)",
    },
    {
      id: 8,
      text: "Reuters — HPE to spin off, merge enterprise services unit with CSC to form DXC (May 2016)",
    },
    {
      id: 9,
      text: "Financial Times — Micro Focus to buy HPE software arm for $8.8bn (September 2016)",
    },
    {
      id: 10,
      text: "Crain's New York Business — Relational Investors quietly pushed HP toward breakup (2014 retrospective)",
    },
  ],

  seo: {
    title: "HP × HP Inc + HPE Two-Way Split — Complete Analysis of a 76-Year Big-Tech Breakup",
    description:
      "Deep analysis of HP's 2015 two-way split. Meg Whitman's $55B separation decision, the Section 355 tax-free spinoff structure, the launch of HP Inc + HPE, and an eleven-year retrospective on the DXC and Micro Focus spin-merges.",
    keywords: [
      "HP split",
      "HPE spinoff",
      "HP Inc HPE",
      "Meg Whitman",
      "Hewlett Packard Enterprise",
      "Section 355 tax-free spinoff",
      "big tech breakup",
      "spin-merge",
      "DXC Technology",
      "Micro Focus",
      "Relational Investors",
      "Ralph Whitworth",
    ],
  },

  concepts: [
    {
      term: "Section 355 Tax-Free Spinoff",
      href: "/deal-101/section-355-spinoff",
      description: "US tax-free corporate separation structure under IRC §355 — the standard tool for HP, GE, DowDuPont, 3M, and other voluntary breakups.",
    },
    {
      term: "Reverse Morris Trust (Spin-Merge)",
      href: "/deal-101/reverse-morris-trust",
      description: "Tax-free combination of a spun-off subsidiary with another company. HPE's DXC and Micro Focus spin-merges are textbook cases.",
    },
    {
      term: "Sum-of-Parts Valuation",
      href: "/deal-101/sum-of-parts",
      description: "Valuing a conglomerate as the sum of its independent business segments. The headline rationale for HP's split, though the immediate premium was negligible.",
    },
    {
      term: "Serial Spin-Merge",
      description: "Pattern of executing multiple spin-merges in the years immediately following a parent breakup. HPE's Enterprise Services → DXC and Software → Micro Focus are the archetype.",
    },
    {
      term: "Conglomerate Discount",
      href: "/deal-101/conglomerate-discount",
      description: "Discount applied by markets to diversified holding structures. In HP's case, the discount had largely already been priced out before the split.",
    },
    {
      term: "M&A vs Spin-Off Decision Tree",
      description: "Framework for choosing between cash divestiture, carve-out IPO, tax-free spinoff, and spin-merge for a non-core business unit. HP chose options 3 + 4.",
    },
    {
      term: "DXC / Micro Focus Aftermath",
      description: "Case study in how the value of a parent breakup is determined as much by follow-on transactions as by the original split itself.",
    },
    {
      term: "Quiet Activism",
      description: "Strategy of pressing for corporate change through private engagement rather than public campaigns. Relational Investors' role at HP is the canonical example.",
    },
  ],

  faq: [
    {
      q: "Why did HP decide to split into two companies?",
      a: "Consumer PCs/printers and enterprise infrastructure are fundamentally different businesses. PCs run on short product cycles, price competition, and capital return; enterprise infrastructure runs on long-term contracts, services revenue, and M&A-led growth. Inside one corporate envelope they competed for capital, talent, and acquisitions, forcing perpetual compromises on both sides. Meg Whitman initially resisted separation after taking over in 2011, but by 2014 the combination of activist pressure from Relational Investors, a structurally weakening PC market, and the lingering aftermath of the $8.8B Autonomy write-down made the case overwhelming.",
    },
    {
      q: "Why was the day-one combined market cap almost identical to pre-split?",
      a: "Because the market had already priced the two businesses rationally. In the year between announcement and close, investors had time to compute the implied standalone values of HP Inc and HPE and arbitrage them into the integrated stock. HP's conglomerate discount was never as large as GE's (13–15%) or DowDuPont's (~30%). The transaction was also the first of its kind in big tech, so market participants lacked clear precedent multiples to apply. The result: no immediate re-rating from the split itself. The eleven-year stock performance was instead driven by follow-on execution (spin-merges and M&A).",
    },
    {
      q: "Why did HPE's DXC and Micro Focus spin-merges fail?",
      a: "Both deals are case studies in the acquirer lacking integration capability. DXC Technology (HPE Enterprise Services + CSC) launched into a market where cloud adoption was rapidly hollowing out traditional IT services demand; the company has cycled through repeated restructurings and market cap has fallen from ~$10B at launch to roughly $4B by 2024. Micro Focus (the $8.8B HPE Software combination) never realised promised integration synergies, impaired ~$3B of goodwill by 2018, lost ~70% of its share price, and was sold to OpenText in 2023. The common lesson: spin-merges only work if the acquiring company can actually integrate the assets — without that, both sides destroy value.",
    },
    {
      q: "What's the biggest difference between the HP split and the GE three-way breakup?",
      a: "(1) Size of the pre-existing conglomerate discount — GE's stock had collapsed 89% by 2018 and traded at an obvious discount, whereas HP had already been priced for separation. (2) Follow-on execution — GE's HealthCare and Vernova spinoffs created stable independent values, while HP's spin-merges destroyed value at both DXC and Micro Focus. (3) Verdict — GE's combined post-split market cap exceeded 2.5× the pre-split value, while HP's stayed flat for eleven years. The pairing demonstrates that the decision to split and the execution after the split are independent value-creation factors.",
    },
    {
      q: "What role did Relational Investors play?",
      a: "Relational acquired a 1.2% stake (~$1B at the time) in HP in 2011 and Ralph Whitworth pressed Meg Whitman and the board privately to separate the company. Unlike public-campaign activists such as Carl Icahn or Bill Ackman, Relational operated entirely without press, proxy filings, or public statements — the model 'quiet activism' case. Whitman publicly resisted separation for three years before reversing course in 2014, and acknowledged Relational's influence after the fact. The approach has since served as a template for ValueAct, Trian, and others in big-tech activism (Salesforce, Disney).",
    },
    {
      q: "Was the HP split ultimately a success or a failure?",
      a: "Both, depending on the metric. On strategic focus it succeeded: HP Inc established a disciplined consumer capital-return model and HPE became a pure-play enterprise infrastructure company capable of doing the $14B Juniper acquisition. As the first voluntary big-tech breakup, it became the direct template for IBM-Kyndryl, GE, 3M-Solventum, and Honeywell. On shareholder value it failed: combined market cap was flat over eleven years against an S&P 500 that roughly tripled — more than 200ppt of underperformance. The prevailing reading: 'The decision to split was right, but the execution after the split (the spin-merges) destroyed value.' The HP separation is remembered as the founding example of voluntary big-tech breakups, and as proof that a split alone is a tool — not a cure.",
    },
  ],
};

export default deal;
