import styled from "@emotion/styled";

export const SharedLayoutStyled = styled.div`
  font-family: "Geologica", sans-serif;
  font-weight: 900;

  width: 320px;
  width: 100%;
  padding: 0;
  margin: 0 auto;

  background-color: black;
  color: darkorchid;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`;
