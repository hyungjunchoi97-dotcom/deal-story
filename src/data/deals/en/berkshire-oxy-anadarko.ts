/**
 * Berkshire Hathaway × Occidental Petroleum white-knight financing
 * for the Anadarko acquisition (April-August 2019)
 * $10B perpetual preferred + 80M warrants, the deciding move
 * in the bidding war against Chevron.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "berkshire-oxy-anadarko",
  title: "Buffett's $10 Billion Check, How Berkshire's White-Knight Financing Pulled Anadarko from Chevron to Occidental",
  subtitle:
    "8% perpetual preferred $10B + 80M warrants at $62.50 · Funding behind Occidental's $55B Anadarko acquisition · The single instrument that walked Chevron out of the bidding war",
  category: "ma",
  industry: "Energy / Oil & Gas / Permian",
  country: "USA",
  announcedAt: "2019-04-30",
  closedAt: "2019-08-08",
  announcedDisplay: "Apr 30, 2019 (Berkshire $10B preferred commitment)",
  closedDisplay: "Aug 8, 2019 (OXY-Anadarko closing)",
  readingMinutes: 16,
  tags: [
    "Berkshire Hathaway",
    "Occidental Petroleum",
    "Anadarko",
    "White Knight",
    "Perpetual Preferred",
    "Warrants",
    "Chevron",
    "Permian Basin",
    "Vicki Hollub",
    "Warren Buffett",
    "Carl Icahn",
    "Energy M&A",
  ],
  excerpt:
    "On April 12, 2019, Chevron agreed to acquire Anadarko Petroleum at $65 per share for roughly $33B in equity value. Twelve days later, Occidental Petroleum (OXY) topped the bid at $76 per share, around $38B in equity value and ~$55B including assumed debt. The problem was funding: OXY's market cap was a quarter of Chevron's, and its higher cash component required roughly $20B of fresh capital. CEO Vicki Hollub flew to Omaha and, per market reporting, walked out of an [85-minute meeting] with Warren Buffett carrying a $10B commitment, an 8% perpetual preferred plus warrants on 80 million OXY common shares at a strike of $62.50. That single commitment is what made Chevron step away from the bidding war on May 9 and, six years later, became the foundation of Berkshire's roughly [28% common-stock position] in Occidental.",

  acquirer: { initials: "OXY", bg: "bg-red-700", label: "Occidental Petroleum (white-knight funding: Berkshire Hathaway)" },
  target: { initials: "APC", bg: "bg-blue-800", label: "Anadarko Petroleum Corporation" },

  background: [
    "[Apr 12, 2019, Chevron's opening move.] Chevron Corporation, led by CEO Mike Wirth, announced an agreement to acquire Anadarko Petroleum at $65 per share (~75% stock, 25% cash) for total deal value of roughly $33B in equity, or ~$50B including assumed debt. The transaction would have absorbed Anadarko's [Permian shale + deepwater Gulf of Mexico + Algerian and Mozambique LNG] portfolio in one step, giving Chevron decisive scale against ExxonMobil in the Permian.",
    "[Apr 24, 2019, OXY's counter-bid.] Occidental Petroleum, under CEO Vicki Hollub, returned with $76 per share (~50% cash, 50% stock), a ~17% premium to Chevron. But OXY's market cap was ~$50B vs. Chevron's ~$230B, classic David-vs-Goliath geometry, and the higher cash component required roughly $20B of external capital. Without funding certainty, the counter-bid was rhetorical.",
    "[Apr 28-29, 2019, the Omaha meeting.] Hollub flew to Omaha to see Warren Buffett. Per market reports, after an [85-minute meeting] Buffett priced the deal on the spot, $10B in [8% perpetual preferred + warrants on 80 million OXY common shares at $62.50]. No acquisition financing syndication, no third-party LP capital, the entire commitment came straight out of Berkshire's insurance float. That single commitment, more than the counter-bid itself, is what won the bidding war.",
    "[Apr 30 commitment filed, May 9 Anadarko switches recommendation.] OXY disclosed the Berkshire commitment on April 30, eliminating funding uncertainty in one stroke. On May 9, the Anadarko board formally determined that the OXY $76 bid constituted a [\"Superior Proposal\"] and changed its recommendation from Chevron to OXY. Chevron, on the same day, accepted the $1B reverse termination fee and exited the bidding war, with Wirth's [\"value discipline\"] line drawing positive market reception.",
    "[Aug 8, 2019, closing.] OXY closed the Anadarko acquisition at $76 per share, ~$38B equity value or ~$55B including assumed debt. The Berkshire preferred and warrants became effective on the same day. Simultaneously, OXY closed an [~$8.8B sale of Anadarko's African assets to Total SA] to partially offset the debt load. Even so, OXY's net debt / EBITDA at close ran to roughly 5x, a leverage profile that would become brutally relevant during the 2020 COVID oil-price collapse.",
  ],

  dealSummary: {
    dealValueDisplay: "OXY × Anadarko ~$55B (incl. debt) · Berkshire $10B perpetual preferred + 80M warrants",
    acquirerName: "Occidental Petroleum (white-knight funding: Berkshire Hathaway)",
    targetName: "Anadarko Petroleum Corporation",
    announcedDisplay: "Apr 30, 2019 (Berkshire commitment)",
    closedDisplay: "Aug 8, 2019 (OXY-Anadarko closing)",
    country: "USA",
  },

  executiveSummary: [
    "[Chevron's opening bid] Apr 12, 2019: Chevron agreed to acquire Anadarko at $65/share (~75% stock, 25% cash), ~$33B equity value and ~$50B including debt.",
    "[OXY's counter-bid] Apr 24, 2019: Occidental countered at $76/share (~50% cash, 50% stock), a ~17% premium. The cash component required roughly $20B of external capital, leaving funding as the central uncertainty.",
    "[Berkshire's white-knight financing] Apr 30, 2019: Warren Buffett committed [$10B in perpetual preferred at an 8% cash dividend (9% PIK if unpaid) plus warrants on 80 million OXY common shares at $62.50]. Reported to have been decided in a single 85-minute meeting in Omaha.",
    "[Chevron exits] May 9, 2019: The Anadarko board declared the OXY bid a [Superior Proposal]. Chevron collected the [$1B reverse termination fee] the same day and walked away. Mike Wirth's [\"value discipline\"] framing drew positive market reception.",
    "[Closing] Aug 8, 2019: OXY-Anadarko closed. Total deal value ~$55B including debt. OXY simultaneously sold Anadarko's African assets to Total SA for ~$8.8B to partially offset leverage.",
    "[Berkshire's economics] Annual preferred cash coupon of $800M (8% of $10B), plus optionality on 80M warrants. The preferred is [junior to debt, senior to common] and callable by OXY only after 10 years (after Apr 2029), functionally perpetual.",
    "[Carl Icahn's activism] OXY deliberately structured the cash component to stay [below the NYSE 20% shareholder-vote threshold], avoiding a shareholder vote. Icahn accumulated 10%+ and ran proxy pressure from 2019 into 2022, eventually exiting his position.",
    "[COVID shock and Buffett's accumulation] 2020 oil-price collapse drove OXY shares from $40s into the $10s. OXY's debt covenants forced it to [pay part of the Berkshire preferred dividend in OXY common shares (PIK)] instead of cash. From 2022 Buffett aggressively bought OXY common in the open market; by 2024 Berkshire held roughly [28% of OXY common] (separate from the warrants), an effective anchor stake.",
  ],

  industryOverview: {
    body: "The defining theme of US shale in 2019 was [Permian Basin consolidation]. Spanning West Texas and southeastern New Mexico, the Permian accounts for roughly 30% of US crude production, and the 2015-2018 shale revolution drove drilling-cost compression that attracted every major to the basin. By April 2019, ExxonMobil and Chevron were leading the integrated-major push, with the independent E&Ps either being absorbed or scaling up themselves. Anadarko sat among the top five US independents with an attractive triangle of [Permian + Gulf of Mexico deepwater + Algeria and Mozambique LNG]. Occidental was the most Permian-concentrated of the integrated independents, a [Permian pure play] for whom Anadarko would [double Permian production and grow shale reserves ~70%].",
    metrics: [
      { label: "OXY market cap (Apr 2019)",         value: "~$50B",        sub: "Under CEO Vicki Hollub" },
      { label: "Chevron market cap (Apr 2019)",      value: "~$230B",       sub: "~4.6x OXY" },
      { label: "Anadarko market cap (pre-news)",     value: "~$23B",        sub: "~$46/share" },
      { label: "Permian share of US crude (2019)",   value: "~30%",         sub: "Largest single US basin" },
    ],
    subBody:
      "OXY-Anadarko is one of the rare US energy deals where [white-knight financing], [Permian consolidation], and [asymmetric size, David vs. Goliath] converged in a single transaction. The 2023-2024 mega-deals, ExxonMobil-Pioneer ($65B) and Chevron-Hess ($53B), have since cemented the view that the 2019 OXY-Anadarko transaction was [the opening move of the Permian consolidation cycle].",
    players: [
      { name: "Occidental Petroleum (OXY)", role: "Acquirer, Permian pure-play major, CEO Vicki Hollub" },
      { name: "Anadarko Petroleum",         role: "Target, top-5 US independent E&P with Permian, GoM, and international LNG portfolio" },
      { name: "Chevron",                    role: "Original bidder, agreed at $65 on Apr 12, exited on May 9" },
      { name: "Berkshire Hathaway",         role: "White-knight financier, $10B perpetual preferred plus 80M warrants" },
      { name: "ExxonMobil",                 role: "Chevron's main Permian competitor, not a deal party but a structural driver" },
      { name: "Carl Icahn",                 role: "OXY activist, opposed the no-vote structure with 10%+ stake and proxy pressure (2019-2022)" },
      { name: "Total SA (TotalEnergies)",   role: "Buyer of Anadarko's African assets from OXY for ~$8.8B at closing" },
    ],
  },

  companyOverview: {
    targetName: "Anadarko Petroleum Corporation",
    body: "Anadarko Petroleum Corporation was founded in 1959, headquartered in The Woodlands, Texas, and counted among the top five US independent exploration-and-production companies at the time of the transaction. As of 2019, average daily production ran at roughly 700,000 BOE/day with reserves of ~1.5 billion BOE. Three portfolio pillars: [① Permian Basin shale (Delaware and Midland sub-basins)], [② Gulf of Mexico deepwater production], and [③ Algerian and Mozambique LNG projects], with the Mozambique LNG asset being one of the most-watched global gas projects of the late 2010s. Occidental sold the African package, Mozambique, Algeria, Ghana, South Africa, to Total SA at deal close, leaving the post-deal entity focused on US Permian production.",
    metrics: [
      { label: "Founded",              value: "1959",          sub: "Houston, Texas" },
      { label: "Headquarters",         value: "The Woodlands, TX" },
      { label: "FY2018 revenue",       value: "~$13.0B",       sub: "+34% YoY (oil price recovery)" },
      { label: "FY2018 production",    value: "~700,000 BOE/d", sub: "Permian + GoM + international" },
    ],
    financials: [
      { year: "FY2014", revenue: 18470, cogs: 10500, grossProfit: 7970,  sga: 1280, operatingIncome: -1750, ebitda: 6900 },
      { year: "FY2015", revenue: 8700,  cogs: 5400,  grossProfit: 3300,  sga: 1180, operatingIncome: -6300, ebitda: 2600 },
      { year: "FY2016", revenue: 7870,  cogs: 4900,  grossProfit: 2970,  sga: 1050, operatingIncome: -3030, ebitda: 2400 },
      { year: "FY2017", revenue: 9700,  cogs: 5600,  grossProfit: 4100,  sga: 1150, operatingIncome: -650,  ebitda: 4200 },
      { year: "FY2018", revenue: 13000, cogs: 6800,  grossProfit: 6200,  sga: 1230, operatingIncome: 2480,  ebitda: 6800 },
    ],
    financialsNote: "Unit: USD millions | US GAAP | Source: Anadarko 10-K (FY2014~2018). Operating losses in FY2014-2017 reflect the oil-price collapse and asset impairments.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  controlBattleOverview: {
    body: "The OXY-Anadarko transaction is, in essence, a [Chevron (incumbent) vs. OXY + Berkshire (challenger)] bidding war. Unlike a classic hostile contest, neither side ran a proxy fight against the Anadarko board, the contest was a [friendly auction] in which each side tried to be the better-priced offer the board could recommend. The real turning point was Buffett's $10B commitment on April 30, once funding certainty was visible, Chevron walked.",
    catalyst:
      "Chevron's April 12, 2019 announcement of a $65-per-share deal for Anadarko (~$33B equity, ~$50B including debt) opened the auction. OXY's $76 counter-bid arrived twelve days later, and the funding gap was closed by Warren Buffett's $10B white-knight commitment on April 30, which is what tipped the contest.",
    attackerLabel: "Occidental Petroleum + Berkshire Hathaway",
    defenderLabel: "Chevron (incumbent bidder)",
    battleMoves: [
      {
        date: "2019-04-12",
        side: "defense",
        actor: "Chevron",
        move: "Initial bid for Anadarko, $65/share, ~$33B equity / ~$50B incl. debt",
        detail:
          "Chevron CEO Mike Wirth announced an agreement to acquire Anadarko at $65/share, ~75% stock and 25% cash, total deal value ~$50B including debt. The transaction would have absorbed Anadarko's Permian, deepwater, and LNG portfolios in one move and tipped the Chevron-Exxon Permian race decisively.",
        weapon: "Stock-heavy strategic bid",
        financialImpact: "Anadarko +32%, Chevron -5% on announcement",
      },
      {
        date: "2019-04-24",
        side: "attack",
        actor: "Occidental Petroleum",
        move: "Counter-bid at $76/share (~50% cash), ~$38B equity / ~$55B incl. debt",
        detail:
          "Vicki Hollub's OXY came in at $76, a 17% premium with the cash component roughly doubled vs. Chevron. The structural problem: OXY's market cap was a quarter of Chevron's, and ~$20B of external funding was required to honor the cash leg.",
        weapon: "Topping bid with elevated cash component",
        financialImpact: "OXY -6%, Anadarko +12%",
      },
      {
        date: "2019-04-30",
        side: "attack",
        actor: "Berkshire Hathaway (white knight)",
        move: "$10B perpetual preferred + 80M warrants commitment filed",
        detail:
          "After an [85-minute meeting] in Omaha, Buffett committed $10B in [8% perpetual preferred plus warrants on 80M OXY common at $62.50]. No syndication, no LP capital, entire commitment drawn from Berkshire's insurance float. Funding uncertainty collapsed in a single filing, and OXY's bid became credibly executable.",
        weapon: "Perpetual preferred + warrants (white-knight financing)",
        financialImpact: "OXY-bid certainty repriced sharply higher",
      },
      {
        date: "2019-05-09",
        side: "attack",
        actor: "Anadarko Board",
        move: "Recommendation switched from Chevron to OXY (Superior Proposal)",
        detail:
          "The Anadarko board formally declared OXY's $76 bid a [Superior Proposal] and switched its recommendation. Chevron, on the same day, accepted the [$1B reverse termination fee] and exited the bidding war. Mike Wirth's [\"value discipline\"] framing was well-received by the market.",
        weapon: "Recommendation switch + Reverse Termination Fee",
        financialImpact: "Chevron +3% (positive reception), OXY -8% (leverage concerns)",
      },
      {
        date: "2019-05~07",
        side: "neutral",
        actor: "Carl Icahn",
        move: "Accumulated 10%+ OXY stake, threatened proxy fight over no-vote structure",
        detail:
          "OXY had deliberately structured the cash component to keep new-share issuance under the NYSE 20% shareholder-vote threshold, avoiding a shareholder vote on a $55B deal. Icahn called this a violation of shareholder rights, accumulated 10%+ of OXY, and threatened a board contest, which ran from 2020 into 2022.",
        weapon: "Activist accumulation + proxy threat",
        financialImpact: "OXY governance discount intensified",
      },
      {
        date: "2019-08-08",
        side: "attack",
        actor: "Occidental Petroleum",
        move: "OXY-Anadarko closes; simultaneous $8.8B sale of African assets to Total SA",
        detail:
          "OXY closed the acquisition at $76/share, ~$38B equity, ~$55B incl. debt. The Berkshire preferred and warrants became effective on the same day. To partially offset leverage, OXY sold Anadarko's African assets, Mozambique, Algeria, Ghana, South Africa, to Total SA for ~$8.8B at close. Even so, net debt / EBITDA reached ~5x.",
        weapon: "Simultaneous divestiture (funding via asset sale)",
        financialImpact: "OXY net debt ~$48B, net debt / EBITDA ~5x",
      },
    ],
    financialWeapons: [
      {
        name: "Stock-heavy strategic bid (Chevron)",
        side: "defense",
        usedBy: "Chevron",
        description:
          "75% stock, 25% cash structure minimized Chevron's own equity issuance burden, the [disciplined bid] of a financially strong incumbent. But the lower cash component made it less compelling to Anadarko shareholders once OXY came in with ~50% cash.",
        effectiveness: "blocked",
      },
      {
        name: "Topping bid with elevated cash (OXY)",
        side: "attack",
        usedBy: "Occidental Petroleum",
        description:
          "$76/share, ~50% cash, +17% premium. Doubled the cash component vs. Chevron, instantly more attractive to Anadarko holders, but only feasible with external white-knight capital.",
        effectiveness: "decisive",
      },
      {
        name: "Perpetual preferred + warrants (Berkshire's white-knight financing)",
        side: "attack",
        usedBy: "Berkshire Hathaway",
        description:
          "$10B 8% perpetual preferred plus 80M warrants at $62.50. Funded entirely from Berkshire's insurance float, no acquisition financing required. This single instrument is what made OXY's $76 bid executable, and what walked Chevron out of the auction.",
        effectiveness: "decisive",
      },
      {
        name: "Reverse Termination Fee (Chevron)",
        side: "defense",
        usedBy: "Chevron",
        description:
          "$1B reverse termination fee written into the original Chevron-Anadarko merger agreement. Let Chevron exit [profitably]. Wirth's \"value discipline\" framing turned the exit into reputational capital, Chevron stock was up ~3% in the days following.",
        effectiveness: "effective",
      },
      {
        name: "Simultaneous divestiture (OXY's leverage relief)",
        side: "attack",
        usedBy: "Occidental Petroleum",
        description:
          "OXY closed the $8.8B Total SA asset sale on the same day as closing, applying proceeds to debt reduction. Brought net debt / EBITDA down somewhat but still left the post-deal entity at ~5x leverage.",
        effectiveness: "effective",
      },
      {
        name: "Activist accumulation + proxy threat (Icahn)",
        side: "neutral",
        usedBy: "Carl Icahn",
        description:
          "Opposed OXY's deliberate avoidance of the NYSE 20% shareholder-vote threshold. Built a 10%+ position, ran multi-year board pressure, and ultimately exited gradually in 2022 as OXY shares recovered. Won some board concessions but did not block the deal or unwind the structure.",
        effectiveness: "blocked",
      },
    ],
    turningPoint: {
      date: "2019-04-30",
      event: "Berkshire $10B perpetual preferred + warrants commitment, funding uncertainty collapses",
      detail:
        "The central weakness of OXY's $76 counter-bid was funding, where do you get ~$20B of cash? Buffett's $10B commitment, delivered in a single filing on April 30, eliminated that weakness in one step. Nine days later the Anadarko board switched its recommendation, and Chevron, on the same day, took its $1B and walked. The bidding war was effectively decided on April 30.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "OXY + Berkshire, counter-bid succeeded, Anadarko acquisition closed",
      margin: "Final price $76 (vs. Chevron $65, +17%), total deal value ~$55B including debt",
      note: "OXY won the bidding war. But a [winner's curse] debate followed almost immediately, the 2020 COVID oil-price collapse drove OXY shares from $40s to $10, and debt covenants forced OXY to pay part of the Berkshire preferred dividend in OXY common stock (PIK). Chevron, the apparent loser, walked away with $1B and the reputational benefit of [value discipline], which became part of the credibility foundation for its $53B Hess acquisition in 2023. The real long-term winner is Berkshire: a five-year sequence of preferred coupon, PIK accumulation, and open-market common-stock purchases delivered a ~28% common stake by 2024.",
    },
    priceImpact: {
      preContest: "$46 (Anadarko, close on Apr 11, 2019)",
      peak: "$76 (OXY final bid)",
      postContest: "$76 (deal close on Aug 8, 2019, +65% vs. pre-announcement)",
      note: "Anadarko shareholders realized a ~65% premium vs. pre-news and a +17% uplift vs. Chevron's first bid. OXY shares declined ~15% across the bidding war on leverage concerns and did not recover before the COVID shock drove them into the $10s. Chevron shares rose ~3% in the days following its exit, the market rewarded the disciplined walk-away.",
    },
  },

  dealStructure: {
    body: "The transaction is best read as three interlocking structures: [① OXY acquires Anadarko at $76/share, a mix of cash and OXY stock], [② OXY funds the cash component of the acquisition with Berkshire's $10B perpetual preferred + 80M warrants], and [③ OXY simultaneously sells Anadarko's African assets to Total SA for ~$8.8B at deal close to partially offset leverage]. The Berkshire preferred carries an [8% cash dividend (9% PIK if unpaid)], is [callable by OXY only after April 2029], and ranks [junior to debt and senior to common]. The warrants entitle Berkshire to purchase [80M OXY common at $62.50, exercisable at any time during the life of the preferred]. No acquisition financing syndicate, no LBO debt, the deal funded on [Berkshire's balance sheet equity plus OXY's own credit].",
    preOwnership: {
      nodes: [
        { id: "apc_pre",    label: "Anadarko Petroleum",   sub: "Independent E&P (NYSE: APC)",         type: "target" },
        { id: "apc_share",  label: "Anadarko shareholders", sub: "Public float",                       type: "public" },
        { id: "oxy_pre",    label: "Occidental (OXY)",      sub: "Permian pure-play major",            type: "acquirer" },
        { id: "cvx_pre",    label: "Chevron (incumbent bidder)", sub: "$65 deal Apr 12, exited May 9", type: "entity" },
      ],
      edges: [
        { from: "apc_share", to: "apc_pre", label: "100% (public float)" },
        { from: "cvx_pre",   to: "apc_pre", label: "$65 bid (Apr 12), withdrew May 9" },
        { from: "oxy_pre",   to: "apc_pre", label: "$76 counter-bid (Apr 24)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "oxy_post",   label: "Occidental (OXY)",      sub: "Acquired 100% of Anadarko",           type: "acquirer" },
        { id: "apc_post",   label: "Anadarko",              sub: "OXY subsidiary (Permian remained)",   type: "target" },
        { id: "brk_post",   label: "Berkshire Hathaway",    sub: "$10B perpetual preferred + 80M warrants", type: "fund" },
        { id: "oxy_pub",    label: "OXY common shareholders", sub: "(Berkshire later accumulated ~28%)",  type: "public" },
        { id: "total_post", label: "Total SA",              sub: "Bought African assets for ~$8.8B",    type: "entity" },
      ],
      edges: [
        { from: "oxy_post",   to: "apc_post",  label: "100% acquired ($76/share, ~$55B incl. debt)" },
        { from: "brk_post",   to: "oxy_post",  label: "$10B perpetual preferred (8%) + 80M warrants ($62.50)" },
        { from: "oxy_pub",    to: "oxy_post",  label: "Common float (Berkshire accumulated ~28% by 2024)" },
        { from: "apc_post",   to: "total_post", label: "African assets sold for ~$8.8B (closing day)" },
      ],
    },
    keyTerms: [
      { label: "OXY-Anadarko bid price",        value: "$76/share (~$59 cash + ~0.2934 OXY shares)",        accent: true },
      { label: "OXY-Anadarko total deal value",  value: "~$38B (equity), ~$55B (incl. assumed debt)",       accent: true },
      { label: "Chevron initial bid",            value: "$65/share (~75% stock, 25% cash, ~$33B equity)" },
      { label: "Chevron reverse termination fee", value: "$1.0B (received May 9, exited)" },
      { label: "Berkshire preferred face",       value: "$10.0B (100,000 shares at $100,000 face)",         accent: true },
      { label: "Preferred dividend",             value: "8% cash (9% PIK if unpaid)" },
      { label: "Preferred call",                 value: "After Apr 2029 (10 years), face + accrued" },
      { label: "Berkshire warrants",             value: "80M shares, strike $62.50, exercisable life of preferred", accent: true },
      { label: "Bid-structure (no shareholder vote)", value: "Cash component sized to stay below NYSE 20% threshold" },
      { label: "Simultaneous divestiture",       value: "African assets to Total SA, ~$8.8B" },
      { label: "OXY net debt / EBITDA at close", value: "~5x (high-leverage profile)" },
      { label: "Acquisition financing",          value: "Berkshire balance sheet + OXY credit (no LBO debt)" },
    ],
  },

  advisors: {
    body: "The bidding-war structure created a four-corner advisor map: Anadarko (target) was advised by Evercore and Wachtell; OXY (challenger) by BofA and Citi with Cravath; Chevron (incumbent) by Credit Suisse and Goldman with Paul Weiss. Berkshire, characteristically, [used no external advisors], Warren Buffett ran the entire commitment in-house.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Occidental Petroleum (Acquirer) + Berkshire Hathaway (White-Knight Funding)",
        initials: "OXY",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Bank of America Merrill Lynch",
            role: "Lead Financial Advisor (OXY)",
            roleType: "financial",
            note: "OXY's principal financial advisor, bid pricing and financing structure",
          },
          {
            firm: "Citi (Citigroup)",
            role: "Co-Financial Advisor (OXY)",
            roleType: "financial",
            note: "OXY's debt advisory and Total SA divestiture package design",
          },
          {
            firm: "Cravath, Swaine & Moore LLP",
            role: "Lead Legal Counsel (OXY)",
            roleType: "legal",
            note: "OXY acquisition agreement and Berkshire preferred / warrant legal structuring",
          },
          {
            firm: "Berkshire Hathaway (in-house)",
            role: "White-knight financing (no external advisors)",
            roleType: "other",
            note: "Warren Buffett structured and committed the $10B preferred and warrant package directly, no external financial or legal advisors disclosed",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Anadarko Petroleum (Target) / Chevron (Incumbent Bidder)",
        initials: "APC",
        bg: "bg-blue-800",
        advisors: [
          {
            firm: "Evercore",
            role: "Lead Financial Advisor (Anadarko)",
            roleType: "financial",
            note: "Bid comparison and Superior Proposal determination for the Anadarko board",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Lead Legal Counsel (Anadarko)",
            roleType: "legal",
            note: "Recommendation switch and reverse termination fee settlement with Chevron",
          },
          {
            firm: "Credit Suisse",
            role: "Lead Financial Advisor (Chevron)",
            roleType: "financial",
            note: "Chevron's principal financial advisor, original bid structure and exit strategy",
          },
          {
            firm: "Goldman Sachs",
            role: "Co-Financial Advisor (Chevron)",
            roleType: "financial",
            note: "Co-advisor to Chevron on bidding-war response and value-discipline exit",
          },
          {
            firm: "Paul, Weiss, Rifkind, Wharton & Garrison LLP",
            role: "Lead Legal Counsel (Chevron)",
            roleType: "legal",
            note: "Chevron's principal legal advisor, exit and reverse-termination-fee mechanics",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on SEC filings, Reuters, and WSJ reporting at the time of the transaction. Some secondary advisor relationships may not be fully captured.",
  },

  valuation: {
    body: "Three valuation lenses define this transaction: [① the Anadarko purchase EV/EBITDA, headline price-to-asset metric], [② mark-to-market of the Berkshire preferred, credit and yield], and [③ option value of the warrants]. Chevron's initial $65 bid valued Anadarko at roughly 7.5x EV/EBITDA, in line with peer transactions. OXY's $76 counter at roughly 9.0x EV/EBITDA implicitly [pre-paid the Permian synergy] in cash. The Berkshire preferred, at an 8% cash coupon on OXY (BBB+ at issuance), priced at roughly [200-250 bp wide of OXY's secondary credit spread]. The warrants, struck at $62.50 against an OXY spot of ~$58 at issuance, started ~8% out-of-the-money; the 2022-2024 oil-price rally pushed OXY into the $60-80 range, making the warrants meaningfully in-the-money for extended periods.",
    rows: [
      { item: "Chevron initial bid (Apr 12, 2019)",         val: "$65/share",       note: "~7.5x EV/EBITDA, ~$50B incl. debt",          accent: false },
      { item: "OXY counter-bid (Apr 24, 2019)",             val: "$76/share",       note: "~9.0x EV/EBITDA, ~$55B incl. debt",          accent: true },
      { item: "OXY premium vs. Chevron",                    val: "+17%",            note: "Cash component lifted from 25% to ~50%" },
      { item: "Anadarko share price pre-news",              val: "$46/share",       note: "Apr 11, 2019 close" },
      { item: "Total equity purchase price",                val: "~$38B",           note: "$76/share × ~500M shares" },
      { item: "Total deal value incl. assumed debt",        val: "~$55B",           note: "Includes ~$17B Anadarko debt assumed",       accent: true },
      { item: "Berkshire preferred face value",             val: "$10.0B",          note: "8% cash coupon, 9% PIK if unpaid",           accent: true },
      { item: "Berkshire annual preferred income",          val: "$0.8B",           note: "8% × $10B (cash)" },
      { item: "Berkshire warrants",                         val: "80M shares @ $62.50", note: "OXY spot ~$58 at issuance, +8% OTM",     accent: true },
      { item: "OXY net debt / EBITDA at close",             val: "~5.0x",           note: "Vs. ~1-2x for major-oil peer average" },
      { item: "Total SA divestiture (simultaneous)",        val: "$8.8B",           note: "Mozambique, Algeria, Ghana, South Africa" },
      { item: "Chevron reverse termination fee received",   val: "$1.0B",           note: "Walked May 9, 2019" },
    ],
    disclaimer: "Note: EV/EBITDA estimates use Anadarko's FY2018 EBITDA of ~$6.8B. Market data points may vary by source and timing.",
  },

  rationale: {
    buyer: {
      title: "OXY and Berkshire, why this transaction",
      initials: "OXY",
      bg: "bg-red-700",
      points: [
        "[OXY: the deciding move in Permian consolidation] Acquiring Anadarko doubled OXY's Permian production and grew its shale reserves ~70%. The transaction completed Hollub's [Permian pure-play major] vision in one step, putting OXY at scale against Chevron and Exxon in the basin.",
        "[OXY: shale productivity and market position] Post-deal US shale production of ~1.0M BOE/d put OXY firmly in the top tier of US shale producers and gave it the operating density to be a Permian [consolidator] in subsequent cycles.",
        "[Berkshire: downside-protected upside] The 8% perpetual preferred functions as a near-permanent income stream of [$800M annual cash coupon]. Warrants on 80M OXY shares add a multi-billion-dollar option layer, the classic Berkshire-style asymmetric payoff.",
        "[Berkshire: inflation hedge and float redeployment] Berkshire was sitting on ~$130B of insurance float in 2018-2019 with limited deployment opportunities. The OXY preferred delivered a stable 8% cash return on energy assets, an inflation hedge wrapped in a fixed-income coupon.",
        "[OXY: bid credibility against Chevron] The Berkshire commitment collapsed funding uncertainty in a single filing. Once it was in, the auction was effectively over, Chevron chose [value discipline] over a bidding match.",
        "[Berkshire: a springboard to a 28% common position] What began as a $10B preferred became, after the 2020 PIK distributions and 2022-2024 open-market accumulation, an effective [~28% common-stock position] in Occidental (separate from the warrants). The 2019 preferred was the opening move in a long-horizon anchor-stake strategy."
      ],
    },
    seller: {
      title: "Anadarko and Chevron, why this outcome",
      initials: "APC",
      bg: "bg-blue-800",
      points: [
        "[Anadarko shareholders: ~65% premium vs. pre-news] $76 final price vs. $46 pre-announcement close is a ~65% premium, plus a +17% uplift over Chevron's first bid. The board's Superior Proposal recommendation switch is a textbook example of fiduciary duty maximizing shareholder value.",
        "[Anadarko board: fiduciary duty satisfied] Even after the Chevron agreement, the OXY $76 bid was demonstrably better, recommendation switch was effectively required. Wachtell's legal advice gave the board comfort on the reverse-termination-fee settlement with Chevron.",
        "[Chevron: value discipline as reputational capital] Mike Wirth's [\"value discipline\"] framing converted a bidding-war exit into reputational capital. Chevron stock was up ~3% in the days following its exit, the same credibility that helped underpin its $53B Hess acquisition in 2023.",
        "[Chevron: walked profitably with capital preserved] $1B reverse termination fee in hand, no equity dilution, balance sheet preserved for the next deal. The exit was, on any sensible metric, [profitable].",
        "[Anadarko's Mozambique LNG to TotalEnergies] OXY sold the African package to Total at close. Mozambique LNG passed to Total as operator and became one of the marquee global LNG projects of the early 2020s (though paused in 2021 due to security issues in northern Mozambique).",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Seven years after closing, the deal has cycled through three inflection points and lands in a very different place than 2019 critics expected. ① 2020 COVID oil-price collapse: OXY fell from $40s to ~$10, and debt covenants forced OXY to pay part of the Berkshire preferred dividend in OXY common stock (PIK), peak [winner's curse] narrative. ② 2022-2023 Russia-Ukraine energy spike: OXY shares recovered into $70-80, warrants moved firmly in-the-money. ③ 2024-2025 Buffett accumulation: open-market purchases brought Berkshire's OXY common stake to ~28% (~250M shares), which combined with the preferred and warrants positions Berkshire as the effective anchor shareholder. Carl Icahn gradually exited his activist position during the 2022 recovery. OXY itself paid down ~$20B+ of debt between 2020 and 2023, normalizing net debt / EBITDA from ~5x at close to ~1.5x. In 2025, OXY redeemed ~$4B of the Berkshire preferred at par. Vicki Hollub, throughout, has been consistent: \"The hardest five years, but we were right.\"",
    overallVerdict: "Tactical win + short-term financial pain + long-term strategic vindication, but the real winner is Berkshire",
    positives: [
      "[OXY] Permian pure-play major status secured; ~1.0M BOE/d shale production as of 2025, top-five US shale producer",
      "[OXY] $20B+ debt paydown between 2020 and 2023, net debt / EBITDA normalized from ~5x to ~1.5x, credit rating restored to BBB",
      "[Berkshire] Cumulative cash preferred coupons of $4B+ between 2019 and 2024, multi-billion warrant optionality, ~28% OXY common position built through PIK + open-market accumulation",
      "[Anadarko shareholders] +65% vs. pre-news, +17% over Chevron's first bid",
      "[Chevron] Value-discipline reputation became credibility capital for the $53B Hess acquisition in 2023",
    ],
    risks: [
      "[OXY] Came close to a technical default scenario during 2020 COVID stress, the textbook [winner's curse] case study of white-knight financing combined with high leverage",
      "[Berkshire] 2020-2021 mark-to-market loss on OXY common; PIK distributions diluted dividend cash, fully recovered post-2022",
      "[OXY] Icahn proxy fight and the no-shareholder-vote structure left long-running governance reputational damage",
      "[Energy transition risk] 2030-2050 net-zero scenarios remain a structural overhang on Permian shale asset value",
      "[Berkshire] OXY is a ~5% single-name position in Berkshire's equity portfolio as of 2024, raising concentration questions",
    ],
    editorNote:
      "The real significance of this deal is not [\"Chevron lost on price\"] but [\"Berkshire became OXY's white knight through an 8% perpetual preferred plus warrant structure with an asymmetric payoff geometry that few others could deliver.\"] What looked like a single financing transaction in April 2019 turned out to be the [first step in a five-year sequence], COVID shock, common-stock accumulation, anchor-stake formation, that put Berkshire in a position no other shareholder could have reached. The 85-minute meeting in Omaha to a $10B commitment to a ~28% stake seven years later is now the global textbook case study for [white-knight financing]. Reviewed as of May 2026.",
  },

  tombstone: {
    acquirerInitials: "OXY",
    acquirerBg: "bg-red-700",
    targetInitials: "APC",
    targetBg: "bg-blue-800",
    acquirerName: "Occidental Petroleum (with Berkshire Hathaway as white knight)",
    targetName: "Anadarko Petroleum Corporation",
    dealTitle: "OXY-Anadarko $55B Acquisition · Berkshire $10B Perpetual Preferred + 80M Warrants",
    dealSize: "approx. USD 55B (incl. debt)",
    dealSizeUSD: "USD 38B (equity) / USD 55B (incl. debt)",
    evEbitda: "~9.0x (FY2018 EBITDA basis)",
    closeDate: "Aug 8, 2019",
  },

  sources: [
    { id: 1, text: "Chevron press release, Chevron to Acquire Anadarko in $33 Billion Transaction (Apr 12, 2019)", url: "https://www.chevron.com/newsroom/2019/q2/chevron-to-acquire-anadarko-in-33-billion-transaction" },
    { id: 2, text: "Occidental press release, Occidental Submits Proposal to Acquire Anadarko for $76 per Share (Apr 24, 2019)", url: "https://www.oxy.com/news/news-releases/occidental-submits-proposal-to-acquire-anadarko/" },
    { id: 3, text: "Berkshire Hathaway / Occidental joint press release, Berkshire Hathaway to Invest $10 Billion in Occidental Preferred (Apr 30, 2019)", url: "https://www.oxy.com/news/news-releases/berkshire-hathaway-to-invest-10-billion-in-occidental/" },
    { id: 4, text: "Anadarko press release, Anadarko Board Determines Occidental Proposal Constitutes Superior Proposal (May 6, 2019)", url: "https://www.anadarko.com/press-release/" },
    { id: 5, text: "Chevron press release, Chevron Will Not Submit Revised Proposal (May 9, 2019)", url: "https://www.chevron.com/newsroom/2019/q2/chevron-not-to-submit-revised-proposal" },
    { id: 6, text: "Occidental SEC 8-K, Closing of Anadarko Acquisition and Berkshire Preferred / Warrant Issuance (Aug 8, 2019)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000797468&type=8-K" },
    { id: 7, text: "Reuters, How Buffett's $10 billion bet on Occidental's Anadarko deal came together (May 1, 2019)", url: "https://www.reuters.com/article/us-anadarko-petrolm-m-a-occidental-buffett/" },
    { id: 8, text: "Wall Street Journal, Why Carl Icahn Is Fighting Occidental's Anadarko Deal (May 30, 2019)", url: "https://www.wsj.com/articles/icahn-occidental-anadarko-fight" },
    { id: 9, text: "Berkshire Hathaway 2019 Annual Letter to Shareholders, discussion of the Occidental Preferred (Feb 2020)", url: "https://www.berkshirehathaway.com/letters/2019ltr.pdf" },
    { id: 10, text: "Financial Times, Occidental's Buffett-backed Anadarko bet, five years on (Aug 2024)", url: "https://www.ft.com/content/occidental-anadarko-buffett-retrospective" },
  ],

  seo: {
    title: "Berkshire × OXY $10B White-Knight Financing, Who Really Won the Anadarko Auction",
    description:
      "April 2019: Warren Buffett committed $10B in 8% perpetual preferred stock plus 80M warrants at $62.50 to Occidental Petroleum, the financing that walked Chevron out of the Anadarko bidding war. OXY closed the $55B Anadarko acquisition in August, then absorbed the 2020 COVID shock. By 2024, Berkshire held roughly 28% of OXY common stock. The global textbook case study for white-knight financing.",
    keywords: [
      "Berkshire Occidental",
      "OXY Anadarko acquisition",
      "Warren Buffett white knight",
      "Berkshire Hathaway preferred",
      "Occidental Anadarko",
      "white knight financing",
      "perpetual preferred stock",
      "warrants",
      "Chevron Anadarko",
      "Vicki Hollub",
      "Carl Icahn Occidental",
      "Permian Basin consolidation",
    ],
  },

  concepts: [
    {
      term: "White-Knight Financing",
      description: "A friendly third-party capital provider rescues a company from a hostile takeover or wins a bidding war by supplying decisive funding. OXY mobilized Berkshire's $10B perpetual preferred as its white knight, the single instrument that walked Chevron out of the Anadarko auction.",
    },
    {
      term: "Perpetual Preferred Stock",
      description: "Preferred stock with no maturity date, the issuer pays dividends indefinitely until it elects to call the security. Berkshire's OXY preferred carries an 8% cash dividend (9% PIK if unpaid) and is callable by OXY only after April 2029, functionally a perpetual income stream.",
    },
    {
      term: "Warrants",
      description: "Long-dated options to buy issuer common shares at a fixed strike price. Berkshire received warrants on 80M OXY common shares at $62.50, ~8% out-of-the-money at issuance but materially in-the-money during the 2022-2024 OXY recovery.",
    },
    {
      term: "NYSE 20% Shareholder-Vote Threshold",
      description: "NYSE listing rules require a shareholder vote when new shares issued exceed 20% of pre-deal shares outstanding. OXY deliberately sized the cash component of its Anadarko bid to keep new-share issuance below this threshold, avoiding a shareholder vote on the $55B transaction. The center of Carl Icahn's objection.",
    },
    {
      term: "Reverse Termination Fee",
      description: "A break fee payable to the target if the acquirer walks away. Chevron's $1B reverse termination fee, written into the original Chevron-Anadarko agreement, let Chevron exit the bidding war [profitably] on May 9, 2019.",
    },
    {
      term: "Superior Proposal",
      description: "A competing bid that the target board determines, in line with its fiduciary duty, to be more favorable than the existing signed agreement. Anadarko's board declared the OXY $76 bid a Superior Proposal on May 9, terminating the Chevron agreement (in exchange for the $1B fee).",
    },
    {
      term: "Permian Basin",
      description: "The Permian Basin spans West Texas and southeastern New Mexico and accounts for ~30% of US crude production. OXY's Anadarko acquisition doubled Permian production and grew shale reserves ~70%, cementing its [Permian pure-play major] positioning.",
    },
    {
      term: "Berkshire Insurance Float",
      description: "The cash-equivalent reserves Berkshire's insurance subsidiaries hold against future claims. As of 2019, the float was ~$130B, [effectively zero-cost long-duration capital] that Buffett deploys into large equity and preferred positions. The OXY $10B preferred came directly out of float.",
    },
    {
      term: "Payment-in-Kind (PIK) Dividend",
      description: "A dividend paid in additional securities (typically shares) rather than cash. During the 2020 COVID stress, OXY's debt covenants forced it to pay part of the Berkshire preferred dividend in OXY common stock rather than cash, an outcome that ultimately accelerated Berkshire's common-stock accumulation.",
    },
  ],

  faq: [
    {
      q: "Why did Warren Buffett commit $10B to Occidental Petroleum?",
      a: "The public framing was that OXY's Permian assets were attractive, the 8% perpetual preferred was a compelling long-duration income asset for Berkshire, and the warrants provided meaningful additional upside. The fuller market interpretation: ① Berkshire's ~$130B insurance float needed deployment, ② an 8% perpetual coupon is essentially a permanent fixed-income annuity, ③ 80M warrants represent multi-billion-dollar optionality, and ④ energy assets serve as an inflation hedge. The result is the classic Buffett asymmetric payoff, downside protected by the coupon, upside open via the warrants.",
    },
    {
      q: "Why did Chevron walk away rather than raise its bid?",
      a: "Chevron CEO Mike Wirth chose [\"value discipline\"]. Three reasons drove the exit: ① the original Chevron-Anadarko agreement included a $1B reverse termination fee, letting Chevron exit profitably, ② matching or exceeding OXY's $76 would have required additional Chevron equity issuance and balance-sheet pressure, and ③ the market reacted favorably to the discipline, Chevron stock rose ~3% in the days following. That reputational capital became part of the credibility foundation for Chevron's $53B Hess acquisition in 2023. The exit was a strategic retreat, not a loss.",
    },
    {
      q: "Why didn't OXY shareholders get a vote, and why did Carl Icahn object so strongly?",
      a: "OXY deliberately structured the cash component to keep new-share issuance below the NYSE [20% shareholder-vote threshold], avoiding a shareholder vote on a $55B transaction. Carl Icahn called this a violation of shareholder rights, accumulated 10%+ of OXY, and ran multi-year board pressure from 2020 into 2022. He won some board concessions but eventually exited gradually during the 2022 recovery. The episode left a long-running governance discount and reputational damage on OXY's board.",
    },
    {
      q: "How did OXY survive the 2020 COVID shock, and what did it mean for Berkshire?",
      a: "The 2020 oil-price collapse drove OXY shares from $40s to ~$10. Debt covenants triggered restrictions on cash dividend payments below certain credit metrics, forcing OXY to pay part of the Berkshire preferred dividend in OXY common stock (PIK) instead of cash. Short-term, Berkshire took mark-to-market losses on the position. Longer-term, the PIK distributions automatically grew Berkshire's OXY common stake, and from 2022 Buffett aggressively bought more in the open market. By 2024, Berkshire held ~28% of OXY common (~250M shares) plus the preferred plus the warrants, an effective anchor shareholder position that emerged from what looked like a stress event in 2020.",
    },
    {
      q: "When and how will the Berkshire $10B preferred be redeemed?",
      a: "The preferred is [perpetual], no maturity. OXY has a call option to redeem at face plus accrued dividends [after April 2029]; Berkshire has no put option. OXY is likely to phase out the preferred via opportunistic early redemptions as its credit recovers and cost-of-capital optimization becomes the priority. In 2025, OXY redeemed roughly $4B of the preferred at par, and further redemptions are expected over 2026-2028. The 80M warrants remain exercisable separately, Berkshire can exercise at any time during the life of the preferred, and the warrants retain value until expiry.",
    },
    {
      q: "Has this transaction become the template for white-knight financing?",
      a: "Yes. The OXY-Berkshire preferred-plus-warrant structure is now the most-cited [global template for white-knight financing]. Three reasons: ① perpetual preferred ranks [junior to debt, senior to common], minimizing credit impact on the acquirer; ② warrant optionality lets the white knight earn a fair risk-adjusted return without straight equity dilution; ③ long-duration capital pools, insurance floats, sovereign wealth funds, pension funds, are natural counterparties. In subsequent US mega-deals, Apollo, Blackstone, and Brookfield have repeatedly structured similar preferred-plus-warrant white-knight roles. What few can replicate is Buffett's [85-minute meeting plus single phone call] speed, which remains specific to Berkshire's unique capital-deployment capacity.",
    },
  ],
};

export default deal;
