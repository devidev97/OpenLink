// @ts-check
import { defineConfig } from 'astro/config';
import { allowedHosts } from './allowed-hosts.mjs';

// https://astro.build/config
export default defineConfig({
	server: {
		headers: {
			'X-Frame-Options': 'DENY',
			'Content-Security-Policy': "frame-ancestors 'none'",
		},
	},
	vite: {
		server: {
			allowedHosts,
		},
		preview: {
			allowedHosts,
		},
	},
});
