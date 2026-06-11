/**
 * Carl Icahn × Herbalife — The Textbook Case of Counter-Activism
 * 13D 12.98% entry against Ackman's $1B short → scaled to ~25% → 8-year hold → ~$1.3B realized
 * The first major activist-vs-activist confrontation in modern U.S. markets
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ────────────────────────────────────────────────────
  slug: "icahn-herbalife-counter",
  title: "How Carl Icahn Broke Bill Ackman's $1 Billion Herbalife Short — Five Years of Counter-Activism",
  subtitle:
    "[Activist vs. Activist] origin story · 13D 12.98% entry → ~25% scaled · CNBC live 'liar' brawl · FTC non-pyramid settlement · ~$1.3B realized over eight years",
  category: "activism",
  industry: "Multi-Level Marketing / Nutrition / Consumer Goods",
  country: "USA",
  announcedAt: "2013-02-14",
  closedAt: "2018-02-28",
  announcedDisplay: "February 14, 2013 (Icahn 13D filed)",
  closedDisplay: "February 28, 2018 (Ackman closes short)",
  readingMinutes: 14,
  tags: [
    "Carl Icahn",
    "Herbalife",
    "Bill Ackman",
    "Counter-Activism",
    "13D Filing",
    "Short Squeeze",
    "FTC",
    "MLM",
    "Pershing Square",
    "CNBC",
    "Activist Celebrity Era",
    "Pyramid Scheme",
  ],
  excerpt:
    "In December 2012, Bill Ackman publicly labeled Herbalife a [pyramid scheme] and declared a nominal $1 billion short. Two months later, on February 14, 2013, Carl Icahn filed a 13D disclosing a 12.98% long stake, planting his flag on the opposite side. On January 25, 2013, in a 28-minute live brawl on CNBC's Fast Money Halftime Report, Icahn called Ackman [a liar] and [the crybaby in the schoolyard]. It became the first major activist-vs-activist confrontation in modern U.S. markets. Icahn scaled his position to roughly 25% with five board seats, and once the FTC closed its two-year probe on July 15, 2016 with a $200 million Consent Order that explicitly declined to brand Herbalife a pyramid scheme, the war was effectively over. Ackman covered his entire short on February 28, 2018 at an estimated cumulative loss of about $1 billion. Icahn exited in two tranches in January and May 2021, realizing roughly $1.3 billion across an eight-year hold.",

  // ── Icons ───────────────────────────────────────────────────
  acquirer: { initials: "ICA", bg: "bg-orange-600", label: "Carl Icahn / Icahn Enterprises" },
  target:   { initials: "HLF", bg: "bg-green-700",  label: "Herbalife Ltd." },

  // ── Background ──────────────────────────────────────────────
  background: [
    "On December 20, 2012, Bill Ackman delivered a three-hour presentation at Manhattan's AXA Equitable Center titled [Who Wants To Be A Millionaire?], declaring Herbalife a [pyramid scheme]. He disclosed a short position of roughly 20 million shares with a nominal value of about $1 billion and set a price target of [$0]. Herbalife fell 10% in six seconds, tripping a circuit breaker, and dropped from $42.50 on December 18 to $26.06 by Christmas Eve.",
    "[Enter the counter camp.] In January 2013, Daniel Loeb's Third Point was the first to break ranks, disclosing an 8.2% long stake and calling Ackman's analysis [preposterous]. The real counter-activism move came a few weeks later. On January 25, 2013, Carl Icahn called into CNBC's Fast Money Halftime Report and went toe-to-toe with Ackman in studio for 28 live minutes, calling Ackman [a liar], [the crybaby in the schoolyard], and saying he had [one of the worst reputations on Wall Street]. The exchange became one of the most-watched live segments in CNBC history and turned a long-simmering personal feud (dating back to a 2003 Hallwood Realty dispute) into open hedge-fund warfare.",
    "[February 14, 2013, the 13D counter-punch.] Three weeks after the CNBC brawl, Icahn Enterprises filed a Schedule 13D disclosing the purchase of 14,015,151 shares of Herbalife (12.98% of shares outstanding) for roughly $214 million. Critically, this was a 13D rather than a 13G — that is, an active control-and-influence filing rather than a passive position. Icahn was signaling that he intended to attack Ackman's short thesis at the governance level, not merely trade against it. Herbalife rebounded to $46 within days.",
    "[Scaling the stake; taking the board.] Through 2013 and 2014, Icahn scaled his stake to roughly 25%, with a standstill cap negotiated with Herbalife in exchange for five board seats. In parallel, Herbalife issued a $1.15 billion convertible note (2014) and accelerated buybacks, reducing the float and driving up the stock-loan cost on Ackman's borrowed shares — a structural counter-move. George Soros's Soros Fund Management also appeared in 13F filings as a long during Q2 2013, expanding the counter camp.",
    "[The FTC settlement that ended the war.] When the FTC opened a formal investigation in March 2014, Ackman's camp cheered. But on July 15, 2016, after a 28-month probe, the FTC announced a $200 million Consent Order — and explicitly declined to brand Herbalife a pyramid scheme. Herbalife was required to restructure compensation around verified retail sales to actual end consumers, but its underlying business model was effectively validated. The stock rallied roughly +10% on the news. Ackman's central premise (an FTC-driven shutdown) was dead, and Icahn quietly fine-tuned his position to about 24.2% in 2017, refreshing the standstill at the same time.",
  ],

  // ── Deal Summary ────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "13.98M shares → ~25% peak stake ($214M initial → ~$1.3B realized)",
    acquirerName: "Carl Icahn / Icahn Enterprises L.P.",
    targetName: "Herbalife Ltd. (NYSE: HLF)",
    announcedDisplay: "February 14, 2013 (13D filing)",
    closedDisplay: "February 28, 2018 (Ackman covers) / May 2021 (Icahn full exit)",
    country: "USA",
  },

  // ── Executive Summary ───────────────────────────────────────
  executiveSummary: [
    "[First major counter-activism event in modern markets] Ackman discloses ~$1B short with a $0 target (Dec 20, 2012). Eight weeks later, Icahn files a 13D for 12.98% on Feb 14, 2013, planting an activist on the opposite side of an activist short.",
    "[The CNBC live brawl, January 25, 2013] 28 minutes of on-air combat. Icahn: [a liar], [crybaby in the schoolyard]. The moment cable television was admitted as a formal arena of hedge-fund warfare — the opening of the [activist celebrity era].",
    "[Stake scaled to ~25% and five board seats] Through 2013-2014 Icahn negotiated a standstill with Herbalife capping the position near 25% in exchange for board representation, formalizing an Icahn-management united front.",
    "[The FTC's $200M Consent Order is the kill shot] On July 15, 2016, the FTC closes a 28-month probe with a $200M settlement and a restructuring of compensation around verified retail sales — but explicitly declines to find Herbalife a pyramid scheme. Ackman's $0 thesis dies in a single press release.",
    "[Ackman surrenders on February 28, 2018] After five years, he closes the entire short. Estimated cumulative loss approximately $1 billion. Pershing Square AUM collapses from $20 billion (2015) to about $8 billion (2018).",
    "[Icahn's victory monetized in 2021] In January 2021 Icahn tenders $600 million of stock back to the company at $48.05; in May 2021 he sells the remaining ~5 million shares for about $248 million. Cumulative gain estimated at roughly $1.3 billion across eight years, dividends included.",
    "[The lessons] (1) Public activist shorts carry a structural time disadvantage, (2) counter-buying + dividends + buybacks form a [composite weapons system] that is brutal against borrowed-stock positions, (3) regulatory uncertainty plus elapsed time is the natural enemy of any short thesis.",
  ],

  // ── Industry Overview ───────────────────────────────────────
  industryOverview: {
    body: "Multi-level marketing (MLM) is a direct-sales model that distributes products through a network of independent distributors. A legal MLM derives the bulk of compensation from sales to genuine end consumers; an illegal pyramid scheme derives it primarily from fees paid for recruiting new distributors. Since the FTC's 1979 Amway decision, the dividing line in U.S. law has turned on the share of revenue from verified retail sales and the treatment of [internal consumption] (product bought by distributors themselves). The Herbalife saga was the first time in three decades that this line was tested at scale, and the FTC's 2016 settlement effectively turned retail sales tracking into a de facto industry standard across U.S. MLM.",
    metrics: [
      { label: "Global MLM Market (2013)",  value: "~$178 billion", sub: "U.S. ~$34B" },
      { label: "Herbalife distributors (2012)", value: "3.2M+ Members", sub: "90+ countries, members include self-consumers" },
      { label: "Ackman's nominal short",    value: "~$1B (20M shares)", sub: "Disclosed December 2012" },
      { label: "FTC settlement (July 2016)", value: "$200M",        sub: "Not classified as a pyramid scheme; compensation restructure required" },
    ],
    subBody:
      "The Icahn-Ackman confrontation marked the start of what is now called the [activist celebrity era]. Before this episode, activist investors moved through conferences, letters, and proxy fights. After it, CNBC, Bloomberg, and (later) Twitter became routine theaters of war. Daniel Loeb, Nelson Peltz, Jeffrey Smith of Starboard, and Paul Singer of Elliott all pivoted toward more media-forward models. Two years later (2015), the same playbook would inflict significant damage on Ackman from a different angle in the Valeant saga.",
    players: [
      { name: "Carl Icahn / Icahn Enterprises", role: "Counter-activist principal. 13D at 12.98%, scaled to ~25%, five board seats." },
      { name: "Bill Ackman / Pershing Square",  role: "Activist short principal. ~$1B nominal short, covered February 2018." },
      { name: "Daniel Loeb / Third Point",      role: "First counter long (8.2%, January 2013). Closed his position relatively quickly." },
      { name: "George Soros / Soros Fund Mgmt", role: "Long position confirmed in Q2 2013 13F; expanded the counter camp." },
      { name: "FTC (Bureau of Consumer Protection)", role: "Opened a formal probe in March 2014; closed it with the $200M July 2016 Consent Order, no pyramid finding." },
      { name: "Herbalife / Michael Johnson CEO", role: "Issuer's defense; coordinated with Icahn on buybacks, dividend, and the standstill agreement." },
    ],
  },

  // ── Company Overview ────────────────────────────────────────
  companyOverview: {
    targetName: "Herbalife Ltd. (NYSE: HLF)",
    body: "Herbalife was founded in Los Angeles in 1980 by Mark Hughes as a global MLM nutrition and wellness company. It sells meal-replacement shakes (Formula 1), vitamins, weight-management, and sports nutrition products through more than 3.2 million [Members] (a category that combines distributors and self-consumers) across more than 90 countries. The company is incorporated in the Cayman Islands and operationally headquartered in Los Angeles. In 2012, it generated $4.1 billion in revenue at an operating margin around 14%. The intellectual fight in the Ackman-Icahn battle centered on the accounting treatment of [internal consumption] — whether product purchased by distributors themselves should be counted as a genuine retail sale or treated as inventory loading. Ackman saw it as evidence of a circular pyramid structure; Icahn and Herbalife treated it as a normal franchise-style margin pattern.",
    metrics: [
      { label: "Founded / HQ",          value: "1980 / Cayman Islands", sub: "Founder Mark Hughes (d. 2000)" },
      { label: "FY2012 revenue",        value: "$4.07B",                sub: "Last full year before Ackman attack" },
      { label: "FY2012 operating income", value: "$562M",               sub: "OPM 13.8%" },
      { label: "FY2013 revenue (Icahn entry year)", value: "$4.83B",    sub: "+19% YoY despite short campaign" },
      { label: "Stock price (Dec 18, 2012)", value: "$42.50",           sub: "Pre-Ackman attack; fell 10% in 6 seconds at the presentation" },
      { label: "Stock price (Jan 2014 peak)", value: "~$83",            sub: "Short squeeze plus Icahn accumulation" },
    ],
    financials: [
      { year: "FY2009", revenue: 2325, cogs: 442,  grossProfit: 1883, sga: 1500, operatingIncome: 383, ebitda: 465 },
      { year: "FY2010", revenue: 2735, cogs: 521,  grossProfit: 2214, sga: 1755, operatingIncome: 459, ebitda: 555 },
      { year: "FY2011", revenue: 3454, cogs: 668,  grossProfit: 2786, sga: 2178, operatingIncome: 608, ebitda: 730 },
      { year: "FY2012", revenue: 4072, cogs: 830,  grossProfit: 3242, sga: 2680, operatingIncome: 562, ebitda: 680 },
      { year: "FY2013", revenue: 4825, cogs: 974,  grossProfit: 3851, sga: 3088, operatingIncome: 763, ebitda: 905 },
    ],
    financialsNote: "Unit: USD millions. Source: Herbalife 10-K filings (SEC EDGAR). FY2013 was the first full year under Ackman's short campaign and Icahn's 13D long, with double-digit growth in both revenue and operating income — itself a powerful rebuttal to the pyramid thesis.",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Control Battle Overview ─────────────────────────────────
  controlBattleOverview: {
    body: "Herbalife was not a traditional control battle. It was a clash of market mechanisms — an activist short versus a counter-buying activist long, with the issuer's management functioning as a coordinated ally of the long side. The weapons in play were not poison pills or dual-class stock; they were 13D counter-buying, accelerated buybacks, dividend support, convertible-note issuance squeezing the stock-loan market, and a long FTC proceeding. The case laid bare a structural truth: a public activist short cannot survive for five years against a well-funded counter camp.",
    catalyst:
      "Ackman's three-hour presentation on December 20, 2012 — branding Herbalife a pyramid scheme, disclosing a roughly $1B nominal short, and setting a $0 price target. The stock fell 10% in six seconds, triggering a trading halt.",
    attackerLabel: "Pershing Square + Bill Ackman ($1B short)",
    defenderLabel: "Carl Icahn + Herbalife management (Michael Johnson)",
    battleMoves: [
      {
        date: "2012-12-20",
        actor: "Bill Ackman / Pershing Square",
        side: "attack",
        move: "Three-hour presentation + public $1B short disclosed",
        detail:
          "At Manhattan's AXA Equitable Center, Ackman unveiled a 320-slide presentation titled [Who Wants To Be A Millionaire?]. He disclosed a roughly 20 million share short, valued near $1 billion, and set a price target of [$0]. Herbalife fell 10% in six seconds, tripping the circuit breaker.",
        financialImpact: "HLF $42.50 → $26.06 in six trading days (-39%)",
        weapon: "Activist short + public presentation campaign",
      },
      {
        date: "2013-01-25",
        actor: "Carl Icahn",
        side: "defense",
        move: "Live CNBC brawl: 'a liar'",
        detail:
          "On CNBC's Fast Money Halftime Report, Icahn (via phone) and Ackman (in studio) traded blows for 28 live minutes. Icahn: Ackman is [a liar], [the crybaby in the schoolyard], with [one of the worst reputations on Wall Street]. The exchange is the moment cable became a formal arena for hedge-fund warfare and is widely cited as the opening of the [activist celebrity era].",
        financialImpact: "HLF +1.5% post-broadcast; volume 3x average",
        weapon: "Media counter-campaign",
      },
      {
        date: "2013-02-14",
        actor: "Carl Icahn / Icahn Enterprises",
        side: "defense",
        move: "13D filed: 12.98% counter-buy",
        detail:
          "Icahn Enterprises filed a Schedule 13D disclosing 14,015,151 Herbalife shares (12.98%) acquired for roughly $214 million. The filing was a 13D, not a 13G — an active control-and-influence filing. The message: Ackman's short thesis would be dismantled at the governance level, not merely traded against.",
        financialImpact: "HLF +5% on the day, up to ~$46 within days",
        weapon: "13D counter-filing",
      },
      {
        date: "2013-04-26",
        actor: "Herbalife board",
        side: "defense",
        move: "Two immediate board seats granted to Icahn + standstill",
        detail:
          "Herbalife granted Icahn two immediate board seats and, in exchange, Icahn signed a standstill capping his position at roughly 25%. It was the formal birth of the management-Icahn united front — a [united front] declaration aimed at the Ackman camp.",
        financialImpact: "Stake cap at 25%; board influence secured",
        weapon: "Standstill agreement + board seats",
      },
      {
        date: "2013-2014",
        actor: "Herbalife + Carl Icahn",
        side: "defense",
        move: "Buyback + convertible + dividend (the squeeze triple)",
        detail:
          "Herbalife issued a $1.15 billion convertible note in 2014 and accelerated buybacks (cumulative $1.5 billion+ in 2013-2014). Float reduction lifted the stock-loan rate on Ackman's borrowed shares from ~0.5% to an estimated 8%+ at the peak. Meanwhile, the maintained quarterly dividend imposed a recurring payment obligation on the short side.",
        financialImpact: "Stock-loan rate normal 0.5% → estimated 8%+ at peak",
        weapon: "Buybacks + converts + dividends (the squeeze triple)",
      },
      {
        date: "2014-03-12",
        actor: "FTC",
        side: "neutral",
        move: "Formal investigation announced",
        detail:
          "Herbalife disclosed that the FTC had opened a formal investigation into its practices. Superficially this looked like an Ackman victory; in reality, it gave Icahn 28 more months for buybacks, dividend payments, and operational changes — while Ackman bled borrow costs and opportunity costs every day the position stayed open.",
        financialImpact: "HLF -7% on the day; -50% off the short-term peak",
        weapon: "Regulatory uncertainty (a double-edged sword)",
      },
      {
        date: "2016-07-15",
        actor: "FTC",
        side: "neutral",
        move: "$200M Consent Order — explicitly NOT a pyramid scheme",
        detail:
          "The FTC and Herbalife reached a $200 million Consent Order. Herbalife agreed to restructure distributor compensation around verified retail sales and to install retail sales tracking. Critically, the FTC's release stated that Herbalife was [not determined to be a pyramid scheme]. Ackman's central $0 thesis died in a single press release.",
        financialImpact: "HLF +10% on the day",
        weapon: "FTC Consent Order (no pyramid finding)",
      },
      {
        date: "2018-02-28",
        actor: "Bill Ackman / Pershing Square",
        side: "attack",
        move: "Full short closed — surrender after five years",
        detail:
          "Ackman publicly closed the entire Herbalife short. He had migrated from direct borrowed-stock shorts to put options during 2017 in an effort to cap downside, but the cumulative loss was unavoidable. Estimated cumulative loss approximately $1 billion. It is one of the largest single-position short losses in hedge-fund history.",
        financialImpact: "Pershing Square AUM $20B → $8B (2015-2018)",
        weapon: "White flag — surrender",
      },
    ],
    financialWeapons: [
      {
        name: "13D counter-buying (counter 13D filing)",
        side: "defense",
        usedBy: "Carl Icahn",
        description:
          "Filing a control-intent 13D (not a passive 13G) against a publicly declared short. Beyond the headline counter-bet, the buying itself drained the available stock-borrow pool, driving up Ackman's borrow rate. A counter 13D simultaneously moves the price, drains the borrow supply, and signals governance-level intent — three structural pressures in one filing.",
        effectiveness: "decisive",
      },
      {
        name: "Buybacks + dividend (dividend yield defense)",
        side: "defense",
        usedBy: "Herbalife management",
        description:
          "Cumulative buybacks of $4 billion+ between 2013 and 2018 shrank the float, driving up the borrow rate. The maintained quarterly dividend created a recurring payment obligation for the short side. Convertible notes were used to finance buybacks, creating a circular structure that compounded the pressure.",
        effectiveness: "effective",
      },
      {
        name: "Activist short + 320-slide presentation",
        side: "attack",
        usedBy: "Bill Ackman",
        description:
          "A classic activist short combined with a public presentation, FTC petitions, congressional lobbying, and community organizing. It produced a -39% move in days. Held for five years, it produced approximately $1 billion in losses. The structural problem: a public short publicly announces the borrower's pain points to anyone willing to buy against it.",
        effectiveness: "backfired",
      },
      {
        name: "Standstill agreement + board seats",
        side: "defense",
        usedBy: "Herbalife + Carl Icahn",
        description:
          "Cap Icahn's position at ~25% in exchange for board seats. This formalized the management-Icahn alliance, sent a [controllable activist] signal to the market, and reinforced the united front against the short camp.",
        effectiveness: "effective",
      },
      {
        name: "FTC Consent Order (no pyramid finding)",
        side: "neutral",
        usedBy: "FTC Bureau of Consumer Protection",
        description:
          "A $200 million fine plus retail sales tracking obligations imposed real operational constraints, but the FTC's explicit refusal to classify Herbalife as a pyramid scheme functioned as a regulatory imprimatur for the counter camp. The agency, almost incidentally, stamped the verdict on the war.",
        effectiveness: "decisive",
      },
      {
        name: "Live cable media campaign",
        side: "defense",
        usedBy: "Carl Icahn",
        description:
          "The 28-minute live exchange on CNBC's Fast Money Halftime Report on January 25, 2013, made cable television a formal arena of activist warfare. After this episode, every major activist began running coordinated media campaigns through CNBC, Bloomberg, and (later) Twitter — the [activist celebrity era] in practice.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2016-07-15",
      event: "FTC $200M Consent Order explicitly declines to brand Herbalife a pyramid scheme",
      detail:
        "After 28 months of investigation, the FTC announced a $200 million settlement with language stating that Herbalife was [not determined to be a pyramid scheme]. Ackman's central premise (an FTC-driven shutdown sending the stock to zero) died in a single press release. The stock rallied roughly +10% on the day, and Ackman began migrating from direct shorts to put options. The war's outcome was no longer in doubt; only the timing of Ackman's surrender remained.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Carl Icahn + Herbalife (defense, decisive victory)",
      margin: "Icahn cumulative gain ~$1.3B vs. Ackman cumulative loss ~$1B (~$2.3B P&L spread)",
      note:
        "Icahn exited in two tranches in 2021 — $600M tendered into a Herbalife buyback at $48.05 in January, and the remaining ~5 million shares sold for approximately $248 million in May — closing an eight-year hold with roughly $1.3 billion in cumulative gain including dividends. Ackman closed his short on February 28, 2018 at an estimated $1 billion loss. Pershing Square's AUM contracted from $20 billion to about $8 billion across the period, one of the largest single-position-driven AUM contractions in modern hedge-fund history.",
    },
    priceImpact: {
      preContest: "$42.50 (Dec 18, 2012, pre-Ackman attack)",
      peak: "~$83 (Jan 2014, short squeeze + Icahn accumulation)",
      postContest: "$48.05 (Jan 2021, Icahn first-tranche exit price)",
      note:
        "Across 2012-2021, HLF traded between $26 (Dec 24, 2012 low) and roughly $83 (Jan 2014 peak). At Ackman's surrender on February 28, 2018, the stock was near $93. Icahn's final exit (May 2021) cleared around $50. His estimated weighted-average cost basis was approximately $40, with weighted-average exit near $48-50 — a capital gain of roughly 20-25% augmented by eight years of dividends ($5/share cumulative) and buyback tender premiums, producing the ~$1.3B realized total.",
    },
  },

  // ── Deal Structure ──────────────────────────────────────────
  dealStructure: {
    body:
      "This was not an M&A transaction. It was a clash of market mechanisms: an activist short on one side; a counter-buying activist long, working in coordination with management, on the other. Icahn entered via a 13D at 12.98%, scaled to roughly 25% under a negotiated standstill, and took five board seats. Ackman ran a classic activist short paired with a public campaign, later migrating to put options in 2017 to cap losses. Herbalife management deployed the [squeeze triple] — buybacks, convertibles, and a maintained dividend — to drive up the cost of borrow on Ackman's shares and inflict steady, recurring economic damage. Icahn exited in two tranches in 2021; Ackman covered on February 28, 2018.",
    preOwnership: {
      nodes: [
        { id: "ackman", label: "Pershing Square (Ackman)", sub: "~$1B nominal short, ~20M shares", type: "fund" },
        { id: "hlf",    label: "Herbalife Ltd. (NYSE: HLF)", sub: "MLM nutrition, market cap ~$4.5B", type: "target" },
        { id: "icahn",  label: "Carl Icahn / Icahn Enterprises", sub: "Feb 14, 2013 — 13D at 12.98%", type: "fund" },
        { id: "loeb",   label: "Third Point (Daniel Loeb)", sub: "Early counter long, 8.2%",       type: "fund" },
        { id: "ftc",    label: "FTC (Bureau of Consumer Protection)", sub: "Mar 2014 formal probe",   type: "entity" },
        { id: "public", label: "Public float",             sub: "Diffuse holders, swing votes",     type: "public" },
      ],
      edges: [
        { from: "ackman", to: "hlf", label: "Public short + 320-slide campaign" },
        { from: "icahn",  to: "hlf", label: "13D 12.98% → scaled to ~25%" },
        { from: "loeb",   to: "hlf", label: "8.2% long (short-term trade)" },
        { from: "ftc",    to: "hlf", label: "Formal investigation (Mar 2014)" },
        { from: "public", to: "hlf", label: "Residual diffuse holdings" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hlf2",    label: "Herbalife (post-FTC settlement)", sub: "Business model validated; comp restructured", type: "target" },
        { id: "icahn2",  label: "Carl Icahn (full exit 2021)",     sub: "Jan 2021 $600M + May 2021 ~$248M",            type: "fund" },
        { id: "ackman2", label: "Pershing Square (cover 2018)",    sub: "Estimated loss ~$1B; AUM $20B → $8B",          type: "fund" },
        { id: "ftc2",    label: "FTC Consent Order",               sub: "$200M + no pyramid finding",                   type: "entity" },
      ],
      edges: [
        { from: "ftc2",    to: "hlf2", label: "$200M + retail sales tracking obligation" },
        { from: "icahn2",  to: "hlf2", label: "Jan 2021 tender at $48.05 + remaining shares sold May 2021" },
        { from: "ackman2", to: "hlf2", label: "Feb 28, 2018 — full short covered" },
      ],
    },
    keyTerms: [
      { label: "Ackman nominal short",           value: "~$1B / ~20M shares", accent: true },
      { label: "Icahn 13D filing (Feb 14, 2013)", value: "14,015,151 shares = 12.98% / $214M", accent: true },
      { label: "Icahn peak stake",               value: "~24-25% (standstill cap)" },
      { label: "Icahn board seats",              value: "Five (of 13)" },
      { label: "FTC settlement (Jul 15, 2016)",  value: "$200M + retail sales tracking obligation (no pyramid finding)", accent: true },
      { label: "Ackman cover date",              value: "Feb 28, 2018 (5-year hold)" },
      { label: "Ackman estimated loss",          value: "~$1B (one of the largest single-position short losses in hedge-fund history)", accent: true },
      { label: "Icahn first exit (Jan 4, 2021)", value: "$600M @ $48.05/share (tender into Herbalife buyback)" },
      { label: "Icahn final exit (May 2021)",    value: "Remaining ~5M shares for ~$248M" },
      { label: "Icahn cumulative gain",          value: "~$1.3B (capital gain + dividends)", accent: true },
    ],
  },

  // ── Advisors ────────────────────────────────────────────────
  advisors: {
    body:
      "Unlike a traditional M&A transaction, this case ran on three parallel advisory tracks: an activist short campaign, a counter-activist long campaign, and a regulatory defense. Icahn ran in-house with Jefferies; Pershing Square ran in-house with Sard Verbinnen on communications; Herbalife retained Jefferies and Latham & Watkins for the FTC defense; the FTC's Bureau of Consumer Protection ran its case directly. Combined advisory and campaign costs across both sides are estimated to have exceeded $200 million.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Carl Icahn (counter-activist camp)",
        initials: "ICA",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "Icahn Capital internal team",
            role: "Investment strategy + 13D filing",
            roleType: "other",
            note: "Carl Icahn ran the campaign personally. Brett Icahn (son) and David Schechter (son-in-law) took Herbalife board seats. Consistent with Icahn's preference for minimal external IB engagement.",
          },
          {
            firm: "Jefferies LLC",
            role: "Financial advisor",
            roleType: "financial",
            note: "Supported the 13D execution and the standstill negotiation. Also advised on Herbalife's 2014 convertible note issuance.",
          },
          {
            firm: "Bracewell LLP",
            role: "Legal advisor",
            roleType: "legal",
            note: "Schedule 13D and 13D/A filings, standstill drafting, and board-seat negotiation legal counsel.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Pershing Square (activist short camp)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Pershing Square internal research team",
            role: "Short thesis development + presentation",
            roleType: "other",
            note: "Bill Ackman, David Klafter (General Counsel), Charles Korn, and the firm's internal research team produced the 320-slide presentation. The firm also ran a public Pyramidschemes.com site for years.",
          },
          {
            firm: "Sard Verbinnen & Co.",
            role: "PR / media strategy",
            roleType: "other",
            note: "Media strategy for the original presentation, congressional lobbying, and Hispanic-community outreach — the central PR partner of the campaign.",
          },
          {
            firm: "Sullivan & Cromwell LLP",
            role: "Legal advisor",
            roleType: "legal",
            note: "Short-position disclosure law, SEC engagement, and FTC petition legal strategy.",
          },
        ],
      },
    ],
    disclaimer:
      "Note: the defense side here includes Herbalife management itself (Michael Johnson, with Latham & Watkins and Jefferies). The FTC's Bureau of Consumer Protection ran its investigation directly without external counsel. Advisor information is drawn from public sources; specific engagement terms remain confidential.",
  },

  // ── Valuation ───────────────────────────────────────────────
  valuation: {
    body:
      "The valuation debate in this case reduced to a binary: was Herbalife a pyramid scheme or a normal MLM. Ackman argued for $0 under an FTC-shutdown scenario. Icahn argued for a normal consumer-staples valuation of EV/EBITDA 8-10x, anchored by a 14% operating margin, strong free cash flow, and a global Member base of more than three million people. The FTC's July 2016 settlement vindicated the latter framing. Icahn's estimated weighted-average cost basis was approximately $40 with a weighted-average exit near $48-50, producing a capital gain of roughly 20-25% augmented by eight years of dividends and buyback tender premiums — about $1.3 billion realized in total.",
    rows: [
      { item: "HLF price (Dec 18, 2012, pre-Ackman attack)", val: "$42.50",   note: "Stock fell 10% in 6 seconds at the presentation" },
      { item: "HLF price (Dec 24, 2012, trough)",            val: "$26.06",   note: "-39% across six trading days" },
      { item: "Icahn cost basis at initial 13D (Feb 2013)",   val: "~$15.27 = $214M / 14.0M shares", note: "Feb 14, 2013 filing" },
      { item: "Icahn weighted-average cost basis (full position)", val: "~$40", note: "Across 2013-2014 scaling to ~24%", accent: true },
      { item: "HLF short-term peak (Jan 2014)",             val: "~$83",      note: "Short squeeze + Icahn accumulation + Soros entry", accent: true },
      { item: "HLF at FTC probe announcement (Mar 12, 2014)", val: "~$60",    note: "Stock -7% on the day" },
      { item: "HLF at FTC settlement (Jul 15, 2016)",        val: "+10% to ~$67", note: "No pyramid finding; Ackman's core thesis dies" },
      { item: "HLF at Ackman cover (Feb 28, 2018)",          val: "~$93",      note: "Ackman had migrated to puts from 2017 to cap downside" },
      { item: "Icahn first-tranche exit (Jan 2021)",         val: "$48.05/share", note: "Tendered into Herbalife buyback; $600M recovered", accent: true },
      { item: "Icahn final exit (May 2021)",                 val: "Remaining 5M shares at ~$50 average", note: "Approximately $248M; eight-year hold ends" },
      { item: "Ackman estimated cumulative loss",            val: "~$1B",      note: "Position loss + borrow cost + campaign cost", accent: true },
      { item: "Icahn estimated cumulative gain",             val: "~$1.3B",    note: "Capital gain + ~$5/share cumulative dividend", accent: true },
    ],
    disclaimer:
      "Note: Icahn's ~$40 weighted-average cost basis is an estimate integrating staged accumulation across 2013-2014 and tender activity. Ackman's loss is an estimate combining direct shorts and the 2017 put-options conversion; precise realized P&L depends on confidential Pershing Square fund-level data.",
  },

  // ── Rationale ───────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Icahn took the opposite side of Ackman",
      initials: "ICA",
      bg: "bg-orange-600",
      points: [
        "[Thirty years of operation = low pyramid probability.] Herbalife had operated for more than three decades without direct FTC action. Under the FTC's post-Amway (1979) framework, a structurally illegal MLM does not usually survive that long. The survivorship logic by itself created a strong prior in favor of the long side.",
        "[A textbook short-squeeze setup.] Ackman's public disclosure of a roughly 20 million share short broadcast his pressure points to the market: every share bought against him reduced borrow availability and raised his cost of carry. The 13D counter-buy alone delivered a mechanical squeeze; coordinated buybacks and convertibles amplified it.",
        "[Cash generative + buyback capacity.] FY2012 operating margin of 13.8%, strong free cash flow, ample buyback firepower. Strip out the pyramid question and Herbalife was a normal consumer-staples company trading at roughly EV/EBITDA 8-10x. Icahn's activist toolkit (buyback pressure, dividend support, board seats) is at its most lethal against precisely this kind of issuer.",
        "[Personal antagonism.] A 2003 Hallwood Realty dispute had created a decade-old grudge between Icahn and Ackman. Icahn publicly stated he would [take Ackman to school]. This trade was a financial position; it was also a personal stage.",
        "[The time asymmetry favored the long side.] FTC investigations typically take 2-3 years to resolve. Every day of that elapsed time cost Ackman borrow costs and dividend obligations while delivering Icahn dividends and buyback premiums. The clock itself was a weapon.",
      ],
    },
    seller: {
      title: "Why Ackman ultimately lost",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "[The entire thesis hung on a single regulatory scenario.] Ackman's $0 case required the FTC to find Herbalife a pyramid scheme, shut down its business model, and send the stock to zero. When the FTC chose a Consent Order with no pyramid finding on July 15, 2016, the thesis died in a single press release.",
        "[Publicizing a short is a structural self-trap.] The 320-slide presentation and the dedicated Pyramidschemes.com site delivered the headline drawdown but simultaneously advertised every weakness of the position to the counter camp (Icahn, Loeb, Soros, Herbalife buybacks). A public short announces the borrower's pain points to every potential buyer.",
        "[Five years of accumulated bleed.] An average borrow rate of 3-5% with peaks above 8%, plus quarterly dividend payments on roughly 20 million short shares. Across five years the carry alone exceeded $300 million by reasonable estimates — before considering the unrealized mark-to-market.",
        "[Time asymmetry is the natural enemy of public shorts.] Every day Ackman paid borrow, dividends, and opportunity cost. Every day Icahn accrued dividends, buyback premium, and unrealized capital gains. The longer the position stayed open, the wider the P&L spread between the two camps grew — exponentially.",
        "[The trigger for Pershing Square's AUM collapse.] Combined with simultaneous losses on Valeant, Herbalife pushed Pershing Square AUM from roughly $20 billion (2015) to $8 billion (2018) and ultimately to about $4 billion (2019). It is one of the clearest examples in modern markets of a single position threatening a fund's continued existence.",
      ],
    },
  },

  // ── Post-Deal Assessment ────────────────────────────────────
  postDealAssessment: {
    asOfDate: "As of June 11, 2026",
    body:
      "From the perspective of mid-2026, the Icahn-Ackman counter-activism war is read as a watershed in three ways. First, it is the first major case in modern U.S. markets where activist met activist on opposite sides of the same name, and where the issuer's management functioned as a coordinated ally of one side — a template later replicated in numerous campaigns. Second, it exposed the structural weaknesses of public activist short selling (regulatory time asymmetry, accumulated carry cost, vulnerability to counter-buying) so completely that subsequent short-focused research shops, including Hindenburg and Muddy Waters, pivoted toward a [publish and exit quickly] model rather than holding multi-year public shorts. Third, the January 25, 2013 CNBC exchange made cable television and (later) Twitter formal arenas of activist combat, opening the [activist celebrity era] that still defines hedge-fund media strategy today. Herbalife itself, rebranded Herbalife Nutrition, continues to operate in 2026 with the retail sales tracking obligations from the 2016 settlement long since integrated.",
    overallVerdict: "Decisive Icahn + Herbalife victory; one of the largest single-position short losses in hedge-fund history for Ackman",
    positives: [
      "[The template for modern counter-activism.] 13D counter-buying + media campaign + board seats + buyback pressure as a composite weapons system. Elliott, Starboard, and ValueAct have all deployed variants of this template in the years since.",
      "[Icahn realized roughly $1.3 billion.] An eight-year hold with dividend collection plus two 2021 exit tranches (a $600M tender into a Herbalife buyback in January and roughly $248M for the remaining shares in May). One of the highest-return counter-trades of Icahn's career.",
      "[MLM regulatory standards updated.] The FTC's 2016 Consent Order made retail sales tracking and compensation restructuring effectively standard across U.S. MLM — the first material refresh of the post-Amway 1979 framework in roughly three decades.",
      "[The opening of the activist celebrity era.] CNBC, Bloomberg, and (later) Twitter became formal theaters of activist warfare. Icahn's own August 2013 Apple tweet sits on this same line of evolution.",
    ],
    risks: [
      "[Pershing Square nearly collapsed.] AUM contracted from $20B (2015) to $8B (2018) to about $4B (2019). Ackman has spent the years since rebuilding through new structures, including the SPAC Pershing Square Tontine Holdings (2020) and a 2024 closed-end fund IPO. The Herbalife loss cast a shadow lasting seven to eight years.",
      "[Activist short selling effectively contracted.] The [publicly disclosed, multi-year hold] model essentially disappeared after Ackman. Hindenburg, Muddy Waters, and the next generation shifted toward [publish, monetize quickly, exit]. Critics argue this has reduced the market's appetite for genuinely deep, long-horizon short investigations.",
      "[The downsides of media-first activism.] CNBC and Twitter as formal arenas have made narrative and celebrity effect more powerful than data in some campaigns. The 2021 GameStop episode is partly a downstream consequence of this cultural shift.",
      "[The dangers of betting on a single regulatory scenario.] Ackman's central error was conditioning a $1B short entirely on a specific FTC outcome. Modern activist campaigns increasingly model the full distribution of regulatory outcomes — but the trap of conviction-anchored single-scenario thinking remains common.",
    ],
    editorNote:
      "The single most important lesson of this case is that public short selling is an asymmetric game in which time works against the short. Ackman's analysis was not entirely wrong, the FTC did impose a $200 million fine and structural compensation reforms. But [partially right] and [made money on the short] are different things. The counter camp (Icahn plus Herbalife management) used a composite weapons system to make time their ally, while Ackman bled carry, dividends, and opportunity cost every single day. The war effectively ended on July 15, 2016, the moment the FTC's press release stated that Herbalife was [not determined to be a pyramid scheme]. Ackman held on for another nineteen months before raising the white flag on February 28, 2018. Five years is too long for any public short to survive against a well-funded counter camp, and this is the textbook that proves it.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "ICA",
    acquirerBg: "bg-orange-600",
    targetInitials: "HLF",
    targetBg: "bg-green-700",
    acquirerName: "Carl Icahn / Icahn Enterprises L.P.",
    targetName: "Herbalife Ltd. (NYSE: HLF)",
    dealTitle: "Counter-Activism vs Pershing Square's $1B Short — The First Activist-vs-Activist War",
    dealSize: "13D 12.98% → ~25% / ~$1.3B realized",
    dealSizeUSD: "13.98M shares (12.98% via 13D, $214M initial) → realized ~$1.3B over 8 years",
    evEbitda: "EV/EBITDA ~8x (at FY2013 entry)",
    closeDate: "Feb 28, 2018 (Ackman cover) / May 2021 (Icahn full exit)",
  },

  // ── Sources ─────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "Icahn Enterprises Schedule 13D Filing — Herbalife Ltd., 14,015,151 shares (12.98%), February 14, 2013, SEC EDGAR",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000813762&type=SC+13D",
    },
    {
      id: 2,
      text: "CNBC — 'Icahn Buys 14 Million Shares of Herbalife for 12.98% Stake' (February 14, 2013)",
      url: "https://www.cnbc.com/2013/02/14/icahn-buys-14-million-shares-of-herbalife-for-1298-stake.html",
    },
    {
      id: 3,
      text: "CNBC Transcript — 'Investors Bill Ackman and Carl Icahn Go Head-to-Head on CNBC's Fast Money Halftime Report' (January 25, 2013)",
      url: "https://www.cnbc.com/2013/01/25/cnbc-transcript-investors-bill-ackman-and-carl-icahn-go-headtohead-on-cnbcs-fast-money-halftime-report.html",
    },
    {
      id: 4,
      text: "FTC Press Release — 'Herbalife Will Restructure Its Multi-level Marketing Operations and Pay $200 Million For Compensation to Consumers' (July 15, 2016)",
      url: "https://www.ftc.gov/news-events/news/press-releases/2016/07/herbalife-will-restructure-its-multi-level-marketing-operations-pay-200-million-compensation",
    },
    {
      id: 5,
      text: "FTC Business Guidance Blog — 'It's no longer business as usual at Herbalife: An inside look at the $200 million FTC settlement' (July 2016)",
      url: "https://www.ftc.gov/business-guidance/blog/2016/07/its-no-longer-business-usual-herbalife-inside-look-200-million-ftc-settlement",
    },
    {
      id: 6,
      text: "CNBC — 'Five years after brawl with Icahn, Ackman exits losing bet against Herbalife' (February 28, 2018)",
      url: "https://www.cnbc.com/2018/02/28/ackman-exits-bet-against-herbalife.html",
    },
    {
      id: 7,
      text: "Bloomberg — 'Carl Icahn Sells $600 Million Herbalife Stake, Gives Up Board Seats' (January 4, 2021, $48.05/share)",
      url: "https://www.bloomberg.com/news/articles/2021-01-04/icahn-sells-600-million-herbalife-stake-gives-up-board-seats",
    },
    {
      id: 8,
      text: "CNBC — 'Carl Icahn has exited his Herbalife position, according to sources' (May 6-7, 2021)",
      url: "https://www.cnbc.com/2021/05/06/carl-icahn-has-exited-his-herbalife-position-according-to-sources.html",
    },
    {
      id: 9,
      text: "Herbalife Ltd. Form 10-K Annual Reports FY2012, FY2013, FY2015, FY2017 (SEC EDGAR)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001180262&type=10-K",
    },
    {
      id: 10,
      text: "Pershing Square Capital Management — 'Who Wants To Be A Millionaire?' 320-slide Herbalife presentation (December 20, 2012)",
    },
    {
      id: 11,
      text: "CNBC Retrospective — 'How the Icahn-Ackman Battle of the Billionaires on CNBC became a defining moment of the decade' (December 13, 2019)",
      url: "https://www.cnbc.com/2019/12/13/reliving-the-carl-icahn-and-bill-ackman-herbalife-feud-on-cnbc.html",
    },
    {
      id: 12,
      text: "IESE Insight — 'Hedge-fund activism and the fight over Herbalife' (academic analysis)",
      url: "https://www.iese.edu/insight/articles/hedge-fund-activism-herbalife/",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Carl Icahn vs Ackman Herbalife — The Counter-Activism Playbook in Full",
    description:
      "How Carl Icahn's 12.98% 13D long (Feb 14, 2013) broke Bill Ackman's $1B Herbalife short over five years. CNBC live brawl, scaling to ~25%, five board seats, the FTC's $200M no-pyramid Consent Order (July 2016), Ackman's ~$1B loss at cover (Feb 28, 2018), and Icahn's ~$1.3B realized exit (2021). The first activist-vs-activist war in modern markets.",
    keywords: [
      "Carl Icahn Herbalife",
      "Bill Ackman Herbalife short",
      "counter-activism",
      "activist vs activist",
      "13D filing",
      "short squeeze",
      "FTC pyramid scheme",
      "Pershing Square loss",
      "activist celebrity era",
      "MLM",
      "Herbalife HLF",
      "Icahn Enterprises",
    ],
  },

  // ── Concepts ────────────────────────────────────────────────
  concepts: [
    {
      term: "Counter-Activism",
      description:
        "An activist investor taking the opposite side of another activist's publicly disclosed campaign. Icahn's February 14, 2013 13D entry against Ackman's December 2012 short was the first major modern case of [public activist short] meeting [public activist long] on the same name, with management coordinating with one side.",
    },
    {
      term: "Activist Short Selling",
      description:
        "A short position paired with a public campaign (presentations, regulatory petitions, lobbying, media). Ackman's Herbalife trade is the textbook example of the structural weaknesses of the model: time asymmetry, accumulated carry, and vulnerability to counter-buying.",
    },
    {
      term: "Short Squeeze",
      description:
        "A self-reinforcing dynamic in which short sellers cover losing positions, driving the stock higher, which in turn forces more covering. Icahn's 13D counter-buying drained borrow supply, lifting the stock-loan rate from roughly 0.5% to an estimated 8%+ at peak — a structural rather than retail-driven squeeze.",
    },
    {
      term: "FTC Pyramid Scheme Investigation",
      description:
        "The FTC's framework for evaluating MLM legality, anchored in the 1979 Amway decision. The Herbalife probe (2014-2016) tested the framework for the first time in three decades, and the July 15, 2016 Consent Order without a pyramid finding effectively updated the standard for the modern industry.",
    },
    {
      term: "MLM Business Model",
      description:
        "Direct sales through a network of independent distributors with multi-level compensation. The legal/illegal boundary turns on the share of revenue from verified retail sales to genuine end consumers and the treatment of internal consumption. Post-2016, retail sales tracking became effectively standard across U.S. MLM.",
    },
    {
      term: "CNBC Live Confrontation",
      description:
        "The 28-minute on-air exchange between Icahn (via phone) and Ackman (in studio) on Fast Money Halftime Report on January 25, 2013. Icahn called Ackman [a liar] and [the crybaby in the schoolyard]. The moment cable television was admitted as a formal arena of hedge-fund warfare and the start of the [activist celebrity era].",
    },
    {
      term: "13D Counter-Filing",
      description:
        "Filing a Schedule 13D (active control-and-influence) rather than a 13G (passive) against a publicly declared short. Icahn's February 14, 2013 filing signaled governance-level intent, not merely a counter-trade — establishing the legal foundation for the subsequent standstill and five board seats.",
    },
    {
      term: "Dividend Yield Defense",
      description:
        "A coordinated buyback + maintained dividend strategy that imposes a recurring dividend-payment obligation on the short side while shrinking float and lifting borrow rates. Herbalife's cumulative buyback exceeded $4 billion between 2013 and 2018; combined with the maintained quarterly dividend, it was a structural counter-weapon against the Ackman position.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Exactly when and at what size did Carl Icahn build his Herbalife stake?",
      a: "Icahn Enterprises filed a Schedule 13D on February 14, 2013, disclosing the purchase of 14,015,151 Herbalife shares (12.98% of outstanding) for roughly $214 million, an average entry of about $15.27 per share. Through 2013 and 2014, he scaled to roughly 24-25% under a standstill agreement that capped the position near 25% in exchange for five board seats. The choice to file a 13D rather than a 13G was the critical signal — this was an active control-and-influence filing, telegraphing that Ackman's short thesis would be dismantled at the governance level, not merely traded against.",
    },
    {
      q: "What actually happened on the CNBC broadcast of January 25, 2013?",
      a: "On Fast Money Halftime Report, Carl Icahn (by phone) and Bill Ackman (in studio) went head-to-head for 28 live minutes. Icahn called Ackman [a liar] and [the crybaby in the schoolyard], and said he had [one of the worst reputations on Wall Street]. Ackman countered with references to Icahn's losses in the 2003 Hallwood Realty litigation. CNBC widely cites the segment as one of the most-watched live exchanges in its history, and it is now broadly read as the opening of the [activist celebrity era] — the moment cable television and (later) Twitter became formal arenas of hedge-fund warfare.",
    },
    {
      q: "Why did the FTC decline to classify Herbalife as a pyramid scheme?",
      a: "After a 28-month investigation, the FTC announced a $200 million Consent Order on July 15, 2016, with language explicitly stating that Herbalife was [not determined to be a pyramid scheme]. Two reasons sit behind that outcome. First, the FTC concluded that Herbalife had a meaningful base of retail sales to genuine end consumers even after stripping out internal consumption by distributors. Second, the agency judged that restructuring the compensation system around verified retail sales (with mandated retail sales tracking) protected consumers more effectively than a forced shutdown would. That single press release effectively killed Ackman's [$0] thesis.",
    },
    {
      q: "How much did Bill Ackman lose, and when did he cover?",
      a: "Ackman publicly closed his Herbalife short on February 28, 2018, after roughly five years on the trade. The estimated cumulative loss is approximately $1 billion, combining mark-to-market position losses, five years of accumulated borrow cost, and the campaign cost. From 2017 onwards he had migrated from direct short positions to put options to cap downside, but the bleed of the prior years was already done. It is among the largest single-position short losses in hedge-fund history, and Pershing Square's AUM contracted from roughly $20 billion in 2015 to about $8 billion in 2018, and ultimately to roughly $4 billion in 2019, with the Valeant position contributing alongside.",
    },
    {
      q: "How much did Icahn make across the eight-year hold?",
      a: "Icahn exited in two 2021 tranches. On January 4, 2021, he tendered $600 million of stock back into a Herbalife buyback at $48.05 per share. In May 2021, he sold the remaining roughly five million shares for approximately $248 million, ending the eight-year hold. Against an estimated weighted-average cost basis of around $40, the weighted-average exit of approximately $48-50 implies a capital gain of roughly 20-25%; adding eight years of dividends (cumulative around $5 per share) and buyback tender premium produces an estimated cumulative gain of approximately $1.3 billion. Combined with Ackman's ~$1 billion loss, the cross-camp P&L spread is roughly $2.3 billion.",
    },
    {
      q: "What lasting effects has this case had on activist markets as of 2026?",
      a: "Three lasting effects are visible. First, the [publicly declared, multi-year hold] activist short model has effectively disappeared. Hindenburg, Muddy Waters, and the next generation of short researchers have moved to a [publish, monetize quickly, exit] cadence. Second, counter-activism has become an established strategy in its own right, with Elliott, Starboard, and ValueAct all deploying variants of the 13D + media + board seats + buyback pressure composite weapons system. Third, CNBC, Bloomberg, and Twitter are now permanent theaters of activist warfare — the [activist celebrity era] is the standard operating environment, with downstream consequences that include the 2021 GameStop episode and the long aftermath of Pershing Square Tontine Holdings (2020 SPAC, wound down 2022). Herbalife itself, rebranded Herbalife Nutrition, continues to operate in 2026 with the FTC's retail sales tracking obligations long since integrated.",
    },
  ],
};

export default deal;
