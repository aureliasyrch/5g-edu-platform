import { Circle, CircleCheck, CircleDot, Clock, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LabStatus, LabSummary } from "@/lib/mock/dashboard";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  LabStatus,
  {
    label: string;
    icon: LucideIcon;
    iconClass: string;
    badge: "default" | "secondary" | "outline";
  }
> = {
  completed: {
    label: "Completed",
    icon: CircleCheck,
    iconClass: "text-green-600 dark:text-green-500",
    badge: "secondary",
  },
  "in-progress": {
    label: "In progress",
    icon: CircleDot,
    iconClass: "text-amber-600 dark:text-amber-500",
    badge: "default",
  },
  "not-started": {
    label: "Not started",
    icon: Circle,
    iconClass: "text-muted-foreground",
    badge: "outline",
  },
};

export function LabList({ labs }: { labs: LabSummary[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your labs</CardTitle>
        <CardDescription>Simulated 5G Core hands-on labs</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="divide-y">
          {labs.map((lab) => {
            const status = statusConfig[lab.status];
            const Icon = status.icon;
            return (
              <li key={lab.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                <Icon className={cn("size-5 shrink-0", status.iconClass)} aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    Lab {lab.order} · {lab.title}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    {lab.specRef ? <span className="font-mono">{lab.specRef}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" aria-hidden />
                      {lab.estimatedMinutes} min
                    </span>
                  </div>
                </div>
                <Badge variant={status.badge}>{status.label}</Badge>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}