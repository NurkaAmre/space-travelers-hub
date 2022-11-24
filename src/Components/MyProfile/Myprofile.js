import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allRockets, rocketBooking } from '../redux/rockets/rocketsSlice';

const UserProfile = () => {
  const dispatch = useDispatch();

  const rockets = useSelector(allRockets);

  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);

  return (

    <div className="main">
      <h2 className="myrocket">My Rockets</h2>
      {rocketsReserved.length === 0 ? (
        <>
          <span className="italic">No Rockets Reserved, yet</span>
          <span className="italic">Click on Rockets page to reserve.</span>
        </>
      ) : (
        rocketsReserved.map(({ rocketId: id, rocketName, link }) => (
          <div
            key={id}
            className="amre"
          >
            <h3>
              {' '}
              {rocketName}
              <span>
                <a
                  className="link"
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Read more
                </a>
              </span>
            </h3>
            <button
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              ripple={false}
              onClick={() => dispatch(rocketBooking(id))}
            >
              Cancel
            </button>
          </div>
        ))
      )}
    </div>

  );
};

export default UserProfile;
