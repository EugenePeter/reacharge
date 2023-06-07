"use client";
import React, { FC } from "react";
import styled from "styled-components";
interface Props {
  promise: any;
}
async function TryLangTwo({ promise }: Props) {
  const users = await promise;
  return (
    <StyledDiv>
      <h1>USERS</h1>
      <p>{users[0].name}</p>
    </StyledDiv>
  );
}

export default TryLangTwo;

const StyledDiv = styled.div``;
