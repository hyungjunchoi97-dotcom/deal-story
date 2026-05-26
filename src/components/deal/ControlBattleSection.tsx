"use client";

import { motion } from "framer-motion";
import type {
  ControlBattleOverview,
  BattleSide,
  WeaponEffectiveness,
} from "@/lib/deal-data";

// ── 색상 맵 ───────────────────────────────────────────────────────

const SIDE = {
  attack: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-800",
    dot: "bg-rose-500",
    text: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200",
    header: "text-rose-600 dark:text-rose-400",
    tag: "bg-rose-500",
    mobileBorder: "border-l-rose-400",
  },
  defense: {
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    border: "border-indigo-200 dark:border-indigo-800",
    dot: "bg-indigo-500",
    text: "text-indigo-700 dark:text-indigo-300",
    badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200",
    header: "text-indigo-600 dark:text-indigo-400",
    tag: "bg-indigo-500",
    mobileBorder: "border-l-indigo-400",
  },
  neutral: {
    bg: "bg-zinc-50 dark:bg-zinc-800/40",
    border: "border-zinc-200 dark:border-zinc-700",
    dot: "bg-zinc-400",
    text: "text-zinc-600 dark:text-zinc-400",
    badge: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    header: "text-zinc-500",
    tag: "bg-zinc-400",
    mobileBorder: "border-l-zinc-300",
  },
} satisfies Record<BattleSide, Record<string, string>>;

const EFFECTIVENESS: Record<
  WeaponEffectiveness,
  { ko: string; en: string; cls: string }
> = {
  decisive: {
    ko: "결정타",
    en: "Decisive",
    cls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
  },
  effective: {
    ko: "효과적",
    en: "Effective",
    cls: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300",
  },
  blocked: {
    ko: "차단됨",
    en: "Blocked",
    cls: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
  },
  backfired: {
    ko: "역효과",
    en: "Backfired",
    cls: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
  },
};

const LABELS = {
  ko: {
    battleTimeline: "공방 타임라인",
    attack: "공격",
    defense: "방어",
    vs: "vs",
    financialArsenal: "금융 무기 아스날",
    attackWeapons: "공격 무기",
    defenseWeapons: "방어 무기",
    turningPoint: "결정적 순간",
    verdict: "최종 판정",
    winner: "승자",
    margin: "격차",
    catalyst: "⚡ 분쟁 발단",
    priceImpact: "주가 임팩트",
    preContest: "분쟁 전",
    peak: "최고가",
    postContest: "현재",
    draw: "무승부",
    winnerAttack: "공격측 승",
    winnerDefense: "방어측 승",
  },
  en: {
    battleTimeline: "Battle Timeline",
    attack: "Attack",
    defense: "Defense",
    vs: "vs",
    financialArsenal: "Financial Arsenal",
    attackWeapons: "Offense Weapons",
    defenseWeapons: "Defense Weapons",
    turningPoint: "Turning Point",
    verdict: "Final Verdict",
    winner: "Winner",
    margin: "Margin",
    catalyst: "⚡ Catalyst",
    priceImpact: "Price Impact",
    preContest: "Pre-Contest",
    peak: "Peak",
    postContest: "Post-Contest",
    draw: "Draw",
    winnerAttack: "Attacker Wins",
    winnerDefense: "Defender Wins",
  },
};

// ── 애니메이션 설정 ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

// ── 서브 컴포넌트: 무브 카드 ──────────────────────────────────────

