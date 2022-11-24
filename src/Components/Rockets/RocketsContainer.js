import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, allRockets } from '../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

const RocketsContainer = () => {
  const rockets = useSelector(allRockets);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <section>
      <RocketList
        rockets={rockets}
      />
    </section>
  );
}
;

export default RocketsContainer;