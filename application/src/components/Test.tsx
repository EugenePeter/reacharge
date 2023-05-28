import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => {
    console.log("NAA  BAY THEME? :", theme);
    return "blue";
  }};
`;
const Test = () => {
  return (
    <Container>
      <h1> I am test</h1>;
    </Container>
  );
};

export default Test;
