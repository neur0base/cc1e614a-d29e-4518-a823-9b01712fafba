
'use client';
import {
  AppContextProvider,
  BackendProvider,
  UIProvider
} from '@neur0base/app-sdk-core';
import { NavigationProvider } from '@neur0base/app-sdk-router';
import instances from '@/src/config/dataModels';
import themeColors from '@/src/config/themeColors';
import locales from '@/src/locales';
import * as routings from '@/src/routing/index.config';
import * as routes from '@/src/routing/routes';
import { backend } from '@/web/backend';

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppContextProvider 
        config={routings}
        backend={backend}
        instances={instances}
        routes={Object.keys(routings).map((routingID) => routings[routingID]).flat()}
        components={Object.keys(routes).map((routeID) => routes[routeID]).flat()}
        theme={{
          colors: themeColors,
        }}
        locales={locales}
        >
        <UIProvider
            themeColors={themeColors}
            locales={locales}>
            <BackendProvider client={backend}>
              <NavigationProvider>
             {children}
             </NavigationProvider>
            </BackendProvider>
        </UIProvider>
    </AppContextProvider>
  )
}
