import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { api } from "../services/apiService";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

const getTotalUser = async (type) => {
  try {
    const res = await api.get("/api/count/users", {
      params: {
        type: type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default function UserCard({ type }) {
  const { data, isPending } = useQuery({
    queryKey: ["getTotalUser", type],
    queryFn: () => getTotalUser(type),
  });
  if (isPending) {
    return;
  }
  return (
    <>
      <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
        <div className="flex justify-between items-center ">
          <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
            2024/25
          </span>
          <Icon
            icon="uiw:more"
            width="17"
            height="17"
            style={{ color: "#000" }}
          />
        </div>
        <h1 className="font-bold 2xl:text-2xl text-lg 2xl:my-3 my-2">{data}</h1>
        <h2 className="text-sm text-gray-500 capitalize font-medium">
          {type}s
        </h2>
      </div>
    </>
  );
}
