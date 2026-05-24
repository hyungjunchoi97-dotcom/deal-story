"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PHASES = [
  {
    num: "01",
    title: "Strategy & Target Identification",
    subtitle: "Why buy, and who to buy",
    color: "blue",
    duration: "1–3 months",
    description:
      "M&A begins long before any contract is signed. The trigger is a moment when management decides that organic growth alone won't get them to their goals — or when a PE fund is hunting for its next platform. Two questions dominate this phase: 'Why are we doing this?' and 'Who exactly should we target?'",
    analogy: "It's like deciding whether to open a restaurant from scratch or buy one that's already doing well. When speed to market, brand acquisition, or eliminating a competitor matters more than building yourself, you buy. The M&A thesis is essentially that calculation made explicit.",
    stakeholders: [
      {
        role: "Management / Board of Directors",
        responsibility: "Approves the acquisition strategy, sets the budget and walk-away price. Without a clear thesis and price ceiling from the board, the process tends to drift — and competitive bidding situations can push buyers into emotional over-bids.",
      },
      {
        role: "Internal M&A / Corporate Development Team",
        responsibility: "Narrows the long list of potential targets down to a short list. Pre-screens integration feasibility before any external party is engaged. Large corporates have dedicated corp-dev teams; smaller companies often run this out of the CFO's office.",
      },
      {
        role: "Sell-side Investment Bank",
        responsibility: "The seller's IB is already engaged at this stage, designing the auction process, deciding who gets contacted and in what sequence. Their mandate: maximize sale price for the seller.",
      },
      {
        role: "Strategy Consulting Firm",
        responsibility: "Provides independent market sizing, competitive landscape analysis, and positioning validation for the target. Functions as an early-stage Commercial DD before the formal process begins.",
      },
    ],
    documents: [
      { name: "M&A Rationale Memo", desc: "Internal document articulating why this specific target, what synergies are expected, and what the maximum price (walk-away price) looks like. Used to get board approval before entering a process." },
      { name: "Long List / Short List", desc: "A universe of 50–100 potential targets filtered down to 5–10 based on strategic fit, size, and financial profile. Determines who gets contacted and in what order." },
      { name: "Preliminary Financial Screening Model", desc: "EV/EBITDA range estimates based on public financials and comparables. Not meant to be precise — it confirms the deal is in the right ballpark before spending serious time on it." },
    ],
    insight: "If the walk-away price isn't locked in before entering a competitive process, bidding can turn emotional. Studies consistently show that the 'winner' of a competitive M&A auction often overpays — this is called the Winner's Curse. Half of all M&A failures can be traced back to a price rationale that was never grounded in reality.",
  },
  {
    num: "02",
    title: "Initial Contact, NDA & Information Memorandum",
    subtitle: "The first handshake — what gets shown and what stays hidden",
    color: "violet",
    duration: "2–4 weeks",
    description:
      "The sell-side IB kicks off the formal process by distributing a Teaser — a short, anonymized summary of the target — to a curated list of potential buyers. Interested parties sign an NDA and gain access to the full Information Memorandum (IM). This phase is about generating competition while protecting the seller's confidential information.",
    analogy: "Think of it like selling a house. The listing photos go to everyone. But the private showing — where you see the kitchen layout and check whether the pipes are decent — is only for serious buyers who've agreed not to gossip about what they find inside. The Teaser is the listing; the IM is the private showing.",
    stakeholders: [
      {
        role: "Sell-side Investment Bank",
        responsibility: "Manages the entire marketing process. Writes the Teaser and IM, selects qualified buyers, distributes Process Letters, and orchestrates the auction timeline to maximize competitive tension and price.",
      },
      {
        role: "Seller's Management",
        responsibility: "Reviews and approves the IM content. Decides what information to disclose at each stage — too much risks leaking trade secrets; too little leads buyers to price in uncertainty with lower bids.",
      },
      {
        role: "Potential Buyers (Buy-side)",
        responsibility: "Review the Teaser and signal interest. Negotiate and sign the NDA. Receive the IM and begin preliminary analysis. Many candidates drop out here — and that's by design.",
      },
      {
        role: "Buy-side Investment Bank",
        responsibility: "Begins a first-pass valuation based on the IM. Starts building a comp set and identifying how the target might be valued in an auction context.",
      },
    ],
    documents: [
      { name: "Teaser", desc: "A 1–2 page anonymized overview of the target. No company name — just sector, size, and high-level financials. The only goal is to identify who's interested enough to sign an NDA." },
      { name: "NDA (Non-Disclosure Agreement)", desc: "Required before receiving the IM. Restricts use of confidential information to the evaluation process only. Prohibits disclosure to third parties and unauthorized use if the deal falls through." },
      { name: "IM / CIM (Information Memorandum)", desc: "The full deal book — typically 100–200 pages. Covers the business model, financials, market positioning, management team, and risk factors. This is the basis for writing the LOI price." },
      { name: "Process Letter", desc: "Sets out the auction rules: LOI submission deadline, acceptable bid formats, expected exclusivity terms, and how the shortlist will be selected." },
    ],
    insight: "The IM is written by the seller to show the business at its best. 'Adjusted' EBITDA, selective historical periods, and optimistic growth projections are par for the course. A buyer's job is to not take the IM at face value — the real numbers come out in DD.",
  },
  {
    num: "03",
    title: "IOI / LOI — The First Price Proposal",
    subtitle: "Where EV/EBITDA multiples make their first appearance",
    color: "amber",
    duration: "2–4 weeks",
    description:
      "After reviewing the IM, bidders submit their first formal price proposals. An IOI (Indication of Interest) is a non-binding price range. An LOI (Letter of Intent) is more developed — it specifies price, deal structure, and DD requirements. This is where valuation multiples move from analysis to actual negotiation.",
    analogy: "It's like putting a written offer on an apartment before you've had an inspector check the plumbing. You're saying 'I'd pay around this much, subject to seeing the full picture.' The price you write here will anchor every negotiation that follows — so getting the range right matters a great deal.",
    stakeholders: [
      {
        role: "Buy-side Investment Bank",
        responsibility: "Builds the valuation model, pulls M&A comps, and advises on optimal bid price. In a competitive auction, the core question is: 'What price wins the deal without overpaying?'",
      },
      {
        role: "Accounting Firm (Preliminary Financial Review)",
        responsibility: "Runs a quick-turn analysis of the IM's EBITDA figures before the formal FDD begins. Flags obvious add-backs, one-time items, and normalization issues that might affect LOI pricing.",
      },
      {
        role: "Investment Committee (PE deals)",
        responsibility: "For PE buyers, no LOI can be submitted without IC approval. The IC sets the maximum equity check and leverage parameters that define the bid price ceiling.",
      },
      {
        role: "Acquisition Finance Bank",
        responsibility: "In leveraged deals, the IB confirms available debt capacity before the LOI is submitted. The equity amount — and therefore the total price — depends on how much debt the target can support.",
      },
    ],
    documents: [
      { name: "IOI (Indication of Interest)", desc: "Non-binding. Includes a price range (e.g., EV of $500M–$600M), preferred deal structure, and scope of DD requested. Seller uses IOIs to narrow the field to 3–5 finalists." },
      { name: "LOI (Letter of Intent / Term Sheet)", desc: "More specific than an IOI. Includes the proposed price, deal structure (stock vs. asset purchase), DD scope and timeline, and whether exclusivity is requested. Partially binding (especially on exclusivity and confidentiality)." },
      { name: "Preliminary Valuation Model", desc: "DCF and EV/EBITDA multiple analysis based on IM figures. Used to anchor the bid price. Note: plugging the IM's EBITDA directly into the model without normalization can lead to a significant overpay." },
    ],
    insight: "The price in the LOI is adjustable — DD findings can justify price changes. But the strategy of submitting an intentionally high LOI to win entry, then using DD to chip the price down, burns seller trust and often backfires. Come in with a range you can defend, and expect to defend it.",
  },
  {
    num: "04",
    title: "Due Diligence",
    subtitle: "The longest phase — and the one with the most people",
    color: "rose",
    duration: "4–12 weeks",
    description:
      "Once the LOI is accepted, the full due diligence process begins. Teams of financial, legal, commercial, technical, and HR specialists descend on thousands of documents uploaded to the Virtual Data Room (VDR). Q&A lists pile up, management interviews are scheduled, and every assumption in the IM gets stress-tested.",
    analogy: "If reading the IM is like looking at a used car listing, due diligence is paying a mechanic to put it on a lift and check every component — engine, transmission, suspension, rust. If something's wrong, you renegotiate the price or walk away.",
    stakeholders: [
      {
        role: "Financial DD — Big 4 Accounting Firm (FDD)",
        responsibility: "Reviews 3–5 years of financial statements, normalizes EBITDA (Quality of Earnings report), analyzes working capital, and identifies off-balance-sheet liabilities. The FDD report is the primary basis for any price adjustment after LOI.",
      },
      {
        role: "Legal DD — Law Firm (LDD)",
        responsibility: "Reviews contracts, litigation exposure, IP ownership, regulatory licenses, employment obligations, and environmental liabilities. The goal is to surface every 'contingent liability' and quantify its materiality.",
      },
      {
        role: "Commercial DD — Strategy Consulting (CDD)",
        responsibility: "Independently validates the market size, growth assumptions, competitive dynamics, and customer concentration. The key question: 'Is the EBITDA in the IM actually sustainable, or is the business structurally deteriorating?'",
      },
      {
        role: "Technical / IT DD (TDD)",
        responsibility: "Reviews software architecture, technical debt, cybersecurity posture, and key-person dependency risk. For tech-heavy businesses, TDD findings can significantly change valuation.",
      },
      {
        role: "HR DD",
        responsibility: "Reviews management retention risk, equity/option obligations, employment agreements, and compensation structures. Crucial for identifying post-merger integration risks before they become real costs.",
      },
      {
        role: "Seller's Management",
        responsibility: "Participates in multiple interviews and Q&A rounds. Provides context that documents can't capture. But remember: they're still selling — treat interviews as valuable but partial input.",
      },
    ],
    documents: [
      { name: "VDR (Virtual Data Room)", desc: "The secure online platform where thousands of documents are shared. Access is permission-controlled by document type and user role. Industry platforms include Intralinks and Datasite. Runs 24/7 during DD." },
      { name: "Q&A List", desc: "The buy-side team's ongoing list of questions about VDR documents. Can run into the hundreds or thousands of items. Response quality and speed from the seller's team signals a lot about how the business is run." },
      { name: "Quality of Earnings (QoE) Report", desc: "The FDD team's core output. Shows Adjusted EBITDA, normalized working capital, and a list of off-balance-sheet risks. This document is the foundation for any post-LOI price negotiation." },
      { name: "LDD Report", desc: "Legal risk matrix categorized by severity — Material, Moderate, Minor. Material risks feed directly into Reps & Warranties language and indemnification terms in the SPA." },
      { name: "CDD Report", desc: "Independent validation of the business case. If the IM says the market grows at 15% annually and the CDD says 5%, the LOI price needs to change — or the deal logic needs to be reconsidered entirely." },
    ],
    insight: "The biggest DD failure mode: the buyer team falls in love with the deal and starts explaining away every red flag the DD teams find. DD should be adversarial by design. If the findings can't support the LOI price, you go back to the negotiating table — or you walk.",
  },
  {
    num: "05",
    title: "SPA Negotiation & Signing",
    subtitle: "Where everything gets written in legal language",
    color: "emerald",
    duration: "4–8 weeks",
    description:
      "DD findings are incorporated into the final price and deal terms, and the Stock Purchase Agreement (SPA) is executed. The SPA is the definitive contract — every economic and legal condition of the deal lives here. Negotiations are intense, legal fees are at their peak, and the path to closing is finally in sight.",
    analogy: "This is writing the real estate purchase contract — but instead of a few pages covering the price, deposit, and move-in date, the M&A equivalent runs hundreds or thousands of pages. Every warranty, every liability cap, every clause that says 'if this turns out to be wrong, here's what happens' is negotiated and documented.",
    stakeholders: [
      {
        role: "M&A Law Firms (Both Sides)",
        responsibility: "Draft and negotiate the SPA. The wording of individual clauses can create or eliminate hundreds of millions in legal liability. Cross-border deals involve multiple jurisdictions simultaneously.",
      },
      {
        role: "Buy-side Investment Bank",
        responsibility: "Translates DD findings into price adjustment arguments. 'We found X in FDD, which justifies reducing the LOI price by Y.' This is the IB's most high-stakes advisory role in the entire process.",
      },
      {
        role: "Acquisition Finance Bank / Lender Group",
        responsibility: "In PE deals, the Credit Agreement must be signed concurrently with the SPA. The two documents are legally interlocked — a failure in one can unwind the other.",
      },
      {
        role: "Management (Both Sides)",
        responsibility: "Negotiates retention packages, non-compete terms, and the seller's post-closing role. Especially fraught when the seller is a founder with emotional ties to the company.",
      },
    ],
    documents: [
      { name: "SPA (Stock Purchase Agreement)", desc: "The definitive deal contract. Covers the purchase price, price adjustment mechanism (Net Working Capital adjustment), closing conditions, Reps & Warranties, indemnification, Break-up Fee, and MAC clause. Typically hundreds of pages." },
      { name: "Reps & Warranties (R&W)", desc: "The seller's contractual guarantees about the state of the business ('X is true about this company'). Breach triggers indemnification liability. The scope and survival period of R&W is one of the most contested negotiation points." },
      { name: "MAC Clause (Material Adverse Change)", desc: "Allows the buyer to exit the deal if a materially adverse change occurs between signing and closing. COVID, wars, and sudden rate spikes are classic MAC triggers — though courts have historically set a high bar for what actually qualifies." },
      { name: "Break-up Fee", desc: "Termination fee paid by the party that walks away. Buyer-side break fees run 2–5% of deal value. Reverse break fees (paid by seller if they block the deal) can be higher in competitive situations." },
      { name: "Escrow", desc: "A portion of the purchase price held by a third party as security against R&W claims. Typically 10–15% of deal value, released after the survival period expires. Protective for buyers; frustrating for sellers." },
    ],
    insight: "The three clauses that most often extend the SPA timeline: ① the Net Working Capital adjustment mechanism (what counts as 'normal' working capital?), ② the scope and survival period of Reps & Warranties, and ③ the indemnification cap. These three points alone account for most of the legal bill.",
  },
  {
    num: "06",
    title: "Regulatory Approval & Closing",
    subtitle: "Signed isn't the same as closed",
    color: "teal",
    duration: "1 month–2 years",
    description:
      "Once the SPA is signed, the deal is 'announced' — but not legally complete. Closing requires approval from competition authorities, who assess whether the transaction harms market competition. Simple deals get cleared in weeks; complex mega-mergers can take years, face conditional approvals, or get blocked entirely.",
    analogy: "It's like getting married at the ceremony but still needing to file the marriage certificate before you're legally recognized as a couple. SPA signing is the ceremony; regulatory approval and closing is the paperwork. Except the registrar has the right to say 'this marriage is bad for society' and refuse to file it.",
    stakeholders: [
      {
        role: "KFTC / EU Commission / CFIUS / DOJ",
        responsibility: "Competition authority review. Assess market concentration, competitive harm, and remedies. Can approve unconditionally, approve with conditions (divestitures, behavioral remedies), or block outright.",
      },
      {
        role: "Regulatory Law Firm",
        responsibility: "Drafts the merger filing, responds to authority questions, hires economic experts to support market definition arguments. If remedies are needed, negotiates their scope directly with the regulator.",
      },
      {
        role: "PMI Integration Team",
        responsibility: "Uses the regulatory approval window — which can stretch months — to prepare the Day 1 and 100-day integration plan. System migration, org design, culture alignment, and brand integration all start here.",
      },
      {
        role: "IB / Law Firm (Closing Checklist)",
        responsibility: "Verifies that all conditions precedent in the SPA have been satisfied: regulatory approval, shareholder vote, financing, and any deal-specific closing conditions. Manages the minute-by-minute sequence on closing day.",
      },
    ],
    documents: [
      { name: "Merger Filing (HSR / EC / KFTC)", desc: "Formal regulatory submission. Includes market share data, competitive analysis, and a description of the transaction's effects. US filings fall under the HSR Act; EU under EC Merger Regulation; Korea under the MRFTA." },
      { name: "Remedies Negotiation Documents", desc: "When regulators impose conditions, both sides negotiate the scope of divestitures or behavioral remedies. Getting the remedy right can mean the difference between a closed deal and an abandoned one." },
      { name: "Closing Package", desc: "The bundle of legal acts executed on closing day: wire transfer, share register update, board composition change, and debt drawdown. Sequenced to the minute and coordinated across multiple parties." },
      { name: "100-Day PMI Plan", desc: "The post-merger integration roadmap. Org structure, IT migration, retention plans, brand strategy. The long-term success of the deal is determined here — not at signing." },
    ],
    insight: "Two reasons deals fail after signing: regulatory block, and PMI failure. The former kills the deal entirely; the latter means the buyer paid a huge premium and then destroyed value anyway. Studies suggest 70–80% of M&A deals fail to deliver the expected synergies. The deal is only as good as the integration that follows.",
  },
];

