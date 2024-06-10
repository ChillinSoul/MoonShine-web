import React, { useState } from "react";

export interface ColumnDef<TData, TValue> {
  id?: string;
  accessorKey?: string;
  header?: string;
  cell?: (row: any) => JSX.Element;
}
interface TableProps<TData, TValue> {
  data: any[];
  columns: ColumnDef<TData, TValue>[];
}

export default function Table<TData, TValue>({
  data,
  columns,
}: TableProps<TData, TValue>) {
  const [tableData, setTableData] = useState<any[]>(data);
  const sortData = (column: string, ud: string) => {
    const sortedData = tableData.sort((a, b) => {
      if (a[column] < b[column]) {
        if (ud === "up") {
          return 1;
        }
        return -1;
      }
      if (a[column] > b[column]) {
        if (ud === "up") {
          return -1;
        }
        return 1;
      }
      return 0;
    });
    setTableData([...sortedData]);
  };

  const onColumnClick = (column: string, ud: string) => {
    sortData(column, ud);
  };
  return (
    <div className="p-2 h-[calc(100vh_-_340px)] overflow-auto">
      <table className="">
        <thead className="table-header sticky top-0 bg-gray-400 text-white">
          <tr className="">
            {columns.map((column, index) => (
              <th className="border-black border" key={index}>
                <div className="flex gap-2">
                  <div className="flex-cols">
                    {column.accessorKey ? (
                      <>
                        <button
                          onClick={() =>
                            onColumnClick(column.accessorKey as string, "up")
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            onColumnClick(column.accessorKey as string, "down")
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </>
                    ) : null}
                  </div>

                  <p className="m-auto whitespace-nowrap">{column.header}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {tableData.map((row, index) => (
            <tr className="table-row" key={index}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell as string}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
