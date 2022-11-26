import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { handleMissionReducer } from "./Mission/mission";
import rocketsReducer from "./rockets/rocketsSlice";

// root Reducer
const rootReducer = combineReducers({
  rockets: rocketsReducer,
  mission: handleMissionReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;
