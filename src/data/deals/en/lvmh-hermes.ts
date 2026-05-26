/**
 * LVMH vs. Hermès (2010–2014) — The Luxury Ambush and the Family Fortress
 * Bernard Arnault's 8-year equity swap accumulation · Hermès family H51 defense · Independence preserved
 */
import type { DealData } from "@/lib/deal-data";

const lvmhHermes: DealData = {
  // ── Meta ──────────────────────────────────────────────────────
  slug: "lvmh-hermes",
  title: "LVMH vs. Hermès — The Luxury Ambush and the Family Fortress",
  subtitle:
    "Bernard Arnault secretly accumulated a 23% economic stake over 8 years using equity swaps, then the Hermès heirs built the most elegant governance fortress in corporate history.",
  category: "control",
  industry: "Luxury Goods / Consumer",
  country: "FR",
  announcedAt: "2010-10-23",
  closedAt: "2014-12-17",
  announcedDisplay: "October 2010",
  closedDisplay: "December 2014",
  readingMinutes: 13,
  tags: [
    "control-contest",
    "equity-swap",
    "derivatives",
    "luxury",
    "family-governance",
    "hostile-approach",
    "france",
  ],
  excerpt:
    "Bernard Arnault secretly accumulated a 23% economic stake in Hermès over 8 years using equity swaps — invisible to markets and even the founding family. When the position was revealed in 2010, the Hermès heirs responded with one of the most elegant governance defenses in corporate history: pooling 50.2% into a single family holding company.",

  // ── Entity Icons ──────────────────────────────────────────────
  acquirer: { initials: "LV", bg: "bg-amber-900", label: "LVMH (Bernard Arnault)" },
  target:   { initials: "H",  bg: "bg-orange-700", label: "Hermès International" },

  // ── Background ────────────────────────────────────────────────
  background: [
    "Hermès International was founded in 1837 by Thierry Hermès as a harness maker in Paris and has remained under family control for over 180 years. The brand's Birkin and Kelly bags are among the world's most coveted luxury goods, with waiting lists often stretching years. The Hermès family (the Guerrand-Dumas clan) regards artisanal independence as central to the brand's identity and pricing power — refusing the industrial-scale approach taken by rival luxury conglomerates.",
    "LVMH's Bernard Arnault had spent decades building the world's largest luxury group through acquisitions: Louis Vuitton, Moët Hennessy, Bulgari, Christian Dior, and dozens more. A master of hostile approaches, Arnault had previously attempted to seize Gucci in 1999 before losing to Kering (then PPR). After that defeat, he devised a more patient, invisible strategy for Hermès.",
    "Beginning in 2002, LVMH quietly accumulated an economic interest in Hermès using cash-settled equity swaps — financial derivatives that delivered exposure to Hermès share price movements without requiring actual share purchases. Under French law at the time, such cash-settled derivatives fell outside mandatory disclosure thresholds, allowing LVMH to build a 23% economic position entirely below the regulatory radar. The Hermès family had no knowledge of the accumulation.",
    "On October 23, 2010, LVMH disclosed it held a 17.1% stake in Hermès, stunning the founding family and markets. Hermès shares surged 14% on the day. The family — recalling Arnault's Gucci playbook — immediately interpreted the disclosure as a first move toward a hostile takeover and launched what would become one of the most studied governance defenses in European corporate history.",
  ],

  // ── Deal Summary ──────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~€4.5 billion (LVMH's stake at peak)",
    acquirerName: "LVMH (Bernard Arnault)",
    targetName: "Hermès International",
    announcedDisplay: "October 2010",
    closedDisplay: "December 2014",
    country: "France",
  },

  // ── Executive Summary ─────────────────────────────────────────
  executiveSummary: [
    "LVMH accumulated a 23% economic interest in Hermès from 2002 to 2010 using cash-settled equity swaps — bypassing French disclosure rules and concealing the position from the Hermès family for eight years.",
    "On October 23, 2010, LVMH disclosed a 17.1% stake; Hermès shares surged 14% and the founding family immediately launched a governance counter-offensive.",
    "December 2010: The Hermès family — 50+ members — pooled 50.2% of shares into the H51 family holding company, mathematically preventing LVMH from ever reaching a majority regardless of further open-market purchases.",
    "French regulator AMF fined LVMH €8 million for derivative disclosure violations in 2013; Hermès pursued criminal fraud charges, increasing legal pressure on LVMH.",
    "September 2014: LVMH and Hermès reached a settlement — LVMH distributed its full 23.2% stake to its own shareholders as an in-kind dividend, realizing an estimated ~€4.4 billion gain while avoiding ~€1.5 billion in capital gains tax.",
    "Hermès remains an independent, family-controlled luxury house. Its share price rose from €130 at the time of the 2010 disclosure to over €2,400 by 2024 — roughly 18× in 14 years.",
  ],

  // ── Industry Overview ─────────────────────────────────────────
  industryOverview: {
    body: "The global luxury goods industry is bifurcated between multi-brand conglomerates (LVMH, Kering, Richemont) and independent family-owned houses (Hermès, Chanel). In conglomerate models, scale enables shared distribution, marketing infrastructure, and manufacturing leverage. Independent houses trade scale for identity: the scarcity, craftsmanship narrative, and pricing power that come from resisting industrialization. Hermès is the canonical example — it limits annual handbag production, employs only artisan craftspeople, and sets prices independently of market demand cycles. This model generates industry-leading operating margins (~32% in 2014) but makes the company an attractive control target for acquirers who believe they can maintain the brand while extracting conglomerate synergies.",
    metrics: [
      { label: "Hermès Market Cap (2014)",    value: "~€30 billion",   sub: "at time of LVMH exit" },
      { label: "Hermès Revenue (FY2014)",     value: "~€3.8 billion",  sub: "consolidated" },
      { label: "Hermès Operating Margin",     value: "~32%",           sub: "best-in-class luxury" },
      { label: "LVMH Group Revenue (2014)",   value: "~€30.6 billion", sub: "75+ brands" },
    ],
    subBody:
      "The LVMH-Hermès episode was a watershed moment for European governance and derivative disclosure rules. It demonstrated that a sophisticated acquirer could use financial engineering to gain a blockholding position in a family company without triggering any public disclosure — exploiting a structural gap in continental European disclosure regimes that had been designed around direct share purchases rather than total return exposures via derivatives.",
    players: [
      { name: "LVMH (Bernard Arnault)",               role: "World's largest luxury group; equity swap accumulation" },
      { name: "Hermès Family (Guerrand-Dumas clan)",  role: "Founding family; architect of H51 defense" },
      { name: "French AMF (financial regulator)",     role: "Investigated disclosure violations; imposed €8M fine on LVMH" },
      { name: "Axel Dumas (CEO, Hermès)",             role: "Led governance defense; coordinated family response" },
    ],
  },

  // ── Company Overview ──────────────────────────────────────────
  companyOverview: {
    targetName: "Hermès International S.A.",
    body: "Hermès International was incorporated in 1938 and listed on Euronext Paris in 1993, though the founding family retained dominant control through direct holdings and, after 2010, through the H51 family holding company. The company operates 14 leather goods workshops in France, producing Birkin and Kelly bags entirely by hand — each bag crafted by a single artisan. Beyond leather goods and apparel (combined ~55% of revenue), Hermès produces silk scarves, fragrances, watches, tableware, and home furnishings. The deliberately constrained production model creates artificial scarcity and supports secondary market premiums of 2–4× retail on flagship bags. Hermès's operating margin of ~32% in the years following the control dispute was the highest in the luxury sector, reflecting the pricing power that family independence and artisanal positioning enable.",
    metrics: [
      { label: "Founded",                   value: "1837",            sub: "Thierry Hermès, Paris" },
      { label: "Revenue (FY2014)",          value: "~€3.8 billion",   sub: "consolidated" },
      { label: "Operating Margin (FY2014)", value: "~32%",            sub: "best-in-class luxury" },
      { label: "Family Stake (H51)",        value: "50.2%",           sub: "locked in family holding" },
      { label: "Employees",                 value: "~11,000",         sub: "of which ~7,000 artisans" },
      { label: "Listing",                   value: "Euronext Paris",  sub: "RMS, since 1993" },
    ],
    financials: [
      { year: "FY2010", revenue: 2400, cogs: 850,  grossProfit: 1550, sga:  700, operatingIncome:  850, ebitda: 1000 },
      { year: "FY2012", revenue: 3258, cogs: 1150, grossProfit: 2108, sga:  960, operatingIncome: 1148, ebitda: 1350 },
      { year: "FY2014", revenue: 3776, cogs: 1330, grossProfit: 2446, sga: 1100, operatingIncome: 1346, ebitda: 1580 },
    ],
    financialsNote:
      "Unit: € millions | IFRS consolidated | Source: Hermès Annual Reports. EBITDA estimated. Throughout the control dispute, Hermès continued growing revenue and margins — the conflict did not disrupt operations.",
    financialsCurrency: "€",
    financialsUnit: "M",
  },

  // ── Control Battle Overview ───────────────────────────────────
  controlBattleOverview: {
    body: "Bernard Arnault used equity swaps from 2002 to accumulate a 23% economic stake in Hermès without the founding family's knowledge. When the position was revealed in 2010, the Hermès heirs designed history's most elegant governance defense.",
    catalyst: "Hermès had been family-owned since its 1837 founding — the most coveted independent trophy in luxury. LVMH had previously used aggressive share accumulation tactics against Gucci and other targets. The Hermès family interpreted LVMH's 17% disclosure as the opening move of a hostile takeover and responded immediately.",
    attackerLabel: "LVMH (Bernard Arnault)",
    defenderLabel: "Hermès Family (H51)",
    battleMoves: [
      {
        date: "2002-2010",
        side: "attack",
        actor: "LVMH",
        move: "Silent accumulation via equity swaps",
        detail: "From 2002, LVMH entered into cash-settled equity swap agreements with investment banks, accumulating 23% economic exposure to Hermès shares. Under French law, cash-settled derivatives did not trigger mandatory disclosure, keeping the entire position hidden from the Hermès family and the market.",
        weapon: "Equity Swap (Cash-Settled)",
        financialImpact: "Economic interest 0% → 23% (8 years, undisclosed)",
      },
      {
        date: "2010-10-23",
        side: "attack",
        actor: "LVMH",
        move: "Surprise 17.1% stake disclosure",
        detail: "LVMH publicly disclosed ownership of 17.1% of Hermès shares. Arnault stated there was 'no hostile intent,' but the founding family did not believe him. Hermès shares rose 14% on the day as markets processed the control premium.",
        financialImpact: "Hermès shares +14% on disclosure day",
      },
      {
        date: "2010-12",
        side: "defense",
        actor: "Hermès Family",
        move: "H51 family holding company — stake pooling defense",
        detail: "More than 50 Hermès family members pooled their shares into the H51 Société en commandite par actions (SCA), collectively reaching 50.2% of Hermès voting shares. No matter how many additional shares LVMH purchased on the open market, it could never reach a majority — the math was closed permanently.",
        weapon: "Family Stake Pooling (H51 Holding)",
        financialImpact: "LVMH majority acquisition mathematically blocked",
      },
      {
        date: "2011-06",
        side: "neutral",
        actor: "French AMF",
        move: "AMF launches disclosure violation investigation",
        detail: "France's financial markets regulator opened a formal investigation into whether LVMH's equity swap accumulation violated mandatory disclosure obligations. The investigation provided legal ammunition for the Hermès family's counter-offensive.",
        weapon: "Regulatory Enforcement",
        financialImpact: "LVMH fined €8 million",
      },
      {
        date: "2012-06",
        side: "attack",
        actor: "LVMH",
        move: "Open-market purchases push stake to 22.6%",
        detail: "Despite the H51 barrier, LVMH continued buying Hermès shares in the open market, reaching 22.6%. However, with the family's 50.2% locked in H51, LVMH could not approach a majority regardless of further accumulation.",
        financialImpact: "Stake 17% → 22.6%",
      },
      {
        date: "2013-12",
        side: "defense",
        actor: "Hermès Legal Team",
        move: "Criminal complaint for fraud",
        detail: "Hermès filed a criminal complaint alleging LVMH's equity swap strategy constituted market manipulation and potentially involved the use of inside information — ratcheting legal and reputational pressure on LVMH to exit the position.",
        weapon: "Criminal Complaint",
      },
      {
        date: "2014-09",
        side: "neutral",
        actor: "LVMH + Hermès Settlement",
        move: "In-kind distribution of 23.2% stake — negotiated exit",
        detail: "LVMH agreed to distribute its entire 23.2% Hermès stake to LVMH's own shareholders as an in-kind dividend rather than selling in the open market. This structure avoided triggering capital gains tax on the appreciation (~€1.5 billion saved) while cleanly exiting the position. LVMH also committed to a 5-year lock-up against reacquiring Hermès shares.",
        weapon: "In-kind Distribution",
        financialImpact: "LVMH realized ~€4.4 billion gain; ~€1.5 billion tax saved",
      },
    ],
    financialWeapons: [
      {
        name: "Equity Swap (Cash-Settled)",
        side: "attack",
        usedBy: "LVMH",
        description: "Cash-settled total return derivatives providing economic exposure to Hermès without triggering mandatory French share-ownership disclosure. Enabled 8 years of silent accumulation to 23% economic interest.",
        effectiveness: "effective",
      },
      {
        name: "Open-Market Accumulation",
        side: "attack",
        usedBy: "LVMH",
        description: "Post-disclosure open-market purchases to increase the declared stake to 22.6%. While legal, the H51 barrier made further accumulation strategically pointless — the weapon was blocked by the family's governance fortress.",
        effectiveness: "blocked",
      },
      {
        name: "In-kind Distribution",
        side: "attack",
        usedBy: "LVMH",
        description: "Exit strategy optimization: distributing Hermès shares to LVMH shareholders as a dividend-in-kind rather than selling outright. Eliminated ~€1.5 billion in capital gains tax on the ~€4.4 billion gain, while satisfying regulators and ending the dispute.",
        effectiveness: "effective",
      },
      {
        name: "H51 Family Holding Company",
        side: "defense",
        usedBy: "Hermès Family",
        description: "Over 50 family members pooled 50.2% of Hermès shares into a single SCA holding structure. Mathematically guaranteed that LVMH — no matter how many shares it acquired on the open market — could never reach a majority. A single legal act that permanently closed the door on hostile control.",
        effectiveness: "decisive",
      },
      {
        name: "Regulatory Enforcement (AMF Complaint)",
        side: "defense",
        usedBy: "Hermès Family",
        description: "Proactively engaging the AMF to investigate LVMH's derivative disclosure violations. The resulting €8M fine and formal enforcement record created legal and reputational pressure that constrained LVMH's options.",
        effectiveness: "effective",
      },
      {
        name: "Public Narrative & Brand Defense",
        side: "defense",
        usedBy: "Hermès Family",
        description: "Systematic media engagement positioning Hermès independence as inseparable from brand value. The narrative — 'LVMH ownership would destroy what makes Hermès Hermès' — resonated with global investors and consumers, supporting the rising share price and isolating LVMH politically.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2010-12",
      event: "H51 — Hermès family pools 50.2% in one holding vehicle",
      detail: "The formation of H51 in December 2010 was the single decisive act in the entire contest. With 50.2% locked in a family holding structure, LVMH's maximum open-market stake of 23.2% was not merely insufficient — it was permanently insufficient. From this point forward, LVMH was not in a control contest; it was in an exit optimization problem. The Hermès family's ability to assemble 50+ members quickly and unanimously was itself a remarkable feat of internal governance.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Hermès Family — Independence Preserved",
      margin: "Family H51 50.2% vs. LVMH maximum 23.2%",
      note: "The Hermès family repelled the world's most powerful luxury conglomerate with a single governance innovation. LVMH realized enormous financial gains (~€4.4 billion) but failed entirely in its strategic objective of acquiring Hermès. Hermès remains family-controlled, artisan-produced, and independent — and its share price has outperformed virtually every luxury peer over the 14 years since the confrontation.",
    },
    priceImpact: {
      preContest: "€130 (October 2010, pre-disclosure)",
      peak: "€1,100 (late 2014, pre-settlement)",
      postContest: "€1,250 (2015 — independence premium)",
      note: "Hermès shares rose continuously throughout the dispute and beyond. The independence premium — investors pricing in the sustained benefits of family governance and artisanal scarcity — proved durable. By 2024, Hermès shares traded above €2,400: approximately 18× the pre-disclosure price and one of the best-performing luxury stocks globally over any 14-year period.",
    },
  },

  // ── Deal Structure ────────────────────────────────────────────
  dealStructure: {
    body: "The contest unfolded in three phases. First, LVMH's silent equity swap accumulation (2002–2010). Second, the public contest phase (2010–2013) in which LVMH held its stake and sought to expand it while the Hermès family built H51 and pursued regulatory and legal counter-measures. Third, the settlement phase (2013–2014) in which LVMH agreed to distribute its full stake to its own shareholders as an in-kind dividend, exiting cleanly but profitably.",
    preOwnership: {
      nodes: [
        { id: "lvmh_pre",   label: "LVMH",          sub: "B. Arnault / 23% via equity swaps", type: "acquirer" },
        { id: "family_pre", label: "Hermès Family",  sub: "Dispersed holdings (pre-H51)",      type: "entity" },
        { id: "hermes",     label: "Hermès",         sub: "Independent luxury house",          type: "target" },
        { id: "public_pre", label: "Public Float",   sub: "Listed shares",                     type: "public" },
      ],
      edges: [
        { from: "lvmh_pre",   to: "hermes", label: "23% economic interest (equity swaps)" },
        { from: "family_pre", to: "hermes", label: "~45% dispersed family holdings" },
        { from: "public_pre", to: "hermes", label: "~32% public float" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "lvmh_post",   label: "LVMH",          sub: "0% stake — fully distributed (Dec 2014)", type: "acquirer" },
        { id: "h51",         label: "H51 SCA",        sub: "Hermès family 50.2%",                     type: "entity" },
        { id: "hermes_post", label: "Hermès",         sub: "Independent — family control confirmed",   type: "target" },
        { id: "public_post", label: "Public Float",   sub: "~49.8% (incl. former LVMH stake)",         type: "public" },
      ],
      edges: [
        { from: "h51",         to: "hermes_post", label: "50.2% (governance fortress)" },
        { from: "lvmh_post",   to: "hermes_post", label: "0% (in-kind distributed Dec 2014)" },
        { from: "public_post", to: "hermes_post", label: "~49.8%" },
      ],
    },
    keyTerms: [
      { label: "LVMH Disclosed Stake (Oct 2010)", value: "17.1%",                      accent: true },
      { label: "LVMH Peak Stake",                 value: "23.2%" },
      { label: "Family Holding (H51)",             value: "50.2%",                      accent: true },
      { label: "AMF Fine (LVMH)",                  value: "€8 million" },
      { label: "In-kind Distribution Completed",   value: "December 2014" },
      { label: "LVMH Estimated Gain",              value: "~€4.4 billion" },
    ],
  },

  // ── Advisors ──────────────────────────────────────────────────
  advisors: {
    body: "The LVMH-Hermès dispute involved a complex interplay of French securities law, EU regulatory enforcement, family governance structuring, and criminal law — drawing top-tier advisors from Paris, London, and New York.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "LVMH (attacker)",
        initials: "LV",
        bg: "bg-amber-900",
        advisors: [
          {
            firm: "BNP Paribas",
            role: "Financial Advisor (equity swap structuring)",
            roleType: "financial",
            note: "Designed and executed the equity swap structures used to accumulate economic exposure in Hermès from 2002 to 2010 without triggering mandatory disclosure.",
          },
          {
            firm: "Freshfields Bruckhaus Deringer",
            role: "Legal Counsel",
            roleType: "legal",
            note: "Led legal response to AMF enforcement proceedings, advised on disclosure obligations, and structured the 2014 in-kind distribution settlement.",
          },
          {
            firm: "Cleary Gottlieb Steen & Hamilton",
            role: "Legal Counsel (Competition & EU)",
            roleType: "legal",
            note: "EU competition law advice and cross-border regulatory coordination for the in-kind distribution exit structure.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Hermès Family (defense)",
        initials: "H",
        bg: "bg-orange-700",
        advisors: [
          {
            firm: "Rothschild & Co",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Advised on the H51 holding structure design, family stake pooling mechanics, and long-term governance strategy.",
          },
          {
            firm: "Bredin Prat",
            role: "French Legal Counsel",
            roleType: "legal",
            note: "Designed the H51 SCA structure under French corporate law; managed AMF filings, the criminal complaint process, and shareholder agreement negotiations.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "International Legal Counsel",
            roleType: "legal",
            note: "International capital markets and securities law advice; cross-border coordination for the EU regulatory and settlement aspects.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public filings and press reports. Actual mandates may differ.",
  },

  // ── Valuation ─────────────────────────────────────────────────
  valuation: {
    body: "LVMH accumulated its Hermès economic interest at estimated entry prices of ~€100–130/share (2002–2010). When it disclosed the stake in October 2010, Hermès shares were at €130. By the time of the 2014 settlement, shares had risen to ~€1,100 — roughly 8.5× over four years. LVMH's in-kind distribution of its 23.2% stake at this price level generated an estimated €4.4 billion gain, with an additional ~€1.5 billion in capital gains tax avoided through the in-kind (rather than cash) distribution structure.",
    rows: [
      { item: "Hermès share price (Oct 2010, pre-disclosure)",   val: "€130/share",     note: "Day before LVMH announcement" },
      { item: "LVMH stake value (Oct 2010, at disclosure)",      val: "~€2.0 billion",  note: "17.1% basis, estimated" },
      { item: "Hermès share price (late 2014, settlement)",      val: "~€1,100/share",  note: "~8.5× appreciation in 4 years", accent: true },
      { item: "LVMH stake value (2014 settlement)",              val: "~€4.4 billion",  note: "23.2% basis, estimated",         accent: true },
      { item: "AMF fine (LVMH)",                                 val: "€8 million",     note: "Derivative disclosure violation" },
      { item: "Capital gains tax saved (in-kind vs. cash sale)", val: "~€1.5 billion",  note: "Estimated tax advantage of in-kind distribution" },
    ],
    disclaimer: "Note: Stake values are estimates based on public disclosure and reported share prices. LVMH's actual acquisition cost and tax treatment have not been publicly confirmed.",
  },

  // ── Rationale ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why LVMH targeted Hermès",
      initials: "LV",
      bg: "bg-amber-900",
      points: [
        "Hermès represented the last major independent ultra-luxury trophy not yet in a conglomerate — its Birkin and Kelly bags commanded waiting lists and secondary premiums that no LVMH brand could match. Adding Hermès would have elevated the entire LVMH portfolio's prestige positioning.",
        "The dispersed family governance structure appeared vulnerable from the outside: dozens of heirs, no single controlling block, and a listed float. Arnault reasoned that if he could accumulate a blocking stake before the family noticed, he could negotiate from a position of strength.",
        "LVMH's global distribution infrastructure (400+ stores, 75 countries) combined with Hermès's artisan production could, in theory, generate enormous geographic and operational synergies — particularly in Asia, where Hermès demand far outpaced supply.",
        "Having failed at Gucci in 1999 when his position became known before he was ready, Arnault designed the equity swap approach specifically to conceal the buildup until LVMH held enough shares to make the Hermès family's options limited. The 2010 disclosure was timed as a fait accompli.",
      ],
    },
    seller: {
      title: "How the Hermès family preserved independence",
      initials: "H",
      bg: "bg-orange-700",
      points: [
        "The H51 holding company formation was the decisive act — more than 50 family members agreeing within weeks to pool 50.2% of shares into a single permanent vehicle. This speed and unanimity under crisis conditions reflects exceptional family governance and the strength of shared identity around Hermès independence.",
        "AMF regulatory engagement converted what could have been a private governance dispute into a public enforcement matter, giving the Hermès family institutional support and constraining LVMH's freedom of action through official channels.",
        "The public narrative battle — 'independence is the brand' — was fought and won in global media. Investors bought the argument: Hermès shares rose throughout the dispute, penalizing LVMH's ambition rather than rewarding it, and making further accumulation progressively more expensive.",
        "The criminal fraud complaint was the final escalation lever — raising the stakes for LVMH management and providing the negotiating pressure that ultimately brought LVMH to the settlement table in 2014.",
      ],
    },
  },

  // ── Post-Deal Assessment ──────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2025",
    body: "Ten years after the settlement, LVMH-Hermès stands as a canonical case study in both hostile M&A strategy and governance defense. LVMH's equity swap approach was brilliant — until it wasn't. The family's H51 response was so decisive that LVMH's position became a financial investment rather than a strategic one from December 2010 onward. The in-kind distribution exit was the best available outcome for LVMH: enormous profits realized (approximately €4.4 billion), tax efficiency maximized, and the reputational overhang removed. Hermès emerged from the episode with its independence confirmed, its governance strengthened, and its valuation permanently re-rated higher.",
    overallVerdict: "Hermès family decisive victory — independence secured, LVMH exits profitably but without strategic prize",
    positives: [
      "Hermès independence fully preserved — the H51 structure remains in place and the family retains 50%+ control.",
      "Hermès share price performance post-dispute has been exceptional: from €130 in 2010 to €2,400+ in 2024, making it one of the best-performing luxury stocks globally.",
      "EU and French derivative disclosure rules were materially strengthened as a direct result of this case — a lasting contribution to market transparency.",
      "LVMH achieved an exceptional financial return (~€4.4 billion gain, ~€1.5 billion in tax savings) despite failing its strategic objective.",
    ],
    risks: [
      "H51's lock-up provisions are time-limited; when they expire (estimated 2031), family cohesion in the next generation will face its first major test.",
      "Progressive dispersion of the Hermès estate across third and fourth generation heirs could create governance fragility over a 20–30 year horizon.",
      "Scale disadvantages vs. LVMH and Kering persist — in a downturn, the absence of a diversified brand portfolio limits countercyclical resilience.",
      "Artisan production caps constrain Hermès's ability to capture demand surges — particularly in Asia, where waiting lists for flagship products span years.",
    ],
    editorNote:
      "The LVMH-Hermès case is simultaneously a masterclass in derivative-based accumulation and a blueprint for family governance defense. Arnault's strategy was sophisticated and almost worked — but the Hermès family's response was faster, more unified, and ultimately more decisive. H51 remains the single most elegant governance defense in European M&A history: one legal structure, 50+ signatures, and the world's most powerful luxury empire was stopped cold. For students of corporate control, the lesson is stark: once a family holding company holds 50%+1, the math ends the argument.",
  },

  // ── Tombstone ─────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "LV",
    acquirerBg: "bg-amber-900",
    targetInitials: "H",
    targetBg: "bg-orange-700",
    acquirerName: "LVMH (Bernard Arnault)",
    targetName: "Hermès International",
    dealTitle: "LVMH vs. Hermès — The Luxury Ambush and the Family Fortress",
    dealSize: "~€4.5 billion (LVMH's stake at peak)",
    dealSizeUSD: "approx. USD 5.5B (2014 exchange rates)",
    evEbitda: "N/A (control contest — no transaction completed)",
    closeDate: "Dec 2014",
  },

  // ── Sources ───────────────────────────────────────────────────
  sources: [
    { id: 1, text: "LVMH press release, Hermès stake disclosure (October 23, 2010)", url: "https://www.lvmh.com" },
    { id: 2, text: "Autorité des marchés financiers (AMF), sanction decision against LVMH (2013)", url: "https://www.amf-france.org" },
    { id: 3, text: "Hermès International, H51 holding company formation announcement (December 2010)", url: "https://finance.hermes.com" },
    { id: 4, text: "LVMH-Hermès joint settlement press release (September 3, 2014)", url: "https://www.lvmh.com" },
    { id: 5, text: "Financial Times, 'LVMH reaches agreement to sell Hermès stake' (September 3, 2014)" },
    { id: 6, text: "The Economist, 'Hermès and LVMH: A family affair' (January 13, 2011)" },
    { id: 7, text: "Hermès International Annual Reports 2010–2014", url: "https://finance.hermes.com" },
    { id: 8, text: "Euronext Paris, Hermès share price history (2010–2015)" },
  ],

  // ── SEO ───────────────────────────────────────────────────────
  seo: {
    title: "LVMH vs. Hermès Control Battle — Equity Swap Ambush & H51 Defense Explained",
    description:
      "Complete analysis of LVMH's 8-year equity swap accumulation in Hermès and the founding family's H51 governance defense. Covers derivative disclosure loopholes, family stake pooling, AMF enforcement, and the €4.4B in-kind exit.",
    keywords: [
      "LVMH Hermès control battle",
      "Hermès H51 family holding",
      "Bernard Arnault Hermès stake",
      "equity swap derivative disclosure",
      "luxury brand hostile takeover",
      "Hermès family governance defense",
      "AMF fine LVMH derivatives",
      "in-kind distribution tax",
      "French M&A corporate governance",
      "family company defense strategy",
    ],
  },

  // ── Key Concepts ──────────────────────────────────────────────
  concepts: [
    {
      term: "Equity Swap (Cash-Settled)",
      description: "A derivative contract providing economic exposure to a stock's returns without requiring direct share ownership — and, under pre-2014 European rules, without triggering mandatory ownership disclosure thresholds.",
    },
    {
      term: "Family Stake Pooling",
      description: "A governance defense where multiple family members aggregate their individually dispersed shareholdings into a single controlled holding vehicle, concentrating voting power and blocking external acquisition attempts.",
    },
    {
      term: "In-kind Distribution",
      description: "A corporate action in which a company distributes an asset (such as shares in another company) to its own shareholders as a dividend-in-kind, rather than selling the asset for cash — often used to achieve tax efficiency on embedded gains.",
    },
    {
      term: "Derivative Disclosure Rules",
      description: "Regulatory requirements to publicly disclose economic interests in a company's shares held through derivatives (options, total return swaps, CFDs). The LVMH-Hermès case directly triggered the strengthening of these rules across the EU.",
    },
    {
      term: "Blockholder",
      description: "A shareholder owning a large enough stake to influence corporate decisions, even without a majority. LVMH's 23% position made it a blockholder — but the H51 50.2% fortress meant that position conferred no path to control.",
    },
    {
      term: "Société en Commandite par Actions (SCA)",
      description: "A French corporate structure combining features of a partnership and a joint-stock company, offering controlling partners protection against hostile takeover attempts — the legal vehicle chosen for the Hermès H51 holding company.",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did LVMH use equity swaps instead of buying Hermès shares directly?",
      a: "Under French securities law in the early 2000s, cash-settled equity swaps were not classified as share ownership and did not trigger the mandatory disclosure obligations that apply when crossing 5%, 10%, 15%, 20%, or 25% shareholding thresholds. By using equity swaps, LVMH could accumulate a 23% economic interest over eight years without filing a single disclosure. A direct share purchase program would have been detected immediately and allowed the Hermès family to mount a defense. The strategy was elegant but ultimately triggered regulatory reform — France and the EU subsequently extended disclosure rules to cover derivative economic interests, closing the gap that LVMH exploited.",
    },
    {
      q: "Why was the H51 holding company such an effective defense?",
      a: "H51 was effective for one simple reason: with 50.2% of Hermès shares pooled into a single family holding structure, LVMH could not acquire a majority regardless of how many additional shares it purchased on the open market. LVMH's maximum position — 23.2% — was permanently insufficient. The elegance was in the mathematics: once H51 existed, the control contest was over. LVMH still held its stake, but it was now a financial investment, not a strategic position. The Hermès family had approximately converted a hostile bidder into a passive investor with one legal document.",
    },
    {
      q: "Did LVMH lose money on the Hermès investment?",
      a: "Far from it. LVMH accumulated its position at estimated entry prices of €100–130/share. By the time of the 2014 settlement, Hermès shares had risen to ~€1,100. LVMH distributed its 23.2% stake to its shareholders at these elevated prices, realizing an estimated €4.4 billion gain. The in-kind distribution structure (rather than a direct open-market sale) also saved approximately €1.5 billion in capital gains tax. Strategically, LVMH failed to acquire Hermès — but financially, it generated one of the best returns in its acquisition history from a position it never controlled.",
    },
    {
      q: "Was the AMF's €8 million fine a meaningful deterrent?",
      a: "In isolation, €8 million was a symbolic penalty for LVMH — approximately 0.03% of its annual revenue. The real impact was threefold: it created an official enforcement record documenting disclosure violations, it gave the Hermès family legal standing to escalate to criminal complaints, and it signaled that French and European regulators would not allow further accumulation without compliance consequences. The regulatory and legal risk environment materially increased LVMH's cost of holding and expanding the position, contributing to the eventual settlement decision.",
    },
    {
      q: "What was the long-term impact on European M&A and disclosure rules?",
      a: "The LVMH-Hermès case was a direct catalyst for regulatory reform. The EU Transparency Directive amendments of 2013 and France's subsequent securities law changes extended mandatory disclosure obligations to economic interests held through derivatives, including cash-settled equity swaps, options, and contracts for difference (CFDs). These changes made the LVMH-style silent accumulation approach structurally impossible going forward. The case also elevated awareness of governance vulnerabilities in multi-generational family companies, prompting many family-controlled European firms to review and strengthen their succession and governance arrangements.",
    },
    {
      q: "Why did Hermès shares continue rising after LVMH's stake was distributed?",
      a: "The Hermès re-rating reflected two reinforcing dynamics. First, an 'independence premium': investors valued Hermès precisely because it remained outside the LVMH conglomerate, with its artisanal scarcity model, family management, and autonomous pricing strategy intact. Second, the dispute itself had served as a global brand awareness event — drawing attention to Hermès's unique competitive position and attracting new institutional investors. From the 2010 disclosure at €130/share, Hermès climbed steadily to €1,250 (2015), €1,500 (2021), and above €2,400 (2024) — compounding at ~22% per year over 14 years, a record unmatched by any of LVMH's own brands over the same period.",
    },
  ],
};

export default lvmhHermes;
