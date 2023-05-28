export interface Column {
  Header: string;
  accessor: string;
}
export type Data<D> = {
  [K in keyof D]: string;
};

export interface ReturnType<T> {
  columns: Array<Column>;
  data: Array<Data<T>>;
}

export interface Tasks {
  _id: string;
  title: string;
  description: string;
  status: string;
  assignedTo: null[];
}
