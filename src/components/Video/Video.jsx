import { useRef, useState } from "react";
import "./Video.scss";

import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import video from "../../assets/Videos/video-intro.mp4";

export const Video = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="video_main">
      <video
        src={video}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
        onClick={handleVideo}
      />
      {playVideo ? (
        ""
      ) : (
        <div className="video-overlay">
          <div className="video-overlay-circle" onClick={handleVideo}>
            {playVideo ? (
              <BsFillPauseFill color="white" fontSize={30} />
            ) : (
              <BsFillPlayFill color="white" fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
