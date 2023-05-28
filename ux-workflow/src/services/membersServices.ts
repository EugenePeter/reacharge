import { membersDA } from "../dataAccess";
import { Column, Data, ReturnType, Tasks } from "./types";
export const getMembersTable = async () => {
  const membersTable = await membersDA.data();
  return membersTable;
};

const computeTaskCompletion = (tasks: Array<Tasks>) => {
  const numOfTasks = tasks.length;
  const completedTasks = tasks.reduce(
    (count, task) => (task.status === "completed" ? count + 1 : count),
    0
  );
  return `${completedTasks}/${numOfTasks}`;
};

export const table = async () => {
  const columns = await membersDA.columns();
  const data = await membersDA.data();
  function structureMemberTable<T, D>(
    columns: Column[],
    rows: Array<Data<D>>
  ): ReturnType<T> {
    const data: Data<T>[] = [];

    rows.forEach((row) => {
      const dataObj: Data<T> = {} as Data<T>;
      Object.entries(row).forEach(([key, value]) => {
        const colIndex = columns.findIndex((col) => col.accessor === key);
        const colItem = columns?.[colIndex];
        if (!colItem) return;
        dataObj[colItem.accessor as keyof T] = String(value);
        if (
          colItem.accessor === "tasks" &&
          Array.isArray(value) &&
          value.length
        ) {
          dataObj[colItem.accessor as keyof T] = computeTaskCompletion(value);
        }
      });
      data.push(dataObj);
    });
    return { columns, data };
  }
  return structureMemberTable(columns, data);
};
