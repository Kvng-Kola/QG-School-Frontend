import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { subjectSchema } from "../../formValidationSchema";
import { createSubject, UpdateSubject } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SubjectForm({ type, data, setopen, relatedData }) {
  const teachers = relatedData;
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
    resolver: zodResolver(subjectSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createSubject(data, setState, state);
    } else {
      UpdateSubject(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast(`Subject has been ${type === "create" ? "created" : "updated"}`, {
        autoClose: 2000,
        onClose: () => {
          navigate(0);
        },
      });
      setopen(false);
    }
  }, [state]);
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={onsubmit}>
        <h1 className="text-xl font-semibold">
          {" "}
          {type === "create" ? "Create a new subject" : "Update a new subject"}
        </h1>
        {state.error && (
          <span className="text-rose-500 text-xs">Something went wrong</span>
        )}
        {state.success && (
          <span className="text-rose-500 text-xs">Succesfully</span>
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
            label="Subject name"
            name="name"
            defaultValue={data?.name}
            register={register}
            error={errors?.name}
          />
          <InputField
            label="Class"
            name="level"
            defaultValue={data?.level}
            register={register}
            error={errors?.level}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Teachers</label>
            <select
              multiple
              className="ring-[1.5px] ring-gray-300 p-1 rounded-md text-sm w-full"
              {...register("teacher")}
              defaultValue={data?.teacher}
            >
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.firstname + " " + teacher.lastname}
                </option>
              ))}
            </select>
            {errors.teachers?.message && (
              <p className="text-xs text-red-400">
                {errors.teachers.message.toString()}
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
