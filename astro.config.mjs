import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://edgevision.io.vn',
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: ['dev.anhtt.io.vn']
        }
    },
    integrations: [react()],
});
