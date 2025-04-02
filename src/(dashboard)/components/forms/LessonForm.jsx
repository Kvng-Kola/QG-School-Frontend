import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { lessonSchema } from "../../formValidationSchema";
import { createLesson, UpdateLesson } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LessonForm({ type, data, setopen, relatedData }) {
  const { teacher, subject, qg_class } = relatedData;
  const [state, setState] = useState({
    success: false,
    error: false,
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(lessonSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createLesson(data, setState, state);
    } else {
      UpdateLesson(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `lesson has been ${type === "create" ? "created" : "updated"}`,
        {
          autoClose: 3000,
          onClose: () => {
            navigate(0);
          },
        }
      );
      setopen(false);
    }
  }, [state]);
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={onsubmit}>
        <h1 className="text-xl font-semibold">
          {" "}
          {type === "create" ? "Create a new lesson" : "Update a new lesson"}
        </h1>
        {state.error && (
          <span className="text-rose-500 text-xs">Something went wrong</span>
        )}
        <div className="flex justify-between flex-wrap gap-3">
          {data && (
            <InputField
              label="id"
              name="id"
              type="number"
              hidden
              defaultValue={data?.id}
              register={register}
            />
          )}
          <InputField
            label="lesson name"
            name="name"
            defaultValue={data?.name}
            register={register}
            error={errors?.name}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Day</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("day")}
              defaultValue={data?.day}
            >
              <option value="MONDAY">MONDAY</option>
              <option value="TUESDAY">TUESDAY</option>
              <option value="WEDNESDAY">WEDNESDAY</option>
              <option value="THURSDAY">THURSDAY</option>
              <option value="FRIDAY">FRIDAY</option>
            </select>
            {errors.day?.message && (
              <p className="text-xs text-red-400">
                {errors.day.message.toString()}
              </p>
            )}
          </div>
          <InputField
            label="start_time"
            name="start_time"
            placeholder={"e.g., 17:50:57"}
            defaultValue={data?.start_time}
            register={register}
            error={errors?.start_time}
          />
          <InputField
            label="end_time"
            name="end_time"
            placeholder={"e.g., 19:50:57"}
            defaultValue={data?.end_time}
            register={register}
            error={errors?.end_time}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Class</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("class_id")}
              defaultValue={data?.class_id}
            >
              {qg_class.map((data, id) => (
                <option key={id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            {errors.class_id?.message && (
              <p className="text-xs text-red">
                {errors.class_id.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Subject</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("subject_id")}
              defaultValue={data?.subject_id}
            >
              {subject.map((data, id) => (
                <option key={id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            {errors.subject_id?.message && (
              <p className="text-xs text-red">
                {errors.subject_id.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Teacher</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("teacher_id")}
              defaultValue={data?.teacher_id}
            >
              {teacher.map((data, id) => (
                <option key={id} value={data.id}>
                  {data.firstname + " " + data.lastname}
                </option>
              ))}
            </select>
            {errors.teacher_id?.message && (
              <p className="text-xs text-red">
                {errors.teacher_id.message.toString()}
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </>
  );
}
