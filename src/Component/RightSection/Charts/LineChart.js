import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    percent: 100,
    name: 2014,
    uv: 0,
    pv: 0,
    amt: 2400,
  },
  {
    name: 2015,
    uv: 50,
    pv: 10,
    amt: 2210,
  },
  {
    name: 2016,
    uv: 50,
    pv: 70,
    amt: 2290,
  },
  {
    name: 2017,
    uv: 30,
    pv: 50,
    amt: 20000,
  },
  {
    name: 2018,
    uv: 30,
    pv: 50,
    amt: 2181,
  },
  {
    name: 2019,
    uv: 30,
    pv: 40,
    amt: 2500,
  },
  {
    name: 2020,
    uv: 20,
    pv: 30,
    amt: 2100,
  },
  {
    name: 2021,
    uv: 10,
    pv: 20,
    amt: 2100,
  },
  {
    name: 2022,
    uv: 0,
    pv: 0,
    amt: 2100,
  },
];

const LineChartGraph = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="percent">%</YAxis>
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#673ab7" />
      <Line type="monotone" dataKey="uv" stroke="#2196f3" />
    </LineChart>
  );
};

export default LineChartGraph;
