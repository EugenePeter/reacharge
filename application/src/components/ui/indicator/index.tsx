import React, { FC } from "react";
import { StyledDiv } from "./styles";
import { Children } from "@/types";
import { Palette } from "./types";
interface Props extends Partial<Children> {
  color: Palette;
}

const Indicator: FC<Props> = (props) => {
  const { children, color } = props;
  return <StyledDiv color={color}>{children}</StyledDiv>;
};

export default Indicator;
