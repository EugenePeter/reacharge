import React, { FC } from "react";
import { Children } from "@/types";
interface Props extends Children {
  // Add your prop types here
}

const MembersLayout: FC<Props> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default MembersLayout;
