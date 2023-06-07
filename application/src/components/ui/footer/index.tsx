"use client";
import styled from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";

interface Props extends Children {}

const Footer: FC<Props> = (props) => {
  const { children } = props;
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
export const StyledFooter = styled.footer`
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #3b3b3b;
  position: absolute;
  bottom: 0;
`;
