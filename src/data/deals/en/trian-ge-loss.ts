/**
 * Trian Fund Management × General Electric — Nelson Peltz's $2B+ Loss
 * 2015–2020: Trian's largest single position became its largest single loss
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ────────────────────────────────────────────────────
  slug: "trian-ge-loss",
  title: "Trian × General Electric — Nelson Peltz's $2B+ Loss and the 'Right Strategy, Wrong Timing' Activist Trade",
  subtitle: "Largest Single Position $2.5B · Three CEOs in Five Years · Dow Removal · Sold Just Before the Unlock",
  category: "activism",
  industry: "Industrial Conglomerate / Aviation / Power / Healthcare",
  country: "USA",
  announcedAt: "2015-10-05",
  closedAt: "2020-08-05",
  announcedDisplay: "October 2015",
  closedDisplay: "August 2020 (46% stake sold)",
  readingMinutes: 14,
  tags: [
    "Trian",
    "Nelson Peltz",
    "Ed Garden",
    "General Electric",
    "GE",
    "Jeff Immelt",
    "John Flannery",
    "Larry Culp",
    "Dow Jones removal",
    "activist loss",
    "conglomerate discount",
    "GE three-way split",
  ],
  excerpt:
    "In October 2015, Trian Fund Management disclosed it had bought roughly $2.5 billion of General Electric stock at an average price of $22–24 per share, the largest single position in the firm's history. An 80-page white paper, 'Transformation Underway,' laid out a path to $40–45 per share via GE Capital divestitures, capital returns, and cost cuts. What followed was six years of attrition: John Flannery's 50 percent dividend cut, GE's removal from the Dow after 110 years, Larry Culp's second dividend cut to a penny, and ultimately Trian's August 2020 sale of 46 percent of its stake at roughly $6. Under Culp, GE eventually executed the three-way split Trian had championed [Aerospace, HealthCare, Vernova], and by June 2026 the three companies were worth a combined ~$625B — built largely on the recovery Trian sold into.",

  // ── Logos ───────────────────────────────────────────────────
  acquirer: { initials: "TRI", bg: "bg-red-800", label: "Trian Fund Management" },
  target:   { initials: "GE",  bg: "bg-blue-800", label: "General Electric Company" },

  // ── Background ──────────────────────────────────────────────
  background: [
    "On October 5, 2015, Trian Fund Management — founded by Nelson Peltz and Ed Garden — disclosed it had built a roughly $2.5 billion position in General Electric, equivalent to about 1 percent of the company. The shares had been accumulated at an average price of $22–24, making the trade the largest single position in Trian's history. The disclosure was accompanied by an 80-page white paper titled 'Transformation Underway: A Blueprint for Value Creation at GE,' which set out four levers: further divestitures of GE Capital, roughly $20 billion of buybacks and a higher dividend, industrial margins of 18 percent by 2018, and $5 billion of cost reductions. Trian's price target was $40–45 by 2018. GE shares closed up about 4 percent on the day at roughly $26.",
    "Between 2015 and 2017, Jeff Immelt's GE appeared to be following much of Trian's playbook. GE Capital sold $275 billion of assets, Synchrony Financial was spun off in November 2015, and the appliances business was sold to Haier in 2016. At the same time, however, Immelt closed two deals that would later prove disastrous: the $10.6 billion Alstom power acquisition in late 2015 and the merger of GE Oil & Gas with Baker Hughes in 2017. By July 2016, GE shares had recovered to roughly $32 and Trian was sitting on an unrealized gain of around $700–800 million. The Alstom acquisition, however, had been struck at the very top of the gas-turbine cycle, and orders began collapsing in 2017.",
    "On June 12, 2017, Immelt announced he would step down after 16 years as CEO. John Flannery, the head of GE Healthcare, took over on August 1. On October 9, 2017, Trian and GE reached a cooperation agreement under which Ed Garden joined the board, giving the activist its first formal seat. Six weeks later, however, the cooperative tone collapsed. At GE's November 13, 2017 investor day, Flannery announced a [50 percent dividend cut] (from $0.24 to $0.12 per quarter), the second cut in GE's 117-year history, alongside plans to divest transportation, digital, and lighting. The stock fell to roughly $18 the same day. Trian's unrealized loss crossed $1 billion.",
    "2018 was the bleakest year in GE's modern history. On June 19, S&P Dow Jones Indices announced that GE would be [removed from the Dow Jones Industrial Average after 110 years], replaced by Walgreens Boots Alliance. GE had been a continuous member since 1907; its removal was widely read as the symbolic end of the American industrial century. On October 1, Flannery was dismissed after just 14 months. Larry Culp, the former Danaher CEO, became the first outsider ever to run GE. On October 30, Culp delivered the [second dividend cut], slashing the payout from $0.12 to a nominal $0.01. By December, GE traded in the $7 range, and Trian's paper loss approached $2 billion.",
    "Through 2019 and 2020, Culp focused on triage: a $15 billion top-up to long-term care insurance reserves, the $21.4 billion sale of GE Biopharma to Danaher (closed March 2020), and aggressive debt reduction. On August 5, 2020, multiple outlets reported that Trian had sold 46 percent of its position — roughly 27.5 million shares — at prices between $6.09 and $6.22. The single sale crystallized roughly $400 million of losses on its own. Ed Garden remained on the board, but the activist seat secured in 2017 had effectively become a seat to watch a recovery from. Almost as soon as Trian sold, Culp's three-way break-up plan went into motion: announced November 9, 2021, with GE HealthCare spun out in January 2023 and GE Vernova in April 2024. By June 2026, the combined market capitalization of the three successor companies stood at roughly $625 billion — about 2.8 times GE's market cap when Trian first bought in.",
  ],

  // ── Deal Summary ────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "Trian's largest single position ~$2.5B → 46% sold in 2020 at ~$170M proceeds → residual stake retained",
    acquirerName: "Trian Fund Management LP",
    targetName: "General Electric Company",
    announcedDisplay: "October 5, 2015 (13G/white paper)",
    closedDisplay: "August 5, 2020 (46% stake sale)",
    country: "USA",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "October 5, 2015: Trian discloses a ~$2.5B GE position (~1 percent), the largest single position in the firm's history, built at an average price of $22–24. The 80-page 'Transformation Underway' paper sets a $40–45 price target.",
    "Trian's five demands: further GE Capital divestitures, $20B of buybacks plus higher dividends, 18 percent industrial operating margin, $5B of cost cuts, and a halt to M&A.",
    "July 2016: GE recovers to ~$32; Trian's paper gain peaks around $700–800M. At the same time, Immelt closes the $10.6B Alstom acquisition at the top of the gas-turbine cycle.",
    "October 9, 2017: Trian and GE strike a cooperation agreement; Ed Garden joins the board.",
    "November 13, 2017: New CEO John Flannery cuts the dividend by [50 percent] ($0.24 to $0.12), the second cut in 117 years. The stock falls to ~$18; Trian crosses $1B in unrealized losses.",
    "June 19, 2018: GE is [removed from the Dow Jones Industrial Average after 110 years] — the symbolic end of the American industrial conglomerate era.",
    "October 2018: Flannery is dismissed; Larry Culp (ex-Danaher) becomes the first outside CEO. On October 30, Culp cuts the dividend again, from $0.12 to $0.01.",
    "August 5, 2020: Trian sells [46 percent (~27.5M shares)] of its GE position at $6.09–$6.22 — about -73 percent versus average cost. The single sale crystallizes ~$400M of losses.",
    "Structural irony: Culp announces the [three-way split] (Aerospace · HealthCare · Vernova) in November 2021, completing it in April 2024 — exactly the strategy Trian had championed. By June 2026, the three companies are worth roughly $625B combined.",
    "Estimated cumulative loss: $1–2B+ (realized plus residual under cost). Trian's largest-ever single position becomes its largest single loss, sitting alongside Ackman's Valeant as the canonical case study in activist conviction losses.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "By the mid-2010s the industrial conglomerate model was under structural pressure. The benefits of diversification (synergies, internal capital markets) had been overshadowed by the [conglomerate discount], and a wave of breakups followed: ITT (2011), Tyco (2012), Alcoa (2016), and DowDuPont (2019). Activist funds — Trian, Third Point, Elliott — built campaigns around closing that discount. GE, founded by Edison in 1892 and the longest-standing symbol of American industrial capitalism, was the ultimate target. Jack Welch's GE Capital expansion (1981–2001) and the 2008 crisis had already exposed how fragile the conglomerate-with-a-bank model could be. Trian's arrival in 2015 came at the peak of this thematic shift.",
    metrics: [
      { label: "GE market cap when Trian entered (Oct 2015)", value: "~$280B",         sub: "~$26 share × 9.1B shares" },
      { label: "GE share price (Jul 2016 peak)",                value: "~$32",          sub: "Trian paper gain +$700–800M" },
      { label: "GE share price (post-dividend cut, Nov 2017)",  value: "~$18",          sub: "First 50% cut in 117 years" },
      { label: "GE share price (post-Culp, Dec 2018)",          value: "~$7",           sub: "Second cut to $0.01" },
      { label: "Trian 46% sale price (Aug 2020)",                value: "$6.09–$6.22",   sub: "~-73% vs. cost" },
      { label: "Combined three-company market cap (Jun 2026)",  value: "~$625B",        sub: "Aerospace $345B + Vernova $250B + HC $30B" },
    ],
    subBody:
      "Culp formally announced the three-way split on November 9, 2021, and completed it with the GE Vernova spin in April 2024. The [select-and-focus] strategy Trian set out in 2015 was ultimately executed in full. But Trian had already sold half its stake in August 2020 and captured only part of the recovery run that ran from sub-$10 in 2020 to GE Aerospace at over $300 by 2026. The strategic case was vindicated; the activist did not fully share in the vindication.",
    players: [
      { name: "Nelson Peltz / Trian Fund Management", role: "Trian co-founder; led the GE campaign and the 'big mistake' acknowledgment in 2019" },
      { name: "Ed Garden / Trian",                     role: "Trian co-founder and CIO; joined GE board in October 2017; stepped down as Trian CIO in June 2023 but stayed on the GE Aerospace board" },
      { name: "Jeff Immelt / GE (2001–2017)",          role: "Welch's successor; shrank GE Capital, bought Alstom Power, ran GE when Trian entered" },
      { name: "John Flannery / GE (Aug 2017–Oct 2018)", role: "GE Healthcare veteran; CEO for 14 months; announced the first dividend cut and was in office at the Dow removal" },
      { name: "Larry Culp / GE (Oct 2018–)",            role: "First external CEO in GE history; former Danaher CEO; decided and executed the three-way split" },
      { name: "S&P Dow Jones Indices",                  role: "Index operator that removed GE from the DJIA in June 2018 after 110 years" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "General Electric Company",
    body: "General Electric was formed in 1892 from the merger of Edison General Electric and Thomson-Houston, and for most of the twentieth century it was the embodiment of American industrial capitalism. Under Jack Welch (1981–2001) it briefly held the world's largest market capitalization at $594 billion (2000), built in large part on GE Capital's expansion. The 2008 crisis exposed how reliant GE Capital had become on short-term funding; Warren Buffett's Berkshire Hathaway provided $3 billion of emergency preferred stock. Under Immelt (2001–2017), GE began shrinking GE Capital and returning to its industrial roots, but capital allocation decisions — most notably the Alstom power acquisition in 2015 for $10.6 billion — left the power business badly exposed when the gas-turbine cycle turned. At the time of Trian's entry, GE was a sprawling combination of seven industrial segments (Power, Renewable Energy, Aviation, Healthcare, Transportation, Lighting, Digital) plus GE Capital.",
    metrics: [
      { label: "Headquarters",                  value: "Boston, MA (from 2016)",         sub: "Previously Fairfield, CT" },
      { label: "Employees (FY2014)",            value: "~333,000",                       sub: "Including GE Capital" },
      { label: "Revenue (FY2014)",              value: "$148.6B",                        sub: "Industrial + GE Capital" },
      { label: "GE Capital assets (FY2014)",    value: "$500B+",                          sub: "Active runoff in progress" },
      { label: "Core segments",                 value: "Power · Aviation · Healthcare", sub: "Plus Renewable Energy, Oil & Gas, Lighting, Transportation" },
      { label: "Dow inclusion",                 value: "1907–2018 (111 years)",          sub: "Added Nov 7, 1907; removed Jun 26, 2018" },
    ],
    financials: [
      { year: "FY2010", revenue: 150211, cogs: 105000, grossProfit: 45211, sga: 18500, operatingIncome: 14000, ebitda: 23000 },
      { year: "FY2011", revenue: 147300, cogs: 102500, grossProfit: 44800, sga: 18000, operatingIncome: 16500, ebitda: 25000 },
      { year: "FY2012", revenue: 147359, cogs: 102000, grossProfit: 45359, sga: 17800, operatingIncome: 17400, ebitda: 26200 },
      { year: "FY2013", revenue: 146045, cogs: 101000, grossProfit: 45045, sga: 17500, operatingIncome: 17500, ebitda: 26500 },
      { year: "FY2014", revenue: 148589, cogs: 103500, grossProfit: 45089, sga: 17200, operatingIncome: 17600, ebitda: 26800 },
    ],
    financialsNote: "Unit: $M. Consolidated including GE Capital. Revenue had been flat for five years going into the Trian campaign, with EBITDA around $26.8B in FY2014. Source: GE 10-K filings (2010–2014).",
    financialsCurrency: "$",
    financialsUnit: "mn",
    revenueBreakdown: [
      { name: "Power & Water",          pct: 18, color: "bg-blue-700",    amt: "$26.8B" },
      { name: "Aviation",               pct: 16, color: "bg-sky-600",     amt: "$23.7B" },
      { name: "GE Capital",             pct: 30, color: "bg-rose-600",    amt: "$44.7B" },
      { name: "Healthcare",             pct: 13, color: "bg-teal-500",    amt: "$18.2B" },
      { name: "Oil & Gas",              pct: 13, color: "bg-amber-600",   amt: "$19.2B" },
      { name: "Renewables & other",     pct: 10, color: "bg-emerald-600", amt: "$15.9B" },
    ],
    revenueNote: "FY2014 revenue of $148.6B. GE Capital remained the single largest segment at 30 percent of revenue — precisely the segment Trian most wanted divested.",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "GE–Trian is the textbook example of [cooperative activism conducted without a proxy fight]. Trian filed a 13G rather than a 13D, publicly framed the campaign as constructive, and reached its board seat through a negotiated agreement rather than a vote. The weakness of the cooperative model became visible when CEOs turned over: with Immelt, Flannery, and Culp all running GE within five years, Ed Garden was repeatedly placed in the position of reviewing a new CEO's new plan, making it difficult to escalate pressure under the familiar 'new management is already addressing this' defense.",
    shareholders: [
      {
        id: "trian",
        label: "Trian Fund Management",
        sub: "Peltz and Garden — $2.5B position from Oct 2015; board seat Oct 2017",
        stake: "~1.0%",
        stakePct: 1.0,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "Largest passive holder",
        stake: "~7.1%",
        stakePct: 7.1,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "Passive",
        stake: "~6.2%",
        stakePct: 6.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "ssga",
        label: "State Street Global Advisors",
        sub: "Passive",
        stake: "~4.5%",
        stakePct: 4.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "berkshire",
        label: "Berkshire Hathaway",
        sub: "Held GE Capital preferred (2008); minimal common position",
        stake: "~0.3%",
        stakePct: 0.3,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "public",
        label: "Other shareholders",
        sub: "Retail and other institutions",
        stake: "~80.9%",
        stakePct: 80.9,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 18,
      independent: 16,
      affiliated: 2,
      note: "GE's board numbered 18 directors when Trian arrived in 2015 and was steadily slimmed thereafter. Garden joined in October 2017; under Culp the board was reduced to roughly a dozen seats. Garden remained on the GE Aerospace board even after stepping down as Trian's CIO in June 2023.",
    },
    issues: [
      {
        title: "Conglomerate discount and GE Capital weight",
        description: "Trian argued that GE Capital was suppressing the multiple on the industrial businesses. GE Capital still generated 30 percent of revenue in FY2014, and the market continued to apply a discount tied to the 2008 funding-model trauma.",
        severity: "critical",
      },
      {
        title: "Value destruction from the Alstom acquisition ($10.6B, 2015)",
        description: "Immelt's gas-turbine acquisition was closed right at the top of the cycle. Orders fell sharply from 2017, and the Power segment turned loss-making. The assets ultimately ended up inside [GE Vernova] and had to be restructured there.",
        severity: "critical",
      },
      {
        title: "50% dividend cut after 117 years (November 2017)",
        description: "Flannery's halving of the dividend from $0.24 to $0.12 per quarter was only the second cut in 117 years (the first having been during the 2009 crisis). Dividend-oriented institutions and pension funds sold mechanically, and the stock collapsed to the $18 range almost overnight.",
        severity: "critical",
      },
      {
        title: "Removal from the Dow Jones Industrial Average (June 2018)",
        description: "After 110 continuous years in the DJIA, GE was removed and replaced by Walgreens. The decision triggered forced selling by index-tracking ETFs, eroded the GE brand, and eliminated the option of passive re-inclusion in any future recovery.",
        severity: "high",
      },
      {
        title: "$15B long-term care insurance reserve shortfall (January 2018)",
        description: "A reserve top-up at GE Capital's legacy LTC book exposed liabilities that had not been visible to Trian when it built its position. The SEC opened an accounting probe, and the episode reframed GE Capital as something that still needed capital injected, not merely run off.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Further divestiture of GE Capital and return to industrial focus",
        result: "won",
        note: "Under Immelt, GE sold $275B of GE Capital assets, spun off Synchrony Financial, and divested Capital Aviation Services. The direction of travel was Trian's.",
      },
      {
        demand: "$20B buyback and higher dividend",
        result: "lost",
        note: "Some repurchases were made in 2016–2017, but the capital return story was reversed by the two dividend cuts (2017 and 2018).",
      },
      {
        demand: "Industrial operating margin of 18% by 2018",
        result: "lost",
        note: "The Alstom-driven Power collapse pushed industrial margins back into the low single digits by 2018, the opposite of the white paper's quantitative anchor.",
      },
      {
        demand: "Ed Garden on the GE board",
        result: "won",
        note: "October 9, 2017 cooperation agreement put Garden on the board without a proxy contest.",
      },
      {
        demand: "Break up the conglomerate (Trian's original suggestion)",
        result: "won",
        note: "Culp announced the three-way split on November 9, 2021; GE HealthCare spun in January 2023, GE Vernova in April 2024. Trian's strategic thesis was fully vindicated — after it had already sold half its stake.",
      },
      {
        demand: "Recover Trian's invested capital",
        result: "lost",
        note: "The 46 percent sale in August 2020 at $6.09–$6.22 crystallized roughly -73 percent on those shares versus the average cost of $22–24. The residual stake has recovered partly via GE Aerospace, but the original cost basis has not been recouped.",
      },
    ],
    stockImpact: {
      preCampaign: "~$26 (Oct 5, 2015)",
      peakDuringCampaign: "~$32 (Jul 2016)",
      postCampaign: "$6.09–$6.22 (Aug 2020, 46% sale)",
      note: "Trian's entry: average $22–24. Peak: ~$32 in July 2016 (+33%). Post-dividend cut: $18 in November 2017. Post-Culp: $7 in December 2018. 46% sale: $6 in August 2020. After the three-way split in 2024, GE Aerospace alone, on a split-adjusted basis, has approached and exceeded Trian's original cost — but only on the half it kept.",
    },
  },

  // ── Deal Structure ──────────────────────────────────────────
  dealStructure: {
    body: "There is no conventional deal structure here. The trade is an activist position decomposed by [timing, sizing, board access, and exit triggers]. Trian deployed its own capital to buy common stock, initially on a 13G basis, then escalated via the white paper, cooperation agreement, and board seat — without ever filing a 13D or running a proxy contest. The cooperative architecture worked when there was one CEO to engage with; it diluted Trian's leverage as GE cycled through three CEOs in five years.",
    preOwnership: {
      nodes: [
        { id: "trian",   label: "Trian Fund Management", sub: "$2.5B accumulated at ~$22–24 (~1% stake)", type: "acquirer" },
        { id: "ge",      label: "General Electric",       sub: "NYSE: GE · Dow member since 1907",         type: "target" },
        { id: "immelt",  label: "Jeff Immelt (CEO)",       sub: "2001–2017; CEO when Trian entered",        type: "entity" },
        { id: "capital", label: "GE Capital",              sub: "30% of FY2014 revenue; in runoff",         type: "entity" },
        { id: "public",  label: "Public shareholders",     sub: "Vanguard/BlackRock/SSGA ~18% combined",    type: "public" },
      ],
      edges: [
        { from: "trian",  to: "ge",      label: "~1% stake (13G → de facto 13D campaign)" },
        { from: "immelt", to: "ge",      label: "CEO" },
        { from: "ge",     to: "capital", label: "Wholly owned; active runoff" },
        { from: "public", to: "ge",      label: "Passive ~18% + other ~81%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "trian_exit", label: "Trian (partial exit)",   sub: "Aug 2020: 46% sold; residual retained",        type: "fund" },
        { id: "ge_aero",    label: "GE Aerospace",            sub: "Successor parent (NYSE: GE); ~$345B (Jun 2026)", type: "target" },
        { id: "ge_hc",      label: "GE HealthCare",           sub: "Spun Jan 2023; ~$30B (Jun 2026)",              type: "entity" },
        { id: "ge_vernova", label: "GE Vernova",              sub: "Spun Apr 2024; ~$250B (Jun 2026)",             type: "entity" },
        { id: "culp",       label: "Larry Culp (CEO)",        sub: "From Oct 2018; ex-Danaher; ran the split",     type: "entity" },
        { id: "garden",     label: "Ed Garden (director)",    sub: "Joined Oct 2017; stayed on GE Aerospace board after leaving Trian in 2023", type: "entity" },
      ],
      edges: [
        { from: "trian_exit", to: "ge_aero",    label: "Residual common stock" },
        { from: "culp",        to: "ge_aero",    label: "CEO" },
        { from: "garden",      to: "ge_aero",    label: "Continuing director" },
        { from: "ge_aero",     to: "ge_hc",     label: "Spun off Jan 2023" },
        { from: "ge_aero",     to: "ge_vernova", label: "Spun off Apr 2024" },
      ],
    },
    keyTerms: [
      { label: "Filing form",                value: "13G (Oct 2015), de facto 13D campaign",     accent: false },
      { label: "Stake / share count",        value: "~1.0% / ~98M shares",                       accent: true },
      { label: "Average purchase price",     value: "~$22–24/share",                             accent: false },
      { label: "Capital deployed",           value: "~$2.5B",                                    accent: true },
      { label: "Public document",            value: "80-page 'Transformation Underway' paper",   accent: false },
      { label: "Board seat",                 value: "Oct 9, 2017: Ed Garden joins GE board",     accent: false },
      { label: "Dividend trajectory",        value: "$0.24 → $0.12 (Nov 2017) → $0.01 (Oct 2018)", accent: true },
      { label: "Dow removal",                value: "Jun 19, 2018; out after 110 years",         accent: true },
      { label: "Partial sale",               value: "Aug 5, 2020: 46% (~27.5M shares) at $6.09–$6.22", accent: true },
      { label: "Break-up announced/closed",  value: "Nov 9, 2021 → Apr 2, 2024 (GE Vernova)",     accent: true },
      { label: "Estimated cumulative loss",  value: "~$1–2B+ (realized + residual below cost)",  accent: true },
    ],
  },

  // ── Advisors ────────────────────────────────────────────────
  advisors: {
    body: "Trian conducted its analysis in-house — Peltz, Garden, and Matt Peltz authored the white paper — and used Edelman for strategic communications. GE retained different advisor lines for different phases. Centerview Partners and JPMorgan advised on the 2017–2018 dividend and restructuring decisions, with Davis Polk & Wardwell on the legal side. Morgan Stanley and PJT Partners joined for Culp's 2021 break-up.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Trian (activist side)",
        initials: "TRI",
        bg: "bg-red-800",
        advisors: [
          {
            firm: "Trian internal research",
            role: "White paper · management negotiations",
            roleType: "other",
            note: "Nelson Peltz, Ed Garden, and Matt Peltz authored the 80-page 'Transformation Underway' paper. Trian did not retain an external financial advisor on the campaign.",
          },
          {
            firm: "Edelman",
            role: "Strategic communications · PR",
            roleType: "other",
            note: "Trian's longtime PR partner; advised on media positioning and institutional shareholder messaging around the white paper.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Legal counsel (board seat)",
            roleType: "legal",
            note: "Cooperation agreement and related SEC disclosures around Garden's October 2017 board appointment (per public reporting). Wachtell is Trian's habitual activist counsel.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "GE (defense side)",
        initials: "GE",
        bg: "bg-blue-800",
        advisors: [
          {
            firm: "Centerview Partners",
            role: "Financial advisor (restructuring · capital policy)",
            roleType: "financial",
            note: "Advised Flannery on the 2017–2018 restructuring and dividend cut; subsequently advised Culp on portfolio reviews.",
          },
          {
            firm: "JPMorgan",
            role: "Financial advisor (M&A · divestitures)",
            roleType: "financial",
            note: "Worked on the Synchrony spin, Capital Aviation Services sale, and the Baker Hughes merger.",
          },
          {
            firm: "Morgan Stanley",
            role: "Financial advisor (three-way split, 2021)",
            roleType: "financial",
            note: "Lead financial advisor on the November 2021 announcement of the three-way split and the structuring of the GE HealthCare and GE Vernova spins.",
          },
          {
            firm: "Davis Polk & Wardwell",
            role: "Legal counsel (restructuring · securities)",
            roleType: "legal",
            note: "GE's principal outside counsel; advised on the Trian cooperation agreement, dividend cut disclosures, post-Dow removal communications, and the spin Form 10 filings.",
          },
          {
            firm: "PJT Partners",
            role: "Financial advisor (insurance / LTC reserves)",
            roleType: "financial",
            note: "Strategic advisor on the January 2018 $15B reserve top-up (per public reporting).",
          },
        ],
      },
    ],
    disclaimer: "Advisor information is drawn from public reporting and financial databases; some Trian-side legal engagements have not been formally confirmed.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "The valuation question here is not an acquisition price but the gap between [Trian's white-paper price target and the actual stock trajectory]. The October 2015 paper laid out a path to $40–45 per share by 2018, anchored on industrial EBITDA at a ~14× multiple, $20B of buybacks, and 18 percent industrial margins. Almost the opposite happened: Alstom impairments, two dividend cuts, the Dow removal, and the COVID aviation shock dragged the shares to roughly $6 by Trian's August 2020 sale — about -85 percent versus the white-paper target. The three-way split has since pushed combined value to roughly 2.8× GE's market cap at Trian's entry, suggesting the strategy was right but the holding period required was longer than the activist could carry.",
    rows: [
      { item: "Trian average purchase price",                val: "~$22–24",         note: "October 2015 13G, ~$2.5B in total" },
      { item: "Stake / share count",                          val: "~1.0% / ~98M sh", note: "GE had ~9.1B shares outstanding" },
      { item: "Trian white-paper target price (2018E)",       val: "$40–45",          note: "EPS $2.20 × 18–20×",                accent: true },
      { item: "Peak share price (Jul 2016)",                   val: "~$32",            note: "Paper gain ~$700–800M, +33%",      accent: true },
      { item: "Post-dividend-cut price (Nov 2017)",            val: "~$18",            note: "First 50% cut; paper loss ~$500M" },
      { item: "Dow removal announcement (Jun 2018)",           val: "~$13",            note: "Removed after 110 years" },
      { item: "Post-Culp price (Oct 2018)",                    val: "~$8",             note: "Second cut to $0.01" },
      { item: "Trian 46% sale price (Aug 5, 2020)",            val: "$6.09–$6.22",     note: "~27.5M shares disposed in one move", accent: true },
      { item: "GE Aerospace price (Jun 2026)",                 val: "$300+",            note: "Split-adjusted, above Trian's cost" },
      { item: "Combined market cap of three companies (Jun 2026)", val: "~$625B",      note: "Aerospace $345B + Vernova $250B + HC $30B", accent: true },
      { item: "Trian estimated cumulative loss",               val: "~$1–2B+",         note: "2020 realized ~$400M + residual below cost (estimate range)", accent: true },
    ],
    disclaimer: "Trian has not disclosed an exact cumulative loss figure and estimates differ across sources (a -$700M paper loss reported in 2018; a ~$400M realized loss on the August 2020 sale; residual marks depending on the recovery in GE Aerospace and the spin shares). This table reflects a synthesis of 13G filings, market data, and Bloomberg/Washington Post coverage.",
  },

  // ── Rationale ───────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Trian made GE its largest-ever bet",
      initials: "TRI",
      bg: "bg-red-800",
      points: [
        "Closing the conglomerate discount — separating GE Capital from the industrials would, Trian argued, allow each business to be valued on its own multiple. Industrial EBITDA at ~14× generated the $40–45 target.",
        "Underappreciated industrial IP — GE Aviation, Healthcare, and Power were global number one or two franchises but were trapped inside a single conglomerate multiple. A sum-of-the-parts analysis pointed to a value well above the prevailing market cap.",
        "Cooperative engagement with Immelt — Immelt had already begun winding down GE Capital and welcomed Trian's involvement publicly on day one. Trian believed it could accelerate, not redirect, the existing strategy without a proxy fight.",
        "Activist track record — Trian had executed conglomerate-discount playbooks at P&G, Mondelez, Heinz, and BNY Mellon. GE was the most ambitious application of the playbook yet.",
        "Risks acknowledged but underweighted — Trian was aware of the Alstom cycle exposure, the long-term care reserves at GE Capital, and the accounting gray zones in Power. The white paper, however, treated them as execution issues rather than as risks capable of overwhelming the thesis.",
      ],
    },
    seller: {
      title: "Why GE failed to deliver the Trian blueprint",
      initials: "GE",
      bg: "bg-blue-800",
      points: [
        "Alstom Power value destruction ($10.6B, 2015) — closed at the top of the gas-turbine cycle. Orders collapsed in 2017 and the Power segment posted heavy losses for three years. The Alstom assets ultimately had to be restructured inside GE Vernova.",
        "Hidden GE Capital liabilities — the January 2018 $15B long-term care reserve top-up reframed GE Capital from a runoff project into an ongoing capital sink. The SEC opened an accounting probe and the discount on legacy insurance exposure widened.",
        "Two dividend cuts in 117 years — Flannery's 50 percent cut in November 2017 and Culp's $0.01 cut in October 2018 reset GE from a 'dividend-growth industrial' to a 'turnaround story,' triggering forced selling by dividend-oriented institutions and pension funds.",
        "Dow removal and passive outflows — being removed from the DJIA after 110 years triggered mechanical selling by index ETFs and removed any optionality on passive re-inclusion during a recovery.",
        "Three-way split delivered too late for Trian — Culp ultimately executed the strategy Trian had originally proposed, but the announcement came in November 2021, more than a year after Trian had already sold half its stake. The largest value-creation window (2021–2026) was captured only partially.",
      ],
    },
  },

  // ── Post-Deal Assessment ────────────────────────────────────
  postDealAssessment: {
    asOfDate: "June 2026",
    body: "Roughly ten years and eight months after Trian first disclosed its position, Larry Culp has executed the strategy Trian set out in 2015 almost exactly: GE HealthCare listed on Nasdaq in January 2023 (market cap ~$30B by June 2026), GE Vernova listed on NYSE in April 2024 (~$250B), and the surviving parent — renamed GE Aerospace — trades on NYSE with a market cap of roughly $345B. Combined, the three companies are worth about $625B, roughly 2.8 times GE's market capitalization when Trian entered. The white-paper case has been fully vindicated. Trian, however, sold 46 percent of its position in August 2020 at around $6 per share, crystallizing roughly $400M of losses on those shares. The residual stake (4.03M GE Aerospace shares at year-end 2024, plus the spin shares received in the breakup) has participated only partially in the recovery. Trian's largest-ever single position has become the textbook case of [strategy right, timing wrong].",
    overallVerdict: "Strategic vindication, financial failure — the opening chapter of Peltz's 'lost decade'",
    positives: [
      "The Trian white paper's diagnosis — conglomerate discount, GE Capital separation, three-way split — was fully implemented under Culp. The strategic-analysis capability of the fund was validated.",
      "Ed Garden remained on the board through the entire process and continued as a director of GE Aerospace even after stepping down as Trian's CIO in 2023, capturing part of the recovery directly.",
      "GE Aerospace, post-split, has emerged as a defining beneficiary of the global aviation recovery, with CFM and LEAP engine demand driving a ~$345B market cap by mid-2026. The residual Trian holding is approaching its original cost.",
      "The campaign demonstrated that cooperative activism — a 13G plus a public white paper plus a negotiated board seat — can reshape a $280B conglomerate without a proxy contest, contrasting with Peltz's later proxy-fight failure at Disney in 2024.",
    ],
    risks: [
      "Strategic vindication is not financial recovery. Trian sold the most valuable half of the recovery window. To a hedge-fund LP, 'we were right' is not a return.",
      "Cooperative activism shows its limits when management turns over. Through three CEOs in five years (Immelt → Flannery → Culp), Trian's pressure was repeatedly absorbed by the defense that 'new management is already addressing this.'",
      "The GE loss plus Peltz's 2024 Disney proxy defeat have become the basis for the 'Peltz's lost decade' narrative, weakening the signaling value of Trian campaigns at later targets such as Unilever (2022) and Solventum (2025).",
      "Together with Bill Ackman's Valeant loss ($4B+), Trian's GE position has become a canonical case of how conviction activism can be undone by time and exogenous shocks — adding to the LP-side pressure that activist funds face when fundraising or negotiating closed-end fund discounts.",
    ],
    editorNote:
      "The cruelest truth in activism is that strategy can be right and timing can still be wrong. Trian's 2015 diagnosis of GE — conglomerate discount, GE Capital separation, three-way split — proved correct. Larry Culp eventually executed almost exactly that plan. But between the white paper and the executed split, six years of Alstom impairments, hidden insurance liabilities, two dividend cuts, the Dow removal, and a pandemic shock to aviation accumulated. By the time Trian sold half its stake in August 2020, the recovery was just months away. Bill Ackman's Valeant loss is the case study for the limits of conviction trading; Trian's GE loss is the case study for the limits of cooperative activism on a long time horizon. Both end at the same conclusion: the activist's deepest adversary is not management, not regulators, and not short-sellers, but time itself.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "TRI",
    acquirerBg: "bg-red-800",
    targetInitials: "GE",
    targetBg: "bg-blue-800",
    acquirerName: "Trian Fund Management LP",
    targetName: "General Electric Company",
    dealTitle: "Trian × General Electric — Activism's Strategic Win, Financial Loss",
    dealSize: "~1% stake / $2.5B (Trian's largest single position)",
    dealSizeUSD: "$2.5B invested → ~$1–2B+ loss",
    evEbitda: "Entry ~10× → trough ~7× → recovery via three-way split (combined)",
    closeDate: "August 5, 2020 (46% sold); residual stake retained",
  },

  // ── Sources ─────────────────────────────────────────────────
  sources: [
    { id: 1,  text: "Trian Fund Management, 'Transformation Underway: A Blueprint for Value Creation at GE' (Oct 5, 2015) — 80-page white paper" },
    { id: 2,  text: "General Electric, Press Release — GE Comments On Investment By Trian (Oct 5, 2015)", url: "https://www.ge.com/news/press-releases/ge-comments-investment-trian" },
    { id: 3,  text: "General Electric, Press Release — GE Elects Ed Garden of Trian Partners To Board of Directors (Oct 9, 2017)", url: "https://www.ge.com/news/press-releases/ge-elects-ed-garden-trian-partners-board-directors" },
    { id: 4,  text: "Bloomberg, 'Down $700 Million, Nelson Peltz's GE Bet Goes From Bad to Worse' (Nov 16, 2018)", url: "https://www.bloomberg.com/news/articles/2018-11-16/down-700-million-nelson-peltz-s-ge-bet-goes-from-bad-to-worse" },
    { id: 5,  text: "S&P Dow Jones Indices, Press Release — Walgreens Boots Alliance Set to Join Dow Jones Industrial Average (Jun 19, 2018) — GE removed after 110 years" },
    { id: 6,  text: "CNBC, 'Nelson Peltz on General Electric: Trian made big mistake on GE stake' (Sep 19, 2019)", url: "https://www.cnbc.com/2019/09/19/nelson-peltz-on-general-electric-trian-made-big-mistake-on-ge-stake.html" },
    { id: 7,  text: "Washington Post, 'Nelson Peltz's Trian Trims Its GE Stake. Can You Blame It?' (Aug 6, 2020)", url: "https://www.washingtonpost.com/business/nelson-peltzs-trian-trims-its-ge-stake-can-you-blame-it/2020/08/06/8f448fcc-d83d-11ea-a788-2ce86ce81129_story.html" },
    { id: 8,  text: "Bloomberg Law, 'Peltz's Trian Dumps 46% of GE Stake After CEO Warns of Long Slog' (Aug 2020)", url: "https://news.bloomberglaw.com/esg/peltzs-trian-dumps-46-of-ge-stake-after-ceo-warns-of-long-slog" },
    { id: 9,  text: "GE, Press Release — GE Announces Plan to Form Three Independent Public Companies (Nov 9, 2021)" },
    { id: 10, text: "Macrotrends, GE Aerospace / GE Vernova / GE HealthCare market capitalization (as of June 2026)", url: "https://www.macrotrends.net/stocks/charts/GE/ge-aerospace/market-cap" },
    { id: 11, text: "Pershing Square Capital Management, Schedule 13D and exit reporting on Valeant Pharmaceuticals (2015–2017) — comparative case" },
    { id: 12, text: "Wikipedia, Trian Partners — firm history and campaign timeline", url: "https://en.wikipedia.org/wiki/Trian_Partners" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Trian's GE Loss — Nelson Peltz's $2B+ Activist Failure Explained",
    description:
      "Trian Fund Management put $2.5 billion into General Electric in 2015 and lost an estimated $1–2B+. Inside the 80-page white paper, the three-CEO carousel, the first 50% dividend cut in 117 years, the 110-year Dow removal, and the three-way split that vindicated Trian's strategy after it had already sold half.",
    keywords: [
      "Trian GE loss",
      "Nelson Peltz General Electric",
      "Ed Garden GE board",
      "GE removed from Dow Jones",
      "GE dividend cut 2017",
      "Larry Culp three-way split",
      "GE Aerospace Vernova HealthCare",
      "conglomerate discount activism",
      "activist investor failure",
      "Transformation Underway white paper",
      "cooperative activism 13G",
      "Valeant Ackman comparison",
    ],
  },

  // ── Concepts ────────────────────────────────────────────────
  concepts: [
    {
      term: "Activist White Paper",
      description: "A public document setting out an activist fund's diagnosis, prescription, and target price for a company. Trian's 'Transformation Underway' (80 pages, Oct 2015) is the textbook example, laying out GE Capital divestitures, capital returns, and cost cuts en route to a $40–45 share price. It is the principal weapon for pressuring management and institutions into negotiation without a proxy contest.",
    },
    {
      term: "Largest Single Position",
      description: "The biggest share of fund capital deployed in one name. Trian's $2.5B GE bet was the largest single position in its history, and it became the firm's largest single loss — a structural feature of conviction-style activism, as seen also in Bill Ackman's $3.2B Valeant position.",
    },
    {
      term: "Conglomerate Discount",
      description: "The phenomenon of diversified firms trading below the sum of their parts (SOTP), driven by capital-allocation inefficiency, information asymmetry, and managerial complexity. Closing this discount was the explicit motivation behind the 2010s breakups at ITT, Tyco, Alcoa, DowDuPont, and ultimately GE — and the starting point of Trian's white paper.",
    },
    {
      term: "Dividend Cut as Capital-Allocation Signal",
      description: "A dividend cut is not merely a capital return adjustment; it is a strong negative signal about management's view of forward earnings. GE has cut its dividend only three times in 117 years (2009, 2017, 2018). Flannery's 50 percent cut in November 2017 forced mechanical selling by dividend-oriented institutions and pension funds.",
    },
    {
      term: "Dow Jones Index Removal",
      description: "A change to the DJIA constituent list. GE had been a continuous member since November 7, 1907 and was removed on June 26, 2018 after 110 years, replaced by Walgreens. The decision triggered forced selling by DJIA-tracking ETFs, eroded the GE brand, and removed any option of passive re-inclusion during a future recovery.",
    },
    {
      term: "Right Strategy, Wrong Timing",
      description: "An activist case in which the diagnosis and prescription prove correct, but the time horizon required exceeds the patience of fund LPs and the tolerance of paper losses. Trian's GE position was vindicated nine years after entry by the three-way split, but Trian sold half its stake in year five. The pattern is the central variable in activist IRR.",
    },
    {
      term: "Exit Before the Unlock",
      description: "Selling out just before the value-unlocking event — typically a spin, sale, or completed restructuring — actually occurs. Trian sold 46 percent of its GE stake in August 2020; Culp announced the three-way split fifteen months later. 'Exit before the unlock' is one of the most expensive mistakes in activist investing.",
    },
    {
      term: "Board-Seat Activism",
      description: "Securing a director seat through cooperation rather than a proxy contest. Trian placed Ed Garden on the GE board in October 2017 via a negotiated agreement. The approach builds governance influence but is vulnerable to dilution when management changes hands repeatedly, with each new CEO able to claim that 'the new plan is already addressing the activist's concerns' — and, separately, it can constrain trading via insider blackouts, as Bill Ackman discovered at Valeant.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "How much did Trian actually lose on GE?",
      a: "Synthesizing public sources, Trian accumulated roughly 98 million shares (about 1 percent of GE) at an average price of $22–24 starting in October 2015, deploying around $2.5 billion. On August 5, 2020 it sold approximately 27.5 million shares — 46 percent of the position — at $6.09–$6.22, crystallizing about $400 million in losses on those shares. The residual stake (4.03 million GE Aerospace shares at year-end 2024, plus the spin shares received in the break-up) has recovered partly, but remains below the original cost basis. Estimates of Trian's cumulative loss range from $1 billion to over $2 billion. Bloomberg reported a roughly $700 million paper loss in November 2018, and the Washington Post in 2020 described the trade as 'a near-total waste of activist resources.'",
    },
    {
      q: "Why didn't Trian run a proxy fight?",
      a: "Trian's GE campaign was designed from the outset as [cooperative activism]. Immelt was already winding down GE Capital and had welcomed Trian's involvement on day one; the board seat for Ed Garden in October 2017 was negotiated, not contested. The weakness of the cooperative model became visible when CEOs began changing every two or three years — under Flannery and Culp, Trian found itself repeatedly reviewing 'new management's new plan' instead of escalating pressure. It is the structural opposite of Peltz's 2024 proxy fight at Disney, which went to a vote and lost.",
    },
    {
      q: "How much did GE's removal from the Dow contribute to Trian's loss?",
      a: "The Dow removal had both direct and indirect effects. Directly, DJIA-tracking ETFs and index funds were forced to sell, and GE was down roughly 3 percent on the announcement day in June 2018. Indirectly — and arguably more importantly — the [brand damage] was severe. GE had been in the Dow continuously since 1907, and the removal was widely read as the symbolic end of the American industrial era. It also eliminated any optionality on passive re-inclusion during a future recovery. S&P Dow Jones Indices noted explicitly that GE's shrinking weight no longer adequately represented the U.S. industrial sector.",
    },
    {
      q: "Wasn't the three-way split Trian's idea? Why did the trade still lose?",
      a: "Yes. Trian's 2015 white paper called for GE Capital divestiture, industrial focus, and SOTP value realization, and Culp's November 2021 announcement of the three-way split is the full implementation of that vision. But the gap between proposal and execution was six years, during which Alstom impairments, the $15 billion long-term-care reserve top-up, two dividend cuts, the Dow removal, and the COVID aviation shock all accumulated. Had Trian held its 2015 cost basis until the spins completed in 2024, it would likely have captured most of the recovery. The pressure of running marked-to-market losses across multiple LP reporting cycles forced the August 2020 sale instead. It is the canonical case of [strategy right, timing wrong].",
    },
    {
      q: "How does Trian's GE loss compare with Bill Ackman's Valeant loss?",
      a: "Both are cases in which an activist fund's largest single position became its largest single loss, but the structures are opposite. Valeant was a failure of the [company itself] — accounting issues, drug-pricing politics, and a flawed business model all detonated at once. GE was a failure of [time horizon] — the strategic case was correct, but the execution window outlasted the fund's tolerance. Ackman exited Valeant fully in March 2017 at $11 and the company never recovered. Trian sold half its GE position in August 2020 and the company [did] recover, through the three-way split — but Trian only participated in half of that recovery. Valeant is the case study for the limits of [conviction trading]; GE is the case study for the limits of [cooperative activism on a long time horizon]. From the LP's perspective, both lead to the same conclusion.",
    },
    {
      q: "What is the most important structural lesson?",
      a: "Four points. First, [strategic vindication is not financial recovery]: being right about the diagnosis does not compensate LPs for the loss. Second, [cooperative activism has a time horizon problem]: avoiding a proxy fight reduces short-term confrontation but extends the holding period and lets paper losses accumulate. Third, [CEO turnover dilutes activist pressure inversely]: through Immelt, Flannery, and Culp, Trian's leverage was repeatedly absorbed by the 'new CEO already studying this' defense. Fourth, [exit before the unlock is the most expensive activist mistake]: Culp's three-way split kicked into gear almost immediately after Trian's August 2020 sale, and the activist captured only half of the resulting recovery. Combined with Peltz's 2024 Disney proxy defeat, Trian's GE position is the clearest single illustration of the core dilemma in modern activism — cooperation buys time horizon, confrontation buys short-term impact, and neither cleanly delivers both.",
    },
  ],
};

export default deal;
