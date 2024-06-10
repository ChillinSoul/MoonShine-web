"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../../../@/components/ui/button";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  previousPageHandler?: () => number;
  nextPageHandler?: () => number;
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  previousPageHandler,
  nextPageHandler,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="rounded-md border h-[calc(100vh_-_270px)] overflow-auto relative text-sm p-0">
        <Table className="h-full overflow-auto ">
          <TableHeader className="sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="data-table">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="border data-table-row" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          className="ml-2 p-2"
          variant="outline"
          size="sm"
          onClick={() => {
            if (previousPageHandler) {
              table.setPageIndex(previousPageHandler());
            } else {
              table.previousPage();
            }
          }}
          disabled={!table.getCanPreviousPage()}
        >
          Précédent
        </Button>
        <Button
          className="ml-2 p-2"
          variant="outline"
          size="sm"
          onClick={() => {
            if (nextPageHandler) {
              table.setPageIndex(nextPageHandler());
            } else {
              table.nextPage();
            }
          }}
          disabled={!table.getCanNextPage()}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}
