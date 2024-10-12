import React, { useState } from "react";
import "./console.css";
import VirtualPS2 from "./Console";
import { TV } from "../tv/TV";

export const Ps2 = () => {
  const [isTVOn, setTVOn] = useState(false);

  const handlePowerButtonClick = () => {
    setTVOn((prevIsTVOn) => !prevIsTVOn); 
  };

  return (
    <div className="ps2-tv-setup">
      <TV isOn={isTVOn} />
      <svg className="cable" width="500" height="400">
        <path
          d="M180,150 C180,300 0,250 260,400 
          C340,450 350,500 320,530"
          stroke="black"
          strokeWidth="5"
          fill="transparent"
        />
      </svg>
      <VirtualPS2 onPowerButtonClick={handlePowerButtonClick} />
      {/* <div className="intro">Click on the power button to boot PS2</div> */}
    </div>
  );
};
