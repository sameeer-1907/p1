import React from 'react';
import { useParams } from 'react-router-dom';
import './Ebikedetails.css';
import NumberCounter from 'number-counter';
import Navbar from '../Home/Navbar';


import scooterimg1 from '../../assets/images/scooter1.png';
import scooterimg2 from '../../assets/images/scooter2.png';
import scooterimg3 from '../../assets/images/scooter3.png';

const productDetails = {
  'PRX 1': {
    title: 'PRX 1',
    specs: {
      topSpeed: 120,
      power: 385,
      torque: 450,
      batteryLife: 200,
      zeroToHundred: 24
    },
    description: `Introducing the PRX-1, a revolutionary e-scooter designed for the modern urban commuter.
        With its sleek design, powerful motor, and long-lasting battery,
        The PRAYANA electric's PRX-1 offers an unparalleled riding experience. Enjoy smooth
        and efficient travel with eco-friendly technology that keeps you on the go.`,
    features: ['3L BOOTSPACE', '11 KG LIGHT WEIGHT BODY'],
    image: scooterimg1
  },
  'PRX PRO': {
    title: 'PRX PRO',
    specs: {
      topSpeed: 150,
      power: 450,
      torque: 470,
      batteryLife: 250,
      zeroToHundred: 24
    },
    description: 'Introducing the PRX-PRO, a revolutionary e-scooter designed for the modern urban commuter...',
    features: ['50 KW FAST CHARGING', 'ONE CLICK AUTO REVERSE'],
    image: scooterimg2
  },
  'PRX LITE': {
    title: 'PRX LITE',
    specs: {
      topSpeed: 90,
      power: 255,
      torque: 370,
      batteryLife: 120,
      zeroToHundred: 35
    },
    description: 'Introducing the PRX-LITE, a revolutionary e-scooter designed for the modern urban commuter...',
    features: ['UP TO 80 MILES RANGE', 'ADVANCED REGEN BRAKING'],
    image: scooterimg3
  },
};

const EbikeDetails = () => {
  const { title } = useParams();
  const product = productDetails[title];

  if (!product) {
    return <div>Product not found</div>;
  }

  const { specs, description, features, image } = product;

  return (
    <div>
      <Navbar /> 
      <h1 className="main-title">PrayanaElectric's</h1>
      <h2 className="prx-title">{product.title}</h2>
      <img src={image} alt="Scooter Image" className="main-image" />
      <p className="paragraph rounded-[calc(1.5rem-1px)] p-10 bg-gray-100 dark:bg-gray-900">
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <h3 className="choose-color">Choose Colour - </h3>
      <div className="g1">
        <div className="red-button"></div>
        <div className="green-button"></div>
      </div>
      <h3 className="features1">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            {feature}
            <br />
          </React.Fragment>
        ))}
      </h3>
      
      <div className="speed">
        <span className="topspeed">TOP SPEED</span>
        <span className="value1">
          <NumberCounter end={specs.topSpeed} start={20} delay='1' />
          <span className="unit1">km/h</span>
        </span>
      </div>
      
      <div className="power">
        <span className="POWER">POWER</span>
        <span className="value2">
          <NumberCounter end={specs.power} start={285} delay='2' />
          <span className="unit2">PS</span>
        </span>
      </div>
      
      <div className="torque">
        <span className="maxtorque">MAX.TORQUE</span>
        <span className="value3">
          <NumberCounter end={specs.torque} start={200} delay='2' />
          <span className="unit3">NM</span>
        </span>
      </div>
      
      <div className="battery">
        <span className="batterylife">BATTERY LIFE</span>
        <span className="value4">
          <NumberCounter end={specs.batteryLife} start={100} delay='2' />
          <span className="unit4">KM</span>
        </span>
      </div>
      
      <div className="zerotohun">
        <span className="0to100">0 to 100</span>
        <span className="value5">
          <NumberCounter end={specs.zeroToHundred} start={0} delay='1' />
          <span className="unit5">s</span>
        </span>
      </div>
    </div>
  );
};

export default EbikeDetails;
