"use client";
import React, { HTMLProps, useMemo } from "react";
// import "./styles.scss";
import { dummyData, dummyMembers, Members } from "@/utils";
import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";

import { Body, Header, Footer, Table } from "./Shell";

import Pagination from "./pagination";
import IndeterminateCheckbox from "./inderterminate-checkbox";
import TablePanel from "../panel";

import { Button } from "@/components";

function Grid() {
  // const [data, setData] = React.useState(dummyData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const data = useMemo(() => dummyMembers, []);
  const columnHelper = createColumnHelper<Members>();
  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "selection",
        header: ({ table }) => (
          <>
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
          </>
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
        footer: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
      }),
      columnHelper.accessor((row) => row.name, {
        id: "name",
        header: () => <span>Name</span>,
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor((row) => row.label, {
        id: "label",
        cell: (info) => {
          return info.getValue();
        },
        header: () => <span>Label</span>,
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor((row) => row.task, {
        id: "task",
        header: () => "Task",
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor((row) => row.dateJoined, {
        id: "dateJoined",
        header: () => <span>Date Joined</span>,
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor((row) => row.performance, {
        id: "performance",
        header: "Performance",
        footer: (props) => props.column.id,
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <>
      <TablePanel className={`padding-t--base`}>
        <span className="material-symbols-outlined">filter_alt</span> Filter{" "}
        <input placeholder="sort" /> <input placeholder="search" />
        <Button label="tag" width="7.687rem" />{" "}
        <Button label="add contact" width="4.687rem" />
      </TablePanel>
      <Table>
        <Header table={table} />
        <Body table={table} />
        {/* <Footer table={table} /> */}
      </Table>
      <Pagination table={table} rowSelection={rowSelection} />
    </>
  );
}
export default Grid;
