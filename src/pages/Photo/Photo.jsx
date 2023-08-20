import React from "react";
import { PhotoStyled, Mebw, Flexwrapper, H1, H2, H3, Section, Philosopy } from "./Photo.styled";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle.styled";
import { Socials } from "../../components/Whyme/Socials.styled";
import { FaViber } from "react-icons/fa";
import { BsTelegram, BsSkype, BsMessenger, BsInstagram, BsEnvelopeAt } from "react-icons/bs";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
/*
/**|======================================
/**| icons
/**|======================================
*/
import {
  BsFillCameraFill,
  BsCamera2,
  BsFillPersonFill,
  BsCarFront,
  BsFillBuildingsFill,
  BsPeopleFill,
  BsCircleHalf,
  BsPersonWorkspace,
} from "react-icons/bs";
import {
  GiTrophyCup,
  GiTowerBridge,
  GiGemNecklace,
  GiBilledCap,
  GiPerfumeBottle,
  GiWineBottle,
  GiEternalLove,
} from "react-icons/gi";
import {
  MdOutlineBedroomBaby,
  MdEmojiNature,
  MdNaturePeople,
  MdCamera,
  MdCameraRoll,
} from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { AiOutlinePicture } from "react-icons/ai";
import { FaMedal, FaHotel, FaBaby, FaCameraRetro } from "react-icons/fa";
/*
/**|======================================
/**| components
/**|======================================
*/
import { Blackandwhite } from "./Blackandwhite";
import { Children } from "./Children";
import { Nature } from "./Nature";
import { Portraits } from "./Portraits";
import { Reportage } from "./Reportage";
import { Special } from "./Special";
import { Street } from "./Street";
import { Subject } from "./Subject";
import { Forever } from "./Forever";
/*
/**|======================================
/**| images gallery
/**|======================================
*/
const images = [
  {
    original: "/pictures/jpg/silhouette2.jpg",
    thumbnail: "/pictures/jpg/silhouette2.jpg",
  },
  {
    original: "/pictures/jpg/snail.jpg",
    thumbnail: "/pictures/jpg/snail.jpg",
  },
  {
    original: "/pictures/jpg/fog.jpg",
    thumbnail: "/pictures/jpg/fog.jpg",
  },
  {
    original: "/pictures/jpg/cathaypacific.jpg",
    thumbnail: "/pictures/jpg/cathaypacific.jpg",
  },
  {
    original: "/pictures/jpg/castle.jpg",
    thumbnail: "/pictures/jpg/castle.jpg",
  },

  {
    original: "/pictures/jpg/silhouette.jpg",
    thumbnail: "/pictures/jpg/silhouette.jpg",
  },
  {
    original: "/pictures/jpg/air.jpg",
    thumbnail: "/pictures/jpg/air.jpg",
  },
  {
    original: "/pictures/jpg/sunset2.jpg",
    thumbnail: "/pictures/jpg/sunset2.jpg",
  },
  {
    original: "/pictures/jpg/uptown.jpg",
    thumbnail: "/pictures/jpg/uptown.jpg",
  },
  {
    original: "/pictures/jpg/pier.jpg",
    thumbnail: "/pictures/jpg/pier.jpg",
  },
  {
    original: "/pictures/jpg/silhouette3.jpg",
    thumbnail: "/pictures/jpg/silhouette3.jpg",
  },
  {
    original: "/pictures/jpg/ship.jpg",
    thumbnail: "/pictures/jpg/ship.jpg",
  },
  {
    original: "/pictures/jpg/moon.jpg",
    thumbnail: "/pictures/jpg/moon.jpg",
  },
];
/*
/**|======================================
/**| images
/**|======================================
*/
import mebw from "/pictures/jpg/mebw.jpg";

/*
/**|======================================
/**| code
/**|======================================
*/

class MyGallery extends React.Component {
  render() {
    return <ImageGallery autoPlay items={images} />;
  }
}

