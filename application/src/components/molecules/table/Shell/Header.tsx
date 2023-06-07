import React from "react";
import cn from "classnames";
import { flexRender } from "@tanstack/react-table";
import { TableProps } from "../types";

interface Props extends TableProps {}
const Header: React.FC<Props> = (props) => {
  const { className, children, table, ...other } = props;

  return (
    <thead className={cn("thead", className)} {...other}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const customActions = ["selection", "expander"];
            const deriveWidth = () =>
              customActions.some((id) => header?.id === id) ? "40px" : "";
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                style={{ width: deriveWidth() }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default Header;
