import React, { FC } from "react";
import styled from "styled-components";
import { Children } from "@/types";

import { Progress, Track, StyledStepper } from "./styles";

interface Props<T> {
  data: {
    [P in keyof T]: T[P];
  };
}

const Stepper = <T,>(props: Props<T>) => {
  const { data } = props;
  console.log("Stepper comp data:", data);
  return (
    <StyledStepper>
      <p>
        {data.done}/{data.total}
      </p>
      <Track>
        <Progress data={data} />
      </Track>
    </StyledStepper>
  );
};

export default Stepper;
