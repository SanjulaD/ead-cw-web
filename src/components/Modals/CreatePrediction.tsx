import React, { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/components/Button';
import Select from '@/components/Select';
import { subjectOptions } from '@/lib/utility';
import { createPredictionSchema } from '@/lib/validation';
import { useCreatePredictionQuery } from '@/services/queries/student/predictions.query';
import { type Prediction } from '@/types/prediction';

interface CreatePredictionProps {
  setShowModal: (isModalOpen: boolean) => void;
  isOpen: boolean;
}

const CreatePrediction: React.FC<CreatePredictionProps> = ({
  setShowModal,
  isOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Prediction>({
    resolver: yupResolver(createPredictionSchema),
  });

  const queryClient = useQueryClient();

  const {
    isLoading,
    mutateAsync: prediction,
    isError,
    error,
  } = useCreatePredictionQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  if (!isOpen) return null;

  const onSubmit: SubmitHandler<Prediction> = async (data: Prediction) => {
    try {
      await prediction(data);
      toast.success('Prediction Create Successfully', { theme: 'colored' });
      setShowModal(false);
      await queryClient.invalidateQueries(['myPredictions']);
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
              <h3 className="text-3xl font-semibold">Make Prediction</h3>
            </div>
            <div className="relative px-6 flex-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5">
                  <Select
                    errors={errors}
                    label="Subject"
                    id="subject"
                    register={register}
                    name="subject"
                    options={subjectOptions}
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

export default CreatePrediction;
