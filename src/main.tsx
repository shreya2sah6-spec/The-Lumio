import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <div className="max-w-[430px] mx-auto w-full min-h-[100dvh] overflow-x-hidden">
    <App />
  </div>
);