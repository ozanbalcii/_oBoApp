import React from "react";
import {
  LoadingContext,
  useLoadingContext,
} from "../../../contexts/trashContexts/Loading";
import Loading from "../Loading";

export default function Table({ columns, data }) {
  const { loading } = useLoadingContext(LoadingContext);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto"> {/* Added table-auto class */}
          <thead className="text-yellow-600">
            <tr>
              {columns?.map((item, index) => (
                <th
                  key={index}
                  className={`${item?.className} px-4 py-2 whitespace-nowrap`} // Ensure spacing and no text wrapping
                  style={{ minWidth: item?.minWidth || '100px' }} // Optionally set a min-width for columns
                >
                  {item?.title || '-'} {/* Display a dash if the title is empty */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {data?.map((dataItem, rowIndex) => (
              <tr key={rowIndex}>
                {columns?.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-3 px-6 whitespace-nowrap ${
                      column?.dataIndex === "status" &&
                      dataItem?.status === "Active"
                        ? "text-green-600"
                        : column?.dataIndex === "status" &&
                          dataItem?.status === "Passive"
                        ? "text-red-400"
                        : column?.dataIndex === "status" &&
                          dataItem?.status === "Pending"
                        ? "text-purple-400"
                        : ""
                    }`}
                  >
                    {column?.render
                      ? column?.render(dataItem)
                      : dataItem[column?.dataIndex] || '-'} {/* Display dash for empty cells */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return (loading ? (
    <Loading>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </Loading>
  ) : (
    <div>
      <Table columns={columns} data={data} />
    </div>
  ))
}
