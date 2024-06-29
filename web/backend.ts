import { initialize } from '@echopf/sdk';

export const backend = initialize(
  process.env.API_ENDPOINT,
  process.env.API_APP_ID,
  process.env.API_APP_KEY,
);