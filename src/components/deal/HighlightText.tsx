/**
 * HighlightText — 딜 페이지 텍스트 강조 헬퍼
 *
 * 데이터 파일(src/data/deals/*.ts) 안에서 강조하고 싶은 부분을
 * **마크다운 ** 대신** [텍스트] 형태로 감싸 표기한다.
 * 이 컴포넌트가 렌더링 시점에 `[텍스트]` 패턴을 잡아 굵게 처리한다.
 * 대괄호는 화면에 그대로 노출되며 볼드로 표시된다.
 *
 * 규칙:
 *   - ✅ "[1라운드] 공개매수 전쟁"
 *   - ❌ "**1라운드** 공개매수 전쟁"   ← ** 사용 금지
 *
 * 사용 예:
 *   <HL text={point} />
 *   <HL text={move.detail} />
 */

export function HL({ text }: { text: string | undefined | null }) {
  if (!text) return null;
  // [내용] 패턴을 캡처해 분할. 대괄호 안에 ] 가 없는 가장 가까운 짝만 매치.
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <strong key={i} className="font-semibold">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
