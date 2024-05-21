import { defineConfig, loadEnv } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
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
  const packageJson: { dependencies: Record<string, string> } = JSON.parse(
    fs.readFileSync('package.json').toString(),
  );
  return {
    root,
    base: '/',
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
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@neur0base/app-sdk-router': '@neur0base/app-sdk-react-router',
        '@jenify_ai/app-sdk-router': '@neur0base/app-sdk-react-router',
        '@jenify_ai/app-sdk-core': '@neur0base/app-sdk-core',
        '@jenify_ai/app-sdk-ui': '@neur0base/app-sdk-ui',
        'react-native': 'react-native-web',
      },
      extensions,
      dedupe: Object.keys(packageJson.dependencies),
    },

    define: {
      'process.env': {
        ENVIRONMENT: env?.ENVIRONMENT || "development",
        ROUTING_ID: env?.ROUTING_ID || "default_web_routing",
        API_ENDPOINT: env?.API_ENDPOINT || "",
        API_APP_ID: env?.API_APP_ID || "",
        API_APP_KEY: env?.API_APP_KEY || "",
      },
    },

    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: extensions,
      },
    },
  };
});
