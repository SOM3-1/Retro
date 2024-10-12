import VirtualPS2 from "./Console";
import "./console.css";
import { TV } from "../tv/TV";
export const Ps2 = () => {
  return (
    <div className="ps2-tv-setup">
      <TV /> 
      <svg className="cable" width="500" height="400">
        <path
          d="M180,150 C180,300 10,350 260,400 
          C340,450 350,500 320,530"
          stroke="black"
          strokeWidth="5"
          fill="transparent"
        />
      </svg>
      <VirtualPS2 />
      <div className="intro">Click on the power button to boot PS2</div>
    </div>
  );
};
