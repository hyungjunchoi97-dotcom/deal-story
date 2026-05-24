"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ── Animation helper ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── Color map ────────────────────────────────────────────────────
const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── Five core CDD workstreams ────────────────────────────────────
const CHECK_ITEMS = [
  {
    num: "01",
    title: "Market Sizing & Growth Validation",
    subtitle: "Market Sizing",
    color: "blue",
    description: "Cross-check the TAM/SAM/SOM figures in the IM against independent third-party research. Sellers routinely overstate addressable markets to make their share appear reasonable.",
    items: [
      { label: "TAM/SAM/SOM Realism", desc: "Benchmark the IM's market size figures against Gartner, IDC, or sector-specific research. A common pattern: sellers define TAM broadly so that a modest SOM sounds compelling." },
      { label: "Growth Driver Durability", desc: "Distinguish structural growth (demographic shifts, regulatory tailwinds, technology transition) from cyclical or one-time growth (COVID demand surge, temporary regulation). Projecting temporary growth as permanent is one of the most common valuation mistakes." },
      { label: "Market Cycle Position", desc: "Is the market in growth, maturity, or decline? Applying a growth-stage multiple to a mature market means overpaying from day one." },
    ],
    insight: "The IM always defines TAM broadly to make the SOM look reasonable. CDD's first job is to redefine the actual competitive market the target operates in — then size it.",
  },
  {
    num: "02",
    title: "Competitive Landscape Analysis",
    subtitle: "Competitive Landscape",
    color: "violet",
    description: "Assess whether the target's competitive moat is durable, and whether new entrants, substitutes, or expanding rivals could erode it during the holding period.",
    items: [
      { label: "Market Share Trends", desc: "Track the top players' share movements over the past three to five years. Is the target defending its position or slowly losing ground?" },
      { label: "Barriers to Entry", desc: "How real are the barriers — regulation, patents, brand, network effects, switching costs? Low barriers mean competitive intensity can increase sharply within the holding period." },
      { label: "Substitution Risk", desc: "Can technology shifts (AI, digitalization), channel changes (D2C, online), or business-model innovation make the target's product or service unnecessary?" },
      { label: "Sustainable Competitive Moat", desc: "Identify which moat type applies — cost advantage, brand, switching costs, network effects, or economies of scale. Then assess whether that moat is widening or narrowing." },
    ],
    insight: "The competitive landscape is a movie, not a photograph. 'Currently #1' is less important than 'will they still be #1 in five years, and why?'",
  },
  {
    num: "03",
    title: "Customer Analysis",
    subtitle: "Customer Analysis",
    color: "amber",
    description: "How stable, diversified, and loyal is the customer base? Customer concentration risk is one of the most frequently identified CDD findings.",
    items: [
      { label: "Customer Concentration", desc: "If the top five customers account for 80% of revenue, losing a single relationship could devastate EBITDA. In PE deals, any single customer above 30% of revenue is a warning sign." },
      { label: "Churn Rate", desc: "Critical for SaaS, subscription, and B2B service businesses. An annual churn rate of 5% versus 20% produces dramatically different customer count trajectories after seven years. Review NRR (Net Revenue Retention) alongside gross churn." },
      { label: "NPS & Contract Renewal Rate", desc: "Net Promoter Score is a leading indicator of future churn. What is the renewal rate? Are prices held, raised, or discounted at renewal — and who drives that dynamic?" },
      { label: "Direct Customer Interviews", desc: "CDD teams conduct direct interviews with five to ten key customers. 'Will you continue using this vendor? What alternatives exist?' Interview findings that diverge from IM claims become powerful price-adjustment evidence." },
    ],
    insight: "Customer interviews reveal what no VDR document can show. A contract with three years remaining means nothing if the customer says they have no intention of renewing.",
  },
  {
    num: "04",
    title: "Revenue Quality Analysis",
    subtitle: "Revenue Quality",
    color: "rose",
    description: "Verify that current EBITDA is structurally repeatable. FDD checks the accuracy of the numbers. CDD asks whether those numbers can be reproduced in future years.",
    items: [
      { label: "Recurring vs. One-Time Revenue Mix", desc: "High recurring revenue (SaaS subscriptions, long-term contracts, MRO supply) means high EBITDA visibility. A heavy project or one-time revenue mix means volatile future earnings." },
      { label: "Contract Terms & Renewal Structure", desc: "Analyze the remaining-term distribution of major contracts. Is there a 'cliff risk' — many contracts expiring shortly after closing? Are auto-renewal clauses in place?" },
      { label: "Pricing Power", desc: "Can the target raise prices when costs rise? Review the actual price increase history over the past five years. Customers who do not resist price increases are the clearest signal of a genuine moat." },
      { label: "Revenue Pipeline Visibility", desc: "How predictable are the next 12–24 months of revenue? Examine backlog, pipeline conversion rates, and sales cycle length." },
    ],
    insight: "The past three years of financials in the IM may reflect a uniquely favorable environment. CDD must independently verify that those numbers are reproducible across the three-to-seven-year holding period — not just explainable in hindsight.",
  },
  {
    num: "05",
    title: "Forward-Looking Market Outlook",
    subtitle: "Forward-Looking Analysis",
    color: "emerald",
    description: "Stress-test the IM's growth assumptions against a realistic downside. Assess whether structural changes could materially impair the business during the holding period.",
    items: [
      { label: "Structural Disruption Risk", desc: "Is there a credible timeline on which digital transformation, AI adoption, e-commerce expansion, or supply chain shifts could threaten the current business model? 'Fine today, worrying in five years' is not a pass." },
      { label: "Regulatory Environment Changes", desc: "Anticipated shifts in ESG regulation, carbon pricing, data-privacy law, or antitrust enforcement — especially in financial services, pharma, energy, and food. What is the probability-weighted impact on EBITDA?" },
      { label: "Macro Cycle Sensitivity", desc: "How much do revenue and EBITDA fall in a rate-rising or recessionary environment? B2B services are relatively defensive; consumer discretionary, construction, and real estate are highly cyclical." },
      { label: "Bear Case Sensitivity on IM Assumptions", desc: "Run a scenario where growth comes in 20–30% below the IM's base case. How much does EBITDA fall, and what does that imply for EV at the assumed exit multiple?" },
    ],
    insight: "CDD is not a market analysis of today. It is a forecast of how the market will evolve over the holding period. The best-in-class CDD team models a genuinely independent bear case — not one calibrated to justify the LOI price.",
  },
];

