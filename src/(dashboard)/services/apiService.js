// Api Service
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const apiService = {
  // TEACHERS BACKEND API REQUEST
  getAllTeachers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/teachersList`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all Teachers List", error);
      throw error;
    }
  },
  // SUBJECTS BACKEND API REQUEST
  getAllSubjects: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/subjectList`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all Teachers List", error);
      throw error;
    }
  },
};
