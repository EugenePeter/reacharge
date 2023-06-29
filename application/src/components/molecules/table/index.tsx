"use client";
import React, { useMemo, useState } from "react";
// import "./styles.scss";
import { dummyMembers, Members } from "@/utils";
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

import { Body, Header, Table } from "./Shell";

import Pagination from "./pagination";
import ActionCreator from "./action-creator";
import IndeterminateCheckbox from "./inderterminate-checkbox";

import { Button, Stack, Panel } from "@/components";

function Grid(props: any) {
  const { actions, datas } = props;
  const [rowSelection, setRowSelection] = React.useState({});
  const [sort, setSort] = useState("date");
  const data = useMemo(() => datas.data, []);
  const columnHelper = createColumnHelper<Members>();
  // const columns = useMemo(
  //   () => [
  //     columnHelper.display({
  //       id: "selection",
  //       header: ({ table }) => (
  //         <>
  //           <IndeterminateCheckbox
  //             {...{
  //               checked: table.getIsAllRowsSelected(),
  //               indeterminate: table.getIsSomeRowsSelected(),
  //               onChange: table.getToggleAllRowsSelectedHandler(),
  //             }}
  //           />
  //         </>
  //       ),
  //       cell: ({ row }) => (
  //         <IndeterminateCheckbox
  //           {...{
  //             checked: row.getIsSelected(),
  //             disabled: !row.getCanSelect(),
  //             indeterminate: row.getIsSomeSelected(),
  //             onChange: row.getToggleSelectedHandler(),
  //           }}
  //         />
  //       ),
  //       footer: ({ table }) => (
  //         <IndeterminateCheckbox
  //           {...{
  //             checked: table.getIsAllRowsSelected(),
  //             indeterminate: table.getIsSomeRowsSelected(),
  //             onChange: table.getToggleAllRowsSelectedHandler(),
  //           }}
  //         />
  //       ),
  //     }),
  //     columnHelper.accessor((row) => row.name, {
  //       id: "name",
  //       header: () => <span>Name</span>,
  //       cell: (info) => info.getValue(),
  //       footer: (props) => props.column.id,
  //     }),
  //     columnHelper.accessor((row) => row.label, {
  //       id: "label",
  //       cell: (info) => {
  //         return info.getValue();
  //       },
  //       header: () => <span>Label</span>,
  //       footer: (props) => props.column.id,
  //     }),
  //     columnHelper.accessor((row) => row.task, {
  //       id: "task",
  //       header: () => "Task",
  //       footer: (props) => props.column.id,
  //     }),
  //     columnHelper.accessor((row) => row.dateJoined, {
  //       id: "dateJoined",
  //       header: () => <span>Date Joined</span>,
  //       footer: (props) => props.column.id,
  //     }),
  //     columnHelper.accessor((row) => row.performance, {
  //       id: "performance",
  //       header: "Performance",
  //       footer: (props) => props.column.id,
  //     }),
  //   ],
  //   [columnHelper]
  // );

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
      ...datas.columns,
    ],
    [columnHelper, datas.columns]
  );

  console.log("COOOOOOOOOOOOOLS:", columns);

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
    initialState: {
      pagination: {
        pageSize: 50,
      },
    },
  });

  return (
    <>
      <ActionCreator
        actions={[
          {
            top: (
              <>
                <Stack align={`flex-start`}>
                  <span className="material-symbols-outlined">filter_alt</span>{" "}
                  Filter
                  <select
                    value={sort}
                    onChange={({ target }) => {
                      setSort(() => target.value);
                    }}
                  >
                    {[
                      {
                        type: "date",
                      },
                      {
                        type: "name",
                      },
                      {
                        type: "performance",
                      },
                      {
                        type: "label",
                      },
                    ].map((item, i) => (
                      <option key={i} value={item.type}>
                        {item.type}
                      </option>
                    ))}
                  </select>
                  <input placeholder="search" />
                </Stack>
                <Stack align={`flex-end`}>
                  <Button
                    label="tag"
                    icon={{ name: "sell", start: true }}
                    width="7.687rem"
                  />
                  <Button
                    label="add"
                    icon={{ name: "person_add", start: true }}
                    width="7.687rem"
                  />
                  <Button
                    label="import member"
                    icon={{ name: "import_contacts", start: true }}
                    width="7.687rem"
                  />
                  <Button
                    label="bulk actions"
                    icon={{ name: "interests", start: true }}
                    width="7.687rem"
                  />
                  <Button
                    label="more"
                    icon={{ name: "more", start: true }}
                    width="7.687rem"
                  />
                </Stack>
              </>
            ),
          },
        ]}
      />
      <Table>
        <Header table={table} />
        <Body table={table} actions={actions} />
        {/* <Footer table={table} /> */}
      </Table>
      <Panel>
        <Pagination table={table} rowSelection={rowSelection} />
      </Panel>
    </>
  );
}
export default Grid;
