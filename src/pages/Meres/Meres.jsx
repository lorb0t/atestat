import "../LearnMore.scss";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/Images/robot.jpg";
import img2 from "../../assets/Images/robot.jpg";
import img3 from "../../assets/Images/robot.jpg";

export const Meres = ({}) => {
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
        <h1></h1>

        <p></p>

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
  );
};
