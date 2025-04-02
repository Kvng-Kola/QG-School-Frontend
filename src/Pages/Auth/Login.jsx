import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../(dashboard)/components/Loading";
import InputField from "../../(dashboard)/components/InputFields";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../(dashboard)/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../../(dashboard)/action";
import { toast } from "react-toastify";

export default function Login() {
  const [state, setState] = useState({
    success: false,
    error: false,
    setResponse: "",
  });
  const { success, error, setResponse } = state;
  const navigate = useNavigate();
  useEffect(() => {
    if (success === true) {
      toast.success(`Login successfully`, {
        autoClose: 2000,
        onClose: () => {
          navigate("/login");
        },
      });
    }
  }, [error]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = handleSubmit((data) => {
    loginUser(data, setState);
  });
  return (
    <>
      <div className="grid grid-cols-2 w-screen h-screen">
        <div className="bg-white p-20">
          <h2 className="font-bold text-4xl text-black text-center mb-6">
            Login
          </h2>
          {error && (
            <span className="text-rose-500 text-[12px]">{setResponse}</span>
          )}
          <form
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
              className="w-full bg-black text-white py-2 rounded-xl text-sm"
            >
              Login{" "}
            </button>
          </form>
          <p className="text-center  text-gray-500 text-xs my-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-black font-medium text-sm">
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
