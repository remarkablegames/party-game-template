import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  resolve: {
    alias: {
      src: resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [createHtmlPlugin(), react()],
});
