import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import Cdo2008Client from "@/app/market-101/structured-cdo-2008/Cdo2008Client";

export const metadata: Metadata = {
  title: "2008 CDO Collapse — How BBB- Became AAA and the Math Failed | Market 101 | Deal Story",
  description:
    "How the mathematical assumption that bundling hundreds of subprime mortgages creates AAA bonds triggered a global financial crisis. The magic of tranching, rating agency failure, and the CDO collapse mechanism fully dissected.",
  alternates: {
    canonical: "/en/market-101/structured-cdo-2008",
    languages: {
      ko: "/market-101/structured-cdo-2008",
      en: "/en/market-101/structured-cdo-2008",
      "x-default": "/market-101/structured-cdo-2008",
    },
  },
};

export default function Cdo2008PageEn() {
  const concept = getMarket101ConceptBySlug("structured-cdo-2008");
  if (!concept) notFound();
  return <Cdo2008Client concept={concept} lang="en" />;
}
