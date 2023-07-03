import styled from "@emotion/styled";
import img from "../../pictures/jpg/hero.jpg";

export const Hero = styled.div`
  margin: 0 auto;
  background-image: url(${img});
  width: 320px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  color: white;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 350px;
    justify-content: flex-start;
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 600px;
    padding-bottom: 7rem;
    flex-direction: column-reverse;
  }
`;
