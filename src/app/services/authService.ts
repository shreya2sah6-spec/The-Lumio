import { supabase } from "../../lib/supabase";

export type SocialProvider = "google" | "apple" | "linkedin_oidc";

// ─── Environment detection ─────────────────────────────────────────────────────

/**
 * Returns true when the page is running inside a WebView or in-app browser
 * (WhatsApp, Instagram, Facebook, LinkedIn, Gmail, Twitter/X, etc.).
 *
 * Google OAuth refuses to show its consent screen in these environments and
 * returns Error 403: disallowed_useragent. Samsung Internet is a real browser
 * and is explicitly excluded even though its UA is unusual.
 */
export function isInAppBrowser(): boolean {
  const ua = navigator.userAgent;

  // Samsung Internet is a real, capable browser — never block it.
  if (/SamsungBrowser/.test(ua)) return false;

  return (
    // Facebook / Instagram / Messenger
    /FBAN|FBAV|Instagram|FBIOS|FBSS/.test(ua) ||
    // Twitter / X
    /\bTwitter\b|twitterandroid/.test(ua) ||
    // LinkedIn app (not LinkedIn browser tab)
    /LinkedInApp/.test(ua) ||
    // Snapchat
    /Snapchat/.test(ua) ||
    // TikTok
    /musical_ly|TikTok/.test(ua) ||
    // Line
    /Line\//.test(ua) ||
    // Telegram in-app browser
    /Telegram/.test(ua) ||
    // Android WebView — presence of "wv)" flag in the UA string
    (/Android/.test(ua) && /wv\)/.test(ua)) ||
    // iOS WebView — WKWebView strips "Safari/" from the UA but keeps "AppleWebKit"
    (/iPhone|iPad/.test(ua) && !/Safari\//.test(ua) && /AppleWebKit/.test(ua)) ||
    // Google Search App (GSA) in-app browser on iOS
    /\bGSA\b/.test(ua)
  );
}

// ─── Social login ──────────────────────────────────────────────────────────────

/**
 * Initiates a full-page redirect OAuth flow. The browser navigates to the
 * provider's consent screen, then redirects back to /auth/callback.
 *
 * errorRedirectTo ensures that if Google/Supabase returns an error (e.g., the
 * user cancels), they land back on our callback page (not a Supabase error page)
 * where we can show a friendly message.
 */
export async function signInWithSocial(provider: SocialProvider): Promise<void> {
  const callbackUrl = `${window.location.origin}/auth/callback`;

  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: callbackUrl,
      // errorRedirectTo keeps error flows inside the app rather than on a Supabase error page
      skipBrowserRedirect: false,
      scopes:
        provider === "google"
          ? "openid email profile"
          : provider === "linkedin_oidc"
            ? "openid profile email"
            : undefined,
      queryParams:
        provider === "google"
          ? { prompt: "select_account", access_type: "offline" }
          : undefined,
    },
  });

  if (error) throw error;
  // On success the browser is already navigating away — nothing more to do.
}

// ─── Error classification ──────────────────────────────────────────────────────

/**
 * Maps raw Supabase / OAuth error strings to user-friendly messages.
 * Call this inside the catch block of any auth operation.
 */
export function classifyAuthError(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  const lower = msg.toLowerCase();

  if (lower.includes("provider") || lower.includes("not enabled")) {
    return "This sign-in method isn't configured yet. Please try again later.";
  }
  if (lower.includes("network") || lower.includes("fetch")) {
    return "No internet connection. Please check your connection and try again.";
  }
  if (lower.includes("rate limit") || lower.includes("too many")) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  if (lower.includes("invalid_grant") || lower.includes("invalid grant")) {
    return "Sign-in expired. Please try again.";
  }
  if (lower.includes("access_denied") || lower.includes("cancelled")) {
    return "Sign-in was cancelled.";
  }
  if (lower.includes("redirect")) {
    return "Redirect configuration error. Please contact support.";
  }
  return "Sign-in failed. Please try again.";
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

/**
 * Signs out the user and clears all Lumio-specific auth state from storage
 * so the next sign-in gets a clean slate.
 */
export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();

  // Clear onboarding data regardless of signOut success
  localStorage.removeItem("lumio_name");
  localStorage.removeItem("lumio_domain");
  localStorage.removeItem("lumio_experience");
  sessionStorage.removeItem("lumio:social_auth_complete");
  sessionStorage.removeItem("lumio:social_display_name");
  sessionStorage.removeItem("lumio:social_auth_error");

  if (error) throw error;
}
