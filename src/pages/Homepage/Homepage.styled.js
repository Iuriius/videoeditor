import styled from "@emotion/styled";
import img from "../../pictures/jpg/hero.jpg";

export const HomepageStyled = styled.div`
  background-image: url(${img});
  width: 320px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 500px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 700px;
  }
`;
