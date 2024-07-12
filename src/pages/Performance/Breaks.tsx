import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import Table from '@/components/Table';
import { useDeleteBreakQuery } from '@/services/queries/student/breaks.query';
import { type Break, type BreakTableRows } from '@/types/break';

type BreaksProps = {
  breaks: BreakTableRows[];
};

const Breaks: React.FC<BreaksProps> = ({ breaks }) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteBreaks, isError, error } = useDeleteBreakQuery();

  useEffect(() => {
    if (isError) {
      toast.error(error as string, { theme: 'colored' });
    }
  }, [isError]);

  const handleDelete = async (item: Break) => {
    if (item.breakID) {
      try {
        await deleteBreaks(item.breakID);
        toast.success('Break deleted successfully', { theme: 'colored' });
        await queryClient.invalidateQueries(['myBreaks']);
      } catch (deleteError) {
        toast.error('Error deleting Break', { theme: 'colored' });
        console.error('Delete error:', deleteError);
      }
    } else {
      toast.error('Break ID is undefined', { theme: 'colored' });
    }
  };

  return (
    <Table
      title="Breaks"
      data={breaks}
      headers={['date', 'durationMinutes', 'delete']}
      buttonText="Add Break"
      buttonDisplay={true}
      onDelete={handleDelete}
    />
  );
};

export default Breaks;
