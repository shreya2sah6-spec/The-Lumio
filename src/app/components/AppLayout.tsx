import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  profileNavImg?: string;
  hideNav?: boolean;
}

export function AppLayout({
  children,
  header,
  profileNavImg,
  hideNav = false,
}: AppLayoutProps) {
  return (
    <div className="h-[100dvh] overflow-hidden bg-[#f0ecf7] flex justify-center">
      <div className="relative w-full max-w-[430px] h-full bg-[#fffeff] flex flex-col overflow-hidden">

        {/* Header — sits above scroll container, never moves */}
        {header && (
          <div className="shrink-0 z-40 bg-[#fffeff]">
            {header}
          </div>
        )}

        {/* Scrollable content — fills remaining height */}
        <main className={`flex-1 overflow-y-auto overflow-x-hidden ${hideNav ? "" : "pb-[88px]"}`}>
          {children}
        </main>

        {/* Bottom nav — fixed to viewport bottom */}
        {!hideNav && <BottomNav profileNavImg={profileNavImg} />}
      </div>
    </div>
  );
}
