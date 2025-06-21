import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 70,
    absent: 30,
  },
  {
    name: "Tue",
    present: 51,
    absent: 49,
  },
  {
    name: "Wed",
    present: 70,
    absent: 30,
  },
  {
    name: "Thu",
    present: 45,
    absent: 55,
  },
  {
    name: "Fri",
    present: 73,
    absent: 37,
  },
];

export default function AttendanceChart() {
  return (
    <>
      <div className="h-full rounded-lg p-4 bg-white w-full">
        <div className="flex justify-between items-center ">
          <h1 className="text-lg font-semibold">Attendance</h1>
          <Icon
            icon="uiw:more"
            width="20"
            height="20"
            style={{ color: "#000" }}
          />
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
            <YAxis axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
            <Tooltip contentStyle={{borderRadius:"10px", borderColor:'lightgray'}} />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
