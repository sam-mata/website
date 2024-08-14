import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: 5000,
	},
};

export default config;
