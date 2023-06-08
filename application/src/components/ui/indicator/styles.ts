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
}

const styles = (props: Styles) => {
  const { theme } = props;
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.utils.xxs.rem};
    border-radius: 25px;
    height: ${theme.sizes.utils.xxs.rem};
    color: #fff;
  `;
};

export const StyledDiv = styled.div<{ color: Palette }>`
  ${styles}
  ${deriveColors}
`;
