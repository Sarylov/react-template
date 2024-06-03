import { baseApi } from "@/shared/api";
import { SESSION_TAG, USER_TAG } from "@/shared/api";

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `/auth/local`,
        method: "POST",
        body,
      }),
      invalidatesTags: [SESSION_TAG, USER_TAG],
      transformErrorResponse(baseQueryReturnValue) {
        if (baseQueryReturnValue.status === 400)
          return "Не верный логин или пароль";
      },
    }),
    registration: build.mutation({
      query: (body) => ({
        url: `/auth/local/register`,
        method: "POST",
        body,
      }),
      invalidatesTags: [SESSION_TAG, USER_TAG],
      transformErrorResponse(baseQueryReturnValue) {
        if (baseQueryReturnValue.status === 400)
          return "Пользователь с таким именем, почтой или телефоном уже существует";
      },
    }),
  }),
});

export const { useLoginMutation } = sessionApi;
