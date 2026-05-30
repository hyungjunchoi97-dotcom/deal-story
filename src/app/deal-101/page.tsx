/**
 * /deal-101 인덱스 → /learn 으로 통합되어 redirect.
 * 개별 챕터 (예: /deal-101/ma-ch01-overview) 는 그대로 유지.
 */
import { permanentRedirect } from "next/navigation";

export default function Deal101IndexRedirect() {
  permanentRedirect("/learn");
}
