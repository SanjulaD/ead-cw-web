import { useMutation } from '@tanstack/react-query';
import { type LoginRequestBody, type SignUpRequestBody } from '@/types/auth';
import { login, register } from '../api/auth.service';

export const useLoginQuery = () =>
  useMutation(['login'], async (body: LoginRequestBody) => {
    const res = await login(body);
    return res;
  });

export const useSignUpQuery = () =>
  useMutation(['signUp'], async (body: SignUpRequestBody) => {
    const res = await register(body);
    return res;
  });
