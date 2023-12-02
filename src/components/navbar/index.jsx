import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import NavbarMenu from "./NavbarMenu";
import NavbarAuth from "./NavbarAuth";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links_container">
          <NavbarMenu />
        </div>
      </div>
      <div className="navbar-sign">
        <NavbarAuth />
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-links">
              <NavbarMenu />
            </div>
            <div className="navbar-menu-sign">
              <NavbarAuth />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
