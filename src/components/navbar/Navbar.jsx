import logo from "../../assets/Images/apple.svg";
import globe from "../../assets/Images/globe.svg";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">
        <p>Home</p>
      </a>
    </p>
    <p>
      <a href="#about">
        <p>About</p>
      </a>
    </p>
    <p>
      <a href="#video">
        <p>Video</p>
      </a>
    </p>
    <p>
      <a href="#gallery">
        <p>Gallery</p>
      </a>
    </p>
    <p>
      <a href="#contact">
        <p>Contact</p>
      </a>
    </p>
  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
        <div className="navbar-links_globe">
          <img src={globe} alt="globe" />
        </div>

        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenuLine color="#fff" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
