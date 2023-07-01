import { HeaderStyled } from "./Header.styled";
import { StyledLink } from "./Header.styled";
import { Link } from "react-router-dom";
import Logo from "../../pictures/png/logo.png";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <img src={Logo} alt="logo" width="28" />
        </Link>
        <nav className="navigation">
          <StyledLink to="/" end>
            Головна
          </StyledLink>
          <StyledLink to="/photo">ФОТО</StyledLink>
          <StyledLink to="/video">ВІДЕО</StyledLink>
          <StyledLink to="/aero">АЕРОЗЙОМКА</StyledLink>
          <StyledLink to="/contact">ЗАМОВИТИ</StyledLink>
        </nav>
      </HeaderStyled>
    </>
  );
};
