/**
 * 본문 인라인 출처 위첨자 — `<Sup n={4} />` → 작은 파란 `[4]`.
 *
 * 운영 상세 페이지(DealPageClient) 본문 단락은 현재 plain `<p>{para}</p>` 로
 * 렌더되어 인라인 인용을 표현할 방법이 없음. 본문 안에 출처 표기를 다시
 * 도입할 때 이 컴포넌트를 사용하면 됨. (원본은 삭제된 deals/preview 페이지의
 * 디자인 패턴에서 가져옴 — 보관 가치 있는 유일한 스니펫이었음)
 */

export default function Sup({ n }: { n: number }) {
  return (
    <sup className="text-[9px] text-blue-400 font-bold ml-0.5 align-super">
      [{n}]
    </sup>
  );
}