// ── FDD vs CDD comparison ────────────────────────────────────────
const COMPARISON = [
  { category: "Core Question", fdd: "Are the numbers accurate?", cdd: "Will the business stay viable?" },
  { category: "Performed by", fdd: "Big Four accounting firm", cdd: "Strategy consulting firm (McKinsey, BCG, Bain, etc.)" },
  { category: "Key Output", fdd: "Quality of Earnings (QoE) report", cdd: "Market & business validation report" },
  { category: "Data Sources", fdd: "Financial statements, VDR documents", cdd: "Third-party research, customer & expert interviews" },
  { category: "Price Impact", fdd: "Direct (EBITDA adjustment → price adjustment)", cdd: "Indirect (validates EBITDA sustainability)" },
  { category: "Time Horizon", fdd: "Past 3–5 years of performance", cdd: "Next 3–7 years of sustainability" },
];

// ── Stakeholders ─────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "Strategy Consulting CDD Team",
    color: "blue",
    responsibility: "Leads market analysis, expert interviews, and customer interviews. Engages McKinsey, BCG, Bain, or a sector-specialist research firm. Maintaining independence from the deal team is critical to producing unbiased findings.",
  },
  {
    role: "Buyer's Strategy Team",
    color: "violet",
    responsibility: "Uses CDD findings to validate or challenge LOI assumptions in internal investment committee (IC) presentations. Significant divergence from IM projections becomes the basis for price renegotiation.",
  },
  {
    role: "Subject Matter Experts (SMEs)",
    color: "amber",
    responsibility: "Former industry executives or consultants with deep sector knowledge. Engaged by the CDD team as external advisors to validate on-the-ground market dynamics that desk research cannot capture.",
  },
  {
    role: "Seller's Sales & Commercial Team",
    color: "rose",
    responsibility: "Provides (limited) customer information and contract details. Customer interview targets are often coordinated through the seller — which is why maintaining CDD team independence throughout is essential.",
  },
];

