import React from 'react';
import PropTypes from 'prop-types';
import './rockets.css';


const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription,
}) => 
(  
  <div className="flex">
    <img
      className="imge"
      src={rocketImage}
      alt={rocketName}
    />
    <div className="text">
      <h3 className="font">{ rocketName }</h3>
      <p className="my-2">
      
        { rocketDescription }
      </p>
      <button
        id={rocketId}
  
      >
        Reserve Rocket
      </button>
    </div>
  </div>
);
Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
};

export default Rocket;