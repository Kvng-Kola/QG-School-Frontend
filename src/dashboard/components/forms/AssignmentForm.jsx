import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { assignmentSchema } from "../../formValidationSchema";
import { createAssignment, UpdateAssignment } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AssignmentForm({ type, data, setopen, relatedData }) {
  const assignmentLesson = relatedData;
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
    resolver: zodResolver(assignmentSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createAssignment(data, setState, state);
    } else {
      UpdateAssignment(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `Assignment has been ${type === "create" ? "created" : "updated"}`,
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
          {type === "create"
            ? "Create a new Assignment"
            : "Update a new Assignment"}
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
            label="Assignment title"
            name="title"
            defaultValue={data?.title}
            register={register}
            error={errors?.title}
          />
          <InputField
            type="datetime-local"
            label="start_date"
            name="start_date"
            defaultValue={data?.start_date}
            register={register}
            error={errors?.start_date}
          />
          <InputField
            type="datetime-local"
            label="due_date"
            name="due_date"
            defaultValue={data?.due_date}
            register={register}
            error={errors?.due_date}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Lessons</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("lesson_id")}
              defaultValue={data?.lesson_id}
            >
              {assignmentLesson?.map((data, id) => (
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
