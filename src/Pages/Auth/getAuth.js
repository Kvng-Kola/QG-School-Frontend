import { useQuery } from "@tanstack/react-query";
import { api } from "../../dashboard/services/apiService";

const fetchUser = async (token) => {
  try {
    const res = await api.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAuthUser = () => {
  const token = localStorage.getItem("auth_token");
  return useQuery({
    queryKey: ["getUser"],
    queryFn: () => fetchUser(token),
    enabled: !!token,
  });
};
