import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentsForm";
import SubjectForm from "./forms/SubjectForm";
import { useNavigate } from "react-router-dom";
import {
  deleteAnnouncement,
  deleteAssignment,
  deleteClass,
  deleteEvent,
  deleteExam,
  deleteLesson,
  deleteParent,
  deleteResult,
  deleteStudent,
  deleteSubject,
  deleteTeacher,
} from "../action";
import { toast } from "react-toastify";
import ClassForm from "./forms/ClassForm";
import ParentForm from "./forms/ParentForm";
import LessonForm from "./forms/LessonForm";
import ExamForm from "./forms/ExamForm";
import AssignmentForm from "./forms/AssignmentForm";
import ResultForm from "./forms/ResultForm";
import EventForm from "./forms/EventForm";
import AnnouncementForm from "./forms/AnnouncementForm";

const deleteActionMap = {
  subject: deleteSubject,
  class: deleteClass,
  teacher: deleteTeacher,
  student: deleteStudent,
  exam: deleteExam,
  // TODO: OTHER DELETE ACTIONS
  parent: deleteParent,
  lesson: deleteLesson,
  assignment: deleteAssignment,
  result: deleteResult,
  // attendance: deleteSubject,
  event: deleteEvent,
  announcement: deleteAnnouncement,
};

//forms to display depending on the table type
const forms = {
  teacher: (type, data, setopen, relatedData) => {
    return (
      <TeacherForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  student: (type, data, setopen, relatedData) => {
    return (
      <StudentForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  parent: (type, data, setopen, relatedData) => {
    return (
      <ParentForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  subject: (type, data, setopen, relatedData) => {
    return (
      <SubjectForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  class: (type, data, setopen, relatedData) => {
    return (
      <ClassForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  lesson: (type, data, setopen, relatedData) => {
    return (
      <LessonForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  exam: (type, data, setopen, relatedData) => {
    return (
      <ExamForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  assignment: (type, data, setopen, relatedData) => {
    return (
      <AssignmentForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  result: (type, data, setopen, relatedData) => {
    return (
      <ResultForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  event: (type, data, setopen, relatedData) => {
    return (
      <EventForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
  announcement: (type, data, setopen, relatedData) => {
    return (
      <AnnouncementForm
        type={type}
        data={data}
        setopen={setopen}
        relatedData={relatedData}
      />
    );
  },
};
export default function FormModal({ type, data, id, table, relatedData }) {
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
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const formAction = (e) => {
      e.preventDefault();
      const id = e.target.id.value;
      deleteActionMap[table](id, setSuccess, navigate);
    };
    useEffect(() => {
      if (success === true) {
        toast.success(`${table} deleted successfully!`, {
          autoClose: 3000,
          onClose: () => {
            navigate(0);
          },
        });
        setopen(false);
      }
    }, [success]);
    return type === "delete" && id ? (
      <form onSubmit={formAction} className="p-4 flex flex-col gap-4">
        <input type="number" defaultValue={id} hidden name="id" />
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}
        </span>
        <button
          type="submit"
          className="bg-red text-white py-2 px-4 rounded-md border-none w-max self-center"
        >
          Delete
        </button>
      </form>
    ) : type === "create" || "update" ? (
      forms[table](type, data, setopen, relatedData)
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
