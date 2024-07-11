import { type AxiosError, type AxiosResponse } from 'axios';
import { api } from '@/lib/api';
import { type Break } from '@/types/break';
import { type StudySession } from '@/types/studySession';

const STUDY_SESSION_PREFIX = 'StudySessions';
const BREAKS_PREFIX = 'Breaks';

export const getStudySessions = async (): Promise<StudySession[]> => {
  try {
    const response: AxiosResponse<StudySession[]> = await api.get<
      StudySession[]
    >(`${STUDY_SESSION_PREFIX}`);
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

export const getBreaks = async (): Promise<Break[]> => {
  try {
    const response: AxiosResponse<Break[]> = await api.get<Break[]>(
      `${BREAKS_PREFIX}`
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
