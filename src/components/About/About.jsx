import React from "react";
import "./About.scss";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="about_main">
      <div className="about-content">
        <div className="about-text">
          <h1>{t("about_title")}</h1>
          <p>{t("about_text")}</p>
        </div>
        <div className="about-follow">
          <div className="youtube">
            <a href="https://www.youtube.com/channel/UC7KuMghyQNg_DxCmq57Pw5A/featured">
              <FontAwesomeIcon icon={faYoutube} className="to-you" />
            </a>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com/CleanSpeedSRL">
              <FontAwesomeIcon icon={faFacebook} className="to-face" />
            </a>
          </div>
          <div className="instagram">
            <a href="#" id="linening">
              <FontAwesomeIcon icon={faInstagram} className="to-insta" />
            </a>
          </div>
          {/* TODO: rakd be a hulye linkeket */}
        </div>
      </div>
    </div>
  );
};
