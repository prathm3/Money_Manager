import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86,1)",
//         "rgba(75, 192, 192,1)",
//         "rgba(153, 102, 255,1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
// const config = {
//   maintainAspectRatio: false,
//   type: "pie",
//   data: data,
//   options: {
//     // responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Pie Chart",
//       },
//     },
//   },
// };

function PieChart({ totalPayments, totalExpensePayments }) {
  const data = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "Record",
        data: [totalExpensePayments, totalPayments],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    maintainAspectRatio: false,
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Pie Chart",
        },
      },
    },
  };
  return (
    <div>
      <Pie data={data} height={300} width={300} options={config} />
    </div>
  );
}

export default PieChart;
