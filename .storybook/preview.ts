import type { Preview } from '@storybook/react';
// import '@/src/web/index.css';
import { withScreenshot } from 'storycap';
import withProvider from './withProvider';

import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

import '../src/tailwind.css';

export function appendStyleSheet(style: string) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  if ((styleElement as any).styleSheet) {
    (styleElement as any).styleSheet.cssText = style;
  } else {
    styleElement.appendChild(document.createTextNode(style));
  }
  document.head.appendChild(styleElement);
}

appendStyleSheet(`@font-face {
  src: url(${FontAwesome});
  font-family: FontAwesome;
}`);
appendStyleSheet(`@font-face {
  src: url(${Ionicons});
  font-family: Ionicons;
}`);
appendStyleSheet(`@font-face {
  src: url(${MaterialIcons});
  font-family: MaterialIcons;
}`);

const preview: Preview = {
  globals: {
    locale: 'ja_JP',
    locales: {
      en_US: 'English (US)',
      ja_JP: '日本語',
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    screenshot: {
      delay: 10,
      fullPage: false,
    },
    // i18n,
  },
  loaders: [],
  decorators: [
    withProvider,
    withScreenshot(),
  ],
};

export default preview;
