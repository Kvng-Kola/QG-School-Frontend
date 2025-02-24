import React, { useEffect, useMemo, useState } from "react";
import DLayout from "../../DLayout";
import TableSearch from "../../components/TableSearch";
import filter from "../../../assets/filter.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { eventsData, role } from "../../Data";
import FormModal from "../../components/FormModal";
import axios from "axios";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
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
        {item.title}
      </td>
      <td>{item.class.name}</td>
      <td className="hidden md:table-cell">
        {item.start_time.slice(0, 10)}
      </td>{" "}
      <td className="hidden md:table-cell">{item.start_time.slice(11)}</td>{" "}
      <td className="hidden md:table-cell">{item.end_time.slice(11)}</td>{" "}
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default function EventListpage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  // Fetch data from the backend API
  useEffect(() => {
    async function EventsData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/EventsList`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching all event List", error);
        throw error;
      }
    }
    EventsData();
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
          <h1 className="hidden sm:block font-semibold text-lg">All Events</h1>
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
              {role === "admin" && <FormModal table="event" type="create" />}
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
