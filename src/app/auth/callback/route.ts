import { NextRequest, NextResponse } from "next/server";
import { createSSRClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createSSRClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("onboarded")
          .eq("id", user.id)
          .single();

        if (!profile) {
          await supabase.from("profiles").insert({
            id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name,
            avatar_url: user.user_metadata?.avatar_url,
          });
          return NextResponse.redirect(`${origin}/onboarding`);
        }

        if (!profile.onboarded) {
          return NextResponse.redirect(`${origin}/onboarding`);
        }

        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/`);
}
