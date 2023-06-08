import styled, { css } from "styled-components";
import { ThemeType } from "@/design-system/types";
interface Props {
  data: {
    done: any;
    total: any;
  };
}

const deriveWidth = ({ data }: Props) =>
  `${(data.done / data.total) * 100 ?? 0}%`;

interface Styles {
  theme: ThemeType;
}

const progressStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    background-color: #00e676;
    width: ${deriveWidth};
    height: ${theme.sizes.height.xxs.rem};
    border-radius: 25px;
  `;
};

export const Progress = styled.div<Props>`
  ${progressStyles}
`;

const trackStyles = (props: Styles) => {
  const {
    theme: { sizes },
  } = props;
  return css`
    background-color: #d9d9d9;
    display: flex;
    width: ${sizes.width.full};
    height: ${sizes.height.xxs.rem};
    border-radius: 25px;
  `;
};
export const Track = styled.div`
  ${trackStyles}
`;

export const StyledStepper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 0 4px;
  p {
    margin: 0;
  }
`;
