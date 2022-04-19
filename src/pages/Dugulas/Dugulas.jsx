import "./Dugulas.scss";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/Images/bemeres.jpg";
import img2 from "../../assets/Images/Kamion1.jpeg";
import img3 from "../../assets/Images/cleaning.png";

export const Dugulas = () => {
  const { t, i18n } = useTranslation();

  const vid_size = "400px";

  return (
    <div className="dugulas-main">
      <div className="dugulas-text">
        <div className="dugulas-imgs">
          <img src={img1} alt="" />
          <img src={img3} alt="" className="dugulas-img2" />
          <img src={img2} alt="" />
        </div>
        <h1>{t("dugulas_cim")}</h1>

        <p>{t("dugulas1")}</p>
        <p>{t("dugulas2")}</p>
        <p>{t("dugulas3")}</p>
        <p>{t("dugulas4")}</p>
        <p>{t("dugulas5")}</p>

        <div className="dugulas-youtube">
          <iframe
            src="https://www.youtube.com/embed/WfsHn84br_8"
            width={vid_size}
            height={vid_size}
            allow="fullscreen;"
          ></iframe>
          <div className="dugulas-vertical-line"></div>
          <iframe
            src="https://www.youtube.com/embed/WfsHn84br_8"
            width={vid_size}
            height={vid_size}
            allow="fullscreen;"
          ></iframe>
          <div className="dugulas-vertical-line"></div>
          <iframe
            src="https://www.youtube.com/embed/WfsHn84br_8"
            width={vid_size}
            height={vid_size}
            allow="fullscreen;"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
