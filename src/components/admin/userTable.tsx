"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DataTablePagination } from "./dataTablePagination";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  status: "pending" | "enabled" | "disabled";
  provider: "discord" | "github";
  email: string;
  name: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Namn",
  },
  {
    accessorKey: "email",
    header: "E-post",
  },
  {
    accessorKey: "provider",
    header: "Provider",
    cell: (cell) => {
      switch (cell.row.original.provider) {
        case "discord":
          return (
            <span className="flex  items-center gap-2">
              <FaDiscord />
              Discord
            </span>
          );
        case "github":
          return (
            <span className="flex  items-center gap-2">
              <FaGithub />
              GitHub
            </span>
          );
        default:
          break;
      }
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (cell) => {
      switch (cell.row.original.status) {
        case "pending":
          return <span className="text-blue-700">Inbjuden</span>;
        case "disabled":
          return <span className="text-red-700">Avstängd</span>;

        case "enabled":
          return <span className="text-green-700">Aktivt</span>;

        default:
          break;
      }
    },
  },
];

interface UserTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function UserTable<TData, TValue>({
  columns,
  data,
}: UserTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    
    </div>
    <div className="flex items-center justify-end space-x-2 py-4">
        <DataTablePagination table={table}/>
      </div>
    </>
  );
}
