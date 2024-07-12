export interface StudySession {
  studySessionID?: string;
  subject: string;
  date: string;
  durationMinutes: number;
}
export interface StudySessionTableRows {
  studySessionID?: string;
  delete?: string;
  subject: string;
  date: string;
  durationMinutes: number;
}

export interface SubjectOption {
  value: string;
  label: string;
}
