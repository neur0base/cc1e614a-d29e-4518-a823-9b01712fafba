import type {StorybookConfig} from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
    '../src/**/**/*.story.@(js|jsx|ts|tsx)',
  ],
  // staticDirs: ['../assets'], //👈 Configures the static asset folder in Storybook
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // 'storybook-react-i18next',
  ],
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config, {configType}) => {
    config.devtool = 'source-map';
    config.resolve.alias = {
      'react-native$': 'react-native-web',
    };
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });
    config.module?.rules?.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(
        __dirname,
        '../node_modules/react-native-vector-icons/FontAwesome5.js',
      ),
    });
    return config;
  },
};
export default config;
