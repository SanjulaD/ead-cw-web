import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createPredictions,
  getMyPredictions,
} from '@/services/api/student.service';
import { type Prediction } from '@/types/prediction';

export const useGetMyPredictionsQuery = () =>
  useQuery<Prediction[]>(['myPredictions'], async () => {
    const res = await getMyPredictions();
    return res;
  });

export const useCreatePredictionQuery = () =>
  useMutation(['createPredictions'], async (body: Prediction) => {
    const res = await createPredictions(body);
    return res;
  });
