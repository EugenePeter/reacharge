import { Suspense } from "react";
import dynamic from "next/dynamic";
export { default as TableLabels } from "../label";
export { default as TableTask } from "../task";
export { default as TablePerformance } from "../performance";

const TableLabels = dynamic(() => import("../label"), {
  loading: () => <p>Loading TABLE LABELS...</p>,
});

const TablePerformance = dynamic(() => import("../performance"), {
  loading: () => <p>Loading TABLE PERFORMANCE...</p>,
});

const TableTasks = dynamic(() => import("../task"), {
  loading: () => <p>Loading TABLE TASKS...</p>,
});

import { Children } from "@/types";

interface Props extends Children {
  value: any;
  comp: string;
}

type ComponentMap = {
  [key: string]: React.ReactElement;
};

const CustomColumns: React.FC<Props> = (props) => {
  const { value, comp } = props;
  const component: ComponentMap = {
    label: <TableLabels value={value} />,
    tasks: <TableTasks value={value} />,
    performance: <TablePerformance value={value} />,
  };

  return (
    <Suspense fallback={<>LOADING CUSTOM COLUMNS...</>}>
      {component[comp]}
    </Suspense>
  );
};

export default CustomColumns;
