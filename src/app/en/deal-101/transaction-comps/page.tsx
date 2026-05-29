import type { Metadata } from "next";
import TransactionCompsClient from "@/app/deal-101/transaction-comps/TransactionCompsClient";

export const metadata: Metadata = {
  title: "Valuation 101 Ch.2 — Transaction Comps | Deal Story",
  description:
    "M&A precedent transaction multiples — control premium decomposition, synergy backout, strategic vs financial buyer differential, Microsoft × Activision case.",
  keywords: [
    "Transaction Comps", "Precedent Transactions", "Control Premium",
    "Synergy Backout", "Strategic Buyer", "Financial Buyer", "M&A Multiples", "Mergermarket",
  ],
  alternates: {
    canonical: "/en/deal-101/transaction-comps",
    languages: {
      ko: "/deal-101/transaction-comps",
      en: "/en/deal-101/transaction-comps",
      "x-default": "/deal-101/transaction-comps",
    },
  },
};

export default function TransactionCompsPageEn() {
  return <TransactionCompsClient lang="en" />;
}