function MoveCard({
  move,
  side,
}: {
  move: ControlBattleOverview["battleMoves"][number];
  side: BattleSide;
}) {
  const c = SIDE[side];
  return (
    <div
      className={`rounded-xl border p-4 space-y-1.5 ${c.bg} ${c.border}`}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className={`text-[11px] font-semibold uppercase tracking-wide ${c.text}`}>
          {move.actor}
        </span>
        <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
          {move.date}
        </span>
      </div>
      <p className="font-bold text-sm text-gray-900 dark:text-gray-50 leading-snug">
        {move.move}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
        {move.detail}
      </p>
      {(move.financialImpact || move.weapon) && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {move.weapon && (
            <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${c.badge}`}>
              {move.weapon}
            </span>
          )}
          {move.financialImpact && (
            <span className="text-[10px] font-mono font-semibold rounded-full px-2 py-0.5 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {move.financialImpact}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ── 서브 컴포넌트: 배틀 타임라인 (desktop) ───────────────────────

function BattleTimeline({
  data,
  t,
}: {
  data: ControlBattleOverview;
  t: (typeof LABELS)["ko"];
}) {
  return (
    <div className="relative">
      {/* 헤더 레이블 */}
      <div className="hidden md:grid grid-cols-[1fr_56px_1fr] mb-4">
        <div className={`text-sm font-bold ${SIDE.attack.header} flex items-center gap-1.5`}>
          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
          {data.attackerLabel}
          <span className="text-[11px] font-normal opacity-60 ml-1">({t.attack})</span>
        </div>
        <div />
        <div className={`text-sm font-bold ${SIDE.defense.header} flex items-center gap-1.5 justify-end`}>
          <span className="text-[11px] font-normal opacity-60 mr-1">({t.defense})</span>
          {data.defenderLabel}
          <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
        </div>
      </div>

      {/* 중심선 */}
      <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2 pointer-events-none" />

      {/* 데스크톱: 좌우 교차 타임라인 */}
      <div className="hidden md:block space-y-5">
        {data.battleMoves.map((move, i) => {
          const side = move.side as BattleSide;
          const isNeutral = side === "neutral";
          const isAttack = side === "attack";
          const variants = isAttack ? slideLeft : isNeutral ? fadeUp : slideRight;

          if (isNeutral) {
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={variants}
                className="relative grid grid-cols-[1fr_56px_1fr]"
              >
                <div />
                {/* 중심 점 */}
                <div className="flex flex-col items-center z-10">
                  <div className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-zinc-900 ${SIDE.neutral.dot}`} />
                </div>
                {/* 중앙 카드 — 두 컬럼 걸침 */}
                <div className="absolute inset-x-10 top-0">
                  <MoveCard move={move} side="neutral" />
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={variants}
              className={`relative grid grid-cols-[1fr_56px_1fr] items-start`}
            >
              {/* 공격측 카드 (왼쪽) */}
              <div>{isAttack && <MoveCard move={move} side="attack" />}</div>

              {/* 중심 점 */}
              <div className="flex flex-col items-center pt-4 z-10">
                <div
                  className={`w-3 h-3 rounded-full ring-2 ring-white dark:ring-zinc-900 ${SIDE[side].dot}`}
                />
              </div>

              {/* 방어측 카드 (오른쪽) */}
              <div>{!isAttack && <MoveCard move={move} side="defense" />}</div>
            </motion.div>
          );
        })}
      </div>

      {/* 모바일: 단일 컬럼 타임라인 */}
      <div className="md:hidden space-y-3">
        {data.battleMoves.map((move, i) => {
          const side = move.side as BattleSide;
          const c = SIDE[side];
          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className={`flex gap-3 rounded-xl border-l-4 border border-l-4 pl-3 pr-3 py-3 ${c.bg} ${c.border} ${c.mobileBorder}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-[10px] font-semibold uppercase ${c.text}`}>
                    {move.actor}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">{move.date}</span>
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-50 leading-snug">{move.move}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{move.detail}</p>
                {(move.weapon || move.financialImpact) && (
                  <div className="flex gap-1.5 mt-1.5 flex-wrap">
                    {move.weapon && (
                      <span className={`text-[10px] rounded-full px-2 py-0.5 font-medium ${c.badge}`}>
                        {move.weapon}
                      </span>
                    )}
                    {move.financialImpact && (
                      <span className="text-[10px] font-mono rounded-full px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        {move.financialImpact}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ── 서브 컴포넌트: 금융 무기 아스날 ──────────────────────────────

function FinancialArsenal({
  data,
  t,
  lang,
}: {
  data: ControlBattleOverview;
  t: (typeof LABELS)["ko"];
  lang: "ko" | "en";
}) {
  const attackWeapons = data.financialWeapons.filter((w) => w.side === "attack");
  const defenseWeapons = data.financialWeapons.filter((w) => w.side === "defense");

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* 공격 무기 */}
      <div className="space-y-3">
        <h4 className={`text-sm font-bold flex items-center gap-2 ${SIDE.attack.header}`}>
          <span className="text-base">⚔️</span> {t.attackWeapons}
          <span className="text-[11px] opacity-60 font-normal">— {data.attackerLabel}</span>
        </h4>
        {attackWeapons.map((w, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideLeft}
            className={`rounded-xl border p-3.5 space-y-1.5 ${SIDE.attack.bg} ${SIDE.attack.border}`}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-50">{w.name}</span>
              <span
                className={`text-[10px] font-semibold rounded-full px-2 py-0.5 shrink-0 ${EFFECTIVENESS[w.effectiveness].cls}`}
              >
                {EFFECTIVENESS[w.effectiveness][lang]}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{w.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 방어 무기 */}
      <div className="space-y-3">
        <h4 className={`text-sm font-bold flex items-center gap-2 ${SIDE.defense.header}`}>
          <span className="text-base">🛡️</span> {t.defenseWeapons}
          <span className="text-[11px] opacity-60 font-normal">— {data.defenderLabel}</span>
        </h4>
        {defenseWeapons.map((w, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideRight}
            className={`rounded-xl border p-3.5 space-y-1.5 ${SIDE.defense.bg} ${SIDE.defense.border}`}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-50">{w.name}</span>
              <span
                className={`text-[10px] font-semibold rounded-full px-2 py-0.5 shrink-0 ${EFFECTIVENESS[w.effectiveness].cls}`}
              >
                {EFFECTIVENESS[w.effectiveness][lang]}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{w.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── 서브 컴포넌트: 주가 임팩트 3-포인트 ─────────────────────────

function PriceImpact({
  data,
  t,
}: {
  data: ControlBattleOverview;
  t: (typeof LABELS)["ko"];
}) {
  const { priceImpact } = data;
  const points = [
    { label: t.preContest, value: priceImpact.preContest, color: "text-gray-700 dark:text-gray-300" },
    { label: t.peak, value: priceImpact.peak, color: "text-rose-600 dark:text-rose-400" },
    { label: t.postContest, value: priceImpact.postContest, color: "text-indigo-600 dark:text-indigo-400" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5"
    >
      <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
        📈 {t.priceImpact}
      </h4>
      <div className="relative">
        {/* 연결선 */}
        <div className="absolute top-5 left-[calc(16.67%)] right-[calc(16.67%)] h-0.5 bg-gradient-to-r from-gray-300 via-rose-400 to-indigo-400 dark:from-gray-600 dark:via-rose-700 dark:to-indigo-700" />
        <div className="grid grid-cols-3 gap-2">
          {points.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative ${
                  i === 0
                    ? "bg-gray-100 dark:bg-gray-800"
                    : i === 1
                    ? "bg-rose-100 dark:bg-rose-950/50"
                    : "bg-indigo-100 dark:bg-indigo-950/50"
                }`}
              >
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  {i === 0 ? "S" : i === 1 ? "↑" : "E"}
                </span>
              </div>
              <div className="text-center">
                <div className={`font-bold text-sm ${p.color} font-mono`}>{p.value}</div>
                <div className="text-[11px] text-gray-500 dark:text-gray-500 mt-0.5">{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
        {priceImpact.note}
      </p>
    </motion.div>
  );
}

// ── 서브 컴포넌트: 결정적 순간 ────────────────────────────────────

function TurningPoint({
  data,
  t,
}: {
  data: ControlBattleOverview;
  t: (typeof LABELS)["ko"];
}) {
  const { turningPoint } = data;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0">⚡</span>
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">{t.turningPoint}</h4>
            <span className="text-[11px] font-mono text-amber-600 dark:text-amber-500">
              {turningPoint.date}
            </span>
          </div>
          <p className="font-semibold text-base text-gray-900 dark:text-gray-50 mb-1.5">
            {turningPoint.event}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {turningPoint.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── 서브 컴포넌트: 최종 판정 ──────────────────────────────────────

function Verdict({
  data,
  t,
}: {
  data: ControlBattleOverview;
  t: (typeof LABELS)["ko"];
}) {
  const { verdict } = data;
  const isDefense = verdict.winner === "defense";
  const isDraw = verdict.winner === "draw";

  const winnerColors = isDraw
    ? "border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800/50"
    : isDefense
    ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/40"
    : "border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/40";

  const winnerTag = isDraw
    ? t.draw
    : isDefense
    ? t.winnerDefense
    : t.winnerAttack;

  const tagColor = isDraw
    ? "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200"
    : isDefense
    ? "bg-indigo-600 text-white"
    : "bg-rose-600 text-white";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className={`rounded-2xl border-2 p-5 ${winnerColors}`}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl shrink-0">{isDraw ? "🤝" : isDefense ? "🛡️" : "⚔️"}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.verdict}</h4>
            <span className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${tagColor}`}>
              {winnerTag}
            </span>
          </div>
          <p className="font-bold text-lg text-gray-900 dark:text-gray-50 mb-1">
            {verdict.winnerLabel}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
            {t.margin}: <span className="font-mono font-semibold text-gray-700 dark:text-gray-300">{verdict.margin}</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200/70 dark:border-gray-700/50 pt-3">
            {verdict.note}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────

interface Props {
  data: ControlBattleOverview;
  lang?: "ko" | "en";
}

export default function ControlBattleSection({ data, lang = "ko" }: Props) {
  const t = LABELS[lang];

  return (
    <div className="space-y-10">
      {/* 인트로 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="space-y-4"
      >
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{data.body}</p>

        {/* 분쟁 발단 박스 */}
        <div className="rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/60 dark:bg-amber-950/20 px-5 py-4">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest block mb-1.5">
            {t.catalyst}
          </span>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{data.catalyst}</p>
        </div>
      </motion.div>

      {/* 주가 임팩트 */}
      <PriceImpact data={data} t={t} />

      {/* 배틀 타임라인 */}
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-5 flex items-center gap-2">
          <span className="text-lg">🗡️</span> {t.battleTimeline}
        </h3>
        <BattleTimeline data={data} t={t} />
      </div>

      {/* 금융 무기 아스날 */}
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-5 flex items-center gap-2">
          <span className="text-lg">🔩</span> {t.financialArsenal}
        </h3>
        <FinancialArsenal data={data} t={t} lang={lang} />
      </div>

      {/* 결정적 순간 + 최종 판정 */}
      <TurningPoint data={data} t={t} />
      <Verdict data={data} t={t} />
    </div>
  );
}
