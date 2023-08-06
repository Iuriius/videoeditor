import styled from "@emotion/styled";
import img from "/pictures/jpg/partners.jpg";

export const Partners = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 180px;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 432px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 732px;
  }
`;
