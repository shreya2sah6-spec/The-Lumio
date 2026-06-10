import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop";

export function Root() {
  const location = useLocation();

  useEffect(() => {
    const ev = new CustomEvent("lumio:navigate", {
      detail: { pathname: location.pathname },
    });

    window.dispatchEvent(ev);
  }, [location.key]);

  return (
    <>
      <ScrollToTop />

      <Outlet key={location.key} />
    </>
  );
}

export function HydrateFallback() {
  return null;
}