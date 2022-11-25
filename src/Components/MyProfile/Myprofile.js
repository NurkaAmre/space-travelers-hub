import React from 'react';
import { useSelector } from 'react-redux';
import { allRockets } from '../redux/rockets/rocketsSlice';
import './Myprofile.css';
import space from '../../assets/space.png';

const UserProfile = () => {
  const rockets = useSelector(allRockets);

  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="MyProfile">
      <div className="MyProfileChild">

        <h2 className="ChildTitle">My Rockets<img src={space} alt="Logo" className="image" /> </h2>
        {rocketsReserved.length === 0 ? (
          <>
            <span>No Rockets Reserved, yet</span>
          </>
        ) : (

          rocketsReserved.map(({ rocketId: id, rocketName }) => (
            <ul key={id} className="list">
              <li key={id} className="listChild">
                <h4>{rocketName}</h4>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>

  );
};

export default UserProfile;
