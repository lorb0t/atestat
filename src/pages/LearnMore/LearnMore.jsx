import "../LearnMore.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import img3_magyar from "../../assets/Images_for_web/before-after-icon_white_magyar.png";
import img3_magyar_fuggoleges from "../../assets/Images_for_web/before-after-icon_white_magyar_fuggoleges.png";
import img3_roman from "../../assets/Images_for_web/before-after-icon_white_roman.png";
import img3_roman_fuggoleges from "../../assets/Images_for_web/before-after-icon_white_roman_fuggoleges.png";

export const LearnMore = ({
  title,
  p1,
  p2,
  p3,
  p4,
  p5,
  yt1,
  yt2,
  yt3,
  img1,
  img2,
  img3,
  s1,
  s4,
  s5,
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

          {s1 ? (
            <>
              {isMobile ? (
                <>
                  {isRomanian() ? (
                    <>
                      <img
                        src={img3_roman_fuggoleges}
                        alt=""
                        className="dugulas-img2 img_bigger"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={img3_magyar_fuggoleges}
                        alt=""
                        className="dugulas-img2 img_bigger"
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  {isRomanian() ? (
                    <>
                      <img
                        src={img3_roman}
                        alt=""
                        className="dugulas-img2 img_bigger"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={img3_magyar}
                        alt=""
                        className="dugulas-img2 img_bigger"
                      />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <img src={img3} alt="" className="dugulas-img2 img_bigger" />
            </>
          )}

          <img src={img2} alt="" />
        </div>
        <div className="text-text">
          <h1>{title}</h1>

          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <p>{p5}</p>

          <div className="dugulas-youtube">
            <iframe src={yt1} allow="fullscreen;"></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe src={yt2} allow="fullscreen;"></iframe>
            <div className="dugulas-vertical-line"></div>
            <iframe src={yt3} allow="fullscreen;"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
