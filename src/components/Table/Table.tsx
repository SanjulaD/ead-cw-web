import Button from '@/components/Button/Button';
import { formatTableHeader } from '@/lib/helper';

interface TableProps<T> {
  title: string;
  buttonText: string;
  buttonDisplay?: boolean;
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
  const numColumns = headers.length;

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card relative">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
            {title}
          </h4>
        </div>
        {buttonDisplay && (
          <div className="flex items-center gap-2.5">
            <Button text={buttonText} type="button" />
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div
          className={`grid grid-cols-${numColumns} sm:grid-cols-${numColumns}`}
        >
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
            className={`grid grid-cols-${numColumns} sm:grid-cols-${numColumns} ${
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
  );
};

export default Table;
