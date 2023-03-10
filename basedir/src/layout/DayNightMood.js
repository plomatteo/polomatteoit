import { useState } from "react";
import { useEffect } from "react";

const DayNightMood = () => {


  const changeMood = () => {
    document.querySelector("body").classList.toggle("theme-light");
  };



  return (
    <label className="color_switch" onClick={() => changeMood()}>
      <i className="fas fa-moon" />
    </label >
  );
};
export default DayNightMood;
