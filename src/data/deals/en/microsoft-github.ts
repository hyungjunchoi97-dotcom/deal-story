/**
 * Microsoft × GitHub Acquisition
 * Developer Ecosystem Play — $7.5B, Closed October 2018
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "microsoft-github",
  title: "Why Microsoft Paid $7.5 Billion for GitHub — Owning the Developer Ecosystem",
  subtitle: "28M Developer Platform · 30× ARR Premium · GitHub Copilot Turns Code Into Billions",
  category: "ma",
  industry: "Developer Platform / Code Hosting",
  country: "United States",
  announcedAt: "2018-06-04",
  closedAt: "2018-10-26",
  announcedDisplay: "June 2018",
  closedDisplay: "October 2018",
  readingMinutes: 11,
  tags: ["Microsoft", "GitHub", "Azure", "developer platform", "open source", "AI coding", "GitHub Copilot", "DevOps"],
  excerpt:
    "Microsoft acquired GitHub for $7.5B in an all-stock deal — the largest developer platform acquisition of its era. Under Satya Nadella's 'developer-first' strategy, the deal secured 28 million developers and an open-source ecosystem as the long-term foundation for Azure growth. Initially met with community backlash and a ~30× ARR premium that raised eyebrows, the acquisition was ultimately validated by GitHub Copilot's launch in 2022, which drove GitHub revenue to an estimated $1B+ annually.",

  acquirer: { initials: "MSFT", bg: "bg-blue-700", label: "Microsoft" },
  target: { initials: "GH", bg: "bg-gray-800", label: "GitHub" },

  background: [
    "Under Satya Nadella, Microsoft's core strategic shift was 'developer first.' The logic was clear: for Azure to grow, developers needed to build on Azure — and for that to happen, Microsoft needed to own the platform developers trusted most. GitHub was the developer's social network: code as LinkedIn, developers as the professional class. Securing a platform where 28 million developers and 85 million open-source projects lived meant owning the hub of the next generation software ecosystem.",
    "GitHub had grown independently since its 2012 Series A from Andreessen Horowitz ($100M), without raising additional outside capital. By 2017, however, internal culture conflicts following co-founder departures, rising competitive pressure from GitLab and Atlassian's Bitbucket, and the uncertainty of a standalone IPO led the board to explore a sale. Operating near breakeven, GitHub's independent growth trajectory carried material risk, and a partnership with a major platform was seen as the path to maximizing long-term value.",
    "Microsoft offered $7.5B entirely in MSFT stock — roughly a 30× premium to GitHub's estimated $250M ARR. At the announcement, the developer community reacted sharply: GitLab reported record signups as developers feared 'Microsoft would ruin GitHub.' Microsoft responded by appointing Nat Friedman (co-founder of Xamarin, which Microsoft had acquired in 2016) as the new CEO and committing to operate GitHub as an independent subsidiary.",
    "Following approvals from the U.S. DOJ and the European Commission, the deal closed on October 26, 2018. Under Friedman, GitHub launched GitHub Actions (CI/CD, 2019), GitHub Packages, and GitHub Codespaces, dramatically expanding the platform. In 2022, GitHub Copilot — an AI coding assistant built on OpenAI's GPT — was launched, establishing GitHub as the leading AI-powered developer tool and accelerating revenue to an estimated $1B+ annually by 2023.",
  ],

  dealSummary: {
    dealValueDisplay: "USD 7.5 Billion",
    acquirerName: "Microsoft Corporation",
    targetName: "GitHub, Inc.",
    announcedDisplay: "June 2018",
    closedDisplay: "October 2018",
    country: "United States",
  },

  executiveSummary: [
    "All-stock acquisition at $7.5B — Microsoft's third-largest deal historically (after LinkedIn and Activision Blizzard).",
    "Core rationale: 'developer-first' strategy — secure 28M developers and open-source ecosystem as the on-ramp to Azure.",
    "~30× estimated ARR premium — a bold bet on platform network effects over near-term financial returns.",
    "Nat Friedman appointed CEO; independent operation promised — community backlash neutralized.",
    "GitHub Copilot (2022): OpenAI-powered AI coding assistant → drives estimated $1B+ annual revenue by 2023.",
    "A defining case study in developer platform M&A — the long game from ARR multiple to AI monetization.",
  ],

  industryOverview: {
    body: "The global DevOps and code collaboration market was growing at 20%+ annually in 2018, driven by a surge in software developers and the proliferation of open-source development. Git-based version control had become the de facto standard, and GitHub hosted the majority of public repositories with an unrivaled network effect. In the cloud wars between Microsoft Azure, AWS, and Google Cloud, developer experience (DevEx) emerged as a primary differentiator — controlling the developer platform meant controlling the pipeline to cloud adoption.",
    metrics: [
      { label: "GitHub Registered Developers", value: "28 million", sub: "2018; largest globally" },
      { label: "Open Source Projects Hosted", value: "~85 million", sub: "GitHub public repositories" },
      { label: "Global DevOps Tools Market", value: "~$3.9B", sub: "2018; growing 20%+ YoY" },
      { label: "GitHub Estimated ARR", value: "~$250M", sub: "2018 estimate; primarily GitHub Enterprise" },
    ],
    subBody: "GitLab reported its highest-ever signup volumes in the days following the Microsoft-GitHub announcement, reflecting genuine developer anxiety about Microsoft's ownership. But GitHub's brand dominance, open-source network effects, and deep penetration in Fortune 500 GitHub Enterprise accounts represented a competitive moat that no rival could replicate quickly. The community concern proved manageable; the strategic asset was structurally irreplaceable.",
    players: [
      { name: "GitLab", role: "Open-source-friendly code collaboration platform; strong self-hosting optionality" },
      { name: "Atlassian Bitbucket", role: "Enterprise Git platform integrated with Jira and Confluence ecosystem" },
      { name: "AWS CodeCommit", role: "Git repository service within the AWS developer tools ecosystem" },
      { name: "Microsoft Azure DevOps (VSTS)", role: "Acquirer's existing enterprise DevOps platform" },
    ],
  },

  companyOverview: {
    targetName: "GitHub, Inc.",
    body: "Founded in 2008 by Tom Preston-Werner, Chris Wanstrath, and PJ Hyett, GitHub became the de facto standard hub for open-source development and collaborative coding built on Git. After raising $100M from Andreessen Horowitz in 2012, GitHub grew organically without further outside capital. Revenue was generated primarily from GitHub Enterprise (corporate subscriptions), GitHub Teams, and GitHub Marketplace, while public repositories remained free — a classic freemium model. At acquisition, GitHub hosted 85 million open-source projects and served 28 million registered developers, with an estimated ARR of ~$250M. Financially, GitHub was operating near breakeven, with modest EBITDA.",
    metrics: [
      { label: "Registered Developers", value: "28 million", sub: "at acquisition, 2018" },
      { label: "Estimated ARR", value: "~$250M", sub: "2018 estimate; GitHub Enterprise-led" },
      { label: "Open Source Projects", value: "~85 million", sub: "public repositories hosted" },
      { label: "Founded", value: "2008", sub: "Tom Preston-Werner and co-founders" },
      { label: "VC Funding", value: "$100M (2012)", sub: "Andreessen Horowitz Series A; no follow-on raises" },
    ],
    financials: [
      { year: "2016", revenue: 140, cogs: 40, grossProfit: 100, sga: 120, operatingIncome: -20, ebitda: -10 },
      { year: "2017", revenue: 200, cogs: 55, grossProfit: 145, sga: 160, operatingIncome: -15, ebitda: 0 },
      { year: "2018", revenue: 250, cogs: 65, grossProfit: 185, sga: 190, operatingIncome: -5, ebitda: 10 },
    ],
    financialsNote: "Revenue in USD millions. GitHub was a private company; all figures are industry estimates.",
    financialsCurrency: "USD",
    financialsUnit: "mn",
    revenueBreakdown: [
      { name: "GitHub Enterprise (corporate subscription)", pct: 70, color: "bg-gray-700", amt: "~$175M" },
      { name: "GitHub Teams / Individual Paid", pct: 20, color: "bg-gray-500", amt: "~$50M" },
      { name: "Marketplace & Other", pct: 10, color: "bg-gray-400", amt: "~$25M" },
    ],
  },

  dealStructure: {
    body: "Microsoft structured the deal as an all-stock acquisition, paying GitHub shareholders entirely in Microsoft (MSFT) common stock with no cash component. This meant zero cash outflow for Microsoft — effectively an exchange of Microsoft equity for GitHub's platform and developer base. The transaction required U.S. DOJ and EU regulatory clearance, which was received without material conditions. GitHub was never publicly listed; upon close on October 26, 2018, it became a wholly owned subsidiary of Microsoft. Nat Friedman was installed as CEO to maintain operational independence and signal continuity to the developer community.",
    preOwnership: {
      nodes: [
        { id: "github_private", label: "GitHub, Inc.", sub: "Private company (VC-backed)", type: "public" },
        { id: "msft_public", label: "Microsoft", sub: "NASDAQ-listed (MSFT)", type: "acquirer" },
      ],
      edges: [
        { from: "github_private", to: "msft_public", label: "independent operation" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "msft_parent", label: "Microsoft", sub: "NASDAQ-listed (MSFT)", type: "acquirer" },
        { id: "github_sub", label: "GitHub, Inc.", sub: "100% Microsoft subsidiary", type: "target" },
      ],
      edges: [
        { from: "msft_parent", to: "github_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "Total Deal Value (EV)", value: "USD 7.5 Billion", accent: true },
      { label: "Transaction Type", value: "All-Stock Acquisition (no cash)", accent: false },
      { label: "EV / Estimated ARR", value: "~30×", accent: true },
      { label: "EV / EBITDA", value: "N/M (near breakeven)", accent: false },
      { label: "Incoming CEO", value: "Nat Friedman (ex-Xamarin founder)", accent: false },
      { label: "Independent Operation", value: "Committed to independent subsidiary structure", accent: false },
      { label: "Regulatory Approvals", value: "U.S. DOJ + European Commission", accent: false },
      { label: "Close Date", value: "October 26, 2018", accent: false },
    ],
  },

  advisors: {
    body: "Both Microsoft and GitHub engaged top-tier financial and legal advisors. As a private company, GitHub's advisor disclosures were limited, but key firms were confirmed through press coverage and industry sources.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Acquirer Side (Microsoft)",
        initials: "MSFT",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor (FA)", roleType: "financial", note: "Lead financial advisor; deal structure and pricing" },
          { firm: "Simpson Thacher & Bartlett", role: "Legal Counsel", roleType: "legal", note: "M&A transaction counsel; regulatory clearance" },
        ],
      },
      {
        side: "target",
        sideLabel: "Target Side (GitHub)",
        initials: "GH",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Qatalyst Partners", role: "Financial Advisor (FA)", roleType: "financial", note: "Lead advisor to GitHub Board; technology M&A specialist boutique" },
          { firm: "Cooley LLP", role: "Legal Counsel", roleType: "legal", note: "M&A transaction counsel; investor and shareholder matters" },
        ],
      },
    ],
    disclaimer: "Advisor information is based on press reports and public sources. GitHub was a private company; full advisor disclosures may be incomplete.",
  },

  valuation: {
    body: "Microsoft paid approximately 30× GitHub's estimated 2018 ARR of $250M — a premium justified not by current earnings but by the platform's developer network effects and its strategic value as an Azure growth driver. GitHub was operating near EBITDA breakeven at close, so a traditional EV/EBITDA multiple was marginally applicable but not the primary valuation framework. The all-stock structure meant Microsoft was effectively exchanging its own equity — at near all-time-high valuations — for a developer platform asset whose worth was denominated in ecosystem reach, not reported earnings.",
    rows: [
      { item: "Total Deal EV", val: "$7.5B", note: "100% MSFT stock; no cash outflow", accent: true },
      { item: "Transaction Type", val: "All-Stock", note: "Microsoft shares exchanged for GitHub equity" },
      { item: "Estimated ARR (2018)", val: "~$250M", note: "GitHub Enterprise-led; industry estimate" },
      { item: "EV / Estimated ARR", val: "~30×", note: "Platform network effects premium", accent: true },
      { item: "2018 Estimated EBITDA", val: "~$10M", note: "Near breakeven; modest positive" },
      { item: "EV / EBITDA", val: "N/M (near breakeven)", note: "Not the primary valuation basis" },
      { item: "Registered Developers", val: "28 million", note: "World's largest code hosting platform" },
    ],
    disclaimer: "GitHub was a private company with no public financial disclosures. All valuation figures are based on industry estimates and press reporting.",
  },

  rationale: {
    buyer: {
      title: "Microsoft's Acquisition Rationale",
      initials: "MSFT",
      bg: "bg-blue-700",
      points: [
        "Developer ecosystem ownership — acquiring the platform used daily by 28 million developers creates a direct pipeline from development workflows to Azure adoption.",
        "Azure growth accelerant — GitHub users naturally connect to Azure DevOps, Azure Pipelines, and Azure cloud services, shortening the distance between code and cloud deployment.",
        "Open-source strategy completion — from 'open source enemy' to 'open source home': GitHub acquisition symbolized Microsoft's complete strategic repositioning in the developer community.",
        "Enterprise DevOps moat — combining GitHub Enterprise with Azure DevOps gives Microsoft end-to-end ownership of the enterprise development pipeline.",
        "AI training data asset — billions of code repositories represent a uniquely valuable dataset for training AI models, a strategic asset whose value only became apparent after the GPT era.",
      ],
    },
    seller: {
      title: "GitHub's Rationale for Selling",
      initials: "GH",
      bg: "bg-gray-800",
      points: [
        "Certainty over standalone IPO risk — near breakeven, with growing competitive pressure, the $7.5B all-stock offer provided clear value realization over the uncertainty of an independent listing.",
        "Resource access — Microsoft's global infrastructure, engineering resources, and enterprise sales channels could accelerate GitHub's growth beyond what was achievable independently.",
        "Independent operation commitment secured — the Nat Friedman appointment and independence pledge gave the team confidence that GitHub's culture and brand would be protected.",
        "Competitive response — GitLab's rapid growth and Bitbucket's Atlassian integration integration required resources that independent GitHub was stretched to match.",
        "Founder and investor liquidity — Andreessen Horowitz and other early investors could realize returns on a long-term position through the stock deal.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Following the October 2018 close, GitHub operated as an independent subsidiary under Nat Friedman's leadership. GitHub Actions (CI/CD) launched in 2019, dramatically expanding GitHub's role in the development workflow beyond code hosting. GitHub Codespaces (cloud development environments) followed in 2020. The defining milestone came in 2022 with GitHub Copilot — an AI coding assistant built on OpenAI's Codex, trained on GitHub's vast repository of public code. Copilot's monthly subscription model (individual and enterprise tiers) drove a step-change in GitHub revenue. By 2023, GitHub's estimated annual revenue exceeded $1B, roughly 4× its ARR at acquisition. Developer community concerns about Microsoft's ownership had largely dissipated, replaced by recognition of Microsoft as a major open-source contributor.",
    overallVerdict: "One of Microsoft's most successful acquisitions — GitHub Copilot delivers compelling ROI validation",
    positives: [
      "GitHub Actions (2019) — Successfully entered the CI/CD market, making GitHub an end-to-end development platform.",
      "GitHub Copilot (2022) — OpenAI GPT-based AI coding assistant at $10–$19/month individual and $39/seat enterprise pricing; explosive enterprise adoption.",
      "Revenue growth to $1B+ (2023 estimate) — roughly 4× the ~$250M ARR at acquisition.",
      "Open-source community trust restored — Microsoft's .NET open-sourcing, VS Code, and Azure SDK contributions reinforced the GitHub independence narrative.",
      "Azure DevOps integration — GitHub + Azure Pipelines creates seamless enterprise development-to-deployment pipeline.",
    ],
    risks: [
      "AI coding tool commoditization — Post-Copilot, AI coding assistants proliferated rapidly (Cursor, Windsurf, JetBrains AI Assistant, open-source alternatives).",
      "Copilot's technical edge durability — Unclear whether GitHub's training data moat remains durable as competitors build comparable models.",
      "Developer community trust fragility — Any Microsoft strategic pivot could reignite community concerns about independence.",
      "Code copyright litigation — GitHub Copilot faces ongoing lawsuits over training on public repository code without explicit creator consent.",
    ],
    editorNote: "The Microsoft-GitHub acquisition is textbook proof that platform strategy beats financial multiples as a deal evaluation framework. The 30× ARR premium looked aggressive in 2018; GitHub Copilot validated it comprehensively by 2023. More importantly, GitHub's 85 million code repositories became the training data foundation for one of the most commercially successful AI products in enterprise software. This deal demonstrates that the most valuable M&A targets are often those whose assets are not yet visible on a P&L — in this case, billions of lines of human-written code that would power the AI coding revolution.",
  },

  tombstone: {
    acquirerInitials: "MSFT",
    acquirerBg: "bg-blue-700",
    targetInitials: "GH",
    targetBg: "bg-gray-800",
    acquirerName: "Microsoft Corporation",
    targetName: "GitHub, Inc.",
    dealTitle: "All-Stock Acquisition",
    dealSize: "USD 7.5 Billion",
    dealSizeUSD: "USD 7.5 Billion",
    evEbitda: "N/M (near breakeven; ~30× est. ARR)",
    closeDate: "Oct 2018",
  },

  sources: [
    { id: 1, text: "Microsoft Press Release — Microsoft to Acquire GitHub for $7.5 Billion (June 2018)", url: "https://news.microsoft.com" },
    { id: 2, text: "GitHub Blog — A Bright Future for GitHub (June 2018)", url: "https://github.blog" },
    { id: 3, text: "Microsoft FY2019 Annual Report — GitHub Acquisition Integration Update", url: "https://investor.microsoft.com" },
    { id: 4, text: "GitHub Blog — GitHub Actions: Now Available (October 2019)", url: "https://github.blog" },
    { id: 5, text: "GitHub Blog — Introducing GitHub Copilot (June 2021)", url: "https://github.blog" },
    { id: 6, text: "Bloomberg — Microsoft Acquires GitHub for $7.5 Billion, Winning the Developer Community (June 2018)" },
    { id: 7, text: "The Wall Street Journal — Microsoft's GitHub Bet: A Developer Platform Play (June 2018)" },
    { id: 8, text: "Forbes — GitHub Revenue Tops $1 Billion as Microsoft's AI Strategy Pays Off (2023)" },
    { id: 9, text: "Reuters — GitLab Reports Record Signups Following Microsoft-GitHub Deal (June 2018)" },
  ],

  seo: {
    title: "Microsoft GitHub $7.5B Acquisition — Developer Platform M&A Deep Dive | Deal Story",
    description: "Full analysis of Microsoft's $7.5B acquisition of GitHub. Developer ecosystem strategy, 30× ARR premium rationale, GitHub Copilot AI monetization, and post-deal ROI assessment.",
    keywords: [
      "Microsoft GitHub acquisition",
      "GitHub $7.5 billion deal",
      "GitHub Copilot monetization",
      "developer platform M&A",
      "Azure developer ecosystem",
      "ARR multiple acquisition",
      "Microsoft open source strategy",
      "GitHub enterprise value",
      "AI coding assistant",
      "GitHub deal analysis",
    ],
  },

  concepts: [
    { term: "Platform Strategy", href: "/deal-101/platform-strategy", description: "Developer platform network effects — owning the hub where 28M developers work daily creates a direct pipeline to Azure adoption and AI product monetization." },
    { term: "ARR Multiple", href: "/deal-101/arr-multiple", description: "Enterprise value divided by annual recurring revenue — the primary valuation lens for this deal, at approximately 30× estimated ARR." },
    { term: "Strategic M&A", href: "/deal-101/strategic-ma", description: "Acquiring for ecosystem access and long-term competitive positioning rather than near-term financial returns — the defining characteristic of the GitHub deal." },
    { term: "Subscription Economy", href: "/deal-101/subscription-economy", description: "GitHub Copilot's recurring subscription model transforms a free-to-use developer platform into a high-margin AI subscription business." },
  ],

  faq: [
    {
      q: "Why did Microsoft pay $7.5 billion for GitHub?",
      a: "Microsoft's core thesis under Satya Nadella was 'developer first': Azure's growth depended on developers building on Azure, and for that to happen, Microsoft needed to own the platform where developers worked daily. GitHub hosted 28 million developers and 85 million open-source projects — the world's most important code collaboration hub. By owning GitHub, Microsoft could create natural pathways from development workflows into Azure DevOps, Azure Pipelines, and cloud deployment, while signaling a fundamental commitment to the open-source community that had historically been skeptical of Microsoft.",
    },
    {
      q: "How did developers react when Microsoft acquired GitHub?",
      a: "The initial reaction was sharply negative. GitLab reported record-breaking signup volumes in the days following the announcement as developers feared Microsoft would commercialize or restrict GitHub. Microsoft moved quickly to appoint Nat Friedman — the co-founder of Xamarin, a well-regarded developer tools company Microsoft had previously acquired — as the new CEO, and committed to operating GitHub as an independent subsidiary with its own brand and culture. Over the following years, Microsoft's open-source contributions (.NET, VS Code, Azure SDKs) and GitHub's product improvements largely neutralized the community concern.",
    },
    {
      q: "What is GitHub Copilot and why does it matter?",
      a: "GitHub Copilot is an AI coding assistant launched in 2022, built on OpenAI's Codex (and later GPT-4) and trained on GitHub's vast public repository dataset. It suggests code completions, generates functions, and writes tests directly inside code editors. It is available at $10–$19/month for individuals and $39/seat/month for enterprises. Because it was trained on GitHub's unique dataset of billions of lines of human-written code — a dataset only GitHub could provide — it is the clearest validation of the acquisition thesis. By 2023, it was contributing meaningfully to GitHub's estimated $1B+ annual revenue.",
    },
    {
      q: "Was the $7.5B price justified?",
      a: "In retrospect, yes — largely because of GitHub Copilot. At the time of the deal, the ~30× ARR multiple was seen as aggressive for a company generating $250M in revenue at near breakeven. But the GitHub deal was never really about paying 30× ARR — it was about acquiring the world's largest code repository and developer network, which turned out to be the foundational training data and distribution channel for AI-era coding tools. GitHub Copilot's revenue contribution by 2023 makes the $7.5B look compelling in hindsight.",
    },
    {
      q: "What does an all-stock acquisition mean for both sides?",
      a: "In an all-stock deal, the acquirer pays entirely with its own shares rather than cash. For Microsoft, this meant no cash outflow — it effectively exchanged newly issued MSFT shares for GitHub's equity. For GitHub shareholders (primarily employees and Andreessen Horowitz), they received MSFT stock, meaning they retained upside exposure to Microsoft's future performance. Given that Microsoft's stock appreciated significantly after 2018 — driven in part by Azure growth and AI strategy (including GitHub Copilot) — the all-stock structure turned out to be highly favorable for GitHub's former shareholders.",
    },
    {
      q: "Did GitHub maintain its independence under Microsoft?",
      a: "Largely yes, by design. GitHub has operated as an independent subsidiary with its own brand, CEO, and product roadmap. Leadership succession (Nat Friedman 2018–2021, Thomas Dohmke 2021–present) has remained independent from Microsoft's core executive structure. Free tiers have been maintained and expanded. Open-source projects remain hosted at no cost. The main integration has been deepening connectivity with Azure services and aligning with Microsoft's AI strategy (GitHub Copilot), which has been strategically consistent rather than culturally disruptive. GitHub's developer community perception has shifted from skepticism to general acceptance.",
    },
  ],
};

export default deal;
