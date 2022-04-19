import "./LearnMore.scss";
import { useTranslation } from "react-i18next";

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
  s3,
  s4,
  s5,
}) => {
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
        <h1>{title}</h1>

        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>

        <div className="dugulas-youtube">
          <iframe
            src={yt1}
            width={vid_size}
            height={vid_size}
            allow="fullscreen;"
          ></iframe>
          <div className="dugulas-vertical-line"></div>
          <iframe
            src={yt2}
            width={vid_size}
            height={vid_size}
            allow="fullscreen;"
          ></iframe>
          <div className="dugulas-vertical-line"></div>
          <iframe
            src={yt3}
            width={vid_size}
            height={vid_size}
            allow="fullscreen;"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
