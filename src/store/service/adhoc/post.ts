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
      query: ({ limit, offset }) =>
        module({ body: { limit, offset }, subModule: "getSampleJdJSON" }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.jdList.push(...newItems.jdList);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.offset !== previousArg?.offset;
      },
    }),
  }),
});

export const { useGetSampleJdJSONQuery } = AdhocAPISlice;
