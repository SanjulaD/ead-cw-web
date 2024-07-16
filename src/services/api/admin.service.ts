import { type AxiosError, type AxiosResponse } from 'axios';
import {
  ADMIN_CREATE_PREFIX,
  ADMIN_DELETE_PREFIX,
  ADMIN_METRIC_PREFIX,
  ADMIN_USERS_PREFIX,
} from '@/enums/api';
import { api } from '@/lib/api';
import { type AdminMetrics } from '@/types/dashboard';
import { type User, type UserCreateRequestBody } from '@/types/user';

const ADMIN_PREFIX = 'Admin';

export const getAdminMetrics = async (): Promise<AdminMetrics> => {
  try {
    const response: AxiosResponse<AdminMetrics> = await api.get<AdminMetrics>(
      `${ADMIN_PREFIX}/${ADMIN_METRIC_PREFIX}`
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

export const getUsers = async (): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await api.get<User[]>(
      `${ADMIN_PREFIX}/${ADMIN_USERS_PREFIX}`
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

export const createUser = async (
  body: UserCreateRequestBody
): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await api.post<string>(
      `${ADMIN_PREFIX}/${ADMIN_CREATE_PREFIX}`,
      body
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

export const deleteUser = async (id: string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.delete<User>(
      `${ADMIN_PREFIX}/${ADMIN_DELETE_PREFIX}/${id}`
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
