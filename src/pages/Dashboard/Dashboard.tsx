import React from 'react';
import BarChart from '@/components/Statistics/BarChart';
import DataStats from '@/components/Statistics/DataCard';
import LineChart from '@/components/Statistics/LineChart';

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div>
        <DataStats />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 xl:grid-cols-3 2xl:mt-9">
        <div className="col-span-3 xl:col-span-2">
          <LineChart />
        </div>
        <div className="col-span-3 xl:col-span-1">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
