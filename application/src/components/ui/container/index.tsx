"use client";
import styled from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";

interface Props extends Children {}

const Container: FC<Props> = (props) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
export const StyledContainer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;
