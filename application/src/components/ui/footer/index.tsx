"use client";
import styled, { css } from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";
import { ThemeType } from "@/design-system/types";
interface Props extends Children {}

const Footer: FC<Props> = (props) => {
  const { children } = props;
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;

interface Styles {
  theme: ThemeType;
}

const deriveStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    width: 100%;
    height: ${theme.sizes.height.BASE.rem};
    color: #fff;
    background-color: #3b3b3b;
    position: absolute;
    bottom: 0;
  `;
};

export const StyledFooter = styled.footer`
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #3b3b3b;
  position: absolute;
  bottom: 0;
  ${deriveStyles}
`;
