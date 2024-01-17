import type {Preview} from '@storybook/react';
import '@/src/web/index.css';
// import i18n from './i18next';
// import FontAwesome from '../node_modules/react-native-vector-icons/FontAwesome';
// import IconFont from '../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf';

const iconFontStyle = ""; /*`
  @font-face {
    src: url(${IconFont});
    font-family: FontAwesome;
  }
`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyle;
} else {
  style.appendChild(document.createTextNode(iconFontStyle));
}
document.head.appendChild(style);
*/

/*
import withAPIProvider from './withAPIProvider';
import { initialize, mswLoader } from 'msw-storybook-addon';
import mswHandlers from '@/src/services/mswHandlers';
initialize(); // Initialize MSW
import withAppProvider from './withAppProvider';
import withUserProvider from './withUserProvider';
import withWorkspaceProvider from './withWorkspaceProvider';
import withMessageProvider from "./withMessageProvider";
*/
import withProvider from './withProvider';

const preview: Preview = {
  globals: {
    locale: 'ja_JP',
    locales: {
      en_US: 'English (US)',
      ja_JP: '日本語',
    },
  },
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // i18n,
  },
  loaders: [
  ],
  decorators: [
    withProvider,
  ],
};

export default preview;
