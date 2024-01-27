import type {Preview} from '@storybook/react';
// import '@/src/web/index.css';
import { withScreenshot } from 'storycap';
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
    screenshot: {
    	delay: 10,
	    fullPage: false,
    }
    // i18n,
  },
  loaders: [
  ],
  decorators: [
    withProvider,
    withScreenshot
  ],
};

export default preview;
