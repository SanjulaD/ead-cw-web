import React, { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { signUpSchema } from '@/lib/validation';
import { useCreateUsersQuery } from '@/services/queries/admin/users.query';
import { type UserCreateRequestBody } from '@/types/user';

interface CreateUserProps {
  setShowModal: (isModalOpen: boolean) => void;
  isOpen: boolean;
}

const CreateUser: React.FC<CreateUserProps> = ({ setShowModal, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateRequestBody>({ resolver: yupResolver(signUpSchema) });

  const queryClient = useQueryClient();

  const {
    isLoading,
    mutateAsync: createUser,
    isError,
    error,
  } = useCreateUsersQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError, error]);

  const onSubmit: SubmitHandler<UserCreateRequestBody> = async (data) => {
    try {
      await createUser(data);
      toast.success('User created successfully!', { theme: 'colored' });
      setShowModal(false);
      await queryClient.invalidateQueries(['myUsers']);
    } catch (err) {
      toast.error((err as Error).message, { theme: 'colored' });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="sm:mt-20 md:mt-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex px-12 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Create New Admin</h3>
            </div>
            <div className="relative px-6 flex-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5">
                  <Input
                    errors={errors}
                    placeholder="Enter Username"
                    label="Username"
                    id="username"
                    register={register}
                    name="username"
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    errors={errors}
                    register={register}
                    required
                  />

                  <Input
                    required
                    errors={errors}
                    placeholder="Enter Password"
                    label="Password"
                    type="password"
                    register={register}
                    name="password"
                  />

                  <Input
                    required
                    errors={errors}
                    placeholder="Re-type Password"
                    label="Confirm Password"
                    type="password"
                    register={register}
                    name="rePassword"
                  />

                  <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b space-x-4">
                    <Button
                      text="Close"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    />
                    <Button text="Create" type="submit" isLoading={isLoading} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CreateUser;
