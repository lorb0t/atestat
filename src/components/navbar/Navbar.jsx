import logo from "../../assets/Images/apple.svg";
import globe from "../../assets/Images/globe.svg";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import { grey } from "@mui/material/colors";
// import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">
        <p>Home</p>
      </a>
    </p>
    <p>
      <a href="#about">
        <p>Szolgaltatasok</p>
      </a>
    </p>
    <p>
      <a href="#video">
        <p>Video</p>
      </a>
    </p>
    <p>
      <a href="#gallery">
        <p>About</p>
      </a>
    </p>
    <p>
      <a href="#contact">
        <p>Contact</p>
      </a>
    </p>
    <p>
      <a href="#contact">
        <p>Gallery</p>
      </a>
    </p>
  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const globe_primary = grey[500];

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h1>
            <i>Clean Speed</i>
          </h1>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
        <div className="navbar-links_globe">
          <img src={globe} alt="globe" />
        </div>

        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              color="#fff"
              size={30}
              onClick={() => setToggleMenu(true)}
            />
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
