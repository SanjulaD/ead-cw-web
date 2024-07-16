import { useQuery } from '@tanstack/react-query';
import { getStudentMetrics } from '@/services/api/student.service';
import { type StudentMetrics } from '@/types/dashboard';

export const useGetMyStatisticsQuery = () =>
  useQuery<StudentMetrics>(['myStatistics'], async () => {
    const res = await getStudentMetrics();
    return res;
  });
