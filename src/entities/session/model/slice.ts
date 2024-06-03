import { createSlice } from "@reduxjs/toolkit";
import { sessionApi } from "../api/session-api";

type SessionSliceState = {
  isAuthorized: boolean;
  accessToken: string | null;
  isOpenFromMobileApp: boolean;
};

function getInitialState(): SessionSliceState {
  const token = localStorage.getItem("accessToken");
  const isOpenFromMobileApp = window.navigator.userAgent.includes("Elistory");
  if (token)
    return {
      isAuthorized: true,
      accessToken: token,
      isOpenFromMobileApp,
    };
  return {
    isAuthorized: false,
    accessToken: null,
    isOpenFromMobileApp,
  };
}

export const sessionSlice = createSlice({
  name: "session",
  initialState: getInitialState(),
  reducers: {
    clearSessionData: (state) => {
      console.log("clear session data");
      localStorage.removeItem("accessToken");
      state.accessToken = null;
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        sessionApi.endpoints.login.matchFulfilled,
        (state: SessionSliceState, { payload }) => {
          if (payload.jwt) {
            localStorage.setItem("accessToken", payload.jwt);
            state.isAuthorized = true;
            state.accessToken = payload.jwt;
          }
        },
      )
      .addMatcher(
        sessionApi.endpoints.registration.matchFulfilled,
        (state: SessionSliceState, { payload }) => {
          if (payload.jwt) {
            localStorage.setItem("accessToken", payload.jwt);
            state.isAuthorized = true;
            state.accessToken = payload.jwt;
          }
        },
      );
  },
});

export const selectIsAuthorized = (state: RootState) =>
  state.session.isAuthorized;

export const selectIsOpenFromMobileApp = (state: RootState) =>
  state.session.isOpenFromMobileApp;

export const { clearSessionData } = sessionSlice.actions;
