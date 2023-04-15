import React from 'react'
import "../Learn.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img1 from "../../assets/Images_for_web/blu1.jpeg";
import img2 from "../../assets/Images_for_web/blu3.jpeg";
import img3 from "../../assets/Images_for_web/blu2.jpeg";
import img4 from "../../assets/Images_for_web/blu4.png";
import img5 from "../../assets/Images_for_web/blu69.png";
import img6 from "../../assets/Images_for_web/blu68.jpeg";



const Linening = () => {
      
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
    <div className="ma1">
      <div className="ma2">
        <div className="ma3">
          <img src={img1} alt="" />
          <img src={img3} alt="" className="dugulas-img2" />
          <img src={img2} alt="" />
        </div>


        <div className="ma4">
          <h1>{t("lin1")}</h1>

         
          {language() ? (
            <>
              <h4>{t("lin2")}</h4>
              <p>{t("lin3")}</p>
              <p>{t("lin4")}</p>
              <p>{t("lin5")}</p>
              <p>{t("lin6")}</p>
            </>
          ) : (
            <>
              <h1>{t("lin1.1")}</h1>
              <p>{t("lin7")}</p>
              <p>{t("lin7.1")}</p>
              <p>{t("lin8")}</p>
              <h3>{t("lin9")}</h3>
              <ul>
                <li>{t("lin10")}</li>
                <li>{t("lin11")}</li>
                <li>{t("lin12")}</li>
                <li>{t("lin13")}</li>
                <li>{t("lin14")}</li>
              </ul>
            </>
         )} 
           


        <div className="merges-youtube">
            <iframe
              src="https://www.youtube.com/embed/2YZvpn5u6cc"
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
          </div>
          <div className="napoz">
            <img src={img6} alt="" />
             
             
             </div>
        </div>
      </div>
    </div>

  )
}

export default Linening