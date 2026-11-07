// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

const env = loadEnv('development', '.', '');

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sanity({
		projectId: env.VITE_PROJECT_ID,
		dataset: env.VITE_DATASET_NAME,
		useCdn: false,
		apiVersion: '2026-09-28'
	}), react()]
});