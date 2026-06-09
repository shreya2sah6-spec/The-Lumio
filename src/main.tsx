import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <div className="min-w-[360px] max-w-[800px] mx-auto w-full min-h-screen">
    <App />
  </div>
);