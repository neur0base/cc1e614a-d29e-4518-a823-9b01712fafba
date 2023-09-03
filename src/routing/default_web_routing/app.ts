import { LayoutComponentConfig, AppConfig } from '@neur0base/app-sdk-core';

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