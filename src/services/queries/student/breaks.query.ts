import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createBreak,
  deleteBreak,
  getBreaks,
} from '@/services/api/student.service';
import { type Break } from '@/types/break';

export const useGetMyBreaksQuery = () =>
  useQuery<Break[]>(['myBreaks'], async () => {
    const res = await getBreaks();
    return res;
  });

export const useCreateBreaksQuery = () =>
  useMutation(['createStudySession'], async (body: Break) => {
    const res = await createBreak(body);
    return res;
  });

export const useDeleteBreakQuery = () =>
  useMutation(['deleteBreak'], async (id: string) => {
    const res = await deleteBreak(id);
    return res;
  });
