import styled, { css } from "styled-components";
import { NewColor, Palette } from "./types";
import { ThemeType } from "@/design-system/types";
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

interface Styles {
  theme: ThemeType;
  color: Palette;
}
const deriveStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: "60px";
    /* padding: 0 8px; */
    padding: ${`0 ${theme.sizes.utils.xs.rem}`};
    border-radius: 6px;
    height: ${theme.sizes.height.md.rem};
    font-size: ${theme.font.sizes.sm.rem};
    color: #fff;
  `;
};
export const StyledDiv = styled.div<{ color: Palette }>`
  ${deriveStyles}
  ${deriveColors}
`;
