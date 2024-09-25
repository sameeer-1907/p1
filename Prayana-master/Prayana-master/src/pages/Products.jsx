import React from 'react';
import Navbar from '../components/Home/Navbar';
import ProductCard from '../components/Products/ProductCard';
import Footer from '../components/About/Footer';
import ImageCarousel from '../components/Products/ImageCarousel';
import '../styles/Products.css';
import bike1 from '../assets/images/scooter1.png';
import bike2 from '../assets/images/scooter2.png';
import bike3 from '../assets/images/scooter3.png';

const products = [
  {
    title: 'PRX 1',
    image: bike1,
    specs: [
      { label: 'TOP SPEED', value: '120 KMPH' },
      { label: 'POWER (PS)', value: '385 PS' },
      { label: 'MAX. TORQUE', value: '450 NM' },
      { label: 'BATTERY LIFE', value: '200 KM' },
      { label: '0 TO 100', value: 'in 24 S' }
    ],
    topRightText: ['30 L LARGE BOOTSPACE', '11 KG LIGHT WEIGHT BODY']
  },
  {
    title: 'PRX PRO',
    image: bike2,
    specs: [
      { label: 'TOP SPEED', value: '150 KMPH' },
      { label: 'POWER (PS)', value: '450 PS' },
      { label: 'MAX. TORQUE', value: '470 NM' },
      { label: 'BATTERY LIFE', value: '250 KM' },
      { label: '0 TO 100', value: 'in 24 S' }
    ],
    topRightText: ['50 KW FAST CHARGING', 'ONE CLICK AUTO REVERSE']
  },
  {
    title: 'PRX LITE',
    image: bike3,
    specs: [
      { label: 'TOP SPEED', value: '90 KMPH' },
      { label: 'POWER (PS)', value: '255 PS' },
      { label: 'MAX. TORQUE', value: '370 NM' },
      { label: 'BATTERY LIFE', value: '120 KM' },
      { label: '0 TO 100', value: 'in 35 S' }
    ],
    topRightText: ['UP TO 80 MILES RANGE', 'ADVANCED REGEN BRAKING']
  },
  {
    title: 'PRX 2',
    image: bike1,
    specs: [
      { label: 'TOP SPEED', value: '160 KMPH' },
      { label: 'POWER (PS)', value: '430 PS' },
      { label: 'MAX. TORQUE', value: '480 NM' },
      { label: 'BATTERY LIFE', value: '300 KM' },
      { label: '0 TO 100', value: 'in 18 S' }
    ],
    topRightText: []
  }
];

const Products = () => {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <div className="products-page">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
