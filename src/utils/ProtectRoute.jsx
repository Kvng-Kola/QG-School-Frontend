import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectRoute({ allowedRoles }) {
  const authUser = JSON.parse(localStorage.getItem("auth_user"));
  if (authUser === null) {
    return <Navigate to={"/login"} />;
  }
  if (!allowedRoles.includes(authUser.role)) {
    return <Navigate to={"/unauthorised"} />;
  }
  return <Outlet />;
}
