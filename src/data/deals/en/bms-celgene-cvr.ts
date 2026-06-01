/**
 * Bristol-Myers Squibb × Celgene $74B + CVR, announced Jan 2019, closed Nov 2019.
 * The all-or-nothing CVR milestone trap, how a 36-day FDA delay erased $6.4B
 * in contingent payments.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bms-celgene-cvr",
  title: "The $6.4B Milestone Trap, How 36 Days Erased the Celgene CVR",
  subtitle:
    "Bristol-Myers Squibb's $74B acquisition of Celgene · $50 cash + 1 BMS share + 1 CVR per Celgene share · how a single 36-day FDA delay wiped out a $9-per-CVR all-or-nothing option",
  category: "ma",
  industry: "Pharmaceuticals / Biotech",
  country: "United States",
  announcedAt: "2019-01-03",
  closedAt: "2019-11-20",
  announcedDisplay: "Jan 3, 2019 (Merger agreement announced)",
  closedDisplay: "Nov 20, 2019 (Closed)",
  readingMinutes: 16,
  tags: [
    "BMS",
    "Celgene",
    "CVR",
    "Contingent Value Right",
    "Liso-cel",
    "Breyanzi",
    "Ozanimod",
    "Ide-cel",
    "Abecma",
    "Revlimid",
    "Otezla",
    "Pharma M&A",
    "Diligent Efforts",
  ],
  excerpt:
    "On January 3, 2019, Bristol-Myers Squibb announced a $74B acquisition of Celgene. Celgene shareholders received [$50 cash + 1.0 BMS share + 1 CVR] per share, with the CVR worth $9 [only if all three] of Ozanimod, Liso-cel, and Ide-cel obtained FDA approval by their respective milestone dates. Two of the three approvals landed on time. But Liso-cel (Breyanzi) missed its December 31, 2020 deadline by [36 days], approved on February 5, 2021, triggering the [all-or-nothing] clause and wiping out approximately [$6.4 billion] of contingent payment obligations (~714 million CVRs × $9). Former Celgene shareholders sued BMS through trustee UMB Bank for allegedly slow-walking FDA submission, but BMS prevailed at trial in September 2024. The deal is now the textbook case study on CVR design risk and the legal weight of the \"diligent efforts\" clause, the single most expensive line item in modern US M&A drafting.",

  acquirer: { initials: "BMY", bg: "bg-violet-700", label: "Bristol-Myers Squibb (BMY)" },
  target: { initials: "CELG", bg: "bg-rose-600", label: "Celgene Corporation (CELG)" },

  background: [
    "Celgene, founded in 1986 as a Celanese spinout and headquartered in Summit, New Jersey, was a top-tier US biotech anchored on multiple myeloma franchise drugs Revlimid (lenalidomide), Pomalyst (pomalidomide), and the psoriasis franchise Otezla (apremilast). FY2018 revenue of about $15.3B, EBITDA of $6.7B, and a market cap around $50B. But more than 60% of revenue was concentrated in Revlimid alone, and Revlimid's US patent estate faced staggered loss of exclusivity (LOE) between 2022 and 2026. Despite years of effort, Celgene management had not produced a credible \"post-Revlimid\" growth story by late 2018, and the stock had fallen roughly 50% from its 2017 highs.",
    "Bristol-Myers Squibb was a mid-cap pharma anchored on the PD-1 immuno-oncology asset Opdivo (nivolumab) and the anticoagulant Eliquis (apixaban). FY2018 revenue of about $22.6B, market cap around $80B. Opdivo had been losing the first-line non-small-cell lung cancer (NSCLC) battle to Merck's Keytruda, with key clinical readouts trending against BMS, and the BMS pipeline was widely seen as lacking a credible \"post-Opdivo\" engine. Both companies were arriving at the same structural problem from different angles, a thin growth pipeline.",
    "[The $74B announcement.] On January 3, 2019, BMS announced the Celgene acquisition. Consideration per Celgene share: [$50.00 cash + 1.0 BMS common share + 1 CVR], approximately $102.43 per share at the announcement-date BMS closing price, for a total enterprise value of approximately $74B (including Celgene net debt). BMS stock fell [13.3%] on the announcement, with the market view that BMS had overpaid. Hedge fund Starboard Value subsequently mounted a proxy campaign urging BMS shareholders to vote down the deal, but at the April 12, 2019 BMS shareholder meeting the merger passed with approximately [75%] in favor.",
    "[What the CVR was.] A Contingent Value Right (CVR) is an option-style security that pays additional consideration if specified clinical, regulatory, or commercial milestones are achieved post-closing. In this deal, the CVR paid $9 per CVR if [all three] of Ozanimod, Liso-cel, and Ide-cel received FDA approval by their respective deadlines. The CVR traded on NYSE under the ticker [BMY.RT], with approximately 714 million CVRs issued. Maximum potential payout: ~714 million × $9 = approximately [$6.4 billion]. The decisive design choice was that [all three milestones had to be achieved for any payout], a miss on any single milestone wiped out the entire $9, an all-or-nothing structure.",
    "[Antitrust and closing.] The FTC found that the BMS-Celgene combination would substantially lessen competition in the psoriasis treatment market and required Celgene to divest Otezla as a remedy under a Consent Order. On November 21, 2019, Celgene sold Otezla to Amgen for [$13.4B in cash], and the BMS-Celgene merger closed on November 20, 2019. The Otezla divestiture effectively offset a portion of BMS's cash funding burden.",
  ],

  dealSummary: {
    dealValueDisplay: "approx. $74B (EV, including CVR notional)",
    acquirerName: "Bristol-Myers Squibb Company (NYSE: BMY)",
    targetName: "Celgene Corporation (formerly NASDAQ: CELG)",
    announcedDisplay: "Jan 3, 2019",
    closedDisplay: "Nov 20, 2019",
    country: "US",
  },

  executiveSummary: [
    "[$74B megadeal plus CVR] BMS acquired Celgene for approximately $74B (EV), with each Celgene share converted into [$50 cash + 1.0 BMS share + 1 CVR] (announced Jan 3, 2019; closed Nov 20, 2019).",
    "[CVR mechanics] $9 per CVR payable [only if all three] of Ozanimod (multiple sclerosis), Liso-cel (CAR-T for large B-cell lymphoma), and Ide-cel (CAR-T for multiple myeloma) received FDA approval by stated deadlines. ~714 million CVRs × $9 = up to [$6.4B] maximum payout.",
    "[All-or-nothing clause] A miss on any single milestone wiped out the entire $9 payment, no partial credit. This was the decisive structural choice.",
    "[36 days erased $6.4B] Ozanimod approved March 2020 ([passed]), Ide-cel/Abecma approved March 26, 2021 ([passed]). But Liso-cel/Breyanzi missed its Dec 31, 2020 deadline by [36 days], approved Feb 5, 2021, triggering the all-or-nothing clause and wiping out approximately $6.4B of contingent obligations.",
    "[NYSE BMY.RT collapse] The CVR traded on NYSE under BMY.RT. Peaked above $2.50 at close (Nov 2019), then collapsed to ~$0.05 by late 2020 as Breyanzi manufacturing inspection delays became confirmed. Effectively worthless by year-end 2020.",
    "[UMB Bank v. BMS] Trustee UMB Bank filed a $6.4B class-action suit in SDNY federal court (1:21-cv-04897) alleging BMS breached its [\"diligent efforts\"] obligation by slow-walking the FDA submission and manufacturing inspection process. BMS prevailed on the merits in September 2024; plaintiffs appealed.",
    "[FTC remedy] FTC required divestiture of Otezla due to psoriasis-market competition concerns. Celgene sold Otezla to Amgen for [$13.4B] on November 21, 2019, immediately before merger close.",
    "[Strategic outcome] BMS gained Revlimid, Pomalyst, Liso-cel, Ide-cel, and Ozanimod, vaulting into top-five global pharma by revenue. But Revlimid US LOE began in 2022 and accelerated through 2026, surfacing exactly the [patent cliff] risk the deal had nominally been designed to escape.",
  ],

  industryOverview: {
    body: "Late-2010s US pharma M&A was overwhelmingly about [patent cliff avoidance]. Pfizer, Allergan, AbbVie, Merck, and BMS all faced staggered LOE schedules on flagship drugs and turned to external pipeline M&A. The persistent negotiation friction was how to price the [clinical-development uncertainty] of biotech pipeline assets, and [CVRs (Contingent Value Rights)] had been used sporadically since the 1980s as the standard tool. CVRs pay additional consideration upon achievement of milestones (clinical, regulatory, or commercial) and are commonly used to bridge 5~15% of the headline price as a contingent layer. Notable precedents: Sanofi-Genzyme (2011), Sanofi-Bioverativ (2018), Allergan-Tobira (2016). The structures vary across deals, but typically each milestone has its own payment tranche, with partial milestone achievement triggering partial payment.",
    metrics: [
      { label: "BMS market cap (end of 2018)",     value: "~$80B",      sub: "Pre-announcement" },
      { label: "Celgene market cap (end of 2018)", value: "~$50B",      sub: "Pre-announcement" },
      { label: "Deal EV",                          value: "~$74B",      sub: "Including Celgene net debt" },
      { label: "CVRs issued",                       value: "~714 million", sub: "1 CVR per Celgene share" },
      { label: "Maximum CVR payout",                value: "~$6.4B",     sub: "714M × $9" },
      { label: "Otezla divestiture price",          value: "$13.4B",     sub: "To Amgen, Nov 2019" },
    ],
    subBody:
      "What made the BMS-Celgene CVR exceptional was its [all-or-nothing] design, all three milestones had to land in time for any payment. The conventional CVR structure assigns a separate payment tranche to each milestone so that partial achievement yields partial payment. BMS's insistence on combined-condition payment created an asymmetric option where a single missed deadline could erase the entire $6.4B notional. In hindsight, that drafting choice was the single most consequential element of the transaction.",
    players: [
      { name: "Bristol-Myers Squibb", role: "Acquirer, anchored on Opdivo and Eliquis" },
      { name: "Celgene",              role: "Target, anchored on Revlimid, Pomalyst, and Otezla" },
      { name: "Amgen",                role: "Buyer of divested Otezla ($13.4B) under FTC consent order" },
      { name: "FTC",                  role: "Antitrust regulator, ordered Otezla divestiture" },
      { name: "FDA",                  role: "Approval authority over Ozanimod, Liso-cel, and Ide-cel, ultimate CVR decision-maker" },
      { name: "Starboard Value",      role: "Hedge fund, mounted proxy campaign urging BMS shareholders to reject the deal (failed)" },
      { name: "Wellington Management", role: "Major Celgene shareholder, briefly expressed concerns the price was too low" },
      { name: "UMB Bank",             role: "Trustee for former Celgene CVR holders, plaintiff in $6.4B suit against BMS" },
    ],
  },

  companyOverview: {
    targetName: "Celgene Corporation",
    body: "Celgene was a New Jersey based biopharmaceutical company spun out of Celanese Corporation in 1986. In 1998 it pivoted to oncology and immunology by rediscovering thalidomide's clinical activity in multiple myeloma, building a franchise that became the foundation of the company. Core revenue drivers as of 2018: [Revlimid (lenalidomide, first-line multiple myeloma)], [Pomalyst (pomalidomide, third-line multiple myeloma)], [Otezla (apremilast, psoriasis and psoriatic arthritis)], plus late-stage pipeline assets [Ozanimod (multiple sclerosis), Liso-cel (CAR-T for large B-cell lymphoma), and Ide-cel (CAR-T for multiple myeloma)]. Revlimid alone accounted for roughly [63%] of FY2018 revenue, and Revlimid's US patent estate faced staggered LOE between 2022 and 2026, making \"post-Revlimid\" the existential question for the company.",
    metrics: [
      { label: "Founded",                  value: "1986",         sub: "Spun out of Celanese Corporation" },
      { label: "Headquarters",             value: "Summit, NJ",    sub: "New Jersey" },
      { label: "FY2018 revenue",           value: "$15.28B",      sub: "+18% YoY" },
      { label: "FY2018 EBITDA",            value: "$6.74B",       sub: "EBITDA margin ~44%" },
      { label: "Revlimid share of revenue", value: "~63%",         sub: "FY2018" },
      { label: "Employees",                value: "~8,000",       sub: "End of 2018" },
    ],
    financials: [
      { year: "FY2014", revenue: 7670,  cogs: 320,  grossProfit: 7350,  sga: 2380, operatingIncome: 2280, ebitda: 2820 },
      { year: "FY2015", revenue: 9256,  cogs: 380,  grossProfit: 8876,  sga: 2920, operatingIncome: 1916, ebitda: 2580 },
      { year: "FY2016", revenue: 11229, cogs: 480,  grossProfit: 10749, sga: 3500, operatingIncome: 3779, ebitda: 4500 },
      { year: "FY2017", revenue: 13003, cogs: 520,  grossProfit: 12483, sga: 3800, operatingIncome: 4690, ebitda: 5570 },
      { year: "FY2018", revenue: 15281, cogs: 600,  grossProfit: 14681, sga: 4280, operatingIncome: 5640, ebitda: 6740 },
    ],
    financialsNote: "Unit: USD millions | US GAAP consolidated | Source: Celgene 10-K filings (FY2014~FY2018). R&D expense is reported separately from SG&A and is incorporated into operating income via separate adjustment.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "The transaction was structured as a [reverse triangular merger]. BMS formed a wholly owned subsidiary, [Burgundy Merger Sub, Inc.], which merged with and into Celgene, leaving Celgene as the surviving entity and a wholly owned subsidiary of BMS. Each share of Celgene common stock was converted into the right to receive [(i) $50.00 in cash, (ii) one share of BMS common stock, and (iii) one CVR]. At the announcement-date BMS closing price, the per-share consideration was approximately $102.43, implying total enterprise value of approximately $74B including Celgene net debt. Financing came from a combination of BMS balance sheet cash, a $33.5B syndicated bridge loan facility (Morgan Stanley and MUFG lead arrangers), and a subsequent investment-grade bond offering.",
    preOwnership: {
      nodes: [
        { id: "bmy_pre",  label: "BMS shareholders",       sub: "100%",                 type: "public" },
        { id: "bmy",      label: "Bristol-Myers Squibb",   sub: "Opdivo, Eliquis",      type: "acquirer" },
        { id: "celg_pre", label: "Celgene shareholders",    sub: "100% (~714M shares)",   type: "public" },
        { id: "celg",     label: "Celgene",                sub: "Revlimid, Pomalyst, Otezla", type: "target" },
      ],
      edges: [
        { from: "bmy_pre",  to: "bmy",  label: "100%" },
        { from: "celg_pre", to: "celg", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bmy_post_legacy", label: "Legacy BMS shareholders", sub: "~69% (post-dilution)",   type: "public" },
        { id: "celg_post",       label: "Former Celgene shareholders", sub: "~31% + 1 CVR per share", type: "public" },
        { id: "bmy_post",        label: "Bristol-Myers Squibb",   sub: "Combined post-merger BMS", type: "acquirer" },
        { id: "celg_sub",        label: "Celgene (BMS subsidiary)", sub: "Surviving entity after merger", type: "target" },
        { id: "amgen",           label: "Amgen",                   sub: "Acquired Otezla ($13.4B)", type: "entity" },
      ],
      edges: [
        { from: "bmy_post_legacy", to: "bmy_post",  label: "~69%" },
        { from: "celg_post",       to: "bmy_post",  label: "~31% (BMS share + $50 + CVR)" },
        { from: "bmy_post",        to: "celg_sub",  label: "100% (Celgene as subsidiary)" },
        { from: "celg_sub",        to: "amgen",     label: "Otezla divestiture $13.4B" },
      ],
    },
    keyTerms: [
      { label: "Deal structure",             value: "Reverse triangular merger" },
      { label: "Per-Celgene-share consideration", value: "$50.00 cash + 1.0 BMS share + 1 CVR",                        accent: true },
      { label: "Implied per-share value (announce date)", value: "~$102.43 (BMS Jan 2, 2019 close)" },
      { label: "Total deal value",             value: "~$74B (EV)",                                                     accent: true },
      { label: "CVR milestone #1",             value: "Ozanimod (MS) FDA approval by Dec 31, 2020 → [Achieved Mar 2020]", accent: true },
      { label: "CVR milestone #2",             value: "Liso-cel/Breyanzi (CAR-T) FDA approval by Dec 31, 2020 → [Missed, approved Feb 5, 2021]", accent: true },
      { label: "CVR milestone #3",             value: "Ide-cel/Abecma (CAR-T) FDA approval by Mar 31, 2021 → [Achieved Mar 26, 2021]", accent: true },
      { label: "CVR payout condition",         value: "$9 per CVR payable only if all three milestones achieved (all-or-nothing)", accent: true },
      { label: "CVRs issued",                  value: "~714 million (1 per Celgene share)" },
      { label: "Maximum CVR payout",           value: "~$6.4B (actual payout = $0)",                                  accent: true },
      { label: "CVR listing",                  value: "NYSE ticker [BMY.RT]" },
      { label: "Efforts standard",             value: "BMS obligated to use \"diligent efforts\" to achieve each milestone", accent: true },
      { label: "FTC consent order",            value: "Celgene to divest Otezla to Amgen for $13.4B (Nov 2019)" },
      { label: "Financing",                    value: "Balance sheet cash + $33.5B bridge loan (Morgan Stanley, MUFG) + bonds" },
      { label: "Shareholder approval",          value: "BMS ~75% in favor (Apr 12, 2019), Celgene super-majority approval" },
      { label: "Closing",                      value: "November 20, 2019" },
    ],
  },

  advisors: {
    body: "Both sides ran full-line megadeal advisor lineups. On the BMS side, Morgan Stanley and Evercore co-led financial advisory, with Kirkland & Ellis as lead legal counsel driving the transaction structure and CVR drafting. On the Celgene side, J.P. Morgan and Citi led financial advisory, with Wachtell, Lipton, Rosen & Katz as lead legal counsel. In the post-close CVR litigation, Skadden, Arps appears as lead defense counsel for BMS, while plaintiff-side representation includes Bernstein Litowitz Berger & Grossmann (Mark Lebovitch et al.) for the former Celgene shareholders through trustee UMB Bank.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BMS (Acquirer)",
        initials: "BMY",
        bg: "bg-violet-700",
        advisors: [
          {
            firm: "Morgan Stanley",
            role: "Financial Advisor (Lead)",
            roleType: "financial",
            note: "Lead financial advisor, deal structuring, CVR pricing, bridge loan co-arranger",
          },
          {
            firm: "Evercore",
            role: "Financial Advisor (Co-advisor)",
            roleType: "financial",
            note: "Valuation work and fairness opinion",
          },
          {
            firm: "Dyal Co.",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Board-level financial advisory",
          },
          {
            firm: "Kirkland & Ellis",
            role: "Legal Advisor (Lead)",
            roleType: "legal",
            note: "Lead legal counsel, deal structure, CVR contract drafting, FTC strategy",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom",
            role: "Legal Advisor (CVR litigation)",
            roleType: "legal",
            note: "Lead defense counsel for BMS in UMB Bank v. BMS (post-2021)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Celgene (Target)",
        initials: "CELG",
        bg: "bg-rose-600",
        advisors: [
          {
            firm: "J.P. Morgan",
            role: "Financial Advisor (Lead)",
            roleType: "financial",
            note: "Lead sell-side financial advisor, fairness opinion",
          },
          {
            firm: "Citi",
            role: "Financial Advisor (Co-advisor)",
            roleType: "financial",
            note: "Supporting financial advisory for Celgene",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Legal Advisor (Lead)",
            roleType: "legal",
            note: "Lead legal counsel, deal structure, board fiduciary duty, CVR negotiation",
          },
          {
            firm: "Bernstein Litowitz Berger & Grossmann",
            role: "Plaintiff Counsel (CVR litigation)",
            roleType: "legal",
            note: "Lead plaintiff counsel for UMB Bank (Mark Lebovitch et al.)",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on official announcements, S-4 filings, and court records. Some assignments are not confirmed beyond SEC or court filings.",
  },

  valuation: {
    body: "Per-share consideration at the announcement-date BMS closing price ($52.43 on Jan 2, 2019) was [$50 cash + $52.43 in BMS stock + CVR option value ~$1~$3] = approximately $102.43. The CVR's [announcement-date option value] was estimated by sell-side analysts at $1~$3 using standard Black-Scholes and trinomial-tree approaches. The CVR briefly traded above $2.50 at NYSE listing in November 2019 before collapsing to $0.05 by late 2020 as Breyanzi delay concerns mounted, expiring at $0 on December 31, 2020. The headline EV/EBITDA multiple was approximately [11.0x] (EV $74B / FY2018 EBITDA $6.74B), seen as a [premium multiple] given the Revlimid LOE overhang.",
    rows: [
      { item: "Per-share cash consideration",       val: "$50.00",         note: "Fixed cash component" },
      { item: "Per-share BMS stock consideration",   val: "1.0 BMS share",  note: "Implied ~$52.43 at announce" },
      { item: "Per-share CVR (option value)",        val: "~$1~$3",         note: "Sell-side estimate at announce", accent: true },
      { item: "Per-share headline value",            val: "~$102.43",        note: "Jan 2, 2019 BMS close" },
      { item: "Celgene shares outstanding",          val: "~714 million",   note: "Matches CVRs issued" },
      { item: "Equity value",                        val: "~$74B",          note: "Cash + stock + CVR notional",      accent: true },
      { item: "Celgene net debt (end of 2018)",       val: "~+$13B",         note: "Added in EV calculation" },
      { item: "Total deal EV",                       val: "~$74B (EV)",     note: "Including Celgene net debt",       accent: true },
      { item: "FY2018 EBITDA",                       val: "$6.74B",         note: "Celgene 10-K" },
      { item: "Headline EV/EBITDA",                  val: "~11.0x",         note: "Pre-Revlimid-LOE adjustment",      accent: true },
      { item: "Maximum CVR payout (deal-wide)",      val: "~$6.4B",         note: "714M × $9 (all-or-nothing)",        accent: true },
      { item: "Actual CVR payout (as of Dec 31, 2021)", val: "$0",            note: "Liso-cel 36-day delay wiped it out", accent: true },
    ],
    disclaimer: "Note: Pricing figures are based on SEC S-4 filings, press coverage, and market estimates. Some option values are estimates.",
  },

  rationale: {
    buyer: {
      title: "BMS, Why Pay $74B?",
      initials: "BMY",
      bg: "bg-violet-700",
      points: [
        "[Resolving Opdivo dependence] Opdivo was losing the first-line NSCLC battle to Merck's Keytruda, and BMS needed a credible post-Opdivo pipeline. Celgene's oncology and immunology pipeline was the fastest available external source.",
        "[Immediate cash flow accretion] Adding Celgene's $6.74B FY2018 EBITDA roughly doubled BMS's consolidated EBITDA overnight, propelling BMS into top-five global pharma by revenue.",
        "[CVR as a price-gap bridge] Celgene argued its pipeline assets deserved full credit at signing; BMS refused to bear the clinical risk on unapproved drugs. The CVR was the negotiation tool that bridged the gap, additional consideration payable only upon clinical success.",
        "[Asymmetric all-or-nothing structure] All three milestones had to be achieved for any $9 payment; missing even one wiped out the [entire] obligation. This was a structurally asymmetric option in BMS's favor, and ex post it proved decisive.",
        "[The patent-cliff paradox] The deal was nominally framed as patent-cliff insurance against Eliquis LOE (2026~2028), but Revlimid itself faced a closer-in LOE (2022~2026). Critics pointed out that BMS was effectively trading one patent cliff for another, more imminent one.",
      ],
    },
    seller: {
      title: "Celgene, Why Sell at $74B?",
      initials: "CELG",
      bg: "bg-rose-600",
      points: [
        "[Absence of a post-Revlimid story] 63% of FY2018 revenue concentrated in a single drug, with US LOE clearly arriving from 2022 onward. The late-stage pipeline (Ozanimod, Liso-cel, Ide-cel) carried meaningful standalone commercialization risk.",
        "[Stock had halved in 2017~2018] Down from ~$147 peak in 2017 to ~$66 by September 2018. GED-0301 (Crohn's) trial failure and the Ozanimod CRL (FDA refusal-to-file) hit consecutively. Market faith in standalone recovery had eroded.",
        "[$50 immediate cash + preserved upside] Celgene shareholders received [$50 cash] for immediate partial monetization, [1 BMS share] for participation in the combined entity's upside, and [1 CVR] for additional payment if pipeline succeeded. A diversified risk-return structure on paper.",
        "[CVR as a negotiating chip] Celgene management used the CVR specifically to push the headline price up to ~$102.43, with management argument that BMS was not fully crediting pipeline value. Ex post, the CVR proved worthless and actual realized value was effectively $50 + 1 BMS share.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The transaction closed on November 20, 2019, and the CVR expired worthless on December 31, 2021. Ozanimod and Ide-cel (Abecma) achieved FDA approval within their deadlines, but Liso-cel (Breyanzi) missed its December 31, 2020 deadline by [36 days], approved February 5, 2021, triggering the all-or-nothing clause and erasing the entire ~$6.4B contingent obligation. Shortly thereafter, trustee UMB Bank filed a $6.4B class-action suit in SDNY federal court (UMB Bank, N.A. v. Bristol-Myers Squibb Company, 1:21-cv-04897), alleging that BMS breached its [\"diligent efforts\"] obligation by allowing a major BLA amendment that added at least three months of review time and by allowing manufacturing inspection delays. On September 30, 2024, SDNY ruled in BMS's favor on the merits (plaintiffs failed to establish the intentional-delay theory), and plaintiffs appealed. A separate class action was refiled in 2024~2025; certain claims were dismissed, others survived motion to dismiss. As of May 2026, no final non-appealable judgment exists. Separately, Revlimid US LOE began in 2022 and accelerated through 2025, leaving BMS revenue growth below market expectations and the stock trading roughly sideways from 2019 levels.",
    overallVerdict: "BMS avoided ~$6.4B via CVR structure but Revlimid LOE has compressed the deal's ROI; former Celgene shareholders perceive the CVR as effectively a structural trap",
    positives: [
      "[BMS] CVR all-or-nothing design avoided approximately $6.4B in contingent payments, the single largest financial gain on the deal",
      "[BMS] Acquired Liso-cel (Breyanzi) and Ide-cel (Abecma), the CAR-T cell therapy franchise, with combined sales crossing $1B in 2024",
      "[Former Celgene shareholders] Realized $50 cash + 1 BMS share immediately; depending on timing, partial monetization was achievable (CVR value = $0)",
      "[Legal precedent] BMS's first-instance victory (Sep 30, 2024) provides the most substantive interpretation to date of the [\"diligent efforts\"] standard in CVR disputes, with implications for future drafting and litigation",
    ],
    risks: [
      "[BMS] Revlimid US LOE accelerated from 2022, compressing growth, with BMS stock approximately flat from 2019 announce levels. Standalone deal ROI is below market average.",
      "[BMS] Appeals and additional class actions remain active; in a worst-case scenario, the ~$6.4B liability could be revived. As of May 2026, no final binding judgment.",
      "[CVR holders] $9 option went to zero, with NYSE BMY.RT trading $2.50 → $0.05 → delisted. Lasting reputational damage and former-shareholder distrust.",
      "[Industry-wide CVR market] The all-or-nothing trap, once well understood, prompted biotech sell-side advisors to demand partial-payment-per-milestone CVR structures, structurally tilting subsequent CVR drafting in favor of targets.",
    ],
    editorNote:
      "This transaction is likely to stand as the most expensive single-clause case study in modern US M&A history. The decision by BMS to insist on [\"all three milestones must be achieved for any payment\"] and the willingness of Celgene to accept that drafting tied $6.4B of option value to the joint-probability outcome of three independent regulatory events. A single 36-day FDA delay collapsed the entire option, a near-perfect demonstration of why correlation and timing assumptions are decisive in option pricing. The parallel litigation over the [\"diligent efforts\"] obligation has reset industry-wide perception of CVR efforts standards, M&A practitioners now treat the efforts clause as a substantive negotiation point rather than boilerplate. As of May 2026, appeals and successor class actions remain pending and the final outcome is not yet binding.",
  },

  tombstone: {
    acquirerInitials: "BMY",
    acquirerBg: "bg-violet-700",
    targetInitials: "CELG",
    targetBg: "bg-rose-600",
    acquirerName: "Bristol-Myers Squibb Company",
    targetName: "Celgene Corporation",
    dealTitle: "$74B Acquisition with $9 CVR Milestone Trap, How 36 Days Erased a $6.4B Option",
    dealSize: "$74B",
    dealSizeUSD: "approx. USD 74B (EV)",
    evEbitda: "approx. 11.0x (EV / FY2018 EBITDA)",
    closeDate: "Nov 20, 2019",
  },

  sources: [
    { id: 1, text: "Bristol-Myers Squibb press release, BMS to Acquire Celgene (Jan 3, 2019)", url: "https://www.bms.com/media/media-library/news-releases.html" },
    { id: 2, text: "SEC EDGAR, BMS Form S-4/A (containing CVR Agreement as exhibit, 2019)", url: "https://www.sec.gov/Archives/edgar/data/0000014272/000114036119003503/s002620x3_s4a.htm" },
    { id: 3, text: "SEC EDGAR, BMS Form 8-A12B (CVR NYSE listing registration, Nov 2019)", url: "https://www.sec.gov/Archives/edgar/data/0000014272/000114036119021574/form8a12b.htm" },
    { id: 4, text: "Reuters, Bristol-Myers to buy Celgene for about $74 billion (Jan 3, 2019)", url: "https://www.reuters.com/article/us-celgene-m-a-bristol-myers-idUSKCN1OX0TT" },
    { id: 5, text: "Pharmaphorum, BMS/Celgene merger payout evaporates as CVR deadline passes (Jan 2021)", url: "https://pharmaphorum.com/news/bms-celgene-merger-payout-evaporates-as-cvr-deadline-passes" },
    { id: 6, text: "FiercePharma, After delays and a CVR miss, Bristol's liso-cel wins its FDA nod (Feb 5, 2021)", url: "https://www.fiercepharma.com/pharma/after-delays-and-a-cvr-miss-bristol-s-liso-cel-wins-its-fda-nod" },
    { id: 7, text: "BioSpace, With Celgene CVR Dead, Investors Miss Out on $6.4 Billion Payday (Jan 2021)", url: "https://www.biospace.com/with-no-liso-cel-approval-by-dec-31-the-9-celgene-cvr-is-dead" },
    { id: 8, text: "BioPharma Dive, Bristol Myers sued over delayed approval of cancer cell therapy (2021)", url: "https://www.biopharmadive.com/news/bristol-myers-shareholder-lawsuit-car-t/601295/" },
    { id: 9, text: "Reuters via U.S. News, Bristol Myers Beats $6.4 Billion Lawsuit Over Delayed Cancer Drug (Sep 30, 2024)", url: "https://www.usnews.com/news/top-news/articles/2024-09-30/bristol-myers-beats-6-4-billion-lawsuit-over-delayed-cancer-drug" },
    { id: 10, text: "FTC, In the Matter of Bristol-Myers Squibb / Celgene Consent Order, Otezla divestiture (2019)", url: "https://www.ftc.gov/legal-library/browse/cases-proceedings/191-0061-bristol-myers-squibb-companycelgene-corporation" },
    { id: 11, text: "FDA, Breyanzi (lisocabtagene maraleucel) approval letter (Feb 5, 2021)", url: "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/breyanzi-lisocabtagene-maraleucel" },
    { id: 12, text: "CourtListener, UMB Bank, N.A. v. Bristol-Myers Squibb Company (SDNY 1:21-cv-04897)", url: "https://www.courtlistener.com/docket/59957422/umb-bank-na-v-bristol-myers-squibb-company/" },
  ],

  seo: {
    title: "BMS × Celgene $74B Acquisition and the $6.4B CVR Milestone Trap",
    description:
      "In January 2019 BMS announced a $74B acquisition of Celgene, paying $50 cash + 1 BMS share + 1 CVR per share. The CVR paid $9 only if all three of Ozanimod, Liso-cel, and Ide-cel received FDA approval by stated deadlines. When Liso-cel missed by 36 days, the all-or-nothing clause wiped out approximately $6.4B in contingent payments. Deep dive into CVR design, the diligent-efforts clause, and the UMB Bank v. BMS litigation.",
    keywords: [
      "BMS Celgene acquisition",
      "Bristol-Myers Squibb Celgene",
      "Contingent Value Right",
      "CVR milestone",
      "Liso-cel Breyanzi delay",
      "Ozanimod FDA approval",
      "Ide-cel Abecma",
      "all-or-nothing milestone",
      "Revlimid patent cliff",
      "Otezla Amgen divestiture",
      "diligent efforts clause",
      "UMB Bank BMS lawsuit",
      "reverse triangular merger",
      "pharma M&A",
    ],
  },

  concepts: [
    {
      term: "CVR (Contingent Value Right)",
      description: "An option-style security paying additional consideration to target shareholders upon achievement of post-close milestones (clinical, regulatory, or commercial). Used in biotech M&A to bridge buyer-seller pricing gaps on unproven pipeline assets. In this deal: $9 per CVR, up to ~$6.4B notional.",
    },
    {
      term: "Diligent Efforts Clause",
      description: "Contractual obligation that the acquirer use [diligent efforts] to achieve CVR milestones. Central to the UMB Bank v. BMS litigation, with plaintiffs arguing BMS deliberately delayed FDA submissions. The standard is somewhat more demanding than the more familiar \"commercially reasonable efforts\" formulation.",
    },
    {
      term: "All-or-Nothing Milestone Structure",
      description: "Asymmetric CVR design requiring achievement of multiple milestones for any payment to issue, a miss on any one wipes out the entire payout. The decisive structural choice in this deal; BMS's insistence on this drafting let a 36-day FDA delay erase the entire $6.4B obligation.",
    },
    {
      term: "Reverse Triangular Merger",
      description: "Standard US M&A structure in which the acquirer forms a wholly owned merger subsidiary that merges with and into the target, with the [target] surviving as a subsidiary of the acquirer. Preserves target-level contracts, licenses, and regulatory approvals. In this deal: Burgundy Merger Sub merged into Celgene, leaving Celgene as a BMS subsidiary.",
    },
    {
      term: "Otezla Divestiture",
      description: "FTC consent-order remedy requiring Celgene to divest Otezla (apremilast) to a third party to address psoriasis-market competition concerns. Celgene sold Otezla to Amgen for $13.4B in November 2019, immediately ahead of merger close, partially offsetting BMS's cash funding burden.",
    },
    {
      term: "Option Value",
      description: "Market value of the CVR at announce, estimated at $1~$3 using Black-Scholes-style models. The CVR briefly traded above $2.50 at NYSE listing in November 2019 before collapsing to $0.05 by late 2020 and expiring at $0 on December 31, 2020.",
    },
    {
      term: "Liso-cel (Breyanzi)",
      description: "CD19-directed CAR-T cell therapy for relapsed or refractory large B-cell lymphoma developed by Celgene/Juno. Missed the December 31, 2020 FDA deadline by [36 days], approved February 5, 2021. Manufacturing facility inspection delays were cited as the proximate cause. The single regulatory event that erased the entire $6.4B CVR notional.",
    },
    {
      term: "Revlimid Patent Cliff",
      description: "Revlimid (lenalidomide), Celgene's flagship multiple myeloma franchise, faced staggered US loss of exclusivity beginning in 2022 with generic entry continuing through 2026. The patent-cliff overhang was officially the rationale for the deal, but critics argued BMS was effectively swapping one patent cliff for another, more imminent one.",
    },
  ],

  faq: [
    {
      q: "What exactly is a Contingent Value Right (CVR), and why was one used in the BMS-Celgene deal?",
      a: "A CVR is an option-style security entitling target shareholders to additional consideration if defined post-closing milestones (clinical, regulatory, or commercial) are achieved. In biotech M&A, CVRs are the standard tool for bridging the pricing gap between [sellers wanting full credit for their unapproved pipeline] and [buyers refusing to pay for clinical risk]. In this deal, the CVR paid $9 if all three of Ozanimod, Liso-cel, and Ide-cel obtained FDA approval by stated deadlines, for a total notional of approximately $6.4B (~714M CVRs × $9). From BMS's perspective, the CVR was a downside-protected price-bridging tool, additional consideration only if the pipeline delivered.",
    },
    {
      q: "How did a single 36-day FDA delay let BMS save $6.4B?",
      a: "The CVR was structured as [all three milestones must be achieved for any $9 payment]. A miss on any one wiped out the entire obligation. Ozanimod and Ide-cel (Abecma) cleared their deadlines; but Liso-cel (Breyanzi), with a deadline of December 31, 2020, was approved on February 5, 2021, [36 days late]. That single miss triggered the all-or-nothing clause and erased the full ~$6.4B obligation (714M CVRs × $9). Under a more typical per-milestone allocation, BMS would have owed perhaps two-thirds of the $9, but the all-or-nothing drafting was decisive in BMS's favor.",
    },
    {
      q: "Former Celgene shareholders alleged BMS deliberately slowed Liso-cel, what happened in court?",
      a: "In 2021, trustee UMB Bank filed a $6.4B class-action suit in SDNY federal court (UMB Bank, N.A. v. Bristol-Myers Squibb Company, 1:21-cv-04897) alleging BMS breached the [\"diligent efforts\"] obligation by allowing a major BLA amendment that added at least three months of review time and by allowing manufacturing inspection delays. On September 30, 2024, SDNY ruled in BMS's favor on the merits, finding the plaintiffs had not established the intentional-delay theory. Plaintiffs appealed. Separately, additional class actions were filed in 2024~2025; some claims were dismissed, others survived motion to dismiss. As of May 2026, no final non-appealable judgment exists.",
    },
    {
      q: "Why did the FTC require divestiture of Otezla, and why was Amgen the buyer?",
      a: "The FTC found that the BMS-Celgene combination would substantially lessen competition in the [psoriasis and psoriatic arthritis treatment market]. BMS's Orencia (abatacept) and Celgene's Otezla (apremilast) had overlapping indications in immunology. The FTC required Otezla divestiture as a remedy under a Consent Order, and Celgene sold Otezla to Amgen for [$13.4B in cash] on November 21, 2019. Amgen, with an existing immunology franchise (Enbrel and others), was a natural strategic fit and one of the few buyers with both the strategic logic and the immediate-cash capacity for a $13.4B acquisition. The divestiture closed effectively concurrent with the BMS-Celgene merger (Nov 20, 2019).",
    },
    {
      q: "Did BMS end up making money on the deal? What happened with Revlimid LOE?",
      a: "Mixed scorecard. [Positive] All-or-nothing CVR design avoided ~$6.4B in contingent payments; Celgene's $6.74B FY2018 EBITDA was fully consolidated; Liso-cel and Ide-cel franchise has crossed $1B in 2024; BMS jumped into top-five global pharma by revenue. [Negative] Revlimid US LOE began in 2022 and accelerated through 2025, compressing growth and leaving BMS stock approximately flat from 2019 levels. Market consensus is roughly: [\"CVR savings were a major win, but standalone deal ROI is below market average.\"] BMS effectively traded its Eliquis patent-cliff exposure for Celgene's more imminent Revlimid patent-cliff exposure, a criticism that the industry has not fully retired.",
    },
    {
      q: "How has this deal changed CVR practice in biotech M&A?",
      a: "Two main industry-wide effects. First, [the all-or-nothing CVR structure has been broadly discredited]. After the BMS-Celgene outcome became well understood, biotech sell-side advisors have systematically demanded [per-milestone partial payment] structures so that each independently achieved milestone triggers its own pro-rata payment. Second, [the diligent-efforts standard has been substantively reweighted]. The UMB Bank v. BMS litigation demonstrated that the efforts clause is not boilerplate but a substantive provision capable of triggering multi-billion-dollar disputes. Subsequent CVR drafting now spells out specific conduct expected (and prohibited) under the efforts standard in far more detail than was previously standard.",
    },
  ],
};

export default deal;
