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
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const H1 = styled.h1`
  color: white;
  padding-top: 2rem;
  line-height: 5rem;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  color: white;
  padding-top: 2rem;
  line-height: 5rem;
  margin: 0 auto;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  line-height: 2rem;

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1300px) {
    font-size: 2rem;
    line-height: 4rem;
  }
`;

export const Mebw = styled.img`
  margin-top: 3rem;
  width: 320px;
  @media screen and (min-width: 1300px) {
    width: 640px;
  }
`;

export const Section = styled.section``;

export const Philosopy = styled.div`
  display: block;
  max-width: 100%;
`;
