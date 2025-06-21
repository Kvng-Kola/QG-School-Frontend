import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { resultSchema } from "../../formValidationSchema";
import { createResult, UpdateResult } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ResultForm({ type, data, setopen, relatedData }) {
  const { assignment, exam } = relatedData;
  const [state, setState] = useState({
    success: false,
    error: false,
    serverErr: "",
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resultSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createResult(data, setState, state);
    } else {
      UpdateResult(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `Result has been ${type === "create" ? "created" : "updated"}`,
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
          {type === "create" ? "Create a new Result" : "Update a new Result"}
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
            label="Score"
            name="score"
            type="number"
            max="100"
            min="1"
            defaultValue={data?.score}
            register={register}
            error={errors?.score}
          />
          {state.error && (
            <span className="text-rose-500 text-[12px]">{state.serverErr}</span>
          )}
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Assignments</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("assignment_id")}
              defaultValue={data?.assignment_id}
            >
              <option>Select an Assignment</option>
              {assignment?.map((data, id) => (
                <option key={id} value={data.id}>
                  {data.title}
                </option>
              ))}
            </select>
            {errors.assignment_id?.message && (
              <p className="text-xs text-red">
                {errors.assignment_id.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Exams</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("exam_id")}
              defaultValue={data?.exam_id}
            >
              <option>select an exam</option>
              {exam?.map((data, id) => (
                <option key={id} value={data.id}>
                  {data.title}
                </option>
              ))}
            </select>
            {errors.exam_id?.message && (
              <p className="text-xs text-red">
                {errors.exam_id.message.toString()}
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
