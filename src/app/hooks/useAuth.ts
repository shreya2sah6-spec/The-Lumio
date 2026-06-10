import { useState, useEffect } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase";

interface AuthState {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

// Reactive auth state — updates automatically whenever the session changes
// (sign-in, sign-out, token refresh, OAuth callback).
export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    session: null,
    user: null,
    loading: true,
  });

  useEffect(() => {
    // Hydrate current session on mount
    supabase.auth.getSession().then(({ data }) => {
      setState({
        session: data.session,
        user: data.session?.user ?? null,
        loading: false,
      });
    });

    // Subscribe to future auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setState({
        session,
        user: session?.user ?? null,
        loading: false,
      });
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return state;
}
