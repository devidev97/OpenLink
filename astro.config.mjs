// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			allowedHosts: ['links.devidev.work', 'dfds.devidev.app'],
		},
		preview: {
			allowedHosts: ['links.devidev.work', 'dfds.devidev.app'],
		},
	},
});
