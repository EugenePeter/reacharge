import { ThemeType } from "@/design-system/types";
import styled, { css } from "styled-components";

import React, { FC } from "react";
import { Children } from "@/types";
interface Props extends Children {
  align: string;
}

const Stack: FC<Props> = (props) => {
  const { children, align } = props;
  return <StyledStack align={align}>{children}</StyledStack>;
};

export default Stack;

interface Styles {
  theme: ThemeType;
  align: string;
}
const StackStyles = (props: Styles) => {
  const { theme, align } = props;

  return css`
    display: flex;
    flex-grow: 1;
    justify-content: ${align};
    align-items: center;
    gap: ${theme.sizes.utils.macro.rem};
  `;
};

export const StyledStack = styled.div`
  ${StackStyles}
`;
