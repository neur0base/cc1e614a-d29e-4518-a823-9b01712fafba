import type { Preview } from '@storybook/react';
import { withScreenshot } from 'storycap';
import withProvider from './withProvider';
import '../web/globals.css';

const preview: Preview = {
  globals: {
    locale: 'ja_JP',
    locales: {
      en_US: 'English (US)',
      ja_JP: '日本語',
    },
  },
  parameters: {
    actions: {},
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
    nextjs: {
      appDirectory: true,
    },
  },
  loaders: [],
  decorators: [
    withProvider,
    withScreenshot(),
  ],
};

export default preview;
