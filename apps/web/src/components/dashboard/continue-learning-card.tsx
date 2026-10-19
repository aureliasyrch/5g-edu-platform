import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CourseProgress } from "@/lib/mock/dashboard";
import { cn } from "@/lib/utils";
import { ProgressBar } from "./progress-bar";

export function ContinueLearningCard({ course }: { course: CourseProgress }) {
  const percent =
    course.totalModules === 0
      ? 0
      : Math.round((course.completedModules / course.totalModules) * 100);

  return (
    <Card>
      <CardHeader>
        <CardDescription>Continue learning</CardDescription>
        <CardTitle className="text-lg">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm">{course.currentModule}</p>
        <ProgressBar value={percent} label={`${course.title} progress`} />
        <p className="text-xs text-muted-foreground">
          {course.completedModules} of {course.totalModules} modules completed · {percent}%
        </p>
      </CardContent>
      <CardFooter>
        {/* TODO: arahkan ke /courses/[slug] setelah halaman detail course dibuat */}
        <Link href="/courses" className={cn(buttonVariants(), "gap-2")}>
          Continue
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </CardFooter>
    </Card>
  );
}