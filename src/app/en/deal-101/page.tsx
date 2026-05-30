/**
 * /en/deal-101 index → redirects to /en/learn.
 * Individual chapters (e.g. /en/deal-101/ma-ch01-overview) remain intact.
 */
import { permanentRedirect } from "next/navigation";

export default function Deal101IndexRedirectEn() {
  permanentRedirect("/en/learn");
}
