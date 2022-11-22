import { configureStore } from '@reduxjs/toolkit';

import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;