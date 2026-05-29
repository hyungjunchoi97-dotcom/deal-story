import type { Metadata } from "next";
import TransactionCompsBuildClient from "./TransactionCompsBuildClient";

export const metadata: Metadata = {
  title: "Modelling 101 Ch.3 — Transaction Comps Build (Mergermarket) | Deal Story",
  description:
    "Mergermarket·CIQ M&A로 선례거래 10-15개 추출 — 8-단계 필터, Premium 분해, Synergy Backout NPV, Excel 정규화 워크북.",
  keywords: [
    "Mergermarket", "Transaction Comps", "Precedent Transactions",
    "Synergy Backout", "Premium Decomposition", "Excel Workbook", "Strategic vs Financial",
  ],
  alternates: {
    canonical: "/deal-101/transaction-comps-build",
    languages: {
      ko: "/deal-101/transaction-comps-build",
      en: "/en/deal-101/transaction-comps-build",
      "x-default": "/deal-101/transaction-comps-build",
    },
  },
};

export default function TransactionCompsBuildPage() {
  return <TransactionCompsBuildClient lang="ko" />;
}
