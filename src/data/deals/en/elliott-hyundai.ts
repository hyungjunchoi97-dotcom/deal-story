/**
 * Elliott Management × Hyundai Motor Group
 * Korean Chaebol Circular Shareholding Reform Campaign — 2018–2019
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "elliott-hyundai",
  title: "Elliott vs. Hyundai Motor Group — Activism Meets Korea's Chaebol Wall",
  subtitle: "Hyundai Mobis–Glovis Merger Blocked · Circular Shareholding Reform · Jae-yong Chung Era Transition · Special Dividend Pressure",
  category: "activism",
  industry: "Automotive & Conglomerate",
  country: "South Korea",
  announcedAt: "2018-04-22",
  closedAt: "2019-01-10",
  announcedDisplay: "April 2018",
  closedDisplay: "January 2019",
  readingMinutes: 11,
  tags: ["Elliott", "Hyundai Motor", "Kia", "Hyundai Mobis", "governance", "circular shareholding", "treasury shares", "special dividend", "Korean chaebol"],
  excerpt:
    "Elliott Management invested roughly $1 billion across Hyundai Motor, Kia, and Hyundai Mobis, demanding the dismantling of the group's intricate circular shareholding structure and the cancellation of the Hyundai Mobis–Glovis split-merger. A rare coalition of institutional investors forced the merger plan's withdrawal — but the full-scale governance overhaul and blockbuster dividends Elliott sought fell short. The campaign became a turning point for the rise of Euisun Chung's leadership era.",

  acquirer: { initials: "ELL", bg: "bg-slate-700", label: "Elliott Management" },
  target:   { initials: "HMG", bg: "bg-blue-600", label: "Hyundai Motor Group" },

  background: [
    "Hyundai Motor Group operated through a dense web of cross-shareholdings among Hyundai Motor, Kia, Hyundai Mobis, Hyundai Glovis, Hyundai Steel, and dozens of other affiliates. The most prominent loop was the triangular structure: Hyundai Mobis → Hyundai Motor → Kia → Hyundai Mobis. This circular ownership allowed the founding Chung family to control the entire group with a relatively small direct equity stake — a classic Korean chaebol architecture that global investors had long criticized as a source of the Korea Discount.",
    "In April 2018, Hyundai Motor Group announced a plan to split Hyundai Mobis into two units and merge the surviving entity (containing the after-sales and investment arms) into Hyundai Glovis. The stated rationale was governance simplification and operational efficiency. But market observers interpreted the deal as a structure designed to strengthen heir Euisun Chung's grip on the group — Chung was Hyundai Glovis' largest individual shareholder, and the proposed exchange ratio was seen as favorable to Glovis at the expense of Mobis minority shareholders.",
    "On April 22, 2018, Elliott Management disclosed approximately $1 billion in stakes spread across Hyundai Motor, Kia, and Hyundai Mobis — roughly 2–3% in each. Elliott simultaneously launched a public campaign demanding: (1) a ₩8.9 trillion special dividend from Hyundai Motor alone, (2) additional dividends from Kia and Mobis, (3) withdrawal of the Mobis–Glovis split-merger, (4) dissolution of circular shareholdings, and (5) material improvements in board independence.",
    "The institutional response was sweeping. ISS and Glass Lewis both recommended opposition to the merger plan. The National Pension Service (NPS), which held approximately 8% of Hyundai Mobis, signaled its concerns. Foreign institutional investors — collectively holding over 40% of the group's key listed affiliates — broadly opposed the terms. Unable to assemble sufficient friendly votes before the scheduled extraordinary general meeting, Hyundai Motor Group withdrew the Mobis–Glovis split-merger plan in May 2018. It was a rare instance in Korean chaebol history of a governance-related corporate plan being blocked outright by institutional investor pressure.",
  ],

  dealSummary: {
    dealValueDisplay: "Elliott stake ~$1B (across 3 HMG affiliates)",
    acquirerName: "Elliott Management",
    targetName: "Hyundai Motor Group (Hyundai Motor, Kia, Hyundai Mobis)",
    announcedDisplay: "April 2018",
    closedDisplay: "January 2019",
    country: "South Korea",
  },

  executiveSummary: [
    "Elliott invested ~$1B across Hyundai Motor, Kia, and Hyundai Mobis; demanded withdrawal of Mobis–Glovis split-merger, circular shareholding dissolution, and ₩8.9T special dividend from Hyundai Motor",
    "Core attack thesis: unfair merger ratio in the Mobis–Glovis plan designed to entrench Euisun Chung's succession; under-distribution of cash relative to free float; circular shareholding structure systematically disadvantaging minority shareholders",
    "Win #1: Hyundai Mobis–Glovis split-merger plan withdrawn in May 2018 — rare instance of institutional pressure blocking a Korean chaebol governance transaction",
    "Win #2: Modest dividend increases and partial unwind of circular shareholdings — far short of Elliott's blockbuster special dividend demand",
    "Euisun Chung became group chairman in October 2020; subsequently launched aggressive EV and global technology partnership strategy",
    "Legacy: Raised investor expectations for shareholder returns at Korean auto conglomerates; intensified governance scrutiny of chaebol circular structures",
  ],

  industryOverview: {
    body: "By 2018, Korean automotive and conglomerate stocks had become prime targets for global activist funds. Korea's large-cap listed companies were chronically undervalued — the so-called Korea Discount — driven by complex circular shareholdings, low dividend payout ratios, and owner-dominated decision-making. Simultaneously, the global auto industry was facing its deepest structural disruption in decades as electric vehicles and autonomous driving reshaped competitive dynamics.",
    metrics: [
      { label: "Hyundai Motor market cap (2018)", value: "~₩30 trillion", sub: "Hyundai Motor standalone" },
      { label: "HMG 3 affiliates combined foreign ownership", value: "~40%+", sub: "Majority held by foreign institutions" },
      { label: "NPS stake in Hyundai Mobis", value: "~8%", sub: "Key institutional swing voter" },
      { label: "Hyundai Motor dividend payout (2017)", value: "~15%", sub: "Below global auto sector average" },
    ],
    subBody: "Korean chaebol circular ownership structures allow controlling families to govern large corporate empires with minimal direct equity stakes. When the interests of the controlling family diverge from minority shareholders — as in the Mobis–Glovis restructuring — minority holders are structurally disadvantaged. Elliott's campaign was the largest direct challenge to this architecture in Korean corporate history at the time.",
    players: [
      { name: "Elliott Management", role: "Activist hedge fund (Paul Singer), New York" },
      { name: "Euisun Chung (Vice Chairman, then Chairman)", role: "HMG controlling shareholder; became Chairman in 2020" },
      { name: "National Pension Service (NPS)", role: "~8% of Hyundai Mobis; key institutional voice" },
      { name: "ISS / Glass Lewis", role: "Global proxy advisors; both recommended opposing the Mobis–Glovis plan" },
      { name: "Foreign institutional investors", role: "Held 40%+ combined across 3 HMG affiliates; broadly backed Elliott" },
    ],
  },

  companyOverview: {
    targetName: "Hyundai Motor Group (Hyundai Motor, Kia, Hyundai Mobis)",
    body: "Hyundai Motor Group is South Korea's second-largest conglomerate (chaebol), built around three core listed entities: Hyundai Motor, Kia, and Hyundai Mobis. Hyundai Motor and Kia together rank among the world's top-five automakers by global vehicle sales. Hyundai Mobis simultaneously served as the group's parts supplier, after-sales network operator, and quasi-holding company for cross-shareholdings. By 2018, the group's combined revenue approached ₩200 trillion. Its intricate circular ownership had drawn sustained criticism from foreign investors for decades.",
    metrics: [
      { label: "HMG global vehicle sales (2017)", value: "~7.25 million units", sub: "Hyundai Motor + Kia combined" },
      { label: "Hyundai Motor annual revenue (FY2017)", value: "~₩96 trillion", sub: "Hyundai Motor standalone, consolidated" },
      { label: "Hyundai Mobis market cap (2018)", value: "~₩20 trillion", sub: "Before split-merger announcement" },
      { label: "Hyundai Motor foreign ownership", value: "~40%", sub: "As of 2018" },
      { label: "Elliott total investment", value: "~$1B (3 affiliates)", sub: "Hyundai Motor + Kia + Hyundai Mobis combined" },
      { label: "Euisun Chung's Hyundai Glovis stake", value: "~23%", sub: "Core to the unfair-ratio controversy" },
    ],
    financials: [
      { year: "FY2017", revenue: 96, cogs: 78, grossProfit: 18, sga: 6, operatingIncome: 4.5, ebitda: 7 },
      { year: "FY2018", revenue: 97, cogs: 79, grossProfit: 18, sga: 6, operatingIncome: 2.4, ebitda: 5.5 },
    ],
    financialsNote: "Unit: KRW trillion. Hyundai Motor standalone consolidated basis. Source: Hyundai Motor annual reports (estimated).",
    financialsCurrency: "KRW",
    financialsUnit: "조",
  },

  governanceOverview: {
    body: "The Elliott–Hyundai Motor Group campaign focused on the structural conflict between Korea's chaebol circular ownership model and the interests of minority shareholders. The Hyundai Mobis–Glovis split-merger was the flashpoint: critics argued it was designed to entrench Euisun Chung's succession rather than create genuine corporate value. The rare institutional coalition that blocked the deal became a landmark precedent in Korean corporate governance.",
    shareholders: [
      {
        id: "owner",
        label: "Euisun Chung Family (Controlling Shareholders)",
        sub: "Hyundai Glovis largest shareholder; HMG controlling family",
        stake: "~30%+",
        stakePct: 30.0,
        type: "controlling",
        alignment: "pro",
      },
      {
        id: "nps",
        label: "National Pension Service (NPS)",
        sub: "~8% of Hyundai Mobis; ~5% of Hyundai Motor (est.)",
        stake: "~8% (Hyundai Mobis)",
        stakePct: 8.0,
        type: "government",
        alignment: "neutral",
      },
      {
        id: "elliott",
        label: "Elliott Management",
        sub: "Combined ~2–3% across 3 HMG affiliates",
        stake: "~2–3%",
        stakePct: 2.5,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "foreign_inst",
        label: "Foreign Institutional Investors",
        sub: "40%+ combined across 3 HMG listed affiliates",
        stake: "~40%+",
        stakePct: 40.0,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "Domestic Minority Shareholders",
        sub: "Retail + domestic institutional mix",
        stake: "Remainder",
        stakePct: 19.5,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 10,
      independent: 7,
      affiliated: 3,
      note: "Typical of Korean chaebol, inside directors (owner family and senior management) wielded significant influence. The practical independence of outside directors was persistently questioned.",
    },
    issues: [
      {
        title: "Circular Shareholding Structure",
        description: "The four-way circular ownership loop — Hyundai Motor ↔ Kia ↔ Hyundai Mobis ↔ Hyundai Glovis — allowed the Chung family to dominate the entire group with a relatively small direct stake. This structure created an inherent conflict of interest whenever controlling family objectives diverged from minority shareholders.",
        severity: "critical",
      },
      {
        title: "Inadequate Transition to Holding Company Structure",
        description: "Despite regulatory pressure and investor demands, Hyundai Motor Group had delayed a genuine transition to a transparent holding company structure. The Mobis–Glovis plan was widely seen as perpetuating — rather than resolving — the existing governance architecture.",
        severity: "high",
      },
      {
        title: "Low Shareholder Return Rate",
        description: "Hyundai Motor held substantial cash reserves while maintaining dividend payout ratios well below those of global auto peers. Elliott calculated that Hyundai Motor alone could distribute approximately ₩8.9 trillion in special dividends without impairing operations.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Withdraw Hyundai Mobis–Glovis Split-Merger Plan",
        result: "won",
        note: "Withdrawn in May 2018 following broad institutional investor opposition. A rare outcome in Korean chaebol history.",
      },
      {
        demand: "Special Dividend of ~₩8.9 Trillion from Hyundai Motor",
        result: "partial",
        note: "Modest dividend increases only — no large-scale special distribution.",
      },
      {
        demand: "Dissolution of Circular Shareholding Structure",
        result: "partial",
        note: "Partial unwind of circular shareholdings in 2019–2020; full dissolution not achieved.",
      },
      {
        demand: "Strengthen Board Independence",
        result: "partial",
        note: "HMG announced improved outside director policies, but material governance change remained incomplete.",
      },
    ],
    stockImpact: {
      preCampaign: "₩160,000 (early 2018)",
      peakDuringCampaign: "₩175,000 (immediately post-campaign)",
      postCampaign: "₩200,000+ (2021, EV optimism)",
      note: "Long-term stock recovery was driven far more by the EV transition narrative than by Elliott's campaign. Hyundai's share price surged after Euisun Chung became chairman (2020) and unveiled an ambitious electric vehicle strategy.",
    },
  },

  dealStructure: {
    body: "Elliott accumulated approximately $1 billion in stakes across Hyundai Motor, Kia, and Hyundai Mobis, then coordinated with domestic and foreign institutional shareholders to mount opposition to the Mobis–Glovis split-merger. The campaign's tactical centerpiece was assembling a blocking coalition before the extraordinary general meeting vote.",
    preOwnership: {
      nodes: [
        { id: "elliott", label: "Elliott Management", sub: "~$1B across 3 HMG listed affiliates", type: "acquirer" },
        { id: "hmg", label: "Hyundai Motor Group", sub: "Circular shareholding: HM–Kia–Mobis–Glovis", type: "target" },
        { id: "owner", label: "Euisun Chung Family", sub: "Largest individual shareholder of Hyundai Glovis", type: "entity" },
        { id: "nps", label: "National Pension Service", sub: "~8% of Hyundai Mobis", type: "fund" },
      ],
      edges: [
        { from: "elliott", to: "hmg", label: "~$1B stake (3 affiliates)" },
        { from: "owner", to: "hmg", label: "Circular ownership control" },
        { from: "nps", to: "hmg", label: "Key institutional shareholder" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hmg_post", label: "Hyundai Motor Group", sub: "Split-merger withdrawn; partial restructuring underway", type: "target" },
        { id: "jys", label: "Euisun Chung (Chairman)", sub: "Became chairman Oct 2020; launched EV pivot", type: "entity" },
      ],
      edges: [
        { from: "jys", to: "hmg_post", label: "Chairman-led strategic transformation" },
      ],
    },
    keyTerms: [
      { label: "Elliott total investment", value: "~$1B (3 HMG affiliates)", accent: true },
      { label: "Core demands", value: "Split-merger withdrawal · circular shareholding dissolution · special dividend", accent: false },
      { label: "Key outcome", value: "Hyundai Mobis–Glovis split-merger withdrawn (May 2018)", accent: true },
      { label: "Campaign wind-down", value: "January 2019 (campaign effectively concluded)", accent: false },
      { label: "Euisun Chung became chairman", value: "October 2020", accent: false },
    ],
  },

  advisors: {
    body: "Both sides engaged Korea's top legal and financial advisory firms. Elliott combined Korean local counsel with global proxy solicitation expertise to coordinate the institutional blocking coalition.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Elliott (Activist Side)",
        initials: "ELL",
        bg: "bg-slate-700",
        advisors: [
          { firm: "Shin & Kim (est.)", role: "Korean legal counsel", roleType: "legal", note: "Korean capital markets law compliance and disclosure strategy" },
          { firm: "McKinsey & Company (est.)", role: "Strategic advisory", roleType: "other", note: "Circular shareholding reform options and valuation analysis" },
        ],
      },
      {
        side: "target",
        sideLabel: "Hyundai Motor Group (Defense Side)",
        initials: "HMG",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Kim & Chang", role: "Legal counsel", roleType: "legal", note: "Split-merger legal structuring and Elliott response" },
          { firm: "JP Morgan / Samsung Securities", role: "Financial advisor", roleType: "financial", note: "Split-merger structure and fairness opinion" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on public reporting. Actual contractual arrangements may differ.",
  },

  valuation: {
    body: "Elliott argued that Hyundai Motor, Kia, and Hyundai Mobis were all substantially undervalued relative to their net asset values — particularly Hyundai Motor, which it calculated could distribute approximately ₩8.9 trillion in special dividends without compromising operations. The Mobis–Glovis exchange ratio was additionally criticized for systematically favoring Glovis at Mobis minority shareholders' expense.",
    rows: [
      { item: "Elliott total stake across 3 HMG affiliates", val: "~$1B", note: "Hyundai Motor + Kia + Hyundai Mobis", accent: true },
      { item: "Proposed Hyundai Motor special dividend", val: "~₩8.9 trillion", note: "Elliott's calculated distributable amount", accent: true },
      { item: "Hyundai Motor stock price (early 2018)", val: "~₩160,000", note: "At campaign launch", accent: false },
      { item: "Hyundai Mobis–Glovis exchange ratio", val: "Contested", note: "Critics argued it was unfair to Mobis minority holders", accent: false },
      { item: "Hyundai Motor P/BV (2018)", val: "~0.5–0.6x", note: "Deeply discounted to book value", accent: true },
    ],
    disclaimer: "Valuation data based on Elliott public materials and media reporting.",
  },

  rationale: {
    buyer: {
      title: "Why Elliott Attacked Hyundai Motor Group",
      initials: "ELL",
      bg: "bg-slate-700",
      points: [
        "Dissolve circular shareholdings — the HM–Kia–Mobis–Glovis loop structurally disadvantages minority shareholders whenever controlling family interests diverge",
        "Block the unfair split-merger — the Mobis–Glovis plan was structured to entrench Euisun Chung's succession, with an exchange ratio biased against Mobis minority holders",
        "Return excess capital — Hyundai Motor was sitting on vast cash reserves while paying dividends well below global auto peers",
        "Strengthen board independence — owner-dominated boards cannot credibly represent minority shareholder interests",
        "End the Korea Discount — genuine governance reform would unlock the substantial valuation gap versus global peers",
      ],
    },
    seller: {
      title: "Why Hyundai Motor Group Resisted",
      initials: "HMG",
      bg: "bg-blue-600",
      points: [
        "Self-directed reform in progress — the group was pursuing governance simplification on its own timeline without external intervention",
        "The split-merger was operationally motivated — presented as a business efficiency improvement for Hyundai Mobis, not a succession mechanism",
        "Special dividends would impair future investment capacity — capital needed for EV and autonomous driving development",
        "Rejecting short-term activist capital — long-term industrial strategy should not be dictated by funds seeking quick returns",
        "Management stability is a competitive advantage — a secure succession structure underpins the group's long-term competitiveness",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "Late 2024",
    body: "Following the May 2018 withdrawal of the Mobis–Glovis split-merger plan — its core objective — Elliott's campaign gradually wound down. Hyundai Motor Group made modest dividend increases and began partially unwinding circular shareholdings, but stopped well short of Elliott's full demands. After Euisun Chung became group chairman in October 2020, Hyundai pursued an aggressive electric vehicle pivot and high-profile global technology partnerships.",
    overallVerdict: "Core demand (split-merger withdrawal) achieved — structural governance reform incomplete",
    positives: [
      "Hyundai Mobis–Glovis split-merger blocked — a rare case of institutional investor pressure defeating a Korean chaebol governance transaction",
      "Modest dividend increases — some policy shift toward shareholder returns",
      "Euisun Chung's EV strategy post-chairmanship — Hyundai Motor emerged as a credible global EV competitor",
      "Long-term stock recovery — Hyundai Motor shares surpassed ₩200,000 on EV optimism in 2021",
      "Korean auto sector governance discourse raised — heightened institutional investor awareness of circular shareholding risks",
    ],
    risks: [
      "Circular shareholding not fully dissolved — the core structural governance problem was only partially addressed",
      "EV transition competition — profitability pressure as Hyundai contests Tesla and BYD in the global EV market",
      "Future governance events — additional succession-related restructuring questions may resurface under the next generation",
      "Special dividend never delivered — the large-scale capital return Elliott sought was never implemented",
      "Korea Discount persists — the fundamental valuation gap for Korean auto stocks was not fully eliminated",
    ],
    editorNote: "The Elliott–Hyundai Motor campaign demonstrated that even Korea's powerful chaebol cannot override a unified institutional investor opposition on a specific governance transaction. The withdrawal of the Mobis–Glovis plan was a landmark precedent for minority shareholder rights in Korea. Yet Elliott's deeper objectives — full circular shareholding dissolution and massive capital return — were ultimately unmet. The campaign became a strategic playbook for subsequent Korean activism, and a vivid illustration of the limits of activist pressure against entrenched chaebol control.",
  },

  tombstone: {
    acquirerInitials: "ELL",
    acquirerBg: "bg-slate-700",
    targetInitials: "HMG",
    targetBg: "bg-blue-600",
    acquirerName: "Elliott Management",
    targetName: "Hyundai Motor Group (HM, Kia, Hyundai Mobis)",
    dealTitle: "Korean Chaebol Governance Reform Campaign",
    dealSize: "~$1B stake across 3 HMG affiliates",
    dealSizeUSD: "USD ~1B stake across 3 HMG affiliates",
    evEbitda: "N/A",
    closeDate: "Jan 2019",
  },

  sources: [
    { id: 1, text: "Elliott Management — Shareholder Letter and Press Releases (April 2018)" },
    { id: 2, text: "Hyundai Mobis EGM Disclosure, Korea FSS DART (May 2018)" },
    { id: 3, text: "ISS / Glass Lewis — Proxy Advisory Reports (2018, opposing split-merger)" },
    { id: 4, text: "Wall Street Journal — Elliott pushes Hyundai for $6.3 Billion in Special Dividends (2018)" },
    { id: 5, text: "Financial Times — Hyundai scraps restructuring plan under investor pressure (May 2018)" },
    { id: 6, text: "Hyundai Motor Annual Reports FY2017 and FY2018" },
    { id: 7, text: "Bloomberg — Elliott Management's Hyundai Campaign Timeline (2018–2019)" },
  ],

  seo: {
    title: "Elliott vs Hyundai Motor Group Full Analysis — The Spark for Korean Chaebol Governance Reform",
    description: "Complete analysis of Elliott Management's 2018–2019 activist campaign against Hyundai Motor Group. Hyundai Mobis–Glovis merger blocked, circular shareholding reform pressure, special dividend demands, and the legacy for Korean corporate governance.",
    keywords: [
      "Elliott Hyundai Motor activism",
      "Hyundai Mobis Glovis split merger",
      "Korean chaebol circular shareholding",
      "Hyundai governance reform",
      "Elliott Management Korea",
      "Hyundai special dividend",
      "Euisun Chung governance",
      "Korean shareholder activism",
    ],
  },

  concepts: [
    {
      term: "Circular Shareholding",
      description: "A structure in which A owns shares in B, B owns shares in C, and C owns shares back in A. Used by Korean chaebol to maintain control with limited direct equity, it creates structural conflicts of interest with minority shareholders.",
    },
    {
      term: "Shareholder Return",
      description: "Mechanisms by which a company distributes profits to shareholders, primarily through cash dividends and share buybacks. Korean companies' historically low payout ratios are cited as a core driver of the Korea Discount.",
    },
    {
      term: "Chaebol Governance",
      description: "The owner-centric control structure of Korean conglomerates (chaebol), maintained through circular shareholdings and intra-group transactions. The conflict between controlling family interests and minority shareholder rights is the central governance tension in Korean corporate finance.",
    },
  ],

  faq: [
    {
      q: "Why did Elliott target Hyundai Motor Group?",
      a: "Elliott argued that Hyundai Motor Group's complex circular shareholding structure systematically disadvantaged minority shareholders. The April 2018 Hyundai Mobis–Glovis split-merger plan was specifically criticized as a transaction designed to entrench Euisun Chung's succession — with an exchange ratio biased against Mobis minority holders. Elliott also cited Hyundai Motor's underutilization of its large cash reserves relative to global auto peers.",
    },
    {
      q: "Why was the Hyundai Mobis–Glovis split-merger withdrawn?",
      a: "A broad coalition of institutional investors — including global proxy advisors ISS and Glass Lewis (both recommending opposition), the National Pension Service (holding ~8% of Hyundai Mobis), and a large bloc of foreign institutional shareholders — opposed the transaction. Unable to secure sufficient friendly votes before the extraordinary shareholder meeting, Hyundai Motor Group withdrew the plan in May 2018.",
    },
    {
      q: "Was Elliott's campaign successful?",
      a: "It was partially successful. The core demand — blocking the Mobis–Glovis split-merger — was achieved, a rare outcome in Korean chaebol history. However, the blockbuster special dividend of ₩8.9 trillion was not delivered, and full dissolution of circular shareholdings was not accomplished. Long-term, Hyundai Motor's stock significantly outperformed on EV optimism after Euisun Chung's 2020 chairmanship.",
    },
    {
      q: "What is the lasting impact on Korean corporate governance?",
      a: "The campaign demonstrated that a coordinated institutional investor bloc can defeat a specific Korean chaebol governance transaction. This raised investor expectations for shareholder returns across the Korean auto sector and intensified scrutiny of circular shareholding structures. The NPS subsequently strengthened its proxy voting guidelines, and Korean listed companies generally faced higher pressure to increase dividends and improve governance transparency.",
    },
  ],
};

export default deal;
