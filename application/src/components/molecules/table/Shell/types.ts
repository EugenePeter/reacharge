import { Children } from "@/types";
import { Table } from "@tanstack/react-table";
export interface TableProps extends Children {
  className?: string;
  table: Table<any>;
}
