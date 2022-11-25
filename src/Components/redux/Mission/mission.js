import axios from "axios";

const apiUrl = "https://api.spacexdata.com/v3/missions";
const RETRIEVE_MISSION = "SPACE-STORE/Mission/RETRIEVE_MISSION";
const JOIN_MISSION = "SPACE-STORE/Mission/JOIN_MISSION";
const LEAVE_MISSION = "SPACE-STORE/Mission/LEAVE_MISSION";

const InitialState = [];

const handleMissionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case RETRIEVE_MISSION:
      console.log(action.payload);
      return [...action.payload];
    case JOIN_MISSION:
      const newArray = [...action.missions];
      newArray[action.missionid].status = true;
      return [...newArray];
    case LEAVE_MISSION:
      const newArray2 = [...action.missions];
      newArray2[action.missionid].status = false;
      return [...newArray2];
    default:
      return state;
  }
};

const JoinMission = (missionid, missions) => ({
  type: JOIN_MISSION,
  missionid,
  missions,
});

const LeaveMission = (missionid, missions) => ({
  type: LEAVE_MISSION,
  missionid,
  missions,
});

const RetrieveMission = () => (dispatch) => {
  axios.get(apiUrl).then((response) => {
    //console.log(response.data);
    const missionItems = Object.keys(response.data).map((key) => {
      const missionItem = response.data[key];
      return {
        id: key,
        ...missionItem,
      };
    });
    dispatch({
      type: RETRIEVE_MISSION,
      payload: missionItems,
    });
  });
};

export { handleMissionReducer, RetrieveMission, JoinMission, LeaveMission };
