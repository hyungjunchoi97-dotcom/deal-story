import type { Metadata } from "next";
import TransactionCompsBuildClient from "@/app/deal-101/transaction-comps-build/TransactionCompsBuildClient";

export const metadata: Metadata = {
  title: "Modelling 101 Ch.3 — Transaction Comps Build (Mergermarket) | Deal Story",
  description:
    "Extracting 10-15 precedents via Mergermarket / CIQ M&A — 8-step filter, premium decomposition, synergy backout NPV, Excel normalization workbook.",
  keywords: [
    "Mergermarket", "Transaction Comps", "Precedent Transactions",
    "Synergy Backout", "Premium Decomposition", "Excel Workbook", "Strategic vs Financial",
  ],
  alternates: {
    canonical: "/en/deal-101/transaction-comps-build",
    languages: {
      ko: "/deal-101/transaction-comps-build",
      en: "/en/deal-101/transaction-comps-build",
      "x-default": "/deal-101/transaction-comps-build",
    },
  },
};

export default function TransactionCompsBuildPageEn() {
  return <TransactionCompsBuildClient lang="en" />;
}
