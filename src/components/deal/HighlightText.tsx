/**
 * HighlightText — 딜 페이지 텍스트 강조 헬퍼
 *
 * 마크업은 [텍스트] 하나만 쓴다. 화면 렌더링에서 위치를 보고 두
 * 종류로 자동 분기한다.
 *
 *   - 텍스트의 [맨 앞 첫 글자] 가 [ 로 시작하는 경우의 그 [X]
 *     = 단락 헤더/섹션 라벨. 대괄호 그대로 + 검은 굵게.
 *
 *   - 그 외 위치의 모든 [X]
 *     = 본문 안 강조. 대괄호는 화면에 보이지 않고, 안쪽 텍스트가
 *       빨간색 + 굵게로 렌더링.
 *
 * 사용 예 (데이터 파일):
 *   "[Round 1] 본문 시작. 핵심은 [리픽싱 없는 정통 컨버터블]이다."
 *
 * 화면 표시:
 *   "[Round 1]" → 대괄호 그대로 검은 굵게
 *   "리픽싱 없는 정통 컨버터블" → 빨간 굵게 (대괄호 사라짐)
 *
 * 메모: 별표 ** 같은 마크다운 표기는 사용하지 않는다.
 *       화면에 마크업이 노출되거나 산만해 보이는 문제 회피.
 */

export function HL({ text }: { text: string | undefined | null }) {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\])/g);
  // 텍스트의 첫 글자(공백 제외)가 [ 로 시작하면 가장 처음 만나는
  // [X] 한 개만 헤더로 처리. 그 뒤·중간의 모든 [X] 는 강조.
  const startsWithHeader = text.trimStart().startsWith("[");
  let firstBracketSeen = false;
  return (
    <>
      {parts.map((part, i) => {
        if (/^\[[^\]]+\]$/.test(part)) {
          const isHeader = startsWithHeader && !firstBracketSeen;
          firstBracketSeen = true;
          if (isHeader) {
            // 단락 헤더 — 대괄호 그대로 + 검은 굵게
            return (
              <strong key={i} className="font-semibold">
                {part}
              </strong>
            );
          }
          // 본문 강조 — 대괄호 제거 + 빨간 굵게
          const inner = part.slice(1, -1);
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
