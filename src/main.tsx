import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

import Clarity from "@microsoft/clarity";

Clarity.init("x7zgwy6p0s");

createRoot(document.getElementById("root")!).render(
  <div className="max-w-[430px] mx-auto w-full min-h-[100dvh] overflow-x-hidden">
    <App />
  </div>
);