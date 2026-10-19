import Link from "next/link";
import { 
  LayoutDashboard, 
  BookOpen, 
  Terminal, 
  Settings, 
  Radio 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Labs & Simulations", href: "/labs", icon: Terminal },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <aside className="w-64 border-r bg-card h-screen flex flex-col justify-between p-4 sticky top-0">
      <div className="space-y-6">
        {/* Brand / Logo Platform */}
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-primary text-primary-foreground rounded-lg">
            <Radio className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight">5G Edu Platform</h1>
            <p className="text-xs text-muted-foreground">Tel-U x UTM</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="block">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Status / Badge Footer */}
      <div className="p-3 bg-muted/50 rounded-lg text-xs space-y-1">
        <p className="font-medium text-foreground">5G Core Lab Session</p>
        <p className="text-muted-foreground">Status: <span className="text-green-500 font-semibold">Active</span></p>
      </div>
    </aside>
  );
}