import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

// ─── AuthCallbackPage ──────────────────────────────────────────────────────────
// Landing page after a social OAuth redirect. Supabase automatically exchanges
// the code/token in the URL hash and establishes a session. We then flag that
// this is a new social sign-in so AuthPage knows to jump to the name-entry step.

export function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleCallback() {
      try {
        // Supabase processes the hash/query tokens from the redirect URL
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (data.session) {
          // Flag that a social login just completed. AuthPage reads this on mount.
          sessionStorage.setItem("lumio:social_auth_complete", "true");

          // Optionally prefill name from the provider's profile
          const displayName =
            data.session.user.user_metadata?.full_name ||
            data.session.user.user_metadata?.name ||
            "";
          if (displayName) {
            sessionStorage.setItem("lumio:social_display_name", displayName);
          }
        }
      } catch (err) {
        console.error("[Lumio] OAuth callback error:", err);
        sessionStorage.setItem("lumio:social_auth_error", "true");
      } finally {
        // Always return to the auth page — it handles next-step routing
        navigate("/auth", { replace: true });
      }
    }

    handleCallback();
  }, [navigate]);

  // Minimal loading screen — matches the app's color system
  return (
    <div className="h-[100dvh] flex items-center justify-center bg-[#fffeff]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-[#7d3aea] border-t-transparent animate-spin" />
        <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px] leading-[21px]">
          Signing you in…
        </p>
      </div>
    </div>
  );
}
