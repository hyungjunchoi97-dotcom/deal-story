"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { MarketConcept } from "@/data/market-101-concepts";

type Lang = "ko" | "en";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number], delay } },
});

export default function LevFinProcessClient({
  concept,
  lang,
}: {
  concept: MarketConcept;
  lang: Lang;
}) {
  const title = lang === "en" ? (concept.titleEn ?? concept.title) : concept.title;
  const excerpt = lang === "en" ? (concept.excerptEn ?? concept.excerpt) : concept.excerpt;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <Link
            href={lang === "en" ? "/en/market-101" : "/market-101"}
            className="text-sm text-indigo-500 hover:text-indigo-700 transition-colors"
          >
            ← {lang === "en" ? "Market 101" : "Market 101"}
          </Link>
        </motion.div>

        <motion.h1
          variants={fadeUp(0.05)}
          initial="hidden"
          animate="show"
          className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-snug"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10"
        >
          {excerpt}
        </motion.p>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          animate="show"
          className="rounded-xl border border-indigo-100 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/30 p-6 text-center"
        >
          <p className="text-indigo-700 dark:text-indigo-300 font-medium">
            {lang === "en" ? "Full content coming soon." : "콘텐츠 준비 중입니다."}
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
