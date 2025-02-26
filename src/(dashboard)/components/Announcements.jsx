import React from "react";

export default function Announcements() {
  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between items-center ">
          <h1 className="2xl:text-lg text-base font-semibold my-2">Announcements</h1>
          <span className="text-xs text-gray-400 capitalize">view all</span>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="bg-lamaSkyLight rounded-md p-4 w-full">
            <div className="flex 2xl:flex-col items-center justify-between">
              <h2 className="">Lorem ipsum dolor sit</h2>
              <span className="text-xs bg-white text-gray-400 rounded-md p-1">2025-01-01</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
