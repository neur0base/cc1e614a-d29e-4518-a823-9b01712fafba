export const framework = {
  name: '@storybook/react-vite',
  options: {},
};

export const staticDirs = ['../public'];

export const stories = [
  '../src/**/*.mdx',
  '../src/**/*.stories.@(js|jsx|ts|tsx)',
  '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
  '../src/**/*.story.@(js|jsx|ts|tsx)',
  '../src/**/**/*.story.@(js|jsx|ts|tsx)',
];

export const addons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  // '@storybook/addon-interactions',
  // 'storybook-react-i18next',
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  },
];

export const core = {
  builder: {
    name: '@storybook/builder-vite',
    options: {
      viteConfigPath: './vite.config.ts',
    },
  },
};

export const docs = {
  autodocs: true,
};

export const typescript = {
  reactDocgen: 'react-docgen-typescript',
};

export const viteFinal = async (config, { configType }) => {
  return config;
};
