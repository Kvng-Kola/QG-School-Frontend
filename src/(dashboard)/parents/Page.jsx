import React from "react";
import DLayout from "../DLayout";
import Announcements from "../components/Announcements";
import BigCalender from "../components/BigCalender";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ParentPage() {
  return (
    <>
      <DLayout>
        <div className="p-4 flex gap-4 flex-col xl:flex-row">
          {/* LEFT */}
          <div className="w-full xl:w-2/3 flex-1 h-full ">
            <div className="h-full bg-white p-4 rounded-md">
              <h1 className="text-xl font-bold">Class Schedule(John Doe)</h1>
              <BigCalender />
            </div>
          </div>
          {/* Right */}
          <div className="w-full xl:w-1/3 flex flex-col gap-8">
            <Announcements />
          </div>
        </div>
      </DLayout>
    </>
  );
}
