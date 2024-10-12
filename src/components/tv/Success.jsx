import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import videoFile from "./../../assets/videos/successful.mp4";

export const SuccessVideo = ({ play }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.play();
    } else if (!play && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [play]);

  const handleVideoEnd = () => {
   navigate('/games'); 
  };

  return (
    <video
      ref={videoRef}
      width="520"
      height="340"
      controls={false}
      onEnded={handleVideoEnd}
    >
      <source src={videoFile} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
