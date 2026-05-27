import { redirect } from "next/navigation";

/** LBO 101 시리즈는 /deal-101 로 이관되었습니다. */
export default function LboCapitalStructureRedirect() {
  redirect("/deal-101/lbo-capital-structure");
}
