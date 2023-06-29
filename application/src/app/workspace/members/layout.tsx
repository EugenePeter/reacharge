"use client";
import React, { FC } from "react";
import { Children } from "@/types";
import { Wrapper } from "@/components";
import { ThemeType } from "@/design-system/types";
import { theme } from "@/design-system";
interface Props extends Children {
  // Add your prop types here
}

const MembersLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper
      direction="column"
      layout={{
        padding: {
          bothSides: true,
          leftRightVal: `0 ${theme.sizes.utils.lg.rem}`,
        },
      }}
    >
      {children}
    </Wrapper>
  );
};

export default MembersLayout;
