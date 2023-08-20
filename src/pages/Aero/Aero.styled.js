import styled from "@emotion/styled";

export const AeroStyled = styled.div`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

export const H3 = styled.h3`
  color: lavender;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1300px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

import img1 from "/pictures/jpg/drone1.jpg";
export const Drone1 = styled.div`
  margin: 0 auto;
  background-image: url(${img1});
  width: 300px;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 400px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 500px;
  }
`;

import img2 from "/pictures/jpg/drone2.jpg";
export const Drone2 = styled.div`
  margin: 0 auto;
  background-image: url(${img2});
  width: 300px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 500px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 600px;
  }
`;

import img3 from "/pictures/jpg/drone3.jpg";
export const Drone3 = styled.div`
  margin: 0 auto;
  background-image: url(${img3});
  width: 300px;
  height: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 400px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 500px;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio, adjust as needed */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

import whitebg from "/pictures/png/whitebggrid.png";
export const WeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-image: url(${whitebg});
  background-size: cover;
`;
