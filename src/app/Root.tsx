import { Outlet } from "react-router";

export function Root() {
  return <Outlet />;
}

export function HydrateFallback() {
  return null;
}
