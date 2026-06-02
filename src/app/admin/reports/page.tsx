import { notFound } from "next/navigation";
import { createPublicClient } from "@/lib/supabase/server";
import Header from "@/components/Header";
import AdminReportsClient from "./AdminReportsClient";

const ADMIN_KEY = "ds-admin-2024";

interface Props {
  searchParams: Promise<{ admin?: string }>;
}

export default async function AdminReportsPage({ searchParams }: Props) {
  const { admin } = await searchParams;
  if (admin !== ADMIN_KEY) notFound();

  const supabase = createPublicClient();
  const { data: reports } = await supabase
    .from("weekly_reports")
    .select("id, slug, title, published_at, is_published")
    .order("created_at", { ascending: false });

  return (
    <>
      <Header />
      <AdminReportsClient initialReports={reports ?? []} adminKey={ADMIN_KEY} />
    </>
  );
}
