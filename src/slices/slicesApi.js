import { apiSlice } from "./apiSlice";
const URL = "/posts";

export const slicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApi: builder.query({
      query: () => ({
        url: URL,
        method: "GET",
      }),
    }),
    getDetailApi: builder.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
    }),
    updateDataApi: builder.mutation({
      query: ({ id, newData }) => ({
        url: `${URL}/${id}`,
        method: "PUT",
        body: newData,
      }),
    }),
    createDataApi: builder.mutation({
      query: (data) => ({
        url: URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteDataApi: builder.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetApiQuery,
  useGetDetailApiQuery,
  useUpdateDataApiMutation,
  useDeleteDataApiMutation,
  useCreateDataApiMutation,
} = slicesApi;
