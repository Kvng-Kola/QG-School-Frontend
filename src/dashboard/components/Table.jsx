import React from "react";

export default function Table({ columns, renderRow, data }) {
  return (
    <>
      <table className="table-fixed  w-full mt-4">
        <thead>
          <tr className="text-center md:text-left text-gray-500 text-sm">
            {columns.map((col, index) => (
              <th className={col.className} key={index}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
      </table>
    </>
  );
}
