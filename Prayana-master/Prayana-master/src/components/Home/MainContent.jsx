// eslint-disable-next-line no-unused-vars
import React from 'react';
import Scooter from '../../assets/images/scooter1.png';
import ContentWrapper from './ImageAndHead';

const MainContent = () => {
  return (
    <div className="main-content">
      <ContentWrapper
      headStart="Riding the future, " 
      headSpan="one"
      headEnd=" charge at a time."
      para="Embrace the future of"
      para1="transportation with the power" 
      para2="and efficiency of electric bikes," 
      para3="where each ride is a step towards" 
      para4="a greener planet."
      link="https://dummy.com"
      imageSrc={Scooter}
    />

      <div className="specs">
      <div className="spec-item">
        </div>
        <div className="spec-item">
          <h2>120</h2>
          <p>CC ENGINE BIKE</p>
        </div>
        <div className="spec-item">
          <h2>110</h2>
          <p>KM/H TOP SPEED</p>
        </div>
        <div className="spec-item">
          <h2>150</h2>
          <p>HORSEPOWER</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
