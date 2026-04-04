// @ts-check
import { defineConfig } from 'astro/config';
import { allowedHosts } from './allowed-hosts.mjs';

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			allowedHosts,
		},
		preview: {
			allowedHosts,
		},
	},
});
