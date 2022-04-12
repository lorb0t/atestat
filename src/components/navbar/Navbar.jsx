import logo from "../../assets/Images/apple.svg";
import globe from "../../assets/Images/globe.svg";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Navbar.scss";

import { Link, animateScroll as scroll } from "react-scroll";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <nav className="navbar-links">
        <div className="navbar-links_logo">
          <h1 onClick={scroll.scrollToTop}>
            <i>Clean Speed</i>
          </h1>
        </div>
        <div className="navbar-links_container">
          {[
            "home",
            "szolgaltatasok",
            "video",
            "about",
            "contact",
            "gallery",
          ].map((item) => (
            <Link
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="navbar-links_globe">
          <img src={globe} alt="globe" />
        </div>

        <div className="navbar-menu">
          <RiMenuLine
            color="#fff"
            size={40}
            onClick={() => setToggleMenu(true)}
            cursor="pointer"
          />
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <RiCloseLine
                color="#fff"
                size={43}
                onClick={() => setToggleMenu(false)}
                className="navbar-menu-close-button"
              />
              <div className="navbar-menu_container-links">
                {[
                  "home",
                  "szolgaltatasok",
                  "video",
                  "about",
                  "contact",
                  "gallery",
                ].map((item) => (
                  <Link
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setToggleMenu(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
