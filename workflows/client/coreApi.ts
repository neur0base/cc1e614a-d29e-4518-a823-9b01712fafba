// @ts-nocheck
export { api } from "./baseApi";
import { api } from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({}),
  overrideExisting: false,
});
export { injectedRtkApi as coreApi };
export const {} = injectedRtkApi;
