import { combineReducers } from "@reduxjs/toolkit"
import jobsReducer from "./jobsReducer"

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  jobsReducer,
})

export default reducers
