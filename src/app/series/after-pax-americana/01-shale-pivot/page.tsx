import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShaleStubClient from "./ShaleStubClient";

export const metadata: Metadata = {
  title: "Ch.01 The Shale Pivot — Working Outline | After Pax Americana",
  description:
    "셰일 혁명이 미국 중동 정책 70년의 단일 가정을 무너뜨렸다. Chapter 1의 작업용 outline — 12개 섹션, 11개 비주얼, 50+ 자료.",
  robots: { index: false, follow: false }, // 작업용 페이지 — 인덱스 X
  alternates: {
    canonical: "/series/after-pax-americana/01-shale-pivot",
    languages: {
      ko: "/series/after-pax-americana/01-shale-pivot",
      en: "/en/series/after-pax-americana/01-shale-pivot",
    },
  },
};

export default function ShalePivotStubPage() {
  return (
    <>
      <Header />
      <ShaleStubClient lang="ko" />
      <Footer />
    </>
  );
}
