/**
 * BC Partners × PetSmart (2015–2021)
 * The Largest Retail LBO Ever, Turning Amazon Fear Into Advantage — The Chewy.com Counterattack
 * $8.7B LBO → Chewy acquisition $3.35B → Chewy IPO $8.8B valuation → Exceptional returns
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bc-partners-petsmart",
  title: "The LBO That Weaponized Amazon Fear — How BC Partners Fought Back with PetSmart",
  subtitle: "$8.7B Largest Retail LBO Ever → Chewy.com Acquisition → Online Reversal → Record Returns",
  category: "ma",
  industry: "Retail / Pet Supplies",
  country: "United States",
  announcedAt: "2014-12-14",
  closedAt: "2015-03-11",
  announcedDisplay: "December 2014",
  closedDisplay: "March 2015",
  readingMinutes: 10,
  tags: [
    "BC Partners", "PetSmart", "Chewy", "LBO", "retail", "pet supplies",
    "e-commerce", "Amazon", "digital transformation", "platform strategy", "IPO",
    "leveraged loan", "LevFin", "PE", "private equity", "largest retail LBO",
  ],
  excerpt:
    "In 2015, BC Partners executed the largest retail LBO in history ($8.7B) to acquire PetSmart. This was a period when investors shunned brick-and-mortar retail due to Amazon's threat. But BC Partners then acquired Chewy.com for $3.35B in 2017 to launch a digital counteroffensive. Chewy's IPO in 2019 valued it at $8.8B — 2.6× the acquisition price. A contrarian LBO that turned Amazon fear into alpha.",

  acquirer: { initials: "BCP", bg: "bg-teal-700", label: "BC Partners + La Caisse + StepStone" },
  target:   { initials: "PET", bg: "bg-purple-600", label: "PetSmart, Inc." },

  background: [
    "PetSmart was America's largest specialty pet retail chain, operating 1,387 stores in 2014 and providing pet supplies, food, grooming, and training services. The U.S. pet market was growing steadily at over $60B annually, but Amazon's aggressive entry into the pet supplies category had cast an 'Amazon fear' over the entire offline retail sector.",
    "BC Partners' thesis was the uniqueness of the pet market: pet food, medications, and care require a high degree of experiential interaction (veterinary consultation, grooming, training) that cannot be replicated purely online. PetSmart's offline services (clinics, grooming, training) could maintain differentiation that Amazon could never offer.",
    "In December 2014, BC Partners launched a tender offer at $83 per share, acquiring PetSmart for $8.7B. The deal comprised approximately $2.0B in equity and $6.7B in TLB and other debt — the largest retail LBO in history at that time. Then, in 2017, BC Partners made a bold move: it acquired Chewy.com, a rapidly growing online pet retailer, for $3.35B.",
  ],

  dealSummary: {
    dealValueDisplay: "$8.7B",
    acquirerName: "BC Partners + La Caisse de dépôt + StepStone",
    targetName: "PetSmart, Inc.",
    announcedDisplay: "December 14, 2014",
    closedDisplay: "March 11, 2015",
    country: "United States (NASDAQ: PETM → private)",
  },

  executiveSummary: [
    "BC Partners consortium acquired PetSmart for $8.7B ($83/share) — the largest retail LBO in history.",
    "Thesis: pet services (grooming, training, clinics) cannot be replaced by Amazon → offline differentiation preserved.",
    "2017 Chewy.com acquisition for $3.35B — secured the #1 online pet platform, a contrarian digital transformation.",
    "2019 Chewy IPO — valued at $8.8B at offering (2.6× the $3.35B acquisition price).",
    "BC Partners estimated combined PetSmart + Chewy MOIC ~3×+.",
  ],

  industryOverview: {
    body: "The U.S. pet market was valued at approximately $58B in 2014 — a 'golden niche' that kept growing despite economic recessions. The 'pet humanization' trend (treating pets like family members) drove increased spending on premium food, medical care, and grooming. Online channels including Amazon and Chewy.com were growing fast, but grooming, training, and veterinary services could only be delivered in person.",
    metrics: [
      { label: "U.S. Pet Market Size",    value: "$58B",    sub: "2014 estimate, growing 5%+ annually" },
      { label: "PetSmart Store Count",    value: "1,387",   sub: "2014, across North America" },
      { label: "Chewy Acquisition Price", value: "$3.35B",  sub: "2017, #1 online pet platform" },
      { label: "Chewy IPO Valuation",     value: "$8.8B",   sub: "2019 IPO basis" },
    ],
    players: [
      { name: "PetSmart (BC Partners)",              role: "America's largest specialty pet retail chain" },
      { name: "Petco",                               role: "Offline pet retail #2, re-IPO'd in 2020" },
      { name: "Chewy.com (PetSmart subsidiary)",     role: "Online pet retail #1, IPO'd in 2019" },
      { name: "Amazon",                              role: "Online pet supplies #2, threatening offline expansion" },
    ],
  },

  companyOverview: {
    targetName: "PetSmart, Inc.",
    body: "Founded in 1986, the largest specialty pet retail chain in the United States. Beyond selling food, supplies, and medications, PetSmart operated grooming, training services, and PetSmart Charities — forming a pet services ecosystem. FY2014 revenue was $6.9B, EBITDA ~$890M, and EBITDA margin ~13%. Despite Amazon's threat, service revenue (grooming, training, clinics) represented ~20% of total revenue — creating a higher barrier to entry than pure product retail.",
    metrics: [
      { label: "LBO Deal Value",           value: "$8.7B",   sub: "$83/share, EV/EBITDA ~9.8×" },
      { label: "Revenue (FY2014)",         value: "$6.9B",   sub: "EBITDA margin ~13%" },
      { label: "Service Revenue Mix",      value: "~20%",    sub: "Grooming, training, clinics — Amazon cannot replicate" },
      { label: "Chewy IPO Valuation",      value: "$8.8B",   sub: "2019, 2.6× the $3.35B acquisition price" },
    ],
    financials: [
      {
        year: "FY2013",
        revenue: 6563,
        cogs: 4360,
        grossProfit: 2203,
        sga: 1420,
        operatingIncome: 783,
        ebitda: 855,
      },
      {
        year: "FY2014",
        revenue: 6917,
        cogs: 4580,
        grossProfit: 2337,
        sga: 1450,
        operatingIncome: 887,
        ebitda: 965,
      },
      {
        year: "FY2016",
        revenue: 7313,
        cogs: 4880,
        grossProfit: 2433,
        sga: 1520,
        operatingIncome: 913,
        ebitda: 1005,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "Unit: $M (millions) | FY2016 is pre-Chewy acquisition. Service revenue (grooming, training) grew steadily. Offline retail EBITDA held, but near-term EBITDA pressure was expected following the Chewy acquisition due to online investment.",
  },

  dealStructure: {
    body: "Approximately $2.0B equity + $6.7B in TLB and HY bonds — a classic retail LBO structure. Equity ratio ~23%. Typical of retail LBOs, ABL (Asset-Based Lending) backed by inventory and lease receivables was used alongside the TLB.",
    preOwnership: {
      nodes: [
        { id: "public",   label: "Public Market Shareholders", sub: "NASDAQ: PETM",             type: "entity" },
        { id: "petsmart", label: "PetSmart",                   sub: "1,387 stores, revenue $6.9B", type: "target" },
      ],
      edges: [
        { from: "public", to: "petsmart", label: "100% publicly listed shares" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bcp",      label: "BC Partners Consortium", sub: "Equity ~$2.0B",                type: "fund"   },
        { id: "tlb",      label: "TLB Lenders",            sub: "~$4.0B (floating rate, 1L)",   type: "entity" },
        { id: "hy",       label: "HY Bondholders",         sub: "~$2.7B (fixed rate, unsecured)", type: "entity" },
        { id: "petsmart2", label: "PetSmart",              sub: "Private",                       type: "target" },
        { id: "chewy",    label: "Chewy.com (from 2017)", sub: "Acquired for $3.35B",           type: "entity" },
      ],
      edges: [
        { from: "bcp",   to: "petsmart2", label: "Equity ~23%" },
        { from: "tlb",   to: "petsmart2", label: "$4.0B (1L secured)" },
        { from: "hy",    to: "petsmart2", label: "$2.7B (unsecured)" },
        { from: "petsmart2", to: "chewy", label: "100% subsidiary (2017)" },
      ],
    },
    keyTerms: [
      { label: "Deal Value",            value: "$8.7B (largest retail LBO in history)",     accent: true  },
      { label: "Entry EV/EBITDA",       value: "~9.8× (based on FY2014 EBITDA)",            accent: false },
      { label: "Chewy Acquisition",     value: "$3.35B (2017) → IPO $8.8B (2019)",         accent: true  },
      { label: "HY Bond Rate",          value: "~8.875% fixed (unsecured subordinated)",    accent: false },
      { label: "ABL Facility",          value: "Inventory & AR-backed revolving credit $1B", accent: false },
    ],
  },

  advisors: {
    body: "BC Partners retained UBS as lead arranger and Kirkland & Ellis as legal counsel. The PetSmart board appointed Evercore as independent financial advisor.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BC Partners Consortium (Acquirer)",
        initials: "BCP",
        bg: "bg-teal-700",
        advisors: [
          { firm: "UBS",              role: "Lead Arranger",   roleType: "financial", note: "TLB & HY syndication lead" },
          { firm: "Barclays",         role: "Co-Arranger",     roleType: "financial", note: "ABL facility structuring" },
          { firm: "Kirkland & Ellis", role: "Legal Advisor",   roleType: "legal",     note: "Retail LBO structure design" },
        ],
      },
      {
        side: "target",
        sideLabel: "PetSmart (Sell-Side)",
        initials: "PET",
        bg: "bg-purple-600",
        advisors: [
          { firm: "Evercore",       role: "Independent Financial Advisor", roleType: "financial", note: "Fairness opinion provided" },
          { firm: "Wachtell Lipton", role: "Legal Advisor",               roleType: "legal",     note: "Board M&A counsel" },
        ],
      },
    ],
  },

  valuation: {
    body: "BC Partners acquired PetSmart at EV/EBITDA ~9.8× (based on FY2014 EBITDA of $889M). The price reflected the defensive characteristics of the pet services segment and a digital transformation premium following the anticipated Chewy acquisition.",
    rows: [
      { item: "Entry EV",                   val: "$8.7B",    note: "EV/EBITDA ~9.8×",                    accent: true  },
      { item: "Chewy Acquisition Price (2017)", val: "$3.35B", note: "Chewy revenue ~$900M at acquisition", accent: false },
      { item: "Chewy IPO Valuation (2019)", val: "$8.8B",    note: "2.6× the acquisition price → large gain", accent: true },
      { item: "Estimated PetSmart+Chewy MOIC", val: "~3×+",  note: "Combined estimate for both entities", accent: true  },
    ],
    disclaimer: "PetSmart deal returns are not publicly disclosed. Following the Chewy spin-off IPO, PetSmart's standalone valuation is complex due to its debt burden. All figures are market estimates.",
  },

  rationale: {
    buyer: {
      title: "BC Partners' Investment Thesis",
      initials: "BCP",
      bg: "bg-teal-700",
      points: [
        "Pet services (grooming, training, clinics) cannot be replaced online — a defensive moat against Amazon",
        "Pet humanization trend — pet spending becomes a non-discretionary essential even in recessions",
        "Digital transformation option: ability to acquire online platforms like Chewy.com to combine offline + online",
        "Amazon-driven undervaluation — entering when investors feared all retail",
        "Pet health and medical service expansion: in-sourcing veterinary clinics to develop a high-margin revenue stream",
      ],
    },
    seller: {
      title: "PetSmart Board's Rationale for Accepting",
      initials: "PET",
      bg: "bg-purple-600",
      points: [
        "39% premium to pre-announcement closing price ($83/share) — immediate shareholder value realization",
        "Amazon fear was structurally depressing the public market valuation → going private was rational",
        "Expectation of leveraging BC Partners' European retail operating experience (Sports Direct, etc.)",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "BC Partners' PetSmart deal might have ended as a run-of-the-mill retail LBO without the Chewy.com acquisition. The $3.35B purchase of Chewy, valued at $8.8B at its 2019 IPO, is what transformed the entire deal into a success. PetSmart itself is financially stressed from its heavy debt load, but the Chewy spin-off IPO made that value tangible.",
    overallVerdict: "A Chewy-driven success — digital assets, not offline retail itself, were the source of returns",
    positives: [
      "Chewy.com acquisition ($3.35B) → IPO valuation $8.8B — 2.6× return",
      "Pet service revenue (grooming, training) remained stable — successful defense of areas Amazon cannot replace",
      "Structurally advantaged vs. Petco in online competition by virtue of owning Chewy",
    ],
    risks: [
      "PetSmart core debt of $6.7B — following the Chewy spin-off, interest burden continues to pressure cash flow",
      "2020 PetSmart bond distressed exchange — the legacy of high leverage",
      "Limited synergies as Chewy operates independently of PetSmart",
    ],
    editorNote: "The PetSmart lesson: the core alpha in this retail LBO was acquiring an asset (PetSmart) undervalued due to 'Amazon fear,' then discovering and acquiring a digital asset (Chewy) within it. The deal also illustrates the reality that pure offline retail EBITDA alone struggles to service LBO debt.",
  },

  tombstone: {
    acquirerInitials: "BCP",
    acquirerBg: "bg-teal-700",
    targetInitials: "PET",
    targetBg: "bg-purple-600",
    acquirerName: "BC Partners Consortium",
    targetName: "PetSmart, Inc.",
    dealTitle: "BC Partners × PetSmart LBO",
    dealSize: "$8.7 Billion",
    dealSizeUSD: "$8.7bn",
    evEbitda: "9.8×",
    closeDate: "March 2015",
  },

  sources: [
    { id: 1, text: "PetSmart Inc. (2014). Definitive Proxy Statement — Special Meeting of Stockholders. December 2014." },
    { id: 2, text: "Bloomberg (2015). PetSmart Buyout Completes as Largest U.S. Retail LBO. March 2015." },
    { id: 3, text: "Wall Street Journal (2017). PetSmart Buys Chewy.com for $3.35 Billion. April 2017." },
    { id: 4, text: "Chewy, Inc. (2019). Form S-1 — Initial Public Offering. NYSE: CHWY. June 2019." },
    { id: 5, text: "Reuters (2020). PetSmart Completes Debt Exchange as Leverage Weighs on Retailer. 2020." },
    { id: 6, text: "Forbes (2019). How PetSmart's $8.7 Billion Leveraged Buyout Led to the Biggest Retail IPO of 2019. July 2019." },
    { id: 7, text: "S&P Global Ratings (2015). PetSmart Inc. — New Issue Rating Report. March 2015." },
  ],

  seo: {
    title: "BC Partners × PetSmart LBO — How Chewy Made the Largest Retail LBO a Success",
    description: "Full analysis of BC Partners' $8.7B PetSmart LBO in 2015. The largest retail LBO, turning Amazon fear into alpha, Chewy.com $3.35B acquisition → IPO $8.8B. Offline + online integration strategy.",
    keywords: [
      "BC Partners", "PetSmart", "Chewy", "LBO", "retail", "pet supplies",
      "Amazon", "digital transformation", "e-commerce", "PE", "private equity", "largest retail LBO",
    ],
  },

  concepts: [
    {
      term: "Amazon Effect",
      href: "/deal-101/lbo-overview",
      description: "The phenomenon in which Amazon's online retail offensive causes declining revenues and falling stock prices for brick-and-mortar retailers. From a PE perspective, retail assets undervalued by Amazon fear can represent acquisition opportunities. PetSmart built a defensive moat via service revenue and chose to counterattack by acquiring Chewy.",
    },
    {
      term: "Asset-Based Lending (ABL)",
      href: "/deal-101/lbo-capital-structure",
      description: "A corporate loan secured against current assets such as inventory, accounts receivable, and lease rights. Used alongside TLBs in retail and logistics LBOs. The more assets a company has, the more leverage it can employ at lower rates.",
    },
    {
      term: "Platform Strategy",
      href: "/deal-101/platform-strategy",
      description: "A PE strategy in which a core acquired company (the platform) has additional complementary companies added via bolt-on acquisitions to create synergies. PetSmart sought to complete the pet ecosystem by adding an online platform (Chewy) to its offline platform.",
    },
    {
      term: "Distressed Exchange",
      href: "/market-101/levfin-distressed",
      description: "A restructuring in which a company near bankruptcy negotiates with creditors to exchange existing bonds at a discount or for new instruments with revised terms. PetSmart executed a distressed exchange on a portion of its bonds in 2020 due to high leverage pressure.",
    },
    {
      term: "Retail LBO Specifics",
      href: "/deal-101/lbo-overview",
      description: "Retail LBOs carry three key risks: ① inventory volatility, ② high fixed-cost lease obligations (SG&A), and ③ online competitive threats. Offsetting these risks requires growing service revenue (grooming, clinics — areas Amazon cannot replace) as a core defensive strategy.",
    },
  ],

  faq: [
    {
      q: "Why did BC Partners execute the largest retail LBO at the peak of Amazon fears?",
      a: "BC Partners' core judgment was that PetSmart was not 'pure retail.' Services like grooming, training, and veterinary clinics are offline differentiators Amazon cannot offer. Pet food is also a category where quality and veterinary recommendations matter, making Amazon's low-price competition relatively limited. Additionally, the 'Amazon fear' driving the stock below its intrinsic value created an attractive entry multiple.",
    },
    {
      q: "Why was the Chewy acquisition decisive for the PetSmart LBO?",
      a: "Without Chewy, PetSmart would simply have remained 'offline retail losing ground to Amazon.' The Chewy acquisition ($3.35B) internalized the #1 online pet platform within PetSmart, and the 2019 Chewy IPO valued it at $8.8B. A substantial portion of the entire LBO's returns were generated by this single acquisition.",
    },
    {
      q: "Why did PetSmart's core financial structure become stressed?",
      a: "PetSmart took on $6.7B in LBO debt, and offline retail competition intensified faster than expected, compounded by costs of store renovations and the Chewy acquisition itself. When COVID-19 temporarily closed offline stores in 2020, liquidity pressure intensified and a distressed exchange was executed on some bonds. As Chewy executed a separate IPO, PetSmart's core business lost a key asset, weakening its own credit profile.",
    },
    {
      q: "How do PetSmart and Petco compare from an LBO perspective?",
      a: "Both were PE-owned around the same period but pursued different strategies. PetSmart went on offense with the Chewy acquisition; Petco strengthened its own online presence and expanded veterinary clinics (Vetco). Petco successfully re-listed in 2020 (NASDAQ: WOOF) and has pursued differentiation through its Vetco pet health services. PetSmart holds a large online asset in Chewy but carries a heavier leverage burden at the core company.",
    },
  ],

  // ── LevFin Overview ─────────────────────────────────────────────────
  levfinOverview: {
    angle: "The Retail LBO Paradox — Countering Amazon Fear with an Undervalued Asset + Online Asset (Chewy) Acquisition",
    body: "The PetSmart LBO exploited market fear that 'retail can't beat Amazon.' A classic retail LBO structure of TLB ~$4.0B + HY bonds ~$2.7B + ABL, combined with an offside play: the Chewy acquisition. The deal shows that pure offline EBITDA is not enough to service LBO debt in retail — and that creating value through digital assets is the survival strategy for modern retail LBOs.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "~$4.0B",
        rate: "LIBOR+300bps (floating)",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 46,
        color: "bg-teal-500",
      },
      {
        name: "ABL Revolving Facility",
        amountDisplay: "$1.0B",
        rate: "LIBOR+150bps",
        maturity: "5 years",
        seniority: "senior-secured",
        pct: 11,
        color: "bg-teal-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "~$2.7B",
        rate: "~8.875% (fixed)",
        maturity: "8 years",
        seniority: "senior-unsecured",
        pct: 31,
        color: "bg-orange-500",
      },
      {
        name: "Equity (BC Partners Consortium)",
        amountDisplay: "~$2.0B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 23,
        color: "bg-purple-500",
      },
    ],
    metrics: [
      { label: "Entry EV/EBITDA",    value: "~9.8×",   sub: "Largest retail LBO in history",           isAlert: false },
      { label: "Chewy Return",       value: "2.6×",    sub: "$3.35B → IPO $8.8B",                     isAlert: false },
      { label: "MOIC (Estimated)",   value: "~3×+",    sub: "PetSmart + Chewy combined",              isAlert: false },
      { label: "PetSmart Debt",      value: "$6.7B",   sub: "Core company leverage burden post-Chewy", isAlert: true  },
    ],
    lessons: [
      {
        icon: "🐾",
        title: "Amazon Fear = PE Opportunity — Use Undervaluation to Your Advantage",
        body: "When the entire market was paralyzed by the fear that 'retail can't beat Amazon,' BC Partners acquired PetSmart — which held services Amazon cannot enter (grooming, veterinary, training) — at a depressed valuation. Sector fear lowers LBO entry multiples; a rebound amplifies returns. This is the structural logic of contrarian retail investing.",
      },
      {
        icon: "🛒",
        title: "Platform Strategy — Combining Offline LBO with Online Asset Acquisition",
        body: "The Chewy acquisition was not 'buying an online competitor' from PetSmart's perspective — it was 'internalizing an online platform.' In retail LBOs, pure offline EBITDA may be insufficient to service debt. Diversifying value creation by adding a digital asset through bolt-on acquisition is the survival strategy for modern retail LBOs.",
      },
      {
        icon: "⚠️",
        title: "Retail LBO Leverage Limits — Debt Cannot Absorb Digital Transformation Costs",
        body: "PetSmart's core financial structure deteriorated as it simultaneously bore the Chewy acquisition cost ($3.35B) and the existing LBO debt ($6.7B). Online transition investment reduces near-term EBITDA, and this cost is difficult to absorb in a leveraged structure. 'High leverage + large-scale digital investment' is a dangerous combination.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "The Essence of LBO",
        whyRelevant: "Defensive moat in pet services against Amazon fear — the 'defensible moat' criterion among the 7 characteristics of an ideal LBO target",
      },
      {
        slug: "lbo-capital-structure",
        chapterNum: "Ch.1",
        title: "LBO Capital Structure Anatomy",
        whyRelevant: "Retail LBO-specific TLB + ABL hybrid structure — the role of asset-based lending backed by inventory",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "Distressed Debt & Restructuring",
        whyRelevant: "2020 PetSmart Distressed Exchange — the stress scenario for a high-leverage retail LBO",
      },
    ],
  },
};

export default deal;
