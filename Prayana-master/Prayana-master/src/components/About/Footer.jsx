import React from 'react';
import FooterItem from './FooterItem';
import Logo from '../../assets/images/logo.png';

const Footer = () => (
  <footer className="footer">
    <FooterItem 
      icon="📍" 
      title="Find Us" 
      lines={["VIT-AP University, Amaravati, Andhra Pradesh 522237"]} 
    />
    <FooterItem 
      icon="📞" 
      title="Call Us" 
      lines={["+91-869999XXXX", "+91-745899XXXX"]} 
    />
    <FooterItem 
      icon="✉️" 
      title="Mail Us" 
      lines={["info.prayanaelectric@gmail.com"]} 
    />
    <div className="footer-item">
      <img src={Logo} alt="Prayana Electric" />
    </div>
  </footer>
);

export default Footer;
