// import React from 'react';

// const ContentWrapper = ({ headStart, headSpan, headEnd, para, link, imageSrc }) => {
//   return (
//     <div className="content-wrapper">
//       <div className="text-content">
//         <h1>
//           {headStart}<span>{headSpan}</span>{headEnd}
//         </h1>
//         <p>{para}</p>
//         <button className="learn-more" onClick={() => window.location.href = link}>
//           Learn more
//         </button>
//       </div>
//       <div className="image-content">
//         <img src={imageSrc} alt="Electric Scooter" />
//       </div>
//     </div>
//   );
// };

// export default ContentWrapper;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = ({ headStart, headSpan, headEnd, para,para1,para2,para3,para4, link, imageSrc }) => {
  const handleLearnMoreClick = () => {
    window.location.href = link;
  };

  return (
    <div className="content-wrapper">
      <div className="text-content">
        <h1>
          {headStart}
        </h1>
        <h1><span>{headSpan}</span>{headEnd}</h1> <br />
        <p>{para}</p><p>{para1}</p><p>{para2}</p><p>{para3}</p><p>{para4}</p> <br /><br />
        <button className="learn-more" onClick={handleLearnMoreClick}>
          Learn more
        </button>
      </div>
      <div className="image-content">
        <img src={imageSrc} alt="Content Image" />
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  headStart: PropTypes.string,
  headSpan: PropTypes.string,
  headEnd: PropTypes.string,
  para: PropTypes.string,
  para1: PropTypes.string,
  para2: PropTypes.string,
  para3: PropTypes.string,
  para4: PropTypes.string,
  link: PropTypes.string,
  imageSrc: PropTypes.string,
};

ContentWrapper.defaultProps = {
  headStart: '',
  headSpan: '',
  headEnd: '',
  para: '',para1: '',para2: '',para3: '',para4: '',
  link: '#',
  imageSrc: '',
};

export default ContentWrapper;