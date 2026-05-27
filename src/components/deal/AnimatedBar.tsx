"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedBar({
  pct,
  color,
  delay = 0,
}: {
  pct: number;
  color: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"
    >
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
