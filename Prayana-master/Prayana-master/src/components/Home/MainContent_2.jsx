// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../styles/MainContent_2.css";
import as from "../../assets/images/right-arrow.png";

function MainContent_2() {
  return (
    <div className="MainContent_2_main_container">
      <p className="MainContent_2_title">Revitalize Your Focus</p>
      <p className="MainContent_2_subtitle">
        take an invigorating e-bike ride and return to your studies feeling
        refreshed.
      </p>
      <p className="MainContent_2_para">
        Stuck in a study slump? Ditch the caffeine and hop on an e-bike! A quick
        ride can invigorate your mind. Fresh air and a change of scenery work
        wonders for focus. Return refreshed and ready to conquer your studies!{" "}
      </p>
      <button className="MainContent_2_button">
        Book your bike now
        <img src={as} className="MainContent_2_button_img" />
      </button>
    </div>
  );
}

export default MainContent_2;
