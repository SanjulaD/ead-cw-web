import { useQuery } from '@tanstack/react-query';
import { getStudySessions } from '@/services/api/student.service';
import { type StudySession } from '@/types/studySession';

export const useGetMyStudySessionsQuery = () =>
  useQuery<StudySession[]>(['myStudySessions'], async () => {
    const res = await getStudySessions();
    return res;
  });
