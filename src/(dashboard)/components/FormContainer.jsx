import React, { useEffect, useState } from "react";
import FormModal from "./FormModal";
import axios from "axios";

export default function FormContainer({ type, data, id, table }) {
  const [relatedData, setRelatedData] = useState([]);
  useEffect(() => {
    const fetchRelatedData = async () => {
      // Fetch related data based on the provided table and id
      if (type !== "delete") {
        switch (table) {
          case "subject":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getTeachersList"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "class":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/classList"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "teacher":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getSubjects"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "student":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getStudentRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "lesson":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getLessonRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "exam":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getExamsRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "assignment":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getAssignmentRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "result":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getResultRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "event":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getEventRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          case "announcement":
            try {
              const res = await axios.get(
                "http://localhost:8000/api/getEventRelatedData"
              );
              setRelatedData(res.data);
            } catch (error) {
              console.error(error);
            }
            break;
          default:
            break;
        }
      }
    };
    fetchRelatedData();
  }, [type, table]);

  return (
    <div>
      <FormModal
        type={type}
        data={data}
        id={id}
        table={table}
        relatedData={relatedData}
      />
    </div>
  );
}
