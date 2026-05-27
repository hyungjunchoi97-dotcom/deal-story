import { redirect } from "next/navigation";

/** LBO 101 시리즈는 /en/deal-101 로 이관되었습니다. */
export default function RedirectToNewUrl() {
  redirect("/en/deal-101/lbo-overview");
}
