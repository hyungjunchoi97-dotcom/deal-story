import { notFound } from "next/navigation";
import { createPublicClient } from "@/lib/supabase/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReportDetailClient from "./ReportDetailClient";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("weekly_reports")
    .select("title, preview")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  if (!data) return {};
  return { title: `${data.title} | Deal Story`, description: data.preview };
}

export default async function ReportDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = createPublicClient();
  const { data: report } = await supabase
    .from("weekly_reports")
    .select("id, slug, title, preview, content, published_at")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (!report) notFound();

  return (
    <>
      <Header />
      <main>
        <ReportDetailClient report={report} />
      </main>
      <Footer />
    </>
  );
}
