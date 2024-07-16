import { useMutation, useQuery } from '@tanstack/react-query';
import { createUser, deleteUser, getUsers } from '@/services/api/admin.service';
import { type User, type UserCreateRequestBody } from '@/types/user';

export const useGetAllUsersQuery = () =>
  useQuery<User[]>(['myUsers'], async () => {
    const res = await getUsers();
    return res;
  });

export const useCreateUsersQuery = () =>
  useMutation(['createUser'], async (body: UserCreateRequestBody) => {
    const res = await createUser(body);
    return res;
  });

export const useDeleteUserQuery = () =>
  useMutation(['deleteUser'], async (id: string) => {
    const res = await deleteUser(id);
    return res;
  });
