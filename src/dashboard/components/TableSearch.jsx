import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function TableSearch({ onSearchSubmit }) {
  const handleSearch = (e) => {
    const value = e.target.value;
    onSearchSubmit(value);
  };

  return (
    <form className="w-full md:w-auto flex  items-center justify-centerrelative gap-2 text-xs rounded-full ring-[1.5px] ring-grey3 px-2 bg-white">
      <Icon icon="ic:outline-search" width={24} />
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleSearch}
        className="placeholder:italic "
      />
    </form>
  );
}
