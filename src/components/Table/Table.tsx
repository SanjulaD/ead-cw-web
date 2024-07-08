import { useState } from 'react';
import Button from '@/components/Button/Button';
import { CreateBreak, CreateStudySession } from '@/components/Modals';
import { formatTableHeader } from '@/lib/helper';

interface TableProps<T> {
  buttonDisplay: boolean;
  buttonText: string;
  title: string;
  data: T[];
  headers: Array<keyof T>;
}

const Table = <T,>({
  data,
  headers,
  title,
  buttonText,
  buttonDisplay = false,
}: TableProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const renderModal = () => {
    switch (buttonText) {
      case 'Add Study Session':
        return (
          <CreateStudySession
            setShowModal={setIsModalOpen}
            isOpen={isModalOpen}
          />
        );
      case 'Add Break':
        return (
          <CreateBreak setShowModal={setIsModalOpen} isOpen={isModalOpen} />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-4 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex items-center justify-between mb-5.5">
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            {title}
          </h4>
          {buttonDisplay && (
            <div className="flex items-center gap-2.5">
              <Button text={buttonText} onClick={openModal} />
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 sm:grid-cols-3">
            {headers.map((header, index) => (
              <div key={index} className="px-2 pb-3.5 text-center">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  {formatTableHeader(String(header))}
                </h5>
              </div>
            ))}
          </div>

          {data.map((item, index) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-3 ${
                index === data.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-dark-3'
              }`}
              key={index}
            >
              {headers.map((header, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-2 py-4"
                >
                  <p className="font-medium text-dark dark:text-white">
                    {String(item[header])}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && renderModal()}
    </>
  );
};

export default Table;
