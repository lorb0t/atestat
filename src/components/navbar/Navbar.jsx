import globe from "../../assets/Images_for_web/globe.svg";
import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Navbar.scss";

import { Link as Link1 } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

export const Navbar = ({ showModal, setShowModal }) => {
  const { t, i18n } = useTranslation();

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
              { name: t("home"), id: "home" },
              { name: t("about"), id: "about" },
              { name: t("szolgaltatasok"), id: "szolgaltatasok" },
              { name: t("video"), id: "video" },
              { name: t("gallery"), id: "gallery" },
              { name: t("contact"), id: "contact" },
            ].map((item) => (
              <Link
                activeClass="active"
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-118}
                duration={500}
              >
                {item.name}
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
                    { name: t("home"), id: "home" },
                    { name: t("about"), id: "about" },
                    { name: t("szolgaltatasok"), id: "szolgaltatasok" },
                    { name: t("video"), id: "video" },
                    { name: t("gallery"), id: "gallery" },
                    { name: t("contact"), id: "contact" },
                  ].map((item) => (
                    <Link
                      activeClass="active"
                      to={item.id}
                      key={item.id}
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={500}
                      onClick={() => setToggleMenu(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
