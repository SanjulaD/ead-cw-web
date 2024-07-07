import Table from '@/components/Table';
import { type StudySession } from '@/types/studySession';

const StudySessions = () => {
  const studySessionData: StudySession[] = [
    {
      subject: 'Google',
      date: '2024-07-02',
      durationMinutes: 590,
    },
    {
      subject: 'X.com',
      date: '2024-07-02',
      durationMinutes: 467,
    },
  ];

  return (
    <Table
      title="Study Session"
      data={studySessionData}
      headers={['subject', 'date', 'durationMinutes']}
      buttonText="Add Study Session"
      buttonDisplay={true}
    />
  );
};

export default StudySessions;
