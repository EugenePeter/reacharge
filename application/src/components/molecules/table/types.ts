import { Children } from "@/types";
import { Table } from "@tanstack/react-table";

export interface TableProps extends Children {
  className?: string;
  table: Table<any>;
}

// export interface OtherColumnProperties {
//   show?: boolean;
//   custom?: boolean;
//   Cell?: (props?: Cell<any>) => JSX.Element;
// }

// export type ExtendedColumns = Column & OtherColumnProperties;

// export interface TableConfig {
//   enablePagination: boolean;
//   showCurrentPage?: boolean;
//   initialState: {
//     pageSize: number;
//     pageIndex?: number;
//     paginationRange?: number;
//     sortOrder?: "ascending" | "descending";
//     sortBy?: string;
//   };
// }

// export interface TablePagination {
//   currentPage: number;
//   currentResultCount: number;
//   totalPageCount: number;
//   totalResultCount: number;
// }

// export interface TableActionHandlers {
//   onNext: () => void;
//   onPrevious: () => void;
//   onJumpToFirst: () => void;
//   onJumpToLast: () => void;
//   onJumpToPage: (page: number) => void;
//   onChecked: () => void;
// }

// export interface TableProps {
//   columns: ExtendedColumns[];
//   data: Record<string, unknown>[];
//   actions: TableActionHandlers;

//   options?: {
//     config?: Partial<TableConfig>;
//     pagination?: TablePagination;
//   };

//   isLoading?: boolean;
//   customComponent?: (item: Record<string, any>) => void;
// }
