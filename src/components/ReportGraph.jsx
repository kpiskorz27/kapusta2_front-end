import React from "react";
import { Bar } from "react-chartjs-2";

const ReportGraph = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "UAH",
        data: data.values,
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default ReportGraph;
