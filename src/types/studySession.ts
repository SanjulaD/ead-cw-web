export interface StudySession {
  id?: string;
  subject: string;
  date: string;
  durationMinutes: number;
}

export interface SubjectOption {
  value: string;
  label: string;
}
