import React, { useEffect, useMemo, useState } from "react";
import DLayout from "../../DLayout";
import TableSearch from "../../components/TableSearch";
import filter from "../../../assets/filter.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import axios from "axios";
import Loading from "../../components/Loading";
import FormContainer from "../../components/BigFormContainer";
import { useAuthContext } from "../../../context/AuthContext";

const renderRow = (item) => {
  const { authUser } = useAuthContext();
  const role = authUser.role;
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight text-left"
    >
      <td className="flex flex-col md:flex-row items-center gap-4 p-4 ">
        {item?.title}
      </td>
      <td>{item?.studentSurname}</td>{" "}
      <td className="hidden md:table-cell">{item?.score}</td>{" "}
      <td className="hidden md:table-cell">{item?.teacherName}</td>{" "}
      <td className="hidden md:table-cell">{item?.className}</td>{" "}
      <td className="hidden md:table-cell">{item?.startTime}</td>{" "}
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormContainer table="result" type="update" data={item} />
              <FormContainer table="result" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default function ResultListpage() {
  const { authUser } = useAuthContext();
  const role = authUser.role;
  const guardianId = authUser.id;
  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Student",
      accessor: "student",
    },
    {
      header: "Score",
      accessor: "score",
      className: "hidden md:table-cell",
    },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },
    {
      header: "Class",
      accessor: "class",
      className: "hidden md:table-cell",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    (role === "admin" || role === "teacher") && {
      header: "Actions",
      accessor: "action",
    },
  ];
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 5;

  // Fetch data from the backend API
  useEffect(() => {
    async function ResultsData() {
      try {
        setLoading(true);
        const response = await axios.get(
          role === "guardian"
            ? `http://localhost:8000/api/students/result/guardian/${guardianId}`
            : `http://localhost:8000/api/resultList`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all results List", error);
        throw error;
      }
    }
    ResultsData();
  }, []);

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    // Filter by Assignments and return lowercase version of Assignments for case-insensitive search
    return data.filter((item) => {
      return item.exam.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [data, searchQuery]);

  // Paginate filtered data
  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  // Update search query on input change
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  return (
    <DLayout>
      <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h1 className="hidden sm:block font-semibold text-lg">All Results</h1>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <TableSearch onSearchSubmit={handleSearch} />
            <div className="flex items-center self-end gap-4">
              <button className="w-8 h-8 bg-lamaYellow rounded-full flex justify-center items-center">
                <img src={filter} alt="" width={14} height={14} />
              </button>
              <button className="w-8 h-8 bg-lamaYellow rounded-full flex justify-center items-center">
                <Icon
                  icon="lucide:sort-desc"
                  width="14"
                  height="14"
                  style={{ color: "#000" }}
                />
              </button>
              {(role === "admin" || role === "teacher") && (
                <FormContainer table="result" type="create" />
              )}
            </div>
          </div>
        </div>
        {/* List */}
        {loading && <Loading />}
        <Table columns={columns} renderRow={renderRow} data={currentPosts} />
        {/* Pagination */}
        <Pagination
          totalPosts={data.length}
          postPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </DLayout>
  );
}
