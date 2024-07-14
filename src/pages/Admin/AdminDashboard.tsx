import React from 'react';
import { toast } from 'react-toastify';
import BarChart from '@/components/Admin/BarChart';
import DataStats from '@/components/Admin/DataCard';
import LineChart from '@/components/Admin/LineChart';
import { LoadingOverlay } from '@/components/Loader';
import { useGetAdminStatisticsQuery } from '@/services/queries/student/dashboard';

const AdminDashboard = () => {
  const {
    isLoading: statisticsLoading,
    isError: statisticsError,
    error: statisticsErrorMessage,
    data: statistics,
  } = useGetAdminStatisticsQuery();

  if (statisticsError) {
    toast.error(statisticsErrorMessage as string, { theme: 'colored' });
  }

  return (
    <div className="w-full h-full">
      {statisticsLoading && <LoadingOverlay />}
      {statistics && (
        <>
          <div>
            <DataStats
              totalNumberOfStudents={statistics?.totalNumberOfStudents}
              totalNumberOfStudySessions={
                statistics?.totalNumberOfStudySessions
              }
              totalNumberOfBreaks={statistics?.totalNumberOfBreaks}
              totalStudyTimeLogged={statistics?.totalStudyTimeLogged}
              totalBreakTimeLogged={statistics?.totalBreakTimeLogged}
            />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 xl:grid-cols-3 2xl:mt-9">
            <div className="col-span-3 xl:col-span-2">
              <LineChart
                monthlyStudyTimeHours={statistics.monthlyStudyTimeHours}
                monthlyBreakTimeHours={statistics.monthlyBreakTimeHours}
                totalStudyTimeHoursByYear={statistics.totalStudyTimeHoursByYear}
                totalBreakTimeHoursByYear={statistics.totalBreakTimeHoursByYear}
              />
            </div>
            <div className="col-span-3 xl:col-span-1">
              <BarChart
                totalStudyTimeBySubjectByWeek={
                  statistics.totalStudyTimeBySubjectByWeek
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
