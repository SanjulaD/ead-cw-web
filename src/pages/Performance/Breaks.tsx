import Table from '@/components/Table';
import { type Break } from '@/types/break';

const Breaks = () => {
  const breaksData: Break[] = [
    {
      date: '2024-07-02',
      durationMinutes: 590,
      note: '',
    },
    {
      date: '2024-07-02',
      durationMinutes: 467,
      note: '',
    },
  ];

  return (
    <Table
      title="Breaks"
      data={breaksData}
      headers={['date', 'durationMinutes', 'note']}
      buttonText="Add Break"
      buttonDisplay={true}
    />
  );
};

export default Breaks;
