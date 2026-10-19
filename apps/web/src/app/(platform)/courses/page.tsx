import { CourseCard } from "@/components/courses/course-card";
import { courses } from "@/lib/mock/courses";

export default function CoursesPage() {
  const available = courses.filter((c) => c.availability === "available");
  const upcoming = courses.filter((c) => c.availability === "coming-soon");

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">
          Learn 5G through modules, simulated hands-on labs and assessments.
        </p>
      </header>

      <section aria-labelledby="available-heading" className="space-y-4">
        <h2 id="available-heading" className="text-lg font-semibold">
          Available now
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {available.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section aria-labelledby="roadmap-heading" className="space-y-4">
        <div className="space-y-1">
          <h2 id="roadmap-heading" className="text-lg font-semibold">
            Roadmap
          </h2>
          <p className="text-sm text-muted-foreground">
            Upcoming courses as the platform expands beyond the 5G Core.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}