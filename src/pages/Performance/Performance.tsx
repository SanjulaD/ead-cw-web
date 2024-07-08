import Breaks from '@/pages/Performance/Breaks';
import StudySessions from '@/pages/Performance/StudySessions';

const Performance = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:mt-6 2xl:mt-9">
        <StudySessions />
        <Breaks />
      </div>
    </div>
  );
};

export default Performance;
