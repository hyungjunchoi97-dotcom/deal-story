/**
 * Vodafone × Mannesmann Hostile Takeover
 * Largest-Ever Hostile M&A — $183B (all-stock), Closed April 2000
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "vodafone-mannesmann",
  title: "How Vodafone Pulled Off the $183B Hostile Takeover of Mannesmann — The Largest-Ever Hostile M&A",
  subtitle: "Chris Gent vs. Klaus Esser · German Codetermination's Limits · Dotcom Bubble and the Battle for Europe's Telecom Crown",
  category: "ma",
  industry: "Telecommunications / Mobile",
  country: "UK · Germany",
  announcedAt: "1999-11-14",
  closedAt: "2000-04-12",
  announcedDisplay: "November 1999",
  closedDisplay: "April 2000",
  readingMinutes: 12,
  tags: ["Vodafone", "Mannesmann", "Hostile Takeover", "European Telecom", "Dotcom Bubble", "Largest Hostile M&A"],
  excerpt:
    "Vodafone AirTouch's $183 billion all-stock hostile takeover of Mannesmann AG in 2000 remains the largest hostile takeover in history. CEO Chris Gent faced off against Klaus Esser in a battle that pitted Anglo-Saxon shareholder primacy against German codetermination (Mitbestimmung). When 97% of Mannesmann's shareholders tendered their shares, Vodafone built the largest mobile empire in Europe — only for the dotcom bubble to burst months later, triggering a €22 billion impairment and a criminal trial in Germany.",

  acquirer: { initials: "VOD", bg: "bg-red-600", label: "Vodafone AirTouch" },
  target: { initials: "MAN", bg: "bg-gray-700", label: "Mannesmann AG" },

  background: [
    "In 1999, European mobile telephony was at the peak of its first growth wave. GSM had become the continent's dominant standard, subscriber counts were compounding at double-digit annual rates, and investors were paying extraordinary multiples for any company with wireless spectrum. Vodafone — which had just completed its $66 billion merger with US carrier AirTouch to form Vodafone AirTouch — saw a narrow window to consolidate before a rival locked up the German market. CEO Chris Gent had a straightforward ambition: build a seamless pan-European GSM network spanning the UK, Germany, and Italy.",
    "Mannesmann AG was the central piece of that puzzle. A 19th-century steel and engineering conglomerate, Mannesmann had executed one of corporate history's most remarkable pivots by entering Germany's newly liberalised mobile market in the 1990s. Its D2 network had become Germany's leading mobile operator under CEO Klaus Esser. Then in 1999, Mannesmann made a bold move of its own — acquiring UK-based Orange plc. This was the inflection point. Vodafone already held an indirect stake in Mannesmann through its relationship with Orange. Mannesmann's Orange acquisition transformed a partner into a direct competitor in the UK, a market Vodafone considered its home turf.",
    "Vodafone's initial approach in November 1999 was rejected outright by the Mannesmann board. Klaus Esser mounted a defence built around German structural institutions: the supervisory board (Aufsichtsrat), in which employee representatives — including IG Metall union leader Klaus Zwickel — held half the seats under Germany's Mitbestimmung (codetermination) law. German politicians added their voices, characterising the deal as unwanted foreign predation of a German industrial champion. For weeks, the outcome appeared genuinely uncertain.",
    "The resolution came from the shareholders. Vodafone repeatedly sweetened its exchange ratio; each improvement made the offer harder for institutional investors to refuse. The critical moment came when Klaus Zwickel — the labour representative who had been expected to anchor Mannesmann's defence — reversed his position and endorsed the deal. On February 3, 2000, Mannesmann shareholders tendered 97% of shares, ending the most dramatic hostile takeover battle in corporate history. The deal closed formally in April 2000, almost exactly at the peak of the dotcom bubble.",
  ],

  dealSummary: {
    dealValueDisplay: "USD $183B (all-stock exchange)",
    acquirerName: "Vodafone AirTouch plc",
    targetName: "Mannesmann AG",
    announcedDisplay: "November 1999",
    closedDisplay: "April 2000",
    country: "UK · Germany",
  },

  executiveSummary: [
    "$183B all-stock deal — largest hostile takeover ever; one of the largest M&A transactions in history at the time",
    "Trigger: Mannesmann's acquisition of Orange transformed a Vodafone partner into a UK competitor — Chris Gent responded with a hostile bid",
    "German codetermination (Mitbestimmung) as a defence — supervisory board labour representative Klaus Zwickel ultimately switched sides in favour of Vodafone",
    "97% shareholder tender — premium plus growth narrative overwhelmed the institutional defence",
    "Aftermath: €57M executive severance (Esser et al.) → German criminal trial for breach of fiduciary duty → settled in 2006",
    "2001: Orange sold to France Telecom for £30B (EU regulatory condition); 2002: €22B Goodwill impairment — dotcom collapse",
    "Despite the write-downs, Vodafone retained European telecom leadership for 20+ years post-deal",
  ],

  industryOverview: {
    body: "The European mobile telecoms market in 1999–2000 was in a state of extraordinary euphoria. GSM rollout had accelerated across the continent, subscriber numbers were growing rapidly, and investors priced mobile operators on the assumption of perpetual compounding. 3G spectrum auctions — held in 2000 in the UK, Germany, and Italy — triggered bidding wars that collectively raised over €100 billion, reflecting the market's conviction that mobile internet would be transformative. In this environment, the Vodafone–Mannesmann deal was simultaneously a rational strategic consolidation and a product of peak-cycle irrational exuberance.",
    metrics: [
      { label: "Deal Size", value: "$183B", sub: "Largest hostile takeover in history (as of 2025)" },
      { label: "EV / EBITDA (implied)", value: "~30x+", sub: "Dotcom-era telecom premium — 2–3x normalised multiples" },
      { label: "Shareholder Tender Rate", value: "97%", sub: "Mannesmann shareholders accepting Vodafone's offer" },
      { label: "European GSM Subscribers (2000)", value: "~200M", sub: "Rapidly growing; 3G transition expected imminently" },
    ],
    subBody: "Telecoms in 1999–2000 were valued almost entirely on subscriber growth and spectrum footprint rather than near-term earnings. Analysts pointed to future 3G revenue streams — mobile e-commerce, video, internet access — that had never been demonstrated at scale. This 'story stock' dynamic allowed Vodafone, itself trading at a massive premium, to deploy its inflated share price as acquisition currency. It was, in retrospect, bubble buying bubble — but both parties had rational motives under the prevailing market logic of the day.",
    players: [
      { name: "Vodafone AirTouch", role: "UK #1 mobile operator; pan-European ambitions; acquirer" },
      { name: "Mannesmann AG", role: "Germany D2 + Orange UK; among Europe's top-2 mobile operators" },
      { name: "Deutsche Telekom", role: "Germany's dominant incumbent; Mannesmann's domestic rival" },
      { name: "France Telecom", role: "Acquired Orange from Vodafone in 2001 for £30B" },
      { name: "BT Group", role: "UK incumbent; major pan-European telecom competitor" },
    ],
  },

  companyOverview: {
    targetName: "Mannesmann AG",
    body: "Mannesmann AG was founded in 1890 as a German steel pipe manufacturer and grew into one of Germany's most important industrial conglomerates, spanning automotive components and engineering. In the 1990s, it executed one of the most dramatic corporate transformations of the decade, entering Germany's newly liberalised mobile market with its D2 network and becoming the country's leading mobile operator. Under CEO Klaus Esser, Mannesmann then acquired UK-based Orange plc in 1999, positioning itself as a pan-European mobile challenger. That acquisition — intended to build a European counterweight to Vodafone — instead triggered the hostile takeover that ended Mannesmann's independence. The story of Mannesmann is, in essence, the story of an industrial company that bet its future on mobile telecoms — and won the bet, only to lose the company.",
    metrics: [
      { label: "Founded", value: "1890", sub: "Steel pipe manufacturer → telecom transformee" },
      { label: "D2 Network", value: "Germany's #1 mobile operator", sub: "As of 1999" },
      { label: "Revenue (FY1999E)", value: "~€23B", sub: "EUR hundred million equivalent" },
      { label: "EBITDA (FY1999E)", value: "~€5.0B", sub: "Implied EV/EBITDA ~30x+ at deal value" },
      { label: "Key Assets", value: "D2 (Germany), Orange (UK), Omnitel (Italy)", sub: "Pan-European mobile portfolio" },
    ],
    financials: [
      { year: "1999", revenue: 230, cogs: 120, grossProfit: 110, sga: 40, operatingIncome: 25, ebitda: 50 },
    ],
    financialsNote: "Unit: EUR hundred million (億). Based on public filings and industry estimates. Mannesmann operated as a diversified industrial and telecom conglomerate; figures are group-level approximations.",
    financialsCurrency: "EUR",
    financialsUnit: "億",
  },

  dealStructure: {
    body: "The transaction was structured as a 100% all-stock exchange. Mannesmann shareholders received new Vodafone shares for each Mannesmann share tendered. The all-stock structure was not incidental — it was fundamental. Vodafone's dotcom-era market capitalisation made a cash deal of this magnitude impossible; instead, Vodafone used its inflated stock as currency. The exchange ratio was revised upward multiple times during the contested process as Vodafone sought to overcome resistance from the Mannesmann board and institutional shareholders. The final ratio gave Mannesmann holders a ~50%+ premium to the pre-announcement price. The EU Commission approved the merger conditional on the disposal of Mannesmann's Orange UK business to avoid a competitive overlap in the UK market.",
    preOwnership: {
      nodes: [
        { id: "vodafone", label: "Vodafone AirTouch plc", sub: "LSE / NYSE listed", type: "acquirer" },
        { id: "mannesmann", label: "Mannesmann AG", sub: "Frankfurt Stock Exchange listed", type: "target" },
        { id: "mannesmann_shareholders", label: "Mannesmann Shareholders", sub: "Dispersed institutional and retail", type: "entity" },
        { id: "orange", label: "Orange plc", sub: "Mannesmann subsidiary (UK mobile)", type: "entity" },
      ],
      edges: [
        { from: "mannesmann_shareholders", to: "mannesmann", label: "Shareholder control" },
        { from: "mannesmann", to: "orange", label: "Acquired 1999" },
        { from: "vodafone", to: "mannesmann", label: "Hostile bid launched Nov 1999" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "vodafone_parent", label: "Vodafone Group plc", sub: "LSE / NYSE; Europe's largest mobile operator", type: "acquirer" },
        { id: "d2", label: "Mannesmann D2", sub: "German mobile operations — Vodafone subsidiary", type: "target" },
        { id: "omnitel", label: "Omnitel", sub: "Italian mobile operations — Vodafone subsidiary", type: "entity" },
        { id: "orange_sold", label: "Orange plc", sub: "Sold to France Telecom 2001 (£30B) — EU condition", type: "entity" },
      ],
      edges: [
        { from: "vodafone_parent", to: "d2", label: "100% owned" },
        { from: "vodafone_parent", to: "omnitel", label: "Controlling stake" },
        { from: "vodafone_parent", to: "orange_sold", label: "Divested 2001" },
      ],
    },
    keyTerms: [
      { label: "Deal Size", value: "USD $183B (all-stock)", accent: true },
      { label: "Deal Structure", value: "Hostile tender offer — 100% stock exchange", accent: true },
      { label: "Exchange Ratio", value: "58.96 new Vodafone shares per Mannesmann share", accent: false },
      { label: "Acquisition Premium", value: "~50%+ to pre-announcement price (final offer)", accent: true },
      { label: "Shareholder Tender Rate", value: "97%", accent: false },
      { label: "EV / EBITDA", value: "~30x+ (dotcom-era telecom premium)", accent: true },
      { label: "Regulatory Condition", value: "EU: Mandatory disposal of Orange UK", accent: false },
      { label: "Orange Disposal", value: "Sold to France Telecom for £30B (2001)", accent: false },
      { label: "Closing Date", value: "April 12, 2000", accent: false },
    ],
  },

  advisors: {
    body: "The deal marshalled the leading investment banks on both sides of the Atlantic. Vodafone's Goldman Sachs team drove the exchange ratio design and the shareholder persuasion campaign — a systematic effort to win over institutional investors across the UK, Continental Europe, and the US. Mannesmann's defensive advisors at Merrill Lynch and Morgan Stanley mounted a credible 'standalone value' argument and explored white knight alternatives, but could not match the premium Vodafone was willing to offer.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer (Vodafone)",
        initials: "VOD",
        bg: "bg-red-600",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (lead)", roleType: "financial", note: "Exchange ratio design; shareholder communication and persuasion strategy" },
          { firm: "Warburg Dillon Read (UBS)", role: "Financial Advisor (co-advisor)", roleType: "financial", note: "Co-advisor; European deal network" },
          { firm: "Freshfields Bruckhaus Deringer", role: "Legal Counsel", roleType: "legal", note: "UK and German law; hostile bid structure and regulatory process" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target / Defence (Mannesmann)",
        initials: "MAN",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Merrill Lynch", role: "Financial Advisor (lead)", roleType: "financial", note: "Defence valuation, standalone value narrative, white knight search" },
          { firm: "Morgan Stanley", role: "Financial Advisor (co-advisor)", roleType: "financial", note: "Independent valuation analysis; shareholder engagement" },
          { firm: "Hengeler Mueller", role: "Legal Counsel (Germany)", roleType: "legal", note: "German supervisory board and Mitbestimmung defence strategy" },
          { firm: "Slaughter and May", role: "Legal Counsel (UK)", roleType: "legal", note: "UK law advice relating to the Orange subsidiary" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting and industry sources.",
  },

  valuation: {
    body: "At $183 billion, the deal's implied EV/EBITDA of approximately 30x was impossible to justify on any conventional DCF or comps-based framework. It was a product of the dotcom moment: investors and acquirers alike were pricing telecom assets on the assumption that 3G mobile internet would generate revenues orders of magnitude beyond anything then visible. Vodafone's own shares were trading at equally stratospheric multiples — making an all-stock transaction a rational choice for Vodafone, which was effectively exchanging overvalued paper for real-world network assets. The result was a deal that only made economic sense if the growth assumptions of 1999–2000 proved correct — and they didn't.",
    rows: [
      { item: "Deal EV", val: "$183B", note: "100% Vodafone new shares exchanged for Mannesmann shares", accent: true },
      { item: "Acquisition Premium", val: "~50%+", note: "Final offer vs. pre-announcement price; repeatedly raised" },
      { item: "Mannesmann EBITDA (FY1999E)", val: "~€5.0B", note: "Based on public filings and estimates" },
      { item: "EV / EBITDA", val: "~30x+", note: "Dotcom-era telecom multiple — 2–3x above normal range", accent: true },
      { item: "Deal Currency", val: "All-stock (zero cash outlay)", note: "Vodafone used its own inflated shares as acquisition currency" },
      { item: "Orange Disposal (2001)", val: "£30B", note: "Sold to France Telecom; EU regulatory condition" },
      { item: "2002 Goodwill Impairment", val: "~€22B", note: "Largest consumer / telecom impairment at the time; dotcom collapse" },
    ],
    disclaimer: "All figures based on public announcements, regulatory filings, and industry estimates. Dotcom-era telecom valuations were detached from conventional earnings multiples.",
  },

  rationale: {
    buyer: {
      title: "Vodafone's Rationale for the Hostile Bid",
      initials: "VOD",
      bg: "bg-red-600",
      points: [
        "European telecom dominance — combining UK (Vodafone), Germany (D2), and Italy (Omnitel) into the continent's largest seamless GSM network",
        "Blocking a competitor — Mannesmann's Orange acquisition had converted a partner into a UK rival; the hostile bid was simultaneously offensive and defensive",
        "First-mover advantage for 3G — securing German and Italian spectrum positions ahead of competitors for the anticipated 3G mobile internet era",
        "Scale economics — unified network infrastructure, shared roaming arrangements, and consolidated procurement across the combined entity",
        "All-stock arbitrage — Vodafone's dotcom-inflated share price meant $183B could be assembled without a single dollar of cash, making the deal financially feasible",
      ],
    },
    seller: {
      title: "Mannesmann Shareholder Rationale (97% tendered)",
      initials: "MAN",
      bg: "bg-gray-700",
      points: [
        "Compelling premium plus upside — ~50%+ immediate premium, with the option to continue participating in Vodafone's growth through newly issued shares",
        "Defence failure — the Mannesmann board's resistance, while credible, could not match Vodafone's repeated price increases",
        "Zwickel's reversal — IG Metall leader Klaus Zwickel's switch from opposition to support was the decisive signal that the Mitbestimmung shield had buckled",
        "No white knight — Mannesmann's search for an alternative bidder at comparable value found no takers at $183B in 1999 market conditions",
        "Dotcom optimism — in early 2000, almost no institutional shareholder was willing to bet against a combined Vodafone–Mannesmann telecom empire",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "The deal closed in April 2000 — almost to the day when NASDAQ peaked and the dotcom bubble began its collapse. Vodafone was immediately required by the EU to divest Orange, which was sold to France Telecom in 2001 for £30 billion. In 2002, Vodafone booked approximately €22 billion in Goodwill impairment, the largest write-down in corporate history at the time, acknowledging that the price paid for Mannesmann could not be supported by underlying asset values. The criminal proceedings against Klaus Esser and supervisory board members — over €57 million in executive severance payments — were eventually resolved by settlement in 2006 with no convictions. Despite all of this, Vodafone retained Germany's leading mobile market position and Italy's Omnitel network, and has maintained its status as Europe's largest mobile operator ever since.",
    overallVerdict: "Strategically successful — pan-European leadership achieved and sustained; financially painful — dotcom-era pricing triggered the largest impairment of its time",
    positives: [
      "Europe's largest mobile operator — UK, Germany, Italy integrated; position held for 20+ years post-deal",
      "Proof of concept for hostile takeovers in Germany — Mitbestimmung's institutional protections were overcome by shareholder economics",
      "Pan-European roaming and network economics — infrastructure scale achieved as planned",
      "Pre-emptive strategic move — German and Italian positions secured before rivals could consolidate",
    ],
    risks: [
      "€22B Goodwill impairment (2002) — the price of buying bubble-era assets at bubble-era prices",
      "Esser severance scandal — €57M in executive payments triggered Germany's most high-profile corporate criminal trial; settled 2006 without convictions",
      "Orange disposed at a loss in strategic terms — a key acquired asset was immediately divested to satisfy EU regulators",
      "Dotcom collapse — 3G investment over-build, share price depression, and sector-wide restructuring wave followed within 18 months of close",
      "Post-deal portfolio complexity — decades of subsequent disposals and restructuring reflect the burden of Mannesmann's sprawling asset base",
    ],
    editorNote: "The Vodafone–Mannesmann deal is the purest expression of what happens when strategic logic and financial logic diverge at the peak of a bubble. The strategic outcome — European telecom leadership — was real and durable. The financial outcome — €22B written off — was equally real. History has broadly vindicated Gent's territorial ambition while confirming that $183 billion was roughly twice what Mannesmann was worth. The deal's deeper lesson: in a hostile takeover, the final arbiter is always the shareholder — not the board, not the union, not the government.",
  },

  tombstone: {
    acquirerInitials: "VOD",
    acquirerBg: "bg-red-600",
    targetInitials: "MAN",
    targetBg: "bg-gray-700",
    acquirerName: "Vodafone AirTouch plc",
    targetName: "Mannesmann AG",
    dealTitle: "Largest-Ever Hostile Takeover",
    dealSize: "$183B (all-stock exchange)",
    dealSizeUSD: "USD 183 Billion (all-stock)",
    evEbitda: "~30x+ (dotcom premium)",
    closeDate: "Apr 2000",
  },

  sources: [
    { id: 1, text: "Vodafone AirTouch — Offer Document for Mannesmann AG (November 1999)" },
    { id: 2, text: "Financial Times — Vodafone Wins Mannesmann Battle (February 2000)" },
    { id: 3, text: "Bloomberg — Vodafone Agrees to Buy Mannesmann for $183 Billion (February 2000)" },
    { id: 4, text: "The Economist — The World's Biggest Takeover (February 2000)" },
    { id: 5, text: "Der Spiegel — Mannesmann Trial: The Billion-Euro Severance (2004)" },
    { id: 6, text: "Landgericht Düsseldorf — Mannesmann Criminal Trial Settlement (2006)" },
    { id: 7, text: "Vodafone Annual Report 2002 — Goodwill Impairment Disclosure" },
  ],

  seo: {
    title: "Vodafone Mannesmann Hostile Takeover Analysis — $183B Largest-Ever Hostile M&A",
    description: "Complete analysis of Vodafone's $183 billion hostile takeover of Mannesmann — the largest hostile M&A in history. German codetermination defence, 97% shareholder tender, dotcom bubble valuation, and post-deal fallout all dissected.",
    keywords: [
      "Vodafone Mannesmann hostile takeover",
      "largest hostile M&A history",
      "German Mitbestimmung codetermination",
      "dotcom telecom bubble M&A",
      "Klaus Esser Chris Gent",
    ],
  },

  concepts: [
    { term: "Hostile Takeover (Hostile Tender Offer)", href: "/deal-101/hostile-takeover", description: "An acquisition where the bidder bypasses the target's board and appeals directly to shareholders with a premium offer to gain control" },
    { term: "German Codetermination (Mitbestimmung)", href: "/deal-101/mitbestimmung", description: "A German corporate governance requirement that employee representatives occupy half the supervisory board — used as a takeover defence mechanism in this deal" },
    { term: "Telecom Bubble (1999–2001)", href: "/deal-101/telecom-bubble", description: "A period of extreme overvaluation of telecom companies driven by GSM growth and 3G expectations, collapsing in 2001–2002 with massive impairments across the sector" },
  ],

  faq: [
    {
      q: "What directly triggered Vodafone's hostile bid for Mannesmann?",
      a: "Mannesmann's acquisition of Orange — the UK mobile operator — was the immediate trigger. Vodafone held an indirect interest in Mannesmann through its prior relationship with Orange, and considered the UK market its home territory. When Mannesmann bought Orange, it transformed itself from a Vodafone partner into a direct UK competitor. CEO Chris Gent concluded this was intolerable and launched a hostile bid directly to Mannesmann shareholders, bypassing the board entirely. The short version: 'My partner became my competitor — so I bought them.'",
    },
    {
      q: "What is German codetermination (Mitbestimmung) and why did it fail as a takeover defence?",
      a: "Mitbestimmung is a German legal requirement that companies with more than 2,000 employees must fill half their supervisory board (Aufsichtsrat) seats with employee representatives. Mannesmann's supervisory board included IG Metall union leader Klaus Zwickel as a key labour representative. Initially, Zwickel opposed Vodafone's bid and the German political establishment rallied to resist what was framed as a foreign takeover of a German industrial champion. However, as Vodafone repeatedly raised its offer, the economics became compelling for institutional shareholders. Zwickel ultimately reversed his position and endorsed the deal. The lesson: Mitbestimmung can slow a hostile bid and complicate governance, but it cannot override the economic incentives of a majority of shareholders when the premium is large enough.",
    },
    {
      q: "What was the Mannesmann executive severance scandal?",
      a: "Shortly after the deal closed, it emerged that Klaus Esser and other Mannesmann supervisory board members had authorised payment of approximately €57 million in 'appreciation awards' — effectively special bonuses — to executives, including €15 million to Esser personally and €11.5 million to supervisory board chairman Josef Ackermann (then CEO of Deutsche Bank). German prosecutors argued these payments were an unauthorised transfer of shareholder assets and charged the recipients with breach of fiduciary duty (Untreue) under German criminal law. Ackermann was among the high-profile defendants. After years of proceedings, a 2006 settlement ended the case without criminal convictions. It remains one of the most prominent corporate governance controversies in German business history.",
    },
    {
      q: "Was the Vodafone–Mannesmann deal ultimately a success or failure?",
      a: "It was both, on different dimensions. Strategically, the deal was a success: Vodafone achieved its goal of becoming Europe's largest mobile operator, with dominant positions in the UK, Germany, and Italy. That position has been maintained for more than two decades. Financially, however, the deal was clearly overpriced by any normal metric. The 2002 Goodwill impairment of approximately €22 billion — the largest ever booked by a company at that time — confirmed that the $183 billion price tag could not be supported by the underlying fundamentals. The most accurate verdict: 'The strategy was right; the price was wrong.' As a case study, it demonstrates that strategic and financial success in M&A can diverge dramatically when timing coincides with a market bubble.",
    },
  ],
};

export default deal;
