import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
export default function Navbar() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex relative gap-2 text-xs rounded-full ring-[1.5px] ring-grey3 px-2 bg-white">
        <Icon icon="ic:outline-search" className="text-[29px]" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="placeholder:italic "
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-5 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Icon icon="ant-design:message-outlined" className="text-[25px]" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Icon icon="mdi:announcement-outline" className="text-[25px]" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-[#800080c3] text-white rounded-full text-[12px]">
            1
          </div>
        </div>
        <div className="flex flex-col font-poppins">
          <span className="text-xs leading-3 font-medium">
            {authUser?.firstname + authUser?.lastname}
          </span>
          <span className="text-[12px] text-right font-medium">
            {authUser.role}
          </span>
        </div>
        <Icon icon="radix-icons:avatar" className="text-[36px]" />
      </div>
    </div>
  );
}
