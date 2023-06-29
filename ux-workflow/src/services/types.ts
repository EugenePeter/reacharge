export type Data<D> = {
  [key: string]: string;
};
export interface DataItem {
  [key: string]: any;
}
export interface Column {
  header: string;
  accessorKey: keyof DataItem;
}
// export type Data<D> = {
//   [K in keyof D]: string;
// };

type Test = DataObj<{
  name: "eugene";
  lastname: "maestrado";
  xp: {
    dev: "aldesa";
    design: "creative genes";
  };
}>;

export type NewDataObj<D> = DataObj<D>;

export type DataObj<D> = {
  [K in keyof D]: D[K];
};
const params = [
  {
    employeeId: 2011890402,
    firstName: "Tuckie",
    lastName: "Sywell",
    city: "Khiliomódhi",
    country: "Greece",
    suburb: "Pasadena",
    fullName: "Tuckie Sywell",
    email: "tsywell2@phpbb.com",
    label: [
      { value: "agency", color: "warning" },
      { value: "agency", color: "warning" },
    ],
  },
];
const testFunc = <A>(params: DataObj<A>[]) => {
  const dataO: DataObj<A> = {
    ...(params[0] as DataObj<A>),
    employeeId: 2011890402,
    firstName: "Tuckie",
    lastName: "Sywell",
    city: "Khiliomódhi",
    country: "Greece",
    suburb: "Pasadena",
    fullName: "Tuckie Sywell",
    email: "tsywell2@phpbb.com",
    label: [
      { value: "agency", color: "warning" },
      { value: "agency", color: "warning" },
    ],
  };
  return params;
};

testFunc(params);

export interface ReturnType<T> {
  columns: Array<Column>;
  data: any[];
  // data: Array<Data<T>>;
}

export interface Tasks {
  _id: string;
  title: string;
  description: string;
  status: string;
  assignedTo: null[];
}
