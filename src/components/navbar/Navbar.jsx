import globe from "../../assets/Images_for_web/globe.svg";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Navbar.scss";

import { Link as Link1 } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
// import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = ({ showModal, setShowModal }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Modal_toggle = () => {
    if (showModal) {
      setShowModal(false);
    } else setShowModal(true);
  };

  return (
    <>
      <div className="navbar">
        <nav className="navbar-links">
          <div className="navbar-links_logo">
            <Link1 to="/">
              <h1 onClick={scroll.scrollToTop}>
                <i>Clean Speed</i>
              </h1>
            </Link1>
          </div>
          <div className="navbar-links_container">
            {[
              "home",
              "szolgaltatasok",
              "about",
              "video",
              "contact",
              "gallery",
            ].map((item) => (
              <Link
                activeClass="active"
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-118}
                duration={500}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="navbar-links_globe">
            <img src={globe} alt="globe" onClick={Modal_toggle} />
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
                    "about",
                    "video",
                    "contact",
                    "gallery",
                  ].map((item) => (
                    <Link
                      activeClass="active"
                      to={item}
                      key={item}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => setToggleMenu(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  {/* FIXME: MAP HASZNALATA A NEVES NYELVES CUCC HASZNALATA AMIKOR MAS NYELV VAN HOGY TUDD HASZNALNI */}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
