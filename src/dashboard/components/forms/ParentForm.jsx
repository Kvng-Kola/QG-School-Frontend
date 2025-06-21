import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputFields";
import { parentSchema } from "../../formValidationSchema";
import { useNavigate } from "react-router-dom";
import { createParent, UpdateParent } from "../../action";
import { toast } from "react-toastify";

export default function ParentForm({ type, data, setopen, relatedData }) {
  const [state, setState] = useState({
    success: false,
    error: false,
  });
  const [error, setError] = useState({
    phoneErr: "",
    emailErr: "",
  });
  useEffect(() => {
    if (state.success === true) {
      toast.success(
        `parent has been ${type === "create" ? "created" : "updated"}`,
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
  const { phoneErr, emailErr } = error;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(parentSchema),
  });
  const onsubmit = handleSubmit((data) => {
    if (type === "create") {
      createParent(data, setState, state, setError);
    } else {
      UpdateParent(data, setState, setError);
    }
  });
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={onsubmit}>
        <h1 className="text-lg font-semibold">
          {type === "create" ? "Create a new Parent" : "Update the Parent"}
        </h1>
        <span className="text-xs text-gray-400 font-medium">
          Personal Information
        </span>
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
            label="Email"
            name="email"
            defaultValue={data?.email}
            register={register}
            error={errors?.email}
            serverErr={emailErr}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            defaultValue={data?.password}
            register={register}
            error={errors?.password}
          />

          <InputField
            label="Firstname"
            name="firstname"
            defaultValue={data?.firstname}
            register={register}
            error={errors.firstname}
          />
          <InputField
            label="Lastname"
            name="lastname"
            defaultValue={data?.lastname}
            register={register}
            error={errors.lastname}
          />

          <InputField
            label="Phone"
            name="phone"
            defaultValue={data?.phone}
            serverErr={phoneErr}
            register={register}
            error={errors.phone}
          />
          <InputField
            label="Address"
            name="address"
            defaultValue={data?.address}
            register={register}
            error={errors.address}
          />

          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Sex</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-1 rounded-md text-sm w-full"
              {...register("sex")}
              defaultValue={data?.sex}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.sex?.message && (
              <p className="text-xs text-red-400">
                {errors.sex.message.toString()}
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
