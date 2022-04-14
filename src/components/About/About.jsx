import React from "react";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="about_main">
      <div className="about-content">
        <div className="about-text">
          <h1>Rólunk</h1>
          <p>
            Cégünk 2007- ben kezdte el tevékenységét, duguláselhárítás és
            lefolyóvezetékek karbantartása aktivitással Marosvásárhelyen. Az
            évek során szerzett tapasztalat, valamint a performens gépeink
            együttesével hatékonyan végezzük el klienseink kérésére a ránk
            bízott feladatokat. Ma már teljeskörű szolgáltatást biztosítunk
            ügyfeleinknek csatornarendszer hibaelhárításában, valamint
            vízcsőtörés bemérésben.
          </p>
        </div>
        <div className="about-follow">
          <div className="youtube">
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="to-you" />
            </a>
          </div>
          <div className="facebook">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="to-face" />
            </a>
          </div>
          <div className="instagram">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="to-insta" />
            </a>
          </div>
          {/* TODO: rakd be a hulye linkeket */}
        </div>
      </div>
    </div>
  );
};
