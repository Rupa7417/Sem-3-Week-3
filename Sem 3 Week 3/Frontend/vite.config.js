import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Use this to ensure all .js files with JSX are parsed as .jsx
    loader: 'jsx',
    include: [
      // Only include files inside `src` folder
      'src/**/*.js',
      'src/**/*.jsx',
    ],
    exclude: [],
  },
});
