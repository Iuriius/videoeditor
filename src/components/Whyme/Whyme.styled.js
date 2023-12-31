import styled from "@emotion/styled";

export const Whyme = styled.div`
  margin: 0 auto;
  width: 300px;
  margin-top: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    gap: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    gap: 5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
