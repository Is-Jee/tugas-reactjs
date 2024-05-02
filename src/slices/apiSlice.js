import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" })

const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Api"],
    endpoints: (builder) => ({})
})

export {apiSlice}