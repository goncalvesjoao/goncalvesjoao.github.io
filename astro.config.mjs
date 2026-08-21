// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		build: {
			// Semanticus is already minified; Lightning CSS rejects the bundle's
			// generated file-selector-button + aria-busy selector during re-minification.
			cssMinify: false,
		},
	},
});
