import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path, { resolve } from 'path';

const extensions = [
  '.web.tsx',
  '.web.ts',
  '.web.js',
  '.tsx',
  '.ts',
  '.js',
]

export default defineConfig(({ mode }) => {
  const root = resolve(__dirname, `./web/`);
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = mode === 'production';
  const packageJson = JSON.parse(
    fs.readFileSync('package.json').toString(),
  );
  return {
    root,
    base: '/',
    plugins: [
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
      /*fs: {
        allow: ['/'],
      }*/
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
      sourcemap: true,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@neur0base/app-sdk-router': '@neur0base/app-sdk-next-router',
        '@jenify_ai/app-sdk-router': '@neur0base/app-sdk-next-router',
        '@jenify_ai/app-sdk-core': '@neur0base/app-sdk-core',
        '@jenify_ai/app-sdk-ui': '@neur0base/app-sdk-ui',
        '@router': '@neur0base/app-sdk-next-router',
        '@core': '@neur0base/app-sdk-core',
        '@ui': '@neur0base/app-sdk-ui',
        'react-native': 'react-native-web',
      },
      extensions,
      dedupe: Object.keys(packageJson.dependencies),
    },

    define: {
      '__dirname': JSON.stringify(''),
      'process.env': {
        ENVIRONMENT: JSON.stringify(env.ENVIRONMENT || (isProd ? "production" : "development")),
        API_ENDPOINT: JSON.stringify(env.API_ENDPOINT || "ｊっｈｇｈｇ"),
        API_APP_ID: JSON.stringify(env.API_APP_ID || ""),
        API_APP_KEY: JSON.stringify(env.API_APP_KEY || ""),
      },
    },

    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: extensions,
      },
    },
  };
});
