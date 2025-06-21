import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../dashboard/action";
import InputField from "../../dashboard/components/InputFields";
import { registerSchema } from "../../dashboard/formValidationSchema";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../dashboard/services/apiService";

export default function Register({ data }) {
  const navigate = useNavigate();
  const { mutate, isPending, isError } = useMutation({
    mutationKey: "register",
    mutationFn: (data) => {
      return api.post("/api/register", data);
    },
    onError: (error) => {
      console.log(error);
      const emailError = error.response.data.message;
      toast.error(`${emailError}`, {
        autoClose: 4000,
      });
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        toast.success(`registration successful`, {
          autoClose: 2000,
          onClose: () => {
            navigate("/login");
          },
        });
      }
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });
  return (
    <>
      <div className="grid grid-cols-2 w-screen h-screen">
        <div
          className={`relative bg-center bg-cover bg-[url('https://i.pinimg.com/736x/49/e6/a5/49e6a58f1336480f664907831411216d.jpg')] w-full h-full`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white">
              <h4 className="font-bold text-[2.5rem] leading-[1]">
                Create your <br /> Account
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-white p-10">
          <h2 className="font-bold text-4xl text-black text-center mb-6">
            Sign Up
          </h2>
          {isError && (
            <span className="text-rose-500 text-[12px]">
              Something went wrong
            </span>
          )}
          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="space-y-7 [&_input]:placeholder:text-xs"
          >
            <InputField
              type={"text"}
              name="firstname"
              placeholder={"Firstname"}
              defaultValue={data?.firstname}
              register={register}
              error={errors?.firstname}
              fullWidth
            />
            <InputField
              type={"text"}
              name="lastname"
              placeholder={"lastname"}
              defaultValue={data?.lastname}
              register={register}
              error={errors?.lastname}
              fullWidth
            />
            <InputField
              type={"email"}
              name="email"
              placeholder={"Email Address"}
              defaultValue={data?.email}
              register={register}
              error={errors?.email}
              fullWidth
            />
            <InputField
              type={"password"}
              name="password"
              placeholder={"Password"}
              defaultValue={data?.password}
              register={register}
              error={errors?.password}
              fullWidth
            />
            <InputField
              type={"password"}
              name="confirmPassword"
              placeholder={"Confirm Password"}
              defaultValue={data?.confirmPassword}
              register={register}
              error={errors?.confirmPassword}
              fullWidth
            />

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-black text-white py-2 rounded-xl text-sm flex items-center justify-center"
            >
              {isPending ? (
                <Icon icon="line-md:loading-loop" width="28" height="28" />
              ) : (
                "Sign up"
              )}
            </button>
            <p className="text-center  text-gray-500 text-xs my-2">
              Already have an account?{" "}
              <Link to="/login" className="text-black font-medium text-sm">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
