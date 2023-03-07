import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  z-index: 12;
  position: sticky;
  top: 0px;
  justify-content: flex-start;
  margin-left: 65px;
  text-align: center;
`;

export const NavLink = styled(Link)`
  color: #bcffe3;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ff4d4d;
    border-bottom: #228b22 solid 5px;
    background: #99daf39e;
    border-radius: 10px;
    font-size: 20px;
    font-family: Georgia, serif;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  text-align: center;

  @media screen and (max-width: 320px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 320px) {
    display: none;
  }
`;
