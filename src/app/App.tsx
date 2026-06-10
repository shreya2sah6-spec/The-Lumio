import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-white">
      <RouterProvider router={router} />
    </div>
  );
}