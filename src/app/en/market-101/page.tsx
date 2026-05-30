/**
 * /en/market-101 index → redirects to /en/learn.
 * Individual chapters (e.g. /en/market-101/dcm-ecosystem) remain intact.
 */
import { permanentRedirect } from "next/navigation";

export default function Market101IndexRedirectEn() {
  permanentRedirect("/en/learn");
}
