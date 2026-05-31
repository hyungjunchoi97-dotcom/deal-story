/**
 * IBM → Kyndryl Spinoff
 * Legacy IT Infrastructure Separation — Announced October 2020, Completed November 2021
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ibm-kyndryl",
  title: "Why IBM Spun Off Its $19B IT Infrastructure Business — Legacy Separation and Hybrid Cloud Focus Strategy Dissected",
  subtitle: "Hybrid Cloud & AI Focus · Red Hat Strategy · Kyndryl as World's Largest IT Services Firm · -70% Post-Spinoff Reality",
  category: "restructuring",
  industry: "Information Technology",
  country: "USA",
  announcedAt: "2020-10-08",
  closedAt: "2021-11-04",
  announcedDisplay: "October 2020",
  closedDisplay: "November 2021",
  readingMinutes: 10,
  tags: [
    "IBM",
    "Kyndryl",
    "IT infrastructure",
    "spinoff",
    "hybrid cloud",
    "Red Hat",
    "legacy IT",
    "tax-free spinoff",
    "IT services",
  ],
  excerpt:
    "IBM separated its Managed Infrastructure Services division into Kyndryl Holdings Inc., which listed on the NYSE on November 4, 2021. With ~$19B in annual revenue and 90,000 employees across 60 countries, it became the world's largest independent IT infrastructure services company. IBM pivoted to hybrid cloud and AI via Red Hat. Kyndryl's stock has since fallen over 70% — a stark illustration of the structural challenges facing legacy IT businesses.",

  acquirer: { initials: "IBM", bg: "bg-blue-700", label: "IBM (International Business Machines)" },
  target: { initials: "KD", bg: "bg-purple-700", label: "Kyndryl Holdings Inc." },

  background: [
    "Founded in 1911, IBM led the IT industry for over a century. By the 2010s, the rapid spread of cloud computing began to pressure IBM's traditional mainframe and IT infrastructure management business. As enterprise customers migrated from on-premises IT infrastructure to AWS, Azure, and GCP, IBM's managed infrastructure services revenue began declining at 5–10% annually.",
    "In 2019, IBM acquired open-source software company Red Hat for $34B under CEO Ginni Rometty. When Arvind Krishna took over as CEO in 2020, he crystallized this strategic direction even further. His position was unambiguous: 'IBM is now a hybrid cloud and AI company. Legacy infrastructure management is not who we are.'",
    "On October 8, 2020, IBM CEO Arvind Krishna officially announced the spinoff of IBM's managed infrastructure services division as a fully independent company, to be named 'Kyndryl.' With ~$19B in annual revenue and 90,000 employees across 60 countries, Kyndryl was set to become the world's largest independent IT infrastructure services company.",
    "The separation was structured as a Section 355 tax-free spinoff. IBM shareholders received one Kyndryl share for every IBM share they held, tax-free. On November 4, 2021, Kyndryl began trading on the NYSE (ticker: KD), completing the separation. Kyndryl opened with a market cap of approximately $19B, but persistent revenue declines driven by cloud migration caused the stock to fall steadily after listing.",
  ],

  dealSummary: {
    dealValueDisplay: "$19B (Kyndryl market cap at listing)",
    acquirerName: "IBM (International Business Machines Corporation)",
    targetName: "Kyndryl Holdings Inc.",
    announcedDisplay: "October 2020",
    closedDisplay: "November 2021",
    country: "USA",
  },

  executiveSummary: [
    "World's largest IT infrastructure spinoff — ~$19B revenue, 90,000 employees in 60 countries, Kyndryl launches independently",
    "IBM hybrid cloud + AI focus — clarifies Red Hat-based growth story for investors",
    "Section 355 tax-free spinoff — IBM shareholders receive one Kyndryl share per IBM share, tax-free",
    "Shedding the 'legacy IT dinosaur' label — CEO Arvind Krishna redefines IBM's identity",
    "Kyndryl stock -70%+ post-spinoff — structural reality of legacy IT revenue declines fully exposed",
    "IBM stock gradually recovering — repriced as a hybrid cloud and AI growth company",
    "Cloud migration acceleration — AWS, Azure, GCP benefit as Kyndryl customer attrition accelerates",
  ],

  industryOverview: {
    body: "In 2020, the global IT services market was approximately $1T in size, and the power shift between managed infrastructure services and cloud services was accelerating rapidly. AWS, Azure, and GCP dominated the public cloud market, quickly displacing enterprise on-premises IT infrastructure. Traditional IT companies like IBM, HP, and Dell faced structural revenue declines in their infrastructure management businesses.",
    metrics: [
      { label: "Global IT Services Market", value: "~$1T", sub: "2020 estimate, cloud migration accelerating" },
      { label: "Kyndryl Annual Revenue", value: "~$19B", sub: "At spinoff, operating in 60 countries" },
      { label: "Kyndryl Employees", value: "~90,000", sub: "World's largest independent IT infrastructure services firm" },
      { label: "Kyndryl Market Cap at Listing", value: "~$19B", sub: "NYSE listing, November 4, 2021" },
    ],
    subBody: "The explosive growth of public cloud was structurally shrinking the traditional IT infrastructure outsourcing market. Kyndryl's primary customers — financial institutions and government agencies — were slower to migrate to the cloud, but faced the same long-term pressure. By separating this declining business, IBM was able to present investors with a clean hybrid cloud growth narrative.",
    players: [
      { name: "IBM", role: "Spinoff parent, focusing on hybrid cloud + AI" },
      { name: "Kyndryl", role: "Spun-off entity, world's largest independent IT infrastructure services company" },
      { name: "Amazon AWS", role: "#1 public cloud, beneficiary of Kyndryl customer migration" },
      { name: "Microsoft Azure", role: "#2 public cloud, IBM-Red Hat partner and competitor simultaneously" },
      { name: "Accenture", role: "IT managed services competitor with cloud consulting strengths" },
    ],
  },

  companyOverview: {
    targetName: "IBM Infrastructure Services Division (pre-Kyndryl spinoff)",
    body: "Kyndryl was formed by incorporating IBM's Managed Infrastructure Services (MIS) division as a standalone public company. It managed and operated the IT infrastructure of long-standing IBM customers — including U.S. federal agencies, major financial institutions, and manufacturers. With 90,000 employees in 60 countries, it became the world's largest independent IT infrastructure services company at the time of its listing. Core services included mainframe maintenance, hybrid cloud infrastructure management, network management, and IT security operations. However, revenue was declining as cloud migration accelerated.",
    metrics: [
      { label: "Annual Revenue (at spinoff)", value: "~$19B", sub: "Declining trend" },
      { label: "Employees", value: "~90,000", sub: "60 countries, world's largest independent IT infrastructure firm" },
      { label: "Market Cap at Listing", value: "~$19B", sub: "NYSE listing, November 2021" },
      { label: "Key Customers", value: "U.S. federal agencies, major banks", sub: "IBM's longstanding enterprise contract customers" },
      { label: "Market Cap (3 years post-listing)", value: "~$6B", sub: "Stock down 70%+" },
    ],
    financials: [
      {
        year: "FY2019",
        revenue: 19000,
        cogs: 14500,
        grossProfit: 4500,
        sga: 2000,
        operatingIncome: 1000,
        ebitda: 1800,
      },
      {
        year: "FY2020",
        revenue: 18300,
        cogs: 14000,
        grossProfit: 4300,
        sga: 1900,
        operatingIncome: 800,
        ebitda: 1600,
      },
    ],
    financialsNote: "USD millions. IBM Infrastructure Services Division (pre-Kyndryl spinoff) basis. Based on public filings, estimates included.",
    financialsCurrency: "USD",
    financialsUnit: "millions",
  },

  dealStructure: {
    body: "IBM separated Kyndryl as a fully independent company via a Section 355 tax-free spinoff. IBM shareholders received one Kyndryl share for every IBM share they held, tax-free. Upon completion, IBM held no remaining stake in Kyndryl. Kyndryl began trading independently on the NYSE on November 4, 2021 (ticker: KD).",
    preOwnership: {
      nodes: [
        { id: "ibm_parent", label: "IBM", sub: "NYSE Listed (IBM)", type: "acquirer" },
        { id: "mis_div", label: "Infrastructure Services Division (pre-Kyndryl)", sub: "100% IBM-owned internal division", type: "target" },
        { id: "cloud_div", label: "Hybrid Cloud Division", sub: "100% IBM-owned, includes Red Hat", type: "entity" },
      ],
      edges: [
        { from: "ibm_parent", to: "mis_div", label: "100%" },
        { from: "ibm_parent", to: "cloud_div", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ibm_post", label: "IBM", sub: "NYSE: IBM (Hybrid Cloud & AI focus)", type: "acquirer" },
        { id: "kyndryl", label: "Kyndryl Holdings Inc.", sub: "NYSE: KD (Independent, listed Nov 2021)", type: "public" },
        { id: "ibm_shareholders", label: "IBM Shareholders", sub: "Received 1 Kyndryl share per IBM share, tax-free", type: "entity" },
      ],
      edges: [
        { from: "ibm_post", to: "kyndryl", label: "Fully separated (0% retained)" },
        { from: "ibm_shareholders", to: "kyndryl", label: "Tax-free distribution received" },
      ],
    },
    keyTerms: [
      { label: "Separation Method", value: "Section 355 Tax-Free Spinoff", accent: true },
      { label: "Distribution Ratio", value: "1 Kyndryl share per IBM share (tax-free)", accent: true },
      { label: "Kyndryl Listing Date", value: "November 4, 2021, NYSE (KD)", accent: false },
      { label: "Market Cap at Listing", value: "~$19B", accent: false },
      { label: "IBM Retained Stake", value: "0% (complete separation)", accent: false },
      { label: "EV / EBITDA", value: "~10x (at listing)", accent: false },
      { label: "Kyndryl Employees", value: "~90,000 in 60 countries", accent: false },
    ],
  },

  advisors: {
    body: "IBM engaged Evercore and Goldman Sachs as financial advisors and Sullivan & Cromwell as legal counsel to structure the spinoff.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "IBM (Spinoff Parent)",
        initials: "IBM",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Evercore", role: "Financial Advisor (FA)", roleType: "financial", note: "Spinoff structure design and valuation advisory" },
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Exchange structure and underwriting advisory" },
          { firm: "Sullivan & Cromwell", role: "Legal Counsel", roleType: "legal", note: "Section 355 tax-free spinoff legal oversight" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public disclosures and SEC filings.",
  },

  valuation: {
    body: "Kyndryl listed at approximately 10x EV/EBITDA — below the IT services peer average (Accenture, DXC Technology, etc.), already reflecting the declining revenue trajectory. As revenue declines continued post-separation, the market cap fell from ~$19B at listing to approximately $6B within two years.",
    rows: [
      { item: "Kyndryl Market Cap at Listing", val: "~$19B", note: "NYSE listing, November 2021", accent: true },
      { item: "EV / EBITDA (at listing)", val: "~10x", note: "Below IT services peer average, reflecting revenue decline" },
      { item: "Kyndryl Annual Revenue", val: "~$19B", note: "FY2020 basis, declining trend" },
      { item: "EBITDA", val: "~$1.6B", note: "FY2020 basis, ~8.7% margin" },
      { item: "IBM Market Cap (post-spinoff)", val: "Gradual recovery", note: "Repriced as hybrid cloud and AI growth company" },
      { item: "Kyndryl Market Cap (2023)", val: "~$6B", note: "-68% from listing", accent: true },
    ],
    disclaimer: "Valuation figures are based on public disclosures and SEC filings. Kyndryl has experienced persistent stock price declines since listing.",
  },

  rationale: {
    buyer: {
      title: "IBM's Rationale for the Spinoff",
      initials: "IBM",
      bg: "bg-blue-700",
      points: [
        "Hybrid cloud + AI focus — concentrate R&D resources on Red Hat-based OpenShift platform and IBM watsonx AI",
        "Escape the 'legacy IT dinosaur' label — redefine IBM as a cloud and AI growth company in investors' minds",
        "Multiple rerating — removing the declining infrastructure business unlocks cloud and AI growth multiples for IBM",
        "Management focus — direct leadership energy toward platform and software rather than Kyndryl's complex global infrastructure operations",
        "Investor narrative clarity — position IBM as a hybrid cloud pure-play to attract institutional growth investors",
      ],
    },
    seller: {
      title: "Kyndryl's Case for Independence",
      initials: "KD",
      bg: "bg-purple-700",
      points: [
        "Independent management freedom — focus on infrastructure customer service without conflicts with IBM's cloud and AI strategy",
        "Multi-vendor strategy — free to partner with AWS, Azure, GCP, and other cloud providers rather than being constrained to IBM solutions",
        "Standalone capital structure — design dividend and debt policies suited to infrastructure services business characteristics",
        "Customer trust enhancement — position as a neutral IT services company not tied to any specific vendor's technology stack",
        "Independent M&A — pursue standalone acquisitions in the IT infrastructure services domain",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-separation, IBM concentrated on hybrid cloud and AI, showing a gradual recovery. IBM's watsonx AI platform reached $2B+ in bookings in 2024. IBM's stock climbed toward $220+ by 2024. Kyndryl, however, experienced persistent revenue declines of 5–8% annually, driven by accelerating cloud migration, and its stock fell more than 70% from listing levels. By 2023, Kyndryl's market cap had contracted from ~$19B to approximately $6B. Kyndryl management has pursued an 'Alliances' strategy — partnering with AWS, Azure, and Google Cloud to pivot from legacy infrastructure management toward cloud migration consulting — but structural headwinds have remained formidable.",
    overallVerdict: "IBM's hybrid cloud focus strategy effective; Kyndryl proves the limits of legacy IT as a standalone",
    positives: [
      "IBM cloud & AI rerating — watsonx $2B+ bookings, IBM stock approaching $220+",
      "IBM management focus effect — R&D concentrated on Red Hat, cloud, and AI; growth narrative clarified",
      "IBM shareholders' dual benefit — received Kyndryl shares plus benefited from IBM's improved business mix",
      "Successful legacy image transformation — IBM successfully repositioned as a hybrid cloud company in investors' eyes",
      "Kyndryl independent multi-vendor strategy — partnering with AWS and Azure to retain existing IBM customers",
    ],
    risks: [
      "Kyndryl stock -70%+ decline — structural limits of legacy IT revenue declines",
      "Kyndryl employee restructuring — global workforce reductions inevitable post-independence",
      "Cloud migration acceleration — customers' accelerating shift to public cloud continues to shrink Kyndryl's revenue",
      "IBM watsonx competitive intensity — fierce enterprise AI competition with OpenAI, Google, and Amazon",
      "Kyndryl profitability challenge — low EBITDA margin (~8%) makes standalone viability difficult",
    ],
    editorNote: "The IBM-Kyndryl spinoff is a textbook case of the 'distressed asset separation effect.' IBM successfully separated its legacy IT business and pivoted to a hybrid cloud company identity. But Kyndryl's -70% stock decline starkly illustrates how difficult it is for a legacy IT infrastructure business to survive independently. The deal proves that the assumption 'spinoffs benefit both parties' does not always hold.",
  },

  tombstone: {
    acquirerInitials: "IBM",
    acquirerBg: "bg-blue-700",
    targetInitials: "KD",
    targetBg: "bg-purple-700",
    acquirerName: "IBM (International Business Machines)",
    targetName: "Kyndryl Holdings Inc.",
    dealTitle: "Legacy IT Infrastructure Spinoff",
    dealSize: "$19B (Kyndryl market cap at listing)",
    dealSizeUSD: "USD 19B market cap at listing",
    evEbitda: "~10x EBITDA",
    closeDate: "Nov 2021",
  },

  sources: [
    { id: 1, text: "IBM Press Release — IBM Plans to Separate Managed Infrastructure Services Unit (October 2020)", url: "https://newsroom.ibm.com" },
    { id: 2, text: "Kyndryl Form 10 Registration Statement (SEC Filing, 2021)", url: "https://www.sec.gov" },
    { id: 3, text: "The Wall Street Journal — IBM Spins Off IT-Services Business (November 2021)" },
    { id: 4, text: "Bloomberg — Kyndryl Begins Trading as IBM Spinoff Hits NYSE (November 2021)" },
    { id: 5, text: "Financial Times — IBM's Kyndryl Spinoff: What the Deal Means for Big Blue (2021)" },
    { id: 6, text: "Reuters — IBM Completes Kyndryl Spinoff, Shares Begin Trading (November 2021)" },
    { id: 7, text: "CNBC — Kyndryl CEO Martin Schroeter on the Challenge of Running IBM's Legacy IT Business (2022)" },
  ],

  seo: {
    title: "IBM-Kyndryl Spinoff Analysis — Legacy IT Separation and Hybrid Cloud Focus",
    description: "Complete analysis of the IBM-Kyndryl spinoff — legacy IT separation and hybrid cloud focus strategy. Why Kyndryl's stock fell 70%, how IBM was repriced, and the full spinoff structure dissected.",
    keywords: [
      "IBM Kyndryl spinoff",
      "IBM managed infrastructure spinoff",
      "Kyndryl stock decline",
      "legacy IT separation",
      "IBM hybrid cloud strategy",
      "Red Hat IBM",
      "IT infrastructure spin-off",
    ],
  },

  concepts: [
    { term: "Tax-Free Spinoff (Section 355)", href: "/deal-101/tax-free-spinoff", description: "U.S. tax code Section 355 structure allowing a parent to distribute subsidiary shares to shareholders tax-free — IBM's chosen approach" },
    { term: "Multiple Dilution", href: "/deal-101/multiple-dilution", description: "When high-growth cloud/AI and low-growth legacy IT coexist in one company, investors apply a blended — lower — multiple to both" },
    { term: "Growth-Legacy Separation Strategy", href: "/deal-101/growth-legacy-separation", description: "Restructuring strategy of separating high-growth new businesses from low-growth legacy businesses so each can receive its optimal multiple" },
    { term: "Spin-off", href: "/deal-101/spinoff", description: "Restructuring technique where a parent separates a business unit into an independent company and distributes shares to existing shareholders" },
  ],

  faq: [
    {
      q: "Why did IBM spin off its $19B IT infrastructure business?",
      a: "The core reason is a growth-legacy multiple conflict. IBM's managed infrastructure services business was declining at 5–10% annually as cloud migration accelerated. IBM's Red Hat-based hybrid cloud and AI business, on the other hand, is high-growth and high-margin. When both coexist under one roof, investors apply a blended — lower — multiple, undervaluing IBM's cloud and AI assets. The spinoff enabled IBM to present a clean hybrid cloud growth narrative to investors.",
    },
    {
      q: "Why did Kyndryl's stock fall so dramatically after the spinoff?",
      a: "Structural revenue decline. Kyndryl's core business is managing enterprise on-premises IT infrastructure — but those same customers were migrating rapidly to AWS, Azure, and GCP. Post-independence, Kyndryl had to absorb this headwind without IBM's support. Kyndryl's revenue declined 5–8% annually after the spinoff, and its market cap contracted from ~$19B to ~$6B within three years.",
    },
    {
      q: "IBM paid $34B for Red Hat and then still spun off its IT infrastructure. Why?",
      a: "The Red Hat acquisition (2019) and the Kyndryl spinoff (2021) are two sides of the same strategic coin. The Red Hat acquisition gave IBM a hybrid cloud platform (OpenShift), and the Kyndryl spinoff removed the legacy infrastructure drag. Together, they constructed the 'IBM = hybrid cloud + AI' growth narrative for investors — acquiring a high-growth asset while disposing of a declining one.",
    },
    {
      q: "What is Kyndryl's outlook going forward?",
      a: "It remains challenging. Kyndryl management is pursuing an 'Alliances' strategy — partnering with AWS, Azure, and Google Cloud to pivot from legacy infrastructure management toward cloud migration consulting. Without the IBM brand, renewing long-term enterprise contracts has become increasingly difficult, and the structural shrinkage of the IT outsourcing market continues. Rapidly building cloud transition consulting capabilities is Kyndryl's most critical challenge for long-term survival.",
    },
  ],

  restructuringOverview: {
    body: "The IBM-Kyndryl spinoff is a defining example of what happens when a hybrid cloud and AI growth company and a legacy IT infrastructure business coexist under one roof — and how separating them resolves the multiple conflict. It also provides a candid view of the structural challenges a separated legacy business faces after independence.",
    trigger: "Multiple conflict between hybrid cloud & AI growth and legacy IT infrastructure decline under one roof",
    triggerDetail: "IBM's IT infrastructure management services generated stable revenue of ~$19B but were declining at 5–10% annually as enterprises migrated to cloud. Meanwhile, Red Hat-based hybrid cloud and AI were high-growth, high-margin. The combination made it difficult for IBM to shed its 'legacy IT dinosaur' image and receive cloud-comparable multiples versus pure-play peers like AWS, Azure, and GCP. The spinoff gave IBM a clean growth story.",
    method: "tax-free-spinoff",
    methodLabel: "Section 355 Tax-Free Spinoff",
    whyThisMethod: "Kyndryl had sufficient operational independence, and distributing shares tax-free gave IBM shareholders two distinct investment choices without triggering a tax event. A tax-free spinoff created more value for IBM shareholders than a cash sale of the business would have.",
    methodVsAlternatives: [
      {
        method: "Cash Sale / Divestiture",
        reason: "Selling a $19B IT services company would have triggered billions in tax liabilities and risked customer attrition during a lengthy deal process.",
      },
      {
        method: "Joint Venture (JV) Structure",
        reason: "Retaining any stake would have perpetuated the legacy business stigma, limiting the multiple improvement benefit for IBM.",
      },
      {
        method: "Maintaining Combined Operations",
        reason: "IBM's legacy image would have persisted versus cloud pure-plays, preventing the AI and cloud growth multiples from being applied.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "Growth-Legacy Separation",
        explanation: "When high-growth digital businesses and low-growth legacy businesses coexist in a single company, investors struggle to apply a unified valuation framework. After separation, each entity receives the appropriate sector multiple.",
        howApplied: "Post-spinoff, IBM concentrated on hybrid cloud and AI, improving its P/E multiple. Kyndryl independently receives IT services multiples on its own terms.",
      },
      {
        concept: "Strategic Clean Slate",
        explanation: "A restructuring strategy through which a company presents a 'new story' to investors by cleanly separating its legacy exposure. IBM used the Kyndryl spinoff to firmly establish its 'AI hybrid cloud company' identity.",
        howApplied: "IBM CEO Arvind Krishna described the spinoff as 'a new chapter in IBM's history' and directed R&D and M&A resources exclusively toward Red Hat and AI businesses.",
      },
      {
        concept: "Post-Spinoff Performance Reality",
        explanation: "Separated legacy business units tend to have their revenue and margin pressures fully exposed after independence — they must prove standalone viability without the parent's support.",
        howApplied: "Kyndryl's stock fell more than 70% from its listing price post-spinoff. Accelerating cloud migration of legacy IT infrastructure drove persistent revenue declines.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "October 2020",
        action: "IBM CEO Arvind Krishna officially announces spinoff",
        detail: "IBM announces the separation of its infrastructure services division as a fully independent company. The name 'Kyndryl' is selected. IBM redefines itself as a hybrid cloud and AI company.",
        financialNote: "IBM stock +5% on announcement day",
      },
      {
        phase: "Phase 2",
        date: "January–October 2021",
        action: "Kyndryl standalone preparation — separating customer contracts and infrastructure",
        detail: "Customer contract renegotiations in 60 countries, IT infrastructure asset separation, Kyndryl brand launch. Transitional services agreement (TSA) established with IBM.",
      },
      {
        phase: "Phase 3",
        date: "November 4, 2021",
        action: "Kyndryl NYSE independent listing (KD)",
        detail: "IBM shareholders receive 1 Kyndryl share per IBM share, tax-free. NYSE listing (KD). Opens with ~$19B market cap. World's largest independent IT infrastructure services company launched.",
        financialNote: "~$19B market cap at listing, declining thereafter",
      },
    ],
    stakeholders: [
      {
        name: "IBM Shareholders",
        icon: "💻",
        impact: "positive",
        summary: "IBM growth story focus + Kyndryl shares",
        detail: "IBM shareholders received Kyndryl shares and could independently decide their investment in each company. IBM began repricing as a cloud and AI growth stock.",
        metric: "IBM stock gradually recovering post-spinoff",
      },
      {
        name: "Kyndryl Employees",
        icon: "🖥️",
        impact: "mixed",
        summary: "Stable employment vs. legacy business pressure",
        detail: "90,000 employees faced restructuring pressure without IBM's support post-independence. Some business unit consolidations and headcount reductions were inevitable.",
        metric: "90,000 Kyndryl employees (60 countries)",
      },
      {
        name: "Kyndryl Shareholders",
        icon: "📉",
        impact: "negative",
        summary: "Stock down 70%+ from IPO",
        detail: "Structural revenue declines from legacy IT infrastructure's cloud migration caused Kyndryl's stock to fall persistently post-listing. Accelerating cloud migration reduced revenue.",
        metric: "Stock -70%+ within 2 years of listing",
      },
      {
        name: "Kyndryl Customers (Government & Banks)",
        icon: "🏛️",
        impact: "neutral",
        summary: "Service continuity maintained",
        detail: "Short-term disruption was limited by transitional service agreements (TSAs) post-IBM separation. However, long-term contract renewals became more difficult without IBM's brand backing.",
      },
      {
        name: "Amazon AWS / Microsoft Azure",
        icon: "☁️",
        impact: "positive",
        summary: "Beneficiary of accelerated legacy IT migration",
        detail: "Enterprises moving from IBM infrastructure to cloud accelerated their migration following the Kyndryl spinoff, benefiting cloud providers.",
      },
    ],
    beforeAfter: [
      {
        metric: "IBM Multiple (P/E)",
        before: "~12x (legacy mixed in)",
        after: "~18x (cloud-focused)",
        change: "+6x",
        isPositive: true,
      },
      {
        metric: "Kyndryl Revenue",
        before: "$19B (at spinoff)",
        after: "$16B (3 years later, declining)",
        change: "-16%",
        isPositive: false,
      },
      {
        metric: "IBM R&D Focus",
        before: "Dispersed across cloud + infrastructure",
        after: "Concentrated on hybrid cloud & AI",
        change: "Focus clarity achieved",
        isPositive: true,
      },
      {
        metric: "Kyndryl Market Cap",
        before: "$19B (at listing)",
        after: "$6B (2023)",
        change: "-68%",
        isPositive: false,
      },
      {
        metric: "IBM watsonx AI",
        before: "Unclear direction",
        after: "$2B+ bookings (2024)",
        change: "Focus accelerated post-Kyndryl separation",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "IBM +5% on announcement day",
      shortTermReturn: "IBM +15%, Kyndryl -40% over 1 year post-spinoff",
      longTermReturn: "IBM at $220+ in 2024, Kyndryl at $15 (-30% from listing price)",
      contextNote: "'Distressed asset separation' effect clearly positive for IBM; Kyndryl illustrates the structural limits of legacy IT as a standalone company",
    },
  },
};

export default deal;
