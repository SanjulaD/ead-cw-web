import { useState } from 'react';
import Button from '@/components/Button/Button';
import {
  CreateBreak,
  CreatePrediction,
  CreateStudySession,
  CreateUser,
} from '@/components/Modals';
import { formatTableHeader, hasProperty } from '@/lib/helper';

interface TableProps<T> {
  buttonDisplay: boolean;
  buttonText: string;
  title: string;
  data: T[];
  headers: Array<keyof T>;
  onDelete?: (item: T) => void;
}

const Table = <T,>({
  data,
  headers,
  title,
  buttonText,
  buttonDisplay = false,
  onDelete,
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
      case 'Add User':
        return (
          <CreateUser setShowModal={setIsModalOpen} isOpen={isModalOpen} />
        );
      case 'Make predictions':
        return (
          <CreatePrediction
            setShowModal={setIsModalOpen}
            isOpen={isModalOpen}
          />
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
          <div className="grid grid-cols-4 sm:grid-cols-4">
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
              className={`grid grid-cols-4 sm:grid-cols-4 ${
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
                  {header === 'delete' && onDelete ? (
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => {
                        onDelete(item);
                      }}
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 408 408"
                      >
                        <g>
                          <path
                            d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
			H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
			c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
			c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
			c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
			c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"
                          />
                          <path
                            d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
			c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"
                          />
                        </g>
                      </svg>
                    </button>
                  ) : (
                    <p className="font-medium text-dark dark:text-white">
                      {hasProperty(item, header) ? String(item[header]) : ''}
                    </p>
                  )}
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
