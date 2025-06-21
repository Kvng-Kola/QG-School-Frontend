import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full max-h-screen h-full flex items-center justify-center transition-all ease-custom">
      <Icon
        icon="eos-icons:loading"
        width="24"
        height="24"
        style={{ color: "#000" }}
      />
      Loading....
    </div>
  );
}
