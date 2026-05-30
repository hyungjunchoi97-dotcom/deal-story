/**
 * /market-101 인덱스 → /learn 으로 통합되어 redirect.
 * 개별 챕터 (예: /market-101/dcm-ecosystem) 는 그대로 유지.
 */
import { permanentRedirect } from "next/navigation";

export default function Market101IndexRedirect() {
  permanentRedirect("/learn");
}
