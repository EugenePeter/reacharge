import styled, { css } from "styled-components";
import { ThemeType } from "@/design-system/types";

interface Styles {
  theme: ThemeType;
  width: string;
}

const deriveStyles = (props: Styles) => {
  const { theme, width } = props;
  return css`
    min-width: ${theme.sizes.width.xs.rem};
    height: ${theme.sizes.height.md.rem};
    word-break: break-all;
    background-color: #3971ff;
    color: #fff;
    border-radius: 6px;
    outline: none;
    border: none;
  `;
};

export const StyledButton = styled.button<{ width: string }>`
  ${deriveStyles}
`;
