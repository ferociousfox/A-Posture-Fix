

import React from 'react';
import PropTypes from 'prop-types';

function Hero(props){
  return(
    <div className='hero'>
      <style jsx>{`
        .hero {
          height: 450px;
          background-position: center;
          background-size: cover;
          background-image: url(${props.heroImage})
        }
        `}</style>
    </div>
  );
}

Hero.propTypes = {
  heroImage: PropTypes.string
};

export default Hero;
