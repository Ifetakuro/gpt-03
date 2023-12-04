import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import NavbarMenu from "./NavbarMenu";
import NavbarAuth from "./NavbarAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname === "/";

  return (
    <div className="navbar gradient__bg">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        </div>
        <div className="navbar-links_container">{path && <NavbarMenu />}</div>
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
            {path && (
              <div className="navbar-menu-links">
                <NavbarMenu handleClose={() => setToggleMenu(false)} />
              </div>
            )}
            <div
              className="navbar-menu-sign"
              onClick={() => setToggleMenu(false)}
            >
              <NavbarAuth />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
