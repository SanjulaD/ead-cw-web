import Table from '@/components/Table';
import { type Break } from '@/types/break';

type BreaksProps = {
  breaks: Break[];
};

const Breaks: React.FC<BreaksProps> = ({ breaks }) => {
  return (
    <Table
      title="Breaks"
      data={breaks}
      headers={['date', 'durationMinutes', 'note']}
      buttonText="Add Break"
      buttonDisplay={true}
    />
  );
};

export default Breaks;
