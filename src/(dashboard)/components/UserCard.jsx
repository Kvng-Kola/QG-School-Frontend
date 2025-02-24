import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function UserCard({ type }) {
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
        <h1 className="font-bold 2xl:text-2xl text-lg 2xl:my-3 my-2">1,234</h1>
        <h2 className="text-sm text-gray-500 capitalize font-medium">
          {type}s
        </h2>
      </div>
    </>
  );
}
