const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ビルド時のESLintチェックを無効化
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ビルド時の型チェックを無効化
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  
    // エイリアスの設定
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      /*
      'react-native-twilio-video-webrtc': path.resolve(__dirname, './src/temp/NotProvided/index.tsx'),
      'react-native-push-notification': path.resolve(__dirname, './src/temp/NotProvided/PushNotification.tsx'),
      'react-native-fs': path.resolve(__dirname, './src/temp/NotProvided/RNFS.tsx'),
      'react-native-permissions': path.resolve(__dirname, './src/temp/NotProvided/RNPermissions.tsx'),
      */
      '@/src': path.resolve(__dirname, './src'),
    };

    // 拡張子の設定
    config.resolve.extensions = [
      '.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js',
      ...config.resolve.extensions,
    ];

    config.module.rules.push(
      {
        test: /\.js$|tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          ...compileNodeModules,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ["@babel/preset-env", {
                  targets: {
                    node: "current"
                  }
                }],
                "@babel/preset-react",
                "@babel/preset-typescript",
                'module:metro-react-native-babel-preset'
              ],
              plugins: [
                ['react-native-web'],
              ],
            }
          },
        ],
      },
    );

    // プラグインの追加
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(dev),
      }),
      new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
      new webpack.DefinePlugin({
        'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT || "development"),
        'process.env.API_ENDPOINT': JSON.stringify(process.env.API_ENDPOINT),
        'process.env.API_APP_ID': JSON.stringify(process.env.API_APP_ID),
        'process.env.API_APP_KEY': JSON.stringify(process.env.API_APP_KEY),
      })
    );

    return config;
  },
  // その他のNext.js固有の設定
  // 例: ページのカスタムディレクトリを指定
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

// compileNodeModules の定義（webpack.config.js から移植）
const compileNodeModules = [
  "react-native-vector-icons",
  // ... 他のモジュール
].map(moduleName => path.resolve(__dirname, `node_modules/${moduleName}`));

module.exports = nextConfig;
