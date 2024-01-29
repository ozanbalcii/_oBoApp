import React from "react";

export default function Table({ columns, data }) {
  console.log(data, "columns");
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-yellow-600">
            <tr>
              {columns?.map((item, index) => (
                <th key={index} className={`${item?.className}`}>
                  {item?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {data?.map((dataItem, index) => (
              <tr key={index}>
                {columns?.map((column, index) => (
                  <td
                    key={index}
                    className={`py-3 px-6 ${
                      column?.dataIndex === "status" &&
                      dataItem?.status === "Active"
                        ? "text-green-700"
                        : column?.dataIndex === "status" &&
                          dataItem?.status === "Passive"
                        ? "text-red-700"
                        : column?.dataIndex === "status" &&
                          dataItem?.status === "Pending"
                        ? "text-purple-700"
                        : ""
                    }`}
                  >
                    {column?.render
                      ? column?.render(dataItem)
                      : dataItem[column?.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
