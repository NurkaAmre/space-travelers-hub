import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
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
      <Button
        id={rocketId}
        onClick={() => handleBooking(rocketId)}
        className={` shadow-none bg-red-700 p-2.5 rounded-md border-blue-700 border-2 hover:shadow-blue-500 hover:text-blue-500 hover:bg-white ${reserved ? 'text-gray-800 border-2 border-gray-800 bg-white hover:text-white hover:bg-gray-800 hover:shadow-gray-500' : ''}`}
      >
        { reserved ? 'Cancel Reservation' : 'Reserve Rockets' }
      </Button>
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