const Photo = () => {
  return (
    <>
      <PhotoStyled>
        <h1>Фотографія - невід&apos;ємна частина життя!</h1>
        <MyGallery />
        <Flexwrapper>
          <Philosopy>
            <H1>ФІЛОСОФІЯ</H1>
            <H3>
              Зображення завжди для мене були чимось особливим. До того як зацікавитися фотографією
              я довго роздивлявся картинки намагаючись зрозуміти в чому магія надзеленої трави,
              блакитної води чи розмитого фону? Чому знімок має не такий вигляд як ми бачимо своїми
              очами у реальному житті? Намагаючись досягти такого вигляду у своїх початкових роботах
              я зрозумів, що світ фотографії для всіх митців різний. Мої світовідчуття моменту, які
              передані за допомогою камери також є особливими. Саме через це я і фотографую в різних
              стилях, хоча передусім люблю репортажну, портретну та дитячу фотографію.
            </H3>
          </Philosopy>
          <Mebw src={mebw} alt="author" />
        </Flexwrapper>
        <Section>
          <H2>
            <FaMedal />
            &nbsp;
            <BsFillCameraFill />
            &nbsp;
            <GiTrophyCup />
            <br />
            РЕПОРТАЖНА ЗЙОМКА
          </H2>
          <H3>
            Встигнути усюди і бути практично в двох місцях одночасно - ось що таке для мене
            справжній репортаж. Коли фотограф знає де йому бути і в який час щоб не пропустити
            важливий момент який стане ключовим. Посмішка від щойно врученої медалі, отриманої
            грамоти або перепетії змагань чи вдалого фінішу має бути назавжди зупинена в часі аби
            дивлячись на знімок в думках повертатися до цього щасливого моменту знов і знов.
          </H3>
          <Reportage />
        </Section>

        <Section>
          <H2>
            <BsCarFront />
            &nbsp;
            <FaHotel />
            &nbsp;
            <GiWineBottle />
            <br />
            SPECIAL
          </H2>
          <H3>
            Спеціальні комерційні сесії для друку постерів, флаєрів та інших презентаційних
            матеріалів узгоджених із замовником які відповідають брендбуку вимагають поглибленого
            розуміння теми, мети та фінального результату. Увага до деталей в таких проєктах для
            мене найвищий пріоритет.
          </H3>
          <Special />
        </Section>

        <Section>
          <H2>
            <BsFillPersonFill />
            &nbsp;
            <SiAdobephotoshop />
            &nbsp;
            <BsCamera2 />
            <br />
            ПОРТРЕТНА ФОТОГРАФІЯ
          </H2>
          <H3>
            Портрет це не лише одяг, світло чи макіяж. Це передусім глибинні знання програмного
            забезпечення для обробки та ретушування аби обличчя мало природній вигляд і не
            перетворювалюся на пластикову маску. Сучасні системи згладжування шкіри хороші лише для
            швидких фото у соцмережах. Якщо Ваш портрет має бути особливим без спеціальної обробки
            просто не обійтися. Один раз побачивши різницю між професійно обробленим фото та штучним
            інтелектом Ви ніколи не повернетися до слайдеру згладжування шкіри у вашому телефоні.
          </H3>
          <Portraits />
        </Section>
        <Section>
          <H2>
            <TbMoodKid />
            &nbsp;
            <FaBaby />
            &nbsp;
            <MdOutlineBedroomBaby />
            <br />
            ДИТЯЧА ФОТОГРАФІЯ
          </H2>
          <H3>
            Кажуть, що фотографувати дітей дуже складно через їх рухливість, непосидючість та
            непередбачуваність. Особливо коли зйомка відбувається у приміщенні де недостатньо
            світла, адже не всі фотографи мають у розпорядженні дороговартісну оптику і досконально
            знають налаштування камери. Це дійсно складно, але в той же час і цікаво, адже емоції
            які дарують діти завжди лише справжні.
          </H3>
          <Children />
        </Section>
        <Section>
          <H2>
            <BsFillBuildingsFill />
            &nbsp;
            <GiTowerBridge />
            &nbsp;
            <BsPeopleFill />
            <br />
            СТРІТ ФОТОГРАФІЯ
          </H2>
          <H3>
            Стріт фотографія для мене ніколи не втрачає актуальності. Це можливість передати
            сучасних людей у часі.
          </H3>
          <Street />
        </Section>
        <Section>
          <H2>
            <GiGemNecklace />
            &nbsp;
            <GiPerfumeBottle />
            &nbsp;
            <GiBilledCap />
            <br />
            ПРЕДМЕТКА
          </H2>
          <H3>
            Предметна фотографія вимагає особливого підходу, адже формування єдиного стилю є не менш
            важливим, ніж самі об&apos;єкти зйомки. Ляльки, аксесуари чи їжа все це потребує
            найвищої уваги до кольорів і деталей.
          </H3>
          <Subject />
        </Section>
        <Section>
          <H2>
            <MdNaturePeople />
            &nbsp;
            <AiOutlinePicture />
            &nbsp;
            <MdEmojiNature />
            <br />
            ПРИРОДА
          </H2>
          <H3>
            Фотографування пейзажів та тварин для мене особливе хоббі. Я ніколи не вирушаю в подорож
            без камери. Тому що краса завжди поруч з нами, варто лише побачити її.
          </H3>
          <Nature />
        </Section>

        <Section>
          <H2>
            <MdCamera />
            &nbsp;
            <FaCameraRetro />
            &nbsp;
            <BsCircleHalf />
            <br />
            BLACK AND WHITE
          </H2>
          <H3>
            Коли важливі деталі та емоції, інколи колір навіть заважає та відволікає. Передати
            напівтони на фотографіях без кольору дуже складна технічна задача. Просте накладання
            чорно-білого фільтру на фотографію з телефону ніколи не зрівняється з фоторафією
            зробленою сучасною повнорозмірною камерою з великим динамічним діапазоном. Фізичні
            розміри сенсору професійної камери у поєднанні з можливостями пост-обробки назавжди
            змінять Ваше відношення до ЧБ. Готові експерементувати?
          </H3>
          <Blackandwhite />
        </Section>

        <Section>
          <H2>
            <GiEternalLove />
            &nbsp;
            <BsPersonWorkspace />
            &nbsp;
            <MdCameraRoll />
            <br />
            КРАСА ТА СПОГАДИ
          </H2>
          <H3>
            Гарна фотографія це те до чого Ви завжи певернетеся. З плином часу з пам&apos;яті
            зітруться дрібниці і деталі, а знімок залишиться з Вами назавжди.
          </H3>
          <Forever />
        </Section>

        <SectionTitle style={{ color: "lavender" }}>ЦІНИ:</SectionTitle>
        <H3>
          Орієнтовна ціна за годину зйомок: <span style={{ color: "lavender" }}> 1,500 UAH </span>.{" "}
          <br />
          <br />В ціну не включено: <br /> 📸 Оренда студії
          <br />~<span style={{ color: "lavender" }}> 1,000 UAH/год. </span>.
          <br />
          💇‍♀️💄💅 Послуги візажиста
          <br />~<span style={{ color: "lavender" }}> 1,000 UAH </span>.
          <br />
          <br />
          ✅Термін виконання робіт: <span style={{ color: "lavender" }}> 2-3 дні </span>.
        </H3>
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
      </PhotoStyled>
    </>
  );
};

export default Photo;