// ── Case studies ─────────────────────────────────────────────────
const CASES = [
  {
    title: "The E-Commerce Disruption Nobody Modeled",
    company: "MBK Partners × Homeplus",
    year: "2015",
    type: "CDD Failure",
    typeColor: "rose",
    slug: "mbk-homeplus",
    analogy: "You checked whether the shop was doing good business today — but didn't verify that a massive online shopping platform was about to make the entire street irrelevant.",
    paragraphs: [
      "In 2015, MBK Partners acquired Homeplus from Tesco UK for approximately ₩7.2 trillion — the largest retail PE transaction in Asian history at the time. The deal used aggressive LBO leverage, with MBK subsequently executing a Sale & Leaseback to recover over ₩4 trillion in cash.",
      "The structural warning sign was already visible in the data: Korean e-commerce was growing at 20–30% per year. Coupang launched Rocket Delivery in 2014. The secular decline of large-format offline retail was a foreseeable trend, not a surprise.",
      "Had the CDD bear case explicitly modeled how much offline grocery market share would shrink over a five-to-seven-year holding period, and what that meant for Homeplus EBITDA, the deal structure and price would likely have been different.",
      "In March 2025, Homeplus filed for court receivership. The combination of e-commerce-driven revenue declines and the fixed-cost burden created by the Sale & Leaseback proved fatal.",
    ],
    lesson: "CDD must analyze not the market today, but the market over the holding period. When a structural shift (e-commerce, AI, decarbonization) has a timeline that overlaps with the holding period, that scenario belongs in the base case, not the bear case.",
  },
  {
    title: "Misreading the Business Model",
    company: "HP × Autonomy",
    year: "2011",
    type: "CDD Failure",
    typeColor: "rose",
    slug: null,
    analogy: "The seller called it a software company — but it was actually selling hardware bundled into the deal. CDD missed the fundamental nature of the business model.",
    paragraphs: [
      "In 2011, HP acquired UK enterprise software company Autonomy for approximately $10.3 billion — a substantial premium to market comparables. HP's thesis was that Autonomy's search and analytics capabilities would accelerate its cloud strategy.",
      "Less than a year after closing, HP recorded an $8.8 billion impairment charge. HP alleged that Autonomy had misclassified hardware revenue as software revenue. The actual revenue mix included material low-margin hardware and services, not a pure-play software stack.",
      "A rigorous CDD process that independently decomposed Autonomy's revenue into product, service, hardware, and software components — rather than accepting the 'enterprise software' label — would have arrived at a very different conclusion about appropriate valuation multiples.",
    ],
    lesson: "Revenue composition — the split between product, service, hardware, and software — must be independently verified in CDD, not taken at face value from the IM. A label like 'software company' is a starting hypothesis, not a fact.",
  },
  {
    title: "The Warning Was There — But Ignored",
    company: "WeWork IPO Attempt",
    year: "2019",
    type: "Independence Failure",
    typeColor: "amber",
    slug: null,
    analogy: "The doctor said the patient wasn't healthy. The investors said 'we can fix that' — and ignored the diagnosis.",
    paragraphs: [
      "In WeWork's IPO preparation process, multiple analysts and internal diligence teams flagged the intensifying competition in co-working, WeWork's lack of a sustainable competitive moat, and the company's exposure to real estate cycles. Under the $47 billion valuation target, those warnings were suppressed.",
      "After the S-1 filing in August 2019, external investors effectively performed their own CDD and reached the same conclusion the internal teams had already reached: 'This is not a tech company — it is a short-term commercial real estate operator.' Appropriate multiples collapsed from SaaS 25–30× to real estate 8–12×.",
      "The IPO was pulled. WeWork accepted a $1.7 billion restructuring package from SoftBank. The company filed for bankruptcy in 2023.",
    ],
    lesson: "CDD independence determines the credibility of CDD findings. When the team conducting due diligence has a financial stake in the deal closing, warning signals get minimized. An independent CDD team must be able to conclude 'this deal does not work at this price' — and that conclusion must be heard.",
  },
];

