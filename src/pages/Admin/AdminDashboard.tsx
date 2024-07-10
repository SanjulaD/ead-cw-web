import React from 'react';
import BarChart from '@/components/Admin/BarChart';
import DataStats from '@/components/Admin/DataCard';
import LineChart from '@/components/Admin/LineChart';

const AdminDashboard = () => {
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

export default AdminDashboard;
