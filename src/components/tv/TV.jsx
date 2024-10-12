import "./tv.css";
import React, { useRef } from 'react';
import videoFile from "./../../assets/videos/successful.mp4"

export const TV = () => {

const videoRef = useRef(null);

const playVideo = () => {
  if (videoRef.current) {
    videoRef.current.play();
  }
};
  return (
    <div className="tvBorder">
      <div className="tvScreen">
        <div className="tvScreenInner"><video
        ref={videoRef}
        width="520"
        height="340"
        loop
        muted
        controls={false}
        autoPlay    
        style={{ display: 'block' }}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video></div>
      </div>
    </div>
  );
};
