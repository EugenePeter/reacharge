import React, { FC } from "react";
import { Children } from "@/types";
import { StyledButton } from "./styles";
interface Props extends Children {
  width: string;
  label: string;
  // Add your prop types here
}

const Button: FC<Props> = (props) => {
  const { width, label } = props;
  return <StyledButton width={width}>{label}</StyledButton>;
};

export default Button;
