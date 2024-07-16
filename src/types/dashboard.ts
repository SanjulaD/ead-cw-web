export type dataStats = {
  icon?: string;
  color?: string;
  title?: string;
  value?: string;
  percent?: number;
};

export interface StudentMetrics {
  totalStudyTimeMinutes: number;
  averageStudySessionDuration: number;
  totalBreakTimeMinutes: number;
  numberOfStudySessions: number;
  monthlyStudyTimeHours: number[];
  monthlyBreakTimeHours: number[];
  totalStudyTimeHoursByYear: number;
  totalBreakTimeHoursByYear: number;
  totalStudyTimeBySubjectByWeek: Record<string, number>;
}

export interface AdminMetrics {
  totalNumberOfStudents: number;
  totalNumberOfStudySessions: number;
  totalNumberOfBreaks: number;
  totalStudyTimeLogged: number;
  totalBreakTimeLogged: number;
  monthlyStudyTimeHours: number[];
  monthlyBreakTimeHours: number[];
  totalStudyTimeHoursByYear: number;
  totalBreakTimeHoursByYear: number;
  totalStudyTimeBySubjectByWeek: Record<string, number>;
}
