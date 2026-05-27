import type { ReactNode } from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

export default function PageIntro({
  badge,
  badgeColor = "blue",
  title,
  highlight,
  description,
  steps,
  stats,
  bottomNote,
}: {
  badge: string;
  badgeColor?: "blue" | "emerald" | "violet" | "amber";
  title: string;
  highlight?: string;
  description: string;
  steps?: Step[];
  stats?: Stat[];
  bottomNote?: ReactNode;
}) {
  const badgeStyles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    violet: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  };

  const accentStyles: Record<string, string> = {
    blue: "text-blue-500",
    emerald: "text-emerald-500",
    violet: "text-violet-500",
    amber: "text-amber-500",
  };

  return (
    <section className="mt-2">
      {/* Hero */}
      <div>
        <span
          className={`inline-block text-xs font-bold rounded-full px-3 py-1 ${badgeStyles[badgeColor]}`}
        >
          {badge}
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
          {title}
          {highlight && (
            <>
              <br />
              <span className={accentStyles[badgeColor]}>{highlight}</span>
            </>
          )}
        </h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-4"
            >
              <p className={`text-2xl font-bold ${accentStyles[badgeColor]}`}>
                {s.value}
              </p>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Steps */}
      {steps && steps.length > 0 && (
        <div className="mt-8">
          <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
            어떻게 작동하나요?
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-gray-800/50 p-5"
              >
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-bold ${accentStyles[badgeColor]}`}
                >
                  {s.num}
                </span>
                <p className="mt-3 text-sm font-bold text-gray-900 dark:text-gray-100">{s.title}</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {bottomNote && <div className="mt-6">{bottomNote}</div>}

      {/* Divider */}
      <div className="mt-10 mb-2 border-t border-gray-200/60 dark:border-gray-700/60" />
    </section>
  );
}
