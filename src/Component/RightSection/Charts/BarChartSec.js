import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    percent: 100,
    name: "SmartPhone",
    uv: 45,
    pv: 60,
    amt: 2400,
  },
  {
    name: "DeskTop/Laptop",
    uv: 96,
    pv: 84,
    amt: 2210,
  },
  {
    name: "Tablet",
    uv: 10,
    pv: 25,
    amt: 2290,
  },
  {
    name: "smartWatch",
    uv: 80,
    pv: 65,
    amt: 2000,
  },
  {
    name: "Other",
    uv: 40,
    pv: 30,
    amt: 2181,
  },
];
const BarChartSec = () => {
  return (
    <div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="percent" />
        <Tooltip />
        <Bar dataKey="pv" fill="#651fff" />
        <Bar dataKey="uv" fill="#e1f5fe" />
      </BarChart>
    </div>
  );
};

export default BarChartSec;
