import type { DealData } from "@/lib/deal-data";

const koreaZincMbk: DealData = {
  // ── Meta ──────────────────────────────────────────────────────
  slug: "korea-zinc-mbk",
  title: "Korea Zinc Control Battle — MBK Partners & Young Poong vs. Yun-bum Choi",
  subtitle:
    "Korea's Largest Hostile Tender Offer · Stock +217% in Six Weeks · PE vs. Incumbent Family CEO",
  category: "control",
  industry: "Non-ferrous Metals / Materials",
  country: "KR",
  announcedAt: "2024-09-13",
  closedAt: "2025-03-28",
  announcedDisplay: "September 2024",
  closedDisplay: "March 2025",
  readingMinutes: 14,
  tags: [
    "tender-offer",
    "control-contest",
    "hostile-takeover",
    "treasury-share-buyback",
    "private-equity",
    "non-ferrous-metals",
    "korea",
  ],
  excerpt:
    "In 2024, MBK Partners and Young Poong launched Korea's largest-ever hostile tender offer battle for Korea Zinc. The stock tripled from ₩515,000 to ₩1,630,000 in six weeks as competing bids collided — a blueprint for PE-driven control contests in Asia.",

  // ── Entity Icons ──────────────────────────────────────────────
  acquirer: { initials: "MBK", bg: "bg-gray-900", label: "MBK Partners · Young Poong (hostile bidders)" },
  target: { initials: "KZ", bg: "bg-amber-600", label: "Korea Zinc Co., Ltd. (defended by Chairman Yun-bum Choi)" },

  // ── Background ────────────────────────────────────────────────
  background: [
    "Korea Zinc Co., Ltd. was co-founded in 1974 by two families — the Jang family (controlling Young Poong Group) and the Choi family (led by Chairman Yun-bum Choi) — following an agreement between their patriarch founders. For nearly 50 years, this dual-family governance arrangement held: Young Poong, as the largest shareholder at ~25%, deferred to the Choi family's operational management. Korea Zinc grew into the world's largest zinc and lead smelter, commanding approximately 22% of global zinc smelting capacity across facilities in Korea, Australia (Sun Metals), and Canada (Nyrstar participation).",
    "In mid-2024, tensions between the Jang and Choi families came to a head. Young Poong Group, facing financial pressure from a prolonged downturn in its own zinc mining operations, sought a stronger say in Korea Zinc's capital allocation and strategic direction. Unable to resolve differences in private negotiations, Young Poong turned to MBK Partners — Korea's largest private equity fund, managing approximately $25 billion in AUM — as a partner to launch a coordinated hostile campaign.",
    "On September 13, 2024, MBK Partners and Young Poong jointly announced a public tender offer (공개매수) at ₩660,000 per share, targeting 14.61% of Korea Zinc's outstanding shares. The offer price represented a 28% premium to the previous close of ₩515,000. The stated goal was to accumulate enough shares, combined with Young Poong's existing 25.42% stake, to secure a majority at the Korea Zinc board.",
    "Korea Zinc's response was swift and aggressive. Within ten days, the company's board authorized a defensive treasury share buyback (자사주 매입) at ₩830,000/share — 26% above MBK's offer — targeting approximately 20% of shares outstanding. The simultaneous existence of two competing public bids at different prices created an extraordinary arbitrage pressure in the market, driving Korea Zinc's stock far above either bid price. The share price crossed ₩1,000,000 on September 24 and reached an intraday peak of ₩1,630,000 on October 4 — a 217% increase in less than three weeks.",
  ],

  // ── Deal Summary ──────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~₩2.4 trillion (MBK+Young Poong tender offer)",
    acquirerName: "MBK Partners · Young Poong",
    targetName: "Korea Zinc Co., Ltd.",
    announcedDisplay: "September 2024",
    closedDisplay: "March 2025",
    country: "South Korea",
  },

  // ── Executive Summary ─────────────────────────────────────────
  executiveSummary: [
    "Korea's largest-ever hostile tender offer: MBK Partners + Young Poong bid ₩660,000/share (~₩2.4 trillion total) to acquire a 14.61% additional stake in Korea Zinc.",
    "Defensive counter-buyback: Korea Zinc board authorized a treasury share buyback at ₩830,000/share — 26% above the hostile offer — triggering a bidding premium squeeze.",
    "Stock tripled: from ₩515,000 to an intraday high of ₩1,630,000 (+217%) within six weeks as the market priced a control premium above both bids.",
    "MBK/Young Poong acquired 14.17% through the tender offer but failed at the EGM: all four board nominee candidates rejected at the January 2025 extraordinary general meeting.",
    "Court rulings confirmed management: Seoul court blocked Korea Zinc's treasury share cancellation, then dismissed MBK's final injunction in March 2025, confirming Choi's board.",
    "NPS swing vote: the National Pension Service's (~8.68%) partial support for incumbent directors was the decisive margin at the EGM.",
  ],

  // ── Industry Overview ─────────────────────────────────────────
  industryOverview: {
    body: "Korea Zinc is the anchor of the global zinc supply chain. Zinc is the fourth-most-used metal globally, critical for galvanized steel (construction, automotive), brass alloys, and industrial batteries. Korea Zinc's Onsan smelter complex in South Korea is the world's single largest zinc and lead smelting facility, processing ore concentrates from Australia, Peru, and other sources. The company also produces silver, gold, indium, bismuth, and other by-product metals — a diversified revenue profile that insulates margins from single-commodity swings. With approximately 22% of global zinc smelting capacity, Korea Zinc has pricing influence across the entire zinc value chain.",
    metrics: [
      { label: "Global Zinc Smelting Share", value: "~22%", sub: "Korea Zinc + subsidiaries" },
      { label: "Korea Zinc Revenue (FY2023)", value: "~₩9.8 trillion", sub: "consolidated" },
      { label: "Operating Profit Margin", value: "~6–8%", sub: "FY2021–2023 average" },
      { label: "Market Cap (pre-campaign)", value: "~₩12 trillion", sub: "based on ₩515,000/share" },
    ],
    subBody:
      "The non-ferrous metals sector in Asia is characterized by state-linked ownership, complex multi-generational family governance, and high strategic sensitivity — governments view large smelters as critical industrial infrastructure. This context explains why Korea Zinc's control battle attracted unusual public and regulatory scrutiny: critics of MBK's bid argued that a financial buyer could load the company with debt, strip assets, or sell Korea Zinc's technology advantages to foreign interests after gaining control.",
    players: [
      { name: "Korea Zinc Co., Ltd.", role: "World #1 zinc/lead smelter, ~22% global capacity" },
      { name: "Young Poong Group (Jang family)", role: "Korea Zinc's largest shareholder at 25.42%; zinc miner" },
      { name: "MBK Partners", role: "Korea's largest PE fund, ~$25B AUM; hostile bidder" },
      { name: "Chairman Yun-bum Choi", role: "Korea Zinc CEO, defending management control" },
      { name: "National Pension Service (NPS)", role: "~8.68% stake; decisive swing voter at EGM" },
    ],
  },

  // ── Company Overview ──────────────────────────────────────────
  companyOverview: {
    targetName: "Korea Zinc Co., Ltd.",
    body: "Korea Zinc (고려아연, KRX: 010130) was founded in 1974 through a co-investment between the Young Poong Group (Jang family) and the Korea Zinc founders (Choi family). Headquartered in Seoul with primary smelting operations at Onsan, North Gyeongsang Province, it is listed on the Korea Stock Exchange and is a member of the KOSPI 200 index. The company processes zinc, lead, silver, gold, and specialty metals across its Korean operations and international subsidiaries including Sun Metals (Australia) and stakes in various overseas mining assets. Revenue exceeded ₩9.8 trillion in FY2023 on a consolidated basis. Korea Zinc's balance sheet carries minimal net debt, reflecting decades of conservative financial management under the Choi family — a sharp contrast to the leveraged capital structure critics feared MBK would impose.",
    metrics: [
      { label: "Revenue (FY2023)", value: "~₩9.8 trillion", sub: "consolidated" },
      { label: "Global Zinc Smelting Capacity", value: "~22%", sub: "world's largest single operator" },
      { label: "Employees", value: "~3,500", sub: "Korea operations; ~5,000 worldwide" },
      { label: "Market Cap (Sep 12, 2024)", value: "~₩12 trillion", sub: "₩515,000/share, pre-announcement" },
      { label: "Net Debt Position", value: "Near zero / net cash", sub: "FY2023 balance sheet" },
      { label: "Founded", value: "1974", sub: "Young Poong + Choi family co-investment" },
    ],
    financials: [
      { year: "FY2021", revenue: 8420, cogs: 7350, grossProfit: 1070, sga: 420, operatingIncome: 650, ebitda: 820 },
      { year: "FY2022", revenue: 9650, cogs: 8380, grossProfit: 1270, sga: 460, operatingIncome: 810, ebitda: 1020 },
      { year: "FY2023", revenue: 9820, cogs: 8530, grossProfit: 1290, sga: 480, operatingIncome: 810, ebitda: 1040 },
    ],
    financialsNote:
      "Unit: ₩ billions (십억 원) | K-IFRS consolidated | Source: Korea Zinc annual reports, DART disclosures. EBITDA estimated; FY2024 not available at time of writing.",
    financialsCurrency: "₩",
    financialsUnit: "bn",
  },

  // ── Governance Overview ────────────────────────────────────────
  governanceOverview: {
    body: "Korea Zinc was co-founded in 1949 by the Jang (Young Poong) and Choi (Korea Zinc) families, sharing the board for 70 years in a unique dual-family governance structure. In September 2024, MBK Partners — Korea's largest private equity fund — sided with Young Poong to launch a hostile tender offer, shattering that arrangement. Chairman Yun-bum Choi deployed a three-pronged defense: a counter-buyback at a 26% premium to MBK's offer, an emergency injunction filing, and a rallying of employee and foreign shareholders.",
    shareholders: [
      {
        id: "yp",
        label: "Young Poong Group",
        sub: "Jang family",
        stake: "25.42%",
        stakePct: 25.42,
        type: "controlling",
        alignment: "anti",
      },
      {
        id: "mbk",
        label: "MBK Partners",
        sub: "post-tender acquisition",
        stake: "14.17%",
        stakePct: 14.17,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "choi",
        label: "Chairman Choi & Allies",
        sub: "management-friendly",
        stake: "11.73%",
        stakePct: 11.73,
        type: "management",
        alignment: "pro",
      },
      {
        id: "esop",
        label: "ESOP",
        sub: "employee shareholders",
        stake: "2.89%",
        stakePct: 2.89,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "nps",
        label: "NPS (National Pension)",
        sub: "swing vote",
        stake: "8.68%",
        stakePct: 8.68,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "others",
        label: "Foreign & Public",
        sub: "retail and foreign",
        stake: "37.11%",
        stakePct: 37.11,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 9,
      independent: 5,
      affiliated: 4,
      note: "At the EGM (Jan 2025), Choi's 5 director nominees passed; MBK's 4 nominees rejected",
    },
    issues: [
      {
        title: "Collapse of 70-Year Co-Governance",
        description:
          "Korea Zinc's unique dual-family co-governance structure (Jang + Choi) broke down when MBK sided with Young Poong against the incumbent CEO — a direct conflict between largest shareholder and management.",
        severity: "critical",
      },
      {
        title: "Treasury Share Cancellation Injunction",
        description:
          "Korea Zinc sought to cancel repurchased treasury shares to dilute MBK/Young Poong's ownership. The Seoul court granted an injunction blocking cancellation, freezing the dilution strategy mid-execution.",
        severity: "critical",
      },
      {
        title: "PE Acquisition of Strategic Asset",
        description:
          "Critics warned that MBK — a financial buyer — could sell off Korea Zinc's assets or load it with debt after gaining control of the world's #1 zinc/lead smelter.",
        severity: "high",
      },
      {
        title: "Tender Offer Procedural Dispute",
        description:
          "Regulators flagged potential irregularities in Korea Zinc's own buyback prospectus. Both sides filed criminal complaints against each other's advisors, adding legal uncertainty.",
        severity: "high",
      },
      {
        title: "NPS as Swing Voter",
        description:
          "With 8.68%, the state pension fund's vote at the EGM was decisive. Its eventual partial support for the incumbent board proved the margin of victory.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "MBK+Young Poong: Acquire majority board control via tender offer",
        result: "partial",
        note: "Acquired 14.17% stake but all director nominees rejected at EGM",
      },
      {
        demand: "Korea Zinc: Counter-buyback to dilute hostile stake",
        result: "partial",
        note: "Buyback completed; share cancellation blocked by court injunction",
      },
      {
        demand: "MBK+Young Poong: Replace board at EGM (Jan 2025)",
        result: "lost",
        note: "All 4 MBK-backed director nominees defeated",
      },
      {
        demand: "Korea Zinc: Secure NPS vote for board defense",
        result: "partial",
        note: "NPS partially supported incumbent directors, tilting EGM result",
      },
      {
        demand: "Korea Zinc: Court confirmation of management legitimacy",
        result: "won",
        note: "Court dismissed MBK's final injunction; incumbent leadership confirmed Mar 2025",
      },
    ],
    stockImpact: {
      preCampaign: "₩515,000 (Sep 12, 2024)",
      peakDuringCampaign: "₩1,630,000 (Oct 4, 2024)",
      postCampaign: "₩640,000 (Mar 2025)",
      note: "Dueling bids — MBK at ₩660K, Korea Zinc at ₩830K — created a bidding premium squeeze, pushing the market price 2.5× above either offer price within weeks. The stock gave back most gains once the EGM resolved control uncertainty.",
    },
  },

  // ── Deal Structure ────────────────────────────────────────────
  dealStructure: {
    body: "The battle involved two simultaneous public bids in opposite directions. MBK Partners and Young Poong launched a hostile tender offer at ₩660,000/share targeting ~14.61% of Korea Zinc's shares (total consideration ~₩2.4 trillion). Korea Zinc retaliated with a company-level defensive buyback at ₩830,000/share targeting ~20% of shares — a 26% premium over the hostile offer. MBK ultimately acquired approximately 14.17% through its tender offer. Korea Zinc completed its buyback but was blocked by court injunction from cancelling the treasury shares (which would have diluted MBK/Young Poong from ~40% combined to a much smaller effective stake). The control resolution came at the January 2025 EGM and was finally confirmed by court ruling in March 2025.",
    preOwnership: {
      nodes: [
        {
          id: "yp_pre",
          label: "Young Poong Group",
          sub: "Jang family, ~25.42%",
          type: "acquirer",
        },
        {
          id: "choi_pre",
          label: "Chairman Choi Yun-bum",
          sub: "Management & allies, ~11.73%",
          type: "target",
        },
        {
          id: "kz_pre",
          label: "Korea Zinc Co., Ltd.",
          sub: "World #1 zinc smelter",
          type: "target",
        },
        {
          id: "nps_pre",
          label: "NPS",
          sub: "~8.68%, swing voter",
          type: "entity",
        },
        {
          id: "public_pre",
          label: "Foreign & Public Investors",
          sub: "~47.28%",
          type: "public",
        },
      ],
      edges: [
        { from: "yp_pre", to: "kz_pre", label: "25.42%" },
        { from: "choi_pre", to: "kz_pre", label: "11.73% (management)" },
        { from: "nps_pre", to: "kz_pre", label: "8.68%" },
        { from: "public_pre", to: "kz_pre", label: "47.28%" },
      ],
    },
    postOwnership: {
      nodes: [
        {
          id: "yp_post",
          label: "Young Poong Group",
          sub: "Jang family",
          type: "acquirer",
        },
        {
          id: "mbk_post",
          label: "MBK Partners",
          sub: "14.17% post-tender",
          type: "fund",
        },
        {
          id: "choi_post",
          label: "Chairman Choi & ESOP",
          sub: "Management coalition, ~14.62%",
          type: "target",
        },
        {
          id: "kz_post",
          label: "Korea Zinc Co., Ltd.",
          sub: "Incumbent management confirmed",
          type: "target",
        },
        {
          id: "treasury",
          label: "Treasury Shares",
          sub: "Frozen by court injunction",
          type: "entity",
        },
      ],
      edges: [
        { from: "yp_post", to: "kz_post", label: "25.42%" },
        { from: "mbk_post", to: "kz_post", label: "14.17% (hostile)" },
        { from: "choi_post", to: "kz_post", label: "~14.62% (management wins EGM)" },
        { from: "treasury", to: "kz_post", label: "Cancellation blocked" },
      ],
    },
    keyTerms: [
      { label: "Total Tender Offer Size", value: "~₩2.4 trillion" },
      { label: "MBK Offer Price", value: "₩660,000/share", accent: true },
      { label: "Korea Zinc Buyback Price", value: "₩830,000/share", accent: true },
      { label: "Stock Peak", value: "₩1,630,000" },
      { label: "Stock Gain (6 weeks)", value: "+217%" },
      { label: "MBK Final Stake", value: "14.17%" },
    ],
  },

  // ── Advisors ──────────────────────────────────────────────────
  advisors: {
    body: "Both sides deployed elite Korean and international financial and legal advisors. The contest drew Korea's most prominent M&A advisory teams given its landmark scale and public profile.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "MBK Partners + Young Poong (hostile bidders)",
        initials: "MBK",
        bg: "bg-gray-900",
        advisors: [
          {
            firm: "JP Morgan",
            role: "Financial advisor",
            roleType: "financial",
            note: "Lead financial advisor to MBK Partners for the hostile tender offer. Structured the ₩2.4 trillion bid and advised on deal mechanics, offer pricing, and regulatory filings.",
          },
          {
            firm: "Citigroup Global Markets",
            role: "Financial advisor",
            roleType: "financial",
            note: "Co-financial advisor to MBK Partners. Provided market analysis, shareholder outreach support, and global capital markets perspective on the tender offer campaign.",
          },
          {
            firm: "Kim & Chang",
            role: "Legal advisor",
            roleType: "legal",
            note: "Korea's largest law firm, acting as lead legal counsel to MBK Partners. Managed FSCMA tender offer compliance, injunction filings, and the EGM proxy strategy.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Korea Zinc / Chairman Choi (incumbent management)",
        initials: "KZ",
        bg: "bg-amber-600",
        advisors: [
          {
            firm: "Samsung Securities",
            role: "Financial advisor",
            roleType: "financial",
            note: "Lead financial advisor to Korea Zinc for the defensive treasury share buyback. Structured the ₩830,000/share counter-bid and advised on capital structure defense.",
          },
          {
            firm: "Credit Suisse",
            role: "Financial advisor",
            roleType: "financial",
            note: "International financial advisor to Korea Zinc. Provided cross-border perspective on hostile defense tactics and investor relations with foreign shareholders.",
          },
          {
            firm: "Bae, Kim & Lee LLC",
            role: "Legal advisor",
            roleType: "legal",
            note: "Lead legal counsel to Korea Zinc. Filed injunctions against MBK's tender offer, defended the treasury buyback structure, and led EGM proxy solicitation strategy.",
          },
        ],
      },
    ],
    disclaimer:
      "Advisor information is based on publicly available disclosures, DART filings, and press reports. Some engagements may not be fully reflected.",
  },

  // ── Valuation ─────────────────────────────────────────────────
  valuation: {
    body: "This was a control contest, not a traditional acquisition — no single 'transaction EV/EBITDA' metric applies. The most instructive valuation reference points are the competing bid prices and the market's implied control premium. MBK's ₩660,000 offer represented a ~28% premium to the pre-announcement price of ₩515,000. Korea Zinc's defensive buyback at ₩830,000 implied the board believed intrinsic value exceeded MBK's offer by at least 26%. The market's intraday peak of ₩1,630,000 — 2.47× the pre-campaign price and 2.47× MBK's offer — reflected the market pricing in a control premium for a globally dominant industrial asset with no obvious comparable.",
    rows: [
      { item: "Korea Zinc pre-campaign price", val: "₩515,000", note: "Sep 12, 2024 (day before announcement)" },
      { item: "MBK Partners tender offer price", val: "₩660,000", note: "+28.2% premium to undisturbed price", accent: true },
      { item: "Korea Zinc defensive buyback price", val: "₩830,000", note: "+61% premium to undisturbed; +25.8% above MBK", accent: true },
      { item: "Stock peak (intraday)", val: "₩1,630,000", note: "Oct 4, 2024 — +217% from pre-campaign" },
      { item: "Post-resolution price", val: "₩640,000", note: "Mar 2025 — near MBK tender offer price" },
      { item: "Implied market cap at peak", val: "~₩38 trillion", note: "Based on ~23.3M shares outstanding" },
    ],
    disclaimer:
      "Valuation references are based on public market prices and announced offer terms. This is a control contest analysis; no complete acquisition EV/EBITDA multiple is applicable.",
  },

  // ── Rationale ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Why MBK Partners and Young Poong launched the hostile bid",
      initials: "MBK",
      bg: "bg-gray-900",
      points: [
        "Strategic misalignment: Young Poong and the Choi family had growing disagreements over Korea Zinc's capital allocation — particularly on upstream mining investments and dividend policy — after nearly 50 years of co-governance.",
        "PE value creation thesis: MBK likely identified Korea Zinc as an undervalued asset relative to its global market dominance; a new board and management team could unlock higher capital returns, asset monetization, or strategic partnerships.",
        "Structural opportunity: Korea Zinc's dispersed foreign shareholder base (~47%) and the availability of a large, motivated partner (Young Poong's 25.42%) provided the foundation for a credible tender offer coalition.",
        "Governance leverage: replacing board directors at an EGM was legally achievable if the hostile coalition acquired enough shares — and Korea's FSCMA tender offer rules were well-established.",
      ],
    },
    seller: {
      title: "How Korea Zinc's Chairman Choi defended the company",
      initials: "KZ",
      bg: "bg-amber-600",
      points: [
        "Counter-buyback at premium: the ₩830,000 defensive buyback outbid MBK by 26%, directly competing for shares and signaling to the market that the board believed intrinsic value was higher than MBK's offer.",
        "Legal injunctions: Bae, Kim & Lee filed injunctions to block MBK's tender offer procedures and, separately, to preserve management's ability to cancel treasury shares as a dilution tool.",
        "Employee and ESOP mobilization: the ESOP's ~2.89% stake was actively managed to support the incumbent board, reflecting employees' concern about PE ownership and potential asset sales.",
        "NPS outreach: Korea Zinc lobbied the National Pension Service — which ultimately cast a partial vote for incumbent directors — as the decisive swing bloc in the EGM.",
        "Strategic narrative: Choi framed MBK as a financial buyer threatening a nationally strategic industrial asset, resonating with regulators, media, and foreign shareholders concerned about Korea Zinc's long-term stability.",
      ],
    },
  },

  // ── Post-Deal Assessment ───────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Korea Zinc's incumbent management survived the most expensive and dramatic hostile takeover attempt in Korean corporate history. Chairman Choi Yun-bum retained board control following the January 2025 EGM and the March 2025 court confirmation. MBK Partners and Young Poong hold a combined ~40.97% stake — the largest single bloc — but control no board seats. The governance standoff is effectively frozen: MBK has no clear exit path at attractive valuations, and Korea Zinc's management faces a permanently large hostile shareholder with incentives to disrupt. Korea Zinc's stock, having briefly tripled, settled back near MBK's original offer price by March 2025 as the control premium was unwound. The battle established several precedents: the use of defensive treasury buybacks at premium prices, the limits of share cancellation as a dilution defense under Korean law, and the decisive role of the NPS under Korea's Stewardship Code in control contests.",
    overallVerdict:
      "Incumbent management retained control; MBK holds a large blocking stake with no clear exit",
    positives: [
      "Korea Zinc's dual-family governance, while fractured, was successfully defended against a PE-led hostile takeover — setting a precedent for incumbent CEO defense under Korean law.",
      "The NPS's constructive use of its Stewardship Code voting power in a control contest (rather than an activism campaign) was a first in Korean institutional investor practice.",
      "Korea Zinc's stock reached ₩1,630,000 — an extraordinary return for shareholders who sold near the peak or tendered at ₩830,000 during the defensive buyback.",
      "The case exposed gaps in Korean M&A law around treasury share cancellation procedures and tender offer prospectus standards, prompting regulatory review.",
    ],
    risks: [
      "MBK Partners and Young Poong control ~40.97% — a formidable blocking minority that can obstruct any major strategic decision requiring a two-thirds or special majority vote at future AGMs.",
      "Korea Zinc management faces ongoing governance uncertainty: the Jang-Choi family split is unresolved, and future AGMs will be contested.",
      "MBK's PE fund lifecycle creates exit pressure — the fund will eventually need to monetize its stake, creating sustained overhang and potential for future destabilizing share sales.",
      "Korea Zinc's stock retraced from ₩1,630,000 to ~₩640,000 post-EGM; retail investors who bought near the peak sustained severe losses.",
      "The court injunction blocking treasury share cancellation leaves a large, illiquid block of treasury shares on Korea Zinc's balance sheet with unclear long-term treatment.",
    ],
    editorNote:
      "The Korea Zinc battle is the defining Korean corporate control case of the 2020s — and one of the most instructive hostile PE control contests in Asian M&A history. It combined every element of the modern control-contest playbook: a large-cap industrial target with dispersed ownership, a PE-financed hostile coalition, a premium defensive buyback, competing court injunctions, a pension fund swing vote, and a final EGM decided on the margin. MBK's financial firepower and Young Poong's existing stake were ultimately insufficient to overcome a determined incumbent CEO, a strategically aligned ESOP, and a court system that limited the most aggressive defensive tools available to management. The deal's most enduring legacy may be its demonstration that Korean corporate governance — often criticized as entrenched — is genuinely contestable when the institutional infrastructure (Stewardship Code, FSCMA tender offer rules, independent courts) functions as designed.",
  },

  // ── Tombstone ─────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "MBK",
    acquirerBg: "bg-gray-900",
    targetInitials: "KZ",
    targetBg: "bg-amber-600",
    acquirerName: "MBK Partners · Young Poong",
    targetName: "Korea Zinc Co., Ltd.",
    dealTitle: "Korea Zinc Hostile Control Contest",
    dealSize: "~₩2.4 trillion tender offer",
    dealSizeUSD: "approx. USD ~1.8B",
    evEbitda: "N/A (control contest)",
    closeDate: "Mar 2025",
  },

  // ── Timeline ──────────────────────────────────────────────────
  // (stored as deal structure keyTerms above; timeline used in body section)

  // ── Sources ───────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "MBK Partners + Young Poong joint tender offer announcement, DART Financial Supervisory Service (September 13, 2024)",
    },
    {
      id: 2,
      text: "Korea Zinc board resolution — defensive treasury share buyback at ₩830,000/share, DART (September 23, 2024)",
    },
    {
      id: 3,
      text: "Korea Zinc tender offer prospectus and buyback prospectus filings, Financial Supervisory Service DART (September–October 2024)",
    },
    {
      id: 4,
      text: "Seoul Central District Court injunction blocking Korea Zinc treasury share cancellation (October 18, 2024)",
    },
    {
      id: 5,
      text: "Korea Zinc Extraordinary General Meeting results, DART (January 23, 2025)",
    },
    {
      id: 6,
      text: "Seoul court dismissal of MBK Partners' final injunction bid (March 28, 2025)",
    },
    {
      id: 7,
      text: "Financial Supervisory Service review of Korea Zinc buyback procedural irregularities (November 2024)",
    },
    {
      id: 8,
      text: "Korea Economic Daily (한국경제), Maeil Business News (매일경제), Chosun Ilbo — Korea Zinc battle coverage (September 2024 – March 2025)",
    },
    {
      id: 9,
      text: "Korea Zinc shareholder structure disclosure, DART (September 2024)",
    },
    {
      id: 10,
      text: "NPS proxy voting disclosure, Korea Zinc EGM (January 2025)",
    },
  ],

  // ── SEO ───────────────────────────────────────────────────────
  seo: {
    title: "Korea Zinc Hostile Takeover — MBK Partners vs. Chairman Choi | Deal Story",
    description:
      "Full analysis of Korea's largest-ever hostile tender offer: MBK Partners and Young Poong's ₩2.4 trillion bid for Korea Zinc, the +217% stock surge, defensive buyback, EGM battle, and court rulings that confirmed incumbent management.",
    keywords: [
      "Korea Zinc hostile takeover",
      "MBK Partners Korea Zinc",
      "Young Poong Korea Zinc",
      "고려아연 공개매수",
      "Korea control contest",
      "hostile tender offer Korea",
      "Korea Zinc EGM 2025",
      "Korean PE hostile bid",
      "treasury share buyback defense",
      "NPS stewardship code control contest",
      "non-ferrous metals M&A Asia",
      "Yun-bum Choi Korea Zinc",
    ],
  },

  // ── Key Concepts ──────────────────────────────────────────────
  concepts: [
    {
      term: "Hostile Tender Offer (공개매수)",
      description:
        "A publicly announced offer to purchase shares directly from shareholders at a premium, bypassing the target's board — the central mechanism of MBK's attack on Korea Zinc.",
    },
    {
      term: "Defensive Treasury Share Buyback",
      description:
        "A company repurchasing its own shares at a premium to the hostile bid price, simultaneously competing for shares and signaling intrinsic value. Korea Zinc's ₩830,000 buyback was the most expensive defensive buyback in Korean history.",
    },
    {
      term: "Bid Premium Squeeze",
      description:
        "When two competing bids at different prices simultaneously target shares, the market price often rises above both bids as arbitrageurs price in the probability of a further overbid — the mechanism that drove Korea Zinc's stock to ₩1,630,000.",
    },
    {
      term: "Treasury Share Cancellation",
      description:
        "A defense tactic where repurchased shares are cancelled, reducing the total share count and thereby diluting a hostile acquirer's percentage ownership. Korea Zinc's attempt was blocked by court injunction.",
    },
    {
      term: "Extraordinary General Meeting (EGM)",
      description:
        "A shareholder meeting called outside the annual cycle, in this case to vote on board composition — the decisive battleground where Choi's nominees prevailed over MBK's director candidates.",
    },
    {
      term: "Stewardship Code (스튜어드십 코드)",
      description:
        "Korea's 2016 investor responsibility code requiring institutional investors, including the NPS, to exercise voting rights in the best long-term interest of beneficiaries — its use in a PE-driven control contest set new precedent.",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────────
  faq: [
    {
      q: "Why did MBK Partners target Korea Zinc?",
      a: "MBK identified a rare combination: a globally dominant industrial asset (world #1 zinc smelter) with a fractured governance structure (the Jang-Choi dual-family arrangement was under stress) and a dispersed float (~47% foreign and public shareholders). Young Poong's existing 25.42% provided a credible coalition base. MBK's thesis was that a new board could unlock capital returns and operational improvements that the incumbent Choi-led management was failing to pursue — potentially delivering substantial PE returns on a deal structured at a modest 28% premium.",
    },
    {
      q: "Why did Korea Zinc's stock price triple so dramatically?",
      a: "Two simultaneous competing bids created a classic bid premium squeeze. MBK bid ₩660,000 for shares; Korea Zinc immediately countered at ₩830,000. The market, pricing in the probability that further overbids would occur or that the outcome was genuinely uncertain, pushed the stock to ₩1,630,000 — nearly 2.5 times either bid price. This is a well-documented phenomenon in contested M&A: when two credible parties compete for the same shares, the market aggregates the full control premium implied by the contest, which often exceeds either party's stated offer.",
    },
    {
      q: "Why was the court injunction blocking treasury share cancellation so significant?",
      a: "Korea Zinc's most powerful dilution weapon was cancelling its repurchased treasury shares. If MBK+Young Poong held ~40% of outstanding shares, but the total share count shrank by 20% through cancellation, their percentage ownership would paradoxically rise. The defense was to use bought-back shares not to dilute opponents but to reduce the float they could accumulate. The Seoul court's injunction blocked this, freezing the treasury shares and leaving MBK/Young Poong's ~40% stake intact — which became the critical legal inflection point in the campaign.",
    },
    {
      q: "What role did the NPS play in the outcome?",
      a: "The National Pension Service held approximately 8.68% of Korea Zinc shares, making it the decisive swing bloc. Neither coalition had a guaranteed majority without NPS support. The NPS — operating under Korea's Stewardship Code — ultimately voted to partially support incumbent directors while rejecting MBK's nominees. This was the margin of victory at the January 2025 EGM. The NPS's decision was significant because it represented the Stewardship Code being applied in a high-stakes PE-driven control contest for the first time, not merely in a conventional activism campaign.",
    },
    {
      q: "What happens to MBK Partners' 14.17% stake now?",
      a: "MBK is in a structurally awkward position. It holds ~14.17%, alongside Young Poong's 25.42%, giving the coalition ~40% — large enough to block special resolutions but insufficient to control the board after the EGM defeat. As a PE fund, MBK has finite fund life and will eventually need to exit. Options include: selling to a strategic buyer (requires Choi's cooperation), selling on the open market (likely depresses the price), or continuing to agitate at future AGMs in hopes of eventually installing board representation. None of these exits is clearly attractive, making MBK's position a classic 'prisoner's dilemma' stake.",
    },
    {
      q: "Is Korea Zinc actually a vulnerable target for future hostile bids?",
      a: "The ownership structure remains contested. With MBK+Young Poong at ~40.97% and the Choi faction at ~46.11% (including treasury shares), any change in NPS policy, a large block sale, or a future AGM could shift the balance. Korea Zinc is unlikely to face another imminent hostile bid — the market now understands the legal, regulatory, and political barriers. However, MBK's permanent presence on the register ensures that Korea Zinc's strategic decisions will face ongoing scrutiny at every AGM for the foreseeable future.",
    },
  ],

  // ── Body (rich HTML article) ──────────────────────────────────
  body: `
<h2>1. Deal Snapshot</h2>
<p>On September 13, 2024, Korea woke up to an announcement that rewrote the rulebook for hostile takeovers in Asia. MBK Partners — the country's largest private equity fund — and Young Poong Group, the largest shareholder of Korea Zinc Co., Ltd., jointly disclosed a public tender offer at ₩660,000 per share. The target: a 14.61% additional stake in Korea Zinc, the world's single largest zinc and lead smelter. Total consideration: approximately ₩2.4 trillion ($1.8 billion). The explicit goal: acquiring enough shares, combined with Young Poong's existing 25.42%, to seize control of Korea Zinc's nine-member board.</p>
<p>What followed was six weeks of financial theater unlike anything in Korean M&A history. Within ten days, Korea Zinc's own board launched a defensive buyback at ₩830,000 — 26% above MBK's offer — creating two competing public bids simultaneously targeting the same shares. The stock, which had closed at ₩515,000 the day before the announcement, crossed ₩1,000,000 by September 24 and hit an intraday peak of ₩1,630,000 on October 4 — a 217% gain in less than three weeks. Korea Zinc briefly became one of the ten most valuable companies in Korea by market capitalization.</p>
<p>The outcome, settled by court ruling on March 28, 2025, confirmed Chairman Yun-bum Choi and his management team in control. But MBK Partners and Young Poong hold a combined ~40.97% stake — the largest single bloc on the register — with no board seats and no obvious exit. The battle is over; the standoff is permanent.</p>

<h2>2. Background: 70 Years of Co-Governance</h2>
<p>Korea Zinc was founded in 1974 through an alliance between two families: the Jang family (controlling Young Poong Group, a zinc mining and processing conglomerate) and the founders of Korea Zinc, whose leadership eventually passed to Chairman Yun-bum Choi. For nearly 50 years, this dual-family arrangement worked because it was mutually beneficial. Young Poong provided ore supply and upstream mining expertise; the Choi-led management provided world-class smelting operations. The arrangement was governed informally — no formal shareholder agreement codified the balance of power, but norms held.</p>
<p>By the early 2020s, those norms were fraying. Young Poong Group faced financial pressure from a prolonged downturn in its own Korean zinc mining operations, and its management sought greater influence over Korea Zinc's capital allocation, dividend policy, and strategic direction — including decisions about overseas expansion and technology investment. The Choi side, confident in Korea Zinc's operational dominance and balance sheet strength, resisted what it saw as encroachment. Private negotiations failed to resolve the impasse.</p>
<p>Into this vacuum stepped MBK Partners. Founded by Michael ByungJu Kim (a Goldman Sachs veteran), MBK manages approximately $25 billion in AUM across North Asia and is best known in Korea for its acquisition of Homeplus (Tesco Korea) in 2015 and its investments in ING Life Korea (now Orange Life) and Coway. For MBK, Korea Zinc represented an extraordinary opportunity: a globally dominant industrial asset, structurally undervalued, with a fractured governance structure and a motivated coalition partner in Young Poong.</p>

<h2>3. MBK Partners & Young Poong's Offensive Strategy</h2>
<p>The MBK-Young Poong offensive was designed as a three-stage campaign. Stage one was the tender offer: acquire ~14.61% through the public market at a 28% premium, bringing the coalition's combined stake to approximately 40% — theoretically enough to control an AGM or EGM if the 8.68% NPS stake could be swayed.</p>
<p>Stage two was the EGM: with ~40% in hand, call an extraordinary general meeting and propose replacing the board. Under Korean corporate law (Commercial Act, Article 363), a shareholder holding 3% or more can demand a special meeting. With 40%, MBK+Young Poong could table director proposals with confidence of having the largest single voting bloc.</p>
<p>Stage three was board control: once board directors were replaced, the new board could set strategic direction — potentially opening the door to asset monetization, leveraged recapitalization, or an eventual IPO restructuring that would allow MBK to exit at a profit.</p>
<p>The tender offer mechanics were clean. Under Korea's Financial Investment Services and Capital Markets Act (FSCMA, 자본시장법), any acquisition of 5% or more of a listed company through a tender offer requires a formal prospectus, a minimum 20-business-day acceptance period, and equal treatment of all tendering shareholders. MBK and Young Poong filed fully compliant documentation and secured JP Morgan and Citigroup as financial advisors and Kim & Chang as legal counsel.</p>
<p>The financial logic was compelling. Korea Zinc's stock had traded in a ₩400,000–₩550,000 range for most of 2023–2024. At ₩515,000, the company was valued at roughly 12× EBITDA — not cheap by industrial standards, but arguably low for an irreplaceable global infrastructure asset with near-zero net debt, strong free cash flow, and a dominant position in a structurally constrained market (new zinc smelters are not being built in developed markets due to environmental opposition).</p>

<h2>4. Korea Zinc's Three-Pronged Defense</h2>
<p>Korea Zinc's response, orchestrated by Chairman Choi Yun-bum and advised by Samsung Securities and Bae, Kim & Lee, was three-pronged.</p>
<p><strong>Prong one: the counter-buyback.</strong> On September 23, 2024, Korea Zinc's board authorized a treasury share buyback at ₩830,000/share, targeting approximately 20% of outstanding shares. The price — 26% above MBK's offer — was explicitly designed to outcompete MBK for available shares. Any shareholder offered the choice between ₩660,000 and ₩830,000 had an obvious preference. The buyback was also a signal: the board believed intrinsic value exceeded ₩830,000, and it was willing to commit capital to prove it.</p>
<p><strong>Prong two: the legal offensive.</strong> Korea Zinc's lawyers filed multiple court applications simultaneously: seeking to block MBK's tender offer on procedural grounds; and separately preparing to cancel the treasury shares once acquired, which would have diluted MBK+Young Poong's combined stake from ~40% to a much smaller effective percentage. The Seoul Central District Court became the critical battlefield — rulings from this court would define the limits of both offensive and defensive tactics.</p>
<p><strong>Prong three: coalition building.</strong> Chairman Choi worked to mobilize Korea Zinc's employee shareholders (ESOP, ~2.89%) and to lobby the National Pension Service. The ESOP was a natural ally: employees understood that a PE takeover by MBK could result in the restructuring and cost-cutting typical of financially-driven ownership. For the NPS — operating under Korea's 2016 Stewardship Code — the question was more nuanced: was PE control in the long-term interest of its beneficiaries, or was stable incumbent management preferable?</p>

<h2>5. Why the Stock Tripled: The Bid Premium Squeeze</h2>
<p>The mechanics behind Korea Zinc's extraordinary stock price surge are a masterclass in tender offer arbitrage. When two competing bids exist simultaneously — MBK at ₩660,000 and Korea Zinc at ₩830,000 — the market does not simply price the stock at the higher bid. Instead, it prices in several additional factors.</p>
<p>First, shareholders must decide which offer to accept, and many rational players will wait for the higher of the two (₩830,000). This creates scarcity: both sides are competing for the same finite pool of shares from the remaining ~50% float. Second, the market incorporates the probability that one or both sides will raise their bids in response to competitive pressure — a "bid escalation premium." Third, sophisticated arbitrageurs enter the stock specifically to profit from the spread between the current market price and the expected final outcome, amplifying price momentum. Fourth, for a company like Korea Zinc — with genuine global dominance and a strong balance sheet — the market can reasonably argue that the intrinsic value exceeds either offer price.</p>
<p>All four factors aligned in October 2024. The result was a market price that soared to ₩1,630,000 — 2.47× MBK's offer and 1.96× Korea Zinc's counter-bid. At the peak, the market was implicitly pricing a full acquisition at a premium substantially above either competing offer. The stock's subsequent retreat to ~₩640,000 after the EGM confirmed management and eliminated the control premium is textbook: once the outcome is resolved, the bid premium evaporates.</p>

<h2>6. The EGM Battle & Court Rulings</h2>
<p>MBK's tender offer closed on October 14, 2024, having successfully acquired approximately 14.17% of Korea Zinc's shares. Combined with Young Poong's 25.42%, the hostile coalition controlled roughly 40.97% of the company — the largest single bloc. But a bloc and a board are not the same thing.</p>
<p>On October 18, 2024, the Seoul Central District Court issued the pivotal injunction of the campaign: blocking Korea Zinc from cancelling its treasury shares. This ruling was devastating to Korea Zinc's dilution defense. Without the ability to cancel treasury shares, Korea Zinc could not reduce MBK+Young Poong's effective percentage ownership. The court found that unilateral share cancellation without EGM approval would unfairly disadvantage other shareholders — a ruling that reflected Korea's evolving jurisprudence on defensive M&A tactics.</p>
<p>The extraordinary general meeting was held on January 23, 2025. MBK and Young Poong proposed four director nominees; Chairman Choi's management slate proposed five. The vote was close but decisive. The NPS, holding 8.68% and effectively the swing voter, cast partial support for Choi's nominees while rejecting MBK's candidates. When the votes were counted, all five Choi-backed directors were elected; all four MBK nominees were defeated.</p>
<p>MBK's final legal challenge — an injunction seeking to overturn the EGM result — was dismissed by the Seoul court on March 28, 2025. Incumbent management was confirmed. The battle was over.</p>

<h2>7. Lessons & Investment Takeaways</h2>
<p><strong>For PE funds targeting Asian industrial assets:</strong> Korea Zinc demonstrated that a large-cap control contest in Korea requires more than financial firepower and a willing coalition partner. Cultural legitimacy, employee relations, regulatory relationships, and the NPS's Stewardship Code vote are all potential veto points. MBK's framing — a financial buyer seeking to "unlock value" — was weaponized by Choi as evidence of asset-stripping risk. Future PE-driven control bids in Korea will need a more convincing operational narrative.</p>
<p><strong>For incumbent managements:</strong> The defensive buyback at ₩830,000 was a sophisticated and ultimately successful gambit — but it required courage to authorize, and it left a frozen block of treasury shares as a long-term balance sheet overhang. The lesson is not simply "outbid the hostile offer" but rather "combine a financial defense with legal, governance, and stakeholder defenses in parallel."</p>
<p><strong>For arbitrageurs and event-driven investors:</strong> The Korea Zinc bid premium squeeze was one of the most extreme in Asian M&A history. Investors who entered the stock near ₩515,000 and sold near the ₩830,000 defensive buyback price realized a 61% gain in roughly three weeks. Those who chased the stock to ₩1,630,000 and held through the EGM resolution lost more than 60% of their investment. The lesson is familiar but bears repeating: in contested situations, the optimal exit is often not the peak price but the first definitive offer above intrinsic value.</p>
<p><strong>For Korean governance observers:</strong> The NPS's role at the Korea Zinc EGM was a landmark application of the Stewardship Code to a PE-driven hostile control contest — a category the Code's authors likely did not anticipate in 2016. The NPS's decision to partially support incumbent management was not a reflexive pro-management vote; it reflected a considered judgment that financial buyer control of a strategically critical industrial asset was not in the long-term interest of pension beneficiaries. This decision will be studied by every institutional investor in Korea facing similar situations.</p>
<p>Korea Zinc remains the world's largest zinc and lead smelter. Its management is intact. Its balance sheet is strong. But with ~41% of its shares in the hands of a PE fund and a dissatisfied founding-family shareholder, the governance story is far from over. Every future AGM will be a proxy battle. Every major strategic decision — capital expenditure, dividend policy, M&A — will require navigating a hostile minority that is simultaneously the largest single shareholder. Korea Zinc has survived its most dramatic challenge. The next chapter is quieter but no less contested.</p>
`,
};

export default koreaZincMbk;
