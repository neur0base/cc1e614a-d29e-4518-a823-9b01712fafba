// @ts-nocheck
import {
  AppContextProvider,
  BackendProvider,
  UIProvider
} from '@neur0base/app-sdk-core';
import Router from '@neur0base/app-sdk-router';
import { initialize } from '@echopf/sdk';

import instances from '@/src/config/instances';
import themeColors from '@/src/config/themeColors';
import locales from '@/src/locales';
import appConfig from './app';
import routes from './routes';
import * as components from './routes/index';
import DefaultLayoutComponent from '@/web/DefaultLayoutComponent';

const backend = initialize(
  process.env.API_ENDPOINT,
  process.env.API_APP_ID,
  process.env.API_APP_KEY,
);

export default function App(): JSX.Element {
  const layout = appConfig?.layout || "DefaultLayoutComponent";
  return (
    <AppContextProvider 
        config={{
          ...appConfig,
          layout
        }}
        backend={backend}
        instances={instances}
        routes={routes}
        components={{
          ...components,
          DefaultLayoutComponent,
        }}
        theme={{
          colors: themeColors,
        }}
        locales={locales}
        >
        <UIProvider
            themeColors={themeColors}
            locales={locales}>
            <BackendProvider client={backend}>
                <Router />
            </BackendProvider>
        </UIProvider>
    </AppContextProvider>
  );
}
