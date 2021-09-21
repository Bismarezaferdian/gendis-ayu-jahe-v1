import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Navmenu } from "../../data/DataNavbar";
import { animateScroll as scroll } from "react-scroll";
import {
  BtnLinks,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavBarElement";

const Navbar = ({ togle }) => {
  const [navscroll, setNavscroll] = useState(false);

  const ChangeNav = () => {
    if (window.scrollY >= 80) {
      setNavscroll(true);
    } else {
      setNavscroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);
  }, []);

  const togleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav navscroll={navscroll}>
        <NavbarContainer>
          <NavLogo to="/" onClick={togleHome}>
            Gendis Ayu Jahe
          </NavLogo>
          <MobileIcon onClick={togle} navscroll={navscroll}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {Navmenu.map((item, index) => (
              <NavItem key={index}>
                <NavLinks
                  navscroll={navscroll}
                  to={item.link}
                  smooth={true}
                  duration={800}
                  offset={-20}
                  spy={true}
                >
                  {" "}
                  {item.title}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <BtnLinks to=""></BtnLinks>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
