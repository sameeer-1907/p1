import React from "react";
import "../../styles/MainContent_3.css";
import scooter from "../../assets/images/scooter - Copy.png"

function MainContent_3() {
  return (
    
    <div className="MainContent_3_main_container">
      <div className="MainContent_3_main_column">
        <div className="column1">
          <p className="MainContent_3_main_column_subscription">SUBSCRIPTION</p>
        </div>
        <div className="column2">
          <div className="MainContent_3_main_column_title1_container">
            <p className="MainContent_3_main_column_title1">
              DISCOVER OUR VARIOUS SUBSCRIPTION PLANS TODAY.
            </p>
          </div>
          <div className="MainContent_3_main_column_title2_container">
            <p className="MainContent_3_main_column_title2">
              UPGRADE OR CANCEL ANYTIME.
            </p>
          </div>
        </div>
        <div className="column3">
            <img className="scooter" src={scooter} />
        </div>
      </div>
    </div>
  );
}

export default MainContent_3;
