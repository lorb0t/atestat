import { useRef, useState } from "react";
import "./Video.scss";

import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";

import video from "../../assets/Videos/video-intro.mp4";

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
              <BsFillVolumeUpFill color="white" fontSize={35} />
            ) : (
              <BsFillVolumeMuteFill color="white" fontSize={35} />
            )}
          </div>
        </div>
      ) : (
        // ""
        <div className="video-overlay">
          <div className="video-overlay-circle" onClick={handleVideo}>
            {playVideo ? (
              <BsFillPauseFill color="white" fontSize={40} />
            ) : (
              <BsFillPlayFill color="white" fontSize={40} />
            )}
          </div>
          <div className="mute-btn-overlay">
            <div className="mute-btn" onClick={handleSound}>
              {playSound ? (
                <BsFillVolumeUpFill color="white" fontSize={35} />
              ) : (
                <BsFillVolumeMuteFill color="white" fontSize={35} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
