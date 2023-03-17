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
//import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     // title: {
//     //   display: true,
//     //   text: "Chart.js Line Chart",
//     // },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

// const DATA_COUNT = 12;
// const labels = [];
// for (let i = 0; i < DATA_COUNT; ++i) {
//   labels.push(i.toString());
// }
// const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Cubic interpolation (monotone)",
//       data: datapoints,
//       borderColor: "rgb(53, 162, 235)",
//       fill: false,
//       cubicInterpolationMode: "monotone",
//       tension: 0.4,
//     },
//     {
//       label: "Cubic interpolation",
//       data: datapoints,
//       borderColor: "rgb(53, 235, 165)",
//       fill: false,
//       tension: 0.4,
//     },
//     {
//       label: "Linear interpolation (default)",
//       data: datapoints,
//       borderColor: "rgb(235, 162, 53)",
//       fill: false,
//     },
//   ],
// };
// // </block:setup>

// // <block:config:0>
// const config = {
//   maintainAspectRatio: false,
//   type: "line",
//   data: data,
//   options: {
//     animation: false,
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Chart.js Line Chart - Cubic interpolation mode",
//       },
//     },
//     transitions: {
//       show: {
//         animations: {
//           x: {
//             from: 0,
//           },
//           y: {
//             from: 0,
//           },
//         },
//       },
//       hide: {
//         animations: {
//           x: {
//             to: 0,
//           },
//           y: {
//             to: 0,
//           },
//         },
//       },
//     },
//     interaction: {
//       intersect: false,
//     },
//     scales: {
//       x: {
//         display: true,
//         title: {
//           display: true,
//         },
//       },
//       y: {
//         display: true,
//         title: {
//           display: true,
//           text: "Value",
//         },
//         suggestedMin: -10,
//         suggestedMax: 200,
//       },
//     },
//   },
// };

function LineChart({ payments, expensePayments }) {
  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  //const datapoints = payments;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        data: payments,
        borderColor: "rgb(53, 162, 235)",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
      {
        label: "Expense",
        data: expensePayments,
        borderColor: "rgb(235, 53, 162)",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  // </block:setup>

  // <block:config:0>
  const config = {
    maintainAspectRatio: false,
    type: "line",
    data: data,
    options: {
      animation: false,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Line chart",
        },
      },
      transitions: {
        show: {
          animations: {
            x: {
              from: 0,
            },
            y: {
              from: 0,
            },
          },
        },
        hide: {
          animations: {
            x: {
              to: 0,
            },
            y: {
              to: 0,
            },
          },
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  };
  return (
    <div>
      <Line options={config} height={200} width={500} data={data} />
    </div>
  );
}

export default LineChart;
