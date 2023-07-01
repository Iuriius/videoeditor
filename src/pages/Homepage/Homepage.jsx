import { HomepageStyled } from "./Homepage.styled";
import { ButtonStyled } from "../../components/Button/Button.styled";

const Homepage = () => {
  return (
    <HomepageStyled>
      <h1>ВАШ ВІДЕОМОНТАЖЕР</h1>
      <br /> <ButtonStyled>ЗАМОВИТИ МОНТАЖ ВІДЕО </ButtonStyled>
    </HomepageStyled>
  );
};
export default Homepage;
