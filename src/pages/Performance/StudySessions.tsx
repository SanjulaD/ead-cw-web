import React from 'react';
import Table from '@/components/Table';
import { type StudySession } from '@/types/studySession';

type StudySessionsProps = {
  studySessions: StudySession[];
};

const StudySessions: React.FC<StudySessionsProps> = ({ studySessions }) => {
  return (
    <Table
      title="Study Session"
      data={studySessions}
      headers={['subject', 'date', 'durationMinutes']}
      buttonText="Add Study Session"
      buttonDisplay={true}
    />
  );
};

export default StudySessions;
