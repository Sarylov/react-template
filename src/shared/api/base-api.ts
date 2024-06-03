import { createApi } from "@reduxjs/toolkit/query/react";
import {
  ARTICLES_TAG,
  EVENT_TAG,
  FAVORITE_PLACES_TAG,
  ROUTE_TAG,
  SESSION_TAG,
  TICKETS_TAG,
  TRIP_TAG,
  USER_HOME_TAG,
  USER_TAG,
} from "./tags";
import { baseQueryWithLogout } from "./base-query-with-logout";

export const baseApi = createApi({
  tagTypes: [
    SESSION_TAG,
    USER_TAG,
    EVENT_TAG,
    TICKETS_TAG,
    FAVORITE_PLACES_TAG,
    ARTICLES_TAG,
    TRIP_TAG,
    ROUTE_TAG,
    USER_HOME_TAG,
  ],
  reducerPath: "api",
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
});
