import React, { FC } from "react";
import { Children } from "@/types";
import { Stepper } from "@/components/ui";

interface Props extends Children {
  value: any;
}

const Task: FC<Props> = (props) => {
  const { value } = props;
  return <Stepper data={value[0]} />;
};

export default Task;
