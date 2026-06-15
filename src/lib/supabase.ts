import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "[Lumio] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing. " +
    "Copy .env.example → .env, fill in the values, then restart Vite."
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    // Automatically refresh the access token before it expires (1-hour tokens)
    autoRefreshToken: true,
    // Persist the session in localStorage so users stay logged in across tabs/reloads
    persistSession: true,
    // Process OAuth tokens from the URL hash (#access_token=...) on page load
    detectSessionInUrl: true,
    // Namespace the storage key so multiple Supabase projects on the same domain don't collide
    storageKey: "lumio:supabase:auth",
  },
});
