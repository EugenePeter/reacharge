import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;

interface Column {
  variant?: string;
}

const mainColumnDimensions = css`
  flex-grow: 6;
  flex-shrink: 6;
`;

const defaultColumnDimensions = css`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;
const columnDimensions = ({ variant }: Column) => {
  if (variant === "main") {
    return mainColumnDimensions;
  }
  return defaultColumnDimensions;
};

export const Column = styled.div<Column>`
  ${columnDimensions}
  height: calc(100vh - 80px);
  flex-basis: 0;
  background-color: orange;
  word-break: break-all;
  background-color: ${(props) =>
    props.variant === "main" ? "#f1eded" : "#9537d9"};
`;
