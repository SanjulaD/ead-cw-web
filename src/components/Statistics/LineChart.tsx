import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { type ApexOptions } from 'apexcharts';

const LineChart: React.FC = () => {
  const series = [
    {
      name: 'Study Time (hours)',
      data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
    },
    {
      name: 'Break Time (hours)',
      data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#5750F1', '#0ABEF9'],
    chart: {
      height: 310,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
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
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: true,
        formatter: function (
          value,
          { series, seriesIndex, dataPointIndex, w }
        ) {
          const categories = [
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
          ];
          return categories[dataPointIndex];
        },
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return `${seriesName}:`;
          },
        },
      },
      marker: {
        show: true,
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Study Time Over Time
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            This Year
          </div>
        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={310}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Study Time</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            540 hours
          </h4>
        </div>
        <div className="xsm:w-1/2">
          <p className="font-medium">Break Time</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            500 hours
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
