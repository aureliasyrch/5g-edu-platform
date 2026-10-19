"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, LayoutDashboard, Radio, Settings, Terminal } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Labs & Simulations", href: "/labs", icon: Terminal },
  { label: "Settings", href: "/settings", icon: Settings },
] as const;

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col justify-between border-r bg-card p-4">
      <div className="space-y-6">
        <Link href="/dashboard" className="flex items-center gap-3 px-2">
          <div className="rounded-lg bg-primary p-2 text-primary-foreground">
            <Radio className="size-5" aria-hidden />
          </div>
          <div>
            <p className="text-base font-bold leading-tight">5G Edu Platform</p>
            <p className="text-xs text-muted-foreground">Tel-U × UTM</p>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
                  "w-full justify-start gap-3",
                  !isActive && "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Dummy — nanti diisi data sesi lab dari backend */}
      <div className="space-y-1 rounded-lg bg-muted/50 p-3 text-xs">
        <p className="font-medium">5G Core Lab Session</p>
        <p className="text-muted-foreground">
          Status:{" "}
          <span className="font-semibold text-green-600 dark:text-green-500">Active</span>
        </p>
      </div>
    </aside>
  );
}