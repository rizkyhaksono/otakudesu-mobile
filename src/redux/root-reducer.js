import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "./axios-base-query";

const baseApiSlice = createSlice({
  name: baseApi,
  initialState: {},
  reducers: {},
});

const rootReducer = combineReducers({
  baseApi: baseApiSlice.reducer,
});

export default rootReducer;

export const storage = AsyncStorage;

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};
