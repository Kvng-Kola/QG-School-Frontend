import React, { useEffect, useState } from "react";
import DLayout from "../../../DLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import BigCalender from "../../../components/BigCalender";
import Announcements from "../../../components/Announcements";
import { Link, useParams } from "react-router-dom";
import Performance from "../../../components/Performance";
import axios from "axios";
import Loading from "../../../components/Loading";
import FormContainer from "../../../components/BigFormContainer";

export default function SingleStudentPage() {
  const { id } = useParams();
  const [studentInfo, setStudentInfo] = useState();
  const [loading, setLoading] = useState(false);
  // Fetch the teacher data with the id of the teacher
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8000/api/showStudent/${id}`
        );
        setStudentInfo(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudentData();
  }, [id]);

  return (
    <>
      <DLayout>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
              {/* TOP */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* USER INFO CARD */}
                <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
                  <img
                    src={
                      studentInfo?.student_dp ||
                      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                    }
                    alt=""
                    className="w-28 h-28 rounded-full object-cover"
                  />
                  <div className="w-2/3 flex flex-col justify-between gap-4">
                    <div className="flex gap-4 items-center ">
                      <h1 className="text-lg font-semibold">
                        {studentInfo?.firstname + " " + studentInfo?.lastname}
                        <FormContainer
                          table={"student"}
                          type={"update"}
                          data={studentInfo}
                        />
                      </h1>
                    </div>
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
                        <span>{studentInfo?.blood_type}</span>
                      </div>
                      <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                        <Icon
                          icon="stash:data-date-duotone"
                          width="14"
                          height="14"
                        />
                        <span>{studentInfo?.dob}</span>
                      </div>
                      <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                        <Icon
                          icon="material-symbols:mail"
                          width="14"
                          height="14"
                        />
                        <span>{studentInfo?.email}</span>
                      </div>
                      <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                        <Icon icon="ic:twotone-phone" width="14" height="14" />
                        <span>{studentInfo?.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* SMALL CARDS */}
                <div className="flex-1 flex gap-2 justify-between flex-wrap">
                  {/* CARDS */}
                  <div className="bg-white p-3 rounded-md flex  gap-3 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
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
                  <div className="bg-white p-3 rounded-md flex gap-3 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                      alt=""
                      className="h-6 w-6"
                    />
                    <div className="grade">
                      <h1 className="text-xl font-semibold">
                        {studentInfo?.class?.level_id}
                      </h1>
                      <span className="text-sm text-gray-400">Grade</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-md flex gap-3 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3125/3125856.png"
                      alt=""
                      className="h-6 w-6"
                    />
                    <div className="">
                      <h1 className="text-xl font-semibold">
                        {studentInfo?.class?.name}
                      </h1>
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
                  <Link
                    className="p-3 rounded-md bg-lamaPurpleLight"
                    to="/admin"
                  >
                    Student's Teachers
                  </Link>
                  <Link
                    className="p-3 rounded-md bg-lamaYellowLight"
                    to="/admin"
                  >
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
        )}
      </DLayout>
    </>
  );
}