const CASES = [
  {
    slug: "adobe-figma-blocked",
    title: "The $20 Billion Deal Regulators Killed",
    company: "Adobe × Figma",
    type: "Failed Deal",
    typeColor: "rose",
    phaseFailed: "Phase 6 — Regulatory Approval",
    analogy: "Imagine the top restaurant group in town trying to buy out its main competitor — and the food safety authority stepping in to say 'If you do this, every other restaurant in the neighborhood goes out of business.' That's the regulatory logic that killed this deal.",
    paragraphs: [
      "In September 2022, Adobe announced it would acquire Figma for approximately $20 billion — a 50× ARR premium and the highest valuation ever paid for a SaaS company at the time. Adobe's strategic thesis: combine its Creative Cloud suite with Figma's collaborative design tools and dominate the UI/UX design market end-to-end.",
      "The problem, as regulators saw it, was that this was a horizontal merger between two dominant players in the same space. The EU Commission and UK CMA concluded that combining Adobe and Figma would eliminate meaningful competition in UI design software. Customers and enterprises would lose their only real alternative.",
      "Adobe fought for 15 months, proposing various remedies. But as the EU moved toward a formal prohibition decision, both sides agreed to terminate in December 2023. Adobe paid Figma a $1 billion break-up fee. Figma walked away independent — and began preparing for its IPO.",
    ],
    lesson: "Horizontal M&A in Big Tech is under increasing antitrust scrutiny globally. Strategic rationale alone isn't enough — 'can this deal clear regulators?' needs to be asked at Phase 1, not Phase 6. Adobe spent $1 billion and 15 months of management attention to learn this the hard way.",
  },
  {
    slug: "elon-musk-twitter",
    title: "LOI Withdrawal, Litigation, and a Forced Close",
    company: "Musk × Twitter",
    type: "Turbulent Success",
    typeColor: "amber",
    phaseFailed: "Phases 3–5 — Post-LOI Attempt to Withdraw",
    analogy: "Imagine signing a contract to buy a house, then deciding the price is too high and secretly hoping the inspector finds something bad enough to let you walk. The seller finds out, hauls you to court, and the judge says: 'You signed. Close the deal.' That's exactly what happened here.",
    paragraphs: [
      "In April 2022, Elon Musk submitted an LOI to acquire Twitter at $54.20 per share — a total of $44 billion, the largest tech leveraged buyout in history. Two months later, he attempted to walk away, citing Twitter's alleged misrepresentation of its bot account numbers as a material breach.",
      "Twitter's board responded with a specific performance lawsuit. Their argument: 'You signed an SPA. There is no valid MAC event. You must close.' The Delaware Court of Chancery set a trial date for October 2022.",
      "Days before trial, Musk reversed course and agreed to close at the original $54.20 price. The legal risk of losing a specific performance judgment — being forced to close anyway, but after months of public embarrassment — was too great. Post-acquisition, Musk fired 75% of Twitter's staff, rebranded the platform as X, and took the company in a radically different direction.",
    ],
    lesson: "When a SPA contains a specific performance clause, signing is a near-binding commitment. The cost of trying to exit isn't just the break-up fee — it's potential court-ordered completion with no price reduction. If the price feels wrong, solve it before you sign.",
  },
  {
    slug: "mbk-homeplus",
    title: "The Deal Closed — But the Structure Was the Problem",
    company: "MBK Partners × Homeplus",
    type: "Structural Risk Case",
    typeColor: "violet",
    phaseFailed: "Phases 1–4 — Strategy, DD, and Deal Structure",
    analogy: "Imagine buying a house with maximum leverage, then selling off the furniture and appliances to repay some of the loan — while still having to live in the house. When your income drops and the monthly payments stay high, you eventually can't cover the bills.",
    paragraphs: [
      "In 2015, MBK Partners acquired Homeplus from UK retailer Tesco for approximately ₩7.2 trillion (~£4.2 billion) — the largest retail PE deal in Asian history. The structure was a classic LBO. Post-acquisition, MBK executed a Sale & Leaseback of Homeplus store properties, extracting over ₩4 trillion in cash while leaving the business with permanent, fixed rental obligations.",
      "The problem was structural: Korean offline retail was already in the early stages of losing share to e-commerce. As Homeplus's revenue and EBITDA declined steadily, the fixed lease costs from the Sale & Leaseback became an increasingly heavy burden. The question is how thoroughly the Commercial DD examined the 5–7 year e-commerce disruption trajectory — not just current market share.",
      "In March 2025, Homeplus filed for court-supervised rehabilitation (Korean corporate restructuring). Billions of won in acquisition debt and lease deposits were frozen, and hundreds of supplier companies were left with unpaid receivables. A ₩7.2 trillion deal ended in insolvency ten years later.",
    ],
    lesson: "For deals in structurally disrupted industries, CDD must look forward — not just at current market share, but at how the industry looks in 5–7 years. And Sale & Leaseback structures that extract short-term cash leave behind permanent fixed cost obligations. This trade-off deserved a much more rigorous stress test in DD.",
  },
];

