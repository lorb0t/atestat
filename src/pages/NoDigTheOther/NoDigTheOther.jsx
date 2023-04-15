import React from 'react'
import "../LearnMore.scss";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img3_m from "../../assets/Images_for_web/before-after-icon_white_magyar.png";
import img3_r from "../../assets/Images_for_web/before-after-icon_white_roman.png";
import img1 from "../../assets/Images_for_web/ken1.jpeg";
import img2 from "../../assets/Images_for_web/ken2.jpeg";
import img3_mf from "../../assets/Images_for_web/before-after-icon_white_magyar_fuggoleges.png";
import img3_rf from "../../assets/Images_for_web/before-after-icon_white_roman_fuggoleges.png";

const NoDigTheOther = ({

  s1,
}) => {
      
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      console.log("ran");
      return window.scrollTo(0, 0);
    }, 1000);
  });

  const isRomanian = () => {
    if ("ro" === i18n.language) return true;
    else return false;
  };

  const isMobile = window.innerWidth < 1090;

  return (
    <div className="dugulas-main">
      <div className="dugulas-text">
         <div className="dugulas-imgs">
         <img src={img1} alt="" />


    {isMobile ? (
      <>
        {isRomanian() ? (
          <>
            <img
              src={img3_rf}
             
            />
          </>
        ) : (
          <>
            <img
              src={img3_mf}
              
            />
          </>
        )}
      </>
    ) : (
      <>
        {isRomanian() ? (
          <>
            <img
              src={img3_r}
             
            />
          </>
        ) : (
          <>
            <img
              src={img3_m}
              
            />
          </>
        )}
      </>
    )}
  


<img src={img2} alt="" />

            </div>
        <div className="text-text">
          <h1>{t("epo1")}</h1>
              <ul>
                <li>{t("epo2")}</li>
                <li>{t("epo3")}</li>
                <li>{t("epo4")}</li>
                <li>{t("epo5")}</li>
                <li>{t("epo7")}</li>
                <li>{t("epo8")}</li>
                <li>{t("epo9")}</li>
                <li>{t("epo10")}</li>
              </ul>
        </div>
      </div>
    </div>
  );
};

export default NoDigTheOther;
