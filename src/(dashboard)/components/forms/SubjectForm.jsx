import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { subjectSchema } from "../../formValidationSchema";
import { createSubject } from "../../action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SubjectForm({ type, data, setopen }) {
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
    createSubject(data, navigate, setState, state);
  });
  useEffect(() => {
    if (state.success === true) {
      toast(`Subject has been ${type === "create" ? "created" : "updated"}`);
      setopen(false);
      console.log(
        `Subject has been ${type === "create" ? "created" : "updated"}`
      );
    }
    if (state.error === true) {
      toast(
        `Subject failed to be ${type === "create" ? "created" : "updated"}`
      );
      console.log(
        `Subject failed to be ${type === "create" ? "created" : "updated"}`
      );
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
          <InputField
            label="Subject name"
            name="name"
            defaultValue={data?.name}
            register={register}
            error={errors?.name}
          />
          <InputField
            label="Class Level"
            name="level"
            defaultValue={data?.level}
            register={register}
            error={errors?.level}
          />
        </div>
        <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </>
  );
}
