import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    title: 'Ottimizzare le prestazioni delle React app',
  },
  plugins: [pluginReact()],
});
