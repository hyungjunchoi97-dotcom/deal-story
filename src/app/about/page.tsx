import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "소개",
  description: "Deal Story는 기업 딜의 배경과 숫자를 함께 아카이빙합니다.",
  alternates: {
    canonical: "/about",
    languages: {
      ko: "/about",
      en: "/en/about",
      "x-default": "/about",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">소개</h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Deal Story란?</h2>
            <p>
              기업 딜 정보는 뉴스 기사, IR 공시, 언론 보도에 파편화되어 있습니다.
              인수합병의 전략적 배경은 어디서 찾고, 거래 금액과 구조는 또 어디서 확인해야 할까요?
            </p>
            <p className="mt-3">
              Deal Story는 이 흩어진 정보를 하나의 스토리로 묶어 아카이빙합니다.
              딜의 타임라인과 핵심 재무 수치를 함께 보여주어, 딜을 처음 접하는 분도
              업무상 딜을 분석하는 분도 빠르게 맥락을 파악할 수 있습니다.
            </p>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">다루는 카테고리</h2>
            <ul className="space-y-2">
              <li><span className="font-medium text-gray-800 dark:text-gray-200">M&A</span> — 기업 간 인수·합병의 전략적 배경과 딜 구조</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">PE/VC</span> — 사모펀드·벤처캐피탈 투자 사례와 Exit</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">IPO·상장</span> — 기업공개 타임라인과 공모 구조</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">매각·분리</span> — 사업부 매각, 분사, 스핀오프</li>
            </ul>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">각 딜 포스트에 담기는 것</h2>
            <ul className="space-y-2">
              <li><span className="font-medium text-gray-800 dark:text-gray-200">딜 타임라인</span> — 발표·승인·클로징까지 주요 일정</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">핵심 재무 수치</span> — 딜 금액, EV, 배수, 지분율</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">배경 스토리</span> — 왜 이 딜이 성사됐는지, 전략적 맥락</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">거래 당사자</span> — 인수자·피인수자·FA·법률 자문사</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
