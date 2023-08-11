import styled from "@emotion/styled";

export const PhotoStyled = styled.div`
  margin: 0 auto;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`;

export const Flexwrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const H1 = styled.h1`
  color: white;
  padding: 0 5rem;
  padding-top: 2rem;
  line-height: 5rem;
`;

export const H2 = styled.h2`
  padding: 0 3rem;
  line-height: 4rem;
`;

export const Mebw = styled.img`
  margin-top: 3rem;
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 640px;
  }
`;

export const Section = styled.section``;
