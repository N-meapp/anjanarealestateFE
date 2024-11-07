import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
        <div ><img src="/loadImg/load.png" className="w-[200px]" /></div>
      <div className="loader"></div> 
    </div>
  );
};

export default Preloader;
