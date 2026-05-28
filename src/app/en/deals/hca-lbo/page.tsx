import type { Metadata } from "next";
import HcaLboClient from "../../../deals/hca-lbo/HcaLboClient";

export const metadata: Metadata = {
  title: "HCA 2006 LBO — The Mega-Deal Through a CLO Investor's Eyes | Deal Story",
  description:
    "The $33B KKR+Bain+Merrill acquisition of HCA — 7-tranche capital stack, $12B TLB distributed across ~500 CLOs, surviving 2008, and the 2011 IPO. A full LevFin case study.",
  alternates: {
    canonical: "/en/deals/hca-lbo",
    languages: {
      ko: "/deals/hca-lbo",
      en: "/en/deals/hca-lbo",
      "x-default": "/deals/hca-lbo",
    },
  },
  openGraph: {
    title: "HCA 2006 LBO — The Mega-Deal Through a CLO Investor's Eyes",
    description:
      "$33B KKR+Bain+Merrill consortium acquires HCA — 7-tranche stack, $12B TLB across ~500 CLOs, survived 2008, 2011 IPO. A LevFin practitioner's full case.",
    url: "/en/deals/hca-lbo",
    type: "article",
  },
};

export default function Page() {
  return <HcaLboClient lang="en" />;
}
