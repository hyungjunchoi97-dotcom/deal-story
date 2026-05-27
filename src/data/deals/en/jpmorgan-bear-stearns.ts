import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "jpmorgan-bear-stearns",
  title: "The 48-Hour Collapse — How JPMorgan Bought Bear Stearns for $2 a Share",
  subtitle: "2008 Financial Crisis · Fed $29B Backstop · $2 → $10 Negotiation Drama · Death of Wall Street's 5th-Largest Bank",
  category: "ma",
  industry: "Investment Banking / Financial Services",
  country: "United States",
  announcedAt: "2008-03-16",
  closedAt: "2008-05-30",
  announcedDisplay: "March 2008",
  closedDisplay: "May 2008",
  readingMinutes: 11,
  tags: ["JPMorgan", "Bear Stearns", "financial crisis", "subprime", "Federal Reserve", "emergency acquisition", "investment banking", "leverage"],
  excerpt:
    "In March 2008, Wall Street's fifth-largest investment bank collapsed in 48 hours as repo counterparties froze its funding overnight. The Federal Reserve backstopped $29 billion in toxic assets to enable JPMorgan to acquire Bear Stearns at $2 per share — later revised to $10 after shareholder revolt. This deal was the opening act of the global financial crisis.",

  // ── Company icons ─────────────────────────────────────────────
  acquirer: { initials: "JPM", bg: "bg-blue-800", label: "JPMorgan Chase" },
  target:   { initials: "BSC", bg: "bg-red-700",  label: "Bear Stearns" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Founded in 1923, Bear Stearns had survived the Great Depression, Black Monday (1987), and the LTCM crisis. By January 2007, its shares hit $172 and its balance sheet had grown to $395 billion. The firm was famous for its aggressive trading culture, its employee-heavy ownership structure, and — most fatally — its dependence on overnight repo financing to fund long-dated mortgage assets.",
    "The warning sign came in June 2007: two of Bear's internal hedge funds, which had bet heavily on subprime mortgage CDOs, collapsed with over $1.6 billion in losses. Bear's management contained the damage publicly, but internally the balance sheet was riddled with structured credit products whose true value was deteriorating rapidly. The leverage ratio stood at approximately 35:1.",
    "By March 2008, confidence in Bear Stearns had been quietly eroding for months. On March 10, rumors of a liquidity crisis began circulating. CEO Alan Schwartz went on CNBC on March 12 to reassure markets — 'There is no liquidity crisis.' The stock was at $57. But the denials only accelerated the bank run.",
    "Institutional counterparties were already pulling prime brokerage accounts and refusing to roll repo agreements. When repo markets froze, Bear's funding evaporated within hours. By Thursday evening, March 13, the firm's cash reserves had collapsed from approximately $18 billion to near zero. CEO Schwartz called New York Fed President Timothy Geithner: 'If the markets open tomorrow morning and we don't have a solution, we are done.'",
  ],

  // ── Deal summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~$1.2 billion (final $10/share)",
    acquirerName: "JPMorgan Chase",
    targetName: "Bear Stearns",
    announcedDisplay: "March 16, 2008",
    closedDisplay: "May 30, 2008",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "Bear Stearns lost its entire liquidity position over 48 hours as repo counterparties refused to roll overnight funding. Without intervention, bankruptcy was certain by Monday March 17 opening.",
    "Federal Reserve emergency action: Fed lent $29 billion to a special purpose vehicle (Maiden Lane LLC) to absorb Bear's toxic mortgage assets. JPMorgan bore only the first $1 billion of losses.",
    "Initial deal price: $2 per share — a 94% discount to the prior Friday's close of $30, and less than the value of Bear's Madison Avenue headquarters building.",
    "Shareholder revolt forced price revision: $10 per share + 19.9% newly issued Bear shares to JPMorgan (blocking competing bids). Total consideration ~$1.2 billion.",
    "The deal established the 'Too Big to Fail' precedent — and made the subsequent decision not to save Lehman Brothers six months later all the more consequential.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "By early 2008, the five major U.S. investment banks — Goldman Sachs, Morgan Stanley, Merrill Lynch, Lehman Brothers, and Bear Stearns — were operating at leverage ratios of 25–35x. Their dependence on short-term repo financing to fund long-dated structured credit positions had created a systemic fragility that regulators had failed to see or address. A loss of confidence in any single firm could freeze its funding overnight.",
    metrics: [
      { label: "Bear Stearns leverage ratio",        value: "~35:1",           sub: "At time of collapse" },
      { label: "Bear Stearns total assets (2007 peak)", value: "$395 billion", sub: "Mostly MBS and repo assets" },
      { label: "U.S. subprime writedowns (cumulative)", value: "$1T+ estimated", sub: "Across entire financial sector" },
      { label: "Bear Stearns stock decline",          value: "$172 → $2",       sub: "–99% in 14 months" },
    ],
    subBody:
      "Repo (repurchase agreement) markets are the oxygen of short-term bank funding. A repo is a collateralized overnight loan: a firm sells assets to a counterparty today and agrees to repurchase them tomorrow. When counterparties simultaneously refuse to roll over repo agreements, a firm's funding can vanish in hours. This is precisely what happened to Bear Stearns — not a sudden asset loss, but a sudden loss of trust in the collateral supporting its funding.",
    players: [
      { name: "JPMorgan Chase (Jamie Dimon)",     role: "Acquirer; engaged by the Fed to negotiate over the weekend" },
      { name: "Bear Stearns (Alan Schwartz)",     role: "Target; negotiated under existential duress" },
      { name: "Federal Reserve (Bernanke/Geithner)", role: "Provided $29B backstop; orchestrated the deal" },
      { name: "Bear Stearns shareholders/employees", role: "Revolted at $2 price; forced revision to $10" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Bear Stearns",
    body: "Bear Stearns was founded in 1923 and built its reputation over 85 years in three core businesses: fixed income trading (particularly mortgage-backed securities), prime brokerage (lending and clearing for hedge funds), and asset management. At its peak, Bear ran one of Wall Street's most feared fixed income desks. Its prime brokerage franchise was considered among the best in the business, serving hundreds of hedge fund clients. Uniquely among major banks, its employees owned roughly a third of the company — making the collapse personally devastating for thousands of staff members.",
    metrics: [
      { label: "Founded",                     value: "1923",           sub: "New York City" },
      { label: "Total assets (2007 peak)",    value: "$395 billion",   sub: "Primarily MBS and repo" },
      { label: "Employees",                   value: "~14,000",        sub: "Early 2008" },
      { label: "Leverage ratio",              value: "~35:1",          sub: "At time of collapse" },
      { label: "Peak share price",            value: "$172",           sub: "January 2007" },
      { label: "Acquisition price",           value: "$2 → $10",       sub: "March 2008 (revised)" },
    ],
    financials: [
      { year: "FY2005", revenue: 125000, cogs: 65000, grossProfit: 60000, sga: 38000, operatingIncome: 22000, ebitda: 25000 },
      { year: "FY2006", revenue: 174000, cogs: 92000, grossProfit: 82000, sga: 50000, operatingIncome: 32000, ebitda: 36000 },
      { year: "FY2007", revenue: 97000,  cogs: 72000, grossProfit: 25000, sga: 48000, operatingIncome: -23000, ebitda: -18000 },
      { year: "FY2008", revenue: 12000,  cogs: 35000, grossProfit: -23000, sga: 15000, operatingIncome: -38000, ebitda: -34000 },
    ],
    financialsNote: "Unit: USD million ($M) | US GAAP | Source: Bear Stearns Annual Reports. FY2007–2008 reflect massive subprime writedowns. FY2008 is a partial-year estimate through acquisition close (May 2008).",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "The deal had three interlocking elements. First, the Federal Reserve created Maiden Lane LLC — a special purpose vehicle that absorbed approximately $29 billion of Bear's most toxic mortgage assets, with JPMorgan bearing only the first $1 billion of losses. Second, JPMorgan agreed to acquire Bear Stearns at $2 per share (later $10). Third, Bear issued JPMorgan 39.5 million new shares (19.9% of Bear) immediately — giving JPMorgan effective blocking power against any competing bid before the shareholder vote.",
    preOwnership: {
      nodes: [
        { id: "public",  label: "Public shareholders", sub: "~30%+ owned by employees",    type: "public" },
        { id: "bsc",     label: "Bear Stearns",        sub: "$395B assets, 35:1 leverage",  type: "target" },
        { id: "assets",  label: "Toxic assets",        sub: "MBS/CDO ~$29B+ estimated",    type: "fund" },
        { id: "fed",     label: "Federal Reserve",     sub: "Emergency liquidity window",   type: "fund" },
      ],
      edges: [
        { from: "public", to: "bsc",    label: "100% equity" },
        { from: "bsc",    to: "assets", label: "Holds" },
        { from: "fed",    to: "bsc",    label: "Emergency overnight credit" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "jpm",     label: "JPMorgan Chase",    sub: "Full absorption of Bear Stearns",     type: "acquirer" },
        { id: "bsc_new", label: "Bear Stearns",      sub: "Merged into JPMorgan, brand retired",  type: "target" },
        { id: "maiden",  label: "Maiden Lane LLC",   sub: "Fed SPV; $29B toxic assets",          type: "fund" },
        { id: "fed",     label: "Federal Reserve",   sub: "$29B non-recourse credit to SPV",     type: "fund" },
      ],
      edges: [
        { from: "jpm",   to: "bsc_new", label: "$10/share (~$1.2B total)" },
        { from: "jpm",   to: "maiden",  label: "Bears first $1B of losses" },
        { from: "fed",   to: "maiden",  label: "$29B non-recourse credit" },
      ],
    },
    keyTerms: [
      { label: "Initial offer price",   value: "$2 per share",              accent: true },
      { label: "Final deal price",      value: "$10 per share (~$1.2B total)", accent: true },
      { label: "Fed backstop",          value: "$29B (Maiden Lane LLC SPV)" },
      { label: "Blocking stake",        value: "19.9% new shares to JPMorgan" },
      { label: "Prior Friday close",    value: "$30 per share" },
      { label: "Decline from peak",     value: "$172 → $2 = –99%" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "This was a 48-hour crisis negotiation, not a conventional M&A process. The Federal Reserve effectively acted as deal broker, and most advisory work was done by in-house teams working through the weekend.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "JPMorgan Chase",
        initials: "JPM",
        bg: "bg-blue-800",
        advisors: [
          {
            firm: "JPMorgan Internal Team (Jamie Dimon direct)",
            role: "Financial & legal coordination",
            roleType: "financial",
            note: "No time to hire external advisors. Dimon managed simultaneous negotiations with Bear's board, the Fed, and the Treasury through the weekend. JPMorgan's in-house M&A and legal teams led all workstreams.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "Legal counsel",
            roleType: "legal",
            note: "Drafted the merger agreement and Fed credit facility documents over the weekend. Known for emergency M&A transactions. Managed shareholder litigation risk.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Bear Stearns",
        initials: "BSC",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Lazard",
            role: "Financial advisor (fairness opinion)",
            roleType: "financial",
            note: "Delivered a fairness opinion that $2 per share was fair to Bear shareholders — comparing it to the alternative of zero in bankruptcy. Later provided an updated opinion when the price was revised to $10.",
          },
          {
            firm: "Cadwalader, Wickersham & Taft",
            role: "Legal counsel",
            roleType: "legal",
            note: "Advised Bear's board on fiduciary duties, shareholder litigation exposure, and deal terms. Navigated the unusual structure of the 19.9% blocking stake issuance.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public disclosures. Given the emergency nature of the transaction, some advisory engagements were formalized retroactively.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Standard valuation frameworks were irrelevant. The only relevant comparison was: JPMorgan's offer versus zero (bankruptcy). Bear's book equity was approximately $11 billion, implying ~$84 per share in book value. The $2 offer represented a 98% discount to book — justified by the mass of toxic assets whose market value was uncertain and by the existential urgency of closing before Monday's market open.",
    rows: [
      { item: "Book equity (FY2007)",             val: "~$11.1B",     note: "~$84/share; pre-writedown peak" },
      { item: "Statutory merger price (initial)",  val: "$2/share",    note: "Bankruptcy alternative = $0",  accent: true },
      { item: "Discount to book value",            val: "~97%",        note: "vs. $84 book value per share" },
      { item: "Bear HQ building (383 Madison Ave)", val: "~$1B+",      note: "Worth more than the initial deal price" },
      { item: "Fed backstop (Maiden Lane LLC)",    val: "$29 billion", note: "Non-recourse; JPMorgan bears first $1B" },
      { item: "Final deal price",                  val: "$10/share",   note: "Revised after shareholder revolt; ~$1.2B total", accent: true },
    ],
    disclaimer: "Note: Figures based on Bear Stearns FY2007 10-K and Federal Reserve disclosures. Toxic asset values were unobservable at deal time; final Maiden Lane LLC losses were recovered in full by 2011.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why did JPMorgan agree to do this?",
      initials: "JPM",
      bg: "bg-blue-800",
      points: [
        "Federal Reserve pressure: Tim Geithner framed Bear's failure as a systemic risk that would contaminate every other financial institution through counterparty exposure. JPMorgan, as a Fed primary dealer, effectively had limited choice.",
        "Strategic prize: Bear's prime brokerage franchise — the relationships, clearing systems, and staff — was exactly what JPMorgan wanted to dominate the hedge fund servicing market. The fixed income trading desk was also world-class.",
        "383 Madison Avenue: Bear's Manhattan headquarters was worth over $1 billion on its own. The entire initial $2/share deal was cheaper than the building.",
        "Competitive windfall: with Bear gone, JPMorgan absorbed much of its client base in prime brokerage and fixed income at no additional cost, in a market where surviving competitors had suddenly become scarce.",
      ],
    },
    seller: {
      title: "Why did Bear's board accept $2?",
      initials: "BSC",
      bg: "bg-red-700",
      points: [
        "The alternative was zero. Chapter 11 filing at Monday's open would have wiped out all shareholder value, triggered thousands of counterparty defaults, and destroyed 14,000 jobs.",
        "No competing bidder. The Fed and Treasury structured the weekend so that no other buyer had time to conduct diligence. It was JPMorgan or nothing.",
        "Employee protection: with ~30% of the firm owned by employees, management prioritized a deal that kept the business operating rather than an immediate wind-down.",
        "Board fiduciary duty: Lazard's fairness opinion gave the board legal cover to accept $2 by benchmarking it against the only real alternative — bankruptcy.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "In the short run, JPMorgan got an extraordinary deal. In the long run, it inherited Bear's legal liabilities. More broadly, the Bear Stearns rescue set expectations that the government would backstop large financial institutions — expectations that the Lehman Brothers decision would shatter six months later.",
    overallVerdict: "JPMorgan strategic success; catalyst for the deeper crisis",
    positives: [
      "JPMorgan absorbed Bear's prime brokerage, fixed income trading, and clearing operations, cementing its position as Wall Street's dominant bank through the crisis period when competitors were weakened or gone.",
      "The Federal Reserve fully recovered the $29 billion invested through Maiden Lane LLC by 2011. No taxpayer money was ultimately lost on the Bear transaction itself.",
      "System stabilization (temporary): the deal bought six months of relative calm before Lehman's failure. Without it, the financial system might have entered a full cascade failure in March 2008.",
      "Jamie Dimon's stature: managing a 48-hour emergency acquisition cemented his reputation as the most capable bank CEO on Wall Street through the crisis.",
    ],
    risks: [
      "Legal liability inheritance: by acquiring Bear, JPMorgan absorbed legal responsibility for Bear's pre-acquisition misconduct in selling fraudulent mortgage securities. The 2013 DOJ settlement cost JPMorgan $13 billion — dwarfing the acquisition price.",
      "Lehman effect (September 2008): the Bear rescue created moral hazard. When Lehman faced the same crisis six months later, markets assumed another rescue was coming. The decision not to save Lehman caused a financial shock an order of magnitude greater than Bear's collapse.",
      "Employee devastation: approximately 7,000 Bear employees lost their jobs after the merger. Those who had held Bear stock in their 401(k) plans saw retirement savings collapse from $172 to $10.",
      "Too Big to Fail precedent: the deal enshrined TBTF into financial system assumptions, contributing to the moral hazard that regulators then had to address through Dodd-Frank legislation (2010).",
    ],
    editorNote:
      "The JPMorgan–Bear Stearns deal is not an M&A case study — it is a financial system case study. The price ($2, then $10) had no relationship to Bear's intrinsic value. There was no competitive process, no fairness in the conventional sense, and no real negotiation. What it illustrates instead is the core vulnerability of leveraged financial institutions: the moment counterparties lose confidence, no amount of assets can prevent collapse, because all those assets depend on the continued willingness of others to fund them overnight. Bear Stearns did not run out of assets. It ran out of trust. The lesson — that liquidity risk is existential in ways that solvency risk is not — remains as relevant today as it was in March 2008.",
  },

  // ── Tombstone ────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "JPM",
    acquirerBg: "bg-blue-800",
    targetInitials: "BSC",
    targetBg: "bg-red-700",
    acquirerName: "JPMorgan Chase",
    targetName: "Bear Stearns",
    dealTitle: "JPMorgan Chase's Emergency Acquisition of Bear Stearns",
    dealSize: "~$1.2 billion (at $10/share)",
    dealSizeUSD: "approx. USD 1.2 Billion",
    evEbitda: "N/A (Crisis Acquisition)",
    closeDate: "May 2008",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Bear Stearns Annual Report FY2007, US GAAP, SEC Form 10-K" },
    { id: 2, text: "Federal Reserve Press Release: 'Federal Reserve and JPMorgan Chase Announce Financing Arrangement,' March 16, 2008" },
    { id: 3, text: "JPMorgan Chase Merger Agreement with Bear Stearns, SEC Form 8-K, March 17 and March 24, 2008" },
    { id: 4, text: "William D. Cohan, 'House of Cards: A Tale of Hubris and Wretched Excess on Wall Street' (Doubleday, 2009)" },
    { id: 5, text: "Timothy F. Geithner, 'Stress Test: Reflections on Financial Crises' (Crown, 2014)" },
    { id: 6, text: "Federal Reserve Bank of New York, Maiden Lane LLC Transaction Reports (2008–2011)" },
    { id: 7, text: "U.S. Department of Justice, JPMorgan Chase $13 Billion Settlement for Mortgage Securities Misconduct (November 2013)" },
  ],

  // ── SEO ──────────────────────────────────────────────────────
  seo: {
    title: "JPMorgan Bear Stearns Acquisition — The 48-Hour Collapse Explained",
    description:
      "Complete analysis of JPMorgan's emergency acquisition of Bear Stearns in March 2008. Covers the repo market collapse, $2 to $10 price drama, Fed's $29B Maiden Lane backstop, and Too Big to Fail precedent. The definitive case study of the 2008 financial crisis opening act.",
    keywords: [
      "JPMorgan Bear Stearns acquisition",
      "Bear Stearns collapse 2008",
      "2008 financial crisis M&A",
      "subprime mortgage crisis",
      "Too Big to Fail",
      "repo market liquidity crisis",
      "Federal Reserve bank bailout",
      "investment bank failure",
      "Maiden Lane LLC Fed",
      "Bear Stearns $2 per share",
    ],
  },

  // ── Key Concepts ─────────────────────────────────────────────
  concepts: [
    {
      term: "Repo (Repurchase Agreement) Market",
      description: "Short-term collateralized borrowing where a firm sells assets today and agrees to repurchase them tomorrow. When counterparties refuse to roll repo agreements simultaneously, funding can vanish overnight — precisely what killed Bear Stearns.",
    },
    {
      term: "Leverage Ratio",
      description: "Total assets divided by equity. At 35:1, Bear Stearns controlled $35 of assets for every $1 of equity. A 3% decline in asset values would wipe out all equity. High leverage amplifies both gains and catastrophic losses.",
    },
    {
      term: "MBS (Mortgage-Backed Securities)",
      description: "Securities backed by pools of home mortgages. When subprime mortgage defaults surged in 2007–2008, MBS prices collapsed, devastating the balance sheets of institutions that held them in large quantities.",
    },
    {
      term: "Too Big to Fail (TBTF)",
      description: "The principle that certain financial institutions are so interconnected that their failure would cause systemic damage justifying government intervention. The Bear Stearns rescue was TBTF's first modern application in the 2008 crisis.",
    },
    {
      term: "Fairness Opinion",
      description: "A written statement from a financial advisor to a company's board that the terms of a transaction are fair from a financial point of view. Lazard opined that $2/share was fair — benchmarked against a bankruptcy outcome of $0.",
    },
    {
      term: "SPV (Special Purpose Vehicle)",
      description: "A legally separate entity created to isolate specific assets or liabilities. The Fed created Maiden Lane LLC as an SPV to hold Bear's $29 billion in toxic assets, insulating both JPMorgan and the broader financial system from direct exposure.",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did Bear Stearns collapse so quickly?",
      a: "Bear Stearns ran a 'borrow short, lend long' model — it funded long-dated mortgage assets with overnight repo agreements that had to be rolled over every day. When rumors spread about its health in March 2008, counterparties simultaneously refused to roll their repo positions. Bear's $18 billion in cash reserves collapsed to near zero in less than 48 hours. It didn't run out of assets — it ran out of counterparties willing to fund those assets.",
    },
    {
      q: "Why did JPMorgan only pay $2 per share?",
      a: "The $2 price reflected the coercive nature of the deal, not Bear's intrinsic value. There was no competitive auction — the Federal Reserve gave JPMorgan the weekend to close a deal or watch Bear file for bankruptcy on Monday morning. Bear had no leverage; its only alternative was Chapter 11, which would have delivered $0 to shareholders. The initial price was so low that it was less than the value of Bear's Madison Avenue headquarters building. Shareholder outrage later forced a revision to $10.",
    },
    {
      q: "What was the Federal Reserve's $29 billion, and did taxpayers lose money?",
      a: "The Fed created a special purpose vehicle called Maiden Lane LLC, which acquired approximately $29 billion in Bear's most toxic mortgage assets. JPMorgan agreed to absorb the first $1 billion of losses; the Fed backstopped everything beyond that. The deal was structured as a non-recourse loan to Maiden Lane. By 2011, the Fed had sold all Maiden Lane assets and recovered its full $29 billion — plus interest. Taxpayers ultimately lost nothing on the Bear transaction itself.",
    },
    {
      q: "What happened to Bear Stearns employees?",
      a: "Roughly 7,000 of Bear's 14,000 employees were laid off after the merger closed. The human impact was severe because Bear's culture encouraged employees to hold substantial amounts of company stock, including in their 401(k) retirement accounts. Those who had bet their retirement savings on Bear saw the value plunge from $172 to $10 per share — a 94% loss — in just over a year.",
    },
    {
      q: "Why didn't the Fed save Lehman Brothers six months later?",
      a: "The Bear rescue created a moral hazard problem: markets assumed all large banks would be rescued. When Lehman Brothers hit the same wall in September 2008, Treasury Secretary Hank Paulson and Fed Chair Ben Bernanke decided to let it fail — partly to signal that taxpayers wouldn't backstop every firm, and partly because Lehman's assets were considered harder to transfer cleanly to a buyer. The decision not to save Lehman is now widely considered one of the most consequential policy errors of the crisis, triggering a global financial panic that dwarfed the Bear episode.",
    },
    {
      q: "Did JPMorgan ultimately profit from the Bear Stearns deal?",
      a: "Short-term: yes, enormously. JPMorgan acquired Bear's prime brokerage franchise, top-tier fixed income trading staff, and prime Manhattan real estate for a fraction of their replacement cost. Long-term: more complicated. The 2013 DOJ settlement required JPMorgan to pay $13 billion — largely related to Bear's pre-acquisition conduct in selling fraudulent mortgage securities, liabilities that JPMorgan inherited. But the strategic positioning benefits — particularly the hedge fund client base absorbed from Bear — generated billions in revenues over the following decade.",
    },
  ],
};

export default deal;
