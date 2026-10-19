import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}