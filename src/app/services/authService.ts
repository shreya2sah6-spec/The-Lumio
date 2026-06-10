import { supabase } from "../../lib/supabase";

export type SocialProvider = "google" | "apple" | "linkedin_oidc";

// After OAuth redirect, land here so the app knows to jump to name-entry step.
// Must match the redirect URL configured in your Supabase dashboard and
// each OAuth provider's allowed redirect URIs.
const OAUTH_REDIRECT_URL = `${window.location.origin}/auth/callback`;

// ─── Social login ──────────────────────────────────────────────────────────────
// Initiates a full-page redirect OAuth flow. The browser navigates to the
// provider's consent screen, then redirects back to OAUTH_REDIRECT_URL.

export async function signInWithSocial(provider: SocialProvider): Promise<void> {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      // Request profile scopes so we can prefill the user's name
      scopes:
        provider === "google"
          ? "openid email profile"
          : provider === "linkedin_oidc"
            ? "openid profile email"
            : undefined,
      queryParams:
        provider === "google"
          ? { prompt: "select_account" } // Always show account picker
          : undefined,
    },
  });

  if (error) throw error;
  // On success the browser is already navigating — no further action needed.
}

// ─── Session helpers ───────────────────────────────────────────────────────────

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
