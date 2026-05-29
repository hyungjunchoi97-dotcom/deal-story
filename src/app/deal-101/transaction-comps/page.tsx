import type { Metadata } from "next";
import TransactionCompsClient from "./TransactionCompsClient";

export const metadata: Metadata = {
  title: "Valuation 101 Ch.2 — Transaction Comps 선례 거래 | Deal Story",
  description:
    "M&A 선례거래 멀티플 — 컨트롤 프리미엄 분해, Synergy Backout, Strategic vs Financial 차이, Microsoft × Activision 사례.",
  keywords: [
    "Transaction Comps", "Precedent Transactions", "Control Premium",
    "Synergy Backout", "Strategic Buyer", "Financial Buyer", "M&A Multiples", "Mergermarket",
  ],
  alternates: {
    canonical: "/deal-101/transaction-comps",
    languages: {
      ko: "/deal-101/transaction-comps",
      en: "/en/deal-101/transaction-comps",
      "x-default": "/deal-101/transaction-comps",
    },
  },
};

export default function TransactionCompsPage() {
  return <TransactionCompsClient lang="ko" />;
}
