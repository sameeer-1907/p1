import React from 'react';

const FooterItem = ({ icon, title, lines }) => (
  <div className="footer-item">
    <div className="footer-icon">{icon}</div>
    <div className="footer-text">
      <p className="footer-title">{title}</p>
      {lines.map((line, index) => (
        <p key={index} className="footer-line">{line}</p>
      ))}
    </div>
  </div>
);

export default FooterItem;
