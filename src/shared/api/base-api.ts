import { createApi } from "@reduxjs/toolkit/query/react";
import * as tags from "./tags";
import { baseQueryWithLogout } from "./base-query-with-logout";

export const baseApi = createApi({
  tagTypes: [tags.SESSION_TAG, tags.USER_TAG],
  reducerPath: "api",
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
});
