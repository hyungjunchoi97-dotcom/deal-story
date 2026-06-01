/**
 * SK Square × 11st Call Option Default
 * 2018 H&Q AP consortium ₩500B investment → 2023 IPO failure → SK Square waived call option (strategic default)
 * → 2024 drag-along forced sale → 2025 SK Planet acquisition closed the FI recovery loop.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "sk-square-11st-put-default",
  title: "The Day SK Square Walked Away from a ₩500B Call Option, Korea's First Strategic Default on a PE Buyback Guarantee",
  subtitle:
    "2018 Naeil Holdings consortium ₩500B investment · 18.18% stake · 5-year IPO covenant · Sep 2023 deadline missed · Nov 29, 2023 SK Square board waived call option · 2024 drag-along forced sale · Oct 2025 SK Planet acquisition closed the FI recovery loop",
  category: "ma",
  industry: "E-commerce / Private Equity / Capital Markets",
  country: "South Korea",
  announcedAt: "2023-11-29",
  closedAt: "2025-10-29",
  announcedDisplay: "Nov 29, 2023 (SK Square board resolved to waive call option)",
  closedDisplay: "Oct 29, 2025 (SK Planet acquisition announced, FI principal fully recovered)",
  readingMinutes: 14,
  tags: [
    "SK Square",
    "11st",
    "H&Q AP",
    "Naeil Holdings",
    "Call Option",
    "Put Option",
    "Strategic Default",
    "Drag-Along",
    "IPO Covenant",
    "National Pension Service",
    "Private Equity",
    "E-commerce",
  ],
  excerpt:
    "In September 2018, H&Q AP's special-purpose vehicle [Naeil Holdings], co-funded with the National Pension Service and Korea Federation of Community Credit Cooperatives (KFCC, Saemaul Geumgo), invested ₩500B into 11st for an 18.18% stake. The condition was a single covenant, [IPO within five years]. On failure, SK Telecom (later SK Square) would repurchase the FI stake via a call option, and the FIs held a drag-along to force a 100% sale. The September 2023 IPO deadline lapsed, and on November 29, 2023, the SK Square board formally [waived] the call option. It was the first time a Korean conglomerate parent had deliberately defaulted on a PE buyback guarantee. The FIs triggered the drag-along, and after two years of dispute, SK Square folded the asset into its wholly owned subsidiary SK Planet in October 2025, settling FI principal recovery. The price Korea's PE market paid is permanent, the long-standing assumption that [conglomerate creditworthiness equals guarantee enforcement] is gone.",

  acquirer: { initials: "SKS", bg: "bg-red-600", label: "SK Square (Call Option Obligor)" },
  target: { initials: "11ST", bg: "bg-orange-500", label: "11st (Naeil Holdings 18.18% stake)" },

  background: [
    "[September 2018, 11st's carve-out and the ₩500B FI round.] SK Telecom had owned the 11st open-market business since 2008, when it acquired the Korean operations of Pacific Trading. In September 2018, SK Telecom carved 11st out as a standalone subsidiary, and simultaneously the H&Q AP-led SPC [Naeil Holdings], funded by the National Pension Service (NPS) and KFCC (Saemaul Geumgo), invested ₩500B for an 18.18% stake. Consortium contributions were approximately NPS ₩350B, H&Q blind fund ₩100B, KFCC ₩50B. The implied equity value at entry was about ₩2.7T.",
    "[The single core covenant, IPO within five years.] The shareholder agreement (SHA) committed 11st to [completing an IPO by September 2023]. On failure, SK Telecom (later SK Square) was obligated to repurchase the FI stake via a call option with a [guaranteed minimum IRR] of roughly 3.5%, and the FIs received a [drag-along] right to force the sale of 100% of 11st, including SK's stake. Notably, instead of a put option (the Korean standard FI protection), the FIs accepted a [call + drag-along] asymmetric structure. This was an issuer-favorable concession at the time, and it became the structural pivot of the dispute that followed.",
    "[November 2021, SK Square is spun off and inherits the obligation.] In November 2021, SK Telecom executed a horizontal split to create SK Square, the group's new investment holding company. The 11st call option and drag-along obligation passed automatically to SK Square. In the same window, Coupang's US IPO compressed Korean e-commerce valuations, and Aliexpress and Temu began aggressive expansion in Korea. 11st's revenue stabilized in the ₩800B range but operating losses ran ₩120~150B, putting the company structurally outside any IPO window.",
    "[September 2023 deadline lapses, November 29 SK Square waives the call option.] Two months after the five-year deadline expired, on November 29, 2023, the SK Square board formally resolved [not to exercise the 11st FI call option]. The arithmetic, exercising the call would have required paying [principal ₩500B + ~3.5% IRR for 5 years ≈ ₩600B] in cash immediately, while 11st's then-market value was estimated at roughly ₩1T, locking in ~₩400B of immediate accounting loss. The board cited [\"exercising the call would itself be a breach of fiduciary duty\"] as the legal cover for the [strategic default]. It was the first time a Korean conglomerate parent had deliberately failed to honor a PE buyback covenant.",
    "[2024~2025, drag-along forced sale and the SK Planet intra-group settlement.] Immediately after SK Square's waiver, the FIs triggered the drag-along to force a 100% sale of 11st. Qoo10 negotiations collapsed in February 2024, then Alibaba International and domestic PEs surfaced as bidders, but estimated transaction values had dropped to roughly ₩500B, less than 20% of the original entry valuation. SK Square refused to consent to those prices, and the sale dragged on for two years. On October 29, 2025, SK Square sold its full 11st stake to its wholly owned subsidiary [SK Planet], which paid approximately [₩467.3B in a lump sum] to the FIs. Combined with prior dividends of ~₩60B, the FIs fully recovered their ₩500B principal. The two-year dispute was effectively absorbed via an intra-group transaction.",
  ],

  dealSummary: {
    dealValueDisplay: "Call obligation waived ~₩600B · FI recovery ~₩467.3B (Oct 2025 SK Planet purchase)",
    acquirerName: "SK Square (Call Option Obligor) · H&Q AP / NPS / KFCC (FI Consortium)",
    targetName: "11st (Naeil Holdings 18.18% + SK Square 80.26%, combined intra-group sale)",
    announcedDisplay: "Nov 29, 2023 (Board resolution waiving call option)",
    closedDisplay: "Oct 29, 2025 (SK Planet acquisition, FI principal recovery)",
    country: "South Korea",
  },

  executiveSummary: [
    "[First strategic default on a Korean conglomerate's PE buyback guarantee] On November 29, 2023, the SK Square board formally waived the call option on the ₩500B FI stake in 11st. It was the first time a Korean conglomerate parent had deliberately failed to honor a PE buyback covenant.",
    "[2018 deal structure] H&Q AP led an SPC [Naeil Holdings], co-funded by NPS (~₩350B) and KFCC (~₩50B), to invest ₩500B for an 18.18% stake in 11st. Entry equity value was approximately ₩2.7T.",
    "[Single covenant, IPO within five years] An IPO by September 2023 would have produced normal monetization. On failure, SK Telecom (→ SK Square) was obligated to buy back FI shares via a [call option], while the FIs held a [drag-along] right to force a 100% sale, an unusual asymmetric structure.",
    "[September 2023 deadline lapses] After Coupang's US IPO compressed Korean e-commerce valuations and Aliexpress / Temu pressure mounted, 11st was structurally outside any IPO window. The covenant defaulted.",
    "[SK Square's loss math] Exercising the call would have required paying ~₩600B in cash immediately, against 11st's then-estimated value of ~₩1T, locking in ~₩400B of accounting loss. The board chose [strategic default], citing the legal opinion that [exercising the call would itself be a breach of fiduciary duty].",
    "[2024~2025 forced sale] FIs triggered the drag-along, Qoo10 negotiations collapsed, Alibaba surfaced, but market values had dropped to ~₩500B. After two years of stalemate, SK Square sold 11st to its wholly owned subsidiary SK Planet in October 2025 for approximately ₩467.3B paid to the FIs, who recovered principal in full (₩500B + ~₩60B prior dividends).",
    "[Korean PE market standard reset] After this case, every Korean PE deal involving a chaebol parent now requires [cash escrow, parent guarantee, or put option priority]. The era when [parent creditworthiness implied automatic guarantee enforcement] is over.",
    "[Intra-group politics absorbed the dispute] The 2025 SK Planet acquisition was a [shift of the burden inside the group while preserving FI principal] settlement. Questions about transaction-price fairness and intra-group capital allocation linger.",
  ],

  industryOverview: {
    body: "Korean e-commerce between 2018 and 2024 was reshaped by three simultaneous pressures: Coupang's solo dominance, Aliexpress / Temu / Amazon direct-import penetration, and Naver Smart Store absorbing platform-merchant share. First-generation general malls, 11st, Gmarket, Auction, SSG.COM, Lotte On, lost share quickly and accumulated losses. PE capital deployed into these first-generation platforms (11st, Gmarket, Homeplus online) all ended in failed IPOs, stalled sales, or restructurings. The 11st case is the [capital-structure case study] of this first-generation crisis.",
    metrics: [
      { label: "11st entry equity value (2018)",       value: "~₩2.7T",         sub: "At Naeil Holdings 18.18% entry" },
      { label: "11st 2024 estimated sale price",        value: "~₩500B range",   sub: "Per drag-along sale estimates, ~50% haircut" },
      { label: "11st FY2023 revenue",                   value: "~₩865.5B",       sub: "+9.7% YoY, ~₩125.8B operating loss" },
      { label: "11st FY2024 revenue",                   value: "~₩561.8B",       sub: "Retail direct-purchase wind-down, ~₩75.4B operating loss" },
    ],
    subBody:
      "Through the late 2010s, the [conglomerate parent + FI consortium + IPO covenant + call / drag-along] structure was used heavily in Korean PE deals, by SK, Lotte, CJ, and Shinsegae across multiple subsidiaries. FIs effectively underwrote these deals on the implicit assumption that [conglomerate creditworthiness = automatic covenant enforcement]. The 11st default broke that assumption head-on. Subsequent PE capital-raising negotiations have permanently shifted toward FI-favorable terms.",
    players: [
      { name: "SK Square",         role: "Call option obligor, 80.26% parent of 11st (created via SK Telecom 2021 split)" },
      { name: "H&Q AP Korea",       role: "FI lead, Naeil Holdings SPC operator, H&Q blind fund ~₩100B contribution" },
      { name: "National Pension Service (NPS)", role: "Largest FI contributor (~₩350B); politics of pension losses central to the dispute" },
      { name: "KFCC (Saemaul Geumgo)", role: "FI contributor (~₩50B)" },
      { name: "SK Planet",         role: "SK Square wholly owned subsidiary, October 2025 11st acquirer, paid ~₩467.3B to FIs" },
    ],
  },

  companyOverview: {
    targetName: "11st Co., Ltd.",
    body: "11st is a first-generation Korean open-market platform that SK Telecom acquired in 2008 (originally a Pacific Trading-operated Korean business) and operated internally until carving it out as a standalone subsidiary in September 2018. The carve-out coincided with the ₩500B Naeil Holdings investment. After SK Telecom's November 2021 horizontal split, the parent role passed to SK Square. The business runs along three lines: [① open-market intermediation, ② direct-purchase retail, ③ global partnerships with Amazon and Express]. From 2023, the company has been winding down direct-purchase retail and pivoting toward profitability rather than growth. FY2024 operating losses narrowed but revenue fell 35%, the company sits squarely in [shrinking-toward-profitability] territory.",
    metrics: [
      { label: "Founded",              value: "Acquired by SK Telecom 2008, carved out 2018", sub: "Originally Pacific Trading Korea" },
      { label: "HQ",                   value: "Jung-gu, Seoul",          sub: "SK Square subsidiary" },
      { label: "FY2024 revenue",       value: "~₩561.8B",                sub: "-35.1% YoY, retail wind-down" },
      { label: "FY2024 operating loss", value: "~₩-75.4B",                sub: "Loss narrowed ~40% YoY" },
    ],
    financials: [
      { year: "FY2021", revenue: 5614, cogs: 5400, grossProfit: 214,  sga: 908,  operatingIncome: -694,  ebitda: -500 },
      { year: "FY2022", revenue: 7890, cogs: 7600, grossProfit: 290,  sga: 1805, operatingIncome: -1515, ebitda: -1300 },
      { year: "FY2023", revenue: 8655, cogs: 8260, grossProfit: 395,  sga: 1653, operatingIncome: -1258, ebitda: -1050 },
      { year: "FY2024", revenue: 5618, cogs: 5380, grossProfit: 238,  sga: 992,  operatingIncome: -754,  ebitda: -600 },
      { year: "FY2025", revenue: 5800, cogs: 5500, grossProfit: 300,  sga: 800,  operatingIncome: -500,  ebitda: -380 },
    ],
    financialsNote: "Unit: KRW 100M | K-IFRS consolidated | Source: 11st audit reports and press coverage (FY2025 includes estimates)",
    financialsCurrency: "KRW",
    financialsUnit: "100M KRW",
  },

  dealStructure: {
    body: "The capital structure here evolved across seven years, from the 2018 SHA, through the November 2023 board waiver, to the 2024~2025 drag-along sale, and ultimately the October 2025 SK Planet acquisition. The pre-structure was [SK Telecom (→ SK Square) 80.26% + Naeil Holdings 18.18% + others]. The post-structure is [SK Planet 100%]. The economic core remained the same throughout: [call option + drag-along asymmetric rights + 5-year IPO covenant + ~3.5% IRR floor].",
    preOwnership: {
      nodes: [
        { id: "skt_pre",   label: "SK Telecom (→ SK Square)", sub: "~80.26%",         type: "acquirer" },
        { id: "naeil_pre", label: "Naeil Holdings SPC",        sub: "18.18%",          type: "fund" },
        { id: "11st_pre",  label: "11st",                      sub: "FY2018 EV ~₩2.7T", type: "target" },
        { id: "etc_pre",   label: "Other shareholders",         sub: "~1.56%",          type: "public" },
        { id: "nps",       label: "National Pension Service",   sub: "~₩350B LP",       type: "entity" },
        { id: "hnq",       label: "H&Q AP Korea",               sub: "~₩100B GP+LP",    type: "fund" },
        { id: "saemaul",   label: "KFCC (Saemaul Geumgo)",      sub: "~₩50B LP",        type: "entity" },
      ],
      edges: [
        { from: "skt_pre",   to: "11st_pre",  label: "80.26%" },
        { from: "naeil_pre", to: "11st_pre",  label: "18.18% (₩500B, call+drag rights)" },
        { from: "etc_pre",   to: "11st_pre",  label: "1.56%" },
        { from: "nps",       to: "naeil_pre", label: "₩350B" },
        { from: "hnq",       to: "naeil_pre", label: "₩100B (operator)" },
        { from: "saemaul",   to: "naeil_pre", label: "₩50B" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "sks_post",     label: "SK Square",                  sub: "0% direct in 11st",          type: "acquirer" },
        { id: "skp_post",     label: "SK Planet",                  sub: "100% (Oct 2025 acquirer)",   type: "entity" },
        { id: "11st_post",    label: "11st",                       sub: "SK Planet wholly owned",     type: "target" },
        { id: "naeil_post",   label: "Naeil Holdings (winding down)", sub: "Principal ₩500B recovered", type: "fund" },
      ],
      edges: [
        { from: "sks_post",   to: "skp_post",  label: "100% (parent relationship preserved)" },
        { from: "skp_post",   to: "11st_post", label: "100% (FI + SK Square stakes acquired in single transaction)" },
        { from: "skp_post",   to: "naeil_post", label: "~₩467.3B lump-sum payment" },
      ],
    },
    keyTerms: [
      { label: "Investment date",              value: "September 2018 (concurrent with 11st carve-out)" },
      { label: "Principal amount",              value: "₩500B (Naeil Holdings SPC)",                accent: true },
      { label: "FI stake",                      value: "18.18%",                                  accent: true },
      { label: "Entry equity value",            value: "~₩2.7T" },
      { label: "FI consortium contributions",   value: "NPS ₩350B · H&Q ₩100B · KFCC ₩50B" },
      { label: "IPO covenant deadline",         value: "September 2023 (5-year)",                  accent: true },
      { label: "Guaranteed IRR floor",          value: "~3.5% (market observation, not officially confirmed)" },
      { label: "Call option (SK Telecom → SK Square)", value: "Obligation to repurchase FI stake on IPO failure, ~₩600B (principal + accrued IRR)" },
      { label: "Drag-along (FI right)",         value: "Right to force sale of 100% of 11st including SK's stake" },
      { label: "Date call option waived",        value: "November 29, 2023 (SK Square board)",     accent: true },
      { label: "Final FI recovery (Oct 2025)",   value: "~₩467.3B (SK Planet lump sum) + ~₩60B (prior dividends)", accent: true },
      { label: "Waterfall distribution",         value: "FI principal and interest paid first, parent receives residual" },
      { label: "Final acquirer",                value: "SK Planet (SK Square wholly owned subsidiary)" },
    ],
  },

  advisors: {
    body: "This was less a conventional M&A transaction than a hybrid of [SHA dispute + forced sale + intra-group transaction] spanning seven years. SK Square reportedly obtained a legal opinion from a major Korean law firm prior to the November 2023 board waiver, the FI side relied on H&Q AP's in-house team plus separate NPS-mandated advisors. During the 2024 forced sale phase, a global IB acted as sale advisor. The October 2025 SK Planet transaction was negotiated primarily in-house plus SK Group legal. Official advisor disclosure remains limited.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "SK Square (Call Option Obligor)",
        initials: "SKS",
        bg: "bg-red-600",
        advisors: [
          {
            firm: "SK Square Treasury & Strategy (in-house)",
            role: "Lead Negotiator (in-house)",
            roleType: "financial",
            note: "Led call option waiver decision, drag-along response, and SK Planet purchase-price negotiation",
          },
          {
            firm: "Kim & Chang (market observation)",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Fiduciary-duty risk analysis on the call option waiver (official confirmation limited)",
          },
          {
            firm: "(Global IB sale advisor, market observation)",
            role: "Sale Advisor",
            roleType: "financial",
            note: "2024 forced-sale stage bidder sourcing and negotiation (official confirmation limited)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "H&Q AP · NPS · KFCC (FI Consortium)",
        initials: "HNQ",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "H&Q AP Korea (in-house)",
            role: "FI Lead (in-house)",
            roleType: "financial",
            note: "Naeil Holdings SPC operations, drag-along execution, and sale-process negotiation",
          },
          {
            firm: "NPS Private Equity Division",
            role: "FI Decision-Maker",
            roleType: "financial",
            note: "₩350B contribution; political and pension-loss decision authority",
          },
          {
            firm: "(Major Korean law firm, market observation)",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Call-option-waiver response and drag-along execution legal process (official confirmation limited)",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on disclosure, press coverage, and market observation; some assignments are unconfirmed.",
  },

  valuation: {
    body: "The valuation pivot is the steep slide from [~₩2.7T entry value (2018) → ~₩1T market estimate (2023) → ~₩500B range estimated transaction value (2024)]. SK Square's choice to waive the call option followed straightforward arithmetic: exercising the call would require paying [₩500B principal + ~3.5% IRR over five years ≈ ₩600B] in cash immediately, against an 11st standalone value of ~₩1T, locking in ~₩400B of accounting loss instantly. Conversely, waiving the call and letting the drag-along force a sale produced almost zero short-term cash outflow, even though the waterfall would leave SK Square with essentially nothing on residual proceeds. This asymmetry was the arithmetic backbone of the [strategic default] decision.",
    rows: [
      { item: "2018 entry equity value",                       val: "~₩2.7T",       note: "At 18.18% Naeil Holdings entry",         accent: true },
      { item: "FI principal contribution",                      val: "₩500B",        note: "NPS ₩350B + H&Q ₩100B + KFCC ₩50B" },
      { item: "Call option exercise cost to SK Square",          val: "~₩600B",       note: "Principal + ~3.5% IRR × 5 years",         accent: true },
      { item: "2023 estimated 11st market value",                val: "~₩1T",         note: "Post-Coupang IPO e-commerce discount" },
      { item: "2024 estimated forced-sale price",                val: "~₩500B range", note: "During Qoo10 / Alibaba negotiations" },
      { item: "FI payment in Oct 2025 SK Planet acquisition",   val: "~₩467.3B",     note: "Lump sum",                                accent: true },
      { item: "FI prior dividends",                              val: "~₩60B",        note: "Cumulative 2018~2024" },
      { item: "Total FI recovery",                                val: "~₩527.3B",     note: "Principal ₩500B + alpha",                accent: true },
      { item: "SK Square → SK Planet transaction price",         val: "Not officially disclosed", note: "Intra-group transfer; market estimates in progress" },
    ],
    disclaimer: "Note: Figures reflect disclosure, press coverage, and market estimates. Intra-group transfer pricing is officially undisclosed.",
  },

  rationale: {
    buyer: {
      title: "H&Q AP, NPS, KFCC: Why the Call+Drag Structure, and Why It Survived to Recovery",
      initials: "HNQ",
      bg: "bg-blue-700",
      points: [
        "[5-year IPO assumption + parent creditworthiness = unconditional guarantee enforcement] In 2018, the Korean PE market assigned essentially 0% probability to the scenario of a top-tier chaebol parent defaulting on a buyback covenant. The asymmetric call+drag structure was accepted under the prevailing assumption that [parent creditworthiness implied automatic guarantee enforcement].",
        "[Put option waived in exchange for drag-along, a negotiating concession] Korean FIs typically demand a put option (right to put shares back to the parent). In this deal, FIs accepted a call option for the parent plus a drag-along for the FIs, an issuer-favorable concession. The drag-along became the [backup weapon] that ultimately forced the 2025 intra-group settlement.",
        "[Drag-along triggered immediately after the November 2023 waiver] Within weeks of SK Square's board waiving the call option, H&Q AP triggered the drag-along to force a sale of 100% of 11st. Even after the Qoo10 collapse and the haircut to ~₩500B market value, the FIs maintained pressure that eventually compelled an intra-group resolution.",
        "[2025 SK Planet acquisition closed the recovery loop] After two years of dispute, H&Q AP recovered principal ₩500B plus ~₩60B in dividends. The ~3.5% IRR floor was not recovered, but [full principal recovery] was the minimum acceptable outcome and was achieved, a notable result for a Korean PE default dispute.",
        "[NPS political weight] NPS's ₩350B was effectively national pension capital, and its political weight pressured the eventual settlement. The intra-group SK Planet transaction can be read as SK Group signaling that [a National Pension Service loss is not an acceptable outcome].",
      ],
    },
    seller: {
      title: "SK Square: Why Waive the Call Option, the Arithmetic of Default",
      initials: "SKS",
      bg: "bg-red-600",
      points: [
        "[Exercising the call would have locked in ~₩400B of accounting loss immediately] Paying ~₩600B against an 11st standalone value of ~₩1T meant SK Square would book ~₩400B of immediate accounting loss against its own equity and credit profile. The hit would have materially impaired SK Square's stand-alone balance sheet and credit metrics.",
        "[The \"exercising the call would itself be a breach of fiduciary duty\" reverse logic] SK Square's board cited the legal view that [repurchasing a subsidiary stake at a guaranteed premium when its equity value has halved would itself impair shareholder value, i.e., constitute a breach of fiduciary duty]. That reverse-logic argument provided the legal cover for the [strategic default].",
        "[Drag-along waterfall arithmetic] Under the waterfall structure of a drag-along forced sale, the FIs are paid first; the parent receives only residual proceeds. With a sale price below ~₩1T, SK Square's residual recovery approached zero, but unlike exercising the call, there was no immediate ₩400B cash outflow. The [strategic default] traded accounting and reputational damage for cash preservation.",
        "[2025 SK Planet acquisition diffused the burden inside the group] Rather than absorbing the loss at the SK Square level or selling externally at a deep discount, SK Square transferred 11st to its subsidiary SK Planet. The transaction satisfied [FI principal recovery + minimized direct P&L impact at SK Square] simultaneously, but at the cost of relocating the burden inside the group.",
        "[Unintended industry-wide consequence: Korean PE standard reset] SK Square's individual decision optimized for transaction-level loss minimization, but the systemic effect was the collapse of the [chaebol parent guarantee = automatic enforcement] assumption. Subsequent Korean PE deals involving SK, Lotte, CJ, or Shinsegae subsidiaries now require [cash escrow, parent guarantee, or put option priority] negotiations as standard.",
      ],
    },
  },

  controlBattleOverview: {
    body: "This was not a conventional control contest, but the [attack (FI drag-along + market/political pressure) vs. defense (SK Square call option waiver + intra-group settlement)] dynamic operated for seven years. The weapons were not equity blocs but [SHA clauses, waterfall distribution, and intra-group capital reallocation]. The verdict is layered and resists a single winner.",
    catalyst: "September 2023 expiration of the 5-year IPO covenant + November 29, 2023 SK Square board resolution to formally waive the call option. The ignition point of the first deliberate default on a Korean conglomerate's PE buyback guarantee.",
    attackerLabel: "H&Q AP · NPS · KFCC (Naeil Holdings FI Consortium)",
    defenderLabel: "SK Square (Call Option Obligor + 80.26% 11st Parent)",
    battleMoves: [
      {
        date: "2018-09",
        actor: "H&Q AP · NPS · KFCC",
        side: "attack",
        move: "Naeil Holdings ₩500B 11st investment → 18.18% stake + call/drag rights",
        detail: "H&Q AP formed Naeil Holdings with NPS (₩350B) and KFCC (₩50B), investing ₩500B for an 18.18% stake. The SHA included a 5-year IPO covenant with SK Telecom's call obligation on failure plus the FIs' drag-along right, an asymmetric structure. Entry equity value ~₩2.7T.",
        weapon: "SHA call+drag asymmetric rights",
        financialImpact: "FI ₩500B in, SK ₩500B capital raised",
      },
      {
        date: "2023-09",
        actor: "11st / market environment",
        side: "neutral",
        move: "5-year IPO covenant lapses → call obligation triggered",
        detail: "Coupang's US IPO compressed Korean e-commerce valuations, Aliexpress / Temu entered aggressively, and 11st's accumulated operating losses placed the company outside any viable IPO window. The SHA call obligation on SK Square was triggered.",
        weapon: "SHA covenant expiration",
      },
      {
        date: "2023-11-29",
        actor: "SK Square board",
        side: "defense",
        move: "Call option formally waived — first strategic default of a Korean conglomerate guarantee",
        detail: "The SK Square board formally resolved [not to exercise the 11st FI call option]. Exercising would have required ~₩600B immediate cash outflow and locked in ~₩400B of immediate accounting loss. The board cited the reverse-logic argument that [exercising would itself be a breach of fiduciary duty] to establish the legal cover for [strategic default].",
        weapon: "Board resolution + breach-of-fiduciary-duty reverse logic",
        financialImpact: "Zero immediate cash outflow for SK Square; permanent loss of Korean PE market trust",
      },
      {
        date: "2023-12",
        actor: "H&Q AP · NPS",
        side: "attack",
        move: "Drag-along triggered → 100% forced sale of 11st initiated",
        detail: "Within weeks of the call option waiver, the FIs triggered the drag-along to compel a sale of 100% of 11st (FI 18.18% + SK Square 80.26%). SK Square was pulled into the sale process against its will.",
        weapon: "Drag-along (forced co-sale right)",
      },
      {
        date: "2024-02",
        actor: "Qoo10 (lead bidder)",
        side: "neutral",
        move: "Qoo10 negotiations collapse — first sale attempt fails",
        detail: "Qoo10, the most likely buyer, collapsed its negotiations over its own liquidity crisis and a price gap. Estimated 11st transaction values dropped to ~₩500B, roughly 18% of the original ~₩2.7T entry value.",
        financialImpact: "11st market estimate collapsed by ~50%",
      },
      {
        date: "2024~2025",
        actor: "Alibaba International and others",
        side: "neutral",
        move: "Alibaba and domestic PEs surface as bidders, but valuation discount confirmed",
        detail: "Alibaba International, several Korean PEs, and strategic acquirers surfaced. SK Square refused to consent to the offered prices, citing the residual-zero outcome under the waterfall. The sale dragged for another year.",
      },
      {
        date: "2025-10-29",
        actor: "SK Square → SK Planet",
        side: "defense",
        move: "Intra-group settlement — SK Planet acquires 100% of 11st, pays FIs ~₩467.3B",
        detail: "SK Square sold its full 11st stake to wholly owned subsidiary SK Planet, which paid the FIs ~₩467.3B in a lump sum. Combined with ~₩60B in prior dividends, FI principal of ₩500B was fully recovered. The two-year dispute was settled via [intra-group capital reallocation + minimum acceptable FI recovery].",
        weapon: "Intra-group capital reallocation",
        financialImpact: "FI principal recovered; SK Square direct loss diffused inside the group",
      },
    ],
    financialWeapons: [
      {
        name: "SHA Call Option (SK Square Obligation)",
        side: "defense",
        usedBy: "SK Square (waived)",
        description: "On IPO failure, SK Square was obligated to repurchase the FI stake at principal plus guaranteed IRR. Exercising would have required ~₩600B immediate payment and locked in ~₩400B of accounting loss. SK Square repurposed it as a [strategic default weapon] by formally waiving, the first such case in Korean PE history.",
        effectiveness: "blocked",
      },
      {
        name: "Drag-Along (FI Right)",
        side: "attack",
        usedBy: "H&Q AP · NPS · KFCC",
        description: "FIs' right to force the sale of 100% of 11st including the parent's stake. Triggered immediately after the call waiver, it pulled SK Square into a forced-sale process. Even after Qoo10 collapsed, the drag-along's persistent threat compelled the eventual intra-group settlement.",
        effectiveness: "effective",
      },
      {
        name: "Waterfall Distribution Mechanic",
        side: "attack",
        usedBy: "H&Q AP",
        description: "In a drag-along forced sale, FIs are paid first; the parent receives only residual proceeds. At sale prices below ~₩1T, SK Square's residual approached zero, applying arithmetic pressure that ultimately pushed SK Square into an intra-group resolution.",
        effectiveness: "effective",
      },
      {
        name: "Intra-Group Capital Reallocation (SK Planet Acquisition)",
        side: "defense",
        usedBy: "SK Square",
        description: "Rather than realizing the loss at SK Square or selling externally at a deep discount, SK Square transferred 11st to subsidiary SK Planet. The mechanism simultaneously satisfied [FI principal recovery + minimized direct SK Square P&L impact + prevented external capital loss]. Market view: [intra-group burden diffusion rather than true settlement].",
        effectiveness: "effective",
      },
      {
        name: "National Pension Service political weight",
        side: "attack",
        usedBy: "NPS",
        description: "NPS's ₩350B contribution carried the political weight of [Korean national pension capital]. Not an explicit weapon, but it pressured the eventual intra-group settlement by signaling that [a National Pension Service loss is not politically acceptable].",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2023-11-29",
      event: "SK Square board formally waives the 11st call option",
      detail: "The decisive inflection of the seven-year arc. It was the first time a Korean conglomerate parent had deliberately failed to honor a PE buyback covenant, and it transformed the case from [an individual dispute] into [the inflection point for the Korean PE market standard]. Every subsequent Korean PE deal involving a chaebol parent now requires [cash escrow, parent guarantee, or put option priority] as standard.",
    },
    verdict: {
      winner: "draw",
      winnerLabel: "FI principal recovered + SK Square direct loss minimized — layered settlement",
      margin: "FI: ₩500B principal recovered, ~3.5% IRR floor unrecovered · SK Square: ~₩600B immediate cash outflow avoided, burden diffused inside group · Korean PE market: permanent loss of guarantee trust",
      note: "No single winner. The FIs preserved principal but lost their IRR floor. SK Square avoided the immediate cash hit but absorbed market-trust damage and intra-group reallocation burden. The Korean PE market is left with the permanent standard that [a guarantee alone is not sufficient].",
    },
    priceImpact: {
      preContest: "Entry equity value ~₩2.7T (Sep 2018)",
      peak: "Market-estimated value ~₩1T (2023, just before call waiver)",
      postContest: "Forced-sale estimated price ~₩500B range (2024 Qoo10 negotiations / 2025 SK Planet acquisition)",
      note: "Equity value collapsed to roughly 18% of entry value over seven years. FIs recovered principal only; the IRR floor was not recovered. The collapse reflects 11st's structural losses and the broader Korean e-commerce reset.",
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The October 29, 2025 SK Planet acquisition closed the seven-year arc [on the surface]. The structural consequences extend far beyond the individual transaction. The market assumption that [chaebol parent creditworthiness = automatic guarantee enforcement] has been broken decisively. Every subsequent PE financing of an SK, Lotte, CJ, or Shinsegae subsidiary now centers on [escrow, parent guarantee, put option priority]. 11st itself has been absorbed into SK Planet as the group's integrated e-commerce vehicle, but business recovery remains uncertain under Aliexpress / Temu pressure. As of May 2026, the consensus reading of this case is solidifying as [the end of Korea's guarantee-driven PE era and the start of a new standard].",
    overallVerdict: "Surface settlement + permanent loss of market trust; layered FI principal recovery outcome",
    positives: [
      "[FI] Principal of ₩500B fully recovered, the minimum acceptable outcome for a Korean PE default dispute. NPS's ₩350B loss scenario was averted",
      "[SK Square] Avoided ~₩600B immediate cash outflow, minimized direct P&L impact. Burden diffused via intra-group capital reallocation",
      "[Korean PE market] Definitive end of the guarantee-only era; FI-favorable standard now established. Permanent rebalancing of negotiating power across all subsequent chaebol PE deals",
      "[Group governance] 11st absorbed into SK Planet, creating a starting point for SK Group's integrated e-commerce and platform asset restructuring",
    ],
    risks: [
      "[Korean PE market trust permanently impaired] The implicit equation [chaebol parent guarantee = automatic enforcement] is broken; future financing costs are higher across the board. SK, Lotte, CJ, and Shinsegae subsidiaries will find PE capital harder and more expensive to raise",
      "[NPS IRR opportunity cost] ₩350B locked up for five years without the guaranteed-IRR recovery represents real opportunity cost for national pension capital. Likely pressure for NPS to become more conservative on private equity",
      "[SK Planet transaction-price fairness debate] The intra-group transfer pricing has not been fully disclosed; depending on the figure, SK Planet LP or minority shareholders may bear a hidden burden. Public disclosure is limited",
      "[11st business recovery uncertain] Even within SK Planet, 11st faces ongoing Aliexpress / Temu pressure, Coupang's dominance, and Naver Smart Store's share absorption. Additional restructuring, business-unit sales, or even spin-off scenarios remain possible",
      "[Residual breach-of-duty risk] The SK Square board's call-option waiver remains potentially exposed to shareholder-derivative suits and NPS damages claims. Some residual legal risk remains",
    ],
    editorNote:
      "The real significance of this case is not the [11st sale price] headline number, but the case-study answer to the question [how did Korea's guarantee-driven PE era end?]. In 2018, the Korean market priced the probability of [a top-tier chaebol parent defaulting on a buyback covenant] at essentially zero. A single board resolution on November 29, 2023 reset that assumption permanently. After this case, every Korean PE deal involving a chaebol subsidiary uses [cash escrow, put option priority, or parent guarantee] negotiations as the default. SK Square optimized for ~₩600B in immediate cash preservation, but the systemic cost, [higher financing costs across the entire Korean PE-to-chaebol ecosystem], was diffused to the broader market as a negative externality. Reviewed as of May 2026.",
  },

  tombstone: {
    acquirerInitials: "SKS",
    acquirerBg: "bg-red-600",
    targetInitials: "11ST",
    targetBg: "bg-orange-500",
    acquirerName: "SK Square Co., Ltd. (Call Option Obligor) · H&Q AP Korea / NPS / KFCC (FI Consortium)",
    targetName: "11st Co., Ltd. (Naeil Holdings 18.18% + SK Square 80.26%)",
    dealTitle: "First Strategic Default of a Korean Conglomerate's PE Buyback Guarantee, Resolved by 2025 Intra-Group Sale to SK Planet",
    dealSize: "Call obligation waived ~₩600B · FI recovery ~₩467.3B (Oct 2025 SK Planet purchase)",
    dealSizeUSD: "approx. USD 330M (FI recovery)",
    evEbitda: "N/A (Default · Forced Sale)",
    closeDate: "Oct 29, 2025",
  },

  sources: [
    { id: 1, text: "Korea Economic Daily, SK effectively waives 11st management control (Nov 29, 2023)", url: "https://www.hankyung.com/article/2023112922431" },
    { id: 2, text: "Dealsite, SK Square waives ₩500B 11st call option (Nov 29, 2023)", url: "https://dealsite.co.kr/articles/113888" },
    { id: 3, text: "Investchosun, SK 11st call option waiver, FI-led sale becomes reality (Nov 29, 2023)", url: "http://www.investchosun.com/site/data/html_dir/2023/11/29/2023112980254.html" },
    { id: 4, text: "Dealsite, H&Q's 11st investment, the sad ending", url: "https://dealsite.co.kr/articles/113943" },
    { id: 5, text: "ZDNet Korea, 11st forced sale begins, SK Square waives call option (Nov 29, 2023)", url: "https://zdnet.co.kr/view/?no=20231129160941" },
    { id: 6, text: "Korea Economic Daily, 11st forced sale without SK, value halved (Jan 2024)", url: "https://www.hankyung.com/article/2024010898361" },
    { id: 7, text: "Korea Herald, Qoo10 walks away from 11th Street stake sale deal", url: "https://m.koreaherald.com/article/3262502" },
    { id: 8, text: "Dealsite, Seven years with 11st, the NPS-H&Q bromance", url: "https://dealsite.co.kr/articles/150553" },
    { id: 9, text: "Investchosun, SK Square sells 11st management to SK Planet, FI investment fully repaid (Oct 29, 2025)", url: "https://www.investchosun.com/site/data/html_dir/2025/10/29/2025102980217.html" },
    { id: 10, text: "Byline Network, 11st 2024 operating loss ₩75.4B (Feb 25, 2025)", url: "https://byline.network/2025/02/25_11st/" },
    { id: 11, text: "Businesskorea, Angry 11st Investors Demand SK Group Resolve Repayment Issue Before October", url: "https://www.businesskorea.co.kr/news/articleView.html?idxno=247779" },
  ],

  seo: {
    title: "SK Square × 11st Call Option Default, Korea's First Strategic Default on a PE Buyback Guarantee",
    description:
      "In 2018, H&Q AP's Naeil Holdings invested ₩500B in 11st under a 5-year IPO covenant, on failure, SK Telecom (→ SK Square) was obligated to buy back the stake via call option while FIs held a drag-along to force a 100% sale. The September 2023 deadline lapsed, and on November 29, 2023 the SK Square board formally waived the call option, the first strategic default of a Korean conglomerate's PE buyback guarantee. After two years of drag-along forced-sale stalemate, the October 2025 intra-group sale to SK Planet recovered FI principal. The inflection point that reset Korean PE market standards.",
    keywords: [
      "SK Square 11st",
      "11st call option",
      "H&Q Naeil Holdings",
      "Korean PE default",
      "strategic default",
      "drag-along",
      "IPO covenant",
      "NPS 11st",
      "11st sale",
      "SK Planet 11st",
      "Korean PE buyback guarantee",
      "e-commerce PE",
    ],
  },

  concepts: [
    {
      term: "Call Option (parent's right to repurchase)",
      description: "In this deal, SK Telecom (→ SK Square) had the right (and obligation, on IPO failure) to repurchase the FI stake at principal plus guaranteed IRR. The mirror image of a typical GP put option, this is an issuer-favorable structure. SK Square's [waiver] of this call option is the trigger event of the case.",
    },
    {
      term: "Put Option (FI's right to put back)",
      description: "An FI's right to require the parent to repurchase its shares. The standard Korean PE protection. In the 11st deal, FIs accepted a call+drag structure instead of a put, the key structural concession that defined the dispute. Post this case, Korean PE deals now negotiate put-option priority as standard.",
    },
    {
      term: "Drag-Along (Forced Co-Sale Right)",
      description: "An FI's right to force the sale of 100% of the company including the parent's stake. Triggered by H&Q AP immediately after SK Square's call option waiver, this became the legal basis for the forced sale of 11st. The FIs' [backup weapon] when the call option failed.",
    },
    {
      term: "Guaranteed IRR (Internal Rate of Return)",
      description: "The minimum annualized return the parent promises to the FI. In this deal, ~3.5% (market observation). On call option exercise, the parent would owe principal plus accrued IRR, ~₩600B total. SK Square's refusal to honor this calculation triggered the first strategic default of its kind in Korean PE.",
    },
    {
      term: "Strategic Default",
      description: "A decision not to honor a contractual obligation despite the financial and legal capacity to do so, made because honoring it is more expensive than not. SK Square chose strategic default because exercising the call would have meant ~₩600B immediate outflow and ~₩400B locked-in loss. The board's [exercising would itself be breach of fiduciary duty] reverse logic provided the legal cover.",
    },
    {
      term: "Waterfall Distribution",
      description: "In a drag-along or forced-sale process, proceeds are distributed in tiers: FI principal and interest first, parent receives residual. The lower the sale price, the more the parent's residual approaches zero. This mechanic was the arithmetic pressure that pushed SK Square toward intra-group settlement.",
    },
    {
      term: "IPO Covenant",
      description: "A contractual undertaking by an issuer to complete an IPO within a specified period of a PE investment. In this deal, [IPO within five years]. On failure, various recovery rights (call, put, drag-along) are triggered. The 11st case is the canonical Korean example of an IPO covenant failure cascading into a buyback-guarantee default.",
    },
    {
      term: "SPC / Naeil Holdings",
      description: "The special-purpose company H&Q AP formed with NPS and KFCC to consolidate their 11st investment. The standard PE structure when multiple LPs co-invest through a single vehicle. Nearly all the disputes and negotiations in this case were carried out under the [Naeil Holdings] entity name.",
    },
  ],

  faq: [
    {
      q: "Why did SK Square choose to [waive] rather than [exercise] the call option?",
      a: "Exercising would have required paying [principal ₩500B + ~3.5% IRR over 5 years ≈ ₩600B] in cash to the FIs immediately. But 11st's 2023 estimated market value was only ~₩1T, less than half of the ~₩2.7T entry value. After exercising, SK Square would hold 100% of 11st valued at ~₩1T, locking in ~₩400B of immediate accounting loss against its own equity. The SK Square board took the legal view that [repurchasing a subsidiary stake at a guaranteed premium when its value has halved would itself impair shareholder value, i.e., constitute breach of fiduciary duty], using that reverse-logic argument as legal cover for [strategic default]. The first such case in Korean PE.",
    },
    {
      q: "Why did H&Q AP accept a call+drag structure instead of demanding a put option upfront?",
      a: "In 2018, the Korean PE market priced the scenario of [a top-tier chaebol parent defaulting on a buyback covenant] at essentially zero. SK Telecom successfully negotiated against put-option terms during the entry phase, and the FIs accepted the [drag-along] as a backup weapon instead. That trade-off, originally an issuer-favorable concession, ultimately became the FIs' core tool to force the 2025 SK Planet settlement. The drag-along proved sufficient to compel resolution, even though the IRR floor was ultimately lost.",
    },
    {
      q: "Is NPS's ₩350B a loss or a recovery?",
      a: "In principal terms, a [recovery]. The October 2025 SK Planet transaction paid the FIs ~₩467.3B in a lump sum, plus ~₩60B in prior dividends, total ~₩527.3B. NPS recovered its principal share (~₩350B / ~₩500B basis). In [opportunity-cost terms], it is a loss. The ~3.5% IRR floor was not honored, and ₩350B was locked up for seven years without the guaranteed compound return. Politically and industrially, the case will be cited as [an event that shook trust in private-equity investment of pension capital].",
    },
    {
      q: "Why did external sales fail for two years before the intra-group SK Planet resolution?",
      a: "Three reasons aligned. First, 11st's market value had dropped to less than half of the entry valuation, prices that [SK Square refused to consent to]. Second, Qoo10, the lead bidder, collapsed its negotiation in February 2024 over its own liquidity crisis, and Alibaba and others pushed the price lower. Third, under the waterfall distribution, sale prices below ~₩1T would leave SK Square's residual recovery near zero, eliminating [any incentive for SK Square to consent to an external sale]. The eventual solution was [intra-group capital reallocation], where SK Planet absorbed 11st. The intra-group route preserved external capital but [diffused the burden inside the group] rather than fully resolving it.",
    },
    {
      q: "What did this case leave behind in the Korean PE market?",
      a: "Three large structural changes. First, the long-standing assumption that [conglomerate parent creditworthiness = automatic guarantee enforcement] has been broken. Second, every subsequent Korean PE deal involving a chaebol subsidiary now requires [cash escrow, parent guarantee, or put option priority] as standard negotiation terms. Third, financing costs for SK, Lotte, CJ, and Shinsegae subsidiary PE rounds have risen across the board. A single transaction-level default permanently rebalanced industry-wide negotiating power toward [FI-favorable], an inflection point that can fairly be called [the end of Korea's guarantee-driven PE era].",
    },
    {
      q: "What happens to 11st under SK Planet?",
      a: "11st is being integrated into SK Planet as the group's e-commerce and platform consolidation vehicle. SK Planet holds OK Cashbag, SK Pay, and Syrup, group-wide digital assets, creating potential synergy across [data + payment + membership + e-commerce]. Business recovery remains uncertain, however, against Aliexpress / Temu's direct-import penetration, Coupang's dominance, and Naver Smart Store's share absorption. Further restructuring, business-unit sales, or full e-commerce-unit spin-off scenarios continue to be discussed in the market. Whether [SK Planet integration is the starting point of recovery or the final card] is the central question for 2026~2027.",
    },
  ],
};

export default deal;
