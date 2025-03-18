import { api } from "./services/apiService";

export const createSubject = async (data, navigate, setState, state) => {
  const { name, level } = data;
  try {
    const res = await api.post(`/api/subjectRegister`, {
      name: name,
      level: level,
    });
    console.log(res.data);
    return setState({ ...state, sucess: true, error: false });
    // navigate(0);
  } catch (error) {
    console.error(error);
    return setState({ ...state, sucess: false, error: true });
  }
};
