import styled, { css } from "styled-components";
import { ThemeType } from "@/design-system/types";
interface Styles {
  theme: ThemeType;
}

const deriveStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    display: flex;
    align-items: center;
    gap: 2px;
    height: ${theme.sizes.height.BASE.rem};
    position: absolute;
    bottom: 0;
  `;
};

export const PaginationContainer = styled.section`
  background-color: aliceblue;
  ${deriveStyles}
`;
