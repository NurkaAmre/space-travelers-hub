import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription,
}) => (
  <div >
    <img
      src={rocketImage}
      alt={rocketName}
    />
    <div>
      <h3>{ rocketName }</h3>
      <p>{ rocketDescription }</p>
      <button id={rocketId}>
        Reserve Rockets
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
