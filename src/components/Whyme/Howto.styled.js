import styled from "@emotion/styled";

export const Howto = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 1300px) {
    gap: 5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
