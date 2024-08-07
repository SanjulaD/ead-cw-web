import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createStudySession,
  deleteStudySession,
  getStudySessions,
} from '@/services/api/student.service';
import { type StudySession } from '@/types/studySession';

export const useGetMyStudySessionsQuery = () =>
  useQuery<StudySession[]>(['myStudySessions'], async () => {
    const res = await getStudySessions();
    return res;
  });

export const useCreateStudySessionsQuery = () =>
  useMutation(['createStudySession'], async (body: StudySession) => {
    const res = await createStudySession(body);
    return res;
  });

export const useDeleteStudySessionsQuery = () =>
  useMutation(['deleteStudySession'], async (id: string) => {
    const res = await deleteStudySession(id);
    return res;
  });
