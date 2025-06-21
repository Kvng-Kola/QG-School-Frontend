import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Unauthorised() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-96">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?ga=GA1.1.1531329791.1725372495&semt=ais_hybrid&w=740"
          alt=""
        />
      </div>
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-bold text-gray-700">We are Sorry...</h1>
        <p className="text-xl mb-5 mt-3">
          The page you are trying to access has restricted access.
        </p>
        <Link
          to={`/${authUser.role}`}
          className="capitalize text-base items-center justify-center px-8 py-2 rounded-full bg-[#32ccd1] shadow-xl hover:text-black text-white"
        >
          go back
        </Link>
      </div>
    </div>
  );
}
