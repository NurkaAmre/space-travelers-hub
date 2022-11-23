import React from 'react';
import PropTypes from 'prop-types';
import Rocket from './RocketList';


const Rockets = ({ rockets }) => (
  <>
    {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.rocketId}
            rocketImage={rocket.rocketImage}
            rocketName={rocket.rocketName}
            rocketDescription={rocket.rocketDescription}
            rocketId={rocket.rocketId}
          />
        ))
      }
  </>
);

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDescription: PropTypes.string,
  })).isRequired,
};

export default Rockets;