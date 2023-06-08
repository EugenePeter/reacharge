import React from "react";

import { Children } from "@/types";
import styled, { css } from "styled-components";
import { ThemeType } from "@/design-system/types";
interface Props extends Children {}
const Table: React.FC<Props> = (props) => {
  const { children } = props;

  return <StyledTable>{children}</StyledTable>;
};

export default Table;
interface Styles {
  theme: ThemeType;
}
const deriveStyles = (props: Styles) => {
  const { theme } = props;
  return css`
    height: 100%;
    /* height: calc(100vh - (${theme.sizes.height.BASE.rem} * 2)); */
  `;
};
export const StyledTable = styled.table`
  @import "tailwindcss/base";
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  width: 100%;
  max-width: 100%;
  position: relative;
  font-size: smaller;
  height: calc(100vh - (${({ theme }) => theme.sizes.height.BASE.rem} * 6));
  .custom-row-container {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 4px;
  }

  .pills {
    display: flex;
    justify-content: center;
    align-items: center;
    width: "60px";
    padding: 0 8px;
    border-radius: 8px;
    height: 24px;
    color: #fff;
  }

  .performance-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    .material-symbols-outlined {
      &--color {
        color: #ffb300;
        font-size: 18px;
        font-variation-settings: "OPSZ" 20;
      }

      &__color--lighter {
        color: #607d8b;
      }
    }
  }

  thead {
    // @apply bg-brand;
    display: flex !important;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #cccccc;
    height: 2.936rem;
    -webkit-box-shadow: 0px 18px 8px -14px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 18px 8px -14px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 18px 8px -14px rgba(0, 0, 0, 0.18);
    // ! tbody scroll
    display: block;
    /* width: calc(100% - 1em); */
  }

  thead tr {
    color: #fff;
    font-size: 16px;
  }

  tbody {
    // ! tbody scroll
    display: block;
    overflow: auto;
    ${deriveStyles}
    tr {
      border-bottom: 0.06px solid#cfd8dc;
      height: ${({ theme }: { theme: ThemeType }) => {
        return theme.sizes.height.BASE.rem;
      }};
      /* height: 48px; */

      &:nth-of-type(odd) {
        background-color: #eef7f9;
      }
      &:last-child {
        border: 0;
      }
    }
    td {
    }
  }

  tbody tr:hover {
    background: #cccccc;
    transition: all 0.2s linear;
  }

  tr {
    // ! tbody scroll
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    color: #393939;
    font-weight: bold;
  }

  td {
  }

  th.checkbox,
  td.checkbox {
    width: 70px;
    top: -9px;
    position: relative;
  }

  td,
  th {
    /* padding-left: 8px; */
    text-align: left;
    /* &.l {
      text-align: right;
    }
    &.c {
      text-align: center;
    }
    &.r {
      text-align: center;
    } */
  }
`;

// export default Object.assign(Table, {
//   Container,
//   Header,
//   Body,
//   Row,
//   Cell,
//   Footer,
// }) as any; // temp for build
