import { getModule } from "../../../utils/helper";
import apiSlice from "../index";
import { TGetSampleJdJSONPayload, TGetSampleJdJSONResponse } from "./type";

const module = getModule("adhoc", "POST");
export const AdhocAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSampleJdJSON: builder.query<
      TGetSampleJdJSONResponse,
      TGetSampleJdJSONPayload
    >({
      query: ({ body }) => module({ body, subModule: "getSampleJdJSON" }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.jdList.push(...newItems.jdList);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.body.offset !== previousArg?.body.offset;
      },
    }),
  }),
});

export const { useGetSampleJdJSONQuery } = AdhocAPISlice;
