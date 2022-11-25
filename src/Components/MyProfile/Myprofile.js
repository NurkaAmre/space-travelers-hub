import React from "react";
import { useSelector } from "react-redux";
import { allRockets } from "../redux/rockets/rocketsSlice";
import "./Myprofile.css";

const UserProfile = () => {
  const rockets = useSelector(allRockets);
  const missionItems = useSelector((state) => state.mission.missions);
  const reservedMissions = missionItems.filter(
    (missionItems) => missionItems.status,
  );
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="MyProfile">
      <div className="MyProfileChild">
        <h2 className="ChildTitle">My Rockets</h2>
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
      <div className="MyProfileChild">
        <h2 className="ChildTitle">My Missions</h2>
        {reservedMissions.length === 0 ? (
          <>
            <span>No Missions Reserved, yet</span>
          </>
        ) : (
          reservedMissions.map(({ missionId: id, mission_name }) => (
            <ul key={id} className="list">
              <li key={id} className="listChild">
                <h4>{mission_name}</h4>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default UserProfile;
