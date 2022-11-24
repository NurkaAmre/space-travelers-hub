import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rocketsSlice/rocketsSlice';

// root Reducer
const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;