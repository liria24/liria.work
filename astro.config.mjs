// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import compressor from 'astro-compressor';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'http://liria.work',
    output: 'static',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    image: {
        domains: ['images.microcms-assets.io', 'avatars.githubusercontent.com'],
    },
    integrations: [tailwind({ applyBaseStyles: false }), icon(), compressor()],
});
