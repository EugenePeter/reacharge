import React from "react";
import { flexRender } from "@tanstack/react-table";
import cn from "classnames";
import { TableProps } from "../types";
import { Pill, Stepper, Stars, Indicator, GraphIcon } from "@/components/ui";
const Body: React.FC<TableProps> = (props) => {
  const { className, children, table, ...other } = props;
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
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            }
            if (column === "label") {
              return (
                <td key={cell.id}>
                  <div className="custom-row-container">
                    {value.map((v, i) => (
                      <Pill key={i} color={v.color}>
                        {v.value}
                      </Pill>
                    ))}
                  </div>
                </td>
              );
            }
            if (column === "task") {
              return (
                <td key={cell.id}>
                  <Stepper data={value[0]} />
                </td>
              );
            }
            if (column === "performance") {
              return (
                <td key={cell.id}>
                  {value.map((m, i) => (
                    <div className="performance-container" key={i}>
                      <Indicator color={m.indicator} />
                      <GraphIcon classNames="color--lighter" data={m.trend} />
                      <Stars number={m.stars} />
                    </div>
                  ))}
                </td>
              );
            }
            return (
              <td key={cell.id}>
                {value.map((v, i) => {
                  return Object.entries(v).map(([key, value]) => (
                    <React.Fragment key={i}>{value}</React.Fragment>
                  ));
                })}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
