import styled, { css } from "styled-components";
import { NewColor, Palette } from "./types";
const colorsDictionary: NewColor = {
  primary: {
    color: "#2196f3",
  },
  success: {
    color: "#00e676",
  },
  warning: {
    color: "#ff9100",
  },
  danger: {
    color: "#f50057",
  },
  info: {
    color: "#81d4fa",
  },
};

const deriveColors = ({ color }: { color: Palette }) => {
  return css`
    background-color: ${colorsDictionary[color]?.color ??
    colorsDictionary["info"].color};
  `;
};
export const StyledDiv = styled.div<{ color: Palette }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  border-radius: 25px;
  height: 10px;
  color: #fff;
  ${deriveColors}
`;
