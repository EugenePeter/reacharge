import styled from "styled-components";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>YOUR BRANDING GOES HERE</Header>
      <Container>
        <Column>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </Column>
        <Column type={"main"}>{children}</Column>
        <Column>
          {["eugene", "peter", "maestrado"].map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </Column>
      </Container>
      <Footer>Design and Developed By Eugene D Maestrado</Footer>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => {
    console.log("CONTAINER THEME:", theme);
    return "pink";
  }};
`;

export const Header = styled.aside`
  width: 100%;
  height: 40px;
  background-color: #ed1ab1;
`;

export const Footer = styled.aside`
  width: 100%;
  height: 40px;
  background-color: #3e3d3e;
  color: #fff;
`;

export const Nav = styled.aside`
  /* width: 10%; */
  height: calc(100vh - 80px);
  background-color: lightgrey;
  flex-basis: 1;
`;

export const Main = styled.main`
  /* width: 60%; */
  height: calc(100vh - 80px);
  background-color: aliceblue;
  flex-basis: 2;
`;

interface Column {
  type?: string;
}
export const Column = styled.aside<Column>`
  flex-grow: ${(props) => (props.type === "main" ? 8 : 1)};
  flex-shrink: ${(props) => (props.type === "main" ? 8 : 1)};
  flex-basis: 20;
  /* margin: 10px; */
  height: calc(100vh - 80px);
  background-color: ${(props) =>
    props.type === "main" ? "#f1eded" : "#9537d9"};
  /* :first-of-type {
    flex-grow: 2;
    flex-shrink: 2;
  } */
`;
