"use client";
import styled, { css } from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";
import { ThemeType } from "@/design-system/types";
interface Props extends Children {}

const CenterStage: FC<Props> = (props) => {
  const { children } = props;
  return <StyledCenterStage>{children}</StyledCenterStage>;
};

export default CenterStage;

interface Styles {
  theme: ThemeType;
}

const deriveStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 6;
    flex-shrink: 6;
    flex-basis: 0;
    width: 100%;
    height: calc(100vh - (${theme.sizes.height.BASE.rem} * 2));
    word-break: break-all;
    background-color: #ffffff;
  `;
};
export const StyledCenterStage = styled.main`
  ${deriveStyles}
`;
