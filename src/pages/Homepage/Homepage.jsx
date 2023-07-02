import { Hero } from "./Hero.styled";
import { ButtonStyled } from "../../components/Button/Button.styled";
import { Whyme } from "../../components/Whyme/Whyme.styled";
import { Benefit } from "../../components/Benefits/Bensdefit.styled";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle.styled";
/*
/**|======================================
/**| react icons
/**|======================================
*/
import { BsFill7SquareFill } from "react-icons/bs";
import { BsFillBadge4KFill } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsCloudCheck } from "react-icons/bs";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
/*
/**|======================================
/**| images
/**|======================================
*/
import partners from "../../pictures/jpg/partners.jpg";

const Homepage = () => {
  return (
    <>
      <Hero>
        <h1>ВАШ ВІДЕОМОНТАЖЕР</h1>
        <br /> <ButtonStyled>ЗАМОВИТИ МОНТАЖ ВІДЕО </ButtonStyled>
      </Hero>
      <Whyme>
        <Benefit>
          <BsFill7SquareFill size="4rem" />
          <h2>років досвіду</h2>
        </Benefit>
        <Benefit>
          <BsFillBadge4KFill size="4rem" />
          <h2>якість UHD</h2>
        </Benefit>
        <Benefit>
          <BsFillCalendar2CheckFill size="4rem" />
          <h2>завжди вчасно</h2>
        </Benefit>
      </Whyme>
      <Whyme>
        {" "}
        <Benefit>
          <BsGlobe2 size="4rem" />
          <h2>закордонні клієнти</h2>
        </Benefit>
        <Benefit>
          <BsCloudCheck size="4rem" />
          <h2>віддалено</h2>
        </Benefit>
        <Benefit>
          <BsFillEmojiHeartEyesFill size="4rem" />
          <h2>відмінний результат</h2>
        </Benefit>
      </Whyme>
      <SectionTitle>МЕНІ ДОВІРЯЮТЬ:</SectionTitle>
      <img src={partners} alt="partners" width="1300px" />
    </>
  );
};
export default Homepage;
