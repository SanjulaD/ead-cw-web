import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';
import Breaks from '@/pages/Performance/Breaks';
import StudySessions from '@/pages/Performance/StudySessions';
import { useGetMyBreaksQuery } from '@/services/queries/student/breaks.query';
import { useGetMyStudySessionsQuery } from '@/services/queries/student/studySessions.query';

const Performance: React.FC = () => {
  const {
    isLoading: studySessionsLoading,
    isError: studySessionsError,
    error: studySessionErrorMessage,
    data: studySessions,
  } = useGetMyStudySessionsQuery();
  const {
    isLoading: breaksLoading,
    isError: breaksError,
    error: breaksErrorMessage,
    data: breaks,
  } = useGetMyBreaksQuery();

  if (studySessionsError) {
    toast.error(studySessionErrorMessage as string, { theme: 'colored' });
  }

  if (breaksError) {
    toast.error(breaksErrorMessage as string, { theme: 'colored' });
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:mt-6 2xl:mt-9">
        {studySessionsLoading ? (
          <Spinner />
        ) : (
          <StudySessions studySessions={studySessions ?? []} />
        )}
        {breaksLoading ? <Spinner /> : <Breaks breaks={breaks ?? []} />}
      </div>
    </div>
  );
};

export default Performance;
