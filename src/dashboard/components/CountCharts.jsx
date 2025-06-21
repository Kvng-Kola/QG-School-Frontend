import { Icon } from "@iconify/react/dist/iconify.js";
import maleFemale from "../../assets/maleFemale.png";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { api } from "../services/apiService";
import { useQuery } from "@tanstack/react-query";

const getGenderCounts = async () => {
  const res = await api.get("/api/count/gender");
  return res.data;
};

export default function CountCharts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["genderCounts"],
    queryFn: () => getGenderCounts(),
  });
  if (isPending) {
    return;
  }
  if (isError) {
    return console.log("something went wrong");
  }
  const { boys, girls } = data;
  const countData = [
    {
      name: "Total",
      count: boys + girls,
      fill: "white",
    },
    {
      name: "Girls",
      count: girls,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: boys,
      fill: "#C3EBFA",
    },
  ];
  return (
    <>
      <div className="bg-white w-full h-full rounded p-4">
        {/* TITLE */}
        <div className="flex justify-between items-center ">
          <h1 className="text-lg font-semibold">Students</h1>
          <Icon
            icon="uiw:more"
            width="20"
            height="20"
            style={{ color: "#000" }}
          />
        </div>
        {/* CHARTS */}
        <div className="relative w-full h-[70%]">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={countData}
            >
              <RadialBar background dataKey="count" />
            </RadialBarChart>
          </ResponsiveContainer>
          <img
            src={maleFemale}
            width={50}
            height={50}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* BOTTOM */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1 ">
            <div className="w-5 h-5 rounded-full bg-lamaSky" />
            <h1 className="font-bold">{boys}</h1>
            <h2 className="text-xs text-gray-300">
              Boys ({Math.round((boys / (boys + girls)) * 100)}%)
            </h2>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="w-5 h-5 rounded-full bg-lamaYellow " />
            <h1 className="font-bold">{girls}</h1>
            <h2 className="text-xs text-gray-300">
              girls ({Math.round((girls / (boys + girls)) * 100)}%)
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
