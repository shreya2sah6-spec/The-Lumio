import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import type { Session } from "@supabase/supabase-js";

// How long to wait for Supabase to process URL tokens before giving up.
const CALLBACK_TIMEOUT_MS = 12_000;

// ─── AuthCallbackPage ──────────────────────────────────────────────────────────
// Landing page after a social OAuth redirect. Supabase processes the URL hash
// or PKCE code and emits SIGNED_IN via onAuthStateChange. We wait for that
// event rather than calling getSession() immediately, which would race against
// Supabase's async URL-token processing and return null for some users/browsers.

export function AuthCallbackPage() {
  const navigate = useNavigate();
  // Prevent double-navigation if both the auth event and the timeout fire
  const navigatedRef = useRef(false);

  useEffect(() => {
    // ── 1. Check for OAuth error params in the URL ────────────────────────────
    // If the user cancels the Google consent screen, Google redirects back with
    // ?error=access_denied. Supabase forwards this to our callback URL.
    const url = new URL(window.location.href);
    const oauthError = url.searchParams.get("error");
    const oauthErrorDesc = url.searchParams.get("error_description");

    if (oauthError) {
      console.warn("[Lumio] OAuth error from provider:", oauthError, oauthErrorDesc);
      sessionStorage.setItem("lumio:social_auth_error", oauthError === "access_denied" ? "cancelled" : "provider_error");
      navigate("/auth", { replace: true });
      return;
    }

    // ── 2. Wait for Supabase to fire SIGNED_IN ────────────────────────────────
    // onAuthStateChange is the reliable way to know when the session is ready,
    // regardless of whether Supabase used implicit flow (hash) or PKCE (code).
    function finalize(session: Session | null, isError = false) {
      if (navigatedRef.current) return;
      navigatedRef.current = true;

      if (session && !isError) {
        sessionStorage.setItem("lumio:social_auth_complete", "true");
        const displayName =
          session.user.user_metadata?.full_name ||
          session.user.user_metadata?.name ||
          "";
        if (displayName) {
          sessionStorage.setItem("lumio:social_display_name", displayName);
        }
      } else {
        if (!isError) {
          // INITIAL_SESSION fired with an existing session — already logged in,
          // send directly to the app.
          navigate("/home/feed", { replace: true });
          return;
        }
        sessionStorage.setItem("lumio:social_auth_error", "no_session");
      }

      navigate("/auth", { replace: true });
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        // OAuth succeeded — session is fully established.
        finalize(session);
      } else if (event === "INITIAL_SESSION" && session) {
        // User was already logged in before starting OAuth (rare but possible).
        // Skip onboarding steps and go straight to the app.
        if (!navigatedRef.current) {
          navigatedRef.current = true;
          navigate("/home/feed", { replace: true });
        }
      }
    });

    // ── 3. Safety timeout ─────────────────────────────────────────────────────
    // If Supabase never fires SIGNED_IN (network failure, rate limit, bad config),
    // don't leave the user on a blank spinner forever.
    const timeout = setTimeout(() => {
      console.error("[Lumio] Auth callback timed out after", CALLBACK_TIMEOUT_MS, "ms");
      finalize(null, true);
    }, CALLBACK_TIMEOUT_MS);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [navigate]);

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
