import React, { useEffect, useMemo, useState } from "react";
import DLayout from "../../DLayout";
import TableSearch from "../../components/TableSearch";
import filter from "../../../assets/filter.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { role, studentsData } from "../../Data";
import FormModal from "../../components/FormModal";
import axios from "axios";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentsId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const renderRow = (item) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight text-left"
    >
      <td className="flex flex-col md:flex-row items-center gap-4 p-4 ">
        <img
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden 2xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.firstname}</h3>
          <p className="text-xs text-gray-500">{item.level.name}</p>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.student_id}</td>
      <td className="hidden md:table-cell">{item.level.name}</td>
      <td className="hidden lg:table-cell">{item.phone1}</td>
      <td className="hidden lg:table-cell">{item.home_address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link to={`/list/students`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Icon
                icon="carbon:view"
                width="16"
                height="16"
                style={{ color: "#000" }}
              />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table={"student"} type={"delete"} id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

export default function StudentListpage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  // Fetch data from the backend API
  useEffect(() => {
    async function getStudentData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/studentList`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching all students List", error);
        throw error;
      }
    }
    getStudentData();
  }, []);

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    // Filter by firstname and return lowercase version of firstname for case-insensitive search
    return data.filter((teacher) => {
      return teacher.firstname
        .toLowerCase()
        .includes(searchQuery.toLocaleLowerCase());
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
    s;
  };

  return (
    <DLayout>
      <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h1 className="hidden sm:block font-semibold text-lg">
            All Students
          </h1>
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
              {role === "admin" && (
                <FormModal table={"student"} type={"create"} />
              )}
            </div>
          </div>
        </div>
        {/* List */}
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
