import { type AxiosError, type AxiosResponse } from 'axios';
import { api } from '@/lib/api';
import { type Break } from '@/types/break';
import { type StudentMetrics } from '@/types/dashboard';
import { type StudySession } from '@/types/studySession';

const STUDY_SESSION_PREFIX = 'StudySessions';
const BREAKS_PREFIX = 'Breaks';
const METRICS_PREFIX = 'StudentMetrics';

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

export const createStudySession = async (
  body: StudySession
): Promise<StudySession> => {
  try {
    const response: AxiosResponse<StudySession> = await api.post<StudySession>(
      `${STUDY_SESSION_PREFIX}`,
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

export const deleteStudySession = async (id: string): Promise<StudySession> => {
  try {
    const response: AxiosResponse<StudySession> =
      await api.delete<StudySession>(`${STUDY_SESSION_PREFIX}/${id}`);
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

export const createBreak = async (body: Break): Promise<Break> => {
  try {
    const response: AxiosResponse<Break> = await api.post<Break>(
      `${BREAKS_PREFIX}`,
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

export const deleteBreak = async (id: string): Promise<Break> => {
  try {
    const response: AxiosResponse<Break> = await api.delete<Break>(
      `${BREAKS_PREFIX}/${id}`
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

export const getStudentMetrics = async (): Promise<StudentMetrics> => {
  try {
    const response: AxiosResponse<StudentMetrics> =
      await api.get<StudentMetrics>(`${METRICS_PREFIX}`);
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
