import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShaleStubClient from "../../../../series/after-pax-americana/01-shale-pivot/ShaleStubClient";

export const metadata: Metadata = {
  title: "Ch.01 The Shale Pivot — Working Outline | After Pax Americana",
  description:
    "The shale revolution dissolved the single assumption that justified 70 years of American Middle East policy. Chapter 1 working outline — 12 sections, 11 visuals, 50+ sources.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/series/after-pax-americana/01-shale-pivot",
    languages: {
      ko: "/series/after-pax-americana/01-shale-pivot",
      en: "/en/series/after-pax-americana/01-shale-pivot",
    },
  },
};

export default function ShalePivotStubPageEn() {
  return (
    <>
      <Header />
      <ShaleStubClient lang="en" />
      <Footer />
    </>
  );
}
