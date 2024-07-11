import { useQuery } from '@tanstack/react-query';
import { getBreaks } from '@/services/api/student.service';
import { type Break } from '@/types/break';

export const useGetMyBreaksQuery = () =>
  useQuery<Break[]>(['myBreaks'], async () => {
    const res = await getBreaks();
    return res;
  });
