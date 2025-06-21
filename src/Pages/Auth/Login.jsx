import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../(dashboard)/components/InputFields";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../(dashboard)/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../(dashboard)/services/apiService";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAuthContext } from "../../context/AuthContext";

export default function Login() {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      if (authUser !== null) {
        return navigate(`/${authUser.role}`);
      }
      return api.post("/api/login", data);
    },
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log(data.data.user);
      const message = data.data.message;
      localStorage.setItem("auth_user", JSON.stringify(data.data.user));
      toast.success(`${message}`, {
        autoClose: 3000,
        onClose: () => {
          navigate(`/${data.data.user.role}`);
          navigate(0);
        },
      });
    },
    onError: (error) => {
      console.log(error.response.data.message);
      const message = error.response.data.message;
      toast.error(`${message}`);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });
  return (
    <>
      <div className="grid grid-cols-2 w-screen h-screen">
        <div className="bg-white p-20">
          <h2 className="font-bold text-4xl text-black text-center mb-6">
            Login
          </h2>
          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="space-y-7 [&_input]:placeholder:text-xs"
          >
            <InputField
              type={"email"}
              name="email"
              placeholder={"Email"}
              register={register}
              error={errors?.email}
              fullWidth
            />
            <InputField
              type={"password"}
              name="password"
              placeholder={"Password"}
              register={register}
              error={errors?.password}
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
                "Log In"
              )}
            </button>
          </form>
          <p className="text-center  text-gray-500 text-xs my-2">
            Don't have an account?{" "}
            <Link to="/" className="text-black font-medium text-sm">
              Sign up
            </Link>
          </p>
        </div>
        <div
          className={`relative bg-center bg-cover bg-[url('https://i.pinimg.com/736x/49/e6/a5/49e6a58f1336480f664907831411216d.jpg')] w-full h-full`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white">
              <h4 className="font-bold text-[2.5rem] leading-[1]">
                Login your <br /> Account
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
