import { HeaderStyled } from "./Header.styled";
import { StyledLink } from "./Header.styled";
import { Link } from "react-router-dom";
import Logo from "/pictures/png/logo.png";

import PropTypes from "prop-types";
import Hamburger from "hamburger-react";
import { useState } from "react";

const MobileMenu = ({ setOpen }) => {
  return (
    <nav className="mobmenu">
      <Link to="/photo" onClick={() => setOpen(false)}>
        <h3>ФОТОСЕСІЇ</h3>
      </Link>
      <Link to="/video" onClick={() => setOpen(false)}>
        <h3>ЗЙОМКА КЛІПІВ</h3>
      </Link>
      <Link to="/aero" onClick={() => setOpen(false)}>
        <h3>АЕРОЗЙОМКА</h3>
      </Link>
      <Link to="/contact" onClick={() => setOpen(false)}>
        <h3>ЗАМОВИТИ</h3>
      </Link>
      <Link to="/" onClick={() => setOpen(false)}>
        <h3>ПОВЕРНУТИСЯ НАЗАД</h3>
      </Link>
    </nav>
  );
};

MobileMenu.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <img className="glow" src={Logo} alt="logo" width="28" />
        </Link>
        <nav className="navigation">
          <StyledLink to="/" end>
            Головна
          </StyledLink>
          <StyledLink to="/photo">ФОТО</StyledLink>
          <StyledLink to="/video">ВІДЕО</StyledLink>
          <StyledLink to="/aero">АЕРОЗЙОМКА</StyledLink>
          <StyledLink to="/contact">ЗАМОВИТИ</StyledLink>
          <Hamburger
            label="Show menu"
            direction="right"
            color="DimGray"
            toggled={isOpen}
            toggle={setOpen}
          />
        </nav>
      </HeaderStyled>
      <div className={`slide-menu ${isOpen ? "open" : ""}`}>
        <MobileMenu setOpen={setOpen} />
      </div>
    </>
  );
};
