import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Chart({ dublData }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  const dateAmountMap = dublData
    ? dublData.reduce((acc, item) => {
        const date = item.date.slice(0, 10);
        acc[date] = (acc[date] || 0) + item.amount;
        return acc;
      }, {})
    : [];

  const labels = Object.keys(dateAmountMap);
  const amounts = Object.values(dateAmountMap);

  const data2 = {
    labels,
    datasets: [
      {
        label: "Satış sayı",
        data: amounts,
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data2} />;
}

export default Chart;
