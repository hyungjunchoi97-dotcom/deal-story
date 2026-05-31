/**
 * HighlightText — 딜 페이지 텍스트 강조 헬퍼
 *
 * 두 가지 강조 마크업을 지원한다. 의도에 따라 골라 쓰면 시각적으로
 * 다르게 렌더링된다.
 *
 *   1) [텍스트]   — 단락 헤더/섹션 라벨용.
 *                   대괄호가 화면에 그대로 보이며 굵게(검은색) 처리.
 *                   예: "[Round 1] 공개매수 전쟁이 시작됐다..."
 *                       "[김병주 회장의 이력] 그의 커리어는..."
 *
 *   2) **텍스트** — 본문 안의 강조용.
 *                   별표는 사라지고 본문 안에서 [빨간색 + 굵게]로 강조.
 *                   예: "전환가 18만 원, **리픽싱 없는 정통 컨버터블**."
 *
 * 사용 규칙:
 *   - 단락 시작 헤더/라벨 → [텍스트]
 *   - 본문 안의 수치·핵심 키워드 강조 → **텍스트**
 *
 * 사용 예:
 *   <HL text={point} />
 *   <HL text={move.detail} />
 *
 * 메모: 이전에는 **마크다운 볼드를 금지했으나, 그건 렌더링이 없었기
 *       때문. 이 컴포넌트가 양쪽을 모두 처리하므로 다시 사용 가능.
 */

export function HL({ text }: { text: string | undefined | null }) {
  if (!text) return null;
  // 두 패턴을 한 번에 캡처해서 분할.
  // 패턴 1: [텍스트]   (대괄호 안에 ] 없음 — 짝 마침)
  // 패턴 2: **텍스트** (양옆 별표 두 개, 안에 별표 없음)
  const parts = text.split(/(\[[^\]]+\]|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        // 단락 헤더 — 대괄호 보이는 채로 검은 볼드
        if (/^\[[^\]]+\]$/.test(part)) {
          return (
            <strong key={i} className="font-semibold">
              {part}
            </strong>
          );
        }
        // 본문 강조 — 별표 제거 + 빨간 볼드
        if (/^\*\*[^*]+\*\*$/.test(part)) {
          const inner = part.slice(2, -2);
          return (
            <strong key={i} className="font-semibold text-rose-600 dark:text-rose-400">
              {inner}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