// ── Related concepts ─────────────────────────────────────────────
const RELATED = [
  { href: "/en/deal-101/fdd", title: "FDD (Financial Due Diligence)", desc: "Verifies the accuracy of the numbers — the other pillar of due diligence alongside CDD", badge: "Due Diligence" },
  { href: "/en/deal-101/ldd", title: "LDD (Legal Due Diligence)", desc: "Uncovers contract, IP, litigation, and regulatory risk before the deal closes", badge: "Due Diligence" },
  { href: "/en/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "CDD-validated EBITDA sustainability becomes the foundation of any price adjustment argument", badge: "Valuation" },
  { href: "/en/deal-101/ma-process", title: "M&A Process", desc: "CDD is executed during Phase 4 — the due diligence phase", badge: "Process" },
];

export default function CddClientEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/en/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">CDD</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              Due Diligence
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              CDD (Commercial Due Diligence)
              <span className="block text-lg sm:text-xl font-semibold text-gray-500 dark:text-gray-400 mt-1">
                — Is the Business Actually Sustainable?
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              FDD asks "are the numbers accurate?" CDD asks "can those numbers be reproduced in the future?"
              Market sizing, competitive dynamics, customer analysis, revenue quality, and forward-looking outlook —
              five core workstreams and three case studies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CHECK_ITEMS.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <a key={item.num} href={`#check-${item.num}`} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {item.num}. {item.subtitle}
                  </a>
                );
              })}
              <a href="#cases" className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Case Studies
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Section 1: What is CDD ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">What Is CDD?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                M&A due diligence has several workstreams. Financial Due Diligence (FDD) verifies whether "past numbers are accurate."
                Legal Due Diligence (LDD) checks whether "legal risks are under control." What does CDD — Commercial Due Diligence — verify?
              </p>
              <p>
                CDD asks: <strong className="text-gray-800 dark:text-gray-200">"Will this business remain viable going forward?"</strong>
                More specifically: Are the growth assumptions in the IM realistic? Will the market keep growing during the holding period?
                Can competitors take market share? Will key customers stay? Is today's EBITDA structurally reproducible three to five years from now?
              </p>
              <p>
                CDD is typically performed by strategy consulting firms like McKinsey, BCG, or Bain, or by sector-specialist research houses.
                While the FDD team works through the VDR's financial documents, the CDD team operates externally — directly investigating the market, customers, and competitors.
              </p>
            </div>

            <div className="mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                When buying a house, FDD checks the condition of the property itself — the finishes, whether there is any water damage,
                the structural integrity. CDD checks the neighborhood: Is this area going to appreciate or decline?
                Is a waste facility being built next door? What are the local development plans?
                Even a perfectly maintained house is a bad investment if the neighborhood is in decline.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Questions</p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed space-y-1 mt-1">
                <li>• Are the growth assumptions in the IM realistic?</li>
                <li>• Will the market keep growing through the PE holding period (3–7 years)?</li>
                <li>• Is there a credible risk of competitors taking market share?</li>
                <li>• Are there signs that key customers might churn?</li>
                <li>• Is today's EBITDA structurally reproducible going forward?</li>
              </ul>
            </div>
          </motion.section>

          {/* ── Section 2: Five core workstreams ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Five Core CDD Workstreams</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                The emphasis varies by sector, but these five areas are non-negotiable in any CDD process.
              </p>
            </motion.div>

            <div className="space-y-10">
              {CHECK_ITEMS.map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <motion.div
                    key={item.num}
                    id={`check-${item.num}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className={`rounded-xl border ${c.border} ${c.bg} p-5 mb-4`}>
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <span className={`text-xs font-bold ${c.text}`}>{item.num}</span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">{item.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>

                    <div className="space-y-2 mb-4">
                      {item.items.map((sub, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                          <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{sub.label}</span>
                            <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{item.insight}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Section 3: FDD vs CDD ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">FDD vs CDD — What Is the Difference?</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              The two workstreams run in parallel but independently. Their combined findings feed into the final price and negotiation strategy.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 w-1/4">Dimension</th>
                    <th className="text-left p-3 font-semibold text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 w-3/8">FDD (Financial DD)</th>
                    <th className="text-left p-3 font-semibold text-rose-700 dark:text-rose-300 border-b border-gray-200 dark:border-gray-700 w-3/8">CDD (Commercial DD)</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-transparent" : "bg-gray-50/50 dark:bg-gray-800/20"}>
                      <td className="p-3 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">{row.category}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">{row.fdd}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">{row.cdd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                FDD asks whether the restaurant's books for the past three years are accurate — correct revenue, correct costs, correct margins.
                CDD asks whether the neighborhood where the restaurant sits will still be thriving in three years, whether a competitor is about to open next door, and whether the regulars will keep coming back.
                Both questions affect the price you should pay.
              </p>
            </div>
          </motion.section>

          {/* ── Section 4: Stakeholders ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Stakeholders & Roles</h2>
            <div className="space-y-3">
              {STAKEHOLDERS.map((s, i) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className={`inline-block text-xs font-semibold rounded-full px-2.5 py-0.5 mb-1.5 ${c.badge}`}>{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Section 5: Case Studies ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — What Happens When CDD Fails?</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                In all three cases, the signals were there to be found. The question is why they were missed — and what the consequences were.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.typeColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company} ({c_item.year})</p>
                      </div>
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Lesson</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>
                      {c_item.slug && (
                        <Link
                          href={`/en/deals/${c_item.slug}`}
                          className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Read the full deal story →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Related concepts ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {RELATED.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
      <Footer />
    </>
  );
}
