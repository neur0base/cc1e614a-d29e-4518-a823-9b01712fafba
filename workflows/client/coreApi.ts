// @ts-nocheck
export { api } from "./baseApi";
import { api } from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAndSaveData: build.mutation<
      GetAndSaveDataApiResponse,
      GetAndSaveDataApiArg
    >({
      query: (queryArg) => ({
        url: `/get-and-save-data`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getStdMean: build.mutation<GetStdMeanApiResponse, GetStdMeanApiArg>({
      query: (queryArg) => ({
        url: `/get-std-mean`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as coreApi };
export type GetAndSaveDataApiResponse =
  /** status 200 Data saved successfully. */ {
    /** Unique identifier for the saved data. */
    id?: string;
  };
export type GetAndSaveDataApiArg = {
  body: {
    /** Text data to be saved. */
    text?: string;
  };
};
export type GetStdMeanApiResponse =
  /** status 200 Data calculation successful. */ {
    /** average value */
    mean?: number;
    /** standard deviation */
    std?: number;
  };
export type GetStdMeanApiArg = {
  body: {
    dataArray?: number[];
  };
};
export const { useGetAndSaveDataMutation, useGetStdMeanMutation } =
  injectedRtkApi;
