import React, { useRef, useEffect } from 'react';
import failureVideo from "./../../assets/videos/failure.mp4";

export const FailureVideo = ({ play }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.play();
    } else if (!play && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  }, [play]);

  return (
    <video ref={videoRef} width="520" height="340" controls={false}>
      <source src={failureVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
