import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Plugin for React support
  ],
  jsx: 'react', // Ensure Vite knows you are using React JSX
});
