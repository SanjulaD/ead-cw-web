import { useQuery } from '@tanstack/react-query';
import { getAdminMetrics } from '@/services/api/admin.service';
import { getStudentMetrics } from '@/services/api/student.service';
import { type AdminMetrics, type StudentMetrics } from '@/types/dashboard';

export const useGetMyStatisticsQuery = () =>
  useQuery<StudentMetrics>(['myStatistics'], async () => {
    const res = await getStudentMetrics();
    return res;
  });

export const useGetAdminStatisticsQuery = () =>
  useQuery<AdminMetrics>(['adminStatistics'], async () => {
    const res = await getAdminMetrics();
    return res;
  });
