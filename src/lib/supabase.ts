import { createClient } from "@supabase/supabase-js";

// Set these in your .env file (see .env.example at project root)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "[Lumio] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing. " +
    "Copy .env.example → .env, fill in the values, then restart Vite."
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
