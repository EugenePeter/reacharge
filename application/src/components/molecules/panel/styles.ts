import styled, { css } from "styled-components";
import { ThemeType } from "@/design-system/types";

interface Styles {
  className?: string;
  theme: ThemeType;
}

const deriveStyles = (props: Styles) => {
  const { theme, className } = props;
  return css`
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    height: ${theme.sizes.height.md.rem};
    padding-top: ${className ? theme.sizes.height.md.rem : 0};
  `;
};

export const TablePanelContainer = styled.div<Styles>`
  ${deriveStyles}
  input {
    height: ${({ theme }: Styles) => theme.sizes.height.md.rem};
    border-radius: 6px;
    padding-left: 5px;
    padding-bottom: 2px;
    outline: none;
    border: ${({ theme }: Styles) => theme.sizes.line.zepto.rem} solid lightgrey;
    box-sizing: border-box;
  }
`;
