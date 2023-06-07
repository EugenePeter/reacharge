// "use client";
// import styled, { css } from "styled-components";

// export default function Dashboard({ children }: { children: React.ReactNode }) {
//   console.log("WHERE I AM BEING RENDERED");
//   return <>{children}</>;
// }

// export const Header = styled.aside`
//   width: 100%;
//   height: 40px;
//   background-color: #ed1ab1;
// `;

// export const Footer = styled.aside`
//   width: 100%;
//   height: 40px;
//   background-color: #3e3d3e;
//   color: #fff;
// `;

// export const Nav = styled.aside`
//   /* width: 10%; */
//   height: calc(100vh - 80px);
//   background-color: lightgrey;
//   flex-basis: 1;
// `;

// export const Main = styled.main`
//   /* width: 60%; */
//   height: calc(100vh - 80px);
//   background-color: aliceblue;
//   flex-basis: 2;
// `;

// export const Container = styled.section`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   margin: 0 auto;
//   background-color: ${({ theme }) => {
//     return "black";
//   }};
// `;

// interface Column {
//   variant?: string;
// }

// const mainColumnDimensions = css`
//   flex-grow: 6;
//   flex-shrink: 6;
// `;

// const defaultColumnDimensions = css`
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0;
// `;
// const columnDimensions = ({ variant }: Column) => {
//   if (variant === "main") {
//     return mainColumnDimensions;
//   }
//   return defaultColumnDimensions;
// };

// export const Column = styled.div<Column>`
//   ${columnDimensions}
//   height: calc(100vh - 80px);
//   flex-basis: 0;
//   background-color: orange;
//   word-break: break-all;
//   background-color: ${(props) =>
//     props.variant === "main" ? "#f1eded" : "#9537d9"};
// `;

export {};
