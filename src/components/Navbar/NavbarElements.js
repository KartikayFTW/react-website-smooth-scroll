import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: #000;
  height: 8rem;
  /* margin-top: -8rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 60em) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  max-width: 110rem;
  padding: 0 2.4rem;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and(max-width: 47.5em) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -2.2rem;
  @media screen and(max-width: 47.5em) {
    display: none;
  }
`;

export const NavItem = styled(LinkS)``;
