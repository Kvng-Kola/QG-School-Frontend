import React from "react";
import DLayout from "../../../DLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import BigCalender from "../../../components/BigCalender";
import Announcements from "../../../components/Announcements";
import { Link } from "react-router-dom";
import Performance from "../../../components/Performance";
import FormModal from "../../../components/FormModal";

export default function SingleTeacherPage() {
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
                <div className="w-1/3">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                  <div className="flex justify-between items-center ">
                    <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                    <FormModal
                      table={"teacher"}
                      type={"update"}
                      data={{
                        id: 1,
                        username: "deanguerrero",
                        email: "deanguerrero@gmail.com",
                        password: "password",
                        firstName: "Dean",
                        lastName: "Guerrero",
                        phone: "+1 234 567 89",
                        address: "1234 Main St, Anytown, USA",
                        bloodType: "A+",
                        dateOfBirth: "2000-01-01",
                        sex: "male",
                        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      }}
                    />
                  </div>
                  <p className="text-gray-500 text-sm">
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
                    <h1 className="text-xl font-semibold">2</h1>
                    <span className="text-sm text-gray-400">Branches</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                    alt=""
                    className="h-6 w-6"
                  />
                  <div className="">
                    <h1 className="text-xl font-semibold">6</h1>
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
                    <h1 className="text-xl font-semibold">6</h1>
                    <span className="text-sm text-gray-400">Classes</span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
              <h1>Teachers's Schedule</h1>
              <BigCalender />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full xl:w-1/3">
            <div className="bg-white rounded-md p-4">
              <h1 className="text-xl font-semibold">Shortcuts</h1>
              <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500 ">
                <Link className="p-3 rounded-md bg-lamaSkyLight" to="/admin">
                  Teachers's Classes
                </Link>
                <Link className="p-3 rounded-md bg-lamaPurpleLight" to="/admin">
                  Teachers's Students
                </Link>
                <Link className="p-3 rounded-md bg-lamaYellowLight" to="/admin">
                  Teachers's Lessons
                </Link>
                <Link className="p-3 rounded-md bg-pink-50" to="/admin">
                  Teachers's Exam
                </Link>
                <Link className="p-3 rounded-md bg-lamaSkyLight" to="/admin">
                  Teachers's Assignment
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
