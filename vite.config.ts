import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
      // This plugin is required if you need to inject a string
      // into a variable in index.html written as <%= VARIABLE_NAME %>
      createHtmlPlugin({
        viteNext: true,
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE || pkg.name,
          },
        },
      }),
    ],
  };
});
