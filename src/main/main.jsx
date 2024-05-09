import React from "react";
import "./main.css";
import starts from "../images/bg-stars.svg";
import hills from "../images/pattern-hills.svg";
import facebook from "../images/icon-facebook.svg";

import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const Main = () => {
  return (
    <div className="mainCont">
      <img src={starts} className="backgroundPhotoStars" />
      <div className="context_Cont">
        <h1 className="header_Text">We’re launching soon</h1>
        <div className="TimeBox_Large_Box">
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">08</div>
            <div className="timeBox_Text">days</div>
          </div>
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">23</div>
            <div className="timeBox_Text">hours</div>
          </div>
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">55</div>
            <div className="timeBox_Text">minutes</div>
          </div>
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">41</div>
            <div className="timeBox_Text">seconds</div>
          </div>
        </div>
        <div className="soc_NetWorks_Box">
          <img className="soc_Networks" src={facebook} />
          <img className="soc_Networks" src={pinterest} />
          <img className="soc_Networks" src={instagram} />
        </div>
      </div>
      <img src={hills} className="bottom_Hill_Image" />
    </div>
  );
};
export default Main;
