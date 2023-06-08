import React, { FC } from "react";
import { StyledDiv } from "./styles";
import { Children } from "@/types";
import { Palette } from "./types";
interface Props extends Children {
  color: Palette;
}

const Pills: FC<Props> = (props) => {
  const { children, color } = props;

  return <StyledDiv color={color}>{children}</StyledDiv>;
};

export default Pills;
