import React from "react";

export default function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="p-4 flex items-center justify-between text-gray-400">
      <button
        disabled={currentPage === 1}
        className="py-2 px-4 rounded-md bg-slate-500 text-xs text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <div className="flex items-center gap-3 text-xs">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-md ${
              page === currentPage ? "bg-gray-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === pages.length}
        className="py-2 px-4 rounded-md bg-slate-500 text-xs text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
