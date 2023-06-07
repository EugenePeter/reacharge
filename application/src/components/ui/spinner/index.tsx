"use client";
import styled, { keyframes } from "styled-components";
export const Spinner = () => (
  <SpinnerContainer>
    <StyledSpinner className="loader"></StyledSpinner>;
  </SpinnerContainer>
);

export default Spinner;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }    
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const StyledSpinner = styled.div`
  display: flex;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;