const STAKEHOLDER_MAP = [
  {
    category: "Advisors / Investment Banks",
    color: "blue",
    members: [
      { name: "Sell-side IB", phases: "All phases", role: "Seller's advisor. Authors the Teaser & IM, manages the auction, maximizes sale price." },
      { name: "Buy-side IB", phases: "Phase 2–5", role: "Buyer's advisor. Valuation, bid strategy, DD oversight, SPA negotiation support." },
      { name: "Acquisition Finance Bank", phases: "Phase 3–6", role: "Structures and executes the debt financing in PE deals." },
    ],
  },
  {
    category: "Legal",
    color: "violet",
    members: [
      { name: "Seller's Law Firm", phases: "Phase 2–6", role: "Drafts the SPA, negotiates R&W, handles regulatory filings." },
      { name: "Buyer's Law Firm", phases: "Phase 2–6", role: "Conducts LDD, reviews SPA, leads regulatory strategy, manages closing checklist." },
      { name: "Regulatory Specialists", phases: "Phase 6", role: "Prepares merger filings, manages competition authority process." },
    ],
  },
  {
    category: "Due Diligence Specialists",
    color: "rose",
    members: [
      { name: "Big 4 Accounting Firm (FDD)", phases: "Phase 4", role: "Financial statement verification, QoE report, Adjusted EBITDA analysis." },
      { name: "Strategy Consulting (CDD)", phases: "Phase 4", role: "Independent validation of market, business model, and growth assumptions." },
      { name: "IT / Tech DD (TDD)", phases: "Phase 4", role: "System architecture, technical debt, cybersecurity risk." },
    ],
  },
  {
    category: "Internal",
    color: "emerald",
    members: [
      { name: "Management / Board", phases: "All phases", role: "Strategic approval, price ceiling, SPA execution authority." },
      { name: "Internal M&A / CFO Office", phases: "All phases", role: "Deal sourcing, financial modeling, internal coordination." },
      { name: "PMI Integration Team", phases: "Phase 6+", role: "Executes the 100-day post-merger integration plan." },
    ],
  },
];

