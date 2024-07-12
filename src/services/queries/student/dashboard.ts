import { useQuery } from '@tanstack/react-query';
import { getMetrics } from '@/services/api/student.service';
import { type StudentMetrics } from '@/types/dashboard';

export const useGetMyStatisticsQuery = () =>
  useQuery<StudentMetrics>(['myStatistics'], async () => {
    const res = await getMetrics();
    return res;
  });
