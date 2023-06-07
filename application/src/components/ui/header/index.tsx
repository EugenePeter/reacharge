"use client";
import styled from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";

interface Props extends Children {}

const Header: FC<Props> = (props) => {
  const { children } = props;
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
export const StyledHeader = styled.header`
  width: 100%;
  height: 48px;
  background-color: #fff;
  -webkit-box-shadow: 0px 7px 10px -7px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 7px 10px -7px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 7px 10px -7px rgba(0, 0, 0, 0.08);
  border-bottom: 0.01px solid#cfd8dc;
  z-index: 1000;
  position: relative;
  display: flex;
  nav {
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
