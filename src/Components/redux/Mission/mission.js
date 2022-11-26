const apiUrl = "https://api.spacexdata.com/v3/missions";
const RETRIEVE_MISSION = "SPACE-STORE/Mission/RETRIEVE_MISSION";
const JOIN_MISSION = "SPACE-STORE/Mission/JOIN_MISSION";
const LEAVE_MISSION = "SPACE-STORE/Mission/LEAVE_MISSION";

const InitialState = {
  missions: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: 'mission',
};

const RetrieveMission = () => (dispatch) => {
  fetch(apiUrl).then((response) => response.json()).then((data) => {
    console.log(data)
    const missionItems = Object.keys(data).map((key) => {
      const missionItem = data[key];
      return {
        id: key,
        ...missionItem,
        status: false,
      };
    });
    dispatch({
      type: RETRIEVE_MISSION,
      payload: missionItems,
    });
  })
};

const handleMissionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case RETRIEVE_MISSION:
      return {
        ...state,
        missions: action.payload,
        status: 'succeeded',
      }
    case JOIN_MISSION:
      // const newArray = [...action.missions];
      // newArray[action.missionid].status = true;
      return {
        ...state,
        missions: [
          ...state.missions.map((mission) => (
            (mission.id !== action.missionid) ? mission : {
              ...mission,
              status: true,
            }
          )),
        ],
      }
    case LEAVE_MISSION:
      console.log(state);
      // const newArray2 = [...action.missions];
      // newArray2[action.missionid].status = false;
      return {
        ...state,
        missions: [
          ...state.missions.map((mission) => (
            (mission.id !== action.missionid) ? mission : {
              ...mission,
              status: false,
            }
          )),
        ],
      }
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

export { handleMissionReducer, RetrieveMission, JoinMission, LeaveMission };
