import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LegolandCrisisClient from "@/app/market-101/korea-legoland-crisis/LegolandCrisisClient";

export const metadata: Metadata = {
  title: "Korea Legoland Crisis — How a Single Local Government Froze the Bond Market | Market 101 | Deal Story",
  description:
    "In 2022, Gangwon Province's refusal to guarantee ₩205bn in ABCP paralyzed Korea's entire short-term bond market. ABCP, PF loans, credit enhancement, and the bond stabilization fund — Korea's structural vulnerabilities dissected.",
  alternates: {
    canonical: "/en/market-101/korea-legoland-crisis",
    languages: {
      ko: "/market-101/korea-legoland-crisis",
      en: "/en/market-101/korea-legoland-crisis",
      "x-default": "/market-101/korea-legoland-crisis",
    },
  },
};

export default function LegolandCrisisPageEn() {
  const concept = getMarket101ConceptBySlug("korea-legoland-crisis");
  if (!concept) notFound();
  return <LegolandCrisisClient concept={concept} lang="en" />;
}
