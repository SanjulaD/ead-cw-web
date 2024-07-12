import React from 'react';
import { toast } from 'react-toastify';
import { LoadingOverlay } from '@/components/Loader';
import BarChart from '@/components/Statistics/BarChart';
import DataCard from '@/components/Statistics/DataCard';
import LineChart from '@/components/Statistics/LineChart';
import { useGetMyStatisticsQuery } from '@/services/queries/student/dashboard';

const Dashboard = () => {
  const {
    isLoading: statisticsLoading,
    isError: statisticsError,
    error: statisticsErrorMessage,
    data: statistics,
  } = useGetMyStatisticsQuery();

  if (statisticsError) {
    toast.error(statisticsErrorMessage as string, { theme: 'colored' });
  }

  return (
    <div className="w-full h-full relative">
      {statisticsLoading && <LoadingOverlay />}

      {statistics && (
        <>
          <div>
            <DataCard
              totalStudyTimeMinutes={statistics?.totalStudyTimeMinutes}
              averageStudySessionDuration={
                statistics?.averageStudySessionDuration
              }
              totalBreakTimeMinutes={statistics?.totalBreakTimeMinutes}
              numberOfStudySessions={statistics?.numberOfStudySessions}
            />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 xl:grid-cols-3 2xl:mt-9">
            <div className="col-span-3 xl:col-span-2">
              <LineChart
                monthlyStudyTimeHours={statistics?.monthlyStudyTimeHours}
                monthlyBreakTimeHours={statistics?.monthlyBreakTimeHours}
                totalStudyTimeHoursByYear={
                  statistics?.totalStudyTimeHoursByYear
                }
                totalBreakTimeHoursByYear={
                  statistics?.totalBreakTimeHoursByYear
                }
              />
            </div>
            <div className="col-span-3 xl:col-span-1">
              <BarChart
                totalStudyTimeBySubjectByWeek={
                  statistics?.totalStudyTimeBySubjectByWeek
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
