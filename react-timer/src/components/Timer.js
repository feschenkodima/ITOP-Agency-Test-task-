import React from "react";
import "../styles/styles.css";

function Timer({ time }) {
  return (
    <div className="timer_container">
      <span className="timer_item">
        {("0" + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}
      </span>
      :
      <span className="timer_item">
        {("0" + Math.floor(time / 6000)).slice(-2)}
      </span>
      :
      <span className="timer_item">
        {("0" + Math.floor((time / 100) % 60)).slice(-2)}
      </span>
    </div>
  );
}
export default Timer;
