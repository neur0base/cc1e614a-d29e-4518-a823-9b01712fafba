import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
    '../src/**/**/*.story.@(js|jsx|ts|tsx)',
  ],
  // staticDirs: ['../assets'], //👈 Configures the static asset folder in Storybook
  addons: [
    'storycap',
    '@storybook/jest',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // 'storybook-react-i18next',
  ],
  docs: {
    autodocs: false,
  },
  viteFinal: async (config, { configType }) => {
    // @ts-ignore
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
    // @ts-ignore
    config.module?.rules?.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(
        __dirname,
        '../node_modules/react-native-vector-icons/FontAwesome5.js',
      ),
    });
    // @ts-ignore
    config.module?.rules?.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              [
                require('@babel/preset-react').default,
                { runtime: 'automatic' },
              ],
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    });
    return config;
  },
};
