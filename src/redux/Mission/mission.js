import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';
const RETRIEVE_MISSION = 'SPACE-STORE/Mission/RETRIEVE_MISSION';

const InitialState = [];

const RetrieveMission = () => (dispatch) => {
  axios
    .get(apiUrl)
    .then((response) => {
      // console.log(response.data);
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

const handleMissionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case RETRIEVE_MISSION:
      return [...action.payload];
    default: return state;
  }
};

export { handleMissionReducer, RetrieveMission };
