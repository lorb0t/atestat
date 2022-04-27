import "../LearnMore.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import img3 from "../../assets/Images/video_panel.png";
import img2 from "../../assets/Images/camera2.png";
import img1 from "../../assets/Images/robot_trip.png";

export const Camera = ({}) => {
  const { t, i18n } = useTranslation();
  const language = () => {
    if ("ro" === i18n.language) return true;
    else return false;
  };

  const vid_size = "400px";

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
          <h1>{t("camera_cim")}</h1>
          <p>{t("camera1")}</p>
          <p>{t("camera2")}</p>
          <h2>{t("camera3")}</h2>
          <ul>
            <li>{t("camera4_1")}</li>
            <li>{t("camera4_2")}</li>
            <li>{t("camera4_3")}</li>
            <li>{t("camera4_4")}</li>
            <li>{t("camera4_5")}</li>
            <li>{t("camera4_6")}</li>
            <li>{t("camera4_7")}</li>
            <li>{t("camera4_8")}</li>

            {!language() && (
              <>
                <li>{t("camera4_9")}</li>
                <li>{t("camera4_10")}</li>
              </>
            )}
          </ul>

          <div className="dugulas-youtube">
            <iframe
              src=""
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              src=""
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe
              src=""
              width={vid_size}
              height={vid_size}
              allow="fullscreen;"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
