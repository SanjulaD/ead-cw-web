import { type AxiosError, type AxiosResponse } from 'axios';
import { ADMIN_METRIC_PREFIX } from '@/enums/api';
import { api } from '@/lib/api';
import { type AdminMetrics } from '@/types/dashboard';

const METRICS_PREFIX = 'Admin';

export const getAdminMetrics = async (): Promise<AdminMetrics> => {
  try {
    const response: AxiosResponse<AdminMetrics> = await api.get<AdminMetrics>(
      `${METRICS_PREFIX}/${ADMIN_METRIC_PREFIX}`
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<any>;
    if (axiosError.response) {
      throw axiosError.response.data;
    } else {
      throw axiosError;
    }
  }
};
