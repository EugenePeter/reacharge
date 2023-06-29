import styled, { css } from "styled-components";
import { ThemeType } from "@/design-system/types";

interface Styles {
  theme: ThemeType;
  width: string;
}

const deriveStyles = (props: Styles) => {
  const { theme, width } = props;
  return css`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.utils.macro.rem};
    min-width: ${theme.sizes.width.xs.rem};
    height: ${theme.sizes.height.md.rem};
    background-color: #3971ff;
    border-radius: 4.6px;
    color: #fff;
    padding: 0 4px;
  `;
};

export const ButtonWrapper = styled.span<{ width: string }>`
  ${deriveStyles}
`;

export const StyledButton = styled.button<{ width: string }>`
  word-break: break-all;
  outline: none;
  border: none;
  background: none;
  color: #fff;
  padding: 0;
  margin: 0;
`;
