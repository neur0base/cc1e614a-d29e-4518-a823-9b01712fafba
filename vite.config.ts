import { defineConfig, loadEnv } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const packageJson: { dependencies: Record<string, string> } = JSON.parse(
    fs.readFileSync('package.json').toString(),
  );
  return {
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

    resolve: {
      alias: {
        'react-native': 'react-native-web',
      },
      extensions: ['.web.js', '.js', '.ts', '.jsx', '.tsx'],
      dedupe: Object.keys(packageJson.dependencies),
    },
    define: {
      'process.env': env,
    },
    optimizeDeps: {
      esbuildOptions: {
        resolveExtensions: ['.web.js', '.js', '.ts', '.jsx', '.tsx'],
      },
    },
  };
});
