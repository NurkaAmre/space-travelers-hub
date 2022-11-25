import React from 'react';
import PropTypes from 'prop-types';
import './rockets.css';

const Rocket = ({
  rocketId, rocketImage, rocketName, rocketDescription,
  reserved, handleBooking,
}) => (
  <div className="flu">
    <img
      className="imge"
      src={rocketImage}
      alt={rocketName}
    />
    <div className="text">
      <h3 className="font">{ rocketName }</h3>
      <p className="my-2">
        { reserved ? (
          <span
            className="reserved"
          >
            Reserved
          </span>
        ) : '' }
        { rocketDescription }
      </p>
      <button
        type="button"
        id={rocketId}
        onClick={() => handleBooking(rocketId)}
        className="btn1"
      >
        { reserved ? 'Cancel Reservation' : 'Reserve Rockets' }
      </button>
    </div>
  </div>
);
Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleBooking: PropTypes.func.isRequired,
};

export default Rocket;
