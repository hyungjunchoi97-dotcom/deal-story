"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * 섹션 헤더 — 1px 보더 + 2px blue 모션 언더라인.
 * 디자인 시스템 전반에서 H2 자리에 일관되게 사용합니다.
 * (현재 DealPageClient 내부에 같은 패턴이 한 번 더 정의돼 있음 — 후속 정리에서
 *  DealPageClient 도 이 컴포넌트를 import 하도록 통합 권장.)
 */
export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mt-12 mb-4 relative">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 pb-3 border-b border-gray-100 dark:border-gray-800">
        {children}
      </h2>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-400 dark:bg-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: "2.5rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
      />
    </div>
  );
}
