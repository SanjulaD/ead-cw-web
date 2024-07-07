import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { type ApexOptions } from 'apexcharts';

const BarChart: React.FC = () => {
  const series = [
    {
      name: 'Study Time (hours)',
      data: [15, 20, 10, 18],
    },
  ];

  const options: ApexOptions = {
    colors: ['#5750F1', '#0ABEF9', '#FF4560', '#00E396'],
    chart: {
      type: 'bar',
      height: 335,
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 5,
              columnWidth: '50%',
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        columnWidth: '25%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },

    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },

    xaxis: {
      categories: ['Math', 'Science', 'History', 'English'],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontWeight: 500,
      fontSize: '14px',

      markers: {
        radius: 99,
        strokeWidth: 10,
        strokeColor: 'transparent',
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Study Time by Subject
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            This Week
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-3.5">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={370}
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
