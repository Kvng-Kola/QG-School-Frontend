import React from "react";
import DLayout from "../../../DLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import BigCalender from "../../../components/BigCalender";
import Announcements from "../../../components/Announcements";
import { Link } from "react-router-dom";
import Performance from "../../../components/Performance";

export default function SingleStudentPage() {
  return (
    <>
      <DLayout>
        <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
          {/* LEFT */}
          <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* USER INFO CARD */}
              <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                <img
                  src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfeW91bmdfaW5kaWFuX2dpcmxfaG9sZGluZ19zdHVkZW50X2JhY2twYV81YzlkNmU4Yy04NTNhLTQ2ZDktYmExYS0yNmIzZTI2ZDUyMGQucG5n.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-36 h-36 rounded-full object-cover"
                />
                <div className="w-2/3 flex flex-col justify-between gap-4">
                  <h1 className="text-sm font-semibold">Cameron Moran</h1>
                  <p className="text-gray-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur,
                  </p>
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                      <Icon
                        icon="fluent-emoji-flat:drop-of-blood"
                        width="14"
                        height="14"
                      />
                      <span>A+</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                      <Icon
                        icon="stash:data-date-duotone"
                        width="14"
                        height="14"
                      />
                      <span>Janauray 2025</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                      <Icon
                        icon="material-symbols:mail"
                        width="14"
                        height="14"
                      />
                      <span>user@gmail.com</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                      <Icon icon="ic:twotone-phone" width="14" height="14" />
                      <span>+234 90149807</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* SMALL CARDS */}
              <div className="flex-1 flex gap-4 justify-between flex-wrap">
                {/* CARDS */}
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                    alt=""
                    className="h-6 w-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">90%</h1>
                    <span className="text-sm text-gray-400">Attendance</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                    alt=""
                    className="h-6 w-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">6th</h1>
                    <span className="text-sm text-gray-400">Grade</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                    alt=""
                    className="h-6 w-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">18</h1>
                    <span className="text-sm text-gray-400">Lessons</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                    alt=""
                    className="h-6 w-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">6A</h1>
                    <span className="text-sm text-gray-400">Class</span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
              <h1>Student's Schedule</h1>
              <BigCalender />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full xl:w-1/3">
            <div className="bg-white rounded-md p-4">
              <h1 className="text-xl font-semibold">Shortcuts</h1>
              <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500 ">
                <Link className="p-3 rounded-md bg-lamaSkyLight" to="/admin">
                  Student's Lessons
                </Link>
                <Link className="p-3 rounded-md bg-lamaPurpleLight" to="/admin">
                  Student's Teachers
                </Link>
                <Link className="p-3 rounded-md bg-lamaYellowLight" to="/admin">
                  Student's Exams
                </Link>
                <Link className="p-3 rounded-md bg-pink-50" to="/admin">
                  Student's Assignment
                </Link>
                <Link className="p-3 rounded-md bg-lamaSkyLight" to="/admin">
                  Student's Result
                </Link>
              </div>
            </div>
            <Performance />
            <Announcements />
          </div>
        </div>
      </DLayout>
    </>
  );
}
