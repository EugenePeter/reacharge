import React, { FC } from "react";
import { Children } from "@/types";
import { StyledButton, ButtonWrapper } from "./styles";
import { Stack } from "@/components";
interface Props extends Children {
  width: string;
  label?: string;
  icon?: {
    name: string;
    start?: true;
    end?: true;
  };
  // Add your prop types here
}

export const Button: FC<Props> = (props) => {
  const { width, label, icon } = props;

  const getButtonContent = () => {
    if (!icon) return label;
    return (
      <>
        {icon.start ? (
          <span className="material-symbols-outlined">{icon.name}</span>
        ) : (
          <></>
        )}
        <StyledButton width={width}>{label}</StyledButton>
        {icon.end ? (
          <span className="material-symbols-outlined">{icon.name}</span>
        ) : (
          <></>
        )}
      </>
    );
  };

  return <ButtonWrapper width={width}>{getButtonContent()}</ButtonWrapper>;
};
