import { useInView } from "react-intersection-observer";

import "./Footer.scss";
import logo from "../../assets/Images/company_logo.png";
import "../../assets/Animations/logo_woble.css";

import { Link } from "react-scroll";

import { animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="footer">
      <div className="footer_heading-main">
        <div className="footer-heading">
          <div className="footer-heading-name">
            <h1> S.C. CLEAN SPEED S.R.L.</h1>
            <br />
            <h3>Fuss gyorsan kisbeka!</h3>
            {/* TODO: kell egy motto */}
          </div>
          <div className="vertical_line"></div>
          <div className="footer-heading-explore">
            <p style={{ color: "white" }}>Explore</p>
            <div className="footer_services">
              {["szolgaltatasok", "about", "video", "contact", "gallery"].map(
                (item) => (
                  <Link
                    activeClass="active"
                    key={item}
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="vertical_line"></div>
          <div className="footer-heading-contact">
            <ul>
              <li style={{ color: "white" }}>Contact</li>
              <li>
                <a
                  href="https://www.google.ro/maps/place/CLEAN+SPEED/@46.5273753,24.5473672,17z/data=!3m1!4b1!4m5!3m4!1s0x474bb7bf659dc3b3:0xe7b01ffe900ad63b!8m2!3d46.5273664!4d24.5495363?hl=ro"
                  className="usable_links"
                >
                  Targu-Mures, Str. Bogatei nr. 21.
                </a>
              </li>
              <li>
                Tel:{" "}
                <a href="tel:+40744.395.333" className="usable_links">
                  +40744.395.333
                </a>
              </li>
              <li>
                Fax:{" "}
                <a href="fax:+40365.430.415" className="usable_links">
                  +40365.430.415
                </a>
              </li>
              <li>
                E-mail:{" "}
                <a href="mailto:info@cleanspeed.ro" className="usable_links">
                  info@cleanspeed.ro
                </a>
              </li>
            </ul>
          </div>
          <div className="vertical_line"></div>
          <div className="footer-heading-follow">
            <ul>
              <li style={{ color: "white" }}>Follow</li>
              <li>
                <a href="#facebook" className="usable_links">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#insta" className="usable_links">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#youtube" className="usable_links">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="vertical_line"></div>
          <div className="footer-heading-legal">
            <ul>
              <li style={{ color: "white" }}>Legal</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div
            className={`footer-heading-img ${
              inView ? "wobble-hor-bottom" : ""
            }`}
          >
            <img src={logo} alt="logo" ref={ref} />
            {/* TODO: csak akkor jojjon be a cucc mikor odagorgetunk */}
          </div>
        </div>
      </div>

      <div className="footer-design-main">
        <div className="footer-design">
          <p className="footer-design-para">
            <span
              style={{ color: "white", cursor: "pointer" }}
              onClick={scroll.scrollToTop}
            >
              © 2022 Clean Speed&nbsp;&nbsp;&nbsp;
            </span>
            Created by:{" "}
            <span>
              <a href="https://github.com/progenor">
                <span className="inLine">progenor</span>
              </a>
            </span>{" "}
            &{" "}
            <span>
              <a href="https://www.google.com/">
                <span className="inLine">lorbot</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
