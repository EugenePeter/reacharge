"use client";
import styled from "styled-components";
import { Children } from "@/types";
import React, { FC } from "react";

interface Props extends Children {}

const CenterStage: FC<Props> = (props) => {
  const { children } = props;
  return <StyledCenterStage>{children}</StyledCenterStage>;
};

export default CenterStage;
export const StyledCenterStage = styled.main`
  position: relative;
  display: flex;
  overflow: auto;
  flex-direction: column;
  flex-grow: 6;
  flex-shrink: 6;
  flex-basis: 0;
  width: 100%;
  height: calc(100vh - 80px);
  word-break: break-all;
  background-color: #ffffff;
`;
