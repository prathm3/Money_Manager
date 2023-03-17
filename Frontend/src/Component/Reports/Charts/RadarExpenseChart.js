import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function RadarIncomeChart({ expenseCategories }) {
  const data = {
    labels: ["EMI", "FOOD", "TRAVEL", "BILLS", "RENT", "OTHER"],
    datasets: [
      {
        label: "Categories",
        data: expenseCategories,
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <PolarArea
       height={300} width={300}
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default RadarIncomeChart;
