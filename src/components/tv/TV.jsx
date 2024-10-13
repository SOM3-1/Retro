import React, { useState, useEffect } from "react";
import { FailureVideo } from "./Failure";
import "./tv.css";
import { SuccessVideo } from "./Success";

export const TV = ({ isOn }) => {
  const [isFailureVideo, setIsFailureVideo] = useState(false);
  const [videoSelected, setVideoSelected] = useState(false);

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => {
        const isFailure = Math.random() < 0.3;
        setIsFailureVideo(isFailure);
        setVideoSelected(true);
      }, 1500);

      return () => {
        clearTimeout(timer);
        setVideoSelected(false);
      };
    } else {
      setVideoSelected(false);
    }
  }, [isOn]);

  return (
    <>
      <div className="tvBorder">
        <div className="tvOuter">
          <div className="tvScreen">
            <div className="tvScreenInner">
              {isOn && videoSelected ? (
                isFailureVideo ? (
                  <FailureVideo play={isOn} />
                ) : (
                  <SuccessVideo play={isOn} />
                )
              ) : null}{" "}
              {}
            </div>
          </div>
        </div>
        <div className="buttons">
            <button className="small" onClick={console.log("")}></button>
            <button className="small"></button>
            <button className="big"></button>
            <button className="small"></button>
            <button className="small"></button>
        </div>
      </div>
      <div className="stand"></div>
    </>
  );
};
