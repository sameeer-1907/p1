import React from 'react';

const ContentWrapper = ({ head, para}) => {
  return (
    <div className="content-wrapper">
      <div className="text-content content">
        <h1>
          {head}
        </h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default ContentWrapper;
