"use client";

import React, { FC } from "react";
import { Children } from "@/types";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
interface Props extends Children {
  // Add your prop types here
}
const WorkspaceLayout: FC<Props> = (props) => {
  const { children } = props;

  const currentPath = useSelectedLayoutSegment();
  const path = usePathname();
  console.log("current path:", path);
  return (
    <>
      <h3>{currentPath} </h3>
      {children}
    </>
  );
};

export default WorkspaceLayout;
