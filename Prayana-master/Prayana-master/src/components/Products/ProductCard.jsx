import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Products.css';

const ProductCard = ({ title, image, specs, topRightText }) => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate(`/details/${title}`);
  };

  return (
    <div className="product-card">
      <h2>{title}</h2>
      {topRightText && (
        <div className="top-right-text">
          {topRightText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      )}
      <img src={image} alt={title} />
      <div className="specs">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <span>{spec.label}</span>
            <span>{spec.value}</span>
          </div>
        ))}
      </div>
      <button className="learn-more" onClick={handleLearnMoreClick}>
        Learn More
      </button>
    </div>
  );
};

export default ProductCard;
