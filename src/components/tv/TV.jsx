import React, { useRef, useEffect } from 'react';
import videoFile from "./../../assets/videos/successful.mp4";
import "./tv.css";

export const TV = ({ isOn }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        playVideo();
      }, 1000); 

      return () => clearTimeout(timer);
    } else {
      stopAndResetVideo();
    }
  }, [isOn]);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopAndResetVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="tvBorder">
      <div className="tvScreen">
        <div className="tvScreenInner">
          <video
            ref={videoRef}
            width="520"
            height="340"
            controls={false}
            style={{ display: isOn ? 'block' : 'none' }} 
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
