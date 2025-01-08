import React, { useEffect } from 'react';
import Venture from './Venture';

const EcoVenture = ({ ecoVentures }) => {


  return (
    <div data-aos="slide-up" data-aos-mirror="false" data-aos-once="false" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
      {ecoVentures.map((ecoVenture, index) => (
          <Venture key={index} ecoVenture={ecoVenture} />
      ))}
    </div>
  );
};

export default EcoVenture;