import styled from "@emotion/styled";

export const ButtonStyled = styled.div`
  color: white;
  padding: 1rem;
  background-color: darkslateblue;
  border-radius: 0.5rem;

  :hover {
    color: darkslateblue;
    background-color: orange;
    transition: color background-color 150ms ease;
  }
`;
