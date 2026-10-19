import { Award, BookOpen, FlaskConical, Target } from "lucide-react";
import { ContinueLearningCard } from "@/components/dashboard/continue-learning-card";
import { LabList } from "@/components/dashboard/lab-list";
import { StatCard } from "@/components/dashboard/stat-card";
import { continueCourse, labs, learner } from "@/lib/mock/dashboard";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back, {learner.name}
        </h1>
        <p className="text-muted-foreground">
          Pick up where you left off in your 5G Core journey.
        </p>
      </header>

      <section
        aria-label="Learning statistics"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <StatCard label="Enrolled courses" value={String(learner.enrolledCourses)} icon={BookOpen} />
        <StatCard
          label="Labs completed"
          value={`${learner.labsCompleted}/${learner.labsTotal}`}
          icon={FlaskConical}
        />
        <StatCard label="Average score" value={`${learner.averageScore}%`} icon={Target} />
        <StatCard label="Certificates" value={String(learner.certificates)} icon={Award} />
      </section>

      <ContinueLearningCard course={continueCourse} />

      <LabList labs={labs} />
    </div>
  );
}