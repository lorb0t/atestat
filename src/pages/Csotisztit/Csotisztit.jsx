import React from 'react'
import "../LearnMore.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img3 from "../../assets/Images_for_web/frez11.jpeg";
import img1 from "../../assets/Images_for_web/frez22.jpeg";
import img2 from "../../assets/Images_for_web/frez33.jpeg";



const Csotisztit = () => {
      
  const { t, i18n } = useTranslation();
  const vid_size = "400px";

  const language = () => {
    if ("hu" === i18n.language) return true;
    else return false;
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("ran");
      return window.scrollTo(0, 0);
    }, 1000);
  });


  return (
    <div className="dugulas-main">
      <div className="dugulas-text">
        <div className="dugulas-imgs">
          <img src={img1} alt="" />
          <img src={img3} alt="" className="dugulas-img2" />
          <img src={img2} alt="" />
        </div>
        <div className="text-text">
          <h1>{t("frezah")}</h1>
          {language() ? (
            <>
              <p>{t("freza")}</p>
              <h3>{t("freza1")}</h3>
              <ul>
                <li>{t("freza2")}</li>
                <li>{t("freza3")}</li>
                <li>{t("freza4")}</li>
                <li>{t("freza5")}</li>
              </ul>
            </>
          ) : (
            <>
              <h3>{t("freza6")}</h3>
              <ul>
                <li>{t("freza7")}</li>
                <li>{t("freza8")}</li>
                <li>{t("freza9")}</li>
                <li>{t("freza10")}</li>
              </ul>
              
            </>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default Csotisztit;
