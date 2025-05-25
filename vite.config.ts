import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

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

const basePath = process.env.DEPLOY_PATH ? `/${process.env.DEPLOY_PATH}/` : '/';

export default mergeConfig(
  defineConfig({
    base: basePath,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }),
  vitestConfig
);
