/**
 * `next/og` 타입 보강.
 *
 * Next 15.5.18 의 package.json 에 `exports` 필드가 없고 index.d.ts 의 triple-slash
 * reference 목록에도 og 모듈이 빠져 있어서, "moduleResolution": "bundler" 환경의
 * tsc 가 `next/og` 를 인식하지 못함 (런타임은 정상 작동).
 *
 * `node_modules/next/og.d.ts` 가 가리키는 실제 구현을 그대로 re-export 해서 보강.
 */
declare module "next/og" {
  export { ImageResponse } from "next/dist/server/og/image-response";
}
