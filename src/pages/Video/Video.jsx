import { VideoStyled } from "./Video.styled";
import { VideoContainer } from "../Aero/Aero.styled";
import ReactPlayer from "react-player/youtube";
import { H2, H3, Section } from "../Photo/Photo.styled";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle.styled";
import { Socials } from "../../components/Whyme/Socials.styled";
import { FaViber } from "react-icons/fa";
import { BsTelegram, BsSkype, BsMessenger, BsInstagram, BsEnvelopeAt } from "react-icons/bs";

const Video = () => {
  return (
    <VideoStyled>
      <Section>
        <H2>ЗАВЖДИ МРІЯЛИ ПРО КЛІП? ДОСИТЬ МРІЯТИ!</H2>
        <H3>Реалізуйте свою креативність з нами!</H3>
        <VideoContainer>
          <ReactPlayer url="https://youtu.be/gZSEDnbtqiQ" />
        </VideoContainer>
      </Section>

      <Section>
        <H2>БЮДЖЕТНИЙ СЕГМЕНТ - НАША СПЕЦІАЛІЗАЦІЯ!</H2>
        <H3>
          Соціальна сфера також потребує медійної підтримки в соцмережах. Ми допоможемо прийняти
          оптимальне рішення якщо на проекті обмежений бюджет!
        </H3>
      </Section>
      <VideoContainer>
        <ReactPlayer url="https://youtu.be/aPjkSLdEPzQ" />
      </VideoContainer>

      <Section>
        <H2>PROMO VIDEO</H2>
        <H3>
          Як за 1 хвилину показати промо Вашої компанії? Досить легко якщо є ідея, бажання та
          мотивація зробити бізнес успішним.
        </H3>
      </Section>
      <VideoContainer>
        <ReactPlayer url="https://youtu.be/KAu8cMUC_H0" />
      </VideoContainer>

      <Section>
        <H2>YouTube ПІДТРИМКА</H2>
        <H3>
          Допоможемо Вам з розвитком каналу, аби Ваші відео поступово примножували Ваш особистий
          бренд.
        </H3>
      </Section>
      <VideoContainer>
        <ReactPlayer url="https://youtu.be/HMBDl25Jf8k" />
      </VideoContainer>

      <Section>
        <H2>РЕКЛАМА ЧИ КІНО?</H2>
        <H3>Креативне поєднання та неймовірний результат!</H3>
      </Section>
      <VideoContainer>
        <ReactPlayer url="https://youtu.be/jyYA9y9Gfw4" />
      </VideoContainer>

      <SectionTitle style={{ color: "lavender" }}>ЦІНИ:</SectionTitle>
      <H3>
        🎬🎥🖤
        <br />
        Монтаж години відзнятого матеріалу:
        <br />~ <span style={{ color: "lavender" }}> 555 UAH </span>.
        <br />
        Погодинна зйомка:
        <br />~<span style={{ color: "lavender" }}> 333 UAH </span>.
        <br />
        Двокамерна зйомка:
        <br />~<span style={{ color: "lavender" }}> 777 UAH </span>.
        <br />
        Оплата за зміну роботи відеооператора (8 годин)
        <br />~<span style={{ color: "lavender" }}> 2222 UAH </span>.
        <br />
        Оплата за зміну роботи пари операторів (8 годин)
        <br />~<span style={{ color: "lavender" }}> 3333 UAH </span>.
        <br />
        <br />
        ✅Термін виконання робіт: <span style={{ color: "lavender" }}> до 5 днів </span>.
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
    </VideoStyled>
  );
};
export default Video;
