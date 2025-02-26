import React from "react";
import DLayout from "../DLayout";
import Announcements from "../components/Announcements";
import BigCalender from "../components/BigCalender";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function TeacherPage() {
  return (
    <>
      <DLayout>
        <div className="h-full flex-1 p-4 flex gap-4 flex-col xl:flex-row">
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
            <div className="h-full bg-white p-4 rounded-md">
              <h1 className="text-xl font-bold">Class Schedule</h1>
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
