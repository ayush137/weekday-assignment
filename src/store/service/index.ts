import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weekday.technology",
    prepareHeaders: (headers) => {
      const new_headers = headers.append("Content-Type", "application/json");
      return new_headers;
    },
  }),
  tagTypes: ["adhoc"],
  endpoints: () => ({}),
});

export default apiSlice;
