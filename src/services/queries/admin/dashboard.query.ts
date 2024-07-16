import { useQuery } from '@tanstack/react-query';
import { getAdminMetrics } from '@/services/api/admin.service';
import { type AdminMetrics } from '@/types/dashboard';

export const useGetAdminStatisticsQuery = () =>
  useQuery<AdminMetrics>(['adminStatistics'], async () => {
    const res = await getAdminMetrics();
    return res;
  });
