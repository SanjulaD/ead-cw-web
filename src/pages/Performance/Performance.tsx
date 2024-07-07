import React from 'react';
import Breaks from '@/pages/Performance/Breaks';
import StudySessions from '@/pages/Performance/StudySessions';

const Performance = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 md:mt-6 xl:grid-cols-5 2xl:mt-9">
        <div className="col-span-2 xl:col-span-3">
          <StudySessions />
        </div>
        <div className="col-span-2 xl:col-span-2">
          <Breaks />
        </div>
      </div>
    </div>
  );
};

export default Performance;
