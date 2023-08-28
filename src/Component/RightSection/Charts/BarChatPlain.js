import React from "react";
import { BarChart, Bar } from "recharts";

const BarChartPlain = ({ item }) => {
  return (
    <BarChart width={250} height={100} data={item.chartData}>
      <Bar dataKey="uv" fill={item.chartColor} />
    </BarChart>
  );
};

export default BarChartPlain;
