import Table from '@/components/Table';
import { type Break } from '@/types/break';

const Breaks = () => {
  const breaksData: Break[] = [
    {
      date: '2024-07-02',
      durationMinutes: 590,
    },
    {
      date: '2024-07-02',
      durationMinutes: 467,
    },
  ];

  return (
    <Table
      title="Breaks"
      data={breaksData}
      headers={['date', 'durationMinutes']}
      buttonText="Add Break"
      buttonDisplay={true}
    />
  );
};

export default Breaks;
