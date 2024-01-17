import React from 'react';
import { initialize } from '@echopf/sdk';
import instances from '../src/config/instances';
import themeColors from '../src/config/themeColors';
import locales from '../src/locales';
import * as mockModels from '../src/components/mockModels';
import { AppConfig, LayoutComponentConfig } from '@neur0base/app-sdk-core';
import * as components from '../src/components/views';
import { AppContextProvider, UIProvider } from '@neur0base/app-sdk-core';

export const appConfig: AppConfig = {
  name: 'Jenio Temp App',
  logo: {
    url: 'https://www.jenio.co/wp-content/uploads/2020/08/jenio-logo.png',
  },
  auth: {
    needLogin: false,
    memberInstanceID: 'members',
    afterLoginRouteID: 'home',
    loginRouteID: 'login',
  },
  menuSections: [
    {
      name: 'Main',
      items: [
        {
          title: 'Home',
          routeID: 'home',
        },
      ],
    },
  ],
};

export const layout: LayoutComponentConfig = {
  component: {
      componentID: "CommonLayoutComponent"
  }
};

export const mainRouteID: string = "home";

export default function withBackendProvider(Story, context) {
  const backendClient = initialize("cucom3.echopf.com", "d979cfc8289bba8087c852393718fa7b", "91461eaf48dd50c72ebde9e088c43e2e");

  return (
    <AppContextProvider 
      config={appConfig}
      backend={backendClient}
      instances={instances}
      routes={[]}
      components={components}
      models={mockModels}
      layout={layout}
      /*
      languages={languages}
      defaultLanguage={defaultLanguage}
      theme={theme}
      */
      >
      <UIProvider>
        <Story {...context} />
      </UIProvider>
    </AppContextProvider>
  );
}
