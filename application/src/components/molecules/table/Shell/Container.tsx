import React from "react";
import cn from "classnames";

import { TableProps } from "../types";

const Container: React.FC<TableProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <div className={cn("container", className)} {...other}>
      {children}
    </div>
  );
};

export default Container;
