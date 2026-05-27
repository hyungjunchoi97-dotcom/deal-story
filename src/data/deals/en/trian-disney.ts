/**
 * Trian Fund Management × The Walt Disney Company
 * Proxy War: Nelson Peltz vs. Bob Iger — 2023–2024
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "trian-disney",
  title: "Proxy War: How Nelson Peltz Stormed the Magic Kingdom — Trian vs. Disney",
  subtitle: "$11B Streaming Losses · Stock Down 50% · Nelson Peltz Board Seat Bid · Iger's Counteroffensive",
  category: "activism",
  industry: "Media & Entertainment",
  country: "USA",
  announcedAt: "2023-11-16",
  closedAt: "2024-04-03",
  announcedDisplay: "November 2023",
  closedDisplay: "April 2024",
  readingMinutes: 10,
  tags: ["Trian", "Nelson Peltz", "Disney", "Bob Iger", "proxy fight", "CEO replacement", "streaming losses", "activism"],
  excerpt:
    "Nelson Peltz of Trian Fund Management launched a $2.5B proxy campaign against Walt Disney Company, citing over $11 billion in cumulative streaming losses and a stock that had halved from its 2021 peak. Backed by former Marvel chairman Isaac Perlmutter, Peltz demanded board seats. Bob Iger's defense — marshaling George Lucas, Oprah Winfrey, and Jamie Dimon — became one of the most spectacular corporate defense campaigns in history. At the April 2024 shareholder meeting, both Peltz and Jay Rasulo were defeated.",

  acquirer: { initials: "TRI", bg: "bg-red-800", label: "Trian Fund Management (Nelson Peltz)" },
  target:   { initials: "DIS", bg: "bg-blue-700", label: "The Walt Disney Company" },

  background: [
    "In November 2022, The Walt Disney Company's board fired CEO Bob Chapek and brought back former CEO Bob Iger in a dramatic reversal. Disney's stock had fallen more than 50% from its 2021 peak of around $203, and the Disney+ streaming service had accumulated billions in losses through aggressive subscriber growth at the expense of profitability. Iger's return was greeted as a rescue, but the underlying problems remained.",
    "On November 16, 2023, Nelson Peltz's Trian Fund Management disclosed a roughly $2.5 billion stake in Disney (approximately 1% of shares) and demanded board representation. Trian's ally was Isaac Perlmutter, the former chairman of Marvel Entertainment who had been ousted in Disney's layoffs. Perlmutter held a separate Disney stake of approximately $900 million and openly backed Trian's campaign.",
    "Trian's three core charges were: first, that Disney+'s cumulative streaming losses had exceeded $11 billion without a credible path to monetization; second, that executive pay had been excessive during a period when the stock lost half its value; and third, that Disney had no clear CEO succession plan beyond Iger's current term. Trian assembled a 133-page presentation dissecting Disney's alleged failures.",
    "Disney's defense was one of the most aggressive in corporate history. Iger secured public endorsements from George Lucas, Oprah Winfrey, and Jamie Dimon. The company added high-profile board members including James Gorman, outgoing CEO of Morgan Stanley. Disney also voluntarily announced a $7.5 billion cost-cutting program and a streaming path to profitability — effectively conceding Trian's diagnosis while arguing no external board intervention was needed.",
  ],

  dealSummary: {
    dealValueDisplay: "Trian stake ~$2.5B (~1% of Disney)",
    acquirerName: "Trian Fund Management (Nelson Peltz)",
    targetName: "The Walt Disney Company",
    announcedDisplay: "November 2023",
    closedDisplay: "April 2024",
    country: "USA",
  },

  executiveSummary: [
    "Trian Fund ($2.5B stake, ~1%) + Isaac Perlmutter ($900M stake) declared a proxy war, demanding Nelson Peltz and Jay Rasulo be seated on Disney's board",
    "Core attack thesis: $11B+ cumulative Disney+ streaming losses, stock down 50%+ from 2021 peak, no credible CEO succession plan",
    "Disney defense: Iger enlisted George Lucas, Oprah Winfrey, and Jamie Dimon; added James Gorman (Morgan Stanley CEO) to the board; announced $7.5B cost cuts",
    "April 3, 2024 shareholder vote: Both Peltz AND Rasulo defeated — all Disney board nominees re-elected",
    "Key to Disney's win: Support from Vanguard (7.2%) and BlackRock, plus early evidence of streaming turnaround",
    "Legacy: Disney accelerated its streaming profitability pivot, cost-cutting, and ESPN strategic review — Trian's agenda implemented without Trian in the boardroom",
    "One of the largest proxy fights in US corporate history — Hollywood celebrities pressed into service as corporate defense weapons",
  ],

  industryOverview: {
    body: "By 2023, the global media and entertainment industry was reeling from the 'streaming wars' hangover. Netflix led the market, but Disney+, HBO Max, Peacock, and others had poured tens of billions into subscriber acquisition at the expense of profitability. With rising interest rates eliminating growth premiums and the 2023 Hollywood writers' and actors' strikes adding further disruption, media stocks were broadly depressed.",
    metrics: [
      { label: "Global streaming subscribers (2023)", value: "~1.5 billion", sub: "Netflix + Disney+ + Prime Video combined" },
      { label: "Disney+ cumulative losses", value: "$11B+", sub: "From 2019 launch through 2023" },
      { label: "Disney stock decline", value: "-50%+", sub: "From 2021 peak of ~$203" },
      { label: "2023 Hollywood strike impact", value: "~$5B in losses", sub: "WGA + SAG-AFTRA simultaneous strikes" },
    ],
    subBody: "Legacy media companies faced a double bind: the old cable and broadcast revenue streams were in structural decline, while their streaming replacements remained deeply unprofitable. Disney held the world's strongest IP portfolio — Marvel, Star Wars, Pixar — but had failed to translate it into a sustainable streaming business model. For an activist investor, Disney was a textbook 'rich assets, poor execution' target.",
    players: [
      { name: "Trian Fund Management", role: "Activist hedge fund, Nelson Peltz, ~1% Disney stake" },
      { name: "Bob Iger (CEO)", role: "Returned as Disney CEO November 2022" },
      { name: "Isaac Perlmutter", role: "Former Marvel chairman, Trian ally, ~$900M Disney stake" },
      { name: "Vanguard / BlackRock / State Street", role: "Major institutional Disney shareholders, decisive votes" },
      { name: "Netflix", role: "Dominant streaming competitor to Disney+" },
    ],
  },

  companyOverview: {
    targetName: "The Walt Disney Company",
    body: "Founded in 1923, The Walt Disney Company is the world's largest entertainment company. Its diversified portfolio spans Theme Parks & Resorts, Film & Content (Marvel, Pixar, Star Wars, National Geographic), Broadcasting (ABC, ESPN), and Streaming (Disney+, Hulu, ESPN+). COVID-19 park closures and the streaming investment cycle caused Disney's stock to peak at ~$203 in 2021 before losing more than half its value by 2023. Bob Iger returned as CEO in November 2022 to lead a restructuring, but streaming losses and shareholder returns remained flashpoints.",
    metrics: [
      { label: "Market cap (November 2023)", value: "~$150B", sub: "At time of Trian campaign launch" },
      { label: "Disney+ subscribers (2023)", value: "~150M", sub: "Disney+ standalone, excluding Hulu" },
      { label: "Annual revenue (FY2023)", value: "~$88.5B", sub: "Parks, content, and streaming combined" },
      { label: "Cumulative streaming losses", value: "$11B+", sub: "Since Disney+ launch in 2019" },
      { label: "Theme Parks EBITDA margin", value: "~30%", sub: "Core profit engine of Disney" },
      { label: "Key IP", value: "Marvel · Star Wars · Pixar · Disney Classic", sub: "World's strongest franchise portfolio" },
    ],
    financials: [
      { year: "FY2022", revenue: 824, cogs: 600, grossProfit: 224, sga: 80, operatingIncome: 30, ebitda: 90 },
      { year: "FY2023", revenue: 885, cogs: 635, grossProfit: 250, sga: 82, operatingIncome: 35, ebitda: 100 },
    ],
    financialsNote: "Unit: USD hundred millions. Disney fiscal year ends in October. Based on Disney annual reports.",
    financialsCurrency: "USD",
    financialsUnit: "억",
  },

  governanceOverview: {
    body: "The Trian–Disney proxy war centered on board composition and CEO accountability. Trian argued that streaming losses and the stock's collapse reflected the board's failure to oversee management, and that activist board seats would restore shareholder discipline. Disney countered by proactively strengthening its board and accelerating its own reform agenda — making Peltz's intervention redundant.",
    shareholders: [
      {
        id: "trian",
        label: "Trian Fund Management",
        sub: "Nelson Peltz, lead activist",
        stake: "~1%",
        stakePct: 1.0,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "perlmutter",
        label: "Isaac Perlmutter (former Marvel chairman)",
        sub: "Public backer of Trian campaign",
        stake: "~0.5%",
        stakePct: 0.5,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "Disney's largest institutional holder; backed Iger",
        stake: "7.2%",
        stakePct: 7.2,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "Initially neutral; shifted to pro-Iger",
        stake: "4.5%",
        stakePct: 4.5,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "ssga",
        label: "State Street Global Advisors",
        sub: "Broadly neutral position",
        stake: "3.1%",
        stakePct: 3.1,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "Other minority shareholders",
        sub: "Retail and institutional mix",
        stake: "83.7%",
        stakePct: 83.7,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 12,
      independent: 11,
      affiliated: 1,
      note: "Under Iger, Disney added high-profile independent directors including James Gorman (outgoing Morgan Stanley CEO). Board strengthening was a core defensive tactic.",
    },
    issues: [
      {
        title: "Streaming Losses ($11B+)",
        description: "Disney+ accumulated over $11 billion in cumulative losses from its 2019 launch through 2023. The aggressive subscriber-growth-at-all-costs strategy had failed to pivot to a sustainable monetization model, forming the central pillar of Trian's attack.",
        severity: "critical",
      },
      {
        title: "Stock Collapse (-50%+ from 2021 Peak)",
        description: "Disney shares fell from a 2021 high of ~$203 to ~$83 by November 2023. Despite the post-COVID theme park recovery, streaming deficits and content cost overruns prevented any sustained stock recovery.",
        severity: "critical",
      },
      {
        title: "CEO Succession Plan Absent",
        description: "After Iger's dramatic return in 2022, no credible public CEO succession roadmap emerged. The board's failure with Chapek — its previous succession attempt — made investor confidence in future succession planning especially fragile.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Seat Nelson Peltz on the Disney Board",
        result: "lost",
        note: "Defeated at the April 3, 2024 annual shareholder meeting. Vanguard and other large institutions backed the Disney slate.",
      },
      {
        demand: "Seat Jay Rasulo (former Disney CFO) on the Board",
        result: "lost",
        note: "Defeated alongside Peltz. All Disney-nominated board candidates were re-elected.",
      },
      {
        demand: "Cost Cuts and Streaming Monetization",
        result: "partial",
        note: "Disney proactively announced $7.5B in cost cuts and a streaming profitability roadmap — implementing Trian's agenda without external board pressure.",
      },
      {
        demand: "Clarify CEO Succession Plan",
        result: "ongoing",
        note: "No formal public succession plan announced by the end of the campaign.",
      },
    ],
    stockImpact: {
      preCampaign: "$83 (November 2023)",
      peakDuringCampaign: "$120 (March 2024)",
      postCampaign: "$100 (September 2024)",
      note: "Disney shares rose from $83 to $120 during the proxy campaign, driven by undervaluation repricing and Iger's streaming turnaround announcements. After Peltz's defeat, Disney accelerated its restructuring and cost-cutting.",
    },
  },

  dealStructure: {
    body: "Trian accumulated approximately $2.5 billion in Disney shares (~1%), while ally Isaac Perlmutter held a separate ~$900 million stake (~0.5%). The proxy contest culminated in a board director vote at Disney's April 3, 2024 annual meeting. Disney responded by expanding its board with high-profile nominees and launching an extensive institutional shareholder outreach campaign.",
    preOwnership: {
      nodes: [
        { id: "trian", label: "Trian Fund Management", sub: "~1% Disney stake", type: "acquirer" },
        { id: "perlmutter", label: "Isaac Perlmutter", sub: "~0.5% Disney stake, backing Trian", type: "acquirer" },
        { id: "disney", label: "The Walt Disney Company", sub: "NYSE: DIS", type: "target" },
        { id: "iger", label: "Bob Iger (CEO)", sub: "Returned November 2022", type: "entity" },
      ],
      edges: [
        { from: "trian", to: "disney", label: "~1% stake (board seat demand)" },
        { from: "perlmutter", to: "disney", label: "~0.5% stake (campaign support)" },
        { from: "iger", to: "disney", label: "CEO defense" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "disney_post", label: "The Walt Disney Company", sub: "Existing board fully re-elected", type: "target" },
        { id: "iger_post", label: "Bob Iger (CEO)", sub: "Defense succeeded; streaming pivot accelerated", type: "entity" },
      ],
      edges: [
        { from: "iger_post", to: "disney_post", label: "CEO continues" },
      ],
    },
    keyTerms: [
      { label: "Trian stake", value: "~$2.5B (~1%)", accent: true },
      { label: "Perlmutter stake", value: "~$900M (~0.5%)", accent: false },
      { label: "Contest type", value: "Proxy Fight — board director election vote", accent: true },
      { label: "Shareholder meeting date", value: "April 3, 2024", accent: false },
      { label: "Outcome", value: "Peltz and Rasulo both defeated", accent: true },
      { label: "Disney self-reform", value: "$7.5B cost cuts + streaming profitability roadmap", accent: false },
    ],
  },

  advisors: {
    body: "Both sides assembled advisory teams on a scale rarely seen in proxy battles — including high-profile financial advisors and specialized proxy solicitation firms.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Trian (Activist Side)",
        initials: "TRI",
        bg: "bg-red-800",
        advisors: [
          { firm: "Lazard", role: "Financial advisor", roleType: "financial", note: "Disney valuation analysis and shareholder campaign support" },
          { firm: "Okapi Partners", role: "Proxy solicitation", roleType: "other", note: "Specialist in minority shareholder vote solicitation" },
          { firm: "Sullivan & Cromwell", role: "Legal advisor", roleType: "legal", note: "Overall legal strategy for proxy campaign" },
        ],
      },
      {
        side: "target",
        sideLabel: "Disney (Defense Side)",
        initials: "DIS",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial advisor", roleType: "financial", note: "Disney board defense strategy and investor relations" },
          { firm: "Innisfree M&A", role: "Proxy solicitation", roleType: "other", note: "Institutional shareholder vote solicitation and persuasion" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "Legal advisor", roleType: "legal", note: "Proxy defense legal strategy" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting and may differ from actual contractual arrangements.",
  },

  valuation: {
    body: "Trian commissioned an independent valuation arguing Disney's intrinsic value was $180–$200 per share — roughly double where the stock was trading — once streaming losses were eliminated and cost discipline restored. The core thesis was that the Theme Parks business (with ~30% EBITDA margins) was massively obscured by streaming deficits.",
    rows: [
      { item: "Disney stock price (campaign launch, Nov 2023)", val: "$83", note: "At time of Trian's Schedule 13D disclosure", accent: false },
      { item: "Disney stock price (2021 peak)", val: "~$203", note: "Pandemic streaming-era high", accent: false },
      { item: "Trian estimated intrinsic value", val: "$180–$200", note: "Assuming streaming losses eliminated and cost cuts implemented", accent: true },
      { item: "Disney EV/EBITDA (FY2023)", val: "~16–18x", note: "At a premium to media sector average", accent: false },
      { item: "Cumulative streaming losses (2019–2023)", val: "$11B+", note: "Core quantitative basis for Trian's attack", accent: true },
      { item: "Disney self-announced cost cuts", val: "$7.5B", note: "Announced during the campaign as self-directed reform", accent: true },
    ],
    disclaimer: "Valuation data based on public filings, Trian published materials, and media reporting.",
  },

  rationale: {
    buyer: {
      title: "Why Trian Attacked Disney",
      initials: "TRI",
      bg: "bg-red-800",
      points: [
        "End streaming losses — $11B+ in Disney+ deficits reflects strategic failure; board oversight needs to improve",
        "Cost discipline — excessive content spending and operational inefficiency have destroyed shareholder value",
        "CEO accountability — Iger's return has not produced a concrete monetization plan or succession roadmap",
        "Board independence — activist directors are needed to provide real management oversight",
        "Shareholder value recovery — a -50% stock decline represents massive losses for institutional shareholders",
      ],
    },
    seller: {
      title: "Why Disney Blocked Trian",
      initials: "DIS",
      bg: "bg-blue-700",
      points: [
        "Reform already underway — $7.5B cost cuts and streaming profitability pivot in progress; no external board intervention needed",
        "Peltz lacks entertainment expertise — Nelson Peltz excels at P&G and Heinz, but has no media or content industry background",
        "Bob Iger is the right leader — the world's most accomplished entertainment CEO is already driving change",
        "Board already strengthened — James Gorman and other distinguished independent directors have been added",
        "Content quality risk — Trian's cost-cutting agenda could damage content quality and long-term franchise value",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "Late 2024",
    body: "At Disney's April 3, 2024 shareholder meeting, both Peltz and Rasulo failed to win board seats. Disney's defense succeeded on the strength of institutional support — particularly Vanguard — and early evidence that the streaming business was approaching profitability. After the defeat, Trian sold a portion of its Disney stake. Disney continued to implement the structural reforms it had promised during the campaign.",
    overallVerdict: "Disney defense succeeded — but Trian's agenda became Disney's agenda",
    positives: [
      "Streaming reached profitability in 2024 — Trian campaign pressure was a contributing factor",
      "$7.5B cost reduction plan announced and implemented — aligned directly with Trian's demands",
      "Board strengthened with high-caliber directors — James Gorman (Morgan Stanley CEO) among additions",
      "ESPN strategic review initiated — exploring spinoff or partial sale to unlock hidden value",
      "Bob Iger's leadership reaffirmed — defense victory restored CEO authority and market confidence",
    ],
    risks: [
      "CEO succession still unclear — the leadership vacuum after Iger remains unresolved",
      "Streaming competition intensifying — Netflix, Amazon, Apple TV+ continue aggressive investment",
      "ESPN's digital transition risk — the future business model for ESPN amid cable cord-cutting is uncertain",
      "Content cost structure — heavy reliance on blockbuster IP makes sustained cost discipline difficult",
      "Trian re-attack possibility — residual stake provides platform for future campaigns if execution falters",
    ],
    editorNote: "The Trian–Disney proxy war is a textbook 'lost the vote, won the war' activism campaign. Peltz was defeated at the ballot box, but Disney implemented $7.5B in cost cuts and achieved the streaming profitability Trian demanded — without Trian ever joining the board. The campaign also put a sharp spotlight on the question of what board independence and CEO accountability actually mean in the era of streaming-era media conglomerates.",
  },

  tombstone: {
    acquirerInitials: "TRI",
    acquirerBg: "bg-red-800",
    targetInitials: "DIS",
    targetBg: "bg-blue-700",
    acquirerName: "Trian Fund Management (Nelson Peltz)",
    targetName: "The Walt Disney Company",
    dealTitle: "Proxy War: Magic Kingdom Fights Back",
    dealSize: "Trian stake ~$2.5B (~1%)",
    dealSizeUSD: "USD ~2.5B stake",
    evEbitda: "N/A",
    closeDate: "Apr 2024",
  },

  sources: [
    { id: 1, text: "Trian Fund Management — Schedule 13D Disclosure, SEC EDGAR (November 2023)" },
    { id: 2, text: "The Walt Disney Company — 2024 Proxy Statement" },
    { id: 3, text: "Wall Street Journal — Disney Proxy Fight: Nelson Peltz vs. Bob Iger (April 2024)" },
    { id: 4, text: "Financial Times — Disney defeats activist investor Nelson Peltz in proxy fight (April 2024)" },
    { id: 5, text: "Bloomberg — Isaac Perlmutter's Role in the Disney Proxy Battle (March 2024)" },
    { id: 6, text: "Disney Annual Report FY2023" },
    { id: 7, text: "ISS Proxy Advisory Report — Disney Annual Meeting 2024" },
  ],

  seo: {
    title: "Trian vs Disney Proxy War Full Analysis — Nelson Peltz vs Bob Iger",
    description: "Complete analysis of Trian Fund's 2023–2024 proxy battle against Walt Disney. $11B streaming losses, stock down 50%, board seat defeat, and Disney's celebrity-backed defense — all decoded.",
    keywords: [
      "Trian Disney proxy fight",
      "Nelson Peltz Disney board",
      "Disney proxy fight 2024",
      "Bob Iger activism defense",
      "Disney streaming losses",
      "shareholder activism media",
      "proxy contest case study",
    ],
  },

  concepts: [
    {
      term: "Proxy Fight",
      description: "A campaign in which a shareholder attempts to obtain voting proxies from other shareholders to elect dissident directors or defeat management proposals. Board seat elections are the primary mechanism.",
    },
    {
      term: "Lose the Vote, Win the War",
      description: "An activism strategy in which the activist loses the formal shareholder vote but succeeds in pressuring management to adopt the campaign's demands as self-directed reform. Trian–Disney is a defining example.",
    },
    {
      term: "Streaming Economics",
      description: "The business model of streaming services, which requires massive upfront content investment in exchange for recurring subscription or advertising revenue. Reaching the breakeven point demands extraordinary capital — and patience from investors.",
    },
  ],

  faq: [
    {
      q: "Why did Nelson Peltz target Disney?",
      a: "Trian argued that Disney+'s $11B+ in cumulative losses, a 50%+ stock decline from the 2021 peak, and the absence of a CEO succession plan demonstrated that the board had failed to hold management accountable. Peltz and Jay Rasulo sought board seats to provide the external oversight he believed was lacking.",
    },
    {
      q: "How did Disney win the proxy fight?",
      a: "CEO Bob Iger secured endorsements from George Lucas, Oprah Winfrey, and Jamie Dimon, lending the defense an unusual cultural authority. Simultaneously, Disney announced $7.5B in cost cuts and a credible streaming profitability roadmap — neutralizing Trian's core arguments. Vanguard's 7.2% stake voting with Disney proved decisive.",
    },
    {
      q: "What happened to Trian after the defeat?",
      a: "Following the shareholder meeting defeat, Trian sold a portion of its Disney stake. However, because Disney implemented the cost cuts and streaming turnaround Trian had demanded, many analysts labeled the campaign a 'lost vote, won war' outcome — Trian's agenda became Disney's strategy.",
    },
    {
      q: "What role did Isaac Perlmutter play?",
      a: "Perlmutter, the former Marvel Entertainment chairman who had been let go in Disney layoffs, held approximately $900 million of Disney shares and publicly backed Trian's campaign. His insider knowledge of Disney's content operations and his significant stake gave Trian's criticism added credibility with shareholders.",
    },
  ],
};

export default deal;
