/**
 * MOCK DATA — placeholder sampai backend & konten UTM tersedia.
 * Judul course/lab di bawah adalah contoh, bukan konten final.
 * TODO: pindahkan types ke packages/shared-schemas saat kontrak API disepakati.
 */

export type LabStatus = "not-started" | "in-progress" | "completed";

export interface LearnerSummary {
  name: string;
  enrolledCourses: number;
  labsCompleted: number;
  labsTotal: number;
  averageScore: number; // 0–100
  certificates: number;
}

export interface CourseProgress {
  slug: string;
  title: string;
  currentModule: string;
  completedModules: number;
  totalModules: number;
}

export interface LabSummary {
  id: string;
  order: number;
  title: string;
  /** Referensi 3GPP yang relevan, ditampilkan sebagai badge */
  specRef?: string;
  status: LabStatus;
  estimatedMinutes: number;
}

export const learner: LearnerSummary = {
  name: "Aurelia",
  enrolledCourses: 1,
  labsCompleted: 1,
  labsTotal: 4,
  averageScore: 86,
  certificates: 0,
};

export const continueCourse: CourseProgress = {
  slug: "5g-core-fundamentals",
  title: "5G Core Fundamentals",
  currentModule: "Module 3: AMF & UE Registration",
  completedModules: 2,
  totalModules: 5,
};

export const labs: LabSummary[] = [
  {
    id: "lab-01-nrf",
    order: 1,
    title: "Bring up the NRF and register network functions",
    specRef: "TS 29.510",
    status: "completed",
    estimatedMinutes: 30,
  },
  {
    id: "lab-02-plmn-tac",
    order: 2,
    title: "Troubleshoot a PLMN/TAC mismatch on the AMF",
    specRef: "TS 23.501",
    status: "in-progress",
    estimatedMinutes: 40,
  },
  {
    id: "lab-03-registration",
    order: 3,
    title: "Trace the UE Registration procedure",
    specRef: "TS 23.502 §4.2.2.2",
    status: "not-started",
    estimatedMinutes: 45,
  },
  {
    id: "lab-04-pdu-session",
    order: 4,
    title: "Establish a PDU Session end-to-end",
    specRef: "TS 23.502 §4.3.2",
    status: "not-started",
    estimatedMinutes: 45,
  },
];