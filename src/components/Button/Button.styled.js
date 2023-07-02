import styled from "@emotion/styled";

export const ButtonStyled = styled.div`
  color: white;
  padding: 1rem;
  background-color: darkslateblue;
  border-radius: 0.5rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    color: darkslateblue;
    background-color: orange;
    cursor: pointer;
  }
`;
