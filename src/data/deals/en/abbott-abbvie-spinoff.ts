/**
 * Abbott / AbbVie Spinoff
 * The $54B pharma spinoff built on Humira — completed January 2013
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "abbott-abbvie-spinoff",
  title: "Why Abbott Spun Off AbbVie — The $54B Bet on Humira and Drug R&D Independence",
  subtitle: "Innovative pharma R&D separation · Humira became world's top-selling drug · AbbVie $250B+ market cap by 2023",
  category: "restructuring",
  industry: "Pharmaceuticals / Medical Devices",
  country: "USA",
  announcedAt: "2011-10-19",
  closedAt: "2013-01-01",
  announcedDisplay: "October 2011",
  closedDisplay: "January 2013",
  readingMinutes: 10,
  tags: ["Abbott", "AbbVie", "spinoff", "Humira", "pharma", "biologic", "R&D", "tax-free spinoff", "ABBV"],
  excerpt: "In January 2013, Abbott spun off AbbVie to create an independent pharmaceutical company from its innovative drug R&D business. AbbVie's market cap at spinoff was approximately $54B; Abbott's was $52B. AbbVie's flagship asset Humira grew to become the world's best-selling drug, peaking at $21.2B/year. AbbVie developed Imbruvica, Rinvoq, and Skyrizi post-spinoff, reaching $250B+ in market cap by 2023.",

  acquirer: { initials: "ABT", bg: "bg-blue-700", label: "Abbott Laboratories" },
  target: { initials: "ABBV", bg: "bg-purple-600", label: "AbbVie Inc." },

  background: [
    "Abbott Laboratories was a 130-year diversified healthcare company with innovative pharmaceuticals, medical devices, nutrition products, and diagnostics. In the 2000s, Humira (adalimumab) grew explosively as an autoimmune disease treatment, accounting for over 25% of Abbott's revenue. The growth logic for innovative pharma R&D and mature businesses (medical devices, nutrition) had become completely different.",
    "On October 19, 2011, Abbott CEO Miles White announced the company would separate into two parts. The innovative research-based pharmaceutical business would become AbbVie Inc., while the remainder (medical devices, nutrition, diagnostics, established generics) would remain Abbott. The core objective was to have Humira-centered biologics R&D re-rated as an independent pharmaceutical company.",
    "The spinoff was structured as a Section 355 tax-free separation. Abbott shareholders received one AbbVie share for each Abbott share they held. The spinoff completed January 1, 2013, and AbbVie listed on NYSE (ABBV) with an approximate $54B market cap. Abbott's market cap was approximately $52B. The combined post-spinoff value exceeded pre-spinoff Abbott's standalone market cap.",
    "Post-spinoff, AbbVie aggressively developed next-generation pipeline beyond Humira. The 2015 Pharmacyclics acquisition ($21B) added Imbruvica (blood cancer), and the 2020 Allergan acquisition ($63B) added Botox and Juvederm. Despite Humira's US patent expiration in 2023, Rinvoq and Skyrizi (autoimmune) succession products sustained growth, with AbbVie reaching $250B+ in market cap by 2023.",
  ],

  dealSummary: {
    dealValueDisplay: "Spinoff (1 AbbVie share per Abbott share, tax-free)",
    acquirerName: "Abbott Laboratories (spinoff parent)",
    targetName: "AbbVie Inc. (spun off)",
    announcedDisplay: "October 2011",
    closedDisplay: "January 2013",
    country: "USA",
  },

  executiveSummary: [
    "1 AbbVie share per Abbott share distributed tax-free (Section 355 spinoff)",
    "AbbVie $54B + Abbott $52B at spinoff — combined exceeded pre-spinoff Abbott value",
    "Core asset: Humira — autoimmune treatment, became world's best-selling drug (peak $21.2B/year)",
    "Post-spinoff growth: Pharmacyclics ($21B), Allergan ($63B) acquisitions to build pipeline",
    "AbbVie 2023 market cap $250B+ — 4.6× spinoff value",
    "Textbook pharmaceutical spinoff — independent pharma company re-rated for innovative drug R&D",
  ],

  industryOverview: {
    body: "In 2011, the global pharmaceutical market was bifurcated between biologics and small-molecule drugs. Biologics like Humira generated massive revenues through high prices and strong patent protection. But diversified healthcare giants didn't receive full market recognition for the value of their innovative pharma businesses. Separation became the trend solution.",
    metrics: [
      { label: "Humira peak annual revenue", value: "$21.2B", sub: "2022, world's best-selling drug" },
      { label: "AbbVie market cap at spinoff", value: "~$54B", sub: "January 2013" },
      { label: "AbbVie 2023 market cap", value: "$250B+", sub: "4.6× spinoff value growth" },
      { label: "Global autoimmune treatment market", value: "$90B+", sub: "2022" },
    ],
    subBody: "Biologic pharma spinoffs could receive independent pharma company multiples (EV/EBITDA 15–20×), far higher than within a diversified healthcare conglomerate. AbbVie is one of the most successful examples of this trend.",
    players: [
      { name: "Humira (adalimumab)", role: "Autoimmune biologic drug, AbbVie's core asset" },
      { name: "Johnson & Johnson", role: "Similar portfolio separation at the same time" },
      { name: "Pfizer", role: "Biologic competitor, biosimilar launches threatening Humira" },
      { name: "Allergan", role: "Botox specialist acquired by AbbVie for $63B in 2020" },
    ],
  },

  companyOverview: {
    targetName: "AbbVie Inc.",
    body: "AbbVie was created from Abbott's innovative pharmaceutical R&D business. Its flagship asset at spinoff was Humira, a treatment for autoimmune diseases including rheumatoid arthritis, psoriasis, and Crohn's disease. Post-spinoff, it added blood cancer drug Imbruvica, autoimmune drugs Rinvoq and Skyrizi, and Botox (via Allergan acquisition).",
    metrics: [
      { label: "Market cap at spinoff", value: "~$54B", sub: "January 2013" },
      { label: "NYSE listing", value: "ABBV", sub: "Independent listing January 2013" },
      { label: "FY2022 Revenue", value: "~$58B", sub: "Including Allergan integration" },
      { label: "Humira peak revenue", value: "$21.2B/year", sub: "FY2022" },
    ],
    financials: [
      { year: "FY2013", revenue: 18790, cogs: 4500, grossProfit: 14290, sga: 5200, operatingIncome: 5940, ebitda: 7000 },
      { year: "FY2014", revenue: 19960, cogs: 4800, grossProfit: 15160, sga: 5500, operatingIncome: 6400, ebitda: 7600 },
      { year: "FY2015", revenue: 22859, cogs: 5500, grossProfit: 17359, sga: 6200, operatingIncome: 7100, ebitda: 8500 },
    ],
    financialsNote: "Unit: USD million. Based on AbbVie independent public filings post-spinoff.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Humira", pct: 60, color: "bg-purple-600", amt: "~$13.5B (FY2015)" },
      { name: "Other innovative drugs", pct: 30, color: "bg-purple-400", amt: "~$6.8B" },
      { name: "Royalties / Other", pct: 10, color: "bg-purple-200", amt: "~$2.3B" },
    ],
  },

  dealStructure: {
    body: "Abbott executed the AbbVie separation as a Section 355 tax-free spinoff. Abbott shareholders received one AbbVie share for each Abbott share held. AbbVie listed independently on NYSE (ABBV) on January 1, 2013.",
    preOwnership: {
      nodes: [
        { id: "abbott_parent", label: "Abbott Laboratories", sub: "NYSE: ABT", type: "acquirer" },
        { id: "abbvie_sub", label: "AbbVie (innovative pharma R&D)", sub: "Abbott pharmaceutical division", type: "target" },
      ],
      edges: [
        { from: "abbott_parent", to: "abbvie_sub", label: "100% ownership" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "abbott_post", label: "Abbott Laboratories", sub: "Medical devices, nutrition, diagnostics focus", type: "acquirer" },
        { id: "abbvie_post", label: "AbbVie Inc.", sub: "NYSE independent: ABBV", type: "target" },
      ],
      edges: [
        { from: "abbott_post", to: "abbvie_post", label: "Spinoff completed (independent)" },
      ],
    },
    keyTerms: [
      { label: "Spinoff Structure", value: "Section 355 Tax-Free Spinoff", accent: true },
      { label: "Distribution Ratio", value: "1 AbbVie share per Abbott share", accent: false },
      { label: "AbbVie Market Cap at Spinoff", value: "~$54B", accent: true },
      { label: "Abbott Market Cap at Spinoff", value: "~$52B", accent: false },
      { label: "Completed", value: "January 1, 2013", accent: false },
    ],
  },

  advisors: {
    body: "Financial, legal, and tax advisors participated in the spinoff process.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Spinoff Parent (Abbott)",
        initials: "ABT",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Spinoff structure design" },
          { firm: "Cravath Swaine & Moore", role: "Legal Counsel", roleType: "legal", note: "Spinoff legal and Section 355 structure" },
        ],
      },
      {
        side: "target",
        sideLabel: "Spinoff Entity (AbbVie)",
        initials: "ABBV",
        bg: "bg-purple-600",
        advisors: [
          { firm: "Morgan Stanley", role: "Financial Advisor (FA)", roleType: "financial", note: "Independent listing support" },
          { firm: "Sidley Austin", role: "Legal Counsel", roleType: "legal", note: "Independent entity formation" },
        ],
      },
    ],
    disclaimer: "Advisor information based on public reporting.",
  },

  valuation: {
    body: "At spinoff, AbbVie was valued at approximately 3× EV/Revenue relative to FY2013 revenue of ~$18.8B. Humira's peak revenue growth and pipeline expansion drove explosive valuation growth thereafter.",
    rows: [
      { item: "AbbVie market cap at spinoff", val: "$54B", note: "January 2013", accent: true },
      { item: "FY2013 Revenue", val: "$18.8B", note: "First year as independent company" },
      { item: "EV/Revenue at spinoff", val: "~3×", note: "Pharma company multiple" },
      { item: "Humira peak annual revenue", val: "$21.2B (2022)", note: "World's best-selling drug", accent: true },
      { item: "AbbVie 2023 market cap", val: "$250B+", note: "4.6× spinoff value", accent: true },
    ],
    disclaimer: "Valuation figures from public filings and market data.",
  },

  rationale: {
    buyer: {
      title: "Abbott's Spinoff Rationale",
      initials: "ABT",
      bg: "bg-blue-700",
      points: [
        "Valuation separation — innovative pharma (high multiples) split from medical devices/nutrition (lower multiples)",
        "Management focus — Abbott on devices/diagnostics/nutrition; AbbVie on biologics R&D",
        "Humira value maximization — independent pharma company receives proper market re-rating",
        "Capital allocation optimization — separate capital structures and dividend policies for each business",
        "Diversified investor base — attract both healthcare and pharmaceutical specialist investors",
      ],
    },
    seller: {
      title: "AbbVie's Spinoff Rationale",
      initials: "ABBV",
      bg: "bg-purple-600",
      points: [
        "Independent pharma multiples — much higher valuation vs. inside diversified Abbott",
        "Pipeline investment freedom — aggressive R&D and M&A execution post-independence",
        "Executive incentives — performance incentives focused on innovative drug outcomes",
        "Humira succession strategy — full company focus on developing next-generation pipeline for patent cliff",
        "Clinical partnership expansion — free biotech and academic partnerships as independent company",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Post-spinoff, AbbVie executed major acquisitions to strengthen its pipeline. The 2015 Pharmacyclics acquisition ($21B) added Imbruvica, and the 2020 Allergan acquisition ($63B) added Botox and Juvederm. Humira's US patents expired in 2023, but Rinvoq (upadacitinib) and Skyrizi (risankizumab) growing sales offset the decline. Abbott also maintained steady growth focusing on medical devices, diagnostics, and nutrition.",
    overallVerdict: "One of the most successful pharmaceutical spinoffs ever",
    positives: [
      "AbbVie market cap $54B → $250B+ — 4.6× growth in 10 years",
      "Humira became world's best-selling drug ($21.2B peak) — grew post-spinoff independence",
      "Pharmacyclics + Allergan acquisitions — pipeline and aesthetics business diversification",
      "Rinvoq + Skyrizi — sustained growth after Humira patent expiration",
      "Abbott steady growth on devices, diagnostics, and nutrition focus",
    ],
    risks: [
      "Humira biosimilar competition — market share erosion in US and Europe post-patent expiration",
      "Allergan high-price acquisition controversy — $63B debt burden",
      "Pipeline R&D risk — clinical failure risk always present",
      "Drug pricing regulation risk — US IRA and European price negotiation pressure",
    ],
    editorNote: "The Abbott-AbbVie spinoff proved that 'innovative pharma R&D grows faster as an independent pharmaceutical company.' A $54B company built around Humira became $250B+ within 10 years. The key was aggressive post-independence M&A and R&D investment — inside Abbott, resource competition with the medical devices and nutrition businesses would have slowed this pace significantly. This is the strongest argument for separating high-growth R&D businesses from mature cash-generating diversified businesses.",
  },

  tombstone: {
    acquirerInitials: "ABT",
    acquirerBg: "bg-blue-700",
    targetInitials: "ABBV",
    targetBg: "bg-purple-600",
    acquirerName: "Abbott Laboratories",
    targetName: "AbbVie Inc.",
    dealTitle: "Section 355 Tax-Free Spinoff",
    dealSize: "$54B market cap at spinoff",
    dealSizeUSD: "USD 54B market cap at spinoff",
    evEbitda: "~8× (at spinoff)",
    closeDate: "Jan 2013",
  },

  sources: [
    { id: 1, text: "Abbott Laboratories Press Release — Abbott Plans to Separate Into Two Leading Companies (October 2011)", url: "https://investor.abbott.com" },
    { id: 2, text: "AbbVie Form 10 Registration Statement (2012)", url: "https://www.sec.gov" },
    { id: 3, text: "AbbVie FY2022 Annual Report — Humira Peak Revenue and Pipeline Update", url: "https://investor.abbvie.com" },
    { id: 4, text: "Bloomberg — AbbVie Completes $21B Pharmacyclics Acquisition (May 2015)" },
    { id: 5, text: "The Wall Street Journal — AbbVie to Buy Allergan for $63 Billion (June 2019)" },
    { id: 6, text: "Reuters — Abbott Completes Separation of Pharmaceutical Business (January 2013)" },
    { id: 7, text: "CNBC — AbbVie Surpasses Humira Patent Cliff with Rinvoq and Skyrizi (2023)" },
    { id: 8, text: "FiercePharma — How AbbVie Became a $250B Pharma Giant (2023)" },
  ],

  seo: {
    title: "Abbott AbbVie Spinoff Analysis — The $54B Pharma Bet on Humira Independence",
    description: "Complete analysis of Abbott's AbbVie spinoff. Section 355 tax-free structure, Humira value maximization strategy, post-spinoff pipeline growth, and how AbbVie reached $250B+ market cap.",
    keywords: ["Abbott AbbVie spinoff", "AbbVie spinoff analysis", "Humira valuation", "pharma spinoff strategy", "Section 355 tax-free spinoff", "ABBV listing", "biopharma spinoff"],
  },

  concepts: [
    { term: "Spin-off", href: "/deal-101/spinoff", description: "Separating innovative pharma R&D as an independent company to receive proper independent pharma multiples — the Abbott-AbbVie spinoff" },
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Post-spinoff: Pharmacyclics ($21B) + Allergan ($63B) acquisitions to rapidly build pipeline as an independent company" },
    { term: "Competitive Moat", href: "/deal-101/competitive-moat", description: "Humira's patent moat and autoimmune treatment brand — the foundation of AbbVie's independent growth" },
    { term: "EV/EBITDA Multiple", href: "/deal-101/ev-ebitda", description: "Innovative pharma's high EBITDA margins and multiples — the valuation premium of independent pharma vs. diversified conglomerate" },
  ],

  faq: [
    {
      q: "Why did Abbott spin off AbbVie if Humira was so profitable?",
      a: "Abbott didn't spin off Humira alone — it spun off the entire innovative pharma R&D business as AbbVie. The reason: valuation separation. Innovative pharma R&D commands independent pharma company multiples (EV/EBITDA 15–20×). But inside a diversified healthcare company like Abbott, the combined entity receives lower blended multiples. Separation allows each business to receive its appropriate sector multiple.",
    },
    {
      q: "What is Humira and why was it so successful?",
      a: "Humira (adalimumab) is a biologic drug that inhibits TNF-α, used to treat autoimmune diseases including rheumatoid arthritis, psoriatic arthritis, Crohn's disease, and ulcerative colitis. Success factors: it addresses a very large patient population across multiple indications; biological drugs have more complex biosimilar entry barriers than chemical generics, extending effective patent protection; and AbbVie's aggressive marketing and indication expansion drove unprecedented peak annual sales of $21.2B.",
    },
    {
      q: "What happened to AbbVie after Humira's patent expired?",
      a: "AbbVie prepared for the 'biosimilar cliff' by developing Rinvoq (upadacitinib, JAK inhibitor) and Skyrizi (risankizumab, IL-23 inhibitor). After US Humira patents expired in 2023, biosimilars entered the market, but combined Rinvoq and Skyrizi sales quickly compensated for Humira's decline. The 2020 Allergan ($63B) acquisition also added Botox and Juvederm aesthetics revenue, diversifying beyond autoimmune diseases.",
    },
    {
      q: "Why is this spinoff considered so successful?",
      a: "Abbott originally created AbbVie at a $54B market cap at spinoff. By 2023, AbbVie's market cap was $250B+ — a 4.6× increase in 10 years. Post-independence, AbbVie executed two transformative acquisitions (Pharmacyclics $21B, Allergan $63B) at a speed impossible inside Abbott's diversified resource-allocation process. The spinoff created freedom that directly enabled this aggressive value creation.",
    },
    {
      q: "How did Abbott perform after the spinoff?",
      a: "Post-spinoff Abbott focused on medical devices (stents, continuous glucose monitor FreeStyle Libre), diagnostics (major pandemic beneficiary from COVID-19 rapid tests), nutrition (Ensure, Similac), and established generics. Medical devices and diagnostics sustained steady growth, with Abbott maintaining approximately $180B market cap by 2023. Combined with AbbVie's $250B+, the total value of both companies far exceeds what Abbott's integrated market cap was before the 2011 separation decision.",
    },
  ],
};

export default deal;
