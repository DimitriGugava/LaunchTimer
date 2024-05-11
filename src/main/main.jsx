import React from "react";
import "./main.css";
import starts from "../images/bg-stars.svg";
import hills from "../images/pattern-hills.svg";
import facebook from "../images/icon-facebook.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

import { useState, useEffect } from "react";

const Main = () => {
  //   const [days, setDays] = useState(0);
  //   const [hours, setHours] = useState(0);
  //   const [minutes, setMinutes] = useState(0);
  //   const [seconds, setSeconds] = useState(0);

  const [timeLeft, setTimeLeft] = useState(8 * 86400); // 8 days in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${days.toString().padStart(2, "0")} days ${hours
    .toString()
    .padStart(2, "0")} hours ${minutes
    .toString()
    .padStart(2, "0")} minutes ${seconds.toString().padStart(2, "0")} seconds`;

  return (
    <div className="mainCont">
      <img src={starts} className="backgroundPhotoStars" />
      <div className="context_Cont">
        <h1 className="header_Text">We’re launching soon</h1>

        <div className="TimeBox_Large_Box">
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">{days}</div>
            <div className="timeBox_Text">days</div>
          </div>
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">{hours}</div>
            <div className="timeBox_Text">hours</div>
          </div>
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">{minutes}</div>
            <div className="timeBox_Text">minutes</div>
          </div>
          <div className="timeBox_Small_Box">
            <div className="timeBox_Number">{seconds}</div>
            <div className="timeBox_Text">seconds</div>
          </div>
        </div>
        <div className="soc_NetWorks_Box">
          <img className="soc_Networks" src={facebook} />
          <img className="soc_Networks" src={pinterest} />
          <img className="soc_Networks" src={instagram} />
        </div>
      </div>
    </div>
  );
};
export default Main;
