import { defineConfig } from 'cypress';
// eslint-disable-next-line import/extensions
import webpackConfig from './webpack.dev.js';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
  },

  env: {
  },
});
