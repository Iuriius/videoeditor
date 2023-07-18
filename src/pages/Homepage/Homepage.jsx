import { Hero } from "./Hero.styled";
import { ButtonStyled } from "../../components/Button/Button.styled";
import { Whyme } from "../../components/Whyme/Whyme.styled";
import { Howto } from "../../components/Whyme/Howto.styled";
import { Socials } from "../../components/Whyme/Socials.styled";
import { Benefit } from "../../components/Benefits/Benefit.styled";
import { BenefitHowto } from "../../components/Benefits/BenefitHowto.styled";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle.styled";
import { Partners } from "./Partners.styled";
import { Link } from "react-router-dom";
import { Showreel } from "../../components/YouTube/Showreel";
/*
/**|======================================
/**| react icons
/**|======================================
*/
import { BsFill7SquareFill } from "react-icons/bs";
import { BsFillBadge4KFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsCloudCheck } from "react-icons/bs";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BsFillSendCheckFill } from "react-icons/bs";
// import { BsChevronDoubleRight } from "react-icons/bs";
/*
/**|======================================
/**| social contacts
/**|======================================
*/
import { BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
/*
/**|======================================
/**| import img
/**|======================================
*/
import photo from "../../pictures/jpg/photosession.jpg";
import clip from "../../pictures/jpg/videoclip.jpg";
import aero from "../../pictures/jpg/aerovideo.jpg";
/*
/**|======================================
/**| Code
/**|======================================
*/
const videoId = "Xw3j7-1b8ig";

const Homepage = () => {
  return (
    <>
      <Hero>
        <h1>ВАШ ВІДЕОМОНТАЖЕР</h1>
        <br /> <ButtonStyled>ЗАМОВИТИ МОНТАЖ ВІДЕО </ButtonStyled>
      </Hero>

      <h2 style={{ color: "white", width: "90%", margin: "0 auto", padding: "3rem 0 3rem 0" }}>
        Бажаєте створити гарне відео, але немає часу на вивчення професійного програмного
        забезпечення? Безкоштовні онлайн інструменти пропонують простоту в креативності, але
        результати виглядають шаблонно?
        <br />
        <br />
        Довіртеся професіоналу, який створить ролик з Ваших матеріалів враховуючи саме Ваші потреби.
        Обговоріть зі мною деталі технічного завдання, надайте вихідні матеріали і отримайте
        гарантований фінальний результат!
      </h2>

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
          <BsClock size="4rem" />
          <h2>завжди вчасно</h2>
        </Benefit>
      </Whyme>
      <Whyme>
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

      <Showreel videoId={videoId} />

      <SectionTitle>МЕНІ ДОВІРЯЮТЬ:</SectionTitle>
      <Partners />

      <SectionTitle>ЯК ПОЧАТИ?</SectionTitle>
      <Howto>
        <BenefitHowto>
          <BsFillLightbulbFill size="4rem" />
          <h2>Мати ідею</h2>
        </BenefitHowto>
        <BenefitHowto>
          <BsFillClipboardCheckFill size="4rem" />
          <h2>Заповнити форму</h2>
        </BenefitHowto>
        <BenefitHowto>
          <BsFillSendCheckFill size="4rem" />
          <h2>Відправити анкету</h2>
        </BenefitHowto>
      </Howto>

      <SectionTitle>ОБИРАЙТЕ ТАКОЖ ПОСЛУГИ:</SectionTitle>
      <Whyme>
        <Benefit>
          <Link to="/photo">
            <img className="glow" src={photo} alt="photo" width="320px" />
            <h2>ФОТОСЕСІЇ</h2>
          </Link>
        </Benefit>
        <Benefit>
          <Link to="/video">
            <img className="glow" src={clip} alt="clip" width="320px" />
            <h2>ЗЙОМКА КЛІПІВ</h2>
          </Link>
        </Benefit>
        <Benefit>
          <Link to="/aero">
            <img className="glow" src={aero} alt="aero" width="320px" />
            <h2>АЕРОЗЙОМКА</h2>
          </Link>
        </Benefit>
      </Whyme>

      <SectionTitle>НАПИШІТЬ МЕНІ ЩОБ ДІЗНАТИСЯ ДЕТАЛІ:</SectionTitle>
      <Socials>
        <a href="https://t.me/iuriius">
          <BsTelegram size="4rem" />
        </a>
        <a href="viber://chat?number=380733216072">
          <FaViber size="4rem" />
        </a>
        <a href="skype:allotrius?chat">
          <BsSkype size="4rem" />
        </a>
        <a href="https://www.instagram.com/allotrius/">
          <BsInstagram size="4rem" />
        </a>
        <a href="https://m.me/iurii.kyrychenko">
          <BsMessenger size="4rem" />
        </a>
        <a href="mailto:iuriius@gmail.com">
          <BsEnvelopeAt size="4rem" />
        </a>
      </Socials>
    </>
  );
};
export default Homepage;
