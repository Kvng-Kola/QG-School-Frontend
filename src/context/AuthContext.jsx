import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../(dashboard)/services/apiService";
import { getAuthUser } from "../Pages/Auth/getAuth";
import { Icon } from "@iconify/react/dist/iconify.js";

const AuthContext = createContext(null);
// consume the context directly
export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const authUser = JSON.parse(localStorage.getItem("auth_user"));

  const contextValue = {
    authUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
