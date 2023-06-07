"use client";
import styled, { css } from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";

interface Props extends Children {}

export const SideBar: FC<Props> = (props) => {
  const { children } = props;
  return <StyledSideBar>{children}</StyledSideBar>;
};

export default SideBar;

interface Column {
  variant?: string;
}

const mainColumnDimensions = css`
  flex-grow: 6;
  flex-shrink: 6;
`;

const defaultColumnDimensions = css`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;
const columnDimensions = ({ variant }: Column) => {
  if (variant === "main") {
    return mainColumnDimensions;
  }
  return defaultColumnDimensions;
};

export const StyledSideBar = styled.aside`
  ${columnDimensions}
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  height: calc(100vh - 80px);
  word-break: break-all;
  color: #455a64;
  background-color: #fff;
  -webkit-box-shadow: 5px 0px 17px -7px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 0px 17px -7px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 0px 17px -7px rgba(0, 0, 0, 0.2) !important;
  z-index: 10;
`;
