/**
 * Energy Transfer Equity x Williams Companies, Failed Merger (2015-2016)
 * Sep 28, 2015, $32.6B merger announced. Jun 24, 2016, Delaware Chancery
 * (Vice Chancellor Glasscock) ruled in ETE's favor. Jun 29, 2016, deal
 * officially terminated with zero breakup fee. The first major Delaware
 * case where a specific tax-opinion condition precedent defeated the
 * general MAC clause framework, and rewrote U.S. M&A contract drafting.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "energy-transfer-williams-failed",
  title: "Energy Transfer x Williams, How a $33B Pipeline Merger Was Killed by a Single Tax-Opinion Clause",
  subtitle:
    "Sep 28, 2015, $32.6B merger announced at $43.50/share, cash plus ETE Corp shares, Section 721 tax-free reorganization at its core. Jun 24, 2016, Vice Chancellor Sam Glasscock III ruled in ETE's favor, the tax-opinion condition was a specific and objective condition precedent, not a general MAC clause. Jun 29, 2016, the deal was terminated with [zero breakup fee]. The first major Delaware case where discrete-condition language defeated the MAC catch-all, and the inflection point for U.S. M&A contract drafting.",
  category: "ma",
  industry: "Energy / Midstream Pipelines / MLPs",
  country: "USA",
  announcedAt: "2015-09-28",
  closedAt: "2016-06-29",
  announcedDisplay: "Sep 28, 2015 (Merger announced)",
  closedDisplay: "Jun 29, 2016 (Officially terminated, zero breakup fee)",
  readingMinutes: 16,
  tags: [
    "Energy Transfer",
    "Williams Companies",
    "Kelcy Warren",
    "Delaware Chancery",
    "Vice Chancellor Glasscock",
    "Section 721",
    "MAC Clause",
    "Tax Opinion",
    "Latham & Watkins",
    "MLP",
    "Midstream",
    "Failed Merger",
  ],
  excerpt:
    "On September 28, 2015, Energy Transfer Equity (ETE) announced an agreement to acquire The Williams Companies for $43.50 per share, approximately $32.6 billion in cash and stock, a transaction that would have combined the U.S.'s number-one and number-two midstream pipeline operators into roughly 150,000 miles of pipeline and a combined enterprise value of about $77 billion. Within months WTI crude collapsed from $50 to under $30, ETE's own units lost roughly 80 percent of their value, and ETE chief executive Kelcy Warren publicly signaled doubts about the economics. In March 2016 ETE issued $1 billion of dilutive Series A convertible preferred units in a private placement to insiders including Mr. Warren himself, a move Williams condemned as [structural sabotage]. On April 21, 2016, ETE invoked an obscure provision, [Section 6.5 / Section 8.2(g) of the merger agreement requires ETE's counsel, Latham & Watkins, to deliver a Section 721 tax opinion at closing], and informed Williams that Latham could no longer issue a clean opinion. Williams sued in the Delaware Court of Chancery alleging bad-faith termination. On June 24, 2016, Vice Chancellor Sam Glasscock III ruled in ETE's favor, holding that the tax-opinion provision was a [specific and objective condition precedent], not a MAC catch-all, and that Latham's good-faith inability to deliver the opinion released ETE from its obligations. The deal terminated on June 29 with [zero breakup fee]. The ruling reshaped U.S. M&A drafting, every major deal since has had to confront the boundary between specific conditions precedent and the general MAC clause.",

  acquirer: { initials: "ETE", bg: "bg-amber-700", label: "Energy Transfer Equity, L.P." },
  target: { initials: "WMB", bg: "bg-red-700", label: "The Williams Companies, Inc." },

  background: [
    "U.S. midstream pipelines had ridden the shale revolution into a moment of structural dominance by the mid-2010s. Production from the Permian, the Marcellus, and the Bakken had outpaced existing transportation infrastructure, and a five-firm midstream MLP oligopoly, Kinder Morgan, Energy Transfer, Williams, Enterprise Products, and Plains All American, controlled the bulk of long-haul gas, NGL, and crude transport. Aggregate midstream MLP market capitalization was on the order of $500 billion at the end of 2014. The combination of capital-intensive infrastructure, toll-style cash flows, and the tax-advantaged pass-through MLP structure made these names a yield-investor staple. ETE's offer for Williams came at the peak of that cycle, just as the 2014-2016 oil price collapse was beginning to feed through into midstream valuations.",
    "[ETE and Williams sat at #1 and #2.] Energy Transfer Equity was the top-tier holding LP of Kelcy Warren's Texas-built midstream complex, sitting above operating MLPs ETP, Sunoco LP, and Regency. By 2015 ETE controlled roughly 71,000 miles of pipeline and was the largest U.S. natural gas pipeline operator. The Williams Companies, founded in Oklahoma in 1908, ran roughly 33,000 miles of pipeline anchored by Transco, the dominant East Coast natural gas artery that runs from the Texas Gulf Coast to New York. Williams reported revenue of about $7.6 billion and adjusted EBITDA of about $4.1 billion in 2015. A combined company would have controlled roughly 150,000 miles of pipeline against Kinder Morgan's roughly 84,000 miles, with a combined enterprise value of about $77 billion.",
    "[The September 28, 2015 deal terms.] ETE offered Williams shareholders $43.50 per share in a mixture of cash and shares of a newly formed C-corporation, Energy Transfer Corp ('ETC'), for an aggregate consideration of about $32.6 billion. The transaction was structured as a [Section 721 tax-free contribution] of Williams's assets to the ETE partnership, with Williams shareholders receiving a portion of cash and the balance in ETC shares on a tax-free basis under Section 721(a) of the Internal Revenue Code. The merger agreement made that tax structure a condition precedent in [Section 6.5 / Section 8.2(g) — ETE's counsel, Latham & Watkins LLP, was required to deliver a 'Section 721 opinion' at closing, confirming that the contribution should be treated as a tax-free partnership contribution]. The lead tax partner at Latham was Bryan W. Holmes. At signing both sides assumed the opinion was deliverable without controversy.",
    "[The oil collapse and ETE's loss of conviction.] Over the fourth quarter of 2015 and the first quarter of 2016 WTI crude fell from roughly $50 to under $30 per barrel. ETE units, which had traded near $26 at signing, dropped below $5, an 80 percent fall, sharply tilting the cash component of the deal relative to the equity component. The combined company would have carried far heavier leverage than initially modeled. On earnings calls Kelcy Warren openly questioned the deal's economics. In March 2016 ETE then issued $1 billion of Series A convertible preferred units in a private placement to insiders including Mr. Warren himself, at a heavily dilutive strike. Williams treated the issuance as [structural sabotage], a deliberate dilution of the value that Williams shareholders would receive in the combined entity.",
    "[Termination, litigation, and the June 24 ruling.] On April 21, 2016, ETE notified Williams that Latham had advised it could no longer deliver a clean Section 721 opinion under prevailing market conditions, and that ETE accordingly considered the closing condition unsatisfied. Williams sued in the Delaware Court of Chancery on May 13, 2016, alleging that ETE had engineered the opinion's failure in bad faith to escape a deal that had become uneconomic. An expedited bench trial was held on June 21-22, 2016. On June 24, 2016, Vice Chancellor Sam Glasscock III issued a memorandum opinion of roughly 95 pages ruling [for ETE]. The core holding was that the Section 721 opinion condition was a [specific and objective condition precedent], distinct from the merger agreement's general MAC clause, and that once Latham, exercising independent professional judgment, concluded in good faith that it could not issue the opinion, the courts could not second-guess that determination. The deal was terminated on June 29 and ETE paid [zero breakup fee], because the failure was a failed condition precedent rather than a willful breach.",
  ],

  dealSummary: {
    dealValueDisplay: "$32.6B (cash plus ETE Corp 'ETC' shares, $43.50/share)",
    acquirerName: "Energy Transfer Equity, L.P. (NYSE: ETE)",
    targetName: "The Williams Companies, Inc. (NYSE: WMB)",
    announcedDisplay: "Sep 28, 2015",
    closedDisplay: "Jun 29, 2016 (Terminated)",
    country: "USA",
  },

  executiveSummary: [
    "[A $32.6B midstream mega-merger announced September 28, 2015] ETE agreed to acquire Williams Companies at $43.50 per share in cash and ETC shares. The combined entity would have operated roughly 150,000 miles of pipeline and carried a combined enterprise value of about $77 billion, displacing Kinder Morgan as the largest U.S. midstream operator.",
    "[Section 721 tax-free contribution at the core] The deal was structured as a Section 721(a) tax-free partnership contribution of Williams's assets into the ETE partnership, with Williams shareholders receiving a portion of cash and the balance in ETC shares on a tax-free basis. The merger agreement made delivery of a 'Section 721 opinion' by ETE's counsel Latham & Watkins LLP a condition precedent to closing.",
    "[Oil collapse and loss of ETE conviction] Between September 2015 and March 2016, WTI fell from $50 to under $30 and ETE units lost about 80 percent of their value, leaving Kelcy Warren publicly skeptical of the deal. In March 2016 ETE issued $1 billion of Series A convertible preferred units in an insider private placement, which Williams labeled [structural sabotage].",
    "[April 21, 2016 termination notice] ETE notified Williams that Latham could no longer deliver a clean Section 721 opinion in light of current market conditions, and treated the closing condition as unsatisfied. Williams responded with a Delaware Chancery suit alleging [bad-faith termination] and engineered failure of the tax opinion.",
    "[June 24, 2016, Vice Chancellor Glasscock ruled for ETE] The 95-page memorandum opinion held that the Section 721 opinion clause was a [specific and objective condition precedent] distinct from the general MAC clause, and that Latham's good-faith inability to issue the opinion was a determination Delaware courts would not second-guess.",
    "[Deal terminated June 29, 2016, zero breakup fee] Because the closing failure was a failed condition precedent rather than a willful breach, no termination fee was owed. One of the most consequential zero-breakup-fee outcomes in U.S. M&A history.",
    "[A permanent shift in U.S. M&A drafting] The ruling drew the boundary between specific conditions precedent and MAC catch-alls. Post-2016 U.S. merger agreements routinely include explicit MAC carve-outs for individually negotiated conditions, dual-side tax-opinion requirements, and pre-articulated good-faith standards for advisor opinions.",
    "[Both companies survived the oil cycle independently] Williams remained the #2 U.S. midstream operator and reached roughly $70 billion in market capitalization by 2024. ETE consolidated into Energy Transfer LP in 2018 and reached roughly $55 billion by 2024. The unrealized synergies (ETE estimated more than $2 billion per year) remain the chief unknowable of the case.",
  ],

  industryOverview: {
    body: "The U.S. midstream industry in 2015 sat at a generational inflection point. The shale revolution had produced a decade of capacity buildouts, MLP structures had pulled enormous amounts of yield-seeking capital into the sector, and a five-name oligopoly dominated long-haul pipeline transport. Yet by late 2015 the 2014-2016 oil collapse was forcing a reset, MLP unit prices were under pressure, capital costs were rising, and combined leverage on already-announced consolidations was beginning to look uncomfortable. ETE-Williams was the largest deal attempted in the middle of that turn, and the failure of the transaction reset the industry's appetite for stock-for-stock mega-mergers for the rest of the decade.",
    metrics: [
      { label: "ETE pipeline footprint (2015)",      value: "approx. 71,000 miles", sub: "Largest U.S. natural gas pipeline operator" },
      { label: "Williams pipeline footprint (2015)", value: "approx. 33,000 miles", sub: "Anchored by Transco East Coast artery" },
      { label: "Combined pipeline mileage",          value: "approx. 150,000 miles", sub: "Compared to Kinder Morgan's 84,000 miles" },
      { label: "Combined EV at announcement",        value: "approx. $77B",         sub: "Equity plus assumed debt" },
      { label: "WTI crude, 2015-Q3 to 2016-Q1",      value: "$50 to under $30",     sub: "Approx. -40%, midstream multiples compressed" },
    ],
    subBody:
      "Midstream MLPs were marketed throughout the 2010s as toll-based businesses with limited direct commodity exposure. The 2015-2016 episode demonstrated that the indirect channels matter, falling crude pressured shale producer balance sheets and volume contracts, MLP unit prices and capital costs reset, and combined-entity leverage assumptions broke down. ETE units falling 80 percent during the engagement period was the single most consequential reason ETE lost conviction on the Williams transaction, and the trigger for Kelcy Warren's hunt for a contractual exit.",
    players: [
      { name: "Energy Transfer Equity (ETE)", role: "Acquirer, largest U.S. gas pipeline operator, led by Kelcy Warren" },
      { name: "The Williams Companies",        role: "Target, #2 midstream operator, founded 1908, anchored by Transco" },
      { name: "Kinder Morgan",                 role: "#1 midstream operator at the time, would have fallen to #2 if the deal closed" },
      { name: "Enterprise Products Partners",   role: "#3 midstream operator, NGL/LPG focus, unaffected by the litigation" },
      { name: "Latham & Watkins LLP",          role: "ETE's tax counsel, the firm whose inability to deliver the Section 721 opinion drove the outcome" },
      { name: "Cravath, Swaine & Moore LLP",   role: "Williams's lead counsel, principal litigator in the Chancery suit" },
      { name: "Vice Chancellor Sam Glasscock III", role: "Delaware Court of Chancery judge, ruled for ETE on June 24, 2016" },
    ],
  },

  companyOverview: {
    targetName: "The Williams Companies, Inc. (NYSE: WMB)",
    body: "The Williams Companies was founded by the Williams brothers as a pipeline construction firm in Oklahoma in 1908 and grew into one of the senior U.S. midstream operators. The company is headquartered in Tulsa, Oklahoma. Its central asset is the Transco pipeline, a roughly 10,000-mile natural gas system running from the Texas Gulf Coast to New York that supplies the bulk of East Coast gas demand. In 2015 Williams operated through its master limited partnership subsidiary, Williams Partners (NYSE: WPZ), with Williams Companies acting as general partner and majority limited partner of WPZ. Williams reported fiscal year 2015 revenue of about $7.6 billion, adjusted EBITDA of about $4.1 billion, roughly 7,000 employees, and a market capitalization in the $40 billion range at signing.",
    metrics: [
      { label: "Founded",                value: "1908",                sub: "Williams brothers, Oklahoma" },
      { label: "Headquarters",           value: "Tulsa, Oklahoma",     sub: "One Williams Center" },
      { label: "Anchor asset",            value: "Transco pipeline",    sub: "Texas to New York, approx. 10,000 miles" },
      { label: "Total pipeline (2015)",   value: "approx. 33,000 miles", sub: "Natural gas, NGLs, and crude blended" },
      { label: "Headcount",               value: "approx. 7,000",       sub: "Year-end 2015" },
      { label: "FY2015 revenue",          value: "approx. $7.6B",       sub: "Versus $7.49B in FY2014, +2.4 percent" },
    ],
    financials: [
      { year: "FY2011", revenue: 7930, cogs: 4400, grossProfit: 3530, sga: 1100, operatingIncome: 2150, ebitda: 3050 },
      { year: "FY2012", revenue: 7517, cogs: 4200, grossProfit: 3317, sga: 1050, operatingIncome: 1850, ebitda: 2900 },
      { year: "FY2013", revenue: 6860, cogs: 3900, grossProfit: 2960, sga: 1000, operatingIncome: 1650, ebitda: 2750 },
      { year: "FY2014", revenue: 7486, cogs: 4150, grossProfit: 3336, sga: 1100, operatingIncome: 1820, ebitda: 3349 },
      { year: "FY2015", revenue: 7600, cogs: 4250, grossProfit: 3350, sga: 1150, operatingIncome: 1900, ebitda: 4100 },
    ],
    financialsNote: "Unit: USD millions. Williams Companies consolidated financial statements. FY2015 EBITDA of $4.1B reflects the company's reported 'Adjusted EBITDA' (up 22 percent from $3.35B in FY2014). The FY2013 revenue decline reflects portfolio rebalancing. Certain line items are estimates based on disclosed segment reporting.",
    financialsCurrency: "USD",
    financialsUnit: "millions",
    revenueBreakdown: [
      { name: "Williams Partners (Transco / Northwest pipelines)", pct: 55, color: "bg-red-700", amt: "approx. $4.2B" },
      { name: "Williams Partners (Atlantic-Gulf group)",            pct: 20, color: "bg-red-500", amt: "approx. $1.5B" },
      { name: "West (Rocky Mountain / Wamsutter)",                  pct: 15, color: "bg-red-400", amt: "approx. $1.1B" },
      { name: "Other (NGL Marketing and other subsidiaries)",       pct: 10, color: "bg-red-300", amt: "approx. $0.8B" },
    ],
    revenueNote: "Williams Partners (WPZ) operating MLP carried the bulk of revenues. The ETE transaction would have moved WPZ assets into the ETE partnership structure under Section 721, which is why the tax opinion sat at the heart of the closing condition stack.",
  },

  dealStructure: {
    body: "The ETE-Williams transaction was a complex mixed-consideration reorganization built around [Section 721 tax-free contribution]. At a high level, (i) Williams shareholders would exchange their Williams common stock for cash plus newly issued shares of Energy Transfer Corp ('ETC'), a new C-corporation, (ii) Williams's midstream assets would be contributed to the ETE partnership in a transaction intended to qualify as a tax-free partnership contribution under IRC Section 721(a), and (iii) ETC would emerge as the publicly listed successor entity. The tax-free treatment depended critically on the IRS respecting the separateness of the cash and stock components, if the IRS were to instead recharacterize the cash as consideration for the underlying assets, an estimated $1 billion of tax liability would result. To manage that risk, the merger agreement made delivery of a [Section 721 opinion] by ETE's counsel, Latham & Watkins, a condition precedent to closing (Section 6.5(b) and Section 8.2(g)). At signing this seemed routine. By spring 2016, the collapse in ETE unit prices had made the cash component disproportionately large relative to the stock component, and Latham concluded in good faith that it could no longer issue the opinion. That single conclusion ended the deal.",
    preOwnership: {
      nodes: [
        { id: "ete_pre",   label: "Energy Transfer Equity (ETE)",  sub: "Top-tier LP, controlled by Kelcy Warren", type: "acquirer" },
        { id: "etp_pre",   label: "Energy Transfer Partners (ETP)", sub: "ETE's operating MLP subsidiary",          type: "entity" },
        { id: "wmb_pre",   label: "Williams Companies (WMB)",       sub: "Public C-corp, #2 midstream",             type: "target" },
        { id: "wpz_pre",   label: "Williams Partners (WPZ)",        sub: "Williams's operating MLP subsidiary",     type: "entity" },
      ],
      edges: [
        { from: "ete_pre", to: "etp_pre", label: "GP + LP units" },
        { from: "wmb_pre", to: "wpz_pre", label: "GP + approx. 60 percent LP units" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ete_post",  label: "Energy Transfer Equity (ETE)",  sub: "Remained independent, deal failed",       type: "acquirer" },
        { id: "etp_post",  label: "Energy Transfer Partners (ETP)", sub: "Independent until 2018 ETE/ETP roll-up",  type: "entity" },
        { id: "wmb_post",  label: "Williams Companies (WMB)",       sub: "Remained independent, #2 midstream",      type: "target" },
        { id: "wpz_post",  label: "Williams Partners (WPZ)",        sub: "Independent until 2018 WMB/WPZ roll-up", type: "entity" },
      ],
      edges: [
        { from: "ete_post", to: "etp_post", label: "GP + LP units (unchanged)" },
        { from: "wmb_post", to: "wpz_post", label: "GP + approx. 60 percent LP units (unchanged)" },
      ],
    },
    keyTerms: [
      { label: "Total merger consideration",          value: "$32.6B (cash plus ETC shares)",          accent: true },
      { label: "Per-share consideration",             value: "$43.50 per Williams share",              accent: true },
      { label: "Cash component (approx.)",            value: "About $6B in cash, balance in ETC shares" },
      { label: "Combined entity EV at signing",       value: "About $77B including assumed debt" },
      { label: "Combined pipeline mileage",            value: "About 150,000 miles (largest in U.S.)" },
      { label: "Tax structure",                       value: "Section 721(a) tax-free partnership contribution", accent: true },
      { label: "Decisive condition precedent",        value: "Latham & Watkins's Section 721 opinion at closing", accent: true },
      { label: "General MAC clause",                  value: "Included, but ETE declined to invoke (high evidentiary bar)" },
      { label: "ETE $1B convertible preferred units",  value: "March 2016 insider private placement (Warren participated)", accent: true },
      { label: "ETE termination notice",              value: "April 21, 2016 (Latham's inability to issue opinion)", accent: true },
      { label: "Delaware Chancery filing",            value: "May 13, 2016, Williams sues for bad-faith termination" },
      { label: "Expedited trial",                      value: "June 21-22, 2016 (two days)" },
      { label: "Ruling",                              value: "June 24, 2016, Vice Chancellor Glasscock, ETE prevails", accent: true },
      { label: "Official termination",                value: "June 29, 2016",                          accent: true },
      { label: "Termination fee paid",                value: "$0 (failed condition precedent, no fee owed)", accent: true },
    ],
  },

  advisors: {
    body: "Both sides retained top-tier U.S. financial advisors and law firms. The decisive variable, however, was on the tax side, Latham & Watkins's good-faith inability to deliver the Section 721 opinion. Latham's lead tax partner on the deal, Bryan W. Holmes, became the most consequential single advisor in the engagement. Cravath, on the Williams side, led the litigation effort in the Delaware Court of Chancery, supported by Gibson Dunn on the tax-opinion challenge. The case is one of the cleanest examples in modern U.S. M&A of an advisor's professional judgment driving the outcome of a $30 billion-plus transaction.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer side (Energy Transfer Equity)",
        initials: "ETE",
        bg: "bg-amber-700",
        advisors: [
          { firm: "Citigroup", role: "Financial advisor (Lead)", roleType: "financial", note: "ETE's lead financial advisor on pricing, structuring, and capital advice" },
          { firm: "Latham & Watkins LLP", role: "Tax and M&A counsel", roleType: "legal", note: "Responsible for delivery of the Section 721 opinion. Tax partner Bryan W. Holmes led the team that ultimately concluded the opinion was not deliverable in good faith. The single most consequential advisor in the engagement" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "M&A litigation counsel", roleType: "legal", note: "Lead litigator for ETE in the Delaware Chancery proceedings" },
          { firm: "Morrison & Cohen LLP", role: "Supporting counsel", roleType: "legal", note: "Additional legal support" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target side (Williams Companies)",
        initials: "WMB",
        bg: "bg-red-700",
        advisors: [
          { firm: "Lazard", role: "Financial advisor (Lead)", roleType: "financial", note: "Williams's lead financial advisor on pricing and valuation, including the Williams Partners (WPZ) sub-allocation" },
          { firm: "Cravath, Swaine & Moore LLP", role: "Lead M&A and litigation counsel", roleType: "legal", note: "Williams's principal law firm, led the Delaware Chancery suit and the bad-faith termination theory" },
          { firm: "Gibson, Dunn & Crutcher LLP", role: "Tax and M&A counsel", roleType: "legal", note: "Provided Williams's contrary tax view, arguing that the Section 721 opinion was deliverable on the facts and that Latham's conclusion was unreasonable" },
        ],
      },
    ],
    disclaimer: "Advisor roles based on SEC filings (S-4, DEFM14A, 8-K) and the Delaware Court of Chancery opinion in Williams Cos. v. Energy Transfer Equity, C.A. Nos. 12168-VCG and 12337-VCG.",
  },

  valuation: {
    body: "At $32.6 billion, ETE's offer implied roughly 4.3x Williams's FY2015 revenue of $7.6 billion and roughly 8.0x its FY2015 adjusted EBITDA of $4.1 billion, near the lower end of the 8-12x range typical for midstream MLP transactions of that vintage. The Street debate at announcement focused on whether ETE was paying enough for Williams's anchor Transco franchise, with several sell-side desks arguing for $46 to $48 per share as a fair-value range. The deeper structural issue was [translation risk on the consideration mix], because much of the consideration was ETE Corp shares, an 80 percent fall in ETE unit prices over the six-month engagement period dramatically diluted the realized value to Williams shareholders. By March 2016 the implied per-share consideration had effectively cratered. After termination, Williams stock fell from about $43 at announcement to roughly $20 in mid-2016. The deal also became a case study in [contract-clause risk], the lesson that the legal structuring of conditions precedent can swamp the headline multiple.",
    rows: [
      { item: "Offer value",                              val: "$32.6B",          note: "$43.50 per Williams share, cash plus ETC shares", accent: true },
      { item: "Williams FY2015 revenue",                  val: "$7.6B",           note: "Company reported" },
      { item: "EV / FY2015 revenue",                      val: "approx. 4.3x",    note: "Midpoint of midstream range (3-5x)" },
      { item: "Williams FY2015 adjusted EBITDA",          val: "$4.1B",           note: "Company reported, +22 percent vs FY2014" },
      { item: "EV / FY2015 EBITDA",                       val: "approx. 8.0x",    note: "Low end of midstream M&A range (8-12x)", accent: true },
      { item: "Combined entity EV (intended)",            val: "approx. $77B",    note: "Including assumed debt, exceeds Kinder Morgan" },
      { item: "Synergies (ETE estimate)",                 val: "$2B+ per year",   note: "NPV $20B+, operating integration and capital cost savings" },
      { item: "ETE unit price collapse (Sep 2015 to Mar 2016)", val: "approx. -80 percent", note: "From around $26 to under $5, broke the deal economics", accent: true },
      { item: "ETE $1B preferred placement (March 2016)", val: "$1B Series A convertible preferred", note: "Insider private placement, Warren participated", accent: true },
      { item: "Termination fee paid",                     val: "$0",              note: "Failed condition precedent, no fee owed", accent: true },
      { item: "Williams market cap (2024)",               val: "approx. $70B",    note: "Independent, #2 U.S. midstream operator preserved" },
    ],
    disclaimer: "Financials sourced from Williams Companies consolidated reporting and disclosed segment data. Adjusted EBITDA reflects company-reported metric. Certain figures are estimates derived from disclosed segments.",
  },

  rationale: {
    buyer: {
      title: "Energy Transfer Equity's rationale (at signing)",
      initials: "ETE",
      bg: "bg-amber-700",
      points: [
        "[Become the #1 U.S. midstream operator] Combining ETE's roughly 71,000 miles of pipeline with Williams's roughly 33,000 miles and adjacent assets would have produced about 150,000 miles, roughly 1.8x Kinder Morgan's footprint, and an unambiguous industry-leading position.",
        "[Tax-efficient Section 721 contribution] The deal structure allowed Williams assets to move into the ETE partnership on a tax-free basis under Section 721(a), preserving the pass-through advantages of the MLP structure even as the holding company moved into a C-corp wrapper.",
        "[Access to the Transco franchise] Williams's anchor asset, the Transco system from the Gulf Coast to New York, gave ETE a position in the dense East Coast natural gas market that it had historically been under-exposed to.",
        "[Synergies estimated at $2B+ annually] ETE projected operating-integration and capital-cost synergies of more than $2 billion per year, with stated NPV of $20 billion or more, including refinancing benefits as a larger combined investment-grade entity.",
        "[Lower combined cost of capital] The yield-investor base was expected to favor a combined, more diversified large-cap midstream platform with more stable distribution growth.",
      ],
    },
    seller: {
      title: "Williams Companies's rationale (at signing) and litigation theory (spring 2016)",
      initials: "WMB",
      bg: "bg-red-700",
      points: [
        "[At signing] The $43.50 per share offer represented a premium of roughly 30 to 35 percent versus the pre-announcement price, monetizing near-term value while preserving exposure to the combined yield platform.",
        "[At signing] Williams was under shareholder pressure, Corvex Management and other activist holders had been agitating for strategic action, and the board was internally divided. A negotiated sale to ETE was offered as the resolution.",
        "[Litigation theory, point 1] ETE's invocation of the tax-opinion condition was a [bad-faith termination], a deliberate engineering of opinion failure to escape a deal that had become uneconomic, not a genuine inability to deliver the opinion.",
        "[Litigation theory, point 2] ETE's March 2016 $1 billion Series A convertible preferred private placement to insiders, including Kelcy Warren personally, at a deeply dilutive strike was a [structural sabotage] of the merger consideration and an independent breach of the agreement's covenants.",
        "[Litigation theory, point 3] Latham's conclusion that the opinion was not deliverable was not objectively reasonable. Williams's own counsel, Gibson Dunn, took the opposite view, suggesting Latham's judgment was driven by ETE's commercial preferences rather than independent professional analysis.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "Jun 2026",
    body: "A decade after the deal collapsed, Williams v. Energy Transfer Equity is widely treated as one of the most consequential M&A rulings in recent Delaware history. Vice Chancellor Glasscock's core holding, that a specific and objective condition precedent is to be enforced on its terms even when its non-satisfaction also functions as a de facto MAC, drew a line between [discrete-condition language] and the [MAC catch-all] that the U.S. M&A bar has been working around ever since. Post-2016 merger agreements routinely include (i) explicit MAC carve-outs that prevent specific conditions from being used as backdoor termination paths, (ii) dual-side tax-opinion requirements that require both buyer and seller counsel to confirm tax treatment, and (iii) pre-articulated good-faith standards for advisor opinions, with criteria such as 'reasonable basis,' 'supported by tax law,' and 'informed judgment' written into the contract. The two companies followed different paths after termination. Williams rolled up Williams Partners (WPZ) into the parent C-corp in 2018, simplifying its structure, and traded to roughly $70 billion of market capitalization by 2024 while preserving its #2 U.S. midstream position. ETE merged its operating MLP, Energy Transfer Partners (ETP), into ETE in 2018, simplifying into Energy Transfer LP (ET), which reached roughly $55 billion of market capitalization by 2024. Kelcy Warren remains the dominant figure at ET. Whether shareholders of either company are better off because the deal failed remains contested, the more than $2 billion in estimated annual synergies were never realized, but neither company had to absorb the combined-entity leverage during the 2016-2020 oil cycle.",
    overallVerdict: "Delaware Chancery ruled for ETE. The case is the foundational modern precedent for specific conditions precedent prevailing over the MAC catch-all, and it left a zero-breakup-fee outcome that continues to shape U.S. M&A drafting.",
    positives: [
      "[Both companies survived independently] Williams at roughly $70B market cap in 2024 and ETE/ET at roughly $55B. The deal failure was not a balance-sheet catastrophe for either side.",
      "[Permanent improvement in M&A contract drafting] The discrete-condition versus MAC-catch-all boundary is now well understood, and downstream contract design (MAC carve-outs, dual-side opinions, articulated good-faith standards) is materially more rigorous.",
      "[Delaware court authority reinforced] Vice Chancellor Glasscock's 95-page opinion reaffirmed Delaware's tradition of respecting the textual structure of negotiated agreements and the professional judgment of qualified advisors.",
      "[Avoided oil-cycle leverage] If the deal had closed, the combined entity would have faced the 2016-2020 oil-price weakness with materially higher leverage than either company independently carried. The non-closing arguably reduced systemic stress on the U.S. midstream sector.",
      "[Williams independent strategy] Williams's standalone trajectory, including the Williams Partners roll-up in 2018, the continued Transco expansion, and selective Marcellus gathering acquisitions, produced stable value creation through the cycle.",
    ],
    risks: [
      "[Williams short-term value destruction] Williams stock fell from approximately $43 at signing to roughly $20 in mid-2016, a roughly 50 percent decline, and the company endured a governance shock that saw six of nine board members resign during the engagement.",
      "[Williams CEO authority impaired] Williams CEO Alan Armstrong saw his standing weakened by the failed deal, although the company stabilized by 2018.",
      "[ETE reputational impact] The allegations that ETE had engineered the tax opinion's failure, while legally rejected, left a residual mark on Kelcy Warren's reputation as a counterparty.",
      "[Heightened M&A counterparty risk] Subsequent transactions have priced specific-condition risk much more carefully, increasing the time and cost of mega-deal negotiations across the U.S. market.",
      "[Unrealized synergies] ETE's projected $2 billion-plus of annual synergies, more than $20 billion in NPV, were never realized. U.S. midstream consolidation slowed materially after the case.",
    ],
    editorNote:
      "Williams v. Energy Transfer Equity reads, in hindsight, like a chapter from a casebook. A buyer with a fading appetite finds in the closing condition stack a clean, specific, narrowly drafted condition precedent that the contract itself separates from the broader MAC framework, walks the closing process toward the failure of that condition, and then asks the Delaware Court of Chancery to enforce the contract on its terms. Vice Chancellor Glasscock did exactly that. His core observation, that when parties negotiate a specific and objective condition precedent the court must respect the textual structure they chose rather than collapse the condition back into a general MAC analysis, is doctrinally narrow but practically vast. It gave buyers a backdoor termination path, and it has been the work of the M&A bar ever since to close that backdoor on the seller side with carefully negotiated carve-outs. The case also says something about the role of advisors. Latham's tax partners were not asked to be advocates, they were asked to apply professional judgment to a specific question (whether a Section 721 opinion was deliverable) and to do so in good faith. The Chancery's deference to that judgment, even with billions of dollars and a publicly listed counterparty at stake, is a Delaware-style endorsement of the contractual delegation of difficult technical questions to qualified third parties. Kelcy Warren's $1 billion insider preferred placement in March 2016 was morally questionable and arguably engineered to harm Williams, but the court declined to find a direct causal link between that placement and the opinion's non-deliverability, and on that narrower point the law sided with ETE. Whether the deal's failure was good for shareholders depends on a counterfactual nobody can run, the unrealized synergies on one side, the avoided combined-entity leverage on the other. What is not contested is that the contract drafting consequences are permanent.",
  },

  tombstone: {
    acquirerInitials: "ETE",
    acquirerBg: "bg-amber-700",
    targetInitials: "WMB",
    targetBg: "bg-red-700",
    acquirerName: "Energy Transfer Equity, L.P.",
    targetName: "The Williams Companies, Inc.",
    dealTitle: "$32.6B midstream merger (Terminated, ETE prevailed in Delaware Chancery)",
    dealSize: "$32.6B",
    dealSizeUSD: "USD 32.6 Billion ($43.50/share, cash plus ETE Corp shares)",
    evEbitda: "approx. 8.0x",
    closeDate: "Jun 2016, Terminated",
  },

  sources: [
    { id: 1, text: "Energy Transfer Equity Press Release, ETE and Williams Companies Announce Merger Agreement (September 28, 2015)", url: "https://ir.energytransfer.com" },
    { id: 2, text: "Williams Companies Press Release, Williams Enters Merger Agreement with Energy Transfer (September 28, 2015)", url: "https://investor.williams.com" },
    { id: 3, text: "Delaware Court of Chancery, The Williams Companies, Inc. v. Energy Transfer Equity, L.P., C.A. Nos. 12168-VCG and 12337-VCG (June 24, 2016, Glasscock V.C.)", url: "https://courts.delaware.gov" },
    { id: 4, text: "Energy Transfer Equity Press Release, ETE Announces Chancery Court Decision in Litigation with Williams (June 24, 2016)", url: "https://ir.energytransfer.com" },
    { id: 5, text: "Energy Transfer Equity Press Release, ETE Terminates Merger Agreement with Williams (June 29, 2016)", url: "https://ir.energytransfer.com" },
    { id: 6, text: "Williams Companies SEC Filing, 10-K Annual Report FY2015 (Filed February 2016)", url: "https://www.sec.gov/Archives/edgar/data/107263" },
    { id: 7, text: "Ropes & Gray Client Alert, Practical Guidance on Merger Conditions from Williams v. Energy Transfer Equity (May 2017)", url: "https://www.ropesgray.com" },
    { id: 8, text: "Arnold & Porter Advisory, Delaware Court Addresses the Meaning of 'Commercially Reasonable Efforts' in M&A Context (June 2016)", url: "https://www.arnoldporter.com" },
    { id: 9, text: "Cooley M&A Blog, Court Gives Energy Transfer the Right to Walk Based on its Counsel's Inability to Deliver the Required Tax Opinion (August 2016)", url: "https://cooleyma.com" },
    { id: 10, text: "Texas Lawbook, Williams v. ETE Trial Finale, The Battle of the Tax Lawyers (June 2016)", url: "https://texaslawbook.net" },
    { id: 11, text: "The Wall Street Journal, Energy Transfer Wins Right to Walk Away From $33 Billion Williams Deal (June 24, 2016)" },
    { id: 12, text: "Financial Times, How a Tax Opinion Killed a $33 Billion Merger (Retrospective, 2017)" },
    { id: 13, text: "Delaware Supreme Court, Affirmance of Chancery Court Ruling (March 2017)", url: "https://courts.delaware.gov" },
  ],

  seo: {
    title: "Energy Transfer x Williams, $33B Failed Merger and the Section 721 Tax-Opinion Case That Reshaped MAC Drafting",
    description:
      "In September 2015 Energy Transfer Equity agreed to acquire Williams Companies for $32.6B. By June 2016 the Delaware Court of Chancery had ruled in ETE's favor and the deal was terminated with zero breakup fee. Vice Chancellor Glasscock's opinion established that a specific tax-opinion condition precedent could defeat the MAC catch-all, and rewrote U.S. M&A contract drafting. A full FT/WSJ-style analysis of the deal mechanics, the litigation, and the contract-drafting consequences.",
    keywords: [
      "Energy Transfer Williams failed merger",
      "ETE Williams Companies $33 billion deal",
      "Section 721 tax opinion M&A",
      "Delaware Chancery MAC clause ruling",
      "Vice Chancellor Glasscock",
      "Williams v Energy Transfer Equity",
      "Latham Watkins tax opinion",
      "Kelcy Warren preferred unit sabotage",
      "M&A condition precedent versus MAC",
      "zero breakup fee M&A precedent",
      "midstream pipeline merger",
      "MLP merger Section 721",
      "bad faith termination Delaware",
      "U.S. M&A contract drafting MAC carve-out",
    ],
  },

  concepts: [
    {
      term: "Section 721 IRS Ruling and Tax Opinion",
      href: "/learn/section-721-tax-opinion",
      description: "IRC Section 721(a) provides for tax-free treatment of property contributed to a partnership in exchange for partnership interests. In M&A involving MLP structures, deal counsel issues a 'Section 721 opinion' confirming the transaction qualifies for that treatment. In ETE-Williams the opinion was a condition precedent to closing, and Latham's inability to deliver it ended the deal.",
    },
    {
      term: "MAC Clause vs Specific Condition Precedent",
      href: "/learn/mac-vs-specific-condition",
      description: "A material adverse change clause provides a general fallback exit on a high evidentiary bar. A specific condition precedent (regulatory approval, tax opinion, financing) sits separately in the contract with its own textual logic. Williams v. Energy Transfer established that the specific condition prevails when properly drafted, even where its failure also has MAC-like effect.",
    },
    {
      term: "Delaware Chancery and Vice Chancellor Glasscock",
      href: "/learn/delaware-chancery-court",
      description: "The Delaware Court of Chancery is the de facto final forum for U.S. M&A litigation. Vice Chancellor Sam Glasscock III's 95-page opinion in Williams v. Energy Transfer is one of the most-cited rulings in modern corporate practice, establishing how Delaware courts will treat advisor opinions and condition-precedent clauses in mega-mergers.",
    },
    {
      term: "Reverse Triangular Merger and MLP Tax Treatment",
      href: "/learn/reverse-triangular-merger",
      description: "ETE-Williams was a layered transaction combining a reverse-triangular merger of Williams into a buyer subsidiary with a Section 721 contribution into the ETE partnership. The precise balance between cash and stock consideration mattered for the IRS recharacterization risk, and that balance broke when ETE unit prices collapsed.",
    },
    {
      term: "Bad-Faith Termination Defense",
      href: "/learn/bad-faith-termination",
      description: "A seller's argument that the buyer deliberately engineered the failure of a closing condition to escape its obligations. Williams advanced this theory aggressively in 2016 but lost, the court held that as long as Latham acted in good faith on the tax-opinion question, ETE's invocation of the unmet condition was not bad faith.",
    },
    {
      term: "Dilutive Insider Placement",
      href: "/learn/dilutive-insider-placement",
      description: "A private placement of securities at heavily discounted strike prices to insiders or affiliates. ETE's March 2016 issuance of $1 billion of Series A convertible preferred units to insiders including Kelcy Warren was characterized by Williams as a structural sabotage of the merger consideration. The court did not find a direct contractual breach.",
    },
    {
      term: "Master Limited Partnership (MLP) Structure",
      href: "/learn/mlp-structure",
      description: "A U.S. tax-advantaged pass-through partnership structure used by the bulk of midstream pipeline operators throughout the 2010s. Both ETE and Williams ran operating MLP subsidiaries (ETP and WPZ) beneath C-corp holding companies. The MLP structure made Section 721 the natural tax pathway for the deal, and the same structure made the opinion condition decisive.",
    },
    {
      term: "Oil Cycle and Failed MAC Trigger",
      href: "/learn/oil-cycle-mac",
      description: "Market-wide commodity collapses (the 2014-2016 oil collapse, in this case) typically cannot trigger a MAC under Delaware law, because they affect the seller's whole industry rather than the seller specifically. That made ETE's general-MAC path unattractive, and pushed ETE's strategy toward the discrete tax-opinion condition.",
    },
  ],

  faq: [
    {
      q: "Why did ETE not simply invoke the merger agreement's general MAC clause?",
      a: "The MAC catch-all in Delaware M&A practice has an extremely high evidentiary bar, the buyer typically has to show (i) the adverse change is seller-specific rather than industry-wide, (ii) the effect is durationally significant rather than short-term, and (iii) the buyer was not already aware of the risk at signing. The 2015-2016 oil collapse failed all three tests, it was a market-wide commodity event, not Williams-specific, and ETE plainly knew commodity exposure existed at signing. By contrast, the Section 721 opinion clause was an objective, narrowly drafted condition precedent. If ETE could establish that Latham could not deliver the opinion in good faith, the closing simply failed for non-satisfaction of a stipulated condition. ETE's counsel chose the cleaner legal path, and that choice was, in the event, decisive.",
    },
    {
      q: "Why could Latham & Watkins not deliver a clean Section 721 opinion?",
      a: "The critical issue was the risk that the IRS would recharacterize the cash portion of the merger consideration as payment for Williams's underlying assets rather than as consideration for ETC stock. Section 721 tax-free treatment depends on the IRS respecting the separateness of the share exchange and the cash component. As ETE's unit price fell roughly 80 percent during the engagement, the cash portion ballooned relative to the equity portion, dramatically increasing the recharacterization risk. Latham's tax team, led by Bryan W. Holmes, concluded in good faith that under prevailing market conditions they could no longer issue an opinion that the IRS should respect the tax-free contribution treatment. Williams's counsel at Gibson Dunn took the opposite view, but the Chancery deferred to Latham's good-faith determination as a matter of contractual structure rather than substantive tax analysis.",
    },
    {
      q: "Why did Williams call ETE's $1 billion preferred unit placement structural sabotage?",
      a: "In March 2016 ETE issued $1 billion of Series A convertible preferred units in a private placement to insiders including Kelcy Warren personally at a deeply dilutive strike. Williams argued that the placement had three effects, (i) it diluted the combined entity's LP units that Williams shareholders would have received post-closing, (ii) it transferred value from the deal economics to ETE insiders, and (iii) it functioned as a strategic signal that ETE was no longer aligned with closing the transaction. Williams's lawyers argued the placement was an independent breach of ETE's commercially-reasonable-efforts covenant. The Chancery declined to draw a direct causal link between the placement and the opinion's non-deliverability, and held that the merger agreement did not expressly prohibit the placement, so the morally questionable transaction did not, in the court's view, breach the contract.",
    },
    {
      q: "Did ETE really pay zero breakup fee on a $33 billion deal?",
      a: "Yes. The merger agreement included customary termination-fee provisions (estimated in the roughly $1.4 billion range), but those provisions applied to scenarios such as a willful buyer breach or a deliberate MAC invocation. The actual termination here was for non-satisfaction of a stipulated condition precedent (the Section 721 opinion), which was a mutual condition tied to an objective fact (Latham's inability to issue the opinion), not a buyer fault scenario. Delaware Chancery explicitly observed that the tax-opinion clause was a mutual condition precedent whose non-satisfaction gave both parties a termination right but did not trigger fee liability. The zero-fee outcome on a transaction of this size remains one of the most consequential M&A precedents of the last decade.",
    },
    {
      q: "How did the case change U.S. M&A contract drafting?",
      a: "Three lasting changes. First, the rise of [MAC carve-outs for specific conditions]. Sellers now routinely insert language that says specific conditions cannot be used as backdoor termination paths, and that failures of objective conditions outside the seller's control will not, on their own, release the buyer. Second, [dual-side tax opinion requirements]. Where tax treatment is decisive, both buyer and seller counsel are now typically required to issue confirmatory opinions, reducing the leverage of any single firm's good-faith refusal. Third, [pre-articulated good-faith standards]. Modern agreements include explicit criteria (reasonable basis, supported by applicable tax law, informed professional judgment) that the issuing firm must apply before declining to issue an opinion. Post-2016, U.S. M&A contract drafting on condition-precedent stacks is materially more rigorous than it was before this case.",
    },
    {
      q: "Are shareholders of either company better off because the deal failed?",
      a: "The honest answer is that no one can be certain. The case for the failure being beneficial rests on three points, (i) the combined entity would have entered the 2016-2020 oil cycle with materially higher leverage than either standalone company carried, (ii) Williams's independent strategy (Williams Partners roll-up in 2018, continued Transco expansion, selective Marcellus gathering acquisitions) produced steady value creation, and (iii) both companies reached reasonable scale by 2024, with Williams at roughly $70 billion and ETE/ET at roughly $55 billion in market capitalization. The case for the failure being costly rests on the unrealized synergies, ETE estimated more than $2 billion per year and $20 billion-plus in NPV, plus the short-term value destruction at Williams (stock fell roughly 50 percent in the aftermath) and the governance shock that saw six of nine Williams directors resign. Whatever the answer on shareholder value, the more durable legacy of the case is the body of M&A contract law and drafting practice it produced.",
    },
  ],
};

export default deal;
