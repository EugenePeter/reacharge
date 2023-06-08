"use client";
import React, { FC } from "react";
import { TablePanelContainer } from "./styles";
import { Children } from "@/types";
interface Props extends Children {
  // Add your prop types here
  className?: string;
}

const TablePanel: FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <TablePanelContainer className={className}>{children}</TablePanelContainer>
  );
};

export default TablePanel;
