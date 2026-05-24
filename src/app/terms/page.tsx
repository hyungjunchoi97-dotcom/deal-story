import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "이용약관",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-14 w-full">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          이용약관
        </h1>
        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              제1조 (목적)
            </h2>
            <p>
              본 약관은 Deal Story(이하 &quot;사이트&quot;)가 제공하는 서비스의 이용 조건 및
              절차, 사이트와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              제2조 (서비스 내용)
            </h2>
            <p>
              Deal Story는 M&A, PE/VC 투자, IPO, 매각·분리 등 기업 딜 정보를 수집·정리하여
              제공하는 콘텐츠 아카이브 서비스입니다. 사이트에 게재된 정보는 참고 목적이며,
              투자 조언이나 법적 자문이 아닙니다.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              제3조 (면책사항)
            </h2>
            <p>
              본 사이트에서 제공하는 딜 정보는 공개된 자료를 기반으로 하며, 정확성을 보장하지 않습니다.
              이용자는 투자, 사업 결정 시 반드시 공식 공시 및 전문가의 조언을 구해야 합니다.
              본 사이트는 정보 이용으로 인한 손해에 대해 책임을 지지 않습니다.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              제4조 (저작권)
            </h2>
            <p>
              본 사이트의 콘텐츠에 대한 저작권은 Deal Story에 있습니다.
              무단 복제, 배포, 상업적 이용을 금합니다.
            </p>
          </section>
          <p className="text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700/60">
            최종 수정일: 2026년 5월
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
