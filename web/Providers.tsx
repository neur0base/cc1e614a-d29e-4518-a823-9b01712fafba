
'use client';
import {
  AppContextProvider,
  BackendProvider,
  UIProvider
} from '@neur0base/app-sdk-core';
import { NavigationProvider } from '@neur0base/app-sdk-router';
import instances from '@/src/config/instances';
import themeColors from '@/src/config/themeColors';
import locales from '@/src/locales';
import appConfig from '@/src/routing/TwitterLikeApp/app';
import routes from '@/src/routing/TwitterLikeApp/routes';
import * as components from '@/src/routing/TwitterLikeApp/routes/index';
import { backend } from '@/web/backend';

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppContextProvider 
        config={appConfig}
        backend={backend}
        instances={instances}
        routes={routes}
        components={components}
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