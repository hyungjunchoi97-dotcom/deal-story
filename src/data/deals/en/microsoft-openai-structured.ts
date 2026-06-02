/**
 * Microsoft × OpenAI Structured Investment — $13B+ (2019~2023)
 * Not equity, but a Capped Profit Interest in OpenAI LP.
 * Four-layer capital structure: non-profit parent + capped-profit LP +
 * Microsoft's 49% capped-profit interest + Azure exclusive compute.
 * The most sophisticated strategic investment structure in the modern AI industry.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "microsoft-openai-structured",
  title: "How Microsoft Wrote $13B+ Into OpenAI, Not as Equity, but as a Capped Profit Interest",
  subtitle:
    "$1B in 2019 → $10B in 2023, cumulative $13B+ · Azure exclusive cloud + 49% capped-profit interest in OpenAI LP · ~100x cap, residual reverts to the non-profit · governance influence without a board seat",
  category: "ma",
  industry: "AI / Cloud Computing / Strategic Investment",
  country: "USA",
  announcedAt: "2019-07-22",
  closedAt: "2023-01-23",
  announcedDisplay: "Jul 22, 2019 (initial $1B announced)",
  closedDisplay: "Jan 23, 2023 (multi-year, multi-billion extension)",
  readingMinutes: 17,
  tags: [
    "Microsoft",
    "OpenAI",
    "Capped Profit",
    "Azure",
    "AI",
    "Strategic Investment",
    "Sam Altman",
    "Satya Nadella",
    "CMA",
    "Non-Profit + LP Hybrid",
    "Compute Commitment",
    "Governance Without Board Seat",
  ],
  excerpt:
    "On July 22, 2019, Microsoft announced a $1B investment in OpenAI. On January 23, 2023, it formalized a [multi-year, multi-billion dollar] extension, with cumulative reported commitments of roughly $13B+. The real innovation is not the [size], but the [structure]. Microsoft did not acquire equity in the non-profit parent (OpenAI Inc) nor common equity in the for-profit subsidiary (OpenAI LP). Instead, Microsoft bought a [Capped Profit Interest in OpenAI LP], the right to receive 49% of LP profits up to approximately 100x its investment, after which all residual profits revert to the non-profit parent. Bundled with that interest are an exclusive Azure cloud arrangement and a multi-year compute commitment. The result is the most sophisticated strategic investment in modern AI history, [cash + compute + governance influence + non-profit mission preservation] packaged into a single transaction.",

  acquirer: { initials: "MSFT", bg: "bg-blue-600", label: "Microsoft Corporation" },
  target: { initials: "OAI", bg: "bg-emerald-700", label: "OpenAI (non-profit OpenAI Inc + for-profit OpenAI LP)" },

  background: [
    "OpenAI was founded in December 2015 by Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever, and others as a non-profit research lab (OpenAI Inc) with the stated mission of [\"developing safe artificial general intelligence (AGI) for the benefit of all humanity.\"] Roughly $1B in initial pledges were announced, though actual funded amounts were considerably smaller. As compute costs for training frontier models exploded, the reality became clear, [a non-profit donation model alone could not fund GPT-scale training runs].",
    "[March 2019, OpenAI LP launches, the non-profit + for-profit hybrid structure is born.] OpenAI created a new for-profit subsidiary, [OpenAI LP], beneath the non-profit parent OpenAI Inc. Crucially, OpenAI LP is not a standard for-profit subsidiary, it is structured as a [Capped Profit Company]: LP investors can receive returns only up to a defined multiple of their investment, and any profit beyond that cap reverts to the non-profit parent. A hybrid built to satisfy mission (\"benefit of all humanity\") and capital reality simultaneously. Microsoft would negotiate the [first major external capital allocation] inside this structure.",
    "[July 22, 2019, Microsoft's first $1B investment.] Satya Nadella (CEO of Microsoft) and Sam Altman (CEO of OpenAI) jointly announced that Microsoft would invest $1B in OpenAI and become its [exclusive cloud partner], providing model training and inference infrastructure on Azure. Press reporting indicated that a substantial portion of the investment was structured as [Azure compute credits] rather than cash, the market interpreted this as [cash + infrastructure = capital of equivalent value]. Microsoft built dedicated supercomputing clusters inside Azure to support GPT-3 training.",
    "[Undisclosed 2021 extension, then a $10B multi-year extension in January 2023.] Press reports indicate Microsoft made additional investment rounds in 2020~2022. Following the launch of ChatGPT in November 2022, OpenAI moved to the center of global consumer AI awareness, accelerating negotiations. On January 23, 2023, Microsoft formally announced a [\"multi-year, multi-billion dollar investment extension.\"] The Financial Times and Bloomberg estimated the new commitment at approximately $10B, with cumulative commitments reported at roughly $13B+. From this point Microsoft simultaneously held the [49% capped-profit interest in OpenAI LP] and the [Azure exclusive cloud arrangement with a multi-year compute commitment].",
    "[November 2023, the Sam Altman saga reveals the true nature of the governance arrangement.] On November 17, 2023, OpenAI Inc's non-profit board fired Altman. Formally, Microsoft held no board seat. But within 96 hours, Satya Nadella publicly announced that Altman would lead a new advanced AI research division at Microsoft, and ~700 OpenAI employees signed an open letter declaring [\"if Altman is not reinstated, we will follow him to Microsoft.\"] Within four days, Altman was reinstated and the board was reshuffled. The episode demonstrated, in real time, [how governance influence can operate without a formal board seat]. Microsoft was subsequently granted a non-voting observer seat in 2024, but resigned that seat in July 2024 under antitrust pressure from the UK CMA, the EU, and the U.S. FTC. Substantive influence persisted.",
  ],

  dealSummary: {
    dealValueDisplay: "approx. $13B+ cumulative (2019~2023, up to $14B if Azure compute credits valued)",
    acquirerName: "Microsoft Corporation",
    targetName: "OpenAI (non-profit OpenAI Inc + for-profit OpenAI LP)",
    announcedDisplay: "Jul 22, 2019 (initial $1B)",
    closedDisplay: "Jan 23, 2023 (multi-year, multi-billion extension)",
    country: "USA",
  },

  executiveSummary: [
    "[Capped Profit Interest, not equity] Microsoft acquired neither equity in OpenAI Inc (non-profit) nor common equity in OpenAI LP (for-profit). Instead, it holds a [49% capped-profit interest in OpenAI LP], with a cap at approximately 100x its investment. Residual profit beyond the cap reverts to the non-profit parent.",
    "[$1B in 2019 → $10B in 2023 → cumulative $13B+] Initial $1B announced July 22, 2019; undisclosed extension in 2021; [multi-year, multi-billion] extension formalized January 23, 2023, reported at ~$10B. Cumulative reported commitments ~$13B, up to $14B if Azure compute credits are valued.",
    "[Azure exclusive cloud + multi-year compute commitment] OpenAI's model training and inference run exclusively on Azure under a [multi-year exclusive cloud provider arrangement] (reportedly through the early 2030s). Microsoft has deployed $50B+ in AI infrastructure to support OpenAI workloads.",
    "[Governance influence without a board seat] Throughout 2019~2023, Microsoft held no board seat in OpenAI Inc. Yet during the 96-hour Altman saga in November 2023, Microsoft emerged as the effective decision-maker, leading to Altman's reinstatement and a board reshuffle. A live demonstration of [governance influence without a formal board seat].",
    "[July 2024 voluntary resignation of the observer seat] Microsoft received a non-voting observer seat after the Altman saga, but voluntarily resigned it in July 2024 under antitrust pressure from the UK CMA, the EU, and the U.S. FTC. Formal governance receded, substantive influence persisted.",
    "[100x cap implies a theoretical recovery ceiling of ~$1.3T] $13B × ~100 = ~$1.3T as the upper bound of Microsoft's capped-profit interest. Beyond that point, all residual profits revert to the non-profit parent. The cap is structural reconciliation between capital reality and the [\"benefit of all humanity\"] mission.",
    "[2024~2025 renegotiation underway] As OpenAI evaluates a potential conversion to a for-profit structure (Public Benefit Corporation or similar), Microsoft and OpenAI are renegotiating cap terms, the Azure exclusivity clause, and conversion ratios. The structure has become both a template and a stress test for next-generation AI capital deals.",
    "[Most sophisticated modern AI strategic investment] Not a simple equity investment, not a simple cloud contract, but [cash + compute + governance influence + non-profit mission preservation] packaged into a single transaction. The structural reference point for subsequent AI deals: Google × Anthropic, Amazon × Anthropic, NVIDIA × Inflection / Mistral.",
  ],

  industryOverview: {
    body: "Between 2019 and 2023, the global AI industry entered a phase in which [training costs for large language models exceeded the R&D budgets of single companies]. GPT-3 (2020) cost an estimated $4M~$12M to train, GPT-4 (2023) approximately $100M, and current frontier models reportedly exceed $500M per training run. The economic consequence was a forced pairing of [model labs + hyperscale clouds], and non-traditional capital structures became necessary. Microsoft × OpenAI sits at both the peak and the starting point of this pattern, the structural reference for Google × Anthropic, Amazon × Anthropic, and NVIDIA × Inflection / Mistral.",
    metrics: [
      { label: "Microsoft cumulative commitment to OpenAI",     value: "~$13B+",       sub: "Reported figures, up to $14B with Azure compute credits valued" },
      { label: "Microsoft capped-profit interest in OpenAI LP", value: "49%",          sub: "Up to ~100x cap on investment" },
      { label: "OpenAI estimated valuation (2023)",             value: "~$86B",        sub: "Tender offer reference" },
      { label: "OpenAI estimated valuation (2024)",             value: "~$157B",       sub: "Late-2024 round" },
    ],
    subBody:
      "Microsoft's cumulative AI infrastructure investment after this deal has exceeded $50B, the bulk of which supports OpenAI workloads. Anthropic has secured cumulative commitments of $13B+ across Google and Amazon (Amazon $8B, Google $2B and more). xAI has built infrastructure through internal Tesla and SpaceX arrangements. This deal marks the starting point for an industry structure in which [AI model labs are locked into a single hyperscaler at the capital layer].",
    players: [
      { name: "Microsoft",          role: "Investor, exclusive Azure cloud provider, cumulative commitments of ~$13B+" },
      { name: "OpenAI Inc",         role: "Non-profit parent, board retains mission authority (safety, benefit to humanity)" },
      { name: "OpenAI LP",          role: "For-profit subsidiary (Capped Profit Company), issuer of Microsoft's interest" },
      { name: "Sam Altman",         role: "OpenAI CEO, fired Nov 2023 then reinstated within 96 hours; central channel for Microsoft governance influence" },
      { name: "Satya Nadella",      role: "Microsoft CEO, led negotiations across all stages and emerged as effective decision-maker during the Altman saga" },
      { name: "Anthropic",          role: "Principal OpenAI competitor; cumulative $13B+ from Google and Amazon" },
      { name: "Google DeepMind",    role: "Anthropic investor and operator of the competing Gemini model line" },
      { name: "UK CMA / EU / FTC",  role: "Antitrust review of the Microsoft-OpenAI relationship; July 2024 observer-seat resignation was the first visible result" },
    ],
  },

  companyOverview: {
    targetName: "OpenAI (non-profit OpenAI Inc + for-profit OpenAI LP)",
    body: "OpenAI was founded on December 11, 2015 by Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba. Initially a single non-profit entity (OpenAI Inc), OpenAI introduced a [Capped Profit Company subsidiary, OpenAI LP] in March 2019, creating a [non-profit parent + for-profit subsidiary] hybrid. Core products include the GPT series (GPT-3 in 2020, GPT-4 in 2023, GPT-4o in 2024, GPT-5 in 2025), ChatGPT (launched November 2022, the fastest consumer product in history to reach 100M MAUs in two months), Dall-E (image), Sora (video), and Codex (code). Headcount grew from ~100 in 2019 to ~1,000 in 2023 to ~3,500 by 2025. Revenue, reported by The Information and the Financial Times, grew from approximately $1.6B in 2023 to ~$3.7B in 2024, with 2025 run-rate around $10B.",
    metrics: [
      { label: "Founded",                       value: "Dec 11, 2015",   sub: "Sam Altman, Elon Musk, and four other co-founders" },
      { label: "Headquarters",                  value: "San Francisco",   sub: "Pioneer Building, Mission District" },
      { label: "Headcount (2025 est.)",         value: "~3,500",          sub: "From ~100 in 2019, ~1,000 in 2023" },
      { label: "Estimated revenue (2024)",      value: "~$3.7B",          sub: "ChatGPT Plus + Enterprise + API" },
      { label: "Estimated valuation (2024)",    value: "~$157B",          sub: "Late-2024 round; 2025 rumors of $300B+" },
    ],
    financials: [
      { year: "FY2020", revenue: 0,    cogs: 0,   grossProfit: 0,    sga: 0,   operatingIncome: 0,    ebitda: 0 },
      { year: "FY2021", revenue: 28,   cogs: 50,  grossProfit: -22,  sga: 80,  operatingIncome: -102, ebitda: -95 },
      { year: "FY2022", revenue: 200,  cogs: 250, grossProfit: -50,  sga: 200, operatingIncome: -250, ebitda: -220 },
      { year: "FY2023", revenue: 1600, cogs: 2400, grossProfit: -800, sga: 700, operatingIncome: -1500, ebitda: -1300 },
      { year: "FY2024", revenue: 3700, cogs: 5400, grossProfit: -1700, sga: 1400, operatingIncome: -3100, ebitda: -2800 },
    ],
    financialsNote: "Unit: USD millions. OpenAI is a private company and does not publish audited financials; figures here are press-reported estimates. COGS is dominated by compute (Azure) costs, partly offset in cash terms by Microsoft's Azure compute credits. Sources: The Information, Financial Times, Bloomberg, NYT reporting.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  dealStructure: {
    body: "The structural core of this transaction is that Microsoft did not acquire [equity in OpenAI Inc (non-profit) or common equity in OpenAI LP (for-profit)]. Instead, Microsoft purchased a [Capped Profit Interest] in OpenAI LP, an asymmetric profit-sharing right. Unpacked, the structure is four-layered: [① OpenAI Inc, a 501(c)(3) non-profit, sits at the top], [② OpenAI Inc serves as the GP and controlling member of OpenAI LP (the for-profit Capped Profit Company)], [③ OpenAI LP allocates profit interests to LP investors (employees, VCs, Microsoft), each subject to a cap of approximately 100x their investment], [④ Microsoft receives 49% of OpenAI LP profits up to the cap, after which all residual profit reverts to the non-profit parent]. A separate commercial agreement layers in [exclusive Azure cloud + multi-year compute commitment]. Governance terms include [no OpenAI Inc board seat, observer seat granted in 2024 and voluntarily resigned in July 2024]. Cash + compute + governance influence + non-profit mission preservation, packaged into one transaction.",
    preOwnership: {
      nodes: [
        { id: "openai_inc_pre", label: "OpenAI Inc (non-profit)",  sub: "501(c)(3), founded 2015, board retains mission authority", type: "target" },
        { id: "founders_pre",   label: "Founders + employees",      sub: "Initial donations and option pool",                       type: "entity" },
        { id: "msft_pre",       label: "Microsoft",                 sub: "Prospective capital and compute partner",                 type: "acquirer" },
      ],
      edges: [
        { from: "founders_pre", to: "openai_inc_pre", label: "Initial donations and contribution" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "openai_inc",  label: "OpenAI Inc (non-profit parent)",      sub: "501(c)(3), board retains mission authority", type: "target" },
        { id: "openai_lp",   label: "OpenAI LP (Capped Profit subsidiary)", sub: "For-profit subsidiary, issuer of LP interests", type: "entity" },
        { id: "msft",        label: "Microsoft",                            sub: "49% LP profit (100x cap), Azure exclusive",  type: "acquirer" },
        { id: "employees",   label: "Employee / founder LP interests",      sub: "Options and capped-profit interests",         type: "entity" },
        { id: "other_lps",   label: "Other LPs (VC and tender participants)", sub: "Khosla, Sequoia, Tiger, Thrive, and others", type: "fund" },
        { id: "azure",       label: "Azure supercomputing clusters",        sub: "OpenAI-dedicated, $50B+ infrastructure",      type: "entity" },
      ],
      edges: [
        { from: "openai_inc",  to: "openai_lp", label: "GP, controlling member" },
        { from: "msft",        to: "openai_lp", label: "Capped Profit Interest, 49% (100x cap)" },
        { from: "employees",   to: "openai_lp", label: "Capped-profit interests (option pool)" },
        { from: "other_lps",   to: "openai_lp", label: "Capped-profit interests (tender offers)" },
        { from: "msft",        to: "azure",     label: "$50B+ AI infrastructure" },
        { from: "openai_lp",   to: "azure",     label: "Exclusive cloud workload commitment" },
      ],
    },
    keyTerms: [
      { label: "Investment form",            value: "Capped Profit Interest in OpenAI LP (not equity)",                accent: true },
      { label: "Cumulative commitment",      value: "~$13B+ reported (up to $14B if Azure compute credits valued)",     accent: true },
      { label: "Tranche 1 (Jul 2019)",       value: "$1B (cash + Azure compute credits)" },
      { label: "Tranche 2 (2021)",            value: "Undisclosed (multi-billion estimated)" },
      { label: "Tranche 3 (Jan 2023)",        value: "Multi-year, multi-billion; estimated ~$10B" },
      { label: "Profit-interest share",      value: "49% of OpenAI LP profits up to the cap",                          accent: true },
      { label: "Profit cap",                  value: "~100x investment (~$1.3T theoretical ceiling)",                   accent: true },
      { label: "Post-cap treatment",          value: "All residual profit reverts to OpenAI Inc (non-profit parent)" },
      { label: "Cloud arrangement",           value: "Azure exclusive cloud provider (reportedly through early 2030s)" },
      { label: "Compute commitment",          value: "Multi-year compute commitment + Microsoft AI infrastructure $50B+" },
      { label: "OpenAI Inc board seat",       value: "None",                                                            accent: true },
      { label: "OpenAI Inc observer seat",    value: "Granted in 2024, voluntarily resigned in July 2024 (CMA, EU, FTC)" },
      { label: "Intellectual property",       value: "Owned by OpenAI; broad license to Microsoft until AGI declaration" },
      { label: "AGI clause",                  value: "If OpenAI Inc board declares AGI, Microsoft's rights are reduced or terminated" },
    ],
  },

  advisors: {
    body: "Because this is a private strategic investment rather than a public-market M&A, advisor mandates have largely not been publicly disclosed. Microsoft's in-house corporate development team led the transaction on the buyer side, supported by outside legal counsel. On the OpenAI side, the LP vehicle and Capped Profit structure were designed in collaboration with East Coast U.S. law firms and the company's in-house legal team. Most mappings below are based on market observation rather than confirmed mandates.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Microsoft (Investor)",
        initials: "MSFT",
        bg: "bg-blue-600",
        advisors: [
          {
            firm: "Microsoft Corporate Development / in-house",
            role: "Financial Advisor (in-house)",
            roleType: "financial",
            note: "Under the CEO and CFO offices; led capped-profit interest structuring and Azure exclusivity negotiations",
          },
          {
            firm: "Simpson Thacher & Bartlett (market observation)",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Capped Profit LP structure and licensing / IP terms (precise mandate undisclosed)",
          },
          {
            firm: "Wilson Sonsini Goodrich & Rosati (market observation)",
            role: "Legal Advisor (Microsoft IP and tech transactions)",
            roleType: "legal",
            note: "AGI definition, technology licensing, antitrust response (official confirmation limited)",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "OpenAI (Investee)",
        initials: "OAI",
        bg: "bg-emerald-700",
        advisors: [
          {
            firm: "OpenAI Legal / in-house",
            role: "Financial and Legal Advisor (in-house)",
            roleType: "financial",
            note: "Led by Brad Lightcap (COO, former CFO); direct negotiation of Capped Profit LP vehicle and profit allocation policy",
          },
          {
            firm: "Cravath, Swaine & Moore (market observation)",
            role: "Legal Advisor",
            roleType: "legal",
            note: "OpenAI LP vehicle design and non-profit / for-profit governance separation (precise mandate undisclosed)",
          },
          {
            firm: "Latham & Watkins (market observation, subsequent rounds)",
            role: "Legal Advisor (tender offers and restructuring)",
            roleType: "legal",
            note: "Tender offer and restructuring advisory across 2023~2024; ongoing for-profit conversion review",
          },
        ],
      },
    ],
    disclaimer: "Note: As a private strategic investment, advisor mandates have not been formally disclosed. Mappings are based on press reports and industry observation; some entries remain unconfirmed.",
  },

  valuation: {
    body: "Valuation here is not a standard EV/EBITDA or P/E calculation but the sum of [the asymmetric payoff of the capped-profit interest + the captured value of Azure workloads]. Microsoft committed roughly $13B cumulative for three layered value streams. First, the [49% capped-profit interest in OpenAI LP up to a ~100x cap (~$1.3T ceiling)]. Second, the [exclusive Azure cloud arrangement that captures OpenAI's multi-year compute spend (reportedly several billion dollars per year) directly as Azure revenue]. Third, [a broad license to integrate OpenAI models across Microsoft Copilot, Bing, GitHub, Office, and Dynamics]. OpenAI's own valuation has tracked a steep curve, [~$86B at the 2023 tender offer → ~$157B at the late-2024 round → market rumors of $300B+ in 2025]. The market has priced a substantial fraction of Microsoft's expected payoff into Microsoft equity, market cap expanded from ~$1.8T in January 2023 to ~$3.3T at year-end 2024.",
    rows: [
      { item: "Microsoft cumulative commitment",                val: "~$13B+",         note: "Reported, up to $14B if Azure compute credits valued", accent: true },
      { item: "Tranche 1 (Jul 2019)",                            val: "$1B",            note: "Cash + Azure compute credits" },
      { item: "Tranche 3 (Jan 2023)",                            val: "~$10B est.",     note: "Multi-year, multi-billion (FT, Bloomberg estimates)" },
      { item: "Capped-profit interest share",                    val: "49%",            note: "Of OpenAI LP profits up to the cap",                   accent: true },
      { item: "Profit cap (theoretical ceiling)",                val: "~$1.3T",         note: "$13B × ~100; residual reverts to non-profit",           accent: true },
      { item: "OpenAI estimated valuation (2023)",               val: "~$86B",          note: "2023 tender offer reference" },
      { item: "OpenAI estimated valuation (2024)",               val: "~$157B",         note: "Late-2024 round" },
      { item: "OpenAI estimated valuation (2025 rumored)",       val: "$300B+",         note: "2025 press reporting" },
      { item: "Microsoft AI infrastructure cumulative",          val: "$50B+",          note: "Largely OpenAI workload support and Azure expansion",  accent: true },
      { item: "Microsoft market cap (Jan 2023 → year-end 2024)", val: "$1.8T → $3.3T",  note: "Market pricing-in of this deal and Copilot adoption" },
    ],
    disclaimer: "Note: OpenAI is a private company with limited disclosure. Figures are based on press reports, tender offer references, and industry estimates. The 100x cap is sourced to the March 2019 OpenAI blog post announcing OpenAI LP; the $1.3T theoretical ceiling applies that multiple to cumulative commitments.",
  },

  rationale: {
    buyer: {
      title: "Microsoft, Why a Capped Profit Interest, Not Equity",
      initials: "MSFT",
      bg: "bg-blue-600",
      points: [
        "[Direct capture of Azure revenue] OpenAI's full training and inference workloads run on Azure, converting OpenAI's compute spend directly into Microsoft revenue. Functionally a closed-loop capital arrangement: Microsoft provides compute credits and books the corresponding revenue. Azure AI revenue alone reportedly reached a $10B+ annual run rate in 2024.",
        "[OpenAI models across Microsoft Copilot] Bing Chat, Office Copilot, GitHub Copilot, Windows Copilot, Dynamics, and Security Copilot all rely on OpenAI models under a broad license. Replicating that coverage with internal models would require multiple additional years and tens of billions of incremental R&D.",
        "[Why not equity: regulatory and governance positioning] An equity acquisition of OpenAI Inc would have immediately triggered [non-profit-to-for-profit conversion and antitrust] concerns. A capped-profit interest creates the formal distance of [we are not shareholders, we are LP profit recipients] while substantive influence is preserved through the 49% interest and compute dependency.",
        "[100x cap as downside protection] The $13B investment is recoverable up to ~$1.3T; the upside is open to roughly 100x. Even in adverse scenarios, OpenAI's compute lock-in keeps Azure revenue intact. Unlike a conventional VC bet, [compute capture functions as a downside-protection layer].",
        "[Governance influence without a board seat] The November 2023 Altman saga demonstrated, in real time, that without a formal board seat Microsoft can still exercise effective decision-making through [compute lock-in + talent recruitment optionality + capital dependency]. The July 2024 observer-seat resignation balances [formal governance retreat] against [retained substantive influence].",
        "[First-mover in the template for next-generation AI capital deals] Every subsequent major AI capital deal, Google × Anthropic, Amazon × Anthropic, NVIDIA × Inflection / Mistral, is a variant of this structure. Microsoft set the template and gained negotiating leverage for future rounds.",
      ],
    },
    seller: {
      title: "OpenAI, Why a Capped Profit LP, and Why Microsoft",
      initials: "OAI",
      bg: "bg-emerald-700",
      points: [
        "[Mission preservation with capital access] A pure non-profit could not fund GPT-3 training. A conventional for-profit conversion would compromise the [\"benefit of all humanity\"] mission. The Capped Profit Company structure was a deliberate compromise, take in LP capital, cap returns at ~100x, and channel residual profit back to the non-profit parent.",
        "[Azure compute is the decisive value layer] The deal is not cash alone. Microsoft built [dedicated supercomputing clusters on Azure to support GPT-3 / GPT-4 training] on demand. No other hyperscaler (AWS, GCP) could match that delivery cadence at the moment of negotiation.",
        "[Two-edged exclusivity] Exclusive Azure access provided short-term execution capacity but created long-term [dependence on Microsoft]. This dependence is the proximate cause of OpenAI's 2024~2025 compute diversification talks with Oracle, CoreWeave, and sovereign clouds (UAE G42 and others).",
        "[Preserving formal governance autonomy] By not granting a Microsoft board seat, OpenAI Inc retained formal authority over mission, safety, and AGI definition. The November 2023 saga showed both the use and the limits of that autonomy.",
        "[A tender market for employee profit interests] The Capped Profit LP structure enabled tender offers on employee options and profit interests (2023 at $86B, 2024 at $157B, 2025 rumored at $300B). Without the structure, employee compensation at this scale would not have been possible.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "Seven years on, the assessment splits cleanly along buyer and seller axes. From the Microsoft perspective, this transaction is widely described as the single largest value-creation event of the AI era, OpenAI models embedded across Bing, Office, GitHub, Windows, and Dynamics; market cap expanded from ~$1.8T in January 2023 to ~$3.5T by late 2025; Azure AI revenue at a $10B+ annual run rate. From the OpenAI perspective, three pressures now operate in parallel: [for-profit conversion pressure + Microsoft renegotiation + compute dependency]. In 2024~2025, OpenAI formally evaluated converting to a Public Benefit Corporation, with the core negotiation question being [how to convert Microsoft's capped-profit interest into a conventional equity stake]. OpenAI simultaneously entered compute diversification talks with Oracle, CoreWeave, and UAE G42, creating cracks in the [exclusive] dimension of the Azure arrangement. On the antitrust front, the UK CMA investigated the relationship in 2024~2025 (assessing whether it constitutes a merger), with parallel reviews at the EU and the U.S. FTC. Microsoft's voluntary resignation of the OpenAI observer seat in July 2024 was the first visible result of that pressure. The Altman saga of November 2023 demonstrated that governance influence can operate without a board seat, but it also exposed market vulnerability when the non-profit board's formal authority is actually exercised (Microsoft shares dropped temporarily during the 96 hours). Heading into mid-2026, two characterizations of the deal coexist: [the most sophisticated strategic investment in modern AI] and [a structure likely to be partly renegotiated within five years].",
    overallVerdict: "Near-perfect deal from Microsoft's perspective; partial renegotiation pressure from OpenAI's side. The structure itself is now the AI industry's reference template, but partial rework within five years appears likely.",
    positives: [
      "[Microsoft] Azure AI revenue at $10B+ annual run rate; market cap expansion from $1.8T to ~$3.5T. The single largest value-creation event of the AI era from one transaction",
      "[OpenAI] ChatGPT MAU 500M+, 2025 revenue run rate ~$10B; dominant user base relative to Anthropic and Google's Gemini",
      "[Capped Profit structure itself] First demonstration that an AI model lab can simultaneously preserve a non-profit mission and access major capital. Structural reference for Anthropic, xAI, and subsequent deals",
      "[Azure $50B+ AI infrastructure] OpenAI workload support feeds back into Microsoft's overall AI infrastructure advantage and cloud market share",
      "[Altman saga 96-hour demonstration] Empirical proof that without a board seat, [compute + talent + capital] lock-in still enables effective governance influence",
    ],
    risks: [
      "[Renegotiation pressure during OpenAI's for-profit conversion] If OpenAI converts to a Public Benefit Corporation, the capped-profit interest must convert to conventional equity. The conversion ratio (49% profit interest → what percentage of common equity) is the central negotiation variable, with the balance still uncertain",
      "[Erosion of Azure exclusivity] OpenAI's 2024~2025 compute diversification with Oracle, CoreWeave, and UAE G42 may convert the exclusivity from [exclusive] to [right of first refusal / first offer]",
      "[Antitrust review underway] The UK CMA's 2024~2025 review of whether this constitutes a merger remains active; the EU and FTC continue parallel reviews. The observer-seat resignation was the first visible result of that pressure",
      "[Microsoft's model dependency] If GPT-5 and successors are rated at par or below Anthropic Claude and Google Gemini, Microsoft Copilot's user retention risk increases",
      "[Non-profit board authority exposed by the Altman saga] If OpenAI Inc's board exercises mission authority again, the limits of Microsoft's influence may re-emerge. The 96-hour episode of November 2023 indicated the latent fracture line",
      "[The AGI definition clause as a hidden trigger] Reports indicate the contract contains an [\"if OpenAI Inc's board declares AGI, Microsoft's rights are reduced or terminated\"] clause. The definition of AGI itself becomes a latent dispute trigger",
    ],
    editorNote:
      "The market shorthand [\"Microsoft owns 49% of OpenAI\"] is structurally wrong. The actual instrument is a [49% capped-profit interest in OpenAI LP, with a ~100x cap, beyond which residual profits revert to the non-profit parent]. The real significance of this deal is the first-ever packaging of [cash + compute + governance influence + non-profit mission preservation] into a single transaction. It is the structural starting point of an industry in which AI model labs are tied at the capital layer to a single hyperscaler, and the reference point for subsequent capital deals (Google × Anthropic, Amazon × Anthropic, NVIDIA × Inflection / Mistral). It is also clearly not permanent. With OpenAI's for-profit conversion review, erosion of Azure exclusivity, and active antitrust review in 2024~2026, partial rework within five years appears likely. This deal will be remembered both as the [standard-setter for the most sophisticated AI strategic investment] and as the [first such structure to enter renegotiation of itself after becoming the industry standard]., Reviewed as of May 2026.",
  },

  tombstone: {
    acquirerInitials: "MSFT",
    acquirerBg: "bg-blue-600",
    targetInitials: "OAI",
    targetBg: "bg-emerald-700",
    acquirerName: "Microsoft Corporation",
    targetName: "OpenAI (OpenAI Inc + OpenAI LP)",
    dealTitle: "Capped Profit Interest in OpenAI LP, Not Equity, the Most Sophisticated Modern AI Investment Structure",
    dealSize: "~$13B+ cumulative",
    dealSizeUSD: "approx. USD 13B+ cumulative (2019~2023)",
    evEbitda: "N/A (Capped Profit Interest)",
    closeDate: "Jan 23, 2023 (latest multi-year, multi-billion extension announced)",
  },

  sources: [
    { id: 1, text: "Microsoft official blog, OpenAI and Microsoft extend partnership (Jan 23, 2023)", url: "https://blogs.microsoft.com/blog/2023/01/23/microsoftandopenaiextendpartnership/" },
    { id: 2, text: "Microsoft official news, OpenAI forms exclusive computing partnership with Microsoft (Jul 22, 2019)", url: "https://news.microsoft.com/2019/07/22/openai-forms-exclusive-computing-partnership-with-microsoft-to-build-new-azure-ai-supercomputing-technologies/" },
    { id: 3, text: "OpenAI official blog, OpenAI LP (Mar 11, 2019, first disclosure of the Capped Profit structure)", url: "https://openai.com/index/openai-lp/" },
    { id: 4, text: "Financial Times, Microsoft pumps $10bn into ChatGPT maker OpenAI (Jan 23, 2023)", url: "https://www.ft.com/content/0c6d9ebd-c83a-4d97-bf1b-1d36e9ddbb38" },
    { id: 5, text: "Bloomberg, Microsoft Invests $10 Billion in OpenAI Maker of ChatGPT (Jan 23, 2023)", url: "https://www.bloomberg.com/news/articles/2023-01-23/microsoft-makes-multibillion-dollar-investment-in-openai" },
    { id: 6, text: "The New York Times, Inside the A.I. Race: How Microsoft Bet Big on OpenAI (Apr 16, 2023)", url: "https://www.nytimes.com/2023/04/16/technology/microsoft-openai-ai-race.html" },
    { id: 7, text: "Reuters, Microsoft drops OpenAI board observer seat amid antitrust scrutiny (Jul 10, 2024)", url: "https://www.reuters.com/technology/microsoft-drops-openai-board-observer-seat-2024-07-10/" },
    { id: 8, text: "UK Competition and Markets Authority, Microsoft / OpenAI partnership: investigation (2024)", url: "https://www.gov.uk/cma-cases/microsoft-slash-openai-partnership-merger-inquiry" },
    { id: 9, text: "The Information, How Microsoft Saved OpenAI, the 96-Hour Sam Altman Saga (Nov 2023)", url: "https://www.theinformation.com/articles/how-microsoft-saved-openai" },
    { id: 10, text: "Wall Street Journal, OpenAI Restructuring Talks with Microsoft on Capped Profit Terms (2024~2025)", url: "https://www.wsj.com/tech/ai/openai-microsoft-restructuring-capped-profit" },
  ],

  seo: {
    title: "Microsoft × OpenAI $13B+ Structured Investment, The Capped Profit Interest Explained",
    description:
      "Between 2019 and 2023, Microsoft committed roughly $13B+ to OpenAI in the most sophisticated strategic investment in modern AI. Not equity, but a 49% capped-profit interest in OpenAI LP, with a ~100x cap. Exclusive Azure cloud, multi-year compute commitment, governance influence without a board seat, the Sam Altman saga, UK CMA antitrust review, and ongoing renegotiation around OpenAI's for-profit conversion, all dissected here.",
    keywords: [
      "Microsoft OpenAI investment",
      "Capped Profit Interest",
      "OpenAI LP structure",
      "Microsoft 49% OpenAI",
      "Azure OpenAI exclusive",
      "Sam Altman firing saga",
      "OpenAI non-profit for-profit hybrid",
      "UK CMA Microsoft OpenAI",
      "AGI definition clause",
      "AI strategic investment structure",
      "Satya Nadella OpenAI",
    ],
  },

  concepts: [
    {
      term: "Capped Profit Interest",
      description: "A profit-sharing right with a defined cap, returns above the cap revert to the non-profit parent or another defined recipient. Here, Microsoft holds 49% of OpenAI LP profits up to approximately 100x its investment, after which residual profits revert to OpenAI Inc (non-profit).",
    },
    {
      term: "Non-Profit + Capped Profit LP Hybrid",
      description: "A structure in which a non-profit parent controls a for-profit subsidiary (Capped Profit LP) as the GP / managing member. Designed to combine mission preservation with capital access. OpenAI introduced this in 2019, with variants subsequently appearing in Anthropic's Public Benefit Corporation and others.",
    },
    {
      term: "Azure Compute Commitment",
      description: "Investment delivered through cloud compute credits and dedicated supercomputing infrastructure rather than cash. The central value layer of this transaction and a demonstration that, when training costs exceed single-company R&D budgets, [compute is capital].",
    },
    {
      term: "Sam Altman Saga (November 2023)",
      description: "Altman was fired by the OpenAI Inc non-profit board on November 17, 2023; within 96 hours, Microsoft announced his hire as head of a new AI research division and ~700 employees signed an open letter pledging to follow. Altman was reinstated and the board was reshuffled four days later. A real-time demonstration that governance influence can operate without a board seat.",
    },
    {
      term: "UK CMA AI Review",
      description: "From 2024, the UK Competition and Markets Authority has reviewed whether the Microsoft-OpenAI relationship constitutes a de facto merger via material influence. Parallel reviews are underway at the EU and U.S. FTC. Microsoft's July 2024 voluntary resignation of the OpenAI observer seat was the first visible result.",
    },
    {
      term: "Governance Without a Board Seat",
      description: "The exercise of effective decision-making authority without holding a formal board seat, through structural leverage such as compute lock-in, talent-recruitment optionality, and capital dependency. Microsoft's role during the Altman saga is the canonical case.",
    },
    {
      term: "Compute-as-Investment",
      description: "Cloud compute and dedicated infrastructure delivered with the same valuation status as cash. A new capital form that emerged at scale from 2019 onward, as AI training costs exploded. Microsoft's Azure compute credits in this deal are the first mega-case in which compute was treated as fungible with cash capital.",
    },
    {
      term: "OpenAI Restructuring (For-Profit Conversion Review)",
      description: "In 2024~2025, OpenAI began formally evaluating a transition from the Capped Profit LP structure to a Public Benefit Corporation or similar conventional for-profit form. Conversion of Microsoft's capped-profit interest into common equity is the central renegotiation issue.",
    },
  ],

  faq: [
    {
      q: "Is it accurate to say Microsoft owns 49% of OpenAI?",
      a: "No. Microsoft owns neither equity in OpenAI Inc (the non-profit parent) nor common equity in OpenAI LP (the for-profit subsidiary). Microsoft holds a [49% capped-profit interest in OpenAI LP], an asymmetric profit-sharing right. Up to approximately 100x its investment, Microsoft receives 49% of LP profits; beyond the cap, all residual profits revert to OpenAI Inc. A [49% equity stake] and a [49% capped-profit interest with a 100x cap] are structurally distinct, and that distinction is the core innovation of the transaction.",
    },
    {
      q: "Why did Microsoft take a capped-profit interest instead of conventional equity?",
      a: "Three reasons compound. First, mission preservation, an equity acquisition of OpenAI Inc would have immediately triggered a [non-profit-to-for-profit conversion]. Second, antitrust positioning, [\"we are not shareholders, we are LP profit recipients\"] creates formal distance that reduces, though does not eliminate, scrutiny from the UK CMA, the EU, and the U.S. FTC. Third, structural leverage from compute lock-in and talent-recruitment optionality already delivers de facto governance influence, conventional equity is not strictly necessary. The November 2023 Altman saga validated the third point in real time.",
    },
    {
      q: "What exactly does the 100x cap mean?",
      a: "Microsoft's theoretical recovery ceiling from OpenAI LP profits is roughly 100x its investment. Applied to ~$13B of cumulative commitments, that ceiling is approximately $1.3T. When OpenAI LP's distributed profits to Microsoft reach the cap, all subsequent residual profits revert to OpenAI Inc (the non-profit parent). The cap is the structural device that embeds OpenAI's [\"benefit of all humanity\"] mission directly into its capital structure, while leaving an upside large enough (and far enough away) to attract LP capital in the first place.",
    },
    {
      q: "What is the Azure exclusive cloud arrangement, and is it permanent?",
      a: "It is a separate commercial agreement under which OpenAI runs all model training and inference on Azure. Reporting suggests the multi-year arrangement extends into the early 2030s. It is not permanent. From 2024~2025, OpenAI has been in compute diversification talks with Oracle, CoreWeave, and sovereign clouds (UAE G42 and others), raising the prospect that the [exclusive] dimension migrates toward a [right of first refusal / first offer]. Microsoft has deployed $50B+ in AI infrastructure to OpenAI workloads, this compute lock-in functions as a downside-protection layer for the broader transaction.",
    },
    {
      q: "What was Microsoft's role in the November 2023 Sam Altman saga?",
      a: "On November 17, 2023, OpenAI Inc's non-profit board fired Altman. Within 96 hours, Satya Nadella publicly announced Microsoft would hire Altman to lead a new advanced AI research division, and ~700 OpenAI employees signed an open letter pledging to follow him to Microsoft if he was not reinstated. Within four days, Altman was reinstated and the board was reshuffled. Microsoft held no formal board seat, but the combination of [compute lock-in + the talent-recruitment card + capital dependency] effectively made Microsoft the decisive party. The episode is the canonical demonstration that governance influence can operate without a board seat.",
    },
    {
      q: "OpenAI is reviewing a for-profit conversion, how does Microsoft's relationship change?",
      a: "In 2024~2025, OpenAI began formally evaluating a transition from the Capped Profit LP to a Public Benefit Corporation or similar conventional for-profit structure. The central negotiation question is [how to convert Microsoft's 49% capped-profit interest into common equity]. The negotiation is not a simple translation, [conversion ratio + voting rights + future treatment of Azure exclusivity + preservation of the AGI clause] are bundled together. In parallel, UK CMA, EU, and U.S. FTC reviews remain active, meaning [too-large a Microsoft equity stake risks being classified as a de facto merger]. Microsoft's July 2024 voluntary observer-seat resignation was the first visible result of that pressure, and partial rework of the deal within five years appears likely.",
    },
  ],
};

export default deal;
