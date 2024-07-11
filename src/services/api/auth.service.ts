import { type AxiosError, type AxiosResponse } from 'axios';
import { LOGIN_PREFIX, REGISTER_PREFIX } from '@/enums/api';
import { api } from '@/lib/api';
import {
  type LoginRequestBody,
  type LoginResponseBody,
  type SignUpRequestBody,
} from '@/types/auth';

const AUTH_PREFIX = 'Auth';

export const login = async (
  body: LoginRequestBody
): Promise<LoginResponseBody> => {
  try {
    const response: AxiosResponse<LoginResponseBody> =
      await api.post<LoginResponseBody>(`${AUTH_PREFIX}/${LOGIN_PREFIX}`, body);
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

export const register = async (body: SignUpRequestBody): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await api.post<string>(
      `${AUTH_PREFIX}/${REGISTER_PREFIX}`,
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
