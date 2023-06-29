import { membersDA } from "../dataAccess";
import { data } from "../dataAccess/membersDA";
import {
  Column,
  Data,
  DataObj,
  NewDataObj,
  DataItem,
  ReturnType,
  Tasks,
} from "./types";
export const getMembersTable = async () => {
  const membersTable = await membersDA.data();
  return membersTable;
};

const computeTaskCompletion = (tasks: Array<Tasks>) => {
  if (!tasks.length) return [];
  const numOfTasks = tasks.length;
  const completedTasks = tasks.reduce(
    (count, task) => (task.status === "completed" ? count + 1 : count),
    0
  );
  return [
    {
      done: completedTasks,
      total: numOfTasks,
    },
  ];
};

export type Data2<D> = {
  [K in keyof D]: K extends "tasks"
    ? string | ReturnType<typeof computeTaskCompletion>
    : string;
};

function structureMemberTable<T, D>(
  columns: Column[],
  rows: Array<Data<D>>
): ReturnType<T> {
  const data: Partial<DataItem>[] = rows.map((item) => {
    const filteredItem: Partial<DataItem> = {};
    columns.forEach((column) => {
      if (!item.hasOwnProperty(column.accessorKey)) return;
      if (column.accessorKey !== "tasks")
        return (filteredItem[column.accessorKey] = item[column.accessorKey]);
      return (filteredItem[column.accessorKey] = computeTaskCompletion(
        item[column.accessorKey] as unknown as Tasks[]
      ));
    });
    return filteredItem;
  });

  return { columns, data };
}

export const table = async () => {
  const columns = await membersDA.columns();
  const data = await membersDA.data();
  if (columns.length && data.length) return structureMemberTable(columns, data);
};
