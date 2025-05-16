import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

const vitestConfig = {
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  },
};

export default mergeConfig(
  defineConfig({
    plugins: [react()],
  }),
  vitestConfig
);
