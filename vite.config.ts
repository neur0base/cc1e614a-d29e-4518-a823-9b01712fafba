import { defineConfig, loadEnv } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path, { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const root = resolve(__dirname, `./src/`);
  const env = loadEnv(mode, process.cwd(), '');
  const packageJson: { dependencies: Record<string, string> } = JSON.parse(
    fs.readFileSync('package.json').toString(),
  );
  return {
    root,
    base: './',
    plugins: [
      viteExternalsPlugin({
        'react-native$': 'react-native',
      }),
      react({
        exclude: /\.stories\.tsx?$/,
        babel: {
          parserOpts: {
            plugins: ['decorators-legacy', 'classProperties'],
          },
        },
      }),
    ],

    server: {
      port: Number(process.env.PORT) || 9020,
    },

    build: {
      outDir: resolve(
        __dirname,
        'dist',
        process?.env?.ROUTING_ID || 'default_web_routing',
      ),
      rollupOptions: {
        input: resolve(root, 'index.html'),
      },
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),

        'react-native': 'react-native-web',
        'react-native-push-notification': path.resolve(
          __dirname,
          './src/temp/NotProvided/PushNotification.tsx',
        ),
        'react-native-fs': path.resolve(
          __dirname,
          './src/temp/NotProvided/RNFS.tsx',
        ),
        'react-native-permissions': path.resolve(
          __dirname,
          './src/temp/NotProvided/RNPermissions.tsx',
        ),
      },
      extensions: ['.web.js', '.js', '.ts', '.jsx', '.tsx'],
      dedupe: Object.keys(packageJson.dependencies),
    },

    define: {
      'process.env': {
        ENVIRONMENT: `"${process?.env?.ENVIRONMENT || 'development'}"`,
        API_ENDPOINT: `"${process?.env?.API_ENDPOINT}"`,
        API_APP_ID: `"${process?.env?.API_APP_ID}"`,
        API_APP_KEY: `"${process?.env?.API_APP_KEY}"`,
      },
    },

    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: ['.web.js', '.js', '.ts', '.jsx', '.tsx'],
      },
    },
  };
});
