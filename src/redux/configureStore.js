import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { handleMissionReducer } from './Mission/mission';

const reducers = combineReducers({
    mission: handleMissionReducer,
});

const storeConfig = createStore(
    reducers,
    applyMiddleware(thunk),
);
export default storeConfig;