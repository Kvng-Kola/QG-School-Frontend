import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { examSchema } from "../../formValidationSchema";
import { createExam, UpdateExam } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ExamForm({ type, data, setopen, relatedData }) {
  const ExamsLesson = relatedData;
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
    resolver: zodResolver(examSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createExam(data, setState, state);
    } else {
      UpdateExam(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `Exam has been ${type === "create" ? "created" : "updated"}`,
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
          {type === "create" ? "Create a new Exam" : "Update a new Exam"}
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
            label="Exam title"
            name="title"
            defaultValue={data?.title}
            register={register}
            error={errors?.title}
          />
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
            <label className="text-xs text-gray-500">Lessons</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("lesson_id")}
              defaultValue={data?.lesson_id}
            >
              {ExamsLesson?.map((data, id) => (
                <option key={id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            {errors.lesson_id?.message && (
              <p className="text-xs text-red">
                {errors.lesson_id.message.toString()}
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
