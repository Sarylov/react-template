import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/user-api";

type TUserInfo = {
  id: number | null;
  phone: string | null;
  username: string | null;
  email: string | null;
};

const initialState: TUserInfo = {
  id: null,
  phone: null,
  username: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUserInfo.matchFulfilled,
      (state: TUserInfo, { payload }) => {
        if (payload.id === state.id) {
          state.id = payload.id;
        }
        if (payload.phone) {
          state.phone = payload.phone;
        }
        if (payload.username) {
          state.username = payload.username;
        }
        if (payload.email) {
          state.email = payload.email;
        }
      },
    );
  },
});

export const selectUsername = (state: RootState) => state.user.username;
export const selectEmail = (state: RootState) => state.user.email;
export const selectPhone = (state: RootState) => state.user.phone;
export const selectUserId = (state: RootState) => state.user.id;
export const selectUserTickets = (state: RootState) => state.user.tickets;
