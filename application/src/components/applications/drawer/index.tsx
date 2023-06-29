"use client";
import styled, { css } from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";
import { ThemeType } from "@/design-system/types";
interface Props extends Children {}

const Drawer: FC<Props> = (props) => {
  const { children } = props;
  return (
    <StyledDrawer>
      <span className="material-symbols-outlined">grid_view</span>
    </StyledDrawer>
  );
};

export default Drawer;

interface Styles {
  theme: ThemeType;
}

const deriveStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    width: 100%;
    height: ${theme.sizes.height.BASE.rem};
    background-color: gray;
    -webkit-box-shadow: 0px 18px 8px -14px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0px 18px 8px -14px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 18px 8px -14px rgba(0, 0, 0, 0.12);
    border-bottom: 0.01px solid#cfd8dc;
    z-index: 1000;
    position: relative;
    display: flex;
  `;
};
export const StyledDrawer = styled.section`
  ${deriveStyles}

  nav {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
