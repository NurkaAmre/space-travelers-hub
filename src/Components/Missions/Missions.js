import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  JoinMission,
  LeaveMission,
  RetrieveMission,
} from "../redux/Mission/mission";
import Mission from "./mission";
import "bootstrap/dist/css/bootstrap.min.css";

const Missions = () => {
  const missionItems = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RetrieveMission());
  }, [dispatch]);

  const handleClick = (itemId, mArr, stat) => {
    if (stat === true) {
      dispatch(LeaveMission(itemId, mArr));
    } else {
      dispatch(JoinMission(itemId, mArr));
    }
  };

  return (
    <div className="container mt-5 pt-5 ">
      <table className="table  table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col" className="w-50">
              Description
            </th>
            <th scope="col">Status</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {missionItems.map((item) => (
            <Mission
              key={item.id}
              id={item.id}
              name={item.mission_name}
              desc={item.description}
              status={item.status}
              handleClick={handleClick}
              missionsL={missionItems}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
