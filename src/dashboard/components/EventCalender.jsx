import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function EventCalender() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
        <div className="flex justify-between items-center ">
          <h1 className="2xl:text-lg text-base font-semibold my-4">Attendance</h1>
          <Icon
            icon="uiw:more"
            width="20"
            height="20"
            style={{ color: "#000" }}
          />
        </div>
        <div className="flex flex-col gap-4">
         {
            events.map((event) => (
                <div className="p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
                    <div className="flex 2xl:flex-row flex-col 2xl:items-center justify-between">
                        <h1 className="font-bold text-gray-600 ">{event.title}</h1>
                        <span className="text-nowrap text-gray-300 text-xs">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-500">{event.description}</p>
                </div>
            ))
         }
        </div>
      </div>
    </>
  );
}
