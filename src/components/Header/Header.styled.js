import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  padding: 1rem;
  padding-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a0a;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 1rem;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  color: darkslateblue;
  transition: color 150ms ease-in-out;
  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    font-weight: bold;
    color: orange;
  }
`;
