"use client";
import React, { FC } from "react";
import { PanelContainer } from "./styles";
import { Children } from "@/types";
interface Props extends Children {
  // Add your prop types here
  className?: string;
}

const Panel: FC<Props> = (props) => {
  const { children, className } = props;
  return <PanelContainer className={className}>{children}</PanelContainer>;
};

export default Panel;
