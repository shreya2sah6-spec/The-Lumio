import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Root() {
  const location = useLocation();

  // Notify page-level overlays (JobsPage filter sheet, etc.) that a navigation
  // occurred so they can close themselves. Keyed on location.key so this fires
  // on EVERY navigate() call — including same-path navigations with different
  // state (e.g. mentor A → mentor B, both at /mentor-profile).
  //
  // IMPORTANT: do NOT manipulate the DOM here (no portal.remove(), no
  // el.remove()). Radix UI portal nodes (data-slot="*-portal") are owned by
  // React's fiber tree. Removing them outside React corrupts the virtual DOM
  // reconciliation, causing silent render failures and click-blocking overlays
  // that accumulate with every navigation — exactly the bug this cleans up.
  useEffect(() => {
    const ev = new CustomEvent("lumio:navigate", {
      detail: { pathname: location.pathname },
    });
    window.dispatchEvent(ev);
  }, [location.key]);

  // Key the Outlet on location.key so every navigate() call — including
  // same-path navigations — forces a clean component remount. React owns
  // all cleanup: portal removal, event listener teardown, state reset.
  return <Outlet key={location.key} />;
}

export function HydrateFallback() {
  return null;
}
