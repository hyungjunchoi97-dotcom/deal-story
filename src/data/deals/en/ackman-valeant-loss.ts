import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "ackman-valeant-loss",
  title: "Bill Ackman × Valeant Pharmaceuticals — The Activist's $4B+ Loss",
  subtitle: "Pershing Square's Conviction Trade · Philidor Accounting Scandal · Drug Pricing Politics · Capitulation From the Boardroom",
  category: "activism",
  industry: "Pharmaceuticals / Specialty Pharma",
  country: "USA/Canada",
  announcedAt: "2015-03-01",
  closedAt: "2017-03-13",
  announcedDisplay: "March 2015",
  closedDisplay: "March 2017",
  readingMinutes: 14,
  tags: [
    "Bill Ackman",
    "Pershing Square",
    "Valeant",
    "Bausch Health",
    "Philidor",
    "Citron Research",
    "Andrew Left",
    "drug pricing politics",
    "Mike Pearson",
    "specialty pharmacy",
    "platform pharma",
    "activist failure",
  ],
  excerpt:
    "Fresh off a $2.6B win in Allergan, Bill Ackman placed roughly $3.2B directly on Valeant — his former takeover partner. He called Mike Pearson the next Warren Buffett and built a 5.7% stake, only to watch Hillary Clinton's drug-pricing tweet and Citron Research's 'Pharmaceutical Enron' report expose the Philidor specialty pharmacy scandal. The stock collapsed 96% from $257 to $11, and the full March 2017 exit crystallised a loss of roughly $4.0B+ — the largest single loss of Ackman's career.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "PS",  bg: "bg-slate-700", label: "Pershing Square Capital" },
  target:   { initials: "VRX", bg: "bg-rose-700",  label: "Valeant Pharmaceuticals" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "In November 2014, Bill Ackman booked roughly $2.6B in nine months on the Allergan toehold, one of the fastest large-scale wins in activist history. His partner on that deal, Valeant Pharmaceuticals, had lost Allergan to white knight Actavis, but in Ackman's eyes Mike Pearson's 'platform' model remained compelling. Valeant minimised internal R&D, acquired branded drugs, slashed costs and raised prices to manufacture earnings growth, and the share price had risen more than tenfold from roughly $25 in 2010 to around $257 by August 2015.",
    "In March 2015, Pershing Square disclosed via Schedule 13D that it had accumulated 19.5 million Valeant shares, a 5.7% stake at an average cost of approximately $196, for total capital deployed of about $3.2B. At public conferences Ackman described Pearson as 'the Warren Buffett of pharma' and Valeant as 'the next Berkshire Hathaway,' an unusually emphatic conviction trade. It remains one of the strongest public endorsements ever given by a hedge fund manager to the CEO of a portfolio company.",
    "By August 2015, Valeant shares hit an all-time high near $257, putting Pershing Square's mark-to-market gain at roughly $1.2B. The mood shifted abruptly later that month. Drug pricing became a 2016 U.S. presidential campaign issue, ignited by Turing Pharmaceuticals' Martin Shkreli raising Daraprim by 5,000%. On 21 September 2015, Hillary Clinton tweeted that 'price gouging' in the specialty drug market was 'outrageous,' and Valeant fell roughly [16%] in a single session. Isuprel, Nitropress and Cuprimine, drugs Valeant had repriced by hundreds of percent shortly after acquisition, became congressional hearing exhibits.",
    "The decisive blow landed on 21 October 2015. Citron Research, led by short-seller Andrew Left, published a report titled 'Pharmaceutical Enron.' Citron alleged that Valeant controlled an undisclosed specialty pharmacy network called [Philidor], using it to inflate revenue and to circumvent insurer pre-authorisation requirements. Valeant fell [-19%] that day and another [-40%] over the following week. On 26 October Valeant publicly acknowledged the relationship, and on 30 October it terminated Philidor. The stock collapsed from about $115 in late October 2015 to under $30 by March 2016.",
    "On 15 March 2016, Valeant delayed its 10-K filing, triggering covenant-default concerns under its debt agreements. Mike Pearson stepped down as CEO later that month, and Bill Ackman joined the Valeant board as a defensive move, an unusual case of an activist embedding himself inside the company he had bet on in order to try to rescue it. The accounting restatement, roughly $30B of net debt, the Philidor aftermath and parallel SEC, DOJ and FTC investigations proved too much to contain. On 27 April 2016, Ackman testified before the U.S. Senate Special Committee on Aging, defending some of Valeant's pricing practices while conceding meaningful errors.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "5.7% stake $3.2B in → ~$0.2B out (loss ~$4.0B+)",
    acquirerName: "Pershing Square Capital (Bill Ackman)",
    targetName: "Valeant Pharmaceuticals International (now Bausch Health)",
    announcedDisplay: "March 2015 (13D filing)",
    closedDisplay: "13 March 2017 (full exit)",
    country: "USA/Canada",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "March 2015: Pershing Square accumulates a 5.7% stake in Valeant (19.5 million shares, roughly $3.2B) at an average of approximately $196 and files a Schedule 13D. Ackman publicly praises Mike Pearson as 'Buffett-class.'",
    "August 2015: Shares hit an all-time high of about $257. Pershing Square mark-to-market gain roughly $1.2B.",
    "September 2015: Hillary Clinton's drug-pricing tweet drives a one-day -16% in Valeant. Daraprim, Isuprel and Nitropress price hikes become political flashpoints.",
    "21 October 2015: Citron Research publishes 'Pharmaceutical Enron,' alleging revenue inflation and insurer circumvention via the Philidor specialty pharmacy. Shares fall -40% over the following week.",
    "March 2016: 10-K delay triggers default fears. Mike Pearson exits as CEO. Ackman joins the Valeant board defensively — the conviction trade morphs into a reluctant CEO-rescue activism.",
    "13 March 2017: Pershing Square exits the entire position at roughly $11 per share. Cumulative loss approximately [$4.0B+], around [50% on the original capital]. The largest single loss of Ackman's career.",
    "Structural lessons: the blind spot of the conviction trade (positions persist even as evidence accumulates), the limits of board-seat activism (accounting and business-model failure cannot be solved through governance), and the accounting fragility of the specialty pharmacy model.",
    "Aftermath: Pershing Square Holdings (PSH), the closed-end fund vehicle, traded at a 25-30% NAV discount for years; AUM shrank from roughly $20B to the high single-digit billions. Ackman later recovered via Restaurant Brands International, Hilton, Chipotle, Universal Music Group and others.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "The mid-2010s were the heyday of the so-called 'platform pharma' or 'roll-up pharma' model. Companies such as Valeant, Endo, Mallinckrodt and Concordia minimised internal R&D, used leverage to acquire proven minor drug assets, cut costs and raised prices to manufacture EBITDA growth. By domiciling in Canada or Ireland (tax inversion), they pushed effective tax rates into the single digits and sourced most of their EPS growth from inorganic deals. Wall Street initially celebrated this as 'capital-efficient pharma,' and Valeant sat at the apex. The model carried two structural fragilities, however. First, once the acquisition pipeline stopped, EPS growth stopped. Second, revenue driven by price increases is acutely vulnerable to political and reputational risk.",
    metrics: [
      { label: "Valeant share price (early 2010)",    value: "~$25",      sub: "Just before the roll-up acceleration" },
      { label: "Valeant share price (Aug 2015 peak)", value: "~$257",     sub: "Pershing Square mark-to-market +$1.2B" },
      { label: "Valeant share price (March 2017)",    value: "~$11",      sub: "Pershing Square full exit price" },
      { label: "Valeant net debt (FY2015)",            value: "~$30B",     sub: "Cumulative roll-up financing, ~6-7x EBITDA" },
    ],
    subBody:
      "The specialty pharmacy model emerged to combine patient access with workarounds to insurer pre-authorisation, but it also created a grey zone in revenue recognition and related-party disclosure. After Philidor, major PBMs tightened their compliance reviews and the FTC, SEC and DOJ expanded their investigative scope on specialty pharmacy relationships.",
    players: [
      { name: "Bill Ackman / Pershing Square",        role: "Activist hedge fund — built a 5.7% stake, declared the conviction trade, later joined the board" },
      { name: "Mike Pearson / Valeant",               role: "Former CEO — architect of the platform model, McKinsey alumnus, exited March 2016 after Philidor" },
      { name: "Andrew Left / Citron Research",         role: "Short-selling research shop — published 'Pharmaceutical Enron' on 21 Oct 2015, exposing Philidor" },
      { name: "Hillary Clinton",                       role: "Then Democratic presidential candidate — September 2015 drug-pricing tweet triggered sector-wide selling" },
      { name: "Joseph Papa / Valeant (now Bausch)",    role: "Successor CEO — led debt reduction, asset sales, and 2018 rebrand to Bausch Health" },
      { name: "ValueAct Capital (Jeff Ubben)",         role: "Long-time activist holder — entered earlier than Pershing Square, partially exited earlier" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Valeant Pharmaceuticals International",
    body: "Valeant, headquartered in Laval, Quebec, was a multinational specialty pharma that grew revenue and EBITDA explosively under Mike Pearson, who took over in 2008 and led more than 60 acquisitions. The flagship deals were Bausch & Lomb (ophthalmology, 2013, $8.7B) and Salix Pharmaceuticals (GI, 2015, $11B). Pearson's operating doctrine was simple: R&D was 'a tax on failure,' and capital was better deployed buying proven drug assets, cutting costs and raising prices. By 2015 roughly 80% of revenue was acquisition-sourced and organic growth was low single digits or negative. That fact, surfaced in disclosures only after Philidor, decisively broke market confidence in the model.",
    metrics: [
      { label: "Headquarters",                value: "Laval, Quebec",       sub: "Operating HQ in Bridgewater, NJ" },
      { label: "Employees (FY2015)",          value: "~21,000",             sub: "Post-Bausch & Lomb integration" },
      { label: "Key products",                value: "Bausch & Lomb · Xifaxan · Jublia · Wellbutrin XL", sub: "Portfolio sourced via M&A" },
      { label: "Total debt (FY2015)",          value: "~$30.3B",             sub: "Includes Salix acquisition financing" },
      { label: "Net Debt / EBITDA (FY2015)",   value: "~6.7×",               sub: "Speculative grade, frequent high-yield issuer" },
      { label: "2018 rebrand",                 value: "Bausch Health",       sub: "Valeant brand retired" },
    ],
    financials: [
      {
        year: "FY2011",
        revenue: 2463,
        cogs: 730,
        grossProfit: 1733,
        sga: 678,
        operatingIncome: 1055,
        ebitda: 1280,
      },
      {
        year: "FY2012",
        revenue: 3480,
        cogs: 1010,
        grossProfit: 2470,
        sga: 952,
        operatingIncome: 1518,
        ebitda: 1820,
      },
      {
        year: "FY2013",
        revenue: 5770,
        cogs: 1860,
        grossProfit: 3910,
        sga: 1450,
        operatingIncome: 2460,
        ebitda: 2950,
      },
      {
        year: "FY2014",
        revenue: 8264,
        cogs: 2470,
        grossProfit: 5794,
        sga: 1980,
        operatingIncome: 3814,
        ebitda: 4470,
      },
      {
        year: "FY2015",
        revenue: 10446,
        cogs: 3290,
        grossProfit: 7156,
        sga: 2640,
        operatingIncome: 4516,
        ebitda: 5310,
      },
    ],
    financialsNote: "Unit: $M (millions) | ~80% of revenue acquisition-driven, organic growth low single digits or negative | Source: Valeant 10-K filings, adjusted for 2016 restatement context",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "The governance structure of this position represents an unusual [inversion] in activist history. Ackman initially functioned as an external shareholder and a public cheerleader for Mike Pearson's management. Once Philidor erupted, however, he took the defensive step of joining the board of the company he had bet on, attempting to rescue it from inside. The activist's role flipped from 'replacing management' to 'sharing responsibility with management.' That flip ultimately constrained his exit timing: insider blackout windows, board-level liability concerns and pressure to remain consistent with his public statements all worked simultaneously to delay the sale.",
    shareholders: [
      {
        id: "pershing",
        label: "Pershing Square Capital",
        sub: "Bill Ackman — 5.7% built March 2015, board seat March 2016, full exit March 2017",
        stake: "5.7%",
        stakePct: 5.7,
        type: "activist",
        alignment: "pro",
      },
      {
        id: "valueact",
        label: "ValueAct Capital",
        sub: "Jeff Ubben — partial exits 2014-2015",
        stake: "4.3%",
        stakePct: 4.3,
        type: "activist",
        alignment: "pro",
      },
      {
        id: "ruane",
        label: "Ruane, Cunniff & Goldfarb (Sequoia Fund)",
        sub: "Concentrated ~30% of fund in Valeant, lost 50%+",
        stake: "10.4%",
        stakePct: 10.4,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "Passive asset manager",
        stake: "5.1%",
        stakePct: 5.1,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "Public Shareholders",
        sub: "Retail and other institutional investors",
        stake: "74.5%",
        stakePct: 74.5,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 14,
      independent: 11,
      affiliated: 3,
      note: "Board composition turned over rapidly from March 2016 onward. Mike Pearson, Howard Schiller and other legacy directors departed, while Bill Ackman, Steve Fraidin (Pershing Square Vice Chair) and Robert Hale joined. Joseph Papa, formerly of Perrigo, was hired as CEO with debt reduction and asset divestiture as the top priorities.",
    },
    issues: [
      {
        title: "Revenue recognition through the Philidor specialty pharmacy",
        description: "Valeant classified Philidor as a non-consolidated related party but in substance exercised control. Citron Research alleged that this enabled revenue inflation and a pathway to dispense high-priced Valeant drugs while circumventing insurer pre-authorisation. SEC and DOJ investigations followed, and Valeant restated portions of its 2014-2015 results in 2016.",
        severity: "critical",
      },
      {
        title: "Responsibility of Mike Pearson and CFO Howard Schiller",
        description: "An Ad Hoc Committee of the board concluded in early 2016 that Pearson and Schiller had been deficient in disclosing the Philidor relationship. Schiller initially refused to resign and was effectively removed from the board, and Pearson stepped down as CEO in March 2016.",
        severity: "critical",
      },
      {
        title: "Price-hike-dependent revenue and political risk",
        description: "Valeant raised the price of Isuprel by +525%, Nitropress by +212% and Cuprimine by +5,787% shortly after acquisition, manufacturing revenue growth. When drug pricing became politically toxic, the revenue model itself became a political and reputational target.",
        severity: "critical",
      },
      {
        title: "Conflict between board seat and exit timing for the activist",
        description: "Joining the Valeant board in March 2016 placed Ackman in insider blackout windows. Combined with his public endorsement record, an outright sale would have carried severe reputational cost. The combined effect was a delayed exit and amplified loss when he finally sold at $11 in March 2017.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Replace CEO Mike Pearson and reset governance",
        result: "won",
        note: "Pearson exits March 2016, Joseph Papa takes over as CEO in May 2016. Roughly half the board turns over.",
      },
      {
        demand: "Terminate Philidor relationship and normalise accounting",
        result: "won",
        note: "Philidor relationship terminated 30 October 2015. 10-K restated and refiled in 2016.",
      },
      {
        demand: "Reduce debt and divest non-core assets (Salix, parts of Bausch)",
        result: "partial",
        note: "Under Papa, certain assets sold; total debt reduced from ~$30B to roughly the low $20Bs over 2017-2020. Equity recovery, however, was limited.",
      },
      {
        demand: "Preserve Pershing Square principal and limit losses",
        result: "lost",
        note: "Full exit at ~$11 in March 2017, cumulative loss of approximately $4.0B+. The financial objective of the campaign clearly failed.",
      },
    ],
    stockImpact: {
      preCampaign: "$196",
      peakDuringCampaign: "$257",
      postCampaign: "$11",
      note: "Pershing Square average entry ~$196 → August 2015 peak $257 (+31%) → March 2017 exit ~$11 (-94% from peak, -94% from cost). Cumulative realised loss approximately $4.0B+, around 50% of capital.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "There is no conventional [deal structure] in this case. It is not a merger or an acquisition. It is an activist position built with hedge-fund capital through open-market accumulation, a Schedule 13D filing, a conviction trade, eventual board service and a final disposition at a loss. Decomposing it by [timing, size, board seat and exit trigger] gives a clear template for how an activist trade can unravel.",
    preOwnership: {
      nodes: [
        { id: "pershing",  label: "Pershing Square",      sub: "5.7% built at ~$196 avg (~$3.2B)",      type: "acquirer" },
        { id: "valeant",   label: "Valeant",              sub: "Quebec-domiciled, NYSE/TSX listed",      type: "target" },
        { id: "pearson",   label: "Mike Pearson CEO",     sub: "Architect of the platform model",       type: "entity" },
        { id: "valueact",  label: "ValueAct Capital",     sub: "Earlier activist entrant",               type: "fund" },
        { id: "public",    label: "Public shareholders",  sub: "Includes Vanguard and Sequoia",          type: "public" },
      ],
      edges: [
        { from: "pershing", to: "valeant",  label: "13D 5.7% accumulation" },
        { from: "pearson",  to: "valeant",  label: "CEO leadership" },
        { from: "valueact", to: "valeant",  label: "4.3% held, trimming" },
        { from: "public",   to: "valeant",  label: "~75% dispersed ownership" },
        { from: "pershing", to: "pearson",  label: "Public endorsement — 'pharma's Buffett'" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "pershing",  label: "Pershing Square (exit)", sub: "Full sale at $11, loss ~$4.0B+",        type: "fund" },
        { id: "bausch",    label: "Bausch Health (rebrand)", sub: "Renamed 2018, Joseph Papa CEO",         type: "target" },
        { id: "papa",      label: "Joseph Papa CEO",        sub: "Ex-Perrigo, focus on debt reduction",   type: "entity" },
        { id: "regulators", label: "SEC · DOJ · FTC",        sub: "Continued Philidor-era investigations", type: "entity" },
      ],
      edges: [
        { from: "pershing", to: "bausch", label: "13 March 2017 full exit" },
        { from: "papa",     to: "bausch", label: "Restructuring and divestitures" },
        { from: "regulators", to: "bausch", label: "Accounting and pricing probes" },
      ],
    },
    keyTerms: [
      { label: "Accumulation window",          value: "Feb-March 2015",                          accent: false },
      { label: "Stake / share count",          value: "5.7% / ~19.5M shares",                    accent: true },
      { label: "Average entry price",          value: "~$196/share",                             accent: false },
      { label: "Total capital deployed",       value: "~$3.2B",                                  accent: true },
      { label: "All-time high (Aug 2015)",     value: "$257 (+31%)",                             accent: false },
      { label: "1 week after Citron report",   value: "-40%",                                    accent: true },
      { label: "Board seat assumed",           value: "March 2016",                              accent: false },
      { label: "Full exit date / price",       value: "13 March 2017, ~$11/share",               accent: true },
      { label: "Cumulative realised loss",     value: "~$4.0B+ (~50% of capital)",               accent: true },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Pershing Square ran the position largely on its own research, with limited outside financial advisory. Valeant, on the other side, relied on Davis Polk and Sullivan & Cromwell as principal crisis-management, internal-investigation and litigation-defence counsel during the Philidor period, while a separate external firm advised the board's Ad Hoc Committee. Citron Research operated as a classic short-seller research shop, publishing independently without retained external advisors.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Pershing Square (Activist Side)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Pershing Square Internal Research",
            role: "Investment thesis and public presentations",
            roleType: "other",
            note: "Bill Ackman and the Pershing Square analyst team authored and delivered the November 2015 public presentation 'Valeant: A Platform for Growth' and subsequent investor letters.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "13D and board service legal counsel",
            roleType: "legal",
            note: "Advised on SEC disclosures and insider blackout periods related to Ackman's March 2016 board appointment.",
          },
          {
            firm: "Kirkland & Ellis",
            role: "Pershing Square general counsel",
            roleType: "legal",
            note: "General fund-level counsel for Pershing Square Holdings disclosures and investor communications (based on public reporting).",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Valeant (Crisis Response Side)",
        initials: "VRX",
        bg: "bg-rose-700",
        advisors: [
          {
            firm: "Davis Polk & Wardwell",
            role: "Crisis management, internal investigation, SEC defence",
            roleType: "legal",
            note: "Led the termination of the Philidor relationship, the accounting restatement and SEC/DOJ defence. Board's Ad Hoc Committee retained separate external counsel.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "General M&A and securities counsel",
            roleType: "legal",
            note: "Long-standing transactional counsel to Valeant pre-Pearson era. Worked alongside Davis Polk post-Philidor under a divided remit.",
          },
          {
            firm: "Goldman Sachs",
            role: "Financial advisor (divestitures and restructuring)",
            roleType: "financial",
            note: "Advised the Papa-era management on asset sales aimed at debt reduction.",
          },
          {
            firm: "PwC (Auditor)",
            role: "External auditor",
            roleType: "other",
            note: "Reissued audit opinions during the 2015-2016 restatement period and reviewed the propriety of accounting treatments.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources; some advisory roles may not be formally confirmed. Crisis-management counsel rotated through several phases of the Philidor matter.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "The 'valuation' here is not an acquisition price but [Pershing Square's trade P&L]. The fund built its 5.7% stake (~19.5 million shares) at an average of approximately $196, peaked at an unrealised gain of about $1.2B at $257 in August 2015, and then watched roughly 18 months of compounding bad news — the Clinton tweet, Citron's report, the Philidor disclosure, the CEO change, the board seat — drive the share price below $11 by the time of the March 2017 exit. Valeant's enterprise multiple compressed in parallel, from roughly 12x EV/EBITDA at the peak to roughly 7-8x by the time of the disposal, reflecting both a lower EBITDA and a structurally heavier debt burden.",
    rows: [
      { item: "Pershing Square average entry price",  val: "~$196/share",   note: "Built February-March 2015, ~$3.2B total" },
      { item: "Stake / share count",                  val: "5.7% / ~19.5M shares", note: "Per Schedule 13D" },
      { item: "August 2015 peak price",               val: "~$257/share",   note: "Mark-to-market gain ~$1.2B, +31%",         accent: true },
      { item: "Just before Citron (21 Oct 2015)",     val: "~$147/share",   note: "Already -40% post Clinton tweet" },
      { item: "21 Oct 2015 closing price",            val: "~$118/share",   note: "Citron report day -19%" },
      { item: "March 2016 (Pearson exits)",           val: "~$26/share",    note: "10-K delay and default fears" },
      { item: "Full exit price (13 March 2017)",      val: "~$11/share",    note: "Pershing Square exits",                    accent: true },
      { item: "EV/EBITDA (Aug 2015 peak)",            val: "~12×",          note: "Based on FY2015E EBITDA" },
      { item: "EV/EBITDA (March 2017 exit)",          val: "~7-8×",         note: "Reflects debt burden and EBITDA decline" },
      { item: "Pershing Square cumulative realised loss", val: "~$4.0B+",   note: "vs. $3.2B capital, roughly 50% of principal (incl. partial sales and dividends)", accent: true },
    ],
    disclaimer: "Note: Precise average entry and final loss vary slightly across Pershing Square's own letters and press reports, with disclosed losses ranging from ~$2.8B to ~$4.0B+. This table reflects publicly filed 13Ds, Pershing Square investor letters and FT/WSJ coverage.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why Pershing Square bet so heavily on Valeant",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "Trust earned via Allergan: from the 2014 Allergan toehold collaboration, Ackman concluded that Mike Pearson was an exceptional operator and decision-maker. He generalised this view into describing Valeant as 'pharma's Berkshire Hathaway.'",
        "EPS arithmetic of the roll-up model: R&D suppression plus price increases plus continued M&A appeared to deliver double-digit EPS growth indefinitely. At its peak ~12x EV/EBITDA, the multiple looked cheap relative to that growth.",
        "Repositioning from short-cycle activist to 'conviction investor': the bet fit Pershing Square's communicated LP strategy of moving toward long-duration compounders and away from short campaigns.",
        "Risks were seen but underweighted: pricing politics, the grey zone of specialty pharmacy relationships and ~6x net leverage were all visible, but Ackman believed 'management quality' would overcome them.",
        "The trap of public endorsement: once labelled 'the Warren Buffett of pharma' on stage, the reputational and psychological lock-in made it harder to change course as the evidence base shifted.",
      ],
    },
    seller: {
      title: "Why Valeant collapsed and what it had to admit",
      initials: "VRX",
      bg: "bg-rose-700",
      points: [
        "Accounting and legal grey zone of the Philidor relationship: in form non-consolidated, in substance controlled. Revenue recognition, insurer circumvention and related-party disclosure all came under attack and ultimately required restatement.",
        "Political ceiling on price-hike-driven revenue: the Isuprel, Nitropress and Cuprimine price increases were applied immediately after acquisition, and once drug pricing became a campaign issue the entire revenue model became a political target.",
        "Lack of organic growth: with roughly 80% of 2015 revenue from M&A, the model required an unbroken acquisition cadence. Philidor coincided with a slowing deal machine, exposing both flaws simultaneously.",
        "$30B of net debt: 6-7x EBITDA looks manageable while EBITDA grows but turns into covenant risk the moment EBITDA wobbles, which is precisely what the 10-K delay foreshadowed in early 2016.",
        "Pearson's personal accountability: the board's Ad Hoc Committee concluded that the Philidor relationship had not been adequately disclosed. Pearson exited as CEO in March 2016, and the firm ultimately had to retire the Valeant name itself, rebranding to Bausch Health in 2018.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Nine years after Pershing Square's full exit in March 2017, Valeant has been renamed Bausch Health Companies (2018), and its ophthalmology subsidiary Bausch + Lomb was separately listed on the NYSE in 2022. As of May 2026, parent Bausch Health trades around $5 per share, with a market capitalisation of roughly $2 billion, more than 97% below the 2015 peak market cap of approximately $90 billion. Debt has been reduced from about $30B to the low $20Bs through asset sales and refinancing, but the leverage relative to EBITDA remains a structural drag on equity recovery. Bill Ackman, meanwhile, rebuilt the Pershing Square book around Restaurant Brands International, Hilton, Howard Hughes, Chipotle, Universal Music Group, Lowe's and Google, posting record performance in 2019-2021. Pershing Square Holdings (PSH) has seen its closed-end discount narrow from the -25 to -30% range of the 2015-2018 period to roughly -15% by 2024-2026.",
    overallVerdict: "An activist's conviction trade — a clear financial disaster, but a defining lesson for the industry, regulators and the asset-management profession",
    positives: [
      "The Valeant episode etched the structural risks of the specialty pharmacy model and price-hike-dependent revenue into the market's memory. Other companies pursuing similar strategies were re-rated downwards in the following years.",
      "Pershing Square ultimately acknowledged the loss and exited in March 2017 rather than holding indefinitely. Cutting the position and rebuilding the book, while painful, was the correct portfolio decision.",
      "Ackman publicly addressed the failure in subsequent investor letters and interviews, candidly identifying the blind spots of the conviction trade, the timing cost of joining the board, and the 'great man theory' overweight on Pearson. A notable case of self-correction within activist asset management.",
      "Pershing Square recovered strongly via the 2020 CDS hedge, Universal Music Group, Hilton and others, and by 2023-2025 the fund had set new NAV highs.",
    ],
    risks: [
      "Bausch Health continues to carry the accumulated debt, litigation and pricing-politics overhangs of the Valeant era. Even after the Bausch + Lomb spin-off, the parent's standalone recovery is uncertain, and at a ~$2B market cap the equity arguably trades closer to option value than to going-concern equity.",
      "The conviction-trade trap persists across the industry. Reputationally anchored, publicly endorsed positions remain difficult to exit even as the underlying thesis breaks, and this pattern recurs across hedge funds and long/short funds.",
      "Joining a portfolio company's board can improve governance but can also constrain free disposition when accounting, business-model and political risks crystallise simultaneously. Valeant is the canonical case study of this trade-off.",
    ],
    editorNote:
      "An activist investor's biggest adversary is not hostile management, not regulators and not short-seller research. It is his own [conviction]. Bill Ackman made roughly $2.6B in nine months on Allergan and then bet almost twice that amount on his Allergan partner Valeant, losing approximately $4B+ over the following eighteen months. The most basic principle of disciplined investing, that conclusions must change when the data changes, collapsed under the social cost of public conviction and reputation. Alongside JCPenney (2013, ~$500M loss) and Lampert's Sears, Valeant stands as the clearest textbook example of the [conviction limit] in activist investing.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PS",
    acquirerBg: "bg-slate-700",
    targetInitials: "VRX",
    targetBg: "bg-rose-700",
    acquirerName: "Pershing Square Capital (Bill Ackman)",
    targetName: "Valeant Pharmaceuticals International",
    dealTitle: "Pershing Square × Valeant — The Activist's $4B+ Loss",
    dealSize: "5.7% stake, $3.2B accumulated",
    dealSizeUSD: "$3.2B in → ~$4.0B+ loss",
    evEbitda: "~12× (peak) → ~7-8× (exit)",
    closeDate: "13 March 2017 (full exit)",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1,  text: "Pershing Square Capital Management, Schedule 13D — Valeant Pharmaceuticals (9 March 2015)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=valeant&type=SC+13D&dateb=&owner=include&count=40" },
    { id: 2,  text: "Citron Research, 'Valeant: Could This Be the Pharmaceutical Enron?' (21 October 2015)", url: "https://citronresearch.com/wp-content/uploads/2015/10/Valeant-Philidor-final-c.pdf" },
    { id: 3,  text: "Valeant Pharmaceuticals, Press Release — Termination of Philidor Relationship (30 October 2015)" },
    { id: 4,  text: "Valeant Ad Hoc Committee Report on Philidor and Related Matters (April 2016)" },
    { id: 5,  text: "Reuters, 'Ackman's Pershing Square exits Valeant, books $3 billion loss' (13 March 2017)", url: "https://www.reuters.com/article/business/ackmans-pershing-square-exits-valeant-books-3-billion-loss-idUSKBN16K1NW/" },
    { id: 6,  text: "Wall Street Journal, 'Inside Bill Ackman's Valeant Disaster' (March 2016)" },
    { id: 7,  text: "Financial Times, 'Valeant and the limits of conviction investing' (April 2016)" },
    { id: 8,  text: "New York Times (Andrew Ross Sorkin), 'Ackman's Valeant Mistake' (March 2017)" },
    { id: 9,  text: "U.S. Senate Special Committee on Aging — Hearing on Sudden Price Spikes in Off-Patent Drugs, Bill Ackman testimony (27 April 2016)" },
    { id: 10, text: "Pershing Square Holdings Annual Investor Letters (2015, 2016, 2017)", url: "https://pershingsquareholdings.com/" },
    { id: 11, text: "Valeant Pharmaceuticals 10-K Filings FY2011-FY2015 (SEC EDGAR)" },
    { id: 12, text: "Bausch Health Companies, 2018 Rebranding Press Release", url: "https://www.bauschhealth.com/" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Bill Ackman's Valeant Loss — Inside Pershing Square's $4B Activist Disaster",
    description:
      "How Bill Ackman's Pershing Square turned a 5.7% Valeant stake ($3.2B) into one of the largest single losses in activist investing history. The Philidor accounting scandal, Hillary Clinton's drug-pricing tweet, Citron Research's 'Pharmaceutical Enron' report, the boardroom rescue attempt and the $4B+ loss.",
    keywords: [
      "Bill Ackman Valeant loss",
      "Pershing Square Valeant failure",
      "Philidor accounting scandal",
      "Citron Research Valeant",
      "Pharmaceutical Enron report",
      "Mike Pearson resignation",
      "Bausch Health rebrand",
      "drug pricing political risk",
      "activist conviction trade",
      "specialty pharmacy model",
      "13D activist failure",
      "Allergan Valeant sequel",
    ],
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Specialty Pharmacy / Philidor",
      description: "A pharmacy model focused on direct dispensing of high-priced or complex drugs to patients. Valeant treated Philidor as a non-consolidated entity for accounting purposes while exercising effective control, allegedly using it to recognise revenue and bypass insurer pre-authorisation, which became the core of the accounting restatement and the SEC investigation.",
    },
    {
      term: "Platform Pharma / Roll-up",
      description: "A business model that minimises internal R&D and uses leverage to acquire proven drug assets, then drives EBITDA through cost cuts and price hikes. Valeant, Endo and Mallinckrodt were canonical examples. Compelling in EPS arithmetic but fragile when the acquisition pipeline stalls or political risk crystallises.",
    },
    {
      term: "Schedule 13D Activist Filing",
      description: "A filing required under U.S. securities law within 10 days of crossing a 5% beneficial ownership threshold when the holder intends to influence control or strategy, distinct from the passive 13G. Pershing Square filed a 13D on Valeant on 9 March 2015.",
    },
    {
      term: "Conviction Trade",
      description: "A management style that concentrates a large share of fund capital in a single high-conviction position rather than diversifying. Powerful when right, painful when wrong, and structurally prone to delayed cut-loss decisions when the position has been heavily endorsed in public.",
    },
    {
      term: "Cost-of-Funds Drag",
      description: "The opportunity and capital cost incurred when a losing position cannot be exited immediately. Pershing Square's 2015-2017 Valeant holding made it harder to deploy capital into other opportunities and contributed to LP redemption pressure and persistent NAV discount.",
    },
    {
      term: "Board-Seat Activism",
      description: "An activist style in which the fund takes a director seat to drive governance change from inside. Effective for strategy and governance, but when accounting, business-model and political risks crystallise together, blackout windows and reputation constraints can delay exits and amplify losses.",
    },
    {
      term: "Drug Pricing Politics",
      description: "The risk that drug price increases become political, media and regulatory flashpoints. The September 2015 Hillary Clinton tweet and the Martin Shkreli Daraprim episode collided to assign a permanent political risk premium to specialty and roll-up pharma names.",
    },
    {
      term: "Closed-End Fund Discount",
      description: "The phenomenon in which the market price of a closed-end fund such as Pershing Square Holdings (PSH) trades below its NAV. PSH traded at a 25-30% discount for years after Valeant; sustained buybacks and performance recovery narrowed it to around -15% by 2023-2026.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Exactly how much did Bill Ackman lose on Valeant?",
      a: "On the available public record, Pershing Square accumulated about 19.5 million shares (5.7% of Valeant) at an average price of roughly $196 in February-March 2015 for total capital of approximately $3.2B, then exited on 13 March 2017 at roughly $11 per share. Cumulative realised loss is estimated at roughly $4.0B+, about 50% of principal. Reported figures range from about $2.8B to $4.0B+ depending on whether partial sales and offsetting dividends are netted, but Ackman himself described Valeant in investor letters as 'the single largest realised loss in our fund's history.'",
    },
    {
      q: "What exactly was the Philidor scandal?",
      a: "Philidor RX Services was a specialty pharmacy that dispensed Valeant drugs directly to patients. It was nominally an independent entity but in substance controlled by Valeant, which allegedly used the relationship to (1) recognise revenue in a way that inflated reported sales and (2) bypass insurer pre-authorisation in order to drive prescriptions of high-priced Valeant products. After Citron Research's 'Pharmaceutical Enron' report on 21 October 2015 exposed the arrangement, Valeant terminated the relationship on 30 October and restated portions of its accounts in 2016.",
    },
    {
      q: "Why did Ackman join the Valeant board? Shouldn't he have sold sooner?",
      a: "By March 2016, Valeant's 10-K delay had created acute default risk. Already a 5.7% holder, Ackman chose a defensive move and joined the board to lead the restructuring from inside, hiring Joseph Papa as CEO and overseeing asset sales. The cost of joining was that he immediately fell under insider blackout windows, and his earlier public endorsement made an outright exit reputationally expensive. Ackman has since written that joining the board materially delayed his exit and concedes it is among the decisions he would reconsider.",
    },
    {
      q: "He had partnered with Valeant on Allergan. Why bet on Valeant itself afterwards?",
      a: "The 2014 Allergan toehold left Ackman impressed with Mike Pearson's operating speed and decision-making. When the Allergan loss to Actavis dragged Valeant's share price down modestly, Ackman framed it as a bargain entry into a long-duration compounder. The bet also aligned with his communicated strategy shift toward conviction compounding and away from short-cycle activism, which is why he was comfortable publicly labelling Pearson 'the Warren Buffett of pharma.' The two bets on the same partner ultimately delivered +$2.6B and roughly -$4.0B+.",
    },
    {
      q: "How did Citron Research uncover Philidor?",
      a: "Andrew Left and the Citron team cross-referenced prescription data, state pharmacy licence registrations and corporate filings to show that Philidor effectively operated as an extension of Valeant. Compared with other specialty pharmacies, Philidor was disproportionately concentrated in Valeant products, which contradicted Valeant's non-consolidated treatment. Citron labelled the structure a 'Pharmaceutical Enron,' drawing the parallel to Enron's use of off-balance-sheet special purpose entities to recognise revenue, and that framing decisively shifted market sentiment.",
    },
    {
      q: "What is the most important structural lesson from this case?",
      a: "Three. First, the [conviction-trade blind spot]: once a public, high-conviction position has been declared, exiting is difficult even as evidence accumulates. Second, the [limits of board-seat activism]: governance changes cannot fix accounting, business-model and political risks all at once, and the board seat itself can constrain exit timing. Third, the [accounting fragility of specialty pharmacy and roll-up models]: growth driven by acquisitions and price hikes collapses quickly when the M&A pipeline halts or political risk crystallises. With JCPenney (2013), Valeant stands as the canonical textbook example of the conviction limit in activist investing.",
    },
  ],
};

export default deal;
