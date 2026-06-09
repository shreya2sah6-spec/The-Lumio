import { useEffect } from "react";
import { HomePage } from "./HomePage";

/**
 * Onboarding transition screen — shown once, immediately after login.
 *
 * Renders an identical visual to home/feed with the ProfileCompletionCard
 * inserted at the top. Uses a cleanup effect so that ANY navigation away
 * from this screen (navbar tabs, feed cards, or the Autofill CTA) marks
 * the onboarding as complete, preventing the user from ever returning here.
 */
export function HomeProfileCompletionPage() {
  useEffect(() => {
    return () => {
      // Mark profile completion done when the user leaves this screen
      // for any reason — covers navbar taps, feed interactions, and the CTA.
      localStorage.setItem("profileComplete", "true");
    };
  }, []);

  return <HomePage showProfileCard />;
}
