import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { classSchema } from "../../formValidationSchema";
import { createClass, UpdateClass } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ClassForm({ type, data, setopen, relatedData }) {
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
    resolver: zodResolver(classSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createClass(data, setState, state);
    } else {
      UpdateClass(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `Class has been ${type === "create" ? "created" : "updated"}`,
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
          {type === "create" ? "Create a new class" : "Update a new class"}
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
            label="class name"
            name="name"
            defaultValue={data?.name}
            register={register}
            error={errors?.name}
          />
          <InputField
            label="Capacity"
            name="capacity"
            defaultValue={data?.capacity}
            register={register}
            error={errors?.capacity}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Supervisors</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-1 rounded-md text-sm w-full"
              {...register("teacherId")}
              defaultValue={data?.teacher}
            >
              {relatedData.map((data, id) => (
                <option key={id} value={data.teachers.id}>
                  {data.teachers.firstname}
                </option>
              ))}
            </select>
            {errors.teacherId?.message && (
              <p className="text-xs text-red-400">
                {errors.teacherId.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Grade</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-1 rounded-md text-sm w-full"
              {...register("levelId")}
              defaultValue={data?.levelId}
            >
              {relatedData.map((grade, id) => (
                <option key={id} value={grade.level.id}>
                  {grade.level.id}
                </option>
              ))}
            </select>
            {errors.levelId?.message && (
              <p className="text-xs text-red-400">
                {errors.levelId.message.toString()}
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
