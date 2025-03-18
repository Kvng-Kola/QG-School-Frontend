import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentsForm";
import SubjectForm from "./forms/SubjectForm";

//forms to display depending on the user type
const forms = {
  teacher: (type, data, setopen) => {
    return <TeacherForm type={type} data={data} setopen={setopen} />;
  },
  student: (type, data, setopen) => {
    return <StudentForm type={type} data={data} setopen={setopen} />;
  },
  subject: (type, data, setopen) => {
    return <SubjectForm type={type} data={data} setopen={setopen} />;
  },
};
export default function FormModal({ type, data, id, table }) {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  let bgColor;
  let iconName;

  if (type === "create") {
    bgColor = "bg-lamaYellow";
    iconName = "ic:round-plus"; // Icon for create
  } else if (type === "update") {
    bgColor = "bg-lamaSky";
    iconName = "bx:edit"; // Icon for update
  } else if (type === "delete") {
    bgColor = "bg-lamaPurple";
    iconName = "mdi:trash"; // Icon for delete
  }
  // modal for form
  const [open, setopen] = useState(false);
  // form to display
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}
        </span>
        <button className="bg-red text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type == "create" || "update" ? (
      forms[table](type, data, setopen)
    ) : (
      "Form not found"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setopen(true)}
      >
        <Icon
          icon={iconName}
          width="20"
          height="20"
          style={{ color: "#ffff" }}
        />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-2 right-4 cursor-pointer"
              onClick={() => setopen(false)}
            >
              <Icon
                icon="ic:baseline-close"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
