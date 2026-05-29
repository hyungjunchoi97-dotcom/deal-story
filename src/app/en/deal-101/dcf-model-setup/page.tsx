import type { Metadata } from "next";
import DcfModelSetupClient from "@/app/deal-101/dcf-model-setup/DcfModelSetupClient";

export const metadata: Metadata = {
  title: "Modelling 101 Ch.1 — DCF Model Setup | Deal Story",
  description:
    "Practitioner DCF workbook architecture — 5-sheet structure (Assumptions/P&L/FCF/WACC/Valuation), color conventions, naming, mid-year convention, six common setup mistakes.",
  keywords: [
    "DCF Model", "Excel Modeling", "Workbook Setup", "Cell Hygiene", "Named Ranges",
    "Mid-Year Convention", "IB Modeling", "PE Modeling", "Microsoft Activision",
  ],
  alternates: {
    canonical: "/en/deal-101/dcf-model-setup",
    languages: {
      ko: "/deal-101/dcf-model-setup",
      en: "/en/deal-101/dcf-model-setup",
      "x-default": "/deal-101/dcf-model-setup",
    },
  },
};

export default function DcfModelSetupPageEn() {
  return <DcfModelSetupClient lang="en" />;
}
