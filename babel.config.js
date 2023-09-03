module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': '.',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
