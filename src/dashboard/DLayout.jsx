import React from "react";
import { Link } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function DLayout({ children }) {
  return (
    <>
      <div className="h-screen flex">
        {/* left side */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[16%] p-4 !overflow-y-scroll !overflow-x-hidden">
          <Link className="flex flex-col gap-2 items-center lg:justify-start ">
            <img
              src="https://brightstarschools.org/images/bss-logo.svg"
              alt=""
              className="lg:max-w-20 max-w-12"
            />
            <span className="hidden lg:block lg:text-nowrap font-bold">
              QG-School
            </span>
          </Link>
          <Menu />
        </div>
        {/* right side */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] overflow-scroll  xl:w-[84%] bg-[#F7F8FA] flex flex-col ">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
