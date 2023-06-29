"use client";
import React, { useCallback, Suspense } from "react";
import { flexRender } from "@tanstack/react-table";
import cn from "classnames";
import { TableProps } from "../types";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const Body: React.FC<
  TableProps & {
    actions: any;
  }
> = (props) => {
  const { className, children, table, actions, ...other } = props;

  const displayCustomColumns = useCallback(<T,>(value: T, column: string) => {
    const Comp = dynamic(() => import("../custom/index"), {
      loading: () => <p>Loading...</p>,
    });
    return <Comp value={value} comp={column} />;
  }, []);

  return (
    <tbody className={cn("tbody", className)} {...other}>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => {
            const value = cell.getValue();
            const hasChildren = Array.isArray(value) && value.length;
            const column = cell.column.id;
            const customActions = ["selection", "expander"];
            const deriveWidth = () =>
              customActions.some((id) => column === id) ? "40px" : "";
            if (!hasChildren) {
              return (
                <td
                  key={cell.id}
                  style={{
                    width: deriveWidth(),
                  }}
                  onClick={() => actions.addTab(cell)}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            }
            return (
              <Suspense key={cell.id} fallback={<h1>LOADING...</h1>}>
                <td>{displayCustomColumns(value, column)}</td>
              </Suspense>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
