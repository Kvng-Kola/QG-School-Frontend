import React from "react";
import DLayout from "../DLayout";
import UserCard from "../components/UserCard";
import CountCharts from "../components/CountCharts";
import AttendanceChart from "../components/AttendanceChart";
import FinanceChart from "../components/FinanceChart";
import EventCalender from "../components/EventCalender";
import Announcements from "../components/Announcements";

export default function AdminPage() {
  return (
    <>
      <DLayout>
        <div className="p-4 flex gap-4 flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* USER CARDS */}
            <div className="flex gap-4 justify-between flex-wrap">
              <UserCard type="teacher" />
              <UserCard type="student" />
              <UserCard type="guardian" />
            </div>
            {/* MIDDLE CHARTS */}
            <div className="flex gap-4 flex-col lg:flex-row ">
              {/* COUNT CHART */}
              <div className="w-full lg:w-[40%] h-[450px]">
                <CountCharts />
              </div>
              {/* ATTENDANCE CHART */}
              <div className="w-full lg:w-[60%] h-[450px] ">
                <AttendanceChart />
              </div>
            </div>
            {/* BOTTOM CHARTS */}
            <div className="w-full h-[500px]">
              <FinanceChart />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalender />
            <Announcements />
          </div>
        </div>
      </DLayout>
    </>
  );
}
