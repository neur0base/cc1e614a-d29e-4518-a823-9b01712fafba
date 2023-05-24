const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets} = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // e.g. 'react-native-gesture-handler',
  "react-native-vector-icons",
  "react-native-snap-carousel",
  "react-native-reanimated",
  "react-native-raw-bottom-sheet",
  "react-native-ratings",
  "react-native-qrcode-svg",
  "react-native-picker-select",
  "react-native-maps",
  "react-native-keychain",
  "react-native-image-picker",
  "react-native-gifted-chat",
  // "react-native-fs",
  "react-native-elements",
  "react-native-animatable",
  "native-base",
  "@react-native-picker",
  "@codler/react-native-keyboard-aware-scroll-view",
  "react-native-typing-animation",
  "react-native-parsed-text",
  "react-native-lightbox",
  "react-native-easy-grid",
  "react-native-drawer",
  "react-native-dialog",
  "@react-native-community",
  "react-native-web",
  "@neur0base/app-sdk/lib/typescript/",
  "@neur0base/app-sdk/lib/module"
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const devServer = {
    compress: false,
    port: process.env.PORT || 9010,
    historyApiFallback: true
};

const exampleAppConfig = {
  cache: false,
    entry: [
      'babel-polyfill',
      './src/main.web.tsx',
    ],
    output: {
        filename: './public/javascript/bundle.js',
        publicPath: '/',
    },
    devServer,
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            {
              test: /\.js$|tsx?$/,
              // Add every directory that needs to be compiled by Babel during the build.
              include: [
                path.resolve(appDirectory, 'src'),
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
                        [
                          'babel-plugin-inline-import',
                          {
                            extensions: ['.svg'],
                          },
                        ],
                        ['react-native-reanimated/plugin'],
                        ['react-native-web'],
                        ["module-resolver", {
                          "alias": {
                            "^react-native$": "react-native-web",
                            '@/src': path.resolve(__dirname, './src'),
                          }
                        }],
                        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
                      ],
                    }
                },
              ],
            },
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    'css-loader',
                ],
                sideEffects: true
            },
            {
                test: /\.(woff|woff2|eot|otf)$/,
                use : [
                    'file-loader',
                ],
            },
            {
                test   : /\.(jpe?g|png|gif|svg)$/i,
                loader : 'url-loader',
                options: {},
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
            },
        ],
    },
    resolve: {
      symlinks: true,
      extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
      alias: {
        'react-native$': 'react-native-web',
        'react-native-twilio-video-webrtc': path.resolve(__dirname, './src/components/NotProvided/index.tsx'),
        'react-native-push-notification': path.resolve(__dirname, './src/components/NotProvided/PushNotification.tsx'),
        'react-native-fs': path.resolve(__dirname, './src/components/NotProvided/RNFS.tsx'),
        'react-native-permissions': path.resolve(__dirname, './src/components/NotProvided/RNPermissions.tsx'),
        react: path.resolve(
          __dirname,
          "./node_modules/react"
        ),
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: "index.min.css"
      }),
      new HtmlWebpackPlugin({
        template: path.join(appDirectory, './src/web/index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        // See: https://github.com/necolas/react-native-web/issues/349
        __DEV__: JSON.stringify(true),
      }),
      new webpack.EnvironmentPlugin({ JEST_WORKER_ID: null }),
      new webpack.DefinePlugin({ process: { env: {} } })
    ],
};


module.exports = [exampleAppConfig];
