import React from "react";
import "./About.scss";

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
          <div className="facebook"></div>
        </div>
      </div>
    </div>
  );
};
