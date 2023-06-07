import React from "react";
import cn from "classnames";

import { TableProps } from "../types";
import { flexRender } from "@tanstack/react-table";
const Footer: React.FC<TableProps> = (props) => {
  const { className, children, table, ...other } = props;

  return (
    <tfoot className={cn("footer", className)} {...other}>
      {table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <th key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </tfoot>
  );
};

export default Footer;
