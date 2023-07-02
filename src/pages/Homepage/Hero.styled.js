import styled from "@emotion/styled";
import img from "../../pictures/jpg/hero.jpg";

export const Hero = styled.div`
  background-image: url(${img});
  width: 320px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  padding-bottom: 7rem;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 300px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 600px;
  }
`;
