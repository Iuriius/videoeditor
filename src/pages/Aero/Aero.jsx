import {
  AeroStyled,
  Drone1,
  Drone2,
  Drone3,
  H3,
  VideoContainer,
  WeatherWrapper,
} from "./Aero.styled";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle.styled";
import { Socials } from "../../components/Whyme/Socials.styled";
import { WeatherWidget } from "../../components/Weather/Weather";
/*
/**|======================================
/**| icons
/**|======================================
*/
import { FaViber } from "react-icons/fa";
import { BsTelegram, BsSkype, BsMessenger, BsInstagram, BsEnvelopeAt } from "react-icons/bs";
/*
/**|======================================
/**| Youtube
/**|======================================
*/
import ReactPlayer from "react-player/youtube";
/*
/**|======================================
/**| code
/**|======================================
*/
const Aero = () => {
  return (
    <AeroStyled>
      <h1>АЕРОЗЙОМКА</h1>
      <H3>
        Накращий спосіб показати земельну ділянку, будинок або об&apos;єкт на продаж це показати
        його з повітря додавши до відео моушн графіку та інформаційні титри.
      </H3>
      <Drone1 />
      <H3>
        Маючи досвід пілотування, відеомонтажу та моушн-дизайну така комплексна
        <span style={{ color: "rebeccapurple" }}> робота буде виконана одним спеціалістом </span>
        швидко і &quot;під ключ&quot;.
      </H3>
      <Drone2 />
      <H3>
        Відеозйомка об&apos;єктів з повітря здійснюється
        <span style={{ color: "rebeccapurple" }}> надлегким дроном </span> який важить менше, ніж
        <span style={{ color: "rebeccapurple" }}> чверть кілограма</span>. Такі дрони не потребують
        додаткових дозволів для польотів у не заборонених місцях у мирний час.
      </H3>
      <Drone3 />
      <H3>
        Будь-ласка <span style={{ color: "rebeccapurple" }}> перевіряйте погоду </span> для
        планування зйомок адже сильний поривчастий вітер, дощ або сніг не сприятиме польотам.
      </H3>
      <WeatherWrapper>
        <WeatherWidget />
      </WeatherWrapper>
      <SectionTitle>
        АЕРОЗЙОМКА
        <br />
        Боричів Острів
      </SectionTitle>
      <VideoContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=2_ey3669EMI" />
      </VideoContainer>

      <SectionTitle>
        ЗЕМЕЛЬНА ДІЛЯНКА
        <br />
        МЕЖИГІР&apos;Я
      </SectionTitle>
      <VideoContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=cFZdtxTqRPg" />
      </VideoContainer>

      <SectionTitle>ЦІНИ:</SectionTitle>
      <H3>
        Орієнтовна ціна за пів години польотів стартує від -{" "}
        <span style={{ color: "rebeccapurple" }}> 2,000 UAH </span>. <br />В ціну включено
        стандартний монтаж і титри, але не включено трекові елементи моушн-дизайну і витрати на
        паливо. Ці питання узгоджуються з замовником додатково.
      </H3>

      <SectionTitle>НАПИШІТЬ МЕНІ ЩОБ ДІЗНАТИСЯ ДЕТАЛІ:</SectionTitle>
      <Socials>
        <a target="_blank" rel="noreferrer" href="https://t.me/iuriius">
          <BsTelegram size="4rem" />
        </a>
        <a target="_blank" rel="noreferrer" href="viber://chat?number=380733216072">
          <FaViber size="4rem" />
        </a>
        <a target="_blank" rel="noreferrer" href="skype:allotrius?chat">
          <BsSkype size="4rem" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/allotrius/">
          <BsInstagram size="4rem" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://m.me/iurii.kyrychenko">
          <BsMessenger size="4rem" />
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:iuriius@gmail.com">
          <BsEnvelopeAt size="4rem" />
        </a>
      </Socials>
    </AeroStyled>
  );
};
export default Aero;
