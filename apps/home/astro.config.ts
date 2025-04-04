// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import compressor from 'astro-compressor';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://liria.work',
    output: 'static',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    image: {
        domains: ['images.microcms-assets.io', 'avatars.githubusercontent.com'],
    },
    integrations: [icon(), compressor()],
    vite: {
        plugins: [tailwindcss()],
    },
});