const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:   { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet: { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:  { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:   { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald:{ badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:   { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

export default function MaProcessClientEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/en/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">M&A Process</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              The M&A Process, End to End
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              From strategy to closing — the six phases of an M&A deal, the stakeholders in each, the documents that drive them, and the real reasons deals succeed or fail.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {PHASES.map((p) => {
                const c = COLOR_MAP[p.color];
                return (
                  <a key={p.num} href={`#phase-${p.num}`} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {p.num}. {p.title.split(" ")[0]} {p.title.split(" ")[1] ?? ""}
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

          {/* Intro */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Why Does M&A Take So Long?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A small deal can close in three to six months. A large cross-border transaction can take one to three years.
                Once you understand what actually happens in each phase, the timeline stops feeling long — it starts feeling necessary.
              </p>
              <p>
                Think about buying a house: you search, tour, negotiate, inspect, draft the contract, arrange the mortgage, and transfer title.
                Even that takes months. Now scale it to a multi-billion dollar business with thousands of employees, hundreds of pages of contracts,
                and a government body that gets to ask whether the transaction is good for society before it can close.
              </p>
              <p>
                The six phases below compress that entire journey. Understanding what each phase is for — and who's doing what — makes
                every M&A headline make sense in a way it never did before.
              </p>
            </div>

            {/* Timeline bar */}
            <div className="mt-6 grid grid-cols-6 gap-1 text-center">
              {PHASES.map((p) => {
                const c = COLOR_MAP[p.color];
                return (
                  <div key={p.num} className={`rounded-lg p-2 ${c.bg}`}>
                    <div className={`text-xs font-bold ${c.text}`}>{p.num}</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">{p.title.split(" ")[0]}</div>
                    <div className={`mt-1 text-[9px] font-medium ${c.text}`}>{p.duration}</div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Phase sections */}
          {PHASES.map((phase) => {
            const c = COLOR_MAP[phase.color];
            return (
              <motion.section
                key={phase.num}
                id={`phase-${phase.num}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className={`rounded-xl border ${c.border} ${c.bg} p-5 mb-4`}>
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <span className={`text-xs font-bold ${c.text}`}>Phase {phase.num}</span>
                      <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">{phase.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{phase.subtitle}</p>
                    </div>
                    <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                      ⏱ {phase.duration}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{phase.description}</p>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 Think of it this way</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{phase.analogy}</p>
                </div>

                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">Stakeholders & Roles</h3>
                <div className="space-y-2 mb-5">
                  {phase.stakeholders.map((s, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{s.role}</span>
                        <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{s.responsibility}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">Key Documents</h3>
                <div className="space-y-2 mb-5">
                  {phase.documents.map((doc, i) => (
                    <div key={i} className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 text-sm">
                      <span className={`inline-block text-xs font-semibold rounded px-2 py-0.5 mb-1 ${c.badge}`}>{doc.name}</span>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{doc.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Insight</p>
                  <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{phase.insight}</p>
                </div>
              </motion.section>
            );
          })}

          {/* Stakeholder map */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">The Full Stakeholder Map</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">A single M&A deal involves dozens to hundreds of specialists. Here's how they group.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {STAKEHOLDER_MAP.map((group) => {
                const c = COLOR_MAP[group.color];
                return (
                  <div key={group.category} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-xs font-bold ${c.text} mb-3`}>{group.category}</h3>
                    <div className="space-y-2">
                      {group.members.map((m, i) => (
                        <div key={i} className="text-sm">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{m.name}</span>
                            <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${c.badge}`}>{m.phases}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{m.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Case Studies */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Case Studies — Why Deals Succeed and Fail</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                M&A rarely follows the textbook sequence cleanly. Regulators block deals at the finish line. Parties try to walk away after signing. Deals close perfectly — and then the structure implodes years later. Three cases, three different failure modes.
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
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border}`}>
                        📍 {c_item.phaseFailed}
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
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 Key Takeaway</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>

                      <Link
                        href={`/en/deals/${c_item.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Read the full deal story →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Why M&A is hard */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Why M&A Is Hard — Risk Map by Phase</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>Studies consistently show that <strong className="text-gray-800 dark:text-gray-200">70–80% of M&A deals fail to deliver the expected synergies</strong>. The failure points are predictable.</p>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                { phase: "Phase 1", risk: "No walk-away price → emotional over-bid when the auction heats up", color: "blue" },
                { phase: "Phase 2", risk: "Taking the IM at face value → hidden risks that DD should have caught earlier", color: "violet" },
                { phase: "Phase 3", risk: "LOI price driven by competition, not fundamentals → DD findings don't justify the number", color: "amber" },
                { phase: "Phase 4", risk: "DD team's red flags explained away → undisclosed liabilities surface post-close", color: "rose" },
                { phase: "Phase 5", risk: "SPA negotiation drags → momentum lost, key people start leaving", color: "emerald" },
                { phase: "Phase 6", risk: "Regulatory block or PMI failure → premium paid, value destroyed", color: "teal" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.phase} className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <span className={`shrink-0 text-xs font-bold rounded px-2 py-0.5 ${c.badge}`}>{item.phase}</span>
                    <p className="text-gray-600 dark:text-gray-400">{item.risk}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                The real reason M&A is hard: the phases aren't independent. A flawed assumption in Phase 1 gets amplified by DD in Phase 4, becomes a conflict in Phase 5 SPA negotiations, and then materializes as a post-close liability after Phase 6. The process looks linear. The risks are systemic.
              </p>
            </div>
          </motion.section>

          {/* Related concepts */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">Related Concepts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/en/deal-101/ev-ebitda", title: "EV/EBITDA Multiple", desc: "The valuation metric that first appears in Phase 3 LOI negotiations", badge: "Valuation" },
                { href: "/en/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "The FDD concept that drives price adjustments in Phase 4 and Phase 5", badge: "Valuation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
