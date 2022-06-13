import { useRef, useState } from "react";
import "./Video.scss";

import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
  BsYoutube,
} from "react-icons/bs";

import video from "../../assets/Videos/video-intro.mp4";
import { t } from "i18next";

export const Video = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [playSound, setPlaySound] = useState(true);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const handleSound = () => {
    setPlaySound((prevPlaySound) => !prevPlaySound);

    if (playSound) {
      vidRef.current.muted = true;
    } else {
      vidRef.current.muted = false;
    }
  };

  return (
    <div className="video_bigMain">
      <div className="video_main">
        <video
          src={video}
          type="video/mp4"
          loop
          controls={false}
          ref={vidRef}
          onClick={handleVideo}
        />
        {playVideo ? (
          <div className="mute-btn-overlay-active">
            <div className="mute-btn" onClick={handleSound}>
              {playSound ? (
                <BsFillVolumeUpFill color="white" className="volume-btn" />
              ) : (
                <BsFillVolumeMuteFill color="white" className="volume-btn" />
              )}
            </div>
          </div>
        ) : (
          // ""
          <div className="video-overlay">
            <div className="video-overlay-circle" onClick={handleVideo}>
              {playVideo ? (
                <BsFillPauseFill color="white" className="play-btn" />
              ) : (
                <BsFillPlayFill color="white" className="play-btn" />
              )}
            </div>
            <div className="mute-btn-overlay">
              <div className="mute-btn" onClick={handleSound}>
                {playSound ? (
                  <BsFillVolumeUpFill color="white" className="volume-btn" />
                ) : (
                  <BsFillVolumeMuteFill color="white" className="volume-btn" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Youtube-link">
        <span>
          {t("youtube_link")}
          {":"}
          <a href="https://www.youtube.com/watch?v=3pQrGHSt3RU" target="_blank">
            <span>
              <BsYoutube />
            </span>
          </a>
        </span>
      </div>
    </div>
  );
};
