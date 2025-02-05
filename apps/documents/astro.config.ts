// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import remarkToc from 'remark-toc';
import remarkBreaks from 'remark-breaks';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://documents.liria.work',
    output: 'static',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    prefetch: {
        prefetchAll: true,
    },
    image: {
        domains: ['images.microcms-assets.io'],
    },
    integrations: [
        mdx(),
        vue(),
        react(),
        icon(),
        compressor(),
        robotsTxt({
            policy: [{ userAgent: '*', allow: '/' }],
        }),
        sitemap(),
    ],
    markdown: {
        remarkPlugins: [remarkToc, remarkBreaks],
        gfm: true,
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
