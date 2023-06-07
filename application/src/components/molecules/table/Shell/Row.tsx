import React from "react";
import cn from "classnames";

import { TableProps } from "./types";
import styled from "styled-components";

const StyledRow = styled.tr`
  word-break: break-all;
`;

const Row: React.FC<TableProps> = (props) => {
  const { className, children, ...other } = props;

  return (
    <StyledRow className={cn("tr", className)} {...other}>
      {children}
    </StyledRow>
  );
};

export default Row;
