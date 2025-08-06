import { ArrowDown } from "../icons";
import { flexRender, Table as ReactTable } from "@tanstack/react-table";
import React from "react";

export const AppTable = ({ table }: { table: ReactTable<any> }) => {
  return (
    <div className="overflow-auto no-scrollbar flex flex-col justify-between h-full ">
      <table className="w-full border-separate border-spacing-x-6">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index, arr) => {
                return (
                  <th
                    style={{ width: header.getSize() }}
                    className={`
                      ${index === arr.length - 1 && "!pr-6"}
                      ' text-primary-lightest/[62%] text-[13px] font-medium !pl-6'
                    `}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer flex gap-1 items-center"
                            : "flex justify-start ",

                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,

                          header.getContext()
                        )}

                        {{
                          asc: header.column.getCanSort() && (
                            <ArrowDown color="#15272d9e" />
                          ),

                          desc: header.column.getCanSort() && (
                            <ArrowDown color="#15272d9e" className="rotate-180" />
                          ),
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() && (
                            <ArrowDown color="#15272d9e" />
                          ))}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, idx, arr) => {
            return (
              <tr className="" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      color="#5E606A"
                      className="border-t border-t-primary-dark/20 py-[18px] text-[15px] leading-5"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,

                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
