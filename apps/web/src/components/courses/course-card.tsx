import Link from "next/link";
import { BookOpen, Clock, FlaskConical, Lock } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CourseCatalogItem } from "@/lib/mock/courses";
import { cn } from "@/lib/utils";

export function CourseCard({ course }: { course: CourseCatalogItem }) {
  const isAvailable = course.availability === "available";

  const card = (
    <Card
      className={cn(
        "h-full transition-colors",
        isAvailable ? "group-hover:border-primary/50" : "opacity-60",
      )}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">Phase {course.phase}</Badge>
          <Badge variant="secondary">{course.level}</Badge>
          {!isAvailable ? (
            <Badge variant="outline" className="gap-1">
              <Lock className="size-3" aria-hidden />
              Coming soon
            </Badge>
          ) : null}
        </div>
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription>{course.summary}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <BookOpen className="size-3" aria-hidden />
            {course.modules} modules
          </span>
          <span className="inline-flex items-center gap-1">
            <FlaskConical className="size-3" aria-hidden />
            {course.labs} labs
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" aria-hidden />~{course.estimatedHours} h
          </span>
        </div>
      </CardContent>

      {isAvailable && course.progress !== undefined ? (
        <CardFooter className="flex-col items-stretch gap-2">
          <ProgressBar value={course.progress} label={`${course.title} progress`} />
          <p className="text-xs text-muted-foreground">{course.progress}% complete</p>
        </CardFooter>
      ) : null}
    </Card>
  );

  if (!isAvailable) {
    return <div aria-disabled="true">{card}</div>;
  }

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {card}
    </Link>
  );
}