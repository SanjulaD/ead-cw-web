import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import Table from '@/components/Table';
import { useDeleteStudySessionsQuery } from '@/services/queries/student/studySessions.query';
import {
  type StudySession,
  type StudySessionTableRows,
} from '@/types/studySession';

type StudySessionsProps = {
  studySessions: StudySessionTableRows[];
};

const StudySessions: React.FC<StudySessionsProps> = ({ studySessions }) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteStudySession,
    isError,
    error,
  } = useDeleteStudySessionsQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const handleDelete = async (item: StudySession) => {
    if (item?.studySessionID) {
      try {
        await deleteStudySession(item.studySessionID);
        toast.success('Study session deleted successfully', {
          theme: 'colored',
        });
        await queryClient.invalidateQueries(['myStudySessions']);
      } catch (deleteError) {
        toast.error('Error deleting study session', { theme: 'colored' });
        console.error('Delete error:', deleteError);
      }
    } else {
      toast.error('Study session ID is undefined', { theme: 'colored' });
    }
  };

  return (
    <Table
      title="Study Session"
      data={studySessions}
      headers={['subject', 'date', 'durationMinutes', 'delete']}
      buttonText="Add Study Session"
      buttonDisplay={true}
      onDelete={handleDelete}
    />
  );
};

export default StudySessions;
