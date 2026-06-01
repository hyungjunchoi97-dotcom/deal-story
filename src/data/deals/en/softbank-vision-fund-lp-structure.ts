/**
 * SoftBank Vision Fund I LP Capital Structure — $98.6B, first close 2017
 * $40B preferred tranche with 7% coupon + $60B common tranche
 * The first time a mega VC fund tranched its LP capital into debt-like preferred
 * and equity-like common units.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "softbank-vision-fund-lp-structure",
  title: "Vision Fund I, The Strangest LP Capital Structure in VC History, $40B Preferred at a 7% Coupon",
  subtitle:
    "$98.6B mega fund · PIF $45B · Mubadala $15B · SoftBank $28B · 40/60 preferred/common split · 12-year term · 7% cash coupon on preferred only",
  category: "ma",
  industry: "Private Equity / Venture Capital / Fund Structure",
  country: "Japan / Saudi Arabia / UAE",
  announcedAt: "2016-10-14",
  closedAt: "2017-05-20",
  announcedDisplay: "Oct 14, 2016 (PIF-SoftBank JV announcement)",
  closedDisplay: "May 20, 2017 (first close at $93B)",
  readingMinutes: 16,
  tags: [
    "SoftBank",
    "Vision Fund",
    "LP Structure",
    "Preferred Equity",
    "7% Coupon",
    "PIF",
    "Mubadala",
    "Masayoshi Son",
    "Vision 2030",
    "Mega Fund",
    "Venture Capital",
    "Fund Formation",
  ],
  excerpt:
    "On May 20, 2017, SoftBank announced the $93B first close of the SoftBank Vision Fund LP, what would become the largest private fund ever raised. The final size landed at $98.6B, commonly cited as $100B. The real surprise was not the size but the [LP capital structure]: roughly 40% of total commitments, about $40B, were structured as [Class B preferred units paying a 7% annual cash coupon over the fund's 12-year life], while the remaining ~60% (~$60B) sat as [Class A common units capturing upside but no coupon]. PIF and Mubadala took a blend of preferred and common; SoftBank Group committed its entire $28B [exclusively to common], putting itself in the first-loss seat. For the first time, a mega-VC LP base was tranched into debt-like and equity-like layers. When the WeWork and Uber cycle broke in 2019, that 7% preferred coupon became a recurring cash drag on the parent SoftBank Group itself.",

  acquirer: { initials: "LP", bg: "bg-emerald-700", label: "PIF · Mubadala · Apple · Foxconn · Qualcomm · Sharp · Ellison Trust (LPs)" },
  target: { initials: "SVF", bg: "bg-slate-800", label: "SoftBank Vision Fund LP (GP: SB Investment Advisers)" },

  background: [
    "In September 2016, Masayoshi Son met Crown Prince Mohammed bin Salman (MBS) in Tokyo for roughly 45 minutes. The version that leaked into the market is austere: Son sketched on a whiteboard a vision for [a $100B fund deployed over five years across global technology], and MBS reportedly agreed on the spot to a $45B commitment from Saudi Arabia's Public Investment Fund. In one meeting, Son had secured the deployment channel for the largest single pool of Saudi Vision 2030 diversification capital. A month later, on October 14, 2016, the two sides signed a non-binding memorandum announcing what the world would come to call the Vision Fund.",
    "[Apple, Foxconn, Sharp, Qualcomm, and Larry Ellison join.] On May 20, 2017, the Vision Fund announced a $93B first close. PIF committed $45B, SoftBank Group $28B, Mubadala $15B, and Apple, Foxconn, Sharp, Qualcomm, and the Larry Ellison family trust together committed roughly $5B. Apple and Foxconn joining as LPs in a private equity fund was itself extraordinary. Both companies have their own corporate development arms and rarely tie up capital in third-party funds. The lineup sent a signal: [\"this is not a VC fund, this is strategic capital wired to the global tech supply chain.\"]",
    "[40/60 preferred/common, the first such structure in mega-VC history.] The deeper innovation of the fund was that the LP capital itself was tranched into [Class A common (~60%)] and [Class B preferred (~40%)]. Class B was designed to receive a 7% annual cash coupon over the 12-year fund term [regardless of fund performance], functionally a debt claim on fund NAV with SoftBank Group as the credit backstop. Class A took no coupon but retained carry and upside. PIF committed roughly $40B preferred plus $5B common, Mubadala approximately $9.3B preferred plus $5.7B common, and SoftBank Group put all of its $28B into Class A common, voluntarily standing in the first-loss seat. Effectively, SoftBank had sold PIF and Mubadala [a $40B emerging-market tech-fund bond] and laid an equity layer on top.",
    "[$5B-per-year nominal pace, deployed into Uber, WeWork, and DoorDash in two years.] After first close, between 2017 and 2019 the Vision Fund deployed nearly the entire commitment across 88 portfolio companies, Uber ~$7.7B, WeWork over $10B cumulatively, DoorDash, Slack, Coupang, Grab, Didi, OYO, OpenDoor, Compass, Wag, FlexPort, ZhongAn, Improbable, Brain Corp, and many more. The \"five-year deployment plan\" collapsed into roughly two years. Global late-stage valuations were repriced one notch higher by the Vision Fund's solo price-setting power. \"Vision Fund premium\" became a working term in the late-stage market.",
    "[September 2019 WeWork IPO failure, the coupon comes back as a boomerang.] When WeWork's S-1 was published in September 2019, governance and profitability concerns triggered an IPO withdrawal. SoftBank stepped in with an additional ~$9.5B rescue package and took 80% control, while the Vision Fund recognized a cumulative writedown of approximately $11B on WeWork alone. Uber, Slack, and DoorDash all traded below their IPO prices in subsequent months. But the SoftBank Group still had to pay PIF and Mubadala their [7% preferred coupon, ~$2.8B per year in cash], independent of fund performance. To meet the coupon, SoftBank Group began selling Alibaba shares, partially listing Arm, and unloading T-Mobile and other balance-sheet assets.",
  ],

  dealSummary: {
    dealValueDisplay: "$98.6B in commitments (commonly cited $100B)",
    acquirerName: "PIF $45B + SoftBank $28B + Mubadala $15B + Apple, Foxconn, Sharp, Qualcomm, Ellison Trust ≈ $5B combined + others",
    targetName: "SoftBank Vision Fund LP (GP: SB Investment Advisers (UK) Ltd, 12-year term)",
    announcedDisplay: "Oct 14, 2016",
    closedDisplay: "May 20, 2017 (first close $93B), final close 2018",
    country: "JP / SA / UAE",
  },

  executiveSummary: [
    "[Largest private fund in history] First close $93B on May 20, 2017; final commitments $98.6B (commonly cited as $100B). A single fund roughly equal in size to total global VC commitments in the year prior",
    "[First tranched LP capital structure in mega-VC history] About 40% of commitments (~$40B) structured as [Class B preferred units paying 7% cash coupon for the 12-year fund life]; the remaining ~60% (~$60B) as [Class A common units capturing carry and upside]. LP capital itself split into debt-like and equity-like layers",
    "[PIF the single largest LP] Saudi Arabia's Public Investment Fund committed $45B (estimated ~$40B preferred + ~$5B common). Effectively agreed in one Tokyo meeting between Son and Crown Prince MBS as the deployment channel for Saudi Vision 2030 diversification capital",
    "[SoftBank Group in solo first-loss position] $28B committed [entirely as Class A common]. SoftBank itself took on the obligation to pay the 7% preferred coupon to PIF and Mubadala, the asymmetric apex of the capital stack",
    "[Apple, Foxconn, Sharp, Qualcomm, Ellison Trust ≈ $5B combined] Tech operating companies and strategic backers who rarely commit as LPs joined directly, repositioning the Vision Fund as [tech supply-chain strategic capital], not a typical financial fund",
    "[$80B+ deployed in two years] Against a nominal five-year deployment schedule, 2017-2019 saw nearly the entire commitment placed across 88 portfolio companies including Uber, WeWork, DoorDash, Slack, Coupang, Grab, Didi, and OYO",
    "[WeWork IPO failure 2019 + cumulative ~$11B writedown] S-1 disclosure unraveled governance issues; IPO withdrawn. SoftBank injected an additional ~$9.5B rescue and took 80% control. A direct hit to Vision Fund NAV",
    "[Coupon boomerang] Regardless of fund performance, SoftBank had to fund PIF and Mubadala's ~$2.8B/year preferred coupon in cash. The obligation forced sales of Alibaba shares, partial Arm IPO, and T-Mobile divestitures at the parent level over the following years",
  ],

  industryOverview: {
    body: "By 2016-2017, global venture capital had entered a phase where Uber, Airbnb, Didi, and Xiaomi rounds individually exceeded the size of most existing VC funds. Sequoia, a16z, and Accel were running flagship funds in the $1-3B range; no single LP could anchor a $10B+ round. Sovereign wealth funds, Saudi PIF, Abu Dhabi Mubadala, Singapore GIC, Norway's NBIM, began stepping in directly as LPs, shifting the gravity of PE and VC capital from US pensions and endowments toward oil-driven sovereigns and Asian state pools. The Vision Fund was both the apex and the explosion of that shift.",
    metrics: [
      { label: "Final commitments",                value: "$98.6B",        sub: "Commonly cited $100B / largest private fund ever raised" },
      { label: "Class B preferred tranche",         value: "~40%",          sub: "~$40B / 7% annual coupon for 12 years" },
      { label: "Class A common tranche",            value: "~60%",          sub: "~$60B / upside only, no coupon" },
      { label: "Portfolio count (peak)",            value: "88 companies",   sub: "Plan $5B/yr; reality ~2 years to deploy" },
    ],
    subBody:
      "The Vision Fund's arrival created a distinct [Vision Fund premium] layer in global late-stage valuations, rounds led solo by the Vision Fund chronically traded above their later IPO or secondary marks. That gap is widely cited as one of the structural causes of the 2019-2022 mega-VC cycle unwind. PIF and Mubadala's LP participation became a centerpiece of Saudi Vision 2030 and UAE Economic Vision 2030's [non-oil capital deployment strategy]. After Vision Fund 2 failed to raise external commitments in 2019, both sovereigns effectively stepped back from anchoring global mega-VC vehicles.",
    players: [
      { name: "SoftBank Group",     role: "Parent of the GP / $28B Class A common commitment" },
      { name: "SB Investment Advisers (UK)", role: "Fund GP entity, FCA-authorised in the UK" },
      { name: "Saudi PIF",          role: "Largest LP, $45B (preferred ≈ $40B + common ≈ $5B estimated)" },
      { name: "Mubadala (Abu Dhabi)", role: "Second-largest LP, $15B (preferred ≈ $9.3B + common ≈ $5.7B estimated)" },
      { name: "Apple",              role: "Strategic LP, late-stage tech exposure via the fund" },
      { name: "Foxconn",            role: "Strategic LP, EMS supply chain + tech portfolio exposure" },
      { name: "Sharp",              role: "Joined via Foxconn ownership" },
      { name: "Qualcomm",           role: "Strategic LP, 5G and IoT portfolio exposure" },
      { name: "Larry Ellison Trust", role: "Individual LP, Oracle founder family trust" },
    ],
  },

  companyOverview: {
    targetName: "SoftBank Group Corp. (Vision Fund GP Parent)",
    body: "SoftBank Group was founded in 1981 in Fukuoka by Masayoshi Son. By the 1990s it had built Yahoo! Japan, by 2000 it had made its now-legendary $20M investment in Alibaba (worth more than $50B at the 2014 IPO), and by 2013 it had acquired Sprint. The 2016 acquisition of Arm Holdings for $31B set the stage for the 2017 Vision Fund launch, positioning SoftBank Group as the [world's largest technology private investment platform]. At the time of the fund's first close, SoftBank Group's FY2016 (year ended March 2016) revenue was roughly ¥9.16 trillion with operating profit of ¥1.03 trillion and total assets of ~¥24.5 trillion. Alibaba, Sprint, and Arm were core balance-sheet assets; the parent itself committed $28B directly to the fund.",
    metrics: [
      { label: "Founded",            value: "Sep 1981",       sub: "Founded by Masayoshi Son" },
      { label: "Headquarters",        value: "Minato, Tokyo",  sub: "TSE ticker 9984" },
      { label: "FY2016 revenue",      value: "~¥9.16T",        sub: "Sprint, Yahoo! Japan, Arm consolidated" },
      { label: "FY2016 operating profit", value: "~¥1.03T",     sub: "OPM ~11%" },
      { label: "Parent's VF1 commitment", value: "$28B",       sub: "Entirely Class A common (first-loss)" },
    ],
    financials: [
      { year: "FY2014", revenue: 86703, cogs: 60800, grossProfit: 25903, sga: 17800, operatingIncome: 9180,  ebitda: 18500 },
      { year: "FY2015", revenue: 90683, cogs: 63600, grossProfit: 27083, sga: 17900, operatingIncome: 9994,  ebitda: 19600 },
      { year: "FY2016", revenue: 91585, cogs: 64200, grossProfit: 27385, sga: 17000, operatingIncome: 10259, ebitda: 20100 },
      { year: "FY2017", revenue: 91588, cogs: 64100, grossProfit: 27488, sga: 16800, operatingIncome: 13038, ebitda: 22400 },
      { year: "FY2018", revenue: 97157, cogs: 66800, grossProfit: 30357, sga: 17800, operatingIncome: 23539, ebitda: 32300 },
    ],
    financialsNote: "Unit: ¥100M | J-GAAP/IFRS consolidated | Source: SoftBank Group annual reports. FY2018 operating profit jump reflects Vision Fund valuation gains (Uber, WeWork, etc. mark-ups).",
    financialsCurrency: "JPY",
    financialsUnit: "100M JPY",
  },

  dealStructure: {
    body: "Vision Fund I was set up as a Cayman LP with SB Investment Advisers (UK) Ltd, FCA-authorised in the UK, as the operating GP. Fund term was 12 years (2017-2029, with potential extension). The structural innovation was the tranching of LP capital into [Class A common (~60%)] and [Class B preferred (~40%)]. Class B paid a 7% annual cash coupon for the full 12 years [regardless of fund performance], functionally a fixed-income claim against fund NAV with SoftBank Group as the implicit credit backstop. Class A took no coupon and captured carry and upside only. SoftBank Group committed its entire $28B as Class A common, voluntarily occupying the first-loss layer. PIF and Mubadala took a blend of preferred and common, protecting their downside through the coupon while retaining some upside.",
    preOwnership: {
      nodes: [
        { id: "sb_pre",  label: "SoftBank Group",   sub: "Holds Arm, Alibaba, Sprint",   type: "acquirer" },
        { id: "pif_pre", label: "Saudi PIF",        sub: "Vision 2030 capital channel sought", type: "fund" },
        { id: "mb_pre",  label: "Mubadala (UAE)",    sub: "Abu Dhabi sovereign wealth",   type: "fund" },
        { id: "tc_pre",  label: "Apple / Foxconn / Sharp / Qualcomm / Ellison Trust", sub: "Strategic LP candidates", type: "entity" },
      ],
      edges: [],
    },
    postOwnership: {
      nodes: [
        { id: "svf",       label: "SoftBank Vision Fund LP",      sub: "$98.6B Cayman LP, 12-year term",  type: "target" },
        { id: "gp",        label: "SB Investment Advisers (UK)",   sub: "GP, FCA-authorised",            type: "fund" },
        { id: "sb_post",   label: "SoftBank Group",                sub: "$28B common (Class A)",          type: "acquirer" },
        { id: "pif_post",  label: "Saudi PIF",                     sub: "$45B (preferred ≈ $40B + common ≈ $5B)", type: "fund" },
        { id: "mb_post",   label: "Mubadala",                      sub: "$15B (preferred ≈ $9.3B + common ≈ $5.7B)", type: "fund" },
        { id: "tc_post",   label: "Apple / Foxconn / Sharp / Qualcomm / Ellison", sub: "~$5B combined", type: "entity" },
      ],
      edges: [
        { from: "gp",       to: "svf", label: "GP management (1% mgmt fee + 20% carry)" },
        { from: "sb_post",  to: "svf", label: "$28B Class A common (first-loss)" },
        { from: "pif_post", to: "svf", label: "$45B (Class B ≈ $40B + Class A ≈ $5B)" },
        { from: "mb_post",  to: "svf", label: "$15B (Class B ≈ $9.3B + Class A ≈ $5.7B)" },
        { from: "tc_post",  to: "svf", label: "~$5B combined (largely Class A)" },
      ],
    },
    keyTerms: [
      { label: "Fund vehicle",         value: "Cayman LP, SoftBank Vision Fund L.P." },
      { label: "GP",                   value: "SB Investment Advisers (UK) Ltd · FCA-authorised" },
      { label: "Final commitments",    value: "$98.6B (commonly cited $100B)",                accent: true },
      { label: "Class A common tranche", value: "~60% (~$60B) · carry and upside only",        accent: true },
      { label: "Class B preferred tranche", value: "~40% (~$40B) · 7% annual cash coupon · 12 years", accent: true },
      { label: "Fund term",            value: "12 years (2017-2029, with extension option)" },
      { label: "Investment period",    value: "5 years nominal; ~2 years actual full deployment" },
      { label: "Target deployment pace", value: "$5B/year nominal" },
      { label: "GP economics",         value: "1.0% management fee + 20% carry" },
      { label: "Target gross IRR",     value: "~20-25% (per LP marketing materials)" },
      { label: "SoftBank Group commitment", value: "$28B entirely Class A common (first-loss)" },
      { label: "PIF commitment",        value: "$45B (Class B ≈ $40B + Class A ≈ $5B estimated)" },
      { label: "Mubadala commitment",   value: "$15B (Class B ≈ $9.3B + Class A ≈ $5.7B estimated)" },
      { label: "Other LPs combined",    value: "Apple + Foxconn + Sharp + Qualcomm + Ellison Trust ≈ $5B" },
      { label: "Annual preferred coupon obligation", value: "~$2.8B/year (independent of fund performance)" },
    ],
  },

  advisors: {
    body: "Vision Fund I was a fund formation rather than a typical M&A transaction, so the advisor lineup differs from standard precedents. LP-side legal and tax advisors negotiated commitment terms, while GP-side counsel structured the Cayman LP and UK GP vehicle. Financial advisory was largely run in-house at SoftBank (CFO office plus continuity advisors from the Arm acquisition). Several mandates remain unconfirmed in public disclosures.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "LP side (PIF · Mubadala · others)",
        initials: "LP",
        bg: "bg-emerald-700",
        advisors: [
          {
            firm: "Allen & Overy",
            role: "Legal advisor (market observation, PIF-side)",
            roleType: "legal",
            note: "PIF LP commitment and preferred-unit structuring (exact mandate undisclosed)",
          },
          {
            firm: "Latham & Watkins",
            role: "Legal advisor (market observation, Mubadala-side)",
            roleType: "legal",
            note: "Mubadala LP commitment structuring (exact mandate undisclosed)",
          },
          {
            firm: "PIF in-house strategy and finance team",
            role: "Financial advisor (in-house)",
            roleType: "financial",
            note: "Internal decision-making on Vision 2030 capital deployment",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "GP side (SoftBank Group · SB Investment Advisers)",
        initials: "SVF",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "Morrison & Foerster",
            role: "Legal advisor (GP-side fund vehicle)",
            roleType: "legal",
            note: "Cayman LP and UK GP vehicle structuring; continuity from the Arm acquisition mandate",
          },
          {
            firm: "Goldman Sachs (advisory support)",
            role: "Financial advisor (selected consulting)",
            roleType: "financial",
            note: "Early LP solicitation and preferred/common tranche pricing (informal)",
          },
          {
            firm: "SoftBank Group CFO office / in-house",
            role: "Financial advisor (in-house)",
            roleType: "financial",
            note: "Internal decision on the $28B parent commitment and structural assumption of the preferred coupon obligation",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor mappings are based on public disclosures and market observation. Private fund LP negotiations are typically confidential and some assignments remain unconfirmed.",
  },

  valuation: {
    body: "In this deal, [valuation] refers not to an acquisition price but to the pricing of the LP capital structure itself. The key economics are the 40/60 preferred/common split and the 7% coupon. From a PIF or Mubadala perspective, the preferred tranche is a debt-like claim on the fund: 12 years of 7% coupon plus principal, with SoftBank Group's balance sheet effectively standing behind the credit. The common tranche carries no coupon and depends entirely on residual upside. SoftBank Group committed all of its $28B to the common tranche, voluntarily backstopping the preferred coupon obligation against its parent balance sheet. The transaction is, in substance, SoftBank Group issuing a $40B emerging-market tech-fund bond at a 7% coupon and laying an equity layer on top of it.",
    rows: [
      { item: "Final fund commitments",                       val: "$98.6B",          note: "Commonly cited as $100B mega fund",            accent: true },
      { item: "Class A common tranche (upside)",              val: "~$60B (60%)",     note: "Carry and upside only, no coupon" },
      { item: "Class B preferred tranche (12-year 7% coupon)", val: "~$40B (40%)",     note: "7% annual cash coupon, performance-independent", accent: true },
      { item: "PIF commitment",                                val: "$45B",            note: "Preferred ≈ $40B + common ≈ $5B (estimated)" },
      { item: "Mubadala commitment",                           val: "$15B",            note: "Preferred ≈ $9.3B + common ≈ $5.7B (estimated)" },
      { item: "SoftBank Group commitment",                     val: "$28B",            note: "Entirely common (first-loss)",                  accent: true },
      { item: "Apple + Foxconn + Sharp + Qualcomm + Ellison",   val: "~$5B combined",   note: "Strategic LPs, predominantly Class A" },
      { item: "Annual preferred coupon obligation",            val: "~$2.8B/year",      note: "$40B × 7%, payable by fund NAV or SoftBank Group", accent: true },
      { item: "Cumulative preferred coupon (12 years)",        val: "~$33.6B",          note: "Simple sum, total obligation over fund life" },
      { item: "Target gross IRR",                              val: "20-25%",          note: "Per LP marketing materials" },
      { item: "Actual gross IRR (est. as of 2025)",            val: "~6-7%",           note: "Per PitchBook and external estimates, near the coupon threshold" },
    ],
    disclaimer: "Note: Preferred/common split percentages and per-LP tranche allocations are estimated from market reporting and partial disclosures by SoftBank and individual LPs. Exact figures are visible only in fund settlement statements.",
  },

  rationale: {
    buyer: {
      title: "Why PIF and Mubadala Underwrote $40B+ of the Preferred Tranche",
      initials: "LP",
      bg: "bg-emerald-700",
      points: [
        "[Vision 2030 capital deployment channel] For PIF, diversifying away from oil revenues into global non-oil assets is a national-level strategy. Placing $45B in a single global technology fund, with downside protected by the preferred coupon, was a structure that no conventional LP commitment could match in size or shape",
        "[12-year 7% cash coupon as a debt-like exposure] The ~$40B preferred tranche guaranteed an annual cash coupon regardless of fund NAV, with the obligation effectively backstopped by SoftBank Group's parent balance sheet. In substance, a $40B SoftBank-issued tech-fund bond",
        "[Late-stage global tech access via the Vision Fund premium] As LP, PIF and Mubadala automatically obtained exposure to the 80+ late-stage rounds where the Vision Fund was sole price-setter. For Gulf sovereigns, this was access to global late-stage technology that no domestic vehicle could replicate",
        "[Alignment with UAE Economic Vision 2030] For Mubadala, the structure matched Abu Dhabi's diversification mandate. Mubadala blended preferred and common to retain some upside while preserving downside protection through the coupon",
        "[Governance signalling via Apple, Foxconn, Sharp, and Qualcomm as co-LPs] Sitting at the same LP table as the world's largest technology operating companies offered a strategic signalling benefit beyond pure financial return",
      ],
    },
    seller: {
      title: "Why SoftBank Group Took On the 7% Preferred Coupon to Raise $98.6B",
      initials: "SVF",
      bg: "bg-slate-800",
      points: [
        "[Solo price-setter in the global late-stage cycle] With $100B of dry powder, SoftBank could become the sole price-setter in late-stage rounds that no traditional VC could match. Masayoshi Son framed it as a 30-year [AI revolution] strategy, anchored on single-LP capital dominance across the global tech cycle",
        "[Systematising the Alibaba one-shot] Son's $20M investment in Alibaba in 2000 returned more than $50B over 14 years. The Vision Fund was an attempt to convert that single-shot success into a portfolio of 80+ similar bets",
        "[Locking in Vision 2030 capital under SoftBank's sole management] The Tokyo meeting with MBS effectively made SoftBank the sole manager of Saudi and Emirati global technology capital. Son assumed the same LP base would anchor follow-on funds (VF2 and VF3) by default",
        "[Capital recycling after the $31B Arm acquisition] The 2016 Arm acquisition had pressured SoftBank Group's balance sheet. The Vision Fund partly relieved that pressure by transferring some Arm exposure (about 25%) into the fund portfolio, reshuffling assets between the parent and the fund",
        "[Preferred coupon as a rational cost under 20%+ gross IRR assumption] At an assumed 20-25% gross IRR, the 7% preferred coupon would still leave 12-15% net for the common tranche. Under that assumption, Son's voluntary acceptance of the first-loss position was defensible as cost of capital",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Nine years later the verdict is clear. The fund did generate a cumulative gross gain of roughly $22B, driven by Coupang, DoorDash, Slack, the Arm IPO, and ByteDance markups (PitchBook 2025), but gross IRR has stabilised around 6-7%, almost exactly at the level of the preferred coupon. In other words, residual returns to the common tranche (SoftBank Group's $28B and the ~$10.7B of common held by PIF and Mubadala) sit close to zero. Cumulative writedowns on WeWork exceeded $11B; Wag and Brain Corp collapsed; OYO's valuation was severely impaired. Vision Fund 2, launched in 2019, failed to attract external commitments, PIF and Mubadala declined to participate, and SoftBank funded approximately $56B directly from the parent balance sheet, ultimately recognising cumulative losses well above $20B. The Vision Fund segment posted its first annual profit in three years in FY2024 (year ended March 2024, ¥724.3B), driven primarily by the Arm IPO of September 2023 and recovering portfolio marks. In February 2025, Masayoshi Son publicly apologised at an investor conference for failing to deliver returns to PIF. Meanwhile, Son has been repositioning SoftBank around an [AI revolution] thesis built on large OpenAI investments, deeper use of Arm, and the Stargate data center joint venture. External fundraising for a Vision Fund 3 is on indefinite hold.",
    overallVerdict: "Structural innovation succeeded as a first-of-kind LP capital design; common-tranche economics stagnated near the preferred coupon threshold. Capital structure and asset selection must be assessed separately",
    positives: [
      "[Coupang, DoorDash, Slack, Arm, ByteDance, etc.] Cumulative gross gain of roughly $22B. Coupang is the canonical Vision Fund I success story",
      "[First tranched LP capital structure in mega-VC history] The 40/60 preferred/common split with a 7% coupon set a structural reference point for later private fund and SPAC innovations",
      "[FY2024 first annual profit in three years, helped by Arm IPO] The September 2023 Arm IPO and broader portfolio recovery drove the segment's first full-year profit since FY2021",
      "[First mega-scale Gulf sovereign deployment into global tech] At the macro level, the Vision Fund created the capital channel that connected Saudi Vision 2030 and UAE Economic Vision 2030 to global technology in size",
    ],
    risks: [
      "[Gross IRR roughly equals the 7% preferred coupon threshold] Common-tranche economics (SoftBank Group $28B plus ~$10B of LP common) returned close to zero in real terms. The 20-25% target IRR thesis failed to land",
      "[WeWork $11B+ writedown, Wag, Brain Corp, OYO impairments] A handful of concentrated bets eroded portfolio gains. The presumed diversification across 80+ companies did not, in practice, deliver risk reduction",
      "[Vision Fund 2 external fundraising failure] PIF and Mubadala declined VF2. SoftBank Group committed roughly $56B from the parent balance sheet, with cumulative losses above $20B",
      "[$2.8B/year preferred coupon as parent-balance-sheet drag] Independent of fund performance, SoftBank Group had to fund the coupon by selling Alibaba shares, partially listing Arm, and divesting T-Mobile and similar assets between 2020 and 2024",
      "[Son's public apology to PIF, February 2025] A CEO publicly apologising to an LP for failing to deliver returns is unprecedented at this scale. Restoring sovereign-LP confidence will require time",
      "[Vision Fund 3 effectively on hold] Market consensus is that external fundraising at the prior scale is no longer feasible. SoftBank has pivoted to balance-sheet and direct AI-infrastructure investments instead",
    ],
    editorNote:
      "Vision Fund I should be assessed as two distinct stories. First, as [the first tranched LP capital structure in mega-VC history], it validated the preferred-common split with a 7% coupon and remains a structural reference point. Second, as a [pure investment performance vehicle], it produced common-tranche returns nearly equal to the preferred coupon threshold, meaning the parent and common LPs earned close to nothing. The capital structure succeeded; the asset selection did not. Son's 2025 apology was directed at the second story. Since 2024, with the Arm IPO, large OpenAI investments, and the Stargate joint venture, the AI-revolution thesis has effectively absorbed the 7% coupon drag into a broader parent-level AI bet. Vision Fund I will be remembered as the beginning of a short golden age, 2017-2019, in which one LP solo-priced global late-stage technology, and a long settlement period, 2020-2029, in which the 12-year preferred coupon kept the bill on SoftBank's parent balance sheet. Reviewed as of May 2026.",
  },

  tombstone: {
    acquirerInitials: "LP",
    acquirerBg: "bg-emerald-700",
    targetInitials: "SVF",
    targetBg: "bg-slate-800",
    acquirerName: "PIF · Mubadala · Apple · Foxconn · Sharp · Qualcomm · Ellison Trust (LPs)",
    targetName: "SoftBank Vision Fund LP (GP: SB Investment Advisers UK)",
    dealTitle: "First Mega-VC Fund with Tranched Preferred/Common LP Capital Structure and 7% Coupon on $40B Preferred",
    dealSize: "$98.6B committed",
    dealSizeUSD: "approx. USD 98.6B (commonly cited $100B)",
    evEbitda: "N/A (Fund Formation)",
    closeDate: "May 20, 2017 (first close $93B)",
  },

  sources: [
    { id: 1, text: "SoftBank Group, Vision Fund First Close Announcement at $93B (May 20, 2017)", url: "https://group.softbank/en/news/press/20170520" },
    { id: 2, text: "PIF Press Release, PIF, SoftBank Group and Mubadala joined by initial investors in Vision Fund including Apple, Foxconn, Qualcomm and Sharp (May 20, 2017)", url: "https://www.pif.gov.sa/en/news-and-insights/press-releases/2017/pif-softbank-group-and-mubadala/" },
    { id: 3, text: "TechCrunch, SoftBank's massive Vision Fund raises $93 billion in its first close (May 20, 2017)", url: "https://techcrunch.com/2017/05/20/softbank-vision-fund-first-close/" },
    { id: 4, text: "Wikipedia, SoftBank Vision Fund (fund structure, LPs, performance summary)", url: "https://en.wikipedia.org/wiki/SoftBank_Vision_Fund" },
    { id: 5, text: "Axios, Why SoftBank Vision Fund is one of the most complex private equity funds ever raised (Oct 8, 2019)", url: "https://www.axios.com/2019/10/08/softbank-vision-fund-complicated-future" },
    { id: 6, text: "Fortune, SoftBank Writes Down $9.2 Billion Over WeWork (Nov 6, 2019)", url: "https://fortune.com/2019/11/06/softbank-wework-uber-write-down/" },
    { id: 7, text: "PitchBook, SoftBank Vision Fund Performance Profile", url: "https://pitchbook.com/profiles/fund/15756-94F" },
    { id: 8, text: "CNBC, SoftBank's Vision Fund posts first annual gain in 3 years, up $4.6 billion (May 13, 2024)", url: "https://www.cnbc.com/2024/05/13/softbank-earnings-q4-and-full-year-fy-2023.html" },
    { id: 9, text: "AGBI, SoftBank CEO admits failing to deliver returns to PIF (Feb 2025)", url: "https://www.agbi.com/tech/2025/02/softbank-ceo-admits-failing-to-deliver-returns-to-pif/" },
    { id: 10, text: "Global SWF, Sovereign Backers of Vision Fund Hit by Son's Strategic Failure", url: "https://globalswf.com/news/sovereign-backers-of-vision-fund-hit-by-son-s-strategic-failure" },
  ],

  seo: {
    title: "SoftBank Vision Fund I $98.6B LP Structure, the 7% Preferred Coupon Explained",
    description:
      "May 2017: SoftBank Vision Fund I first close at $93B (final $98.6B), the largest private fund ever raised. Roughly 40% of commitments (~$40B) structured as preferred units paying a 7% cash coupon over 12 years; ~60% as common units capturing upside. PIF $45B, Mubadala $15B, SoftBank $28B, Apple, Foxconn, Sharp, Qualcomm, and Ellison Trust together ~$5B. After the 2019 WeWork cycle break, the preferred coupon became a recurring cash drag on SoftBank's parent balance sheet. A full anatomy of the mega-fund.",
    keywords: [
      "SoftBank Vision Fund",
      "Vision Fund LP structure",
      "preferred equity 7% coupon",
      "PIF Vision Fund",
      "Mubadala Vision Fund",
      "SoftBank Group",
      "Masayoshi Son",
      "Saudi Vision 2030",
      "mega VC fund",
      "Class A Class B tranche",
      "Vision Fund 2 failure",
      "Arm IPO SoftBank",
    ],
  },

  concepts: [
    {
      term: "Preferred Units in a PE Fund",
      description: "A structure that splits LP commitments such that one tranche receives a fixed coupon regardless of fund performance. Vision Fund I's ~$40B Class B tranche was contracted to receive 7% annual cash coupon for 12 years. Traditional VC and PE funds treat all LPs equally with carry distributions; tranching LP capital into a debt-like layer was Vision Fund I's structural innovation.",
    },
    {
      term: "Coupon Drag",
      description: "When a fund's preferred tranche is contractually entitled to a coupon, the obligation reduces residual returns available to the common tranche (or to the GP parent) even when fund NAV is impaired. Vision Fund I's ~$2.8B/year preferred coupon obligation forced SoftBank Group to sell Alibaba shares and partially list Arm to fund the coupon during the WeWork unwind.",
    },
    {
      term: "Saudi Vision 2030",
      description: "Saudi Arabia's national diversification strategy announced in 2016 by Crown Prince Mohammed bin Salman. Core pillars include reducing oil revenue dependence, privatisation, expanding women's economic participation, tourism, and developing a technology industry. PIF's $45B commitment to Vision Fund I was a key policy-driven deployment under this framework.",
    },
    {
      term: "GP/LP Structure (General Partner / Limited Partner)",
      description: "The standard legal structure of a private fund. The GP runs the fund with unlimited liability and earns typically a 1% management fee plus 20% carry. LPs commit capital with limited liability. Vision Fund I's GP is SB Investment Advisers (UK) Ltd; LPs include PIF, Mubadala, SoftBank Group, Apple, Foxconn, and others.",
    },
    {
      term: "NAV (Net Asset Value)",
      description: "The market value of a fund's assets minus liabilities. PE and VC fund NAV is typically marked quarterly to market. Vision Fund I's NAV fell sharply after the 2019 WeWork cycle break and recovered partially after the September 2023 Arm IPO.",
    },
    {
      term: "Mark-to-Market",
      description: "The accounting principle of revaluing holdings at current market prices. VC funds with large late-stage private positions mark to comparable round prices or DCF models. The Vision Fund recognised large writedowns when post-IPO public prices for Uber, Slack, and DoorDash settled below the fund's prior marks.",
    },
    {
      term: "Capital Call",
      description: "The mechanism by which a GP draws committed capital from LPs in stages. Vision Fund I was nominally scheduled to call over five years, but in practice nearly the entire commitment was called between 2017 and 2019, forcing PIF, Mubadala, and SoftBank to transfer large sums in a compressed window.",
    },
    {
      term: "Coupang as VF1 Win / WeWork as VF1 Loss",
      description: "Coupang received roughly $3B from the Vision Fund across 2015 and 2018 rounds in exchange for an effective stake near 35-40%. At its March 2021 NYSE IPO, the resulting paper gain to the fund was approximately $24B, the single largest success in VF1. WeWork received more than $10B cumulatively, the IPO was withdrawn in 2019, the company filed for Chapter 11 in 2023, and the cumulative VF1 writedown exceeded $11B, the canonical VF1 failure.",
    },
  ],

  faq: [
    {
      q: "What exactly is the preferred tranche in Vision Fund I?",
      a: "Out of $98.6B in total LP commitments, roughly 40% (~$40B) was structured as [Class B preferred units] entitled to a [7% annual cash coupon over the 12-year fund life, regardless of fund performance]. The remaining ~60% (~$60B) was [Class A common units] capturing carry and upside but receiving no coupon. PIF's $45B is estimated to include roughly $40B of preferred and ~$5B of common; Mubadala's $15B roughly $9.3B preferred plus $5.7B common; SoftBank Group's full $28B was committed to common. The credit risk on the preferred coupon was effectively backstopped by SoftBank Group's parent balance sheet. This was the first time mega-VC LP capital was tranched into debt-like and equity-like layers.",
    },
    {
      q: "Why did SoftBank Group voluntarily occupy the first-loss common position?",
      a: "Masayoshi Son's stated assumption was that a 20-25% gross IRR would more than cover the 7% preferred coupon, leaving 12-15% net to the common tranche. Under that thesis the first-loss position was defensible as cost of capital. The strategic logic ran deeper: $100B of single-LP dry powder would make SoftBank the sole price-setter in global late-stage rounds. Providing downside protection to PIF and Mubadala via the preferred structure was the price of locking in their sovereign capital. The fund was, in Son's framing, an attempt to systematise the Alibaba single-shot win ($20M to $50B+) across 80+ portfolio companies.",
    },
    {
      q: "How did the 7% preferred coupon become a drag on SoftBank Group's parent balance sheet?",
      a: "The obligation is roughly $40B × 7% = $2.8B per year in cash, payable regardless of fund NAV or performance. After WeWork's IPO failure and the cumulative $11B+ writedown in 2019, SoftBank Group was still required to pay PIF and Mubadala the coupon. When fund-level distributable cash was insufficient, SoftBank Group filled the gap by selling parent-balance-sheet assets, primarily Alibaba shares, but also Arm (partial IPO in 2023) and T-Mobile holdings. Most of the Alibaba position was liquidated between 2020 and 2024. The 2023 Arm IPO was partly a product of the same capital pressure.",
    },
    {
      q: "Why did Vision Fund 2 fail to raise external LP commitments?",
      a: "After WeWork's September 2019 IPO withdrawal and the surfacing of cumulative writedowns at Vision Fund I, PIF and Mubadala declined to participate in Vision Fund 2. Even with the 7% preferred coupon, common-tranche losses were accumulating, and confidence in Son's solo-price-setting model had weakened. SoftBank Group ultimately committed approximately $56B from the parent balance sheet to launch VF2, with cumulative losses subsequently exceeding $20B. In February 2025, Son publicly apologised at an investor conference for failing to deliver returns to PIF.",
    },
    {
      q: "How did Coupang become the canonical Vision Fund I success story?",
      a: "Vision Fund I invested roughly $1B in 2015 and $2B in 2018 across two rounds in Coupang, ultimately holding an effective stake near 35-40%. At Coupang's March 2021 NYSE IPO, the market capitalisation reached approximately $84B, yielding a Vision Fund paper gain of around $24B, the largest single position win in VF1. The transaction is cited both as a Korean e-commerce global IPO milestone and as evidence that the Vision Fund's geographic and sector diversification could occasionally deliver. Realised gains have been smaller than paper marks given Coupang's post-IPO share-price correction.",
    },
    {
      q: "How is the Vision Fund segment being repositioned in 2024-2026?",
      a: "Three trends are running in parallel. First, [the September 2023 Arm IPO and subsequent share-price strength] drove the Vision Fund segment to its first annual profit in three years in FY2024 (¥724.3B). Second, [external fundraising for Vision Fund 3 is effectively on hold]; Son has pivoted from external LP fundraising toward parent-balance-sheet capital and direct investments in Arm and OpenAI. Third, [the Stargate data center JV and large OpenAI investments] have repositioned SoftBank around an [AI revolution] thesis, shifting from the 2017 model of [sole late-stage price-setter] to [direct bets on AI infrastructure and leading model companies]. The 7% preferred coupon drag from VF1 has effectively been absorbed into the broader parent-level AI investment programme.",
    },
  ],
};

export default deal;
