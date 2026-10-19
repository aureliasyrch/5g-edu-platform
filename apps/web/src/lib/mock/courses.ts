/**
 * MOCK DATA — katalog course sementara.
 * Judul & ringkasan adalah placeholder; konten final dari tim UTM.
 */

export type CourseAvailability = "available" | "coming-soon";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseCatalogItem {
  slug: string;
  title: string;
  summary: string;
  phase: 1 | 2 | 3 | 4;
  level: CourseLevel;
  modules: number;
  labs: number;
  estimatedHours: number;
  availability: CourseAvailability;
  /** Persentase progres learner, hanya untuk course yang sudah diikuti */
  progress?: number;
}

export const courses: CourseCatalogItem[] = [
  {
    slug: "5g-core-fundamentals",
    title: "5G Core Fundamentals",
    summary:
      "Service-based architecture, core network functions, UE registration and PDU session establishment.",
    phase: 1,
    level: "Beginner",
    modules: 5,
    labs: 4,
    estimatedHours: 12,
    availability: "available",
    progress: 40,
  },
  {
    slug: "5g-network-slicing",
    title: "5G Network Slicing",
    summary: "S-NSSAI, slice profiles and slice selection with the NSSF.",
    phase: 2,
    level: "Intermediate",
    modules: 4,
    labs: 3,
    estimatedHours: 10,
    availability: "coming-soon",
  },
  {
    slug: "mec-edge-caching",
    title: "MEC & Slice-Aware Edge Caching",
    summary: "Multi-access edge computing and traffic-aware caching per slice.",
    phase: 3,
    level: "Advanced",
    modules: 4,
    labs: 3,
    estimatedHours: 10,
    availability: "coming-soon",
  },
  {
    slug: "oran-ric-telemetry",
    title: "O-RAN RIC & Telemetry",
    summary: "RAN Intelligent Controller, xApps and KPI telemetry.",
    phase: 4,
    level: "Advanced",
    modules: 4,
    labs: 3,
    estimatedHours: 10,
    availability: "coming-soon",
  },
];