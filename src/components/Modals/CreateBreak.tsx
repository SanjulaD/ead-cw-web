import React, { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { createBreakSchema } from '@/lib/validation';
import { useCreateBreaksQuery } from '@/services/queries/student/breaks.query';
import { type Break } from '@/types/break';

interface CreateBreakProps {
  setShowModal: (isModalOpen: boolean) => void;
  isOpen: boolean;
}

const CreateBreak: React.FC<CreateBreakProps> = ({ setShowModal, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Break>({ resolver: yupResolver(createBreakSchema) });

  if (!isOpen) return null;

  const queryClient = useQueryClient();

  const {
    isLoading,
    mutateAsync: breaks,
    isError,
    error,
  } = useCreateBreaksQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  if (!isOpen) return null;

  const onSubmit: SubmitHandler<Break> = async (data: Break) => {
    try {
      await breaks(data);
      toast.success('Break Created Successfully', { theme: 'colored' });
      setShowModal(false);
      await queryClient.invalidateQueries(['myBreaks']);
    } catch (err) {
      toast.error(error as string, { theme: 'colored' });
    }
  };

  return (
    <>
      <div className="sm:mt-20 md:mt-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex px-12 items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Create New Break</h3>
            </div>
            <div className="relative px-6 flex-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5">
                  <Input
                    type="date"
                    errors={errors}
                    placeholder="Enter Date"
                    label="Date"
                    id="date"
                    register={register}
                    name="date"
                    required={true}
                  />

                  <Input
                    type="number"
                    errors={errors}
                    placeholder="Enter Duration in minutes"
                    label="Duration"
                    id="durationMinutes"
                    register={register}
                    name="durationMinutes"
                    required={true}
                  />
                </div>

                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b space-x-4">
                  <Button
                    text="Close"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  />
                  <Button text="Save" type="submit" isLoading={isLoading} />
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

export default CreateBreak;
