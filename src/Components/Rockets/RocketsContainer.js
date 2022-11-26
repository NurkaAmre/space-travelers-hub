import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, allRockets, rocketBooking } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

function RocketsContainer() {
  const rockets = useSelector(allRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) dispatch(getRockets());
  }, [dispatch, rockets.length]);

  const handleBooking = (id) => {
    dispatch(rocketBooking(id));
  };

  return (
    <section className="Amre">
      <RocketList
        rockets={rockets}
        handleBooking={handleBooking}
      />
    </section>
  );
}

export default RocketsContainer;
