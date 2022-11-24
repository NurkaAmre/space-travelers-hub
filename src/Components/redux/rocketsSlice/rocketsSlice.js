import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../API/api';

// Actions
const GET_ROCKETS = 'GET_ROCKETS';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
  message: 'rocket',
};

// Thunks
export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  try {
    return await api.fetchRockets();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
        status: 'succeeded',
      }))
      .addCase(getRockets.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
    }));
},
});

export const allRockets = (state) => state.rockets.rockets;
export const allStatus = (state) => state.rockets.status;
export const allMessages = (state) => state.rockets.message;

const rocketsReducer = rocketsSlice.reducer;
export default rocketsReducer;