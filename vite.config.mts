import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'driftdb',
              test: /node_modules\/driftdb-react\//,
            },
            {
              name: 'react',
              test: /node_modules\/(react|react-dom)\//,
            },
          ],
        },
      },
    },
  },

  plugins: [createHtmlPlugin(), react()],

  resolve: {
    alias: {
      src: resolve(import.meta.dirname, 'src'),
    },
  },
});
