import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { eventSchema } from "../../formValidationSchema";
import { createEvent, UpdateEvent } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EventForm({ type, data, setopen, relatedData }) {
  const classEvent = relatedData;
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
    resolver: zodResolver(eventSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createEvent(data, setState, state);
    } else {
      UpdateEvent(data, setState, state);
    }
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `Event has been ${type === "create" ? "created" : "updated"}`,
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
          {type === "create" ? "Create a new Event" : "Update a new Event"}
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
            label="title"
            name="title"
            defaultValue={data?.title}
            register={register}
            error={errors?.title}
          />
          <InputField
            label="description"
            name="description"
            defaultValue={data?.description}
            register={register}
            error={errors?.description}
          />
          <InputField
            type="datetime-local"
            label="start_time"
            name="start_time"
            defaultValue={data?.start_time}
            register={register}
            error={errors?.start_time}
          />
          <InputField
            type="datetime-local"
            label="end_time"
            name="end_time"
            defaultValue={data?.end_time}
            register={register}
            error={errors?.end_time}
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">class</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("class_id")}
              defaultValue={data?.class_id}
            >
              {classEvent?.map((data, id) => (
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
        </div>
        <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </>
  );
}
