/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		checker({
			overlay: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
			},
			typescript: true,
		}),
		tsconfigPaths(),
		react(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setup.ts'],
	},
});
