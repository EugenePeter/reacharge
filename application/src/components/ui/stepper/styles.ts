import styled from "styled-components";

interface Props {
  data: {
    done: any;
    total: any;
  };
}

const deriveWidth = ({ data }: Props) =>
  `${(data.done / data.total) * 100 ?? 0}%`;

export const Progress = styled.div<Props>`
  background-color: #00e676;
  width: ${deriveWidth};
  height: 10px;
  border-radius: 25px;
`;

export const Track = styled.div`
  background-color: #78909c;
  display: flex;
  width: 100%;
  height: 10px;
  border-radius: 25px;
`;

export const StyledStepper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 0 4px;
`;
