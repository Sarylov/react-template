import { baseApi } from "@/shared/api";
import { USER_TAG } from "@/shared/api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: `/users/me?populate=avatar`,
        method: "GET",
      }),
      providesTags: [USER_TAG],
    }),
    updateUsername: build.mutation({
      query: ({ newUsername, id }: { newUsername: string; id: number }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { username: newUsername },
      }),
      invalidatesTags: [USER_TAG],
    }),
    updateEmail: build.mutation({
      query: ({ newEmail, id }: { newEmail: string; id: number }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { email: newEmail },
      }),
      invalidatesTags: [USER_TAG],
    }),
    updatePhone: build.mutation({
      query: ({ newPhone, id }: { newPhone: string; id: number }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { phone: newPhone },
      }),
      invalidatesTags: [USER_TAG],
    }),
    deleteMyAccount: build.mutation({
      query: ({ id }: { id: number }) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [USER_TAG],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUsernameMutation,
  useUpdateEmailMutation,
  useUpdatePhoneMutation,
  useDeleteMyAccountMutation,
} = userApi;
