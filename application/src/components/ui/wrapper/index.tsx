"use client";
import styled, { css } from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";
import { ThemeType } from "@/design-system/types";
interface Props extends Children {
  direction: string;
  justify?: string;
  layout?: {
    padding: Partial<{
      allSides: boolean;
      values: string;
      bothSides: boolean;
      topBottom: boolean;
      // leftRightVal: `0 ${ThemeType["sizes"]["utils"]["BASE"]["rem"]}`;
      leftRightVal: string;
      topBottomVal: string;
      left: string;
      right: string;
      top: string;
      bottom: string;
    }>;
  };
}

const Wrapper: FC<Props> = (props) => {
  const { children, direction, layout } = props;
  return (
    <StyledWrapper direction={direction} layout={layout}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;

interface Styles {
  theme: ThemeType;
  direction: string;
  justify: string;
  layout?: {
    padding: Partial<{
      allSides: boolean;
      values: string;
      bothSides: boolean;
      topBottom: boolean;
      leftRightVal: string;
      // leftRightVal: `0 ${ThemeType["sizes"]["utils"]["BASE"]["rem"]}`;
      topBottomVal: string;
      left: string;
      right: string;
      top: string;
      bottom: string;
    }>;
  };
}

const deriveLayout = (props: Styles) => {
  const { layout } = props;
  if (!layout) return;
  const { padding } = layout;
  if (!padding) return;
  const {
    values,
    allSides,
    bothSides,
    leftRightVal,
    topBottom,
    topBottomVal,
    left,
    right,
    top,
    bottom,
  } = padding;
  if (allSides)
    return css`
      padding: ${values};
    `;
  if (bothSides)
    return css`
      padding: ${leftRightVal};
    `;
  if (topBottom)
    return css`
      padding: ${topBottomVal};
    `;
  return css`
    padding: ${`${top} ${right} ${bottom} ${left}`};
  `;
};
const WrapperStyles = (props: Styles) => {
  const { theme, direction, justify } = props;

  return css`
    display: flex;
    flex-direction: ${direction};
    width: 100%;
    justify-content: ${justify};
    align-items: center;
    margin: 0 auto;
    /* padding: 5rem; */
    /* padding: ${theme.sizes.utils.xxs.rem}; */
    box-sizing: border-box;
    ${deriveLayout}
  `;
};

export const StyledWrapper = styled.section<Styles>`
  ${WrapperStyles}
`;
