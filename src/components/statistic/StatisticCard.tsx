import React from "react";
import PercentageCard from "../statistic/PercentageCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [200, 300, 340, 500, 200, 400,500,1000,200],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const StatisticCard = ({}) => {
  return (
    <>
      <div className="p-5 pb-5 h-full rounded-md bg-white text-left">
        <div className="my-3">
          <p className="text-black">Unlisted for Lookout</p>
          <h5 className=" text-3xl font-bold text-gray-900 dark:text-black ">31570</h5>
        </div>
        <PercentageCard />
        <div className="inline px-3">
          <span className="inline text-black">VS This Month</span>
        </div>
       
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <Line options={options} data={data} />
        </div>

       
      </div>
    </>
  );
};

export default StatisticCard;
