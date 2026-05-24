import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-14 w-full">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          개인정보처리방침
        </h1>
        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              1. 개인정보 수집 및 이용
            </h2>
            <p>
              Deal Story는 현재 별도의 회원가입 없이 서비스를 제공하며, 개인정보를 수집하지 않습니다.
              서비스 이용 통계를 위해 익명의 방문 데이터를 수집할 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              2. 쿠키 및 로컬스토리지
            </h2>
            <p>
              사이트 테마(라이트/다크 모드) 설정을 위해 브라우저 로컬스토리지를 사용합니다.
              이 데이터는 외부로 전송되지 않으며 사용자의 기기에만 저장됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
              3. 문의
            </h2>
            <p>
              개인정보 관련 문의는 아래 이메일로 연락해 주세요.
              <br />
              <span className="text-blue-500">contact@dealstory.kr</span>
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
