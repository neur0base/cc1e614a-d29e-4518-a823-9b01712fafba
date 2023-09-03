import { RouteConfig } from '@neur0base/app-sdk-core';

const routes: RouteConfig[] = [
  {
      id: "home",
      title: "Single Monadic Component",
      component: {
          instanceID: "testInstance",
          modelID: "testModel",
          component: {
              componentID: "TestComponent"
          },
          attributes: {},
      },
      
      needLogin: false,
      stacks: [],
      web: {
          url: "/",
      }
  },

  {
      id: "home2",
      title: "Mutiple Monadic Components",
      component: {
          layout: {
              component: {
                  componentID: "ContentsLayoutComponent"
              }
          },
          components: [
              { component : { componentID: "TestComponent" } },
              { component : { componentID: "TestComponent2" } }
          ]
      },

      needLogin: false,
      stacks: [],
      web: {
          url: "/home2",
          // header: false
      }
  }
];

export default routes;
