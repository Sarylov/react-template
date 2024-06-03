import { combineReducers } from "@reduxjs/toolkit";
import { userSlice, sessionSlice } from "@/entities";
import { baseApi } from "@/shared/api";

export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
