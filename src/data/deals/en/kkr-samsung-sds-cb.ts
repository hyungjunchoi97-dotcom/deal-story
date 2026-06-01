/**
 * KKR × Samsung SDS Private Convertible Bond ₩1.22T, April 2026
 * Largest single private CB issuance in Korea + classic 6-year lockup
 * with no refixing and no put option.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-samsung-sds-cb",
  title: "How KKR Wrote a ₩1.22T Check to Samsung SDS, A 6-Year Lockup with No Refixing and No Put",
  subtitle:
    "Largest single private CB in Korea · 180,000 KRW conversion price (+18% premium) · 2.5% coupon · 2032 maturity · KKR's Heads-I-Win-Tails-I-Don't-Lose structure",
  category: "ma",
  industry: "IT Services / AI / Capital Markets",
  country: "South Korea",
  announcedAt: "2026-04-15",
  closedAt: "2026-04-30",
  announcedDisplay: "Apr 15, 2026 (Board resolution)",
  closedDisplay: "Apr 30, 2026 (Funded)",
  readingMinutes: 14,
  tags: [
    "Convertible Bond",
    "Private CB",
    "KKR",
    "Samsung SDS",
    "Asia Fund V",
    "Startech AI",
    "AI",
    "Capital Markets",
    "Private Equity",
    "Plain-Vanilla Convertible",
  ],
  excerpt:
    "On April 15, 2026, Samsung SDS issued ₩1.22 trillion (~USD 820M) of unregistered, unsecured private convertible bonds to KKR, the largest single private CB issuance in Korean market history. The structure is the real story: 180,000 KRW conversion price (+18% conversion premium), 2.5% coupon, 6-year maturity, and [no refixing or put option], a plain-vanilla convertible that is almost never seen in Korea's private CB market, which typically tilts toward investor protection. The acquisition vehicle Startech AI L.P. was funded primarily by KKR's [Asia Fund V (Private Equity arm)], not its infrastructure fund. This is not a yield trade, KKR is pricing the [long-term partnership with Samsung Group itself].",

  acquirer: { initials: "KKR", bg: "bg-orange-600", label: "KKR (Asia Fund V · Startech AI L.P.)" },
  target: { initials: "SDS", bg: "bg-blue-700", label: "Samsung SDS" },

  background: [
    "Samsung SDS, founded in 1985 as a spinout from Samsung Electronics' IT department, is the IT services subsidiary of Korea's largest conglomerate. Its three core lines are systems integration / IT outsourcing (SI/ITO), supply chain logistics (SCL, global logistics), and cloud / AI (Samsung Cloud Platform, Brity AI). As of 1Q 2026, revenue runs at roughly ₩3.7T per quarter with ~₩240B in operating profit, and a market cap of around ₩13T. Samsung Electronics holds ~22.6%, while Chairman Lee Jae-yong's family holds ~17.0%, a textbook chaebol IT subsidiary governance structure.",
    "[A 10-year silence on equity capital, broken.] Samsung SDS had not issued a single new share since 2015. Stable conglomerate IT revenue let the company self-fund operations from cash flow. But in 2024~2025, intense capital competition in [generative AI, MLOps, data centers, and industrial AI] reset the bar, internal R&D plus selective M&A would require [war chest] capital far beyond what cash flow alone could provide. The company sat on roughly ₩6.4T of cash; an additional ₩1T+ would push the AI/M&A dry powder to ~₩7.6T at once. That is the trigger for this transaction.",
    "[Why a CB, not new shares.] A primary equity raise would have immediately diluted Samsung Electronics' 22.6% stake. Samsung SDS needed to raise ₩1T+ [while minimizing impact on group governance], and a CB delivers exactly that, conversion would be staggered over six years, and if it never converts, the instrument simply matures as a bond. ₩1.22T from the CB plus the existing ₩6.4T of cash equals an [AI/M&A war chest of ~₩7.6T], the company-side essence of this deal.",
    "[Why KKR's PE arm and not its infrastructure arm, the SK conflict.] KKR typically deploys its [Asia Pacific Infrastructure Fund] for capital-markets transactions like this. But KKR had previously taken a minority stake in SK Group's AI data center joint venture using its infrastructure fund, and SK had imposed a [\"no participation in similar businesses by other Korean conglomerates\"] non-compete clause. That clause blocked KKR's infra fund from this deal. As a result, KKR deployed its [Asia Fund V (PE arm)] capital as the primary source, through a newly formed vehicle [Startech AI L.P.]. The deal was funded entirely out of fund equity, [no acquisition financing, no syndication, no third-party LP capital], closing on ₩1.22T of dry powder alone.",
    "On April 15, 2026, the Samsung SDS board resolved to issue the 24th series of unregistered, unsecured private convertible bonds for ₩1.22T, with funding completed on April 30. The conversion period runs from April 30, 2027 through April 23, 2032. Fully converted, the bonds represent approximately [8.06%] of new shares outstanding. The deal marks the first time a foreign mega-PE firm has taken a direct position in the capital structure of a Samsung Group company.",
  ],

  dealSummary: {
    dealValueDisplay: "₩1.22 trillion (~USD 820M)",
    acquirerName: "KKR (Asia Fund V · Startech AI L.P.)",
    targetName: "Samsung SDS Co., Ltd., 24th series private unregistered unsecured CB",
    announcedDisplay: "Apr 15, 2026",
    closedDisplay: "Apr 30, 2026",
    country: "South Korea",
  },

  executiveSummary: [
    "[Largest single private CB in Korean market history] Samsung SDS issued ₩1.22T (~USD 820M) of private convertible bonds, with KKR as sole purchaser (board resolution Apr 15, 2026; funded Apr 30, 2026).",
    "[Plain-vanilla convertible structure] 180,000 KRW conversion price (+18% premium to spot), 6-year maturity (Apr 30, 2032), 2.5% coupon and yield-to-maturity.",
    "[Issuer-favorable terms KKR accepted] [No refixing] (downward adjustment of conversion price on share price declines) and [no put option] (early redemption right), both standard in Korean private CBs, both waived here. A clear signal that KKR is pricing the [long-term partnership], not yield.",
    "[KKR's PE arm took this, not its infrastructure arm] Acquisition vehicle Startech AI L.P. was funded primarily by [Asia Fund V (Private Equity)]. KKR's Asia Pacific Infrastructure Fund was blocked from participating by a [\"no similar-business participation\"] non-compete clause that SK Group had imposed on its prior AI data center JV with KKR.",
    "[Zero outside money] No acquisition financing, no syndication, no third-party LP. Closed with ₩1.22T of fund dry powder alone.",
    "[Samsung SDS's intent] Avoid diluting Samsung Electronics' 22.6% stake while raising ₩1.22T. Combined with existing ₩6.4T cash, this creates an [AI/M&A war chest of ~₩7.6T], ending a 10-year silence on equity capital.",
    "[KKR's heads-I-win-tails-I-don't-lose structure] No short-term liquidity exit during 6-year lockup. If shares clear 180,000 KRW, KKR converts to ~8% equity at a gain. If not, KKR collects 2.5% coupon plus yield-to-maturity in bond form. Downside is protected; upside is open.",
  ],

  industryOverview: {
    body: "Korea's IT services industry entered 2026 with four simultaneous capital races: [generative AI, industrial AI, MLOps, data centers]. Samsung SDS, LG CNS, SK C&C, Lotte Innovate, and Posco DX, the chaebol IT subsidiaries, are all scrambling to secure R&D plus M&A funding for the AI transition. Globally, Accenture, IBM, Cognizant, and Capgemini are running the same transition on their own balance sheets. What distinguishes Korea's chaebol IT subsidiaries is [group governance protection], new share issuances dilute parent shareholdings, so structured instruments (CBs, EBs, hybrid capital) are increasingly preferred over straight equity.",
    metrics: [
      { label: "Samsung SDS market cap (Apr 2026)",   value: "~₩13T",       sub: "At deal announcement" },
      { label: "Samsung SDS FY2025 revenue",          value: "~₩14.6T",     sub: "+8.2% YoY" },
      { label: "Samsung SDS FY2025 operating profit",  value: "~₩940B",      sub: "OPM 6.4%" },
      { label: "Samsung SDS cash & equivalents",       value: "~₩6.4T",      sub: "1Q 2026 estimated" },
    ],
    subBody:
      "It is extremely rare in Korean PE history for a foreign asset manager to take a direct position in the capital structure of a chaebol IT subsidiary. These subsidiaries typically rely on intra-group cash pooling or domestic-institutional hybrid securities. This deal marks the first time a foreign mega-PE firm has declared, [\"in six years we intend to be a potential 8% shareholder of a Korean chaebol IT company.\"]",
    players: [
      { name: "KKR",                role: "Global mega-PE, sole purchaser (Asia Fund V · Startech AI L.P.)" },
      { name: "Samsung SDS",        role: "Issuer, Samsung Group IT services subsidiary" },
      { name: "Samsung Electronics", role: "Samsung SDS largest shareholder (~22.6%), unaffected during 6-year lockup" },
      { name: "Chairman Lee family", role: "~17.0% of Samsung SDS, effective Samsung Group governance apex" },
      { name: "SK Group",           role: "Separate AI data center JV with KKR, the constraint that blocked KKR's infrastructure fund from this deal" },
    ],
  },

  companyOverview: {
    targetName: "Samsung SDS Co., Ltd.",
    body: "Samsung SDS was founded in May 1985 as Korea's first systems integration company, spun out of Samsung Electronics' internal IT department. Listed on the KOSPI in November 2014. Three core business lines: [① SI/ITO, enterprise IT build and operations], [② SCL, supply chain logistics, global freight], [③ Cloud / AI, Samsung Cloud Platform, Brity AI]. The company runs Samsung Group's global IT operations as the anchor customer while gradually reducing intragroup dependency and expanding external revenue. As of 2025, ~25,000 employees across 30+ entities in 14 countries.",
    metrics: [
      { label: "Founded",                 value: "1985",          sub: "Spinout from Samsung Electronics" },
      { label: "Listed",                  value: "Nov 14, 2014",   sub: "KOSPI, ticker 018260" },
      { label: "FY2025 revenue",          value: "~₩14.6T",        sub: "SI 35% / SCL 50% / Cloud 15%" },
      { label: "FY2025 operating profit",  value: "~₩940B",         sub: "OPM 6.4%" },
    ],
    financials: [
      { year: "FY2021", revenue: 137000, cogs: 121000, grossProfit: 16000, sga: 7000, operatingIncome: 9000,  ebitda: 11000 },
      { year: "FY2022", revenue: 175000, cogs: 156000, grossProfit: 19000, sga: 8500, operatingIncome: 10500, ebitda: 13000 },
      { year: "FY2023", revenue: 132000, cogs: 116000, grossProfit: 16000, sga: 7500, operatingIncome: 8500,  ebitda: 11000 },
      { year: "FY2024", revenue: 135000, cogs: 118500, grossProfit: 16500, sga: 7800, operatingIncome: 8700,  ebitda: 11300 },
      { year: "FY2025", revenue: 146000, cogs: 127000, grossProfit: 19000, sga: 9600, operatingIncome: 9400,  ebitda: 12200 },
    ],
    financialsNote: "Unit: KRW 100M | K-IFRS consolidated | Source: Samsung SDS annual reports (FY2025 preliminary and estimated)",
    financialsCurrency: "KRW",
    financialsUnit: "100M KRW",
  },

  dealStructure: {
    body: "This deal is structured around [four negatives]: no new shares, no treasury share sale, no asset divestiture, no acquisition financing. Samsung SDS issued ₩1.22T of unregistered, unsecured private convertible bonds in a single tranche, sold entirely to KKR. KKR holds the bonds until either (a) conversion between Apr 30, 2027 and Apr 23, 2032 or (b) maturity redemption on Apr 30, 2032. Both the bonds themselves and the shares issued upon conversion are [locked up for 6 years]. KKR funded the purchase entirely from [Asia Fund V (PE arm)] equity, no acquisition financing was used.",
    preOwnership: {
      nodes: [
        { id: "se_pre",     label: "Samsung Electronics",        sub: "~22.6%",          type: "acquirer" },
        { id: "lee_pre",    label: "Chairman Lee family",         sub: "~17.0%",          type: "entity" },
        { id: "sds",        label: "Samsung SDS",                 sub: "Korea's leading IT services", type: "target" },
        { id: "free_pre",   label: "Free float / others",         sub: "~60.4%",          type: "public" },
      ],
      edges: [
        { from: "se_pre",   to: "sds", label: "22.6% (largest holder)" },
        { from: "lee_pre",  to: "sds", label: "17.0% (founding family)" },
        { from: "free_pre", to: "sds", label: "60.4% (free float)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "se_post",    label: "Samsung Electronics",        sub: "~22.6% (unchanged)",            type: "acquirer" },
        { id: "lee_post",   label: "Chairman Lee family",         sub: "~17.0% (unchanged)",            type: "entity" },
        { id: "kkr",        label: "KKR",                        sub: "Potential 8.06% (after 6Y lockup)", type: "fund" },
        { id: "sds_post",   label: "Samsung SDS",                 sub: "AI/M&A war chest ~₩7.6T",        type: "target" },
        { id: "free_post",  label: "Free float / others",         sub: "~60.4%",                        type: "public" },
      ],
      edges: [
        { from: "se_post",   to: "sds_post", label: "22.6%" },
        { from: "lee_post",  to: "sds_post", label: "17.0%" },
        { from: "kkr",       to: "sds_post", label: "CB ₩1.22T (potential 8.06%, locked)" },
        { from: "free_post", to: "sds_post", label: "60.4%" },
      ],
    },
    keyTerms: [
      { label: "Form",                value: "24th series unregistered unsecured private CB" },
      { label: "Principal amount",     value: "₩1.22T (~USD 820M)",                accent: true },
      { label: "Conversion price",     value: "180,000 KRW / share",               accent: true },
      { label: "Conversion premium",   value: "~+18% vs. spot at board date" },
      { label: "Coupon / YTM",         value: "2.5% / 2.5%" },
      { label: "Maturity",             value: "Apr 30, 2032 (6 years)" },
      { label: "Conversion period",    value: "Apr 30, 2027 ~ Apr 23, 2032" },
      { label: "Refixing clause",      value: "None",                              accent: true },
      { label: "Put option",           value: "None",                              accent: true },
      { label: "Transfer restriction", value: "Both CB and converted shares, 6Y lockup" },
      { label: "Stake on full conversion", value: "~8.06% (newly issued basis)" },
      { label: "Acquisition vehicle",  value: "Startech AI L.P. (KKR Asia Fund V primary)" },
      { label: "Acquisition financing", value: "None (pure fund equity)" },
    ],
  },

  advisors: {
    body: "Because this was a single-tranche private CB purchase rather than a typical M&A transaction, the advisor lineup differs from standard precedents. Each side's in-house capital markets teams led negotiations, with each side using its preferred Korean law firm. Public disclosure of advisor mandates is limited.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR (Purchaser)",
        initials: "KKR",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "KKR Asia Capital Markets / in-house",
            role: "Financial Advisor (in-house)",
            roleType: "financial",
            note: "CB structuring, pricing, and conversion terms led in-house",
          },
          {
            firm: "Kim & Chang (market observation)",
            role: "Legal Advisor",
            roleType: "legal",
            note: "FX, securities regulation, and tax advisory (official confirmation limited)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Samsung SDS (Issuer)",
        initials: "SDS",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Samsung SDS IR / Treasury",
            role: "Financial Advisor (in-house)",
            roleType: "financial",
            note: "Issuance structure, conversion terms, and lockup negotiations led in-house",
          },
          {
            firm: "(Undisclosed, market observation: major Korean law firm)",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Disclosure and capital markets law advisory (official confirmation limited)",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public reports and market observation; some assignments are unconfirmed.",
  },

  valuation: {
    body: "The key valuation variables here are the [180,000 KRW conversion price] and the [+18% conversion premium] vs. the prior close (~153,000 KRW at the board resolution date). The instrument is a six-year option for KKR. If Samsung SDS shares clear 180,000 KRW any time before Apr 23, 2032, KKR can convert into ~8.06% of the company at an immediate gain. If they never clear that level, KKR collects 2.5% coupon plus yield-to-maturity in bond form. This asymmetric payoff is why the market describes the structure as [heads I win, tails I don't lose].",
    rows: [
      { item: "Prior close (Apr 14, 2026 estimated)",     val: "~₩153,000",       note: "Day before board resolution" },
      { item: "Conversion price",                          val: "₩180,000",        note: "+18% conversion premium", accent: true },
      { item: "Coupon · YTM",                              val: "2.5% / 2.5%",      note: "Simple interest" },
      { item: "Maturity",                                  val: "Apr 30, 2032 (6Y)", note: "Bond redemption if not converted" },
      { item: "Conversion period",                         val: "Apr 30, 2027 ~ Apr 23, 2032", note: "From Year 1 anniversary" },
      { item: "Transfer restriction",                      val: "6-year lockup",    note: "On both CB and converted shares" },
      { item: "Stake upon full conversion",                val: "~8.06%",          note: "Newly issued shares basis" },
      { item: "Principal amount",                          val: "₩1.22T",           note: "~USD 820M",                     accent: true },
      { item: "Samsung SDS post-deal AI/M&A war chest",    val: "~₩7.6T",           note: "Existing ₩6.4T + ₩1.22T",        accent: true },
    ],
    disclaimer: "Note: Price figures are based on public filings and press reports; some point-in-time prices are estimated.",
  },

  rationale: {
    buyer: {
      title: "KKR, Why Samsung SDS, and Why Did the PE Arm Take This",
      initials: "KKR",
      bg: "bg-orange-600",
      points: [
        "[Pricing the Samsung Group partnership, not yield] This is not a short-term bet on Samsung SDS stock. It is positioning KKR as a six-year capital partner inside Samsung Group's IT and AI subsidiary. Waiving refixing and put, a plain-vanilla convertible, is the explicit signal that KKR is pricing partnership, not bond yield.",
        "[Heads-I-Win-Tails-I-Don't-Lose structure] Six-year lockup means no short-term exit, but downside is protected by the 2.5% coupon and YTM. Upside is open via 8% potential equity at conversion. Asymmetric payoff geometry.",
        "[Asia Fund V's Korean mega-deal cadence] KKR Asia Fund V has been deploying serially into Korean situations, Korea Zinc round-2 dynamics, E-Mart, Samsung SDS, signaling expanded PE-arm exposure to Korean IT/AI.",
        "[The infrastructure-fund block] SK Group's \"no similar businesses\" non-compete on the prior data center JV blocked KKR's infrastructure fund from this transaction. The PE arm stepped in by default, an interesting illustration of internal fund-conflict dynamics at a global mega-PE.",
        "[Zero-outside-money execution] No acquisition financing, no syndication, no co-invest LP capital. Closed entirely with PE-arm dry powder, a signal of KKR's deployment capacity at scale.",
      ],
    },
    seller: {
      title: "Samsung SDS, Why a CB, and Why KKR",
      initials: "SDS",
      bg: "bg-blue-700",
      points: [
        "[Parent-stake protection] A primary equity issuance would have immediately diluted Samsung Electronics' 22.6% stake. A CB defers conversion across six years or matures as a bond, zero immediate impact on group governance. Chairman Lee Jae-yong's family 17% stake is similarly protected.",
        "[Ending a 10-year capital silence to build an AI war chest] No new share issuance since 2015. Self-funded operations from cash flow. AI/M&A competition forced the issue, existing ₩6.4T cash plus ₩1.22T from this deal equals an [~₩7.6T AI/M&A war chest], the core purpose of the transaction.",
        "[Plain-vanilla convertible, issuer-favorable terms] Korean private CBs almost always include refixing (downward adjustment of conversion price on stock weakness), which is a burden on issuers. KKR's acceptance of [no refixing] is exceptionally issuer-favorable. The 6-year lockup also denies KKR any short-term selling pressure.",
        "[Global PE partner introduction] A foreign mega-PE locked in for six years with a potential 8% stake means Samsung SDS gains exposure to [KKR's global portfolio company network], AI/M&A target sourcing, overseas expansion co-investment, and partnership opportunities.",
        "[2.5% coupon, low-cost capital] Coupon well below average Korean corporate bond yields. Minimizes ongoing interest burden while securing ₩1.22T.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The transaction closed on Apr 30, 2026. The six-year lockup means there is no short-term variability, and the true assessment of this deal lands at the [Apr 30, 2027 conversion eligibility date] and the [Apr 30, 2032 maturity]. The initial market reaction has settled into the consensus view that this is \"highly issuer-favorable for Samsung SDS, with KKR pricing long-term partnership value over yield.\" As the first direct foreign mega-PE position in a Samsung Group company's capital structure, the deal has prompted speculation about similar transactions at LG CNS, SK C&C, and other chaebol IT subsidiaries.",
    overallVerdict: "Close to a win-win for both issuer and purchaser, but final assessment crystallizes in six years",
    positives: [
      "[Samsung SDS] Secured ₩1.22T without diluting the parent's stake. Total AI/M&A war chest now ~₩7.6T, the strategic turning point after a 10-year capital silence",
      "[KKR] 2.5% coupon + YTM + potential 8% equity upside + six-year exposure to Samsung Group network, downside-protected, upside-open asymmetric structure",
      "[Korean capital markets] First direct foreign mega-PE capital position inside a Korean chaebol IT subsidiary, likely template for future similar transactions",
      "[Plain-vanilla convertible renaissance] Demonstrates that Korean private CB market can move away from refixing toward global-standard convertible structures",
    ],
    risks: [
      "[KKR] No short-term exit or hedge during the 6-year lockup. If Samsung SDS shares fail to clear 180,000 KRW even once before 2032, KKR collects only the 2.5% coupon + YTM, potentially below mega-PE IRR expectations",
      "[Samsung SDS] Upon conversion in six years, Samsung Electronics' 22.6% stake would dilute to ~20.8%. KKR could exert influence as a potential 8% shareholder from 2027 onward",
      "[Intra-KKR fund conflicts] The SK data center JV (infra fund) and this Samsung SDS deal (PE fund) could create future business conflicts. Limits of internal fund-by-fund separation",
      "[Group-governance signal] Samsung Group's openness to foreign-PE capital sets a market expectation that may make issuer-favorable terms harder to obtain in subsequent deals",
    ],
    editorNote:
      "The real significance of this deal is not the \"largest single private CB in Korea\" headline number, but [the first time a foreign mega-PE firm has declared, in writing, that it intends to be a potential 8% shareholder of a Samsung Group company in six years]. KKR's acceptance of a plain-vanilla convertible structure, no refixing, no put, is not a concession but a signal: [\"we are pricing the long-term partnership possibility itself, not bond yield.\"] Likely to be cited as a template transaction in Korean PE and capital markets going forward., Reviewed as of May 2026.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-orange-600",
    targetInitials: "SDS",
    targetBg: "bg-blue-700",
    acquirerName: "KKR (Asia Fund V · Startech AI L.P.)",
    targetName: "Samsung SDS Co., Ltd.",
    dealTitle: "Largest Single Private Convertible Bond in Korea, Six-Year Lockup with No Refixing and No Put",
    dealSize: "₩1.22 trillion",
    dealSizeUSD: "~USD 820M",
    evEbitda: "N/A (Convertible Bond)",
    closeDate: "Apr 30, 2026",
  },

  sources: [
    { id: 1, text: "Samsung SDS official press release, KKR strategic partnership announcement (Apr 15, 2026)", url: "https://www.samsungsds.com/kr/news/kkr-260415.html" },
    { id: 2, text: "FSS DART, Samsung SDS 24th series unregistered unsecured private CB issuance disclosure (Apr 15, 2026)", url: "https://dart.fss.or.kr" },
    { id: 3, text: "Seoul Economic Daily Signal, KKR acquires Samsung SDS CB ₩1.22T (Apr 2026)", url: "https://www.sedaily.com/article/20032718" },
    { id: 4, text: "Investchosun, Why KKR's PE arm, not infrastructure, led the Samsung SDS investment (Apr 16, 2026)", url: "https://www.investchosun.com/site/data/html_dir/2026/04/16/2026041680034.html" },
    { id: 5, text: "topdaily, KKR holds the cards in Samsung SDS ₩1T+ CB issuance (Apr 2026)", url: "https://www.topdaily.kr/articles/109768" },
    { id: 6, text: "Korea Economic Daily, Samsung SDS, ending a 10-year investment silence, partners with KKR on AI (Apr 15, 2026)", url: "https://www.hankyung.com/article/2026041534891" },
    { id: 7, text: "Herald Business, Samsung SDS-KKR ₩1.2T CB issuance secures ₩7.6T AI/M&A war chest (Apr 2026)", url: "https://biz.heraldcorp.com/article/10717455" },
    { id: 8, text: "Datatooza, Samsung SDS ₩1.2T capital injection, 180,000 KRW conversion + 6-year lockup (Apr 15, 2026)", url: "https://www.datatooza.com/article/20260415084054991152ef34d07a_80" },
    { id: 9, text: "Credit News Korea, The quiet positioning behind the Samsung SDS-KKR deal", url: "https://www.creditnews.kr/news/articleView.html?idxno=2723" },
  ],

  seo: {
    title: "KKR × Samsung SDS ₩1.22T Convertible Bond, Six-Year Lockup, No Refixing, No Put",
    description:
      "April 2026: KKR purchases Samsung SDS private convertible bonds for ₩1.22 trillion, the largest single private CB issuance in Korean market history. 180,000 KRW conversion price, +18% conversion premium, 2.5% coupon, 6-year maturity. Plain-vanilla convertible structure with no refixing and no put option. KKR's Asia Fund V funded the entire deal without acquisition financing, syndication, or third-party LP capital. A template transaction for foreign mega-PE entering Korean conglomerate capital structures.",
    keywords: [
      "KKR Samsung SDS",
      "Samsung SDS convertible bond",
      "Samsung SDS CB",
      "KKR Asia Fund V",
      "Startech AI L.P.",
      "plain-vanilla convertible",
      "Korean private CB",
      "Samsung SDS AI war chest",
      "foreign PE Korea",
      "Korean capital markets KKR",
    ],
  },

  concepts: [
    {
      term: "Convertible Bond (CB)",
      description: "A hybrid security where an issuer raises capital as debt with the holder's option to convert into shares after a defined period. Issuers get capital without immediate share issuance; investors get bond protection with equity upside.",
    },
    {
      term: "Refixing Clause",
      description: "A provision that automatically lowers the conversion price if the share price falls below a threshold, partially compensating the investor for downside. Standard in Korean private CBs and burdensome for issuers. [Absent here], unusual issuer-favorable structure.",
    },
    {
      term: "Put Option",
      description: "An investor's right to demand early redemption of the bond before maturity. Common in Korean private CBs. [Absent here], KKR has no early-exit mechanism during the 6-year lockup.",
    },
    {
      term: "Conversion Premium",
      description: "The percentage by which the CB conversion price exceeds the share price at issuance. This deal: +18%, higher than the Korean private CB average (5~10%), again favoring the issuer. The investor implicitly bets on share-price appreciation.",
    },
    {
      term: "Lockup",
      description: "A restriction on transferring or selling the security for a defined period. This deal: 6-year lockup on both the CB and any converted shares, the investor cannot realize gains via short-term sale or hedging. KKR is pricing long-term partnership, not short-term trading.",
    },
    {
      term: "Asia Fund V (KKR PE arm, fifth Asia fund)",
      description: "KKR's Asia-focused private equity fund, the primary capital source behind Startech AI L.P. The core fund deploying KKR's PE-arm capital in major transactions across Korea, Japan, China, and Southeast Asia.",
    },
    {
      term: "Heads-I-Win-Tails-I-Don't-Lose",
      description: "An asymmetric payoff structure where investor gains on upside (equity conversion) but is protected on downside (bond redemption). Market shorthand for the KKR side of this transaction.",
    },
    {
      term: "Zero-Outside-Money PE Deal",
      description: "A transaction closed entirely with fund equity, no acquisition financing (LBO debt), no syndication, no third-party LP capital raise. This deal closed on KKR Asia Fund V dry powder alone, a signal of deployment capacity at scale.",
    },
  ],

  faq: [
    {
      q: "Why did Samsung SDS choose a convertible bond instead of issuing new shares?",
      a: "A primary equity issuance would have immediately diluted Samsung Electronics' 22.6% stake. A CB defers conversion over six years (or simply matures as a bond if never converted), zero immediate impact on group governance. Samsung SDS needed to [protect parent stake AND raise ₩1.22T at the same time], and a CB delivered exactly that. Combined with the existing ₩6.4T of cash, the deal builds an [AI/M&A war chest of ~₩7.6T].",
    },
    {
      q: "Why is KKR's waiver of refixing and put so unusual?",
      a: "In Korean private CB markets, refixing (downward adjustment of conversion price on share weakness) and put options (early redemption rights) are nearly standard investor protections. Both are burdens on the issuer. KKR waiving both is a clear signal that this is not a yield trade, [\"we are pricing the long-term partnership with Samsung Group itself, not a bond return.\"] It is exceptionally rare for a global mega-PE firm to accept issuer-favorable terms of this magnitude in Korean capital markets.",
    },
    {
      q: "Why did KKR's PE arm, Asia Fund V, take this deal instead of the infrastructure fund?",
      a: "In 2024, KKR took a minority stake in SK Group's AI data center JV using its [Asia Pacific Infrastructure Fund]. As part of that deal, SK imposed a [\"no participation in similar businesses by other Korean conglomerates\"] non-compete clause. Samsung SDS's AI/data center business fell within the scope of that restriction, so the infrastructure fund was effectively blocked. The PE arm (Asia Fund V) stepped in by default, an interesting illustration of internal [fund-conflict dynamics] at KKR shaping deal structure.",
    },
    {
      q: "What does \"zero outside money\" mean in this context?",
      a: "This deal closed without [any external capital], no acquisition financing (LBO debt), no bank syndication, no third-party LP co-investment. KKR funded the full ₩1.22T from Asia Fund V dry powder alone. Normally a mega-PE transaction of this size involves syndicated debt plus co-invest LPs, but here KKR's PE-arm capital alone was sufficient. It demonstrates both [deployment capacity at scale] and the fact that this is a [pure capital transaction] for which LBO leverage is structurally unnecessary.",
    },
    {
      q: "What scenarios are possible when the six-year lockup ends?",
      a: "Three main scenarios. ① [Share price above 180,000 KRW + KKR converts], KKR becomes ~8.06% shareholder of Samsung SDS, realizing equity gains. ② [Share price below 180,000 KRW + KKR redeems], KKR collects 2.5% coupon over six years plus yield-to-maturity, recovering principal as bond. ③ [Partial conversion / partial redemption], depending on market conditions, KKR may split the position. In any scenario, downside risk is limited and upside is open, the asymmetric payoff the market labels as [heads-I-win-tails-I-don't-lose].",
    },
    {
      q: "What does this deal mean for Korean capital markets?",
      a: "Two main implications. First, [foreign mega-PE has taken a direct position in a Samsung Group company's capital structure for the first time]. Similar transactions at LG CNS, SK C&C, Lotte Innovate, and other chaebol IT subsidiaries are now more plausible. Second, [Korean private CB markets can support issuer-favorable plain-vanilla structures with global mega-PE counterparties], proving that the refixing-dependent norm is not the only viable structure. Issuer bargaining power in Korea's private CB market is likely to rise overall.",
    },
  ],
};

export default deal;
